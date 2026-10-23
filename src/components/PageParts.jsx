import { useEffect, useState } from "react";
import { Close } from "./icons";
import { Link } from "../router";

/* inner-page banner: big centered title over theme art, with an optional
   sub line ("lead") or a Home / Current breadcrumb */
export function PageHero({ title, bg, pos = "50% 50%", lead, crumb, tall }) {
  return (
    <section
      className={`pg-hero${tall ? " pg-hero--tall" : ""}`}
      style={{ "--pg-bg": `url("/assets/images/${bg}")`, "--pg-pos": pos }}
    >
      <h1>
        <span className="gradient-text grad0">{title}</span>
      </h1>
      {lead ? <p className="pg-lead">{lead}</p> : null}
      {crumb ? (
        <nav className="pg-crumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>{crumb}</span>
        </nav>
      ) : null}
    </section>
  );
}

/* image + "contact us" form split used on Our Team and Contacts */
export function FormSplit({ id, img, title, align = "center", rows = 6 }) {
  const [sent, setSent] = useState(false);
  return (
    <section className={`pg-split pg-split--${align}`} id={id}>
      <img src={`/assets/images/${img}`} alt="" loading="lazy" width="614" height="700" />
      <div className="pg-split-text">
        <h3>{title}</h3>
        <p>If you have any questions, you can contact us. Please, fill out the form below.</p>
        <form
          className="pg-form"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            e.currentTarget.reset();
          }}
        >
          <input type="text" name="name" placeholder="Name" aria-label="Name" required />
          <input type="email" name="email" placeholder="E-Mail" aria-label="E-Mail" required />
          <textarea name="message" placeholder="Your Message" aria-label="Your Message" rows={rows} />
          <button className="btn pg-send" type="submit">Send Message</button>
          {sent ? <p className="pg-sent" role="status">Thanks! Your message has been sent.</p> : null}
        </form>
      </div>
    </section>
  );
}

// YouTube lightbox, as on the reference (elementor video lightbox)
export function VideoLightbox({ id, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  return (
    <div className="video-lb" role="dialog" aria-modal="true" aria-label="Client video story" onClick={onClose}>
      <button type="button" className="video-lb-close" aria-label="Close video" onClick={onClose}>
        <Close size={22} />
      </button>
      <div className="video-lb-frame" onClick={(e) => e.stopPropagation()}>
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
          title="Client video story"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
