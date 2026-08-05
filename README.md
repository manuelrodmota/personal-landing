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
`.github/workflows/deploy.yml`. It builds with `next build` (static export)
and publishes the `out/` directory.

One-time setup:

1. Repo → Settings → Pages → Source → **GitHub Actions**.
2. DNS (at the registrar): four `A` records on the apex host (`@`) pointing to
   GitHub Pages' IPs (`185.199.108.153`, `.109.153`, `.110.153`, `.111.153`),
   plus a `CNAME` record for `www` → `manuelrodmota.github.io`.
3. Repo → Settings → Pages → Custom domain → `manuelrodmota.com`, then wait
   for the DNS check to pass and enable **Enforce HTTPS**.

`public/CNAME` (committed, contains `manuelrodmota.com`) keeps the custom
domain set on every deploy — GitHub Pages otherwise resets it if the file is
missing from the published output.

Live at: https://manuelrodmota.com
