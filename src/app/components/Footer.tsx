"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[#0B0B0B] border-t border-white/10 py-12 sm:py-16"
      data-oid="ntkaoxm"
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="2lnz.yk"
      >
        <div className="grid md:grid-cols-3 gap-8 mb-8" data-oid="ipq1nu_">
          {/* Logo & Description */}
          <div data-oid="ovrh4w:">
            <h3
              className="text-2xl font-bold text-white mb-4"
              data-oid="f_y.xsl"
            >
              Промптинг
              <span className="text-[#E50914]" data-oid="e_8hwuj">
                .
              </span>
            </h3>
            <p
              className="text-gray-400 text-sm leading-relaxed"
              data-oid="g3awmlk"
            >
              Курс по промптингу для менеджеров. Научитесь создавать AI-продукты
              с Cursor, Onlook и GitLab.
            </p>
          </div>

          {/* Quick Links */}
          <div data-oid="8.vqwog">
            <h4 className="text-white font-semibold mb-4" data-oid="1bi_hte">
              Навигация
            </h4>
            <ul className="space-y-2 text-sm" data-oid="ws0iml1">
              <li data-oid="j64pr3s">
                <a
                  href="#program"
                  className="text-gray-400 hover:text-white transition-colors"
                  data-oid="bn7zhoe"
                >
                  Программа
                </a>
              </li>
              <li data-oid="y_7r9no">
                <a
                  href="#for-whom"
                  className="text-gray-400 hover:text-white transition-colors"
                  data-oid="6q47j1n"
                >
                  Для кого
                </a>
              </li>
              <li data-oid="fm9v8n.">
                <a
                  href="#pricing"
                  className="text-gray-400 hover:text-white transition-colors"
                  data-oid="19ek9rz"
                >
                  Стоимость
                </a>
              </li>
              <li data-oid="m0rr5e3">
                <a
                  href="#faq"
                  className="text-gray-400 hover:text-white transition-colors"
                  data-oid="fqxrsxf"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div data-oid="aybly..">
            <h4 className="text-white font-semibold mb-4" data-oid=":oxfxm_">
              Контакты
            </h4>
            <div className="space-y-3" data-oid="1v5vnj5">
              <a
                href="https://t.me/time_t0_it"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm"
                data-oid="wrl..9j"
              >
                <svg
                  className="w-5 h-5 text-[#E50914]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  data-oid="r40g3cp"
                >
                  <path
                    d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"
                    data-oid=".5azrrw"
                  />
                </svg>
                Telegram: @time_t0_it
              </a>
              <p className="text-gray-400 text-sm" data-oid="k7a424n">
                Поддержка: пн-пт, 10:00-19:00 МСК
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10" data-oid="_sfm1mk">
          <div
            className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400"
            data-oid="sued2qm"
          >
            <div data-oid="0e-bfle">
              © {currentYear} Промптинг для менеджеров. Все права защищены.
            </div>
            <div className="flex gap-6" data-oid="4mloj3m">
              <a
                href="/privacy"
                className="hover:text-white transition-colors"
                data-oid="x3_gbuv"
              >
                Политика конфиденциальности
              </a>
              <a
                href="/privacy#soglasie"
                className="hover:text-white transition-colors"
                data-oid="soglasie-link"
              >
                Согласие на обработку данных
              </a>
              <a
                href="/offer"
                className="hover:text-white transition-colors"
                data-oid="nipe2um"
              >
                Оферта
              </a>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-8 text-center" data-oid="n.wp7o.">
          <a
            href="https://t.me/time_t0_it"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#E50914] to-[#c20712] hover:from-[#c20712] hover:to-[#a00610] text-white font-semibold rounded-2xl transition-all shadow-lg hover:shadow-[#E50914]/50 hover:scale-105"
            data-oid="ycwiq:e"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              data-oid="onvqn3l"
            >
              <path
                d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"
                data-oid="o6nymc4"
              />
            </svg>
            Связаться в Telegram
          </a>
        </div>
      </div>
    </footer>
  );
}
