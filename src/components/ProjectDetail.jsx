import { useEffect, useState } from "react";
import { ArrowRight, ChevronRight, Facebook, Instagram, Star, XTwitter } from "./icons";
import { PageFooter, Na } from "./ServiceDetail";
import { PROJECTS, coverSrc, galleryOf, bodyOf } from "../data/projects";
import { Link, projectPath } from "../router";
import { SHOW_SOCIAL_LINKS, SHOW_TESTIMONIALS } from "../config";

const REVIEWS = [
  ["StackVenger took our rough concept and turned it into a polished SaaS product in just 8 weeks. The speed and quality blew us away!", "Alex Carter, Founder of Taskify", 5],
  ["Their AI-powered workflow is a game-changer. We launched ahead of schedule and under budget.", "Lena Torres, CEO of BrightFinance", 4],
  ["StackVenger turned our scattered idea into a polished MVP in under two months. The AI-driven workflow saved us months of trial and error.", "Sofia Patel, Co-Founder at EcoLink", 5],
  ["They didn’t just build our product — they challenged our thinking and made it better. Their AI prototypes nailed 90% of our vision on the first try.", "Daniel Wright, CEO of FlowPilot", 5],
];

const Pinterest = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 496 512" fill="currentColor" aria-hidden="true">
    <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z" />
  </svg>
);

/* index-based carousel: `index` is the first visible slide */
function useCarousel(count, autoplay) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (!autoplay) return undefined;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), autoplay);
    return () => clearInterval(t);
  }, [count, autoplay]);
  return [index, setIndex];
}

function Gallery({ imgs, title }) {
  const [i, setI] = useCarousel(imgs.length);
  const go = (d) => setI((i + d + imgs.length) % imgs.length);
  return (
    <div className="pj-gallery">
      <div className="pj-gal-view">
        <div className="pj-gal-track" style={{ transform: `translateX(-${i * 100}%)` }}>
          {imgs.map((src, k) => (
            <img key={src} src={src} alt={`${title} screenshot ${k + 1}`} loading="lazy" />
          ))}
        </div>
        <button type="button" className="pj-gal-btn prev" aria-label="Previous image" onClick={() => go(-1)}>
          <ArrowRight size={14} />
        </button>
        <button type="button" className="pj-gal-btn next" aria-label="Next image" onClick={() => go(1)}>
          <ArrowRight size={14} />
        </button>
      </div>
      <div className="pj-gal-dots">
        {imgs.map((n, k) => (
          <button key={n} type="button" className={k === i ? "is-on" : ""} aria-label={`Image ${k + 1}`} onClick={() => setI(k)} />
        ))}
      </div>
    </div>
  );
}

function Reviews() {
  const [i, setI] = useCarousel(REVIEWS.length, 5000);
  // loop: render the list twice so the 3 visible cards can wrap around
  const loop = [...REVIEWS, ...REVIEWS];
  return (
    <div className="pj-revs">
      <div className="pj-rev-view">
        <div className="pj-rev-track" style={{ "--i": i }}>
          {loop.map(([quote, who, rating], k) => (
            <article className="pj-rev" key={k} aria-hidden={k < i || k >= i + 3}>
              <div className="pj-stars" role="img" aria-label={`${rating} out of 5 stars`}>
                {Array.from({ length: 5 }, (_, s) => (
                  <Star size={20} key={s} className={s < rating ? "on" : ""} />
                ))}
              </div>
              <p>“{quote}”</p>
              <span>— {who}</span>
            </article>
          ))}
        </div>
      </div>
      <div className="pj-rev-dots">
        {REVIEWS.map((r, k) => (
          <button key={r[1]} type="button" className={k === i ? "is-on" : ""} aria-label={`Review ${k + 1}`} onClick={() => setI(k)} />
        ))}
      </div>
    </div>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`pj-faq-item${open ? " is-open" : ""}`}>
      <button type="button" className="pj-faq-q" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <span className="pj-faq-ico" aria-hidden="true">
          <ChevronRight size={12} />
        </span>
      </button>
      <div className="pj-faq-a">
        <div>
          <p>{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function ProjectDetail({ slug }) {
  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  const p = PROJECTS[idx];
  const n = PROJECTS.length;
  const [name, role, avatar] = p.authorOverride;
  const body = bodyOf(p);
  // reference order: left arrow → next project in the grid, right arrow → previous one
  const left = PROJECTS[(idx + 1) % n];
  const right = PROJECTS[(idx - 1 + n) % n];
  const related = PROJECTS.filter((x) => x.slug !== slug).slice(0, 3);

  return (
    <div className="pg-page pj-page">
      <section className="pj-hero">
        <div className="pj-hero-in">
          <div className="pj-hero-text">
            <span className="pj-chip">{p.chip}</span>
            <h1>{p.title}</h1>
            <p>{p.lead}</p>
          </div>
          <div className="pj-hero-img" role="img" aria-label={`${p.title} preview`} style={{ backgroundImage: `url(${coverSrc(p)})`, backgroundPosition: p.heroPos }} />
        </div>
      </section>

      <section className="pj-body">
        <div className="pj-main">
          <h3>Project Description</h3>
          {body.slice(0, 3).map((t, k) => <p key={k}>{t}</p>)}
          <Gallery imgs={galleryOf(p)} title={p.title} />
          {body.slice(3).map((t, k) => <p key={k}>{t}</p>)}
        </div>
        <aside className="pj-side">
          <h4>Start Date / End Date</h4>
          {(p.when || ["Start: Monday, 12:30pm – 3:00pm", "End: Tuesday, 9:00am – 11:00am"]).map((w) => (
            <p className="pj-when" key={w}>{w}</p>
          ))}
          <span className="pj-status">{p.status || "Ongoing"}</span>
          <h4 className="pj-side-h">Project Author</h4>
          <div className="pj-author">
            <img className={avatar.endsWith(".svg") ? "is-mark" : undefined} src={avatar} alt={name} width="90" height="90" loading="lazy" />
            <div>
              <b>{name}</b>
              <p>{role}</p>
            </div>
          </div>
          {SHOW_SOCIAL_LINKS && (
            <>
              <h4 className="pj-side-h">Contact Links</h4>
              <div className="pj-socials">
                <a href="https://facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={16} /></a>
                <a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="X (Twitter)"><XTwitter size={16} /></a>
                <a href="https://pinterest.com/" target="_blank" rel="noreferrer" aria-label="Pinterest"><Pinterest /></a>
                <a href="https://instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={16} /></a>
              </div>
            </>
          )}
        </aside>
      </section>

      <section className="pj-why">
        <div className="pj-why-in">
          <div className="pj-why-head">
            <span className="ab-pill">Find Out What to Expect</span>
            <h2>Why This Project Matters</h2>
          </div>
          <div className="pj-faq">
            {p.faq.map(([q, a]) => <FaqItem key={q} q={q} a={a} />)}
          </div>
        </div>
      </section>

      {SHOW_TESTIMONIALS && (
        <section className="pj-testi">
          <h2>Testimonials</h2>
          <p className="pj-sub">Featured Endorsements &amp; Contributor Spotlights</p>
          <Reviews />
        </section>
      )}

      <section className="pj-related">
        <h2>Related Projects</h2>
        <div className="pg-projs pj-rel-grid">
          {related.map((r) => (
            <article className="pg-pcard" key={r.slug}>
              <Link className="pg-pcover" to={projectPath(r.slug)}>
                <img src={coverSrc(r)} alt={`${r.title} preview`} loading="lazy" />
                <span className="pg-chip">{r.chip}</span>
              </Link>
              <h4><Link to={projectPath(r.slug)}>{r.title}</Link></h4>
              <p>{r.lead}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="svc-pn">
        <div className="svc-pn-in">
          <div className="svc-pn-half">
            <Na to={projectPath(left.slug)} className="svc-pn-link">
              <span className="svc-pn-circle dir-prev">
                <ArrowRight size={18} className="svc-pn-arrow" />
              </span>
              <span className="svc-pn-title">{left.title}</span>
            </Na>
          </div>
          <div className="svc-pn-half">
            <Na to={projectPath(right.slug)} className="svc-pn-link">
              <span className="svc-pn-title">{right.title}</span>
              <span className="svc-pn-circle">
                <ArrowRight size={18} className="svc-pn-arrow" />
              </span>
            </Na>
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
}
