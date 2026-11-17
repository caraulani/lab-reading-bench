/* Synthetic lab reports with a computed answer key (17 Nov 2026).

   Each report starts as a list of true results (marker, value, unit, range). It is then printed the way labs print:
   US, UK, German, Spanish and Romanian names and layouts, conventional or SI units, decimal points or commas, the lab's
   own flag and range styles, as lines of text, a CSV export or a FHIR bundle. Because we made the report, we know what
   a correct reader must return for every row, so nothing here needs a human or an AI to grade it.

   Everything is drawn from one seeded generator: the same seed always gives the same reports.
   Nothing here is real patient data. The conversion factors are the published ones, written out here on purpose and
   not imported from the reader, so a wrong factor in the reader shows up as a wrong value. */

export type Locale = "US" | "UK" | "DE" | "ES" | "RO";
type Unit = { unit: string; f: number; dp: number }; // f: conventional value × f = value in this unit
type Analyte = {
  slug: string; panel: string; unit: string; dp: number; lo: number | null; hi: number | null;
  si?: Unit; crit?: { low?: number; high?: number }; cbc?: "k" | "m";
  loinc: string; loincName: string; names: Record<Locale, string[]>;
};

const A = (slug: string, panel: string, unit: string, dp: number, lo: number | null, hi: number | null, loinc: string, loincName: string,
  US: string[], UK: string[], DE: string[], ES: string[], RO: string[], extra: Partial<Analyte> = {}): Analyte =>
  ({ slug, panel, unit, dp, lo, hi, loinc, loincName, names: { US, UK, DE, ES, RO }, ...extra });
const S = "in Serum or Plasma";

export const ANALYTES: Analyte[] = [
  A("glucose-fasting", "chem", "mg/dL", 0, 70, 99, "2345-7", `Glucose [Mass/volume] ${S}`, ["GLUCOSE", "Glucose"], ["Glucose", "Fasting glucose"], ["Glukose", "Glucose"], ["Glucosa"], ["Glicemie", "Glucoză serică"], { si: { unit: "mmol/L", f: 0.0555, dp: 1 }, crit: { low: 45, high: 450 } }),
  A("hba1c", "chem", "%", 1, 4.0, 5.6, "4548-4", "Hemoglobin A1c/Hemoglobin.total in Blood", ["HEMOGLOBIN A1c", "Hemoglobin A1c"], ["HbA1c (IFCC)", "HbA1c"], ["HbA1c"], ["Hemoglobina glicada (HbA1c)", "HbA1c"], ["Hemoglobină glicozilată (HbA1c)", "HbA1c"], { si: { unit: "mmol/mol", f: NaN, dp: 0 } }),
  A("creatinine-serum", "chem", "mg/dL", 2, 0.6, 1.3, "2160-0", `Creatinine [Mass/volume] ${S}`, ["CREATININE", "Creatinine"], ["Creatinine"], ["Kreatinin"], ["Creatinina"], ["Creatinină serică", "Creatinina"], { si: { unit: "µmol/L", f: 88.4, dp: 0 }, crit: { high: 4 } }),
  A("blood-urea-nitrogen", "chem", "mg/dL", 0, 7, 25, "3094-0", `Urea nitrogen [Mass/volume] ${S}`, ["UREA NITROGEN (BUN)", "BUN"], ["Blood urea nitrogen"], ["Harnstoff-N"], ["Nitrógeno ureico (BUN)"], ["Azot ureic (BUN)"]),
  A("egfr", "chem", "mL/min/1.73m2", 0, 60, null, "98979-8", "Glomerular filtration rate/1.73 sq M.predicted [Volume Rate/Area] in Serum, Plasma or Blood by Creatinine-based formula (CKD-EPI 2021)", ["EGFR", "eGFR"], ["eGFR"], ["eGFR (CKD-EPI)"], ["Filtrado glomerular estimado (CKD-EPI)"], ["eGFR", "Rata de filtrare glomerulară estimată"]),
  A("uric-acid", "chem", "mg/dL", 1, 2.5, 7.0, "3084-1", `Urate [Mass/volume] ${S}`, ["URIC ACID", "Uric Acid"], ["Urate", "Uric acid"], ["Harnsäure"], ["Ácido úrico"], ["Acid uric seric", "Acid uric"], { si: { unit: "µmol/L", f: 59.48, dp: 0 } }),
  A("sodium-serum", "chem", "mmol/L", 0, 135, 145, "2951-2", `Sodium [Moles/volume] ${S}`, ["SODIUM", "Sodium"], ["Sodium"], ["Natrium"], ["Sodio"], ["Sodiu seric", "Sodiu"], { crit: { low: 120, high: 155 } }),
  A("potassium-serum", "chem", "mmol/L", 1, 3.5, 5.1, "2823-3", `Potassium [Moles/volume] ${S}`, ["POTASSIUM", "Potassium"], ["Potassium"], ["Kalium"], ["Potasio"], ["Potasiu seric", "Potasiu"], { crit: { low: 2.5, high: 6.5 } }),
  A("chloride-serum", "chem", "mmol/L", 0, 98, 107, "2075-0", `Chloride [Moles/volume] ${S}`, ["CHLORIDE", "Chloride"], ["Chloride"], ["Chlorid"], ["Cloro"], ["Clor seric"]),
  A("calcium-total", "chem", "mg/dL", 1, 8.6, 10.3, "17861-6", `Calcium [Mass/volume] ${S}`, ["CALCIUM", "Calcium"], ["Calcium"], ["Calcium", "Kalzium"], ["Calcio"], ["Calciu seric total", "Calciu seric"], { si: { unit: "mmol/L", f: 0.2495, dp: 2 } }),
  A("magnesium-serum", "chem", "mg/dL", 1, 1.7, 2.4, "19123-9", `Magnesium [Mass/volume] ${S}`, ["MAGNESIUM", "Magnesium"], ["Magnesium"], ["Magnesium"], ["Magnesio"], ["Magneziu seric"], { si: { unit: "mmol/L", f: 0.4114, dp: 2 } }),
  A("phosphorus-serum", "chem", "mg/dL", 1, 2.5, 4.5, "2777-1", `Phosphate [Mass/volume] ${S}`, ["PHOSPHATE (AS PHOSPHORUS)", "Phosphorus"], ["Phosphate"], ["Phosphat"], ["Fósforo"], ["Fosfor seric"], { si: { unit: "mmol/L", f: 0.3229, dp: 2 } }),
  A("total-protein", "chem", "g/dL", 1, 6.0, 8.3, "2885-2", `Protein [Mass/volume] ${S}`, ["PROTEIN, TOTAL", "Protein, Total"], ["Total protein"], ["Gesamteiweiß", "Gesamtprotein"], ["Proteínas totales"], ["Proteine totale serice", "Proteine totale"], { si: { unit: "g/L", f: 10, dp: 0 } }),
  A("albumin-serum", "chem", "g/dL", 1, 3.5, 5.0, "1751-7", `Albumin [Mass/volume] ${S}`, ["ALBUMIN", "Albumin"], ["Albumin"], ["Albumin"], ["Albúmina"], ["Albumină serică", "Albumina"], { si: { unit: "g/L", f: 10, dp: 0 } }),
  A("hs-crp", "chem", "mg/L", 1, null, 3.0, "30522-7", `C reactive protein [Mass/volume] ${S} by High sensitivity method`, ["HS CRP", "C-Reactive Protein, Cardiac"], ["CRP (high sensitivity)", "hsCRP"], ["hsCRP", "CRP hochsensitiv"], ["Proteína C reactiva ultrasensible", "PCR ultrasensible"], ["Proteina C reactivă înalt sensibilă (hs-CRP)", "hs-CRP"]),

  A("total-bilirubin", "liver", "mg/dL", 1, 0.2, 1.2, "1975-2", `Bilirubin.total [Mass/volume] ${S}`, ["BILIRUBIN, TOTAL", "Bilirubin, Total"], ["Bilirubin", "Total bilirubin"], ["Bilirubin gesamt", "Gesamtbilirubin"], ["Bilirrubina total"], ["Bilirubină totală", "Bilirubina totala"], { si: { unit: "µmol/L", f: 17.1, dp: 0 } }),
  A("alt", "liver", "U/L", 0, 7, 56, "1742-6", `Alanine aminotransferase [Enzymatic activity/volume] ${S}`, ["ALT", "ALT (SGPT)"], ["ALT", "Alanine aminotransferase"], ["GPT (ALT)", "ALT (GPT)"], ["ALT (GPT)", "GPT (ALT)"], ["TGP (ALT)", "ALT (TGP)"], { crit: { high: 600 } }),
  A("ast", "liver", "U/L", 0, 10, 40, "1920-8", `Aspartate aminotransferase [Enzymatic activity/volume] ${S}`, ["AST", "AST (SGOT)"], ["AST", "Aspartate aminotransferase"], ["GOT (AST)", "AST (GOT)"], ["AST (GOT)", "GOT (AST)"], ["TGO (AST)", "AST (TGO)"]),
  A("alp", "liver", "U/L", 0, 44, 147, "6768-6", `Alkaline phosphatase [Enzymatic activity/volume] ${S}`, ["ALKALINE PHOSPHATASE", "Alkaline Phosphatase"], ["Alkaline phosphatase", "ALP"], ["Alkalische Phosphatase", "AP"], ["Fosfatasa alcalina"], ["Fosfatază alcalină", "Fosfataza alcalina"]),
  A("ggt", "liver", "U/L", 0, 8, 61, "2324-2", `Gamma glutamyl transferase [Enzymatic activity/volume] ${S}`, ["GGT"], ["Gamma GT", "GGT"], ["Gamma-GT", "GGT"], ["GGT", "Gamma GT"], ["GGT", "Gama-glutamiltransferaza (GGT)"]),

  A("total-cholesterol", "lipid", "mg/dL", 0, null, 200, "2093-3", `Cholesterol [Mass/volume] ${S}`, ["CHOLESTEROL, TOTAL", "Cholesterol, Total"], ["Total cholesterol", "Cholesterol"], ["Cholesterin gesamt", "Gesamtcholesterin"], ["Colesterol total"], ["Colesterol total"], { si: { unit: "mmol/L", f: 0.02586, dp: 1 } }),
  A("ldl-cholesterol", "lipid", "mg/dL", 0, null, 100, "13457-7", `Cholesterol in LDL [Mass/volume] ${S} by calculation`, ["LDL-CHOLESTEROL", "LDL Chol Calc (NIH)", "LDL Cholesterol"], ["LDL cholesterol"], ["LDL-Cholesterin"], ["Colesterol LDL"], ["LDL colesterol", "Colesterol LDL"], { si: { unit: "mmol/L", f: 0.02586, dp: 1 } }),
  A("hdl-cholesterol", "lipid", "mg/dL", 0, 40, null, "2085-9", `Cholesterol in HDL [Mass/volume] ${S}`, ["HDL CHOLESTEROL", "HDL Cholesterol"], ["HDL cholesterol"], ["HDL-Cholesterin"], ["Colesterol HDL"], ["HDL colesterol", "Colesterol HDL"], { si: { unit: "mmol/L", f: 0.02586, dp: 2 } }),
  A("triglycerides", "lipid", "mg/dL", 0, null, 150, "2571-8", `Triglyceride [Mass/volume] ${S}`, ["TRIGLYCERIDES", "Triglycerides"], ["Triglycerides"], ["Triglyceride"], ["Triglicéridos"], ["Trigliceride"], { si: { unit: "mmol/L", f: 0.01129, dp: 2 } }),

  A("wbc", "cbc", "Thousand/uL", 1, 4.0, 11.0, "6690-2", "Leukocytes [#/volume] in Blood by Automated count", ["WHITE BLOOD CELL COUNT", "WBC"], ["White cell count", "WBC"], ["Leukozyten"], ["Leucocitos"], ["Leucocite", "Număr de leucocite"], { cbc: "k", crit: { high: 50 } }),
  A("rbc", "cbc", "Million/uL", 2, 4.2, 5.9, "789-8", "Erythrocytes [#/volume] in Blood by Automated count", ["RED BLOOD CELL COUNT", "RBC"], ["Red cell count", "RBC"], ["Erythrozyten"], ["Hematíes", "Eritrocitos"], ["Eritrocite", "Număr de eritrocite"], { cbc: "m" }),
  A("hemoglobin", "cbc", "g/dL", 1, 12.0, 17.5, "718-7", "Hemoglobin [Mass/volume] in Blood", ["HEMOGLOBIN", "Hemoglobin"], ["Haemoglobin"], ["Hämoglobin"], ["Hemoglobina"], ["Hemoglobină", "Hemoglobina"], { si: { unit: "g/L", f: 10, dp: 0 }, crit: { low: 7 } }),
  A("hematocrit", "cbc", "%", 1, 36, 50, "4544-3", "Hematocrit [Volume Fraction] of Blood by Automated count", ["HEMATOCRIT", "Hematocrit"], ["Haematocrit"], ["Hämatokrit"], ["Hematocrito"], ["Hematocrit"], { si: { unit: "L/L", f: 0.01, dp: 2 } }),
  A("mcv", "cbc", "fL", 1, 80, 100, "787-2", "MCV [Entitic volume] by Automated count", ["MCV"], ["MCV"], ["MCV"], ["VCM"], ["VEM", "Volum eritrocitar mediu (VEM)"]),
  A("mch", "cbc", "pg", 1, 27, 33, "785-6", "MCH [Entitic mass] by Automated count", ["MCH"], ["MCH"], ["MCH"], ["HCM"], ["HEM", "Hemoglobină eritrocitară medie (HEM)"]),
  A("mchc", "cbc", "g/dL", 1, 32, 36, "786-4", "MCHC [Mass/volume] by Automated count", ["MCHC"], ["MCHC"], ["MCHC"], ["CHCM"], ["CHEM"], { si: { unit: "g/L", f: 10, dp: 0 } }),
  A("platelet-count", "cbc", "Thousand/uL", 0, 150, 400, "777-3", "Platelets [#/volume] in Blood by Automated count", ["PLATELET COUNT", "Platelets"], ["Platelets", "Platelet count"], ["Thrombozyten"], ["Plaquetas"], ["Trombocite", "Număr de trombocite"], { cbc: "k", crit: { low: 30, high: 1000 } }),

  A("serum-iron", "iron", "mcg/dL", 0, 50, 170, "2498-4", `Iron [Mass/volume] ${S}`, ["IRON, TOTAL", "Iron"], ["Iron"], ["Eisen"], ["Hierro"], ["Sideremie", "Fier seric"], { si: { unit: "µmol/L", f: 0.179, dp: 1 } }),
  A("ferritin", "iron", "ng/mL", 0, 30, 300, "2276-4", `Ferritin [Mass/volume] ${S}`, ["FERRITIN", "Ferritin"], ["Ferritin"], ["Ferritin"], ["Ferritina"], ["Feritină", "Feritina"], { si: { unit: "µg/L", f: 1, dp: 0 } }),
  A("transferrin-saturation", "iron", "%", 0, 20, 50, "2502-3", `Iron saturation [Mass Fraction] ${S}`, ["% SATURATION", "Iron Saturation"], ["Transferrin saturation"], ["Transferrinsättigung"], ["Índice de saturación de transferrina", "Saturación de transferrina"], ["Saturația transferinei", "Coeficient de saturație a transferinei"]),

  A("tsh", "thyroid", "mIU/L", 2, 0.4, 4.0, "3016-3", `Thyrotropin [Units/volume] ${S}`, ["TSH"], ["TSH"], ["TSH basal", "TSH"], ["TSH"], ["TSH"]),
  A("free-t4", "thyroid", "ng/dL", 2, 0.8, 1.8, "3024-7", `Thyroxine (T4) free [Mass/volume] ${S}`, ["T4, FREE", "T4,Free(Direct)", "Free T4"], ["Free T4"], ["fT4", "Freies T4"], ["T4 libre"], ["FT4", "T4 liber"], { si: { unit: "pmol/L", f: 12.87, dp: 1 } }),
  A("free-t3", "thyroid", "pg/mL", 1, 2.3, 4.2, "3051-0", `Triiodothyronine (T3) Free [Mass/volume] ${S}`, ["T3, FREE", "Triiodothyronine (T3), Free", "Free T3"], ["Free T3"], ["fT3", "Freies T3"], ["T3 libre"], ["FT3", "T3 liber"], { si: { unit: "pmol/L", f: 1.536, dp: 1 } }),

  A("vitamin-d-25-oh", "vit", "ng/mL", 0, 30, 100, "62292-8", `25-Hydroxyvitamin D3+25-Hydroxyvitamin D2 [Mass/volume] ${S}`, ["VITAMIN D,25-OH,TOTAL,IA", "Vitamin D, 25-Hydroxy"], ["25-OH Vitamin D", "Vitamin D"], ["25-OH-Vitamin D", "Vitamin D (25-OH)"], ["25-OH Vitamina D", "Vitamina D (25-OH)"], ["25-OH-Vitamina D", "Vitamina D (25-OH)"], { si: { unit: "nmol/L", f: 2.496, dp: 0 } }),
  A("vitamin-b12", "vit", "pg/mL", 0, 200, 900, "2132-9", `Cobalamin (Vitamin B12) [Mass/volume] ${S}`, ["VITAMIN B12", "Vitamin B12"], ["Vitamin B12"], ["Vitamin B12"], ["Vitamina B12"], ["Vitamina B12"], { si: { unit: "pmol/L", f: 0.738, dp: 0 } }),
  A("folate-serum", "vit", "ng/mL", 1, 3.0, 20, "2284-8", `Folate [Mass/volume] ${S}`, ["FOLATE, SERUM", "Folate (Folic Acid), Serum"], ["Folate", "Serum folate"], ["Folsäure"], ["Ácido fólico"], ["Acid folic"], { si: { unit: "nmol/L", f: 2.266, dp: 1 } }),
  A("testosterone-total", "vit", "ng/dL", 0, 264, 916, "2986-8", `Testosterone [Mass/volume] ${S}`, ["TESTOSTERONE, TOTAL, MS", "Testosterone"], ["Testosterone"], ["Testosteron"], ["Testosterona total"], ["Testosteron total", "Testosteron"], { si: { unit: "nmol/L", f: 0.0347, dp: 1 } }),
];

/* how each country's labs write the blood-count units; the number is the same in all of them */
const CBC_UNITS: Record<Locale, { k: string[]; m: string[] }> = {
  US: { k: ["Thousand/uL", "x10E3/uL", "K/uL"], m: ["Million/uL", "x10E6/uL", "M/uL"] },
  UK: { k: ["10*9/L", "x10^9/L", "×10⁹/L"], m: ["10*12/L", "x10^12/L", "×10¹²/L"] },
  DE: { k: ["/nl", "Tsd/µl", "G/l"], m: ["/pl", "Mio/µl", "T/l"] },
  ES: { k: ["x10^3/µL", "10^3/µL", "mil/mm3"], m: ["x10^6/µL", "10^6/µL", "mill/mm3"] },
  RO: { k: ["10^3/µL", "*10^3/uL", "mii/µL"], m: ["10^6/µL", "*10^6/uL", "mil./µL"] },
};

/* ---------- a seeded generator ---------- */
export function rng(seed: number) {
  let a = seed >>> 0;
  const next = () => { a = (a + 0x6d2b79f5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  return {
    next, chance: (p: number) => next() < p, between: (lo: number, hi: number) => lo + (hi - lo) * next(),
    int: (lo: number, hi: number) => lo + Math.floor(next() * (hi - lo + 1)),
    pick: <T,>(xs: readonly T[]): T => xs[Math.floor(next() * xs.length)],
    weighted: <T,>(xs: readonly (readonly [T, number])[]): T => { let r = next() * xs.reduce((s, x) => s + x[1], 0); for (const [v, w] of xs) { r -= w; if (r <= 0) return v; } return xs[xs.length - 1][0]; },
  };
}
type R = ReturnType<typeof rng>;

/* ---------- the answer key ---------- */
export type TruthRow = {
  slug: string; name: string; line?: string;
  printed: { value: number; text: string; unit: string; low: number | null; high: number | null };
  expected: { value: number; unit: string; low: number | null; high: number | null }; // in the reader's conventional units
  converted: boolean; // printed in a unit whose number differs from the conventional one
  flag: "H" | "L" | null; flagPrinted: "direction" | "mark" | null; // "mark": a star, which says abnormal but not which way
  critical: boolean; status: string; trueValue: number; // the true result, in conventional units
};
export type Report = {
  id: string; kind: "lines" | "csv" | "fhir"; lines?: string[]; text?: string; json?: unknown;
  truth: TruthRow[]; takenISO: string | null; tags: Record<string, string>;
};

const round = (v: number, dp: number) => { const f = 10 ** dp; return Math.round(v * f + (v >= 0 ? 1e-9 : -1e-9)) / f; };
const toUnit = (a: Analyte, u: Unit, v: number) => (a.slug === "hba1c" && u.unit === "mmol/mol" ? (v - 2.15) * 10.929 : v * u.f);
const fromUnit = (a: Analyte, u: Unit, v: number) => (a.slug === "hba1c" && u.unit === "mmol/mol" ? v / 10.929 + 2.15 : v / u.f);

/* a true value in conventional units: mostly in range, some outside, a few at the levels a lab phones through */
function draw(a: Analyte, r: R): { v: number; status: string } {
  const lo = a.lo ?? (a.hi as number) * 0.45, hi = a.hi ?? (a.lo as number) * 1.9;
  const kinds: [string, number][] = [["in", 70]];
  if (a.hi !== null) kinds.push(["high", 11]);
  if (a.lo !== null) kinds.push(["low", 11]);
  if (a.crit?.high !== undefined) kinds.push(["critical-high", 4]);
  if (a.crit?.low !== undefined) kinds.push(["critical-low", 4]);
  const status = r.weighted(kinds);
  const step = 10 ** -a.dp;
  let v: number;
  if (status === "in") v = r.between(lo + step, hi - step);
  else if (status === "high") { const cap = a.crit?.high !== undefined ? a.crit.high * 0.96 : hi * 1.6; v = hi + step + (cap - hi - step) * r.between(0.05, 0.95); }
  else if (status === "low") { const floor = a.crit?.low !== undefined ? a.crit.low * 1.05 : lo * 0.5; v = lo - step - (lo - step - floor) * r.between(0.05, 0.95); }
  else if (status === "critical-high") v = a.crit!.high! * r.between(1.06, 1.4);
  else v = a.crit!.low! * r.between(0.6, 0.94);
  if (a.slug === "hba1c") v = Math.max(v, 3.6); // below this HbA1c is not a real result (and is negative in mmol/mol)
  return { v: round(v, a.dp), status };
}

/* ---------- how one report is printed ---------- */
type Style = {
  locale: Locale; units: "conventional" | "SI"; comma: boolean; dpExtra: number;
  order: "VFRU" | "VFUR" | "VURF" | "FVUR" | "VUR"; flags: "HL" | "words" | "star" | "arrows" | "plusminus" | "none";
  range: string; upper: boolean; sep: "wide" | "single" | "tab"; variant: string;
};
const num = (v: number, dp: number, comma: boolean) => { const s = v.toFixed(dp); return comma ? s.replace(".", ",") : s; };
const spell = (u: string, st: Style, r: R, slug: string) => {
  let x = u;
  if (st.locale !== "US") x = x.replace(/^mcg/, "µg");
  if (st.locale === "DE" || (st.locale === "RO" && r.chance(0.4))) x = x.replace(/\/dL$/, "/dl").replace(/\/mL$/, "/ml").replace(/\/L$/, "/l").replace(/^fL$/, "fl");
  if (st.locale === "US" && x === "mmol/L" && ["sodium-serum", "potassium-serum", "chloride-serum"].includes(slug) && r.chance(0.3)) x = "mEq/L"; // the same number only for these
  if (st.locale === "US" && x === "mIU/L" && r.chance(0.4)) x = "uIU/mL";
  if (st.locale !== "US" && st.locale !== "UK" && /^mIU\/[Ll]$/.test(x) && r.chance(0.6)) x = st.locale === "DE" ? "µU/ml" : "µUI/mL";
  return x;
};

function rangeText(lo: number | null, hi: number | null, dp: number, st: Style, r: R): string {
  const n = (v: number) => num(v, dp, st.comma);
  if (lo !== null && hi !== null) {
    switch (st.range) {
      case "tight": return `${n(lo)}-${n(hi)}`;
      case "paren": return `(${n(lo)} - ${n(hi)})`;
      case "bracket": return `[${n(lo)} - ${n(hi)}]`;
      case "dash": return `${n(lo)} – ${n(hi)}`;
      default: return `${n(lo)} - ${n(hi)}`;
    }
  }
  if (hi !== null) return st.locale === "US" ? r.pick([`<${n(hi)}`, `< OR = ${n(hi)}`, `0-${n(hi)}`]) : st.locale === "DE" ? r.pick([`< ${n(hi)}`, `bis ${n(hi)}`]) : st.locale === "ES" ? r.pick([`< ${n(hi)}`, `Hasta ${n(hi)}`, `<${n(hi)}`]) : r.pick([`< ${n(hi)}`, `<${n(hi)}`, `<= ${n(hi)}`]);
  return st.locale === "US" ? r.pick([`>${n(lo!)}`, `> OR = ${n(lo!)}`, `>${n(lo!)}`]) : r.pick([`> ${n(lo!)}`, `>${n(lo!)}`, `>= ${n(lo!)}`]);
}

function flagToken(flag: "H" | "L" | null, critical: boolean, st: Style, r: R): { tok: string; printed: TruthRow["flagPrinted"] } {
  if (!flag || st.flags === "none") return { tok: "", printed: null };
  const hi = flag === "H";
  switch (st.flags) {
    case "HL": return { tok: critical && st.locale === "US" && r.chance(0.5) ? (hi ? "HH" : "LL") : hi ? "H" : "L", printed: "direction" };
    case "words": return { tok: st.locale === "UK" ? (hi ? "HIGH" : "LOW") : hi ? "High" : "Low", printed: "direction" };
    case "arrows": return { tok: hi ? "↑" : "↓", printed: "direction" };
    case "plusminus": return { tok: hi ? "+" : "-", printed: "direction" };
    default: return { tok: "*", printed: "mark" };
  }
}

const HEAD: Record<Locale, (d: string, r: R) => string[]> = {
  US: (d, r) => [r.pick(["Northgate Clinical Laboratories", "Summit Diagnostics", "Lakeshore Reference Lab"]), "Patient: DOE, SAMPLE    DOB: 05/12/1979    Age: 47    Sex: F", `Specimen: WC${r.int(100000, 999999)}X    Collected: ${d}    Reported: ${d}`, "Phone: 555-0142    Fax: 555-0199    Account: 40721", ""],
  UK: (d, r) => [r.pick(["Riverside Pathology", "Harbour Private GP Laboratory"]), "Patient: Sample Patient    Date of birth: 12/05/1979", `Sample collected: ${d}`, ""],
  DE: (d, r) => [r.pick(["Labor am Stadtpark MVZ", "Medizinisches Labor Nordlicht"]), "Patient: Muster, Erika    Geburtsdatum: 12.05.1979", `Entnahme: ${d}    Befund vom: ${d}`, ""],
  ES: (d, r) => [r.pick(["Laboratorio Clínico Mirasol", "Análisis Clínicos Albufera"]), "Paciente: Ejemplo García, Ana    F. nacimiento: 12/05/1979", `Fecha de extracción: ${d}`, ""],
  RO: (d, r) => [r.pick(["Laborator Analize Medicale Dunărea", "Centrul Medical Carpați - Laborator"]), "Pacient: Exemplu Ana    Data nașterii: 12.05.1979    Vârsta: 47 ani", `Data recoltării: ${d}`, ""],
};
const COLS: Record<Locale, string> = { US: "Test Name    Result    Flag    Reference Range    Units", UK: "Test    Result    Units    Reference range", DE: "Untersuchung    Ergebnis    Einheit    Referenzbereich", ES: "Prueba    Resultado    Unidades    Valores de referencia", RO: "Denumire analiză    Rezultat    UM    Interval de referință" };
const SECTION: Record<Locale, Record<string, string>> = {
  US: { chem: "COMPREHENSIVE METABOLIC PANEL", liver: "HEPATIC FUNCTION PANEL", lipid: "LIPID PANEL", cbc: "CBC (INCLUDES DIFF/PLT)", iron: "IRON AND TOTAL IRON BINDING CAPACITY", thyroid: "THYROID PANEL", vit: "VITAMINS AND HORMONES" },
  UK: { chem: "Biochemistry", liver: "Liver function tests", lipid: "Lipid profile", cbc: "Full blood count", iron: "Iron studies", thyroid: "Thyroid function", vit: "Vitamins and hormones" },
  DE: { chem: "Klinische Chemie", liver: "Leberwerte", lipid: "Fettstoffwechsel", cbc: "Kleines Blutbild", iron: "Eisenstoffwechsel", thyroid: "Schilddrüse", vit: "Vitamine und Hormone" },
  ES: { chem: "BIOQUÍMICA", liver: "PERFIL HEPÁTICO", lipid: "PERFIL LIPÍDICO", cbc: "HEMOGRAMA", iron: "METABOLISMO DEL HIERRO", thyroid: "PERFIL TIROIDEO", vit: "VITAMINAS Y HORMONAS" },
  RO: { chem: "BIOCHIMIE", liver: "PROFIL HEPATIC", lipid: "PROFIL LIPIDIC", cbc: "HEMOLEUCOGRAMĂ", iron: "METABOLISMUL FIERULUI", thyroid: "HORMONI TIROIDIENI", vit: "VITAMINE ȘI HORMONI" },
};
/* the notes labs print under a result: they carry numbers and marker names, and none of them is a result */
const NOTES: Record<Locale, Record<string, string[]>> = {
  US: {
    "ldl-cholesterol": ["Reference range: <100", "Desirable range <100 mg/dL for primary prevention;   <70 mg/dL for patients with CHD or diabetic patients", "with > or = 2 CHD risk factors."],
    hba1c: ["For someone without known diabetes, a hemoglobin A1c value between 5.7% and 6.4%", "is consistent with prediabetes and should be confirmed with a follow-up test."],
    egfr: ["The eGFR is based on the CKD-EPI 2021 equation."],
    "vitamin-d-25-oh": ["Vitamin D Status         25-OH Vitamin D:", "Deficiency:                    <20 ng/mL", "Insufficiency:             20 - 29 ng/mL", "Optimal:                 > or = 30 ng/mL"],
    "glucose-fasting": ["Fasting reference interval"],
  },
  UK: { hba1c: ["Non-diabetic: below 42 mmol/mol. Diabetes likely: 48 mmol/mol or above."], "total-cholesterol": ["Desirable: below 5.0 mmol/L"] },
  DE: { "ldl-cholesterol": ["Zielwert bei hohem Risiko: < 70 mg/dl"], hba1c: ["Diabetes mellitus ab 6,5 %"] },
  ES: { "total-cholesterol": ["Valores deseables: < 200 mg/dL"], "glucose-fasting": ["Muestra en ayunas"] },
  RO: { "total-cholesterol": ["Valori de referință în funcție de riscul cardiovascular"], "glucose-fasting": ["Probă recoltată à jeun"] },
};
const FOOT: Record<Locale, string[]> = { US: ["", "PERFORMING SITE: 1200 Example Way, Springfield", "Page 1 of 2"], UK: ["", "Page 1 of 1"], DE: ["", "Seite 1 von 1"], ES: ["", "Página 1 de 1"], RO: ["", "Pagina 1 din 1"] };

const dateIn = (iso: string, l: Locale) => { const [y, m, d] = iso.split("-"); return l === "US" ? `${m}/${d}/${y}` : l === "DE" || l === "RO" ? `${d}.${m}.${y}` : `${d}/${m}/${y}`; };

/* UCUM units, as a patient portal's FHIR export writes them */
const UCUM: Record<string, string[]> = { "Thousand/uL": ["10*3/uL", "K/uL"], "Million/uL": ["10*6/uL", "M/uL"], "mIU/L": ["m[IU]/L", "mIU/L", "u[IU]/mL"], "mL/min/1.73m2": ["mL/min/{1.73_m2}", "mL/min/1.73m2"], "mcg/dL": ["ug/dL"] };

/** the same results printed again in another lab's style: what a format-invariance test holds fixed */
export type Given = { rows: { slug: string; v: number; status: string }[]; takenISO: string; locale: Locale; salt: number };

export function makeReport(seed: number, index: number, given?: Given): Report {
  const r = rng(seed * 100003 + index * 7919 + 17 + (given ? given.salt * 104729 : 0));
  const drawnLocale = r.weighted<Locale>([["US", 34], ["UK", 16], ["DE", 16], ["ES", 16], ["RO", 18]]);
  const locale = given?.locale ?? drawnLocale;
  const kind = r.weighted<Report["kind"]>([["lines", 78], ["csv", 11], ["fhir", 11]]);
  const st: Style = {
    locale,
    units: locale === "UK" ? "SI" : locale === "DE" && r.chance(0.3) ? "SI" : locale === "US" && kind !== "lines" && r.chance(0.15) ? "SI" : "conventional",
    comma: locale === "DE" || locale === "ES" || (locale === "RO" && r.chance(0.6)),
    dpExtra: locale === "US" || locale === "UK" ? r.weighted([[0, 90], [1, 10]]) : r.weighted([[0, 70], [1, 18], [2, 12]]),
    order: locale === "US" ? r.pick(["VFRU", "VFUR"] as const) : locale === "UK" ? r.pick(["VURF", "VFUR"] as const) : locale === "DE" ? r.pick(["VFUR", "VURF"] as const) : locale === "ES" ? r.pick(["VFUR", "FVUR", "VURF"] as const) : r.pick(["VFUR", "VURF"] as const),
    flags: locale === "US" ? r.pick(["HL", "HL", "words", "none"] as const) : locale === "UK" ? r.pick(["HL", "words", "star", "none"] as const) : locale === "DE" ? r.pick(["plusminus", "arrows", "HL", "star", "none"] as const) : locale === "ES" ? r.pick(["star", "star", "HL", "arrows", "none"] as const) : r.pick(["arrows", "HL", "star", "none"] as const),
    range: locale === "US" ? r.pick(["tight", "spaced"]) : r.pick(["spaced", "paren", "bracket", "tight", "dash"]),
    upper: locale === "US" ? r.chance(0.5) : r.chance(0.25),
    sep: r.weighted([["wide", 60], ["single", 30], ["tab", 10]] as const),
    variant: kind === "lines" ? r.weighted([["plain", 58], ["glue", 6], ["unitspace", 6], ["leaders", 6], ["colon", 6], ["wrap", 9], ["twocol", 9]]) : "plain",
  };
  if (st.order === "FVUR" && st.flags !== "star") st.order = "VFUR"; // only the star is printed before the value
  if (kind !== "lines") { st.sep = "wide"; }

  // the panels on this report, and which of their tests were run
  let picked: Analyte[], takenISO: string;
  if (given) { picked = given.rows.map((g) => ANALYTES.find((a) => a.slug === g.slug)!); takenISO = given.takenISO; }
  else {
    const panels = ["chem", "liver", "lipid", "cbc", "iron", "thyroid", "vit"].filter(() => r.chance(0.55));
    if (!panels.length) panels.push(r.pick(["chem", "lipid", "cbc"]));
    picked = ANALYTES.filter((a) => panels.includes(a.panel) && r.chance(0.85));
    const month = r.int(1, 12), day = r.int(1, 28);
    takenISO = `2026-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  }

  const truth: TruthRow[] = [];
  const parts: { a: Analyte; t: TruthRow; cells: { name: string; value: string; flag: string; unit: string; range: string } }[] = [];
  for (const a of picked) {
    const { v, status } = given ? given.rows.find((g) => g.slug === a.slug)! : draw(a, r);
    // the unit this lab prints the result in
    let u: Unit = { unit: a.unit, f: 1, dp: a.dp };
    if (st.units === "SI" && a.si) u = a.si;
    if (a.cbc && kind !== "fhir") u = { unit: r.pick(CBC_UNITS[locale][a.cbc]), f: 1, dp: a.dp };
    let dp = u.dp + (a.slug === "tsh" && r.chance(0.35) ? 1 : st.dpExtra);
    if (kind === "fhir") dp = u.dp;
    const pv = round(toUnit(a, u, v), dp);
    const plo = a.lo === null ? null : round(toUnit(a, u, a.lo), u.dp), phi = a.hi === null ? null : round(toUnit(a, u, a.hi), u.dp);
    const converted = !a.cbc && (u.f !== 1 || u.unit === "mmol/mol");
    const back = (x: number | null) => (x === null ? null : converted ? fromUnit(a, u, x) : x);
    const ev = back(pv) as number;
    const flag = phi !== null && pv > phi ? "H" : plo !== null && pv < plo ? "L" : null;
    const critical = !!a.crit && ((a.crit.low !== undefined && ev <= a.crit.low) || (a.crit.high !== undefined && ev >= a.crit.high));
    const ft = flagToken(flag, critical, st, r);
    let name = r.pick(a.names[locale]);
    if (st.upper) name = name.toUpperCase();
    let unit = a.cbc ? u.unit : spell(u.unit, st, r, a.slug);
    if (kind === "fhir") unit = r.pick(UCUM[u.unit] ?? [u.unit]);
    const text = num(pv, dp, st.comma && kind !== "fhir");
    const t: TruthRow = {
      slug: a.slug, name, printed: { value: pv, text, unit, low: plo, high: phi },
      expected: { value: ev, unit: converted ? a.unit : unit, low: back(plo), high: back(phi) },
      converted, flag, flagPrinted: ft.printed, critical, status, trueValue: v,
    };
    truth.push(t);
    parts.push({ a, t, cells: { name, value: text, flag: ft.tok, unit, range: rangeText(plo, phi, u.dp + (st.dpExtra && kind !== "fhir" ? st.dpExtra : 0), st, r) } });
  }
  const tags: Record<string, string> = { locale, kind, units: st.units, decimal: st.comma && kind !== "fhir" ? "comma" : "point", order: st.order, flags: st.flags, range: st.range, sep: st.sep, variant: st.variant, case: st.upper ? "upper" : "as-printed" };
  const id = `r${seed}-${index}`;

  if (kind === "fhir") {
    const mode = r.weighted([["loinc+text", 40], ["loinc-only", 30], ["text-only", 30]]);
    tags.variant = `fhir:${mode}`;
    const entry = parts.map(({ a, t, cells }) => ({
      resource: {
        resourceType: "Observation", status: "final", category: [{ coding: [{ system: "http://terminology.hl7.org/CodeSystem/observation-category", code: "laboratory" }] }],
        code: { ...(mode !== "text-only" ? { coding: [{ system: "http://loinc.org", code: a.loinc, display: a.loincName }] } : {}), ...(mode !== "loinc-only" ? { text: cells.name } : {}) },
        effectiveDateTime: `${takenISO}T08:${String(r.int(10, 59))}:00Z`,
        valueQuantity: { value: t.printed.value, unit: cells.unit, system: "http://unitsofmeasure.org" },
        referenceRange: [{ ...(t.printed.low !== null ? { low: { value: t.printed.low, unit: cells.unit } } : {}), ...(t.printed.high !== null ? { high: { value: t.printed.high, unit: cells.unit } } : {}) }],
        ...(t.flag ? { interpretation: [{ coding: [{ system: "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation", code: t.flag }] }] } : {}),
      },
    }));
    for (const t of truth) t.flagPrinted = null; // the flag travels as a code, not as text beside the value
    return { id, kind, json: { resourceType: "Bundle", type: "searchset", entry }, truth, takenISO, tags };
  }

  if (kind === "csv") {
    const mode = locale === "US" || locale === "UK" ? r.weighted([["csv:comma", 60], ["csv:lowhigh", 40]]) : "csv:semicolon";
    tags.variant = mode;
    const q = (s: string, sep: string) => (s.includes(sep) || s.includes('"') ? `"${s.replace(/"/g, '""')}"` : s);
    let rows: string[];
    if (mode === "csv:lowhigh") {
      rows = ["Biomarker,Value,Unit,Low,High,Date", ...parts.map(({ t, cells }) => [q(cells.name, ","), cells.value, cells.unit, t.printed.low ?? "", t.printed.high ?? "", takenISO].join(","))];
      for (const t of truth) t.flagPrinted = null;
    } else if (mode === "csv:comma") {
      rows = ["Test,Result,Flag,Units,Reference Range", ...parts.map(({ cells }) => [q(cells.name, ","), cells.value, cells.flag, cells.unit, q(cells.range, ",")].join(","))];
    } else {
      const head = { DE: "Untersuchung;Ergebnis;Einheit;Referenzbereich", ES: "Prueba;Resultado;Unidades;Valores de referencia", RO: "Analiza;Rezultat;UM;Interval de referinta" }[locale as "DE" | "ES" | "RO"];
      rows = [head, ...parts.map(({ cells }) => [cells.name, cells.flag ? `${cells.value} ${cells.flag}` : cells.value, cells.unit, cells.range].join(";"))];
    }
    parts.forEach(({ t }, i) => (t.line = rows[i + 1]));
    return { id, kind, text: rows.join("\n"), truth, takenISO: mode === "csv:lowhigh" ? takenISO : null, tags };
  }

  // a printed report: header, the column titles, each panel under its heading, the lab's notes, a footer
  const gap = st.sep === "tab" ? "\t" : st.sep === "single" ? " " : "   ";
  const lineOf = ({ cells }: (typeof parts)[number]): string[] => {
    let { name, value, unit } = cells;
    const { flag, range } = cells;
    if (st.variant === "colon") name += ":";
    if (st.variant === "unitspace") unit = unit.replace("/", " / ");
    if (st.variant === "glue" && unit && !/^[\d*]/.test(unit) && (st.order === "VURF" || st.order === "VUR" || !flag) && st.order !== "VFRU") { value = value + unit; unit = ""; }
    const nameCell = st.variant === "leaders" ? `${name} ${".".repeat(Math.max(4, 34 - name.length))}` : st.sep === "wide" ? name.padEnd(34) : name;
    const rest = (st.order === "VFRU" ? [flag ? `${value} ${flag}` : value, `${range} ${unit}`.trim()]
      : st.order === "VFUR" ? [value, flag, unit, range]
      : st.order === "FVUR" ? [flag ? `${flag} ${value}` : value, unit, range]
      : [value, unit, range, flag]).filter(Boolean).join(gap);
    if (st.variant === "wrap" && name.length > 12) return [name, `${" ".repeat(8)}${rest}`];
    return [`${nameCell}${gap}${rest}`];
  };
  const body: string[] = [];
  let lastPanel = "";
  const headings = r.chance(0.65);
  for (const p of parts) {
    if (headings && p.a.panel !== lastPanel) { body.push("", SECTION[locale][p.a.panel]); lastPanel = p.a.panel; }
    const ls = lineOf(p);
    p.t.line = ls.join(" ⏎ ");
    body.push(...ls);
    const note = NOTES[locale][p.a.slug];
    if (note && r.chance(0.4)) body.push(...note);
  }
  let out = body;
  if (st.variant === "twocol") {
    // two results side by side, the way a blood count is often laid out; headings and notes stay on their own lines
    const isRow = (l: string) => parts.some((p) => p.t.line === l);
    out = [];
    for (let i = 0; i < body.length; i++) {
      if (isRow(body[i]) && i + 1 < body.length && isRow(body[i + 1])) { out.push(`${body[i].padEnd(74)}    ${body[i + 1]}`); i++; }
      else out.push(body[i]);
    }
  }
  const lines = [...HEAD[locale](dateIn(takenISO, locale), r), ...(r.chance(0.6) ? [COLS[locale]] : []), ...out, ...FOOT[locale]];
  return { id, kind, lines, truth, takenISO, tags };
}

/** n sets of results, each printed k ways: the first as drawn, then in each other lab style in turn (ids r<seed>-<i>v<k>) */
export function makeVariants(n: number, k: number, seed = 1): Report[] {
  const out: Report[] = [];
  const LOCALES: Locale[] = ["US", "UK", "DE", "ES", "RO"];
  for (let i = 0; i < n; i++) {
    const first = makeReport(seed, i);
    // the collection date: the first printing's, or (a CSV export that printed none) a fixed one for the set
    const takenISO = first.takenISO ?? `2026-${String((i % 12) + 1).padStart(2, "0")}-${String((i % 28) + 1).padStart(2, "0")}`;
    const base = { rows: first.truth.map((t) => ({ slug: t.slug, v: t.trueValue, status: t.status })), takenISO };
    const others = LOCALES.filter((l) => l !== first.tags.locale);
    out.push({ ...first, id: `r${seed}-${i}v0`, tags: { ...first.tags, group: `r${seed}-${i}` } });
    for (let j = 1; j < k; j++) {
      const v = makeReport(seed, i, { ...base, locale: others[(j - 1) % others.length], salt: j });
      out.push({ ...v, id: `r${seed}-${i}v${j}`, tags: { ...v.tags, group: `r${seed}-${i}` } });
    }
  }
  return out;
}

export function makeReports(n: number, seed = 1): Report[] {
  return Array.from({ length: n }, (_, i) => makeReport(seed, i));
}
