import type { Metadata } from "next";
import "./globals.css";
import { switzer, fraunces } from "@/fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SkipLink from "@/components/SkipLink";
import JsonLd from "@/components/JsonLd";
import PageLoadWipe from "@/components/PageLoadWipe";
import { personSchema, organizationSchema } from "@/lib/schema";
import { siteConfig, siteUrl } from "@/lib/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.positioning,
  authors: [{ name: siteConfig.name, url: `${siteUrl}/about` }],
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.positioning,
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.positioning,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${switzer.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <noscript>
          <style>{`[data-reveal] { opacity: 1 !important; transform: none !important; } [data-page-wipe] { display: none !important; }`}</style>
        </noscript>
        <JsonLd data={personSchema()} />
        <JsonLd data={organizationSchema()} />
        <PageLoadWipe />
        <SkipLink />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
