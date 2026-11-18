# Lab-report reader stress test

43 generated reports, 820 rows with a known answer, seed 6, only kind=lines. Read in 0.0 s (0.2 ms a report).

| Outcome | Rows | Share | 95% interval |
|---|---|---|---|
| ok | 776 | 94.6% | 92.87–95.98% |
| unit | 0 | 0.0% | 0.00–0.47% |
| unconverted | 0 | 0.0% | 0.00–0.47% |
| wrong | 39 | 4.8% | 3.50–6.44% |
| miss | 5 | 0.6% | 0.26–1.42% |

- **Critical values:** 9 of 9 caught (100.0%, interval 70.08–100.00%); 0 lost because the row was not read, 0 because it was misread. False critical alarms: 0.
- **Rows that are not on the report:** 0 (of 815 rows read).
- **Lab's flag:** ok 724, missed 1, invented 51.
- **Reference range:** ok 764, missed 4, wrong 8.
- **Collection date:** ok 40, wrong 3.
- **Wrong values printed in a unit that needs converting:** 39 of 39 (100.0%).
- **Format invariance** (5 printings of each set of results): of 193 markers, read right in every printing 156 (80.8%), right in some printings but not others 37 (19.2%), never right 0. Critical results caught in every printing: 2 of 2.

## By locale
| locale | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| UK | 193 | 82.4% | 0.0% | 0.0% | 15.5% | 2.1% |
| DE | 120 | 92.5% | 0.0% | 0.0% | 7.5% | 0.0% |
| RO | 176 | 99.4% | 0.0% | 0.0% | 0.0% | 0.6% |
| US | 175 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ES | 156 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By kind
| kind | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| lines | 820 | 94.6% | 0.0% | 0.0% | 4.8% | 0.6% |

## By variant
| variant | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| unitspace | 33 | 78.8% | 0.0% | 0.0% | 21.2% | 0.0% |
| glue | 76 | 86.8% | 0.0% | 0.0% | 11.8% | 1.3% |
| twocol | 60 | 91.7% | 0.0% | 0.0% | 6.7% | 1.7% |
| plain | 508 | 95.7% | 0.0% | 0.0% | 3.7% | 0.6% |
| colon | 85 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| wrap | 58 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By units
| units | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| SI | 230 | 81.3% | 0.0% | 0.0% | 17.0% | 1.7% |
| conventional | 590 | 99.8% | 0.0% | 0.0% | 0.0% | 0.2% |

## By decimal
| decimal | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| point | 458 | 92.6% | 0.0% | 0.0% | 6.6% | 0.9% |
| comma | 362 | 97.2% | 0.0% | 0.0% | 2.5% | 0.3% |

## By sep
| sep | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| tab | 65 | 93.8% | 0.0% | 0.0% | 1.5% | 4.6% |
| wide | 545 | 94.1% | 0.0% | 0.0% | 5.5% | 0.4% |
| single | 210 | 96.2% | 0.0% | 0.0% | 3.8% | 0.0% |

## By order
| order | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| VFUR | 481 | 93.3% | 0.0% | 0.0% | 5.6% | 1.0% |
| VURF | 215 | 94.4% | 0.0% | 0.0% | 5.6% | 0.0% |
| VFRU | 87 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| FVUR | 37 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By marker
| marker | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| vitamin-b12 | 12 | 66.7% | 0.0% | 0.0% | 25.0% | 8.3% |
| folate-serum | 16 | 68.8% | 0.0% | 0.0% | 31.3% | 0.0% |
| free-t3 | 29 | 69.0% | 0.0% | 0.0% | 27.6% | 3.4% |
| hba1c | 21 | 71.4% | 0.0% | 0.0% | 28.6% | 0.0% |
| testosterone-total | 11 | 72.7% | 0.0% | 0.0% | 27.3% | 0.0% |
| free-t4 | 34 | 76.5% | 0.0% | 0.0% | 20.6% | 2.9% |
| magnesium-serum | 14 | 85.7% | 0.0% | 0.0% | 14.3% | 0.0% |
| mchc | 18 | 88.9% | 0.0% | 0.0% | 11.1% | 0.0% |
| hematocrit | 14 | 92.9% | 0.0% | 0.0% | 7.1% | 0.0% |
| vitamin-d-25-oh | 16 | 93.8% | 0.0% | 0.0% | 6.3% | 0.0% |
| ggt | 17 | 94.1% | 0.0% | 0.0% | 0.0% | 5.9% |
| hemoglobin | 18 | 94.4% | 0.0% | 0.0% | 0.0% | 5.6% |
| uric-acid | 20 | 95.0% | 0.0% | 0.0% | 5.0% | 0.0% |
| glucose-fasting | 25 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| creatinine-serum | 20 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| blood-urea-nitrogen | 25 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| egfr | 18 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| sodium-serum | 25 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| potassium-serum | 25 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| chloride-serum | 25 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| calcium-total | 25 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| phosphorus-serum | 22 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-protein | 22 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| albumin-serum | 20 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hs-crp | 21 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-bilirubin | 8 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| alt | 14 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ast | 17 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| alp | 8 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| wbc | 17 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| rbc | 13 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mcv | 18 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mch | 17 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| platelet-count | 18 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| tsh | 29 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-cholesterol | 26 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ldl-cholesterol | 25 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hdl-cholesterol | 26 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| serum-iron | 22 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| transferrin-saturation | 17 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| triglycerides | 14 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ferritin | 18 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## What went wrong, most common first

**27× flag invented | none VFUR**
    r6-0v3 [ES plain VFUR wide]  Magnesio                             3,6   mg/dL   1,7 – 2,4  →  read 3.6 mg/dL [1.7, 2.4] H
    r6-0v3 [ES plain VFUR wide]  Fósforo                              1,4   mg/dL   2,5 – 4,5  →  read 1.4 mg/dL [2.5, 4.5] L
    r6-0v3 [ES plain VFUR wide]  Proteínas totales                    5,2   g/dL   6,0 – 8,3  →  read 5.2 g/dL [6, 8.3] L

**18× flag invented | none VURF**
    r6-2v0 [RO colon VURF wide]  Glicemie:                            54   mg/dl   (70 - 99)  →  read 54 mg/dL [70, 99] L
    r6-2v0 [RO colon VURF wide]  Rata de filtrare glomerulară estimată:   45   mL/min/1.73m2   >= 60  →  read 45 mL/min/1.73m2 [60, ] L
    r6-2v0 [RO colon VURF wide]  Clor seric:                          125   mmol/L   (98 - 107)  →  read 125 mmol/L [98, 107] H

**4× flag invented | none VFRU**
    r6-7v0 [US twocol VFRU wide]  ALT                                  5   7 - 56 U/L  →  read 5 U/L [7, 56] L
    r6-7v0 [US twocol VFRU wide]  Cholesterol, Total                   128   <200 mg/dL  →  read 128 mg/dL [, 200] L
    r6-7v0 [US twocol VFRU wide]  HDL CHOLESTEROL                      63   > OR = 40 mg/dL  →  read 63 mg/dL [40, ] H

**3× range missed | US spaced | lower only**
    r6-0v1 [US plain VFUR single]  eGFR 109 mL/min/1.73m2 >60  →  read 109 mL/min/1.73m2
    r6-1v1 [US plain VFUR tab]  HDL Cholesterol	41	mg/dL	>40  →  read 41 mg/dL
    r6-2v1 [US plain VFRU wide]  EGFR                                 45 Low   > OR = 60 mL/min/1.73m2  →  read 45 mL/min/1.73m2 L

**3× wrong | free-t3 | point plain | unit pmol/L**
    r6-2v2 [UK plain VURF wide]  Free T3                              5.5   pmol/L   (3.5 - 6.5)  →  read 3.2 pg/mL [2, 3.8]
    r6-6v0 [UK plain VFUR wide]  Free T3                              2.8   pmol/L   3.5 – 6.5  →  read 2.8 pg/mL [3.5, 6.5] L
    r6-7v1 [UK plain VFUR single]  Free T3 4.61 pmol/L (3.50 - 6.50)  →  read 4.61 pg/mL [3.5, 6.5]

**2× wrong | free-t4 | point glue | unit pmol/L**
    r6-1v2 [UK glue VFUR wide]  Free T4                              18.3pmol/L   10.3-23.2  →  read 1.06 ng/dL [0.8, 1.8]
    r6-4v2 [UK glue VFUR wide]  Free T4                              22.7pmol/L   10.3-23.2  →  read 1.64 ng/dL [0.75, 1.66]

**2× wrong | free-t3 | point glue | unit pmol/L**
    r6-1v2 [UK glue VFUR wide]  Free T3                              4.0pmol/L   3.5-6.5  →  read 4 pg/mL [2.3, 4.2]
    r6-4v2 [UK glue VFUR wide]  Free T3                              4.0pmol/L   3.5-6.5  →  read 4 pg/mL [3.5, 6.5]

**2× wrong | folate-serum | point glue | unit nmol/L**
    r6-1v2 [UK glue VFUR wide]  Folate                               23.6nmol/L   6.8-45.3  →  read 23.6 ng/mL [6.8, 45.3]
    r6-4v2 [UK glue VFUR wide]  Serum folate                         5.0   *   nmol/L   6.8-45.3  →  read 5 ng/mL [6.8, 45.13] L

**2× wrong | hba1c | point plain | unit mmol/mol**
    r6-2v2 [UK plain VURF wide]  HbA1c (IFCC)                         27   mmol/mol   (20 - 38)  →  read 4.7 % [4.3, 6.1]
    r6-6v0 [UK plain VFUR wide]  HbA1c                                23   mmol/mol   20 – 38  →  read 4.1 % [3.6, 5.6]

**2× wrong | free-t4 | point plain | unit pmol/L**
    r6-2v2 [UK plain VURF wide]  Free T4                              11.7   pmol/L   (10.3 - 23.2)  →  read 0.9 ng/dL [0.8, 1.8]
    r6-6v0 [UK plain VFUR wide]  Free T4                              16.9   pmol/L   10.3 – 23.2  →  read 1.22 ng/dL [0.74, 1.65]

**2× wrong | free-t4 | comma plain | unit pmol/l**
    r6-4v3 [DE plain VFUR wide]  FREIES T4                            22,7   pmol/l   [10,3 - 23,2]  →  read 1.71 ng/dL [0.78, 1.76] H
    r6-9v3 [DE plain VFUR wide]  fT4                                  22,4   pmol/l   10,3-23,2  →  read 1.71 ng/dL [0.79, 1.66]

**2× wrong | free-t3 | comma plain | unit pmol/l**
    r6-4v3 [DE plain VFUR wide]  FREIES T3                            4,0   pmol/l   [3,5 - 6,5]  →  read 4 pg/mL [3.5, 6.5]
    r6-9v3 [DE plain VFUR wide]  fT3                                  6,9   *   pmol/l   3,5-6,5  →  read 4.4 pg/mL [2.23, 4.14]

**2× range wrong | UK dash | two-sided**
    r6-5v1 [UK colon VURF wide]  Urate:                               184   µmol/L   149 – 416  →  read 3.1 mg/dL [2.5, 6.9]
    r6-6v0 [UK plain VFUR wide]  Urate                                226   µmol/L   149 – 416  →  read 3.8 mg/dL [2.5, 6.9]

**1× wrong | hba1c | point unitspace | unit mmol/mol**
    r6-0v0 [UK unitspace VURF single]  HbA1c 26 mmol / mol 20-38  →  read 4.4 % [4.3, 6.1]

**1× wrong | uric-acid | point unitspace | unit µmol/L**
    r6-0v0 [UK unitspace VURF single]  Urate 291 µmol / L 149-416  →  read 5 mg/dL [2.5, 7]

**1× wrong | magnesium-serum | point unitspace | unit mmol/L**
    r6-0v0 [UK unitspace VURF single]  Magnesium 1.48 mmol / L 0.70-0.99 *  →  read 1.48 mg/dL [0.7, 0.99] H

**1× wrong | hematocrit | point unitspace | unit L/L**
    r6-0v0 [UK unitspace VURF single]  Haematocrit 0.37 L / L 0.36-0.50  →  read 0.37 % [0.36, 0.5]

**1× wrong | mchc | point unitspace | unit g/L**
    r6-0v0 [UK unitspace VURF single]  MCHC 337 g / L 320-360  →  read 337 g/dL [320, 360]

**1× wrong | vitamin-b12 | point unitspace | unit pmol/L**
    r6-0v0 [UK unitspace VURF single]  Vitamin B12 129 pmol / L 148-664 *  →  read 129 pg/mL [148, 664] L

**1× wrong | folate-serum | point unitspace | unit nmol/L**
    r6-0v0 [UK unitspace VURF single]  Serum folate 35.6 nmol / L 6.8-45.3  →  read 35.6 ng/mL [6.8, 45.3]

**1× flag missed | arrows VFUR**
    r6-0v2 [DE glue VFUR wide]  GESAMTPROTEIN                        5,20   ↓   g/dl   [6,00 - 8,30]  →  read 5.2 g/dL [6, 8.3]

**1× range wrong | RO spaced | two-sided**
    r6-0v4 [RO plain VFUR single]  Creatinina 1.01 mg/dL 0.60 - 1.30  →  read 1.01 mg/dL [0.6, 1.73]

**1× wrong | hba1c | point glue | unit mmol/mol**
    r6-1v2 [UK glue VFUR wide]  HbA1c (IFCC)                         32mmol/mol   20-38  →  read 5 % [4.3, 5.6]

**1× range wrong | UK tight | two-sided**
    r6-1v2 [UK glue VFUR wide]  Uric acid                            303µmol/L   149-416  →  read 5.09 mg/dL [2.5, 6.9]

**1× wrong | vitamin-b12 | point glue | unit pmol/L**
    r6-1v2 [UK glue VFUR wide]  Vitamin B12                          628pmol/L   148-664  →  read 628 pg/mL [148, 664]

**1× wrong | testosterone-total | point glue | unit nmol/L**
    r6-1v2 [UK glue VFUR wide]  Testosterone                         44.1   H   nmol/L   9.2-31.8  →  read 44.1 ng/dL [9.2, 31.8] H

**1× date wrong | RO lines**
    r6-2v0  want 2026-01-04 read 2016-01-04

**1× range wrong | UK paren | lower only**
    r6-2v2 [UK plain VURF wide]  eGFR                                 45   mL/min/1.73m2   > 60   LOW  →  read 45 mL/min/1.73m2 [, 60] L

**1× wrong | folate-serum | point plain | unit nmol/L**
    r6-2v2 [UK plain VURF wide]  Folate                               28.8   nmol/L   (6.8 - 45.3)  →  read 28.8 ng/mL [6.8, 45.3]

**1× wrong | testosterone-total | point plain | unit nmol/L**
    r6-2v2 [UK plain VURF wide]  Testosterone                         43.6   nmol/L   (9.2 - 31.8)   HIGH  →  read 125.8 ng/dL [26.6, 91.8] H

**1× range missed | ES paren | lower only**
    r6-2v4 [ES wrap VURF single]  Filtrado glomerular estimado (CKD-EPI) ⏎         45,0 mL/min/1.73m2 >60,0  →  read 45 mL/min/1.73m2 L

**1× flag invented | HL VFUR**
    r6-3v0 [US plain VFUR single]  HDL CHOLESTEROL 74 mg/dL > OR = 40  →  read 74 mg/dL [40, ] H

**1× range wrong | UK tight | lower only**
    r6-4v2 [UK glue VFUR wide]  HDL cholesterol                      0.62   *   mmol/L   >= 1.03  →  read 24.02 mg/dL [38.7, ] L

**1× miss | vitamin-b12 | "Vitamin B12"**
    r6-4v2 [UK glue VFUR wide]  Vitamin B12                          371pmol/L   148-664

**1× wrong | vitamin-d-25-oh | comma plain | unit nmol/l**
    r6-4v3 [DE plain VFUR wide]  25-OH-VITAMIN D                      42   nmol/l   [75 - 250]  →  read 10.1 ng/mL [18.03, 60.1] L

**1× wrong | vitamin-b12 | comma plain | unit pmol/l**
    r6-4v3 [DE plain VFUR wide]  VITAMIN B12                          371   pmol/l   [148 - 664]  →  read 271.72 pg/mL [208.94, 963.5]

**1× wrong | folate-serum | comma plain | unit nmol/l**
    r6-4v3 [DE plain VFUR wide]  FOLSÄURE                             5,0   nmol/l   [6,8 - 45,3]  →  read 5 ng/mL [6.8, 45.3] L

**1× wrong | testosterone-total | comma plain | unit nmol/l**
    r6-4v3 [DE plain VFUR wide]  TESTOSTERON                          24,3   nmol/l   [9,2 - 31,8]  →  read 7.01 ng/dL [2.65, 9.18] L

**1× miss | ggt | "GGT"**
    r6-7v4 [RO twocol VFUR wide]  GGT                                  21,00   U/L   8,00 – 61,00

**1× miss | hemoglobin | "Haemoglobin"**
    r6-8v2 [UK plain VFUR tab]  Haemoglobin	160	g/L	[120 - 175]

**1× wrong | mchc | point plain | unit g/L**
    r6-8v2 [UK plain VFUR tab]  MCHC	329	g/L	[320 - 360]  →  read 329 g/dL [32, 36]

**1× miss | free-t4 | "Free T4"**
    r6-8v2 [UK plain VFUR tab]  Free T4	20.2	pmol/L	[10.3 - 23.2]

**1× miss | free-t3 | "Free T3"**
    r6-8v2 [UK plain VFUR tab]  Free T3	4.6	pmol/L	[3.5 - 6.5]

**1× flag invented | star VURF**
    r6-8v4 [RO colon VURF wide]  CHEM:                                32.90   g/dl   [32.00 - 36.00]  →  read 32.9 g/dL [32, 36] L

**1× date wrong | US lines**
    r6-9v1  want 2026-04-01 read 2026-01-04

**1× wrong | hba1c | point twocol | unit mmol/mol**
    r6-9v2 [UK twocol VFUR wide]  HbA1c (IFCC)                         25   mmol/mol   [20 - 38]  →  read 2.3 % [1.8, 3.5]

**1× wrong | magnesium-serum | point twocol | unit mmol/L**
    r6-9v2 [UK twocol VFUR wide]  Magnesium                            0.53   LOW   mmol/L   [0.70 - 0.99]  →  read 0.53 mg/dL [1.7, 2.4] L

**1× range wrong | UK bracket | lower only**
    r6-9v2 [UK twocol VFUR wide]  HDL cholesterol                      0.57   LOW   mmol/L   >= 1.03  →  read 22.1 mg/dL [38.7, ] L

**1× wrong | free-t4 | point twocol | unit pmol/L**
    r6-9v2 [UK twocol VFUR wide]  Free T4                              22.4   pmol/L   [10.3 - 23.2]  →  read 2.9 ng/dL [1.3, 3]

**1× wrong | free-t3 | point twocol | unit pmol/L**
    r6-9v2 [UK twocol VFUR wide]  Free T3                              6.9   HIGH   pmol/L   [3.5 - 6.5]  →  read 6.9 pg/mL [3.5, 6.5] H

**1× wrong | hba1c | comma plain | unit mmol/mol**
    r6-9v3 [DE plain VFUR wide]  HbA1c                                25   mmol/mol   20-38  →  read 4.6 % [4.3, 6.1]

**1× range wrong | DE tight | lower only**
    r6-9v3 [DE plain VFUR wide]  HDL-Cholesterin                      0,57   *   mmol/l   >1,03  →  read 22.14 mg/dL [39, ] L

**1× date wrong | ES lines**
    r6-9v4  want 2026-04-01 read 2026-01-04
