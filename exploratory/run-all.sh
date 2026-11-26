#!/usr/bin/env bash
# Exploratory runs after the preregistered test (planned 26 Nov 2026; not preregistered). Everything here is labelled
# exploratory in results/. Priority order; each run has its own spending cap (BUDGET_USD, per process), and the caps
# add up to USD 36.2 against a total budget of USD 40. A run stopped by its cap is reported as stopped, never imputed.
#
#   OPENROUTER_API_KEY=... bash exploratory/run-all.sh [2|3|4|5 ...]     (no argument: every step, in order)
#
# Replies go to cache/ (one directory per model, prompt and repeat, with a .meta.json per call: response id, the model
# that answered, the provider, usage). Re-running a step reads the cache and costs nothing.
# Written for the bash 3.2 that macOS ships: no parentheses inside quoted strings in the blocks below.
set -euo pipefail
cd "$(dirname "$0")/.."
: "${OPENROUTER_API_KEY:?set OPENROUTER_API_KEY}"
export OPENROUTER_API_KEY MIN_BALANCE_USD="${MIN_BALANCE_USD:-2}"
npx tsx exploratory/preflight.mts
X=results/exploratory
mkdir -p "$X/rows" "$X/logs"
TEXT=(--n 60 --variants 5 --seed 5 --concurrency 6)
TEXT150=(--n 30 --variants 5 --seed 5 --concurrency 4)
HAIKU=anthropic/claude-haiku-5.5
LUNA=openai/gpt-5.6-luna
LLAMA=meta-llama/llama-4-maverick
slug() { echo "${1//\//_}"; }
STEPS=" ${*:-2 3 4 5} "
has() { case "$STEPS" in *" $1 "*) return 0 ;; *) return 1 ;; esac; }

# 2. Repeat runs: three more independent runs of Haiku and Luna on the 300 seed-5 text reports, each in a fresh cache
#    directory so no reply is reused. Run 1 is the preregistered run, re-scored from its cache.
if has 2; then
  for m in $HAIKU $LUNA; do
    s=$(slug $m)
    OFFLINE=1 MODEL=$m npx tsx run.mts --reader readers/openrouter.mts "${TEXT[@]}" --no-write --rows-out "$X/rows/$s-rep1.jsonl" >/dev/null
    for rep in rep2 rep3 rep4; do
      cap=0.6; [ "$m" = "$LUNA" ] && cap=0.8
      CACHE_TAG=$rep MODEL=$m BUDGET_USD=$cap npx tsx run.mts --reader readers/openrouter.mts "${TEXT[@]}" --rows-out "$X/rows/$s-$rep.jsonl" 2>&1 | tee "$X/logs/$s-$rep.log" | tail -3
    done
    npx tsx exploratory/repeats.mts "run 1, preregistered 18 Nov=$X/rows/$s-rep1.jsonl" "run 2=$X/rows/$s-rep2.jsonl" "run 3=$X/rows/$s-rep3.jsonl" "run 4=$X/rows/$s-rep4.jsonl" --md "$X/repeats-$s-seed5.md" --json "$X/repeats-$s-seed5.json"
  done
fi

# 3. Reading vs conversion: the model returns every value as printed, PROMPT=printed; @lifefrom/units converts.
if has 3; then
  for m in $HAIKU $LUNA $LLAMA; do
    s=$(slug $m)
    cap=0.6; [ "$m" = "$LUNA" ] && cap=0.8
    PROMPT=printed MODEL=$m BUDGET_USD=$cap npx tsx run.mts --reader readers/convert.mts "${TEXT[@]}" --rows-out "$X/rows/$s-printed-converted.jsonl" 2>&1 | tee "$X/logs/$s-printed.log" | tail -4
    UNITS_FIX=1 OFFLINE=1 PROMPT=printed MODEL=$m npx tsx run.mts --reader readers/convert.mts "${TEXT[@]}" 2>&1 | tail -4
    npx tsx exploratory/as-printed.mts --cache "cache/$s-printed" --json "$X/as-printed-$s-seed5.json" > "$X/as-printed-$s-seed5.md"
  done
  INNER=readers/printed-oracle.mts npx tsx run.mts --reader readers/convert.mts "${TEXT[@]}" 2>&1 | tail -4
  UNITS_FIX=1 INNER=readers/printed-oracle.mts npx tsx run.mts --reader readers/convert.mts "${TEXT[@]}" 2>&1 | tail -4
fi

# 4. Frontier models, preregistered prompt, first 30 sets = 150 reports, as in step 3 of the preregistered test.
if has 4; then
  for mc in anthropic/claude-opus-5.5:7 openai/gpt-5.6-sol:7 google/gemini-3.1-pro-preview:10; do
    m=${mc%:*}; cap=${mc##*:}
    MODEL=$m BUDGET_USD=$cap npx tsx run.mts --reader readers/openrouter.mts "${TEXT150[@]}" 2>&1 | tee "$X/logs/$(slug $m)-seed5-150.log" | tail -4
  done
fi

# 5. Vision models on the corpus test split: Haiku on all 385 reports, clean scan and phone photo; Gemini 3.8 Flash on a
#    seeded random 100-report subset, corpus-out/test-100-seed5, whose report list is copied to results/exploratory/.
if has 5; then
  if [ ! -d corpus-out/full ]; then echo "corpus-out/full is missing: build it with npm run corpus, or download it from Hugging Face"; exit 1; fi
  npx tsx exploratory/corpus-subset.mts --corpus corpus-out/full --split test --n 100 --seed 5 --out corpus-out/test-100-seed5
  cp corpus-out/test-100-seed5/SUBSET.txt "$X/corpus-test-100-seed5-reports.txt"
  stamp=$(date +%F)
  for spec in "$HAIKU|corpus-out/full|all|1.5" "google/gemini-3.8-flash|corpus-out/test-100-seed5|100-seed5|1.5"; do
    IFS='|' read -r m dir tag cap <<<"$spec"
    for cond in scan_clean photo; do
      INPUT=image IMAGE_STYLE=corpus-$cond MODEL=$m BUDGET_USD=$cap npx tsx corpus/score.mts --reader readers/openrouter.mts --corpus "$dir" --split test --input $cond --concurrency 4 2>&1 | tee "$X/logs/$(slug $m)-corpus-$cond.log" | tail -3
      for ext in md json; do mv "results/corpus/$stamp-score-openrouter-test-$cond.$ext" "results/corpus/$stamp-score-openrouter-$(slug $m)-test-$tag-$cond.$ext"; done
    done
  done
fi

npx tsx exploratory/spend.mts | tee "$X/spend.md"
