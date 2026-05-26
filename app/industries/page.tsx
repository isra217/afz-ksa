"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

import {
  Building2,
  Stethoscope,
  Utensils,
  ShoppingBag,
  Star,
  TrendingUp,
  ShieldCheck,
  Clock,
  Users,
  MessageCircle,
  Briefcase,
  Rocket,
  Sparkles,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/FloatingChat";
import FaqSection from "@/components/faq";

// Stats Section
const statsData = [
  { icon: <Briefcase size={24} />, value: 30, label: "Solutions Designed", suffix: "+" },
  { icon: <Users size={24} />, value: 98, label: "Client Satisfaction", suffix: "%" },
  { icon: <Rocket size={24} />, value: 4, label: "Core Services", suffix: "" },
  { icon: <Sparkles size={24} />, value: 24, label: "Support Hours", suffix: "/7" },
];

const StatsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increments = statsData.map(stat => stat.value / steps);
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setCounts(statsData.map(stat => stat.value));
        clearInterval(interval);
        return;
      }
      setCounts(prev =>
        prev.map((_, idx) => Math.min(statsData[idx].value, Math.floor(increments[idx] * currentStep)))
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
          {statsData.map((stat, idx) => (
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

// Enhanced service data with more content
const services = [
  {
    name: "Real Estate & Property",
    icon: <Building2 className="w-6 h-6 text-[#C8A45D]" />,
    description: "Modern property portals, AI lead qualification, and immersive virtual tours.",
    features: ["Smart lead scoring", "Interactive map search", "Mortgage calculators", "VR property tours"],
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600&auto=format",
  },
  {
    name: "Healthcare & Medical",
    icon: <Stethoscope className="w-6 h-6 text-[#C8A45D]" />,
    description: "Patient booking, telemedicine platforms, and secure medical records.",
    features: ["Online appointment scheduling", "Video consultations", "E‑prescriptions", "Patient portal"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Restaurants & Hospitality",
    icon: <Utensils className="w-6 h-6 text-[#C8A45D]" />,
    description: "Online ordering, loyalty apps, QR menus, and delivery integration.",
    features: ["QR code menus", "Loyalty points system", "Real‑time order tracking", "Multi‑branch support"],
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "E‑Commerce & Retail",
    icon: <ShoppingBag className="w-6 h-6 text-[#C8A45D]" />,
    description: "High‑conversion stores with Mada/Apple Pay, AI recommendations, and social commerce.",
    features: ["One‑click checkout", "AI product suggestions", "Abandoned cart recovery", "Social media integration"],
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=600&auto=format&fit=crop",
  },
];

const caseStudies = [
  {
    title: "Luxury Real Estate Platform",
    industry: "Real Estate",
    result: "340% increase in qualified leads",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Telehealth Portal",
    industry: "Healthcare",
    result: "98% patient satisfaction",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format",
  },
  {
    title: "QR Ordering for Restaurant Chain",
    industry: "Restaurants",
    result: "56% faster table turnover",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop",
  },
];

export default function IndustriesPage() {
  const heroRef = useRef<HTMLElement>(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });

  return (
    <main className="bg-cream min-h-screen">
      <Navbar />
      <WhatsAppButton />

      {/* HERO SECTION - Full viewport height background */}
      <section
        ref={heroRef}
        className="relative min-h-screen pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)" }}
      >
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gold/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold/10 rounded-full blur-[100px]" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left content */}
            <div>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-10 h-px bg-gold" />
                <span className="text-gold text-xs tracking-[4px] uppercase font-semibold">
                  Industries
                </span>
                <div className="w-10 h-px bg-gold" />
              </div>
              <h1
                className="text-3xl sm:text-4xl md:text-5xl font-light text-white leading-[1.15]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Industries We Serve For <br />
                <span className="text-gold">Saudi Businesses</span>
              </h1>
              <div className="my-4 w-16 h-[2px] bg-gold/40 rounded-full" />
              <p className="mt-4 text-gray-300 text-base md:text-lg leading-relaxed max-w-lg">
                Tailored digital strategies for Real Estate, Healthcare, Restaurants, and E‑Commerce.
                Drive growth with modern tech and premium branding.
              </p>
            </div>

            {/* Right image */}
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
                      src="/industries.jpg"
                      alt="Saudi digital services"
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

      {/* STATS SECTION */}
      <StatsSection />

      {/* ENHANCED INDUSTRY CARDS SECTION */}
      <section id="services-grid" className="relative py-20 md:py-28 bg-[#F7F3EE]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-10 h-px bg-[#C8A45D]" />
              <span className="text-[#C8A45D] text-xs tracking-[4px] uppercase font-semibold">
                What We Deliver
              </span>
              <div className="w-10 h-px bg-[#C8A45D]" />
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 leading-[1.15]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Industry Specific{" "}
              <span className="italic text-[#C8A96B] font-medium">
                Digital Solutions
              </span>
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              We build tailored digital ecosystems for four key sectors in Saudi Arabia.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#C8A45D]/10 flex flex-col h-full"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm p-2 rounded-full">
                    {service.icon}
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{service.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{service.description}</p>
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {service.features.slice(0, 3).map((feature) => (
                        <span key={feature} className="text-xs bg-[#C8A45D]/10 text-[#C8A45D] px-2 py-0.5 rounded-full">
                          {feature}
                        </span>
                      ))}
                      {service.features.length > 3 && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                          +{service.features.length - 3} more
                        </span>
                      )}
                    </div>
                    <a
                      href="#cta-section"
                      className="inline-flex items-center text-sm font-medium text-[#C8A45D] hover:text-[#B8923A] transition"
                    >
                      Learn more
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES SECTION */}
      <section className="relative py-20 md:py-28 bg-white/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-10 h-px bg-[#C8A45D]" />
              <span className="text-[#C8A45D] text-xs tracking-[4px] uppercase font-semibold">
                Success Stories
              </span>
              <div className="w-10 h-px bg-[#C8A45D]" />
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 leading-[1.15]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Real Result Across{" "}
              <span className="italic text-[#C8A96B] font-medium">
                Industries
              </span>
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Measurable impact delivered to Saudi enterprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, idx) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-cream rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs text-[#C8A45D] font-semibold mb-1">{study.industry}</p>
                  <h3 className="font-bold text-gray-800 text-lg mb-2">{study.title}</h3>
                  <div className="flex items-center gap-1 text-green-600 font-medium">
                    <TrendingUp size={16} />
                    <span>{study.result}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative py-20 md:py-28 bg-[#F7F3EE]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-10 h-px bg-[#C8A45D]" />
                <span className="text-[#C8A45D] text-xs tracking-[4px] uppercase font-semibold">
                  Why AFZ Global
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-6">
                Premium Digital Partner for
                <span className="text-[#C8A45D]"> Saudi Vision 2030</span>
              </h2>
              <div className="space-y-5">
                {[
                  {
                    icon: <Star className="text-[#C8A45D]" size={20} />,
                    title: "Industry Expertise",
                    desc: "Deep knowledge of real estate, healthcare, F&B, and retail sectors.",
                  },
                  {
                    icon: <ShieldCheck className="text-[#C8A45D]" size={20} />,
                    title: "Enterprise-Grade Security",
                    desc: "ISO‑certified processes and data protection for sensitive verticals.",
                  },
                  {
                    icon: <Clock className="text-[#C8A45D]" size={20} />,
                    title: "Rapid Delivery",
                    desc: "2–8 weeks average project completion with agile methodology.",
                  },
                  {
                    icon: <Users className="text-[#C8A45D]" size={20} />,
                    title: "Dedicated Support",
                    desc: "24/7 account management and post‑launch optimization.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 items-start">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-gray-800">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-xl h-96 md:h-[500px]"
            >
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop"
                alt="Team working on digital solutions"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <FaqSection />

      {/* CTA SECTION */}
      <section id="cta-section" className="relative py-20 md:py-28 bg-white/70">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-[#C8A45D]/5 to-[#C8A45D]/20 rounded-3xl p-10 md:p-14 border border-[#C8A45D]/30 shadow-xl"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C8A45D] to-transparent" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Ready to Elevate Your Business?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Let's create a tailored digital solution that drives growth for your industry.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/27684615802"
                target="_blank"
                className="inline-flex items-center gap-2 bg-[#C8A45D] hover:bg-[#B8923A] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-[#C8A45D] text-[#C8A45D] hover:bg-[#C8A45D] hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300"
              >
                Get a Proposal
              </a>
            </div>
            <p className="text-xs text-gray-500 mt-6">
              No obligation. Free consultation on your business needs.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}