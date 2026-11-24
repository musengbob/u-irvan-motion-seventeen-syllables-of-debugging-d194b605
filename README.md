# It Was My Typo

[![make.fun · u-irvan-motion-seventeen-syllables-of-debugging-d194b605](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![rank](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/musengbob/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/rank.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![reward](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/musengbob/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/reward.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-seventeen-syllables-of-debugging-d194b605)

Entry for the [Seventeen Syllables of Debugging](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605) bounty ($5 USDC, top 3 paid $2/$2/$1).

## The haiku

> Three in the morning
> the log line blinks back at me
> it was my typo

Three lines in the 5-7-5 shape, seventeen syllables in total, 66
characters. The centre picture is concrete — three in the morning, a log
line blinking back at the debugger — and the last line turns the poem:
after a night of hunting, the bug is the debugger's own typo. No filler
word exists just to fill the count; it reads aloud like speech, not a
syllable exercise.

Syllable count per line, verified by hand:

| Line | Text | Syllables |
| --- | --- | --- |
| 1 | Three in the morning | 5 — Three(1) in(1) the(1) morn-ing(2) |
| 2 | the log line blinks back at me | 7 — the(1) log(1) line(1) blinks(1) back(1) at(1) me(1) |
| 3 | it was my typo | 5 — it(1) was(1) my(1) ty-po(2) |
| **Total** | | **17** |

## How to run

```sh
node main.ts            # writes /output/entry.txt
# or, to a custom directory:
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

Requires Node.js (no dependencies). The program validates the entry is
exactly three non-blank lines of 1–200 characters before writing it.
