// Scores a lab-report reader against generated reports with a computed answer key.
// Every report is made by generate.mts, so we know what each row must read as. The reader under test is a module whose
// default export takes a Report and returns { rows, takenISO } (see readers/README.md). Every row is scored:
//   ok           the right value, in the reader's units
//   unit         the right value; the unit was not recognised (shown without a unit, or with another spelling)
//   unconverted  printed in SI; read as printed and still labelled SI, where the reader normally converts
//   wrong        a different number than the report says (the worst kind: nothing tells the person)
//   miss         the row was not read at all
// plus the lab's flag, the reference range, the collection date, rows that are not on the report, and whether a value at
// a critical level is still caught after reading (critical.mts).
//
//   npx tsx run.mts --reader readers/your-reader.mts [--n 2000] [--seed 1] [--only locale=DE] [--dump r1-17] [--no-write] [--gate]
//   npx tsx run.mts --reader readers/your-reader.mts --corpus corpus-out/full --split test --input pdf   (a built lab-report-corpus; corpus/load.mts)
// Exit code 1 when any gate in thresholds.json fails (with --gate).
import { mkdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, resolve, basename } from "node:path";
import { pathToFileURL } from "node:url";
import { ANALYTES, makeReports, makeVariants, toHl7, type Report, type TruthRow } from "./generate.mts";
import { isCritical } from "./critical.mts";

/** what a reader returns for one row: the marker's slug, the value and unit it read, the range, the lab's flag */
export type ReadRow = { slug: string; printed: string; value: number; unit: string; low: number | null; high: number | null; flag?: "H" | "L"; text?: string };
export type Parsed = { rows: ReadRow[]; takenISO: string | null };

const arg = (k: string, d?: string) => { const i = process.argv.indexOf(`--${k}`); return i < 0 ? d : process.argv[i + 1]; };
const has = (k: string) => process.argv.includes(`--${k}`);
const N = Number(arg("n", "2000")), SEED = Number(arg("seed", "1")), SHOW = Number(arg("show", "3"));
const only = arg("only")?.split("=");
const DIR = import.meta.dirname;
const READER = arg("reader");
if (!READER) { console.error("usage: npx tsx run.mts --reader readers/<name>.mts"); process.exit(2); }
const NAME = basename(READER).replace(/\.[cm]?[tj]s$/, "") + (arg("corpus") ? `-corpus-${arg("split", "test")}-${arg("input", "text")}` : "") + (process.env.MODEL ? "-" + process.env.MODEL.replace(/\//g, "_") : "") + (process.env.INPUT === "image" ? `-${process.env.IMAGE_STYLE ?? "clean"}` : "") + (process.env.PROMPT ? `-${process.env.PROMPT}` : "") + (process.env.CACHE_TAG ? `-${process.env.CACHE_TAG}` : "") + (process.env.UNITS_FIX === "1" ? "-unitsfix" : "") + (arg("format") ? `-${arg("format")}` : "");
const reader = (await import(pathToFileURL(resolve(READER)).href)).default as (r: Report) => Parsed | Promise<Parsed>;

const unitKey = (u: string) => u.toLowerCase().replace(/[µμ]/g, "u").replace(/mcg/g, "ug").replace(/×/g, "x").replace(/\s/g, "");
// within 0.7%, or within half a step of the precision the marker is reported to (a converted 1.579 shown as 1.6 is right)
const DP = Object.fromEntries(ANALYTES.map((a) => [a.slug, a.dp]));
const CONV = Object.fromEntries(ANALYTES.map((a) => [a.slug, a.unit]));
let step = 0;
const near = (a: number | null, b: number | null) => (a === null || b === null ? a === b : Math.abs(a - b) <= Math.max(0.007 * Math.abs(b), 0.006, step));

type Outcome = "ok" | "unit" | "unconverted" | "wrong" | "miss";
function scoreRow(t: TruthRow, row: ReadRow | undefined): { outcome: Outcome; flag: string; range: string; converted: boolean } {
  if (!row || row.text !== undefined) return { outcome: "miss", flag: "n/a", range: "n/a", converted: false };
  step = t.converted ? 0.5 * 10 ** -(DP[t.slug] ?? 2) + 1e-9 : 0;
  const asExpected = near(row.value, t.expected.value), asPrinted = near(row.value, t.printed.value);
  let outcome: Outcome, converted = t.converted;
  if (asExpected) outcome = unitKey(row.unit) === unitKey(t.expected.unit) || unitKey(row.unit) === unitKey(CONV[t.slug] ?? "") ? "ok" : "unit";
  else if (t.converted && asPrinted && unitKey(row.unit) === unitKey(t.printed.unit)) { outcome = "unconverted"; converted = false; }
  else outcome = "wrong";
  // the range, in the units the row came back in
  const want = converted || !t.converted ? t.expected : t.printed;
  const range = outcome === "wrong" ? "n/a" : (near(row.low, want.low) || (want.low === null && row.low === 0)) && near(row.high, want.high) ? "ok" : row.low === null && row.high === null ? "missed" : "wrong";
  // the lab's own flag: read when it says which way; a star only says "abnormal"
  const flag = outcome === "wrong" ? "n/a" : t.flagPrinted === "direction" ? (row.flag === t.flag ? "ok" : row.flag ? "wrong" : "missed")
    : t.flagPrinted === "mark" ? (!row.flag || row.flag === t.flag ? "ok" : "wrong") : row.flag ? "invented" : "ok";
  return { outcome, flag, range, converted };
}

const read = (r: Report) => reader(r);

// --variants K: N sets of results, each printed K ways (format invariance); otherwise N independent reports
const K = Number(arg("variants", "0"));
let reports = K > 1 ? makeVariants(N, K, SEED) : makeReports(N, SEED);
// --format hl7: the same reports sent as HL7 v2 ORU^R01 messages (same answer key)
if (arg("format") === "hl7") reports = reports.map(toHl7);
// --corpus DIR: a built lab-report-corpus split instead of generated reports (the scoring below is unchanged)
if (arg("corpus")) { const { loadCorpus } = await import("./corpus/load.mts"); reports = loadCorpus(resolve(arg("corpus")!), arg("split", "test")!, arg("input", "text")!); if (arg("limit")) reports = reports.slice(0, Number(arg("limit"))); }
if (only) reports = reports.filter((r) => r.tags[only[0]] === only[1]);
const dump = arg("dump");
if (dump) {
  const r = reports.find((x) => x.id === dump);
  if (!r) { console.error("no such report"); process.exit(2); }
  console.log(r.tags, "\n" + (r.lines?.join("\n") ?? r.text ?? JSON.stringify(r.json, null, 1).slice(0, 3000)));
  const p = await read(r);
  for (const t of r.truth) { const row = p.rows.find((x) => x.slug === t.slug); console.log(scoreRow(t, row).outcome.padEnd(12), t.slug.padEnd(24), `printed ${t.printed.text} ${t.printed.unit}`.padEnd(30), row ? `read ${row.value} ${row.unit} [${row.low}, ${row.high}] ${row.flag ?? ""}` : "—"); }
  console.log("not on the report:", p.rows.filter((x) => !r.truth.some((t) => t.slug === x.slug)).map((x) => `${x.slug}=${x.text ?? x.value}`).join(", ") || "none", "| date", p.takenISO, "want", r.takenISO);
  process.exit(0);
}

type Tally = Record<string, number>;
const bump = (t: Tally, k: string, n = 1) => { t[k] = (t[k] ?? 0) + n; };
const total: Tally = {}, flags: Tally = {}, ranges: Tally = {}, dates: Tally = {};
const slices: Record<string, Record<string, Tally>> = {};
const clusters = new Map<string, { n: number; examples: string[] }>();
const cluster = (key: string, example: string) => { const c = clusters.get(key) ?? { n: 0, examples: [] }; c.n++; if (c.examples.length < SHOW && !c.examples.includes(example)) c.examples.push(example); clusters.set(key, c); };
const crit = { truth: 0, caught: 0, missedRow: 0, misread: 0, falseAlarm: 0 };
let phantom = 0, rowsRead = 0, crashed = 0, wrongN = 0, wrongConverted = 0; // wrong values, and how many were printed in a unit that needs converting
const rowsOut: string[] = []; // --rows-out FILE: every scored row as JSON lines (report, marker, outcome), for comparing runs
const t0 = performance.now();

// read every report first, several at a time (--concurrency), then score in order
const C = Math.max(1, Number(arg("concurrency", "1")));
const got = new Map<string, Parsed | Error>();
{
  let next = 0, done = 0;
  await Promise.all(Array.from({ length: C }, async () => {
    while (next < reports.length) {
      const r = reports[next++];
      try { got.set(r.id, await read(r)); } catch (e) { got.set(r.id, e as Error); }
      if (++done % 25 === 0 && C > 1) console.error(`  ${done}/${reports.length} read`);
    }
  }));
}
// format invariance: for each set of results and marker, whether each printing of it was read right
const inv = new Map<string, { ok: boolean; critical: boolean; caught: boolean }[]>();

for (const r of reports) {
  const res = got.get(r.id)!;
  if (res instanceof Error) { crashed++; cluster(`crash | ${res.message.slice(0, 80)}`, r.id); continue; }
  const p: Parsed = res;
  rowsRead += p.rows.length;
  const tagList = Object.entries(r.tags);
  for (const t of r.truth) {
    const row = p.rows.find((x) => x.slug === t.slug);
    const s = scoreRow(t, row);
    bump(total, s.outcome);
    if (arg("rows-out")) rowsOut.push(JSON.stringify({ id: r.id, slug: t.slug, outcome: s.outcome, converted: t.converted, value: row && row.text === undefined ? row.value : null }));
    if (s.outcome === "wrong") { wrongN++; if (t.converted) wrongConverted++; }
    if (r.tags.group) { const k = `${r.tags.group}|${t.slug}`; const caught = !!row && row.text === undefined && isCritical(t.slug, row.value); (inv.get(k) ?? inv.set(k, []).get(k)!).push({ ok: s.outcome === "ok", critical: t.critical, caught }); }
    for (const [k, v] of tagList) bump(((slices[k] ??= {})[v] ??= {}), s.outcome);
    bump(((slices.marker ??= {})[t.slug] ??= {}), s.outcome);
    if (s.flag !== "n/a") bump(flags, s.flag);
    if (s.range !== "n/a") bump(ranges, s.range);
    const where = `${r.id} [${r.tags.locale} ${r.tags.variant} ${r.tags.order} ${r.tags.sep}]  ${t.line ?? `${t.name} ${t.printed.text} ${t.printed.unit}`}`;
    const got = row ? `  →  read ${row.text ?? row.value} ${row.unit}${row.low !== null || row.high !== null ? ` [${row.low ?? ""}, ${row.high ?? ""}]` : ""}${row.flag ? ` ${row.flag}` : ""}` : "";
    if (s.outcome === "miss") cluster(`miss | ${t.slug} | "${t.name}"${r.kind !== "lines" ? ` | ${r.tags.variant}` : ""}`, where);
    else if (s.outcome === "wrong") cluster(`wrong | ${t.slug} | ${r.tags.decimal} ${r.tags.variant} | unit ${t.printed.unit}`, where + got);
    else if (s.outcome === "unit") cluster(`unit | "${t.printed.unit}"${row!.unit ? ` read as "${row!.unit}"` : " not recognised"}`, where + got);
    else if (s.outcome === "unconverted") cluster(`unconverted | ${t.slug} | ${t.printed.unit}`, where + got);
    if (s.flag === "missed" || s.flag === "wrong" || s.flag === "invented") cluster(`flag ${s.flag} | ${r.tags.flags} ${r.tags.order}`, where + got);
    if (s.range === "missed" || s.range === "wrong") cluster(`range ${s.range} | ${r.tags.locale} ${r.tags.range} | ${t.printed.low === null ? "upper only" : t.printed.high === null ? "lower only" : "two-sided"}`, where + got);
    // critical values, judged by the reader's own rule on what it read
    const flagged = !!row && row.text === undefined && isCritical(t.slug, row.value);
    if (t.critical) { crit.truth++; if (flagged) crit.caught++; else if (!row) { crit.missedRow++; cluster(`critical not caught (row missed) | ${t.slug}`, where); } else { crit.misread++; cluster(`critical not caught (misread) | ${t.slug}`, where + got); } }
    else if (flagged) { crit.falseAlarm++; cluster(`false critical | ${t.slug}`, where + got); }
  }
  for (const x of p.rows) if (!r.truth.some((t) => t.slug === x.slug)) { phantom++; cluster(`not on the report | ${x.slug} | read from "${x.printed}"`, `${r.id} [${r.tags.locale} ${r.tags.variant}]  ${x.printed} = ${x.text ?? x.value} ${x.unit}`); if (x.text === undefined && isCritical(x.slug, x.value)) crit.falseAlarm++; }
  if (r.takenISO) { const d = p.takenISO === r.takenISO ? "ok" : p.takenISO ? "wrong" : "missed"; bump(dates, d); if (d !== "ok") cluster(`date ${d} | ${r.tags.locale} ${r.kind}`, `${r.id}  want ${r.takenISO} read ${p.takenISO}`); }
}
const ms = performance.now() - t0;
if (arg("rows-out")) writeFileSync(arg("rows-out")!, rowsOut.join("\n") + "\n");

/* ---------- report ---------- */
const rows = Object.values(total).reduce((a, b) => a + b, 0);
const pct = (n: number, d: number) => (d ? `${((100 * n) / d).toFixed(n && n / d < 0.001 ? 3 : 1)}%` : "–");
// Wilson 95% interval: with a few thousand rows a rate is known to within a fraction of a percent
const wilson = (k: number, n: number) => { if (!n) return [0, 0]; const z = 1.96, p = k / n, d = 1 + (z * z) / n, c = p + (z * z) / (2 * n), w = z * Math.sqrt((p * (1 - p)) / n + (z * z) / (4 * n * n)); return [Math.max(0, (c - w) / d), Math.min(1, (c + w) / d)]; };
const ci = (k: number, n: number) => { const [a, b] = wilson(k, n); return `${(100 * a).toFixed(2)}–${(100 * b).toFixed(2)}%`; };
const o = (k: Outcome) => total[k] ?? 0;
const lines: string[] = [];
const say = (s = "") => lines.push(s);
say(`# Lab-report reader stress test`);
say();
say(`${reports.length} ${arg("corpus") ? `corpus reports (${arg("split", "test")} split, input ${arg("input", "text")})` : "generated reports"}, ${rows} rows with a known answer, seed ${SEED}${only ? `, only ${only.join("=")}` : ""}. Read in ${(ms / 1000).toFixed(1)} s (${(ms / reports.length).toFixed(1)} ms a report).`);
say();
say(`| Outcome | Rows | Share | 95% interval |`);
say(`|---|---|---|---|`);
for (const k of ["ok", "unit", "unconverted", "wrong", "miss"] as Outcome[]) say(`| ${k} | ${o(k)} | ${pct(o(k), rows)} | ${ci(o(k), rows)} |`);
say();
say(`- **Critical values:** ${crit.caught} of ${crit.truth} caught (${pct(crit.caught, crit.truth)}, interval ${ci(crit.caught, crit.truth)}); ${crit.missedRow} lost because the row was not read, ${crit.misread} because it was misread. False critical alarms: ${crit.falseAlarm}.`);
say(`- **Rows that are not on the report:** ${phantom} (of ${rowsRead} rows read).`);
say(`- **Lab's flag:** ${Object.entries(flags).map(([k, v]) => `${k} ${v}`).join(", ")}.`);
say(`- **Reference range:** ${Object.entries(ranges).map(([k, v]) => `${k} ${v}`).join(", ")}.`);
say(`- **Collection date:** ${Object.entries(dates).map(([k, v]) => `${k} ${v}`).join(", ")}.`);
if (crashed) say(`- **Crashes:** ${crashed}.`);
if (wrongN) say(`- **Wrong values printed in a unit that needs converting:** ${wrongConverted} of ${wrongN} (${pct(wrongConverted, wrongN)}).`);
// a marker's readings across the printings of one set of results: right every time, right only sometimes, or never
const invT = { all: 0, some: 0, none: 0, pairs: 0, critSets: 0, critAll: 0, critSome: 0 };
for (const rs of inv.values()) {
  if (rs.length < 2) continue;
  invT.pairs++;
  const k = rs.filter((x) => x.ok).length;
  if (k === rs.length) invT.all++; else if (k) invT.some++; else invT.none++;
  const crits = rs.filter((x) => x.critical);
  if (crits.length === rs.length) { invT.critSets++; const c = crits.filter((x) => x.caught).length; if (c === crits.length) invT.critAll++; else if (c) invT.critSome++; }
}
if (invT.pairs) say(`- **Format invariance** (${K} printings of each set of results): of ${invT.pairs} markers, read right in every printing ${invT.all} (${pct(invT.all, invT.pairs)}), right in some printings but not others ${invT.some} (${pct(invT.some, invT.pairs)}), never right ${invT.none}. Critical results caught in every printing: ${invT.critAll} of ${invT.critSets}${invT.critSome ? `; caught in some printings only: ${invT.critSome}` : ""}.`);
for (const dim of arg("corpus") ? ["locale", "layout", "heldout", "units", "decimal", "marker"] : ["locale", "kind", "variant", "units", "decimal", "sep", "order", "marker"]) {
  say();
  say(`## By ${dim}`);
  say(`| ${dim} | rows | ok | unit | unconverted | wrong | miss |`);
  say(`|---|---|---|---|---|---|---|`);
  const entries = Object.entries(slices[dim] ?? {}).map(([k, t]) => ({ k, t, n: Object.values(t).reduce((a, b) => a + b, 0) }));
  entries.sort((a, b) => ((a.t.ok ?? 0) / a.n) - ((b.t.ok ?? 0) / b.n));
  for (const { k, t, n } of entries) say(`| ${k} | ${n} | ${pct(t.ok ?? 0, n)} | ${pct(t.unit ?? 0, n)} | ${pct(t.unconverted ?? 0, n)} | ${pct(t.wrong ?? 0, n)} | ${pct(t.miss ?? 0, n)} |`);
}
say();
say(`## What went wrong, most common first`);
const sorted = [...clusters.entries()].sort((a, b) => b[1].n - a[1].n);
for (const [key, c] of sorted.slice(0, Number(arg("top", "80")))) { say(); say(`**${c.n}× ${key}**`); for (const e of c.examples) say("    " + e); }
if (sorted.length > 80) say(`\n…and ${sorted.length - 80} smaller groups.`);

const summary = {
  invariance: invT.pairs ? invT : undefined, variants: K || undefined, wrongConverted, wrongN,
  reports: reports.length, rows, seed: SEED, outcomes: total, critical: crit, phantom, rowsRead, flags, ranges, dates, crashed,
  rates: { ok: o("ok") / rows, wrong: o("wrong") / rows, miss: o("miss") / rows, criticalRecall: crit.truth ? crit.caught / crit.truth : 1 },
};
console.log(lines.slice(0, lines.findIndex((l, i) => i > 2 && l.startsWith("## "))).join("\n"));
console.log(`\n${sorted.length} failure groups; top 12:`);
for (const [key, c] of sorted.slice(0, 12)) console.log(`  ${String(c.n).padStart(5)}  ${key}`);
if (!has("no-write")) {
  mkdirSync(join(DIR, "results"), { recursive: true });
  const stamp = new Date().toISOString().slice(0, 10);
  const sub = arg("corpus") ? "results/corpus" : "results";
  mkdirSync(join(DIR, sub), { recursive: true });
  writeFileSync(join(DIR, sub, `${stamp}-${NAME}-seed${SEED}${only ? `-${only.join("-")}` : ""}.md`), lines.join("\n") + "\n");
  if (!only) writeFileSync(join(DIR, sub, `${stamp}-${NAME}-seed${SEED}.json`), JSON.stringify(summary, null, 1) + "\n");
  console.log(`\nFull report: ${sub}/${stamp}-${NAME}-seed${SEED}${only ? `-${only.join("-")}` : ""}.md`);
}
if (has("gate")) {
  const f = join(DIR, "thresholds.json");
  if (!existsSync(f)) { console.error("no thresholds.json"); process.exit(2); }
  const g = JSON.parse(readFileSync(f, "utf8")) as { maxWrong: number; maxMiss: number; minCriticalRecall: number; maxFalseCritical: number; maxPhantomRate: number };
  const fails = [
    summary.rates.wrong > g.maxWrong && `wrong ${pct(o("wrong"), rows)} > ${g.maxWrong * 100}%`,
    summary.rates.miss > g.maxMiss && `miss ${pct(o("miss"), rows)} > ${g.maxMiss * 100}%`,
    summary.rates.criticalRecall < g.minCriticalRecall && `critical recall ${pct(crit.caught, crit.truth)} < ${g.minCriticalRecall * 100}%`,
    crit.falseAlarm > g.maxFalseCritical && `false critical alarms ${crit.falseAlarm} > ${g.maxFalseCritical}`,
    phantom / Math.max(1, rowsRead) > g.maxPhantomRate && `rows not on the report ${pct(phantom, rowsRead)} > ${g.maxPhantomRate * 100}%`,
  ].filter(Boolean);
  if (fails.length) { console.error("\nGATE FAILED: " + fails.join("; ")); process.exit(1); }
  console.log("\nGate passed.");
}

// a reader may hold workers open (OCR); the run is over
process.exit(0);
