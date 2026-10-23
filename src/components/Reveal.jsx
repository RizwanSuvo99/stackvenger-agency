import { useEffect, useRef, useState } from "react";

export default function Reveal({
  as: Tag = "div",
  delay = 0,
  y = 28,
  className = "",
  style,
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVis(true);
          io.disconnect();
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${vis ? "is-in" : ""} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        "--reveal-y": `${y}px`,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
