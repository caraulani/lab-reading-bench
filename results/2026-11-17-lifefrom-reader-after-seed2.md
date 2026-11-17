# Lab-report reader stress test

5000 generated reports, 98442 rows with a known answer, seed 2. Read in 14.0 s (2.8 ms a report).

| Outcome | Rows | Share | 95% interval |
|---|---|---|---|
| ok | 98408 | 100.0% | 99.95–99.98% |
| unit | 0 | 0.0% | 0.00–0.00% |
| unconverted | 0 | 0.0% | 0.00–0.00% |
| wrong | 0 | 0.0% | 0.00–0.00% |
| miss | 34 | 0.035% | 0.02–0.05% |

- **Critical values:** 1151 of 1151 caught (100.0%, interval 99.67–100.00%); 0 lost because the row was not read, 0 because it was misread. False critical alarms: 0.
- **Rows that are not on the report:** 6 (of 98414 rows read).
- **Lab's flag:** ok 98405, wrong 1, missed 2.
- **Reference range:** ok 98408.
- **Collection date:** ok 4570.

## By locale
| locale | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| ES | 16463 | 99.9% | 0.0% | 0.0% | 0.0% | 0.061% |
| DE | 15580 | 99.9% | 0.0% | 0.0% | 0.0% | 0.051% |
| UK | 15399 | 100.0% | 0.0% | 0.0% | 0.0% | 0.032% |
| RO | 16960 | 100.0% | 0.0% | 0.0% | 0.0% | 0.029% |
| US | 34040 | 100.0% | 0.0% | 0.0% | 0.0% | 0.018% |

## By kind
| kind | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| lines | 76402 | 100.0% | 0.0% | 0.0% | 0.0% | 0.045% |
| csv | 10604 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| fhir | 11436 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By variant
| variant | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| twocol | 7343 | 99.6% | 0.0% | 0.0% | 0.0% | 0.4% |
| wrap | 6858 | 100.0% | 0.0% | 0.0% | 0.0% | 0.029% |
| colon | 4454 | 100.0% | 0.0% | 0.0% | 0.0% | 0.022% |
| plain | 44118 | 100.0% | 0.0% | 0.0% | 0.0% | 0.007% |
| glue | 4813 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| leaders | 4611 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| csv:semicolon | 5510 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| fhir:text-only | 3618 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| unitspace | 4205 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| csv:comma | 3036 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| fhir:loinc+text | 4463 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| fhir:loinc-only | 3355 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| csv:lowhigh | 2058 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By units
| units | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| conventional | 77615 | 100.0% | 0.0% | 0.0% | 0.0% | 0.036% |
| SI | 20827 | 100.0% | 0.0% | 0.0% | 0.0% | 0.029% |

## By decimal
| decimal | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| comma | 37617 | 99.9% | 0.0% | 0.0% | 0.0% | 0.056% |
| point | 60825 | 100.0% | 0.0% | 0.0% | 0.0% | 0.021% |

## By sep
| sep | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| single | 22152 | 99.9% | 0.0% | 0.0% | 0.0% | 0.1% |
| tab | 7511 | 99.9% | 0.0% | 0.0% | 0.0% | 0.080% |
| wide | 68779 | 100.0% | 0.0% | 0.0% | 0.0% | 0.006% |

## By order
| order | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| VURF | 29719 | 100.0% | 0.0% | 0.0% | 0.0% | 0.044% |
| FVUR | 2391 | 100.0% | 0.0% | 0.0% | 0.0% | 0.042% |
| VFUR | 50058 | 100.0% | 0.0% | 0.0% | 0.0% | 0.036% |
| VFRU | 16274 | 100.0% | 0.0% | 0.0% | 0.0% | 0.012% |

## By marker
| marker | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| vitamin-b12 | 2326 | 99.4% | 0.0% | 0.0% | 0.0% | 0.6% |
| vitamin-d-25-oh | 2299 | 99.7% | 0.0% | 0.0% | 0.0% | 0.3% |
| transferrin-saturation | 2278 | 99.7% | 0.0% | 0.0% | 0.0% | 0.3% |
| alp | 2384 | 99.9% | 0.0% | 0.0% | 0.0% | 0.1% |
| folate-serum | 2354 | 99.9% | 0.0% | 0.0% | 0.0% | 0.085% |
| ggt | 2346 | 100.0% | 0.0% | 0.0% | 0.0% | 0.043% |
| testosterone-total | 2357 | 100.0% | 0.0% | 0.0% | 0.0% | 0.042% |
| wbc | 2345 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mcv | 2349 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mch | 2382 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mchc | 2402 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| glucose-fasting | 2298 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| creatinine-serum | 2308 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| blood-urea-nitrogen | 2343 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| uric-acid | 2340 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| sodium-serum | 2303 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| potassium-serum | 2286 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| chloride-serum | 2346 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| calcium-total | 2313 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| magnesium-serum | 2313 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| phosphorus-serum | 2296 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-protein | 2340 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| albumin-serum | 2375 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hs-crp | 2348 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-bilirubin | 2345 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ast | 2334 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hemoglobin | 2410 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hematocrit | 2380 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| platelet-count | 2370 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| tsh | 2396 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| free-t4 | 2344 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| free-t3 | 2379 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| rbc | 2373 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| serum-iron | 2277 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ferritin | 2297 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| alt | 2357 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-cholesterol | 2393 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ldl-cholesterol | 2387 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hdl-cholesterol | 2386 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| triglycerides | 2400 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hba1c | 2307 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| egfr | 2276 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## What went wrong, most common first

**7× miss | vitamin-b12 | "Vitamina B12"**
    r2-1247 [RO twocol VURF single]  Vitamina B12 1250 pg/ml (200 - 900)
    r2-1455 [RO twocol VFUR single]  Vitamina B12 1204 H pg/mL [200 - 900]
    r2-1801 [ES twocol VURF single]  Vitamina B12 352 pg/mL 200-900

**6× miss | transferrin-saturation | "% SATURATION"**
    r2-473 [US plain VFRU wide]  % SATURATION                         38   20-50 %
    r2-1432 [US plain VFUR wide]  % SATURATION                         24   %   20-50
    r2-1496 [US twocol VFUR wide]  % SATURATION                         37   %   20-50

**6× not on the report | serum-iron | read from "IRON"**
    r2-473 [US plain]  IRON = 38 %
    r2-1432 [US plain]  IRON = 24 %
    r2-1496 [US twocol]  IRON = 37 %

**3× miss | vitamin-b12 | "VITAMINA B12"**
    r2-1525 [ES twocol VURF single]  VITAMINA B12 189,0 pg/mL 200,0-900,0 ↓
    r2-3061 [ES twocol VFUR single]  VITAMINA B12 348,0 pg/mL 200,0-900,0
    r2-4598 [ES twocol VFUR single]  VITAMINA B12 585 pg/mL (200 - 900)

**3× miss | alp | "AP"**
    r2-1908 [DE twocol VURF single]  AP 124,0 U/l 44,0 - 147,0
    r2-2654 [DE twocol VFUR single]  AP 207,0 H U/l 44,0 – 147,0
    r2-3609 [DE twocol VURF single]  AP 114 U/l [44 - 147]

**3× miss | vitamin-d-25-oh | "25-OH Vitamin D"**
    r2-2551 [UK twocol VURF single]  25-OH Vitamin D 175 nmol/L 75 - 250
    r2-2995 [UK twocol VFUR single]  25-OH Vitamin D 180 nmol/L (75 - 250)
    r2-3922 [UK twocol VFUR tab]  25-OH Vitamin D	95	nmol/L	(75 - 250)

**2× miss | vitamin-b12 | "Vitamin B12"**
    r2-1387 [DE twocol VFUR single]  Vitamin B12 755 pg/ml 200 – 900
    r2-3215 [UK twocol VURF single]  Vitamin B12 249 pmol/L 148-664

**2× miss | vitamin-b12 | "VITAMIN B12"**
    r2-2575 [UK twocol VURF single]  VITAMIN B12 547 pmol/L 148 – 664
    r2-3306 [DE twocol VFUR single]  VITAMIN B12 1125 H pg/ml 200 – 900

**1× miss | folate-serum | "Folsäure"**
    r2-230 [DE twocol VFUR single]  Folsäure 12,80 ng/ml 3,00 - 20,00

**1× miss | ggt | "GGT"**
    r2-891 [DE twocol VFUR single]  GGT 74 H U/l 8 – 61

**1× miss | vitamin-d-25-oh | "25-OH Vitamina D"**
    r2-969 [ES twocol VFUR tab]  25-OH Vitamina D	130	ng/mL	30 - 100

**1× flag wrong | plusminus VURF**
    r2-1059 [DE colon VURF tab]  TRANSFERRINSÄTTIGUNG:	13	%	20 – 50	-  →  read 13 % [20, 50] H

**1× miss | vitamin-d-25-oh | "25-OH-VITAMIN D"**
    r2-1059 [DE colon VURF tab]  25-OH-VITAMIN D:	129	ng/ml	30 – 100	+

**1× miss | vitamin-d-25-oh | "25-OH VITAMINA D"**
    r2-2529 [ES twocol VFUR single]  25-OH VITAMINA D 78 ng/mL 30-100

**1× flag missed | plusminus VURF**
    r2-3609 [DE twocol VURF single]  GOT (AST) 8 U/l [10 - 40] -  →  read 8 U/L [10, 40]

**1× miss | testosterone-total | "Testosteron"**
    r2-4082 [RO twocol VURF single]  Testosteron 553,00 ng/dl (264,00 - 916,00)

**1× flag missed | arrows VURF**
    r2-4355 [RO twocol VURF single]  25-OH-Vitamina D 121 ng/ml 30 - 100 ↑  →  read 121 ng/mL [30, 100]

**1× miss | vitamin-d-25-oh | "25-OH-VITAMINA D"**
    r2-4604 [RO twocol VFUR single]  25-OH-VITAMINA D 65 ng/ml 30 - 100

**1× miss | folate-serum | "ÁCIDO FÓLICO"**
    r2-4891 [ES twocol VURF single]  ÁCIDO FÓLICO 9,4 ng/mL 3,0-20,0
