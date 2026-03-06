"use client";

import { useChat } from "@ai-sdk/react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Sparkles } from "lucide-react";
import { DefaultChatTransport, UIMessage } from "ai";

const initialMessages: UIMessage[] = [
  {
    id: "welcome",
    role: "assistant",
    parts: [{ type: "text", text: "Hey! 👋 I'm the ADEV Studio assistant. Ask me anything about our services, tech stack, or how we can help with your project." }],
  },
];

export default function ChatBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { messages, sendMessage, status } = useChat({
    id: "adev-chat",
    messages: initialMessages,
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  const isStreaming = status === "streaming" || status === "submitted";

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, status]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = inputValue.trim();
    if (!text || isStreaming) return;
    setInputValue("");
    sendMessage({ text });
  };

  // Extract text from a message's parts
  const getMessageText = (msg: (typeof messages)[number]) => {
    if (!msg.parts) return "";
    return msg.parts
      .filter((p) => p.type === "text")
      .map((p) => ("text" in p ? p.text : ""))
      .join("");
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-[60] w-[380px] max-w-[calc(100vw-48px)] bg-background border border-foreground/10 rounded-2xl shadow-2xl shadow-foreground/5 flex flex-col overflow-hidden"
            style={{ height: "min(520px, calc(100vh - 140px))" }}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-foreground/10 bg-foreground/[0.02]">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center">
                    <Sparkles size={14} className="text-background" />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">ADEV Assistant</p>
                  <p className="text-[10px] text-foreground/40 font-mono uppercase tracking-wider">Powered by AI</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-foreground/5 rounded-full transition-colors"
                type="button"
              >
                <X size={16} className="text-foreground/40" />
              </button>
            </div>

            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-5 py-4 space-y-4"
              style={{ scrollbarWidth: "thin" }}
            >
              {messages.map((message) => {
                const text = getMessageText(message);
                if (!text) return null;
                return (
                  <div
                    key={message.id}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] px-4 py-2.5 text-sm leading-relaxed ${
                        message.role === "user"
                          ? "bg-foreground text-background rounded-2xl rounded-br-md"
                          : "bg-foreground/[0.05] text-foreground/80 rounded-2xl rounded-bl-md"
                      }`}
                    >
                      {text}
                    </div>
                  </div>
                );
              })}
              {isStreaming && messages[messages.length - 1]?.role !== "assistant" && (
                <div className="flex justify-start">
                  <div className="bg-foreground/[0.05] rounded-2xl rounded-bl-md px-4 py-3 flex gap-1.5">
                    <div className="w-1.5 h-1.5 bg-foreground/30 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <div className="w-1.5 h-1.5 bg-foreground/30 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <div className="w-1.5 h-1.5 bg-foreground/30 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
            </div>

            <form
              onSubmit={handleSend}
              className="px-4 py-3 border-t border-foreground/10 bg-foreground/[0.02]"
            >
              <div className="flex items-center gap-2 bg-foreground/[0.04] rounded-xl px-4 py-2">
                <input
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about our services..."
                  className="flex-1 bg-transparent text-sm text-foreground focus:outline-none placeholder:text-foreground/30"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isStreaming}
                  className="p-1.5 rounded-lg bg-foreground text-background disabled:opacity-30 hover:bg-foreground/90 transition-all"
                >
                  <Send size={14} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-[60] w-14 h-14 rounded-full bg-foreground text-background shadow-lg shadow-foreground/10 flex items-center justify-center hover:shadow-xl hover:shadow-foreground/15 transition-shadow"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X size={22} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageSquare size={22} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
