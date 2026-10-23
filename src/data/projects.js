// Project detail content, mirrored from the reference project pages.
// body paragraphs are shared by every project; the first three sit above the gallery.
export const PROJECT_BODY = [
  "The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.",
  "The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.",
  "The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.",
  "Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.",
  "The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.The European languages are members of the same family."
];

export const PROJECTS = [
  {
    "slug": "ecommerce-full-stack-online-store",
    "title": "Ecommerce – Full-Stack Online Store Platform",
    "chip": "E-commerce",
    "lead": "A bilingual online store with a Next.js storefront, NestJS API and a complete admin back office.",
    "cover": "/assets/images/project-ecommerce-cover.webp",
    "galleryImgs": [
      "/assets/images/project-ecommerce-1.webp",
      "/assets/images/project-ecommerce-2.webp",
      "/assets/images/project-ecommerce-3.webp",
      "/assets/images/project-ecommerce-4.webp"
    ],
    "when": [
      "Start: December 2025",
      "End: September 2026"
    ],
    "status": "Completed",
    "authorOverride": [
      "StackVenger Team",
      "Design & Engineering",
      "/assets/icons/logo-mark.svg"
    ],
    "body": [
      "Ecommerce is a production-ready online store we designed and built end to end: a fast, mobile-first storefront for shoppers and a full back office for the team that runs it. The goal was a shop that feels premium to browse, is simple to manage day to day, and can grow from a few dozen products to thousands without a rebuild.",
      "The storefront is built with Next.js 14 (App Router), TypeScript and Tailwind CSS, with a bento-style design system that supports light and dark mode. Shoppers can browse categories and brands, filter and search the catalogue, compare product variants, save items to a wishlist and check out in English or Bangla. Cart state is kept with Zustand, and every form is validated with React Hook Form and Zod.",
      "Behind it sits a NestJS API on PostgreSQL with Prisma, organised into more than thirty modules: products and variants, inventory and stock movements, carts, orders and returns, coupons, reviews and product questions, shipping methods, CMS pages, menus and banners, email templates, audit logs and role-based access. Redis handles caching and the background email queue.",
      "Running the shop happens in the admin panel. The dashboard shows revenue, orders and stock at a glance, with live charts for sales flow and a conversion funnel in analytics. Admins manage the catalogue, fulfil orders and print invoices, run coupons and banners, edit pages and navigation, and restyle the whole storefront — colours, fonts, borders and layout — from the theme editor without touching code.",
      "Payments support Stripe cards and cash on delivery, sign-in uses JWT with refresh tokens plus Google login through Firebase, and product images are served from Cloudinary. An AI shopping assistant answers product questions using the live catalogue. The project ships as a Turborepo monorepo with Docker Compose, Nginx, GitHub Actions CI/CD, Prometheus and Grafana monitoring, unit tests and Playwright end-to-end tests."
    ],
    "faq": [
      [
        "What is the Ecommerce platform?",
        "Ecommerce is a complete online store: a customer-facing storefront for browsing and buying products, and an admin panel for managing the catalogue, orders, customers, content and store appearance. It was built as a single TypeScript monorepo so the frontend, backend and shared types stay in sync."
      ],
      [
        "Which technologies power it?",
        "The storefront uses Next.js 14, React, TypeScript, Tailwind CSS, Zustand, React Hook Form and Zod. The API is NestJS with PostgreSQL and Prisma, Redis for caching and queues, Cloudinary for images and Firebase for social login. Turborepo, Docker, Nginx and GitHub Actions handle builds and deployment."
      ],
      [
        "What payment and checkout options does it support?",
        "Checkout supports Stripe card payments and cash on delivery, with shipping methods, coupons and order tracking built in. Prices are shown in Taka (৳), and customers receive email confirmations and invoices for every order."
      ],
      [
        "Can the store team manage everything without a developer?",
        "Yes. The admin panel covers products and variants, categories and brands, inventory, orders and returns, coupons, reviews, banners, CMS pages, menus and email templates. The theme editor lets the team change colours, typography and layout of the storefront live."
      ],
      [
        "Is it ready for production traffic?",
        "It is containerised with Docker and served behind Nginx, deployed through GitHub Actions pipelines for staging and production, and monitored with Prometheus and Grafana. Health checks, audit logs, role-based access and automated unit and end-to-end tests keep it reliable as it grows."
      ]
    ],
    "heroPos": "0% 50%"
  },
  {
    "slug": "jmk-furniture-online-showroom",
    "title": "JMK Furniture – Online Showroom & Catalogue",
    "chip": "Retail",
    "lead": "A bilingual furniture showroom with WhatsApp ordering and a full content-managed admin panel.",
    "cover": "/assets/images/project-jmk-cover.webp",
    "galleryImgs": [
      "/assets/images/project-jmk-1.webp",
      "/assets/images/project-jmk-2.webp",
      "/assets/images/project-jmk-3.webp",
      "/assets/images/project-jmk-4.webp"
    ],
    "when": [
      "Start: July 2026",
      "End: September 2026"
    ],
    "status": "Live",
    "authorOverride": [
      "StackVenger Team",
      "Design & Engineering",
      "/assets/icons/logo-mark.svg"
    ],
    "body": [
      "JMK Furniture is a Chattogram-based maker of home and office furniture. They needed their catalogue online in a way that matches the feel of their showroom: calm, editorial and photo-led, rather than a crowded marketplace. We designed and built the whole thing, from the storefront and admin panel to the API and the production server, and it is now live at jmkfurniture.duckdns.org.",
      "The storefront is a React 18 and TypeScript single-page app built with Vite, Tailwind CSS and Radix UI, with Framer Motion for subtle parallax, reveal and hover-image effects. Shoppers browse more than 280 products across 38 home and office categories, filter collections, search the catalogue and read product names in English and Bangla. Instead of a cart, every product has an \"Order on WhatsApp\" and a call button, because that is how JMK's customers actually buy.",
      "Product pages carry a full gallery with lightbox, specifications, materials and SKUs, related products and a recently viewed strip. Curated collections, a showroom contact page with map and inquiry form, and content pages written in Markdown round out the site. TanStack Query keeps data fast and cached, and every page ships its own SEO title and description.",
      "Behind the shop is a purpose-built admin panel. The team manages products, a media library of almost a thousand images, categories with drag-and-drop ordering, CMS pages with a live Markdown preview and the homepage itself: each section — hero carousel, trust strip, product strips, promo cards, rooms — can be reordered, toggled and edited without a developer. An inbox collects customer inquiries and newsletter subscribers, with CSV export, and the dashboard surfaces the most-viewed products and latest inquiries.",
      "The API runs on Express 5 and MongoDB with Mongoose, sharing Zod validation schemas with the frontend through a common workspace. Admins sign in with Argon2-hashed passwords and rotating JWT refresh tokens, with role-based permissions for super admins, admins and editors, plus a full audit log. Images live on Cloudinary, email goes out through Nodemailer, and the stack is hardened with Helmet, rate limiting and structured Pino logs. It ships in Docker behind Nginx on a VPS, with daily automated database backups."
    ],
    "faq": [
      [
        "What is JMK Furniture's website?",
        "It is the online showroom for JMK Furniture, a home and office furniture maker in Chattogram. Customers can explore the full catalogue, see detailed product photos and specifications, and order or ask questions directly on WhatsApp or by phone."
      ],
      [
        "Why order on WhatsApp instead of a checkout?",
        "Furniture buyers usually want to confirm colours, sizes and delivery before paying. A WhatsApp-first flow matches how JMK already sells, so every product page opens a pre-filled chat or a call instead of a cart and payment form."
      ],
      [
        "Which technologies power it?",
        "The storefront uses React 18, TypeScript, Vite, Tailwind CSS, Radix UI, TanStack Query and Framer Motion. The API uses Express 5, MongoDB and Mongoose with shared Zod schemas, Cloudinary for images and Nodemailer for email. It is deployed with Docker and Nginx."
      ],
      [
        "Can the JMK team update the site themselves?",
        "Yes. The admin panel covers products, the media library, categories, CMS pages, site settings and the homepage layout, which can be rearranged section by section. Inquiries and subscribers arrive in an admin inbox, and every change is recorded in the audit log."
      ],
      [
        "How is the site kept secure and reliable?",
        "Admin accounts use Argon2 password hashing, rotating refresh tokens and role-based permissions. The API adds Helmet security headers, rate limiting and safe-link checks, and the production database is backed up automatically every day and kept for two weeks."
      ]
    ],
    "heroPos": "0% 50%"
  },
  {
    "slug": "renovate-saas-dashboard",
    "title": "Renovate – Customizable SaaS Admin Dashboard",
    "chip": "SaaS",
    "lead": "A 24-page dashboard template with a live theme customizer, page builder and full dark and light modes.",
    "cover": "/assets/images/project-renovate-cover.webp",
    "heroPos": "0% 50%",
    "galleryImgs": [
      "/assets/images/project-renovate-1.webp",
      "/assets/images/project-renovate-2.webp",
      "/assets/images/project-renovate-3.webp",
      "/assets/images/project-renovate-4.webp",
      "/assets/images/project-renovate-5.webp",
      "/assets/images/project-renovate-6.webp"
    ],
    "when": [
      "Start: February 2026",
      "End: April 2026"
    ],
    "status": "Completed",
    "authorOverride": [
      "StackVenger Team",
      "Design & Engineering",
      "/assets/icons/logo-mark.svg"
    ],
    "body": [
      "Renovate is a SaaS admin dashboard we built as a foundation for products that need a polished back office from day one. Instead of a static template, it is a working application: 24 pages covering overview KPIs, analytics, a customer CRM, products, orders, invoices, a calendar, a Kanban board, messages, reports, notifications and a profile area, all behind real authentication.",
      "Every screen ships in both dark and light mode. The theme is driven entirely by CSS variables, so switching modes, or choosing one of four colour presets (Emerald, Slate, Rose and Ocean), a corner radius, a typeface and a sidebar style in the live theme customizer, restyles the whole app instantly, with no rebuild or redeploy. The selected theme is saved on the server, so every user sees the same brand.",
      "The interface follows an atomic design system: atoms, molecules, organisms and templates, each documented on a built-in /design-system reference page. It is built with Next.js 14 (App Router) and strict TypeScript, Tailwind CSS, Radix UI primitives and Lucide icons, with Recharts for charts, TanStack Table for searchable, sortable data grids, @dnd-kit for drag and drop and Framer Motion for motion.",
      "Admins can build new pages without writing code. The page builder composes pages from widgets — stat cards, line, bar and pie charts, tables, rich text and activity feeds — and a catch-all route renders them instantly. The navigation builder reorders and groups the sidebar with drag and drop, and a plugin API lets third-party widgets register themselves with one call, so the dashboard can grow without touching its core.",
      "Under the hood, NextAuth handles sign-in with bcrypt-hashed passwords, and role-based access for admins, editors and viewers is enforced on the server for every route and API call. All data flows through a repository layer: it runs on a file-based lowdb store for demos and can be swapped for PostgreSQL or MongoDB without changing a single page. TanStack Query, Zustand and React Hook Form with Zod keep state and forms predictable, while Husky and commitlint guard code quality."
    ],
    "faq": [
      [
        "What is Renovate?",
        "Renovate is a production-grade SaaS admin dashboard template. It gives a new product a complete, good-looking back office — analytics, CRM, orders, invoices, calendar, Kanban, messaging and admin tools — so teams can focus on their core features instead of rebuilding dashboard basics."
      ],
      [
        "Does it support dark and light mode?",
        "Yes. Every page is designed for both. Users can toggle modes from the header, and admins can set the default along with a colour preset, radius, font and sidebar style in the live theme customizer. Everything updates instantly through CSS variables."
      ],
      [
        "Can admins add pages without a developer?",
        "Yes. The page builder lets admins create pages from ready-made widgets such as KPI cards, charts, tables and rich text, and the navigation builder places them in the sidebar with drag and drop. Developers can add new widget types through the plugin API."
      ],
      [
        "How are users and permissions handled?",
        "Authentication runs on NextAuth with hashed passwords. Each account has an admin, editor or viewer role, and those roles are checked on the server for pages and API routes, so restricted actions stay protected even if someone calls the API directly."
      ],
      [
        "Can it use a real database?",
        "Yes. Every entity goes through a repository interface. The demo uses a lightweight file-based store, and switching to PostgreSQL or MongoDB means implementing that interface once — pages, widgets and API routes stay exactly the same."
      ]
    ]
  },
  {
    "slug": "global-travels-flight-booking",
    "title": "Global Travels – Flight Booking Experience",
    "chip": "Travel",
    "lead": "A flight search and booking front end with multi-city trips, live airport search, smart filters and checkout.",
    "cover": "/assets/images/project-globaltravels-cover.webp",
    "galleryImgs": [
      "/assets/images/project-globaltravels-1.webp",
      "/assets/images/project-globaltravels-2.webp",
      "/assets/images/project-globaltravels-3.webp",
      "/assets/images/project-globaltravels-4.webp",
      "/assets/images/project-globaltravels-5.webp"
    ],
    "when": [
      "Start: April 2024",
      "End: July 2024"
    ],
    "status": "Completed",
    "authorOverride": [
      "StackVenger Team",
      "Design & Engineering",
      "/assets/icons/logo-mark.svg"
    ],
    "body": [
      "Global Travels & Tours is a travel agency that wanted its customers to plan and book flights online without calling the office. We built the complete customer-facing booking experience as a team of three developers: a clean, airline-grade interface that takes a traveller from \"where to?\" all the way to a paid ticket and invoice.",
      "The heart of the product is the search widget on the home page. Travellers switch between round trip, one way and multi-city journeys, add or remove legs, and swap origin and destination with one tap. A live airport search covers almost 9,000 airports worldwide, matching on city, airport name or IATA code. Date pickers block dates in the past, while the passenger counter separates adults, children, kids and infants alongside cabin class and a direct-flights-only switch.",
      "The results page turns a long list of fares into an easy decision. A date strip shows prices across nearby days, and a sidebar of filters narrows options by airline, budget range, number of stops, departure and arrival time of day, refundability and onboard services. A visible countdown keeps the fare hold honest, and each flight card expands into full flight details before the traveller books.",
      "Checkout is a short, reassuring flow: choose a card or bank payment, confirm the passenger details and terms, apply a coupon and review a clear trip summary with base fare, taxes and discounts in Taka. A success page confirms the payment and lets the traveller download an invoice. Account pages cover sign-up, login with Google sign-in buttons, email verification, registration confirmation and password changes.",
      "The app is built with Next.js 14 (App Router) and React, styled with Tailwind CSS and shadcn/ui components on Radix UI primitives. Search state for every trip type lives in a single React Context backed by a reducer with Immer, which keeps the multi-city logic predictable. Embla carousels power the upcoming-flight, hotel and offer sliders, date-fns and React Day Picker handle dates, and ESLint with Prettier keeps the codebase consistent."
    ],
    "faq": [
      [
        "What is Global Travels?",
        "Global Travels is the online flight booking experience for Global Travels & Tours. Customers can search flights, compare fares, filter results and pay for their ticket, all from one fast, focused website."
      ],
      [
        "Which trip types can travellers book?",
        "Round trip, one way and multi-city journeys. Multi-city trips can have extra legs added or removed, each with its own route and date, and the calendar blocks dates in the past."
      ],
      [
        "How does the airport search work?",
        "As the traveller types, the search matches against a dataset of almost 9,000 airports by city, airport name or IATA code and shows the best matches instantly, so finding a departure or arrival airport takes seconds."
      ],
      [
        "Which filters are available on the results page?",
        "Results can be filtered by airline, budget range, number of stops, departure and arrival time of day, refundable fares and onboard services, and a date strip shows prices for nearby travel dates."
      ],
      [
        "Which technologies were used?",
        "Next.js 14 with the App Router, React, Tailwind CSS, shadcn/ui and Radix UI primitives, React Context with a reducer and Immer for search state, Embla Carousel, React Day Picker and date-fns, with ESLint and Prettier for code quality."
      ]
    ]
  },
  {
    "slug": "classroom-writers-student-blogging-platform",
    "title": "ClassRoom Writers – Student Blogging Platform",
    "chip": "Education",
    "lead": "A community blog where students publish stories, with moderated submissions, rich comments and light and dark modes.",
    "cover": "/assets/images/project-classroom-cover.webp",
    "galleryImgs": [
      "/assets/images/project-classroom-1.webp",
      "/assets/images/project-classroom-2.webp",
      "/assets/images/project-classroom-3.webp",
      "/assets/images/project-classroom-4.webp",
      "/assets/images/project-classroom-5.webp",
      "/assets/images/project-classroom-6.webp"
    ],
    "when": [
      "Start: August 2024",
      "End: September 2026"
    ],
    "status": "Live",
    "authorOverride": [
      "StackVenger Team",
      "Design & Engineering",
      "/assets/icons/logo-mark.svg"
    ],
    "body": [
      "ClassRoom Writers is a blogging platform built for students: a calm, welcoming place to share stories, poems, opinions and personal experiences under the banner \"Thoughts Meet Words\". We designed and built it as a team of three, from the reading experience and the writer tools to the admin moderation suite, the API and the production server. It is live at classroomwriters.duckdns.org.",
      "Readers browse a growing library of posts with search, category filters, sorting and pagination, move through categories such as Fiction, Poetry, Lifestyle and Opinion from a carousel on the home page, and open full articles with author details, reading time and related popular posts. Signed-in members can like and favourite posts, keep a personal reading list, and join the conversation with nested comment replies that they can edit, delete or report.",
      "Any student can become a writer. Members submit their own posts through a rich-text editor and track each submission from pending to approved or rejected, with reviewer notes. Notifications let writers know when someone likes or comments on their work, and the whole site — every page, from the home hero to the admin tables — is designed for both light and dark mode with a single toggle.",
      "Editors run the platform from an admin panel. They create, edit, feature and delete posts in a Tiptap rich-text editor, review and approve student submissions, moderate reported comments, manage categories and users (including bans), and read contact messages and newsletter subscribers. The hero, footer, about and contact sections and even the site logo are editable from the panel, so the content team never needs a developer.",
      "The frontend is built with Next.js 14 and Mantine, using TanStack Query with a persisted cache and virtualised lists for fast browsing, and DOMPurify to keep user-written content safe. The backend is an Express API on PostgreSQL with Prisma, with JWT sessions, bcrypt passwords and email OTP verification for sign-up and password resets. Uploads go to Cloudinary, and the API is hardened with Helmet, rate limiting, XSS sanitising and request validation. Everything runs in Docker behind Nginx, with automatic migrations and scheduled database backups."
    ],
    "faq": [
      [
        "What is ClassRoom Writers?",
        "ClassRoom Writers is a student blogging community. Students read and publish stories, poems, opinions and essays, interact through likes, favourites and comments, and grow as writers in a moderated, safe space."
      ],
      [
        "How do students publish their own posts?",
        "Any registered member can submit a post from the rich-text editor. Submissions go to the admin team for review, and the writer can follow each request's status — pending, approved or rejected — along with any notes from the reviewer."
      ],
      [
        "Does it support dark mode?",
        "Yes. Every page, including the admin panel, is designed in both light and dark mode, and readers can switch between them from the header at any time."
      ],
      [
        "How is content kept safe?",
        "Admins review every student submission before it is published, readers can report inappropriate comments for moderation, and admins can ban accounts when needed. On the technical side, user content is sanitised and the API uses rate limiting, security headers and input validation."
      ],
      [
        "Which technologies power it?",
        "The frontend uses Next.js 14, Mantine, TanStack Query, Tiptap and Embla Carousel. The backend uses Express, PostgreSQL and Prisma, JWT and bcrypt authentication, email OTP verification, Cloudinary for images, and Docker with Nginx for deployment."
      ]
    ]
  },
  {
    "slug": "veyborn-luxury-watch-store",
    "title": "Veyborn – Luxury Watch Online Store",
    "chip": "E-commerce",
    "lead": "A premium watch boutique with a flat editorial design, full dark and light modes and a complete admin back office.",
    "cover": "/assets/images/project-veyborn-cover.webp",
    "heroPos": "0% 50%",
    "galleryImgs": [
      "/assets/images/project-veyborn-1.webp",
      "/assets/images/project-veyborn-2.webp",
      "/assets/images/project-veyborn-3.webp",
      "/assets/images/project-veyborn-4.webp",
      "/assets/images/project-veyborn-5.webp",
      "/assets/images/project-veyborn-6.webp",
      "/assets/images/project-veyborn-7.webp"
    ],
    "when": [
      "Start: September 2026",
      "End: September 2026"
    ],
    "status": "Completed",
    "authorOverride": [
      "StackVenger Team",
      "Design & Engineering",
      "/assets/icons/logo-mark.svg"
    ],
    "body": [
      "Veyborn is an online boutique for watches — Swiss luxury pieces, everyday dress and sports watches, smartwatches and couple sets. We built it on top of our full-stack e-commerce engine, then gave it a completely new identity: a flat, editorial \"watch store\" look that lets the product photography do the talking, with a coral accent, square edges, Montserrat headings and IBM Plex Sans body text.",
      "The catalogue is shaped around how people shop for watches. A two-level category tree covers men's, women's, unisex, smart, luxury and couple watches, broken down into styles such as dress, diving, chronograph, automatic, field and minimalist, each with its own cover photo. Twenty-six brands from Seiko, Casio and Mido to Apple sit across 87 watches, with sale prices, stock levels and specifications, and every category and product name is available in Bangla as well as English.",
      "Every screen was redesigned for both light and dark mode. A three-tier coral header with search, a shop listing with a category sidebar and featured picks, product pages with galleries and a sticky buy box, cart, checkout, account pages and the sign-in flow all switch cleanly between themes, and the choice is applied before the page paints so there is never a flash of the wrong mode.",
      "Store staff work from the same admin panel as the rest of the platform, restyled in the new visual language: a live dashboard with revenue, orders, conversion and a sales-flow chart, product analytics, catalogue and inventory management, order fulfilment, coupons, banners, CMS pages and menus. The theme editor ships a \"Timekeeper\" colour preset and font options, so the brand can be tuned without touching code.",
      "Under the redesign is the same production stack: a Next.js 14 storefront with TypeScript, Tailwind CSS and Zustand, a NestJS API on PostgreSQL with Prisma and Redis, Stripe and cash-on-delivery checkout, JWT and Google sign-in, and Cloudinary images. A repeatable seed script loads the whole watch catalogue in one command, so a fresh store can go from empty database to fully stocked boutique in minutes."
    ],
    "faq": [
      [
        "What is Veyborn?",
        "Veyborn is an online watch boutique. Shoppers browse luxury, dress, sports, smart and couple watches from 26 brands, compare models and buy online, while the store team manages everything from an admin panel."
      ],
      [
        "How is it different from a standard online store?",
        "It is designed specifically for watches: categories follow watch styles and movements, each category has its own cover photography, and the flat editorial look keeps attention on the products rather than on the interface."
      ],
      [
        "Does it support dark mode?",
        "Yes. The storefront, account area and admin panel were all redesigned for both light and dark mode, and the selected mode is applied instantly on load so the page never flashes the wrong theme."
      ],
      [
        "Can the team change the look of the store?",
        "Yes. The admin theme editor includes a dedicated \"Timekeeper\" preset plus colour, font, border and layout controls, so the team can adjust the brand directly from the panel."
      ],
      [
        "Which technologies power it?",
        "Next.js 14, TypeScript, Tailwind CSS and Zustand on the storefront; NestJS, PostgreSQL, Prisma and Redis on the API; Stripe and cash on delivery for payments; Cloudinary for images; and Turborepo with Docker for builds and deployment."
      ]
    ]
  },
  {
    "slug": "coachpro-executive-coaching-website",
    "title": "CoachPro – Executive Coaching Website & CMS",
    "chip": "Coaching",
    "lead": "A personal-brand website for an executive coach with a book store, downloadable resource library and a full admin CMS.",
    "cover": "/assets/images/project-coachpro-cover.webp",
    "galleryImgs": [
      "/assets/images/project-coachpro-1.webp",
      "/assets/images/project-coachpro-2.webp",
      "/assets/images/project-coachpro-3.webp",
      "/assets/images/project-coachpro-4.webp",
      "/assets/images/project-coachpro-5.webp",
      "/assets/images/project-coachpro-6.webp"
    ],
    "when": [
      "Start: January 2026",
      "End: January 2026"
    ],
    "status": "Completed",
    "authorOverride": [
      "StackVenger Team",
      "Design & Engineering",
      "/assets/icons/logo-mark.svg"
    ],
    "body": [
      "CoachPro is the online home for Dr. Sarah Mitchell, an executive coach and leadership expert. The brief was a site that builds trust in seconds and turns visitors into clients: a confident personal brand, clear services, real proof from past clients and an easy way to get in touch. We designed and built the whole platform, from the marketing pages to the content management system behind them.",
      "The home page leads with a bold \"Transform Your Life with Expert Coaching\" hero, key numbers such as clients coached, years of experience and average rating, and a grid of services covering goal setting, mindset, career navigation, leadership, communication and performance. Client testimonials with star ratings and a strong call to action guide visitors towards booking a free consultation, while subtle Framer Motion animations keep the page feeling polished.",
      "Beyond the marketing pages, the site works as a resource hub. A book store lists the coach's recommended and published books with search, category filters, price ranges and pagination. A resource library offers downloadable PDFs — worksheets, assessments, planners and guides — with categories, file sizes and download tracking. An about page tells the coach's story, and a validated contact form collects enquiries.",
      "Everything is editable from a secure admin panel. The dashboard summarises books, PDF resources, total views and downloads, with quick actions for common tasks. Admins add, edit and delete books and PDFs, upload cover images and documents with drag and drop, and update the hero, about, contact and social content directly, so the site stays current without a developer.",
      "The platform is built on Next.js 16 with React 19, TypeScript and Tailwind CSS 4, using shadcn/ui on Radix UI primitives, React Hook Form with Zod validation and Sonner notifications. Data lives in MongoDB through Mongoose, admin access is protected by NextAuth.js v5 with bcrypt-hashed passwords and route middleware, and images and PDFs are stored on Cloudinary. Server-side pagination and filtering keep the book store and library fast as the catalogue grows."
    ],
    "faq": [
      [
        "What is CoachPro?",
        "CoachPro is a professional website for an executive coach. It presents the coach's services, story and client results, and also works as a resource hub with a book store and a library of downloadable PDFs."
      ],
      [
        "Can visitors download resources?",
        "Yes. The resource library offers free worksheets, assessments, planners, guides and templates as PDFs. Visitors can search and filter by category, and every download is counted so the coach can see which resources are most popular."
      ],
      [
        "How does the coach update the website?",
        "Through a secure admin panel. The coach or their team can manage books and PDF resources, upload images and documents with drag and drop, and edit the hero, about, contact and social sections without touching code."
      ],
      [
        "How is the admin area protected?",
        "Admin pages are behind NextAuth.js authentication with hashed passwords, and route middleware blocks anyone who is not signed in from reaching the dashboard or management pages."
      ],
      [
        "Which technologies power it?",
        "Next.js 16, React 19, TypeScript, Tailwind CSS 4, shadcn/ui and Radix UI, Framer Motion, React Hook Form and Zod on the front end, with MongoDB and Mongoose, NextAuth.js v5 and Cloudinary on the back end."
      ]
    ]
  },
  {
    "slug": "al-noor-restaurant-website",
    "title": "Al Noor Restaurant – Royal Bengali Dining Website",
    "chip": "Restaurant",
    "lead": "An editorial restaurant website with a bilingual menu, order bag, WhatsApp ordering and table requests.",
    "cover": "/assets/images/project-alnoor-cover.webp",
    "galleryImgs": [
      "/assets/images/project-alnoor-1.webp",
      "/assets/images/project-alnoor-2.webp",
      "/assets/images/project-alnoor-3.webp",
      "/assets/images/project-alnoor-4.webp",
      "/assets/images/project-alnoor-5.webp",
      "/assets/images/project-alnoor-6.webp"
    ],
    "when": [
      "Start: September 2026",
      "End: September 2026"
    ],
    "status": "Live",
    "authorOverride": [
      "StackVenger Team",
      "Design & Engineering",
      "/assets/icons/logo-mark.svg"
    ],
    "body": [
      "Al Noor Restaurant (আল নূর রেস্টুরেন্ট) serves royal Mughal-Bengali food in Dhaka: dum kacchi biryani, shahi morog polao, Chittagong mezban gosht, Padma hilsa and hand-mashed bhortas. They wanted a website that feels as unhurried and crafted as their kitchen, not another generic restaurant template. We designed and built it from scratch, and it is now live at alnoorresturant.com.",
      "The design reads like a printed menu card. Parchment-cream backgrounds, high-contrast serif headlines in Cormorant Garamond, a shahi maroon and antique-gold palette and hairline borders give it an editorial, heritage feel, while large food photography does the selling. Every dish name and section heading pairs English with Bengali, and prices are shown in Taka, so the site speaks to local guests and visitors alike.",
      "The menu page lists around thirty dishes across biryani and polao, curries and gosht, river fish, bhorta and dal, breads, vegetables and sweets, with category tabs, dish descriptions, serving notes and spice levels. Guests add dishes to an order bag that slides in from the side, adjust quantities and see a running total, while a floating bag button keeps the order one tap away on any page.",
      "Instead of a payment gateway, orders go where the restaurant already works: WhatsApp. When a guest sends their bag \"to the kitchen\", the site builds a neatly formatted message with their name, phone, address, items, quantities and total, and opens it in WhatsApp ready to send. Delivery, takeaway and dine-in cards on the home page open pre-filled WhatsApp chats too, and the Visit page brings together the address, opening hours, a map link, a call button and a table request form.",
      "The site is 100% front end — no server or database to maintain. It is built with React 19, TypeScript and Vite, styled with Tailwind CSS and shadcn/ui components on Radix UI primitives for the drawer, dialogs and tabs, with React Router for pages, React Context for the order bag and Sonner for notifications. A GitHub Actions workflow builds every push and deploys the static files to the restaurant's cPanel hosting, with an .htaccess file for compression and caching."
    ],
    "faq": [
      [
        "What is the Al Noor Restaurant website?",
        "It is the official website for Al Noor, a Mughal-Bengali restaurant in Dhaka. Guests can explore the story and menu, build an order and send it on WhatsApp, or plan a visit, all from a fast, elegant site."
      ],
      [
        "How do customers place an order?",
        "They add dishes to the order bag on the menu page and enter their name, phone and address. The site then turns the order into a formatted WhatsApp message to the restaurant, so the kitchen receives everything it needs in one chat."
      ],
      [
        "Is the menu available in Bengali?",
        "Yes. Every dish and heading is shown in both English and Bengali, with prices in Taka, so the site feels natural to local guests and is still easy for visitors to read."
      ],
      [
        "Can guests book a table?",
        "The Visit page has a table request form for name, phone, date, time, party size and notes, alongside the restaurant's phone number and opening hours. Guests who prefer to message can start a dine-in chat on WhatsApp straight from the home page."
      ],
      [
        "Why is there no backend?",
        "A front-end-only site has no servers or databases to run, patch or pay for. Orders reach the restaurant through WhatsApp and phone, which is how they already operate, and the static build deploys automatically to their existing cPanel hosting."
      ]
    ]
  },
  {
    "slug": "paradise-hotel-himalayan-resort",
    "title": "Paradise Hotel – Himalayan Hotel & Resort Website",
    "chip": "Hospitality",
    "lead": "A boutique hotel website for a mountain retreat in Nepal, with rooms and cottages, a Nepali menu, gallery and online booking requests.",
    "cover": "/assets/images/project-paradise-cover.webp",
    "galleryImgs": [
      "/assets/images/project-paradise-1.webp",
      "/assets/images/project-paradise-2.webp",
      "/assets/images/project-paradise-3.webp",
      "/assets/images/project-paradise-4.webp",
      "/assets/images/project-paradise-5.webp",
      "/assets/images/project-paradise-6.webp"
    ],
    "when": [
      "Start: September 2026",
      "End: September 2026"
    ],
    "status": "Live",
    "authorOverride": [
      "StackVenger Team",
      "Design & Engineering",
      "/assets/icons/logo-mark.svg"
    ],
    "body": [
      "Paradise Hotel is a stone-built hotel in Beni, Myagdi, at the gateway to the Annapurna and Dhaulagiri trekking routes in Nepal. They needed a website that captures the warmth of a small mountain hotel and turns travellers into guests: show the rooms, the food and the setting, and make it effortless to ask for a booking. We designed and built it end to end, and it is live at paradisehotel.shop.",
      "The look is calm and grounded, inspired by the Himalayas: deep forest green, warm gold and cream, Playfair Display headlines over Inter body text, and large photography of the hotel, its rooms and the mountains. The home page opens with \"Your Himalayan Home in the Mountains\", then moves through rooms and cottages, the reasons to stay — Wi-Fi, mountain views, a Nepali kitchen, trek support, friendly service and free parking — signature dishes, guest testimonials and a photo gallery carousel.",
      "The Rooms page splits accommodation into rooms in the main building and private garden cottages, nine options in all, each with its nightly price in Nepali rupees, guest capacity, description and amenities, plus Book Now and Enquire buttons. A Foods page presents nine authentic dishes, from Dal Bhat to Newari cuisine and Thukpa, with prices, and the Gallery and About pages tell the story of the hotel and its surroundings.",
      "Booking is a simple, human process. Guests fill in their name, phone, email, address, arrival and departure dates, number of adults and children and any special requests. The form validates every field, sends the request straight to the hotel's inbox, and explains what happens next: the team confirms availability and replies directly, with no card details or payment taken online. A contact form works the same way for general questions.",
      "The site is a fast static build with no server to maintain, made with React 18, Vite 5 and Tailwind CSS 3, shadcn/ui components on Radix UI primitives, React Router, Embla Carousel and React Hook Form with Zod validation. Form submissions are delivered by email through Web3Forms. All content — rooms, prices, dishes, gallery, contact details and copy — lives in simple config files, so the hotel can update the site and a GitHub Actions workflow rebuilds and deploys it to cPanel over FTP on every push."
    ],
    "faq": [
      [
        "What is the Paradise Hotel website?",
        "It is the official website for Paradise Hotel in Beni, Myagdi, Nepal. Travellers can explore rooms, cottages, food and the hotel's surroundings, and send a booking request or question directly to the hotel."
      ],
      [
        "How do guests book a room?",
        "Guests fill in the booking form with their dates, party size, contact details and any special requests. The request goes straight to the hotel by email, and the team replies to confirm availability. No payment or card details are taken online."
      ],
      [
        "What accommodation is listed?",
        "Nine options across rooms in the main building and private garden cottages, each with its nightly price in Nepali rupees, guest capacity, amenities and photos, so guests can compare before they ask."
      ],
      [
        "Can the hotel update the website itself?",
        "Yes. Rooms, prices, dishes, gallery images, contact details and page copy all live in simple configuration files. After an edit, the site rebuilds and deploys automatically, with no code changes needed."
      ],
      [
        "Which technologies power it?",
        "React 18, Vite 5, Tailwind CSS 3, shadcn/ui and Radix UI, React Router, Embla Carousel, React Hook Form and Zod, Web3Forms for email delivery, and GitHub Actions for automatic deployment to cPanel."
      ]
    ],
    "heroPos": "0% 50%"
  },
  {
    "slug": "green-architect-interior-studio",
    "title": "Green Architect & Interior – Design Studio Website",
    "chip": "Architecture",
    "lead": "A lead-generating website for a Dhaka architecture and interior studio, with services, a project portfolio and a free-quote form.",
    "cover": "/assets/images/project-greenarch-cover.webp",
    "galleryImgs": [
      "/assets/images/project-greenarch-1.webp",
      "/assets/images/project-greenarch-2.webp",
      "/assets/images/project-greenarch-3.webp",
      "/assets/images/project-greenarch-4.webp",
      "/assets/images/project-greenarch-5.webp",
      "/assets/images/project-greenarch-6.webp"
    ],
    "when": [
      "Start: July 2026",
      "End: July 2026"
    ],
    "status": "Live",
    "authorOverride": [
      "StackVenger Team",
      "Design & Engineering",
      "/assets/icons/logo-mark.svg"
    ],
    "body": [
      "Green Architect & Interior is a design-build studio in Dhaka, founded in 2016, that takes projects from the first sketch to the final styling: homes, offices, restaurants, showrooms, landscapes and renovations. They needed a website that looks as considered as their work and brings in qualified enquiries every week. We designed and built it, and it is live at greenarchitectinterior.com.",
      "The design pairs a deep green brand colour with warm neutrals, refined serif headlines and generous whitespace, so the studio's photography and drawings take centre stage. The home page opens with \"Designing Inspiring — From Concept to Completion\" next to a \"Talk to a Design Consultant\" form, then moves through a strip of client logos, the studio's story and key numbers, its core services, client reviews and a closing call to action.",
      "A dedicated Services page explains each of the seven services — architectural design, home, office, restaurant and showroom interiors, landscape design and renovation — with its own image, summary and detailed description. The Portfolio page separates architectural projects from interior work and opens every image in a full-screen lightbox with next and previous controls and a thumbnail strip, so visitors can browse the studio's work like a printed portfolio.",
      "Every page is built to convert. The free-quotation form asks for the visitor's name, phone, email, property address and space size, validates each field, and delivers the enquiry straight to the studio's inbox. Floating WhatsApp and call buttons follow visitors down every page, the contact page adds office hours and an embedded map, and FAQ and legal pages answer common questions before a visitor even asks.",
      "The site is built with React 19, TypeScript and Vite, styled with Tailwind CSS 4 and shadcn/ui components on Radix UI, with React Router for pages, Framer Motion for scroll-reveal animations, React Hook Form with Zod validation and Sonner notifications. Form submissions are emailed through Web3Forms, so there is no server to maintain, and a GitHub Actions workflow builds the site and deploys it to cPanel over FTP on every push."
    ],
    "faq": [
      [
        "What is the Green Architect & Interior website?",
        "It is the official website for Green Architect & Interior, a design-build studio in Dhaka. It presents the studio's services and portfolio and turns visitors into enquiries through a free-quotation form, WhatsApp and phone."
      ],
      [
        "Which services does it showcase?",
        "Seven core services: architectural design, home interior, office interior, restaurant interior, showroom interior, landscape design and renovation, each with its own image and detailed description."
      ],
      [
        "How can visitors browse the portfolio?",
        "The portfolio is split into architectural and interior projects. Clicking any image opens a full-screen lightbox with next and previous controls and a thumbnail strip, so visitors can move through the work quickly."
      ],
      [
        "How do enquiries reach the studio?",
        "The free-quotation form collects the visitor's name, phone, email, property address and space size and emails it straight to the studio. Floating WhatsApp and call buttons on every page offer an instant alternative."
      ],
      [
        "Which technologies power it?",
        "React 19, TypeScript, Vite, Tailwind CSS 4, shadcn/ui and Radix UI, React Router, Framer Motion, React Hook Form and Zod, Web3Forms for email delivery, and GitHub Actions for automatic deployment to cPanel."
      ]
    ]
  },
  {
    "slug": "nizams-restaurant-kolkata",
    "title": "Nizam's Restaurant – Heritage Kolkata Restaurant Website",
    "chip": "Restaurant",
    "lead": "A heritage restaurant website for the inventor of the Kathi Roll, with a full Mughlai menu, specials, gallery and WhatsApp table booking.",
    "cover": "/assets/images/project-nizams-cover.webp",
    "heroPos": "0% 50%",
    "galleryImgs": [
      "/assets/images/project-nizams-1.webp",
      "/assets/images/project-nizams-2.webp",
      "/assets/images/project-nizams-3.webp",
      "/assets/images/project-nizams-4.webp",
      "/assets/images/project-nizams-5.webp",
      "/assets/images/project-nizams-6.webp"
    ],
    "when": [
      "Start: July 2026",
      "End: July 2026"
    ],
    "status": "Completed",
    "authorOverride": [
      "StackVenger Team",
      "Design & Engineering",
      "/assets/icons/logo-mark.svg"
    ],
    "body": [
      "Nizam's is a Kolkata institution: open since 1932 on Hogg Street in the New Market area, and famous as the inventor of the Kathi Roll. A restaurant with that much history needed a website that feels like part of it, not a generic template. We designed and built a site that carries the family's legacy online and makes it easy for guests to explore the menu and book a table.",
      "The design takes its cues from the restaurant itself and from old Kolkata. A warm cream background with a subtle woven texture, coral-red calls to action, gold rules and Mughal-arch ornaments frame every section, and headings are set in an elegant script font so each part of the page reads like a printed paper menu. Real photography of the dining hall, the rolls and the biryani does the rest.",
      "The full menu is organised into twelve categories and more than seventy dishes, from starters, mutton and chicken curries and dum biryani to the signature kebab rolls, breads, snacks and desserts. Each category opens as an accordion with prices and vegetarian badges, so guests can scan quickly on any screen. A separate Specials page highlights the most-loved rolls and biryanis, and festival offer cards and an \"Unlimited Kathi Roll Feast\" banner promote seasonal deals.",
      "The Our Story page tells the Nizam's legacy alongside the restaurant's archive material, while the Gallery shows the dining hall, the frontage and the kitchen team. Guest reviews, an autoplaying video section, an embedded Google map with address and opening hours, and a contact form round out the experience. Booking a table takes a few taps: guests fill in their name, phone, date, time, party size and requests, and the site opens a pre-written WhatsApp message to the restaurant.",
      "The site is a lightweight React 18 single-page app built with TypeScript and Vite, styled with Tailwind CSS through a dedicated set of design tokens, with React Router for pages and Lucide icons. All content — menu, specials, gallery, reviews and story — lives in simple JSON files, so it can be updated without touching components. A sticky header that hides on scroll, a mobile bottom action bar, a floating WhatsApp button and back-to-top control keep key actions close at hand, and a GitHub Actions workflow builds and deploys the site to cPanel over FTP."
    ],
    "faq": [
      [
        "What is the Nizam's Restaurant website?",
        "It is the website for Nizam's, the Kolkata restaurant known as the inventor of the Kathi Roll since 1932. Guests can read its story, browse the full menu and specials, see the gallery and book a table."
      ],
      [
        "How does table booking work?",
        "Guests enter their name, phone, date, time, number of guests and any requests in the booking form. The site turns these into a ready-to-send WhatsApp message to the restaurant, so the team can confirm the table directly."
      ],
      [
        "How is the menu organised?",
        "Into twelve categories with more than seventy dishes, from starters and curries to biryani, kebab rolls, breads, snacks and desserts. Each category expands as an accordion showing prices and vegetarian badges."
      ],
      [
        "Can the restaurant update its menu and offers?",
        "Yes. The menu, specials, gallery, reviews and story are stored in simple JSON data files, so prices, dishes and offers can be changed without editing any page code."
      ],
      [
        "Which technologies power it?",
        "React 18, TypeScript and Vite, Tailwind CSS with custom design tokens, React Router and Lucide icons, with GitHub Actions deploying the static build to cPanel."
      ]
    ]
  },
  {
    "slug": "lotus-sweets-and-bakery",
    "title": "Lotus Sweets & Bakery – Cake & Sweets Storefront",
    "chip": "Bakery",
    "lead": "A playful bakery storefront with a cake and sweets catalogue, custom cake requests and WhatsApp ordering.",
    "cover": "/assets/images/project-lotus-cover.webp",
    "galleryImgs": [
      "/assets/images/project-lotus-1.webp",
      "/assets/images/project-lotus-2.webp",
      "/assets/images/project-lotus-3.webp",
      "/assets/images/project-lotus-4.webp",
      "/assets/images/project-lotus-5.webp",
      "/assets/images/project-lotus-6.webp"
    ],
    "when": [
      "Start: July 2026",
      "End: July 2026"
    ],
    "status": "Completed",
    "authorOverride": [
      "StackVenger Team",
      "Design & Engineering",
      "/assets/icons/logo-mark.svg"
    ],
    "body": [
      "Lotus Sweets & Bakery is a family bakery on Galli no. 5 in Mahendranagar, Kanchanpur, Nepal, making celebration cakes and traditional sweets fresh every day. Most of their orders already happened on the phone and WhatsApp, so the brief was a website that shows off the cakes, makes choosing easy and turns every order into a ready-to-send WhatsApp message to the shop.",
      "The look is warm, pink and hand-made, with the tagline \"Baked this morning. Gone by tonight.\" Rounded cards, doodled accents, a scrolling ribbon of favourites and real photos of Lotus cakes give it the feel of a neighbourhood bakery rather than a chain. The home page moves from today's cakes to how ordering works, custom orders, the sweets tray, a gallery teaser and a call to visit the shop.",
      "Shoppers browse two catalogues — cakes and sweets — with prices in Nepali rupees, bestseller and premium tags, and product pages for each item. They add items to a cart that is saved in the browser, choose a payment mode such as cash on delivery, bank transfer, eSewa, remittance or PayPal, and send the whole order to the bakery on WhatsApp. \"The Bake Book\" gallery collects 214 photos of past celebration cakes, chapter by chapter.",
      "Custom cakes get their own guided request form for name, phone, email, delivery date, flavour, the message to write on the cake and any notes. A track-order page lets customers ask about an order with its reference number, and feedback, contact, location, FAQ and legal pages cover the rest. Every form is validated before it opens a pre-filled WhatsApp chat, so the bakery never has to manage a separate order database.",
      "The storefront is built with React 18, TypeScript and Vite, styled with Tailwind CSS and shadcn/ui components on Radix UI, with React Router, a persisted Zustand cart, Zod validation and Sonner notifications. A small Express server serves the production build, and a Sharp-powered script turns the bakery's raw photos into optimised WebP thumbnails and full-size images with a manifest. The project is covered by Vitest unit tests and a Playwright end-to-end suite."
    ],
    "faq": [
      [
        "What is the Lotus Sweets & Bakery website?",
        "It is the online storefront for Lotus Sweets & Bakery in Mahendranagar, Nepal. Customers browse cakes and sweets, build an order, request a custom cake and send everything to the bakery on WhatsApp."
      ],
      [
        "How do customers place an order?",
        "They add cakes or sweets to the cart, enter their name and phone, choose a payment mode and send the order. The site creates a formatted WhatsApp message with every item and the subtotal, ready for the bakery to confirm."
      ],
      [
        "Can customers order a custom cake?",
        "Yes. The custom cake form collects the delivery date, flavour, the message to write on the cake and any notes, then sends the request to the bakery on WhatsApp so they can discuss the design."
      ],
      [
        "Which payment options are listed?",
        "Cash on delivery, bank transfer, eSewa, remittance and PayPal. The customer picks one when sending the order, and the bakery confirms the details on WhatsApp."
      ],
      [
        "Which technologies power it?",
        "React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui and Radix UI, React Router, Zustand, Zod and Sonner, an Express server for production, Sharp for image processing, and Vitest with Playwright for testing."
      ]
    ],
    "heroPos": "0% 50%"
  },
  {
    "slug": "comptajz-accounting-invoicing-dashboard",
    "title": "Compta JZ – Smart Accounting & Invoicing Dashboard",
    "chip": "FinTech",
    "lead": "A French accounting SaaS for freelancers and small businesses: invoices, quotes, payments, reminders and financial reports in one dashboard.",
    "cover": "/assets/images/project-comptajz-cover.webp",
    "heroPos": "0% 50%",
    "galleryImgs": [
      "/assets/images/project-comptajz-1.webp",
      "/assets/images/project-comptajz-2.webp",
      "/assets/images/project-comptajz-3.webp",
      "/assets/images/project-comptajz-4.webp",
      "/assets/images/project-comptajz-5.webp",
      "/assets/images/project-comptajz-6.webp"
    ],
    "when": [
      "Start: April 2026",
      "End: April 2026"
    ],
    "status": "Completed",
    "authorOverride": [
      "StackVenger Team",
      "Design & Engineering",
      "/assets/icons/logo-mark.svg"
    ],
    "body": [
      "Compta JZ is a French-language accounting platform for freelancers, independents and small companies. Its promise is simple: manage invoices, payments, suppliers, clients and financial dashboards in one secure, easy-to-use space, so owners spend less time on paperwork and always know where their numbers stand. We built the front end from the project's Figma designs: the marketing site and the complete user dashboard.",
      "The marketing site introduces the product with a clear hero, a \"Pour qui est Compta JZ ?\" section for each type of user, a four-step onboarding story (\"Votre comptabilité en 4 étapes\") and a pricing page with Basic and Pro plans, monthly or yearly billing. FAQ, contact, sign-up and login pages complete the public side, all in a soft glass-and-gradient visual style.",
      "Inside, the dashboard (\"Tableau de bord\") opens with a financial overview — revenue, unpaid receivables and total debts — next to top clients, a revenue chart comparing sales and expenses, upcoming reminders and the latest invoices. Users create invoices, quotes and credit notes (facture, devis and avoir) from guided forms with VAT details, payment terms and due dates, preview them before sending, and manage clients and suppliers with searchable, filterable tables.",
      "Money tracking is built in. The Paiements page totals income, expenses and net balance and lists every transaction with its status. Rappels groups overdue, upcoming and partially paid invoices and lets users send a reminder in one click. The Compte de résultat page produces an income statement for a chosen company, fiscal year and period, with sales, costs, result and margins, and exports it to PDF. Pro users also get a monthly summary with accounting exports in CSV and FEC formats for their accountant.",
      "The front end is built with Next.js 16 and React 19 in TypeScript, styled with Tailwind CSS and shadcn/ui on Radix UI primitives. Chart.js powers the dashboards, React Hook Form handles every form, React PDF, jsPDF and html2canvas generate documents, PapaParse handles CSV exports and GSAP adds motion to the marketing pages. It talks to the backend through an Axios service layer with cookie-based sessions, and ships with a Dockerfile and Docker Compose setup for deployment."
    ],
    "faq": [
      [
        "What is Compta JZ?",
        "Compta JZ is an online accounting and invoicing platform in French for freelancers and small businesses. It brings invoices, quotes, payments, reminders, clients, suppliers and financial reports together in one dashboard."
      ],
      [
        "Which documents can users create?",
        "Invoices, quotes and credit notes. Each one is built from a guided form with client details, VAT information, payment method, payment terms and due date, and can be previewed before it is sent."
      ],
      [
        "How does it help with unpaid invoices?",
        "The Rappels page groups invoices that are overdue, due soon or partially paid, and users can send a payment reminder to the client in one click. The dashboard also shows the total of unpaid receivables at a glance."
      ],
      [
        "Can users export their accounts?",
        "Yes. The income statement exports to PDF, and on the Pro plan the monthly summary exports accounting data in CSV and FEC formats, ready to share with an accountant."
      ],
      [
        "Which technologies power it?",
        "Next.js 16, React 19 and TypeScript with Tailwind CSS, shadcn/ui and Radix UI, Chart.js for charts, React Hook Form for forms, React PDF, jsPDF and html2canvas for documents, PapaParse for CSV, GSAP for animation, and Docker for deployment."
      ]
    ]
  },
  {
    "slug": "atliss-food-truck-mobile-app",
    "title": "ATLISS – Food Truck Discovery & Vendor Mobile App",
    "chip": "Mobile App",
    "lead": "A two-sided Flutter app where customers find nearby food trucks and order ahead, while vendors go live, manage menus and orders, and grow with insights, plus a web admin dashboard to run the platform.",
    "cover": "/assets/images/project-atliss-cover.webp",
    "galleryImgs": [
      "/assets/images/project-atliss-1.webp",
      "/assets/images/project-atliss-2.webp",
      "/assets/images/project-atliss-3.webp",
      "/assets/images/project-atliss-4.webp",
      "/assets/images/project-atliss-5.webp",
      "/assets/images/project-atliss-6.webp",
      "/assets/images/project-atliss-7.webp",
      "/assets/images/project-atliss-8.webp"
    ],
    "when": [
      "Start: July 2026",
      "End: September 2026"
    ],
    "status": "Completed",
    "authorOverride": [
      "StackVenger Team",
      "Design & Engineering",
      "/assets/icons/logo-mark.svg"
    ],
    "body": [
      "ATLISS (\"Where Food Trucks Live!\") is a cross-platform mobile app that connects people with the street food around them. One app serves two audiences. Customers discover food trucks near them, browse live menus and order ahead for pickup. Vendors run their truck from their phone: they go live with one tap, take orders and see how their business is performing. We built the Flutter app for iOS and Android from the project's Figma designs, plus a companion web dashboard (StreetFair) that the operations team uses to manage the whole platform.",
      "The customer side opens on a personalised home screen: \"What are you craving for today?\". It has cuisine categories, a \"What's near me\" carousel, recommendations and search across both food and trucks. Each truck has a profile with its menu, info, opening hours, gallery and reviews, and one tap gives map directions. Dishes support size variations and add-ons. The cart groups items by truck, an order timeline tracks the order from confirmed to ready for pickup, and customers can rate their meal and leave tagged reviews. Favourites, notifications and an English/Spanish language switch complete the experience.",
      "For vendors, the home screen is a live control panel. A Go Live toggle shows the truck's location, and today's sales and order counts sit next to the incoming orders. Vendors manage menu categories and items with photos, availability switches, prep times and add-ons, then move orders through Pending, Active and History. Before selling, every vendor completes in-app verification: they upload business documents, take a photo of a government ID and a selfie, and ML Kit text and face detection check them on the device before submission.",
      "The Insights area is where vendors grow. Charts show revenue, peak hours, sales by location and best-selling areas, while an AI Guidance tab and an Events tab surface opportunities like nearby festivals and high-traffic spots. These features are tiered by subscription: Starter, Pro and Elite plans are sold through RevenueCat, which works with App Store and Google Play billing. Under the hood the app uses Riverpod for state, Dio for the REST API, Socket.IO for real-time notifications, Firebase Authentication with Google and Apple sign-in, Firebase Cloud Messaging for push, and Google Maps with geolocation.",
      "The StreetFair admin dashboard is built with Next.js 16, React 19, Tailwind CSS 4 and shadcn/Radix UI. It gives the team a single view of the platform: vendor, customer and active-truck totals, platform revenue and vendor-status charts, growth analytics and leaderboards, vendor verification and account management, customer management, and subscription plans. Data flows through TanStack Query and Zustand, charts use Recharts, maps use Leaflet, and forms are validated with React Hook Form and Zod. Together, the app and the dashboard make up a complete food-truck marketplace that is ready to launch."
    ],
    "faq": [
      [
        "Which platforms does ATLISS run on?",
        "ATLISS is a single Flutter codebase that ships to both iOS and Android, with layouts that adapt to different screen sizes."
      ],
      [
        "How does one app serve customers and vendors?",
        "On first launch, users choose whether they're a Customer or a Vendor. Each role gets its own onboarding, navigation and screens, while sign-in, notifications and settings are shared."
      ],
      [
        "How are vendors verified?",
        "Vendors upload their business documents and complete identity checks in the app: a photo of their government ID and a selfie. ML Kit text and face detection check these on the device, and the admin team then reviews them in the StreetFair dashboard."
      ],
      [
        "How do subscriptions work?",
        "Vendors can upgrade to Starter, Pro or Elite plans for deeper insights, AI guidance and featured placement. Purchases run through RevenueCat on top of App Store and Google Play billing."
      ],
      [
        "Is the app available in multiple languages?",
        "Yes. Every screen is fully localised in English and Spanish, and users can switch language at any time from their settings."
      ]
    ]
  },
  {
    "slug": "stability-payday-personal-finance-app",
    "title": "Stability – Payday-Based Personal Finance App",
    "chip": "Mobile App",
    "lead": "A calm, payday-based budgeting app for iOS and Android built around one number, Safe to Spend, with bills, debts, savings goals and income in one warm, simple experience.",
    "cover": "/assets/images/project-stability-cover.webp",
    "heroPos": "0% 50%",
    "galleryImgs": [
      "/assets/images/project-stability-1.webp",
      "/assets/images/project-stability-2.webp",
      "/assets/images/project-stability-3.webp",
      "/assets/images/project-stability-4.webp",
      "/assets/images/project-stability-5.webp",
      "/assets/images/project-stability-6.webp"
    ],
    "when": [
      "Start: September 2026",
      "End: October 2026"
    ],
    "status": "Completed",
    "authorOverride": [
      "StackVenger Team",
      "Design & Engineering",
      "/assets/icons/logo-mark.svg"
    ],
    "body": [
      "Stability is a personal finance app for people who don't want to live inside a spreadsheet. Instead of dozens of charts and categories, it answers one question every payday: how much is actually safe to spend? We built the app in Flutter for iOS and Android from the project's designs. It has a warm cream-and-brown palette, Lora serif typography and gentle staggered animations that make money feel less stressful.",
      "Onboarding is a guided, two-minute setup that asks one question at a time. How does your income come in: the same every paycheck, varying a little, or varying a lot from gig work, tips or commissions? How often are you paid, and roughly how much? From there it asks about rent or mortgage, a car payment, other regular bills, any debts and anything you're saving for. Each amount can be entered monthly or matched to your pay frequency, and the flow ends with a personal Stability profile that shows your Safe to Spend straight away.",
      "The home screen puts that number front and centre with a soft glow and a greeting for the time of day. Below it, a Payday Breakdown shows exactly where the paycheck goes: the amount going to bills, the number of bills, and what's left. Behind the scenes, Safe to Spend is calculated from your monthly income minus bills and savings. Weekly, fortnightly and twice-monthly pay are all normalised to the same scale, so the figure stays accurate whatever your pay schedule.",
      "Five tabs cover the rest of a person's money. Pay manages income sources and commitments. Bills lists every recurring bill with its amount and due day. Balances tracks debts like student loans and credit cards. Goals holds savings targets such as an emergency fund or holiday gifts, along with their contributions. Everything can be added, edited and deleted through clean bottom sheets. Accounts support email sign-up with OTP verification, password reset by code, and Google and Apple sign-in through Firebase Authentication. Settings covers profile editing with photo upload, notification preferences, terms, privacy and account deletion.",
      "Under the hood, Stability uses Riverpod for state management, Dio for the REST API, SharedPreferences for the session and connectivity checks for offline handling. Premium access runs through RevenueCat, which handles a \"Choose your plan\" paywall, purchases and restores across the App Store and Google Play. The result is a finished, store-ready app that turns budgeting into one clear number people can trust."
    ],
    "faq": [
      [
        "What is \"Safe to Spend\"?",
        "It's the money left from your paycheck after bills, debt payments and savings goals are covered. Stability recalculates it whenever your income, bills or goals change, so you always know what you can spend freely."
      ],
      [
        "Does it work with irregular income?",
        "Yes. During setup, users choose whether their income is steady, varies a little or varies a lot, and how often they're paid: weekly, every two weeks, twice a month or monthly. The app normalises everything so the number stays realistic."
      ],
      [
        "Which platforms does Stability support?",
        "It's a single Flutter codebase that ships to both iOS and Android, with layouts scaled from a 375×812 design for consistent spacing on every device."
      ],
      [
        "How do users sign in?",
        "With email and password (verified by a one-time code), or with Google or Apple sign-in through Firebase Authentication. Forgotten passwords are reset with an emailed OTP."
      ],
      [
        "How are premium features sold?",
        "Through RevenueCat. Users see a \"Choose your plan\" screen, purchase with native App Store or Google Play billing, and can restore their purchase on a new device."
      ]
    ]
  },
  {
    "slug": "limtlss-endurance-challenge-app",
    "title": "LIMTLSS – Endurance Challenge & Sponsorship App",
    "chip": "Mobile App",
    "lead": "A dark, high-energy Flutter app for endurance athletes: elite, monthly, virtual and community challenges, Strava-synced progress, athlete sponsorships and real-life support, run from a full admin dashboard.",
    "cover": "/assets/images/project-limtlss-cover.webp",
    "galleryImgs": [
      "/assets/images/project-limtlss-1.webp",
      "/assets/images/project-limtlss-2.webp",
      "/assets/images/project-limtlss-3.webp",
      "/assets/images/project-limtlss-4.webp",
      "/assets/images/project-limtlss-5.webp",
      "/assets/images/project-limtlss-6.webp",
      "/assets/images/project-limtlss-7.webp",
      "/assets/images/project-limtlss-8.webp",
      "/assets/images/project-limtlss-9.webp",
      "/assets/images/project-limtlss-10.webp"
    ],
    "when": [
      "Start: August 2026",
      "End: October 2026"
    ],
    "status": "Completed",
    "authorOverride": [
      "StackVenger Team",
      "Design & Engineering",
      "/assets/icons/logo-mark.svg"
    ],
    "body": [
      "LIMTLSS is a mobile platform for people who want to push past their limits: ultra runners, long-distance cyclists, open-water swimmers and anyone chasing their next big feat of endurance. Its promise is right on the home screen: \"Where ordinary ends and extraordinary begins.\" We built the iOS and Android app in Flutter from the project's designs. It has a bold black-and-yellow interface, Oswald display type and screens tuned for quick, focused use before and after a session.",
      "Everything is organised around \"Four Paths to Greatness\". Elite Challenges are legendary and mythic feats for athletes ready for the extreme. Monthly Challenges set one main event plus generic benchmarks each month, like The Vertical 1000 or a 5K elevation run. Virtual Adventures let users complete historic routes like the Kokoda Trail from anywhere, with distance, elevation, checkpoints and the story behind the trail. Community Challenges are designed by the athletes themselves. Every challenge can be started, paused, resumed or left, and comes with a checkpoints log, a leaderboard and a group chat.",
      "With Design Your Challenge, any user can propose a new challenge. They pick a category (running, cycling, swimming, HIIT or other), then fill in the title, description, activity type, difficulty, distance and time limit. A timeline of checkpoints is added step by step with a live preview, and the challenge is then sent for admin approval before it goes live in the Community Hub. Real-Life Support adds nutrition plans, route planning, training plans with pacing charts and transport logistics, with a Request a Quote form for bespoke support packages.",
      "The Sponsorship Hub turns ambition into funding. Athletes create a sponsorship challenge with a funding goal and the gear they need, such as footwear, nutrition, transport or supplements. Brands browse open listings, see progress towards the goal and contact the athlete directly. Activity tracking connects to Strava through OAuth, with auto-sync and Wi-Fi-only options, and there are connection cards for Garmin and Apple Health. Profiles show challenges attempted, completed and incomplete, along with active sponsorships, history and notification preferences.",
      "Under the hood, the app uses Riverpod for state, GoRouter for navigation, Dio with JWT-authenticated requests, Socket.IO for real-time challenge chat, Google sign-in, and email OTP flows for sign-up and password reset. Lottie, shimmer and pull-to-refresh keep it feeling alive. The platform is run from a dedicated admin dashboard. It covers headline stats and participation charts, athlete management, challenge creation with checkpoints and roadmaps, approval of community challenges, quotation requests, support plan uploads, sponsorship review and chat moderation, all in the same dark LIMTLSS style."
    ],
    "faq": [
      [
        "What types of challenges does LIMTLSS offer?",
        "Four: Elite challenges for extreme athletes, Monthly challenges with a main event and benchmarks, Virtual adventures along historic routes like the Kokoda Trail, and Community challenges created by users."
      ],
      [
        "How is progress tracked?",
        "Athletes connect Strava with a secure OAuth sign-in, and their runs, rides and swims sync automatically to their active challenges. Auto-sync and Wi-Fi-only sync can be switched on or off."
      ],
      [
        "Can users create their own challenges?",
        "Yes. The Design Your Challenge flow walks them through the details, difficulty and a timeline of checkpoints. Submitted challenges are reviewed by admins before they appear in the Community Hub."
      ],
      [
        "How do sponsorships work?",
        "Athletes publish a sponsorship challenge with a funding goal and the support they need. Brands can browse listings, track how much has been raised, and contact the athlete directly from the app."
      ],
      [
        "How is the platform managed?",
        "Through an admin dashboard for athletes, challenges, community approvals, quotation requests, support plans, sponsorships and chat moderation, with live stats and participation charts."
      ]
    ]
  },
  {
    "slug": "napotech-expert-services-marketplace",
    "title": "Napotech – Expert Services Marketplace App & Admin Console",
    "chip": "Mobile App",
    "lead": "A two-sided marketplace where clients hire verified experts for home services, repairs, tutoring and remote work, with quotes, negotiation, escrow-style milestone payments and a full admin console.",
    "cover": "/assets/images/project-napotech-cover.webp",
    "galleryImgs": [
      "/assets/images/project-napotech-1.webp",
      "/assets/images/project-napotech-2.webp",
      "/assets/images/project-napotech-3.webp",
      "/assets/images/project-napotech-4.webp",
      "/assets/images/project-napotech-5.webp",
      "/assets/images/project-napotech-6.webp",
      "/assets/images/project-napotech-7.webp",
      "/assets/images/project-napotech-8.webp",
      "/assets/images/project-napotech-9.webp",
      "/assets/images/project-napotech-10.webp"
    ],
    "when": [
      "Start: September 2026",
      "End: October 2026"
    ],
    "status": "Design Completed",
    "authorOverride": [
      "StackVenger Team",
      "Product Design",
      "/assets/icons/logo-mark.svg"
    ],
    "body": [
      "Napotech (\"Refine your skills\") connects people who need something done with verified professionals who can do it, from electricians and cleaners to maths tutors and remote developers. We designed the complete product: a mobile app for clients and experts, and a web admin console for the team that runs the marketplace. The design uses a confident navy-and-amber palette, friendly illustrations and clear, card-based layouts that make hiring feel safe and simple.",
      "The journey starts with three onboarding screens: Connect Skills with Opportunities, Work Together with Confidence, and Manage Everything in One Place. Users then choose their role (Client or Expert) and their language (English or Kiswahili), and verify by phone. Clients land on a home screen with a \"Trusted Experts Near You\" banner, category shortcuts (Home Services, Repair & Diagnostic, Education & Tutoring and more), upcoming appointments, and nearby and recommended experts. They can browse in list, grid or map view, with search, filters and sorting. Expert profiles show ratings, experience, jobs completed, starting price, portfolio and reviews.",
      "Hiring is a guided four-step request: describe the job with photos and item details, set the service location on a map, pick a date, time and estimated duration, then review and send. Experts reply with a quote. Clients can accept it, chat about it or send a counter offer, and every change is tracked in a quote timeline. At checkout the client chooses a single payment or milestone payments, and funds are held until the work is confirmed. Jobs then move through Scheduled, In Progress and Completed, with rescheduling, cancellation, dispute reporting and reviews built in.",
      "Experts get their own workspace: an availability toggle with an emergency mode, new job requests, a monthly earnings summary, and a wallet with withdrawals and transaction history. Analytics cover profile views, quotation stats and monthly earnings, and experts manage their portfolio, services, service area and working hours. Before taking jobs, every expert completes a multi-step profile setup and identity verification. Free and Premium plans unlock better visibility and lower commission, and a referral programme rewards bringing friends on board.",
      "The admin console gives operators full control. The dashboard shows revenue, active jobs and experts, open disputes, pending verifications and payouts, with monthly earnings and top-category charts. Admins step through expert verification (profile, documents and a face check) and approve, reject or request resubmission. Dispute tools let them review evidence and chat history, then release funds to the expert, refund the client, or approve a partial payment. There are also job and client management, transactions with editable commission, payouts, subscriptions, a support-ticket inbox, review moderation, content management (banners, announcements, FAQs, static pages) and role-based permissions for admins and super admins."
    ],
    "faq": [
      [
        "Who is Napotech for?",
        "Clients who need trusted help (home services, repairs, installations, care, tutoring or remote development) and independent experts who want a steady stream of verified jobs and secure payouts."
      ],
      [
        "How are experts vetted?",
        "Each expert completes a multi-step profile and submits identity documents with a selfie. The admin team reviews the profile, documents and face match before approving, rejecting or requesting resubmission."
      ],
      [
        "How does pricing work?",
        "Clients send a job request, the expert replies with a quote, and both sides can negotiate with counter offers in chat. Once accepted, the client pays in one go or in milestones, and funds are released when the work is confirmed."
      ],
      [
        "What happens if something goes wrong?",
        "Clients can report an issue or raise a dispute. Admins review the evidence and the conversation, then refund, release funds to the expert, or approve a partial payment."
      ],
      [
        "Which languages does the app support?",
        "The designs include English and Kiswahili, chosen during onboarding and changeable at any time in preferences."
      ]
    ]
  },
  {
    "slug": "coachme-sports-coaching-app",
    "title": "CoachMe – Sports Coaching & Booking App with Admin Panel",
    "chip": "Mobile App",
    "lead": "A dark, athletic mobile app where athletes find certified coaches, book and pay for sessions, chat, and track goals and badges, while coaches manage their schedule and earnings, plus a full admin panel.",
    "cover": "/assets/images/project-coachme-cover.webp",
    "galleryImgs": [
      "/assets/images/project-coachme-1.webp",
      "/assets/images/project-coachme-2.webp",
      "/assets/images/project-coachme-3.webp",
      "/assets/images/project-coachme-4.webp",
      "/assets/images/project-coachme-5.webp",
      "/assets/images/project-coachme-6.webp",
      "/assets/images/project-coachme-7.webp",
      "/assets/images/project-coachme-8.webp",
      "/assets/images/project-coachme-9.webp",
      "/assets/images/project-coachme-10.webp",
      "/assets/images/project-coachme-11.webp"
    ],
    "when": [
      "Start: September 2026",
      "End: October 2026"
    ],
    "status": "Design Completed",
    "authorOverride": [
      "StackVenger Team",
      "Product Design",
      "/assets/icons/logo-mark.svg"
    ],
    "body": [
      "CoachMe (\"Find your coach, achieve your goals\") is a coaching platform that brings athletes and certified coaches together in one app. We designed the complete product: the mobile experience for both athletes and coaches, and a web admin panel for running the platform. The visual language is dark and athletic, with full-bleed sports photography, electric-blue accents and bold headlines like \"Find Your Expert Coach\", \"Book, Train, Succeed\" and \"Start Your Journey\" that set the tone from the first screen.",
      "After onboarding, users choose a role (find a coach, or coach athletes) and sign up with email, Apple, Google or Facebook, with OTP verification and a GDPR consent step. Athletes pick the sports they like (swimming, bodybuilding, yoga, boxing, running, tennis and more) and their goals, such as weight loss, muscle gain, flexibility, endurance, competition prep or injury recovery. Coaches build a professional profile with specialties, experience, certifications, objectives and session pricing.",
      "The athlete home shows the next session, workout campaigns and badge progress. Search finds coaches by sport, and each coach profile shows ratings, certifications, location, available days and specialties. Booking is a calendar flow: pick a date, review the session overview, and pay securely by card through Stripe. Each booking has its own detail page with session progress and stats, and a validation code that the athlete shares with the coach to confirm the session took place. After the session, athletes leave a tagged review.",
      "Between sessions, athletes chat with their coach, including shared exercise videos and custom offers the coach can send right in the conversation. Goals & Progress tracks weight, sets, duration and calories against targets, with coach notes, and gamified badges like First Session, Goal Setter, Consistency Master and Marathon Trainer reward consistency. A built-in marketplace sells gym gear and supplements. Premium members ($49/month) unlock video programmes, on-demand tips, mini lessons and the full badge system. Coaches get their own dashboard with earnings, session counts, ratings and charts, plus an athlete list, a booking calendar, session packages, video uploads, blocked time slots and private athlete notes.",
      "The admin panel lets operators switch between athlete, coach and admin views and manage everything in one place. It covers a dashboard with revenue trends, user distribution and recent activity, plus user and booking management with bulk notifications. Admins can approve coach profiles, session validations and content, manage marketplace products and stock, create subscription plans and their benefits, design gamification badges, and export analytics reports. Platform settings cover commission rates, daily session limits and maintenance mode."
    ],
    "faq": [
      [
        "Who uses CoachMe?",
        "Athletes looking for a certified coach in sports like swimming, bodybuilding, yoga, boxing, running or tennis, and coaches who want to grow their client base and manage bookings and earnings in one app."
      ],
      [
        "How does booking and payment work?",
        "Athletes choose a coach, pick a date and time on the calendar, review the session and pay by card through Stripe. They receive a booking confirmation and a digital invoice."
      ],
      [
        "What is the validation code?",
        "Each booked session has a unique code. The athlete shares it with the coach at the session, and the coach enters it in their app to confirm the session took place before it's marked complete."
      ],
      [
        "What does Premium include?",
        "Premium unlocks video programmes, mini lessons, on-demand tips, and the full gamification and badge system for staying motivated."
      ],
      [
        "What can admins control?",
        "Users, bookings, content approvals, marketplace products, subscription plans, badges, analytics exports, and platform settings such as commission rate and maintenance mode."
      ]
    ]
  },
  {
    "slug": "optivo-solutions-consulting-website",
    "title": "Optivo Solutions – Business Operations Consulting Website",
    "chip": "Web Design",
    "lead": "A clean, conversion-focused home page for an operations consultancy, with services, role-based solutions, testimonials and a built-in free-consultation booking flow, designed in three colour directions.",
    "cover": "/assets/images/project-optivo-cover.webp",
    "galleryImgs": [
      "/assets/images/project-optivo-1.webp",
      "/assets/images/project-optivo-2.webp",
      "/assets/images/project-optivo-3.webp",
      "/assets/images/project-optivo-4.webp",
      "/assets/images/project-optivo-5.webp",
      "/assets/images/project-optivo-6.webp",
      "/assets/images/project-optivo-7.webp",
      "/assets/images/project-optivo-8.webp"
    ],
    "when": [
      "Start: September 2026",
      "End: October 2026"
    ],
    "status": "Design Completed",
    "authorOverride": [
      "StackVenger Team",
      "Web Design",
      "/assets/icons/logo-mark.svg"
    ],
    "body": [
      "Optivo Solutions helps founders and operations leaders streamline processes, automate repetitive work and scale efficiently, from early-stage startups to established enterprises. We designed the company's home page: one page that has to explain the offer, build trust quickly and turn visitors into booked consultations. The result is bright, structured and calm, just like the service it sells.",
      "The hero opens with \"Optimize Your Business Operations & Growth\", with the key word highlighted in a solid blue marker. Two clear calls to action, Start Your Transformation and Learn More, sit next to a layered photo collage of the team at work and a small Net Sales chart card that hints at measurable results. Below it, a strip of trusted technology partners adds instant credibility.",
      "The page then tells the story in order. \"Discover Our Services\" presents Process Optimization, Strategic Consulting and Team Development as wide rows, each with a photo, a short pitch, a checklist of what's included and a View Details link. The featured service is highlighted as a solid card. A tabbed \"Comprehensive Solutions for Every Role\" block speaks directly to founders, operations leads and teams, followed by a customer testimonial carousel.",
      "Conversion happens without leaving the page. In \"Ready to Transform Your Business?\", visitors fill in a short form (name, company, email, the service they want and a message), then pick a date and time on an inline calendar with time-zone support, and book a free consultation. A \"Boost Your Success with Our 100% Guarantee\" banner and a footer with quick links, legal pages and contact details close the page.",
      "We explored the design in three colour directions so the client could choose the personality of the brand: a soft light-blue version, a vivid blue version with the Optivo Solutions logo, and a sharp monochrome version with black accents. All three share the same layout, spacing and components, so the chosen direction can go straight into development."
    ],
    "faq": [
      [
        "What was designed for Optivo Solutions?",
        "The complete home page: hero, technology partners, services, role-based solutions, testimonials, the consultation booking section, the guarantee banner and the footer."
      ],
      [
        "Why three colour directions?",
        "To let the client choose the brand's personality: soft light blue, vivid blue with the Optivo logo, or monochrome with black accents. They all share one layout and component set."
      ],
      [
        "How does the consultation booking work?",
        "Visitors fill in a short form with their name, company, email, the service they want and a message, then pick a date and time on an inline calendar with time-zone selection, all on the same page."
      ],
      [
        "Who is the website aimed at?",
        "Founders, operations leads and growing teams. The role-specific tabs let each visitor quickly see how Optivo helps their part of the business."
      ],
      [
        "Is the design ready for development?",
        "Yes. The page uses consistent spacing, typography and reusable sections, so it can be built in any modern framework or CMS."
      ]
    ]
  },
  {
    "slug": "topproczar-business-suite-redesign",
    "title": "Topproczar – All-in-One Business Suite Website & Dashboard Redesign",
    "chip": "SaaS",
    "lead": "A full redesign of Topproczar, a modular business platform for accounting, CRM, HRM, POS and projects: a conversion-focused marketing site with add-on pricing, plus a cleaner, faster admin dashboard.",
    "cover": "/assets/images/project-topproczar-cover.webp",
    "galleryImgs": [
      "/assets/images/project-topproczar-1.webp",
      "/assets/images/project-topproczar-2.webp",
      "/assets/images/project-topproczar-3.webp",
      "/assets/images/project-topproczar-4.webp",
      "/assets/images/project-topproczar-5.webp",
      "/assets/images/project-topproczar-6.webp",
      "/assets/images/project-topproczar-7.webp",
      "/assets/images/project-topproczar-8.webp",
      "/assets/images/project-topproczar-9.webp",
      "/assets/images/project-topproczar-10.webp",
      "/assets/images/project-topproczar-11.webp",
      "/assets/images/project-topproczar-12.webp",
      "/assets/images/project-topproczar-13.webp",
      "/assets/images/project-topproczar-14.webp"
    ],
    "when": [
      "Start: October 2024",
      "End: August 2025"
    ],
    "status": "Design Completed",
    "authorOverride": [
      "StackVenger Team",
      "Product Design",
      "/assets/icons/logo-mark.svg"
    ],
    "body": [
      "Topproczar is an all-in-one business platform that lets companies \"take care of each need of their business functions in one place\". Accounting, HRM, CRM, POS, project management and payments are each available as an add-on module. We redesigned both sides of the product: the public marketing website that sells the packages, and the admin dashboard where customers actually run their business. The new identity is a fresh, confident green with plenty of white space, rounded cards and clear hierarchy.",
      "The website opens with a limited-time offer bar and a bold green hero that shows the product in a device frame, with Get the Package and Topproczar calls to action. Value cards highlight free and open-source foundations, growth and 24/7 support. A \"Why choose dedicated modules for your business?\" timeline walks through each module (accounting and billing, HRM, CRM, projects, customers and vendors), pairing real dashboard screens with short benefit-led copy. Further down, \"Built with Technology You Can Trust\" explains the Laravel foundation, alongside testimonials and a dedicated eCommerce fashion-theme package.",
      "Every add-on has its own detail page, such as Accounting at $50/month or $500/year, with a hero, feature walkthroughs (accounting and billing, inventory, proposal-to-payment and reports) and cross-links to the other modules. The Simple Pricing page lets buyers start from a Basic Package and toggle add-ons like Accounting, HRM, CRM, POS, Stripe and Project. They can set the number of workspaces and users, switch between monthly and yearly billing, see the total update live, and check out through a payment-details step. Login, registration, email confirmation, About, Terms and Privacy pages complete the site.",
      "The redesigned dashboard brings a consistent layout, a collapsible sidebar, workspace switching and a language selector to every module. The Accounting dashboard summarises customers, vendors, invoices and bills, with account balances, cashflow, income-versus-expense trends and category breakdowns. The CRM dashboard tracks recently created and modified deals, deal calls by day and deals by stage, with dedicated screens for leads, pipelines, deal management and CSV imports.",
      "Behind these sit complete back-office flows. Invoices, proposals and bills have setup screens for categories, units and tax rates. There are purchases and warehouses with stock transfers, banking accounts, a chart of accounts and transfers, plus revenue, credit notes, payments and debit notes. Customer and vendor profiles have tabs for invoices, proposals, projects and statements. Reports cover profit and loss, income vs expense, tax, transactions and account statements. User management includes roles with granular, colour-coded permissions and activity logs, turning a dense ERP into something teams can learn quickly."
    ],
    "faq": [
      [
        "What is Topproczar?",
        "A modular business platform where companies pick the add-ons they need (Accounting, HRM, CRM, POS, Stripe payments and Project management) and run them from one dashboard."
      ],
      [
        "What was redesigned?",
        "Both the marketing website (home, add-on details, pricing, payment, auth and legal pages) and the admin dashboard (accounting, CRM, invoices, purchases, banking, reports and user management)."
      ],
      [
        "How does the pricing page work?",
        "Buyers start with the Basic Package, toggle the add-ons they want, choose the number of workspaces and users, and switch between monthly and yearly billing, with the total updating live before checkout."
      ],
      [
        "How did the dashboard redesign improve usability?",
        "It applies one consistent layout, sidebar and component set across every module, adds clear summary cards and charts on each dashboard, and organises dense accounting flows into simple list, create and detail screens."
      ],
      [
        "How are permissions handled?",
        "Admins create roles such as client, staff or HR and assign granular permissions for each module from colour-coded permission chips. User activity logs give full visibility."
      ]
    ]
  }
];

/* cover / gallery / body with per-project overrides (reference projects use the numbered theme images) */
export const coverSrc = (p) => p.cover || `/assets/images/71-project-${p.img}.webp`;
export const galleryOf = (p) => p.galleryImgs || [0, 1, 2].map((k) => `/assets/images/71-project-gallery-${p.gallery + k}.webp`);
export const bodyOf = (p) => p.body || PROJECT_BODY;
