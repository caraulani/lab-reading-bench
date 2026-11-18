# Lab-report reader stress test

97 generated reports, 1792 rows with a known answer, seed 5, only kind=lines. Read in 0.9 s (9.5 ms a report).

| Outcome | Rows | Share | 95% interval |
|---|---|---|---|
| ok | 1791 | 99.9% | 99.68–99.99% |
| unit | 0 | 0.0% | 0.00–0.21% |
| unconverted | 0 | 0.0% | 0.00–0.21% |
| wrong | 0 | 0.0% | 0.00–0.21% |
| miss | 1 | 0.056% | 0.01–0.32% |

- **Critical values:** 31 of 31 caught (100.0%, interval 88.97–100.00%); 0 lost because the row was not read, 0 because it was misread. False critical alarms: 0.
- **Rows that are not on the report:** 0 (of 1791 rows read).
- **Lab's flag:** ok 1791.
- **Reference range:** ok 1791.
- **Collection date:** ok 97.
- **Format invariance** (5 printings of each set of results): of 438 markers, read right in every printing 437 (99.8%), right in some printings but not others 1 (0.2%), never right 0. Critical results caught in every printing: 8 of 8.

## By locale
| locale | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| DE | 380 | 99.7% | 0.0% | 0.0% | 0.0% | 0.3% |
| US | 392 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| RO | 338 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
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
| tab | 180 | 99.4% | 0.0% | 0.0% | 0.0% | 0.6% |
| wide | 1133 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| single | 479 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By order
| order | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| VFUR | 1030 | 99.9% | 0.0% | 0.0% | 0.0% | 0.097% |
| VFRU | 207 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| VURF | 476 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| FVUR | 79 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By marker
| marker | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| vitamin-b12 | 53 | 98.1% | 0.0% | 0.0% | 0.0% | 1.9% |
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
| folate-serum | 49 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| testosterone-total | 50 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ast | 46 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-cholesterol | 34 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ldl-cholesterol | 41 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hdl-cholesterol | 48 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hematocrit | 56 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mchc | 48 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| triglycerides | 43 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| free-t4 | 36 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| blood-urea-nitrogen | 42 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-protein | 38 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## What went wrong, most common first

**1× miss | vitamin-b12 | "VITAMIN B12"**
    r5-6v3 [DE twocol VFUR tab]  VITAMIN B12	1128,00	↑	pg/ml	200,00 - 900,00
