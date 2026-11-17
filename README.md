# lab-reading-bench

Synthetic lab reports with a **computed answer key**. The benchmark measures how well a reader (rule-based software or an AI model) gets the values, units, flags and critical results off a lab report, across lab formats and languages.

Reading the report is the step everything else depends on. An explanation, a trend or an alert built on a misread value is wrong however good it sounds. Reading can also be measured exactly: each report here is generated from known true values and then printed the way real labs print, so the correct reading of every row is known. No human or model grades anything.

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
- The same reports read by AI models: value accuracy, critical-value recall, and **format invariance** (does the answer change when only the printing does?).
- "AI alone" against "rules read first, AI explains".
- Rendered PDFs and phone photos, OCR noise, and layouts taken from public sample reports.
