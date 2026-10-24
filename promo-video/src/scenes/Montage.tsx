import { AbsoluteFill, Easing, Img, interpolate, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { allProjects, montage } from "../content";
import { theme } from "../theme";
import { clamp, useEnter } from "../components/anim";

const Tile = ({ k, index }: { readonly k: string; readonly index: number }) => {
  const p = useEnter(index * 3, theme.spring.pop);
  return (
    <Img
      src={staticFile(`projects/covers/${k}.webp`)}
      style={{
        width: 520,
        height: 342,
        objectFit: "cover",
        borderRadius: 22,
        border: "1px solid rgba(255,255,255,0.12)",
        opacity: interpolate(p, [0, 0.4], [0, 1], clamp),
        scale: String(interpolate(p, [0, 1], [0.6, 1])),
      }}
    />
  );
};

// 0:55–1:05 — a tilted wall of all 20 project covers with a count-up.
export const Montage = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const count = Math.round(interpolate(frame, [30, 140], [0, montage.count], { ...clamp, easing: Easing.out(Easing.cubic) }));
  const label = useEnter(40);
  const plus = useEnter(140, theme.spring.pop);
  return (
    <AbsoluteFill style={{ overflow: "hidden", perspective: 1800 }}>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          display: "grid",
          gridTemplateColumns: "repeat(5, 520px)",
          gap: 28,
          translate: `-50% ${interpolate(frame, [0, durationInFrames], [-44, -56])}%`,
          rotate: "-9deg",
          transform: `rotateX(22deg) scale(${interpolate(frame, [0, durationInFrames], [1.02, 1.12])})`,
        }}
      >
        {allProjects.map((k, i) => (
          <Tile key={k} k={k} index={i} />
        ))}
      </div>
      <AbsoluteFill style={{ background: "radial-gradient(ellipse at center, rgba(2,2,2,0.94) 0%, rgba(2,2,2,0.82) 34%, rgba(2,2,2,0.35) 72%)" }} />
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
        <div style={{ position: "relative", fontFamily: theme.font.display, fontWeight: 600, fontSize: 340, lineHeight: 0.9, letterSpacing: "-0.05em" }}>
          <span style={{ backgroundImage: theme.gradient.headline, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent", fontVariantNumeric: "tabular-nums" }}>{count}</span>
          <span style={{ position: "absolute", left: "100%", top: 0, backgroundImage: theme.gradient.brand, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent", opacity: plus, scale: String(interpolate(plus, [0, 1], [0.4, 1])) }}>{montage.suffix}</span>
        </div>
        <div style={{ marginTop: 30, fontFamily: theme.font.body, fontWeight: 600, fontSize: 64, color: theme.color.white, opacity: label, translate: `0px ${interpolate(label, [0, 1], [30, 0])}px` }}>{montage.label}</div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
