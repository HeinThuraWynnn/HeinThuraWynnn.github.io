# Developer Handoff & Project Documentation
**Project:** Wynn Solutions Myanmar / Hein Thura Wynn Portfolio  
**Repository:** `HeinThuraWynnn.github.io`  
**Date:** October 2026  
**Author / Lead Engineer:** Hein Thura Wynn (@Thomaz)  
**Status:** Production Ready (Build passing 100%)

---

## 📌 1. Executive Summary

This project is the production website for **Wynn Solutions Myanmar** and personal portfolio for **Hein Thura Wynn (@Thomaz)** — Product Owner (GuanOra & Save the Date), Lead Software Engineer, and Upwork Rising Talent Freelance Project Manager / Full-Stack Developer.

The codebase has undergone a comprehensive upgrade:
1. **Architectural Portfolio Restructuring:** Shifted from a generic agency site to an architectural digital product studio featuring flagship case studies (**GuanOra** and **Save the Date**), divided editorial service capabilities, and structured career timeline milestones.
2. **Credential & Honor Verification:** Integrated official, verified certifications from the **National Innovation Agency (NIA), Thailand** (with live credential URL verification), **Strategy First International College (SFUx)**, and the **FutureFit Ventures 2026 Innovation Award Winner**.
3. **Fluently-Inspired Animation Engine:** Implemented a high-fidelity animation and micro-interaction system modeled directly after [Fluently](https://getfluently.app/for-teams) (Next.js/Tailwind modern SaaS aesthetics).

---

## 🎯 2. Recent Updates Record

### A. Professional Training & Education
- **STEAM4INNOVATOR English Program**
  - **Issuer:** National Innovation Agency (NIA), Thailand, under the Ministry of Higher Education, Science, Research and Innovation.
  - **Live Verification Link:** [`https://moocs.nia.or.th/cert/vxMGd6`](https://moocs.nia.or.th/cert/vxMGd6)
  - **Interactive Feature:** Implemented rolling-text flip interaction on the `Verify Credential` link with verified emerald badge.
  - **Files Updated:**
    - [`src/components/AboutThomazPage.tsx`](file:///Users/thomaz/Work/2026/WSM/HeinThuraWynnn.github.io/src/components/AboutThomazPage.tsx)
    - [`src/components/Resume.tsx`](file:///Users/thomaz/Work/2026/WSM/HeinThuraWynnn.github.io/src/components/Resume.tsx)
- **Entrepreneurship and New Venture Creation**
  - **Issuer:** SFUx by Strategy First International College.
  - **Focus:** Business model innovation, market opportunity assessment, and venture creation.
  - **Files Updated:**
    - [`src/components/AboutThomazPage.tsx`](file:///Users/thomaz/Work/2026/WSM/HeinThuraWynnn.github.io/src/components/AboutThomazPage.tsx)
    - [`src/components/Resume.tsx`](file:///Users/thomaz/Work/2026/WSM/HeinThuraWynnn.github.io/src/components/Resume.tsx)

### B. Awards & Honors
- **VERIFIED COMPETITION HONOR: Innovation Award Winner**
  - **Competition:** FutureFit Ventures Business Plan Competition 2026
  - **Issuer:** Strategy First International College
  - **Project:** GuanOra — AI-Native Audio-First Platform
  - **Status:** Displayed prominently with gold highlight badge, subtle tilt physics, and verified honor tag.
  - **Files Updated:**
    - [`src/components/AboutThomazPage.tsx`](file:///Users/thomaz/Work/2026/WSM/HeinThuraWynnn.github.io/src/components/AboutThomazPage.tsx)
    - [`src/components/Resume.tsx`](file:///Users/thomaz/Work/2026/WSM/HeinThuraWynnn.github.io/src/components/Resume.tsx)
    - [`src/components/GuanOraShowcase.tsx`](file:///Users/thomaz/Work/2026/WSM/HeinThuraWynnn.github.io/src/components/GuanOraShowcase.tsx)

### C. Fluently Animation & Transition Engine (Inspired by getfluently.app)
Modelled on the design system of [Fluently for Teams](https://getfluently.app/for-teams):
- **Ambient Morphing Radial Gradient Blobs:**
  - Three floating radial light sources (`.gradient-blob-a`, `.gradient-blob-b`, `.gradient-blob-c`) with continuous organic drift.
  - Integrated into [`Hero.tsx`](file:///Users/thomaz/Work/2026/WSM/HeinThuraWynnn.github.io/src/components/Hero.tsx), [`GuanOraShowcase.tsx`](file:///Users/thomaz/Work/2026/WSM/HeinThuraWynnn.github.io/src/components/GuanOraShowcase.tsx), [`SaveTheDateShowcase.tsx`](file:///Users/thomaz/Work/2026/WSM/HeinThuraWynnn.github.io/src/components/SaveTheDateShowcase.tsx), and [`AboutThomazPage.tsx`](file:///Users/thomaz/Work/2026/WSM/HeinThuraWynnn.github.io/src/components/AboutThomazPage.tsx).
- **Rolling-Text Flip Hover Interaction (Text-Roll Swap):**
  - Buttons and navigation items feature twin label stacks (`h-[18px] overflow-hidden`) that roll seamlessly on mouse hover with spring easing `cubic-bezier(0.22, 1, 0.36, 1)`.
  - Applied to navigation items, hero CTA buttons, flagship showcase buttons, training verification links, and resume download buttons.
- **Bento Organic Tilts (`.bento-tilt-1`, `.bento-tilt-2`):**
  - Feature cards and mockups rest with organic angular offsets (`-0.75deg` / `0.75deg`) and straighten on hover with bouncy spring curve `cubic-bezier(0.34, 1.4, 0.64, 1)`.
- **Looping Arrow Motion (`.animate-arrow-loop`):**
  - Directional indicators oscillate smoothly to invite user exploration.
- **Hairline Subtle Gradient Borders (`.gradient-hairline`):**
  - Dynamic 1px glowing perimeter boundaries for glass cards in both dark and light modes.

---

## 🏗 3. Architectural Component Breakdown

| Component | Path | Responsibility |
|---|---|---|
| **App** | [`src/App.tsx`](file:///Users/thomaz/Work/2026/WSM/HeinThuraWynnn.github.io/src/App.tsx) | Application root, route switches (`/`, `/about-thomaz`, `/resume`, `/privacy`, `/terms`), global providers |
| **Navigation** | [`src/components/Navigation.tsx`](file:///Users/thomaz/Work/2026/WSM/HeinThuraWynnn.github.io/src/components/Navigation.tsx) | Fixed header, rolling-text flip menu items, active section indicators, theme switcher |
| **Hero** | [`src/components/Hero.tsx`](file:///Users/thomaz/Work/2026/WSM/HeinThuraWynnn.github.io/src/components/Hero.tsx) | Hero headline, live availability pill, metric badges, Fluently text-roll CTAs, ambient gradient blobs |
| **GuanOraShowcase** | [`src/components/GuanOraShowcase.tsx`](file:///Users/thomaz/Work/2026/WSM/HeinThuraWynnn.github.io/src/components/GuanOraShowcase.tsx) | Flagship case study for GuanOra (FutureFit 2026 Award), interactive phone mockup with spring tilt |
| **Capabilities** | [`src/components/Capabilities.tsx`](file:///Users/thomaz/Work/2026/WSM/HeinThuraWynnn.github.io/src/components/Capabilities.tsx) | Editorial split-column capability matrix with hover micro-reveals and technology badge scales |
| **SaveTheDateShowcase** | [`src/components/SaveTheDateShowcase.tsx`](file:///Users/thomaz/Work/2026/WSM/HeinThuraWynnn.github.io/src/components/SaveTheDateShowcase.tsx) | Flagship case study for Save the Date studio, phone mockup with spring physics |
| **OtherProjects** | [`src/components/OtherProjects.tsx`](file:///Users/thomaz/Work/2026/WSM/HeinThuraWynnn.github.io/src/components/OtherProjects.tsx) | Filterable client and enterprise project gallery (TawWin, Alex International, POS, etc.) |
| **AboutExperience** | [`src/components/AboutExperience.tsx`](file:///Users/thomaz/Work/2026/WSM/HeinThuraWynnn.github.io/src/components/AboutExperience.tsx) | High-level career timeline, leadership philosophy, and dossier CTA |
| **FinalCTA** | [`src/components/FinalCTA.tsx`](file:///Users/thomaz/Work/2026/WSM/HeinThuraWynnn.github.io/src/components/FinalCTA.tsx) | Strategic closing CTA for project inquiries and advisory bookings |
| **Contact** | [`src/components/Contact.tsx`](file:///Users/thomaz/Work/2026/WSM/HeinThuraWynnn.github.io/src/components/Contact.tsx) | Direct email dispatch via EmailJS, client validation, optional reCAPTCHA v3 |
| **AboutThomazPage** | [`src/components/AboutThomazPage.tsx`](file:///Users/thomaz/Work/2026/WSM/HeinThuraWynnn.github.io/src/components/AboutThomazPage.tsx) | Full CV page: verified NIA STEAM4INNOVATOR link, SFUx certificate, FutureFit 2026 award, technical skills, recommendations |
| **Resume** | [`src/components/Resume.tsx`](file:///Users/thomaz/Work/2026/WSM/HeinThuraWynnn.github.io/src/components/Resume.tsx) | Dedicated resume view with verified credentials and PDF download |
| **Footer** | [`src/components/Footer.tsx`](file:///Users/thomaz/Work/2026/WSM/HeinThuraWynnn.github.io/src/components/Footer.tsx) | System status ("All systems operational"), copyright, legal links |

---

## 🎨 4. Design System & CSS Token Specifications

All design tokens are defined in [`src/index.css`](file:///Users/thomaz/Work/2026/WSM/HeinThuraWynnn.github.io/src/index.css):

### Spring Bezier Curves
```css
:root {
  --spring-d400-b20: cubic-bezier(0.34, 1.4, 0.64, 1); /* Bouncy micro-hover, badges, scale */
  --spring-d600-b0: cubic-bezier(0.22, 1, 0.36, 1);   /* Smooth text-roll swap, translations */
}
```

### Keyframe Animations
- `@keyframes gradient-blob-a`: 18s continuous organic position drift
- `@keyframes gradient-blob-b`: 22s continuous organic position drift
- `@keyframes gradient-blob-c`: 20s continuous organic position drift
- `@keyframes arrow-loop`: 1.8s looping horizontal micro-bounce
- `@keyframes page-in`: 0.5s fade-and-rise entrance

### Utility Classes
- `.gradient-blob`: Radial gradient glow generator with blur and absolute positioning.
- `.text-roll`: Container for rolling-text flip buttons (`overflow: hidden; height: 18px`).
- `.text-roll-inner`: Target element executing `group-hover:-translate-y-full`.
- `.bento-tilt-1` & `.bento-tilt-2`: Subtle resting angle tilting (`rotate(-0.75deg)` and `rotate(0.75deg)`), straightening on hover.
- `.gradient-hairline`: Sub-pixel glowing border for modern glass cards.

---

## 🛠 5. Commands & Build Verification

```bash
# Start Vite development server
npm run dev

# Run TypeScript type check and production bundle build
npm run build

# Preview production build locally
npm run preview

# Deploy build to gh-pages branch
npm run deploy
```

### Build Result:
```
✓ built in 1.66s
dist/index.html                   4.74 kB │ gzip:   1.38 kB
dist/assets/index-DAsgeCuO.css   87.80 kB │ gzip:  13.55 kB
dist/assets/index-BH7ACamV.js   523.59 kB │ gzip: 153.37 kB
```
- **TypeScript:** Clean compilation (`tsc -b` exits with code `0`).
- **ESLint:** Passing.
- **Routing Fallback:** `dist/index.html` is copied to `dist/404.html` to guarantee GitHub Pages routing for `/about-thomaz` and `/resume`.

---

## 🚀 6. CI/CD & Deployment Instructions

### GitHub Pages (Automated)
The repository uses GitHub Actions (`.github/workflows/deploy.yml`):
- Pushing commits to the `main` branch triggers automatic build and deployment.
- Deployed branch: `gh-pages`
- Custom Domain: `wynnsolutionsmyanmar.com` / `heinthura.me`

### Vercel (Alternative / Preview)
- A `.vercel/project.json` is configured.
- Simply import the GitHub repository on Vercel and it will automatically detect Vite.

---

## ✅ 7. Handoff Checklist for Client / Reviewers

- [x] All STEAM4INNOVATOR credentials active with live verification link to `https://moocs.nia.or.th/cert/vxMGd6`.
- [x] SFUx Entrepreneurship and New Venture Creation certificate added.
- [x] Innovation Award Winner (FutureFit Ventures Business Plan Competition 2026) added to Awards & Honors.
- [x] Fluently-inspired animations, spring curves, and rolling text flips fully functional.
- [x] Responsive layout tested for Mobile, Tablet, and Desktop viewports.
- [x] Dark Mode & Light Mode contrast verified.
- [x] `npm run build` succeeds with zero errors.
- [x] `README.md`, `CLAUDE.md`, and `HANDOFF.md` updated and in sync.
