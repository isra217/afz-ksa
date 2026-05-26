"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Bot, Send, Phone, CircleDot } from "lucide-react";

type Message = {
  type: "bot" | "user";
  text: string;
  suggestions?: string[];
};

export default function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const chatBodyRef = useRef<HTMLDivElement>(null);

  const WHATSAPP = "https://wa.me/27684615802";

  /* ================= INITIAL MESSAGE ================= */
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "bot",
      text:
        "Welcome to AFZ Global. Ask anything about our services, pricing, or timelines.",
      suggestions: [
        "What services do you offer?",
        "How much does a website cost?",
        "How long does development take?",
        "Contact details",
      ],
    },
  ]);

  /* ================= AUTO SCROLL ================= */
  useEffect(() => {
    if (!chatBodyRef.current) return;

    chatBodyRef.current.scrollTo({
      top: chatBodyRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, typing]);

  /* ================= INTENT DETECTOR ================= */
  const detectIntent = (msg: string) => {
    const text = msg.toLowerCase();

    if (text.match(/service|what do you do|offer/)) return "services";
    if (text.match(/web|website|site/)) return "website";
    if (text.match(/app|mobile|ios|android/)) return "app";
    if (text.match(/price|cost|budget|charges/)) return "pricing";
    if (text.match(/time|duration|long|weeks|days/)) return "timeline";
    if (text.match(/seo|marketing|ads/)) return "seo";
    if (text.match(/ai|automation|bot/)) return "ai";
    if (text.match(/contact|whatsapp|email/)) return "contact";

    return "unknown";
  };

  /* ================= RESPONSES ================= */
  const RESPONSES: Record<string, Message> = {
    services: {
      text:
        "We provide website development, mobile apps, SEO, AI automation, accounting, and company setup services.",
      suggestions: ["Website details", "App details", "AI automation"],
    },

    website: {
      text:
        "We build business websites, ecommerce stores, portfolios, and custom platforms. Delivery time is 2–4 weeks depending on requirements.",
      suggestions: [
        "Website pricing",
        "Do you build ecommerce?",
        "Can you redesign website?",
      ],
    },

    app: {
      text:
        "We develop Android and iOS apps including business and ecommerce applications. Timeline is 4–8 weeks.",
      suggestions: ["App pricing", "iOS apps?", "App maintenance?"],
    },

    pricing: {
      text:
        "Pricing depends on project requirements. Websites are affordable, apps are medium to high, AI is custom priced.",
      suggestions: ["Website cost", "App cost", "SEO cost"],
    },

    timeline: {
      text:
        "Timelines vary: websites 2–4 weeks, apps 4–8 weeks, SEO 2–4 months.",
      suggestions: ["Fast delivery?", "Urgent project?", "Updates?"],
    },

    seo: {
      text:
        "We offer SEO, Google ranking, ads management, and social media marketing services.",
      suggestions: ["Google Ads?", "Instagram marketing?"],
    },

    ai: {
      text:
        "We build AI automation systems, chatbots, CRM systems, and business workflows.",
      suggestions: ["Build chatbot?", "AI pricing?"],
    },

    contact: {
      text:
        `Contact us via WhatsApp: ${WHATSAPP}\nOr fill the contact form on our website.`,
      suggestions: ["Open WhatsApp", "Contact form"],
    },
  };

  /* ================= FALLBACK ================= */
  const fallbackResponse = (msg: string): Message => {
    return {
      text:
        "I may not have an exact answer for that, but our team can help you directly.",
      suggestions: ["Contact on WhatsApp", "Fill contact form", "View services"],
    };
  };

  /* ================= SEND MESSAGE ================= */
  const sendMessage = (custom?: string) => {
    const text = (custom || input).trim();
    if (!text) return;

    setMessages((prev) => [...prev, { type: "user", text }]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const intent = detectIntent(text);

      const response =
        intent === "unknown"
          ? fallbackResponse(text)
          : RESPONSES[intent];

      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: response.text,
          suggestions: response.suggestions,
        },
      ]);

      setTyping(false);
    }, 500);
  };

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href={WHATSAPP}
        target="_blank"
        className="fixed bottom-28 right-5 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-xl"
      >
        <Phone className="text-white" size={22} />
      </a>

      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-8 right-5 z-50 w-14 h-14 bg-[#C8A96B] rounded-full flex items-center justify-center shadow-xl"
      >
        {open ? (
          <X className="text-white" />
        ) : (
          <MessageCircle className="text-white" />
        )}
      </button>

      {/* CHAT WINDOW */}
      <div
        className={`fixed bottom-28 right-5 z-50 w-[92%] sm:w-[400px] h-[70vh] rounded-2xl overflow-hidden shadow-2xl border bg-white flex flex-col transition-all ${
          open
            ? "opacity-100"
            : "opacity-0 pointer-events-none translate-y-10"
        }`}
      >
        {/* HEADER */}
        <div className="bg-[#111] px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Bot className="text-[#C8A96B]" />
            <div>
              <p className="text-white text-sm font-semibold">
                AFZ Global Chat
              </p>
              <div className="flex items-center gap-1 text-xs text-white/60">
                <CircleDot className="text-green-400" size={10} />
                Online
              </div>
            </div>
          </div>
        </div>

        {/* CHAT BODY */}
        <div
          ref={chatBodyRef}
          className="flex-1 overflow-y-auto p-4 bg-[#F7F3EE] space-y-4"
        >
          {messages.map((m, i) => (
            <div key={i}>
              <div
                className={`flex ${
                  m.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-3 rounded-2xl text-sm max-w-[85%] whitespace-pre-line ${
                    m.type === "user"
                      ? "bg-[#C8A96B] text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  {m.text}
                </div>
              </div>

              {/* Suggestions */}
              {m.type === "bot" && m.suggestions && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {m.suggestions.map((s, idx) => (
                    <button
                      key={idx}
                      onClick={() => sendMessage(s)}
                      className="text-[11px] bg-white border px-3 py-2 rounded-full hover:bg-[#C8A96B] hover:text-white"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          {typing && (
            <div className="text-xs text-gray-500">typing...</div>
          )}
        </div>

        {/* INPUT */}
        <div className="p-3 border-t bg-white flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Ask something..."
            className="flex-1 border rounded-xl px-3 py-2 text-sm"
          />

          <button
            onClick={() => sendMessage()}
            className="w-10 h-10 bg-[#C8A96B] rounded-xl flex items-center justify-center"
          >
            <Send className="text-white" size={16} />
          </button>
        </div>
      </div>
    </>
  );
}