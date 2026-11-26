---
pretty_name: "lab-report-corpus: synthetic laboratory reports with a computed answer key"
license: cc-by-4.0
language: [en, de, es, ro, fr]
task_categories: [image-to-text, object-detection, document-question-answering]
tags: [document-ai, ocr, key-information-extraction, medical, laboratory-results, synthetic, tables, multilingual]
size_categories: [1K<n<10K]
configs:
- config_name: pages
  data_files:
  - split: train
    path: [data/train/*.png, data/train/*.jpg, data/train/metadata.parquet]
  - split: validation
    path: [data/validation/*.png, data/validation/*.jpg, data/validation/metadata.parquet]
  - split: test
    path: [data/test/*.png, data/test/*.jpg, data/test/metadata.parquet]
---

# lab-report-corpus

Fictional laboratory reports with a computed answer key, for training and evaluating document AI and OCR systems on
medical lab reports. Version 1.0.0, 25 November 2026. By LifeFrom (https://lifefrom.ai) and Julian Caraulani.
Data CC BY 4.0, code MIT.

Full corpus on Hugging Face: https://huggingface.co/datasets/lifefrom/lab-report-corpus · Interactive page: https://lifefrom.ai/research/open-data/report-corpus

**Every person, laboratory and value is invented.** Every page says "SYNTHETIC — not a real lab" at the top and
carries a synthetic-document footer. Nothing here is patient data.

## What it is

- **4,000 reports** (train 3,249, validation 366, test 385), 5,331 pages, 6,371 page pictures and 4,000 PDFs.
- **165,538 answer rows** (112,863 current results, the rest earlier-date columns), 730 of them lines to abstain on; 60 markers.
- **Size:** 1.89 GB without the Kaggle zip (1.05 GB more with it).

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

| Locale (reports) | count |
|---|---|
| DE | 699 |
| ES | 673 |
| FR | 652 |
| RO | 689 |
| UK | 592 |
| US | 695 |

| Layout (reports) | count |
|---|---|
| de-a | 346 |
| de-cum | 321 |
| de-mono | 32 |
| es-a | 329 |
| es-cum | 344 |
| fr-a | 326 |
| fr-b | 326 |
| ro-a | 342 |
| ro-b | 347 |
| uk-a | 307 |
| uk-cum | 285 |
| us-a | 235 |
| us-b | 233 |
| us-cum | 227 |

| Pages per report | count |
|---|---|
| 1 | 2,697 |
| 2 | 1,275 |
| 3 | 28 |

| Condition (pictures) | count |
|---|---|
| photo | 2,203 |
| scan_clean | 1,999 |
| scan_noisy | 2,169 |

| Condition / severity (pictures) | count |
|---|---|
| photo/heavy | 427 |
| photo/light | 913 |
| photo/medium | 863 |
| scan_clean/none | 1,999 |
| scan_noisy/heavy | 429 |
| scan_noisy/light | 899 |
| scan_noisy/medium | 841 |

| Hard case | answer rows | reports |
|---|---|---|
| `abstain` | 730 | 681 |
| `ambiguous_name` | 2,078 | 1,151 |
| `calculated` | 7,900 | 3,652 |
| `censored_value` | 2,072 | 1,083 |
| `comment_in_value` | 946 | 863 |
| `critical_value` | 309 | 309 |
| `decimal_comma` | 94,313 | 2,436 |
| `dual_unit` | 5,624 | 601 |
| `flag_by_typography` | 801 | 179 |
| `footnote_method_change` | 686 | 686 |
| `missing_unit` | 1,192 | 827 |
| `pct_abs_differential` | 20,456 | 1,524 |
| `pct_abs_same_line` | 2,550 | 255 |
| `pct_abs_same_name` | 3,340 | 334 |
| `prior_date_column` | 52,675 | 1,535 |
| `split_table` | 3,031 | 792 |
| `thousands_separator` | 629 | 106 |
| `unit_change_between_dates` | 827 | 345 |

| Abstain reason (rows) | count |
|---|---|
| ambiguous_name_no_unit | 6 |
| comment_instead_of_value | 358 |
| not_calculated | 38 |
| not_performed | 136 |
| pct_abs_same_name_no_unit | 21 |
| pending | 171 |

| Part | Size |
|---|---|
| `answers/` | 135 MB |
| `data/` | 1.01 GB |
| `documents/` | 2 MB |
| `kaggle/` | 1.05 GB |
| `pages/` | 10 MB |
| `pdf/` | 713 MB |
| `tables/` | 4 MB |
| `test_answers/` | 18 MB |
| pictures: photo | 433 MB |
| pictures: scan_clean | 252 MB |
| pictures: scan_noisy | 312 MB |

Build time on a 10-core laptop: rendering 344 s (8 browser pages), pictures 303 s (8 processes).

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

| Reader | Input | Reports | Read right | Wrong | Missed | Abstained when it should | Misread | Converted wrong |
|---|---|---|---|---|---|---|---|---|
| corpus-oracle | text | 385 | 100.0% | 0.0% | 0.0% | 100.0% | 0 | 0 |
| lifefrom-local | text | 385 | 71.5% | 5.7% | 22.8% | 65.7% | 46 | 3 |
| lifefrom-local | pdf | 385 | 71.8% | 5.7% | 22.4% | 65.7% | 45 | 3 |
| lifefrom-local | scan_clean | 385 | 63.1% | 10.4% | 26.5% | 65.7% | 605 | 13 |
| lifefrom-local | scan_noisy | 385 | 26.6% | 22.6% | 50.9% | 71.6% | 2221 | 59 |
| lifefrom-local | photo | 385 | 19.8% | 20.8% | 59.5% | 74.6% | 2102 | 54 |

Plain OCR (tesseract.js 5.1.1, English) of each printed value, no parsing: the words inside the value's box against the printed text.

| condition | pictures | values | read exactly | character error rate |
|---|---|---|---|---|
| all | 1560 | 48753 | 70.8% | 17.2% |
| photo | 520 | 16251 | 53.2% | 31.3% |
| photo/heavy | 98 | 3273 | 3.9% | 85.5% |
| photo/light | 222 | 6664 | 77.8% | 9.6% |
| photo/medium | 200 | 6314 | 52.9% | 26.0% |
| scan_clean | 520 | 16251 | 92.3% | 2.8% |
| scan_clean/none | 520 | 16251 | 92.3% | 2.8% |
| scan_noisy | 520 | 16251 | 66.8% | 17.5% |
| scan_noisy/heavy | 99 | 3444 | 59.2% | 20.3% |
| scan_noisy/light | 235 | 7135 | 73.7% | 13.7% |
| scan_noisy/medium | 186 | 5672 | 62.7% | 20.5% |

`corpus-oracle` returns the answer key and scores 100%, a check that the key and the scorer agree. The LifeFrom reader is a rule-based reader for US/UK/European reports, run unmodified from its own repository; it was not tuned on this corpus, but it and the generator come from the same team. Scores are on current results; earlier-date columns are scored only for readers that return dates.

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

**Distribution.** The built corpus (PDFs, page pictures, answer keys and tables) is on Hugging Face:
https://huggingface.co/datasets/lifefrom/lab-report-corpus. Its generator, this card and the baseline results are archived
with lab-reading-bench v0.5.0 on Zenodo (doi:10.5281/zenodo.24543314); that archive holds the code, not the built files,
and `corpus/scripts/build.sh` rebuilds the corpus from it. Licence CC BY 4.0 (data), MIT (code).

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
- **French, Spanish, Romanian and German wording** was written by us and has not been reviewed by a native-speaking
  laboratory professional.
- **The test key is separate, not secret:** the test PDFs have a text layer. For a held-out leaderboard, generate an
  unreleased seed.
- **Fonts:** pictures and boxes were rendered on macOS fonts; a rebuild elsewhere gives the same key and slightly
  different pixels.
- **Same authors.** The generator and the LifeFrom reader measured below were written by the same team; their blind
  spots may coincide.

## Citation

LifeFrom and Julian Caraulani (2026). lab-report-corpus: synthetic laboratory reports with a computed answer key for
document AI and OCR. Version 1.0.0. CC BY 4.0. https://huggingface.co/datasets/lifefrom/lab-report-corpus. Released with
lab-reading-bench v0.5.0, doi:10.5281/zenodo.24543314 (all versions: doi:10.5281/zenodo.24341108); the corpus has no DOI
of its own.

Built on: Caraulani J. lab-reading-bench v0.4.1. doi:10.5281/zenodo.24350904.
