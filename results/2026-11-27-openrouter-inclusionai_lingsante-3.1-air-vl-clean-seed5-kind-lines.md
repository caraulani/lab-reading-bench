# Lab-report reader stress test

97 generated reports, 1792 rows with a known answer, seed 5, only kind=lines. Read in 700.0 s (7216.6 ms a report).

| Outcome | Rows | Share | 95% interval |
|---|---|---|---|
| ok | 1438 | 80.2% | 78.34–82.02% |
| unit | 2 | 0.1% | 0.03–0.41% |
| unconverted | 2 | 0.1% | 0.03–0.41% |
| wrong | 3 | 0.2% | 0.06–0.49% |
| miss | 347 | 19.4% | 17.60–21.26% |

- **Critical values:** 17 of 31 caught (54.8%, interval 37.77–70.84%); 14 lost because the row was not read, 0 because it was misread. False critical alarms: 0.
- **Rows that are not on the report:** 1 (of 1446 rows read).
- **Lab's flag:** ok 1418, invented 23, missed 1.
- **Reference range:** ok 1297, missed 144, wrong 1.
- **Collection date:** ok 83, missed 14.
- **Wrong values printed in a unit that needs converting:** 2 of 3 (66.7%).
- **Format invariance** (5 printings of each set of results): of 438 markers, read right in every printing 199 (45.4%), right in some printings but not others 239 (54.6%), never right 0. Critical results caught in every printing: 1 of 8; caught in some printings only: 7.

## By locale
| locale | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| UK | 312 | 39.7% | 0.3% | 0.6% | 0.6% | 58.7% |
| RO | 338 | 73.7% | 0.0% | 0.0% | 0.0% | 26.3% |
| DE | 380 | 80.3% | 0.0% | 0.0% | 0.0% | 19.7% |
| ES | 370 | 99.5% | 0.3% | 0.0% | 0.3% | 0.0% |
| US | 392 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By kind
| kind | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| lines | 1792 | 80.2% | 0.1% | 0.1% | 0.2% | 19.4% |

## By variant
| variant | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| leaders | 88 | 43.2% | 0.0% | 0.0% | 0.0% | 56.8% |
| plain | 1131 | 80.0% | 0.0% | 0.0% | 0.088% | 19.9% |
| twocol | 191 | 82.7% | 1.0% | 1.0% | 0.5% | 14.7% |
| unitspace | 176 | 84.1% | 0.0% | 0.0% | 0.0% | 15.9% |
| glue | 117 | 85.5% | 0.0% | 0.0% | 0.9% | 13.7% |
| colon | 34 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| wrap | 55 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By units
| units | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| SI | 438 | 40.0% | 0.2% | 0.5% | 0.5% | 58.9% |
| conventional | 1354 | 93.3% | 0.074% | 0.0% | 0.074% | 6.6% |

## By decimal
| decimal | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| point | 818 | 71.5% | 0.1% | 0.2% | 0.2% | 27.9% |
| comma | 974 | 87.6% | 0.1% | 0.0% | 0.1% | 12.2% |

## By sep
| sep | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| tab | 180 | 62.2% | 0.0% | 0.0% | 0.0% | 37.8% |
| wide | 1133 | 81.8% | 0.088% | 0.2% | 0.2% | 17.7% |
| single | 479 | 83.3% | 0.2% | 0.0% | 0.2% | 16.3% |

## By order
| order | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| VURF | 476 | 71.8% | 0.4% | 0.4% | 0.2% | 27.1% |
| VFUR | 1030 | 78.7% | 0.0% | 0.0% | 0.097% | 21.2% |
| FVUR | 79 | 98.7% | 0.0% | 0.0% | 1.3% | 0.0% |
| VFRU | 207 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By marker
| marker | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| free-t4 | 36 | 69.4% | 0.0% | 2.8% | 0.0% | 27.8% |
| chloride-serum | 34 | 70.6% | 0.0% | 0.0% | 0.0% | 29.4% |
| creatinine-serum | 31 | 71.0% | 0.0% | 0.0% | 0.0% | 29.0% |
| rbc | 51 | 72.5% | 3.9% | 0.0% | 2.0% | 21.6% |
| magnesium-serum | 41 | 73.2% | 0.0% | 0.0% | 0.0% | 26.8% |
| phosphorus-serum | 38 | 73.7% | 0.0% | 0.0% | 0.0% | 26.3% |
| blood-urea-nitrogen | 42 | 73.8% | 0.0% | 0.0% | 0.0% | 26.2% |
| glucose-fasting | 43 | 74.4% | 0.0% | 0.0% | 0.0% | 25.6% |
| free-t3 | 44 | 75.0% | 0.0% | 2.3% | 2.3% | 20.5% |
| hba1c | 46 | 76.1% | 0.0% | 0.0% | 0.0% | 23.9% |
| sodium-serum | 46 | 76.1% | 0.0% | 0.0% | 0.0% | 23.9% |
| potassium-serum | 38 | 76.3% | 0.0% | 0.0% | 0.0% | 23.7% |
| total-protein | 38 | 76.3% | 0.0% | 0.0% | 0.0% | 23.7% |
| total-cholesterol | 34 | 76.5% | 0.0% | 0.0% | 0.0% | 23.5% |
| egfr | 43 | 76.7% | 0.0% | 0.0% | 0.0% | 23.3% |
| tsh | 39 | 76.9% | 0.0% | 0.0% | 0.0% | 23.1% |
| mchc | 48 | 77.1% | 0.0% | 0.0% | 0.0% | 22.9% |
| hs-crp | 41 | 78.0% | 0.0% | 0.0% | 0.0% | 22.0% |
| ldl-cholesterol | 41 | 78.0% | 0.0% | 0.0% | 0.0% | 22.0% |
| wbc | 46 | 78.3% | 0.0% | 0.0% | 0.0% | 21.7% |
| calcium-total | 33 | 78.8% | 0.0% | 0.0% | 0.0% | 21.2% |
| triglycerides | 43 | 79.1% | 0.0% | 0.0% | 2.3% | 18.6% |
| uric-acid | 36 | 80.6% | 0.0% | 0.0% | 0.0% | 19.4% |
| albumin-serum | 31 | 80.6% | 0.0% | 0.0% | 0.0% | 19.4% |
| hdl-cholesterol | 48 | 81.3% | 0.0% | 0.0% | 0.0% | 18.8% |
| hematocrit | 56 | 82.1% | 0.0% | 0.0% | 0.0% | 17.9% |
| platelet-count | 47 | 83.0% | 0.0% | 0.0% | 0.0% | 17.0% |
| ggt | 48 | 83.3% | 0.0% | 0.0% | 0.0% | 16.7% |
| mcv | 48 | 83.3% | 0.0% | 0.0% | 0.0% | 16.7% |
| alt | 62 | 83.9% | 0.0% | 0.0% | 0.0% | 16.1% |
| total-bilirubin | 56 | 83.9% | 0.0% | 0.0% | 0.0% | 16.1% |
| hemoglobin | 58 | 84.5% | 0.0% | 0.0% | 0.0% | 15.5% |
| ast | 46 | 84.8% | 0.0% | 0.0% | 0.0% | 15.2% |
| mch | 42 | 85.7% | 0.0% | 0.0% | 0.0% | 14.3% |
| folate-serum | 49 | 85.7% | 0.0% | 0.0% | 0.0% | 14.3% |
| testosterone-total | 50 | 86.0% | 0.0% | 0.0% | 0.0% | 14.0% |
| alp | 53 | 86.8% | 0.0% | 0.0% | 0.0% | 13.2% |
| vitamin-b12 | 53 | 86.8% | 0.0% | 0.0% | 0.0% | 13.2% |
| vitamin-d-25-oh | 46 | 91.3% | 0.0% | 0.0% | 0.0% | 8.7% |
| ferritin | 24 | 91.7% | 0.0% | 0.0% | 0.0% | 8.3% |
| transferrin-saturation | 24 | 91.7% | 0.0% | 0.0% | 0.0% | 8.3% |
| serum-iron | 19 | 94.7% | 0.0% | 0.0% | 0.0% | 5.3% |

## What went wrong, most common first

**36× range missed | RO dash | two-sided**
    r5-6v0 [RO glue VFUR wide]  Număr de leucocite                   10,1   10^3/µL   4,0 – 11,0  →  read 10.1 Thousand/uL
    r5-6v0 [RO glue VFUR wide]  Eritrocite                           5,69   10^6/µL   4,20 – 5,90  →  read 5.69 Million/uL
    r5-6v0 [RO glue VFUR wide]  Hemoglobina                          24,8   ↑   g/dL   12,0 – 17,5  →  read 24.8 g/dL H

**18× flag invented | none VURF**
    r5-0v4 [RO plain VURF single]  FOSFATAZA ALCALINA 23 U/L 44 – 147  →  read 23 U/L [44, 147] L
    r5-0v4 [RO plain VURF single]  TSH 0,22 µUI/mL 0,40 – 4,00  →  read 0.22 mIU/L [0.4, 4] L
    r5-11v2 [UK plain VURF single]  ALANINE AMINOTRANSFERASE 662 U/L 7 – 56  →  read 662 U/L [7, 56] H

**16× range missed | ES bracket | two-sided**
    r5-5v4 [ES twocol VFUR wide]  Bilirrubina total                    0,500   mg/dL   [0,200 - 1,200]  →  read 0.5 mg/dL
    r5-5v4 [ES twocol VFUR wide]  ALT (GPT)                            16,00   U/L   [7,00 - 56,00]  →  read 16 U/L
    r5-5v4 [ES twocol VFUR wide]  Fosfatasa alcalina                   97,00   U/L   [44,00 - 147,00]  →  read 97 U/L

**13× range missed | US spaced | two-sided**
    r5-12v0 [US plain VFRU wide]  POTASSIUM                            4.8   3.5 - 5.1 mmol/L  →  read 4.8 mmol/L
    r5-12v0 [US plain VFRU wide]  CHLORIDE                             101   98 - 107 mmol/L  →  read 101 mmol/L
    r5-12v0 [US plain VFRU wide]  MAGNESIUM                            2.1   1.7 - 2.4 mg/dL  →  read 2.1 mg/dL

**8× miss | tsh | "TSH"**
    r5-4v0 [RO twocol VURF wide]  TSH                                  3,33   µUI/mL   [0,40 - 4,00]
    r5-7v2 [DE plain VFUR wide]  TSH                                  0,730   µU/ml   0,40-4,00
    r5-12v1 [UK plain VURF wide]  TSH                                  1.93   mIU/L   (0.40 - 4.00)

**8× range missed | US tight | two-sided**
    r5-6v1 [US glue VFRU wide]  WHITE BLOOD CELL COUNT               10.1   4.0-11.0 K/uL  →  read 10.1 thousand/uL
    r5-6v1 [US glue VFRU wide]  RBC                                  5.69   4.20-5.90 Million/uL  →  read 5.69 Million/uL
    r5-6v1 [US glue VFRU wide]  MCV                                  83.4   80.0-100.0 fL  →  read 83.4 fL

**8× range missed | ES paren | two-sided**
    r5-17v3 [ES wrap VURF wide]  Bilirrubina total ⏎         1,00   mg/dL   (0,20 - 1,20)  →  read 1 mg/dL
    r5-17v3 [ES wrap VURF wide]  ALT (GPT)                            25,0   U/L   (7,0 - 56,0)  →  read 25 U/L
    r5-17v3 [ES wrap VURF wide]  Fosfatasa alcalina ⏎         87,0   U/L   (44,0 - 147,0)  →  read 87 U/L

**7× miss | hba1c | "HbA1c"**
    r5-7v2 [DE plain VFUR wide]  HbA1c                                21   mmol/mol   20-38
    r5-10v1 [UK plain VFUR wide]  HbA1c                                37   mmol/mol   20 – 38
    r5-12v1 [UK plain VURF wide]  HbA1c                                34   mmol/mol   (20 - 38)

**7× miss | magnesium-serum | "Magnesium"**
    r5-7v2 [DE plain VFUR wide]  Magnesium                            0,74   mmol/l   0,70-0,99
    r5-10v1 [UK plain VFUR wide]  Magnesium                            0.74   mmol/L   0.70 – 0.99
    r5-12v1 [UK plain VURF wide]  Magnesium                            0.86   mmol/L   (0.70 - 0.99)

**7× date missed | UK lines**
    r5-8v0  want 2026-05-11 read null
    r5-10v1  want 2026-08-07 read null
    r5-12v1  want 2026-04-21 read null

**7× miss | egfr | "eGFR"**
    r5-10v1 [UK plain VFUR wide]  eGFR                                 81   mL/min/1.73m2   > 60
    r5-12v1 [UK plain VURF wide]  eGFR                                 107   mL/min/1.73m2   >60
    r5-12v4 [RO plain VFUR single]  eGFR 107 mL/min/1.73m2 >60

**7× range missed | US spaced | lower only**
    r5-11v1 [US plain VFUR single]  HDL CHOLESTEROL 50 mg/dL >40  →  read 50 mg/dL
    r5-13v0 [US plain VFUR wide]  EGFR                                 101   mL/min/1.73m2   >60  →  read 101 mL/min/1.73m2
    r5-19v0 [US plain VFRU wide]  EGFR                                 109   >60 mL/min/1.73m2  →  read 109 mL/min/1.73m2

**6× miss | mchc | "MCHC"**
    r5-8v0 [UK twocol VFUR wide]  MCHC                                 342.0   g/L   320.0 – 360.0
    r5-10v1 [UK plain VFUR wide]  MCHC                                 291   L   g/L   320 – 360
    r5-12v1 [UK plain VURF wide]  MCHC                                 327   g/L   (320 - 360)

**6× range missed | US spaced | upper only**
    r5-11v1 [US plain VFUR single]  TRIGLYCERIDES 76 mg/dL <150  →  read 76 mg/dL
    r5-12v0 [US plain VFRU wide]  CHOLESTEROL, TOTAL                   171   <200 mg/dL  →  read 171 mg/dL
    r5-19v0 [US plain VFRU wide]  TRIGLYCERIDES                        129   <150 mg/dL  →  read 129 mg/dL

**5× miss | ggt | "GGT"**
    r5-2v4 [RO glue VURF single]  GGT 6.00U/L [8.00 - 61.00]
    r5-4v0 [RO twocol VURF wide]  GGT                                  14   U/l   [8 - 61]
    r5-12v1 [UK plain VURF wide]  GGT                                  59   U/L   (8 - 61)

**5× miss | mchc | "CHEM"**
    r5-2v4 [RO glue VURF single]  CHEM 32.600g/dL [32.000 - 36.000]
    r5-4v0 [RO twocol VURF wide]  CHEM                                 35,0   g/dl   [32,0 - 36,0]
    r5-10v4 [RO plain VFUR wide]  CHEM                                 29.100   ↓   g/dL   32.000 – 36.000

**5× flag invented | none VFUR**
    r5-6v4 [ES plain VFUR wide]  HEMOGLOBINA                          24,8   g/dL   [12,0 - 17,5]  →  read 24.8 g/dL [12, 17.5] H
    r5-6v4 [ES plain VFUR wide]  HEMATOCRITO                          58,3   %   [36,0 - 50,0]  →  read 58.3 % [36, 50] H
    r5-6v4 [ES plain VFUR wide]  25-OH VITAMINA D                     21   ng/mL   [30 - 100]  →  read 21 ng/mL [30, 100] L

**5× miss | albumin-serum | "Albumin"**
    r5-7v2 [DE plain VFUR wide]  Albumin                              36   g/l   35-50
    r5-10v1 [UK plain VFUR wide]  Albumin                              25   L   g/L   35 – 50
    r5-13v1 [UK plain VFUR wide]  Albumin                              36   g/L   35 – 50

**5× miss | hs-crp | "hsCRP"**
    r5-7v2 [DE plain VFUR wide]  hsCRP                                2,6   mg/l   bis 3,0
    r5-10v1 [UK plain VFUR wide]  hsCRP                                2.4   mg/L   < 3.0
    r5-13v1 [UK plain VFUR wide]  hsCRP                                2.3   mg/L   <= 3.0

**5× miss | mch | "MCH"**
    r5-7v2 [DE plain VFUR wide]  MCH                                  35,9   ↑   pg   27,0-33,0
    r5-8v0 [UK twocol VFUR wide]  MCH                                  32.30   pg   27.00 – 33.00
    r5-12v1 [UK plain VURF wide]  MCH                                  27.5   pg   (27.0 - 33.0)

**5× miss | vitamin-b12 | "Vitamin B12"**
    r5-7v2 [DE plain VFUR wide]  Vitamin B12                          777   ↑   pmol/l   148-664
    r5-10v1 [UK plain VFUR wide]  Vitamin B12                          501   pmol/L   148 – 664
    r5-13v1 [UK plain VFUR wide]  Vitamin B12                          399   pmol/L   148 – 664

**5× miss | mcv | "MCV"**
    r5-8v0 [UK twocol VFUR wide]  MCV                                  80.20   fL   80.00 – 100.00
    r5-12v1 [UK plain VURF wide]  MCV                                  53.2   fL   (80.0 - 100.0)
    r5-12v2 [DE leaders VFUR single]  MCV ............................... 53,2 - fl (80,0 - 100,0)

**5× miss | blood-urea-nitrogen | "Blood urea nitrogen"**
    r5-10v1 [UK plain VFUR wide]  Blood urea nitrogen                  18   mg/dL   7 – 25
    r5-12v1 [UK plain VURF wide]  Blood urea nitrogen                  8   mg/dL   (7 - 25)
    r5-13v1 [UK plain VFUR wide]  Blood urea nitrogen                  5   mg/dL   7 – 25

**5× miss | sodium-serum | "Sodium"**
    r5-10v1 [UK plain VFUR wide]  Sodium                               149   H   mmol/L   135 – 145
    r5-12v1 [UK plain VURF wide]  Sodium                               76   mmol/L   (135 - 145)
    r5-13v1 [UK plain VFUR wide]  Sodium                               140   mmol/L   135 – 145

**5× miss | calcium-total | "Calcium"**
    r5-10v1 [UK plain VFUR wide]  Calcium                              2.35   mmol/L   2.15 – 2.57
    r5-13v1 [UK plain VFUR wide]  Calcium                              3.77   mmol/L   2.15 – 2.57
    r5-13v2 [DE leaders VURF wide]  Calcium ...........................   3,77   mmol/l   [2,15 - 2,57]   ↑

**5× miss | phosphorus-serum | "Phosphate"**
    r5-10v1 [UK plain VFUR wide]  Phosphate                            0.97   mmol/L   0.81 – 1.45
    r5-12v1 [UK plain VURF wide]  Phosphate                            1.71   mmol/L   (0.81 - 1.45)
    r5-13v1 [UK plain VFUR wide]  Phosphate                            1.55   mmol/L   0.81 – 1.45

**5× range missed | ES bracket | lower only**
    r5-10v3 [ES twocol FVUR single]  Filtrado glomerular estimado (CKD-EPI) 81,0 mL/min/1.73m2 >60,0  →  read 81 mL/min/1.73m2
    r5-12v3 [ES plain VFUR tab]  Filtrado glomerular estimado (CKD-EPI)	107	mL/min/1.73m2	>60  →  read 107 mL/min/1.73m2
    r5-13v3 [ES plain VURF wide]  Filtrado glomerular estimado (CKD-EPI)   101   mL/min/1.73m2   >60  →  read 101 mL/min/1.73m2

**4× miss | hematocrit | "Hematocrit"**
    r5-2v4 [RO glue VURF single]  Hematocrit 41.700% [36.000 - 50.000]
    r5-4v0 [RO twocol VURF wide]  Hematocrit                           23,8   %   [36,0 - 50,0]   L
    r5-12v4 [RO plain VFUR single]  Hematocrit 47,0 % [36,0 - 50,0]

**4× date missed | RO lines**
    r5-2v4  want 2026-08-03 read null
    r5-4v0  want 2026-04-21 read null
    r5-12v4  want 2026-04-21 read null

**4× critical not caught (row missed) | platelet-count**
    r5-8v0 [UK twocol VFUR wide]  PLATELETS                            28.0   LOW   x10^9/L   150.0 – 400.0
    r5-12v1 [UK plain VURF wide]  Platelet count                       1149   x10^9/L   (150 - 400)
    r5-12v2 [DE leaders VFUR single]  THROMBOZYTEN ...................... 1149 + /nl (150 - 400)

**4× range missed | US tight | lower only**
    r5-9v0 [US plain VFRU single]  EGFR 63 >60 mL/min/1.73m2  →  read 63 mL/min/1.73m2
    r5-10v0 [US plain VFRU tab]  eGFR	81	>60 mL/min/1.73m2  →  read 81 mL/min/1.73m2
    r5-10v0 [US plain VFRU tab]  HDL Cholesterol	49	>40 mg/dL  →  read 49 mg/dL

**4× miss | potassium-serum | "Potassium"**
    r5-10v1 [UK plain VFUR wide]  Potassium                            4.2   mmol/L   3.5 – 5.1
    r5-12v1 [UK plain VURF wide]  Potassium                            4.8   mmol/L   (3.5 - 5.1)
    r5-13v1 [UK plain VFUR wide]  Potassium                            4.7   mmol/L   3.5 – 5.1

**4× miss | chloride-serum | "Chloride"**
    r5-10v1 [UK plain VFUR wide]  Chloride                             103   mmol/L   98 – 107
    r5-12v1 [UK plain VURF wide]  Chloride                             101   mmol/L   (98 - 107)
    r5-13v1 [UK plain VFUR wide]  Chloride                             106   mmol/L   98 – 107

**4× miss | total-protein | "Total protein"**
    r5-10v1 [UK plain VFUR wide]  Total protein                        71   g/L   60 – 83
    r5-12v1 [UK plain VURF wide]  Total protein                        79   g/L   (60 - 83)
    r5-22v1 [UK plain VURF tab]  Total protein	71	g/L	60 - 83

**4× miss | ldl-cholesterol | "LDL cholesterol"**
    r5-10v1 [UK plain VFUR wide]  LDL cholesterol                      1.6   mmol/L   <= 2.6
    r5-12v1 [UK plain VURF wide]  LDL cholesterol                      1.2   mmol/L   < 2.6
    r5-22v1 [UK plain VURF tab]  LDL cholesterol	2.0	mmol/L	<2.6

**4× miss | hdl-cholesterol | "HDL cholesterol"**
    r5-10v1 [UK plain VFUR wide]  HDL cholesterol                      1.27   mmol/L   >= 1.03
    r5-12v1 [UK plain VURF wide]  HDL cholesterol                      1.29   mmol/L   >= 1.03
    r5-22v1 [UK plain VURF tab]  HDL cholesterol	1.11	mmol/L	>= 1.03

**4× miss | triglycerides | "Triglycerides"**
    r5-10v1 [UK plain VFUR wide]  Triglycerides                        1.91   H   mmol/L   < 1.69
    r5-12v1 [UK plain VURF wide]  Triglycerides                        2.29   mmol/L   <1.69
    r5-22v1 [UK plain VURF tab]  Triglycerides	1.31	mmol/L	<1.69

**4× miss | creatinine-serum | "Creatinine"**
    r5-12v1 [UK plain VURF wide]  Creatinine                           38   µmol/L   (53 - 115)
    r5-13v1 [UK plain VFUR wide]  Creatinine                           217   µmol/L   53 – 115
    r5-22v1 [UK plain VURF tab]  Creatinine	43	µmol/L	53 - 115	LOW

**4× critical not caught (row missed) | sodium-serum**
    r5-12v1 [UK plain VURF wide]  Sodium                               76   mmol/L   (135 - 145)
    r5-12v2 [DE leaders VFUR single]  NATRIUM ........................... 76 - mmol/l (135 - 145)
    r5-12v4 [RO plain VFUR single]  Sodiu 76 mmol/L [135 - 145]

**4× miss | free-t4 | "Free T4"**
    r5-12v1 [UK plain VURF wide]  Free T4                              15.8   pmol/L   (10.3 - 23.2)
    r5-13v1 [UK plain VFUR wide]  Free T4                              18.4   pmol/L   10.3 – 23.2
    r5-22v1 [UK plain VURF tab]  Free T4	27.2	pmol/L	10.3 - 23.2	HIGH

**3× miss | total-bilirubin | "Bilirubina totala"**
    r5-2v4 [RO glue VURF single]  Bilirubina totala 0.600mg/dl [0.200 - 1.200]
    r5-12v4 [RO plain VFUR single]  Bilirubina totala 0,8 mg/dL [0,2 - 1,2]
    r5-22v4 [RO unitspace VFUR wide]  Bilirubina totala                    0.4   mg / dL   0.2 - 1.2

**3× miss | ast | "TGO (AST)"**
    r5-2v4 [RO glue VURF single]  TGO (AST) 38.00U/l [10.00 - 40.00]
    r5-4v0 [RO twocol VURF wide]  TGO (AST)                            14   U/L   [10 - 40]
    r5-12v4 [RO plain VFUR single]  TGO (AST) 21 U/l [10 - 40]

**3× miss | total-cholesterol | "Colesterol total"**
    r5-2v4 [RO glue VURF single]  Colesterol total 184.00mg/dL < 200.00
    r5-12v4 [RO plain VFUR single]  Colesterol total 171 mg/dL < 200
    r5-22v4 [RO unitspace VFUR wide]  Colesterol total                     180   mg / dL   <200

**3× miss | ldl-cholesterol | "LDL colesterol"**
    r5-2v4 [RO glue VURF single]  LDL colesterol 98.00mg/dL <= 100.00
    r5-12v4 [RO plain VFUR single]  LDL colesterol 46 mg/dl <100
    r5-22v4 [RO unitspace VFUR wide]  LDL colesterol                       79   mg / dl   <100

**3× miss | rbc | "Eritrocite"**
    r5-2v4 [RO glue VURF single]  Eritrocite 5.2500 10^6/µL [4.2000 - 5.9000]
    r5-12v4 [RO plain VFUR single]  Eritrocite 3,76 10^6/µL [4,20 - 5,90]
    r5-22v4 [RO unitspace VFUR wide]  Eritrocite                           4.88   mil. / µL   4.20 - 5.90

**3× miss | mcv | "Volum eritrocitar mediu (VEM)"**
    r5-2v4 [RO glue VURF single]  Volum eritrocitar mediu (VEM) 89.500fL [80.000 - 100.000]
    r5-12v4 [RO plain VFUR single]  Volum eritrocitar mediu (VEM) 53,2 fL [80,0 - 100,0]
    r5-22v4 [RO unitspace VFUR wide]  Volum eritrocitar mediu (VEM)        64.9   L   fL   80.0 - 100.0

**3× range missed | ES spaced | lower only**
    r5-3v3 [ES plain VURF single]  Colesterol HDL 61 mg/dL >= 40  →  read 61 mg/dL
    r5-22v3 [ES twocol VURF single]  Filtrado glomerular estimado (CKD-EPI) 94 mL/min/1.73m2 >60  →  read 94 mL/min/1.73m2
    r5-22v3 [ES twocol VURF single]  Colesterol HDL 43 mg/dL > 40  →  read 43 mg/dL

**3× range missed | RO bracket | two-sided**
    r5-3v4 [RO plain VFUR wide]  BILIRUBINA TOTALA                    0,4   mg/dL   [0,2 - 1,2]  →  read 0.4 mg/dL
    r5-14v0 [RO leaders VURF wide]  Hemoglobină glicozilată (HbA1c) ....   4,7   %   [4,0 - 5,6]  →  read 4.7 %
    r5-14v0 [RO leaders VURF wide]  TSH ...............................   2,190   µUI/mL   [0,40 - 4,00]  →  read 2.19 mIU/L

**3× miss | free-t3 | "T3 liber"**
    r5-4v0 [RO twocol VURF wide]  T3 liber                             4,0   pg/ml   [2,3 - 4,2]
    r5-12v4 [RO plain VFUR single]  T3 liber 3,7 pg/mL [2,3 - 4,2]
    r5-22v4 [RO unitspace VFUR wide]  T3 liber                             4.6   H   pg / mL   2.3 - 4.2

**3× date missed | DE lines**
    r5-7v2  want 2026-08-23 read null
    r5-12v2  want 2026-04-21 read null
    r5-13v2  want 2026-11-18 read null

**3× miss | wbc | "WBC"**
    r5-8v0 [UK twocol VFUR wide]  WBC                                  6.20   ×10⁹/L   4.00 – 11.00
    r5-12v1 [UK plain VURF wide]  WBC                                  6.5   ×10⁹/L   (4.0 - 11.0)
    r5-22v1 [UK plain VURF tab]  WBC	43.7	×10⁹/L	4.0 - 11.0	HIGH

**3× miss | glucose-fasting | "Glucose"**
    r5-10v1 [UK plain VFUR wide]  Glucose                              3.7   L   mmol/L   3.9 – 5.5
    r5-22v1 [UK plain VURF tab]  Glucose	4.7	mmol/L	3.9 - 5.5
    r5-23v1 [UK plain VFUR tab]  Glucose	4.8	mmol/L	3.9-5.5

**3× miss | uric-acid | "Urate"**
    r5-10v1 [UK plain VFUR wide]  Urate                                83   L   µmol/L   149 – 416
    r5-13v1 [UK plain VFUR wide]  Urate                                291   µmol/L   149 – 416
    r5-23v1 [UK plain VFUR tab]  Urate	404	µmol/L	149-416

**3× miss | rbc | "Red cell count"**
    r5-10v1 [UK plain VFUR wide]  Red cell count                       3.65   L   x10^12/L   4.20 – 5.90
    r5-12v1 [UK plain VURF wide]  Red cell count                       3.76   10*12/L   (4.20 - 5.90)
    r5-23v1 [UK plain VFUR tab]  Red cell count	4.41	x10^12/L	4.20-5.90

**3× miss | hemoglobin | "Haemoglobin"**
    r5-10v1 [UK plain VFUR wide]  Haemoglobin                          140   g/L   120 – 175
    r5-12v1 [UK plain VURF wide]  Haemoglobin                          186   g/L   (120 - 175)
    r5-22v1 [UK plain VURF tab]  Haemoglobin	168	g/L	120 - 175

**3× miss | testosterone-total | "Testosterone"**
    r5-10v1 [UK plain VFUR wide]  Testosterone                         22.1   nmol/L   9.2 – 31.8
    r5-13v1 [UK plain VFUR wide]  Testosterone                         10.7   nmol/L   9.2 – 31.8
    r5-23v1 [UK plain VFUR tab]  Testosterone	10.5	nmol/L	9.2-31.8

**3× range missed | DE bracket | two-sided**
    r5-10v2 [DE plain VFUR wide]  HbA1c                                5,5   %   [4,0 - 5,6]  →  read 5.5 %
    r5-10v2 [DE plain VFUR wide]  Harnstoff-N                          18   mg/dl   [7 - 25]  →  read 18 mg/dL
    r5-17v2 [DE plain VFUR wide]  Gesamtbilirubin                      17,1   µmol/l   [3,0 - 21,0]  →  read 1 mg/dL

**3× miss | alt | "Alanine aminotransferase"**
    r5-12v1 [UK plain VURF wide]  Alanine aminotransferase             665   U/L   (7 - 56)
    r5-22v1 [UK plain VURF tab]  Alanine aminotransferase	31	U/L	7 - 56
    r5-23v1 [UK plain VFUR tab]  Alanine aminotransferase	18	U/L	7-56

**3× critical not caught (row missed) | alt**
    r5-12v1 [UK plain VURF wide]  Alanine aminotransferase             665   U/L   (7 - 56)
    r5-12v2 [DE leaders VFUR single]  ALT (GPT) ......................... 665 + U/l (7 - 56)
    r5-12v4 [RO plain VFUR single]  TGP (ALT) 665 U/L [7 - 56]

**3× miss | ast | "AST"**
    r5-12v1 [UK plain VURF wide]  AST                                  21   U/L   (10 - 40)
    r5-14v2 [UK plain VURF wide]  AST                                  45   U/L   10-40   HIGH
    r5-23v1 [UK plain VFUR tab]  AST	63	H	U/L	10-40

**3× miss | total-cholesterol | "Total cholesterol"**
    r5-12v1 [UK plain VURF wide]  Total cholesterol                    4.4   mmol/L   <5.2
    r5-22v1 [UK plain VURF tab]  Total cholesterol	4.7	mmol/L	<= 5.2
    r5-23v1 [UK plain VFUR tab]  Total cholesterol	4.0	mmol/L	< 5.2

**3× miss | hematocrit | "Haematocrit"**
    r5-12v1 [UK plain VURF wide]  Haematocrit                          0.47   L/L   (0.36 - 0.50)
    r5-22v1 [UK plain VURF tab]  Haematocrit	0.44	L/L	0.36 - 0.50
    r5-23v1 [UK plain VFUR tab]  Haematocrit	0.34	L	L/L	0.36-0.50

**3× miss | free-t3 | "Free T3"**
    r5-12v1 [UK plain VURF wide]  Free T3                              5.7   pmol/L   (3.5 - 6.5)
    r5-22v1 [UK plain VURF tab]  Free T3	7.1	pmol/L	3.5 - 6.5	HIGH
    r5-23v1 [UK plain VFUR tab]  Free T3	3.7	pmol/L	3.5-6.5

**3× miss | free-t4 | "FT4"**
    r5-12v2 [DE leaders VFUR single]  FT4 ............................... 15,8 pmol/l (10,3 - 23,2)
    r5-12v4 [RO plain VFUR single]  FT4 1,23 ng/dL [0,80 - 1,80]
    r5-22v4 [RO unitspace VFUR wide]  FT4                                  2.11   H   ng / dL   0.80 - 1.80

**3× range missed | DE paren | upper only**
    r5-19v2 [DE wrap VURF wide]  hsCRP                                3,2   mg/l   < 3,0   H  →  read 3.2 mg/L H
    r5-19v2 [DE wrap VURF wide]  Gesamtcholesterin ⏎         197   mg/dl   < 200  →  read 197 mg/dL
    r5-19v2 [DE wrap VURF wide]  Triglyceride                         129   mg/dl   bis 150  →  read 129 mg/dL

**3× range missed | RO paren | upper only**
    r5-19v4 [RO twocol VFUR wide]  Proteina C reactivă înalt sensibilă (hs-CRP)   3.2   H   mg/L   <3.0  →  read 3.2 mg/L H
    r5-19v4 [RO twocol VFUR wide]  Colesterol total                     197   mg/dL   <200  →  read 197 mg/dL
    r5-19v4 [RO twocol VFUR wide]  Trigliceride                         129   mg/dl   <150  →  read 129 mg/dL

**3× range missed | ES spaced | upper only**
    r5-22v3 [ES twocol VURF single]  Colesterol total 180 mg/dL <200  →  read 180 mg/dL
    r5-22v3 [ES twocol VURF single]  Colesterol LDL 79 mg/dL Hasta 100  →  read 79 mg/dL
    r5-22v3 [ES twocol VURF single]  Triglicéridos 116 mg/dL < 150  →  read 116 mg/dL

**2× range missed | UK spaced | lower only**
    r5-1v1 [UK plain VFUR single]  eGFR 107 mL/min/1.73m2 > 60  →  read 107 mL/min/1.73m2
    r5-9v1 [UK glue VFUR wide]  eGFR                                 63mL/min/1.73m2   >= 60  →  read 63 mL/min/1.73m2

**2× miss | alt | "ALT (TGP)"**
    r5-2v4 [RO glue VURF single]  ALT (TGP) 53.00U/L [7.00 - 56.00]
    r5-4v0 [RO twocol VURF wide]  ALT (TGP)                            4   U/l   [7 - 56]   L

**2× miss | alp | "Fosfatază alcalină"**
    r5-2v4 [RO glue VURF single]  Fosfatază alcalină 133.00U/l [44.00 - 147.00]
    r5-4v0 [RO twocol VURF wide]  Fosfatază alcalină                   136   U/l   [44 - 147]

**2× miss | hdl-cholesterol | "HDL colesterol"**
    r5-2v4 [RO glue VURF single]  HDL colesterol 42.00mg/dL >= 40.00
    r5-22v4 [RO unitspace VFUR wide]  HDL colesterol                       43   mg / dL   > 40

**2× miss | hemoglobin | "Hemoglobina"**
    r5-2v4 [RO glue VURF single]  Hemoglobina 15.200g/dl [12.000 - 17.500]
    r5-22v4 [RO unitspace VFUR wide]  Hemoglobina                          16.8   g / dl   12.0 - 17.5

**2× miss | platelet-count | "Număr de trombocite"**
    r5-2v4 [RO glue VURF single]  Număr de trombocite 246.00mii/µL [150.00 - 400.00]
    r5-12v4 [RO plain VFUR single]  Număr de trombocite 1149 10^3/µL [150 - 400]

**2× miss | wbc | "Leucocite"**
    r5-4v0 [RO twocol VURF wide]  Leucocite                            2,4   mii/µL   [4,0 - 11,0]   L
    r5-12v4 [RO plain VFUR single]  Leucocite 6,5 mii/µL [4,0 - 11,0]

**2× miss | hemoglobin | "Hemoglobină"**
    r5-4v0 [RO twocol VURF wide]  Hemoglobină                          15,5   g/dL   [12,0 - 17,5]
    r5-12v4 [RO plain VFUR single]  Hemoglobină 18,6 g/dL [12,0 - 17,5]

**2× miss | glucose-fasting | "Glukose"**
    r5-7v2 [DE plain VFUR wide]  Glukose                              4,0   mmol/l   3,9-5,5
    r5-13v2 [DE leaders VURF wide]  Glukose ...........................   1,7   mmol/l   [3,9 - 5,5]   ↓

**2× miss | creatinine-serum | "Kreatinin"**
    r5-7v2 [DE plain VFUR wide]  Kreatinin                            55   µmol/l   53-115
    r5-13v2 [DE leaders VURF wide]  Kreatinin .........................   217   µmol/l   [53 - 115]   ↑

**2× miss | blood-urea-nitrogen | "Harnstoff-N"**
    r5-7v2 [DE plain VFUR wide]  Harnstoff-N                          20   mg/dl   7-25
    r5-13v2 [DE leaders VURF wide]  Harnstoff-N .......................   5   mg/dl   [7 - 25]   ↓

**2× miss | uric-acid | "Harnsäure"**
    r5-7v2 [DE plain VFUR wide]  Harnsäure                            190   µmol/l   149-416
    r5-13v2 [DE leaders VURF wide]  Harnsäure .........................   291   µmol/l   [149 - 416]

**2× miss | sodium-serum | "Natrium"**
    r5-7v2 [DE plain VFUR wide]  Natrium                              130   ↓   mmol/l   135-145
    r5-13v2 [DE leaders VURF wide]  Natrium ...........................   140   mmol/l   [135 - 145]

…and 144 smaller groups.
