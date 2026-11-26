# Cluster bootstrap intervals for the preregistered test

Made by `stats/bootstrap.mts`: 10,000 resamples, seed 20261126, percentile 95% intervals. The cluster is the set of results: all printings of one set of values are drawn together (5 reports per set on text; 1 to 5 printed reports per set on images). Report-level intervals (each report drawn on its own) are shown for comparison. Wilson intervals (rows treated as independent) are in the results/*.md files. Model numbers come from the cached replies in cache/, re-scored offline; every re-scored total matches its published results file (checked by the script). Rule-based reader rows are re-run from a LifeFrom checkout (LIFEFROM_DIR) and match the published text totals; its image runs could not be re-made (see below).

## Seed 5 text: correct, wrong and format invariance

| Reader | Reports read | Correct, set-level | Correct, report-level | Wrong, set-level | Wrong, report-level | Same answer in all printings, set-level |
|---|---|---|---|---|---|---|
| Rule-based reader | 300 of 300 | 99.92% (99.81% to 100.00%) | 99.92% (99.81% to 100.00%) | 0.000% (degenerate; use Wilson) | 0.000% (degenerate; use Wilson) | 99.6% (99.1% to 100.0%) |
| Claude Haiku 5.5 | 300 of 300 | 99.90% (99.80% to 99.98%) | 99.90% (99.80% to 99.98%) | 0.081% (0.019% to 0.166%) | 0.081% (0.019% to 0.165%) | 99.5% (99.0% to 99.9%) |
| GPT-5.6 Luna | 300 of 300 | 99.64% (99.48% to 99.79%) | 99.64% (99.46% to 99.80%) | 0.364% (0.213% to 0.519%) | 0.364% (0.201% to 0.545%) | 98.2% (97.4% to 98.9%) |
| Llama 4 Maverick | 298 of 300 | 97.50% (96.93% to 97.99%) | 97.50% (96.78% to 98.18%) | 2.440% (1.971% to 2.982%) | 2.440% (1.768% to 3.151%) | 88.5% (86.2% to 90.6%) |
| DeepSeek V4 Flash | 300 of 300 | 86.44% (81.70% to 91.04%) | 86.44% (81.76% to 90.92%) | 0.525% (0.215% to 0.927%) | 0.525% (0.210% to 0.916%) | 48.6% (36.1% to 62.5%) |
| Rule-based reader, first 30 sets | 150 of 150 | 99.96% (99.88% to 100.00%) | 99.96% (99.88% to 100.00%) | 0.000% (degenerate; use Wilson) | 0.000% (degenerate; use Wilson) | 99.8% (99.4% to 100.0%) |
| Claude Sonnet 5.5, first 30 sets | 150 of 150 | 100.00% (degenerate; use Wilson) | 100.00% (degenerate; use Wilson) | 0.000% (degenerate; use Wilson) | 0.000% (degenerate; use Wilson) | 100.0% (degenerate; use Wilson) |
| Gemini 3.8 Flash, first 30 sets (143 of 150 read) | 143 of 150 | 100.00% (degenerate; use Wilson) | 100.00% (degenerate; use Wilson) | 0.000% (degenerate; use Wilson) | 0.000% (degenerate; use Wilson) | 100.0% (degenerate; use Wilson) |

## Format invariance: model minus rule-based reader (seed 5 text, paired by set)

| Comparison | Set-level bootstrap, points | Newcombe (independent rows), points |
|---|---|---|
| Claude Haiku 5.5 − rules | −0.1 (−0.6 to +0.5) | −0.1 (−0.8 to +0.6) |
| GPT-5.6 Luna − rules | −1.4 (−2.3 to −0.5) | −1.4 (−2.5 to −0.5) |
| Llama 4 Maverick − rules | −11.1 (−13.3 to −9.1) | −11.1 (−13.3 to −9.2) |
| DeepSeek V4 Flash − rules | −51.0 (−63.5 to −37.1) | −51.0 (−54.1 to −47.8) |
| Claude Sonnet 5.5 − rules (first 30 sets) | +0.2 (+0.0 to +0.6) | (not in README) |
| Gemini 3.8 Flash − rules (first 30 sets) | +0.2 (+0.0 to +0.6) | (not in README) |

## Photo minus clean image: correct rate (paired by set)

| Reader | Seed 5 (97 reports), set-level, points | Seed 5, report-level | Seed 6 held out (43 reports), set-level | Seed 6, report-level |
|---|---|---|---|---|
| Claude Haiku 5.5 | +0.06 (+0.00 to +0.19) | +0.06 (+0.00 to +0.18) | −0.12 (−0.47 to +0.30) | −0.12 (−0.53 to +0.26) |
| GPT-5.6 Luna | +0.22 (−0.27 to +0.66) | +0.22 (−0.24 to +0.76) | +0.37 (−0.38 to +1.05) | +0.37 (−0.36 to +1.21) |
| Llama 4 Maverick | −0.61 (−1.56 to +0.39) | −0.61 (−1.61 to +0.41) | −0.37 (−1.63 to +1.11) | −0.37 (−1.64 to +0.98) |
| Gemini 3.8 Flash (reports read in both: see note) | +0.00 (degenerate; use Wilson) | +0.00 (degenerate; use Wilson) | +0.00 (degenerate; use Wilson) | +0.00 (degenerate; use Wilson) |
| Rule-based reader (OCR + rules) | not reproducible here (see below); Newcombe −4.6 (−7.3 to −1.9) | | not reproducible here; Newcombe −2.1 (−5.8 to +1.6) | |

Gemini 3.8 Flash's caps left 10 clean and 13 photo seed-5 images unread (and about half of seed 6); its difference is over the reports each condition read, as in the README.

**The rule-based reader's image runs are not re-made here.** Its code is not in this repository. Running the LifeFrom checkout of 26 Nov 2026 through `readers/lifefrom-local.mts` on the same pictures gave totals different from the published files of 17-18 Nov (for example seed-5 photo: 751 correct against 1,351 published), so either the app's photo path has changed since those runs or they used a pipeline that is not recorded here; their per-report outcomes cannot be recovered. Only their published totals exist, and the Newcombe intervals above use those. Its text runs do re-make exactly.

## How to read these intervals

- Set-level intervals are the honest ones for this design: the five printings of a set share its values, so a reader that mis-converts one marker tends to do so in several printings at once. Where errors cluster, set-level intervals are wider than report-level and row-level (Wilson, Newcombe) ones: DeepSeek V4 Flash's empty replies make its invariance difference −37 to −64 points at set level against −48 to −54 by Newcombe. Where errors are spread out, the intervals are close.
- The paired photo-minus-clean intervals can be narrower than Newcombe's, because Newcombe's method treats the clean and photo readings as independent samples when they are the same reports.
- Intervals are percentile intervals; with few errors (Haiku: 4 wrong values in 300 reports) the resampling distribution is lumpy and the interval is approximate.
