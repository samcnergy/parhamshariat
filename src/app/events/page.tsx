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
        <p className="mt-4 text-base text-foreground/80">
          No events currently scheduled. Check back soon, or reach out to
          inquire about booking Parham for your event.
        </p>
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
