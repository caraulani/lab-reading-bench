# Lab-report reader stress test

97 generated reports, 295 rows with a known answer, seed 5, only kind=lines. Read in 0.0 s (0.1 ms a report).

| Outcome | Rows | Share | 95% interval |
|---|---|---|---|
| ok | 268 | 90.8% | 87.01–93.63% |
| unit | 0 | 0.0% | 0.00–1.29% |
| unconverted | 0 | 0.0% | 0.00–1.29% |
| wrong | 1 | 0.3% | 0.06–1.89% |
| miss | 26 | 8.8% | 6.09–12.60% |

- **Critical values:** 0 of 0 caught (–, interval 0.00–0.00%); 0 lost because the row was not read, 0 because it was misread. False critical alarms: 0.
- **Rows that are not on the report:** 0 (of 269 rows read).
- **Lab's flag:** ok 262, invented 5, missed 1.
- **Reference range:** ok 268.
- **Collection date:** ok 18, missed 1.
- **Crashes:** 78.
- **Wrong values printed in a unit that needs converting:** 1 of 1 (100.0%).
- **Format invariance** (5 printings of each set of results): of 76 markers, read right in every printing 50 (65.8%), right in some printings but not others 26 (34.2%), never right 0. Critical results caught in every printing: 0 of 0.

## By locale
| locale | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| RO | 76 | 65.8% | 0.0% | 0.0% | 0.0% | 34.2% |
| UK | 55 | 98.2% | 0.0% | 0.0% | 1.8% | 0.0% |
| US | 21 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| DE | 76 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ES | 67 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By kind
| kind | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| lines | 295 | 90.8% | 0.0% | 0.0% | 0.3% | 8.8% |

## By variant
| variant | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| plain | 196 | 86.2% | 0.0% | 0.0% | 0.5% | 13.3% |
| twocol | 44 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| unitspace | 39 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| glue | 16 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By units
| units | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| conventional | 231 | 88.7% | 0.0% | 0.0% | 0.0% | 11.3% |
| SI | 64 | 98.4% | 0.0% | 0.0% | 1.6% | 0.0% |

## By decimal
| decimal | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| comma | 203 | 87.2% | 0.0% | 0.0% | 0.0% | 12.8% |
| point | 92 | 98.9% | 0.0% | 0.0% | 1.1% | 0.0% |

## By sep
| sep | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| wide | 207 | 87.4% | 0.0% | 0.0% | 0.0% | 12.6% |
| single | 79 | 98.7% | 0.0% | 0.0% | 1.3% | 0.0% |
| tab | 9 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By order
| order | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| VFUR | 138 | 80.4% | 0.0% | 0.0% | 0.7% | 18.8% |
| VFRU | 21 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| VURF | 136 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By marker
| marker | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| glucose-fasting | 4 | 75.0% | 0.0% | 0.0% | 0.0% | 25.0% |
| hba1c | 4 | 75.0% | 0.0% | 0.0% | 0.0% | 25.0% |
| creatinine-serum | 4 | 75.0% | 0.0% | 0.0% | 0.0% | 25.0% |
| egfr | 4 | 75.0% | 0.0% | 0.0% | 0.0% | 25.0% |
| uric-acid | 4 | 75.0% | 0.0% | 0.0% | 0.0% | 25.0% |
| sodium-serum | 4 | 75.0% | 0.0% | 0.0% | 0.0% | 25.0% |
| potassium-serum | 4 | 75.0% | 0.0% | 0.0% | 0.0% | 25.0% |
| chloride-serum | 4 | 75.0% | 0.0% | 0.0% | 0.0% | 25.0% |
| calcium-total | 4 | 75.0% | 0.0% | 0.0% | 0.0% | 25.0% |
| magnesium-serum | 4 | 75.0% | 0.0% | 0.0% | 0.0% | 25.0% |
| phosphorus-serum | 4 | 75.0% | 0.0% | 0.0% | 0.0% | 25.0% |
| albumin-serum | 4 | 75.0% | 0.0% | 0.0% | 0.0% | 25.0% |
| hs-crp | 4 | 75.0% | 0.0% | 0.0% | 0.0% | 25.0% |
| mch | 4 | 75.0% | 0.0% | 0.0% | 0.0% | 25.0% |
| folate-serum | 8 | 75.0% | 0.0% | 0.0% | 12.5% | 12.5% |
| serum-iron | 7 | 85.7% | 0.0% | 0.0% | 0.0% | 14.3% |
| wbc | 8 | 87.5% | 0.0% | 0.0% | 0.0% | 12.5% |
| mcv | 8 | 87.5% | 0.0% | 0.0% | 0.0% | 12.5% |
| platelet-count | 8 | 87.5% | 0.0% | 0.0% | 0.0% | 12.5% |
| vitamin-d-25-oh | 8 | 87.5% | 0.0% | 0.0% | 0.0% | 12.5% |
| vitamin-b12 | 8 | 87.5% | 0.0% | 0.0% | 0.0% | 12.5% |
| testosterone-total | 8 | 87.5% | 0.0% | 0.0% | 0.0% | 12.5% |
| ferritin | 11 | 90.9% | 0.0% | 0.0% | 0.0% | 9.1% |
| transferrin-saturation | 11 | 90.9% | 0.0% | 0.0% | 0.0% | 9.1% |
| rbc | 12 | 91.7% | 0.0% | 0.0% | 0.0% | 8.3% |
| hemoglobin | 12 | 91.7% | 0.0% | 0.0% | 0.0% | 8.3% |
| total-bilirubin | 15 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| alt | 15 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| alp | 15 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ggt | 15 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| tsh | 7 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| free-t3 | 7 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ast | 12 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-cholesterol | 8 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ldl-cholesterol | 4 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hdl-cholesterol | 8 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hematocrit | 8 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mchc | 8 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| triglycerides | 4 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| free-t4 | 4 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## What went wrong, most common first

**78× crash | not in the cache (offline)**
    r5-2v1
    r5-5v0
    r5-5v1

**3× flag invented | none VFUR**
    r5-1v1 [UK plain VFUR single]  Creatinine 149 µmol/L 53 - 115  →  read 1.69 mg/dL [0.6, 1.3] H
    r5-1v1 [UK plain VFUR single]  Potassium 2.8 mmol/L 3.5 - 5.1  →  read 2.8 mmol/L [3.5, 5.1] L
    r5-1v1 [UK plain VFUR single]  Vitamin D 60 nmol/L 75 - 250  →  read 24 ng/mL [30, 100] L

**2× flag invented | none VURF**
    r5-0v2 [DE twocol VURF tab]  Alkalische Phosphatase	23	U/l	[44 - 147]  →  read 23 U/L [44, 147] L
    r5-0v2 [DE twocol VURF tab]  TSH	0,22	mIU/l	[0,40 - 4,00]  →  read 0.22 mIU/L [0.4, 4] L

**1× wrong | folate-serum | point plain | unit nmol/L**
    r5-1v1 [UK plain VFUR single]  Folate 34.7 nmol/L 6.8 - 45.3  →  read 15.8 ng/mL [3.1, 20.6]

**1× miss | glucose-fasting | "GLUCOZĂ SERICĂ"**
    r5-1v4 [RO plain VFUR wide]  GLUCOZĂ SERICĂ                       75,00   mg/dL   70,00-99,00

**1× miss | hba1c | "HEMOGLOBINĂ GLICOZILATĂ (HBA1C)"**
    r5-1v4 [RO plain VFUR wide]  HEMOGLOBINĂ GLICOZILATĂ (HBA1C)      4,900   %   4,000-5,600

**1× miss | creatinine-serum | "CREATININĂ SERICĂ"**
    r5-1v4 [RO plain VFUR wide]  CREATININĂ SERICĂ                    1,6800   *   mg/dL   0,6000-1,3000

**1× miss | egfr | "RATA DE FILTRARE GLOMERULARĂ ESTIMATĂ"**
    r5-1v4 [RO plain VFUR wide]  RATA DE FILTRARE GLOMERULARĂ ESTIMATĂ   107,00   mL/min/1.73m2   >= 60,00

**1× miss | uric-acid | "ACID URIC"**
    r5-1v4 [RO plain VFUR wide]  ACID URIC                            3,200   mg/dL   2,500-7,000

**1× miss | sodium-serum | "SODIU SERIC"**
    r5-1v4 [RO plain VFUR wide]  SODIU SERIC                          137,00   mmol/l   135,00-145,00

**1× miss | potassium-serum | "POTASIU"**
    r5-1v4 [RO plain VFUR wide]  POTASIU                              2,800   *   mmol/L   3,500-5,100

**1× miss | chloride-serum | "CLOR SERIC"**
    r5-1v4 [RO plain VFUR wide]  CLOR SERIC                           104,00   mmol/L   98,00-107,00

**1× miss | calcium-total | "CALCIU SERIC"**
    r5-1v4 [RO plain VFUR wide]  CALCIU SERIC                         9,200   mg/dL   8,600-10,300

**1× miss | magnesium-serum | "MAGNEZIU SERIC"**
    r5-1v4 [RO plain VFUR wide]  MAGNEZIU SERIC                       1,900   mg/dL   1,700-2,400

**1× miss | phosphorus-serum | "FOSFOR SERIC"**
    r5-1v4 [RO plain VFUR wide]  FOSFOR SERIC                         3,600   mg/dL   2,500-4,500

**1× miss | albumin-serum | "ALBUMINĂ SERICĂ"**
    r5-1v4 [RO plain VFUR wide]  ALBUMINĂ SERICĂ                      3,900   g/dL   3,500-5,000

**1× miss | hs-crp | "PROTEINA C REACTIVĂ ÎNALT SENSIBILĂ (HS-CRP)"**
    r5-1v4 [RO plain VFUR wide]  PROTEINA C REACTIVĂ ÎNALT SENSIBILĂ (HS-CRP)   2,700   mg/L   <= 3,000

**1× miss | wbc | "NUMĂR DE LEUCOCITE"**
    r5-1v4 [RO plain VFUR wide]  NUMĂR DE LEUCOCITE                   8,500   10^3/µL   4,000-11,000

**1× miss | rbc | "ERITROCITE"**
    r5-1v4 [RO plain VFUR wide]  ERITROCITE                           5,3500   *10^6/uL   4,2000-5,9000

**1× miss | hemoglobin | "HEMOGLOBINA"**
    r5-1v4 [RO plain VFUR wide]  HEMOGLOBINA                          12,700   g/dL   12,000-17,500

**1× miss | mcv | "VEM"**
    r5-1v4 [RO plain VFUR wide]  VEM                                  84,600   fl   80,000-100,000

**1× miss | mch | "HEMOGLOBINĂ ERITROCITARĂ MEDIE (HEM)"**
    r5-1v4 [RO plain VFUR wide]  HEMOGLOBINĂ ERITROCITARĂ MEDIE (HEM)   31,100   pg   27,000-33,000

**1× miss | platelet-count | "TROMBOCITE"**
    r5-1v4 [RO plain VFUR wide]  TROMBOCITE                           340,00   10^3/µL   150,00-400,00

**1× miss | serum-iron | "SIDEREMIE"**
    r5-1v4 [RO plain VFUR wide]  SIDEREMIE                            106,00   µg/dl   50,00-170,00

**1× miss | ferritin | "FERITINĂ"**
    r5-1v4 [RO plain VFUR wide]  FERITINĂ                             150,00   ng/mL   30,00-300,00

**1× miss | transferrin-saturation | "COEFICIENT DE SATURAȚIE A TRANSFERINEI"**
    r5-1v4 [RO plain VFUR wide]  COEFICIENT DE SATURAȚIE A TRANSFERINEI   35,00   %   20,00-50,00

**1× miss | vitamin-d-25-oh | "25-OH-VITAMINA D"**
    r5-1v4 [RO plain VFUR wide]  25-OH-VITAMINA D                     24,00   *   ng/ml   30,00-100,00

**1× miss | vitamin-b12 | "VITAMINA B12"**
    r5-1v4 [RO plain VFUR wide]  VITAMINA B12                         754,00   pg/mL   200,00-900,00

**1× miss | folate-serum | "ACID FOLIC"**
    r5-1v4 [RO plain VFUR wide]  ACID FOLIC                           15,300   ng/ml   3,000-20,000

**1× miss | testosterone-total | "TESTOSTERON"**
    r5-1v4 [RO plain VFUR wide]  TESTOSTERON                          899,00   ng/dL   264,00-916,00

**1× date missed | RO lines**
    r5-1v4  want 2026-02-02 read null

**1× flag missed | plusminus VFUR**
    r5-2v3 [DE plain VFUR wide]  GGT                                  6   -   U/l   (8 - 61)  →  read 6 U/L [8, 61]
