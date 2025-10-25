"use client";

import { useState } from "react";
import Image from "next/image";
import { lessons } from "@/data/lessons";
import Icon from "./ui/Icon";
import Card from "./ui/Card";

export default function Program() {
  const [imageError, setImageError] = useState(false);

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
              {lessons.map((lesson) => (
                <Card
                  key={lesson.number}
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
                      <ul className="space-y-2">
                        {lesson.topics.map((topic, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-gray-300"
                          >
                            <Icon
                              name="check"
                              className="w-5 h-5 text-[#E50914] flex-shrink-0 mt-0.5"
                            />
                            <span
                              className="text-sm sm:text-base"
                            >
                              {topic}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
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

                  <div
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    {!imageError ? (
                      <Image
                        src="/images/bulldog-coder.webp"
                        alt="Голубой французский бульдог за компьютером"
                        fill
                        className="object-contain opacity-90"
                        onError={() => setImageError(true)}
                      />
                    ) : (
                      <div
                        className="flex flex-col items-center justify-center gap-4"
                      >
                        <div className="text-8xl">
                          🐶
                        </div>
                        <div className="text-6xl opacity-80">
                          👓
                        </div>
                        <div className="text-4xl">
                          ⌨️
                        </div>
                      </div>
                    )}
                  </div>

                  {imageError && (
                    <div
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 rounded-3xl backdrop-blur-sm"
                    >
                      <div
                        className="space-y-2 font-mono text-xs text-green-400"
                      >
                        <div
                          className="flex items-center gap-2"
                        >
                          <span className="text-gray-500">
                            1
                          </span>
                          <span>
                            const prompt = "Create...";
                          </span>
                        </div>
                        <div
                          className="flex items-center gap-2"
                        >
                          <span className="text-gray-500">
                            2
                          </span>
                          <span>
                            const ai = generateCode();
                          </span>
                        </div>
                        <div
                          className="flex items-center gap-2"
                        >
                          <span className="text-gray-500">
                            3
                          </span>
                          <span className="animate-pulse">
                            ▊
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
