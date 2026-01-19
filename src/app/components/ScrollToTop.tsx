"use client";

import { useEffect, useState } from "react";
import Icon from "./ui/Icon";
import { SCROLL_TO_TOP_THRESHOLD } from "@/config/constants";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > SCROLL_TO_TOP_THRESHOLD);
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
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
      className="fixed bottom-8 right-4 sm:right-8 z-40 p-3 sm:p-4 bg-[#E50914] hover:bg-[#c20712] text-white rounded-full shadow-lg hover:shadow-[#E50914]/50 transition-all hover:scale-110 active:scale-95"
      aria-label="Вернуться наверх"
    >
      <Icon
        name="arrow-up"
        className="w-5 h-5 sm:w-6 sm:h-6"
      />
    </button>
  );
}
