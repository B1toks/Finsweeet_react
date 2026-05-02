# Finsweeet React

A pixel-perfect React adaptation of a Finsweet/Webflow-style pricing page — built with Vite, hand-written CSS, and zero icon libraries (every icon is an inline SVG).

🌐 **Live demo:** **[finsweeet-react.vercel.app](https://finsweeet-react.vercel.app)**

> Built as a "convert this design to React" exercise. The original static HTML/CSS lives alongside the React app in `pricing.html` (44 KB) — useful side-by-side reference for spotting drift between the design and the implementation.

## What it does

A single-page marketing layout with three sections:

1. **Header** — logo + nav (full SVG logo inlined, no asset request)
2. **Our Pricing Plans** — three side-by-side tiers (Landing Page · Website · Webflow Development), each with price, description, and a feature list
3. **FAQ** — collapsible question list

Everything is laid out flow-based; no router, no state beyond the default `useState` scaffold from the Vite template.

## Tech

- **Vite 5** + React 18
- Hand-written CSS — no Tailwind, no UI kit
- **Inline SVG icons** — every icon (logo, check-mark, close, arrows) is an SVG element directly in JSX. No icon library, no asset request.
- ESLint with `eslint-plugin-react`, `react-hooks`, and `react-refresh`

## Run locally

```bash
git clone https://github.com/B1toks/Finsweeet_react.git
cd Finsweeet_react
npm install
npm run dev
```

Then open <http://localhost:5173>.

Build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── App.jsx                          ← composes Header / PricingPlans / FAQ
├── App.css
├── index.css
├── main.jsx                         ← entry point
├── assets/
│   └── react.svg
└── components/
    ├── header.jsx                   ← logo + nav
    ├── OurPricingPlans.jsx          ← three pricing tiers
    └── faq.jsx                      ← question list

pricing.html                         ← original static HTML/CSS reference
index.html                           ← Vite entry HTML
public/                              ← static assets
```

## What I focused on

- **Translating a static design into reusable JSX components** — finding the right granularity (one component per top-level section was enough; finer splitting would have been over-engineering for a single-page marketing layout)
- **Inlining SVGs by hand** — pasting the SVG markup directly into JSX (with `viewBox`, `fill`, `<linearGradient>`) so there's no extra HTTP request and the logo/icons can be styled with CSS like any other element
- **Working with class-name-heavy hand-written CSS** — readable BEM-ish names (`OurPricingPlans_title_box_content`, `faq_question_item`) rather than utility classes
- **Iterating in commits** — commit history shows real working steps: `1.0 just png` → `1.01 trying hover` → `1.04 className confirm` → `1.11 final v of hovering` → `1.2 imports are ready`. Honest about what was figured out when.

Built by **Oleksandr Honchar** — [www.honchar.dev](https://www.honchar.dev) · [GitHub](https://github.com/B1toks)
