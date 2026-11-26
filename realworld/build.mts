/* Builds the answer key (answers.jsonl) from the hand-written keys/<source>.psv files, and checks it.

     npx tsx realworld/build.mts

   Each .psv row is one printed numeric result, typed by hand from the page images: page | section | analyte | value |
   unit | reference range | flag | catalog slug | note | value in the catalog unit (only when it is not a fixed SI factor).
   This script parses the printed range and value into numbers, converts catalog markers to the benchmark's conventional
   unit (generate.mts ANALYTES, SI factors) and, as a second check of the typing, looks for every printed value and range
   in the page's PDF text layer (prepare.py writes it). Anything it cannot find is listed for a look at the page. */
import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { ANALYTES } from "../generate.mts";

const HERE = import.meta.dirname;
const reports = JSON.parse(readFileSync(join(HERE, "reports.json"), "utf8")) as { id: string; source: string; pages: number[]; locale: string }[];
const BY = Object.fromEntries(ANALYTES.map((a) => [a.slug, a]));
const unitKey = (u: string) => u.toLowerCase().replace(/[µμ]/g, "u").replace(/mcg/g, "ug").replace(/\s/g, "");

export type KeyRow = {
  report_id: string; source: string; row_id: string; page: number; section: string; analyte: string;
  value_text: string; value: number; comparator: "<" | ">" | null; unit: string | null;
  ref_text: string | null; ref_low: number | null; ref_high: number | null; flag: string | null; flag_norm: "H" | "L" | null;
  marker_slug: string | null; value_conv: number | null; unit_conv: string | null; ref_low_conv: number | null; ref_high_conv: number | null;
  note: string | null;
};

const num = (s: string) => Number(s.replace(/,(?=\d{3}\b)/g, ""));
function parseValue(t: string): { value: number; comparator: "<" | ">" | null } {
  const m = t.replace(/\s/g, "").match(/^([<>]?)(\d[\d,]*(?:\.\d+)?)$/);
  if (!m) throw new Error(`value not numeric: "${t}"`);
  return { value: num(m[2]), comparator: (m[1] || null) as "<" | ">" | null };
}
function parseRange(t: string): [number | null, number | null] {
  const s = t.replace(/(\d),(\d{3})\b/g, "$1$2");
  let m = s.match(/(\d+(?:\.\d*)?)\s*-\s*(\d+(?:\.\d+)?)/);
  if (m) return [Number(m[1]), Number(m[2])];
  m = s.match(/^\s*<\s*(?:OR\s*=\s*)?(\d+(?:\.\d+)?)/i); if (m) return [null, Number(m[1])];
  m = s.match(/^\s*>\s*(?:OR\s*=\s*)?(\d+(?:\.\d+)?)/i); if (m) return [Number(m[1]), null];
  return [null, null];
}
const flagNorm = (f: string | null): "H" | "L" | null => (!f ? null : /^(h|high|\+)/i.test(f) ? "H" : /^(l|low|-)/i.test(f) ? "L" : null);
const round = (x: number, dp: number) => Math.round(x * 10 ** dp) / 10 ** dp;

const out: KeyRow[] = [];
const problems: string[] = [];
for (const file of readdirSync(join(HERE, "keys")).filter((f) => f.endsWith(".psv")).sort()) {
  const source = file.replace(/\.psv$/, "");
  const lines = readFileSync(join(HERE, "keys", file), "utf8").split("\n").filter((l) => l.trim() && !l.startsWith("#"));
  lines.forEach((line, i) => {
    const f = line.split("|").map((x) => x.trim());
    if (f.length < 9 || f.length > 10) { problems.push(`${file}:${i + 1} has ${f.length} fields`); return; }
    const [page, section, analyte, valueText, unit, ref, flag, slug, note, conv] = f;
    const rep = reports.find((r) => r.source === source && r.pages.includes(Number(page)));
    if (!rep) { problems.push(`${file}:${i + 1} page ${page} is in no report`); return; }
    const { value, comparator } = parseValue(valueText);
    const [lo, hi] = ref ? parseRange(ref) : [null, null];
    let vc: number | null = null, lc: number | null = null, hc: number | null = null;
    if (slug) {
      const a = BY[slug];
      if (!a) { problems.push(`${file}:${i + 1} unknown slug ${slug}`); return; }
      if (conv) vc = Number(conv);
      else if (a.si && unitKey(unit) === unitKey(a.si.unit) && unitKey(a.si.unit) !== unitKey(a.unit)) vc = round(value / a.si.f, a.dp + 1);
      else vc = value;
      const k = value ? vc / value : 1;
      lc = lo === null ? null : round(lo * k, a.dp + 2); hc = hi === null ? null : round(hi * k, a.dp + 2);
    }
    out.push({
      report_id: rep.id, source, row_id: `${rep.id}-${String(out.filter((x) => x.report_id === rep.id).length + 1).padStart(3, "0")}`, page: Number(page), section, analyte,
      value_text: valueText, value, comparator, unit: unit || null, ref_text: ref || null, ref_low: lo, ref_high: hi, flag: flag || null, flag_norm: flagNorm(flag || null),
      marker_slug: slug || null, value_conv: vc, unit_conv: slug ? BY[slug].unit : null, ref_low_conv: lc, ref_high_conv: hc, note: note || null,
    });
  });
}

// one catalog slug per report (a reader returns each marker once)
for (const r of reports) {
  const seen = new Map<string, string>();
  for (const k of out.filter((x) => x.report_id === r.id && x.marker_slug)) {
    if (seen.has(k.marker_slug!)) problems.push(`${r.id}: slug ${k.marker_slug} on two rows (${seen.get(k.marker_slug!)}, ${k.analyte})`);
    seen.set(k.marker_slug!, k.analyte);
  }
}

// second check: every typed value and range is in the page's PDF text layer
const squash = (s: string) => s.normalize("NFC").replace(/[\s ]+/g, "").replace(/[−–]/g, "-");
for (const k of out) {
  const p = join(HERE, "sources", k.source, "pages", `p${k.page}.txt`);
  if (!existsSync(p)) { problems.push(`no page text for ${k.source} p${k.page} (run prepare.py)`); continue; }
  const text = squash(readFileSync(p, "utf8"));
  for (const [what, t] of [["value", k.value_text], ["range", k.ref_text], ["unit", k.unit], ["name", k.analyte]] as const)
    if (t && !text.includes(squash(t))) problems.push(`${k.row_id} ${k.analyte}: ${what} "${t}" not found in the text layer of p${k.page}`);
}

writeFileSync(join(HERE, "answers.jsonl"), out.map((x) => JSON.stringify(x)).join("\n") + "\n");
const nCat = out.filter((x) => x.marker_slug).length;
console.log(`${out.length} rows on ${new Set(out.map((x) => x.report_id)).size} reports (${nCat} catalog markers); ${problems.length} things to check`);
for (const p of problems) console.log("  " + p);
