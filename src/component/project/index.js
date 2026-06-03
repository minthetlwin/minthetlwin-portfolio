import React, { useRef, useEffect } from "react";
import '../../assets/css/style.css';
import '../../assets/css/project.css';
import Portfolio from '../../assets/image/project/portfolio.png';
import StudentRegistration from '../../assets/image/project/studentRegistration.png';
import WaHtaKa from '../../assets/image/project/wahtakalatha.png';
import RemoteCode from '../../assets/image/project/remoteCode.png';
import JobFinder from '../../assets/image/project/jobFinder.png';
import Chronocraft from '../../assets/image/project/chronocraft.png';
import Restaurant from '../../assets/image/project/restaurant.png';
import Music from '../../assets/image/project/music.png';

export default function Project() {
  const canvasRef = useRef(null);
  const stars = [];
  const numStars = 100; // Optimized for performance

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.2 + 0.4,
        alpha: Math.random(),
        delta: Math.random() * 0.015,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (let star of stars) {
        star.alpha += star.delta;
        if (star.alpha <= 0 || star.alpha >= 1) star.delta *= -1;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
      }
      requestAnimationFrame(draw);
    };

    const animFrame = requestAnimationFrame(draw);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Project data array to clean up rendering and easily scale features
  const projectList = [
    {
      title: "Portfolio Website",
      img: Portfolio,
      desc: "A high-end personal presentation platform engineered with specialized modern components to display dynamic web development growth and functional interface frameworks.",
      tags: ["React", "CSS3", "Canvas API", "UI/UX"]
    },
    {
      title: "UCS(MDY) Student Registration System",
      img: StudentRegistration,
      desc: "An enterprise-grade online enrollment solution featuring complex administrative workflows, payment processing systems, and role-based validation filters.",
      tags: ["Node.js", "MongoDB", "JWT Token","Express.js","React Framework"]
    },
    {
  title: "Basic Literacy Project – Wa Hta Ka La Tha",
  img: WaHtaKa,
  desc: "Government-backed digital education platform designed to support literacy learning, featuring a custom canvas-based Myanmar alphabet writing system (Ah Thone Lone Course) and tools for coordinating learning resources across regions.",
  tags: ["Full Stack", "Canvas API", "Social Impact", "Government Project"]
},
    // {
    //   title: "RemoteCode Execution & Compiler",
    //   img: RemoteCode,
    //   desc: "A distributed Java RMI architecture supporting sandbox remote compilation. Upgraded with a secure Spring Boot microservices bridge for modern browser execution.",
    //   tags: ["Java RMI", "Spring Boot", "Sandbox Execution"]
    // },
    {
      title: "JobFinder Platform",
      img: JobFinder,
      desc: "A multi-dashboard gig marketplace optimizing workspace channels for freelancers, corporate partners, and structural back-office moderation.",
      tags: ["Java EE", "Dynamic Web", "Database Architecture"]
    },
    {
      title: "ChronoCraft - EventManager",
      img: Chronocraft,
      desc: "An advanced desktop operations hub built using C# leveraging asynchronous micro-events to trigger persistent operational alerts and cross-user planning streams.",
      tags: ["C#", ".NET Core", "Event-Driven", "UI Automation"]
    },
    // {
    //   title: "Music Streaming Hub",
    //   img: Music,
    //   desc: "A responsive media streaming site managing live buffers, state persistence, audio context nodes, and personalized relational discovery queues.",
    //   tags: ["Web Audio API", "JavaScript", "Cloud Systems"]
    // },
    {
      title: "Restaurant QR Ordering Architecture",
      img: Restaurant,
      desc: "A transactional contactless checkout system matching tables directly to kitchen pipelines using automated localized query parameters and dynamic routing.",
      tags: ["Real-time Networking", "Node.js", "QR Architecture"]
    }
  ];

  return (
    <section className="modern-projects-section" id="work">
      {/* <canvas ref={canvasRef} className="stars-canvas"></canvas> */}
      
      <div className="section-header">
        <span className="section-subtitle">My Creative Lab</span>
        <h2 className="section-main-title"><i className="fas fa-laptop-code"></i> Engineering Masterpieces</h2>
        <div className="title-bar"></div>
      </div>

      <div className="modern-bento-grid">
        {projectList.map((project, idx) => (
          <div className="bento-card" key={idx}>
            <div className="card-media-wrapper">
              <img draggable="false" src={project.img} alt={project.title} loading="lazy" />
              <div className="media-overlay-glow"></div>
            </div>
            <div className="card-body-content">
              <div className="tech-badge-container">
                {project.tags.map((tag, tIdx) => (
                  <span className="tech-badge" key={tIdx}>{tag}</span>
                ))}
              </div>
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-description">{project.desc}</p>
              {/* <div className="project-card-actions">
                <a href="#work" className="action-link view-demo">
                  <span>Explore Architecture</span> <i className="fas fa-arrow-right"></i>
                </a>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}