/* lab-report-corpus: the markers a synthetic report can carry (25 Nov 2026).

   The 41 markers of the benchmark generator (generate.mts, ANALYTES) are reused as they are: their slugs, printed names
   in five languages, conventional units, SI units and factors, and reference intervals. This file adds:
     - French printed names for all of them, and the French "mass" units (g/L, mg/L) French labs print beside SI;
     - new markers the hard cases need: the white-cell differential (percent and absolute), TIBC, urea, RDW, bicarbonate,
       thyroglobulin (the "Tg" of "TG vs Tg"), and three urine markers (creatinine, albumin, albumin/creatinine ratio);
     - the specimen of every marker, and the source of every printed interval that is not the benchmark's own.

   Every slug is a marker_slug of LifeFrom release 1 (markers.csv). Interval sources are listed in SOURCES and in
   METHODS.md; each was fetched on 25 Nov 2026. "anchors" are design parameters of the generator (the central 95% of the
   values it draws for a person without the matching condition), not population estimates. */
import { ANALYTES } from "../generate.mts";

export type Loc = "US" | "UK" | "DE" | "ES" | "RO" | "FR";
export const LOCALES: Loc[] = ["US", "UK", "DE", "ES", "RO", "FR"];
export type Panel = "chem" | "liver" | "lipid" | "cbc" | "diff" | "iron" | "thyroid" | "vit" | "urine";
export type Specimen = "serum" | "plasma" | "whole blood" | "urine";
/** f: conventional value × f = value in this unit */
export type U = { unit: string; f: number; dp: number };
export type CA = {
  slug: string; panel: Panel; specimen: Specimen; unit: string; dp: number;
  lo: number | null; hi: number | null; // printed interval, conventional units (sex-neutral)
  bySex?: { M: [number | null, number | null]; F: [number | null, number | null] };
  anchors: [number, number]; dist: "n" | "ln";
  si?: U; frMass?: U; count?: "k" | "m"; derived?: boolean; males?: boolean;
  names: Record<Loc, string[]>; src: string; loinc?: string;
};

export const SOURCES: Record<string, { what: string; url: string; where: string; accessed: string }> = {
  bench: { what: "lab-reading-bench v0.4.1 generator (generate.mts, ANALYTES)", url: "https://doi.org/10.5281/zenodo.24350904", where: "generate.mts lines 25-74", accessed: "2026-11-25" },
  "medlineplus-cbc": { what: "MedlinePlus: Complete blood count (CBC)", url: "https://medlineplus.gov/ency/article/003642.htm", where: "section Normal Results", accessed: "2026-11-25" },
  "medlineplus-differential": { what: "MedlinePlus: Blood differential test", url: "https://medlineplus.gov/ency/article/003657.htm", where: "section Normal Results", accessed: "2026-11-25" },
  "medlineplus-tibc": { what: "MedlinePlus: Total iron binding capacity", url: "https://medlineplus.gov/ency/article/003489.htm", where: "section Normal Results", accessed: "2026-11-25" },
  "medlineplus-microalbumin": { what: "MedlinePlus: Microalbuminuria test", url: "https://medlineplus.gov/ency/article/003591.htm", where: "section Normal Results", accessed: "2026-11-25" },
  leeds: { what: "Leeds Teaching Hospitals, Blood Sciences Reference Range Database BSHC-REC-317b v3.20", url: "https://www.leedsth.nhs.uk/wp-content/uploads/2026/08/BSHC-REC-317b_Blood-Sciences-Reference-Range-Database_v3.20.pdf", where: "pages 2, 4, 7, 8, 9, 12, 13 (rows named in METHODS.md)", accessed: "2026-11-25" },
  "nkf-ckdepi": { what: "National Kidney Foundation: CKD-EPI Creatinine Equation (2021)", url: "https://www.kidney.org/ckd-epi-creatinine-equation-2021", where: "section Formula", accessed: "2026-11-25" },
  ngsp: { what: "NGSP: IFCC Standardization of HbA1c (master equation NGSP = 0.09148 × IFCC + 2.152)", url: "https://ngsp.org/ifcc.asp", where: "Overview", accessed: "2026-11-25" },
  friedewald: { what: "MSD Manual calculator: Friedewald equation (LDL = TC − TG/5 − HDL, mg/dL; not valid at TG ≥ 400 mg/dL). Original: Friedewald et al., Clin Chem 1972, doi:10.1093/clinchem/18.6.499", url: "https://www.msdmanuals.com/iframe/manual/medical-calculators/friedewald.htm", where: "formula and note", accessed: "2026-11-25" },
  arithmetic: { what: "Unit arithmetic only (mg/dL → g/L × 0.01, mg/dL → mg/L × 10)", url: "", where: "", accessed: "2026-11-25" },
};

const FR: Record<string, string[]> = {
  "glucose-fasting": ["Glycémie à jeun", "Glucose"], hba1c: ["Hémoglobine glyquée (HbA1c)", "HbA1c"],
  "creatinine-serum": ["Créatinine", "Créatininémie"], "blood-urea-nitrogen": ["Azote uréique (BUN)"],
  egfr: ["DFG estimé (CKD-EPI)", "Débit de filtration glomérulaire estimé"], "uric-acid": ["Acide urique", "Uricémie"],
  "sodium-serum": ["Sodium", "Natrémie"], "potassium-serum": ["Potassium", "Kaliémie"], "chloride-serum": ["Chlore", "Chlorémie"],
  "calcium-total": ["Calcium", "Calcémie"], "magnesium-serum": ["Magnésium", "Magnésémie"], "phosphorus-serum": ["Phosphore", "Phosphorémie"],
  "total-protein": ["Protéines totales", "Protidémie"], "albumin-serum": ["Albumine"], "hs-crp": ["CRP ultrasensible", "Protéine C réactive ultrasensible"],
  "total-bilirubin": ["Bilirubine totale"], alt: ["ALAT (TGP)", "Transaminases ALAT"], ast: ["ASAT (TGO)", "Transaminases ASAT"],
  alp: ["Phosphatases alcalines (PAL)", "Phosphatases alcalines"], ggt: ["Gamma GT", "Gamma-glutamyltransférase (GGT)"],
  "total-cholesterol": ["Cholestérol total"], "ldl-cholesterol": ["Cholestérol LDL (calculé)", "LDL-cholestérol"], "hdl-cholesterol": ["Cholestérol HDL", "HDL-cholestérol"],
  triglycerides: ["Triglycérides"], wbc: ["Leucocytes"], rbc: ["Hématies"], hemoglobin: ["Hémoglobine"], hematocrit: ["Hématocrite"],
  mcv: ["VGM", "Volume globulaire moyen"], mch: ["TCMH"], mchc: ["CCMH"], "platelet-count": ["Plaquettes"],
  "serum-iron": ["Fer sérique"], ferritin: ["Ferritine"], "transferrin-saturation": ["Coefficient de saturation de la transferrine"],
  tsh: ["TSH ultrasensible", "TSH"], "free-t4": ["T4 libre"], "free-t3": ["T3 libre"], "vitamin-d-25-oh": ["Vitamine D (25-OH)", "25-OH vitamine D"],
  "vitamin-b12": ["Vitamine B12"], "folate-serum": ["Folates sériques"], "testosterone-total": ["Testostérone totale"],
};
/* French labs print a mass unit (g/L, mg/L) first and SI beside it: f is the factor from the conventional unit */
const FR_MASS: Record<string, U> = {
  "glucose-fasting": { unit: "g/L", f: 0.01, dp: 2 }, "total-cholesterol": { unit: "g/L", f: 0.01, dp: 2 }, "ldl-cholesterol": { unit: "g/L", f: 0.01, dp: 2 },
  "hdl-cholesterol": { unit: "g/L", f: 0.01, dp: 2 }, triglycerides: { unit: "g/L", f: 0.01, dp: 2 }, "creatinine-serum": { unit: "mg/L", f: 10, dp: 1 },
  "uric-acid": { unit: "mg/L", f: 10, dp: 0 }, "calcium-total": { unit: "mg/L", f: 10, dp: 0 }, "phosphorus-serum": { unit: "mg/L", f: 10, dp: 0 },
  "total-bilirubin": { unit: "mg/L", f: 10, dp: 1 }, "total-protein": { unit: "g/L", f: 10, dp: 0 }, "albumin-serum": { unit: "g/L", f: 10, dp: 0 },
};
const SPECIMEN = (slug: string, panel: string): Specimen => (panel === "cbc" || slug === "hba1c" ? "whole blood" : slug === "glucose-fasting" ? "plasma" : "serum");
/* design anchors (central 95% drawn for a person without the matching condition) where they differ from the printed interval */
const ANCHORS: Record<string, [[number, number], "n" | "ln"]> = {
  "glucose-fasting": [[72, 105], "n"], hba1c: [[4.6, 5.9], "n"], "creatinine-serum": [[0.6, 1.25], "ln"], "blood-urea-nitrogen": [[8, 24], "ln"],
  "uric-acid": [[3.0, 7.5], "n"], "sodium-serum": [[136, 145], "n"], "potassium-serum": [[3.6, 5.0], "n"], "chloride-serum": [[98, 107], "n"],
  "calcium-total": [[8.7, 10.2], "n"], "magnesium-serum": [[1.75, 2.35], "n"], "phosphorus-serum": [[2.6, 4.4], "n"], "total-protein": [[6.2, 8.1], "n"],
  "albumin-serum": [[3.6, 4.9], "n"], "hs-crp": [[0.15, 6], "ln"], "total-bilirubin": [[0.25, 1.3], "ln"], alt: [[9, 55], "ln"], ast: [[12, 40], "ln"],
  alp: [[45, 140], "ln"], ggt: [[9, 70], "ln"], "ldl-cholesterol": [[60, 190], "n"], "hdl-cholesterol": [[33, 90], "ln"], triglycerides: [[45, 280], "ln"],
  wbc: [[4.0, 10.5], "ln"], "platelet-count": [[155, 390], "n"], mcv: [[81, 99], "n"], mchc: [[32.2, 35.8], "n"], ferritin: [[18, 330], "ln"],
  tsh: [[0.5, 4.0], "ln"], "free-t4": [[0.85, 1.7], "n"], "free-t3": [[2.4, 4.1], "n"], "vitamin-d-25-oh": [[9, 62], "ln"], "vitamin-b12": [[190, 950], "ln"],
  "folate-serum": [[3.5, 20], "ln"], "testosterone-total": [[270, 900], "ln"],
};

const base: CA[] = ANALYTES.map((a) => {
  const [anchors, dist] = ANCHORS[a.slug] ?? [[a.lo ?? 0, a.hi ?? 1], "n"];
  return {
    slug: a.slug, panel: a.panel as Panel, specimen: SPECIMEN(a.slug, a.panel), unit: a.unit, dp: a.dp, lo: a.lo, hi: a.hi, anchors, dist,
    si: a.si && a.slug !== "hba1c" ? a.si : a.slug === "hba1c" ? { unit: "mmol/mol", f: NaN, dp: 0 } : undefined,
    frMass: FR_MASS[a.slug], count: a.cbc, names: { ...a.names, FR: FR[a.slug] }, src: "bench", loinc: a.loinc,
    derived: ["egfr", "total-cholesterol", "transferrin-saturation", "hematocrit", "hemoglobin", "mch"].includes(a.slug),
    males: a.slug === "testosterone-total",
  } as CA;
});
/* sex-specific printed intervals (MedlinePlus) for the red cell count, haemoglobin, haematocrit, iron and saturation */
const sexed: Record<string, CA["bySex"]> = {
  rbc: { M: [4.6, 6.2], F: [4.2, 5.4] }, hemoglobin: { M: [13, 18], F: [12, 16] }, hematocrit: { M: [40, 55], F: [36, 48] },
  "serum-iron": { M: [59, 158], F: [37, 145] }, "transferrin-saturation": { M: [20, 50], F: [15, 45] },
};
for (const a of base) if (sexed[a.slug]) { a.bySex = sexed[a.slug]; a.src = a.slug === "rbc" || a.slug === "hemoglobin" || a.slug === "hematocrit" ? "medlineplus-cbc" : "medlineplus-tibc"; }

const N = (US: string[], UK: string[], DE: string[], ES: string[], RO: string[], FR: string[]) => ({ US, UK, DE, ES, RO, FR });
const K = { unit: "Thousand/uL" };
const added: CA[] = [
  // the white-cell differential: percent (MedlinePlus) and absolute (Leeds, adults over 10 or 11 years)
  { slug: "neutrophils-percent", panel: "diff", specimen: "whole blood", unit: "%", dp: 1, lo: 40, hi: 60, anchors: [44, 70], dist: "n", src: "medlineplus-differential", derived: true, names: N(["Neutrophils"], ["Neutrophils %"], ["Neutrophile %", "Neutrophile"], ["Neutrófilos %", "Neutrófilos"], ["Neutrofile", "NEU%"], ["Polynucléaires neutrophiles"]) },
  { slug: "lymphocytes-percent", panel: "diff", specimen: "whole blood", unit: "%", dp: 1, lo: 20, hi: 40, anchors: [20, 42], dist: "n", src: "medlineplus-differential", derived: true, names: N(["Lymphs", "Lymphocytes"], ["Lymphocytes %"], ["Lymphozyten %", "Lymphozyten"], ["Linfocitos %", "Linfocitos"], ["Limfocite", "LYM%"], ["Lymphocytes"]) },
  { slug: "monocytes-percent", panel: "diff", specimen: "whole blood", unit: "%", dp: 1, lo: 2, hi: 8, anchors: [3, 10], dist: "n", src: "medlineplus-differential", derived: true, names: N(["Monocytes"], ["Monocytes %"], ["Monozyten %", "Monozyten"], ["Monocitos %", "Monocitos"], ["Monocite", "MON%"], ["Monocytes"]) },
  { slug: "eosinophils-percent", panel: "diff", specimen: "whole blood", unit: "%", dp: 1, lo: 1, hi: 4, anchors: [0.6, 5], dist: "ln", src: "medlineplus-differential", derived: true, names: N(["Eos"], ["Eosinophils %"], ["Eosinophile %", "Eosinophile"], ["Eosinófilos %", "Eosinófilos"], ["Eozinofile", "EOS%"], ["Polynucléaires éosinophiles"]) },
  { slug: "basophils-percent", panel: "diff", specimen: "whole blood", unit: "%", dp: 1, lo: 0.5, hi: 1, anchors: [0.2, 1.4], dist: "ln", src: "medlineplus-differential", derived: true, names: N(["Basos"], ["Basophils %"], ["Basophile %", "Basophile"], ["Basófilos %", "Basófilos"], ["Bazofile", "BAS%"], ["Polynucléaires basophiles"]) },
  { slug: "neutrophils-absolute", panel: "diff", specimen: "whole blood", ...K, dp: 2, lo: 1.5, hi: 7.0, anchors: [1.8, 7], dist: "ln", src: "leeds", count: "k", derived: true, names: N(["Neutrophils (Absolute)", "Absolute Neutrophils"], ["Neutrophils"], ["Neutrophile abs.", "Neutrophile"], ["Neutrófilos", "Neutrófilos abs."], ["Neutrofile", "NEU#"], ["Polynucléaires neutrophiles"]) },
  { slug: "lymphocytes-absolute", panel: "diff", specimen: "whole blood", ...K, dp: 2, lo: 1.0, hi: 4.5, anchors: [1, 4], dist: "ln", src: "leeds", count: "k", derived: true, names: N(["Lymphs (Absolute)", "Absolute Lymphocytes"], ["Lymphocytes"], ["Lymphozyten abs.", "Lymphozyten"], ["Linfocitos", "Linfocitos abs."], ["Limfocite", "LYM#"], ["Lymphocytes"]) },
  { slug: "monocytes-absolute", panel: "diff", specimen: "whole blood", ...K, dp: 2, lo: 0.2, hi: 0.8, anchors: [0.2, 0.9], dist: "ln", src: "leeds", count: "k", derived: true, names: N(["Monocytes(Absolute)", "Absolute Monocytes"], ["Monocytes"], ["Monozyten abs.", "Monozyten"], ["Monocitos", "Monocitos abs."], ["Monocite", "MON#"], ["Monocytes"]) },
  { slug: "eosinophils-absolute", panel: "diff", specimen: "whole blood", ...K, dp: 2, lo: 0, hi: 0.5, anchors: [0.03, 0.4], dist: "ln", src: "leeds", count: "k", derived: true, names: N(["Eos (Absolute)", "Absolute Eosinophils"], ["Eosinophils"], ["Eosinophile abs.", "Eosinophile"], ["Eosinófilos", "Eosinófilos abs."], ["Eozinofile", "EOS#"], ["Polynucléaires éosinophiles"]) },
  { slug: "basophils-absolute", panel: "diff", specimen: "whole blood", ...K, dp: 2, lo: 0, hi: 0.2, anchors: [0.01, 0.1], dist: "ln", src: "leeds", count: "k", derived: true, names: N(["Baso (Absolute)", "Absolute Basophils"], ["Basophils"], ["Basophile abs.", "Basophile"], ["Basófilos", "Basófilos abs."], ["Bazofile", "BAS#"], ["Polynucléaires basophiles"]) },
  { slug: "rdw-cv", panel: "cbc", specimen: "whole blood", unit: "%", dp: 1, lo: 12.0, hi: 15.0, anchors: [11.8, 14.8], dist: "n", src: "leeds", names: N(["RDW"], ["RDW"], ["RDW-CV", "Ery-Verteilungsbreite"], ["ADE (RDW)", "RDW-CV"], ["RDW-CV", "RDW"], ["IDR (RDW)", "Indice de distribution des hématies"]) },
  // TIBC: Leeds 45-76 µmol/L, printed in µg/dL through the iron factor 0.179 (the benchmark's)
  { slug: "tibc", panel: "iron", specimen: "serum", unit: "mcg/dL", dp: 0, lo: 251, hi: 425, anchors: [245, 420], dist: "n", src: "leeds", si: { unit: "µmol/L", f: 0.179, dp: 0 }, names: N(["TIBC", "Iron Bind.Cap.(TIBC)"], ["TIBC", "Total iron binding capacity"], ["TEBK", "Totale Eisenbindungskapazität"], ["CTFH (TIBC)", "Capacidad total de fijación del hierro"], ["TIBC", "Capacitate totală de legare a fierului"], ["CTF (capacité totale de fixation)", "Capacité totale de fixation du fer"]) },
  // urea, as European labs print it instead of BUN (Leeds, adults over 17)
  { slug: "urea", panel: "chem", specimen: "serum", unit: "mmol/L", dp: 1, lo: 2.5, hi: 7.8, anchors: [2.8, 8.5], dist: "ln", src: "leeds", names: N(["Urea"], ["Urea"], ["Harnstoff"], ["Urea"], ["Uree serică", "Uree"], ["Urée"]) },
  { slug: "bicarbonate-co2", panel: "chem", specimen: "serum", unit: "mmol/L", dp: 0, lo: 22, hi: 29, anchors: [22, 29.5], dist: "n", src: "leeds", names: N(["Carbon Dioxide, Total", "CO2"], ["Bicarbonate"], ["Bicarbonat"], ["Bicarbonato"], ["Bicarbonat seric"], ["Bicarbonates", "CO2 total"]) },
  // thyroglobulin: the follow-up marker after thyroid cancer surgery, printed without an interval (Leeds: < 0.1 µg/L expected after thyroidectomy)
  { slug: "thyroglobulin", panel: "thyroid", specimen: "serum", unit: "ng/mL", dp: 2, lo: null, hi: null, anchors: [0.02, 1.5], dist: "ln", src: "leeds", names: N(["Thyroglobulin", "Tg"], ["Thyroglobulin", "Tg"], ["Thyreoglobulin", "Tg"], ["Tiroglobulina", "Tg"], ["Tiroglobulină", "Tg"], ["Thyroglobuline", "Tg"]) },
  // urine (spot sample)
  { slug: "urine-creatinine", panel: "urine", specimen: "urine", unit: "mg/dL", dp: 0, lo: null, hi: null, anchors: [30, 250], dist: "ln", src: "arithmetic", si: { unit: "mmol/L", f: 0.0884, dp: 1 }, names: N(["Creatinine, Random Urine", "Creatinine, Urine"], ["Urine creatinine"], ["Kreatinin im Urin", "Kreatinin (Urin)"], ["Creatinina en orina"], ["Creatinină urinară"], ["Créatinine urinaire"]) },
  { slug: "urine-albumin", panel: "urine", specimen: "urine", unit: "mg/L", dp: 1, lo: null, hi: null, anchors: [2, 60], dist: "ln", src: "arithmetic", names: N(["Albumin, Urine", "Microalbumin, Urine"], ["Urine albumin"], ["Albumin im Urin", "Mikroalbumin"], ["Microalbúmina en orina", "Albúmina en orina"], ["Microalbuminurie"], ["Microalbuminurie", "Albumine urinaire"]) },
  { slug: "urine-acr", panel: "urine", specimen: "urine", unit: "mg/g", dp: 1, lo: null, hi: 30, anchors: [3, 60], dist: "ln", src: "medlineplus-microalbumin", derived: true, si: { unit: "mg/mmol", f: 1 / 8.84, dp: 1 }, names: N(["Microalb/Creat Ratio", "Albumin/Creatinine Ratio"], ["Albumin:creatinine ratio", "ACR"], ["Albumin/Kreatinin-Quotient"], ["Cociente albúmina/creatinina"], ["Raport albumină/creatinină"], ["Rapport albumine/créatinine"]) },
];
/* RO and FR differential lines repeat one name for percent and absolute: the unit is the only thing telling them apart */

export const CATALOG: CA[] = [...base, ...added];
export const BY = Object.fromEntries(CATALOG.map((a) => [a.slug, a])) as Record<string, CA>;

/** the printed interval for this person, in conventional units */
export function interval(a: CA, sex: "M" | "F"): [number | null, number | null] { return a.bySex ? a.bySex[sex] : [a.lo, a.hi]; }

/** a value in conventional units printed in unit u */
export const toU = (a: CA, u: U, v: number) => (a.slug === "hba1c" && u.unit === "mmol/mol" ? (v - 2.152) / 0.09148 : v * u.f);
export const fromU = (a: CA, u: U, v: number) => (a.slug === "hba1c" && u.unit === "mmol/mol" ? v * 0.09148 + 2.152 : v / u.f);

/* how each country writes blood-count units (the number is the same in all); FR also writes counts per mm³ */
export const COUNT_UNITS: Record<Loc, { k: string[]; m: string[] }> = {
  US: { k: ["x10E3/uL", "K/uL", "Thousand/uL"], m: ["x10E6/uL", "M/uL", "Million/uL"] },
  UK: { k: ["x10^9/L", "10*9/L", "×10⁹/L"], m: ["x10^12/L", "10*12/L", "×10¹²/L"] },
  DE: { k: ["/nl", "Tsd/µl", "G/l"], m: ["/pl", "Mio/µl", "T/l"] },
  ES: { k: ["x10^3/µL", "10^3/µL"], m: ["x10^6/µL", "10^6/µL"] },
  RO: { k: ["10^3/µL", "*10^3/µL", "mii/µL"], m: ["10^6/µL", "*10^6/µL", "mil./µL"] },
  FR: { k: ["G/L", "10^9/L"], m: ["T/L", "10^12/L"] },
};
