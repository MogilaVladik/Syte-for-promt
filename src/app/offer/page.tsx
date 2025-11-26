// src/app/offer/page.tsx
"use client";

import { useEffect, useRef, useState } from "react";

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

  // Простая эвристика на открытие DevTools
  useEffect(() => {
    let w = window.outerWidth;
    let h = window.outerHeight;
    const id = setInterval(() => {
      const dw = Math.abs(window.outerWidth - w);
      const dh = Math.abs(window.outerHeight - h);
      w = window.outerWidth;
      h = window.outerHeight;
      if (dw > 160 || dh > 160) setLocked(true);
    }, 1200);
    return () => clearInterval(id);
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
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-6">
          Договор-оферта на оказание услуг по обучению
        </h1>

        <p className="text-sm text-gray-400 mb-8">
          г. Москва, 26.11.2025
          <br />
          Исполнитель: Могильников Владислав Дмитриевич, ИНН 352832307870, самозанятый (НПД).
          <br />
          Адрес: г. Москва, ул. Видная, д. 2
          <br />
          E-mail: sasha.vlad.mog@inbox.ru · Тел.: +7 (929) 578-86-05
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
              Исполнитель предоставляет доступ к Курсу на условиях настоящей оферты. Оплата
              Заказчиком подтверждает заключение договора в полном объёме.
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
          </div>

          <div>
            <h2 className="font-semibold text-white mb-2">4. Стоимость</h2>
            <p>
              Стоимость указывается на Сайте и/или в материалах Курса. Оплачивая Курс, Заказчик
              соглашается со стоимостью на момент оплаты.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white mb-2">5. Права и ограничения</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Материалы и записи предназначены только для личного использования Заказчиком.</li>
              <li>Запрещено распространение материалов третьим лицам без согласия Исполнителя.</li>
              <li>
                Исполнитель может менять программу/расписание без ухудшения общего объёма и логики
                обучения.
              </li>
              <li>
                Исполнитель не отвечает за сбои на стороне провайдеров сервисов (Zoom, Telegram и др.).
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-white mb-2">6. Отсутствие возврата</h2>
            <p>
              Возврат денежных средств <span className="font-semibold">не осуществляется</span>.
              Оплатой Курса Заказчик подтверждает согласие с условиями, содержанием программы и
              своей технической готовностью (доступ к интернету и сервисам).
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white mb-2">7. Ответственность</h2>
            <p>
              Исполнитель не гарантирует конкретного результата (трудоустройство, доход и т. п.),
              так как результат зависит от действий и квалификации Заказчика.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-white mb-2">8. Персональные данные</h2>
            <p>
              Заказчик даёт согласие на обработку персональных данных для исполнения договора,
              включая передачу третьим лицам-провайдерам, задействованным в предоставлении Курса.
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
            <h2 className="font-semibold text-white mb-2">10. Реквизиты Исполнителя</h2>
            <div className="rounded-xl border border-white/10 p-4 bg-white/5">
              <p>Исполнитель: Могильников Владислав Дмитриевич</p>
              <p>Статус: самозанятый (НПД, РФ)</p>
              <p>ИНН: 352832307870</p>
              <p>Адрес: г. Москва, ул. Видная, д. 2</p>
              <p>E-mail: sasha.vlad.mog@inbox.ru</p>
              <p>Телефон: +7 (929) 578-86-05</p>
            </div>
          </div>
        </section>

        {locked && (
          <div className="mt-6 text-xs text-red-400">
            Защита активирована. Закройте инструменты разработчика и обновите страницу.
          </div>
        )}
      </div>
    </main>
  );
}
