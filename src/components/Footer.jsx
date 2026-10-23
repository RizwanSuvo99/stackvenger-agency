import { useEffect, useState } from "react";
import { ArrowRight, Facebook, Instagram, XTwitter } from "./icons";
import { Link, sectionLink, ABOUT_PATH, BLOG_PATH, CONTACTS_PATH } from "../router";

const nav = [
  ["About Us", ABOUT_PATH],
  ["Our Services", "#services"],
  ["Blog Page", BLOG_PATH],
  ["Contacts", CONTACTS_PATH],
];

const socials = [
  ["Facebook", <Facebook size={19} key="fb" />, "https://facebook.com/"],
  ["Instagram", <Instagram size={19} key="ig" />, "https://instagram.com/"],
  ["X (Twitter)", <XTwitter size={19} key="x" />, "https://x.com/"],
];

export default function Footer({ onOpenContact, variant, activeNav, slim }) {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 900);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className={`footer${variant ? " footer--" + variant : ""}${slim ? " footer--slim" : ""}`} id="contact">
      <div className="art-wrap" aria-hidden="true">
        <img
          className="art-img footer-art"
          src={slim ? "/assets/images/71-background-footer-1.webp" : "/assets/images/71-background-footer-1-1.webp"}
          alt=""
        />
      </div>

      {slim ? null : (
        <div className="footer-cta">
          <div className="container">
            <span className="kicker-pill">Your Product Could Be Next</span>
            <h2 className="display-title gradient-text">
              Let&apos;s Build Your
              <br />
              Next Big Thing
              <br />
              Together
            </h2>
            <p>
              With StackVenger, you don&apos;t just build faster — you build smarter.
              Let&apos;s make your launch unforgettable.
            </p>
            <div className="hero-cta">
              <button className="btn" onClick={onOpenContact}>
                <ArrowRight size={20} className="btn-arrow" /> Get Started Now
              </button>
              <Link className="btn btn-outline" to={CONTACTS_PATH}>
                <ArrowRight size={20} className="btn-arrow" /> Schedule a Demo
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="footer-bottom">
        <div className="container">
          <nav className="footer-nav" aria-label="Footer">
            {nav.map(([label, href]) =>
              href.startsWith("/") ? (
                <Link key={label} to={href} className={label === activeNav ? "cur" : undefined}>
                  {label}
                </Link>
              ) : (
                <a key={label} {...sectionLink(href)}>{label}</a>
              )
            )}
          </nav>
        </div>
        <div className="container">
          <p className="footer-legal">
            This is a sample website – cmsmasters © 2026 - All Rights Reserved
          </p>
          <div className="social-row">
            {socials.map(([label, icon, href]) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {showTop && (
        <button
          className="to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M6 15l6-6 6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
    </footer>
  );
}
