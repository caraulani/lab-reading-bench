# Lab-report reader stress test

385 corpus reports (test split, input text), 11262 rows with a known answer, seed 1. Read in 0.0 s (0.1 ms a report).

| Outcome | Rows | Share | 95% interval |
|---|---|---|---|
| ok | 0 | 0.0% | 0.00–0.03% |
| unit | 0 | 0.0% | 0.00–0.03% |
| unconverted | 0 | 0.0% | 0.00–0.03% |
| wrong | 0 | 0.0% | 0.00–0.03% |
| miss | 11262 | 100.0% | 99.97–100.00% |

- **Critical values:** 0 of 33 caught (0.0%, interval 0.00–10.43%); 33 lost because the row was not read, 0 because it was misread. False critical alarms: 0.
- **Rows that are not on the report:** 0 (of 0 rows read).
- **Lab's flag:** .
- **Reference range:** .
- **Collection date:** missed 385.

## By locale
| locale | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| UK | 1543 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| ES | 1505 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| US | 1750 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| RO | 2075 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| DE | 2136 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| FR | 2253 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |

## By layout
| layout | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| uk-cum | 762 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| es-cum | 825 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| us-b | 527 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| ro-b | 1067 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| uk-a | 781 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| de-cum | 703 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| ro-a | 1008 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| fr-b | 1406 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| us-cum | 288 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| us-a | 935 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| fr-a | 847 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| de-a | 516 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| es-a | 680 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| de-mono | 917 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |

## By heldout
| heldout | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| false | 10345 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| true | 917 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |

## By units
| units | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| SI | 2326 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| conventional | 6683 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| FR | 2253 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |

## By decimal
| decimal | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| point | 3895 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| comma | 7367 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |

## By marker
| marker | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| wbc | 229 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| rbc | 215 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| hemoglobin | 215 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| hematocrit | 218 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| mcv | 219 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| mch | 220 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| mchc | 220 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| rdw-cv | 209 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| platelet-count | 218 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| neutrophils-absolute | 152 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| lymphocytes-absolute | 152 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| eosinophils-absolute | 152 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| basophils-absolute | 151 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| serum-iron | 153 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| transferrin-saturation | 132 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| ferritin | 132 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| vitamin-d-25-oh | 150 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| vitamin-b12 | 122 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| folate-serum | 123 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| neutrophils-percent | 135 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| lymphocytes-percent | 134 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| monocytes-percent | 136 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| monocytes-absolute | 151 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| eosinophils-percent | 136 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| basophils-percent | 136 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| glucose-fasting | 315 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| hba1c | 233 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| blood-urea-nitrogen | 136 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| creatinine-serum | 271 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| egfr | 240 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| uric-acid | 251 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| sodium-serum | 246 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| bicarbonate-co2 | 246 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| magnesium-serum | 259 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| phosphorus-serum | 255 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| total-protein | 254 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| albumin-serum | 240 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| hs-crp | 250 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| alt | 200 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| ast | 181 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| alp | 179 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| total-bilirubin | 181 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| total-cholesterol | 286 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| triglycerides | 287 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| hdl-cholesterol | 287 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| ldl-cholesterol | 280 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| tibc | 123 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| tsh | 144 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| free-t4 | 102 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| free-t3 | 100 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| urine-creatinine | 133 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| urine-albumin | 133 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| urine-acr | 133 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| chloride-serum | 247 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| calcium-total | 252 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| ggt | 184 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| potassium-serum | 261 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| urea | 105 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| testosterone-total | 53 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |
| thyroglobulin | 5 | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% |

## What went wrong, most common first

**116× miss | hba1c | "HbA1c"**
    lrc-1-00014 [ES es-cum es-cum -]  l022 HbA1c 5,1 %
    lrc-1-00077 [UK uk-a uk-a -]  l002 HbA1c 37 mmol/mol
    lrc-1-00099 [UK uk-a uk-a -]  l002 HbA1c 37 mmol/mol

**110× miss | tsh | "TSH"**
    lrc-1-00014 [ES es-cum es-cum -]  l051 TSH 4,83 µUI/mL
    lrc-1-00124 [RO ro-a ro-a -]  l050 TSH 1,54 mUI/L
    lrc-1-00138 [FR fr-b fr-b -]  l045 TSH 1,11 mUI/L

**108× miss | glucose-fasting | "Glucose"**
    lrc-1-00099 [UK uk-a uk-a -]  l001 Glucose 5.2 
    lrc-1-00120 [DE de-cum de-cum -]  l022 Glucose 5,8 mmol/l
    lrc-1-00130 [UK uk-a uk-a -]  l001 Glucose 7.1 mmol/L

**106× miss | mcv | "MCV"**
    lrc-1-00010 [UK uk-cum uk-cum -]  l005 MCV 88.0 fL
    lrc-1-00077 [UK uk-a uk-a -]  l021 MCV 76.2 fL
    lrc-1-00099 [UK uk-a uk-a -]  l032 MCV 88.6 fL

**105× miss | mch | "MCH"**
    lrc-1-00010 [UK uk-cum uk-cum -]  l006 MCH 28.8 pg
    lrc-1-00077 [UK uk-a uk-a -]  l022 MCH 25.1 pg
    lrc-1-00099 [UK uk-a uk-a -]  l033 MCH 29.1 pg

**105× miss | mchc | "MCHC"**
    lrc-1-00010 [UK uk-cum uk-cum -]  l007 MCHC 327 g/L
    lrc-1-00077 [UK uk-a uk-a -]  l023 MCHC 329 g/L
    lrc-1-00099 [UK uk-a uk-a -]  l034 MCHC 328 g/L

**97× miss | magnesium-serum | "Magnesium"**
    lrc-1-00077 [UK uk-a uk-a -]  l012 Magnesium 0.91 mmol/L
    lrc-1-00099 [UK uk-a uk-a -]  l011 Magnesium 0.95 mmol/L
    lrc-1-00120 [DE de-cum de-cum -]  l031 Magnesium 0,91 mmol/l

**90× miss | total-cholesterol | "Colesterol total"**
    lrc-1-00014 [ES es-cum es-cum -]  l040 Colesterol total 195 mg/dL
    lrc-1-00026 [ES es-cum es-cum -]  l044 Colesterol total 175,0 mg/dL
    lrc-1-00083 [RO ro-b ro-b -]  l021 Colesterol total 189 mg/dL

**90× miss | albumin-serum | "Albumin"**
    lrc-1-00077 [UK uk-a uk-a -]  l015 Albumin 40 g/L
    lrc-1-00120 [DE de-cum de-cum -]  l032 Albumin 43 g/l
    lrc-1-00192 [US us-a us-a -]  l013 Albumin 4.5 g/dL

**88× miss | calcium-total | "Calcium"**
    lrc-1-00077 [UK uk-a uk-a -]  l011 Calcium 2.35 mmol/L
    lrc-1-00099 [UK uk-a uk-a -]  l010 Calcium 2.27 mmol/L
    lrc-1-00120 [DE de-cum de-cum -]  l030 Calcium 2,40 mmol/l

**87× miss | ggt | "GGT"**
    lrc-1-00094 [RO ro-b ro-b -]  l034 GGT 10 U/L
    lrc-1-00120 [DE de-cum de-cum -]  l037 GGT 7 U/l
    lrc-1-00233 [US us-b us-b -]  l019 GGT 29 U/L

**82× miss | rdw-cv | "RDW"**
    lrc-1-00010 [UK uk-cum uk-cum -]  l008 RDW 15.1 %
    lrc-1-00094 [RO ro-b ro-b -]  l006 RDW 14.0 %
    lrc-1-00099 [UK uk-a uk-a -]  l035 RDW 13.4 %

**77× miss | potassium-serum | "Potassium"**
    lrc-1-00099 [UK uk-a uk-a -]  l007 Potassium 4.2 mmol/L
    lrc-1-00130 [UK uk-a uk-a -]  l006 Potassium 3.9 mmol/L
    lrc-1-00138 [FR fr-b fr-b -]  l022 Potassium 3,6 mmol/L

**75× date missed | RO lines**
    lrc-1-00057  want 2026-03-15 read null
    lrc-1-00083  want 2026-02-17 read null
    lrc-1-00094  want 2026-01-09 read null

**74× miss | triglycerides | "TG"**
    lrc-1-00014 [ES es-cum es-cum -]  l042 TG 131 mg/dL
    lrc-1-00094 [RO ro-b ro-b -]  l038 TG 17 mg/dL
    lrc-1-00120 [DE de-cum de-cum -]  l041 TG 1,00 mmol/l

**73× date missed | FR lines**
    lrc-1-00138  want 2026-08-03 read null
    lrc-1-00208  want 2026-02-16 read null
    lrc-1-00235  want 2026-10-02 read null

**70× miss | sodium-serum | "Sodium"**
    lrc-1-00077 [UK uk-a uk-a -]  l008 Sodium 142 mmol/L
    lrc-1-00099 [UK uk-a uk-a -]  l006 Sodium 140 mmol/L
    lrc-1-00130 [UK uk-a uk-a -]  l005 Sodium 142 mmol/L

**70× date missed | DE lines**
    lrc-1-00111  want 2026-09-02 read null
    lrc-1-00120  want 2026-04-26 read null
    lrc-1-00252  want 2026-09-22 read null

**68× miss | hdl-cholesterol | "Colesterol HDL"**
    lrc-1-00014 [ES es-cum es-cum -]  l043 Colesterol HDL 52 mg/dL
    lrc-1-00026 [ES es-cum es-cum -]  l046 Colesterol HDL 41 mg/dL
    lrc-1-00094 [RO ro-b ro-b -]  l039 Colesterol HDL 66 mg/dL

**66× miss | egfr | "eGFR"**
    lrc-1-00077 [UK uk-a uk-a -]  l006 eGFR 85 mL/min/1.73m2
    lrc-1-00094 [RO ro-b ro-b -]  l023 eGFR 103 mL/min/1.73m2
    lrc-1-00124 [RO ro-a ro-a -]  l024 eGFR 81 mL/min/1.73m2

**65× miss | ldl-cholesterol | "Colesterol LDL"**
    lrc-1-00014 [ES es-cum es-cum -]  l044 Colesterol LDL 117 mg/dL
    lrc-1-00026 [ES es-cum es-cum -]  l047 Colesterol LDL 104 mg/dL
    lrc-1-00083 [RO ro-b ro-b -]  l024 Colesterol LDL 102 mg/dL

**62× date missed | US lines**
    lrc-1-00043  want 2026-05-14 read null
    lrc-1-00182  want 2026-09-08 read null
    lrc-1-00192  want 2026-04-14 read null

**57× miss | creatinine-serum | "Creatinina"**
    lrc-1-00014 [ES es-cum es-cum -]  l024 Creatinina 0,80 mg/dL
    lrc-1-00026 [ES es-cum es-cum -]  l025 Creatinina 0,69 mg/dL
    lrc-1-00094 [RO ro-b ro-b -]  l022 Creatinina 0.81 mg/dL

**57× miss | hdl-cholesterol | "HDL-Cholesterin"**
    lrc-1-00120 [DE de-cum de-cum -]  l042 HDL-Cholesterin 1,76 mmol/l
    lrc-1-00252 [DE de-a de-a -]  l023 HDL-Cholesterin 49 mg/dl
    lrc-1-00267 [DE de-cum de-cum -]  l044 HDL-Cholesterin 1,58 mmol/l

**57× miss | total-cholesterol | "Cholestérol total"**
    lrc-1-00138 [FR fr-b fr-b -]  l036 Cholestérol total 2,21 g/L
    lrc-1-00235 [FR fr-a fr-a -]  l035 Cholestérol total 2,40 g/L
    lrc-1-00322 [FR fr-a fr-a -]  l034 Cholestérol total 1,54 g/L

**56× miss | ldl-cholesterol | "LDL-Cholesterin"**
    lrc-1-00120 [DE de-cum de-cum -]  l043 LDL-Cholesterin 3,9 mmol/l
    lrc-1-00252 [DE de-a de-a -]  l024 LDL-Cholesterin 53 mg/dl
    lrc-1-00480 [DE de-mono de-mono -]  l033 LDL-Cholesterin 109,0 mg/dl

**55× date missed | UK lines**
    lrc-1-00010  want 2026-08-24 read null
    lrc-1-00077  want 2026-06-03 read null
    lrc-1-00099  want 2026-04-09 read null

**54× miss | lymphocytes-absolute | "Lymphocytes"**
    lrc-1-00010 [UK uk-cum uk-cum -]  l012 Lymphocytes 2.16 10*9/L
    lrc-1-00099 [UK uk-a uk-a -]  l039 Lymphocytes 1.40 10*9/L
    lrc-1-00138 [FR fr-b fr-b -]  l012 Lymphocytes 2 300 /mm3

**54× miss | hemoglobin | "Hemoglobina"**
    lrc-1-00014 [ES es-cum es-cum -]  l003 Hemoglobina 11,8 g/dL
    lrc-1-00026 [ES es-cum es-cum -]  l003 Hemoglobina 16,0 g/dL
    lrc-1-00094 [RO ro-b ro-b -]  l003 Hemoglobina 14.3 g/dL

**53× miss | hematocrit | "Hematocrit"**
    lrc-1-00057 [RO ro-b ro-b -]  l004 Hematocrit 47,8 %
    lrc-1-00094 [RO ro-b ro-b -]  l004 Hematocrit 43.1 %
    lrc-1-00124 [RO ro-a ro-a -]  l004 Hematocrit 31,5 %

**53× miss | creatinine-serum | "Creatinine"**
    lrc-1-00099 [UK uk-a uk-a -]  l004 Creatinine 70 µmol/L
    lrc-1-00130 [UK uk-a uk-a -]  l004 Creatinine 62 µmol/L
    lrc-1-00233 [US us-b us-b -]  l004 Creatinine 1.00 mg/dL

**53× miss | monocytes-absolute | "Monocytes"**
    lrc-1-00099 [UK uk-a uk-a -]  l040 Monocytes 0.38 10*9/L
    lrc-1-00138 [FR fr-b fr-b -]  l013 Monocytes 500 /mm3
    lrc-1-00235 [FR fr-a fr-a -]  l013 Monocytes 500 /mm3

**52× miss | ferritin | "Ferritin"**
    lrc-1-00010 [UK uk-cum uk-cum -]  l019 Ferritin 100 µg/L
    lrc-1-00111 [DE de-cum de-cum -]  l024 Ferritin 45 ng/ml
    lrc-1-00690 [DE de-cum de-cum -]  l014 Ferritin 95 µg/l

**51× miss | rdw-cv | "RDW-CV"**
    lrc-1-00014 [ES es-cum es-cum -]  l007 RDW-CV 13,9 %
    lrc-1-00057 [RO ro-b ro-b -]  l007 RDW-CV 13,3 %
    lrc-1-00111 [DE de-cum de-cum -]  l007 RDW-CV 12,70 %

**51× miss | uric-acid | "Harnsäure"**
    lrc-1-00120 [DE de-cum de-cum -]  l027 Harnsäure 268 µmol/l
    lrc-1-00252 [DE de-a de-a -]  l004 Harnsäure 7,0 mg/dl
    lrc-1-00267 [DE de-cum de-cum -]  l027 Harnsäure 262 µmol/l

**50× date missed | ES lines**
    lrc-1-00014  want 2026-02-13 read null
    lrc-1-00026  want 2026-08-20 read null
    lrc-1-00310  want 2026-09-06 read null

**49× miss | magnesium-serum | "Magneziu seric"**
    lrc-1-00057 [RO ro-b ro-b -]  l016 Magneziu seric 2,2 mg/dL
    lrc-1-00083 [RO ro-b ro-b -]  l011 Magneziu seric 2,1 mg/dL
    lrc-1-00094 [RO ro-b ro-b -]  l026 Magneziu seric 1.9 mg/dL

**49× miss | potassium-serum | "Kalium"**
    lrc-1-00120 [DE de-cum de-cum -]  l028 Kalium 4,0 mmol/l
    lrc-1-00252 [DE de-a de-a -]  l006 Kalium 4,30 mmol/l
    lrc-1-00267 [DE de-cum de-cum -]  l028 Kalium 4,1 mmol/l

**49× miss | sodium-serum | "Natrium"**
    lrc-1-00252 [DE de-a de-a -]  l005 Natrium 139,0 mmol/l
    lrc-1-00418 [DE de-mono de-mono -]  l017 Natrium 136 mmol/l
    lrc-1-00480 [DE de-mono de-mono -]  l014 Natrium 139 mmol/l

**48× miss | blood-urea-nitrogen | "Azot ureic (BUN)"**
    lrc-1-00083 [RO ro-b ro-b -]  l003 Azot ureic (BUN) 21 mg/dL
    lrc-1-00094 [RO ro-b ro-b -]  l021 Azot ureic (BUN) 19 mg/dL
    lrc-1-00124 [RO ro-a ro-a -]  l022 Azot ureic (BUN) 13 mg/dL

**48× miss | egfr | "eGFR (CKD-EPI)"**
    lrc-1-00120 [DE de-cum de-cum -]  l026 eGFR (CKD-EPI) 9 mL/min/1.73m2
    lrc-1-00252 [DE de-a de-a -]  l003 eGFR (CKD-EPI) 67 mL/min/1.73m2
    lrc-1-00267 [DE de-cum de-cum -]  l026 eGFR (CKD-EPI) 98 mL/min/1.73m2

**48× miss | monocytes-percent | "Monocytes"**
    lrc-1-00138 [FR fr-b fr-b -]  l013 Monocytes 5,8 %
    lrc-1-00235 [FR fr-a fr-a -]  l013 Monocytes 9,70 %
    lrc-1-00322 [FR fr-a fr-a -]  l012 Monocytes 8,8 %

**48× miss | chloride-serum | "Chlorid"**
    lrc-1-00252 [DE de-a de-a -]  l007 Chlorid 104 mmol/l
    lrc-1-00267 [DE de-cum de-cum -]  l029 Chlorid 102 mmol/l
    lrc-1-00480 [DE de-mono de-mono -]  l016 Chlorid 101 mmol/l

**46× miss | phosphorus-serum | "Fosfor seric"**
    lrc-1-00057 [RO ro-b ro-b -]  l017 Fosfor seric 4,0 mg/dL
    lrc-1-00083 [RO ro-b ro-b -]  l012 Fosfor seric 3,6 mg/dL
    lrc-1-00124 [RO ro-a ro-a -]  l032 Fosfor seric 3,7 mg/dL

**46× miss | bicarbonate-co2 | "Bicarbonat"**
    lrc-1-00120 [DE de-cum de-cum -]  l029 Bicarbonat 26 mmol/l
    lrc-1-00267 [DE de-cum de-cum -]  l030 Bicarbonat 25,0 mmol/l
    lrc-1-00418 [DE de-mono de-mono -]  l019 Bicarbonat 25 mmol/l

**46× miss | triglycerides | "Triglycérides"**
    lrc-1-00138 [FR fr-b fr-b -]  l037 Triglycérides 0,79 g/L
    lrc-1-00235 [FR fr-a fr-a -]  l036 Triglycérides 1,75 g/L
    lrc-1-00322 [FR fr-a fr-a -]  l035 Triglycérides 0,40 g/L

**45× miss | phosphorus-serum | "Phosphat"**
    lrc-1-00252 [DE de-a de-a -]  l010 Phosphat 3,5 mg/dl
    lrc-1-00267 [DE de-cum de-cum -]  l032 Phosphat 1,23 mmol/l
    lrc-1-00418 [DE de-mono de-mono -]  l022 Phosphat 1,07 mmol/l

**44× miss | bicarbonate-co2 | "Bicarbonat seric"**
    lrc-1-00057 [RO ro-b ro-b -]  l015 Bicarbonat seric 25 mmol/L
    lrc-1-00083 [RO ro-b ro-b -]  l009 Bicarbonat seric 26 mmol/L
    lrc-1-00094 [RO ro-b ro-b -]  l024 Bicarbonat seric 24 mmol/L

**44× miss | chloride-serum | "Chloride"**
    lrc-1-00077 [UK uk-a uk-a -]  l009 Chloride 110 mmol/L
    lrc-1-00099 [UK uk-a uk-a -]  l008 Chloride 103 (rpt) mmol/L
    lrc-1-00233 [US us-b us-b -]  l009 Chloride 102 mmol/L

**44× miss | urea | "Urée"**
    lrc-1-00138 [FR fr-b fr-b -]  l018 Urée 5,8 mmol/L
    lrc-1-00208 [FR fr-b fr-b -]  l002 Urée 4,6 mmol/L
    lrc-1-00237 [FR fr-b fr-b -]  l013 Urée 3,60 mmol/L

**44× miss | albumin-serum | "Albumine"**
    lrc-1-00208 [FR fr-b fr-b -]  l012 Albumine 38 g/L
    lrc-1-00237 [FR fr-b fr-b -]  l025 Albumine 43 g/L
    lrc-1-00322 [FR fr-a fr-a -]  l025 Albumine 41 g/L

**43× miss | vitamin-b12 | "Vitamin B12"**
    lrc-1-00010 [UK uk-cum uk-cum -]  l022 Vitamin B12 731 pmol/L
    lrc-1-00111 [DE de-cum de-cum -]  l027 Vitamin B12 354,0 pg/ml
    lrc-1-00748 [US us-cum us-cum -]  l028 Vitamin B12 735 pg/mL

**43× miss | ggt | "Gamma GT"**
    lrc-1-00026 [ES es-cum es-cum -]  l041 Gamma GT 13,0 U/L
    lrc-1-00099 [UK uk-a uk-a -]  l019 Gamma GT 30 U/L
    lrc-1-00130 [UK uk-a uk-a -]  l016 Gamma GT 18 U/L

**43× miss | mchc | "CHEM"**
    lrc-1-00057 [RO ro-b ro-b -]  l006 CHEM 32,6 g/dL
    lrc-1-00124 [RO ro-a ro-a -]  l006 CHEM 33,4 
    lrc-1-00296 [RO ro-b ro-b -]  l007 CHEM 34.4 g/dL

**43× miss | creatinine-serum | "Kreatinin"**
    lrc-1-00120 [DE de-cum de-cum -]  l025 Kreatinin 415 µmol/l
    lrc-1-00252 [DE de-a de-a -]  l002 Kreatinin 1,47 mg/dl
    lrc-1-00267 [DE de-cum de-cum -]  l025 Kreatinin 70,7 µmol/l

**42× miss | triglycerides | "Trigliceride"**
    lrc-1-00083 [RO ro-b ro-b -]  l022 Trigliceride 52 mg/dL
    lrc-1-00124 [RO ro-a ro-a -]  l043 Trigliceride 132 mg/dL
    lrc-1-00296 [RO ro-b ro-b -]  l046 Trigliceride 129 mg/dL

**42× miss | mch | "TCMH"**
    lrc-1-00138 [FR fr-b fr-b -]  l006 TCMH 28,10 pg
    lrc-1-00235 [FR fr-a fr-a -]  l006 TCMH 29,0 pg
    lrc-1-00237 [FR fr-b fr-b -]  l006 TCMH 30,5 pg

**42× miss | platelet-count | "Plaquettes"**
    lrc-1-00138 [FR fr-b fr-b -]  l009 Plaquettes 288 000 /mm3
    lrc-1-00235 [FR fr-a fr-a -]  l009 Plaquettes 306 000 /mm3
    lrc-1-00237 [FR fr-b fr-b -]  l009 Plaquettes 311 000 /mm3

**42× miss | triglycerides | "Triglyceride"**
    lrc-1-00252 [DE de-a de-a -]  l022 Triglyceride 84 mg/dl
    lrc-1-00267 [DE de-cum de-cum -]  l043 Triglyceride 7,19 mmol/l
    lrc-1-00480 [DE de-mono de-mono -]  l031 Triglyceride 57 mg/dl

**41× miss | glucose-fasting | "Glucosa"**
    lrc-1-00014 [ES es-cum es-cum -]  l021 Glucosa 96 mg/dL
    lrc-1-00026 [ES es-cum es-cum -]  l022 Glucosa 115 mg/dL
    lrc-1-00310 [ES es-cum es-cum -]  l020 Glucosa 103 mg/dL

**41× miss | chloride-serum | "Clor seric"**
    lrc-1-00057 [RO ro-b ro-b -]  l014 Clor seric 102 mmol/L
    lrc-1-00083 [RO ro-b ro-b -]  l008 Clor seric 104 mmol/L
    lrc-1-00124 [RO ro-a ro-a -]  l028 Clor seric 107 mmol/L

**41× miss | urea | "Urea"**
    lrc-1-00077 [UK uk-a uk-a -]  l004 Urea 5.1 mmol/L
    lrc-1-00099 [UK uk-a uk-a -]  l003 Urea 7.4 mmol/L
    lrc-1-00130 [UK uk-a uk-a -]  l003 Urea 4.0 mmol/L

**41× miss | total-protein | "Total protein"**
    lrc-1-00077 [UK uk-a uk-a -]  l014 Total protein 75 g/L
    lrc-1-00099 [UK uk-a uk-a -]  l013 Total protein 69 g/L
    lrc-1-00130 [UK uk-a uk-a -]  l010 Total protein 73 g/L

**41× miss | wbc | "Leukozyten"**
    lrc-1-00111 [DE de-cum de-cum -]  l001 Leukozyten 10,7 Tsd/µl
    lrc-1-00120 [DE de-cum de-cum -]  l001 Leukozyten 9,6 G/l
    lrc-1-00267 [DE de-cum de-cum -]  l001 Leukozyten 9,30 G/l

**41× miss | vitamin-b12 | "Vitamina B12"**
    lrc-1-00124 [RO ro-a ro-a -]  l055 Vitamina B12 438 pg/mL
    lrc-1-00343 [RO ro-a ro-a -]  l058 Vitamina B12 630 pg/mL
    lrc-1-00599 [ES es-a es-a -]  l043 Vitamina B12 366 pg/mL

**41× miss | wbc | "Leucocytes"**
    lrc-1-00235 [FR fr-a fr-a -]  l001 Leucocytes 4 900 /mm3
    lrc-1-00237 [FR fr-b fr-b -]  l001 Leucocytes 10 900 /mm3
    lrc-1-00322 [FR fr-a fr-a -]  l001 Leucocytes 5,4 G/L

**40× miss | hdl-cholesterol | "HDL cholesterol"**
    lrc-1-00099 [UK uk-a uk-a -]  l025 HDL cholesterol 1.71 mmol/L
    lrc-1-00130 [UK uk-a uk-a -]  l021 HDL cholesterol 2.51 mmol/L
    lrc-1-00277 [UK uk-cum uk-cum -]  l018 HDL cholesterol 1.32 mmol/L

**40× miss | rbc | "Erythrozyten"**
    lrc-1-00111 [DE de-cum de-cum -]  l002 Erythrozyten 4,66 Mio/µl
    lrc-1-00120 [DE de-cum de-cum -]  l002 Erythrozyten 4,32 T/l
    lrc-1-00267 [DE de-cum de-cum -]  l002 Erythrozyten 4,96 T/l

**40× miss | platelet-count | "Thrombozyten"**
    lrc-1-00111 [DE de-cum de-cum -]  l008 Thrombozyten 281,0 Tsd/µl
    lrc-1-00120 [DE de-cum de-cum -]  l009 Thrombozyten 206 (wdh.) G/l
    lrc-1-00418 [DE de-mono de-mono -]  l009 Thrombozyten 210,0 G/l

**40× miss | rbc | "Hématies"**
    lrc-1-00138 [FR fr-b fr-b -]  l002 Hématies 3 850 000 /mm3
    lrc-1-00235 [FR fr-a fr-a -]  l002 Hématies 4 380 000 /mm3
    lrc-1-00237 [FR fr-b fr-b -]  l002 Hématies 4 440 000 /mm3

**40× miss | hematocrit | "Hématocrite"**
    lrc-1-00138 [FR fr-b fr-b -]  l004 Hématocrite 32,60 %
    lrc-1-00235 [FR fr-a fr-a -]  l004 Hématocrite 39,2 %
    lrc-1-00237 [FR fr-b fr-b -]  l004 Hématocrite 40,7 %

**39× miss | ldl-cholesterol | "LDL cholesterol"**
    lrc-1-00099 [UK uk-a uk-a -]  l026 LDL cholesterol 3.5 mmol/L
    lrc-1-00130 [UK uk-a uk-a -]  l022 LDL cholesterol 4.0 mmol/L
    lrc-1-00277 [UK uk-cum uk-cum -]  l019 LDL cholesterol 2.8 mmol/L

**39× miss | hemoglobin | "Hämoglobin"**
    lrc-1-00111 [DE de-cum de-cum -]  l003 Hämoglobin 12,6 
    lrc-1-00120 [DE de-cum de-cum -]  l003 Hämoglobin 126 g/l
    lrc-1-00267 [DE de-cum de-cum -]  l003 Hämoglobin 141 g/l

**39× miss | hematocrit | "Hämatokrit"**
    lrc-1-00120 [DE de-cum de-cum -]  l004 Hämatokrit 0,39 L/l
    lrc-1-00267 [DE de-cum de-cum -]  l004 Hämatokrit 0,44 L/l
    lrc-1-00418 [DE de-mono de-mono -]  l004 Hämatokrit 0,57 L/l

**39× miss | mchc | "CCMH"**
    lrc-1-00138 [FR fr-b fr-b -]  l007 CCMH 33,2 g/dL
    lrc-1-00235 [FR fr-a fr-a -]  l007 CCMH 32,4 g/dL
    lrc-1-00237 [FR fr-b fr-b -]  l007 CCMH 33,3 g/dL

**38× miss | phosphorus-serum | "Phosphate"**
    lrc-1-00077 [UK uk-a uk-a -]  l013 Phosphate 0.90 mmol/L
    lrc-1-00099 [UK uk-a uk-a -]  l012 Phosphate 1.03 mmol/L
    lrc-1-00277 [UK uk-cum uk-cum -]  l011 Phosphate 1.32 mmol/L

**38× miss | hemoglobin | "Hémoglobine"**
    lrc-1-00138 [FR fr-b fr-b -]  l003 Hémoglobine 10,8 g/dL
    lrc-1-00235 [FR fr-a fr-a -]  l003 Hémoglobine 12,7 g/dL
    lrc-1-00237 [FR fr-b fr-b -]  l003 Hémoglobine 13,6 

**37× miss | glucose-fasting | "Glicemie"**
    lrc-1-00057 [RO ro-b ro-b -]  l010 Glicemie 88 mg/dL
    lrc-1-00083 [RO ro-b ro-b -]  l001 Glicemie 92 mg/dL
    lrc-1-00124 [RO ro-a ro-a -]  l021 Glicemie 91 mg/dL

**37× miss | total-bilirubin | "Bilirubine totale"**
    lrc-1-00138 [FR fr-b fr-b -]  l034 Bilirubine totale 3,0 mg/L
    lrc-1-00322 [FR fr-a fr-a -]  l032 Bilirubine totale 9,0 mg/L
    lrc-1-00393 [FR fr-b fr-b -]  l034 Bilirubine totale 2,0 mg/L

**36× miss | bicarbonate-co2 | "Bicarbonate"**
    lrc-1-00077 [UK uk-a uk-a -]  l010 Bicarbonate 23 mmol/L
    lrc-1-00099 [UK uk-a uk-a -]  l009 Bicarbonate 28 mmol/L
    lrc-1-00130 [UK uk-a uk-a -]  l007 Bicarbonate 24 mmol/L

…and 415 smaller groups.
