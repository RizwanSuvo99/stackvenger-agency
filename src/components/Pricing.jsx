import Reveal from "./Reveal";
import { ArrowRight, Check } from "./icons";

const plans = [
  {
    chip: "For early-stage products",
    chipKind: "",
    name: "MVP Launch",
    price: "$3,500/project",
    items: ["AI-assisted design & development", "1-month launch timeline", "Email & chat support"],
    grad: false,
  },
  {
    chip: "For scaling startups",
    chipKind: "",
    name: "Growth Build",
    price: "$7,500/project",
    items: ["Full-stack development", "AI-accelerated QA & integrations", "Weekly strategy calls"],
    grad: false,
  },
  {
    chip: "For complex or high-scale projects",
    chipKind: "grad",
    name: "Custom Enterprise",
    price: "Tailored Quote",
    items: ["Dedicated AI + human team", "Advanced architecture planning", "SLA-backed performance"],
    grad: true,
  },
];

export default function Pricing({ onOpenContact }) {
  return (
    <section className="section" id="pricing" style={{ paddingTop: 168 }}>
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker-pill">Plans Overview</span>
          <h2 className="display-title gradient-text">Startup-Friendly Pricing</h2>
        </Reveal>

        <div className="pricing-grid">
          {plans.map((p, i) => (
            <Reveal className={`price-card ${p.grad ? "pop" : ""}`} key={p.name} delay={i * 110}>
              <span className={`price-chip ${p.chipKind}`}>{p.chip}</span>
              <h3>{p.name}</h3>
              <p className="price-amount">{p.price}</p>
              <hr className="price-rule" />
              <ul className="price-list">
                {p.items.map((item) => (
                  <li key={item}>
                    <Check size={18} />
                    {item}
                  </li>
                ))}
              </ul>
              <button className={`btn ${p.grad ? "" : "btn-outline"}`} onClick={onOpenContact}>
                <ArrowRight size={20} className="btn-arrow" /> Get Started
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
