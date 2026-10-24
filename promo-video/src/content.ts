// Everything you see or hear in the promo lives here: copy, project data,
// timings and audio slots. Edit this file, not the scene components.
//
// Rules this content follows: only real data from the agency site
// (../src/data/projects.js, ../src/components/*) — no invented clients,
// numbers, testimonials or awards. Unknown values are marked TODO and are
// hidden on screen until they are filled in.

// ---------------------------------------------------------------- timing
// Frames at 30 fps. Scenes are joined by 15-frame crossfades, so each scene
// below includes 15 frames that overlap the next one:
// 2805 frames of scenes − 7 × 15 frames of transitions = 2700 frames (90 s).
export const FPS = 30;
export const TRANSITION_FRAMES = 15;

export const sceneDurations = {
  hook: 165, //        0:00–0:05
  brand: 225, //       0:05–0:12
  services: 405, //    0:12–0:25
  featured: 915, //    0:25–0:55
  montage: 315, //     0:55–1:05
  process: 375, //     1:05–1:17
  tech: 195, //        1:17–1:23
  cta: 210, //         1:23–1:30 (last 30 frames hold still)
};

export const TOTAL_FRAMES =
  Object.values(sceneDurations).reduce((a, b) => a + b, 0) -
  (Object.keys(sceneDurations).length - 1) * TRANSITION_FRAMES;

// ---------------------------------------------------------------- audio
// Optional. Drop licensed files into public/audio/ and set the paths, e.g.
// music: "audio/music.mp3". Leave null to render silent.
export const audio = {
  // Synthesized by scripts/make-music.mjs (license-free). Swap in a produced, licensed track any time.
  music: "audio/music.mp3" as string | null,
  voiceover: null as string | null, // TODO: optional voiceover
  musicVolume: 0.6,
  musicVolumeUnderVoiceover: 0.22, // music is ducked to this while a voiceover is set
  fadeInSeconds: 1.5,
  fadeOutSeconds: 3,
};

// ---------------------------------------------------------------- company
export const company = {
  name: "StackVenger",
  // From the site hero (Hero.jsx) and <title>
  kicker: "AI-Accelerated Product Development",
  tagline: ["Build Smarter.", "Launch Faster."],
  website: null as string | null, // TODO: public website URL, e.g. "stackvenger.com"
  email: null as string | null, // TODO: contact email, e.g. "hello@stackvenger.com"
};

// ---------------------------------------------------------------- scene copy
export const hook = {
  lines: [["Ideas"], ["deserve"], ["great", "software."]],
  highlight: ["great", "software."],
};

export const services = {
  kicker: "What we do",
  // Services section heading on the site
  title: "Code, strategy, and AI in perfect sync.",
  // Titles are the site's four services; lines are shortened from their descriptions
  items: [
    { icon: "rocket", title: "AI-Accelerated Product Development", line: "From idea to MVP in record time." },
    { icon: "code", title: "Custom Software & App Development", line: "Web and mobile platforms built to scale." },
    { icon: "spark", title: "AI Integration & Automation", line: "Predictive analytics and smart chatbots." },
    { icon: "flow", title: "Smart Workflow Automation", line: "AI-powered automation across your teams." },
  ],
} as const;

export type Device = "browser" | "phone";

export type FeaturedProject = {
  key: string; // folder name in public/projects/
  name: string;
  industry: string; // the project's category chip on the site
  line: string; // one-line description, ≤ 8 words
  chips: string[]; // technologies named in the project write-up
  device: Device;
  domain: string; // shown in the browser address bar
  accent: string; // glow colour, picked from the project's own UI
  // browser: number of stacked page sections; phone: screen height ÷ width
  sections?: number;
  mainRatio?: number;
  secondRatio?: number;
  detail?: boolean;
};

// The 8 projects featured in detail (order alternates phone and browser).
export const featured: FeaturedProject[] = [
  { key: "atliss", name: "ATLISS", industry: "Mobile App", line: "Find food trucks nearby. Order ahead.", chips: ["Flutter", "Riverpod", "Firebase", "Socket.IO", "Next.js"], device: "phone", domain: "ATLISS", accent: "#f5a623", mainRatio: 9.136, secondRatio: 4.0 },
  { key: "ecommerce", name: "Ecommerce", industry: "E-commerce", line: "Full-stack store with a complete back office.", chips: ["Next.js", "NestJS", "PostgreSQL", "Redis", "Stripe"], device: "browser", domain: "ecommerce store", accent: "#ff6b5b", sections: 3, detail: true },
  { key: "limtlss", name: "LIMTLSS", industry: "Mobile App", line: "Endurance challenges with Strava-synced progress.", chips: ["Flutter", "Riverpod", "Socket.IO", "Strava"], device: "phone", domain: "LIMTLSS", accent: "#facc15", mainRatio: 4.415, secondRatio: 5.338 },
  { key: "topproczar", name: "Topproczar", industry: "SaaS", line: "Accounting, CRM, HRM and POS in one suite.", chips: ["Laravel", "Stripe"], device: "browser", domain: "topproczar", accent: "#1ba65a", sections: 3, detail: true },
  { key: "comptajz", name: "Compta JZ", industry: "FinTech", line: "Invoices, payments and reports in one dashboard.", chips: ["Next.js", "TypeScript", "Chart.js", "Docker"], device: "browser", domain: "compta jz", accent: "#3b82f6", sections: 1, detail: true },
  { key: "napotech", name: "Napotech", industry: "Mobile App", line: "Hire verified experts. Pay by milestone.", chips: ["iOS", "Android", "Web admin"], device: "phone", domain: "Napotech", accent: "#f5b800", mainRatio: 3.595, secondRatio: 3.472 },
  { key: "jmk", name: "JMK Furniture", industry: "Retail", line: "Bilingual showroom with WhatsApp ordering.", chips: ["React", "Express", "MongoDB", "Docker"], device: "browser", domain: "jmkfurniture.duckdns.org", accent: "#c9a46a", sections: 3, detail: true },
  { key: "paradise", name: "Paradise Hotel", industry: "Hospitality", line: "Himalayan resort site with online booking.", chips: ["React", "Vite", "Tailwind CSS"], device: "browser", domain: "paradisehotel.shop", accent: "#d4a24c", sections: 3, detail: true },
];

// 8 × 128/127 frames with 7 inner 15-frame slides = 915 frames
export const featuredSlideFrames = [128, 128, 128, 128, 127, 127, 127, 127];

// All 20 projects on the site, in site order (cover images in public/projects/covers/)
export const allProjects = [
  "ecommerce", "jmk", "renovate", "globaltravels", "classroom", "veyborn", "coachpro", "alnoor", "paradise", "greenarch",
  "nizams", "lotus", "topproczar", "napotech", "atliss", "limtlss", "coachme", "comptajz", "stability", "optivo",
];

export const montage = {
  // 20 = the number of projects on the site today; "+" as requested in the brief
  count: allProjects.length,
  suffix: "+",
  label: "projects delivered",
};

export const process = {
  kicker: "How we work",
  title: "From prototype to launch, and beyond.",
  // The four pillars from the site's About section (About.jsx)
  steps: [
    { title: "Prototype", line: "Wireframes and mockups in hours, not weeks." },
    { title: "Build", line: "AI-assisted coding speeds up delivery." },
    { title: "Test", line: "Smart QA for fewer bugs, smoother launches." },
    { title: "Support", line: "A dedicated team, every step of the way." },
  ],
  // Site marquee line
  closer: "From idea to MVP in 8 weeks.",
};

export const tech = {
  kicker: "Our stack",
  title: "Proven tech behind every build.",
  // Technologies named in the project write-ups on the site
  chips: [
    "React", "Next.js", "TypeScript", "Tailwind CSS", "NestJS", "Express", "Laravel", "Flutter", "Riverpod",
    "PostgreSQL", "Prisma", "MongoDB", "Redis", "Firebase", "Socket.IO", "Stripe", "RevenueCat",
    "Docker", "Nginx", "GitHub Actions", "Cloudinary", "TanStack Query", "Zustand", "Google Maps",
  ],
};

export const cta = {
  lines: [["Let's", "build"], ["yours."]],
  highlight: ["yours."],
  button: "Get Started", // the site's primary call to action
};
