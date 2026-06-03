import React, { useState, useEffect } from "react";
import "../../assets/css/style.css";
import "../../assets/css/navbar.css"; // Moved styling to a designated stylesheet
import logo from "../../assets/image/logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Education", id: "education" },
    { label: "Project", id: "work" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScrollAndSpy = () => {
      // 1. Structural Header Transformation State
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // 2. High-Performance Intersection / Scroll Spy Tracker
      const sections = document.querySelectorAll("section, header[id='home']");
      const scrollPosition = window.scrollY + window.innerHeight * 0.35; // Trigger early for best accuracy

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const id = section.getAttribute("id");

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          if (id) setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScrollAndSpy);
    // Execute immediately on mount to clear state discrepancies
    handleScrollAndSpy();

    return () => window.removeEventListener("scroll", handleScrollAndSpy);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false); // Clean overlay closing on mobile viewports

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = 80; // Compensates for the fixed sticky navbar container
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header className={`premium-header ${isScrolled ? "header-scrolled" : ""}`}>
        <div className="header-container">
          
          <a href="#home" onClick={(e) => handleNavLinkClick(e, "home")} className="text-logo-wrapper">
  <span className="logo-accent-initial">Min</span>Thet Lwin
  <span className="logo-terminal-dot">.</span>
</a>

          {/* Fully Interactive Accessible Menu Toggle Button */}
          <button 
            className={`mobile-menu-toggle ${isMenuOpen ? "toggle-active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation system menus"
          >
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </button>

          {/* Controlled Nav Bar Interface */}
          <nav className={`navbar-overlay ${isMenuOpen ? "overlay-open" : ""}`}>
            <ul className="nav-links-list">
              {navItems.map((item) => (
                <li key={item.id} className="nav-item-node">
                  <a
                    href={`#${item.id}`}
                    className={`nav-link ${activeSection === item.id ? "active-route" : ""}`}
                    onClick={(e) => handleNavLinkClick(e, item.id)}
                  >
                    {item.label}
                    <span className="active-tracker-dot"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

        </div>
      </header>

      {/* Structured Floating Action Top Scroller Control */}
      <button
        onClick={scrollToTop}
        aria-label="Return to initial hero layer"
        className={`scroll-top-action ${isScrolled ? "reveal-action" : ""}`}
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  );
}