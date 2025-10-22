"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-24 right-4 sm:bottom-8 sm:right-8 z-40 p-3 sm:p-4 bg-[#E50914] hover:bg-[#c20712] text-white rounded-full shadow-lg hover:shadow-[#E50914]/50 transition-all hover:scale-110 active:scale-95"
      aria-label="Вернуться наверх"
      data-oid="3qfiwbq"
    >
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        data-oid="t6evp0t"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
          data-oid="8zwscqw"
        />
      </svg>
    </button>
  );
}
