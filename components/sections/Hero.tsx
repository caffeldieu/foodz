"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { easeEditorial } from "@/lib/motion";
import { scrollToInquiry } from "@/lib/utils";
import { siteImages } from "@/lib/site-images";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-24 md:pt-28">
      <div className="mx-auto max-w-container px-4 pb-16 md:px-8 md:pb-24 lg:px-10">
        <motion.div
          className="relative overflow-hidden rounded-[1.75rem] shadow-lift md:rounded-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeEditorial }}
        >
          <div className="relative min-h-[min(78vh,720px)] w-full md:min-h-[min(82vh,820px)]">
            <Image
              src={siteImages.heroCatering}
              alt="Catering-Buffet von foodz: frisch zubereitete Speisen"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1400px) 100vw, 1400px"
            />
            <div
              className="absolute inset-0 bg-gradient-to-b from-espresso/65 via-espresso/20 to-transparent"
              aria-hidden
            />
            <div className="absolute inset-0 flex flex-col items-center justify-start px-6 pt-16 text-center md:pt-24">
              <motion.h1
                className="max-w-3xl font-display text-display-hero font-medium tracking-tight text-warm-white text-balance drop-shadow-sm"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.2, ease: easeEditorial }}
              >
                foodz . fresh handcrafted . catering
              </motion.h1>
              <motion.p
                className="mt-5 max-w-md font-sans text-[15px] font-normal leading-relaxed text-warm-white/90 md:text-base"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.4, ease: easeEditorial }}
              >
                Ehrlichkeit, Saison und Liebe fürs Detail — für Geniesser und
                besondere Anlässe.
              </motion.p>
              <motion.div
                className="mt-10"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.55, ease: easeEditorial }}
              >
                <Button
                  variant="primary"
                  className="!bg-warm-white !text-espresso hover:!bg-blush hover:!text-espresso"
                  onClick={() => scrollToInquiry()}
                >
                  Anfrage senden
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.a
          href="#philosophie"
          className="mt-12 inline-flex w-full flex-col items-center gap-1 text-walnut transition-colors hover:text-espresso"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          aria-label="Weiter scrollen"
        >
          <span className="label-caps !text-walnut">Entdecken</span>
          <ChevronDown className="h-5 w-5 animate-bounce opacity-80" />
        </motion.a>
      </div>
    </section>
  );
}
