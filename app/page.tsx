import Navbar from "@/components/Navbar";
import Hero from "@/components/hero";
import Services from "@/components/services";
import WhyAFZ from "@/components/WhyAFZ";
import Industries from "@/components/Industries";
import Portfolio from "@/components/Portfolio";
import FloatingChat from "@/components/FloatingChat";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhyAFZ />
      <Services />
      <Industries />
      <Portfolio />
      <FloatingChat />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}