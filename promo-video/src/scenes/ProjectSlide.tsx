import { AbsoluteFill, Easing, Img, interpolate, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import type { FeaturedProject } from "../content";
import { featured } from "../content";
import { theme } from "../theme";
import { BrowserFrame, PhoneFrame } from "../components/Devices";
import { Chip } from "../components/Chip";
import { clamp, useEnter } from "../components/anim";

const scrollEase = { ...clamp, easing: Easing.bezier(0.45, 0, 0.2, 1) };

// Browser mockup: stacked page sections scroll by, a detail screen floats in front.
const BrowserShot = ({ p }: { readonly p: FeaturedProject }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const enter = useEnter(4);
  const detail = useEnter(30);
  const W = 1040;
  const H = 650;
  const viewport = H - 50;
  const sectionH = Math.round(W / 1.51);
  const sections = p.sections ?? 1;
  const travel = Math.max(0, sections * sectionH - viewport);
  return (
    <div style={{ position: "absolute", left: 780, top: 205, opacity: enter, translate: `${interpolate(enter, [0, 1], [140, 0])}px 0px`, scale: String(interpolate(enter, [0, 1], [0.95, 1])) }}>
      <BrowserFrame width={W} height={H} domain={p.domain}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            translate: `0px ${travel ? interpolate(frame, [22, durationInFrames - 12], [0, -travel], scrollEase) : 0}px`,
            scale: travel ? "1" : String(interpolate(frame, [10, durationInFrames], [1, 1.1], clamp)),
            transformOrigin: "50% 30%",
          }}
        >
          {Array.from({ length: sections }, (_, i) => (
            <Img key={i} src={staticFile(`projects/${p.key}/${i + 1}.webp`)} style={{ display: "block", width: W, height: sectionH, objectFit: "cover", objectPosition: "top" }} />
          ))}
        </div>
      </BrowserFrame>
      {p.detail ? (
        <div
          style={{
            position: "absolute",
            left: 36,
            top: 330,
            width: 420,
            borderRadius: theme.radius.md,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.18)",
            boxShadow: "0 30px 80px rgba(0,0,0,0.7)",
            opacity: detail,
            translate: `0px ${interpolate(frame, [30, durationInFrames], [60, -30], clamp) + interpolate(detail, [0, 1], [50, 0])}px`,
          }}
        >
          <Img src={staticFile(`projects/${p.key}/detail.webp`)} style={{ display: "block", width: 420, height: 278, objectFit: "cover", objectPosition: "top" }} />
        </div>
      ) : null}
    </div>
  );
};

// One phone screen whose tall capture scrolls inside the frame.
const PhoneScreen = ({ src, width, ratio, from, to }: { readonly src: string; readonly width: number; readonly ratio: number; readonly from: number; readonly to: number }) => {
  const frame = useCurrentFrame();
  const inner = width - 2 * Math.round(width * 0.04);
  const viewport = Math.round(width * 2.06) - 2 * Math.round(width * 0.04);
  const travel = Math.min(Math.max(0, inner * ratio - viewport), viewport * 1.6);
  return (
    <Img
      src={src}
      style={{ position: "absolute", top: 0, left: 0, width: inner, height: inner * ratio, translate: `0px ${interpolate(frame, [from, to], [0, -travel], scrollEase)}px` }}
    />
  );
};

// Phone mockups: the main screen scrolls, a second screen sits behind with parallax.
const PhoneShot = ({ p }: { readonly p: FeaturedProject }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const main = useEnter(4);
  const second = useEnter(16);
  return (
    <>
      <div style={{ position: "absolute", left: 930, top: 210, opacity: second, rotate: "-6deg", translate: `${interpolate(second, [0, 1], [120, 0])}px ${interpolate(frame, [0, durationInFrames], [30, -20])}px` }}>
        <PhoneFrame width={330}>
          <PhoneScreen src={staticFile(`projects/${p.key}/second.webp`)} width={330} ratio={p.secondRatio ?? 2} from={30} to={durationInFrames} />
        </PhoneFrame>
      </div>
      <div style={{ position: "absolute", left: 1280, top: 130, opacity: main, translate: `${interpolate(main, [0, 1], [160, 0])}px ${interpolate(frame, [0, durationInFrames], [10, -10])}px` }}>
        <PhoneFrame width={390}>
          <PhoneScreen src={staticFile(`projects/${p.key}/main.webp`)} width={390} ratio={p.mainRatio ?? 2} from={22} to={durationInFrames - 8} />
        </PhoneFrame>
      </div>
    </>
  );
};

// One featured project: index, industry, name, one-liner and tech chips on the left; device on the right.
export const ProjectSlide = ({ project, index }: { readonly project: FeaturedProject; readonly index: number }) => {
  const label = useEnter(2);
  const name = useEnter(8);
  const line = useEnter(15);
  return (
    <AbsoluteFill>
      <div
        style={{
          position: "absolute",
          width: 1200,
          height: 1000,
          left: project.device === "phone" ? 700 : 640,
          top: 40,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${project.accent}38 0%, transparent 62%)`,
          filter: "blur(30px)",
          opacity: label,
        }}
      />
      <div style={{ position: "absolute", left: theme.safe.x, top: 230, width: 640 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, opacity: label, translate: `0px ${interpolate(label, [0, 1], [20, 0])}px` }}>
          <span style={{ fontFamily: theme.font.body, fontWeight: 700, fontSize: 28, letterSpacing: "0.08em", color: theme.color.muted }}>
            FEATURED WORK · {String(index + 1).padStart(2, "0")}/{String(featured.length).padStart(2, "0")}
          </span>
        </div>
        <div style={{ marginTop: 26, opacity: label }}>
          <Chip accent={project.accent} style={{ fontSize: 28, padding: "10px 24px" }}>{project.industry}</Chip>
        </div>
        <div
          style={{
            marginTop: 30,
            fontFamily: theme.font.display,
            fontWeight: 600,
            fontSize: project.name.length > 11 ? 96 : 112,
            lineHeight: 1,
            letterSpacing: "-0.04em",
            color: theme.color.white,
            whiteSpace: "nowrap",
            opacity: name,
            translate: `0px ${interpolate(name, [0, 1], [50, 0])}px`,
            filter: `blur(${interpolate(name, [0, 1], [10, 0])}px)`,
          }}
        >
          {project.name}
        </div>
        <div style={{ marginTop: 28, fontFamily: theme.font.body, fontWeight: 500, fontSize: 46, lineHeight: 1.25, color: theme.color.text, opacity: line, translate: `0px ${interpolate(line, [0, 1], [30, 0])}px` }}>
          {project.line}
        </div>
        <div style={{ marginTop: 44, display: "flex", flexWrap: "wrap", gap: 14 }}>
          {project.chips.map((c, i) => (
            <TechChip key={c} delay={24 + i * 4}>
              {c}
            </TechChip>
          ))}
        </div>
      </div>
      {project.device === "browser" ? <BrowserShot p={project} /> : <PhoneShot p={project} />}
    </AbsoluteFill>
  );
};

const TechChip = ({ delay, children }: { readonly delay: number; readonly children: string }) => {
  const p = useEnter(delay, theme.spring.pop);
  return <Chip style={{ fontSize: 28, padding: "10px 22px", opacity: interpolate(p, [0, 0.5], [0, 1], clamp), scale: String(interpolate(p, [0, 1], [0.7, 1])) }}>{children}</Chip>;
};
