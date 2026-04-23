# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at localhost:3000
npm run build     # Production build (static export to /out)
npm run lint      # ESLint
npm run deploy    # Build + deploy to GitHub Pages
```

## Architecture

Next.js 14 App Router with static export (`output: 'export'`), deployed to GitHub Pages at `/inspiracoes`. All pages must be compatible with static rendering.

**Path alias**: `@/*` → `src/*`

### Key files

- [`src/app/page.tsx`](src/app/page.tsx) — Main gallery page (client component). Contains the full dress dataset inline as a typed array, renders both mobile Instagram-style feed and desktop grid.
- [`src/app/layout.tsx`](src/app/layout.tsx) — Root layout with Google Fonts (Inter, Playfair Display, Cormorant SC).
- [`src/components/ui/button.tsx`](src/components/ui/button.tsx) — shadcn/ui Button with custom `xs` size variant added.
- [`src/lib/utils.ts`](src/lib/utils.ts) — `cn()` helper (clsx + tailwind-merge).

### Styling

Custom Tailwind palette in [`tailwind.config.ts`](tailwind.config.ts):
- `wedding-red` (#D6002A), `wedding-gold` (#C59B62), `wedding-olive` (#7D8C61), `wedding-beige` (#F9F6F0)
- Font classes: `font-sans` (Inter), `font-serif` (Playfair Display), `font-script` (Cormorant SC)

### Images

Static images live in `public/` (root). Because `unoptimized: true` is set, Next.js `<Image>` does **not** automatically prepend `basePath`. Always pass the full path including basePath: `src="/inspiracoes/filename.jpg"`. The files are served at `/inspiracoes/[filename]` in both dev and production.

### Animations

Framer Motion is used for scroll-triggered fade-in on gallery cards. The pattern used is `useInView` + `motion.div` with `initial/animate/transition` props.
