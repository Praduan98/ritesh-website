// One-off: regenerate crisp portrait 4:5 portraits from the high-res source JPGs.
// The old .webp were 2000px landscapes crushed to ~90KB, then cropped into a 4:5
// frame (center strip, upscaled) — hence the blur. Here we crop straight from the
// 3–4K originals: `cover` keeps the full original height and crops horizontally
// onto the subject, then encodes at high quality.
//
//   node scripts/encode-images.mjs
import sharp from "sharp";
import path from "path";

const dir = path.resolve(process.cwd(), "public/images");
const W = 1200, H = 1500, Q = 86; // 4:5, retina-ready, high quality

const jobs = [
  { src: "IMG_3794 (1).JPG", out: "ritesh-hero.webp" },     // hands clasped, cream bg
  { src: "IMG_0638.JPG",     out: "ritesh-about.webp" },    // arms crossed, dark board
  { src: "IMG_3555.JPG",     out: "ritesh-friendly.webp" }, // thumbs up, plaid
  { src: "IMG_3556.JPG",     out: "ritesh-alt.webp" },      // thumbs up, plaid alt
];

for (const j of jobs) {
  const before = await sharp(path.join(dir, j.src)).metadata();
  await sharp(path.join(dir, j.src))
    .rotate() // respect EXIF orientation
    .resize(W, H, { fit: "cover", position: sharp.strategy.attention })
    .webp({ quality: Q, effort: 6 })
    .toFile(path.join(dir, j.out));
  const after = await sharp(path.join(dir, j.out)).metadata();
  console.log(`${j.out}  <-  ${j.src}  (${before.width}x${before.height} -> ${after.width}x${after.height})`);
}
console.log("done");
