/* An AI model as the reader, through OpenRouter. The model gets the report as printed (text lines, the CSV, or the FHIR
   JSON) and the list of markers with the conventional unit each is reported in, the way an app would hold its catalog, and
   returns every result it finds as JSON. Values are asked for in the conventional unit, so a model that converts SI units
   has to get the arithmetic right, and the critical-value check runs on what it returned.

     OPENROUTER_API_KEY=… MODEL=anthropic/claude-sonnet-5.5 BUDGET_USD=1 npx tsx run.mts --reader readers/openrouter.mts --n 40 --seed 4

   Spend is counted from OpenRouter's reported cost per call; past BUDGET_USD every further report fails fast (and is left
   out of the scores, counted as a crash). Temperature 0, one retry. */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { ANALYTES, type Report } from "../generate.mts";
import type { Parsed, ReadRow } from "../run.mts";

const KEY = process.env.OPENROUTER_API_KEY;
const MODEL = process.env.MODEL;
const BUDGET = Number(process.env.BUDGET_USD ?? "1");
if (!KEY || !MODEL) throw new Error("set OPENROUTER_API_KEY and MODEL");
let spent = 0, calls = 0;
process.on("exit", () => console.error(`[${MODEL}] ${calls} calls, $${spent.toFixed(3)}`));

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

const textOf = (r: Report) => (r.kind === "lines" ? r.lines!.join("\n") : r.kind === "csv" ? r.text! : JSON.stringify(r.json));

async function call(r: Report): Promise<string> {
  if (spent >= BUDGET) throw new Error("budget reached");
  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST", signal: AbortSignal.timeout(180_000),
    headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json", "X-Title": "lab-reading-bench" },
    body: JSON.stringify({ model: MODEL, temperature: 0, max_tokens: 8000, usage: { include: true }, messages: [{ role: "system", content: SYSTEM }, { role: "user", content: textOf(r) }] }),
  });
  const j = (await res.json()) as { choices?: { message?: { content?: string } }[]; usage?: { cost?: number }; error?: { message?: string } };
  calls++;
  spent += j.usage?.cost ?? 0;
  if (!res.ok || j.error) throw new Error(`http ${res.status}: ${j.error?.message ?? ""}`.slice(0, 120));
  return j.choices?.[0]?.message?.content ?? "";
}

// every reply is kept (cache/<model>/<report id>.txt): a re-run reads the reply instead of paying for it again, and anyone
// can check what the model said
const CACHE = join(import.meta.dirname, "..", "cache", MODEL.replace(/\//g, "_"));
mkdirSync(CACHE, { recursive: true });

export default async function read(r: Report): Promise<Parsed> {
  const file = join(CACHE, `${r.id}.txt`);
  let text = existsSync(file) ? readFileSync(file, "utf8") : "";
  if (!text) for (let attempt = 0; attempt < 2; attempt++) {
    try { text = await call(r); writeFileSync(file, text); break; } catch (e) { if (attempt || /budget/.test(String(e))) throw e; }
  }
  const m = text.match(/\{[\s\S]*\}/);
  if (!m) throw new Error("no JSON in the reply");
  const j = JSON.parse(m[0]) as { takenISO?: string | null; rows?: Partial<ReadRow>[] };
  const n = (x: unknown) => (typeof x === "number" && Number.isFinite(x) ? x : typeof x === "string" && x.trim() && Number.isFinite(Number(x)) ? Number(x) : null);
  const rows: ReadRow[] = (j.rows ?? []).filter((x) => x && typeof x.slug === "string" && n(x.value) !== null).map((x) => ({
    slug: x.slug!, printed: x.slug!, value: n(x.value)!, unit: String(x.unit ?? ""), low: n(x.low), high: n(x.high),
    ...(x.flag === "H" || x.flag === "L" ? { flag: x.flag } : {}),
  }));
  // a marker returned twice: the first wins, as in the rule-based reader
  const seen = new Set<string>();
  return { rows: rows.filter((x) => (seen.has(x.slug) ? false : (seen.add(x.slug), true))), takenISO: j.takenISO ?? null };
}
