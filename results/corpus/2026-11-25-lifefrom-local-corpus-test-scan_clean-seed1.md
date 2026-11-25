# Lab-report reader stress test

385 corpus reports (test split, input scan_clean), 11262 rows with a known answer, seed 1. Read in 211.5 s (549.4 ms a report).

| Outcome | Rows | Share | 95% interval |
|---|---|---|---|
| ok | 6184 | 54.9% | 53.99–55.83% |
| unit | 608 | 5.4% | 5.00–5.83% |
| unconverted | 282 | 2.5% | 2.23–2.81% |
| wrong | 1199 | 10.6% | 10.09–11.23% |
| miss | 2989 | 26.5% | 25.73–27.36% |

- **Critical values:** 28 of 33 caught (84.8%, interval 69.08–93.35%); 3 lost because the row was not read, 2 because it was misread. False critical alarms: 137.
- **Rows that are not on the report:** 326 (of 8599 rows read).
- **Lab's flag:** ok 6901, invented 36, missed 134, wrong 3.
- **Reference range:** ok 6358, wrong 485, missed 231.
- **Collection date:** ok 294, missed 91.
- **Wrong values printed in a unit that needs converting:** 361 of 1199 (30.1%).

## By locale
| locale | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| FR | 2253 | 12.2% | 3.3% | 10.3% | 2.7% | 71.5% |
| UK | 1543 | 52.0% | 1.8% | 1.9% | 36.7% | 7.6% |
| RO | 2075 | 60.0% | 8.5% | 0.0% | 14.7% | 16.7% |
| ES | 1505 | 62.5% | 4.4% | 0.0% | 7.2% | 25.9% |
| DE | 2136 | 66.4% | 10.3% | 0.9% | 4.9% | 17.5% |
| US | 1750 | 85.8% | 2.4% | 0.0% | 3.1% | 8.7% |

## By layout
| layout | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| fr-b | 1406 | 11.9% | 4.0% | 9.8% | 3.0% | 71.3% |
| fr-a | 847 | 12.6% | 2.2% | 11.2% | 2.1% | 71.8% |
| uk-cum | 762 | 15.7% | 0.4% | 0.5% | 73.4% | 10.0% |
| ro-b | 1067 | 47.8% | 10.8% | 0.0% | 23.8% | 17.6% |
| es-cum | 825 | 62.2% | 4.4% | 0.0% | 5.8% | 27.6% |
| es-a | 680 | 62.9% | 4.4% | 0.0% | 8.8% | 23.8% |
| de-cum | 703 | 64.2% | 8.3% | 1.4% | 7.8% | 18.3% |
| de-a | 516 | 66.7% | 7.2% | 0.6% | 7.2% | 18.4% |
| de-mono | 917 | 67.9% | 13.7% | 0.7% | 1.4% | 16.2% |
| ro-a | 1008 | 73.0% | 6.1% | 0.0% | 5.2% | 15.8% |
| us-cum | 288 | 85.1% | 3.8% | 0.0% | 4.5% | 6.6% |
| us-a | 935 | 85.7% | 1.7% | 0.0% | 2.9% | 9.7% |
| us-b | 527 | 86.5% | 2.8% | 0.0% | 2.7% | 8.0% |
| uk-a | 781 | 87.3% | 3.2% | 3.3% | 0.9% | 5.2% |

## By heldout
| heldout | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| false | 10345 | 53.8% | 4.7% | 2.7% | 11.5% | 27.5% |
| true | 917 | 67.9% | 13.7% | 0.7% | 1.4% | 16.2% |

## By units
| units | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| FR | 2253 | 12.2% | 3.3% | 10.3% | 2.7% | 71.5% |
| SI | 2326 | 54.9% | 4.9% | 2.1% | 27.0% | 11.1% |
| conventional | 6683 | 69.3% | 6.3% | 0.0% | 7.7% | 16.8% |

## By decimal
| decimal | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| comma | 7367 | 48.3% | 6.4% | 3.4% | 6.5% | 35.3% |
| point | 3895 | 67.4% | 3.5% | 0.8% | 18.4% | 9.9% |

## By marker
| marker | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| eosinophils-absolute | 152 | 5.3% | 3.3% | 0.0% | 15.8% | 75.7% |
| lymphocytes-absolute | 152 | 5.9% | 3.3% | 0.0% | 2.6% | 88.2% |
| tsh | 144 | 16.0% | 72.2% | 0.0% | 11.8% | 0.0% |
| eosinophils-percent | 136 | 16.2% | 0.0% | 0.0% | 6.6% | 77.2% |
| monocytes-absolute | 151 | 16.6% | 0.0% | 0.0% | 0.7% | 82.8% |
| tibc | 123 | 17.1% | 26.0% | 0.8% | 16.3% | 39.8% |
| basophils-absolute | 151 | 17.2% | 0.0% | 0.0% | 0.7% | 82.1% |
| neutrophils-absolute | 152 | 17.8% | 3.3% | 0.0% | 3.3% | 75.7% |
| basophils-percent | 136 | 18.4% | 0.0% | 0.0% | 6.6% | 75.0% |
| rbc | 215 | 28.4% | 54.4% | 1.9% | 10.2% | 5.1% |
| platelet-count | 218 | 28.9% | 22.9% | 0.0% | 23.9% | 24.3% |
| wbc | 229 | 31.0% | 25.8% | 0.0% | 30.6% | 12.7% |
| urine-albumin | 133 | 31.6% | 0.0% | 0.0% | 9.0% | 59.4% |
| urine-creatinine | 133 | 33.1% | 0.0% | 24.1% | 11.3% | 31.6% |
| urine-acr | 133 | 33.8% | 0.0% | 18.0% | 8.3% | 39.8% |
| neutrophils-percent | 135 | 38.5% | 0.0% | 0.0% | 11.9% | 49.6% |
| bicarbonate-co2 | 246 | 41.5% | 0.0% | 0.0% | 6.1% | 52.4% |
| lymphocytes-percent | 134 | 47.0% | 0.0% | 0.0% | 24.6% | 28.4% |
| triglycerides | 287 | 48.4% | 0.7% | 16.4% | 8.4% | 26.1% |
| monocytes-percent | 136 | 50.0% | 0.0% | 0.0% | 28.7% | 21.3% |
| uric-acid | 251 | 51.8% | 1.2% | 0.0% | 13.5% | 33.5% |
| hba1c | 233 | 54.5% | 2.1% | 0.0% | 18.0% | 25.3% |
| folate-serum | 123 | 55.3% | 0.8% | 0.0% | 8.1% | 35.8% |
| creatinine-serum | 271 | 56.1% | 1.1% | 6.6% | 10.7% | 25.5% |
| rdw-cv | 209 | 56.5% | 0.0% | 0.0% | 7.2% | 36.4% |
| albumin-serum | 240 | 57.1% | 1.3% | 0.0% | 14.6% | 27.1% |
| hematocrit | 218 | 57.3% | 5.0% | 0.0% | 19.3% | 18.3% |
| ast | 181 | 58.0% | 13.8% | 0.0% | 8.8% | 19.3% |
| mch | 220 | 58.6% | 9.1% | 0.0% | 5.5% | 26.8% |
| alp | 179 | 58.7% | 8.4% | 0.0% | 8.4% | 24.6% |
| alt | 200 | 59.5% | 12.5% | 0.0% | 8.5% | 19.5% |
| transferrin-saturation | 132 | 59.8% | 0.0% | 0.0% | 8.3% | 31.8% |
| ferritin | 132 | 60.6% | 1.5% | 0.0% | 8.3% | 29.5% |
| ggt | 184 | 60.9% | 19.6% | 0.0% | 9.8% | 9.8% |
| glucose-fasting | 315 | 61.3% | 0.3% | 8.6% | 14.3% | 15.6% |
| vitamin-d-25-oh | 150 | 62.0% | 2.0% | 0.0% | 6.0% | 30.0% |
| hs-crp | 250 | 62.4% | 1.2% | 0.0% | 14.0% | 22.4% |
| total-protein | 254 | 63.4% | 0.4% | 0.0% | 10.2% | 26.0% |
| total-bilirubin | 181 | 64.6% | 0.0% | 0.0% | 9.9% | 25.4% |
| vitamin-b12 | 122 | 64.8% | 2.5% | 0.0% | 12.3% | 20.5% |
| ldl-cholesterol | 280 | 65.0% | 1.8% | 9.3% | 12.5% | 11.4% |
| hemoglobin | 215 | 67.0% | 2.8% | 0.0% | 6.5% | 23.7% |
| phosphorus-serum | 255 | 67.5% | 0.0% | 0.0% | 11.4% | 21.2% |
| total-cholesterol | 286 | 67.5% | 2.1% | 18.5% | 11.5% | 0.3% |
| egfr | 240 | 69.2% | 4.6% | 0.0% | 2.9% | 23.3% |
| chloride-serum | 247 | 69.2% | 1.2% | 0.0% | 7.3% | 22.3% |
| hdl-cholesterol | 287 | 70.7% | 0.3% | 9.4% | 9.1% | 10.5% |
| mcv | 219 | 71.2% | 2.3% | 0.0% | 7.3% | 19.2% |
| mchc | 220 | 71.4% | 2.7% | 0.0% | 8.2% | 17.7% |
| calcium-total | 252 | 72.2% | 0.4% | 8.7% | 7.5% | 11.1% |
| potassium-serum | 261 | 72.4% | 1.1% | 0.0% | 9.6% | 16.9% |
| sodium-serum | 246 | 75.2% | 2.8% | 0.0% | 8.9% | 13.0% |
| urea | 105 | 80.0% | 0.0% | 0.0% | 20.0% | 0.0% |
| thyroglobulin | 5 | 80.0% | 0.0% | 0.0% | 20.0% | 0.0% |
| magnesium-serum | 259 | 80.7% | 0.4% | 0.0% | 8.1% | 10.8% |
| free-t3 | 100 | 83.0% | 2.0% | 0.0% | 15.0% | 0.0% |
| serum-iron | 153 | 83.0% | 6.5% | 0.7% | 9.8% | 0.0% |
| blood-urea-nitrogen | 136 | 83.8% | 0.0% | 0.0% | 0.0% | 16.2% |
| free-t4 | 102 | 91.2% | 2.0% | 0.0% | 6.9% | 0.0% |
| testosterone-total | 53 | 92.5% | 0.0% | 0.0% | 5.7% | 1.9% |

## What went wrong, most common first

**145× range wrong | US undefined | two-sided**
    lrc-1-00192 [US us-a us-a -]  l002 Hemoglobin A1c 4.9 %  →  read 4.9 % [40, 56]
    lrc-1-00192 [US us-a us-a -]  l007 URIC ACID 4.5 mg/dL  →  read 4.5 mg/dL [25, 70]
    lrc-1-00192 [US us-a us-a -]  l009 POTASSIUM 4.7 mEq/L  →  read 4.7 mEq/L [35, 51]

**132× range wrong | RO undefined | two-sided**
    lrc-1-00094 [RO ro-b ro-b -]  l004 Hematocrit 43.1 %  →  read 43.1  [136, 48]
    lrc-1-00094 [RO ro-b ro-b -]  l006 RDW 14.0 %  →  read 14 % [112, 15]
    lrc-1-00094 [RO ro-b ro-b -]  l021 Azot ureic (BUN) 19 mg/dL  →  read 19 mg/dL [17, 25]

**87× range missed | FR undefined | two-sided**
    lrc-1-00237 [FR fr-b fr-b -]  l013 Urée 3,60 mmol/L  →  read 3.6 mmol/L
    lrc-1-00237 [FR fr-b fr-b -]  l021 Calcium 91,0 mg/L  →  read 91 mg/L
    lrc-1-00836 [FR fr-a fr-a -]  l001 Glucose 0,97 g/L  →  read 0.97 g/L

**74× miss | triglycerides | "TG"**
    lrc-1-00014 [ES es-cum es-cum -]  l042 TG 131 mg/dL
    lrc-1-00094 [RO ro-b ro-b -]  l038 TG 17 mg/dL
    lrc-1-00120 [DE de-cum de-cum -]  l041 TG 1,00 mmol/l

**73× not on the report | thyroglobulin | read from "TG"**
    lrc-1-00014 [ES es-cum]  TG = 131 mg/dL
    lrc-1-00094 [RO ro-b]  TG = 17 mg/dL
    lrc-1-00120 [DE de-cum]  TG = 1 mmol/L

**73× date missed | FR lines**
    lrc-1-00138  want 2026-08-03 read null
    lrc-1-00208  want 2026-02-16 read null
    lrc-1-00235  want 2026-10-02 read null

**69× range missed | FR undefined | upper only**
    lrc-1-00138 [FR fr-b fr-b -]  l037 Triglycérides 0,79 g/L  →  read 0.79 g/L
    lrc-1-00235 [FR fr-a fr-a -]  l035 Cholestérol total 2,40 g/L  →  read 240 g/L H
    lrc-1-00235 [FR fr-a fr-a -]  l036 Triglycérides 1,75 g/L  →  read 1.75 g/L H

**63× range wrong | DE undefined | two-sided**
    lrc-1-00418 [DE de-mono de-mono -]  l002 Erythrozyten 5,60 T/l  →  read 5.6  [4.06, 6.2]
    lrc-1-00897 [DE de-a de-a -]  l001 Leukozyten 4,2 /nl  →  read 4.2  [40, 11]
    lrc-1-00897 [DE de-a de-a -]  l021 Magnesium 2,2 mg/dl  →  read 2.2 mg/dL [17, 24]

**56× unit | "U/l" not recognised**
    lrc-1-00120 [DE de-cum de-cum -]  l037 GGT 7 U/l  →  read 7  [8, 61] L
    lrc-1-00267 [DE de-cum de-cum -]  l039 Gamma-GT 24 U/l  →  read 24  [8, 61]
    lrc-1-00480 [DE de-mono de-mono -]  l025 GOT (AST) 19,0 U/l  →  read 19  [10, 40]

**53× unconverted | total-cholesterol | g/L**
    lrc-1-00138 [FR fr-b fr-b -]  l036 Cholestérol total 2,21 g/L  →  read 2.21 g/L [, 2] H
    lrc-1-00322 [FR fr-a fr-a -]  l034 Cholestérol total 1,54 g/L  →  read 1.54 g/L [, 2]
    lrc-1-00393 [FR fr-b fr-b -]  l036 Cholestérol total 2,00 g/L  →  read 2 g/L [, 2]

**47× miss | monocytes-absolute | "Monocytes"**
    lrc-1-00138 [FR fr-b fr-b -]  l013 Monocytes 500 /mm3
    lrc-1-00235 [FR fr-a fr-a -]  l013 Monocytes 500 /mm3
    lrc-1-00322 [FR fr-a fr-a -]  l012 Monocytes 0,48 G/L

**46× miss | bicarbonate-co2 | "Bicarbonat"**
    lrc-1-00120 [DE de-cum de-cum -]  l029 Bicarbonat 26 mmol/l
    lrc-1-00267 [DE de-cum de-cum -]  l030 Bicarbonat 25,0 mmol/l
    lrc-1-00418 [DE de-mono de-mono -]  l019 Bicarbonat 25 mmol/l

**46× miss | lymphocytes-absolute | "Lymphocytes"**
    lrc-1-00138 [FR fr-b fr-b -]  l012 Lymphocytes 2 300 /mm3
    lrc-1-00235 [FR fr-a fr-a -]  l012 Lymphocytes 1 700 (contr.) /mm3
    lrc-1-00322 [FR fr-a fr-a -]  l011 Lymphocytes 2,00 G/L

**46× unconverted | triglycerides | g/L**
    lrc-1-00138 [FR fr-b fr-b -]  l037 Triglycérides 0,79 g/L  →  read 0.79 g/L
    lrc-1-00235 [FR fr-a fr-a -]  l036 Triglycérides 1,75 g/L  →  read 1.75 g/L H
    lrc-1-00322 [FR fr-a fr-a -]  l035 Triglycérides 0,40 g/L  →  read 0.4 g/L

**45× false critical | glucose-fasting**
    lrc-1-00077 [UK uk-a uk-a -]  l001 Fasting glucose 5.2   →  read 5.2  [3.9, 5.5]
    lrc-1-00099 [UK uk-a uk-a -]  l001 Glucose 5.2   →  read 5.2  [3.9, 55]
    lrc-1-00235 [FR fr-a fr-a -]  l017 Glucose 1,00 g/L  →  read 1 g/L [0.7, 0.99]

**44× unit | "U/L" not recognised**
    lrc-1-00083 [RO ro-b ro-b -]  l017 AST (TGO) 15,0 U/L  →  read 15  [10, 40]
    lrc-1-00094 [RO ro-b ro-b -]  l031 ALT (TGP) 22 U/L  →  read 22  [7, 56]
    lrc-1-00094 [RO ro-b ro-b -]  l032 TGO (AST) 28 U/L  →  read 28  [110, 40]

**44× miss | albumin-serum | "Albumine"**
    lrc-1-00208 [FR fr-b fr-b -]  l012 Albumine 38 g/L
    lrc-1-00237 [FR fr-b fr-b -]  l025 Albumine 43 g/L
    lrc-1-00322 [FR fr-a fr-a -]  l025 Albumine 41 g/L

**42× miss | mch | "TCMH"**
    lrc-1-00138 [FR fr-b fr-b -]  l006 TCMH 28,10 pg
    lrc-1-00235 [FR fr-a fr-a -]  l006 TCMH 29,0 pg
    lrc-1-00237 [FR fr-b fr-b -]  l006 TCMH 30,5 pg

**42× miss | platelet-count | "Plaquettes"**
    lrc-1-00138 [FR fr-b fr-b -]  l009 Plaquettes 288 000 /mm3
    lrc-1-00235 [FR fr-a fr-a -]  l009 Plaquettes 306 000 /mm3
    lrc-1-00237 [FR fr-b fr-b -]  l009 Plaquettes 311 000 /mm3

**41× range wrong | US undefined | lower only**
    lrc-1-00043 [US us-b us-b -]  l003 HDL CHOLESTEROL 51 mg/dL  →  read 51 mg/dL [0, ]
    lrc-1-00192 [US us-a us-a -]  l006 EGFR 121 mL/min/1.73m2  →  read 121 mL/min/1.73m2 [0, ]
    lrc-1-00280 [US us-cum us-cum -]  l023 HDL CHOLESTEROL 82 mg/dL  →  read 82 mg/dL [0, ]

**41× unit | "" not recognised**
    lrc-1-00111 [DE de-cum de-cum -]  l003 Hämoglobin 12,6   →  read 12.6  [12, 16]
    lrc-1-00124 [RO ro-a ro-a -]  l006 CHEM 33,4   →  read 33.4  [32, 36]
    lrc-1-00310 [ES es-cum es-cum -]  l002 Hematíes 4,38   →  read 4.38  [4.6, 6.2] L

**40× false critical | platelet-count**
    lrc-1-00026 [ES es-cum es-cum -]  l009 Plaquetas 126 10^3/µL  →  read 0.13 ×10⁹/L [0.15, 0.4] L
    lrc-1-00057 [RO ro-b ro-b -]  l008 Trombocite 154 10^3/µL  →  read 0.15 ×10⁹/L [0.15, 0.4]
    lrc-1-00094 [RO ro-b ro-b -]  l007 Trombocite 386 *10^3/µL  →  read 1.39 ×10⁹/L [0.15, 0.4]

**40× miss | hematocrit | "Hématocrite"**
    lrc-1-00138 [FR fr-b fr-b -]  l004 Hématocrite 32,60 %
    lrc-1-00235 [FR fr-a fr-a -]  l004 Hématocrite 39,2 %
    lrc-1-00237 [FR fr-b fr-b -]  l004 Hématocrite 40,7 %

**39× miss | mchc | "CCMH"**
    lrc-1-00138 [FR fr-b fr-b -]  l007 CCMH 33,2 g/dL
    lrc-1-00235 [FR fr-a fr-a -]  l007 CCMH 32,4 g/dL
    lrc-1-00237 [FR fr-b fr-b -]  l007 CCMH 33,3 g/dL

**38× miss | hemoglobin | "Hémoglobine"**
    lrc-1-00138 [FR fr-b fr-b -]  l003 Hémoglobine 10,8 g/dL
    lrc-1-00235 [FR fr-a fr-a -]  l003 Hémoglobine 12,7 g/dL
    lrc-1-00237 [FR fr-b fr-b -]  l003 Hémoglobine 13,6 

**37× miss | total-bilirubin | "Bilirubine totale"**
    lrc-1-00138 [FR fr-b fr-b -]  l034 Bilirubine totale 3,0 mg/L
    lrc-1-00322 [FR fr-a fr-a -]  l032 Bilirubine totale 9,0 mg/L
    lrc-1-00393 [FR fr-b fr-b -]  l034 Bilirubine totale 2,0 mg/L

**37× flag missed | undefined es-a**
    lrc-1-00355 [ES es-a es-a -]  l015 Monocitos % 8,5 %  →  read 8.5 % [2, 8]
    lrc-1-00355 [ES es-a es-a -]  l044 Colesterol LDL 114 mg/dL  →  read 114 mg/dL [, 100]
    lrc-1-00864 [ES es-a es-a -]  l010 Glucosa 32 mg/dL  →  read 32 mg/dL [70, 99]

**35× miss | urine-albumin | "Microalbuminurie"**
    lrc-1-00057 [RO ro-b ro-b -]  l022 Microalbuminurie 5,3 mg/L
    lrc-1-00083 [RO ro-b ro-b -]  l027 Microalbuminurie 12,8 mg/L
    lrc-1-00124 [RO ro-a ro-a -]  l059 Microalbuminurie <3,0 mg/L

**34× not on the report | urine-microalbumin | read from "Microalbuminurie"**
    lrc-1-00057 [RO ro-b]  Microalbuminurie = 5.3 mg/L
    lrc-1-00083 [RO ro-b]  Microalbuminurie = 12.8 mg/L
    lrc-1-00124 [RO ro-a]  Microalbuminurie = 3 mg/L

**34× flag missed | undefined ro-a**
    lrc-1-00124 [RO ro-a ro-a -]  l002 Eritrocite 4,07 mil./µL  →  read 4.07 mil./uL [4.2, 5.4]
    lrc-1-00124 [RO ro-a ro-a -]  l003 Hemoglobina 10,5 g/dL  →  read 10.51 g/dL [12, 16]
    lrc-1-00124 [RO ro-a ro-a -]  l010 NEU% 60,8 %  →  read 60.81 % [40, 60]

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

**33× miss | bicarbonate-co2 | "Bicarbonato"**
    lrc-1-00014 [ES es-cum es-cum -]  l028 Bicarbonato 25 mmol/L
    lrc-1-00026 [ES es-cum es-cum -]  l030 Bicarbonato 25 mmol/L
    lrc-1-00310 [ES es-cum es-cum -]  l027 Bicarbonato 26 mmol/L

**33× miss | creatinine-serum | "Cr"**
    lrc-1-00077 [UK uk-a uk-a -]  l005 Cr 76 µmol/L
    lrc-1-00418 [DE de-mono de-mono -]  l015 Cr 78 µmol/l
    lrc-1-00750 [RO ro-b ro-b -]  l012 Cr 0,96 mg/dL

**32× not on the report | chromium | read from "Cr"**
    lrc-1-00077 [UK uk-a]  Cr = 76 pmol/L
    lrc-1-00418 [DE de-mono]  Cr = 78 nmol/L
    lrc-1-00750 [RO ro-b]  Cr = 10.96 mg/dL

**31× unit | "mUI/L" not recognised**
    lrc-1-00138 [FR fr-b fr-b -]  l045 TSH 1,11 mUI/L  →  read 1.11  [0.4, 4]
    lrc-1-00458 [FR fr-b fr-b -]  l027 TSH 0,83 mUI/L  →  read 0.83  [0.4, 4]
    lrc-1-00618 [FR fr-b fr-b -]  l023 TSH ultrasensible 1,25 mUI/L  →  read 1.25  [0.4, 4]

**31× miss | potassium-serum | "Kaliémie"**
    lrc-1-00208 [FR fr-b fr-b -]  l006 Kaliémie 4,40 mmol/L
    lrc-1-00235 [FR fr-a fr-a -]  l023 Kaliémie 4,2 mmol/L
    lrc-1-00618 [FR fr-b fr-b -]  l008 Kaliémie 4,3 mmol/L

**30× miss | uric-acid | "Ácido úrico"**
    lrc-1-00014 [ES es-cum es-cum -]  l026 Ácido úrico 4,1 mg/dL
    lrc-1-00026 [ES es-cum es-cum -]  l027 Ácido úrico 6,1 mg/dL
    lrc-1-00310 [ES es-cum es-cum -]  l024 Ácido úrico 7,1 mg/dL

**30× false critical | creatinine-serum**
    lrc-1-00094 [RO ro-b ro-b -]  l022 Creatinina 0.81 mg/dL  →  read 10.81 mg/dL [10.6, 1.3]
    lrc-1-00235 [FR fr-a fr-a -]  l019 Créatinine 7,4 mg/L  →  read 7.4 mg/L [6, 13]
    lrc-1-00322 [FR fr-a fr-a -]  l018 Créatinine 9,1 mg/L  →  read 9.1 mg/L [6, 13]

**30× miss | hdl-cholesterol | "Cholestérol HDL"**
    lrc-1-00138 [FR fr-b fr-b -]  l038 Cholestérol HDL 0,85 g/L
    lrc-1-00393 [FR fr-b fr-b -]  l038 Cholestérol HDL 0,51 g/L
    lrc-1-00581 [FR fr-a fr-a -]  l032 Cholestérol HDL 0,59 g/L

**30× miss | chloride-serum | "Chlore"**
    lrc-1-00208 [FR fr-b fr-b -]  l007 Chlore 99 mmol/L
    lrc-1-00237 [FR fr-b fr-b -]  l019 Chlore 100 mmol/L
    lrc-1-00581 [FR fr-a fr-a -]  l017 Chlore 104 mmol/L

**29× miss | egfr | "Débit de filtration glomérulaire estimé"**
    lrc-1-00138 [FR fr-b fr-b -]  l020 Débit de filtration glomérulaire estimé 92 mL/min/1,73m²
    lrc-1-00393 [FR fr-b fr-b -]  l019 Débit de filtration glomérulaire estimé >90 mL/min/1,73m²
    lrc-1-00581 [FR fr-a fr-a -]  l014 Débit de filtration glomérulaire estimé >90 mL/min/1,73m²

**29× miss | ldl-cholesterol | "Cholestérol LDL (calculé)"**
    lrc-1-00138 [FR fr-b fr-b -]  l039 Cholestérol LDL (calculé) 1,20 g/L
    lrc-1-00235 [FR fr-a fr-a -]  l038 Cholestérol LDL (calculé) 1,35 g/L
    lrc-1-00322 [FR fr-a fr-a -]  l037 Cholestérol LDL (calculé) 1,04 g/L

**29× miss | folate-serum | "Folates sériques"**
    lrc-1-00138 [FR fr-b fr-b -]  l050 Folates sériques 18,1 ng/mL
    lrc-1-00458 [FR fr-b fr-b -]  l033 Folates sériques 27,9 ng/mL
    lrc-1-00581 [FR fr-a fr-a -]  l045 Folates sériques 20,9 ng/mL

**28× miss | calcium-total | "Calcémie"**
    lrc-1-00138 [FR fr-b fr-b -]  l025 Calcémie 88 mg/L
    lrc-1-00208 [FR fr-b fr-b -]  l009 Calcémie 94 mg/L
    lrc-1-00458 [FR fr-b fr-b -]  l011 Calcémie 96 mg/L

**28× miss | hs-crp | "Protéine C réactive ultrasensible"**
    lrc-1-00208 [FR fr-b fr-b -]  l013 Protéine C réactive ultrasensible 4,6 mg/L
    lrc-1-00393 [FR fr-b fr-b -]  l028 Protéine C réactive ultrasensible 1,0 mg/L
    lrc-1-00581 [FR fr-a fr-a -]  l022 Protéine C réactive ultrasensible 0,3 mg/L

**28× miss | magnesium-serum | "Magnésémie"**
    lrc-1-00235 [FR fr-a fr-a -]  l026 Magnésémie 2,0 mg/dL
    lrc-1-00581 [FR fr-a fr-a -]  l019 Magnésémie 2,1 mg/dL
    lrc-1-00836 [FR fr-a fr-a -]  l011 Magnésémie 2,1 mg/dL

**28× miss | ferritin | "Ferritine"**
    lrc-1-00458 [FR fr-b fr-b -]  l025 Ferritine 13 ng/mL
    lrc-1-00581 [FR fr-a fr-a -]  l038 Ferritine 149 ng/mL
    lrc-1-00902 [FR fr-a fr-a -]  l044 Ferritine 20 ng/mL

**27× miss | glucose-fasting | "Glycémie à jeun"**
    lrc-1-00138 [FR fr-b fr-b -]  l017 Glycémie à jeun 1,07 g/L
    lrc-1-00208 [FR fr-b fr-b -]  l001 Glycémie à jeun 0,96 g/L
    lrc-1-00237 [FR fr-b fr-b -]  l011 Glycémie à jeun 0,97 g/L

**27× miss | uric-acid | "Acide urique"**
    lrc-1-00208 [FR fr-b fr-b -]  l004 Acide urique 69 mg/L
    lrc-1-00237 [FR fr-b fr-b -]  l016 Acide urique 35 mg/L
    lrc-1-00322 [FR fr-a fr-a -]  l020 Acide urique 55 mg/L

**27× unconverted | hdl-cholesterol | g/L**
    lrc-1-00235 [FR fr-a fr-a -]  l037 HDL-cholestérol 0,70 g/L  →  read 0.7 g/L
    lrc-1-00322 [FR fr-a fr-a -]  l036 HDL-cholestérol 0,42 g/L  →  read 0.42 g/L
    lrc-1-00458 [FR fr-b fr-b -]  l019 HDL-cholestérol 0,60 g/L  →  read 0.6 g/L

**27× miss | bicarbonate-co2 | "Bicarbonates"**
    lrc-1-00237 [FR fr-b fr-b -]  l020 Bicarbonates 22 mmol/L
    lrc-1-00393 [FR fr-b fr-b -]  l023 Bicarbonates 24 mmol/L
    lrc-1-00618 [FR fr-b fr-b -]  l010 Bicarbonates 23 mmol/L

**26× unconverted | urine-creatinine | mmol/L**
    lrc-1-00130 [UK uk-a uk-a -]  l024 Urine creatinine 36.3 mmol/L  →  read 36.3 mmol/L
    lrc-1-00138 [FR fr-b fr-b -]  l052 Créatinine urinaire 11,7 mmol/L  →  read 11.7 mmol/L
    lrc-1-00444 [UK uk-a uk-a -]  l025 Urine creatinine 16.9 mmol/L  →  read 16.9 mmol/L

**26× range missed | US undefined | two-sided**
    lrc-1-00182 [US us-cum us-cum -]  l010 PHOSPHORUS 3.8 mg/dL  →  read 3.8 mg/dL
    lrc-1-00280 [US us-cum us-cum -]  l010 PHOSPHORUS 3.7 mg/dL  →  read 3.7 mg/dL
    lrc-1-00280 [US us-cum us-cum -]  l019 BILIRUBIN, TOTAL 0.4 mg/dL  →  read 0.4 mg/dL

**26× miss | sodium-serum | "Natrémie"**
    lrc-1-00208 [FR fr-b fr-b -]  l005 Natrémie 141 mmol/L
    lrc-1-00237 [FR fr-b fr-b -]  l017 Natrémie 141,0 mmol/L
    lrc-1-00322 [FR fr-a fr-a -]  l021 Natrémie 142 mmol/L

**26× miss | total-protein | "Protéines totales"**
    lrc-1-00208 [FR fr-b fr-b -]  l011 Protéines totales 71 g/L
    lrc-1-00322 [FR fr-a fr-a -]  l024 Protéines totales 67,0 g/L
    lrc-1-00581 [FR fr-a fr-a -]  l020 Protéines totales 78,0 g/L

**26× range wrong | FR undefined | upper only**
    lrc-1-00235 [FR fr-a fr-a -]  l013 Monocytes 9,70 %  →  read 9.7 % [200, 800] H
    lrc-1-00322 [FR fr-a fr-a -]  l012 Monocytes 8,8 %  →  read 8.8 % [0.2, 0.8] H
    lrc-1-00393 [FR fr-b fr-b -]  l013 Monocytes 9,10 %  →  read 9.1 % [0.2, 0.8] H

**26× unconverted | ldl-cholesterol | g/L**
    lrc-1-00393 [FR fr-b fr-b -]  l039 LDL-cholestérol 0,93 g/L  →  read 0.93 g/L [, 1]
    lrc-1-00618 [FR fr-b fr-b -]  l020 LDL-cholestérol 0,47 g/L  →  read 0.47 g/L [, 1]
    lrc-1-00836 [FR fr-a fr-a -]  l020 LDL-cholestérol 1,01 g/L  →  read 1.01 g/L [, 1]

**26× miss | phosphorus-serum | "Phosphore"**
    lrc-1-00458 [FR fr-b fr-b -]  l012 Phosphore 35 mg/L
    lrc-1-00618 [FR fr-b fr-b -]  l012 Phosphore 32 mg/L
    lrc-1-00630 [FR fr-a fr-a -]  l025 Phosphore 29 mg/L

**26× flag missed | undefined de-a**
    lrc-1-01936 [DE de-a de-a -]  l002 Erythrozyten 3,83 /pl  →  read 3.83  [4.2, 5.4]
    lrc-1-01936 [DE de-a de-a -]  l003 Hämoglobin 10,7 g/dl  →  read 10.7 g/dL [12, 16]
    lrc-1-01936 [DE de-a de-a -]  l024 eGFR (CKD-EPI) 54 mL/min/1.73m2  →  read 54 mL/min/1.73m2 [60, ]

**25× miss | transferrin-saturation | "Coefficient de saturation de la transferrine"**
    lrc-1-00138 [FR fr-b fr-b -]  l043 Coefficient de saturation de la transferrine 25 %
    lrc-1-00458 [FR fr-b fr-b -]  l024 Coefficient de saturation de la transferrine 23 %
    lrc-1-00581 [FR fr-a fr-a -]  l037 Coefficient de saturation de la transferrine 38 %

**25× miss | vitamin-b12 | "Vitamine B12"**
    lrc-1-00138 [FR fr-b fr-b -]  l049 Vitamine B12 462,0 pmol/L
    lrc-1-00458 [FR fr-b fr-b -]  l032 Vitamine B12 472 pmol/L
    lrc-1-00581 [FR fr-a fr-a -]  l044 Vitamine B12 671 pmol/L

**25× miss | urine-acr | "Rapport albumine/créatinine"**
    lrc-1-00138 [FR fr-b fr-b -]  l054 Rapport albumine/créatinine 5,9 mg/g
    lrc-1-00237 [FR fr-b fr-b -]  l029 Rapport albumine/créatinine <7,3 mg/g
    lrc-1-00581 [FR fr-a fr-a -]  l050 Rapport albumine/créatinine <1,1 mg/g

**25× miss | hba1c | "Hémoglobine glyquée (HbA1c)"**
    lrc-1-00235 [FR fr-a fr-a -]  l018 Hémoglobine glyquée (HbA1c) 5,5 %
    lrc-1-00237 [FR fr-b fr-b -]  l012 Hémoglobine glyquée (HbA1c) 5,90 %
    lrc-1-00393 [FR fr-b fr-b -]  l018 Hémoglobine glyquée (HbA1c) 5,3 %

**25× unit | "Tsd/µl" not recognised**
    lrc-1-00690 [DE de-cum de-cum -]  l009 Thrombozyten 190 Tsd/µl  →  read 190  [150, 400]
    lrc-1-00960 [DE de-a de-a -]  l001 Leukozyten 7,6 Tsd/µl  →  read 7.6  [4, 11]
    lrc-1-00960 [DE de-a de-a -]  l009 Thrombozyten 268 Tsd/µl  →  read 268  [150, 400]

**24× miss | neutrophils-absolute | "Neutrófilos"**
    lrc-1-00014 [ES es-cum es-cum -]  l011 Neutrófilos 2,56 10^3/µL
    lrc-1-00026 [ES es-cum es-cum -]  l012 Neutrófilos 3,87 10^3/µL
    lrc-1-00310 [ES es-cum es-cum -]  l010 Neutrófilos 3,55 x10^3/µL

**24× miss | lymphocytes-absolute | "Linfocitos"**
    lrc-1-00014 [ES es-cum es-cum -]  l013 Linfocitos 2,02 10^3/µL
    lrc-1-00026 [ES es-cum es-cum -]  l014 Linfocitos 1,86 10^3/µL
    lrc-1-00310 [ES es-cum es-cum -]  l012 Linfocitos 1,96 x10^3/µL

**24× miss | monocytes-absolute | "Monocitos"**
    lrc-1-00014 [ES es-cum es-cum -]  l015 Monocitos 0,44 10^3/µL
    lrc-1-00026 [ES es-cum es-cum -]  l016 Monocitos 1,04 10^3/µL
    lrc-1-00310 [ES es-cum es-cum -]  l014 Monocitos 0,42 x10^3/µL

**24× miss | eosinophils-absolute | "Eosinófilos"**
    lrc-1-00014 [ES es-cum es-cum -]  l017 Eosinófilos 0,12 10^3/µL
    lrc-1-00026 [ES es-cum es-cum -]  l018 Eosinófilos 0,18 10^3/µL
    lrc-1-00310 [ES es-cum es-cum -]  l016 Eosinófilos 0,13 x10^3/µL

**24× miss | basophils-absolute | "Basófilos"**
    lrc-1-00014 [ES es-cum es-cum -]  l019 Basófilos 0,05 10^3/µL
    lrc-1-00026 [ES es-cum es-cum -]  l020 Basófilos 0,05 10^3/µL
    lrc-1-00310 [ES es-cum es-cum -]  l018 Basófilos 0,04 x10^3/µL

**24× unconverted | urine-acr | mg/mmol**
    lrc-1-00077 [UK uk-a uk-a -]  l028 Albumin:creatinine ratio <0.1 mg/mmol  →  read 0.1 mg/mmol [, 3.4]
    lrc-1-00130 [UK uk-a uk-a -]  l026 ACR 0.3 mg/mmol  →  read 0.3 mg/mmol [, 3.4]
    lrc-1-00418 [DE de-mono de-mono -]  l027 Albumin/Kreatinin-Quotient 0,4 mg/mmol  →  read 0.4 mg/mmol [, 3.4]

**24× miss | rdw-cv | "IDR (RDW)"**
    lrc-1-00235 [FR fr-a fr-a -]  l008 IDR (RDW) 13,6 %
    lrc-1-00393 [FR fr-b fr-b -]  l008 IDR (RDW) 12,3 %
    lrc-1-00902 [FR fr-a fr-a -]  l008 IDR (RDW) 14,1 %

**23× miss | mcv | "Volume globulaire moyen"**
    lrc-1-00138 [FR fr-b fr-b -]  l005 Volume globulaire moyen 84,6 fL
    lrc-1-00235 [FR fr-a fr-a -]  l005 Volume globulaire moyen 89,6 fL
    lrc-1-00393 [FR fr-b fr-b -]  l005 Volume globulaire moyen 91,4 fL

**23× miss | phosphorus-serum | "Phosphorémie"**
    lrc-1-00138 [FR fr-b fr-b -]  l027 Phosphorémie 42 mg/L
    lrc-1-00235 [FR fr-a fr-a -]  l027 Phosphorémie 36 mg/L
    lrc-1-00237 [FR fr-b fr-b -]  l023 Phosphorémie 35,0 mg/L

**23× miss | hs-crp | "CRP ultrasensible"**
    lrc-1-00138 [FR fr-b fr-b -]  l028 CRP ultrasensible 3,7 mg/L
    lrc-1-00235 [FR fr-a fr-a -]  l029 CRP ultrasensible 6,8 mg/L
    lrc-1-00322 [FR fr-a fr-a -]  l026 CRP ultrasensible 0,5 mg/L

**23× not on the report | crp | read from "CRP"**
    lrc-1-00138 [FR fr-b]  CRP = 3.7 mg/L
    lrc-1-00235 [FR fr-a]  CRP = 6.8 mg/L
    lrc-1-00322 [FR fr-a]  CRP = 0.5 mg/L

…and 598 smaller groups.
