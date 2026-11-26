/* Every difference of two proportions quoted in README.md, recomputed with its 95% interval (Newcombe's hybrid score
   interval, method 10 in Newcombe 1998, Stat Med 17:873-890: Wilson intervals for each proportion, combined). The counts
   come from the published results/*.md files; the cached model replies are re-scored offline first (stats/rescore.mts)
   to show those files match the replies in cache/.

     npx tsx stats/differences.mts            # prints the table; exit 1 if a README number does not reproduce

   Newcombe's method treats the two proportions as independent samples. The comparisons here are paired (the same
   reports, or the same markers, read twice), and rows within a report are not independent; stats/bootstrap.mts gives
   report-level intervals that respect both. */
import { cached, scoreAll, checkTotals, SETS, published } from "./rescore.mts";

const Z = 1.959963984540054;
export function wilson(k: number, n: number): [number, number] {
  if (!n) return [0, 1];
  const p = k / n, d = 1 + (Z * Z) / n, c = p + (Z * Z) / (2 * n), w = Z * Math.sqrt((p * (1 - p)) / n + (Z * Z) / (4 * n * n));
  return [Math.max(0, (c - w) / d), Math.min(1, (c + w) / d)];
}
/** p1 - p2 with Newcombe's hybrid score interval (method 10) */
export function newcombe(k1: number, n1: number, k2: number, n2: number) {
  const p1 = k1 / n1, p2 = k2 / n2, [l1, u1] = wilson(k1, n1), [l2, u2] = wilson(k2, n2), d = p1 - p2;
  return { d, lo: d - Math.sqrt((p1 - l1) ** 2 + (u2 - p2) ** 2), hi: d + Math.sqrt((u1 - p1) ** 2 + (p2 - l2) ** 2) };
}

const F = {
  rulesText: "2026-11-17-lifefrom-reader-after-lifefrom-reader-text-seed5.md",
  rules: (st: string, seed: number) => `2026-11-${st === "clean" && seed === 5 ? 17 : 18}-lifefrom-file-lifefrom-reader-${st}-seed${seed}-kind-lines.md`,
  model: (m: string, kind: string) => `2026-11-18-openrouter-${m}${kind}.md`,
};
const M = { haiku: "anthropic_claude-haiku-5.5", luna: "openai_gpt-5.6-luna", llama: "meta-llama_llama-4-maverick", deepseek: "deepseek_deepseek-v4-flash", gemini: "google_gemini-3.8-flash" };

type Row = { what: string; readme: string | null; a: string; b: string; measure: "ok" | "inv" };
const rows: Row[] = [
  // Key finding 3 and H2: format invariance, model minus rule-based reader (seed 5 text, 990 markers each)
  { what: "Invariance, GPT-5.6 Luna − rules (seed 5 text)", readme: "−1.4 (−2.5 to −0.5)", a: F.model(M.luna, "-seed5"), b: F.rulesText, measure: "inv" },
  { what: "Invariance, Claude Haiku 5.5 − rules (H2)", readme: "−0.1 (−0.8 to +0.6)", a: F.model(M.haiku, "-seed5"), b: F.rulesText, measure: "inv" },
  { what: "Invariance, Llama 4 Maverick − rules", readme: null, a: F.model(M.llama, "-seed5"), b: F.rulesText, measure: "inv" },
  { what: "Invariance, DeepSeek V4 Flash − rules", readme: null, a: F.model(M.deepseek, "-seed5"), b: F.rulesText, measure: "inv" },
  // Key finding 4, H3 and the images table: correct rate, photo minus clean (seed 5, 97 reports)
  { what: "Photo − clean, OCR + rules (seed 5)", readme: "−4.6 (−7.3 to −1.9)", a: F.rules("photo", 5), b: F.rules("clean", 5), measure: "ok" },
  { what: "Photo − clean, Claude Haiku 5.5 (seed 5)", readme: "+0.1 (−0.2 to +0.3)", a: F.model(M.haiku, "-photo-seed5-kind-lines"), b: F.model(M.haiku, "-clean-seed5-kind-lines"), measure: "ok" },
  { what: "Photo − clean, GPT-5.6 Luna (seed 5)", readme: "+0.2 (−0.3 to +0.7)", a: F.model(M.luna, "-photo-seed5-kind-lines"), b: F.model(M.luna, "-clean-seed5-kind-lines"), measure: "ok" },
  { what: "Photo − clean, Llama 4 Maverick (seed 5)", readme: "−0.6 (−1.9 to +0.7)", a: F.model(M.llama, "-photo-seed5-kind-lines"), b: F.model(M.llama, "-clean-seed5-kind-lines"), measure: "ok" },
  { what: "Photo − clean, Gemini 3.8 Flash (seed 5, reports read)", readme: "0", a: F.model(M.gemini, "-photo-seed5-kind-lines"), b: F.model(M.gemini, "-clean-seed5-kind-lines"), measure: "ok" },
  // held-out seed 6 (43 reports)
  { what: "Photo − clean, OCR + rules (seed 6)", readme: "−2.1 (−5.8 to +1.6)", a: F.rules("photo", 6), b: F.rules("clean", 6), measure: "ok" },
  { what: "Photo − clean, Claude Haiku 5.5 (seed 6)", readme: "within ±0.4", a: F.model(M.haiku, "-photo-seed6-kind-lines"), b: F.model(M.haiku, "-clean-seed6-kind-lines"), measure: "ok" },
  { what: "Photo − clean, GPT-5.6 Luna (seed 6)", readme: "within ±0.4", a: F.model(M.luna, "-photo-seed6-kind-lines"), b: F.model(M.luna, "-clean-seed6-kind-lines"), measure: "ok" },
  { what: "Photo − clean, Llama 4 Maverick (seed 6)", readme: "within ±0.4", a: F.model(M.llama, "-photo-seed6-kind-lines"), b: F.model(M.llama, "-clean-seed6-kind-lines"), measure: "ok" },
];

// 1. the published files agree with the cached replies
console.log("Offline re-score of the cached replies against the published results files:");
let drift = 0;
const runs: [string, "" | "clean" | "photo", keyof typeof SETS, string][] = [
  ["Claude Haiku 5.5", "", "text5", F.model(M.haiku, "-seed5")], ["GPT-5.6 Luna", "", "text5", F.model(M.luna, "-seed5")],
  ["Llama 4 Maverick", "", "text5", F.model(M.llama, "-seed5")], ["DeepSeek V4 Flash", "", "text5", F.model(M.deepseek, "-seed5")],
  ["Claude Sonnet 5.5", "", "text5first30", F.model("anthropic_claude-sonnet-5.5", "-seed5")], ["Gemini 3.8 Flash", "", "text5first30", F.model(M.gemini, "-seed5")],
  ...(["clean", "photo"] as const).flatMap((st) => (["Claude Haiku 5.5", "GPT-5.6 Luna", "Llama 4 Maverick", "Gemini 3.8 Flash"] as const).flatMap((m) =>
    ([5, 6] as const).map((seed) => [m, st, seed === 5 ? "img5" : "img6", F.model(M[({ "Claude Haiku 5.5": "haiku", "GPT-5.6 Luna": "luna", "Llama 4 Maverick": "llama", "Gemini 3.8 Flash": "gemini" } as const)[m]], `-${st}-seed${seed}-kind-lines`)] as [string, "clean" | "photo", keyof typeof SETS, string]))),
];
for (const [m, st, set, file] of runs) {
  const diff = checkTotals(await scoreAll(SETS[set](), cached(m, st)), file);
  if (diff.length) drift++;
  console.log(`  ${diff.length ? "DIFFERS" : "matches"}  ${file}${diff.length ? ": " + diff.join(", ") : ""}`);
}
console.log("  (the rule-based reader's files cannot be re-made from this repository: its code is not in it; stats/bootstrap.mts re-runs it when LIFEFROM_DIR is set)\n");

// 2. the differences
const pts = (x: number) => (x * 100).toFixed(1).replace(/^(?!-)/, "+").replace("-", "−").replace(/^\+0\.0$/, "0.0");
const fmt = (r: { d: number; lo: number; hi: number }) => `${pts(r.d)} (${pts(r.lo)} to ${pts(r.hi)})`;
const norm = (s: string) => s.replace(/\+0\.0\b|−0\.0\b/g, "0.0");
let bad = 0;
const out: string[] = ["| Comparison | Counts (a; b) | Computed, points (95% CI) | README | Reproduces |", "|---|---|---|---|---|"];
for (const r of rows) {
  const A = published(r.a), B = published(r.b);
  const [k1, n1, k2, n2] = r.measure === "inv" ? [A.invAll, A.invN, B.invAll, B.invN] : [A.ok, A.rows, B.ok, B.rows];
  const res = newcombe(k1, n1, k2, n2);
  let ok: string;
  if (r.readme === null) ok = "(not quoted)";
  else if (r.readme === "0") ok = res.d === 0 ? "yes" : "NO";
  else if (r.readme === "within ±0.4") ok = Math.abs(res.d) <= 0.004 + 1e-12 ? "yes" : "NO";
  else ok = norm(fmt(res).replace(/^\+/, r.readme.startsWith("+") ? "+" : "")) === norm(r.readme) || norm(fmt(res)) === norm(r.readme) ? "yes" : "NO";
  if (ok === "NO") bad++;
  out.push(`| ${r.what} | ${k1}/${n1}; ${k2}/${n2} | ${fmt(res)} | ${r.readme ?? ""} | ${ok} |`);
}
console.log(out.join("\n"));
console.log(`\n${bad ? `${bad} README number(s) do not reproduce.` : "Every README difference reproduces."}${drift ? ` ${drift} results file(s) differ from the cached replies.` : ""}`);
process.exit(bad || drift ? 1 : 0);
