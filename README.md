# Wan Wei — Portfolio

Personal portfolio and writing site for Lee Wan Wei. Built as a static site with
a warm, paper-and-sticker visual language: a draggable sticker-collage hero,
Fraunces display type, and MDX-authored case studies and essays.

**Live:** https://wanweileee.github.io/my-portfolio

## Stack

- **Next.js 16** (App Router) with `output: "export"` — fully static, no server
- **React 19** + **TypeScript**
- **Tailwind CSS v4** with a small custom theme (`app/globals.css`)
- **MDX** content via `next-mdx-remote` + `gray-matter`
- **Framer Motion** for scroll reveals and page transitions
- Deployed to **GitHub Pages** (base path `/my-portfolio`)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # static export to ./out
npm run lint
```

In production the build applies `basePath: "/my-portfolio"` and
`assetPrefix` (see `next.config.ts`). Internal asset URLs go through the
`asset()` helper in `lib/asset.ts` so they stay correct under the base path.

## Project structure

```
app/                 Routes: home, /projects, /projects/[slug], /writing, /writing/[slug], /now
components/          UI + interaction (StickerHero, ProjectCard, Nav, Reveal, ...)
content/
  projects/*.mdx     One file per case study (frontmatter + body)
  writing/*.mdx      Essays and field notes
  now.mdx            The /now page
lib/content.ts       Loads & sorts MDX, exposes typed frontmatter
mdx/components.tsx    Styling + custom components (CanvaEmbed, Video) available in MDX
public/              Images, og.png (social share card), icons
```

## Authoring content

Add a project or post by dropping an `.mdx` file into `content/projects/` or
`content/writing/`. Projects use frontmatter like:

```yaml
---
title: "Project Title"
slug: "project-title"
summary: "One-sentence hook."
role: "Your role"
year: 2026
stack: ["Python", "Next.js"]
cover: "/projects/cover.jpg"      # 4:3 recommended; falls back to a placeholder
coverAlt: "Alt text"
category: "school"                 # "school" or "side" (tabbed on /projects)
order: 1
draft: false
slidesEmbed: "https://..."         # optional Canva embed used as the hero
links:
  - { label: "GitHub repo", href: "https://..." }
---
```

Set `draft: true` to keep a file out of the build.

## Social share image

`public/og.png` (1200×630) is referenced from the metadata in `app/layout.tsx`
via `openGraph` and `twitter` tags. Regenerate it from a design in that brand
style if the tagline or name changes.
