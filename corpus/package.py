"""lab-report-corpus, step 3 of 3: the dataset layout (25 Nov 2026).

    uv run --with-requirements corpus/requirements.txt python -I corpus/package.py <out> [--kaggle]

Writes, under <out>:
  data/<split>/<id>_p<n>_<condition>.<png|jpg>   page pictures (written by degrade.py)
  data/<split>/metadata.parquet                   one row per picture (Hugging Face imagefolder); train and validation
                                                  rows carry that page's answers with boxes in picture pixels
  pdf/<split>/<id>.pdf                            the born-digital PDF of each report (written by build.mts)
  answers/<train|validation>.jsonl                the answer key, one row per printed result
  test_answers/test.jsonl                         the test split's answer key, kept apart from everything else
  pages/<split>.jsonl                             the picture table again, as JSON lines, without the per-page answers
  documents/<split>.jsonl                         one row per report
  tables/                                         the same tables as parquet
  kaggle/lab-report-corpus.zip                    (with --kaggle) a Kaggle-style zip: picture folders and CSVs (no PDFs)
  stats.json, SHA256SUMS
"""
import collections
import csv
import hashlib
import io
import json
import os
import shutil
import sys
import zipfile

import pyarrow as pa
import pyarrow.parquet as pq

FIELDS = ["name", "value", "unit", "range", "flag", "value2", "unit2", "line"]
SPLITS = ["train", "validation", "test"]


def apply_h(H, x, y):
    a = H[0][0] * x + H[0][1] * y + H[0][2]
    b = H[1][0] * x + H[1][1] * y + H[1][2]
    c = H[2][0] * x + H[2][1] * y + H[2][2]
    return a / c, b / c


def box_on(H, b):
    pts = [apply_h(H, b[0], b[1]), apply_h(H, b[2], b[1]), apply_h(H, b[2], b[3]), apply_h(H, b[0], b[3])]
    xs, ys = [p[0] for p in pts], [p[1] for p in pts]
    return [round(min(xs), 1), round(min(ys), 1), round(max(xs), 1), round(max(ys), 1)], [[round(x, 1), round(y, 1)] for x, y in pts]


def flat(k):
    row = {f: k[f] for f in ["report_id", "row_id", "line_id", "page", "date", "is_current", "section", "analyte", "marker_slug", "specimen", "value", "value_text",
                             "comparator", "unit", "unit_expected", "ref_text", "ref_low", "ref_high", "flag", "flag_norm", "alt_value", "alt_unit", "value_conv",
                             "unit_conv", "critical", "action", "abstain_reason", "footnote", "hard_cases"]}
    for f in FIELDS:
        row[f"bbox_{f}"] = k["bbox"].get(f)
    return row


BOX = pa.list_(pa.float64())
RESULT = pa.struct([("row_id", pa.string()), ("line_id", pa.string()), ("marker_slug", pa.string()), ("analyte", pa.string()), ("value", pa.float64()),
                    ("value_text", pa.string()), ("comparator", pa.string()), ("unit", pa.string()), ("ref_text", pa.string()), ("flag", pa.string()),
                    ("flag_norm", pa.string()), ("date", pa.string()), ("is_current", pa.bool_()), ("action", pa.string()), ("specimen", pa.string()),
                    ("hard_cases", pa.list_(pa.string()))] + [(f"bbox_{f}", BOX) for f in FIELDS] + [("quad_value", pa.list_(BOX))])
PAGE_SCHEMA = pa.schema([("file_name", pa.string()), ("report_id", pa.string()), ("page", pa.int64()), ("condition", pa.string()), ("severity", pa.string()), ("width", pa.int64()),
                         ("height", pa.int64()), ("locale", pa.string()), ("layout", pa.string()), ("n_pages", pa.int64()), ("page_to_pixel", pa.list_(BOX)), ("transcript", pa.string()),
                         ("results", pa.list_(RESULT))])


def write_jsonl(path, rows):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as fh:
        for r in rows:
            fh.write(json.dumps(r, ensure_ascii=False, sort_keys=True) + "\n")


def write_parquet(path, rows):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    if not rows:
        return
    pq.write_table(pa.Table.from_pylist(rows), path, compression="zstd")


def main():
    out = sys.argv[1]
    kaggle = "--kaggle" in sys.argv
    work = os.path.join(out, "_work")
    docs = {}
    for f in sorted(os.listdir(os.path.join(work, "docs"))):
        d = json.load(open(os.path.join(work, "docs", f), encoding="utf-8"))
        docs[d["doc"]["id"]] = d
    images = [json.loads(l) for l in open(os.path.join(work, "images.jsonl")) if l.strip()]
    images.sort(key=lambda r: (r["split"], r["id"], r["page"], r["condition"]))

    answers = {s: [] for s in SPLITS}
    documents = {s: [] for s in SPLITS}
    for rid, d in docs.items():
        doc, sp = d["doc"], d["split"]
        for k in doc["key"]:
            answers[sp].append(flat(k))
        documents[sp].append({
            "report_id": rid, "split": sp, "locale": doc["locale"], "layout": doc["preset"], "units": doc["units"], "decimal": doc["decimal"],
            "flag_style": doc["flagStyle"], "range_style": doc["rangeStyle"], "n_pages": d["pages"], "pdf": f"pdf/{sp}/{rid}.pdf", "conditions": d["conditions"],
            "collection_dates": doc["dates"], "patient_sex": doc["person"]["sex"], "patient_age": doc["person"]["age"], "patient_conditions": doc["person"]["conditions"],
            "n_results": sum(1 for k in doc["key"]), "n_current": sum(1 for k in doc["key"] if k["is_current"]), "n_abstain": sum(1 for k in doc["key"] if k["action"] == "abstain"),
            "hard_cases": sorted({h for k in doc["key"] for h in k["hard_cases"]}), "heldout_layout": doc["preset"] == "de-mono", "schema_version": d["schema"],
        })

    pages = {s: [] for s in SPLITS}
    test_transcripts = []
    for im in images:
        doc = docs[im["id"]]["doc"]
        row = {"file_name": im["file_name"], "report_id": im["id"], "page": im["page"], "condition": im["condition"], "severity": im["severity"], "width": im["width"], "height": im["height"],
               "locale": doc["locale"], "layout": doc["preset"], "n_pages": docs[im["id"]]["pages"], "page_to_pixel": im["H"],
               "transcript": "\n".join(docs[im["id"]]["transcript"][im["page"] - 1])}
        if im["split"] != "test":
            rows = []
            for k in doc["key"]:
                if k["page"] != im["page"]:
                    continue
                r = {f: k[f] for f in ["row_id", "line_id", "marker_slug", "analyte", "value", "value_text", "comparator", "unit", "ref_text", "flag", "flag_norm", "date",
                                       "is_current", "action", "specimen", "hard_cases"]}
                for f in FIELDS:
                    b = k["bbox"].get(f)
                    r[f"bbox_{f}"] = box_on(im["H"], b)[0] if b else None
                r["quad_value"] = box_on(im["H"], k["bbox"]["value"])[1] if k["bbox"].get("value") else None
                rows.append(r)
            row["results"] = rows
        else:
            row["results"] = []  # the test answers and transcripts are in test_answers/
            test_transcripts.append({"file_name": row["file_name"], "report_id": row["report_id"], "page": row["page"], "transcript": row["transcript"]})
            row["transcript"] = ""
        pages[im["split"]].append(row)

    for s in SPLITS:
        # the picture table: parquet with one fixed schema, so every split loads alike (Hugging Face imagefolder)
        os.makedirs(os.path.join(out, "data", s), exist_ok=True)
        pq.write_table(pa.Table.from_pylist(pages[s], schema=PAGE_SCHEMA), os.path.join(out, "data", s, "metadata.parquet"), compression="zstd")
        write_jsonl(os.path.join(out, "pages", f"{s}.jsonl"), [{k: v for k, v in r.items() if k != "results"} for r in pages[s]])
        write_jsonl(os.path.join(out, "documents", f"{s}.jsonl"), documents[s])
        write_parquet(os.path.join(out, "tables", f"documents-{s}.parquet"), documents[s])
        if s == "test":
            write_jsonl(os.path.join(out, "test_answers", "test.jsonl"), answers[s])
            write_jsonl(os.path.join(out, "test_answers", "transcripts.jsonl"), test_transcripts)
            write_parquet(os.path.join(out, "test_answers", "test.parquet"), answers[s])
        else:
            write_jsonl(os.path.join(out, "answers", f"{s}.jsonl"), answers[s])
            write_parquet(os.path.join(out, "tables", f"answers-{s}.parquet"), answers[s])

    # counts
    C = collections.Counter
    allrows = [r for s in SPLITS for r in answers[s]]
    alldocs = [d for s in SPLITS for d in documents[s]]
    stats = {
        "reports": {s: len(documents[s]) for s in SPLITS}, "pages": sum(d["n_pages"] for d in alldocs),
        "pictures": {s: len(pages[s]) for s in SPLITS}, "results": {s: len(answers[s]) for s in SPLITS},
        "results_current": sum(1 for r in allrows if r["is_current"]), "results_abstain": sum(1 for r in allrows if r["action"] == "abstain"),
        "by_locale": dict(sorted(C(d["locale"] for d in alldocs).items())), "by_layout": dict(sorted(C(d["layout"] for d in alldocs).items())),
        "by_pages": dict(sorted(C(str(d["n_pages"]) for d in alldocs).items())),
        "by_condition_pictures": dict(sorted(C(im["condition"] for im in images).items())), "by_condition_severity": dict(sorted(C(f'{im["condition"]}/{im["severity"]}' for im in images).items())), "pdf_documents": len(alldocs),
        "by_units": dict(sorted(C(d["units"] for d in alldocs).items())), "by_decimal": dict(sorted(C(d["decimal"] for d in alldocs).items())),
        "hard_case_results": dict(sorted(C(h for r in allrows for h in r["hard_cases"]).items())),
        "hard_case_reports": dict(sorted(C(h for d in alldocs for h in d["hard_cases"]).items())),
        "abstain_reasons": dict(sorted(C(r["abstain_reason"] for r in allrows if r["abstain_reason"]).items())),
        "markers": len({r["marker_slug"] for r in allrows}), "by_specimen": dict(sorted(C(r["specimen"] for r in allrows).items())),
        "with_value_box": sum(1 for r in allrows if r["bbox_value"]),
    }
    for name in ["timing-render.json", "timing-degrade.json"]:
        p = os.path.join(work, name)
        if os.path.exists(p):
            stats[name.replace(".json", "").replace("-", "_")] = json.load(open(p))

    if kaggle:
        os.makedirs(os.path.join(out, "kaggle"), exist_ok=True)
        zpath = os.path.join(out, "kaggle", "lab-report-corpus.zip")
        cols = list(answers["train"][0].keys()) if answers["train"] else []
        with zipfile.ZipFile(zpath, "w", compression=zipfile.ZIP_STORED) as z:
            for s in SPLITS:
                for im in pages[s]:
                    z.write(os.path.join(out, "data", s, im["file_name"]), f"{s}/images/{im['file_name']}")
                # the PDFs are not in the zip (they would add about 0.7 GB); they are in pdf/<split>/ of the main layout
                buf = io.StringIO()
                w = csv.writer(buf)
                if s != "test":
                    w.writerow(cols)
                    for r in answers[s]:
                        w.writerow([json.dumps(r[c], ensure_ascii=False) if isinstance(r[c], (list, dict)) else ("" if r[c] is None else r[c]) for c in cols])
                    z.writestr(f"{s}.csv", buf.getvalue())
                else:
                    # the test file lists what to read; the key is not in the zip
                    w.writerow(["report_id", "row_id", "page", "date", "is_current", "bbox_line"])
                    for r in answers[s]:
                        w.writerow([r["report_id"], r["row_id"], r["page"], r["date"], r["is_current"], json.dumps(r["bbox_line"])])
                    z.writestr("test.csv", buf.getvalue())
                    buf = io.StringIO()
                    w = csv.writer(buf)
                    w.writerow(["report_id", "row_id", "marker_slug", "value", "unit", "comparator", "action"])
                    for r in answers[s][:20]:
                        w.writerow([r["report_id"], r["row_id"], "", "", "", "", "read"])
                    z.writestr("sample_submission.csv", buf.getvalue())
                pm = io.StringIO()
                pw = csv.writer(pm)
                pw.writerow(["file_name", "report_id", "page", "condition", "width", "height", "locale", "layout", "page_to_pixel"])
                for im in pages[s]:
                    pw.writerow([f"{s}/images/{im['file_name']}", im["report_id"], im["page"], im["condition"], im["width"], im["height"], im["locale"], im["layout"], json.dumps(im["page_to_pixel"])])
                z.writestr(f"{s}_pages.csv", pm.getvalue())
            z.writestr("dataset-metadata.json", json.dumps({"title": "lab-report-corpus: synthetic lab reports", "id": "OWNER/lab-report-corpus", "licenses": [{"name": "CC-BY-4.0"}]}, indent=1))
            readme = os.path.join(os.path.dirname(os.path.abspath(__file__)), "README.md")
            if os.path.exists(readme):
                z.write(readme, "README.md")

    # sizes, and a checksum for every file
    def size_of(rel):
        p = os.path.join(out, rel)
        if os.path.isfile(p):
            return os.path.getsize(p)
        return sum(os.path.getsize(os.path.join(dp, f)) for dp, _, fs in os.walk(p) for f in fs)
    stats["bytes"] = {k: size_of(k) for k in ["data", "pdf", "answers", "test_answers", "documents", "pages", "tables", "kaggle"] if os.path.exists(os.path.join(out, k))}
    stats["bytes"]["by_condition"] = dict(sorted(collections.Counter({}).items()))
    byc = collections.Counter()
    for im in images:
        byc[im["condition"]] += im["bytes"]
    stats["bytes"]["by_condition"] = dict(sorted(byc.items()))
    stats["bytes"]["total_without_kaggle"] = sum(v for k, v in stats["bytes"].items() if isinstance(v, int) and k != "kaggle")
    with open(os.path.join(out, "stats.json"), "w") as fh:
        json.dump(stats, fh, indent=1, sort_keys=True)
        fh.write("\n")
    card = os.path.join(os.path.dirname(os.path.abspath(__file__)), "README.md")
    if os.path.exists(card):
        shutil.copy(card, os.path.join(out, "README.md"))
    lines = []
    for top in ["README.md", "stats.json", "data", "pdf", "answers", "test_answers", "documents", "pages", "tables", "kaggle"]:
        p = os.path.join(out, top)
        files = [p] if os.path.isfile(p) else sorted(os.path.join(dp, f) for dp, _, fs in os.walk(p) for f in fs) if os.path.isdir(p) else []
        for f in files:
            h = hashlib.sha256()
            with open(f, "rb") as fh:
                for chunk in iter(lambda: fh.read(1 << 20), b""):
                    h.update(chunk)
            lines.append(f"{h.hexdigest()}  {os.path.relpath(f, out)}")
    with open(os.path.join(out, "SHA256SUMS"), "w") as fh:
        fh.write("\n".join(lines) + "\n")
    print(json.dumps({k: stats[k] for k in ["reports", "pages", "pictures", "results", "bytes"]}, indent=1))


if __name__ == "__main__":
    main()
