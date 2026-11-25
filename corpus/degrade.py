"""lab-report-corpus, step 2 of 3: page pictures in three conditions (25 Nov 2026).

    uv run --with-requirements corpus/requirements.txt python -I corpus/degrade.py <out> [--workers 8]

Reads <out>/_work/jobs.jsonl (one job per page and condition, written by build.mts) and the 200 dpi page rasters, and
writes <out>/data/<split>/<id>_p<n>_<condition>.<png|jpg> plus <out>/_work/images.jsonl. Each picture records the
3x3 matrix H that maps a point on the page, as a fraction of its width and height, to a pixel in the picture, so every
box in the answer key can be carried onto it.

  scan_clean   a flat-bed scan: 200 dpi, greyscale, lossless PNG
  scan_noisy   a poor scan at 150 dpi: tilted up to 3 degrees, off-white paper, blur, sensor noise, specks, sometimes thresholded to
               black and white, a dark band at one edge, JPEG
  photo        a phone photo of the page on a desk: perspective and rotation, uneven light and a shadow, colour cast,
               focus or motion blur, noise, JPEG

Every random choice is seeded from the report id, page and condition, so a job always gives the same picture.
"""
import hashlib
import json
import os
import sys
import time
from multiprocessing import Pool

import cv2
import numpy as np


def seed_of(*parts):
    return int.from_bytes(hashlib.sha256("|".join(map(str, parts)).encode()).digest()[:8], "little")


def scale_mat(sx, sy):
    return np.array([[sx, 0, 0], [0, sy, 0], [0, 0, 1]], dtype=np.float64)


def scan_clean(img, g):
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    return gray, np.eye(3), ".png", [cv2.IMWRITE_PNG_COMPRESSION, 9], "none"


def scan_noisy(img, g):
    sev = severity(g)
    k = {"light": 0.4, "medium": 0.75, "heavy": 1.0}[sev]
    pre = 0.75  # 150 dpi
    img = cv2.resize(img, (int(round(img.shape[1] * pre)), int(round(img.shape[0] * pre))), interpolation=cv2.INTER_AREA)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY).astype(np.float32)
    h, w = gray.shape
    ang = g.uniform(0.2, 3.0 * k) * g.choice([-1, 1])
    s = g.uniform(0.96, 1.0)
    M = cv2.getRotationMatrix2D((w / 2 + g.uniform(-20, 20), h / 2 + g.uniform(-20, 20)), ang, s)
    M[:, 2] += [g.uniform(-15, 15), g.uniform(-15, 15)]
    bg = float(g.uniform(200, 250))
    out = cv2.warpAffine(gray, M, (w, h), flags=cv2.INTER_LINEAR, borderMode=cv2.BORDER_CONSTANT, borderValue=bg)
    paper = g.uniform(225, 250)
    out = out * (paper / 255.0)
    out = cv2.GaussianBlur(out, (0, 0), g.uniform(0.3, 0.3 + 0.8 * k))
    out += g.normal(0, g.uniform(2, 2 + 4 * k), out.shape).astype(np.float32)
    # specks and dust
    n = int(g.uniform(50, 600))
    ys, xs = g.integers(0, h, n), g.integers(0, w, n)
    out[ys, xs] = g.uniform(0, 90, n)
    # a dark band at one edge (the lid of the scanner)
    if g.random() < 0.4:
        band = int(g.uniform(10, 45))
        side = g.integers(0, 4)
        dark = g.uniform(30, 110)
        if side == 0:
            out[:, :band] = np.minimum(out[:, :band], dark)
        elif side == 1:
            out[:, -band:] = np.minimum(out[:, -band:], dark)
        elif side == 2:
            out[:band, :] = np.minimum(out[:band, :], dark)
        else:
            out[-band:, :] = np.minimum(out[-band:, :], dark)
    out = np.clip(out, 0, 255).astype(np.uint8)
    if g.random() < 0.3 * k:  # black-and-white scanning mode
        _, out = cv2.threshold(out, int(g.uniform(150, 190)), 255, cv2.THRESH_BINARY)
    H = np.vstack([M, [0, 0, 1]]) @ scale_mat(pre, pre)
    return out, H, ".jpg", [cv2.IMWRITE_JPEG_QUALITY, int(g.uniform(45, 75))], sev


SEVERITY = [("light", 0.4), ("medium", 0.4), ("heavy", 0.2)]


def severity(g):
    r = g.random()
    acc = 0.0
    for name, p in SEVERITY:
        acc += p
        if r < acc:
            return name
    return SEVERITY[-1][0]


def photo(img, g):
    sev = severity(g)
    S = {"light": dict(rot=1.5, persp=0.025, blur=(0.3, 0.7), motion=0.0, tw=(1700, 1900), shadow=0.2, q=(65, 82)),
         "medium": dict(rot=4.0, persp=0.045, blur=(0.6, 1.1), motion=0.15, tw=(1450, 1650), shadow=0.3, q=(58, 76)),
         "heavy": dict(rot=7.0, persp=0.07, blur=(1.0, 1.7), motion=0.4, tw=(1200, 1400), shadow=0.4, q=(50, 68))}[sev]
    tw = int(g.uniform(*S["tw"]))
    pre = min(1.0, tw / (img.shape[1] * 1.22))  # work near the phone's resolution
    img = cv2.resize(img, (int(round(img.shape[1] * pre)), int(round(img.shape[0] * pre))), interpolation=cv2.INTER_AREA)
    h, w = img.shape[:2]
    # paper tint
    page = img.astype(np.float32) * np.array([g.uniform(0.86, 0.95), g.uniform(0.9, 0.97), g.uniform(0.93, 1.0)], dtype=np.float32)
    W, Hh = int(w * 1.22), int(h * 1.16)
    desk = np.array([g.uniform(40, 140), g.uniform(50, 140), g.uniform(60, 150)], dtype=np.float32)
    canvas = np.ones((Hh, W, 3), np.float32) * desk
    canvas += cv2.resize(cv2.GaussianBlur(g.normal(0, 18, (Hh // 8, W // 8, 3)).astype(np.float32), (0, 0), 2), (W, Hh), interpolation=cv2.INTER_LINEAR)
    src = np.float32([[0, 0], [w, 0], [w, h], [0, h]])
    cx, cy = W / 2 + g.uniform(-0.03, 0.03) * W, Hh / 2 + g.uniform(-0.02, 0.02) * Hh
    sc = g.uniform(0.82, 0.93)
    ang = np.deg2rad(g.uniform(-S["rot"], S["rot"]))
    corners = np.float32([[-w / 2, -h / 2], [w / 2, -h / 2], [w / 2, h / 2], [-w / 2, h / 2]]) * sc
    rot = np.array([[np.cos(ang), -np.sin(ang)], [np.sin(ang), np.cos(ang)]], np.float32)
    dst = corners @ rot.T + np.float32([cx, cy])
    # perspective: the far edge of the page looks shorter
    j = g.uniform(0.0, S["persp"]) * w
    if g.random() < 0.7:
        dst[0, 0] += j; dst[1, 0] -= j
    else:
        dst[3, 0] += j; dst[2, 0] -= j
    dst += g.uniform(-0.3, 0.3, dst.shape).astype(np.float32) * S["persp"] * w
    P = cv2.getPerspectiveTransform(src, dst.astype(np.float32))
    warped = cv2.warpPerspective(page, P, (W, Hh), flags=cv2.INTER_LINEAR, borderMode=cv2.BORDER_CONSTANT, borderValue=0)
    mask = cv2.warpPerspective(np.ones((h, w), np.float32), P, (W, Hh), flags=cv2.INTER_LINEAR)
    out = canvas * (1 - mask[..., None]) + warped * mask[..., None]
    # light falling across the page, and a shadow (a hand or a phone)
    yy, xx = np.mgrid[0:Hh, 0:W].astype(np.float32)
    t = g.uniform(0, 2 * np.pi)
    grad = (np.cos(t) * (xx / W - 0.5) + np.sin(t) * (yy / Hh - 0.5))
    light = 1.0 - g.uniform(0.1, 0.35) * (grad - grad.min()) / (grad.max() - grad.min() + 1e-6)
    out *= light[..., None]
    if g.random() < 0.6:
        poly = np.int32([[g.uniform(0, W), 0], [g.uniform(0, W), Hh], [g.uniform(0, W) if g.random() < 0.5 else W, Hh], [W, g.uniform(0, Hh)]])
        sh = np.zeros((Hh, W), np.float32)
        cv2.fillPoly(sh, [poly], 1.0)
        sh = cv2.GaussianBlur(sh, (0, 0), g.uniform(25, 80))
        out *= (1 - g.uniform(0.1, S["shadow"]) * sh)[..., None]
    # focus or motion blur
    if g.random() < S["motion"]:
        k = int(g.uniform(5, 11))
        ker = np.zeros((k, k), np.float32)
        ker[k // 2, :] = 1.0 / k
        ker = cv2.warpAffine(ker, cv2.getRotationMatrix2D((k / 2 - 0.5, k / 2 - 0.5), g.uniform(0, 180), 1.0), (k, k))
        ker /= ker.sum()
        out = cv2.filter2D(out, -1, ker)
    else:
        out = cv2.GaussianBlur(out, (0, 0), g.uniform(*S["blur"]))
    out += g.normal(0, g.uniform(2, 6), out.shape).astype(np.float32)
    out = np.clip(out, 0, 255).astype(np.uint8)
    # the phone's resolution
    f = tw / W
    out = cv2.resize(out, (tw, int(round(Hh * f))), interpolation=cv2.INTER_AREA)
    H = scale_mat(f, f) @ P @ scale_mat(pre, pre)
    return out, H, ".jpg", [cv2.IMWRITE_JPEG_QUALITY, int(g.uniform(*S["q"]))], sev


FN = {"scan_clean": scan_clean, "scan_noisy": scan_noisy, "photo": photo}


def run(job_out):
    job, out_root = job_out
    g = np.random.default_rng(seed_of(job["id"], job["page"], job["condition"]))
    img = cv2.imread(job["raw"], cv2.IMREAD_COLOR)
    h0, w0 = img.shape[:2]
    res, Hm, ext, params, sev = FN[job["condition"]](img, g)
    name = f'{job["id"]}_p{job["page"]}_{job["condition"]}{ext}'
    rel = name
    path = os.path.join(out_root, "data", job["split"], rel)
    ok, buf = cv2.imencode(ext, res, params)
    assert ok
    with open(path, "wb") as fh:
        fh.write(buf.tobytes())
    Hn = Hm @ scale_mat(w0, h0)  # from page fractions to picture pixels
    return {"id": job["id"], "page": job["page"], "condition": job["condition"], "split": job["split"], "file_name": rel,
            "width": int(res.shape[1]), "height": int(res.shape[0]), "bytes": len(buf), "severity": sev, "H": [[round(float(x), 6) for x in r] for r in Hn]}


def main():
    out = sys.argv[1]
    workers = int(sys.argv[sys.argv.index("--workers") + 1]) if "--workers" in sys.argv else 8
    jobs = [json.loads(l) for l in open(os.path.join(out, "_work", "jobs.jsonl")) if l.strip()]
    t0 = time.time()
    cv2.setNumThreads(1)
    with Pool(workers) as pool:
        res = []
        for i, r in enumerate(pool.imap(run, [(j, out) for j in jobs], chunksize=4)):
            res.append(r)
            if (i + 1) % 500 == 0:
                print(f"  {i + 1}/{len(jobs)} pictures, {time.time() - t0:.0f} s", file=sys.stderr)
    with open(os.path.join(out, "_work", "images.jsonl"), "w") as fh:
        for r in res:
            fh.write(json.dumps(r, sort_keys=True) + "\n")
    secs = time.time() - t0
    with open(os.path.join(out, "_work", "timing-degrade.json"), "w") as fh:
        json.dump({"pictures": len(res), "workers": workers, "seconds": round(secs, 1)}, fh)
        fh.write("\n")
    print(f"{len(res)} pictures in {secs:.1f} s with {workers} workers")


if __name__ == "__main__":
    main()
