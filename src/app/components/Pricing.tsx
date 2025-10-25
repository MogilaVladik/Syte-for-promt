"use client";

import { courseIncludes } from "@/data/course";
import {
  TELEGRAM_URL,
  PRICE_EARLY_BIRD,
  PRICE_REGULAR,
  EARLY_BIRD_DEADLINE,
  PRICE_SAVINGS,
} from "@/config/constants";
import Icon from "./ui/Icon";
import Button from "./ui/Button";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-16 sm:py-24 bg-gradient-to-b from-[#0B0B0B] to-[#1a1a1a] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E50914] rounded-full blur-3xl"
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#E50914] rounded-full blur-3xl"
        />
      </div>

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
      >
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Стоимость{" "}
            <span className="text-[#E50914]">
              курса
            </span>
          </h2>
          <p
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Специальная цена при оплате до {EARLY_BIRD_DEADLINE}
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-4xl mx-auto">
          <div
            className="relative bg-black border-4 border-[#E50914] rounded-3xl p-8 sm:p-12 shadow-2xl shadow-[#E50914]/30"
          >
            {/* Badges */}
            <div
              className="absolute -top-4 left-1/2 -translate-x-1/2"
            >
              <div
                className="bg-[#E50914] text-white px-6 py-2 rounded-full text-sm font-bold"
              >
                СТАРТ 15 ДЕКАБРЯ
              </div>
            </div>

            <div className="absolute -top-4 right-8">
              <div
                className="bg-green-500 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg animate-pulse"
              >
                🔥 До {EARLY_BIRD_DEADLINE}
              </div>
            </div>

            <div
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
              {/* Left: Price */}
              <div className="text-center lg:text-left">
                <div className="mb-6">
                  <div
                    className="text-gray-400 text-base sm:text-lg mb-3"
                  >
                    Раннее бронирование
                  </div>

                  {/* Price Comparison */}
                  <div
                    className="flex items-baseline gap-3 sm:gap-4 mb-4 justify-center lg:justify-start flex-wrap"
                  >
                    <div
                      className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white"
                    >
                      {PRICE_EARLY_BIRD.toLocaleString("ru-RU")}
                      <span
                        className="text-4xl sm:text-5xl text-[#E50914]"
                      >
                        {" "}
                        ₽
                      </span>
                    </div>
                    <div
                      className="flex flex-col items-start"
                    >
                      <div
                        className="text-2xl sm:text-3xl lg:text-4xl text-gray-500 line-through"
                      >
                        {PRICE_REGULAR.toLocaleString("ru-RU")} ₽
                      </div>
                      <div
                        className="text-sm sm:text-base text-green-400 font-bold"
                      >
                        −{PRICE_SAVINGS.toLocaleString("ru-RU")} ₽
                      </div>
                    </div>
                  </div>

                  <div
                    className="text-sm text-gray-500 mb-4"
                  >
                    ~{Math.round(PRICE_EARLY_BIRD / 4).toLocaleString("ru-RU")}{" "}
                    ₽ за занятие
                  </div>

                  {/* Urgency Block */}
                  <div
                    className="bg-yellow-500/10 border-2 border-yellow-500/50 rounded-xl p-4 mb-6"
                  >
                    <div
                      className="flex items-center gap-2 text-yellow-400 text-sm sm:text-base font-bold mb-2"
                    >
                      <Icon
                        name="clock"
                        className="w-5 h-5 flex-shrink-0"
                      />
                      Специальная цена только до {EARLY_BIRD_DEADLINE}!
                    </div>
                    <p
                      className="text-xs sm:text-sm text-gray-300"
                    >
                      С 16 ноября стоимость курса составит{" "}
                      <span className="font-bold text-white">
                        {PRICE_REGULAR.toLocaleString("ru-RU")} ₽
                      </span>
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <Button variant="primary" fullWidth>
                  Записаться за {PRICE_EARLY_BIRD.toLocaleString("ru-RU")} ₽
                </Button>
              </div>

              {/* Right: Includes */}
              <div>
                <h3
                  className="text-2xl sm:text-3xl font-bold text-white mb-6"
                >
                  Что включено
                </h3>
                <ul className="space-y-4">
                  {courseIncludes.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <Icon
                        name="check"
                        className="w-6 h-6 text-[#E50914] flex-shrink-0 mt-0.5"
                      />
                      <span className="text-base sm:text-lg">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Special note */}
                <div
                  className="mt-6 bg-gradient-to-r from-[#E50914]/20 to-transparent border-l-4 border-[#E50914] p-4 rounded-r-xl"
                >
                  <p className="text-sm text-gray-300">
                    <span className="font-bold text-white">
                      Важно:
                    </span>{" "}
                    Подписки на Cursor Pro ($20/мес) и Onlook ($15/мес) уже
                    включены в стоимость — экономия ~$70!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom note */}
          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Остались вопросы?{" "}
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E50914] hover:underline font-semibold"
              >
                Напишите нам в Telegram
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
