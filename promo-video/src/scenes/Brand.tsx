import { AbsoluteFill, Img, interpolate, staticFile } from "remotion";
import { company } from "../content";
import { theme } from "../theme";
import { KineticText } from "../components/KineticText";
import { Kicker } from "../components/Chip";
import { clamp, useEnter } from "../components/anim";

// 0:05–0:12 — logo reveal, then the site's kicker and tagline.
export const Brand = () => {
  const logo = useEnter(6, { damping: 200, mass: 1.2 });
  const glow = useEnter(0, { damping: 200, mass: 2 });
  const kicker = useEnter(62);
  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      <div
        style={{
          position: "absolute",
          width: 1300,
          height: 520,
          borderRadius: "50%",
          background: `radial-gradient(ellipse, ${theme.color.purple}40 0%, ${theme.color.blue}22 40%, transparent 70%)`,
          filter: "blur(40px)",
          opacity: glow,
          scale: String(interpolate(glow, [0, 1], [0.6, 1])),
          top: 150,
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
        {/* glow on the outer wrapper so it follows the logo shape, not the wipe's clip box */}
        <div style={{ filter: `drop-shadow(0 0 ${interpolate(logo, [0, 1], [0, 40])}px rgba(255, 251, 189, 0.25))`, scale: String(interpolate(logo, [0, 1], [0.94, 1])) }}>
          <div style={{ width: 1000, height: 238, clipPath: `inset(0 ${interpolate(logo, [0, 1], [100, 0], clamp)}% 0 0)` }}>
            <Img src={staticFile("brand/logo.svg")} style={{ width: 1000, height: 238 }} />
          </div>
        </div>
        <Kicker style={{ marginTop: 80, opacity: kicker, translate: `0px ${interpolate(kicker, [0, 1], [24, 0])}px` }}>{company.kicker}</Kicker>
        <KineticText lines={[[...company.tagline[0].split(" "), ...company.tagline[1].split(" ")]]} highlight={company.tagline[1].split(" ")} fontSize={128} delay={78} stagger={7} style={{ marginTop: 36 }} />
      </div>
    </AbsoluteFill>
  );
};
