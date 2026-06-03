import React from "react";
import '../../assets/css/style.css';
import '../../assets/css/experience.css';

export default function Experience() {
  return (
    <section className="modern-experience-section" id="experience">
      <div className="section-ambient-glow"></div>

      <div className="experience-max-container">
        <div className="section-header">
          <span className="section-subtitle">Road Map</span>
          <h2 className="section-main-title"><i className="fas fa-briefcase"></i> Professional <span>Journey</span></h2>
          <div className="title-bar"></div>
        </div>

        {/* Clean, Non-Alternating Roadmap Track */}
        <div className="roadmap-track">

          {/* Node 1: Present */}
          <div className="roadmap-step active-node">
            <div className="roadmap-marker">
              <span className="marker-core"></span>
            </div>
            <div className="roadmap-info-grid">
              <div className="roadmap-meta">
                <span className="roadmap-duration-badge">Oct 2021 — Present</span>
                <span className="roadmap-org-type">Independent</span>
              </div>
              <div className="roadmap-details">
                <h3 className="roadmap-role-title">Full Stack Developer</h3>
                <h4 className="roadmap-company-name">Self Employed</h4>
                <p className="roadmap-brief">
                  Architecting and shipping responsive web apps, managing end-to-end delivery pipelines, and consulting on modern architecture design patterns.
                </p>
              </div>
            </div>
          </div>

          {/* Node 2: 2023-2024 Competition */}
          <div className="roadmap-step">
            <div className="roadmap-marker">
              <span className="marker-core"></span>
            </div>
            <div className="roadmap-info-grid">
              <div className="roadmap-meta">
                <span className="roadmap-duration-badge">2023 — 2024</span>
                <span className="roadmap-org-type font-award">Award Winner</span>
              </div>
              <div className="roadmap-details">
                <h3 className="roadmap-role-title">First Prize Winner</h3>
                <h4 className="roadmap-company-name">University Project Competition</h4>
                <p className="roadmap-brief">
                  Recognized for technical execution and interface design excellence, achieving first place in the annual university exhibition.
                </p>
              </div>
            </div>
          </div>

          {/* Node 3: Gov Literacy Project */}
          <div className="roadmap-step">
            <div className="roadmap-marker">
              <span className="marker-core"></span>
            </div>
            <div className="roadmap-info-grid">
              <div className="roadmap-meta">
                <span className="roadmap-duration-badge">2023 — 2024</span>
                <span className="roadmap-org-type">Public Sector</span>
              </div>
              <div className="roadmap-details">
                <h3 className="roadmap-role-title">Website Developer</h3>
                <h4 className="roadmap-company-name">Government's Basic Literacy Project</h4>
                <p className="roadmap-brief">
                  Developed an accessible, highly legible information system web portal aimed at helping citizens access public educational resources.
                </p>
              </div>
            </div>
          </div>

          {/* Node 4: 2024-2025 Competition */}
          <div className="roadmap-step">
            <div className="roadmap-marker">
              <span className="marker-core"></span>
            </div>
            <div className="roadmap-info-grid">
              <div className="roadmap-meta">
                <span className="roadmap-duration-badge">2024 — 2025</span>
                <span className="roadmap-org-type font-award">Award Winner</span>
              </div>
              <div className="roadmap-details">
                <h3 className="roadmap-role-title">First Prize Winner</h3>
                <h4 className="roadmap-company-name">University Project Competition</h4>
                <p className="roadmap-brief">
                  Engineered an innovative system that secured top honors among peer engineering entries during the academic year.
                </p>
              </div>
            </div>
          </div>

          {/* Node 5: Registration System */}
          <div className="roadmap-step">
            <div className="roadmap-marker">
              <span className="marker-core"></span>
            </div>
            <div className="roadmap-info-grid">
              <div className="roadmap-meta">
                <span className="roadmap-duration-badge">2024 — 2025</span>
                <span className="roadmap-org-type">Academic System</span>
              </div>
              <div className="roadmap-details">
                <h3 className="roadmap-role-title">Full Stack Developer</h3>
                <h4 className="roadmap-company-name">University Student Registration System</h4>
                <p className="roadmap-brief">
                  Designed, developed, and optimized a secure, high-throughput student portal application handling registration and user records data management.
                </p>
              </div>
            </div>
          </div>

          {/* Node 6: Internship */}
          <div className="roadmap-step">
            <div className="roadmap-marker">
              <span className="marker-core"></span>
            </div>
            <div className="roadmap-info-grid">
              <div className="roadmap-meta">
                <span className="roadmap-duration-badge">2026</span>
                <span className="roadmap-org-type">Internship</span>
              </div>
              <div className="roadmap-details">
                <h3 className="roadmap-role-title">Full Stack Developer Intern</h3>
                <h4 className="roadmap-company-name">Myanmar DCR Co., Ltd.</h4>
                <p className="roadmap-brief">
                  Developed scalable web architectures using Java Spring Boot and modern frontend frameworks.
                  Engineered robust RESTful APIs, optimized database queries, and implemented secure
                  authentication protocols to deliver seamless, high-performance user experiences.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}