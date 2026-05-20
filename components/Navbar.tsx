"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#why" },
    { name: "Industries", href: "#industries" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-cream/90 backdrop-blur-sm border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="relative w-9 h-9">
              <Image
                src="/logo.png"
                alt="AFZ Global"
                width={36}
                height={36}
                className="object-contain rounded-full shadow-sm"
              />
            </div>
            <div>
              <div className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 group-hover:text-gold transition-colors">
                AFZ Global
              </div>
              <div className="text-[10px] md:text-[11px] tracking-[2px] text-gold/80 font-arabic font-semibold mt-0.5">
                المملكة العربية السعودية
              </div>
            </div>
          </Link>

          {/* Desktop Nav - Centered */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center gap-8 xl:gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors group"
                >
                  {link.name}
                  {/* Gold underline on hover */}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button - Gold, rounded-full, no arrow */}
          <div className="hidden md:block">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-gold text-white text-sm font-semibold hover:bg-gold-dark transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md"
            >
              Start Project
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-gray-800" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-gray-200 py-6 px-6 flex flex-col gap-5 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-gray-800 text-lg font-medium hover:text-gold transition"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="mt-2 bg-gold text-white py-3 text-center rounded-full font-semibold hover:bg-gold-dark transition"
            onClick={() => setMobileOpen(false)}
          >
            Start Project
          </Link>
        </div>
      )}
    </nav>
  );
}