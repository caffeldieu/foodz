import { cn } from "@/lib/utils";

/** Minimal spiral mark echoing FoodZ branding */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("shrink-0 text-espresso", className)}
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M16 4c6.6 0 12 5.4 12 12 0 4.1-2 7.7-5.1 9.9-.8.5-1.7-.4-1.2-1.2 2.7-1.8 4.3-4.8 4.3-8.2 0-5.5-4.5-10-10-10S6 10.5 6 16c0 3.4 1.6 6.4 4.3 8.2.5.8-.4 1.7-1.2 1.2C6 23.7 4 20.1 4 16 4 9.4 9.4 4 16 4Zm0 6c3.3 0 6 2.7 6 6 0 2.1-1.1 4-2.7 5.1-.7.5-1.6-.3-1.1-1 1.2-.8 2-2.2 2-3.7 0-2.5-2-4.5-4.5-4.5S11 13.5 11 16c0 1.5.8 2.9 2 3.7.5.7-.4 1.5-1.1 1-1.7-1.1-2.7-3-2.7-5.1 0-3.3 2.7-6 6-6Z"
      />
    </svg>
  );
}

export function LogoWordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-display text-xl font-medium tracking-[0.02em] text-espresso sm:text-2xl",
        className
      )}
    >
      foodz
    </span>
  );
}
