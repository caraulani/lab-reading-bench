/* Cluster bootstrap 95% intervals for the headline rates of the preregistered test.

   The Wilson intervals in results/*.md and the Newcombe intervals in README.md (stats/differences.mts) treat every result
   as an independent draw. They are not: the results on one report share its layout, language and units, and the five
   printings of one set of results share its values. Here the unit of resampling is the set of results (all printings of
   it together, the `group` of makeVariants); report-level resampling, which ignores the link between printings, is shown
   beside it for the correct and wrong rates. Each interval is the 2.5th to 97.5th percentile of 10,000 resamples drawn
   with a fixed seed, so the file is reproducible to the digit.

     npx tsx stats/bootstrap.mts                                  # models only (cached replies), prints the table
     LIFEFROM_DIR=/path/to/LifeFrom npx tsx stats/bootstrap.mts --write   # with the rule-based reader; writes results/cluster-bootstrap.md

   Paired comparisons (photo minus clean, model minus rules) resample the same sets for both arms. A rate of 0 or 100% has
   a degenerate bootstrap interval (every resample gives the same value); for those the Wilson interval in results/ is
   the one to quote, and the table says so. Rates are ratios of totals over the resampled reports, as in run.mts. */
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { ROOT, scoreRuns, hasRules, invariance, type ReportScore } from "./rescore.mts";

const B = Number(process.env.BOOT_N ?? 10000), SEED = 20261126;
function rng(seed: number) { let a = seed >>> 0; return () => { a = (a + 0x6d2b79f5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
const pct = (xs: number[], q: number) => { const s = [...xs].sort((a, b) => a - b); const i = (s.length - 1) * q, lo = Math.floor(i); return s[lo] + (s[Math.min(lo + 1, s.length - 1)] - s[lo]) * (i - lo); };

type Agg = { rows: number; ok: number; wrong: number; invN: number; invAll: number };
const zero = (): Agg => ({ rows: 0, ok: 0, wrong: 0, invN: 0, invAll: 0 });
/** per set of results: summed rows and outcomes, and the invariance pairs inside it */
function byGroup(rs: ReportScore[]): Map<string, Agg> {
  const m = new Map<string, Agg>();
  for (const s of rs) { const g = m.get(s.group) ?? m.set(s.group, zero()).get(s.group)!; g.rows += s.rows; g.ok += s.ok; g.wrong += s.wrong; }
  for (const [k, v] of invariance(rs).by) { if (v.length < 2) continue; const g = m.get(k.split("|")[0])!; g.invN++; if (v.every(Boolean)) g.invAll++; }
  return m;
}
type Stat = (aggs: Agg[]) => number;
const okRate: Stat = (a) => a[0].ok / a[0].rows, wrongRate: Stat = (a) => a[0].wrong / a[0].rows, invRate: Stat = (a) => a[0].invAll / a[0].invN;
const okDiff: Stat = (a) => a[0].ok / a[0].rows - a[1].ok / a[1].rows, invDiff: Stat = (a) => a[0].invAll / a[0].invN - a[1].invAll / a[1].invN;

/** resample the clusters (keys) with replacement; each arm sums its own numbers for the drawn clusters */
function boot(arms: Map<string, Agg>[], stat: Stat, keys: string[], seed = SEED) {
  const next = rng(seed), out: number[] = [];
  const sum = (picks: string[]) => arms.map((arm) => { const t = zero(); for (const k of picks) { const g = arm.get(k); if (g) { t.rows += g.rows; t.ok += g.ok; t.wrong += g.wrong; t.invN += g.invN; t.invAll += g.invAll; } } return t; });
  for (let b = 0; b < B; b++) { const picks = keys.map(() => keys[Math.floor(next() * keys.length)]); out.push(stat(sum(picks))); }
  return { est: stat(sum(keys)), lo: pct(out, 0.025), hi: pct(out, 0.975) };
}
/** report-level: every report its own cluster */
const byReport = (rs: ReportScore[]) => new Map(rs.map((s) => [s.id, { rows: s.rows, ok: s.ok, wrong: s.wrong, invN: 0, invAll: 0 }]));

console.error("Re-scoring the runs:");
const runs = await scoreRuns();
const S = (k: string) => runs[k]?.scores;
const P = (x: number, d = 2) => `${(100 * x).toFixed(d)}%`;
const D = (x: number, d = 2) => `${x >= 0 ? "+" : "−"}${Math.abs(100 * x).toFixed(d)}`;
const iv = (r: { est: number; lo: number; hi: number }, f: (x: number) => string) => (r.lo === r.hi ? `${f(r.est)} (degenerate; use Wilson)` : `${f(r.est)} (${f(r.lo)} to ${f(r.hi)})`);
const L: string[] = [];
const say = (s = "") => L.push(s);

say("# Cluster bootstrap intervals for the preregistered test");
say();
say(`Made by \`stats/bootstrap.mts\`: ${B.toLocaleString("en")} resamples, seed ${SEED}, percentile 95% intervals. The cluster is the set of results: all printings of one set of values are drawn together (5 reports per set on text; 1 to 5 printed reports per set on images). Report-level intervals (each report drawn on its own) are shown for comparison. Wilson intervals (rows treated as independent) are in the results/*.md files. Model numbers come from the cached replies in cache/, re-scored offline; every re-scored total matches its published results file (checked by the script). Rule-based reader rows are re-run from a LifeFrom checkout (LIFEFROM_DIR) and match the published text totals; its image runs could not be re-made (see below).`);
say();

// 1. rates per reader on seed-5 text
const textRuns: [string, string][] = [["Rule-based reader", "rules-text5"], ["Claude Haiku 5.5", "Claude Haiku 5.5-text5"], ["GPT-5.6 Luna", "GPT-5.6 Luna-text5"], ["Llama 4 Maverick", "Llama 4 Maverick-text5"], ["DeepSeek V4 Flash", "DeepSeek V4 Flash-text5"], ["Rule-based reader, first 30 sets", "rules-text5first30"], ["Claude Sonnet 5.5, first 30 sets", "Claude Sonnet 5.5-text5"], ["Gemini 3.8 Flash, first 30 sets (143 of 150 read)", "Gemini 3.8 Flash-text5"]];
say("## Seed 5 text: correct, wrong and format invariance");
say();
say("| Reader | Reports read | Correct, set-level | Correct, report-level | Wrong, set-level | Wrong, report-level | Same answer in all printings, set-level |");
say("|---|---|---|---|---|---|---|");
for (const [name, key] of textRuns) {
  const rs = S(key);
  if (!rs) { say(`| ${name} | not run (set LIFEFROM_DIR) | | | | | |`); continue; }
  const g = byGroup(rs), keys = [...g.keys()], r = byReport(rs), rk = [...r.keys()];
  const read = rs.filter((s) => !s.crashed).length;
  say(`| ${name} | ${read} of ${rs.length} | ${iv(boot([g], okRate, keys), (x) => P(x))} | ${iv(boot([r], okRate, rk), (x) => P(x))} | ${iv(boot([g], wrongRate, keys), (x) => P(x, 3))} | ${iv(boot([r], wrongRate, rk), (x) => P(x, 3))} | ${iv(boot([g], invRate, keys), (x) => P(x, 1))} |`);
}
say();

// 2. format invariance, model minus rules (paired by set)
say("## Format invariance: model minus rule-based reader (seed 5 text, paired by set)");
say();
say("| Comparison | Set-level bootstrap, points | Newcombe (independent rows), points |");
say("|---|---|---|");
const newcombe: Record<string, string> = { "GPT-5.6 Luna": "−1.4 (−2.5 to −0.5)", "Claude Haiku 5.5": "−0.1 (−0.8 to +0.6)", "Llama 4 Maverick": "−11.1 (−13.3 to −9.2)", "DeepSeek V4 Flash": "−51.0 (−54.1 to −47.8)" };
for (const m of ["Claude Haiku 5.5", "GPT-5.6 Luna", "Llama 4 Maverick", "DeepSeek V4 Flash", "Claude Sonnet 5.5", "Gemini 3.8 Flash"]) {
  const first30 = m === "Claude Sonnet 5.5" || m === "Gemini 3.8 Flash";
  const rules = S(first30 ? "rules-text5first30" : "rules-text5"), model = S(`${m}-text5`);
  if (!rules || !model) { say(`| ${m} − rules | not run (set LIFEFROM_DIR) | |`); continue; }
  const a = byGroup(model), b = byGroup(rules);
  say(`| ${m} − rules${first30 ? " (first 30 sets)" : ""} | ${iv(boot([a, b], invDiff, [...b.keys()]), (x) => D(x, 1))} | ${newcombe[m] ?? "(not in README)"} |`);
}
say();

// 3. photo minus clean, correct rate (paired by set)
say("## Photo minus clean image: correct rate (paired by set)");
say();
say("| Reader | Seed 5 (97 reports), set-level, points | Seed 5, report-level | Seed 6 held out (43 reports), set-level | Seed 6, report-level |");
say("|---|---|---|---|---|");
for (const m of ["Claude Haiku 5.5", "GPT-5.6 Luna", "Llama 4 Maverick", "Gemini 3.8 Flash"]) {
  const cells: string[] = [];
  for (const seed of [5, 6]) {
    const c = S(`${m}-clean${seed}`)!, p = S(`${m}-photo${seed}`)!;
    const gc = byGroup(c), gp = byGroup(p), rc = byReport(c), rp = byReport(p);
    cells.push(iv(boot([gp, gc], okDiff, [...gc.keys()]), (x) => D(x)), iv(boot([rp, rc], okDiff, [...rc.keys()]), (x) => D(x)));
  }
  say(`| ${m}${m.startsWith("Gemini") ? " (reports read in both: see note)" : ""} | ${cells.join(" | ")} |`);
}
say("| Rule-based reader (OCR + rules) | not reproducible here (see below); Newcombe −4.6 (−7.3 to −1.9) | | not reproducible here; Newcombe −2.1 (−5.8 to +1.6) | |");
say();
say("Gemini 3.8 Flash's caps left 10 clean and 13 photo seed-5 images unread (and about half of seed 6); its difference is over the reports each condition read, as in the README.");
say();
say("**The rule-based reader's image runs are not re-made here.** Its code is not in this repository. Running the LifeFrom checkout of 26 Nov 2026 through `readers/lifefrom-local.mts` on the same pictures gave totals different from the published files of 17-18 Nov (for example seed-5 photo: 751 correct against 1,351 published), so either the app's photo path has changed since those runs or they used a pipeline that is not recorded here; their per-report outcomes cannot be recovered. Only their published totals exist, and the Newcombe intervals above use those. Its text runs do re-make exactly.");
say();
say("## How to read these intervals");
say();
say("- Set-level intervals are the honest ones for this design: the five printings of a set share its values, so a reader that mis-converts one marker tends to do so in several printings at once. Where errors cluster, set-level intervals are wider than report-level and row-level (Wilson, Newcombe) ones: DeepSeek V4 Flash's empty replies make its invariance difference −37 to −64 points at set level against −48 to −54 by Newcombe. Where errors are spread out, the intervals are close.");
say("- The paired photo-minus-clean intervals can be narrower than Newcombe's, because Newcombe's method treats the clean and photo readings as independent samples when they are the same reports.");
say("- Intervals are percentile intervals; with few errors (Haiku: 4 wrong values in 300 reports) the resampling distribution is lumpy and the interval is approximate.");
console.log(L.join("\n"));
if (process.argv.includes("--write")) {
  if (!hasRules()) { console.error("--write needs LIFEFROM_DIR (the rule-based rows would be missing)"); process.exit(2); }
  writeFileSync(join(ROOT, "results", "cluster-bootstrap.md"), L.join("\n") + "\n");
  console.error("wrote results/cluster-bootstrap.md");
}
process.exit(0);
