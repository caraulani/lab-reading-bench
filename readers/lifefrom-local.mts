/* The LifeFrom rule-based reader, run from a local checkout of the LifeFrom app (read-only), on corpus reports (25 Nov 2026).

     LIFEFROM_DIR=/path/to/LifeFrom npx tsx run.mts --reader readers/lifefrom-local.mts --corpus corpus-out/full --split test --input pdf

   The reader's code is not part of this repository; this adapter imports lib/read/parse.ts, files.ts and lines.ts from
   LIFEFROM_DIR and changes nothing there. It reads:
     - printed lines (input "text", or any generated report): parseLines, as the app does for a text file;
     - a PDF: readFile with Node's build of pdf.js for the text layer (the app uses the browser build of the same version);
     - page pictures: readFile with tesseract.js (English, as in the app), each page enlarged to 2400 px wide first as
       the app does; the rows of a report's pages are merged, first page first.
   Recognised words are cached in <corpus>/_work/ocr/, so a second run reads no picture twice. OCR_WORKERS sets the number
   of recognition workers (default 6). */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { basename, dirname, join } from "node:path";
import { pathToFileURL } from "node:url";
import type { Report } from "../generate.mts";
import type { Parsed, ReadRow } from "../run.mts";

const DIR = process.env.LIFEFROM_DIR;
if (!DIR) throw new Error("set LIFEFROM_DIR to a LifeFrom checkout");
const imp = (p: string) => import(pathToFileURL(join(DIR, p)).href);
const parse = await imp("lib/read/parse.ts");
const files = await imp("lib/read/files.ts");
const { linesOf } = await imp("lib/read/lines.ts");

type Piece = { str: string; transform: number[]; width?: number };
const pdfjs = await import("pdfjs-dist/legacy/build/pdf.mjs");
async function pdfLines(buf: ArrayBuffer) {
  try { return await pdfLines0(buf); } catch (e) { if (process.env.DEBUG_READER) console.error(e); throw e; }
}
async function pdfLines0(buf: ArrayBuffer) {
  const task = pdfjs.getDocument({ data: new Uint8Array(buf), disableFontFace: true, useSystemFonts: false, isEvalSupported: false });
  const doc = await task.promise;
  const lines: string[] = [];
  for (let i = 1; i <= doc.numPages; i++) lines.push(...linesOf((await (await doc.getPage(i)).getTextContent()).items as Piece[]));
  const pages = doc.numPages;
  await task.destroy();
  return { lines, pages };
}

/* OCR: a small pool of tesseract.js workers, and a cache of recognised words per picture */
type Word = { text: string; bbox: { x0: number; y0: number; x1: number; y1: number }; confidence: number };
const N = Number(process.env.OCR_WORKERS ?? "6");
let pool: Promise<{ recognize: (b: Buffer) => Promise<{ data: { words: Word[]; confidence: number } }> }[]> | null = null;
const free: number[] = [];
const waiting: ((i: number) => void)[] = [];
async function workers() {
  pool ??= (async () => {
    const { createWorker } = await import("tesseract.js");
    const ws = await Promise.all(Array.from({ length: N }, () => createWorker("eng")));
    ws.forEach((_, i) => free.push(i));
    process.on("exit", () => {});
    return ws as never;
  })();
  return pool;
}
export async function ocrWords(path: string): Promise<{ words: Word[]; confidence: number; scale: number }> {
  const cacheDir = join(dirname(dirname(dirname(path))), "_work", "ocr");
  const cache = join(cacheDir, basename(path) + ".json");
  if (existsSync(cache)) return JSON.parse(readFileSync(cache, "utf8"));
  const ws = await workers();
  const sharp = (await import("sharp")).default;
  const img = sharp(readFileSync(path));
  const meta = await img.metadata();
  const k = Math.min(3, 2400 / (meta.width ?? 2400));
  const buf = k > 1.1 ? await img.resize(Math.round((meta.width ?? 0) * k)).png().toBuffer() : readFileSync(path);
  const i = free.length ? free.pop()! : await new Promise<number>((res) => waiting.push(res));
  try {
    const { data } = await ws[i].recognize(buf);
    const out = { words: data.words.map((w) => ({ text: w.text, bbox: w.bbox, confidence: w.confidence })), confidence: data.confidence, scale: k > 1.1 ? k : 1 };
    mkdirSync(cacheDir, { recursive: true });
    writeFileSync(cache, JSON.stringify(out));
    return out;
  } finally { const nx = waiting.shift(); if (nx) nx(i); else free.push(i); }
}
/* the app's photo reader, on cached words: words into lines scaled so a word is about 9 points high */
async function photoLines(f: File & { path?: string }) {
  const { words, confidence } = await ocrWords(f.path!);
  const ws = words.filter((w) => w.text.trim());
  const hs = ws.map((w) => w.bbox.y1 - w.bbox.y0).sort((a, b) => a - b);
  const k = 9 / Math.max(1, hs[hs.length >> 1] ?? 10);
  const pieces: Piece[] = ws.map((w) => ({ str: w.text, transform: [1, 0, 0, 1, w.bbox.x0 * k, -((w.bbox.y0 + w.bbox.y1) / 2) * k], width: (w.bbox.x1 - w.bbox.x0) * k }));
  return { lines: linesOf(pieces), confidence };
}

const rowsOf = (p: { rows: ReadRow[] } | undefined) => (p?.rows ?? []) as ReadRow[];
export default async function read(r: Report & { files?: string[] }): Promise<Parsed> {
  if (!r.files) {
    if (r.kind === "lines") { const p = parse.parseLines(r.lines!); return { rows: rowsOf(p), takenISO: p.takenISO }; }
    if (r.kind === "csv") { const p = parse.parseTable(r.text!); return { rows: rowsOf(p), takenISO: p.takenISO }; }
    if (r.kind === "fhir") { const p = parse.parseFhir(r.json); return { rows: rowsOf(p), takenISO: p.takenISO }; }
    const p = parse.parseHl7(r.text!); return { rows: rowsOf(p), takenISO: p.takenISO };
  }
  const rows: ReadRow[] = [];
  let takenISO: string | null = null;
  for (const path of r.files) {
    const f = new File([readFileSync(path)], basename(path), { type: path.endsWith(".pdf") ? "application/pdf" : path.endsWith(".png") ? "image/png" : "image/jpeg" }) as File & { path?: string };
    f.path = path;
    const got = await files.readFile(f, pdfLines, photoLines);
    if (process.env.DEBUG_READER) console.error(path, got.kind, got.note);
    for (const row of rowsOf(got.parsed)) if (!rows.some((x) => x.slug === row.slug)) rows.push(row);
    takenISO ??= got.parsed?.takenISO ?? null;
  }
  return { rows, takenISO };
}
