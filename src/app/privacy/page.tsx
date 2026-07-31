import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for parhamshariat.com.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Privacy Policy", path: "/privacy" }]} />

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h1 className="font-display text-4xl font-black uppercase tracking-tight sm:text-5xl">
          Privacy Policy
        </h1>

        <div className="mt-6 space-y-6 text-base text-foreground/80">
          <p>
            This site collects only the information you choose to submit
            through the contact form on this website: your name, email
            address, reason for contact, and message. That information is
            stored securely in a Supabase database and used solely to respond
            to your inquiry.
          </p>
          <p>
            This site does not sell or share your information with third
            parties, and does not use advertising trackers or third-party
            analytics cookies.
          </p>
          <p>
            If you have questions about this policy or want your contact
            form submission deleted, email{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="underline decoration-border underline-offset-4 hover:decoration-foreground"
            >
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
