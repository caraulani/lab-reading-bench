"""The compact JSON the lifefrom.ai website reads about this release: counts, sizes and baseline scores.

    uv run python -I corpus/scripts/web.py corpus-out/full results/corpus > corpus/web/lab-report-corpus.json
"""
import glob
import json
import os
import sys

out, res = sys.argv[1], sys.argv[2]
st = json.load(open(os.path.join(out, "stats.json")))
base = []
for f in sorted(glob.glob(os.path.join(res, "*-score-*-test-*.json"))):
    d = json.load(open(f))
    if d["reader"] == "corpus-oracle":
        continue
    rc = d.get("readingAndConversion", {})
    base.append({"reader": d["reader"], "input": d["input"], "reports": d["reports"], "rows_to_read": d["readRows"], "rows_to_abstain": d["absRows"],
                 "ok": round(d["rates"]["ok"], 4), "wrong": round(d["rates"]["wrong"], 4), "miss": round(d["rates"]["miss"], 4),
                 "abstain_recall": None if d["rates"]["abstainRecall"] is None else round(d["rates"]["abstainRecall"], 4),
                 "misread": rc.get("misread"), "converted_wrong": rc.get("convertedWrong")})
ocr = sorted(glob.glob(os.path.join(res, "*-ocr-test.json")))
doc = {
    "schema": "lifefrom-open/release-summary/1", "id": "lab-report-corpus", "version": "1.0.0", "released": "2026-11-25", "doi": None,
    "title": "lab-report-corpus: synthetic laboratory reports with a computed answer key",
    "licence": {"data": "CC-BY-4.0", "code": "MIT"}, "derived_from_doi": "10.5281/zenodo.24350904",
    "counts": {"reports": sum(st["reports"].values()), "reports_by_split": st["reports"], "pages": st["pages"], "pictures": sum(st["pictures"].values()),
               "pdfs": st["pdf_documents"], "results": sum(st["results"].values()), "results_to_abstain": st["results_abstain"], "markers": st["markers"]},
    "by_locale": st["by_locale"], "by_layout": st["by_layout"], "by_condition": st["by_condition_pictures"], "by_pages": st["by_pages"],
    "hard_case_results": st["hard_case_results"], "bytes": {k: v for k, v in st["bytes"].items() if isinstance(v, int)},
    "baselines_test": base, "ocr_value_test": json.load(open(ocr[-1])) if ocr else None,
    "note": "Synthetic reports: invented people, invented laboratories. Values follow NHANES percentiles where available; not reference intervals, not a population sample.",
}
print(json.dumps(doc, indent=1, ensure_ascii=False))
