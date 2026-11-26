# Readers

A reader is a module whose default export takes one generated report and returns what it read:

```ts
import type { Report } from "../generate.mts";
import type { Parsed } from "../run.mts";

export default async function read(r: Report): Promise<Parsed> {
  // r.kind is "lines" (r.lines: string[]), "csv" (r.text: string) or "fhir" (r.json: a FHIR Bundle)
  // return { rows: [{ slug, printed, value, unit, low, high, flag? }], takenISO: "YYYY-MM-DD" | null }
  return { rows: [], takenISO: null };
}
```

- `slug` is the marker's id in `generate.mts` (`ANALYTES[].slug`, e.g. `glucose-fasting`, `hba1c`, `ldl-cholesterol`).
- Values come back in the conventional units in `ANALYTES[].unit` (mg/dL, g/dL, %, …). A reader may also return the value
  as printed, in the printed unit, when the report printed it in an SI unit; that row is scored `unconverted`, not `wrong`.
- `flag` is the lab's own flag as read (`H` or `L`), not the reader's own judgement.

`empty.mts` is the smallest valid reader (it reads nothing, so it scores every row as missed). It shows the harness running.
The LifeFrom reader measured in `results/` is not in this repository.

## Added after the preregistered test (26 Nov 2026, exploratory)
- `openrouter.mts` now writes `<report id>.meta.json` beside each new reply (OpenRouter response id, the model that
  answered, the provider, usage and cost). Earlier replies have no meta file and are read as before. `PROMPT=printed`
  asks for every value exactly as printed (no conversion); `CACHE_TAG=…` gives an independent repeat its own cache
  directory; corpus page pictures (`Report.files`) are sent as images with `INPUT=image`.
- `convert.mts` wraps a reader that returns values as printed and converts them in code with `@lifefrom/units` 1.0.0
  ("the model reads, code converts").
- `printed-oracle.mts` returns exactly what is printed; it checks `convert.mts` and the as-printed scoring.
- `parse-reply.mts` is the reply parser `openrouter.mts` has always used, split out so scripts can share it.

The runs that use them are in `exploratory/run-all.sh`.
