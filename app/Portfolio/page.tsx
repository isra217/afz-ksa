"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Briefcase, Users, Rocket, Sparkles } from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/Portfolio";
import WhatsAppButton from "@/components/FloatingChat";
import Testimonials from "@/components/Testimonials";

const stats = [
  { icon: <Briefcase size={24} />, value: 30, label: "Solutions Designed", suffix: "+" },
  { icon: <Users size={24} />, value: 30, label: "Happy Clients", suffix: "+" },
  { icon: <Rocket size={24} />, value: 98, label: "Client Retention", suffix: "%" },
  { icon: <Sparkles size={24} />, value: 24, label: "Support", suffix: "/7" },
];

const StatsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increments = stats.map(stat => stat.value / steps);
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setCounts(stats.map(stat => stat.value));
        clearInterval(interval);
        return;
      }
      setCounts(prev =>
        prev.map((_, idx) => Math.min(stats[idx].value, Math.floor(increments[idx] * currentStep)))
      );
    }, stepTime);
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="relative py-16 bg-cream overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="bg-gold/5 rounded-2xl p-6 shadow-md border border-gold/20 backdrop-blur-sm"
            >
              <div className="text-gold mb-3 flex justify-center">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-800">
                {counts[idx]}
                {stat.suffix}
              </div>
              <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const CTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="relative py-20 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)" }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div
          className="relative rounded-3xl shadow-2xl border border-gold/30 p-8 md:p-12 text-center overflow-hidden"
          style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)" }}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-6 border border-gold/30">
              <Sparkles size={16} className="text-gold" />
              <span className="text-gold text-xs font-semibold tracking-wide">
                Let’s Create Something Amazing
              </span>
            </div>
            <h3 className="text-2xl md:text-4xl font-serif font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-300 max-w-lg mx-auto mb-8">
              Tell us about your vision, and we’ll bring it to life with modern design and smart technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-gray-900 font-bold px-8 py-3 rounded-full transition-all duration-300 shadow-lg shadow-gold/30 hover:shadow-gold/50"
              >
                Start a Conversation
                <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
              </a>
              <a
                href="/Portfolio"
                className="group inline-flex items-center gap-2 bg-white/10 border border-white/30 hover:bg-gold hover:border-gold text-white hover:text-gray-900 font-semibold px-8 py-3 rounded-full transition-all duration-300"
              >
                View All Projects
                <Briefcase size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default function PortfolioPage() {
  const heroRef = useRef<HTMLElement>(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });

  return (
    <main className="bg-cream min-h-screen">
      <Navbar />
      <WhatsAppButton />

      {/* HERO SECTION - Fixed spacing */}
      <section
        ref={heroRef}
        className="relative min-h-screen pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)" }}
      >
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gold/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold/10 rounded-full blur-[100px]" />

        {/* Removed py-12 md:py-20 from this container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-10 h-px bg-gold" />
                <span className="text-gold text-xs tracking-[4px] uppercase font-semibold">
                  Our Portfolio
                </span>
                <div className="w-10 h-px bg-gold" />
              </div>
              <h1
                className="text-3xl sm:text-4xl md:text-5xl font-light text-white leading-[1.15]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Digital Excellence <br />
                <span className="text-gold">In Action</span>
              </h1>
              <div className="my-4 w-16 h-[2px] bg-gold/40 rounded-full" />
              <p className="mt-4 text-gray-300 text-base md:text-lg leading-relaxed max-w-lg">
                Explore real projects we’ve delivered for real estate, healthcare, restaurants, and e‑commerce
                brands across Saudi Arabia. Each solution is crafted to drive growth and efficiency.
              </p>
            </div>

            <div className="relative flex justify-center items-center">
              <div className="absolute w-[350px] h-[350px] bg-gold/20 rounded-full blur-3xl animate-pulse-slow" />
              <div
                className="absolute w-[250px] h-[250px] bg-gold/10 rounded-full blur-2xl animate-pulse-slow"
                style={{ animationDelay: "1s" }}
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                animate={isHeroInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="relative w-full max-w-sm md:max-w-md rounded-2xl overflow-hidden shadow-2xl border-2 border-transparent bg-gradient-to-r from-gold/40 via-gold/60 to-gold/40 p-[2px]"
              >
                <div className="relative overflow-hidden rounded-2xl bg-cream">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full aspect-[4/3]"
                  >
                    <Image
                      src="/portfolio.jpg"
                      alt="AFZ Global Portfolio"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 90vw, 500px"
                      priority
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 0.6, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-gold/20 rounded-full blur-xl"
              />
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={isHeroInView ? { opacity: 0.6, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-gold/30 rounded-full blur-xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <StatsSection />

      <div id="portfolio-grid" className="relative bg-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="border-t border-gold/20" />
        </div>
      </div>
      <ServicesSection />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}