import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Marquee from "./components/Marquee";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import { SHOW_TESTIMONIALS } from "./config";
import Team from "./components/Team";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import ServiceDetail from "./components/ServiceDetail";
import AboutDetail from "./components/AboutDetail";
import ProjectsPage from "./components/ProjectsPage";
import TeamPage from "./components/TeamPage";
import ContactsPage from "./components/ContactsPage";
import ProjectDetail from "./components/ProjectDetail";
import { PROJECTS } from "./data/projects";
import {
  useRoute, SERVICE_PATHS, ABOUT_PATH, PROJECTS_PATH, TEAM_PATH, CONTACTS_PATH,
} from "./router";

// inner pages that share the slim footer (nav + legal row only)
const INNER_PAGES = {
  [PROJECTS_PATH]: [ProjectsPage],
  [TEAM_PATH]: [TeamPage],
  [CONTACTS_PATH]: [ContactsPage, "Contacts"],
};

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = () => setContactOpen(true);
  const closeContact = () => setContactOpen(false);

  const route = useRoute();
  const projectSlug = route.match(/^\/projects\/([^/]+)\/$/)?.[1];
  const isProject = PROJECTS.some((p) => p.slug === projectSlug);
  // service and project pages render their own slim PageFooter
  const isService = SERVICE_PATHS.includes(route);
  const isAbout = route === ABOUT_PATH;
  const slug = isService ? route.split("/").filter(Boolean).pop() : null;
  const inner = INNER_PAGES[route];
  const InnerPage = inner?.[0];

  return (
    <>
      <Header onOpenContact={openContact} route={route} />
      {isService ? (
        <main>
          <ServiceDetail slug={slug} key={route} />
        </main>
      ) : isProject ? (
        <main>
          <ProjectDetail slug={projectSlug} key={route} />
        </main>
      ) : InnerPage ? (
        <main>
          <InnerPage onOpenContact={openContact} key={route} />
        </main>
      ) : isAbout ? (
        <main>
          <AboutDetail />
        </main>
      ) : (
        <div className="top-block">
          <div className="art-wrap" aria-hidden="true">
            <img className="art-img top-art" src="/assets/images/71-home-1-backgrounds.webp" alt="" />
          </div>
          <main>
            <Hero />
            <About />
            <Services />
            <WhyUs />
            <Projects />
            {SHOW_TESTIMONIALS && <Testimonials />}
            <Team />
            <Marquee />
          </main>
        </div>
      )}
      {isService || isProject ? null : inner ? (
        <Footer onOpenContact={openContact} variant="about" slim activeNav={inner[1]} />
      ) : (
        <Footer
          onOpenContact={openContact}
          variant="about"
          activeNav={isAbout ? "About Us" : undefined}
        />
      )}
      <ContactModal open={contactOpen} onClose={closeContact} />
    </>
  );
}
