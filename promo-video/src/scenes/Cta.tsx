import { AbsoluteFill, Img, interpolate, staticFile } from "remotion";
import { company, cta } from "../content";
import { theme } from "../theme";
import { KineticText } from "../components/KineticText";
import { useEnter } from "../components/anim";

// 1:23–1:30 — call to action and logo end card. Website/email lines only
// appear once they are filled in content.ts.
export const Cta = () => {
  const logo = useEnter(54);
  const button = useEnter(70, theme.spring.pop);
  const contact = useEnter(84);
  const contacts = [company.website, company.email].filter(Boolean) as string[];
  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      <div style={{ position: "absolute", width: 1400, height: 700, borderRadius: "50%", background: `radial-gradient(ellipse, ${theme.color.blue}30 0%, ${theme.color.purple}26 40%, transparent 70%)`, filter: "blur(50px)" }} />
      <KineticText lines={cta.lines} highlight={cta.highlight} fontSize={190} delay={4} stagger={9} />
      <div style={{ marginTop: 70, display: "flex", alignItems: "center", gap: 56 }}>
        <Img src={staticFile("brand/logo.svg")} style={{ width: 470, height: 112, opacity: logo, translate: `0px ${interpolate(logo, [0, 1], [30, 0])}px` }} />
        <div
          style={{
            padding: "26px 54px",
            borderRadius: 18,
            backgroundImage: theme.gradient.brand,
            boxShadow: `0 20px 60px ${theme.color.purple}55`,
            fontFamily: theme.font.body,
            fontWeight: 700,
            fontSize: 44,
            color: theme.color.white,
            opacity: button,
            scale: String(interpolate(button, [0, 1], [0.7, 1])),
          }}
        >
          → {cta.button}
        </div>
      </div>
      {contacts.length ? (
        <div style={{ marginTop: 56, display: "flex", gap: 60, fontFamily: theme.font.body, fontWeight: 600, fontSize: 48, color: theme.color.cream, opacity: contact }}>
          {contacts.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>
      ) : null}
    </AbsoluteFill>
  );
};
