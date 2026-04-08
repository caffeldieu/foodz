"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { LogoMark, LogoWordmark } from "@/components/Logo";
import { cn, scrollToInquiry } from "@/lib/utils";

const nav = [
  { href: "#kueche", label: "Menü" },
  { href: "#philosophie", label: "Über uns" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-40 transition-[box-shadow,border-color] duration-300",
        scrolled
          ? "border-b border-stone/50 bg-warm-white/95 shadow-card backdrop-blur-md"
          : "border-b border-stone/25 bg-warm-white/85 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex max-w-container items-center justify-between gap-6 px-6 py-4 md:px-10 md:py-5">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <LogoMark className="h-8 w-8" />
          <LogoWordmark className="text-lg sm:text-xl" />
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Hauptnavigation">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="label-caps text-walnut transition-colors hover:text-espresso"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            variant="primary"
            className="!py-3 !px-6"
            onClick={() => scrollToInquiry()}
          >
            Anfrage senden
          </Button>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center text-espresso md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Menü</span>
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-stone/50 bg-warm-white px-6 py-6 md:hidden"
        >
          <nav className="flex flex-col gap-4" aria-label="Mobile Navigation">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="label-caps text-coffee"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              variant="primary"
              className="mt-2 w-full"
              onClick={() => {
                setOpen(false);
                scrollToInquiry();
              }}
            >
              Anfrage senden
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
