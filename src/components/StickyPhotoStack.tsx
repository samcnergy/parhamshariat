"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

type StackImage = {
  src: string;
  alt: string;
};

/**
 * Pins a headline in place via position: sticky while a sequence of images
 * scrolls/cross-fades behind it, tied to scroll progress (GSAP ScrollTrigger
 * with scrub). Falls back to a simple stacked layout with no pinning for
 * prefers-reduced-motion and for the initial no-JS render.
 */
export default function StickyPhotoStack({
  images,
  headline,
}: {
  images: StackImage[];
  headline: React.ReactNode;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let cancelled = false;
    let trigger: { kill: () => void } | undefined;

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ gsap }, { ScrollTrigger }]) => {
        if (cancelled || !wrapperRef.current) return;
        gsap.registerPlugin(ScrollTrigger);

        const slides = imageRefs.current.filter(Boolean) as HTMLDivElement[];
        gsap.set(slides, { opacity: 0 });
        gsap.set(slides[0], { opacity: 1 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.6,
          },
        });

        slides.forEach((slide, i) => {
          if (i === 0) return;
          tl.to(slides[i - 1], { opacity: 0, duration: 0.4 }, i - 0.6);
          tl.to(slide, { opacity: 1, duration: 0.4 }, i - 0.6);
        });

        trigger = tl.scrollTrigger;
      },
    );

    return () => {
      cancelled = true;
      trigger?.kill();
    };
  }, [images.length]);

  return (
    <div
      ref={wrapperRef}
      className="relative bg-black"
      style={{ height: `${Math.max(images.length, 1) * 60}vh` }}
    >
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        {images.map((image, i) => (
          <div
            key={image.src}
            ref={(node) => {
              imageRefs.current[i] = node;
            }}
            className={`absolute inset-0 ${i === 0 ? "opacity-70" : "opacity-0"}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover object-top"
              sizes="100vw"
            />
          </div>
        ))}
        <div className="relative z-10 px-6 text-center text-white">
          {headline}
        </div>
      </div>
    </div>
  );
}
