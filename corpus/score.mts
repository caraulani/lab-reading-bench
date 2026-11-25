/* lab-report-corpus: score a reader against the full answer key (25 Nov 2026).

     npx tsx corpus/score.mts --reader readers/<name>.mts --corpus corpus-out/full --split test --input pdf [--concurrency 6]

   run.mts scores what the benchmark always scored. This adds what only the corpus key has:
     - lines a reader must abstain on (a word in the value column, an ambiguous name without a unit): abstained, or read
       a number that is not there;
     - every hard-case tag, layout, page (first or later), and the held-out layout;
     - the comparator of a censored value ("<0.2"), when the reader returns one (ReadRow.comparator).
   A value is right when it equals the printed value (to the printed decimals) or the same result in the conventional unit
   (within 0.7% or half a step of the conventional precision). Earlier-date columns are scored only for readers that
   return a date per row (ReadRow.date); otherwise they are left out, as the benchmark's readers return current results.
   Writes results/corpus/<date>-score-<reader>-<split>-<input>.{md,json}. */
import { mkdirSync, writeFileSync } from "node:fs";
import { basename, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { loadCorpus, type AnswerRow, type CorpusReport } from "./load.mts";
import { BY } from "./catalog.mts";
import type { Parsed, ReadRow } from "../run.mts";

const arg = (k: string, d?: string) => { const i = process.argv.indexOf(`--${k}`); return i < 0 ? d : process.argv[i + 1]; };
const READER = arg("reader")!, DIR = resolve(arg("corpus", "corpus-out/sample")!), SPLIT = arg("split", "test")!, INPUT = arg("input", "text")!;
const C = Number(arg("concurrency", "4"));
const reader = (await import(pathToFileURL(resolve(READER)).href)).default as (r: CorpusReport) => Parsed | Promise<Parsed>;
let reports = loadCorpus(DIR, SPLIT, INPUT);
if (arg("limit")) reports = reports.slice(0, Number(arg("limit")));

type Pred = ReadRow & { comparator?: string | null; date?: string };
const got = new Map<string, Parsed | Error>();
{
  let next = 0;
  await Promise.all(Array.from({ length: C }, async () => { while (next < reports.length) { const r = reports[next++]; try { got.set(r.id, await reader(r)); } catch (e) { got.set(r.id, e as Error); } } }));
}

const decimals = (t: string) => { const m = t.replace(/\s/g, "").match(/[.,](\d+)\D*$/); return m ? m[1].length : 0; };
const near = (a: number, b: number, tol: number) => Math.abs(a - b) <= tol + 1e-9;
const ukey = (u: string | null | undefined) => (u ?? "").toLowerCase().replace(/[µμ]/g, "u").replace(/mcg/g, "ug").replace(/×/g, "x").replace(/\s/g, "");
function valueOk(k: AnswerRow, p: Pred): boolean {
  if (k.value !== null && near(p.value, k.value, 0.5 * 10 ** -decimals(k.value_text))) return true;
  if (k.value_conv === null) return false;
  const dp = BY[k.marker_slug]?.dp ?? 2;
  return near(p.value, k.value_conv, Math.max(0.007 * Math.abs(k.value_conv), 0.5 * 10 ** -dp));
}

type T = Record<string, number>;
const bump = (t: T, k: string) => { t[k] = (t[k] ?? 0) + 1; };
const total: T = {}, slices: Record<string, Record<string, T>> = {};
const add = (dim: string, v: string, o: string) => bump(((slices[dim] ??= {})[v] ??= {}), o);
let phantom = 0, crashed = 0, units = { ok: 0, of: 0 }, comps = { ok: 0, of: 0, unreported: 0 };
/* reading and converting, scored apart: a value returned as printed is a right reading whatever the unit; a value on a
   row printed in a unit other than the conventional one and returned in the conventional unit is a conversion, right or
   wrong; any other wrong number is a misreading */
const rc = { asPrinted: 0, convertedRight: 0, convertedWrong: 0, misread: 0, earlierColumn: 0, needConv: 0, returnedConventional: 0 };
const examples: Record<string, string[]> = {};
const ex = (k: string, s: string) => { const a = (examples[k] ??= []); if (a.length < 4) a.push(s); };

for (const r of reports) {
  const res = got.get(r.id)!;
  if (res instanceof Error) { crashed++; continue; }
  const preds = res.rows as Pred[];
  const dated = preds.some((p) => p.date);
  const key = (r.key ?? []).filter((k) => k.is_current || dated);
  for (const k of key) {
    const cand = preds.filter((p) => p.slug === k.marker_slug && (!dated || (p.date ?? r.takenISO) === k.date));
    const p = cand.find((x) => x.text === undefined);
    let o: string;
    if (k.action === "abstain") o = p ? "read_when_abstain_expected" : "abstained";
    else if (!p) o = "miss";
    else if (valueOk(k, p)) o = "ok";
    else o = "wrong";
    if (p && k.action === "read" && k.value !== null) {
      const printedOk = near(p.value, k.value, 0.5 * 10 ** -decimals(k.value_text));
      const needs = k.value_conv !== null && Math.abs(k.value - k.value_conv) > 1e-9;
      const conventional = needs && ukey(p.unit) === ukey(k.unit_conv);
      if (needs) rc.needConv++;
      if (conventional) rc.returnedConventional++;
      // a wrong value that is the same marker's earlier-date result (as printed or converted) is a reading error, not a conversion
      const earlierHit = o === "wrong" && (r.key ?? []).some((e) => e.marker_slug === k.marker_slug && !e.is_current && e.value !== null && (near(p.value, e.value, 0.5 * 10 ** -decimals(e.value_text)) || (e.value_conv !== null && near(p.value, e.value_conv, Math.max(0.007 * Math.abs(e.value_conv), 0.5 * 10 ** -(BY[k.marker_slug]?.dp ?? 2))))));
      if (earlierHit) rc.earlierColumn++;
      else if (printedOk && !conventional) rc.asPrinted++;
      else if (conventional) { if (o === "ok") rc.convertedRight++; else rc.convertedWrong++; }
      else if (o === "ok") rc.asPrinted++;
      else rc.misread++;
    }
    bump(total, o);
    const dims: [string, string][] = [["locale", r.tags.locale], ["layout", r.tags.layout], ["heldout_layout", r.tags.heldout], ["page", k.page === 1 ? "1" : "2+"], ["action", k.action], ["date", k.is_current ? "current" : "earlier"]];
    for (const h of k.hard_cases.length ? k.hard_cases : ["(none)"]) dims.push(["hard_case", h]);
    // a current result printed beside an earlier-date result of the same marker (cumulative reports)
    dims.push(["earlier_result_on_line", k.is_current && (r.key ?? []).some((e) => !e.is_current && e.line_id === k.line_id) ? "yes" : "no"]);
    for (const [d, v] of dims) add(d, v, o);
    if (o === "ok" && p) {
      units.of++; if ([k.unit, k.unit_expected, k.unit_conv].some((u) => ukey(u) === ukey(p.unit))) units.ok++;
      if (k.comparator) { comps.of++; if (p.comparator === undefined) comps.unreported++; else if (p.comparator === k.comparator) comps.ok++; }
    }
    if (o === "wrong") ex(`wrong ${k.hard_cases.join(",") || "-"}`, `${r.id} ${k.analyte} printed "${k.value_text}" ${k.unit ?? ""} -> read ${p!.value} ${p!.unit}`);
    if (o === "read_when_abstain_expected") ex(`read_when_abstain_expected ${k.abstain_reason}`, `${r.id} ${k.analyte} printed "${k.value_text}" -> read ${p!.value} ${p!.unit}`);
  }
  for (const p of preds) if (!(r.key ?? []).some((k) => k.marker_slug === p.slug)) { phantom++; ex("not on the report", `${r.id} ${p.slug} from "${p.printed}" = ${p.value}`); }
}

const rows = Object.values(total).reduce((a, b) => a + b, 0);
const readRows = (total.ok ?? 0) + (total.wrong ?? 0) + (total.miss ?? 0), absRows = (total.abstained ?? 0) + (total.read_when_abstain_expected ?? 0);
const wilson = (k: number, n: number) => { if (!n) return [0, 0]; const z = 1.96, p = k / n, d = 1 + (z * z) / n, c = p + (z * z) / (2 * n), w = z * Math.sqrt((p * (1 - p)) / n + (z * z) / (4 * n * n)); return [Math.max(0, (c - w) / d), Math.min(1, (c + w) / d)]; };
const pc = (k: number, n: number) => (n ? `${((100 * k) / n).toFixed(1)}%` : "–");
const ci = (k: number, n: number) => { const [a, b] = wilson(k, n); return `${(100 * a).toFixed(1)}–${(100 * b).toFixed(1)}%`; };
const name = basename(READER).replace(/\.[cm]?[tj]s$/, "");
const L: string[] = [];
L.push(`# ${name} on lab-report-corpus (${SPLIT}, input ${INPUT})`, "");
L.push(`${reports.length} reports, ${rows} answer rows scored (${readRows} to read, ${absRows} to abstain on). Crashed reports: ${crashed}.`, "");
L.push("| Outcome | Rows | Share of its kind | 95% interval |", "|---|---|---|---|");
for (const o of ["ok", "wrong", "miss"]) L.push(`| ${o} | ${total[o] ?? 0} | ${pc(total[o] ?? 0, readRows)} | ${ci(total[o] ?? 0, readRows)} |`);
for (const o of ["abstained", "read_when_abstain_expected"]) L.push(`| ${o} | ${total[o] ?? 0} | ${pc(total[o] ?? 0, absRows)} | ${ci(total[o] ?? 0, absRows)} |`);
L.push("", `- Unit given right, of values read right: ${units.ok} of ${units.of} (${pc(units.ok, units.of)}).`);
L.push(`- Censored values ("<", ">") read right: ${comps.of}; comparator returned right ${comps.ok}, not returned ${comps.unreported}.`);
L.push(`- Rows returned that are not on the report: ${phantom}.`);
L.push(`- **Reading and converting, apart.** Of values returned: read as printed ${rc.asPrinted}, misread ${rc.misread}, taken from an earlier-date column ${rc.earlierColumn}. Of ${rc.needConv} rows printed in a unit other than the conventional one, ${rc.returnedConventional} came back in the conventional unit: converted right ${rc.convertedRight}, converted wrong ${rc.convertedWrong} (a wrong number in the conventional unit; it can also be a misreading of the printed number).`);
for (const dim of ["locale", "layout", "heldout_layout", "page", "earlier_result_on_line", "hard_case", "date"]) {
  L.push("", `## By ${dim}`, "", `| ${dim} | rows | ok | wrong | miss | abstained | read when abstain expected |`, "|---|---|---|---|---|---|---|");
  for (const [v, t] of Object.entries(slices[dim] ?? {}).sort()) {
    const n = Object.values(t).reduce((a, b) => a + b, 0), nr = (t.ok ?? 0) + (t.wrong ?? 0) + (t.miss ?? 0), na = (t.abstained ?? 0) + (t.read_when_abstain_expected ?? 0);
    L.push(`| ${v} | ${n} | ${pc(t.ok ?? 0, nr)} | ${pc(t.wrong ?? 0, nr)} | ${pc(t.miss ?? 0, nr)} | ${pc(t.abstained ?? 0, na)} | ${pc(t.read_when_abstain_expected ?? 0, na)} |`);
  }
}
L.push("", "## Examples", "");
for (const [k, v] of Object.entries(examples).sort()) { L.push(`**${k}**`); for (const e of v) L.push(`    ${e}`); L.push(""); }
const summary = { readingAndConversion: rc, reader: name, split: SPLIT, input: INPUT, reports: reports.length, rows, readRows, absRows, crashed, total, units, comparators: comps, phantom, slices,
  rates: { ok: (total.ok ?? 0) / readRows, wrong: (total.wrong ?? 0) / readRows, miss: (total.miss ?? 0) / readRows, abstainRecall: absRows ? (total.abstained ?? 0) / absRows : null } };
console.log(L.slice(0, 16).join("\n"));
if (!process.argv.includes("--no-write")) {
  mkdirSync(join(import.meta.dirname, "..", "results", "corpus"), { recursive: true });
  const base = join(import.meta.dirname, "..", "results", "corpus", `${new Date().toISOString().slice(0, 10)}-score-${name}-${SPLIT}-${INPUT}`);
  writeFileSync(base + ".md", L.join("\n") + "\n");
  writeFileSync(base + ".json", JSON.stringify(summary, null, 1) + "\n");
  console.log(`\nwrote ${base}.md`);
}
process.exit(0);
