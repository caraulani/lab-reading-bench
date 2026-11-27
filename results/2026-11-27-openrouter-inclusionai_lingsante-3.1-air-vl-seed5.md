# Lab-report reader stress test

300 generated reports, 4950 rows with a known answer, seed 5. Read in 1099.6 s (3665.5 ms a report).

| Outcome | Rows | Share | 95% interval |
|---|---|---|---|
| ok | 4489 | 90.7% | 89.85–91.47% |
| unit | 8 | 0.2% | 0.08–0.32% |
| unconverted | 65 | 1.3% | 1.03–1.67% |
| wrong | 15 | 0.3% | 0.18–0.50% |
| miss | 373 | 7.5% | 6.83–8.30% |

- **Critical values:** 52 of 60 caught (86.7%, interval 75.83–93.09%); 8 lost because the row was not read, 0 because it was misread. False critical alarms: 4.
- **Rows that are not on the report:** 3 (of 4580 rows read).
- **Lab's flag:** ok 4405, invented 151, missed 6.
- **Reference range:** ok 4244, missed 281, wrong 37.
- **Collection date:** ok 263, missed 16.
- **Wrong values printed in a unit that needs converting:** 14 of 15 (93.3%).
- **Format invariance** (5 printings of each set of results): of 990 markers, read right in every printing 567 (57.3%), right in some printings but not others 423 (42.7%), never right 0. Critical results caught in every printing: 4 of 12; caught in some printings only: 8.

## By locale
| locale | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| UK | 990 | 68.7% | 0.6% | 6.3% | 1.5% | 22.9% |
| DE | 990 | 91.4% | 0.0% | 0.1% | 0.0% | 8.5% |
| RO | 990 | 96.7% | 0.0% | 0.0% | 0.0% | 3.3% |
| ES | 990 | 96.9% | 0.2% | 0.0% | 0.0% | 2.9% |
| US | 990 | 99.8% | 0.0% | 0.2% | 0.0% | 0.0% |

## By kind
| kind | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| lines | 4061 | 89.1% | 0.049% | 1.5% | 0.2% | 9.2% |
| csv | 434 | 97.5% | 0.7% | 1.2% | 0.7% | 0.0% |
| fhir | 455 | 98.7% | 0.7% | 0.0% | 0.7% | 0.0% |

## By variant
| variant | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| leaders | 223 | 74.4% | 0.0% | 0.4% | 0.0% | 25.1% |
| twocol | 441 | 83.7% | 0.0% | 0.0% | 0.0% | 16.3% |
| plain | 2382 | 88.9% | 0.084% | 1.5% | 0.4% | 9.2% |
| csv:lowhigh | 108 | 91.7% | 0.9% | 4.6% | 2.8% | 0.0% |
| glue | 348 | 92.8% | 0.0% | 0.0% | 0.0% | 7.2% |
| wrap | 253 | 94.9% | 0.0% | 5.1% | 0.0% | 0.0% |
| unitspace | 296 | 95.9% | 0.0% | 3.4% | 0.0% | 0.7% |
| fhir:loinc+text | 213 | 97.2% | 1.4% | 0.0% | 1.4% | 0.0% |
| csv:comma | 74 | 98.6% | 1.4% | 0.0% | 0.0% | 0.0% |
| csv:semicolon | 252 | 99.6% | 0.4% | 0.0% | 0.0% | 0.0% |
| fhir:loinc-only | 88 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| fhir:text-only | 154 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| colon | 118 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By units
| units | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| SI | 1246 | 68.1% | 0.5% | 5.2% | 1.2% | 25.0% |
| conventional | 3704 | 98.3% | 0.054% | 0.0% | 0.0% | 1.7% |

## By decimal
| decimal | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| point | 2609 | 86.9% | 0.3% | 2.5% | 0.6% | 9.9% |
| comma | 2341 | 95.0% | 0.043% | 0.043% | 0.0% | 5.0% |

## By sep
| sep | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| tab | 434 | 83.9% | 0.0% | 0.0% | 0.2% | 15.9% |
| single | 1204 | 87.6% | 0.083% | 1.3% | 0.2% | 10.8% |
| wide | 3312 | 92.7% | 0.2% | 1.5% | 0.4% | 5.3% |

## By order
| order | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| FVUR | 114 | 74.6% | 0.9% | 0.0% | 0.0% | 24.6% |
| VURF | 1701 | 89.9% | 0.059% | 0.7% | 0.2% | 9.1% |
| VFUR | 2654 | 90.2% | 0.2% | 1.9% | 0.4% | 7.2% |
| VFRU | 481 | 99.6% | 0.0% | 0.4% | 0.0% | 0.0% |

## By marker
| marker | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| magnesium-serum | 95 | 82.1% | 0.0% | 5.3% | 0.0% | 12.6% |
| glucose-fasting | 95 | 84.2% | 0.0% | 2.1% | 1.1% | 12.6% |
| phosphorus-serum | 90 | 85.6% | 0.0% | 3.3% | 0.0% | 11.1% |
| rbc | 120 | 86.7% | 5.0% | 0.0% | 0.8% | 7.5% |
| blood-urea-nitrogen | 80 | 87.5% | 0.0% | 0.0% | 0.0% | 12.5% |
| creatinine-serum | 90 | 87.8% | 0.0% | 1.1% | 1.1% | 10.0% |
| calcium-total | 90 | 87.8% | 0.0% | 1.1% | 0.0% | 11.1% |
| free-t4 | 125 | 88.0% | 0.0% | 3.2% | 2.4% | 6.4% |
| egfr | 85 | 88.2% | 0.0% | 0.0% | 0.0% | 11.8% |
| vitamin-d-25-oh | 155 | 88.4% | 0.0% | 1.9% | 2.6% | 7.1% |
| potassium-serum | 95 | 88.4% | 0.0% | 0.0% | 0.0% | 11.6% |
| triglycerides | 95 | 88.4% | 0.0% | 4.2% | 1.1% | 6.3% |
| hba1c | 105 | 88.6% | 0.0% | 0.0% | 0.0% | 11.4% |
| folate-serum | 160 | 88.8% | 0.0% | 3.1% | 0.6% | 7.5% |
| mchc | 125 | 88.8% | 0.0% | 0.0% | 0.0% | 11.2% |
| uric-acid | 90 | 88.9% | 0.0% | 1.1% | 0.0% | 10.0% |
| chloride-serum | 90 | 88.9% | 0.0% | 0.0% | 0.0% | 11.1% |
| total-protein | 90 | 88.9% | 0.0% | 0.0% | 0.0% | 11.1% |
| free-t3 | 145 | 89.0% | 0.0% | 2.8% | 1.4% | 6.9% |
| sodium-serum | 105 | 89.5% | 0.0% | 0.0% | 0.0% | 10.5% |
| hs-crp | 105 | 89.5% | 0.0% | 0.0% | 0.0% | 10.5% |
| vitamin-b12 | 155 | 89.7% | 0.0% | 2.6% | 0.6% | 7.1% |
| albumin-serum | 90 | 90.0% | 0.0% | 0.0% | 0.0% | 10.0% |
| ldl-cholesterol | 120 | 90.0% | 0.0% | 5.0% | 0.0% | 5.0% |
| hdl-cholesterol | 130 | 90.8% | 0.0% | 4.6% | 0.0% | 4.6% |
| testosterone-total | 170 | 91.2% | 0.0% | 1.8% | 0.0% | 7.1% |
| total-bilirubin | 150 | 91.3% | 0.0% | 4.0% | 0.0% | 4.7% |
| platelet-count | 105 | 91.4% | 1.0% | 0.0% | 0.0% | 7.6% |
| total-cholesterol | 105 | 91.4% | 0.0% | 4.8% | 0.0% | 3.8% |
| wbc | 130 | 92.3% | 0.8% | 0.0% | 0.0% | 6.9% |
| serum-iron | 90 | 93.3% | 0.0% | 2.2% | 0.0% | 4.4% |
| alt | 175 | 93.7% | 0.0% | 0.0% | 0.0% | 6.3% |
| transferrin-saturation | 100 | 94.0% | 0.0% | 0.0% | 0.0% | 6.0% |
| hematocrit | 120 | 94.2% | 0.0% | 0.0% | 0.0% | 5.8% |
| tsh | 140 | 94.3% | 0.0% | 0.0% | 0.0% | 5.7% |
| hemoglobin | 140 | 94.3% | 0.0% | 0.0% | 0.0% | 5.7% |
| alp | 160 | 94.4% | 0.0% | 0.0% | 0.0% | 5.6% |
| mcv | 135 | 94.8% | 0.0% | 0.0% | 0.0% | 5.2% |
| ast | 135 | 94.8% | 0.0% | 0.0% | 0.0% | 5.2% |
| mch | 125 | 95.2% | 0.0% | 0.0% | 0.0% | 4.8% |
| ggt | 150 | 95.3% | 0.0% | 0.0% | 0.0% | 4.7% |
| ferritin | 95 | 95.8% | 0.0% | 0.0% | 0.0% | 4.2% |

## What went wrong, most common first

**39× range missed | DE tight | two-sided**
    r5-8v2 [DE twocol VFUR wide]  Leukozyten                           6,2   G/l   4,0-11,0  →  read 6.2 thousand/uL
    r5-8v2 [DE twocol VFUR wide]  Erythrozyten                         4,21   T/l   4,20-5,90  →  read 4.21 Million/uL
    r5-8v2 [DE twocol VFUR wide]  Hämatokrit                           31,9   %   36,0-50,0  →  read 31.9 %

**29× flag invented | none VFUR**
    r5-12v4 [RO plain VFUR single]  Creatinină serică 0,43 mg/dL [0,60 - 1,30]  →  read 0.43 mg/dL [0.6, 1.3] L
    r5-12v4 [RO plain VFUR single]  Sodiu 76 mmol/L [135 - 145]  →  read 76 mmol/L [135, 145] L
    r5-12v4 [RO plain VFUR single]  Fosfor seric 5,3 mg/dL [2,5 - 4,5]  →  read 5.3 mg/dL [2.5, 4.5] H

**27× range missed | US spaced | two-sided**
    r5-5v1 [US plain VFRU wide]  BILIRUBIN, TOTAL                     0.5   0.2 - 1.2 mg/dL  →  read 0.5 mg/dL
    r5-5v1 [US plain VFRU wide]  ALT (SGPT)                           16   7 - 56 U/L  →  read 16 U/L
    r5-5v1 [US plain VFRU wide]  ALKALINE PHOSPHATASE                 97   44 - 147 U/L  →  read 97 U/L

**26× flag invented | none VURF**
    r5-12v1 [UK plain VURF wide]  Creatinine                           38   µmol/L   (53 - 115)  →  read 0.43 mg/dL [0.6, 1.3] L
    r5-12v1 [UK plain VURF wide]  Sodium                               76   mmol/L   (135 - 145)  →  read 76 mmol/L [135, 145] L
    r5-12v1 [UK plain VURF wide]  Phosphate                            1.71   mmol/L   (0.81 - 1.45)  →  read 5.3 mg/dL [2.51, 4.49] H

**24× range missed | ES bracket | two-sided**
    r5-43v3 [ES wrap VFUR wide]  GLUCOSA                              80,00   mg/dL   [70,00 - 99,00]  →  read 80 mg/dL
    r5-43v3 [ES wrap VFUR wide]  HEMOGLOBINA GLICADA (HBA1C) ⏎         3,600   %   [4,000 - 5,600]  →  read 3.6 %
    r5-43v3 [ES wrap VFUR wide]  CREATININA                           0,8000   mg/dL   [0,6000 - 1,3000]  →  read 0.8 mg/dL

**23× range missed | RO tight | two-sided**
    r5-17v4 [RO wrap VFUR wide]  Bilirubina totala ⏎         1.0   mg/dl   0.2-1.2  →  read 1 mg/dL
    r5-17v4 [RO wrap VFUR wide]  TGP (ALT)                            25   U/L   7-56  →  read 25 U/L
    r5-17v4 [RO wrap VFUR wide]  Fosfatază alcalină ⏎         87   U/L   44-147  →  read 87 U/L

**20× flag invented | HL VURF**
    r5-11v3 [DE fhir:loinc-only VURF wide]  GPT (ALT) 662 U/L  →  read 662 U/L [7, 56] H
    r5-11v3 [DE fhir:loinc-only VURF wide]  GESAMTCHOLESTERIN 268 mg/dL  →  read 268 mg/dL [, 200] H
    r5-11v3 [DE fhir:loinc-only VURF wide]  25-OH-VITAMIN D 22 ng/mL  →  read 22 ng/mL [30, 100] L

**17× flag invented | star VURF**
    r5-5v2 [UK fhir:text-only VURF wide]  GGT 7 U/L  →  read 7 U/L [8, 61] L
    r5-5v2 [UK fhir:text-only VURF wide]  WHITE CELL COUNT 19.0 10*3/uL  →  read 19 Thousand/uL [4, 11] H
    r5-5v2 [UK fhir:text-only VURF wide]  HAEMOGLOBIN 216 g/L  →  read 21.6 g/dL [12, 17.5] H

**15× range missed | RO bracket | two-sided**
    r5-25v4 [RO colon VFUR wide]  NUMĂR DE LEUCOCITE:                  3.4   ↓   *10^3/uL   [4.0 - 11.0]  →  read 3.4 thousand/uL L
    r5-25v4 [RO colon VFUR wide]  NUMĂR DE ERITROCITE:                 4.83   mil./µL   [4.20 - 5.90]  →  read 4.83 Million/uL
    r5-25v4 [RO colon VFUR wide]  HEMOGLOBINĂ:                         15.3   g/dL   [12.0 - 17.5]  →  read 15.3 g/dL

**15× range missed | ES spaced | two-sided**
    r5-46v3 [ES leaders VFUR single]  Leucocitos ........................ 10,50 x10^3/µL 4,00 - 11,00  →  read 10.5 thousand/uL
    r5-46v3 [ES leaders VFUR single]  Hematíes .......................... 5,760 10^6/µL 4,200 - 5,900  →  read 5.76 Million/uL
    r5-46v3 [ES leaders VFUR single]  Hemoglobina ....................... 14,70 g/dL 12,00 - 17,50  →  read 14.7 g/dL

**13× range wrong | UK spaced | two-sided**
    r5-1v1 [UK plain VFUR single]  Glucose 4.2 mmol/L 3.9 - 5.5  →  read 75.7 mg/dL [3.9, 5.5]
    r5-1v1 [UK plain VFUR single]  HbA1c 30 mmol/mol 20 - 38  →  read 4.9 % [20, 38]
    r5-1v1 [UK plain VFUR single]  Uric acid 190 µmol/L 149 - 416  →  read 3.2 mg/dL [149, 416]

**12× range missed | DE dash | two-sided**
    r5-36v0 [DE plain VURF single]  Bilirubin gesamt 0,4 mg/dl 0,2 – 1,2  →  read 0.4 mg/dL
    r5-36v0 [DE plain VURF single]  GPT (ALT) 28 U/l 7 – 56  →  read 28 U/L
    r5-36v0 [DE plain VURF single]  AST (GOT) 14 U/l 10 – 40  →  read 14 U/L

**11× flag invented | star VFUR**
    r5-19v1 [UK fhir:loinc+text VFUR wide]  Urate 440 µmol/L  →  read 7.4 mg/dL [2.5, 7] H
    r5-19v1 [UK fhir:loinc+text VFUR wide]  Magnesium 1.40 mmol/L  →  read 3.4 mg/dL [1.7, 2.4] H
    r5-19v1 [UK fhir:loinc+text VFUR wide]  Total protein 50 g/L  →  read 5 g/dL [6, 8.3] L

**11× flag invented | HL VFUR**
    r5-31v2 [UK fhir:loinc+text VFUR wide]  MCV 152.3 fL  →  read 152.3 fL [80, 100] H
    r5-31v2 [UK fhir:loinc+text VFUR wide]  MCH 39.0 pg  →  read 39 pg [27, 33] H
    r5-31v2 [UK fhir:loinc+text VFUR wide]  MCHC 460 g/L  →  read 46 g/dL [32, 36] H

**10× range missed | ES tight | two-sided**
    r5-56v4 [ES plain VURF single]  Bilirrubina total 0,80 mg/dL 0,20-1,20  →  read 0.8 mg/dL
    r5-56v4 [ES plain VURF single]  GOT (AST) 19,0 U/L 10,0-40,0  →  read 19 U/L
    r5-56v4 [ES plain VURF single]  Fosfatasa alcalina 49,0 U/L 44,0-147,0  →  read 49 U/L

**9× range missed | US spaced | lower only**
    r5-3v1 [US plain VFRU wide]  HDL CHOLESTEROL                      61   >40 mg/dL  →  read 61 mg/dL
    r5-8v1 [US plain VFUR wide]  HDL CHOLESTEROL                      46   mg/dL   >40  →  read 46 mg/dL
    r5-12v0 [US plain VFRU wide]  EGFR                                 107   >60 mL/min/1.73m2  →  read 107 mL/min/1.73m2

**9× date missed | UK lines**
    r5-8v0  want 2026-05-11 read null
    r5-14v2  want 2026-03-15 read null
    r5-22v1  want 2026-11-10 read null

**9× range missed | US tight | two-sided**
    r5-17v0 [US plain VFUR wide]  BILIRUBIN, TOTAL                     1.0   mg/dL   0.2-1.2  →  read 1 mg/dL
    r5-17v0 [US plain VFUR wide]  ALT                                  25   U/L   7-56  →  read 25 U/L
    r5-17v0 [US plain VFUR wide]  AST (SGOT)                           8   L   U/L   10-40  →  read 8 U/L L

**9× flag invented | arrows VFUR**
    r5-23v4 [RO fhir:text-only VFUR wide]  Creatinina 4.49 mg/dL  →  read 4.49 mg/dL [0.6, 1.3] H
    r5-23v4 [RO fhir:text-only VFUR wide]  Sodiu 197 mmol/L  →  read 197 mmol/L [135, 145] H
    r5-23v4 [RO fhir:text-only VFUR wide]  Potasiu seric 3.4 mmol/L  →  read 3.4 mmol/L [3.5, 5.1] L

**8× range missed | US tight | lower only**
    r5-1v0 [US csv:comma VFUR wide]  EGFR,107,,mL/min/1.73m2,>60  →  read 107 mL/min/1.73m2
    r5-9v0 [US plain VFRU single]  EGFR 63 >60 mL/min/1.73m2  →  read 63 mL/min/1.73m2
    r5-9v0 [US plain VFRU single]  HDL CHOLESTEROL 50 >40 mg/dL  →  read 50 mg/dL

**8× miss | magnesium-serum | "Magnesium"**
    r5-7v2 [DE plain VFUR wide]  Magnesium                            0,74   mmol/l   0,70-0,99
    r5-22v1 [UK plain VURF tab]  Magnesium	0.78	mmol/L	0.70 - 0.99
    r5-23v1 [UK plain VFUR tab]  Magnesium	0.91	mmol/L	0.70-0.99

**7× miss | hba1c | "HbA1c"**
    r5-7v2 [DE plain VFUR wide]  HbA1c                                21   mmol/mol   20-38
    r5-10v3 [ES twocol FVUR single]  HbA1c 5,50 % [4,00 - 5,60]
    r5-22v1 [UK plain VURF tab]  HbA1c	37	mmol/mol	20 - 38

**7× miss | tsh | "TSH"**
    r5-7v2 [DE plain VFUR wide]  TSH                                  0,730   µU/ml   0,40-4,00
    r5-14v2 [UK plain VURF wide]  TSH                                  2.190   mIU/L   0.40-4.00
    r5-23v1 [UK plain VFUR tab]  TSH	4.54	H	mIU/L	0.40-4.00

**7× miss | vitamin-b12 | "Vitamin B12"**
    r5-7v2 [DE plain VFUR wide]  Vitamin B12                          777   ↑   pmol/l   148-664
    r5-23v1 [UK plain VFUR tab]  Vitamin B12	359	pmol/L	148-664
    r5-28v2 [UK glue VFUR wide]  Vitamin B12                          623pmol/L   148-664

**7× miss | mcv | "MCV"**
    r5-8v0 [UK twocol VFUR wide]  MCV                                  80.20   fL   80.00 – 100.00
    r5-12v2 [DE leaders VFUR single]  MCV ............................... 53,2 - fl (80,0 - 100,0)
    r5-22v1 [UK plain VURF tab]  MCV	64.9	fL	80.0 - 100.0	LOW

**7× range missed | UK dash | two-sided**
    r5-13v1 [UK plain VFUR wide]  Fasting glucose                      1.7   mmol/L   3.9 – 5.5  →  read 30.6 mg/dL L
    r5-13v1 [UK plain VFUR wide]  HbA1c                                16   mmol/mol   20 – 38  →  read 3.61 % L
    r5-13v1 [UK plain VFUR wide]  Creatinine                           217   µmol/L   53 – 115  →  read 2.45 mg/dL H

**6× unconverted | total-bilirubin | µmol/L**
    r5-0v1 [UK csv:lowhigh VFUR wide]  Total bilirubin,7,µmol/L,3,21,2026-06-06  →  read 7 µmol/L [3, 21]
    r5-11v2 [UK plain VURF single]  TOTAL BILIRUBIN 7 µmol/L 3 – 21  →  read 7 µmol/L [3, 21]
    r5-41v2 [UK plain VFUR wide]  Total bilirubin                      10.3   µmol/L   [3.0 - 21.0]  →  read 10.3 µmol/L [3, 21]

**6× flag invented | arrows VURF**
    r5-0v3 [ES fhir:loinc+text VURF wide]  Fosfatasa alcalina 23 U/L  →  read 23 U/L [44, 147] L
    r5-0v3 [ES fhir:loinc+text VURF wide]  TSH 0.22 m[IU]/L  →  read 0.22 mIU/L [0.4, 4] L
    r5-21v4 [RO fhir:loinc+text VURF wide]  NUMĂR DE ERITROCITE 6.31 M/uL  →  read 6.31 M/uL [4.2, 5.9] H

**6× flag missed | plusminus VFUR**
    r5-2v3 [DE plain VFUR wide]  GGT                                  6   -   U/l   (8 - 61)  →  read 6 U/L [8, 61]
    r5-10v2 [DE plain VFUR wide]  Glucose                              67   -   mg/dl   [70 - 99]  →  read 67 mg/dL [70, 99]
    r5-10v2 [DE plain VFUR wide]  Harnsäure                            1,4   -   mg/dl   [2,5 - 7,0]  →  read 1.4 mg/dL [2.5, 7]

**6× miss | mchc | "CHEM"**
    r5-2v4 [RO glue VURF single]  CHEM 32.600g/dL [32.000 - 36.000]
    r5-4v0 [RO twocol VURF wide]  CHEM                                 35,0   g/dl   [32,0 - 36,0]
    r5-10v4 [RO plain VFUR wide]  CHEM                                 29.100   ↓   g/dL   32.000 – 36.000

**6× range missed | DE tight | upper only**
    r5-3v0 [DE plain VURF wide]  CHOLESTERIN GESAMT                   98,00   mg/dl   < 200,00  →  read 98 mg/dL
    r5-8v2 [DE twocol VFUR wide]  Gesamtcholesterin                    135   mg/dl   < 200  →  read 135 mg/dL
    r5-8v2 [DE twocol VFUR wide]  LDL-Cholesterin                      152   mg/dl   bis 100  →  read 152 mg/dL

**6× miss | albumin-serum | "Albumin"**
    r5-7v2 [DE plain VFUR wide]  Albumin                              36   g/l   35-50
    r5-23v1 [UK plain VFUR tab]  Albumin	48	g/L	35-50
    r5-28v2 [UK glue VFUR wide]  Albumin                              43g/L   35-50

**6× miss | mch | "MCH"**
    r5-7v2 [DE plain VFUR wide]  MCH                                  35,9   ↑   pg   27,0-33,0
    r5-8v0 [UK twocol VFUR wide]  MCH                                  32.30   pg   27.00 – 33.00
    r5-12v2 [DE leaders VFUR single]  MCH ............................... 27,5 pg (27,0 - 33,0)

**6× miss | mchc | "MCHC"**
    r5-8v0 [UK twocol VFUR wide]  MCHC                                 342.0   g/L   320.0 – 360.0
    r5-12v2 [DE leaders VFUR single]  MCHC .............................. 327 g/l (320 - 360)
    r5-22v1 [UK plain VURF tab]  MCHC	492	g/L	320 - 360	HIGH

**6× range missed | DE tight | lower only**
    r5-8v2 [DE twocol VFUR wide]  HDL-Cholesterin                      46   mg/dl   >= 40  →  read 46 mg/dL
    r5-28v3 [DE plain VURF wide]  eGFR (CKD-EPI)                       64   mL/min/1.73m2   >= 60  →  read 64 mL/min/1.73m2
    r5-29v2 [DE plain VURF single]  HDL-CHOLESTERIN 41 mg/dl >40  →  read 41 mg/dL

**6× unconverted | ldl-cholesterol | mmol/L**
    r5-11v2 [UK plain VURF single]  LDL CHOLESTEROL 2.3 mmol/L <= 2.6  →  read 2.3 mmol/L [, 2.6]
    r5-30v2 [UK plain VFUR wide]  LDL cholesterol                      2.28   mmol/L   < 2.60  →  read 2.28 mmol/L [, 2.6]
    r5-39v1 [UK plain VFUR wide]  LDL cholesterol                      3.2   mmol/L   <2.6  →  read 3.2 mmol/L [, 2.6]

**6× unconverted | hdl-cholesterol | mmol/L**
    r5-11v2 [UK plain VURF single]  HDL CHOLESTEROL 1.29 mmol/L > 1.03  →  read 1.29 mmol/L [1.03, ]
    r5-30v2 [UK plain VFUR wide]  HDL cholesterol                      0.853   *   mmol/L   >1.030  →  read 0.853 mmol/L [1.03, ] L
    r5-39v1 [UK plain VFUR wide]  HDL cholesterol                      1.24   mmol/L   > 1.03  →  read 1.24 mmol/L [1.03, ]

**6× miss | creatinine-serum | "Creatinine"**
    r5-22v1 [UK plain VURF tab]  Creatinine	43	µmol/L	53 - 115	LOW
    r5-23v1 [UK plain VFUR tab]  Creatinine	397	H	µmol/L	53-115
    r5-28v2 [UK glue VFUR wide]  Creatinine                           106µmol/L   53-115

**6× miss | calcium-total | "Calcium"**
    r5-22v1 [UK plain VURF tab]  Calcium	2.52	mmol/L	2.15 - 2.57
    r5-23v1 [UK plain VFUR tab]  Calcium	2.22	mmol/L	2.15-2.57
    r5-28v2 [UK glue VFUR wide]  Calcium                              2.25mmol/L   2.15-2.57

**6× miss | free-t3 | "Free T3"**
    r5-22v1 [UK plain VURF tab]  Free T3	7.1	pmol/L	3.5 - 6.5	HIGH
    r5-23v1 [UK plain VFUR tab]  Free T3	3.7	pmol/L	3.5-6.5
    r5-28v2 [UK glue VFUR wide]  Free T3                              2.9   LOW   pmol/L   3.5-6.5

**6× miss | transferrin-saturation | "Transferrin saturation"**
    r5-23v1 [UK plain VFUR tab]  Transferrin saturation	47	%	20-50
    r5-28v2 [UK glue VFUR wide]  Transferrin saturation               44%   20-50
    r5-34v1 [UK plain VURF wide]  Transferrin saturation               12   %   20 – 50   LOW

**6× miss | testosterone-total | "Testosterone"**
    r5-23v1 [UK plain VFUR tab]  Testosterone	10.5	nmol/L	9.2-31.8
    r5-28v2 [UK glue VFUR wide]  Testosterone                         12.0nmol/L   9.2-31.8
    r5-34v1 [UK plain VURF wide]  Testosterone                         7.2   nmol/L   9.2 – 31.8   LOW

**5× flag invented | words VURF**
    r5-7v1 [UK fhir:loinc+text VURF wide]  Sodium 130 mmol/L  →  read 130 mmol/L [135, 145] L
    r5-7v1 [UK fhir:loinc+text VURF wide]  Total protein 126 g/L  →  read 12.6 g/dL [6, 8.3] H
    r5-7v1 [UK fhir:loinc+text VURF wide]  MCH 35.9 pg  →  read 35.9 pg [27, 33] H

**5× flag invented | star FVUR**
    r5-7v3 [ES fhir:loinc+text FVUR wide]  SODIO 130 mmol/L  →  read 130 mmol/L [135, 145] L
    r5-7v3 [ES fhir:loinc+text FVUR wide]  PROTEÍNAS TOTALES 12.6 g/dL  →  read 12.6 g/dL [6, 8.3] H
    r5-7v3 [ES fhir:loinc+text FVUR wide]  HCM 35.9 pg  →  read 35.9 pg [27, 33] H

**5× unconverted | total-cholesterol | mmol/L**
    r5-11v2 [UK plain VURF single]  TOTAL CHOLESTEROL 6.9 mmol/L <5.2  →  read 6.9 mmol/L [, 5.2]
    r5-39v1 [UK plain VFUR wide]  Total cholesterol                    4.9   mmol/L   < 5.2  →  read 4.9 mmol/L [, 5.2]
    r5-40v2 [UK wrap VFUR wide]  Total cholesterol ⏎         4.6   mmol/L   <5.2  →  read 4.6 mmol/L [, 5.2]

**5× unconverted | folate-serum | nmol/L**
    r5-11v2 [UK plain VURF single]  FOLATE 47.4 nmol/L 6.8 – 45.3  →  read 47.4 nmol/L [6.8, 45.3]
    r5-13v1 [UK plain VFUR wide]  Folate                               22.4   nmol/L   6.8 – 45.3  →  read 22.4 nmol/L [6.8, 45.3]
    r5-30v2 [UK plain VFUR wide]  Folate                               17.67   nmol/L   [6.80 - 45.30]  →  read 17.67 nmol/L [6.8, 45.3]

**5× miss | glucose-fasting | "Glucose"**
    r5-22v1 [UK plain VURF tab]  Glucose	4.7	mmol/L	3.9 - 5.5
    r5-23v1 [UK plain VFUR tab]  Glucose	4.8	mmol/L	3.9-5.5
    r5-34v1 [UK plain VURF wide]  Glucose                              3.7   mmol/L   3.9 – 5.5   LOW

**5× miss | egfr | "eGFR"**
    r5-22v1 [UK plain VURF tab]  eGFR	94	mL/min/1.73m2	>60
    r5-23v1 [UK plain VFUR tab]  eGFR	86	mL/min/1.73m2	>60
    r5-28v2 [UK glue VFUR wide]  eGFR                                 64mL/min/1.73m2   >60

**5× miss | sodium-serum | "Sodium"**
    r5-22v1 [UK plain VURF tab]  Sodium	142	mmol/L	135 - 145
    r5-23v1 [UK plain VFUR tab]  Sodium	197	H	mmol/L	135-145
    r5-28v2 [UK glue VFUR wide]  Sodium                               144mmol/L   135-145

**5× miss | chloride-serum | "Chloride"**
    r5-22v1 [UK plain VURF tab]  Chloride	124	mmol/L	98 - 107	HIGH
    r5-28v2 [UK glue VFUR wide]  Chloride                             157   HIGH   mmol/L   98-107
    r5-34v1 [UK plain VURF wide]  Chloride                             102   mmol/L   98 – 107

**5× miss | phosphorus-serum | "Phosphate"**
    r5-22v1 [UK plain VURF tab]  Phosphate	1.65	mmol/L	0.81 - 1.45	HIGH
    r5-23v1 [UK plain VFUR tab]  Phosphate	0.65	L	mmol/L	0.81-1.45
    r5-28v2 [UK glue VFUR wide]  Phosphate                            1.84   HIGH   mmol/L   0.81-1.45

**5× miss | total-protein | "Total protein"**
    r5-22v1 [UK plain VURF tab]  Total protein	71	g/L	60 - 83
    r5-23v1 [UK plain VFUR tab]  Total protein	71	g/L	60-83
    r5-28v2 [UK glue VFUR wide]  Total protein                        70g/L   60-83

**5× miss | free-t4 | "Free T4"**
    r5-22v1 [UK plain VURF tab]  Free T4	27.2	pmol/L	10.3 - 23.2	HIGH
    r5-23v1 [UK plain VFUR tab]  Free T4	19.4	pmol/L	10.3-23.2
    r5-28v2 [UK glue VFUR wide]  Free T4                              30.5   HIGH   pmol/L   10.3-23.2

**5× miss | potassium-serum | "Potassium"**
    r5-23v1 [UK plain VFUR tab]  Potassium	3.4	L	mmol/L	3.5-5.1
    r5-28v2 [UK glue VFUR wide]  Potassium                            3.8mmol/L   3.5-5.1
    r5-34v1 [UK plain VURF wide]  Potassium                            4.1   mmol/L   3.5 – 5.1

**5× miss | vitamin-d-25-oh | "Vitamin D"**
    r5-23v1 [UK plain VFUR tab]  Vitamin D	215	nmol/L	75-250
    r5-34v1 [UK plain VURF wide]  Vitamin D                            40   nmol/L   75 – 250   LOW
    r5-42v1 [UK leaders VURF single]  Vitamin D ......................... 150 nmol/L 75 - 250

**5× range wrong | UK tight | two-sided**
    r5-24v0 [UK plain VURF wide]  White cell count                     37.7   ×10⁹/L   4.0-11.0   H  →  read 37.7 thousand/uL [, 11] H
    r5-27v2 [UK csv:lowhigh VFUR wide]  25-OH Vitamin D,195,nmol/L,75,250,2026-04-13  →  read 78 ng/mL [75, 250]
    r5-27v2 [UK csv:lowhigh VFUR wide]  Vitamin B12,725,pmol/L,148,664,2026-04-13  →  read 982.4 pg/mL [664, ]

**5× flag invented | words VFUR**
    r5-49v1 [UK fhir:loinc+text VFUR wide]  CREATININE 268 µmol/L  →  read 3.03 mg/dL [0.6, 1.3] H
    r5-49v1 [UK fhir:loinc+text VFUR wide]  URIC ACID 107 µmol/L  →  read 1.8 mg/dL [2.5, 6.99] L
    r5-49v1 [UK fhir:loinc+text VFUR wide]  POTASSIUM 2.7 mmol/L  →  read 2.7 mmol/L [3.5, 5.1] L

**4× unconverted | free-t3 | pmol/L**
    r5-0v1 [UK csv:lowhigh VFUR wide]  Free T3,4.6,pmol/L,3.5,6.5,2026-06-06  →  read 4.6 pmol/L [3.5, 6.5]
    r5-30v2 [UK plain VFUR wide]  Free T3                              4.15   pmol/L   [3.50 - 6.50]  →  read 4.15 pmol/L [3.5, 6.5]
    r5-33v1 [UK plain VURF single]  Free T3 4.8 pmol/L [3.5 - 6.5]  →  read 4.8 pmol/L [3.5, 6.5]

**4× range missed | RO tight | lower only**
    r5-1v4 [RO plain VFUR wide]  RATA DE FILTRARE GLOMERULARĂ ESTIMATĂ   107,00   mL/min/1.73m2   >= 60,00  →  read 107 mL/min/1.73m2
    r5-35v4 [RO plain VURF single]  Colesterol HDL 49,0 mg/dL >40,0  →  read 49 mg/dL
    r5-55v4 [RO unitspace VFUR single]  EGFR 70 mL / min/1.73m2 >60  →  read 70 mL/min/1.73m2

**4× flag invented | words VFRU**
    r5-4v1 [US fhir:loinc-only VFRU wide]  ALT (SGPT) 4 U/L  →  read 4 U/L [7, 56] L
    r5-4v1 [US fhir:loinc-only VFRU wide]  WBC 2.4 10*3/uL  →  read 2.4 Thousand/uL [4, 11] L
    r5-4v1 [US fhir:loinc-only VFRU wide]  HEMATOCRIT 23.8 %  →  read 23.8 % [36, 50] L

**4× miss | hs-crp | "hsCRP"**
    r5-7v2 [DE plain VFUR wide]  hsCRP                                2,6   mg/l   bis 3,0
    r5-23v1 [UK plain VFUR tab]  hsCRP	4.6	H	mg/L	<= 3.0
    r5-42v1 [UK leaders VURF single]  hsCRP ............................. 3.4 mg/L < 3.0

**4× miss | wbc | "WBC"**
    r5-8v0 [UK twocol VFUR wide]  WBC                                  6.20   ×10⁹/L   4.00 – 11.00
    r5-22v1 [UK plain VURF tab]  WBC	43.7	×10⁹/L	4.0 - 11.0	HIGH
    r5-34v1 [UK plain VURF wide]  WBC                                  7.5   10*9/L   4.0 – 11.0

**4× range missed | DE bracket | lower only**
    r5-10v2 [DE plain VFUR wide]  eGFR (CKD-EPI)                       81   mL/min/1.73m2   > 60  →  read 81 mL/min/1.73m2
    r5-13v2 [DE leaders VURF wide]  eGFR (CKD-EPI) ....................   101   mL/min/1.73m2   >= 60  →  read 101 mL/min/1.73m2
    r5-22v2 [DE glue VFUR wide]  eGFR (CKD-EPI)                       94mL/min/1.73m2   > 60  →  read 94 mL/min/1.73m2

**4× unconverted | triglycerides | mmol/L**
    r5-11v2 [UK plain VURF single]  TRIGLYCERIDES 0.86 mmol/L <1.69  →  read 0.86 mmol/L [, 1.69]
    r5-30v2 [UK plain VFUR wide]  Triglycerides                        1.344   mmol/L   <= 1.690  →  read 1.344 mmol/L [, 1.69]
    r5-56v2 [UK unitspace VFUR wide]  Triglycerides                        1.26   mmol / L   < 1.69  →  read 1.26 mmol/L [, 1.69]

**4× unconverted | vitamin-b12 | pmol/L**
    r5-11v2 [UK plain VURF single]  VITAMIN B12 94 pmol/L 148 – 664  →  read 94 pmol/L [148, 664]
    r5-30v2 [UK plain VFUR wide]  Vitamin B12                          138.0   *   pmol/L   [148.0 - 664.0]  →  read 138 pmol/L [148, 664] L
    r5-56v2 [UK unitspace VFUR wide]  Vitamin B12                          359   pmol / L   148-664  →  read 359 pmol/L [148, 664]

**4× range missed | ES bracket | lower only**
    r5-12v3 [ES plain VFUR tab]  Filtrado glomerular estimado (CKD-EPI)	107	mL/min/1.73m2	>60  →  read 107 mL/min/1.73m2
    r5-14v4 [ES unitspace VFUR wide]  Filtrado glomerular estimado (CKD-EPI)   64,00   mL / min/1.73m2   >= 60,00  →  read 64 mL/min/1.73m2
    r5-43v3 [ES wrap VFUR wide]  FILTRADO GLOMERULAR ESTIMADO (CKD-EPI) ⏎         73,00   mL/min/1.73m2   > 60,00  →  read 73 mL/min/1.73m2

**4× unconverted | magnesium-serum | mmol/L**
    r5-13v1 [UK plain VFUR wide]  Magnesium                            0.78   mmol/L   0.70 – 0.99  →  read 0.78 mmol/L [0.7, 0.99]
    r5-26v1 [US csv:lowhigh VFRU wide]  Magnesium,0.91,mmol/L,0.7,0.99,2026-07-02  →  read 0.91 mmol/L [0.7, 0.99]
    r5-26v2 [UK plain VFUR single]  Magnesium 0.91 mmol/L (0.70 - 0.99)  →  read 0.91 mmol/L [0.7, 0.99]

**4× unconverted | free-t4 | pmol/L**
    r5-13v1 [UK plain VFUR wide]  Free T4                              18.4   pmol/L   10.3 – 23.2  →  read 18.4 pmol/L [10.3, 23.2]
    r5-26v2 [UK plain VFUR single]  Free T4 23.0 pmol/L (10.3 - 23.2)  →  read 23 pmol/L [10.3, 23.2]
    r5-33v1 [UK plain VURF single]  Free T4 13.4 pmol/L [10.3 - 23.2]  →  read 13.4 pmol/L [10.3, 23.2]

**4× range wrong | DE bracket | two-sided**
    r5-13v2 [DE leaders VURF wide]  HbA1c .............................   16   mmol/mol   [20 - 38]   ↓  →  read 3.61 % [3.98, 5.57] L
    r5-35v3 [DE glue VFUR single]  AST (GOT) 54 * U/l [10 - 40]  →  read 54 U/L [, 40] H
    r5-35v3 [DE glue VFUR single]  AP 161 * U/l [44 - 147]  →  read 161 U/L [, 147] H

**4× range missed | ES bracket | upper only**
    r5-14v4 [ES unitspace VFUR wide]  PCR ultrasensible                    2,400   mg / L   < 3,000  →  read 2.4 mg/L
    r5-30v4 [ES plain VURF tab]  Colesterol LDL	88,00	mg/dL	< 100,00  →  read 88 mg/dL
    r5-30v4 [ES plain VURF tab]  Triglicéridos	119,00	mg/dL	< 150,00  →  read 119 mg/dL

**4× miss | blood-urea-nitrogen | "Blood urea nitrogen"**
    r5-22v1 [UK plain VURF tab]  Blood urea nitrogen	9	mg/dL	7 - 25
    r5-23v1 [UK plain VFUR tab]  Blood urea nitrogen	14	mg/dL	7-25
    r5-28v2 [UK glue VFUR wide]  Blood urea nitrogen                  34   HIGH   mg/dL   7-25

**4× miss | total-bilirubin | "Bilirubin"**
    r5-22v1 [UK plain VURF tab]  Bilirubin	7	µmol/L	3 - 21
    r5-34v1 [UK plain VURF wide]  Bilirubin                            14   µmol/L   3 – 21
    r5-42v1 [UK leaders VURF single]  Bilirubin ......................... 19 µmol/L 3 - 21

**4× miss | alt | "Alanine aminotransferase"**
    r5-22v1 [UK plain VURF tab]  Alanine aminotransferase	31	U/L	7 - 56
    r5-23v1 [UK plain VFUR tab]  Alanine aminotransferase	18	U/L	7-56
    r5-42v1 [UK leaders VURF single]  Alanine aminotransferase .......... 6 U/L 7 - 56

**4× miss | hematocrit | "Haematocrit"**
    r5-22v1 [UK plain VURF tab]  Haematocrit	0.44	L/L	0.36 - 0.50
    r5-23v1 [UK plain VFUR tab]  Haematocrit	0.34	L	L/L	0.36-0.50
    r5-34v1 [UK plain VURF wide]  Haematocrit                          0.42   L/L   0.36 – 0.50

**4× miss | ggt | "Gamma GT"**
    r5-23v1 [UK plain VFUR tab]  Gamma GT	42	U/L	8-61
    r5-34v1 [UK plain VURF wide]  Gamma GT                             28   U/L   8 – 61
    r5-42v1 [UK leaders VURF single]  Gamma GT .......................... 18 U/L 8 - 61

**4× miss | serum-iron | "Iron"**
    r5-23v1 [UK plain VFUR tab]  Iron	16.5	µmol/L	9.0-30.4
    r5-28v2 [UK glue VFUR wide]  Iron                                 17.5µmol/L   9.0-30.4
    r5-34v1 [UK plain VURF wide]  Iron                                 28.8   µmol/L   9.0 – 30.4

**4× miss | ferritin | "Ferritin"**
    r5-23v1 [UK plain VFUR tab]  Ferritin	138	µg/L	30-300
    r5-28v2 [UK glue VFUR wide]  Ferritin                             23   LOW   µg/L   30-300
    r5-43v1 [UK plain VFUR wide]  Ferritin                             93   µg/L   [30 - 300]

**4× miss | folate-serum | "Serum folate"**
    r5-23v1 [UK plain VFUR tab]  Serum folate	19.9	nmol/L	6.8-45.3
    r5-42v1 [UK leaders VURF single]  Serum folate ...................... 14.5 nmol/L 6.8 - 45.3
    r5-43v1 [UK plain VFUR wide]  Serum folate                         35.1   nmol/L   [6.8 - 45.3]

**4× range missed | ES tight | upper only**
    r5-26v4 [ES csv:semicolon VFUR wide]  Proteína C reactiva ultrasensible;1,7;mg/L;< 3,0  →  read 1.7 mg/L
    r5-56v4 [ES plain VURF single]  Colesterol total 181,0 mg/dL < 200,0  →  read 181 mg/dL
    r5-56v4 [ES plain VURF single]  Colesterol LDL 90,0 mg/dL < 100,0  →  read 90 mg/dL

**4× range missed | RO tight | upper only**
    r5-35v4 [RO plain VURF single]  Colesterol LDL 50,0 mg/dL <= 100,0  →  read 50 mg/dL
    r5-57v4 [RO plain VFUR wide]  COLESTEROL TOTAL                     92,00   mg/dL   < 200,00  →  read 92 mg/dL
    r5-57v4 [RO plain VFUR wide]  LDL COLESTEROL                       56,00   mg/dL   <= 100,00  →  read 56 mg/dL

…and 230 smaller groups.
