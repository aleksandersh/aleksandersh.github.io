# Project rules

## Runtime and build
- Do not use local Node.js tooling. Use Docker or `make` targets.
- Use `make build` to build the site in Docker.
- Use `make start-dev` for local dev in Docker.
- Use `make start-vite-preview` for preview in Docker.
- Use `make refresh-lock` to update `package-lock.json` in Docker.

## Eleventy + Vite
- Eleventy output must keep flat URLs (e.g. `about.html`).
- Pages must keep `permalink: /<page>.html` in front matter.
- Vite inputs must reference `_site/<page>.html`.
- Eleventy input is `src/`; templates live in `src/_includes`.
- Passthrough assets from `src/assets` to `_site/assets`.

## Links and assets
- Keep page links as `<page>.html` (no folder links).
- Use absolute asset paths under `/assets/...` so assets work from any page.
