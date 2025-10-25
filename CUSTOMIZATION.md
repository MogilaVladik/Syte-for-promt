# 🎨 Кастомизация лендинга

Руководство по изменению контента, стилей и настроек лендинга под свои нужды.

## 📝 Изменение контента

### 1. Основная информация (layout.tsx)

```typescript
// src/app/layout.tsx
export const metadata: Metadata = {
  title: "ВАШЕ НАЗВАНИЕ КУРСА",
  description: "ВАШЕ ОПИСАНИЕ",
  keywords: ["ваши", "ключевые", "слова"],
};
```

### 2. Hero-секция (Hero.tsx)

```typescript
// src/app/components/Hero.tsx

// Дата старта
<div>Старт [ВАША ДАТА]</div>

// Заголовок
<h1>Курс по [ВАША ТЕМА]</h1>

// Цена
<div>XX XXX ₽</div>

// Telegram-ссылка
<a href="https://t.me/ВАШ_USERNAME">
```

### 3. Целевая аудитория (ForWhom.tsx)

```typescript
const audience = [
  {
    title: "ВАША АУДИТОРИЯ 1",
    description: "ОПИСАНИЕ",
    icon: "🎯", // Любой эмодзи
  },
  // ... добавьте свои
];
```

### 4. Программа курса (Program.tsx)

```typescript
const lessons = [
  {
    number: 1,
    title: "НАЗВАНИЕ ЗАНЯТИЯ",
    duration: "Х часов",
    topics: [
      "Тема 1",
      "Тема 2",
      // ...
    ],
  },
  // ... ваши занятия
];
```

### 5. Расписание (Format.tsx)

```typescript
const schedule = [
  { date: "ДД месяца", day: "День недели", time: "ЧЧ:ММ МСК" },
  // ...
];
```

### 6. Стоимость (Pricing.tsx)

```typescript
// Цена
<div>XX XXX ₽</div>

// Что включено
const includes = [
  "Ваш пункт 1",
  "Ваш пункт 2",
  // ...
];
```

### 7. FAQ (FAQ.tsx)

```typescript
const faqs = [
  {
    question: "ВАШ ВОПРОС?",
    answer: "ВАШ ОТВЕТ",
  },
  // ...
];
```

## 🎨 Изменение цветов

### 1. Основная палитра (globals.css)

```css
:root {
    --red-primary: #E50914;    /* Ваш акцентный цвет */
    --gray-warm: #9CA3AF;      /* Серый тёплый */
    --gray-light: #D1D5DB;     /* Серый светлый */
    --black: #0B0B0B;          /* Фон тёмной темы */
}

[data-theme="light"] {
    --background: #F5F5F5;     /* Фон светлой темы */
    --foreground: #0B0B0B;     /* Текст светлой темы */
}
```

### 2. Tailwind палитра (tailwind.config.ts)

```typescript
colors: {
  "red-primary": "#E50914",   // Замените на свой цвет
  "gray-warm": "#9CA3AF",
  "gray-light": "#D1D5DB",
},
```

### 3. Градиент Hero (globals.css)

```css
.gradient-hero {
    background: linear-gradient(135deg, 
      #E50914 0%,        /* Начальный цвет */
      #2d2d2d 50%,       /* Средний */
      #0B0B0B 100%       /* Конечный */
    );
}
```

## 🖼️ Замена бульдогов на свои иллюстрации

### Вариант 1: Использовать другие эмодзи

```typescript
// Hero.tsx
<div className="...">
  🚀  {/* Замените на свой эмодзи */}
</div>

// Program.tsx (кодер)
<div>👨‍💻</div>  {/* Ваш эмодзи */}
```

### Вариант 2: Использовать SVG/PNG изображения

```typescript
// Hero.tsx
import Image from "next/image";

<div className="relative w-96 h-96">
  <Image
    src="/images/hero-illustration.svg"
    alt="Hero illustration"
    fill
    className="object-contain"
  />
</div>
```

### Вариант 3: Lottie-анимации

```bash
bun add lottie-react
```

```typescript
import Lottie from "lottie-react";
import animationData from "./animation.json";

<Lottie 
  animationData={animationData} 
  loop={true}
  className="w-96 h-96"
/>
```

## 🎭 Настройка анимаций

### Изменить скорость анимаций

```css
/* globals.css */
@keyframes float {
    /* Изменить длительность в компонентах */
    animation: float 10s ease-in-out infinite; /* Было 6s */
}
```

```typescript
// tailwind.config.ts
animation: {
  "float": "float 10s ease-in-out infinite", // Ваша длительность
}
```

### Отключить анимации

```css
/* globals.css - добавить */
* {
    animation: none !important;
    transition: none !important;
}
```

Или использовать prefers-reduced-motion (уже реализовано).

## 🔗 Изменение ссылок

### Telegram

Замените `time_t0_it` на свой username везде:

```bash
# Поиск и замена
grep -r "time_t0_it" src/
```

```typescript
// Найти и заменить во всех компонентах
href="https://t.me/ВАШ_USERNAME"
```

### Якорные ссылки

```typescript
// Navbar.tsx
<button onClick={() => scrollToSection("новый-id")}>

// Компонент
<section id="новый-id">
```

## 📱 Адаптивность

### Изменить breakpoints

```typescript
// tailwind.config.ts
theme: {
  screens: {
    'sm': '640px',   // Ваши значения
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
  },
}
```

### Скрыть компонент на мобильных

```typescript
<div className="hidden md:block">
  {/* Видно только на desktop */}
</div>
```

## 🌍 Локализация

### Создать мультиязычность

1. Установить i18n:

```bash
bun add next-intl
```

2. Создать словари:

```typescript
// locales/ru.json
{
  "hero.title": "Курс по промптингу",
  "hero.cta": "Записаться"
}

// locales/en.json
{
  "hero.title": "Prompting Course",
  "hero.cta": "Enroll Now"
}
```

3. Использовать:

```typescript
import { useTranslations } from 'next-intl';

const t = useTranslations('hero');
<h1>{t('title')}</h1>
```

## 🔧 Дополнительные компоненты

### Добавить секцию "О преподавателе"

```typescript
// src/app/components/Instructor.tsx
export default function Instructor() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#1a1a1a] to-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4">
        <h2>О преподавателе</h2>
        {/* Ваш контент */}
      </div>
    </section>
  );
}

// page.tsx
import Instructor from "./components/Instructor";
<Instructor />
```

### Добавить форму оплаты

```typescript
// components/PaymentForm.tsx
export default function PaymentForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Интеграция с платёжной системой
  };
  
  return <form onSubmit={handleSubmit}>{/* ... */}</form>;
}
```

## 📊 Подключение аналитики

### Google Analytics

```typescript
// app/layout.tsx
import Script from "next/script";

<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

### Yandex.Metrika

```typescript
<Script id="yandex-metrika" strategy="afterInteractive">
  {`
    (function(m,e,t,r,i,k,a){/* код метрики */})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
    ym(XXXXXX, "init", { clickmap:true, trackLinks:true });
  `}
</Script>
```

## 🎯 SEO улучшения

### Добавить JSON-LD разметку

```typescript
// components/CourseSchema.tsx
export default function CourseSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Промптинг для менеджеров",
    "description": "...",
    "provider": {
      "@type": "Organization",
      "name": "..."
    }
  };
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

## 🚀 Производительность

### Оптимизация изображений

```typescript
// next.config.ts
const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
  },
};
```

### Code splitting

```typescript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false, // Отключить SSR если не нужен
});
```

## 💾 Сохранение настроек

### Local Storage для темы

```typescript
// Сохранять выбор пользователя
useEffect(() => {
  const saved = localStorage.getItem('theme');
  if (saved) setIsDark(saved === 'dark');
}, []);

useEffect(() => {
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}, [isDark]);
```

---

**Готово!** Теперь вы можете легко адаптировать лендинг под любой курс или продукт. 🎉
