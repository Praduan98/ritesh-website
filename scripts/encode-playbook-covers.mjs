// One-off: encode the four /playbooks card cover photos.
//
// Sources (Unsplash — free for commercial use, no attribution required):
//   playbook-dark.webp       KYxj3CxT_u0  radar / HUD interface, concentric rings
//   playbook-signals.webp    pxVOztBa6mY  a finger tipping a row of dominoes (teal ground)
//   playbook-checklist.webp  fXlL5I0IvK0  checkboxes being ticked off, dark blue
//   playbook-audit.webp      PSpf_XgOM5w  patch-panel cables
//
// A kanban shot (WqYgZLbDjhQ) was tried for signals first and dropped: dense
// multicolour sticky notes and handwriting survived the scrim and fought the
// motif, where the other three covers all have one simple graphic subject.
//
// Re-fetch an original with:
//   curl -sL -A "Mozilla/5.0" -o <id>.jpg "https://unsplash.com/photos/<id>/download?w=1600"
//
// 1600x900 covers both card widths: the 7-col cards render ~1560x668 device px
// (object-fit crops them to 21:9), the 5-col cards ~1100x618.
//
//   node scripts/encode-playbook-covers.mjs <dir-of-source-jpgs>
import sharp from "sharp";
import path from "path";

const SRC = process.argv[2];
if (!SRC) { console.error("usage: node scripts/encode-playbook-covers.mjs <dir-of-source-jpgs>"); process.exit(1); }
const OUT = path.resolve(process.cwd(), "public/images");
const W = 1600, H = 900, Q = 82;

const jobs = [
  { src: "KYxj3CxT_u0.jpg", out: "playbook-dark.webp",      pos: "centre"    },
  { src: "pxVOztBa6mY.jpg", out: "playbook-signals.webp",   pos: "centre"    },
  { src: "fXlL5I0IvK0.jpg", out: "playbook-checklist.webp", pos: "attention" },
  { src: "PSpf_XgOM5w.jpg", out: "playbook-audit.webp",     pos: "centre"    },
];

for (const j of jobs) {
  const position = j.pos === "attention" ? sharp.strategy.attention : sharp.gravity.centre;
  let pipe = sharp(path.join(SRC, j.src));
  if (j.crop) {
    const m = await pipe.metadata();
    const top = Math.round(m.height * j.crop.top);
    pipe = sharp(path.join(SRC, j.src)).extract({ left: 0, top, width: m.width, height: m.height - top });
  }
  await pipe
    .resize(W, H, { fit: "cover", position })
    .webp({ quality: Q, effort: 6 })
    .toFile(path.join(OUT, j.out));
  const m = await sharp(path.join(OUT, j.out)).metadata();
  console.log(`${j.out}  ${m.width}x${m.height}  ${(m.size / 1024).toFixed(0)}KB`);
}
console.log("done");
