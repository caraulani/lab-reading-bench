"""lab-report-corpus: how well plain OCR reads the printed values, with no parsing at all (25 Nov 2026).

    uv run --with-requirements corpus/requirements.txt python -I corpus/ocr_eval.py <out> [--split test] [--write results/corpus/x.json]

Uses the words tesseract.js recognised on each page picture (cached in <out>/_work/ocr/ by readers/lifefrom-local.mts).
For every printed value in the answer key, the recognised words whose centre falls inside the value's box (carried onto
the picture with page_to_pixel, grown by a quarter of its height) are joined and compared with value_text, ignoring
spaces. Reports the share read exactly and the character error rate (edit distance / length), by condition and severity.
"""
import collections
import json
import os
import sys


def lev(a, b):
    prev = list(range(len(b) + 1))
    for i, ca in enumerate(a, 1):
        cur = [i]
        for j, cb in enumerate(b, 1):
            cur.append(min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (ca != cb)))
        prev = cur
    return prev[-1]


def apply_h(H, x, y):
    a = H[0][0] * x + H[0][1] * y + H[0][2]
    b = H[1][0] * x + H[1][1] * y + H[1][2]
    c = H[2][0] * x + H[2][1] * y + H[2][2]
    return a / c, b / c


def main():
    out = sys.argv[1]
    split = sys.argv[sys.argv.index("--split") + 1] if "--split" in sys.argv else "test"
    keyfile = os.path.join(out, "test_answers", "test.jsonl") if split == "test" else os.path.join(out, "answers", f"{split}.jsonl")
    key = collections.defaultdict(list)
    for l in open(keyfile, encoding="utf-8"):
        k = json.loads(l)
        if k["bbox_value"] and k["page"]:
            key[(k["report_id"], k["page"])].append(k)
    pages = [json.loads(l) for l in open(os.path.join(out, "pages", f"{split}.jsonl"), encoding="utf-8")]
    tally = collections.defaultdict(lambda: [0, 0, 0, 0])  # values, exact, edit distance, characters
    pics = collections.Counter()
    for pg in pages:
        cache = os.path.join(out, "_work", "ocr", pg["file_name"] + ".json")
        if not os.path.exists(cache):
            continue
        ocr = json.load(open(cache))
        s = ocr.get("scale", 1)
        words = [(w["text"], (w["bbox"]["x0"] + w["bbox"]["x1"]) / 2 / s, (w["bbox"]["y0"] + w["bbox"]["y1"]) / 2 / s, w["bbox"]["x0"] / s) for w in ocr["words"] if w["text"].strip()]
        H = pg["page_to_pixel"]
        for cond in [pg["condition"], f'{pg["condition"]}/{pg["severity"]}', "all"]:
            pics[cond] += 1
        for k in key[(pg["report_id"], pg["page"])]:
            x0, y0, x1, y1 = k["bbox_value"]
            hgt = y1 - y0
            corners = [apply_h(H, x, y) for x, y in [(x0, y0 - hgt / 4), (x1, y0 - hgt / 4), (x1, y1 + hgt / 4), (x0, y1 + hgt / 4)]]
            xs, ys = [c[0] for c in corners], [c[1] for c in corners]
            inside = sorted((w for w in words if min(xs) <= w[1] <= max(xs) and min(ys) <= w[2] <= max(ys)), key=lambda w: w[3])
            got = "".join(w[0] for w in inside).replace(" ", "")
            want = k["value_text"].replace(" ", "")
            d = lev(got, want)
            for cond in [pg["condition"], f'{pg["condition"]}/{pg["severity"]}', "all"]:
                t = tally[cond]
                t[0] += 1; t[1] += got == want; t[2] += d; t[3] += len(want)
    res = {c: {"pictures": pics[c], "values": t[0], "exact": round(t[1] / t[0], 4) if t[0] else None, "cer": round(t[2] / t[3], 4) if t[3] else None} for c, t in sorted(tally.items())}
    print("| condition | pictures | values | read exactly | character error rate |")
    print("|---|---|---|---|---|")
    for c, r in res.items():
        print(f'| {c} | {r["pictures"]} | {r["values"]} | {100 * r["exact"]:.1f}% | {100 * r["cer"]:.1f}% |')
    if "--write" in sys.argv:
        with open(sys.argv[sys.argv.index("--write") + 1], "w") as fh:
            json.dump(res, fh, indent=1)
            fh.write("\n")


if __name__ == "__main__":
    main()
