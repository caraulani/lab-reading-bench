# Lab-report reader stress test

2000 generated reports, 38869 rows with a known answer, seed 1. Read in 4.9 s (2.5 ms a report).

| Outcome | Rows | Share | 95% interval |
|---|---|---|---|
| ok | 30357 | 78.1% | 77.69–78.51% |
| unit | 2860 | 7.4% | 7.10–7.62% |
| unconverted | 198 | 0.5% | 0.44–0.59% |
| wrong | 1483 | 3.8% | 3.63–4.01% |
| miss | 3971 | 10.2% | 9.92–10.52% |

- **Critical values:** 387 of 405 caught (95.6%, interval 93.08–97.17%); 17 lost because the row was not read, 1 because it was misread. False critical alarms: 224.
- **Rows that are not on the report:** 168 (of 35066 rows read).
- **Lab's flag:** ok 32001, missed 1337, invented 71, wrong 6.
- **Reference range:** ok 32821, missed 591, wrong 3.
- **Collection date:** ok 1426, missed 282, wrong 111.

## By locale
| locale | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| ES | 6470 | 60.9% | 7.5% | 0.0% | 5.2% | 26.4% |
| RO | 6917 | 67.9% | 7.0% | 0.0% | 4.6% | 20.4% |
| DE | 5885 | 77.4% | 7.4% | 0.8% | 7.4% | 7.0% |
| US | 13100 | 87.5% | 8.8% | 0.1% | 0.4% | 3.2% |
| UK | 6497 | 87.6% | 4.7% | 2.1% | 5.2% | 0.3% |

## By kind
| kind | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| csv | 4472 | 75.7% | 5.9% | 0.8% | 4.6% | 13.0% |
| lines | 30009 | 77.5% | 7.3% | 0.4% | 4.2% | 10.6% |
| fhir | 4388 | 84.9% | 9.2% | 0.7% | 0.8% | 4.5% |

## By variant
| variant | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| unitspace | 1801 | 10.1% | 62.7% | 0.0% | 15.6% | 11.6% |
| csv:semicolon | 2282 | 70.2% | 4.5% | 0.2% | 6.6% | 18.6% |
| wrap | 3264 | 77.8% | 3.4% | 0.2% | 4.4% | 14.1% |
| fhir:text-only | 1413 | 79.6% | 9.2% | 0.6% | 1.1% | 9.4% |
| twocol | 2748 | 79.7% | 3.0% | 0.5% | 2.5% | 14.2% |
| csv:comma | 1360 | 80.7% | 5.2% | 1.5% | 1.9% | 10.7% |
| leaders | 1892 | 81.5% | 4.3% | 0.4% | 3.3% | 10.5% |
| plain | 16553 | 82.6% | 3.9% | 0.5% | 3.5% | 9.5% |
| csv:lowhigh | 830 | 82.9% | 11.1% | 1.4% | 3.4% | 1.2% |
| colon | 1854 | 83.1% | 3.3% | 0.5% | 3.7% | 9.3% |
| glue | 1897 | 83.3% | 3.9% | 0.4% | 2.6% | 9.9% |
| fhir:loinc-only | 1222 | 85.6% | 10.1% | 0.9% | 0.7% | 2.7% |
| fhir:loinc+text | 1753 | 88.6% | 8.4% | 0.5% | 0.5% | 1.9% |

## By units
| units | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| conventional | 29832 | 76.4% | 8.0% | 0.0% | 3.0% | 12.6% |
| SI | 9037 | 83.8% | 5.2% | 2.2% | 6.6% | 2.2% |

## By decimal
| decimal | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| comma | 14747 | 66.6% | 6.9% | 0.3% | 7.2% | 19.0% |
| point | 24122 | 85.1% | 7.6% | 0.7% | 1.8% | 4.8% |

## By sep
| sep | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| single | 9419 | 77.6% | 6.9% | 0.5% | 3.8% | 11.2% |
| tab | 2589 | 77.9% | 6.1% | 0.6% | 4.1% | 11.2% |
| wide | 26861 | 78.3% | 7.6% | 0.5% | 3.8% | 9.8% |

## By order
| order | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| FVUR | 767 | 61.0% | 8.6% | 0.0% | 3.8% | 26.6% |
| VURF | 12114 | 75.0% | 7.0% | 0.8% | 5.1% | 12.1% |
| VFUR | 19318 | 77.4% | 7.1% | 0.5% | 4.2% | 10.8% |
| VFRU | 6670 | 87.6% | 8.7% | 0.1% | 0.4% | 3.2% |

## By marker
| marker | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| rbc | 902 | 34.0% | 41.4% | 0.0% | 4.9% | 19.7% |
| platelet-count | 914 | 37.5% | 51.9% | 0.0% | 0.0% | 10.6% |
| wbc | 898 | 40.5% | 54.9% | 0.0% | 4.6% | 0.0% |
| mchc | 917 | 52.6% | 3.1% | 21.6% | 3.2% | 19.6% |
| uric-acid | 940 | 58.5% | 1.2% | 0.0% | 1.5% | 38.8% |
| total-protein | 929 | 58.6% | 2.6% | 0.0% | 2.6% | 36.3% |
| transferrin-saturation | 926 | 61.4% | 0.0% | 0.0% | 0.0% | 38.6% |
| tsh | 946 | 63.8% | 19.5% | 0.0% | 16.4% | 0.3% |
| blood-urea-nitrogen | 930 | 66.6% | 2.7% | 0.0% | 0.0% | 30.8% |
| hs-crp | 937 | 70.8% | 3.0% | 0.0% | 2.5% | 23.8% |
| albumin-serum | 930 | 70.9% | 1.8% | 0.0% | 3.1% | 24.2% |
| chloride-serum | 922 | 71.1% | 12.5% | 0.0% | 0.0% | 16.4% |
| hematocrit | 898 | 72.5% | 0.0% | 0.0% | 27.5% | 0.0% |
| folate-serum | 876 | 74.3% | 2.7% | 0.0% | 4.8% | 18.2% |
| potassium-serum | 912 | 76.1% | 11.8% | 0.0% | 4.1% | 8.0% |
| magnesium-serum | 941 | 76.2% | 2.2% | 0.0% | 3.9% | 17.6% |
| egfr | 932 | 76.5% | 7.4% | 0.0% | 0.0% | 16.1% |
| phosphorus-serum | 944 | 77.1% | 2.3% | 0.0% | 4.0% | 16.5% |
| mcv | 899 | 77.6% | 0.0% | 0.0% | 3.4% | 18.9% |
| free-t3 | 961 | 78.7% | 2.9% | 0.0% | 5.1% | 13.3% |
| sodium-serum | 935 | 80.2% | 12.0% | 0.0% | 0.0% | 7.8% |
| hba1c | 943 | 81.9% | 0.0% | 0.0% | 10.6% | 7.5% |
| vitamin-d-25-oh | 867 | 83.2% | 4.6% | 0.0% | 3.6% | 8.7% |
| mch | 896 | 85.9% | 0.0% | 0.0% | 4.1% | 9.9% |
| ast | 928 | 86.4% | 4.0% | 0.0% | 0.0% | 9.6% |
| alt | 913 | 87.2% | 4.2% | 0.0% | 0.0% | 8.7% |
| hemoglobin | 927 | 87.4% | 4.0% | 0.0% | 8.2% | 0.4% |
| total-bilirubin | 929 | 87.6% | 5.3% | 0.0% | 5.1% | 2.0% |
| free-t4 | 946 | 87.8% | 3.0% | 0.0% | 8.2% | 1.0% |
| creatinine-serum | 940 | 89.5% | 2.7% | 0.0% | 7.9% | 0.0% |
| calcium-total | 950 | 90.2% | 3.2% | 0.0% | 5.9% | 0.7% |
| total-cholesterol | 984 | 92.3% | 4.1% | 0.0% | 1.7% | 1.9% |
| testosterone-total | 853 | 93.1% | 4.6% | 0.0% | 2.2% | 0.1% |
| serum-iron | 914 | 93.2% | 3.7% | 0.0% | 1.9% | 1.2% |
| hdl-cholesterol | 973 | 93.5% | 3.9% | 0.0% | 2.6% | 0.0% |
| triglycerides | 986 | 93.6% | 4.1% | 0.0% | 2.3% | 0.0% |
| vitamin-b12 | 845 | 94.1% | 3.2% | 0.0% | 1.5% | 1.2% |
| alp | 938 | 94.1% | 4.9% | 0.0% | 0.0% | 1.0% |
| ldl-cholesterol | 974 | 94.5% | 3.8% | 0.0% | 1.7% | 0.0% |
| glucose-fasting | 928 | 95.0% | 3.6% | 0.0% | 1.4% | 0.0% |
| ggt | 934 | 95.1% | 4.7% | 0.0% | 0.0% | 0.2% |
| ferritin | 912 | 95.4% | 4.6% | 0.0% | 0.0% | 0.0% |

## What went wrong, most common first

**403× flag missed | HL VURF**
    r1-60 [UK leaders VURF wide]  BLOOD UREA NITROGEN ...............   4   mg/dL   (7 - 25)   L  →  read 4 mg/dL [7, 25]
    r1-60 [UK leaders VURF wide]  EGFR ..............................   46   mL/min/1.73m2   >60   L  →  read 46 mL/min/1.73m2 [60, ]
    r1-60 [UK leaders VURF wide]  POTASSIUM .........................   3.2   mmol/L   (3.5 - 5.1)   L  →  read 3.2 mmol/L [3.5, 5.1]

**295× unit | "mg/dL" not recognised**
    r1-20 [ES unitspace VURF single]  GLUCOSA 76 mg / dL 70 - 99  →  read 76  [70, 99]
    r1-20 [ES unitspace VURF single]  CREATININA 0,56 mg / dL 0,60 - 1,30 *  →  read 0.56  [0.6, 1.3]
    r1-20 [ES unitspace VURF single]  CALCIO 9,6 mg / dL 8,6 - 10,3  →  read 9.6  [8.6, 10.3]

**289× flag missed | arrows VFUR**
    r1-34 [RO csv:semicolon VFUR wide]  HbA1c;6,8 ↑;%;4,0-5,6  →  read 6.8 % [4, 5.6]
    r1-34 [RO csv:semicolon VFUR wide]  Rata de filtrare glomerulară estimată;43 ↓;mL/min/1.73m2;>60  →  read 43 mL/min/1.73m2 [60, ]
    r1-34 [RO csv:semicolon VFUR wide]  Sodiu seric;105 ↓;mmol/l;135-145  →  read 105 mmol/L [135, 145]

**287× flag missed | arrows VURF**
    r1-22 [ES plain VURF wide]  Vitamina D (25-OH)                   155   ng/mL   30 – 100   ↑  →  read 155 ng/mL [30, 100]
    r1-22 [ES plain VURF wide]  Testosterona total                   1400   ng/dL   264 – 916   ↑  →  read 1400 ng/dL [264, 916]
    r1-87 [DE plain VURF wide]  Natrium                              132   mmol/l   [135 - 145]   ↓  →  read 132 mmol/L [135, 145]

**276× unit | "K/uL" not recognised**
    r1-5 [US fhir:loinc-only VFRU wide]  WHITE BLOOD CELL COUNT 2.3 K/uL  →  read 2.3  [4, 11]
    r1-5 [US fhir:loinc-only VFRU wide]  PLATELETS 399 K/uL  →  read 399  [150, 400]
    r1-29 [US plain VFUR single]  PLATELET COUNT 69 K/uL 150-400  →  read 69  [150, 400]

**274× date missed | RO lines**
    r1-4  want 2026-12-28 read null
    r1-9  want 2026-05-02 read null
    r1-14  want 2026-09-14 read null

**245× unit | "mEq/L" not recognised**
    r1-32 [US plain VFUR single]  CHLORIDE 101 mEq/L 98-107  →  read 101  [98, 107]
    r1-37 [US plain VFRU single]  POTASSIUM 4.5 3.5 - 5.1 mEq/L  →  read 4.5  [3.5, 5.1]
    r1-48 [US csv:lowhigh VFRU wide]  POTASSIUM,4.6,mEq/L,3.5,5.1,2026-06-13  →  read 4.6  [3.5, 5.1]

**165× flag missed | plusminus VURF**
    r1-50 [DE csv:semicolon VURF wide]  Chlorid;77,0 -;mmol/l;98,0 – 107,0  →  read 77 mmol/L [98, 107]
    r1-50 [DE csv:semicolon VURF wide]  MCHC;260,0 -;g/l;320,0 – 360,0  →  read 260 g/L [320, 360]
    r1-50 [DE csv:semicolon VURF wide]  Thrombozyten;51,0 -;Tsd/µl;150,0 – 400,0  →  read 51  [150, 400]

**157× unconverted | mchc | g/L**
    r1-7 [UK csv:comma VFUR wide]  MCHC,345,,g/L,320 – 360  →  read 345 g/L [320, 360]
    r1-28 [UK plain VFUR wide]  MCHC                                 352   g/L   (320 - 360)  →  read 352 g/L [320, 360]
    r1-42 [UK csv:comma VFUR wide]  MCHC,334,,g/L,320 - 360  →  read 334 g/L [320, 360]

**144× miss | mchc | "CHEM"**
    r1-57 [RO wrap VURF wide]  CHEM                                 35,20   g/dL   32,00 - 36,00
    r1-61 [RO plain VFUR single]  CHEM 32,6 g/dl 32,0-36,0
    r1-74 [RO plain VURF single]  CHEM 35.6 g/dL 32.0-36.0

**133× unit | "M/uL" not recognised**
    r1-16 [US wrap VFRU wide]  RBC                                  4.970   4.200-5.900 M/uL  →  read 4.97  [4.2, 5.9]
    r1-29 [US plain VFUR single]  RBC 4.31 M/uL 4.20-5.90  →  read 4.31  [4.2, 5.9]
    r1-32 [US plain VFUR single]  RBC 4.76 M/uL 4.20-5.90  →  read 4.76  [4.2, 5.9]

**132× unit | "U/L" not recognised**
    r1-47 [ES unitspace VURF wide]  ALT (GPT)                            233,00   U / L   (7,00 - 56,00)   *  →  read 233  [7, 56]
    r1-47 [ES unitspace VURF wide]  AST (GOT)                            21,00   U / L   (10,00 - 40,00)  →  read 21  [10, 40]
    r1-47 [ES unitspace VURF wide]  Fosfatasa alcalina                   115,00   U / L   (44,00 - 147,00)  →  read 115  [44, 147]

**127× miss | transferrin-saturation | "% SATURATION"**
    r1-23 [US plain VFRU tab]  % SATURATION	26	20 - 50 %
    r1-30 [US plain VFRU wide]  % SATURATION                         27   20 - 50 %
    r1-31 [US plain VFUR wide]  % SATURATION                         40   %   20 - 50

**120× flag missed | words VURF**
    r1-65 [UK plain VURF wide]  Glucose                              2.1   mmol/L   3.9 - 5.5   LOW  →  read 37.8 mg/dL [70.3, 99.1]
    r1-65 [UK plain VURF wide]  Potassium                            5.8   mmol/L   3.5 - 5.1   HIGH  →  read 5.8 mmol/L [3.5, 5.1]
    r1-65 [UK plain VURF wide]  Chloride                             82   mmol/L   98 - 107   LOW  →  read 82 mmol/L [98, 107]

**111× date wrong | UK lines**
    r1-26  want 2026-04-05 read 2026-05-04
    r1-28  want 2026-11-03 read 2026-03-11
    r1-35  want 2026-01-08 read 2026-08-01

**99× miss | magnesium-serum | "Magnesio"**
    r1-10 [ES plain FVUR wide]  Magnesio                             * 1,4   mg/dL   1,7 – 2,4
    r1-13 [ES plain VFUR wide]  Magnesio                             1,900   mg/dL   [1,700 - 2,400]
    r1-47 [ES unitspace VURF wide]  Magnesio                             2,200   mg / dL   (1,700 - 2,400)

**98× miss | phosphorus-serum | "Fósforo"**
    r1-47 [ES unitspace VURF wide]  Fósforo                              3,900   mg / dL   (2,500 - 4,500)
    r1-52 [ES plain FVUR wide]  Fósforo                              3,0   mg/dL   2,5 – 4,5
    r1-56 [ES unitspace VFUR wide]  Fósforo                              4,10   mg / dL   2,50-4,50

**97× unit | "10*3/uL" read as "/uL"**
    r1-77 [RO fhir:text-only VURF wide]  TROMBOCITE 274 10*3/uL  →  read 274 /uL [150, 400]
    r1-88 [US fhir:loinc-only VFUR wide]  PLATELET COUNT 226 10*3/uL  →  read 226 /uL [150, 400]
    r1-97 [RO fhir:text-only VFUR wide]  Număr de leucocite 9.3 10*3/uL  →  read 9.3 /uL [4, 11]

**96× miss | uric-acid | "Ácido úrico"**
    r1-10 [ES plain FVUR wide]  Ácido úrico                          5,5   mg/dL   2,5 – 7,0
    r1-13 [ES plain VFUR wide]  Ácido úrico                          4,100   mg/dL   [2,500 - 7,000]
    r1-47 [ES unitspace VURF wide]  Ácido úrico                          2,800   mg / dL   (2,500 - 7,000)

**95× miss | total-protein | "Proteínas totales"**
    r1-13 [ES plain VFUR wide]  Proteínas totales                    6,800   g/dL   [6,000 - 8,300]
    r1-47 [ES unitspace VURF wide]  Proteínas totales                    7,700   g / dL   (6,000 - 8,300)
    r1-52 [ES plain FVUR wide]  Proteínas totales                    * 10,0   g/dL   6,0 – 8,3

**95× unit | "x10^3/µL" read as "/µL"**
    r1-67 [ES plain VFUR single]  PLAQUETAS 243,0 x10^3/µL 150,0 - 400,0  →  read 243 /µL [150, 400]
    r1-70 [ES plain VFUR single]  Plaquetas 390 x10^3/µL [150 - 400]  →  read 390 /µL [150, 400]
    r1-79 [ES csv:semicolon VFUR wide]  PLAQUETAS;379;x10^3/µL;[150 - 400]  →  read 379 /µL [150, 400]

**93× miss | blood-urea-nitrogen | "Nitrógeno ureico (BUN)"**
    r1-10 [ES plain FVUR wide]  Nitrógeno ureico (BUN)               9   mg/dL   7 – 25
    r1-13 [ES plain VFUR wide]  Nitrógeno ureico (BUN)               33,00   ↑   mg/dL   [7,00 - 25,00]
    r1-52 [ES plain FVUR wide]  Nitrógeno ureico (BUN)               22   mg/dL   7 – 25

**93× miss | albumin-serum | "Albúmina"**
    r1-10 [ES plain FVUR wide]  Albúmina                             * 2,8   g/dL   3,5 – 5,0
    r1-13 [ES plain VFUR wide]  Albúmina                             4,100   g/dL   [3,500 - 5,000]
    r1-47 [ES unitspace VURF wide]  Albúmina                             3,900   g / dL   (3,500 - 5,000)

**93× miss | uric-acid | "Harnsäure"**
    r1-45 [DE leaders VURF wide]  Harnsäure .........................   5,4   mg/dl   2,5 - 7,0
    r1-53 [DE plain VURF wide]  Harnsäure                            321,2   µmol/l   149,0 – 416,0
    r1-63 [DE plain VURF single]  Harnsäure 5,9 mg/dl 2,5 – 7,0

**91× miss | chloride-serum | "Cloro"**
    r1-10 [ES plain FVUR wide]  Cloro                                105   mmol/L   98 – 107
    r1-13 [ES plain VFUR wide]  Cloro                                105,00   mmol/L   [98,00 - 107,00]
    r1-52 [ES plain FVUR wide]  Cloro                                101   mmol/L   98 – 107

**89× unit | "µUI/mL" not recognised**
    r1-1 [ES plain VFUR wide]  TSH                                  5,9700   µUI/mL   (0,4000 - 4,0000)  →  read 5.97  [0.4, 4]
    r1-21 [ES plain VURF wide]  TSH                                  3,87   µUI/mL   0,40-4,00  →  read 3.87  [0.4, 4]
    r1-34 [RO csv:semicolon VFUR wide]  TSH;2,91;µUI/mL;0,40-4,00  →  read 2.91  [0.4, 4]

**89× miss | egfr | "Filtrado glomerular estimado (CKD-EPI)"**
    r1-13 [ES plain VFUR wide]  Filtrado glomerular estimado (CKD-EPI)   109,00   mL/min/1.73m2   >60,00
    r1-47 [ES unitspace VURF wide]  Filtrado glomerular estimado (CKD-EPI)   72,00   mL / min/1.73m2   >= 60,00
    r1-56 [ES unitspace VFUR wide]  Filtrado glomerular estimado (CKD-EPI)   88,0   mL / min/1.73m2   >60,0

**87× miss | folate-serum | "Ácido fólico"**
    r1-21 [ES plain VURF wide]  Ácido fólico                         3,2   ng/mL   3,0-20,0
    r1-22 [ES plain VURF wide]  Ácido fólico                         8,7   ng/mL   3,0 – 20,0
    r1-56 [ES unitspace VFUR wide]  Ácido fólico                         25,40   ng / mL   3,00-20,00

**86× miss | blood-urea-nitrogen | "Harnstoff-N"**
    r1-19 [DE plain VURF single]  Harnstoff-N 16 mg/dl (7 - 25)
    r1-38 [DE plain VFUR wide]  Harnstoff-N                          17,0   mg/dl   [7,0 - 25,0]
    r1-45 [DE leaders VURF wide]  Harnstoff-N .......................   15   mg/dl   7 - 25

**84× unit | "×10⁹/L" not recognised**
    r1-7 [UK csv:comma VFUR wide]  PLATELET COUNT,840,H,×10⁹/L,150 – 400  →  read 840  [150, 400] H
    r1-12 [UK csv:comma VURF wide]  Platelet count,398,,×10⁹/L,150 – 400  →  read 398  [150, 400]
    r1-28 [UK plain VFUR wide]  Platelets                            234   ×10⁹/L   (150 - 400)  →  read 234  [150, 400]

**84× unit | "g/dL" not recognised**
    r1-20 [ES unitspace VURF single]  HEMOGLOBINA 14,2 g / dL 12,0 - 17,5  →  read 14.2  [12, 17.5]
    r1-20 [ES unitspace VURF single]  CHCM 32,2 g / dL 32,0 - 36,0  →  read 32.2  [32, 36]
    r1-48 [US csv:lowhigh VFRU wide]  "PROTEIN, TOTAL",6.4,g/dL,6,8.3,2026-06-13  →  read 6.4 

**81× unit | "Tsd/µl" not recognised**
    r1-11 [DE csv:semicolon VURF wide]  Thrombozyten;293;Tsd/µl;150 – 400  →  read 293  [150, 400]
    r1-19 [DE plain VURF single]  Leukozyten 60,9 Tsd/µl (4,0 - 11,0) *  →  read 60.9  [4, 11]
    r1-50 [DE csv:semicolon VURF wide]  Thrombozyten;51,0 -;Tsd/µl;150,0 – 400,0  →  read 51  [150, 400]

**81× unit | "ng/mL" not recognised**
    r1-17 [US csv:comma VFUR wide]  "VITAMIN D,25-OH,TOTAL,IA",21,,ng/mL,30 - 100  →  read 21 
    r1-48 [US csv:lowhigh VFRU wide]  "VITAMIN D, 25-HYDROXY",71,ng/mL,30,100,2026-06-13  →  read 71 
    r1-48 [US csv:lowhigh VFRU wide]  "FOLATE, SERUM",11.3,ng/mL,3,20,2026-06-13  →  read 11.3 

**76× unit | "mg/dl" not recognised**
    r1-242 [RO unitspace VURF single]  Glicemie 93 mg / dl 70 – 99  →  read 93  [70, 99]
    r1-242 [RO unitspace VURF single]  Azot ureic (BUN) 21 mg / dl 7 – 25  →  read 21  [7, 25]
    r1-281 [RO unitspace VURF wide]  Calciu seric total                   9.4   mg / dl   (8.6 - 10.3)  →  read 9.4  [8.6, 10.3]

**73× miss | ast | "TGO (AST)"**
    r1-4 [RO leaders VFUR single]  TGO (AST) ......................... 33.0 U/l [10.0 - 40.0]
    r1-57 [RO wrap VURF wide]  TGO (AST)                            48,0   U/l   10,0 - 40,0   *
    r1-120 [RO colon VFUR single]  TGO (AST): 37 U/L [10 - 40]

**72× unit | "*10^3/uL" read as "/uL"**
    r1-111 [RO twocol VURF wide]  Leucocite                            30.3   *10^3/uL   4.0 – 11.0   *  →  read 30.3 /uL [4, 11] H
    r1-153 [RO colon VURF tab]  Leucocite:	36,5	*10^3/uL	4,0 – 11,0	*  →  read 36.5 /uL [4, 11] H
    r1-178 [RO plain VFUR wide]  Număr de leucocite                   2,9   *10^3/uL   4,0-11,0  →  read 2.9 /uL [4, 11] H

**72× flag missed | plusminus VFUR**
    r1-425 [DE plain VFUR wide]  Kreatinin                            37,1   -   µmol/l   (53,0 - 115,0)  →  read 0.42 mg/dL [0.6, 1.3]
    r1-425 [DE plain VFUR wide]  MCHC                                 522,0   +   g/l   (320,0 - 360,0)  →  read 522 g/L [320, 360]
    r1-425 [DE plain VFUR wide]  Thrombozyten                         21,0   -   Tsd/µl   (150,0 - 400,0)  →  read 21  [150, 400]

**71× unit | "/nl" not recognised**
    r1-19 [DE plain VURF single]  Thrombozyten 362 /nl (150 - 400)  →  read 362  [150, 400]
    r1-50 [DE csv:semicolon VURF wide]  Leukozyten;8,70;/nl;4,00 – 11,00  →  read 8.7  [4, 11]
    r1-53 [DE plain VURF wide]  Thrombozyten                         53,0   /nl   150,0 – 400,0   -  →  read 53  [150, 400]

**71× unit | "mil/mm3" not recognised**
    r1-24 [ES leaders VFUR wide]  Leucocitos ........................   2,2   mil/mm3   [4,0 - 11,0]  →  read 2.2  [4, 11]
    r1-62 [ES leaders VURF single]  Leucocitos ........................ 5,0 mil/mm3 4,0 - 11,0  →  read 5  [4, 11]
    r1-67 [ES plain VFUR single]  LEUCOCITOS 14,10 mil/mm3 4,00 - 11,00  →  read 14.1  [4, 11]

**71× false critical | creatinine-serum**
    r1-38 [DE plain VFUR wide]  Kreatinin                            2,240   H   mg/dl   [0,600 - 1,300]  →  read 2240 mg/dL [600, 1300] H
    r1-56 [ES unitspace VFUR wide]  Creatinina                           1,070   mg / dL   0,600-1,300  →  read 1070  [600, 1300]
    r1-57 [RO wrap VURF wide]  Creatinină serică ⏎         0,710   mg/dL   0,600 - 1,300  →  read 710 mg/dL [600, 1300]

**67× unit | "mmol/L" not recognised**
    r1-20 [ES unitspace VURF single]  SODIO 144 mmol / L 135 - 145  →  read 144  [135, 145]
    r1-20 [ES unitspace VURF single]  POTASIO 4,7 mmol / L 3,5 - 5,1  →  read 4.7  [3.5, 5.1]
    r1-47 [ES unitspace VURF wide]  Sodio                                136,00   mmol / L   (135,00 - 145,00)  →  read 136  [135, 145]

**66× miss | alt | "TGP (ALT)"**
    r1-14 [RO plain VFUR tab]  TGP (ALT)	31	U/l	7-56
    r1-55 [RO twocol VURF single]  TGP (ALT) 5 U/L [7 - 56]
    r1-82 [RO plain VURF single]  TGP (ALT) 99,00 U/l 7,00 – 56,00

**66× wrong | hematocrit | point plain | unit L/L**
    r1-28 [UK plain VFUR wide]  Haematocrit                          0.45   L/L   (0.36 - 0.50)  →  read 0.45  [0.36, 0.5] L
    r1-54 [UK plain VFUR single]  Haematocrit 0.750 HIGH L/L 0.360 – 0.500  →  read 0.75  [0.36, 0.5] H
    r1-65 [UK plain VURF wide]  Haematocrit                          0.28   L/L   0.36 - 0.50   LOW  →  read 0.28  [0.36, 0.5] L

**66× unit | "mii/µL" not recognised**
    r1-57 [RO wrap VURF wide]  Trombocite                           396,0   mii/µL   150,0 - 400,0  →  read 396  [150, 400]
    r1-61 [RO plain VFUR single]  NUMĂR DE LEUCOCITE 33,5 * mii/µL 4,0-11,0  →  read 33.5  [4, 11]
    r1-120 [RO colon VFUR single]  NUMĂR DE LEUCOCITE: 3.3 * mii/µL [4.0 - 11.0]  →  read 3.3  [4, 11]

**66× miss | mch | "HEM"**
    r1-178 [RO plain VFUR wide]  HEM                                  32,2   pg   27,0-33,0
    r1-336 [RO wrap VURF wide]  HEM                                  28.60   pg   [27.00 - 33.00]
    r1-340 [RO wrap VURF wide]  HEM                                  30,10   pg   27,00 - 33,00

**64× not on the report | crp | read from "CRP"**
    r1-19 [DE plain]  CRP = 2.3 mg/L
    r1-50 [DE csv:semicolon]  CRP = 2.2 mg/L
    r1-53 [DE plain]  CRP = 2.8 mg/L

**61× miss | mcv | "Volum eritrocitar mediu (VEM)"**
    r1-57 [RO wrap VURF wide]  Volum eritrocitar mediu (VEM) ⏎         97,10   fL   80,00 - 100,00
    r1-74 [RO plain VURF single]  Volum eritrocitar mediu (VEM) 81.6 fl 80.0-100.0
    r1-111 [RO twocol VURF wide]  Volum eritrocitar mediu (VEM)        96.4   fl   80.0 – 100.0

**60× miss | platelet-count | "Număr de trombocite"**
    r1-74 [RO plain VURF single]  Număr de trombocite 169 mii/µL 150-400
    r1-101 [RO glue VFUR wide]  Număr de trombocite                  47.00   *   mii/µL   (150.00 - 400.00)
    r1-126 [RO plain VFUR tab]  Număr de trombocite	231,0	10^3/µL	150,0 – 400,0

**59× miss | free-t3 | "TRIIODOTHYRONINE (T3), FREE"**
    r1-0 [US plain VFRU wide]  TRIIODOTHYRONINE (T3), FREE          3.1   2.3 - 4.2 pg/mL
    r1-37 [US plain VFRU single]  TRIIODOTHYRONINE (T3), FREE 3.6 2.3 - 4.2 pg/mL
    r1-100 [US plain VFUR single]  TRIIODOTHYRONINE (T3), FREE 3.4 pg/mL 2.3-4.2

**59× miss | mcv | "VEM"**
    r1-61 [RO plain VFUR single]  VEM 96,4 fl 80,0-100,0
    r1-101 [RO glue VFUR wide]  VEM                                  119.700   *   fL   (80.000 - 100.000)
    r1-120 [RO colon VFUR single]  VEM: 85.3 fl [80.0 - 100.0]

**54× unit | "ng/dL" not recognised**
    r1-17 [US csv:comma VFUR wide]  "TESTOSTERONE, TOTAL, MS",804,,ng/dL,264 - 916  →  read 804 
    r1-20 [ES unitspace VURF single]  TESTOSTERONA TOTAL 841 ng / dL 264 - 916  →  read 841  [264, 916]
    r1-56 [ES unitspace VFUR wide]  Testosterona total                   504,0   ng / dL   264,0-916,0  →  read 504  [264, 916]

**52× miss | rbc | "Eritrocite"**
    r1-57 [RO wrap VURF wide]  Eritrocite                           4,430   mil./µL   4,200 - 5,900
    r1-178 [RO plain VFUR wide]  Eritrocite                           5,64   *10^6/uL   4,20-5,90
    r1-232 [RO plain VFUR tab]  Eritrocite	2,530	↓	mil./µL	4,200 – 5,900

**51× range missed | DE spaced | upper only**
    r1-45 [DE leaders VURF wide]  Gesamtcholesterin .................   163   mg/dl   bis 200  →  read 163 mg/dL
    r1-477 [DE unitspace VURF wide]  Cholesterin gesamt                   105   mg / dl   bis 200  →  read 105 
    r1-495 [DE plain VURF wide]  LDL-Cholesterin                      2,4   mmol/l   bis 2,6  →  read 92.8 mg/dL

**50× not on the report | crp | read from "Proteina C reactivă"**
    r1-14 [RO plain]  Proteina C reactivă = 2.3 mg/L
    r1-34 [RO csv:semicolon]  Proteina C reactivă = 3.5 mg/L
    r1-57 [RO wrap]  Proteina C reactivă = 2.2 mg/L

**50× miss | uric-acid | "Acid uric"**
    r1-55 [RO twocol VURF single]  Acid uric 3.0 mg/dl [2.5 - 7.0]
    r1-57 [RO wrap VURF wide]  Acid uric                            3,80   mg/dl   2,50 - 7,00
    r1-82 [RO plain VURF single]  Acid uric 5,500 mg/dl 2,500 – 7,000

**48× miss | hs-crp | "PCR ultrasensible"**
    r1-13 [ES plain VFUR wide]  PCR ultrasensible                    2,300   mg/L   <3,000
    r1-52 [ES plain FVUR wide]  PCR ultrasensible                    2,3   mg/L   Hasta 3,0
    r1-56 [ES unitspace VFUR wide]  PCR ultrasensible                    2,90   mg / L   Hasta 3,00

**47× miss | transferrin-saturation | "Índice de saturación de transferrina"**
    r1-10 [ES plain FVUR wide]  Índice de saturación de transferrina   37   %   20 – 50
    r1-70 [ES plain VFUR single]  Índice de saturación de transferrina 25 % [20 - 50]
    r1-83 [ES plain VURF wide]  Índice de saturación de transferrina   43   %   [20 - 50]

**46× miss | rbc | "Hematíes"**
    r1-1 [ES plain VFUR wide]  Hematíes                             8,4900   mill/mm3   (4,2000 - 5,9000)
    r1-52 [ES plain FVUR wide]  Hematíes                             4,77   x10^6/µL   4,20 – 5,90
    r1-70 [ES plain VFUR single]  Hematíes 3,11 ↓ 10^6/µL [4,20 - 5,90]

**46× miss | transferrin-saturation | "Saturația transferinei"**
    r1-41 [RO leaders VFUR tab]  Saturația transferinei ............	48.0	%	20.0-50.0
    r1-111 [RO twocol VURF wide]  Saturația transferinei               43   %   20 – 50
    r1-126 [RO plain VFUR tab]  Saturația transferinei	22,0	%	20,0 – 50,0

**45× range missed | ES paren | upper only**
    r1-1 [ES plain VFUR wide]  Triglicéridos                        165,00   mg/dL   Hasta 150,00  →  read 165 mg/dL
    r1-47 [ES unitspace VURF wide]  Colesterol total                     160,00   mg / dL   Hasta 200,00  →  read 160 
    r1-58 [ES plain VFUR single]  COLESTEROL LDL 150 mg/dL Hasta 100  →  read 150 mg/dL

**45× miss | total-protein | "Gesamteiweiß"**
    r1-38 [DE plain VFUR wide]  Gesamteiweiß                         7,70   g/dl   [6,00 - 8,30]
    r1-45 [DE leaders VURF wide]  Gesamteiweiß ......................   6,8   g/dl   6,0 - 8,3
    r1-53 [DE plain VURF wide]  Gesamteiweiß                         75,0   g/l   60,0 – 83,0

**45× miss | free-t3 | "Triiodothyronine (T3), Free"**
    r1-66 [US plain VFUR single]  Triiodothyronine (T3), Free 3.7 pg/mL 2.3 - 4.2
    r1-72 [US plain VFRU wide]  Triiodothyronine (T3), Free          2.7   2.3 - 4.2 pg/mL
    r1-106 [US plain VFRU wide]  Triiodothyronine (T3), Free          2.5   2.3 - 4.2 pg/mL

**45× miss | potassium-serum | "Potasiu"**
    r1-82 [RO plain VURF single]  Potasiu 4,300 mmol/L 3,500 – 5,100
    r1-126 [RO plain VFUR tab]  Potasiu	4,00	mmol/L	3,50 – 5,10
    r1-214 [RO wrap VFUR single]  Potasiu 5,000 mmol/L 3,500-5,100

**44× miss | total-protein | "Proteine totale"**
    r1-55 [RO twocol VURF single]  Proteine totale 6.7 g/dL [6.0 - 8.3]
    r1-57 [RO wrap VURF wide]  Proteine totale ⏎         10,20   g/dL   6,00 - 8,30   *
    r1-214 [RO wrap VFUR single]  Proteine totale ⏎         6,700 g/dl 6,000-8,300

**43× range missed | ES bracket | upper only**
    r1-70 [ES plain VFUR single]  Colesterol total 195 mg/dL Hasta 200  →  read 195 mg/dL
    r1-79 [ES csv:semicolon VFUR wide]  COLESTEROL TOTAL;118;mg/dL;Hasta 200  →  read 118 mg/dL
    r1-79 [ES csv:semicolon VFUR wide]  TRIGLICÉRIDOS;126;mg/dL;Hasta 150  →  read 126 mg/dL

**43× range missed | DE paren | upper only**
    r1-270 [DE glue VFUR single]  Gesamtcholesterin 157mg/dl bis 200  →  read 157 mg/dL
    r1-425 [DE plain VFUR wide]  Gesamtcholesterin                    4,81   mmol/l   bis 5,20  →  read 186 mg/dL
    r1-535 [DE plain VFUR single]  CHOLESTERIN GESAMT 130 mg/dl bis 200  →  read 130 mg/dL

**42× unit | "mL/min/{1.73_m2}" not recognised**
    r1-2 [US fhir:loinc-only VFRU wide]  EGFR 41 mL/min/{1.73_m2}  →  read 41  [60, ]
    r1-146 [US fhir:loinc-only VFUR wide]  EGFR 80 mL/min/{1.73_m2}  →  read 80  [60, ]
    r1-147 [RO fhir:text-only VURF wide]  eGFR 94 mL/min/{1.73_m2}  →  read 94  [60, ]

**42× miss | hs-crp | "Proteina C reactivă înalt sensibilă (hs-CRP)"**
    r1-14 [RO plain VFUR tab]  Proteina C reactivă înalt sensibilă (hs-CRP)	2,3	mg/l	<= 3,0
    r1-57 [RO wrap VURF wide]  Proteina C reactivă înalt sensibilă (hs-CRP) ⏎         2,20   mg/L   < 3,00
    r1-82 [RO plain VURF single]  Proteina C reactivă înalt sensibilă (hs-CRP) 4,600 mg/L < 3,000

**42× miss | hs-crp | "CRP hochsensitiv"**
    r1-19 [DE plain VURF single]  CRP hochsensitiv 2,3 mg/l bis 3,0
    r1-53 [DE plain VURF wide]  CRP hochsensitiv                     2,80   mg/l   < 3,00
    r1-95 [DE plain VURF single]  CRP hochsensitiv 1,5 mg/l < 3,0

**42× unit | "×10¹²/L" not recognised**
    r1-65 [UK plain VURF wide]  Red cell count                       4.40   ×10¹²/L   4.20 - 5.90  →  read 4.4  [4.2, 5.9]
    r1-105 [UK plain VFUR single]  RBC 5.25 ×10¹²/L 4.20-5.90  →  read 5.25  [4.2, 5.9]
    r1-139 [UK plain VURF wide]  RBC                                  5.87   ×10¹²/L   [4.20 - 5.90]  →  read 5.87  [4.2, 5.9]

**41× unconverted | mchc | g/l**
    r1-50 [DE csv:semicolon VURF wide]  MCHC;260,0 -;g/l;320,0 – 360,0  →  read 260 g/L [320, 360]
    r1-53 [DE plain VURF wide]  MCHC                                 327,0   g/l   320,0 – 360,0  →  read 327 g/L [320, 360]
    r1-96 [DE plain VURF single]  MCHC 335,0 g/l (320,0 - 360,0)  →  read 335 g/L [320, 360]

**40× range missed | DE tight | upper only**
    r1-49 [DE csv:semicolon VFUR wide]  Triglyceride;1,4903;mmol/l;bis 1,6900  →  read 132 mg/dL
    r1-68 [DE colon VFUR wide]  HSCRP:                               1,6   mg/l   bis 3,0  →  read 1.6 mg/L
    r1-68 [DE colon VFUR wide]  TRIGLYCERIDE:                        91   mg/dl   bis 150  →  read 91 mg/dL

**40× miss | hba1c | "Hemoglobina glicada (HbA1c)"**
    r1-83 [ES plain VURF wide]  Hemoglobina glicada (HbA1c)          4,7   %   [4,0 - 5,6]
    r1-191 [ES leaders VFUR wide]  Hemoglobina glicada (HbA1c) .......   4,90   %   4,00 - 5,60
    r1-192 [ES wrap VFUR wide]  Hemoglobina glicada (HbA1c) ⏎         4,7   %   4,0 - 5,6

**39× false critical | wbc**
    r1-1 [ES plain VFUR wide]  Leucocitos                           9,200   10^3/µL   (4,000 - 11,000)  →  read 9200 10^3/µL [4000, 11000]
    r1-49 [DE csv:semicolon VFUR wide]  Leukozyten;10,300;G/l;4,000-11,000  →  read 10300 g/L [4000, 11000]
    r1-78 [DE wrap VURF single]  Leukozyten 9,000 Tsd/µl 4,000 – 11,000  →  read 9000  [4000, 11000]

**39× range missed | DE dash | upper only**
    r1-11 [DE csv:semicolon VURF wide]  Cholesterin gesamt;178;mg/dl;bis 200  →  read 178 mg/dL
    r1-11 [DE csv:semicolon VURF wide]  LDL-Cholesterin;65;mg/dl;bis 100  →  read 65 mg/dL
    r1-11 [DE csv:semicolon VURF wide]  Triglyceride;72;mg/dl;bis 150  →  read 72 mg/dL

**39× miss | magnesium-serum | "MAGNESIO"**
    r1-20 [ES unitspace VURF single]  MAGNESIO 2,1 mg / dL 1,7 - 2,4
    r1-58 [ES plain VFUR single]  MAGNESIO 2,3 mg/dL (1,7 - 2,4)
    r1-67 [ES plain VFUR single]  MAGNESIO 2,20 mg/dL 1,70 - 2,40

**38× unit | "pg/mL" read as "pg"**
    r1-20 [ES unitspace VURF single]  VITAMINA B12 876 pg / mL 200 - 900  →  read 876 pg [200, 900]
    r1-56 [ES unitspace VFUR wide]  T3 libre                             3,60   pg / mL   2,30-4,20  →  read 3.6 pg [2.3, 4.2]
    r1-56 [ES unitspace VFUR wide]  Vitamina B12                         112,0   pg / mL   200,0-900,0  →  read 112 pg [200, 900]

**38× range missed | US tight | two-sided**
    r1-92 [US csv:lowhigh VFRU wide]  "PROTEIN, TOTAL",7.60,g/dL,6,8.3,2026-05-07  →  read 7.6 
    r1-92 [US csv:lowhigh VFRU wide]  "BILIRUBIN, TOTAL",1.00,mg/dL,0.2,1.2,2026-05-07  →  read 1 
    r1-92 [US csv:lowhigh VFRU wide]  "IRON, TOTAL",253.0,mcg/dL,50,170,2026-05-07  →  read 253 

**37× unit | "m[IU]/L" not recognised**
    r1-2 [US fhir:loinc-only VFRU wide]  TSH 0.71 m[IU]/L  →  read 0.71  [0.4, 4]
    r1-5 [US fhir:loinc-only VFRU wide]  TSH 1.91 m[IU]/L  →  read 1.91  [0.4, 4]
    r1-18 [RO fhir:loinc-only VURF wide]  TSH 0.75 m[IU]/L  →  read 0.75  [0.4, 4]

**37× miss | egfr | "FILTRADO GLOMERULAR ESTIMADO (CKD-EPI)"**
    r1-20 [ES unitspace VURF single]  FILTRADO GLOMERULAR ESTIMADO (CKD-EPI) 75 mL / min/1.73m2 > 60
    r1-58 [ES plain VFUR single]  FILTRADO GLOMERULAR ESTIMADO (CKD-EPI) 50 mL/min/1.73m2 >60
    r1-67 [ES plain VFUR single]  FILTRADO GLOMERULAR ESTIMADO (CKD-EPI) 74,0 mL/min/1.73m2 >60,0

…and 701 smaller groups.
