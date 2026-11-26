# Real-format sample reports: an external-validity check

*26 Nov 2026. Code MIT, answer key and results CC BY 4.0, as for the rest of the repository. The report PDFs are not here: they belong to their publishers. This folder holds their URLs and SHA-256 hashes and a script that fetches and checks them.*

The main benchmark's reports are generated, so the answer key is computed. That leaves one question open: does a score on generated reports carry over to reports that real labs and real lab software print? This folder is a small test of that. It uses 14 sample reports that labs, lab-software vendors and health services publish themselves, with invented patients, and an answer key typed by hand from the pages.

## What is in the set

15 reports from 14 published PDFs (Labcorp's file holds a "normal" and an "abnormal" report, scored separately), 40 pages, **411 printed numeric results**. 201 of the results are markers in the benchmark catalog (`generate.mts` `ANALYTES`).

| Report | Publisher | Language | Pages | Numeric rows | Catalog rows | Rows with a printed flag |
|---|---|---|---|---|---|---|
| labcorp-1724 | Labcorp (CD4/CD8 profile with CBC) | en-US | 2 | 26 | 8 | 2 |
| labcorp-273-normal / -abnormal | Labcorp (leukocyte alkaline phosphatase score, older layout) | en-US | 1 + 1 | 1 + 1 | 0 | 0 + 1 |
| lifeext-lcx00001 | Life Extension, Labcorp-performed (CMP, lipids, CBC, HbA1c, hs-CRP, insulin) | en-US | 4 | 52 | 31 | 3 |
| quest-drpws | Quest Diagnostics (diabetes risk panel) | en-US | 3 | 8 | 6 | 2 |
| quest-vitd-in / -out | Quest Diagnostics (vitamin D, in and out of range) | en-US | 1 + 1 | 1 + 1 | 1 + 1 | 0 + 1 |
| testingcom-cbc | Testing.com (formerly Lab Tests Online), annotated CBC example | en-US | 1 | 20 | 8 | 6 |
| labsmart-cbc | LabSmart LIS demo (Indian lab-software vendor) | en-IN | 1 | 18 | 8 | 3 |
| labsmart-preop | LabSmart LIS demo, preoperative package | en-IN | 4 | 33 | 15 | 5 |
| labsmart-sample1 | LabSmart LIS demo, 8-page multi-panel report | en-IN | 8 | 55 | 25 | 10 |
| gesundheit-at | gesundheit.gv.at, the Austrian public health portal | de-AT | 3 | 53 | 32 | 4 |
| lgm-hamburg | Laborgemeinschaft für ganzheitliche Medizin, Hamburg (Musterbefund) | de-DE | 3 | 51 | 29 | 2 |
| praxisdd-blutbild | the same Hamburg lab, a second Musterbefund (hosted by a practice) | de-DE | 4 | 83 | 37 | 10 |
| wisplinghoff-allergy | Labor Dr. Wisplinghoff, Köln (allergy Musterbefund) | de-DE | 3 | 8 | 0 | 0 |

`sources.csv` lists for each PDF the URL, publisher, date accessed, the evidence that the patient is invented ("SAMPLE REPORT", "PATIENT, SAMPLE", "Mr. Dummy", "Mustermann, Max", a sample disclaimer or watermark), a note on its terms, its SHA-256 and size. None of the PDFs carries an open licence, so none is redistributed.

What the set covers that the generator does not: real fonts and layouts, values in separate "Normal" and "Abnormal" columns, values on the line below the test name, flags printed as `+` and `-` in front of the value, Indian units (cells per cumm, platelets in lakhs per cumm, MCHC in %), Austrian `g/l` meaning 10⁹/l, haematocrit as a fraction (`l/l`), HbA1c printed twice (% and mmol/mol), whole-blood electrolytes in mg/l next to serum electrolytes in mmol/l, watermarks crossing values, and pages that are not results (lab directories, a phenotypic-age calculation, interpretation tables).

## How it was built

1. **Finding the reports.** Web searches in English, German, Spanish, French and Romanian for sample, specimen, demo and Muster reports from labs, lab-software vendors and health services. Kept: PDFs that the publisher itself presents as a sample, with an invented patient. Left out: uploads of real patients' reports (Scribd, forum posts, a hospital portal), redacted real reports (blank patient fields but a real-looking result set, e.g. Labcorp-format panels on a test-ordering site), blank templates without results (a Spanish school worksheet, a French medical-school template, two practice-software forms), a German specification printout that is a field table rather than a printed report (KBV MIO Laborbefund example), and two Mayo Clinic Laboratories samples whose server refused automated downloads. No Spanish, French or Romanian sample report with an invented patient was found, so the set is English and German only.
2. **Downloading.** Each file was saved into its own empty folder and only read as data (rendered and text-extracted with PyMuPDF). `prepare.py` repeats this: it downloads what is missing, refuses any file whose SHA-256 differs from `sources.csv`, renders every page at 150 dpi, keeps each page's text layer, and cuts the Labcorp file into its two reports.
3. **The answer key.** Every numeric result was typed by hand from the rendered pages into `keys/<report>.psv`: page, section, the test name as printed, the value as printed, unit, reference range, the lab's flag, the catalog marker if there is one, a note, and the value in the catalog unit where that is not a fixed SI factor (lakhs, cells per cumm, `l/l`). Results printed as words (negative, positive, absent, a colour, blood group), titres, interpretation tables, risk scores computed from questionnaire data, and the phenotypic-age page are not in the key. `build.mts` parses the printed values and ranges, converts catalog markers to the conventional unit with the benchmark's own SI factors, and writes `answers.jsonl`.
4. **The second check.** Each row was checked again, by machine rather than a second reading by eye: `build.mts` looks for every typed value, range, unit and test name in the page's PDF text layer (all 411 found, after one fix: LabSmart prints `U/I`, capital i, for U/l), and a position check confirmed that 409 of 411 values sit on the same printed line as their test name (the other two are the Labcorp layout that prints the value one line below the name). A third check compared each row's flag with the flag tokens printed on its line; the only differences were two rows whose value also appears, flagged, on another row (looked at on the page: the key is right).

Ambiguities and decisions, all noted in the key:
- Random and non-fasting glucose map to `glucose-fasting`, and plain CRP to `hs-crp`, because the catalog has one marker for each.
- Where HbA1c is printed in % and in mmol/mol, the catalog slug goes to the % row; the mmol/mol row is scored as printed only.
- Whole-blood potassium, sodium, calcium and magnesium (mg/l) are not catalog markers; urea (Harnstoff) is not urea nitrogen.
- Austrian `g/l` after a cell count means G/l (10⁹/l); the key says so.
- Flags are what the lab printed (`H`, `High`, `L**`, `+`, `-`). Graphic bars and coloured dots are not flags; red print with a `+` or `-` is.
- Collection dates are not scored (the Austrian report prints only a referral date).

## How it is scored

`score.mts` scores every output in `results/raw/` two ways.

- **Catalog scoring** is the benchmark's own rule (`run.mts`), on the 201 catalog rows: a value is *right* if it matches the value in the catalog unit (0.7% or half a reporting step for a converted value) with a recognised unit, *unconverted* if it is the printed SI value still labelled SI, otherwise *wrong*, or *missed*. Flags, ranges, critical values (`critical.mts`) and catalog markers returned that are not on the report are counted as in `run.mts`.
- **As-printed scoring** uses all 411 rows. The reader's rows are matched to the key's by test name (bigram similarity or containment, plus the catalog slug when the reader gives one), one-to-one. A value is right if it equals the printed number (or, for a catalog marker, the correctly converted value); unit and range are then compared with what was printed, and the flag by direction.

Intervals are Wilson 95% intervals over rows, as in the rest of the benchmark. Rows of one report move together (one layout, one bug), so the row intervals are too narrow; the "report bootstrap" column resamples whole reports (2,000 draws, fixed seed) and is the more honest interval here.

## Results

### Rule-based reader (LifeFrom's, closed; run read-only from the LifeFrom code of 25 Nov 2026, commit 90a31259 for `lib/read`)

Catalog scoring, 201 rows:

| Input | Right | Wilson 95% | Report bootstrap 95% | Wrong value | Missed | Flag right | Range right | Critical caught |
|---|---|---|---|---|---|---|---|---|
| PDF text layer | 159 (79.1%) | 73.0–84.2% | 71.1–87.9% | 4 (2.0%, Wilson 0.8–5.0%) | 34 (16.9%) | 92.0% | 100% | 1 of 1 |
| Page images, OCR (tesseract.js, English) | 126 (62.7%) | 55.8–69.1% | 49.0–77.0% | 15 (7.5%, Wilson 4.6–11.9%) | 42 (20.9%) | 91.7% | 88.2% | 0 of 1 |

As-printed scoring, 411 rows:

| Input | Value right | Wilson 95% | Report bootstrap 95% | Wrong value | Missed | Unit as printed | Range as printed | English rows | German rows |
|---|---|---|---|---|---|---|---|---|---|
| PDF text layer | 259 (63.0%) | 58.2–67.5% | 55.3–72.2% | 8 (1.9%, Wilson 1.0–3.8%) | 144 (35.0%) | 95.4% | 100% | 144/216 (66.7%) | 115/195 (59.0%) |
| Page images, OCR | 238 (57.9%) | 53.1–62.6% | 47.0–67.8% | 18 (4.4%, Wilson 2.8–6.8%) | 155 (37.7%) | 77.6% | 87.8% | 128/216 (59.3%) | 110/195 (56.4%) |

The same reader reads 99.9% of catalog rows right on the benchmark's generated PDFs (main README). On these 15 real-format reports it reads 79.1%. What the difference is made of (`results/scores.json` lists every row):

- **A `+` in front of a value loses the value.** The Austrian and Hamburg reports mark a high result with `+` before the number (`+ 8.2`, `+ 1509`). The reader takes `+ 8.2` for a qualitative "1+" and drops the number: 7 of the 8 wrong values in as-printed scoring, all of them results flagged high, so the lost values are the abnormal ones. A `-` in front (low) is read correctly.
- **Lakhs are not converted.** LabSmart prints platelets as `2.8 lakhs/cumm` (280 ×10³/µL); the reader returns 2.8, a hundred times too low, on all three LabSmart reports. Cells per cumm (`5,700 cumm`) are not read at all.
- **Separate Normal/Abnormal columns confuse it.** On the Testing.com CBC, WBC 6.9 was returned as 16 and the RBC row (1.8) was given the slug for RBC folate.
- **Allergen codes are taken for hormones.** On the allergy report, `t3 Birke 5.00` and `e1 Katzenschuppen 5.00` came back as total T3 and estrone (not catalog markers, so not counted against it in catalog scoring).
- **Most misses are markers the reader does not know** (CD4/CD8 counts, semen analysis, glutathione, whole-blood minerals, allergen IgE, coagulation times) and some it does: total cholesterol, total protein and alkaline phosphatase on the Hamburg reports, phosphate on the Austrian one, TSH printed as "Thyroidea Stimulierendes Hormo".
- **OCR drops decimal points.** From page images, haemoglobin 6.5 g/dL was read as 65, haematocrit 19.5% as 195, creatinine 0.9 and 0.5 mg/dL as 9 and 5, uric acid 4.5 as 45, MCH 21.3 as 213; on the Quest report the reference limits were read in place of the values (HDL 81 as 46, triglycerides 45 as 150). The one critical value in the set (haemoglobin 6.5 g/dL) was caught from the PDF and lost from the image.

### AI models: not run

Claude Haiku 5.5 (`anthropic/claude-haiku-5.5`) and GPT-5.6 Luna (`openai/gpt-5.6-luna`) were to read every report from its page images, with the benchmark's own prompt (`MODE=catalog`, the prompt of `readers/openrouter.mts`, copied verbatim) and with a transcription prompt (`MODE=printed`: every numeric result exactly as printed, no conversion). The OpenRouter key available on 26 Nov 2026 was rejected as expired, so no model call was made and nothing was spent. `run-models.mts` is ready and its parsing and scoring path was tested end to end on a hand-written cached reply (removed afterwards). With a working key:

```
OPENROUTER_API_KEY=… MODEL=anthropic/claude-haiku-5.5 MODE=catalog BUDGET_USD=8 npx tsx realworld/run-models.mts
OPENROUTER_API_KEY=… MODEL=anthropic/claude-haiku-5.5 MODE=printed BUDGET_USD=8 npx tsx realworld/run-models.mts
OPENROUTER_API_KEY=… MODEL=openai/gpt-5.6-luna      MODE=catalog BUDGET_USD=8 npx tsx realworld/run-models.mts
OPENROUTER_API_KEY=… MODEL=openai/gpt-5.6-luna      MODE=printed BUDGET_USD=8 npx tsx realworld/run-models.mts
npx tsx realworld/score.mts
```

That is 60 calls (15 reports, two prompts, two models), 40 page images per pass; at both models' listed prices it should cost well under a dollar. Replies are cached in `realworld/cache/` and spend is added up across runs in `realworld/cache/spend.json`, stopping at `BUDGET_USD`.

## Limits

- **Small n.** 15 reports, 411 rows, 201 catalog rows, one critical value. Rates move by several points when one report is added or removed; the report-bootstrap intervals above are 15 to 30 points wide. Treat this as a check of whether the synthetic scores carry over, not as a measurement of real-world accuracy.
- **Not independent.** Three reports come from one LIS vendor (LabSmart), two from one Hamburg lab, three from Labcorp layouts and three from Quest. The set has 10 distinct layouts at most.
- **Sample reports are not real-world noise.** They are born-digital, clean, chosen by their publishers to look good, and mostly normal results. There are no scans, phone photos, handwriting, faxes, stamps over values, cumulative multi-date reports or truly unusual layouts. The "image" input here is a clean 150-dpi render, the easiest case for OCR.
- **English and German only.** No Spanish, French or Romanian sample report with an invented patient was found; the benchmark's ES and RO locales have no real-format counterpart here.
- **One person built the key**, from the page images, with machine checks against the PDF text layer rather than a second independent reader. The text layer and the image could in principle disagree; on these files they did not, for any of the 411 rows.
- **The rule-based reader is closed** and was developed by the same team that built this set. The set was assembled after the reader's last change (25 Nov) and the reader was not changed for it; its failures above are reported as found.
- **The publishers can change or remove the files.** `prepare.py` refuses a file whose hash differs, so the key stays tied to the exact documents it was built from.

## Files

- `sources.csv`: the 14 source PDFs (URL, publisher, access date, sample evidence, terms note, SHA-256, size, pages).
- `reports.json`: the 15 reports and which pages of which source each one is.
- `keys/*.psv`: the hand-typed key, one file per source. `answers.jsonl`: the key as built by `build.mts`.
- `prepare.py`: fetch, verify, render (`python3 -I realworld/prepare.py`, needs PyMuPDF). `sources/` (ignored by git) holds the downloads.
- `run-rulebased.mts`, `run-models.mts`: the readers. `results/raw/`: what each reader returned. `score.mts`: `results/scores.json` (every miss and wrong row listed) and `results/scores.md`.
