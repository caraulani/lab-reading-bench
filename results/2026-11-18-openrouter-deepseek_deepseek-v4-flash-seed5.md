# Lab-report reader stress test

300 generated reports, 4950 rows with a known answer, seed 5. Read in 1049.9 s (3499.8 ms a report).

| Outcome | Rows | Share | 95% interval |
|---|---|---|---|
| ok | 4279 | 86.4% | 85.46–87.37% |
| unit | 0 | 0.0% | 0.00–0.08% |
| unconverted | 17 | 0.3% | 0.21–0.55% |
| wrong | 26 | 0.5% | 0.36–0.77% |
| miss | 628 | 12.7% | 11.79–13.64% |

- **Critical values:** 44 of 60 caught (73.3%, interval 60.99–82.87%); 16 lost because the row was not read, 0 because it was misread. False critical alarms: 7.
- **Rows that are not on the report:** 1 (of 4323 rows read).
- **Lab's flag:** ok 4009, invented 285, missed 2.
- **Reference range:** ok 4282, wrong 6, missed 8.
- **Collection date:** ok 251, missed 27, wrong 1.
- **Format invariance** (5 printings of each set of results): of 990 markers, read right in every printing 481 (48.6%), right in some printings but not others 509 (51.4%), never right 0. Critical results caught in every printing: 3 of 12; caught in some printings only: 9.

## By locale
| locale | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| UK | 990 | 73.0% | 0.0% | 1.7% | 2.5% | 22.7% |
| RO | 990 | 85.9% | 0.0% | 0.0% | 0.0% | 14.1% |
| DE | 990 | 86.8% | 0.0% | 0.0% | 0.1% | 13.1% |
| US | 990 | 90.0% | 0.0% | 0.0% | 0.0% | 10.0% |
| ES | 990 | 96.6% | 0.0% | 0.0% | 0.0% | 3.4% |

## By kind
| kind | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| lines | 4061 | 84.7% | 0.0% | 0.4% | 0.6% | 14.4% |
| csv | 434 | 94.5% | 0.0% | 0.0% | 0.5% | 5.1% |
| fhir | 455 | 94.5% | 0.0% | 0.4% | 0.0% | 5.1% |

## By variant
| variant | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| csv:lowhigh | 108 | 79.6% | 0.0% | 0.0% | 0.0% | 20.4% |
| plain | 2382 | 80.1% | 0.0% | 0.6% | 0.7% | 18.6% |
| leaders | 223 | 86.1% | 0.0% | 0.0% | 0.0% | 13.9% |
| glue | 348 | 86.5% | 0.0% | 0.0% | 1.7% | 11.8% |
| twocol | 441 | 86.6% | 0.0% | 0.0% | 0.0% | 13.4% |
| fhir:loinc+text | 213 | 88.3% | 0.0% | 0.9% | 0.0% | 10.8% |
| wrap | 253 | 96.8% | 0.0% | 0.0% | 0.0% | 3.2% |
| csv:comma | 74 | 97.3% | 0.0% | 0.0% | 2.7% | 0.0% |
| unitspace | 296 | 99.0% | 0.0% | 0.0% | 0.7% | 0.3% |
| fhir:loinc-only | 88 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| fhir:text-only | 154 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| csv:semicolon | 252 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| colon | 118 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By units
| units | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| SI | 1246 | 73.8% | 0.0% | 1.4% | 2.1% | 22.8% |
| conventional | 3704 | 90.7% | 0.0% | 0.0% | 0.0% | 9.3% |

## By decimal
| decimal | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| point | 2609 | 83.9% | 0.0% | 0.7% | 1.0% | 14.5% |
| comma | 2341 | 89.3% | 0.0% | 0.0% | 0.043% | 10.7% |

## By sep
| sep | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| single | 1204 | 84.6% | 0.0% | 1.2% | 0.2% | 13.9% |
| wide | 3312 | 86.7% | 0.0% | 0.060% | 0.6% | 12.6% |
| tab | 434 | 89.2% | 0.0% | 0.0% | 0.9% | 9.9% |

## By order
| order | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| FVUR | 114 | 70.2% | 0.0% | 0.0% | 0.0% | 29.8% |
| VFUR | 2654 | 84.0% | 0.0% | 0.4% | 0.8% | 14.8% |
| VURF | 1701 | 89.4% | 0.0% | 0.4% | 0.4% | 9.9% |
| VFRU | 481 | 93.6% | 0.0% | 0.0% | 0.0% | 6.4% |

## By marker
| marker | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| hba1c | 105 | 78.1% | 0.0% | 1.0% | 3.8% | 17.1% |
| glucose-fasting | 95 | 78.9% | 0.0% | 2.1% | 4.2% | 14.7% |
| magnesium-serum | 95 | 78.9% | 0.0% | 2.1% | 0.0% | 18.9% |
| egfr | 85 | 80.0% | 0.0% | 0.0% | 0.0% | 20.0% |
| total-protein | 90 | 80.0% | 0.0% | 1.1% | 0.0% | 18.9% |
| creatinine-serum | 90 | 81.1% | 0.0% | 1.1% | 0.0% | 17.8% |
| blood-urea-nitrogen | 80 | 81.3% | 0.0% | 0.0% | 0.0% | 18.8% |
| phosphorus-serum | 90 | 82.2% | 0.0% | 1.1% | 0.0% | 16.7% |
| potassium-serum | 95 | 83.2% | 0.0% | 0.0% | 0.0% | 16.8% |
| triglycerides | 95 | 83.2% | 0.0% | 0.0% | 2.1% | 14.7% |
| uric-acid | 90 | 83.3% | 0.0% | 0.0% | 0.0% | 16.7% |
| chloride-serum | 90 | 83.3% | 0.0% | 0.0% | 0.0% | 16.7% |
| calcium-total | 90 | 83.3% | 0.0% | 0.0% | 1.1% | 15.6% |
| hs-crp | 105 | 83.8% | 0.0% | 0.0% | 0.0% | 16.2% |
| hdl-cholesterol | 130 | 84.6% | 0.0% | 1.5% | 0.8% | 13.1% |
| sodium-serum | 105 | 84.8% | 0.0% | 0.0% | 0.0% | 15.2% |
| mchc | 125 | 84.8% | 0.0% | 0.8% | 0.0% | 14.4% |
| ldl-cholesterol | 120 | 85.0% | 0.0% | 0.8% | 0.8% | 13.3% |
| hematocrit | 120 | 85.0% | 0.0% | 0.0% | 0.0% | 15.0% |
| vitamin-b12 | 155 | 85.2% | 0.0% | 0.0% | 3.2% | 11.6% |
| wbc | 130 | 85.4% | 0.0% | 0.0% | 0.0% | 14.6% |
| albumin-serum | 90 | 85.6% | 0.0% | 1.1% | 0.0% | 13.3% |
| folate-serum | 160 | 85.6% | 0.0% | 0.0% | 2.5% | 11.9% |
| total-cholesterol | 105 | 85.7% | 0.0% | 1.0% | 1.0% | 12.4% |
| rbc | 120 | 85.8% | 0.0% | 0.0% | 0.0% | 14.2% |
| free-t4 | 125 | 87.2% | 0.0% | 0.8% | 0.8% | 11.2% |
| hemoglobin | 140 | 87.9% | 0.0% | 0.7% | 0.0% | 11.4% |
| mch | 125 | 88.0% | 0.0% | 0.0% | 0.0% | 12.0% |
| mcv | 135 | 88.1% | 0.0% | 0.0% | 0.0% | 11.9% |
| testosterone-total | 170 | 88.2% | 0.0% | 0.0% | 0.0% | 11.8% |
| vitamin-d-25-oh | 155 | 88.4% | 0.0% | 0.0% | 0.6% | 11.0% |
| platelet-count | 105 | 88.6% | 0.0% | 0.0% | 0.0% | 11.4% |
| serum-iron | 90 | 90.0% | 0.0% | 1.1% | 0.0% | 8.9% |
| alt | 175 | 90.3% | 0.0% | 0.0% | 0.0% | 9.7% |
| transferrin-saturation | 100 | 91.0% | 0.0% | 0.0% | 0.0% | 9.0% |
| free-t3 | 145 | 91.0% | 0.0% | 0.0% | 0.7% | 8.3% |
| total-bilirubin | 150 | 91.3% | 0.0% | 0.0% | 0.0% | 8.7% |
| ggt | 150 | 91.3% | 0.0% | 0.0% | 0.0% | 8.7% |
| ast | 135 | 91.9% | 0.0% | 0.0% | 0.0% | 8.1% |
| alp | 160 | 91.9% | 0.0% | 0.0% | 0.0% | 8.1% |
| tsh | 140 | 92.1% | 0.0% | 0.0% | 0.0% | 7.9% |
| ferritin | 95 | 92.6% | 0.0% | 0.0% | 0.0% | 7.4% |

## What went wrong, most common first

**87× flag invented | none VURF**
    r5-0v4 [RO plain VURF single]  FOSFATAZA ALCALINA 23 U/L 44 – 147  →  read 23 U/L [44, 147] L
    r5-0v4 [RO plain VURF single]  TSH 0,22 µUI/mL 0,40 – 4,00  →  read 0.22 mIU/L [0.4, 4] L
    r5-4v4 [ES unitspace VURF wide]  GPT (ALT)                            4,0   U / L   (7,0 - 56,0)  →  read 4 U/L [7, 56] L

**82× flag invented | none VFUR**
    r5-1v1 [UK plain VFUR single]  Creatinine 149 µmol/L 53 - 115  →  read 1.69 mg/dL [0.6, 1.3] H
    r5-1v1 [UK plain VFUR single]  Potassium 2.8 mmol/L 3.5 - 5.1  →  read 2.8 mmol/L [3.5, 5.1] L
    r5-1v1 [UK plain VFUR single]  Vitamin D 60 nmol/L 75 - 250  →  read 24 ng/mL [30, 100] L

**31× flag invented | none VFRU**
    r5-16v0 [US colon VFRU wide]  GLUCOSE:                             57   70-99 mg/dL  →  read 57 mg/dL [70, 99] L
    r5-16v0 [US colon VFRU wide]  HEMOGLOBIN A1C:                      7.3   4.0-5.6 %  →  read 7.3 % [4, 5.6] H
    r5-16v0 [US colon VFRU wide]  EGFR:                                38   >60 mL/min/1.73m2  →  read 38 mL/min/1.73m2 [60, ] L

**21× flag invented | HL VURF**
    r5-11v3 [DE fhir:loinc-only VURF wide]  GPT (ALT) 662 U/L  →  read 662 U/L [7, 56] H
    r5-11v3 [DE fhir:loinc-only VURF wide]  GESAMTCHOLESTERIN 268 mg/dL  →  read 268 mg/dL [, 200] H
    r5-11v3 [DE fhir:loinc-only VURF wide]  25-OH-VITAMIN D 22 ng/mL  →  read 22 ng/mL [30, 100] L

**17× flag invented | star VURF**
    r5-5v2 [UK fhir:text-only VURF wide]  GGT 7 U/L  →  read 7 U/L [8, 61] L
    r5-5v2 [UK fhir:text-only VURF wide]  WHITE CELL COUNT 19.0 10*3/uL  →  read 19 Thousand/uL [4, 11] H
    r5-5v2 [UK fhir:text-only VURF wide]  HAEMOGLOBIN 216 g/L  →  read 21.6 g/dL [12, 17.5] H

**12× miss | mchc | "MCHC"**
    r5-5v3 [DE plain VURF wide]  MCHC                                 183   g/l   320 - 360   ↓
    r5-6v3 [DE twocol VFUR tab]  MCHC	35,900	g/dl	32,000 - 36,000
    r5-8v0 [UK twocol VFUR wide]  MCHC                                 342.0   g/L   320.0 – 360.0

**11× miss | mcv | "MCV"**
    r5-5v3 [DE plain VURF wide]  MCV                                  145,6   fl   80,0 - 100,0   ↑
    r5-6v3 [DE twocol VFUR tab]  MCV	83,400	fl	80,000 - 100,000
    r5-8v0 [UK twocol VFUR wide]  MCV                                  80.20   fL   80.00 – 100.00

**10× date missed | UK lines**
    r5-8v0  want 2026-05-11 read null
    r5-11v2  want 2026-12-12 read null
    r5-12v1  want 2026-04-21 read null

**9× miss | mch | "MCH"**
    r5-6v3 [DE twocol VFUR tab]  MCH	27,200	pg	27,000 - 33,000
    r5-8v0 [UK twocol VFUR wide]  MCH                                  32.30   pg   27.00 – 33.00
    r5-12v0 [US plain VFRU wide]  MCH                                  27.5   27.0 - 33.0 pg

**9× miss | tsh | "TSH"**
    r5-7v4 [RO plain VFUR wide]  TSH                                  0,730   µUI/mL   0,40 – 4,00
    r5-12v0 [US plain VFRU wide]  TSH                                  1.93   0.40 - 4.00 mIU/L
    r5-12v1 [UK plain VURF wide]  TSH                                  1.93   mIU/L   (0.40 - 4.00)

**9× flag invented | arrows VFUR**
    r5-23v4 [RO fhir:text-only VFUR wide]  Creatinina 4.49 mg/dL  →  read 4.49 mg/dL [0.6, 1.3] H
    r5-23v4 [RO fhir:text-only VFUR wide]  Sodiu 197 mmol/L  →  read 197 mmol/L [135, 145] H
    r5-23v4 [RO fhir:text-only VFUR wide]  Potasiu seric 3.4 mmol/L  →  read 3.4 mmol/L [3.5, 5.1] L

**8× miss | ggt | "GGT"**
    r5-5v3 [DE plain VURF wide]  GGT                                  7   U/l   8 - 61   ↓
    r5-12v0 [US plain VFRU wide]  GGT                                  59   8 - 61 U/L
    r5-12v1 [UK plain VURF wide]  GGT                                  59   U/L   (8 - 61)

**8× miss | vitamin-b12 | "Vitamin B12"**
    r5-5v3 [DE plain VURF wide]  Vitamin B12                          591   pmol/l   148 - 664
    r5-10v2 [DE plain VFUR wide]  Vitamin B12                          679   pg/ml   [200 - 900]
    r5-13v1 [UK plain VFUR wide]  Vitamin B12                          399   pmol/L   148 – 664

**8× miss | hba1c | "HbA1c"**
    r5-10v2 [DE plain VFUR wide]  HbA1c                                5,5   %   [4,0 - 5,6]
    r5-12v1 [UK plain VURF wide]  HbA1c                                34   mmol/mol   (20 - 38)
    r5-13v1 [UK plain VFUR wide]  HbA1c                                16   mmol/mol   20 – 38

**7× miss | magnesium-serum | "Magnesium"**
    r5-10v2 [DE plain VFUR wide]  Magnesium                            1,8   mg/dl   [1,7 - 2,4]
    r5-12v1 [UK plain VURF wide]  Magnesium                            0.86   mmol/L   (0.70 - 0.99)
    r5-13v1 [UK plain VFUR wide]  Magnesium                            0.78   mmol/L   0.70 – 0.99

**7× miss | egfr | "eGFR"**
    r5-12v1 [UK plain VURF wide]  eGFR                                 107   mL/min/1.73m2   >60
    r5-13v1 [UK plain VFUR wide]  eGFR                                 101   mL/min/1.73m2   >60
    r5-23v0 [US plain VFUR wide]  eGFR                                 86   mL/min/1.73m2   > OR = 60

**6× flag invented | arrows VURF**
    r5-0v3 [ES fhir:loinc+text VURF wide]  Fosfatasa alcalina 23 U/L  →  read 23 U/L [44, 147] L
    r5-0v3 [ES fhir:loinc+text VURF wide]  TSH 0.22 m[IU]/L  →  read 0.22 mIU/L [0.4, 4] L
    r5-21v4 [RO fhir:loinc+text VURF wide]  NUMĂR DE ERITROCITE 6.31 M/uL  →  read 6.31 Million/uL [4.2, 5.9] H

**6× date missed | DE lines**
    r5-5v3  want 2026-02-20 read null
    r5-6v3  want 2026-08-01 read null
    r5-10v2  want 2026-08-07 read null

**6× miss | hematocrit | "Hematocrit"**
    r5-7v4 [RO plain VFUR wide]  Hematocrit                           49,4   %   36,0 – 50,0
    r5-16v4 [RO plain VFUR single]  Hematocrit 42,800 % 36,000 – 50,000
    r5-22v0 [US plain VFUR single]  Hematocrit 43.9 % 36.0 - 50.0

**6× miss | triglycerides | "TRIGLYCERIDES"**
    r5-8v0 [UK twocol VFUR wide]  TRIGLYCERIDES                        1.332   mmol/L   <= 1.690
    r5-11v2 [UK plain VURF single]  TRIGLYCERIDES 0.86 mmol/L <1.69
    r5-12v0 [US plain VFRU wide]  TRIGLYCERIDES                        203 High   < OR = 150 mg/dL

**6× false critical | glucose-fasting**
    r5-9v1 [UK glue VFUR wide]  Glucose                              4.5mmol/L   3.9 - 5.5  →  read 4.5 mg/dL [3.9, 5.5]
    r5-9v2 [DE plain VFUR wide]  Glucose                              4,5   mmol/l   3,9 - 5,5  →  read 4.5 mg/dL [3.9, 5.5]
    r5-22v1 [UK plain VURF tab]  Glucose	4.7	mmol/L	3.9 - 5.5  →  read 4.7 mg/dL [3.9, 5.5]

**5× miss | testosterone-total | "Testosteron"**
    r5-5v3 [DE plain VURF wide]  Testosteron                          17,2   nmol/l   9,2 - 31,8
    r5-7v4 [RO plain VFUR wide]  Testosteron                          399   ng/dL   264 – 916
    r5-10v2 [DE plain VFUR wide]  Testosteron                          638   ng/dl   [264 - 916]

**5× miss | vitamin-b12 | "VITAMIN B12"**
    r5-6v3 [DE twocol VFUR tab]  VITAMIN B12	1128,00	↑	pg/ml	200,00 - 900,00
    r5-8v0 [UK twocol VFUR wide]  VITAMIN B12                          217.7   pmol/L   148.0 – 664.0
    r5-11v2 [UK plain VURF single]  VITAMIN B12 94 pmol/L 148 – 664

**5× flag invented | words VURF**
    r5-7v1 [UK fhir:loinc+text VURF wide]  Sodium 130 mmol/L  →  read 130 mmol/L [135, 145] L
    r5-7v1 [UK fhir:loinc+text VURF wide]  Total protein 126 g/L  →  read 12.6 g/dL [6, 8.3] H
    r5-7v1 [UK fhir:loinc+text VURF wide]  MCH 35.9 pg  →  read 35.9 pg [27, 33] H

**5× flag invented | star FVUR**
    r5-7v3 [ES fhir:loinc+text FVUR wide]  SODIO 130 mmol/L  →  read 130 mmol/L [135, 145] L
    r5-7v3 [ES fhir:loinc+text FVUR wide]  PROTEÍNAS TOTALES 12.6 g/dL  →  read 12.6 g/dL [6, 8.3] H
    r5-7v3 [ES fhir:loinc+text FVUR wide]  HCM 35.9 pg  →  read 35.9 pg [27, 33] H

**5× miss | magnesium-serum | "Magneziu seric"**
    r5-7v4 [RO plain VFUR wide]  Magneziu seric                       1,8   mg/dl   1,7 – 2,4
    r5-16v4 [RO plain VFUR single]  Magneziu seric 2,000 mg/dl 1,700 – 2,400
    r5-34v4 [RO twocol VURF wide]  Magneziu seric                       3.4   mg/dL   [1.7 - 2.4]   *

**5× date missed | RO lines**
    r5-7v4  want 2026-08-23 read null
    r5-16v4  want 2026-11-11 read null
    r5-34v4  want 2026-10-11 read null

**5× miss | ldl-cholesterol | "LDL cholesterol"**
    r5-12v1 [UK plain VURF wide]  LDL cholesterol                      1.2   mmol/L   < 2.6
    r5-35v2 [UK glue VFUR wide]  LDL cholesterol                      1.3mmol/L   < 2.6
    r5-39v1 [UK plain VFUR wide]  LDL cholesterol                      3.2   mmol/L   <2.6

**5× miss | hdl-cholesterol | "HDL cholesterol"**
    r5-12v1 [UK plain VURF wide]  HDL cholesterol                      1.29   mmol/L   >= 1.03
    r5-35v2 [UK glue VFUR wide]  HDL cholesterol                      1.27mmol/L   >= 1.03
    r5-39v1 [UK plain VFUR wide]  HDL cholesterol                      1.24   mmol/L   > 1.03

**5× miss | free-t4 | "Free T4"**
    r5-12v1 [UK plain VURF wide]  Free T4                              15.8   pmol/L   (10.3 - 23.2)
    r5-13v1 [UK plain VFUR wide]  Free T4                              18.4   pmol/L   10.3 – 23.2
    r5-22v0 [US plain VFUR single]  Free T4 2.11 ng/dL 0.80 - 1.80

**5× miss | testosterone-total | "Testosterone"**
    r5-13v1 [UK plain VFUR wide]  Testosterone                         10.7   nmol/L   9.2 – 31.8
    r5-28v2 [UK glue VFUR wide]  Testosterone                         12.0nmol/L   9.2-31.8
    r5-35v2 [UK glue VFUR wide]  Testosterone                         9.6nmol/L   [9.2 - 31.8]

**5× flag invented | star VFUR**
    r5-24v3 [ES fhir:text-only VFUR wide]  Leucocitos 37.7 10*3/uL  →  read 37.7 Thousand/uL [4, 11] H
    r5-24v3 [ES fhir:text-only VFUR wide]  Hierro 27 ug/dL  →  read 27 mcg/dL [50, 170] L
    r5-33v3 [ES fhir:loinc-only VFUR wide]  GOT (AST) 47 U/L  →  read 47 U/L [10, 40] H

**5× flag invented | HL VFUR**
    r5-31v2 [UK fhir:loinc+text VFUR wide]  MCV 152.3 fL  →  read 152.3 fL [80, 100] H
    r5-31v2 [UK fhir:loinc+text VFUR wide]  MCH 39.0 pg  →  read 39 pg [27, 33] H
    r5-31v2 [UK fhir:loinc+text VFUR wide]  MCHC 460 g/L  →  read 46 g/dL [32, 36] H

**5× flag invented | words VFUR**
    r5-49v1 [UK fhir:loinc+text VFUR wide]  CREATININE 268 µmol/L  →  read 3.03 mg/dL [0.6, 1.3] H
    r5-49v1 [UK fhir:loinc+text VFUR wide]  URIC ACID 107 µmol/L  →  read 1.8 mg/dL [2.5, 6.99] L
    r5-49v1 [UK fhir:loinc+text VFUR wide]  POTASSIUM 2.7 mmol/L  →  read 2.7 mmol/L [3.5, 5.1] L

**4× miss | mchc | "CHEM"**
    r5-4v0 [RO twocol VURF wide]  CHEM                                 35,0   g/dl   [32,0 - 36,0]
    r5-16v4 [RO plain VFUR single]  CHEM 32,400 g/dl 32,000 – 36,000
    r5-22v4 [RO unitspace VFUR wide]  CHEM                                 49.2   H   g / dl   32.0 - 36.0

**4× flag invented | words VFRU**
    r5-4v1 [US fhir:loinc-only VFRU wide]  ALT (SGPT) 4 U/L  →  read 4 U/L [7, 56] L
    r5-4v1 [US fhir:loinc-only VFRU wide]  WBC 2.4 10*3/uL  →  read 2.4 Thousand/uL [4, 11] L
    r5-4v1 [US fhir:loinc-only VFRU wide]  HEMATOCRIT 23.8 %  →  read 23.8 % [36, 50] L

**4× miss | alt | "GPT (ALT)"**
    r5-5v3 [DE plain VURF wide]  GPT (ALT)                            16   U/l   7 - 56
    r5-10v2 [DE plain VFUR wide]  GPT (ALT)                            27   U/l   [7 - 56]
    r5-34v2 [DE plain VURF tab]  GPT (ALT)	96,0	U/l	7,0-56,0

**4× miss | blood-urea-nitrogen | "Azot ureic (BUN)"**
    r5-7v4 [RO plain VFUR wide]  Azot ureic (BUN)                     20   mg/dL   7 – 25
    r5-16v4 [RO plain VFUR single]  Azot ureic (BUN) 9,00 mg/dl 7,00 – 25,00
    r5-43v4 [RO plain VURF wide]  Azot ureic (BUN)                     28,00   mg/dl   (7,00 - 25,00)   *

**4× miss | chloride-serum | "Clor seric"**
    r5-7v4 [RO plain VFUR wide]  Clor seric                           102   mmol/L   98 – 107
    r5-34v4 [RO twocol VURF wide]  Clor seric                           102   mmol/l   [98 - 107]
    r5-43v4 [RO plain VURF wide]  Clor seric                           149,00   mmol/L   (98,00 - 107,00)   *

**4× miss | calcium-total | "Calciu seric"**
    r5-7v4 [RO plain VFUR wide]  Calciu seric                         9,3   mg/dl   8,6 – 10,3
    r5-16v4 [RO plain VFUR single]  Calciu seric 9,700 mg/dL 8,600 – 10,300
    r5-43v4 [RO plain VURF wide]  Calciu seric                         10,200   mg/dL   (8,600 - 10,300)

**4× miss | total-protein | "Proteine totale"**
    r5-7v4 [RO plain VFUR wide]  Proteine totale                      12,6   ↑   g/dL   6,0 – 8,3
    r5-34v4 [RO twocol VURF wide]  Proteine totale                      6.6   g/dl   [6.0 - 8.3]
    r5-43v4 [RO plain VURF wide]  Proteine totale                      11,900   g/dl   (6,000 - 8,300)   *

**4× miss | vitamin-b12 | "Vitamina B12"**
    r5-7v4 [RO plain VFUR wide]  Vitamina B12                         1053   ↑   pg/ml   200 – 900
    r5-16v3 [ES plain FVUR single]  Vitamina B12 748,00 pg/mL [200,00 - 900,00]
    r5-16v4 [RO plain VFUR single]  Vitamina B12 748,00 pg/mL 200,00 – 900,00

**4× miss | folate-serum | "Acid folic"**
    r5-7v4 [RO plain VFUR wide]  Acid folic                           13,0   ng/mL   3,0 – 20,0
    r5-16v4 [RO plain VFUR single]  Acid folic 14,900 ng/mL 3,000 – 20,000
    r5-34v4 [RO twocol VURF wide]  Acid folic                           2.7   ng/mL   [3.0 - 20.0]   *

**4× miss | hdl-cholesterol | "HDL CHOLESTEROL"**
    r5-8v0 [UK twocol VFUR wide]  HDL CHOLESTEROL                      1.190   mmol/L   >1.030
    r5-11v2 [UK plain VURF single]  HDL CHOLESTEROL 1.29 mmol/L > 1.03
    r5-12v0 [US plain VFRU wide]  HDL CHOLESTEROL                      50   > OR = 40 mg/dL

**4× critical not caught (row missed) | platelet-count**
    r5-8v0 [UK twocol VFUR wide]  PLATELETS                            28.0   LOW   x10^9/L   150.0 – 400.0
    r5-12v0 [US plain VFRU wide]  PLATELET COUNT                       1149 High   150 - 400 K/uL
    r5-12v1 [UK plain VURF wide]  Platelet count                       1149   x10^9/L   (150 - 400)

**4× miss | calcium-total | "Calcium"**
    r5-10v2 [DE plain VFUR wide]  Calcium                              9,4   mg/dl   [8,6 - 10,3]
    r5-13v1 [UK plain VFUR wide]  Calcium                              3.77   mmol/L   2.15 – 2.57
    r5-22v0 [US plain VFUR single]  Calcium 10.1 mg/dL 8.6 - 10.3

**4× miss | albumin-serum | "Albumin"**
    r5-10v2 [DE plain VFUR wide]  Albumin                              2,5   -   g/dl   [3,5 - 5,0]
    r5-13v1 [UK plain VFUR wide]  Albumin                              36   g/L   35 – 50
    r5-23v0 [US plain VFUR wide]  Albumin                              4.8   g/dL   3.5 - 5.0

**4× critical not caught (row missed) | alt**
    r5-11v2 [UK plain VURF single]  ALANINE AMINOTRANSFERASE 662 U/L 7 – 56
    r5-12v0 [US plain VFRU wide]  ALT (SGPT)                           665 High   7 - 56 U/L
    r5-12v1 [UK plain VURF wide]  Alanine aminotransferase             665   U/L   (7 - 56)

**4× miss | sodium-serum | "SODIUM"**
    r5-12v0 [US plain VFRU wide]  SODIUM                               76 Low   135 - 145 mmol/L
    r5-22v0 [US plain VFUR single]  SODIUM 142 mmol/L 135 - 145
    r5-23v0 [US plain VFUR wide]  SODIUM                               197   H   mmol/L   135 - 145

**4× critical not caught (row missed) | sodium-serum**
    r5-12v0 [US plain VFRU wide]  SODIUM                               76 Low   135 - 145 mmol/L
    r5-12v1 [UK plain VURF wide]  Sodium                               76   mmol/L   (135 - 145)
    r5-12v2 [DE leaders VFUR single]  NATRIUM ........................... 76 - mmol/l (135 - 145)

**4× miss | rbc | "RBC"**
    r5-12v0 [US plain VFRU wide]  RBC                                  3.76 Low   4.20 - 5.90 M/uL
    r5-22v0 [US plain VFUR single]  RBC 4.88 M/uL 4.20 - 5.90
    r5-23v0 [US plain VFUR wide]  RBC                                  4.41   x10E6/uL   4.20 - 5.90

**4× miss | creatinine-serum | "Creatinine"**
    r5-12v1 [UK plain VURF wide]  Creatinine                           38   µmol/L   (53 - 115)
    r5-13v1 [UK plain VFUR wide]  Creatinine                           217   µmol/L   53 – 115
    r5-23v0 [US plain VFUR wide]  Creatinine                           4.49   H   mg/dL   0.60 - 1.30

**4× miss | potassium-serum | "Potassium"**
    r5-12v1 [UK plain VURF wide]  Potassium                            4.8   mmol/L   (3.5 - 5.1)
    r5-13v1 [UK plain VFUR wide]  Potassium                            4.7   mmol/L   3.5 – 5.1
    r5-23v0 [US plain VFUR wide]  Potassium                            3.4   L   mEq/L   3.5 - 5.1

**4× miss | chloride-serum | "Chloride"**
    r5-12v1 [UK plain VURF wide]  Chloride                             101   mmol/L   (98 - 107)
    r5-13v1 [UK plain VFUR wide]  Chloride                             106   mmol/L   98 – 107
    r5-22v0 [US plain VFUR single]  Chloride 124 mmol/L 98 - 107

**4× miss | total-cholesterol | "Total cholesterol"**
    r5-12v1 [UK plain VURF wide]  Total cholesterol                    4.4   mmol/L   <5.2
    r5-39v1 [UK plain VFUR wide]  Total cholesterol                    4.9   mmol/L   < 5.2
    r5-40v2 [UK wrap VFUR wide]  Total cholesterol ⏎         4.6   mmol/L   <5.2

**4× miss | hematocrit | "Haematocrit"**
    r5-12v1 [UK plain VURF wide]  Haematocrit                          0.47   L/L   (0.36 - 0.50)
    r5-39v1 [UK plain VFUR wide]  Haematocrit                          0.46   L/L   (0.36 - 0.50)
    r5-40v2 [UK wrap VFUR wide]  Haematocrit                          0.40   L/L   0.36 – 0.50

**4× miss | free-t3 | "Free T3"**
    r5-12v1 [UK plain VURF wide]  Free T3                              5.7   pmol/L   (3.5 - 6.5)
    r5-28v2 [UK glue VFUR wide]  Free T3                              2.9   LOW   pmol/L   3.5-6.5
    r5-35v2 [UK glue VFUR wide]  Free T3                              2.5   L   pmol/L   [3.5 - 6.5]

**4× miss | folate-serum | "Folate"**
    r5-13v1 [UK plain VFUR wide]  Folate                               22.4   nmol/L   6.8 – 45.3
    r5-28v2 [UK glue VFUR wide]  Folate                               36.9nmol/L   6.8-45.3
    r5-35v2 [UK glue VFUR wide]  Folate                               8.8nmol/L   [6.8 - 45.3]

**4× miss | serum-iron | "Iron"**
    r5-23v0 [US plain VFUR wide]  Iron                                 92   mcg/dL   50 - 170
    r5-28v2 [UK glue VFUR wide]  Iron                                 17.5µmol/L   9.0-30.4
    r5-35v2 [UK glue VFUR wide]  Iron                                 14.3µmol/L   [9.0 - 30.4]

**3× wrong | vitamin-b12 | point plain | unit pmol/L**
    r5-1v1 [UK plain VFUR single]  Vitamin B12 556 pmol/L 148 - 664  →  read 556 pg/mL [200, 900]
    r5-15v1 [UK plain VFUR wide]  Vitamin B12                          418   pmol/L   [148 - 664]  →  read 418 pg/mL [148, 664]
    r5-43v1 [UK plain VFUR wide]  Vitamin B12                          980   pmol/L   [148 - 664]  →  read 980 pg/mL [148, 664] H

**3× miss | alp | "Alkalische Phosphatase"**
    r5-5v3 [DE plain VURF wide]  Alkalische Phosphatase               97   U/l   44 - 147
    r5-10v2 [DE plain VFUR wide]  Alkalische Phosphatase               143   U/l   [44 - 147]
    r5-59v0 [DE plain VFUR single]  Alkalische Phosphatase 32 * U/l [44 - 147]

**3× miss | wbc | "Leukozyten"**
    r5-5v3 [DE plain VURF wide]  Leukozyten                           19,0   G/l   4,0 - 11,0   ↑
    r5-10v2 [DE plain VFUR wide]  Leukozyten                           5,9   G/l   [4,0 - 11,0]
    r5-34v2 [DE plain VURF tab]  Leukozyten	7,50	/nl	4,00-11,00

**3× miss | hemoglobin | "Hämoglobin"**
    r5-5v3 [DE plain VURF wide]  Hämoglobin                           216   g/l   120 - 175   ↑
    r5-10v2 [DE plain VFUR wide]  Hämoglobin                           14,0   g/dl   [12,0 - 17,5]
    r5-34v2 [DE plain VURF tab]  Hämoglobin	15,30	g/dl	12,00-17,50

**3× miss | platelet-count | "Thrombozyten"**
    r5-5v3 [DE plain VURF wide]  Thrombozyten                         394   Tsd/µl   150 - 400
    r5-10v2 [DE plain VFUR wide]  Thrombozyten                         395   Tsd/µl   [150 - 400]
    r5-34v2 [DE plain VURF tab]  Thrombozyten	79,0	G/l	150,0-400,0

**3× miss | creatinine-serum | "Creatinină serică"**
    r5-7v4 [RO plain VFUR wide]  Creatinină serică                    0,62   mg/dL   0,60 – 1,30
    r5-16v4 [RO plain VFUR single]  Creatinină serică 0,9900 mg/dL 0,6000 – 1,3000
    r5-48v4 [RO plain VURF wide]  Creatinină serică                    0.98   mg/dl   0.60 - 1.30

**3× miss | uric-acid | "Acid uric"**
    r5-7v4 [RO plain VFUR wide]  Acid uric                            3,2   mg/dL   2,5 – 7,0
    r5-34v4 [RO twocol VURF wide]  Acid uric                            5.1   mg/dl   [2.5 - 7.0]
    r5-48v4 [RO plain VURF wide]  Acid uric                            9.7   mg/dL   2.5 - 7.0   *

**3× miss | wbc | "Număr de leucocite"**
    r5-7v4 [RO plain VFUR wide]  Număr de leucocite                   10,8   10^3/µL   4,0 – 11,0
    r5-34v4 [RO twocol VURF wide]  Număr de leucocite                   7.5   10^3/µL   [4.0 - 11.0]
    r5-48v4 [RO plain VURF wide]  Număr de leucocite                   6.8   10^3/µL   4.0 - 11.0

**3× miss | rbc | "Eritrocite"**
    r5-7v4 [RO plain VFUR wide]  Eritrocite                           4,33   *10^6/uL   4,20 – 5,90
    r5-16v4 [RO plain VFUR single]  Eritrocite 6,9400 H mil./µL 4,2000 – 5,9000
    r5-34v4 [RO twocol VURF wide]  Eritrocite                           5.75   10^6/µL   [4.20 - 5.90]

**3× miss | hemoglobin | "Hemoglobină"**
    r5-7v4 [RO plain VFUR wide]  Hemoglobină                          16,6   g/dL   12,0 – 17,5
    r5-16v4 [RO plain VFUR single]  Hemoglobină 15,800 g/dl 12,000 – 17,500
    r5-48v4 [RO plain VURF wide]  Hemoglobină                          13.7   g/dL   12.0 - 17.5

**3× miss | free-t4 | "FT4"**
    r5-7v4 [RO plain VFUR wide]  FT4                                  1,56   ng/dL   0,80 – 1,80
    r5-12v2 [DE leaders VFUR single]  FT4 ............................... 15,8 pmol/l (10,3 - 23,2)
    r5-48v4 [RO plain VURF wide]  FT4                                  0.58   ng/dL   0.80 - 1.80   *

**3× miss | total-cholesterol | "TOTAL CHOLESTEROL"**
    r5-8v0 [UK twocol VFUR wide]  TOTAL CHOLESTEROL                    3.49   mmol/L   <= 5.20
    r5-11v2 [UK plain VURF single]  TOTAL CHOLESTEROL 6.9 mmol/L <5.2
    r5-38v0 [UK plain VFUR wide]  TOTAL CHOLESTEROL                    3.4   mmol/L   <5.2

**3× miss | ldl-cholesterol | "LDL CHOLESTEROL"**
    r5-8v0 [UK twocol VFUR wide]  LDL CHOLESTEROL                      3.93   HIGH   mmol/L   <2.60
    r5-11v2 [UK plain VURF single]  LDL CHOLESTEROL 2.3 mmol/L <= 2.6
    r5-38v0 [UK plain VFUR wide]  LDL CHOLESTEROL                      2.0   mmol/L   <2.6

**3× miss | wbc | "WBC"**
    r5-8v0 [UK twocol VFUR wide]  WBC                                  6.20   ×10⁹/L   4.00 – 11.00
    r5-12v0 [US plain VFRU wide]  WBC                                  6.5   4.0 - 11.0 K/uL
    r5-12v1 [UK plain VURF wide]  WBC                                  6.5   ×10⁹/L   (4.0 - 11.0)

**3× miss | testosterone-total | "TESTOSTERONE"**
    r5-8v0 [UK twocol VFUR wide]  TESTOSTERONE                         12.84   nmol/L   9.20 – 31.80
    r5-11v2 [UK plain VURF single]  TESTOSTERONE 15.0 nmol/L 9.2 – 31.8
    r5-38v0 [UK plain VFUR wide]  TESTOSTERONE                         29.4   nmol/L   (9.2 - 31.8)

**3× miss | hs-crp | "hsCRP"**
    r5-10v2 [DE plain VFUR wide]  hsCRP                                2,4   mg/l   < 3,0
    r5-13v1 [UK plain VFUR wide]  hsCRP                                2.3   mg/L   <= 3.0
    r5-34v2 [DE plain VURF tab]  hsCRP	2,70	mg/l	bis 3,00

**3× miss | folate-serum | "Folsäure"**
    r5-10v2 [DE plain VFUR wide]  Folsäure                             3,6   ng/ml   [3,0 - 20,0]
    r5-34v2 [DE plain VURF tab]  Folsäure	2,70	ng/ml	3,00-20,00
    r5-59v0 [DE plain VFUR single]  Folsäure 17,0 nmol/l [6,8 - 45,3]

**3× miss | glucose-fasting | "GLUCOSE"**
    r5-12v0 [US plain VFRU wide]  GLUCOSE                              93   70 - 99 mg/dL
    r5-12v2 [DE leaders VFUR single]  GLUCOSE ........................... 5,2 mmol/l (3,9 - 5,5)
    r5-22v0 [US plain VFUR single]  GLUCOSE 84 mg/dL 70 - 99

**3× miss | egfr | "EGFR"**
    r5-12v0 [US plain VFRU wide]  EGFR                                 107   >60 mL/min/1.73m2
    r5-22v0 [US plain VFUR single]  EGFR 94 mL/min/1.73m2 >60
    r5-38v0 [UK plain VFUR wide]  EGFR                                 113   mL/min/1.73m2   >= 60

**3× miss | magnesium-serum | "MAGNESIUM"**
    r5-12v0 [US plain VFRU wide]  MAGNESIUM                            2.1   1.7 - 2.4 mg/dL
    r5-12v2 [DE leaders VFUR single]  MAGNESIUM ......................... 0,86 mmol/l (0,70 - 0,99)
    r5-38v0 [UK plain VFUR wide]  MAGNESIUM                            1.07   HIGH   mmol/L   (0.70 - 0.99)

**3× miss | total-bilirubin | "BILIRUBIN, TOTAL"**
    r5-12v0 [US plain VFRU wide]  BILIRUBIN, TOTAL                     0.8   0.2 - 1.2 mg/dL
    r5-22v0 [US plain VFUR single]  BILIRUBIN, TOTAL 0.4 mg/dL 0.2 - 1.2
    r5-23v0 [US plain VFUR wide]  BILIRUBIN, TOTAL                     0.7   mg/dL   0.2 - 1.2

…and 311 smaller groups.
