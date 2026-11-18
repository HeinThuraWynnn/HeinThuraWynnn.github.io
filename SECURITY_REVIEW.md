# Focused security review — 2026-11-18 (Asia/Bangkok)

Scope: local repository and ordinary public HTTP GET requests only. No exploit probes, messages, pushes, deployments, DNS or provider changes.

## Account configuration follow-up — November 18, 2026

- The owner supplied the EmailJS service ID, template ID and public key in ignored `.env.local`; values were checked without exposing them in the report.
- Safari access is now available. In the Wynn Solutions Google account, the portfolio domain had only a v3 registration. With the owner's action-time approval, registered **Wynn Solutions Myanmar v2**, checkbox type, in existing Google Cloud project `wsm-main-site`, for `wynnsolutionsmyanmar.com` (including subdomains), `localhost` and `127.0.0.1`.
- Inserted only the new public v2 site key into the previously empty `.env.local` field. The CAPTCHA secret is kept out of source, env/build and this report.
- Rebuilt with the actual four public values on Node 22.23.5: production build, lint and all three security regression tests passed. CNAME retained and private portfolio excluded.
- EmailJS dashboard currently requires owner sign-in; adding its server-side CAPTCHA verification and actual inbox delivery are still pending. The earlier missing-configuration blocker below is historical; provider setup/receipt verification remain open. No deployment or GitHub variable update was performed.

## Follow-up implementation — November 18, 2026

This section supersedes baseline observations below where noted. All changes remain local.

### Private portfolio

- The active UI explicitly called this a confidential client portfolio, so it was treated as private without publishing or quoting its contents.
- Preserved the exact original PDF at ignored `.private/portfolio.pdf` and removed `public/portfolio.pdf`. Both active and legacy About components now offer an email portfolio request; both browser password comparisons and modals were removed. No password remains in the current source/built client code.
- `prebuild` and `postbuild` now reject the known portfolio filename (including case variants/nested copies), env/private paths, and public symlinks. This is a guard against known accidental publication, not a comprehensive content classifier; deliberately renamed/copied confidential material still requires review. Three Node regression tests cover allowed public assets, nested private filenames and an external symlink.
- No authenticated file service was identified. The user explicitly accepted email requests as the interim flow. No private download endpoint is advertised; server-side authentication/authorization remains required before restoring automated downloads. GitHub Pages alone cannot implement it.
- The original published PDF/password and historical Git copies remain exposed until an approved release/history remediation. No deployment, history rewrite or password rotation on external accounts was performed. Owner must rotate the old password wherever reused; do not paste replacement account passwords here.

### EmailJS and CAPTCHA v2

- Replaced optional v3 execution/provider with the existing `react-google-recaptcha` v2 checkbox package; removed the unused v3 dependency. The separate `VITE_RECAPTCHA_V2_SITE_KEY` name avoids silently interpreting an old v3 site key as v2.
- The form requires all four public configuration values and a CAPTCHA token. Without configuration it disables sending and shows a direct email link. Expired/error tokens are cleared; every attempted send resets CAPTCHA; failed sends preserve entered fields for retry.
- Sends one notification request with `g-recaptcha-response`. Removed the second browser auto-reply request to avoid reusing a single-use token. Configure linked auto-replies in EmailJS instead.
- Added `.env.example` and explicit GitHub Actions repository-variable mappings for service ID, notification template ID, public key and v2 site key. No private keys were added. README describes fixed inbox recipient, provider CAPTCHA verification, allowed origins, linked auto-reply and real receipt test.
- Re-fetched the live site and its public JS: it is still `/assets/index-CtKonRF3.js`, byte-identical to the earlier observation; the contact call site's EmailJS configuration is explicitly undefined. A rendered form is not evidence of working email delivery.
- **Open delivery blocker:** account-specific public configuration is absent; browser account access discovery failed with `The browser access host is unavailable`. No provider account/template/CAPTCHA configuration or inbox is accessible. The user authorized a test message, but no real request was sent without valid configuration and provider verification. The four public values were requested. A provider API response alone will not be treated as proof of inbox receipt.
- Read-only GitHub checks succeeded after network escalation: repository Actions variables/secrets and the existing `github-pages` environment variables/secrets all returned no configured names. No existing EmailJS values were available there. Created an ignored `.env.local` with empty public fields for the owner to fill. No external configuration changed.
- Real reCAPTCHA challenge/domain configuration, EmailJS notification delivery, inbox receipt and linked auto-reply remain unverified pending those inputs. Do not deploy assuming the inquiry flow is active.

### Node 22 release verification

- Isolated npm-registry Node **22.23.5**, npm **11.17.0**, ran actual `npm ci --cache /tmp/wsm-npm-cache`, followed by production build (including tsc), lint and `npm run test:security`: **all passed**. Local host is macOS; the Ubuntu GitHub Actions job itself was not run. No engine mismatch was reported.
- Build retains custom-domain CNAME and the identical index/404 fallback; private PDF is absent from dist. No portfolio password source/reference remained in source or built assets. Vite preview returns the SPA HTML fallback for a removed `/portfolio.pdf` URL (HTTP 200 text/html), not PDF bytes; do not confuse this with the removed file still being present.
- Browser production-preview checks passed: email portfolio-request link, no password fields, About navigation, missing-config direct-email fallback/disabled send and HTML required/email validation.
- Configured local form tests used dummy IDs and a test-only mocked CAPTCHA/API: missing-token and expired-token requests were blocked; one token produced one notification payload with expected fields; token reuse was blocked; simulated failure preserved message and reset CAPTCHA. Two API requests were intercepted and fulfilled locally; **zero real emails** were sent. Initial mock script callback timing failed, then the corrected preloaded test stub passed; this was a test harness issue, not hidden as a live CAPTCHA test.
- Preview listened on **127.0.0.1:4173** (PID 19776) and configured mock dev on **127.0.0.1:3000** (PID 20462), one at a time; both owned processes were stopped after checks.
- `npm ci` still reports **27 findings (17 high, 10 moderate)**. They remain open; this follow-up did not force tooling upgrades.

### Remaining package remediation priority

1. **CI production build:** Vite/Tailwind/Autoprefixer glob and selector chains (`picomatch`, `brace-expansion`, `postcss-selector-parser`, `browserslist`). These actually execute during build, so prioritize compatible parent/transitive fixes and rebuild before release; visitor-controlled inputs were not found.
2. **Lint/type tooling:** `@humanfs/node`, `js-yaml`, `minimatch`/`glob` chains through ESLint/typescript-eslint. Validate compatible fixes with lint/typecheck/security tests. The vulnerable filesystem-copy/abort-boundary APIs were not found in project code.
3. **Manual deploy:** `gh-pages` → `globby` → `fast-glob` → `micromatch` → `picomatch`. Used by `npm run deploy`, not the current peaceiris Actions publication step. Treat it as a release-tooling issue, not bundled runtime code; prioritize before next manual deployment.

The baseline per-package versions, feature reachability and source advisory links below remain the open inventory. No claim of zero vulnerabilities is made.

## Baseline and fixes

- Started on `main`, commit `32d4103`, with a clean tracked working tree. No existing user edits were overwritten.
- CI uses Node 22 and `npm ci`: the authoritative npm lockfile resolved **Vite 8.0.16** (not a newly selected version from the caret range).
- [Official Vite advisory GHSA-p4f5-76q4-ffq7](https://github.com/vitejs/vite/security/advisories/GHSA-p4f5-76q4-ffq7), published November 10, lists 8.0.0–8.1.6 as affected and 8.1.7 as patched. Network-exposed dev servers can execute attacker-controlled code on the development machine. The advisory was absent from the npm audit response; audit alone was insufficient.
- Updated to `vite: ~8.1.7`; clean install resolves **8.1.7 / Rolldown 1.1.8**, newer than the advisory's required Rolldown 1.1.7 fix. Stayed on the compatible 8.1 release line. Vite's updated dependency tree also resolves PostCSS 8.5.33, nanoid 3.3.20 and source-map-js 1.2.2.
- Updated React Router DOM/core **7.17.0 → 7.18.5**, within existing 7.x compatibility, to remove the runtime router advisory matches. No routing refactor.
- Set both dev and preview hosts to `127.0.0.1`. Scripts have no hidden `--host` flags. README documents explicit trusted-LAN opt-in (`-- --host 0.0.0.0`) and stopping servers afterward.
- Preview is a local static build server, not the dev module transformer described by this RCE advisory. Its former wildcard binding unnecessarily exposed the static build; loopback is a separate defense-in-depth fix.
- README previously offered pnpm; CLAUDE.md called it the package manager, but no pnpm CI or packageManager field exists. The pnpm importer contains obsolete versions/specifiers and is missing current dependencies. Left that lockfile untouched and documented npm as the verified CI path, with pnpm frozen installs unsupported until deliberately refreshed/tested.
- Removed one existing unused `Plane` import from OtherProjects.tsx because it blocked both production build and lint. No project content changes.

## Publication boundary

`.github/workflows/deploy.yml`: push to main → checkout → setup-node 22 / npm cache → `npm ci` → `npm run build` (`tsc -b`, `vite build`, copy index to 404) → peaceiris/actions-gh-pages@v4 with `publish_dir: ./dist` → gh-pages branch.

The published artifact consists of compiled static HTML/CSS/JS plus `public/` assets, including CNAME and SPA 404 fallback. It does not publish node_modules, source env files, the Vite process or a Node runtime. Thus the dev RCE is development-machine exposure, not a visitor-facing GitHub Pages RCE. Live responses identify GitHub.com; the exact deployed commit and account Pages settings were not accessible through repository inspection. A .vercel project reference is not evidence that Vercel serves this domain.

## Contact form and credentials

- No root `.env*` files or inherited `VITE_*` variables were present; the workflow supplies none. Contact.tsx reads EmailJS service ID, template IDs and public key from VITE inputs. main.tsx only enables CAPTCHA when its site key exists. The observed public JS asset `/assets/index-CtKonRF3.js` likewise has undefined EmailJS configuration at the contact call site. Contact delivery is therefore not configured in the observed build; successful delivery was intentionally not tested.
- EmailJS browser public key/service/template IDs and a reCAPTCHA **site** key are intentionally public browser identifiers, not private credentials. Do not put EmailJS private keys, mail credentials or reCAPTCHA **secret** keys in VITE variables: every VITE value used by client code is bundled.
- No private API key, private-key PEM, AWS access-key signature or GitHub-token signature was detected in the inspected source/public text. This is a focused pattern/code review, not a guarantee about all historical commits or third-party accounts. The encrypted client review artifact contains ciphertext; its encryption script reads a non-VITE password at encryption time, not a bundled secret.
- **Exposed password-like value:** active AboutExperience.tsx embeds a fallback portfolio password (`[REDACTED]`), also present in the live JavaScript. `VITE_PORTFOLIO_PASSWORD` would also become public if set. About.tsx has another client-only comparison but is not imported by App. The underlying `/portfolio.pdf` is in public/ and copied into dist regardless of password. Treat this PDF as public. If it contains private material, the owner must remove it from published assets and use authenticated storage/server authorization; rotate the exposed password anywhere it was reused. A static browser password dialog cannot protect it.
- The baseline contact integration executed reCAPTCHA **v3** and forwards its token to EmailJS. [EmailJS documentation](https://www.emailjs.com/docs/user-guide/adding-captcha-verification/) supports **v2 only**, enabled on each template with the secret stored in the provider dashboard. No v3 verification backend exists here. Browser checks alone do not enforce abuse protection. Owner must choose supported v2 verification for both notification and auto-reply templates or implement server-side v3 verification; provider configuration/keys and approval of that integration are required. No unverified CAPTCHA migration was made.
- Owner must configure EmailJS allowed origins, fixed notification recipient and appropriately constrained auto-reply templates/rate limits. Browser validation is usability, not a security boundary. Provider settings were not inspected or changed.

## Public HTTP observations

Ordinary GETs at approximately 16:46–16:47 Bangkok time on November 18:

| Request | Observed redirect and final response |
| --- | --- |
| http://www.wynnsolutionsmyanmar.com | 301 Location: https://www.wynnsolutionsmyanmar.com/ → HTTPS 200 |
| http://wynnsolutionsmyanmar.com | 301 Location: https://www.wynnsolutionsmyanmar.com/ → HTTPS 200 |

TLS validation succeeded with curl's normal certificate verification. Final response: `server: GitHub.com`, `content-type: text/html; charset=utf-8`, `cache-control: max-age=600`, `access-control-allow-origin: *`, last-modified November 6, 2026. Wildcard CORS is consistent with public static content; it does not expose account credentials.

No HTTP Strict-Transport-Security, Content-Security-Policy, X-Content-Type-Options, X-Frame-Options, Permissions-Policy or Referrer-Policy response headers were observed. index.html has a valid referrer meta policy; its X-Content-Type-Options and Permissions-Policy http-equiv tags do not establish those HTTP response headers. Owner should assess actual header enforcement at the hosting/edge layer; repository meta tags cannot supply those protections. No provider/DNS changes made. Canonical metadata names the apex while redirects/CNAME use www (consistency issue, not an exploit).

## Verification

- `npm ci --cache /tmp/wsm-npm-cache`: passed; then `npm ls` verified resolved Vite/Rolldown/router. Local Node **26.5.0**, npm **11.17.0**; exact CI Node 22 execution was not reproduced. CI Node 22 must satisfy Vite's >=22.12 engine floor; setup-node's major 22 selector normally retrieves a current 22.x version.
- Production `npm run build`: passed, including TypeScript `tsc -b`. `npm run lint`: passed. No standalone test/typecheck script or test runner is configured. Build warns about stale caniuse-lite and >500 kB bundle; no security refactor made for these warnings.
- Dev launched alone with `npm run dev -- --strictPort`; lsof confirmed **IPv4 127.0.0.1:3000**, PID 9968. Stopped that exact process before preview.
- Preview launched alone with `npm run preview -- --strictPort`; lsof confirmed **IPv4 127.0.0.1:4173**, PID 11096. Stopped that exact process after verification.
- Browser smoke tests passed on both dev and production preview: homepage heading, About Thomaz navigation and return Home, Contact anchor, empty required-field rejection, invalid-email rejection, valid field state. EmailJS requests were intercepted/aborted defensively; zero were attempted and no valid form submission/message was sent. Production reCAPTCHA/delivery behavior remains unverified pending owner configuration.
- `cmp public/CNAME dist/CNAME` passed (`www.wynnsolutionsmyanmar.com`); index/404 comparison passed. No source maps or env files were found in dist. Preview GET /CNAME also matched.
- Sandbox initially blocked registry DNS, public DNS and server binds. Approved network/listen retries succeeded; **no remaining registry or live-site access blocker**. A sandbox curl could not reach the separately started listener, but browser access succeeded. No unrelated process was stopped.

## Dependency advisory disposition

Full npm audit: **31 → 27** affected package entries (not distinct vulnerabilities); after fixes **17 high / 10 moderate** remain. Production-only audit: **5 high** entries, all the **gh-pages → globby → fast-glob → micromatch → picomatch** CLI chain. None of that chain is imported into the visitor bundle. These counts must not be read as a clean audit or as demonstrated production exploitability.

Remaining findings are recorded below rather than forcing major upgrades (audit proposes Tailwind 4 for some chains). They require a separate targeted tooling remediation pass if untrusted repository content, CSS, YAML or glob input will be processed. Updated versions remove several real dependency matches; absence of attacker input reduces reachability, not the validity of advisory data.

The following inventories include every direct advisory object returned by the baseline npm audit (transitive propagated entries are not separate root findings). Versions are lockfile versions; repeated nested versions are deduplicated.

### @humanfs/node

Installed before: 0.16.6. After: 0.16.6. Still matched by current audit.

ESLint filesystem helper is installed. No project call to its recursive copy API; no untrusted symlink-copy job found.

- [humanfs: Recursive copy follows symlinked files and copies data from outside the source tree](https://github.com/advisories/GHSA-p498-v437-472g)

### brace-expansion

Installed before: 1.1.15, 2.1.1. After: 1.1.15, 2.1.1. Still matched by current audit.

Glob expansion in build/lint tooling. Patterns/config are repository controlled; no visitor-supplied patterns processed.

- [brace-expansion: DoS via exponential-time expansion of consecutive non-expanding {} groups](https://github.com/advisories/GHSA-3jxr-9vmj-r5cp)
- [brace-expansion: DoS via unbounded expansion length causing an out-of-memory process crash](https://github.com/advisories/GHSA-mh99-v99m-4gvg)
- [brace-expansion: DoS via unbounded intermediate arrays, bypassing the CVE-2026-14257 mitigation](https://github.com/advisories/GHSA-rgw5-rvv9-x895)
- [brace-expansion: Quadratic-time expansion of the `{a},b}` rewrite causes CPU denial of service](https://github.com/advisories/GHSA-q2hr-2g5m-vwhr)
- [brace-expansion: DoS via uncontrolled recursion on nested brace groups causing stack exhaustion](https://github.com/advisories/GHSA-qhr7-859c-m2p7)
- [brace-expansion: DoS via uncontrolled recursion in parseCommaParts causing stack exhaustion](https://github.com/advisories/GHSA-6j4f-fj2g-mc7p)

### browserslist

Installed before: 4.25.1. After: 4.25.1. Still matched by current audit.

Build target selection through Autoprefixer. Repository queries only; no custom untrusted statistics input or long-running query service.

- [Browserslist: Unbounded memory growth (no cache eviction) via distinct query results, leading to eventual OOM](https://github.com/advisories/GHSA-c83g-rgw3-j3cx)
- [Browserslist: Uncaught crash / prototype write via untrusted browserslist-stats.json custom stats (normalizeStats)](https://github.com/advisories/GHSA-73wf-gq98-2v4g)

### glob

Installed before: 10.5.0. After: 10.5.0. Still matched by current audit.

Build/lint dependency. No project use of AbortSignal as a filesystem security boundary.

- [Glob: AbortSignal cancellation bypass allows post-timeout filesystem traversal](https://github.com/advisories/GHSA-3g3m-2fjr-6pw4)

### js-yaml

Installed before: 4.2.0. After: 4.2.0. Still matched by current audit.

ESLint/tooling YAML parsing. No visitor-supplied YAML ingestion; malicious repository/config input remains a tooling concern.

- [js-yaml: YAML merge-key chains can force quadratic CPU consumption](https://github.com/advisories/GHSA-52cp-r559-cp3m)
- [JS-YAML: Quadratic CPU consumption in !!omap resolution (3.x and 4.x) — CVE-2026-59870 fix not backported](https://github.com/advisories/GHSA-5p4m-2wfm-xmqj)
- [js-yaml: maxTotalMergeKeys does not limit CPU use for empty merge sources](https://github.com/advisories/GHSA-2883-xcg3-v3hh)

### minimatch

Installed before: 9.0.9. After: 3.1.5, 9.0.9. Still matched by current audit.

Lint/type tooling glob matching. No visitor-controlled glob patterns.

- [minimatch has potential denial of service via globparts amplification](https://github.com/advisories/GHSA-g3hv-75wg-m249)

### nanoid

Installed before: 3.3.12. After: 3.3.20. No longer matched by current audit.

PostCSS dependency. No application use of non-secure/custom size generators; removed old resolved version through PostCSS update.

- [nanoid: non-secure generators can loop indefinitely with negative size](https://github.com/advisories/GHSA-28wg-ghj8-5hjv)
- [nanoid: custom generators can loop indefinitely when size is zero](https://github.com/advisories/GHSA-2v37-7h3g-55p8)

### picomatch

Installed before: 2.3.2, 4.0.4. After: 2.3.2, 4.0.4, 4.0.7. Still matched by current audit.

Glob matching in Vite/Tailwind and gh-pages dependency chains. No visitor-supplied extglobs. gh-pages is listed under dependencies but only used by manual deploy CLI, never imported by the app.

- [picomatch vulnerable to ReDoS through single-branch repeated extglobs](https://github.com/advisories/GHSA-fc5q-39xc-vjpf)

### postcss

Installed before: 8.5.15. After: 8.5.33. No longer matched by current audit.

CSS build pipeline is used, with repository CSS, not uploaded/untrusted CSS. Patched transitively during Vite install.

- [PostCSS: incomplete fix of GHSA-6g55-p6wh-862q — attacker-controlled sourceMappingURL reads arbitrary .map files when `from` is unset](https://github.com/advisories/GHSA-fxqj-rqcc-2cmp)
- [PostCSS: Path Traversal in Previous Source Map Auto-Loading (sourceMappingURL) leads to Arbitrary .map File Disclosure](https://github.com/advisories/GHSA-r28c-9q8g-f849)

### postcss-selector-parser

Installed before: 6.1.2. After: 6.1.2. Still matched by current audit.

Tailwind CSS selector processing is used on repository CSS. No untrusted selector parsing service.

- [postcss-selector-parser allows denial of service through uncontrolled AST recursion](https://github.com/advisories/GHSA-w9m9-85wc-3x92)
- [PostCSS: Quadratic complexity in flat selector parsing allows CPU exhaustion](https://github.com/advisories/GHSA-rj75-hqrm-r3gf)

### react-router

Installed before: 7.17.0. After: 7.18.5. No longer matched by current audit.

BrowserRouter, Link and useNavigate are used with fixed navigation targets. No attacker-controlled destinations found. No SSR hydration, RSC, Framework Mode or manifest endpoint. Compatible 7.x update removes matches.

- [React Router: Open redirect via backslash in <Link> and useNavigate (CVE-2025-68470 bypass)](https://github.com/advisories/GHSA-wrjc-x8rr-h8h6)
- [React Router: RSCErrorHandler Missing Protocol Validation (XSS)](https://github.com/advisories/GHSA-h8fp-f39c-q6mh)
- [React Router: Arbitrary Constructor Injection via deserializeErrors() in React Router SSR Hydration](https://github.com/advisories/GHSA-337j-9hxr-rhxg)
- [React Router: Unauthenticated Denial of Service via Inefficient Route Matching](https://github.com/advisories/GHSA-chx6-hx7r-mcp5)
- [React Router: RSC Mode CSRF Bypass Allows Action Execution Before 400 Response](https://github.com/advisories/GHSA-qwww-vcr4-c8h2)

### source-map-js

Installed before: 1.2.1. After: 1.2.2. No longer matched by current audit.

PostCSS build dependency; no untrusted indexed source map ingestion service. Updated with PostCSS.

- [source-map-js allows event-loop denial of service through indexed source-map section offsets](https://github.com/advisories/GHSA-68fv-2mgg-jv7q)

### vite

Installed before: 8.0.16. After: 8.1.7. Still matched by current audit.

Development-only tool. Original server.host=true satisfies network exposure precondition for maintainer RCE advisory. Other matches concern launch-editor (Windows/editor arguments), custom middleware (none configured), and dev filesystem serving. Patched to 8.1.7; preview assessed separately.

- [launch-editor: escapeCmdArgs() omits % escaping on Windows](https://github.com/advisories/GHSA-698v-4r3x-3vcv)
- [launch-editor: Editor CLI flag misinterpretation causing arbitrary command execution for some editors](https://github.com/advisories/GHSA-r825-w8mm-5pxw)
- [launch-editor: `fs.existsSync()` existence check can be bypassed on Windows](https://github.com/advisories/GHSA-587h-7wmj-h5pm)
- [Vite: Cross origin script execution through Vite custom middleware](https://github.com/advisories/GHSA-9jrq-w75r-8gcw)
- [Vite: Files outside `server.fs.allow` could be served when project paths match system paths on non-Windows machine](https://github.com/advisories/GHSA-rq7h-c2jc-7f22)

