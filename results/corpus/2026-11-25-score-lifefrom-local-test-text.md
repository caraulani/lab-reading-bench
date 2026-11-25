# lifefrom-local on lab-report-corpus (test, input text)

385 reports, 11329 answer rows scored (11262 to read, 67 to abstain on). Crashed reports: 0.

| Outcome | Rows | Share of its kind | 95% interval |
|---|---|---|---|
| ok | 8049 | 71.5% | 70.6–72.3% |
| wrong | 646 | 5.7% | 5.3–6.2% |
| miss | 2567 | 22.8% | 22.0–23.6% |
| abstained | 44 | 65.7% | 53.7–75.9% |
| read_when_abstain_expected | 23 | 34.3% | 24.1–46.3% |

- Unit given right, of values read right: 8048 of 8049 (100.0%).
- Censored values ("<", ">") read right: 95; comparator returned right 0, not returned 95.
- Rows returned that are not on the report: 253.
- **Reading and converting, apart.** Of values returned: read as printed 7244, misread 46, taken from an earlier-date column 597. Of 1429 rows printed in a unit other than the conventional one, 1093 came back in the conventional unit: converted right 805, converted wrong 3 (a wrong number in the conventional unit; it can also be a misreading of the printed number).

## By locale

| locale | rows | ok | wrong | miss | abstained | read when abstain expected |
|---|---|---|---|---|---|---|
| DE | 2145 | 84.2% | 0.0% | 15.8% | 22.2% | 77.8% |
| ES | 1514 | 84.1% | 0.1% | 15.9% | 44.4% | 55.6% |
| FR | 2264 | 27.3% | 1.1% | 71.7% | 81.8% | 18.2% |
| RO | 2092 | 90.6% | 0.0% | 9.4% | 88.2% | 11.8% |
| UK | 1551 | 58.3% | 38.9% | 2.8% | 37.5% | 62.5% |
| US | 1763 | 91.0% | 1.2% | 7.8% | 84.6% | 15.4% |

## By layout

| layout | rows | ok | wrong | miss | abstained | read when abstain expected |
|---|---|---|---|---|---|---|
| de-a | 516 | 83.1% | 0.0% | 16.9% | – | – |
| de-cum | 706 | 83.1% | 0.0% | 16.9% | 0.0% | 100.0% |
| de-mono | 923 | 85.6% | 0.0% | 14.4% | 33.3% | 66.7% |
| es-a | 685 | 86.3% | 0.1% | 13.5% | 80.0% | 20.0% |
| es-cum | 829 | 82.2% | 0.0% | 17.8% | 0.0% | 100.0% |
| fr-a | 853 | 26.6% | 1.1% | 72.4% | 100.0% | 0.0% |
| fr-b | 1411 | 27.7% | 1.1% | 71.3% | 60.0% | 40.0% |
| ro-a | 1014 | 89.3% | 0.0% | 10.7% | 83.3% | 16.7% |
| ro-b | 1078 | 91.8% | 0.0% | 8.2% | 90.9% | 9.1% |
| uk-a | 783 | 98.6% | 0.0% | 1.4% | 100.0% | 0.0% |
| uk-cum | 768 | 17.1% | 78.7% | 4.2% | 16.7% | 83.3% |
| us-a | 941 | 90.4% | 1.3% | 8.3% | 83.3% | 16.7% |
| us-b | 533 | 92.0% | 0.9% | 7.0% | 100.0% | 0.0% |
| us-cum | 289 | 91.3% | 1.4% | 7.3% | 0.0% | 100.0% |

## By heldout_layout

| heldout_layout | rows | ok | wrong | miss | abstained | read when abstain expected |
|---|---|---|---|---|---|---|
| false | 10406 | 70.2% | 6.2% | 23.5% | 68.9% | 31.1% |
| true | 923 | 85.6% | 0.0% | 14.4% | 33.3% | 66.7% |

## By page

| page | rows | ok | wrong | miss | abstained | read when abstain expected |
|---|---|---|---|---|---|---|
| 1 | 10306 | 70.6% | 6.0% | 23.3% | 67.7% | 32.3% |
| 2+ | 1023 | 80.0% | 2.6% | 17.3% | 0.0% | 100.0% |

## By earlier_result_on_line

| earlier_result_on_line | rows | ok | wrong | miss | abstained | read when abstain expected |
|---|---|---|---|---|---|---|
| no | 7249 | 77.6% | 0.5% | 21.9% | 85.4% | 14.6% |
| yes | 4080 | 60.6% | 15.1% | 24.3% | 34.6% | 65.4% |

## By hard_case

| hard_case | rows | ok | wrong | miss | abstained | read when abstain expected |
|---|---|---|---|---|---|---|
| (none) | 3031 | 83.2% | 16.1% | 0.6% | – | – |
| abstain | 67 | – | – | – | 65.7% | 34.3% |
| ambiguous_name | 127 | 2.4% | 0.0% | 97.6% | – | – |
| calculated | 793 | 76.9% | 5.5% | 17.6% | 12.5% | 87.5% |
| censored_value | 149 | 63.8% | 2.0% | 34.2% | – | – |
| comment_in_value | 91 | 76.0% | 4.0% | 20.0% | 65.2% | 34.8% |
| critical_value | 33 | 84.8% | 6.1% | 9.1% | – | – |
| decimal_comma | 7406 | 68.2% | 0.3% | 31.4% | 61.5% | 38.5% |
| dual_unit | 690 | 34.1% | 0.1% | 65.8% | 66.7% | 33.3% |
| flag_by_typography | 106 | 93.2% | 0.0% | 6.8% | 100.0% | 0.0% |
| footnote_method_change | 56 | 5.6% | 1.9% | 92.6% | 50.0% | 50.0% |
| missing_unit | 77 | 75.0% | 9.2% | 15.8% | 100.0% | 0.0% |
| pct_abs_differential | 1440 | 34.1% | 4.9% | 61.0% | 100.0% | 0.0% |
| pct_abs_same_line | 340 | 19.8% | 0.3% | 79.9% | 100.0% | 0.0% |
| pct_abs_same_name | 350 | 13.8% | 0.0% | 86.2% | 100.0% | 0.0% |
| split_table | 230 | 80.3% | 3.1% | 16.6% | 0.0% | 100.0% |
| thousands_separator | 74 | 0.0% | 20.5% | 79.5% | 100.0% | 0.0% |
| unit_change_between_dates | 34 | 55.9% | 32.4% | 11.8% | – | – |

## By date

| date | rows | ok | wrong | miss | abstained | read when abstain expected |
|---|---|---|---|---|---|---|
| current | 11329 | 71.5% | 5.7% | 22.8% | 65.7% | 34.3% |

## Examples

**not on the report**
    lrc-1-00010 monocytes-percent from "Monocytes" = 0.46
    lrc-1-00014 thyroglobulin from "TG" = 131
    lrc-1-00057 urine-microalbumin from "Microalbuminurie" = 5.3
    lrc-1-00077 chromium from "Cr" = 76

**read_when_abstain_expected comment_instead_of_value**
    lrc-1-01000 LDL cholesterol printed "See comment" -> read 2.7 
    lrc-1-01583 Leucocitos printed "Ver nota" -> read 6.3 
    lrc-1-01710 eGFR printed "See comment" -> read 52 
    lrc-1-01943 Phosphat printed "s. Kommentar" -> read 3.7 

**read_when_abstain_expected not_calculated**
    lrc-1-00267 LDL-Cholesterin printed "n. berechenbar" -> read 2.6 
    lrc-1-01279 Colesterol LDL printed "No calculable" -> read 100 
    lrc-1-01376 LDL colesterol printed "Nu se calculează" -> read 100 
    lrc-1-01426 Colesterol LDL printed "Nu se calculează" -> read 100 

**read_when_abstain_expected not_performed**
    lrc-1-01209 CHOLESTEROL, TOTAL printed "TNP" -> read 200 
    lrc-1-01552 HbA1c printed "Material fehlt" -> read 5.7 %

**read_when_abstain_expected pending**
    lrc-1-00574 Hemoglobina glicada (HbA1c) printed "En curso" -> read 5.2 
    lrc-1-00748 FERRITIN printed "To Follow" -> read 212 
    lrc-1-01412 HbA1c (IFCC) printed "To follow" -> read 5.08 %
    lrc-1-01525 HbA1c printed "in Arbeit" -> read 5.6 %

**wrong -**
    lrc-1-00010 White cell count printed "7.0" 10*9/L -> read 8.6 10*9/L
    lrc-1-00010 Red cell count printed "3.80" 10*12/L -> read 3.75 10*12/L
    lrc-1-00010 Haemoglobin printed "109" g/L -> read 10.2 g/dL
    lrc-1-00010 MCH printed "28.8" pg -> read 29.3 pg

**wrong calculated**
    lrc-1-00010 Transferrin saturation printed "21" % -> read 35 %
    lrc-1-00277 eGFR printed "109" mL/min/1.73m2 -> read 114 mL/min/1.73m2
    lrc-1-00277 LDL cholesterol printed "2.8" mmol/L -> read 96.7 mg/dL
    lrc-1-00536 eGFR printed "73" mL/min/1.73m2 -> read 69 mL/min/1.73m2

**wrong censored_value,calculated**
    lrc-1-02279 Albumin:creatinine ratio printed "<0.3" mg/mmol -> read 0.4 mg/mmol

**wrong censored_value**
    lrc-1-02279 Urine albumin printed "<3.0" mg/L -> read 3.2 mg/L

**wrong comment_in_value,unit_change_between_dates**
    lrc-1-03721 Total cholesterol printed "3.7 (rpt)" mmol/L -> read 5491 mg/dL

**wrong critical_value**
    lrc-1-00277 Potassium printed "2.1" mmol/L -> read 3.8 mmol/L
    lrc-1-03721 Potassium printed "1.6" mmol/L -> read 3.8 mmol/L

**wrong decimal_comma,censored_value**
    lrc-1-02360 Tg printed "<0,10" ng/mL -> read 47 mg/dL

**wrong decimal_comma**
    lrc-1-00237 Créatinine urinaire printed "3,6" mmol/L -> read 9.4 mg/L
    lrc-1-01821 Créatinine urinaire printed "8,9" mmol/L -> read 7.8 mg/L
    lrc-1-01902 Créatinine urinaire printed "2,2" mmol/L -> read 8.8 mg/L
    lrc-1-02074 Créatinine urinaire printed "13,8" mmol/L -> read 11.2 mg/L

**wrong decimal_comma,missing_unit,dual_unit**
    lrc-1-01902 HbA1c printed "5,6"  -> read 2.66 %

**wrong decimal_comma,pct_abs_differential,pct_abs_same_line**
    lrc-1-02074 Lymphocytes printed "1,95" 10^9/L -> read 31.4 10^9/L

**wrong decimal_comma,thousands_separator**
    lrc-1-00138 Hématies printed "3 850 000" /mm3 -> read 3 /mm3
    lrc-1-00235 Leucocytes printed "4 900" /mm3 -> read 0 ×10⁹/L
    lrc-1-00235 Hématies printed "4 380 000" /mm3 -> read 4 /mm3
    lrc-1-00237 Hématies printed "4 440 000" /mm3 -> read 4 /mm3

**wrong footnote_method_change**
    lrc-1-02279 HbA1c (IFCC) printed "43" mmol/mol -> read 6.54 %

**wrong missing_unit**
    lrc-1-00559 Triglycerides printed "0.90"  -> read 1.02 
    lrc-1-02374 Glucose printed "5.4"  -> read 5.2 
    lrc-1-03090 Alkaline phosphatase printed "93"  -> read 94 
    lrc-1-03170 Urate printed "291"  -> read 321 

**wrong pct_abs_differential**
    lrc-1-00010 Neutrophils printed "3.82" 10*9/L -> read 2.63 10*9/L
    lrc-1-00010 Lymphocytes printed "2.16" 10*9/L -> read 1.48 10*9/L
    lrc-1-00010 Eosinophils printed "0.14" 10*9/L -> read 0.25 10*9/L
    lrc-1-00748 Eos (Absolute) printed "0.12" Thousand/uL -> read 1.7 %

**wrong pct_abs_differential,missing_unit**
    lrc-1-03454 Monocytes % printed "9.0"  -> read 13.4 

**wrong pct_abs_differential,split_table**
    lrc-1-00648 Eos (Absolute) printed "0.08" Thousand/uL -> read 1 %
    lrc-1-01271 EOS (ABSOLUTE) printed "0.35" x10E3/uL -> read 3.8 %
    lrc-1-01305 Eos (Absolute) printed "0.05" x10E3/uL -> read 0.9 %
    lrc-1-01659 Eos (Absolute) printed "0.15" x10E3/uL -> read 2.8 %

**wrong unit_change_between_dates**
    lrc-1-00536 Cholesterol printed "7.1" mmol/L -> read 303 mg/dL
    lrc-1-00930 Total bilirubin printed "5" µmol/L -> read 0.02 mg/dL
    lrc-1-01000 Cholesterol printed "5.4" mmol/L -> read 201 mg/dL
    lrc-1-01274 Uric acid printed "268" µmol/L -> read 4.7 mg/dL

