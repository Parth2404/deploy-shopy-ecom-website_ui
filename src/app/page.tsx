import { Header } from "@/components/marketing/Header";
import { Hero } from "@/components/marketing/Hero";
import { AppShowcase } from "@/components/marketing/AppShowcase";
import { WebVsApp } from "@/components/marketing/WebVsApp";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { Features } from "@/components/marketing/Features";
import { Growth } from "@/components/marketing/Growth";
import { Trust } from "@/components/marketing/Trust";
import { Industries } from "@/components/marketing/Industries";
import { Faq } from "@/components/marketing/Faq";
import { Contact } from "@/components/marketing/Contact";
import { Footer } from "@/components/marketing/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <Hero />
        <AppShowcase />
        <WebVsApp />
        <HowItWorks />
        <Features />
        <Growth />
        <Trust />
        <Industries />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
