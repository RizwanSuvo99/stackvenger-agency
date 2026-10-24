import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { tech } from "../content";
import { theme } from "../theme";
import { Chip, Kicker } from "../components/Chip";
import { clamp, useEnter } from "../components/anim";

const FloatingChip = ({ index, children }: { readonly index: number; readonly children: string }) => {
  const frame = useCurrentFrame();
  const p = useEnter(18 + index * 3, theme.spring.pop);
  return (
    <Chip
      style={{
        fontSize: 36,
        padding: "16px 32px",
        opacity: interpolate(p, [0, 0.4], [0, 1], clamp),
        scale: String(interpolate(p, [0, 1], [0.5, 1])),
        translate: `0px ${Math.sin(frame / 14 + index) * 5}px`,
      }}
    >
      {children}
    </Chip>
  );
};

// 1:17–1:23 — technologies named across the project write-ups.
export const TechStack = () => {
  const head = useEnter(0);
  return (
    <AbsoluteFill style={{ padding: `${theme.safe.y}px ${theme.safe.x}px`, alignItems: "center" }}>
      <div style={{ textAlign: "center", opacity: head, translate: `0px ${interpolate(head, [0, 1], [40, 0])}px` }}>
        <Kicker>{tech.kicker}</Kicker>
        <div style={{ marginTop: 28, fontFamily: theme.font.display, fontWeight: 500, fontSize: 100, lineHeight: 1.02, letterSpacing: "-0.035em", backgroundImage: theme.gradient.headline, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
          {tech.title}
        </div>
      </div>
      <div style={{ marginTop: 80, maxWidth: 1600, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 20 }}>
        {tech.chips.map((c, i) => (
          <FloatingChip key={c} index={i}>
            {c}
          </FloatingChip>
        ))}
      </div>
    </AbsoluteFill>
  );
};
