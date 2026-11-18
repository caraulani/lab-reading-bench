# Lab-report reader stress test

97 generated reports, 301 rows with a known answer, seed 5, only kind=lines. Read in 0.0 s (0.1 ms a report).

| Outcome | Rows | Share | 95% interval |
|---|---|---|---|
| ok | 285 | 94.7% | 91.54–96.70% |
| unit | 0 | 0.0% | 0.00–1.26% |
| unconverted | 0 | 0.0% | 0.00–1.26% |
| wrong | 0 | 0.0% | 0.00–1.26% |
| miss | 16 | 5.3% | 3.30–8.46% |

- **Critical values:** 0 of 0 caught (–, interval 0.00–0.00%); 0 lost because the row was not read, 0 because it was misread. False critical alarms: 0.
- **Rows that are not on the report:** 0 (of 285 rows read).
- **Lab's flag:** ok 278, invented 7.
- **Reference range:** ok 285.
- **Collection date:** ok 19, missed 1.
- **Crashes:** 77.
- **Format invariance** (5 printings of each set of results): of 76 markers, read right in every printing 60 (78.9%), right in some printings but not others 16 (21.1%), never right 0. Critical results caught in every printing: 0 of 0.

## By locale
| locale | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| UK | 29 | 44.8% | 0.0% | 0.0% | 0.0% | 55.2% |
| US | 37 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| DE | 76 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| RO | 92 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ES | 67 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By kind
| kind | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| lines | 301 | 94.7% | 0.0% | 0.0% | 0.0% | 5.3% |

## By variant
| variant | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| plain | 186 | 91.4% | 0.0% | 0.0% | 0.0% | 8.6% |
| twocol | 44 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| unitspace | 39 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| glue | 16 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| leaders | 16 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By units
| units | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| SI | 38 | 57.9% | 0.0% | 0.0% | 0.0% | 42.1% |
| conventional | 263 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By decimal
| decimal | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| point | 82 | 80.5% | 0.0% | 0.0% | 0.0% | 19.5% |
| comma | 219 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By sep
| sep | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| single | 53 | 69.8% | 0.0% | 0.0% | 0.0% | 30.2% |
| wide | 239 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| tab | 9 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By order
| order | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| VFUR | 144 | 88.9% | 0.0% | 0.0% | 0.0% | 11.1% |
| VFRU | 21 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| VURF | 136 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By marker
| marker | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| ldl-cholesterol | 5 | 80.0% | 0.0% | 0.0% | 0.0% | 20.0% |
| mcv | 9 | 88.9% | 0.0% | 0.0% | 0.0% | 11.1% |
| platelet-count | 9 | 88.9% | 0.0% | 0.0% | 0.0% | 11.1% |
| total-cholesterol | 9 | 88.9% | 0.0% | 0.0% | 0.0% | 11.1% |
| hdl-cholesterol | 9 | 88.9% | 0.0% | 0.0% | 0.0% | 11.1% |
| hematocrit | 10 | 90.0% | 0.0% | 0.0% | 0.0% | 10.0% |
| mchc | 10 | 90.0% | 0.0% | 0.0% | 0.0% | 10.0% |
| ferritin | 11 | 90.9% | 0.0% | 0.0% | 0.0% | 9.1% |
| transferrin-saturation | 11 | 90.9% | 0.0% | 0.0% | 0.0% | 9.1% |
| rbc | 12 | 91.7% | 0.0% | 0.0% | 0.0% | 8.3% |
| hemoglobin | 13 | 92.3% | 0.0% | 0.0% | 0.0% | 7.7% |
| ast | 13 | 92.3% | 0.0% | 0.0% | 0.0% | 7.7% |
| total-bilirubin | 17 | 94.1% | 0.0% | 0.0% | 0.0% | 5.9% |
| alt | 17 | 94.1% | 0.0% | 0.0% | 0.0% | 5.9% |
| alp | 17 | 94.1% | 0.0% | 0.0% | 0.0% | 5.9% |
| ggt | 17 | 94.1% | 0.0% | 0.0% | 0.0% | 5.9% |
| serum-iron | 6 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| tsh | 8 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| free-t3 | 8 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| glucose-fasting | 3 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hba1c | 3 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| creatinine-serum | 3 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| egfr | 3 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| uric-acid | 3 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| sodium-serum | 3 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| potassium-serum | 3 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| chloride-serum | 3 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| calcium-total | 3 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| magnesium-serum | 3 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| phosphorus-serum | 3 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| albumin-serum | 3 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hs-crp | 3 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| wbc | 8 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mch | 3 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| vitamin-d-25-oh | 8 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| vitamin-b12 | 8 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| folate-serum | 7 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| testosterone-total | 8 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| triglycerides | 4 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| free-t4 | 5 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## What went wrong, most common first

**77× crash | not in the cache (offline)**
    r5-1v1
    r5-5v1
    r5-5v3

**7× flag invented | none VFUR**
    r5-5v0 [RO leaders VFUR wide]  GGT ...............................   7,0   U/L   8,0 - 61,0  →  read 7 U/L [8, 61] L
    r5-5v0 [RO leaders VFUR wide]  NUMĂR DE LEUCOCITE ................   19,00   10^3/µL   4,00 - 11,00  →  read 19 Thousand/uL [4, 11] H
    r5-5v0 [RO leaders VFUR wide]  HEMOGLOBINĂ .......................   21,60   g/dl   12,00 - 17,50  →  read 21.6 g/dL [12, 17.5] H

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

**1× miss | ldl-cholesterol | "LDL cholesterol"**
    r5-2v2 [UK plain VFUR single]  LDL cholesterol 2.5 mmol/L <= 2.6

**1× miss | hdl-cholesterol | "HDL cholesterol"**
    r5-2v2 [UK plain VFUR single]  HDL cholesterol 1.09 mmol/L > 1.03

**1× miss | rbc | "Red cell count"**
    r5-2v2 [UK plain VFUR single]  Red cell count 5.25 10*12/L 4.20-5.90

**1× miss | hemoglobin | "Haemoglobin"**
    r5-2v2 [UK plain VFUR single]  Haemoglobin 152 g/L 120-175

**1× miss | hematocrit | "Haematocrit"**
    r5-2v2 [UK plain VFUR single]  Haematocrit 0.42 L/L 0.36-0.50

**1× miss | mcv | "MCV"**
    r5-2v2 [UK plain VFUR single]  MCV 89.5 fL 80.0-100.0

**1× miss | mchc | "MCHC"**
    r5-2v2 [UK plain VFUR single]  MCHC 326 g/L 320-360

**1× miss | platelet-count | "Platelet count"**
    r5-2v2 [UK plain VFUR single]  Platelet count 246 10*9/L 150-400

**1× miss | ferritin | "Ferritin"**
    r5-2v2 [UK plain VFUR single]  Ferritin 165 µg/L 30-300

**1× miss | transferrin-saturation | "Transferrin saturation"**
    r5-2v2 [UK plain VFUR single]  Transferrin saturation 24 % 20-50

**1× date missed | UK lines**
    r5-2v2  want 2026-08-03 read null
