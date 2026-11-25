# lifefrom-local on lab-report-corpus (test, input photo)

385 reports, 11329 answer rows scored (11262 to read, 67 to abstain on). Crashed reports: 0.

| Outcome | Rows | Share of its kind | 95% interval |
|---|---|---|---|
| ok | 2227 | 19.8% | 19.0–20.5% |
| wrong | 2337 | 20.8% | 20.0–21.5% |
| miss | 6698 | 59.5% | 58.6–60.4% |
| abstained | 50 | 74.6% | 63.1–83.5% |
| read_when_abstain_expected | 17 | 25.4% | 16.5–36.9% |

- Unit given right, of values read right: 1310 of 2227 (58.8%).
- Censored values ("<", ">") read right: 24; comparator returned right 0, not returned 24.
- Rows returned that are not on the report: 243.
- **Reading and converting, apart.** Of values returned: read as printed 2023, misread 2102, taken from an earlier-date column 181. Of 832 rows printed in a unit other than the conventional one, 309 came back in the conventional unit: converted right 204, converted wrong 54 (a wrong number in the conventional unit; it can also be a misreading of the printed number).

## By locale

| locale | rows | ok | wrong | miss | abstained | read when abstain expected |
|---|---|---|---|---|---|---|
| DE | 2145 | 16.8% | 27.3% | 55.9% | 77.8% | 22.2% |
| ES | 1514 | 18.2% | 20.3% | 61.5% | 77.8% | 22.2% |
| FR | 2264 | 8.8% | 11.6% | 79.6% | 90.9% | 9.1% |
| RO | 2092 | 23.0% | 12.7% | 64.3% | 76.5% | 23.5% |
| UK | 1551 | 23.8% | 29.2% | 47.1% | 37.5% | 62.5% |
| US | 1763 | 31.6% | 27.0% | 41.4% | 76.9% | 23.1% |

## By layout

| layout | rows | ok | wrong | miss | abstained | read when abstain expected |
|---|---|---|---|---|---|---|
| de-a | 516 | 16.3% | 20.7% | 63.0% | – | – |
| de-cum | 706 | 15.2% | 35.4% | 49.4% | 100.0% | 0.0% |
| de-mono | 923 | 18.2% | 24.9% | 56.9% | 66.7% | 33.3% |
| es-a | 685 | 25.9% | 23.5% | 50.6% | 80.0% | 20.0% |
| es-cum | 829 | 11.9% | 17.7% | 70.4% | 75.0% | 25.0% |
| fr-a | 853 | 9.3% | 10.9% | 79.8% | 83.3% | 16.7% |
| fr-b | 1411 | 8.5% | 12.0% | 79.5% | 100.0% | 0.0% |
| ro-a | 1014 | 31.5% | 9.9% | 58.5% | 83.3% | 16.7% |
| ro-b | 1078 | 14.9% | 15.4% | 69.7% | 72.7% | 27.3% |
| uk-a | 783 | 41.1% | 8.2% | 50.7% | 50.0% | 50.0% |
| uk-cum | 768 | 6.0% | 50.7% | 43.3% | 33.3% | 66.7% |
| us-a | 941 | 31.2% | 26.2% | 42.6% | 100.0% | 0.0% |
| us-b | 533 | 34.2% | 26.4% | 39.5% | 66.7% | 33.3% |
| us-cum | 289 | 28.1% | 30.6% | 41.3% | 0.0% | 100.0% |

## By heldout_layout

| heldout_layout | rows | ok | wrong | miss | abstained | read when abstain expected |
|---|---|---|---|---|---|---|
| false | 10406 | 19.9% | 20.4% | 59.7% | 75.4% | 24.6% |
| true | 923 | 18.2% | 24.9% | 56.9% | 66.7% | 33.3% |

## By page

| page | rows | ok | wrong | miss | abstained | read when abstain expected |
|---|---|---|---|---|---|---|
| 1 | 10306 | 19.1% | 21.5% | 59.4% | 75.4% | 24.6% |
| 2+ | 1023 | 26.3% | 13.6% | 60.0% | 50.0% | 50.0% |

## By earlier_result_on_line

| earlier_result_on_line | rows | ok | wrong | miss | abstained | read when abstain expected |
|---|---|---|---|---|---|---|
| no | 7249 | 23.6% | 16.8% | 59.6% | 80.5% | 19.5% |
| yes | 4080 | 13.0% | 27.8% | 59.3% | 65.4% | 34.6% |

## By hard_case

| hard_case | rows | ok | wrong | miss | abstained | read when abstain expected |
|---|---|---|---|---|---|---|
| (none) | 3031 | 29.3% | 27.7% | 43.0% | – | – |
| abstain | 67 | – | – | – | 74.6% | 25.4% |
| ambiguous_name | 127 | 0.0% | 0.0% | 100.0% | – | – |
| calculated | 793 | 20.5% | 16.8% | 62.7% | 62.5% | 37.5% |
| censored_value | 149 | 16.1% | 11.4% | 72.5% | – | – |
| comment_in_value | 91 | 24.0% | 28.0% | 48.0% | 74.2% | 25.8% |
| critical_value | 33 | 18.2% | 36.4% | 45.5% | – | – |
| decimal_comma | 7406 | 16.0% | 18.1% | 65.9% | 76.9% | 23.1% |
| dual_unit | 690 | 12.5% | 13.8% | 73.7% | 100.0% | 0.0% |
| flag_by_typography | 106 | 22.3% | 8.7% | 68.9% | 100.0% | 0.0% |
| footnote_method_change | 56 | 16.7% | 29.6% | 53.7% | 50.0% | 50.0% |
| missing_unit | 77 | 13.2% | 18.4% | 68.4% | 100.0% | 0.0% |
| pct_abs_differential | 1440 | 5.8% | 13.3% | 80.9% | 80.0% | 20.0% |
| pct_abs_same_line | 340 | 2.1% | 15.0% | 82.9% | 0.0% | 100.0% |
| pct_abs_same_name | 350 | 0.9% | 4.9% | 94.2% | 100.0% | 0.0% |
| split_table | 230 | 29.7% | 10.9% | 59.4% | 100.0% | 0.0% |
| thousands_separator | 74 | 5.5% | 20.5% | 74.0% | 100.0% | 0.0% |
| unit_change_between_dates | 34 | 14.7% | 35.3% | 50.0% | – | – |

## By date

| date | rows | ok | wrong | miss | abstained | read when abstain expected |
|---|---|---|---|---|---|---|
| current | 11329 | 19.8% | 20.8% | 59.5% | 74.6% | 25.4% |

## Examples

**not on the report**
    lrc-1-00014 thyroglobulin from "TG" = 131
    lrc-1-00077 eosinophils-absolute from "“eo" = 83
    lrc-1-00083 urine-microalbumin from "Microalbuminurie" = 12.8
    lrc-1-00094 selenium from "SE" = 0.2

**read_when_abstain_expected comment_instead_of_value**
    lrc-1-01190 Lymphocytes printed "Voir commentaire" -> read 103 
    lrc-1-01710 eGFR printed "See comment" -> read 2 
    lrc-1-02860 MCHC printed "siehe Bem." -> read 30.9 
    lrc-1-03020 Calcio printed "Ver nota" -> read 19 

**read_when_abstain_expected not_calculated**
    lrc-1-01426 Colesterol LDL printed "Nu se calculează" -> read 400 
    lrc-1-02964 Colesterol LDL printed "No calculable" -> read 400 

**read_when_abstain_expected not_performed**
    lrc-1-03134 HEM printed "Nu s-a efectuat" -> read 1 
    lrc-1-03955 Creatinine printed "Not performed" -> read 73 

**read_when_abstain_expected pending**
    lrc-1-00748 FERRITIN printed "To Follow" -> read 212 
    lrc-1-01412 HbA1c (IFCC) printed "To follow" -> read 5.08 %
    lrc-1-01718 TSH printed "Urmează" -> read 1.8 
    lrc-1-02025 HbA1c printed "folgt" -> read 6.5 %

**wrong -**
    lrc-1-00043 CHOLESTEROL, TOTAL printed "174" mg/dL -> read 3 
    lrc-1-00077 Sodium printed "142" mmol/L -> read 8 
    lrc-1-00094 Eritrocite printed "4.88" *10^6/µL -> read 10 /uL
    lrc-1-00094 Colesterol HDL printed "66" mg/dL -> read 166 

**wrong calculated**
    lrc-1-00182 EGFR printed "54" mL/min/1.73m2 -> read 8 
    lrc-1-00192 EGFR printed "121" mL/min/1.73m2 -> read 3 
    lrc-1-00277 eGFR printed "109" mL/min/1.73m2 -> read 114 
    lrc-1-00277 LDL cholesterol printed "2.8" mmol/L -> read 2.5 

**wrong censored_value,calculated**
    lrc-1-00648 EGFR printed ">90" mL/min/1.73m2 -> read 2021 
    lrc-1-00951 EGFR printed ">90" mL/min/1.73m2 -> read 3.5 mg/dL
    lrc-1-01487 eGFR printed ">90" mL/min/1.73m2 -> read 291 
    lrc-1-02180 eGFR printed ">90" mL/min/1.73m2 -> read 73 pmol/L

**wrong censored_value**
    lrc-1-02279 Urine albumin printed "<3.0" mg/L -> read 0.9 

**wrong comment_in_value**
    lrc-1-03309 Hematocrit printed "42.0 (verif.)" % -> read 80 
    lrc-1-03409 CHLORIDE printed "98 verif" mmol/L -> read 2545 
    lrc-1-03716 Cholesterol, Total printed "243 (rpt)" mg/dL -> read 43 

**wrong comment_in_value,unit_change_between_dates**
    lrc-1-03721 Total cholesterol printed "3.7 (rpt)" mmol/L -> read 17 mg/dL

**wrong critical_value**
    lrc-1-00277 Potassium printed "2.1" mmol/L -> read 38 
    lrc-1-01076 Sodiu seric printed "192.0" mmol/L -> read 1920 
    lrc-1-01947 Sodiu printed "183" mmol/L -> read 3.6 mmol/L
    lrc-1-02033 ALT (SGPT) printed "831" U/L -> read 0 

**wrong decimal_comma,calculated,dual_unit**
    lrc-1-00618 LDL-cholestérol printed "0,47" g/L -> read 2019 
    lrc-1-00630 Cholestérol LDL (calculé) printed "0,99" g/L -> read 4040 
    lrc-1-01270 Cholestérol LDL (calculé) printed "1,14" g/L -> read 1.91 
    lrc-1-01434 LDL-cholestérol printed "0,59" g/L -> read 4 

**wrong decimal_comma,calculated**
    lrc-1-00026 Filtrado glomerular estimado (CKD-EPI) printed "109" mL/min/1.73m2 -> read 58 
    lrc-1-00111 Transferrinsättigung printed "5" % -> read 85 %
    lrc-1-00120 LDL-Cholesterin printed "3,9" mmol/l -> read 39 
    lrc-1-00252 Albumin/Kreatinin-Quotient printed "2,5" mg/g -> read 25 mg/g

**wrong decimal_comma,calculated,split_table**
    lrc-1-01485 LDL-Cholesterin printed "4,6" mmol/l -> read 55 mg/dL
    lrc-1-03879 Colesterol LDL printed "147" mg/dL -> read 1147 mg/dL

**wrong decimal_comma,censored_value,calculated**
    lrc-1-00960 Albumin/Kreatinin-Quotient printed "<5,4" mg/g -> read 54 
    lrc-1-01641 eGFR (CKD-EPI) printed "> 90" mL/min/1.73m2 -> read 6 
    lrc-1-02025 eGFR (CKD-EPI) printed ">90" mL/min/1.73m2 -> read 357 pmol/L
    lrc-1-02165 Filtrado glomerular estimado (CKD-EPI) printed ">90" mL/min/1.73m2 -> read 55 

**wrong decimal_comma,censored_value**
    lrc-1-02979 Mikroalbumin printed "<3,0" mg/l -> read 14 

**wrong decimal_comma,comment_in_value**
    lrc-1-01562 Albumin printed "40 (wdh.)" g/l -> read 68 
    lrc-1-01891 VCM printed "93,9 (rep.)" fL -> read 319 pg

**wrong decimal_comma,critical_value**
    lrc-1-00649 Glucosa printed "30" mg/dL -> read 5 %
    lrc-1-00986 Kalium printed "8,3" mmol/l -> read 83 
    lrc-1-02324 Potasio printed "1,6" mmol/L -> read 178 pmol/L
    lrc-1-02376 Kalium printed "2,3" mmol/l -> read 139 

**wrong decimal_comma,dual_unit**
    lrc-1-00138 Calcémie printed "88" mg/L -> read 4 
    lrc-1-00138 Phosphorémie printed "42" mg/L -> read 66 
    lrc-1-00138 Cholestérol total printed "2,21" g/L -> read 0.85 
    lrc-1-00235 Glucose printed "1,00" g/L -> read 18 mg/dL

**wrong decimal_comma,flag_by_typography,calculated**
    lrc-1-00750 Colesterol LDL printed "145,0" mg/dL -> read 40 

**wrong decimal_comma,flag_by_typography**
    lrc-1-01109 Hematocrit printed "34,90" % -> read 33 
    lrc-1-01757 Colesterol total printed "208" mg/dL -> read 2 
    lrc-1-01757 Trigliceride printed "270" mg/dL -> read 40 mg/dL
    lrc-1-02976 RDW printed "15,4" % -> read 154 %

**wrong decimal_comma,footnote_method_change,dual_unit**
    lrc-1-00630 Créatinine printed "11,3" mg/L -> read 53 
    lrc-1-02954 HbA1c printed "5,4" % -> read 54 %
    lrc-1-03449 HbA1c printed "4,8" % -> read 6.9 

**wrong decimal_comma,footnote_method_change**
    lrc-1-00418 HbA1c printed "5,6" % -> read 3 
    lrc-1-01044 Hemoglobina glicada (HbA1c) printed "5,40" % -> read 540 %
    lrc-1-01480 HbA1c printed "5,00" % -> read 6.5 %
    lrc-1-01825 Creatinina printed "0,73" mg/dL -> read 30 

**wrong decimal_comma,footnote_method_change,unit_change_between_dates**
    lrc-1-03719 HbA1c printed "5,3" % -> read 7 %

**wrong decimal_comma**
    lrc-1-00014 Leucocitos printed "5,2" 10^3/µL -> read 0.01 ×10⁹/L
    lrc-1-00014 Hematocrito printed "35,8" % -> read 358 %
    lrc-1-00014 RDW-CV printed "13,9" % -> read 139 %
    lrc-1-00026 Hemoglobina printed "16,0" g/dL -> read 55 

**wrong decimal_comma,missing_unit**
    lrc-1-00111 Hämoglobin printed "12,6"  -> read 126 
    lrc-1-00864 Sodio printed "141"  -> read 4.7 
    lrc-1-02360 Sodio printed "142"  -> read 2570 mg/dL
    lrc-1-02745 Potasiu seric printed "4,3"  -> read 43 

**wrong decimal_comma,pct_abs_differential,comment_in_value**
    lrc-1-02629 Neutrophile % printed "63,5 kontr." % -> read 204 

**wrong decimal_comma,pct_abs_differential**
    lrc-1-00026 Monocitos % printed "14,8" % -> read 97 
    lrc-1-00111 Neutrophile % printed "69,5" % -> read 695 %
    lrc-1-00111 Lymphozyten % printed "20,9" % -> read 209 %
    lrc-1-00111 Eosinophile % printed "2,1" % -> read 21 %

**wrong decimal_comma,pct_abs_differential,missing_unit,pct_abs_same_line**
    lrc-1-02074 Lymphocytes printed "31,4"  -> read 1079 

**wrong decimal_comma,pct_abs_differential,pct_abs_same_line**
    lrc-1-00138 Monocytes printed "5,8" % -> read 58 %
    lrc-1-00235 Lymphocytes printed "34,00" % -> read 3400 %
    lrc-1-00235 Monocytes printed "9,70" % -> read 970 %
    lrc-1-00322 Lymphocytes printed "37,0" % -> read 370 %

**wrong decimal_comma,pct_abs_differential,pct_abs_same_name**
    lrc-1-00343 Monocite printed "8,7" % -> read 87 %
    lrc-1-01426 Neutrofile printed "50,40" % -> read 5040 %
    lrc-1-01426 Limfocite printed "39,4" % -> read 5991 
    lrc-1-02366 Neutrofile printed "50,0" % -> read 2.7 

**wrong decimal_comma,pct_abs_differential,thousands_separator,pct_abs_same_line**
    lrc-1-00630 Monocytes printed "400" /mm3 -> read 2400 /mm3
    lrc-1-00902 Monocytes printed "500" /mm3 -> read 100 /mm3
    lrc-1-01700 Lymphocytes printed "2 000" /mm3 -> read 100 /mm3
    lrc-1-01700 Monocytes printed "500" /mm3 -> read 0 /mm3

**wrong decimal_comma,split_table**
    lrc-1-00267 HDL-Cholesterin printed "1,58" mmol/l -> read 1 
    lrc-1-00343 Albumină serică printed "4,2" g/dL -> read 30 
    lrc-1-01112 Clor seric printed "102" mmol/L -> read 24 mmol/L
    lrc-1-01112 Bicarbonat seric printed "24" mmol/L -> read 10.3 

**wrong decimal_comma,thousands_separator**
    lrc-1-00630 Leucocytes printed "6 500" /mm3 -> read 6 
    lrc-1-00630 Hématies printed "5 930 000" /mm3 -> read 0 
    lrc-1-00902 Hématies printed "4 680 000" /mm3 -> read 14.8 
    lrc-1-01700 Leucocytes printed "5 500" /mm3 -> read 4170 ×10⁹/L

**wrong decimal_comma,unit_change_between_dates**
    lrc-1-01480 Harnsäure printed "7,8" mg/dl -> read 142 
    lrc-1-01562 HbA1c printed "5,8" % -> read 355 %
    lrc-1-02575 HbA1c printed "6,50" % -> read 650 %

**wrong flag_by_typography**
    lrc-1-01473 Colesterol total printed "211" mg/dL -> read 150 
    lrc-1-01473 Trigliceride printed "174" mg/dL -> read 40 
    lrc-1-03563 Hematocrit printed "34.50" % -> read 89 

**wrong footnote_method_change**
    lrc-1-02279 HbA1c (IFCC) printed "43" mmol/mol -> read 5.2 %
    lrc-1-03467 Hemoglobin A1c printed "5.4" % -> read 19 %
    lrc-1-03630 Hemoglobin A1c printed "5.8" % -> read 58 %
    lrc-1-03816 FERRITIN printed "88" ng/mL -> read 0.2 

**wrong missing_unit**
    lrc-1-00790 Creatinine printed "1.12"  -> read 1.73 mL/min/1.73m2
    lrc-1-01076 HbA1c printed "5.6"  -> read 56 
    lrc-1-02374 Glucose printed "5.4"  -> read 38 
    lrc-1-03038 Sodium printed "142"  -> read 98 

**wrong pct_abs_differential,flag_by_typography**
    lrc-1-03309 NEU% printed "64.0" % -> read 40 

**wrong pct_abs_differential**
    lrc-1-00748 MONOCYTES printed "9.0" % -> read 90 
    lrc-1-00748 Eos (Absolute) printed "0.12" Thousand/uL -> read 1.7 %
    lrc-1-00876 Monocytes printed "10.8" % -> read 4 
    lrc-1-00876 LYMPHS (ABSOLUTE) printed "2.09" Thousand/uL -> read 543 

**wrong pct_abs_differential,missing_unit**
    lrc-1-03454 Monocytes % printed "9.0"  -> read 134 

**wrong pct_abs_differential,pct_abs_same_name**
    lrc-1-00094 Monocite printed "7.0" % -> read 0.99 
    lrc-1-00296 Neutrofile printed "59.2" % -> read 10 
    lrc-1-01947 Neutrofile printed "60.4" % -> read 4.5 
    lrc-1-01947 Limfocite printed "32.70" % -> read 0.8 

**wrong pct_abs_differential,split_table**
    lrc-1-01305 Eos (Absolute) printed "0.05" x10E3/uL -> read 9 %
    lrc-1-01659 Eos (Absolute) printed "0.15" x10E3/uL -> read 0.8 %
    lrc-1-02087 Baso (Absolute) printed "0.06" Thousand/uL -> read 2 
    lrc-1-03498 Eos (Absolute) printed "0.08" Thousand/uL -> read 15 

**wrong split_table**
    lrc-1-01024 Free T4 printed "1.25" ng/dL -> read 125 ng/dL
    lrc-1-01024 T3, FREE printed "2.6" pg/mL -> read 286 
    lrc-1-02657 Magneziu seric printed "2.0" mg/dL -> read 40 

**wrong unit_change_between_dates**
    lrc-1-00930 Total bilirubin printed "5" µmol/L -> read 52 
    lrc-1-01000 Cholesterol printed "5.4" mmol/L -> read 1.69 
    lrc-1-01274 Uric acid printed "268" µmol/L -> read 4.7 
    lrc-1-01412 25-OH Vitamin D printed "57" nmol/L -> read 26 ng/mL

