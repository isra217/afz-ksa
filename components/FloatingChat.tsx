"use client";

import { useState, useRef, useEffect } from "react";
import {
  MessageCircle,
  X,
  Bot,
  Send,
  Phone,
  CircleDot,
} from "lucide-react";

export default function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<
    { type: "bot" | "user"; text: string }[]
  >([
    {
      type: "bot",
      text: "Hi 👋 I'm AFZ AI Assistant. Ask me anything about our services.",
    },
  ]);
  const chatBodyRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new message arrives
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const generateFakeAIResponse = (msg: string) => {
    return (
      "I understand: " +
      msg +
      "\n\n👉 (This is a demo response. Connect AI API for real answers.)"
    );
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = input;

    setMessages((prev) => [
      ...prev,
      { type: "user", text: userMsg },
      { type: "bot", text: generateFakeAIResponse(userMsg) },
    ]);

    setInput("");
  };

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/966500000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-28 right-5 z-50 w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:scale-110 transition"
      >
        <Phone className="text-white" size={20} />
      </a>

      {/* Chat Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-8 right-5 z-50 w-12 h-12 rounded-full bg-[#C8A96B] flex items-center justify-center shadow-lg hover:scale-110 transition"
      >
        {open ? (
          <X className="text-white" size={20} />
        ) : (
          <MessageCircle className="text-white" size={20} />
        )}
      </button>

      {/* Chat Window - responsive height */}
      <div
        className={`fixed bottom-28 right-5 z-50 w-[92%] sm:w-[380px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        {/* Top Bar */}
        <div className="bg-[#111] px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bot className="text-[#C8A96B]" size={18} />
            <div>
              <p className="text-white text-sm font-semibold">AFZ AI Assistant</p>
              <div className="flex items-center gap-2 text-xs text-white/60">
                <CircleDot className="text-green-400" size={10} />
                Online
              </div>
            </div>
          </div>
        </div>

        {/* Chat Body - responsive max height */}
        <div
          ref={chatBodyRef}
          className="bg-[#F7F3EE] max-h-[50vh] sm:max-h-[400px] overflow-y-auto p-4 space-y-3"
        >
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${m.type === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`px-3 py-2 rounded-xl text-sm max-w-[85%] whitespace-pre-line ${
                  m.type === "user"
                    ? "bg-[#C8A96B] text-white"
                    : "bg-white text-gray-700 shadow-sm"
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="bg-white p-3 border-t flex items-center gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type your message..."
            className="flex-1 text-sm px-3 py-2 border rounded-xl outline-none focus:border-[#C8A96B]"
          />
          <button
            onClick={sendMessage}
            className="w-10 h-10 rounded-xl bg-[#C8A96B] flex items-center justify-center hover:scale-105 transition"
          >
            <Send size={16} className="text-white" />
          </button>
        </div>

        {/* Footer */}
        <div className="p-2 bg-white border-t">
          <a
            href="https://wa.me/966500000000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs flex items-center justify-center gap-2 text-green-600 font-medium"
          >
            <Phone size={14} />
            Need human support? Contact on WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}