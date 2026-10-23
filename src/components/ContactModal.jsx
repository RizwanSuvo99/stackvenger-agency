import { useEffect, useState } from "react";
import { ArrowRight, Check, Close, Facebook, Instagram, XTwitter } from "./icons";

export default function ContactModal({ open, onClose }) {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Start your project"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal">
        <button className="modal-close" onClick={onClose} aria-label="Close dialog">
          <Close size={18} />
        </button>

        {sent ? (
          <div className="form-success">
            <span className="check-circle">
              <Check size={32} />
            </span>
            <h4>Message sent — thank you!</h4>
            <p>We&apos;ll review your brief and get back to you within one business day.</p>
          </div>
        ) : (
          <>
            <h3>Your Next Project Starts Here</h3>
            <p>
              Tell us a little about what you want to build and we&apos;ll get back to
              you within one business day.
            </p>
            <form className="form-grid" onSubmit={submit}>
              <div className="row">
                <div className="field">
                  <label htmlFor="cm-name">Name</label>
                  <input id="cm-name" required placeholder="Jane Cooper" />
                </div>
                <div className="field">
                  <label htmlFor="cm-email">Email</label>
                  <input id="cm-email" type="email" required placeholder="jane@company.com" />
                </div>
              </div>
              <div className="field">
                <label htmlFor="cm-company">Company (optional)</label>
                <input id="cm-company" placeholder="Acme Inc." />
              </div>
              <div className="field">
                <label htmlFor="cm-msg">Project details</label>
                <textarea id="cm-msg" rows="4" required placeholder="We're building…" />
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message <ArrowRight size={16} className="btn-arrow" />
              </button>
            </form>
          </>
        )}

        <div className="modal-social">
          <p>Follow us</p>
          <div className="social-row">
            <a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="X (Twitter)"><XTwitter size={17} /></a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="https://facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={18} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
