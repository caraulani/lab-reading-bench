# lifefrom-local on lab-report-corpus (test, input scan_clean)

385 reports, 11329 answer rows scored (11262 to read, 67 to abstain on). Crashed reports: 0.

| Outcome | Rows | Share of its kind | 95% interval |
|---|---|---|---|
| ok | 7101 | 63.1% | 62.2–63.9% |
| wrong | 1172 | 10.4% | 9.9–11.0% |
| miss | 2989 | 26.5% | 25.7–27.4% |
| abstained | 44 | 65.7% | 53.7–75.9% |
| read_when_abstain_expected | 23 | 34.3% | 24.1–46.3% |

- Unit given right, of values read right: 6494 of 7101 (91.5%).
- Censored values ("<", ">") read right: 85; comparator returned right 0, not returned 85.
- Rows returned that are not on the report: 303.
- **Reading and converting, apart.** Of values returned: read as printed 6370, misread 605, taken from an earlier-date column 554. Of 1384 rows printed in a unit other than the conventional one, 1010 came back in the conventional unit: converted right 731, converted wrong 13 (a wrong number in the conventional unit; it can also be a misreading of the printed number).

## By locale

| locale | rows | ok | wrong | miss | abstained | read when abstain expected |
|---|---|---|---|---|---|---|
| DE | 2145 | 78.7% | 3.9% | 17.5% | 22.2% | 77.8% |
| ES | 1514 | 66.9% | 7.2% | 25.9% | 44.4% | 55.6% |
| FR | 2264 | 25.9% | 2.7% | 71.5% | 81.8% | 18.2% |
| RO | 2092 | 68.5% | 14.7% | 16.7% | 82.4% | 17.6% |
| UK | 1551 | 56.1% | 36.4% | 7.6% | 50.0% | 50.0% |
| US | 1763 | 88.2% | 3.1% | 8.7% | 84.6% | 15.4% |

## By layout

| layout | rows | ok | wrong | miss | abstained | read when abstain expected |
|---|---|---|---|---|---|---|
| de-a | 516 | 75.2% | 6.4% | 18.4% | – | – |
| de-cum | 706 | 75.0% | 6.7% | 18.3% | 0.0% | 100.0% |
| de-mono | 923 | 83.4% | 0.3% | 16.2% | 33.3% | 66.7% |
| es-a | 685 | 67.4% | 8.8% | 23.8% | 80.0% | 20.0% |
| es-cum | 829 | 66.5% | 5.8% | 27.6% | 0.0% | 100.0% |
| fr-a | 853 | 26.0% | 2.2% | 71.8% | 100.0% | 0.0% |
| fr-b | 1411 | 25.8% | 2.9% | 71.3% | 60.0% | 40.0% |
| ro-a | 1014 | 79.1% | 5.2% | 15.8% | 83.3% | 16.7% |
| ro-b | 1078 | 58.6% | 23.8% | 17.6% | 81.8% | 18.2% |
| uk-a | 783 | 94.8% | 0.0% | 5.2% | 100.0% | 0.0% |
| uk-cum | 768 | 16.4% | 73.6% | 10.0% | 33.3% | 66.7% |
| us-a | 941 | 87.4% | 2.9% | 9.7% | 83.3% | 16.7% |
| us-b | 533 | 89.4% | 2.7% | 8.0% | 100.0% | 0.0% |
| us-cum | 289 | 88.9% | 4.5% | 6.6% | 0.0% | 100.0% |

## By heldout_layout

| heldout_layout | rows | ok | wrong | miss | abstained | read when abstain expected |
|---|---|---|---|---|---|---|
| false | 10406 | 61.2% | 11.3% | 27.5% | 68.9% | 31.1% |
| true | 923 | 83.4% | 0.3% | 16.2% | 33.3% | 66.7% |

## By page

| page | rows | ok | wrong | miss | abstained | read when abstain expected |
|---|---|---|---|---|---|---|
| 1 | 10306 | 62.2% | 11.0% | 26.9% | 67.7% | 32.3% |
| 2+ | 1023 | 72.1% | 4.8% | 23.1% | 0.0% | 100.0% |

## By earlier_result_on_line

| earlier_result_on_line | rows | ok | wrong | miss | abstained | read when abstain expected |
|---|---|---|---|---|---|---|
| no | 7249 | 67.3% | 6.8% | 25.9% | 82.9% | 17.1% |
| yes | 4080 | 55.5% | 16.8% | 27.7% | 38.5% | 61.5% |

## By hard_case

| hard_case | rows | ok | wrong | miss | abstained | read when abstain expected |
|---|---|---|---|---|---|---|
| (none) | 3031 | 77.3% | 19.2% | 3.4% | – | – |
| abstain | 67 | – | – | – | 65.7% | 34.3% |
| ambiguous_name | 127 | 2.4% | 0.0% | 97.6% | – | – |
| calculated | 793 | 68.5% | 8.2% | 23.3% | 12.5% | 87.5% |
| censored_value | 149 | 57.0% | 4.0% | 38.9% | – | – |
| comment_in_value | 91 | 68.0% | 8.0% | 24.0% | 65.2% | 34.8% |
| critical_value | 33 | 66.7% | 24.2% | 9.1% | – | – |
| decimal_comma | 7406 | 58.4% | 6.2% | 35.3% | 61.5% | 38.5% |
| dual_unit | 690 | 33.9% | 1.0% | 65.1% | 66.7% | 33.3% |
| flag_by_typography | 106 | 65.0% | 18.4% | 16.5% | 100.0% | 0.0% |
| footnote_method_change | 56 | 70.4% | 16.7% | 13.0% | 50.0% | 50.0% |
| missing_unit | 77 | 67.1% | 7.9% | 25.0% | 100.0% | 0.0% |
| pct_abs_differential | 1440 | 23.7% | 9.8% | 66.5% | 100.0% | 0.0% |
| pct_abs_same_line | 340 | 10.6% | 9.4% | 79.9% | 100.0% | 0.0% |
| pct_abs_same_name | 350 | 9.8% | 4.0% | 86.2% | 100.0% | 0.0% |
| split_table | 230 | 76.0% | 4.8% | 19.2% | 0.0% | 100.0% |
| thousands_separator | 74 | 13.7% | 6.8% | 79.5% | 100.0% | 0.0% |
| unit_change_between_dates | 34 | 41.2% | 44.1% | 14.7% | – | – |

## By date

| date | rows | ok | wrong | miss | abstained | read when abstain expected |
|---|---|---|---|---|---|---|
| current | 11329 | 63.1% | 10.4% | 26.5% | 65.7% | 34.3% |

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
    lrc-1-01552 HbA1c printed "Material fehlt" -> read 7.37 %

**read_when_abstain_expected pending**
    lrc-1-00574 Hemoglobina glicada (HbA1c) printed "En curso" -> read 5.2 
    lrc-1-00748 FERRITIN printed "To Follow" -> read 212 
    lrc-1-01525 HbA1c printed "in Arbeit" -> read 5.6 %
    lrc-1-02025 HbA1c printed "folgt" -> read 5.3 

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

**wrong comment_in_value**
    lrc-1-03309 Hematocrit printed "42.0 (verif.)" % -> read 20 

**wrong comment_in_value,unit_change_between_dates**
    lrc-1-03721 Total cholesterol printed "3.7 (rpt)" mmol/L -> read 5491 mg/dL

**wrong critical_value**
    lrc-1-00277 Potassium printed "2.1" mmol/L -> read 3.8 mmol/L
    lrc-1-03716 Potassium printed "7.3" mmol/L -> read 73 
    lrc-1-03721 Potassium printed "1.6" mmol/L -> read 3.8 mmol/L

**wrong decimal_comma,calculated,dual_unit**
    lrc-1-01639 LDL-cholestérol printed "1,91" g/L -> read 1911 g/L

**wrong decimal_comma,calculated**
    lrc-1-00120 LDL-Cholesterin printed "3,9" mmol/l -> read 39 
    lrc-1-00599 Colesterol LDL printed "154" mg/dL -> read 1154 mg/dL
    lrc-1-01525 Albumin/Kreatinin-Quotient printed "135,6" mg/g -> read 1356 mg/g
    lrc-1-02838 Transferrinsättigung printed "8,0" % -> read 80 %

**wrong decimal_comma,calculated,split_table**
    lrc-1-01485 LDL-Cholesterin printed "4,6" mmol/l -> read 46 
    lrc-1-02936 Colesterol LDL printed "112" mg/dL -> read 1112 mg/dL
    lrc-1-03879 Colesterol LDL printed "147" mg/dL -> read 1147 mg/dL

**wrong decimal_comma,censored_value,calculated**
    lrc-1-01036 eGFR printed ">90" mL/min/1.73m2 -> read 1 mL/min/1.73m2
    lrc-1-01149 eGFR printed ">90" mL/min/1.73m2 -> read 1 mL/min/1.73m2

**wrong decimal_comma,censored_value**
    lrc-1-02360 Tg printed "<0,10" ng/mL -> read 47 mg/dL
    lrc-1-02979 Mikroalbumin printed "<3,0" mg/l -> read 41 g/L

**wrong decimal_comma,critical_value,flag_by_typography**
    lrc-1-00750 Număr de trombocite printed "1201" *10^3/µL -> read 1.2 ×10⁹/L

**wrong decimal_comma,critical_value**
    lrc-1-00083 Sodiu printed "97" mmol/L -> read 197 mmol/L
    lrc-1-00986 Kalium printed "8,3" mmol/l -> read 83 
    lrc-1-02838 Kalium printed "2,3" mmol/l -> read 23 
    lrc-1-03485 Glicemie printed "31" mg/dL -> read 3111 mg/dL

**wrong decimal_comma,dual_unit**
    lrc-1-00322 Glucose printed "1,15" g/L -> read 1 g/L
    lrc-1-01700 HbA1c printed "5,9" % -> read 59 %
    lrc-1-02074 HbA1c printed "5,7" % -> read 57 %
    lrc-1-02620 HbA1c printed "5,7" % -> read 57 %

**wrong decimal_comma,flag_by_typography,calculated**
    lrc-1-00750 Colesterol LDL printed "145,0" mg/dL -> read 1145 mg/dL

**wrong decimal_comma,flag_by_typography**
    lrc-1-00750 Colesterol total printed "241" mg/dL -> read 1241 
    lrc-1-01036 Leucocite printed "3,9" mii/µL -> read 39 mii/uL
    lrc-1-01036 Glicemie printed "101" mg/dL -> read 1101 mg/dL
    lrc-1-01109 Hematocrit printed "34,90" % -> read 134.9 %

**wrong decimal_comma,footnote_method_change**
    lrc-1-01044 Hemoglobina glicada (HbA1c) printed "5,40" % -> read 540 %
    lrc-1-03897 HbA1c printed "5,7" % -> read 57 %

**wrong decimal_comma,footnote_method_change,unit_change_between_dates**
    lrc-1-03719 HbA1c printed "5,3" % -> read 53 %
    lrc-1-03943 HbA1c printed "5,4" % -> read 2.64 %

**wrong decimal_comma**
    lrc-1-00014 Leucocitos printed "5,2" 10^3/µL -> read 0.01 ×10⁹/L
    lrc-1-00014 Hematocrito printed "35,8" % -> read 358 %
    lrc-1-00014 RDW-CV printed "13,9" % -> read 139 %
    lrc-1-00026 Leucocitos printed "7,0" 10^3/µL -> read 0.01 ×10⁹/L

**wrong decimal_comma,missing_unit,dual_unit**
    lrc-1-01902 HbA1c printed "5,6"  -> read 2.66 %

**wrong decimal_comma,pct_abs_differential,flag_by_typography**
    lrc-1-02945 EOS% printed "4,50" % -> read 14.5 %

**wrong decimal_comma,pct_abs_differential**
    lrc-1-00026 Monocitos % printed "14,8" % -> read 148 %
    lrc-1-00111 Neutrophile % printed "69,5" % -> read 695 %
    lrc-1-00120 Monozyten % printed "9,4" % -> read 94 %
    lrc-1-00120 Eosinophile % printed "6,9" % -> read 69 %

**wrong decimal_comma,pct_abs_differential,pct_abs_same_line**
    lrc-1-00138 Lymphocytes printed "29,00" % -> read 2.9 %
    lrc-1-00138 Monocytes printed "5,8" % -> read 58 %
    lrc-1-00235 Lymphocytes printed "34,00" % -> read 3.4 %
    lrc-1-00322 Lymphocytes printed "37,0" % -> read 3.7 %

**wrong decimal_comma,pct_abs_differential,pct_abs_same_name**
    lrc-1-00343 Limfocite printed "34,9" % -> read 349 %
    lrc-1-00343 Monocite printed "8,7" % -> read 87 %
    lrc-1-01112 Limfocite printed "34,2" % -> read 342 %
    lrc-1-01426 Limfocite printed "39,4" % -> read 394 %

**wrong decimal_comma,thousands_separator**
    lrc-1-00237 Hématies printed "4 440 000" /mm3 -> read 4 /mm3
    lrc-1-00902 Hématies printed "4 680 000" /mm3 -> read 4 /mm3
    lrc-1-01700 Hématies printed "4 170 000" /mm3 -> read 4170 /mm3
    lrc-1-01875 Hématies printed "4 240 000" /mm3 -> read 4240 /mm3

**wrong decimal_comma,unit_change_between_dates**
    lrc-1-01480 Harnsäure printed "7,8" mg/dl -> read 78 mg/dL
    lrc-1-01562 HbA1c printed "5,8" % -> read 58 %
    lrc-1-02575 HbA1c printed "6,50" % -> read 650 %

**wrong flag_by_typography**
    lrc-1-03309 Glicemie printed "107" mg/dL -> read 1107 mg/dL

**wrong footnote_method_change**
    lrc-1-00010 Ferritin printed "100" µg/L -> read 158 µg/L
    lrc-1-00094 Creatinina printed "0.81" mg/dL -> read 10.81 mg/dL
    lrc-1-01071 HbA1c printed "31" mmol/mol -> read 4.89 %
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
    lrc-1-00748 MONOCYTES printed "9.0" % -> read 90 %

**wrong pct_abs_differential,missing_unit**
    lrc-1-03454 Monocytes % printed "9.0"  -> read 13.4 

**wrong pct_abs_differential,pct_abs_same_name**
    lrc-1-00094 Neutrofile printed "59.8" % -> read 159.8 %
    lrc-1-00094 Limfocite printed "31.6" % -> read 131.6 %
    lrc-1-00094 Monocite printed "7.0" % -> read 17 %
    lrc-1-00296 Neutrofile printed "59.2" % -> read 159.2 %

**wrong pct_abs_differential,split_table**
    lrc-1-00648 Eos (Absolute) printed "0.08" Thousand/uL -> read 1 %
    lrc-1-01271 EOS (ABSOLUTE) printed "0.35" x10E3/uL -> read 3.8 %
    lrc-1-01305 Eos (Absolute) printed "0.05" x10E3/uL -> read 9 %
    lrc-1-01659 Eos (Absolute) printed "0.15" x10E3/uL -> read 2.8 %

**wrong split_table**
    lrc-1-01282 Bilirubină totală printed "0.3" mg/dL -> read 103 mg/dL

**wrong unit_change_between_dates**
    lrc-1-00536 Cholesterol printed "7.1" mmol/L -> read 303 mg/dL
    lrc-1-00930 Total bilirubin printed "5" µmol/L -> read 0.02 mg/dL
    lrc-1-01000 Cholesterol printed "5.4" mmol/L -> read 201 mg/dL
    lrc-1-01274 Uric acid printed "268" µmol/L -> read 4.7 mg/dL

