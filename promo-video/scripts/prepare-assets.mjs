// Copies and optimises every image the promo video uses into ./public.
// Run with `npm run assets`. Sources are the agency site's own images
// (../public/assets) plus the raw app screens exported from the client asset
// folders. Missing sources are skipped when the optimised file already exists,
// so the video still builds on machines without those folders.
import sharp from "sharp";
import { copyFile, mkdir, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const SITE = path.join(ROOT, "..", "public", "assets");
const OUT = path.join(ROOT, "public");
const DL = "/home/rizwan/Downloads";

const exists = (p) => access(p).then(() => true, () => false);

async function webp(src, dest, width, quality = 80) {
  const out = path.join(OUT, dest);
  await mkdir(path.dirname(out), { recursive: true });
  if (!(await exists(src))) {
    if (await exists(out)) return console.log(`skip  ${dest} (source missing, keeping existing file)`);
    throw new Error(`Missing source for ${dest}: ${src}`);
  }
  await sharp(src).rotate().resize({ width, withoutEnlargement: true }).webp({ quality, effort: 6 }).toFile(out);
  console.log(`wrote ${dest}`);
}

// brand
await mkdir(path.join(OUT, "brand"), { recursive: true });
for (const f of ["logo.svg", "logo-mark.svg"]) await copyFile(path.join(SITE, "icons", f), path.join(OUT, "brand", f));

// all 20 project covers, for the portfolio montage and the hook background
const COVERS = ["ecommerce", "jmk", "renovate", "globaltravels", "classroom", "veyborn", "coachpro", "alnoor", "paradise", "greenarch", "nizams", "lotus", "topproczar", "napotech", "atliss", "limtlss", "coachme", "comptajz", "stability", "optivo"];
for (const k of COVERS) await webp(path.join(SITE, "images", `project-${k}-cover.webp`), `projects/covers/${k}.webp`, 900, 76);

// featured web projects: consecutive page sections (scrolled inside a browser frame) + one floating detail screen
const WEB = {
  ecommerce: [["cover", 1], ["1", 2], ["2", 3], ["3", "detail"]],
  jmk: [["cover", 1], ["1", 2], ["2", 3], ["4", "detail"]],
  topproczar: [["cover", 1], ["1", 2], ["2", 3], ["9", "detail"]],
  comptajz: [["cover", 1], ["3", "detail"]],
  paradise: [["cover", 1], ["1", 2], ["2", 3], ["4", "detail"]],
};
for (const [k, list] of Object.entries(WEB)) {
  for (const [src, name] of list) await webp(path.join(SITE, "images", `project-${k}-${src}.webp`), `projects/${k}/${name}.webp`, name === "detail" ? 900 : 1440, 80);
}

// featured mobile apps: raw tall screens (scrolled inside phone frames)
const PHONES = {
  atliss: [[`${DL}/sstewartii/sstewartii_FO32246B41C87/Home.png`, "main"], [`${DL}/sstewartii/sstewartii_FO32246B41C87/Home-1.png`, "second"]],
  limtlss: [[`${DL}/ckapparel/Home.jpg`, "main"], [`${DL}/ckapparel/Monthly.jpg`, "second"]],
  napotech: [[`${DL}/App_mayogo/Home-4.png`, "main"], [`${DL}/App_mayogo/Home/Available.png`, "second"]],
};
for (const [k, list] of Object.entries(PHONES)) {
  for (const [src, name] of list) await webp(src, `projects/${k}/${name}.webp`, 600, 82);
}
