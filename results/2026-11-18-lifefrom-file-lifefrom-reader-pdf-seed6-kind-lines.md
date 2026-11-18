# Lab-report reader stress test

43 generated reports, 820 rows with a known answer, seed 6, only kind=lines. Read in 0.7 s (16.4 ms a report).

| Outcome | Rows | Share | 95% interval |
|---|---|---|---|
| ok | 820 | 100.0% | 99.53–100.00% |
| unit | 0 | 0.0% | 0.00–0.47% |
| unconverted | 0 | 0.0% | 0.00–0.47% |
| wrong | 0 | 0.0% | 0.00–0.47% |
| miss | 0 | 0.0% | 0.00–0.47% |

- **Critical values:** 9 of 9 caught (100.0%, interval 70.08–100.00%); 0 lost because the row was not read, 0 because it was misread. False critical alarms: 0.
- **Rows that are not on the report:** 0 (of 820 rows read).
- **Lab's flag:** ok 820.
- **Reference range:** ok 820.
- **Collection date:** ok 43.
- **Format invariance** (5 printings of each set of results): of 193 markers, read right in every printing 193 (100.0%), right in some printings but not others 0 (0.0%), never right 0. Critical results caught in every printing: 2 of 2.

## By locale
| locale | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| UK | 193 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| US | 175 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| DE | 120 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ES | 156 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| RO | 176 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By kind
| kind | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| lines | 820 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By variant
| variant | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| unitspace | 33 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| plain | 508 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| glue | 76 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| colon | 85 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| wrap | 58 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| twocol | 60 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By units
| units | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| SI | 230 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| conventional | 590 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By decimal
| decimal | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| point | 458 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| comma | 362 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By sep
| sep | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| single | 210 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| wide | 545 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| tab | 65 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By order
| order | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| VURF | 215 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| VFUR | 481 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| VFRU | 87 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| FVUR | 37 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By marker
| marker | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| glucose-fasting | 25 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hba1c | 21 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| creatinine-serum | 20 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| blood-urea-nitrogen | 25 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| egfr | 18 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| uric-acid | 20 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| sodium-serum | 25 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| potassium-serum | 25 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| chloride-serum | 25 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| calcium-total | 25 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| magnesium-serum | 14 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| phosphorus-serum | 22 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-protein | 22 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| albumin-serum | 20 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hs-crp | 21 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-bilirubin | 8 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| alt | 14 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ast | 17 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| alp | 8 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ggt | 17 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| wbc | 17 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| rbc | 13 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hemoglobin | 18 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hematocrit | 14 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mcv | 18 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mch | 17 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mchc | 18 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| platelet-count | 18 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| tsh | 29 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| free-t4 | 34 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| vitamin-d-25-oh | 16 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| vitamin-b12 | 12 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| folate-serum | 16 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-cholesterol | 26 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ldl-cholesterol | 25 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hdl-cholesterol | 26 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| free-t3 | 29 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| testosterone-total | 11 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| serum-iron | 22 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| transferrin-saturation | 17 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| triglycerides | 14 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ferritin | 18 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## What went wrong, most common first
