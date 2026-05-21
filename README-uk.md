# Vexor — vexor.team

Сайт студії Vexor — розробка сайтів, застосунків та дизайну продуктів.

> [English](README.md) · **Українська**

## Стек

| Шар       | Технологія              |
| --------- | ----------------------- |
| Фреймворк | Next.js 16 (App Router) |
| Мова      | TypeScript (strict)     |
| Стилі     | Tailwind CSS v4         |
| Анімації  | Framer Motion 12        |
| Контент   | MDX (next-mdx-remote)   |
| i18n      | JSON файли (uk/en)      |

## Запуск

```bash
cp .env.example .env.local
npm install
npm run dev
```

Відкрий [http://localhost:3000](http://localhost:3000).

## Скрипти

```bash
npm run dev          # сервер розробки
npm run build        # продакшн білд
npm run lint         # ESLint
npm run type-check   # TypeScript перевірка
npm run test         # Jest юніт-тести
npm run test:e2e     # Playwright E2E тести
npm run format       # Prettier
```

## Структура проєкту

```
app/
├── components/      # Navbar, Hero, Services, Work, About, FAQ, Contact, Footer
├── i18n/            # uk.json, en.json — весь текст і дані
├── lib/             # context (тема + мова), mdx утиліти
├── data/            # site.ts — соціальні посилання
└── work/            # сторінка /work і [slug] кейси

content/work/
├── uk/              # MDX кейси українською
└── en/              # MDX кейси англійською

public/assets/projects/   # превью зображення проєктів
```

## Контент

Весь текст — в `app/i18n/uk.json` і `en.json`: послуги, команда, FAQ, навігація, форма.

Кейси — MDX файли в `content/work/{uk,en}/`. Поля frontmatter: `title`, `type`, `description`, `stack`, `year`, `client`, `gradient`, `image`, `github`, `demo`, `dribbble`, `figma`.

## Ліцензія

[MIT](LICENSE.md)
