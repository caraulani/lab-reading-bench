/* lab-report-corpus as input to the benchmark's own scorer (run.mts --corpus) (25 Nov 2026).

   Turns a built corpus split into the benchmark's Report objects, so run.mts scores it exactly as it scores generated
   reports. Only what that scorer understands is passed on: each report's current results that a reader should read
   (action "read"), with the printed value and the value in the conventional unit. Earlier-date columns and the lines a
   reader must abstain on are scored by corpus/score.mts, which reads the full answer key.

   input: "text"        the page transcripts (what a perfect OCR returns), as printed lines
          "pdf"         the born-digital PDF (Report.files = [pdf])
          "scan_clean" | "scan_noisy" | "photo"   the page pictures in that condition (Report.files, one per page) */
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import type { Report, TruthRow } from "../generate.mts";

export type CorpusReport = Report & { files?: string[]; condition?: string; key?: AnswerRow[] };
export type AnswerRow = {
  report_id: string; row_id: string; line_id: string; page: number | null; date: string; is_current: boolean; section: string; analyte: string; marker_slug: string;
  specimen: string; value: number | null; value_text: string; comparator: string | null; unit: string | null; unit_expected: string; ref_text: string | null;
  ref_low: number | null; ref_high: number | null; flag: string | null; flag_norm: string | null; alt_value: number | null; alt_unit: string | null;
  value_conv: number | null; unit_conv: string; critical: boolean; action: "read" | "abstain"; abstain_reason: string | null; footnote: string | null; hard_cases: string[];
};
const jsonl = <T,>(p: string): T[] => (existsSync(p) ? readFileSync(p, "utf8").split("\n").filter(Boolean).map((l) => JSON.parse(l) as T) : []);

export function answersOf(dir: string, split: string): AnswerRow[] {
  return split === "test" ? jsonl<AnswerRow>(join(dir, "test_answers", "test.jsonl")) : jsonl<AnswerRow>(join(dir, "answers", `${split}.jsonl`));
}

export function loadCorpus(dir: string, split: string, input: string): CorpusReport[] {
  const docs = jsonl<{ report_id: string; locale: string; layout: string; units: string; decimal: string; collection_dates: string[]; n_pages: number; pdf: string; heldout_layout: boolean }>(join(dir, "documents", `${split}.jsonl`));
  const pages = jsonl<{ file_name: string; report_id: string; page: number; condition: string; transcript: string }>(join(dir, "pages", `${split}.jsonl`));
  if (split === "test") {
    const tr = new Map(jsonl<{ file_name: string; transcript: string }>(join(dir, "test_answers", "transcripts.jsonl")).map((t) => [t.file_name, t.transcript]));
    for (const p of pages) p.transcript = tr.get(p.file_name) ?? p.transcript;
  }
  const keys = new Map<string, AnswerRow[]>();
  for (const k of answersOf(dir, split)) (keys.get(k.report_id) ?? keys.set(k.report_id, []).get(k.report_id)!).push(k);
  const out: CorpusReport[] = [];
  for (const d of docs) {
    const mine = pages.filter((p) => p.report_id === d.report_id).sort((a, b) => a.page - b.page);
    let files: string[] | undefined;
    if (input === "pdf") files = [join(dir, d.pdf)];
    else if (input !== "text") { files = mine.filter((p) => p.condition === input).map((p) => join(dir, "data", split, p.file_name)); if (!files.length) continue; }
    const seen = new Set<number>();
    const lines = mine.filter((p) => (seen.has(p.page) ? false : (seen.add(p.page), true))).flatMap((p) => p.transcript.split("\n"));
    const key = keys.get(d.report_id) ?? [];
    out.push({
      id: d.report_id, kind: "lines", lines, files, condition: input, key, takenISO: d.collection_dates[0],
      truth: key.filter((k) => k.is_current && k.action === "read" && k.value !== null).map(toTruth),
      tags: { locale: d.locale, kind: input, variant: d.layout, units: d.units, decimal: d.decimal, order: d.layout, sep: "-", layout: d.layout, heldout: String(d.heldout_layout) },
    });
  }
  return out;
}

function toTruth(k: AnswerRow): TruthRow {
  const v = k.value as number, c = k.value_conv as number;
  const conv = (x: number | null) => (x === null ? null : k.marker_slug === "hba1c" && k.unit_expected === "mmol/mol" ? x * 0.09148 + 2.152 : v !== 0 ? (x * c) / v : x);
  const dir = k.flag_norm === "H" || k.flag_norm === "HH" ? "H" : k.flag_norm === "L" || k.flag_norm === "LL" ? "L" : k.flag_norm === "A" ? (k.ref_high !== null && v > k.ref_high ? "H" : "L") : null;
  return {
    slug: k.marker_slug, name: k.analyte, line: `${k.line_id} ${k.analyte} ${k.value_text} ${k.unit ?? ""}`,
    printed: { value: v, text: k.value_text, unit: k.unit ?? "", low: k.ref_low, high: k.ref_high },
    expected: { value: c, unit: Math.abs(v - c) > 1e-9 ? k.unit_conv : k.unit ?? k.unit_conv, low: conv(k.ref_low), high: conv(k.ref_high) },
    converted: Math.abs(v - c) > 1e-9, flag: dir, flagPrinted: k.flag_norm === "A" ? "mark" : k.flag ? "direction" : null,
    critical: k.critical, status: k.flag_norm ?? "in", trueValue: c,
  };
}
