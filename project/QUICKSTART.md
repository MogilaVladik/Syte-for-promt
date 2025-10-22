# 🚀 Быстрый старт

Запуск лендинга за 5 минут!

## ⚡ Минимальная настройка

### 1. Установка (30 сек)

```bash
bun install
```

### 2. Запуск dev-сервера (10 сек)

```bash
bun run dev
```

Откройте [http://localhost:3000](http://localhost:3000)

## 📝 Первые изменения

### Изменить Telegram-ссылку

Откройте любой компонент и замените:

```typescript
href="https://t.me/time_t0_it"
```

на

```typescript
href="https://t.me/ВАШ_USERNAME"
```

**Файлы с Telegram-ссылками:**
- `src/app/components/Navbar.tsx`
- `src/app/components/Hero.tsx`
- `src/app/components/Pricing.tsx`
- `src/app/components/FAQ.tsx`
- `src/app/components/Footer.tsx`
- `src/app/components/StickyMobileCTA.tsx`

### Изменить цену

Откройте `src/app/components/Hero.tsx` и `src/app/components/Pricing.tsx`:

```typescript
<div>35 000 ₽</div>  // Замените на свою цену
```

### Изменить дату старта

`src/app/components/Hero.tsx`:

```typescript
Старт 15 декабря 2025  // Ваша дата
```

### Изменить название курса

`src/app/layout.tsx`:

```typescript
title: "Курс по промптингу для менеджеров..."  // Ваше название
```

`src/app/components/Hero.tsx`:

```typescript
<h1>Курс по промптингу для менеджеров</h1>  // Ваш заголовок
```

## 🎨 Кастомизация

### Сменить основной цвет

`src/app/globals.css`:

```css
:root {
    --red-primary: #E50914;  /* Замените на свой цвет */
}
```

`tailwind.config.ts`:

```typescript
colors: {
  "red-primary": "#E50914",  // Ваш цвет
}
```

### Изменить программу курса

`src/app/components/Program.tsx`:

```typescript
const lessons = [
  {
    number: 1,
    title: "ВАШЕ НАЗВАНИЕ",
    duration: "1 час",
    topics: [
      "Ваша тема 1",
      "Ваша тема 2",
    ],
  },
  // ... добавьте свои занятия
];
```

### Изменить целевую аудиторию

`src/app/components/ForWhom.tsx`:

```typescript
const audience = [
  {
    title: "ВАША АУДИТОРИЯ",
    description: "ОПИСАНИЕ",
    icon: "🎯",  // Любой эмодзи
  },
];
```

## 🚀 Деплой за 2 минуты

### Vercel (рекомендуется)

```bash
# Установить CLI
bun add -g vercel

# Деплой
vercel
```

Следуйте инструкциям в консоли. Готово! 🎉

### Netlify

```bash
# Установить CLI
bun add -g netlify-cli

# Сборка
bun run build

# Деплой
netlify deploy --prod
```

## 📚 Дополнительно

### Полная документация
- 📖 [README.md](./README.md) — обзор проекта
- 🎨 [CUSTOMIZATION.md](./CUSTOMIZATION.md) — детальная кастомизация
- 🚀 [DEPLOY.md](./DEPLOY.md) — все способы деплоя
- ✨ [FEATURES.md](./FEATURES.md) — описание функционала

### Проверка перед деплоем

```bash
# Typecheck
bun run typecheck

# Build
bun run build

# Lint
bun run lint

# Format
bun run format
```

## ❓ Проблемы?

### Не запускается dev-сервер

```bash
# Очистить кэш
rm -rf .next node_modules
bun install
bun run dev
```

### Ошибки TypeScript

```bash
# Проверить типы
bun run typecheck
```

### Проблемы со стилями

```bash
# Пересобрать Tailwind
rm -rf .next
bun run dev
```

## 🎯 Checklist перед публикацией

- [ ] Заменил Telegram-ссылки
- [ ] Изменил цену курса
- [ ] Обновил дату старта
- [ ] Настроил название курса
- [ ] Изменил программу занятий
- [ ] Настроил целевую аудиторию
- [ ] Обновил FAQ
- [ ] Проверил все ссылки
- [ ] Запустил typecheck
- [ ] Сделал production build
- [ ] Протестировал на мобильных
- [ ] Добавил аналитику (GA/Metrika)

## 🎉 Готово!

Ваш лендинг готов к запуску! Если остались вопросы — читайте полную документацию или пишите в [Telegram](https://t.me/time_t0_it).

---

**Совет**: Начните с изменения Telegram-ссылок, цены и даты — это самое важное! Остальное можно настроить позже. 🚀
