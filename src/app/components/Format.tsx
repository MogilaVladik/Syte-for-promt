import { features, schedule } from "@/data/course";
import type { Feature, ScheduleItem } from "@/data/course";
import Card from "./ui/Card";

export default function Format() {
  return (
    <section
      className="py-16 sm:py-24 bg-gradient-to-b from-[#1a1a1a] to-[#0B0B0B]"
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className="text-title font-bold text-white mb-4"
          >
            Формат и{" "}
            <span className="text-red-primary">
              расписание
            </span>
          </h2>
          <p
            className="text-lead text-gray-400 max-w-2xl mx-auto"
          >
            Удобное время для работающих специалистов
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Features */}
          <div>
            <h3
              className="text-heading font-bold text-white mb-6 sm:mb-8"
            >
              Что входит
            </h3>
            <div
              className="grid sm:grid-cols-2 gap-4 sm:gap-6"
              role="list"
            >
              {features.length > 0 ? (
                features.map((feature: Feature) => (
                  <Card key={`feature-${feature.title}`} className="p-6">
                  <div className="text-4xl mb-3">
                    {feature.icon}
                  </div>
                  <h4
                    className="text-lead font-bold text-white mb-2"
                  >
                    {feature.title}
                  </h4>
                    <p className="text-body text-gray-400">
                      {feature.description}
                    </p>
                  </Card>
                ))
              ) : (
                <Card className="p-6">
                  <p className="text-gray-400">Информация будет доступна в ближайшее время.</p>
                </Card>
              )}
            </div>
          </div>

          {/* Schedule */}
          <div>
            <h3
              className="text-heading font-bold text-white mb-6 sm:mb-8"
            >
              Предварительное расписание
            </h3>
            <div className="space-y-4" role="list">
              {schedule.length > 0 ? (
                schedule.map((item: ScheduleItem, index: number) => (
                  <div
                    key={`schedule-${item.date}-${index}`}
                    className="bg-gradient-to-r from-red-primary/10 to-transparent border border-red-primary/30 p-6 rounded-2xl hover:border-red-primary/50 transition-all"
                  >
                    <div
                      className="flex items-center justify-between gap-4"
                    >
                      <div>
                        <div
                          className="text-lead font-bold text-white mb-1"
                        >
                          Занятие {index + 1}
                        </div>
                        <div className="text-gray-400">
                          {item.date} • {item.day}
                        </div>
                      </div>
                      <div
                        className="text-lead font-bold text-red-primary"
                      >
                        {item.time}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <Card className="p-6">
                  <p className="text-gray-400">Расписание будет опубликовано в ближайшее время.</p>
                </Card>
              )}
            </div>

            {/* Note */}
            <Card hover={false} className="mt-6 p-6">
              <p
                className="text-body text-gray-400 leading-relaxed"
              >
                <span className="text-white font-semibold">
                  Примечание:
                </span>{" "}
                Не сможете присутствовать онлайн? Не проблема! Все записи будут
                доступны в течение 3 месяцев после завершения курса.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
