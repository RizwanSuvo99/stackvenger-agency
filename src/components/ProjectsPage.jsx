import { PageHero } from "./PageParts";
import { Link, projectPath } from "../router";
import { PROJECTS, coverSrc } from "../data/projects";

export default function ProjectsPage() {
  return (
    <div className="pg-page">
      <PageHero
        tall
        title="Our Projects"
        bg="71-background-5-1.webp"
        pos="50% 0%"
        lead="We build bold ideas, powered by AI and human creativity, that push boundaries and spark growth."
      />
      <section className="pg-projs">
        {PROJECTS.map((p) => (
          <article className="pg-pcard" key={p.slug}>
            <Link className="pg-pcover" to={projectPath(p.slug)}>
              <img src={coverSrc(p)} alt={`${p.title} preview`} loading="lazy" />
              <span className="pg-chip">{p.chip}</span>
            </Link>
            <h4><Link to={projectPath(p.slug)}>{p.title}</Link></h4>
            <p>{p.lead}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
