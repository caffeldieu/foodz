import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/sections/Footer";

export const metadata = {
  title: "Impressum | FoodZ Catering",
  description: "Impressum FoodZ Catering Frankfurt.",
};

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-2xl px-6 pb-24 pt-36 md:px-10">
        <h1 className="font-serif text-3xl font-medium italic text-espresso">
          Impressum
        </h1>
        <p className="mt-8 font-sans text-coffee leading-relaxed">
          Platzhalter — bitte Impressumstext vom Kunden / Rechtsberatung
          einfügen (Angaben gemäß § 5 TMG, USt-ID, Registergericht, etc.).
        </p>
        <p className="mt-6 font-sans text-sm text-walnut">
          Kontakt vorläufig:{" "}
          <a href="mailto:info@foodz.de" className="text-coffee underline">
            info@foodz.de
          </a>
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
