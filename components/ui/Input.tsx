import { cn } from "@/lib/utils";
import { forwardRef, type InputHTMLAttributes } from "react";

export const inputClass =
  "w-full rounded-xl border border-stone/80 bg-warm-white px-5 py-4 font-sans text-[15px] text-espresso shadow-inner shadow-stone/10 placeholder:text-walnut/70 transition-[border-color,box-shadow] focus:border-coffee focus:outline-none focus:ring-2 focus:ring-coffee/15";

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement> & { error?: string }
>(({ className, error, id, ...props }, ref) => (
  <div className="w-full">
    <input ref={ref} id={id} className={cn(inputClass, error && "border-error", className)} {...props} />
    {error ? (
      <p className="mt-1 font-sans text-[13px] text-error" role="alert">
        {error}
      </p>
    ) : null}
  </div>
));

Input.displayName = "Input";
