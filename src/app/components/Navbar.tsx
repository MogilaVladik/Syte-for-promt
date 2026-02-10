"use client";

import { TELEGRAM_URL } from "@/config/constants";

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-lg shadow-lg border-b border-[#E50914]/30"
      role="navigation"
      aria-label="Основная навигация"
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div
          className="flex items-center justify-between h-16 sm:h-20"
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#hero"
              className="text-xl sm:text-2xl font-bold text-white hover:text-[#E50914] transition-colors"
              aria-label="Вернуться на главную"
            >
              Time to IT
              <span className="text-[#E50914]">.</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div
            className="hidden md:flex items-center space-x-6 lg:space-x-8"
          >
            <a
              href="#program"
              className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base"
              aria-label="Перейти к программе курса"
            >
              Программа
            </a>
            <a
              href="#for-whom"
              className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base"
              aria-label="Перейти к разделу 'Для кого'"
            >
              Для кого
            </a>
            <a
              href="#testimonials"
              className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base"
              aria-label="Перейти к отзывам и проектам учеников"
            >
              Отзывы
            </a>
            <a
              href="#pricing"
              className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base"
              aria-label="Перейти к стоимости курса"
            >
              Стоимость
            </a>
            <a
              href="#faq"
              className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base"
              aria-label="Перейти к часто задаваемым вопросам"
            >
              FAQ
            </a>
          </div>

          {/* CTA Button */}
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 sm:px-6 py-2 sm:py-3 bg-[#E50914] hover:bg-[#c20712] text-white font-semibold rounded-2xl transition-all shadow-lg hover:shadow-[#E50914]/50 text-sm sm:text-base"
            aria-label="Записаться на курс через Telegram"
          >
            Записаться
          </a>
        </div>
      </div>
    </nav>
  );
}
