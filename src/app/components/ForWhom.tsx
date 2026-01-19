"use client";

import { audience } from "@/data/audience";
import Section from "./ui/Section";
import Card from "./ui/Card";

export default function ForWhom() {
  return (
    <Section id="for-whom" gradient="dark-to-darker">
      {/* Header */}
      <div className="text-center mb-12 sm:mb-16">
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
        >
          Кому подойдёт{" "}
          <span className="text-[#E50914]">
            курс
          </span>
        </h2>
        <p
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto"
        >
          Для тех, кто хочет использовать AI в работе и не зависеть от
          разработчиков
        </p>
      </div>

      {/* Cards Grid */}
      <div
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
      >
        {audience.length > 0 ? (
          audience.map((item) => (
            <Card
              key={`audience-${item.title}`}
              className="group relative p-6 sm:p-8 rounded-3xl"
            >
            <div
              className="text-5xl sm:text-6xl mb-4 group-hover:scale-110 transition-transform"
            >
              {item.icon}
            </div>

            <h3
              className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#E50914] transition-colors"
            >
              {item.title}
            </h3>

            <p
              className="text-sm sm:text-base text-gray-400 leading-relaxed"
            >
              {item.description}
            </p>

            <div
              className="absolute inset-0 bg-gradient-to-br from-[#E50914]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none"
            />
          </Card>
          ))
        ) : (
          <Card className="p-6 sm:p-8">
            <p className="text-gray-400">Информация будет доступна в ближайшее время.</p>
          </Card>
        )}
      </div>
    </Section>
  );
}
