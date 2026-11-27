/* An AI model as the reader, through OpenRouter. The model gets the report as printed (the text lines, the CSV, the FHIR
   JSON, or, with INPUT=image, a picture of the printed page) and the list of markers with the conventional unit each is
   reported in, the way an app would hold its catalog, and returns every result it finds as JSON. Values are asked for in the
   conventional unit, so a model that converts SI units has to get the arithmetic right, and the critical-value check runs
   on what it returned.

     OPENROUTER_API_KEY=… MODEL=anthropic/claude-sonnet-5.5 BUDGET_USD=1 npx tsx run.mts --reader readers/openrouter.mts --n 40 --seed 4
     … INPUT=image IMAGE_STYLE=photo …   reads images/<style>/<report id>.png or .jpg (made by images.mts)

   Spend is counted from OpenRouter's reported cost per call. Past BUDGET_USD, or when the account's balance falls below
   MIN_BALANCE_USD (default 5), every further report fails fast and is left out of the scores (counted as a crash).
   Temperature 0, one retry. Every reply is kept in cache/<model>[-<image style>]/<report id>.txt: a re-run reads the reply
   instead of paying for it again, and anyone can check what the model said.

   Added 26 Nov 2026, after the preregistered runs (exploratory; the preregistered prompt and settings are unchanged):
     - every new call also writes cache/<dir>/<report id>.meta.json: OpenRouter's response id, the model that answered
       (the response's `model` field), the `provider` that served it, the usage (tokens and cost) and the time. Replies
       cached before this have no .meta.json and are read as before.
     - PROMPT=printed asks for every value, range and unit exactly as printed, with no conversion (readers/convert.mts
       converts them in code afterwards). Its replies go to cache/<model>[-<image style>]-printed/.
     - CACHE_TAG=rep2 keeps a run's replies in cache/<model>[...]-rep2/: an independent repeat that never reads another
       run's replies.
     - a corpus report (run.mts --corpus … --input photo, corpus/score.mts) sends each page picture in Report.files.
       INPUT=image IMAGE_STYLE=corpus-photo (or corpus-scan_clean …) names its cache directory. */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { ANALYTES, type Report } from "../generate.mts";
import type { Parsed } from "../run.mts";
import { parseReply } from "./parse-reply.mts";

const KEY = process.env.OPENROUTER_API_KEY;
const MODEL = process.env.MODEL;
const BUDGET = Number(process.env.BUDGET_USD ?? "1");
const MIN_BALANCE = Number(process.env.MIN_BALANCE_USD ?? "5");
const IMAGE = process.env.INPUT === "image" ? process.env.IMAGE_STYLE ?? "clean" : null;
const PRINTED = process.env.PROMPT === "printed";
if (process.env.PROMPT && !PRINTED) throw new Error("PROMPT is unset (the preregistered prompt) or printed");
const TAG = process.env.CACHE_TAG ?? "";
if (!KEY || !MODEL) throw new Error("set OPENROUTER_API_KEY and MODEL");
let spent = 0, calls = 0, stopped = "";
process.on("exit", () => console.error(`[${MODEL}${IMAGE ? ` ${IMAGE}` : ""}] ${calls} calls, $${spent.toFixed(3)}${stopped ? ` (stopped: ${stopped})` : ""}`));

const ROOT = join(import.meta.dirname, "..");
const CACHE = join(ROOT, "cache", MODEL.replace(/\//g, "_") + (IMAGE ? `-${IMAGE}` : "") + (PRINTED ? "-printed" : "") + (TAG ? `-${TAG}` : ""));
mkdirSync(CACHE, { recursive: true });

const CATALOG = ANALYTES.map((a) => `${a.slug}: ${a.names.US[a.names.US.length - 1]} (report in ${a.unit})`).join("\n");
const SYSTEM = `You read laboratory reports. Extract every test result printed on the report.

Return only JSON: {"takenISO": "YYYY-MM-DD" or null, "rows": [{"slug": string, "value": number, "unit": string, "low": number|null, "high": number|null, "flag": "H"|"L"|null}]}

- slug: the matching id from this list. Skip results that match none of them.
${CATALOG}
- value, low, high: the result and the lab's reference range, converted to the unit given for that slug if the lab printed another unit (for example mmol/L to mg/dL, µmol/L to mg/dL, g/L to g/dL, mmol/mol HbA1c to %, L/L haematocrit to %). Blood counts printed as ×10^9/L, 10^3/µL, K/uL, /nl and similar are the same number as thousand/uL: keep the number. Read decimal commas correctly (a German "2,24" is 2.24). low or high is null when the range has no such bound.
- unit: the unit of the value you return.
- flag: the lab's own printed flag, H or L, only if the lab printed one with a direction (H, HIGH, ↑, + mean H; L, LOW, ↓, - mean L). A star alone has no direction: then use the range. Otherwise null.
- takenISO: the date the sample was collected, if printed.
Return nothing but the JSON object.`;

// the reading-only variant (exploratory, 26 Nov 2026): the same task with every conversion taken out
const CATALOG_PRINTED = ANALYTES.map((a) => `${a.slug}: ${a.names.US[a.names.US.length - 1]}`).join("\n");
const SYSTEM_PRINTED = `You read laboratory reports. Extract every test result printed on the report.

Return only JSON: {"takenISO": "YYYY-MM-DD" or null, "rows": [{"slug": string, "value": number, "unit": string, "low": number|null, "high": number|null, "flag": "H"|"L"|null}]}

- slug: the matching id from this list. Skip results that match none of them.
${CATALOG_PRINTED}
- value, low, high: the result and the lab's reference range exactly as printed, in the unit the lab printed. Do not convert anything. Read decimal commas correctly (a German "2,24" is 2.24; a US "2,240" is 2240). low or high is null when the range has no such bound.
- unit: the unit exactly as the lab printed it for this result (copy its spelling), or "" if none is printed.
- flag: the lab's own printed flag, H or L, only if the lab printed one with a direction (H, HIGH, ↑, + mean H; L, LOW, ↓, - mean L). A star alone has no direction: then use the range. Otherwise null.
- takenISO: the date the sample was collected, if printed.
Return nothing but the JSON object.`;

const dataUrl = (f: string) => `data:image/${f.endsWith(".png") ? "png" : "jpeg"};base64,${readFileSync(f).toString("base64")}`;
const imageUrl = (id: string) => {
  const png = join(ROOT, "images", IMAGE!, `${id}.png`), jpg = join(ROOT, "images", IMAGE!, `${id}.jpg`);
  const f = existsSync(png) ? png : jpg;
  return `data:image/${f.endsWith(".png") ? "png" : "jpeg"};base64,${readFileSync(f).toString("base64")}`;
};
const textOf = (r: Report) => (r.kind === "lines" ? r.lines!.join("\n") : r.kind === "csv" || r.kind === "hl7" ? r.text!.replace(/\r/g, "\n") : JSON.stringify(r.json));

// the account's balance, checked every 20 calls: the eval stops before it can starve anything else using the account
async function balanceOk(): Promise<boolean> {
  try {
    const j = (await (await fetch("https://openrouter.ai/api/v1/credits", { headers: { Authorization: `Bearer ${KEY}` } })).json()) as { data?: { total_credits: number; total_usage: number } };
    if (!j.data) return true;
    return j.data.total_credits - j.data.total_usage >= MIN_BALANCE;
  } catch { return true; }
}

type Meta = { id?: string; model?: string; provider?: string; created?: number; usage?: Record<string, unknown> };
async function call(r: Report & { files?: string[] }): Promise<{ text: string; meta: Meta }> {
  if (!IMAGE && r.files?.some((f) => /\.(png|jpe?g)$/i.test(f))) throw new Error("page pictures need INPUT=image (otherwise the transcript would be sent)");
  if (stopped) throw new Error(stopped);
  if (spent >= BUDGET) { stopped = "budget reached"; throw new Error(stopped); }
  if (calls % 20 === 0 && !(await balanceOk())) { stopped = `account balance below $${MIN_BALANCE}`; throw new Error(stopped); }
  const pages = IMAGE && r.files?.length ? r.files.filter((f) => /\.(png|jpe?g)$/i.test(f)) : null;
  const user = IMAGE
    ? pages?.length
      ? [{ type: "text", text: pages.length > 1 ? `The lab report (${pages.length} pages, in order):` : "The lab report:" }, ...pages.map((f) => ({ type: "image_url", image_url: { url: dataUrl(f) } }))]
      : [{ type: "text", text: "The lab report:" }, { type: "image_url", image_url: { url: imageUrl(r.id) } }]
    : textOf(r);
  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST", signal: AbortSignal.timeout(240_000),
    headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json", "X-Title": "lab-reading-bench" },
    body: JSON.stringify({ model: MODEL, temperature: 0, max_tokens: Number(process.env.MAX_TOKENS ?? 8000), usage: { include: true }, messages: [{ role: "system", content: PRINTED ? SYSTEM_PRINTED : SYSTEM }, { role: "user", content: user }] }),
  });
  const j = (await res.json()) as Meta & { choices?: { message?: { content?: string } }[]; usage?: { cost?: number }; error?: { message?: string } };
  calls++;
  spent += j.usage?.cost ?? 0;
  if (!res.ok || j.error) throw new Error(`http ${res.status}: ${j.error?.message ?? ""}`.slice(0, 120));
  return { text: j.choices?.[0]?.message?.content ?? "", meta: { id: j.id, model: j.model, provider: j.provider, created: j.created, usage: j.usage } };
}

export default async function read(r: Report): Promise<Parsed> {
  const file = join(CACHE, `${r.id}.txt`);
  const EMPTY = "<empty reply>";
  let text = existsSync(file) ? readFileSync(file, "utf8") : "";
  const cached = existsSync(file);
  if (!cached && process.env.OFFLINE) throw new Error("not in the cache (offline)");
  if (text === EMPTY) text = "";
  else if (!cached) for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const got = await call(r);
      text = got.text;
      writeFileSync(file, text || EMPTY);
      writeFileSync(join(CACHE, `${r.id}.meta.json`), JSON.stringify({ requested: MODEL, prompt: PRINTED ? "printed" : "preregistered", ...got.meta, saved: new Date().toISOString() }, null, 1) + "\n");
      break;
    } catch (e) { if (attempt || stopped) throw e; }
  }
  // a reply with no usable JSON reads nothing: every result on the report counts as missed (not left out of the scores)
  return parseReply(text);
}
