/* lab-report-corpus: pages and HTML (25 Nov 2026).

   Pagination is computed here from fixed line heights, so it is deterministic and does not depend on the browser: every
   line has a height in px, every page a fixed capacity, footnotes sit at the bottom of the page whose line carries the
   mark. A table that runs over a page break continues on the next page, with or without its column header (per preset);
   rows after such a break carry the hard case "split_table". Each printed piece that the answer key points at is a
   <span data-k="row:field">, so the renderer can read its box. */
import type { Doc, Line, Piece } from "./compose.mts";
import { BY_PRESET, PAGE, type Preset } from "./presets.mts";
import * as L from "./locale.mts";

export type Page = { n: number; lines: Line[]; foots: { mark: string; text: string }[]; colhead: boolean; cont: string | null };

const lineH = (l: Line, p: Preset) => Math.round((l.type === "section" ? 1.35 : l.type === "note" ? 0.95 : l.h) * p.rowH);
const footH = (f: { text: string }) => 13 * f.text.split("\n").length + 2;

export function paginate(doc: Doc): Page[] {
  const p = BY_PRESET[doc.preset];
  const loc = doc.locale;
  const end: Line[] = [];
  if (doc.endComments.length) {
    end.push({ type: "section", h: 1.35, text: { US: "COMMENTS", UK: "Comments", DE: "Kommentar", ES: "Comentarios", RO: "Observații", FR: "Commentaires" }[loc], rows: [], id: "ec" });
    doc.endComments.forEach((t, i) => end.push({ type: "comment", h: 1, text: t, rows: [], id: `ec${i}` }));
  }
  end.push({ type: "comment", h: 1.4, text: { US: "Electronically verified. *** END OF REPORT ***", UK: "Authorised electronically. -- End of report --", DE: "Technisch und medizinisch validiert. -- Ende des Befundes --", ES: "Validado electrónicamente. --- Fin del informe ---", RO: "Validat electronic. --- Sfârșitul buletinului ---", FR: "Validé électroniquement. --- Fin du compte rendu ---" }[loc], rows: [], id: "eor" });
  const all = [...doc.lines, ...end];
  const cap = (n: number) => PAGE.H - PAGE.top - (n === 1 ? PAGE.head1 : PAGE.headN) - PAGE.foot - PAGE.bottom - Math.round(p.rowH * 1.3);
  const pages: Page[] = [];
  let cur: Page = { n: 1, lines: [], foots: [], colhead: true, cont: null };
  let used = 0, footUsed = 0, panel: string | undefined;
  for (let i = 0; i < all.length; i++) {
    const l = all[i];
    const h = lineH(l, p);
    const fh = l.foot ? footH(l.foot) + (cur.foots.length ? 0 : 6) : 0;
    // a section heading never ends a page: keep it with the line under it
    const next = all[i + 1];
    const withNext = l.type === "section" && next ? lineH(next, p) : 0;
    if (cur.lines.length && used + h + withNext + footUsed + fh > cap(cur.n)) {
      pages.push(cur);
      const cont = l.type === "section" || l.type === "comment" ? null : panel ?? null;
      cur = { n: cur.n + 1, lines: [], foots: [], colhead: p.repeatHeader, cont: cont && p.repeatHeader ? cont : null };
      used = cur.cont ? Math.round(1.35 * p.rowH) : 0; footUsed = 0;
      if (cont && l.type === "row") (l as Line & { splitAfterBreak?: boolean }).splitAfterBreak = true;
    }
    if (l.type === "section") panel = l.panel ? L.SECTIONS[loc][l.panel] : undefined;
    cur.lines.push(l);
    used += h;
    if (l.foot) { cur.foots.push(l.foot); footUsed += fh; }
  }
  pages.push(cur);
  if (!p.repeatHeader) for (const pg of pages.slice(1)) pg.colhead = false;
  // page numbers and split tables into the key
  const rowPage = new Map<string, number>();
  let split = false;
  for (const pg of pages) {
    for (const l of pg.lines) {
      if (l.type === "section") split = false;
      if ((l as Line & { splitAfterBreak?: boolean }).splitAfterBreak) split = true;
      for (const rid of l.rows) { rowPage.set(rid, pg.n); if (split) splitRows.add(rid); }
    }
  }
  for (const k of doc.key) {
    k.page = rowPage.get(k.row_id) ?? null;
    if (splitRows.has(k.row_id) && !k.hard_cases.includes("split_table")) k.hard_cases.push("split_table");
  }
  splitRows.clear();
  return pages;
}
const splitRows = new Set<string>();

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const pieces = (ps: Piece[] | undefined) => (ps ?? []).map((x) => `<span${x.k ? ` data-k="${x.k}"` : ""}${x.cls ? ` class="${x.cls}"` : ""}>${esc(x.t)}</span>`).join("");

export function html(doc: Doc, pages: Page[]): string {
  const p = BY_PRESET[doc.preset];
  const loc = doc.locale, lab = L.LABEL[loc], hd = doc.header;
  const W = PAGE.W - 2 * PAGE.mx;
  const mono = /Courier/.test(p.font);
  const css = `
  *{box-sizing:border-box;margin:0;padding:0}
  @page{size:${PAGE.W}px ${PAGE.H}px;margin:0}
  body{background:#fff;color:#111;font-family:'${p.font}',${mono ? "monospace" : /Times/.test(p.font) ? "serif" : "sans-serif"};font-size:${p.px}px}
  .page{position:relative;width:${PAGE.W}px;height:${PAGE.H}px;overflow:hidden;page-break-after:always;break-after:page;background:#fff}
  .inner{position:absolute;left:${PAGE.mx}px;top:${PAGE.top}px;width:${W}px}
  .row,.colh,.sec,.note,.cmt{display:flex;align-items:center;white-space:nowrap;overflow:hidden}
  .row{height:${p.rowH}px}
  .c{padding:0 4px;overflow:hidden;white-space:nowrap;flex:none}
  .colh .c{overflow:visible}
  .c.ov{overflow:visible;text-align:left}
  .c.vis{overflow:visible}
  .r{text-align:right}.ce{text-align:center}
  .b{font-weight:bold}
  .sup{font-size:0.7em;vertical-align:super}
  .colh{height:${Math.round(p.rowH * 1.3)}px;font-weight:bold;font-size:0.92em;${p.grid === "none" ? "border-bottom:1px solid #333" : "border-bottom:1.5px solid #222;border-top:1px solid #222"}}
  .sec{height:${Math.round(p.rowH * 1.35)}px;font-weight:bold;padding-left:4px;${p.section === "shaded" ? "background:#e4e4e4;" : p.section === "underline" ? "text-decoration:underline;" : ""}${p.section === "caps" ? "letter-spacing:0.3px;" : ""}}
  .note{height:${Math.round(p.rowH * 0.95)}px;font-size:0.82em;color:#444;padding-left:18px;font-style:italic}
  .cmt{height:${p.rowH}px;font-size:0.9em;padding-left:4px}
  .eor{height:${Math.round(p.rowH * 1.4)}px}
  .grid-rules .row{border-bottom:0.6px solid #bbb}
  .grid-boxes .row .c{border-right:0.6px solid #999;height:100%;display:flex;align-items:center}
  .grid-boxes .row{border-bottom:0.6px solid #999;border-left:0.6px solid #999}
  .grid-zebra .row:nth-child(even){background:#f0f0f0}
  .two{flex-direction:column;align-items:stretch}
  .two .main{display:flex;align-items:center;height:${p.rowH}px}
  .method{font-size:0.8em;color:#555;font-style:italic;padding-left:12px}
  .hd{height:${PAGE.head1 - 10}px;overflow:hidden}
  .hdn{height:${PAGE.headN - 8}px;display:flex;justify-content:space-between;align-items:flex-end;border-bottom:1px solid #444;padding-bottom:3px;font-size:0.9em}
  .lab{font-size:1.55em;font-weight:bold}
  .banner{background:#222;color:#fff;padding:6px 10px}
  .addr{font-size:0.85em;color:#333;margin:2px 0 8px}
  .pinfo{display:grid;grid-template-columns:1fr 1fr;column-gap:24px;row-gap:3px;font-size:0.92em;padding:6px 8px}
  .h-boxed .pinfo{border:1px solid #333}
  .pinfo b{display:inline-block;min-width:118px;font-weight:bold}
  .foots{position:absolute;left:${PAGE.mx}px;width:${W}px;bottom:${PAGE.bottom + PAGE.foot}px;font-size:10px;color:#222;border-top:0.6px solid #888;padding-top:3px;white-space:pre-line}
  .foot{position:absolute;left:${PAGE.mx}px;width:${W}px;bottom:${PAGE.bottom}px;height:${PAGE.foot - 6}px;font-size:9.5px;color:#333;display:flex;justify-content:space-between;align-items:flex-end;border-top:0.8px solid #333;padding-top:2px}
  .syn{font-size:8.5px;color:#555;letter-spacing:0.2px}
  .notreal{position:absolute;right:${PAGE.mx}px;top:12px;font-size:10px;font-weight:bold;color:#444;border:1px solid #666;padding:1px 6px;letter-spacing:0.3px}
  `;
  const colTitle = (k: string) => {
    if (k === "prior0" || k === "prior1") { const d = doc.dates[k === "prior0" ? 1 : 2]; const t = L.COLTITLE[loc][k as "prior0"] ?? ""; return d ? `${t ? t + " " : ""}${L.dateShort(d, loc)}` : t; }
    if (k === "value" && p.prior) { const w = p.cols.find((c) => c.k === "value")!.w; return w < 100 ? L.dateShort(doc.dates[0], loc) : `${L.COLTITLE[loc].value} ${L.dateShort(doc.dates[0], loc)}`; }
    return L.COLTITLE[loc][k as "value"] ?? "";
  };
  // a word in the value column (a comment, "pending") runs on into the empty unit column, as it does on paper
  const cellsRow = (cells: Line["cells"]) => p.cols.map((c) => { const ps = cells?.[c.k]; const ov = ps?.some((x) => x.cls === "w");
    const vis = c.k !== "name"; // only names are cut at the column edge; every other cell runs on, as on paper
    return `<div class="c${ov ? " ov" : c.align === "r" ? " r" : c.align === "c" ? " ce" : ""}${vis ? " vis" : ""}" style="width:${c.w}px">${pieces(ps)}</div>`; }).join("");
  const header1 = `<div class="hd h-${p.header}">
    <div class="${p.header === "banner" ? "banner" : ""}"><div class="lab">${esc(hd.lab)}</div></div>
    <div class="addr">${esc(hd.addr)}</div>
    <div class="pinfo">
      <div><b>${lab.patient}:</b> ${esc(hd.patient)}</div><div><b>${lab.id}:</b> ${hd.pid}</div>
      <div><b>${lab.dob}:</b> ${hd.dob}</div><div><b>${lab.sex} / ${lab.age}:</b> ${lab[doc.person.sex]} / ${doc.person.age}</div>
      <div><b>${lab.collected}:</b> ${hd.collected}</div><div><b>${lab.received}:</b> ${hd.received}</div>
      <div><b>${lab.reported}:</b> ${hd.reported}</div><div><b>${lab.physician}:</b> ${esc(hd.physician)}</div>
      <div style="grid-column:span 2"><b>${lab.specimen}:</b> ${esc(hd.specimen)}${hd.fasting ? ` · ${lab.fasting}` : ""}</div>
    </div></div>`;
  const out: string[] = [];
  for (const pg of pages) {
    const body: string[] = [];
    if (pg.colhead) body.push(`<div class="colh">${p.cols.map((c) => `<div class="c${c.align === "r" ? " r" : c.align === "c" ? " ce" : ""}" style="width:${c.w}px">${esc(colTitle(c.k))}</div>`).join("")}</div>`);
    if (pg.cont) body.push(`<div class="sec">${esc(pg.cont)} (${lab.cont})</div>`);
    for (const l of pg.lines) {
      if (l.type === "section") body.push(`<div class="sec">${esc(l.text!)}</div>`);
      else if (l.type === "note") body.push(`<div class="note">${esc(l.text!)}</div>`);
      else if (l.type === "comment") body.push(`<div class="cmt${l.id === "eor" ? " eor" : ""}">${esc(l.text!)}</div>`);
      else if (l.sub) body.push(`<div class="row two" style="height:${Math.round(l.h * p.rowH)}px"><div class="main">${cellsRow(l.cells)}</div><div class="method">${pieces(l.sub)}</div></div>`);
      else body.push(`<div class="row">${cellsRow(l.cells)}</div>`);
    }
    const head = pg.n === 1 ? header1 : `<div class="hdn"><span><b>${esc(hd.patient)}</b> · ${hd.pid} · ${lab.collected}: ${hd.collected.split(" ")[0]}</span><span>${esc(hd.lab)}</span></div><div style="height:8px"></div>`;
    const foots = pg.foots.length ? `<div class="foots">${pg.foots.map((f) => esc(f.text)).join("\n")}</div>` : "";
    const pageNo = lab.page.replace("{n}", String(pg.n)).replace("{m}", String(pages.length));
    out.push(`<div class="page" data-page="${pg.n}"><div class="notreal">${esc(L.NOT_REAL)}</div><div class="inner">${head}<div class="tbl grid-${p.grid}">${body.join("")}</div></div>${foots}<div class="foot"><span>${pageNo}</span><span class="syn">${esc(L.SYNTHETIC[loc])}</span><span>${esc(hd.lab)}</span></div></div>`);
  }
  return `<!doctype html><html lang="${{ US: "en", UK: "en", DE: "de", ES: "es", RO: "ro", FR: "fr" }[loc]}"><head><meta charset="utf-8"><style>${css}</style></head><body>${out.join("")}</body></html>`;
}

/** the text of each page in reading order, line by line, cells separated by three spaces: the ground truth a perfect
 *  OCR would return, and the input of the text tier */
export function transcript(doc: Doc, pages: Page[]): string[][] {
  const p = BY_PRESET[doc.preset];
  const loc = doc.locale, lab = L.LABEL[loc], hd = doc.header;
  const txt = (ps: Piece[] | undefined) => (ps ?? []).map((x) => x.t).join("");
  const join = (xs: string[]) => xs.filter((x) => x.trim()).join("   ");
  const colTitle = (k: string) => {
    if (k === "prior0" || k === "prior1") { const d = doc.dates[k === "prior0" ? 1 : 2]; const t = L.COLTITLE[loc][k as "prior0"] ?? ""; return d ? `${t ? t + " " : ""}${L.dateShort(d, loc)}` : t; }
    if (k === "value" && p.prior) { const w = p.cols.find((c) => c.k === "value")!.w; return w < 100 ? L.dateShort(doc.dates[0], loc) : `${L.COLTITLE[loc].value} ${L.dateShort(doc.dates[0], loc)}`; }
    return L.COLTITLE[loc][k as "value"] ?? "";
  };
  return pages.map((pg) => {
    const out: string[] = [L.NOT_REAL];
    if (pg.n === 1) {
      out.push(hd.lab, hd.addr,
        join([`${lab.patient}: ${hd.patient}`, `${lab.id}: ${hd.pid}`]), join([`${lab.dob}: ${hd.dob}`, `${lab.sex} / ${lab.age}: ${lab[doc.person.sex]} / ${doc.person.age}`]),
        join([`${lab.collected}: ${hd.collected}`, `${lab.received}: ${hd.received}`]), join([`${lab.reported}: ${hd.reported}`, `${lab.physician}: ${hd.physician}`]),
        `${lab.specimen}: ${hd.specimen}${hd.fasting ? ` · ${lab.fasting}` : ""}`);
    } else out.push(join([`${hd.patient} · ${hd.pid} · ${lab.collected}: ${hd.collected.split(" ")[0]}`, hd.lab]));
    if (pg.colhead) out.push(join(p.cols.map((c) => colTitle(c.k))));
    if (pg.cont) out.push(`${pg.cont} (${lab.cont})`);
    for (const l of pg.lines) {
      if (l.type !== "row") { out.push(l.text!); continue; }
      out.push(join(p.cols.map((c) => txt(l.cells?.[c.k]))));
      if (l.sub) out.push(txt(l.sub));
    }
    for (const f of pg.foots) out.push(...f.text.split("\n"));
    out.push(join([lab.page.replace("{n}", String(pg.n)).replace("{m}", String(pages.length)), L.SYNTHETIC[loc], hd.lab]));
    return out;
  });
}
