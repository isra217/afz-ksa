"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Target, Eye, Sparkles, Globe, Cpu, Award, Rocket, CheckCircle } from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/WhyAFZ";
import WhatsAppButton from "@/components/FloatingChat";

const processSteps = [
  { number: "01", title: "You Submit Inquiry", desc: "We receive your request via form or WhatsApp." },
  { number: "02", title: "We Analyze Your Business", desc: "We understand your goals, industry, and requirements." },
  { number: "03", title: "Custom Proposal Sent (24–48h)", desc: "You receive a tailored plan + pricing." },
  { number: "04", title: "Approval & Onboarding", desc: "We finalize scope and start setup." },
  { number: "05", title: "Execution & Delivery", desc: "We build, test, and launch your solution." },
];

export default function AboutUsPage() {
  const heroRef = useRef<HTMLElement>(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });

  const missionRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const whyUsRef = useRef<HTMLDivElement>(null);
  
  const isMissionInView = useInView(missionRef, { once: true, margin: "-50px" });
  const isVisionInView = useInView(visionRef, { once: true, margin: "-50px" });
  const isWhyUsInView = useInView(whyUsRef, { once: true, margin: "-50px" });

  const whyUsItems = [
    { icon: <Sparkles size={20} />, title: "All-in-One", desc: "Everything under one roof: formation, accounting, web, AI & marketing." },
    { icon: <Target size={20} />, title: "Business Focus", desc: "Solutions designed to help you grow, scale, and operate efficiently." },
    { icon: <Cpu size={20} />, title: "AI & Automation", desc: "Latest tech to boost productivity and reduce manual workload." },
    { icon: <Award size={20} />, title: "Reliable Service", desc: "Accuracy, transparency, timely delivery, long‑term relationships." },
  ];

  return (
    <main className="bg-cream min-h-screen">
      <Navbar />
      <WhatsAppButton />

      {/* HERO SECTION */}
      <section ref={heroRef} className="relative pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden" style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)" }}>
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gold/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold/10 rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isHeroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-10 h-px bg-gold" />
                <span className="text-gold text-xs tracking-[4px] uppercase font-semibold">About Us</span>
                <div className="w-10 h-px bg-gold" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-white leading-[1.15]" style={{ fontFamily: "'Playfair Display', serif" }}>
                We Build <br /><span className="text-gold">Digital Excellence</span><br /> For Saudi Arabia
              </h1>
              <div className="my-4 w-16 h-[2px] bg-gold/40 rounded-full" />
              <p className="mt-4 text-gray-300 text-base md:text-lg leading-relaxed max-w-lg">
                AFZ Global is a Saudi‑born digital agency driven by innovation and local insight. We blend AI, stunning design, and business strategy to help real estate, healthcare, e‑commerce, and restaurant brands win online.
              </p>
            </div>

            <div className="relative flex justify-center items-center">
              <div className="absolute w-[450px] h-[450px] bg-gold/20 rounded-full blur-3xl animate-pulse-slow" />
              <div className="absolute w-[350px] h-[350px] bg-gold/10 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
              <motion.div initial={{ opacity: 0, scale: 0.9, rotateY: 10 }} animate={isHeroInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}} transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }} whileHover={{ scale: 1.05, rotateY: 5 }} className="relative w-full max-w-md md:max-w-lg rounded-2xl overflow-hidden shadow-2xl border-2 border-transparent bg-gradient-to-r from-gold/40 via-gold/60 to-gold/40 p-[2px]">
                <div className="relative overflow-hidden rounded-2xl bg-cream">
                  <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.5 }} className="relative w-full aspect-[4/3]">
                    <Image src="/about.jpg" alt="AFZ Global team" fill className="object-cover" sizes="(max-width: 768px) 90vw, 600px" priority />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={isHeroInView ? { opacity: 0.6, y: 0 } : {}} transition={{ delay: 0.4 }} className="absolute -bottom-6 -left-6 w-20 h-20 bg-gold/20 rounded-full blur-xl" />
              <motion.div initial={{ opacity: 0, y: -20 }} animate={isHeroInView ? { opacity: 0.6, y: 0 } : {}} transition={{ delay: 0.5 }} className="absolute -top-6 -right-6 w-24 h-24 bg-gold/30 rounded-full blur-xl" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY AFZ SECTION */}
      <ServicesSection />

      {/* MISSION SECTION – square image, larger, tighter gap, wider side margins */}
      <section className="relative pt-16 md:pt-20 pb-8 md:pb-12 bg-cream overflow-hidden">
        <div className="max-w-6xl mx-auto px-8 md:px-16">
          <motion.div
            ref={missionRef}
            initial="hidden"
            animate={isMissionInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            className="grid lg:grid-cols-2 gap-4 items-center"
          >
            {/* Square image – left, no rounded corners, 360px */}
            <motion.div
              variants={{ hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-[360px] aspect-square overflow-hidden shadow-xl border border-gold/30 rounded-none">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format"
                  alt="Our Mission"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
              </div>
            </motion.div>

            {/* Text – right with controlled line width */}
            <motion.div
              variants={{ hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-xs tracking-[4px] uppercase font-semibold">Our Purpose</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4"> Mission</h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-prose">
                To empower businesses with smart digital and financial
                solutions through reliable accounting, company formation,
                technology, marketing, and AI-driven services that support
                long-term growth and operational efficiency.
              </p>
              <div className="mt-6 flex items-center gap-2">
                <div className="w-12 h-px bg-gold/40" />
                <Target size={24} className="text-gold" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* VISION SECTION – square image, larger, tighter gap, wider side margins */}
      <section className="relative pt-8 md:pt-12 pb-16 md:pb-20 bg-gradient-to-b from-cream to-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-8 md:px-16">
          <motion.div
            ref={visionRef}
            initial="hidden"
            animate={isVisionInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            className="grid lg:grid-cols-2 gap-4 items-center"
          >
            {/* Text – left */}
            <motion.div
              variants={{ hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-xs tracking-[4px] uppercase font-semibold">Our Future</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4"> Vision</h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-prose">
                To become a globally trusted business solutions partner by helping startups, entrepreneurs,
                and enterprises grow through innovation, automation, and strategic support.
              </p>
              <div className="mt-6 flex items-center gap-2">
                <Eye size={24} className="text-gold" />
                <div className="w-12 h-px bg-gold/40" />
              </div>
            </motion.div>

            {/* Square image – right, no rounded corners, 360px */}
            <motion.div
              variants={{ hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } }}
              transition={{ duration: 0.6 }}
              className="flex justify-center order-1 lg:order-2"
            >
              <div className="relative w-full max-w-[360px] aspect-square overflow-hidden shadow-xl border border-gold/30 rounded-none">
                <Image
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&auto=format"
                  alt="Our Vision"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="relative py-24 md:py-28 overflow-hidden" style={{ background: "linear-gradient(135deg, #F7F3EE 0%, #EFE7DA 100%)" }}>
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[140px] animate-pulse-slow" />
        <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-gold/5 rounded-full blur-[160px] animate-pulse-slow" style={{ animationDelay: "1s" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            ref={whyUsRef}
            initial="hidden"
            animate={isWhyUsInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="grid lg:grid-cols-2 gap-12 items-start"
          >
            <motion.div
              variants={{ hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-10 h-px bg-gold" />
                <span className="text-gold text-xs tracking-[4px] uppercase font-semibold">Why Choose Us</span>
                <div className="w-10 h-px bg-gold" />
              </div>
             <h2
              className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 leading-[1.15]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              What Makes Us{" "}
              <span className="italic text-[#C8A96B] font-medium">
                Different
              </span>
            </h2>
              <div className="space-y-3 mt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-gold mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">End‑to‑end solutions: from company formation to AI automation.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-gold mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Proven track record with 150+ Saudi businesses.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-gold mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Dedicated support & transparent communication.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-gold mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">Tailored strategies for local and international growth.</p>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {whyUsItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-gold/30 hover:border-gold/60 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center mb-3 text-gold group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-md font-bold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}