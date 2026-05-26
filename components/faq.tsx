"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

// FAQ items with categories
const allFaqs = [
  {
    question: "How long does it take to set up a company in Saudi Arabia?",
    answer: "Company formation typically takes 2–4 weeks depending on the business activity and required licenses. We handle the entire CR registration, MISA licensing (if needed), and bank account assistance to ensure a smooth process.",
    category: "Company Setup",
  },
  {
    question: "Do you provide ongoing accounting and filing?",
    answer: "Yes. We offer monthly bookkeeping, VAT return preparation, plus full compliance with Saudi GAAP. You'll receive regular financial reports and audit support.",
    category: "Accounting & Tax",
  },
  {
    question: "Can you build an AI chatbot for WhatsApp?",
    answer: "Absolutely. We create custom AI agents that integrate with WhatsApp, your website, and other channels. They qualify leads, book appointments, answer FAQs, and follow up automatically 24/7.",
    category: "AI & Tech",
  },
  {
    question: "What is your typical website delivery time?",
    answer: "Most websites go live in 2–3 weeks. For more complex projects (e.g., e‑commerce or custom portals), delivery is 4–8 weeks. We work with a fixed timeline and keep you updated every step.",
    category: "AI & Tech",
  },
  {
    question: "Do you offer bilingual support (Arabic/English)?",
    answer: "Yes, our team is fully bilingual. We design interfaces, content, and communications in both Arabic and English to serve the Saudi market effectively.",
    category: "General",
  },
  {
    question: "What is your refund policy?",
    answer: "We offer a 72‑hour refund window after the initial deposit. If you're not fully satisfied for any reason, you'll receive a full refund – no conditions, no hidden fees.",
    category: "General",
  },
  {
    question: "Do you handle MISA foreign investment licenses?",
    answer: "Yes, we assist with MISA licensing for foreign investors, including document preparation, submission, and follow‑up with the ministry.",
    category: "Company Setup",
  },
  {
    question: "Can you integrate Mada and Apple Pay into my app?",
    answer: "Definitely. Our app development includes payment gateway integration with Mada, Apple Pay, and other popular Saudi payment methods.",
    category: "Payments",
  },
  {
    question: "What industries do you specialize in?",
    answer: "We have deep experience in real estate, healthcare, construction, logistics, finance, and hospitality – all aligned with Vision 2030.",
    category: "Industry",
  },
  {
    question: "Will I own my website source code?",
    answer: "Yes, full ownership of all code, design files, and assets is transferred to you upon final payment. No lock‑ins.",
    category: "General",
  },
  {
    question: "Do you offer custom CRM development?",
    answer: "Yes, we build tailored CRM, ERP, and booking systems designed specifically for your Saudi business workflows.",
    category: "AI & Tech",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept bank transfers, credit cards, and digital wallets. Invoices are issued in SAR.",
    category: "Payments",
  },
];

// Unique categories for filter buttons
const categories = [
  "All",
  "Company Setup",
  "Accounting & Tax",
  "AI & Tech",
  "Payments",
  "Industry",
  "General",
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  // Filter FAQs based on selected category
  const filteredFaqs = allFaqs.filter((faq) =>
    activeCategory === "All" ? true : faq.category === activeCategory
  );

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="relative py-24 md:py-28 bg-cream overflow-hidden"
    >
      {/* Gold glows */}
      <div className="absolute top-20 right-1/4 w-[450px] h-[450px] bg-gold/5 rounded-full blur-[140px]" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-gold/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-10 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[4px] uppercase font-semibold">
              FAQ
            </span>
            <div className="w-10 h-px bg-gold" />
          </div>
           <h2
              className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 leading-[1.15]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Frequenty Asked{" "}
              <span className="italic text-[#C8A96B] font-medium">
                Questions
              </span>
            </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Everything you need to know about our services and processes.
          </p>
        </motion.div>

        {/* Filter Buttons - similar style to portfolio categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(null); // optional: close all when switching category
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gold text-white shadow-md"
                  : "bg-white/60 text-gray-600 border border-gray-200 hover:bg-gold/10 hover:border-gold/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Grid - Two Columns */}
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            No questions found in this category.
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-6"
          >
            {filteredFaqs.map((faq, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-sm border border-gold/20 overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex justify-between items-center p-5 text-left"
                >
                  <span className="text-gray-800 font-semibold text-sm md:text-base pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 text-gold"
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-0 text-gray-600 text-sm leading-relaxed border-t border-gold/10">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm">
            Still have questions?{" "}
            <a href="#contact" className="text-gold font-semibold hover:underline">
              Contact our team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}