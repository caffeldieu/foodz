import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { Philosophy } from "@/components/sections/Philosophy";
import { AboutContact } from "@/components/sections/AboutContact";
import { Menu } from "@/components/sections/Menu";
import { Story } from "@/components/sections/Story";
import { WhoLoves } from "@/components/sections/WhoLoves";
import { ContactForm } from "@/components/sections/ContactForm";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <AboutContact />
        <Menu />
        <Story />
        <WhoLoves />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
