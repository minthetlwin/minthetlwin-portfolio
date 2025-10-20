import React, { useEffect } from "react";
import "../../assets/css/style.css";
import logo from "../../assets/image/logo.png";
export default function Navbar() {
      useEffect(() => {
    const menuBtn = document.getElementById("menu");
    const navbar = document.querySelector(".navbar");
    const scrollTopBtn = document.getElementById("scroll-top");

    // 🟢 Toggle menu
    const handleMenuClick = () => {
      menuBtn.classList.toggle("fa-times");
      navbar.classList.toggle("nav-toggle");
    };

    // 🟢 Scroll & Load behavior
    const handleScroll = () => {
      menuBtn.classList.remove("fa-times");
      navbar.classList.remove("nav-toggle");

      if (window.scrollY > 60) {
        scrollTopBtn.classList.add("active");
      } else {
        scrollTopBtn.classList.remove("active");
      }

      // Scroll spy (highlight active nav link)
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll(".navbar ul li a");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 200;
        const sectionHeight = section.clientHeight;
        const id = section.getAttribute("id");
        const top = window.scrollY;

        if (top >= sectionTop && top < sectionTop + sectionHeight) {
          navLinks.forEach((link) => link.classList.remove("active"));
          const activeLink = document.querySelector(`.navbar a[href="#${id}"]`);
          if (activeLink) activeLink.classList.add("active");
        }
      });
    };

    // 🟢 Smooth scroll
    const smoothScroll = (e) => {
      const href = e.currentTarget.getAttribute("href");
      if (href.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          window.scrollTo({
            top: target.offsetTop,
            behavior: "smooth",
          });
        }
      }
    };

    // 🧩 Attach event listeners
    menuBtn.addEventListener("click", handleMenuClick);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("load", handleScroll);

    const anchorLinks = document.querySelectorAll('a[href*="#"]');
    anchorLinks.forEach((a) => a.addEventListener("click", smoothScroll));

    // 🧹 Cleanup
    return () => {
      menuBtn.removeEventListener("click", handleMenuClick);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", handleScroll);
      anchorLinks.forEach((a) => a.removeEventListener("click", smoothScroll));
    };
  }, []);

  return (
    <>
      <header>
        <a href="/" className="logo">
          <img src={logo} alt="Logo" />
        </a>

        <div id="menu" className="fas fa-bars"></div>
        <nav className="navbar">
          <ul>
            <li>
              <a className="active" href="#home">
                Home
              </a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#work">Project</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <a
        href="#home"
        aria-label="ScrollTop"
        className="fas fa-angle-up"
        id="scroll-top"
      ></a>
    </>
  );
}
