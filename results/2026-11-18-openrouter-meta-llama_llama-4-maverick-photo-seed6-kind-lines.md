# Lab-report reader stress test

43 generated reports, 820 rows with a known answer, seed 6, only kind=lines. Read in 0.0 s (0.2 ms a report).

| Outcome | Rows | Share | 95% interval |
|---|---|---|---|
| ok | 773 | 94.3% | 92.46–95.66% |
| unit | 0 | 0.0% | 0.00–0.47% |
| unconverted | 3 | 0.4% | 0.12–1.07% |
| wrong | 42 | 5.1% | 3.81–6.85% |
| miss | 2 | 0.2% | 0.07–0.88% |

- **Critical values:** 9 of 9 caught (100.0%, interval 70.08–100.00%); 0 lost because the row was not read, 0 because it was misread. False critical alarms: 0.
- **Rows that are not on the report:** 0 (of 818 rows read).
- **Lab's flag:** invented 50, ok 725, missed 1.
- **Reference range:** ok 759, wrong 16, missed 1.
- **Collection date:** ok 43.
- **Wrong values printed in a unit that needs converting:** 41 of 42 (97.6%).
- **Format invariance** (5 printings of each set of results): of 193 markers, read right in every printing 156 (80.8%), right in some printings but not others 37 (19.2%), never right 0. Critical results caught in every printing: 2 of 2.

## By locale
| locale | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| UK | 193 | 81.3% | 0.0% | 1.6% | 17.1% | 0.0% |
| DE | 120 | 93.3% | 0.0% | 0.0% | 6.7% | 0.0% |
| RO | 176 | 98.9% | 0.0% | 0.0% | 0.6% | 0.6% |
| ES | 156 | 99.4% | 0.0% | 0.0% | 0.0% | 0.6% |
| US | 175 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By kind
| kind | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| lines | 820 | 94.3% | 0.0% | 0.4% | 5.1% | 0.2% |

## By variant
| variant | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| unitspace | 33 | 75.8% | 0.0% | 0.0% | 24.2% | 0.0% |
| glue | 76 | 85.5% | 0.0% | 0.0% | 14.5% | 0.0% |
| twocol | 60 | 90.0% | 0.0% | 5.0% | 5.0% | 0.0% |
| plain | 508 | 95.9% | 0.0% | 0.0% | 3.7% | 0.4% |
| colon | 85 | 98.8% | 0.0% | 0.0% | 1.2% | 0.0% |
| wrap | 58 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By units
| units | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| SI | 230 | 80.9% | 0.0% | 1.3% | 17.8% | 0.0% |
| conventional | 590 | 99.5% | 0.0% | 0.0% | 0.2% | 0.3% |

## By decimal
| decimal | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| point | 458 | 91.7% | 0.0% | 0.7% | 7.4% | 0.2% |
| comma | 362 | 97.5% | 0.0% | 0.0% | 2.2% | 0.3% |

## By sep
| sep | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| wide | 545 | 93.6% | 0.0% | 0.6% | 5.7% | 0.2% |
| tab | 65 | 95.4% | 0.0% | 0.0% | 3.1% | 1.5% |
| single | 210 | 95.7% | 0.0% | 0.0% | 4.3% | 0.0% |

## By order
| order | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| VURF | 215 | 92.1% | 0.0% | 0.0% | 7.4% | 0.5% |
| VFUR | 481 | 93.8% | 0.0% | 0.6% | 5.4% | 0.2% |
| VFRU | 87 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| FVUR | 37 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By marker
| marker | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| vitamin-b12 | 12 | 66.7% | 0.0% | 0.0% | 33.3% | 0.0% |
| folate-serum | 16 | 68.8% | 0.0% | 0.0% | 31.3% | 0.0% |
| free-t3 | 29 | 69.0% | 0.0% | 0.0% | 31.0% | 0.0% |
| testosterone-total | 11 | 72.7% | 0.0% | 0.0% | 27.3% | 0.0% |
| magnesium-serum | 14 | 78.6% | 0.0% | 7.1% | 14.3% | 0.0% |
| free-t4 | 34 | 79.4% | 0.0% | 0.0% | 20.6% | 0.0% |
| vitamin-d-25-oh | 16 | 81.3% | 0.0% | 0.0% | 18.8% | 0.0% |
| hba1c | 21 | 85.7% | 0.0% | 0.0% | 14.3% | 0.0% |
| hematocrit | 14 | 85.7% | 0.0% | 0.0% | 14.3% | 0.0% |
| calcium-total | 25 | 88.0% | 0.0% | 4.0% | 4.0% | 4.0% |
| phosphorus-serum | 22 | 90.9% | 0.0% | 4.5% | 4.5% | 0.0% |
| total-cholesterol | 26 | 92.3% | 0.0% | 0.0% | 3.8% | 3.8% |
| mchc | 18 | 94.4% | 0.0% | 0.0% | 5.6% | 0.0% |
| glucose-fasting | 25 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| creatinine-serum | 20 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| blood-urea-nitrogen | 25 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| egfr | 18 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| uric-acid | 20 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| sodium-serum | 25 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| potassium-serum | 25 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| chloride-serum | 25 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-protein | 22 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| albumin-serum | 20 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hs-crp | 21 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-bilirubin | 8 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| alt | 14 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ast | 17 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| alp | 8 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ggt | 17 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| wbc | 17 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| rbc | 13 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hemoglobin | 18 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mcv | 18 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mch | 17 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| platelet-count | 18 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| tsh | 29 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ldl-cholesterol | 25 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hdl-cholesterol | 26 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| serum-iron | 22 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| transferrin-saturation | 17 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| triglycerides | 14 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ferritin | 18 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## What went wrong, most common first

**29× flag invented | none VFUR**
    r6-0v3 [ES plain VFUR wide]  Magnesio                             3,6   mg/dL   1,7 – 2,4  →  read 3.6 mg/dL [1.7, 2.4] H
    r6-0v3 [ES plain VFUR wide]  Fósforo                              1,4   mg/dL   2,5 – 4,5  →  read 1.4 mg/dL [2.5, 4.5] L
    r6-0v3 [ES plain VFUR wide]  Proteínas totales                    5,2   g/dL   6,0 – 8,3  →  read 5.2 g/dL [6, 8.3] L

**18× flag invented | none VURF**
    r6-2v0 [RO colon VURF wide]  Glicemie:                            54   mg/dl   (70 - 99)  →  read 54 mg/dL [70, 99] L
    r6-2v0 [RO colon VURF wide]  Rata de filtrare glomerulară estimată:   45   mL/min/1.73m2   >= 60  →  read 45 mL/min/1.73m2 [60, ] L
    r6-2v0 [RO colon VURF wide]  Clor seric:                          125   mmol/L   (98 - 107)  →  read 125 mmol/L [98, 107] H

**5× range wrong | UK tight | two-sided**
    r6-0v0 [UK unitspace VURF single]  Creatinine 89 µmol / L 53-115  →  read 1.01 mg/dL [0.6, 1.24]
    r6-0v0 [UK unitspace VURF single]  Urate 291 µmol / L 149-416  →  read 4.9 mg/dL [2.5, 6.8]
    r6-1v2 [UK glue VFUR wide]  HbA1c (IFCC)                         32mmol/mol   20-38  →  read 5.1 % [4.3, 5.6]

**4× wrong | free-t3 | point plain | unit pmol/L**
    r6-2v2 [UK plain VURF wide]  Free T3                              5.5   pmol/L   (3.5 - 6.5)  →  read 5.5 pg/mL [3.5, 6.5]
    r6-6v0 [UK plain VFUR wide]  Free T3                              2.8   pmol/L   3.5 – 6.5  →  read 2.8 pg/mL [3.5, 6.5] L
    r6-7v1 [UK plain VFUR single]  Free T3 4.61 pmol/L (3.50 - 6.50)  →  read 4.61 pg/mL [3.5, 6.5]

**3× range wrong | UK dash | two-sided**
    r6-5v1 [UK colon VURF wide]  Urate:                               184   µmol/L   149 – 416  →  read 3.09 mg/dL [2.5, 6.9]
    r6-6v0 [UK plain VFUR wide]  HbA1c                                23   mmol/mol   20 – 38  →  read 4.3 % [4, 7.6]
    r6-6v0 [UK plain VFUR wide]  Free T4                              16.9   pmol/L   10.3 – 23.2  →  read 1.31 ng/dL [0.8, 1.79]

**2× wrong | free-t4 | point glue | unit pmol/L**
    r6-1v2 [UK glue VFUR wide]  Free T4                              18.3pmol/L   10.3-23.2  →  read 1.27 ng/dL [0.72, 1.64]
    r6-4v2 [UK glue VFUR wide]  Free T4                              22.7pmol/L   10.3-23.2  →  read 1.64 ng/dL [0.74, 1.66]

**2× wrong | free-t3 | point glue | unit pmol/L**
    r6-1v2 [UK glue VFUR wide]  Free T3                              4.0pmol/L   3.5-6.5  →  read 4 pg/mL [3.5, 6.5]
    r6-4v2 [UK glue VFUR wide]  Free T3                              4.0pmol/L   3.5-6.5  →  read 4 pg/mL [3.5, 6.5]

**2× wrong | vitamin-d-25-oh | point glue | unit nmol/L**
    r6-1v2 [UK glue VFUR wide]  25-OH Vitamin D                      217nmol/L   75-250  →  read 52.1 ng/mL [18, 60]
    r6-4v2 [UK glue VFUR wide]  25-OH Vitamin D                      42   *   nmol/L   75-250  →  read 10.5 ng/mL [18.8, 62.5] L

**2× wrong | vitamin-b12 | point glue | unit pmol/L**
    r6-1v2 [UK glue VFUR wide]  Vitamin B12                          628pmol/L   148-664  →  read 628 pg/mL [148, 664]
    r6-4v2 [UK glue VFUR wide]  Vitamin B12                          371pmol/L   148-664  →  read 371 pg/mL [148, 664]

**2× wrong | folate-serum | point glue | unit nmol/L**
    r6-1v2 [UK glue VFUR wide]  Folate                               23.6nmol/L   6.8-45.3  →  read 23.6 ng/mL [6.8, 45.3]
    r6-4v2 [UK glue VFUR wide]  Serum folate                         5.0   *   nmol/L   6.8-45.3  →  read 5 ng/mL [6.8, 45.3] L

**2× range wrong | UK paren | two-sided**
    r6-2v2 [UK plain VURF wide]  HbA1c (IFCC)                         27   mmol/mol   (20 - 38)  →  read 4.6 % [4.3, ]
    r6-7v1 [UK plain VFUR single]  Free T4 21.75 pmol/L (10.30 - 23.20)  →  read 1.68 ng/dL [1, 1.79]

**2× wrong | free-t4 | comma plain | unit pmol/l**
    r6-4v3 [DE plain VFUR wide]  FREIES T4                            22,7   pmol/l   [10,3 - 23,2]  →  read 1.64 ng/dL [0.74, 1.67]
    r6-9v3 [DE plain VFUR wide]  fT4                                  22,4   pmol/l   10,3-23,2  →  read 1.71 ng/dL [0.77, 1.79]

**2× wrong | free-t3 | comma plain | unit pmol/l**
    r6-4v3 [DE plain VFUR wide]  FREIES T3                            4,0   pmol/l   [3,5 - 6,5]  →  read 4 pg/mL [3.5, 6.5]
    r6-9v3 [DE plain VFUR wide]  fT3                                  6,9   *   pmol/l   3,5-6,5  →  read 4.4 pg/mL [2.7, 5]

**1× flag invented | star VURF**
    r6-0v0 [UK unitspace VURF single]  Glucose 4.9 mmol / L 3.9-5.5  →  read 88.2 mg/dL [70.2, 99] L

**1× wrong | hba1c | point unitspace | unit mmol/mol**
    r6-0v0 [UK unitspace VURF single]  HbA1c 26 mmol / mol 20-38  →  read 4.45 % [3.2, 5.7]

**1× wrong | magnesium-serum | point unitspace | unit mmol/L**
    r6-0v0 [UK unitspace VURF single]  Magnesium 1.48 mmol / L 0.70-0.99 *  →  read 1.48 mg/dL [0.7, 0.99] H

**1× wrong | hematocrit | point unitspace | unit L/L**
    r6-0v0 [UK unitspace VURF single]  Haematocrit 0.37 L / L 0.36-0.50  →  read 0.37 % [0.36, 0.5]

**1× wrong | mchc | point unitspace | unit g/L**
    r6-0v0 [UK unitspace VURF single]  MCHC 337 g / L 320-360  →  read 337 g/dL [320, 360]

**1× wrong | free-t4 | point unitspace | unit pmol/L**
    r6-0v0 [UK unitspace VURF single]  Free T4 18.5 pmol / L 10.3-23.2  →  read 1.09 ng/dL [0.6, 1.35]

**1× wrong | vitamin-d-25-oh | point unitspace | unit nmol/L**
    r6-0v0 [UK unitspace VURF single]  Vitamin D 172 nmol / L 75-250  →  read 43.2 ng/mL [18.8, 62.5]

**1× wrong | vitamin-b12 | point unitspace | unit pmol/L**
    r6-0v0 [UK unitspace VURF single]  Vitamin B12 129 pmol / L 148-664 *  →  read 129 pg/mL [148, 664] L

**1× wrong | folate-serum | point unitspace | unit nmol/L**
    r6-0v0 [UK unitspace VURF single]  Serum folate 35.6 nmol / L 6.8-45.3  →  read 35.6 ng/mL [6.8, 45.3]

**1× flag invented | arrows VFUR**
    r6-0v2 [DE glue VFUR wide]  CHLORID                              103,0mmol/l   [98,0 - 107,0]  →  read 103 mmol/L [98, 107] H

**1× range missed | ES dash | lower only**
    r6-0v3 [ES plain VFUR wide]  Filtrado glomerular estimado (CKD-EPI)   109   mL/min/1.73m2   > 60  →  read 109 mL/min/1.73m2

**1× range wrong | US spaced | lower only**
    r6-2v1 [US plain VFRU wide]  EGFR                                 45 Low   > OR = 60 mL/min/1.73m2  →  read 45 mL/min/1.73m2 [, 60] L

**1× range wrong | UK paren | lower only**
    r6-2v2 [UK plain VURF wide]  eGFR                                 45   mL/min/1.73m2   > 60   LOW  →  read 45 mL/min/1.73m2 [, 60] L

**1× wrong | phosphorus-serum | point plain | unit mmol/L**
    r6-2v2 [UK plain VURF wide]  Phosphate                            1.03   mmol/L   (0.81 - 1.45)  →  read 3.1 mg/dL [2.5, 4.5]

**1× wrong | hematocrit | point plain | unit L/L**
    r6-2v2 [UK plain VURF wide]  Haematocrit                          0.47   L/L   (0.36 - 0.50)  →  read 0.47 % [0.36, 0.5]

**1× wrong | free-t4 | point plain | unit pmol/L**
    r6-2v2 [UK plain VURF wide]  Free T4                              11.7   pmol/L   (10.3 - 23.2)  →  read 0.9 ng/dL [0.8, 1.8]

**1× wrong | folate-serum | point plain | unit nmol/L**
    r6-2v2 [UK plain VURF wide]  Folate                               28.8   nmol/L   (6.8 - 45.3)  →  read 28.8 ng/mL [6.8, 45.3]

**1× wrong | testosterone-total | point plain | unit nmol/L**
    r6-2v2 [UK plain VURF wide]  Testosterone                         43.6   nmol/L   (9.2 - 31.8)   HIGH  →  read 436 ng/dL [92, 318] H

**1× range wrong | ES paren | lower only**
    r6-2v4 [ES wrap VURF single]  Filtrado glomerular estimado (CKD-EPI) ⏎         45,0 mL/min/1.73m2 >60,0  →  read 45 mL/min/1.73m2 [, 60] L

**1× wrong | total-cholesterol | point colon | unit mmol/L**
    r6-3v1 [UK colon VURF tab]  CHOLESTEROL:	3.3	mmol/L	<= 5.2  →  read 128.7 mg/dL [, 201.4]

**1× wrong | testosterone-total | point glue | unit nmol/L**
    r6-4v2 [UK glue VFUR wide]  Testosterone                         24.3nmol/L   9.2-31.8  →  read 24.3 ng/dL [9.2, 31.8]

**1× wrong | vitamin-b12 | comma plain | unit pmol/l**
    r6-4v3 [DE plain VFUR wide]  VITAMIN B12                          371   pmol/l   [148 - 664]  →  read 271.7 pg/mL [107.8, 485.1]

**1× wrong | folate-serum | comma plain | unit nmol/l**
    r6-4v3 [DE plain VFUR wide]  FOLSÄURE                             5,0   nmol/l   [6,8 - 45,3]  →  read 5 ng/mL [6.8, 45.3] L

**1× wrong | testosterone-total | comma plain | unit nmol/l**
    r6-4v3 [DE plain VFUR wide]  TESTOSTERON                          24,3   nmol/l   [9,2 - 31,8]  →  read 7.01 ng/dL [2.65, 9.17]

**1× miss | total-cholesterol | "COLESTEROL TOTAL"**
    r6-5v3 [ES plain VFUR tab]  COLESTEROL TOTAL	163,0	mg/dL	< 200,0

**1× range wrong | UK dash | lower only**
    r6-6v0 [UK plain VFUR wide]  eGFR                                 104   mL/min/1.73m2   >60  →  read 104 mL/min/1.73m2 [, 60] H

**1× wrong | calcium-total | point plain | unit mmol/L**
    r6-6v0 [UK plain VFUR wide]  Calcium                              2.20   mmol/L   2.15 – 2.57  →  read 8.4 mg/dL [8.6, 10.28] L

**1× flag invented | none VFRU**
    r6-7v0 [US twocol VFRU wide]  ALT                                  5   7 - 56 U/L  →  read 5 U/L [7, 56] L

**1× flag missed | arrows VFUR**
    r6-7v4 [RO twocol VFUR wide]  FERITINA                             440,00   ↑   ng/ml   30,00 – 300,00  →  read 440 ng/mL [30, 300]

**1× miss | calcium-total | "Calciu seric"**
    r6-9v0 [RO plain VURF wide]  Calciu seric                         6.2   mg/dl   8.6 - 10.3   ↓

**1× wrong | magnesium-serum | point plain | unit mg/dL**
    r6-9v0 [RO plain VURF wide]  Magneziu seric                       1.3   mg/dL   1.7 - 2.4   ↓  →  read 6.2 mg/dL [8.6, 10.3] L

**1× wrong | hba1c | point twocol | unit mmol/mol**
    r6-9v2 [UK twocol VFUR wide]  HbA1c (IFCC)                         25   mmol/mol   [20 - 38]  →  read 3 % [2.4, 4.6]

**1× unconverted | calcium-total | mmol/L**
    r6-9v2 [UK twocol VFUR wide]  Calcium                              1.55   LOW   mmol/L   [2.15 - 2.57]  →  read 1.55 mmol/L [2.15, 2.57] L

**1× unconverted | magnesium-serum | mmol/L**
    r6-9v2 [UK twocol VFUR wide]  Magnesium                            0.53   LOW   mmol/L   [0.70 - 0.99]  →  read 0.53 mmol/L [0.7, 0.99] L

**1× unconverted | phosphorus-serum | mmol/L**
    r6-9v2 [UK twocol VFUR wide]  Phosphate                            0.97   mmol/L   [0.81 - 1.45]  →  read 0.97 mmol/L [0.81, 1.45]

**1× range wrong | UK bracket | lower only**
    r6-9v2 [UK twocol VFUR wide]  HDL cholesterol                      0.57   LOW   mmol/L   >= 1.03  →  read 22.04 mg/dL [39, ] L

**1× wrong | free-t4 | point twocol | unit pmol/L**
    r6-9v2 [UK twocol VFUR wide]  Free T4                              22.4   pmol/L   [10.3 - 23.2]  →  read 3.5 ng/dL [1.61, 3.63]

**1× wrong | free-t3 | point twocol | unit pmol/L**
    r6-9v2 [UK twocol VFUR wide]  Free T3                              6.9   HIGH   pmol/L   [3.5 - 6.5]  →  read 6.9 pg/mL [2.3, 4.3] H

**1× wrong | hba1c | comma plain | unit mmol/mol**
    r6-9v3 [DE plain VFUR wide]  HbA1c                                25   mmol/mol   20-38  →  read 5.8 % [4.3, 5.7]

**1× range wrong | DE tight | lower only**
    r6-9v3 [DE plain VFUR wide]  HDL-Cholesterin                      0,57   *   mmol/l   >1,03  →  read 22.1 mg/dL [39.1, ] L
