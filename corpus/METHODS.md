# lab-report-corpus: methods

Enough detail to rebuild the corpus and get the same answer key. Code paths are relative to the repository root.

## 1. Build

```
npm i                                   # Node 22 or later; installs tsx, playwright, pdfjs-dist, tesseract.js, sharp
npx playwright install chromium-headless-shell   # if not already present (revision 1255 for playwright 1.65.1)
corpus/scripts/build.sh                 # 4,000 reports, seed 1 -> corpus-out/full
corpus/scripts/build.sh sample          # 50 reports -> corpus-out/sample, about 15 s
npx tsx corpus/tests/run.mts --built corpus-out/full
```

Python steps run through `uv` with pinned packages (`corpus/requirements.txt`: numpy 2.5.5, opencv-python-headless
5.1.0.95, pillow 13.0.0, pyarrow 26.0.1). Nothing is downloaded: the generator is the only input.

The build has three steps:

1. `corpus/build.mts` composes each report (`compose.mts`), lays it out on A4 pages (`html.mts`), and prints it in
   headless Chromium through Playwright: a PDF, a 200 dpi raster of each page, and the box of every printed piece the
   answer key points at, measured from the laid-out page. Eight browser pages work in parallel.
2. `corpus/degrade.py` turns each page raster into the picture conditions (section 6), eight processes in parallel.
3. `corpus/package.py` writes the dataset layout, the tables, the statistics, the Kaggle zip and `SHA256SUMS`.

## 2. Determinism

- Every random choice comes from one seeded generator per report: `rng()` from `generate.mts` (a 32-bit mulberry-style
  generator), seeded with an FNV-1a hash of the report id (`lrc-<seed>-<index>`). A report id always gives the same report,
  whatever else is built.
- The split is a function of the report id alone (FNV-1a of `id|split` mod 100: 0-79 train, 80-89 validation, 90-99 test).
- Picture degradations are seeded from SHA-256 of `id|page|condition`.
- PDFs: Chromium writes the build time into the PDF; `build.mts` overwrites it with a fixed stamp of the same length.
- The answer key (values, text, tags, pages) is byte-identical across machines. Boxes, PDFs and pictures depend on the
  fonts Chromium finds (Arial, Helvetica, Verdana, Tahoma, Times New Roman, Courier New; built on macOS). On a machine
  with other fonts the text lands in slightly different places; the key's boxes are measured on the machine that builds,
  so they always match that machine's pictures.

## 3. The benchmark's own reports are unchanged

The corpus code is new files under `corpus/` and `readers/`. `generate.mts` is not modified. `run.mts` gained a
`--corpus` option; without it the run is as before. `corpus/tests/run.mts` checks SHA-256 hashes of
`makeReports(2000, s)` for seeds 1 to 6, `makeVariants(60, 5, 5)` and `toHl7` on seed 1 against hashes taken at commit
3376d2e, before any corpus code existed.

## 4. Markers, names, units and printed intervals

`corpus/catalog.mts`. 41 markers come from the benchmark generator with their names (US, UK, DE, ES, RO), units, SI
factors and intervals. 19 markers are new. Every slug is a `marker_slug` in LifeFrom release 1 (`markers.csv`).

French names were written for all 60 markers. French labs print a mass unit (g/L, mg/L) and beside it the SI unit;
the factors from mg/dL are unit arithmetic (× 0.01 to g/L, × 10 to mg/L).

Printed intervals and their sources (all fetched 25 Nov 2026):

| Markers | Interval | Source |
|---|---|---|
| the benchmark's 41, except those below | as in `generate.mts` | lab-reading-bench v0.4.1, doi:10.5281/zenodo.24350904 |
| RBC, haemoglobin, haematocrit, by sex | M 4.6-6.2, F 4.2-5.4 million/µL; M 13-18, F 12-16 g/dL; M 40-55, F 36-48 % | MedlinePlus, Complete blood count, "Normal Results" (https://medlineplus.gov/ency/article/003642.htm) |
| serum iron, transferrin saturation, by sex | M 59-158, F 37-145 µg/dL; M 20-50, F 15-45 % | MedlinePlus, Total iron binding capacity, "Normal Results" (https://medlineplus.gov/ency/article/003489.htm) |
| differential, percent | neutrophils 40-60, lymphocytes 20-40, monocytes 2-8, eosinophils 1-4, basophils 0.5-1 % | MedlinePlus, Blood differential test, "Normal Results" (https://medlineplus.gov/ency/article/003657.htm) |
| differential, absolute (adults) | neutrophils 1.5-7.0, lymphocytes 1.0-4.5, monocytes 0.2-0.8, eosinophils 0.00-0.50, basophils 0.00-0.20 ×10⁹/L | Leeds Teaching Hospitals, Blood Sciences Reference Range Database BSHC-REC-317b v3.20 (rows Neutrophils >10 yrs, p. 9; Lymphocytes >11 years, p. 7; Monocytes >10 yrs, p. 8; Eosinophils, p. 4; Basophils, p. 2) |
| TIBC | 45-76 µmol/L, printed in µg/dL as 251-425 (÷ 0.179, the benchmark's iron factor) | Leeds v3.20, p. 13 |
| urea | 2.5-7.8 mmol/L (over 17 years) | Leeds v3.20, p. 13 |
| bicarbonate | 22-29 mmol/L (17+ years) | Leeds v3.20, p. 2 |
| RDW | 12.0-15.0 % | Leeds v3.20, p. 12 |
| thyroglobulin | no interval printed (Leeds prints none; < 0.1 µg/L expected after thyroidectomy and radio-iodine) | Leeds v3.20, p. 12 |
| urine albumin/creatinine ratio | < 30 mg/g; < 3.4 mg/mmol (÷ 8.84, from the benchmark's creatinine factor 88.4 µmol/L per mg/dL) | MedlinePlus, Microalbuminuria test (https://medlineplus.gov/ency/article/003591.htm) |
| urine creatinine, urine albumin | no interval printed | - |

Leeds URL: https://www.leedsth.nhs.uk/wp-content/uploads/2026/08/BSHC-REC-317b_Blood-Sciences-Reference-Range-Database_v3.20.pdf.
The PDF's text layer scrambles its table, so the rows above were read from page images rendered from the fetched file.

These intervals make the reports look like real reports. They are not offered as reference intervals for any population.

## 5. Values

`corpus/values.mts`. A person has a sex (1:1), an age (18 to 88, skewed young) and conditions drawn independently with
fixed probabilities: diabetes 9%, prediabetes 14%, dyslipidaemia 18%, hypertriglyceridaemia 2.5%, iron deficiency 7%
(× 1.6 for women), CKD 5% (× 2 over 60, × 0.5 under), hypothyroidism 5%, hyperthyroidism 1.5%, fatty liver 8%,
inflammation 6%, vitamin D deficiency 20%, B12 deficiency 4%, thyroid cancer follow-up 1.5%, cholestasis 1.5%. Each marker
has a latent standard-normal score.

**Marginals from NHANES where available.** For 42 markers the generator draws, the score maps to a value through the
10th and 90th survey-weighted percentiles of NHANES Lab Percentiles 1.0.0 (LifeFrom, 25 Nov 2026; population
`reference`, cycle set 2011-2020P, by sex and age band 18-29 … 80+, falling back to the same sex at 18+; cells with fewer
than 120 participants are not used), as a normal or log-normal distribution with those percentiles. They were taken once
into `corpus/nhanes-anchors.json` by `corpus/scripts/nhanes_anchors.py` (source commit and per-file SHA-256 recorded
there); vitamin D was converted from nmol/L with ÷ 2.496 (the benchmark's factor). The remaining drawn markers (urea,
magnesium, free T3, free T4, TSH, thyroglobulin: NHANES cells too small or missing) use design anchors as the 2.5th and
97.5th percentiles, with a fixed shift by sex for a few. **NHANES percentiles describe the US population; they are not
reference intervals, and the corpus is not a sample of any population.**

Conditions add fixed shifts (in SD units, listed in `CONDITIONS`), counted half where NHANES gives the spread (its
survey population already contains part of it). Out of printed range in the result: about 15% of current results
overall, and more for markers whose printed interval is narrower than the US population's spread (fasting glucose about
55% above 99 mg/dL, LDL about 70% above 100 mg/dL, vitamin D about 60% below 30 ng/mL, monocytes about 55% outside 2-8%).
These shares follow from the NHANES percentiles and the printed intervals; they are not prevalence estimates.

Values tied by arithmetic are computed, not drawn, at full precision and then rounded as the lab rounds:

- haematocrit = RBC × MCV / 10; haemoglobin = haematocrit × MCHC / 100; MCH = MCV × MCHC / 100;
- the white-cell differential: five fractions normalised to 100%, rounded to 0.1 with the rounding remainder put on the
  largest; absolute count = WBC × percent / 100;
- transferrin saturation = 100 × iron / TIBC;
- total cholesterol = LDL + HDL + TG / 5 (mg/dL), so a calculated LDL is exactly Friedewald's (MSD Manual calculator,
  https://www.msdmanuals.com/iframe/manual/medical-calculators/friedewald.htm; Friedewald et al., Clin Chem 1972,
  doi:10.1093/clinchem/18.6.499). When triglycerides are 400 mg/dL or more, the LDL line says "not calculated" and the
  key says to abstain (the same source: not valid at TG ≥ 400 mg/dL);
- eGFR by CKD-EPI 2021: 142 × min(Scr/κ, 1)^α × max(Scr/κ, 1)^−1.200 × 0.9938^age × 1.012 if female; κ 0.7 (F) or 0.9
  (M); α −0.241 (F) or −0.302 (M) (National Kidney Foundation, https://www.kidney.org/ckd-epi-creatinine-equation-2021;
  Inker et al., NEJM 2021, doi:10.1056/NEJMoa2102953);
- HbA1c in mmol/mol from the NGSP master equation NGSP = 0.09148 × IFCC + 2.152 (https://ngsp.org/ifcc.asp);
- urine albumin/creatinine ratio = albumin (mg/L) / (creatinine (mg/dL) × 0.01).

About one report in eight carries one result at a level a lab phones through (`critical.mts`: potassium, sodium,
glucose, platelets, ALT or creatinine, with eGFR recomputed). Values below an assay's limit are printed as "<limit"
(design limits: hs-CRP 0.2 mg/L, thyroglobulin 0.1 ng/mL, TSH 0.01 mIU/L, urine albumin 3 mg/L); eGFR of 90 or more is
printed as ">90" on most UK reports and some others.

A cumulative report prints one or two earlier results. The earlier person keeps every latent score plus a normal
perturbation (SD 0.25 + months/40, at most 0.7) and every value is recomputed, so each date is internally consistent.

## 6. Layouts and printing

`corpus/presets.mts`, `corpus/locale.mts`, `corpus/compose.mts`, `corpus/html.mts`. 14 invented layouts (2-3 per country)
fix the font, column order and widths, flag position (own column, after the value, before it, or an "in range / out of
range" pair of columns), flag style (H/L, HIGH/LOW, arrows, +/−, star, bold only, none), range style, section style,
grid, the number of earlier-date columns and whether the table header repeats on a new page. `de-mono` (a fixed-width
printout) is used only in the test split, so the test split measures one layout no training report shows.

Per report: units (US conventional; UK SI; DE conventional or SI 30%; ES and RO conventional; FR mass unit plus SI), decimal
comma (DE, ES, FR; RO 60%), count-unit spelling, French counts per mm³ with a thousands space (25% of FR reports), an
extra printed decimal (12% outside US and UK, only where the unit has at most one decimal, or TSH), a panel profile, and
which markers of each panel were run.

Pagination is computed from fixed line heights, not by the browser. A section heading never ends a page; footnotes sit
at the foot of the page whose line carries the mark. Rows after a page break inside a section carry `split_table`.

Every page carries a footer line "SYNTHETIC TEST DOCUMENT - fictional patient and laboratory - lab-report-corpus" in
the report's language.

## 7. Hard cases

Inserted per report with fixed probabilities; each affected answer row lists its tags in `hard_cases`.

| Tag | What is printed | What the key says |
|---|---|---|
| `ambiguous_name` | "TG" for triglycerides (30% of reports with a lipid panel), "Tg" for thyroglobulin (60% of its lines), "Cr" for serum or urine creatinine (14%) | the marker the context means; LifeFrom's own alias table maps "Cr" to chromium |
| `missing_unit` | an empty unit cell (22% of reports, up to two lines) | read, `unit` null, `unit_expected` the lab's unit |
| `unit_change_between_dates` | on cumulative reports (50%), one marker's earlier result in another unit, written in the cell or in a footnote | earlier row with its own unit |
| `pct_abs_differential`, `pct_abs_same_name`, `pct_abs_same_line` | the differential as percent and count; with the same name for both (RO 60%, DE 35%, ES 30%); FR on one line | two rows, told apart by unit |
| `censored_value` | "<0.2", ">90" | `value` the bound, `comparator` the sign |
| `comment_in_value` | a word instead of a number ("See comment", "To follow", "QNS", "Not calculated"), or a number with a word after it ("142 (rpt)") | abstain, or read the number |
| `footnote_method_change` | a mark on the name and a footnote: the method changed on a date | read; `footnote` holds the text |
| `abstain` | a word instead of a number; an ambiguous name with no unit; a differential name shared by percent and count with no unit | `action` "abstain"; `abstain_reason` |
| also tagged | `decimal_comma`, `dual_unit`, `thousands_separator`, `prior_date_column`, `calculated`, `split_table`, `flag_by_typography`, `critical_value` | |

The abstention rules for ambiguous names follow LifeFrom release 1 `ambiguities.csv` ("when_unit_missing: abstain").

## 8. Picture conditions

`corpus/degrade.py`. Train and validation reports get one condition each (scan_clean 30%, scan_noisy 35%, photo 35%);
test reports get all three, so condition effects can be compared on the same reports. Every report also has its PDF.

- `scan_clean`: the 200 dpi page raster in greyscale, lossless PNG.
- `scan_noisy`: 150 dpi; severity light/medium/heavy (40/40/20%) scales a tilt (up to 3°), slight scaling and shift,
  off-white paper, Gaussian blur, sensor noise, dust specks, a dark band at one edge (40%), black-and-white thresholding
  (up to 30%), JPEG quality 45-75.
- `photo`: severity light/medium/heavy scales rotation (1.5°, 4°, 7°), perspective, blur or motion blur, shadow, and the
  output width (1,700-1,900, 1,450-1,650, 1,200-1,400 px); paper tint, a textured desk, uneven light, a shadow (60%),
  noise, JPEG quality 50-82.

Each picture stores `page_to_pixel`, the 3×3 matrix from page coordinates (fractions of width and height) to picture
pixels, so any box in the key can be carried onto it; the answer rows in `data/<split>/metadata.parquet` already carry
them in pixels.

## 9. Answer key

One row per printed result (`answers/*.jsonl`, `tables/answers-*.parquet`, `test_answers/test.jsonl`):

`report_id, row_id, line_id, page, date, is_current, section, analyte (the name as printed), marker_slug, specimen,
value, value_text, comparator, unit, unit_expected, ref_text, ref_low, ref_high, flag (as printed), flag_norm
(H, L, HH, LL, A for a mark without direction, or null), alt_value, alt_unit (the second unit French labs print),
value_conv, unit_conv (the value in the benchmark's conventional unit), critical, action, abstain_reason, footnote,
hard_cases, bbox_name, bbox_value, bbox_unit, bbox_range, bbox_flag, bbox_value2, bbox_unit2, bbox_line`.

Boxes are `[x0, y0, x1, y1]` as fractions of the page (top left origin), measured from the laid-out HTML: the box of
the text span, its line height included. Earlier-date rows carry the reference interval of the current column only in
the printed table; their `ref_*` fields are null.

## 10. Baselines

- `run.mts --corpus`: the benchmark's own scorer on the current results to read.
- `corpus/score.mts`: the full key, including abstention, every tag, layout and page.
- `readers/lifefrom-local.mts`: the LifeFrom rule-based reader, imported read-only from a local checkout
  (`LIFEFROM_DIR`), on text, the PDF text layer (pdf.js 6.1.200, legacy build for Node) and the pictures (tesseract.js
  5.1.1, English, pictures enlarged to 2,400 px wide as the app does).
- `corpus/ocr_eval.py`: the recognised words inside each value's box against the printed value.
- `readers/corpus-oracle.mts` returns the key; it must score 100% (a check of the scorers).
