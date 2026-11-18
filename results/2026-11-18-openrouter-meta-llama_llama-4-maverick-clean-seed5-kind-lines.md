# Lab-report reader stress test

97 generated reports, 1792 rows with a known answer, seed 5, only kind=lines. Read in 0.0 s (0.1 ms a report).

| Outcome | Rows | Share | 95% interval |
|---|---|---|---|
| ok | 1723 | 96.1% | 95.16–96.95% |
| unit | 0 | 0.0% | 0.00–0.21% |
| unconverted | 7 | 0.4% | 0.19–0.80% |
| wrong | 59 | 3.3% | 2.56–4.22% |
| miss | 3 | 0.2% | 0.06–0.49% |

- **Critical values:** 31 of 31 caught (100.0%, interval 88.97–100.00%); 0 lost because the row was not read, 0 because it was misread. False critical alarms: 0.
- **Rows that are not on the report:** 0 (of 1789 rows read).
- **Lab's flag:** ok 1622, invented 105, missed 2, wrong 1.
- **Reference range:** ok 1697, missed 5, wrong 28.
- **Collection date:** ok 92, wrong 5.
- **Wrong values printed in a unit that needs converting:** 57 of 59 (96.6%).
- **Format invariance** (5 printings of each set of results): of 438 markers, read right in every printing 375 (85.6%), right in some printings but not others 63 (14.4%), never right 0. Critical results caught in every printing: 8 of 8.

## By locale
| locale | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| UK | 312 | 85.6% | 0.0% | 2.2% | 12.2% | 0.0% |
| DE | 380 | 94.5% | 0.0% | 0.0% | 5.5% | 0.0% |
| RO | 338 | 99.4% | 0.0% | 0.0% | 0.0% | 0.6% |
| ES | 370 | 99.7% | 0.0% | 0.0% | 0.0% | 0.3% |
| US | 392 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By kind
| kind | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| lines | 1792 | 96.1% | 0.0% | 0.4% | 3.3% | 0.2% |

## By variant
| variant | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| leaders | 88 | 89.8% | 0.0% | 0.0% | 10.2% | 0.0% |
| plain | 1131 | 95.8% | 0.0% | 0.0% | 4.0% | 0.2% |
| unitspace | 176 | 96.0% | 0.0% | 4.0% | 0.0% | 0.0% |
| twocol | 191 | 97.4% | 0.0% | 0.0% | 2.1% | 0.5% |
| glue | 117 | 99.1% | 0.0% | 0.0% | 0.9% | 0.0% |
| colon | 34 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| wrap | 55 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By units
| units | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| SI | 438 | 84.9% | 0.0% | 1.6% | 13.5% | 0.0% |
| conventional | 1354 | 99.8% | 0.0% | 0.0% | 0.0% | 0.2% |

## By decimal
| decimal | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| point | 818 | 94.5% | 0.0% | 0.9% | 4.6% | 0.0% |
| comma | 974 | 97.5% | 0.0% | 0.0% | 2.2% | 0.3% |

## By sep
| sep | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| single | 479 | 96.0% | 0.0% | 1.5% | 1.9% | 0.6% |
| wide | 1133 | 96.1% | 0.0% | 0.0% | 3.9% | 0.0% |
| tab | 180 | 96.7% | 0.0% | 0.0% | 3.3% | 0.0% |

## By order
| order | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| VURF | 476 | 92.6% | 0.0% | 1.5% | 5.9% | 0.0% |
| VFUR | 1030 | 96.8% | 0.0% | 0.0% | 3.0% | 0.2% |
| FVUR | 79 | 98.7% | 0.0% | 0.0% | 0.0% | 1.3% |
| VFRU | 207 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By marker
| marker | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| vitamin-b12 | 53 | 77.4% | 0.0% | 1.9% | 20.8% | 0.0% |
| folate-serum | 49 | 77.6% | 0.0% | 2.0% | 20.4% | 0.0% |
| free-t3 | 44 | 79.5% | 0.0% | 0.0% | 20.5% | 0.0% |
| hba1c | 46 | 82.6% | 0.0% | 0.0% | 17.4% | 0.0% |
| vitamin-d-25-oh | 46 | 84.8% | 0.0% | 2.2% | 13.0% | 0.0% |
| free-t4 | 36 | 91.7% | 0.0% | 0.0% | 8.3% | 0.0% |
| testosterone-total | 50 | 92.0% | 0.0% | 2.0% | 6.0% | 0.0% |
| hematocrit | 56 | 94.6% | 0.0% | 1.8% | 3.6% | 0.0% |
| blood-urea-nitrogen | 42 | 95.2% | 0.0% | 0.0% | 4.8% | 0.0% |
| mchc | 48 | 95.8% | 0.0% | 2.1% | 2.1% | 0.0% |
| calcium-total | 33 | 97.0% | 0.0% | 0.0% | 3.0% | 0.0% |
| total-cholesterol | 34 | 97.1% | 0.0% | 0.0% | 2.9% | 0.0% |
| uric-acid | 36 | 97.2% | 0.0% | 0.0% | 2.8% | 0.0% |
| phosphorus-serum | 38 | 97.4% | 0.0% | 0.0% | 2.6% | 0.0% |
| ldl-cholesterol | 41 | 97.6% | 0.0% | 0.0% | 0.0% | 2.4% |
| mch | 42 | 97.6% | 0.0% | 0.0% | 0.0% | 2.4% |
| rbc | 51 | 98.0% | 0.0% | 0.0% | 0.0% | 2.0% |
| hemoglobin | 58 | 98.3% | 0.0% | 1.7% | 0.0% | 0.0% |
| total-bilirubin | 56 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| alt | 62 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| alp | 53 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ggt | 48 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| serum-iron | 19 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ferritin | 24 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| transferrin-saturation | 24 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| tsh | 39 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| glucose-fasting | 43 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| creatinine-serum | 31 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| egfr | 43 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| sodium-serum | 46 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| potassium-serum | 38 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| chloride-serum | 34 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| magnesium-serum | 41 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| albumin-serum | 31 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hs-crp | 41 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| wbc | 46 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mcv | 48 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| platelet-count | 47 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ast | 46 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hdl-cholesterol | 48 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| triglycerides | 43 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-protein | 38 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## What went wrong, most common first

**55× flag invented | none VFUR**
    r5-1v1 [UK plain VFUR single]  Creatinine 149 µmol/L 53 - 115  →  read 1.68 mg/dL [0.6, 1.3] H
    r5-1v1 [UK plain VFUR single]  Potassium 2.8 mmol/L 3.5 - 5.1  →  read 2.8 mmol/L [3.5, 5.1] L
    r5-1v1 [UK plain VFUR single]  Vitamin D 60 nmol/L 75 - 250  →  read 24 ng/mL [30, 100] L

**37× flag invented | none VURF**
    r5-0v2 [DE twocol VURF tab]  Alkalische Phosphatase	23	U/l	[44 - 147]  →  read 23 U/L [44, 147] L
    r5-0v2 [DE twocol VURF tab]  TSH	0,22	mIU/l	[0,40 - 4,00]  →  read 0.22 mIU/L [0.4, 4] L
    r5-0v4 [RO plain VURF single]  FOSFATAZA ALCALINA 23 U/L 44 – 147  →  read 23 U/L [44, 147] L

**9× flag invented | none VFRU**
    r5-16v0 [US colon VFRU wide]  GLUCOSE:                             57   70-99 mg/dL  →  read 57 mg/dL [70, 99] L
    r5-16v0 [US colon VFRU wide]  HEMOGLOBIN A1C:                      7.3   4.0-5.6 %  →  read 7.3 % [4, 5.6] H
    r5-16v0 [US colon VFRU wide]  EGFR:                                38   >60 mL/min/1.73m2  →  read 38 mL/min/1.73m2 [, 60] L

**7× wrong | vitamin-b12 | point plain | unit pmol/L**
    r5-1v1 [UK plain VFUR single]  Vitamin B12 556 pmol/L 148 - 664  →  read 556 pg/mL [148, 664]
    r5-10v1 [UK plain VFUR wide]  Vitamin B12                          501   pmol/L   148 – 664  →  read 501 pg/mL [148, 664]
    r5-11v2 [UK plain VURF single]  VITAMIN B12 94 pmol/L 148 – 664  →  read 94 pg/mL [148, 664] L

**7× wrong | folate-serum | point plain | unit nmol/L**
    r5-1v1 [UK plain VFUR single]  Folate 34.7 nmol/L 6.8 - 45.3  →  read 13.8 ng/mL [2.7, 17.9]
    r5-10v1 [UK plain VFUR wide]  Folate                               8.2   nmol/L   6.8 – 45.3  →  read 8.2 ng/mL [6.8, 45.3]
    r5-11v2 [UK plain VURF single]  FOLATE 47.4 nmol/L 6.8 – 45.3  →  read 11.85 ng/mL [1.7, 11.33] H

**5× range wrong | UK dash | two-sided**
    r5-10v1 [UK plain VFUR wide]  HbA1c                                37   mmol/mol   20 – 38  →  read 5.5 % [4.3, 5.6]
    r5-13v1 [UK plain VFUR wide]  Creatinine                           217   µmol/L   53 – 115  →  read 2.47 mg/dL [0.6, 1.33] H
    r5-13v1 [UK plain VFUR wide]  Testosterone                         10.7   nmol/L   9.2 – 31.8  →  read 308.6 ng/dL [275.7, 915.7] L

**5× wrong | free-t3 | point plain | unit pmol/L**
    r5-12v1 [UK plain VURF wide]  Free T3                              5.7   pmol/L   (3.5 - 6.5)  →  read 0.88 pg/mL [0.54, 1]
    r5-14v2 [UK plain VURF wide]  FREE T3                              2.5   pmol/L   3.5-6.5   LOW  →  read 1.52 pg/mL [2.13, 3.96] L
    r5-18v2 [UK plain VURF wide]  Free T3                              9.4   pmol/L   3.5 – 6.5   H  →  read 1.46 pg/mL [0.54, 1] H

**4× wrong | hba1c | point plain | unit mmol/mol**
    r5-1v1 [UK plain VFUR single]  HbA1c 30 mmol/mol 20 - 38  →  read 7 % [4.3, 8.2]
    r5-12v1 [UK plain VURF wide]  HbA1c                                34   mmol/mol   (20 - 38)  →  read 5.2 % [4.3, 5.6]
    r5-13v1 [UK plain VFUR wide]  HbA1c                                16   mmol/mol   20 – 38  →  read 2.6 % [4.3, 6.1] L

**4× range wrong | UK spaced | two-sided**
    r5-1v1 [UK plain VFUR single]  Testosterone 31.2 nmol/L 9.2 - 31.8  →  read 900 ng/dL [276, 955]
    r5-9v1 [UK glue VFUR wide]  Uric acid                            399µmol/L   149 - 416  →  read 6.7 mg/dL [2.5, 6.9]
    r5-22v1 [UK plain VURF tab]  HbA1c	37	mmol/mol	20 - 38  →  read 5.5 % [4.3, 5.6]

**4× wrong | vitamin-d-25-oh | point plain | unit nmol/L**
    r5-10v1 [UK plain VFUR wide]  Vitamin D                            95   nmol/L   75 – 250  →  read 23.8 ng/mL [18.8, 62.6]
    r5-11v2 [UK plain VURF single]  25-OH VITAMIN D 55 nmol/L 75 – 250  →  read 13.75 ng/mL [18.75, 62.5] L
    r5-14v2 [UK plain VURF wide]  25-OH VITAMIN D                      225   nmol/L   75-250  →  read 9.03 ng/mL [3, 10]

**3× range wrong | DE spaced | two-sided**
    r5-9v2 [DE plain VFUR wide]  Harnsäure                            399   µmol/l   149 - 416  →  read 6.7 mg/dL [2.5, 6.9]
    r5-18v3 [DE unitspace VFUR single]  ALT (GPT) 5 * U / l 7 - 56  →  read 5 U/L [17, 56]
    r5-18v3 [DE unitspace VFUR single]  GGT 42 U / l 8 - 61  →  read 42 U/L [18, 61]

**3× range wrong | UK tight | two-sided**
    r5-14v2 [UK plain VURF wide]  FASTING GLUCOSE                      3.7   mmol/L   3.9-5.5   LOW  →  read 66.654 mg/dL [70.2, 90] L
    r5-23v1 [UK plain VFUR tab]  HbA1c (IFCC)	34	mmol/mol	20-38  →  read 5.3 % [4, 6]
    r5-23v1 [UK plain VFUR tab]  Urate	404	µmol/L	149-416  →  read 6.8 mg/dL [2.5, 6.9]

**3× range wrong | ES spaced | upper only**
    r5-22v3 [ES twocol VURF single]  Colesterol total 180 mg/dL <200  →  read 180 mg/dL [200, ]
    r5-22v3 [ES twocol VURF single]  Colesterol LDL 79 mg/dL Hasta 100  →  read 79 mg/dL [100, ]
    r5-22v3 [ES twocol VURF single]  Triglicéridos 116 mg/dL < 150  →  read 116 mg/dL [150, ]

**2× flag invented | star VFUR**
    r5-1v4 [RO plain VFUR wide]  ERITROCITE                           5,3500   *10^6/uL   4,2000-5,9000  →  read 5.35 Million/uL [4.2, 5.9] H
    r5-22v2 [DE glue VFUR wide]  HDL-Cholesterin                      43mg/dl   >= 40  →  read 43 mg/dL [, 40] H

**2× date wrong | US lines**
    r5-2v1  want 2026-08-03 read 2026-03-08
    r5-6v1  want 2026-08-01 read 2026-01-08

**2× wrong | free-t4 | comma plain | unit pmol/l**
    r5-5v3 [DE plain VURF wide]  fT4                                  16,5   pmol/l   10,3 - 23,2  →  read 1.19 ng/dL [0.74, 1.67]
    r5-7v2 [DE plain VFUR wide]  fT4                                  20,1   pmol/l   10,3-23,2  →  read 2.71 ng/dL [1.3, 3.2]

**2× wrong | free-t3 | comma plain | unit pmol/l**
    r5-5v3 [DE plain VURF wide]  Freies T3                            7,4   pmol/l   3,5 - 6,5   ↑  →  read 7.4 pg/mL [3.5, 6.5] H
    r5-7v2 [DE plain VFUR wide]  fT3                                  3,7   pmol/l   3,5-6,5  →  read 5.7 pg/mL [2.3, 4.2]

**2× wrong | vitamin-b12 | comma plain | unit pmol/l**
    r5-5v3 [DE plain VURF wide]  Vitamin B12                          591   pmol/l   148 - 664  →  read 591 pg/mL [148, 664]
    r5-7v2 [DE plain VFUR wide]  Vitamin B12                          777   ↑   pmol/l   148-664  →  read 777 pg/mL [148, 664] H

**2× wrong | hba1c | comma plain | unit mmol/mol**
    r5-7v2 [DE plain VFUR wide]  HbA1c                                21   mmol/mol   20-38  →  read 5 % [4.3, 6.1]
    r5-9v2 [DE plain VFUR wide]  HbA1c                                27   mmol/mol   20 - 38  →  read 4.3 % [4, 6.1]

**2× range wrong | DE paren | two-sided**
    r5-12v2 [DE leaders VFUR single]  HBA1C ............................. 34 mmol/mol (20 - 38)  →  read 5.3 % [4.3, 5.6]
    r5-12v2 [DE leaders VFUR single]  KREATININ ......................... 38 - µmol/l (53 - 115)  →  read 0.43 mg/dL [0.6, 1.33] L

**1× range missed | UK spaced | lower only**
    r5-1v1 [UK plain VFUR single]  eGFR 107 mL/min/1.73m2 > 60  →  read 107 mL/min/1.73m2

**1× range missed | ES dash | lower only**
    r5-1v3 [ES unitspace VURF wide]  Filtrado glomerular estimado (CKD-EPI)   107   mL / min/1.73m2   >60  →  read 107 mL/min/1.73m2

**1× date wrong | ES lines**
    r5-2v0  want 2026-08-03 read 2026-03-08

**1× wrong | free-t3 | point twocol | unit pmol/L**
    r5-4v2 [UK twocol VURF wide]  Free T3                              6.1   pmol/L   (3.5 - 6.5)  →  read 0.95 pg/mL [0.55, 1.01]

**1× flag missed | arrows VURF**
    r5-5v3 [DE plain VURF wide]  Leukozyten                           19,0   G/l   4,0 - 11,0   ↑  →  read 19 Thousand/uL [4, 11]

**1× wrong | vitamin-d-25-oh | comma plain | unit nmol/l**
    r5-5v3 [DE plain VURF wide]  Vitamin D (25-OH)                    210   nmol/l   75 - 250  →  read 8.43 ng/mL [3, 10]

**1× wrong | testosterone-total | comma plain | unit nmol/l**
    r5-5v3 [DE plain VURF wide]  Testosteron                          17,2   nmol/l   9,2 - 31,8  →  read 17.2 ng/dL [9.2, 31.8]

**1× flag invented | star VURF**
    r5-6v2 [UK unitspace VURF single]  White cell count 10.1 x10^9 / L 4.0 - 11.0  →  read 10.1 Thousand/uL [4, 11] L

**1× unconverted | hemoglobin | g/L**
    r5-6v2 [UK unitspace VURF single]  Haemoglobin 248 g / L 120 - 175 *  →  read 248 g/L [120, 175]

**1× unconverted | hematocrit | L/L**
    r5-6v2 [UK unitspace VURF single]  Haematocrit 0.58 L / L 0.36 - 0.50 *  →  read 0.58 L/L [0.36, 0.5]

**1× unconverted | mchc | g/L**
    r5-6v2 [UK unitspace VURF single]  MCHC 359 g / L 320 - 360  →  read 359 g/L [320, 360]

**1× unconverted | vitamin-d-25-oh | nmol/L**
    r5-6v2 [UK unitspace VURF single]  Vitamin D 52 nmol / L 75 - 250 *  →  read 52 nmol/L [75, 250]

**1× unconverted | vitamin-b12 | pmol/L**
    r5-6v2 [UK unitspace VURF single]  Vitamin B12 832 pmol / L 148 - 664 *  →  read 832 pmol/L [148, 664]

**1× unconverted | folate-serum | nmol/L**
    r5-6v2 [UK unitspace VURF single]  Serum folate 41.0 nmol / L 6.8 - 45.3  →  read 41 nmol/L [6.8, 45.3]

**1× unconverted | testosterone-total | nmol/L**
    r5-6v2 [UK unitspace VURF single]  Testosterone 6.4 nmol / L 9.2 - 31.8 *  →  read 6.4 nmol/L [9.2, 31.8]

**1× date wrong | UK lines**
    r5-6v2  want 2026-08-01 read 2026-01-08

**1× date wrong | DE lines**
    r5-6v3  want 2026-08-01 read 2026-01-08

**1× flag wrong | arrows VFUR**
    r5-7v2 [DE plain VFUR wide]  Gesamtprotein                        126   ↑   g/l   60-83  →  read 12.6 g/dL [6, 8.3] L

**1× wrong | hematocrit | comma plain | unit L/l**
    r5-7v2 [DE plain VFUR wide]  Hämatokrit                           0,49   L/l   0,36-0,50  →  read 0.49 % [0.36, 0.5]

**1× wrong | folate-serum | comma plain | unit nmol/l**
    r5-7v2 [DE plain VFUR wide]  Folsäure                             29,5   nmol/l   6,8-45,3  →  read 29.5 ng/mL [6.8, 45.3]

**1× wrong | vitamin-d-25-oh | point twocol | unit nmol/L**
    r5-8v0 [UK twocol VFUR wide]  25-OH VITAMIN D                      102.3   nmol/L   75.0 – 250.0  →  read 25.6 ng/mL [18.8, 62.5]

**1× wrong | vitamin-b12 | point twocol | unit pmol/L**
    r5-8v0 [UK twocol VFUR wide]  VITAMIN B12                          217.7   pmol/L   148.0 – 664.0  →  read 181 pg/mL [148, 664]

**1× wrong | folate-serum | point twocol | unit nmol/L**
    r5-8v0 [UK twocol VFUR wide]  SERUM FOLATE                         21.98   nmol/L   6.80 – 45.30  →  read 21.98 ng/mL [6.8, 45.3]

**1× wrong | hba1c | point glue | unit mmol/mol**
    r5-9v1 [UK glue VFUR wide]  HbA1c (IFCC)                         27mmol/mol   20 - 38  →  read 4.5 % [4.3, 5.6]

**1× range wrong | UK spaced | upper only**
    r5-9v1 [UK glue VFUR wide]  Triglycerides                        1.39mmol/L   <= 1.69  →  read 123 mg/dL [, 151.5]

**1× flag invented | plusminus VFUR**
    r5-9v2 [DE plain VFUR wide]  eGFR (CKD-EPI)                       63   mL/min/1.73m2   >= 60  →  read 63 mL/min/1.73m2 [60, ] L

**1× range wrong | DE spaced | lower only**
    r5-9v2 [DE plain VFUR wide]  HDL-Cholesterin                      1,29   mmol/l   > 1,03  →  read 50 mg/dL [39, ]

**1× range missed | RO dash | lower only**
    r5-9v4 [RO plain VURF wide]  eGFR                                 63   mL/min/1.73m2   >60  →  read 63 mL/min/1.73m2

**1× wrong | uric-acid | point plain | unit µmol/L**
    r5-10v1 [UK plain VFUR wide]  Urate                                83   L   µmol/L   149 – 416  →  read 4.9 mg/dL [4.4, 24.4] L

**1× miss | rbc | "Hematíes"**
    r5-10v3 [ES twocol FVUR single]  Hematíes * 3,650 x10^6/µL [4,200 - 5,900]

**1× wrong | blood-urea-nitrogen | point plain | unit mg/dL**
    r5-12v1 [UK plain VURF wide]  Blood urea nitrogen                  8   mg/dL   (7 - 25)  →  read 22.4 mg/dL [7, 25]

**1× wrong | mchc | point plain | unit g/L**
    r5-12v1 [UK plain VURF wide]  MCHC                                 327   g/L   (320 - 360)  →  read 39.6 g/dL [32, 36] H

**1× range wrong | UK paren | two-sided**
    r5-12v1 [UK plain VURF wide]  Free T4                              15.8   pmol/L   (10.3 - 23.2)  →  read 1.22 ng/dL [0.8, 1.79]

**1× wrong | blood-urea-nitrogen | comma leaders | unit mg/dl**
    r5-12v2 [DE leaders VFUR single]  HARNSTOFF-N ....................... 8 mg/dl (7 - 25)  →  read 22.4 mg/dL [19.6, 70]

**1× wrong | hematocrit | comma leaders | unit L/l**
    r5-12v2 [DE leaders VFUR single]  HÄMATOKRIT ........................ 0,47 L/l (0,36 - 0,50)  →  read 0.47 % [0.36, 0.5]

**1× wrong | free-t3 | comma leaders | unit pmol/l**
    r5-12v2 [DE leaders VFUR single]  FREIES T3 ......................... 5,7 pmol/l (3,5 - 6,5)  →  read 0.88 pg/mL [0.54, 1]

**1× miss | ldl-cholesterol | "LDL colesterol"**
    r5-12v4 [RO plain VFUR single]  LDL colesterol 46 mg/dl <100

**1× wrong | hba1c | comma leaders | unit mmol/mol**
    r5-13v2 [DE leaders VURF wide]  HbA1c .............................   16   mmol/mol   [20 - 38]   ↓  →  read 7.04 % [4.3, 6.1] H

**1× range wrong | DE bracket | two-sided**
    r5-13v2 [DE leaders VURF wide]  Calcium ...........................   3,77   mmol/l   [2,15 - 2,57]   ↑  →  read 15.08 mg/dL [9.96, 10.28] H

**1× wrong | phosphorus-serum | comma leaders | unit mmol/l**
    r5-13v2 [DE leaders VURF wide]  Phosphat ..........................   1,55   mmol/l   [0,81 - 1,45]   ↑  →  read 5 mg/dL [2.6, 4.6] H

**1× wrong | free-t4 | comma leaders | unit pmol/l**
    r5-13v2 [DE leaders VURF wide]  Freies T4 .........................   18,4   pmol/l   [10,3 - 23,2]  →  read 1.38 ng/dL [0.8, 1.7]

**1× wrong | vitamin-b12 | comma leaders | unit pmol/l**
    r5-13v2 [DE leaders VURF wide]  Vitamin B12 .......................   399   pmol/l   [148 - 664]  →  read 911.1 pg/mL [211.8, 946.3]

**1× wrong | folate-serum | comma leaders | unit nmol/l**
    r5-13v2 [DE leaders VURF wide]  Folsäure ..........................   22,4   nmol/l   [6,8 - 45,3]  →  read 5.38 ng/mL [1.63, 10.87]

**1× wrong | testosterone-total | comma leaders | unit nmol/l**
    r5-13v2 [DE leaders VURF wide]  Testosteron .......................   10,7   nmol/l   [9,2 - 31,8]  →  read 30.9 ng/dL [26.6, 92]

**1× wrong | testosterone-total | point plain | unit nmol/L**
    r5-14v2 [UK plain VURF wide]  TESTOSTERONE                         10.4   nmol/L   9.2-31.8  →  read 3.12 ng/dL [2.88, 9.54]

**1× range wrong | US tight | lower only**
    r5-16v0 [US colon VFRU wide]  EGFR:                                38   >60 mL/min/1.73m2  →  read 38 mL/min/1.73m2 [, 60] L

**1× range wrong | ES bracket | lower only**
    r5-16v3 [ES plain FVUR single]  Filtrado glomerular estimado (CKD-EPI) * 38,00 mL/min/1.73m2 > 60,00  →  read 38 mL/min/1.73m2 [, 60] L

**1× miss | mch | "Hemoglobină eritrocitară medie (HEM)"**
    r5-16v4 [RO plain VFUR single]  Hemoglobină eritrocitară medie (HEM) 28,400 pg 27,000 – 33,000

**1× range wrong | RO paren | lower only**
    r5-19v4 [RO twocol VFUR wide]  Rata de filtrare glomerulară estimată   109   mL/min/1.73m2   >60  →  read 109 mL/min/1.73m2 [, 60]

**1× wrong | total-cholesterol | point plain | unit mmol/L**
    r5-22v1 [UK plain VURF tab]  Total cholesterol	4.7	mmol/L	<= 5.2  →  read 183.3 mg/dL [, 200]

**1× range wrong | DE bracket | lower only**
    r5-22v2 [DE glue VFUR wide]  HDL-Cholesterin                      43mg/dl   >= 40  →  read 43 mg/dL [, 40] H

**1× flag missed | HL VURF**
    r5-22v3 [ES twocol VURF single]  Creatinina 0,49 mg/dL 0,60 - 1,30 L  →  read 0.49 mg/dL [0.6, 1.3]

**1× range missed | RO spaced | lower only**
    r5-22v4 [RO unitspace VFUR wide]  eGFR                                 94   mL / min/1.73m2   >60  →  read 94 mL/min/1.73m2

**1× range missed | US spaced | lower only**
    r5-23v0 [US plain VFUR wide]  eGFR                                 86   mL/min/1.73m2   > OR = 60  →  read 86 mL/min/1.73m2

**1× wrong | calcium-total | point plain | unit mmol/L**
    r5-23v1 [UK plain VFUR tab]  Calcium	2.22	mmol/L	2.15-2.57  →  read 8.8 mg/dL [8.6, 10.3]
