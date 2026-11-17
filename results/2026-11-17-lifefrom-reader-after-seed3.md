# Lab-report reader stress test

5000 generated reports, 99292 rows with a known answer, seed 3. Read in 14.1 s (2.8 ms a report).

| Outcome | Rows | Share | 95% interval |
|---|---|---|---|
| ok | 99253 | 100.0% | 99.95–99.97% |
| unit | 3 | 0.003% | 0.00–0.01% |
| unconverted | 0 | 0.0% | 0.00–0.00% |
| wrong | 0 | 0.0% | 0.00–0.00% |
| miss | 36 | 0.036% | 0.03–0.05% |

- **Critical values:** 1163 of 1163 caught (100.0%, interval 99.67–100.00%); 0 lost because the row was not read, 0 because it was misread. False critical alarms: 0.
- **Rows that are not on the report:** 6 (of 99262 rows read).
- **Lab's flag:** ok 99252, missed 2, invented 2.
- **Reference range:** ok 99256.
- **Collection date:** ok 4525.

## By locale
| locale | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| DE | 16049 | 99.9% | 0.019% | 0.0% | 0.0% | 0.087% |
| UK | 15478 | 99.9% | 0.0% | 0.0% | 0.0% | 0.058% |
| ES | 16023 | 100.0% | 0.0% | 0.0% | 0.0% | 0.025% |
| US | 33260 | 100.0% | 0.0% | 0.0% | 0.0% | 0.018% |
| RO | 18482 | 100.0% | 0.0% | 0.0% | 0.0% | 0.016% |

## By kind
| kind | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| lines | 76785 | 100.0% | 0.004% | 0.0% | 0.0% | 0.046% |
| csv | 11207 | 100.0% | 0.0% | 0.0% | 0.0% | 0.009% |
| fhir | 11300 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By variant
| variant | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| twocol | 6349 | 99.6% | 0.0% | 0.0% | 0.0% | 0.4% |
| unitspace | 4408 | 99.9% | 0.068% | 0.0% | 0.0% | 0.0% |
| leaders | 4792 | 100.0% | 0.0% | 0.0% | 0.0% | 0.042% |
| csv:comma | 3571 | 100.0% | 0.0% | 0.0% | 0.0% | 0.028% |
| glue | 4745 | 100.0% | 0.0% | 0.0% | 0.0% | 0.021% |
| plain | 44259 | 100.0% | 0.0% | 0.0% | 0.0% | 0.011% |
| fhir:loinc-only | 3211 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| csv:semicolon | 5682 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| wrap | 7166 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| fhir:text-only | 3367 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| colon | 5066 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| fhir:loinc+text | 4722 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| csv:lowhigh | 1954 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By units
| units | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| SI | 21147 | 99.9% | 0.014% | 0.0% | 0.0% | 0.061% |
| conventional | 78145 | 100.0% | 0.0% | 0.0% | 0.0% | 0.029% |

## By decimal
| decimal | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| comma | 37871 | 99.9% | 0.008% | 0.0% | 0.0% | 0.050% |
| point | 61421 | 100.0% | 0.0% | 0.0% | 0.0% | 0.028% |

## By sep
| sep | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| tab | 7352 | 99.9% | 0.014% | 0.0% | 0.0% | 0.1% |
| single | 22458 | 99.9% | 0.0% | 0.0% | 0.0% | 0.1% |
| wide | 69482 | 100.0% | 0.003% | 0.0% | 0.0% | 0.004% |

## By order
| order | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| VFUR | 49983 | 100.0% | 0.006% | 0.0% | 0.0% | 0.042% |
| FVUR | 2217 | 100.0% | 0.0% | 0.0% | 0.0% | 0.045% |
| VURF | 30141 | 100.0% | 0.0% | 0.0% | 0.0% | 0.040% |
| VFRU | 16951 | 100.0% | 0.0% | 0.0% | 0.0% | 0.012% |

## By marker
| marker | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| vitamin-b12 | 2297 | 99.4% | 0.0% | 0.0% | 0.0% | 0.6% |
| transferrin-saturation | 2389 | 99.7% | 0.0% | 0.0% | 0.0% | 0.3% |
| alp | 2338 | 99.8% | 0.0% | 0.0% | 0.0% | 0.2% |
| folate-serum | 2309 | 99.8% | 0.0% | 0.0% | 0.0% | 0.2% |
| vitamin-d-25-oh | 2285 | 99.9% | 0.0% | 0.0% | 0.0% | 0.1% |
| total-bilirubin | 2341 | 99.9% | 0.0% | 0.0% | 0.0% | 0.1% |
| wbc | 2352 | 99.9% | 0.085% | 0.0% | 0.0% | 0.0% |
| ggt | 2306 | 100.0% | 0.0% | 0.0% | 0.0% | 0.043% |
| platelet-count | 2361 | 100.0% | 0.042% | 0.0% | 0.0% | 0.0% |
| glucose-fasting | 2359 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hba1c | 2376 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| creatinine-serum | 2388 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| blood-urea-nitrogen | 2403 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| egfr | 2383 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| uric-acid | 2423 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| sodium-serum | 2383 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| potassium-serum | 2403 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| chloride-serum | 2410 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| calcium-total | 2405 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| magnesium-serum | 2418 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-protein | 2390 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| albumin-serum | 2384 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hs-crp | 2378 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| alt | 2356 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ast | 2332 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ferritin | 2382 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| free-t4 | 2370 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| free-t3 | 2370 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| testosterone-total | 2277 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| serum-iron | 2430 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| tsh | 2345 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-cholesterol | 2361 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ldl-cholesterol | 2320 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| rbc | 2363 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hemoglobin | 2398 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mcv | 2358 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mch | 2362 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mchc | 2362 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| phosphorus-serum | 2382 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hdl-cholesterol | 2358 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| triglycerides | 2341 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hematocrit | 2344 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## What went wrong, most common first

**6× miss | transferrin-saturation | "% SATURATION"**
    r3-62 [US plain VFUR single]  % SATURATION 21 % 20 - 50
    r3-200 [US plain VFUR single]  % SATURATION 34 % 20-50
    r3-1311 [US leaders VFUR single]  % SATURATION ...................... 11 Low % 20-50

**6× not on the report | serum-iron | read from "IRON"**
    r3-62 [US plain]  IRON = 21 %
    r3-200 [US plain]  IRON = 34 %
    r3-1311 [US leaders]  IRON = 11 %

**5× miss | alp | "AP"**
    r3-120 [DE twocol VURF tab]  AP	52	U/l	44 – 147
    r3-237 [DE twocol VFUR tab]  AP	78	U/l	(44 - 147)
    r3-1295 [DE twocol VURF tab]  AP	143,00	U/l	(44,00 - 147,00)

**5× miss | vitamin-b12 | "VITAMIN B12"**
    r3-120 [DE twocol VURF tab]  VITAMIN B12	125	pmol/l	148 – 664
    r3-3067 [DE twocol VFUR single]  VITAMIN B12 311,0 pg/ml 200,0 - 900,0
    r3-3799 [UK twocol VFUR tab]  VITAMIN B12	189	pmol/L	(148 - 664)

**5× miss | vitamin-b12 | "Vitamin B12"**
    r3-1256 [UK twocol VFUR single]  Vitamin B12 385 pmol/L 148 – 664
    r3-3206 [DE twocol VURF single]  Vitamin B12 536 pg/ml 200 - 900
    r3-3552 [UK twocol VFUR single]  Vitamin B12 98 L pmol/L 148 - 664

**3× miss | vitamin-b12 | "Vitamina B12"**
    r3-688 [ES twocol FVUR single]  Vitamina B12 776 pg/mL [200 - 900]
    r3-2185 [ES twocol VFUR single]  Vitamina B12 1072 ↑ pg/mL (200 - 900)
    r3-4505 [ES twocol VURF single]  Vitamina B12 161,0 pg/mL 200,0-900,0 *

**3× unit | "/nl" not recognised**
    r3-2253 [DE unitspace VFUR wide]  Leukozyten                           15,0   *    / nl   4,0-11,0  →  read 15  [4, 11]
    r3-2253 [DE unitspace VFUR wide]  Thrombozyten                         1312   *    / nl   150-400  →  read 1312  [150, 400]
    r3-2954 [DE unitspace VFUR tab]  Leukozyten	2,4	-	 / nl	[4,0 - 11,0]  →  read 2.4  [4, 11]

**2× miss | folate-serum | "Folsäure"**
    r3-716 [DE twocol VFUR single]  Folsäure 9,1 nmol/l 6,8 - 45,3
    r3-3594 [DE twocol VFUR single]  Folsäure 17,5 ng/ml 3,0 - 20,0

**2× flag invented | HL VURF**
    r3-3744 [UK twocol VURF single]  25-OH Vitamin D 80 nmol/L 75 - 250  →  read 32.1 ng/mL [30, 100] L
    r3-4864 [DE twocol VURF single]  25-OH-VITAMIN D 34,00 ng/ml (30,00 - 100,00)  →  read 34 ng/mL [30, 100] L

**1× miss | total-bilirubin | "Total bilirubin"**
    r3-125 [UK glue VFUR single]  Total bilirubin 24 H µmol/L 3 - 21

**1× miss | vitamin-d-25-oh | "25-OH-Vitamin D"**
    r3-2225 [DE twocol VFUR single]  25-OH-Vitamin D 55 ng/ml 30 - 100

**1× flag missed | plusminus VFUR**
    r3-2954 [DE unitspace VFUR tab]  Leukozyten	2,4	-	 / nl	[4,0 - 11,0]  →  read 2.4  [4, 11]

**1× miss | ggt | "GGT"**
    r3-3515 [DE twocol VURF single]  GGT 6,00 U/l 8,00 - 61,00 *

**1× miss | vitamin-d-25-oh | "25-OH VITAMINA D"**
    r3-3547 [ES twocol VURF single]  25-OH VITAMINA D 109 ng/mL 30-100

**1× miss | total-bilirubin | "TOTAL BILIRUBIN"**
    r3-3729 [UK plain VFUR wide]  TOTAL BILIRUBIN                      24   H   µmol/L   3 – 21

**1× miss | vitamin-b12 | "VITAMINA B12"**
    r3-3923 [RO twocol VFUR single]  VITAMINA B12 263.0 pg/ml (200.0 - 900.0)

**1× miss | total-bilirubin | "Total bilirubin" | csv:comma**
    r3-3989 [UK csv:comma VFUR wide]  Total bilirubin,24,H,µmol/L,3 - 21

**1× miss | folate-serum | "ACID FOLIC"**
    r3-4340 [RO twocol VFUR single]  ACID FOLIC 5.3 ng/mL 3.0-20.0

**1× flag missed | arrows VURF**
    r3-4814 [RO twocol VURF tab]  Trombocite	134	mii/µL	150 – 400	↓  →  read 134 mii/µL [150, 400]

**1× miss | vitamin-d-25-oh | "25-OH-Vitamina D"**
    r3-4814 [RO twocol VURF tab]  25-OH-Vitamina D	72	ng/mL	30 – 100

**1× miss | folate-serum | "SERUM FOLATE"**
    r3-4816 [UK twocol VURF tab]  SERUM FOLATE	20.2	nmol/L	6.8 – 45.3
