# ISEPower

Project: Demand Response Advisor for Smart Grids.

A project website and development blog for Equipa 10, Master's Degree in Artificial Intelligence (MEIA), ISEP, 2026.

The proposed advisor explores knowledge-based support for consumer and prosumer demand response decisions. The website distinguishes planned work and illustrative scenarios from implemented results.

## Local development

Requires Node.js 22.12 or later; Node.js 24 was used for validation. From the project directory:

```sh
npm ci
npm run dev -- --background
```

Open http://localhost:4321/ (use the port reported by Astro if different). Both local development and production use the root path `/`.

```sh
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
npm run build
npm run preview
```

On Windows PowerShell, use `npm.cmd` if execution policy blocks `npm.ps1`.

## Structure and content

- `src/pages/`: Home, Project, Knowledge Engineering, Blog and Team routes.
- `src/content/blog/`: Markdown/MDX posts, rendered with the existing Astro collection architecture.
- `src/content.config.ts`: frontmatter validation and supported categories.
- `src/data/team.ts`: editable team members, roles, bios and optional profile links/images.
- `src/components/`: shared navigation, cards, section headings, conceptual diagrams and progress status.
- `src/layouts/`: shared page and blog layouts.
- `src/styles/global.css`: design tokens and responsive layouts.
- `src/utils/paths.ts`: base-aware internal links.

To publish an update, add a Markdown file under `src/content/blog/`:

```yaml
---
title: 'Your update title'
description: 'A short, factual summary.'
pubDate: '2026-09-17'
category: 'Project Updates'
lang: 'en'
translationKey: 'your-update'
---
```

Replace the sample date with the actual publication date. Optional fields: `updatedDate` and `heroImage`. Categories: Project Updates, Knowledge Acquisition, Knowledge Representation, Prototype, Research, Results. Use the same translationKey for the English and Portuguese versions. All collection entries are published at build time; there is no draft or scheduled-publication mechanism. Index, home and RSS sort by publication date.

Add one object per confirmed person in `src/data/team.ts`. Use an array of paragraphs for `bio`. Optional fields are `email`, `linkedin`, `github` (full URLs), and `image` (a path relative to `public/`, such as `images/member.jpg`). Missing links do not render dead anchors. Add further members as their details become available.

## Remaining content

Confirm team identities and responsibilities; project scope and scenarios; knowledge sources, datasets and any expert participation; knowledge representation and inference strategy; prototype tools and evaluation criteria; actual timeline dates and progress. The six-week timeline is a proposed outline only. The kickoff date is the date the initial post was created and can be edited before publication.

## Design and implementation

Navy, blue, cyan and energy-green accents; locally hosted sans-serif fonts; restrained cards and generous spacing. All pages are statically generated. The home page adds a small inline script for the branded loading overlay. A native HTML details menu supports mobile navigation without client JavaScript. The diagrams describe a conceptual system and contain no fabricated measurements. Existing MDX, RSS and sitemap integrations are retained; no dependencies were added.

## GitHub Pages preparation

`astro.config.mjs` uses the organization site `https://iseppower.github.io`, base `/`, static output and trailing slashes. Use `sitePath()` for new internal links and public assets. The base also applies locally.

The workflow in `.github/workflows/deploy.yml` runs **only on manual dispatch**. Nothing has been deployed by this change. When ready:

1. Review the content and commit/push the website and lockfile to the repository's default branch.
2. In GitHub Settings > Pages, select GitHub Actions as the source.
3. In Actions, manually run `Deploy to GitHub Pages`.
4. Verify the published routes, styles, RSS and sitemap under the repository base.

Prepared publication URL: https://iseppower.github.io/

Reference: [Astro's GitHub Pages guide](https://docs.astro.build/en/guides/deploy/github/).

## Validation

`npm run build` generates the static pages and validates collection data. A separate full Astro/TypeScript diagnostic check is not configured in this repository. Before release, visually review desktop/mobile layouts and keyboard navigation in a browser.

## File change inventory

Created:

- `src/pages/project.astro`, `src/pages/knowledge-engineering.astro`, `src/pages/team.astro`
- `src/layouts/SiteLayout.astro`
- `src/components/Hero.astro`, `SectionTitle.astro`, `FeatureCard.astro`, `GridConcept.astro`, `SystemConcept.astro`, `ProjectStatus.astro`, `PostCard.astro`, `TeamMemberCard.astro` (all under `src/components/`)
- `src/data/team.ts`, `src/utils/paths.ts`
- `src/content/blog/project-kickoff.md`
- `public/favicon.svg`
- `.github/workflows/deploy.yml`

Modified:

- `astro.config.mjs`, `README.md`
- `src/consts.ts`, `src/content.config.ts`, `src/styles/global.css`
- `src/components/BaseHead.astro`, `Header.astro`, `HeaderLink.astro`, `Footer.astro` (all under `src/components/`)
- `src/layouts/BlogPost.astro`
- `src/pages/index.astro`, `src/pages/blog/index.astro`, `src/pages/rss.xml.js`
- `public/site.webmanifest`

Removed: the unrelated `about.astro` page, the five demo blog posts, and the six unused `blog-placeholder-*.jpg` assets. The blog dynamic route and date component were preserved. Dependencies, lockfile and Git history were not changed.

Verification performed: production build passed for all twelve HTML pages; 342 internal page/asset references and in-page anchors resolved; language-specific lists, paired translation links, canonical and hreflang metadata, and both RSS feeds passed output checks. Loader lifecycle checks covered load completion, timeout, back/forward cache restoration, completed documents and its hidden no-JavaScript default. Browser visual testing and a full TypeScript diagnostic pass were not performed.

## Bilingual site and blog

English keeps the existing routes: `/blog/` and `/blog/project-kickoff/`. European Portuguese uses `/pt/blog/` and `/pt/blog/project-kickoff/`. All routes include the configured repository base. Home, Project, Knowledge Engineering and Team also have complete Portuguese routes under /pt/. Each page has Portugal and UK flag links in the top header; switching languages opens the equivalent page. Navigation and the brand home link preserve the selected language. The project name remains Demand Response Advisor for Smart Grids in both languages.

Store Portuguese articles under `src/content/blog/pt/`. Set `lang: 'pt'` and use the same `translationKey` as the English article. The language switch links to the matching article, even if the two filenames differ. Unavailable translations are not linked. Duplicate language/translation-key pairs fail the build. Categories keep their English schema values and are translated for display. No automatic translation is performed when adding future posts.

Shared locale tags and static-page route helpers live in `src/utils/i18n.ts`. Non-blog Portuguese pages are in `src/pages/pt/`; translate both versions when editing their content. Team biography translations are in `src/data/team-pt.ts`, keyed by the email in `src/data/team.ts`; photos and contact details remain shared. Adding a team member without a Portuguese biography fails the build to prevent mixed-language cards. Shared diagrams and status components accept a `locale` prop.

Shared blog copy, translated categories and route helpers live in `src/utils/blog.ts`. Shared index rendering is in `src/components/BlogIndex.astro`; the language selector is in `src/components/LanguageSwitcher.astro`. Both index pages and articles emit language-specific metadata. The English RSS feed is `/rss.xml`; Portuguese is `/pt/rss.xml`.

## Home loading indicator

`src/components/HomeLoader.astro` uses the supplied circular `public/logos/ISEPOWERLOGO-circle.png` logo. Astro generates a small WebP asset for the loader. The overlay stays visible for at least 1.5 seconds and dismisses after the page has loaded, with a six-second fallback. It remains hidden without JavaScript, respects reduced-motion preferences, and dismisses on back/forward cache restoration. The minimum display duration is controlled by minimumDuration in HomeLoader.astro.
