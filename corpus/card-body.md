
# lab-report-corpus

Fictional laboratory reports with a computed answer key, for training and evaluating document AI and OCR systems on
medical lab reports. Version 1.0.0, 25 November 2026. By LifeFrom (https://lifefrom.ai) and Julian Caraulani.
Data CC BY 4.0, code MIT.

**Every person, laboratory and value is invented.** Every page says "SYNTHETIC — not a real lab" at the top and
carries a synthetic-document footer. Nothing here is patient data, and nothing here is medical advice.

## What it is

{{COUNTS}}

Each report is printed in one of six national conventions (US, UK, German, Spanish, Romanian, French) with that
country's names, units, decimal mark, flags and range styles, in one of 14 invented page layouts. It exists as a
born-digital PDF (with a text layer) and as page pictures: a clean 200 dpi scan, a noisy 150 dpi scan, and a simulated
phone photo. Every printed result has an answer row: the name as printed, the LifeFrom `marker_slug`, the value as
printed and as a number, comparator, unit, reference interval as printed and parsed, flag, page, date, specimen, boxes
for the name, value, unit, range and flag, whether a reader should read it or abstain, and hard-case tags.

The values of one report are consistent with each other: haemoglobin, haematocrit, RBC and the indices agree; the
white-cell differential sums to 100% and the counts to the WBC; transferrin saturation is iron over TIBC; a calculated
LDL is Friedewald's (and is "not calculated" when triglycerides are 400 mg/dL or more); eGFR is CKD-EPI 2021 from the
printed creatinine, age and sex. Where NHANES covers a marker, its spread follows NHANES survey percentiles by sex and
age (METHODS.md §5).

## Who it is for

- Teams building OCR, table extraction or key-information extraction for lab reports, who need labelled pages in many
  layouts and languages without patient data.
- Researchers measuring how readers (rule-based, OCR pipelines, vision-language models) fail: misread numbers, decimal
  commas, units, earlier-date columns, ambiguous names, lines that must not be read.
- Educators who need realistic report pages that describe nobody.

It is not a substitute for real reports in a final validation, and it is not for clinical use.

## Files

| Path | What |
|---|---|
| `data/<split>/*.png, *.jpg` | page pictures, `<report>_p<page>_<condition>` |
| `data/<split>/metadata.parquet` | one row per picture: report, page, condition, severity, size, `page_to_pixel` (3×3), `transcript` (the page's text, line by line), `results` (train and validation: that page's answer rows with boxes in pixels) |
| `pdf/<split>/<report>.pdf` | the born-digital PDF of each report |
| `answers/{train,validation}.jsonl`, `tables/answers-*.parquet` | the answer key, one row per printed result, boxes as page fractions |
| `test_answers/test.jsonl`, `test.parquet`, `transcripts.jsonl` | the test split's key and page transcripts, kept apart |
| `documents/<split>.jsonl`, `tables/documents-*.parquet` | one row per report: locale, layout, units, decimal mark, pages, dates, the invented person's sex, age and conditions, hard cases |
| `pages/<split>.jsonl` | the picture table as JSON lines |
| `kaggle/lab-report-corpus.zip` | the pictures as folders and CSVs, without the PDFs (`train.csv`, `validation.csv`, `test.csv` without answers, `sample_submission.csv`) |
| `stats.json`, `SHA256SUMS` | counts, sizes, timings; a checksum for every file |

Answer-row columns are defined in METHODS.md §9. The most used:

| Column | Meaning |
|---|---|
| `marker_slug` | LifeFrom marker id (release 1 `markers.csv`) |
| `analyte` | the name exactly as printed ("TG", "Neutrophile", "Hémoglobine glyquée (HbA1c)") |
| `value`, `value_text`, `comparator` | the number as printed (decimal comma resolved), the cell's text, "<" or ">" for censored values |
| `unit`, `unit_expected` | the unit as printed (null when the lab left it out), and the lab's unit |
| `ref_text`, `ref_low`, `ref_high` | the interval as printed, and parsed |
| `flag`, `flag_norm` | the lab's flag as printed, and normalised (H, L, HH, LL, A = abnormal without direction) |
| `alt_value`, `alt_unit` | the second unit French labs print beside the first |
| `value_conv`, `unit_conv` | the same result in the conventional unit of lab-reading-bench |
| `date`, `is_current` | the collection date of this value; false for an earlier-date column |
| `action`, `abstain_reason` | "read", or "abstain" (a word in the value column, an ambiguous name without a unit) |
| `hard_cases` | tags, below |
| `bbox_name`, `bbox_value`, `bbox_unit`, `bbox_range`, `bbox_flag`, `bbox_value2`, `bbox_unit2`, `bbox_line` | `[x0, y0, x1, y1]` as fractions of the page |

Load the pictures with their per-page answers:

```python
from datasets import load_dataset
pages = load_dataset("path/to/lab-report-corpus")          # config "pages": train, validation, test
answers = load_dataset("parquet", data_files={"train": "tables/answers-train.parquet", "validation": "tables/answers-validation.parquet"})
```

## Counts

{{TABLES}}

## Hard cases

| Tag | What the page shows |
|---|---|
| `ambiguous_name` | "TG" (triglycerides) or "Tg" (thyroglobulin); "Cr" for serum or urine creatinine |
| `missing_unit` | the unit cell is empty |
| `unit_change_between_dates` | an earlier-date column in another unit, in the cell or in a footnote |
| `pct_abs_differential`, `pct_abs_same_name`, `pct_abs_same_line` | white-cell differential as percent and count; the same name for both; both on one line (FR) |
| `censored_value` | "<0.2", ">90" |
| `comment_in_value` | "See comment", "To follow", "QNS", "n. berechenbar", or a number with a word after it |
| `footnote_method_change` | a mark on the name; a footnote says the method changed |
| `abstain` | lines a reader must not return a number for |
| `prior_date_column` | an earlier result beside the current one (cumulative reports) |
| `split_table` | the row follows a page break inside its section |
| `decimal_comma`, `thousands_separator`, `dual_unit`, `flag_by_typography`, `calculated`, `critical_value` | as named |

## Baselines (test split)

{{BASELINES}}

What the baselines show (LifeFrom rule-based reader, test split, 11,262 current results to read and 67 lines to
abstain on; full tables in `results/corpus/` of the repository):

- **The cumulative column is the main reading error.** On text and PDF, 597 and 599 of the reader's 646 and 647 wrong
  values were the same marker's earlier-date result. On lines that also print an earlier result, 60.6% (text) were read
  right, against 77.6% on lines without one.
- **Conversions were rarely wrong:** 3 of 808 values returned in the conventional unit after a conversion (text).
- **Abstention:** it returned a number on 23 of the 67 lines it should have left alone (34.3%).
- **Pictures:** right reads fall from 71.8% (PDF) to 63.1% (clean scan), 26.6% (noisy scan) and 19.8% (phone photo), and
  misreadings rise from 45 to 605, 2,221 and 2,102. Plain OCR reads 92.3% of printed values exactly on clean scans, 66.8%
  on noisy scans and 53.2% on photos (77.8% light, 52.9% medium, 3.9% heavy).
- **Critical values** (the benchmark's own scorer): 28 of 33 caught on text, with 48 false critical alarms, mostly a
  glucose printed in mmol/L or g/L and left unconverted.
- Hard cases the reader mostly misses: ambiguous names (2.4% read right on PDF), differentials with the same name for
  percent and count (13.8%), French percent-and-count lines (19.8%), counts per mm³ with a thousands space (0%).

## How it was made

One seeded generator (`corpus/` in lab-reading-bench, extending its v0.4.1 generator, doi:10.5281/zenodo.24350904)
composes each report, lays it out, prints it with headless Chromium, measures every box from the laid-out page, and
degrades the page pictures with OpenCV. One command rebuilds everything (`corpus/scripts/build.sh`). Full detail in
METHODS.md.

## Datasheet

**Motivation.** Lab reports are the documents patients and clinicians most often need read into structured data, and
real ones cannot be shared. Public document-AI datasets cover receipts, forms and invoices; we found none for lab reports
with layouts in several languages, units and an exact key. The corpus was made by LifeFrom to measure and improve its
own report reader, and released for anyone to use.

**Composition.** Reports (instances) with their pages, pictures and answer rows. No instance relates to a real person.
Each report has: an invented person (sex, age, invented conditions), one or three collection dates, 1 to 3 pages. Labels
are computed, not annotated, so they have no annotator error; they can still be wrong if the generator has a bug (tests
below). Splits are by report (80/10/10), fixed by the report id. The test split holds all three picture conditions per
page and is the only split with the `de-mono` layout (a layout no training report shows).

**Collection process.** None: everything is generated. Sources of numbers: the benchmark's intervals and conversion
factors, MedlinePlus, the Leeds Teaching Hospitals reference-range database v3.20, NKF (CKD-EPI 2021), NGSP (HbA1c), the
MSD Manual (Friedewald), and NHANES Lab Percentiles 1.0.0 (LifeFrom). Each is cited where used in METHODS.md.

**Preprocessing and labelling.** Boxes are measured on the laid-out HTML before printing and carried onto each picture
with the matrix that made it. The PDF's text layer comes from the same layout.

**Uses.** Training and evaluating OCR, layout analysis, table structure and key-information extraction; robustness
studies (condition, severity, layout, language); abstention. Not for: clinical decisions, estimating how common any
result is, or validating a medical device on its own.

**Distribution.** Built locally; not yet published anywhere. Licence CC BY 4.0 (data), MIT (code).

**Maintenance.** LifeFrom. Errors found in the key will be fixed in a new version with a changelog entry; versions are
never overwritten.

## Limitations

- **Synthetic layouts.** 14 invented layouts drawn from the conventions of six countries. Real laboratories use many
  more, with logos, colour, multi-column headers, rotated landscape pages and fax artefacts. A model that does well here
  may still fail on a real report.
- **No real lab branding.** Lab names are invented and marked "(fictional)"; no real laboratory's design is copied. This
  also means no real laboratory's quirks are present.
- **No handwriting**, stamps, signatures, highlighter marks, folds, staples or crumpled paper. Photos are simulated
  (perspective, rotation, blur, shadow, JPEG), not taken with a camera.
- **Values** follow NHANES percentiles (US population) where available and design anchors elsewhere, with invented
  conditions. They are plausible and internally consistent, not a sample of any population. Reference intervals are
  printed for realism; they are not offered as reference intervals.
- **60 markers**, blood and spot urine. Real reports carry hundreds (hormones, serology, coagulation, urinalysis text).
- **The test key is separate, not secret:** the test PDFs have a text layer. For a held-out leaderboard, generate an
  unreleased seed.
- **Fonts:** pictures and boxes were rendered on macOS fonts; a rebuild elsewhere gives the same key and slightly
  different pixels.
- **Same authors.** The generator and the LifeFrom reader measured below were written by the same team; their blind
  spots may coincide.

## Citation

LifeFrom and Julian Caraulani (2026). lab-report-corpus: synthetic laboratory reports with a computed answer key for
document AI and OCR. Version 1.0.0. CC BY 4.0. (No DOI yet.)

Built on: Caraulani J. lab-reading-bench v0.4.1. doi:10.5281/zenodo.24350904.
