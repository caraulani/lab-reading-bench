/* Reading accuracy as printed (exploratory, 26 Nov 2026; not preregistered).

   Scores replies made with PROMPT=printed against what the report prints, not against the conventional value: a row is
   read right when its number equals the printed number (to the printed decimals) and its unit is the printed unit
   (spelling normalised: case, µ/u, spaces, mcg/ug). Separately it counts rows whose number is right but whose unit is
   not, and rows where the model converted although it was told not to (the number matches the conventional value).

     npx tsx exploratory/as-printed.mts --cache cache/anthropic_claude-haiku-5.5-printed [--n 60 --variants 5 --seed 5] [--json out.json] */
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { ANALYTES, makeVariants } from "../generate.mts";
import { parseReply } from "../readers/parse-reply.mts";
import { wilson } from "./stats.mts";

const arg = (k: string, d?: string) => { const i = process.argv.indexOf(`--${k}`); return i < 0 ? d : process.argv[i + 1]; };
const CACHE = arg("cache")!;
const reports = makeVariants(Number(arg("n", "60")), Number(arg("variants", "5")), Number(arg("seed", "5")));
const ukey = (u: string) => u.toLowerCase().replace(/[µμ]/g, "u").replace(/mcg/g, "ug").replace(/×/g, "x").replace(/[\s.]/g, "").replace(/\^/g, "").replace(/⁹/g, "9").replace(/¹²/g, "12").replace(/³/g, "3");
const DP = Object.fromEntries(ANALYTES.map((a) => [a.slug, a.dp]));
const decimals = (t: string) => { const m = t.replace(/\s/g, "").match(/[.,](\d+)\D*$/); return m ? m[1].length : 0; };

const c = { rows: 0, read: 0, readUnitOther: 0, convertedAnyway: 0, wrong: 0, miss: 0, replies: 0, empty: 0, needConv: 0, needConvRead: 0, needConvWrong: 0 };
const wrongRows: string[] = [];
for (const r of reports) {
  const f = join(CACHE, `${r.id}.txt`);
  if (!existsSync(f)) continue;
  c.replies++;
  const text = readFileSync(f, "utf8");
  if (text === "<empty reply>") c.empty++;
  const p = parseReply(text === "<empty reply>" ? "" : text);
  for (const t of r.truth) {
    c.rows++;
    if (t.converted) c.needConv++;
    const row = p.rows.find((x) => x.slug === t.slug);
    if (!row) { c.miss++; continue; }
    // a decimal comma may be printed as "2,24" (2.24) or a thousands separator "2,240" (2240); the truth has the number
    const tol = 0.5 * 10 ** -decimals(t.printed.text) + 1e-9;
    if (Math.abs(row.value - t.printed.value) <= tol) {
      if (ukey(row.unit) === ukey(t.printed.unit)) c.read++; else c.readUnitOther++;
      if (t.converted) c.needConvRead++;
    } else if (t.converted && Math.abs(row.value - t.expected.value) <= Math.max(0.007 * Math.abs(t.expected.value), 0.006, 0.5 * 10 ** -(DP[t.slug] ?? 2) + 1e-9)) c.convertedAnyway++;
    else { c.wrong++; if (t.converted) c.needConvWrong++; wrongRows.push(`${r.id} ${t.slug} printed "${t.printed.text} ${t.printed.unit}" read ${row.value} ${row.unit}`); }
  }
}
const pc = (k: number, n: number) => (n ? `${((100 * k) / n).toFixed(2)}%` : "–");
const ci = (k: number, n: number) => { const [a, b] = wilson(k, n); return `${(100 * a).toFixed(2)}–${(100 * b).toFixed(2)}%`; };
const L = [
  `${c.replies} replies (${c.empty} empty), ${c.rows} results.`,
  "",
  "| As printed | Rows | Share | 95% interval |", "|---|---|---|---|",
  `| number and unit as printed | ${c.read} | ${pc(c.read, c.rows)} | ${ci(c.read, c.rows)} |`,
  `| number as printed, unit written differently | ${c.readUnitOther} | ${pc(c.readUnitOther, c.rows)} | ${ci(c.readUnitOther, c.rows)} |`,
  `| converted although told not to (right conventional number) | ${c.convertedAnyway} | ${pc(c.convertedAnyway, c.rows)} | ${ci(c.convertedAnyway, c.rows)} |`,
  `| a different number (misread) | ${c.wrong} | ${pc(c.wrong, c.rows)} | ${ci(c.wrong, c.rows)} |`,
  `| missed | ${c.miss} | ${pc(c.miss, c.rows)} | ${ci(c.miss, c.rows)} |`,
  "",
  `Of ${c.needConv} results printed in a unit that the preregistered prompt asked to convert: number read as printed ${c.needConvRead}, misread ${c.needConvWrong}.`,
];
console.log(L.join("\n"));
if (wrongRows.length) console.log("\nMisread:\n" + wrongRows.slice(0, 30).map((x) => "    " + x).join("\n"));
if (arg("json")) writeFileSync(arg("json")!, JSON.stringify({ cache: CACHE, ...c, numberRight: c.read + c.readUnitOther, wrongRows }, null, 1) + "\n");
