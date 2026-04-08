import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-stone/40 bg-warm-white py-12 md:py-14">
      <div className="mx-auto max-w-container px-6 text-center md:px-10">
        <p className="font-sans text-[13px] leading-relaxed tracking-wide text-walnut">
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
          <span className="text-walnut"> | </span>
          <span>© 2018 Foodz Catering, Frankfurt am Main</span>
        </p>
      </div>
    </footer>
  );
}
