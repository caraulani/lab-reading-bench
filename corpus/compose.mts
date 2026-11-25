/* lab-report-corpus: one report, as printed lines and its answer key (25 Nov 2026).

   A report is built in three steps: an invented person and their true results (values.mts); a lab (preset) that prints
   them in its units, decimal mark, flags and range style, as table lines; and hard cases inserted on purpose, each tagged
   in the answer key. Geometry (pages, boxes) comes later (html.mts, render.mts). Everything is drawn from one seeded
   generator per report, so a report id always gives the same report. */
import { rng } from "../generate.mts";
import { isCritical, CRITICAL } from "../critical.mts";
import { BY, COUNT_UNITS, interval, toU, fromU, type CA, type Loc, type Panel, type U } from "./catalog.mts";
import { makePerson, earlier, valuesOf, ckdEpi2021, type Person } from "./values.mts";
import { BY_PRESET, PRESETS, type FlagStyle, type Preset, type RangeStyle } from "./presets.mts";
import * as L from "./locale.mts";
import type { ColKind } from "./locale.mts";

export const SCHEMA_VERSION = "1.0.0";
export type HardCase = "ambiguous_name" | "missing_unit" | "unit_change_between_dates" | "pct_abs_differential" | "pct_abs_same_name" | "pct_abs_same_line"
  | "censored_value" | "comment_in_value" | "footnote_method_change" | "abstain" | "dual_unit" | "decimal_comma" | "thousands_separator"
  | "prior_date_column" | "calculated" | "split_table" | "flag_by_typography" | "critical_value";

export type KeyRow = {
  report_id: string; row_id: string; line_id: string; page: number | null; date: string; is_current: boolean;
  section: Panel; analyte: string; marker_slug: string; specimen: string;
  value: number | null; value_text: string; comparator: "<" | ">" | "<=" | ">=" | null;
  unit: string | null; unit_expected: string; ref_text: string | null; ref_low: number | null; ref_high: number | null;
  flag: string | null; flag_norm: "H" | "L" | "HH" | "LL" | "A" | null;
  alt_value: number | null; alt_unit: string | null;
  value_conv: number | null; unit_conv: string; critical: boolean;
  action: "read" | "abstain"; abstain_reason: string | null; footnote: string | null; hard_cases: HardCase[];
  bbox: Record<string, [number, number, number, number]>;
};
export type Piece = { t: string; k?: string; cls?: string };
export type Line = {
  type: "row" | "section" | "note" | "comment"; h: number; cells?: Partial<Record<ColKind, Piece[]>>; sub?: Piece[];
  text?: string; foot?: { mark: string; text: string }; rows: string[]; panel?: Panel; id: string;
};
export type Doc = {
  id: string; seed: number; index: number; preset: string; locale: Loc; decimal: "comma" | "point"; units: string;
  person: { sex: "M" | "F"; age: number; conditions: string[] }; dates: string[]; // dates[0] is the current collection
  header: { lab: string; addr: string; patient: string; dob: string; pid: string; physician: string; collected: string; received: string; reported: string; specimen: string; fasting: boolean };
  lines: Line[]; key: KeyRow[]; endComments: string[]; flagStyle: FlagStyle; rangeStyle: RangeStyle; tags: string[];
};

const rd = (v: number, dp: number) => { const f = 10 ** dp; return Math.round(v * f + (v >= 0 ? 1e-9 : -1e-9)) / f; };
type R = ReturnType<typeof rng>;
const hashStr = (s: string) => [...s].reduce((h, c) => Math.imul(h ^ c.charCodeAt(0), 16777619) >>> 0, 2166136261);

/** train / validation / test from the report id alone, so a split never depends on how many reports were built */
export function splitOf(id: string): "train" | "validation" | "test" { const h = hashStr(id + "|split") % 100; return h < 80 ? "train" : h < 90 ? "validation" : "test"; }

/* ---------- units, as this lab prints them ---------- */
function spell(u: string, loc: Loc, r: R, slug: string): string {
  let x = u;
  if (loc !== "US") x = x.replace(/^mcg/, "µg");
  if (loc === "US" && x === "mmol/L" && ["sodium-serum", "potassium-serum", "chloride-serum", "bicarbonate-co2"].includes(slug) && r.chance(0.3)) x = "mEq/L";
  if (loc === "US" && x === "mIU/L" && r.chance(0.4)) x = "uIU/mL";
  if (loc === "DE") x = x.replace(/\/dL$/, "/dl").replace(/\/mL$/, "/ml").replace(/\/L$/, "/l").replace(/^fL$/, "fl");
  if ((loc === "ES" || loc === "RO" || loc === "FR") && x === "mIU/L") x = loc === "FR" ? "mUI/L" : r.chance(0.5) ? "µUI/mL" : "mUI/L";
  if (loc === "DE" && x === "mIU/l") x = r.chance(0.6) ? "µU/ml" : "mU/l";
  if (loc === "FR") x = x.replace(/^mL\/min\/1.73m2$/, "mL/min/1,73m²");
  return x;
}
type Sys = { units: Preset["units"]; si: boolean; count: { k: string; m: string; mm3: boolean } };
/** the unit a marker is printed in on this report, and the second unit French labs print beside it */
function unitsFor(a: CA, sys: Sys, loc: Loc): { u: U; alt?: U } {
  if (a.count) {
    if (sys.count.mm3) return a.count === "k" ? { u: { unit: "/mm3", f: 1000, dp: 0 } } : { u: { unit: "/mm3", f: 1e6, dp: -4 } };
    return { u: { unit: a.count === "k" ? sys.count.k : sys.count.m, f: 1, dp: a.dp } };
  }
  if (a.slug === "hba1c") {
    if (loc === "UK") return { u: { unit: "mmol/mol", f: NaN, dp: 0 } };
    if (loc === "FR") return { u: { unit: "%", f: 1, dp: 1 }, alt: { unit: "mmol/mol", f: NaN, dp: 0 } };
    return { u: { unit: "%", f: 1, dp: 1 } };
  }
  if (sys.units === "FR") {
    if (a.frMass) return { u: a.frMass, alt: a.si && a.si.unit !== "mmol/mol" ? a.si : undefined };
    if (a.si && ["serum-iron", "tibc", "urine-creatinine", "free-t4", "free-t3", "vitamin-b12"].includes(a.slug)) return { u: a.si };
    if (a.slug === "hemoglobin" || a.slug === "mchc") return { u: { unit: "g/dL", f: 1, dp: 1 } };
    if (a.slug === "vitamin-d-25-oh") return { u: { unit: "ng/mL", f: 1, dp: 0 }, alt: a.si };
    return { u: { unit: a.unit, f: 1, dp: a.dp } };
  }
  if (sys.si && a.si && a.slug !== "urine-acr") return { u: a.si };
  if (sys.si && a.slug === "urine-acr") return { u: a.si! };
  return { u: { unit: a.unit, f: 1, dp: a.dp } };
}
const fmt = (v: number, dp: number, comma: boolean, thousands = false) => {
  let s = v.toFixed(Math.max(0, dp));
  if (thousands) s = s.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return comma ? s.replace(".", ",") : s;
};

function rangeText(lo: number | null, hi: number | null, dp: number, style: RangeStyle, loc: Loc, comma: boolean, r: R, thousands = false): string | null {
  const n = (v: number) => fmt(v, dp, comma, thousands);
  if (lo !== null && hi !== null) {
    if (lo === 0 && r.chance(0.5)) return loc === "DE" ? r.pick([`< ${n(hi)}`, `bis ${n(hi)}`]) : loc === "US" ? `<=${n(hi)}` : `< ${n(hi)}`;
    switch (style) {
      case "tight": return `${n(lo)}-${n(hi)}`;
      case "paren": return `(${n(lo)} - ${n(hi)})`;
      case "bracket": return `[${n(lo)} - ${n(hi)}]`;
      case "dash": return `${n(lo)} – ${n(hi)}`;
      case "a": return loc === "FR" ? r.pick([`${n(lo)} à ${n(hi)}`, `(${n(lo)}-${n(hi)})`]) : `${n(lo)} - ${n(hi)}`;
      default: return `${n(lo)} - ${n(hi)}`;
    }
  }
  if (hi !== null) return loc === "US" ? r.pick([`<${n(hi)}`, `< OR = ${n(hi)}`, `0-${n(hi)}`]) : loc === "DE" ? r.pick([`< ${n(hi)}`, `bis ${n(hi)}`]) : loc === "ES" ? r.pick([`< ${n(hi)}`, `Hasta ${n(hi)}`]) : loc === "FR" ? r.pick([`< ${n(hi)}`, `inf. à ${n(hi)}`]) : r.pick([`< ${n(hi)}`, `<${n(hi)}`]);
  if (lo !== null) return loc === "US" ? r.pick([`>${n(lo)}`, `> OR = ${n(lo)}`]) : loc === "FR" ? r.pick([`> ${n(lo)}`, `sup. à ${n(lo)}`]) : r.pick([`> ${n(lo)}`, `>= ${n(lo)}`]);
  return null;
}
function flagTok(norm: KeyRow["flag_norm"], style: FlagStyle, loc: Loc): string | null {
  if (!norm || style === "none" || style === "bold") return null;
  const hi = norm === "H" || norm === "HH", crit = norm === "HH" || norm === "LL";
  switch (style) {
    case "HL": return crit && loc === "US" ? norm : hi ? "H" : "L";
    case "words": return loc === "UK" ? (hi ? "HIGH" : "LOW") : hi ? "High" : "Low";
    case "arrows": return crit ? (hi ? "↑↑" : "↓↓") : hi ? "↑" : "↓";
    case "plusminus": return crit ? (hi ? "++" : "--") : hi ? "+" : "-";
    default: return "*";
  }
}
const LOQ: Record<string, number> = { "hs-crp": 0.2, thyroglobulin: 0.1, tsh: 0.01, "urine-albumin": 3 }; // design choices, conventional units

/* ---------- which markers a report carries ---------- */
function panelSlugs(panel: Panel, loc: Loc, p: Person, r: R, diffMode: string): string[] {
  const urea = loc === "UK" || loc === "FR" || (loc === "DE" && r.chance(0.5)) ? "urea" : "blood-urea-nitrogen";
  const keep = (xs: string[], pk = 0.88) => xs.filter((s, i) => i === 0 || r.chance(pk));
  switch (panel) {
    case "chem": return keep(["glucose-fasting", "hba1c", urea, "creatinine-serum", "egfr", "uric-acid", "sodium-serum", "potassium-serum", "chloride-serum", "bicarbonate-co2", "calcium-total", "magnesium-serum", "phosphorus-serum", "total-protein", "albumin-serum", "hs-crp"], 0.8);
    case "liver": return keep(["alt", "ast", "alp", "ggt", "total-bilirubin"], 0.9);
    case "lipid": return ["total-cholesterol", "triglycerides", "hdl-cholesterol", "ldl-cholesterol"];
    case "cbc": return keep(["wbc", "rbc", "hemoglobin", "hematocrit", "mcv", "mch", "mchc", "rdw-cv", "platelet-count"], 0.92);
    case "diff": {
      const f = ["neutrophils", "lymphocytes", "monocytes", "eosinophils", "basophils"];
      if (diffMode === "abs") return f.map((x) => `${x}-absolute`);
      if (diffMode === "pct") return f.map((x) => `${x}-percent`);
      if (diffMode === "grouped") return [...f.map((x) => `${x}-percent`), ...f.map((x) => `${x}-absolute`)];
      return f.flatMap((x) => [`${x}-percent`, `${x}-absolute`]); // interleaved, or the same line (FR)
    }
    case "iron": return keep(["serum-iron", "tibc", "transferrin-saturation", "ferritin"], 0.85);
    case "thyroid": return [...keep(["tsh", "free-t4", "free-t3"], 0.7), ...(p.conditions.includes("thyroid-cancer-follow-up") || r.chance(0.04) ? ["thyroglobulin"] : [])];
    case "vit": return keep(["vitamin-d-25-oh", "vitamin-b12", "folate-serum", ...(p.sex === "M" ? ["testosterone-total"] : [])], 0.8);
    case "urine": return ["urine-creatinine", "urine-albumin", "urine-acr"];
  }
}
const PROFILES: [string, Panel[], number][] = [
  ["checkup", ["chem", "liver", "lipid", "cbc", "diff"], 26], ["full", ["chem", "liver", "lipid", "cbc", "diff", "iron", "thyroid", "vit", "urine"], 14],
  ["small", [], 14], ["renal", ["chem", "urine", "cbc"], 8], ["anaemia", ["cbc", "diff", "iron", "vit"], 10], ["thyroid", ["thyroid", "lipid", "chem"], 8],
  ["diabetes", ["chem", "lipid", "urine", "liver"], 10], ["wellness", ["chem", "lipid", "iron", "thyroid", "vit"], 10],
];

/* ---------- one report ---------- */
export function makeDoc(seed: number, index: number, opts: { heldout?: boolean } = {}): Doc {
  const id = `lrc-${seed}-${String(index).padStart(5, "0")}`;
  const r = rng(hashStr(id));
  const split = splitOf(id);
  const locale = r.weighted<Loc>([["US", 18], ["UK", 16], ["DE", 17], ["ES", 16], ["RO", 16], ["FR", 17]]);
  const pool = PRESETS.filter((p) => p.locale === locale && !p.heldout);
  let preset: Preset = r.pick(pool);
  // the held-out layout is only ever used for test reports
  const held = PRESETS.find((p) => p.locale === locale && p.heldout);
  if (held && split === "test" && opts.heldout !== false && r.chance(0.5)) preset = held;
  const person = makePerson(r);
  const comma = locale === "DE" || locale === "ES" || locale === "FR" || (locale === "RO" && r.chance(0.6));
  const si = preset.units === "SI" || (preset.units === "mixed" && r.chance(0.3));
  const mm3 = locale === "FR" && r.chance(0.25);
  const ci = r.int(0, COUNT_UNITS[locale].k.length - 1);
  const sys: Sys = { units: preset.units, si, count: { k: COUNT_UNITS[locale].k[ci], m: COUNT_UNITS[locale].m[ci], mm3 } };
  const flagStyle = r.pick(preset.flags), rangeStyle = r.pick(preset.ranges);
  // dates: the current collection, and up to two earlier ones for a cumulative report
  const month = r.int(1, 10), day = r.int(1, 28);
  const cur = `2026-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  const back = (iso: string, m: number) => { const d = new Date(iso + "T00:00:00Z"); d.setUTCMonth(d.getUTCMonth() - m); d.setUTCDate(Math.min(28, r.int(1, 28))); return d.toISOString().slice(0, 10); };
  const gaps = [r.int(2, 9), r.int(3, 12)];
  const dates = [cur];
  if (preset.prior >= 1) dates.push(back(cur, gaps[0]));
  if (preset.prior >= 2) dates.push(back(dates[1], gaps[1]));
  const people = [person, ...dates.slice(1).map((_, i) => earlier(person, r, gaps.slice(0, i + 1).reduce((s, x) => s + x, 0)))];
  const vals = people.map(valuesOf);
  // a result at a level a lab phones through (critical.mts), in about one report in eight: one marker that nothing else
  // is computed from, or creatinine with its eGFR recomputed
  if (r.chance(0.12)) {
    const [slug, side] = r.pick([["potassium-serum", "high"], ["potassium-serum", "low"], ["sodium-serum", "low"], ["sodium-serum", "high"], ["glucose-fasting", "high"], ["glucose-fasting", "low"], ["platelet-count", "low"], ["platelet-count", "high"], ["alt", "high"], ["creatinine-serum", "high"]] as const);
    const c = CRITICAL[slug] as { low?: number; high?: number };
    const a = BY[slug];
    const v = side === "high" ? c.high! * r.between(1.06, 1.4) : c.low! * r.between(0.6, 0.94);
    vals[0][slug] = rd(v, a.dp);
    if (slug === "creatinine-serum") vals[0].egfr = Math.round(ckdEpi2021(vals[0][slug], person.age, person.sex));
    person.conditions.push(`critical-${slug}-${side}`);
  }

  // panels
  const [profile, panels0] = (() => { const pr = r.weighted(PROFILES.map(([n, ps, w]) => [[n, ps] as [string, Panel[]], w] as const)); return pr; })();
  let panels = [...panels0];
  if (profile === "small") panels = [r.pick<Panel>(["lipid", "thyroid", "cbc", "chem", "iron", "vit"])];
  if (panels.includes("diff") && !panels.includes("cbc")) panels.unshift("cbc");
  if (panels.includes("diff") && r.chance(0.25)) panels = panels.filter((p) => p !== "diff");
  const ORDER: Panel[] = ["cbc", "diff", "chem", "liver", "lipid", "iron", "thyroid", "vit", "urine"];
  const order = locale === "US" || locale === "UK" ? ["chem", "liver", "lipid", "cbc", "diff", "iron", "thyroid", "vit", "urine"] as Panel[] : ORDER;
  panels = order.filter((p) => panels.includes(p));
  const diffMode = locale === "UK" ? r.weighted([["abs", 70], ["grouped", 30]]) : locale === "FR" ? "sameline" : locale === "US" ? r.weighted([["interleaved", 50], ["grouped", 50]]) : r.weighted([["interleaved", 55], ["grouped", 45]]);
  const sameName = (locale === "RO" && r.chance(0.6)) || (locale === "DE" && r.chance(0.35)) || (locale === "ES" && r.chance(0.3));

  const key: KeyRow[] = [];
  const lines: Line[] = [];
  const endComments: string[] = [];
  const tags = new Set<string>();
  const fDate = (iso: string) => L.dateIn(iso, locale);
  let nextFoot = 0;
  const MARKS = ["¹", "²", "³", "⁴"];
  const usedCase = new Set<string>();
  // per-report hard-case budget: which kinds this report carries
  const want = {
    missingUnit: r.chance(0.22), comment: r.chance(0.1), pending: r.chance(0.05), notdone: r.chance(0.04), suffix: r.chance(0.07),
    footnote: r.chance(preset.prior ? 0.35 : 0.1), tg: r.chance(0.3), cr: r.chance(0.14), unitChange: preset.prior > 0 && r.chance(0.5),
  };
  const unitChangeSlug = want.unitChange ? r.pick(["creatinine-serum", "glucose-fasting", "hba1c", "total-cholesterol", "uric-acid", "total-bilirubin", "vitamin-d-25-oh"]) : "";

  let n = 0;
  for (const panel of panels) {
    const slugs = panelSlugs(panel, locale, person, r, diffMode);
    if (!slugs.length) continue;
    lines.push({ type: "section", h: 1.35, text: L.SECTIONS[locale][panel], rows: [], panel, id: `s${lines.length}` });
    const done = new Set<string>();
    for (const slug of slugs) {
      if (done.has(slug)) continue;
      const a = BY[slug];
      const lineId = `l${String(lines.length).padStart(3, "0")}`;
      // FR prints the percent and the absolute count of a white-cell type on one line
      const pair = locale === "FR" && slug.endsWith("-percent") && slugs.includes(slug.replace("-percent", "-absolute")) ? slug.replace("-percent", "-absolute") : null;
      if (pair) done.add(pair);
      const made = rowFor(a, pair ? BY[pair] : null);
      if (!made) continue;
      lines.push({ ...made.line, id: lineId });
      for (const k of made.keys) k.line_id = lineId;
      key.push(...made.keys);
      const note = L.NOTES[locale][slug];
      if (note && r.chance(0.3)) for (const t of note) lines.push({ type: "note", h: 1, text: t, rows: [], id: `n${lines.length}` });
    }
  }
  if (endComments.length) tags.add("end_comments");

  function rowFor(a: CA, b: CA | null): { line: Omit<Line, "id">; keys: KeyRow[] } | null {
    const v0 = vals[0][a.slug];
    if (v0 === undefined) return null;
    const { u, alt } = unitsFor(a, sys, locale);
    const extra = locale === "US" || locale === "UK" ? 0 : u.dp >= 0 && (u.dp <= 1 || a.slug === "tsh") && r.chance(0.12) ? 1 : 0;
    const dp = Math.max(0, u.dp + extra);
    const rowId = `r${String(n++).padStart(3, "0")}`;
    const hc = new Set<HardCase>();
    if (comma) hc.add("decimal_comma");
    let name = r.pick(a.names[locale]);
    // names that are the same for percent and absolute counts
    if (a.panel === "diff") {
      hc.add("pct_abs_differential");
      if (sameName && diffMode !== "abs") { name = a.names[locale][0].replace(/ %$/, "").replace(/ abs\.$/, ""); if (locale === "RO") name = a.names.RO[0]; hc.add("pct_abs_same_name"); }
      else if (locale !== "FR") name = a.slug.endsWith("-percent") ? a.names[locale][0] : a.names[locale][a.names[locale].length > 1 && locale !== "RO" ? 0 : 0];
      if (locale === "RO" && !sameName) name = a.names.RO[1];
      if (locale === "DE" && !sameName) name = a.slug.endsWith("-percent") ? a.names.DE[0] : a.names.DE[0];
    }
    if (a.slug === "triglycerides" && want.tg && !usedCase.has("tg")) { name = "TG"; hc.add("ambiguous_name"); usedCase.add("tg"); }
    if (a.slug === "thyroglobulin" && r.chance(0.6)) { name = "Tg"; hc.add("ambiguous_name"); }
    if ((a.slug === "creatinine-serum" || a.slug === "urine-creatinine") && want.cr && !usedCase.has("cr" + a.slug)) { name = a.slug === "urine-creatinine" ? r.pick(["Cr", "Cr (urine)"]) : "Cr"; hc.add("ambiguous_name"); usedCase.add("cr" + a.slug); }
    if (preset.id === "us-a" || preset.id === "us-cum") name = r.chance(0.5) ? name.toUpperCase() : name;
    const [ilo, ihi] = interval(a, person.sex);
    // the printed value
    const thousands = u.unit === "/mm3";
    const conv = (x: number) => toU(a, u, x);
    let pv = rd(conv(v0), dp);
    if (u.unit === "/mm3") pv = a.count === "m" ? rd(conv(v0), -4) : rd(conv(v0), -2);
    const pdp = u.unit === "/mm3" ? 0 : dp;
    let text = fmt(pv, pdp, comma, thousands);
    if (thousands) hc.add("thousands_separator");
    let comparator: KeyRow["comparator"] = null, value: number | null = pv;
    const loq = LOQ[a.slug];
    if (loq !== undefined && v0 < loq) { const b0 = rd(conv(loq), dp); value = b0; comparator = "<"; text = `<${fmt(b0, pdp, comma)}`; hc.add("censored_value"); }
    if (a.slug === "urine-acr" && vals[0]["urine-albumin"] < LOQ["urine-albumin"]) { const b0 = rd(conv(LOQ["urine-albumin"] / (vals[0]["urine-creatinine"] * 0.01)), 1); value = b0; comparator = "<"; text = `<${fmt(b0, 1, comma)}`; hc.add("censored_value"); }
    if (a.slug === "egfr" && v0 >= 90 && (locale === "UK" ? r.chance(0.9) : r.chance(0.45))) { value = 90; comparator = ">"; text = r.chance(0.8) ? ">90" : "> 90"; hc.add("censored_value"); }
    // the printed interval in this unit
    const rlo = ilo === null ? null : rd(conv(ilo), u.unit === "/mm3" ? (a.count === "m" ? -4 : -2) : u.dp), rhi = ihi === null ? null : rd(conv(ihi), u.unit === "/mm3" ? (a.count === "m" ? -4 : -2) : u.dp);
    const hidePctRange = locale === "FR" && a.slug.endsWith("-percent");
    let rtext = hidePctRange ? null : rangeText(rlo, rhi, u.unit === "/mm3" ? 0 : u.dp + (extra && r.chance(0.5) ? 1 : 0), rangeStyle, locale, comma, r, thousands);
    if (a.slug === "thyroglobulin" || a.slug === "urine-creatinine" || a.slug === "urine-albumin") rtext = null;
    // the value in the conventional unit the benchmark scores in
    const vconv = value === null ? null : u.unit === "/mm3" ? value / u.f : a.count ? value : fromU(a, u, value);
    const crit = vconv !== null && comparator === null && isCritical(a.slug, vconv);
    let fnorm: KeyRow["flag_norm"] = null;
    if (value !== null && comparator === null) fnorm = rhi !== null && value > rhi ? "H" : rlo !== null && value < rlo ? "L" : null;
    if (comparator === "<" && rlo !== null && value !== null && value <= rlo) fnorm = "L";
    if (fnorm && crit) fnorm = fnorm === "H" ? "HH" : "LL";
    if (crit) hc.add("critical_value");
    let ftok = flagTok(fnorm, flagStyle, locale);
    if (fnorm && flagStyle === "star") fnorm = "A";
    if (fnorm && flagStyle === "bold") { fnorm = "A"; hc.add("flag_by_typography"); }
    if (fnorm && flagStyle === "none") fnorm = null;
    let action: KeyRow["action"] = "read", reason: string | null = null;
    let unitText: string | null = a.count ? u.unit : spell(u.unit, locale, r, a.slug);
    const spelled = unitText;
    // calculated rows: Friedewald LDL is not valid at triglycerides of 400 mg/dL or more
    if (a.slug === "ldl-cholesterol") {
      hc.add("calculated");
      if (vals[0].triglycerides >= 400) { action = "abstain"; reason = "not_calculated"; value = null; comparator = null; text = r.pick(L.NO_VALUE[locale].notcalc); fnorm = null; ftok = null; endComments.push(L.NOT_CALC_LDL[locale]); hc.add("comment_in_value"); }
    }
    if (["egfr", "transferrin-saturation", "urine-acr"].includes(a.slug)) hc.add("calculated");
    // a word instead of a number
    if (action === "read" && comparator === null) {
      const kind = want.comment && !usedCase.has("comment") && r.chance(0.12) ? "comment" : want.pending && !usedCase.has("pending") && ["vitamin-d-25-oh", "vitamin-b12", "folate-serum", "ferritin", "tsh", "free-t4", "hba1c", "testosterone-total", "thyroglobulin"].includes(a.slug) ? "pending" : want.notdone && !usedCase.has("notdone") && r.chance(0.08) ? "notdone" : null;
      if (kind) {
        usedCase.add(kind); action = "abstain"; reason = kind === "comment" ? "comment_instead_of_value" : kind === "pending" ? "pending" : "not_performed";
        text = r.pick(L.NO_VALUE[locale][kind]); value = null; fnorm = null; ftok = null; hc.add("comment_in_value");
        if (kind === "comment") endComments.push(r.pick(L.COMMENT_TEXT[locale](name)));
      } else if (want.suffix && !usedCase.has("suffix") && r.chance(0.1)) { usedCase.add("suffix"); text = `${text} ${r.pick(L.VALUE_SUFFIX[locale])}`; hc.add("comment_in_value"); }
    }
    if (value === null) unitText = null; // no number, no unit: the word runs on into the unit column
    // missing unit; with an ambiguous name, or a differential name shared by % and count, the reader must abstain
    if (want.missingUnit && unitText && action === "read" && !usedCase.has("mu" + (usedCase.size > 6 ? 1 : 0)) && r.chance(0.12)) {
      usedCase.add("mu" + (usedCase.size > 6 ? 1 : 0)); unitText = null; hc.add("missing_unit");
      if (hc.has("ambiguous_name") || hc.has("pct_abs_same_name")) { action = "abstain"; reason = hc.has("ambiguous_name") ? "ambiguous_name_no_unit" : "pct_abs_same_name_no_unit"; }
    }
    // a footnote on the name: the method changed
    let foot: Line["foot"];
    let footText: string | null = null;
    if (want.footnote && !usedCase.has("foot") && ["tsh", "free-t4", "vitamin-d-25-oh", "ferritin", "hs-crp", "vitamin-b12", "creatinine-serum", "hba1c", "testosterone-total", "alt", "ggt"].includes(a.slug)) {
      usedCase.add("foot"); const mark = MARKS[nextFoot++] ?? "*"; footText = r.pick(L.METHOD_FOOT[locale](mark, fDate(dates[1] ?? back(cur, 2)))); foot = { mark, text: footText }; hc.add("footnote_method_change");
    }
    if (alt) hc.add("dual_unit");
    const k: KeyRow = {
      report_id: id, row_id: rowId, line_id: "", page: null, date: cur, is_current: true, section: a.panel, analyte: name, marker_slug: a.slug, specimen: a.specimen,
      value, value_text: text, comparator, unit: unitText, unit_expected: spelled,
      ref_text: rtext, ref_low: rtext === null ? null : rlo !== null && rlo === 0 && /^(<|bis|Hasta|inf)/.test(rtext) ? null : rlo, ref_high: rtext === null ? null : rhi,
      flag: ftok, flag_norm: fnorm, alt_value: null, alt_unit: null, value_conv: vconv === null ? null : +vconv.toPrecision(10), unit_conv: a.unit, critical: crit,
      action, abstain_reason: reason, footnote: footText, hard_cases: [], bbox: {},
    };
    if (alt && value !== null && action === "read") {
      const altDp = alt.dp, av = comparator ? null : rd(toU(a, alt, v0), altDp);
      if (av !== null) { k.alt_value = av; k.alt_unit = spell(alt.unit, locale, r, a.slug); }
    }
    const keys = [k];
    // the cells
    const cells: Partial<Record<ColKind, Piece[]>> = {};
    cells.name = [{ t: name, k: `${rowId}:name` }, ...(foot ? [{ t: foot.mark, cls: "sup" }] : [])];
    const valPieces: Piece[] = [];
    const boldVal = flagStyle === "bold" && k.flag_norm === "A";
    if (preset.flagAt === "before" && ftok) valPieces.push({ t: ftok + " ", k: `${rowId}:flag` });
    valPieces.push({ t: text, k: `${rowId}:value`, cls: value === null ? "w" : boldVal || (ftok && preset.id.startsWith("us")) ? "b" : undefined });
    if (preset.flagAt === "after" && ftok) valPieces.push({ t: " " + ftok, k: `${rowId}:flag` });
    if (preset.flagAt === "inout") { if (ftok) cells.outr = [...valPieces, { t: " " + ftok, k: `${rowId}:flag` }]; else cells.inr = valPieces; }
    else cells.value = valPieces;
    if (preset.flagAt === "col" && ftok) cells.flag = [{ t: ftok, k: `${rowId}:flag` }];
    if (unitText) cells.unit = [{ t: unitText, k: `${rowId}:unit` }];
    if (rtext) cells.range = [{ t: rtext, k: `${rowId}:range` }];
    if (k.alt_value !== null && preset.dual) { cells.value2 = [{ t: fmt(k.alt_value, alt!.dp, comma), k: `${rowId}:value2` }]; cells.unit2 = [{ t: k.alt_unit!, k: `${rowId}:unit2` }]; }
    // FR: the absolute count on the same line as the percent
    if (b) {
      const bm = rowFor(b, null);
      if (bm) {
        const bk = bm.keys[0];
        cells.value2 = bm.line.cells!.value; cells.unit2 = bm.line.cells!.unit; if (bm.line.cells!.range) cells.range = bm.line.cells!.range;
        bk.hard_cases.push("pct_abs_same_line"); k.hard_cases.push("pct_abs_same_line");
        keys.push(...bm.keys.filter((x) => x.is_current)); // the earlier column shows the percent only
      }
    }
    // earlier results beside the current one
    for (let j = 1; j < dates.length; j++) {
      const pv0 = vals[j][a.slug];
      if (pv0 === undefined || r.chance(0.08)) continue; // not measured that time
      let pu = u, changed = false;
      if (a.slug === unitChangeSlug && !alt) {
        const other: U | undefined = u.unit === a.unit ? (a.slug === "hba1c" ? { unit: "mmol/mol", f: NaN, dp: 0 } : a.si) : { unit: a.unit, f: 1, dp: a.dp };
        if (other) { pu = other; changed = true; }
      }
      let pval: number | null = u.unit === "/mm3" ? rd(toU(a, pu, pv0), a.count === "m" ? -4 : -2) : rd(toU(a, pu, pv0), Math.max(0, pu.dp + (changed ? 0 : extra)));
      let ptext = fmt(pval, u.unit === "/mm3" ? 0 : Math.max(0, pu.dp + (changed ? 0 : extra)), comma, thousands), pcomp: KeyRow["comparator"] = null;
      if (loq !== undefined && pv0 < loq) { pval = rd(toU(a, pu, loq), pu.dp); pcomp = "<"; ptext = `<${fmt(pval, Math.max(0, pu.dp), comma)}`; }
      if (a.slug === "egfr" && pv0 >= 90 && comparator === ">") { pval = 90; pcomp = ">"; ptext = ">90"; }
      const plo = ilo === null ? null : rd(toU(a, pu, ilo), pu.dp), phi = ihi === null ? null : rd(toU(a, pu, ihi), pu.dp);
      let pn: KeyRow["flag_norm"] = pcomp ? null : phi !== null && pval > phi ? "H" : plo !== null && pval < plo ? "L" : null;
      const pconv = u.unit === "/mm3" ? pval / u.f : a.count ? pval : fromU(a, pu, pval);
      const pcrit = !pcomp && isCritical(a.slug, pconv);
      if (pn && pcrit) pn = pn === "H" ? "HH" : "LL";
      let ptok = flagTok(pn, flagStyle, locale);
      if (pn && (flagStyle === "star" || flagStyle === "bold")) pn = "A";
      if (flagStyle === "none") pn = null;
      const pid = `${rowId}p${j}`;
      const pk: KeyRow = {
        ...k, row_id: pid, date: dates[j], is_current: false, value: pval, value_text: ptext, comparator: pcomp, unit: changed ? spell(pu.unit, locale, r, a.slug) : k.unit,
        unit_expected: changed ? spell(pu.unit, locale, r, a.slug) : k.unit_expected, ref_text: null, ref_low: null, ref_high: null, flag: ptok, flag_norm: pn, alt_value: null, alt_unit: null,
        value_conv: +pconv.toPrecision(10), critical: pcrit, action: "read", abstain_reason: null, footnote: null, hard_cases: ["prior_date_column"], bbox: {},
      };
      if (comma) pk.hard_cases.push("decimal_comma");
      if (k.hard_cases.includes("pct_abs_differential") || hc.has("pct_abs_differential")) pk.hard_cases.push("pct_abs_differential");
      if (hc.has("ambiguous_name")) pk.hard_cases.push("ambiguous_name");
      if (pcomp) pk.hard_cases.push("censored_value");
      const pieces: Piece[] = [{ t: ptext, k: `${pid}:value`, cls: flagStyle === "bold" && pn ? "b" : undefined }];
      if (ptok) pieces.push({ t: " " + ptok, k: `${pid}:flag` });
      if (changed) {
        hc.add("unit_change_between_dates"); pk.hard_cases.push("unit_change_between_dates");
        // the earlier unit is printed in the cell, or only in a footnote
        if (r.chance(0.5)) pieces.push({ t: " " + pk.unit, k: `${pid}:unit` });
        else { const mark = MARKS[nextFoot++] ?? "†"; pieces.push({ t: mark, cls: "sup" }); const ft = L.UNIT_FOOT[locale](mark, pk.unit!, fDate(cur)); foot = foot ? { mark: foot.mark, text: foot.text + "\n" + ft } : { mark, text: ft }; pk.footnote = ft; }
      }
      if (hc.has("missing_unit") && !changed) pk.unit = null;
      if (hc.has("missing_unit") && !changed) pk.hard_cases.push("missing_unit");
      cells[j === 1 ? "prior0" : "prior1"] = pieces;
      keys.push(pk);
    }
    k.hard_cases.unshift(...hc);
    if (k.action === "abstain") k.hard_cases.push("abstain");
    k.hard_cases = [...new Set(k.hard_cases)];
    for (const x of keys) x.hard_cases = [...new Set(x.hard_cases)];
    for (const x of hc) tags.add(x);
    const sub: Piece[] | undefined = preset.method ? [{ t: L.METHODS_RO[a.panel] ?? "", cls: "method" }] : undefined;
    return { line: { type: "row", h: sub ? 1.75 : 1, cells, sub, foot, rows: keys.map((x) => x.row_id), panel: a.panel }, keys };
  }
  return finish();

  function finish(): Doc {
    return {
      id, seed, index, preset: preset.id, locale, decimal: comma ? "comma" : "point", units: sys.units === "FR" ? "FR" : si ? "SI" : "conventional",
      person: { sex: person.sex, age: person.age, conditions: person.conditions }, dates,
      header: headerOf(), lines, key, endComments, flagStyle, rangeStyle, tags: [...tags],
    };
  }
  function headerOf(): Doc["header"] {
    const lab = r.pick(L.LABS[locale]);
    const given = r.pick(L.GIVEN[locale][person.sex]);
    const fam = L.surname(locale, r.pick);
    const patient = locale === "US" ? `${fam.toUpperCase()}, ${given.toUpperCase()}` : locale === "DE" ? `${fam}, ${given}` : locale === "ES" ? `${fam} ${L.surname(locale, r.pick)}, ${given}` : `${given} ${fam.toUpperCase()}`;
    // born between age+1 years and age years before the collection, so the printed age is right on that day
    const born = new Date(cur + "T00:00:00Z"); born.setUTCFullYear(born.getUTCFullYear() - person.age); born.setUTCDate(born.getUTCDate() - r.int(1, 360));
    const dob = born.toISOString().slice(0, 10);
    const rep = new Date(cur + "T00:00:00Z"); rep.setUTCDate(rep.getUTCDate() + r.int(0, 3));
    const specs = [...new Set(panels.map((p) => (p === "cbc" || p === "diff" ? "whole blood" : p === "urine" ? "urine" : "serum")))].map((s) => L.SPECIMEN_WORD[locale][s]).join("; ");
    return {
      lab: lab.name, addr: lab.addr, patient, dob: fDate(dob), pid: `SYN-${r.int(100000, 999999)}`, physician: `${locale === "DE" ? "Dr. med." : locale === "FR" ? "Dr" : "Dr."} ${L.surname(locale, r.pick)}`,
      collected: `${fDate(cur)} ${String(r.int(7, 10)).padStart(2, "0")}:${String(r.int(0, 59)).padStart(2, "0")}`, received: fDate(cur), reported: fDate(rep.toISOString().slice(0, 10)), specimen: specs, fasting: r.chance(0.6),
    };
  }
}
