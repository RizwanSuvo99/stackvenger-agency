import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import { Glyph } from "./cmsIcons";

const words = ["a SaaS platform", "a custom app"];

function Rotator() {
  const [i, setI] = useState(0);
  const [out, setOut] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setOut(true);
      setTimeout(() => {
        setI((v) => (v + 1) % words.length);
        setOut(false);
      }, 380);
    }, 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <span className={`rotator ${out ? "out" : ""}`}>
      <span className={`word ${out ? "out" : ""}`}>{words[i]}</span>
    </span>
  );
}

/* "3x Faster Delivery" illustration: speed gauge + traditional vs StackVenger timeline */
function SpeedGauge() {
  const ticks = Array.from({ length: 9 }, (_, i) => {
    const a = Math.PI - (i * Math.PI) / 8;
    const c = Math.cos(a), s = Math.sin(a);
    return <line key={i} x1={176 + 118 * c} y1={150 - 118 * s} x2={176 + 126 * c} y2={150 - 126 * s} />;
  });
  return (
    <svg className="why-speed" viewBox="0 0 352 310" role="img" aria-label="3x faster delivery: 4 weeks with StackVenger versus 12 weeks with a traditional agency">
      <defs>
        <linearGradient id="spd-arc" x1="71" y1="0" x2="281" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#008cff" />
          <stop offset="0.6" stopColor="#a900ff" />
          <stop offset="1" stopColor="#fffbbd" />
        </linearGradient>
        <linearGradient id="spd-text" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#ffffff" />
          <stop offset="1" stopColor="#fffbbd" />
        </linearGradient>
        <linearGradient id="spd-bar" x1="0" y1="0" x2="1" y2="0">
          <stop stopColor="#008cff" />
          <stop offset="1" stopColor="#a900ff" />
        </linearGradient>
      </defs>
      <rect x="0.5" y="0.5" width="351" height="309" rx="20" fill="#0c0b0b" stroke="#332c27" />
      <g stroke="#332c27" strokeWidth="2" strokeLinecap="round">{ticks}</g>
      <path d="M71 150A105 105 0 0 1 281 150" fill="none" stroke="#1d1a18" strokeWidth="14" strokeLinecap="round" />
      <path className="why-speed-arc" d="M71 150A105 105 0 0 1 281 150" fill="none" stroke="url(#spd-arc)" strokeWidth="14" strokeLinecap="round" pathLength="100" strokeDasharray="85 100" />
      <g className="why-speed-needle">
        <line x1="176" y1="150" x2="250" y2="112" stroke="#fffbbd" strokeWidth="4" strokeLinecap="round" />
        <circle cx="176" cy="150" r="9" fill="#fffbbd" />
        <circle cx="176" cy="150" r="3.5" fill="#0c0b0b" />
      </g>
      <text x="176" y="120" textAnchor="middle" fill="url(#spd-text)" fontFamily="Space Grotesk, sans-serif" fontSize="46" fontWeight="500" letterSpacing="-2">3x</text>
      <g fontFamily="Space Grotesk, sans-serif" fontSize="13" fontWeight="500">
        <text x="28" y="200" fill="#b6b6b3">Traditional agency</text>
        <text x="324" y="200" textAnchor="end" fill="#b6b6b3">12 weeks</text>
        <rect x="28" y="210" width="296" height="10" rx="5" fill="#332c27" />
        <text x="28" y="252" fill="#ffffff">StackVenger</text>
        <text x="324" y="252" textAnchor="end" fill="#fffbbd">4 weeks</text>
        <rect x="28" y="262" width="296" height="10" rx="5" fill="#1d1a18" />
        <rect className="why-speed-bar" x="28" y="262" width="99" height="10" rx="5" fill="url(#spd-bar)" />
      </g>
    </svg>
  );
}

export default function WhyUs() {
  return (
    <section className="section" id="why" style={{ paddingTop: 150 }}>
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker-pill">Why Choose Us</span>
          <h2 className="display-title gradient-text">
            AI + Human Expertise =
            <br />
            Your Competitive Edge
          </h2>
        </Reveal>

        <div className="why-row">
          <Reveal className="why-card why-panel why-s1" delay={0}>
            <img
              src="/assets/images/71-home-1-3.webp"
              alt="StackVenger team meeting around a laptop"
              loading="lazy"
            />
            <h4>Expert + AI Combo</h4>
            <p className="why-sub">Innovation with human insight</p>
          </Reveal>

          <Reveal className="why-card why-big" style={{ backgroundImage: "url(/assets/images/71-home-1-background-4.webp)" }} delay={90}>
            <h4>Lower Development Costs</h4>
            <p className="why-sub">Save up to 40% without sacrificing quality</p>
            <img
              className="flush right"
              src="/assets/images/why-lower-costs.webp"
              alt="Capital Ledger treasury dashboard interface"
              loading="lazy"
            />
          </Reveal>
        </div>

        <div className="why-row rev">
          <Reveal className="why-card why-big" style={{ backgroundImage: "url(/assets/images/71-home-1-background-5.webp)" }} delay={140}>
            <h4>Scalable Architecture</h4>
            <p className="why-sub">Always ready for growth and pivots</p>
            <img
              className="flush left"
              src="/assets/images/71-home-1-5.webp"
              alt="Finance analytics dashboards collage"
              loading="lazy"
            />
          </Reveal>

          <Reveal className="why-card why-panel why-stat" delay={200}>
            <SpeedGauge />
            <h4>3x Faster Delivery</h4>
            <p className="why-sub">Agile sprints powered by AI acceleration</p>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="fancy-wrap">
            <h3 className="fancy-line">
              <Glyph name="shape_1" size={48} className="fancy-ico" />
              StackVenger can help you with <Rotator />
            </h3>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
