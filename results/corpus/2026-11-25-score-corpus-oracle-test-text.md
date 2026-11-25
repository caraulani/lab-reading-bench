# corpus-oracle on lab-report-corpus (test, input text)

385 reports, 16251 answer rows scored (16184 to read, 67 to abstain on). Crashed reports: 0.

| Outcome | Rows | Share of its kind | 95% interval |
|---|---|---|---|
| ok | 16184 | 100.0% | 100.0–100.0% |
| wrong | 0 | 0.0% | 0.0–0.0% |
| miss | 0 | 0.0% | 0.0–0.0% |
| abstained | 67 | 100.0% | 94.6–100.0% |
| read_when_abstain_expected | 0 | 0.0% | 0.0–5.4% |

- Unit given right, of values read right: 16184 of 16184 (100.0%).
- Censored values ("<", ">") read right: 202; comparator returned right 202, not returned 0.
- Rows returned that are not on the report: 0.
- **Reading and converting, apart.** Of values returned: read as printed 12973, misread 0, taken from an earlier-date column 0. Of 3211 rows printed in a unit other than the conventional one, 3211 came back in the conventional unit: converted right 3211, converted wrong 0 (a wrong number in the conventional unit; it can also be a misreading of the printed number).

## By locale

| locale | rows | ok | wrong | miss | abstained | read when abstain expected |
|---|---|---|---|---|---|---|
| DE | 3628 | 100.0% | 0.0% | 0.0% | 100.0% | 0.0% |
| ES | 2277 | 100.0% | 0.0% | 0.0% | 100.0% | 0.0% |
| FR | 2990 | 100.0% | 0.0% | 0.0% | 100.0% | 0.0% |
| RO | 2092 | 100.0% | 0.0% | 0.0% | 100.0% | 0.0% |
| UK | 2962 | 100.0% | 0.0% | 0.0% | 100.0% | 0.0% |
| US | 2302 | 100.0% | 0.0% | 0.0% | 100.0% | 0.0% |

## By layout

| layout | rows | ok | wrong | miss | abstained | read when abstain expected |
|---|---|---|---|---|---|---|
| de-a | 516 | 100.0% | 0.0% | 0.0% | – | – |
| de-cum | 1340 | 100.0% | 0.0% | 0.0% | 100.0% | 0.0% |
| de-mono | 1772 | 100.0% | 0.0% | 0.0% | 100.0% | 0.0% |
| es-a | 685 | 100.0% | 0.0% | 0.0% | 100.0% | 0.0% |
| es-cum | 1592 | 100.0% | 0.0% | 0.0% | 100.0% | 0.0% |
| fr-a | 1579 | 100.0% | 0.0% | 0.0% | 100.0% | 0.0% |
| fr-b | 1411 | 100.0% | 0.0% | 0.0% | 100.0% | 0.0% |
| ro-a | 1014 | 100.0% | 0.0% | 0.0% | 100.0% | 0.0% |
| ro-b | 1078 | 100.0% | 0.0% | 0.0% | 100.0% | 0.0% |
| uk-a | 783 | 100.0% | 0.0% | 0.0% | 100.0% | 0.0% |
| uk-cum | 2179 | 100.0% | 0.0% | 0.0% | 100.0% | 0.0% |
| us-a | 941 | 100.0% | 0.0% | 0.0% | 100.0% | 0.0% |
| us-b | 533 | 100.0% | 0.0% | 0.0% | 100.0% | 0.0% |
| us-cum | 828 | 100.0% | 0.0% | 0.0% | 100.0% | 0.0% |

## By heldout_layout

| heldout_layout | rows | ok | wrong | miss | abstained | read when abstain expected |
|---|---|---|---|---|---|---|
| false | 14479 | 100.0% | 0.0% | 0.0% | 100.0% | 0.0% |
| true | 1772 | 100.0% | 0.0% | 0.0% | 100.0% | 0.0% |

## By page

| page | rows | ok | wrong | miss | abstained | read when abstain expected |
|---|---|---|---|---|---|---|
| 1 | 14997 | 100.0% | 0.0% | 0.0% | 100.0% | 0.0% |
| 2+ | 1254 | 100.0% | 0.0% | 0.0% | 100.0% | 0.0% |

## By earlier_result_on_line

| earlier_result_on_line | rows | ok | wrong | miss | abstained | read when abstain expected |
|---|---|---|---|---|---|---|
| no | 12171 | 100.0% | 0.0% | 0.0% | 100.0% | 0.0% |
| yes | 4080 | 100.0% | 0.0% | 0.0% | 100.0% | 0.0% |

## By hard_case

| hard_case | rows | ok | wrong | miss | abstained | read when abstain expected |
|---|---|---|---|---|---|---|
| (none) | 3031 | 100.0% | 0.0% | 0.0% | – | – |
| abstain | 67 | – | – | – | 100.0% | 0.0% |
| ambiguous_name | 192 | 100.0% | 0.0% | 0.0% | – | – |
| calculated | 793 | 100.0% | 0.0% | 0.0% | 100.0% | 0.0% |
| censored_value | 202 | 100.0% | 0.0% | 0.0% | – | – |
| comment_in_value | 91 | 100.0% | 0.0% | 0.0% | 100.0% | 0.0% |
| critical_value | 33 | 100.0% | 0.0% | 0.0% | – | – |
| decimal_comma | 10378 | 100.0% | 0.0% | 0.0% | 100.0% | 0.0% |
| dual_unit | 690 | 100.0% | 0.0% | 0.0% | 100.0% | 0.0% |
| flag_by_typography | 106 | 100.0% | 0.0% | 0.0% | 100.0% | 0.0% |
| footnote_method_change | 56 | 100.0% | 0.0% | 0.0% | 100.0% | 0.0% |
| missing_unit | 116 | 100.0% | 0.0% | 0.0% | 100.0% | 0.0% |
| pct_abs_differential | 2006 | 100.0% | 0.0% | 0.0% | 100.0% | 0.0% |
| pct_abs_same_line | 340 | 100.0% | 0.0% | 0.0% | 100.0% | 0.0% |
| pct_abs_same_name | 350 | 100.0% | 0.0% | 0.0% | 100.0% | 0.0% |
| prior_date_column | 4922 | 100.0% | 0.0% | 0.0% | – | – |
| split_table | 276 | 100.0% | 0.0% | 0.0% | 100.0% | 0.0% |
| thousands_separator | 74 | 100.0% | 0.0% | 0.0% | 100.0% | 0.0% |
| unit_change_between_dates | 78 | 100.0% | 0.0% | 0.0% | – | – |

## By date

| date | rows | ok | wrong | miss | abstained | read when abstain expected |
|---|---|---|---|---|---|---|
| current | 11329 | 100.0% | 0.0% | 0.0% | 100.0% | 0.0% |
| earlier | 4922 | 100.0% | 0.0% | 0.0% | – | – |

## Examples

