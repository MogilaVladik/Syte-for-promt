"use client";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-lg shadow-lg border-b border-[#E50914]/30"
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div
          className="flex items-center justify-between h-16 sm:h-20"
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <h2
              className="text-xl sm:text-2xl font-bold text-white"
            >
              Time to IT
              <span className="text-[#E50914]">
                .
              </span>
            </h2>
          </div>

          {/* Desktop Navigation */}
          <div
            className="hidden md:flex items-center space-x-6 lg:space-x-8"
          >
            <button
              onClick={() => scrollToSection("program")}
              className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base"
            >
              Программа
            </button>
            <button
              onClick={() => scrollToSection("for-whom")}
              className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base"
            >
              Для кого
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base"
            >
              Стоимость
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base"
            >
              FAQ
            </button>
          </div>

          {/* CTA Button */}
          <a
            href="https://t.me/time_t0_it"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 sm:px-6 py-2 sm:py-3 bg-[#E50914] hover:bg-[#c20712] text-white font-semibold rounded-2xl transition-all shadow-lg hover:shadow-[#E50914]/50 text-sm sm:text-base"
          >
            Записаться
          </a>
        </div>
      </div>
    </nav>
  );
}
