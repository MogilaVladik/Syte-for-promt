"use client";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Анна Петрова",
      role: "Product Manager",
      company: "Tech Startup",
      text: "За 4 занятия я создала рабочий прототип, который раньше ждала бы у разработчиков 2 недели. Cursor и Onlook — это магия!",
      avatar: "👩‍💼",
    },
    {
      name: "Дмитрий Иванов",
      role: "Team Lead",
      company: "E-commerce",
      text: "Теперь могу быстро тестировать идеи и не зависеть от загрузки команды. Промптинг — must-have навык для менеджеров.",
      avatar: "👨‍💻",
    },
    {
      name: "Елена Смирнова",
      role: "Business Analyst",
      company: "Финтех",
      text: "Не думала, что смогу сама опубликовать проект в GitLab. Преподаватель объяснил всё очень понятно, без технического жаргона.",
      avatar: "👩‍💼",
    },
  ];

  return (
    <section
      className="py-16 sm:py-24 bg-gradient-to-b from-[#1a1a1a] to-[#0B0B0B]"
      data-oid="8ljhst3"
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="ufkr4sr"
      >
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16" data-oid="6enbn-b">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            data-oid="h62kk0-"
          >
            Отзывы{" "}
            <span className="text-[#E50914]" data-oid="x0mspep">
              участников
            </span>
          </h2>
          <p
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto"
            data-oid="7c52nv."
          >
            Что говорят выпускники предыдущих потоков
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          data-oid="skfhyr5"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-[#E50914]/50 transition-all duration-300 hover:scale-105"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
              data-oid="k.iuovb"
            >
              {/* Quote icon */}
              <div className="text-4xl text-[#E50914] mb-4" data-oid="434s20i">
                "
              </div>

              {/* Text */}
              <p
                className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed"
                data-oid="ywkzarm"
              >
                {testimonial.text}
              </p>

              {/* Author */}
              <div
                className="flex items-center gap-4 pt-4 border-t border-white/10"
                data-oid="i8lr3rj"
              >
                <div className="text-4xl" data-oid="phabv0-">
                  {testimonial.avatar}
                </div>
                <div data-oid="72gui1l">
                  <div className="font-bold text-white" data-oid="u3.9ic:">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-400" data-oid="k0hejbo">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-gray-500" data-oid="1lhk9te">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 sm:mt-16 text-center" data-oid="e:3knao">
          <p className="text-lg text-gray-400 mb-6" data-oid="glnj9c_">
            Станьте следующим успешным выпускником!
          </p>
          <a
            href="#pricing"
            className="inline-block px-8 py-4 bg-[#E50914] hover:bg-[#c20712] text-white font-bold text-lg rounded-2xl transition-all shadow-lg hover:shadow-[#E50914]/50 hover:scale-105"
            data-oid="11m8jao"
          >
            Записаться на курс
          </a>
        </div>
      </div>
    </section>
  );
}
