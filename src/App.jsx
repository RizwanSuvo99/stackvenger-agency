import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LogoStrip from "./components/LogoStrip";
import About from "./components/About";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Marquee from "./components/Marquee";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import ServiceDetail from "./components/ServiceDetail";
import AboutDetail from "./components/AboutDetail";
import { useRoute, SERVICE_PATHS, ABOUT_PATH } from "./router";

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = () => setContactOpen(true);
  const closeContact = () => setContactOpen(false);

  const route = useRoute();
  const isService = SERVICE_PATHS.includes(route);
  const isAbout = route === ABOUT_PATH;
  const slug = isService ? route.split("/").filter(Boolean).pop() : null;

  return (
    <>
      <Header onOpenContact={openContact} route={route} />
      {isService ? (
        <main>
          <ServiceDetail slug={slug} key={route} />
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
            <Hero onOpenContact={openContact} />
            <LogoStrip />
            <About />
            <Services onOpenContact={openContact} />
            <WhyUs />
            <Projects />
            <Testimonials />
            <Team />
            <Marquee />
            <Pricing onOpenContact={openContact} />
          </main>
        </div>
      )}
      {isService ? null : (
        <Footer
          onOpenContact={openContact}
          variant={isAbout ? "about" : undefined}
          activeNav={isAbout ? "About Us" : undefined}
        />
      )}
      <ContactModal open={contactOpen} onClose={closeContact} />
    </>
  );
}
