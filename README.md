# Personal Website

Public personal academic website, served with GitLab Pages.

- **Live site:** <https://personal-website-0480a2.gitlab.io>
- **QR code:** `qr/personal-website-qr.png` (print) and `.svg` (vector) point to the live URL.
- **How it works:** everything inside `public/` is published as-is by the `pages` CI job on every push to `main`. No build step — plain HTML/CSS.
- **To edit:** change files in `public/`, commit, push. The pipeline redeploys automatically (~1 min).
- **Repo is private, site is public:** the project visibility is private, but Pages access is set to "Everyone" so anyone with the URL (or QR code) can view it.

The page is a single self-contained `public/index.html` (no build step) styled per the
research-journal design brief (`research-site-v3/supporting/DESIGN_BRIEF.md`): Fraunces +
Source Sans 3, navy on blue-gray, orange accent, mirrored dark mode. Content policy: only
verified facts — published papers with DOIs, CV items; no unpublished manuscript titles,
no personal emails, no unverified profile links.
