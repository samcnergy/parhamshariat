"use client";

import { useEffect, useRef } from "react";

/**
 * Wraps a group of direct-child elements and fades/slides them in one after
 * another (staggered) as the group enters the viewport, via GSAP
 * ScrollTrigger. Children are visible by default in the server-rendered
 * HTML — GSAP only animates the transform/opacity for JS-enabled visual
 * browsers, and prefers-reduced-motion skips the animation entirely.
 */
export default function StaggerReveal({
  children,
  className = "",
  stagger = 0.12,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = Array.from(el.children);
    if (items.length === 0) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let cancelled = false;
    let trigger: { kill: () => void } | undefined;
    let revealed = false;

    // Hard fallback: sets the final state directly via the DOM, bypassing
    // GSAP/rAF entirely. A GSAP tween can itself stall mid-animation if rAF
    // ticks stop arriving partway through, so the safety net can't
    // delegate to another tween — it has to be synchronous.
    const revealInstantly = () => {
      if (revealed) return;
      revealed = true;
      items.forEach((item) => {
        const el = item as HTMLElement;
        el.style.transition = "opacity 0.3s ease-out, transform 0.3s ease-out";
        el.style.opacity = "1";
        el.style.transform = "none";
      });
    };

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ gsap }, { ScrollTrigger }]) => {
        if (cancelled) return;
        gsap.registerPlugin(ScrollTrigger);
        gsap.set(items, { opacity: 0, y: 24 });

        const revealAnimated = () => {
          if (revealed) return;
          revealed = true;
          gsap.to(items, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            stagger,
          });
          // If this tween stalls (rAF starved mid-flight), snap to the end
          // state once its expected duration has passed.
          setTimeout(revealInstantly, 1200);
        };

        trigger = ScrollTrigger.create({
          trigger: el,
          start: "top 85%",
          once: true,
          onEnter: revealAnimated,
        });

        // Safety net: see Reveal.tsx for why ScrollTrigger's rAF-driven
        // callback can silently never fire in a backgrounded tab.
        setTimeout(revealInstantly, 3000);
      },
    );

    return () => {
      cancelled = true;
      trigger?.kill();
    };
  }, [stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
