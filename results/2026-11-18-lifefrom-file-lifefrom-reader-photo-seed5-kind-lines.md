# Lab-report reader stress test

97 generated reports, 1792 rows with a known answer, seed 5, only kind=lines. Read in 113.7 s (1172.2 ms a report).

| Outcome | Rows | Share | 95% interval |
|---|---|---|---|
| ok | 1351 | 75.4% | 73.34–77.33% |
| unit | 159 | 8.9% | 7.64–10.28% |
| unconverted | 0 | 0.0% | 0.00–0.21% |
| wrong | 42 | 2.3% | 1.74–3.15% |
| miss | 240 | 13.4% | 11.89–15.05% |

- **Critical values:** 28 of 31 caught (90.3%, interval 75.10–96.65%); 3 lost because the row was not read, 0 because it was misread. False critical alarms: 5.
- **Rows that are not on the report:** 8 (of 1561 rows read).
- **Lab's flag:** ok 1444, missed 58, wrong 2, invented 6.
- **Reference range:** ok 1375, missed 118, wrong 17.
- **Collection date:** ok 75, missed 21, wrong 1.
- **Wrong values printed in a unit that needs converting:** 20 of 42 (47.6%).
- **Format invariance** (5 printings of each set of results): of 438 markers, read right in every printing 163 (37.2%), right in some printings but not others 266 (60.7%), never right 9. Critical results caught in every printing: 5 of 8; caught in some printings only: 3.

## By locale
| locale | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| DE | 380 | 63.2% | 13.7% | 0.0% | 7.1% | 16.1% |
| RO | 338 | 66.0% | 10.9% | 0.0% | 1.5% | 21.6% |
| ES | 370 | 70.0% | 8.6% | 0.0% | 0.3% | 21.1% |
| UK | 312 | 83.7% | 8.0% | 0.0% | 2.2% | 6.1% |
| US | 392 | 93.9% | 3.3% | 0.0% | 0.5% | 2.3% |

## By kind
| kind | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| lines | 1792 | 75.4% | 8.9% | 0.0% | 2.3% | 13.4% |

## By variant
| variant | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| leaders | 88 | 39.8% | 8.0% | 0.0% | 20.5% | 31.8% |
| twocol | 191 | 40.3% | 7.9% | 0.0% | 0.0% | 51.8% |
| glue | 117 | 76.1% | 9.4% | 0.0% | 6.8% | 7.7% |
| unitspace | 176 | 77.3% | 11.9% | 0.0% | 0.6% | 10.2% |
| wrap | 55 | 81.8% | 3.6% | 0.0% | 0.0% | 14.5% |
| plain | 1131 | 82.9% | 9.0% | 0.0% | 1.2% | 6.8% |
| colon | 34 | 91.2% | 2.9% | 0.0% | 2.9% | 2.9% |

## By units
| units | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| SI | 438 | 74.2% | 8.7% | 0.0% | 6.4% | 10.7% |
| conventional | 1354 | 75.8% | 8.9% | 0.0% | 1.0% | 14.3% |

## By decimal
| decimal | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| comma | 974 | 66.2% | 11.4% | 0.0% | 3.4% | 19.0% |
| point | 818 | 86.3% | 5.9% | 0.0% | 1.1% | 6.7% |

## By sep
| sep | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| single | 479 | 73.5% | 7.5% | 0.0% | 3.1% | 15.9% |
| wide | 1133 | 75.5% | 9.2% | 0.0% | 2.4% | 13.0% |
| tab | 180 | 80.0% | 10.6% | 0.0% | 0.0% | 9.4% |

## By order
| order | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| FVUR | 79 | 63.3% | 3.8% | 0.0% | 0.0% | 32.9% |
| VURF | 476 | 70.6% | 9.2% | 0.0% | 2.7% | 17.4% |
| VFUR | 1030 | 75.0% | 10.5% | 0.0% | 2.6% | 11.9% |
| VFRU | 207 | 93.2% | 1.9% | 0.0% | 1.0% | 3.9% |

## By marker
| marker | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| rbc | 51 | 29.4% | 56.9% | 0.0% | 2.0% | 11.8% |
| platelet-count | 47 | 31.9% | 46.8% | 0.0% | 2.1% | 19.1% |
| wbc | 46 | 32.6% | 56.5% | 0.0% | 0.0% | 10.9% |
| tsh | 39 | 41.0% | 53.8% | 0.0% | 2.6% | 2.6% |
| transferrin-saturation | 24 | 50.0% | 20.8% | 0.0% | 0.0% | 29.2% |
| hematocrit | 56 | 55.4% | 25.0% | 0.0% | 7.1% | 12.5% |
| ferritin | 24 | 62.5% | 8.3% | 0.0% | 4.2% | 25.0% |
| mcv | 48 | 62.5% | 22.9% | 0.0% | 2.1% | 12.5% |
| albumin-serum | 31 | 64.5% | 0.0% | 0.0% | 0.0% | 35.5% |
| folate-serum | 49 | 65.3% | 0.0% | 0.0% | 2.0% | 32.7% |
| uric-acid | 36 | 66.7% | 0.0% | 0.0% | 0.0% | 33.3% |
| hba1c | 46 | 69.6% | 8.7% | 0.0% | 0.0% | 21.7% |
| free-t4 | 36 | 72.2% | 2.8% | 0.0% | 0.0% | 25.0% |
| total-protein | 38 | 73.7% | 0.0% | 0.0% | 7.9% | 18.4% |
| alt | 62 | 74.2% | 6.5% | 0.0% | 3.2% | 16.1% |
| alp | 53 | 75.5% | 5.7% | 0.0% | 3.8% | 15.1% |
| ggt | 48 | 77.1% | 6.3% | 0.0% | 0.0% | 16.7% |
| vitamin-d-25-oh | 46 | 78.3% | 0.0% | 0.0% | 2.2% | 19.6% |
| blood-urea-nitrogen | 42 | 78.6% | 0.0% | 0.0% | 4.8% | 16.7% |
| phosphorus-serum | 38 | 78.9% | 0.0% | 0.0% | 2.6% | 18.4% |
| creatinine-serum | 31 | 80.6% | 0.0% | 0.0% | 3.2% | 16.1% |
| mch | 42 | 81.0% | 2.4% | 0.0% | 0.0% | 16.7% |
| egfr | 43 | 81.4% | 0.0% | 0.0% | 0.0% | 18.6% |
| chloride-serum | 34 | 82.4% | 5.9% | 0.0% | 2.9% | 8.8% |
| hemoglobin | 58 | 82.8% | 3.4% | 0.0% | 5.2% | 8.6% |
| free-t3 | 44 | 84.1% | 0.0% | 0.0% | 2.3% | 13.6% |
| serum-iron | 19 | 84.2% | 15.8% | 0.0% | 0.0% | 0.0% |
| ast | 46 | 84.8% | 8.7% | 0.0% | 6.5% | 0.0% |
| vitamin-b12 | 53 | 84.9% | 0.0% | 0.0% | 3.8% | 11.3% |
| hs-crp | 41 | 85.4% | 0.0% | 0.0% | 0.0% | 14.6% |
| sodium-serum | 46 | 87.0% | 2.2% | 0.0% | 4.3% | 6.5% |
| testosterone-total | 50 | 88.0% | 0.0% | 0.0% | 2.0% | 10.0% |
| glucose-fasting | 43 | 88.4% | 0.0% | 0.0% | 2.3% | 9.3% |
| total-bilirubin | 56 | 89.3% | 0.0% | 0.0% | 3.6% | 7.1% |
| hdl-cholesterol | 48 | 89.6% | 0.0% | 0.0% | 0.0% | 10.4% |
| magnesium-serum | 41 | 90.2% | 0.0% | 0.0% | 0.0% | 9.8% |
| triglycerides | 43 | 93.0% | 0.0% | 0.0% | 2.3% | 4.7% |
| mchc | 48 | 93.8% | 0.0% | 0.0% | 0.0% | 6.3% |
| calcium-total | 33 | 93.9% | 0.0% | 0.0% | 3.0% | 3.0% |
| potassium-serum | 38 | 94.7% | 2.6% | 0.0% | 0.0% | 2.6% |
| ldl-cholesterol | 41 | 95.1% | 0.0% | 0.0% | 2.4% | 2.4% |
| total-cholesterol | 34 | 97.1% | 0.0% | 0.0% | 2.9% | 0.0% |

## What went wrong, most common first

**24× flag missed | arrows VFUR**
    r5-6v0 [RO glue VFUR wide]  Hemoglobina                          24,8   ↑   g/dL   12,0 – 17,5  →  read 24.8 g/dL [12, 17.5]
    r5-6v0 [RO glue VFUR wide]  Hematocrit                           58,3   ↑   %   36,0 – 50,0  →  read 58.3 % [36, 50]
    r5-6v0 [RO glue VFUR wide]  25-OH-Vitamina D                     21   ↓   ng/mL   30 – 100  →  read 21 ng/mL [30, 100]

**23× unit | "%" not recognised**
    r5-1v4 [RO plain VFUR wide]  COEFICIENT DE SATURAȚIE A TRANSFERINEI   35,00   %   20,00-50,00  →  read 35  [20, 50]
    r5-2v0 [ES plain VFUR wide]  Hematocrito                          41,7   %   (36,0 - 50,0)  →  read 41.7  [36, 50]
    r5-2v1 [US plain VFUR wide]  HEMATOCRIT                           41.7   %   36.0-50.0  →  read 41.7  [36, 50]

**20× date missed | ES lines**
    r5-1v3  want 2026-02-02 read null
    r5-2v0  want 2026-08-03 read null
    r5-3v3  want 2026-03-27 read null

**19× range missed | DE paren | two-sided**
    r5-4v3 [DE plain VURF wide]  AST (GOT)                            14,00   U/l   (10,00 - 40,00)  →  read 14 
    r5-12v2 [DE leaders VFUR single]  HARNSTOFF-N ....................... 8 mg/dl (7 - 25)  →  read 8 mg/dL
    r5-12v2 [DE leaders VFUR single]  NATRIUM ........................... 76 - mmol/l (135 - 145)  →  read 76 mmol/L

**14× unit | "U/l" not recognised**
    r5-2v3 [DE plain VFUR wide]  Alkalische Phosphatase               133   U/l   (44 - 147)  →  read 133  [44, 147]
    r5-2v4 [RO glue VURF single]  TGO (AST) 38.00U/l [10.00 - 40.00]  →  read 38  [10, 40]
    r5-3v0 [DE plain VURF wide]  ALKALISCHE PHOSPHATASE               68,00   U/l   44,00-147,00  →  read 68  [44, 147]

**13× flag missed | arrows VURF**
    r5-5v3 [DE plain VURF wide]  GGT                                  7   U/l   8 - 61   ↓  →  read 7 U/L [8, 61]
    r5-5v3 [DE plain VURF wide]  Leukozyten                           19,0   G/l   4,0 - 11,0   ↑  →  read 19  [4, 11]
    r5-5v3 [DE plain VURF wide]  Hämoglobin                           216   g/l   120 - 175   ↑  →  read 21.6 g/dL [12, 17.5]

**13× range missed | US spaced | two-sided**
    r5-8v1 [US plain VFUR wide]  TESTOSTERONE                         370   ng/dL   264 - 916  →  read 370 ng/dL
    r5-11v1 [US plain VFUR single]  BILIRUBIN, TOTAL 0.4 mg/dL 0.2 - 1.2  →  read 0.4 mg/dL
    r5-11v1 [US plain VFUR single]  FOLATE, SERUM 20.9 H ng/mL 3.0 - 20.0  →  read 20.9 ng/mL H

**11× range missed | UK paren | two-sided**
    r5-4v2 [UK twocol VURF wide]  Bilirubin                            17   µmol/L   (3 - 21)  →  read 0.99 mg/dL L
    r5-12v1 [UK plain VURF wide]  Fasting glucose                      5.2   mmol/L   (3.9 - 5.5)  →  read 93.7 mg/dL
    r5-12v1 [UK plain VURF wide]  Blood urea nitrogen                  8   mg/dL   (7 - 25)  →  read 8 mg/dL

**11× range missed | RO spaced | two-sided**
    r5-5v0 [RO leaders VFUR wide]  ALT (TGP) .........................   16,0   U/L   7,0 - 56,0  →  read 16 U/L
    r5-5v0 [RO leaders VFUR wide]  HEMOGLOBINĂ .......................   21,60   g/dl   12,00 - 17,50  →  read 21.6 g/dL
    r5-5v0 [RO leaders VFUR wide]  HEMATOCRIT ........................   49,80   %   36,00 - 50,00  →  read 49.8 

**10× range missed | UK dash | two-sided**
    r5-10v1 [UK plain VFUR wide]  Glucose                              3.7   L   mmol/L   3.9 – 5.5  →  read 66.7 mg/dL L
    r5-10v1 [UK plain VFUR wide]  Sodium                               149   H   mmol/L   135 – 145  →  read 149 mmol/L H
    r5-10v1 [UK plain VFUR wide]  Magnesium                            0.74   mmol/L   0.70 – 0.99  →  read 1.8 mg/dL

**9× unit | "µUI/mL" not recognised**
    r5-0v4 [RO plain VURF single]  TSH 0,22 µUI/mL 0,40 – 4,00  →  read 0.22  [0.4, 4]
    r5-4v4 [ES unitspace VURF wide]  TSH                                  3,330   µUI / mL   (0,400 - 4,000)  →  read 3.33  [0.4, 4]
    r5-5v0 [RO leaders VFUR wide]  TSH ...............................   0,290   µUI/mL   0,400 - 4,000  →  read 0.29  [0.4, 4]

**9× flag missed | plusminus VFUR**
    r5-9v2 [DE plain VFUR wide]  Natrium                              133   -   mmol/l   135 - 145  →  read 133 mmol/L [135, 145]
    r5-9v2 [DE plain VFUR wide]  Kalium                               2,8   -   mmol/l   3,5 - 5,1  →  read 2.8 mmol/L
    r5-9v2 [DE plain VFUR wide]  Thrombozyten                         75   -   Tsd/µl   150 - 400  →  read 75  [150, 400]

**9× range missed | DE bracket | two-sided**
    r5-10v2 [DE plain VFUR wide]  Harnstoff-N                          18   mg/dl   [7 - 25]  →  read 18 mg/dL
    r5-10v2 [DE plain VFUR wide]  GPT (ALT)                            27   U/l   [7 - 56]  →  read 27 U/L
    r5-13v2 [DE leaders VURF wide]  Kalium ............................   4,7   mmol/l   [3,5 - 5,1]  →  read 4.7 mmol/L

**8× miss | folate-serum | "Folsäure"**
    r5-1v2 [DE plain VFUR wide]  Folsäure                             15,30   ng/ml   3,00 – 20,00
    r5-7v2 [DE plain VFUR wide]  Folsäure                             29,5   nmol/l   6,8-45,3
    r5-8v2 [DE twocol VFUR wide]  Folsäure                             9,7   ng/ml   3,0-20,0

**8× miss | folate-serum | "Ácido fólico"**
    r5-1v3 [ES unitspace VURF wide]  Ácido fólico                         15,3   ng / mL   3,0 – 20,0
    r5-3v3 [ES plain VURF single]  Ácido fólico 9,4 ng/mL 3,0 - 20,0
    r5-8v3 [ES plain VFUR single]  Ácido fólico 9,7 ng/mL 3,0-20,0

**8× unit | "Tsd/µl" not recognised**
    r5-2v3 [DE plain VFUR wide]  Thrombozyten                         246   Tsd/µl   (150 - 400)  →  read 246  [150, 400]
    r5-4v3 [DE plain VURF wide]  Leukozyten                           2,400   Tsd/µl   (4,000 - 11,000)   -  →  read 2.4  [4, 11]
    r5-5v3 [DE plain VURF wide]  Thrombozyten                         394   Tsd/µl   150 - 400  →  read 394  [150, 400]

**8× range missed | RO dash | two-sided**
    r5-7v4 [RO plain VFUR wide]  Azot ureic (BUN)                     20   mg/dL   7 – 25  →  read 20 mg/dL
    r5-7v4 [RO plain VFUR wide]  Acid uric                            3,2   mg/dL   2,5 – 7,0  →  read 3.2 mg/dL
    r5-7v4 [RO plain VFUR wide]  Potasiu                              4,6   mmol/L   3,5 – 5,1  →  read 4.6 mmol/L

**7× miss | uric-acid | "Harnsäure"**
    r5-1v2 [DE plain VFUR wide]  Harnsäure                            3,20   mg/dl   2,50 – 7,00
    r5-7v2 [DE plain VFUR wide]  Harnsäure                            190   µmol/l   149-416
    r5-9v2 [DE plain VFUR wide]  Harnsäure                            399   µmol/l   149 - 416

**7× miss | phosphorus-serum | "Fósforo"**
    r5-1v3 [ES unitspace VURF wide]  Fósforo                              3,6   mg / dL   2,5 – 4,5
    r5-10v3 [ES twocol FVUR single]  Fósforo 3,00 mg/dL [2,50 - 4,50]
    r5-12v3 [ES plain VFUR tab]  Fósforo	5,3	H	mg/dL	[2,5 - 4,5]

**7× unit | "10^3/µL" read as "/pl"**
    r5-1v4 [RO plain VFUR wide]  NUMĂR DE LEUCOCITE                   8,500   10^3/µL   4,000-11,000  →  read 8.5 /pl [4, 11]
    r5-1v4 [RO plain VFUR wide]  TROMBOCITE                           340,00   10^3/µL   150,00-400,00  →  read 340 /pl [150, 400]
    r5-2v0 [ES plain VFUR wide]  Plaquetas                            246   10^3/µL   (150 - 400)  →  read 246 /pl [150, 400]

**7× unit | "fl" not recognised**
    r5-1v4 [RO plain VFUR wide]  VEM                                  84,600   fl   80,000-100,000  →  read 84.6  [80, 100]
    r5-2v3 [DE plain VFUR wide]  MCV                                  89,5   fl   (80,0 - 100,0)  →  read 89.5  [80, 100]
    r5-5v0 [RO leaders VFUR wide]  VOLUM ERITROCITAR MEDIU (VEM) .....   145,60   fl   80,00 - 100,00  →  read 145.6  [80, 100]

**6× miss | ggt | "GGT"**
    r5-0v0 [US twocol VFRU wide]  GGT                                  25   8-61 U/L
    r5-0v2 [DE twocol VURF tab]  GGT	25	U/l	[8 - 61]
    r5-5v0 [RO leaders VFUR wide]  GGT ...............................   7,0   U/L   8,0 - 61,0

**6× unit | "G/l" not recognised**
    r5-1v2 [DE plain VFUR wide]  Leukozyten                           8,50   G/l   4,00 – 11,00  →  read 8.5  [4, 11]
    r5-1v2 [DE plain VFUR wide]  Thrombozyten                         340,0   G/l   150,0 – 400,0  →  read 340  [150, 400]
    r5-5v3 [DE plain VURF wide]  Leukozyten                           19,0   G/l   4,0 - 11,0   ↑  →  read 19  [4, 11]

**6× range missed | ES dash | two-sided**
    r5-1v3 [ES unitspace VURF wide]  Sodio                                137   mmol / L   135 – 145  →  read 137 mmol/L
    r5-9v3 [ES unitspace FVUR single]  HEMOGLOBINA GLICADA (HBA1C) 4,6 % 4,0 – 5,6  →  read 4.6 %
    r5-9v3 [ES unitspace FVUR single]  NITRÓGENO UREICO (BUN) 21 mg / dL 7 – 25  →  read 21 mg/dL

**6× unit | "µU/ml" not recognised**
    r5-4v3 [DE plain VURF wide]  TSH basal                            3,3300   µU/ml   (0,4000 - 4,0000)  →  read 3.33  [0.4, 4]
    r5-5v3 [DE plain VURF wide]  TSH basal                            0,29   µU/ml   0,40 - 4,00   ↓  →  read 0.29  [0.4, 4]
    r5-7v2 [DE plain VFUR wide]  TSH                                  0,730   µU/ml   0,40-4,00  →  read 0.73  [0.4, 4]

**6× range missed | DE spaced | two-sided**
    r5-5v3 [DE plain VURF wide]  Gesamtbilirubin                      9   µmol/l   3 - 21  →  read 0.53 mg/dL
    r5-5v3 [DE plain VURF wide]  Vitamin D (25-OH)                    210   nmol/l   75 - 250  →  read 84.1 ng/mL
    r5-9v2 [DE plain VFUR wide]  Glucose                              4,5   mmol/l   3,9 - 5,5  →  read 81.1 mg/dL

**6× miss | blood-urea-nitrogen | "Nitrógeno ureico (BUN)"**
    r5-10v3 [ES twocol FVUR single]  Nitrógeno ureico (BUN) 18,0 mg/dL [7,0 - 25,0]
    r5-12v3 [ES plain VFUR tab]  Nitrógeno ureico (BUN)	8	mg/dL	[7 - 25]
    r5-13v3 [ES plain VURF wide]  Nitrógeno ureico (BUN)               5   mg/dL   [7 - 25]   *

**5× unit | "×10⁹/L" not recognised**
    r5-1v1 [UK plain VFUR single]  Platelet count 340 ×10⁹/L 150 - 400  →  read 340 
    r5-4v2 [UK twocol VURF wide]  White cell count                     2.4   ×10⁹/L   (4.0 - 11.0)   LOW  →  read 2.4  [4, 11]
    r5-6v2 [UK unitspace VURF single]  Platelets 276 ×10⁹ / L 150 - 400  →  read 276  [150, 400]

**5× unit | "x10^3/µL" read as "/pl"**
    r5-1v3 [ES unitspace VURF wide]  Leucocitos                           8,5   x10^3 / µL   4,0 – 11,0  →  read 8.5 /pl [4, 11]
    r5-4v4 [ES unitspace VURF wide]  LEUCOCITOS                           2,40   x10^3 / µL   (4,00 - 11,00)  →  read 2.4 /pl [4, 11]
    r5-6v4 [ES plain VFUR wide]  LEUCOCITOS                           10,1   x10^3/µL   [4,0 - 11,0]  →  read 10.1 /pl [4, 11]

**5× miss | platelet-count | "Număr de trombocite"**
    r5-2v4 [RO glue VURF single]  Număr de trombocite 246.00mii/µL [150.00 - 400.00]
    r5-6v0 [RO glue VFUR wide]  Număr de trombocite                  276mii/µL   150 – 400
    r5-7v4 [RO plain VFUR wide]  Număr de trombocite                  455   ↑   mii/µL   150 – 400

**5× unit | "x10^6/µL" read as "/pl"**
    r5-4v4 [ES unitspace VURF wide]  HEMATÍES                             4,330   x10^6 / µL   (4,200 - 5,900)  →  read 4.33 /pl [4.2, 5.9]
    r5-6v4 [ES plain VFUR wide]  ERITROCITOS                          5,69   x10^6/µL   [4,20 - 5,90]  →  read 5.69 /pl [4.2, 5.9]
    r5-8v3 [ES plain VFUR single]  Hematíes 4,21 x10^6/µL 4,20-5,90  →  read 4.21 /pl [4.2, 5.9]

**5× range missed | RO bracket | two-sided**
    r5-12v4 [RO plain VFUR single]  Gama-glutamiltransferaza (GGT) 59 U/L [8 - 61]  →  read 59 U/L
    r5-12v4 [RO plain VFUR single]  Volum eritrocitar mediu (VEM) 53,2 fL [80,0 - 100,0]  →  read 53.2 fL
    r5-14v0 [RO leaders VURF wide]  Azot ureic (BUN) ..................   34   mg/dL   [7 - 25]   ↑  →  read 34 mg/dL

**4× miss | transferrin-saturation | "Transferrinsättigung"**
    r5-0v2 [DE twocol VURF tab]  Transferrinsättigung	48	%	[20 - 50]
    r5-1v2 [DE plain VFUR wide]  Transferrinsättigung                 35,0   %   20,0 – 50,0
    r5-2v3 [DE plain VFUR wide]  Transferrinsättigung                 24   %   (20 - 50)

**4× range missed | UK spaced | two-sided**
    r5-1v1 [UK plain VFUR single]  Platelet count 340 ×10⁹/L 150 - 400  →  read 340 
    r5-22v1 [UK plain VURF tab]  Creatinine	43	µmol/L	53 - 115	LOW  →  read 0.49 mg/dL L
    r5-22v1 [UK plain VURF tab]  Chloride	124	mmol/L	98 - 107	HIGH  →  read 124 mmol/L H

**4× unit | "T/l" not recognised**
    r5-1v2 [DE plain VFUR wide]  Erythrozyten                         5,350   T/l   4,200 – 5,900  →  read 5.35  [4.2, 5.9]
    r5-2v3 [DE plain VFUR wide]  Erythrozyten                         5,25   T/l   (4,20 - 5,90)  →  read 5.25  [4.2, 5.9]
    r5-4v3 [DE plain VURF wide]  Erythrozyten                         4,3300   T/l   (4,2000 - 5,9000)  →  read 4.33  [4.2, 5.9]

**4× miss | uric-acid | "Ácido úrico"**
    r5-1v3 [ES unitspace VURF wide]  Ácido úrico                          3,2   mg / dL   2,5 – 7,0
    r5-10v3 [ES twocol FVUR single]  Ácido úrico * 1,40 mg/dL [2,50 - 7,00]
    r5-16v3 [ES plain FVUR single]  Ácido úrico 4,900 mg/dL [2,500 - 7,000]

**4× miss | albumin-serum | "Albúmina"**
    r5-1v3 [ES unitspace VURF wide]  Albúmina                             3,9   g / dL   3,5 – 5,0
    r5-13v3 [ES plain VURF wide]  Albúmina                             3,6   g/dL   [3,5 - 5,0]
    r5-14v4 [ES unitspace VFUR wide]  Albúmina                             2,800   ↓   g / dL   [3,500 - 5,000]

**4× miss | alp | "Fosfatază alcalină"**
    r5-2v4 [RO glue VURF single]  Fosfatază alcalină 133.00U/l [44.00 - 147.00]
    r5-4v0 [RO twocol VURF wide]  Fosfatază alcalină                   136   U/l   [44 - 147]
    r5-16v4 [RO plain VFUR single]  Fosfatază alcalină 95,00 U/L 44,00 – 147,00

**4× flag missed | HL VURF**
    r5-4v0 [RO twocol VURF wide]  Leucocite                            2,4   mii/µL   [4,0 - 11,0]   L  →  read 2.4 /uL [4, 11]
    r5-19v2 [DE wrap VURF wide]  Magnesium                            3,4   mg/dl   (1,7 - 2,4)   H  →  read 3.4 mg/dL [1.7, 2.4]
    r5-22v3 [ES twocol VURF single]  Creatinina 0,49 mg/dL 0,60 - 1,30 L  →  read 0.49 mg/dL [0.6, 1.3]

**4× unit | "x10^9/L" not recognised**
    r5-6v2 [UK unitspace VURF single]  White cell count 10.1 x10^9 / L 4.0 - 11.0  →  read 10.1  [4, 11]
    r5-12v1 [UK plain VURF wide]  Platelet count                       1149   x10^9/L   (150 - 400)  →  read 1149  [150, 400]
    r5-21v1 [UK plain VURF wide]  Platelets                            259   x10^9/L   150 - 400  →  read 259  [150, 400]

**4× miss | mch | "Hemoglobină eritrocitară medie (HEM)"**
    r5-7v4 [RO plain VFUR wide]  Hemoglobină eritrocitară medie (HEM)   35,9   ↑   pg   27,0 – 33,0
    r5-9v4 [RO plain VURF wide]  Hemoglobină eritrocitară medie (HEM)   44,9   pg   27,0 – 33,0
    r5-16v4 [RO plain VFUR single]  Hemoglobină eritrocitară medie (HEM) 28,400 pg 27,000 – 33,000

**4× miss | hdl-cholesterol | "Colesterol HDL"**
    r5-10v3 [ES twocol FVUR single]  Colesterol HDL 49,0 mg/dL >40,0
    r5-12v3 [ES plain VFUR tab]  Colesterol HDL	50	mg/dL	>40
    r5-19v4 [RO twocol VFUR wide]  Colesterol HDL                       65   mg/dL   > 40

**4× range missed | ES bracket | two-sided**
    r5-12v3 [ES plain VFUR tab]  Hemoglobina	18,6	H	g/dL	[12,0 - 17,5]  →  read 18.6 g/dL H
    r5-13v3 [ES plain VURF wide]  Ácido úrico                          4,9   mg/dL   [2,5 - 7,0]  →  read 4.9 mg/dL
    r5-13v3 [ES plain VURF wide]  Potasio                              4,7   mmol/L   [3,5 - 5,1]  →  read 4.7 mmol/L

**4× miss | hs-crp | "Proteina C reactivă înalt sensibilă (hs-CRP)"**
    r5-12v4 [RO plain VFUR single]  Proteina C reactivă înalt sensibilă (hs-CRP) 1,7 mg/L < 3,0
    r5-14v0 [RO leaders VURF wide]  Proteina C reactivă înalt sensibilă (hs-CRP) ....   2,4   mg/L   < 3,0
    r5-16v4 [RO plain VFUR single]  Proteina C reactivă înalt sensibilă (hs-CRP) 3,800 H mg/L <3,000

**4× range missed | RO paren | two-sided**
    r5-19v4 [RO twocol VFUR wide]  Acid uric                            7.4   H   mg/dL   (2.5 - 7.0)  →  read 7.4 mg/dL H
    r5-19v4 [RO twocol VFUR wide]  Clor seric                           103   mmol/l   (98 - 107)  →  read 103 mmol/L
    r5-19v4 [RO twocol VFUR wide]  Bilirubina totala                    1.9   H   mg/dL   (0.2 - 1.2)  →  read 1.9 mg/dL H

**3× miss | egfr | "eGFR"**
    r5-1v1 [UK plain VFUR single]  eGFR 107 mL/min/1.73m2 > 60
    r5-9v1 [UK glue VFUR wide]  eGFR                                 63mL/min/1.73m2   >= 60
    r5-14v0 [RO leaders VURF wide]  eGFR ..............................   64   mL/min/1.73m2   >= 60

**3× unit | "10^6/µL" read as "/pl"**
    r5-1v3 [ES unitspace VURF wide]  Eritrocitos                          5,35   10^6 / µL   4,20 – 5,90  →  read 5.35 /pl [4.2, 5.9]
    r5-2v4 [RO glue VURF single]  Eritrocite 5.2500 10^6/µL [4.2000 - 5.9000]  →  read 5.25 /pl [4.2, 5.9]
    r5-6v0 [RO glue VFUR wide]  Eritrocite                           5,69   10^6/µL   4,20 – 5,90  →  read 5.69 /pl [4.2, 5.9]

**3× miss | vitamin-d-25-oh | "25-OH Vitamina D"**
    r5-1v3 [ES unitspace VURF wide]  25-OH Vitamina D                     24   ng / mL   30 – 100   L
    r5-8v3 [ES plain VFUR single]  25-OH Vitamina D 41 ng/mL 30-100
    r5-16v3 [ES plain FVUR single]  25-OH Vitamina D 41,00 ng/mL [30,00 - 100,00]

**3× flag missed | plusminus VURF**
    r5-3v0 [DE plain VURF wide]  GGT                                  5,00   U/l   8,00-61,00   -  →  read 5 U/L [8, 61]
    r5-4v3 [DE plain VURF wide]  Leukozyten                           2,400   Tsd/µl   (4,000 - 11,000)   -  →  read 2.4  [4, 11]
    r5-4v3 [DE plain VURF wide]  Hämatokrit                           23,800   %   (36,000 - 50,000)   -  →  read 23.8 % [36, 50]

**3× flag invented | HL VURF**
    r5-4v0 [RO twocol VURF wide]  TSH                                  3,33   µUI/mL   [0,40 - 4,00]  →  read 3.33 ng/dL [0.4, 4] H
    r5-22v3 [ES twocol VURF single]  Sodio 142 mmol/L 135 - 145  →  read 142 mmol/L [135, 145] H
    r5-22v3 [ES twocol VURF single]  Fosfatasa alcalina 54 U/L 44 - 147  →  read 54 U/L [44, 147] H

**3× flag invented | words VURF**
    r5-4v2 [UK twocol VURF wide]  Bilirubin                            17   µmol/L   (3 - 21)  →  read 0.99 mg/dL L
    r5-4v2 [UK twocol VURF wide]  Haemoglobin                          155   g/L   (120 - 175)  →  read 15.5 g/dL [12, 17.5] L
    r5-4v2 [UK twocol VURF wide]  TSH                                  3.33   mIU/L   (0.40 - 4.00)  →  read 3.33 mIU/L [0.4, 4] H

**3× unit | "*10^3/uL" read as "/uL"**
    r5-5v0 [RO leaders VFUR wide]  TROMBOCITE ........................   394,0   *10^3/uL   150,0 - 400,0  →  read 394 /uL [150, 400]
    r5-10v4 [RO plain VFUR wide]  NUMĂR DE LEUCOCITE                   5.900   *10^3/uL   4.000 – 11.000  →  read 5.9 /uL [4, 11]
    r5-10v4 [RO plain VFUR wide]  NUMĂR DE TROMBOCITE                  395.00   *10^3/uL   150.00 – 400.00  →  read 395 /uL [150, 400]

**3× wrong | hematocrit | comma plain | unit L/l**
    r5-5v3 [DE plain VURF wide]  Hämatokrit                           0,50   L/l   0,36 - 0,50  →  read 0.5  [0.36, 0.5]
    r5-7v2 [DE plain VFUR wide]  Hämatokrit                           0,49   L/l   0,36-0,50  →  read 0.49  [0.36, 0.5]
    r5-17v2 [DE plain VFUR wide]  Hämatokrit                           0,315   L/l   [0,360 - 0,500]  →  read 0.315  [0.36, 0.5]

**3× miss | free-t4 | "fT4"**
    r5-5v3 [DE plain VURF wide]  fT4                                  16,5   pmol/l   10,3 - 23,2
    r5-7v2 [DE plain VFUR wide]  fT4                                  20,1   pmol/l   10,3-23,2
    r5-22v2 [DE glue VFUR wide]  fT4                                  2,11   *   ng/dl   [0,80 - 1,80]

**3× not on the report | total-t4 | read from "£T4"**
    r5-5v3 [DE plain]  £T4 = 16.5 pmol/L
    r5-7v2 [DE plain]  £T4 = 20.1 pmol/L
    r5-22v2 [DE glue]  £T4 = 2.11 ng/dL

**3× miss | alt | "ALT (GPT)"**
    r5-5v4 [ES twocol VFUR wide]  ALT (GPT)                            16,00   U/L   [7,00 - 56,00]
    r5-12v2 [DE leaders VFUR single]  ALT (GPT) ......................... 665 + U/l (7 - 56)
    r5-22v3 [ES twocol VURF single]  ALT (GPT) 31 U/L 7 - 56

**3× miss | mcv | "VCM"**
    r5-5v4 [ES twocol VFUR wide]  VCM                                  145,600   H   fL   [80,000 - 100,000]
    r5-12v3 [ES plain VFUR tab]  VCM	53,2	L	fL	[80,0 - 100,0]
    r5-17v3 [ES wrap VURF wide]  VCM                                  67,40   fL   (80,00 - 100,00)   *

**3× miss | vitamin-b12 | "Vitamina B12"**
    r5-5v4 [ES twocol VFUR wide]  Vitamina B12                         801,00   pg/mL   [200,00 - 900,00]
    r5-10v3 [ES twocol FVUR single]  Vitamina B12 679,0 pg/mL [200,0 - 900,0]
    r5-19v4 [RO twocol VFUR wide]  Vitamina B12                         241   pg/ml   (200 - 900)

**3× miss | wbc | "Număr de leucocite"**
    r5-6v0 [RO glue VFUR wide]  Număr de leucocite                   10,1   10^3/µL   4,0 – 11,0
    r5-7v4 [RO plain VFUR wide]  Număr de leucocite                   10,8   10^3/µL   4,0 – 11,0
    r5-22v4 [RO unitspace VFUR wide]  Număr de leucocite                   43.7   H   mii / µL   4.0 - 11.0

**3× miss | mch | "MCH"**
    r5-6v3 [DE twocol VFUR tab]  MCH	27,200	pg	27,000 - 33,000
    r5-8v0 [UK twocol VFUR wide]  MCH                                  32.30   pg   27.00 – 33.00
    r5-12v2 [DE leaders VFUR single]  MCH ............................... 27,5 pg (27,0 - 33,0)

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

**3× miss | vitamin-d-25-oh | "25-OH VITAMIN D"**
    r5-8v0 [UK twocol VFUR wide]  25-OH VITAMIN D                      102.3   nmol/L   75.0 – 250.0
    r5-11v2 [UK plain VURF single]  25-OH VITAMIN D 55 nmol/L 75 – 250
    r5-14v2 [UK plain VURF wide]  25-OH VITAMIN D                      225   nmol/L   75-250

**3× miss | mcv | "MCV"**
    r5-8v2 [DE twocol VFUR wide]  MCV                                  80,2   fl   80,0-100,0
    r5-12v2 [DE leaders VFUR single]  MCV ............................... 53,2 - fl (80,0 - 100,0)
    r5-21v0 [US unitspace VFRU wide]  MCV                                  58.6 L   80.0-100.0 fL

**3× flag missed | HL VFUR**
    r5-9v1 [UK glue VFUR wide]  MCH                                  44.9   H   pg   27.0 - 33.0  →  read 44.9 pg [27, 33]
    r5-12v3 [ES plain VFUR tab]  Hematíes	3,76	L	mill/mm3	[4,20 - 5,90]  →  read 3.76 mill/mm3 [4.2, 5.9]
    r5-16v4 [RO plain VFUR single]  Trigliceride 209,00 H mg/dl <150,00  →  read 209 mg/dL [, 150]

**3× unit | "x10^12/L" not recognised**
    r5-10v1 [UK plain VFUR wide]  Red cell count                       3.65   L   x10^12/L   4.20 – 5.90  →  read 3.65  [4.2, 5.9] L
    r5-22v1 [UK plain VURF tab]  RBC	4.88	x10^12/L	4.20 - 5.90  →  read 4.88  [4.2, 5.9]
    r5-23v1 [UK plain VFUR tab]  Red cell count	4.41	x10^12/L	4.20-5.90  →  read 4.41  [4.2, 5.9]

**3× miss | hba1c | "HbA1c"**
    r5-10v3 [ES twocol FVUR single]  HbA1c 5,50 % [4,00 - 5,60]
    r5-13v2 [DE leaders VURF wide]  HbA1c .............................   16   mmol/mol   [20 - 38]   ↓
    r5-22v3 [ES twocol VURF single]  HbA1c 5,5 % 4,0 - 5,6

**3× unit | "mil./µL" not recognised**
    r5-10v4 [RO plain VFUR wide]  ERITROCITE                           3.6500   ↓   mil./µL   4.2000 – 5.9000  →  read 3.65  [4.2, 5.9]
    r5-16v4 [RO plain VFUR single]  Eritrocite 6,9400 H mil./µL 4,2000 – 5,9000  →  read 6.94  [4.2, 5.9] H
    r5-22v4 [RO unitspace VFUR wide]  Eritrocite                           4.88   mil. / µL   4.20 - 5.90  →  read 4.88  [4.2, 5.9]

**3× not on the report | protein-c | read from "Proteina C"**
    r5-12v4 [RO plain]  Proteina C = 1.7 mg/L
    r5-14v0 [RO leaders]  Proteina C = 2.4 mg/L
    r5-16v4 [RO plain]  Proteina C = 3.8 mg/L

**3× miss | alt | "TGP (ALT)"**
    r5-14v0 [RO leaders VURF wide]  TGP (ALT) .........................   9   U/l   [7 - 56]
    r5-18v0 [RO twocol VURF wide]  TGP (ALT)                            5   U/l   7-56   *
    r5-19v4 [RO twocol VFUR wide]  TGP (ALT)                            19   U/L   (7 - 56)

**3× unit | "fL" not recognised**
    r5-16v3 [ES plain FVUR single]  VCM 94,100 fL [80,000 - 100,000]  →  read 94.1  [80, 100]
    r5-21v3 [ES plain VFUR single]  VCM 58,6 * fL 80,0 - 100,0  →  read 58.6  [80, 100] L
    r5-23v1 [UK plain VFUR tab]  MCV	80.8	fL	80.0-100.0  →  read 80.8  [80, 100]

**2× unit | "×10⁹/L" read as "x10^9/L"**
    r5-1v1 [UK plain VFUR single]  White cell count 8.5 ×10⁹/L 4.0 - 11.0  →  read 8.5 x10^9/L [4, 11]
    r5-9v1 [UK glue VFUR wide]  Platelets                            75   L   ×10⁹/L   150 - 400  →  read 75 x10^9/L [150, 400] L

**2× unit | "10*12/L" not recognised**
    r5-1v1 [UK plain VFUR single]  RBC 5.35 10*12/L 4.20 - 5.90  →  read 5.35  [4.2, 5.9]
    r5-12v1 [UK plain VURF wide]  Red cell count                       3.76   10*12/L   (4.20 - 5.90)  →  read 3.76 

**2× miss | albumin-serum | "ALBUMINĂ SERICĂ"**
    r5-1v4 [RO plain VFUR wide]  ALBUMINĂ SERICĂ                      3,900   g/dL   3,500-5,000
    r5-10v4 [RO plain VFUR wide]  ALBUMINĂ SERICĂ                      2.500   ↓   g/dL   3.500 – 5.000

**2× miss | transferrin-saturation | "Saturación de transferrina"**
    r5-2v0 [ES plain VFUR wide]  Saturación de transferrina           24   %   (20 - 50)
    r5-16v3 [ES plain FVUR single]  Saturación de transferrina 40,00 % [20,00 - 50,00]

**2× range wrong | US tight | two-sided**
    r5-2v1 [US plain VFUR wide]  RED BLOOD CELL COUNT                 5.25   x10E6/uL   4.20-5.90  →  read 5.25 x10E6/uL [4.2, 5.3]
    r5-14v1 [US plain VFUR single]  GLUCOSE 67 L mg/dL 70-99  →  read 67 mg/dL [70, 39] L

**2× unit | "10*9/L" not recognised**
    r5-2v2 [UK plain VFUR single]  Platelet count 246 10*9/L 150-400  →  read 246  [150, 400]
    r5-23v1 [UK plain VFUR tab]  Platelets	175	10*9/L	150-400  →  read 175  [150, 400]

**2× unit | "µg/L" read as "ng/L"**
    r5-2v2 [UK plain VFUR single]  Ferritin 165 µg/L 30-300  →  read 165 ng/L [30, 300]
    r5-23v1 [UK plain VFUR tab]  Ferritin	138	µg/L	30-300  →  read 138 ng/L [30, 300]

**2× miss | hematocrit | "Hämatokrit"**
    r5-2v3 [DE plain VFUR wide]  Hämatokrit                           41,7   %   (36,0 - 50,0)
    r5-21v2 [DE plain VFUR wide]  Hämatokrit                           40,5   %   36,0-50,0

…and 190 smaller groups.
