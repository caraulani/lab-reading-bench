# Lab-report reader stress test

385 corpus reports (test split, input scan_noisy), 11262 rows with a known answer, seed 1. Read in 211.1 s (548.3 ms a report).

| Outcome | Rows | Share | 95% interval |
|---|---|---|---|
| ok | 1666 | 14.8% | 14.15–15.46% |
| unit | 1101 | 9.8% | 9.24–10.34% |
| unconverted | 53 | 0.5% | 0.36–0.62% |
| wrong | 2714 | 24.1% | 23.32–24.90% |
| miss | 5728 | 50.9% | 49.94–51.78% |

- **Critical values:** 16 of 33 caught (48.5%, interval 32.50–64.78%); 15 lost because the row was not read, 2 because it was misread. False critical alarms: 307.
- **Rows that are not on the report:** 302 (of 5844 rows read).
- **Lab's flag:** ok 2679, missed 102, invented 38, wrong 1.
- **Reference range:** missed 1727, wrong 155, ok 938.
- **Collection date:** ok 174, missed 209, wrong 2.
- **Wrong values printed in a unit that needs converting:** 690 of 2714 (25.4%).

## By locale
| locale | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| FR | 2253 | 2.8% | 4.5% | 1.9% | 14.6% | 76.2% |
| US | 1750 | 16.3% | 15.5% | 0.0% | 28.9% | 39.3% |
| DE | 2136 | 16.8% | 10.6% | 0.094% | 28.4% | 44.1% |
| RO | 2075 | 17.6% | 13.3% | 0.0% | 14.9% | 54.3% |
| ES | 1505 | 18.9% | 10.2% | 0.0% | 22.8% | 48.0% |
| UK | 1543 | 19.9% | 4.7% | 0.5% | 40.3% | 34.5% |

## By layout
| layout | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| uk-cum | 762 | 2.4% | 3.3% | 0.0% | 61.2% | 33.2% |
| fr-b | 1406 | 2.6% | 5.4% | 1.1% | 13.5% | 77.4% |
| fr-a | 847 | 3.2% | 3.0% | 3.3% | 16.3% | 74.3% |
| us-cum | 288 | 7.6% | 28.8% | 0.0% | 35.1% | 28.5% |
| de-cum | 703 | 7.7% | 10.0% | 0.0% | 38.8% | 43.5% |
| ro-b | 1067 | 7.7% | 17.4% | 0.0% | 16.1% | 58.8% |
| de-a | 516 | 15.3% | 10.9% | 0.0% | 19.8% | 54.1% |
| us-b | 527 | 16.1% | 15.9% | 0.0% | 25.8% | 42.1% |
| es-a | 680 | 17.1% | 9.7% | 0.0% | 19.6% | 53.7% |
| us-a | 935 | 19.1% | 11.2% | 0.0% | 28.7% | 41.0% |
| es-cum | 825 | 20.5% | 10.7% | 0.0% | 25.5% | 43.4% |
| de-mono | 917 | 24.6% | 10.9% | 0.2% | 25.3% | 38.9% |
| ro-a | 1008 | 28.1% | 8.8% | 0.0% | 13.6% | 49.5% |
| uk-a | 781 | 37.0% | 6.1% | 1.0% | 20.0% | 35.9% |

## By heldout
| heldout | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| false | 10345 | 13.9% | 9.7% | 0.5% | 24.0% | 51.9% |
| true | 917 | 24.6% | 10.9% | 0.2% | 25.3% | 38.9% |

## By units
| units | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| FR | 2253 | 2.8% | 4.5% | 1.9% | 14.6% | 76.2% |
| conventional | 6683 | 17.6% | 13.1% | 0.0% | 22.7% | 46.5% |
| SI | 2326 | 18.2% | 5.2% | 0.4% | 37.4% | 38.7% |

## By decimal
| decimal | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| comma | 7367 | 13.4% | 9.3% | 0.6% | 20.2% | 56.5% |
| point | 3895 | 17.4% | 10.7% | 0.2% | 31.5% | 40.2% |

## By marker
| marker | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| basophils-percent | 136 | 2.9% | 0.0% | 0.0% | 8.1% | 89.0% |
| lymphocytes-absolute | 152 | 3.9% | 1.3% | 0.0% | 5.9% | 88.8% |
| ast | 181 | 5.5% | 25.4% | 0.0% | 22.7% | 46.4% |
| tsh | 144 | 5.6% | 38.9% | 0.0% | 29.9% | 25.7% |
| eosinophils-percent | 136 | 5.9% | 0.0% | 0.0% | 11.0% | 83.1% |
| wbc | 229 | 6.1% | 16.6% | 0.0% | 30.1% | 47.2% |
| platelet-count | 218 | 6.4% | 23.4% | 0.0% | 15.1% | 55.0% |
| ggt | 184 | 6.5% | 31.0% | 0.0% | 25.0% | 37.5% |
| alt | 200 | 7.0% | 24.5% | 0.0% | 25.0% | 43.5% |
| eosinophils-absolute | 152 | 7.2% | 1.3% | 0.0% | 12.5% | 78.9% |
| urine-acr | 133 | 7.5% | 0.0% | 3.8% | 13.5% | 75.2% |
| rbc | 215 | 7.9% | 20.9% | 0.0% | 34.9% | 36.3% |
| basophils-absolute | 151 | 7.9% | 0.0% | 0.0% | 4.0% | 88.1% |
| folate-serum | 123 | 8.9% | 2.4% | 0.0% | 20.3% | 68.3% |
| neutrophils-absolute | 152 | 9.2% | 3.3% | 0.0% | 5.9% | 81.6% |
| alp | 179 | 9.5% | 16.8% | 0.0% | 17.3% | 56.4% |
| urine-albumin | 133 | 10.5% | 0.0% | 0.0% | 26.3% | 63.2% |
| free-t3 | 100 | 11.0% | 6.0% | 0.0% | 27.0% | 56.0% |
| egfr | 240 | 11.3% | 18.8% | 0.0% | 20.8% | 49.2% |
| albumin-serum | 240 | 11.7% | 4.2% | 0.0% | 29.6% | 54.6% |
| monocytes-absolute | 151 | 11.9% | 0.0% | 0.0% | 6.6% | 81.5% |
| tibc | 123 | 13.0% | 6.5% | 0.0% | 10.6% | 69.9% |
| hba1c | 233 | 13.3% | 2.6% | 0.4% | 36.9% | 46.8% |
| lymphocytes-percent | 134 | 13.4% | 0.0% | 0.0% | 35.8% | 50.7% |
| uric-acid | 251 | 13.5% | 5.6% | 0.0% | 15.5% | 65.3% |
| triglycerides | 287 | 13.6% | 11.5% | 2.4% | 28.2% | 44.3% |
| phosphorus-serum | 255 | 13.7% | 3.5% | 0.0% | 29.8% | 52.9% |
| vitamin-d-25-oh | 150 | 14.0% | 8.0% | 0.0% | 13.3% | 64.7% |
| urine-creatinine | 133 | 14.3% | 0.0% | 6.8% | 29.3% | 49.6% |
| mcv | 219 | 15.1% | 16.4% | 0.0% | 22.4% | 46.1% |
| ldl-cholesterol | 280 | 15.4% | 16.1% | 2.1% | 23.2% | 43.2% |
| sodium-serum | 246 | 15.4% | 20.3% | 0.0% | 22.8% | 41.5% |
| hs-crp | 250 | 15.6% | 7.2% | 0.0% | 19.6% | 57.6% |
| transferrin-saturation | 132 | 15.9% | 6.1% | 0.0% | 14.4% | 63.6% |
| monocytes-percent | 136 | 16.2% | 0.0% | 0.0% | 45.6% | 38.2% |
| neutrophils-percent | 135 | 16.3% | 0.0% | 0.0% | 19.3% | 64.4% |
| hematocrit | 218 | 16.5% | 6.0% | 0.0% | 34.9% | 42.7% |
| creatinine-serum | 271 | 16.6% | 5.5% | 0.7% | 29.9% | 47.2% |
| potassium-serum | 261 | 17.2% | 9.2% | 0.0% | 28.4% | 45.2% |
| total-protein | 254 | 17.3% | 6.3% | 0.0% | 22.4% | 53.9% |
| mch | 220 | 18.2% | 10.9% | 0.0% | 23.2% | 47.7% |
| ferritin | 132 | 18.2% | 12.1% | 0.0% | 15.2% | 54.5% |
| magnesium-serum | 259 | 18.5% | 4.2% | 0.0% | 50.6% | 26.6% |
| rdw-cv | 209 | 18.7% | 0.0% | 0.0% | 23.4% | 57.9% |
| total-cholesterol | 286 | 19.2% | 19.6% | 0.7% | 41.3% | 19.2% |
| total-bilirubin | 181 | 19.3% | 4.4% | 0.6% | 18.8% | 56.9% |
| vitamin-b12 | 122 | 19.7% | 9.8% | 0.0% | 14.8% | 55.7% |
| blood-urea-nitrogen | 136 | 19.9% | 14.7% | 0.0% | 9.6% | 55.9% |
| thyroglobulin | 5 | 20.0% | 0.0% | 0.0% | 0.0% | 80.0% |
| hdl-cholesterol | 287 | 20.2% | 13.6% | 3.5% | 32.8% | 30.0% |
| mchc | 220 | 20.5% | 6.8% | 0.0% | 30.5% | 42.3% |
| chloride-serum | 247 | 21.5% | 13.0% | 0.0% | 16.6% | 49.0% |
| bicarbonate-co2 | 246 | 21.5% | 0.0% | 0.0% | 11.8% | 66.7% |
| glucose-fasting | 315 | 21.9% | 10.2% | 1.6% | 23.8% | 42.5% |
| calcium-total | 252 | 22.6% | 8.3% | 2.0% | 34.5% | 32.5% |
| testosterone-total | 53 | 22.6% | 18.9% | 0.0% | 15.1% | 43.4% |
| hemoglobin | 215 | 23.3% | 6.0% | 0.0% | 26.5% | 44.2% |
| serum-iron | 153 | 24.2% | 19.6% | 0.0% | 28.1% | 28.1% |
| free-t4 | 102 | 25.5% | 9.8% | 0.0% | 20.6% | 44.1% |
| urea | 105 | 30.5% | 0.0% | 0.0% | 46.7% | 22.9% |

## What went wrong, most common first

**346× range missed | RO undefined | two-sided**
    lrc-1-00057 [RO ro-b ro-b -]  l004 Hematocrit 47,8 %  →  read 47.8 
    lrc-1-00057 [RO ro-b ro-b -]  l005 HEM 29,1 pg  →  read 29.1 pg
    lrc-1-00057 [RO ro-b ro-b -]  l008 Trombocite 154 10^3/µL  →  read 154 

**317× range missed | US undefined | two-sided**
    lrc-1-00192 [US us-a us-a -]  l002 Hemoglobin A1c 4.9 %  →  read 4.9 %
    lrc-1-00192 [US us-a us-a -]  l017 RBC 4.96 Million/uL  →  read 4.96 
    lrc-1-00192 [US us-a us-a -]  l021 PLATELET COUNT 141 Thousand/uL  →  read 141 Thousand/uL L

**260× range missed | DE undefined | two-sided**
    lrc-1-00111 [DE de-cum de-cum -]  l001 Leukozyten 10,7 Tsd/µl  →  read 10.7 
    lrc-1-00120 [DE de-cum de-cum -]  l035 GPT (ALT) 15 U/l  →  read 15 
    lrc-1-00267 [DE de-cum de-cum -]  l006 MCH 28,4 pg  →  read 28.4 pg

**205× unit | "mg/dL" not recognised**
    lrc-1-00043 [US us-b us-b -]  l001 CHOLESTEROL, TOTAL 174 mg/dL  →  read 174  [0, 150]
    lrc-1-00043 [US us-b us-b -]  l002 Triglycerides 251 mg/dL  →  read 251  H
    lrc-1-00083 [RO ro-b ro-b -]  l001 Glicemie 92 mg/dL  →  read 92 

**198× range missed | UK undefined | two-sided**
    lrc-1-00077 [UK uk-a uk-a -]  l001 Fasting glucose 5.2   →  read 5.2 
    lrc-1-00077 [UK uk-a uk-a -]  l002 HbA1c 37 mmol/mol  →  read 5.54 %
    lrc-1-00077 [UK uk-a uk-a -]  l004 Urea 5.1 mmol/L  →  read 5.1 

**153× range missed | ES undefined | two-sided**
    lrc-1-00014 [ES es-cum es-cum -]  l003 Hemoglobina 11,8 g/dL  →  read 11.8 g/dL L
    lrc-1-00014 [ES es-cum es-cum -]  l005 VCM 80,6 fL  →  read 80.6 
    lrc-1-00014 [ES es-cum es-cum -]  l006 HCM 26,50 pg  →  read 26.5 pg

**141× unit | "U/L" not recognised**
    lrc-1-00014 [ES es-cum es-cum -]  l035 GPT (ALT) 14,0 U/L  →  read 14  [7, 56]
    lrc-1-00026 [ES es-cum es-cum -]  l038 GPT (ALT) 20 U/L  →  read 20  [7, 56]
    lrc-1-00026 [ES es-cum es-cum -]  l039 AST (GOT) 25 U/L  →  read 25  [10, 40]

**108× range missed | FR undefined | two-sided**
    lrc-1-00235 [FR fr-a fr-a -]  l001 Leucocytes 4 900 /mm3  →  read 4.9 ×10⁹/L
    lrc-1-00393 [FR fr-b fr-b -]  l020 Sodium 139 mmol/L  →  read 139 mmol/L
    lrc-1-00393 [FR fr-b fr-b -]  l021 Potassium 3,8 mmol/L  →  read 3.8 

**85× unit | "mmol/L" not recognised**
    lrc-1-00057 [RO ro-b ro-b -]  l013 Potasiu seric 2,0 mmol/L  →  read 2 
    lrc-1-00057 [RO ro-b ro-b -]  l014 Clor seric 102 mmol/L  →  read 102 
    lrc-1-00083 [RO ro-b ro-b -]  l008 Clor seric 104 mmol/L  →  read 104 

**74× miss | triglycerides | "TG"**
    lrc-1-00014 [ES es-cum es-cum -]  l042 TG 131 mg/dL
    lrc-1-00094 [RO ro-b ro-b -]  l038 TG 17 mg/dL
    lrc-1-00120 [DE de-cum de-cum -]  l041 TG 1,00 mmol/l

**73× date missed | FR lines**
    lrc-1-00138  want 2026-08-03 read null
    lrc-1-00208  want 2026-02-16 read null
    lrc-1-00235  want 2026-10-02 read null

**65× false critical | creatinine-serum**
    lrc-1-00014 [ES es-cum es-cum -]  l024 Creatinina 0,80 mg/dL  →  read 87 
    lrc-1-00094 [RO ro-b ro-b -]  l022 Creatinina 0.81 mg/dL  →  read 7 
    lrc-1-00192 [US us-a us-a -]  l005 CREATININE 0.75 mg/dL  →  read 75 mg/dL

**65× false critical | glucose-fasting**
    lrc-1-00077 [UK uk-a uk-a -]  l001 Fasting glucose 5.2   →  read 5.2 
    lrc-1-00099 [UK uk-a uk-a -]  l001 Glucose 5.2   →  read 2  [3.9, 5.5]
    lrc-1-00120 [DE de-cum de-cum -]  l022 Glucose 5,8 mmol/l  →  read 4.056 

**62× false critical | potassium-serum**
    lrc-1-00120 [DE de-cum de-cum -]  l028 Kalium 4,0 mmol/l  →  read 26 
    lrc-1-00480 [DE de-mono de-mono -]  l015 Kalium 3,7 mmol/l  →  read 104 
    lrc-1-00547 [US us-a us-a -]  l008 POTASSIUM 4.0 mmol/L  →  read 40 

**51× false critical | sodium-serum**
    lrc-1-00026 [ES es-cum es-cum -]  l028 Sodio 140 mmol/L  →  read 58 
    lrc-1-00182 [US us-cum us-cum -]  l005 SODIUM 138 mmol/L  →  read 4 mEq/L
    lrc-1-00192 [US us-a us-a -]  l008 Sodium 140 mmol/L  →  read 5 

**51× unit | "mg/dl" not recognised**
    lrc-1-00960 [DE de-a de-a -]  l040 Triglyceride 116 mg/dl  →  read 116  [, 150]
    lrc-1-00986 [DE de-cum de-cum -]  l046 HDL-Cholesterin 62 mg/dl  →  read 62 
    lrc-1-00986 [DE de-cum de-cum -]  l047 LDL-Cholesterin 120 mg/dl  →  read 120 

**49× range missed | DE undefined | upper only**
    lrc-1-00511 [DE de-mono de-mono -]  l042 Cholesterin gesamt 142 mg/dl  →  read 142 mg/dL
    lrc-1-00939 [DE de-mono de-mono -]  l022 Gesamtcholesterin 7,6 mmol/l  →  read 294 mg/dL H
    lrc-1-00960 [DE de-a de-a -]  l033 CRP hochsensitiv 0,7 mg/l  →  read 0.7 mg/L

**48× range missed | US undefined | upper only**
    lrc-1-00043 [US us-b us-b -]  l002 Triglycerides 251 mg/dL  →  read 251  H
    lrc-1-00233 [US us-b us-b -]  l022 TRIGLYCERIDES 87 mg/dL  →  read 87 mg/dL
    lrc-1-00497 [US us-a us-a -]  l023 TRIGLYCERIDES 52 mg/dL  →  read 52 

**46× miss | lymphocytes-absolute | "Lymphocytes"**
    lrc-1-00099 [UK uk-a uk-a -]  l039 Lymphocytes 1.40 10*9/L
    lrc-1-00235 [FR fr-a fr-a -]  l012 Lymphocytes 1 700 (contr.) /mm3
    lrc-1-00322 [FR fr-a fr-a -]  l011 Lymphocytes 2,00 G/L

**46× miss | bicarbonate-co2 | "Bicarbonat"**
    lrc-1-00120 [DE de-cum de-cum -]  l029 Bicarbonat 26 mmol/l
    lrc-1-00267 [DE de-cum de-cum -]  l030 Bicarbonat 25,0 mmol/l
    lrc-1-00418 [DE de-mono de-mono -]  l019 Bicarbonat 25 mmol/l

**46× miss | monocytes-absolute | "Monocytes"**
    lrc-1-00138 [FR fr-b fr-b -]  l013 Monocytes 500 /mm3
    lrc-1-00235 [FR fr-a fr-a -]  l013 Monocytes 500 /mm3
    lrc-1-00322 [FR fr-a fr-a -]  l012 Monocytes 0,48 G/L

**45× unit | "mL/min/1.73m2" not recognised**
    lrc-1-00077 [UK uk-a uk-a -]  l006 eGFR 85 mL/min/1.73m2  →  read 85 
    lrc-1-00192 [US us-a us-a -]  l006 EGFR 121 mL/min/1.73m2  →  read 121  [60, ] L
    lrc-1-00296 [RO ro-b ro-b -]  l026 eGFR 130 mL/min/1.73m2  →  read 130 

**44× miss | albumin-serum | "Albumine"**
    lrc-1-00208 [FR fr-b fr-b -]  l012 Albumine 38 g/L
    lrc-1-00237 [FR fr-b fr-b -]  l025 Albumine 43 g/L
    lrc-1-00322 [FR fr-a fr-a -]  l025 Albumine 41 g/L

**43× date missed | ES lines**
    lrc-1-00026  want 2026-08-20 read null
    lrc-1-00310  want 2026-09-06 read null
    lrc-1-00334  want 2026-07-23 read null

**42× miss | uric-acid | "Harnsäure"**
    lrc-1-00120 [DE de-cum de-cum -]  l027 Harnsäure 268 µmol/l
    lrc-1-00252 [DE de-a de-a -]  l004 Harnsäure 7,0 mg/dl
    lrc-1-00418 [DE de-mono de-mono -]  l016 Harnsäure 339 µmol/l

**42× unit | "g/dL" not recognised**
    lrc-1-00124 [RO ro-a ro-a -]  l003 Hemoglobina 10,5 g/dL  →  read 10.5 
    lrc-1-00296 [RO ro-b ro-b -]  l035 Albumină serică 4.0 g/dL  →  read 4 
    lrc-1-00343 [RO ro-a ro-a -]  l003 Hemoglobină 14,0 (verif.) g/dL  →  read 14  [12, 16]

**42× miss | mch | "TCMH"**
    lrc-1-00138 [FR fr-b fr-b -]  l006 TCMH 28,10 pg
    lrc-1-00235 [FR fr-a fr-a -]  l006 TCMH 29,0 pg
    lrc-1-00237 [FR fr-b fr-b -]  l006 TCMH 30,5 pg

**42× miss | platelet-count | "Plaquettes"**
    lrc-1-00138 [FR fr-b fr-b -]  l009 Plaquettes 288 000 /mm3
    lrc-1-00235 [FR fr-a fr-a -]  l009 Plaquettes 306 000 /mm3
    lrc-1-00237 [FR fr-b fr-b -]  l009 Plaquettes 311 000 /mm3

**42× range missed | FR undefined | upper only**
    lrc-1-00138 [FR fr-b fr-b -]  l036 Cholestérol total 2,21 g/L  →  read 221 %
    lrc-1-00393 [FR fr-b fr-b -]  l036 Cholestérol total 2,00 g/L  →  read 200 
    lrc-1-00581 [FR fr-a fr-a -]  l031 Triglycérides 0,51 g/L  →  read 51 

**40× miss | hematocrit | "Hématocrite"**
    lrc-1-00138 [FR fr-b fr-b -]  l004 Hématocrite 32,60 %
    lrc-1-00235 [FR fr-a fr-a -]  l004 Hématocrite 39,2 %
    lrc-1-00237 [FR fr-b fr-b -]  l004 Hématocrite 40,7 %

**39× miss | hba1c | "HbA1c"**
    lrc-1-00099 [UK uk-a uk-a -]  l002 HbA1c 37 mmol/mol
    lrc-1-00418 [DE de-mono de-mono -]  l012 HbA1c 5,6 %
    lrc-1-00453 [UK uk-a uk-a -]  l002 HbA1c 40 mmol/mol

**39× unit | "U/l" not recognised**
    lrc-1-00120 [DE de-cum de-cum -]  l035 GPT (ALT) 15 U/l  →  read 15 
    lrc-1-00267 [DE de-cum de-cum -]  l036 ALT (GPT) 16 U/l  →  read 16  [7, 56]
    lrc-1-00267 [DE de-cum de-cum -]  l037 AST (GOT) 15 U/l  →  read 15  [10, 40]

**39× miss | mchc | "CCMH"**
    lrc-1-00138 [FR fr-b fr-b -]  l007 CCMH 33,2 g/dL
    lrc-1-00235 [FR fr-a fr-a -]  l007 CCMH 32,4 g/dL
    lrc-1-00237 [FR fr-b fr-b -]  l007 CCMH 33,3 g/dL

**38× range missed | RO undefined | upper only**
    lrc-1-00083 [RO ro-b ro-b -]  l014 hs-CRP 1,6 mg/L  →  read 1.6 mg/L
    lrc-1-00083 [RO ro-b ro-b -]  l021 Colesterol total 189 mg/dL  →  read 189 
    lrc-1-00083 [RO ro-b ro-b -]  l022 Trigliceride 52 mg/dL  →  read 52 

**38× range wrong | RO undefined | two-sided**
    lrc-1-00124 [RO ro-a ro-a -]  l031 Magneziu seric 2,2 mg/dL  →  read 2.2 mg/dL [17, 24]
    lrc-1-00124 [RO ro-a ro-a -]  l039 Bilirubina totala 0,6 mg/dL  →  read 0.6 mg/dL [2, 12]
    lrc-1-00124 [RO ro-a ro-a -]  l052 T3 liber 2,9 pg/mL  →  read 2.9 pg/mL [23, 42]

**38× miss | glucose-fasting | "Glucose"**
    lrc-1-00130 [UK uk-a uk-a -]  l001 Glucose 7.1 mmol/L
    lrc-1-00233 [US us-b us-b -]  l001 Glucose 101 mg/dL
    lrc-1-00252 [DE de-a de-a -]  l001 Glucose 103 mg/dl

**38× miss | hemoglobin | "Hémoglobine"**
    lrc-1-00138 [FR fr-b fr-b -]  l003 Hémoglobine 10,8 g/dL
    lrc-1-00235 [FR fr-a fr-a -]  l003 Hémoglobine 12,7 g/dL
    lrc-1-00237 [FR fr-b fr-b -]  l003 Hémoglobine 13,6 

**37× range wrong | ES undefined | two-sided**
    lrc-1-00014 [ES es-cum es-cum -]  l026 Ácido úrico 4,1 mg/dL  →  read 4.1 mg/dL [25, 70]
    lrc-1-00026 [ES es-cum es-cum -]  l034 Proteínas totales 7,1 g/dL  →  read 7.1 g/dL [60, 83]
    lrc-1-00355 [ES es-a es-a -]  l026 Potasio 4,2 mmol/L  →  read 4.2 mmol/L [3.5, 51]

**37× miss | albumin-serum | "Albumin"**
    lrc-1-00077 [UK uk-a uk-a -]  l015 Albumin 40 g/L
    lrc-1-00120 [DE de-cum de-cum -]  l032 Albumin 43 g/l
    lrc-1-00252 [DE de-a de-a -]  l012 Albumin 4,3 g/dl

**36× miss | mch | "MCH"**
    lrc-1-00077 [UK uk-a uk-a -]  l022 MCH 25.1 pg
    lrc-1-00111 [DE de-cum de-cum -]  l005 MCH 27,1 pg
    lrc-1-00120 [DE de-cum de-cum -]  l006 MCH 29,2 pg

**36× miss | total-bilirubin | "Bilirubine totale"**
    lrc-1-00138 [FR fr-b fr-b -]  l034 Bilirubine totale 3,0 mg/L
    lrc-1-00322 [FR fr-a fr-a -]  l032 Bilirubine totale 9,0 mg/L
    lrc-1-00393 [FR fr-b fr-b -]  l034 Bilirubine totale 2,0 mg/L

**36× unit | "g/L" not recognised**
    lrc-1-00393 [FR fr-b fr-b -]  l036 Cholestérol total 2,00 g/L  →  read 200 
    lrc-1-00581 [FR fr-a fr-a -]  l031 Triglycérides 0,51 g/L  →  read 51 
    lrc-1-00630 [FR fr-a fr-a -]  l037 Triglycérides 0,50 g/L  →  read 50 

**35× miss | urine-albumin | "Microalbuminurie"**
    lrc-1-00057 [RO ro-b ro-b -]  l022 Microalbuminurie 5,3 mg/L
    lrc-1-00083 [RO ro-b ro-b -]  l027 Microalbuminurie 12,8 mg/L
    lrc-1-00124 [RO ro-a ro-a -]  l059 Microalbuminurie <3,0 mg/L

**35× range wrong | US undefined | two-sided**
    lrc-1-00192 [US us-a us-a -]  l009 POTASSIUM 4.7 mEq/L  →  read 4.7 mEq/L [35, 5.1]
    lrc-1-00192 [US us-a us-a -]  l011 CALCIUM 9.2 mg/dL  →  read 9.2 mg/dL [86, 103]
    lrc-1-00233 [US us-b us-b -]  l031 MCH 31.8 pg  →  read 31.8  [270, 330]

**34× miss | phosphorus-serum | "Fósforo"**
    lrc-1-00014 [ES es-cum es-cum -]  l030 Fósforo 4,00 mg/dL
    lrc-1-00026 [ES es-cum es-cum -]  l033 Fósforo 3,4 mg/dL
    lrc-1-00310 [ES es-cum es-cum -]  l030 Fósforo 3,9 mg/dL

**34× date missed | RO lines**
    lrc-1-00083  want 2026-02-17 read null
    lrc-1-00094  want 2026-01-09 read null
    lrc-1-00124  want 2026-04-19 read null

**34× miss | potassium-serum | "Potassium"**
    lrc-1-00099 [UK uk-a uk-a -]  l007 Potassium 4.2 mmol/L
    lrc-1-00130 [UK uk-a uk-a -]  l006 Potassium 3.9 mmol/L
    lrc-1-00138 [FR fr-b fr-b -]  l022 Potassium 3,6 mmol/L

**34× miss | neutrophils-percent | "Polynucléaires neutrophiles"**
    lrc-1-00138 [FR fr-b fr-b -]  l011 Polynucléaires neutrophiles 57,20 %
    lrc-1-00235 [FR fr-a fr-a -]  l011 Polynucléaires neutrophiles 52,50 %
    lrc-1-00322 [FR fr-a fr-a -]  l010 Polynucléaires neutrophiles 51,8 %

**34× miss | neutrophils-absolute | "Polynucléaires neutrophiles"**
    lrc-1-00138 [FR fr-b fr-b -]  l011 Polynucléaires neutrophiles 4 500 /mm3
    lrc-1-00235 [FR fr-a fr-a -]  l011 Polynucléaires neutrophiles 2 600 /mm3
    lrc-1-00322 [FR fr-a fr-a -]  l010 Polynucléaires neutrophiles 2,80 

**34× miss | eosinophils-percent | "Polynucléaires éosinophiles"**
    lrc-1-00138 [FR fr-b fr-b -]  l014 Polynucléaires éosinophiles 7,3 %
    lrc-1-00235 [FR fr-a fr-a -]  l014 Polynucléaires éosinophiles 2,6 %
    lrc-1-00322 [FR fr-a fr-a -]  l013 Polynucléaires éosinophiles 1,60 %

**34× miss | eosinophils-absolute | "Polynucléaires éosinophiles"**
    lrc-1-00138 [FR fr-b fr-b -]  l014 Polynucléaires éosinophiles 600 /mm3
    lrc-1-00235 [FR fr-a fr-a -]  l014 Polynucléaires éosinophiles 100 /mm3
    lrc-1-00322 [FR fr-a fr-a -]  l013 Polynucléaires éosinophiles 0,09 G/L

**34× miss | basophils-percent | "Polynucléaires basophiles"**
    lrc-1-00138 [FR fr-b fr-b -]  l015 Polynucléaires basophiles 0,7 %
    lrc-1-00235 [FR fr-a fr-a -]  l015 Polynucléaires basophiles 1,2 %
    lrc-1-00322 [FR fr-a fr-a -]  l014 Polynucléaires basophiles 0,8 %

**34× miss | basophils-absolute | "Polynucléaires basophiles"**
    lrc-1-00138 [FR fr-b fr-b -]  l015 Polynucléaires basophiles 100 /mm3
    lrc-1-00235 [FR fr-a fr-a -]  l015 Polynucléaires basophiles 100 /mm3
    lrc-1-00322 [FR fr-a fr-a -]  l014 Polynucléaires basophiles 0,04 G/L

**33× miss | mcv | "MCV"**
    lrc-1-00010 [UK uk-cum uk-cum -]  l005 MCV 88.0 fL
    lrc-1-00418 [DE de-mono de-mono -]  l005 MCV 102,2 fl
    lrc-1-00453 [UK uk-a uk-a -]  l027 MCV 86.3 fL

**33× miss | creatinine-serum | "Cr"**
    lrc-1-00077 [UK uk-a uk-a -]  l005 Cr 76 µmol/L
    lrc-1-00418 [DE de-mono de-mono -]  l015 Cr 78 µmol/l
    lrc-1-00750 [RO ro-b ro-b -]  l012 Cr 0,96 mg/dL

**33× miss | mchc | "MCHC"**
    lrc-1-00111 [DE de-cum de-cum -]  l006 MCHC 32,6 g/dl
    lrc-1-00418 [DE de-mono de-mono -]  l007 MCHC 341 g/l
    lrc-1-00511 [DE de-mono de-mono -]  l006 MCHC 34,6 g/dl

**32× miss | bicarbonate-co2 | "Bicarbonato"**
    lrc-1-00014 [ES es-cum es-cum -]  l028 Bicarbonato 25 mmol/L
    lrc-1-00026 [ES es-cum es-cum -]  l030 Bicarbonato 25 mmol/L
    lrc-1-00310 [ES es-cum es-cum -]  l027 Bicarbonato 26 mmol/L

**32× miss | ldl-cholesterol | "Colesterol LDL"**
    lrc-1-00026 [ES es-cum es-cum -]  l047 Colesterol LDL 104 mg/dL
    lrc-1-00094 [RO ro-b ro-b -]  l040 Colesterol LDL 87 mg/dL
    lrc-1-00296 [RO ro-b ro-b -]  l048 Colesterol LDL 63 mg/dL

**32× miss | rdw-cv | "RDW"**
    lrc-1-00094 [RO ro-b ro-b -]  l006 RDW 14.0 %
    lrc-1-00648 [US us-a us-a -]  l037 RDW 11.9 %
    lrc-1-00750 [RO ro-b ro-b -]  l007 RDW 14,80 %

**31× miss | tsh | "TSH"**
    lrc-1-00014 [ES es-cum es-cum -]  l051 TSH 4,83 µUI/mL
    lrc-1-00458 [FR fr-b fr-b -]  l027 TSH 0,83 mUI/L
    lrc-1-01024 [US us-a us-a -]  l042 TSH 2.57 mIU/L

**31× miss | potassium-serum | "Kaliémie"**
    lrc-1-00208 [FR fr-b fr-b -]  l006 Kaliémie 4,40 mmol/L
    lrc-1-00235 [FR fr-a fr-a -]  l023 Kaliémie 4,2 mmol/L
    lrc-1-00618 [FR fr-b fr-b -]  l008 Kaliémie 4,3 mmol/L

**30× miss | chloride-serum | "Chlore"**
    lrc-1-00208 [FR fr-b fr-b -]  l007 Chlore 99 mmol/L
    lrc-1-00237 [FR fr-b fr-b -]  l019 Chlore 100 mmol/L
    lrc-1-00581 [FR fr-a fr-a -]  l017 Chlore 104 mmol/L

**30× range missed | DE undefined | lower only**
    lrc-1-00480 [DE de-mono de-mono -]  l013 eGFR (CKD-EPI) 121,0 mL/min/1.73m2  →  read 121 
    lrc-1-00939 [DE de-mono de-mono -]  l005 eGFR (CKD-EPI) 65,0 mL/min/1.73m2  →  read 65 mL/min/1.73m2
    lrc-1-00986 [DE de-cum de-cum -]  l046 HDL-Cholesterin 62 mg/dl  →  read 62 

**29× miss | blood-urea-nitrogen | "Nitrógeno ureico (BUN)"**
    lrc-1-00014 [ES es-cum es-cum -]  l023 Nitrógeno ureico (BUN) 18 mg/dL
    lrc-1-00026 [ES es-cum es-cum -]  l024 Nitrógeno ureico (BUN) 19 mg/dL
    lrc-1-00574 [ES es-cum es-cum -]  l022 Nitrógeno ureico (BUN) 6 mg/dL

**29× miss | egfr | "Débit de filtration glomérulaire estimé"**
    lrc-1-00138 [FR fr-b fr-b -]  l020 Débit de filtration glomérulaire estimé 92 mL/min/1,73m²
    lrc-1-00393 [FR fr-b fr-b -]  l019 Débit de filtration glomérulaire estimé >90 mL/min/1,73m²
    lrc-1-00581 [FR fr-a fr-a -]  l014 Débit de filtration glomérulaire estimé >90 mL/min/1,73m²

**29× miss | folate-serum | "Folates sériques"**
    lrc-1-00138 [FR fr-b fr-b -]  l050 Folates sériques 18,1 ng/mL
    lrc-1-00458 [FR fr-b fr-b -]  l033 Folates sériques 27,9 ng/mL
    lrc-1-00581 [FR fr-a fr-a -]  l045 Folates sériques 20,9 ng/mL

**29× miss | hdl-cholesterol | "Cholestérol HDL"**
    lrc-1-00393 [FR fr-b fr-b -]  l038 Cholestérol HDL 0,51 g/L
    lrc-1-00581 [FR fr-a fr-a -]  l032 Cholestérol HDL 0,59 g/L
    lrc-1-00618 [FR fr-b fr-b -]  l019 Cholestérol HDL 0,50 g/L

**28× miss | total-cholesterol | "Colesterol total"**
    lrc-1-00014 [ES es-cum es-cum -]  l040 Colesterol total 195 mg/dL
    lrc-1-00296 [RO ro-b ro-b -]  l044 Colesterol total 140 mg/dL
    lrc-1-00750 [RO ro-b ro-b -]  l030 Colesterol total 241 mg/dL

**28× miss | uric-acid | "Ácido úrico"**
    lrc-1-00026 [ES es-cum es-cum -]  l027 Ácido úrico 6,1 mg/dL
    lrc-1-00310 [ES es-cum es-cum -]  l024 Ácido úrico 7,1 mg/dL
    lrc-1-00355 [ES es-a es-a -]  l024 Ácido úrico 5,9 mg/dL

**28× range missed | UK undefined | upper only**
    lrc-1-00077 [UK uk-a uk-a -]  l028 Albumin:creatinine ratio <0.1 mg/mmol  →  read 0.1 mg/mmol
    lrc-1-00099 [UK uk-a uk-a -]  l014 hsCRP 2.5 mg/L  →  read 2.5 mg/L
    lrc-1-00099 [UK uk-a uk-a -]  l024 Triglycerides 1.70 mmol/L  →  read 151 mg/dL

**28× miss | sodium-serum | "Sodium"**
    lrc-1-00099 [UK uk-a uk-a -]  l006 Sodium 140 mmol/L
    lrc-1-00130 [UK uk-a uk-a -]  l005 Sodium 142 mmol/L
    lrc-1-00444 [UK uk-a uk-a -]  l007 Sodium 139 mmol/L

**28× miss | hs-crp | "Protéine C réactive ultrasensible"**
    lrc-1-00208 [FR fr-b fr-b -]  l013 Protéine C réactive ultrasensible 4,6 mg/L
    lrc-1-00393 [FR fr-b fr-b -]  l028 Protéine C réactive ultrasensible 1,0 mg/L
    lrc-1-00581 [FR fr-a fr-a -]  l022 Protéine C réactive ultrasensible 0,3 mg/L

**27× unit | "fL" not recognised**
    lrc-1-00014 [ES es-cum es-cum -]  l005 VCM 80,6 fL  →  read 80.6 
    lrc-1-00077 [UK uk-a uk-a -]  l021 MCV 76.2 fL  →  read 76.2 
    lrc-1-00876 [US us-a us-a -]  l029 MCV 89.4 fL  →  read 89.4 

**27× range missed | ES undefined | upper only**
    lrc-1-00014 [ES es-cum es-cum -]  l033 PCR ultrasensible 1,9 mg/L  →  read 1.9 
    lrc-1-00014 [ES es-cum es-cum -]  l044 Colesterol LDL 117 mg/dL  →  read 117 mg/dL H
    lrc-1-00026 [ES es-cum es-cum -]  l036 PCR ultrasensible 0,80 mg/L  →  read 0.8 mg/L

**27× miss | glucose-fasting | "Glycémie à jeun"**
    lrc-1-00138 [FR fr-b fr-b -]  l017 Glycémie à jeun 1,07 g/L
    lrc-1-00208 [FR fr-b fr-b -]  l001 Glycémie à jeun 0,96 g/L
    lrc-1-00237 [FR fr-b fr-b -]  l011 Glycémie à jeun 0,97 g/L

**27× miss | calcium-total | "Calcémie"**
    lrc-1-00138 [FR fr-b fr-b -]  l025 Calcémie 88 mg/L
    lrc-1-00208 [FR fr-b fr-b -]  l009 Calcémie 94 mg/L
    lrc-1-00630 [FR fr-a fr-a -]  l023 Calcémie 101 mg/L

**27× miss | uric-acid | "Acide urique"**
    lrc-1-00208 [FR fr-b fr-b -]  l004 Acide urique 69 mg/L
    lrc-1-00237 [FR fr-b fr-b -]  l016 Acide urique 35 mg/L
    lrc-1-00322 [FR fr-a fr-a -]  l020 Acide urique 55 mg/L

**27× miss | bicarbonate-co2 | "Bicarbonates"**
    lrc-1-00237 [FR fr-b fr-b -]  l020 Bicarbonates 22 mmol/L
    lrc-1-00393 [FR fr-b fr-b -]  l023 Bicarbonates 24 mmol/L
    lrc-1-00618 [FR fr-b fr-b -]  l010 Bicarbonates 23 mmol/L

**26× miss | blood-urea-nitrogen | "Azot ureic (BUN)"**
    lrc-1-00083 [RO ro-b ro-b -]  l003 Azot ureic (BUN) 21 mg/dL
    lrc-1-00094 [RO ro-b ro-b -]  l021 Azot ureic (BUN) 19 mg/dL
    lrc-1-01109 [RO ro-b ro-b -]  l011 Azot ureic (BUN) 17,0 mg/dL

**26× miss | ggt | "GGT"**
    lrc-1-00094 [RO ro-b ro-b -]  l034 GGT 10 U/L
    lrc-1-00120 [DE de-cum de-cum -]  l037 GGT 7 U/l
    lrc-1-00233 [US us-b us-b -]  l019 GGT 29 U/L

…and 1460 smaller groups.
