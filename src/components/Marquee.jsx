
const items = [
  "From Idea to MVP in 8 Weeks",
  "Build Smarter. Launch Faster.",
  "Where AI Meets Human Expertise",
];

function ThemeStar() {
  return (
    <svg width="26" height="24" viewBox="0 0 22 20" fill="currentColor" aria-hidden="true">
      <path d="M11 0L14.2328 6.55041L21.4616 7.60081L16.2308 12.6996L17.4656 19.8992L11 16.5L4.53436 19.8992L5.76919 12.6996L0.538379 7.60081L7.76718 6.55041L11 0Z" />
    </svg>
  );
}

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
