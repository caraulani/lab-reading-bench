# Lab-report reader stress test

43 generated reports, 820 rows with a known answer, seed 6, only kind=lines. Read in 0.0 s (0.2 ms a report).

| Outcome | Rows | Share | 95% interval |
|---|---|---|---|
| ok | 815 | 99.4% | 98.58–99.74% |
| unit | 0 | 0.0% | 0.00–0.47% |
| unconverted | 0 | 0.0% | 0.00–0.47% |
| wrong | 4 | 0.5% | 0.19–1.25% |
| miss | 1 | 0.1% | 0.02–0.69% |

- **Critical values:** 9 of 9 caught (100.0%, interval 70.08–100.00%); 0 lost because the row was not read, 0 because it was misread. False critical alarms: 0.
- **Rows that are not on the report:** 0 (of 819 rows read).
- **Lab's flag:** ok 813, invented 2.
- **Reference range:** ok 815.
- **Collection date:** ok 43.
- **Wrong values printed in a unit that needs converting:** 4 of 4 (100.0%).
- **Format invariance** (5 printings of each set of results): of 193 markers, read right in every printing 188 (97.4%), right in some printings but not others 5 (2.6%), never right 0. Critical results caught in every printing: 2 of 2.

## By locale
| locale | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| UK | 193 | 97.4% | 0.0% | 0.0% | 2.1% | 0.5% |
| US | 175 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| DE | 120 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ES | 156 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| RO | 176 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By kind
| kind | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| lines | 820 | 99.4% | 0.0% | 0.0% | 0.5% | 0.1% |

## By variant
| variant | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| unitspace | 33 | 93.9% | 0.0% | 0.0% | 6.1% | 0.0% |
| twocol | 60 | 96.7% | 0.0% | 0.0% | 3.3% | 0.0% |
| colon | 85 | 98.8% | 0.0% | 0.0% | 0.0% | 1.2% |
| plain | 508 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| glue | 76 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| wrap | 58 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By units
| units | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| SI | 230 | 97.8% | 0.0% | 0.0% | 1.7% | 0.4% |
| conventional | 590 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By decimal
| decimal | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| point | 458 | 98.9% | 0.0% | 0.0% | 0.9% | 0.2% |
| comma | 362 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By sep
| sep | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| single | 210 | 99.0% | 0.0% | 0.0% | 1.0% | 0.0% |
| wide | 545 | 99.4% | 0.0% | 0.0% | 0.4% | 0.2% |
| tab | 65 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By order
| order | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| VURF | 215 | 98.6% | 0.0% | 0.0% | 0.9% | 0.5% |
| VFUR | 481 | 99.6% | 0.0% | 0.0% | 0.4% | 0.0% |
| VFRU | 87 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| FVUR | 37 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By marker
| marker | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| magnesium-serum | 14 | 85.7% | 0.0% | 0.0% | 14.3% | 0.0% |
| phosphorus-serum | 22 | 90.9% | 0.0% | 0.0% | 9.1% | 0.0% |
| uric-acid | 20 | 95.0% | 0.0% | 0.0% | 0.0% | 5.0% |
| glucose-fasting | 25 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hba1c | 21 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| creatinine-serum | 20 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| blood-urea-nitrogen | 25 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| egfr | 18 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| sodium-serum | 25 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| potassium-serum | 25 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| chloride-serum | 25 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| calcium-total | 25 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
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

**2× flag invented | none VFUR**
    r6-7v1 [UK plain VFUR single]  ALT 5.0 U/L (7.0 - 56.0)  →  read 5 U/L [7, 56] L
    r6-7v1 [UK plain VFUR single]  Ferritin 440.0 µg/L (30.0 - 300.0)  →  read 440 ng/mL [30, 300] H

**1× wrong | magnesium-serum | point unitspace | unit mmol/L**
    r6-0v0 [UK unitspace VURF single]  Magnesium 1.48 mmol / L 0.70-0.99 *  →  read 35.97 mg/dL [17.01, 24.08] H

**1× wrong | phosphorus-serum | point unitspace | unit mmol/L**
    r6-0v0 [UK unitspace VURF single]  Phosphate 0.45 mmol / L 0.81-1.45 *  →  read 13.94 mg/dL [25.09, 44.91] L

**1× miss | uric-acid | "Urate"**
    r6-5v1 [UK colon VURF wide]  Urate:                               184   µmol/L   149 – 416

**1× wrong | magnesium-serum | point twocol | unit mmol/L**
    r6-9v2 [UK twocol VFUR wide]  Magnesium                            0.53   LOW   mmol/L   [0.70 - 0.99]  →  read 12.88 mg/dL [17.01, 24.06] L

**1× wrong | phosphorus-serum | point twocol | unit mmol/L**
    r6-9v2 [UK twocol VFUR wide]  Phosphate                            0.97   mmol/L   [0.81 - 1.45]  →  read 30.05 mg/dL [25.09, 44.91]
