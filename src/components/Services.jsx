import Reveal from "./Reveal";
import { Glyph } from "./cmsIcons";
import { ArrowRight } from "./icons";
import { Link, goTo, SERVICE_PATHS, CONTACTS_PATH } from "../router";

const services = [
  {
    title: "AI-Accelerated Product Development",
    text: "We combine advanced AI tools with expert engineering to take your concept from idea to MVP in record time — without sacrificing quality.",
    glyph: "icon_1",
  },
  {
    title: "Custom Software & App Development",
    text: "From mobile apps to web platforms, we build scalable, high-performance solutions tailored to your market and business needs.",
    glyph: "icon_2",
  },
  {
    title: "Prototyping & UX Design",
    text: "Rapidly test ideas with interactive AI-generated prototypes and data-backed design decisions that put users first.",
    glyph: "icon_3",
  },
  {
    title: "AI Integration & Automation",
    text: "Enhance your product with AI features — from predictive analytics to smart chatbots — to improve efficiency and user engagement.",
    glyph: "icon_4",
  },
  {
    title: "Cloud Architecture & DevOps",
    text: "Deploy with confidence. We design secure, scalable, and cost-efficient cloud infrastructure with automated testing and pipelines.",
    glyph: "icon_5",
  },
  {
    title: "Startup Growth Consulting",
    text: "We're more than a dev shop — we help you refine your business model, optimize workflows, and prepare for funding rounds.",
    glyph: "icon_6",
  },
];

export default function Services() {
  return (
    <section className="section" id="services" style={{ paddingTop: 195 }}>
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker-pill">Our Services</span>
          <h2 className="display-title gradient-text">
            Smart Solutions for
            <br />
            Fast-Growing Startups
          </h2>
          <p className="sub-line">Code, strategy, and AI in perfect sync.</p>
        </Reveal>

        <div className="service-grid">
          {services.map((s, i) => (
            <Reveal
              as="a"
              {...goTo(SERVICE_PATHS[i])}
              className="service-card"
              key={s.title}
              delay={(i % 3) * 90}
              style={{ backgroundImage: `url(/assets/images/71-home-1-background-${i + 6}.webp)` }}
            >
              <span className="service-icon">
                <Glyph name={s.glyph} size={28} />
              </span>
              <h4>{s.title}</h4>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="svc-more" delay={120}>
          <p className="ready-label">Ready to Innovate?</p>
          <Link className="btn" to={CONTACTS_PATH}>
            <ArrowRight size={18} className="btn-arrow" /> Start Your Project
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
