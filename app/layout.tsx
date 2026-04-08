import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Inter,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "foodz . fresh handcrafted . catering",
  description:
    "Für uns zählt Ehrlichkeit und Gefühl für guten Geschmack. In unserer Küche zelebrieren wir gutes Essen.",
  openGraph: {
    title: "foodz . fresh handcrafted . catering",
    description: "foodz . fresh handcrafted . catering",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`texture-paper ${playfair.variable} ${cormorant.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
