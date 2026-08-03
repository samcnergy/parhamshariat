/**
 * Repeating horizontal scroll of text, pauses on hover, disabled entirely
 * for prefers-reduced-motion (see .marquee-track rules in globals.css).
 * Server-renderable — the text is always present in the HTML; only the
 * CSS animation is conditional.
 */
export default function Marquee({
  text,
  variant = "light",
  reverse = false,
}: {
  text: string;
  variant?: "light" | "dark";
  reverse?: boolean;
}) {
  const bg = variant === "dark" ? "bg-black text-white" : "bg-white text-black";
  return (
    <div className={`overflow-hidden border-y border-current/20 py-6 ${bg}`}>
      <div
        className="marquee-track flex w-max whitespace-nowrap"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {[0, 1].map((i) => (
          <span
            key={i}
            aria-hidden={i === 1}
            className="flex shrink-0 items-center px-6 font-display text-display-l uppercase sm:text-display-xl"
          >
            {Array.from({ length: 6 }).map((_, j) => (
              <span key={j} className="px-6">
                {text}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
