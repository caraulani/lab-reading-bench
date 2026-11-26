/* A perfect reader of what is printed: every result exactly as the report prints it (value, unit, range, the lab's flag),
   with no conversion. Used to check readers/convert.mts and the as-printed scoring against the answer key; it calls no
   model. (Exploratory tooling, 26 Nov 2026.) */
import type { Report } from "../generate.mts";
import type { Parsed } from "../run.mts";

export default function read(r: Report): Parsed {
  return {
    takenISO: r.takenISO,
    rows: r.truth.map((t) => ({ slug: t.slug, printed: t.name, value: t.printed.value, unit: t.printed.unit, low: t.printed.low, high: t.printed.high, ...(t.flagPrinted === "direction" && t.flag ? { flag: t.flag } : {}) })),
  };
}
