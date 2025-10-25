export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface ScheduleItem {
  date: string;
  day: string;
  time: string;
}

export const features: Feature[] = [
  {
    icon: "🎥",
    title: "Онлайн вебинары",
    description: "Занятия проходят в Zoom с возможностью задавать вопросы",
  },
  {
    icon: "⏰",
    title: "4 × 1 час",
    description: "Компактный формат — без воды, только практика",
  },
  {
    icon: "💻",
    title: "80% практики",
    description: "На каждом занятии вы работаете над своим проектом",
  },
  {
    icon: "💬",
    title: "Чат поддержки",
    description: "Telegram-группа для вопросов и обмена опытом",
  },
  {
    icon: "📹",
    title: "Все записи",
    description: "Доступ к записям на 3 месяца после курса",
  },
  {
    icon: "📝",
    title: "Материалы",
    description: "Шаблоны промптов, чек-листы, шпаргалки",
  },
];

export const schedule: ScheduleItem[] = [
  { date: "15 декабря", day: "Воскресенье", time: "20:00 МСК" },
  { date: "17 декабря", day: "Вторник", time: "20:00 МСК" },
  { date: "19 декабря", day: "Четверг", time: "20:00 МСК" },
  { date: "21 декабря", day: "Суббота", time: "20:00 МСК" },
];

export const courseIncludes: string[] = [
  "4 живых занятия в Zoom",
  "Записи всех занятий (доступ 3 месяца)",
  "Подписки на Cursor Pro и Onlook",
  "Шаблоны и библиотека промптов",
  "Доступ к закрытому Telegram-чату",
  "Поддержка преподавателя",
  "Все материалы и чек-листы",
];
