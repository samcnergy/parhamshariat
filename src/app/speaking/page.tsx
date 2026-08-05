import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Speaking, Podcasts & Interviews",
  description:
    "Parham Shariat is open to collaborating on speaking engagements, podcast appearances, and interviews about business strategy, AI search, and entrepreneurship.",
  alternates: { canonical: "/speaking" },
};

export default function SpeakingPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Speaking & Media", path: "/speaking" }]} />

      <Reveal as="section" className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h1 className="text-display-m sm:text-display-l">
          Speaking, Podcasts &amp; Interviews
        </h1>
        <p className="mt-4 text-base text-foreground/80">
          Parham is open to collaborating on speaking engagements, podcast
          appearances, and interviews, drawing on the ideas behind his
          books: business strategy, building companies across three
          continents, and how AI is reshaping how businesses get found.
        </p>
        <div className="mt-6 border border-dashed border-border p-6 text-base text-grey-1">
          [[PLACEHOLDER: DO NOT PUBLISH]] Past engagements and specific
          topic lists pending from Parham.
        </div>
        <Link
          href="/contact"
          className="eyebrow mt-8 inline-block bg-foreground px-7 py-3.5 text-background transition-opacity hover:opacity-85"
        >
          Get in Touch
        </Link>
      </Reveal>
    </>
  );
}
