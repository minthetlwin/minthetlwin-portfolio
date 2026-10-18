// Dates are "YYYY-MM". `end: null` means the role is ongoing.
// `accent` (+ optional `accent2`) are the company's brand colours for its card and hero tile.
// `logo` is optional; without it the card shows `monogram`.
import propertyLabLogo from "../assets/image/company/propertyLab.png";
import dcrLogo from "../assets/image/company/myanmarDcr.png";

export const roles = [
  {
    id: "psm-lab",
    company: "Property Lab Myanmar Co., Ltd.",
    shortName: "Property Lab Myanmar",
    monogram: "PLM",
    logo: propertyLabLogo,
    accent: "#0a6fc2",
    accent2: "#00b4f0",
    role: "Mid-Senior Full Stack Developer",
    type: "Full-time",
    start: "2026-06",
    end: null,
    summary:
      "Building and maintaining production web applications as part of the Property Lab engineering team.",
    highlights: [
      "Develop features end to end — from database design and APIs to responsive user interfaces.",
      "Work with the team through code reviews and Git-based workflows to ship reliable releases.",
      "Maintain and improve existing systems, fixing issues and keeping code quality high.",
    ],
    stack: [],
  },
  {
    id: "myanmar-dcr",
    company: "Myanmar DCR Co., Ltd.",
    shortName: "Myanmar DCR",
    monogram: "DCR",
    logo: dcrLogo,
    accent: "#1c1652",
    accent2: "#8bc83f",
    role: "Software Developer Intern",
    type: "Internship",
    start: "2026-05",
    end: "2026-07",
    summary:
      "Joined the development team to build web application modules on a Java Spring Boot stack.",
    highlights: [
      "Built scalable web application modules with Java Spring Boot and a modern frontend framework.",
      "Designed RESTful APIs and optimized database queries for faster, more reliable responses.",
      "Implemented secure authentication for user-facing features.",
    ],
    stack: ["Java", "Spring Boot", "REST APIs", "SQL"],
  },
];

// Newest first. `kind` picks the icon colour: work | project | award | education.
export const milestones = [
  {
    when: "Jun 2026",
    kind: "work",
    icon: "fas fa-rocket",
    title: "Joined Property Lab Myanmar",
    text: "Mid-Senior Full Stack Developer, building production web applications.",
  },
  {
    when: "May – Jul 2026",
    kind: "work",
    icon: "fas fa-briefcase",
    title: "Software Developer Intern at Myanmar DCR",
    text: "Spring Boot modules, REST APIs and secure authentication.",
  },
  {
    when: "2024 – 2025",
    kind: "award",
    icon: "fas fa-trophy",
    title: "First Prize, University Project Competition",
    text: "Top honors among peer engineering entries.",
  },
  {
    when: "2024 – 2025",
    kind: "project",
    icon: "fas fa-user-graduate",
    title: "Led the UCS(MDY) Student Registration System",
    text: "Project Leader for a full-stack enrollment platform.",
    link: "/project/student-registration",
  },
  {
    when: "2023 – 2024",
    kind: "award",
    icon: "fas fa-trophy",
    title: "First Prize, University Project Competition",
    text: "First place for technical execution and interface design.",
  },
  {
    when: "2023 – 2024",
    kind: "project",
    icon: "fas fa-book-open",
    title: "Built the Basic Literacy platform",
    text: "Core developer on a Ministry of Education project.",
    link: "/project/basic-literacy",
  },
  {
    when: "Oct 2021",
    kind: "work",
    icon: "fas fa-laptop-code",
    title: "Started freelancing",
    text: "Full-stack web apps for clients, from sketch to deployment.",
  },
  {
    when: "2020",
    kind: "education",
    icon: "fas fa-graduation-cap",
    title: "Started Computer Science at UCSM",
    text: "University of Computer Studies, Mandalay.",
  },
];

export const education = {
  school: "University of Computer Studies, Mandalay",
  short: "UCSM",
  degree: "Bachelor of Computer Science",
  period: "2020 — 2026",
  summary:
    "Software engineering, distributed systems, database design and full-stack web development, finishing with a thesis project.",
  focus: ["Software Engineering", "Distributed Systems", "Database Design", "Full-Stack Web"],
};

export const awards = [
  {
    id: "award-2025",
    title: "First Prize",
    event: "University Project Competition",
    period: "2024 — 2025",
    summary: "Top honors among peer engineering entries for an innovative system.",
  },
  {
    id: "award-2024",
    title: "First Prize",
    event: "University Project Competition",
    period: "2023 — 2024",
    summary: "First place at the annual exhibition for technical execution and interface design.",
  },
];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export const MONTH_INITIALS = MONTHS.map((m) => m[0]);

export function parseMonth(value) {
  if (!value) {
    const now = new Date();
    return { year: now.getFullYear(), month: now.getMonth() };
  }
  const [year, month] = value.split("-").map(Number);
  return { year, month: month - 1 };
}

export function formatMonth(value) {
  if (!value) return "Present";
  const { year, month } = parseMonth(value);
  return `${MONTHS[month]} ${year}`;
}

// Inclusive month count, e.g. May–Jul = 3 months.
export function monthsBetween(start, end) {
  const a = parseMonth(start);
  const b = parseMonth(end);
  return (b.year - a.year) * 12 + (b.month - a.month) + 1;
}

export function formatDuration(start, end) {
  const total = monthsBetween(start, end);
  const years = Math.floor(total / 12);
  const months = total % 12;
  const parts = [];
  if (years) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (months) parts.push(`${months} mo${months > 1 ? "s" : ""}`);
  return parts.join(" ");
}

export function formatRange(start, end) {
  return `${formatMonth(start)} – ${formatMonth(end)}`;
}
