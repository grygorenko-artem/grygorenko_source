# grygorenko.tech — Blog Source

Personal blog of Artem Grygorenko about testing, QA, leadership and people.

## Stack

| Layer | Tool |
|---|---|
| Framework | [Astro](https://astro.build) v5 (static site) |
| Content | Markdown files in `src/content/blog/` |
| Hosting | GitHub Pages via `grygorenko-artem.github.io` |
| Domain | `blog.grygorenko.tech` (CNAME in `public/`) |
| CI/CD | GitHub Actions → `peaceiris/actions-gh-pages` |
| Analytics | [Umami](https://umami.is) (cloud) |
| Email subscriptions | [Buttondown](https://buttondown.com) |
| RSS | `/rss.xml` via `@astrojs/rss` |

## How it works

```
push to master
  → GitHub Actions builds Astro
  → deploys ./dist to grygorenko-artem/grygorenko-artem.github.io (main branch)
  → available at blog.grygorenko.tech
```

## Content

Posts live in `src/content/blog/` as Markdown files.

**Naming convention:** `YYYY-MM-DD-slug.md`

```
src/content/blog/
├── 2026-05-25-business-model-is-not-engineering-culture.md
├── 2026-05-18-untools-co.md
├── 2026-05-11-problem-is-an-opportunity.md
├── mentorship/
│   ├── Why-do-you-need-a-mentor.md
│   └── how-to-find-a-mentor.md
└── other/
    ├── hiring-improvements.md
    └── howireadarticles.md
```

**Frontmatter fields:**

```yaml
---
title: "Post title"
date: 2026-05-25
draft: true        # false to publish
tags: ["Tag"]
description: ""    # used in SEO and RSS
cover:
  image: /images/cover.jpg
  alt: "description"
---
```

Draft posts (`draft: true`) are visible locally in dev mode but not built for production.

## Local dev

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # production build
```
