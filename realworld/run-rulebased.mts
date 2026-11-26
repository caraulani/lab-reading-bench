/* Runs the LifeFrom rule-based reader (readers/lifefrom-local.mts, read-only use of a LifeFrom checkout) on the
   real-format sample reports, and keeps what it read in results/raw/.

     LIFEFROM_DIR=/path/to/LifeFrom npx tsx realworld/run-rulebased.mts [pdf|image]

   pdf:   the report's PDF (the reader uses its text layer, as the app does for a PDF upload)
   image: the 150-dpi page renders (the reader runs its OCR, tesseract.js English, as the app does for a photo) */
import { copyFileSync, mkdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import type { Report } from "../generate.mts";

const HERE = import.meta.dirname;
const input = process.argv[2] ?? "pdf";
const read = (await import("../readers/lifefrom-local.mts")).default as (r: Report & { files?: string[] }) => Promise<{ rows: unknown[]; takenISO: string | null }>;
const reports = JSON.parse(readFileSync(join(HERE, "reports.json"), "utf8")) as { id: string; source: string; pages: number[] }[];
const out: Record<string, unknown> = {};
for (const r of reports) {
  const dir = join(HERE, "sources", r.source);
  const sub = join(dir, `${r.id}.pdf`);
  // page pictures get unique file names: the adapter caches OCR words by file name
  const files = input === "pdf" ? [existsSync(sub) ? sub : join(dir, "report.pdf")] : r.pages.map((p) => {
    const f = join(dir, "ocr-in", `${r.source}-p${p}.png`);
    if (!existsSync(f)) { mkdirSync(join(dir, "ocr-in"), { recursive: true }); copyFileSync(join(dir, "pages", `p${p}.png`), f); }
    return f;
  });
  const t0 = performance.now();
  try { out[r.id] = await read({ id: r.id, kind: "lines", lines: [], files, truth: [], tags: {} } as never); }
  catch (e) { out[r.id] = { error: String(e).slice(0, 200) }; }
  console.error(`${r.id}: ${((performance.now() - t0) / 1000).toFixed(1)} s`);
}
mkdirSync(join(HERE, "results", "raw"), { recursive: true });
writeFileSync(join(HERE, "results", "raw", `rulebased-${input}.json`), JSON.stringify(out, null, 1) + "\n");
process.exit(0);
