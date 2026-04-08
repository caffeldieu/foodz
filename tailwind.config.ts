import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5F1EB",
        "warm-white": "#FAF8F5",
        blush: "#F9EFE6",
        "sage-mist": "#E8EBDD",
        stone: "#E8E2D9",
        sand: "#D4CFC5",
        espresso: "#2C2420",
        coffee: "#5C4A3D",
        walnut: "#8B7355",
        terracotta: "#C4846C",
        clay: "#B07156",
        sage: "#8A9A7E",
        error: "#C45B4A",
        success: "#7A9B6D",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-hero": ["clamp(2.5rem,6vw,4.5rem)", { lineHeight: "1.05" }],
        "section-title": ["clamp(1.75rem,3.5vw,2.5rem)", { lineHeight: "1.2" }],
      },
      spacing: {
        section: "160px",
        "section-sm": "96px",
      },
      maxWidth: {
        container: "1400px",
      },
      boxShadow: {
        warm: "0 12px 40px rgba(44, 36, 32, 0.08)",
        card: "0 4px 24px rgba(44, 36, 32, 0.06), 0 2px 8px rgba(44, 36, 32, 0.04)",
        lift: "0 32px 64px -24px rgba(44, 36, 32, 0.14)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
