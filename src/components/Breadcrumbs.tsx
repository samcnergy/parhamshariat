import Link from "next/link";
import JsonLd from "./JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export type Crumb = { name: string; path: string };

export default function Breadcrumbs({
  items,
  variant = "light",
}: {
  items: Crumb[];
  variant?: "light" | "dark";
}) {
  const trail: Crumb[] = [{ name: "Home", path: "/" }, ...items];
  const isDark = variant === "dark";

  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-4 pt-6 sm:px-6">
      <JsonLd data={breadcrumbSchema(trail)} />
      <ol
        className={`flex flex-wrap items-center gap-1 text-sm ${
          isDark ? "text-invert-fg/50" : "text-foreground/60"
        }`}
      >
        {trail.map((crumb, index) => (
          <li key={crumb.path} className="flex items-center gap-1">
            {index > 0 && <span aria-hidden="true">/</span>}
            {index === trail.length - 1 ? (
              <span
                aria-current="page"
                className={isDark ? "text-invert-fg" : "text-foreground"}
              >
                {crumb.name}
              </span>
            ) : (
              <Link
                href={crumb.path}
                className={isDark ? "hover:text-invert-fg" : "hover:text-foreground"}
              >
                {crumb.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
