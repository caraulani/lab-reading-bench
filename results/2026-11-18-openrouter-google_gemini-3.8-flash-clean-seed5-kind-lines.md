# Lab-report reader stress test

97 generated reports, 1516 rows with a known answer, seed 5, only kind=lines. Read in 375.1 s (3866.7 ms a report).

| Outcome | Rows | Share | 95% interval |
|---|---|---|---|
| ok | 1516 | 100.0% | 99.75–100.00% |
| unit | 0 | 0.0% | 0.00–0.25% |
| unconverted | 0 | 0.0% | 0.00–0.25% |
| wrong | 0 | 0.0% | 0.00–0.25% |
| miss | 0 | 0.0% | 0.00–0.25% |

- **Critical values:** 25 of 25 caught (100.0%, interval 86.68–100.00%); 0 lost because the row was not read, 0 because it was misread. False critical alarms: 0.
- **Rows that are not on the report:** 0 (of 1516 rows read).
- **Lab's flag:** ok 1516.
- **Reference range:** ok 1516.
- **Collection date:** ok 87.
- **Crashes:** 10.
- **Format invariance** (5 printings of each set of results): of 370 markers, read right in every printing 370 (100.0%), right in some printings but not others 0 (0.0%), never right 0. Critical results caught in every printing: 6 of 6.

## By locale
| locale | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| US | 324 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| DE | 344 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| RO | 310 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| UK | 244 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ES | 294 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By kind
| kind | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| lines | 1516 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By variant
| variant | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| twocol | 163 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| plain | 979 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| unitspace | 108 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| glue | 89 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| leaders | 88 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| colon | 34 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| wrap | 55 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By units
| units | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| conventional | 1146 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| SI | 370 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By decimal
| decimal | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| point | 654 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| comma | 862 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By sep
| sep | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| wide | 989 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| tab | 112 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| single | 415 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By order
| order | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| VFRU | 207 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| VURF | 420 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| VFUR | 810 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| FVUR | 79 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By marker
| marker | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| total-bilirubin | 48 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| alt | 54 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| alp | 45 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ggt | 40 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| serum-iron | 16 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ferritin | 21 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| transferrin-saturation | 21 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| tsh | 36 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| free-t3 | 34 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| glucose-fasting | 35 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hba1c | 38 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| creatinine-serum | 23 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| egfr | 35 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| uric-acid | 28 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| sodium-serum | 38 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| potassium-serum | 35 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| chloride-serum | 29 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| calcium-total | 25 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| magnesium-serum | 33 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| phosphorus-serum | 30 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| albumin-serum | 28 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hs-crp | 38 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| wbc | 38 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| rbc | 41 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hemoglobin | 51 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mcv | 38 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mch | 37 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| platelet-count | 42 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| vitamin-d-25-oh | 43 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| vitamin-b12 | 50 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| folate-serum | 46 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| testosterone-total | 47 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ast | 43 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-cholesterol | 26 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ldl-cholesterol | 33 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hdl-cholesterol | 40 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hematocrit | 46 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mchc | 38 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| triglycerides | 35 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| free-t4 | 28 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| blood-urea-nitrogen | 34 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-protein | 30 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## What went wrong, most common first

**10× crash | budget reached**
    r5-21v2
    r5-21v3
    r5-22v0
