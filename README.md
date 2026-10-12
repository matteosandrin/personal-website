# Matteo's Personal Website (https://sandr.in)

This repository holds the source for my personal website. It is a
[Next.js](https://nextjs.org) app that is exported to static HTML and served by
GitHub Pages. Pushes to `master` deploy automatically.

| Command          | Description                                             |
| ---------------- | ------------------------------------------------------- |
| `npm run dev`    | Start a dev server with hot reload on `localhost:3000`. |
| `npm run build`  | Build the static site into `./out`.                     |
| `npm run serve`  | Serve the files in `./out`.                             |
| `npm run format` | Format the code with Prettier.                          |

## Layout

- `src/app` holds one folder per URL. A component used by only one page lives in
  that page's folder.
- `src/components` holds the components that more than one page uses.
- A page's data lives next to it, e.g. `src/app/cars/cars.ts`,
  `src/app/projects/projects.tsx` and `src/app/power-broker/chapters.ts`. The
  chapter summaries are in `src/app/power-broker/summaries`, one paragraph per
  block of text.
- `src/lib` holds shared helpers and site-wide constants.
- `public` holds static files (images, fonts, `CNAME`, `sitemap.xml`).
