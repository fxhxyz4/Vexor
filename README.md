# Vexor — vexor.team

Website for Vexor, a software development studio from Ukraine.

> **English** · [Українська](README-uk.md)

## Stack

| Layer      | Tech                    |
| ---------- | ----------------------- |
| Framework  | Next.js 16 (App Router) |
| Language   | TypeScript (strict)     |
| Styles     | Tailwind CSS v4         |
| Animations | Framer Motion 12        |
| Content    | MDX (next-mdx-remote)   |
| i18n       | JSON files (uk/en)      |

## Getting started

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev          # development server
npm run build        # production build
npm run lint         # ESLint
npm run type-check   # TypeScript check
npm run test         # Jest unit tests
npm run test:e2e     # Playwright E2E tests
npm run format       # Prettier
```

## Project structure

```
app/
├── components/      # Navbar, Hero, Services, Work, About, FAQ, Contact, Footer
├── i18n/            # uk.json, en.json — all copy and data
├── lib/             # context (theme + lang), mdx utils
├── data/            # site.ts — social links
└── work/            # /work page and [slug] case studies

content/work/
├── uk/              # MDX case studies in Ukrainian
└── en/              # MDX case studies in English

public/assets/projects/   # project preview images
```

## Content

All text lives in `app/i18n/uk.json` and `app/i18n/en.json` — services, team, FAQ, navigation, contact form copy.

Case studies are MDX files in `content/work/{uk,en}/`. Frontmatter fields: `title`, `type`, `description`, `stack`, `year`, `client`, `gradient`, `image`, `github`, `demo`, `dribbble`, `figma`.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[MIT](LICENSE.md)
