import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "border border-stone bg-warm-white p-10 shadow-warm",
        className
      )}
      {...props}
    />
  );
}
