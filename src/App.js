
import './App.css';
import React from 'react';
import { useRef, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Navbar from './component/navbar/index';
import Home from './component/home/index';
import About from './component/about/index';
import Skill from './component/skill/index';
import Education from './component/education/index';
import Project from './component/project/index';
import Experience from './component/experience/index';
import Contact from './component/contact/index';
import Footer from './component/footer/index';


function App() {
   useEffect(() => {
    const srtop = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 1000,
      reset: true,
    });
  const timer = setTimeout(() => {
    /* ===== HOME ===== */
    srtop.reveal(".home .content h3", { delay: 200 });
    srtop.reveal(".home .content p", { delay: 200 });
    srtop.reveal(".home .content .btn", { delay: 200 });
    srtop.reveal(".home .image", { delay: 400 });
    srtop.reveal(".home .linkedin", { interval: 600 });
    srtop.reveal(".home .github", { interval: 800 });
    srtop.reveal(".home .twitter", { interval: 1000 });
    srtop.reveal(".home .telegram", { interval: 600 });
    srtop.reveal(".home .instagram", { interval: 600 });
    srtop.reveal(".home .dev", { interval: 600 });

     /* ===== ABOUT ===== */
    srtop.reveal(".about .content h3", { delay: 200 });
    srtop.reveal(".about .content .tag", { delay: 200 });
    srtop.reveal(".about .content p", { delay: 200 });
    srtop.reveal(".about .content .box-container", { delay: 200 });
    srtop.reveal(".about .content .resumebtn", { delay: 200 });

    /* ===== SKILLS ===== */
    srtop.reveal(".skills .container", { interval: 200 });
    srtop.reveal(".skills .container .bar", { delay: 400 });

    /* ===== EDUCATION ===== */
    srtop.reveal(".education .box", { interval: 200 });

    /* ===== PROJECTS ===== */
    srtop.reveal(".work .box", { interval: 200 });

    /* ===== EXPERIENCE ===== */
    srtop.reveal(".experience .timeline", { delay: 400 });
    srtop.reveal(".experience .timeline .container", { interval: 400 });

    /* ===== CONTACT ===== */
    srtop.reveal(".contact .container", { delay: 400 });
    srtop.reveal(".contact .container .form-group", { delay: 400 });
    }, 300); // slight delay (300ms)
}, []);
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Skill/>
      <Education/>
      <Project/>
      <Experience/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
