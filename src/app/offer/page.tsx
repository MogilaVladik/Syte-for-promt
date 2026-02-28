// src/app/offer/page.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { OFFER_PROTECTION_INTERVAL, OFFER_WINDOW_SIZE_THRESHOLD } from "@/config/constants";

export default function OfferPage() {
  const [locked, setLocked] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  // Запрет контекстного меню + копирования/вставки/drag
  useEffect(() => {
    const el = rootRef.current ?? document;
    const prevent = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };
    el.addEventListener("contextmenu", prevent, true);
    el.addEventListener("copy", prevent, true);
    el.addEventListener("cut", prevent, true);
    el.addEventListener("paste", prevent, true);
    el.addEventListener("dragstart", prevent, true);

    // Горячие клавиши (F12, Ctrl/Cmd+Shift+I/J/C, Ctrl/Cmd+C/S/P/U/A)
    const keydown = (e: KeyboardEvent) => {
      const k = e.key.toUpperCase();
      const ctrl = e.ctrlKey || e.metaKey;
      if (
        (ctrl && ["C", "A", "S", "P", "U"].includes(k)) ||
        (ctrl && e.shiftKey && ["I", "J", "C"].includes(k)) ||
        k === "F12" ||
        k === "PRINTSCREEN"
      ) {
        e.preventDefault();
        e.stopPropagation();
        setLocked(true);
      }
    };
    window.addEventListener("keydown", keydown, true);

    return () => {
      el.removeEventListener("contextmenu", prevent, true);
      el.removeEventListener("copy", prevent, true);
      el.removeEventListener("cut", prevent, true);
      el.removeEventListener("paste", prevent, true);
      el.removeEventListener("dragstart", prevent, true);
      window.removeEventListener("keydown", keydown, true);
    };
  }, []);

  // Оптимизированная проверка размера окна с учетом видимости страницы
  useEffect(() => {
    let w = window.outerWidth;
    let h = window.outerHeight;
    let isPageVisible = !document.hidden;

    const handleVisibilityChange = () => {
      isPageVisible = !document.hidden;
    };

    const checkWindowSize = () => {
      // Проверяем только если страница видима
      if (!isPageVisible) return;

      const dw = Math.abs(window.outerWidth - w);
      const dh = Math.abs(window.outerHeight - h);
      w = window.outerWidth;
      h = window.outerHeight;
      
      if (dw > OFFER_WINDOW_SIZE_THRESHOLD || dh > OFFER_WINDOW_SIZE_THRESHOLD) {
        setLocked(true);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    const id = setInterval(checkWindowSize, OFFER_PROTECTION_INTERVAL);
    
    return () => {
      clearInterval(id);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <main className="min-h-screen bg-black text-gray-200">
      <div className="offer-watermark" aria-hidden />

      <div
        ref={rootRef}
        className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 offer-protect ${
          locked ? "offer-locked" : ""
        }`}
      >
        <Link
          href="/#footer"
          className="inline-flex items-center gap-2 text-body text-gray-400 hover:text-white transition-colors mb-8"
        >
          ← На главную
        </Link>
        <h1 className="text-heading font-bold text-white mb-6">
          Договор-оферта на оказание услуг по обучению
        </h1>

        <p className="text-body text-gray-400 mb-8">
          г. Москва, 29.01.2026
          <br />
          Исполнитель: Могильников Владислав Дмитриевич, ИНН 352832307870, самозанятый (НПД).
          <br />
          Адрес: г. Москва, ул. Видная, д. 2
          <br />
          Электронная почта: sasha.vlad.mog@inbox.ru · Тел.: +7 (929) 578-86-05
        </p>

        <section className="space-y-6 leading-relaxed">
          <div>
            <h2 className="font-semibold text-white mb-2">1. Термины</h2>
            <p>
              «Сайт» — www.timetoitai.ru. «Курс» — образовательная программа (онлайн-вебинары,
              материалы, записи). «Заказчик» — лицо, оплатившее Курс. «Исполнитель» —
              Могильников Владислав Дмитриевич, самозанятый.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white mb-2">2. Предмет</h2>
            <p>
              Исполнитель оказывает услуги по обучению в онлайн-формате (Курс), включая живые
              вебинары, доступ к записям, учебным материалам и закрытым каналам/чатам, если это
              предусмотрено программой. Оплата Заказчиком подтверждает заключение договора в полном
              объёме.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white mb-2">3. Порядок и форма оплаты</h2>
            <p className="mb-2">
              Оплата производится переводом по номеру телефона Исполнителя на счёт самозанятого
              (ФНС РФ, НПД). Валюта — рубли РФ. Комиссии платёжных сервисов несёт Заказчик,
              если иное не предусмотрено правилами сервиса.
            </p>
            <p>
              После поступления оплаты Исполнитель предоставляет доступ к Курсу и (при наличии)
              включает Заказчика в закрытые каналы/чаты/сервисы, предусмотренные программой.
            </p>
            <p className="mt-2">
              По факту оплаты формируется чек НПД и направляется Заказчику в электронном виде.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white mb-2">4. Порядок оказания услуг</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Доступ к материалам предоставляется в течение 24 часов после оплаты.</li>
              <li>Формат — онлайн-занятия с доступом к записям и материалам.</li>
              <li>
                Для участия требуется стабильный интернет, браузер, доступ к сервисам (например,
                Zoom, Telegram), а также совместимое устройство.
              </li>
              <li>
                Исполнитель вправе переносить занятия или обновлять программу без ухудшения общего
                объёма и логики обучения, уведомив Заказчика заранее.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-white mb-2">5. Стоимость</h2>
            <p>
              Стоимость указывается на Сайте и/или в материалах Курса. Оплачивая Курс, Заказчик
              соглашается со стоимостью, действующей на момент оплаты.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white mb-2">6. Права, ограничения и результаты</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Материалы и записи предназначены только для личного использования Заказчиком.</li>
              <li>Запрещено копирование и распространение материалов третьим лицам без согласия Исполнителя.</li>
              <li>
                Исполнитель не отвечает за сбои на стороне провайдеров сервисов (Zoom, Telegram и др.).
              </li>
              <li>
                Исполнитель не гарантирует конкретного результата (трудоустройство, доход и т. п.),
                так как результат зависит от действий и квалификации Заказчика.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-white mb-2">7. Отказ и возврат</h2>
            <p className="mb-2">
              Заказчик вправе отказаться от услуг в любое время. В этом случае Исполнитель
              возвращает сумму за вычетом фактически понесённых расходов и оказанных услуг.
            </p>
            <p className="mb-2">
              Если доступ к материалам предоставлен полностью и Заказчик начал их использование,
              стоимость такого доступа может быть удержана в размере фактически оказанной части
              услуги.
            </p>
            <p>
              Для отказа необходимо направить заявление на электронную почту Исполнителя с темой письма
              «Отказ от услуги». Срок рассмотрения обращения — до 10 календарных дней.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white mb-2">8. Персональные данные</h2>
            <p>
              Заказчик даёт согласие на обработку персональных данных для исполнения договора,
              включая передачу третьим лицам-провайдерам, задействованным в предоставлении Курса.
              Политика обработки персональных данных размещена на Сайте.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white mb-2">9. Акцепт оферты</h2>
            <p>
              Оплачивая Курс, Заказчик подтверждает, что полностью прочитал и принял условия
              настоящей оферты. Договор считается заключённым с момента оплаты.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white mb-2">10. Порядок разрешения споров</h2>
            <p>
              Стороны стремятся решать споры путём переговоров и претензионного порядка. При
              невозможности урегулирования спор рассматривается в соответствии с законодательством
              Российской Федерации.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white mb-2">11. Реквизиты Исполнителя</h2>
            <div className="rounded-xl border border-white/10 p-4 bg-white/5">
              <p>Исполнитель: Могильников Владислав Дмитриевич</p>
              <p>Статус: самозанятый (НПД, РФ)</p>
              <p>ИНН: 352832307870</p>
              <p>Адрес: г. Москва, ул. Видная, д. 2</p>
              <p>Электронная почта: sasha.vlad.mog@inbox.ru</p>
              <p>Телефон: +7 (929) 578-86-05</p>
            </div>
          </div>
        </section>

        {locked && (
          <div className="mt-6 text-caption text-red-400">
            Защита активирована. Закройте инструменты разработчика и обновите страницу.
          </div>
        )}

        <div className="mt-10">
          <Link
            href="/#footer"
            className="inline-flex items-center gap-2 text-body text-gray-400 hover:text-white transition-colors"
          >
            ← На главную
          </Link>
        </div>
      </div>
    </main>
  );
}
