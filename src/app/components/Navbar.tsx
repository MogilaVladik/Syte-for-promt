"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
      data-oid="xsqw0un"
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="h_zttu2"
      >
        <div
          className="flex items-center justify-between h-16 sm:h-20"
          data-oid="gys9rki"
        >
          {/* Logo */}
          <div className="flex-shrink-0" data-oid="nvnokhe">
            <h2
              className="text-xl sm:text-2xl font-bold text-white"
              data-oid="jfrsliv"
            >
              Time to IT
              <span className="text-[#E50914]" data-oid="k2q9p:p">
                .
              </span>
            </h2>
          </div>

          {/* Desktop Navigation */}
          <div
            className="hidden md:flex items-center space-x-6 lg:space-x-8"
            data-oid="kbv:hec"
          >
            <button
              onClick={() => scrollToSection("program")}
              className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base"
              data-oid="ld_:-bw"
            >
              Программа
            </button>
            <button
              onClick={() => scrollToSection("for-whom")}
              className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base"
              data-oid="_gevo:5"
            >
              Для кого
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base"
              data-oid="k_z02it"
            >
              Стоимость
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base"
              data-oid="godccs6"
            >
              FAQ
            </button>
          </div>

          {/* Right buttons */}
          <div className="flex items-center gap-3" data-oid="p3g61pn">
            {/* CTA Button */}
            <a
              href="https://t.me/time_t0_it"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-6 py-2 sm:py-3 bg-[#E50914] hover:bg-[#c20712] text-white font-semibold rounded-2xl transition-all shadow-lg hover:shadow-[#E50914]/50 text-sm sm:text-base"
              data-oid="dr7at:."
            >
              Записаться
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
