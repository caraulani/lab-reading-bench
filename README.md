# lab-reading-bench

*By [Julian Caraulani](https://github.com/caraulani) ([ORCID 0009-0006-3889-3563](https://orcid.org/0009-0006-3889-3563)), November 2026. Code MIT, results and write-up CC BY 4.0 ([LICENSING.md](LICENSING.md)). The model tests are preregistered: [PREREGISTRATION.md](PREREGISTRATION.md), timestamped before any model read the test reports.*

Synthetic lab reports with a **computed answer key**. The benchmark measures how well a reader (rule-based software or an AI model) gets the values, units, flags and critical results off a lab report, across lab formats and languages.

Reading the report is the step everything else depends on. An explanation, a trend or an alert built on a misread value is wrong however good it sounds. Reading can also be measured exactly: each report here is generated from known true values and then printed the way real labs print, so the correct reading of every row is known. No human or model grades anything.

## Key findings (preregistered test, 18 Nov 2026)
1. **When models read lab reports as text, every wrong value was a unit conversion.** That was 168 of 168 across four models (Claude Haiku 5.5, GPT-5.6 Luna, DeepSeek V4 Flash, Llama 4 Maverick). No model misread a printed number. They got the arithmetic wrong turning SI units into US units, for example magnesium ten times too high, or triglycerides converted with the cholesterol factor. The number looked plausible and nothing marked it.
2. **Models aren't format-invariant.** For the same results printed five ways, the share of markers read right every time was:
   - rule-based reader: 99.6%;
   - Claude Haiku 5.5: 99.5%;
   - GPT-5.6 Luna: 98.2% (−1.4 points, 95% CI −2.5 to −0.5);
   - Llama 4 Maverick: 88.5%;
   - DeepSeek V4 Flash: 48.6%.
3. **Photos break the on-device OCR pipeline, not the vision models.** From clean page images to phone-style photos, OCR followed by rules dropped 4.6 points (95% CI −7.3 to −1.9), with false critical alarms. The vision models didn't move measurably.
4. **Critical values are where failures matter.** DeepSeek V4 Flash caught 44 of 60 critical values (mostly through empty replies) and raised 7 false critical alarms. Every other model caught all 60.

The practical conclusion is a division of labour. Deterministic code should do the reading and the unit arithmetic, which are exact and cheap. A strong vision model should handle photos. The language model should explain, never convert. The details, the intervals and every raw reply are below and in `results/` and `cache/`.

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

**Hypotheses**

| | Prediction | Result |
|---|---|---|
| H1 | At least half of each model's wrong values on text are unit conversions | **Supported:** 100% for all four models with ≥5 wrong values (Luna 18/18, DeepSeek 26/26, Llama 120/120; Haiku 4/4) |
| H2 | Every model less format-invariant than the rule-based reader; at least one below 99% | **Supported for Luna, Llama and DeepSeek. Undecided for Haiku** (−0.1 points, CI −0.8 to +0.6) |
| H3 | Vision models drop less from clean to photo than OCR + rules | **Supported on seed 5. Same direction, undecided on held-out seed 6** (the OCR drop's interval crosses zero) |
| H4 | At least one model misses a critical value or raises a false critical | **Supported:** DeepSeek V4 Flash (16 missed, 7 false) |

**What we changed in our own product because of it.** The image tier showed that LifeFrom's photo path read "µmol/L" as "pmol/L". A creatinine of 149 µmol/L then stayed unconverted and raised a false critical alarm. We fixed the OCR unit handling, which took wrong values on clean images from 2.7% to 0.6% and false critical alarms from 10 to 1. The 80% clean-image accuracy above is after that fix.

Not yet run (step 3, budget permitting): Gemini 3.8 Flash and Claude Sonnet 5.5 on text, and frontier models (GPT-5.6 Sol and Terra, Claude Opus) not at all.

## What the reports vary
- **Five lab styles:** US, UK, German, Spanish and Romanian, with their own marker names, column orders and headers (patient lines, dates, phone numbers and notes full of numbers that aren't results).
- **Units:** conventional (mg/dL) or SI (mmol/L, µmol/L), and each country's blood-count spellings (K/uL, ×10⁹/L, Tsd/µl, mil/mm³, mii/µL …).
- **Decimals:** a point or a comma. "2,240" is 2240 on a US report and 2.24 on a German one.
- **Flags:** H/L, HH/LL, HIGH/LOW, ↑↓, +/−, `*` (abnormal without a direction), `(H)`, or none. They may come right after the value or at the end of the line.
- **Ranges:** `a-b`, `[a - b]`, `(a - b)`, `a – b`, `< b`, `bis b`, `hasta b`, `> OR = a`.
- **Layout noise:** dotted leaders, colons, two results side by side, names wrapped onto their own line, spaced units ("mg / dL"), values glued to units.
- **Formats:** printed text lines, CSV exports (comma or semicolon, quoted cells, separate low/high columns), and FHIR R4 bundles (LOINC and UCUM, with or without the text name).
- **The truth:** 41 common markers. About 70% of values are in range, 25% outside, and 5% at critical levels, kept clear of the threshold so rounding can't move them across it.

Everything is drawn from one seeded generator, so a seed always gives the same reports. Conversion factors are the published ones, written out in `generate.mts`, so a reader with a wrong factor produces wrong values here.

## What it scores
For every row on every report:

| Outcome | Meaning |
|---|---|
| ok | the right value in the expected units |
| wrong | a different number from the one printed, with nothing telling the reader. The worst outcome. |
| miss | the row was not read |
| unit | the right number, but the unit not recognised |
| unconverted | an SI value left in SI where the reader normally converts |

It also scores the lab's flag, the reference range, the collection date, and rows read that are not on the report. Most important of all is **critical-value recall**: whether a value at a level a lab phones through (`critical.mts`) is still critical after reading. Rates carry Wilson 95% intervals. `thresholds.json` holds the gates used as launch criteria.

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

| | Before | After, seed 1 (tuned on) | After, seeds 2 and 3 (held out, 5,000 reports each) |
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

## Limits
- The generator and the reader fixes were written by the same team. A perfect score shows the reader handles every layout we thought of, not every layout that exists. Held-out seeds guard against tuning to one sample, not against blind spots the generator and the reader share.
- The reports are text. Reading a PDF's text layer, a scan or a phone photo adds errors this version doesn't test yet.
- 41 markers and five lab styles. Real reports carry hundreds of markers and many more formats.

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
