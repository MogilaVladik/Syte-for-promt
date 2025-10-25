export interface Lesson {
  number: number;
  title: string;
  duration: string;
  topics: string[];
}

export const lessons: Lesson[] = [
  {
    number: 1,
    title: "Введение в промптинг и LLM",
    duration: "1 час",
    topics: [
      "Как работают большие языковые модели",
      "Структура эффективного промпта",
      "Техники: Zero-shot, Few-shot, Chain-of-thought",
      "Инструменты: ChatGPT, Claude, Gemini",
      "Практика: создаём 10+ промптов для вашей задачи",
    ],
  },
  {
    number: 2,
    title: "Прототип в Onlook",
    duration: "1 час",
    topics: [
      "Знакомство с Onlook — визуальный редактор для React",
      "Генерация компонентов через AI",
      "Создание интерфейса без кода",
      "Экспорт в React/Next.js",
      "Практика: собираем прототип вашего MVP",
    ],
  },
  {
    number: 3,
    title: "Cursor: код и ревью",
    duration: "1 час",
    topics: [
      "Установка и настройка Cursor",
      "AI-автодополнение и генерация кода",
      "Рефакторинг и оптимизация через Cmd+K",
      "Чат с кодовой базой",
      "Практика: добавляем логику и функциональность",
    ],
  },
  {
    number: 4,
    title: "Публикация в GitLab",
    duration: "1 час",
    topics: [
      "Git основы для менеджеров",
      "Создание репозитория в GitLab",
      "Коммиты, пуши, ветки через AI",
      "Настройка CI/CD и деплой",
      "Практика: ваш проект доступен по ссылке",
    ],
  },
];
