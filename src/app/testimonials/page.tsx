import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
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
        <h1 className="font-display text-4xl font-black uppercase tracking-tight sm:text-5xl">
          Results &amp; Testimonials
        </h1>

        <dl className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2">
          {proofPoints.map((point) => (
            <div key={point.label} className="bg-background p-6">
              <dt className="font-display text-3xl font-black tracking-tight">
                {point.stat}
              </dt>
              <dd className="mt-2 text-sm text-foreground/70">
                {point.label}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 border border-dashed border-border p-6 text-base text-foreground/60">
          [[PLACEHOLDER — DO NOT PUBLISH]] Client testimonials pending from
          Parham.
        </div>
      </section>
    </>
  );
}
