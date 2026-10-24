import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { process } from "../content";
import { theme } from "../theme";
import { Kicker } from "../components/Chip";
import { clamp, useEnter } from "../components/anim";

const LINE_START = 50;
const LINE_END = 230;
const STEP_X = [0, 1, 2, 3].map((i) => i / 3); // progress at which each node is reached

const Step = ({ index, title, line }: { readonly index: number; readonly title: string; readonly line: string }) => {
  const p = useEnter(LINE_START + STEP_X[index] * (LINE_END - LINE_START) - 4, theme.spring.pop);
  return (
    <div style={{ width: 380, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
      <div
        style={{
          width: 120,
          height: 120,
          borderRadius: 60,
          display: "grid",
          placeItems: "center",
          backgroundImage: theme.gradient.brand,
          boxShadow: `0 0 ${interpolate(p, [0, 1], [0, 60])}px ${theme.color.purple}88`,
          fontFamily: theme.font.display,
          fontWeight: 600,
          fontSize: 46,
          color: theme.color.white,
          scale: String(interpolate(p, [0, 1], [0.3, 1])),
          opacity: interpolate(p, [0, 0.3], [0, 1], clamp),
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>
      <div style={{ marginTop: 40, fontFamily: theme.font.display, fontWeight: 500, fontSize: 64, letterSpacing: "-0.03em", color: theme.color.white, opacity: p, translate: `0px ${interpolate(p, [0, 1], [30, 0])}px` }}>{title}</div>
      <div style={{ marginTop: 16, fontFamily: theme.font.body, fontSize: 34, lineHeight: 1.35, color: theme.color.text, opacity: p, translate: `0px ${interpolate(p, [0, 1], [30, 0])}px` }}>{line}</div>
    </div>
  );
};

// 1:05–1:17 — the four pillars from the site's About section, joined by a drawing line.
export const Process = () => {
  const frame = useCurrentFrame();
  const head = useEnter(2);
  const closer = useEnter(255);
  const progress = interpolate(frame, [LINE_START, LINE_END], [0, 1], clamp);
  return (
    <AbsoluteFill style={{ padding: `${theme.safe.y}px ${theme.safe.x}px`, alignItems: "center" }}>
      <div style={{ textAlign: "center", opacity: head, translate: `0px ${interpolate(head, [0, 1], [40, 0])}px` }}>
        <Kicker>{process.kicker}</Kicker>
        <div style={{ marginTop: 28, fontFamily: theme.font.display, fontWeight: 500, fontSize: 88, lineHeight: 1.02, whiteSpace: "nowrap", letterSpacing: "-0.035em", backgroundImage: theme.gradient.headline, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
          {process.title}
        </div>
      </div>
      <div style={{ position: "relative", marginTop: 90, width: 1600, display: "flex", justifyContent: "space-between" }}>
        <div style={{ position: "absolute", left: 190, right: 190, top: 59, height: 3, background: "rgba(255,255,255,0.12)", borderRadius: 2 }} />
        <div style={{ position: "absolute", left: 190, top: 59, height: 3, width: `calc((100% - 380px) * ${progress})`, backgroundImage: theme.gradient.brand, borderRadius: 2 }} />
        {process.steps.map((s, i) => (
          <Step key={s.title} index={i} title={s.title} line={s.line} />
        ))}
      </div>
      <div style={{ marginTop: 64, fontFamily: theme.font.display, fontWeight: 500, fontSize: 60, letterSpacing: "-0.02em", color: theme.color.cream, opacity: closer, translate: `0px ${interpolate(closer, [0, 1], [30, 0])}px` }}>{process.closer}</div>
    </AbsoluteFill>
  );
};
