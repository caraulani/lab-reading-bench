# Lab-report reader stress test

300 generated reports, 4918 rows with a known answer, seed 5. Read in 813.5 s (2711.5 ms a report).

| Outcome | Rows | Share | 95% interval |
|---|---|---|---|
| ok | 4795 | 97.5% | 97.02–97.90% |
| unit | 0 | 0.0% | 0.00–0.08% |
| unconverted | 0 | 0.0% | 0.00–0.08% |
| wrong | 120 | 2.4% | 2.04–2.91% |
| miss | 3 | 0.061% | 0.02–0.18% |

- **Critical values:** 60 of 60 caught (100.0%, interval 93.98–100.00%); 0 lost because the row was not read, 0 because it was misread. False critical alarms: 0.
- **Rows that are not on the report:** 0 (of 4915 rows read).
- **Lab's flag:** ok 4331, invented 463, missed 1.
- **Reference range:** ok 4768, wrong 21, missed 6.
- **Collection date:** ok 277.
- **Crashes:** 2.
- **Format invariance** (5 printings of each set of results): of 990 markers, read right in every printing 876 (88.5%), right in some printings but not others 114 (11.5%), never right 0. Critical results caught in every printing: 12 of 12.

## By locale
| locale | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| UK | 990 | 90.0% | 0.0% | 0.0% | 10.0% | 0.0% |
| DE | 974 | 97.6% | 0.0% | 0.0% | 2.1% | 0.3% |
| US | 990 | 99.9% | 0.0% | 0.0% | 0.1% | 0.0% |
| ES | 974 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| RO | 990 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By kind
| kind | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| csv | 434 | 97.2% | 0.0% | 0.0% | 2.3% | 0.5% |
| lines | 4029 | 97.5% | 0.0% | 0.0% | 2.5% | 0.025% |
| fhir | 455 | 98.0% | 0.0% | 0.0% | 2.0% | 0.0% |

## By variant
| variant | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| csv:comma | 74 | 94.6% | 0.0% | 0.0% | 5.4% | 0.0% |
| csv:lowhigh | 108 | 96.3% | 0.0% | 0.0% | 3.7% | 0.0% |
| wrap | 253 | 96.8% | 0.0% | 0.0% | 2.8% | 0.4% |
| plain | 2366 | 97.2% | 0.0% | 0.0% | 2.8% | 0.0% |
| fhir:text-only | 154 | 97.4% | 0.0% | 0.0% | 2.6% | 0.0% |
| glue | 348 | 97.4% | 0.0% | 0.0% | 2.6% | 0.0% |
| fhir:loinc+text | 213 | 97.7% | 0.0% | 0.0% | 2.3% | 0.0% |
| leaders | 223 | 97.8% | 0.0% | 0.0% | 2.2% | 0.0% |
| twocol | 425 | 97.9% | 0.0% | 0.0% | 2.1% | 0.0% |
| unitspace | 296 | 98.3% | 0.0% | 0.0% | 1.7% | 0.0% |
| csv:semicolon | 252 | 98.4% | 0.0% | 0.0% | 0.8% | 0.8% |
| fhir:loinc-only | 88 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| colon | 118 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By units
| units | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| SI | 1230 | 90.1% | 0.0% | 0.0% | 9.8% | 0.2% |
| conventional | 3688 | 100.0% | 0.0% | 0.0% | 0.0% | 0.027% |

## By decimal
| decimal | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| point | 2609 | 96.2% | 0.0% | 0.0% | 3.8% | 0.0% |
| comma | 2309 | 99.0% | 0.0% | 0.0% | 0.9% | 0.1% |

## By sep
| sep | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| wide | 3280 | 97.4% | 0.0% | 0.0% | 2.5% | 0.091% |
| tab | 434 | 97.5% | 0.0% | 0.0% | 2.5% | 0.0% |
| single | 1204 | 97.8% | 0.0% | 0.0% | 2.2% | 0.0% |

## By order
| order | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| VFUR | 2638 | 96.9% | 0.0% | 0.0% | 3.0% | 0.076% |
| VURF | 1685 | 97.6% | 0.0% | 0.0% | 2.4% | 0.059% |
| VFRU | 481 | 99.8% | 0.0% | 0.0% | 0.2% | 0.0% |
| FVUR | 114 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By marker
| marker | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| vitamin-b12 | 153 | 81.0% | 0.0% | 0.0% | 19.0% | 0.0% |
| folate-serum | 160 | 83.1% | 0.0% | 0.0% | 16.3% | 0.6% |
| free-t3 | 143 | 88.1% | 0.0% | 0.0% | 11.9% | 0.0% |
| vitamin-d-25-oh | 153 | 90.8% | 0.0% | 0.0% | 9.2% | 0.0% |
| hba1c | 105 | 93.3% | 0.0% | 0.0% | 6.7% | 0.0% |
| testosterone-total | 168 | 95.8% | 0.0% | 0.0% | 3.6% | 0.6% |
| free-t4 | 123 | 95.9% | 0.0% | 0.0% | 4.1% | 0.0% |
| uric-acid | 90 | 96.7% | 0.0% | 0.0% | 3.3% | 0.0% |
| ldl-cholesterol | 120 | 96.7% | 0.0% | 0.0% | 3.3% | 0.0% |
| total-cholesterol | 105 | 97.1% | 0.0% | 0.0% | 2.9% | 0.0% |
| hdl-cholesterol | 130 | 97.7% | 0.0% | 0.0% | 2.3% | 0.0% |
| mchc | 123 | 98.4% | 0.0% | 0.0% | 1.6% | 0.0% |
| blood-urea-nitrogen | 80 | 98.8% | 0.0% | 0.0% | 0.0% | 1.3% |
| serum-iron | 90 | 98.9% | 0.0% | 0.0% | 1.1% | 0.0% |
| total-bilirubin | 148 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| alt | 173 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| alp | 158 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ggt | 148 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ferritin | 95 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| transferrin-saturation | 100 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| tsh | 138 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| glucose-fasting | 95 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| creatinine-serum | 90 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| egfr | 85 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| sodium-serum | 105 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| potassium-serum | 95 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| chloride-serum | 90 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| calcium-total | 90 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| magnesium-serum | 95 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| phosphorus-serum | 90 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| albumin-serum | 90 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hs-crp | 105 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| wbc | 128 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| rbc | 120 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hemoglobin | 138 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mcv | 133 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mch | 125 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| platelet-count | 103 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ast | 135 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hematocrit | 118 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| triglycerides | 95 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-protein | 90 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## What went wrong, most common first

**159× flag invented | none VFUR**
    r5-1v1 [UK plain VFUR single]  Creatinine 149 µmol/L 53 - 115  →  read 1.69 mg/dL [0.6, 1.3] H
    r5-1v1 [UK plain VFUR single]  Potassium 2.8 mmol/L 3.5 - 5.1  →  read 2.8 mmol/L [3.5, 5.1] L
    r5-1v1 [UK plain VFUR single]  Vitamin D 60 nmol/L 75 - 250  →  read 24.06 ng/mL [30.08, 100.25] L

**132× flag invented | none VURF**
    r5-0v2 [DE twocol VURF tab]  Bilirubin gesamt	7	µmol/l	[3 - 21]  →  read 0.41 mg/dL [0.18, 1.23] L
    r5-0v2 [DE twocol VURF tab]  Alkalische Phosphatase	23	U/l	[44 - 147]  →  read 23 U/L [44, 147] L
    r5-0v2 [DE twocol VURF tab]  TSH	0,22	mIU/l	[0,40 - 4,00]  →  read 0.22 mIU/L [0.4, 4] L

**39× flag invented | none VFRU**
    r5-16v0 [US colon VFRU wide]  GLUCOSE:                             57   70-99 mg/dL  →  read 57 mg/dL [70, 99] L
    r5-16v0 [US colon VFRU wide]  HEMOGLOBIN A1C:                      7.3   4.0-5.6 %  →  read 7.3 % [4, 5.6] H
    r5-16v0 [US colon VFRU wide]  EGFR:                                38   >60 mL/min/1.73m2  →  read 38 mL/min/1.73m2 [, 60] L

**23× flag invented | HL VFUR**
    r5-15v0 [US csv:lowhigh VFUR wide]  GGT,94,U/L,8,61,2026-08-21  →  read 94 U/L [8, 61] H
    r5-15v0 [US csv:lowhigh VFUR wide]  "Folate (Folic Acid), Serum",2.3,ng/mL,3,20,2026-08-21  →  read 2.3 ng/mL [3, 20] L
    r5-27v1 [US csv:lowhigh VFUR wide]  ALKALINE PHOSPHATASE,205,U/L,44,147,2026-04-13  →  read 205 U/L [44, 147] H

**22× flag invented | HL VURF**
    r5-3v2 [UK csv:comma VURF wide]  Total bilirubin,7,,µmol/L,[3 - 21]  →  read 0.41 mg/dL [0.18, 1.23] L
    r5-11v3 [DE fhir:loinc-only VURF wide]  GPT (ALT) 662 U/L  →  read 662 U/L [7, 56] H
    r5-11v3 [DE fhir:loinc-only VURF wide]  GESAMTCHOLESTERIN 268 mg/dL  →  read 268 mg/dL [, 200] H

**22× flag invented | star VURF**
    r5-5v2 [UK fhir:text-only VURF wide]  GGT 7 U/L  →  read 7 U/L [8, 61] L
    r5-5v2 [UK fhir:text-only VURF wide]  WHITE CELL COUNT 19.0 10*3/uL  →  read 19 Thousand/uL [4, 11] H
    r5-5v2 [UK fhir:text-only VURF wide]  HAEMOGLOBIN 216 g/L  →  read 21.6 g/dL [12, 17.5] H

**15× flag invented | star VFUR**
    r5-0v1 [UK csv:lowhigh VFUR wide]  Total bilirubin,7,µmol/L,3,21,2026-06-06  →  read 0.41 mg/dL [0.18, 1.23] L
    r5-0v1 [UK csv:lowhigh VFUR wide]  Alkaline phosphatase,23,U/L,44,147,2026-06-06  →  read 23 U/L [44, 147] L
    r5-0v1 [UK csv:lowhigh VFUR wide]  TSH,0.220,mIU/L,0.4,4,2026-06-06  →  read 0.22 mIU/L [0.4, 4] L

**13× wrong | folate-serum | point plain | unit nmol/L**
    r5-1v1 [UK plain VFUR single]  Folate 34.7 nmol/L 6.8 - 45.3  →  read 13.9 ng/mL [2.72, 18.13]
    r5-10v1 [UK plain VFUR wide]  Folate                               8.2   nmol/L   6.8 – 45.3  →  read 8.2 ng/mL [6.8, 45.3]
    r5-11v2 [UK plain VURF single]  FOLATE 47.4 nmol/L 6.8 – 45.3  →  read 21.33 ng/mL [3.06, 20.39] H

**12× wrong | vitamin-b12 | point plain | unit pmol/L**
    r5-1v1 [UK plain VFUR single]  Vitamin B12 556 pmol/L 148 - 664  →  read 234.7 pg/mL [62.46, 280.3]
    r5-10v1 [UK plain VFUR wide]  Vitamin B12                          501   pmol/L   148 – 664  →  read 211.6 pg/mL [62.5, 280.6]
    r5-13v1 [UK plain VFUR wide]  Vitamin B12                          399   pmol/L   148 – 664  →  read 479.39 pg/mL [177.83, 797.93]

**11× flag invented | arrows VFUR**
    r5-6v3 [DE twocol VFUR tab]  LEUKOZYTEN	10,100	Tsd/µl	4,000 - 11,000  →  read 10.1 Thousand/uL [4, 11] H
    r5-23v4 [RO fhir:text-only VFUR wide]  Creatinina 4.49 mg/dL  →  read 4.49 mg/dL [0.6, 1.3] H
    r5-23v4 [RO fhir:text-only VFUR wide]  Sodiu 197 mmol/L  →  read 197 mmol/L [135, 145] H

**9× flag invented | words VFUR**
    r5-2v2 [UK plain VFUR single]  Total bilirubin 10 µmol/L 3-21  →  read 0.58 mg/dL [0.18, 1.23] L
    r5-25v1 [US csv:lowhigh VFUR wide]  WHITE BLOOD CELL COUNT,3.4,K/uL,4,11,2026-10-19  →  read 3.4 Thousand/uL [4, 11] L
    r5-25v1 [US csv:lowhigh VFUR wide]  MCH,39.3,pg,27,33,2026-10-19  →  read 39.3 pg [27, 33] H

**8× wrong | free-t3 | point plain | unit pmol/L**
    r5-14v2 [UK plain VURF wide]  FREE T3                              2.5   pmol/L   3.5-6.5   LOW  →  read 0.38 pg/mL [0.53, 0.99] L
    r5-22v1 [UK plain VURF tab]  Free T3	7.1	pmol/L	3.5 - 6.5	HIGH  →  read 11.04 pg/mL [5.44, 10.1] H
    r5-25v0 [UK plain VFUR wide]  Free T3                              4.9   pmol/L   [3.5 - 6.5]  →  read 4.9 pg/mL [3.5, 6.5]

**7× flag invented | arrows VURF**
    r5-0v3 [ES fhir:loinc+text VURF wide]  Fosfatasa alcalina 23 U/L  →  read 23 U/L [44, 147] L
    r5-0v3 [ES fhir:loinc+text VURF wide]  TSH 0.22 m[IU]/L  →  read 0.22 mIU/L [0.4, 4] L
    r5-21v4 [RO fhir:loinc+text VURF wide]  NUMĂR DE ERITROCITE 6.31 M/uL  →  read 6.31 Million/uL [4.2, 5.9] H

**7× flag invented | words VURF**
    r5-4v2 [UK twocol VURF wide]  Bilirubin                            17   µmol/L   (3 - 21)  →  read 1 mg/dL [0.18, 1.23] L
    r5-7v1 [UK fhir:loinc+text VURF wide]  Sodium 130 mmol/L  →  read 130 mmol/L [135, 145] L
    r5-7v1 [UK fhir:loinc+text VURF wide]  Total protein 126 g/L  →  read 12.6 g/dL [6, 8.3] H

**5× flag invented | HL VFRU**
    r5-6v1 [US glue VFRU wide]  WHITE BLOOD CELL COUNT               10.1   4.0-11.0 K/uL  →  read 10.1 Thousand/uL [4, 11] H
    r5-26v1 [US csv:lowhigh VFRU wide]  HEMOGLOBIN A1c,23,mmol/mol,20,38,2026-07-02  →  read 4.3 % [2.2, 3.6] H
    r5-26v1 [US csv:lowhigh VFRU wide]  PHOSPHATE (AS PHOSPHORUS),0.52,mmol/L,0.81,1.45,2026-07-02  →  read 1.61 mg/dL [2.51, 4.49] L

**5× flag invented | star FVUR**
    r5-7v3 [ES fhir:loinc+text FVUR wide]  SODIO 130 mmol/L  →  read 130 mmol/L [135, 145] L
    r5-7v3 [ES fhir:loinc+text FVUR wide]  PROTEÍNAS TOTALES 12.6 g/dL  →  read 12.6 g/dL [6, 8.3] H
    r5-7v3 [ES fhir:loinc+text FVUR wide]  HCM 35.9 pg  →  read 35.9 pg [27, 33] H

**5× wrong | vitamin-d-25-oh | point plain | unit nmol/L**
    r5-15v1 [UK plain VFUR wide]  Vitamin D                            107   nmol/L   [75 - 250]  →  read 25.67 ng/mL [17.98, 59.93]
    r5-23v1 [UK plain VFUR tab]  Vitamin D	215	nmol/L	75-250  →  read 51.6 ng/mL [18, 60]
    r5-30v2 [UK plain VFUR wide]  Vitamin D                            187.2   nmol/L   [75.0 - 250.0]  →  read 45 ng/mL [18, 60.1]

**4× flag invented | words VFRU**
    r5-4v1 [US fhir:loinc-only VFRU wide]  ALT (SGPT) 4 U/L  →  read 4 U/L [7, 56] L
    r5-4v1 [US fhir:loinc-only VFRU wide]  WBC 2.4 10*3/uL  →  read 2.4 Thousand/uL [4, 11] L
    r5-4v1 [US fhir:loinc-only VFRU wide]  HEMATOCRIT 23.8 %  →  read 23.8 % [36, 50] L

**4× wrong | hba1c | point plain | unit mmol/mol**
    r5-13v1 [UK plain VFUR wide]  HbA1c                                16   mmol/mol   20 – 38  →  read 3.71 % [2.24, 3.16]
    r5-38v0 [UK plain VFUR wide]  HBA1C                                16   LOW   mmol/mol   (20 - 38)  →  read 4.34 % [3.1, 5.6] L
    r5-43v1 [UK plain VFUR wide]  HbA1c                                16   mmol/mol   [20 - 38]  →  read 3.52 % [4, 5.6] L

**4× range wrong | UK spaced | two-sided**
    r5-16v1 [UK csv:comma VFUR wide]  HBA1C (IFCC),56,*,mmol/mol,20 - 38  →  read 7.3 % [4, 5.7] H
    r5-19v1 [UK fhir:loinc+text VFUR wide]  HbA1c 33 mmol/mol  →  read 5.2 % [2.9, 5.6]
    r5-42v1 [UK leaders VURF single]  Free T4 ........................... 18.1 pmol/L 10.3 - 23.2  →  read 1.4 ng/dL [0.8, 1.79]

**3× wrong | testosterone-total | point plain | unit nmol/L**
    r5-1v1 [UK plain VFUR single]  Testosterone 31.2 nmol/L 9.2 - 31.8  →  read 9.01 ng/dL [2.66, 9.18]
    r5-36v2 [UK plain VURF wide]  Testosterone                         29.5   nmol/L   9.2-31.8  →  read 8.52 ng/dL [2.66, 9.18]
    r5-44v0 [UK plain VFUR wide]  TESTOSTERONE                         8.6   *   nmol/L   9.2 – 31.8  →  read 8.6 ng/dL [9.2, 31.8] L

**3× wrong | folate-serum | comma plain | unit nmol/l**
    r5-7v2 [DE plain VFUR wide]  Folsäure                             29,5   nmol/l   6,8-45,3  →  read 12.81 ng/mL [2.95, 19.67]
    r5-46v2 [DE plain VURF wide]  Folsäure                             14,73   nmol/l   (6,80 - 45,30)  →  read 3.32 ng/mL [1.53, 10.2]
    r5-59v0 [DE plain VFUR single]  Folsäure 17,0 nmol/l [6,8 - 45,3]  →  read 7.2 ng/mL [3, 19.2]

**3× wrong | uric-acid | point plain | unit µmol/L**
    r5-10v1 [UK plain VFUR wide]  Urate                                83   L   µmol/L   149 – 416  →  read 5 mg/dL [8.9, 24.9] L
    r5-13v1 [UK plain VFUR wide]  Urate                                291   µmol/L   149 – 416  →  read 5.01 mg/dL [2.57, 7.17]
    r5-23v1 [UK plain VFUR tab]  Urate	404	µmol/L	149-416  →  read 7 mg/dL [2.6, 7.2]

**3× range missed | US spaced | lower only**
    r5-12v0 [US plain VFRU wide]  EGFR                                 107   >60 mL/min/1.73m2  →  read 107 mL/min/1.73m2
    r5-19v0 [US plain VFRU wide]  EGFR                                 109   >60 mL/min/1.73m2  →  read 109 mL/min/1.73m2
    r5-19v0 [US plain VFRU wide]  HDL Cholesterol                      65   >40 mg/dL  →  read 65 mg/dL

**3× flag invented | plusminus VURF**
    r5-45v0 [DE fhir:loinc-only VURF wide]  MCHC 46.7 g/dL  →  read 46.7 g/dL [32, 36] H
    r5-45v0 [DE fhir:loinc-only VURF wide]  THROMBOZYTEN 557 K/uL  →  read 557 Thousand/uL [150, 400] H
    r5-45v0 [DE fhir:loinc-only VURF wide]  VITAMIN D (25-OH) 19 ng/mL  →  read 19 ng/mL [30, 100] L

**3× range wrong | UK tight | two-sided**
    r5-52v1 [UK plain VFUR tab]  Free T4	34.4	HIGH	pmol/L	10.3-23.2  →  read 2.66 ng/dL [0.8, 1.79] H
    r5-53v1 [UK plain VURF single]  HBA1C 37 mmol/mol 20-38  →  read 5.5 % [4, 5.7]
    r5-56v2 [UK unitspace VFUR wide]  Free T4                              32.6   HIGH   pmol / L   10.3-23.2  →  read 2.52 ng/dL [0.8, 1.79] H

**2× range wrong | DE bracket | two-sided**
    r5-0v2 [DE twocol VURF tab]  Freies T3	4,6	pmol/l	[3,5 - 6,5]  →  read 3.01 pg/mL [2.3, 4.3]
    r5-13v2 [DE leaders VURF wide]  Freies T4 .........................   18,4   pmol/l   [10,3 - 23,2]  →  read 1.421 ng/dL [0.795, 1.79]

**2× wrong | vitamin-b12 | point csv:comma | unit pmol/L**
    r5-3v2 [UK csv:comma VURF wide]  Vitamin B12,303,,pmol/L,[148 - 664]  →  read 399.36 pg/mL [195.12, 875.88]
    r5-16v1 [UK csv:comma VFUR wide]  VITAMIN B12,552,,pmol/L,148 - 664  →  read 230.2 pg/mL [61.7, 277]

**2× wrong | vitamin-d-25-oh | point fhir:text-only | unit nmol/L**
    r5-5v2 [UK fhir:text-only VURF wide]  25-OH VITAMIN D 210 nmol/L  →  read 50.54 ng/mL [18.05, 60.15]
    r5-59v2 [UK fhir:text-only VURF wide]  Vitamin D 240 nmol/L  →  read 97.44 ng/mL [30.07, 100.22]

**2× wrong | vitamin-b12 | point fhir:text-only | unit pmol/L**
    r5-5v2 [UK fhir:text-only VURF wide]  VITAMIN B12 591 pmol/L  →  read 532.29 pg/mL [133.29, 597.96]
    r5-59v2 [UK fhir:text-only VURF wide]  Vitamin B12 481 pmol/L  →  read 481 pg/mL [197.33, 885.33]

**2× crash | http 429: Provider returned error**
    r5-5v3
    r5-5v4

**2× wrong | vitamin-b12 | point unitspace | unit pmol/L**
    r5-6v2 [UK unitspace VURF single]  Vitamin B12 832 pmol / L 148 - 664 *  →  read 197.3 pg/mL [35.1, 157.6] H
    r5-56v2 [UK unitspace VFUR wide]  Vitamin B12                          359   pmol / L   148-664  →  read 479.3 pg/mL [197.5, 886.6]

**2× wrong | folate-serum | point unitspace | unit nmol/L**
    r5-6v2 [UK unitspace VURF single]  Serum folate 41.0 nmol / L 6.8 - 45.3  →  read 41 ng/mL [6.8, 45.3]
    r5-56v2 [UK unitspace VFUR wide]  Folate                               11.3   nmol / L   6.8-45.3  →  read 2.44 ng/mL [1.47, 9.78]

**2× wrong | free-t3 | comma plain | unit pmol/l**
    r5-7v2 [DE plain VFUR wide]  fT3                                  3,7   pmol/l   3,5-6,5  →  read 5.68 pg/mL [5.37, 9.98]
    r5-46v2 [DE plain VURF wide]  Freies T3                            7,99   pmol/l   (3,50 - 6,50)  →  read 1.23 pg/mL [0.54, 1] H

**2× range wrong | US tight | lower only**
    r5-9v0 [US plain VFRU single]  EGFR 63 >60 mL/min/1.73m2  →  read 63 mL/min/1.73m2 [, 60]
    r5-16v0 [US colon VFRU wide]  EGFR:                                38   >60 mL/min/1.73m2  →  read 38 mL/min/1.73m2 [, 60] L

**2× wrong | mchc | point plain | unit g/L**
    r5-12v1 [UK plain VURF wide]  MCHC                                 327   g/L   (320 - 360)  →  read 39.6 g/dL [32, 36] H
    r5-21v1 [UK plain VURF wide]  MCHC                                 323   g/L   320 - 360  →  read 33.9 g/dL [32, 36]

**2× range wrong | UK dash | two-sided**
    r5-13v1 [UK plain VFUR wide]  Free T4                              18.4   pmol/L   10.3 – 23.2  →  read 1.42 ng/dL [0.8, 1.79]
    r5-48v2 [UK csv:lowhigh VFUR wide]  HbA1c,37,mmol/mol,20,38,2026-07-08  →  read 5.5 % [3.8, 5.6]

**2× wrong | vitamin-b12 | point fhir:loinc+text | unit pmol/L**
    r5-19v1 [UK fhir:loinc+text VFUR wide]  Vitamin B12 178 pmol/L  →  read 237.3 pg/mL [197.4, 885.2]
    r5-55v1 [UK fhir:loinc+text VURF wide]  Vitamin B12 362 pmol/L  →  read 165.1 pg/mL [67.5, 302.8]

**2× wrong | free-t4 | point plain | unit pmol/L**
    r5-22v1 [UK plain VURF tab]  Free T4	27.2	pmol/L	10.3 - 23.2	HIGH  →  read 3.54 ng/dL [1.34, 3.02] H
    r5-25v0 [UK plain VFUR wide]  Free T4                              25.6   H   pmol/L   [10.3 - 23.2]  →  read 3.29 ng/dL [1.33, 2.99] H

**2× wrong | folate-serum | comma twocol | unit nmol/l**
    r5-24v2 [DE twocol VFUR tab]  FOLSÄURE	39,9	nmol/l	6,8 - 45,3  →  read 17.27 ng/mL [2.94, 19.61]
    r5-55v2 [DE twocol VURF single]  Folsäure 10,20 nmol/l 6,80 - 45,30  →  read 4.59 ng/mL [3.06, 20.38]

**2× wrong | free-t3 | point glue | unit pmol/L**
    r5-28v2 [UK glue VFUR wide]  Free T3                              2.9   LOW   pmol/L   3.5-6.5  →  read 0.45 pg/mL [0.54, 1.01] L
    r5-35v2 [UK glue VFUR wide]  Free T3                              2.5   L   pmol/L   [3.5 - 6.5]  →  read 0.38 pg/mL [0.54, 1] L

**2× wrong | vitamin-b12 | point glue | unit pmol/L**
    r5-28v2 [UK glue VFUR wide]  Vitamin B12                          623pmol/L   148-664  →  read 262.7 pg/mL [62.4, 280.3]
    r5-35v2 [UK glue VFUR wide]  Vitamin B12                          514pmol/L   [148 - 664]  →  read 231.77 pg/mL [66.71, 299.46]

**2× wrong | folate-serum | point glue | unit nmol/L**
    r5-28v2 [UK glue VFUR wide]  Folate                               36.9nmol/L   6.8-45.3  →  read 14.76 ng/mL [2.72, 18.12]
    r5-35v2 [UK glue VFUR wide]  Folate                               8.8nmol/L   [6.8 - 45.3]  →  read 3.57 ng/mL [2.76, 18.37]

**2× wrong | testosterone-total | point glue | unit nmol/L**
    r5-28v2 [UK glue VFUR wide]  Testosterone                         12.0nmol/L   9.2-31.8  →  read 34.61 ng/dL [26.55, 91.72]
    r5-35v2 [UK glue VFUR wide]  Testosterone                         9.6nmol/L   [9.2 - 31.8]  →  read 27.69 ng/dL [26.54, 91.69]

**2× wrong | ldl-cholesterol | point plain | unit mmol/L**
    r5-30v2 [UK plain VFUR wide]  LDL cholesterol                      2.28   mmol/L   < 2.60  →  read 132.3 mg/dL [, 150.7]
    r5-45v2 [UK plain VFUR single]  LDL cholesterol 2.1 mmol/L <= 2.6  →  read 82.26 mg/dL [, 101.83]

**2× wrong | hdl-cholesterol | point plain | unit mmol/L**
    r5-30v2 [UK plain VFUR wide]  HDL cholesterol                      0.853   *   mmol/L   >1.030  →  read 49.4 mg/dL [59.7, ] L
    r5-45v2 [UK plain VFUR single]  HDL cholesterol 1.71 mmol/L > 1.03  →  read 66.99 mg/dL [40.36, ]

**2× wrong | total-cholesterol | point wrap | unit mmol/L**
    r5-40v2 [UK wrap VFUR wide]  Total cholesterol ⏎         4.6   mmol/L   <5.2  →  read 184 mg/dL [, 208]
    r5-47v2 [UK wrap VFUR single]  Cholesterol 6.2 * mmol/L <= 5.2  →  read 242 mg/dL [, 202] H

**2× wrong | ldl-cholesterol | point wrap | unit mmol/L**
    r5-40v2 [UK wrap VFUR wide]  LDL cholesterol ⏎         1.7   mmol/L   < 2.6  →  read 68 mg/dL [, 104]
    r5-47v2 [UK wrap VFUR single]  LDL cholesterol ⏎         4.0 * mmol/L <2.6  →  read 156 mg/dL [, 101] H

**2× wrong | vitamin-b12 | comma plain | unit pmol/l**
    r5-46v2 [DE plain VURF wide]  Vitamin B12                          110,0   pmol/l   (148,0 - 664,0)  →  read 83.66 pg/mL [111.04, 498.16] L
    r5-59v0 [DE plain VFUR single]  Vitamin B12 481 pmol/l [148 - 664]  →  read 320.7 pg/mL [197.4, 442.9]

**1× wrong | free-t3 | point csv:lowhigh | unit pmol/L**
    r5-0v1 [UK csv:lowhigh VFUR wide]  Free T3,4.6,pmol/L,3.5,6.5,2026-06-06  →  read 3.51 pg/mL [2.67, 4.97]

**1× range missed | DE dash | lower only**
    r5-1v2 [DE plain VFUR wide]  eGFR (CKD-EPI)                       107,0   mL/min/1.73m2   > 60,0  →  read 107 mL/min/1.73m2

**1× range missed | ES dash | lower only**
    r5-1v3 [ES unitspace VURF wide]  Filtrado glomerular estimado (CKD-EPI)   107   mL / min/1.73m2   >60  →  read 107 mL/min/1.73m2

**1× range wrong | UK bracket | upper only**
    r5-3v2 [UK csv:comma VURF wide]  Triglycerides,1.10,,mmol/L,< 1.69  →  read 97.35 mg/dL [, 152.57]

**1× wrong | hba1c | point fhir:loinc+text | unit mmol/mol**
    r5-7v1 [UK fhir:loinc+text VURF wide]  HbA1c (IFCC) 21 mmol/mol  →  read 4.3 % [4.2, 5.6]

**1× wrong | free-t4 | comma plain | unit pmol/l**
    r5-7v2 [DE plain VFUR wide]  fT4                                  20,1   pmol/l   10,3-23,2  →  read 1.55 ng/dL [0.8, 1.79]

**1× wrong | vitamin-b12 | point twocol | unit pmol/L**
    r5-8v0 [UK twocol VFUR wide]  VITAMIN B12                          217.7   pmol/L   148.0 – 664.0  →  read 932.1 pg/mL [633.9, 2844.8]

**1× range wrong | DE paren | two-sided**
    r5-12v2 [DE leaders VFUR single]  FT4 ............................... 15,8 pmol/l (10,3 - 23,2)  →  read 1.22 ng/dL [0.8, 1.79]

**1× wrong | hba1c | comma leaders | unit mmol/mol**
    r5-13v2 [DE leaders VURF wide]  HbA1c .............................   16   mmol/mol   [20 - 38]   ↓  →  read 3.5424 % [2.2222, 3.5556] L

**1× wrong | folate-serum | comma leaders | unit nmol/l**
    r5-13v2 [DE leaders VURF wide]  Folsäure ..........................   22,4   nmol/l   [6,8 - 45,3]  →  read 9.572 ng/mL [2.906, 19.351]

**1× wrong | vitamin-d-25-oh | point csv:comma | unit nmol/L**
    r5-16v1 [UK csv:comma VFUR wide]  VITAMIN D,102,,nmol/L,75 - 250  →  read 25.5 ng/mL [18.8, 62.5]

**1× wrong | folate-serum | point csv:comma | unit nmol/L**
    r5-16v1 [UK csv:comma VFUR wide]  FOLATE,33.8,,nmol/L,6.8 - 45.3  →  read 13.5 ng/mL [2.7, 18.1]

**1× range wrong | RO dash | lower only**
    r5-16v4 [RO plain VFUR single]  Rata de filtrare glomerulară estimată 38,00 L mL/min/1.73m2 >60,00  →  read 38 mL/min/1.73m2 [, 60] L

**1× wrong | vitamin-d-25-oh | point fhir:loinc+text | unit nmol/L**
    r5-19v1 [UK fhir:loinc+text VFUR wide]  Vitamin D 102 nmol/L  →  read 4.1 ng/mL [3, 10]

**1× wrong | folate-serum | point fhir:loinc+text | unit nmol/L**
    r5-19v1 [UK fhir:loinc+text VFUR wide]  Folate 29.0 nmol/L  →  read 12.7 ng/mL [3, 20]

**1× miss | blood-urea-nitrogen | "Harnstoff-N"**
    r5-19v2 [DE wrap VURF wide]  Harnstoff-N                          17   mg/dl   (7 - 25)

**1× wrong | free-t3 | comma csv:semicolon | unit pmol/l**
    r5-20v0 [DE csv:semicolon VURF wide]  fT3;3,2 *;pmol/l;3,5 - 6,5  →  read 0.49 pg/mL [0.54, 1] L

**1× wrong | serum-iron | comma twocol | unit µmol/l**
    r5-24v2 [DE twocol VFUR tab]  EISEN	4,8	*	µmol/l	9,0 - 30,4  →  read 34.37 mcg/dL [64.45, 217.67] L

**1× range wrong | US tight | two-sided**
    r5-26v1 [US csv:lowhigh VFRU wide]  HEMOGLOBIN A1c,23,mmol/mol,20,38,2026-07-02  →  read 4.3 % [2.2, 3.6] H

**1× wrong | free-t4 | point csv:lowhigh | unit pmol/L**
    r5-26v1 [US csv:lowhigh VFRU wide]  "T4,Free(Direct)",23.0,pmol/L,10.3,23.2,2026-07-02  →  read 1.77 ng/dL [0.79, 1.79]

**1× wrong | vitamin-d-25-oh | point csv:lowhigh | unit nmol/L**
    r5-27v2 [UK csv:lowhigh VFUR wide]  25-OH Vitamin D,195,nmol/L,75,250,2026-04-13  →  read 7.61 ng/mL [2.93, 9.76]

**1× wrong | vitamin-b12 | point csv:lowhigh | unit pmol/L**
    r5-27v2 [UK csv:lowhigh VFUR wide]  Vitamin B12,725,pmol/L,148,664,2026-04-13  →  read 531.65 pg/mL [108.52, 486.92] H

**1× range missed | US tight | lower only**
    r5-28v1 [US plain VFRU wide]  EGFR                                 64   >60 mL/min/1.73m2  →  read 64 mL/min/1.73m2

**1× wrong | free-t3 | point twocol | unit pmol/L**
    r5-32v2 [UK twocol VFUR tab]  Free T3	5.7	pmol/L	3.5 - 6.5  →  read 3.91 pg/mL [2.4, 4.46]

**1× range wrong | DE tight | lower only**
    r5-34v2 [DE plain VURF tab]  eGFR (CKD-EPI)	48,0	mL/min/1.73m2	> 60,0  →  read 48 mL/min/1.73m2 [, 60] L

**1× flag missed | HL VFUR**
    r5-35v0 [ES twocol VFUR single]  ALT (GPT) 4 L U/L 7 – 56  →  read 4 U/L [7, 56]

**1× wrong | vitamin-d-25-oh | point glue | unit nmol/L**
    r5-35v2 [UK glue VFUR wide]  Vitamin D                            185nmol/L   [75 - 250]  →  read 44.4 ng/mL [18, 60]

**1× range wrong | UK paren | two-sided**
    r5-38v0 [UK plain VFUR wide]  FOLATE                               8.2   nmol/L   (6.8 - 45.3)  →  read 3.59 ng/mL [2.98, 19.84]

**1× wrong | hdl-cholesterol | point wrap | unit mmol/L**
    r5-40v2 [UK wrap VFUR wide]  HDL cholesterol ⏎         1.53   mmol/L   >= 1.03  →  read 61.2 mg/dL [41.2, ]

**1× wrong | free-t3 | point leaders | unit pmol/L**
    r5-42v1 [UK leaders VURF single]  Free T3 ........................... 4.5 pmol/L 3.5 - 6.5  →  read 4.5 pg/mL [3.5, 6.5]

**1× wrong | vitamin-d-25-oh | point leaders | unit nmol/L**
    r5-42v1 [UK leaders VURF single]  Vitamin D ......................... 150 nmol/L 75 - 250  →  read 37.6 ng/mL [18.8, 62.6]

…and 15 smaller groups.
