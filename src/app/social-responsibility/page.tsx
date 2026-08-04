import Image from "next/image";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/data/site";

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

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <Reveal>
          <h1 className="text-display-m sm:text-display-l">
            Social Responsibility
          </h1>
        </Reveal>

        <Reveal className="mt-12 grid items-center gap-14 md:grid-cols-2">
          <Image
            src="/images/parham-headshot-glasses-2.png"
            alt="Parham Shariat"
            width={2000}
            height={2727}
            className="mx-auto w-full max-w-sm rotate-[2deg] object-cover shadow-xl"
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

            <div className="mt-6 space-y-2">
              <p>
                <a
                  href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("Mentorship — I need help")}`}
                  className="underline decoration-border underline-offset-4 hover:decoration-foreground"
                >
                  Tell me what you need help with →
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("Mentorship — I can help a startup")}`}
                  className="underline decoration-border underline-offset-4 hover:decoration-foreground"
                >
                  Tell me how you can help a startup →
                </a>
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
