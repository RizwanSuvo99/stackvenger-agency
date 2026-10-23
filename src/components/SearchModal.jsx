import { useEffect, useMemo, useRef, useState } from "react";
import { Close, Search } from "./icons";
import { PROJECTS } from "../data/projects";
import { POSTS } from "../data/posts";
import {
  Link, SERVICE_PATHS, ABOUT_PATH, PROJECTS_PATH, TEAM_PATH, BLOG_PATH, CONTACTS_PATH, PRICES_PATH, projectPath, postPath,
} from "../router";

const SERVICE_NAMES = [
  "AI-Accelerated Product Development",
  "Custom Software & App Development",
  "Prototyping & UX Design",
  "AI Integration & Automation",
  "Cloud Architecture & DevOps",
  "Startup Growth Consulting",
  "Intelligent Data Insights",
  "Smart Workflow Automation",
  "Innovation Strategy Consulting",
];

const INDEX = [
  ...[["Home", "/"], ["About Us", ABOUT_PATH], ["Our Projects", PROJECTS_PATH], ["Our Team", TEAM_PATH], ["Blog", BLOG_PATH], ["Pricing", PRICES_PATH], ["Contacts", CONTACTS_PATH]].map(([t, to]) => ({ t, to, kind: "Page" })),
  ...SERVICE_NAMES.map((t, i) => ({ t, to: SERVICE_PATHS[i], kind: "Service" })),
  ...PROJECTS.map((p) => ({ t: p.title, to: projectPath(p.slug), kind: "Project", sub: p.lead })),
  ...POSTS.map((p) => ({ t: p.title, to: postPath(p.slug), kind: "Blog", sub: p.lead })),
];

export default function SearchModal({ open, onClose }) {
  const [q, setQ] = useState("");
  const input = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    setQ("");
    const t = setTimeout(() => input.current?.focus(), 30);
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => { clearTimeout(t); window.removeEventListener("keydown", onKey); };
  }, [open, onClose]);

  const results = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return [];
    return INDEX.filter((r) => `${r.t} ${r.sub || ""}`.toLowerCase().includes(s)).slice(0, 8);
  }, [q]);

  if (!open) return null;
  return (
    <div className="search-ov" role="dialog" aria-modal="true" aria-label="Search the site" onClick={onClose}>
      <div className="search-box" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="search-close" aria-label="Close search" onClick={onClose}><Close size={22} /></button>
        <form className="search-form" role="search" onSubmit={(e) => { e.preventDefault(); if (results[0]) document.querySelector(".search-res a")?.click(); }}>
          <Search size={22} />
          <input ref={input} type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search pages, services, projects, posts…" aria-label="Search" />
        </form>
        {q.trim() ? (
          results.length ? (
            <ul className="search-res">
              {results.map((r) => (
                <li key={r.to}>
                  <Link to={r.to} onClick={onClose}>
                    <span className="search-kind">{r.kind}</span>
                    <b>{r.t}</b>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="search-empty">No results for “{q.trim()}”.</p>
          )
        ) : null}
      </div>
    </div>
  );
}
