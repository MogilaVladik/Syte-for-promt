"use client";

export default function Program() {
  const lessons = [
    {
      number: 1,
      title: "Введение в промптинг и LLM",
      duration: "1 час",
      topics: [
        "Как работают большие языковые модели",
        "Структура эффективного промпта",
        "Техники: Zero-shot, Few-shot, Chain-of-thought",
        "Инструменты: ChatGPT, Claude, Gemini",
        "Практика: создаём 10+ промптов для вашей задачи",
      ],
    },
    {
      number: 2,
      title: "Прототип в Onlook",
      duration: "1 час",
      topics: [
        "Знакомство с Onlook — визуальный редактор для React",
        "Генерация компонентов через AI",
        "Создание интерфейса без кода",
        "Экспорт в React/Next.js",
        "Практика: собираем прототип вашего MVP",
      ],
    },
    {
      number: 3,
      title: "Cursor: код и ревью",
      duration: "1 час",
      topics: [
        "Установка и настройка Cursor",
        "AI-автодополнение и генерация кода",
        "Рефакторинг и оптимизация через Cmd+K",
        "Чат с кодовой базой",
        "Практика: добавляем логику и функциональность",
      ],
    },
    {
      number: 4,
      title: "Публикация в GitLab",
      duration: "1 час",
      topics: [
        "Git основы для менеджеров",
        "Создание репозитория в GitLab",
        "Коммиты, пуши, ветки через AI",
        "Настройка CI/CD и деплой",
        "Практика: ваш проект доступен по ссылке",
      ],
    },
  ];

  return (
    <section
      id="program"
      className="py-16 sm:py-24 bg-gradient-to-b from-[#1a1a1a] to-[#0B0B0B] relative"
      data-oid="dtax9:r"
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="nupbua-"
      >
        <div
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start"
          data-oid="bt7x10m"
        >
          {/* Left: Content */}
          <div data-oid="0:bvqqc">
            {/* Header */}
            <div className="mb-12" data-oid="_ehv2sq">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
                data-oid="x0ym2qo"
              >
                Программа{" "}
                <span className="text-[#E50914]" data-oid="-rcseau">
                  курса
                </span>
              </h2>
              <p
                className="text-lg sm:text-xl text-gray-400"
                data-oid="ylx2dve"
              >
                4 последовательных занятия — от теории к готовому проекту
              </p>
            </div>

            {/* Lessons */}
            <div className="space-y-4" data-oid="9ky19er">
              {lessons.map((lesson) => (
                <div
                  key={lesson.number}
                  className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-[#E50914]/50"
                  data-oid="pyt8bfj"
                >
                  {/* Lesson Header */}
                  <div
                    className="w-full p-6 sm:p-8 flex items-start gap-4 sm:gap-6"
                    data-oid="phvrhsb"
                  >
                    {/* Number Badge */}
                    <div
                      className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-[#E50914] rounded-2xl flex items-center justify-center text-xl sm:text-2xl font-bold text-white"
                      data-oid="1q.uxw7"
                    >
                      {lesson.number}
                    </div>

                    {/* Content */}
                    <div className="flex-1" data-oid="awe9hgr">
                      <h3
                        className="text-xl sm:text-2xl font-bold text-white mb-2"
                        data-oid="z65qg.8"
                      >
                        {lesson.title}
                      </h3>
                      <p
                        className="text-sm sm:text-base text-gray-400 mb-4"
                        data-oid="3htfw47"
                      >
                        {lesson.duration}
                      </p>

                      {/* Topics List */}
                      <ul className="space-y-2" data-oid="1lxazt_">
                        {lesson.topics.map((topic, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-gray-300"
                            data-oid="1zgf4op"
                          >
                            <svg
                              className="w-5 h-5 text-[#E50914] flex-shrink-0 mt-0.5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              data-oid="hkexfap"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                                data-oid="j-f_mue"
                              />
                            </svg>
                            <span
                              className="text-sm sm:text-base"
                              data-oid=".xt4o.e"
                            >
                              {topic}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Animated Bulldog Coder */}
          <div
            className="hidden lg:flex justify-center items-center"
            data-oid="j2b:z5k"
          >
            <div
              className="relative w-80 h-80 xl:w-96 xl:h-96"
              data-oid="4qbutz4"
            >
              {/* Typing animation */}
              <div
                className="absolute inset-0 animate-typing"
                data-oid="kc2jstf"
              >
                <div className="relative w-full h-full" data-oid="b53kk:5">
                  {/* Glow */}
                  <div
                    className="absolute inset-0 bg-[#E50914]/10 blur-3xl rounded-full"
                    data-oid="6hs34m0"
                  />

                  {/* Bulldog with glasses coding */}
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center gap-4"
                    data-oid="1op_4-v"
                  >
                    <div className="text-8xl" data-oid="d5m7owf">
                      🐶
                    </div>
                    <div className="text-6xl opacity-80" data-oid="sj_rvt9">
                      👓
                    </div>
                    <div className="text-4xl" data-oid="n3ssyc0">
                      ⌨️
                    </div>
                  </div>

                  {/* Code lines effect */}
                  <div
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 rounded-3xl backdrop-blur-sm"
                    data-oid="eq01::w"
                  >
                    <div
                      className="space-y-2 font-mono text-xs text-green-400"
                      data-oid="4d683-a"
                    >
                      <div
                        className="flex items-center gap-2"
                        data-oid="kn7qcda"
                      >
                        <span className="text-gray-500" data-oid="txwipww">
                          1
                        </span>
                        <span data-oid="fow::5t">
                          const prompt = "Create...";
                        </span>
                      </div>
                      <div
                        className="flex items-center gap-2"
                        data-oid="a4h0r5y"
                      >
                        <span className="text-gray-500" data-oid="sspmaqt">
                          2
                        </span>
                        <span data-oid="geyumnj">
                          const ai = generateCode();
                        </span>
                      </div>
                      <div
                        className="flex items-center gap-2"
                        data-oid="pkbq0x9"
                      >
                        <span className="text-gray-500" data-oid="z7-.o1k">
                          3
                        </span>
                        <span className="animate-pulse" data-oid="1-a.:pf">
                          ▊
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
