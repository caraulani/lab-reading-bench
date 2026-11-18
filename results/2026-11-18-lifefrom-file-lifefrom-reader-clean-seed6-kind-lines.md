# Lab-report reader stress test

43 generated reports, 820 rows with a known answer, seed 6, only kind=lines. Read in 49.1 s (1142.7 ms a report).

| Outcome | Rows | Share | 95% interval |
|---|---|---|---|
| ok | 684 | 83.4% | 80.71–85.80% |
| unit | 48 | 5.9% | 4.44–7.68% |
| unconverted | 0 | 0.0% | 0.00–0.47% |
| wrong | 2 | 0.2% | 0.07–0.88% |
| miss | 86 | 10.5% | 8.57–12.77% |

- **Critical values:** 9 of 9 caught (100.0%, interval 70.08–100.00%); 0 lost because the row was not read, 0 because it was misread. False critical alarms: 0.
- **Rows that are not on the report:** 2 (of 736 rows read).
- **Lab's flag:** ok 710, missed 22.
- **Reference range:** ok 723, wrong 4, missed 5.
- **Collection date:** ok 35, missed 8.
- **Wrong values printed in a unit that needs converting:** 0 of 2 (0.0%).
- **Format invariance** (5 printings of each set of results): of 193 markers, read right in every printing 99 (51.3%), right in some printings but not others 93 (48.2%), never right 1. Critical results caught in every printing: 2 of 2.

## By locale
| locale | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| RO | 176 | 75.0% | 6.8% | 0.0% | 0.0% | 18.2% |
| DE | 120 | 77.5% | 11.7% | 0.0% | 0.0% | 10.8% |
| ES | 156 | 78.8% | 6.4% | 0.0% | 0.6% | 14.1% |
| UK | 193 | 87.6% | 5.2% | 0.0% | 0.0% | 7.3% |
| US | 175 | 95.4% | 1.1% | 0.0% | 0.6% | 2.9% |

## By kind
| kind | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| lines | 820 | 83.4% | 5.9% | 0.0% | 0.2% | 10.5% |

## By variant
| variant | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| wrap | 58 | 48.3% | 6.9% | 0.0% | 0.0% | 44.8% |
| twocol | 60 | 55.0% | 1.7% | 0.0% | 0.0% | 43.3% |
| glue | 76 | 84.2% | 10.5% | 0.0% | 0.0% | 5.3% |
| colon | 85 | 85.9% | 7.1% | 0.0% | 0.0% | 7.1% |
| plain | 508 | 89.6% | 5.3% | 0.0% | 0.4% | 4.7% |
| unitspace | 33 | 93.9% | 6.1% | 0.0% | 0.0% | 0.0% |

## By units
| units | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| conventional | 590 | 82.2% | 5.9% | 0.0% | 0.3% | 11.5% |
| SI | 230 | 86.5% | 5.7% | 0.0% | 0.0% | 7.8% |

## By decimal
| decimal | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| comma | 362 | 76.0% | 8.8% | 0.0% | 0.3% | 14.9% |
| point | 458 | 89.3% | 3.5% | 0.0% | 0.2% | 7.0% |

## By sep
| sep | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| single | 210 | 81.0% | 5.7% | 0.0% | 0.0% | 13.3% |
| wide | 545 | 83.5% | 5.9% | 0.0% | 0.2% | 10.5% |
| tab | 65 | 90.8% | 6.2% | 0.0% | 1.5% | 1.5% |

## By order
| order | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| VURF | 215 | 80.0% | 6.5% | 0.0% | 0.0% | 13.5% |
| FVUR | 37 | 81.1% | 13.5% | 0.0% | 0.0% | 5.4% |
| VFUR | 481 | 83.4% | 6.0% | 0.0% | 0.2% | 10.4% |
| VFRU | 87 | 93.1% | 0.0% | 0.0% | 1.1% | 5.7% |

## By marker
| marker | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| wbc | 17 | 41.2% | 52.9% | 0.0% | 0.0% | 5.9% |
| tsh | 29 | 48.3% | 51.7% | 0.0% | 0.0% | 0.0% |
| platelet-count | 18 | 50.0% | 33.3% | 0.0% | 0.0% | 16.7% |
| rbc | 13 | 53.8% | 30.8% | 0.0% | 0.0% | 15.4% |
| mcv | 18 | 61.1% | 22.2% | 0.0% | 0.0% | 16.7% |
| ferritin | 18 | 61.1% | 16.7% | 0.0% | 0.0% | 22.2% |
| alp | 8 | 75.0% | 12.5% | 0.0% | 0.0% | 12.5% |
| vitamin-d-25-oh | 16 | 75.0% | 0.0% | 0.0% | 0.0% | 25.0% |
| ast | 17 | 76.5% | 5.9% | 0.0% | 0.0% | 17.6% |
| transferrin-saturation | 17 | 76.5% | 0.0% | 0.0% | 0.0% | 23.5% |
| egfr | 18 | 77.8% | 0.0% | 0.0% | 0.0% | 22.2% |
| hba1c | 21 | 81.0% | 4.8% | 0.0% | 0.0% | 14.3% |
| hs-crp | 21 | 81.0% | 0.0% | 0.0% | 0.0% | 19.0% |
| folate-serum | 16 | 81.3% | 0.0% | 0.0% | 0.0% | 18.8% |
| phosphorus-serum | 22 | 81.8% | 0.0% | 0.0% | 4.5% | 13.6% |
| total-protein | 22 | 81.8% | 0.0% | 0.0% | 0.0% | 18.2% |
| free-t3 | 29 | 82.8% | 0.0% | 0.0% | 0.0% | 17.2% |
| hdl-cholesterol | 26 | 84.6% | 0.0% | 0.0% | 0.0% | 15.4% |
| uric-acid | 20 | 85.0% | 0.0% | 0.0% | 0.0% | 15.0% |
| albumin-serum | 20 | 85.0% | 0.0% | 0.0% | 0.0% | 15.0% |
| alt | 14 | 85.7% | 14.3% | 0.0% | 0.0% | 0.0% |
| triglycerides | 14 | 85.7% | 0.0% | 0.0% | 0.0% | 14.3% |
| total-bilirubin | 8 | 87.5% | 0.0% | 0.0% | 0.0% | 12.5% |
| blood-urea-nitrogen | 25 | 88.0% | 0.0% | 0.0% | 0.0% | 12.0% |
| ldl-cholesterol | 25 | 88.0% | 0.0% | 0.0% | 0.0% | 12.0% |
| hemoglobin | 18 | 88.9% | 0.0% | 0.0% | 0.0% | 11.1% |
| testosterone-total | 11 | 90.9% | 0.0% | 0.0% | 0.0% | 9.1% |
| serum-iron | 22 | 90.9% | 4.5% | 0.0% | 4.5% | 0.0% |
| calcium-total | 25 | 92.0% | 0.0% | 0.0% | 0.0% | 8.0% |
| total-cholesterol | 26 | 92.3% | 0.0% | 0.0% | 0.0% | 7.7% |
| magnesium-serum | 14 | 92.9% | 0.0% | 0.0% | 0.0% | 7.1% |
| hematocrit | 14 | 92.9% | 0.0% | 0.0% | 0.0% | 7.1% |
| ggt | 17 | 94.1% | 5.9% | 0.0% | 0.0% | 0.0% |
| mch | 17 | 94.1% | 0.0% | 0.0% | 0.0% | 5.9% |
| free-t4 | 34 | 94.1% | 0.0% | 0.0% | 0.0% | 5.9% |
| mchc | 18 | 94.4% | 0.0% | 0.0% | 0.0% | 5.6% |
| creatinine-serum | 20 | 95.0% | 0.0% | 0.0% | 0.0% | 5.0% |
| glucose-fasting | 25 | 96.0% | 0.0% | 0.0% | 0.0% | 4.0% |
| potassium-serum | 25 | 96.0% | 0.0% | 0.0% | 0.0% | 4.0% |
| sodium-serum | 25 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| chloride-serum | 25 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| vitamin-b12 | 12 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## What went wrong, most common first

**16× flag missed | arrows VFUR**
    r6-0v2 [DE glue VFUR wide]  MAGNESIUM                            3,60   ↑   mg/dl   [1,70 - 2,40]  →  read 3.6 mg/dL [1.7, 2.4]
    r6-0v2 [DE glue VFUR wide]  PHOSPHAT                             1,40   ↓   mg/dl   [2,50 - 4,50]  →  read 1.4 mg/dL [2.5, 4.5]
    r6-0v2 [DE glue VFUR wide]  GESAMTPROTEIN                        5,20   ↓   g/dl   [6,00 - 8,30]  →  read 5.2 g/dL [6, 8.3]

**8× date missed | ES lines**
    r6-0v3  want 2026-12-23 read null
    r6-2v4  want 2026-01-04 read null
    r6-3v3  want 2026-07-09 read null

**8× unit | "µUI/mL" not recognised**
    r6-1v0 [RO plain VURF single]  TSH 1,68 µUI/mL 0,40 - 4,00  →  read 1.68  [0.4, 4]
    r6-2v0 [RO colon VURF wide]  TSH:                                 1.22   µUI/mL   (0.40 - 4.00)  →  read 1.22  [0.4, 4]
    r6-2v4 [ES wrap VURF single]  TSH 1,220 µUI/mL (0,400 - 4,000)  →  read 1.22  [0.4, 4]

**5× unit | "U/l" not recognised**
    r6-0v2 [DE glue VFUR wide]  ALT (GPT)                            41,0U/l   [7,0 - 56,0]  →  read 41  [7, 56]
    r6-0v2 [DE glue VFUR wide]  AST (GOT)                            21,0U/l   [10,0 - 40,0]  →  read 21  [10, 40]
    r6-0v2 [DE glue VFUR wide]  AP                                   81,0U/l   [44,0 - 147,0]  →  read 81  [44, 147]

**5× flag missed | arrows VURF**
    r6-7v3 [ES twocol VURF single]  ALT (GPT) 5,00 U/L 7,00 - 56,00 ↓  →  read 5 U/L [7, 56]
    r6-9v0 [RO plain VURF wide]  Calciu seric                         6.2   mg/dl   8.6 - 10.3   ↓  →  read 6.2 mg/dL [8.6, 10.3]
    r6-9v0 [RO plain VURF wide]  Magneziu seric                       1.3   mg/dL   1.7 - 2.4   ↓  →  read 1.3 mg/dL [1.7, 2.4]

**4× unit | "10^3/µL" read as "/pl"**
    r6-0v3 [ES plain VFUR wide]  Leucocitos                           10,0   10^3/µL   4,0 – 11,0  →  read 10 /pl [4, 11]
    r6-2v4 [ES wrap VURF single]  Plaquetas 271,0 10^3/µL (150,0 - 400,0)  →  read 271 /pl [150, 400]
    r6-3v4 [RO plain VFUR wide]  Trombocite                           1225   H   10^3/µL   (150 - 400)  →  read 1225 /pl [150, 400]

**3× unit | "µU/ml" not recognised**
    r6-0v2 [DE glue VFUR wide]  TSH                                  1,850µU/ml   [0,400 - 4,000]  →  read 1.85  [0.4, 4]
    r6-4v3 [DE plain VFUR wide]  TSH BASAL                            1,750   µU/ml   [0,40 - 4,00]  →  read 1.75  [0.4, 4]
    r6-8v3 [DE plain VFUR wide]  TSH basal                            2,86   µU/ml   (0,40 - 4,00)  →  read 2.86  [0.4, 4]

**3× miss | folate-serum | "Ácido fólico"**
    r6-0v3 [ES plain VFUR wide]  Ácido fólico                         15,7   ng/mL   3,0 – 20,0
    r6-2v4 [ES wrap VURF single]  Ácido fólico 12,70 ng/mL (3,00 - 20,00)
    r6-4v4 [ES plain FVUR single]  Ácido fólico * 2,2 ng/mL 3,0-20,0

**3× miss | hs-crp | "Proteina C reactivă înalt sensibilă (hs-CRP)"**
    r6-0v4 [RO plain VFUR single]  Proteina C reactivă înalt sensibilă (hs-CRP) 2.1 mg/L < 3.0
    r6-6v4 [RO wrap VFUR wide]  Proteina C reactivă înalt sensibilă (hs-CRP) ⏎         2,100   mg/L   <3,000
    r6-9v0 [RO plain VURF wide]  Proteina C reactivă înalt sensibilă (hs-CRP)   2.8   mg/l   < 3.0

**3× miss | vitamin-d-25-oh | "25-OH Vitamin D"**
    r6-1v2 [UK glue VFUR wide]  25-OH Vitamin D                      217nmol/L   75-250
    r6-2v2 [UK plain VURF wide]  25-OH Vitamin D                      210   nmol/L   (75 - 250)
    r6-4v2 [UK glue VFUR wide]  25-OH Vitamin D                      42   *   nmol/L   75-250

**3× range missed | RO paren | two-sided**
    r6-2v0 [RO colon VURF wide]  Acid uric:                           5.9   mg/dl   (2.5 - 7.0)  →  read 5.9 mg/dL
    r6-2v0 [RO colon VURF wide]  Potasiu:                             4.8   mmol/L   (3.5 - 5.1)  →  read 4.8 mmol/L
    r6-2v0 [RO colon VURF wide]  Albumină serică:                     2.6   g/dL   (3.5 - 5.0)  →  read 2.6 g/dL

**3× miss | mcv | "MCV"**
    r6-2v1 [US plain VFRU wide]  MCV                                  71.7 Low   80.0 - 100.0 fL
    r6-4v2 [UK glue VFUR wide]  MCV                                  95.2fL   80.0-100.0
    r6-4v3 [DE plain VFUR wide]  MCV                                  95,2   fl   [80,0 - 100,0]

**3× unit | "x10^9/L" not recognised**
    r6-2v2 [UK plain VURF wide]  White cell count                     9.1   x10^9/L   (4.0 - 11.0)  →  read 9.1  [4, 11]
    r6-2v2 [UK plain VURF wide]  Platelet count                       271   x10^9/L   (150 - 400)  →  read 271  [150, 400]
    r6-4v2 [UK glue VFUR wide]  WBC                                  4.4x10^9/L   4.0-11.0  →  read 4.4  [4, 11]

**2× unit | "10*9/L" not recognised**
    r6-0v0 [UK unitspace VURF single]  Platelet count 507 10*9 / L 150-400 *  →  read 507  [150, 400] H
    r6-3v1 [UK colon VURF tab]  PLATELETS:	1225	10*9/L	(150 - 400)	*  →  read 1225  [150, 400] H

**2× unit | "uIU/mL" not recognised**
    r6-0v1 [US plain VFUR single]  TSH 1.850 uIU/mL 0.40 - 4.00  →  read 1.85  [0.4, 4]
    r6-9v1 [US plain VFUR wide]  TSH                                  3.130   uIU/mL   0.400-4.000  →  read 3.13  [0.4, 4]

**2× unit | "fl" not recognised**
    r6-0v2 [DE glue VFUR wide]  MCV                                  89,10fl   [80,00 - 100,00]  →  read 89.1 
    r6-4v0 [RO plain VFUR wide]  Volum eritrocitar mediu (VEM)        95,2   fl   80,0-100,0  →  read 95.2  [80, 100]

**2× miss | blood-urea-nitrogen | "Nitrógeno ureico (BUN)"**
    r6-0v3 [ES plain VFUR wide]  Nitrógeno ureico (BUN)               13   mg/dL   7 – 25
    r6-2v4 [ES wrap VURF single]  Nitrógeno ureico (BUN) ⏎         23,0 mg/dL (7,0 - 25,0)

**2× miss | uric-acid | "Ácido úrico"**
    r6-0v3 [ES plain VFUR wide]  Ácido úrico                          4,9   mg/dL   2,5 – 7,0
    r6-2v4 [ES wrap VURF single]  Ácido úrico 5,90 mg/dL (2,50 - 7,00)

**2× miss | phosphorus-serum | "Fósforo"**
    r6-0v3 [ES plain VFUR wide]  Fósforo                              1,4   mg/dL   2,5 – 4,5
    r6-2v4 [ES wrap VURF single]  Fósforo 3,20 mg/dL (2,50 - 4,50)

**2× miss | albumin-serum | "Albúmina"**
    r6-0v3 [ES plain VFUR wide]  Albúmina                             4,3   g/dL   3,5 – 5,0
    r6-2v4 [ES wrap VURF single]  Albúmina 2,60 g/dL (3,50 - 5,00)

**2× miss | hemoglobin | "Hemoglobină"**
    r6-0v4 [RO plain VFUR single]  Hemoglobină 14.8 g/dl 12.0 - 17.5
    r6-3v4 [RO plain VFUR wide]  Hemoglobină                          13,2   g/dL   (12,0 - 17,5)

**2× miss | platelet-count | "Număr de trombocite"**
    r6-0v4 [RO plain VFUR single]  Număr de trombocite 507 mii/µL 150 - 400
    r6-2v0 [RO colon VURF wide]  Număr de trombocite:                 271   mii/µL   (150 - 400)

**2× miss | hba1c | "Hemoglobină glicozilată (HbA1c)"**
    r6-2v0 [RO colon VURF wide]  Hemoglobină glicozilată (HbA1c):     4.6   %   (4.0 - 5.6)
    r6-6v4 [RO wrap VFUR wide]  Hemoglobină glicozilată (HbA1c) ⏎         4,300   %   (4,000 - 5,600)

**2× miss | egfr | "Rata de filtrare glomerulară estimată"**
    r6-2v0 [RO colon VURF wide]  Rata de filtrare glomerulară estimată:   45   mL/min/1.73m2   >= 60
    r6-9v0 [RO plain VURF wide]  Rata de filtrare glomerulară estimată   86   mL/min/1.73m2   >= 60

**2× unit | "µg/L" read as "ng/L"**
    r6-3v1 [UK colon VURF tab]  FERRITIN:	412	µg/L	(30 - 300)	*  →  read 412 ng/L [30, 300] H
    r6-5v1 [UK colon VURF wide]  Ferritin:                            81   µg/L   30 – 300  →  read 81 ng/L [30, 300]

**2× miss | ferritin | "FERRITIN"**
    r6-3v2 [DE twocol VFUR single]  FERRITIN 412 ↑ ng/ml 30-300
    r6-7v0 [US twocol VFRU wide]  FERRITIN                             440   30 - 300 ng/mL

**2× miss | free-t3 | "fT3"**
    r6-7v2 [DE wrap VURF wide]  fT3                                  3,0   pg/ml   (2,3 - 4,2)
    r6-9v3 [DE plain VFUR wide]  fT3                                  6,9   *   pmol/l   3,5-6,5

**2× unit | "mIU/l" not recognised**
    r6-8v4 [RO colon VURF wide]  TSH:                                 2.860   mIU/l   [0.400 - 4.000]  →  read 2.86  [0.4, 4]
    r6-9v3 [DE plain VFUR wide]  TSH basal                            3,130   mIU/l   0,40-4,00  →  read 3.13  [0.4, 4]

**1× unit | "x10^12/L" not recognised**
    r6-0v0 [UK unitspace VURF single]  RBC 5.28 x10^12 / L 4.20-5.90  →  read 5.28  [4.2, 5.9]

**1× range wrong | DE bracket | upper only**
    r6-0v2 [DE glue VFUR wide]  HSCRP                                2,10mg/l   bis 3,00  →  read 2.1 mg/L [1, 3]

**1× unit | "Tsd/µl" not recognised**
    r6-0v2 [DE glue VFUR wide]  LEUKOZYTEN                           10,00Tsd/µl   [4,00 - 11,00]  →  read 10  [4, 11]

**1× range missed | DE bracket | two-sided**
    r6-0v2 [DE glue VFUR wide]  MCV                                  89,10fl   [80,00 - 100,00]  →  read 89.1 

**1× unit | "*10^3/uL" read as "/uL"**
    r6-0v4 [RO plain VFUR single]  Leucocite 10.0 *10^3/uL 4.0 - 11.0  →  read 10 /uL [4, 11]

**1× miss | rbc | "Număr de eritrocite"**
    r6-0v4 [RO plain VFUR single]  Număr de eritrocite 5.28 mil./µL 4.20 - 5.90

**1× miss | mch | "Hemoglobină eritrocitară medie (HEM)"**
    r6-0v4 [RO plain VFUR single]  Hemoglobină eritrocitară medie (HEM) 44.0 pg 27.0 - 33.0

**1× not on the report | protein-c | read from "Proteina C"**
    r6-0v4 [RO plain]  Proteina C = 2.1 mg/L

**1× miss | glucose-fasting | "Glucoză serică"**
    r6-1v0 [RO plain VURF single]  Glucoză serică 97 mg/dL 70 - 99

**1× miss | alp | "Fosfatază alcalină"**
    r6-1v0 [RO plain VURF single]  Fosfatază alcalină 108 U/l 44 - 147

**1× miss | total-bilirubin | "Bilirubin"**
    r6-1v2 [UK glue VFUR wide]  Bilirubin                            7µmol/L   3-21

**1× miss | wbc | "Număr de leucocite"**
    r6-2v0 [RO colon VURF wide]  Număr de leucocite:                  9.1   mii/µL   (4.0 - 11.0)

**1× range missed | UK paren | two-sided**
    r6-2v2 [UK plain VURF wide]  Potassium                            4.8   mmol/L   (3.5 - 5.1)  →  read 4.8 mmol/L

**1× miss | egfr | "Filtrado glomerular estimado (CKD-EPI)"**
    r6-2v4 [ES wrap VURF single]  Filtrado glomerular estimado (CKD-EPI) ⏎         45,0 mL/min/1.73m2 >60,0

**1× miss | total-protein | "Proteínas totales"**
    r6-2v4 [ES wrap VURF single]  Proteínas totales ⏎         6,60 g/dL (6,00 - 8,30)

**1× miss | transferrin-saturation | "Saturación de transferrina"**
    r6-2v4 [ES wrap VURF single]  Saturación de transferrina ⏎         41,0 % (20,0 - 50,0)

**1× miss | vitamin-d-25-oh | "25-OH Vitamina D"**
    r6-2v4 [ES wrap VURF single]  25-OH Vitamina D ⏎         84,0 ng/mL (30,0 - 100,0)

**1× miss | testosterone-total | "Testosterona total"**
    r6-2v4 [ES wrap VURF single]  Testosterona total ⏎         1256,0 ng/dL (264,0 - 916,0)

**1× miss | ldl-cholesterol | "LDL-CHOLESTERIN"**
    r6-3v2 [DE twocol VFUR single]  LDL-CHOLESTERIN 77 mg/dl < 100

**1× range wrong | DE tight | lower only**
    r6-3v2 [DE twocol VFUR single]  HDL-CHOLESTERIN 74 mg/dl >40  →  read 74 mg/dL [, 150]

**1× miss | triglycerides | "TRIGLYCERIDE"**
    r6-3v2 [DE twocol VFUR single]  TRIGLYCERIDE 128 mg/dl bis 150

**1× miss | hematocrit | "HÄMATOKRIT"**
    r6-3v2 [DE twocol VFUR single]  HÄMATOKRIT 48,3 % 36,0-50,0

**1× unit | "fl" read as "g/dL"**
    r6-3v2 [DE twocol VFUR single]  MCV 99,9 fl 80,0-100,0  →  read 99.9 g/dL [80, 100]

**1× miss | mchc | "MCHC"**
    r6-3v2 [DE twocol VFUR single]  MCHC 33,8 g/dl 32,0-36,0

**1× unit | "x10^3/µL" read as "/pl"**
    r6-3v3 [ES plain VFUR wide]  Plaquetas                            1225,0   *   x10^3/µL   (150,0 - 400,0)  →  read 1225 /pl [150, 400] H

**1× flag missed | HL VFUR**
    r6-3v4 [RO plain VFUR wide]  Trombocite                           1225   H   10^3/µL   (150 - 400)  →  read 1225 /pl [150, 400]

**1× unit | "mii/µL" not recognised**
    r6-4v0 [RO plain VFUR wide]  Leucocite                            4,4   mii/µL   4,0-11,0  →  read 4.4  [4, 11]

**1× unit | "*10^6/uL" not recognised**
    r6-4v0 [RO plain VFUR wide]  Eritrocite                           5,36   *10^6/uL   4,20-5,90  →  read 5.36  [4.2, 5.9]

**1× unit | "µg/dl" read as "ng/dL"**
    r6-4v0 [RO plain VFUR wide]  Sideremie                            46   L   µg/dl   50-170  →  read 46 ng/dL [50, 170] L

**1× unit | "µg/l" read as "ng/L"**
    r6-4v3 [DE plain VFUR wide]  FERRITIN                             28   µg/l   [30 - 300]  →  read 28 ng/L [30, 300]

**1× unit | "x10^6/µL" read as "/pl"**
    r6-4v4 [ES plain FVUR single]  Hematíes 5,36 x10^6/µL 4,20-5,90  →  read 5.36 /pl [4.2, 5.9]

**1× unit | "fL" not recognised**
    r6-4v4 [ES plain FVUR single]  VCM 95,2 fL 80,0-100,0  →  read 95.2  [80, 100]

**1× miss | transferrin-saturation | "Índice de saturación de transferrina"**
    r6-4v4 [ES plain FVUR single]  Índice de saturación de transferrina 43 % 20-50

**1× range wrong | ES tight | two-sided**
    r6-4v4 [ES plain FVUR single]  Vitamina B12 503 pg/mL 200-900  →  read 503 pg/mL [200, 300]

**1× wrong | serum-iron | point plain | unit mcg/dL**
    r6-5v0 [US plain VFRU wide]  Iron                                 33 L   50 - 170 mcg/dL  →  read 331 mcg/dL [50, 170]

**1× wrong | phosphorus-serum | comma plain | unit mg/dL**
    r6-5v3 [ES plain VFUR tab]  FÓSFORO	3,60	mg/dL	2,50-4,50  →  read 3 mg/dL [2.5, 4.5]

**1× miss | total-protein | "PROTEÍNAS TOTALES"**
    r6-5v3 [ES plain VFUR tab]  PROTEÍNAS TOTALES	4,50	L	g/dL	6,00-8,30

**1× miss | creatinine-serum | "Creatinină serică"**
    r6-6v4 [RO wrap VFUR wide]  Creatinină serică ⏎         1,1200   mg/dl   (0,6000 - 1,3000)

**1× miss | blood-urea-nitrogen | "Azot ureic (BUN)"**
    r6-6v4 [RO wrap VFUR wide]  Azot ureic (BUN) ⏎         20,00   mg/dL   (7,00 - 25,00)

**1× miss | uric-acid | "Acid uric seric"**
    r6-6v4 [RO wrap VFUR wide]  Acid uric seric ⏎         3,800   mg/dL   (2,500 - 7,000)

**1× miss | calcium-total | "Calciu seric total"**
    r6-6v4 [RO wrap VFUR wide]  Calciu seric total ⏎         8,800   mg/dL   (8,600 - 10,300)

**1× miss | magnesium-serum | "Magneziu seric"**
    r6-6v4 [RO wrap VFUR wide]  Magneziu seric ⏎         2,000   mg/dl   (1,700 - 2,400)

**1× miss | total-protein | "Proteine totale serice"**
    r6-6v4 [RO wrap VFUR wide]  Proteine totale serice ⏎         6,500   g/dL   (6,000 - 8,300)

**1× miss | albumin-serum | "Albumină serică"**
    r6-6v4 [RO wrap VFUR wide]  Albumină serică ⏎         5,900   H   g/dL   (3,500 - 5,000)

**1× miss | total-cholesterol | "Colesterol total"**
    r6-6v4 [RO wrap VFUR wide]  Colesterol total ⏎         118,00   mg/dL   < 200,00

**1× miss | ldl-cholesterol | "Colesterol LDL"**
    r6-6v4 [RO wrap VFUR wide]  Colesterol LDL ⏎         86,00   mg/dL   <= 100,00

**1× miss | hdl-cholesterol | "Colesterol HDL"**
    r6-6v4 [RO wrap VFUR wide]  Colesterol HDL ⏎         57,00   mg/dL   >= 40,00

**1× miss | ast | "AST"**
    r6-7v0 [US twocol VFRU wide]  AST                                  35   10 - 40 U/L

**1× miss | hdl-cholesterol | "HDL CHOLESTEROL"**
    r6-7v0 [US twocol VFRU wide]  HDL CHOLESTEROL                      63   > OR = 40 mg/dL

**1× miss | free-t3 | "Free T3"**
    r6-7v0 [US twocol VFRU wide]  Free T3                              3.0   2.3 - 4.2 pg/mL

**1× miss | total-cholesterol | "Gesamtcholesterin"**
    r6-7v2 [DE wrap VURF wide]  Gesamtcholesterin ⏎         128   mg/dl   < 200

**1× miss | hdl-cholesterol | "HDL-Cholesterin"**
    r6-7v2 [DE wrap VURF wide]  HDL-Cholesterin ⏎         63   mg/dl   > 40

…and 28 smaller groups.
