/* lab-report-corpus, step 1 of 3: compose every report, lay it out, and print it (25 Nov 2026).

     npx tsx corpus/build.mts --n 5000 --seed 1 --out corpus-out/full [--workers 8]

   For each report: the answer key (compose.mts), pages (html.mts), then in Chromium (Playwright): the PDF, a 200 dpi
   raster of every page (the input to degrade.py), and the box of every printed piece the key points at, measured from
   the laid-out page. Writes <out>/_work/docs/<id>.json, <out>/_work/raw/<id>_p<n>.png, <out>/pdf/<split>/<id>.pdf and
   <out>/_work/jobs.jsonl (what degrade.py should make). Reports are rendered several at a time. */
import { mkdirSync, writeFileSync, readFileSync, existsSync, rmSync } from "node:fs";
import { join, resolve } from "node:path";
import { makeDoc, splitOf, SCHEMA_VERSION, type Doc } from "./compose.mts";
import { paginate, html, transcript } from "./html.mts";
import { PAGE } from "./presets.mts";

const arg = (k: string, d?: string) => { const i = process.argv.indexOf(`--${k}`); return i < 0 ? d : process.argv[i + 1]; };
const N = Number(arg("n", "50")), SEED = Number(arg("seed", "1")), OUT = resolve(arg("out", "corpus-out/sample")!), WORKERS = Number(arg("workers", "8"));
const DPI = 200, SCALE = DPI / 96;
const WORK = join(OUT, "_work");
for (const d of ["docs", "raw"]) mkdirSync(join(WORK, d), { recursive: true });
for (const sp of ["train", "validation", "test"]) for (const d of ["data", "pdf"]) mkdirSync(join(OUT, d, sp), { recursive: true });

/* which picture conditions each report gets: train and validation one each (drawn per report), test all three */
const COND = ["scan_clean", "scan_noisy", "photo"] as const;
const hash = (s: string) => [...s].reduce((h, c) => Math.imul(h ^ c.charCodeAt(0), 16777619) >>> 0, 2166136261);
function conditionsOf(id: string): string[] {
  if (splitOf(id) === "test") return [...COND];
  const h = hash(id + "|cond") % 100;
  return [h < 30 ? "scan_clean" : h < 65 ? "scan_noisy" : "photo"];
}

/* Chromium stamps the time into a PDF; a fixed stamp of the same length keeps every byte offset and makes rebuilds equal */
function fixPdfDates(buf: Buffer): Buffer {
  const s = buf.toString("latin1").replace(/\/(CreationDate|ModDate) \(D:[^)]*\)/g, (m, k) => { const inner = m.slice(m.indexOf("(") + 1, -1); const fixed = "D:20261125000000+00'00'".padEnd(inner.length, " ").slice(0, inner.length); return `/${k} (${fixed})`; });
  return Buffer.from(s, "latin1");
}

const pw = (await import("playwright")).default;
const t0 = performance.now();
const browser = await pw.chromium.launch();
const ids = Array.from({ length: N }, (_, i) => i);
const jobs: string[] = [];
const warnings: string[] = [];
let next = 0, done = 0;
async function worker() {
  const ctx = await browser.newContext({ viewport: { width: PAGE.W, height: PAGE.H }, deviceScaleFactor: SCALE });
  const page = await ctx.newPage();
  while (next < ids.length) {
    const i = ids[next++];
    const doc: Doc = makeDoc(SEED, i);
    const pages = paginate(doc);
    await page.setContent(html(doc, pages), { waitUntil: "load" });
    await page.evaluate(() => document.fonts.ready);
    // the box of every keyed piece, as a fraction of its page
    const boxes = await page.evaluate(({ W, H }) => {
      const out: Record<string, { p: number; b: [number, number, number, number] }> = {};
      const over: string[] = [];
      document.querySelectorAll<HTMLElement>(".page").forEach((pg) => {
        const pr = pg.getBoundingClientRect(), n = Number(pg.dataset.page);
        pg.querySelectorAll<HTMLElement>("[data-k]").forEach((e) => {
          const r = e.getBoundingClientRect();
          const cell = e.closest(".c") as HTMLElement | null;
          if (cell && !cell.classList.contains("ov") && !cell.classList.contains("vis")) { const cr = cell.getBoundingClientRect(); if (r.right > cr.right + 0.5 || r.left < cr.left - 0.5) over.push(e.dataset.k!); }
          const b: [number, number, number, number] = [(r.left - pr.left) / W, (r.top - pr.top) / H, (r.right - pr.left) / W, (r.bottom - pr.top) / H];
          const k = e.dataset.k!, o = out[k];
          out[k] = o ? { p: n, b: [Math.min(o.b[0], b[0]), Math.min(o.b[1], b[1]), Math.max(o.b[2], b[2]), Math.max(o.b[3], b[3])] } : { p: n, b };
        });
      });
      return { out, over };
    }, { W: 794, H: 1123 });
    for (const k of boxes.over) warnings.push(`${doc.id} clipped ${k}`);
    const r4 = (x: number) => Math.round(x * 1e5) / 1e5;
    for (const k of doc.key) {
      const base = k.row_id.replace(/p\d$/, "");
      for (const f of ["name", "value", "unit", "range", "flag", "value2", "unit2"]) {
        const b = boxes.out[`${k.row_id}:${f}`] ?? (f === "name" || (f === "range" && !k.is_current) ? undefined : undefined) ?? (f === "name" ? boxes.out[`${base}:name`] : undefined);
        if (b) k.bbox[f] = b.b.map(r4) as [number, number, number, number];
      }
      const own = Object.values(k.bbox);
      if (own.length) k.bbox.line = [Math.min(...own.map((b) => b[0])), Math.min(...own.map((b) => b[1])), Math.max(...own.map((b) => b[2])), Math.max(...own.map((b) => b[3]))].map(r4) as [number, number, number, number];
    }
    const pdf = await page.pdf({ width: `${PAGE.W}px`, height: `${PAGE.H}px`, printBackground: true, preferCSSPageSize: true });
    writeFileSync(join(OUT, "pdf", splitOf(doc.id), `${doc.id}.pdf`), fixPdfDates(pdf));
    for (const pg of pages) await page.screenshot({ path: join(WORK, "raw", `${doc.id}_p${pg.n}.png`), clip: { x: 0, y: (pg.n - 1) * PAGE.H, width: PAGE.W, height: PAGE.H }, fullPage: true });
    const split = splitOf(doc.id);
    const conds = conditionsOf(doc.id);
    writeFileSync(join(WORK, "docs", `${doc.id}.json`), JSON.stringify({ schema: SCHEMA_VERSION, split, pages: pages.length, conditions: conds, transcript: transcript(doc, pages), doc }) + "\n");
    for (const pg of pages) for (const c of conds) jobs.push(JSON.stringify({ id: doc.id, page: pg.n, condition: c, raw: join(WORK, "raw", `${doc.id}_p${pg.n}.png`), split }));
    if (++done % 100 === 0) console.error(`  ${done}/${N} rendered, ${((performance.now() - t0) / 1000).toFixed(0)} s`);
  }
  await ctx.close();
}
await Promise.all(Array.from({ length: WORKERS }, worker));
await browser.close();
jobs.sort();
writeFileSync(join(WORK, "jobs.jsonl"), jobs.join("\n") + "\n");
writeFileSync(join(WORK, "render-warnings.txt"), warnings.join("\n") + (warnings.length ? "\n" : ""));
const secs = (performance.now() - t0) / 1000;
writeFileSync(join(WORK, "timing-render.json"), JSON.stringify({ reports: N, seed: SEED, workers: WORKERS, seconds: +secs.toFixed(1) }) + "\n");
console.log(`${N} reports rendered in ${secs.toFixed(1)} s with ${WORKERS} workers (${warnings.length} clipped pieces); ${jobs.length} picture jobs`);
