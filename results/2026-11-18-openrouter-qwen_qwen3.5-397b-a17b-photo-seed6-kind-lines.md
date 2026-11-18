# Lab-report reader stress test

43 generated reports, 304 rows with a known answer, seed 6, only kind=lines. Read in 0.0 s (0.1 ms a report).

| Outcome | Rows | Share | 95% interval |
|---|---|---|---|
| ok | 304 | 100.0% | 98.75–100.00% |
| unit | 0 | 0.0% | 0.00–1.25% |
| unconverted | 0 | 0.0% | 0.00–1.25% |
| wrong | 0 | 0.0% | 0.00–1.25% |
| miss | 0 | 0.0% | 0.00–1.25% |

- **Critical values:** 4 of 4 caught (100.0%, interval 51.01–100.00%); 0 lost because the row was not read, 0 because it was misread. False critical alarms: 0.
- **Rows that are not on the report:** 0 (of 304 rows read).
- **Lab's flag:** ok 304.
- **Reference range:** ok 304.
- **Collection date:** ok 13.
- **Crashes:** 30.
- **Format invariance** (5 printings of each set of results): of 95 markers, read right in every printing 95 (100.0%), right in some printings but not others 0 (0.0%), never right 0. Critical results caught in every printing: 1 of 1.

## By locale
| locale | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| US | 95 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| DE | 44 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ES | 70 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| RO | 84 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| UK | 11 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By kind
| kind | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| lines | 304 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By variant
| variant | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| plain | 197 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| glue | 33 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| colon | 37 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| wrap | 26 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| twocol | 11 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By units
| units | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| conventional | 293 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| SI | 11 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By decimal
| decimal | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| point | 165 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| comma | 139 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By sep
| sep | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| single | 139 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| wide | 129 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| tab | 36 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By order
| order | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| VFUR | 190 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| VURF | 88 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| VFRU | 26 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By marker
| marker | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| glucose-fasting | 9 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hba1c | 9 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| creatinine-serum | 9 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| blood-urea-nitrogen | 9 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| egfr | 7 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| uric-acid | 9 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| sodium-serum | 9 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| potassium-serum | 9 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| chloride-serum | 9 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| calcium-total | 9 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| magnesium-serum | 4 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| phosphorus-serum | 7 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-protein | 7 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| albumin-serum | 9 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hs-crp | 6 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-bilirubin | 6 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| alt | 4 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ast | 6 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| alp | 6 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ggt | 6 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| wbc | 7 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| rbc | 4 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hemoglobin | 8 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hematocrit | 11 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mcv | 11 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mch | 7 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mchc | 8 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| platelet-count | 11 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| tsh | 9 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| free-t4 | 9 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| vitamin-d-25-oh | 9 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| vitamin-b12 | 6 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| folate-serum | 9 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-cholesterol | 6 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ldl-cholesterol | 6 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hdl-cholesterol | 6 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| free-t3 | 5 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| testosterone-total | 5 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| serum-iron | 7 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| transferrin-saturation | 3 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| triglycerides | 4 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ferritin | 4 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## What went wrong, most common first

**30× crash | not in the cache (offline)**
    r6-0v0
    r6-1v2
    r6-2v2
