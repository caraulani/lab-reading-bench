/* "The model reads, code converts" (exploratory, 26 Nov 2026; not preregistered).

   Wraps another reader that returns values as printed (by default readers/openrouter.mts with PROMPT=printed) and converts
   every row to the benchmark's conventional unit in code, with @lifefrom/units 1.0.0 (npm; its factors are sourced and
   analyte-specific, and were not taken from generate.mts). Value and range are converted together. A row whose unit
   @lifefrom/units does not know, or cannot convert for that analyte, is passed on unchanged, so it is scored as it came
   back (usually `unit` or `unconverted`, never silently changed).

     PROMPT=printed OPENROUTER_API_KEY=… MODEL=anthropic/claude-haiku-5.5 npx tsx run.mts --reader readers/convert.mts --n 60 --variants 5 --seed 5
     INNER=readers/printed-oracle.mts npx tsx run.mts --reader readers/convert.mts …   (checks the converter on the answer key)

   UNITS_FIX=1 adds one correction found by running this on the answer key: @lifefrom/units 1.0.0 reads "mil/mm3" as
   million per mm³, but on a Spanish report a white-cell or platelet count in "mil/mm3" is miles (thousands) per mm³,
   the same number as K/uL. With UNITS_FIX=1 those rows are taken as already conventional (counted as "fixed").

   Counts of rows converted, already conventional, and left unchanged are printed when the run ends. */
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { analytes, convert, sameUnit } from "@lifefrom/units";
import { ANALYTES, type Report } from "../generate.mts";
import type { Parsed, ReadRow } from "../run.mts";

const INNER = process.env.INNER ?? "readers/openrouter.mts";
const inner = (await import(pathToFileURL(resolve(INNER)).href)).default as (r: Report) => Parsed | Promise<Parsed>;
const TARGET = Object.fromEntries(ANALYTES.map((a) => [a.slug, a.unit]));
// the benchmark's slug -> @lifefrom/units analyte id (its marker_slugs)
const ANALYTE: Record<string, string> = {};
for (const a of analytes()) for (const s of a.marker_slugs) ANALYTE[s] ??= a.id;

const FIX = process.env.UNITS_FIX === "1";
const n = { rows: 0, converted: 0, already: 0, unchanged: 0, fixed: 0 };
const why = new Map<string, number>();
process.on("exit", () => console.error(`[convert] ${n.rows} rows: converted ${n.converted}, already in the conventional unit ${n.already}, left unchanged ${n.unchanged}${FIX ? `, fixed (mil/mm3) ${n.fixed}` : ""}` + (why.size ? ` (${[...why].sort((a, b) => b[1] - a[1]).slice(0, 8).map(([k, v]) => `${v}× ${k}`).join("; ")})` : "")));

function toConventional(row: ReadRow): ReadRow {
  n.rows++;
  const to = TARGET[row.slug], analyte = ANALYTE[row.slug] ?? null;
  if (!to) { n.unchanged++; return row; }
  if (FIX && (row.slug === "wbc" || row.slug === "platelet-count") && /^mil\s*\/\s*mm(3|³)$/i.test(row.unit.trim())) { n.fixed++; return { ...row, unit: to }; }
  try {
    if (row.unit && sameUnit(row.unit, to, analyte)) { n.already++; return { ...row, unit: to }; }
    const c = (x: number | null) => (x === null ? null : convert(x, row.unit, to, analyte));
    const out = { ...row, value: c(row.value)!, low: c(row.low), high: c(row.high), unit: to };
    n.converted++;
    return out;
  } catch (e) {
    n.unchanged++;
    const k = `${row.slug} "${row.unit}": ${(e as { code?: string }).code ?? (e as Error).message.slice(0, 40)}`;
    why.set(k, (why.get(k) ?? 0) + 1);
    return row;
  }
}

export default async function read(r: Report): Promise<Parsed> {
  const p = await inner(r);
  return { ...p, rows: p.rows.map((x) => (x.text !== undefined ? x : toConventional(x))) };
}
