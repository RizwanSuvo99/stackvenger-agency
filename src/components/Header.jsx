import { useEffect, useState } from "react";
import { ArrowRight, Chevron, ChevronRight, Close, Menu, Search } from "./icons";
import SearchModal from "./SearchModal";
import {
  Link, navigate as navGo, scrollToSection, SERVICE_PATH, SERVICE_PATHS, ABOUT_PATH,
  PROJECTS_PATH, TEAM_PATH, BLOG_PATH, CONTACTS_PATH, PRICES_PATH,
} from "../router";

const services = [
  "AI-Accelerated Product Development",
  "Custom Software & App Development",
  "AI Integration & Automation",
  "Smart Workflow Automation",
];

const pages = [
  ["About Us", ABOUT_PATH],
  ["Our Projects", PROJECTS_PATH],
  ["Our Team", TEAM_PATH],
  ["Blog", BLOG_PATH],
];

function ServicesMega() {
  return (
    <div className="mega mega-services">
      <div className="msv-left">
        <h5>All Services</h5>
        {[
          ["AI-Accelerated Product Development", "", SERVICE_PATH],
          ["Custom Software & App", "Development", SERVICE_PATHS[1]],
          ["AI Integration & Automation", "", SERVICE_PATHS[2]],
          ["Smart Workflow Automation", "", SERVICE_PATHS[3]],
        ].map(([a, b, to]) => (
          <Link className="msv-item" to={to} key={a}>{a}{b ? (<><br />{b}</>) : null}</Link>
        ))}
      </div>
      <div className="msv-right">
        <h5>
          Every project starts with
          <br />a conversation
        </h5>
        <Link className="megabtn" to={CONTACTS_PATH}>
          <ArrowRight size={20} className="btn-arrow" /> Get in Touch
        </Link>
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
  const [searchOpen, setSearchOpen] = useState(false);

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
          <Link to="/" className="logo" aria-label="StackVenger — home">
            <img src="/assets/icons/logo.svg" alt="StackVenger" width="231" height="55" />
          </Link>

          <nav className="nav-pill" aria-label="Primary">
            <ul>
              <li className="nav-item">
                <Link to="/" className={`nav-link${route === "/" ? " is-cur" : ""}`}>Home</Link>
              </li>
              <li className="nav-item nav-has-mega" onMouseEnter={(e) => alignMega(e, 729, true)} onMouseLeave={navEnd}>
                <a href="#services" className="nav-link" onClick={goSection("#services")}>
                  Services <ChevronRight size={10} className="chev" />
                </a>
                <ServicesMega />
              </li>
              <li className="nav-item">
                <Link to={PRICES_PATH} className={`nav-link${route === PRICES_PATH ? " is-cur" : ""}`}>Pricing</Link>
              </li>
              <li className="nav-item" onMouseEnter={(e) => alignMega(e, 0)} onMouseLeave={navEnd} onFocus={(e) => alignMega({ currentTarget: e.currentTarget }, 0)}>
                {/* no page of its own: opens the dropdown (hover, click or keyboard focus) */}
                <button type="button" className="nav-link" aria-haspopup="true" onClick={(e) => e.currentTarget.focus()}>
                  Pages <ChevronRight size={10} className="chev" />
                </button>
                <PagesDrop route={route} />
              </li>
              <li className="nav-item">
                <Link to={CONTACTS_PATH} className={`nav-link${route === CONTACTS_PATH ? " is-cur" : ""}`}>Contacts</Link>
              </li>
              <li className="nav-item">
                <button type="button" className="nav-link search" aria-label="Search" onClick={() => setSearchOpen(true)}>
                  <Search size={21} />
                </button>
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

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />

      <div className={`mobile-menu ${open ? "open" : ""}`} onClick={(e) => {
        if (e.target.tagName === "A" || e.target.tagName === "BUTTON") setOpen(false);
      }}>
        <div className="m-group">
          <Link to="/" className="m-link">Home</Link>
        </div>
        <div className="m-group">
          <div className="m-label">Services <Chevron size={15} /></div>
          <div className="m-sub">
            {services.map((s, i) => (
              <Link key={s} to={SERVICE_PATHS[i]}>{s}</Link>
            ))}
          </div>
        </div>
        <div className="m-group">
          <Link to={PRICES_PATH} className="m-link">Pricing</Link>
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
          <Link to={CONTACTS_PATH} className="m-link">Contacts</Link>
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
