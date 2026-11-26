/* Run-to-run variation (exploratory, 26 Nov 2026; not preregistered).

   Compares independent runs of one model on the same reports, from run.mts --rows-out files (the harness's own scoring,
   row by row): per run, results read right, wrong and missed with Wilson 95% intervals; the spread between runs; and
   whether the same results go wrong in every run.

     npx tsx exploratory/repeats.mts "run 1 (preregistered)=a.jsonl" "run 2=b.jsonl" … [--md out.md] [--json out.json] */
import { readFileSync, writeFileSync } from "node:fs";
import { newcombe, wilson } from "./stats.mts";

const args = process.argv.slice(2);
const opt = (k: string) => { const i = args.indexOf(`--${k}`); return i < 0 ? undefined : args[i + 1]; };
const runs = args.filter((a, i) => a.includes("=") && !args[i - 1]?.startsWith("--")).map((a) => { const [label, file] = a.split(/=(.*)/s); return { label, rows: readFileSync(file, "utf8").split("\n").filter(Boolean).map((l) => JSON.parse(l) as { id: string; slug: string; outcome: string; converted: boolean }) }; });
const pct = (k: number, n: number) => `${((100 * k) / n).toFixed(2)}%`;
const ci = (k: number, n: number) => { const [a, b] = wilson(k, n); return `${(100 * a).toFixed(2)}–${(100 * b).toFixed(2)}%`; };

const per = runs.map((r) => {
  const n = r.rows.length, ok = r.rows.filter((x) => x.outcome === "ok").length, wrong = r.rows.filter((x) => x.outcome === "wrong");
  return { label: r.label, n, ok, wrong: wrong.length, wrongConv: wrong.filter((x) => x.converted).length, miss: r.rows.filter((x) => x.outcome === "miss").length, wrongSet: new Set(wrong.map((x) => `${x.id}|${x.slug}`)) };
});
const L: string[] = [];
L.push("| Run | Results | Correct | 95% interval | Wrong | of which needed converting | Missed |", "|---|---|---|---|---|---|---|");
for (const p of per) L.push(`| ${p.label} | ${p.n} | ${pct(p.ok, p.n)} | ${ci(p.ok, p.n)} | ${p.wrong} | ${p.wrongConv} | ${p.miss} |`);
const w = per.map((p) => p.wrong), mean = w.reduce((a, b) => a + b, 0) / w.length, sd = Math.sqrt(w.reduce((a, b) => a + (b - mean) ** 2, 0) / Math.max(1, w.length - 1));
const best = per.reduce((a, b) => (b.ok / b.n > a.ok / a.n ? b : a)), worst = per.reduce((a, b) => (b.ok / b.n < a.ok / a.n ? b : a));
const [d, lo, hi] = newcombe(best.ok, best.n, worst.ok, worst.n);
L.push("", `- **Spread:** wrong values per run ${Math.min(...w)} to ${Math.max(...w)} (mean ${mean.toFixed(1)}, SD ${sd.toFixed(1)}). Best minus worst run, correct rate: ${(100 * d).toFixed(2)} points (Newcombe 95% CI ${(100 * lo).toFixed(2)} to ${(100 * hi).toFixed(2)}; the runs share their reports, so this interval, which treats them as independent, is conservative).`);
// do the same results fail?
const count = new Map<string, number>();
for (const p of per) for (const k of p.wrongSet) count.set(k, (count.get(k) ?? 0) + 1);
const union = count.size, inAll = [...count.values()].filter((c) => c === per.length).length, once = [...count.values()].filter((c) => c === 1).length;
L.push(`- **Same results wrong?** ${union} distinct results were wrong in at least one of ${per.length} runs: ${inAll} in every run, ${union - inAll - once} in some, ${once} in only one run.`);
const jac: string[] = [];
for (let i = 0; i < per.length; i++) for (let j = i + 1; j < per.length; j++) {
  const a = per[i].wrongSet, b = per[j].wrongSet, inter = [...a].filter((x) => b.has(x)).length, uni = new Set([...a, ...b]).size;
  jac.push(`${per[i].label} / ${per[j].label}: ${inter} shared of ${uni} (Jaccard ${uni ? (inter / uni).toFixed(2) : "–"})`);
}
L.push(`- **Overlap between pairs of runs:** ${jac.join("; ")}.`);
const md = L.join("\n");
console.log(md);
if (opt("md")) writeFileSync(opt("md")!, md + "\n");
if (opt("json")) writeFileSync(opt("json")!, JSON.stringify({ runs: per.map(({ wrongSet, ...p }) => ({ ...p, wrongRows: [...wrongSet] })), union, inAll, once, meanWrong: mean, sdWrong: sd, bestMinusWorst: { d, lo, hi } }, null, 1) + "\n");
