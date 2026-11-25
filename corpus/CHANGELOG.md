# Changelog: lab-report-corpus

## 1.0.0 (25 Nov 2026), local build, not published
- First release: 4,000 fictional reports (seed 1; 5,331 pages, 6,371 pictures, 165,538 answer rows, 60 markers) in six national conventions (US, UK, DE, ES, RO, FR) and 14 layouts,
  as born-digital PDFs and page pictures in three conditions (scan_clean, scan_noisy, photo; three severities for the
  last two), with a machine-readable answer key and 18 hard-case tags.
- Values follow NHANES Lab Percentiles 1.0.0 (reference population, by sex and age) for 42 markers; arithmetic ties
  (indices, differential, TSAT, Friedewald, CKD-EPI 2021, ACR) hold on every report.
- Train / validation / test split by report id (80/10/10: 3,249 / 366 / 385 reports); the test answer key is in `test_answers/`; one layout
  (`de-mono`) appears only in test.
- Hugging Face layout (imagefolder pictures with parquet metadata, plus parquet and JSON-lines tables) and a Kaggle zip.
- Baselines: the benchmark's scorer (`run.mts --corpus`), a full-key scorer (`corpus/score.mts`), the LifeFrom
  rule-based reader on text, PDF and pictures, and an OCR-only value check.
- The benchmark's own generated reports (lab-reading-bench v0.4.1) are unchanged, checked by hash.
