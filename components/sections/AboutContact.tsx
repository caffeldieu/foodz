"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { easeEditorial } from "@/lib/motion";

export function AboutContact() {
  return (
    <section
      id="kontakt"
      className="scroll-mt-28 bg-blush py-section-sm md:py-section"
    >
      <div className="mx-auto max-w-container px-6 md:px-10">
        <motion.div
          className="mx-auto max-w-2xl rounded-4xl bg-warm-white/80 px-8 py-12 text-center shadow-card ring-1 ring-stone/30 backdrop-blur-sm md:px-14 md:py-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: easeEditorial }}
        >
          <p className="label-caps text-espresso/55">Kontakt</p>
          <h2 className="mt-4 font-display text-2xl font-medium tracking-tight text-espresso md:text-4xl">
            Mehr info zu foodz?
          </h2>
          <p className="mt-6 font-display text-lg font-normal text-coffee md:text-xl">
            foodz . fresh handcrafted . catering
          </p>
          <div className="mt-10 space-y-1 font-sans text-coffee leading-relaxed">
            <p className="text-espresso">Gideon Ziper</p>
            <p>myliusstraße 15</p>
            <p>60323 frankfurt</p>
          </div>
          <p className="mt-10 font-sans text-espresso">foodz persönlich</p>
          <address className="mt-6 not-italic">
            <div className="mx-auto inline-block text-left font-mono text-sm leading-8 text-coffee md:text-base">
              <p>
                <span>t     </span>
                <a
                  href="tel:+49695602689"
                  className="border-b border-stone pb-0.5 hover:border-terracotta"
                >
                  +49 (0) 69 560 2689
                </a>
              </p>
              <p>
                <span>m   </span>
                <a
                  href="tel:+491624071186"
                  className="border-b border-stone pb-0.5 hover:border-terracotta"
                >
                  +49 (0) 162 407 1186
                </a>
              </p>
              <p>
                <span>e     </span>
                <a
                  href="mailto:info@foodz.de"
                  className="border-b border-stone pb-0.5 hover:border-terracotta"
                >
                  info@foodz.de
                </a>
              </p>
            </div>
          </address>
          <p className="mt-12 font-sans text-sm text-coffee">
            <Link
              href="/impressum"
              className="border-b border-stone pb-0.5 hover:border-terracotta"
            >
              Impressum
            </Link>
            <span> & </span>
            <Link
              href="/datenschutz"
              className="border-b border-stone pb-0.5 hover:border-terracotta"
            >
              Datenschutzerklärung
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
