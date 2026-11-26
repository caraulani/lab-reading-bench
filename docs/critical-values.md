# Critical-value thresholds and launch gates: where they come from

## Critical values (`critical.mts`)

`critical.mts` says its thresholds follow "the UK Royal College of Pathologists' alert thresholds" and names no document,
version or table. The repository has no other record of the source. The values were checked on 26 Nov 2026 against the
RCPath guidance that matches that description:

> Royal College of Pathologists. *Best practice recommendations: The communication of critical and unexpected pathology
> results.* Document G158, version 2, final, May 2026 (B. Croal, I. Godber). Table of biochemistry action limits (adult)
> and Table B1, full blood count parameters. https://www.rcpath.org/asset/BB86B370-1545-4C5A-B5826A2C431934F5/

Version 2 (final, May 2026) was current when `critical.mts` was written (commit `59a7d11`, 17 Nov 2026). Version 1
(October 2017) could not be retrieved for this check. Which version, or which local list derived from it, the thresholds
were taken from is not recorded.

G158 limits are inclusive ("lower and upper cut points are ≤ or ≥"), as in `isCritical`. G158 gives most chemistry in SI
units; the benchmark's thresholds are in the answer key's conventional units, converted with the factors in
[conversion-factors.md](conversion-factors.md).

| Marker | `critical.mts` (low / high) | G158 v2 (adult) | In the benchmark's units | Agrees? |
|---|---|---|---|---|
| potassium-serum | ≤ 2.5 / ≥ 6.5 mmol/L | K ≤ 2.5 / ≥ 6.5 mmol/L | same | yes |
| sodium-serum | ≤ 120 / **≥ 155** mmol/L | Na ≤ 120 / **≥ 160** mmol/L | same units | **no: upper limit 155 against G158 v2's 160.** 155 is used by some NHS trusts' local lists that cite G158 v1; whether v1 itself said 155 was not verified |
| glucose-fasting | ≤ 45 / ≥ 450 mg/dL | ≤ 2.5 / ≥ 25 mmol/L | 2.5 / 0.0555 = 45.0; 25 / 0.0555 = 450.5 mg/dL | yes (rounded) |
| creatinine-serum | — / ≥ 4 mg/dL | ≥ 354 µmol/L (aligned with the NHS England AKI algorithm) | 354 / 88.4 = 4.00 mg/dL | yes |
| alt | — / ≥ 600 U/L | ≥ 15 × upper limit of normal | 15 × 40 U/L; the generator's printed upper limit for ALT is 56 U/L, which would give 840 | **partly:** G158 gives a multiple of the lab's ULN, not a number. 600 U/L corresponds to an ULN of 40 U/L, which is not the ULN the generator prints |
| hemoglobin | ≤ 7 g/dL / — | < 50 g/L (microcytic or macrocytic); < 70 g/L (normochromic normocytic) | 70 g/L = 7 g/dL | yes, with the normocytic limit (G158's < is strict; the benchmark uses ≤) |
| platelet-count | ≤ 30 / ≥ 1000 ×10³/µL | < 30 ×10⁹/L; > 1000 ×10⁹/L "requires urgent referral" (> 600 "assessment and referral") | 10⁹/L = 10³/µL | yes (G158's < and > are strict here; the benchmark uses ≤ and ≥) |
| wbc | — / ≥ 50 ×10³/µL | under "White cell count": neutrophils < 0.5 and > 50 ×10⁹/L; lymphocytes > 50 ×10⁹/L | 10⁹/L = 10³/µL | **partly:** G158's > 50 is listed for neutrophils and lymphocytes, not total white count. The benchmark applies 50 to the total count and has no low limit |

The generator draws critical values well past these limits ("kept clear of the threshold so rounding can't move them
across it"), so a one-unit difference in a limit (sodium 155 against 160, ≤ against <) changes which drawn values count as
critical but not whether a correctly read value is caught. The scores report recall against the thresholds in
`critical.mts` as written; they are the benchmark's definition of "critical", not a clinical recommendation.

## Launch gates (`thresholds.json`)

| Gate | Value |
|---|---|
| maxWrong | 0.05% of rows |
| maxMiss | 0.2% of rows |
| minCriticalRecall | 100% |
| maxFalseCritical | 0 |
| maxPhantomRate | 0.1% of rows read |

These are not taken from any published source. They are the launch criteria LifeFrom set for its own reader (used with
`run.mts --gate`). The repository records no rationale for the particular numbers beyond that.
