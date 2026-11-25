"""Write corpus/README.md (the dataset card) from card-front.yaml, card-body.md, the built corpus's stats.json and the
baseline results, so every number in the card comes from a file.

    uv run python -I corpus/scripts/card.py corpus-out/full results/corpus
"""
import glob
import json
import os
import sys

here = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
out, res = sys.argv[1], sys.argv[2]
st = json.load(open(os.path.join(out, "stats.json")))
mb = lambda b: f"{b / 1e6:,.0f} MB" if b < 1e9 else f"{b / 1e9:.2f} GB"
n = lambda x: f"{x:,}"
R = st["reports"]
counts = (f"- **{n(sum(R.values()))} reports** (train {n(R['train'])}, validation {n(R['validation'])}, test {n(R['test'])}), "
          f"{n(st['pages'])} pages, {n(sum(st['pictures'].values()))} page pictures and {n(st['pdf_documents'])} PDFs.\n"
          f"- **{n(sum(st['results'].values()))} answer rows** ({n(st['results_current'])} current results, the rest earlier-date columns), "
          f"{n(st['results_abstain'])} of them lines to abstain on; {st['markers']} markers.\n"
          f"- **Size:** {mb(st['bytes']['total_without_kaggle'])} without the Kaggle zip ({mb(st['bytes'].get('kaggle', 0))} more with it).")
def table(title, d, total=None):
    rows = [f"| {title} | count |", "|---|---|"] + [f"| {k} | {n(v)} |" for k, v in d.items()]
    return "\n".join(rows)
by_loc = table("Locale (reports)", st["by_locale"])
by_lay = table("Layout (reports)", st["by_layout"])
by_cond = table("Condition (pictures)", st["by_condition_pictures"])
by_sev = table("Condition / severity (pictures)", st["by_condition_severity"])
by_pages = table("Pages per report", st["by_pages"])
hc = "\n".join([f"| Hard case | answer rows | reports |", "|---|---|---|"] + [f"| `{k}` | {n(v)} | {n(st['hard_case_reports'].get(k, 0))} |" for k, v in st["hard_case_results"].items()])
ab = table("Abstain reason (rows)", st["abstain_reasons"])
sizes = "\n".join(["| Part | Size |", "|---|---|"] + [f"| `{k}/` | {mb(v)} |" for k, v in st["bytes"].items() if isinstance(v, int) and k != "total_without_kaggle"]
                  + [f"| pictures: {k} | {mb(v)} |" for k, v in st["bytes"]["by_condition"].items()])
timing = ""
if "timing_render" in st:
    timing = f"\n\nBuild time on a 10-core laptop: rendering {st['timing_render']['seconds']:.0f} s ({st['timing_render']['workers']} browser pages), pictures {st['timing_degrade']['seconds']:.0f} s ({st['timing_degrade']['workers']} processes)."
tables = "\n\n".join([by_loc, by_lay, by_pages, by_cond, by_sev, hc, ab, sizes]) + timing
# baselines
rows = ["| Reader | Input | Reports | Read right | Wrong | Missed | Abstained when it should | Misread | Converted wrong |", "|---|---|---|---|---|---|---|---|---|"]
order = {"text": 0, "pdf": 1, "scan_clean": 2, "scan_noisy": 3, "photo": 4}
files = sorted(glob.glob(os.path.join(res, "*-score-*-test-*.json")), key=lambda f: (json.load(open(f))["reader"], order.get(json.load(open(f))["input"], 9)))
for f in files:
    d = json.load(open(f))
    r, rc = d["rates"], d.get("readingAndConversion", {})
    pc = lambda x: "–" if x is None else f"{100 * x:.1f}%"
    rows.append(f"| {d['reader']} | {d['input']} | {d['reports']} | {pc(r['ok'])} | {pc(r['wrong'])} | {pc(r['miss'])} | {pc(r['abstainRecall'])} | {rc.get('misread', '–')} | {rc.get('convertedWrong', '–')} |")
base = "\n".join(rows)
ocr = sorted(glob.glob(os.path.join(res, "*-ocr-test.md")))
if ocr:
    base += "\n\nPlain OCR (tesseract.js 5.1.1, English) of each printed value, no parsing: the words inside the value's box against the printed text.\n\n" + open(ocr[-1]).read().strip()
base += ("\n\n`corpus-oracle` returns the answer key and scores 100%, a check that the key and the scorer agree. "
         "The LifeFrom reader is a rule-based reader for US/UK/European reports, run unmodified from its own repository; "
         "it was not tuned on this corpus, but it and the generator come from the same team. Scores are on current results; "
         "earlier-date columns are scored only for readers that return dates.")
body = open(os.path.join(here, "card-body.md")).read().replace("{{COUNTS}}", counts).replace("{{TABLES}}", tables).replace("{{BASELINES}}", base)
open(os.path.join(here, "README.md"), "w").write(open(os.path.join(here, "card-front.yaml")).read() + body)
print("wrote corpus/README.md")
