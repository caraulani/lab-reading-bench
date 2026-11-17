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
