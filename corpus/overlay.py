"""Draw the answer key's boxes onto a page picture, to check them by eye.

    uv run --with-requirements corpus/requirements.txt python -I corpus/overlay.py <out> <report id> <page> <condition> <png out>
"""
import json, os, sys
import cv2
import numpy as np

out, rid, page, cond, dest = sys.argv[1], sys.argv[2], int(sys.argv[3]), sys.argv[4], sys.argv[5]
doc = json.load(open(os.path.join(out, "_work", "docs", f"{rid}.json")))
img = next(json.loads(l) for l in open(os.path.join(out, "_work", "images.jsonl")) if f'"id": "{rid}"' in l and f'"page": {page},' in l and f'"condition": "{cond}"' in l)
pic = cv2.imread(os.path.join(out, "data", img["split"], img["file_name"]), cv2.IMREAD_COLOR)
H = np.array(img["H"])
COL = {"value": (0, 0, 255), "name": (255, 0, 0), "unit": (0, 160, 0), "range": (200, 0, 200), "flag": (0, 140, 255), "value2": (0, 0, 160), "unit2": (0, 90, 0)}
for k in doc["doc"]["key"]:
    if k["page"] != page:
        continue
    for f, b in k["bbox"].items():
        if f == "line":
            continue
        pts = np.float32([[b[0], b[1]], [b[2], b[1]], [b[2], b[3]], [b[0], b[3]]]).reshape(-1, 1, 2)
        q = cv2.perspectiveTransform(pts, H).astype(np.int32)
        cv2.polylines(pic, [q], True, COL[f], 2)
cv2.imwrite(dest, pic)
