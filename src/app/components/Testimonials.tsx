"use client";

import { testimonials } from "@/data/testimonials";
import Icon from "./ui/Icon";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-16 sm:py-24 bg-gradient-to-b from-[#1a1a1a] to-[#0B0B0B]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Отзывы{" "}
            <span className="text-[#E50914]">участников</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Что говорят выпускники и какие проекты собрали на курсе
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={`testimonial-${t.name}-${i}`}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-[#E50914]/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#E50914]/10 flex flex-col"
            >
              <div className="text-4xl text-[#E50914] mb-4">"</div>
              <p className="text-gray-300 text-base sm:text-lg mb-4 leading-relaxed flex-1">
                {t.text}
              </p>

              {/* Ссылка на проект ученика */}
              {t.projectUrl && (
                <a
                  href={t.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#E50914] hover:text-[#c20712] font-semibold text-sm mb-4 transition-colors group"
                >
                  <Icon name="external-link" className="w-4 h-4" />
                  <span>
                    {t.projectLabel ?? "Смотреть проект"}
                  </span>
                  <span className="group-hover:translate-x-0.5 transition-transform" aria-hidden>→</span>
                </a>
              )}

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="text-4xl shrink-0" aria-hidden>{t.avatar}</div>
                <div className="min-w-0">
                  <div className="font-bold text-white">{t.name}</div>
                  {t.role ? <div className="text-sm text-gray-400">{t.role}</div> : null}
                  {t.company ? <div className="text-xs text-gray-500">{t.company}</div> : null}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-lg text-gray-400 mb-6">
            Соберите свой проект и пополните галерею выпускников
          </p>
          <a
            href="#pricing"
            className="inline-block px-8 py-4 bg-[#E50914] hover:bg-[#c20712] text-white font-bold text-lg rounded-2xl transition-all shadow-lg hover:shadow-[#E50914]/50 hover:scale-105"
          >
            Записаться на курс
          </a>
        </div>
      </div>
    </section>
  );
}
