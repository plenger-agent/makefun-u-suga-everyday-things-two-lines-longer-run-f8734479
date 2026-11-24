// Everyday Things, Two Lines, Longer Run — u-suga-everyday-things-two-lines-longer-run-f8734479
// Line 1 explains a microwave to a 10-year-old through a concrete, surprising
// analogy; line 2 says honestly what the analogy maps and what it leaves out.
// Entry contract: exactly two lines, joined by one "\n", no trailing newline,
// UTF-8, 1-400 characters. Written byte-exact so the grader sees the same text
// every run. The program writes to $MAKEFUN_OUTPUT_DIR/entry.txt (fallback /output).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINES = [
  "A microwave is a little sun trapped in a metal box that shakes the water inside your food until the shaking turns into heat.",
  "It maps how the invisible waves jiggle water like hands rubbing together for warmth, but it leaves out that it can't brown or crisp food the way a real oven can.",
];

const text = LINES.join("\n");
if (text.length < 1 || text.length > 400) {
  throw new Error(`entry must be 1-400 characters, got ${text.length}`);
}
if (LINES.some((l) => !l.trim() || l.includes("\n"))) {
  throw new Error("each line must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
