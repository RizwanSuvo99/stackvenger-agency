import type { CSSProperties, ReactNode } from "react";
import { theme } from "../theme";

// Clean desktop browser window. Children fill the viewport below the toolbar.
export const BrowserFrame = ({ width, height, domain, children, style }: { readonly width: number; readonly height: number; readonly domain: string; readonly children: ReactNode; readonly style?: CSSProperties }) => (
  <div
    style={{
      width,
      height,
      borderRadius: theme.radius.md,
      background: "#18181b",
      border: "1px solid rgba(255,255,255,0.14)",
      boxShadow: "0 40px 120px rgba(0,0,0,0.65), 0 0 0 1px rgba(0,0,0,0.4)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      ...style,
    }}
  >
    <div style={{ height: 50, flex: "none", display: "flex", alignItems: "center", gap: 10, padding: "0 20px", background: "#1f1f23", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
      {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
        <span key={c} style={{ width: 14, height: 14, borderRadius: 7, background: c }} />
      ))}
      <div style={{ marginLeft: 22, flex: 1, maxWidth: 560, height: 30, borderRadius: 15, background: "#2a2a2f", color: theme.color.muted, fontFamily: theme.font.body, fontSize: 17, display: "flex", alignItems: "center", padding: "0 18px", gap: 10 }}>
        <svg width="13" height="15" viewBox="0 0 13 15" fill="none">
          <rect x="1" y="6.5" width="11" height="7.5" rx="2" stroke="#9a9a9a" strokeWidth="1.5" />
          <path d="M3.5 6.5V4.5a3 3 0 0 1 6 0v2" stroke="#9a9a9a" strokeWidth="1.5" />
        </svg>
        {domain}
      </div>
    </div>
    <div style={{ position: "relative", flex: 1, overflow: "hidden", background: "#0e0e10" }}>{children}</div>
  </div>
);

// Modern phone with a thin bezel and a dynamic island. Children fill the screen.
export const PhoneFrame = ({ width, children, style }: { readonly width: number; readonly children: ReactNode; readonly style?: CSSProperties }) => {
  const height = Math.round(width * 2.06);
  const bezel = Math.round(width * 0.04);
  return (
    <div
      style={{
        width,
        height,
        borderRadius: width * 0.17,
        padding: bezel,
        background: "linear-gradient(160deg, #3a3a40 0%, #141416 45%, #2b2b30 100%)",
        boxShadow: "0 50px 120px rgba(0,0,0,0.7), inset 0 0 0 2px rgba(255,255,255,0.08)",
        ...style,
      }}
    >
      <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: width * 0.135, overflow: "hidden", background: "#000" }}>
        {children}
        <div style={{ position: "absolute", top: width * 0.035, left: "50%", translate: "-50% 0px", width: width * 0.3, height: width * 0.085, borderRadius: width, background: "#000" }} />
      </div>
    </div>
  );
};
