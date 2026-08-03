import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import StaggerReveal from "@/components/StaggerReveal";
import { proofPoints } from "@/lib/data/author";

export const metadata: Metadata = {
  title: "Results & Testimonials",
  description:
    "Measured results from Parham Shariat's Generative Engine Optimization framework, and client testimonials.",
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Testimonials", path: "/testimonials" }]} />

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <Reveal>
          <h1 className="text-display-m sm:text-display-l">
            Results &amp; Testimonials
          </h1>
        </Reveal>

        <StaggerReveal className="mt-10 grid gap-px border-t border-l border-border sm:grid-cols-2">
          {proofPoints.map((point) => (
            <div key={point.label} className="border-r border-b border-border bg-background p-6">
              <p className="text-display-xs">{point.stat}</p>
              <p className="mt-2 text-sm text-grey-1">{point.label}</p>
            </div>
          ))}
        </StaggerReveal>

        <Reveal className="mt-10 border border-dashed border-border p-6 text-base text-grey-1">
          [[PLACEHOLDER — DO NOT PUBLISH]] Client testimonials pending from
          Parham.
        </Reveal>
      </section>
    </>
  );
}
