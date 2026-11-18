# Lab-report reader stress test

300 generated reports, 4950 rows with a known answer, seed 5. Read in 1.1 s (3.7 ms a report).

| Outcome | Rows | Share | 95% interval |
|---|---|---|---|
| ok | 4946 | 99.9% | 99.79–99.97% |
| unit | 0 | 0.0% | 0.00–0.08% |
| unconverted | 0 | 0.0% | 0.00–0.08% |
| wrong | 0 | 0.0% | 0.00–0.08% |
| miss | 4 | 0.081% | 0.03–0.21% |

- **Critical values:** 60 of 60 caught (100.0%, interval 93.98–100.00%); 0 lost because the row was not read, 0 because it was misread. False critical alarms: 0.
- **Rows that are not on the report:** 0 (of 4946 rows read).
- **Lab's flag:** ok 4945, missed 1.
- **Reference range:** ok 4946.
- **Collection date:** ok 279.
- **Format invariance** (5 printings of each set of results): of 990 markers, read right in every printing 986 (99.6%), right in some printings but not others 4 (0.4%), never right 0. Critical results caught in every printing: 12 of 12.

## By locale
| locale | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| DE | 990 | 99.7% | 0.0% | 0.0% | 0.0% | 0.3% |
| ES | 990 | 99.9% | 0.0% | 0.0% | 0.0% | 0.1% |
| US | 990 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| UK | 990 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| RO | 990 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By kind
| kind | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| lines | 4061 | 99.9% | 0.0% | 0.0% | 0.0% | 0.098% |
| csv | 434 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| fhir | 455 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By variant
| variant | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| twocol | 441 | 99.1% | 0.0% | 0.0% | 0.0% | 0.9% |
| csv:lowhigh | 108 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| fhir:loinc+text | 213 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| plain | 2382 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| csv:comma | 74 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| unitspace | 296 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| glue | 348 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| fhir:loinc-only | 88 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| leaders | 223 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| fhir:text-only | 154 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| csv:semicolon | 252 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| colon | 118 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| wrap | 253 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By units
| units | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| SI | 1246 | 99.8% | 0.0% | 0.0% | 0.0% | 0.2% |
| conventional | 3704 | 99.9% | 0.0% | 0.0% | 0.0% | 0.054% |

## By decimal
| decimal | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| comma | 2341 | 99.8% | 0.0% | 0.0% | 0.0% | 0.2% |
| point | 2609 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By sep
| sep | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| single | 1204 | 99.8% | 0.0% | 0.0% | 0.0% | 0.2% |
| tab | 434 | 99.8% | 0.0% | 0.0% | 0.0% | 0.2% |
| wide | 3312 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By order
| order | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| VURF | 1701 | 99.9% | 0.0% | 0.0% | 0.0% | 0.1% |
| VFUR | 2654 | 99.9% | 0.0% | 0.0% | 0.0% | 0.075% |
| VFRU | 481 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| FVUR | 114 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By marker
| marker | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| vitamin-b12 | 155 | 98.1% | 0.0% | 0.0% | 0.0% | 1.9% |
| ggt | 150 | 99.3% | 0.0% | 0.0% | 0.0% | 0.7% |
| total-bilirubin | 150 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| alt | 175 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| alp | 160 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| serum-iron | 90 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ferritin | 95 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| transferrin-saturation | 100 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| tsh | 140 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| free-t3 | 145 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| glucose-fasting | 95 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hba1c | 105 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| creatinine-serum | 90 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| egfr | 85 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| uric-acid | 90 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| sodium-serum | 105 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| potassium-serum | 95 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| chloride-serum | 90 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| calcium-total | 90 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| magnesium-serum | 95 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| phosphorus-serum | 90 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| albumin-serum | 90 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hs-crp | 105 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| wbc | 130 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| rbc | 120 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hemoglobin | 140 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mcv | 135 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mch | 125 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| platelet-count | 105 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| vitamin-d-25-oh | 155 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| folate-serum | 160 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| testosterone-total | 170 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ast | 135 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-cholesterol | 105 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ldl-cholesterol | 120 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hdl-cholesterol | 130 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hematocrit | 120 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mchc | 125 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| triglycerides | 95 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| free-t4 | 125 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| blood-urea-nitrogen | 80 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-protein | 90 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## What went wrong, most common first

**1× miss | vitamin-b12 | "VITAMIN B12"**
    r5-6v3 [DE twocol VFUR tab]  VITAMIN B12	1128,00	↑	pg/ml	200,00 - 900,00

**1× miss | vitamin-b12 | "Vitamina B12"**
    r5-35v0 [ES twocol VFUR single]  Vitamina B12 696 pg/mL 200 – 900

**1× miss | ggt | "Gamma-GT"**
    r5-55v2 [DE twocol VURF single]  Gamma-GT 4,0 U/l 8,0 - 61,0 L

**1× flag missed | HL VURF**
    r5-55v2 [DE twocol VURF single]  25-OH-Vitamin D 54,9 nmol/l 75,0 - 250,0 L  →  read 22 ng/mL [30, 100]

**1× miss | vitamin-b12 | "Vitamin B12"**
    r5-55v2 [DE twocol VURF single]  Vitamin B12 362,4 pmol/l 148,0 - 664,0
