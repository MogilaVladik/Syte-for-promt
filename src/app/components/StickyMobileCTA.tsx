"use client";

import { useEffect, useState } from "react";

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
      data-oid="3q-k7hq"
    >
      <div
        className="bg-black/95 backdrop-blur-lg border-t border-white/20 p-4 shadow-2xl"
        data-oid="hu0lczv"
      >
        <div className="flex items-center gap-3" data-oid="o25jeuq">
          {/* Main CTA */}
          <a
            href="#pricing"
            className="flex-1 px-4 py-3 bg-[#E50914] hover:bg-[#c20712] text-white font-bold text-center rounded-xl transition-all shadow-lg active:scale-95"
            data-oid="q32q1b8"
          >
            Записаться — 35 000 ₽
          </a>

          {/* Telegram Icon Button */}
          <a
            href="https://t.me/time_t0_it"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all active:scale-95"
            aria-label="Связаться в Telegram"
            data-oid="t8cnhjz"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              data-oid="fffhga0"
            >
              <path
                d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"
                data-oid="6bcy6de"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
