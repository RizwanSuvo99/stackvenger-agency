import Reveal from "./Reveal";
import { ArrowRight } from "./icons";
import { Link, TEAM_PATH } from "../router";

const people = [
  { name: "Ethan White", role: "AI Solutions Architect", img: "/assets/images/71-profile-1.webp" },
  { name: "Maya Brooks", role: "Lead UX/UI Designer", img: "/assets/images/71-profile-2.webp" },
  { name: "Ryan Chen", role: "Full-Stack Developer", img: "/assets/images/71-profile-3.webp" },
  { name: "Liam Carter", role: "Front-End Developer", img: "/assets/images/71-profile-4.webp" },
];

export default function Team() {
  return (
    <section
      className="section"
      id="team"
      style={{ paddingTop: 151, paddingBottom: 150 }}
    >
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker-pill">Meet the Team</span>
          <h2 className="display-title gradient-text">
            The Minds Behind the
            <br />
            Machines
          </h2>
          <p className="sub-line" style={{ maxWidth: 680 }}>
            Our team blends creativity, technical skill, and strategic thinking with AI
            innovation — so your product gets the best of both worlds.
          </p>
        </Reveal>
      </div>

      <div className="team-grid container-fluid">
        {people.map((m, i) => (
          <Reveal className="team-card" key={m.name} delay={i * 90}>
            <div className="team-photo">
              <img
                src={m.img}
                alt={`${m.name}, ${m.role}`}
                loading="lazy"
              />
            </div>
            <b>{m.name}</b>
            <span>{m.role}</span>
          </Reveal>
        ))}
      </div>

      <div className="container">
        <Reveal className="projects-more" delay={120} style={{ marginTop: 80 }}>
          <Link className="btn" to={TEAM_PATH}>
            <ArrowRight size={20} className="btn-arrow" /> Meet the Team
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
