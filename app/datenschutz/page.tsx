import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/sections/Footer";

export const metadata = {
  title: "Datenschutz | FoodZ Catering",
  description: "Datenschutzerklärung FoodZ Catering Frankfurt.",
};

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-2xl px-6 pb-24 pt-36 md:px-10">
        <h1 className="font-serif text-3xl font-medium italic text-espresso">
          Datenschutzerklärung
        </h1>
        <p className="mt-8 font-sans text-coffee leading-relaxed">
          Platzhalter — bitte finale Datenschutzerklärung einfügen
          (Verantwortlicher, Zwecke, Formular-/E-Mail-Verarbeitung, Hosting
          Vercel, Cookies, Betroffenenrechte).
        </p>
        <Link
          href="/"
          className="mt-10 inline-block font-sans text-sm uppercase tracking-[0.1em] text-coffee underline decoration-stone underline-offset-4"
        >
          Zur Startseite
        </Link>
      </main>
      <Footer />
    </>
  );
}
