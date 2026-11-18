# Lab-report reader stress test

2000 generated reports, 38869 rows with a known answer, seed 1. Read in 4.4 s (2.2 ms a report).

| Outcome | Rows | Share | 95% interval |
|---|---|---|---|
| ok | 38869 | 100.0% | 99.99–100.00% |
| unit | 0 | 0.0% | 0.00–0.01% |
| unconverted | 0 | 0.0% | 0.00–0.01% |
| wrong | 0 | 0.0% | 0.00–0.01% |
| miss | 0 | 0.0% | 0.00–0.01% |

- **Critical values:** 405 of 405 caught (100.0%, interval 99.06–100.00%); 0 lost because the row was not read, 0 because it was misread. False critical alarms: 0.
- **Rows that are not on the report:** 0 (of 38869 rows read).
- **Lab's flag:** ok 38869.
- **Reference range:** ok 38869.
- **Collection date:** ok 2000.

## By locale
| locale | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| US | 13100 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| ES | 6470 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| RO | 6917 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| UK | 6497 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| DE | 5885 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By kind
| kind | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| hl7 | 38869 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By variant
| variant | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| hl7:loinc | 22088 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| hl7:local | 16781 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By units
| units | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| conventional | 29832 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| SI | 9037 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By decimal
| decimal | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| point | 24122 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| comma | 14747 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By sep
| sep | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| wide | 26861 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| single | 9419 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| tab | 2589 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By order
| order | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
| VFRU | 6670 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| VFUR | 19318 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| VURF | 12114 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| FVUR | 767 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |

## By marker
| marker | rows | ok | unit | unconverted | wrong | miss |
|---|---|---|---|---|---|---|
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
| vitamin-d-25-oh | 867 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| vitamin-b12 | 845 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| folate-serum | 876 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| testosterone-total | 853 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
| alp | 938 | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% |
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
