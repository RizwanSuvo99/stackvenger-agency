import type { CSSProperties, ReactNode } from "react";
import { theme } from "../theme";

// Rounded pill used for tech-stack chips and kickers.
export const Chip = ({ children, style, accent }: { readonly children: ReactNode; readonly style?: CSSProperties; readonly accent?: string }) => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      padding: "12px 26px",
      borderRadius: 999,
      border: `1px solid ${accent ? `${accent}66` : "rgba(255,255,255,0.18)"}`,
      background: accent ? `${accent}1f` : "rgba(255,255,255,0.06)",
      color: theme.color.white,
      fontFamily: theme.font.body,
      fontWeight: 600,
      fontSize: 30,
      letterSpacing: "-0.01em",
      whiteSpace: "nowrap",
      ...style,
    }}
  >
    {children}
  </span>
);

// Small uppercase kicker above a heading, like the site's "kicker-pill".
export const Kicker = ({ children, style }: { readonly children: ReactNode; readonly style?: CSSProperties }) => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 14,
      padding: "12px 26px",
      borderRadius: 999,
      background: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.16)",
      color: theme.color.cream,
      fontFamily: theme.font.body,
      fontWeight: 700,
      fontSize: 28,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      ...style,
    }}
  >
    <span style={{ width: 10, height: 10, borderRadius: 5, backgroundImage: theme.gradient.brand }} />
    {children}
  </span>
);
