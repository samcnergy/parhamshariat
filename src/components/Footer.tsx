import Link from "next/link";
import { footerNav, siteConfig } from "@/lib/data/site";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Link
          href="/books"
          className="block font-display text-display-l uppercase leading-[0.85] tracking-tight transition-opacity hover:opacity-70 sm:text-display-xl"
        >
          Read the
          <br />
          Books
        </Link>

        <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/15 pt-8 eyebrow">
          {footerNav.map((item, i) => (
            <span key={item.href} className="flex items-center">
              <Link href={item.href} className="text-white/70 hover:text-white">
                {item.label}
              </Link>
              {i < footerNav.length - 1 && (
                <span aria-hidden="true" className="ml-6 text-white/30">
                  /
                </span>
              )}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4 text-sm">
          {siteConfig.social.linkedin && (
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-white/30 underline-offset-4 hover:decoration-white"
            >
              LinkedIn
            </a>
          )}
          {siteConfig.social.instagram && (
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-white/30 underline-offset-4 hover:decoration-white"
            >
              Instagram
            </a>
          )}
          {siteConfig.social.amazonAuthor && (
            <a
              href={siteConfig.social.amazonAuthor}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-white/30 underline-offset-4 hover:decoration-white"
            >
              Amazon
            </a>
          )}
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/15 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <Link href="/privacy" className="hover:text-white">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
