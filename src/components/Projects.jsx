import Reveal from "./Reveal";
import { ArrowRight } from "./icons";
import { Link, goTo, projectPath, PROJECTS_PATH } from "../router";
import { PROJECTS, coverSrc } from "../data/projects";

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
          {PROJECTS.slice(0, 4).map((p, i) => (
            <Reveal as="a" {...goTo(projectPath(p.slug))} className="project-card" key={p.slug} delay={(i % 2) * 110}>
              <span className="project-cover">
                <img src={coverSrc(p)} alt={`${p.title} preview`} loading="lazy" />
                <span className="project-chip">{p.chip}</span>
              </span>
              <h4>{p.title}</h4>
              <p>{p.lead}</p>
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
