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
 * Fades/slides content in as it enters the viewport via GSAP ScrollTrigger.
 * Content is present in the server-rendered HTML regardless — this only
 * affects the CSS opacity/transform for JS-enabled visual browsers. A
 * <noscript> rule in the root layout forces full visibility when JS is
 * unavailable, and prefers-reduced-motion skips straight to visible.
 */
export default function Reveal({ children, className = "", delay = 0, as: Tag = "div" }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let trigger: { kill: () => void } | undefined;
    let cancelled = false;

    // Safety net: ScrollTrigger's callback depends on rAF, which Chromium
    // throttles/suspends for backgrounded tabs. If a user's tab loses focus
    // right as this mounts, the reveal could otherwise never fire, leaving
    // content stuck at low opacity indefinitely. Force it visible if the
    // real trigger hasn't fired within a few seconds.
    const safety = setTimeout(() => setVisible(true), 3000);

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ gsap }, { ScrollTrigger }]) => {
        if (cancelled || !ref.current) return;
        gsap.registerPlugin(ScrollTrigger);
        trigger = ScrollTrigger.create({
          trigger: ref.current,
          start: "top 88%",
          once: true,
          onEnter: () =>
            setTimeout(() => {
              clearTimeout(safety);
              setVisible(true);
            }, delay),
        });
      },
    );

    return () => {
      cancelled = true;
      clearTimeout(safety);
      trigger?.kill();
    };
  }, [delay]);

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      data-reveal
      className={`reveal-init transition-all duration-700 ease-out motion-reduce:transition-none ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
