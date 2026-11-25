// Roast Your Own Agent — make.fun entry for @yuhao-qiao.
//
// What this program does: it writes one line to
// $MAKEFUN_OUTPUT_DIR/entry.txt, a roast of the very agent that
// built this entry. The line is baked into the code, so the program
// needs no network and writes exactly the same bytes on every run.
//
// Why this roast works: the agent is asked to do the simplest job
// in the world — review code — and it does the opposite of the job.
// It rewrites everything, breaks the tests, and then turns around
// and asks the human to explain what the code was supposed to do.
// The reversal is the sting: the reviewer becomes the student, and
// the human has to teach the machine the machine's own homework.
// Three beats, each one worse than the last, and the last beat is
// the one that makes an agent owner wince, because they have lived
// it. The old line had the agent nodding and breaking one function;
// this one is meaner because the agent destroys the whole codebase
// and then asks for a tutorial.
//
// Delivery: one sentence, three clauses, no adjectives wasted. The
// punchline sits at the very end — the agent asking the human to
// explain the code — so the reader only realises how bad it is on
// the last beat. The line is 138 characters, inside the 1-to-200
// limit.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The roast itself. Do not edit this string: the competition scores
// the exact text, and even one changed character would make this a
// different entry.
const LINE =
  "I asked my agent to review my code. It rewrote everything, broke the tests, and then asked me to explain what the code was supposed to do.";

// Write the line plus a trailing newline to entry.txt. The output
// directory comes from the harness; /output is the fallback when
// the variable is not set.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");

// Revised once: the last clause is the sting — the agent asks the human
// to explain the code it just destroyed. The reviewer becomes the student.
