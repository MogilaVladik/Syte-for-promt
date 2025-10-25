"use client";

export default function Format() {
  const features = [
    {
      icon: "🎥",
      title: "Онлайн вебинары",
      description: "Занятия проходят в Zoom с возможностью задавать вопросы",
    },
    {
      icon: "⏰",
      title: "4 × 1 час",
      description: "Компактный формат — без воды, только практика",
    },
    {
      icon: "💻",
      title: "80% практики",
      description: "На каждом занятии вы работаете над своим проектом",
    },
    {
      icon: "💬",
      title: "Чат поддержки",
      description: "Telegram-группа для вопросов и обмена опытом",
    },
    {
      icon: "📹",
      title: "Все записи",
      description: "Доступ к записям на 3 месяца после курса",
    },
    {
      icon: "📝",
      title: "Материалы",
      description: "Шаблоны промптов, чек-листы, шпаргалки",
    },
  ];

  const schedule = [
    { date: "15 декабря", day: "Воскресенье", time: "20:00 МСК" },
    { date: "17 декабря", day: "Вторник", time: "20:00 МСК" },
    { date: "19 декабря", day: "Четверг", time: "20:00 МСК" },
    { date: "21 декабря", day: "Суббота", time: "20:00 МСК" },
  ];

  return (
    <section
      className="py-16 sm:py-24 bg-gradient-to-b from-[#1a1a1a] to-[#0B0B0B]"
      data-oid="b._ilqc"
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="gu5h-r-"
      >
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16" data-oid="gb85guu">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            data-oid="j_cu3sr"
          >
            Формат и{" "}
            <span className="text-[#E50914]" data-oid="htdtnxa">
              расписание
            </span>
          </h2>
          <p
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto"
            data-oid="w1ik-0t"
          >
            Удобное время для работающих специалистов
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12" data-oid="tnjvu60">
          {/* Features */}
          <div data-oid="1-00.dz">
            <h3
              className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8"
              data-oid="w6l_mc9"
            >
              Что входит
            </h3>
            <div
              className="grid sm:grid-cols-2 gap-4 sm:gap-6"
              data-oid="16xttn_"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-[#E50914]/50 transition-all duration-300 hover:scale-105"
                  data-oid=":yrq7bu"
                >
                  <div className="text-4xl mb-3" data-oid="4offscg">
                    {feature.icon}
                  </div>
                  <h4
                    className="text-lg font-bold text-white mb-2"
                    data-oid="f9bxb_a"
                  >
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-400" data-oid="p8_3lzk">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Schedule */}
          <div data-oid="vkk9.lk">
            <h3
              className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8"
              data-oid="._3wkmm"
            >
              Предварительное расписание
            </h3>
            <div className="space-y-4" data-oid="jr74m8p">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-[#E50914]/10 to-transparent border border-[#E50914]/30 p-6 rounded-2xl hover:border-[#E50914]/50 transition-all"
                  data-oid="x8abxzc"
                >
                  <div
                    className="flex items-center justify-between gap-4"
                    data-oid="ka_492:"
                  >
                    <div data-oid="csnjrx:">
                      <div
                        className="text-2xl font-bold text-white mb-1"
                        data-oid="ch5ui9k"
                      >
                        Занятие {index + 1}
                      </div>
                      <div className="text-gray-400" data-oid="ilenj:p">
                        {item.date} • {item.day}
                      </div>
                    </div>
                    <div
                      className="text-xl font-bold text-[#E50914]"
                      data-oid="trepngn"
                    >
                      {item.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Note */}
            <div
              className="mt-6 bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10"
              data-oid="28ades2"
            >
              <p
                className="text-sm text-gray-400 leading-relaxed"
                data-oid="inmmoy0"
              >
                <span className="text-white font-semibold" data-oid="rsav.i4">
                  Примечание:
                </span>{" "}
                Не сможете присутствовать онлайн? Не проблема! Все записи будут
                доступны в течение 3 месяцев после завершения курса.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
