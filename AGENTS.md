# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Commands

```bash
pnpm install      # Install dependencies
pnpm dev          # Start dev server (Vite)
pnpm build        # Production build
```

There are no test or lint scripts configured.

## Architecture

Single-page portfolio for Juan Ruiz (video editor). Three scrollable sections: `inicio`, `trabajos`, `contacto` — each anchored by `id` and navigated via smooth scroll with an 80px nav offset.

**Entry point:** `src/main.tsx` → `src/app/App.tsx`

**Section components** (`src/app/components/`):
- `Navigation.tsx` — fixed floating navbar; scroll-aware background, mobile menu
- `HeroPanel.tsx` — intro section with lazy-load Vimeo embed (`section#inicio`)
- `WorksPanel.tsx` — 2×2 grid of Vimeo videos + featured "best video" (`section#trabajos`)
- `ContactPanel.tsx` — email copy + social links (`section#contacto`)

**UI components** (`src/app/components/ui/`): shadcn/ui primitives built on Radix UI. Treat these as library code — add new ones via shadcn CLI, don't restructure manually.

## Key conventions

**Path alias:** `@` resolves to `./src` (configured in `vite.config.ts`).

**Figma assets:** Import images via the custom `figma:asset/<hash>.png` protocol (resolved by the `figmaAssetResolver` Vite plugin to `src/assets/`). Do not use relative paths for assets in `src/assets/`.

**Animation:** All motion uses `motion/react` (the Motion library), not `framer-motion`. Import as `import { motion, AnimatePresence } from 'motion/react'`.

**Styling:** Tailwind CSS v4 via `@tailwindcss/vite` plugin. Color palette is dark (`#0a0a0a` / `#111111` backgrounds) with red accents (`red-500`, `red-600`). Custom CSS lives in `src/styles/`.

**Icons:** `lucide-react` for UI icons; `react-icons/fa6` for social media brand icons.

**Scroll navigation:** Each section component duplicates the `scrollToSection` helper (80px offset for the fixed nav). If refactoring, centralize this.
