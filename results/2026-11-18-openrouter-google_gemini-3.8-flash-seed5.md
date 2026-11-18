# Lab-report reader stress test

150 generated reports, 2557 rows with a known answer, seed 5. Read in 543.3 s (3622.1 ms a report).

| Outcome | Rows | Share | 95% interval |
|---|---|---|---|
| ok | 2557 | 100.0% | 99.85–100.00% |
| unit | 0 | 0.0% | 0.00–0.15% |
| unconverted | 0 | 0.0% | 0.00–0.15% |
| wrong | 0 | 0.0% | 0.00–0.15% |
| miss | 0 | 0.0% | 0.00–0.15% |

- **Critical values:** 45 of 45 caught (100.0%, interval 92.13–100.00%); 0 lost because the row was not read, 0 because it was misread. False critical alarms: 0.
- **Rows that are not on the report:** 0 (of 2557 rows read).
- **Lab's flag:** ok 2490, invented 67.
- **Reference range:** ok 2557.
- **Collection date:** ok 133.
- **Crashes:** 7.
- **Format invariance** (5 printings of each set of results): of 521 markers, read right in every printing 521 (100.0%), right in some printings but not others 0 (0.0%), never right 0. Critical results caught in every printing: 9 of 9.

## By locale
| locale | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| US | 521 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| UK | 521 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| DE | 497 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ES | 521 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| RO | 497 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By kind
| kind | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| lines | 2025 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| csv | 259 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| fhir | 273 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By variant
| variant | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| twocol | 266 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| csv:lowhigh | 86 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| fhir:loinc+text | 130 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| plain | 1245 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| csv:comma | 72 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| unitspace | 176 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| glue | 141 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| fhir:loinc-only | 48 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| leaders | 100 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| fhir:text-only | 95 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| csv:semicolon | 101 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| colon | 42 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| wrap | 55 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By units
| units | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| conventional | 1868 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| SI | 689 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By decimal
| decimal | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| point | 1418 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| comma | 1139 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By sep
| sep | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| wide | 1801 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| tab | 192 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| single | 564 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By order
| order | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| VFRU | 279 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| VFUR | 1404 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| VURF | 770 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| FVUR | 104 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By marker
| marker | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| total-bilirubin | 75 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| alt | 80 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| alp | 70 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ggt | 65 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| serum-iron | 38 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ferritin | 43 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| transferrin-saturation | 43 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| tsh | 55 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| free-t3 | 63 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| glucose-fasting | 58 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hba1c | 63 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| creatinine-serum | 48 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| egfr | 58 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| uric-acid | 48 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| sodium-serum | 63 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| potassium-serum | 53 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| chloride-serum | 48 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| calcium-total | 43 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| magnesium-serum | 58 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| phosphorus-serum | 53 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| albumin-serum | 48 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hs-crp | 58 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| wbc | 75 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| rbc | 75 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hemoglobin | 85 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mcv | 75 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mch | 70 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| platelet-count | 60 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| vitamin-d-25-oh | 68 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| vitamin-b12 | 78 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| folate-serum | 78 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| testosterone-total | 78 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ast | 60 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-cholesterol | 45 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ldl-cholesterol | 50 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hdl-cholesterol | 60 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hematocrit | 75 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mchc | 75 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| triglycerides | 55 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| free-t4 | 58 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| blood-urea-nitrogen | 53 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-protein | 53 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## What went wrong, most common first

**14× flag invented | HL VURF**
    r5-11v3 [DE fhir:loinc-only VURF wide]  GPT (ALT) 662 U/L  →  read 662 U/L [7, 56] H
    r5-11v3 [DE fhir:loinc-only VURF wide]  GESAMTCHOLESTERIN 268 mg/dL  →  read 268 mg/dL [, 200] H
    r5-11v3 [DE fhir:loinc-only VURF wide]  25-OH-VITAMIN D 22 ng/mL  →  read 22 ng/mL [30, 100] L

**10× flag invented | star VURF**
    r5-5v2 [UK fhir:text-only VURF wide]  GGT 7 U/L  →  read 7 U/L [8, 61] L
    r5-5v2 [UK fhir:text-only VURF wide]  WHITE CELL COUNT 19.0 10*3/uL  →  read 19 Thousand/uL [4, 11] H
    r5-5v2 [UK fhir:text-only VURF wide]  HAEMOGLOBIN 216 g/L  →  read 21.6 g/dL [12, 17.5] H

**9× flag invented | arrows VFUR**
    r5-23v4 [RO fhir:text-only VFUR wide]  Creatinina 4.49 mg/dL  →  read 4.49 mg/dL [0.6, 1.3] H
    r5-23v4 [RO fhir:text-only VFUR wide]  Sodiu 197 mmol/L  →  read 197 mmol/L [135, 145] H
    r5-23v4 [RO fhir:text-only VFUR wide]  Potasiu seric 3.4 mmol/L  →  read 3.4 mmol/L [3.5, 5.1] L

**8× flag invented | star VFUR**
    r5-19v1 [UK fhir:loinc+text VFUR wide]  Urate 440 µmol/L  →  read 7.4 mg/dL [2.5, 7] H
    r5-19v1 [UK fhir:loinc+text VFUR wide]  Magnesium 1.40 mmol/L  →  read 3.4 mg/dL [1.7, 2.41] H
    r5-19v1 [UK fhir:loinc+text VFUR wide]  Total protein 50 g/L  →  read 5 g/dL [6, 8.3] L

**7× crash | budget reached**
    r5-28v3
    r5-28v4
    r5-29v0

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

**4× flag invented | words VFRU**
    r5-4v1 [US fhir:loinc-only VFRU wide]  ALT (SGPT) 4 U/L  →  read 4 U/L [7, 56] L
    r5-4v1 [US fhir:loinc-only VFRU wide]  WBC 2.4 10*3/uL  →  read 2.4 Thousand/uL [4, 11] L
    r5-4v1 [US fhir:loinc-only VFRU wide]  HEMATOCRIT 23.8 %  →  read 23.8 % [36, 50] L
