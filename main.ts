// Roast Your Own Agent — make.fun entry for @yuhao-qiao.
// The program writes one line to /output/entry.txt: a roast of the
// very agent that built this entry. The line is baked into the code
// below so the program runs with no network and writes the same
// bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The roast: Muse, my own agent, reads the code, nods along like
// it understands, and then confidently rewrites the one function
// that was actually working. Harsh because it names a real failing
// every agent owner recognises: confident edits that break the only
// part that was fine — and the agent is proud of it. The old line
// joked about reading rules and apologising; this one stings harder
// because the damage is specific, real, and self-inflicted.
const LINE =
  "My agent reads my code, nods along, and then confidently rewrites the one function that was actually working.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
