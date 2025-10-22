"use client";

export default function Results() {
  const results = [
    {
      icon: "💬",
      text: "10+ эффективных промптов",
    },
    {
      icon: "🎨",
      text: "MVP-прототип в Onlook",
    },
    {
      icon: "⚙️",
      text: "Рабочая логика в Cursor",
    },
    {
      icon: "🚀",
      text: "Проект опубликован в GitLab",
    },
    {
      icon: "📚",
      text: "Библиотека шаблонов промптов",
    },
    {
      icon: "🤝",
      text: "Доступ к комьюнити",
    },
    {
      icon: "📹",
      text: "Записи всех занятий",
    },
  ];

  return (
    <section
      className="py-16 sm:py-24 bg-gradient-to-b from-[#0B0B0B] to-[#1a1a1a]"
      data-oid="97_a.30"
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="avvf7c6"
      >
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16" data-oid="r62tc7s">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            data-oid="lsxr5-y"
          >
            Что вы{" "}
            <span className="text-[#E50914]" data-oid="njsdrlb">
              сделаете
            </span>{" "}
            за курс
          </h2>
          <p
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto"
            data-oid="uwi.aqh"
          >
            Конкретные результаты, которые вы получите после 4 занятий
          </p>
        </div>

        {/* Results Grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          data-oid="d2u8-h8"
        >
          {results.map((result, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-[#E50914]/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#E50914]/20 text-center"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
              data-oid="rdp02uc"
            >
              {/* Icon */}
              <div
                className="text-4xl sm:text-5xl mb-4 group-hover:scale-110 transition-transform"
                data-oid=".uzkzzl"
              >
                {result.icon}
              </div>

              {/* Text */}
              <p
                className="text-sm sm:text-base text-gray-300 font-medium leading-snug"
                data-oid="svmrt_."
              >
                {result.text}
              </p>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-12 sm:mt-16 text-center" data-oid="x7mpk7m">
          <div
            className="inline-block bg-gradient-to-r from-[#E50914]/10 to-transparent border border-[#E50914]/30 rounded-2xl p-6 sm:p-8 max-w-3xl"
            data-oid="m1jbc1a"
          >
            <p
              className="text-base sm:text-lg text-gray-300"
              data-oid="a_08mw0"
            >
              <span className="text-[#E50914] font-bold" data-oid="ysplblt">
                Бонус:
              </span>{" "}
              Все участники получают подписки на Cursor Pro и Onlook на весь
              период обучения + 2 недели после завершения курса
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
