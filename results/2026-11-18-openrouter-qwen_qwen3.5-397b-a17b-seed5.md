# Lab-report reader stress test

300 generated reports, 805 rows with a known answer, seed 5. Read in 975.9 s (3253.1 ms a report).

| Outcome | Rows | Share | 95% interval |
|---|---|---|---|
| ok | 694 | 86.2% | 83.66–88.42% |
| unit | 0 | 0.0% | 0.00–0.47% |
| unconverted | 0 | 0.0% | 0.00–0.47% |
| wrong | 0 | 0.0% | 0.00–0.47% |
| miss | 111 | 13.8% | 11.58–16.34% |

- **Critical values:** 4 of 5 caught (80.0%, interval 37.55–96.38%); 1 lost because the row was not read, 0 because it was misread. False critical alarms: 0.
- **Rows that are not on the report:** 0 (of 694 rows read).
- **Lab's flag:** ok 646, invented 47, missed 1.
- **Reference range:** ok 693, missed 1.
- **Collection date:** ok 42, missed 6.
- **Crashes:** 250.
- **Format invariance** (5 printings of each set of results): of 161 markers, read right in every printing 50 (31.1%), right in some printings but not others 111 (68.9%), never right 0. Critical results caught in every printing: 0 of 1; caught in some printings only: 1.

## By locale
| locale | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| UK | 161 | 46.6% | 0.0% | 0.0% | 0.0% | 53.4% |
| US | 161 | 84.5% | 0.0% | 0.0% | 0.0% | 15.5% |
| DE | 161 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ES | 161 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| RO | 161 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By kind
| kind | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| lines | 655 | 83.1% | 0.0% | 0.0% | 0.0% | 16.9% |
| csv | 47 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| fhir | 103 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By variant
| variant | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| glue | 82 | 48.8% | 0.0% | 0.0% | 0.0% | 51.2% |
| unitspace | 68 | 82.4% | 0.0% | 0.0% | 0.0% | 17.6% |
| twocol | 102 | 85.3% | 0.0% | 0.0% | 0.0% | 14.7% |
| plain | 387 | 89.1% | 0.0% | 0.0% | 0.0% | 10.9% |
| csv:lowhigh | 9 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| fhir:loinc+text | 59 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| csv:comma | 38 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| fhir:loinc-only | 13 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| leaders | 16 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| fhir:text-only | 31 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By units
| units | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| SI | 228 | 62.3% | 0.0% | 0.0% | 0.0% | 37.7% |
| conventional | 577 | 95.7% | 0.0% | 0.0% | 0.0% | 4.3% |

## By decimal
| decimal | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| point | 387 | 71.3% | 0.0% | 0.0% | 0.0% | 28.7% |
| comma | 418 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By sep
| sep | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| tab | 46 | 45.7% | 0.0% | 0.0% | 0.0% | 54.3% |
| single | 140 | 61.4% | 0.0% | 0.0% | 0.0% | 38.6% |
| wide | 619 | 94.8% | 0.0% | 0.0% | 0.0% | 5.2% |

## By order
| order | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| VFUR | 426 | 76.8% | 0.0% | 0.0% | 0.0% | 23.2% |
| VURF | 258 | 95.3% | 0.0% | 0.0% | 0.0% | 4.7% |
| VFRU | 79 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| FVUR | 42 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By marker
| marker | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| glucose-fasting | 15 | 80.0% | 0.0% | 0.0% | 0.0% | 20.0% |
| hba1c | 15 | 80.0% | 0.0% | 0.0% | 0.0% | 20.0% |
| creatinine-serum | 10 | 80.0% | 0.0% | 0.0% | 0.0% | 20.0% |
| egfr | 10 | 80.0% | 0.0% | 0.0% | 0.0% | 20.0% |
| uric-acid | 15 | 80.0% | 0.0% | 0.0% | 0.0% | 20.0% |
| sodium-serum | 15 | 80.0% | 0.0% | 0.0% | 0.0% | 20.0% |
| potassium-serum | 15 | 80.0% | 0.0% | 0.0% | 0.0% | 20.0% |
| chloride-serum | 10 | 80.0% | 0.0% | 0.0% | 0.0% | 20.0% |
| calcium-total | 15 | 80.0% | 0.0% | 0.0% | 0.0% | 20.0% |
| magnesium-serum | 10 | 80.0% | 0.0% | 0.0% | 0.0% | 20.0% |
| phosphorus-serum | 5 | 80.0% | 0.0% | 0.0% | 0.0% | 20.0% |
| albumin-serum | 10 | 80.0% | 0.0% | 0.0% | 0.0% | 20.0% |
| hs-crp | 15 | 80.0% | 0.0% | 0.0% | 0.0% | 20.0% |
| mch | 25 | 80.0% | 0.0% | 0.0% | 0.0% | 20.0% |
| ldl-cholesterol | 15 | 80.0% | 0.0% | 0.0% | 0.0% | 20.0% |
| blood-urea-nitrogen | 10 | 80.0% | 0.0% | 0.0% | 0.0% | 20.0% |
| total-protein | 10 | 80.0% | 0.0% | 0.0% | 0.0% | 20.0% |
| platelet-count | 35 | 82.9% | 0.0% | 0.0% | 0.0% | 17.1% |
| rbc | 30 | 83.3% | 0.0% | 0.0% | 0.0% | 16.7% |
| mcv | 25 | 84.0% | 0.0% | 0.0% | 0.0% | 16.0% |
| folate-serum | 25 | 84.0% | 0.0% | 0.0% | 0.0% | 16.0% |
| hdl-cholesterol | 20 | 85.0% | 0.0% | 0.0% | 0.0% | 15.0% |
| hemoglobin | 35 | 85.7% | 0.0% | 0.0% | 0.0% | 14.3% |
| hematocrit | 35 | 85.7% | 0.0% | 0.0% | 0.0% | 14.3% |
| ferritin | 15 | 86.7% | 0.0% | 0.0% | 0.0% | 13.3% |
| transferrin-saturation | 15 | 86.7% | 0.0% | 0.0% | 0.0% | 13.3% |
| wbc | 30 | 86.7% | 0.0% | 0.0% | 0.0% | 13.3% |
| vitamin-b12 | 30 | 86.7% | 0.0% | 0.0% | 0.0% | 13.3% |
| testosterone-total | 30 | 86.7% | 0.0% | 0.0% | 0.0% | 13.3% |
| total-cholesterol | 15 | 86.7% | 0.0% | 0.0% | 0.0% | 13.3% |
| triglycerides | 15 | 86.7% | 0.0% | 0.0% | 0.0% | 13.3% |
| vitamin-d-25-oh | 25 | 88.0% | 0.0% | 0.0% | 0.0% | 12.0% |
| mchc | 25 | 88.0% | 0.0% | 0.0% | 0.0% | 12.0% |
| serum-iron | 10 | 90.0% | 0.0% | 0.0% | 0.0% | 10.0% |
| ast | 15 | 93.3% | 0.0% | 0.0% | 0.0% | 6.7% |
| free-t4 | 15 | 93.3% | 0.0% | 0.0% | 0.0% | 6.7% |
| tsh | 20 | 95.0% | 0.0% | 0.0% | 0.0% | 5.0% |
| free-t3 | 20 | 95.0% | 0.0% | 0.0% | 0.0% | 5.0% |
| total-bilirubin | 25 | 96.0% | 0.0% | 0.0% | 0.0% | 4.0% |
| alt | 25 | 96.0% | 0.0% | 0.0% | 0.0% | 4.0% |
| alp | 25 | 96.0% | 0.0% | 0.0% | 0.0% | 4.0% |
| ggt | 25 | 96.0% | 0.0% | 0.0% | 0.0% | 4.0% |

## What went wrong, most common first

**250× crash | budget reached**
    r5-10v0
    r5-10v1
    r5-10v2

**11× flag invented | none VFUR**
    r5-1v2 [DE plain VFUR wide]  Kreatinin                            1,680   mg/dl   0,600 – 1,300  →  read 1.68 mg/dL [0.6, 1.3] H
    r5-1v2 [DE plain VFUR wide]  Kalium                               2,80   mmol/l   3,50 – 5,10  →  read 2.8 mmol/L [3.5, 5.1] L
    r5-1v2 [DE plain VFUR wide]  Vitamin D (25-OH)                    24,0   ng/ml   30,0 – 100,0  →  read 24 ng/mL [30, 100] L

**10× flag invented | none VURF**
    r5-4v4 [ES unitspace VURF wide]  GPT (ALT)                            4,0   U / L   (7,0 - 56,0)  →  read 4 U/L [7, 56] L
    r5-4v4 [ES unitspace VURF wide]  LEUCOCITOS                           2,40   x10^3 / µL   (4,00 - 11,00)  →  read 2.4 Thousand/uL [4, 11] L
    r5-4v4 [ES unitspace VURF wide]  HEMATOCRITO                          23,80   %   (36,00 - 50,00)  →  read 23.8 % [36, 50] L

**10× flag invented | star VURF**
    r5-5v2 [UK fhir:text-only VURF wide]  GGT 7 U/L  →  read 7 U/L [8, 61] L
    r5-5v2 [UK fhir:text-only VURF wide]  WHITE CELL COUNT 19.0 10*3/uL  →  read 19 Thousand/uL [4, 11] H
    r5-5v2 [UK fhir:text-only VURF wide]  HAEMOGLOBIN 216 g/L  →  read 21.6 g/dL [12, 17.5] H

**5× miss | mch | "MCH"**
    r5-1v1 [UK plain VFUR single]  MCH 31.1 pg 27.0 - 33.0
    r5-6v2 [UK unitspace VURF single]  MCH 27.2 pg 27.0 - 33.0
    r5-7v0 [US glue VFUR tab]  MCH	35.9	High	pg	27.0-33.0

**5× date missed | UK lines**
    r5-1v1  want 2026-02-02 read null
    r5-2v2  want 2026-08-03 read null
    r5-6v2  want 2026-08-01 read null

**5× flag invented | words VURF**
    r5-7v1 [UK fhir:loinc+text VURF wide]  Sodium 130 mmol/L  →  read 130 mmol/L [135, 145] L
    r5-7v1 [UK fhir:loinc+text VURF wide]  Total protein 126 g/L  →  read 12.6 g/dL [6, 8.3] H
    r5-7v1 [UK fhir:loinc+text VURF wide]  MCH 35.9 pg  →  read 35.9 pg [27, 33] H

**5× flag invented | star FVUR**
    r5-7v3 [ES fhir:loinc+text FVUR wide]  SODIO 130 mmol/L  →  read 130 mmol/L [135, 145] L
    r5-7v3 [ES fhir:loinc+text FVUR wide]  PROTEÍNAS TOTALES 12.6 g/dL  →  read 12.6 g/dL [6, 8.3] H
    r5-7v3 [ES fhir:loinc+text FVUR wide]  HCM 35.9 pg  →  read 35.9 pg [27, 33] H

**4× miss | hemoglobin | "Haemoglobin"**
    r5-1v1 [UK plain VFUR single]  Haemoglobin 127 g/L 120 - 175
    r5-2v2 [UK plain VFUR single]  Haemoglobin 152 g/L 120-175
    r5-6v2 [UK unitspace VURF single]  Haemoglobin 248 g / L 120 - 175 *

**4× miss | mcv | "MCV"**
    r5-1v1 [UK plain VFUR single]  MCV 84.6 fL 80.0 - 100.0
    r5-2v2 [UK plain VFUR single]  MCV 89.5 fL 80.0-100.0
    r5-6v2 [UK unitspace VURF single]  MCV 83.4 fL 80.0 - 100.0

**4× flag invented | words VFRU**
    r5-4v1 [US fhir:loinc-only VFRU wide]  ALT (SGPT) 4 U/L  →  read 4 U/L [7, 56] L
    r5-4v1 [US fhir:loinc-only VFRU wide]  WBC 2.4 10*3/uL  →  read 2.4 Thousand/uL [4, 11] L
    r5-4v1 [US fhir:loinc-only VFRU wide]  HEMATOCRIT 23.8 %  →  read 23.8 % [36, 50] L

**3× miss | glucose-fasting | "Glucose"**
    r5-1v1 [UK plain VFUR single]  Glucose 4.2 mmol/L 3.9 - 5.5
    r5-7v0 [US glue VFUR tab]  Glucose	72mg/dL	70-99
    r5-9v1 [UK glue VFUR wide]  Glucose                              4.5mmol/L   3.9 - 5.5

**3× miss | potassium-serum | "Potassium"**
    r5-1v1 [UK plain VFUR single]  Potassium 2.8 mmol/L 3.5 - 5.1
    r5-7v0 [US glue VFUR tab]  Potassium	4.6mmol/L	3.5-5.1
    r5-9v1 [UK glue VFUR wide]  Potassium                            2.8   L   mmol/L   3.5 - 5.1

**3× miss | calcium-total | "Calcium"**
    r5-1v1 [UK plain VFUR single]  Calcium 2.30 mmol/L 2.15 - 2.57
    r5-7v0 [US glue VFUR tab]  Calcium	9.3mg/dL	8.6-10.3
    r5-9v1 [UK glue VFUR wide]  Calcium                              2.37mmol/L   2.15 - 2.57

**3× miss | testosterone-total | "Testosterone"**
    r5-1v1 [UK plain VFUR single]  Testosterone 31.2 nmol/L 9.2 - 31.8
    r5-6v2 [UK unitspace VURF single]  Testosterone 6.4 nmol / L 9.2 - 31.8 *
    r5-7v0 [US glue VFUR tab]  Testosterone	399ng/dL	264-916

**3× miss | hematocrit | "Haematocrit"**
    r5-2v2 [UK plain VFUR single]  Haematocrit 0.42 L/L 0.36-0.50
    r5-6v2 [UK unitspace VURF single]  Haematocrit 0.58 L / L 0.36 - 0.50 *
    r5-9v1 [UK glue VFUR wide]  Haematocrit                          0.46L/L   0.36 - 0.50

**3× miss | mchc | "MCHC"**
    r5-2v2 [UK plain VFUR single]  MCHC 326 g/L 320-360
    r5-6v2 [UK unitspace VURF single]  MCHC 359 g / L 320 - 360
    r5-8v0 [UK twocol VFUR wide]  MCHC                                 342.0   g/L   320.0 – 360.0

**2× flag invented | arrows VURF**
    r5-0v3 [ES fhir:loinc+text VURF wide]  Fosfatasa alcalina 23 U/L  →  read 23 U/L [44, 147] L
    r5-0v3 [ES fhir:loinc+text VURF wide]  TSH 0.22 m[IU]/L  →  read 0.22 mIU/L [0.4, 4] L

**2× miss | creatinine-serum | "Creatinine"**
    r5-1v1 [UK plain VFUR single]  Creatinine 149 µmol/L 53 - 115
    r5-7v0 [US glue VFUR tab]  Creatinine	0.62mg/dL	0.60-1.30

**2× miss | egfr | "eGFR"**
    r5-1v1 [UK plain VFUR single]  eGFR 107 mL/min/1.73m2 > 60
    r5-9v1 [UK glue VFUR wide]  eGFR                                 63mL/min/1.73m2   >= 60

**2× miss | uric-acid | "Uric acid"**
    r5-1v1 [UK plain VFUR single]  Uric acid 190 µmol/L 149 - 416
    r5-9v1 [UK glue VFUR wide]  Uric acid                            399µmol/L   149 - 416

**2× miss | sodium-serum | "Sodium"**
    r5-1v1 [UK plain VFUR single]  Sodium 137 mmol/L 135 - 145
    r5-9v1 [UK glue VFUR wide]  Sodium                               133   L   mmol/L   135 - 145

**2× miss | chloride-serum | "Chloride"**
    r5-1v1 [UK plain VFUR single]  Chloride 104 mmol/L 98 - 107
    r5-7v0 [US glue VFUR tab]  Chloride	102mmol/L	98-107

**2× miss | albumin-serum | "Albumin"**
    r5-1v1 [UK plain VFUR single]  Albumin 39 g/L 35 - 50
    r5-7v0 [US glue VFUR tab]  Albumin	3.6g/dL	3.5-5.0

**2× miss | wbc | "White cell count"**
    r5-1v1 [UK plain VFUR single]  White cell count 8.5 ×10⁹/L 4.0 - 11.0
    r5-6v2 [UK unitspace VURF single]  White cell count 10.1 x10^9 / L 4.0 - 11.0

**2× miss | rbc | "RBC"**
    r5-1v1 [UK plain VFUR single]  RBC 5.35 10*12/L 4.20 - 5.90
    r5-6v2 [UK unitspace VURF single]  RBC 5.69 10*12 / L 4.20 - 5.90

**2× miss | platelet-count | "Platelet count"**
    r5-1v1 [UK plain VFUR single]  Platelet count 340 ×10⁹/L 150 - 400
    r5-2v2 [UK plain VFUR single]  Platelet count 246 10*9/L 150-400

**2× miss | ferritin | "Ferritin"**
    r5-1v1 [UK plain VFUR single]  Ferritin 150 µg/L 30 - 300
    r5-2v2 [UK plain VFUR single]  Ferritin 165 µg/L 30-300

**2× miss | transferrin-saturation | "Transferrin saturation"**
    r5-1v1 [UK plain VFUR single]  Transferrin saturation 35 % 20 - 50
    r5-2v2 [UK plain VFUR single]  Transferrin saturation 24 % 20-50

**2× miss | vitamin-d-25-oh | "Vitamin D"**
    r5-1v1 [UK plain VFUR single]  Vitamin D 60 nmol/L 75 - 250
    r5-6v2 [UK unitspace VURF single]  Vitamin D 52 nmol / L 75 - 250 *

**2× miss | vitamin-b12 | "Vitamin B12"**
    r5-1v1 [UK plain VFUR single]  Vitamin B12 556 pmol/L 148 - 664
    r5-6v2 [UK unitspace VURF single]  Vitamin B12 832 pmol / L 148 - 664 *

**2× miss | ldl-cholesterol | "LDL cholesterol"**
    r5-2v2 [UK plain VFUR single]  LDL cholesterol 2.5 mmol/L <= 2.6
    r5-9v1 [UK glue VFUR wide]  LDL cholesterol                      2.1mmol/L   <= 2.6

**2× miss | hdl-cholesterol | "HDL cholesterol"**
    r5-2v2 [UK plain VFUR single]  HDL cholesterol 1.09 mmol/L > 1.03
    r5-9v1 [UK glue VFUR wide]  HDL cholesterol                      1.29mmol/L   > 1.03

**2× miss | platelet-count | "Platelets"**
    r5-6v2 [UK unitspace VURF single]  Platelets 276 ×10⁹ / L 150 - 400
    r5-9v1 [UK glue VFUR wide]  Platelets                            75   L   ×10⁹/L   150 - 400

**2× miss | vitamin-b12 | "VITAMIN B12"**
    r5-7v0 [US glue VFUR tab]  VITAMIN B12	1053	High	pg/mL	200-900
    r5-8v0 [UK twocol VFUR wide]  VITAMIN B12                          217.7   pmol/L   148.0 – 664.0

**1× miss | hba1c | "HbA1c"**
    r5-1v1 [UK plain VFUR single]  HbA1c 30 mmol/mol 20 - 38

**1× miss | magnesium-serum | "Magnesium"**
    r5-1v1 [UK plain VFUR single]  Magnesium 0.78 mmol/L 0.70 - 0.99

**1× miss | phosphorus-serum | "Phosphate"**
    r5-1v1 [UK plain VFUR single]  Phosphate 1.16 mmol/L 0.81 - 1.45

**1× miss | hs-crp | "hsCRP"**
    r5-1v1 [UK plain VFUR single]  hsCRP 2.7 mg/L <= 3.0

**1× miss | serum-iron | "Iron"**
    r5-1v1 [UK plain VFUR single]  Iron 19.0 µmol/L 9.0 - 30.4

**1× miss | folate-serum | "Folate"**
    r5-1v1 [UK plain VFUR single]  Folate 34.7 nmol/L 6.8 - 45.3

**1× range missed | DE dash | lower only**
    r5-1v2 [DE plain VFUR wide]  eGFR (CKD-EPI)                       107,0   mL/min/1.73m2   > 60,0  →  read 107 mL/min/1.73m2

**1× miss | total-bilirubin | "Total bilirubin"**
    r5-2v2 [UK plain VFUR single]  Total bilirubin 10 µmol/L 3-21

**1× miss | alt | "Alanine aminotransferase"**
    r5-2v2 [UK plain VFUR single]  Alanine aminotransferase 53 U/L 7-56

**1× miss | ast | "AST"**
    r5-2v2 [UK plain VFUR single]  AST 38 U/L 10-40

**1× miss | alp | "Alkaline phosphatase"**
    r5-2v2 [UK plain VFUR single]  Alkaline phosphatase 133 U/L 44-147

**1× miss | ggt | "Gamma GT"**
    r5-2v2 [UK plain VFUR single]  Gamma GT 6 LOW U/L 8-61

**1× miss | total-cholesterol | "Total cholesterol"**
    r5-2v2 [UK plain VFUR single]  Total cholesterol 4.8 mmol/L < 5.2

**1× miss | rbc | "Red cell count"**
    r5-2v2 [UK plain VFUR single]  Red cell count 5.25 10*12/L 4.20-5.90

**1× flag missed | plusminus VFUR**
    r5-2v3 [DE plain VFUR wide]  GGT                                  6   -   U/l   (8 - 61)  →  read 6 U/L [8, 61]

**1× miss | folate-serum | "Serum folate"**
    r5-6v2 [UK unitspace VURF single]  Serum folate 41.0 nmol / L 6.8 - 45.3

**1× miss | hba1c | "Hemoglobin A1c"**
    r5-7v0 [US glue VFUR tab]  Hemoglobin A1c	4.1%	4.0-5.6

**1× miss | blood-urea-nitrogen | "UREA NITROGEN (BUN)"**
    r5-7v0 [US glue VFUR tab]  UREA NITROGEN (BUN)	20mg/dL	7-25

**1× miss | uric-acid | "URIC ACID"**
    r5-7v0 [US glue VFUR tab]  URIC ACID	3.2mg/dL	2.5-7.0

**1× miss | sodium-serum | "SODIUM"**
    r5-7v0 [US glue VFUR tab]  SODIUM	130	Low	mmol/L	135-145

**1× miss | magnesium-serum | "MAGNESIUM"**
    r5-7v0 [US glue VFUR tab]  MAGNESIUM	1.8mg/dL	1.7-2.4

**1× miss | total-protein | "Protein, Total"**
    r5-7v0 [US glue VFUR tab]  Protein, Total	12.6	High	g/dL	6.0-8.3

**1× miss | hs-crp | "HS CRP"**
    r5-7v0 [US glue VFUR tab]  HS CRP	2.6mg/L	0-3.0

**1× miss | wbc | "WHITE BLOOD CELL COUNT"**
    r5-7v0 [US glue VFUR tab]  WHITE BLOOD CELL COUNT	10.8Thousand/uL	4.0-11.0

**1× miss | rbc | "RED BLOOD CELL COUNT"**
    r5-7v0 [US glue VFUR tab]  RED BLOOD CELL COUNT	4.33Million/uL	4.20-5.90

**1× miss | hemoglobin | "HEMOGLOBIN"**
    r5-7v0 [US glue VFUR tab]  HEMOGLOBIN	16.6g/dL	12.0-17.5

**1× miss | hematocrit | "Hematocrit"**
    r5-7v0 [US glue VFUR tab]  Hematocrit	49.4%	36.0-50.0

**1× miss | platelet-count | "PLATELET COUNT"**
    r5-7v0 [US glue VFUR tab]  PLATELET COUNT	455	High	x10E3/uL	150-400

**1× miss | tsh | "TSH"**
    r5-7v0 [US glue VFUR tab]  TSH	0.73uIU/mL	0.40-4.00

**1× miss | free-t4 | "T4, FREE"**
    r5-7v0 [US glue VFUR tab]  T4, FREE	1.56ng/dL	0.80-1.80

**1× miss | free-t3 | "Triiodothyronine (T3), Free"**
    r5-7v0 [US glue VFUR tab]  Triiodothyronine (T3), Free	2.4pg/mL	2.3-4.2

**1× miss | folate-serum | "Folate (Folic Acid), Serum"**
    r5-7v0 [US glue VFUR tab]  Folate (Folic Acid), Serum	13.0ng/mL	3.0-20.0

**1× date missed | US lines**
    r5-7v0  want 2026-08-23 read null

**1× miss | total-cholesterol | "TOTAL CHOLESTEROL"**
    r5-8v0 [UK twocol VFUR wide]  TOTAL CHOLESTEROL                    3.49   mmol/L   <= 5.20

**1× miss | ldl-cholesterol | "LDL CHOLESTEROL"**
    r5-8v0 [UK twocol VFUR wide]  LDL CHOLESTEROL                      3.93   HIGH   mmol/L   <2.60

**1× miss | hdl-cholesterol | "HDL CHOLESTEROL"**
    r5-8v0 [UK twocol VFUR wide]  HDL CHOLESTEROL                      1.190   mmol/L   >1.030

**1× miss | triglycerides | "TRIGLYCERIDES"**
    r5-8v0 [UK twocol VFUR wide]  TRIGLYCERIDES                        1.332   mmol/L   <= 1.690

**1× miss | wbc | "WBC"**
    r5-8v0 [UK twocol VFUR wide]  WBC                                  6.20   ×10⁹/L   4.00 – 11.00

**1× miss | rbc | "RED CELL COUNT"**
    r5-8v0 [UK twocol VFUR wide]  RED CELL COUNT                       4.210   x10^12/L   4.200 – 5.900

**1× miss | hematocrit | "HAEMATOCRIT"**
    r5-8v0 [UK twocol VFUR wide]  HAEMATOCRIT                          0.319   LOW   L/L   0.360 – 0.500

**1× miss | platelet-count | "PLATELETS"**
    r5-8v0 [UK twocol VFUR wide]  PLATELETS                            28.0   LOW   x10^9/L   150.0 – 400.0

**1× critical not caught (row missed) | platelet-count**
    r5-8v0 [UK twocol VFUR wide]  PLATELETS                            28.0   LOW   x10^9/L   150.0 – 400.0

**1× miss | vitamin-d-25-oh | "25-OH VITAMIN D"**
    r5-8v0 [UK twocol VFUR wide]  25-OH VITAMIN D                      102.3   nmol/L   75.0 – 250.0

**1× miss | folate-serum | "SERUM FOLATE"**
    r5-8v0 [UK twocol VFUR wide]  SERUM FOLATE                         21.98   nmol/L   6.80 – 45.30

**1× miss | testosterone-total | "TESTOSTERONE"**
    r5-8v0 [UK twocol VFUR wide]  TESTOSTERONE                         12.84   nmol/L   9.20 – 31.80

…and 5 smaller groups.
