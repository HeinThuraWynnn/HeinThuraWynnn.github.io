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

`npm run test:security` runs Node's built-in test runner for private asset publication checks.

## Tech Stack

| Layer | Package | Version |
|---|---|---|
| Framework | React | ^19.2.7 |
| Language | TypeScript | ~5.8.3 |
| Bundler | Vite | ~8.1.7 |
| Styling | Tailwind CSS | ^3.4.17 |
| Animation | Framer Motion | ^12.40.0 |
| Routing | React Router DOM | ^7.18.5 |
| Email | @emailjs/browser | ^4.4.1 |
| CAPTCHA | react-google-recaptcha | ^3.1.0 (v2 checkbox) |
| Icons | Lucide React | ^1.18.0 |
| Minifier | Terser | ^5.44.0 |
| Deploy | gh-pages | ^6.3.0 |

**Dev toolchain:** ESLint 9, typescript-eslint 8, @vitejs/plugin-react 6, autoprefixer, PostCSS.

**Runtime target:** ES2022 (app) / ES2023 (node/vite config).

**Package manager:** npm (`npm ci` in CI). The historical pnpm lockfile is stale; do not use it for frozen installs until support is restored and verified.

## Architecture

**Entry:** `main.tsx` wraps `<App>` in `<ThemeProvider>`. Contact.tsx renders a reCAPTCHA v2 checkbox only when all four public contact configuration values exist.

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
├── index.css          # Fluently animation keyframes, spring curves, .gradient-blob, .text-roll, .bento-tilt-1/2
├── vite-env.d.ts
├── assets/
│   └── react.svg
├── components/
│   ├── About.tsx
│   ├── AboutExperience.tsx     # Executive career timeline and dossier link
│   ├── AboutThomazPage.tsx     # Full CV, verified certificates (STEAM4INNOVATOR, SFUx, Awards)
│   ├── BrandIcons.tsx
│   ├── Capabilities.tsx       # Core engineering capabilities (divided editorial row layout)
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── FinalCTA.tsx            # Project consultation closing CTA
│   ├── Footer.tsx
│   ├── GuanOraShowcase.tsx     # Flagship AI audio product showcase with interactive mockup
│   ├── Hero.tsx                # Hero section with rolling text CTA & ambient blobs
│   ├── Navigation.tsx          # Fixed nav with rolling-text flips and theme switch
│   ├── OtherProjects.tsx       # Client & enterprise showcase grid
│   ├── PrivacyPolicy.tsx
│   ├── Resume.tsx              # Clean printable resume with verified certificates
│   ├── SaveTheDateShowcase.tsx # Flagship digital invitation studio showcase
│   ├── SEO.tsx
│   ├── ScrollToTop.tsx
│   ├── Services.tsx
│   └── TermsOfService.tsx
└── context/
    └── ThemeContext.tsx
```

**Theme system:** `ThemeContext.tsx` exposes `useTheme()`. Theme persists to `localStorage`; applied as `.dark` on `<html>`. CSS custom properties in `index.css` define color tokens for both modes (light: ivory/black; dark: deep blue/black with neon cyan-magenta-yellow accents). Tailwind is configured with `darkMode: 'class'`.

**Fluently Design System & Animation Engine:**
- **Spring Curves:** Custom cubic-bezier timing curves in `index.css`:
  - `--spring-d400-b20`: `cubic-bezier(0.34, 1.4, 0.64, 1)` (bouncy micro-jumps, icons, badge scale)
  - `--spring-d600-b0`: `cubic-bezier(0.22, 1, 0.36, 1)` (smooth rolling text flip & translations)
- **Rolling Text Flip:** Button & nav hover effect (`h-[18px] overflow-hidden` with `group-hover:-translate-y-[18px]`).
- **Gradient Blobs:** Three-point moving morphing radial background glows (`.gradient-blob-a`, `.gradient-blob-b`, `.gradient-blob-c`).
- **Bento Organic Tilts:** Subtle resting angles (`.bento-tilt-1`, `.bento-tilt-2`) that straighten on hover.
- **Hairline Glows:** 1px subtle glowing border effects (`.gradient-hairline`).

**Contact form:** `Contact.tsx` uses EmailJS browser SDK (no backend) and requires a v2 checkbox token. Missing configuration disables send and provides a direct email link. Configure CAPTCHA verification and linked auto-replies in EmailJS.

**SEO:** `SEO.tsx` manages meta tags. `index.html` includes JSON-LD structured data, Open Graph tags, security meta headers, favicons, and theme-color.

## Vite Config Summary

```ts
base: '/'
build: { outDir: 'dist', assetsDir: 'assets', sourcemap: false, minify: 'terser' }
server: { port: 3000, host: '127.0.0.1' }
preview: { port: 4173, host: '127.0.0.1' }
```

## TypeScript Config (app)

Strict mode on. Notable flags: `noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly`, `isolatedModules`, `verbatimModuleSyntax`, `moduleResolution: bundler`.

## Environment Variables

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_notification_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_RECAPTCHA_V2_SITE_KEY=your_v2_checkbox_site_key
```

Create `.env.local` in the project root (not committed).

## Deployment

**GitHub Actions** (`.github/workflows/deploy.yml`): triggers on push to `main`, builds with Node 22, deploys via `peaceiris/actions-gh-pages@v4` to the `gh-pages` branch. The `dist/404.html` copy is the SPA fallback for GitHub Pages routing.

A `.vercel/project.json` is also present for optional Vercel deployments.

**Private portfolio:** `.private/portfolio.pdf` stays ignored and outside public assets. No client-side password gate. Use email requests until an authenticated server-side file service is available. `prebuild`/`postbuild` check public assets; never bypass those checks to publish private content.
