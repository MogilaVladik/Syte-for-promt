import {
  COURSE_START_DATE_ISO,
  EARLY_BIRD_DEADLINE_ISO,
  PRICE_EARLY,
  PRICE_REGULAR,
  LESSON_COUNT,
} from "@/config/constants";

export default function CourseSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Курс по промптингу для менеджеров",
    description:
      "4 практических занятия: Onlook, Cursor, GitLab. Соберите свой AI-MVP и опубликуйте его. В цену включена подписка на Onlook",
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
      "GitLab",
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
      price: PRICE_EARLY,
      priceCurrency: "RUB",
      availability: "https://schema.org/InStock",
      url: "https://timetoitai.ru",
      priceValidUntil: EARLY_BIRD_DEADLINE_ISO,
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


