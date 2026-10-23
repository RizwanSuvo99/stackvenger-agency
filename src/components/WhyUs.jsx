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
              alt="Softy team meeting around a laptop"
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
              src="/assets/images/71-home-1-4.webp"
              alt="WorkOS productivity app interface"
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
            <img
              src="/assets/images/71-home-1-6-tablet.webp"
              alt="Launch metrics dashboard"
              loading="lazy"
            />
            <h4>3x Faster Delivery</h4>
            <p className="why-sub">Agile sprints powered by AI acceleration</p>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="fancy-wrap">
            <h3 className="fancy-line">
              <Glyph name="shape_1" size={48} className="fancy-ico" />
              Softy Solutions can help you with <Rotator />
            </h3>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
