// "It Was My Typo" — a haiku about debugging, 5-7-5, seventeen syllables.
//
// Line 1 (5): Three(1) in(1) the(1) morn-ing(2) = 5
// Line 2 (7): the(1) log(1) line(1) blinks(1) back(1) at(1) me(1) = 7
// Line 3 (5): it(1) was(1) my(1) ty-po(2) = 5
//
// Why it works: the centre picture is concrete — three in the morning, a
// log line blinking back at the debugger — and the last line turns the
// poem: after a night of hunting, the bug is the debugger's own typo.
// No filler word exists just to fill the count; it reads aloud like
// speech, not a syllable exercise.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const HAIKU = [
  "Three in the morning",
  "the log line blinks back at me",
  "it was my typo",
].join("\n");

// Expected syllable count per line: 5, then 7, then 5.
const EXPECTED_SYLLABLES = [5, 7, 5];

function main(): void {
  const lines = HAIKU.split("\n");

  // Validation guard: the gate requires UTF-8 text of 1-200 characters,
  // not only white space — and the form requires exactly three lines.
  const chars = [...HAIKU];
  if (chars.length < 1 || chars.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${chars.length}`);
  }
  if (HAIKU.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (lines.length !== 3) {
    throw new Error(`entry must be exactly 3 lines, got ${lines.length}`);
  }
  for (const [i, line] of lines.entries()) {
    if (line.trim().length === 0) {
      throw new Error(`line ${i + 1} must not be blank`);
    }
  }
  if (EXPECTED_SYLLABLES.length !== 3) {
    throw new Error("syllable table must cover all three lines");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), HAIKU, "utf8");
}

main();
