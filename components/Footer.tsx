import Image from "next/image";
import { Mail, MapPin, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F7F3EE] border-t border-[#C8A45D]/20 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Column with Logo */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.png" // change to your actual logo path
                  alt="AFZ Global Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xs tracking-[3px] uppercase text-gray-800 font-semibold">
                AFZ / KSA
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Build, manage and scale your business in Saudi Arabia. Accounting, formation, web, apps, social, and AI — under one roof.
            </p>
            <div className="font-arabic text-[#C8A45D]/50 text-2xl mt-4">
              شريكك في النجاح
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] tracking-[3px] text-[#C8A45D] font-semibold mb-5 uppercase">
              Services
            </h4>
            <ul className="space-y-2">
              {["Accounting & Zakat", "Company Formation", "Web Development", "App Development", "Social & Ads", "AI Automation"].map(
                (s) => (
                  <li key={s}>
                    <a href="#services" className="text-gray-600 text-sm hover:text-[#C8A45D] transition">
                      {s}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-[10px] tracking-[3px] text-[#C8A45D] font-semibold mb-5 uppercase">
              Industries
            </h4>
            <ul className="space-y-2">
              {["Real Estate", "Healthcare", "Construction", "Logistics", "Finance", "Hospitality"].map(
                (i) => (
                  <li key={i}>
                    <a href="#industries" className="text-gray-600 text-sm hover:text-[#C8A45D] transition">
                      {i}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h4 className="text-[10px] tracking-[3px] text-[#C8A45D] font-semibold mb-5 uppercase">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/966500000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 text-sm hover:text-[#C8A45D] transition"
                >
                  <Send size={14} className="text-[#C8A45D]" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@afzglobal.com"
                  className="flex items-center gap-2 text-gray-600 text-sm hover:text-[#C8A45D] transition"
                >
                  <Mail size={14} className="text-[#C8A45D]" />
                  hello@afzglobal.com
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="flex items-center gap-2 text-gray-600 text-sm hover:text-[#C8A45D] transition"
                >
                  <MapPin size={14} className="text-[#C8A45D]" />
                  Riyadh | Jeddah
                </a>
              </li>
            </ul>

            {/* Social Media Icons with inline SVGs (no lucide-react dependency) */}
            <div className="mt-6">
              <h4 className="text-[10px] tracking-[3px] text-[#C8A45D] font-semibold mb-3 uppercase">
                Follow Us
              </h4>
              <div className="flex gap-4">
                {/* Facebook SVG */}
                <a
                  href="https://facebook.com/afzglobal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/60 p-2 rounded-full border border-[#C8A45D]/30 text-gray-700 hover:bg-[#C8A45D] hover:text-white transition-all duration-300"
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
                {/* Instagram SVG */}
                <a
                  href="https://instagram.com/afzglobal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/60 p-2 rounded-full border border-[#C8A45D]/30 text-gray-700 hover:bg-[#C8A45D] hover:text-white transition-all duration-300"
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
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#C8A45D]/20 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-gray-500">
          <p>© 2025 AFZ Global — Saudi Arabia. All rights reserved.</p>
          <div className="font-arabic text-[#C8A45D]/50">رؤية ٢٠٣٠</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#C8A45D] transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#C8A45D] transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}