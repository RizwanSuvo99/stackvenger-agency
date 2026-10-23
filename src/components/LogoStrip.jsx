import Reveal from "./Reveal";

const logos = Array.from({ length: 8 }, (_, i) => `/assets/icons/71-partner-${i + 1}.svg`);

export default function LogoStrip() {
  const loop = [...logos, ...logos];
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
