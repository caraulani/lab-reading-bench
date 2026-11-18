# Lab-report reader stress test

80 generated reports, 1274 rows with a known answer, seed 4. Read in 118.9 s (1486.4 ms a report).

| Outcome | Rows | Share | 95% interval |
|---|---|---|---|
| ok | 1268 | 99.5% | 98.98–99.78% |
| unit | 0 | 0.0% | 0.00–0.30% |
| unconverted | 0 | 0.0% | 0.00–0.30% |
| wrong | 6 | 0.5% | 0.22–1.02% |
| miss | 0 | 0.0% | 0.00–0.30% |

- **Critical values:** 15 of 15 caught (100.0%, interval 79.61–100.00%); 0 lost because the row was not read, 0 because it was misread. False critical alarms: 0.
- **Rows that are not on the report:** 0 (of 1274 rows read).
- **Lab's flag:** ok 1268.
- **Reference range:** ok 1268.
- **Collection date:** ok 62.
- **Crashes:** 18.
- **Wrong values printed in a unit that needs converting:** 6 of 6 (100.0%).

## By locale
| locale | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| UK | 152 | 96.7% | 0.0% | 0.0% | 3.3% | 0.0% |
| US | 571 | 99.8% | 0.0% | 0.0% | 0.2% | 0.0% |
| RO | 236 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ES | 218 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| DE | 97 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By kind
| kind | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| hl7 | 1274 | 99.5% | 0.0% | 0.0% | 0.5% | 0.0% |

## By variant
| variant | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| hl7:loinc | 658 | 99.4% | 0.0% | 0.0% | 0.6% | 0.0% |
| hl7:local | 616 | 99.7% | 0.0% | 0.0% | 0.3% | 0.0% |

## By units
| units | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| SI | 191 | 96.9% | 0.0% | 0.0% | 3.1% | 0.0% |
| conventional | 1083 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By decimal
| decimal | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| point | 882 | 99.3% | 0.0% | 0.0% | 0.7% | 0.0% |
| comma | 392 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By sep
| sep | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| wide | 892 | 99.4% | 0.0% | 0.0% | 0.6% | 0.0% |
| single | 341 | 99.7% | 0.0% | 0.0% | 0.3% | 0.0% |
| tab | 41 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By order
| order | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| VURF | 354 | 98.6% | 0.0% | 0.0% | 1.4% | 0.0% |
| VFUR | 493 | 99.8% | 0.0% | 0.0% | 0.2% | 0.0% |
| VFRU | 372 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| FVUR | 55 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By marker
| marker | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| free-t4 | 33 | 90.9% | 0.0% | 0.0% | 9.1% | 0.0% |
| vitamin-b12 | 30 | 96.7% | 0.0% | 0.0% | 3.3% | 0.0% |
| magnesium-serum | 33 | 97.0% | 0.0% | 0.0% | 3.0% | 0.0% |
| hba1c | 33 | 97.0% | 0.0% | 0.0% | 3.0% | 0.0% |
| glucose-fasting | 32 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| creatinine-serum | 30 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| blood-urea-nitrogen | 30 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| egfr | 29 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| uric-acid | 33 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| potassium-serum | 33 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| chloride-serum | 33 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| phosphorus-serum | 34 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-protein | 32 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| albumin-serum | 35 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hs-crp | 29 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| tsh | 34 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| free-t3 | 29 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| folate-serum | 30 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| testosterone-total | 30 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| sodium-serum | 33 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| calcium-total | 28 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-bilirubin | 31 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| alt | 31 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ast | 29 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| alp | 34 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-cholesterol | 30 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ldl-cholesterol | 30 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hdl-cholesterol | 28 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| triglycerides | 28 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| vitamin-d-25-oh | 28 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| wbc | 30 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| rbc | 24 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hemoglobin | 28 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hematocrit | 32 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mcv | 24 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mch | 30 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mchc | 23 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| platelet-count | 25 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| serum-iron | 35 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ferritin | 29 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| transferrin-saturation | 31 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ggt | 31 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## What went wrong, most common first

**18× crash | http 402: This request would exceed your available credits given your current in**
    r4-58h
    r4-60h
    r4-62h

**2× wrong | free-t4 | point hl7:local | unit pmol/L**
    r4-2h [UK hl7:local VURF single]  OBX|25|NM|L1036^Free T4^L||18.15|pmol/L|10.30-23.20|N|||F|||202612030901  →  read 0.21 ng/dL [0.12, 0.27]
    r4-74h [US hl7:local VFUR wide]  OBX|17|NM|L1036^T4,Free(Direct)^L||15.6|pmol/L|10.3-23.2|N|||F|||202606151015  →  read 0.1809 ng/dL [0.1195, 0.2691]

**1× wrong | hba1c | point hl7:loinc | unit mmol/mol**
    r4-4h [UK hl7:loinc VURF wide]  OBX|2|NM|4548-4^HbA1c^LN||27|mmol/mol|20-38|N|||F|||202605151145  →  read 4.5 % [4.2, 5.6]

**1× wrong | magnesium-serum | point hl7:loinc | unit mmol/L**
    r4-4h [UK hl7:loinc VURF wide]  OBX|10|NM|19123-9^Magnesium^LN||0.78|mmol/L|0.70-0.99|N|||F|||202605151145  →  read 18.96 mg/dL [17.01, 24.06]

**1× wrong | vitamin-b12 | point hl7:loinc | unit pmol/L**
    r4-4h [UK hl7:loinc VURF wide]  OBX|25|NM|2132-9^Vitamin B12^LN||391|pmol/L|148-664|N|||F|||202605151145  →  read 288.35 pg/mL [109.14, 489.68]

**1× wrong | free-t4 | point hl7:loinc | unit pmol/L**
    r4-24h [UK hl7:loinc VURF wide]  OBX|31|NM|3024-7^Free T4^LN||10.7|pmol/L|10.3-23.2|N|||F|||202605160858  →  read 0.0922 ng/dL [0.0887, 0.1998]
