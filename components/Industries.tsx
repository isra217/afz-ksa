"use client";

import { useEffect, useRef } from "react";
import {
  Building2,
  Stethoscope,
  UtensilsCrossed,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";
import { motion, useInView } from "framer-motion";

const industries = [
  {
    title: "Real Estate",
    subtitle: "Agencies & Property Developers",
    icon: Building2,
    number: "01",
    description:
      "Modern property portals, CRM for agents, AI lead qualification and virtual tours.",
  },
  {
    title: "Healthcare",
    subtitle: "Doctors, Clinics & Medical Centers",
    icon: Stethoscope,
    number: "02",
    description:
      "Patient booking systems, telemedicine platforms, secure medical records.",
  },
  {
    title: "Restaurants",
    subtitle: "Cafés, Restaurants & Hospitality",
    icon: UtensilsCrossed,
    number: "03",
    description:
      "Online ordering, loyalty apps, QR menu systems, and delivery integration.",
  },
  {
    title: "E-Commerce",
    subtitle: "Modern Online Brands & Stores",
    icon: ShoppingBag,
    number: "04",
    description:
      "High-conversion stores with Mada/Apple Pay, AI recommendations, and social commerce.",
  },
];

export default function Industries() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });

  return (
    <section
      id="industries"
      ref={sectionRef}
      className="relative py-24 md:py-28 overflow-hidden bg-[#F7F3EE]"
    >
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#C8A96B]/10 rounded-full blur-[130px]" />
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-[#C8A96B]/5 rounded-full blur-[130px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Header with animation */}
        <div ref={headerRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-20"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#C8A96B]" />
              <span className="text-[#C8A96B] text-[11px] tracking-[4px] uppercase font-semibold">
                Industries
              </span>
              <div className="w-8 h-px bg-[#C8A96B]" />
            </div>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 leading-[1.15]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Industries We{" "}
              <span className="italic text-[#C8A96B] font-medium">
                Work With
              </span>
            </h2>

            <p className="text-gray-600 mt-5 max-w-xl mx-auto leading-relaxed text-sm md:text-base">
              Delivering premium digital experiences, automation, and scalable
              systems for modern Saudi businesses.
            </p>
          </motion.div>
        </div>

        {/* Card Grid - 4 cards in one row on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {industries.map((industry, idx) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
              >
                {/* Decorative gold top line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-[#C8A96B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

                <div className="p-6 md:p-7 flex-1 flex flex-col">
                  {/* Icon + number row */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-xl border border-[#C8A96B]/20 flex items-center justify-center bg-white shadow-sm group-hover:border-[#C8A96B] group-hover:bg-[#C8A96B]/5 transition-all duration-300">
                      <Icon
                        size={26}
                        className="text-[#C8A96B] group-hover:scale-110 transition-transform duration-300"
                        strokeWidth={1.8}
                      />
                    </div>
                    <span className="text-3xl font-bold text-[#C8A96B]/10 group-hover:text-[#C8A96B]/20 transition-all duration-300">
                      {industry.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-serif text-gray-900 mb-2 group-hover:text-[#C8A96B] transition-colors duration-300">
                    {industry.title}
                  </h3>
                  <p className="text-[#C8A96B] text-sm font-medium mb-3">
                    {industry.subtitle}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                    {industry.description}
                  </p>

                  {/* Hover link */}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-[#C8A96B] text-sm font-semibold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 mt-auto"
                  >
                    Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Subtle pattern */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#C8A96B]/5 to-transparent rounded-tl-2xl pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

        {/* Decorative line */}
        <div className="relative mt-16 flex justify-center">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#C8A96B]/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}