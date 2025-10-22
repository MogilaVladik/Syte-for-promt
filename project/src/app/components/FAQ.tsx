"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Нужны ли знания программирования?",
      answer:
        "Нет! Курс специально разработан для менеджеров без технического бэкграунда. Мы используем AI-инструменты, которые генерируют код за вас. Вам нужно только уметь составлять понятные промпты.",
    },
    {
      question: "Что если я не смогу присутствовать онлайн?",
      answer:
        "Все занятия записываются и будут доступны вам в течение 3 месяцев после завершения курса. Вы сможете проходить материал в удобном темпе.",
    },
    {
      question: "Какой компьютер нужен?",
      answer:
        "Подойдёт любой современный компьютер (Windows, Mac или Linux) с браузером и доступом в интернет. Для Cursor и Onlook рекомендуем минимум 8 ГБ RAM.",
    },
    {
      question: "Входят ли подписки в стоимость?",
      answer:
        "Да! Подписки на Cursor Pro ($20/мес) и Onlook ($15/мес) включены в стоимость курса на весь период обучения + 2 недели после завершения.",
    },
    {
      question: "Будет ли поддержка после курса?",
      answer:
        "Да! Вы получите доступ к закрытому Telegram-чату выпускников, где сможете обмениваться опытом и задавать вопросы.",
    },
    {
      question: "Какой проект я смогу создать?",
      answer:
        "Вы сможете создать любой веб-инструмент или MVP: лендинг, дашборд, калькулятор, форму заявок, мини-приложение — всё зависит от вашей задачи. Мы поможем с выбором на первом занятии.",
    },
    {
      question: "Сколько времени нужно на домашние задания?",
      answer:
        "Курс построен так, что основная работа выполняется прямо на занятиях. Вне занятий достаточно 30-60 минут на закрепление материала.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-16 sm:py-24 bg-gradient-to-b from-[#0B0B0B] to-[#1a1a1a]"
      data-oid="-sn8r1l"
    >
      <div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="gpdihs4"
      >
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16" data-oid="m44u6m7">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            data-oid="0wyv626"
          >
            Частые{" "}
            <span className="text-[#E50914]" data-oid="tsasqnf">
              вопросы
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400" data-oid="1:x_kwe">
            Не нашли ответ?{" "}
            <a
              href="https://t.me/time_t0_it"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E50914] hover:underline"
              data-oid="f71uav1"
            >
              Напишите нам
            </a>
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4" data-oid="9u8olg3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-[#E50914]/50"
              data-oid="rlhejjq"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 sm:p-8 flex items-start justify-between gap-4 text-left hover:bg-white/5 transition-colors"
                data-oid="fdc1smr"
              >
                <span
                  className="text-lg sm:text-xl font-semibold text-white pr-4"
                  data-oid="a7lwrlp"
                >
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-[#E50914] flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="wcbs.dp"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                    data-oid="i7g-nvk"
                  />
                </svg>
              </button>

              {openIndex === index && (
                <div
                  className="px-6 sm:px-8 pb-6 sm:pb-8 border-t border-white/10"
                  data-oid="61jmyr7"
                >
                  <p
                    className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed"
                    data-oid="w.cnbeu"
                  >
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 sm:mt-16 text-center" data-oid="2j_xv-5">
          <div
            className="bg-gradient-to-r from-[#E50914]/10 to-transparent border border-[#E50914]/30 rounded-2xl p-6 sm:p-8"
            data-oid="x68p7:7"
          >
            <p
              className="text-lg sm:text-xl text-gray-300 mb-6"
              data-oid="5i8pi1:"
            >
              Остались вопросы? Свяжитесь с нами напрямую
            </p>
            <a
              href="https://t.me/time_t0_it"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#E50914] hover:bg-[#c20712] text-white font-bold text-lg rounded-2xl transition-all shadow-lg hover:shadow-[#E50914]/50 hover:scale-105"
              data-oid="ki8n96y"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                data-oid="nz4n-39"
              >
                <path
                  d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"
                  data-oid="rr5tswt"
                />
              </svg>
              Написать в Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
