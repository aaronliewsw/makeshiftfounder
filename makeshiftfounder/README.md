# Makeshift Founder — Starter

Single-scroll Next.js site with Tailwind, default dark mode, tools teaser, Buttondown newsletter proxy, and PostHog analytics.

## Quickstart
```bash
pnpm i # or npm i / yarn
cp .env.example .env.local
pnpm dev
```
Open http://localhost:3000.

## Env Vars
- `BUTTONDOWN_API_KEY=` (server only)
- `NEXT_PUBLIC_POSTHOG_KEY=phc_...`
- `NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com`

## Deploy
- Push to GitHub → Import on Vercel → Add env vars → Assign domains.
