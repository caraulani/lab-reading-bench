# Licensing

Two licenses. Which one applies depends on the path.

| Path | License | File |
|---|---|---|
| `generate.mts`, `run.mts`, `images.mts`, `critical.mts`, `readers/`, `thresholds.json`, `package.json`, `corpus/*.mts`, `corpus/*.py`, `corpus/scripts/`, `corpus/tests/`, everything not listed below | MIT | `LICENSE` |
| `results/`, `cache/`, `images/`, `pdf/`, `PREREGISTRATION.md`, `README.md`, `corpus/*.md`, `corpus/nhanes-anchors.json`, `corpus/paper/`, the built corpus (`corpus-out/`: PDFs, pictures, answer keys, tables) | CC BY 4.0 | `LICENSE-CC-BY-4.0` |

The same split is stated in `CITATION.cff` and `.zenodo.json` (code MIT; data and reports CC BY 4.0). A Zenodo record has a single licence field; it carries CC BY 4.0, with the code licence in the record's notes.

Code should be reusable in any product without attribution friction (MIT). The generated reports, the model replies, the results and the write-up are research outputs: CC BY 4.0 permits reuse and requires a citation (`CITATION.cff`).

Everything here is synthetic. No patient data was used to make any report, and none is in this repository.
