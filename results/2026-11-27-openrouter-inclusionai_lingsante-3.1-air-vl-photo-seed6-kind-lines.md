# Lab-report reader stress test

43 generated reports, 820 rows with a known answer, seed 6, only kind=lines. Read in 668.0 s (15535.4 ms a report).

| Outcome | Rows | Share | 95% interval |
|---|---|---|---|
| ok | 637 | 77.7% | 74.71–80.40% |
| unit | 1 | 0.1% | 0.02–0.69% |
| unconverted | 3 | 0.4% | 0.12–1.07% |
| wrong | 3 | 0.4% | 0.12–1.07% |
| miss | 176 | 21.5% | 18.79–24.40% |

- **Critical values:** 8 of 9 caught (88.9%, interval 56.50–98.01%); 1 lost because the row was not read, 0 because it was misread. False critical alarms: 0.
- **Rows that are not on the report:** 1 (of 645 rows read).
- **Lab's flag:** ok 635, invented 6.
- **Reference range:** ok 588, missed 50, wrong 3.
- **Collection date:** ok 34, missed 9.
- **Wrong values printed in a unit that needs converting:** 3 of 3 (100.0%).
- **Format invariance** (5 printings of each set of results): of 193 markers, read right in every printing 34 (17.6%), right in some printings but not others 159 (82.4%), never right 0. Critical results caught in every printing: 1 of 2; caught in some printings only: 1.

## By locale
| locale | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| UK | 193 | 33.7% | 0.0% | 0.5% | 1.6% | 64.2% |
| RO | 176 | 80.7% | 0.0% | 0.0% | 0.0% | 19.3% |
| DE | 120 | 82.5% | 0.8% | 1.7% | 0.0% | 15.0% |
| US | 175 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ES | 156 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By kind
| kind | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| lines | 820 | 77.7% | 0.1% | 0.4% | 0.4% | 21.5% |

## By variant
| variant | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| twocol | 60 | 68.3% | 0.0% | 0.0% | 0.0% | 31.7% |
| glue | 76 | 75.0% | 1.3% | 0.0% | 0.0% | 23.7% |
| plain | 508 | 75.6% | 0.0% | 0.4% | 0.0% | 24.0% |
| colon | 85 | 78.8% | 0.0% | 0.0% | 1.2% | 20.0% |
| unitspace | 33 | 90.9% | 0.0% | 3.0% | 6.1% | 0.0% |
| wrap | 58 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By units
| units | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| SI | 230 | 35.7% | 0.0% | 1.3% | 1.3% | 61.7% |
| conventional | 590 | 94.1% | 0.2% | 0.0% | 0.0% | 5.8% |

## By decimal
| decimal | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| point | 458 | 64.8% | 0.0% | 0.2% | 0.7% | 34.3% |
| comma | 362 | 93.9% | 0.3% | 0.6% | 0.0% | 5.2% |

## By sep
| sep | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| wide | 545 | 77.2% | 0.2% | 0.4% | 0.0% | 22.2% |
| single | 210 | 78.1% | 0.0% | 0.5% | 1.0% | 20.5% |
| tab | 65 | 80.0% | 0.0% | 0.0% | 1.5% | 18.5% |

## By order
| order | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| VFUR | 481 | 71.7% | 0.2% | 0.4% | 0.0% | 27.7% |
| VURF | 215 | 78.1% | 0.0% | 0.5% | 1.4% | 20.0% |
| VFRU | 87 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| FVUR | 37 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By marker
| marker | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| rbc | 13 | 61.5% | 7.7% | 0.0% | 0.0% | 30.8% |
| vitamin-d-25-oh | 16 | 68.8% | 0.0% | 0.0% | 6.3% | 25.0% |
| folate-serum | 16 | 68.8% | 0.0% | 0.0% | 6.3% | 25.0% |
| wbc | 17 | 70.6% | 0.0% | 0.0% | 0.0% | 29.4% |
| mch | 17 | 70.6% | 0.0% | 0.0% | 0.0% | 29.4% |
| free-t4 | 34 | 70.6% | 0.0% | 5.9% | 0.0% | 23.5% |
| transferrin-saturation | 17 | 70.6% | 0.0% | 0.0% | 0.0% | 29.4% |
| mchc | 18 | 72.2% | 0.0% | 0.0% | 0.0% | 27.8% |
| free-t3 | 29 | 72.4% | 0.0% | 3.4% | 0.0% | 24.1% |
| testosterone-total | 11 | 72.7% | 0.0% | 0.0% | 0.0% | 27.3% |
| serum-iron | 22 | 72.7% | 0.0% | 0.0% | 4.5% | 22.7% |
| vitamin-b12 | 12 | 75.0% | 0.0% | 0.0% | 0.0% | 25.0% |
| tsh | 29 | 75.9% | 0.0% | 0.0% | 0.0% | 24.1% |
| phosphorus-serum | 22 | 77.3% | 0.0% | 0.0% | 0.0% | 22.7% |
| total-protein | 22 | 77.3% | 0.0% | 0.0% | 0.0% | 22.7% |
| egfr | 18 | 77.8% | 0.0% | 0.0% | 0.0% | 22.2% |
| hemoglobin | 18 | 77.8% | 0.0% | 0.0% | 0.0% | 22.2% |
| mcv | 18 | 77.8% | 0.0% | 0.0% | 0.0% | 22.2% |
| ferritin | 18 | 77.8% | 0.0% | 0.0% | 0.0% | 22.2% |
| magnesium-serum | 14 | 78.6% | 0.0% | 0.0% | 0.0% | 21.4% |
| alt | 14 | 78.6% | 0.0% | 0.0% | 0.0% | 21.4% |
| glucose-fasting | 25 | 80.0% | 0.0% | 0.0% | 0.0% | 20.0% |
| creatinine-serum | 20 | 80.0% | 0.0% | 0.0% | 0.0% | 20.0% |
| blood-urea-nitrogen | 25 | 80.0% | 0.0% | 0.0% | 0.0% | 20.0% |
| uric-acid | 20 | 80.0% | 0.0% | 0.0% | 0.0% | 20.0% |
| sodium-serum | 25 | 80.0% | 0.0% | 0.0% | 0.0% | 20.0% |
| potassium-serum | 25 | 80.0% | 0.0% | 0.0% | 0.0% | 20.0% |
| chloride-serum | 25 | 80.0% | 0.0% | 0.0% | 0.0% | 20.0% |
| calcium-total | 25 | 80.0% | 0.0% | 0.0% | 0.0% | 20.0% |
| albumin-serum | 20 | 80.0% | 0.0% | 0.0% | 0.0% | 20.0% |
| ldl-cholesterol | 25 | 80.0% | 0.0% | 0.0% | 0.0% | 20.0% |
| hdl-cholesterol | 26 | 80.8% | 0.0% | 0.0% | 0.0% | 19.2% |
| hba1c | 21 | 81.0% | 0.0% | 0.0% | 0.0% | 19.0% |
| hs-crp | 21 | 81.0% | 0.0% | 0.0% | 0.0% | 19.0% |
| ast | 17 | 82.4% | 0.0% | 0.0% | 0.0% | 17.6% |
| ggt | 17 | 82.4% | 0.0% | 0.0% | 0.0% | 17.6% |
| platelet-count | 18 | 83.3% | 0.0% | 0.0% | 0.0% | 16.7% |
| total-cholesterol | 26 | 84.6% | 0.0% | 0.0% | 0.0% | 15.4% |
| hematocrit | 14 | 85.7% | 0.0% | 0.0% | 0.0% | 14.3% |
| triglycerides | 14 | 85.7% | 0.0% | 0.0% | 0.0% | 14.3% |
| total-bilirubin | 8 | 87.5% | 0.0% | 0.0% | 0.0% | 12.5% |
| alp | 8 | 87.5% | 0.0% | 0.0% | 0.0% | 12.5% |

## What went wrong, most common first

**16× range missed | RO tight | two-sided**
    r6-4v0 [RO plain VFUR wide]  Leucocite                            4,4   mii/µL   4,0-11,0  →  read 4.4 thousand/uL
    r6-4v0 [RO plain VFUR wide]  Eritrocite                           5,36   *10^6/uL   4,20-5,90  →  read 5.36 million/uL
    r6-4v0 [RO plain VFUR wide]  Hemoglobina                          16,6   g/dL   12,0-17,5  →  read 16.6 g/dL

**16× range missed | RO paren | two-sided**
    r6-6v4 [RO wrap VFUR wide]  Glicemie                             67,00   L   mg/dL   (70,00 - 99,00)  →  read 67 mg/dL L
    r6-6v4 [RO wrap VFUR wide]  Hemoglobină glicozilată (HbA1c) ⏎         4,300   %   (4,000 - 5,600)  →  read 4.3 %
    r6-6v4 [RO wrap VFUR wide]  Creatinină serică ⏎         1,1200   mg/dl   (0,6000 - 1,3000)  →  read 1.12 mg/dL

**7× date missed | UK lines**
    r6-2v2  want 2026-01-04 read null
    r6-4v2  want 2026-09-01 read null
    r6-5v1  want 2026-11-07 read null

**6× miss | tsh | "TSH"**
    r6-0v4 [RO plain VFUR single]  TSH 1.85 mIU/L 0.40 - 4.00
    r6-2v2 [UK plain VURF wide]  TSH                                  1.220   mIU/L   (0.40 - 4.00)
    r6-4v2 [UK glue VFUR wide]  TSH                                  1.75mIU/L   0.40-4.00

**6× flag invented | none VURF**
    r6-2v0 [RO colon VURF wide]  Glicemie:                            54   mg/dl   (70 - 99)  →  read 54 mg/dL [70, 99] L
    r6-2v0 [RO colon VURF wide]  Rata de filtrare glomerulară estimată:   45   mL/min/1.73m2   >= 60  →  read 45 mL/min/1.73m2 [60, ] L
    r6-2v0 [RO colon VURF wide]  Clor seric:                          125   mmol/L   (98 - 107)  →  read 125 mmol/L [98, 107] H

**6× miss | free-t4 | "Free T4"**
    r6-2v2 [UK plain VURF wide]  Free T4                              11.7   pmol/L   (10.3 - 23.2)
    r6-4v2 [UK glue VFUR wide]  Free T4                              22.7pmol/L   10.3-23.2
    r6-6v0 [UK plain VFUR wide]  Free T4                              16.9   pmol/L   10.3 – 23.2

**6× miss | free-t3 | "Free T3"**
    r6-2v2 [UK plain VURF wide]  Free T3                              5.5   pmol/L   (3.5 - 6.5)
    r6-4v2 [UK glue VFUR wide]  Free T3                              4.0pmol/L   3.5-6.5
    r6-6v0 [UK plain VFUR wide]  Free T3                              2.8   pmol/L   3.5 – 6.5

**4× miss | egfr | "eGFR"**
    r6-0v4 [RO plain VFUR single]  eGFR 109 mL/min/1.73m2 > 60
    r6-2v2 [UK plain VURF wide]  eGFR                                 45   mL/min/1.73m2   > 60   LOW
    r6-6v0 [UK plain VFUR wide]  eGFR                                 104   mL/min/1.73m2   >60

**4× range missed | UK tight | two-sided**
    r6-1v2 [UK glue VFUR wide]  Sodium                               144mmol/L   135-145  →  read 144 mmol/L
    r6-1v2 [UK glue VFUR wide]  Potassium                            3.7mmol/L   3.5-5.1  →  read 3.7 mmol/L
    r6-1v2 [UK glue VFUR wide]  Chloride                             104mmol/L   98-107  →  read 104 mmol/L

**4× miss | blood-urea-nitrogen | "Blood urea nitrogen"**
    r6-2v2 [UK plain VURF wide]  Blood urea nitrogen                  23   mg/dL   (7 - 25)
    r6-5v1 [UK colon VURF wide]  Blood urea nitrogen:                 14   mg/dL   7 – 25
    r6-6v0 [UK plain VFUR wide]  Blood urea nitrogen                  20   mg/dL   7 – 25

**4× miss | sodium-serum | "Sodium"**
    r6-2v2 [UK plain VURF wide]  Sodium                               137   mmol/L   (135 - 145)
    r6-5v1 [UK colon VURF wide]  Sodium:                              142   mmol/L   135 – 145
    r6-6v0 [UK plain VFUR wide]  Sodium                               133   mmol/L   135 – 145

**4× miss | potassium-serum | "Potassium"**
    r6-2v2 [UK plain VURF wide]  Potassium                            4.8   mmol/L   (3.5 - 5.1)
    r6-5v1 [UK colon VURF wide]  Potassium:                           5.6   mmol/L   3.5 – 5.1
    r6-6v0 [UK plain VFUR wide]  Potassium                            3.9   mmol/L   3.5 – 5.1

**4× miss | chloride-serum | "Chloride"**
    r6-2v2 [UK plain VURF wide]  Chloride                             125   mmol/L   (98 - 107)   HIGH
    r6-5v1 [UK colon VURF wide]  Chloride:                            66   mmol/L   98 – 107
    r6-6v0 [UK plain VFUR wide]  Chloride                             105   mmol/L   98 – 107

**4× miss | calcium-total | "Calcium"**
    r6-2v2 [UK plain VURF wide]  Calcium                              2.20   mmol/L   (2.15 - 2.57)
    r6-5v1 [UK colon VURF wide]  Calcium:                             2.30   mmol/L   2.15 – 2.57
    r6-6v0 [UK plain VFUR wide]  Calcium                              2.20   mmol/L   2.15 – 2.57

**4× miss | phosphorus-serum | "Phosphate"**
    r6-2v2 [UK plain VURF wide]  Phosphate                            1.03   mmol/L   (0.81 - 1.45)
    r6-5v1 [UK colon VURF wide]  Phosphate:                           1.16   mmol/L   0.81 – 1.45
    r6-6v0 [UK plain VFUR wide]  Phosphate                            0.94   mmol/L   0.81 – 1.45

**4× miss | total-protein | "Total protein"**
    r6-2v2 [UK plain VURF wide]  Total protein                        66   g/L   (60 - 83)
    r6-5v1 [UK colon VURF wide]  Total protein:                       45   g/L   60 – 83
    r6-6v0 [UK plain VFUR wide]  Total protein                        65   g/L   60 – 83

**4× miss | mch | "MCH"**
    r6-2v2 [UK plain VURF wide]  MCH                                  32.2   pg   (27.0 - 33.0)
    r6-4v2 [UK glue VFUR wide]  MCH                                  24.2   *   pg   27.0-33.0
    r6-4v3 [DE plain VFUR wide]  MCH                                  24,2   pg   [27,0 - 33,0]

**4× miss | serum-iron | "Iron"**
    r6-2v2 [UK plain VURF wide]  Iron                                 19.9   µmol/L   (9.0 - 30.4)
    r6-4v2 [UK glue VFUR wide]  Iron                                 8.2   *   µmol/L   9.0-30.4
    r6-5v1 [UK colon VURF wide]  Iron:                                5.9   µmol/L   9.0 – 30.4

**4× miss | transferrin-saturation | "Transferrin saturation"**
    r6-2v2 [UK plain VURF wide]  Transferrin saturation               41   %   (20 - 50)
    r6-4v2 [UK glue VFUR wide]  Transferrin saturation               43%   20-50
    r6-5v1 [UK colon VURF wide]  Transferrin saturation:              48   %   20 – 50

**4× miss | ldl-cholesterol | "LDL cholesterol"**
    r6-4v2 [UK glue VFUR wide]  LDL cholesterol                      4.0   *   mmol/L   <= 2.6
    r6-5v1 [UK colon VURF wide]  LDL cholesterol:                     3.3   mmol/L   < 2.6
    r6-6v0 [UK plain VFUR wide]  LDL cholesterol                      2.2   mmol/L   < 2.6

**4× miss | hdl-cholesterol | "HDL cholesterol"**
    r6-4v2 [UK glue VFUR wide]  HDL cholesterol                      0.62   *   mmol/L   >= 1.03
    r6-6v0 [UK plain VFUR wide]  HDL cholesterol                      1.47   mmol/L   > 1.03
    r6-7v1 [UK plain VFUR single]  HDL cholesterol 1.629 mmol/L > 1.030

**4× range missed | RO paren | upper only**
    r6-6v4 [RO wrap VFUR wide]  Proteina C reactivă înalt sensibilă (hs-CRP) ⏎         2,100   mg/L   <3,000  →  read 2.1 mg/L
    r6-6v4 [RO wrap VFUR wide]  Colesterol total ⏎         118,00   mg/dL   < 200,00  →  read 118 mg/dL
    r6-6v4 [RO wrap VFUR wide]  Colesterol LDL ⏎         86,00   mg/dL   <= 100,00  →  read 86 mg/dL

**3× miss | glucose-fasting | "Fasting glucose"**
    r6-2v2 [UK plain VURF wide]  Fasting glucose                      3.0   mmol/L   (3.9 - 5.5)   LOW
    r6-5v1 [UK colon VURF wide]  Fasting glucose:                     26.9   mmol/L   3.9 – 5.5
    r6-9v2 [UK twocol VFUR wide]  Fasting glucose                      4.5   mmol/L   [3.9 - 5.5]

**3× miss | creatinine-serum | "Creatinine"**
    r6-2v2 [UK plain VURF wide]  Creatinine                           92   µmol/L   (53 - 115)
    r6-5v1 [UK colon VURF wide]  Creatinine:                          68   µmol/L   53 – 115
    r6-6v0 [UK plain VFUR wide]  Creatinine                           99   µmol/L   53 – 115

**3× miss | uric-acid | "Urate"**
    r6-2v2 [UK plain VURF wide]  Urate                                351   µmol/L   (149 - 416)
    r6-5v1 [UK colon VURF wide]  Urate:                               184   µmol/L   149 – 416
    r6-6v0 [UK plain VFUR wide]  Urate                                226   µmol/L   149 – 416

**3× miss | albumin-serum | "Albumin"**
    r6-2v2 [UK plain VURF wide]  Albumin                              26   g/L   (35 - 50)   LOW
    r6-5v1 [UK colon VURF wide]  Albumin:                             44   g/L   35 – 50
    r6-6v0 [UK plain VFUR wide]  Albumin                              59   g/L   35 – 50

**3× miss | mcv | "MCV"**
    r6-2v2 [UK plain VURF wide]  MCV                                  71.7   fL   (80.0 - 100.0)   LOW
    r6-4v2 [UK glue VFUR wide]  MCV                                  95.2fL   80.0-100.0
    r6-4v3 [DE plain VFUR wide]  MCV                                  95,2   fl   [80,0 - 100,0]

**3× miss | mchc | "MCHC"**
    r6-4v2 [UK glue VFUR wide]  MCHC                                 337g/L   320-360
    r6-4v3 [DE plain VFUR wide]  MCHC                                 337   g/l   [320 - 360]
    r6-8v2 [UK plain VFUR tab]  MCHC	329	g/L	[320 - 360]

**3× miss | ferritin | "Ferritin"**
    r6-4v2 [UK glue VFUR wide]  Ferritin                             28   *   µg/L   30-300
    r6-5v1 [UK colon VURF wide]  Ferritin:                            81   µg/L   30 – 300
    r6-7v1 [UK plain VFUR single]  Ferritin 440.0 µg/L (30.0 - 300.0)

**3× miss | total-cholesterol | "Total cholesterol"**
    r6-5v1 [UK colon VURF wide]  Total cholesterol:                   4.2   mmol/L   < 5.2
    r6-6v0 [UK plain VFUR wide]  Total cholesterol                    3.1   mmol/L   <= 5.2
    r6-9v2 [UK twocol VFUR wide]  Total cholesterol                    4.9   mmol/L   <= 5.2

**2× miss | hba1c | "HbA1c"**
    r6-0v4 [RO plain VFUR single]  HbA1c 4.5 % 4.0 - 5.6
    r6-6v0 [UK plain VFUR wide]  HbA1c                                23   mmol/mol   20 – 38

**2× miss | ggt | "GGT"**
    r6-0v4 [RO plain VFUR single]  GGT 30 U/L 8 - 61
    r6-7v1 [UK plain VFUR single]  GGT 21.0 U/L (8.0 - 61.0)

**2× miss | mchc | "CHEM"**
    r6-0v4 [RO plain VFUR single]  CHEM 33.7 g/dL 32.0 - 36.0
    r6-3v4 [RO plain VFUR wide]  CHEM                                 33,8   g/dL   (32,0 - 36,0)

**2× miss | hba1c | "HbA1c (IFCC)"**
    r6-2v2 [UK plain VURF wide]  HbA1c (IFCC)                         27   mmol/mol   (20 - 38)
    r6-9v2 [UK twocol VFUR wide]  HbA1c (IFCC)                         25   mmol/mol   [20 - 38]

**2× miss | wbc | "White cell count"**
    r6-2v2 [UK plain VURF wide]  White cell count                     9.1   x10^9/L   (4.0 - 11.0)
    r6-8v2 [UK plain VFUR tab]  White cell count	7.2	×10⁹/L	[4.0 - 11.0]

**2× miss | vitamin-d-25-oh | "25-OH Vitamin D"**
    r6-2v2 [UK plain VURF wide]  25-OH Vitamin D                      210   nmol/L   (75 - 250)
    r6-4v2 [UK glue VFUR wide]  25-OH Vitamin D                      42   *   nmol/L   75-250

**2× miss | testosterone-total | "Testosterone"**
    r6-2v2 [UK plain VURF wide]  Testosterone                         43.6   nmol/L   (9.2 - 31.8)   HIGH
    r6-4v2 [UK glue VFUR wide]  Testosterone                         24.3nmol/L   9.2-31.8

**2× miss | rbc | "RBC"**
    r6-4v2 [UK glue VFUR wide]  RBC                                  5.36   10*12/L   4.20-5.90
    r6-8v2 [UK plain VFUR tab]  RBC	4.80	×10¹²/L	[4.20 - 5.90]

**2× miss | hemoglobin | "Haemoglobin"**
    r6-4v2 [UK glue VFUR wide]  Haemoglobin                          166g/L   120-175
    r6-8v2 [UK plain VFUR tab]  Haemoglobin	160	g/L	[120 - 175]

**2× miss | hs-crp | "CRP (high sensitivity)"**
    r6-5v1 [UK colon VURF wide]  CRP (high sensitivity):              1.9   mg/L   <= 3.0
    r6-6v0 [UK plain VFUR wide]  CRP (high sensitivity)               2.1   mg/L   <= 3.0

**2× miss | magnesium-serum | "Magnesium"**
    r6-6v0 [UK plain VFUR wide]  Magnesium                            0.82   mmol/L   0.70 – 0.99
    r6-9v2 [UK twocol VFUR wide]  Magnesium                            0.53   LOW   mmol/L   [0.70 - 0.99]

**2× miss | triglycerides | "Triglycerides"**
    r6-6v0 [UK plain VFUR wide]  Triglycerides                        1.55   mmol/L   <= 1.69
    r6-9v2 [UK twocol VFUR wide]  Triglycerides                        1.51   mmol/L   <= 1.69

**2× range missed | RO paren | lower only**
    r6-6v4 [RO wrap VFUR wide]  eGFR                                 104,00   mL/min/1.73m2   >60,00  →  read 104 mL/min/1.73m2
    r6-6v4 [RO wrap VFUR wide]  Colesterol HDL ⏎         57,00   mg/dL   >= 40,00  →  read 57 mg/dL

**2× miss | alt | "ALT"**
    r6-7v1 [UK plain VFUR single]  ALT 5.0 U/L (7.0 - 56.0)
    r6-8v2 [UK plain VFUR tab]  ALT	5	U/L	[7 - 56]

**2× miss | ast | "AST"**
    r6-7v1 [UK plain VFUR single]  AST 35.0 U/L (10.0 - 40.0)
    r6-8v2 [UK plain VFUR tab]  AST	32	U/L	[10 - 40]

**1× range missed | UK tight | lower only**
    r6-0v0 [UK unitspace VURF single]  eGFR 109 mL / min/1.73m2 >= 60  →  read 109 mL/min/1.73m2

**1× unconverted | free-t4 | pmol/L**
    r6-0v0 [UK unitspace VURF single]  Free T4 18.5 pmol / L 10.3-23.2  →  read 18.5 pmol/L [10.3, 23.2]

**1× wrong | vitamin-d-25-oh | point unitspace | unit nmol/L**
    r6-0v0 [UK unitspace VURF single]  Vitamin D 172 nmol / L 75-250  →  read 43 ng/mL [30, 100]

**1× wrong | folate-serum | point unitspace | unit nmol/L**
    r6-0v0 [UK unitspace VURF single]  Serum folate 35.6 nmol / L 6.8-45.3  →  read 80.7 ng/mL [15.4, 102.7]

**1× range missed | DE bracket | lower only**
    r6-0v2 [DE glue VFUR wide]  EGFR (CKD-EPI)                       109,0mL/min/1.73m2   >60,0  →  read 109 mL/min/1.73m2

**1× range missed | DE bracket | upper only**
    r6-0v2 [DE glue VFUR wide]  HSCRP                                2,10mg/l   bis 3,00  →  read 2.1 mg/L

**1× unit | "/pl" read as "thousand/uL"**
    r6-0v2 [DE glue VFUR wide]  ERYTHROZYTEN                         5,280/pl   [4,200 - 5,900]  →  read 5.28 thousand/uL [4.2, 5.9]

**1× miss | glucose-fasting | "Glicemie"**
    r6-0v4 [RO plain VFUR single]  Glicemie 89 mg/dL 70 - 99

**1× miss | creatinine-serum | "Creatinina"**
    r6-0v4 [RO plain VFUR single]  Creatinina 1.01 mg/dL 0.60 - 1.30

**1× miss | blood-urea-nitrogen | "Azot ureic (BUN)"**
    r6-0v4 [RO plain VFUR single]  Azot ureic (BUN) 13 mg/dL 7 - 25

**1× miss | uric-acid | "Acid uric"**
    r6-0v4 [RO plain VFUR single]  Acid uric 4.9 mg/dl 2.5 - 7.0

**1× miss | sodium-serum | "Sodiu"**
    r6-0v4 [RO plain VFUR single]  Sodiu 139 mmol/l 135 - 145

**1× miss | potassium-serum | "Potasiu"**
    r6-0v4 [RO plain VFUR single]  Potasiu 4.7 mmol/L 3.5 - 5.1

**1× miss | chloride-serum | "Clor seric"**
    r6-0v4 [RO plain VFUR single]  Clor seric 103 mmol/l 98 - 107

**1× miss | calcium-total | "Calciu seric"**
    r6-0v4 [RO plain VFUR single]  Calciu seric 9.5 mg/dL 8.6 - 10.3

**1× miss | magnesium-serum | "Magneziu seric"**
    r6-0v4 [RO plain VFUR single]  Magneziu seric 3.6 mg/dL 1.7 - 2.4

**1× miss | phosphorus-serum | "Fosfor seric"**
    r6-0v4 [RO plain VFUR single]  Fosfor seric 1.4 mg/dl 2.5 - 4.5

**1× miss | total-protein | "Proteine totale serice"**
    r6-0v4 [RO plain VFUR single]  Proteine totale serice 5.2 g/dl 6.0 - 8.3

**1× miss | albumin-serum | "Albumina"**
    r6-0v4 [RO plain VFUR single]  Albumina 4.3 g/dL 3.5 - 5.0

**1× miss | hs-crp | "Proteina C reactivă înalt sensibilă (hs-CRP)"**
    r6-0v4 [RO plain VFUR single]  Proteina C reactivă înalt sensibilă (hs-CRP) 2.1 mg/L < 3.0

**1× miss | total-bilirubin | "Bilirubina totala"**
    r6-0v4 [RO plain VFUR single]  Bilirubina totala 0.5 mg/dL 0.2 - 1.2

**1× miss | alt | "ALT (TGP)"**
    r6-0v4 [RO plain VFUR single]  ALT (TGP) 41 U/L 7 - 56

**1× miss | ast | "AST (TGO)"**
    r6-0v4 [RO plain VFUR single]  AST (TGO) 21 U/L 10 - 40

**1× miss | alp | "Fosfatază alcalină"**
    r6-0v4 [RO plain VFUR single]  Fosfatază alcalină 81 U/l 44 - 147

**1× miss | wbc | "Leucocite"**
    r6-0v4 [RO plain VFUR single]  Leucocite 10.0 *10^3/uL 4.0 - 11.0

**1× miss | rbc | "Număr de eritrocite"**
    r6-0v4 [RO plain VFUR single]  Număr de eritrocite 5.28 mil./µL 4.20 - 5.90

**1× miss | hemoglobin | "Hemoglobină"**
    r6-0v4 [RO plain VFUR single]  Hemoglobină 14.8 g/dl 12.0 - 17.5

**1× miss | hematocrit | "Hematocrit"**
    r6-0v4 [RO plain VFUR single]  Hematocrit 36.7 % 36.0 - 50.0

**1× miss | mcv | "VEM"**
    r6-0v4 [RO plain VFUR single]  VEM 89.1 fL 80.0 - 100.0

**1× miss | mch | "Hemoglobină eritrocitară medie (HEM)"**
    r6-0v4 [RO plain VFUR single]  Hemoglobină eritrocitară medie (HEM) 44.0 pg 27.0 - 33.0

**1× miss | platelet-count | "Număr de trombocite"**
    r6-0v4 [RO plain VFUR single]  Număr de trombocite 507 mii/µL 150 - 400

**1× miss | free-t4 | "T4 liber"**
    r6-0v4 [RO plain VFUR single]  T4 liber 1.44 ng/dl 0.80 - 1.80

**1× miss | vitamin-d-25-oh | "25-OH-Vitamina D"**
    r6-0v4 [RO plain VFUR single]  25-OH-Vitamina D 69 ng/ml 30 - 100

**1× miss | vitamin-b12 | "Vitamina B12"**
    r6-0v4 [RO plain VFUR single]  Vitamina B12 175 pg/mL 200 - 900

**1× miss | folate-serum | "Acid folic"**
    r6-0v4 [RO plain VFUR single]  Acid folic 15.7 ng/mL 3.0 - 20.0

…and 41 smaller groups.
