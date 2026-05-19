# Contributing to Vexor

## Getting started

```bash
git clone https://github.com/vexorteam/vexor-site.git
cd vexor-site
npm install
cp .env.example .env.local
npm run dev
```

## Commit convention

We use [Conventional Commits](https://www.conventionalcommits.org/). Husky enforces this on every commit.

```
feat: add contact form telegram integration
fix: navbar anchor links not working on mobile
chore: update dependencies
docs: update README
style: fix button hover state
refactor: extract FAQ data to site.ts
perf: lazy load work section images
test: add e2e tests for contact form
ci: add playwright to github actions
```

## Branch naming

```
feat/telegram-integration
fix/navbar-anchors
chore/update-deps
```

## Workflow

1. Create a branch from `main`
2. Make your changes
3. Run `npm run lint && npm run type-check && npm test`
4. Commit with conventional commit message
5. Open a Pull Request to `main`

## Available scripts

| Command                | Description          |
| ---------------------- | -------------------- |
| `npm run dev`          | Start dev server     |
| `npm run build`        | Production build     |
| `npm run lint`         | Run ESLint           |
| `npm run lint:fix`     | Fix ESLint errors    |
| `npm run lint:css`     | Run StyleLint        |
| `npm run format`       | Format with Prettier |
| `npm run format:check` | Check formatting     |
| `npm run type-check`   | TypeScript check     |
| `npm run test`         | Run Jest tests       |
| `npm run test:watch`   | Jest watch mode      |
| `npm run test:ci`      | Jest with coverage   |
| `npm run test:e2e`     | Playwright E2E tests |
| `npm run test:e2e:ui`  | Playwright UI mode   |
| `npm run analyze`      | Bundle size analysis |
| `docker compose up`    | Run in Docker        |

## Editing content

All site content is in `app/data/site.ts` — services, projects, team, FAQ, contact info. Edit there without touching components.

## Adding a portfolio project

Edit `projects` array in `app/data/site.ts`:

```ts
{
  type: 'Web App',
  name: 'Your Project',
  desc: 'Short description of the project.',
  stack: ['Next.js', 'TypeScript'],
  gradient: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
  link: 'https://github.com/vexorteam/your-project',
}
```
