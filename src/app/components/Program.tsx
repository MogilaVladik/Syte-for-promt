"use client";

import { lessons } from "@/data/lessons";
import type { Lesson } from "@/data/lessons";
import Icon from "./ui/Icon";
import Card from "./ui/Card";

export default function Program() {
  return (
    <section
      id="program"
      className="py-16 sm:py-24 bg-gradient-to-b from-[#1a1a1a] to-[#0B0B0B] relative"
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start"
        >
          {/* Left: Content */}
          <div>
            {/* Header */}
            <div className="mb-12">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
              >
                Программа{" "}
                <span className="text-[#E50914]">
                  курса
                </span>
              </h2>
              <p
                className="text-lg sm:text-xl text-gray-400"
              >
                4 последовательных занятия — от теории к готовому проекту
              </p>
            </div>

            {/* Lessons */}
            <div className="space-y-4">
              {lessons.length > 0 ? (
                lessons.map((lesson: Lesson) => (
                  <Card
                    key={`lesson-${lesson.number}`}
                    hover={false}
                    className="p-6 sm:p-8"
                  >
                  <div
                    className="flex items-start gap-4 sm:gap-6"
                  >
                    {/* Number Badge */}
                    <div
                      className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-[#E50914] rounded-2xl flex items-center justify-center text-xl sm:text-2xl font-bold text-white"
                    >
                      {lesson.number}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3
                        className="text-xl sm:text-2xl font-bold text-white mb-2"
                      >
                        {lesson.title}
                      </h3>
                      <p
                        className="text-sm sm:text-base text-gray-400 mb-4"
                      >
                        {lesson.duration}
                      </p>

                      {/* Topics List */}
                      <ul className="space-y-3">
                        {lesson.topics.map((topic, idx) => {
                          const isResult = topic.startsWith("Результат:");
                          const isPractice = topic.startsWith("Практика:");
                          const label = isResult ? "Результат" : isPractice ? "Практика" : null;
                          const text = label ? topic.replace(`${label}:`, "").trim() : topic;

                          return (
                            <li
                              key={idx}
                              className={`flex items-start gap-3 ${
                                label ? "rounded-2xl border border-white/10 bg-white/5 p-3" : "text-gray-300"
                              }`}
                            >
                              <Icon
                                name={label ? "star" : "check"}
                                className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                                  isResult ? "text-amber-400" : isPractice ? "text-emerald-400" : "text-[#E50914]"
                                }`}
                              />
                              <span className="text-sm sm:text-base text-gray-300">
                                {label ? (
                                  <>
                                    <span
                                      className={`mr-2 rounded-full px-2 py-0.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wide ${
                                        isResult
                                          ? "bg-amber-400/15 text-amber-300 border border-amber-400/30"
                                          : "bg-emerald-400/15 text-emerald-300 border border-emerald-400/30"
                                      }`}
                                    >
                                      {label}
                                    </span>
                                    {text}
                                  </>
                                ) : (
                                  topic
                                )}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </Card>
                ))
              ) : (
                <Card className="p-6 sm:p-8">
                  <p className="text-gray-400">Программа курса будет доступна в ближайшее время.</p>
                </Card>
              )}
            </div>
          </div>

          {/* Right: Animated Bulldog Coder */}
          <div
            className="hidden lg:flex justify-center items-center"
          >
            <div
              className="relative w-80 h-80 xl:w-96 xl:h-96"
            >
              <div
                className="absolute inset-0 animate-typing"
              >
                <div className="relative w-full h-full">
                  <div
                    className="absolute inset-0 bg-[#E50914]/10 blur-3xl rounded-full"
                  />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Blue_fawn_french_bulldog.jpg/500px-Blue_fawn_french_bulldog.jpg"
                      alt="Французский бульдог"
                      className="w-full h-full object-contain opacity-95 drop-shadow-2xl animate-typing"
                      loading="lazy"
                      decoding="async"
                    />
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
