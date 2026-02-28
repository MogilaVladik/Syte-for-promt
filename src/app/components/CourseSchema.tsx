import {
  COURSE_START_DATE_ISO,
  PRICE_REGULAR,
  LESSON_COUNT,
} from "@/config/constants";

export default function CourseSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Курс по промптингу для менеджеров",
    description:
      "4 практических занятия: Onlook, Cursor, GitHub. Соберите свой AI-MVP и опубликуйте его. В цену включена подписка на Cursor",
    provider: {
      "@type": "Organization",
      name: "Time to IT",
      url: "https://timetoitai.ru",
    },
    courseCode: "PROMTING-MANAGERS",
    educationalLevel: "Beginner",
    teaches: [
      "Промптинг",
      "Работа с AI инструментами",
      "Onlook",
      "Cursor",
      "GitHub",
      "Создание MVP",
    ],
    numberOfCredits: {
      "@type": "Integer",
      value: LESSON_COUNT,
    },
    timeRequired: `PT${LESSON_COUNT * 60}M`,
    inLanguage: "ru-RU",
    offers: {
      "@type": "Offer",
      price: PRICE_REGULAR,
      priceCurrency: "RUB",
      availability: "https://schema.org/InStock",
      url: "https://timetoitai.ru",
    },
    startDate: COURSE_START_DATE_ISO,
    coursePrerequisites: "Знание работы с компьютером на базовом уровне",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "15",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}


