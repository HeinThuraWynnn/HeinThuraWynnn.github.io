# Wynn Solutions Myanmar — Portfolio & Product Studio

The official portfolio and product engineering studio platform for **Hein Thura Wynn (@Thomaz)** — Product Owner, Lead Software Engineer, and Upwork Rising Talent Freelance PM/Developer.

🌐 **Production URL:** [https://wynnsolutionsmyanmar.com](https://wynnsolutionsmyanmar.com)
📦 **GitHub Pages:** [https://heinthura.me](https://heinthura.me) / `HeinThuraWynnn.github.io`

---

## 🚀 Overview

This modern single-page application (SPA) showcases 10+ years of software engineering expertise, product leadership, and enterprise delivery. Designed with modern aesthetics inspired by [Fluently](https://getfluently.app), it combines editorial typography, organic 3D card tilts, spring-physics micro-interactions, and high-performance dark/light mode switching.

### Key Highlights & Features
- **Flagship Product Showcases:**
  - **GuanOra:** AI-native audio platform (Winner of the **Innovation Award** at FutureFit Ventures Business Plan Competition 2026).
  - **Save the Date:** Bespoke digital invitation and RSVP event management platform.
- **Fluently-Inspired Interaction System:**
  - Ambient morphing radial gradient background blobs (`.gradient-blob`).
  - Smooth rolling-text flip button hovers (`.text-roll` / text swap).
  - Bento card organic tilts (`.bento-tilt-1`, `.bento-tilt-2`) with custom spring-bezier curves.
  - Looping directional micro-indicators and glowing hairline gradient borders.
- **Deep Credentials & Verification:**
  - **STEAM4INNOVATOR English Program** (National Innovation Agency - NIA, Thailand) with direct certificate verification link ([Verify](https://moocs.nia.or.th/cert/vxMGd6)).
  - **SFUx Entrepreneurship & New Venture Creation** (Strategy First International College).
  - **Innovation Award Winner 2026** (FutureFit Ventures Business Plan Competition).
  - Google Project Management Professional Certificate & PMI AI certifications.

---

## 🛠 Tech Stack

| Layer | Technology | Description |
|---|---|---|
| **Framework** | [React 19](https://react.dev/) | Component architecture & client-side rendering |
| **Language** | [TypeScript 5.8](https://www.typescriptlang.org/) | Strict type checking & zero `any` policy |
| **Bundler** | [Vite 8](https://vitejs.dev/) | Sub-second HMR & optimized production chunking |
| **Styling** | [Tailwind CSS 3.4](https://tailwindcss.com/) | Utility-first CSS with custom spring bezier curves |
| **Animation** | [Framer Motion 12](https://www.framer.com/motion/) | Layout animations, stagger reveals, and page entrances |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, consistent vector iconography |
| **Forms & Email** | [@emailjs/browser](https://www.emailjs.com/) | Client-side email dispatch without backend overhead |
| **Routing** | [React Router 7](https://reactrouter.com/) | Single Page Application client routing |
| **Hosting** | GitHub Pages & Vercel | Automated CI/CD pipeline via GitHub Actions |

---

## 📂 Project Structure

```
HeinThuraWynnn.github.io/
├── public/                 # Static assets (logos, proposal decks, favicon)
├── src/
│   ├── assets/             # Bundled SVG and graphic assets
│   ├── components/
│   │   ├── AboutExperience.tsx     # Career milestones & leadership overview
│   │   ├── AboutThomazPage.tsx     # Full CV, certified credentials & awards
│   │   ├── BrandIcons.tsx          # SVG icons for GitHub, LinkedIn, etc.
│   │   ├── Capabilities.tsx       # Core engineering services & capabilities
│   │   ├── Contact.tsx             # Inquiry form with EmailJS integration
│   │   ├── FinalCTA.tsx            # High-conversion consultation banner
│   │   ├── Footer.tsx              # Site footer with status indicator
│   │   ├── GuanOraShowcase.tsx     # Flagship product showcase: GuanOra
│   │   ├── Hero.tsx                # Dynamic headline, stats, and CTAs
│   │   ├── Navigation.tsx          # Responsive navbar with rolling-text hover
│   │   ├── OtherProjects.tsx       # Enterprise client portfolio grid
│   │   ├── PrivacyPolicy.tsx       # Legal privacy documentation
│   │   ├── Resume.tsx              # Printable / downloadable resume view
│   │   ├── SaveTheDateShowcase.tsx # Flagship product showcase: Save the Date
│   │   ├── SEO.tsx                 # Dynamic OpenGraph and meta tag manager
│   │   ├── ScrollToTop.tsx         # Auto-scroll on route change
│   │   └── TermsOfService.tsx      # Legal terms of service
│   ├── context/
│   │   └── ThemeContext.tsx        # Persistent Dark / Light theme provider
│   ├── App.tsx                     # Main layout and route registry
│   ├── index.css                   # Fluently animations, custom beziers, tokens
│   └── main.tsx                    # Application entry point
├── HANDOFF.md              # Complete developer & client handoff documentation
├── CLAUDE.md               # AI development guide and constraints
└── package.json            # Scripts and dependencies
```

---

## ⚡ Development & Commands

```bash
# Install the exact dependencies used by CI (Node 22.12+)
npm ci

# Start local development server (http://127.0.0.1:3000)
npm run dev

# Run TypeScript check & build for production
npm run build

# Preview production build locally (http://127.0.0.1:4173)
npm run preview

# Deploy manually to GitHub Pages
npm run deploy
```

Both servers bind to loopback by default. For intentional testing on a trusted
LAN, explicitly run `npm run dev -- --host 0.0.0.0` or
`npm run preview -- --host 0.0.0.0`. Stop the server after testing; preview is
for local build checks, not production hosting.

Use npm and `package-lock.json` for reproducible installs matching CI. The
historical `pnpm-lock.yaml` is out of sync with `package.json`; do not use it
for frozen installs until pnpm support is deliberately restored and verified.

All `VITE_*` values are public build inputs. EmailJS public keys, service/template
IDs and reCAPTCHA site keys belong in the browser; private API keys and CAPTCHA
secret keys do not. The current workflow supplies no contact-form environment
variables. See `SECURITY_REVIEW.md` for configuration and production follow-up.

---

## 🚢 Deployment Workflow

This project is automatically deployed to GitHub Pages on every push to `main` via `.github/workflows/deploy.yml`:
1. Checks out repository and sets up Node 22.
2. Runs `npm ci` and `npm run build`.
3. Copies `dist/index.html` to `dist/404.html` for single-page routing support.
4. Deploys `dist` directory to the `gh-pages` branch via `peaceiris/actions-gh-pages@v4`.

---

## 📄 License & Credits

Designed and maintained by **Hein Thura Wynn (@Thomaz)**.
All rights reserved © 2026 Wynn Solutions Myanmar.

## Contact form configuration

Copy `.env.example` to `.env.local` and set the four public values. Use a
reCAPTCHA **v2 checkbox** site key; the old `VITE_RECAPTCHA_SITE_KEY` (v3) is
not used. For GitHub Pages, set repository Actions variables with the same four
names: the workflow passes them into the build. A missing value leaves the form
unavailable with a direct email link instead of attempting a broken send.

In EmailJS, configure the notification template's recipient as the fixed studio
inbox, enable reCAPTCHA v2 verification, and store the matching CAPTCHA **secret**
in EmailJS only. Allowlist the production origin and register that hostname with
Google. Add localhost for the local delivery test if necessary. Never use test
CAPTCHA keys for production. If auto-replies are needed, link an Auto-Reply
template in the EmailJS dashboard; the browser sends only one request because
CAPTCHA tokens are single-use. The old browser auto-reply template env variable
is no longer used.

Before release, send one clearly labeled test inquiry to the studio inbox,
confirm actual receipt (an API success alone is insufficient), and record the
time/message identifier without publishing message contents or private keys.

## Private portfolio

The portfolio is no longer a public download. The UI offers an email request;
there is no client-side password or public portfolio URL. The original PDF is
preserved locally at `.private/portfolio.pdf` (ignored by Git). Do not commit it
or copy it back into `public/`. The build checks public assets and output for
known private filenames, env files and symlinks. For automated downloads, use a
separate authenticated file service with server-side authorization; GitHub Pages
cannot supply that backend. The encrypted KHL review page is a separate,
pre-existing artifact and was not changed by this portfolio fix.

The old PDF/password remain in historical Git commits and the current published
site until an approved release removes them. Treat them as previously exposed;
rotate the password wherever reused. Removing a current build asset cannot
revoke already downloaded copies or rewrite Git history.
