# Lab-report reader stress test

385 corpus reports (test split, input pdf), 11262 rows with a known answer, seed 1. Read in 8.2 s (21.2 ms a report).

| Outcome | Rows | Share | 95% interval |
|---|---|---|---|
| ok | 7728 | 68.6% | 67.76–69.47% |
| unit | 68 | 0.6% | 0.48–0.76% |
| unconverted | 293 | 2.6% | 2.32–2.91% |
| wrong | 646 | 5.7% | 5.32–6.18% |
| miss | 2527 | 22.4% | 21.68–23.22% |

- **Critical values:** 28 of 33 caught (84.8%, interval 69.08–93.35%); 3 lost because the row was not read, 2 because it was misread. False critical alarms: 46.
- **Rows that are not on the report:** 274 (of 9009 rows read).
- **Lab's flag:** ok 7949, invented 55, wrong 4, missed 81.
- **Reference range:** ok 7841, wrong 68, missed 180.
- **Collection date:** ok 312, missed 73.
- **Wrong values printed in a unit that needs converting:** 334 of 646 (51.7%).

## By locale
| locale | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| FR | 2253 | 17.0% | 0.044% | 10.4% | 1.1% | 71.5% |
| UK | 1543 | 56.0% | 0.065% | 2.4% | 38.9% | 2.7% |
| DE | 2136 | 82.6% | 1.5% | 1.0% | 0.0% | 14.8% |
| ES | 1505 | 83.7% | 0.7% | 0.0% | 0.066% | 15.5% |
| RO | 2075 | 89.9% | 0.7% | 0.0% | 0.0% | 9.4% |
| US | 1750 | 91.0% | 0.5% | 0.0% | 1.1% | 7.4% |

## By layout
| layout | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| fr-a | 847 | 15.8% | 0.0% | 11.3% | 1.1% | 71.8% |
| uk-cum | 762 | 16.8% | 0.0% | 0.5% | 78.7% | 3.9% |
| fr-b | 1406 | 17.6% | 0.071% | 9.9% | 1.1% | 71.3% |
| de-cum | 703 | 81.8% | 0.6% | 1.6% | 0.0% | 16.1% |
| de-a | 516 | 82.2% | 0.4% | 0.8% | 0.0% | 16.7% |
| es-cum | 825 | 82.2% | 0.6% | 0.0% | 0.0% | 17.2% |
| de-mono | 917 | 83.5% | 2.9% | 0.7% | 0.0% | 12.9% |
| es-a | 680 | 85.4% | 0.9% | 0.0% | 0.1% | 13.5% |
| ro-a | 1008 | 88.6% | 0.7% | 0.0% | 0.0% | 10.7% |
| us-a | 935 | 90.4% | 0.1% | 0.0% | 1.3% | 8.2% |
| ro-b | 1067 | 91.1% | 0.7% | 0.0% | 0.0% | 8.2% |
| us-cum | 288 | 91.7% | 1.4% | 0.0% | 1.0% | 5.9% |
| us-b | 527 | 91.8% | 0.6% | 0.0% | 0.9% | 6.6% |
| uk-a | 781 | 94.2% | 0.1% | 4.2% | 0.0% | 1.4% |

## By heldout
| heldout | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| false | 10345 | 67.3% | 0.4% | 2.8% | 6.2% | 23.3% |
| true | 917 | 83.5% | 2.9% | 0.7% | 0.0% | 12.9% |

## By units
| units | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| FR | 2253 | 17.0% | 0.044% | 10.4% | 1.1% | 71.5% |
| SI | 2326 | 64.3% | 0.6% | 2.5% | 25.8% | 6.8% |
| conventional | 6683 | 87.5% | 0.8% | 0.0% | 0.3% | 11.3% |

## By decimal
| decimal | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| comma | 7367 | 64.4% | 0.8% | 3.5% | 0.4% | 31.0% |
| point | 3895 | 76.6% | 0.3% | 0.9% | 15.9% | 6.2% |

## By marker
| marker | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| lymphocytes-absolute | 152 | 12.5% | 0.0% | 0.0% | 5.9% | 81.6% |
| eosinophils-absolute | 152 | 12.5% | 0.0% | 0.0% | 17.8% | 69.7% |
| monocytes-absolute | 151 | 18.5% | 0.0% | 0.0% | 4.6% | 76.8% |
| basophils-absolute | 151 | 19.9% | 0.0% | 0.0% | 4.0% | 76.2% |
| neutrophils-absolute | 152 | 25.0% | 0.0% | 0.0% | 5.3% | 69.7% |
| basophils-percent | 136 | 26.5% | 0.0% | 0.0% | 0.7% | 72.8% |
| eosinophils-percent | 136 | 32.4% | 0.0% | 0.0% | 2.2% | 65.4% |
| urine-albumin | 133 | 34.6% | 0.0% | 0.0% | 7.5% | 57.9% |
| urine-creatinine | 133 | 43.6% | 0.0% | 24.1% | 11.3% | 21.1% |
| urine-acr | 133 | 48.1% | 0.0% | 18.0% | 6.8% | 27.1% |
| bicarbonate-co2 | 246 | 51.2% | 0.0% | 0.0% | 5.7% | 43.1% |
| triglycerides | 287 | 53.0% | 0.0% | 16.4% | 4.9% | 25.8% |
| tibc | 123 | 53.7% | 0.0% | 8.1% | 4.1% | 34.1% |
| neutrophils-percent | 135 | 59.3% | 0.0% | 0.0% | 2.2% | 38.5% |
| rdw-cv | 209 | 60.3% | 0.0% | 0.0% | 3.3% | 36.4% |
| creatinine-serum | 271 | 62.7% | 1.1% | 6.6% | 5.9% | 23.6% |
| egfr | 240 | 68.3% | 10.0% | 0.0% | 1.7% | 20.0% |
| lymphocytes-percent | 134 | 68.7% | 0.0% | 0.0% | 2.2% | 29.1% |
| folate-serum | 123 | 70.7% | 0.0% | 0.0% | 5.7% | 23.6% |
| ldl-cholesterol | 280 | 71.8% | 0.4% | 9.6% | 7.9% | 10.4% |
| ferritin | 132 | 72.0% | 0.0% | 0.0% | 6.1% | 22.0% |
| hs-crp | 250 | 72.0% | 0.0% | 0.0% | 7.6% | 20.4% |
| hdl-cholesterol | 287 | 72.1% | 0.0% | 9.4% | 8.0% | 10.5% |
| vitamin-b12 | 122 | 72.1% | 0.8% | 0.0% | 6.6% | 20.5% |
| alp | 179 | 72.6% | 0.0% | 0.0% | 8.4% | 19.0% |
| total-cholesterol | 286 | 72.7% | 0.0% | 19.9% | 7.3% | 0.0% |
| phosphorus-serum | 255 | 72.9% | 0.0% | 0.0% | 7.8% | 19.2% |
| uric-acid | 251 | 73.3% | 0.8% | 0.0% | 6.8% | 19.1% |
| ast | 181 | 73.5% | 0.0% | 0.0% | 7.2% | 19.3% |
| total-bilirubin | 181 | 73.5% | 0.0% | 0.0% | 6.1% | 20.4% |
| alt | 200 | 73.5% | 0.5% | 0.0% | 6.5% | 19.5% |
| glucose-fasting | 315 | 73.7% | 0.3% | 8.9% | 5.4% | 11.7% |
| albumin-serum | 240 | 73.8% | 0.4% | 0.0% | 7.5% | 18.3% |
| vitamin-d-25-oh | 150 | 74.7% | 0.7% | 0.0% | 4.7% | 20.0% |
| chloride-serum | 247 | 74.9% | 0.4% | 0.0% | 4.9% | 19.8% |
| transferrin-saturation | 132 | 75.0% | 0.0% | 0.0% | 6.1% | 18.9% |
| mcv | 219 | 75.3% | 1.4% | 0.0% | 4.1% | 19.2% |
| platelet-count | 218 | 75.7% | 0.0% | 0.0% | 5.0% | 19.3% |
| total-protein | 254 | 76.0% | 0.0% | 0.0% | 6.3% | 17.7% |
| potassium-serum | 261 | 76.2% | 1.1% | 0.0% | 5.7% | 16.9% |
| hemoglobin | 215 | 76.3% | 2.3% | 0.0% | 3.7% | 17.7% |
| monocytes-percent | 136 | 76.5% | 0.0% | 0.0% | 2.2% | 21.3% |
| calcium-total | 252 | 76.6% | 0.4% | 8.7% | 3.2% | 11.1% |
| mchc | 220 | 76.8% | 2.7% | 0.0% | 2.7% | 17.7% |
| mch | 220 | 77.3% | 0.5% | 0.0% | 3.2% | 19.1% |
| hematocrit | 218 | 78.9% | 0.5% | 0.0% | 2.3% | 18.3% |
| urea | 105 | 80.0% | 0.0% | 0.0% | 20.0% | 0.0% |
| thyroglobulin | 5 | 80.0% | 0.0% | 0.0% | 20.0% | 0.0% |
| sodium-serum | 246 | 80.5% | 1.2% | 0.0% | 5.3% | 13.0% |
| hba1c | 233 | 81.5% | 0.0% | 0.0% | 7.3% | 11.2% |
| wbc | 229 | 82.5% | 2.2% | 0.0% | 7.9% | 7.4% |
| ggt | 184 | 83.2% | 0.0% | 0.0% | 7.1% | 9.8% |
| magnesium-serum | 259 | 83.8% | 0.0% | 0.0% | 5.4% | 10.8% |
| rbc | 215 | 90.7% | 1.4% | 0.0% | 7.9% | 0.0% |
| serum-iron | 153 | 94.1% | 0.0% | 0.7% | 5.2% | 0.0% |
| tsh | 144 | 94.4% | 0.0% | 0.0% | 5.6% | 0.0% |
| free-t3 | 100 | 96.0% | 0.0% | 0.0% | 4.0% | 0.0% |
| testosterone-total | 53 | 96.2% | 0.0% | 0.0% | 3.8% | 0.0% |
| free-t4 | 102 | 98.0% | 0.0% | 0.0% | 2.0% | 0.0% |
| blood-urea-nitrogen | 136 | 99.3% | 0.7% | 0.0% | 0.0% | 0.0% |

## What went wrong, most common first

**91× range missed | FR undefined | two-sided**
    lrc-1-00237 [FR fr-b fr-b -]  l013 Urée 3,60 mmol/L  →  read 3.6 mmol/L
    lrc-1-00237 [FR fr-b fr-b -]  l021 Calcium 91,0 mg/L  →  read 91 mg/L
    lrc-1-00836 [FR fr-a fr-a -]  l001 Glucose 0,97 g/L  →  read 0.97 g/L

**77× flag missed | undefined es-a**
    lrc-1-00355 [ES es-a es-a -]  l011 Neutrófilos % 68,7 %  →  read 68.7 % [40, 60]
    lrc-1-00355 [ES es-a es-a -]  l015 Monocitos % 8,5 %  →  read 8.5 % [2, 8]
    lrc-1-00355 [ES es-a es-a -]  l019 Basófilos % 0,4 %  →  read 0.4 % [0.5, 1]

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
    lrc-1-00235 [FR fr-a fr-a -]  l035 Cholestérol total 2,40 g/L  →  read 2.4 g/L H
    lrc-1-00235 [FR fr-a fr-a -]  l036 Triglycérides 1,75 g/L  →  read 1.75 g/L H

**57× unconverted | total-cholesterol | g/L**
    lrc-1-00138 [FR fr-b fr-b -]  l036 Cholestérol total 2,21 g/L  →  read 2.21 g/L [, 2] H
    lrc-1-00235 [FR fr-a fr-a -]  l035 Cholestérol total 2,40 g/L  →  read 2.4 g/L H
    lrc-1-00322 [FR fr-a fr-a -]  l034 Cholestérol total 1,54 g/L  →  read 1.54 g/L [, 2]

**50× range wrong | FR undefined | upper only**
    lrc-1-00138 [FR fr-b fr-b -]  l012 Lymphocytes 29,00 %  →  read 29 % [0, 4]
    lrc-1-00138 [FR fr-b fr-b -]  l013 Monocytes 5,8 %  →  read 5.8 % [200, 800]
    lrc-1-00235 [FR fr-a fr-a -]  l012 Lymphocytes 34,00 %  →  read 34 % [0, 4]

**46× miss | bicarbonate-co2 | "Bicarbonat"**
    lrc-1-00120 [DE de-cum de-cum -]  l029 Bicarbonat 26 mmol/l
    lrc-1-00267 [DE de-cum de-cum -]  l030 Bicarbonat 25,0 mmol/l
    lrc-1-00418 [DE de-mono de-mono -]  l019 Bicarbonat 25 mmol/l

**46× unconverted | triglycerides | g/L**
    lrc-1-00138 [FR fr-b fr-b -]  l037 Triglycérides 0,79 g/L  →  read 0.79 g/L
    lrc-1-00235 [FR fr-a fr-a -]  l036 Triglycérides 1,75 g/L  →  read 1.75 g/L H
    lrc-1-00322 [FR fr-a fr-a -]  l035 Triglycérides 0,40 g/L  →  read 0.4 g/L

**45× unit | "" not recognised**
    lrc-1-00057 [RO ro-b ro-b -]  l001 Număr de leucocite 6,8   →  read 6.8  [4, 11]
    lrc-1-00083 [RO ro-b ro-b -]  l004 Creatinină serică 1,10   →  read 1.1  [0.6, 1.3]
    lrc-1-00111 [DE de-cum de-cum -]  l003 Hämoglobin 12,6   →  read 12.6  [12, 16]

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

**38× miss | monocytes-absolute | "Monocytes"**
    lrc-1-00138 [FR fr-b fr-b -]  l013 Monocytes 500 /mm3
    lrc-1-00235 [FR fr-a fr-a -]  l013 Monocytes 500 /mm3
    lrc-1-00322 [FR fr-a fr-a -]  l012 Monocytes 0,48 G/L

**37× miss | total-bilirubin | "Bilirubine totale"**
    lrc-1-00138 [FR fr-b fr-b -]  l034 Bilirubine totale 3,0 mg/L
    lrc-1-00322 [FR fr-a fr-a -]  l032 Bilirubine totale 9,0 mg/L
    lrc-1-00393 [FR fr-b fr-b -]  l034 Bilirubine totale 2,0 mg/L

**36× miss | lymphocytes-absolute | "Lymphocytes"**
    lrc-1-00138 [FR fr-b fr-b -]  l012 Lymphocytes 2 300 /mm3
    lrc-1-00235 [FR fr-a fr-a -]  l012 Lymphocytes 1 700 (contr.) /mm3
    lrc-1-00322 [FR fr-a fr-a -]  l011 Lymphocytes 2,00 G/L

**35× miss | urine-albumin | "Microalbuminurie"**
    lrc-1-00057 [RO ro-b ro-b -]  l022 Microalbuminurie 5,3 mg/L
    lrc-1-00083 [RO ro-b ro-b -]  l027 Microalbuminurie 12,8 mg/L
    lrc-1-00124 [RO ro-a ro-a -]  l059 Microalbuminurie <3,0 mg/L

**35× not on the report | urine-microalbumin | read from "Microalbuminurie"**
    lrc-1-00057 [RO ro-b]  Microalbuminurie = 5.3 mg/L
    lrc-1-00083 [RO ro-b]  Microalbuminurie = 12.8 mg/L
    lrc-1-00124 [RO ro-a]  Microalbuminurie = 3 mg/L

**34× not on the report | chromium | read from "Cr"**
    lrc-1-00077 [UK uk-a]  Cr = 76 μmol/L
    lrc-1-00418 [DE de-mono]  Cr = 78 μmol/L
    lrc-1-00750 [RO ro-b]  Cr = 0.96 mg/dL

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

**31× miss | potassium-serum | "Kaliémie"**
    lrc-1-00208 [FR fr-b fr-b -]  l006 Kaliémie 4,40 mmol/L
    lrc-1-00235 [FR fr-a fr-a -]  l023 Kaliémie 4,2 mmol/L
    lrc-1-00618 [FR fr-b fr-b -]  l008 Kaliémie 4,3 mmol/L

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

**28× false critical | glucose-fasting**
    lrc-1-00077 [UK uk-a uk-a -]  l001 Fasting glucose 5.2   →  read 5.2  [3.9, 5.5]
    lrc-1-00099 [UK uk-a uk-a -]  l001 Glucose 5.2   →  read 5.2  [3.9, 5.5]
    lrc-1-00235 [FR fr-a fr-a -]  l017 Glucose 1,00 g/L  →  read 1 g/L [0.7, 0.99] H

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

**27× unconverted | ldl-cholesterol | g/L**
    lrc-1-00393 [FR fr-b fr-b -]  l039 LDL-cholestérol 0,93 g/L  →  read 0.93 g/L [, 1]
    lrc-1-00618 [FR fr-b fr-b -]  l020 LDL-cholestérol 0,47 g/L  →  read 0.47 g/L [, 1]
    lrc-1-00836 [FR fr-a fr-a -]  l020 LDL-cholestérol 1,01 g/L  →  read 1.01 g/L [, 1] H

**26× unconverted | urine-creatinine | mmol/L**
    lrc-1-00130 [UK uk-a uk-a -]  l024 Urine creatinine 36.3 mmol/L  →  read 36.3 mmol/L
    lrc-1-00138 [FR fr-b fr-b -]  l052 Créatinine urinaire 11,7 mmol/L  →  read 11.7 mmol/L
    lrc-1-00444 [UK uk-a uk-a -]  l025 Urine creatinine 16.9 mmol/L  →  read 16.9 mmol/L

**26× miss | sodium-serum | "Natrémie"**
    lrc-1-00208 [FR fr-b fr-b -]  l005 Natrémie 141 mmol/L
    lrc-1-00237 [FR fr-b fr-b -]  l017 Natrémie 141,0 mmol/L
    lrc-1-00322 [FR fr-a fr-a -]  l021 Natrémie 142 mmol/L

**26× miss | total-protein | "Protéines totales"**
    lrc-1-00208 [FR fr-b fr-b -]  l011 Protéines totales 71 g/L
    lrc-1-00322 [FR fr-a fr-a -]  l024 Protéines totales 67,0 g/L
    lrc-1-00581 [FR fr-a fr-a -]  l020 Protéines totales 78,0 g/L

**26× miss | phosphorus-serum | "Phosphore"**
    lrc-1-00458 [FR fr-b fr-b -]  l012 Phosphore 35 mg/L
    lrc-1-00618 [FR fr-b fr-b -]  l012 Phosphore 32 mg/L
    lrc-1-00630 [FR fr-a fr-a -]  l025 Phosphore 29 mg/L

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

**23× unconverted | glucose-fasting | g/L**
    lrc-1-00235 [FR fr-a fr-a -]  l017 Glucose 1,00 g/L  →  read 1 g/L [0.7, 0.99] H
    lrc-1-00322 [FR fr-a fr-a -]  l016 Glucose 1,15 g/L  →  read 1.15 g/L [0.7, 0.99] H
    lrc-1-00458 [FR fr-b fr-b -]  l001 Glucose 1,01 g/L  →  read 1.01 g/L [0.7, 0.99] H

**23× wrong | hdl-cholesterol | point uk-cum | unit mmol/L**
    lrc-1-00277 [UK uk-cum uk-cum -]  l018 HDL cholesterol 1.32 mmol/L  →  read 49.1 mg/dL [39.8, ]
    lrc-1-00536 [UK uk-cum uk-cum -]  l024 HDL cholesterol 1.40 mmol/L  →  read 49.1 mg/dL [39.8, ]
    lrc-1-00559 [UK uk-cum uk-cum -]  l020 HDL cholesterol 1.68 mmol/L  →  read 63 mg/dL [39.8, ]

**23× unit | "mL/min/1.73m2" not recognised**
    lrc-1-00480 [DE de-mono de-mono -]  l013 eGFR (CKD-EPI) 121,0 mL/min/1.73m2  →  read 121  [60, ]
    lrc-1-00511 [DE de-mono de-mono -]  l024 eGFR (CKD-EPI) 74 mL/min/1.73m2  →  read 74  [60, ]
    lrc-1-00602 [DE de-mono de-mono -]  l006 eGFR (CKD-EPI) >90 mL/min/1.73m2  →  read 90  [60, ]

**22× unconverted | calcium-total | mg/L**
    lrc-1-00235 [FR fr-a fr-a -]  l025 Calcium 97 mg/L  →  read 97 mg/L [86, 103]
    lrc-1-00237 [FR fr-b fr-b -]  l021 Calcium 91,0 mg/L  →  read 91 mg/L
    lrc-1-00393 [FR fr-b fr-b -]  l024 Calcium 91,0 mg/L  →  read 91 mg/L [86, 103]

**22× wrong | ldl-cholesterol | point uk-cum | unit mmol/L**
    lrc-1-00277 [UK uk-cum uk-cum -]  l019 LDL cholesterol 2.8 mmol/L  →  read 96.7 mg/dL [, 101]
    lrc-1-00536 [UK uk-cum uk-cum -]  l025 LDL cholesterol 5.1 mmol/L  →  read 217 mg/dL [, 101] H
    lrc-1-00559 [UK uk-cum uk-cum -]  l021 LDL cholesterol 1.6 mmol/L  →  read 38.7 mg/dL [, 101]

**22× miss | alt | "Transaminases ALAT"**
    lrc-1-00322 [FR fr-a fr-a -]  l028 Transaminases ALAT 70 U/L
    lrc-1-00581 [FR fr-a fr-a -]  l024 Transaminases ALAT 38,0 U/L
    lrc-1-00902 [FR fr-a fr-a -]  l030 Transaminases ALAT 21 U/L

**21× miss | uric-acid | "Uricémie"**
    lrc-1-00138 [FR fr-b fr-b -]  l021 Uricémie 54 mg/L
    lrc-1-00235 [FR fr-a fr-a -]  l021 Uricémie 62 mg/L
    lrc-1-00630 [FR fr-a fr-a -]  l019 Uricémie 69 mg/L

**21× wrong | urea | point uk-cum | unit mmol/L**
    lrc-1-00277 [UK uk-cum uk-cum -]  l003 Urea 7.6 mmol/L  →  read 8.3 mmol/L [2.5, 7.8] H
    lrc-1-00536 [UK uk-cum uk-cum -]  l004 Urea 5.4 mmol/L  →  read 5.2 mmol/L [2.5, 7.8]
    lrc-1-00559 [UK uk-cum uk-cum -]  l004 Urea 3.5 mmol/L  →  read 3.4 mmol/L [2.5, 7.8]

**21× wrong | total-cholesterol | point uk-cum | unit mmol/L**
    lrc-1-00277 [UK uk-cum uk-cum -]  l016 Total cholesterol 5.0 mmol/L  →  read 166 mg/dL [, 201]
    lrc-1-00536 [UK uk-cum uk-cum -]  l022 Cholesterol 7.1 mmol/L  →  read 303 mg/dL [, 5.2] H
    lrc-1-00559 [UK uk-cum uk-cum -]  l017 Total cholesterol 3.7 mmol/L  →  read 128 mg/dL [, 201]

**21× miss | alp | "Phosphatases alcalines"**
    lrc-1-00322 [FR fr-a fr-a -]  l030 Phosphatases alcalines 43 U/L
    lrc-1-00393 [FR fr-b fr-b -]  l032 Phosphatases alcalines 80 U/L
    lrc-1-01793 [FR fr-a fr-a -]  l032 Phosphatases alcalines 58 U/L

**20× miss | rdw-cv | "Ery-Verteilungsbreite"**
    lrc-1-00120 [DE de-cum de-cum -]  l008 Ery-Verteilungsbreite 12,6 %
    lrc-1-00480 [DE de-mono de-mono -]  l008 Ery-Verteilungsbreite 13,8 %
    lrc-1-00932 [DE de-mono de-mono -]  l008 Ery-Verteilungsbreite 12,3 (wdh.) %

**20× miss | creatinine-serum | "Créatininémie"**
    lrc-1-00138 [FR fr-b fr-b -]  l019 Créatininémie 6,8 mg/L
    lrc-1-00208 [FR fr-b fr-b -]  l003 Créatininémie 8,2 mg/L
    lrc-1-00581 [FR fr-a fr-a -]  l013 Créatininémie 7,4 mg/L

**20× range missed | FR undefined | lower only**
    lrc-1-00235 [FR fr-a fr-a -]  l037 HDL-cholestérol 0,70 g/L  →  read 0.7 g/L
    lrc-1-00322 [FR fr-a fr-a -]  l036 HDL-cholestérol 0,42 g/L  →  read 0.42 g/L
    lrc-1-00458 [FR fr-b fr-b -]  l019 HDL-cholestérol 0,60 g/L  →  read 0.6 g/L

**20× wrong | phosphorus-serum | point uk-cum | unit mmol/L**
    lrc-1-00277 [UK uk-cum uk-cum -]  l011 Phosphate 1.32 mmol/L  →  read 3.69 mg/dL [2.51, 4.49]
    lrc-1-00536 [UK uk-cum uk-cum -]  l012 Phosphate 0.84 mmol/L  →  read 2.51 mg/dL [2.51, 4.49]
    lrc-1-00559 [UK uk-cum uk-cum -]  l012 Phosphate 1.00 mmol/L  →  read 2.91 mg/dL [2.51, 4.49]

…and 226 smaller groups.
