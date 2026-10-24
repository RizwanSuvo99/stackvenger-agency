// Brand tokens, mirrored from the agency site's src/index.css (:root variables).
import { loadFont as loadDisplay } from "@remotion/google-fonts/SpaceGrotesk";
import { loadFont as loadBody } from "@remotion/google-fonts/Manrope";

const display = loadDisplay("normal", { weights: ["400", "500", "600", "700"], subsets: ["latin"] });
const body = loadBody("normal", { weights: ["400", "500", "600", "700", "800"], subsets: ["latin"] });

export const theme = {
  color: {
    bg: "#020202",
    panel: "#121110",
    tile: "#101010",
    line: "rgba(255, 255, 255, 0.08)",
    lineWarm: "#332c27",
    text: "#d2d2cf",
    muted: "#b6b6b3",
    white: "#ffffff",
    cream: "#fffbbd",
    purple: "#a900ff",
    blue: "#008cff",
  },
  gradient: {
    // the site's button gradient and its white→cream headline gradient
    brand: "linear-gradient(70deg, #008cff 0%, #a900ff 70%)",
    headline: "linear-gradient(180deg, #ffffff 30%, #fffbbd 100%)",
  },
  font: {
    display: display.fontFamily,
    body: body.fontFamily,
  },
  // 1920×1080 safe area: key content stays inside these margins
  safe: { x: 120, y: 100 },
  radius: { lg: 28, md: 20, sm: 12 },
  // one motion language for the whole video: soft, ease-out springs
  spring: {
    soft: { damping: 200 },
    pop: { damping: 14, stiffness: 140, mass: 0.7 },
  },
} as const;
