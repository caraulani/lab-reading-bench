# Preregistration: AI models reading lab reports across formats

Julian Caraulani ([ORCID 0009-0006-3889-3563](https://orcid.org/0009-0006-3889-3563)), 17 November 2026.
Timestamped with OpenTimestamps (`PREREGISTRATION.md.ots`) and committed **before any model has read the reports below.**

## What is already known (not part of this test)
- **Exploratory run:** 80 text reports on seed 4 (Claude Haiku 5.5, Claude Sonnet 5.5, GPT-5.6 Luna, and 18 reports by Gemini 3.5 Flash). Every wrong value was a silent unit conversion. These results motivated hypothesis H1. They are reported separately and are not pooled with the test.
- **The rule-based reader** (LifeFrom's, not in this repository) was tuned on seeds 1 to 4 and on the seed 5 image set. Its results are a reference point, not part of the test.

## Test material (fixed by the generator in this commit)
- **Text:** `makeVariants(60, 5, seed 5)`. That is 60 sets of results, each printed 5 ways (the first as drawn, then once in each other lab style, as text lines, CSV or FHIR as drawn): 300 reports and 4,950 results, 60 of them at critical levels.
- **Images:** the printed-line reports among `makeVariants(24, 5, seed 5)`, which is 97 reports, rendered by `images.mts` as a clean page image (`images/clean`) and as a phone-style photo (`images/photo`).
- **Held-out images:** the same for `makeVariants(10, 5, seed 6)`.

## Readers
`readers/openrouter.mts` as committed: one fixed prompt, temperature 0, at most 8,000 output tokens, one retry, and each reply cached once. A reply without usable JSON counts as every result missed. Runs that stop for budget or account-balance reasons are reported as such and are not imputed.

The models run in budget steps, as funding allows:
- **Step 2:** `anthropic/claude-haiku-5.5`, `openai/gpt-5.6-luna`, `deepseek/deepseek-v4-flash` (text only), `meta-llama/llama-4-maverick`, and `qwen/qwen3.5-397b-a17b` on all text reports; the vision models among them also on clean and photo images.
- **Step 3:** `google/gemini-3.8-flash` and `anthropic/claude-sonnet-5.5` on the first 30 sets (150 text reports); Gemini 3.8 Flash also on images.

Any model added later is reported as an addition, with its date.

## Outcomes (as computed by `run.mts` in this commit)
- **Primary:**
  - the **wrong-value rate**: results read as a different number than printed, after conversion to the stated unit, with nothing to signal the error;
  - **critical-value recall**.
- **Secondary:**
  - **format invariance**: the share of (set, marker) pairs read right in all 5 printings;
  - **accuracy** (ok rate);
  - **miss rate**;
  - **the drop from clean images to photos**.
- **Intervals:** every rate is reported with a Wilson 95% interval. Differences between readers or conditions are reported as differences of proportions with Newcombe 95% intervals. No p-value thresholds.

## Hypotheses
- **H1 (where models go wrong):** for each model with at least 5 wrong values on text, at least half of its wrong values are on results printed in a unit that needs converting (SI to conventional).
- **H2 (format invariance):** each model's format-invariance rate on text is lower than the rule-based reader's on the same reports (99.6%), and at least one step 2 model is below 99%.
- **H3 (photos):** going from clean images to photos, the vision models' accuracy drops by less, in percentage points, than the rule-based reader behind OCR (Tesseract, English, as on LifeFrom's site) drops on the same reports.
- **H4 (critical values):** at least one model misses at least one critical value on text, or reads at least one non-critical result as critical.

A hypothesis is supported, contradicted or undecided (the intervals overlap the threshold). All three outcomes will be reported.

## What is published either way
Every model reply (`cache/`), every results file (`results/`), the generator, the harness and this document. Unexpected findings are reported as exploratory and labelled as such.
