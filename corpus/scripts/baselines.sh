#!/usr/bin/env bash
# lab-report-corpus baselines on the test split.
#   LIFEFROM_DIR=/path/to/LifeFrom corpus/scripts/baselines.sh [corpus-out/full]
# Without LIFEFROM_DIR the LifeFrom reader is skipped (its code is not in this repository).
set -euo pipefail
cd "$(dirname "$0")/../.."
DIR="${1:-corpus-out/full}"
export OCR_WORKERS="${OCR_WORKERS:-8}"
STAMP=$(date +%Y-%m-%d)
npx tsx run.mts --reader readers/empty.mts --corpus "$DIR" --split test --input text
npx tsx corpus/score.mts --reader readers/corpus-oracle.mts --corpus "$DIR" --split test --input text
if [ -n "${LIFEFROM_DIR:-}" ]; then
  for INPUT in text pdf scan_clean scan_noisy photo; do
    t0=$(date +%s)
    npx tsx run.mts --reader readers/lifefrom-local.mts --corpus "$DIR" --split test --input "$INPUT" --concurrency 8
    npx tsx corpus/score.mts --reader readers/lifefrom-local.mts --corpus "$DIR" --split test --input "$INPUT" --concurrency 8
    echo "$INPUT: $(( $(date +%s) - t0 )) s" | tee -a "results/corpus/$STAMP-timing.txt"
  done
  uv run -q --with-requirements corpus/requirements.txt python -I corpus/ocr_eval.py "$DIR" --split test --write "results/corpus/$STAMP-ocr-test.json" | tee "results/corpus/$STAMP-ocr-test.md"
else
  echo "LIFEFROM_DIR not set: the LifeFrom reader and the OCR baseline were skipped"
fi
