/* Reads a corpus report from its own answer key: every current result exactly as printed, nothing where the key says to
   abstain. A check that the scorers and the key agree (it must score 100%); not a reader. */
import type { CorpusReport } from "../corpus/load.mts";
import type { Parsed, ReadRow } from "../run.mts";

export default function read(r: CorpusReport): Parsed {
  const rows = (r.key ?? []).filter((k) => k.action === "read" && k.value !== null)
    .map((k) => ({ slug: k.marker_slug, printed: k.analyte, value: k.value_conv!, unit: k.unit_conv, low: null, high: null, comparator: k.comparator, date: k.date } as ReadRow));
  return { rows, takenISO: r.takenISO };
}
