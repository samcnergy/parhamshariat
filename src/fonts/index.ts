import localFont from "next/font/local";
import { Fraunces } from "next/font/google";

// Switzer (Fontshare, free for personal + commercial use) — closest free
// analog to Suisse International. Regular weight only, per design spec:
// size does the work, not boldness.
export const switzer = localFont({
  src: "./switzer/switzer-regular.woff2",
  variable: "--font-switzer",
  weight: "400",
  display: "swap",
});

// Fraunces (Google Fonts, free) — closest free analog to Reckless for the
// editorial serif / pull-quote treatment.
export const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});
