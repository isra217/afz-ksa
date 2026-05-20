"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Accounting & Zakat",
    shortDesc:
      "Zakat compliance, VAT filing, financial reporting, and advisory services by Saudi regulations.",
    points: [
      "Zakat calculation and filing",
      "VAT return preparation",
      "Monthly bookkeeping",
      "Saudi GAAP compliance",
      "Audit support & tax advisory",
    ],
    image:
      "https://images.unsplash.com/photo-1554224154-22dec7ec8818?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Company Formation",
    shortDesc:
      "CR registration, MISA licensing, LLC setup, full compliance handled remotely.",
    points: [
      "Commercial Registration (CR)",
      "MISA investment license",
      "LLC & branch setup",
      "Bank account assistance",
      "PRO compliance services",
    ],
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Web Development",
    shortDesc:
      "Conversion-focused websites with Arabic support, SEO, and AI chatbots built in.",
    points: [
      "Arabic & English UI/UX",
      "SEO optimized websites",
      "E-commerce systems",
      "AI chatbot integration",
      "Fast & responsive design",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "App Development",
    shortDesc:
      "CRMs, booking systems, ecommerce platforms built for the Saudi market.",
    points: [
      "iOS & Android apps",
      "CRM & ERP systems",
      "Booking platforms",
      "Mada & Apple Pay integration",
      "Cloud backend systems",
    ],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Social & Ads",
    shortDesc:
      "TikTok, Snapchat, Meta campaigns + AI-driven lead automation systems.",
    points: [
      "TikTok & Snapchat ads",
      "Meta & Instagram campaigns",
      "Lead generation systems",
      "Content management",
      "ROI performance tracking",
    ],
    image:
      "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "AI Automation",
    shortDesc:
      "24/7 AI agents that respond, qualify, book, and follow up across channels.",
    points: [
      "WhatsApp AI chatbots",
      "Automated lead qualification",
      "Appointment booking",
      "SMS & email follow-up",
      "Custom AI workflows",
    ],
    image:
      "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const reveals = sectionRef.current?.querySelectorAll(".reveal");

    reveals?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 md:py-28 overflow-hidden"
      style={{ backgroundColor: "#EFE7DA" }}
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-[#C8A96B]/10 rounded-full blur-[140px] animate-pulse-slow" />

      <div
        className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-[#C8A96B]/5 rounded-full blur-[160px] animate-pulse-slow"
        style={{ animationDelay: "1s" }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-10 h-px bg-[#C8A96B]" />

            <span className="text-[#C8A96B] text-xs tracking-[4px] uppercase font-semibold">
              AFZ Services
            </span>

            <div className="w-10 h-px bg-[#C8A96B]" />
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 leading-[1.15]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Premium Business Solutions <br />
            <span className="text-[#C8A96B]">
              Built for Saudi Arabia
            </span>
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            From company setup to AI automation — everything your business
            needs to scale in the Kingdom.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className="reveal group relative h-[420px] rounded-[28px] overflow-hidden shadow-lg"
              style={{ transitionDelay: `${idx * 0.08}s` }}
            >
              {/* Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                unoptimized
              />

              {/* Default Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent transition-all duration-500 group-hover:opacity-0" />

              {/* Default Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 z-10 transition-all duration-500 group-hover:translate-y-10 group-hover:opacity-0">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-white/85 text-sm leading-relaxed mb-5">
                  {service.shortDesc}
                </p>

                <div className="inline-flex items-center gap-2 text-sm font-semibold text-white border border-white/40 px-4 py-2 rounded-full backdrop-blur-md bg-white/10">
                  Learn More <ArrowRight size={14} />
                </div>
              </div>

              {/* Hover Slide Up Overlay */}
              <div className="absolute inset-0 bg-[#F7F3EE]/95 backdrop-blur-md translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] z-20 p-7 flex flex-col justify-end">
                {/* Gold top line */}
                <div className="w-16 h-[2px] bg-[#C8A96B] mb-5" />

                <h3 className="text-2xl font-serif text-gray-900 mb-4">
                  {service.title}
                </h3>

                <div className="space-y-3 mb-6">
                  {service.points.map((point, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 text-gray-700 text-sm"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#C8A96B] mt-2 flex-shrink-0" />

                      <p>{point}</p>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#C8A96B] text-white font-semibold hover:bg-[#b89555] transition-all duration-300 shadow-lg"
                >
                  Get Consultation <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.5;
            transform: scale(1);
          }

          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}