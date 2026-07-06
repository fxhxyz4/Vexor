# Changelog

### [v2.0.0]

**Cookies & Privacy**

- ✨ Cookie consent banner (accept all / necessary only / customize) with Necessary/Functional/Analytics categories
- ✨ Google Analytics now loads only after analytics consent is given
- ✨ New `/cookies` page — full list of cookies used and their purpose
- ✨ "Cookie Settings" button in the footer to reopen the banner anytime
- ♻️ Theme and language moved from `localStorage` to cookies — rendered server-side, no visual flash on load
- 🐛 Updated `/privacy` page — removed outdated localStorage/no-tracking claims

**Animations**

- 💄 Hero CTA — replaced with a CSS animation (gradient sheen sweep) instead of inline transitions
- 💄 Navbar CTA and logo — hover animations (arrow shift, logo rotation) now pure CSS instead of framer-motion
- 💄 Contact and CaseClient buttons (Demo/GitHub/Dribbble/Figma) — unified hover style with lift and brand-colored glow

**UI/UX**

- 🐛 Fixed navbar layout (logo left, menu right instead of centered)
- 💄 Language switcher — flag icons replaced with text codes (UA/EN)
- 🐛 Project cards (home and `/work`) — fixed height, long descriptions truncated with ellipsis
- 🐛 Responsive project grid: 3 columns → 2 (tablet) → 3 (mobile)
- 🐛 Fixed missing bullet points in MDX lists (caused by `display: flex` on `<ul>`)

**Performance**

- 🐛 Images migrated to `next/image` — AVIF/WebP now served correctly
- 🐛 Added `priority` for the first card's LCP image

**Refactor**

- ♻️ Full modular restructure: `components/ui/`, `components/icons/`, `components/sections/`, `lib/hooks/`
- ♻️ Shared keyframes and legal-page styles extracted into `styles/animations.css`, `styles/legal.css`
- ♻️ Duplicated SVG icons, buttons, and BackLink unified into reusable components
- 🐛 Fixed dead CSS variables (`--blue-mid`, `--tg-brand-color`, wrong `--dribbble-color` on the Figma button)

**e2e**

- ♻️ Dismiss cookie banner to prevent click interception

### [v1.0.0]

- ✨ release.
