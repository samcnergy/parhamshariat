/** Small decorative emblem with a slow continuous rotation — a recurring accent near headlines, never a primary element. */
export default function SpinningMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      aria-hidden="true"
      className={`spin-slow h-8 w-8 ${className}`}
    >
      <path
        d="M20 2 L23 17 L38 20 L23 23 L20 38 L17 23 L2 20 L17 17 Z"
        fill="currentColor"
      />
    </svg>
  );
}
