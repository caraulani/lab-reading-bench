/* Scores every reader output in results/raw/ against the hand-checked answer key (answers.jsonl).

     npx tsx realworld/score.mts            writes results/scores.json and results/scores.md

   Two scorings:
   catalog   the benchmark's own rule (run.mts scoreRow), on the key rows whose marker is in the benchmark catalog
             (generate.mts ANALYTES): ok / unit / unconverted / wrong / miss, the lab's flag, the range, critical values
             (critical.mts) and catalog markers returned that are not on the report.
   printed   every numeric row in the key: the reader's rows are matched to the key's by test name (and catalog slug when
             the reader gives one); a row is right when its value equals the printed value (or, for a catalog marker,
             the value correctly converted to the catalog unit). Unit, range and flag are checked on rows read right.
   Rates carry Wilson 95% intervals. Rows are not independent (a report's rows share a layout), so the intervals are
   narrower than they should be; the per-report table shows how much each report drives a rate. */
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { ANALYTES } from "../generate.mts";
import { isCritical } from "../critical.mts";
import type { KeyRow } from "./build.mts";

const HERE = import.meta.dirname;
const key = readFileSync(join(HERE, "answers.jsonl"), "utf8").trim().split("\n").map((l) => JSON.parse(l) as KeyRow);
const reportIds = [...new Set(key.map((k) => k.report_id))];
const reportsJson = JSON.parse(readFileSync(join(HERE, "reports.json"), "utf8")) as { id: string; locale: string }[];
const CAT = new Set(ANALYTES.map((a) => a.slug));
const DP = Object.fromEntries(ANALYTES.map((a) => [a.slug, a.dp]));
const CONV = Object.fromEntries(ANALYTES.map((a) => [a.slug, a.unit]));

type Row = { slug?: string; printed?: string; value?: number | null; value_text?: string; unit?: string | null; low?: number | null; high?: number | null; flag?: string | null; range?: string | null; text?: string; asPrinted?: { value: string; unit: string; low: number | null; high: number | null; range: string } };
type Out = Record<string, { rows?: Row[]; error?: string }>;

const wilson = (k: number, n: number) => { if (!n) return [0, 0]; const z = 1.96, p = k / n, d = 1 + (z * z) / n, c = p + (z * z) / (2 * n), w = z * Math.sqrt((p * (1 - p)) / n + (z * z) / (4 * n * n)); return [Math.max(0, (c - w) / d), Math.min(1, (c + w) / d)]; };
const pct = (k: number, n: number) => (n ? `${((100 * k) / n).toFixed(1)}%` : "–");
const ci = (k: number, n: number) => { const [a, b] = wilson(k, n); return `${(100 * a).toFixed(1)}–${(100 * b).toFixed(1)}%`; };
// reports resampled with replacement (2,000 times, fixed seed): an interval that allows for rows of one report moving together
function boot(per: Record<string, { n: number; ok: number }>) {
  const xs = Object.values(per).filter((x) => x.n > 0); let a = 12345; const rnd = () => ((a = (a * 1103515245 + 12345) % 2147483648) / 2147483648);
  const rates: number[] = [];
  for (let i = 0; i < 2000; i++) { let k = 0, n = 0; for (let j = 0; j < xs.length; j++) { const x = xs[Math.floor(rnd() * xs.length)]; k += x.ok; n += x.n; } rates.push(n ? k / n : 0); }
  rates.sort((p, q) => p - q);
  return `${(100 * rates[49]).toFixed(1)}–${(100 * rates[1949]).toFixed(1)}%`;
}

/* ---------- catalog scoring: run.mts scoreRow, with the key's printed and converted values ---------- */
const unitKey = (u: string) => u.toLowerCase().replace(/[µμ]/g, "u").replace(/mcg/g, "ug").replace(/×/g, "x").replace(/\s/g, "");
let step = 0;
const near = (a: number | null | undefined, b: number | null) => (a === null || a === undefined || b === null ? (a ?? null) === b : Math.abs(a - b) <= Math.max(0.007 * Math.abs(b), 0.006, step));
function catalogRow(k: KeyRow, row: Row | undefined) {
  if (!row || row.text !== undefined || typeof row.value !== "number") return { outcome: "miss", flag: "n/a", range: "n/a" };
  const converted = Math.abs((k.value_conv as number) - k.value) > 1e-9;
  step = converted ? 0.5 * 10 ** -(DP[k.marker_slug!] ?? 2) + 1e-9 : 0;
  const asExpected = near(row.value, k.value_conv), asPrinted = near(row.value, k.value);
  const expUnit = converted ? k.unit_conv! : k.unit ?? "";
  let outcome: string, conv = converted;
  if (asExpected) outcome = unitKey(row.unit ?? "") === unitKey(expUnit) || unitKey(row.unit ?? "") === unitKey(CONV[k.marker_slug!] ?? "") ? "ok" : "unit";
  else if (converted && asPrinted && unitKey(row.unit ?? "") === unitKey(k.unit ?? "")) { outcome = "unconverted"; conv = false; }
  else outcome = "wrong";
  const wantLo = conv || !converted ? k.ref_low_conv : k.ref_low, wantHi = conv || !converted ? k.ref_high_conv : k.ref_high;
  const range = outcome === "wrong" ? "n/a" : (near(row.low, wantLo) || (wantLo === null && row.low === 0)) && near(row.high, wantHi) ? "ok" : row.low == null && row.high == null ? "missed" : "wrong";
  const flag = outcome === "wrong" ? "n/a" : k.flag_norm ? (row.flag === k.flag_norm ? "ok" : row.flag ? "wrong" : "missed") : row.flag ? "invented" : "ok";
  return { outcome, flag, range };
}

/* ---------- printed scoring ---------- */
const normName = (s: string) => s.toLowerCase().replace(/ß/g, "ss").normalize("NFKD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, " ").trim();
const bigrams = (s: string) => { const t = s.replace(/ /g, ""); const m = new Map<string, number>(); for (let i = 0; i < t.length - 1; i++) m.set(t.slice(i, i + 2), (m.get(t.slice(i, i + 2)) ?? 0) + 1); return m; };
function nameSim(a: string, b: string) {
  const x = normName(a), y = normName(b);
  if (!x || !y) return 0;
  if (x === y) return 1;
  const bx = bigrams(x), by = bigrams(y); let inter = 0, nx = 0, ny = 0;
  for (const v of bx.values()) nx += v; for (const v of by.values()) ny += v;
  for (const [g, v] of bx) inter += Math.min(v, by.get(g) ?? 0);
  const dice = nx + ny ? (2 * inter) / (nx + ny) : 0;
  const contained = (x.length >= 2 && ` ${y} `.includes(` ${x} `)) || (y.length >= 2 && ` ${x} `.includes(` ${y} `)) ? 0.75 : 0;
  return Math.max(dice, contained);
}
function parseNum(t: string | null | undefined): { v: number; cmp: string | null } | null {
  if (t === null || t === undefined) return null;
  let s = String(t).replace(/\s/g, "");
  const m0 = s.match(/^([<>≤≥]?)(.*)$/)!; const cmp = m0[1] ? m0[1].replace("≤", "<").replace("≥", ">") : null; s = m0[2];
  if (/^\d{1,3}(,\d{3})+(\.\d+)?$/.test(s)) s = s.replace(/,/g, ""); else if (/^\d+,\d+$/.test(s)) s = s.replace(",", ".");
  const v = Number(s);
  return s && Number.isFinite(v) ? { v, cmp } : null;
}
function parseRange(t: string | null | undefined): [number | null, number | null] {
  if (!t) return [null, null];
  const s = t.replace(/(\d),(\d{3})\b/g, "$1$2").replace(/(\d),(\d)/g, "$1.$2").replace(/[–−]/g, "-");
  let m = s.match(/(\d+(?:\.\d*)?)\s*-\s*(\d+(?:\.\d+)?)/); if (m) return [Number(m[1]), Number(m[2])];
  m = s.match(/^\s*(?:<|≤|<=)\s*(?:OR\s*=\s*)?(\d+(?:\.\d+)?)/i); if (m) return [null, Number(m[1])];
  m = s.match(/^\s*(?:>|≥|>=)\s*(?:OR\s*=\s*)?(\d+(?:\.\d+)?)/i); if (m) return [Number(m[1]), null];
  return [null, null];
}
const unitNorm = (u: string | null | undefined) => (u ?? "").toLowerCase().replace(/[µμ]/g, "u").replace(/\s/g, "").replace(/u\/i$/, "u/l");
const flagNorm = (f: string | null | undefined) => { if (!f) return null; const s = String(f).trim(); return /^(h|high|\+|↑)/i.test(s) ? "H" : /^(l|low|-|↓)/i.test(s) ? "L" : s === "*" ? "*" : null; };
const eq = (a: number | null, b: number | null) => (a === null || b === null ? a === b : Math.abs(a - b) <= 1e-9 * Math.max(1, Math.abs(b)));

type PR = { value: string; unit: string; range: string; flag: string; matched: boolean };
function printedReport(keys: KeyRow[], rows: Row[], extras?: string[]): PR[] {
  // what the reader says was printed: a model's transcription, or the rule-based reader's asPrinted record
  const cand = rows.map((r, i) => {
    const ap = r.asPrinted;
    const vt = r.value_text ?? ap?.value ?? (typeof r.value === "number" ? String(r.value) : "");
    const p = parseNum(vt);
    const range: [number | null, number | null] = r.range !== undefined ? parseRange(r.range) : ap ? [ap.low ?? null, ap.high ?? null] : [r.low ?? null, r.high ?? null];
    return { i, name: r.printed ?? "", slug: r.slug, v: r.text !== undefined ? null : p?.v ?? null, cmp: p?.cmp ?? null, conv: typeof r.value === "number" ? r.value : null, unit: r.unit !== undefined && !ap ? r.unit : ap?.unit ?? r.unit ?? null, range, flag: flagNorm(r.flag) };
  });
  const valueRight = (k: KeyRow, c: (typeof cand)[number]) => (c.v !== null && eq(c.v, k.value) && (c.cmp ?? null) === k.comparator) || (k.marker_slug !== null && c.conv !== null && Math.abs(c.conv - (k.value_conv as number)) <= Math.max(0.007 * Math.abs(k.value_conv as number), 0.006));
  const pairs: { k: number; c: number; s: number }[] = [];
  keys.forEach((k, ki) => cand.forEach((c, ci2) => {
    const sim = nameSim(k.analyte, c.name), slugMatch = !!k.marker_slug && c.slug === k.marker_slug;
    const right = valueRight(k, c);
    if (sim >= 0.55 || slugMatch || (sim >= 0.3 && right)) pairs.push({ k: ki, c: ci2, s: sim + (slugMatch ? 1 : 0) + (right ? 0.3 : 0) });
  }));
  pairs.sort((a, b) => b.s - a.s);
  const usedK = new Set<number>(), usedC = new Set<number>(), match = new Map<number, number>();
  for (const p of pairs) if (!usedK.has(p.k) && !usedC.has(p.c)) { usedK.add(p.k); usedC.add(p.c); match.set(p.k, p.c); }
  // rows the reader returned that match no numeric row of the key (a qualitative result, a misread, or a row it invented)
  cand.forEach((c, i) => { if (!usedC.has(i)) extras?.push(`${c.name} = ${rows[i].text ?? rows[i].value_text ?? rows[i].value} ${c.unit ?? ""}${c.slug ? ` [${c.slug}]` : ""}`); });
  return keys.map((k, ki) => {
    if (!match.has(ki)) return { value: "miss", unit: "n/a", range: "n/a", flag: "n/a", matched: false };
    const c = cand[match.get(ki)!];
    if (!valueRight(k, c)) return { value: "wrong", unit: "n/a", range: "n/a", flag: "n/a", matched: true };
    const asPrintedValue = c.v !== null && eq(c.v, k.value);
    const unit = !asPrintedValue ? "converted" : unitNorm(c.unit) === unitNorm(k.unit) ? "ok" : "wrong";
    const range = !asPrintedValue ? "converted" : eq(c.range[0], k.ref_low) && eq(c.range[1], k.ref_high) ? "ok" : "wrong";
    const flag = (c.flag === "*" ? null : c.flag) === k.flag_norm ? "ok" : !k.flag_norm ? "invented" : c.flag ? "wrong" : "missed";
    return { value: "ok", unit, range, flag, matched: true };
  });
}

/* ---------- run ---------- */
const files = readdirSync(join(HERE, "results", "raw")).filter((f) => f.endsWith(".json")).sort();
const results: Record<string, unknown> = {};
const md: string[] = [];
const bump = (t: Record<string, number>, k: string) => { t[k] = (t[k] ?? 0) + 1; };
for (const f of files) {
  const name = f.replace(/\.json$/, "");
  const out = JSON.parse(readFileSync(join(HERE, "results", "raw", f), "utf8")) as Out;
  const missing = reportIds.filter((id) => !out[id] || out[id].error);
  const hasSlugs = Object.values(out).some((o) => o.rows?.some((r) => r.slug));
  const hasNames = Object.values(out).some((o) => o.rows?.some((r) => r.printed && r.printed !== r.slug));
  const res: Record<string, unknown> = { reportsMissing: missing };
  if (hasSlugs) {
    const t: Record<string, number> = {}, fl: Record<string, number> = {}, rg: Record<string, number> = {};
    const crit = { truth: 0, caught: 0, falseAlarm: 0 }; let phantom = 0; const phantoms: string[] = []; const wrongs: string[] = [];
    const perReport: Record<string, { n: number; ok: number }> = {};
    for (const id of reportIds) {
      const rows = out[id]?.rows ?? [];
      const ks = key.filter((k) => k.report_id === id && k.marker_slug);
      for (const k of ks) {
        const row = rows.find((r) => r.slug === k.marker_slug);
        const s = catalogRow(k, row);
        bump(t, s.outcome); if (s.flag !== "n/a") bump(fl, s.flag); if (s.range !== "n/a") bump(rg, s.range);
        (perReport[id] ??= { n: 0, ok: 0 }).n++; if (s.outcome === "ok") perReport[id].ok++;
        if (s.outcome === "wrong") wrongs.push(`${id}: ${k.analyte} printed ${k.value_text} ${k.unit ?? ""} → read ${row?.value} ${row?.unit ?? ""}`);
        if (isCritical(k.marker_slug!, k.value_conv as number)) { crit.truth++; if (row && typeof row.value === "number" && row.text === undefined && isCritical(k.marker_slug!, row.value)) crit.caught++; }
        else if (row && typeof row.value === "number" && row.text === undefined && isCritical(k.marker_slug!, row.value)) crit.falseAlarm++;
      }
      for (const r of rows) if (r.slug && CAT.has(r.slug) && !ks.some((k) => k.marker_slug === r.slug)) { phantom++; phantoms.push(`${id}: ${r.slug} = ${r.value} ${r.unit ?? ""} (from "${r.printed}")`); }
    }
    const n = Object.values(t).reduce((a, b) => a + b, 0);
    res.catalog = { rows: n, outcomes: t, flags: fl, ranges: rg, critical: crit, notOnReport: phantom, notOnReportExamples: phantoms, wrongExamples: wrongs, perReport };
  }
  if (hasNames) {
    const v: Record<string, number> = {}, u: Record<string, number> = {}, r: Record<string, number> = {}, fl: Record<string, number> = {};
    const perReport: Record<string, { n: number; ok: number }> = {}; const misses: string[] = [], wrongs: string[] = [];
    const byLang: Record<string, { n: number; ok: number }> = {}; const extras: string[] = [];
    for (const id of reportIds) {
      const ks = key.filter((k) => k.report_id === id);
      const ex: string[] = [];
      const pr = printedReport(ks, out[id]?.rows ?? [], ex);
      extras.push(...ex.map((e) => `${id}: ${e}`));
      const lang = reportsJson.find((x) => x.id === id)!.locale.slice(0, 2);
      pr.forEach((p, i) => {
        bump(v, p.value); bump(u, p.unit); bump(r, p.range); bump(fl, p.flag);
        (perReport[id] ??= { n: 0, ok: 0 }).n++; (byLang[lang] ??= { n: 0, ok: 0 }).n++;
        if (p.value === "ok") { perReport[id].ok++; byLang[lang].ok++; }
        if (p.value === "miss") misses.push(`${id}: ${ks[i].analyte} ${ks[i].value_text}`);
        if (p.value === "wrong") wrongs.push(`${id}: ${ks[i].analyte} ${ks[i].value_text}`);
      });
    }
    const n = Object.values(v).reduce((a, b) => a + b, 0);
    res.printed = { rows: n, value: v, unit: u, range: r, flag: fl, perReport, byLanguage: byLang, unmatchedReaderRows: extras.length, unmatchedExamples: extras, misses, wrongs };
  }
  results[name] = res;
}
writeFileSync(join(HERE, "results", "scores.json"), JSON.stringify(results, null, 1) + "\n");

/* ---------- tables ---------- */
md.push(`Key: ${key.length} numeric rows on ${reportIds.length} reports; ${key.filter((k) => k.marker_slug).length} rows are markers in the benchmark catalog.`, "");
md.push("### Catalog scoring (the benchmark's rule, catalog markers only)", "", "| Reader | Reports read | Rows | Right | 95% interval (Wilson) | Report bootstrap | Wrong value | Missed | Unconverted | Unit not recognised | Flag right* | Range right* | Critical caught | Catalog markers not on the report |", "|---|---|---|---|---|---|---|---|---|---|---|---|---|---|");
for (const [name, res] of Object.entries(results) as [string, { reportsMissing: string[]; catalog?: { rows: number; outcomes: Record<string, number>; flags: Record<string, number>; ranges: Record<string, number>; critical: { truth: number; caught: number }; notOnReport: number; perReport: Record<string, { n: number; ok: number }> } }][]) {
  const c = res.catalog; if (!c) continue; const o = (k: string) => c.outcomes[k] ?? 0; const fN = Object.values(c.flags).reduce((a, b) => a + b, 0), rN = Object.values(c.ranges).reduce((a, b) => a + b, 0);
  md.push(`| ${name} | ${reportIds.length - res.reportsMissing.length}/${reportIds.length} | ${c.rows} | ${o("ok")} (${pct(o("ok"), c.rows)}) | ${ci(o("ok"), c.rows)} | ${boot(c.perReport)} | ${o("wrong")} (${pct(o("wrong"), c.rows)}, ${ci(o("wrong"), c.rows)}) | ${o("miss")} (${pct(o("miss"), c.rows)}) | ${o("unconverted")} | ${o("unit")} | ${pct(c.flags.ok ?? 0, fN)} | ${pct(c.ranges.ok ?? 0, rN)} | ${c.critical.caught}/${c.critical.truth} | ${c.notOnReport} |`);
}
md.push("", "\\* of the rows whose value was read right or left unconverted.", "");
md.push("### As-printed scoring (every numeric row)", "", "| Reader | Reports read | Rows | Value right | 95% interval (Wilson) | Report bootstrap | Wrong value | 95% interval | Missed | Unit as printed† | Range as printed† | Flag right‡ | English rows right | German rows right |", "|---|---|---|---|---|---|---|---|---|---|---|---|---|---|");
for (const [name, res] of Object.entries(results) as [string, { reportsMissing: string[]; printed?: { rows: number; value: Record<string, number>; unit: Record<string, number>; range: Record<string, number>; flag: Record<string, number>; byLanguage: Record<string, { n: number; ok: number }>; perReport: Record<string, { n: number; ok: number }> } }][]) {
  const p = res.printed; if (!p) continue; const v = (k: string) => p.value[k] ?? 0;
  const uN = (p.unit.ok ?? 0) + (p.unit.wrong ?? 0), rN = (p.range.ok ?? 0) + (p.range.wrong ?? 0), fN = (p.flag.ok ?? 0) + (p.flag.wrong ?? 0) + (p.flag.missed ?? 0) + (p.flag.invented ?? 0);
  const L = (l: string) => p.byLanguage[l] ? `${p.byLanguage[l].ok}/${p.byLanguage[l].n} (${pct(p.byLanguage[l].ok, p.byLanguage[l].n)})` : "–";
  md.push(`| ${name} | ${reportIds.length - res.reportsMissing.length}/${reportIds.length} | ${p.rows} | ${v("ok")} (${pct(v("ok"), p.rows)}) | ${ci(v("ok"), p.rows)} | ${boot(p.perReport)} | ${v("wrong")} (${pct(v("wrong"), p.rows)}) | ${ci(v("wrong"), p.rows)} | ${v("miss")} (${pct(v("miss"), p.rows)}) | ${pct(p.unit.ok ?? 0, uN)} | ${pct(p.range.ok ?? 0, rN)} | ${pct(p.flag.ok ?? 0, fN)} | ${L("en")} | ${L("de")} |`);
}
md.push("", "† of the rows whose value was read right as printed (not converted). ‡ of the rows whose value was read right; a flag the lab did not print counts against it.");
writeFileSync(join(HERE, "results", "scores.md"), md.join("\n") + "\n");
console.log(md.join("\n"));
