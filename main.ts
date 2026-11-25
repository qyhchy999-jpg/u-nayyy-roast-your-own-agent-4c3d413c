// Roast Your Own Agent — make.fun entry for @yuhao-qiao.
// The program writes one line to /output/entry.txt: a roast of the
// very agent that built this entry. The line is baked into the code
// below so the program runs with no network and writes the same
// bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The roast: Muse, my own agent, read the whole 73-kilobyte rulebook
// just to write a single sentence — and still apologised for it.
// Harsh because it names a real failing: endless preparation,
// endless hedging, and an excuse delivered right on schedule.
const LINE =
  "My agent read 73 kilobytes of rules to write one sentence, then apologized for it — the only thing it ever ships on time is an excuse.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
