import Image from "next/image";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Social Responsibility",
  description:
    "Parham Shariat's personal commitment to mentoring early-stage entrepreneurs.",
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

        <div className="mt-8 flex flex-col gap-8 sm:flex-row sm:items-start">
          <Image
            src="/images/parham-headshot-newport.jpg"
            alt="Parham Shariat"
            width={620}
            height={620}
            className="h-56 w-auto object-cover"
          />
          <div className="border border-dashed border-border p-6 text-base leading-relaxed text-foreground/70">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-foreground/40">
              [[DRAFT — PENDING PARHAM&apos;S REVIEW]]
            </p>
            <p>
              When I was starting out, I didn&apos;t have anyone to tell me
              what I didn&apos;t know. I made expensive mistakes I could have
              avoided if someone further along had just sat me down and given
              me honest advice. That&apos;s stuck with me for twenty-five
              years.
            </p>
            <p className="mt-4">
              Mentoring young and early-stage entrepreneurs is something I do
              because I believe in it personally — not because it&apos;s a
              service I offer through ReTHINK CNERGY. My company works with
              established firms; this is separate, and it&apos;s mine.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
