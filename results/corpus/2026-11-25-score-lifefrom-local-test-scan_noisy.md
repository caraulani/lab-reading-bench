# lifefrom-local on lab-report-corpus (test, input scan_noisy)

385 reports, 11329 answer rows scored (11262 to read, 67 to abstain on). Crashed reports: 0.

| Outcome | Rows | Share of its kind | 95% interval |
|---|---|---|---|
| ok | 2994 | 26.6% | 25.8–27.4% |
| wrong | 2540 | 22.6% | 21.8–23.3% |
| miss | 5728 | 50.9% | 49.9–51.8% |
| abstained | 48 | 71.6% | 59.9–81.0% |
| read_when_abstain_expected | 19 | 28.4% | 19.0–40.1% |

- Unit given right, of values read right: 1604 of 2994 (53.6%).
- Censored values ("<", ">") read right: 31; comparator returned right 0, not returned 31.
- Rows returned that are not on the report: 283.
- **Reading and converting, apart.** Of values returned: read as printed 2774, misread 2221, taken from an earlier-date column 260. Of 1012 rows printed in a unit other than the conventional one, 297 came back in the conventional unit: converted right 220, converted wrong 59 (a wrong number in the conventional unit; it can also be a misreading of the printed number).

## By locale

| locale | rows | ok | wrong | miss | abstained | read when abstain expected |
|---|---|---|---|---|---|---|
| DE | 2145 | 29.5% | 26.4% | 44.1% | 66.7% | 33.3% |
| ES | 1514 | 29.2% | 22.8% | 48.0% | 44.4% | 55.6% |
| FR | 2264 | 11.4% | 12.4% | 76.2% | 81.8% | 18.2% |
| RO | 2092 | 30.8% | 14.9% | 54.3% | 82.4% | 17.6% |
| UK | 1551 | 30.5% | 34.9% | 34.5% | 37.5% | 62.5% |
| US | 1763 | 31.9% | 28.9% | 39.3% | 92.3% | 7.7% |

## By layout

| layout | rows | ok | wrong | miss | abstained | read when abstain expected |
|---|---|---|---|---|---|---|
| de-a | 516 | 27.1% | 18.8% | 54.1% | – | – |
| de-cum | 706 | 20.8% | 35.7% | 43.5% | 66.7% | 33.3% |
| de-mono | 923 | 37.5% | 23.6% | 38.9% | 66.7% | 33.3% |
| es-a | 685 | 26.8% | 19.6% | 53.7% | 60.0% | 40.0% |
| es-cum | 829 | 31.2% | 25.5% | 43.4% | 25.0% | 75.0% |
| fr-a | 853 | 11.5% | 14.3% | 74.3% | 83.3% | 16.7% |
| fr-b | 1411 | 11.3% | 11.3% | 77.4% | 80.0% | 20.0% |
| ro-a | 1014 | 36.9% | 13.6% | 49.5% | 83.3% | 16.7% |
| ro-b | 1078 | 25.1% | 16.1% | 58.8% | 81.8% | 18.2% |
| uk-a | 783 | 51.3% | 12.8% | 35.9% | 100.0% | 0.0% |
| uk-cum | 768 | 9.2% | 57.6% | 33.2% | 16.7% | 83.3% |
| us-a | 941 | 30.4% | 28.7% | 41.0% | 100.0% | 0.0% |
| us-b | 533 | 32.1% | 25.8% | 42.1% | 83.3% | 16.7% |
| us-cum | 289 | 36.5% | 35.1% | 28.5% | 100.0% | 0.0% |

## By heldout_layout

| heldout_layout | rows | ok | wrong | miss | abstained | read when abstain expected |
|---|---|---|---|---|---|---|
| false | 10406 | 25.6% | 22.5% | 51.9% | 72.1% | 27.9% |
| true | 923 | 37.5% | 23.6% | 38.9% | 66.7% | 33.3% |

## By page

| page | rows | ok | wrong | miss | abstained | read when abstain expected |
|---|---|---|---|---|---|---|
| 1 | 10306 | 26.0% | 23.3% | 50.7% | 72.3% | 27.7% |
| 2+ | 1023 | 32.3% | 15.2% | 52.5% | 50.0% | 50.0% |

## By earlier_result_on_line

| earlier_result_on_line | rows | ok | wrong | miss | abstained | read when abstain expected |
|---|---|---|---|---|---|---|
| no | 7249 | 28.6% | 17.5% | 53.9% | 82.9% | 17.1% |
| yes | 4080 | 23.0% | 31.5% | 45.5% | 53.8% | 46.2% |

## By hard_case

| hard_case | rows | ok | wrong | miss | abstained | read when abstain expected |
|---|---|---|---|---|---|---|
| (none) | 3031 | 32.1% | 31.4% | 36.5% | – | – |
| abstain | 67 | – | – | – | 71.6% | 28.4% |
| ambiguous_name | 127 | 0.0% | 0.0% | 100.0% | – | – |
| calculated | 793 | 28.0% | 18.1% | 53.9% | 25.0% | 75.0% |
| censored_value | 149 | 20.8% | 16.1% | 63.1% | – | – |
| comment_in_value | 91 | 24.0% | 24.0% | 52.0% | 71.2% | 28.8% |
| critical_value | 33 | 33.3% | 21.2% | 45.5% | – | – |
| decimal_comma | 7406 | 24.5% | 18.9% | 56.5% | 71.8% | 28.2% |
| dual_unit | 690 | 17.0% | 14.8% | 68.1% | 100.0% | 0.0% |
| flag_by_typography | 106 | 25.2% | 18.4% | 56.3% | 100.0% | 0.0% |
| footnote_method_change | 56 | 37.0% | 31.5% | 31.5% | 50.0% | 50.0% |
| missing_unit | 77 | 22.4% | 27.6% | 50.0% | 100.0% | 0.0% |
| pct_abs_differential | 1440 | 10.0% | 15.0% | 75.0% | 100.0% | 0.0% |
| pct_abs_same_line | 340 | 2.4% | 15.3% | 82.3% | 100.0% | 0.0% |
| pct_abs_same_name | 350 | 5.8% | 5.2% | 89.0% | 100.0% | 0.0% |
| split_table | 230 | 36.7% | 15.3% | 48.0% | 100.0% | 0.0% |
| thousands_separator | 74 | 4.1% | 17.8% | 78.1% | 100.0% | 0.0% |
| unit_change_between_dates | 34 | 14.7% | 35.3% | 50.0% | – | – |

## By date

| date | rows | ok | wrong | miss | abstained | read when abstain expected |
|---|---|---|---|---|---|---|
| current | 11329 | 26.6% | 22.6% | 50.9% | 71.6% | 28.4% |

## Examples

**not on the report**
    lrc-1-00010 basophils-percent from ": Basophils" = 0.08
    lrc-1-00043 magnesium-serum from "mg" = 200
    lrc-1-00057 urine-microalbumin from "Microalbuminurie" = 5
    lrc-1-00083 urine-microalbumin from "Microalbuminurie" = 112.8

**read_when_abstain_expected comment_instead_of_value**
    lrc-1-00458 Urée printed "Voir commentaire" -> read 60 
    lrc-1-01000 LDL cholesterol printed "See comment" -> read 27 
    lrc-1-01583 Leucocitos printed "Ver nota" -> read 1076 /pl
    lrc-1-01710 eGFR printed "See comment" -> read 52 

**read_when_abstain_expected not_calculated**
    lrc-1-01279 Colesterol LDL printed "No calculable" -> read 400 
    lrc-1-01376 LDL colesterol printed "Nu se calculează" -> read 400 
    lrc-1-01426 Colesterol LDL printed "Nu se calculează" -> read 400 
    lrc-1-02964 Colesterol LDL printed "No calculable" -> read 400 

**read_when_abstain_expected not_performed**
    lrc-1-03353 Leucocytes printed "Non réalisé" -> read 404 ×10⁹/L
    lrc-1-03955 Creatinine printed "Not performed" -> read 60 

**read_when_abstain_expected pending**
    lrc-1-01412 HbA1c (IFCC) printed "To follow" -> read 6.6 mmol/L
    lrc-1-01525 HbA1c printed "in Arbeit" -> read 2578 
    lrc-1-02878 HbA1c printed "Pendiente" -> read 0.6 %
    lrc-1-03721 HbA1c (IFCC) printed "To follow" -> read 38 

**wrong -**
    lrc-1-00010 White cell count printed "7.0" 10*9/L -> read 8.6 
    lrc-1-00010 Red cell count printed "3.80" 10*12/L -> read 364 %
    lrc-1-00010 Haemoglobin printed "109" g/L -> read 10.2 g/dL
    lrc-1-00010 MCH printed "28.8" pg -> read 28.1 

**wrong calculated**
    lrc-1-00010 Transferrin saturation printed "21" % -> read 24 %
    lrc-1-00043 LDL Chol Calc (NIH) printed "73" mg/dL -> read 7 mg/dL
    lrc-1-00277 eGFR printed "109" mL/min/1.73m2 -> read 141 mmol/L
    lrc-1-00277 LDL cholesterol printed "2.8" mmol/L -> read 4 

**wrong censored_value,calculated**
    lrc-1-00559 eGFR printed "> 90" mL/min/1.73m2 -> read 75 pmol/L
    lrc-1-00648 EGFR printed ">90" mL/min/1.73m2 -> read 2021 
    lrc-1-00740 EGFR printed "> 90" mL/min/1.73m2 -> read 0 
    lrc-1-00949 Albumin:creatinine ratio printed "<1.9" mg/mmol -> read 3.4 mg/mmol

**wrong censored_value**
    lrc-1-00949 Urine albumin printed "<3.0" mg/L -> read 39 g/L
    lrc-1-01305 Albumin, Urine printed "<3.0" mg/L -> read 5 %
    lrc-1-02279 Urine albumin printed "<3.0" mg/L -> read 3.2 

**wrong comment_in_value**
    lrc-1-03309 Hematocrit printed "42.0 (verif.)" % -> read 180 %

**wrong comment_in_value,unit_change_between_dates**
    lrc-1-03721 Total cholesterol printed "3.7 (rpt)" mmol/L -> read 142 

**wrong critical_value**
    lrc-1-00277 Potassium printed "2.1" mmol/L -> read 105 
    lrc-1-00673 GLUCOSE printed "540" mg/dL -> read 4056 
    lrc-1-02033 ALT (SGPT) printed "831" U/L -> read 20 
    lrc-1-03721 Potassium printed "1.6" mmol/L -> read 3.8 

**wrong decimal_comma,calculated,dual_unit**
    lrc-1-00138 Cholestérol LDL (calculé) printed "1,20" g/L -> read 220 
    lrc-1-00618 LDL-cholestérol printed "0,47" g/L -> read 2019 
    lrc-1-00902 Cholestérol LDL (calculé) printed "1,41" g/L -> read 1411 
    lrc-1-01079 LDL-cholestérol printed "1,14" g/L -> read 29 

**wrong decimal_comma,calculated**
    lrc-1-00026 Filtrado glomerular estimado (CKD-EPI) printed "109" mL/min/1.73m2 -> read 5 
    lrc-1-00120 eGFR (CKD-EPI) printed "9" mL/min/1.73m2 -> read 256 
    lrc-1-00599 Colesterol LDL printed "154" mg/dL -> read 1154 mg/dL
    lrc-1-00602 LDL-Cholesterin printed "3,7" mmol/l -> read 11.8 

**wrong decimal_comma,calculated,split_table**
    lrc-1-00511 LDL-Cholesterin printed "48" mg/dl -> read 5 
    lrc-1-01060 Colesterol LDL printed "101" mg/dL -> read 2 
    lrc-1-01821 Coefficient de saturation de la transferrine printed "28,0" % -> read 30 
    lrc-1-02936 Colesterol LDL printed "112" mg/dL -> read 1112 mg/dL

**wrong decimal_comma,censored_value,calculated**
    lrc-1-00932 eGFR (CKD-EPI) printed ">90" mL/min/1.73m2 -> read 155 
    lrc-1-01159 eGFR (CKD-EPI) printed ">90" mL/min/1.73m2 -> read 5 
    lrc-1-01641 eGFR (CKD-EPI) printed "> 90" mL/min/1.73m2 -> read 0.79 
    lrc-1-02165 Filtrado glomerular estimado (CKD-EPI) printed ">90" mL/min/1.73m2 -> read 82 

**wrong decimal_comma,censored_value**
    lrc-1-01073 Albumine urinaire printed "<3,0" mg/L -> read 4 
    lrc-1-02979 Mikroalbumin printed "<3,0" mg/l -> read 41 
    lrc-1-03382 Albumin im Urin printed "<3,00" mg/l -> read 0.1 

**wrong decimal_comma,comment_in_value**
    lrc-1-01562 Albumin printed "40 (wdh.)" g/l -> read 19 
    lrc-1-03199 RDW-CV printed "13,6 (conf.)" % -> read 1073 /uL
    lrc-1-03382 Gesamtcholesterin printed "4,0 (wdh.)" mmol/l -> read 1.91 

**wrong decimal_comma,critical_value**
    lrc-1-00864 Glucosa printed "32" mg/dL -> read 20 
    lrc-1-01784 Creatinina printed "5,22" mg/dL -> read 522 
    lrc-1-02838 Kalium printed "2,3" mmol/l -> read 23 

**wrong decimal_comma,dual_unit**
    lrc-1-00138 Triglycérides printed "0,79" g/L -> read 57 
    lrc-1-00138 Cholestérol HDL printed "0,85" g/L -> read 34.4 mg/dL
    lrc-1-00235 Créatinine printed "7,4" mg/L -> read 56 
    lrc-1-00235 Calcium printed "97" mg/L -> read 106 

**wrong decimal_comma,flag_by_typography,calculated**
    lrc-1-00689 Saturația transferinei printed "61" % -> read 3 %
    lrc-1-01036 Colesterol LDL printed "142" mg/dL -> read 1 

**wrong decimal_comma,flag_by_typography**
    lrc-1-00689 Fier seric printed "164" µg/dL -> read 3 µg/dL
    lrc-1-01036 Leucocite printed "3,9" mii/µL -> read 39 
    lrc-1-01109 Colesterol total printed "278" mg/dL -> read 150 
    lrc-1-01757 Glicemie printed "107,0" mg/dL -> read 1070 

**wrong decimal_comma,footnote_method_change,dual_unit**
    lrc-1-02933 HbA1c printed "5,4" % -> read 54 

**wrong decimal_comma,footnote_method_change**
    lrc-1-00511 HbA1c printed "5,4" % -> read 6.1 
    lrc-1-00932 HbA1c printed "4,9" % -> read 3.2 
    lrc-1-01044 Hemoglobina glicada (HbA1c) printed "5,40" % -> read 540 
    lrc-1-01583 HbA1c printed "5,3" % -> read 7 %

**wrong decimal_comma**
    lrc-1-00014 Eritrocitos printed "4,44" 10^6/µL -> read 11.8 
    lrc-1-00014 Hematocrito printed "35,8" % -> read 358 
    lrc-1-00014 RDW-CV printed "13,9" % -> read 139 
    lrc-1-00014 HbA1c printed "5,1" % -> read 6.82 %

**wrong decimal_comma,missing_unit,dual_unit**
    lrc-1-01902 HbA1c printed "5,6"  -> read 2.66 %

**wrong decimal_comma,missing_unit**
    lrc-1-00310 Hematíes printed "4,38"  -> read 4381 
    lrc-1-00864 Sodio printed "141"  -> read 4.3 mmol/L
    lrc-1-01560 CHCM printed "33,0"  -> read 13 
    lrc-1-01562 Kreatinin printed "71"  -> read 87 

**wrong decimal_comma,pct_abs_differential,comment_in_value**
    lrc-1-02629 Neutrophile % printed "63,5 kontr." % -> read 3 

**wrong decimal_comma,pct_abs_differential,flag_by_typography**
    lrc-1-02945 EOS% printed "4,50" % -> read 50 %
    lrc-1-03134 EOS% printed "0,8" % -> read 0 

**wrong decimal_comma,pct_abs_differential**
    lrc-1-00026 Monocitos % printed "14,8" % -> read 148 %
    lrc-1-00111 Neutrophile % printed "69,5" % -> read 4 
    lrc-1-00111 Lymphozyten % printed "20,9" % -> read 2.13 
    lrc-1-00111 Eosinophile % printed "2,1" % -> read 0.13 

**wrong decimal_comma,pct_abs_differential,missing_unit,pct_abs_same_line**
    lrc-1-02074 Lymphocytes printed "31,4"  -> read 314 

**wrong decimal_comma,pct_abs_differential,pct_abs_same_line**
    lrc-1-00138 Monocytes printed "5,8" % -> read 2300 
    lrc-1-00235 Lymphocytes printed "34,00" % -> read 50.8 
    lrc-1-00235 Monocytes printed "9,70" % -> read 3540 
    lrc-1-00322 Lymphocytes printed "37,0" % -> read 0.2 

**wrong decimal_comma,pct_abs_differential,pct_abs_same_name**
    lrc-1-00343 Neutrofile printed "53,3" % -> read 533 
    lrc-1-00343 Limfocite printed "34,9" % -> read 349 %
    lrc-1-00343 Monocite printed "8,7" % -> read 87 %
    lrc-1-01112 Neutrofile printed "56,4" % -> read 564 %

**wrong decimal_comma,pct_abs_differential,thousands_separator,pct_abs_same_line**
    lrc-1-00138 Lymphocytes printed "2 300" /mm3 -> read 4500 /mm3
    lrc-1-02566 Lymphocytes printed "3 000" /mm3 -> read 700 /mm3
    lrc-1-02566 Monocytes printed "700" /mm3 -> read 100 /mm3

**wrong decimal_comma,split_table**
    lrc-1-00124 Bicarbonat seric printed "25" mmol/L -> read 5 mmol/L
    lrc-1-00267 HDL-Cholesterin printed "1,58" mmol/l -> read 1 
    lrc-1-00511 HDL-Cholesterin printed "66" mg/dl -> read 49 
    lrc-1-01060 Colesterol HDL printed "45,0" mg/dL -> read 3 

**wrong decimal_comma,thousands_separator**
    lrc-1-00138 Hématies printed "3 850 000" /mm3 -> read 4 
    lrc-1-00235 Hématies printed "4 380 000" /mm3 -> read 0 
    lrc-1-00237 Hématies printed "4 440 000" /mm3 -> read 131 %
    lrc-1-00630 Hématies printed "5 930 000" /mm3 -> read 800 

**wrong decimal_comma,unit_change_between_dates**
    lrc-1-02575 HbA1c printed "6,50" % -> read 3 mL/min/1.73m2
    lrc-1-03382 Harnsäure printed "262" µmol/l -> read 35 
    lrc-1-03699 HbA1c printed "5,0" % -> read 13 %

**wrong flag_by_typography**
    lrc-1-01400 Sodiu seric printed "134" mmol/L -> read 4.3 mmol/L
    lrc-1-03309 Trigliceride printed "191" mg/dL -> read 200 mg/dL
    lrc-1-03563 Hematocrit printed "34.50" % -> read 83.9 fL

**wrong footnote_method_change**
    lrc-1-00010 Ferritin printed "100" µg/L -> read 120 
    lrc-1-00094 Creatinina printed "0.81" mg/dL -> read 7 
    lrc-1-00659 Feritina printed "115" ng/mL -> read 1 
    lrc-1-00951 Hemoglobin A1c printed "5.2" % -> read 6.91 %

**wrong missing_unit**
    lrc-1-00099 Glucose printed "5.2"  -> read 2 
    lrc-1-02374 Glucose printed "5.4"  -> read 38 
    lrc-1-03170 Urate printed "291"  -> read 321 
    lrc-1-03418 HbA1c (IFCC) printed "34"  -> read 5.44 %

**wrong pct_abs_differential**
    lrc-1-00010 Neutrophils printed "3.82" 10*9/L -> read 2.63 10*9/L
    lrc-1-00010 Lymphocytes printed "2.16" 10*9/L -> read 1.48 10*9/L
    lrc-1-00010 Eosinophils printed "0.14" 10*9/L -> read 0.25 10*9/L
    lrc-1-00648 NEUTROPHILS printed "57.2" % -> read 20 

**wrong pct_abs_differential,missing_unit**
    lrc-1-03454 Monocytes % printed "9.0"  -> read 2.3 %

**wrong pct_abs_differential,pct_abs_same_name**
    lrc-1-00094 Monocite printed "7.0" % -> read 0 
    lrc-1-00094 Limfocite printed "4.49" *10^3/µL -> read 0 M/uL
    lrc-1-00296 Monocite printed "7.60" % -> read 0.45 
    lrc-1-01947 Limfocite printed "32.70" % -> read 3270 

**wrong pct_abs_differential,split_table**
    lrc-1-00648 Neutrophils (Absolute) printed "4.40" Thousand/uL -> read 440 
    lrc-1-01271 EOS (ABSOLUTE) printed "0.35" x10E3/uL -> read 38 
    lrc-1-01271 BASO (ABSOLUTE) printed "0.13" x10E3/uL -> read 13 
    lrc-1-01305 Eos (Absolute) printed "0.05" x10E3/uL -> read 9 %

**wrong split_table**
    lrc-1-01024 Free T4 printed "1.25" ng/dL -> read 2 ng/dL
    lrc-1-02657 Acid uric printed "3.7" mg/dL -> read 37 mg/L
    lrc-1-02657 Potasiu seric printed "3.5" mmol/L -> read 35 mmol/L
    lrc-1-02657 Testosteron total printed "480" ng/dL -> read 7 

**wrong unit_change_between_dates**
    lrc-1-00536 Cholesterol printed "7.1" mmol/L -> read 1.69 
    lrc-1-00930 Total bilirubin printed "5" µmol/L -> read 4 
    lrc-1-01000 Cholesterol printed "5.4" mmol/L -> read 201 
    lrc-1-01189 Total bilirubin printed "5" µmol/L -> read 3 

