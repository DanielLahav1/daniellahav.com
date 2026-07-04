# Personal Website

Public personal academic website, served with GitLab Pages.

- **Live site:** <https://daniellahav.com> (also <https://www.daniellahav.com>).
  <https://personal-website-0480a2.gitlab.io> serves the same site standalone (no redirect) —
  kept working on purpose because the Bar-Ilan campus DNS resolvers (132.70.60.124 /
  132.70.9.100) don't resolve the newly registered domain; the canonical tag still points
  at daniellahav.com.
- **QR code:** `qr/personal-website-qr.png` (print) and `.svg` (vector) point to https://daniellahav.com.
- **Domain:** daniellahav.com, registered at Cloudflare (DNS: A @ -> 35.185.44.232, CNAME www -> personal-website-0480a2.gitlab.io, plus GitLab verification TXT records). GitLab auto-renews the Let's Encrypt certificate.
- **How it works:** everything inside `public/` is published as-is by the `pages` CI job on every push to `main`. No build step — plain HTML/CSS.
- **To edit:** change files in `public/`, commit, push. The pipeline redeploys automatically (~1 min).
- **Repo is private, site is public:** the project visibility is private, but Pages access is set to "Everyone" so anyone with the URL (or QR code) can view it.

The page is `public/index.html` + `public/styles.css` (no build step), styled per Daniel's
own "Main-Design-System" (`~/dev/main-design-system`, GitLab:
`daniellahav-group/editor-site-tools/main-design-system` — the deck-derived
Editorial theme): cream canvas, brass gold accent, deep-navy pacing surfaces, Palatino
display / Cambria serif / Inter UI (Cormorant Garamond + Spectral as public web
substitutes, per the design system's own guidance). Content policy: only
verified facts — published papers with DOIs, CV items; no unpublished manuscript titles,
no personal emails, no unverified profile links.
