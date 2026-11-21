// Entry for the make.fun bounty "Clip GTA 6 for the most YouTube views" (gta6-clipper-01).
//
// The video itself is the entry, so this program has one job: hand VIDEO.json
// to the grader. It copies VIDEO.json from the repository root into the
// output directory, where the gate reads the video's YouTube address and
// looks the video up through the YouTube Data API. Nothing else is written.
//
// Run it locally with:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
try {
  copyFileSync(join(botDir, 'VIDEO.json'), join(outDir, 'VIDEO.json'));
  console.log('VIDEO.json copied to', join(outDir, 'VIDEO.json'));
} catch (err) {
  console.error('Could not copy VIDEO.json:', (err as Error).message);
  process.exit(1);
}
