# Unit conversion factors used by the generator

Every factor below is the one written in `generate.mts` (`ANALYTES[].si`, and `toUnit`/`fromUnit` for HbA1c). The generator
prints a result in the SI unit as `conventional value × factor`; the answer key holds the conventional value, so a reader
converting back must divide by the same factor. The scoring tolerance is 0.7% of the value or half a step of the printed
precision (`run.mts`, `near`), so a factor that differs from another published value by less than 0.1% cannot change a
score.

**Sources.** `generate.mts` does not cite a source for any factor. The README says only that "conversion factors are the
published ones". To give each factor a checkable source, every factor was compared with
[lifefrom-units](https://lifefrom.ai/research/open-data/lab-units) v1.0.0 (`data/analyte_factors.csv`, `data/units.json`),
which derives each factor from a cited molar mass (PubChem) or atomic weight (CIAAW abridged table) and records the
published tables that state the same factor (CDC NHANES 2021-2023 laboratory documentation). The "Independent value"
and "Source" columns come from there. The "Published as" column lists published tables that print the generator's
number. lifefrom-units was built by the same author, so this is a check against cited primary sources, not an
independent audit.

| Marker (`slug`) | From (conventional) | To (SI) | Factor in `generate.mts` | Independent value | Difference | Source of the independent value | Published as |
|---|---|---|---|---|---|---|---|
| glucose-fasting | mg/dL | mmol/L | 0.0555 | 0.0555062 | −0.011% | molar mass 180.16 g/mol, PubChem CID 5793 | 0.0555 (NHANES BIOPRO_L); 0.05551 (NHANES GLU_L) |
| creatinine-serum | mg/dL | µmol/L | 88.4 | 88.4017 | −0.002% | molar mass 113.12 g/mol, PubChem CID 588 | 88.4 (NHANES BIOPRO_L, ALB_CR_L) |
| uric-acid | mg/dL | µmol/L | 59.48 | 59.4849 | −0.008% | molar mass 168.11 g/mol, PubChem CID 1175 | 59.48 (NHANES BIOPRO_L) |
| calcium-total | mg/dL | mmol/L | 0.2495 | 0.249513 | −0.005% | atomic weight 40.078, CIAAW | 0.25 (NHANES BIOPRO_L) |
| magnesium-serum | mg/dL | mmol/L | 0.4114 | 0.411438 | −0.009% | atomic weight 24.305, CIAAW | none found in the tables checked |
| phosphorus-serum | mg/dL | mmol/L | 0.3229 | 0.322851 | +0.015% | atomic weight 30.974, CIAAW | 0.323 (NHANES BIOPRO_L) |
| total-protein | g/dL | g/L | 10 | 10 | 0 | SI prefixes (1 dL = 0.1 L) | |
| albumin-serum | g/dL | g/L | 10 | 10 | 0 | SI prefixes | |
| total-bilirubin | mg/dL | µmol/L | 17.1 | 17.1028 | −0.016% | molar mass 584.7 g/mol, PubChem CID 5280352 | 17.1 (NHANES BIOPRO_L) |
| total-cholesterol | mg/dL | mmol/L | 0.02586 | 0.0258598 | +0.001% | molar mass 386.7 g/mol, PubChem CID 5997 | 0.02586 (NHANES TCHOL_L) |
| ldl-cholesterol | mg/dL | mmol/L | 0.02586 | 0.0258598 | +0.001% | as total cholesterol | |
| hdl-cholesterol | mg/dL | mmol/L | 0.02586 | 0.0258598 | +0.001% | as total cholesterol | |
| triglycerides | mg/dL | mmol/L | 0.01129 | 0.01129 | 0 | NHANES TRIGLY_L published factor | 0.01129 (NHANES TRIGLY_L); 0.0113 (NHANES BIOPRO_L) |
| hemoglobin | g/dL | g/L | 10 | 10 | 0 | SI prefixes | |
| hematocrit | % | L/L | 0.01 | 0.01 | 0 | definition of percent (volume fraction) | |
| mchc | g/dL | g/L | 10 | 10 | 0 | SI prefixes | |
| serum-iron | mcg/dL | µmol/L | 0.179 | 0.179067 | −0.037% | atomic weight 55.845, CIAAW | 0.1791 (NHANES BIOPRO_L) |
| ferritin | ng/mL | µg/L | 1 | 1 | 0 | SI prefixes (1 ng/mL = 1 µg/L) | |
| free-t4 | ng/dL | pmol/L | 12.87 | 12.8722 | −0.017% | molar mass 776.87 g/mol, PubChem CID 5819 (10 000 / 776.87) | |
| free-t3 | pg/mL | pmol/L | 1.536 | 1.53617 | −0.011% | molar mass 650.97 g/mol, PubChem CID 5920 (1000 / 650.97) | |
| vitamin-d-25-oh | ng/mL | nmol/L | 2.496 | 2.49626 | −0.010% | molar mass 400.6 g/mol, PubChem CID 5283731 (25-hydroxyvitamin D3) | |
| vitamin-b12 | pg/mL | pmol/L | 0.738 | 0.737790 | +0.029% | molar mass 1355.4 g/mol, PubChem CID 5311498 (cyanocobalamin) | |
| folate-serum | ng/mL | nmol/L | 2.266 | 2.26552 | +0.021% | molar mass 441.4 g/mol, PubChem CID 135398658 (folic acid) | 2.265 (NHANES FOLATE_L, RBC folate) |
| testosterone-total | ng/dL | nmol/L | 0.0347 | 0.0346741 | +0.075% | molar mass 288.4 g/mol, PubChem CID 6013 | 0.0347 (NHANES TST_L) |
| hba1c | % (NGSP) | mmol/mol (IFCC) | IFCC = (NGSP − 2.15) × 10.929 | NGSP = 0.09148 × IFCC + 2.152 | at most 0.0014 percentage points over 31-97 mmol/mol | NGSP/IFCC master equation, ngsp.org/ifccngsp.asp, Table 2; Hoelzel et al., Clin Chem 2004;50:166-174, doi:10.1373/clinchem.2003.024802 | |

Blood counts are never converted: the generator prints the same number under each country's spelling
(`CBC_UNITS`: ×10⁹/L, 10³/µL, K/uL, Tsd/µl, /nl, G/l, mil/mm³, mii/µL … for white cells and platelets, and the
×10¹²/L family for red cells), because 10⁹/L = 10³/µL and 10¹²/L = 10⁶/µL by the SI prefixes. Markers not listed
(urea nitrogen, eGFR, sodium, potassium, chloride, hs-CRP, ALT, AST, ALP, GGT, RBC, MCV, MCH, platelets, transferrin
saturation, TSH, WBC) have no SI alternative in the generator and are printed in one unit only.

URLs of the sources named above: PubChem, https://pubchem.ncbi.nlm.nih.gov/compound/<CID>; CIAAW abridged standard
atomic weights, https://www.ciaaw.org/abridged-atomic-weights.htm; CDC NHANES 2021-2023 laboratory documentation,
https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2021/DataFiles/<FILE>.htm (BIOPRO_L, GLU_L, TCHOL_L, TRIGLY_L,
ALB_CR_L, FOLATE_L, TST_L). lifefrom-units records them as accessed on 25 Nov 2026.

## Disagreements found

None that matters for scoring. Every factor agrees with the independent value to within 0.08%, far inside the 0.7%
scoring tolerance. The details:

- **Testosterone** differs most (+0.075%): the generator uses NHANES's rounded 0.0347; the molar mass gives 0.034674.
- **Serum iron** (−0.037%): 0.179 against 0.179067 (NHANES prints 0.1791).
- **Folate**: 2.266 matches folic acid's molar mass (441.4 g/mol). Serum folate is mostly 5-methyltetrahydrofolate (about
  459.5 g/mol), which would give about 2.18; both the generator and NHANES (RBC folate, 2.265) use the folic-acid
  factor. This is a convention, stated here so it is not mistaken for an error.
- **Vitamin D**: the factor is for 25-hydroxyvitamin D3. 25-hydroxyvitamin D2 has a different molar mass (412.7 g/mol);
  the generator, like most labs, uses the D3 factor for the total.
- **HbA1c**: the generator's IFCC = (NGSP − 2.15) × 10.929 and the NGSP master equation NGSP = 0.09148 × IFCC + 2.152 are
  two published forms of the same regression and differ by at most 0.0014 percentage points over the range printed.
- **Not checked against lifefrom-units:** total protein, albumin, haemoglobin, MCHC, ferritin and haematocrit, whose
  factors are powers of ten fixed by the units themselves.
