import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../assets/css/navbar.css";
import { profile } from "../../data/profile";
import avatar from "../../assets/image/profile.jpg";
import useScrollSpy from "../../hooks/useScrollSpy";

const NAV_ITEMS = [
  { label: "Experience", id: "experience" },
  { label: "Work", id: "work" },
  { label: "Skills", id: "skills" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];
const SECTION_IDS = NAV_ITEMS.map((item) => item.id);
const NAV_HEIGHT = 64; // keep in sync with --nav-height

// Light by default; public/index.html stamps the saved choice on <html> before first paint.
function getInitialTheme() {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

// Keep the browser's own UI (address bar tint, scrollbars, form controls) in step with the theme
function syncBrowserTheme(theme) {
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const colorScheme = document.querySelector('meta[name="color-scheme"]');
  if (themeColor) themeColor.content = theme === "dark" ? "#000000" : "#f5f5f7";
  if (colorScheme) colorScheme.content = theme;
}

export default function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isHome = pathname === "/";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);
  const [activeSection, lockTo] = useScrollSpy(SECTION_IDS, { enabled: isHome, topOffset: NAV_HEIGHT });

  const linkRefs = useRef({});
  const progressRef = useRef(null);
  const [indicator, setIndicator] = useState(null);

  // Header background + reading progress, written straight to the DOM (no re-render per frame).
  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`;
      setIsScrolled(window.scrollY > 8);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  // Sliding pill behind the active link.
  useLayoutEffect(() => {
    const measure = () => {
      const link = linkRefs.current[activeSection];
      setIndicator(link ? { left: link.offsetLeft, width: link.offsetWidth } : null);
    };
    measure();
    window.addEventListener("resize", measure);
    // Web fonts change link widths once they finish loading.
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
    return () => window.removeEventListener("resize", measure);
  }, [activeSection]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!isMenuOpen) return undefined;
    const onKey = (e) => e.key === "Escape" && setIsMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMenuOpen]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    syncBrowserTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {
      // Storage can be unavailable (private mode); the toggle still works for this visit.
    }
    setTheme(next);
  };

  const goToSection = (e, id) => {
    setIsMenuOpen(false);
    if (!isHome) return; // <Link> navigates to "/#id" and ScrollToHash takes over.
    e.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;
    lockTo(id);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
  };

  const goHome = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (isHome) {
      lockTo("");
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.replaceState(null, "", "/");
    } else {
      navigate("/");
    }
  };

  return (
    <header className={`site-nav ${isScrolled || isMenuOpen ? "is-scrolled" : ""} ${isMenuOpen ? "is-open" : ""}`}>
      <div className="container site-nav__inner">
        <Link to="/" className="site-nav__brand" onClick={goHome}>
          <span className="site-nav__avatar" style={{ backgroundImage: `url(${avatar})` }} aria-hidden="true"></span>
          {profile.name}
        </Link>

        <nav className="site-nav__menu" id="site-menu" aria-label="Primary">
          <ul className="site-nav__links">
            <li
              className="site-nav__indicator"
              aria-hidden="true"
              style={
                indicator
                  ? { width: indicator.width, transform: `translateX(${indicator.left}px)`, opacity: 1 }
                  : { opacity: 0 }
              }
            ></li>
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <Link
                    ref={(el) => (linkRefs.current[item.id] = el)}
                    to={{ pathname: "/", hash: `#${item.id}` }}
                    className={`site-nav__link ${isActive ? "is-active" : ""}`}
                    aria-current={isActive ? "location" : undefined}
                    onClick={(e) => goToSection(e, item.id)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <a href={profile.resume} target="_blank" rel="noreferrer" className="btn btn--primary btn--sm site-nav__cta-mobile">
            Download résumé
          </a>
        </nav>

        <div className="site-nav__actions">
          <button
            type="button"
            className="site-nav__icon"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            <i className={theme === "dark" ? "fas fa-sun" : "fas fa-moon"} aria-hidden="true"></i>
          </button>
          <a href={profile.resume} target="_blank" rel="noreferrer" className="btn btn--primary btn--sm site-nav__cta">
            Résumé
          </a>
          <button
            type="button"
            className="site-nav__icon site-nav__toggle"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="site-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <span className="site-nav__burger" aria-hidden="true"></span>
          </button>
        </div>
      </div>

      <div className="site-nav__progress" aria-hidden="true">
        <span ref={progressRef}></span>
      </div>
    </header>
  );
}
