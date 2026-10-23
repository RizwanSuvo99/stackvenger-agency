import { ArrowRight, Star } from "./icons";

const team = [
  ["Ethan White", "AI Solutions Architect", 1],
  ["Maya Brooks", "Lead UX/UI Designer", 2],
  ["Ryan Chen", "Full-Stack Developer", 3],
  ["Liam Carter", "Front-End Developer", 4],
  ["Daniel Foster", "Back-End Engineer", 5],
];

const projects = [
  ["NovaHire – AI Recruitment Platform", "Technology", "Automated candidate screening, matching, and outreach using machine learning.", 1],
  ["RetailSense – Smart Store Analytics", "Retail", "AI-powered shopper insights and predictive inventory management for global retail chains.", 2],
  ["FinVision – Predictive Finance Dashboard", "Technology", "Real-time forecasting and personalized investment insights using data modeling.", 3],
  ["MedAssist – Virtual Health Companion", "Healthcare", "AI chatbot and patient tracking platform, improving appointment adherence by 35%.", 4],
  ["EduMind – Personalized Learning Hub", "AI Learning", "EduMind leverages AI to create tailored learning paths for students, offering real-time progress tracking.", 5],
];

const reviews = [
  ["We were impressed by their innovative approach to IoT connectivity. The platform they built has allowed us to connect devices across multiple regions with zero downtime.", 4, "Nina W.", "Operations Lead at ConnectIQ"],
  ["The software solutions they developed for us have completely streamlined our workflow. Their team understood the complexity of our electronics systems and delivered a seamless integration.", 5, "Talia M.", "CTO at Nexon Electronics"],
  ["We needed a custom platform for device monitoring, and they built exactly what we envisioned. The reliability and performance of their software has greatly improved our efficiency.", 4, "André R.", "Product Manager at VoltTech"],
  ["Their engineers are not only skilled but also very responsive. From concept to deployment, they provided outstanding support and helped us scale our smart devices faster.", 5, "Jessie L.", "CEO at CircuitWave"],
  ["The collaboration was smooth and transparent. They delivered high-quality embedded solutions that perfectly matched our hardware requirements. Highly recommended for any tech-driven business.", 5, "Luis F.", "R&D Director at MicroLogic Systems"],
];

const dead = (e) => e.preventDefault();

export default function AboutDetail() {
  return (
    <div className="ab-page">
      <section className="ab-hero">
        <span className="ab-pill">About Us</span>
        <h1>
          <span className="gradient-text">Why we are the best</span>
        </h1>
        <p>
          By combining innovation with technical expertise, we help businesses optimize
          performance, connect systems, and bring new ideas to life.
        </p>
      </section>

      <section className="ab-story">
        <div className="ab-story-in">
          <div className="ab-story-text">
            <h2>Our Story</h2>
            <p>
              We are a team of passionate innovators dedicated to building modern solutions
              for businesses that want to grow, adapt, and thrive. Our mission is to combine
              creativity, technology, and strategy to deliver meaningful results for our
              clients. With a focus on collaboration and transparency, we bring fresh ideas
              and practical expertise to every project. From concept to execution, we are
              committed to excellence, ensuring that each solution is tailored to meet the
              unique needs of those we serve. Together, we transform challenges into
              opportunities and visions into reality.
            </p>
          </div>
          <div className="ab-story-media" role="img" aria-label="Our team at work" />
        </div>
      </section>

      <section className="ab-experts">
          <span className="ab-pill">Meet Our Experts</span>
          <h2 className="ab-h2c gradient-text grad0">Meet the Professional Team</h2>
          <div className="ab-team">
            {team.map(([name, role, n]) => (
              <div className="ab-tcard" key={name}>
                <img src={`/assets/images/71-profile-${n}.webp`} alt={`${name}, ${role}`} loading="lazy" />
                <a href="#" onClick={dead}>{name}</a>
                <span>{role}</span>
              </div>
            ))}
          </div>
          <div className="ab-cta-row">
            <a className="btn" href="#team" onClick={dead}>
              <ArrowRight size={12} className="btn-arrow" /> Meet the Team
            </a>
          </div>
      </section>

      <div className="ab-mid">
        <section className="ab-projects">
          <div className="ab-proj-head">
            <span className="ab-pill">What we offer</span>
            <h2 className="fit">Explore Our Projects</h2>
            <a className="ab-proj-btn btn" href="#projects" onClick={dead}>
              <ArrowRight size={12} className="btn-arrow" /> View All Projects
            </a>
          </div>
          <div className="ab-projs">
            {projects.map(([name, chip, desc, n]) => (
              <article className="ab-pcard" key={name}>
                <span className="ab-pcover">
                  <img src={`/assets/images/71-project-${n}.webp`} alt={`${name} preview`} loading="lazy" />
                  <span className="ab-chip">{chip}</span>
                </span>
                <h4>{name}</h4>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="ab-rev">
          <h2>Our Clients Reviews</h2>
          <div className="ab-revs">
            {reviews.map(([quote, rating, name, who]) => (
              <article className="ab-revcard" key={name}>
                <div className="ab-stars" role="img" aria-label={`${rating} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span className="ab-star" key={i}>
                      <Star size={20} className={i < rating ? "ab-star-cream" : "ab-star-dark"} />
                    </span>
                  ))}
                </div>
                <p className="ab-quote">"{quote}"</p>
                <div className="ab-who">
                  <span>{name}</span>
                  <span>{who}</span>
                </div>
              </article>
            ))}
          </div>
          <div className="ab-dots" role="img" aria-label="Slide 1 of 3">
            <span className="ab-dot ab-dot-a" />
            <span className="ab-dot" />
            <span className="ab-dot" />
          </div>
        </section>
      </div>
    </div>
  );
}
