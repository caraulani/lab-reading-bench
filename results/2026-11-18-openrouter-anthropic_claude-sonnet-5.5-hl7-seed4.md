# Lab-report reader stress test

80 generated reports, 971 rows with a known answer, seed 4. Read in 69.3 s (866.2 ms a report).

| Outcome | Rows | Share | 95% interval |
|---|---|---|---|
| ok | 971 | 100.0% | 99.61–100.00% |
| unit | 0 | 0.0% | 0.00–0.39% |
| unconverted | 0 | 0.0% | 0.00–0.39% |
| wrong | 0 | 0.0% | 0.00–0.39% |
| miss | 0 | 0.0% | 0.00–0.39% |

- **Critical values:** 15 of 15 caught (100.0%, interval 79.61–100.00%); 0 lost because the row was not read, 0 because it was misread. False critical alarms: 0.
- **Rows that are not on the report:** 0 (of 971 rows read).
- **Lab's flag:** ok 971.
- **Reference range:** ok 971.
- **Collection date:** ok 46.
- **Crashes:** 34.

## By locale
| locale | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| US | 360 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| RO | 210 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| UK | 152 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ES | 167 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| DE | 82 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By kind
| kind | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| hl7 | 971 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By variant
| variant | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| hl7:local | 488 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hl7:loinc | 483 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By units
| units | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| conventional | 798 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| SI | 173 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By decimal
| decimal | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| point | 644 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| comma | 327 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By sep
| sep | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| tab | 41 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| single | 298 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| wide | 632 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By order
| order | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| VFRU | 263 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| VFUR | 328 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| VURF | 325 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| FVUR | 55 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By marker
| marker | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| glucose-fasting | 27 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| creatinine-serum | 24 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| blood-urea-nitrogen | 26 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| egfr | 25 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| uric-acid | 28 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| potassium-serum | 27 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| chloride-serum | 29 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| magnesium-serum | 27 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| phosphorus-serum | 30 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-protein | 27 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| albumin-serum | 29 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hs-crp | 24 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| tsh | 25 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| free-t4 | 24 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| free-t3 | 24 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| vitamin-b12 | 20 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| folate-serum | 21 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| testosterone-total | 20 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| sodium-serum | 27 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| calcium-total | 23 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-bilirubin | 21 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| alt | 21 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ast | 19 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| alp | 23 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-cholesterol | 23 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ldl-cholesterol | 23 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hdl-cholesterol | 21 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| triglycerides | 20 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| vitamin-d-25-oh | 20 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hba1c | 27 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| wbc | 21 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| rbc | 16 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hemoglobin | 21 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hematocrit | 23 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mcv | 16 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mch | 22 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mchc | 16 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| platelet-count | 18 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| serum-iron | 26 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ferritin | 21 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| transferrin-saturation | 25 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ggt | 21 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## What went wrong, most common first

**34× crash | budget reached**
    r4-46h
    r4-47h
    r4-48h
