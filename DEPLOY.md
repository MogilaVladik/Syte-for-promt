# 🚀 Деплой лендинга

## Варианты деплоя

### 1. Vercel (рекомендуется)

```bash
# Установка Vercel CLI
bun add -g vercel

# Деплой
vercel
```

**Преимущества:**
- Автоматический CI/CD
- Оптимизация Next.js из коробки
- Бесплатный SSL
- CDN по всему миру

### 2. Netlify

```bash
# Установка Netlify CLI
bun add -g netlify-cli

# Сборка
bun run build

# Деплой
netlify deploy --prod
```

### 3. Docker

```dockerfile
FROM oven/bun:1 as builder
WORKDIR /app
COPY package.json bun.lockb ./
RUN bun install
COPY . .
RUN bun run build

FROM oven/bun:1-slim
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["bun", "run", "start"]
```

```bash
# Сборка
docker build -t prompting-landing .

# Запуск
docker run -p 3000:3000 prompting-landing
```

### 4. GitHub Pages (статичный экспорт)

1. Добавьте в `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};
```

2. Создайте `.github/workflows/deploy.yml`:

```yaml
image: oven/bun:1

pages:
  stage: deploy
  script:
    - bun install
    - bun run build
    - mv out public
  artifacts:
    paths:
      - public
  only:
    - main
```

## Переменные окружения

Создайте файл `.env.local`:

```env
NEXT_PUBLIC_TELEGRAM_URL=https://t.me/time_t0_it
NEXT_PUBLIC_COURSE_PRICE=35000
NEXT_PUBLIC_START_DATE=2025-12-15
```

## Оптимизация перед деплоем

```bash
# Проверка сборки
bun run build

# Проверка типов
bun run typecheck

# Форматирование кода
bun run format

# Линтинг
bun run lint
```

## Мониторинг

После деплоя рекомендуется настроить:

- **Google Analytics** — отслеживание посетителей
- **Yandex.Metrika** — аналитика для RU-аудитории
- **Sentry** — отслеживание ошибок
- **Vercel Analytics** — производительность

## Домен и SSL

1. Купите домен (например, на reg.ru или Cloudflare)
2. Настройте DNS-записи:
   - A-запись: указать на IP сервера
   - CNAME-запись: www → основной домен
3. SSL настроится автоматически (Let's Encrypt)

## Производительность

Рекомендации для production:

- ✅ Минификация CSS/JS (автоматически)
- ✅ Оптимизация изображений
- ✅ Кеширование статики
- ✅ Compression (gzip/brotli)
- ✅ Lazy loading компонентов

## Поддержка

При возникновении вопросов:
- 📧 Email: support@example.com
- 💬 Telegram: [@time_t0_it](https://t.me/time_t0_it)
