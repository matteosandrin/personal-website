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
  `src/app/projects/projects.ts` and `src/app/power-broker/chapters.ts`.
- Pages that are mostly text are MDX: each project page and the iPod podcasts
  page is a `page.mdx`, and the chapter summaries are in
  `src/app/power-broker/summaries`.
- `src/app/sitemap.ts` and `src/app/robots.ts` generate `sitemap.xml` and
  `robots.txt`. The fonts are in `src/app/fonts`.
- `src/lib` holds shared helpers and site-wide constants.
- `public` holds static files (images, `CNAME`, `.nojekyll`). GitHub Pages needs
  `.nojekyll` to serve the `_next` folder.
