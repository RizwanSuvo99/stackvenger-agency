import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, Facebook, Instagram, XTwitter } from "./icons";
import { PageFooter } from "./ServiceDetail";
import { VideoLightbox } from "./PageParts";
import { BlogCard, tagPath } from "./BlogPage";
import { POSTS } from "../data/posts";
import { Link, navigate, postPath, scrollToSection, CONTACTS_PATH, TEAM_PATH } from "../router";

const AVATAR = (hash) => `/assets/images/avatars/${hash}.jpg`;
const CMS_AVATAR = AVATAR("36e2a7ea");
const AUTHOR_BIO =
  "Cmsmasters Studio is a union of 14 people who are completely into innovative website design and progressive website development. Yes, we believe we can make the world be more beautiful. And as we specialize on WordPress themes, we do our job the best way it can be done.";

/* answers the reference quiz grades as correct (forminator "knowledge" quiz) */
const QUIZ_ANSWERS = [1, 2, 0, 1, 0];

const Fa = ({ d, vb = "0 0 512 512", size = 18 }) => (
  <svg width={size} height={size} viewBox={vb} fill="currentColor" aria-hidden="true"><path d={d} /></svg>
);
const LinkedIn = (p) => <Fa {...p} vb="0 0 448 512" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />;
const Envelope = (p) => <Fa {...p} d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />;
const CheckCircle = (p) => <Fa {...p} d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z" />;
const Pinterest = (p) => <Fa {...p} vb="0 0 496 512" d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z" />;

function Share({ post }) {
  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(post.title);
  const links = [
    ["Facebook", `https://www.facebook.com/sharer/sharer.php?u=${url}`, <Facebook size={18} key="f" />],
    ["X (Twitter)", `https://twitter.com/intent/tweet?url=${url}&text=${title}`, <XTwitter size={18} key="x" />],
    ["LinkedIn", `https://www.linkedin.com/sharing/share-offsite/?url=${url}`, <LinkedIn key="l" />],
    ["Email", `mailto:?subject=${title}&body=${url}`, <Envelope key="e" />],
  ];
  return (
    <div className="bp-share">
      {links.map(([label, href, icon]) => (
        <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={`Share on ${label}`}>{icon}</a>
      ))}
    </div>
  );
}

/* letter-by-letter reveal when scrolled into view (reference "animated text" effect) */
function AnimatedText({ tag: Tag, text }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setOn(true), io.disconnect()), { threshold: 0.3 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  let k = 0;
  return (
    <Tag ref={ref} className={`bp-anim${on ? " is-on" : ""}`} aria-label={text}>
      {text.split(" ").map((w, wi) => (
        <span className="word" key={wi} aria-hidden="true">
          {[...w].map((ch) => <span className="letter" key={k} style={{ transitionDelay: `${k++ * 18}ms` }}>{ch}</span>)}
        </span>
      ))}
    </Tag>
  );
}

function Toggles({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="bp-toggles">
      {items.map(([t, c], i) => (
        <div className={`bp-tog${open === i ? " is-open" : ""}`} key={t}>
          <h6><button type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>{t}</button></h6>
          {open === i ? <div className="bp-tog-body">{c}</div> : null}
        </div>
      ))}
    </div>
  );
}

function Tabs({ items }) {
  const [cur, setCur] = useState(0);
  return (
    <div className="bp-tabs">
      <div className="bp-tab-list" role="tablist">
        {items.map(([t], i) => (
          <button key={t} type="button" role="tab" aria-selected={cur === i} className={cur === i ? "is-on" : ""} onClick={() => setCur(i)}>{t}</button>
        ))}
      </div>
      <div className="bp-tab-panel" role="tabpanel">{items[cur][1]}</div>
    </div>
  );
}

function Quiz({ qs }) {
  const [picked, setPicked] = useState({});
  return (
    <div className="bp-quiz">
      {qs.map((q, qi) => (
        <div className="bp-q" role="radiogroup" aria-label={q.q} key={q.q}>
          <span className="bp-q-title">{q.q}</span>
          {q.opts.map((o, oi) => {
            const chosen = picked[qi] === oi;
            const state = picked[qi] === undefined ? "" : oi === QUIZ_ANSWERS[qi] ? " is-right" : chosen ? " is-wrong" : "";
            return (
              <label className={`bp-opt${chosen ? " is-chosen" : ""}${state}`} key={o}>
                <input type="radio" name={`q${qi}`} disabled={picked[qi] !== undefined} onChange={() => setPicked({ ...picked, [qi]: oi })} />
                <span className="bp-opt-box" aria-hidden="true">{state.includes("right") ? <Check size={12} /> : state.includes("wrong") ? "×" : null}</span>
                <span>{o}</span>
              </label>
            );
          })}
        </div>
      ))}
    </div>
  );
}

function Block({ b, onVideo }) {
  const style = b.mt ? { marginTop: b.mt } : undefined;
  switch (b.type) {
    case "container": {
      const light = b.box && b.box.bg === "rgb(255, 255, 255)";
      const cls = ["bp-con", b.row ? "is-row" : "", b.box ? "is-box" : "", light ? "is-light" : "", b.bgImg ? "is-img" : ""].join(" ").replace(/\s+/g, " ").trim();
      const st = { ...style };
      if (b.box) Object.assign(st, { background: b.box.bg, borderRadius: b.box.br, padding: b.box.pad, border: b.box.bd ? `1px solid var(--line-warm)` : undefined });
      if (b.bgImg) Object.assign(st, { backgroundImage: `url(/assets/images/${b.bgImg})`, borderRadius: b.br, minHeight: b.h });
      if (b.row) st.columnGap = b.colGap;
      if (b.pb) st.paddingBottom = `calc(${b.box ? b.box.pad.split(" ")[2] || b.box.pad.split(" ")[0] : "0px"} + ${b.pb}px)`;
      if (b.w) st.flexBasis = b.w;
      return (
        <div className={cls} style={st}>
          {b.kids.map((k, i) => <Block b={k} key={i} onVideo={onVideo} />)}
        </div>
      );
    }
    case "heading": { const H = b.tag; return <H className="bp-h" style={style}>{b.text}</H>; }
    // pm: the reference used real <p>s here, which keep their trailing paragraph margin
    case "text": return <div className={`bp-text${b.pm ? " has-pm" : ""}`} style={style} dangerouslySetInnerHTML={{ __html: b.html }} />;
    case "image": return <img className="bp-img" style={style} src={`/assets/images/${b.src}`} alt="" loading="lazy" />;
    case "checklist":
      return (
        <ul className="bp-check" style={{ ...style, "--gap": `${b.gap}px`, "--step": `${b.step - 28}px`, "--ico-top": `${(28 - b.size) / 2 - (b.size > 20 ? 1.5 : 2.5)}px` }}>
          {b.items.map((t) => (
            <li key={t}>{b.icon === "circle" ? <CheckCircle size={b.size} /> : <Check size={b.size} />}{t}</li>
          ))}
        </ul>
      );
    case "masonry":
      return (
        <div className="bp-masonry" style={style}>
          {[0, 1].map((c) => (
            <div key={c}>{b.imgs.filter((_, i) => i % 2 === c).map((s) => <img key={s} src={`/assets/images/${s}`} alt="" loading="lazy" />)}</div>
          ))}
        </div>
      );
    case "grid":
      return <div className="bp-grid" style={style}>{b.imgs.map((s) => <img key={s} src={`/assets/images/${s}`} alt="" loading="lazy" />)}</div>;
    case "tweet":
      return (
        <div className="bp-tweet" style={style}>
          <iframe title="Post on X" src={`https://platform.twitter.com/embed/Tweet.html?id=${b.id}&theme=light&dnt=true`} loading="lazy" />
        </div>
      );
    case "toggles": return <div style={style}><Toggles items={b.items} /></div>;
    case "tabs": return <div style={style}><Tabs items={b.items} /></div>;
    case "quiz": return <div style={style}><Quiz qs={b.qs} /></div>;
    case "quote":
      return (
        <blockquote className="bp-quote" style={style}>
          <p>{b.text}</p>
          <cite>{b.who}</cite>
        </blockquote>
      );
    case "animated": return <div className="bp-anim-box" style={style}><AnimatedText tag={b.tag} text={b.text} /></div>;
    case "video":
      return (
        <button type="button" className="bp-video" style={style} onClick={() => onVideo(b.yt)} aria-label="Play video">
          <img src={`/assets/images/${b.cover}`} alt="" loading="lazy" />
          <svg width="44" height="50" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" /></svg>
        </button>
      );
    case "button":
      return (
        <Link className="btn bp-btn" style={style} to={b.href && b.href.startsWith("/") ? b.href : CONTACTS_PATH}>
          <ArrowRight size={12} className="btn-arrow" /> {b.text}
        </Link>
      );
    default: return null;
  }
}

export default function BlogPost({ slug }) {
  const idx = POSTS.findIndex((p) => p.slug === slug);
  const post = POSTS[idx];
  const n = POSTS.length;
  const prev = POSTS[(idx - 1 + n) % n];
  const next = POSTS[(idx + 1) % n];
  // reference: the three newest posts other than this one
  const related = [...POSTS].reverse().filter((p) => p.slug !== slug).slice(0, 3);
  const [video, setVideo] = useState(null);
  const side = post.sidebar;

  return (
    <div className={`pg-page bp-page${side ? " bp-page--side" : ""}`}>
      <section className={`bp-hero${side ? " bp-hero--img" : ""}`} style={side ? { "--bp-bg": `url(/assets/images/71-blog-${post.img}.webp)` } : undefined}>
        <span className="pj-chip">{post.cat}</span>
        <h1>{post.title}</h1>
        <p className="bp-lead">{post.lead}</p>
        <div className="bp-meta">
          <img src={CMS_AVATAR} alt="" width="40" height="40" />
          <span className="bp-by">cmsmasters</span>
          <time>{post.date}</time>
        </div>
        {side ? null : <img className="bp-hero-img" src={`/assets/images/71-blog-${post.img}.webp`} alt="" />}
      </section>

      <div className="bp-layout">
        <aside className="bp-aside">
          {side ? (
            <>
              <div className="bp-profile">
                <img src="/assets/images/71-author.webp" alt="Mary Rue" loading="lazy" />
                <b>Mary Rue</b>
                <p>We are committed to providing our patients with the highest quality of care.</p>
                <Link className="btn" to={TEAM_PATH}>Open Profile</Link>
              </div>
              <h6 className="bp-share-h">Share:</h6>
            </>
          ) : null}
          <Share post={post} />
        </aside>

        {/* links inside the post body (raw html) navigate client-side */}
        <article
          className="bp-article"
          onClick={(e) => {
            const a = e.target.closest(".bp-text a[href^='/']");
            if (a && !a.target) { e.preventDefault(); navigate(a.getAttribute("href")); window.scrollTo(0, 0); }
          }}
        >
          {post.blocks.map((b, i) => <Block b={b} key={i} onVideo={setVideo} />)}

          <div className="bp-tags">
            <span>Tags:</span>
            {post.tags.map((t) => <Link key={t} to={tagPath(t)}>{t}</Link>)}
          </div>

          <div className="bp-author">
            <img src={CMS_AVATAR} alt="cmsmasters" loading="lazy" />
            <div>
              <h4>cmsmasters</h4>
              <p>{AUTHOR_BIO}</p>
              <div className="bp-author-social">
                <a href="https://facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={15} /></a>
                <a href="https://pinterest.com/" target="_blank" rel="noreferrer" aria-label="Pinterest"><Pinterest size={15} /></a>
                <a href="https://instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={15} /></a>
              </div>
            </div>
          </div>
        </article>
      </div>

      <nav className="bp-pn" aria-label="Post navigation">
        <Link className="bp-pn-card" to={postPath(prev.slug)}>
          <img src={`/assets/images/71-blog-${prev.img}.webp`} alt="" loading="lazy" />
          <span><small>Previous Post</small><b>{prev.title}</b></span>
        </Link>
        <Link className="bp-pn-card is-next" to={postPath(next.slug)}>
          <span><small>Next Post</small><b>{next.title}</b></span>
          <img src={`/assets/images/71-blog-${next.img}.webp`} alt="" loading="lazy" />
        </Link>
      </nav>

      <section className="bp-related">
        <h3>Related Posts</h3>
        <div className="pg-blog">
          {related.map((p) => <BlogCard key={p.slug} post={p} />)}
        </div>
      </section>

      {post.comments.length ? (
        <section className="bp-comments">
          <h3>Comments</h3>
          {post.comments.map((c, i) => (
            <div className={`bp-comment${c.depth ? " is-reply" : ""}`} key={i}>
              <div className="bp-c-head">
                <img src={AVATAR(c.avatar)} alt="" width="65" height="65" loading="lazy" />
                <div>
                  <h4>{c.author}</h4>
                  <time>{c.date}</time>
                </div>
                <a className="bp-c-reply" href="#reply" onClick={(e) => { e.preventDefault(); scrollToSection("#reply"); }}>Log in to Reply</a>
              </div>
              <p>{c.text}</p>
            </div>
          ))}
        </section>
      ) : null}

      <section className="bp-reply" id="reply">
        <h3>Leave a Reply</h3>
        <p>You must be <Link to={CONTACTS_PATH}>logged in</Link> to post a comment.</p>
      </section>

      <PageFooter />
      {video ? <VideoLightbox id={video} onClose={() => setVideo(null)} /> : null}
    </div>
  );
}

