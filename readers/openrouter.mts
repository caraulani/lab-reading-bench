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
   instead of paying for it again, and anyone can check what the model said. */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { ANALYTES, type Report } from "../generate.mts";
import type { Parsed, ReadRow } from "../run.mts";

const KEY = process.env.OPENROUTER_API_KEY;
const MODEL = process.env.MODEL;
const BUDGET = Number(process.env.BUDGET_USD ?? "1");
const MIN_BALANCE = Number(process.env.MIN_BALANCE_USD ?? "5");
const IMAGE = process.env.INPUT === "image" ? process.env.IMAGE_STYLE ?? "clean" : null;
if (!KEY || !MODEL) throw new Error("set OPENROUTER_API_KEY and MODEL");
let spent = 0, calls = 0, stopped = "";
process.on("exit", () => console.error(`[${MODEL}${IMAGE ? ` ${IMAGE}` : ""}] ${calls} calls, $${spent.toFixed(3)}${stopped ? ` (stopped: ${stopped})` : ""}`));

const ROOT = join(import.meta.dirname, "..");
const CACHE = join(ROOT, "cache", MODEL.replace(/\//g, "_") + (IMAGE ? `-${IMAGE}` : ""));
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

async function call(r: Report): Promise<string> {
  if (stopped) throw new Error(stopped);
  if (spent >= BUDGET) { stopped = "budget reached"; throw new Error(stopped); }
  if (calls % 20 === 0 && !(await balanceOk())) { stopped = `account balance below $${MIN_BALANCE}`; throw new Error(stopped); }
  const user = IMAGE
    ? [{ type: "text", text: "The lab report:" }, { type: "image_url", image_url: { url: imageUrl(r.id) } }]
    : textOf(r);
  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST", signal: AbortSignal.timeout(240_000),
    headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json", "X-Title": "lab-reading-bench" },
    body: JSON.stringify({ model: MODEL, temperature: 0, max_tokens: 8000, usage: { include: true }, messages: [{ role: "system", content: SYSTEM }, { role: "user", content: user }] }),
  });
  const j = (await res.json()) as { choices?: { message?: { content?: string } }[]; usage?: { cost?: number }; error?: { message?: string } };
  calls++;
  spent += j.usage?.cost ?? 0;
  if (!res.ok || j.error) throw new Error(`http ${res.status}: ${j.error?.message ?? ""}`.slice(0, 120));
  return j.choices?.[0]?.message?.content ?? "";
}

export default async function read(r: Report): Promise<Parsed> {
  const file = join(CACHE, `${r.id}.txt`);
  const EMPTY = "<empty reply>";
  let text = existsSync(file) ? readFileSync(file, "utf8") : "";
  const cached = existsSync(file);
  if (!cached && process.env.OFFLINE) throw new Error("not in the cache (offline)");
  if (text === EMPTY) text = "";
  else if (!cached) for (let attempt = 0; attempt < 2; attempt++) {
    try { text = await call(r); writeFileSync(file, text || EMPTY); break; } catch (e) { if (attempt || stopped) throw e; }
  }
  // a reply with no usable JSON reads nothing: every result on the report counts as missed (not left out of the scores)
  const m = text.match(/\{[\s\S]*\}/);
  let j: { takenISO?: string | null; rows?: Partial<ReadRow>[] } = {};
  try { if (m) j = JSON.parse(m[0]); } catch { j = {}; }
  const n = (x: unknown) => (typeof x === "number" && Number.isFinite(x) ? x : typeof x === "string" && x.trim() && Number.isFinite(Number(x)) ? Number(x) : null);
  const rows: ReadRow[] = (j.rows ?? []).filter((x) => x && typeof x.slug === "string" && n(x.value) !== null).map((x) => ({
    slug: x.slug!, printed: x.slug!, value: n(x.value)!, unit: String(x.unit ?? ""), low: n(x.low), high: n(x.high),
    ...(x.flag === "H" || x.flag === "L" ? { flag: x.flag } : {}),
  }));
  // a marker returned twice: the first wins, as in the rule-based reader
  const seen = new Set<string>();
  return { rows: rows.filter((x) => (seen.has(x.slug) ? false : (seen.add(x.slug), true))), takenISO: j.takenISO ?? null };
}
