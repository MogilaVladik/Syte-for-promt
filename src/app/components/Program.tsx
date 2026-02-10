"use client";

import { lessons } from "@/data/lessons";
import type { Lesson } from "@/data/lessons";
import Icon from "./ui/Icon";
import Card from "./ui/Card";
import Image from "next/image";

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
                className="text-title font-bold text-white mb-4"
              >
                Программа{" "}
                <span className="text-red-primary">
                  курса
                </span>
              </h2>
              <p
                className="text-lead text-gray-400"
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
                    className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left"
                  >
                    {/* Number Badge */}
                    <div
                      className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-red-primary rounded-2xl flex items-center justify-center text-lead font-bold text-white"
                    >
                      {lesson.number}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3
                        className="text-lead font-bold text-white mb-2"
                      >
                        {lesson.title}
                      </h3>
                      <p
                        className="text-body text-gray-400 mb-4"
                      >
                        {lesson.duration}
                      </p>

                      {/* Topics List */}
                      <ul className="space-y-3 text-left">
                        {lesson.topics.map((topic, idx) => {
                          const isResult = topic.startsWith("Результат:");
                          const isPractice = topic.startsWith("Практика:");
                          const label = isResult ? "Результат" : isPractice ? "Практика" : null;
                          const text = label ? topic.replace(`${label}:`, "").trim() : topic;

                          return (
                            <li
                              key={idx}
                              className={`flex items-start justify-start gap-3 ${
                                label ? "rounded-2xl border border-white/10 bg-white/5 p-3" : "text-gray-300"
                              }`}
                            >
                              <Icon
                                name={label ? "star" : "check"}
                                className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                                  isResult ? "text-amber-400" : isPractice ? "text-emerald-400" : "text-red-primary"
                                }`}
                              />
                              <span className="text-body text-gray-300">
                                {label ? (
                                  <>
                                    <span
                                      className={`mr-2 rounded-full px-2 py-0.5 text-caption font-semibold uppercase tracking-wide ${
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

          {/* Right: фото автора, по центру блока */}
          <div className="hidden lg:flex justify-center items-center min-h-[320px]">
            <div className="relative w-56 h-72 xl:w-64 xl:h-80 flex justify-center items-center">
              <Image
                src="/images/author.png"
                alt="Автор курса"
                fill
                className="object-contain object-center"
                sizes="(max-width: 1024px) 0vw, 256px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
