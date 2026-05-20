"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const reasons = [
  {
    title: "End-to-End Ownership",
    desc: "From CR formation to website launch to AI agents — one team, one timeline, one invoice.",
  },
  {
    title: "Ship in Weeks, Not Months",
    desc: "Most websites go live in 2–3 weeks. Multi-service projects in 4–8 weeks.",
  },
  {
    title: "Risk-Free Start",
    desc: "Small deposit to start. 72-hour refund window. No conditions.",
  },
  {
    title: "Vision 2030 Ready",
    desc: "Every solution aligns with Saudi Vision 2030 digital transformation goals.",
  },
  {
    title: "AI-First by Design",
    desc: "Bots qualify, book, and follow up 24/7 so your team focuses on closing deals.",
  },
  {
    title: "Transparent Pricing Always",
    desc: "Fixed quotes, no retainers. Full ownership transferred on delivery.",
  },
];

export default function WhyAFZ() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="why" ref={sectionRef} className="bg-[#F7F3EE] relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* LEFT SIDE - STICKY IMAGE (local) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-white/60 lg:sticky lg:top-28"
          >
            <Image
              src="/2.jpg"
              alt="Saudi Business Vision"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#C8A45D]/10 via-transparent to-black/10" />
            <div className="absolute bottom-5 left-5 bg-white/80 backdrop-blur px-4 py-1.5 rounded-full">
              <span className="text-[#C8A45D] text-xs font-semibold tracking-wider">
                Trusted Partner in Saudi Arabia
              </span>
            </div>
          </motion.div>

          {/* RIGHT SIDE - SCROLLING CONTENT */}
          <div>
            {/* HEADER WITH SCROLL ANIMATION */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-px bg-[#C8A45D]" />
                <span className="text-[#C8A45D] text-xs tracking-[4px] font-semibold uppercase">
                  Why AFZ
                </span>
              </div>

              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-light leading-[1.15] text-gray-900"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Built as One System,<br />
                Not <span className="text-[#C8A45D]">Separate Services</span>
              </h2>

              <p className="text-gray-600 mt-5 max-w-lg text-base leading-relaxed">
                Stop juggling agencies. We deliver everything your Saudi business needs — from branding to AI automation — as one unified system.
              </p>

              <div className="mt-6 text-5xl text-[#C8A45D]/20 font-serif">
                شريكك
              </div>
            </motion.div>

            {/* REASONS LIST */}
            <div className="space-y-10">
              {reasons.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="flex gap-5"
                >
                  <div className="text-[#C8A45D] font-mono text-sm w-8">
                    {(i + 1).toString().padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-gray-800 mb-2 hover:text-[#C8A45D] transition">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}