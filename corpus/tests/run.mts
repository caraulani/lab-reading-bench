/* lab-report-corpus: runnable checks (25 Nov 2026).   npx tsx corpus/tests/run.mts [--built corpus-out/sample]

   1. The benchmark's own reports are unchanged: hashes of makeReports, makeVariants and toHl7 output match the ones taken
      at commit 3376d2e, before any corpus code existed.
   2. The corpus generator is deterministic and its splits depend only on the report id.
   3. The printed text agrees with the answer key (the number in value_text is the key's value).
   4. Clinical consistency, on the true values and on the printed key.
   5. A built corpus (with --built) is complete: every file listed exists with its checksum, boxes fall inside pictures,
      and the answer-key reader scores 100%. */
import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { execFileSync } from "node:child_process";
import * as G from "../../generate.mts";
import { makeDoc, splitOf, type KeyRow } from "../compose.mts";
import { makePerson, valuesOf, ckdEpi2021 } from "../values.mts";
import { paginate } from "../html.mts";

let fails = 0, checks = 0;
const ok = (cond: boolean, what: string) => { checks++; if (!cond) { fails++; console.error("FAIL", what); } };
const h = (x: unknown) => createHash("sha256").update(JSON.stringify(x)).digest("hex");

// 1. legacy reports, byte for byte (hashes taken on the unmodified generator, commit 3376d2e)
const LEGACY: [string, () => unknown, string][] = [
  ["reports seed1 n2000", () => G.makeReports(2000, 1), "fec195bdb884a17c194576a0da606baf2aef568334ce34b83e76374fac5d1267"],
  ["reports seed2 n2000", () => G.makeReports(2000, 2), "0f85770c39c76e693db8b89f834ba21768486ada4cc9cb9ce61c0647739b7ed5"],
  ["reports seed3 n2000", () => G.makeReports(2000, 3), "3b8b5c6b91f7b51cde96c766a2b753737ac72031706732ebcadccd6f8b0cd791"],
  ["reports seed4 n2000", () => G.makeReports(2000, 4), "ba63831be1883a70adb8ca85f2fecb961bf4dd6026d8da7e2ae9cba4d90cba22"],
  ["reports seed5 n2000", () => G.makeReports(2000, 5), "81ee91847927867c0f0a8f649fdd3e90c93ffe7c1960a0d401436b1c42176352"],
  ["reports seed6 n2000", () => G.makeReports(2000, 6), "2a1f381d3813aacd8a36ee22fc259aa3f63712cb3ad4ab1abf343922ba1d9cad"],
  ["variants seed5 60x5", () => G.makeVariants(60, 5, 5), "fe512b239e789cbf942790deea50a8125e19a5cce01eaab1eec8f8f57073c09e"],
  ["hl7 seed1 n2000", () => G.makeReports(2000, 1).map(G.toHl7), "45d4400c453fe4d25e133c46647e24904c462aae2c7168e1c3b999e2c32bec37"],
];
for (const [name, f, want] of LEGACY) ok(h(f()) === want, `legacy output changed: ${name}`);

// 2. determinism and splits
const N = 1500;
const docs = Array.from({ length: N }, (_, i) => makeDoc(1, i));
for (const d of docs) paginate(d);
ok(h(makeDoc(1, 7)) === h(makeDoc(1, 7)), "makeDoc is not deterministic");
ok(docs.every((d) => d.preset !== "de-mono" || splitOf(d.id) === "test"), "the held-out layout appears outside test");
const share = (s: string) => docs.filter((d) => splitOf(d.id) === s).length / N;
ok(share("train") > 0.75 && share("train") < 0.85 && share("test") > 0.07 && share("test") < 0.13, `split shares off: ${share("train")} ${share("test")}`);

// 3. printed text against the key
const num = (k: KeyRow, comma: boolean) => {
  let t = k.value_text.replace(/^[<>]=?\s*/, "").split(/\s(?=\D)/)[0].replace(/\s/g, "");
  if (comma) t = t.replace(",", ".");
  return Number(t);
};
let textRows = 0;
for (const d of docs) for (const k of d.key) {
  // an abstain row has no number, except a printed number whose marker cannot be told without its unit
  if (k.action === "abstain") { ok(k.value === null || /_no_unit$/.test(k.abstain_reason ?? ""), `${k.report_id} ${k.row_id}: abstain row with a value`); continue; }
  textRows++;
  ok(Math.abs(num(k, d.decimal === "comma") - (k.value as number)) < 1e-9, `${k.report_id} ${k.row_id}: value_text "${k.value_text}" is not ${k.value}`);
  ok(k.page !== null && k.page >= 1, `${k.report_id} ${k.row_id}: no page`);
  if (k.comparator) ok(/^[<>]/.test(k.value_text), `${k.report_id} ${k.row_id}: comparator without a sign`);
}

// 4. clinical consistency on true values: 20,000 invented people
let people = 0;
const rng = G.rng(4242);
for (let i = 0; i < 20000; i++) {
  const p = makePerson(rng), v = valuesOf(p);
  people++;
  ok(Math.abs(v["transferrin-saturation"] - (100 * v["serum-iron"]) / v.tibc) <= 0.5 + 1e-9, `TSAT ${i}`);
  ok(Math.abs(v["total-cholesterol"] - (v["ldl-cholesterol"] + v["hdl-cholesterol"] + v.triglycerides / 5)) <= 0.5 + 1e-9, `Friedewald ${i}`);
  const pct = ["neutrophils", "lymphocytes", "monocytes", "eosinophils", "basophils"].map((c) => v[`${c}-percent`]);
  ok(Math.abs(pct.reduce((a, b) => a + b, 0) - 100) < 1e-6, `differential sum ${i}: ${pct}`);
  ok(pct.every((x) => x >= 0), `negative differential ${i}`);
  const abs = ["neutrophils", "lymphocytes", "monocytes", "eosinophils", "basophils"].reduce((s, c) => s + v[`${c}-absolute`], 0);
  ok(Math.abs(abs - v.wbc) <= 0.03, `absolute counts sum ${i}: ${abs} vs ${v.wbc}`);
  ok(Math.abs(v.mchc - (100 * v.hemoglobin) / v.hematocrit) <= 0.5, `MCHC ${i}`);
  ok(Math.abs(v.mcv - (10 * v.hematocrit) / v.rbc) <= 0.6, `MCV ${i}`);
  ok(v.egfr === Math.round(ckdEpi2021(v["creatinine-serum"], p.age, p.sex)), `eGFR ${i}`);
  ok(Math.abs(v["urine-acr"] - v["urine-albumin"] / (v["urine-creatinine"] * 0.01)) <= 0.05 + 1e-9, `ACR ${i}`);
  ok(Object.values(v).every((x) => Number.isFinite(x) && x >= 0), `non-finite or negative value ${i}`);
}
// ... and on the printed key: Friedewald holds for every calculated LDL printed in mg/dL beside TC, HDL and TG
let fried = 0, tsat = 0, diffs = 0;
for (const d of docs) {
  const cur = (s: string) => d.key.find((k) => k.marker_slug === s && k.is_current && k.action === "read" && !k.comparator);
  const [tc, hdl, tg, ldl] = ["total-cholesterol", "hdl-cholesterol", "triglycerides", "ldl-cholesterol"].map(cur);
  if (tc && hdl && tg && ldl && tc.unit_expected === "mg/dL") { fried++; ok(Math.abs(ldl.value! - (tc.value! - hdl.value! - tg.value! / 5)) <= 1.5, `${d.id}: printed LDL is not Friedewald`); }
  const [fe, ti, sa] = ["serum-iron", "tibc", "transferrin-saturation"].map(cur);
  if (fe && ti && sa) { tsat++; ok(Math.abs(sa.value! - (100 * fe.value_conv!) / ti.value_conv!) <= 1.5, `${d.id}: printed TSAT is not iron/TIBC`); }
  const pcts = ["neutrophils", "lymphocytes", "monocytes", "eosinophils", "basophils"].map((c) => cur(`${c}-percent`));
  if (pcts.every(Boolean)) { diffs++; ok(Math.abs(pcts.reduce((s, k) => s + k!.value!, 0) - 100) <= 0.25, `${d.id}: printed differential does not sum to 100`); }
  // LDL is never printed as a number when triglycerides are 400 mg/dL or more
  if (tg && ldl && tg.value_conv! >= 400) ok(ldl.hard_cases.includes("calculated") === false || ldl.action !== "read", `${d.id}: LDL calculated at TG >= 400`);
}
ok(fried > 50 && tsat > 50 && diffs > 50, `too few consistency checks on the key: ${fried} ${tsat} ${diffs}`);

// 5. a built corpus
const bi = process.argv.indexOf("--built");
if (bi > 0) {
  const dir = resolve(process.argv[bi + 1]);
  const sums = readFileSync(join(dir, "SHA256SUMS"), "utf8").trim().split("\n");
  let missing = 0, bad = 0;
  for (const l of sums) {
    const [hash, rel] = [l.slice(0, 64), l.slice(66)];
    if (rel === "SHA256SUMS") continue;
    const p = join(dir, rel);
    if (!existsSync(p)) { missing++; continue; }
    if (createHash("sha256").update(readFileSync(p)).digest("hex") !== hash) bad++;
  }
  ok(missing === 0 && bad === 0, `SHA256SUMS: ${missing} missing, ${bad} changed`);
  // every value box, carried onto every picture of its page, falls inside that picture
  for (const s of ["train", "validation"]) {
    const pages = readFileSync(join(dir, "pages", `${s}.jsonl`), "utf8").split("\n").filter(Boolean).map((l) => JSON.parse(l));
    const key = new Map<string, { row_id: string; bbox_value: number[] | null }[]>();
    for (const l of readFileSync(join(dir, "answers", `${s}.jsonl`), "utf8").split("\n").filter(Boolean)) { const k = JSON.parse(l); const id = `${k.report_id}|${k.page}`; (key.get(id) ?? key.set(id, []).get(id)!).push(k); }
    let boxes = 0;
    for (const pg of pages) for (const k of key.get(`${pg.report_id}|${pg.page}`) ?? []) {
      if (!k.bbox_value) continue;
      const H = pg.page_to_pixel as number[][];
      const at = (x: number, y: number) => { const w = H[2][0] * x + H[2][1] * y + H[2][2]; return [(H[0][0] * x + H[0][1] * y + H[0][2]) / w, (H[1][0] * x + H[1][1] * y + H[1][2]) / w]; };
      const [x0, y0, x1, y1] = k.bbox_value;
      const pts = [at(x0, y0), at(x1, y0), at(x1, y1), at(x0, y1)];
      boxes++;
      ok(pts.every(([x, y]) => x >= -1 && y >= -1 && x <= pg.width + 1 && y <= pg.height + 1), `${pg.file_name} ${k.row_id}: value box outside the picture`);
    }
    ok(boxes > 0, `no boxes checked in ${s}`);
  }
  const out = execFileSync("npx", ["tsx", "corpus/score.mts", "--reader", "readers/corpus-oracle.mts", "--corpus", dir, "--split", "validation", "--input", "text", "--no-write"], { cwd: join(import.meta.dirname, "..", ".."), encoding: "utf8" });
  ok(/\| ok \| \d+ \| 100\.0%/.test(out) && /\| abstained \| \d+ \| 100\.0%|\| abstained \| 0 \| –/.test(out), "the answer-key reader does not score 100%");
}

console.log(`${checks} checks, ${fails} failed (${N} reports, ${textRows} printed results, ${people} invented people; Friedewald ${fried}, TSAT ${tsat}, differential ${diffs} reports checked on the key)`);
process.exit(fails ? 1 : 0);
