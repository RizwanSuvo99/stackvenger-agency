import { ArrowRight } from "./icons";
import { PageHero, FormSplit } from "./PageParts";
import { scrollToSection } from "../router";
import { TEAM } from "../data/team";

// no profile pages: a member card jumps to the "Talk to Our Team" form below
const toForm = (e) => { e.preventDefault(); scrollToSection("#talk"); };

export default function TeamPage() {
  return (
    <div className="pg-page">
      <PageHero title="Our Team" bg="71-background-5.webp" pos="50% 100%" crumb="Our Team" />
      <section className="pg-team">
        {TEAM.map(({ name, role, img }) => (
          <div className="pg-tcard" key={name}>
            <a className="pg-tphoto" href="#talk" onClick={toForm} aria-label={`Talk to ${name}`}>
              <img src={img} alt={`${name}, ${role}`} loading="lazy" />
              <span className="pg-tgo" aria-hidden="true">
                <ArrowRight size={20} />
              </span>
            </a>
            <a className="pg-tname" href="#talk" onClick={toForm}>{name}</a>
            <span className="pg-trole">{role}</span>
          </div>
        ))}
      </section>
      <FormSplit id="talk" img="team-group.webp" title="Talk to Our Team and Unlock New Opportunities" wide />
    </div>
  );
}
