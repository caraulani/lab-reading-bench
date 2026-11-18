# Lab-report reader stress test

43 generated reports, 453 rows with a known answer, seed 6, only kind=lines. Read in 118.4 s (2753.9 ms a report).

| Outcome | Rows | Share | 95% interval |
|---|---|---|---|
| ok | 453 | 100.0% | 99.16–100.00% |
| unit | 0 | 0.0% | 0.00–0.84% |
| unconverted | 0 | 0.0% | 0.00–0.84% |
| wrong | 0 | 0.0% | 0.00–0.84% |
| miss | 0 | 0.0% | 0.00–0.84% |

- **Critical values:** 5 of 5 caught (100.0%, interval 56.55–100.00%); 0 lost because the row was not read, 0 because it was misread. False critical alarms: 0.
- **Rows that are not on the report:** 0 (of 453 rows read).
- **Lab's flag:** ok 453.
- **Reference range:** ok 453.
- **Collection date:** ok 20.
- **Crashes:** 23.
- **Format invariance** (5 printings of each set of results): of 113 markers, read right in every printing 113 (100.0%), right in some printings but not others 0 (0.0%), never right 0. Critical results caught in every printing: 1 of 1.

## By locale
| locale | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| UK | 113 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| US | 95 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| DE | 62 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ES | 70 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| RO | 113 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By kind
| kind | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| lines | 453 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By variant
| variant | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| unitspace | 33 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| plain | 270 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| glue | 76 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| colon | 37 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| wrap | 26 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| twocol | 11 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By units
| units | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| SI | 131 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| conventional | 322 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By decimal
| decimal | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| point | 267 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| comma | 186 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By sep
| sep | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| single | 172 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| wide | 245 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| tab | 36 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By order
| order | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| VURF | 147 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| VFUR | 280 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| VFRU | 26 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By marker
| marker | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| glucose-fasting | 12 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hba1c | 12 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| creatinine-serum | 12 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| blood-urea-nitrogen | 12 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| egfr | 9 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| uric-acid | 12 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| sodium-serum | 12 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| potassium-serum | 12 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| chloride-serum | 12 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| calcium-total | 12 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| magnesium-serum | 5 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| phosphorus-serum | 9 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-protein | 9 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| albumin-serum | 12 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hs-crp | 8 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-bilirubin | 8 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| alt | 5 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ast | 8 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| alp | 8 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ggt | 8 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| wbc | 12 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| rbc | 8 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hemoglobin | 13 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hematocrit | 14 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mcv | 17 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mch | 12 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mchc | 13 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| platelet-count | 14 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| tsh | 15 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| free-t4 | 15 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| vitamin-d-25-oh | 15 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| vitamin-b12 | 11 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| folate-serum | 15 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-cholesterol | 8 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ldl-cholesterol | 11 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hdl-cholesterol | 11 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| free-t3 | 10 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| testosterone-total | 10 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| serum-iron | 12 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| transferrin-saturation | 7 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| triglycerides | 5 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ferritin | 8 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## What went wrong, most common first

**23× crash | budget reached**
    r6-4v4
    r6-5v0
    r6-5v1
