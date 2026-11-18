# Lab-report reader stress test

300 generated reports, 4950 rows with a known answer, seed 5. Read in 536.4 s (1788.0 ms a report).

| Outcome | Rows | Share | 95% interval |
|---|---|---|---|
| ok | 4932 | 99.6% | 99.43–99.77% |
| unit | 0 | 0.0% | 0.00–0.08% |
| unconverted | 0 | 0.0% | 0.00–0.08% |
| wrong | 18 | 0.4% | 0.23–0.57% |
| miss | 0 | 0.0% | 0.00–0.08% |

- **Critical values:** 60 of 60 caught (100.0%, interval 93.98–100.00%); 0 lost because the row was not read, 0 because it was misread. False critical alarms: 0.
- **Rows that are not on the report:** 0 (of 4950 rows read).
- **Lab's flag:** ok 4811, invented 121.
- **Reference range:** ok 4929, wrong 3.
- **Collection date:** ok 279.
- **Format invariance** (5 printings of each set of results): of 990 markers, read right in every printing 972 (98.2%), right in some printings but not others 18 (1.8%), never right 0. Critical results caught in every printing: 12 of 12.

## By locale
| locale | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| UK | 990 | 98.5% | 0.0% | 0.0% | 1.5% | 0.0% |
| DE | 990 | 99.8% | 0.0% | 0.0% | 0.2% | 0.0% |
| US | 990 | 99.9% | 0.0% | 0.0% | 0.1% | 0.0% |
| ES | 990 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| RO | 990 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By kind
| kind | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| csv | 434 | 99.3% | 0.0% | 0.0% | 0.7% | 0.0% |
| lines | 4061 | 99.7% | 0.0% | 0.0% | 0.3% | 0.0% |
| fhir | 455 | 99.8% | 0.0% | 0.0% | 0.2% | 0.0% |

## By variant
| variant | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| csv:lowhigh | 108 | 97.2% | 0.0% | 0.0% | 2.8% | 0.0% |
| glue | 348 | 99.1% | 0.0% | 0.0% | 0.9% | 0.0% |
| fhir:text-only | 154 | 99.4% | 0.0% | 0.0% | 0.6% | 0.0% |
| leaders | 223 | 99.6% | 0.0% | 0.0% | 0.4% | 0.0% |
| plain | 2382 | 99.6% | 0.0% | 0.0% | 0.4% | 0.0% |
| twocol | 441 | 99.8% | 0.0% | 0.0% | 0.2% | 0.0% |
| fhir:loinc+text | 213 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| csv:comma | 74 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| unitspace | 296 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| fhir:loinc-only | 88 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| csv:semicolon | 252 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| colon | 118 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| wrap | 253 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By units
| units | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| SI | 1246 | 98.6% | 0.0% | 0.0% | 1.4% | 0.0% |
| conventional | 3704 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By decimal
| decimal | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| point | 2609 | 99.4% | 0.0% | 0.0% | 0.6% | 0.0% |
| comma | 2341 | 99.9% | 0.0% | 0.0% | 0.085% | 0.0% |

## By sep
| sep | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| tab | 434 | 99.5% | 0.0% | 0.0% | 0.5% | 0.0% |
| wide | 3312 | 99.6% | 0.0% | 0.0% | 0.4% | 0.0% |
| single | 1204 | 99.7% | 0.0% | 0.0% | 0.3% | 0.0% |

## By order
| order | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| VFUR | 2654 | 99.6% | 0.0% | 0.0% | 0.4% | 0.0% |
| VURF | 1701 | 99.6% | 0.0% | 0.0% | 0.4% | 0.0% |
| VFRU | 481 | 99.8% | 0.0% | 0.0% | 0.2% | 0.0% |
| FVUR | 114 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By marker
| marker | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| hba1c | 105 | 95.2% | 0.0% | 0.0% | 4.8% | 0.0% |
| triglycerides | 95 | 95.8% | 0.0% | 0.0% | 4.2% | 0.0% |
| magnesium-serum | 95 | 97.9% | 0.0% | 0.0% | 2.1% | 0.0% |
| free-t4 | 125 | 98.4% | 0.0% | 0.0% | 1.6% | 0.0% |
| vitamin-b12 | 155 | 98.7% | 0.0% | 0.0% | 1.3% | 0.0% |
| serum-iron | 90 | 98.9% | 0.0% | 0.0% | 1.1% | 0.0% |
| phosphorus-serum | 90 | 98.9% | 0.0% | 0.0% | 1.1% | 0.0% |
| free-t3 | 145 | 99.3% | 0.0% | 0.0% | 0.7% | 0.0% |
| total-bilirubin | 150 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| alt | 175 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| alp | 160 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ggt | 150 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ferritin | 95 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| transferrin-saturation | 100 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| tsh | 140 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| glucose-fasting | 95 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| creatinine-serum | 90 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| egfr | 85 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| uric-acid | 90 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| sodium-serum | 105 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| potassium-serum | 95 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| chloride-serum | 90 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| calcium-total | 90 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| albumin-serum | 90 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hs-crp | 105 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| wbc | 130 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
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
| blood-urea-nitrogen | 80 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-protein | 90 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## What went wrong, most common first

**21× flag invented | HL VURF**
    r5-11v3 [DE fhir:loinc-only VURF wide]  GPT (ALT) 662 U/L  →  read 662 U/L [7, 56] H
    r5-11v3 [DE fhir:loinc-only VURF wide]  GESAMTCHOLESTERIN 268 mg/dL  →  read 268 mg/dL [, 200] H
    r5-11v3 [DE fhir:loinc-only VURF wide]  25-OH-VITAMIN D 22 ng/mL  →  read 22 ng/mL [30, 100] L

**20× flag invented | none VURF**
    r5-9v4 [RO plain VURF wide]  Sodiu seric                          133   mmol/l   135 – 145  →  read 133 mmol/L [135, 145] L
    r5-9v4 [RO plain VURF wide]  Potasiu                              2,8   mmol/l   3,5 – 5,1  →  read 2.8 mmol/L [3.5, 5.1] L
    r5-9v4 [RO plain VURF wide]  Proteine totale serice               5,4   g/dL   6,0 – 8,3  →  read 5.4 g/dL [6, 8.3] L

**17× flag invented | star VURF**
    r5-5v2 [UK fhir:text-only VURF wide]  GGT 7 U/L  →  read 7 U/L [8, 61] L
    r5-5v2 [UK fhir:text-only VURF wide]  WHITE CELL COUNT 19.0 10*3/uL  →  read 19 Thousand/uL [4, 11] H
    r5-5v2 [UK fhir:text-only VURF wide]  HAEMOGLOBIN 216 g/L  →  read 21.6 g/dL [12, 17.5] H

**11× flag invented | star VFUR**
    r5-19v1 [UK fhir:loinc+text VFUR wide]  Urate 440 µmol/L  →  read 7.4 mg/dL [2.5, 6.99] H
    r5-19v1 [UK fhir:loinc+text VFUR wide]  Magnesium 1.40 mmol/L  →  read 3.4 mg/dL [1.7, 2.41] H
    r5-19v1 [UK fhir:loinc+text VFUR wide]  Total protein 50 g/L  →  read 5 g/dL [6, 8.3] L

**9× flag invented | arrows VFUR**
    r5-23v4 [RO fhir:text-only VFUR wide]  Creatinina 4.49 mg/dL  →  read 4.49 mg/dL [0.6, 1.3] H
    r5-23v4 [RO fhir:text-only VFUR wide]  Sodiu 197 mmol/L  →  read 197 mmol/L [135, 145] H
    r5-23v4 [RO fhir:text-only VFUR wide]  Potasiu seric 3.4 mmol/L  →  read 3.4 mmol/L [3.5, 5.1] L

**8× flag invented | none VFUR**
    r5-20v2 [UK csv:lowhigh VFUR wide]  Free T3,3.2,pmol/L,3.5,6.5,2026-09-21  →  read 2.08 pg/mL [2.28, 4.23] L
    r5-28v0 [ES fhir:loinc-only VFUR wide]  Nitrógeno ureico (BUN) 34 mg/dL  →  read 34 mg/dL [7, 25] H
    r5-28v0 [ES fhir:loinc-only VFUR wide]  Cloro 157 mmol/L  →  read 157 mmol/L [98, 107] H

**7× flag invented | HL VFUR**
    r5-15v0 [US csv:lowhigh VFUR wide]  GGT,94,U/L,8,61,2026-08-21  →  read 94 U/L [8, 61] H
    r5-15v0 [US csv:lowhigh VFUR wide]  "Folate (Folic Acid), Serum",2.3,ng/mL,3,20,2026-08-21  →  read 2.3 ng/mL [3, 20] L
    r5-31v2 [UK fhir:loinc+text VFUR wide]  MCV 152.3 fL  →  read 152.3 fL [80, 100] H

**6× flag invented | arrows VURF**
    r5-0v3 [ES fhir:loinc+text VURF wide]  Fosfatasa alcalina 23 U/L  →  read 23 U/L [44, 147] L
    r5-0v3 [ES fhir:loinc+text VURF wide]  TSH 0.22 m[IU]/L  →  read 0.22 mIU/L [0.4, 4] L
    r5-21v4 [RO fhir:loinc+text VURF wide]  NUMĂR DE ERITROCITE 6.31 M/uL  →  read 6.31 Million/uL [4.2, 5.9] H

**5× flag invented | words VURF**
    r5-7v1 [UK fhir:loinc+text VURF wide]  Sodium 130 mmol/L  →  read 130 mmol/L [135, 145] L
    r5-7v1 [UK fhir:loinc+text VURF wide]  Total protein 126 g/L  →  read 12.6 g/dL [6, 8.3] H
    r5-7v1 [UK fhir:loinc+text VURF wide]  MCH 35.9 pg  →  read 35.9 pg [27, 33] H

**5× flag invented | star FVUR**
    r5-7v3 [ES fhir:loinc+text FVUR wide]  SODIO 130 mmol/L  →  read 130 mmol/L [135, 145] L
    r5-7v3 [ES fhir:loinc+text FVUR wide]  PROTEÍNAS TOTALES 12.6 g/dL  →  read 12.6 g/dL [6, 8.3] H
    r5-7v3 [ES fhir:loinc+text FVUR wide]  HCM 35.9 pg  →  read 35.9 pg [27, 33] H

**5× flag invented | words VFUR**
    r5-49v1 [UK fhir:loinc+text VFUR wide]  CREATININE 268 µmol/L  →  read 3.03 mg/dL [0.6, 1.3] H
    r5-49v1 [UK fhir:loinc+text VFUR wide]  URIC ACID 107 µmol/L  →  read 1.8 mg/dL [2.5, 6.99] L
    r5-49v1 [UK fhir:loinc+text VFUR wide]  POTASSIUM 2.7 mmol/L  →  read 2.7 mmol/L [3.5, 5.1] L

**4× flag invented | words VFRU**
    r5-4v1 [US fhir:loinc-only VFRU wide]  ALT (SGPT) 4 U/L  →  read 4 U/L [7, 56] L
    r5-4v1 [US fhir:loinc-only VFRU wide]  WBC 2.4 10*3/uL  →  read 2.4 Thousand/uL [4, 11] L
    r5-4v1 [US fhir:loinc-only VFRU wide]  HEMATOCRIT 23.8 %  →  read 23.8 % [36, 50] L

**4× wrong | hba1c | point plain | unit mmol/mol**
    r5-13v1 [UK plain VFUR wide]  HbA1c                                16   mmol/mol   20 – 38  →  read 1.66 % [2.03, 3.48]
    r5-22v1 [UK plain VURF tab]  HbA1c	37	mmol/mol	20 - 38  →  read 3.582 % [2.027, 3.674]
    r5-26v2 [UK plain VFUR single]  HbA1c 23 mmol/mol (20 - 38)  →  read 4.1 % [4, 5]

**3× flag invented | plusminus VURF**
    r5-45v0 [DE fhir:loinc-only VURF wide]  MCHC 46.7 g/dL  →  read 46.7 g/dL [32, 36] H
    r5-45v0 [DE fhir:loinc-only VURF wide]  THROMBOZYTEN 557 K/uL  →  read 557 Thousand/uL [150, 400] H
    r5-45v0 [DE fhir:loinc-only VURF wide]  VITAMIN D (25-OH) 19 ng/mL  →  read 19 ng/mL [30, 100] L

**2× wrong | triglycerides | point plain | unit mmol/L**
    r5-10v1 [UK plain VFUR wide]  Triglycerides                        1.91   H   mmol/L   < 1.69  →  read 73.86 mg/dL [, 65.35] H
    r5-11v2 [UK plain VURF single]  TRIGLYCERIDES 0.86 mmol/L <1.69  →  read 33.23 mg/dL [, 65.48]

**1× range wrong | UK spaced | two-sided**
    r5-1v1 [UK plain VFUR single]  HbA1c 30 mmol/mol 20 - 38  →  read 4.9 % [3.9, 5.6]

**1× wrong | vitamin-b12 | point plain | unit pmol/L**
    r5-1v1 [UK plain VFUR single]  Vitamin B12 556 pmol/L 148 - 664  →  read 410.08 pg/mL [109.16, 489.44]

**1× range wrong | DE tight | two-sided**
    r5-7v2 [DE plain VFUR wide]  HbA1c                                21   mmol/mol   20-38  →  read 4.1 % [4.1, 5.6]

**1× wrong | triglycerides | point glue | unit mmol/L**
    r5-9v1 [UK glue VFUR wide]  Triglycerides                        1.39mmol/L   <= 1.69  →  read 53.7 mg/dL [, 65.4]

**1× wrong | free-t3 | comma leaders | unit pmol/l**
    r5-12v2 [DE leaders VFUR single]  FREIES T3 ......................... 5,7 pmol/l (3,5 - 6,5)  →  read 8.76 pg/mL [5.38, 9.98]

**1× wrong | free-t4 | point plain | unit pmol/L**
    r5-18v2 [UK plain VURF wide]  Free T4                              13.6   pmol/L   10.3 – 23.2  →  read 0.105 ng/dL [0.08, 0.18]

**1× wrong | serum-iron | comma twocol | unit µmol/l**
    r5-24v2 [DE twocol VFUR tab]  EISEN	4,8	*	µmol/l	9,0 - 30,4  →  read 0.2681 mcg/dL [0.5026, 1.6977] L

**1× wrong | magnesium-serum | point csv:lowhigh | unit mmol/L**
    r5-26v1 [US csv:lowhigh VFRU wide]  Magnesium,0.91,mmol/L,0.7,0.99,2026-07-02  →  read 22.118 mg/dL [17.014, 24.062]

**1× range wrong | UK paren | two-sided**
    r5-26v2 [UK plain VFUR single]  Haemoglobin 88 * g/L (120 - 175)  →  read 8.8 g/dL [12, 17] L

**1× wrong | vitamin-b12 | point csv:lowhigh | unit pmol/L**
    r5-27v2 [UK csv:lowhigh VFUR wide]  Vitamin B12,725,pmol/L,148,664,2026-04-13  →  read 534.8 pg/mL [109.2, 489.4]

**1× wrong | hba1c | point glue | unit mmol/mol**
    r5-28v2 [UK glue VFUR wide]  HbA1c                                23mmol/mol   20-38  →  read 2.3 % [2.03, 3.67]

**1× wrong | magnesium-serum | point plain | unit mmol/L**
    r5-34v1 [UK plain VURF wide]  Magnesium                            1.40   mmol/L   0.70 – 0.99   HIGH  →  read 34.03 mg/dL [17.01, 24.06] H

**1× wrong | free-t4 | point glue | unit pmol/L**
    r5-35v2 [UK glue VFUR wide]  Free T4                              18.8pmol/L   [10.3 - 23.2]  →  read 0.24 ng/dL [0.13, 0.3]

**1× wrong | phosphorus-serum | point csv:lowhigh | unit mmol/L**
    r5-48v2 [UK csv:lowhigh VFUR wide]  Phosphate,1.16,mmol/L,0.81,1.45,2026-07-08  →  read 4.17 mg/dL [2.91, 5.21]

**1× wrong | triglycerides | point fhir:text-only | unit mmol/L**
    r5-59v2 [UK fhir:text-only VURF wide]  Triglycerides 1.63 mmol/L  →  read 63.03 mg/dL [, 65.36]
