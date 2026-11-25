"""Take the generator's value anchors from NHANES Lab Percentiles 1.0.0 (a sibling LifeFrom release), once, into
corpus/nhanes-anchors.json, so the corpus build never reads outside this repository.

    uv run python -I corpus/scripts/nhanes_anchors.py ../nhanes-lab-percentiles   # a clone of github.com/caraulani/nhanes-lab-percentiles

For each marker the generator draws (not the ones it computes), the NHANES `reference` population (participants without
common conditions, 2011-2020P), by sex and age band: the 10th and 90th percentiles, converted to the corpus's
conventional unit. Cells with fewer than 120 participants or without those percentiles are left out; the generator then
falls back to the same sex at 18+, then to its own design anchors. These are survey percentiles, not reference intervals.
"""
import hashlib
import json
import os
import subprocess
import sys

SRC = os.path.expanduser(sys.argv[1])
# marker slug -> (NHANES analyte_id, factor from the NHANES unit to the corpus's conventional unit, expected NHANES unit)
MAP = {
    "glucose-fasting": ("glucose-fasting", 1, "mg/dL"), "hba1c": ("hba1c", 1, "%"), "creatinine-serum": ("creatinine-serum", 1, "mg/dL"),
    "blood-urea-nitrogen": ("blood-urea-nitrogen", 1, "mg/dL"), "uric-acid": ("uric-acid", 1, "mg/dL"), "sodium-serum": ("sodium", 1, "mmol/L"),
    "potassium-serum": ("potassium", 1, "mmol/L"), "chloride-serum": ("chloride", 1, "mmol/L"), "calcium-total": ("calcium-total", 1, "mg/dL"),
    "phosphorus-serum": ("phosphorus", 1, "mg/dL"), "total-protein": ("total-protein", 1, "g/dL"), "albumin-serum": ("albumin-serum", 1, "g/dL"),
    "hs-crp": ("hs-crp", 1, "mg/L"), "total-bilirubin": ("total-bilirubin", 1, "mg/dL"), "alt": ("alt", 1, "U/L"), "ast": ("ast", 1, "U/L"),
    "alp": ("alp", 1, "IU/L"), "ggt": ("ggt", 1, "IU/L"), "ldl-cholesterol": ("ldl-cholesterol-friedewald", 1, "mg/dL"),
    "hdl-cholesterol": ("hdl-cholesterol", 1, "mg/dL"), "triglycerides": ("triglycerides", 1, "mg/dL"), "wbc": ("wbc", 1, "1000 cells/uL"),
    "rbc": ("rbc", 1, "million cells/uL"), "mcv": ("mcv", 1, "fL"), "mchc": ("mchc", 1, "g/dL"), "rdw-cv": ("rdw-cv", 1, "%"),
    "platelet-count": ("platelet-count", 1, "1000 cells/uL"), "serum-iron": ("serum-iron", 1, "ug/dL"), "tibc": ("tibc", 1, "ug/dL"),
    "ferritin": ("ferritin", 1, "ng/mL"), "vitamin-d-25-oh": ("vitamin-d-25-oh", 1 / 2.496, "nmol/L"), "vitamin-b12": ("vitamin-b12", 1, "pg/mL"),
    "folate-serum": ("folate-serum", 1, "ng/mL"), "testosterone-total": ("testosterone-total", 1, "ng/dL"), "bicarbonate-co2": ("bicarbonate", 1, "mmol/L"),
    "neutrophils-percent": ("neutrophils-percent", 1, "%"), "lymphocytes-percent": ("lymphocytes-percent", 1, "%"), "monocytes-percent": ("monocytes-percent", 1, "%"),
    "eosinophils-percent": ("eosinophils-percent", 1, "%"), "basophils-percent": ("basophils-percent", 1, "%"),
    "urine-creatinine": ("urine-creatinine", 1, "mg/dL"), "urine-albumin": ("urine-albumin", 1, "ug/mL"),
}
BANDS = ["18-29", "30-39", "40-49", "50-59", "60-69", "70-79", "80+", "18+"]
out = {}
for slug, (aid, f, unit) in sorted(MAP.items()):
    path = os.path.join(SRC, "web", "markers", f"{aid}.json")
    if not os.path.exists(path):
        continue
    raw = open(path, "rb").read()
    d = json.loads(raw)
    assert d["unit"] == unit, (slug, d["unit"])
    bands = {}
    for sex in ["female", "male"]:
        for b in BANDS:
            c = d["populations"].get("reference", {}).get(sex, {}).get(b)
            if not c or (c.get("n") or 0) < 120 or c["p"].get("10") is None or c["p"].get("90") is None:
                continue
            bands[f"{sex[0].upper()}|{b}"] = [round(c["p"]["10"] * f, 4), round(c["p"]["90"] * f, 4), c["n"]]
    if bands:
        out[slug] = {"analyte_id": aid, "nhanes_unit": unit, "factor": f, "sha256": hashlib.sha256(raw).hexdigest(), "p10_p90": bands}
try:
    commit = subprocess.run(["git", "-C", SRC, "rev-parse", "HEAD"], capture_output=True, text=True).stdout.strip()
except Exception:
    commit = ""
doc = {"source": "NHANES Lab Percentiles 1.0.0 (LifeFrom), population 'reference', cycle set 2011-2020P, web/markers/<analyte_id>.json",
       "source_commit": commit, "note": "10th and 90th survey-weighted percentiles by sex and age band; not reference intervals", "markers": out}
dest = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "nhanes-anchors.json")
with open(dest, "w") as fh:
    json.dump(doc, fh, indent=1, sort_keys=True)
    fh.write("\n")
print(f"{len(out)} markers -> {dest}; missing: {sorted(set(MAP) - set(out))}")
