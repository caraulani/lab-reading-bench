/* A fixed random subset of a corpus split, as a corpus directory that corpus/load.mts and corpus/score.mts read unchanged
   (exploratory, 26 Nov 2026). The reports are chosen by a seeded shuffle of the split's report ids, so the subset is
   the same on every machine; the pictures and answer files are linked, not copied.

     npx tsx exploratory/corpus-subset.mts --corpus corpus-out/full --split test --n 100 --seed 5 --out corpus-out/test-100-seed5 */
import { mkdirSync, readFileSync, symlinkSync, writeFileSync, existsSync } from "node:fs";
import { join, resolve } from "node:path";

const arg = (k: string, d?: string) => { const i = process.argv.indexOf(`--${k}`); return i < 0 ? d : process.argv[i + 1]; };
const SRC = resolve(arg("corpus", "corpus-out/full")!), SPLIT = arg("split", "test")!, N = Number(arg("n", "100")), SEED = Number(arg("seed", "5")), OUT = resolve(arg("out")!);
// mulberry32
let s = SEED >>> 0;
const rand = () => { s = (s + 0x6d2b79f5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
const lines = (p: string) => readFileSync(p, "utf8").split("\n").filter(Boolean);
const docs = lines(join(SRC, "documents", `${SPLIT}.jsonl`));
const ids = docs.map((l) => JSON.parse(l).report_id as string).sort();
for (let i = ids.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [ids[i], ids[j]] = [ids[j], ids[i]]; }
const keep = new Set(ids.slice(0, N));
const filter = (rel: string) => { const p = join(SRC, rel); if (!existsSync(p)) return; mkdirSync(join(OUT, rel, ".."), { recursive: true }); writeFileSync(join(OUT, rel), lines(p).filter((l) => keep.has(JSON.parse(l).report_id ?? JSON.parse(l).file_name?.split("_p")[0])).join("\n") + "\n"); };
filter(`documents/${SPLIT}.jsonl`);
filter(`pages/${SPLIT}.jsonl`);
if (SPLIT === "test") { filter("test_answers/test.jsonl"); filter("test_answers/transcripts.jsonl"); } else filter(`answers/${SPLIT}.jsonl`);
for (const d of ["data", "pdf"]) if (!existsSync(join(OUT, d)) && existsSync(join(SRC, d))) symlinkSync(join(SRC, d), join(OUT, d));
writeFileSync(join(OUT, "SUBSET.txt"), `${keep.size} of ${docs.length} ${SPLIT} reports from ${SRC}, seeded shuffle (mulberry32, seed ${SEED}):\n${[...keep].sort().join("\n")}\n`);
console.log(`${keep.size} reports -> ${OUT}`);
