import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Social Responsibility",
  description:
    "Parham Shariat's personal commitments and causes outside of his business and writing work.",
  alternates: { canonical: "/social-responsibility" },
};

export default function SocialResponsibilityPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ name: "Social Responsibility", path: "/social-responsibility" }]}
      />

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h1 className="font-display text-4xl font-black uppercase tracking-tight sm:text-5xl">
          Social Responsibility
        </h1>
        <div className="mt-6 border border-dashed border-border p-6 text-base text-foreground/60">
          [[PLACEHOLDER — DO NOT PUBLISH]] This page is reserved for
          Parham&apos;s personal commitments and causes, written in his own
          words. Content pending.
        </div>
      </section>
    </>
  );
}
