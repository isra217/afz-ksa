"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const portfolioItems = [
  {
    id: 1,
    title: "Voorq — E‑commerce Fashion",
    category: "Ecommerce",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&auto=format",
    link: "https://voorq.com/",
    desc: "High‑conversion fashion store with seamless checkout and product discovery.",
  },
  {
    id: 2,
    title: "Unexpectifly — Travel Booking",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&auto=format",
    link: "https://unexpectifly.com/",
    desc: "Modern travel platform for personalised trip planning and bookings.",
  },
  {
    id: 3,
    title: "AeroSkyFly — Drone Media",
    category: "Ecommerce",
    // Fixed: replaced broken Unsplash URL with a working drone image
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=600&auto=format",
    link: "https://aeroskyfly.com/",
    desc: "Cinematic aerial photography and videography portfolio.",
  },
  {
    id: 4,
    title: "Peace Production — Creative Studio",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&auto=format",
    link: "https://peaceproduction.com.pk/",
    desc: "Full‑service production house for ads, films and digital content.",
  },
  {
    id: 5,
    title: "Dust Domain — Air Duct Cleaning",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format",
    link: "https://dustdomain.com/",
    desc: "Professional HVAC cleaning services with easy online booking.",
  },
  {
    id: 6,
    title: "DN Services — Medical Assessments",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format",
    link: "https://dnservicesltd.co.uk/",
    desc: "DVLA‑compliant medical reporting for driver licensing.",
  },
  {
    id: 7,
    title: "MRT Interiors — Luxury Design",
    category: "Websites",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&auto=format",
    link: "https://mrtinteriorsdecor.com/",
    desc: "Bespoke interior design for residential and commercial spaces.",
  },
  {
    id: 8,
    title: "Lexacta — Medico‑Legal Experts",
    category: "Compliance/Forms",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format",
    link: "https://lexacta.co.uk/",
    desc: "Independent orthopaedic expert witness and court‑compliant reports.",
  },
];

const categories = ["Show All", "Websites", "Ecommerce", "SEO", "Branding", "Compliance/Forms"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Show All");
  const [visibleCount, setVisibleCount] = useState(3);
  const [itemsToShow, setItemsToShow] = useState(portfolioItems.slice(0, 3));
  const sectionRef = useRef<HTMLElement>(null);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://placehold.co/600x400/1a1a1a/ffffff?text=Project+Image";
  };

  useEffect(() => {
    const filtered =
      activeCategory === "Show All" || activeCategory === "Websites"
        ? portfolioItems
        : portfolioItems.filter((item) => item.category === activeCategory);
    setItemsToShow(filtered.slice(0, visibleCount));
  }, [activeCategory, visibleCount]);

  const handleShowMore = () => {
    const total =
      activeCategory === "Show All" || activeCategory === "Websites"
        ? portfolioItems.length
        : portfolioItems.filter((item) => item.category === activeCategory).length;
    if (visibleCount >= total) {
      setVisibleCount(3);
    } else {
      setVisibleCount(total);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal-card").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [itemsToShow]);

  const totalFiltered =
    activeCategory === "Show All" || activeCategory === "Websites"
      ? portfolioItems.length
      : portfolioItems.filter((item) => item.category === activeCategory).length;
  const showMoreText = visibleCount >= totalFiltered ? "Show Less" : "Show More";

  return (
    <section id="portfolio" ref={sectionRef} className="bg-cream py-24 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-10 h-px bg-gold" />
            <span className="text-gold text-xs tracking-[4px] uppercase font-semibold">
              Our Work
            </span>
            <div className="w-10 h-px bg-gold" />
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 leading-[1.15]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Digital Excellence <span className="text-gold">Portfolio</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Real results for real Saudi brands — websites, e‑commerce, SEO, branding and compliance solutions that drive growth.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setVisibleCount(3);
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

        {/* Portfolio Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {itemsToShow.map((item, idx) => (
            <div
              key={item.id}
              className="reveal-card group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
              style={{ transitionDelay: `${(idx % 3) * 0.05}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-block bg-white text-black text-xs font-semibold px-3 py-1.5 rounded-full shadow-md backdrop-blur-sm bg-white/95">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6 pt-5 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">{item.desc}</p>
                <div className="mt-auto">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full sm:w-auto px-5 py-2.5 bg-white/70 backdrop-blur-sm border border-gold/40 text-gray-800 font-semibold rounded-lg shadow-sm hover:bg-gold hover:text-white hover:border-gold transition-all duration-300"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {totalFiltered > 3 && (
          <div className="text-center mt-12">
            <button
              onClick={handleShowMore}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white/70 backdrop-blur-sm border border-gold/40 text-gray-800 font-semibold hover:bg-gold hover:text-white hover:border-gold transition-all shadow-sm"
            >
              {showMoreText}
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  visibleCount >= totalFiltered ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        .reveal-card {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .reveal-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}