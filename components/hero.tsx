"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const images = [
  "/1.jpg",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop",
  "/4.jpg", 
  "/5.jpg",
  "/3.jpg", 
  "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop", // office teamwork
  "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1600&auto=format&fit=crop", 
  
  "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop", // executive meeting / consulting
];

// Counter component with animation
const Counter = ({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <div ref={ref} className="text-lg font-bold text-[#C8A45D]">
      {count}{suffix}
    </div>
  );
};

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20 bg-[#F7F3EE]">
      {/* Gold glows */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#C8A45D]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#C8A45D]/10 blur-[140px] rounded-full" />
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#C8A45D_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 mt-8 md:mt-12 w-full">
        {/* Mobile: column; Desktop: grid side-by-side */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12">
          
          {/* LEFT CONTENT - always on top on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-1"
          >
            <div className="inline-flex items-center gap-2 border border-[#C8A45D]/40 bg-white/60 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 bg-[#C8A45D] rounded-full animate-pulse" />
              <span className="text-[11px] tracking-[3px] text-[#C8A45D] font-semibold uppercase">
                Saudi Premium Digital Agency
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light leading-[1.15] text-gray-900">
              Elevating Businesses in{" "}
              <span className="text-[#C8A45D]">Saudi Arabia</span>
              <br />
              With Premium Digital Excellence
            </h1>

            <p className="text-gray-600 mt-5 max-w-lg text-base md:text-lg leading-relaxed">
              Luxury websites, branding, AI automation, and corporate solutions built for modern Saudi enterprises.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-[#C8A45D] text-white font-semibold hover:scale-105 transition"
              >
                Start Project <ArrowRight size={16} className="inline ml-2" />
              </a>
              <a
                href="#services"
                className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 hover:border-[#C8A45D] hover:text-[#C8A45D] transition"
              >
                Explore Services
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE: IMAGE + STATS - appears after heading on mobile */}
          <div className="order-2 md:order-2">
            {/* IMAGE with floating animation (disabled on mobile) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative h-[280px] sm:h-[340px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl border border-white/60"
              whileInView={{
                y: [0, -4, 0],
                transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              viewport={{ once: false }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[index]}
                    alt="Saudi business environment"
                    fill
                    className="object-cover"
                    unoptimized
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* STAT CARDS - below image on all screens */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-6 grid grid-cols-3 gap-3"
            >
              {/* Card 1 */}
              <div className="bg-white/80 backdrop-blur-md rounded-xl py-3 px-2 text-center border border-[#C8A45D]/20 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <Counter target={120} suffix="+" />
                <div className="text-[11px] text-gray-600 mt-1">Clients Served</div>
              </div>

              {/* Card 2 */}
              <div className="bg-white/80 backdrop-blur-md rounded-xl py-3 px-2 text-center border border-[#C8A45D]/20 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <Counter target={98} suffix="%" />
                <div className="text-[11px] text-gray-600 mt-1">Retention Rate</div>
              </div>

              {/* Card 3 - shows "2–8w" in one line */}
              <div className="bg-white/80 backdrop-blur-md rounded-xl py-3 px-2 text-center border border-[#C8A45D]/20 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="text-lg font-bold text-[#C8A45D] whitespace-nowrap">
                  2–8w
                </div>
                <div className="text-[11px] text-gray-600 mt-1">Delivery Time</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}