/* Critical values: a result at or beyond these is one a lab phones through. A reader that misreads one so it no longer
   crosses the line has lost the most important thing on the report. Thresholds in the conventional units the answer key
   uses (mg/dL, g/dL, mmol/L, ×10³/µL, U/L), following the UK Royal College of Pathologists' alert thresholds. */
export const CRITICAL: Record<string, { low?: number; high?: number }> = {
  "potassium-serum": { low: 2.5, high: 6.5 }, "sodium-serum": { low: 120, high: 155 }, "glucose-fasting": { low: 45, high: 450 },
  hemoglobin: { low: 7 }, "platelet-count": { low: 30, high: 1000 }, wbc: { high: 50 }, alt: { high: 600 }, "creatinine-serum": { high: 4 },
};
export const isCritical = (slug: string, v: number) => { const c = CRITICAL[slug]; return !!c && ((c.low !== undefined && v <= c.low) || (c.high !== undefined && v >= c.high)); };
