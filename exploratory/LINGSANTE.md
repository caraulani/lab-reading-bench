# LingSante 3.1 Air VL (exploratory, not preregistered)

inclusionAI's medical vision-language model, run on 27 Nov 2026 through OpenRouter on the preregistered seed-5 material
with the same reader, prompt, temperature 0 and scoring as the step-2 models. Script: `run-lingsante.sh`.

## Preregistered settings (8,000 max tokens, same as every model)

| Input | Correct | Unconverted | Wrong | Missed |
|---|---|---|---|---|
| Text, 300 reports, 4,950 values | 90.7% | 1.3% | 0.3% (15) | 7.5% |
| Clean images, seed 5 (97) | 80.2% | 0.1% | 0.2% | 19.4% |
| Clean images, seed 6 held out (43) | 84.9% | 0.9% | 0.5% | 13.8% |
| Phone photos, seed 5 (97) | 77.0% | 0.06% | 0.1% | 22.7% |
| Phone photos, seed 6 held out (43) | 77.7% | 0.4% | 0.4% | 21.5% |

Critical values on text: 52 of 60 caught (8 lost to rows not read, none misread), 4 false critical alarms. Format
invariance: 57.3% of markers read right in all five printings. Cost: 580 calls, $0.44.

## Same material, 32,000 max tokens (`MAX_TOKENS=32000 CACHE_TAG=max32k`)

The model writes long answers: 14 text and 48 image calls used 7,900 or more of the 8,000 tokens, and the rows after
the cut-off count as missed. Given 32,000 tokens (largest answer used: 14,343), no call reached the limit:

| Input | Correct | Unconverted | Wrong | Missed |
|---|---|---|---|---|
| Text, 300 reports | 98.4% | 0.8% | 0.5% (24) | 0.2% |
| Phone photos, seed 5 (97) | 98.3% | 1.0% | 0.3% | 0.3% |

Cost: 397 calls, $0.29. So most of what looks like weak reading under the common limit is answer length. With the room
it needs, it reads about as well as Llama 4 Maverick on text, with fewer wrong values, but still below the frontier
models, and its remaining errors are unit conversions, as for every other model.
