"use client";

import { forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary";

export type ButtonProps = HTMLMotionProps<"button"> & {
  variant?: Variant;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    const base =
      "inline-flex min-h-[44px] items-center justify-center rounded-full px-10 py-[14px] font-sans text-[12px] font-medium uppercase tracking-[0.14em] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-espresso";

    const styles: Record<Variant, string> = {
      primary:
        "bg-espresso text-warm-white shadow-sm hover:bg-coffee disabled:cursor-not-allowed disabled:opacity-60",
      secondary:
        "border border-espresso/20 bg-transparent text-espresso hover:border-espresso hover:bg-espresso hover:text-warm-white",
    };

    return (
      <motion.button
        ref={ref}
        type="button"
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
        className={cn(base, styles[variant], className)}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
