import React from "react";
import '../../assets/css/style.css';
import '../../assets/css/footer.css'; // Recommended split file for clean architectures

export default function Footer() {
  return (
    <footer className="modern-footer">
      <div className="footer-layout-matrix">
        
        {/* Brand/Bio Core Block */}
        <div className="footer-brand-column">
          <h3>Min Thet Lwin <span>| Portfolio</span></h3>
          <p>
            Thanks for exploring my work! Let's build something exceptional together. 
            Connect with me across my channels to discuss development opportunities.
          </p>
        </div>

        {/* Quick Utilities Navigation */}
        <div className="footer-links-column">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
          </ul>
        </div>

        {/* Social Connection Channels */}
        <div className="footer-social-column">
          <h4>Connect</h4>
          <div className="footer-social-icons">
            <a href="https://github.com/minthetlwin" target="_blank" rel="noopener noreferrer" title="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/min-thet-lwin-474298317/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:minnthetlwinmtll31@gmail.com" title="Email Direct">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

      </div>

      {/* Production-grade Copyright Strip */}
      <div className="footer-copyright-strip">
        <p>&copy; {new Date().getFullYear()} Min Thet Lwin. All rights reserved.</p>
      </div>
    </footer>
  );
}