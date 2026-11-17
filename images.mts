/* Printed reports as files a person would actually upload: a PDF, a clean image of the page, and a phone photo of the page
   (tilted, slightly blurred, unevenly lit, JPEG-compressed). Only printed-line reports; CSV and FHIR are never photographed.

     PLAYWRIGHT=<path to playwright/index.js> npx tsx images.mts --n 24 --variants 5 --seed 5
   writes pdf/<id>.pdf, images/clean/<id>.png, images/photo/<id>.jpg */
import { mkdirSync } from "node:fs";
import { join } from "node:path";
import { makeReports, makeVariants } from "./generate.mts";

const arg = (k: string, d?: string) => { const i = process.argv.indexOf(`--${k}`); return i < 0 ? d : process.argv[i + 1]; };
const N = Number(arg("n", "24")), K = Number(arg("variants", "0")), SEED = Number(arg("seed", "5"));
const reports = (K > 1 ? makeVariants(N, K, SEED) : makeReports(N, SEED)).filter((r) => r.kind === "lines");
const ROOT = import.meta.dirname;
for (const d of ["pdf", "images/clean", "images/photo"]) mkdirSync(join(ROOT, d), { recursive: true });

const pw = (await import(process.env.PLAYWRIGHT ?? "playwright")).default;
const browser = await pw.chromium.launch();
const page = await browser.newPage({ viewport: { width: 1100, height: 800 }, deviceScaleFactor: 1.5 });
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
const sheet = (lines: string[]) => `<pre style="margin:0;font:13px/1.55 'Courier New',monospace;color:#111;white-space:pre">${lines.map(esc).join("\n")}</pre>`;

for (const [i, r] of reports.entries()) {
  const body = sheet(r.lines!);
  // the document as the lab sends it
  await page.setContent(`<html><body style="margin:40px;background:#fff">${body}</body></html>`);
  await page.pdf({ path: join(ROOT, "pdf", `${r.id}.pdf`), format: "A4", margin: { top: "16mm", bottom: "16mm", left: "12mm", right: "12mm" }, scale: 0.8 });
  await page.screenshot({ path: join(ROOT, "images/clean", `${r.id}.png`), fullPage: true });
  // the same page photographed on a desk: a slight tilt and perspective, soft focus, a shadow falling across it, compression
  const tilt = ((i * 37) % 7) / 2 - 1.5; // -1.5° to +1.5°, fixed per report
  await page.setContent(`<html><body style="margin:0;padding:50px;background:#6f6a62">
    <div style="position:relative;display:inline-block;background:#f4f1ea;padding:36px;box-shadow:0 12px 30px rgba(0,0,0,.45);transform:perspective(1800px) rotateX(3deg) rotate(${tilt}deg);filter:blur(0.6px) contrast(0.92) brightness(0.97)">
      ${body}
      <div style="position:absolute;inset:0;background:linear-gradient(115deg,rgba(0,0,0,0) 40%,rgba(0,0,0,.16) 75%,rgba(0,0,0,.22))"></div>
    </div></body></html>`);
  await page.screenshot({ path: join(ROOT, "images/photo", `${r.id}.jpg`), fullPage: true, type: "jpeg", quality: 62 });
}
await browser.close();
console.log(`${reports.length} reports: pdf/, images/clean/, images/photo/`);
