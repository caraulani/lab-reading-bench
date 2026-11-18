# Lab-report reader stress test

97 generated reports, 1792 rows with a known answer, seed 5, only kind=lines. Read in 0.0 s (0.1 ms a report).

| Outcome | Rows | Share | 95% interval |
|---|---|---|---|
| ok | 1785 | 99.6% | 99.20–99.81% |
| unit | 0 | 0.0% | 0.00–0.21% |
| unconverted | 0 | 0.0% | 0.00–0.21% |
| wrong | 6 | 0.3% | 0.15–0.73% |
| miss | 1 | 0.056% | 0.01–0.32% |

- **Critical values:** 31 of 31 caught (100.0%, interval 88.97–100.00%); 0 lost because the row was not read, 0 because it was misread. False critical alarms: 0.
- **Rows that are not on the report:** 1 (of 1792 rows read).
- **Lab's flag:** ok 1783, missed 2.
- **Reference range:** ok 1779, wrong 6.
- **Collection date:** ok 97.
- **Wrong values printed in a unit that needs converting:** 4 of 6 (66.7%).
- **Format invariance** (5 printings of each set of results): of 438 markers, read right in every printing 431 (98.4%), right in some printings but not others 7 (1.6%), never right 0. Critical results caught in every printing: 8 of 8.

## By locale
| locale | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| UK | 312 | 98.7% | 0.0% | 0.0% | 1.3% | 0.0% |
| ES | 370 | 99.5% | 0.0% | 0.0% | 0.3% | 0.3% |
| DE | 380 | 99.7% | 0.0% | 0.0% | 0.3% | 0.0% |
| US | 392 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| RO | 338 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By kind
| kind | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| lines | 1792 | 99.6% | 0.0% | 0.0% | 0.3% | 0.056% |

## By variant
| variant | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| plain | 1131 | 99.5% | 0.0% | 0.0% | 0.5% | 0.0% |
| twocol | 191 | 99.5% | 0.0% | 0.0% | 0.0% | 0.5% |
| unitspace | 176 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| glue | 117 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| leaders | 88 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| colon | 34 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| wrap | 55 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By units
| units | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| SI | 438 | 98.9% | 0.0% | 0.0% | 1.1% | 0.0% |
| conventional | 1354 | 99.9% | 0.0% | 0.0% | 0.074% | 0.074% |

## By decimal
| decimal | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| point | 818 | 99.5% | 0.0% | 0.0% | 0.5% | 0.0% |
| comma | 974 | 99.7% | 0.0% | 0.0% | 0.2% | 0.1% |

## By sep
| sep | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| single | 479 | 99.4% | 0.0% | 0.0% | 0.4% | 0.2% |
| wide | 1133 | 99.6% | 0.0% | 0.0% | 0.4% | 0.0% |
| tab | 180 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By order
| order | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| FVUR | 79 | 98.7% | 0.0% | 0.0% | 0.0% | 1.3% |
| VURF | 476 | 99.4% | 0.0% | 0.0% | 0.6% | 0.0% |
| VFUR | 1030 | 99.7% | 0.0% | 0.0% | 0.3% | 0.0% |
| VFRU | 207 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By marker
| marker | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| free-t4 | 36 | 97.2% | 0.0% | 0.0% | 2.8% | 0.0% |
| phosphorus-serum | 38 | 97.4% | 0.0% | 0.0% | 2.6% | 0.0% |
| total-protein | 38 | 97.4% | 0.0% | 0.0% | 0.0% | 2.6% |
| magnesium-serum | 41 | 97.6% | 0.0% | 0.0% | 2.4% | 0.0% |
| free-t3 | 44 | 97.7% | 0.0% | 0.0% | 2.3% | 0.0% |
| ast | 46 | 97.8% | 0.0% | 0.0% | 2.2% | 0.0% |
| vitamin-b12 | 53 | 98.1% | 0.0% | 0.0% | 1.9% | 0.0% |
| total-bilirubin | 56 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| alt | 62 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| alp | 53 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ggt | 48 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| serum-iron | 19 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ferritin | 24 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| transferrin-saturation | 24 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| tsh | 39 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| glucose-fasting | 43 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hba1c | 46 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
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
| total-cholesterol | 34 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ldl-cholesterol | 41 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hdl-cholesterol | 48 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hematocrit | 56 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mchc | 48 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| triglycerides | 43 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| blood-urea-nitrogen | 42 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## What went wrong, most common first

**2× range wrong | DE spaced | two-sided**
    r5-18v3 [DE unitspace VFUR single]  ALT (GPT) 5 * U / l 7 - 56  →  read 5 U/L [17, 56] L
    r5-18v3 [DE unitspace VFUR single]  GGT 42 U / l 8 - 61  →  read 42 U/L [18, 61]

**1× range wrong | DE bracket | two-sided**
    r5-0v2 [DE twocol VURF tab]  Eisen	24,0	µmol/l	[9,0 - 30,4]  →  read 134.04 mcg/dL [106.12, 169.78]

**1× flag missed | arrows VFUR**
    r5-6v0 [RO glue VFUR wide]  Vitamina B12                         1128   ↑   pg/mL   200 – 900  →  read 1128 pg/mL [200, 900]

**1× wrong | free-t3 | comma plain | unit pmol/l**
    r5-7v2 [DE plain VFUR wide]  fT3                                  3,7   pmol/l   3,5-6,5  →  read 5.68 pg/mL [5.38, 9.98]

**1× flag missed | plusminus VFUR**
    r5-10v2 [DE plain VFUR wide]  Natrium                              149   +   mmol/l   [135 - 145]  →  read 149 mmol/L [135, 145]

**1× miss | total-protein | "Proteínas totales"**
    r5-10v3 [ES twocol FVUR single]  Proteínas totales 7,10 g/dL [6,00 - 8,30]

**1× wrong | vitamin-b12 | point plain | unit pmol/L**
    r5-11v2 [UK plain VURF single]  VITAMIN B12 94 pmol/L 148 – 664  →  read 69.33 pg/mL [109.16, 489.45]

**1× range wrong | UK paren | upper only**
    r5-12v1 [UK plain VURF wide]  Triglycerides                        2.29   mmol/L   <1.69  →  read 202.1 mg/dL [, 65.4]

**1× range wrong | UK dash | two-sided**
    r5-13v1 [UK plain VFUR wide]  Urate                                291   µmol/L   149 – 416  →  read 4.89 mg/dL [2.51, 7.41]

**1× wrong | magnesium-serum | point plain | unit mmol/L**
    r5-13v1 [UK plain VFUR wide]  Magnesium                            0.78   mmol/L   0.70 – 0.99  →  read 18.96 mg/dL [17.02, 24.06]

**1× wrong | phosphorus-serum | point plain | unit mmol/L**
    r5-13v1 [UK plain VFUR wide]  Phosphate                            1.55   mmol/L   0.81 – 1.45  →  read 48.01 mg/dL [25.09, 44.91]

**1× range wrong | UK paren | two-sided**
    r5-17v1 [UK plain VURF wide]  ALANINE AMINOTRANSFERASE             25   U/L   (7 - 56)  →  read 25 U/L [17, 56]

**1× wrong | ast | point plain | unit U/L**
    r5-17v1 [UK plain VURF wide]  AST                                  8   U/L   (10 - 40)   *  →  read 87 U/L [10, 40] H

**1× wrong | free-t4 | comma plain | unit ng/dL**
    r5-18v4 [ES plain VURF single]  T4 LIBRE 1,060 ng/dL 0,800 - 1,800  →  read 1.05 ng/dL [0.8, 1.8]

**1× not on the report | chloride-serum | read from "chloride-serum"**
    r5-23v3 [ES unitspace]  chloride-serum = 8.9 mmol/L
