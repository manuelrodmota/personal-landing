# Manuel Rodriguez — Portfolio

Bilingual (EN/ES) personal portfolio, built with Next.js (App Router) and the
**Nocturne** design system. Recreated from a high-fidelity HTML design handoff
into typed, componentized React.

## Stack

- Next.js 16 (App Router, static export)
- TypeScript
- CSS Modules — design tokens ported as CSS custom properties in `src/app/globals.css`
- No UI framework/library — all components are hand-built to match the Nocturne spec pixel-for-pixel

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

- `src/content/` — typed EN/ES copy (`en.ts`, `es.ts`) and shared types
- `src/context/` — language state, persisted to `localStorage`
- `src/components/` — one folder per section/primitive, each with its own CSS module
- `src/app/globals.css` — Nocturne design tokens, base styles, shared keyframes

## Adding real images

The headshot and two project screenshots are currently placeholders
(`ImageSlot` renders a labeled box when no `src` is passed). Drop the real
files into `public/images/` and pass a `src` prop to the `ImageSlot` usages in
`src/components/About/About.tsx` and `src/components/FeaturedWork/Project.tsx`.

## Deployment

Deploys to GitHub Pages automatically on push to `main` via
`.github/workflows/deploy.yml`. It builds with `next build` (static export,
`GITHUB_PAGES=true` sets the `/personal-landing` base path) and publishes the
`out/` directory.

Enable Pages once, in the repo's Settings → Pages → Source → **GitHub Actions**.

Live at: https://manuelrodmota.github.io/personal-landing/
