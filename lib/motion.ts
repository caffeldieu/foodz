export const easeEditorial = [0.22, 1, 0.36, 1] as const;

export const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: easeEditorial },
  viewport: { once: true, margin: "-100px" as const },
};

export const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  viewport: { once: true, margin: "-80px" as const },
};

export const staggerItem = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: easeEditorial },
  viewport: { once: true, margin: "-60px" as const },
};
