/* lab-report-corpus: the page layouts (25 Nov 2026). Each preset is one invented lab's report design: its font, column
   order and widths (CSS px on an A4 page 794 px wide), where the flag goes, how ranges and sections look, how many earlier
   results it prints beside the current one, and whether the table header repeats on a new page. None copies a real
   laboratory's report; the conventions (column order, flags, units, decimal commas) are the ones each country uses. */
import type { Loc } from "./catalog.mts";
import type { ColKind } from "./locale.mts";

export type FlagStyle = "HL" | "words" | "arrows" | "plusminus" | "star" | "bold" | "none";
export type RangeStyle = "tight" | "spaced" | "paren" | "bracket" | "dash" | "a";
export type Preset = {
  id: string; locale: Loc; font: string; px: number; rowH: number;
  cols: { k: ColKind; w: number; align?: "l" | "r" | "c" }[];
  flagAt: "col" | "after" | "before" | "inout"; flags: FlagStyle[]; ranges: RangeStyle[];
  prior: 0 | 1 | 2; repeatHeader: boolean; grid: "none" | "rules" | "boxes" | "zebra";
  section: "caps" | "underline" | "shaded" | "plain"; method?: boolean; dual?: boolean; units: "conv" | "SI" | "mixed" | "FR";
  header: "boxed" | "plain" | "banner"; heldout?: boolean;
};

const c = (k: ColKind, w: number, align: "l" | "r" | "c" = "l") => ({ k, w, align });
export const PRESETS: Preset[] = [
  { id: "us-a", locale: "US", font: "Arial", px: 12, rowH: 18, cols: [c("name", 250), c("value", 80, "r"), c("flag", 44, "c"), c("unit", 112), c("range", 200)], flagAt: "col", flags: ["HL"], ranges: ["tight", "spaced"], prior: 0, repeatHeader: true, grid: "none", section: "caps", units: "conv", header: "boxed" },
  { id: "us-b", locale: "US", font: "Helvetica", px: 11.5, rowH: 18, cols: [c("name", 236), c("inr", 92, "r"), c("outr", 108, "r"), c("unit", 104), c("range", 160)], flagAt: "inout", flags: ["HL"], ranges: ["tight", "spaced"], prior: 0, repeatHeader: false, grid: "rules", section: "shaded", units: "conv", header: "banner" },
  { id: "us-cum", locale: "US", font: "Arial", px: 11.5, rowH: 18, cols: [c("name", 206), c("value", 76, "r"), c("flag", 34, "c"), c("prior0", 92, "r"), c("prior1", 92, "r"), c("unit", 92), c("range", 112)], flagAt: "col", flags: ["HL"], ranges: ["tight"], prior: 2, repeatHeader: true, grid: "zebra", section: "caps", units: "conv", header: "boxed" },
  { id: "uk-a", locale: "UK", font: "Verdana", px: 11, rowH: 18, cols: [c("name", 232), c("value", 82, "r"), c("unit", 100), c("range", 150), c("flag", 76)], flagAt: "col", flags: ["words", "HL", "star", "none"], ranges: ["spaced", "paren", "dash"], prior: 0, repeatHeader: true, grid: "zebra", section: "underline", units: "SI", header: "plain" },
  { id: "uk-cum", locale: "UK", font: "Verdana", px: 10.5, rowH: 17, cols: [c("name", 196), c("prior1", 86, "r"), c("prior0", 86, "r"), c("value", 92, "r"), c("unit", 88), c("range", 132)], flagAt: "after", flags: ["HL", "star"], ranges: ["spaced", "paren"], prior: 2, repeatHeader: false, grid: "rules", section: "underline", units: "SI", header: "plain" },
  { id: "de-a", locale: "DE", font: "Arial", px: 12, rowH: 18, cols: [c("name", 244), c("value", 86, "r"), c("flag", 32, "c"), c("unit", 92), c("range", 150)], flagAt: "col", flags: ["plusminus", "arrows", "HL", "star"], ranges: ["spaced", "tight", "dash"], prior: 0, repeatHeader: true, grid: "rules", section: "plain", units: "mixed", header: "plain" },
  { id: "de-cum", locale: "DE", font: "Arial", px: 11.5, rowH: 18, cols: [c("name", 222), c("value", 80, "r"), c("flag", 30, "c"), c("unit", 82), c("range", 122), c("prior0", 116, "r")], flagAt: "col", flags: ["plusminus", "arrows", "HL"], ranges: ["spaced", "tight"], prior: 1, repeatHeader: false, grid: "none", section: "underline", units: "mixed", header: "boxed" },
  { id: "de-mono", locale: "DE", font: "Courier New", px: 12, rowH: 17, cols: [c("name", 232), c("value", 84, "r"), c("flag", 28, "c"), c("unit", 86), c("range", 132), c("prior0", 120, "r")], flagAt: "col", flags: ["plusminus", "star", "HL"], ranges: ["tight", "spaced"], prior: 1, repeatHeader: true, grid: "none", section: "plain", units: "mixed", header: "plain", heldout: true },
  { id: "es-a", locale: "ES", font: "Arial", px: 12, rowH: 18, cols: [c("name", 262), c("value", 92, "r"), c("unit", 100), c("range", 190)], flagAt: "before", flags: ["star", "arrows", "HL", "none"], ranges: ["spaced", "paren", "tight"], prior: 0, repeatHeader: true, grid: "none", section: "caps", units: "conv", header: "banner" },
  { id: "es-cum", locale: "ES", font: "Tahoma", px: 11.5, rowH: 18, cols: [c("name", 236), c("value", 84, "r"), c("unit", 92), c("range", 142), c("prior0", 130, "r")], flagAt: "after", flags: ["star", "HL"], ranges: ["spaced", "bracket"], prior: 1, repeatHeader: true, grid: "zebra", section: "shaded", units: "conv", header: "boxed" },
  { id: "ro-a", locale: "RO", font: "Tahoma", px: 12, rowH: 18, cols: [c("name", 272), c("value", 86, "r"), c("unit", 92), c("range", 200)], flagAt: "after", flags: ["arrows", "HL", "star", "bold"], ranges: ["bracket", "spaced", "paren"], prior: 0, repeatHeader: true, grid: "rules", section: "caps", method: true, units: "conv", header: "boxed" },
  { id: "ro-b", locale: "RO", font: "Times New Roman", px: 12.5, rowH: 19, cols: [c("name", 250), c("value", 90, "r"), c("flag", 36, "c"), c("unit", 92), c("range", 180)], flagAt: "col", flags: ["bold", "HL", "star"], ranges: ["spaced", "bracket"], prior: 0, repeatHeader: false, grid: "boxes", section: "shaded", units: "conv", header: "banner" },
  { id: "fr-a", locale: "FR", font: "Times New Roman", px: 12, rowH: 18, cols: [c("name", 212), c("value", 70, "r"), c("unit", 72), c("value2", 62, "r"), c("unit2", 66), c("range", 116), c("prior0", 104, "r")], flagAt: "after", flags: ["star", "HL", "arrows", "none"], ranges: ["a", "paren", "tight"], prior: 1, repeatHeader: true, grid: "none", section: "underline", dual: true, units: "FR", header: "plain" },
  { id: "fr-b", locale: "FR", font: "Arial", px: 11.5, rowH: 18, cols: [c("name", 230), c("value", 78, "r"), c("unit", 74), c("value2", 70, "r"), c("unit2", 66), c("range", 146)], flagAt: "after", flags: ["star", "HL", "none"], ranges: ["a", "paren"], prior: 0, repeatHeader: false, grid: "rules", section: "shaded", dual: true, units: "FR", header: "boxed" },
];
export const BY_PRESET = Object.fromEntries(PRESETS.map((p) => [p.id, p])) as Record<string, Preset>;
export const PAGE = { W: 794, H: 1123, mx: 44, top: 34, bottom: 30, head1: 176, headN: 50, foot: 34, foot1: 14 };
