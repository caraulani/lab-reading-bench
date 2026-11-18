# Lab-report reader stress test

97 generated reports, 1792 rows with a known answer, seed 5, only kind=lines. Read in 105.1 s (1083.9 ms a report).

| Outcome | Rows | Share | 95% interval |
|---|---|---|---|
| ok | 1434 | 80.0% | 78.11–81.81% |
| unit | 133 | 7.4% | 6.30–8.73% |
| unconverted | 0 | 0.0% | 0.00–0.21% |
| wrong | 10 | 0.6% | 0.30–1.02% |
| miss | 215 | 12.0% | 10.57–13.58% |

- **Critical values:** 29 of 31 caught (93.5%, interval 79.28–98.21%); 2 lost because the row was not read, 0 because it was misread. False critical alarms: 1.
- **Rows that are not on the report:** 4 (of 1582 rows read).
- **Lab's flag:** ok 1511, missed 48, invented 7, wrong 1.
- **Reference range:** ok 1556, wrong 6, missed 5.
- **Collection date:** ok 77, missed 20.
- **Format invariance** (5 printings of each set of results): of 438 markers, read right in every printing 209 (47.7%), right in some printings but not others 218 (49.8%), never right 11. Critical results caught in every printing: 6 of 8; caught in some printings only: 2.

## By locale
| locale | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| RO | 338 | 70.7% | 10.1% | 0.0% | 0.0% | 19.2% |
| DE | 380 | 72.1% | 11.6% | 0.0% | 2.6% | 13.7% |
| ES | 370 | 73.8% | 6.5% | 0.0% | 0.0% | 19.7% |
| UK | 312 | 87.8% | 6.7% | 0.0% | 0.0% | 5.4% |
| US | 392 | 95.4% | 2.6% | 0.0% | 0.0% | 2.0% |

## By kind
| kind | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| lines | 1792 | 80.0% | 7.4% | 0.0% | 0.6% | 12.0% |

## By variant
| variant | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| twocol | 191 | 42.9% | 6.3% | 0.0% | 0.0% | 50.8% |
| leaders | 88 | 62.5% | 11.4% | 0.0% | 3.4% | 22.7% |
| wrap | 55 | 67.3% | 3.6% | 0.0% | 0.0% | 29.1% |
| unitspace | 176 | 81.8% | 9.7% | 0.0% | 0.0% | 8.5% |
| glue | 117 | 82.1% | 9.4% | 0.0% | 1.7% | 6.8% |
| plain | 1131 | 87.2% | 7.2% | 0.0% | 0.4% | 5.2% |
| colon | 34 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By units
| units | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| conventional | 1354 | 79.3% | 7.3% | 0.0% | 0.2% | 13.1% |
| SI | 438 | 82.2% | 7.8% | 0.0% | 1.6% | 8.4% |

## By decimal
| decimal | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| comma | 974 | 72.7% | 9.5% | 0.0% | 1.0% | 16.7% |
| point | 818 | 88.8% | 4.9% | 0.0% | 0.0% | 6.4% |

## By sep
| sep | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| single | 479 | 79.1% | 7.3% | 0.0% | 0.6% | 12.9% |
| wide | 1133 | 80.0% | 7.4% | 0.0% | 0.6% | 12.0% |
| tab | 180 | 82.8% | 7.8% | 0.0% | 0.0% | 9.4% |

## By order
| order | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| FVUR | 79 | 64.6% | 2.5% | 0.0% | 0.0% | 32.9% |
| VURF | 476 | 73.1% | 8.6% | 0.0% | 0.6% | 17.6% |
| VFUR | 1030 | 81.4% | 8.4% | 0.0% | 0.7% | 9.5% |
| VFRU | 207 | 95.2% | 1.4% | 0.0% | 0.0% | 3.4% |

## By marker
| marker | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| wbc | 46 | 28.3% | 58.7% | 0.0% | 2.2% | 10.9% |
| platelet-count | 47 | 29.8% | 51.1% | 0.0% | 0.0% | 19.1% |
| rbc | 51 | 39.2% | 51.0% | 0.0% | 0.0% | 9.8% |
| tsh | 39 | 41.0% | 56.4% | 0.0% | 0.0% | 2.6% |
| mcv | 48 | 47.9% | 16.7% | 0.0% | 0.0% | 35.4% |
| ferritin | 24 | 66.7% | 12.5% | 0.0% | 0.0% | 20.8% |
| albumin-serum | 31 | 74.2% | 0.0% | 0.0% | 0.0% | 25.8% |
| transferrin-saturation | 24 | 75.0% | 4.2% | 0.0% | 0.0% | 20.8% |
| uric-acid | 36 | 75.0% | 0.0% | 0.0% | 0.0% | 25.0% |
| folate-serum | 49 | 77.6% | 0.0% | 0.0% | 0.0% | 22.4% |
| hba1c | 46 | 78.3% | 0.0% | 0.0% | 0.0% | 21.7% |
| hematocrit | 56 | 78.6% | 3.6% | 0.0% | 8.9% | 8.9% |
| alt | 62 | 79.0% | 8.1% | 0.0% | 0.0% | 12.9% |
| ggt | 48 | 79.2% | 6.3% | 0.0% | 0.0% | 14.6% |
| alp | 53 | 79.2% | 3.8% | 0.0% | 1.9% | 15.1% |
| free-t4 | 36 | 80.6% | 0.0% | 0.0% | 0.0% | 19.4% |
| phosphorus-serum | 38 | 81.6% | 0.0% | 0.0% | 0.0% | 18.4% |
| total-protein | 38 | 81.6% | 0.0% | 0.0% | 2.6% | 15.8% |
| hs-crp | 41 | 82.9% | 0.0% | 0.0% | 0.0% | 17.1% |
| blood-urea-nitrogen | 42 | 83.3% | 0.0% | 0.0% | 2.4% | 14.3% |
| mch | 42 | 85.7% | 0.0% | 0.0% | 0.0% | 14.3% |
| egfr | 43 | 86.0% | 0.0% | 0.0% | 0.0% | 14.0% |
| vitamin-b12 | 53 | 86.8% | 0.0% | 0.0% | 0.0% | 13.2% |
| creatinine-serum | 31 | 87.1% | 0.0% | 0.0% | 0.0% | 12.9% |
| free-t3 | 44 | 88.6% | 0.0% | 0.0% | 0.0% | 11.4% |
| ast | 46 | 89.1% | 8.7% | 0.0% | 2.2% | 0.0% |
| serum-iron | 19 | 89.5% | 10.5% | 0.0% | 0.0% | 0.0% |
| hdl-cholesterol | 48 | 89.6% | 0.0% | 0.0% | 0.0% | 10.4% |
| testosterone-total | 50 | 90.0% | 0.0% | 0.0% | 0.0% | 10.0% |
| total-bilirubin | 56 | 91.1% | 0.0% | 0.0% | 0.0% | 8.9% |
| chloride-serum | 34 | 91.2% | 2.9% | 0.0% | 0.0% | 5.9% |
| sodium-serum | 46 | 91.3% | 4.3% | 0.0% | 0.0% | 4.3% |
| hemoglobin | 58 | 91.4% | 0.0% | 0.0% | 0.0% | 8.6% |
| potassium-serum | 38 | 92.1% | 0.0% | 0.0% | 0.0% | 7.9% |
| magnesium-serum | 41 | 92.7% | 0.0% | 0.0% | 0.0% | 7.3% |
| glucose-fasting | 43 | 93.0% | 0.0% | 0.0% | 0.0% | 7.0% |
| mchc | 48 | 93.8% | 2.1% | 0.0% | 0.0% | 4.2% |
| vitamin-d-25-oh | 46 | 95.7% | 0.0% | 0.0% | 0.0% | 4.3% |
| calcium-total | 33 | 97.0% | 0.0% | 0.0% | 0.0% | 3.0% |
| total-cholesterol | 34 | 97.1% | 0.0% | 0.0% | 0.0% | 2.9% |
| ldl-cholesterol | 41 | 97.6% | 0.0% | 0.0% | 0.0% | 2.4% |
| triglycerides | 43 | 97.7% | 0.0% | 0.0% | 0.0% | 2.3% |

## What went wrong, most common first

**24× flag missed | arrows VFUR**
    r5-6v0 [RO glue VFUR wide]  Hemoglobina                          24,8   ↑   g/dL   12,0 – 17,5  →  read 24.8 g/dL [12, 17.5]
    r5-6v0 [RO glue VFUR wide]  Hematocrit                           58,3   ↑   %   36,0 – 50,0  →  read 58.3 % [36, 50]
    r5-6v0 [RO glue VFUR wide]  25-OH-Vitamina D                     21   ↓   ng/mL   30 – 100  →  read 21 ng/mL [30, 100]

**20× date missed | ES lines**
    r5-1v3  want 2026-02-02 read null
    r5-2v0  want 2026-08-03 read null
    r5-3v3  want 2026-03-27 read null

**15× flag missed | arrows VURF**
    r5-5v3 [DE plain VURF wide]  GGT                                  7   U/l   8 - 61   ↓  →  read 7 U/L [8, 61]
    r5-5v3 [DE plain VURF wide]  Leukozyten                           19,0   G/l   4,0 - 11,0   ↑  →  read 19  [4, 11]
    r5-5v3 [DE plain VURF wide]  Hämoglobin                           216   g/l   120 - 175   ↑  →  read 21.6 g/dL [12, 17.5]

**14× unit | "U/l" not recognised**
    r5-0v4 [RO plain VURF single]  GAMA-GLUTAMILTRANSFERAZA (GGT) 25 U/l 8 – 61  →  read 25  [8, 61]
    r5-2v3 [DE plain VFUR wide]  ALT (GPT)                            53   U/l   (7 - 56)  →  read 53  [7, 56]
    r5-2v4 [RO glue VURF single]  TGO (AST) 38.00U/l [10.00 - 40.00]  →  read 38  [10, 40]

**14× miss | mcv | "MCV"**
    r5-1v2 [DE plain VFUR wide]  MCV                                  84,60   fl   80,00 – 100,00
    r5-2v3 [DE plain VFUR wide]  MCV                                  89,5   fl   (80,0 - 100,0)
    r5-5v1 [US plain VFRU wide]  MCV                                  145.6 H   80.0 - 100.0 fL

**10× unit | "µUI/mL" not recognised**
    r5-0v4 [RO plain VURF single]  TSH 0,22 µUI/mL 0,40 – 4,00  →  read 0.22  [0.4, 4]
    r5-4v4 [ES unitspace VURF wide]  TSH                                  3,330   µUI / mL   (0,400 - 4,000)  →  read 3.33  [0.4, 4]
    r5-5v0 [RO leaders VFUR wide]  TSH ...............................   0,290   µUI/mL   0,400 - 4,000  →  read 0.29  [0.4, 4]

**8× miss | folate-serum | "Ácido fólico"**
    r5-1v3 [ES unitspace VURF wide]  Ácido fólico                         15,3   ng / mL   3,0 – 20,0
    r5-3v3 [ES plain VURF single]  Ácido fólico 9,4 ng/mL 3,0 - 20,0
    r5-8v3 [ES plain VFUR single]  Ácido fólico 9,7 ng/mL 3,0-20,0

**8× unit | "10^3/µL" read as "/pl"**
    r5-1v4 [RO plain VFUR wide]  NUMĂR DE LEUCOCITE                   8,500   10^3/µL   4,000-11,000  →  read 8.5 /pl [4, 11]
    r5-1v4 [RO plain VFUR wide]  TROMBOCITE                           340,00   10^3/µL   150,00-400,00  →  read 340 /pl [150, 400]
    r5-2v0 [ES plain VFUR wide]  Plaquetas                            246   10^3/µL   (150 - 400)  →  read 246 /pl [150, 400]

**8× unit | "Tsd/µl" not recognised**
    r5-2v3 [DE plain VFUR wide]  Thrombozyten                         246   Tsd/µl   (150 - 400)  →  read 246  [150, 400]
    r5-4v3 [DE plain VURF wide]  Leukozyten                           2,400   Tsd/µl   (4,000 - 11,000)   -  →  read 2.4  [4, 11] L
    r5-5v3 [DE plain VURF wide]  Thrombozyten                         394   Tsd/µl   150 - 400  →  read 394  [150, 400]

**7× miss | phosphorus-serum | "Fósforo"**
    r5-1v3 [ES unitspace VURF wide]  Fósforo                              3,6   mg / dL   2,5 – 4,5
    r5-10v3 [ES twocol FVUR single]  Fósforo 3,00 mg/dL [2,50 - 4,50]
    r5-12v3 [ES plain VFUR tab]  Fósforo	5,3	H	mg/dL	[2,5 - 4,5]

**6× unit | "µU/ml" not recognised**
    r5-4v3 [DE plain VURF wide]  TSH basal                            3,3300   µU/ml   (0,4000 - 4,0000)  →  read 3.33  [0.4, 4]
    r5-5v3 [DE plain VURF wide]  TSH basal                            0,29   µU/ml   0,40 - 4,00   ↓  →  read 0.29  [0.4, 4]
    r5-7v2 [DE plain VFUR wide]  TSH                                  0,730   µU/ml   0,40-4,00  →  read 0.73  [0.4, 4]

**6× miss | blood-urea-nitrogen | "Nitrógeno ureico (BUN)"**
    r5-10v3 [ES twocol FVUR single]  Nitrógeno ureico (BUN) 18,0 mg/dL [7,0 - 25,0]
    r5-12v3 [ES plain VFUR tab]  Nitrógeno ureico (BUN)	8	mg/dL	[7 - 25]
    r5-13v3 [ES plain VURF wide]  Nitrógeno ureico (BUN)               5   mg/dL   [7 - 25]   *

**5× unit | "G/l" not recognised**
    r5-1v2 [DE plain VFUR wide]  Leukozyten                           8,50   G/l   4,00 – 11,00  →  read 8.5  [4, 11]
    r5-1v2 [DE plain VFUR wide]  Thrombozyten                         340,0   G/l   150,0 – 400,0  →  read 340  [150, 400]
    r5-5v3 [DE plain VURF wide]  Leukozyten                           19,0   G/l   4,0 - 11,0   ↑  →  read 19  [4, 11]

**5× unit | "T/l" not recognised**
    r5-1v2 [DE plain VFUR wide]  Erythrozyten                         5,350   T/l   4,200 – 5,900  →  read 5.35  [4.2, 5.9]
    r5-2v3 [DE plain VFUR wide]  Erythrozyten                         5,25   T/l   (4,20 - 5,90)  →  read 5.25  [4.2, 5.9]
    r5-4v3 [DE plain VURF wide]  Erythrozyten                         4,3300   T/l   (4,2000 - 5,9000)  →  read 4.33  [4.2, 5.9]

**5× miss | uric-acid | "Ácido úrico"**
    r5-1v3 [ES unitspace VURF wide]  Ácido úrico                          3,2   mg / dL   2,5 – 7,0
    r5-10v3 [ES twocol FVUR single]  Ácido úrico * 1,40 mg/dL [2,50 - 7,00]
    r5-13v3 [ES plain VURF wide]  Ácido úrico                          4,9   mg/dL   [2,5 - 7,0]

**5× miss | albumin-serum | "Albúmina"**
    r5-1v3 [ES unitspace VURF wide]  Albúmina                             3,9   g / dL   3,5 – 5,0
    r5-10v3 [ES twocol FVUR single]  Albúmina * 2,50 g/dL [3,50 - 5,00]
    r5-13v3 [ES plain VURF wide]  Albúmina                             3,6   g/dL   [3,5 - 5,0]

**5× unit | "x10^3/µL" read as "/pl"**
    r5-1v3 [ES unitspace VURF wide]  Leucocitos                           8,5   x10^3 / µL   4,0 – 11,0  →  read 8.5 /pl [4, 11]
    r5-4v4 [ES unitspace VURF wide]  LEUCOCITOS                           2,40   x10^3 / µL   (4,00 - 11,00)  →  read 2.4 /pl [4, 11]
    r5-6v4 [ES plain VFUR wide]  LEUCOCITOS                           10,1   x10^3/µL   [4,0 - 11,0]  →  read 10.1 /pl [4, 11]

**5× unit | "fl" not recognised**
    r5-1v4 [RO plain VFUR wide]  VEM                                  84,600   fl   80,000-100,000  →  read 84.6  [80, 100]
    r5-5v0 [RO leaders VFUR wide]  VOLUM ERITROCITAR MEDIU (VEM) .....   145,60   fl   80,00 - 100,00  →  read 145.6  [80, 100]
    r5-12v2 [DE leaders VFUR single]  MCV ............................... 53,2 - fl (80,0 - 100,0)  →  read 53.2  [80, 100]

**5× miss | platelet-count | "Număr de trombocite"**
    r5-2v4 [RO glue VURF single]  Număr de trombocite 246.00mii/µL [150.00 - 400.00]
    r5-6v0 [RO glue VFUR wide]  Număr de trombocite                  276mii/µL   150 – 400
    r5-7v4 [RO plain VFUR wide]  Număr de trombocite                  455   ↑   mii/µL   150 – 400

**5× unit | "×10⁹/L" not recognised**
    r5-4v2 [UK twocol VURF wide]  White cell count                     2.4   ×10⁹/L   (4.0 - 11.0)   LOW  →  read 2.4  [4, 11]
    r5-6v2 [UK unitspace VURF single]  Platelets 276 ×10⁹ / L 150 - 400  →  read 276  [150, 400]
    r5-9v1 [UK glue VFUR wide]  Platelets                            75   L   ×10⁹/L   150 - 400  →  read 75  [150, 400] L

**4× miss | ggt | "GGT"**
    r5-0v0 [US twocol VFRU wide]  GGT                                  25   8-61 U/L
    r5-0v2 [DE twocol VURF tab]  GGT	25	U/l	[8 - 61]
    r5-5v0 [RO leaders VFUR wide]  GGT ...............................   7,0   U/L   8,0 - 61,0

**4× flag invented | HL VURF**
    r5-4v0 [RO twocol VURF wide]  Hemoglobină                          15,5   g/dL   [12,0 - 17,5]  →  read 15.5 g/dL [12, 17.5] L
    r5-4v0 [RO twocol VURF wide]  TSH                                  3,33   µUI/mL   [0,40 - 4,00]  →  read 3.33 ng/dL [0.4, 4] H
    r5-22v3 [ES twocol VURF single]  Sodio 142 mmol/L 135 - 145  →  read 142 mmol/L [135, 145] H

**4× wrong | hematocrit | comma plain | unit L/l**
    r5-5v3 [DE plain VURF wide]  Hämatokrit                           0,50   L/l   0,36 - 0,50  →  read 0.5  [0.36, 0.5]
    r5-7v2 [DE plain VFUR wide]  Hämatokrit                           0,49   L/l   0,36-0,50  →  read 0.49  [0.36, 0.5]
    r5-9v2 [DE plain VFUR wide]  Hämatokrit                           0,46   L/l   0,36 - 0,50  →  read 0.46  [0.36, 0.5]

**4× unit | "x10^9/L" not recognised**
    r5-6v2 [UK unitspace VURF single]  White cell count 10.1 x10^9 / L 4.0 - 11.0  →  read 10.1  [4, 11]
    r5-12v1 [UK plain VURF wide]  Platelet count                       1149   x10^9/L   (150 - 400)  →  read 1149  [150, 400]
    r5-21v1 [UK plain VURF wide]  Platelets                            259   x10^9/L   150 - 400  →  read 259  [150, 400]

**4× miss | mch | "Hemoglobină eritrocitară medie (HEM)"**
    r5-7v4 [RO plain VFUR wide]  Hemoglobină eritrocitară medie (HEM)   35,9   ↑   pg   27,0 – 33,0
    r5-9v4 [RO plain VURF wide]  Hemoglobină eritrocitară medie (HEM)   44,9   pg   27,0 – 33,0
    r5-16v4 [RO plain VFUR single]  Hemoglobină eritrocitară medie (HEM) 28,400 pg 27,000 – 33,000

**4× miss | hba1c | "HbA1c"**
    r5-10v3 [ES twocol FVUR single]  HbA1c 5,50 % [4,00 - 5,60]
    r5-12v3 [ES plain VFUR tab]  HbA1c	5,3	%	[4,0 - 5,6]
    r5-13v2 [DE leaders VURF wide]  HbA1c .............................   16   mmol/mol   [20 - 38]   ↓

**4× flag missed | plusminus VFUR**
    r5-12v2 [DE leaders VFUR single]  KREATININ ......................... 38 - µmol/l (53 - 115)  →  read 0.43 mg/dL [0.6, 1.3]
    r5-12v2 [DE leaders VFUR single]  NATRIUM ........................... 76 - mmol/l (135 - 145)  →  read 76 mmol/L [135, 145]
    r5-12v2 [DE leaders VFUR single]  ERYTHROZYTEN ...................... 3,76 - T/l (4,20 - 5,90)  →  read 3.76  [4.2, 5.9]

**4× miss | hs-crp | "Proteina C reactivă înalt sensibilă (hs-CRP)"**
    r5-12v4 [RO plain VFUR single]  Proteina C reactivă înalt sensibilă (hs-CRP) 1,7 mg/L < 3,0
    r5-14v0 [RO leaders VURF wide]  Proteina C reactivă înalt sensibilă (hs-CRP) ....   2,4   mg/L   < 3,0
    r5-16v4 [RO plain VFUR single]  Proteina C reactivă înalt sensibilă (hs-CRP) 3,800 H mg/L <3,000

**3× unit | "10^6/µL" read as "/pl"**
    r5-1v3 [ES unitspace VURF wide]  Eritrocitos                          5,35   10^6 / µL   4,20 – 5,90  →  read 5.35 /pl [4.2, 5.9]
    r5-2v4 [RO glue VURF single]  Eritrocite 5.2500 10^6/µL [4.2000 - 5.9000]  →  read 5.25 /pl [4.2, 5.9]
    r5-6v0 [RO glue VFUR wide]  Eritrocite                           5,69   10^6/µL   4,20 – 5,90  →  read 5.69 /pl [4.2, 5.9]

**3× unit | "µg/L" read as "ng/L"**
    r5-2v2 [UK plain VFUR single]  Ferritin 165 µg/L 30-300  →  read 165 ng/L [30, 300]
    r5-18v2 [UK plain VURF wide]  Ferritin                             395   µg/L   30 – 300   H  →  read 395 ng/L [30, 300] H
    r5-23v1 [UK plain VFUR tab]  Ferritin	138	µg/L	30-300  →  read 138 ng/L [30, 300]

**3× unit | "%" not recognised**
    r5-2v3 [DE plain VFUR wide]  Transferrinsättigung                 24   %   (20 - 50)  →  read 24  [20, 50]
    r5-17v4 [RO wrap VFUR wide]  Hematocrit                           31.5   L   %   36.0-50.0  →  read 31.5  [36, 50] L
    r5-23v0 [US plain VFUR wide]  Hematocrit                           34.3   L   %   36.0 - 50.0  →  read 34.3  [36, 50] L

**3× miss | alp | "Fosfatază alcalină"**
    r5-2v4 [RO glue VURF single]  Fosfatază alcalină 133.00U/l [44.00 - 147.00]
    r5-4v0 [RO twocol VURF wide]  Fosfatază alcalină                   136   U/l   [44 - 147]
    r5-17v4 [RO wrap VFUR wide]  Fosfatază alcalină ⏎         87   U/L   44-147

**3× flag missed | HL VURF**
    r5-4v0 [RO twocol VURF wide]  Leucocite                            2,4   mii/µL   [4,0 - 11,0]   L  →  read 2.4 /uL [4, 11]
    r5-22v3 [ES twocol VURF single]  Creatinina 0,49 mg/dL 0,60 - 1,30 L  →  read 0.49 mg/dL [0.6, 1.3]
    r5-22v3 [ES twocol VURF single]  Leucocitos 43,7 x10^3/µL 4,0 - 11,0 H  →  read 43.7 /pl [4, 11]

**3× flag invented | words VURF**
    r5-4v2 [UK twocol VURF wide]  Bilirubin                            17   µmol/L   (3 - 21)  →  read 0.99 mg/dL [0.18, 1.23] L
    r5-4v2 [UK twocol VURF wide]  Haemoglobin                          155   g/L   (120 - 175)  →  read 15.5 g/dL [12, 17.5] L
    r5-4v2 [UK twocol VURF wide]  TSH                                  3.33   mIU/L   (0.40 - 4.00)  →  read 3.33 mIU/L [0.4, 4] H

**3× unit | "x10^6/µL" read as "/pl"**
    r5-4v4 [ES unitspace VURF wide]  HEMATÍES                             4,330   x10^6 / µL   (4,200 - 5,900)  →  read 4.33 /pl [4.2, 5.9]
    r5-6v4 [ES plain VFUR wide]  ERITROCITOS                          5,69   x10^6/µL   [4,20 - 5,90]  →  read 5.69 /pl [4.2, 5.9]
    r5-8v3 [ES plain VFUR single]  Hematíes 4,21 x10^6/µL 4,20-5,90  →  read 4.21 /pl [4.2, 5.9]

**3× unit | "*10^3/uL" read as "/uL"**
    r5-5v0 [RO leaders VFUR wide]  TROMBOCITE ........................   394,0   *10^3/uL   150,0 - 400,0  →  read 394 /uL [150, 400]
    r5-10v4 [RO plain VFUR wide]  NUMĂR DE LEUCOCITE                   5.900   *10^3/uL   4.000 – 11.000  →  read 5.9 /uL [4, 11]
    r5-10v4 [RO plain VFUR wide]  NUMĂR DE TROMBOCITE                  395.00   *10^3/uL   150.00 – 400.00  →  read 395 /uL [150, 400]

**3× unit | "x10E3/uL" not recognised**
    r5-5v1 [US plain VFRU wide]  WBC                                  19.0 H   4.0 - 11.0 x10E3/uL  →  read 19  [4, 11] H
    r5-7v0 [US glue VFUR tab]  PLATELET COUNT	455	High	x10E3/uL	150-400  →  read 455  [150, 400] H
    r5-9v0 [US plain VFRU single]  PLATELET COUNT 75 L 150-400 x10E3/uL  →  read 75  [150, 400] L

**3× miss | free-t4 | "fT4"**
    r5-5v3 [DE plain VURF wide]  fT4                                  16,5   pmol/l   10,3 - 23,2
    r5-7v2 [DE plain VFUR wide]  fT4                                  20,1   pmol/l   10,3-23,2
    r5-22v2 [DE glue VFUR wide]  fT4                                  2,11   *   ng/dl   [0,80 - 1,80]

**3× miss | vitamin-b12 | "Vitamina B12"**
    r5-5v4 [ES twocol VFUR wide]  Vitamina B12                         801,00   pg/mL   [200,00 - 900,00]
    r5-10v3 [ES twocol FVUR single]  Vitamina B12 679,0 pg/mL [200,0 - 900,0]
    r5-19v4 [RO twocol VFUR wide]  Vitamina B12                         241   pg/ml   (200 - 900)

**3× miss | wbc | "Număr de leucocite"**
    r5-6v0 [RO glue VFUR wide]  Număr de leucocite                   10,1   10^3/µL   4,0 – 11,0
    r5-7v4 [RO plain VFUR wide]  Număr de leucocite                   10,8   10^3/µL   4,0 – 11,0
    r5-22v4 [RO unitspace VFUR wide]  Număr de leucocite                   43.7   H   mii / µL   4.0 - 11.0

**3× miss | glucose-fasting | "Glucoză serică"**
    r5-7v4 [RO plain VFUR wide]  Glucoză serică                       72   mg/dL   70 – 99
    r5-12v4 [RO plain VFUR single]  Glucoză serică 93 mg/dL [70 - 99]
    r5-14v0 [RO leaders VURF wide]  Glucoză serică ....................   67   mg/dL   [70 - 99]   ↓

**3× miss | hba1c | "Hemoglobină glicozilată (HbA1c)"**
    r5-7v4 [RO plain VFUR wide]  Hemoglobină glicozilată (HbA1c)      4,1   %   4,0 – 5,6
    r5-14v0 [RO leaders VURF wide]  Hemoglobină glicozilată (HbA1c) ....   4,7   %   [4,0 - 5,6]
    r5-22v4 [RO unitspace VFUR wide]  Hemoglobină glicozilată (HbA1c)      5.5   %   4.0 - 5.6

**3× miss | creatinine-serum | "Creatinină serică"**
    r5-7v4 [RO plain VFUR wide]  Creatinină serică                    0,62   mg/dL   0,60 – 1,30
    r5-12v4 [RO plain VFUR single]  Creatinină serică 0,43 mg/dL [0,60 - 1,30]
    r5-16v4 [RO plain VFUR single]  Creatinină serică 0,9900 mg/dL 0,6000 – 1,3000

**3× unit | "x10^12/L" not recognised**
    r5-10v1 [UK plain VFUR wide]  Red cell count                       3.65   L   x10^12/L   4.20 – 5.90  →  read 3.65  [4.2, 5.9] L
    r5-22v1 [UK plain VURF tab]  RBC	4.88	x10^12/L	4.20 - 5.90  →  read 4.88  [4.2, 5.9]
    r5-23v1 [UK plain VFUR tab]  Red cell count	4.41	x10^12/L	4.20-5.90  →  read 4.41  [4.2, 5.9]

**3× miss | hdl-cholesterol | "Colesterol HDL"**
    r5-10v3 [ES twocol FVUR single]  Colesterol HDL 49,0 mg/dL >40,0
    r5-19v4 [RO twocol VFUR wide]  Colesterol HDL                       65   mg/dL   > 40
    r5-22v3 [ES twocol VURF single]  Colesterol HDL 43 mg/dL > 40

**3× unit | "mil./µL" not recognised**
    r5-10v4 [RO plain VFUR wide]  ERITROCITE                           3.6500   ↓   mil./µL   4.2000 – 5.9000  →  read 3.65  [4.2, 5.9]
    r5-16v4 [RO plain VFUR single]  Eritrocite 6,9400 H mil./µL 4,2000 – 5,9000  →  read 6.94  [4.2, 5.9] H
    r5-22v4 [RO unitspace VFUR wide]  Eritrocite                           4.88   mil. / µL   4.20 - 5.90  →  read 4.88  [4.2, 5.9]

**3× range missed | DE paren | two-sided**
    r5-12v2 [DE leaders VFUR single]  ALT (GPT) ......................... 665 + U/l (7 - 56)  →  read 665 U/L H
    r5-12v2 [DE leaders VFUR single]  GOT (AST) ......................... 21 U/l (10 - 40)  →  read 21 U/L
    r5-12v2 [DE leaders VFUR single]  GGT ............................... 59 U/l (8 - 61)  →  read 59 U/L

**3× miss | hemoglobin | "Hemoglobină"**
    r5-12v4 [RO plain VFUR single]  Hemoglobină 18,6 g/dL [12,0 - 17,5]
    r5-16v4 [RO plain VFUR single]  Hemoglobină 15,800 g/dl 12,000 – 17,500
    r5-17v4 [RO wrap VFUR wide]  Hemoglobină                          9.4   L   g/dL   12.0-17.5

**3× miss | uric-acid | "Harnsäure"**
    r5-13v2 [DE leaders VURF wide]  Harnsäure .........................   291   µmol/l   [149 - 416]
    r5-16v2 [DE plain VFUR wide]  Harnsäure                            4,9   mg/dl   (2,5 - 7,0)
    r5-19v2 [DE wrap VURF wide]  Harnsäure                            7,4   mg/dl   (2,5 - 7,0)   H

**3× unit | "mmol/l" not recognised**
    r5-22v2 [DE glue VFUR wide]  Natrium                              142mmol/l   [135 - 145]  →  read 142  [135, 145]
    r5-22v4 [RO unitspace VFUR wide]  Sodiu                                142   mmol / l   135 - 145  →  read 142  [135, 145]
    r5-22v4 [RO unitspace VFUR wide]  Clor seric                           124   H   mmol / l   98 - 107  →  read 124  [98, 107]

**2× miss | transferrin-saturation | "Transferrinsättigung"**
    r5-0v2 [DE twocol VURF tab]  Transferrinsättigung	48	%	[20 - 50]
    r5-18v3 [DE unitspace VFUR single]  Transferrinsättigung 31 % 20 - 50

**2× unit | "×10⁹/L" read as "x10^9/L"**
    r5-1v1 [UK plain VFUR single]  White cell count 8.5 ×10⁹/L 4.0 - 11.0  →  read 8.5 x10^9/L [4, 11]
    r5-1v1 [UK plain VFUR single]  Platelet count 340 ×10⁹/L 150 - 400  →  read 340 x10^9/L [150, 400]

**2× miss | transferrin-saturation | "Saturación de transferrina"**
    r5-2v0 [ES plain VFUR wide]  Saturación de transferrina           24   %   (20 - 50)
    r5-16v3 [ES plain FVUR single]  Saturación de transferrina 40,00 % [20,00 - 50,00]

**2× miss | ferritin | "Feritină"**
    r5-2v4 [RO glue VURF single]  Feritină 165.00ng/mL [30.00 - 300.00]
    r5-16v4 [RO plain VFUR single]  Feritină 218,00 ng/mL 30,00 – 300,00

**2× miss | total-bilirubin | "Bilirubină totală"**
    r5-4v0 [RO twocol VURF wide]  Bilirubină totală                    1,0   mg/dL   [0,2 - 1,2]
    r5-14v0 [RO leaders VURF wide]  Bilirubină totală .................   0,4   mg/dl   [0,2 - 1,2]

**2× unit | "µUI/mL" read as "ng/dL"**
    r5-4v0 [RO twocol VURF wide]  TSH                                  3,33   µUI/mL   [0,40 - 4,00]  →  read 3.33 ng/dL [0.4, 4] H
    r5-5v4 [ES twocol VFUR wide]  TSH                                  0,2900   L   µUI/mL   [0,4000 - 4,0000]  →  read 0.29 ng/dL [0.4, 4] L

**2× miss | free-t4 | "T4 liber"**
    r5-4v0 [RO twocol VURF wide]  T4 liber                             2,11   ng/dl   [0,80 - 1,80]   H
    r5-18v0 [RO twocol VURF wide]  T4 liber                             1.06   ng/dl   0.80-1.80

**2× miss | free-t3 | "fT3"**
    r5-4v3 [DE plain VURF wide]  fT3                                  4,000   pg/ml   (2,300 - 4,200)
    r5-7v2 [DE plain VFUR wide]  fT3                                  3,7   pmol/l   3,5-6,5

**2× miss | alt | "ALT (GPT)"**
    r5-5v4 [ES twocol VFUR wide]  ALT (GPT)                            16,00   U/L   [7,00 - 56,00]
    r5-22v3 [ES twocol VURF single]  ALT (GPT) 31 U/L 7 - 56

**2× miss | ggt | "Gamma GT"**
    r5-5v4 [ES twocol VFUR wide]  Gamma GT                             7,00   L   U/L   [8,00 - 61,00]
    r5-22v3 [ES twocol VURF single]  Gamma GT 68 U/L 8 - 61 H

**2× miss | hemoglobin | "Hemoglobina"**
    r5-5v4 [ES twocol VFUR wide]  Hemoglobina                          21,600   H   g/dL   [12,000 - 17,500]
    r5-10v3 [ES twocol FVUR single]  Hemoglobina 14,00 g/dL [12,00 - 17,50]

**2× miss | mcv | "VCM"**
    r5-5v4 [ES twocol VFUR wide]  VCM                                  145,600   H   fL   [80,000 - 100,000]
    r5-8v3 [ES plain VFUR single]  VCM 80,2 fL 80,0-100,0

**2× miss | platelet-count | "Plaquetas"**
    r5-5v4 [ES twocol VFUR wide]  Plaquetas                            394,00   mil/mm3   [150,00 - 400,00]
    r5-10v3 [ES twocol FVUR single]  Plaquetas 395,0 10^3/µL [150,0 - 400,0]

**2× unit | "K/uL" not recognised**
    r5-6v1 [US glue VFRU wide]  WHITE BLOOD CELL COUNT               10.1   4.0-11.0 K/uL  →  read 10.1  [4, 11]
    r5-23v0 [US plain VFUR wide]  Platelets                            175   K/uL   150 - 400  →  read 175  [150, 400]

**2× miss | mch | "MCH"**
    r5-6v3 [DE twocol VFUR tab]  MCH	27,200	pg	27,000 - 33,000
    r5-8v0 [UK twocol VFUR wide]  MCH                                  32.30   pg   27.00 – 33.00

**2× miss | vitamin-b12 | "VITAMIN B12"**
    r5-6v3 [DE twocol VFUR tab]  VITAMIN B12	1128,00	↑	pg/ml	200,00 - 900,00
    r5-8v0 [UK twocol VFUR wide]  VITAMIN B12                          217.7   pmol/L   148.0 – 664.0

**2× unit | "uIU/mL" not recognised**
    r5-7v0 [US glue VFUR tab]  TSH	0.73uIU/mL	0.40-4.00  →  read 0.73  [0.4, 4]
    r5-23v0 [US plain VFUR wide]  TSH                                  4.54   H   uIU/mL   0.40 - 4.00  →  read 4.54  [0.4, 4] H

**2× miss | albumin-serum | "Albumină serică"**
    r5-7v4 [RO plain VFUR wide]  Albumină serică                      3,6   g/dl   3,5 – 5,0
    r5-19v4 [RO twocol VFUR wide]  Albumină serică                      7.2   H   g/dl   (3.5 - 5.0)

**2× critical not caught (row missed) | platelet-count**
    r5-8v0 [UK twocol VFUR wide]  PLATELETS                            28.0   LOW   x10^9/L   150.0 – 400.0
    r5-12v4 [RO plain VFUR single]  Număr de trombocite 1149 10^3/µL [150 - 400]

**2× miss | testosterone-total | "Testosteron"**
    r5-8v2 [DE twocol VFUR wide]  Testosteron                          370   ng/dl   264-916
    r5-19v4 [RO twocol VFUR wide]  Testosteron                          850   ng/dl   (264 - 916)

**2× miss | total-protein | "Gesamteiweiß"**
    r5-10v2 [DE plain VFUR wide]  Gesamteiweiß                         7,1   g/dl   [6,0 - 8,3]
    r5-16v2 [DE plain VFUR wide]  Gesamteiweiß                         7,8   g/dl   (6,0 - 8,3)

**2× miss | chloride-serum | "Cloro"**
    r5-10v3 [ES twocol FVUR single]  Cloro 103,0 mmol/L [98,0 - 107,0]
    r5-22v3 [ES twocol VURF single]  Cloro 124 mmol/L 98 - 107 H

**2× miss | magnesium-serum | "Magnesio"**
    r5-10v3 [ES twocol FVUR single]  Magnesio 1,80 mg/dL [1,70 - 2,40]
    r5-22v3 [ES twocol VURF single]  Magnesio 1,9 mg/dL 1,7 - 2,4

**2× miss | total-protein | "Proteínas totales"**
    r5-10v3 [ES twocol FVUR single]  Proteínas totales 7,10 g/dL [6,00 - 8,30]
    r5-22v3 [ES twocol VURF single]  Proteínas totales 7,1 g/dL 6,0 - 8,3

**2× miss | alp | "Fosfatasa alcalina"**
    r5-10v3 [ES twocol FVUR single]  Fosfatasa alcalina 143,0 U/L [44,0 - 147,0]
    r5-17v3 [ES wrap VURF wide]  Fosfatasa alcalina ⏎         87,0   U/L   (44,0 - 147,0)

**2× unit | "x10^6/µL" read as "/uL"**
    r5-10v3 [ES twocol FVUR single]  Hematíes * 3,650 x10^6/µL [4,200 - 5,900]  →  read 3.65 /uL [4.2, 5.9]
    r5-21v3 [ES plain VFUR single]  Eritrocitos 6,31 * x10^6/µL 4,20 - 5,90  →  read 6.31 /uL [4.2, 5.9] H

**2× miss | hba1c | "HBA1C"**
    r5-12v2 [DE leaders VFUR single]  HBA1C ............................. 34 mmol/mol (20 - 38)
    r5-14v3 [DE plain VURF single]  HBA1C 4,7 % (4,0 - 5,6)

**2× unit | "mii/µL" not recognised**
    r5-12v4 [RO plain VFUR single]  Leucocite 6,5 mii/µL [4,0 - 11,0]  →  read 6.5  [4, 11]
    r5-16v4 [RO plain VFUR single]  Leucocite 15,600 H mii/µL 4,000 – 11,000  →  read 15.6  [4, 11] H

**2× not on the report | crp | read from "Proteina C reactiva"**
    r5-12v4 [RO plain]  Proteina C reactiva = 1.7 mg/L
    r5-14v0 [RO leaders]  Proteina C reactiva = 2.4 mg/L

**2× miss | egfr | "eGFR (CKD-EPI)"**
    r5-13v2 [DE leaders VURF wide]  eGFR (CKD-EPI) ....................   101   mL/min/1.73m2   >= 60
    r5-19v2 [DE wrap VURF wide]  eGFR (CKD-EPI) ⏎         109   mL/min/1.73m2   >60

…and 111 smaller groups.
