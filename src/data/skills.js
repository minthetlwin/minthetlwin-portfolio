import java from "../assets/image/skill/icons8-java-48.png";
import php from "../assets/image/skill/icons8-php-64.png";
import python from "../assets/image/skill/icons8-python-48.png";
import cplus from "../assets/image/skill/icons8-c-48.png";
import csharp from "../assets/image/skill/icons8-cshar-48.png";
import reactIcon from "../assets/image/skill/icons8-react-native-48.png";
import html from "../assets/image/skill/icons8-html5-48.png";
import css from "../assets/image/skill/icons8-css-48.png";
import javascript from "../assets/image/skill/icons8-javascript-48.png";
import mysql from "../assets/image/skill/icons8-mysql-48.png";
import github from "../assets/image/skill/icons8-github-48.png";
import laravel from "../assets/image/skill/icons8-laravel-64.png";

// Icon: `img` (bundled logo), `text` + `color` (lettered badge) or `fa` + `color` (Font Awesome glyph).
// `core` = the stack I use day to day; those appear in the hero tile, in this order.
export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React", img: reactIcon, core: true },
      { name: "TypeScript", text: "TS", color: "#3178c6", core: true },
      { name: "Next.js", text: "N", color: "#111111", core: true },
      { name: "Tailwind CSS", fa: "fas fa-wind", color: "#38bdf8", core: true },
      { name: "JavaScript", img: javascript },
      { name: "TanStack Query", fa: "fas fa-sync-alt", color: "#ef4444" },
      { name: "HTML5", img: html },
      { name: "CSS3", img: css },
    ],
  },
  {
    title: "Backend & Data",
    skills: [
      { name: "Supabase", fa: "fas fa-bolt", color: "#3ecf8e", core: true },
      { name: "PostgreSQL", fa: "fas fa-database", color: "#336791", core: true },
      { name: "Laravel", img: laravel },
      { name: "Node.js", fa: "fab fa-node-js", color: "#539e43" },
      { name: "Spring Boot", fa: "fas fa-leaf", color: "#6db33f" },
      { name: "PHP", img: php },
      { name: "Java", img: java },
      { name: "MySQL", img: mysql },
      { name: "MongoDB", fa: "fas fa-leaf", color: "#00a35c" },
    ],
  },
  {
    title: "Mobile & Maps",
    skills: [
      { name: "React Native", img: reactIcon, core: true },
      { name: "Expo", text: "E", color: "#000020" },
      { name: "PWA & Web Push", fa: "fas fa-bell", color: "#5e5ce6" },
      { name: "MapLibre", fa: "fas fa-map", color: "#0a84ff" },
      { name: "Leaflet", fa: "fas fa-map-marker-alt", color: "#199900" },
      { name: "PostGIS", fa: "fas fa-globe-asia", color: "#336791" },
    ],
  },
  {
    title: "Testing, Tools & More",
    skills: [
      { name: "Git & GitHub", img: github },
      { name: "GitHub Actions", fa: "fas fa-cogs", color: "#2088ff" },
      { name: "Vitest", fa: "fas fa-vial", color: "#729b1b" },
      { name: "Playwright", fa: "fas fa-theater-masks", color: "#2ead33" },
      { name: "Sentry", fa: "fas fa-bug", color: "#6c5fc7" },
      { name: "Python", img: python },
      { name: "C#", img: csharp },
      { name: "C++", img: cplus },
    ],
  },
];

export const coreSkills = skillGroups.flatMap((g) => g.skills).filter((s) => s.core);
