"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { testimonials } from "@/data/testimonials";
import Icon from "./ui/Icon";

const THUMB_LENGTH_RATIO = 0.5; // ползунок в 2 раза короче обычного

export default function Testimonials() {
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const pages = useMemo(() => Array.from(
    { length: Math.max(1, Math.ceil(testimonials.length / itemsPerPage)) },
    (_, index) => testimonials.slice(index * itemsPerPage, index * itemsPerPage + itemsPerPage),
  ), [itemsPerPage]);
  const pageCount = pages.length;
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [page, setPage] = useState(0);
  const [scrollState, setScrollState] = useState({ scrollLeft: 0, scrollWidth: 0, clientWidth: 0 });

  useEffect(() => {
    const update = () => {
      setItemsPerPage(window.innerWidth < 640 ? 1 : 3);
    };
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const updateScrollState = () => {
      setScrollState({
        scrollLeft: scroller.scrollLeft,
        scrollWidth: scroller.scrollWidth,
        clientWidth: scroller.clientWidth,
      });
      const width = scroller.clientWidth || 1;
      const nextPage = Math.round(scroller.scrollLeft / width);
      setPage(Math.min(Math.max(nextPage, 0), pageCount - 1));
    };

    updateScrollState();
    scroller.addEventListener("scroll", updateScrollState, { passive: true });
    const ro = new ResizeObserver(updateScrollState);
    ro.observe(scroller);
    return () => {
      scroller.removeEventListener("scroll", updateScrollState);
      ro.disconnect();
    };
  }, [pageCount]);

  const scrollToPage = (nextPage: number) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const width = scroller.clientWidth || 0;
    scroller.scrollTo({ left: width * nextPage, behavior: "smooth" });
  };

  const { scrollLeft, scrollWidth, clientWidth } = scrollState;
  const trackWidth = trackRef.current?.clientWidth ?? clientWidth || 1;
  const maxScroll = Math.max(0, scrollWidth - clientWidth);
  const thumbWidth = maxScroll > 0
    ? Math.max(20, (clientWidth / scrollWidth) * trackWidth * THUMB_LENGTH_RATIO)
    : trackWidth;
  const thumbLeft = maxScroll > 0
    ? (scrollLeft / maxScroll) * (trackWidth - thumbWidth)
    : 0;

  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const scroller = scrollerRef.current;
    const track = trackRef.current;
    if (!scroller || !track || maxScroll <= 0) return;
    const rect = track.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newThumbLeft = Math.max(0, Math.min(clickX - thumbWidth / 2, trackWidth - thumbWidth));
    const newScrollLeft = (newThumbLeft / (trackWidth - thumbWidth)) * maxScroll;
    scroller.scrollTo({ left: newScrollLeft, behavior: "smooth" });
  };

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-24 bg-gradient-to-b from-[#1a1a1a] to-[#0B0B0B]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-title font-bold text-white mb-4">
            Отзывы{" "}
            <span className="text-red-primary">участников</span>
          </h2>
          <p className="text-lead text-gray-400 max-w-2xl mx-auto">
            Что говорят выпускники и какие проекты собрали на курсе
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative overflow-hidden">
          <div
            ref={scrollerRef}
            className="testimonials-scroller flex overflow-x-auto scroll-smooth snap-x snap-mandatory pt-2 pb-2"
          >
            {pages.map((pageItems, pageIndex) => (
              <div
                key={`testimonial-page-${pageIndex}`}
                className="snap-start shrink-0 w-full px-2 sm:px-4"
              >
                <div className="flex flex-col lg:flex-row lg:items-stretch lg:justify-center gap-6 lg:gap-8">
                {pageItems.map((t, i) => (
                  <div
                    key={`testimonial-${t.name}-${pageIndex}-${i}`}
                    className="w-full lg:w-[calc((100%-4rem)/3)] bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-red-primary/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-red-primary/10 flex flex-col h-full origin-center"
                  >
                    <div className="text-4xl text-red-primary mb-4">"</div>
                    <p className="text-gray-300 text-body mb-4 leading-relaxed flex-1">
                      {t.text}
                    </p>

                    {/* Ссылка на проект ученика */}
                    {t.projectUrl && (
                      <div className="mb-4 space-y-1">
                        <a
                          href={t.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-red-primary hover:text-red-primary/90 font-semibold text-caption transition-colors group"
                        >
                          <Icon name="external-link" className="w-4 h-4" />
                          <span>
                            {t.projectLabel ?? "Смотреть проект"}
                          </span>
                          <span className="group-hover:translate-x-0.5 transition-transform" aria-hidden>→</span>
                        </a>
                        <div className="text-caption text-gray-500">
                          Если не открывается — включите VPN
                        </div>
                      </div>
                    )}

                    {/* Author */}
                    <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                      <div className="text-4xl shrink-0" aria-hidden>{t.avatar}</div>
                      <div className="min-w-0">
                        <div className="font-bold text-white">{t.name}</div>
                        {t.role ? <div className="text-body text-gray-400">{t.role}</div> : null}
                        {t.company ? <div className="text-caption text-gray-500">{t.company}</div> : null}
                      </div>
                    </div>
                  </div>
                ))}
                </div>
              </div>
            ))}
          </div>
          {/* Кастомный ползунок: длина в 2 раза короче обычного */}
          <div
            ref={trackRef}
            role="scrollbar"
            aria-valuenow={maxScroll > 0 ? Math.round((scrollLeft / maxScroll) * 100) : 0}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Прокрутка отзывов"
            className="h-0.5 w-full rounded-full bg-white/10 cursor-pointer mt-4 mx-auto max-w-full"
            onClick={handleTrackClick}
          >
            <div
              className="h-full rounded-full bg-red-primary/70 hover:bg-red-primary transition-colors pointer-events-none"
              style={{
                width: `${thumbWidth}px`,
                transform: `translateX(${thumbLeft}px)`,
              }}
            />
          </div>
        </div>

        {/* Pagination */}
        {pageCount > 1 ? (
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => scrollToPage(Math.max(page - 1, 0))}
              className="px-3 py-2 rounded-full border border-white/10 text-white/70 hover:text-white hover:border-white/30 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Предыдущая страница"
              disabled={page === 0}
            >
              ←
            </button>
            <div className="flex items-center gap-2">
              {Array.from({ length: pageCount }).map((_, index) => (
                <button
                  key={`testimonial-page-${index}`}
                  type="button"
                  onClick={() => scrollToPage(index)}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${
                    page === index ? "bg-red-primary w-6" : "bg-white/30 hover:bg-white/60"
                  }`}
                  aria-label={`Страница ${index + 1}`}
                  aria-current={page === index ? "true" : undefined}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => scrollToPage(Math.min(page + 1, pageCount - 1))}
              className="px-3 py-2 rounded-full border border-white/10 text-white/70 hover:text-white hover:border-white/30 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Следующая страница"
              disabled={page === pageCount - 1}
            >
              →
            </button>
          </div>
        ) : null}

        {/* CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-lead text-gray-400 mb-6">
            Соберите свой проект и пополните галерею выпускников
          </p>
          <a
            href="#pricing"
            className="inline-block px-8 py-4 bg-red-primary hover:bg-red-primary/90 text-white font-bold text-lead rounded-2xl transition-all shadow-lg hover:shadow-red-primary/50 hover:scale-105"
          >
            Записаться на курс
          </a>
        </div>
      </div>
    </section>
  );
}
