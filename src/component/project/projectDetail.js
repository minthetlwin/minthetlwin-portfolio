import React, { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projectList } from "./projectData";
import '../../assets/css/style.css';
import '../../assets/css/projectDetail.css';

const INFO_SECTIONS = [
  { icon: "fas fa-bullseye",   label: "Purpose",      key: "purpose"      },
  { icon: "fas fa-star",       label: "Features",     key: "features"     },
  { icon: "fas fa-code",       label: "Technologies", key: "technologies", tech: true },
  { icon: "fas fa-user-tag",   label: "Your Role",    key: "role"         },
  { icon: "fas fa-chart-line", label: "Outcome",      key: "outcome"      },
];

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const leftColumnRef = useRef(null);
  const trackRef = useRef(null);

  const project = projectList.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  useEffect(() => {
    const handleScroll = () => {
      if (!leftColumnRef.current || !trackRef.current) return;

      const rect = leftColumnRef.current.getBoundingClientRect();
      const totalHeight = rect.height - window.innerHeight;
      const scrolledPast = -rect.top;
      
      let progress = 0;
      if (totalHeight > 0) {
        progress = Math.max(0, Math.min(1, scrolledPast / totalHeight));
      } else {
        const pageScrolled = window.scrollY;
        const totalPageScroll = document.documentElement.scrollHeight - window.innerHeight;
        progress = totalPageScroll > 0 ? pageScrolled / totalPageScroll : 0;
      }

      trackRef.current.style.setProperty("--scroll-progress", `${progress * 100}%`);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [project]);

  // Combined routine to route home and find target section smoothly
  const handleBackToProjects = (e) => {
    e.preventDefault();
    
    // Navigate home with the anchor fragment attached
    navigate("/#work");

    // Fallback: If already home or router delays rendering, force element viewport scroll focus
    setTimeout(() => {
      const targetSection = document.getElementById("projects");
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 80);
  };

  if (!project) {
    return (
      <div className="error-container">
        <div className="error-glass-panel">
          <h2>Project not found</h2>
          <p>The system profile you are tracking down doesn't exist.</p>
          <button onClick={() => navigate("/#work")} className="back-home-btn">
            <i className="fas fa-home"></i> Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="project-detail-page-section">
      <div className="detail-navigation-header">
        {/* Changed from Link to a dynamic semantic button handler */}
        <button onClick={handleBackToProjects} className="back-to-home-link-btn">
          <i className="fas fa-arrow-left" aria-hidden="true"></i>
          <span>Back to Engineering Masterpieces</span>
        </button>
      </div>

      <div className="project-detail-row">
        {/* LEFT COMPONENT — Scrollable Content Elements */}
        <div className="project-info-column" ref={leftColumnRef}>
          <h1 className="project-detail-title">{project.title}</h1>

          {project.tags && (
            <div className="detail-badge-container">
              {project.tags.map((tag, i) => (
                <span className="detail-tech-badge" key={i}>{tag}</span>
              ))}
            </div>
          )}

          <div className="info-blocks-stack">
            {INFO_SECTIONS.map(({ icon, label, key, tech }) => {
              const value = project[key];
              if (!value) return null;
              return (
                <div className="detail-info-glass-card" key={key}>
                  <h4>
                    <i className={icon} aria-hidden="true"></i>
                    <span>{label}</span>
                  </h4>
                  <p className={tech ? "tech-highlight-strings" : undefined}>
                    {value}
                  </p>
                </div>
              );
            })}
          </div>

          {(project.liveUrl || project.repoUrl) && (
            <div className="detail-links-action-row">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="action-button-glass primary">
                  <i className="fas fa-external-link-alt" aria-hidden="true"></i>
                  <span>Launch Live Deployment</span>
                </a>
              )}
              {project.repoUrl && (
                <a href={project.repoUrl} target="_blank" rel="noreferrer" className="action-button-glass secondary">
                  <i className="fab fa-github" aria-hidden="true"></i>
                  <span>Inspect Source Code</span>
                </a>
              )}
            </div>
          )}
        </div>

        {/* RIGHT COMPONENT — Glass Container + Right Edge Laser Bar Tracker */}
        <div className="project-sticky-media-column">
          <div className="media-and-tracker-container">
            <div className="premium-glass-media-wrapper">
              <div className="media-inner-frame">
                <img draggable="false" src={project.img} alt={project.title} />
                <div className="media-lighting-shield" aria-hidden="true" />
              </div>

              <div className="integrated-glass-rail" ref={trackRef}>
                <div className="rail-glow-trail"></div>
                <div className="neon-filament-indicator"></div>
              </div>
            </div>

            {project.year && (
              <div className="detail-meta-glass-strip">
                <span className="meta-label">Temporal Window</span>
                <span className="meta-value">{project.year}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}