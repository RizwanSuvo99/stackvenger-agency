import { useEffect, useState } from "react";

export const SERVICE_PATHS = [
  "/services/ai-accelerated-product-development/",
  "/services/custom-software-app-development/",
  "/services/prototyping-ux-design/",
  "/services/ai-integration-automation/",
  "/services/cloud-architecture-devops/",
  "/services/startup-growth-consulting/",
];
export const SERVICE_PATH = SERVICE_PATHS[0];
export const ABOUT_PATH = "/about-us/";

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

export function Link({ to, children, ...rest }) {
  return (
    <a
      href={to}
      {...rest}
      onClick={(e) => {
        e.preventDefault();
        navigate(to);
        window.scrollTo(0, 0);
      }}
    >
      {children}
    </a>
  );
}
