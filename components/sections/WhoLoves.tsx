"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { easeEditorial } from "@/lib/motion";
import { siteImages } from "@/lib/site-images";
import { cn } from "@/lib/utils";

function PhotoCard({
  src,
  alt,
  className,
  sizes,
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl shadow-card ring-1 ring-stone/25",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-center"
        sizes={sizes}
        priority={priority}
      />
    </div>
  );
}

export function WhoLoves() {
  return (
    <>
      <motion.section
        id="wer-liebt"
        className="scroll-mt-28 py-section-sm md:py-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.75, ease: easeEditorial }}
      >
        <div className="mx-auto max-w-container px-6 md:px-10">
          <p className="label-caps text-espresso/55">Impressionen</p>
          <h2 className="mt-4 font-display text-section-title font-medium tracking-tight text-espresso">
            Wer liebt foodz?
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3 md:gap-6">
            <PhotoCard
              src={siteImages.strawberries}
              alt="Frische Erdbeeren"
              className="min-h-[200px] md:min-h-[260px]"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <PhotoCard
              src={siteImages.vegetablesYogurt}
              alt="Gebratenes Gemüse auf cremigem Joghurt"
              className="min-h-[200px] md:min-h-[260px] md:translate-y-4"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <PhotoCard
              src={siteImages.beach}
              alt="Inspiration: Küste und Handwerk"
              className="min-h-[200px] md:min-h-[260px]"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
      </motion.section>

      <div className="bg-warm-white py-10 md:py-14">
        <div className="mx-auto max-w-container px-6 md:px-10">
          <PhotoCard
            src={siteImages.oliveStillLife}
            alt="Olivenöl und frische Zutaten"
            className="mx-auto aspect-[2.2/1] max-w-4xl md:aspect-[2.5/1]"
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </div>
      </div>

      <motion.section
        id="wer-noch"
        className="scroll-mt-28 py-section-sm md:py-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.75, ease: easeEditorial }}
      >
        <div className="mx-auto max-w-container px-6 md:px-10">
          <h2 className="font-display text-section-title font-medium tracking-tight text-espresso">
            Wer noch liebt foodz?
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
            <PhotoCard
              src={siteImages.bruschetta}
              alt="Crostini mit Kräutern"
              className="aspect-square"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
            <PhotoCard
              src={siteImages.grainSalads}
              alt="Salate mit Kräutern und Quinoa"
              className="aspect-square"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
            <PhotoCard
              src={siteImages.flatlaySpread}
              alt="Vielfältiges Catering"
              className="aspect-square"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
            <PhotoCard
              src={siteImages.pomegranates}
              alt="Granatäpfel"
              className="aspect-square"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </div>
        </div>
      </motion.section>
    </>
  );
}
