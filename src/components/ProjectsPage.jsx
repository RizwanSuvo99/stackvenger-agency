import { PageHero } from "./PageParts";
import { Link, projectPath } from "../router";
import { PROJECTS } from "../data/projects";

const projects = [
  ["NovaHire – AI Recruitment Platform", "Technology", "Automated candidate screening, matching, and outreach using machine learning."],
  ["RetailSense – Smart Store Analytics", "Retail", "AI-powered shopper insights and predictive inventory management for global retail chains."],
  ["FinVision – Predictive Finance Dashboard", "Technology", "Real-time forecasting and personalized investment insights using data modeling."],
  ["MedAssist – Virtual Health Companion", "Healthcare", "AI chatbot and patient tracking platform, improving appointment adherence by 35%."],
  ["EduMind – Personalized Learning Hub", "AI Learning", "EduMind leverages AI to create tailored learning paths for students, offering real-time progress tracking."],
  ["WorkSync – AI-Powered Team Collaboration Tool", "Workplace Tech", "WorkSync uses smart automation and predictive insights to optimize team workflows and enhance communication."],
  ["GreenTrack – Sustainable Supply Chain Monitor", "Logistics Tech", "GreenTrack empowers businesses to monitor their supply chains with AI-driven analytics."],
  ["TravelMate – Intelligent Trip Planner", "AI Assistant", "TravelMate simplifies travel planning with AI-powered recommendations, real-time itinerary adjustments."],
  ["LegalEase – AI Contract Analyzer", "LegalTech", "LegalEase helps businesses and law firms speed up contract review by detecting risks, highlighting key clauses."],
];

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
        {projects.map(([name, chip, desc], i) => (
          <article className="pg-pcard" key={name}>
            <Link className="pg-pcover" to={projectPath(PROJECTS[i].slug)}>
              <img src={`/assets/images/71-project-${i + 1}.webp`} alt={`${name} preview`} loading="lazy" />
              <span className="pg-chip">{chip}</span>
            </Link>
            <h4><Link to={projectPath(PROJECTS[i].slug)}>{name}</Link></h4>
            <p>{desc}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
