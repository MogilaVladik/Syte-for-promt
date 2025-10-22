"use client";

export default function Pricing() {
  const includes = [
    "4 живых занятия в Zoom",
    "Записи всех занятий (доступ 3 месяца)",
    "Подписки на Cursor Pro и Onlook",
    "Шаблоны и библиотека промптов",
    "Доступ к закрытому Telegram-чату",
    "Поддержка преподавателя",
    "Все материалы и чек-листы",
  ];

  return (
    <section
      id="pricing"
      className="py-16 sm:py-24 bg-gradient-to-b from-[#0B0B0B] to-[#1a1a1a] relative overflow-hidden"
      data-oid="4:gpykp"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10" data-oid="r16j5li">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E50914] rounded-full blur-3xl"
          data-oid="szghans"
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#E50914] rounded-full blur-3xl"
          data-oid="hybdie-"
        />
      </div>

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
        data-oid="ydg.o5o"
      >
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16" data-oid=".lvxi8q">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            data-oid="hnekbgp"
          >
            Стоимость{" "}
            <span className="text-[#E50914]" data-oid="wmjdd7g">
              курса
            </span>
          </h2>
          <p
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto"
            data-oid="51oyi_c"
          >
            Всё включено — никаких скрытых платежей
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-4xl mx-auto" data-oid="25b4x4c">
          <div
            className="relative bg-black border-4 border-[#E50914] rounded-3xl p-8 sm:p-12 shadow-2xl shadow-[#E50914]/30"
            data-oid="oseziqp"
          >
            {/* Badge */}
            <div
              className="absolute -top-4 left-1/2 -translate-x-1/2"
              data-oid="cshd-li"
            >
              <div
                className="bg-[#E50914] text-white px-6 py-2 rounded-full text-sm font-bold"
                data-oid="ua.nrtk"
              >
                СТАРТ 15 ДЕКАБРЯ
              </div>
            </div>

            <div
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              data-oid="8:uq8y."
            >
              {/* Left: Price */}
              <div className="text-center lg:text-left" data-oid="ytj3.8i">
                <div className="mb-4" data-oid="tzetkm0">
                  <div
                    className="text-gray-400 text-lg mb-2"
                    data-oid="u-p9l:y"
                  >
                    Полная стоимость
                  </div>
                  <div
                    className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-2"
                    data-oid="rs1gfjg"
                  >
                    35 000
                    <span
                      className="text-4xl sm:text-5xl text-[#E50914]"
                      data-oid="mli2b4:"
                    >
                      {" "}
                      ₽
                    </span>
                  </div>
                  <div className="text-sm text-gray-500" data-oid="_2i6m.7">
                    ~8 750 ₽ за занятие
                  </div>
                </div>

                {/* CTA Button */}
                <div className="space-y-4" data-oid="mgq9d_v">
                  <a
                    href="https://t.me/time_t0_it"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-8 py-5 bg-[#E50914] hover:bg-[#c20712] text-white font-bold text-xl rounded-2xl transition-all shadow-lg hover:shadow-[#E50914]/50 hover:scale-105 text-center"
                    data-oid="ffe:ncy"
                  >
                    Записаться
                  </a>
                </div>
              </div>

              {/* Right: Includes */}
              <div data-oid="0rablv5">
                <h3
                  className="text-2xl sm:text-3xl font-bold text-white mb-6"
                  data-oid="hhfv0cl"
                >
                  Что включено
                </h3>
                <ul className="space-y-4" data-oid="datf31r">
                  {includes.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-300"
                      data-oid="ex_9937"
                    >
                      <svg
                        className="w-6 h-6 text-[#E50914] flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        data-oid="y0n1qcp"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                          data-oid="7.8y1rh"
                        />
                      </svg>
                      <span className="text-base sm:text-lg" data-oid="t33oe7r">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Special note */}
                <div
                  className="mt-6 bg-gradient-to-r from-[#E50914]/20 to-transparent border-l-4 border-[#E50914] p-4 rounded-r-xl"
                  data-oid="-.uetzx"
                >
                  <p className="text-sm text-gray-300" data-oid="pev6dq0">
                    <span className="font-bold text-white" data-oid="y-m7niq">
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
          <div className="mt-8 text-center" data-oid="dwxs3hw">
            <p className="text-gray-400" data-oid=".sun2j-">
              Остались вопросы?{" "}
              <a
                href="https://t.me/time_t0_it"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E50914] hover:underline font-semibold"
                data-oid=":q.bx92"
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
