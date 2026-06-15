import Portfolio from '../../assets/image/project/portfolio.png';
import StudentRegistration from '../../assets/image/project/studentRegistration.png';
import WaHtaKa from '../../assets/image/project/wahtakalatha.png';
import JobFinder from '../../assets/image/project/jobFinder.png';
import Chronocraft from '../../assets/image/project/chronocraft.png';
import Restaurant from '../../assets/image/project/restaurant.png';

export const projectList = [
  {
  id: "portfolio-website",
  title: "Portfolio Website",
  img: Portfolio,
  desc: "A modern personal portfolio website designed to showcase my skills, projects, and professional journey through interactive animations and responsive user experiences.",

  tags: ["React", "CSS3", "Canvas API", "UI/UX"],

  purpose:
    "To establish a strong digital presence and create a centralized platform where recruiters, clients, and collaborators can explore my technical skills, projects, and professional experiences. The website was designed to represent my personal brand while demonstrating modern frontend development practices and responsive web design principles.",

  features:
    "Interactive background animations, responsive layouts for multiple screen sizes, smooth scrolling effects, animated sections, dynamic project showcases, reusable UI components, skills visualization, social media integration, and an intuitive user experience that improves accessibility and navigation throughout the website.",

  technologies:
    "React.js, CSS3, Canvas API, Framer Motion, React Icons, Responsive Design Principles",

  role:
    "Lead Frontend Developer & UI/UX Designer",

  outcome:
    "Successfully developed and deployed a modern portfolio website that effectively showcases my technical capabilities, strengthens my professional identity, and provides visitors with an engaging and interactive experience across different devices."
},

{
  id: "student-registration",
  title: "UCS(MDY) Student Registration System",
  img: StudentRegistration,
  desc: "A full-stack university registration management system that digitizes and streamlines student enrollment and administrative operations.",

  tags: ["Node.js", "MongoDB", "JWT", "Express.js", "React"],

  purpose:
    "To replace traditional paper-based registration procedures with a centralized digital platform that simplifies academic administration and improves the management of student records, payments, and registration workflows for university staff and students.",

  features:
    "Online registration form submission, student information management, payment management, academic year management, role and permission management, dashboard analytics, registration approval workflows, secure authentication, and real-time tracking of registration processes.",

  technologies:
    "React.js, Node.js, Express.js, MongoDB, JWT Authentication",

  role:
    "Project Leader",

  outcome:
    "Successfully built a centralized management system that reduces manual processes, improves data organization, and provides a more efficient workflow for administrators handling student registration activities."
},

{
  id: "basic-literacy",
  title: "Basic Literacy Project – Wa Hta Ka La Tha",
  img: WaHtaKa,
  desc: "A government-backed digital literacy education project developed under the Ministry of Education to support basic reading and writing skills through interactive learning tools.",

  tags: ["Full Stack", "Canvas API", "Social Impact", "Government Project"],

  purpose:
    "A government-backed educational initiative under the Ministry of Education designed to strengthen foundational literacy skills among learners through modern digital learning methods. The primary objective of this project is to bridge the gap between traditional classroom-based learning and interactive digital education by providing an accessible, technology-driven platform for reading and writing development. The system is intended to support early learners and underserved communities by offering structured learning activities, interactive writing practice, and guided educational content. Through the integration of digital tools such as interactive stroke tracking and user-friendly learning modules, the project aims to enhance engagement, improve learning outcomes, and support the long-term development of basic literacy education across targeted educational regions.",

  features:
    "Interactive writing practice, stroke tracking using Canvas API, educational assignments, activity-based learning modules, responsive interfaces, and user-friendly learning environments that encourage active participation.",

  technologies:
    "JavaScript, HTML5 Canvas API, Node.js, Full Stack Web Technologies",

  role:
    "Core Developer & Canvas Engine Developer",

  outcome:
    "Successfully delivered an educational platform that utilizes interactive digital experiences to support literacy development and improve engagement in learning activities."
},

{
  id: "job-finder",
  title: "Freelance Job Finder Platform",
  img: JobFinder,
  desc: "A freelance marketplace platform that connects clients and freelancers through job postings, proposals, and project management.",

  tags: ["Java", "JSP", "Servlet", "MySQL"],

  purpose:
    "To create a centralized platform that allows clients to publish job opportunities while enabling freelancers to discover projects, submit proposals, and collaborate effectively throughout the project lifecycle.",

  features:
    "Job posting and management, freelancer profile management, proposal submission and withdrawal, work submission, rating systems, user dashboards for freelancers, clients, and administrators, and activity management functionalities.",

  technologies:
    "Java, JSP, Servlets, MySQL, HTML, CSS, JavaScript",

  role:
    "Full Stack Java Developer & System Designer",

  outcome:
    "Successfully developed a collaborative platform that demonstrates practical implementation of object-oriented programming, database management, and role-based workflow management."
},

{
  id: "chronocraft",
  title: "ChronoCraft",
  img: Chronocraft,
  desc: "A modern productivity and time management platform designed to help users organize tasks and improve daily productivity.",

  tags: ["React", "UI/UX", "Productivity"],

  purpose:
    "To provide users with a centralized workspace that helps them manage daily tasks, monitor progress, and maintain productivity through an organized and user-friendly interface.",

  features:
    "Task management, progress tracking, reminder systems, calendar integration, productivity monitoring, intuitive user interfaces, and responsive layouts that support efficient daily planning.",

  technologies:
    "C#, .Net, SQL Server",

  role:
    "FullStack Developer",

  outcome:
    "Successfully developed a productivity application that encourages better time management habits and helps users maintain organized daily workflows."
},

{
  id: "restaurant-management",
  title: "Restaurant Management System",
  img: Restaurant,
  desc: "A digital restaurant management platform that streamlines restaurant operations and customer services.",

  tags: ["React", "Node.js", "MongoDB"],

  purpose:
    "To simplify restaurant operations by centralizing order management, menu management, and administrative tasks into a single digital platform that improves efficiency for both staff and customers.",

  features:
    "Digital menu management, online ordering, table reservation systems, order tracking, administrative dashboards, and management tools that simplify day-to-day restaurant operations.",

  technologies:
    "HTML5, CSS, JavaScript",

  role:
    "Full Stack Developer",

  outcome:
    "Successfully created a management platform that streamlines restaurant workflows, improves organization, and enhances the overall experience for both customers and restaurant staff."
}
];