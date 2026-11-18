# Lab-report reader stress test

43 generated reports, 820 rows with a known answer, seed 6, only kind=lines. Read in 0.0 s (0.2 ms a report).

| Outcome | Rows | Share | 95% interval |
|---|---|---|---|
| ok | 819 | 99.9% | 99.31–99.98% |
| unit | 0 | 0.0% | 0.00–0.47% |
| unconverted | 0 | 0.0% | 0.00–0.47% |
| wrong | 1 | 0.1% | 0.02–0.69% |
| miss | 0 | 0.0% | 0.00–0.47% |

- **Critical values:** 9 of 9 caught (100.0%, interval 70.08–100.00%); 0 lost because the row was not read, 0 because it was misread. False critical alarms: 0.
- **Rows that are not on the report:** 0 (of 820 rows read).
- **Lab's flag:** ok 819.
- **Reference range:** ok 819.
- **Collection date:** ok 43.
- **Wrong values printed in a unit that needs converting:** 1 of 1 (100.0%).
- **Format invariance** (5 printings of each set of results): of 193 markers, read right in every printing 192 (99.5%), right in some printings but not others 1 (0.5%), never right 0. Critical results caught in every printing: 2 of 2.

## By locale
| locale | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| UK | 193 | 99.5% | 0.0% | 0.0% | 0.5% | 0.0% |
| US | 175 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| DE | 120 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ES | 156 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| RO | 176 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By kind
| kind | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| lines | 820 | 99.9% | 0.0% | 0.0% | 0.1% | 0.0% |

## By variant
| variant | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| glue | 76 | 98.7% | 0.0% | 0.0% | 1.3% | 0.0% |
| unitspace | 33 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| plain | 508 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| colon | 85 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| wrap | 58 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| twocol | 60 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By units
| units | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| SI | 230 | 99.6% | 0.0% | 0.0% | 0.4% | 0.0% |
| conventional | 590 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By decimal
| decimal | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| point | 458 | 99.8% | 0.0% | 0.0% | 0.2% | 0.0% |
| comma | 362 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By sep
| sep | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| wide | 545 | 99.8% | 0.0% | 0.0% | 0.2% | 0.0% |
| single | 210 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| tab | 65 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By order
| order | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| VFUR | 481 | 99.8% | 0.0% | 0.0% | 0.2% | 0.0% |
| VURF | 215 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| VFRU | 87 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| FVUR | 37 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By marker
| marker | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| vitamin-b12 | 12 | 91.7% | 0.0% | 0.0% | 8.3% | 0.0% |
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

**1× wrong | vitamin-b12 | point glue | unit pmol/L**
    r6-1v2 [UK glue VFUR wide]  Vitamin B12                          628pmol/L   148-664  →  read 628 pg/mL [148, 664]
