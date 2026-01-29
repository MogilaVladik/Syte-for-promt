"use client";

import Icon from "./ui/Icon";
import {
  TELEGRAM_URL,
  PRICE_EARLY,
  PRICE_REGULAR,
  EARLY_BIRD_DEADLINE,
  COURSE_START_DATE,
} from "@/config/constants";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 noise-overlay"
    >
      <div className="absolute inset-0 gradient-hero -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left space-y-6 sm:space-y-8 relative z-10">
            {/* Date Badge */}
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm sm:text-base">
              <Icon name="calendar" className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Старт {COURSE_START_DATE}
            </div>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight animate-fade-in-up">
              Курс по промптингу <br />
              для <span className="text-[#E50914]">менеджеров</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-2xl animate-fade-in-up [animation-delay:200ms]">
              4 практических занятия, на каждом вы продвигаете свой проект от идеи
              до GitLab
            </p>

            {/* Lead */}
            <p className="text-base sm:text-lg text-[#D1D5DB] max-w-xl animate-fade-in-up [animation-delay:300ms]">
              Соберите свой AI-инструмент за 4 занятия и выложите его в GitLab
            </p>

            {/* Price Block */}
            <div className="w-full max-w-md sm:max-w-lg bg-black p-6 sm:p-8 rounded-3xl shadow-2xl animate-fade-in-up [animation-delay:400ms] border-2 border-[#E50914]/30 relative mx-auto lg:mx-0">
              <div className="mb-3 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/15 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-semibold uppercase tracking-wide animate-pulse">
                <span aria-hidden>🔥</span>
                До {EARLY_BIRD_DEADLINE} — {PRICE_EARLY.toLocaleString("ru-RU")} ₽
              </div>
              {/* Price (без зачёркнутой старой и без «раннего бронирования») */}
              <div className="flex items-baseline gap-3 sm:gap-4 mb-3 justify-center lg:justify-start">
                <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white">
                  {PRICE_EARLY.toLocaleString("ru-RU")} ₽
                </div>
                <div className="text-base sm:text-lg text-gray-500 line-through">
                  {PRICE_REGULAR.toLocaleString("ru-RU")} ₽
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-300 max-w-xs mb-2">
                После {EARLY_BIRD_DEADLINE} — {PRICE_REGULAR.toLocaleString("ru-RU")} ₽
              </p>
              <p className="text-xs sm:text-sm text-gray-400 max-w-xs mb-3">
                Включена подписка на Onlook на время курса
              </p>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up [animation-delay:500ms]">
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-[#E50914] hover:bg-[#c20712] text-white font-bold text-lg rounded-2xl transition-all shadow-lg hover:shadow-[#E50914]/50 hover:scale-105"
                >
                  Записаться за {PRICE_EARLY.toLocaleString("ru-RU")} ₽
                </a>
              </div>

              {/* Trust badges */}
              <div className="mt-6 flex flex-wrap gap-4 sm:gap-6 justify-center lg:justify-start text-sm sm:text-base text-gray-300 animate-fade-in-up [animation-delay:600ms]">
                <div className="flex items-center gap-2">
                  <Icon name="check" className="w-5 h-5 text-[#E50914]" />
                  <span>Онлайн</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="check" className="w-5 h-5 text-[#E50914]" />
                  <span>4 × 1 час</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="check" className="w-5 h-5 text-[#E50914]" />
                  <span>Практика 80%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[32rem] lg:h-[32rem]">
              <div className="absolute inset-0 animate-float">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-[#E50914]/20 blur-3xl rounded-full animate-glow" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="/images/bulldog-blue-1.png?v=1"
                      alt="Голубой французский бульдог"
                      className="w-full h-full object-contain opacity-95 drop-shadow-2xl animate-float"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
