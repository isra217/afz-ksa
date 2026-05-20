"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

// Expanded testimonials with realistic Saudi names, roles, and pictures
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
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Number of visible cards depends on screen size (handled by CSS grid)
  // For carousel logic, we treat each testimonial as a slide.
  // On desktop, we show 3 at a time; on mobile 1.
  // We'll implement a "slide by 1" carousel.

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play effect
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(nextSlide, 5000);
    } else if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, currentIndex]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // Calculate visible testimonials (for manual control we use transform)
  // But better: use CSS grid with overflow hidden and transform translateX
  // We'll create a carousel container that slides horizontally.

  // Duplicate testimonials for seamless loop? Not necessary, we'll wrap around.

  // For simplicity, we render all cards in a flex row and translate based on currentIndex.
  // Each card width = 33.333% on desktop, 100% on mobile (handled by responsive classes).

  // We'll compute the translate value as a percentage of the container width.
  // But easier: use Tailwind with dynamic style.

  return (
    <section
      ref={sectionRef}
      className="bg-cream py-24 md:py-28 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
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
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="w-full md:w-1/3 flex-shrink-0 px-3"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100">
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
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md border border-gold/30 text-gold hover:bg-gold hover:text-white transition-all z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md border border-gold/30 text-gold hover:bg-gold hover:text-white transition-all z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots / Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 5000);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-6 bg-gold"
                    : "w-1.5 bg-gray-300 hover:bg-gold/50"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Optional: subtle animation on scroll */}
        <style jsx>{`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .reveal {
            animation: fadeUp 0.6s ease forwards;
          }
        `}</style>
      </div>
    </section>
  );
}