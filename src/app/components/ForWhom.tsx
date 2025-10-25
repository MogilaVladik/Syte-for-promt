"use client";

export default function ForWhom() {
  const audience = [
    {
      title: "Менеджерам продукта",
      description:
        "Создавайте прототипы и MVP быстрее, общайтесь с разработчиками на одном языке",
      icon: "💼",
    },
    {
      title: "Тимлидам",
      description:
        "Автоматизируйте рутину, ускорьте код-ревью и онбординг команды с помощью AI",
      icon: "👨‍💼",
    },
    {
      title: "Аналитикам",
      description:
        "Генерируйте SQL-запросы, визуализации и отчёты через промпты",
      icon: "📊",
    },
    {
      title: "Предпринимателям",
      description:
        "Запустите свой AI-инструмент без команды разработки и технических знаний",
      icon: "🚀",
    },
  ];

  return (
    <section
      id="for-whom"
      className="py-16 sm:py-24 bg-gradient-to-b from-[#0B0B0B] to-[#1a1a1a]"
      data-oid="w8bp7gz"
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="owz0enc"
      >
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16" data-oid="e5e.r0u">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            data-oid="73gaqq9"
          >
            Кому подойдёт{" "}
            <span className="text-[#E50914]" data-oid="xemdofz">
              курс
            </span>
          </h2>
          <p
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto"
            data-oid="9:pwnw7"
          >
            Для тех, кто хочет использовать AI в работе и не зависеть от
            разработчиков
          </p>
        </div>

        {/* Cards Grid */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          data-oid="0_l30np"
        >
          {audience.map((item, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-[#E50914]/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#E50914]/20"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
              data-oid="mztu2-."
            >
              {/* Icon */}
              <div
                className="text-5xl sm:text-6xl mb-4 group-hover:scale-110 transition-transform"
                data-oid="tk:23r9"
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3
                className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#E50914] transition-colors"
                data-oid="89lmu9w"
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm sm:text-base text-gray-400 leading-relaxed"
                data-oid="gco6m-x"
              >
                {item.description}
              </p>

              {/* Hover effect */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-[#E50914]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none"
                data-oid="9hj6gr1"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
