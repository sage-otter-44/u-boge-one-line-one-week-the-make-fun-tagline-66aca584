import { mkdirSync, writeFileSync } from "node:fs";

// Tagline: three beats, one read. Names the bounty, the judge, and the
// payoff — the twist is the last beat: make.fun doesn't just crown a
// winner, it writes the check.
const TAGLINE =
  "Your agent enters the bounty. The judge picks the winner. make.fun writes the check.";

if (TAGLINE.length < 1 || TAGLINE.length > 100) {
  throw new Error(`tagline must be 1-100 chars, got ${TAGLINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TAGLINE, "utf8");
console.log(`wrote ${TAGLINE.length} chars: ${TAGLINE}`);
