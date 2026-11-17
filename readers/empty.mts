import type { Report } from "../generate.mts";
import type { Parsed } from "../run.mts";

/** reads nothing: every row scores as missed. The smallest valid reader. */
export default function read(_r: Report): Parsed {
  return { rows: [], takenISO: null };
}
