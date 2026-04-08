"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { easeEditorial } from "@/lib/motion";
import { siteImages } from "@/lib/site-images";

export function Menu() {
  return (
    <section
      id="kueche"
      className="scroll-mt-28 bg-sage-mist py-section-sm md:py-section"
    >
      <div className="mx-auto max-w-container px-6 md:px-10">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: easeEditorial }}
        >
          <p className="label-caps text-espresso/60">Die Küche</p>
          <h2 className="mt-4 font-display text-section-title font-medium tracking-tight text-espresso">
            Wie schmeckt foodz?
          </h2>
          <p className="mt-8 font-sans text-[17px] leading-[1.75] text-coffee">
            Unsere Küche ist ein kulinarisches Erlebnis aus vielen Geschmäckern,
            Traditionen und Ländern. Im Mittelpunkt stehen gesunde Zutaten aus
            allen Regionen der Welt, ausgewählt nach Frische und Saison. Wir
            experimentieren ständig mit neuen Ideen und entwickeln unsere
            eigene Rezepte. Unsere Inspiration ist die Küche des Mittelmeeres und
            des nahen Ostens – doch wir sind auf allen Kontinenten zu Hause.
          </p>
        </motion.div>

        <motion.div
          className="relative mx-auto mt-14 aspect-[16/9] max-w-4xl overflow-hidden rounded-3xl shadow-card ring-1 ring-espresso/10 md:mt-20 md:aspect-[2/1]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: easeEditorial }}
        >
          <Image
            src={siteImages.grainSalads}
            alt="Zwei Schalen mit Kräuter-Salat und Quinoa"
            fill
            className="object-cover object-center"
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </motion.div>
      </div>
    </section>
  );
}
