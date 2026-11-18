# Lab-report reader stress test

97 generated reports, 1493 rows with a known answer, seed 5, only kind=lines. Read in 371.3 s (3828.1 ms a report).

| Outcome | Rows | Share | 95% interval |
|---|---|---|---|
| ok | 1493 | 100.0% | 99.74–100.00% |
| unit | 0 | 0.0% | 0.00–0.26% |
| unconverted | 0 | 0.0% | 0.00–0.26% |
| wrong | 0 | 0.0% | 0.00–0.26% |
| miss | 0 | 0.0% | 0.00–0.26% |

- **Critical values:** 25 of 25 caught (100.0%, interval 86.68–100.00%); 0 lost because the row was not read, 0 because it was misread. False critical alarms: 0.
- **Rows that are not on the report:** 0 (of 1493 rows read).
- **Lab's flag:** ok 1493.
- **Reference range:** ok 1493.
- **Collection date:** ok 84.
- **Crashes:** 13.
- **Format invariance** (5 printings of each set of results): of 362 markers, read right in every printing 362 (100.0%), right in some printings but not others 0 (0.0%), never right 0. Critical results caught in every printing: 6 of 6.

## By locale
| locale | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| US | 316 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| DE | 344 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| RO | 303 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| UK | 236 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ES | 294 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By kind
| kind | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| lines | 1493 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By variant
| variant | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| twocol | 163 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| plain | 964 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| unitspace | 100 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| glue | 89 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| leaders | 88 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| colon | 34 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| wrap | 55 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By units
| units | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| conventional | 1131 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| SI | 362 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By decimal
| decimal | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| point | 638 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| comma | 855 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By sep
| sep | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| wide | 973 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| tab | 105 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| single | 415 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By order
| order | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| VFRU | 199 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| VURF | 405 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
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
| tsh | 35 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| free-t3 | 31 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
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
| rbc | 39 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hemoglobin | 49 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mcv | 36 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mch | 35 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| platelet-count | 40 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| vitamin-d-25-oh | 43 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| vitamin-b12 | 50 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| folate-serum | 46 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| testosterone-total | 47 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ast | 43 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-cholesterol | 25 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ldl-cholesterol | 32 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hdl-cholesterol | 39 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hematocrit | 44 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mchc | 36 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| triglycerides | 34 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| free-t4 | 27 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| blood-urea-nitrogen | 34 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-protein | 30 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## What went wrong, most common first

**13× crash | budget reached**
    r5-20v4
    r5-21v0
    r5-21v1
