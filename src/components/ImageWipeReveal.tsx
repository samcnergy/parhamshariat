"use client";

import { useEffect, useRef } from "react";
import Image, { type ImageProps } from "next/image";

/**
 * An image sits under a solid-color mask that slides away on scroll to
 * reveal it, rather than a simple fade-in. The image itself is always
 * present in the HTML for crawlers; the mask is a purely visual overlay
 * for JS-enabled visual browsers, removed instantly for reduced motion.
 */
export default function ImageWipeReveal({
  alt,
  maskColor = "bg-black",
  imageClassName = "",
  containerClassName = "",
  ...imageProps
}: Omit<ImageProps, "className"> & {
  maskColor?: string;
  imageClassName?: string;
  containerClassName?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const mask = maskRef.current;
    if (!container || !mask) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      mask.style.display = "none";
      return;
    }

    let cancelled = false;
    let trigger: { kill: () => void } | undefined;
    let revealed = false;

    // Hard fallback: sets the final state directly via the DOM, bypassing
    // GSAP/rAF entirely. A GSAP tween can itself stall mid-animation if rAF
    // ticks stop arriving partway through (e.g. the tab loses focus right
    // as it starts), so the safety net can't delegate to another tween —
    // it has to be synchronous.
    const revealInstantly = () => {
      if (revealed) return;
      revealed = true;
      mask.style.transition = "transform 0.3s ease-out";
      mask.style.transform = "translateX(100%)";
    };

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ gsap }, { ScrollTrigger }]) => {
        if (cancelled) return;
        gsap.registerPlugin(ScrollTrigger);

        const revealAnimated = () => {
          if (revealed) return;
          revealed = true;
          gsap.to(mask, {
            xPercent: 100,
            duration: 0.9,
            ease: "power3.inOut",
          });
          // If this specific tween stalls (rAF starved mid-flight), snap
          // to the end state once its expected duration has passed.
          setTimeout(revealInstantly, 1200);
        };

        trigger = ScrollTrigger.create({
          trigger: container,
          start: "top 80%",
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
  }, []);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${containerClassName}`}>
      <Image {...imageProps} alt={alt} className={imageClassName} />
      <div ref={maskRef} className={`absolute inset-0 ${maskColor}`} />
    </div>
  );
}
