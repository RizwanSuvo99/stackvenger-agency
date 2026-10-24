import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { allProjects, hook } from "../content";
import { KineticText } from "../components/KineticText";

// 0:00–0:05 — punchy opening line over a fast, blurred strip of real project covers.
export const Hook = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const strip = allProjects.slice(0, 10);
  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      <div
        style={{
          position: "absolute",
          top: 300,
          left: 0,
          display: "flex",
          gap: 36,
          rotate: "-7deg",
          opacity: interpolate(frame, [0, 12, durationInFrames - 20, durationInFrames], [0, 0.2, 0.2, 0.08], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
          translate: `${interpolate(frame, [0, durationInFrames], [-200, -2600])}px 0px`,
          filter: "blur(3px) saturate(0.6)",
        }}
      >
        {strip.map((k) => (
          <Img key={k} src={staticFile(`projects/covers/${k}.webp`)} style={{ width: 600, height: 395, objectFit: "cover", borderRadius: 24, flex: "none" }} />
        ))}
      </div>
      <AbsoluteFill style={{ background: "radial-gradient(ellipse at center, rgba(2,2,2,0.2) 0%, rgba(2,2,2,0.85) 70%)" }} />
      <div style={{ scale: String(interpolate(frame, [0, durationInFrames], [1, 1.05])) }}>
        <KineticText lines={hook.lines} highlight={hook.highlight} fontSize={200} delay={6} stagger={11} />
      </div>
    </AbsoluteFill>
  );
};
