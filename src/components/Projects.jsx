import Reveal from "./Reveal";
import { ArrowRight } from "./icons";
import { Link, goTo, projectPath, PROJECTS_PATH } from "../router";
import { PROJECTS } from "../data/projects";

const projects = [
  {
    name: "NovaHire – AI Recruitment Platform",
    desc: "Automated candidate screening, matching, and outreach using machine learning.",
    chip: "Technology",
    img: "/assets/images/71-project-1.webp",
  },
  {
    name: "RetailSense – Smart Store Analytics",
    desc: "AI-powered shopper insights and predictive inventory management for global retail chains.",
    chip: "Retail",
    img: "/assets/images/71-project-2.webp",
  },
  {
    name: "FinVision – Predictive Finance Dashboard",
    desc: "Real-time forecasting and personalized investment insights using data modeling.",
    chip: "Technology",
    img: "/assets/images/71-project-3.webp",
  },
  {
    name: "MedAssist – Virtual Health Companion",
    desc: "AI chatbot and patient tracking platform, improving appointment adherence by 35%.",
    chip: "Healthcare",
    img: "/assets/images/71-project-4.webp",
  },
];

export default function Projects() {
  return (
    <section className="section projects-sec" id="projects" style={{ paddingTop: 152 }}>
      <img className="section-art" src="/assets/images/71-projects-background-1.webp" alt="" aria-hidden="true" />
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker-pill">Our Projects</span>
          <h2 className="display-title gradient-text">
            Where Ideas Become
            <br />
            Products
          </h2>
          <p className="sub-line">See how we turn ideas into high-performance digital products.</p>
        </Reveal>

        <div className="project-grid">
          {projects.map((p, i) => (
            <Reveal as="a" {...goTo(projectPath(PROJECTS[i].slug))} className="project-card" key={p.name} delay={(i % 2) * 110}>
              <span className="project-cover">
                <img src={p.img} alt={`${p.name} preview`} loading="lazy" />
                <span className="project-chip">{p.chip}</span>
              </span>
              <h4>{p.name}</h4>
              <p>{p.desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="projects-more" delay={120}>
          <Link className="btn" to={PROJECTS_PATH}>
            <ArrowRight size={17} className="btn-arrow" /> See More Projects
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
