import type { CSSProperties } from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../theme";

type Props = {
  readonly lines: readonly (readonly string[])[];
  readonly highlight?: readonly string[];
  readonly fontSize: number;
  readonly delay?: number;
  readonly stagger?: number;
  readonly align?: CSSProperties["textAlign"];
  readonly style?: CSSProperties;
};

// Word-by-word headline: each word rises, un-blurs and fades in on a spring.
// Highlighted words get the brand blue → purple gradient.
export const KineticText = ({ lines, highlight = [], fontSize, delay = 0, stagger = 6, align = "center", style }: Props) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  let index = 0;
  return (
    <div style={{ fontFamily: theme.font.display, fontSize, fontWeight: 500, lineHeight: 1.04, letterSpacing: "-0.035em", textAlign: align, color: theme.color.white, ...style }}>
      {lines.map((words, li) => (
        <div key={li} style={{ display: "block", whiteSpace: "nowrap" }}>
          {words.map((word, wi) => {
            const p = spring({ frame: frame - delay - index++ * stagger, fps, config: { damping: 18, stiffness: 120, mass: 0.8 } });
            const hl = highlight.includes(word);
            return (
              <span
                key={`${li}-${wi}`}
                style={{
                  display: "inline-block",
                  marginRight: "0.24em",
                  opacity: interpolate(p, [0, 0.6], [0, 1], { extrapolateRight: "clamp" }),
                  translate: `0px ${interpolate(p, [0, 1], [fontSize * 0.45, 0])}px`,
                  scale: String(interpolate(p, [0, 1], [0.92, 1])),
                  filter: `blur(${interpolate(p, [0, 1], [14, 0])}px)`,
                  ...(hl
                    ? { backgroundImage: theme.gradient.brand, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent", paddingBottom: "0.08em" }
                    : { backgroundImage: theme.gradient.headline, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent", paddingBottom: "0.08em" }),
                }}
              >
                {word}
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
};
