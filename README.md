<div>
  <h1>
    Aric Crosson Bouwers
    &middot;
    <img src="https://img.shields.io/website?style=flat-square&url=https%3A%2F%2Fwww.ariccb.dev"/>
    <img src="https://img.shields.io/github/deployments/ariccb/ariccb.dev/production?label=production&style=flat-square"/>
    <img src="https://img.shields.io/github/commit-activity/m/ariccb/ariccb.dev?style=flat-square"/>
  </h1>
</div>

A monorepo for my personal website and projects, built with Next.js, TypeScript, TailwindCSS, Framer Motion, and MDX.

## 📘 [ariccb.dev](https://www.ariccb.dev)

A personal website with a blog, project showcase, and work information.


### Tech Stack

- 🚀 Next.js + TypeScript
- ➰ Framer Motion
- 🍃 Tailwind CSS
- ✍ MDX

## the database powering this portfolio project is MongoDB Atlas
- login 

[FIND OUT MORE →](apps/ariccb.dev)

Special Thanks to Enji for providing an opensource portfolio template! Check his github out - https://github.com/enjidev

## Quick orientation

- Hosted on Vercel (production project lives under the aricbouwers@outlook.com account; aric@ariccb.dev also works to log in).
- Package manager is `pnpm` (workspace root has the lockfile and Turbo config).
- Main app lives in `apps/ariccb.dev` (Next.js 13, Pages Router, MDX support).

## Run / lint / build with Turborepo

- Install deps: `pnpm install`
- Dev: `pnpm dev` (turbo runs `db:generate` then `next dev` in parallel)
- Build: `pnpm build`
- Lint: `pnpm lint`
- Clean caches: `pnpm clean`
- App-only commands if you want to skip Turbo: `pnpm --filter ariccb.dev dev|build|lint`
- Regenerate Prisma client after schema changes: `pnpm --filter ariccb.dev db:generate`

## Deploying

- Vercel builds from the repo; push to the default branch to trigger a production deploy.
- Manual deploys are also available via the Vercel dashboard/CLI (same account emails as above).
- Ensure env vars (e.g., `DATABASE_URL`) are present in the Vercel project before promoting a build.

## Database (MongoDB Atlas + Prisma)

- Connection string lives in `apps/ariccb.dev/.env` as `DATABASE_URL` (do not commit real values).
- Prisma schema: `apps/ariccb.dev/prisma/schema.prisma`. Models cover content meta, views, shares, reactions.
- After editing the schema, run `pnpm --filter ariccb.dev db:generate` to refresh the client.
- Prisma client is created in `apps/ariccb.dev/src/utils/prisma.ts`.

## Editing content (MDX)

- Pages support `.md`/`.mdx` via Next + @next/mdx (see `apps/ariccb.dev/next.config.mjs`).
- Create a new page by adding an `.mdx` file under `apps/ariccb.dev/src/pages`. The route matches the file path.
- Front matter keys:
  - `title`, `description`, `caption` (required for headers/OG)
  - `layout` determines wrapper. Use `PageWithMDX` for general pages (see `pages/wip.mdx`), `Project` for project writeups (see `pages/docs/template.mdx`), or `Page` for simple TSX layouts.
- MDX components live in `apps/ariccb.dev/src/components/mdx`. Headings (`##`, `###`) feed the table of contents automatically.
- Today-I-Learned entries live in `apps/ariccb.dev/src/contents/TIL/Contents.mdx` using the `<TIL.Items>` / `<TIL.Item>` components.
- Homepage/project sections are TSX components in `apps/ariccb.dev/src/contents/**`; update those for hero/projects copy.
- Assets: drop images/resumes/etc. into `apps/ariccb.dev/public/assets/...` and reference with `/assets/...` paths.

## Quick checklist before pushing

- `pnpm lint` and `pnpm build` pass locally.
- `DATABASE_URL` is set locally and in Vercel project settings.
- Added/updated MDX pages include front matter and the right `layout`.
