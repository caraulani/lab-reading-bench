# Lab-report reader stress test

43 generated reports, 330 rows with a known answer, seed 6, only kind=lines. Read in 0.0 s (0.1 ms a report).

| Outcome | Rows | Share | 95% interval |
|---|---|---|---|
| ok | 304 | 92.1% | 88.71–94.57% |
| unit | 0 | 0.0% | 0.00–1.15% |
| unconverted | 0 | 0.0% | 0.00–1.15% |
| wrong | 0 | 0.0% | 0.00–1.15% |
| miss | 26 | 7.9% | 5.43–11.29% |

- **Critical values:** 4 of 4 caught (100.0%, interval 51.01–100.00%); 0 lost because the row was not read, 0 because it was misread. False critical alarms: 0.
- **Rows that are not on the report:** 0 (of 304 rows read).
- **Lab's flag:** ok 293, invented 11.
- **Reference range:** ok 304.
- **Collection date:** ok 13, missed 1.
- **Crashes:** 29.
- **Format invariance** (5 printings of each set of results): of 95 markers, read right in every printing 69 (72.6%), right in some printings but not others 26 (27.4%), never right 0. Critical results caught in every printing: 1 of 1.

## By locale
| locale | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| RO | 84 | 69.0% | 0.0% | 0.0% | 0.0% | 31.0% |
| UK | 70 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| US | 95 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ES | 70 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| DE | 11 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By kind
| kind | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| lines | 330 | 92.1% | 0.0% | 0.0% | 0.0% | 7.9% |

## By variant
| variant | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| colon | 37 | 29.7% | 0.0% | 0.0% | 0.0% | 70.3% |
| unitspace | 33 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| plain | 223 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| wrap | 26 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| twocol | 11 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By units
| units | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| conventional | 260 | 90.0% | 0.0% | 0.0% | 0.0% | 10.0% |
| SI | 70 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By decimal
| decimal | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| point | 224 | 88.4% | 0.0% | 0.0% | 0.0% | 11.6% |
| comma | 106 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By sep
| sep | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| wide | 122 | 78.7% | 0.0% | 0.0% | 0.0% | 21.3% |
| single | 172 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| tab | 36 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By order
| order | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| VURF | 147 | 82.3% | 0.0% | 0.0% | 0.0% | 17.7% |
| VFUR | 157 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| VFRU | 26 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By marker
| marker | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| transferrin-saturation | 4 | 75.0% | 0.0% | 0.0% | 0.0% | 25.0% |
| free-t3 | 6 | 83.3% | 0.0% | 0.0% | 0.0% | 16.7% |
| testosterone-total | 6 | 83.3% | 0.0% | 0.0% | 0.0% | 16.7% |
| egfr | 8 | 87.5% | 0.0% | 0.0% | 0.0% | 12.5% |
| phosphorus-serum | 8 | 87.5% | 0.0% | 0.0% | 0.0% | 12.5% |
| total-protein | 8 | 87.5% | 0.0% | 0.0% | 0.0% | 12.5% |
| wbc | 8 | 87.5% | 0.0% | 0.0% | 0.0% | 12.5% |
| mch | 8 | 87.5% | 0.0% | 0.0% | 0.0% | 12.5% |
| serum-iron | 8 | 87.5% | 0.0% | 0.0% | 0.0% | 12.5% |
| glucose-fasting | 10 | 90.0% | 0.0% | 0.0% | 0.0% | 10.0% |
| hba1c | 10 | 90.0% | 0.0% | 0.0% | 0.0% | 10.0% |
| creatinine-serum | 10 | 90.0% | 0.0% | 0.0% | 0.0% | 10.0% |
| blood-urea-nitrogen | 10 | 90.0% | 0.0% | 0.0% | 0.0% | 10.0% |
| uric-acid | 10 | 90.0% | 0.0% | 0.0% | 0.0% | 10.0% |
| sodium-serum | 10 | 90.0% | 0.0% | 0.0% | 0.0% | 10.0% |
| potassium-serum | 10 | 90.0% | 0.0% | 0.0% | 0.0% | 10.0% |
| chloride-serum | 10 | 90.0% | 0.0% | 0.0% | 0.0% | 10.0% |
| calcium-total | 10 | 90.0% | 0.0% | 0.0% | 0.0% | 10.0% |
| albumin-serum | 10 | 90.0% | 0.0% | 0.0% | 0.0% | 10.0% |
| tsh | 10 | 90.0% | 0.0% | 0.0% | 0.0% | 10.0% |
| free-t4 | 10 | 90.0% | 0.0% | 0.0% | 0.0% | 10.0% |
| vitamin-d-25-oh | 10 | 90.0% | 0.0% | 0.0% | 0.0% | 10.0% |
| folate-serum | 10 | 90.0% | 0.0% | 0.0% | 0.0% | 10.0% |
| hematocrit | 12 | 91.7% | 0.0% | 0.0% | 0.0% | 8.3% |
| mcv | 12 | 91.7% | 0.0% | 0.0% | 0.0% | 8.3% |
| platelet-count | 12 | 91.7% | 0.0% | 0.0% | 0.0% | 8.3% |
| magnesium-serum | 4 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hs-crp | 6 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-bilirubin | 6 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| alt | 4 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ast | 6 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| alp | 6 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ggt | 6 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| rbc | 4 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hemoglobin | 8 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mchc | 8 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| vitamin-b12 | 6 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-cholesterol | 6 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ldl-cholesterol | 6 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hdl-cholesterol | 6 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| triglycerides | 4 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ferritin | 4 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## What went wrong, most common first

**29× crash | not in the cache (offline)**
    r6-0v2
    r6-1v2
    r6-3v4

**11× flag invented | none VFUR**
    r6-0v3 [ES plain VFUR wide]  Magnesio                             3,6   mg/dL   1,7 – 2,4  →  read 3.6 mg/dL [1.7, 2.4] H
    r6-0v3 [ES plain VFUR wide]  Fósforo                              1,4   mg/dL   2,5 – 4,5  →  read 1.4 mg/dL [2.5, 4.5] L
    r6-0v3 [ES plain VFUR wide]  Proteínas totales                    5,2   g/dL   6,0 – 8,3  →  read 5.2 g/dL [6, 8.3] L

**1× miss | glucose-fasting | "Glicemie"**
    r6-2v0 [RO colon VURF wide]  Glicemie:                            54   mg/dl   (70 - 99)

**1× miss | hba1c | "Hemoglobină glicozilată (HbA1c)"**
    r6-2v0 [RO colon VURF wide]  Hemoglobină glicozilată (HbA1c):     4.6   %   (4.0 - 5.6)

**1× miss | creatinine-serum | "Creatinina"**
    r6-2v0 [RO colon VURF wide]  Creatinina:                          1.04   mg/dL   (0.60 - 1.30)

**1× miss | blood-urea-nitrogen | "Azot ureic (BUN)"**
    r6-2v0 [RO colon VURF wide]  Azot ureic (BUN):                    23   mg/dl   (7 - 25)

**1× miss | egfr | "Rata de filtrare glomerulară estimată"**
    r6-2v0 [RO colon VURF wide]  Rata de filtrare glomerulară estimată:   45   mL/min/1.73m2   >= 60

**1× miss | uric-acid | "Acid uric"**
    r6-2v0 [RO colon VURF wide]  Acid uric:                           5.9   mg/dl   (2.5 - 7.0)

**1× miss | sodium-serum | "Sodiu seric"**
    r6-2v0 [RO colon VURF wide]  Sodiu seric:                         137   mmol/l   (135 - 145)

**1× miss | potassium-serum | "Potasiu"**
    r6-2v0 [RO colon VURF wide]  Potasiu:                             4.8   mmol/L   (3.5 - 5.1)

**1× miss | chloride-serum | "Clor seric"**
    r6-2v0 [RO colon VURF wide]  Clor seric:                          125   mmol/L   (98 - 107)

**1× miss | calcium-total | "Calciu seric"**
    r6-2v0 [RO colon VURF wide]  Calciu seric:                        8.8   mg/dl   (8.6 - 10.3)

**1× miss | phosphorus-serum | "Fosfor seric"**
    r6-2v0 [RO colon VURF wide]  Fosfor seric:                        3.2   mg/dL   (2.5 - 4.5)

**1× miss | total-protein | "Proteine totale serice"**
    r6-2v0 [RO colon VURF wide]  Proteine totale serice:              6.6   g/dl   (6.0 - 8.3)

**1× miss | albumin-serum | "Albumină serică"**
    r6-2v0 [RO colon VURF wide]  Albumină serică:                     2.6   g/dL   (3.5 - 5.0)

**1× miss | wbc | "Număr de leucocite"**
    r6-2v0 [RO colon VURF wide]  Număr de leucocite:                  9.1   mii/µL   (4.0 - 11.0)

**1× miss | hematocrit | "Hematocrit"**
    r6-2v0 [RO colon VURF wide]  Hematocrit:                          46.9   %   (36.0 - 50.0)

**1× miss | mcv | "Volum eritrocitar mediu (VEM)"**
    r6-2v0 [RO colon VURF wide]  Volum eritrocitar mediu (VEM):       71.7   fL   (80.0 - 100.0)

**1× miss | mch | "HEM"**
    r6-2v0 [RO colon VURF wide]  HEM:                                 32.2   pg   (27.0 - 33.0)

**1× miss | platelet-count | "Număr de trombocite"**
    r6-2v0 [RO colon VURF wide]  Număr de trombocite:                 271   mii/µL   (150 - 400)

**1× miss | serum-iron | "Sideremie"**
    r6-2v0 [RO colon VURF wide]  Sideremie:                           111   µg/dL   (50 - 170)

**1× miss | transferrin-saturation | "Coeficient de saturație a transferinei"**
    r6-2v0 [RO colon VURF wide]  Coeficient de saturație a transferinei:   41   %   (20 - 50)

**1× miss | tsh | "TSH"**
    r6-2v0 [RO colon VURF wide]  TSH:                                 1.22   µUI/mL   (0.40 - 4.00)

**1× miss | free-t4 | "T4 liber"**
    r6-2v0 [RO colon VURF wide]  T4 liber:                            0.91   ng/dl   (0.80 - 1.80)

**1× miss | free-t3 | "FT3"**
    r6-2v0 [RO colon VURF wide]  FT3:                                 3.6   pg/mL   (2.3 - 4.2)

**1× miss | vitamin-d-25-oh | "25-OH-Vitamina D"**
    r6-2v0 [RO colon VURF wide]  25-OH-Vitamina D:                    84   ng/ml   (30 - 100)

**1× miss | folate-serum | "Acid folic"**
    r6-2v0 [RO colon VURF wide]  Acid folic:                          12.7   ng/ml   (3.0 - 20.0)

**1× miss | testosterone-total | "Testosteron"**
    r6-2v0 [RO colon VURF wide]  Testosteron:                         1256   ng/dL   (264 - 916)

**1× date missed | RO lines**
    r6-2v0  want 2026-01-04 read null
