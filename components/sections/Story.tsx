"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { easeEditorial } from "@/lib/motion";
import { siteImages } from "@/lib/site-images";

function Block({
  title,
  id,
  children,
  after,
}: {
  title: string;
  id?: string;
  children: ReactNode;
  after?: ReactNode;
}) {
  return (
    <>
      <motion.section
        id={id}
        className="scroll-mt-28 py-section-sm md:py-section"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.75, ease: easeEditorial }}
      >
        <div className="mx-auto max-w-container px-6 md:px-10">
          <h2 className="font-display text-section-title font-medium tracking-tight text-espresso">
            {title}
          </h2>
          <div className="mt-8 max-w-3xl font-sans text-[17px] leading-[1.75] text-coffee">
            {children}
          </div>
        </div>
      </motion.section>
      {after}
    </>
  );
}

export function Story() {
  return (
    <>
      <Block title="Für wen ist foodz?" id="fuer-wen">
        <p>
          Für Menschen, denen gutes Essen wichtig ist. Für Individualisten und
          Geniesser. Privat oder Business. Wir sind flexibel, zuverlässig und
          passen uns an. Wir überraschen und begeistern.
        </p>
      </Block>

      <Block
        id="was-liefert"
        title="Was liefert foodz?"
        after={
          <div className="bg-blush/80">
            <div className="mx-auto max-w-container px-6 py-12 md:px-10 md:py-16">
              <div className="relative mx-auto aspect-[4/3] max-w-3xl overflow-hidden rounded-3xl shadow-card ring-1 ring-stone/40 md:aspect-[16/9]">
                <Image
                  src={siteImages.flatlaySpread}
                  alt="Auswahl an Speisen: mariniertes Fleisch, Linsen und Couscous"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
            </div>
          </div>
        }
      >
        <p>
          Je nach Anlass entwerfen wir kreative Catering-Menüs aus Fingerfoods,
          Snacks, Salaten, kleinen Mahlzeiten und Desserts. foodz ist gutes
          Essen – und ein neues Erlebnis.
        </p>
      </Block>

      <motion.section
        id="woher"
        className="scroll-mt-28 bg-sage-mist/50 py-section-sm md:py-section"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.75, ease: easeEditorial }}
      >
        <div className="mx-auto max-w-container px-6 md:px-10">
          <h2 className="font-display text-section-title font-medium tracking-tight text-espresso">
            Woher kommt foodz?
          </h2>
          <div className="mt-8 max-w-3xl font-sans text-[17px] leading-[1.75] text-coffee">
            <p>
              Beheimatet in der mediterran-orientalischen Küche, steht foodz
              für vielseitigen und gleichzeitig ausgewählten Geschmack – gutes
              Essen aus gesunden und frischen Zutaten. Mit Expertise aus
              verschiedenen Traditionen und Ländern setzt foodz seine Ideen
              ausschließlich mit saisonalen Lebensmitteln um – vom Menu bis zu
              kleinen Mahlzeiten, sowie Salaten, Sandwiches und Desserts.
            </p>
          </div>
          <div className="relative mx-auto mt-14 aspect-[16/9] max-w-4xl overflow-hidden rounded-3xl shadow-card ring-1 ring-espresso/10 md:mt-16 md:aspect-[2/1]">
            <Image
              src={siteImages.pomegranates}
              alt="Frische Granatäpfel auf dem Markt"
              fill
              className="object-cover object-center"
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>
        </div>
      </motion.section>
    </>
  );
}
