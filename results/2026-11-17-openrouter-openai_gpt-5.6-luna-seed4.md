# Lab-report reader stress test

80 generated reports, 1634 rows with a known answer, seed 4. Read in 537.3 s (6716.6 ms a report).

| Outcome | Rows | Share | 95% interval |
|---|---|---|---|
| ok | 1630 | 99.8% | 99.37–99.90% |
| unit | 0 | 0.0% | 0.00–0.23% |
| unconverted | 0 | 0.0% | 0.00–0.23% |
| wrong | 4 | 0.2% | 0.10–0.63% |
| miss | 0 | 0.0% | 0.00–0.23% |

- **Critical values:** 17 of 17 caught (100.0%, interval 81.57–100.00%); 0 lost because the row was not read, 0 because it was misread. False critical alarms: 0.
- **Rows that are not on the report:** 0 (of 1634 rows read).
- **Lab's flag:** ok 1582, invented 48.
- **Reference range:** ok 1630.
- **Collection date:** ok 73.

## By locale
| locale | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| UK | 196 | 98.0% | 0.0% | 0.0% | 2.0% | 0.0% |
| US | 638 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| RO | 303 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ES | 320 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| DE | 177 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By kind
| kind | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| fhir | 201 | 99.5% | 0.0% | 0.0% | 0.5% | 0.0% |
| lines | 1245 | 99.8% | 0.0% | 0.0% | 0.2% | 0.0% |
| csv | 188 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By variant
| variant | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| fhir:loinc+text | 81 | 98.8% | 0.0% | 0.0% | 1.2% | 0.0% |
| twocol | 189 | 98.9% | 0.0% | 0.0% | 1.1% | 0.0% |
| glue | 112 | 99.1% | 0.0% | 0.0% | 0.9% | 0.0% |
| plain | 673 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| csv:comma | 57 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| wrap | 121 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| csv:semicolon | 131 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| unitspace | 43 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| fhir:loinc-only | 64 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| colon | 26 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| leaders | 81 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| fhir:text-only | 56 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By units
| units | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| SI | 235 | 98.3% | 0.0% | 0.0% | 1.7% | 0.0% |
| conventional | 1399 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By decimal
| decimal | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| point | 1017 | 99.6% | 0.0% | 0.0% | 0.4% | 0.0% |
| comma | 617 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By sep
| sep | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| single | 430 | 99.5% | 0.0% | 0.0% | 0.5% | 0.0% |
| wide | 1163 | 99.8% | 0.0% | 0.0% | 0.2% | 0.0% |
| tab | 41 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By order
| order | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| VURF | 460 | 99.3% | 0.0% | 0.0% | 0.7% | 0.0% |
| VFUR | 698 | 99.9% | 0.0% | 0.0% | 0.1% | 0.0% |
| VFRU | 417 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| FVUR | 59 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By marker
| marker | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| triglycerides | 40 | 95.0% | 0.0% | 0.0% | 5.0% | 0.0% |
| free-t3 | 38 | 97.4% | 0.0% | 0.0% | 2.6% | 0.0% |
| magnesium-serum | 41 | 97.6% | 0.0% | 0.0% | 2.4% | 0.0% |
| glucose-fasting | 41 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| creatinine-serum | 37 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| blood-urea-nitrogen | 37 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| egfr | 36 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| uric-acid | 41 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| potassium-serum | 39 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| chloride-serum | 40 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| phosphorus-serum | 43 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-protein | 41 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| albumin-serum | 43 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hs-crp | 37 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| tsh | 41 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| free-t4 | 44 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| vitamin-b12 | 39 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| folate-serum | 37 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| testosterone-total | 39 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| sodium-serum | 42 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| calcium-total | 36 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-bilirubin | 38 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| alt | 37 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ast | 35 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| alp | 41 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-cholesterol | 42 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ldl-cholesterol | 39 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hdl-cholesterol | 39 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| vitamin-d-25-oh | 36 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hba1c | 40 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| wbc | 40 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| rbc | 34 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hemoglobin | 38 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hematocrit | 44 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mcv | 36 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mch | 39 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mchc | 34 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| platelet-count | 36 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| serum-iron | 41 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ferritin | 38 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| transferrin-saturation | 37 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ggt | 38 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## What went wrong, most common first

**15× flag invented | words VFUR**
    r4-46 [US fhir:text-only VFUR wide]  BILIRUBIN, TOTAL 1.8 mg/dL  →  read 1.8 mg/dL [0.2, 1.2] H
    r4-46 [US fhir:text-only VFUR wide]  ALT 5 U/L  →  read 5 U/L [7, 56] L
    r4-46 [US fhir:text-only VFUR wide]  ALKALINE PHOSPHATASE 29 U/L  →  read 29 U/L [44, 147] L

**13× flag invented | HL VFRU**
    r4-16 [US fhir:loinc-only VFRU wide]  GLUCOSE 52 mg/dL  →  read 52 mg/dL [70, 99] L
    r4-16 [US fhir:loinc-only VFRU wide]  PHOSPHATE (AS PHOSPHORUS) 1.6 mg/dL  →  read 1.6 mg/dL [2.5, 4.5] L
    r4-16 [US fhir:loinc-only VFRU wide]  ALBUMIN 6.0 g/dL  →  read 6 g/dL [3.5, 5] H

**6× flag invented | HL VFUR**
    r4-66 [UK fhir:loinc+text VFUR wide]  URATE 101 µmol/L  →  read 1.6972 mg/dL [2.5042, 6.994] L
    r4-66 [UK fhir:loinc+text VFUR wide]  CHLORIDE 161 mmol/L  →  read 161 mmol/L [98, 107] H
    r4-66 [UK fhir:loinc+text VFUR wide]  ALANINE AMINOTRANSFERASE 512 U/L  →  read 512 U/L [7, 56] H

**5× flag invented | words VFRU**
    r4-45 [US fhir:text-only VFRU wide]  ALT (SGPT) 325 U/L  →  read 325 U/L [7, 56] H
    r4-45 [US fhir:text-only VFRU wide]  AST 9 U/L  →  read 9 U/L [10, 40] L
    r4-45 [US fhir:text-only VFRU wide]  GGT 92 U/L  →  read 92 U/L [8, 61] H

**4× flag invented | star VFUR**
    r4-27 [UK fhir:loinc-only VFUR wide]  Alkaline phosphatase 217 U/L  →  read 217 U/L [44, 147] H
    r4-27 [UK fhir:loinc-only VFUR wide]  Gamma GT 7 U/L  →  read 7 U/L [8, 61] L
    r4-64 [RO fhir:loinc-only VFUR wide]  ERITROCITE 3.80 10*6/uL  →  read 3.8 Million/uL [4.2, 5.9] L

**3× flag invented | none VURF**
    r4-25 [DE twocol VURF single]  GLUKOSE 533 mg/dl 70 - 99  →  read 533 mg/dL [70, 99] H
    r4-25 [DE twocol VURF single]  NATRIUM 128 mmol/l 135 - 145  →  read 128 mmol/L [135, 145] L
    r4-78 [DE fhir:loinc+text VURF wide]  MCV 112.6 fL  →  read 112.6 fL [80, 100] H

**1× wrong | triglycerides | point glue | unit mmol/L**
    r4-6 [UK glue VURF single]  Triglycerides 1.569mmol/L <= 1.690  →  read 60.62 mg/dL [, 65.376]

**1× wrong | triglycerides | point twocol | unit mmol/L**
    r4-21 [UK twocol VURF single]  Triglycerides 1.47 mmol/L < 1.69  →  read 56.845 mg/dL [, 65.352]

**1× wrong | free-t3 | point twocol | unit pmol/L**
    r4-24 [UK twocol VURF wide]  Free T3                              4.5   pmol/L   [3.5 - 6.5]  →  read 6.91 pg/mL [5.38, 9.98]

**1× flag invented | star FVUR**
    r4-62 [ES fhir:loinc-only FVUR wide]  COLESTEROL LDL 110 mg/dL  →  read 110 mg/dL [, 100] H

**1× wrong | magnesium-serum | point fhir:loinc+text | unit mmol/L**
    r4-66 [UK fhir:loinc+text VFUR wide]  MAGNESIUM 0.82 mmol/L  →  read 19.9301 mg/dL [17.0135, 24.062]

**1× flag invented | words VURF**
    r4-69 [UK fhir:loinc-only VURF wide]  IRON 40.3 µmol/L  →  read 225.1 mcg/dL [50.3, 169.8] H
