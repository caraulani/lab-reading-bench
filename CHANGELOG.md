# Changelog

## 0.1.0 (17 Nov 2026)
- Generator: synthetic lab reports with a computed answer key. 41 markers; US, UK, German, Spanish and Romanian lab styles; conventional and SI units; decimal points and commas; flag and range conventions; layout noise; text lines, CSV and FHIR.
- `makeVariants`: the same results printed several ways, for format invariance.
- `images.mts`: printed reports as PDFs, clean page images and phone-style photos.
- Harness `run.mts`: per-result scoring (ok, wrong, miss, unit, unconverted), the lab's flag, the range, the date, critical-value recall, format invariance, Wilson intervals, gates, parallel reading.
- `readers/openrouter.mts`: any model through OpenRouter, on text or images, with replies cached and a spending and account-balance guard.
- Results: the LifeFrom rule-based reader before and after its fixes (seeds 1 to 3), and an exploratory model run (seed 4).
- `PREREGISTRATION.md` (timestamped) for the model tests on seeds 5 and 6.
