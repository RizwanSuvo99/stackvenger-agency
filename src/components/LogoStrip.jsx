import Reveal from "./Reveal";

// reference carousel uses partners 1–5, laid out 5 → 1
const logos = [5, 4, 3, 2, 1].map((n) => `/assets/icons/71-partner-${n}.svg`);

export default function LogoStrip() {
  const loop = [...logos, ...logos, ...logos];
  return (
    <section className="trust">
      <div className="container">
        <Reveal>
          <p className="trust-note">More than 100+ companies trust us worldwide</p>
        </Reveal>
        <Reveal delay={120}>
          <div className="logo-row" aria-label="Partner logos">
            <div className="logo-strip">
              {loop.map((src, i) => (
                <span className="partner" key={`${src}-${i}`} aria-hidden={i >= logos.length}>
                  <img src={src} alt="" loading="lazy" />
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
