import { useEffect, useState } from "react";
import { ArrowRight, Chevron, Close, Menu, Search } from "./icons";
import { Link, navigate as navGo, scrollToSection, SERVICE_PATH, SERVICE_PATHS, ABOUT_PATH } from "../router";

const services = [
  "AI-Accelerated Product Development",
  "Custom Software & App Development",
  "Prototyping & UX Design",
  "AI Integration & Automation",
  "Cloud Architecture & DevOps",
  "Startup Growth Consulting",
];

const demoTiles = [
  ["Home One Dark", "/assets/images/71-megamenu-dark-1.webp", 278, 228],
  ["Home Two Dark", "/assets/images/71-megamenu-dark-2.webp", 278, 228],
  ["Home One Light", "/assets/images/71-megamenu-light-1.webp", 281, 231],
  ["Home Two Light", "/assets/images/71-megamenu-light-2.webp", 281, 231],
];

const pages = [
  ["About Us", ABOUT_PATH],
  ["Our Projects", "#projects"],
  ["Our Team", "#team"],
  ["Blog", "#top"],
  ["Shop", "#top"],
  ["Image Credits", "#top"],
];

function HomeMega() {
  return (
    <div className="mega mega-home">
      <div className="mh-col mh-dark">
        {demoTiles.slice(0, 2).map(([t, src, w, h]) => (
          <a className="mh-tile" href="#top" key={t}>
            <img src={src} alt="" width={w} height={h} loading="lazy" />
            <span>{t}</span>
          </a>
        ))}
      </div>
      <div className="mh-col mh-light">
        {demoTiles.slice(2).map(([t, src, w, h]) => (
          <a className="mh-tile" href="#top" key={t}>
            <img src={src} alt="" width={w} height={h} loading="lazy" />
            <span>{t}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

function ServicesMega() {
  return (
    <div className="mega mega-services">
      <div className="msv-left">
        <h5>All Services</h5>
        {[
          ["AI-Accelerated Product Development", "", SERVICE_PATH],
          ["Custom Software & App", "Development", SERVICE_PATHS[1]],
          ["Prototyping & UX Design", "", SERVICE_PATHS[2]],
          ["AI Integration & Automation", "", SERVICE_PATHS[3]],
          ["Cloud Architecture & DevOps", "", SERVICE_PATHS[4]],
          ["Startup Growth Consulting", "", SERVICE_PATHS[5]],
        ].map(([a, b, to]) =>
          to ? (
            <Link className="msv-item" to={to} key={a}>{a}{b ? (<><br />{b}</>) : null}</Link>
          ) : (
            <a className="msv-item" href="#" key={a} onClick={(e) => e.preventDefault()}>{a}{b ? (<><br />{b}</>) : null}</a>
          )
        )}
      </div>
      <div className="msv-right">
        <h5>
          Every project starts with
          <br />a conversation
        </h5>
        <button className="megabtn" type="button">
          <ArrowRight size={20} className="btn-arrow" /> Get in Touch
        </button>
      </div>
    </div>
  );
}

function PagesDrop({ route }) {
  return (
    <div className="dropdown mega-pages">
      {pages.map(([text, href]) =>
        href.startsWith("/") ? (
          <Link key={text} to={href} className={href === route ? "is-cur" : undefined}>{text}</Link>
        ) : (
          <a key={text} href={href}>{text}</a>
        )
      )}
    </div>
  );
}

export default function Header({ onOpenContact, route }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const alignMega = (e, width, vps) => {
    const li = e.currentTarget;
    const r = li.getBoundingClientRect();
    const content = window.innerWidth - 15;
    const base = width ? ((vps ? window.innerWidth : content) - width) / 2 : r.left + 6;
    li.style.setProperty("--mm-left", `${base - r.left}px`);
  };

  const navEnd = (e) => {
    const li = e.currentTarget;
    li.style.setProperty("--mm-left", "-9999px");
  };

  const goSection = (hash) => (e) => {
    e.preventDefault();
    if (window.location.pathname !== "/") {
      navGo("/");
      setTimeout(() => scrollToSection(hash), 80);
    } else {
      scrollToSection(hash);
    }
  };

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-inner">
          <Link to="/" className="logo" aria-label="Softy Solutions — home">
            <img src="/assets/icons/logo.svg" alt="Softy Solutions" width="169" height="55" />
          </Link>

          <nav className="nav-pill" aria-label="Primary">
            <ul>
              <li className="nav-item nav-has-mega" onMouseEnter={(e) => alignMega(e, 1345)} onMouseLeave={navEnd}>
                <Link to="/" className="nav-link">
                  Home <Chevron size={12} className="chev" />
                </Link>
                <HomeMega />
              </li>
              <li className="nav-item nav-has-mega" onMouseEnter={(e) => alignMega(e, 729, true)} onMouseLeave={navEnd}>
                <a href="#services" className="nav-link" onClick={goSection("#services")}>
                  Services <Chevron size={12} className="chev" />
                </a>
                <ServicesMega />
              </li>
              <li className="nav-item">
                <a href="#pricing" className="nav-link" onClick={goSection("#pricing")}>Pricing</a>
              </li>
              <li className="nav-item" onMouseEnter={(e) => alignMega(e, 0)} onMouseLeave={navEnd}>
                <a href="#top" className="nav-link" onClick={(e) => e.preventDefault()}>
                  Pages <Chevron size={12} className="chev" />
                </a>
                <PagesDrop route={route} />
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link" onClick={goSection("#contact")}>Contacts</a>
              </li>
              <li className="nav-item">
                <a href="#top" className="nav-link search" aria-label="Search" onClick={(e) => e.preventDefault()}>
                  <Search size={17} />
                </a>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <button className="btn btn-sm" onClick={onOpenContact}>
              <ArrowRight size={16} className="btn-arrow" /> Get Started
            </button>
            <button
              className="burger"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <Close size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${open ? "open" : ""}`} onClick={(e) => {
        if (e.target.tagName === "A" || e.target.tagName === "BUTTON") setOpen(false);
      }}>
        <div className="m-group">
          <div className="m-label">Home <Chevron size={15} /></div>
          <div className="m-sub">
            <a href="#top">Home One Dark</a>
            <a href="#top">Home Two Dark</a>
          </div>
        </div>
        <div className="m-group">
          <div className="m-label">Services <Chevron size={15} /></div>
          <div className="m-sub">
            {services.map((s) => (
              <a key={s} href="#services">{s}</a>
            ))}
          </div>
        </div>
        <div className="m-group">
          <a href="#pricing" className="m-link">Pricing</a>
        </div>
        <div className="m-group">
          <div className="m-label">Pages <Chevron size={15} /></div>
          <div className="m-sub">
            {pages.map(([text, href]) =>
              href.startsWith("/") ? (
                <Link key={text} to={href}>{text}</Link>
              ) : (
                <a key={text} href={href}>{text}</a>
              )
            )}
          </div>
        </div>
        <div className="m-group">
          <a href="#contact" className="m-link">Contacts</a>
        </div>
        <div className="m-cta">
          <button className="btn" onClick={onOpenContact}>
            <ArrowRight size={16} className="btn-arrow" /> Get Started
          </button>
        </div>
      </div>
    </>
  );
}
