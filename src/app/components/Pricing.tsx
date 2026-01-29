"use client";

import { courseIncludes } from "@/data/course";
import {
  TELEGRAM_URL,
  PRICE_EARLY,
  PRICE_REGULAR,
  PRICE_PER_LESSON,
  EARLY_BIRD_DEADLINE,
  COURSE_START_DATE,
} from "@/config/constants";
import Icon from "./ui/Icon";
import Button from "./ui/Button";

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-gradient-to-b from-[#080808] to-[#1a1a1a] relative">
      {/* Декор фона (как было) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E50914] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#E50914] rounded-full blur-3xl" />
      </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <img
            src="/images/bulldog-4.png?v=2"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute bottom-6 right-4 sm:right-10 w-44 sm:w-56 lg:w-72 opacity-90"
            loading="lazy"
            decoding="async"
          />
        {/* Заголовок */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Стоимость <span className="text-[#E50914]">курса</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Оплата за весь курс
          </p>
        </div>

        {/* Карточка цены — БЕЗ «раннего бронирования», БЕЗ «до …», БЕЗ жёлтой плашки */}
        <div className="max-w-4xl mx-auto">
            <div className="relative bg-black border border-[#E50914] rounded-3xl p-8 sm:p-12 shadow-2xl shadow-[#E50914]/30">
            {/* бейдж «старт …» оставляем, если нужен. Зеленого «До …» больше нет */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="bg-[#E50914] text-white px-6 py-2 rounded-full text-sm font-bold">
                СТАРТ {COURSE_START_DATE.toUpperCase()}
              </div>
            </div>
              <div className="mt-6 mb-2 text-center">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E50914]/15 border border-[#E50914]/40 text-[#E50914] text-xs sm:text-sm font-semibold uppercase tracking-wide animate-pulse">
                  До {EARLY_BIRD_DEADLINE} — {PRICE_EARLY.toLocaleString("ru-RU")} ₽
                </span>
              </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Левая колонка: цена */}
              <div className="text-center lg:text-left">
                <div className="mb-4">
                  <div className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white whitespace-nowrap">
                    {PRICE_EARLY.toLocaleString("ru-RU")}
                    {"\u00A0"}₽
                  </div>
                  <div className="text-lg sm:text-xl text-gray-500 line-through mt-2">
                    {PRICE_REGULAR.toLocaleString("ru-RU")} ₽
                  </div>
                </div>

                <div className="text-sm text-gray-300 mb-4">
                  После {EARLY_BIRD_DEADLINE} — {PRICE_REGULAR.toLocaleString("ru-RU")} ₽
                </div>

                {/* Кнопка без ограничений по дате и без «спеццена до …» */}
                <Button variant="primary" fullWidth>
                  Записаться за {PRICE_EARLY.toLocaleString("ru-RU")} ₽
                </Button>
              </div>

              {/* Правая колонка: что включено */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                  Что включено
                </h3>
                <ul className="space-y-4">
                  {courseIncludes.length > 0 ? (
                    courseIncludes.map((item) => (
                      <li key={`include-${item}`} className="flex items-start gap-3 text-gray-300">
                        <Icon name="check" className="w-5 h-5 text-[#E50914] flex-shrink-0 mt-0.5" />
                        <span className="text-base sm:text-lg">{item}</span>
                      </li>
                    ))
                  ) : (
                    <li className="text-gray-400">Список включенных услуг будет обновлен.</li>
                  )}
                </ul>

                {/* Примечание про подписку */}
                <div className="mt-6 bg-gradient-to-r from-[#E50914]/20 to-transparent border border-[#E50914] p-4 rounded-xl">
                  <p className="text-sm text-gray-300">
                    <span className="font-bold text-white">Важно:</span>{" "}
                    Подписка на Onlook ($15/мес) уже включена
                    в стоимость — экономия ~ $15!
                  </p>
                </div>
              </div>
            </div>

            {/* Контакты */}
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
      </div>
    </section>
  );
}
