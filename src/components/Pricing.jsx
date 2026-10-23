import Reveal from "./Reveal";
import { PlanCards } from "./PricesPage";

export default function Pricing() {
  return (
    <section className="section" id="pricing" style={{ paddingTop: 150, paddingBottom: 145 }}>
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker-pill">Plans Overview</span>
          <h2 className="display-title gradient-text">Startup-Friendly Pricing</h2>
        </Reveal>
        <Reveal delay={110}>
          <PlanCards className="pricing-grid" />
        </Reveal>
      </div>
    </section>
  );
}
