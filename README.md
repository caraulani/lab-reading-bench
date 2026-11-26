# lab-reading-bench

*By [Julian Caraulani](https://github.com/caraulani) ([ORCID 0009-0006-3889-3563](https://orcid.org/0009-0006-3889-3563)), November 2026. Code MIT, results and write-up CC BY 4.0 ([LICENSING.md](LICENSING.md)). The model tests are preregistered: [PREREGISTRATION.md](PREREGISTRATION.md), committed before any model read the test reports. Its OpenTimestamps proof (`PREREGISTRATION.md.ots`) was upgraded on 26 Nov 2026 to Bitcoin attestations: the file's SHA-256 is committed in blocks 976320, 976325 and 976355, the earliest mined at 20:48 UTC on 17 Nov 2026, before the first seed-5 model run on 18 Nov (`ots verify` needs a Bitcoin node; the three blocks' Merkle roots were checked against a public block explorer). Deviations from it are listed under "Deviations from the preregistration" below.*

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.24341108.svg)](https://doi.org/10.5281/zenodo.24341108) [![CI](https://github.com/caraulani/lab-reading-bench/actions/workflows/ci.yml/badge.svg)](https://github.com/caraulani/lab-reading-bench/actions/workflows/ci.yml) [![License: MIT](https://img.shields.io/badge/code-MIT-black.svg)](LICENSE) [![Results: CC BY 4.0](https://img.shields.io/badge/results-CC%20BY%204.0-black.svg)](LICENSE-CC-BY-4.0)

Synthetic lab reports with a **computed answer key**. The benchmark measures how well a reader (rule-based software or an AI model) gets the values, units, flags and critical results off a lab report, across lab formats and languages.

Reading the report is the step everything else depends on. An explanation, a trend or an alert built on a misread value is wrong however good it sounds. Reading can also be measured exactly: each report here is generated from known true values and then printed the way real labs print, so the correct reading of every row is known. No human or model grades anything.

## Key findings (preregistered test, 18 Nov 2026)
1. **The two strongest models tested made no mistakes in what they read.** On text (the first 30 sets, 150 reports), Claude Sonnet 5.5 read all 150 and Gemini 3.8 Flash read 143 before its preregistered cap stopped it; neither returned a wrong value, and both caught 45 of 45 critical values. Only Gemini was run on images: it read 87 of 97 clean images and 84 of 97 phone-style photos (seed 5) before its caps, with no wrong value and every critical value in them caught. Sonnet was not run on images. The unread reports are reported, not imputed.
2. **The smaller models' mistakes were silent unit conversions.** The task asked every model to return each value in a stated conventional unit, so a report printed in SI units required a conversion; errors could only be conversions where the task demanded one, and reading and converting were scored together. On text, every wrong value was on a result that needed converting: 168 of 168 across four models (Claude Haiku 5.5, GPT-5.6 Luna, DeepSeek V4 Flash, Llama 4 Maverick). No model misread a printed number. They got the arithmetic wrong turning SI units into US units, for example magnesium ten times too high, or triglycerides converted with the cholesterol factor. The number looked plausible and nothing marked it.
3. **Smaller models aren't format-invariant.** For the same results printed five ways, the share of markers read right every time was:
   - rule-based reader: 99.6%;
   - Claude Haiku 5.5: 99.5%;
   - GPT-5.6 Luna: 98.2% (−1.4 points, 95% CI −2.5 to −0.5);
   - Llama 4 Maverick: 88.5%;
   - DeepSeek V4 Flash: 48.6%.
4. **Photos break the on-device OCR pipeline, not the vision models.** ("Phone-style photo" here is a mild rendering, not a physical photo simulation: the page tilted by at most 1.5°, a 3° perspective, a 0.6 px blur, a gradient shadow and JPEG quality 62; see Limits.) From clean page images to these photo-style images, OCR followed by rules dropped 4.6 points (95% CI −7.3 to −1.9), with false critical alarms. The vision models didn't move measurably.
5. **Critical values are where failures matter.** DeepSeek V4 Flash caught 44 of 60 critical values (mostly through empty replies) and raised 7 false critical alarms. Every other model caught all of them.

The practical conclusion: choose the model by measurement, not by price, because the cheap models failed in exactly the place that matters. Either use a strong model, or let deterministic code do the reading and the unit arithmetic (exact and free) and let the model explain. For photos, a strong vision model beats on-device OCR. The details, the intervals and every raw reply are below and in `results/` and `cache/`.

## Preregistered test, step 2 (seed 5; held-out images on seed 6)
Hypotheses, readers and analysis were fixed in [PREREGISTRATION.md](PREREGISTRATION.md) and timestamped before any model read these reports. Text: 60 sets of results × 5 printings = 300 reports, 4,950 results, 60 critical. Images: 97 printed reports as clean page images and phone-style photos (1,792 results, 31 critical), plus 43 held-out reports on seed 6.

**Text (300 reports)**

| Reader | Correct | Wrong | Missed | Critical caught | False critical | Same answer in all 5 printings | Cost |
|---|---|---|---|---|---|---|---|
| Rule-based reader | 99.9% | 0 | 0.08% | 60/60 | 0 | 99.6% | none |
| Claude Haiku 5.5 | 99.9% | 4 (0.08%) | 0.02% | 60/60 | 0 | 99.5% | $0.30 |
| GPT-5.6 Luna | 99.6% | 18 (0.4%) | 0 | 60/60 | 0 | 98.2% | $0.39 |
| Llama 4 Maverick | 97.5% | 120 (2.4%) | 0.06% | 60/60 | 0 | 88.5% | $0.32 |
| DeepSeek V4 Flash | 86.4% | 26 (0.5%) | 12.7% | 44/60 | 7 | 48.6% | $0.25 |

DeepSeek V4 Flash returned 17 empty replies out of 300. As preregistered, each counts as every result on that report missed. Qwen 3.5 (397B) is not in the table: its reasoning made each call about 20 times dearer than Haiku's, and its preregistered budget stopped it after 50 of 300 reports.

**Images (seed 5: 97 reports; correct, with wrong values in brackets)**

| Reader | PDF | Clean image | Phone photo | Photo minus clean |
|---|---|---|---|---|
| Rule-based reader (PDF text layer; OCR, Tesseract English, for images) | 99.9% (0) | 80.0% (10) | 75.4% (42) | −4.6 points (95% CI −7.3 to −1.9) |
| Claude Haiku 5.5 | | 99.9% (0) | 100% (0) | +0.1 (−0.2 to +0.3) |
| GPT-5.6 Luna | | 99.4% (10) | 99.6% (6) | +0.2 (−0.3 to +0.7) |
| Llama 4 Maverick | | 96.1% (59) | 95.5% (69) | −0.6 (−1.9 to +0.7) |

Held-out seed 6 (43 reports) points the same way: OCR + rules 83.4% → 81.3% (−2.1 points, CI −5.8 to +1.6); Haiku, Luna and Llama within ±0.4 points. On images, most wrong values are still conversions (Luna 10 of 10 clean, 4 of 6 photo; Llama 57 of 59 and 62 of 69). The photo adds the first real misreads of printed numbers.

**Correction (26 Nov 2026): what the rule-based image rows measure.** The OCR + rules rows above fed the rules Tesseract's own text output, split by line. LifeFrom's app did not read photos that way: it rebuilt lines from word positions, and on tilted photos that put a test name and the next row's value on one line. Re-run with the app's path as it was, the same 97 photos gave 751 values right (not 1,351), 350 wrong and 33 false critical alarms; clean images were unaffected. The published rows therefore describe a harness pipeline, not the app at the time. The app now builds photo lines from Tesseract's line grouping with the tilt removed (1,366 right, 64 wrong, 4 false alarms on the same photos). Model rows are unaffected. Details and both pipelines: `results/cluster-bootstrap.md` and the reader notes in `readers/`.

**Hypotheses**

| | Prediction | Result |
|---|---|---|
| H1 | At least half of each model's wrong values on text are unit conversions | **Supported:** 100% for all four models with ≥5 wrong values (Luna 18/18, DeepSeek 26/26, Llama 120/120; Haiku 4/4) |
| H2 | Every model less format-invariant than the rule-based reader; at least one below 99% | **Supported for Luna, Llama and DeepSeek. Undecided for Haiku** (−0.1 points, CI −0.8 to +0.6) |
| H3 | Vision models drop less from clean to photo than OCR + rules | **Supported on seed 5. Same direction, undecided on held-out seed 6** (the OCR drop's interval crosses zero) |
| H4 | At least one model misses a critical value or raises a false critical | **Supported:** DeepSeek V4 Flash (16 missed, 7 false) |

**Deviations from the preregistration.**
- **The rule-based reader was changed after its seed-5 errors were seen.** Its OCR unit handling ("µmol/L" read as "pmol/L") was fixed after the seed-5 image results showed the error, and the seed-5 image numbers for the rule-based reader in the tables are from the fixed reader. The preregistration named this reader as a reference point tuned on the seed-5 image set, but the fix itself came after those images were scored, so the rule-based reader's seed-5 image results, and the H3 comparison that uses them, are not a preregistered test of that reader. The repository history does not show whether the seed-6 images were read before or after the fix, so the seed-6 rule-based numbers should not be counted as held out either.
- **Steps 2 and 3 were cut by budget:** Qwen 3.5 stopped after 50 of 300 reports; Gemini 3.8 Flash read 143 of the 150 step-3 text reports, 87 of 97 clean and 84 of 97 photo images on seed 5, and about half of the seed-6 images, so its 100% is over what it read, not over the full set; Sonnet 5.5 was not run on images (as reported above). Unread reports are reported, not imputed.

**What we changed in our own product because of it.** The image tier showed that LifeFrom's photo path read "µmol/L" as "pmol/L". A creatinine of 149 µmol/L then stayed unconverted and raised a false critical alarm. We fixed the OCR unit handling, which took wrong values on clean images from 2.7% to 0.6% and false critical alarms from 10 to 1. The 80% clean-image accuracy above is after that fix.

## Preregistered test, step 3 (seed 5, first 30 sets; images as in step 2)

| Reader | Text: correct | Wrong | Critical caught | Same answer in all 5 printings | Clean image | Photo | Cost |
|---|---|---|---|---|---|---|---|
| Rule-based reader (same 150 reports) | 100.0% | 0 | 45/45 | 99.8% | 80.0% | 75.4% | none |
| Claude Sonnet 5.5 | 100% | 0 | 45/45 | 100% | (not run) | (not run) | $2.27 |
| Gemini 3.8 Flash (read 143 of 150 text reports, 87 of 97 clean and 84 of 97 photo images) | 100% of what it read | 0 | 45/45 | 100% | 100% (0 wrong) | 100% (0 wrong) | $4.21 |

Gemini 3.8 Flash's preregistered caps stopped it before it finished: 7 of 150 text reports, 10 of 97 clean and 13 of 97 photo images (seed 5), and about half of the held-out seed-6 images were not read. These are reported, not imputed. Everything it did read was correct, including all 30 critical values in the images it read. Sonnet on images was cut from the plan for cost.

**Hypotheses, updated with step 3.** H2 is **not supported for Sonnet 5.5 and Gemini 3.8 Flash.** Both were at 100% against the rules' 99.8% on the same reports, so they matched or beat the rules, though the intervals overlap. H3 holds for Gemini (photo minus clean: 0 points). H1 and H4 are unchanged: neither model made a wrong value or missed a critical one.

Not tested: frontier models (GPT-5.6 Sol and Terra, Claude Opus).

## Statistics
Two kinds of interval are used, and they answer different questions.

- **Wilson and Newcombe (row-level).** Every rate in `results/*.md` carries a Wilson 95% interval, and every difference quoted above (for example photo minus clean, −4.6 points, 95% CI −7.3 to −1.9) is Newcombe's hybrid score interval (method 10), built from the two Wilson intervals. Both treat each result as an independent draw and the two arms of a difference as independent samples. `npx tsx stats/differences.mts` recomputes every one of them from the counts in `results/` (after re-scoring the cached replies offline and checking they give the published totals); all reproduce.
- **Cluster bootstrap (set-level).** Results on one report are not independent, and the five printings of one set of results share its values. `stats/bootstrap.mts` resamples whole sets of results (10,000 resamples, seed 20261126, percentile intervals), pairing the arms of each comparison; [results/cluster-bootstrap.md](results/cluster-bootstrap.md) has every interval, with report-level ones beside them. Headline set-level intervals, seed 5 text:

| Reader | Correct | Wrong | Same answer in all 5 printings |
|---|---|---|---|
| Rule-based reader | 99.92% (99.81 to 100.00) | 0 | 99.6% (99.1 to 100.0) |
| Claude Haiku 5.5 | 99.90% (99.80 to 99.98) | 0.081% (0.019 to 0.166) | 99.5% (99.0 to 99.9) |
| GPT-5.6 Luna | 99.64% (99.48 to 99.79) | 0.36% (0.21 to 0.52) | 98.2% (97.4 to 98.9) |
| Llama 4 Maverick | 97.50% (96.93 to 97.99) | 2.44% (1.97 to 2.98) | 88.5% (86.2 to 90.6) |
| DeepSeek V4 Flash | 86.4% (81.7 to 91.0) | 0.53% (0.22 to 0.93) | 48.6% (36.1 to 62.5) |

  Format invariance, model minus rules: Haiku −0.1 points (−0.6 to +0.5), Luna −1.4 (−2.3 to −0.5), Llama −11.1 (−13.3 to −9.1), DeepSeek −51.0 (−63.5 to −37.1). Photo minus clean, seed 5: Haiku +0.06 (0.00 to +0.19), Luna +0.22 (−0.27 to +0.66), Llama −0.61 (−1.56 to +0.39). The conclusions above do not change; DeepSeek's intervals widen most, because its empty replies take out whole reports. A rate of 0 or 100% has no bootstrap spread; for those the Wilson interval is the one to use. The rule-based reader's image runs (OCR + rules) cannot be bootstrapped: its code is not in this repository, and today's LifeFrom code does not re-make those 17-18 Nov runs, so only their published totals and Newcombe intervals exist.

## What the reports vary
- **Five lab styles:** US, UK, German, Spanish and Romanian, with their own marker names, column orders and headers (patient lines, dates, phone numbers and notes full of numbers that aren't results).
- **Units:** conventional (mg/dL) or SI (mmol/L, µmol/L), and each country's blood-count spellings (K/uL, ×10⁹/L, Tsd/µl, mil/mm³, mii/µL …).
- **Decimals:** a point or a comma. "2,240" is 2240 on a US report and 2.24 on a German one.
- **Flags:** H/L, HH/LL, HIGH/LOW, ↑↓, +/−, `*` (abnormal without a direction), `(H)`, or none. They may come right after the value or at the end of the line.
- **Ranges:** `a-b`, `[a - b]`, `(a - b)`, `a – b`, `< b`, `bis b`, `hasta b`, `> OR = a`.
- **Layout noise:** dotted leaders, colons, two results side by side, names wrapped onto their own line, spaced units ("mg / dL"), values glued to units.
- **Formats:** printed text lines, CSV exports (comma or semicolon, quoted cells, separate low/high columns), FHIR R4 bundles (LOINC and UCUM, with or without the text name), and HL7 v2.5.1 ORU^R01 messages (`--format hl7`), the format lab systems send results to EHRs in: OBX value, unit, range and flag, coded in LOINC on most messages and with a lab's local codes on the rest.
- **The truth:** 41 common markers. About 70% of values are in range, 25% outside, and 5% at critical levels, kept clear of the threshold so rounding can't move them across it.

Everything is drawn from one seeded generator, so a seed always gives the same reports. Conversion factors are the published ones, written out in `generate.mts`, so a reader with a wrong factor produces wrong values here. Each factor is listed with a source in [docs/conversion-factors.md](docs/conversion-factors.md).

## What it scores
For every row on every report:

| Outcome | Meaning |
|---|---|
| ok | the right value in the expected units |
| wrong | a different number from the one printed, with nothing telling the reader. The worst outcome. |
| miss | the row was not read |
| unit | the right number, but the unit not recognised |
| unconverted | an SI value left in SI where the reader normally converts |

It also scores the lab's flag, the reference range, the collection date, and rows read that are not on the report. Most important of all is **critical-value recall**: whether a value at a level a lab phones through (`critical.mts`; thresholds and their source in [docs/critical-values.md](docs/critical-values.md)) is still critical after reading. Rates carry Wilson 95% intervals (see "Statistics" below for intervals that allow for clustering). `thresholds.json` holds the gates used as launch criteria.

```
npm i
npx tsx run.mts --reader readers/empty.mts                       # 2,000 reports, seed 1
npx tsx run.mts --reader readers/your-reader.mts --n 5000 --seed 2
npx tsx run.mts --reader readers/your-reader.mts --gate          # exit 1 below a threshold
npx tsx run.mts --reader readers/your-reader.mts --dump r1-17    # one report, line by line
```

A reader is any module with a default export from a report to the rows it read (`readers/README.md`). Each run writes a report to `results/` with outcomes by language, format, layout and marker, and the failures grouped most common first, with the exact lines. That makes it a bug list as much as a score.

## First results: a rule-based reader, before and after (17 Nov 2026)
The first system measured is the rule-based reader behind [LifeFrom](https://lifefrom.ai)'s free lab-report reader, which runs on the person's device. Its code is not part of this repository.

| | Before | After, seed 1 (fixes made on it) | After, seeds 2 and 3 (5,000 reports each; checked after the fixes, but not held out: the preregistration counts the reader as tuned on seeds 1 to 4) |
|---|---|---|---|
| Rows read correctly | 78.1% | 99.98% | 99.96% |
| Wrong values | 3.8% (1,483 rows) | 0 | 0 |
| Missed rows | 10.2% | 0.02% | 0.04% |
| Critical values caught | 95.6% (387/405) | 100% (405/405) | 100% (2,314/2,314) |
| False critical alarms | 224 | 0 | 0 |

The before run found:
- **Decimal commas.** A German creatinine of "2,240 mg/dl" was read as 2240, a false critical alarm. The fix decides per report whether commas are decimals.
- **A value ending in 24 with a high flag** ("Calcium 3.24 H", "Glucose 124 H") looked like "24 h", so the line was dropped as a 24-hour urine test.
- **German uric acid ("Harnsäure") and urea ("Harnstoff")** were dropped as urine tests, because "Harn" means urine.
- **HbA1c was read as 1**, from the "1" inside "(HbA1c)" in the printed name.
- **Arrow, star and +/− flags were never read**, and nor were flags printed after the range.
- **Unconverted units.** UK haematocrit in L/L and MCHC in g/L were left unconverted, and about 30 unit spellings were unknown.
- **Missing names.** About 60 Spanish, German and Romanian printed names were missing.
- **CSV and dates.** Quoted CSV names were split at their commas, and UK dates were read month-first.

Full reports: `results/`.

## AI models on the same reports (17 Nov 2026)
Each model got the report as printed (text, CSV or FHIR JSON) and the marker list with the unit to report each one in (`readers/openrouter.mts`, temperature 0), and returned JSON. 80 reports on a fresh seed (4): 1,634 results, 17 of them at critical levels. Every reply is in `cache/`, so the scores can be checked and re-scored without calling the models again.

| Reader | Read correctly | Wrong values | Critical values caught | Cost for 80 reports |
|---|---|---|---|---|
| Claude Haiku 5.5 | 100% | 0 | 17/17 | $0.09 |
| Claude Sonnet 5.5 | 100% | 0 | 17/17 | $1.29 |
| GPT-5.6 Luna | 99.8% | 4 | 17/17 | $0.08 |
| Rule-based reader (above, same seed) | 100% | 0 | 17/17 | none, on the device |

- **Every wrong value is a silent unit conversion on a UK report in SI units.** In each case the model returned a plausible-looking number in the wrong place: magnesium 0.82 mmol/L as 19.9 mg/dL (ten times too high), triglycerides converted with the cholesterol factor (1.47 mmol/L as 57 mg/dL instead of 130), and free T3 4.5 pmol/L as 6.9 pg/mL instead of 2.9.
- **The errors aren't stable.** An earlier run of GPT-5.6 Luna on the same reports, at temperature 0, made 8 such errors (also B12 multiplied instead of divided, phosphate ten times too high, HbA1c with the wrong formula), in partly different rows. A model's conversion error can't be fixed once and assumed gone.
- 80 reports and 17 critical values is a small sample: a 17/17 critical recall only shows the true rate is above about 82% (Wilson 95%). Gemini 3.5 Flash was stopped by the spending cap after 18 reports (no errors in 380 results) and is left out.

Taken together: on clean text, strong models read reports as accurately as a careful rule-based reader. The risk is unit arithmetic in smaller models, which is exactly where deterministic code is cheap and exact. "Rules read and convert, the model explains" removes the failure seen here.

## HL7 v2 tier (18 Nov 2026)
The same reports can be sent as HL7 v2 ORU^R01 messages (`--format hl7`) with the same answer key. Adding the tier found one more bug in the rule-based reader: a value of 24 with a high flag ("Bilirubin 24 H") was taken for "24 hours", treated as a 24-hour urine test, and dropped. It's fixed: only "24 hour", "24 hr", or "24 h" followed by "urine" or "collection" counts as hours now. After the fix, the rule-based reader read every HL7 result correctly on seeds 1, 2 and 3: 236,603 values, 0 wrong, 0 missed, all 2,719 critical values (results/*-hl7-seed1 to seed3). The fix was made with seed 1 in view, so these are not held-out numbers.

Models on HL7 (seed 4, 80 messages, exploratory, not preregistered):
- Claude Haiku 5.5 and Claude Sonnet 5.5 read every value they returned correctly.
- GPT-5.6 Luna made 6 wrong values, all unit conversions, as on text.
- Not every message was read: some calls were refused because the account ran low on credit, and Sonnet hit its cap. The counts are in results/*-hl7-seed4.

## Limits
- The generator and the reader fixes were written by the same team. A perfect score shows the reader handles every layout we thought of, not every layout that exists. Extra seeds guard against overfitting one sample, not against blind spots the generator and the reader share. For the rule-based reader, seeds 1 to 4 are not held out (see PREREGISTRATION.md). The only held-out sets are seed 5 for the models and the seed 6 images.
- PDFs, page images and phone-style photos are covered (from v0.2.0), but they are rendered from the same synthetic text. The "photo" condition of v0.2.0 to v0.4.x is mild: a tilt of at most 1.5°, `rotateX(3deg)` perspective, a 0.6 px CSS blur, a gradient shadow and JPEG quality 62 (`images.mts`). It is not a simulation of a hand-held phone photo. Real scans, handwriting, multi-page hospital printouts and poor phone photos are not tested yet. The lab-report-corpus (below) adds a stronger photo simulation.
- **The v0.4.x generator draws each value independently.** Results that are tied in real reports are not tied here: a creatinine of 149 µmol/L can be printed beside an eGFR of 107, a transferrin saturation does not follow from iron and TIBC, and total cholesterol does not follow from LDL, HDL and triglycerides. Reference intervals are not sex-specific, so a female report can carry the male testosterone interval. This does not affect the reading scores (the key is computed from what is printed) but the reports are not clinically plausible as a whole. The corpus generator fixes this (corpus/METHODS.md §5).
- **Lab names in the v0.4.x reports** ("Riverside Pathology", "Summit Diagnostics" and others) are invented but sound like real laboratories, and the US test names follow common US commercial-lab printouts. They are kept unchanged so that published results stay reproducible. Corpus reports use unmistakably invented names and print "SYNTHETIC — not a real lab" on every page.
- 41 markers and five lab styles. Real reports carry hundreds of markers and many more formats.
- **The rule-based reader is closed.** Its code is part of the LifeFrom app and is not in this repository, so others cannot re-run it; treat it as a closed baseline. Its text results re-make exactly from the LifeFrom code of 26 Nov 2026 (`readers/lifefrom-local.mts`); its image results do not (see Statistics). Every model result can be re-scored from `cache/` without calling a model.
- **One run per model.** Each model read each report once, at temperature 0. Run-to-run variation is not measured for the preregistered test; the seed-4 GPT-5.6 Luna repeat above (8 and then 4 wrong values) shows it exists.

## lab-report-corpus (v1.0.0 of the corpus, 25 Nov 2026)
`corpus/` extends the generator into a document-AI and OCR dataset: 4,000 fictional reports in US, UK, German, Spanish,
Romanian and French conventions, 14 layouts, born-digital PDFs and page pictures (clean scan, noisy scan, phone photo
with perspective, blur, shadow and JPEG), multi-page and cumulative reports, internally consistent values, and an answer
key with boxes and tagged hard cases. See [corpus/README.md](corpus/README.md) and [corpus/METHODS.md](corpus/METHODS.md). The full corpus is on Hugging Face: https://huggingface.co/datasets/lifefrom/lab-report-corpus.
`run.mts --corpus` scores a corpus split with this harness; `corpus/score.mts` scores the full key, including abstention
and reading separately from unit conversion. The reports above are unchanged (checked by hash in `corpus/tests/run.mts`).

## Competing interests
The author builds LifeFrom: both the rule-based reader measured here and the product it is part of, which reads people's lab reports. The benchmark, its generator and that reader's fixes were written by the same team.

## Related work
- Synthetic laboratory measurements for evaluating LLM reference-range classification (JMIR preprint, 2026): https://preprints.jmir.org/preprint/113569
- Reference-interval variability as a stress test for LLM lab interpretation (Frontiers in AI, 2025): https://www.frontiersin.org/journals/artificial-intelligence/articles/10.3389/frai.2025.1681979/full
- LLM interpretation of 100 complete blood count reports (JMIR, 2026): https://jmir.org/2026/1/e87802
- A chatbot explaining 100 Italian lab reports (Applied Sciences, 2025): https://www.mdpi.com/2076-3417/15/8/4232

We found no public benchmark covering critical-value handling together with changes in format, units and language at this scale.

## Next
- More reports per model, the larger models, and **format invariance**: the same results printed in different layouts, units and languages (does the answer change when only the printing does?).
- "AI alone" against "rules read first, AI explains".
- Rendered PDFs and phone photos, OCR noise, and layouts taken from public sample reports.
