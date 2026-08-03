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
            className="h-[42rem] w-auto object-cover"
          />
          <div className="text-base leading-relaxed text-foreground/80">
            <p>
              When I was starting out, I had the privilege of having a few
              great people to tell me what I didn&apos;t know. I also made
              expensive mistakes I could have avoided if I listened to
              advice. That&apos;s stuck with me for twenty-five years.
            </p>
            <p className="mt-4">
              Mentoring young and early-stage entrepreneurs is something I
              like to do because I believe in it personally — not because
              it&apos;s a service I offer through ReTHINK CNERGY. My company
              works with established firms; this is separate, and it&apos;s
              mine.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
