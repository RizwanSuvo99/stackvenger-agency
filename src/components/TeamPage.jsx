import { ArrowRight } from "./icons";
import { PageHero, FormSplit } from "./PageParts";
import { scrollToSection } from "../router";

const team = [
  ["Sara Thompson", "Startup Growth Strategist", 6],
  ["Daniel Foster", "Back-End Engineer", 5],
  ["Liam Carter", "Front-End Developer", 4],
  ["Ryan Chen", "Full-Stack Developer", 3],
  ["Maya Brooks", "Lead UX/UI Designer", 2],
  ["Ethan White", "AI Solutions Architect", 1],
];

// no profile pages: a member card jumps to the "Talk to Our Team" form below
const toForm = (e) => { e.preventDefault(); scrollToSection("#talk"); };

export default function TeamPage() {
  return (
    <div className="pg-page">
      <PageHero title="Our Team" bg="71-background-5.webp" pos="50% 100%" crumb="Our Team" />
      <section className="pg-team">
        {team.map(([name, role, n]) => (
          <div className="pg-tcard" key={name}>
            <a className="pg-tphoto" href="#talk" onClick={toForm} aria-label={`Talk to ${name}`}>
              <img src={`/assets/images/71-profile-${n}.webp`} alt={`${name}, ${role}`} loading="lazy" />
              <span className="pg-tgo" aria-hidden="true">
                <ArrowRight size={20} />
              </span>
            </a>
            <a className="pg-tname" href="#talk" onClick={toForm}>{name}</a>
            <span className="pg-trole">{role}</span>
          </div>
        ))}
      </section>
      <FormSplit id="talk" img="71-profiles-1.webp" title="Talk to Our Team and Unlock New Opportunities" />
    </div>
  );
}
