import { AbsoluteFill, interpolate } from "remotion";
import { services } from "../content";
import { theme } from "../theme";
import { Kicker } from "../components/Chip";
import { ServiceIcon } from "../components/Icons";
import { useEnter } from "../components/anim";

const ServiceRow = ({ index, icon, title, line }: { readonly index: number; readonly icon: string; readonly title: string; readonly line: string }) => {
  const p = useEnter(60 + index * 50);
  return (
    <div
      style={{
        display: "flex",
        gap: 34,
        alignItems: "center",
        padding: "30px 40px",
        borderRadius: theme.radius.lg,
        background: "rgba(16,16,16,0.82)",
        border: `1px solid ${theme.color.lineWarm}`,
        opacity: p,
        translate: `${interpolate(p, [0, 1], [90, 0])}px 0px`,
      }}
    >
      <div style={{ flex: "none", width: 100, height: 100, borderRadius: 26, display: "grid", placeItems: "center", backgroundImage: theme.gradient.brand, color: theme.color.white }}>
        <ServiceIcon name={icon} />
      </div>
      <div>
        <div style={{ fontFamily: theme.font.display, fontWeight: 500, fontSize: 46, lineHeight: 1.1, letterSpacing: "-0.02em", color: theme.color.white, whiteSpace: "nowrap" }}>{title}</div>
        <div style={{ marginTop: 10, fontFamily: theme.font.body, fontSize: 34, lineHeight: 1.3, color: theme.color.text }}>{line}</div>
      </div>
    </div>
  );
};

// 0:12–0:25 — the four services from the site, revealed one by one.
export const Services = () => {
  const head = useEnter(4);
  return (
    <AbsoluteFill style={{ padding: `${theme.safe.y}px ${theme.safe.x}px`, flexDirection: "row", alignItems: "center", gap: 70 }}>
      <div style={{ width: 600, flex: "none", opacity: head, translate: `0px ${interpolate(head, [0, 1], [40, 0])}px` }}>
        <Kicker>{services.kicker}</Kicker>
        <div style={{ marginTop: 34, fontFamily: theme.font.display, fontSize: 96, fontWeight: 500, lineHeight: 1.04, letterSpacing: "-0.035em", backgroundImage: theme.gradient.headline, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
          {services.title}
        </div>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24 }}>
        {services.items.map((s, i) => (
          <ServiceRow key={s.title} index={i} icon={s.icon} title={s.title} line={s.line} />
        ))}
      </div>
    </AbsoluteFill>
  );
};
