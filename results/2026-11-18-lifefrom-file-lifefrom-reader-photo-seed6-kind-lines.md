# Lab-report reader stress test

43 generated reports, 820 rows with a known answer, seed 6, only kind=lines. Read in 50.9 s (1183.9 ms a report).

| Outcome | Rows | Share | 95% interval |
|---|---|---|---|
| ok | 667 | 81.3% | 78.53–83.86% |
| unit | 66 | 8.0% | 6.38–10.11% |
| unconverted | 0 | 0.0% | 0.00–0.47% |
| wrong | 5 | 0.6% | 0.26–1.42% |
| miss | 82 | 10.0% | 8.13–12.24% |

- **Critical values:** 9 of 9 caught (100.0%, interval 70.08–100.00%); 0 lost because the row was not read, 0 because it was misread. False critical alarms: 0.
- **Rows that are not on the report:** 3 (of 741 rows read).
- **Lab's flag:** ok 711, missed 21, invented 1.
- **Reference range:** ok 662, missed 61, wrong 10.
- **Collection date:** ok 34, missed 9.
- **Wrong values printed in a unit that needs converting:** 1 of 5 (20.0%).
- **Format invariance** (5 printings of each set of results): of 193 markers, read right in every printing 98 (50.8%), right in some printings but not others 95 (49.2%), never right 0. Critical results caught in every printing: 2 of 2.

## By locale
| locale | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| ES | 156 | 69.2% | 10.9% | 0.0% | 0.0% | 19.9% |
| RO | 176 | 76.7% | 10.2% | 0.0% | 0.0% | 13.1% |
| DE | 120 | 79.2% | 11.7% | 0.0% | 0.8% | 8.3% |
| UK | 193 | 86.5% | 5.7% | 0.0% | 1.0% | 6.7% |
| US | 175 | 92.6% | 3.4% | 0.0% | 1.1% | 2.9% |

## By kind
| kind | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| lines | 820 | 81.3% | 8.0% | 0.0% | 0.6% | 10.0% |

## By variant
| variant | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| twocol | 60 | 56.7% | 1.7% | 0.0% | 0.0% | 41.7% |
| wrap | 58 | 63.8% | 8.6% | 0.0% | 0.0% | 27.6% |
| colon | 85 | 74.1% | 16.5% | 0.0% | 1.2% | 8.2% |
| glue | 76 | 82.9% | 11.8% | 0.0% | 1.3% | 3.9% |
| plain | 508 | 86.2% | 7.1% | 0.0% | 0.6% | 6.1% |
| unitspace | 33 | 97.0% | 3.0% | 0.0% | 0.0% | 0.0% |

## By units
| units | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| conventional | 590 | 79.5% | 8.8% | 0.0% | 0.5% | 11.2% |
| SI | 230 | 86.1% | 6.1% | 0.0% | 0.9% | 7.0% |

## By decimal
| decimal | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| comma | 362 | 74.3% | 10.8% | 0.0% | 0.3% | 14.6% |
| point | 458 | 86.9% | 5.9% | 0.0% | 0.9% | 6.3% |

## By sep
| sep | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| single | 210 | 78.6% | 7.1% | 0.0% | 0.0% | 14.3% |
| wide | 545 | 82.0% | 8.1% | 0.0% | 0.7% | 9.2% |
| tab | 65 | 84.6% | 10.8% | 0.0% | 1.5% | 3.1% |

## By order
| order | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| FVUR | 37 | 73.0% | 13.5% | 0.0% | 0.0% | 13.5% |
| VURF | 215 | 78.1% | 9.3% | 0.0% | 0.5% | 12.1% |
| VFUR | 481 | 81.9% | 7.9% | 0.0% | 0.4% | 9.8% |
| VFRU | 87 | 89.7% | 3.4% | 0.0% | 2.3% | 4.6% |

## By marker
| marker | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| wbc | 17 | 41.2% | 52.9% | 0.0% | 0.0% | 5.9% |
| tsh | 29 | 48.3% | 51.7% | 0.0% | 0.0% | 0.0% |
| transferrin-saturation | 17 | 52.9% | 29.4% | 0.0% | 0.0% | 17.6% |
| rbc | 13 | 53.8% | 38.5% | 0.0% | 0.0% | 7.7% |
| platelet-count | 18 | 55.6% | 33.3% | 0.0% | 0.0% | 11.1% |
| mcv | 18 | 61.1% | 27.8% | 0.0% | 0.0% | 11.1% |
| alp | 8 | 62.5% | 12.5% | 0.0% | 0.0% | 25.0% |
| ferritin | 18 | 66.7% | 5.6% | 0.0% | 0.0% | 27.8% |
| ast | 17 | 70.6% | 5.9% | 0.0% | 5.9% | 17.6% |
| hba1c | 21 | 71.4% | 14.3% | 0.0% | 0.0% | 14.3% |
| hematocrit | 14 | 71.4% | 21.4% | 0.0% | 0.0% | 7.1% |
| triglycerides | 14 | 71.4% | 0.0% | 0.0% | 7.1% | 21.4% |
| egfr | 18 | 72.2% | 0.0% | 0.0% | 0.0% | 27.8% |
| albumin-serum | 20 | 75.0% | 0.0% | 0.0% | 0.0% | 25.0% |
| vitamin-d-25-oh | 16 | 75.0% | 0.0% | 0.0% | 0.0% | 25.0% |
| folate-serum | 16 | 75.0% | 0.0% | 0.0% | 6.3% | 18.8% |
| free-t3 | 29 | 75.9% | 0.0% | 0.0% | 0.0% | 24.1% |
| hs-crp | 21 | 76.2% | 0.0% | 0.0% | 0.0% | 23.8% |
| serum-iron | 22 | 77.3% | 22.7% | 0.0% | 0.0% | 0.0% |
| alt | 14 | 78.6% | 21.4% | 0.0% | 0.0% | 0.0% |
| total-protein | 22 | 81.8% | 0.0% | 0.0% | 4.5% | 13.6% |
| uric-acid | 20 | 85.0% | 0.0% | 0.0% | 0.0% | 15.0% |
| phosphorus-serum | 22 | 86.4% | 0.0% | 0.0% | 0.0% | 13.6% |
| total-bilirubin | 8 | 87.5% | 0.0% | 0.0% | 0.0% | 12.5% |
| ggt | 17 | 88.2% | 11.8% | 0.0% | 0.0% | 0.0% |
| mchc | 18 | 88.9% | 5.6% | 0.0% | 0.0% | 5.6% |
| testosterone-total | 11 | 90.9% | 0.0% | 0.0% | 0.0% | 9.1% |
| free-t4 | 34 | 91.2% | 0.0% | 0.0% | 0.0% | 8.8% |
| vitamin-b12 | 12 | 91.7% | 0.0% | 0.0% | 0.0% | 8.3% |
| blood-urea-nitrogen | 25 | 92.0% | 0.0% | 0.0% | 0.0% | 8.0% |
| ldl-cholesterol | 25 | 92.0% | 0.0% | 0.0% | 0.0% | 8.0% |
| hdl-cholesterol | 26 | 92.3% | 0.0% | 0.0% | 0.0% | 7.7% |
| mch | 17 | 94.1% | 0.0% | 0.0% | 0.0% | 5.9% |
| creatinine-serum | 20 | 95.0% | 0.0% | 0.0% | 0.0% | 5.0% |
| glucose-fasting | 25 | 96.0% | 0.0% | 0.0% | 0.0% | 4.0% |
| sodium-serum | 25 | 96.0% | 4.0% | 0.0% | 0.0% | 0.0% |
| potassium-serum | 25 | 96.0% | 0.0% | 0.0% | 0.0% | 4.0% |
| calcium-total | 25 | 96.0% | 0.0% | 0.0% | 0.0% | 4.0% |
| total-cholesterol | 26 | 96.2% | 0.0% | 0.0% | 3.8% | 0.0% |
| chloride-serum | 25 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| magnesium-serum | 14 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hemoglobin | 18 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## What went wrong, most common first

**15× flag missed | arrows VFUR**
    r6-0v2 [DE glue VFUR wide]  MAGNESIUM                            3,60   ↑   mg/dl   [1,70 - 2,40]  →  read 3.6 mg/dL [1.7, 2.4]
    r6-0v2 [DE glue VFUR wide]  PHOSPHAT                             1,40   ↓   mg/dl   [2,50 - 4,50]  →  read 1.4 mg/dL [2.5, 4.5]
    r6-0v2 [DE glue VFUR wide]  GESAMTPROTEIN                        5,20   ↓   g/dl   [6,00 - 8,30]  →  read 5.2 g/dL [6, 8.3]

**12× range missed | UK dash | two-sided**
    r6-5v1 [UK colon VURF wide]  Creatinine:                          68   µmol/L   53 – 115  →  read 0.77 mg/dL
    r6-5v1 [UK colon VURF wide]  Blood urea nitrogen:                 14   mg/dL   7 – 25  →  read 14 mg/dL
    r6-5v1 [UK colon VURF wide]  Sodium:                              142   mmol/L   135 – 145  →  read 142 mmol/L

**11× range missed | US spaced | two-sided**
    r6-0v1 [US plain VFUR single]  POTASSIUM 4.7 mEq/L 3.5 - 5.1  →  read 4.7 mEq/L
    r6-0v1 [US plain VFUR single]  Phosphorus 1.4 Low mg/dL 2.5 - 4.5  →  read 1.4 mg/dL L
    r6-0v1 [US plain VFUR single]  Bilirubin, Total 0.5 mg/dL 0.2 - 1.2  →  read 0.5 mg/dL

**11× unit | "%" not recognised**
    r6-0v1 [US plain VFUR single]  Hematocrit 36.7 % 36.0 - 50.0  →  read 36.7  [36, 50]
    r6-0v4 [RO plain VFUR single]  Hematocrit 36.7 % 36.0 - 50.0  →  read 36.7  [36, 50]
    r6-2v0 [RO colon VURF wide]  Hematocrit:                          46.9   %   (36.0 - 50.0)  →  read 46.9  [36, 50]

**10× range missed | RO paren | two-sided**
    r6-2v0 [RO colon VURF wide]  Creatinina:                          1.04   mg/dL   (0.60 - 1.30)  →  read 1.04 mg/dL
    r6-2v0 [RO colon VURF wide]  Azot ureic (BUN):                    23   mg/dl   (7 - 25)  →  read 23 mg/dL
    r6-2v0 [RO colon VURF wide]  Acid uric:                           5.9   mg/dl   (2.5 - 7.0)  →  read 5.9 mg/dL

**9× range missed | RO spaced | two-sided**
    r6-0v4 [RO plain VFUR single]  Azot ureic (BUN) 13 mg/dL 7 - 25  →  read 13 mg/dL
    r6-0v4 [RO plain VFUR single]  Acid uric 4.9 mg/dl 2.5 - 7.0  →  read 4.9 mg/dL
    r6-0v4 [RO plain VFUR single]  Potasiu 4.7 mmol/L 3.5 - 5.1  →  read 4.7 mmol/L

**8× date missed | ES lines**
    r6-0v3  want 2026-12-23 read null
    r6-2v4  want 2026-01-04 read null
    r6-3v3  want 2026-07-09 read null

**8× unit | "µUI/mL" not recognised**
    r6-1v0 [RO plain VURF single]  TSH 1,68 µUI/mL 0,40 - 4,00  →  read 1.68  [0.4, 4]
    r6-2v0 [RO colon VURF wide]  TSH:                                 1.22   µUI/mL   (0.40 - 4.00)  →  read 1.22  [0.4, 4]
    r6-2v4 [ES wrap VURF single]  TSH 1,220 µUI/mL (0,400 - 4,000)  →  read 1.22  [0.4, 4]

**8× range missed | UK paren | two-sided**
    r6-2v2 [UK plain VURF wide]  Fasting glucose                      3.0   mmol/L   (3.9 - 5.5)   LOW  →  read 54.1 mg/dL L
    r6-2v2 [UK plain VURF wide]  Blood urea nitrogen                  23   mg/dL   (7 - 25)  →  read 23 mg/dL
    r6-2v2 [UK plain VURF wide]  Potassium                            4.8   mmol/L   (3.5 - 5.1)  →  read 4.8 mmol/L

**5× unit | "U/l" not recognised**
    r6-0v2 [DE glue VFUR wide]  ALT (GPT)                            41,0U/l   [7,0 - 56,0]  →  read 41  [7, 56]
    r6-0v2 [DE glue VFUR wide]  AST (GOT)                            21,0U/l   [10,0 - 40,0]  →  read 21  [10, 40]
    r6-0v2 [DE glue VFUR wide]  AP                                   81,0U/l   [44,0 - 147,0]  →  read 81  [44, 147]

**5× flag missed | arrows VURF**
    r6-7v3 [ES twocol VURF single]  ALT (GPT) 5,00 U/L 7,00 - 56,00 ↓  →  read 5 U/L [10, 40]
    r6-9v0 [RO plain VURF wide]  Calciu seric                         6.2   mg/dl   8.6 - 10.3   ↓  →  read 6.2 mg/dL [8.6, 10.3]
    r6-9v0 [RO plain VURF wide]  Magneziu seric                       1.3   mg/dL   1.7 - 2.4   ↓  →  read 1.3 mg/dL [1.7, 2.4]

**4× unit | "10^3/µL" read as "/pl"**
    r6-0v3 [ES plain VFUR wide]  Leucocitos                           10,0   10^3/µL   4,0 – 11,0  →  read 10 /pl [4, 11]
    r6-2v4 [ES wrap VURF single]  Plaquetas 271,0 10^3/µL (150,0 - 400,0)  →  read 271 /pl [150, 400]
    r6-3v4 [RO plain VFUR wide]  Trombocite                           1225   H   10^3/µL   (150 - 400)  →  read 1225 /pl [150, 400] H

**3× unit | "µU/ml" not recognised**
    r6-0v2 [DE glue VFUR wide]  TSH                                  1,850µU/ml   [0,400 - 4,000]  →  read 1.85  [0.4, 4]
    r6-4v3 [DE plain VFUR wide]  TSH BASAL                            1,750   µU/ml   [0,40 - 4,00]  →  read 1.75  [0.4, 4]
    r6-8v3 [DE plain VFUR wide]  TSH basal                            2,86   µU/ml   (0,40 - 4,00)  →  read 2.86  [0.4, 4]

**3× miss | folate-serum | "Ácido fólico"**
    r6-0v3 [ES plain VFUR wide]  Ácido fólico                         15,7   ng/mL   3,0 – 20,0
    r6-2v4 [ES wrap VURF single]  Ácido fólico 12,70 ng/mL (3,00 - 20,00)
    r6-4v4 [ES plain FVUR single]  Ácido fólico * 2,2 ng/mL 3,0-20,0

**3× miss | hs-crp | "Proteina C reactivă înalt sensibilă (hs-CRP)"**
    r6-0v4 [RO plain VFUR single]  Proteina C reactivă înalt sensibilă (hs-CRP) 2.1 mg/L < 3.0
    r6-6v4 [RO wrap VFUR wide]  Proteina C reactivă înalt sensibilă (hs-CRP) ⏎         2,100   mg/L   <3,000
    r6-9v0 [RO plain VURF wide]  Proteina C reactivă înalt sensibilă (hs-CRP)   2.8   mg/l   < 3.0

**3× not on the report | protein-c | read from "Proteina C"**
    r6-0v4 [RO plain]  Proteina C = 2.1 mg/L
    r6-6v4 [RO wrap]  Proteina C = 2.1 mg/L
    r6-9v0 [RO plain]  Proteina C = 2.8 mg/L

**3× miss | vitamin-d-25-oh | "25-OH Vitamin D"**
    r6-1v2 [UK glue VFUR wide]  25-OH Vitamin D                      217nmol/L   75-250
    r6-2v2 [UK plain VURF wide]  25-OH Vitamin D                      210   nmol/L   (75 - 250)
    r6-4v2 [UK glue VFUR wide]  25-OH Vitamin D                      42   *   nmol/L   75-250

**3× unit | "x10^9/L" not recognised**
    r6-2v2 [UK plain VURF wide]  White cell count                     9.1   x10^9/L   (4.0 - 11.0)  →  read 9.1  [4, 11]
    r6-2v2 [UK plain VURF wide]  Platelet count                       271   x10^9/L   (150 - 400)  →  read 271  [150, 400]
    r6-4v2 [UK glue VFUR wide]  WBC                                  4.4x10^9/L   4.0-11.0  →  read 4.4  [4, 11]

**3× range missed | UK bracket | two-sided**
    r6-8v2 [UK plain VFUR tab]  Gamma GT	44	U/L	[8 - 61]  →  read 44 U/L
    r6-8v2 [UK plain VFUR tab]  Free T4	20.2	pmol/L	[10.3 - 23.2]  →  read 1.57 ng/dL
    r6-8v2 [UK plain VFUR tab]  Free T3	4.6	pmol/L	[3.5 - 6.5]  →  read 2.99 pg/mL

**2× range missed | UK tight | two-sided**
    r6-0v0 [UK unitspace VURF single]  Free T4 18.5 pmol / L 10.3-23.2  →  read 1.44 ng/dL
    r6-1v2 [UK glue VFUR wide]  Potassium                            3.7mmol/L   3.5-5.1  →  read 3.7 mmol/L

**2× miss | egfr | "eGFR"**
    r6-0v1 [US plain VFUR single]  eGFR 109 mL/min/1.73m2 >60
    r6-9v2 [UK twocol VFUR wide]  eGFR                                 86   mL/min/1.73m2   >= 60

**2× unit | "uIU/mL" not recognised**
    r6-0v1 [US plain VFUR single]  TSH 1.850 uIU/mL 0.40 - 4.00  →  read 1.85  [0.4, 4]
    r6-9v1 [US plain VFUR wide]  TSH                                  3.130   uIU/mL   0.400-4.000  →  read 3.13  [0.4, 4]

**2× unit | "fl" not recognised**
    r6-0v2 [DE glue VFUR wide]  MCV                                  89,10fl   [80,00 - 100,00]  →  read 89.1  [80, 100]
    r6-4v0 [RO plain VFUR wide]  Volum eritrocitar mediu (VEM)        95,2   fl   80,0-100,0  →  read 95.2  [80, 100]

**2× miss | blood-urea-nitrogen | "Nitrógeno ureico (BUN)"**
    r6-0v3 [ES plain VFUR wide]  Nitrógeno ureico (BUN)               13   mg/dL   7 – 25
    r6-2v4 [ES wrap VURF single]  Nitrógeno ureico (BUN) ⏎         23,0 mg/dL (7,0 - 25,0)

**2× miss | uric-acid | "Ácido úrico"**
    r6-0v3 [ES plain VFUR wide]  Ácido úrico                          4,9   mg/dL   2,5 – 7,0
    r6-2v4 [ES wrap VURF single]  Ácido úrico 5,90 mg/dL (2,50 - 7,00)

**2× miss | phosphorus-serum | "Fósforo"**
    r6-0v3 [ES plain VFUR wide]  Fósforo                              1,4   mg/dL   2,5 – 4,5
    r6-2v4 [ES wrap VURF single]  Fósforo 3,20 mg/dL (2,50 - 4,50)

**2× miss | albumin-serum | "Albúmina"**
    r6-0v3 [ES plain VFUR wide]  Albúmina                             4,3   g/dL   3,5 – 5,0
    r6-2v4 [ES wrap VURF single]  Albúmina 2,60 g/dL (3,50 - 5,00)

**2× unit | "U/L" not recognised**
    r6-0v3 [ES plain VFUR wide]  ALT (GPT)                            41   U/L   7 – 56  →  read 41 
    r6-0v3 [ES plain VFUR wide]  GGT                                  30   U/L   8 – 61  →  read 30  [8, 61]

**2× range missed | ES dash | two-sided**
    r6-0v3 [ES plain VFUR wide]  ALT (GPT)                            41   U/L   7 – 56  →  read 41 
    r6-9v4 [ES colon FVUR wide]  POTASIO:                             3,9   mmol/L   3,5 – 5,1  →  read 3.9 mmol/L

**2× miss | mcv | "VCM"**
    r6-0v3 [ES plain VFUR wide]  VCM                                  89,1   fL   80,0 – 100,0
    r6-3v3 [ES plain VFUR wide]  VCM                                  99,90   fL   (80,00 - 100,00)

**2× miss | alp | "Fosfatază alcalină"**
    r6-0v4 [RO plain VFUR single]  Fosfatază alcalină 81 U/l 44 - 147
    r6-1v0 [RO plain VURF single]  Fosfatază alcalină 108 U/l 44 - 147

**2× miss | platelet-count | "Număr de trombocite"**
    r6-0v4 [RO plain VFUR single]  Număr de trombocite 507 mii/µL 150 - 400
    r6-2v0 [RO colon VURF wide]  Număr de trombocite:                 271   mii/µL   (150 - 400)

**2× miss | hba1c | "Hemoglobină glicozilată (HbA1c)"**
    r6-2v0 [RO colon VURF wide]  Hemoglobină glicozilată (HbA1c):     4.6   %   (4.0 - 5.6)
    r6-6v4 [RO wrap VFUR wide]  Hemoglobină glicozilată (HbA1c) ⏎         4,300   %   (4,000 - 5,600)

**2× miss | egfr | "Rata de filtrare glomerulară estimată"**
    r6-2v0 [RO colon VURF wide]  Rata de filtrare glomerulară estimată:   45   mL/min/1.73m2   >= 60
    r6-9v0 [RO plain VURF wide]  Rata de filtrare glomerulară estimată   86   mL/min/1.73m2   >= 60

**2× unit | "mcg/dL" not recognised**
    r6-2v1 [US plain VFRU wide]  Iron                                 111   50 - 170 mcg/dL  →  read 111 
    r6-5v0 [US plain VFRU wide]  Iron                                 33 L   50 - 170 mcg/dL  →  read 33  [50, 170] L

**2× range wrong | UK paren | two-sided**
    r6-2v2 [UK plain VURF wide]  HbA1c (IFCC)                         27   mmol/mol   (20 - 38)  →  read 4.62 % [3.98, 5.17]
    r6-2v2 [UK plain VURF wide]  Iron                                 19.9   µmol/L   (9.0 - 30.4)  →  read 111 mcg/dL [16.8, 170]

**2× unit | "fL" not recognised**
    r6-2v4 [ES wrap VURF single]  VCM 71,70 fL (80,00 - 100,00)  →  read 71.7  [80, 100]
    r6-3v1 [UK colon VURF tab]  MCV:	99.9	fL	(80.0 - 100.0)  →  read 99.9  [80, 100]

**2× miss | ferritin | "FERRITIN"**
    r6-3v2 [DE twocol VFUR single]  FERRITIN 412 ↑ ng/ml 30-300
    r6-7v0 [US twocol VFRU wide]  FERRITIN                             440   30 - 300 ng/mL

**2× unit | "mii/µL" not recognised**
    r6-4v0 [RO plain VFUR wide]  Leucocite                            4,4   mii/µL   4,0-11,0  →  read 4.4  [4, 11]
    r6-8v4 [RO colon VURF wide]  LEUCOCITE:                           7.20   mii/µL   [4.00 - 11.00]  →  read 7.2  [4, 11]

**2× miss | albumin-serum | "ALBÚMINA"**
    r6-5v3 [ES plain VFUR tab]  ALBÚMINA	4,40	g/dL	3,50-5,00
    r6-6v3 [ES plain VFUR wide]  ALBÚMINA                             5,90   g/dL   [3,50 - 5,00]

**2× miss | free-t3 | "fT3"**
    r6-7v2 [DE wrap VURF wide]  fT3                                  3,0   pg/ml   (2,3 - 4,2)
    r6-9v3 [DE plain VFUR wide]  fT3                                  6,9   *   pmol/l   3,5-6,5

**2× miss | free-t3 | "T3 LIBRE"**
    r6-7v3 [ES twocol VURF single]  T3 LIBRE 3,000 pg/mL 2,300 - 4,200
    r6-9v4 [ES colon FVUR wide]  T3 LIBRE:                            * 4,5   pg/mL   2,3 – 4,2

**2× unit | "mIU/l" not recognised**
    r6-8v4 [RO colon VURF wide]  TSH:                                 2.860   mIU/l   [0.400 - 4.000]  →  read 2.86  [0.4, 4]
    r6-9v3 [DE plain VFUR wide]  TSH basal                            3,130   mIU/l   0,40-4,00  →  read 3.13  [0.4, 4]

**1× unit | "x10^12/L" not recognised**
    r6-0v0 [UK unitspace VURF single]  RBC 5.28 x10^12 / L 4.20-5.90  →  read 5.28  [4.2, 5.9]

**1× range wrong | DE bracket | upper only**
    r6-0v2 [DE glue VFUR wide]  HSCRP                                2,10mg/l   bis 3,00  →  read 2.1 mg/L [1, 3]

**1× unit | "Tsd/µl" not recognised**
    r6-0v2 [DE glue VFUR wide]  LEUKOZYTEN                           10,00Tsd/µl   [4,00 - 11,00]  →  read 10  [4, 11]

**1× unit | "g/dl" not recognised**
    r6-0v2 [DE glue VFUR wide]  MCHC                                 33,70g/dl   [32,00 - 36,00]  →  read 33.7  [32, 36]

**1× range wrong | ES dash | two-sided**
    r6-0v3 [ES plain VFUR wide]  HbA1c                                4,5   %   4,0 – 5,6  →  read 4.5 % [4, 5.8]

**1× miss | free-t4 | "T4 libre"**
    r6-0v3 [ES plain VFUR wide]  T4 libre                             1,44   ng/dL   0,80 – 1,80

**1× unit | "*10^3/uL" read as "/uL"**
    r6-0v4 [RO plain VFUR single]  Leucocite 10.0 *10^3/uL 4.0 - 11.0  →  read 10 /uL

**1× miss | rbc | "Număr de eritrocite"**
    r6-0v4 [RO plain VFUR single]  Număr de eritrocite 5.28 mil./µL 4.20 - 5.90

**1× miss | mch | "Hemoglobină eritrocitară medie (HEM)"**
    r6-0v4 [RO plain VFUR single]  Hemoglobină eritrocitară medie (HEM) 44.0 pg 27.0 - 33.0

**1× miss | glucose-fasting | "Glucoză serică"**
    r6-1v0 [RO plain VURF single]  Glucoză serică 97 mg/dL 70 - 99

**1× miss | vitamin-b12 | "Vitamina B12"**
    r6-1v0 [RO plain VURF single]  Vitamina B12 851 pg/ml 200 - 900

**1× miss | total-bilirubin | "Bilirubin"**
    r6-1v2 [UK glue VFUR wide]  Bilirubin                            7µmol/L   3-21

**1× wrong | ast | point glue | unit U/L**
    r6-1v2 [UK glue VFUR wide]  AST                                  6   L   U/L   10-40  →  read 3 U/L [10, 40] L

**1× miss | wbc | "Număr de leucocite"**
    r6-2v0 [RO colon VURF wide]  Număr de leucocite:                  9.1   mii/µL   (4.0 - 11.0)

**1× unit | "µg/dL" read as "ng/dL"**
    r6-2v0 [RO colon VURF wide]  Sideremie:                           111   µg/dL   (50 - 170)  →  read 111 ng/dL

**1× wrong | folate-serum | point plain | unit ng/mL**
    r6-2v1 [US plain VFRU wide]  FOLATE, SERUM                        12.7   3.0 - 20.0 ng/mL  →  read 27 ng/mL [3, 20]

**1× miss | egfr | "Filtrado glomerular estimado (CKD-EPI)"**
    r6-2v4 [ES wrap VURF single]  Filtrado glomerular estimado (CKD-EPI) ⏎         45,0 mL/min/1.73m2 >60,0

**1× miss | total-protein | "Proteínas totales"**
    r6-2v4 [ES wrap VURF single]  Proteínas totales ⏎         6,60 g/dL (6,00 - 8,30)

**1× miss | transferrin-saturation | "Saturación de transferrina"**
    r6-2v4 [ES wrap VURF single]  Saturación de transferrina ⏎         41,0 % (20,0 - 50,0)

**1× miss | vitamin-d-25-oh | "25-OH Vitamina D"**
    r6-2v4 [ES wrap VURF single]  25-OH Vitamina D ⏎         84,0 ng/mL (30,0 - 100,0)

**1× miss | testosterone-total | "Testosterona total"**
    r6-2v4 [ES wrap VURF single]  Testosterona total ⏎         1256,0 ng/dL (264,0 - 916,0)

**1× range wrong | US spaced | two-sided**
    r6-3v0 [US plain VFUR single]  IRON, TOTAL 67 mcg/dL 50 - 170  →  read 67 mcg/dL [30, 170]

**1× wrong | total-cholesterol | point colon | unit mmol/L**
    r6-3v1 [UK colon VURF tab]  CHOLESTEROL:	3.3	mmol/L	<= 5.2  →  read 201 mg/dL

**1× unit | "10*9/L" not recognised**
    r6-3v1 [UK colon VURF tab]  PLATELETS:	1225	10*9/L	(150 - 400)	*  →  read 1225  [150, 400] H

**1× unit | "µg/L" read as "ng/L"**
    r6-3v1 [UK colon VURF tab]  FERRITIN:	412	µg/L	(30 - 300)	*  →  read 412 ng/L [30, 300]

**1× miss | ldl-cholesterol | "LDL-CHOLESTERIN"**
    r6-3v2 [DE twocol VFUR single]  LDL-CHOLESTERIN 77 mg/dl < 100

**1× range wrong | DE tight | lower only**
    r6-3v2 [DE twocol VFUR single]  HDL-CHOLESTERIN 74 mg/dl >40  →  read 74 mg/dL [, 150]

**1× miss | triglycerides | "TRIGLYCERIDE"**
    r6-3v2 [DE twocol VFUR single]  TRIGLYCERIDE 128 mg/dl bis 150

**1× miss | hematocrit | "HÄMATOKRIT"**
    r6-3v2 [DE twocol VFUR single]  HÄMATOKRIT 48,3 % 36,0-50,0

**1× unit | "fl" read as "g/dL"**
    r6-3v2 [DE twocol VFUR single]  MCV 99,9 fl 80,0-100,0  →  read 99.9 g/dL [80, 100]

**1× miss | mchc | "MCHC"**
    r6-3v2 [DE twocol VFUR single]  MCHC 33,8 g/dl 32,0-36,0

**1× unit | "x10^3/µL" read as "/uL"**
    r6-3v3 [ES plain VFUR wide]  Plaquetas                            1225,0   *   x10^3/µL   (150,0 - 400,0)  →  read 1225 /uL [150, 400]

**1× range missed | ES paren | two-sided**
    r6-3v3 [ES plain VFUR wide]  Hierro                               67,0   µg/dL   (50,0 - 170,0)  →  read 67 µg/dL

**1× miss | ferritin | "Feritină"**
    r6-3v4 [RO plain VFUR wide]  Feritină                             412   H   ng/ml   (30 - 300)

**1× unit | "*10^6/uL" read as "/uL"**
    r6-4v0 [RO plain VFUR wide]  Eritrocite                           5,36   *10^6/uL   4,20-5,90  →  read 5.36 /uL [4.2, 5.9]

**1× unit | "µg/dl" not recognised**
    r6-4v0 [RO plain VFUR wide]  Sideremie                            46   L   µg/dl   50-170  →  read 46  [50, 170] L

**1× miss | free-t3 | "FT3"**
    r6-4v0 [RO plain VFUR wide]  FT3                                  2,6   pg/ml   2,3-4,2

…and 46 smaller groups.
