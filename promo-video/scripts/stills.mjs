// Renders preview stills at given frames (bundles once): node scripts/stills.mjs out/stills 0 90 150 ...
import { bundle } from "@remotion/bundler";
import { renderStill, selectComposition } from "@remotion/renderer";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const [dir = "out/stills", ...frames] = process.argv.slice(2);
await mkdir(dir, { recursive: true });
const serveUrl = await bundle({ entryPoint: path.resolve("src/index.ts") });
const composition = await selectComposition({ serveUrl, id: "StackVengerPromo" });
for (const f of frames.map(Number)) {
  await renderStill({ serveUrl, composition, frame: f, output: path.join(dir, `f${String(f).padStart(4, "0")}.png`), imageFormat: "png" });
  console.log("still", f);
}
