"use client";

import { TELEGRAM_URL, PRICE_VIP, PRICE_REGULAR } from "@/config/constants";
import Icon from "./ui/Icon";
import Button from "./ui/Button";

export default function VIPSupport() {
  const vipIncludes = [
    { label: `Полный курс (${PRICE_REGULAR.toLocaleString("ru-RU")} ₽)` },
    { label: "3 персональные сессии (100 000 ₽)" },
    { label: "Инсайды из Китая (бесценно)" },
  ];

  return (
    <section
      className="py-16 sm:py-24 bg-gradient-to-b from-[#1a1a1a] to-[#0B0B0B] relative overflow-hidden"
    >
      {/* VIP Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-yellow-500 rounded-full blur-3xl"
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-yellow-500 rounded-full blur-3xl"
        />
      </div>

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
      >
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div
            className="inline-flex items-center gap-2 mb-4"
          >
            <Icon
              name="star"
              className="w-8 h-8 text-yellow-500"
            />
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600"
            >
              VIP СОПРОВОЖДЕНИЕ
            </h2>
            <Icon
              name="star"
              className="w-8 h-8 text-yellow-500"
            />
          </div>
          <p
            className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Эксклюзивная программа для тех, кто хочет внедрить AI в свою
            компанию
          </p>
        </div>

        {/* VIP Card */}
        <div className="max-w-5xl mx-auto">
          <div
            className="relative bg-gradient-to-br from-yellow-500/10 via-yellow-600/5 to-transparent border-4 border-yellow-500/50 rounded-3xl p-8 sm:p-12 shadow-2xl shadow-yellow-500/20"
          >
            {/* VIP Badge */}
            <div
              className="absolute -top-6 left-1/2 -translate-x-1/2"
            >
              <div
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-3 rounded-full text-lg font-black shadow-lg"
              >
                ⭐ VIP ПАКЕТ ⭐
              </div>
            </div>

            <div
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mt-6"
            >
              {/* Left: Benefits */}
              <div>
                <h3
                  className="text-2xl sm:text-3xl font-bold text-white mb-6"
                >
                  Что входит в VIP-пакет
                </h3>

                <div className="space-y-4 mb-8">
                  {[
                    {
                      num: 1,
                      title: "Основной курс",
                      desc: "4 практических занятия по промптингу",
                    },
                    {
                      num: 2,
                      title: "3 персональные сессии",
                      desc: "Индивидуальные встречи после курса для глубокого погружения",
                    },
                    {
                      num: 3,
                      title: "Внедрение AI в компании",
                      desc: "Стратегия, инструменты, процессы — всё для успешного внедрения",
                    },
                    {
                      num: 4,
                      title: "Инсайды из Китая",
                      desc: "Эксклюзивная информация от топовых китайских компаний после командировки",
                    },
                  ].map((item) => (
                    <div
                      key={item.num}
                      className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-yellow-500/30"
                    >
                      <div
                        className="flex-shrink-0 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold"
                      >
                        {item.num}
                      </div>
                      <div>
                        <h4
                          className="text-lg font-bold text-white mb-1"
                        >
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-400">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className="bg-gradient-to-r from-yellow-500/20 to-transparent border-l-4 border-yellow-500 p-4 rounded-r-xl"
                >
                  <p className="text-sm text-gray-300">
                    <span
                      className="font-bold text-yellow-500"
                    >
                      Эксклюзив:
                    </span>{" "}
                    Вы получите реальные кейсы, стратегии и инструменты, которые
                    используют ведущие компании Китая для внедрения AI
                  </p>
                </div>
              </div>

              {/* Right: Price */}
              <div className="text-center lg:text-left">
                <div className="mb-6">
                  <div
                    className="text-gray-400 text-lg mb-2"
                  >
                    Стоимость VIP-пакета
                  </div>
                  <div
                    className="text-6xl sm:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-4"
                  >
                    {PRICE_VIP.toLocaleString("ru-RU")}
                    <span className="text-4xl sm:text-5xl">
                      {" "}
                      ₽
                    </span>
                  </div>
                  <div
                    className="text-sm text-gray-500 mb-2"
                  >
                    Вместо 135 000 ₽ при отдельной покупке
                  </div>
                  <div
                    className="inline-block bg-green-500/20 border border-green-500 text-green-400 px-4 py-2 rounded-full text-sm font-bold"
                  >
                    Экономия 35 000 ₽
                  </div>
                </div>

                {/* Benefits Summary */}
                <div
                  className="bg-black/50 rounded-2xl p-6 mb-6 border border-yellow-500/30"
                >
                  <div
                    className="text-sm text-gray-400 mb-3"
                  >
                    VIP-пакет включает:
                  </div>
                  <ul className="space-y-2 text-left">
                    {vipIncludes.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-white"
                      >
                        <Icon
                          name="check"
                          className="w-5 h-5 text-yellow-500 flex-shrink-0"
                        />
                        <span className="text-sm">
                          {item.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Button
                  variant="vip"
                  fullWidth
                  href={TELEGRAM_URL}
                >
                  Записаться на VIP-пакет
                </Button>

                <p className="text-xs text-gray-500 mt-4">
                  Ограниченное предложение — осталось всего 5 мест
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
