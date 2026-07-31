import Link from "next/link";
import { footerNav, siteConfig } from "@/lib/data/site";

export default function Footer() {
  return (
    <footer className="bg-invert-bg text-invert-fg">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="font-display text-2xl font-black uppercase tracking-tight sm:text-3xl">
          {siteConfig.name}
        </p>

        <div className="mt-10 grid gap-10 md:grid-cols-3">
          <div>
            <p className="max-w-sm text-sm text-invert-fg/70">
              {siteConfig.positioning}
            </p>
            <ul className="mt-4 flex gap-4 text-sm">
              {siteConfig.social.linkedin && (
                <li>
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-invert-fg/30 underline-offset-4 hover:decoration-invert-fg"
                  >
                    LinkedIn
                  </a>
                </li>
              )}
              {siteConfig.social.instagram && (
                <li>
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-invert-fg/30 underline-offset-4 hover:decoration-invert-fg"
                  >
                    Instagram
                  </a>
                </li>
              )}
              {siteConfig.social.amazonAuthor && (
                <li>
                  <a
                    href={siteConfig.social.amazonAuthor}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-invert-fg/30 underline-offset-4 hover:decoration-invert-fg"
                  >
                    Amazon
                  </a>
                </li>
              )}
            </ul>
          </div>

          <nav aria-label="Footer">
            <p className="text-xs font-semibold uppercase tracking-widest text-invert-fg/50">
              Site
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-invert-fg/80 hover:text-invert-fg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-invert-fg/50">
              Elsewhere
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href={siteConfig.external.rethinkCnergy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-invert-fg/80 hover:text-invert-fg"
                >
                  ReTHINK CNERGY
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.external.powerfulBlueprints}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-invert-fg/80 hover:text-invert-fg"
                >
                  Powerful Blueprints
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.external.siteMarketing}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-invert-fg/80 hover:text-invert-fg"
                >
                  SiteMarketing
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.substack}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-invert-fg/80 hover:text-invert-fg"
                >
                  AI Search Insider (Newsletter)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-invert-fg/15 pt-6 text-xs text-invert-fg/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <Link href="/privacy" className="hover:text-invert-fg">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
