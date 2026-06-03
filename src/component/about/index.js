import React, { useEffect, useRef } from "react";
import '../../assets/css/style.css';
import '../../assets/css/about.css';
import profileImg from '../../assets/image/profile.png';
import VanillaTilt from "vanilla-tilt";
import resume from '../../assets/minthetlwin_resume.pdf';

export default function About() {
  const tiltRef = useRef(null);

  useEffect(() => {
    const tiltNode = tiltRef.current;
    if (tiltNode) {
      VanillaTilt.init(tiltNode, {
        max: 12,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
      });
    }
    return () => {
      if (tiltNode && tiltNode.vanillaTilt) {
        tiltNode.vanillaTilt.destroy();
      }
    };
  }, []);

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);

    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birth.getDate())
    ) {
      age--;
    }

    return age;
  };

  return (
    <section className="modern-about-section" id="about">

      <div className="section-header">
        <span className="section-subtitle">Introduction</span>
        <h2 className="section-main-title"><i className="fas fa-user-alt"></i> About <span>Me</span></h2>
        <div className="title-bar"></div>
      </div>

      <div className="about-dashboard-grid">

        {/* Left Side: Avatar Container wrapped with locked aspect-ratios */}
        <div className="about-avatar-pane">
          <div className="tilt-avatar-frame" ref={tiltRef}>
            <img draggable="false" src={profileImg} alt="Min Thet Lwin Profile" />
            <div className="avatar-glass-tint"></div>
          </div>
        </div>

        {/* Right Side: Professional Bio & Metadata Grid */}
        <div className="about-content-pane">
          <div className="bio-intro">
            <h3>I'm Min Thet Lwin</h3>
            <span className="professional-tag">Full Stack Developer</span>
          </div>

          <p className="bio-description">
            I'm a Full-Stack Developer based in Mandalay, Myanmar. I specialize in building robust,
            secure backends and APIs using <strong>Laravel</strong>, complemented by crafting responsive,
            high-performance user interfaces with <strong>React.js</strong>. I excel at handling complete
            application pipelines—from complex database schemas down to rich, interactive user experiences.
          </p>

          {/* Key-Value Split Information Grid */}
          <div className="personal-meta-grid">
            <div className="meta-item">
              <i className="fas fa-calendar-check meta-icon"></i>
              <div className="meta-text">
                <span className="meta-label">Age</span>
                <span className="meta-value">
                  {calculateAge("2003-07-31")}
                </span>
              </div>
            </div>

            <div className="meta-item">
              <i className="fas fa-map-marker-alt meta-icon"></i>
              <div className="meta-text">
                <span className="meta-label">Location</span>
                <span className="meta-value">Mandalay, Myanmar</span>
              </div>
            </div>

            <div className="meta-item">
              <i className="fas fa-envelope meta-icon"></i>
              <div className="meta-text">
                <span className="meta-label">Email</span>
                <a href="mailto:minnthetlwinmtll31@gmail.com" className="meta-value link-value">minnthetlwinmtll31@gmail.com</a>
              </div>
            </div>

            <div className="meta-item">
              <i className="fas fa-phone-alt meta-icon"></i>
              <div className="meta-text">
                <span className="meta-label">Phone</span>
                <a href="tel:+959787950760" className="meta-value link-value">+959 787 950 760</a>
              </div>
            </div>
          </div>

          {/* Action Trigger Row */}
          <div className="about-actions-row">
            <a href={resume} target="_blank" rel="noreferrer" className="premium-resume-btn">
              <span>View Full CV / Resume</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}