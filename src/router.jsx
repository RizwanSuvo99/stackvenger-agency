import { useEffect, useState } from "react";

export const SERVICE_PATHS = [
  "/services/ai-accelerated-product-development/",
  "/services/custom-software-app-development/",
  "/services/ai-integration-automation/",
  "/services/smart-workflow-automation/",
];
export const SERVICE_PATH = SERVICE_PATHS[0];
export const ABOUT_PATH = "/about-us/";
export const PROJECTS_PATH = "/our-projects/";
export const TEAM_PATH = "/our-team/";
export const CONTACTS_PATH = "/contacts/";
export const projectPath = (slug) => `/projects/${slug}/`;

export function useRoute() {
  const [path, setPath] = useState(window.location.pathname);
  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);
  return path;
}

export function navigate(to) {
  if (window.location.pathname === to) return;
  window.history.pushState({}, "", to);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

export function scrollToSection(hash) {
  if (window.location.hash === hash) {
    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    return;
  }
  window.location.hash = hash;
}

// href + client-side click handler, for anchors that can't be a <Link> (e.g. <Reveal as="a">)
export const goTo = (to) => ({
  href: to,
  onClick: (e) => {
    e.preventDefault();
    navigate(to);
    window.scrollTo(0, 0);
  },
});

// link to a section of the home page (e.g. "#services") from any route
export const sectionLink = (hash) => ({
  href: `/${hash}`,
  onClick: (e) => {
    e.preventDefault();
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(hash), 80);
    } else {
      scrollToSection(hash);
    }
  },
});

export function Link({ to, children, onClick, ...rest }) {
  return (
    <a
      href={to}
      {...rest}
      onClick={(e) => {
        onClick?.(e);
        e.preventDefault();
        navigate(to);
        window.scrollTo(0, 0);
      }}
    >
      {children}
    </a>
  );
}
