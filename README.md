# justinohalloran.com

Portfolio of Justin O'Halloran, senior frontend engineer in Vancouver. The site is itself part of the portfolio.

- **Next.js App Router, fully static.** Every route is prerendered; case studies use `generateStaticParams`.
- **Design tokens from one file.** `src/tokens.json` → `scripts/build-tokens.mjs` → CSS custom properties in a Tailwind v4 `@theme` block. Utilities, plain CSS and Storybook read the same variables. Dark mode overrides them with no JavaScript.
- **Storybook** for the components in `src/ui`, with the a11y addon. It is built into `public/storybook` and served at [/storybook](https://justinohalloran.com/storybook/index.html).
- **Honest numbers as a type.** `Metric` in `src/content/types.ts` requires a status of `measured`, `estimate` or `unmeasured`, and the component always renders it.
- **Performance** is recorded from real Lighthouse runs into `src/content/lighthouse.json` and shown on [/work/this-site](https://justinohalloran.com/work/this-site); field data comes from Vercel Speed Insights.

## Run it

```bash
pnpm install
pnpm dev             # site on :3000
pnpm storybook       # Storybook on :6006
pnpm build           # tokens → Storybook → Next.js
```
