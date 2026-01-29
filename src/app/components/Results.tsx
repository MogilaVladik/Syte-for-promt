"use client";

import { results } from "@/data/results";
import Section from "./ui/Section";
import Card from "./ui/Card";

export default function Results() {
  return (
    <Section gradient="dark-to-darker">
      {/* Header */}
      <div className="text-center mb-12 sm:mb-16">
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
        >
          Что вы{" "}
          <span className="text-[#E50914]">
            сделаете
          </span>{" "}
          за курс
        </h2>
        <p
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto"
        >
          Конкретные результаты, которые вы получите после 4 занятий
        </p>
      </div>

      {/* Results Grid */}
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        role="list"
      >
        {results.length > 0 ? (
          results.map((result) => (
            <Card
              key={`result-${result.text}`}
              className="group p-6 sm:p-8 text-center"
              hover={true}
            >
              <div
                className="text-4xl sm:text-5xl mb-4 group-hover:scale-110 transition-transform"
                role="img"
                aria-label={result.icon}
              >
                {result.icon}
              </div>

              <p
                className="text-sm sm:text-base text-gray-300 font-medium leading-snug"
              >
                {result.text}
              </p>
            </Card>
          ))
        ) : (
          <Card className="p-6 sm:p-8">
            <p className="text-gray-400">Результаты курса будут обновлены.</p>
          </Card>
        )}
      </div>

      {/* Additional info */}
      <div className="mt-12 sm:mt-16 text-center">
        <div
          className="inline-block bg-gradient-to-r from-[#E50914]/10 to-transparent border border-[#E50914]/30 rounded-2xl p-6 sm:p-8 max-w-3xl"
        >
          <p className="text-base sm:text-lg text-gray-300">
            <span className="text-[#E50914] font-bold">
              Бонус:
            </span>{" "}
            Все участники получают подписку на Onlook на весь
            период обучения + 2 недели после завершения курса
          </p>
        </div>
      </div>
    </Section>
  );
}
