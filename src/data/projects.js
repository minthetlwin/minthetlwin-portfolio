import Sdos from "../assets/image/project/sdos.jpg";
import PsmCrm from "../assets/image/project/psmCrm.jpg";
import MarketingOs from "../assets/image/project/marketingOs.jpg";
import PsmBudget from "../assets/image/project/psmBudget.jpg";
import PsmMap from "../assets/image/project/psmMap.jpg";
import FieldsArea from "../assets/image/project/fieldsArea.jpg";
import FieldsCompass from "../assets/image/project/fieldsCompass.jpg";
import PropertySeekerHome from "../assets/image/project/propertySeekerHome.jpg";
import PropertySeekerMap from "../assets/image/project/propertySeekerMap.jpg";
import PsmProperties from "../assets/image/project/psmProperties.jpg";
import KengtungGuide from "../assets/image/project/kengtungGuide.jpg";
import { earlierProjectsRaw } from "./earlierProjects";

/*
 * Shared project shape
 * ---------------------------------------------------------------------------
 * id, title, tagline         card + page heading
 * category                   filter chip on the Work section
 * group                      "featured" (professional work) | "earlier" (university & personal)
 * accent, icon               card tint + Font Awesome glyph for the generated cover
 * img?, frame?               screenshot in a device frame: laptop (default) | desktop | tablet | phone;
 *                            without one, a cover is drawn from `stats`
 * gallery?                   a second screenshot, shown as a phone behind `img` (phone frame only)
 * model?                     phone size: "pro" (default) | "pro-max"
 * stats                      [{ value, label }] headline numbers
 * overview                   paragraph(s)
 * features, highlights, learned, stack   string lists (highlightsTitle? renames that section)
 * role?, outcome?, links?    [{ label, href, icon }]
 */

const featuredProjects = [
  {
    id: "sdos",
    title: "SDOS — Software Department Operating System",
    shortTitle: "SDOS",
    tagline:
      "An all-in-one operations platform for a software department: projects, tasks, stand-ups, check-ins, budgets and performance, with AI help writing daily reports.",
    category: "Business apps",
    accent: "#5e5ce6",
    icon: "fas fa-layer-group",
    img: Sdos,
    frame: "desktop",
    role: "Full-stack developer",
    stats: [
      { value: "19k", label: "Lines of TypeScript" },
      { value: "30", label: "Database tables" },
      { value: "115", label: "Row-level security policies" },
      { value: "18", label: "Feature areas" },
    ],
    overview: [
      "SDOS is a full-stack web app I built to run a software team's day-to-day work in one place. Developers, managers and leadership each get their own dashboard. Inside the app they can track projects and tasks, submit daily reports, log work time with a camera and location check-in, submit expenses against project budgets, and see workload and performance numbers.",
      "An AI feature turns a developer's rough work notes into short, clean stand-up updates that are ready to post to the team's Viber group. It's also an installable app with live updates and push notifications.",
    ],
    features: [
      "Role-based dashboards for developers, managers and leadership, with role and permission management",
      "Projects and tasks: project health indicators, reviewers, progress roll-ups and project reports",
      "Daily reports: personal and team views, plus AI-polished stand-up updates shared to Viber",
      "Work time tracking with a camera photo and location at check-in",
      "Expenses and budgets: receipt uploads, an approval queue and budget-usage bars",
      "Workload, performance KPIs and analytics across the team",
      "Live updates, in-app and OS push notifications, an activity feed, personal notes and to-do lists",
      "Installable on phones and desktops, with a server proxy so the app works on networks that block the database provider",
    ],
    highlights: [
      "About 19,000 lines of TypeScript across 18 feature areas",
      "30 database tables protected by 115 row-level security policies, so each user only sees the data they're allowed to",
      "AI runs on the server so API keys never reach the browser. The AI only rewrites the wording; the app decides which tasks are listed and in what order, so the AI can't drop or move work",
      "A custom zero-dependency Node server for deployment, with compression, caching and security headers",
    ],
    stack: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Radix UI", "TanStack Query", "React Hook Form", "Zod", "Supabase", "OpenRouter / Gemini", "Web Push", "Node.js", "Netlify / cPanel"],
  },
  {
    id: "psm-crm",
    title: "PSM Properties CRM",
    tagline:
      "A mobile-first, bilingual sales CRM for a real estate company, covering the whole journey from first enquiry to closed sale.",
    category: "Business apps",
    accent: "#0a84ff",
    icon: "fas fa-handshake",
    img: PsmCrm,
    frame: "desktop",
    role: "Full-stack developer",
    stats: [
      { value: "3,000+", label: "Leads tracked" },
      { value: "10", label: "Sales teams" },
      { value: "5", label: "Role levels" },
      { value: "2", label: "Languages" },
    ],
    overview: [
      "A mobile-first, bilingual (Myanmar / English) CRM I built for a Myanmar real estate company. It covers the whole sales journey, from the first customer enquiry to a closed sale, and is used every day by sales staff, team managers and management.",
      "It currently tracks 3,000+ leads across 10 sales teams.",
    ],
    features: [
      "Lead pipeline: enquiries become leads and move through stages from New to Sold on a pipeline board",
      "Follow-ups: automatic lead grading (A/B/C) and scheduled follow-up reminders",
      "Sales tracking: each sale records the amount and the company's commission, enforced by the database",
      "KPI board ranking departments, teams and sales people by company income, conversion rate and deals closed, with Excel/PDF export",
      "Access control: five role levels, with permissions enforced in the database (row-level security), not just in the interface",
      "Real-time and mobile: live updates, push notifications, an installable app (PWA), biometric lock and a property map",
    ],
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Radix UI", "Supabase", "PostgreSQL RLS", "Edge Functions", "Realtime", "Chart.js", "MapLibre", "Sentry"],
  },
  {
    id: "marketing-os",
    title: "Marketing OS",
    tagline:
      "An internal workspace for a property developer's marketing team: projects, tasks, budgets, documents, meeting minutes and research in one place.",
    category: "Business apps",
    accent: "#ff375f",
    icon: "fas fa-bullhorn",
    img: MarketingOs,
    frame: "desktop",
    stats: [
      { value: "41", label: "Unit test files" },
      { value: "28", label: "Database test suites" },
      { value: "37", label: "Versioned migrations" },
      { value: "2", label: "Languages" },
    ],
    overview: [
      "A full-stack web app that brings a real-estate marketing department's day-to-day work into one place. The team uses it to run property development projects, tasks and calendars, meeting minutes, budgets, documents, enquiries and market research.",
      "It's built for desktop and phone, and supports both English and Myanmar.",
    ],
    features: [
      "Projects with units sold, construction progress, milestones, KPIs, risks and a health status, each with its own team and access settings",
      "Tasks and calendar: a \"My Day\" view, list and board views, recurring tasks, checklists, reminders and colour-coded events",
      "Budgets per platform with spending limits and alerts, ad metrics (CTR, CPC, CPM, cost per result) and CSV/PDF reports",
      "Documents from templates (project charter, plan, creative brief) with autosave, version compare and restore, review and approval, and PDF export",
      "Meeting minutes with a phone-friendly form, attendee notifications and PDF reports that render Myanmar text correctly",
      "Collaboration: @mentions, file attachments, a change history on every record, and live in-app and push notifications",
      "Installable PWA with bottom navigation, filter sheets and loading skeletons on phones",
    ],
    highlights: [
      "Security in the database: Postgres row-level security and SECURITY DEFINER functions. Roles apply per project, can expire, and block people from approving their own work or granting themselves permissions",
      "Clear layers: UI → Zod-validated server actions → a service layer that checks permissions → Supabase. The UI never queries the database directly",
      "Testing: 41 Vitest unit test files, 28 pgTAP database suites and Playwright end-to-end tests, including one that checks app permissions match the database",
      "37 versioned database migrations as the project grew from Phase 0 to Phase 1",
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Supabase", "Tailwind CSS 4", "shadcn/ui", "Zod", "PDFKit", "Web Push", "Vitest", "pgTAP", "Playwright", "Netlify"],
  },
  {
    id: "psm-map",
    title: "PSM Map",
    tagline:
      "A real-estate parcel mapping platform for drawing and managing land parcels and ward boundaries on a live map, with a public API for CRMs and websites.",
    category: "Maps & GIS",
    accent: "#30b158",
    icon: "fas fa-map-marked-alt",
    img: PsmMap,
    frame: "tablet",
    stats: [
      { value: "3", label: "Access roles" },
      { value: "PostGIS", label: "Spatial database" },
      { value: "REST", label: "Public API + embed" },
    ],
    overview: [
      "PSM Map is a private mapping tool built for a real-estate business. Editors draw and edit ward, parcel and land-use zone boundaries right on the map. Viewers can search, filter and explore listings, and a heatmap shows where parcels are concentrated. Admins manage user accounts, roles and an activity log from the same sidebar.",
      "A key-protected public API and an embeddable map frame let an outside CRM or website show the map and edit parcel details without logging in. The API can never change shapes or create and delete records.",
    ],
    features: [
      "Draw and edit polygons on the map: wards, parcels and land-use zones",
      "Three roles (viewer, editor, admin), enforced in the database with Postgres row-level security",
      "Search, filters, a heatmap, and switchable basemaps and label layers",
      "Admin tools: inviting and managing users, settings and an activity log",
      "Public REST API and an embeddable iframe map for outside sites",
      "Works on mobile",
    ],
    learned: [
      "Making terra-draw's edit hand-off reliable inside a React-managed MapLibre map. Two production crashes came from this before it was stable",
      "Keeping the map mounted across views without a router, so a drawing session is never interrupted",
      "Moving security into the database (RLS policies and a has_role() check) instead of relying on checks in the browser",
    ],
    stack: ["React 19", "TypeScript", "Vite", "MapLibre GL JS", "Terra Draw", "TanStack Query", "Supabase", "PostGIS", "Edge Functions"],
  },
  {
    id: "psm-properties-website",
    title: "PSM Properties Website",
    tagline:
      "The official website of a Myanmar real estate company: search properties to buy or rent, explore new developments and contact agents.",
    category: "Websites",
    accent: "#0d9488",
    icon: "fas fa-building",
    img: PsmProperties,
    role: "Front-end developer in a team of about 7",
    stats: [
      { value: "3", label: "Languages" },
      { value: "360°", label: "Virtual tours" },
      { value: "~7", label: "Developers on the team" },
    ],
    overview: [
      "PSM is the official website for a real estate company in Myanmar. Visitors can search for properties to buy or rent, look through new development projects, and contact agents.",
      "I worked on it as part of a team, building a fast, mobile-friendly React app in three languages (English, Burmese and Chinese) with rich media and map-based discovery.",
    ],
    features: [
      "Property search with filters for location, property type, tenure, bedrooms, bathrooms, furnishing and price",
      "A Google Maps view with clustered markers, plus a map of nearby places for each listing",
      "360° virtual tours of properties and rooms, built with Pannellum",
      "New project pages with room and unit views, a photo gallery and a mortgage calculator",
      "Agent profiles, Ask an Expert Q&A, guides, news, events and videos",
      "Firebase sign-in, saved searches, a user activity page and profile management",
      "A built-in chat widget and an admin tool that exports property data to Excel and ZIP",
      "SEO meta tags, shareable links and critical CSS inlined at build time for a faster first load",
    ],
    highlightsTitle: "My contribution",
    highlights: [
      "Built responsive UI components and pages",
      "Fixed layout and ad display problems on mobile",
      "Worked through GitHub pull requests in a team of about 7 developers",
    ],
    stack: ["React 19", "TypeScript", "Vite", "Tailwind CSS 4", "Redux Toolkit", "TanStack Query", "React Router 7", "Framer Motion", "Firebase Auth", "Google Maps API", "i18next"],
    links: [{ label: "Visit live site", href: "https://www.propertyseekermm.com", icon: "fas fa-external-link-alt" }],
  },
  {
    id: "kengtung-guide",
    title: "Keng Tung Pagoda Guide",
    tagline:
      "A trilingual travel guide to the pagodas and heritage sites of Keng Tung, Shan State, with 360° tours, audio narration and offline support.",
    category: "Websites",
    accent: "#d97706",
    icon: "fas fa-place-of-worship",
    img: KengtungGuide,
    stats: [
      { value: "20+", label: "Heritage sites" },
      { value: "3", label: "Languages" },
      { value: "Offline", label: "PWA" },
    ],
    overview: [
      "Keng Tung Pagoda Guide is a mobile-first web app for travellers and pilgrims exploring Keng Tung's Buddhist temples and landmarks. It covers more than 20 sites, including Maha Myat Muni, Wat Zom Kham, the Haw Palace, Naung Tung Lake and Lone Tree Hill.",
      "Each site has its history, rituals, a photo gallery and directions. The app is fully available in English, Myanmar and Thai, so it works for local, Thai and international visitors.",
    ],
    features: [
      "360° panoramas so visitors can tour sites virtually",
      "Interactive map showing every pagoda and landmark",
      "Audio narration for a self-guided tour",
      "Festival calendar with live countdowns to upcoming religious events",
      "Works offline (PWA), so visitors can download the guide before travelling to areas with poor signal",
      "Search and filtering, light and dark themes, and smooth scroll animations",
    ],
    highlights: [
      "A design-token theming system",
      "Type-safe i18n with a shared dictionary type checked across all three languages",
      "An offline-first caching strategy for images and audio",
    ],
    stack: ["React 19", "TypeScript", "Tailwind CSS", "Vite", "React Router", "Leaflet", "Pannellum", "Workbox"],
    links: [{ label: "Visit live site", href: "https://kengtung-guide.netlify.app/", icon: "fas fa-external-link-alt" }],
  },
  {
    id: "psm-budget",
    title: "PSM Budget Request System",
    tagline:
      "Replaces paper budget forms with an online approval workflow, from a public request form to signed digital checkout.",
    category: "Business apps",
    accent: "#a855f7",
    icon: "fas fa-file-invoice-dollar",
    img: PsmBudget,
    frame: "desktop",
    stats: [
      { value: "256-bit", label: "One-time approval tokens" },
      { value: "3", label: "Roles with RLS" },
      { value: "0", label: "Accounts needed to submit" },
    ],
    overview: [
      "A full-stack web app that replaces paper budget forms with an online approval workflow. Anyone can submit a budget request through a public form, with no account needed. Staff then review and process each request from a dashboard where what they can do depends on their role.",
    ],
    features: [
      "Public request form with file attachments and a live status page that updates as soon as a decision is made",
      "Approval by secure link: the Boss can approve, reject or pause from a one-time link. It carries a 256-bit token (only its SHA-256 hash is stored) plus a bcrypt-hashed PIN that locks after 5 wrong tries",
      "Roles and permissions (Admin, Boss, HR) enforced in the database with Postgres row-level security",
      "Digital checkout: HR marks approved funds as paid out, and both HR and the staff member sign on an in-browser drawing pad",
      "Printable A4 request form that includes the captured signatures",
      "Real-time in-app alerts, status emails to the requester (Resend), and browser/PWA push notifications",
    ],
    stack: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "TanStack Query", "React Hook Form", "Zod", "Supabase", "Web Push", "Netlify"],
  },
  {
    id: "fields-area-measure",
    title: "Fields Area Measure",
    tagline:
      "A mobile-first GPS app for measuring land area and distance on a live map, built for farmers, surveyors and real-estate agents.",
    category: "Maps & GIS",
    accent: "#65a30d",
    icon: "fas fa-draw-polygon",
    img: FieldsArea,
    gallery: [FieldsCompass],
    frame: "phone",
    stats: [
      { value: "3", label: "Ways to measure" },
      { value: "Offline", label: "First, with background sync" },
      { value: "KML", label: "& GeoJSON export" },
    ],
    overview: [
      "A mobile-first web app for measuring land area and distance on a live map. You can draw a polygon or a path by tapping points, or walk the boundary with GPS, and the app calculates the area, perimeter and length using geodesic math.",
      "Fields can be saved, grouped by colour, given photos and notes, and opened again later. The interface is in Burmese and English.",
    ],
    features: [
      "Three ways to measure: distance paths, area polygons and GPS walk-the-boundary tracking, plus manual coordinates and point-to-point distance",
      "Accurate geodesic calculations with Turf.js in metric, imperial and regional land units (acre, hectare, kanal, marla)",
      "Saved fields with groups, custom icons, descriptions and photo uploads",
      "Offline first: fields save to the browser instantly and sync to Supabase in the background",
      "Shareable links that hold the whole field inside the URL, with no account or server lookup",
      "Export to GeoJSON and KML for Google Earth and GIS tools",
      "Place search, nearby points of interest, switchable map layers, a compass and a unit converter",
      "Light and dark themes, plus a screen wake lock so the phone stays on while you walk a field",
    ],
    stack: ["React 19", "TypeScript", "Vite", "Leaflet", "Turf.js", "Supabase", "OpenStreetMap APIs"],
  },
  {
    id: "property-seeker-app",
    title: "Property Seeker Myanmar App",
    tagline:
      "A cross-platform iOS and Android app for browsing, searching and enquiring about property listings in Myanmar.",
    category: "Mobile",
    accent: "#ff9f0a",
    icon: "fas fa-mobile-alt",
    img: PropertySeekerHome,
    gallery: [PropertySeekerMap],
    frame: "phone",
    model: "pro-max",
    stats: [
      { value: "iOS", label: "App Store" },
      { value: "Android", label: "Google Play" },
      { value: "2", label: "Languages" },
    ],
    overview: [
      "A cross-platform (Android and iOS) mobile app for browsing, searching and enquiring about property listings in Myanmar, built with React Native and Expo.",
    ],
    features: [
      "Browse and search listings with filters, an interactive map view, nearby places and recently viewed items",
      "Save favourites, send enquiries to agents and track them in \"My Inquiries\"",
      "Accounts: sign-up, login, email verification, password reset and profile settings",
      "News, events and promotions, plus push notifications",
      "Built-in mortgage and installment calculators",
      "English and Burmese, with typography tuned so Burmese script displays correctly",
    ],
    highlights: [
      "React Native 0.86 (New Architecture), Expo SDK 57, TypeScript and NativeWind",
      "TanStack Query with offline caching, so the last session's content loads instantly after a restart",
      "Feature folders split into data, domain and UI layers, keeping the codebase easy to extend",
      "Google Maps on Android and Apple Maps on iOS; Firebase push, crash reporting and auth; maintenance-mode and forced-update screens",
      "GitHub Actions CI (type checks, linting, formatting) and automated EAS release builds for Google Play",
    ],
    stack: ["React Native", "Expo", "TypeScript", "NativeWind", "TanStack Query", "Firebase", "EAS Build", "GitHub Actions"],
    links: [
      { label: "App Store", href: "https://apps.apple.com/mm/app/property-seeker-myanmar/id6815570508", icon: "fab fa-app-store-ios" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.propertyseekermm.app", icon: "fab fa-google-play" },
    ],
  }
];

const EARLIER_ICONS = {
  "basic-literacy": "fas fa-book-open",
  "student-registration": "fas fa-user-graduate",
  "job-finder": "fas fa-briefcase",
  chronocraft: "fas fa-calendar-alt",
  "restaurant-management": "fas fa-utensils",
  "portfolio-website": "fas fa-user",
};

const earlierProjects = earlierProjectsRaw.map((p) => ({
  id: p.id,
  title: p.title,
  tagline: p.desc,
  category: p.category,
  accent: p.accent,
  icon: EARLIER_ICONS[p.id] || "fas fa-code",
  img: p.img,
  role: p.role,
  stats: [],
  overview: [p.purpose],
  features: splitList(p.features),
  stack: splitList(p.technologies),
  tags: p.tags,
  outcome: p.outcome,
}));

export const projectList = [
  ...featuredProjects.map((p) => ({ ...p, group: "featured" })),
  ...earlierProjects.map((p) => ({ ...p, group: "earlier" })),
];

export const featuredList = projectList.filter((p) => p.group === "featured");
export const earlierList = projectList.filter((p) => p.group === "earlier");

export const projectCategories = ["All", ...new Set(featuredList.map((p) => p.category))];

// "A, B, and C." -> ["A", "B", "C"]
export function splitList(text) {
  return text
    .replace(/\.$/, "")
    .split(/,\s*(?:and\s+)?/)
    .map((item) => item.trim())
    .filter(Boolean)
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1));
}
