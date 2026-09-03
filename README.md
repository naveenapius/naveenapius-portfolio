# naveenapius-portfolio

Personal portfolio site for **Naveena Pius** — software engineer, rider, and writer. Built with the Next.js App Router and Tailwind CSS, deployed on Netlify.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router, plain JavaScript — no TypeScript)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com)
- **Hosting/Deploy:** [Netlify](https://www.netlify.com) via `@netlify/plugin-nextjs`

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. Pages live under `app/` and auto-update as you edit.

## Scripts

| Command           | Description                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Start the development server                 |
| `npm run build`   | Production build                             |
| `npm run start`   | Serve the production build                   |
| `npm run preview` | Build, then serve the production build       |
| `npm run lint`    | Run ESLint                                   |

## Project Structure

```
app/          → routes (App Router), global styles, metadata, sitemap/robots
components/    → reusable UI, grouped by feature (home, layout, media, ui)
lib/          → shared helpers (links, contact, reels, sound)
design/       → Claude Design exports (reference only)
public/       → static assets
netlify.toml  → Netlify build configuration
```

## Deployment

Netlify auto-detects Next.js and builds via `netlify.toml`:

- **Build command:** `npm run build`
- **Publish directory:** `.next`
- **Node version:** 22 (LTS)

The official Next.js runtime (`@netlify/plugin-nextjs`) handles the App Router, ISR, image optimization, and function wiring.
