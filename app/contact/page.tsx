"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { MessageCircle, Send, Camera, Share2, Mail, Phone } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/FloatingChat";
import ContactForm from "@/components/ContactForm";
import FaqSection from "@/components/faq";

export default function ContactPage() {
  const heroRef = useRef<HTMLElement>(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });

  return (
    <main className="bg-cream min-h-screen">
      <Navbar />
      <WhatsAppButton />

      {/* HERO SECTION – full viewport height with proper spacing */}
      <section
        ref={heroRef}
        className="relative min-h-screen pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)" }}
      >
        {/* Gold glows */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gold/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold/10 rounded-full blur-[100px]" />

        {/* Removed py-12 md:py-20 to fix spacing */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left side – text content */}
            <div>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-10 h-px bg-gold" />
                <span className="text-gold text-xs tracking-[4px] uppercase font-semibold">Get In Touch</span>
                <div className="w-10 h-px bg-gold" />
              </div>
              <h1
                className="text-3xl sm:text-4xl md:text-5xl font-light text-white leading-[1.15]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Let’s Start a <br />
                <span className="text-gold">Conversation</span>
              </h1>
              <div className="my-4 w-16 h-[2px] bg-gold/40 rounded-full" />
              <p className="mt-4 text-gray-300 text-base md:text-lg leading-relaxed max-w-lg">
                Whether you have a question, a project in mind, or just want to explore possibilities — we’re here to help.
                Reach out through the form, or connect with us directly via social media.
              </p>
              {/* Social media cards */}
              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href="https://wa.me/27684615802"
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium transition shadow-md"
                >
                  <MessageCircle size={16} /> WhatsApp
                </a>
                <a
                  href="https://www.instagram.com/afzglobalksa?igsh=b3Rid3VvcXlpc3Zj&utm_source=qr"
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:opacity-90 text-white px-4 py-2 rounded-full text-sm font-medium transition shadow-md"
                >
                  <Camera size={16} /> Instagram
                </a>
                <a
                  href="https://facebook.com/afzglobalksa"
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-full text-sm font-medium transition shadow-md"
                >
                  <Share2 size={16} /> Facebook
                </a>
              </div>
            </div>

            {/* Right side – image */}
            <div className="relative flex justify-center items-center">
              <div className="absolute w-[350px] h-[350px] bg-gold/20 rounded-full blur-3xl animate-pulse-slow" />
              <div className="absolute w-[250px] h-[250px] bg-gold/10 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: "1s" }} />

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
                      src="/contact.jpg"
                      alt="Contact AFZ Global"
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

      {/* CONTACT FORM SECTION */}
      <div className="relative bg-cream py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <ContactForm />
        </div>
      </div>

      {/* FAQ SECTION */}
      <FaqSection />

      {/* WHATSAPP CTA */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="relative bg-gradient-to-br from-gold/10 to-gold/5 rounded-2xl p-8 md:p-10 text-center border border-gold/30 shadow-lg">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-3">
              Prefer a quick chat?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact us directly on WhatsApp and get an instant response from our team.
            </p>
            <a
              href="https://wa.me/966500000000"
              target="_blank"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Send size={18} />
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}