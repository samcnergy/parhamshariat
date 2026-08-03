"use client";

import { useEffect, useRef } from "react";

/**
 * Brief full-screen wipe on initial load: two panels slide away to reveal
 * the page. Skipped entirely for prefers-reduced-motion (see the <noscript>
 * rule in layout.tsx for the no-JS case — panels are display:none there).
 * Runs once per full page load, not on client-side route transitions.
 *
 * Hard safety net: if the tab loses focus right as this mounts (e.g. the
 * user alt-tabs away mid-load), rAF-driven animation can stall in
 * Chromium's background-tab throttling, which would otherwise leave this
 * overlay blocking the page indefinitely. A fixed timeout force-hides it
 * regardless of animation state.
 */
export default function PageLoadWipe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let cancelled = false;

    const hideNow = () => {
      if (containerRef.current) containerRef.current.style.display = "none";
    };

    const safety = setTimeout(hideNow, 1500);

    import("gsap").then(({ gsap }) => {
      if (cancelled) return;
      gsap.to(leftRef.current, {
        duration: reduceMotion ? 0 : 0.6,
        delay: reduceMotion ? 0 : 0.15,
        ease: "power3.inOut",
        x: "-100%",
      });
      gsap.to(rightRef.current, {
        duration: reduceMotion ? 0 : 0.6,
        delay: reduceMotion ? 0 : 0.15,
        ease: "power3.inOut",
        x: "100%",
        onComplete: hideNow,
      });
    });

    return () => {
      cancelled = true;
      clearTimeout(safety);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      data-page-wipe
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[100] flex"
    >
      <div ref={leftRef} className="h-full w-1/2 bg-black" />
      <div ref={rightRef} className="h-full w-1/2 bg-black" />
    </div>
  );
}
