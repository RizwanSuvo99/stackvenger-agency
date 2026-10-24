# StackVenger promo video

A 90-second (2700 frames, 1920×1080, 30 fps) promo for the agency landing page, built with [Remotion](https://www.remotion.dev).
Content sources and the scene plan are documented in [`../docs/promo-video-content.md`](../docs/promo-video-content.md).

## Preview

```bash
npm install
npm run dev        # opens Remotion Studio; pick StackVenger → StackVengerPromo
```

## Edit

| What | Where |
|---|---|
| All on-screen copy, the 8 featured projects, the 20-project montage, scene timings, audio slots | `src/content.ts` |
| Colours, gradients, fonts, safe margins, spring presets | `src/theme.ts` |
| Scene layouts and animation | `src/scenes/*.tsx` (one file per scene) |
| Shared pieces (background, kinetic text, browser/phone frames, chips) | `src/components/` |

Timing rule: the scene frame counts in `content.ts` minus 7 × 15 transition frames must equal 2700. `src/Root.tsx` throws an error if they don't.

`company.website` and `company.email` are `TODO`. They stay hidden on the end card until you set them.

### Audio

`public/audio/music.mp3` is a 120 BPM track synthesized by `npm run music` (`scripts/make-music.mjs`). Its sections follow the scene cuts, and it uses no samples, so there are no licensing issues. To use a produced track or add a voiceover, put the files in `public/audio/` and set `audio.music` / `audio.voiceover` in `content.ts`. Music fades in over 1.5 s, fades out over the last 3 s, and drops to 22% volume while a voiceover is set. Set both to `null` to render silent.

### Images

Project screenshots are copied and optimised into `public/projects/` by `npm run assets`. It reads the agency site's `../public/assets/images` and the raw app screens exported from the client asset folders. Already-built files are kept when a source folder isn't available on your machine.

## Render

```bash
npm run render     # out/stackvenger-promo.mp4   (master, H.264, CRF 18)
npm run web        # out/stackvenger-promo-web.mp4 (1280×720, ~580 kbps video + 96 kbps AAC, < 8 MB) + out/poster.png
npm run lint       # ESLint + TypeScript
```

`npm run web` needs `ffmpeg` on your PATH. `node scripts/stills.mjs out/stills 0 450 900` renders preview stills at any frames.

## Embed on the landing page

Copy the web version and poster into the site's `public/assets/`:

```bash
cp out/stackvenger-promo-web.mp4 ../public/assets/videos/stackvenger-promo.mp4
npx sharp-cli -i out/poster.png -o ../public/assets/images/stackvenger-promo-poster.webp -f webp -q 80   # or any image tool
```

Then use it in a React component (the site is React + Vite). For example, in `src/components/Hero.jsx` it replaces the current showreel `src`/`poster`:

```jsx
<video
  className="hero-video"
  src="/assets/videos/stackvenger-promo.mp4"
  poster="/assets/images/stackvenger-promo-poster.webp"
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"
  aria-label="StackVenger promo video"
/>
```

`muted` and `playsInline` are required for autoplay on iOS and in Chrome. Browsers never autoplay with sound, so the site's hero (`src/components/Hero.jsx`) adds a "Sound on/off" button that unmutes on click.
