import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Audience from "./components/Audience";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import WhatsAppCTA from "./components/WhatsAppCTA";
import FAQ from "./components/FAQ";
import Footer, { FinalCTA } from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Audience />
        <HowItWorks />
        <Pricing />
        <WhatsAppCTA />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
