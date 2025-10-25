export interface AudienceItem {
  title: string;
  description: string;
  icon: string;
}

export const audience: AudienceItem[] = [
  {
    title: "Менеджерам продукта",
    description:
      "Создавайте прототипы и MVP быстрее, общайтесь с разработчиками на одном языке",
    icon: "💼",
  },
  {
    title: "Тимлидам",
    description:
      "Автоматизируйте рутину, ускорьте код-ревью и онбординг команды с помощью AI",
    icon: "👨‍💼",
  },
  {
    title: "Аналитикам",
    description: "Генерируйте SQL-запросы, визуализации и отчёты через промпты",
    icon: "📊",
  },
  {
    title: "Предпринимателям",
    description:
      "Запустите свой AI-инструмент без команды разработки и технических знаний",
    icon: "🚀",
  },
];
