# Changelog

### [v2.1.1]

**a11y & Focus States**

- ✨ Added non-destructive, accessible keyboard focus for `CaseLinkButton` (GitHub, Figma, Dribbble, Demo) and `BackLink` ("Go Home" / "Back") components; replaced resource-heavy React hover hooks and inline mouse event listeners with native CSS transitions and custom `:focus-visible` states, including an intuitive micro-interaction that slides the back arrow left on focus/hover.
- ✨ Added keyboard focus indicators for the Cookies page; the "Manage Cookies" button (`.cookies-manage-btn`) and contact email link now feature a distinct focus-ring wrapper for seamless keyboard-only navigation.
- ✨ Added a high-contrast touch feedback and focus rings for the mobile navigation CTA (`.nav-mobile-cta`) in the overlay; implemented a spring active tap state (`scale(0.97)`) and a visible `:focus-visible` focus ring.

**Fixes**

- 🐛 Fixed GitHub Actions CI pipeline crashes; resolved a blocking error where the `actions/setup-node` step would fail to locate the untracked `package-lock.json` file (due to `.gitignore` rules) by correcting the workflow runner configurations to skip automated npm caching or run clean fresh dependency tree installations.

### [v2.1.0]

**a11y & Focus States**

- 🐛 Fixed prohibited ARIA attributes on testimonial stars by adding `role="img"` and `aria-label` to the container `div`, making screen readers happy and securing a perfect score in Lighthouse.
- 🐛 Fixed Touch Target Size violation for pagination dots (`.testimonials-dot`) in the Testimonials slider; increased the physical button target to `40x40px` while centering the visual `7x7px` dots inside via pseudo-elements (`::before`), solving the Lighthouse mobile warning without altering the minimalist UI.
- ✨ Added a global, smart focus ring (`:focus-visible`) for all interactive elements (buttons, links, inputs); it uses `border-radius: inherit` to perfectly match element shapes (like rounded cards or circular avatars) and triggers _only_ during keyboard (`Tab`) navigation, preventing ugly "stuck" focus outlines after mouse clicks.
- 🐛 Fixed focus state for Work cards; removed focus outline from the outer `.work-card-link` and routed it to translate and highlight the inner `.work-card-container` on keyboard navigation to mirror the hover behavior.
- 🐛 Fixed "sticky" focus colors on `.caseLinkBtn` buttons; replaced generic `:focus` with `:focus-visible` to prevent buttons from staying active/colored after being clicked with a mouse.
- 🐛 Fixed FAQ Accordion focus usability; used `:focus-within` on the card container `.faq-item-card` to cleanly highlight the entire active card when its toggle button is focused, and dynamically made the inner `.faq-answer` border transparent during focus to avoid visual overlaps with the focus ring.

**Performance & Fixes**

- 🐛 Fixed Next.js Hydration Mismatch error in the `Work` component; implemented a `mounted` state check via `useEffect` to guarantee that client-side i18n translation strings (specifically `projects_list`) match the server-rendered HTML before rendering, eliminating the rare bug where project cards would occasionally load with missing titles and descriptions.
- 🐛 Fixed Vercel Web Analytics loading error (`404 ERR_ABORTED` on `/_vercel/insights/script.js`) during local development; restricted the `<Analytics />` component to render exclusively in production environments (`process.env.NODE_ENV === 'production'`), keeping the local browser console pristine.

**About section**

- ✨ Added avatars for team members.

**Testimonials section**

- ✨ Added a 5-star rating system (`StarRating` component) inside testimonial cards to boost social proof, styled to dynamically match light and dark themes without visual noise
- 🐛 Fixed layout misalignment where cards without case-study links had uneven heights; wrapped footers in a `.testimonial-card-bottom` container with absolute positioning for the link, locking all client avatars onto a single, perfect horizontal line
- 🐛 Fixed active rating star contrast issues in dark mode — unrated (empty) stars now use a subtle transparent gray instead of the high-contrast `--border-c` variable

**Pricing**

- ✨ New pricing structure for services — starting prices ("from X") with included scope per tier, tuned separately for the UAH (local UA market) and USD (international) audiences
- ✨ `data/pricing.ts` — single source of truth for pricing data (starting prices, currency, display mode) and contact-form budget brackets, decoupled from i18n copy
- ♻️ `services_list` in `i18n/uk.json` / `i18n/en.json` restructured — each service now carries an `id` (matches `pricing.ts`), plus `pricingIncludes` / `pricingNote` fields, so price-related copy lives with the rest of the translations instead of being duplicated inside the pricing config
- 🐛 Fixed Contact form budget dropdown — was referencing `budget_uah` / `budget_usd` keys that no longer exist in i18n, causing a runtime crash (`Cannot read properties of undefined`); now reads from `budgetBrackets` in `pricing.ts`
- 🐛 Contact form now sends a human-readable `budgetLabel` (e.g. "15 000–40 000 грн") alongside the raw budget code, and the currency toggle correctly reflects the active UI language instead of defaulting to Ukrainian
- 🐛 `/api/contact` — now uses `budgetLabel` when building the Telegram notification, instead of the raw budget code

**Fixes**

- 🐛 Added missing `viewport` meta export in `app/layout.tsx` — mobile browsers were rendering the page at a fixed virtual viewport width instead of the device's actual screen width (_Note: Next.js add him by default_)
- 🐛 Fixed `.work-grid` responsive card count — CSS chunk load order in production could override the mobile/tablet media queries, causing 4 cards to render on some phones instead of the intended 3; grid columns and last-card visibility rules are now forced with `!important` and correctly reset across all three breakpoints (desktop / tablet / mobile)

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
