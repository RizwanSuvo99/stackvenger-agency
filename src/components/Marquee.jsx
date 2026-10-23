import { Glyph } from "./cmsIcons";

const items = [
  "From Idea to MVP in 8 Weeks",
  "Build Smarter. Launch Faster.",
  "Where AI Meets Human Expertise",
];

// separator = theme "star-2" asterisk glyph
const ThemeStar = () => <Glyph name="star_2" size={21} />;

export default function Marquee() {
  const loop = [...items, ...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((text, i) => (
          <span className="m-item" key={i}>
            {text}
            <ThemeStar />
          </span>
        ))}
      </div>
    </div>
  );
}
