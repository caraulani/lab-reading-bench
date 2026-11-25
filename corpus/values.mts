/* lab-report-corpus: one invented person's results, internally consistent (25 Nov 2026).

   A person has a sex, an age and a few conditions. Each marker gets a latent score z: standard normal for a person
   without a condition, shifted by the conditions that move it. z maps to a value through the marker's design anchors
   (normal or log-normal, with the anchors as its 2.5th and 97.5th percentiles). Markers that a lab calculates, or that
   are tied by arithmetic, are computed from the others instead of drawn:
     - haematocrit = RBC × MCV / 10; haemoglobin = haematocrit × MCHC / 100; MCH = MCV × MCHC / 100
     - the differential: five fractions normalised to 100%, absolute = WBC × percent / 100
     - transferrin saturation = iron / TIBC × 100
     - total cholesterol = LDL + HDL + TG / 5 (mg/dL), so a calculated LDL is exactly Friedewald's
     - eGFR from creatinine, age and sex by CKD-EPI 2021
     - urine albumin/creatinine ratio = albumin (mg/L) / (creatinine (mg/dL) × 0.01)
   A second, earlier draw for a cumulative report perturbs every z a little and recomputes everything, so both dates are
   consistent. Nothing here is population data: the conditions and shifts are design choices, listed in METHODS.md. */
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { rng } from "../generate.mts";
import { BY, CATALOG, type CA } from "./catalog.mts";

export type R = ReturnType<typeof rng>;
export type Person = { sex: "M" | "F"; age: number; conditions: string[]; z: Record<string, number>; shift: Record<string, number> };

/* conditions: probability, and how many SDs they move each marker's latent score */
const CONDITIONS: { id: string; p: number; shift: Record<string, number> }[] = [
  { id: "diabetes", p: 0.09, shift: { "glucose-fasting": 5, hba1c: 5, triglycerides: 1, "hdl-cholesterol": -0.6, "urine-albumin": 1.2 } },
  { id: "prediabetes", p: 0.14, shift: { "glucose-fasting": 1.8, hba1c: 2.0, triglycerides: 0.5 } },
  { id: "dyslipidaemia", p: 0.18, shift: { "ldl-cholesterol": 1.6, triglycerides: 1.2, "hdl-cholesterol": -0.5 } },
  { id: "hypertriglyceridaemia", p: 0.025, shift: { triglycerides: 4.2, "hdl-cholesterol": -0.8 } },
  { id: "iron-deficiency", p: 0.07, shift: { ferritin: -2.6, "serum-iron": -2.2, tibc: 1.8, mcv: -1.8, mchc: -1.0, rbc: -0.6, "rdw-cv": 2 } },
  { id: "ckd", p: 0.05, shift: { "creatinine-serum": 3.5, "blood-urea-nitrogen": 2.5, urea: 2.5, "potassium-serum": 1.2, "phosphorus-serum": 1.2, rbc: -1.2, "uric-acid": 1, "urine-albumin": 2, "bicarbonate-co2": -1.2 } },
  { id: "hypothyroid", p: 0.05, shift: { tsh: 3, "free-t4": -2, "free-t3": -1, "total-cholesterol": 0.5, "ldl-cholesterol": 0.6 } },
  { id: "hyperthyroid", p: 0.015, shift: { tsh: -5, "free-t4": 3.5, "free-t3": 3.5 } },
  { id: "fatty-liver", p: 0.08, shift: { alt: 2.2, ast: 1.2, ggt: 2, triglycerides: 0.8 } },
  { id: "inflammation", p: 0.06, shift: { "hs-crp": 2.5, wbc: 1.8, "neutrophils-percent": 1.5, "platelet-count": 1, ferritin: 1, "albumin-serum": -1 } },
  { id: "vitamin-d-deficiency", p: 0.2, shift: { "vitamin-d-25-oh": -1.6 } },
  { id: "b12-deficiency", p: 0.04, shift: { "vitamin-b12": -2.6, mcv: 1.5 } },
  { id: "thyroid-cancer-follow-up", p: 0.015, shift: { thyroglobulin: -2 } },
  { id: "cholestasis", p: 0.015, shift: { alp: 3, ggt: 3, "total-bilirubin": 2.5 } },
];

const PHI_INV_975 = 1.959963984540054;
/** value at latent score z for a marker whose design anchors are its 2.5th and 97.5th percentiles */
export function atZ(a: CA, z: number): number {
  const [lo, hi] = a.anchors;
  if (a.dist === "ln") { const m = (Math.log(lo) + Math.log(hi)) / 2, s = (Math.log(hi) - Math.log(lo)) / (2 * PHI_INV_975); return Math.exp(m + s * z); }
  const m = (lo + hi) / 2, s = (hi - lo) / (2 * PHI_INV_975);
  return m + s * z;
}
function gauss(r: R) { let u = 0; while (u === 0) u = r.next(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * r.next()); }

export function makePerson(r: R): Person {
  const sex = r.chance(0.5) ? "F" : "M";
  const age = Math.round(18 + 70 * Math.pow(r.next(), 1.15));
  const conditions = CONDITIONS.filter((c) => r.chance(c.p * (c.id === "ckd" ? (age > 60 ? 2 : 0.5) : c.id === "iron-deficiency" && sex === "F" ? 1.6 : 1))).map((c) => c.id);
  if (conditions.includes("diabetes")) { const i = conditions.indexOf("prediabetes"); if (i >= 0) conditions.splice(i, 1); }
  if (conditions.includes("hyperthyroid")) { const i = conditions.indexOf("hypothyroid"); if (i >= 0) conditions.splice(i, 1); }
  const z: Record<string, number> = {};
  for (const a of CATALOG) z[a.slug] = gauss(r);
  // the white-cell fractions and the red-cell draws are correlated by construction; the rest are independent
  const shift: Record<string, number> = {};
  for (const c of CONDITIONS) if (conditions.includes(c.id)) for (const [k, d] of Object.entries(c.shift)) shift[k] = (shift[k] ?? 0) + d;
  return { sex, age, conditions, z, shift };
}

/** the same person months earlier: every latent score moves a little (within-person variation and change) */
export function earlier(p: Person, r: R, months: number): Person {
  const z: Record<string, number> = {};
  const k = Math.min(0.7, 0.25 + months / 40);
  for (const [s, v] of Object.entries(p.z)) z[s] = v + k * gauss(r);
  return { ...p, age: p.age - (months >= 12 ? 1 : 0), z };
}

/* CKD-EPI 2021 (NKF): 142 × min(Scr/κ,1)^α × max(Scr/κ,1)^−1.200 × 0.9938^age × 1.012 [female]; κ 0.7 F / 0.9 M; α −0.241 F / −0.302 M */
export function ckdEpi2021(scr: number, age: number, sex: "M" | "F"): number {
  const k = sex === "F" ? 0.7 : 0.9, al = sex === "F" ? -0.241 : -0.302;
  return 142 * Math.min(scr / k, 1) ** al * Math.max(scr / k, 1) ** -1.2 * 0.9938 ** age * (sex === "F" ? 1.012 : 1);
}

const rd = (v: number, dp: number) => { const f = 10 ** dp; return Math.round(v * f + (v >= 0 ? 1e-9 : -1e-9)) / f; };

/* NHANES Lab Percentiles 1.0.0, population "reference", by sex and age band: the 10th and 90th percentiles (taken once
   by scripts/nhanes_anchors.py into nhanes-anchors.json). A person without a condition draws a value whose 10th and
   90th percentiles are these; a marker NHANES does not cover keeps its design anchors (2.5th and 97.5th percentiles),
   with a fixed shift by sex for a few markers. */
const NH = JSON.parse(readFileSync(join(import.meta.dirname, "nhanes-anchors.json"), "utf8")).markers as Record<string, { p10_p90: Record<string, [number, number, number]> }>;
const Z90 = 1.2815515655446004;
const SEX_SHIFT: Record<string, number> = { rbc: 0.8, "creatinine-serum": 0.5, "serum-iron": 0.3, ferritin: 0.6, "hdl-cholesterol": -0.4, "uric-acid": 0.6 };
const band = (age: number) => (age >= 80 ? "80+" : age >= 70 ? "70-79" : age >= 60 ? "60-69" : age >= 50 ? "50-59" : age >= 40 ? "40-49" : age >= 30 ? "30-39" : "18-29");
/** where a marker's value comes from for this person: "nhanes" or "design" */
export function anchorSource(slug: string, p: { sex: "M" | "F"; age: number }): "nhanes" | "design" {
  const t = NH[slug]?.p10_p90;
  return t && (t[`${p.sex}|${band(p.age)}`] || t[`${p.sex}|18+`]) ? "nhanes" : "design";
}
function drawAt(a: CA, z: number, p: Person): number {
  const t = NH[a.slug]?.p10_p90;
  const c = t && (t[`${p.sex}|${band(p.age)}`] ?? t[`${p.sex}|18+`]);
  if (c) {
    const [lo, hi] = c;
    if (a.dist === "ln" && lo > 0) { const m = (Math.log(lo) + Math.log(hi)) / 2, sd = (Math.log(hi) - Math.log(lo)) / (2 * Z90); return Math.exp(m + sd * z); }
    const m = (lo + hi) / 2, sd = (hi - lo) / (2 * Z90);
    return m + sd * z;
  }
  return atZ(a, z + (SEX_SHIFT[a.slug] ?? 0) * (p.sex === "M" ? 1 : -1));
}

/** every marker's true value for this person, in conventional units, at the marker's own precision */
export function valuesOf(p: Person): Record<string, number> {
  const v: Record<string, number> = {};
  // a condition's shift counts half where NHANES gives the spread: its survey population already holds part of it
  const draw = (s: string) => drawAt(BY[s], p.z[s] + (p.shift[s] ?? 0) * (anchorSource(s, p) === "nhanes" ? 0.5 : 1), p);
  // a draw from a normal distribution can fall below zero far in its tail: no result is printed below the last digit
  for (const a of CATALOG) if (!a.derived) v[a.slug] = rd(Math.max(10 ** -a.dp, draw(a.slug)), a.dp);
  // red cells: RBC by sex, MCV and MCHC drawn; the rest follow
  v.rbc = rd(Math.max(1.5, draw("rbc")), 2);
  v.hematocrit = rd((v.rbc * v.mcv) / 10, 1);
  v.hemoglobin = rd((v.hematocrit * v.mchc) / 100, 1);
  v.mch = rd((v.mcv * v.mchc) / 100, 1);
  // the differential: five fractions around their anchors, normalised to 100.0 exactly after rounding
  const fr = ["neutrophils", "lymphocytes", "monocytes", "eosinophils", "basophils"];
  const raw = fr.map((c) => Math.max(0.05, draw(`${c}-percent`)));
  const tot = raw.reduce((s, x) => s + x, 0);
  const pct = raw.map((x) => rd((100 * x) / tot, 1));
  const diff = rd(100 - pct.reduce((s, x) => s + x, 0), 1);
  pct[pct.indexOf(Math.max(...pct))] = rd(pct[pct.indexOf(Math.max(...pct))] + diff, 1);
  fr.forEach((c, i) => { v[`${c}-percent`] = pct[i]; v[`${c}-absolute`] = rd((v.wbc * pct[i]) / 100, 2); });
  // iron: saturation from iron and TIBC
  v["serum-iron"] = Math.max(8, rd(draw("serum-iron"), 0));
  v.tibc = Math.max(v.tibc, v["serum-iron"] + 40);
  v["transferrin-saturation"] = rd((100 * v["serum-iron"]) / v.tibc, 0);
  // lipids: total cholesterol is built so that LDL is exactly Friedewald's when the lab calculates it
  v["total-cholesterol"] = rd(v["ldl-cholesterol"] + v["hdl-cholesterol"] + v.triglycerides / 5, 0);
  // kidney
  v["creatinine-serum"] = Math.max(0.3, v["creatinine-serum"]);
  v.egfr = Math.round(ckdEpi2021(v["creatinine-serum"], p.age, p.sex));
  v["urine-acr"] = rd(v["urine-albumin"] / (v["urine-creatinine"] * 0.01), 1);
  v.hba1c = Math.max(4.0, v.hba1c);
  v["glucose-fasting"] = Math.max(55, v["glucose-fasting"]);
  // a thyroglobulin after thyroid surgery and ablation is mostly below the assay's limit
  if (p.conditions.includes("thyroid-cancer-follow-up")) v.thyroglobulin = rd(Math.max(0.01, v.thyroglobulin * 0.1), 2);
  return v;
}

/** Friedewald LDL from the other three (mg/dL); the value a lab prints as "LDL (calc)" */
export const friedewald = (tc: number, hdl: number, tg: number) => tc - hdl - tg / 5;
