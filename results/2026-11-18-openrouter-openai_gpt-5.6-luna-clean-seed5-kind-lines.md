# Lab-report reader stress test

97 generated reports, 1792 rows with a known answer, seed 5, only kind=lines. Read in 0.0 s (0.1 ms a report).

| Outcome | Rows | Share | 95% interval |
|---|---|---|---|
| ok | 1781 | 99.4% | 98.90–99.66% |
| unit | 0 | 0.0% | 0.00–0.21% |
| unconverted | 0 | 0.0% | 0.00–0.21% |
| wrong | 10 | 0.6% | 0.30–1.02% |
| miss | 1 | 0.056% | 0.01–0.32% |

- **Critical values:** 31 of 31 caught (100.0%, interval 88.97–100.00%); 0 lost because the row was not read, 0 because it was misread. False critical alarms: 0.
- **Rows that are not on the report:** 1 (of 1792 rows read).
- **Lab's flag:** ok 1779, missed 2.
- **Reference range:** ok 1779, wrong 2.
- **Collection date:** ok 97.
- **Wrong values printed in a unit that needs converting:** 10 of 10 (100.0%).
- **Format invariance** (5 printings of each set of results): of 438 markers, read right in every printing 427 (97.5%), right in some printings but not others 11 (2.5%), never right 0. Critical results caught in every printing: 8 of 8.

## By locale
| locale | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| UK | 312 | 96.8% | 0.0% | 0.0% | 3.2% | 0.0% |
| RO | 338 | 99.7% | 0.0% | 0.0% | 0.0% | 0.3% |
| US | 392 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| DE | 380 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ES | 370 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By kind
| kind | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| lines | 1792 | 99.4% | 0.0% | 0.0% | 0.6% | 0.056% |

## By variant
| variant | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| glue | 117 | 99.1% | 0.0% | 0.0% | 0.9% | 0.0% |
| plain | 1131 | 99.2% | 0.0% | 0.0% | 0.7% | 0.088% |
| unitspace | 176 | 99.4% | 0.0% | 0.0% | 0.6% | 0.0% |
| twocol | 191 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| leaders | 88 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| colon | 34 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| wrap | 55 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By units
| units | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| SI | 438 | 97.7% | 0.0% | 0.0% | 2.3% | 0.0% |
| conventional | 1354 | 99.9% | 0.0% | 0.0% | 0.0% | 0.074% |

## By decimal
| decimal | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| point | 818 | 98.7% | 0.0% | 0.0% | 1.2% | 0.1% |
| comma | 974 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By sep
| sep | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| tab | 180 | 98.3% | 0.0% | 0.0% | 1.7% | 0.0% |
| wide | 1133 | 99.4% | 0.0% | 0.0% | 0.5% | 0.088% |
| single | 479 | 99.8% | 0.0% | 0.0% | 0.2% | 0.0% |

## By order
| order | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| VURF | 476 | 98.7% | 0.0% | 0.0% | 1.3% | 0.0% |
| VFUR | 1030 | 99.5% | 0.0% | 0.0% | 0.4% | 0.097% |
| VFRU | 207 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| FVUR | 79 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By marker
| marker | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| phosphorus-serum | 38 | 92.1% | 0.0% | 0.0% | 7.9% | 0.0% |
| magnesium-serum | 41 | 92.7% | 0.0% | 0.0% | 7.3% | 0.0% |
| hba1c | 46 | 93.5% | 0.0% | 0.0% | 6.5% | 0.0% |
| mchc | 48 | 97.9% | 0.0% | 0.0% | 0.0% | 2.1% |
| vitamin-b12 | 53 | 98.1% | 0.0% | 0.0% | 1.9% | 0.0% |
| total-bilirubin | 56 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| alt | 62 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| alp | 53 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ggt | 48 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| serum-iron | 19 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ferritin | 24 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| transferrin-saturation | 24 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| tsh | 39 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| free-t3 | 44 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| glucose-fasting | 43 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| creatinine-serum | 31 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| egfr | 43 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| uric-acid | 36 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| sodium-serum | 46 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| potassium-serum | 38 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| chloride-serum | 34 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| calcium-total | 33 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| albumin-serum | 31 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hs-crp | 41 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| wbc | 46 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| rbc | 51 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hemoglobin | 58 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mcv | 48 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mch | 42 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| platelet-count | 47 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| vitamin-d-25-oh | 46 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| folate-serum | 49 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| testosterone-total | 50 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ast | 46 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-cholesterol | 34 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ldl-cholesterol | 41 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hdl-cholesterol | 48 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hematocrit | 56 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| triglycerides | 43 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| free-t4 | 36 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| blood-urea-nitrogen | 42 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-protein | 38 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## What went wrong, most common first

**3× wrong | magnesium-serum | point plain | unit mmol/L**
    r5-12v1 [UK plain VURF wide]  Magnesium                            0.86   mmol/L   (0.70 - 0.99)  →  read 10.45 mg/dL [8.51, 12.03]
    r5-13v1 [UK plain VFUR wide]  Magnesium                            0.78   mmol/L   0.70 – 0.99  →  read 18.96 mg/dL [17.01, 24.06]
    r5-22v1 [UK plain VURF tab]  Magnesium	0.78	mmol/L	0.70 - 0.99  →  read 18.96 mg/dL [17.01, 24.06]

**3× wrong | phosphorus-serum | point plain | unit mmol/L**
    r5-12v1 [UK plain VURF wide]  Phosphate                            1.71   mmol/L   (0.81 - 1.45)  →  read 52.97 mg/dL [25.1, 44.91]
    r5-13v1 [UK plain VFUR wide]  Phosphate                            1.55   mmol/L   0.81 – 1.45  →  read 48 mg/dL [25.09, 44.81]
    r5-22v1 [UK plain VURF tab]  Phosphate	1.65	mmol/L	0.81 - 1.45	HIGH  →  read 51.11 mg/dL [25.09, 44.91] H

**2× flag missed | plusminus VFUR**
    r5-10v2 [DE plain VFUR wide]  Glucose                              67   -   mg/dl   [70 - 99]  →  read 67 mg/dL [70, 99]
    r5-12v2 [DE leaders VFUR single]  KREATININ ......................... 38 - µmol/l (53 - 115)  →  read 0.43 mg/dL [0.6, 1.3]

**2× range wrong | ES bracket | two-sided**
    r5-10v3 [ES twocol FVUR single]  Potasio 4,20 mmol/L [3,50 - 5,10]  →  read 4.2 mmol/L [3.5, 5.2]
    r5-16v3 [ES plain FVUR single]  Creatinina 0,9900 mg/dL [0,6000 - 1,3000]  →  read 0.99 mg/dL [0.6, 1]

**2× wrong | hba1c | point plain | unit mmol/mol**
    r5-12v1 [UK plain VURF wide]  HbA1c                                34   mmol/mol   (20 - 38)  →  read 3.31 % [2.03, 3.68]
    r5-23v1 [UK plain VFUR tab]  HbA1c (IFCC)	34	mmol/mol	20-38  →  read 3.11 % [1.83, 3.48]

**1× wrong | vitamin-b12 | point unitspace | unit pmol/L**
    r5-6v2 [UK unitspace VURF single]  Vitamin B12 832 pmol / L 148 - 664 *  →  read 614.02 pg/mL [109.22, 489.98] H

**1× wrong | hba1c | point glue | unit mmol/mol**
    r5-9v1 [UK glue VFUR wide]  HbA1c (IFCC)                         27mmol/mol   20 - 38  →  read 2.67 % [2.03, 3.49]

**1× miss | mchc | "CHEM"**
    r5-10v4 [RO plain VFUR wide]  CHEM                                 29.100   ↓   g/dL   32.000 – 36.000

**1× not on the report | mch | read from "mch"**
    r5-10v4 [RO plain]  mch = 29.1 pg
