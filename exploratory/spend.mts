/* Spend and model metadata per cache directory, from the .meta.json files written since 26 Nov 2026: calls, OpenRouter
   cost, tokens, and every distinct resolved model and provider that answered.
     npx tsx exploratory/spend.mts [cache dirs…]   (default: every cache directory that has .meta.json files) */
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
const ROOT = join(import.meta.dirname, "..", "cache");
const dirs = process.argv.slice(2).length ? process.argv.slice(2) : readdirSync(ROOT).map((d) => join(ROOT, d));
let total = 0;
console.log("| Cache | Calls | Cost (USD) | Prompt tokens | Completion tokens | Model that answered | Provider |\n|---|---|---|---|---|---|---|");
for (const d of dirs) {
  if (!existsSync(d)) continue;
  const metas = readdirSync(d).filter((f) => f.endsWith(".meta.json")).map((f) => JSON.parse(readFileSync(join(d, f), "utf8")));
  if (!metas.length) continue;
  const cost = metas.reduce((a, m) => a + (m.usage?.cost ?? 0), 0), pt = metas.reduce((a, m) => a + (m.usage?.prompt_tokens ?? 0), 0), ct = metas.reduce((a, m) => a + (m.usage?.completion_tokens ?? 0), 0);
  const tally = (k: string) => [...metas.reduce((m, x) => m.set(x[k] ?? "?", (m.get(x[k] ?? "?") ?? 0) + 1), new Map<string, number>())].map(([v, n]) => `${v} (${n})`).join(", ");
  total += cost;
  console.log(`| ${d.split("/").pop()} | ${metas.length} | ${cost.toFixed(3)} | ${pt} | ${ct} | ${tally("model")} | ${tally("provider")} |`);
}
console.log(`\nTotal: $${total.toFixed(2)}`);
