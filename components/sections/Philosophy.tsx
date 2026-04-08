"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { siteImages } from "@/lib/site-images";

export function Philosophy() {
  return (
    <section
      id="philosophie"
      className="scroll-mt-28 py-section-sm md:py-section"
    >
      <div className="mx-auto max-w-container px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14 lg:items-center">
          <motion.div
            className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-card ring-1 ring-stone/30 lg:col-span-5 lg:aspect-auto lg:min-h-[460px]"
            {...fadeUp}
          >
            <Image
              src={siteImages.bruschetta}
              alt="Handgemachtes Crostini mit Kräutern und frischen Zutaten"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
          </motion.div>

          <div className="lg:col-span-7 lg:pl-4">
            <motion.p
              className="label-caps text-espresso/70"
              {...fadeUp}
            >
              Philosophie
            </motion.p>
            <motion.h2
              className="mt-4 font-display text-section-title font-medium tracking-tight text-espresso"
              {...fadeUp}
            >
              Was macht foodz besonders?
            </motion.h2>
            <motion.div
              className="mt-8 space-y-6 font-sans text-[17px] leading-[1.75] text-coffee"
              {...fadeUp}
            >
              <p>
                Für uns zählt Ehrlichkeit und Gefühl für guten Geschmack. In
                unserer Küche zelebrieren wir gutes Essen. Deshalb bestehen
                unsere Rezepte nur aus absolut gesunden Zutaten und werden mit
                viel Liebe fürs Detail umgesetzt. Jedes Gericht wird
                frischzubereitet. Das ist unsere Philosophie und unser Weg. Wir
                finden, gutes Essen verträgt keine Abkürzung.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
