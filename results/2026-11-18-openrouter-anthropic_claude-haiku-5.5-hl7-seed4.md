# Lab-report reader stress test

80 generated reports, 1370 rows with a known answer, seed 4. Read in 113.5 s (1418.2 ms a report).

| Outcome | Rows | Share | 95% interval |
|---|---|---|---|
| ok | 1370 | 100.0% | 99.72–100.00% |
| unit | 0 | 0.0% | 0.00–0.28% |
| unconverted | 0 | 0.0% | 0.00–0.28% |
| wrong | 0 | 0.0% | 0.00–0.28% |
| miss | 0 | 0.0% | 0.00–0.28% |

- **Critical values:** 15 of 15 caught (100.0%, interval 79.61–100.00%); 0 lost because the row was not read, 0 because it was misread. False critical alarms: 0.
- **Rows that are not on the report:** 0 (of 1370 rows read).
- **Lab's flag:** ok 1370.
- **Reference range:** ok 1370.
- **Collection date:** ok 67.
- **Crashes:** 13.

## By locale
| locale | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| US | 570 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| RO | 247 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| UK | 152 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ES | 274 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| DE | 127 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By kind
| kind | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| hl7 | 1370 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By variant
| variant | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| hl7:local | 613 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hl7:loinc | 757 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By units
| units | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| conventional | 1197 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| SI | 173 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By decimal
| decimal | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| point | 885 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| comma | 485 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By sep
| sep | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| tab | 41 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| single | 371 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| wide | 958 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By order
| order | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| VFRU | 389 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| VFUR | 504 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| VURF | 418 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| FVUR | 59 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By marker
| marker | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| glucose-fasting | 35 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| creatinine-serum | 32 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| blood-urea-nitrogen | 33 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| egfr | 31 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| uric-acid | 36 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| potassium-serum | 34 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| chloride-serum | 36 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| magnesium-serum | 35 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| phosphorus-serum | 37 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-protein | 35 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| albumin-serum | 37 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hs-crp | 32 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| tsh | 34 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| free-t4 | 36 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| free-t3 | 31 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| vitamin-b12 | 33 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| folate-serum | 32 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| testosterone-total | 33 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| sodium-serum | 36 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| calcium-total | 31 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-bilirubin | 32 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| alt | 30 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ast | 29 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| alp | 35 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-cholesterol | 33 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ldl-cholesterol | 32 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hdl-cholesterol | 31 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| triglycerides | 31 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| vitamin-d-25-oh | 30 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hba1c | 35 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| wbc | 33 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| rbc | 27 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hemoglobin | 32 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hematocrit | 36 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mcv | 28 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mch | 32 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mchc | 27 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| platelet-count | 29 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| serum-iron | 35 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ferritin | 30 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| transferrin-saturation | 31 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ggt | 33 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## What went wrong, most common first

**13× crash | http 402: This request would exceed your available credits given your current in**
    r4-59h
    r4-60h
    r4-64h
