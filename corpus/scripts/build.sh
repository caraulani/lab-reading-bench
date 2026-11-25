#!/usr/bin/env bash
# lab-report-corpus: build everything from nothing. No downloads; the generator is the only input.
#   corpus/scripts/build.sh                 the full corpus: 4,000 reports, seed 1 -> corpus-out/full
#   corpus/scripts/build.sh sample          about 50 reports for a quick look -> corpus-out/sample
# Environment: N, SEED, OUT, WORKERS override the defaults.
set -euo pipefail
cd "$(dirname "$0")/../.."
MODE="${1:-full}"
if [ "$MODE" = "sample" ]; then N="${N:-50}"; OUT="${OUT:-corpus-out/sample}"; else N="${N:-4000}"; OUT="${OUT:-corpus-out/full}"; fi
SEED="${SEED:-1}"; WORKERS="${WORKERS:-8}"
PY="uv run -q --with-requirements corpus/requirements.txt python -I"
rm -rf "$OUT"
t0=$(date +%s)
npx tsx corpus/build.mts --n "$N" --seed "$SEED" --out "$OUT" --workers "$WORKERS"
$PY corpus/degrade.py "$OUT" --workers "$WORKERS"
$PY corpus/package.py "$OUT" --kaggle
rm -rf "$OUT/_work/raw"
echo "built $OUT in $(( $(date +%s) - t0 )) s"
