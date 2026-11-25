# Lab-report reader stress test

385 corpus reports (test split, input photo), 11262 rows with a known answer, seed 1. Read in 192.1 s (498.9 ms a report).

| Outcome | Rows | Share | 95% interval |
|---|---|---|---|
| ok | 1331 | 11.8% | 11.24–12.43% |
| unit | 764 | 6.8% | 6.33–7.26% |
| unconverted | 39 | 0.3% | 0.25–0.47% |
| wrong | 2430 | 21.6% | 20.83–22.35% |
| miss | 6698 | 59.5% | 58.56–60.38% |

- **Critical values:** 17 of 33 caught (51.5%, interval 35.22–67.50%); 15 lost because the row was not read, 1 because it was misread. False critical alarms: 279.
- **Rows that are not on the report:** 260 (of 4826 rows read).
- **Lab's flag:** ok 2059, invented 14, missed 59, wrong 2.
- **Reference range:** ok 865, wrong 125, missed 1144.
- **Collection date:** missed 264, ok 117, wrong 4.
- **Wrong values printed in a unit that needs converting:** 555 of 2430 (22.8%).

## By locale
| locale | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| FR | 2253 | 3.2% | 2.7% | 1.4% | 13.1% | 79.6% |
| DE | 2136 | 9.6% | 5.9% | 0.047% | 28.6% | 55.9% |
| ES | 1505 | 13.2% | 5.0% | 0.0% | 20.3% | 61.5% |
| RO | 2075 | 14.5% | 8.5% | 0.0% | 12.7% | 64.3% |
| US | 1750 | 16.2% | 15.4% | 0.0% | 27.0% | 41.4% |
| UK | 1543 | 17.6% | 3.6% | 0.5% | 31.2% | 47.1% |

## By layout
| layout | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| uk-cum | 762 | 2.8% | 1.7% | 0.0% | 52.2% | 43.3% |
| fr-a | 847 | 3.0% | 2.2% | 2.1% | 12.9% | 79.8% |
| fr-b | 1406 | 3.3% | 3.0% | 0.9% | 13.2% | 79.5% |
| ro-b | 1067 | 5.7% | 9.2% | 0.0% | 15.4% | 69.7% |
| de-cum | 703 | 6.0% | 7.0% | 0.0% | 37.7% | 49.4% |
| us-cum | 288 | 6.9% | 21.2% | 0.0% | 30.6% | 41.3% |
| de-a | 516 | 8.9% | 7.0% | 0.0% | 21.1% | 63.0% |
| es-cum | 825 | 9.6% | 2.3% | 0.0% | 17.7% | 70.4% |
| de-mono | 917 | 12.8% | 4.4% | 0.1% | 25.8% | 56.9% |
| es-a | 680 | 17.5% | 8.4% | 0.0% | 23.5% | 50.6% |
| us-b | 527 | 18.0% | 16.1% | 0.0% | 26.4% | 39.5% |
| us-a | 935 | 18.1% | 13.2% | 0.0% | 26.2% | 42.6% |
| ro-a | 1008 | 23.7% | 7.8% | 0.0% | 9.9% | 58.5% |
| uk-a | 781 | 32.1% | 5.5% | 0.9% | 10.8% | 50.7% |

## By heldout
| heldout | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| false | 10345 | 11.7% | 7.0% | 0.4% | 21.2% | 59.7% |
| true | 917 | 12.8% | 4.4% | 0.1% | 25.8% | 56.9% |

## By units
| units | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| FR | 2253 | 3.2% | 2.7% | 1.4% | 13.1% | 79.6% |
| conventional | 6683 | 13.8% | 9.3% | 0.0% | 21.4% | 55.6% |
| SI | 2326 | 14.5% | 3.6% | 0.3% | 30.4% | 51.2% |

## By decimal
| decimal | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| comma | 7367 | 9.5% | 5.2% | 0.4% | 18.9% | 65.9% |
| point | 3895 | 16.1% | 9.8% | 0.2% | 26.5% | 47.3% |

## By marker
| marker | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| thyroglobulin | 5 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| lymphocytes-absolute | 152 | 2.0% | 0.0% | 0.0% | 3.3% | 94.7% |
| eosinophils-percent | 136 | 2.2% | 0.0% | 0.0% | 8.8% | 89.0% |
| eosinophils-absolute | 152 | 2.6% | 0.0% | 0.0% | 11.8% | 85.5% |
| ggt | 184 | 3.8% | 20.1% | 0.0% | 25.5% | 50.5% |
| tsh | 144 | 4.2% | 37.5% | 0.0% | 22.2% | 36.1% |
| rbc | 215 | 4.2% | 18.1% | 0.5% | 24.2% | 53.0% |
| monocytes-absolute | 151 | 4.6% | 0.0% | 0.0% | 7.3% | 88.1% |
| wbc | 229 | 4.8% | 13.1% | 0.0% | 28.8% | 53.3% |
| platelet-count | 218 | 5.0% | 15.6% | 0.0% | 11.9% | 67.4% |
| basophils-percent | 136 | 5.1% | 0.0% | 0.0% | 9.6% | 85.3% |
| tibc | 123 | 5.7% | 6.5% | 0.0% | 13.0% | 74.8% |
| neutrophils-absolute | 152 | 5.9% | 0.7% | 0.0% | 3.3% | 90.1% |
| alt | 200 | 6.0% | 22.5% | 0.0% | 24.5% | 47.0% |
| urine-acr | 133 | 6.0% | 0.0% | 3.0% | 7.5% | 83.5% |
| alp | 179 | 6.1% | 14.0% | 0.0% | 19.0% | 60.9% |
| lymphocytes-percent | 134 | 6.7% | 0.0% | 0.0% | 32.8% | 60.4% |
| folate-serum | 123 | 7.3% | 4.9% | 0.0% | 16.3% | 71.5% |
| albumin-serum | 240 | 7.9% | 2.5% | 0.0% | 24.2% | 65.4% |
| basophils-absolute | 151 | 7.9% | 0.0% | 0.0% | 3.3% | 88.7% |
| urine-albumin | 133 | 8.3% | 0.0% | 0.0% | 16.5% | 75.2% |
| egfr | 240 | 8.3% | 15.8% | 0.0% | 20.0% | 55.8% |
| ast | 181 | 8.8% | 18.8% | 0.0% | 23.8% | 48.6% |
| neutrophils-percent | 135 | 8.9% | 0.0% | 0.0% | 18.5% | 72.6% |
| uric-acid | 251 | 9.6% | 1.6% | 0.0% | 23.5% | 65.3% |
| transferrin-saturation | 132 | 9.8% | 3.8% | 0.0% | 12.9% | 73.5% |
| hba1c | 233 | 9.9% | 0.9% | 0.0% | 35.2% | 54.1% |
| phosphorus-serum | 255 | 10.6% | 2.4% | 0.0% | 28.6% | 58.4% |
| triglycerides | 287 | 11.1% | 4.5% | 1.7% | 29.6% | 53.0% |
| monocytes-percent | 136 | 11.8% | 0.0% | 0.0% | 39.0% | 49.3% |
| hs-crp | 250 | 12.0% | 2.8% | 0.0% | 12.0% | 73.2% |
| hematocrit | 218 | 12.4% | 3.7% | 0.0% | 26.6% | 57.3% |
| total-bilirubin | 181 | 12.7% | 3.9% | 0.0% | 14.9% | 68.5% |
| mch | 220 | 12.7% | 10.0% | 0.0% | 17.7% | 59.5% |
| urine-creatinine | 133 | 12.8% | 0.0% | 7.5% | 19.5% | 60.2% |
| rdw-cv | 209 | 12.9% | 0.0% | 0.0% | 17.7% | 69.4% |
| mcv | 219 | 13.7% | 8.2% | 0.0% | 21.0% | 57.1% |
| hemoglobin | 215 | 14.0% | 5.1% | 0.0% | 23.3% | 57.7% |
| mchc | 220 | 14.1% | 4.5% | 0.0% | 25.0% | 56.4% |
| total-protein | 254 | 14.2% | 3.9% | 0.0% | 24.0% | 57.9% |
| potassium-serum | 261 | 14.2% | 4.6% | 0.0% | 33.0% | 48.3% |
| magnesium-serum | 259 | 14.7% | 1.2% | 0.0% | 42.5% | 41.7% |
| blood-urea-nitrogen | 136 | 14.7% | 11.0% | 0.0% | 14.7% | 59.6% |
| ldl-cholesterol | 280 | 15.0% | 8.2% | 0.7% | 22.5% | 53.6% |
| free-t3 | 100 | 15.0% | 4.0% | 0.0% | 18.0% | 63.0% |
| ferritin | 132 | 15.2% | 6.1% | 0.0% | 7.6% | 71.2% |
| chloride-serum | 247 | 15.8% | 10.1% | 0.0% | 17.4% | 56.7% |
| creatinine-serum | 271 | 15.9% | 4.8% | 1.1% | 25.1% | 53.1% |
| glucose-fasting | 315 | 16.2% | 10.2% | 1.0% | 20.6% | 52.1% |
| calcium-total | 252 | 16.3% | 3.6% | 1.6% | 32.1% | 46.4% |
| vitamin-d-25-oh | 150 | 16.7% | 6.0% | 0.0% | 14.0% | 63.3% |
| vitamin-b12 | 122 | 18.0% | 10.7% | 0.0% | 11.5% | 59.8% |
| hdl-cholesterol | 287 | 18.1% | 8.7% | 1.4% | 30.7% | 41.1% |
| bicarbonate-co2 | 246 | 18.3% | 0.0% | 0.0% | 12.2% | 69.5% |
| total-cholesterol | 286 | 18.5% | 12.2% | 1.0% | 35.7% | 32.5% |
| sodium-serum | 246 | 18.7% | 7.7% | 0.0% | 24.0% | 49.6% |
| serum-iron | 153 | 20.3% | 16.3% | 0.0% | 26.8% | 36.6% |
| urea | 105 | 23.8% | 0.0% | 0.0% | 34.3% | 41.9% |
| testosterone-total | 53 | 28.3% | 13.2% | 0.0% | 7.5% | 50.9% |
| free-t4 | 102 | 33.3% | 6.9% | 0.0% | 11.8% | 48.0% |

## What went wrong, most common first

**274× range missed | US undefined | two-sided**
    lrc-1-00182 [US us-cum us-cum -]  l001 GLUCOSE 91 mg/dL  →  read 91 
    lrc-1-00182 [US us-cum us-cum -]  l003 CREATININE 1.01 mg/dL  →  read 1.01 
    lrc-1-00182 [US us-cum us-cum -]  l005 SODIUM 138 mmol/L  →  read 138 

**212× range missed | RO undefined | two-sided**
    lrc-1-00094 [RO ro-b ro-b -]  l004 Hematocrit 43.1 %  →  read 43.1 %
    lrc-1-00094 [RO ro-b ro-b -]  l007 Trombocite 386 *10^3/µL  →  read 386 
    lrc-1-00094 [RO ro-b ro-b -]  l024 Bicarbonat seric 24 mmol/L  →  read 24 

**166× range missed | DE undefined | two-sided**
    lrc-1-00111 [DE de-cum de-cum -]  l001 Leukozyten 10,7 Tsd/µl  →  read 10.7 
    lrc-1-00111 [DE de-cum de-cum -]  l002 Erythrozyten 4,66 Mio/µl  →  read 4.66 
    lrc-1-00111 [DE de-cum de-cum -]  l007 RDW-CV 12,70 %  →  read 12.7 %

**137× unit | "mg/dL" not recognised**
    lrc-1-00182 [US us-cum us-cum -]  l001 GLUCOSE 91 mg/dL  →  read 91 
    lrc-1-00182 [US us-cum us-cum -]  l003 CREATININE 1.01 mg/dL  →  read 1.01 
    lrc-1-00280 [US us-cum us-cum -]  l024 LDL-CHOLESTEROL 99 mg/dL  →  read 99 

**130× range missed | UK undefined | two-sided**
    lrc-1-00099 [UK uk-a uk-a -]  l019 Gamma GT 30 U/L  →  read 30 
    lrc-1-00277 [UK uk-cum uk-cum -]  l021 TSH 1.34 mIU/L  →  read 1.34 
    lrc-1-00536 [UK uk-cum uk-cum -]  l002 HbA1c (IFCC) 33 mmol/mol  →  read 5.17 %

**109× unit | "U/L" not recognised**
    lrc-1-00014 [ES es-cum es-cum -]  l035 GPT (ALT) 14,0 U/L  →  read 14  [7, 56]
    lrc-1-00083 [RO ro-b ro-b -]  l016 ALT (TGP) 26 U/L  →  read 26  [7, 56]
    lrc-1-00083 [RO ro-b ro-b -]  l017 AST (TGO) 15,0 U/L  →  read 15  [10, 40]

**75× false critical | potassium-serum**
    lrc-1-00120 [DE de-cum de-cum -]  l028 Kalium 4,0 mmol/l  →  read 40 
    lrc-1-00182 [US us-cum us-cum -]  l006 POTASSIUM 3.9 mEq/L  →  read 39 
    lrc-1-00192 [US us-a us-a -]  l009 POTASSIUM 4.7 mEq/L  →  read 47 

**75× range missed | FR undefined | two-sided**
    lrc-1-00138 [FR fr-b fr-b -]  l024 CO2 total 25 mmol/L  →  read 25 
    lrc-1-00208 [FR fr-b fr-b -]  l008 CO2 total 26 mmol/L  →  read 26 mmol/L
    lrc-1-00836 [FR fr-a fr-a -]  l001 Glucose 0,97 g/L  →  read 97 

**74× miss | triglycerides | "TG"**
    lrc-1-00014 [ES es-cum es-cum -]  l042 TG 131 mg/dL
    lrc-1-00094 [RO ro-b ro-b -]  l038 TG 17 mg/dL
    lrc-1-00120 [DE de-cum de-cum -]  l041 TG 1,00 mmol/l

**73× date missed | FR lines**
    lrc-1-00138  want 2026-08-03 read null
    lrc-1-00208  want 2026-02-16 read null
    lrc-1-00235  want 2026-10-02 read null

**67× range missed | ES undefined | two-sided**
    lrc-1-00310 [ES es-cum es-cum -]  l020 Glucosa 103 mg/dL  →  read 103  H
    lrc-1-00310 [ES es-cum es-cum -]  l022 Creatinina 0,94 mg/dL  →  read 0.94 mg/dL
    lrc-1-00355 [ES es-a es-a -]  l035 AST (GOT) 15 U/L  →  read 15 

**58× false critical | creatinine-serum**
    lrc-1-00026 [ES es-cum es-cum -]  l025 Creatinina 0,69 mg/dL  →  read 60 
    lrc-1-00124 [RO ro-a ro-a -]  l023 Creatinina 0,96 mg/dL  →  read 60 
    lrc-1-00192 [US us-a us-a -]  l005 CREATININE 0.75 mg/dL  →  read 78 

**54× miss | albumin-serum | "Albumin"**
    lrc-1-00077 [UK uk-a uk-a -]  l015 Albumin 40 g/L
    lrc-1-00192 [US us-a us-a -]  l013 Albumin 4.5 g/dL
    lrc-1-00233 [US us-b us-b -]  l013 Albumin 4.8 g/dL

**53× false critical | sodium-serum**
    lrc-1-00026 [ES es-cum es-cum -]  l028 Sodio 140 mmol/L  →  read 107 
    lrc-1-00077 [UK uk-a uk-a -]  l008 Sodium 142 mmol/L  →  read 8 
    lrc-1-00280 [US us-cum us-cum -]  l005 SODIUM 142 mmol/L  →  read 4.2 

**50× miss | hba1c | "HbA1c"**
    lrc-1-00014 [ES es-cum es-cum -]  l022 HbA1c 5,1 %
    lrc-1-00077 [UK uk-a uk-a -]  l002 HbA1c 37 mmol/mol
    lrc-1-00099 [UK uk-a uk-a -]  l002 HbA1c 37 mmol/mol

**49× miss | lymphocytes-absolute | "Lymphocytes"**
    lrc-1-00010 [UK uk-cum uk-cum -]  l012 Lymphocytes 2.16 10*9/L
    lrc-1-00099 [UK uk-a uk-a -]  l039 Lymphocytes 1.40 10*9/L
    lrc-1-00138 [FR fr-b fr-b -]  l012 Lymphocytes 2 300 /mm3

**47× miss | ggt | "GGT"**
    lrc-1-00233 [US us-b us-b -]  l019 GGT 29 U/L
    lrc-1-00296 [RO ro-b ro-b -]  l041 GGT 18 U/L
    lrc-1-00343 [RO ro-a ro-a -]  l041 GGT 10 U/L

**46× miss | rdw-cv | "RDW"**
    lrc-1-00010 [UK uk-cum uk-cum -]  l008 RDW 15.1 %
    lrc-1-00094 [RO ro-b ro-b -]  l006 RDW 14.0 %
    lrc-1-00099 [UK uk-a uk-a -]  l035 RDW 13.4 %

**46× date missed | ES lines**
    lrc-1-00014  want 2026-02-13 read null
    lrc-1-00026  want 2026-08-20 read null
    lrc-1-00310  want 2026-09-06 read null

**46× false critical | glucose-fasting**
    lrc-1-00026 [ES es-cum es-cum -]  l022 Glucosa 115 mg/dL  →  read 8 
    lrc-1-00235 [FR fr-a fr-a -]  l017 Glucose 1,00 g/L  →  read 18 mg/dL H
    lrc-1-00267 [DE de-cum de-cum -]  l021 Glucose 5,44 mmol/l  →  read 544 

**46× miss | glucose-fasting | "Glucose"**
    lrc-1-00099 [UK uk-a uk-a -]  l001 Glucose 5.2 
    lrc-1-00130 [UK uk-a uk-a -]  l001 Glucose 7.1 mmol/L
    lrc-1-00233 [US us-b us-b -]  l001 Glucose 101 mg/dL

**46× miss | monocytes-absolute | "Monocytes"**
    lrc-1-00099 [UK uk-a uk-a -]  l040 Monocytes 0.38 10*9/L
    lrc-1-00138 [FR fr-b fr-b -]  l013 Monocytes 500 /mm3
    lrc-1-00235 [FR fr-a fr-a -]  l013 Monocytes 500 /mm3

**46× miss | bicarbonate-co2 | "Bicarbonat"**
    lrc-1-00120 [DE de-cum de-cum -]  l029 Bicarbonat 26 mmol/l
    lrc-1-00267 [DE de-cum de-cum -]  l030 Bicarbonat 25,0 mmol/l
    lrc-1-00418 [DE de-mono de-mono -]  l019 Bicarbonat 25 mmol/l

**44× miss | albumin-serum | "Albumine"**
    lrc-1-00208 [FR fr-b fr-b -]  l012 Albumine 38 g/L
    lrc-1-00237 [FR fr-b fr-b -]  l025 Albumine 43 g/L
    lrc-1-00322 [FR fr-a fr-a -]  l025 Albumine 41 g/L

**43× date missed | DE lines**
    lrc-1-00252  want 2026-09-22 read null
    lrc-1-00418  want 2026-06-26 read null
    lrc-1-00480  want 2026-05-22 read null

**42× miss | mch | "MCH"**
    lrc-1-00010 [UK uk-cum uk-cum -]  l006 MCH 28.8 pg
    lrc-1-00077 [UK uk-a uk-a -]  l022 MCH 25.1 pg
    lrc-1-00099 [UK uk-a uk-a -]  l033 MCH 29.1 pg

**42× miss | mchc | "MCHC"**
    lrc-1-00010 [UK uk-cum uk-cum -]  l007 MCHC 327 g/L
    lrc-1-00077 [UK uk-a uk-a -]  l023 MCHC 329 g/L
    lrc-1-00099 [UK uk-a uk-a -]  l034 MCHC 328 g/L

**42× miss | mch | "TCMH"**
    lrc-1-00138 [FR fr-b fr-b -]  l006 TCMH 28,10 pg
    lrc-1-00235 [FR fr-a fr-a -]  l006 TCMH 29,0 pg
    lrc-1-00237 [FR fr-b fr-b -]  l006 TCMH 30,5 pg

**42× miss | platelet-count | "Plaquettes"**
    lrc-1-00138 [FR fr-b fr-b -]  l009 Plaquettes 288 000 /mm3
    lrc-1-00235 [FR fr-a fr-a -]  l009 Plaquettes 306 000 /mm3
    lrc-1-00237 [FR fr-b fr-b -]  l009 Plaquettes 311 000 /mm3

**41× miss | mcv | "MCV"**
    lrc-1-00010 [UK uk-cum uk-cum -]  l005 MCV 88.0 fL
    lrc-1-00077 [UK uk-a uk-a -]  l021 MCV 76.2 fL
    lrc-1-00099 [UK uk-a uk-a -]  l032 MCV 88.6 fL

**40× date missed | RO lines**
    lrc-1-00057  want 2026-03-15 read null
    lrc-1-00296  want 2026-07-09 read null
    lrc-1-00343  want 2026-06-24 read null

**40× miss | hematocrit | "Hématocrite"**
    lrc-1-00138 [FR fr-b fr-b -]  l004 Hématocrite 32,60 %
    lrc-1-00235 [FR fr-a fr-a -]  l004 Hématocrite 39,2 %
    lrc-1-00237 [FR fr-b fr-b -]  l004 Hématocrite 40,7 %

**39× miss | uric-acid | "Harnsäure"**
    lrc-1-00120 [DE de-cum de-cum -]  l027 Harnsäure 268 µmol/l
    lrc-1-00418 [DE de-mono de-mono -]  l016 Harnsäure 339 µmol/l
    lrc-1-00511 [DE de-mono de-mono -]  l025 Harnsäure 5,4 kontr. mg/dl

**39× miss | potassium-serum | "Potassium"**
    lrc-1-00130 [UK uk-a uk-a -]  l006 Potassium 3.9 mmol/L
    lrc-1-00138 [FR fr-b fr-b -]  l022 Potassium 3,6 mmol/L
    lrc-1-00237 [FR fr-b fr-b -]  l018 Potassium 3,80 mmol/L

**39× miss | mchc | "CCMH"**
    lrc-1-00138 [FR fr-b fr-b -]  l007 CCMH 33,2 g/dL
    lrc-1-00235 [FR fr-a fr-a -]  l007 CCMH 32,4 g/dL
    lrc-1-00237 [FR fr-b fr-b -]  l007 CCMH 33,3 g/dL

**39× miss | tsh | "TSH"**
    lrc-1-00343 [RO ro-a ro-a -]  l053 TSH 0,89 mUI/L
    lrc-1-00458 [FR fr-b fr-b -]  l027 TSH 0,83 mUI/L
    lrc-1-00559 [UK uk-cum uk-cum -]  l023 TSH 0.87 mIU/L

**38× unit | "mmol/L" not recognised**
    lrc-1-00083 [RO ro-b ro-b -]  l006 Sodiu 97 mmol/L  →  read 97  [135, 145] L
    lrc-1-00099 [UK uk-a uk-a -]  l006 Sodium 140 mmol/L  →  read 140  [135, 48]
    lrc-1-00099 [UK uk-a uk-a -]  l007 Potassium 4.2 mmol/L  →  read 4.2  [15, 51]

**38× unit | "mL/min/1.73m2" not recognised**
    lrc-1-00120 [DE de-cum de-cum -]  l026 eGFR (CKD-EPI) 9 mL/min/1.73m2  →  read 9  [60, ] L
    lrc-1-00444 [UK uk-a uk-a -]  l004 eGFR >90 mL/min/1.73m2  →  read 90 
    lrc-1-00497 [US us-a us-a -]  l005 EGFR >90 mL/min/1.73m2  →  read 90 

**37× range missed | RO undefined | upper only**
    lrc-1-00094 [RO ro-b ro-b -]  l029 hs-CRP 5.4 mg/L  →  read 5.4  H
    lrc-1-00094 [RO ro-b ro-b -]  l037 Colesterol total 156 mg/dL  →  read 156 mg/dL
    lrc-1-00689 [RO ro-a ro-a -]  l014 hs-CRP 2,30 mg/L  →  read 2.3 mg/L

**37× miss | sodium-serum | "Sodium"**
    lrc-1-00130 [UK uk-a uk-a -]  l005 Sodium 142 mmol/L
    lrc-1-00192 [US us-a us-a -]  l008 Sodium 140 mmol/L
    lrc-1-00393 [FR fr-b fr-b -]  l020 Sodium 139 mmol/L

**37× miss | hemoglobin | "Hémoglobine"**
    lrc-1-00138 [FR fr-b fr-b -]  l003 Hémoglobine 10,8 g/dL
    lrc-1-00235 [FR fr-a fr-a -]  l003 Hémoglobine 12,7 g/dL
    lrc-1-00237 [FR fr-b fr-b -]  l003 Hémoglobine 13,6 

**37× miss | total-bilirubin | "Bilirubine totale"**
    lrc-1-00138 [FR fr-b fr-b -]  l034 Bilirubine totale 3,0 mg/L
    lrc-1-00322 [FR fr-a fr-a -]  l032 Bilirubine totale 9,0 mg/L
    lrc-1-00393 [FR fr-b fr-b -]  l034 Bilirubine totale 2,0 mg/L

**35× miss | calcium-total | "Calcium"**
    lrc-1-00077 [UK uk-a uk-a -]  l011 Calcium 2.35 mmol/L
    lrc-1-00099 [UK uk-a uk-a -]  l010 Calcium 2.27 mmol/L
    lrc-1-00130 [UK uk-a uk-a -]  l008 Calcium 2.45 mmol/L

**34× miss | urine-albumin | "Microalbuminurie"**
    lrc-1-00057 [RO ro-b ro-b -]  l022 Microalbuminurie 5,3 mg/L
    lrc-1-00083 [RO ro-b ro-b -]  l027 Microalbuminurie 12,8 mg/L
    lrc-1-00124 [RO ro-a ro-a -]  l059 Microalbuminurie <3,0 mg/L

**34× range wrong | RO undefined | two-sided**
    lrc-1-00083 [RO ro-b ro-b -]  l010 Calciu seric 9,1 mg/dL  →  read 9.1 mg/dL [86, 103]
    lrc-1-00083 [RO ro-b ro-b -]  l011 Magneziu seric 2,1 mg/dL  →  read 2.1 mg/dL [1.7, 24]
    lrc-1-00124 [RO ro-a ro-a -]  l027 Potasiu seric 3,9 mmol/L  →  read 3.9 mmol/L [35, 51]

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

**34× miss | basophils-percent | "Polynucléaires basophiles"**
    lrc-1-00138 [FR fr-b fr-b -]  l015 Polynucléaires basophiles 0,7 %
    lrc-1-00235 [FR fr-a fr-a -]  l015 Polynucléaires basophiles 1,2 %
    lrc-1-00322 [FR fr-a fr-a -]  l014 Polynucléaires basophiles 0,8 %

**33× date missed | UK lines**
    lrc-1-00010  want 2026-08-24 read null
    lrc-1-00077  want 2026-06-03 read null
    lrc-1-00099  want 2026-04-09 read null

**33× miss | creatinine-serum | "Cr"**
    lrc-1-00077 [UK uk-a uk-a -]  l005 Cr 76 µmol/L
    lrc-1-00418 [DE de-mono de-mono -]  l015 Cr 78 µmol/l
    lrc-1-00750 [RO ro-b ro-b -]  l012 Cr 0,96 mg/dL

**33× miss | eosinophils-absolute | "Polynucléaires éosinophiles"**
    lrc-1-00138 [FR fr-b fr-b -]  l014 Polynucléaires éosinophiles 600 /mm3
    lrc-1-00235 [FR fr-a fr-a -]  l014 Polynucléaires éosinophiles 100 /mm3
    lrc-1-00322 [FR fr-a fr-a -]  l013 Polynucléaires éosinophiles 0,09 G/L

**33× miss | basophils-absolute | "Polynucléaires basophiles"**
    lrc-1-00138 [FR fr-b fr-b -]  l015 Polynucléaires basophiles 100 /mm3
    lrc-1-00235 [FR fr-a fr-a -]  l015 Polynucléaires basophiles 100 /mm3
    lrc-1-00322 [FR fr-a fr-a -]  l014 Polynucléaires basophiles 0,04 G/L

**32× miss | bicarbonate-co2 | "Bicarbonato"**
    lrc-1-00014 [ES es-cum es-cum -]  l028 Bicarbonato 25 mmol/L
    lrc-1-00026 [ES es-cum es-cum -]  l030 Bicarbonato 25 mmol/L
    lrc-1-00310 [ES es-cum es-cum -]  l027 Bicarbonato 26 mmol/L

**32× miss | phosphorus-serum | "Fósforo"**
    lrc-1-00014 [ES es-cum es-cum -]  l030 Fósforo 4,00 mg/dL
    lrc-1-00026 [ES es-cum es-cum -]  l033 Fósforo 3,4 mg/dL
    lrc-1-00310 [ES es-cum es-cum -]  l030 Fósforo 3,9 mg/dL

**32× unit | "g/dL" not recognised**
    lrc-1-00355 [ES es-a es-a -]  l007 CHCM 33,7 g/dL  →  read 33.7  [32, 36]
    lrc-1-00547 [US us-a us-a -]  l014 PROTEIN, TOTAL 7.0 g/dL  →  read 7 
    lrc-1-00748 [US us-cum us-cum -]  l003 HEMOGLOBIN 14.8 g/dL  →  read 14.8 

**31× miss | ldl-cholesterol | "Colesterol LDL"**
    lrc-1-00026 [ES es-cum es-cum -]  l047 Colesterol LDL 104 mg/dL
    lrc-1-00094 [RO ro-b ro-b -]  l040 Colesterol LDL 87 mg/dL
    lrc-1-00355 [ES es-a es-a -]  l044 Colesterol LDL 114 mg/dL

**31× miss | hematocrit | "Hematocrit"**
    lrc-1-00057 [RO ro-b ro-b -]  l004 Hematocrit 47,8 %
    lrc-1-00124 [RO ro-a ro-a -]  l004 Hematocrit 31,5 %
    lrc-1-00296 [RO ro-b ro-b -]  l004 Hematocrit 43.1 %

**31× unit | "U/l" not recognised**
    lrc-1-00120 [DE de-cum de-cum -]  l035 GPT (ALT) 15 U/l  →  read 15  [7, 56]
    lrc-1-00120 [DE de-cum de-cum -]  l036 AST (GOT) 19 U/l  →  read 19  [10, 40]
    lrc-1-00120 [DE de-cum de-cum -]  l037 GGT 7 U/l  →  read 7  [8, 61]

**31× miss | potassium-serum | "Kaliémie"**
    lrc-1-00208 [FR fr-b fr-b -]  l006 Kaliémie 4,40 mmol/L
    lrc-1-00235 [FR fr-a fr-a -]  l023 Kaliémie 4,2 mmol/L
    lrc-1-00618 [FR fr-b fr-b -]  l008 Kaliémie 4,3 mmol/L

**31× miss | ldl-cholesterol | "LDL-Cholesterin"**
    lrc-1-00252 [DE de-a de-a -]  l024 LDL-Cholesterin 53 mg/dl
    lrc-1-00480 [DE de-mono de-mono -]  l033 LDL-Cholesterin 109,0 mg/dl
    lrc-1-00602 [DE de-mono de-mono -]  l024 LDL-Cholesterin 3,7 mmol/l

**30× miss | ferritin | "Ferritin"**
    lrc-1-00010 [UK uk-cum uk-cum -]  l019 Ferritin 100 µg/L
    lrc-1-01000 [UK uk-cum uk-cum -]  l022 Ferritin 9 µg/L
    lrc-1-01159 [DE de-mono de-mono -]  l025 Ferritin 269 ng/ml

**30× miss | total-cholesterol | "Colesterol total"**
    lrc-1-00026 [ES es-cum es-cum -]  l044 Colesterol total 175,0 mg/dL
    lrc-1-00296 [RO ro-b ro-b -]  l044 Colesterol total 140 mg/dL
    lrc-1-00750 [RO ro-b ro-b -]  l030 Colesterol total 241 mg/dL

**30× miss | egfr | "eGFR"**
    lrc-1-00077 [UK uk-a uk-a -]  l006 eGFR 85 mL/min/1.73m2
    lrc-1-00124 [RO ro-a ro-a -]  l024 eGFR 81 mL/min/1.73m2
    lrc-1-00233 [US us-b us-b -]  l005 eGFR > 90 mL/min/1.73m2

**30× miss | chloride-serum | "Chlore"**
    lrc-1-00208 [FR fr-b fr-b -]  l007 Chlore 99 mmol/L
    lrc-1-00237 [FR fr-b fr-b -]  l019 Chlore 100 mmol/L
    lrc-1-00581 [FR fr-a fr-a -]  l017 Chlore 104 mmol/L

**30× miss | chloride-serum | "Chlorid"**
    lrc-1-00252 [DE de-a de-a -]  l007 Chlorid 104 mmol/l
    lrc-1-00267 [DE de-cum de-cum -]  l029 Chlorid 102 mmol/l
    lrc-1-00511 [DE de-mono de-mono -]  l027 Chlorid 101 mmol/l

**30× range missed | US undefined | upper only**
    lrc-1-00280 [US us-cum us-cum -]  l024 LDL-CHOLESTEROL 99 mg/dL  →  read 99 
    lrc-1-00497 [US us-a us-a -]  l022 CHOLESTEROL, TOTAL 212 mg/dL  →  read 212 mg/dL
    lrc-1-00497 [US us-a us-a -]  l023 TRIGLYCERIDES 52 mg/dL  →  read 52 mg/dL

**29× date missed | US lines**
    lrc-1-00043  want 2026-05-14 read null
    lrc-1-00182  want 2026-09-08 read null
    lrc-1-00192  want 2026-04-14 read null

**29× miss | hemoglobin | "Hemoglobina"**
    lrc-1-00094 [RO ro-b ro-b -]  l003 Hemoglobina 14.3 g/dL
    lrc-1-00124 [RO ro-a ro-a -]  l003 Hemoglobina 10,5 g/dL
    lrc-1-00310 [ES es-cum es-cum -]  l003 Hemoglobina 13,0 g/dL

**29× miss | egfr | "Débit de filtration glomérulaire estimé"**
    lrc-1-00138 [FR fr-b fr-b -]  l020 Débit de filtration glomérulaire estimé 92 mL/min/1,73m²
    lrc-1-00393 [FR fr-b fr-b -]  l019 Débit de filtration glomérulaire estimé >90 mL/min/1,73m²
    lrc-1-00581 [FR fr-a fr-a -]  l014 Débit de filtration glomérulaire estimé >90 mL/min/1,73m²

**29× miss | folate-serum | "Folates sériques"**
    lrc-1-00138 [FR fr-b fr-b -]  l050 Folates sériques 18,1 ng/mL
    lrc-1-00458 [FR fr-b fr-b -]  l033 Folates sériques 27,9 ng/mL
    lrc-1-00581 [FR fr-a fr-a -]  l045 Folates sériques 20,9 ng/mL

**28× miss | uric-acid | "Ácido úrico"**
    lrc-1-00014 [ES es-cum es-cum -]  l026 Ácido úrico 4,1 mg/dL
    lrc-1-00310 [ES es-cum es-cum -]  l024 Ácido úrico 7,1 mg/dL
    lrc-1-00355 [ES es-a es-a -]  l024 Ácido úrico 5,9 mg/dL

**28× miss | magnesium-serum | "Magnesium"**
    lrc-1-00077 [UK uk-a uk-a -]  l012 Magnesium 0.91 mmol/L
    lrc-1-00130 [UK uk-a uk-a -]  l009 Magnesium 0.86 mmol/L
    lrc-1-00444 [UK uk-a uk-a -]  l009 Magnesium 0.95 mmol/L

**28× miss | blood-urea-nitrogen | "Azot ureic (BUN)"**
    lrc-1-00083 [RO ro-b ro-b -]  l003 Azot ureic (BUN) 21 mg/dL
    lrc-1-00094 [RO ro-b ro-b -]  l021 Azot ureic (BUN) 19 mg/dL
    lrc-1-00124 [RO ro-a ro-a -]  l022 Azot ureic (BUN) 13 mg/dL

**28× miss | hdl-cholesterol | "Cholestérol HDL"**
    lrc-1-00138 [FR fr-b fr-b -]  l038 Cholestérol HDL 0,85 g/L
    lrc-1-00393 [FR fr-b fr-b -]  l038 Cholestérol HDL 0,51 g/L
    lrc-1-00581 [FR fr-a fr-a -]  l032 Cholestérol HDL 0,59 g/L

**28× miss | hs-crp | "Protéine C réactive ultrasensible"**
    lrc-1-00208 [FR fr-b fr-b -]  l013 Protéine C réactive ultrasensible 4,6 mg/L
    lrc-1-00393 [FR fr-b fr-b -]  l028 Protéine C réactive ultrasensible 1,0 mg/L
    lrc-1-00581 [FR fr-a fr-a -]  l022 Protéine C réactive ultrasensible 0,3 mg/L

**28× miss | ferritin | "Ferritine"**
    lrc-1-00458 [FR fr-b fr-b -]  l025 Ferritine 13 ng/mL
    lrc-1-00581 [FR fr-a fr-a -]  l038 Ferritine 149 ng/mL
    lrc-1-00902 [FR fr-a fr-a -]  l044 Ferritine 20 ng/mL

**27× miss | blood-urea-nitrogen | "Nitrógeno ureico (BUN)"**
    lrc-1-00014 [ES es-cum es-cum -]  l023 Nitrógeno ureico (BUN) 18 mg/dL
    lrc-1-00026 [ES es-cum es-cum -]  l024 Nitrógeno ureico (BUN) 19 mg/dL
    lrc-1-00574 [ES es-cum es-cum -]  l022 Nitrógeno ureico (BUN) 6 mg/dL

**27× miss | glucose-fasting | "Glycémie à jeun"**
    lrc-1-00138 [FR fr-b fr-b -]  l017 Glycémie à jeun 1,07 g/L
    lrc-1-00208 [FR fr-b fr-b -]  l001 Glycémie à jeun 0,96 g/L
    lrc-1-00237 [FR fr-b fr-b -]  l011 Glycémie à jeun 0,97 g/L

**27× miss | uric-acid | "Acide urique"**
    lrc-1-00208 [FR fr-b fr-b -]  l004 Acide urique 69 mg/L
    lrc-1-00237 [FR fr-b fr-b -]  l016 Acide urique 35 mg/L
    lrc-1-00322 [FR fr-a fr-a -]  l020 Acide urique 55 mg/L

…and 1383 smaller groups.
