# Lab-report reader stress test

2000 generated reports, 38869 rows with a known answer, seed 1. Read in 5.9 s (2.9 ms a report).

| Outcome | Rows | Share | 95% interval |
|---|---|---|---|
| ok | 38860 | 100.0% | 99.96–99.99% |
| unit | 0 | 0.0% | 0.00–0.01% |
| unconverted | 0 | 0.0% | 0.00–0.01% |
| wrong | 0 | 0.0% | 0.00–0.01% |
| miss | 9 | 0.023% | 0.01–0.04% |

- **Critical values:** 405 of 405 caught (100.0%, interval 99.06–100.00%); 0 lost because the row was not read, 0 because it was misread. False critical alarms: 0.
- **Rows that are not on the report:** 0 (of 38860 rows read).
- **Lab's flag:** ok 38859, missed 1.
- **Reference range:** ok 38860.
- **Collection date:** ok 1819.

## By locale
| locale | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| RO | 6917 | 99.9% | 0.0% | 0.0% | 0.0% | 0.058% |
| ES | 6470 | 100.0% | 0.0% | 0.0% | 0.0% | 0.031% |
| UK | 6497 | 100.0% | 0.0% | 0.0% | 0.0% | 0.031% |
| DE | 5885 | 100.0% | 0.0% | 0.0% | 0.0% | 0.017% |
| US | 13100 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By kind
| kind | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| lines | 30009 | 100.0% | 0.0% | 0.0% | 0.0% | 0.030% |
| fhir | 4388 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| csv | 4472 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By variant
| variant | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| twocol | 2748 | 99.7% | 0.0% | 0.0% | 0.0% | 0.3% |
| plain | 16553 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| fhir:loinc-only | 1222 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| glue | 1897 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| leaders | 1892 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| csv:comma | 1360 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| csv:semicolon | 2282 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| wrap | 3264 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| unitspace | 1801 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| fhir:loinc+text | 1753 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| fhir:text-only | 1413 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| csv:lowhigh | 830 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| colon | 1854 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By units
| units | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| SI | 9037 | 100.0% | 0.0% | 0.0% | 0.0% | 0.033% |
| conventional | 29832 | 100.0% | 0.0% | 0.0% | 0.0% | 0.020% |

## By decimal
| decimal | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| comma | 14747 | 100.0% | 0.0% | 0.0% | 0.0% | 0.047% |
| point | 24122 | 100.0% | 0.0% | 0.0% | 0.0% | 0.008% |

## By sep
| sep | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| tab | 2589 | 99.9% | 0.0% | 0.0% | 0.0% | 0.1% |
| single | 9419 | 99.9% | 0.0% | 0.0% | 0.0% | 0.064% |
| wide | 26861 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By order
| order | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| VURF | 12114 | 100.0% | 0.0% | 0.0% | 0.0% | 0.033% |
| VFUR | 19318 | 100.0% | 0.0% | 0.0% | 0.0% | 0.026% |
| VFRU | 6670 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| FVUR | 767 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By marker
| marker | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| vitamin-b12 | 845 | 99.5% | 0.0% | 0.0% | 0.0% | 0.5% |
| vitamin-d-25-oh | 867 | 99.8% | 0.0% | 0.0% | 0.0% | 0.2% |
| folate-serum | 876 | 99.8% | 0.0% | 0.0% | 0.0% | 0.2% |
| alp | 938 | 99.9% | 0.0% | 0.0% | 0.0% | 0.1% |
| glucose-fasting | 928 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hba1c | 943 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| creatinine-serum | 940 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| blood-urea-nitrogen | 930 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| egfr | 932 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| uric-acid | 940 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| sodium-serum | 935 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| potassium-serum | 912 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| calcium-total | 950 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| magnesium-serum | 941 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| phosphorus-serum | 944 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-protein | 929 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| albumin-serum | 930 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hs-crp | 937 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-bilirubin | 929 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| alt | 913 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ast | 928 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ggt | 934 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| serum-iron | 914 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ferritin | 912 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| transferrin-saturation | 926 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| tsh | 946 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| free-t4 | 946 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| free-t3 | 961 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| testosterone-total | 853 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ldl-cholesterol | 974 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| triglycerides | 986 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| wbc | 898 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| rbc | 902 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hemoglobin | 927 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hematocrit | 898 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mcv | 899 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mch | 896 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| platelet-count | 914 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| chloride-serum | 922 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| total-cholesterol | 984 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hdl-cholesterol | 973 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| mchc | 917 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## What went wrong, most common first

**2× miss | vitamin-b12 | "VITAMINA B12"**
    r1-767 [RO twocol VURF single]  VITAMINA B12 827 pg/ml 200 - 900
    r1-846 [RO twocol VFUR single]  VITAMINA B12 581 pg/ml [200 - 900]

**1× miss | vitamin-b12 | "Vitamina B12"**
    r1-541 [RO twocol VFUR single]  Vitamina B12 774 pg/mL [200 - 900]

**1× miss | vitamin-d-25-oh | "25-OH-Vitamina D"**
    r1-712 [RO twocol VURF tab]  25-OH-Vitamina D	54	ng/ml	[30 - 100]

**1× miss | folate-serum | "Serum folate"**
    r1-743 [UK twocol VFUR tab]  Serum folate	36.0	nmol/L	6.8 – 45.3

**1× miss | vitamin-b12 | "Vitamin B12"**
    r1-751 [UK twocol VFUR tab]  Vitamin B12	503	pmol/L	148 – 664

**1× flag missed | arrows VURF**
    r1-1159 [ES twocol VURF single]  GGT 90 U/L [8 - 61] ↑  →  read 90 U/L [8, 61]

**1× miss | vitamin-d-25-oh | "25-OH Vitamina D"**
    r1-1159 [ES twocol VURF single]  25-OH Vitamina D 95 ng/mL [30 - 100]

**1× miss | folate-serum | "Ácido fólico"**
    r1-1178 [ES twocol VFUR single]  Ácido fólico 8,6 ng/mL 3,0 - 20,0

**1× miss | alp | "AP"**
    r1-1990 [DE twocol VURF single]  AP 140 U/l 44 – 147
