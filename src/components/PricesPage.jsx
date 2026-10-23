import { useState } from "react";
import { ArrowRight, Check, ChevronRight } from "./icons";
import { PageHero } from "./PageParts";
import { Link, PRICES_PATH, CONTACTS_PATH } from "../router";

const plans = [
  ["For early-stage products", "MVP Launch", "$3,500/project", ["AI-assisted design & development", "1-month launch timeline", "Email & chat support"]],
  ["For scaling startups", "Growth Build", "$7,500/project", ["Full-stack development", "AI-accelerated QA & integrations", "Weekly strategy calls"]],
  ["For complex or high-scale projects", "Custom Enterprise", "Tailored Quote", ["Dedicated AI + human team", "Advanced architecture planning", "SLA-backed performance"], true],
];

const faqs = [
  ["What makes Softy Solutions different from any other digital agency?", "We don’t just “run campaigns.” We fuse AI, design, and strategy to move fast, break the ordinary, and scale what truly works. Our approach combines innovation with practical results, ensuring that every project delivers measurable impact and long-term value."],
  ["Do you only work with startups?", "Not at all. While we love partnering with startups to bring fresh ideas to life, we also work with established businesses, nonprofits, and enterprises. Our solutions are tailored to fit organizations of all sizes and stages."],
  ["How fast can you deliver results?", "It depends on the scope of the project, but we focus on speed without sacrificing quality. Some results can be seen in a matter of weeks, while larger strategies are designed for sustainable, long-term growth."],
  ["What services do you actually provide?", "We specialize in AI-driven solutions, UX/UI design, full-stack development, digital marketing, and growth strategy. From building digital products to scaling campaigns, we cover the full spectrum of innovation and execution."],
  ["Do you offer custom solutions or fixed packages?", "Both. We provide flexible fixed packages for those who need clarity and speed, as well as fully customized solutions for clients with unique needs. Our goal is to meet you where you are and help you grow effectively."],
];

/* plan cards, shared with the home page pricing section */
export function PlanCards({ className = "" }) {
  return (
    <section className={`pr-plans ${className}`.trim()}>
      {plans.map(([tag, name, price, items, featured]) => (
        <div className={`pr-card${featured ? " pr-card--hot" : ""}`} key={name}>
          <span className="pr-tag">{tag}</span>
          <h4>{name}</h4>
          <p className="pr-price">{price}</p>
          <ul>
            {items.map((it) => (
              <li key={it}>
                <Check size={13} />
                {it}
              </li>
            ))}
          </ul>
          <Link className={featured ? "btn pr-btn" : "pg-outline pr-btn"} to={PRICES_PATH}>
            <ArrowRight size={12} className="btn-arrow" /> Get Started
          </Link>
        </div>
      ))}
    </section>
  );
}

export default function PricesPage() {
  const [open, setOpen] = useState(0);

  return (
    <div className="pg-page">
      <PageHero
        tall
        title="Plans Overview"
        bg="71-background-5.webp"
        pos="50% 0%"
        lead="We build bold ideas, powered by AI and human creativity, that push boundaries and spark growth."
      />

      <PlanCards />

      <section className="pr-faq">
        <span className="ab-pill">FAQ</span>
        <h2 className="gradient-text grad0">Explore Our FAQ to Find the Answers You Need!</h2>
        <div className="pr-acc">
          {faqs.map(([q, a], i) => (
            <div className={`pr-item${open === i ? " is-open" : ""}`} key={q}>
              <button
                className="pr-q"
                type="button"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                <span>{q}</span>
                <span className="pr-ico" aria-hidden="true">
                  <ChevronRight size={13} />
                </span>
              </button>
              <div className="pr-a">
                <div>
                  <p>{a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pr-cta">
        <div className="pr-cta-text">
          <span className="ab-pill">Create Your Project</span>
          <h2 className="gradient-text grad0">Let’s Bring Your Boldest Ideas to Life!</h2>
          <p>
            With Softy Solutions, you don’t just build faster — you build smarter. Let’s make
            your launch unforgettable.
          </p>
          <Link className="btn" to={CONTACTS_PATH}>
            <ArrowRight size={12} className="btn-arrow" /> Get Started Now
          </Link>
        </div>
        <img src="/assets/images/71-prices.webp" alt="" loading="lazy" width="614" height="700" />
      </section>
    </div>
  );
}
