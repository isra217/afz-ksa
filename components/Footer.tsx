"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Mail, MapPin, Send } from "lucide-react";

export default function Footer() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <footer ref={sectionRef} className="bg-[#F7F3EE] border-t border-[#C8A45D]/20 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
          className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12"
        >
          {/* Brand Column with Logo + Name + Arabic (matches navbar style) */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 md:w-12 md:h-12">
                <Image
                  src="/logo.png"
                  alt="AFZ Global"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <div>
                <div className="text-lg md:text-xl font-bold tracking-tight text-gray-900">
                  AFZ Global
                </div>
                <div className="text-[9px] md:text-[10px] tracking-[2px] text-gold/80 font-arabic font-semibold mt-0.5">
                  المملكة العربية السعودية
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Build, manage and scale your business in Saudi Arabia. Accounting, formation, web, apps, social, and AI — under one roof.
            </p>
            {/* Arabic phrase - darker and more visible */}
            <div className="font-arabic text-gold/60 text-2xl mt-4 font-medium">
              شريكك في النجاح
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-[10px] tracking-[3px] text-gold font-semibold mb-5 uppercase">
              Services
            </h4>
            <ul className="space-y-2">
              {["Accounting ", "Company Formation", "Web Development", "App Development", "Social & Ads", "AI Automation"].map(
                (s) => (
                  <li key={s}>
                    <a href="/services" className="text-gray-600 text-sm hover:text-gold transition">
                      {s}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Industries */}
          <motion.div variants={itemVariants}>
            <h4 className="text-[10px] tracking-[3px] text-gold font-semibold mb-5 uppercase">
              Industries
            </h4>
            <ul className="space-y-2">
              {["Real Estate", "Healthcare", "Cafe", "Ecommerce", "Restaurant", "Hospitality"].map(
                (i) => (
                  <li key={i}>
                    <a href="/industries" className="text-gray-600 text-sm hover:text-gold transition">
                      {i}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Contact & Socials */}
          <motion.div variants={itemVariants}>
            <h4 className="text-[10px] tracking-[3px] text-gold font-semibold mb-5 uppercase">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/27684615802"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 text-sm hover:text-gold transition"
                >
                  <Send size={14} className="text-gold" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@afzglobal.com"
                  className="flex items-center gap-2 text-gray-600 text-sm hover:text-gold transition"
                >
                  <Mail size={14} className="text-gold" />
                  Info@afzprestige.ksa
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="flex items-center gap-2 text-gray-600 text-sm hover:text-gold transition"
                >
        
                </a>
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="mt-6">
              <h4 className="text-[10px] tracking-[3px] text-gold font-semibold mb-3 uppercase">
                Follow Us
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com/afzglobalksa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/60 p-2 rounded-full border border-gold/30 text-gray-700 hover:bg-gold hover:text-white transition-all duration-300"
                  aria-label="Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/afzglobalksa?igsh=b3Rid3VvcXlpc3Zj&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/60 p-2 rounded-full border border-gold/30 text-gray-700 hover:bg-gold hover:text-white transition-all duration-300"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="pt-6 border-t border-gold/20 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-gray-500"
        >
          <p>© 2026 AFZ Global — Saudi Arabia. All rights reserved.</p>
          {/* Vision 2030 Arabic - now darker and more visible */}
          <div className="font-arabic text-gold/60 font-medium text-sm tracking-wider">
            رؤية ٢٠٣٠
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gold transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gold transition">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}