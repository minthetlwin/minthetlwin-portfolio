import React from "react";
import '../../assets/css/style.css';
import "../../assets/css/education.css";
import Ucsmdy from '../../assets/image/education/ucsmdy.jpg';

export default function Education(){
  return(
    <section className="modern-education-section" id="education">
      
      <div className="section-header">
        <span className="section-subtitle">Academic Journey</span>
        <h2 className="section-main-title"><i className="fas fa-graduation-cap"></i> My Education</h2>
        <div className="title-bar"></div>
      </div>

      <div className="education-dashboard-layout">
        
        {/* Left Column: Timeline & Philosophical Quote */}
        <div className="education-info-pane">
          <blockquote className="premium-quote">
            <i className="fas fa-quote-left quote-icon"></i>
            <p>Learning facts fills the mind; education teaches it to explore and question.</p>
          </blockquote>

          {/* Clean tracker line to show progression */}
          <div className="academic-timeline">
            <div className="timeline-node-item">
              <div className="node-marker-glow"></div>
              <div className="node-details">
                <span className="node-date">2020 — 2026</span>
                <h4 className="node-milestone">Core Specialization & Thesis Completion</h4>
                <p className="node-summary">Focused heavily on advanced software engineering tracks, distributed systems architecture, database schemas, and building full-stack web applications.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Premium locked showcase card */}
        <div className="education-display-card">
          <div className="institution-media-wrapper">
            <img draggable="false" src={Ucsmdy} alt="University of Computer Studies (Mandalay)" />
            <div className="institution-gradient-shading"></div>
          </div>
          
          <div className="institution-body-content">
            <div className="degree-badge">Undergraduate Program</div>
            <h3 className="degree-title">Bachelor of Computer Science</h3>
            <span className="institution-name">University of Computer Studies, Mandalay (UCSM)</span>
            
            <div className="academic-highlights-row">
              <div className="highlight-metric">
                <i className="fas fa-calendar-alt"></i>
                <span>5 Years Academic Cycle</span>
              </div>
              <div className="highlight-metric">
                <i className="fas fa-laptop-code"></i>
                <span>Computer Science Major</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}