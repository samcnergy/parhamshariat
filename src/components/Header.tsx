"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { primaryNav, siteConfig } from "@/lib/data/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const transparentCapable = pathname === "/";

  useEffect(() => {
    if (!transparentCapable) return;
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparentCapable]);

  const isDark = !transparentCapable || scrolled || open;

  return (
    <header
      className={`top-0 z-50 w-full transition-colors duration-300 ${
        transparentCapable ? "fixed" : "sticky"
      } ${isDark ? "bg-black text-white" : "bg-transparent text-white"}`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6"
      >
        <Link href="/" className="font-display text-lg uppercase tracking-tight">
          {siteConfig.name}
        </Link>

        <ul className="hidden items-center md:flex">
          {primaryNav.map((item, i) => (
            <li key={item.href} className="eyebrow">
              <Link
                href={item.href}
                className="text-white/80 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
              {i < primaryNav.length - 1 && (
                <span aria-hidden="true" className="mr-2 text-white/50">
                  ,
                </span>
              )}
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="eyebrow flex items-center gap-2 border border-white/40 px-3 py-2 md:hidden"
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
          className="flex flex-col gap-1 border-t border-white/20 bg-black px-4 pb-4 md:hidden"
        >
          {primaryNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block px-2 py-3 text-base uppercase tracking-wide text-white/90 hover:text-white"
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
