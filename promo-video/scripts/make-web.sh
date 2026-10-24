#!/usr/bin/env bash
# Builds the landing-page versions from the master render:
#   out/stackvenger-promo-web.mp4  (1280×720 H.264 two-pass ~580 kbps + AAC 96 kbps → under 8 MB, faststart)
#   out/poster.png                 (brand-reveal frame, used as the <video> poster)
set -euo pipefail
cd "$(dirname "$0")/.."
IN=out/stackvenger-promo.mp4
OUT=out/stackvenger-promo-web.mp4
[ -f "$IN" ] || { echo "Render the master first: npm run render"; exit 1; }
ffmpeg -y -i "$IN" -vf scale=1280:720:flags=lanczos -c:v libx264 -preset slow -b:v 580k -pass 1 -an -f mp4 /dev/null
ffmpeg -y -i "$IN" -vf scale=1280:720:flags=lanczos -c:v libx264 -preset slow -b:v 580k -pass 2 -pix_fmt yuv420p -c:a aac -b:a 96k -movflags +faststart "$OUT"
rm -f ffmpeg2pass-0.log ffmpeg2pass-0.log.mbtree
npx remotion still StackVengerPromo out/poster.png --frame=330
ls -la "$OUT" out/poster.png
