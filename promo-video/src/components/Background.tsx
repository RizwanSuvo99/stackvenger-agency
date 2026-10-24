import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { theme } from "../theme";

// Shared dark backdrop with two slowly drifting brand-gradient glows and a
// faint grid. Lives underneath every scene so crossfades never flash black.
export const Background = () => {
  const frame = useCurrentFrame();
  const t = frame / 30;
  return (
    <AbsoluteFill style={{ backgroundColor: theme.color.bg, overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          width: 1100,
          height: 1100,
          borderRadius: "50%",
          left: interpolate(Math.sin(t * 0.21), [-1, 1], [-380, 260]),
          top: interpolate(Math.cos(t * 0.17), [-1, 1], [-520, 40]),
          background: `radial-gradient(circle, ${theme.color.blue}55 0%, transparent 65%)`,
          filter: "blur(60px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 1200,
          height: 1200,
          borderRadius: "50%",
          right: interpolate(Math.cos(t * 0.19), [-1, 1], [-500, 120]),
          bottom: interpolate(Math.sin(t * 0.15), [-1, 1], [-700, -120]),
          background: `radial-gradient(circle, ${theme.color.purple}48 0%, transparent 65%)`,
          filter: "blur(70px)",
        }}
      />
      <AbsoluteFill
        style={{
          backgroundImage: `linear-gradient(${theme.color.line} 1px, transparent 1px), linear-gradient(90deg, ${theme.color.line} 1px, transparent 1px)`,
          backgroundSize: "96px 96px",
          backgroundPosition: `0px ${(frame * 0.4) % 96}px`,
          maskImage: "radial-gradient(ellipse at center, rgba(0,0,0,0.55) 0%, transparent 72%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, rgba(0,0,0,0.55) 0%, transparent 72%)",
        }}
      />
    </AbsoluteFill>
  );
};
