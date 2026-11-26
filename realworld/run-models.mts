/* An AI model reads the real-format sample reports through OpenRouter: every page of a report, as the 150-dpi page
   pictures prepare.py renders, in one request. Two prompts:

     MODE=catalog   the benchmark's own prompt, copied verbatim from readers/openrouter.mts (marker list with the
                    conventional unit for each; values asked for in that unit, so SI values must be converted)
     MODE=printed   transcribe every numeric result exactly as printed (name, value, unit, range, flag), no conversion

     OPENROUTER_API_KEY=… MODEL=anthropic/claude-haiku-5.5 MODE=printed BUDGET_USD=4 npx tsx realworld/run-models.mts

   Temperature 0, one retry. Every reply is kept in realworld/cache/<model>/<mode>/<report id>.txt and a re-run reads it
   instead of paying again. Spend is OpenRouter's reported cost per call, added up in realworld/cache/spend.json; past
   BUDGET_USD (that file's total, all runs together) no further call is made. Parsed rows go to results/raw/. */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { ANALYTES } from "../generate.mts";

const HERE = import.meta.dirname;
const KEY = process.env.OPENROUTER_API_KEY, MODEL = process.env.MODEL, MODE = process.env.MODE ?? "printed";
const BUDGET = Number(process.env.BUDGET_USD ?? "8");
if (!MODEL || !["catalog", "printed"].includes(MODE)) throw new Error("set MODEL and MODE=catalog|printed");

// readers/openrouter.mts, SYSTEM, verbatim (25 Nov 2026)
const CATALOG = ANALYTES.map((a) => `${a.slug}: ${a.names.US[a.names.US.length - 1]} (report in ${a.unit})`).join("\n");
const SYSTEM_CATALOG = `You read laboratory reports. Extract every test result printed on the report.

Return only JSON: {"takenISO": "YYYY-MM-DD" or null, "rows": [{"slug": string, "value": number, "unit": string, "low": number|null, "high": number|null, "flag": "H"|"L"|null}]}

- slug: the matching id from this list. Skip results that match none of them.
${CATALOG}
- value, low, high: the result and the lab's reference range, converted to the unit given for that slug if the lab printed another unit (for example mmol/L to mg/dL, µmol/L to mg/dL, g/L to g/dL, mmol/mol HbA1c to %, L/L haematocrit to %). Blood counts printed as ×10^9/L, 10^3/µL, K/uL, /nl and similar are the same number as thousand/uL: keep the number. Read decimal commas correctly (a German "2,24" is 2.24). low or high is null when the range has no such bound.
- unit: the unit of the value you return.
- flag: the lab's own printed flag, H or L, only if the lab printed one with a direction (H, HIGH, ↑, + mean H; L, LOW, ↓, - mean L). A star alone has no direction: then use the range. Otherwise null.
- takenISO: the date the sample was collected, if printed.
Return nothing but the JSON object.`;

const SYSTEM_PRINTED = `You read laboratory reports. Transcribe every numeric test result exactly as it is printed.

Return only JSON: {"rows": [{"name": string, "value": string, "unit": string|null, "range": string|null, "flag": string|null}]}

- One row per printed result whose value is a number (with a < or > sign if one is printed). Skip results that are words (negative, positive, absent, a colour), headings, comments, interpretation or classification tables, risk scores computed from questionnaire data, and patient or administrative details.
- name: the test name as printed. value: the result exactly as printed, character for character (keep thousands separators, leading zeros, decimal commas and any < or > sign). unit: as printed, or null if none is printed on that row. range: the reference range or limit exactly as printed, or null. flag: the lab's own marker beside the result as printed (for example H, L, High, Low, +, -, *), or null if there is none.
- Do not convert units, do not compute anything, do not correct what is printed.
Return nothing but the JSON object.`;

const reports = JSON.parse(readFileSync(join(HERE, "reports.json"), "utf8")) as { id: string; source: string; pages: number[] }[];
const spendFile = join(HERE, "cache", "spend.json");
const spend = existsSync(spendFile) ? JSON.parse(readFileSync(spendFile, "utf8")) as { total: number; byModel: Record<string, number>; calls: number } : { total: 0, byModel: {}, calls: 0 };
const cacheDir = join(HERE, "cache", MODEL.replace(/\//g, "_"), MODE);
mkdirSync(cacheDir, { recursive: true });

async function call(r: (typeof reports)[number]): Promise<string> {
  if (!KEY) throw new Error("OPENROUTER_API_KEY not set (and no cached reply)");
  if (spend.total >= BUDGET) throw new Error(`budget reached ($${spend.total.toFixed(3)})`);
  const images = r.pages.map((p) => ({ type: "image_url", image_url: { url: `data:image/png;base64,${readFileSync(join(HERE, "sources", r.source, "pages", `p${p}.png`)).toString("base64")}` } }));
  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST", signal: AbortSignal.timeout(300_000),
    headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json", "X-Title": "lab-reading-bench" },
    body: JSON.stringify({ model: MODEL, temperature: 0, max_tokens: 12000, usage: { include: true }, messages: [
      { role: "system", content: MODE === "catalog" ? SYSTEM_CATALOG : SYSTEM_PRINTED },
      { role: "user", content: [{ type: "text", text: `The lab report (${r.pages.length} page${r.pages.length > 1 ? "s" : ""}):` }, ...images] },
    ] }),
  });
  const j = (await res.json()) as { choices?: { message?: { content?: string } }[]; usage?: { cost?: number }; error?: { message?: string } };
  const cost = j.usage?.cost ?? 0;
  spend.total += cost; spend.calls++; spend.byModel[`${MODEL} ${MODE}`] = (spend.byModel[`${MODEL} ${MODE}`] ?? 0) + cost;
  writeFileSync(spendFile, JSON.stringify(spend, null, 1) + "\n");
  if (!res.ok || j.error) throw new Error(`http ${res.status}: ${j.error?.message ?? ""}`.slice(0, 160));
  return j.choices?.[0]?.message?.content ?? "";
}

const out: Record<string, unknown> = {};
for (const r of reports) {
  const file = join(cacheDir, `${r.id}.txt`);
  let text = existsSync(file) ? readFileSync(file, "utf8") : null;
  if (text === null) {
    for (let attempt = 0; attempt < 2 && text === null; attempt++) {
      try { text = await call(r); writeFileSync(file, text); } catch (e) { if (attempt || String(e).includes("budget") || String(e).includes("not set")) { out[r.id] = { error: String(e).slice(0, 200) }; break; } }
    }
  }
  if (text === null) { console.error(`${r.id}: ${JSON.stringify(out[r.id])}`); continue; }
  const m = text.match(/\{[\s\S]*\}/);
  let j: { rows?: Record<string, unknown>[]; takenISO?: string | null } = {};
  try { if (m) j = JSON.parse(m[0]); } catch { j = {}; }
  const n = (x: unknown) => (typeof x === "number" && Number.isFinite(x) ? x : typeof x === "string" && x.trim() && Number.isFinite(Number(x)) ? Number(x) : null);
  const rows = (j.rows ?? []).filter((x) => x && typeof x === "object").map((x) => MODE === "catalog"
    ? { slug: String(x.slug ?? ""), printed: String(x.slug ?? ""), value: n(x.value), unit: String(x.unit ?? ""), low: n(x.low), high: n(x.high), flag: x.flag === "H" || x.flag === "L" ? x.flag : null }
    : { printed: String(x.name ?? ""), value_text: x.value === null || x.value === undefined ? "" : String(x.value), unit: x.unit === null || x.unit === undefined ? null : String(x.unit), range: x.range === null || x.range === undefined ? null : String(x.range), flag: x.flag === null || x.flag === undefined || x.flag === "" ? null : String(x.flag) });
  out[r.id] = { rows, takenISO: j.takenISO ?? null, parsed: !!m };
  console.error(`${r.id}: ${rows.length} rows`);
}
mkdirSync(join(HERE, "results", "raw"), { recursive: true });
writeFileSync(join(HERE, "results", "raw", `${MODEL.replace(/\//g, "_")}-${MODE}.json`), JSON.stringify(out, null, 1) + "\n");
console.error(`spend so far (all runs): $${spend.total.toFixed(3)} in ${spend.calls} calls`);
