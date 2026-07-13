# BitExtract AI — Landing Page

React landing page for **BitExtract AI by ThinkBit** — an enterprise Intelligent Document
Processing (IDP) PaaS. Content, palette, typography, and hero imagery were decoded from the
original Figma file `BitExtract-AI 2.fig`.

## Stack
- Vite + React 19 + TypeScript
- Tailwind CSS v3
- Zero runtime UI deps (inline SVG icons)

## Getting started
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the build
```

## Structure
```
src/
  data.ts                # all copy decoded from the .fig
  App.tsx                # page composition
  index.css              # Tailwind + theme tokens
  components/
    Navbar, Hero, CoreFeatures, Performance,
    SecureData, Differentiation, SpecsTable, CTA, Footer, icons
public/assets/
  hero-ai.webp, hero-docs.webp   # extracted from the .fig (optimized to WebP)
```

## Design tokens
| Token | Value |
|-------|-------|
| Background | `#12131a` (ink) |
| Purple / Blue / Cyan / Magenta | `#3d2ea9` `#0f42c6` `#44bcd3` `#b01868` |
| Fonts | Inter (body), Sora (display), Roboto Mono (labels) |

Sections: Hero → Core Features → High-Performance Processing → Secure Data Management →
Differentiation → Technical Specs table → CTA → Footer.
