import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { projectList } from "./projectData";
import '../../assets/css/style.css';
import '../../assets/css/project.css';

export default function Project() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const cards = cardRefs.current;

    const handleMouseMove = (e, card) => {
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;

      // Subtle 3-D tilt: max ±5 degrees keeps the grid elegant
      const rotateX = ((y - cy) / cy) * -5;
      const rotateY = ((x - cx) / cx) * 5;

      // Parallax depth: background image shifts slightly opposite the tilt
      const parallaxX = ((x - cx) / cx) * -8;
      const parallaxY = ((y - cy) / cy) * -8;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
      card.style.setProperty("--rotate-x", `${rotateX}deg`);
      card.style.setProperty("--rotate-y", `${rotateY}deg`);
      card.style.setProperty("--parallax-x", `${parallaxX}px`);
      card.style.setProperty("--parallax-y", `${parallaxY}px`);
      card.style.setProperty("--spotlight-opacity", "1");
    };

    const handleMouseLeave = (card) => {
      if (!card) return;
      card.style.transition =
        "transform 0.65s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.4s ease, box-shadow 0.4s ease";
      card.style.setProperty("--rotate-x", "0deg");
      card.style.setProperty("--rotate-y", "0deg");
      card.style.setProperty("--parallax-x", "0px");
      card.style.setProperty("--parallax-y", "0px");
      card.style.setProperty("--spotlight-opacity", "0");
    };

    const handleMouseEnter = (card) => {
      if (!card) return;
      card.style.transition =
        "transform 0.12s linear, border-color 0.4s ease, box-shadow 0.4s ease";
    };

    cards.forEach((card) => {
      if (!card) return;
      const move = (e) => handleMouseMove(e, card);
      const leave = () => handleMouseLeave(card);
      const enter = () => handleMouseEnter(card);
      card.addEventListener("mousemove", move);
      card.addEventListener("mouseleave", leave);
      card.addEventListener("mouseenter", enter);
      card._handlers = { move, leave, enter };
    });

    return () => {
      cards.forEach((card) => {
        if (!card || !card._handlers) return;
        card.removeEventListener("mousemove", card._handlers.move);
        card.removeEventListener("mouseleave", card._handlers.leave);
        card.removeEventListener("mouseenter", card._handlers.enter);
      });
    };
  }, []);

  return (
    <section className="modern-projects-section" id="work">
      {/* Section header */}
      <div className="section-header">
        <span className="section-subtitle">My Creative Lab</span>
        <h2 className="section-main-title">
          <i className="fas fa-laptop-code" aria-hidden="true"></i>
          Engineering Masterpieces
        </h2>
        <div className="title-bar"></div>
      </div>

      {/* Bento grid */}
      <div className="modern-compact-bento-grid">
        {projectList.map((project, idx) => (
          <Link
            to={`/project/${project.id}`}
            className="bento-card-link"
            key={project.id}
            aria-label={`View details for ${project.title}`}
          >
            <div
              className="compact-glass-card"
              ref={(el) => (cardRefs.current[idx] = el)}
            >
              {/* Background parallax image */}
              <div
                className="card-bg-parallax-wrapper"
                style={{
                  transform:
                    "scale(1.14) translate(var(--parallax-x, 0px), var(--parallax-y, 0px))",
                  transition: "transform 0.12s linear",
                }}
              >
                <img
                  draggable="false"
                  src={project.img}
                  alt=""
                  loading="lazy"
                />
                <div className="card-darkening-overlay" />
              </div>

              {/* Frosted glass info panel */}
              <div className="card-glass-content-panel">
                {/* Tech badge row — capped at 3 */}
                <div className="tech-badge-container">
                  {project.tags.slice(0, 3).map((tag, tIdx) => (
                    <span className="tech-badge" key={tIdx}>
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-description">{project.desc}</p>

                <div className="project-card-actions">
                  <span className="action-link">
                    <span>View Case Study</span>
                    <i className="fas fa-arrow-right arrow-icon" aria-hidden="true"></i>
                  </span>
                </div>
              </div>

              {/* Mouse-tracking specular glow */}
              <div className="glass-specular-glow" aria-hidden="true" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
