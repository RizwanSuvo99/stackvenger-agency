# StackVenger promo video — content & scene plan

Source of truth for everything on screen: `promo-video/src/content.ts` (copy, project data, timings, audio) and `promo-video/src/theme.ts` (brand tokens). This document records where that content came from.

## Brand (from the agency site)

| Token | Value | Source |
|---|---|---|
| Background | `#020202` | `src/index.css` `--bg` |
| Accent gradient | `#008cff → #a900ff` | `--grad-btn` |
| Headline gradient | `#ffffff → #fffbbd` | `.gradient-text` |
| Display font | Space Grotesk | `--font-display` |
| Body font | Manrope | `--font-body` |
| Logo | `public/assets/icons/logo.svg`, `logo-mark.svg` | copied to `promo-video/public/brand/` |
| Tagline | "Build Smarter. Launch Faster." | `Hero.jsx` H1, `<title>` |
| Kicker | "AI-Accelerated Product Development" | `Hero.jsx` |

## All 20 projects

Data from `src/data/projects.js`. "Tech" lists only technologies named in each project's write-up. Live URLs are the ones stated in the write-ups.

| # | Project | Category | Description | Tech (named in write-up) | Live URL | Cover image | In video |
|---|---|---|---|---|---|---|---|
| 1 | **Ecommerce** | E-commerce | A bilingual online store with a Next.js storefront, NestJS API and a complete admin back office. | Next.js, React, TypeScript, Tailwind CSS, NestJS, PostgreSQL, Prisma, Redis, Stripe, Firebase, Docker, Cloudinary, Nginx, GitHub Actions | — | `/assets/images/project-ecommerce-cover.webp` | Featured #2 |
| 2 | **JMK Furniture** | Retail | A bilingual furniture showroom with WhatsApp ordering and a full content-managed admin panel. | React, TypeScript, Tailwind CSS, MongoDB, Express, Vite, Docker, Cloudinary, Nginx | jmkfurniture.duckdns.org | `/assets/images/project-jmk-cover.webp` | Featured #7 |
| 3 | **Renovate** | SaaS | A 24-page SaaS admin dashboard with a live theme customizer, page builder and full dark and light modes. | Next.js, React, TypeScript, Tailwind CSS, PostgreSQL, MongoDB | — | `/assets/images/project-renovate-cover.webp` | Montage |
| 4 | **Global Travels** | Travel | A complete flight booking platform with round-trip, one-way and multi-city search, live airport lookup, smart filters, secure checkout and downloadable invoices. | Next.js, React, Tailwind CSS | — | `/assets/images/project-globaltravels-cover.webp` | Montage |
| 5 | **ClassRoom Writers** | Education | A community blog where students publish stories, with moderated submissions, rich comments and light and dark modes. | Next.js, PostgreSQL, Prisma, Express, Docker, Cloudinary, Mantine, Nginx | classroomwriters.duckdns.org | `/assets/images/project-classroom-cover.webp` | Montage |
| 6 | **Veyborn** | E-commerce | A premium watch boutique with a flat editorial design, full dark and light modes and a complete admin back office. | Next.js, TypeScript, Tailwind CSS, NestJS, PostgreSQL, Prisma, Redis, Stripe, Docker, Cloudinary | — | `/assets/images/project-veyborn-cover.webp` | Montage |
| 7 | **CoachPro** | Coaching | A personal-brand website for an executive coach with a book store, downloadable resource library and a full admin CMS. | Next.js, React, TypeScript, Tailwind CSS, MongoDB, Cloudinary | — | `/assets/images/project-coachpro-cover.webp` | Montage |
| 8 | **Al Noor Restaurant** | Restaurant | An editorial restaurant website with a bilingual menu, order bag, WhatsApp ordering and table requests. | React, TypeScript, Tailwind CSS, Vite, GitHub Actions | alnoorresturant.com | `/assets/images/project-alnoor-cover.webp` | Montage |
| 9 | **Paradise Hotel** | Hospitality | A boutique hotel website for a mountain retreat in Nepal, with rooms and cottages, a Nepali menu, gallery and online booking requests. | React, Tailwind CSS, Vite, GitHub Actions | paradisehotel.shop | `/assets/images/project-paradise-cover.webp` | Featured #8 |
| 10 | **Green Architect & Interior** | Architecture | A lead-generating website for a Dhaka architecture and interior studio, with services, a project portfolio and a free-quote form. | React, TypeScript, Tailwind CSS, Vite, GitHub Actions | greenarchitectinterior.com | `/assets/images/project-greenarch-cover.webp` | Montage |
| 11 | **Nizam's Restaurant** | Restaurant | A heritage restaurant website for the inventor of the Kathi Roll, with a full Mughlai menu, specials, gallery and WhatsApp table booking. | React, TypeScript, Tailwind CSS, Vite, GitHub Actions | — | `/assets/images/project-nizams-cover.webp` | Montage |
| 12 | **Lotus Sweets & Bakery** | Bakery | A playful bakery storefront with a cake and sweets catalogue, custom cake requests and WhatsApp ordering. | React, TypeScript, Tailwind CSS, Express, Vite | — | `/assets/images/project-lotus-cover.webp` | Montage |
| 13 | **Topproczar** | SaaS | A modular business platform for accounting, CRM, HRM, POS and projects, with a marketing site, add-on pricing and checkout, and a powerful admin dashboard to run it all. | Stripe, Laravel | — | `/assets/images/project-topproczar-cover.webp` | Featured #4 |
| 14 | **Napotech** | Mobile App | A two-sided marketplace app where clients hire verified experts for home services, repairs, tutoring and remote work, with quotes, negotiation, milestone payments held until work is done, and a full admin console. | — (NDA, not named) | — | `/assets/images/project-napotech-cover.webp` | Featured #6 |
| 15 | **ATLISS** | Mobile App | A two-sided Flutter app where customers find nearby food trucks and order ahead, while vendors go live, manage menus and orders, and grow with insights, plus a web admin dashboard to run the platform. | Next.js, React, Tailwind CSS, Flutter, Riverpod, Firebase, Socket.IO, RevenueCat, Google Maps | — | `/assets/images/project-atliss-cover.webp` | Featured #1 |
| 16 | **LIMTLSS** | Mobile App | A dark, high-energy Flutter app for endurance athletes: elite, monthly, virtual and community challenges, Strava-synced progress, athlete sponsorships and real-life support, run from a full admin dashboard. | Flutter, Riverpod, Socket.IO, Strava | — | `/assets/images/project-limtlss-cover.webp` | Featured #3 |
| 17 | **CoachMe** | Mobile App | A sports coaching app where athletes find certified coaches, book and pay for sessions, chat, and track goals and badges, while coaches manage their schedule and earnings, all run from a full admin panel. | Stripe | — | `/assets/images/project-coachme-cover.webp` | Montage |
| 18 | **Compta JZ** | FinTech | A French accounting SaaS for freelancers and small businesses: invoices, quotes, payments, reminders and financial reports in one dashboard. | Next.js, React, TypeScript, Tailwind CSS, Docker, Chart.js | — | `/assets/images/project-comptajz-cover.webp` | Featured #5 |
| 19 | **Stability** | Mobile App | A calm, payday-based budgeting app for iOS and Android built around one number, Safe to Spend, with bills, debts, savings goals and income in one warm, simple experience. | Flutter, Riverpod, Firebase, RevenueCat | — | `/assets/images/project-stability-cover.webp` | Montage |
| 20 | **Optivo Solutions** | Consulting | A conversion-focused website for an operations consultancy, with services, role-based solutions, testimonials and a built-in free-consultation booking flow. | — (NDA, not named) | — | `/assets/images/project-optivo-cover.webp` | Montage |

No project has published metrics (users, revenue, etc.) in the codebase, so the video shows none.

### Why these 8 are featured

| Featured | Industry | Device | Why |
|---|---|---|---|
| ATLISS | Food tech | Phone | Most complex build: two-sided Flutter marketplace with real-time orders and an admin dashboard |
| Ecommerce | E-commerce | Browser | Full-stack flagship: Next.js + NestJS + PostgreSQL + Redis + Stripe |
| LIMTLSS | Fitness | Phone | Distinctive dark UI, Strava-synced challenges, real-time chat |
| Topproczar | SaaS / ERP | Browser | Largest scope: accounting, CRM, HRM and POS suite on Laravel |
| Compta JZ | FinTech | Browser | Data-rich accounting dashboard, adds a finance story |
| Napotech | Services marketplace | Phone | Two-sided marketplace with milestone payments and disputes |
| JMK Furniture | Retail | Browser | Live production site with WhatsApp ordering |
| Paradise Hotel | Hospitality | Browser | Live production site, strong photography |

Together they cover 8 different industries, both mobile (Flutter) and web (Next.js, React, Laravel), and 3 live sites. The other 12 appear in the montage.

## Scene plan (1920×1080, 30 fps, 2700 frames)

Scenes are joined by 15-frame crossfades (featured projects use 15-frame slides), so each scene's frame count includes 15 frames of overlap with the next: 2805 − 7 × 15 = **2700 frames**.

| # | Time | Scene | Frames | On-screen copy | Visual |
|---|---|---|---|---|---|
| 1 | 0:00–0:05 | Hook | 165 | "Ideas deserve **great software.**" | Word-by-word kinetic type over a fast, blurred strip of real project covers |
| 2 | 0:05–0:12 | Brand reveal | 225 | Logo · AI-ACCELERATED PRODUCT DEVELOPMENT · "Build Smarter. **Launch Faster.**" | Logo wipes in with a glow, then kicker and tagline |
| 3 | 0:12–0:25 | What we do | 405 | "Code, strategy, and AI in perfect sync." + 4 services | Heading left, services slide in one by one on the right |
| 4 | 0:25–0:55 | Featured work | 915 | Per project: index, category, name, one-liner, tech chips | Browser mockups scroll real page sections with a floating detail screen; phone mockups scroll real app screens with a parallax second phone |
| 5 | 0:55–1:05 | Portfolio montage | 315 | "20+ projects delivered" | Tilted wall of all 20 covers, counter 0 → 20 |
| 6 | 1:05–1:17 | How we work | 375 | Prototype → Build → Test → Support; "From idea to MVP in 8 weeks." | Line draws across four numbered nodes |
| 7 | 1:17–1:23 | Tech stack | 195 | "Proven tech behind every build." + 24 technologies | Chips pop in and float |
| 8 | 1:23–1:30 | Call to action | 210 | "Let's build **yours.**" · logo · Get Started | End card; the final second holds still |

### Copy sources

- Services: the four services and their descriptions in `Services.jsx` (lines shortened).
- Process: the four pillars in the About section (`About.jsx`): AI-Generated Prototypes, Accelerated Development, Smart QA Testing, Full Support.
- "From idea to MVP in 8 weeks.": site marquee (`Marquee.jsx`).
- "Get Started": the site's primary button.
- "Ideas deserve great software." and "Let's build yours.": new lines from the brief.

## TODO (in `promo-video/src/content.ts`)

| Item | Status |
|---|---|
| `company.website` | Not in the codebase. Hidden on screen until set. |
| `company.email` | Not in the codebase (only a form placeholder). Hidden on screen until set. |
| `audio.music` | Set to `audio/music.mp3`, a simple track synthesized by `npm run music` (license-free). Swap in a produced, licensed track when you have one. |
| `audio.voiceover` | Optional; none provided. |
| "20+" | The site lists exactly 20 projects; the "+" follows the brief. Change `montage.suffix` to `""` to show exactly 20. |
