Key: 411 numeric rows on 15 reports; 201 rows are markers in the benchmark catalog.

### Catalog scoring (the benchmark's rule, catalog markers only)

| Reader | Reports read | Rows | Right | 95% interval (Wilson) | Report bootstrap | Wrong value | Missed | Unconverted | Unit not recognised | Flag right* | Range right* | Critical caught | Catalog markers not on the report |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| rulebased-image | 15/15 | 201 | 126 (62.7%) | 55.8–69.1% | 49.0–77.0% | 15 (7.5%, 4.6–11.9%) | 42 (20.9%) | 0 | 18 | 91.7% | 88.2% | 0/1 | 0 |
| rulebased-pdf | 15/15 | 201 | 159 (79.1%) | 73.0–84.2% | 71.1–87.9% | 4 (2.0%, 0.8–5.0%) | 34 (16.9%) | 0 | 4 | 92.0% | 100.0% | 1/1 | 0 |

\* of the rows whose value was read right or left unconverted.

### As-printed scoring (every numeric row)

| Reader | Reports read | Rows | Value right | 95% interval (Wilson) | Report bootstrap | Wrong value | 95% interval | Missed | Unit as printed† | Range as printed† | Flag right‡ | English rows right | German rows right |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| rulebased-image | 15/15 | 411 | 238 (57.9%) | 53.1–62.6% | 47.0–67.8% | 18 (4.4%) | 2.8–6.8% | 155 (37.7%) | 77.6% | 87.8% | 94.5% | 128/216 (59.3%) | 110/195 (56.4%) |
| rulebased-pdf | 15/15 | 411 | 259 (63.0%) | 58.2–67.5% | 55.3–72.2% | 8 (1.9%) | 1.0–3.8% | 144 (35.0%) | 95.4% | 100.0% | 95.0% | 144/216 (66.7%) | 115/195 (59.0%) |

† of the rows whose value was read right as printed (not converted). ‡ of the rows whose value was read right; a flag the lab did not print counts against it.
