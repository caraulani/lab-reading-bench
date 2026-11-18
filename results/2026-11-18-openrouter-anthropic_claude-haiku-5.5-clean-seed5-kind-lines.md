# Lab-report reader stress test

97 generated reports, 1792 rows with a known answer, seed 5, only kind=lines. Read in 0.0 s (0.1 ms a report).

| Outcome | Rows | Share | 95% interval |
|---|---|---|---|
| ok | 1791 | 99.9% | 99.68–99.99% |
| unit | 0 | 0.0% | 0.00–0.21% |
| unconverted | 0 | 0.0% | 0.00–0.21% |
| wrong | 0 | 0.0% | 0.00–0.21% |
| miss | 1 | 0.056% | 0.01–0.32% |

- **Critical values:** 31 of 31 caught (100.0%, interval 88.97–100.00%); 0 lost because the row was not read, 0 because it was misread. False critical alarms: 0.
- **Rows that are not on the report:** 0 (of 1791 rows read).
- **Lab's flag:** ok 1780, missed 10, invented 1.
- **Reference range:** ok 1790, wrong 1.
- **Collection date:** ok 97.
- **Format invariance** (5 printings of each set of results): of 438 markers, read right in every printing 437 (99.8%), right in some printings but not others 1 (0.2%), never right 0. Critical results caught in every printing: 8 of 8.

## By locale
| locale | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| RO | 338 | 99.7% | 0.0% | 0.0% | 0.0% | 0.3% |
| US | 392 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| DE | 380 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| UK | 312 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ES | 370 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By kind
| kind | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| lines | 1792 | 99.9% | 0.0% | 0.0% | 0.0% | 0.056% |

## By variant
| variant | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| twocol | 191 | 99.5% | 0.0% | 0.0% | 0.0% | 0.5% |
| plain | 1131 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| unitspace | 176 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| glue | 117 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| leaders | 88 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| colon | 34 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| wrap | 55 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By units
| units | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| conventional | 1354 | 99.9% | 0.0% | 0.0% | 0.0% | 0.074% |
| SI | 438 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By decimal
| decimal | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| comma | 974 | 99.9% | 0.0% | 0.0% | 0.0% | 0.1% |
| point | 818 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By sep
| sep | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| wide | 1133 | 99.9% | 0.0% | 0.0% | 0.0% | 0.088% |
| tab | 180 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| single | 479 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By order
| order | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| VURF | 476 | 99.8% | 0.0% | 0.0% | 0.0% | 0.2% |
| VFRU | 207 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| VFUR | 1030 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| FVUR | 79 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By marker
| marker | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| mchc | 48 | 97.9% | 0.0% | 0.0% | 0.0% | 2.1% |
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
| hba1c | 46 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| creatinine-serum | 31 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| egfr | 43 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| uric-acid | 36 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| sodium-serum | 46 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| potassium-serum | 38 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| chloride-serum | 34 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| calcium-total | 33 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| magnesium-serum | 41 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| phosphorus-serum | 38 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| albumin-serum | 31 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hs-crp | 41 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| wbc | 46 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| rbc | 51 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hemoglobin | 58 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mcv | 48 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mch | 42 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| platelet-count | 47 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| vitamin-d-25-oh | 46 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| vitamin-b12 | 53 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
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

**7× flag missed | plusminus VFUR**
    r5-2v3 [DE plain VFUR wide]  GGT                                  6   -   U/l   (8 - 61)  →  read 6 U/L [8, 61]
    r5-9v2 [DE plain VFUR wide]  Natrium                              133   -   mmol/l   135 - 145  →  read 133 mmol/L [135, 145]
    r5-9v2 [DE plain VFUR wide]  Kalium                               2,8   -   mmol/l   3,5 - 5,1  →  read 2.8 mmol/L [3.5, 5.1]

**3× flag missed | plusminus VURF**
    r5-4v3 [DE plain VURF wide]  ALT (GPT)                            4,00   U/l   (7,00 - 56,00)   -  →  read 4 U/L [7, 56]
    r5-4v3 [DE plain VURF wide]  Leukozyten                           2,400   Tsd/µl   (4,000 - 11,000)   -  →  read 2.4 Thousand/uL [4, 11]
    r5-4v3 [DE plain VURF wide]  Hämatokrit                           23,800   %   (36,000 - 50,000)   -  →  read 23.8 % [36, 50]

**1× miss | mchc | "CHEM"**
    r5-4v0 [RO twocol VURF wide]  CHEM                                 35,0   g/dl   [32,0 - 36,0]

**1× flag invented | arrows VFUR**
    r5-7v2 [DE plain VFUR wide]  Hämatokrit                           0,49   L/l   0,36-0,50  →  read 49 % [36, 50] L

**1× range wrong | DE paren | upper only**
    r5-12v2 [DE leaders VFUR single]  LDL-CHOLESTERIN ................... 1,2 mmol/l bis 2,6  →  read 46.4 mg/dL [46.4, 100.5]
