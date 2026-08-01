import { Header } from "@/components/marketing/Header";
import { Hero } from "@/components/marketing/Hero";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { Features } from "@/components/marketing/Features";
import { Growth } from "@/components/marketing/Growth";
import { Trust } from "@/components/marketing/Trust";
import { Faq } from "@/components/marketing/Faq";
import { Contact } from "@/components/marketing/Contact";
import { Footer } from "@/components/marketing/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <Hero />
        <HowItWorks />
        <Features />
        <Growth />
        <Trust />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
