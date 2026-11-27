# Lab-report reader stress test

97 generated reports, 1792 rows with a known answer, seed 5, only kind=lines. Read in 763.3 s (7869.6 ms a report).

| Outcome | Rows | Share | 95% interval |
|---|---|---|---|
| ok | 1380 | 77.0% | 75.00–78.90% |
| unit | 2 | 0.1% | 0.03–0.41% |
| unconverted | 1 | 0.056% | 0.01–0.32% |
| wrong | 2 | 0.1% | 0.03–0.41% |
| miss | 407 | 22.7% | 20.83–24.71% |

- **Critical values:** 18 of 31 caught (58.1%, interval 40.77–73.58%); 13 lost because the row was not read, 0 because it was misread. False critical alarms: 0.
- **Rows that are not on the report:** 1 (of 1386 rows read).
- **Lab's flag:** ok 1350, invented 32, missed 1.
- **Reference range:** ok 1196, missed 181, wrong 6.
- **Collection date:** ok 80, missed 17.
- **Wrong values printed in a unit that needs converting:** 1 of 2 (50.0%).
- **Format invariance** (5 printings of each set of results): of 438 markers, read right in every printing 116 (26.5%), right in some printings but not others 322 (73.5%), never right 0. Critical results caught in every printing: 1 of 8; caught in some printings only: 7.

## By locale
| locale | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| UK | 312 | 30.4% | 0.0% | 0.3% | 0.3% | 68.9% |
| DE | 380 | 73.7% | 0.0% | 0.0% | 0.0% | 26.3% |
| ES | 370 | 90.5% | 0.3% | 0.0% | 0.0% | 9.2% |
| RO | 338 | 91.7% | 0.3% | 0.0% | 0.0% | 8.0% |
| US | 392 | 91.8% | 0.0% | 0.0% | 0.3% | 7.9% |

## By kind
| kind | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| lines | 1792 | 77.0% | 0.1% | 0.056% | 0.1% | 22.7% |

## By variant
| variant | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| leaders | 88 | 43.2% | 0.0% | 0.0% | 0.0% | 56.8% |
| plain | 1131 | 72.1% | 0.0% | 0.0% | 0.088% | 27.9% |
| glue | 117 | 84.6% | 0.9% | 0.0% | 0.0% | 14.5% |
| twocol | 191 | 85.9% | 0.0% | 0.5% | 0.5% | 13.1% |
| unitspace | 176 | 99.4% | 0.6% | 0.0% | 0.0% | 0.0% |
| colon | 34 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| wrap | 55 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By units
| units | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| SI | 438 | 27.6% | 0.0% | 0.2% | 0.2% | 71.9% |
| conventional | 1354 | 93.0% | 0.1% | 0.0% | 0.074% | 6.8% |

## By decimal
| decimal | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| point | 818 | 69.4% | 0.1% | 0.1% | 0.2% | 30.1% |
| comma | 974 | 83.4% | 0.1% | 0.0% | 0.0% | 16.5% |

## By sep
| sep | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| tab | 180 | 57.2% | 0.0% | 0.0% | 0.0% | 42.8% |
| wide | 1133 | 78.6% | 0.088% | 0.088% | 0.2% | 21.1% |
| single | 479 | 80.8% | 0.2% | 0.0% | 0.0% | 19.0% |

## By order
| order | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| FVUR | 79 | 57.0% | 0.0% | 0.0% | 0.0% | 43.0% |
| VURF | 476 | 71.2% | 0.2% | 0.2% | 0.2% | 28.2% |
| VFUR | 1030 | 79.6% | 0.097% | 0.0% | 0.097% | 20.2% |
| VFRU | 207 | 85.0% | 0.0% | 0.0% | 0.0% | 15.0% |

## By marker
| marker | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| creatinine-serum | 31 | 67.7% | 0.0% | 0.0% | 0.0% | 32.3% |
| potassium-serum | 38 | 68.4% | 0.0% | 0.0% | 0.0% | 31.6% |
| glucose-fasting | 43 | 69.8% | 0.0% | 0.0% | 0.0% | 30.2% |
| chloride-serum | 34 | 70.6% | 0.0% | 0.0% | 0.0% | 29.4% |
| rbc | 51 | 70.6% | 3.9% | 0.0% | 2.0% | 23.5% |
| magnesium-serum | 41 | 70.7% | 0.0% | 0.0% | 0.0% | 29.3% |
| hs-crp | 41 | 70.7% | 0.0% | 0.0% | 0.0% | 29.3% |
| phosphorus-serum | 38 | 71.1% | 0.0% | 0.0% | 0.0% | 28.9% |
| hba1c | 46 | 71.7% | 0.0% | 0.0% | 0.0% | 28.3% |
| sodium-serum | 46 | 71.7% | 0.0% | 0.0% | 0.0% | 28.3% |
| egfr | 43 | 72.1% | 0.0% | 0.0% | 0.0% | 27.9% |
| calcium-total | 33 | 72.7% | 0.0% | 0.0% | 0.0% | 27.3% |
| serum-iron | 19 | 73.7% | 0.0% | 0.0% | 0.0% | 26.3% |
| total-protein | 38 | 73.7% | 0.0% | 0.0% | 0.0% | 26.3% |
| mch | 42 | 73.8% | 0.0% | 0.0% | 0.0% | 26.2% |
| blood-urea-nitrogen | 42 | 73.8% | 0.0% | 0.0% | 0.0% | 26.2% |
| wbc | 46 | 73.9% | 0.0% | 0.0% | 0.0% | 26.1% |
| albumin-serum | 31 | 74.2% | 0.0% | 0.0% | 0.0% | 25.8% |
| platelet-count | 47 | 74.5% | 0.0% | 0.0% | 0.0% | 25.5% |
| free-t3 | 44 | 75.0% | 0.0% | 0.0% | 2.3% | 22.7% |
| uric-acid | 36 | 75.0% | 0.0% | 0.0% | 0.0% | 25.0% |
| free-t4 | 36 | 75.0% | 0.0% | 2.8% | 0.0% | 22.2% |
| tsh | 39 | 76.9% | 0.0% | 0.0% | 0.0% | 23.1% |
| mcv | 48 | 77.1% | 0.0% | 0.0% | 0.0% | 22.9% |
| mchc | 48 | 77.1% | 0.0% | 0.0% | 0.0% | 22.9% |
| ldl-cholesterol | 41 | 78.0% | 0.0% | 0.0% | 0.0% | 22.0% |
| triglycerides | 43 | 79.1% | 0.0% | 0.0% | 0.0% | 20.9% |
| ferritin | 24 | 79.2% | 0.0% | 0.0% | 0.0% | 20.8% |
| transferrin-saturation | 24 | 79.2% | 0.0% | 0.0% | 0.0% | 20.8% |
| hemoglobin | 58 | 79.3% | 0.0% | 0.0% | 0.0% | 20.7% |
| testosterone-total | 50 | 80.0% | 0.0% | 0.0% | 0.0% | 20.0% |
| hematocrit | 56 | 80.4% | 0.0% | 0.0% | 0.0% | 19.6% |
| vitamin-b12 | 53 | 81.1% | 0.0% | 0.0% | 0.0% | 18.9% |
| hdl-cholesterol | 48 | 81.3% | 0.0% | 0.0% | 0.0% | 18.8% |
| folate-serum | 49 | 81.6% | 0.0% | 0.0% | 0.0% | 18.4% |
| total-cholesterol | 34 | 82.4% | 0.0% | 0.0% | 0.0% | 17.6% |
| vitamin-d-25-oh | 46 | 82.6% | 0.0% | 0.0% | 0.0% | 17.4% |
| alt | 62 | 83.9% | 0.0% | 0.0% | 0.0% | 16.1% |
| ggt | 48 | 85.4% | 0.0% | 0.0% | 0.0% | 14.6% |
| total-bilirubin | 56 | 85.7% | 0.0% | 0.0% | 0.0% | 14.3% |
| alp | 53 | 86.8% | 0.0% | 0.0% | 0.0% | 13.2% |
| ast | 46 | 87.0% | 0.0% | 0.0% | 0.0% | 13.0% |

## What went wrong, most common first

**46× range missed | ES bracket | two-sided**
    r5-6v4 [ES plain VFUR wide]  LEUCOCITOS                           10,1   x10^3/µL   [4,0 - 11,0]  →  read 10.1 thousand/uL
    r5-6v4 [ES plain VFUR wide]  ERITROCITOS                          5,69   x10^6/µL   [4,20 - 5,90]  →  read 5.69 Million/uL
    r5-6v4 [ES plain VFUR wide]  HEMOGLOBINA                          24,8   g/dL   [12,0 - 17,5]  →  read 24.8 g/dL

**34× range missed | US spaced | two-sided**
    r5-23v0 [US plain VFUR wide]  Glucose                              86   mg/dL   70 - 99  →  read 86 mg/dL
    r5-23v0 [US plain VFUR wide]  HEMOGLOBIN A1c                       5.3   %   4.0 - 5.6  →  read 5.3 %
    r5-23v0 [US plain VFUR wide]  Creatinine                           4.49   H   mg/dL   0.60 - 1.30  →  read 4.49 mg/dL H

**15× flag invented | none VFUR**
    r5-5v0 [RO leaders VFUR wide]  GGT ...............................   7,0   U/L   8,0 - 61,0  →  read 7 U/L [8, 61] L
    r5-5v0 [RO leaders VFUR wide]  NUMĂR DE LEUCOCITE ................   19,00   10^3/µL   4,00 - 11,00  →  read 19 Thousand/uL [4, 11] H
    r5-5v0 [RO leaders VFUR wide]  HEMOGLOBINĂ .......................   21,60   g/dl   12,00 - 17,50  →  read 21.6 g/dL [12, 17.5] H

**13× range missed | US tight | two-sided**
    r5-6v1 [US glue VFRU wide]  WHITE BLOOD CELL COUNT               10.1   4.0-11.0 K/uL  →  read 10.1 thousand/uL
    r5-6v1 [US glue VFRU wide]  RBC                                  5.69   4.20-5.90 Million/uL  →  read 5.69 Million/uL
    r5-6v1 [US glue VFRU wide]  HEMOGLOBIN                           24.8 H   12.0-17.5 g/dL  →  read 24.8 g/dL H

**9× miss | mcv | "MCV"**
    r5-1v1 [UK plain VFUR single]  MCV 84.6 fL 80.0 - 100.0
    r5-5v3 [DE plain VURF wide]  MCV                                  145,6   fl   80,0 - 100,0   ↑
    r5-8v0 [UK twocol VFUR wide]  MCV                                  80.20   fL   80.00 – 100.00

**9× miss | mch | "MCH"**
    r5-1v1 [UK plain VFUR single]  MCH 31.1 pg 27.0 - 33.0
    r5-7v2 [DE plain VFUR wide]  MCH                                  35,9   ↑   pg   27,0-33,0
    r5-8v0 [UK twocol VFUR wide]  MCH                                  32.30   pg   27.00 – 33.00

**9× date missed | UK lines**
    r5-1v1  want 2026-02-02 read null
    r5-8v0  want 2026-05-11 read null
    r5-9v1  want 2026-03-14 read null

**9× miss | mchc | "MCHC"**
    r5-5v3 [DE plain VURF wide]  MCHC                                 183   g/l   320 - 360   ↓
    r5-8v0 [UK twocol VFUR wide]  MCHC                                 342.0   g/L   320.0 – 360.0
    r5-10v1 [UK plain VFUR wide]  MCHC                                 291   L   g/L   320 – 360

**9× range missed | RO dash | two-sided**
    r5-6v0 [RO glue VFUR wide]  Număr de leucocite                   10,1   10^3/µL   4,0 – 11,0  →  read 10.1 thousand/uL
    r5-6v0 [RO glue VFUR wide]  Eritrocite                           5,69   10^6/µL   4,20 – 5,90  →  read 5.69 million/uL
    r5-6v0 [RO glue VFUR wide]  Volum eritrocitar mediu (VEM)        83,4fL   80,0 – 100,0  →  read 83.4 fL

**9× flag invented | none VFRU**
    r5-16v0 [US colon VFRU wide]  GLUCOSE:                             57   70-99 mg/dL  →  read 57 mg/dL [70, 99] L
    r5-16v0 [US colon VFRU wide]  HEMOGLOBIN A1C:                      7.3   4.0-5.6 %  →  read 7.3 % [4, 5.6] H
    r5-16v0 [US colon VFRU wide]  EGFR:                                38   >60 mL/min/1.73m2  →  read 38 mL/min/1.73m2 [60, ] L

**8× flag invented | none VURF**
    r5-0v4 [RO plain VURF single]  FOSFATAZA ALCALINA 23 U/L 44 – 147  →  read 23 U/L [44, 147] L
    r5-0v4 [RO plain VURF single]  TSH 0,22 µUI/mL 0,40 – 4,00  →  read 0.22 mIU/L [0.4, 4] L
    r5-14v3 [DE plain VURF single]  GLUKOSE 67 mg/dl (70 - 99)  →  read 67 mg/dL [70, 99] L

**7× miss | tsh | "TSH"**
    r5-0v2 [DE twocol VURF tab]  TSH	0,22	mIU/l	[0,40 - 4,00]
    r5-7v2 [DE plain VFUR wide]  TSH                                  0,730   µU/ml   0,40-4,00
    r5-12v0 [US plain VFRU wide]  TSH                                  1.93   0.40 - 4.00 mIU/L

**7× miss | magnesium-serum | "Magnesium"**
    r5-1v1 [UK plain VFUR single]  Magnesium 0.78 mmol/L 0.70 - 0.99
    r5-7v2 [DE plain VFUR wide]  Magnesium                            0,74   mmol/l   0,70-0,99
    r5-10v1 [UK plain VFUR wide]  Magnesium                            0.74   mmol/L   0.70 – 0.99

**6× miss | ggt | "GGT"**
    r5-0v2 [DE twocol VURF tab]  GGT	25	U/l	[8 - 61]
    r5-5v3 [DE plain VURF wide]  GGT                                  7   U/l   8 - 61   ↓
    r5-12v0 [US plain VFRU wide]  GGT                                  59   8 - 61 U/L

**6× miss | hba1c | "HbA1c"**
    r5-1v1 [UK plain VFUR single]  HbA1c 30 mmol/mol 20 - 38
    r5-7v2 [DE plain VFUR wide]  HbA1c                                21   mmol/mol   20-38
    r5-10v1 [UK plain VFUR wide]  HbA1c                                37   mmol/mol   20 – 38

**6× miss | egfr | "eGFR"**
    r5-1v1 [UK plain VFUR single]  eGFR 107 mL/min/1.73m2 > 60
    r5-9v1 [UK glue VFUR wide]  eGFR                                 63mL/min/1.73m2   >= 60
    r5-10v1 [UK plain VFUR wide]  eGFR                                 81   mL/min/1.73m2   > 60

**6× miss | sodium-serum | "Sodium"**
    r5-1v1 [UK plain VFUR single]  Sodium 137 mmol/L 135 - 145
    r5-9v1 [UK glue VFUR wide]  Sodium                               133   L   mmol/L   135 - 145
    r5-10v1 [UK plain VFUR wide]  Sodium                               149   H   mmol/L   135 – 145

**6× miss | calcium-total | "Calcium"**
    r5-1v1 [UK plain VFUR single]  Calcium 2.30 mmol/L 2.15 - 2.57
    r5-9v1 [UK glue VFUR wide]  Calcium                              2.37mmol/L   2.15 - 2.57
    r5-10v1 [UK plain VFUR wide]  Calcium                              2.35   mmol/L   2.15 – 2.57

**6× miss | hemoglobin | "Haemoglobin"**
    r5-1v1 [UK plain VFUR single]  Haemoglobin 127 g/L 120 - 175
    r5-9v1 [UK glue VFUR wide]  Haemoglobin                          170g/L   120 - 175
    r5-10v1 [UK plain VFUR wide]  Haemoglobin                          140   g/L   120 – 175

**6× miss | vitamin-b12 | "Vitamin B12"**
    r5-1v1 [UK plain VFUR single]  Vitamin B12 556 pmol/L 148 - 664
    r5-5v3 [DE plain VURF wide]  Vitamin B12                          591   pmol/l   148 - 664
    r5-7v2 [DE plain VFUR wide]  Vitamin B12                          777   ↑   pmol/l   148-664

**6× range missed | US spaced | lower only**
    r5-3v1 [US plain VFRU wide]  HDL CHOLESTEROL                      61   >40 mg/dL  →  read 61 mg/dL
    r5-19v0 [US plain VFRU wide]  EGFR                                 109   >60 mL/min/1.73m2  →  read 109 mL/min/1.73m2
    r5-19v0 [US plain VFRU wide]  HDL Cholesterol                      65   >40 mg/dL  →  read 65 mg/dL

**6× range missed | DE bracket | upper only**
    r5-10v2 [DE plain VFUR wide]  hsCRP                                2,4   mg/l   < 3,0  →  read 2.4 mg/L
    r5-10v2 [DE plain VFUR wide]  LDL-Cholesterin                      60   mg/dl   < 100  →  read 60 mg/dL
    r5-10v2 [DE plain VFUR wide]  Triglyceride                         169   +   mg/dl   < 150  →  read 169 mg/dL H

**6× range missed | RO paren | upper only**
    r5-19v4 [RO twocol VFUR wide]  Proteina C reactivă înalt sensibilă (hs-CRP)   3.2   H   mg/L   <3.0  →  read 3.2 mg/L H
    r5-19v4 [RO twocol VFUR wide]  Colesterol total                     197   mg/dL   <200  →  read 197 mg/dL
    r5-19v4 [RO twocol VFUR wide]  Trigliceride                         129   mg/dl   <150  →  read 129 mg/dL

**5× date missed | DE lines**
    r5-0v2  want 2026-06-06 read null
    r5-5v3  want 2026-02-20 read null
    r5-7v2  want 2026-08-23 read null

**5× miss | glucose-fasting | "Glucose"**
    r5-1v1 [UK plain VFUR single]  Glucose 4.2 mmol/L 3.9 - 5.5
    r5-9v1 [UK glue VFUR wide]  Glucose                              4.5mmol/L   3.9 - 5.5
    r5-10v1 [UK plain VFUR wide]  Glucose                              3.7   L   mmol/L   3.9 – 5.5

**5× miss | potassium-serum | "Potassium"**
    r5-1v1 [UK plain VFUR single]  Potassium 2.8 mmol/L 3.5 - 5.1
    r5-9v1 [UK glue VFUR wide]  Potassium                            2.8   L   mmol/L   3.5 - 5.1
    r5-10v1 [UK plain VFUR wide]  Potassium                            4.2   mmol/L   3.5 – 5.1

**5× miss | phosphorus-serum | "Phosphate"**
    r5-1v1 [UK plain VFUR single]  Phosphate 1.16 mmol/L 0.81 - 1.45
    r5-10v1 [UK plain VFUR wide]  Phosphate                            0.97   mmol/L   0.81 – 1.45
    r5-12v1 [UK plain VURF wide]  Phosphate                            1.71   mmol/L   (0.81 - 1.45)

**5× miss | albumin-serum | "Albumin"**
    r5-1v1 [UK plain VFUR single]  Albumin 39 g/L 35 - 50
    r5-7v2 [DE plain VFUR wide]  Albumin                              36   g/l   35-50
    r5-10v1 [UK plain VFUR wide]  Albumin                              25   L   g/L   35 – 50

**5× miss | hs-crp | "hsCRP"**
    r5-1v1 [UK plain VFUR single]  hsCRP 2.7 mg/L <= 3.0
    r5-7v2 [DE plain VFUR wide]  hsCRP                                2,6   mg/l   bis 3,0
    r5-10v1 [UK plain VFUR wide]  hsCRP                                2.4   mg/L   < 3.0

**5× range missed | UK paren | two-sided**
    r5-4v2 [UK twocol VURF wide]  Bilirubin                            17   µmol/L   (3 - 21)  →  read 1 mg/dL
    r5-4v2 [UK twocol VURF wide]  ALT                                  4   U/L   (7 - 56)   LOW  →  read 4 U/L L
    r5-4v2 [UK twocol VURF wide]  AST                                  14   U/L   (10 - 40)  →  read 14 U/L

**5× miss | blood-urea-nitrogen | "Blood urea nitrogen"**
    r5-9v1 [UK glue VFUR wide]  Blood urea nitrogen                  21mg/dL   7 - 25
    r5-10v1 [UK plain VFUR wide]  Blood urea nitrogen                  18   mg/dL   7 – 25
    r5-12v1 [UK plain VURF wide]  Blood urea nitrogen                  8   mg/dL   (7 - 25)

**5× miss | total-protein | "Total protein"**
    r5-9v1 [UK glue VFUR wide]  Total protein                        54   L   g/L   60 - 83
    r5-10v1 [UK plain VFUR wide]  Total protein                        71   g/L   60 – 83
    r5-12v1 [UK plain VURF wide]  Total protein                        79   g/L   (60 - 83)

**5× miss | ldl-cholesterol | "LDL cholesterol"**
    r5-9v1 [UK glue VFUR wide]  LDL cholesterol                      2.1mmol/L   <= 2.6
    r5-10v1 [UK plain VFUR wide]  LDL cholesterol                      1.6   mmol/L   <= 2.6
    r5-12v1 [UK plain VURF wide]  LDL cholesterol                      1.2   mmol/L   < 2.6

**5× miss | hdl-cholesterol | "HDL cholesterol"**
    r5-9v1 [UK glue VFUR wide]  HDL cholesterol                      1.29mmol/L   > 1.03
    r5-10v1 [UK plain VFUR wide]  HDL cholesterol                      1.27   mmol/L   >= 1.03
    r5-12v1 [UK plain VURF wide]  HDL cholesterol                      1.29   mmol/L   >= 1.03

**5× miss | triglycerides | "Triglycerides"**
    r5-9v1 [UK glue VFUR wide]  Triglycerides                        1.39mmol/L   <= 1.69
    r5-10v1 [UK plain VFUR wide]  Triglycerides                        1.91   H   mmol/L   < 1.69
    r5-12v1 [UK plain VURF wide]  Triglycerides                        2.29   mmol/L   <1.69

**5× miss | hematocrit | "Haematocrit"**
    r5-9v1 [UK glue VFUR wide]  Haematocrit                          0.46L/L   0.36 - 0.50
    r5-12v1 [UK plain VURF wide]  Haematocrit                          0.47   L/L   (0.36 - 0.50)
    r5-21v1 [UK plain VURF wide]  Haematocrit                          0.41   L/L   0.36 - 0.50

**5× range missed | US spaced | upper only**
    r5-19v0 [US plain VFRU wide]  TRIGLYCERIDES                        129   <150 mg/dL  →  read 129 mg/dL
    r5-23v0 [US plain VFUR wide]  C-Reactive Protein, Cardiac          4.6   H   mg/L   < OR = 3.0  →  read 4.6 mg/L H
    r5-23v0 [US plain VFUR wide]  CHOLESTEROL, TOTAL                   154   mg/dL   0-200  →  read 154 mg/dL

**4× miss | creatinine-serum | "Creatinine"**
    r5-1v1 [UK plain VFUR single]  Creatinine 149 µmol/L 53 - 115
    r5-12v1 [UK plain VURF wide]  Creatinine                           38   µmol/L   (53 - 115)
    r5-22v1 [UK plain VURF tab]  Creatinine	43	µmol/L	53 - 115	LOW

**4× miss | chloride-serum | "Chloride"**
    r5-1v1 [UK plain VFUR single]  Chloride 104 mmol/L 98 - 107
    r5-10v1 [UK plain VFUR wide]  Chloride                             103   mmol/L   98 – 107
    r5-12v1 [UK plain VURF wide]  Chloride                             101   mmol/L   (98 - 107)

**4× miss | rbc | "RBC"**
    r5-1v1 [UK plain VFUR single]  RBC 5.35 10*12/L 4.20 - 5.90
    r5-12v0 [US plain VFRU wide]  RBC                                  3.76 Low   4.20 - 5.90 M/uL
    r5-21v1 [UK plain VURF wide]  RBC                                  6.31   ×10¹²/L   4.20 - 5.90

**4× range missed | DE tight | two-sided**
    r5-3v0 [DE plain VURF wide]  25-OH-VITAMIN D                      77,00   ng/ml   30,00-100,00  →  read 77 ng/mL
    r5-3v0 [DE plain VURF wide]  VITAMIN B12                          411,00   pg/ml   200,00-900,00  →  read 411 pg/mL
    r5-3v0 [DE plain VURF wide]  FOLSÄURE                             9,400   ng/ml   3,000-20,000  →  read 9.4 ng/mL

**4× range wrong | RO dash | two-sided**
    r5-6v0 [RO glue VFUR wide]  Hemoglobina                          24,8   ↑   g/dL   12,0 – 17,5  →  read 24.8 g/dL [, 17.5] H
    r5-6v0 [RO glue VFUR wide]  Hematocrit                           58,3   ↑   %   36,0 – 50,0  →  read 58.3 % [, 50] H
    r5-6v0 [RO glue VFUR wide]  Vitamina B12                         1128   ↑   pg/mL   200 – 900  →  read 1128 pg/mL [, 900] H

**4× miss | wbc | "WBC"**
    r5-8v0 [UK twocol VFUR wide]  WBC                                  6.20   ×10⁹/L   4.00 – 11.00
    r5-12v0 [US plain VFRU wide]  WBC                                  6.5   4.0 - 11.0 K/uL
    r5-12v1 [UK plain VURF wide]  WBC                                  6.5   ×10⁹/L   (4.0 - 11.0)

**4× critical not caught (row missed) | platelet-count**
    r5-8v0 [UK twocol VFUR wide]  PLATELETS                            28.0   LOW   x10^9/L   150.0 – 400.0
    r5-12v0 [US plain VFRU wide]  PLATELET COUNT                       1149 High   150 - 400 K/uL
    r5-12v1 [UK plain VURF wide]  Platelet count                       1149   x10^9/L   (150 - 400)

**4× miss | platelet-count | "Platelets"**
    r5-9v1 [UK glue VFUR wide]  Platelets                            75   L   ×10⁹/L   150 - 400
    r5-10v1 [UK plain VFUR wide]  Platelets                            395   10*9/L   150 – 400
    r5-21v1 [UK plain VURF wide]  Platelets                            259   x10^9/L   150 - 400

**4× range missed | DE bracket | lower only**
    r5-10v2 [DE plain VFUR wide]  eGFR (CKD-EPI)                       81   mL/min/1.73m2   > 60  →  read 81 mL/min/1.73m2
    r5-10v2 [DE plain VFUR wide]  HDL-Cholesterin                      49   mg/dl   >40  →  read 49 mg/dL
    r5-22v2 [DE glue VFUR wide]  eGFR (CKD-EPI)                       94mL/min/1.73m2   > 60  →  read 94 mL/min/1.73m2

**4× range missed | RO dash | upper only**
    r5-10v4 [RO plain VFUR wide]  PROTEINA C REACTIVĂ ÎNALT SENSIBILĂ (HS-CRP)   2.400   mg/l   < 3.000  →  read 2.4 mg/L
    r5-16v4 [RO plain VFUR single]  Proteina C reactivă înalt sensibilă (hs-CRP) 3,800 H mg/L <3,000  →  read 3.8 mg/L H
    r5-16v4 [RO plain VFUR single]  LDL colesterol 82,00 mg/dL <= 100,00  →  read 82 mg/dL

**4× critical not caught (row missed) | sodium-serum**
    r5-12v0 [US plain VFRU wide]  SODIUM                               76 Low   135 - 145 mmol/L
    r5-12v1 [UK plain VURF wide]  Sodium                               76   mmol/L   (135 - 145)
    r5-12v2 [DE leaders VFUR single]  NATRIUM ........................... 76 - mmol/l (135 - 145)

**4× miss | ast | "AST"**
    r5-12v0 [US plain VFRU wide]  AST                                  21   10 - 40 U/L
    r5-12v1 [UK plain VURF wide]  AST                                  21   U/L   (10 - 40)
    r5-14v2 [UK plain VURF wide]  AST                                  45   U/L   10-40   HIGH

**4× miss | free-t3 | "Free T3"**
    r5-12v1 [UK plain VURF wide]  Free T3                              5.7   pmol/L   (3.5 - 6.5)
    r5-21v1 [UK plain VURF wide]  Free T3                              4.9   pmol/L   3.5 - 6.5
    r5-22v1 [UK plain VURF tab]  Free T3	7.1	pmol/L	3.5 - 6.5	HIGH

**4× range missed | UK dash | two-sided**
    r5-13v1 [UK plain VFUR wide]  Sodium                               140   mmol/L   135 – 145  →  read 140 mmol/L
    r5-13v1 [UK plain VFUR wide]  Potassium                            4.7   mmol/L   3.5 – 5.1  →  read 4.7 mmol/L
    r5-13v1 [UK plain VFUR wide]  Chloride                             106   mmol/L   98 – 107  →  read 106 mmol/L

**3× miss | ferritin | "Ferritin"**
    r5-0v2 [DE twocol VURF tab]  Ferritin	260	µg/l	[30 - 300]
    r5-1v1 [UK plain VFUR single]  Ferritin 150 µg/L 30 - 300
    r5-23v1 [UK plain VFUR tab]  Ferritin	138	µg/L	30-300

**3× miss | uric-acid | "Uric acid"**
    r5-1v1 [UK plain VFUR single]  Uric acid 190 µmol/L 149 - 416
    r5-9v1 [UK glue VFUR wide]  Uric acid                            399µmol/L   149 - 416
    r5-22v1 [UK plain VURF tab]  Uric acid	333	µmol/L	149 - 416

**3× miss | wbc | "White cell count"**
    r5-1v1 [UK plain VFUR single]  White cell count 8.5 ×10⁹/L 4.0 - 11.0
    r5-10v1 [UK plain VFUR wide]  White cell count                     5.9   10*9/L   4.0 – 11.0
    r5-23v1 [UK plain VFUR tab]  White cell count	35.5	H	x10^9/L	4.0-11.0

**3× miss | vitamin-d-25-oh | "Vitamin D"**
    r5-1v1 [UK plain VFUR single]  Vitamin D 60 nmol/L 75 - 250
    r5-10v1 [UK plain VFUR wide]  Vitamin D                            95   nmol/L   75 – 250
    r5-23v1 [UK plain VFUR tab]  Vitamin D	215	nmol/L	75-250

**3× miss | testosterone-total | "Testosterone"**
    r5-1v1 [UK plain VFUR single]  Testosterone 31.2 nmol/L 9.2 - 31.8
    r5-10v1 [UK plain VFUR wide]  Testosterone                         22.1   nmol/L   9.2 – 31.8
    r5-23v1 [UK plain VFUR tab]  Testosterone	10.5	nmol/L	9.2-31.8

**3× range missed | RO bracket | upper only**
    r5-2v4 [RO glue VURF single]  Colesterol total 184.00mg/dL < 200.00  →  read 184 mg/dL
    r5-2v4 [RO glue VURF single]  LDL colesterol 98.00mg/dL <= 100.00  →  read 98 mg/dL
    r5-14v0 [RO leaders VURF wide]  Proteina C reactivă înalt sensibilă (hs-CRP) ....   2,4   mg/L   < 3,0  →  read 2.4 mg/L

**3× miss | testosterone-total | "Testosteron"**
    r5-5v3 [DE plain VURF wide]  Testosteron                          17,2   nmol/l   9,2 - 31,8
    r5-7v2 [DE plain VFUR wide]  Testosteron                          13,8   nmol/l   9,2-31,8
    r5-13v2 [DE leaders VURF wide]  Testosteron .......................   10,7   nmol/l   [9,2 - 31,8]

**3× range missed | US tight | lower only**
    r5-10v0 [US plain VFRU tab]  eGFR	81	>60 mL/min/1.73m2  →  read 81 mL/min/1.73m2
    r5-10v0 [US plain VFRU tab]  HDL Cholesterol	49	>40 mg/dL  →  read 49 mg/dL
    r5-14v1 [US plain VFUR single]  EGFR 64 mL/min/1.73m2 >60  →  read 64 mL/min/1.73m2

**3× miss | rbc | "Red cell count"**
    r5-10v1 [UK plain VFUR wide]  Red cell count                       3.65   L   x10^12/L   4.20 – 5.90
    r5-12v1 [UK plain VURF wide]  Red cell count                       3.76   10*12/L   (4.20 - 5.90)
    r5-23v1 [UK plain VFUR tab]  Red cell count	4.41	x10^12/L	4.20-5.90

**3× range missed | RO dash | lower only**
    r5-10v4 [RO plain VFUR wide]  EGFR                                 81.00   mL/min/1.73m2   > 60.00  →  read 81 mL/min/1.73m2
    r5-16v4 [RO plain VFUR single]  Rata de filtrare glomerulară estimată 38,00 L mL/min/1.73m2 >60,00  →  read 38 mL/min/1.73m2 L
    r5-16v4 [RO plain VFUR single]  HDL colesterol 66,00 mg/dl > 40,00  →  read 66 mg/dL

**3× miss | magnesium-serum | "MAGNESIUM"**
    r5-12v0 [US plain VFRU wide]  MAGNESIUM                            2.1   1.7 - 2.4 mg/dL
    r5-12v2 [DE leaders VFUR single]  MAGNESIUM ......................... 0,86 mmol/l (0,70 - 0,99)
    r5-14v2 [UK plain VURF wide]  MAGNESIUM                            0.86   mmol/L   0.70-0.99

**3× critical not caught (row missed) | alt**
    r5-12v0 [US plain VFRU wide]  ALT (SGPT)                           665 High   7 - 56 U/L
    r5-12v1 [UK plain VURF wide]  Alanine aminotransferase             665   U/L   (7 - 56)
    r5-12v2 [DE leaders VFUR single]  ALT (GPT) ......................... 665 + U/l (7 - 56)

**3× miss | alt | "Alanine aminotransferase"**
    r5-12v1 [UK plain VURF wide]  Alanine aminotransferase             665   U/L   (7 - 56)
    r5-22v1 [UK plain VURF tab]  Alanine aminotransferase	31	U/L	7 - 56
    r5-23v1 [UK plain VFUR tab]  Alanine aminotransferase	18	U/L	7-56

**3× miss | total-cholesterol | "Total cholesterol"**
    r5-12v1 [UK plain VURF wide]  Total cholesterol                    4.4   mmol/L   <5.2
    r5-22v1 [UK plain VURF tab]  Total cholesterol	4.7	mmol/L	<= 5.2
    r5-23v1 [UK plain VFUR tab]  Total cholesterol	4.0	mmol/L	< 5.2

**3× miss | free-t4 | "Free T4"**
    r5-12v1 [UK plain VURF wide]  Free T4                              15.8   pmol/L   (10.3 - 23.2)
    r5-22v1 [UK plain VURF tab]  Free T4	27.2	pmol/L	10.3 - 23.2	HIGH
    r5-23v1 [UK plain VFUR tab]  Free T4	19.4	pmol/L	10.3-23.2

**3× range missed | RO paren | lower only**
    r5-19v4 [RO twocol VFUR wide]  Rata de filtrare glomerulară estimată   109   mL/min/1.73m2   >60  →  read 109 mL/min/1.73m2
    r5-19v4 [RO twocol VFUR wide]  Colesterol HDL                       65   mg/dL   > 40  →  read 65 mg/dL
    r5-20v4 [RO plain VURF tab]  HDL colesterol	54,0	mg/dL	> 40,0  →  read 54 mg/dL

**3× range missed | ES spaced | upper only**
    r5-22v3 [ES twocol VURF single]  Colesterol total 180 mg/dL <200  →  read 180 mg/dL
    r5-22v3 [ES twocol VURF single]  Colesterol LDL 79 mg/dL Hasta 100  →  read 79 mg/dL
    r5-22v3 [ES twocol VURF single]  Triglicéridos 116 mg/dL < 150  →  read 116 mg/dL

**3× range missed | RO spaced | upper only**
    r5-22v4 [RO unitspace VFUR wide]  Colesterol total                     180   mg / dL   <200  →  read 180 mg/dL
    r5-22v4 [RO unitspace VFUR wide]  LDL colesterol                       79   mg / dl   <100  →  read 79 mg/dL
    r5-22v4 [RO unitspace VFUR wide]  Trigliceride                         116   mg / dl   < 150  →  read 116 mg/dL

**2× miss | alt | "GPT (ALT)"**
    r5-0v2 [DE twocol VURF tab]  GPT (ALT)	47	U/l	[7 - 56]
    r5-5v3 [DE plain VURF wide]  GPT (ALT)                            16   U/l   7 - 56

**2× miss | alp | "Alkalische Phosphatase"**
    r5-0v2 [DE twocol VURF tab]  Alkalische Phosphatase	23	U/l	[44 - 147]
    r5-5v3 [DE plain VURF wide]  Alkalische Phosphatase               97   U/l   44 - 147

**2× miss | free-t3 | "Freies T3"**
    r5-0v2 [DE twocol VURF tab]  Freies T3	4,6	pmol/l	[3,5 - 6,5]
    r5-5v3 [DE plain VURF wide]  Freies T3                            7,4   pmol/l   3,5 - 6,5   ↑

**2× miss | platelet-count | "Platelet count"**
    r5-1v1 [UK plain VFUR single]  Platelet count 340 ×10⁹/L 150 - 400
    r5-12v1 [UK plain VURF wide]  Platelet count                       1149   x10^9/L   (150 - 400)

**2× miss | serum-iron | "Iron"**
    r5-1v1 [UK plain VFUR single]  Iron 19.0 µmol/L 9.0 - 30.4
    r5-23v1 [UK plain VFUR tab]  Iron	16.5	µmol/L	9.0-30.4

**2× miss | transferrin-saturation | "Transferrin saturation"**
    r5-1v1 [UK plain VFUR single]  Transferrin saturation 35 % 20 - 50
    r5-23v1 [UK plain VFUR tab]  Transferrin saturation	47	%	20-50

**2× miss | folate-serum | "Folate"**
    r5-1v1 [UK plain VFUR single]  Folate 34.7 nmol/L 6.8 - 45.3
    r5-10v1 [UK plain VFUR wide]  Folate                               8.2   nmol/L   6.8 – 45.3

**2× range missed | RO bracket | lower only**
    r5-2v4 [RO glue VURF single]  HDL colesterol 42.00mg/dL >= 40.00  →  read 42 mg/dL
    r5-14v0 [RO leaders VURF wide]  eGFR ..............................   64   mL/min/1.73m2   >= 60  →  read 64 mL/min/1.73m2

**2× miss | wbc | "Leukozyten"**
    r5-5v3 [DE plain VURF wide]  Leukozyten                           19,0   G/l   4,0 - 11,0   ↑
    r5-7v2 [DE plain VFUR wide]  Leukozyten                           10,8   /nl   4,0-11,0

**2× miss | hemoglobin | "Hämoglobin"**
    r5-5v3 [DE plain VURF wide]  Hämoglobin                           216   g/l   120 - 175   ↑
    r5-7v2 [DE plain VFUR wide]  Hämoglobin                           166   g/l   120-175

**2× miss | hematocrit | "Hämatokrit"**
    r5-5v3 [DE plain VURF wide]  Hämatokrit                           0,50   L/l   0,36 - 0,50
    r5-7v2 [DE plain VFUR wide]  Hämatokrit                           0,49   L/l   0,36-0,50

…and 186 smaller groups.
