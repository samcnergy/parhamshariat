import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming speaking engagements and events with Parham Shariat.",
  alternates: { canonical: "/events" },
};

export default function EventsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Events", path: "/events" }]} />

      <Reveal as="section" className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h1 className="text-display-m sm:text-display-l">Events</h1>
        <div className="mt-6 border border-dashed border-border p-6 text-base text-grey-1">
          [[PLACEHOLDER — DO NOT PUBLISH]] No events scheduled yet. Content
          pending from Parham.
        </div>
        <Link
          href="/contact"
          className="eyebrow mt-8 inline-block bg-foreground px-7 py-3.5 text-background transition-all duration-200 hover:-translate-y-0.5 hover:opacity-85 active:translate-y-0"
        >
          Inquire About Booking Parham
        </Link>
      </Reveal>
    </>
  );
}
