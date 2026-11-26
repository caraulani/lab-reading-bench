/* Per-report scores for the preregistered runs, re-made offline from the cached replies, for the statistics in stats/.
   run.mts prints totals only; the cluster bootstrap needs each report's outcomes, so this file scores every report the way
   run.mts does and keeps the per-report numbers.

   Two pieces are copied rather than imported, because run.mts runs as a script when imported and readers/openrouter.mts
   needs an API key and one MODEL per process: scoreRow (from run.mts) and the reply parser (from readers/openrouter.mts as
   used for the preregistered runs). checkTotals() compares the re-made totals with the published results/*.md, so a copy
   that drifts from the harness shows up as a mismatch instead of a silently different number.

   Readers:
     - a model: its cached replies in cache/<dir>/<report id>.txt. No reply file means the call never returned (budget cap,
       refused call), which run.mts counts as a crash and leaves out. DeepSeek V4 Flash is the exception: its 17 empty
       replies were not written to the cache by the reader of 18 Nov (results/…deepseek…-seed5 shows 0 crashes and counts
       each empty reply as every result missed), so a missing file is read as an empty reply for it.
     - the rule-based reader: its code is not in this repository. With LIFEFROM_DIR set to a LifeFrom checkout it is run
       on the printed text through readers/lifefrom-local.mts (checked on 26 Nov 2026: the LifeFrom checkout of that day
       gives exactly the published seed-5 text totals). Without LIFEFROM_DIR those rows are skipped. Its image runs
       (OCR + rules, results/*-lifefrom-file-*) are not re-made: the same module on the same pictures on 26 Nov 2026 gave
       different totals from the published files (the app's photo path has changed since 17-18 Nov, or those runs used a
       pipeline not recorded here), so only the
       published totals of those runs are used (stats/differences.mts) and they get no bootstrap interval. */
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { ANALYTES, makeVariants, type Report, type TruthRow } from "../generate.mts";
import { isCritical } from "../critical.mts";

export const ROOT = join(import.meta.dirname, "..");
type ReadRow = { slug: string; printed: string; value: number; unit: string; low: number | null; high: number | null; flag?: "H" | "L"; text?: string };
type Parsed = { rows: ReadRow[]; takenISO: string | null };

/* ---------- scoring: a copy of scoreRow in run.mts ---------- */
const unitKey = (u: string) => u.toLowerCase().replace(/[µμ]/g, "u").replace(/mcg/g, "ug").replace(/×/g, "x").replace(/\s/g, "");
const DP = Object.fromEntries(ANALYTES.map((a) => [a.slug, a.dp]));
const CONV = Object.fromEntries(ANALYTES.map((a) => [a.slug, a.unit]));
let step = 0;
const near = (a: number | null, b: number | null) => (a === null || b === null ? a === b : Math.abs(a - b) <= Math.max(0.007 * Math.abs(b), 0.006, step));
type Outcome = "ok" | "unit" | "unconverted" | "wrong" | "miss";
function outcomeOf(t: TruthRow, row: ReadRow | undefined): Outcome {
  if (!row || row.text !== undefined) return "miss";
  step = t.converted ? 0.5 * 10 ** -(DP[t.slug] ?? 2) + 1e-9 : 0;
  const asExpected = near(row.value, t.expected.value), asPrinted = near(row.value, t.printed.value);
  if (asExpected) return unitKey(row.unit) === unitKey(t.expected.unit) || unitKey(row.unit) === unitKey(CONV[t.slug] ?? "") ? "ok" : "unit";
  if (t.converted && asPrinted && unitKey(row.unit) === unitKey(t.printed.unit)) return "unconverted";
  return "wrong";
}

/* ---------- the reply parser of readers/openrouter.mts (preregistered runs) ---------- */
export function parseReply(text: string): Parsed {
  const m = text.match(/\{[\s\S]*\}/);
  let j: { takenISO?: string | null; rows?: Partial<ReadRow>[] } = {};
  try { if (m) j = JSON.parse(m[0]); } catch { j = {}; }
  const n = (x: unknown) => (typeof x === "number" && Number.isFinite(x) ? x : typeof x === "string" && x.trim() && Number.isFinite(Number(x)) ? Number(x) : null);
  const rows: ReadRow[] = (j.rows ?? []).filter((x) => x && typeof x.slug === "string" && n(x.value) !== null).map((x) => ({
    slug: x.slug!, printed: x.slug!, value: n(x.value)!, unit: String(x.unit ?? ""), low: n(x.low), high: n(x.high),
    ...(x.flag === "H" || x.flag === "L" ? { flag: x.flag } : {}),
  }));
  const seen = new Set<string>();
  return { rows: rows.filter((x) => (seen.has(x.slug) ? false : (seen.add(x.slug), true))), takenISO: j.takenISO ?? null };
}

/* ---------- per-report scores ---------- */
export type ReportScore = {
  id: string; group: string; crashed: boolean;
  rows: number; ok: number; wrong: number; miss: number; unit: number; unconverted: number;
  critTruth: number; critCaught: number; falseAlarm: number;
  markers: Record<string, boolean>; // marker slug -> read right on this report
};
export function scoreReport(r: Report, p: Parsed | null): ReportScore {
  const s: ReportScore = { id: r.id, group: r.tags.group ?? r.id, crashed: p === null, rows: 0, ok: 0, wrong: 0, miss: 0, unit: 0, unconverted: 0, critTruth: 0, critCaught: 0, falseAlarm: 0, markers: {} };
  if (!p) return s;
  for (const t of r.truth) {
    const row = p.rows.find((x) => x.slug === t.slug);
    const o = outcomeOf(t, row);
    s.rows++; s[o]++;
    s.markers[t.slug] = o === "ok";
    const flagged = !!row && row.text === undefined && isCritical(t.slug, row.value);
    if (t.critical) { s.critTruth++; if (flagged) s.critCaught++; } else if (flagged) s.falseAlarm++;
  }
  for (const x of p.rows) if (!r.truth.some((t) => t.slug === x.slug) && x.text === undefined && isCritical(x.slug, x.value)) s.falseAlarm++;
  return s;
}

/* ---------- the report sets of the preregistered test ---------- */
const lines = (rs: Report[]) => rs.filter((r) => r.kind === "lines");
export const SETS = {
  text5: () => makeVariants(60, 5, 5), // step 2: 60 sets x 5 printings
  text5first30: () => makeVariants(30, 5, 5), // step 3: the first 30 sets
  img5: () => lines(makeVariants(24, 5, 5)), // 97 printed reports, as images.mts made them
  img6: () => lines(makeVariants(10, 5, 6)), // 43 held-out printed reports
};

/* ---------- readers ---------- */
export type Reader = { name: string; read: (r: Report) => Promise<Parsed | null> };
export const MODELS: Record<string, string> = {
  "Claude Haiku 5.5": "anthropic_claude-haiku-5.5", "GPT-5.6 Luna": "openai_gpt-5.6-luna", "Llama 4 Maverick": "meta-llama_llama-4-maverick",
  "DeepSeek V4 Flash": "deepseek_deepseek-v4-flash", "Claude Sonnet 5.5": "anthropic_claude-sonnet-5.5", "Gemini 3.8 Flash": "google_gemini-3.8-flash",
};
export function cached(name: string, style: "" | "clean" | "photo" = ""): Reader {
  const dir = join(ROOT, "cache", MODELS[name] + (style ? `-${style}` : ""));
  const missingIsEmpty = name === "DeepSeek V4 Flash" && !style;
  return {
    name, read: async (r) => {
      const f = join(dir, `${r.id}.txt`);
      if (!existsSync(f)) return missingIsEmpty ? { rows: [], takenISO: null } : null;
      const t = readFileSync(f, "utf8");
      return parseReply(t === "<empty reply>" ? "" : t);
    },
  };
}
let local: ((r: Report & { files?: string[] }) => Promise<Parsed>) | null = null;
export const hasRules = () => !!process.env.LIFEFROM_DIR;
async function rules() { return (local ??= (await import(pathToFileURL(join(ROOT, "readers", "lifefrom-local.mts")).href)).default); }
export function ruleBased(): Reader {
  return { name: "Rule-based reader", read: async (r) => (await rules())(r) };
}
export async function scoreAll(reports: Report[], reader: Reader): Promise<ReportScore[]> {
  const out: ReportScore[] = [];
  for (const r of reports) {
    let p: Parsed | null;
    try { p = await reader.read(r); } catch { p = null; }
    out.push(scoreReport(r, p));
  }
  return out;
}

/* ---------- totals, and the published totals they must match ---------- */
export function totals(rs: ReportScore[]) {
  const t = { reports: rs.length, crashed: 0, rows: 0, ok: 0, wrong: 0, miss: 0, critTruth: 0, critCaught: 0, falseAlarm: 0, invN: 0, invAll: 0 };
  for (const s of rs) { if (s.crashed) t.crashed++; t.rows += s.rows; t.ok += s.ok; t.wrong += s.wrong; t.miss += s.miss; t.critTruth += s.critTruth; t.critCaught += s.critCaught; t.falseAlarm += s.falseAlarm; }
  const inv = invariance(rs);
  t.invN = inv.n; t.invAll = inv.all;
  return t;
}
/** format invariance as run.mts counts it: of the (set, marker) pairs read on at least two printings, how many were right on every one */
export function invariance(rs: ReportScore[]) {
  const by = new Map<string, boolean[]>();
  for (const s of rs) for (const [slug, ok] of Object.entries(s.markers)) { const k = `${s.group}|${slug}`; (by.get(k) ?? by.set(k, []).get(k)!).push(ok); }
  let n = 0, all = 0;
  for (const v of by.values()) if (v.length >= 2) { n++; if (v.every(Boolean)) all++; }
  return { n, all, by };
}
/** the totals printed in a results/*.md file */
export function published(file: string) {
  const s = readFileSync(join(ROOT, "results", file), "utf8");
  const num = (re: RegExp) => Number(s.match(re)?.[1] ?? NaN);
  return {
    rows: num(/(\d+) rows with a known answer/), ok: num(/\| ok \| (\d+) \|/), wrong: num(/\| wrong \| (\d+) \|/), miss: num(/\| miss \| (\d+) \|/),
    crashed: num(/\*\*Crashes:\*\* (\d+)/) || 0, critCaught: num(/\*\*Critical values:\*\* (\d+) of/), critTruth: num(/\*\*Critical values:\*\* \d+ of (\d+)/),
    falseAlarm: num(/False critical alarms: (\d+)/), invN: num(/of (\d+) markers, read right/), invAll: num(/read right in every printing (\d+)/),
  };
}
export function checkTotals(rs: ReportScore[], file: string): string[] {
  const a = totals(rs), b = published(file);
  return (Object.keys(b) as (keyof typeof b)[]).filter((k) => a[k] !== b[k]).map((k) => `${k} ${a[k]} (published ${b[k]})`);
}

/* ---------- the runs behind the README's numbers ---------- */
const R = (m: string, kind: string) => `2026-11-18-openrouter-${MODELS[m]}${kind}`;
export const RUNS: { key: string; reader: string; style: "" | "clean" | "photo"; set: keyof typeof SETS; file: string }[] = [
  { key: "rules-text5", reader: "Rule-based reader", style: "", set: "text5", file: "2026-11-17-lifefrom-reader-after-lifefrom-reader-text-seed5.md" },
  ...["Claude Haiku 5.5", "GPT-5.6 Luna", "Llama 4 Maverick", "DeepSeek V4 Flash"].map((m) => ({ key: `${m}-text5`, reader: m, style: "" as const, set: "text5" as const, file: `${R(m, "")}-seed5.md` })),
  ...["Claude Sonnet 5.5", "Gemini 3.8 Flash"].map((m) => ({ key: `${m}-text5`, reader: m, style: "" as const, set: "text5first30" as const, file: `${R(m, "")}-seed5.md` })),
  { key: "rules-text5first30", reader: "Rule-based reader", style: "", set: "text5first30", file: "" },
  ...(["clean", "photo"] as const).flatMap((st) => [
    ...["Claude Haiku 5.5", "GPT-5.6 Luna", "Llama 4 Maverick", "Gemini 3.8 Flash"].flatMap((m) => [
      { key: `${m}-${st}5`, reader: m, style: st, set: "img5" as const, file: `${R(m, `-${st}`)}-seed5-kind-lines.md` },
      { key: `${m}-${st}6`, reader: m, style: st, set: "img6" as const, file: `${R(m, `-${st}`)}-seed6-kind-lines.md` },
    ]),
  ]),
];

/** score every run (the rule-based ones only with LIFEFROM_DIR), and check each against its published results file */
export async function scoreRuns(log = console.error) {
  const out: Record<string, { scores: ReportScore[]; check: string[] | null }> = {};
  for (const run of RUNS) {
    if (run.reader === "Rule-based reader" && !hasRules()) continue;
    const reader = run.reader === "Rule-based reader" ? ruleBased() : cached(run.reader, run.style);
    const scores = await scoreAll(SETS[run.set](), reader);
    const check = run.file ? checkTotals(scores, run.file) : null;
    out[run.key] = { scores, check };
    log(`  ${run.key.padEnd(32)} ${check === null ? "no published file" : check.length ? "DIFFERS: " + check.join(", ") : "matches " + run.file}`);
  }
  return out;
}
