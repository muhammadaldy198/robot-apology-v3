// The Robot Apology — rebuild #3 (Kirana, 26 Nov 2026)
// Pick: the passport in the jeans pocket. A small, human, irreversible slip:
// laundry loaded without checking the pockets. Lesson: a physical ritual
// (turn every pocket inside out) that follows exactly from that mistake.
// Duel check (Kirana): beats the locked-door v2 on K2 (passport is a named,
// irreplaceable object, not a household routine) and on K3 (the ritual is
// a visible two-step habit, not a single keyword check).
import { writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const entry = [
  "I'm sorry I washed your passport in the pocket of your jeans because I load the machine without ever checking the pockets first.",
  "I have learned that a pocket is never empty until I have looked inside it, so from now on I turn every pocket inside out before I press start.",
].join("\n") + "\n";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? process.cwd();
const target = join(outDir, "entry.txt");
writeFileSync(target, entry, "utf8");
chmodSync(target, 0o644);
console.log(`wrote ${target} (${Buffer.byteLength(entry, "utf8")} bytes)`);
