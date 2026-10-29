# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

ClassLms is a static marketing website (not the LMS itself) for a Learning Management System aimed at teachers and institutes, with a Sri Lankan focus. Stack: React 18 + TypeScript + Vite + react-router-dom v6. No backend, no test runner, no linter.

## Commands

- `npm run dev` — Vite dev server
- `npm run build` — `tsc --noEmit && vite build` (type-check is the only static check; output in `dist/`)
- `npm run preview` — serve the built `dist/`

## Architecture

- `src/main.tsx` wraps `App` in `BrowserRouter`; `src/App.tsx` declares routes under a single `Layout` (`/`, `/features`, `/how-it-works`, `/pricing`, `/faq`, `/contact`; unknown paths render `Home`).
- `src/pages/Pages.tsx` is the hub: it defines `Layout` (Navbar + `<Outlet/>` + `FinalCTA` + Footer), per-route `document.title` (the `titles` map — add new routes there), hash-scroll / scroll-to-top handling, and composes `Home` from section components. It also re-exports the other page components, which live in sibling files (`FeaturesPage`, `GuidePage`, `PricingPage`, `FaqPage`, `ContactPage`).
- `src/components/Sections.tsx` holds the home-page sections plus `FinalCTA` and `Footer`. `Mockups.tsx` / `MoreMockups.tsx` are hand-built UI mock visuals used by `DashboardTabs.tsx`.
- **Content is data-driven**: copy lives in `src/content.ts` (nav, features, pricing, FAQ, footer links, `contact` info incl. WhatsApp link helper) and in `src/pages/guide.ts` (How It Works articles, written in Sinhala) and `src/pages/featureGuide.ts`. Edit these rather than the JSX. Comments in those files say to keep claims limited to what the product is described as doing.
- Icons: `components/Icon.tsx` maps `IconName` keys to inline SVG paths; add new icons there (content files use the `IconName` type).
- `hooks.ts`: `useReveal` (adds `.in` class on scroll-into-view; CSS handles the fade-up) and `useScrolled`.
- Styling is one global file, `src/styles.css`, using CSS variables (orange/navy palette in `:root`) and BEM-like class names (`.btn--primary`). No CSS framework.
- Contact form (`ContactPage.tsx`) POSTs JSON directly from the browser to Web3Forms (`api.web3forms.com/submit`) using `contact.accessKey` from `content.ts`; a `botcheck` honeypot is only included when ticked.
- Static assets in `public/` (referenced from `index.html` as `/favicon.png`, `/logo-mark.png`). Fonts (Plus Jakarta Sans, Abhaya Libre for Sinhala) load from Google Fonts in `index.html`.

## Repo notes

- The git repo root is the user's home directory (`C:/Users/Asus`), and this folder is untracked there; `git log`/`git status` output is about unrelated projects, not this app.
- Pricing plans (Individual, Starter, Custom) are defined in `content.ts` (`pricingPlans`), and the contact-form interest options (`contactInterests`) and FAQ text (`pricingFaqs`) reference those plan names, so keep them in sync when renaming or adding a plan.
