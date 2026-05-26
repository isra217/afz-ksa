"use client";

import { useState, useRef, FormEvent } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Send, Mail, Phone, ArrowRight, CheckCircle, User, MapPin, Sparkles } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/services";
import WhatsAppButton from "@/components/FloatingChat";

// ========== DATA ==========
const processSteps = [
  { number: "01", title: "You Submit Inquiry", desc: "We receive your request via form or WhatsApp." },
  { number: "02", title: "We Analyze Your Business", desc: "We understand your goals, industry, and requirements." },
  { number: "03", title: "Custom Proposal Sent (24–48h)", desc: "You receive a tailored plan + pricing." },
  { number: "04", title: "Approval & Onboarding", desc: "We finalize scope and start setup." },
  { number: "05", title: "Execution & Delivery", desc: "We build, test, and launch your solution." },
];

const industries = [
  {
    id: "realestate",
    name: "Real Estate",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format",
    desc: "Property listing systems, CRM for agents, lead automation, booking systems, virtual tours, and investor dashboards. We help real estate companies digitize their entire sales pipeline, from property inquiry to closing, with integrated AI agents that nurture leads 24/7.",
    cta: "Build Real Estate System",
  },
  {
    id: "healthcare",
    name: "Medical Centers",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format",
    desc: "Patient portals, appointment scheduling, telemedicine, EMR integration, prescription management, and secure messaging. Our healthcare solutions improve patient experience while ensuring full compliance with Saudi data regulations.",
    cta: "Transform Your Clinic",
  },
  {
    id: "restaurants",
    name: "Restaurants & Cafés",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format",
    desc: "Online ordering, loyalty programs, reservation systems, delivery integration, QR menu, and table management. We turn your restaurant into a digital‑first destination with automated ordering and real‑time analytics.",
    cta: "Digitize Your Menu",
  },
  {
    id: "ecommerce",
    name: "E‑Commerce Brands",
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800&auto=format",
    desc: "High‑performance online stores, payment gateways (Mada, Apple Pay), inventory management, analytics, and automated marketing. Scale your online sales with a platform that's built for Saudi shoppers.",
    cta: "Launch Your Store",
  },
];

// ========== COMPONENTS ==========

// Process Timeline – changed heading font, added scroll animation
const ProcessTimeline = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="relative py-24 md:py-28 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #F7F3EE 0%, #EFE7DA 100%)" }}
    >
      {/* Gold glows */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[140px] animate-pulse-slow" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-gold/5 rounded-full blur-[160px] animate-pulse-slow" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-10 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[4px] uppercase font-semibold">Process</span>
            <div className="w-10 h-px bg-gold" />
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 leading-[1.15]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
           What Happens <br />
            <span className="text-[#C8A96B]">After You Contact Us?</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A clear, sales‑focused journey from inquiry to launch.
          </p>
        </div>

        <div className="relative overflow-x-auto pb-6 md:pb-0">
          <div className="flex flex-col md:flex-row md:justify-between gap-8 min-w-max md:min-w-0 mx-auto">
            {processSteps.map((step, idx) => {
              const stepRef = useRef<HTMLDivElement>(null);
              const isStepInView = useInView(stepRef, { once: true, margin: "-30px" });
              return (
                <div key={step.number} className="relative flex-1 md:min-w-[200px]">
                  {idx < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/3 left-full w-full h-px bg-gold/40 -translate-y-1/2 z-0" />
                  )}
                  <motion.div
                    ref={stepRef}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isStepInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="relative z-10 bg-white rounded-2xl p-6 shadow-md border border-gold/20 hover:shadow-lg transition text-center h-full flex flex-col items-center"
                  >
                    <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center mb-4 border border-gold/30">
                      <span className="text-2xl font-bold text-gold">{step.number}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

// Industries Section – with scroll animation and buttons linking to contact form
const IndustriesSection = () => {
  const [activeIndustry, setActiveIndustry] = useState(industries[0]);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="relative py-24 md:py-28 bg-cream overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-10 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[4px] uppercase font-semibold">Industries We Serve</span>
            <div className="w-10 h-px bg-gold" />
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 leading-[1.15]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Tailored Solutions For <br />
            <span className="text-[#C8A96B]">Your Sector</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Choose your industry and discover how we digitize and grow your business.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {industries.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setActiveIndustry(ind)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeIndustry.id === ind.id
                  ? "bg-gold text-white shadow-md"
                  : "bg-white/60 text-gray-700 border border-gray-200 hover:bg-gold/10 hover:border-gold/30"
              }`}
            >
              {ind.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndustry.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col md:flex-row gap-8 md:gap-12"
          >
            <div className="md:w-1/2 relative h-64 md:h-[420px] rounded-2xl overflow-hidden shadow-lg border border-gold/30">
              <Image
                src={activeIndustry.image}
                alt={activeIndustry.name}
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
                {activeIndustry.name}
              </h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
                {activeIndustry.desc}
              </p>
              {/* Button now scrolls to contact form */}
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-gold text-white px-6 py-3 rounded-full font-semibold hover:bg-gold-dark transition w-fit text-sm md:text-base"
              >
                {activeIndustry.cta} <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

// CTA Strip – inner card now matches hero solid dark gradient
const CTAStrip = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="relative py-20 overflow-hidden"
      
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Inner card – now solid dark gradient, no transparency */}
        <div className="relative rounded-3xl shadow-2xl border border-gold/30 p-8 md:p-12 text-center overflow-hidden"
             style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)" }}>
          {/* Decorative gold elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-6 border border-gold/30">
              <Sparkles size={16} className="text-gold" />
              <span className="text-gold text-xs font-semibold tracking-wide">Limited Time Offer</span>
            </div>
            <h3 className="text-2xl md:text-4xl font-serif font-bold text-white mb-4">
              Need a custom solution for your business?
            </h3>
            <p className="text-gray-300 max-w-lg mx-auto mb-8">
              Get a personalized quote and free consultation from our experts.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-gray-900 font-bold px-8 py-3 rounded-full transition-all duration-300 shadow-lg shadow-gold/30 hover:shadow-gold/50"
              >
                Get Free Consultation
                <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
              </a>
              <a
                href="https://wa.me/27684615802"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-white/10 border border-white/30 hover:bg-gold hover:border-gold text-white hover:text-gray-900 font-semibold px-8 py-3 rounded-full transition-all duration-300"
              >
                <Send size={16} />
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

// ========== MAIN PAGE ==========
export default function ServicesPage() {
  // Hero section animations
  const heroRef = useRef<HTMLElement>(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });

  return (
    <main className="bg-cream min-h-screen">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section - Darker background like About Us, same interactive image */}
      <section
        ref={heroRef}
        className="relative pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)" }}
      >
        {/* Gold glows for depth */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gold/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold/10 rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left text content - white text for dark background */}
            <div>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-10 h-px bg-gold" />
                <span className="text-gold text-xs tracking-[4px] uppercase font-semibold">
                  Our Services
                </span>
                <div className="w-10 h-px bg-gold" />
              </div>
              <h1
                className="text-3xl sm:text-4xl md:text-5xl font-light text-white leading-[1.15]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Digital Solutions For Modern <br />
                <span className="text-gold">Saudi Businesses</span>
              </h1>
              <div className="my-4 w-16 h-[2px] bg-gold/40 rounded-full" />
              <p className="mt-4 text-gray-300 text-base md:text-lg leading-relaxed max-w-lg">
                We provide modern digital solutions including website and app development, AI automation systems,
                accounting and taxation services, and complete business setup support — all tailored to the Saudi market.
              </p>
            </div>

            {/* Right side: Larger, interactive, beautiful image (same as before) */}
            <div className="relative flex justify-center items-center">
              {/* Enhanced background glow */}
              <div className="absolute w-[450px] h-[450px] bg-gold/20 rounded-full blur-3xl animate-pulse-slow" />
              <div
                className="absolute w-[350px] h-[350px] bg-gold/10 rounded-full blur-2xl animate-pulse-slow"
                style={{ animationDelay: "1s" }}
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                animate={isHeroInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
                className="relative w-full max-w-md md:max-w-lg rounded-2xl overflow-hidden shadow-2xl border-2 border-transparent bg-gradient-to-r from-gold/40 via-gold/60 to-gold/40 p-[2px]"
                style={{ backgroundClip: "padding-box" }}
              >
                {/* Inner image container with smooth zoom on hover */}
                <div className="relative overflow-hidden rounded-2xl bg-cream">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full aspect-[4/3]"
                  >
                    <Image
                      src="/service.jpg"
                      alt="AFZ Global Services - Digital solutions for Saudi businesses"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 90vw, 600px"
                      priority
                    />
                  </motion.div>
                  {/* Subtle gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
                </div>
              </motion.div>

              {/* Decorative floating elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 0.6, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-gold/20 rounded-full blur-xl"
              />
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={isHeroInView ? { opacity: 0.6, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-gold/30 rounded-full blur-xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative bg-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="border-t border-gold/20" />
        </div>
      </div>

      {/* Existing ServicesSection (wrapped with motion for scroll animation) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <ServicesSection />
      </motion.div>

      {/* New sections with animations */}
      <ProcessTimeline />
      <IndustriesSection />
      <CTAStrip />

      <Footer />
    </main>
  );
}