# Personal Website

Public personal academic website, served with **GitHub Pages** (migrated from
GitLab Pages on 2026-07-04).

- **Live site:** <https://daniellahav.com> (also <https://www.daniellahav.com>).
  The GitHub Pages URL serves the same content and redirects to the custom domain.
  The old GitLab deployment (<https://personal-website-0480a2.gitlab.io>) is a frozen
  backup — useful on the Bar-Ilan campus network, whose DNS resolvers
  (132.70.60.124 / 132.70.9.100) may not resolve the domain.
- **QR code:** `qr/personal-website-qr.png` (print) and `.svg` (vector) point to https://daniellahav.com.
- **Domain:** daniellahav.com, registered at Cloudflare. DNS: apex A records ->
  185.199.108.153 / .109.153 / .110.153 / .111.153 (GitHub Pages), CNAME www ->
  the GitHub Pages hostname. GitHub provisions and renews the HTTPS certificate.
- **How it works:** the site files live at the repo root (`index.html`, `404.html`,
  `styles.css`, `assets/`, `robots.txt`, `sitemap.xml`) and are served as-is by
  GitHub Pages ("Deploy from branch": `main` / root). `.nojekyll` disables Jekyll
  processing; `CNAME` holds the custom domain. No build step — plain HTML/CSS.
- **To edit:** change the files, commit, push to `main` on `origin` (GitHub).
  Pages redeploys automatically (~1 min). Do not push to the `gitlab` remote —
  it is kept only as a backup of the pre-migration history.

The page is `index.html` + `styles.css` (no build step), styled per Daniel's
own "Main-Design-System" (`~/dev/main-design-system`, GitLab:
`daniellahav-group/editor-site-tools/main-design-system` — the deck-derived
Editorial theme): cream canvas, brass gold accent, deep-navy pacing surfaces, Palatino
display / Cambria serif / Inter UI (Cormorant Garamond + Spectral as public web
substitutes, per the design system's own guidance). Content policy: only
verified facts — published papers with DOIs, CV items; no unpublished manuscript titles,
no personal emails, no unverified profile links.
