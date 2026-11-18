# Changelog

## 0.4.1 (18 Nov 2026)
- HL7 results for seeds 2 and 3 published (236,603 values in total across seeds 1 to 3).
- Wording corrected: seeds 2 and 3 are not held out for the rule-based reader (the preregistration counts it as tuned on seeds 1 to 4).
- Exploratory model results on HL7 (seed 4).
- Licences declared in CITATION.cff: MIT for code, CC BY 4.0 for data, results and write-up.

## 0.4.0 (18 Nov 2026)
- HL7 v2.5.1 ORU^R01 tier (`--format hl7`, `toHl7` in generate.mts): any report as a lab-to-EHR message, LOINC or local codes, same answer key. Added to CI.
- Rule-based reader on HL7: 100% read on seeds 1 to 3, after fixing a "24 H" read as "24 hours" bug that the tier found.

## 0.3.0 (18 Nov 2026)
- Preregistered test, step 3: Claude Sonnet 5.5 and Gemini 3.8 Flash on 150 text reports, and Gemini on clean and photo images. Neither made a wrong value. H2 is not supported for these two (they matched the rules).

## 0.2.0 (18 Nov 2026)
- Preregistered test, step 2: Claude Haiku 5.5, GPT-5.6 Luna, DeepSeek V4 Flash and Llama 4 Maverick on 300 text reports (format invariance), and the vision models on clean page images and phone-style photos (seeds 5 and 6). Qwen 3.5 was stopped by its budget and is reported as incomplete.
- The rule-based reader on PDFs and, through OCR, on images.
- Findings: every wrong value on text was a unit conversion (168 of 168); models are less format-invariant than rules; photos degrade OCR + rules, not vision models; one model misses critical values. H1, H2 and H4 supported; H3 supported on seed 5 and undecided on seed 6.
- Harness: wrong values split by conversion; empty replies cached; `OFFLINE=1` re-scores from the cache without calling any model; results named by image style; the run exits cleanly when a reader holds workers.

## 0.1.0 (17 Nov 2026)
- Generator: synthetic lab reports with a computed answer key. 41 markers; US, UK, German, Spanish and Romanian lab styles; conventional and SI units; decimal points and commas; flag and range conventions; layout noise; text lines, CSV and FHIR.
- `makeVariants`: the same results printed several ways, for format invariance.
- `images.mts`: printed reports as PDFs, clean page images and phone-style photos.
- Harness `run.mts`: per-result scoring (ok, wrong, miss, unit, unconverted), the lab's flag, the range, the date, critical-value recall, format invariance, Wilson intervals, gates, parallel reading.
- `readers/openrouter.mts`: any model through OpenRouter, on text or images, with replies cached and a spending and account-balance guard.
- Results: the LifeFrom rule-based reader before and after its fixes (seeds 1 to 3), and an exploratory model run (seed 4).
- `PREREGISTRATION.md` (timestamped) for the model tests on seeds 5 and 6.
