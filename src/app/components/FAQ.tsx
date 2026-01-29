"use client";

import { useState } from "react";
import { faqs } from "@/data/faq";
import { TELEGRAM_URL } from "@/config/constants";
import Icon from "./ui/Icon";
import Button from "./ui/Button";
import Card from "./ui/Card";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-16 sm:py-24 bg-gradient-to-b from-[#0B0B0B] to-[#1a1a1a] relative"
    >
      <img
        src="/images/bulldog-5.png?v=2"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-6 left-4 sm:left-10 w-44 sm:w-56 lg:w-72 opacity-90"
        loading="lazy"
        decoding="async"
      />
      <div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative"
      >
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Частые{" "}
            <span className="text-[#E50914]">
              вопросы
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400">
            Не нашли ответ?{" "}
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E50914] hover:underline"
            >
              Напишите нам
            </a>
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.length > 0 ? (
            faqs.map((faq, index) => {
              const faqId = `faq-${index}`;
              const isOpen = openIndex === index;
              
              return (
                <div
                  key={faqId}
                  className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-[#E50914]/50"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 sm:p-8 flex items-start justify-between gap-4 text-left hover:bg-white/5 transition-colors"
                    aria-expanded={isOpen}
                    aria-controls={`${faqId}-content`}
                    id={`${faqId}-button`}
                  >
                <span
                  className="text-lg sm:text-xl font-semibold text-white pr-4"
                >
                  {faq.question}
                </span>
                <div
                  className={`flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                >
                  <Icon
                    name="arrow-down"
                    className="w-6 h-6 text-[#E50914]"
                  />
                </div>
              </button>

                  {isOpen && (
                    <div
                      id={`${faqId}-content`}
                      role="region"
                      aria-labelledby={`${faqId}-button`}
                      className="px-6 sm:px-8 pb-6 sm:pb-8 border-t border-white/10 animate-fade-in-up"
                    >
                      <p
                        className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed"
                      >
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <Card className="p-6 sm:p-8">
              <p className="text-gray-400">Вопросы и ответы будут добавлены в ближайшее время.</p>
            </Card>
          )}
        </div>

        {/* CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <div
            className="bg-gradient-to-r from-[#E50914]/10 to-transparent border border-[#E50914]/30 rounded-2xl p-6 sm:p-8"
          >
            <p
              className="text-lg sm:text-xl text-gray-300 mb-6"
            >
              Остались вопросы? Свяжитесь с нами напрямую
            </p>
            <Button
              variant="primary"
              icon={
                <Icon name="telegram" className="w-6 h-6" />
              }
            >
              Написать в Telegram
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
