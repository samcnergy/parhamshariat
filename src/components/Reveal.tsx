"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Stagger the animation start, in milliseconds. */
  delay?: number;
  /** HTML element to render — defaults to "div", pass "section" to preserve semantics. */
  as?: "div" | "section";
};

/**
 * Fades/slides content in as it enters the viewport. Content is present in
 * the server-rendered HTML regardless — this only affects the CSS opacity
 * transform for JS-enabled visual browsers. A <noscript> rule in the root
 * layout forces full visibility when JS is unavailable.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // No special-case for prefers-reduced-motion here: the global stylesheet
    // collapses transition-duration to ~0 for those users, so the observer
    // below still governs *when* content becomes visible, it just does so
    // without an animated transition.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      data-reveal
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={`reveal-init transition-all duration-700 ease-out motion-reduce:transition-none ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
