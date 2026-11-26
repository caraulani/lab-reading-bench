"""Fetch the sample reports listed in sources.csv, check each file's SHA-256, and make what the readers read.

    python3 -I realworld/prepare.py        (needs PyMuPDF: pip install pymupdf)

For each source: downloads the PDF into realworld/sources/<id>/report.pdf (only if it is not there yet), refuses a file
whose SHA-256 differs from sources.csv, renders every page to sources/<id>/pages/p<n>.png at 150 dpi, keeps each page's
text layer in p<n>.txt, and writes one PDF per report in reports.json (a report can be a subset of a source's pages).
The PDFs are third-party documents: they are not in git (realworld/sources/ is ignored); only their URLs and hashes are."""
import csv, hashlib, json, os, sys, urllib.request
import fitz  # PyMuPDF

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, "sources")

def sha256(p):
    h = hashlib.sha256()
    with open(p, "rb") as f:
        for b in iter(lambda: f.read(1 << 16), b""): h.update(b)
    return h.hexdigest()

rows = list(csv.DictReader(open(os.path.join(HERE, "sources.csv"), encoding="utf-8")))
bad = 0
for r in rows:
    d = os.path.join(SRC, r["id"]); os.makedirs(d, exist_ok=True)
    pdf = os.path.join(d, "report.pdf")
    if not os.path.exists(pdf):
        req = urllib.request.Request(r["url"], headers={"User-Agent": "Mozilla/5.0 (lab-reading-bench realworld fetch)"})
        with urllib.request.urlopen(req, timeout=60) as res, open(pdf, "wb") as f: f.write(res.read())
    got = sha256(pdf)
    if got != r["sha256"]:
        print(f"{r['id']}: SHA-256 differs from sources.csv (the publisher may have changed the file); skipped", file=sys.stderr); bad += 1; continue
    doc = fitz.open(pdf)
    os.makedirs(os.path.join(d, "pages"), exist_ok=True)
    for i, page in enumerate(doc):
        png = os.path.join(d, "pages", f"p{i+1}.png")
        if not os.path.exists(png): page.get_pixmap(dpi=150).save(png)
        open(os.path.join(d, "pages", f"p{i+1}.txt"), "w", encoding="utf-8").write(page.get_text("text"))
    print(f"{r['id']}: ok, {len(doc)} pages")

for rep in json.load(open(os.path.join(HERE, "reports.json"))):
    src = fitz.open(os.path.join(SRC, rep["source"], "report.pdf"))
    out = os.path.join(SRC, rep["source"], f"{rep['id']}.pdf")
    if rep["id"] == rep["source"] and len(rep["pages"]) == len(src): continue
    sub = fitz.open(); [sub.insert_pdf(src, from_page=p - 1, to_page=p - 1) for p in rep["pages"]]; sub.save(out)
sys.exit(1 if bad else 0)
