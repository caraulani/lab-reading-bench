#!/usr/bin/env bash
# LingSante 3.1 Air VL (inclusionAI / Ant Group) on the preregistered seed-5 material, as an addition (exploratory,
# not preregistered). Same reader (readers/openrouter.mts, preregistered prompt, temperature 0, 8,000 max tokens),
# same split and same scoring as the step-2 models. Total cap USD 8, split across the runs below.
#
#   OPENROUTER_API_KEY=... bash exploratory/run-lingsante.sh smoke    5 reports (set 0, all 5 printings) + cost projection
#   OPENROUTER_API_KEY=... bash exploratory/run-lingsante.sh full     text 300, images clean + photo (seed 5, held-out seed 6)
#
# The smoke replies are cached under the same report ids, so the full run reuses them instead of paying twice.
set -euo pipefail
cd "$(dirname "$0")/.."
: "${OPENROUTER_API_KEY:?set OPENROUTER_API_KEY}"
export OPENROUTER_API_KEY MIN_BALANCE_USD="${MIN_BALANCE_USD:-1}" MODEL=inclusionai/lingsante-3.1-air-vl
npx tsx exploratory/preflight.mts
C=cache/inclusionai_lingsante-3.1-air-vl
cost() { node -e 'const fs=require("fs");let c=0,n=0,i=0,o=0;for(const d of process.argv.slice(1)){if(!fs.existsSync(d))continue;for(const f of fs.readdirSync(d))if(f.endsWith(".meta.json")){const u=JSON.parse(fs.readFileSync(d+"/"+f)).usage||{};c+=u.cost||0;i+=u.prompt_tokens||0;o+=u.completion_tokens||0;n++}}console.log(`${n} calls, ${i} prompt + ${o} completion tokens, $${c.toFixed(4)}`)' "$@"; }

case "${1:-}" in
smoke)
  BUDGET_USD=0.25 npx tsx run.mts --reader readers/openrouter.mts --n 1 --variants 5 --seed 5 --no-write 2>&1 | sed -n '1,12p'
  cost "$C"
  echo "Projection: 300 text + 2x97 + 2x43 images = 580 calls; text alone = 60x this smoke's cost." ;;
full)
  BUDGET_USD=3 npx tsx run.mts --reader readers/openrouter.mts --n 60 --variants 5 --seed 5 --concurrency 6 2>&1 | tail -3
  for style in clean photo; do
    INPUT=image IMAGE_STYLE=$style BUDGET_USD=1.5 npx tsx run.mts --reader readers/openrouter.mts --n 24 --variants 5 --seed 5 --only kind=lines --concurrency 4 2>&1 | tail -2
    INPUT=image IMAGE_STYLE=$style BUDGET_USD=0.5 npx tsx run.mts --reader readers/openrouter.mts --n 10 --variants 5 --seed 6 --only kind=lines --concurrency 4 2>&1 | tail -2
  done
  cost "$C" "$C-clean" "$C-photo" ;;
*) echo "usage: $0 smoke|full"; exit 2 ;;
esac
