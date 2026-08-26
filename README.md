# Inspective Labs Website

This is a lead-generation, content-driven corporate site for Inspective Labs, a B2B service company targeting insurance companies, financial lenders, geotech consultants, and mining companies.

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   └── react/
│   ├── content/
│   │   └── blog/
│   ├── layouts/
│   ├── lib/
│   ├── pages/
│   │   ├── blog/
│   │   ├── industries/
│   │   └── ...
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── content.config.ts
├── tailwind.config.mjs
└── package.json
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## Rendering Strategy

This project uses **hybrid rendering**. The default output is set to `server` in `astro.config.mjs` (via `@astrojs/node`). 
Static pages like the homepage, blog, and industry pages use `export const prerender = true;` to generate static HTML at build time, while dynamic pages like `contact.astro` run on the server to handle form submissions.
