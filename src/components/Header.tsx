"use client";

import Link from "next/link";
import { useState } from "react";
import { primaryNav, siteConfig } from "@/lib/data/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-invert-bg text-invert-fg">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6"
      >
        <Link
          href="/"
          className="font-display text-lg font-black uppercase tracking-tight"
        >
          {siteConfig.name}
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {primaryNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-xs font-semibold uppercase tracking-widest text-invert-fg/70 transition-colors hover:text-invert-fg"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="flex items-center gap-2 border border-invert-fg/40 px-3 py-2 text-xs font-semibold uppercase tracking-widest md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <ul
          id="mobile-nav"
          className="flex flex-col gap-1 border-t border-invert-fg/20 px-4 pb-4 md:hidden"
        >
          {primaryNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block px-2 py-3 text-base font-semibold uppercase tracking-wide text-invert-fg/90 hover:text-invert-fg"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
