import Reveal from "./Reveal";
import { Star } from "./icons";

function QuoteCard({ t, delay }) {
  return (
    <Reveal className="testi-card" delay={delay}>
      <span className="stars-row" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, s) => (
          <Star size={21} key={s} />
        ))}
      </span>
      <p className="testi-quote">“{t.quote}”</p>
      {t.who ? <p className="testi-who">— {t.who}</p> : null}
    </Reveal>
  );
}

function MediaCard({ src, delay }) {
  return (
    <Reveal delay={delay}>
      <div className="testi-media">
        <img src={src} alt="Client video story" loading="lazy" />
        <button className="play-mini" aria-label="Play client story">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M8 5.5l11 6.5-11 6.5v-13z" />
          </svg>
        </button>
      </div>
    </Reveal>
  );
}

const col = {
  a1: {
    quote: "Softy Solutions took our rough concept and turned it into a polished SaaS product in just 8 weeks. The speed and quality blew us away!",
  },
  a2: {
    quote: "Softy Solutions turned our scattered idea into a polished MVP in under two months. The AI-driven workflow saved us months of trial and error.",
    who: "Sofia Patel, Co-Founder at EcoLink",
  },
  b1: {
    quote: "Their AI-powered workflow is a game-changer. We launched ahead of schedule and under budget.",
    who: "Lena Torres, CEO of BrightFinance",
  },
  c1: {
    quote: "They didn't just build our product — they challenged our thinking and made it better. Their AI prototypes nailed 90% of our vision on the first try.",
    who: "Daniel Wright, CEO of FlowPilot",
  },
};

export default function Testimonials() {
  return (
    <section className="section testi-sec" id="testimonials" style={{ paddingTop: 93 }}>
      <div className="art-wrap" aria-hidden="true">
        <img className="art-img" src="/assets/images/71-home-1-background-3.webp" alt="" />
      </div>
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker-pill">Testimonials</span>
          <h2 className="display-title gradient-text">
            Trusted by Innovators
            <br />
            Worldwide
          </h2>
        </Reveal>

        <div className="testi-cols">
          <div className="testi-col">
            <QuoteCard t={col.a1} delay={0} />
            <QuoteCard t={col.a2} delay={90} />
          </div>
          <div className="testi-col">
            <QuoteCard t={col.b1} delay={140} />
            <MediaCard src="/assets/images/71-home-1-8.webp" delay={200} />
          </div>
          <div className="testi-col">
            <MediaCard src="/assets/images/71-home-1-7.webp" delay={160} />
            <QuoteCard t={col.c1} delay={240} />
          </div>
        </div>
      </div>
    </section>
  );
}
