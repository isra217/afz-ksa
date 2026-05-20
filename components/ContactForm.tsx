"use client";
import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative bg-cream py-24 md:py-28 overflow-hidden">
      {/* Gold glow backgrounds (same as Services section) */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-[#C8A96B]/10 rounded-full blur-[140px] animate-pulse-slow" />
      <div
        className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-[#C8A96B]/5 rounded-full blur-[160px] animate-pulse-slow"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left side - text content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-px bg-gold" />
              <span className="text-gold text-xs tracking-[4px] uppercase font-semibold">
                Get Started
              </span>
              <div className="w-10 h-px bg-gold" />
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 leading-[1.15] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Ready to Build a <span className="text-gold">Smarter</span> Business in Saudi Arabia?
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Start with a consultation. Get a full brief. Receive a clear quote. 72-hour refund if you're not fully in — no conditions.
            </p>
            <div className="space-y-3">
              {[
                "72-hour full refund guarantee",
                "Bilingual team — Arabic & English",
                "Saudi market specialists",
                "Vision 2030 aligned solutions",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-gray-700">
                  <div className="w-4 h-px bg-gold" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[10px] tracking-[3px] text-gray-500 uppercase mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-white border border-gray-200 rounded-lg p-3 text-gray-900 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition"
                />
              </div>
              <div>
                <label className="block text-[10px] tracking-[3px] text-gray-500 uppercase mb-1">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  className="w-full bg-white border border-gray-200 rounded-lg p-3 text-gray-900 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition"
                />
              </div>
            </div>
            <div>
              <label className="block text-[10px] tracking-[3px] text-gray-500 uppercase mb-1">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full bg-white border border-gray-200 rounded-lg p-3 text-gray-900 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition"
              />
            </div>
            <div>
              <label className="block text-[10px] tracking-[3px] text-gray-500 uppercase mb-1">
                Service Required
              </label>
              <select
                className="w-full bg-white border border-gray-200 rounded-lg p-3 text-gray-900 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition"
              >
                <option>Select a service...</option>
                <option>Accounting & Zakat</option>
                <option>Company Formation</option>
                <option>Web Development</option>
                <option>App Development</option>
                <option>Social & Ads</option>
                <option>AI & Automation</option>
                <option>Multiple Services</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] tracking-[3px] text-gray-500 uppercase mb-1">
                Project Brief
              </label>
              <textarea
                rows={3}
                className="w-full bg-white border border-gray-200 rounded-lg p-3 text-gray-900 focus:border-gold focus:ring-1 focus:ring-gold outline-none resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gold text-black py-4 font-semibold tracking-wider rounded-lg shadow-sm hover:bg-gold/80 transition-all duration-300"
            >
              {submitted
                ? "✓ Submitted — We'll contact you within 24h"
                : "Start Your Project →"}
            </button>
            <p className="text-[9px] text-center text-gray-500 tracking-wider">
              72-HOUR REFUND · NO HIDDEN CONDITIONS
            </p>
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}