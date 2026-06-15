# CLAUDE.md

This file provides guidance to Claude when working with code in this repository.

## Repository Layout

The project root is `HeinThuraWynnn.github.io/` — all commands below must be run from that directory.

## Commands

```bash
npm run dev        # Dev server on localhost:3000
npm run build      # tsc -b + vite build + copies dist/index.html → dist/404.html
npm run lint       # ESLint
npm run preview    # Preview production build on localhost:4173
npm run deploy     # build then gh-pages -d dist
```

No test runner is configured.

## Tech Stack

| Layer | Package | Version |
|---|---|---|
| Framework | React | ^19.2.7 |
| Language | TypeScript | ~5.8.3 |
| Bundler | Vite | ^8.0.16 |
| Styling | Tailwind CSS | ^3.4.17 |
| Animation | Framer Motion | ^12.40.0 |
| Routing | React Router DOM | ^7.17.0 |
| Email | @emailjs/browser | ^4.4.1 |
| CAPTCHA | react-google-recaptcha-v3 | ^1.11.0 |
| Icons | Lucide React | ^1.18.0 |
| Minifier | Terser | ^5.44.0 |
| Deploy | gh-pages | ^6.3.0 |

**Dev toolchain:** ESLint 9, typescript-eslint 8, @vitejs/plugin-react 6, autoprefixer, PostCSS.

**Runtime target:** ES2022 (app) / ES2023 (node/vite config).

**Package manager:** pnpm (pnpm-lock.yaml present; CI uses `npm ci`).

## Architecture

**Entry:** `main.tsx` wraps `<App>` in `<ThemeProvider>` and conditionally in `<GoogleReCaptchaProvider>` (only when `VITE_RECAPTCHA_SITE_KEY` is set).

**Routing (`App.tsx`):** React Router `BrowserRouter` with these routes:
- `/` — `HomePage` (inline in App.tsx — composes Hero, About, Services, Contact)
- `/about-thomaz` — `AboutThomazPage`
- `/resume` — `Resume` (shares the AboutThomazPage layout)
- `/privacy` — `PrivacyPolicy`
- `/terms` — `TermsOfService`

`Navigation` and `Footer` render globally outside the route switch.

**src/ structure:**
```
src/
├── App.tsx / App.css
├── main.tsx
├── index.css          # CSS custom properties, .glass, .glass-button, .gradient-text, .gradient-bg
├── vite-env.d.ts
├── assets/
│   └── react.svg
├── components/
│   ├── About.tsx
│   ├── AboutThomazPage.tsx
│   ├── BrandIcons.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── PrivacyPolicy.tsx
│   ├── Resume.tsx
│   ├── SEO.tsx
│   ├── ScrollToTop.tsx
│   ├── Services.tsx
│   └── TermsOfService.tsx
└── context/
    └── ThemeContext.tsx
```

**Theme system:** `ThemeContext.tsx` exposes `useTheme()`. Theme persists to `localStorage`; applied as `.dark` on `<html>`. CSS custom properties in `index.css` define color tokens for both modes (light: ivory/black; dark: deep blue/black with neon cyan-magenta-yellow accents). Tailwind is configured with `darkMode: 'class'`.

**Contact form:** `Contact.tsx` uses EmailJS browser SDK (no backend). reCAPTCHA v3 is optional — form still works without the env var.

**SEO:** `SEO.tsx` manages meta tags. `index.html` includes JSON-LD structured data, Open Graph tags, security meta headers, favicons, and theme-color.

**Hero performance note:** The Hero section uses 12+ animated particles/morphs via Framer Motion — be mindful of performance impact when editing it.

## Vite Config Summary

```ts
base: '/'
build: { outDir: 'dist', assetsDir: 'assets', sourcemap: false, minify: 'terser' }
server: { port: 3000, host: true }
preview: { port: 4173, host: true }
```

## TypeScript Config (app)

Strict mode on. Notable flags: `noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly`, `isolatedModules`, `verbatimModuleSyntax`, `moduleResolution: bundler`.

## Environment Variables

```
VITE_RECAPTCHA_SITE_KEY=your_google_recaptcha_key
```

Create `.env.local` in the project root (not committed).

## Deployment

**GitHub Actions** (`.github/workflows/deploy.yml`): triggers on push to `main`, builds with Node 22, deploys via `peaceiris/actions-gh-pages@v4` to the `gh-pages` branch. The `dist/404.html` copy is the SPA fallback for GitHub Pages routing.

A `.vercel/project.json` is also present for optional Vercel deployments.
