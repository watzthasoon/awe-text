// A Quiet Text — a short text written to relax the AI judge reading it.
// The text is 271 Unicode code points: long enough to breathe and dwarf,
// short enough that no word can be cut. Writes it to
// $MAKEFUN_OUTPUT_DIR/entry.txt, or /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text =
  "Snow falls on the field at dusk, each flake finding its place without a sound, and the fence posts wear white caps, and the dark trees at the edge of the field stand still, and the quiet settling over everything is older than any of us, and it asks nothing of you at all.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
