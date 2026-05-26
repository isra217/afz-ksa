"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Khalid Al‑Rashidi",
    role: "CEO, Riyadh Realty Group",
    quote: "AFZ transformed our real estate platform completely. The AI system books appointments around the clock. Response time went from hours to under a second. Absolutely game‑changing for our business.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    date: "March 2025",
  },
  {
    id: 2,
    name: "Noura Al‑Qahtani",
    role: "Founder, Clinica Premium",
    quote: "The team understood Saudi market requirements from day one. VAT compliance, Arabic UX, Zakat — all handled without us explaining twice. Our patient bookings increased by 40% in just two months.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    date: "January 2025",
  },
  {
    id: 3,
    name: "Faisal Al‑Ghamdi",
    role: "Director, Gulf Trade Co.",
    quote: "We launched our ecommerce store in three weeks. Premium design, exceptional performance, and post‑launch support that actually showed up. Best investment we made this year.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    date: "February 2025",
  },
  {
    id: 4,
    name: "Lamia Al‑Otaibi",
    role: "Marketing Head, Najd Properties",
    quote: "The SEO work doubled our organic traffic in six months. Their local Arabic keyword strategy is unmatched. Highly recommended for any Saudi brand.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/89.jpg",
    date: "December 2024",
  },
  {
    id: 5,
    name: "Omar Al‑Zahrani",
    role: "CTO, Smart Vision Tech",
    quote: "Great developers and even better consultants. They don't just code – they solve business problems. Our app now handles 50k+ daily users flawlessly.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    date: "April 2025",
  },
  {
    id: 6,
    name: "Hind Al‑Malki",
    role: "Director of Operations, Al‑Waha Hospitality",
    quote: "The AI chatbot integrated with our WhatsApp handles 70% of guest inquiries automatically. Staff now focuses on service, not repetitive messages. A true competitive edge in the Saudi market.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    date: "May 2025",
  },
];

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else {
        setCardsPerView(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(testimonials.length / cardsPerView);
  const currentPage = Math.floor(startIndex / cardsPerView);

  const nextSlide = () => {
    if (currentPage + 1 < totalPages) {
      setStartIndex(startIndex + cardsPerView);
    } else {
      setStartIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentPage > 0) {
      setStartIndex(startIndex - cardsPerView);
    } else {
      setStartIndex((totalPages - 1) * cardsPerView);
    }
  };

  useEffect(() => {
    if (isAutoPlaying && totalPages > 1) {
      autoPlayRef.current = setInterval(nextSlide, 5000);
    } else if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, startIndex, totalPages, cardsPerView]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const visibleTestimonials = testimonials.slice(startIndex, startIndex + cardsPerView);

  // Animation variants - simplified to avoid TypeScript errors
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1 },
    }),
  };

  return (
    <section
      ref={sectionRef}
      className="bg-cream py-24 md:py-28 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header with scroll animation */}
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-10 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[4px] uppercase font-semibold">
              Testimonials
            </span>
            <div className="w-10 h-px bg-gold" />
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 leading-[1.15]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What Our Clients <span className="text-gold">Say</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Real feedback from real Saudi brands – read how we’ve helped them grow.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Cards Grid - each card animates individually on scroll */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-500">
            {visibleTestimonials.map((t, idx) => (
              <motion.div
                key={t.id}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                variants={cardVariants}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-100"
              >
                {/* Google Rating Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">Google Reviews</span>
                </div>

                {/* Quote */}
                <div className="text-4xl font-serif text-gold/20 mb-2">“</div>
                <p className="text-gray-700 text-sm leading-relaxed mb-5 flex-1">
                  {t.quote}
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.role}</div>
                    <div className="text-xs text-gold/70 mt-1">{t.date}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {totalPages > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md border border-gold/30 text-gold hover:bg-gold hover:text-white transition-all z-10"
                aria-label="Previous testimonials"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md border border-gold/30 text-gold hover:bg-gold hover:text-white transition-all z-10"
                aria-label="Next testimonials"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          {/* Dots */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setStartIndex(idx * cardsPerView);
                    setIsAutoPlaying(false);
                    setTimeout(() => setIsAutoPlaying(true), 5000);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentPage === idx
                      ? "w-6 bg-gold"
                      : "w-1.5 bg-gray-300 hover:bg-gold/50"
                  }`}
                  aria-label={`Go to page ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}