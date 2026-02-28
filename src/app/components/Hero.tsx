"use client";

import Icon from "./ui/Icon";
import ImageWithFallback from "./ui/ImageWithFallback";
import {
  TELEGRAM_URL,
  PRICE_REGULAR,
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
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm rounded-full text-white text-caption">
              <Icon name="calendar" className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Старт {COURSE_START_DATE}
            </div>

            {/* H1 */}
            <h1 className="text-display font-bold text-white leading-tight tracking-tight animate-fade-in-up">
              Курс по промптингу <br />
              для <span className="text-red-primary">менеджеров</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lead text-gray-300 max-w-2xl animate-fade-in-up [animation-delay:200ms]">
              4 практических занятия, на каждом вы продвигаете свой проект от идеи
              до GitHub
            </p>

            {/* Lead */}
            <p className="text-body text-gray-light max-w-xl animate-fade-in-up [animation-delay:300ms]">
              Соберите свой AI-инструмент за 4 занятия и выложите его в GitHub
            </p>

            {/* Price Block — больше воздуха между элементами */}
            <div className="w-full max-w-md sm:max-w-lg bg-black p-6 sm:p-8 rounded-3xl shadow-2xl animate-fade-in-up [animation-delay:400ms] border-2 border-red-primary/30 relative mx-auto lg:mx-0 space-y-4">
              <div className="flex items-baseline gap-3 sm:gap-4 justify-center lg:justify-start">
                <div className="text-display font-bold text-white">
                  {PRICE_REGULAR.toLocaleString("ru-RU")} ₽
                </div>
              </div>

              <p className="text-caption text-gray-400 max-w-xs">
                Включена подписка на Cursor на время курса
              </p>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up [animation-delay:500ms]">
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-red-primary hover:bg-[#c20712] text-white font-bold text-lead rounded-2xl transition-all shadow-lg hover:shadow-red-primary/50 hover:scale-105"
                >
                  Записаться за {PRICE_REGULAR.toLocaleString("ru-RU")} ₽
                </a>
              </div>

              {/* Trust badges */}
              <div className="mt-6 flex flex-wrap gap-4 sm:gap-6 justify-center lg:justify-start text-body text-gray-300 animate-fade-in-up [animation-delay:600ms]">
                <div className="flex items-center gap-2">
                  <Icon name="check" className="w-5 h-5 text-red-primary" />
                  <span>Онлайн</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="check" className="w-5 h-5 text-red-primary" />
                  <span>4 × 1 час</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="check" className="w-5 h-5 text-red-primary" />
                  <span>Практика 80%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Animated Bulldog — видно на всех экранах, включая мобильные */}
          <div className="relative flex justify-center lg:justify-end min-h-[16rem] sm:min-h-[20rem] lg:min-h-0">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex-shrink-0">
              <div className="absolute inset-0 animate-float">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-red-primary/20 blur-3xl rounded-full animate-glow" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ImageWithFallback
                      src="/images/bulldog-hero.png?v=3"
                      alt="Бульдог-разработчик за клавиатурой"
                      fill
                      priority
                      sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
                      className="object-contain opacity-90"
                      fallback={
                        <div className="text-9xl sm:text-[10rem] lg:text-[12rem] opacity-90">
                          🐶
                        </div>
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator — приглушён, отключается при prefers-reduced-motion */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce motion-reduce:animate-none" aria-hidden>
        <svg
          className="w-6 h-6 text-white/40"
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
