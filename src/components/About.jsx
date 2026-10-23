import Reveal from "./Reveal";
import { Glyph } from "./cmsIcons";
import { ArrowRight } from "./icons";
import { Link, ABOUT_PATH } from "../router";

const features = [
  { glyph: "shape_2", title: "AI-Generated Prototypes", text: "Get wireframes and mockups in hours, not weeks." },
  { glyph: "shape_3", title: "Accelerated Development", text: "AI-assisted coding speeds up delivery." },
  { glyph: "shape_4", title: "Smart QA Testing", text: "AI-driven testing for fewer bugs and smoother launches." },
  { glyph: "shape_5", title: "Full Support", text: "A dedicated team to guide you every step of the way." },
];

export default function About() {
  return (
    <section className="section" id="about" style={{ paddingTop: 0 }}>
      <div className="container">
        <Reveal>
          <p className="statement">
            At StackVenger, we harness AI-assisted design, development, and
            testing to help startups move from idea to launch up to 3x faster
            than traditional agencies.
          </p>
        </Reveal>

        <Reveal delay={140} className="section-cta">
          <Link className="btn" to={ABOUT_PATH}>
            <ArrowRight size={20} className="btn-arrow" /> Find Out More
          </Link>
        </Reveal>
      </div>
      <div className="container-fluid">
        <div className="about-grid">
          <Reveal delay={160} y={44}>
            <div className="about-art">
              <img
                src="/assets/images/71-home-1-2.webp"
                alt="Iridescent abstract 3D artwork"
                loading="lazy"
              />
            </div>
          </Reveal>
          <div className="feat-cells">
            {features.map((f, i) => (
              <Reveal className="feat-cell" key={f.title} delay={i * 90}>
                <span className="feat-icon">
                  <Glyph name={f.glyph} size={44} />
                </span>
                <h4>{f.title}</h4>
                <p>{f.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
