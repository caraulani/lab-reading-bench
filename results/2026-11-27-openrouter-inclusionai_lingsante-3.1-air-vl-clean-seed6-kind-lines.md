# Lab-report reader stress test

43 generated reports, 820 rows with a known answer, seed 6, only kind=lines. Read in 317.4 s (7381.7 ms a report).

| Outcome | Rows | Share | 95% interval |
|---|---|---|---|
| ok | 696 | 84.9% | 82.26–87.17% |
| unit | 0 | 0.0% | 0.00–0.47% |
| unconverted | 7 | 0.9% | 0.41–1.75% |
| wrong | 4 | 0.5% | 0.19–1.25% |
| miss | 113 | 13.8% | 11.59–16.31% |

- **Critical values:** 9 of 9 caught (100.0%, interval 70.08–100.00%); 0 lost because the row was not read, 0 because it was misread. False critical alarms: 0.
- **Rows that are not on the report:** 0 (of 707 rows read).
- **Lab's flag:** ok 689, invented 14.
- **Reference range:** ok 669, missed 31, wrong 3.
- **Collection date:** ok 37, missed 6.
- **Wrong values printed in a unit that needs converting:** 2 of 4 (50.0%).
- **Format invariance** (5 printings of each set of results): of 193 markers, read right in every printing 92 (47.7%), right in some printings but not others 101 (52.3%), never right 0. Critical results caught in every printing: 2 of 2.

## By locale
| locale | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| UK | 193 | 47.7% | 0.0% | 2.1% | 1.0% | 49.2% |
| DE | 120 | 82.5% | 0.0% | 2.5% | 0.0% | 15.0% |
| ES | 156 | 98.7% | 0.0% | 0.0% | 1.3% | 0.0% |
| US | 175 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| RO | 176 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By kind
| kind | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| lines | 820 | 84.9% | 0.0% | 0.9% | 0.5% | 13.8% |

## By variant
| variant | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| twocol | 60 | 68.3% | 0.0% | 0.0% | 0.0% | 31.7% |
| glue | 76 | 75.0% | 0.0% | 0.0% | 1.3% | 23.7% |
| plain | 508 | 84.1% | 0.0% | 0.6% | 0.4% | 15.0% |
| colon | 85 | 95.3% | 0.0% | 4.7% | 0.0% | 0.0% |
| unitspace | 33 | 97.0% | 0.0% | 0.0% | 3.0% | 0.0% |
| wrap | 58 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By units
| units | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| SI | 230 | 47.0% | 0.0% | 3.0% | 0.9% | 49.1% |
| conventional | 590 | 99.7% | 0.0% | 0.0% | 0.3% | 0.0% |

## By decimal
| decimal | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| point | 458 | 77.9% | 0.0% | 0.9% | 0.4% | 20.7% |
| comma | 362 | 93.6% | 0.0% | 0.8% | 0.6% | 5.0% |

## By sep
| sep | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| wide | 545 | 80.0% | 0.0% | 0.6% | 0.6% | 18.9% |
| tab | 65 | 93.8% | 0.0% | 6.2% | 0.0% | 0.0% |
| single | 210 | 94.8% | 0.0% | 0.0% | 0.5% | 4.8% |

## By order
| order | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| VFUR | 481 | 80.7% | 0.0% | 0.6% | 0.6% | 18.1% |
| VURF | 215 | 85.6% | 0.0% | 1.9% | 0.5% | 12.1% |
| VFRU | 87 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| FVUR | 37 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By marker
| marker | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| testosterone-total | 11 | 72.7% | 0.0% | 0.0% | 0.0% | 27.3% |
| hdl-cholesterol | 26 | 73.1% | 0.0% | 3.8% | 3.8% | 19.2% |
| vitamin-d-25-oh | 16 | 75.0% | 0.0% | 0.0% | 6.3% | 18.8% |
| free-t3 | 29 | 75.9% | 0.0% | 0.0% | 3.4% | 20.7% |
| ldl-cholesterol | 25 | 76.0% | 0.0% | 4.0% | 4.0% | 16.0% |
| transferrin-saturation | 17 | 76.5% | 0.0% | 0.0% | 0.0% | 23.5% |
| magnesium-serum | 14 | 78.6% | 0.0% | 7.1% | 0.0% | 14.3% |
| triglycerides | 14 | 78.6% | 0.0% | 7.1% | 0.0% | 14.3% |
| folate-serum | 16 | 81.3% | 0.0% | 0.0% | 0.0% | 18.8% |
| phosphorus-serum | 22 | 81.8% | 0.0% | 4.5% | 0.0% | 13.6% |
| serum-iron | 22 | 81.8% | 0.0% | 0.0% | 0.0% | 18.2% |
| wbc | 17 | 82.4% | 0.0% | 0.0% | 0.0% | 17.6% |
| mch | 17 | 82.4% | 0.0% | 0.0% | 0.0% | 17.6% |
| free-t4 | 34 | 82.4% | 0.0% | 0.0% | 0.0% | 17.6% |
| tsh | 29 | 82.8% | 0.0% | 0.0% | 0.0% | 17.2% |
| egfr | 18 | 83.3% | 0.0% | 0.0% | 0.0% | 16.7% |
| mcv | 18 | 83.3% | 0.0% | 0.0% | 0.0% | 16.7% |
| vitamin-b12 | 12 | 83.3% | 0.0% | 0.0% | 0.0% | 16.7% |
| ferritin | 18 | 83.3% | 0.0% | 0.0% | 0.0% | 16.7% |
| calcium-total | 25 | 84.0% | 0.0% | 4.0% | 0.0% | 12.0% |
| rbc | 13 | 84.6% | 0.0% | 0.0% | 0.0% | 15.4% |
| total-cholesterol | 26 | 84.6% | 0.0% | 3.8% | 0.0% | 11.5% |
| hba1c | 21 | 85.7% | 0.0% | 0.0% | 0.0% | 14.3% |
| total-protein | 22 | 86.4% | 0.0% | 0.0% | 0.0% | 13.6% |
| glucose-fasting | 25 | 88.0% | 0.0% | 0.0% | 0.0% | 12.0% |
| blood-urea-nitrogen | 25 | 88.0% | 0.0% | 0.0% | 0.0% | 12.0% |
| sodium-serum | 25 | 88.0% | 0.0% | 0.0% | 0.0% | 12.0% |
| potassium-serum | 25 | 88.0% | 0.0% | 0.0% | 0.0% | 12.0% |
| chloride-serum | 25 | 88.0% | 0.0% | 0.0% | 0.0% | 12.0% |
| hemoglobin | 18 | 88.9% | 0.0% | 0.0% | 0.0% | 11.1% |
| mchc | 18 | 88.9% | 0.0% | 0.0% | 0.0% | 11.1% |
| creatinine-serum | 20 | 90.0% | 0.0% | 0.0% | 0.0% | 10.0% |
| uric-acid | 20 | 90.0% | 0.0% | 0.0% | 0.0% | 10.0% |
| albumin-serum | 20 | 90.0% | 0.0% | 0.0% | 0.0% | 10.0% |
| hs-crp | 21 | 90.5% | 0.0% | 0.0% | 0.0% | 9.5% |
| alt | 14 | 92.9% | 0.0% | 0.0% | 0.0% | 7.1% |
| hematocrit | 14 | 92.9% | 0.0% | 0.0% | 0.0% | 7.1% |
| ast | 17 | 94.1% | 0.0% | 0.0% | 0.0% | 5.9% |
| ggt | 17 | 94.1% | 0.0% | 0.0% | 0.0% | 5.9% |
| platelet-count | 18 | 94.4% | 0.0% | 0.0% | 0.0% | 5.6% |
| total-bilirubin | 8 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| alp | 8 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## What went wrong, most common first

**8× flag invented | none VFUR**
    r6-0v4 [RO plain VFUR single]  Magneziu seric 3.6 mg/dL 1.7 - 2.4  →  read 3.6 mg/dL [1.7, 2.4] H
    r6-0v4 [RO plain VFUR single]  Fosfor seric 1.4 mg/dl 2.5 - 4.5  →  read 1.4 mg/dL [2.5, 4.5] L
    r6-0v4 [RO plain VFUR single]  Proteine totale serice 5.2 g/dl 6.0 - 8.3  →  read 5.2 g/dL [6, 8.3] L

**6× flag invented | none VURF**
    r6-2v0 [RO colon VURF wide]  Glicemie:                            54   mg/dl   (70 - 99)  →  read 54 mg/dL [70, 99] L
    r6-2v0 [RO colon VURF wide]  Rata de filtrare glomerulară estimată:   45   mL/min/1.73m2   >= 60  →  read 45 mL/min/1.73m2 [, 60] L
    r6-2v0 [RO colon VURF wide]  Clor seric:                          125   mmol/L   (98 - 107)  →  read 125 mmol/L [98, 107] H

**5× miss | free-t4 | "Free T4"**
    r6-2v2 [UK plain VURF wide]  Free T4                              11.7   pmol/L   (10.3 - 23.2)
    r6-4v2 [UK glue VFUR wide]  Free T4                              22.7pmol/L   10.3-23.2
    r6-6v0 [UK plain VFUR wide]  Free T4                              16.9   pmol/L   10.3 – 23.2

**5× miss | free-t3 | "Free T3"**
    r6-2v2 [UK plain VURF wide]  Free T3                              5.5   pmol/L   (3.5 - 6.5)
    r6-4v2 [UK glue VFUR wide]  Free T3                              4.0pmol/L   3.5-6.5
    r6-6v0 [UK plain VFUR wide]  Free T3                              2.8   pmol/L   3.5 – 6.5

**5× date missed | UK lines**
    r6-2v2  want 2026-01-04 read null
    r6-4v2  want 2026-09-01 read null
    r6-6v0  want 2026-09-24 read null

**4× miss | tsh | "TSH"**
    r6-2v2 [UK plain VURF wide]  TSH                                  1.220   mIU/L   (0.40 - 4.00)
    r6-4v2 [UK glue VFUR wide]  TSH                                  1.75mIU/L   0.40-4.00
    r6-6v0 [UK plain VFUR wide]  TSH                                  1.210   mIU/L   0.40 – 4.00

**4× miss | hdl-cholesterol | "HDL cholesterol"**
    r6-4v2 [UK glue VFUR wide]  HDL cholesterol                      0.62   *   mmol/L   >= 1.03
    r6-6v0 [UK plain VFUR wide]  HDL cholesterol                      1.47   mmol/L   > 1.03
    r6-7v1 [UK plain VFUR single]  HDL cholesterol 1.629 mmol/L > 1.030

**4× range missed | RO paren | upper only**
    r6-6v4 [RO wrap VFUR wide]  Proteina C reactivă înalt sensibilă (hs-CRP) ⏎         2,100   mg/L   <3,000  →  read 2.1 mg/L
    r6-6v4 [RO wrap VFUR wide]  Colesterol total ⏎         118,00   mg/dL   < 200,00  →  read 118 mg/dL
    r6-6v4 [RO wrap VFUR wide]  Colesterol LDL ⏎         86,00   mg/dL   <= 100,00  →  read 86 mg/dL

**4× range missed | RO spaced | upper only**
    r6-9v0 [RO plain VURF wide]  Proteina C reactivă înalt sensibilă (hs-CRP)   2.8   mg/l   < 3.0  →  read 2.8 mg/L
    r6-9v0 [RO plain VURF wide]  Colesterol total                     189   mg/dl   <200  →  read 189 mg/dL
    r6-9v0 [RO plain VURF wide]  Colesterol LDL                       94   mg/dL   <100  →  read 94 mg/dL

**4× range missed | ES dash | upper only**
    r6-9v4 [ES colon FVUR wide]  PROTEÍNA C REACTIVA ULTRASENSIBLE:   2,8   mg/L   < 3,0  →  read 2.8 mg/L
    r6-9v4 [ES colon FVUR wide]  COLESTEROL TOTAL:                    189   mg/dL   < 200  →  read 189 mg/dL
    r6-9v4 [ES colon FVUR wide]  COLESTEROL LDL:                      94   mg/dL   < 100  →  read 94 mg/dL

**3× range missed | RO spaced | lower only**
    r6-0v4 [RO plain VFUR single]  eGFR 109 mL/min/1.73m2 > 60  →  read 109 mL/min/1.73m2
    r6-9v0 [RO plain VURF wide]  Rata de filtrare glomerulară estimată   86   mL/min/1.73m2   >= 60  →  read 86 mL/min/1.73m2
    r6-9v0 [RO plain VURF wide]  Colesterol HDL                       22   mg/dl   > 40   ↓  →  read 22 mg/dL L

**3× range missed | US spaced | upper only**
    r6-1v1 [US plain VFUR tab]  HS CRP	2.1	mg/L	<3.0  →  read 2.1 mg/L
    r6-6v1 [US plain VFRU wide]  CHOLESTEROL, TOTAL                   118   <200 mg/dL  →  read 118 mg/dL
    r6-6v1 [US plain VFRU wide]  LDL CHOL CALC (NIH)                  86   < OR = 100 mg/dL  →  read 86 mg/dL

**3× miss | blood-urea-nitrogen | "Blood urea nitrogen"**
    r6-2v2 [UK plain VURF wide]  Blood urea nitrogen                  23   mg/dL   (7 - 25)
    r6-6v0 [UK plain VFUR wide]  Blood urea nitrogen                  20   mg/dL   7 – 25
    r6-9v2 [UK twocol VFUR wide]  Blood urea nitrogen                  20   mg/dL   [7 - 25]

**3× miss | egfr | "eGFR"**
    r6-2v2 [UK plain VURF wide]  eGFR                                 45   mL/min/1.73m2   > 60   LOW
    r6-6v0 [UK plain VFUR wide]  eGFR                                 104   mL/min/1.73m2   >60
    r6-9v2 [UK twocol VFUR wide]  eGFR                                 86   mL/min/1.73m2   >= 60

**3× miss | sodium-serum | "Sodium"**
    r6-2v2 [UK plain VURF wide]  Sodium                               137   mmol/L   (135 - 145)
    r6-6v0 [UK plain VFUR wide]  Sodium                               133   mmol/L   135 – 145
    r6-9v2 [UK twocol VFUR wide]  Sodium                               139   mmol/L   [135 - 145]

**3× miss | potassium-serum | "Potassium"**
    r6-2v2 [UK plain VURF wide]  Potassium                            4.8   mmol/L   (3.5 - 5.1)
    r6-6v0 [UK plain VFUR wide]  Potassium                            3.9   mmol/L   3.5 – 5.1
    r6-9v2 [UK twocol VFUR wide]  Potassium                            3.9   mmol/L   [3.5 - 5.1]

**3× miss | chloride-serum | "Chloride"**
    r6-2v2 [UK plain VURF wide]  Chloride                             125   mmol/L   (98 - 107)   HIGH
    r6-6v0 [UK plain VFUR wide]  Chloride                             105   mmol/L   98 – 107
    r6-9v2 [UK twocol VFUR wide]  Chloride                             105   mmol/L   [98 - 107]

**3× miss | calcium-total | "Calcium"**
    r6-2v2 [UK plain VURF wide]  Calcium                              2.20   mmol/L   (2.15 - 2.57)
    r6-6v0 [UK plain VFUR wide]  Calcium                              2.20   mmol/L   2.15 – 2.57
    r6-9v2 [UK twocol VFUR wide]  Calcium                              1.55   LOW   mmol/L   [2.15 - 2.57]

**3× miss | phosphorus-serum | "Phosphate"**
    r6-2v2 [UK plain VURF wide]  Phosphate                            1.03   mmol/L   (0.81 - 1.45)
    r6-6v0 [UK plain VFUR wide]  Phosphate                            0.94   mmol/L   0.81 – 1.45
    r6-9v2 [UK twocol VFUR wide]  Phosphate                            0.97   mmol/L   [0.81 - 1.45]

**3× miss | total-protein | "Total protein"**
    r6-2v2 [UK plain VURF wide]  Total protein                        66   g/L   (60 - 83)
    r6-6v0 [UK plain VFUR wide]  Total protein                        65   g/L   60 – 83
    r6-9v2 [UK twocol VFUR wide]  Total protein                        81   g/L   [60 - 83]

**3× miss | mcv | "MCV"**
    r6-2v2 [UK plain VURF wide]  MCV                                  71.7   fL   (80.0 - 100.0)   LOW
    r6-4v2 [UK glue VFUR wide]  MCV                                  95.2fL   80.0-100.0
    r6-4v3 [DE plain VFUR wide]  MCV                                  95,2   fl   [80,0 - 100,0]

**3× miss | mch | "MCH"**
    r6-2v2 [UK plain VURF wide]  MCH                                  32.2   pg   (27.0 - 33.0)
    r6-4v2 [UK glue VFUR wide]  MCH                                  24.2   *   pg   27.0-33.0
    r6-4v3 [DE plain VFUR wide]  MCH                                  24,2   pg   [27,0 - 33,0]

**3× miss | serum-iron | "Iron"**
    r6-2v2 [UK plain VURF wide]  Iron                                 19.9   µmol/L   (9.0 - 30.4)
    r6-4v2 [UK glue VFUR wide]  Iron                                 8.2   *   µmol/L   9.0-30.4
    r6-7v1 [UK plain VFUR single]  Iron 17.54 µmol/L (9.00 - 30.40)

**3× miss | transferrin-saturation | "Transferrin saturation"**
    r6-2v2 [UK plain VURF wide]  Transferrin saturation               41   %   (20 - 50)
    r6-4v2 [UK glue VFUR wide]  Transferrin saturation               43%   20-50
    r6-7v1 [UK plain VFUR single]  Transferrin saturation 39.0 % (20.0 - 50.0)

**3× miss | ldl-cholesterol | "LDL cholesterol"**
    r6-4v2 [UK glue VFUR wide]  LDL cholesterol                      4.0   *   mmol/L   <= 2.6
    r6-6v0 [UK plain VFUR wide]  LDL cholesterol                      2.2   mmol/L   < 2.6
    r6-9v2 [UK twocol VFUR wide]  LDL cholesterol                      2.4   mmol/L   < 2.6

**3× range missed | US spaced | lower only**
    r6-6v1 [US plain VFRU wide]  EGFR                                 104   > OR = 60 mL/min/1.73m2  →  read 104 mL/min/1.73m2
    r6-6v1 [US plain VFRU wide]  HDL CHOLESTEROL                      57   > OR = 40 mg/dL  →  read 57 mg/dL
    r6-7v0 [US twocol VFRU wide]  HDL CHOLESTEROL                      63   > OR = 40 mg/dL  →  read 63 mg/dL

**2× miss | glucose-fasting | "Fasting glucose"**
    r6-2v2 [UK plain VURF wide]  Fasting glucose                      3.0   mmol/L   (3.9 - 5.5)   LOW
    r6-9v2 [UK twocol VFUR wide]  Fasting glucose                      4.5   mmol/L   [3.9 - 5.5]

**2× miss | hba1c | "HbA1c (IFCC)"**
    r6-2v2 [UK plain VURF wide]  HbA1c (IFCC)                         27   mmol/mol   (20 - 38)
    r6-9v2 [UK twocol VFUR wide]  HbA1c (IFCC)                         25   mmol/mol   [20 - 38]

**2× miss | creatinine-serum | "Creatinine"**
    r6-2v2 [UK plain VURF wide]  Creatinine                           92   µmol/L   (53 - 115)
    r6-6v0 [UK plain VFUR wide]  Creatinine                           99   µmol/L   53 – 115

**2× miss | uric-acid | "Urate"**
    r6-2v2 [UK plain VURF wide]  Urate                                351   µmol/L   (149 - 416)
    r6-6v0 [UK plain VFUR wide]  Urate                                226   µmol/L   149 – 416

**2× miss | albumin-serum | "Albumin"**
    r6-2v2 [UK plain VURF wide]  Albumin                              26   g/L   (35 - 50)   LOW
    r6-6v0 [UK plain VFUR wide]  Albumin                              59   g/L   35 – 50

**2× miss | vitamin-d-25-oh | "25-OH Vitamin D"**
    r6-2v2 [UK plain VURF wide]  25-OH Vitamin D                      210   nmol/L   (75 - 250)
    r6-4v2 [UK glue VFUR wide]  25-OH Vitamin D                      42   *   nmol/L   75-250

**2× miss | testosterone-total | "Testosterone"**
    r6-2v2 [UK plain VURF wide]  Testosterone                         43.6   nmol/L   (9.2 - 31.8)   HIGH
    r6-4v2 [UK glue VFUR wide]  Testosterone                         24.3nmol/L   9.2-31.8

**2× range missed | ES paren | upper only**
    r6-3v3 [ES plain VFUR wide]  Colesterol total                     126,0   mg/dL   < 200,0  →  read 126 mg/dL
    r6-3v3 [ES plain VFUR wide]  Triglicéridos                        128,0   mg/dL   Hasta 150,0  →  read 128 mg/dL

**2× miss | mchc | "MCHC"**
    r6-4v2 [UK glue VFUR wide]  MCHC                                 337g/L   320-360
    r6-4v3 [DE plain VFUR wide]  MCHC                                 337   g/l   [320 - 360]

**2× miss | ferritin | "Ferritin"**
    r6-4v2 [UK glue VFUR wide]  Ferritin                             28   *   µg/L   30-300
    r6-7v1 [UK plain VFUR single]  Ferritin 440.0 µg/L (30.0 - 300.0)

**2× miss | magnesium-serum | "Magnesium"**
    r6-6v0 [UK plain VFUR wide]  Magnesium                            0.82   mmol/L   0.70 – 0.99
    r6-9v2 [UK twocol VFUR wide]  Magnesium                            0.53   LOW   mmol/L   [0.70 - 0.99]

**2× miss | total-cholesterol | "Total cholesterol"**
    r6-6v0 [UK plain VFUR wide]  Total cholesterol                    3.1   mmol/L   <= 5.2
    r6-9v2 [UK twocol VFUR wide]  Total cholesterol                    4.9   mmol/L   <= 5.2

**2× miss | triglycerides | "Triglycerides"**
    r6-6v0 [UK plain VFUR wide]  Triglycerides                        1.55   mmol/L   <= 1.69
    r6-9v2 [UK twocol VFUR wide]  Triglycerides                        1.51   mmol/L   <= 1.69

**2× range missed | RO paren | lower only**
    r6-6v4 [RO wrap VFUR wide]  eGFR                                 104,00   mL/min/1.73m2   >60,00  →  read 104 mL/min/1.73m2
    r6-6v4 [RO wrap VFUR wide]  Colesterol HDL ⏎         57,00   mg/dL   >= 40,00  →  read 57 mg/dL

**2× range missed | ES dash | lower only**
    r6-9v4 [ES colon FVUR wide]  FILTRADO GLOMERULAR ESTIMADO (CKD-EPI):   86   mL/min/1.73m2   > 60  →  read 86 mL/min/1.73m2
    r6-9v4 [ES colon FVUR wide]  COLESTEROL HDL:                      * 22   mg/dL   >40  →  read 22 mg/dL L

**1× range missed | UK tight | lower only**
    r6-0v0 [UK unitspace VURF single]  eGFR 109 mL / min/1.73m2 >= 60  →  read 109 mL/min/1.73m2

**1× wrong | vitamin-d-25-oh | point unitspace | unit nmol/L**
    r6-0v0 [UK unitspace VURF single]  Vitamin D 172 nmol / L 75-250  →  read 66.2 ng/mL [28.85, 96.16]

**1× wrong | free-t3 | point glue | unit pmol/L**
    r6-1v2 [UK glue VFUR wide]  Free T3                              4.0pmol/L   3.5-6.5  →  read 2.69 pg/mL [2.36, 4.37]

**1× range wrong | RO paren | lower only**
    r6-2v0 [RO colon VURF wide]  Rata de filtrare glomerulară estimată:   45   mL/min/1.73m2   >= 60  →  read 45 mL/min/1.73m2 [, 60] L

**1× range wrong | US spaced | lower only**
    r6-2v1 [US plain VFRU wide]  EGFR                                 45 Low   > OR = 60 mL/min/1.73m2  →  read 45 mL/min/1.73m2 [, 60] L

**1× miss | wbc | "White cell count"**
    r6-2v2 [UK plain VURF wide]  White cell count                     9.1   x10^9/L   (4.0 - 11.0)

**1× miss | hematocrit | "Haematocrit"**
    r6-2v2 [UK plain VURF wide]  Haematocrit                          0.47   L/L   (0.36 - 0.50)

**1× miss | platelet-count | "Platelet count"**
    r6-2v2 [UK plain VURF wide]  Platelet count                       271   x10^9/L   (150 - 400)

**1× miss | folate-serum | "Folate"**
    r6-2v2 [UK plain VURF wide]  Folate                               28.8   nmol/L   (6.8 - 45.3)

**1× range wrong | ES paren | lower only**
    r6-2v4 [ES wrap VURF single]  Filtrado glomerular estimado (CKD-EPI) ⏎         45,0 mL/min/1.73m2 >60,0  →  read 45 mL/min/1.73m2 [, 60]

**1× unconverted | total-cholesterol | mmol/L**
    r6-3v1 [UK colon VURF tab]  CHOLESTEROL:	3.3	mmol/L	<= 5.2  →  read 3.3 mmol/L [, 5.2]

**1× unconverted | ldl-cholesterol | mmol/L**
    r6-3v1 [UK colon VURF tab]  LDL CHOLESTEROL:	2.0	mmol/L	< 2.6  →  read 2 mmol/L [, 2.6]

**1× unconverted | hdl-cholesterol | mmol/L**
    r6-3v1 [UK colon VURF tab]  HDL CHOLESTEROL:	1.91	mmol/L	>1.03  →  read 1.91 mmol/L [1.03, ]

**1× unconverted | triglycerides | mmol/L**
    r6-3v1 [UK colon VURF tab]  TRIGLYCERIDES:	1.45	mmol/L	<= 1.69  →  read 1.45 mmol/L [, 1.69]

**1× wrong | ldl-cholesterol | comma plain | unit mg/dL**
    r6-3v3 [ES plain VFUR wide]  Colesterol LDL                       77,0   mg/dL   <100,0  →  read 74 mg/dL

**1× wrong | hdl-cholesterol | comma plain | unit mg/dL**
    r6-3v3 [ES plain VFUR wide]  Colesterol HDL                       74,0   mg/dL   > 40,0  →  read 77 mg/dL

**1× miss | wbc | "WBC"**
    r6-4v2 [UK glue VFUR wide]  WBC                                  4.4x10^9/L   4.0-11.0

**1× miss | rbc | "RBC"**
    r6-4v2 [UK glue VFUR wide]  RBC                                  5.36   10*12/L   4.20-5.90

**1× miss | hemoglobin | "Haemoglobin"**
    r6-4v2 [UK glue VFUR wide]  Haemoglobin                          166g/L   120-175

**1× miss | vitamin-b12 | "Vitamin B12"**
    r6-4v2 [UK glue VFUR wide]  Vitamin B12                          371pmol/L   148-664

**1× miss | folate-serum | "Serum folate"**
    r6-4v2 [UK glue VFUR wide]  Serum folate                         5.0   *   nmol/L   6.8-45.3

**1× miss | ldl-cholesterol | "LDL-CHOLESTERIN"**
    r6-4v3 [DE plain VFUR wide]  LDL-CHOLESTERIN                      4,0   mmol/l   bis 2,6

**1× miss | hdl-cholesterol | "HDL-CHOLESTERIN"**
    r6-4v3 [DE plain VFUR wide]  HDL-CHOLESTERIN                      0,62   mmol/l   >= 1,03

**1× miss | wbc | "LEUKOZYTEN"**
    r6-4v3 [DE plain VFUR wide]  LEUKOZYTEN                           4,4   /nl   [4,0 - 11,0]

**1× miss | rbc | "ERYTHROZYTEN"**
    r6-4v3 [DE plain VFUR wide]  ERYTHROZYTEN                         5,36   /pl   [4,20 - 5,90]

**1× miss | hemoglobin | "HÄMOGLOBIN"**
    r6-4v3 [DE plain VFUR wide]  HÄMOGLOBIN                           166   g/l   [120 - 175]

**1× miss | serum-iron | "EISEN"**
    r6-4v3 [DE plain VFUR wide]  EISEN                                8,2   µmol/l   [9,0 - 30,4]

**1× miss | ferritin | "FERRITIN"**
    r6-4v3 [DE plain VFUR wide]  FERRITIN                             28   µg/l   [30 - 300]

**1× miss | transferrin-saturation | "TRANSFERRINSÄTTIGUNG"**
    r6-4v3 [DE plain VFUR wide]  TRANSFERRINSÄTTIGUNG                 43   %   [20 - 50]

**1× miss | tsh | "TSH BASAL"**
    r6-4v3 [DE plain VFUR wide]  TSH BASAL                            1,750   µU/ml   [0,40 - 4,00]

**1× miss | free-t4 | "FREIES T4"**
    r6-4v3 [DE plain VFUR wide]  FREIES T4                            22,7   pmol/l   [10,3 - 23,2]

**1× miss | free-t3 | "FREIES T3"**
    r6-4v3 [DE plain VFUR wide]  FREIES T3                            4,0   pmol/l   [3,5 - 6,5]

**1× miss | vitamin-d-25-oh | "25-OH-VITAMIN D"**
    r6-4v3 [DE plain VFUR wide]  25-OH-VITAMIN D                      42   nmol/l   [75 - 250]

**1× miss | vitamin-b12 | "VITAMIN B12"**
    r6-4v3 [DE plain VFUR wide]  VITAMIN B12                          371   pmol/l   [148 - 664]

**1× miss | folate-serum | "FOLSÄURE"**
    r6-4v3 [DE plain VFUR wide]  FOLSÄURE                             5,0   nmol/l   [6,8 - 45,3]

**1× miss | testosterone-total | "TESTOSTERON"**
    r6-4v3 [DE plain VFUR wide]  TESTOSTERON                          24,3   nmol/l   [9,2 - 31,8]

**1× date missed | DE lines**
    r6-4v3  want 2026-09-01 read null

**1× miss | glucose-fasting | "Glucose"**
    r6-6v0 [UK plain VFUR wide]  Glucose                              3.7   mmol/L   3.9 – 5.5

**1× miss | hba1c | "HbA1c"**
    r6-6v0 [UK plain VFUR wide]  HbA1c                                23   mmol/mol   20 – 38

…and 12 smaller groups.
