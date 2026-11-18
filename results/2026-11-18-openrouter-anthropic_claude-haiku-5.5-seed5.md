# Lab-report reader stress test

300 generated reports, 4950 rows with a known answer, seed 5. Read in 424.4 s (1414.6 ms a report).

| Outcome | Rows | Share | 95% interval |
|---|---|---|---|
| ok | 4945 | 99.9% | 99.76–99.96% |
| unit | 0 | 0.0% | 0.00–0.08% |
| unconverted | 0 | 0.0% | 0.00–0.08% |
| wrong | 4 | 0.081% | 0.03–0.21% |
| miss | 1 | 0.020% | 0.00–0.11% |

- **Critical values:** 60 of 60 caught (100.0%, interval 93.98–100.00%); 0 lost because the row was not read, 0 because it was misread. False critical alarms: 0.
- **Rows that are not on the report:** 1 (of 4950 rows read).
- **Lab's flag:** ok 4830, invented 111, missed 4.
- **Reference range:** ok 4942, wrong 3.
- **Collection date:** ok 279.
- **Format invariance** (5 printings of each set of results): of 990 markers, read right in every printing 985 (99.5%), right in some printings but not others 5 (0.5%), never right 0. Critical results caught in every printing: 12 of 12.

## By locale
| locale | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| UK | 990 | 99.6% | 0.0% | 0.0% | 0.3% | 0.1% |
| DE | 990 | 99.9% | 0.0% | 0.0% | 0.1% | 0.0% |
| US | 990 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ES | 990 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| RO | 990 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By kind
| kind | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| csv | 434 | 99.8% | 0.0% | 0.0% | 0.2% | 0.0% |
| lines | 4061 | 99.9% | 0.0% | 0.0% | 0.074% | 0.025% |
| fhir | 455 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By variant
| variant | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| csv:comma | 74 | 98.6% | 0.0% | 0.0% | 1.4% | 0.0% |
| glue | 348 | 99.4% | 0.0% | 0.0% | 0.6% | 0.0% |
| leaders | 223 | 99.6% | 0.0% | 0.0% | 0.4% | 0.0% |
| unitspace | 296 | 99.7% | 0.0% | 0.0% | 0.0% | 0.3% |
| twocol | 441 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| csv:lowhigh | 108 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| fhir:loinc+text | 213 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| plain | 2382 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| fhir:loinc-only | 88 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| fhir:text-only | 154 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| csv:semicolon | 252 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| colon | 118 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| wrap | 253 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By units
| units | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| SI | 1246 | 99.6% | 0.0% | 0.0% | 0.3% | 0.080% |
| conventional | 3704 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By decimal
| decimal | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| point | 2609 | 99.8% | 0.0% | 0.0% | 0.1% | 0.038% |
| comma | 2341 | 100.0% | 0.0% | 0.0% | 0.043% | 0.0% |

## By sep
| sep | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| single | 1204 | 99.8% | 0.0% | 0.0% | 0.083% | 0.083% |
| wide | 3312 | 99.9% | 0.0% | 0.0% | 0.091% | 0.0% |
| tab | 434 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By order
| order | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| VFUR | 2654 | 99.8% | 0.0% | 0.0% | 0.2% | 0.0% |
| VURF | 1701 | 99.9% | 0.0% | 0.0% | 0.0% | 0.059% |
| VFRU | 481 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| FVUR | 114 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By marker
| marker | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| serum-iron | 90 | 97.8% | 0.0% | 0.0% | 2.2% | 0.0% |
| wbc | 130 | 99.2% | 0.0% | 0.0% | 0.0% | 0.8% |
| free-t3 | 145 | 99.3% | 0.0% | 0.0% | 0.7% | 0.0% |
| vitamin-b12 | 155 | 99.4% | 0.0% | 0.0% | 0.6% | 0.0% |
| total-bilirubin | 150 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| alt | 175 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| alp | 160 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ggt | 150 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ferritin | 95 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| transferrin-saturation | 100 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| tsh | 140 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| glucose-fasting | 95 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hba1c | 105 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| creatinine-serum | 90 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| egfr | 85 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| uric-acid | 90 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| sodium-serum | 105 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| potassium-serum | 95 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| chloride-serum | 90 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| calcium-total | 90 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| magnesium-serum | 95 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| phosphorus-serum | 90 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| albumin-serum | 90 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hs-crp | 105 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| rbc | 120 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hemoglobin | 140 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mcv | 135 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mch | 125 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| platelet-count | 105 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| vitamin-d-25-oh | 155 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| folate-serum | 160 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| testosterone-total | 170 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ast | 135 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-cholesterol | 105 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ldl-cholesterol | 120 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hdl-cholesterol | 130 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hematocrit | 120 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mchc | 125 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| triglycerides | 95 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| free-t4 | 125 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| blood-urea-nitrogen | 80 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-protein | 90 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## What went wrong, most common first

**21× flag invented | HL VURF**
    r5-11v3 [DE fhir:loinc-only VURF wide]  GPT (ALT) 662 U/L  →  read 662 U/L [7, 56] H
    r5-11v3 [DE fhir:loinc-only VURF wide]  GESAMTCHOLESTERIN 268 mg/dL  →  read 268 mg/dL [, 200] H
    r5-11v3 [DE fhir:loinc-only VURF wide]  25-OH-VITAMIN D 22 ng/mL  →  read 22 ng/mL [30, 100] L

**17× flag invented | star VURF**
    r5-5v2 [UK fhir:text-only VURF wide]  GGT 7 U/L  →  read 7 U/L [8, 61] L
    r5-5v2 [UK fhir:text-only VURF wide]  WHITE CELL COUNT 19.0 10*3/uL  →  read 19 Thousand/uL [4, 11] H
    r5-5v2 [UK fhir:text-only VURF wide]  HAEMOGLOBIN 216 g/L  →  read 21.6 g/dL [12, 17.5] H

**14× flag invented | none VURF**
    r5-43v2 [DE fhir:text-only VURF wide]  HBA1C 3.6 %  →  read 3.6 % [4, 5.6] L
    r5-43v2 [DE fhir:text-only VURF wide]  HARNSTOFF-N 28 mg/dL  →  read 28 mg/dL [7, 25] H
    r5-43v2 [DE fhir:text-only VURF wide]  NATRIUM 133 mmol/L  →  read 133 mmol/L [135, 145] L

**11× flag invented | star VFUR**
    r5-19v1 [UK fhir:loinc+text VFUR wide]  Urate 440 µmol/L  →  read 7.4 mg/dL [2.51, 6.99] H
    r5-19v1 [UK fhir:loinc+text VFUR wide]  Magnesium 1.40 mmol/L  →  read 3.4 mg/dL [1.7, 2.41] H
    r5-19v1 [UK fhir:loinc+text VFUR wide]  Total protein 50 g/L  →  read 5 g/dL [6, 8.3] L

**9× flag invented | arrows VFUR**
    r5-23v4 [RO fhir:text-only VFUR wide]  Creatinina 4.49 mg/dL  →  read 4.49 mg/dL [0.6, 1.3] H
    r5-23v4 [RO fhir:text-only VFUR wide]  Sodiu 197 mmol/L  →  read 197 mmol/L [135, 145] H
    r5-23v4 [RO fhir:text-only VFUR wide]  Potasiu seric 3.4 mmol/L  →  read 3.4 mmol/L [3.5, 5.1] L

**6× flag invented | arrows VURF**
    r5-0v3 [ES fhir:loinc+text VURF wide]  Fosfatasa alcalina 23 U/L  →  read 23 U/L [44, 147] L
    r5-0v3 [ES fhir:loinc+text VURF wide]  TSH 0.22 m[IU]/L  →  read 0.22 mIU/L [0.4, 4] L
    r5-21v4 [RO fhir:loinc+text VURF wide]  NUMĂR DE ERITROCITE 6.31 M/uL  →  read 6.31 Million/uL [4.2, 5.9] H

**6× flag invented | none VFUR**
    r5-28v0 [ES fhir:loinc-only VFUR wide]  Nitrógeno ureico (BUN) 34 mg/dL  →  read 34 mg/dL [7, 25] H
    r5-28v0 [ES fhir:loinc-only VFUR wide]  Cloro 157 mmol/L  →  read 157 mmol/L [98, 107] H
    r5-28v0 [ES fhir:loinc-only VFUR wide]  Fósforo 5.7 mg/dL  →  read 5.7 mg/dL [2.5, 4.5] H

**5× flag invented | words VURF**
    r5-7v1 [UK fhir:loinc+text VURF wide]  Sodium 130 mmol/L  →  read 130 mmol/L [135, 145] L
    r5-7v1 [UK fhir:loinc+text VURF wide]  Total protein 126 g/L  →  read 12.6 g/dL [6, 8.3] H
    r5-7v1 [UK fhir:loinc+text VURF wide]  MCH 35.9 pg  →  read 35.9 pg [27, 33] H

**5× flag invented | star FVUR**
    r5-7v3 [ES fhir:loinc+text FVUR wide]  SODIO 130 mmol/L  →  read 130 mmol/L [135, 145] L
    r5-7v3 [ES fhir:loinc+text FVUR wide]  PROTEÍNAS TOTALES 12.6 g/dL  →  read 12.6 g/dL [6, 8.3] H
    r5-7v3 [ES fhir:loinc+text FVUR wide]  HCM 35.9 pg  →  read 35.9 pg [27, 33] H

**5× flag invented | HL VFUR**
    r5-31v2 [UK fhir:loinc+text VFUR wide]  MCV 152.3 fL  →  read 152.3 fL [80, 100] H
    r5-31v2 [UK fhir:loinc+text VFUR wide]  MCH 39.0 pg  →  read 39 pg [27, 33] H
    r5-31v2 [UK fhir:loinc+text VFUR wide]  MCHC 460 g/L  →  read 46 g/dL [32, 36] H

**5× flag invented | words VFUR**
    r5-49v1 [UK fhir:loinc+text VFUR wide]  CREATININE 268 µmol/L  →  read 3.03 mg/dL [0.6, 1.3] H
    r5-49v1 [UK fhir:loinc+text VFUR wide]  URIC ACID 107 µmol/L  →  read 1.8 mg/dL [2.51, 6.99] L
    r5-49v1 [UK fhir:loinc+text VFUR wide]  POTASSIUM 2.7 mmol/L  →  read 2.7 mmol/L [3.5, 5.1] L

**4× flag invented | words VFRU**
    r5-4v1 [US fhir:loinc-only VFRU wide]  ALT (SGPT) 4 U/L  →  read 4 U/L [7, 56] L
    r5-4v1 [US fhir:loinc-only VFRU wide]  WBC 2.4 10*3/uL  →  read 2.4 Thousand/uL [4, 11] L
    r5-4v1 [US fhir:loinc-only VFRU wide]  HEMATOCRIT 23.8 %  →  read 23.8 % [36, 50] L

**3× flag invented | plusminus VURF**
    r5-45v0 [DE fhir:loinc-only VURF wide]  MCHC 46.7 g/dL  →  read 46.7 g/dL [32, 36] H
    r5-45v0 [DE fhir:loinc-only VURF wide]  THROMBOZYTEN 557 K/uL  →  read 557 Thousand/uL [150, 400] H
    r5-45v0 [DE fhir:loinc-only VURF wide]  VITAMIN D (25-OH) 19 ng/mL  →  read 19 ng/mL [30, 100] L

**2× flag missed | plusminus VFUR**
    r5-2v3 [DE plain VFUR wide]  GGT                                  6   -   U/l   (8 - 61)  →  read 6 U/L [8, 61]
    r5-10v2 [DE plain VFUR wide]  Glucose                              67   -   mg/dl   [70 - 99]  →  read 67 mg/dL [70, 99]

**2× range wrong | UK bracket | two-sided**
    r5-30v2 [UK plain VFUR wide]  Vitamin D                            187.2   nmol/L   [75.0 - 250.0]  →  read 75 ng/mL [75, 250]
    r5-43v1 [UK plain VFUR wide]  HbA1c                                16   mmol/mol   [20 - 38]  →  read 3.6 % [4.1, 5.6]

**2× flag missed | plusminus VURF**
    r5-57v2 [DE plain VURF wide]  Gesamtbilirubin                      0,100   mg/dl   (0,200 - 1,200)   -  →  read 0.1 mg/dL [0.2, 1.2]
    r5-57v2 [DE plain VURF wide]  Testosteron                          216,00   ng/dl   (264,00 - 916,00)   -  →  read 216 ng/dL [264, 916]

**1× miss | wbc | "White cell count"**
    r5-6v2 [UK unitspace VURF single]  White cell count 10.1 x10^9 / L 4.0 - 11.0

**1× not on the report | white-cell-count | read from "white-cell-count"**
    r5-6v2 [UK unitspace]  white-cell-count = 10.1 Thousand/uL

**1× range wrong | UK paren | two-sided**
    r5-12v1 [UK plain VURF wide]  HbA1c                                34   mmol/mol   (20 - 38)  →  read 5.3 % [5, 5.6]

**1× wrong | free-t3 | comma leaders | unit pmol/l**
    r5-12v2 [DE leaders VFUR single]  FREIES T3 ......................... 5,7 pmol/l (3,5 - 6,5)  →  read 1.86 pg/mL [1.14, 2.12]

**1× wrong | vitamin-b12 | point glue | unit pmol/L**
    r5-28v2 [UK glue VFUR wide]  Vitamin B12                          623pmol/L   148-664  →  read 623 pg/mL [148, 664]

**1× wrong | serum-iron | point glue | unit µmol/L**
    r5-35v2 [UK glue VFUR wide]  Iron                                 14.3µmol/L   [9.0 - 30.4]  →  read 14.3 mcg/dL [9, 30.4]

**1× wrong | serum-iron | point csv:comma | unit µmol/L**
    r5-54v2 [UK csv:comma VFUR wide]  Iron,10.0,,µmol/L,[9.0 - 30.4]  →  read 558.5 mcg/dL [502.7, 1697.8]
