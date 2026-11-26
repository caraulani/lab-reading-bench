/* A model's reply as the benchmark reads it (used by readers/openrouter.mts and the exploratory scripts). Unchanged from
   the preregistered reader: the first {...} in the reply is parsed; a reply with no usable JSON reads nothing, so every
   result on the report counts as missed; a marker returned twice keeps its first row. */
import type { Parsed, ReadRow } from "../run.mts";

export function parseReply(text: string): Parsed {
  const m = text.match(/\{[\s\S]*\}/);
  let j: { takenISO?: string | null; rows?: Partial<ReadRow>[] } = {};
  try { if (m) j = JSON.parse(m[0]); } catch { j = {}; }
  const n = (x: unknown) => (typeof x === "number" && Number.isFinite(x) ? x : typeof x === "string" && x.trim() && Number.isFinite(Number(x)) ? Number(x) : null);
  const rows: ReadRow[] = (j.rows ?? []).filter((x) => x && typeof x.slug === "string" && n(x.value) !== null).map((x) => ({
    slug: x.slug!, printed: x.slug!, value: n(x.value)!, unit: String(x.unit ?? ""), low: n(x.low), high: n(x.high),
    ...(x.flag === "H" || x.flag === "L" ? { flag: x.flag } : {}),
  }));
  const seen = new Set<string>();
  return { rows: rows.filter((x) => (seen.has(x.slug) ? false : (seen.add(x.slug), true))), takenISO: j.takenISO ?? null };
}
