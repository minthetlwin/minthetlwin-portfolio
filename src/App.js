import './App.css';

import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollReveal from "scrollreveal";



// Layout & Navigation Components

import Navbar from './component/navbar/index';

import Footer from './component/footer/index';

import Preloader from './assets/js/preloder';



// Main Portfolio Sections

import Home from './component/home/index';

import About from './component/about/index';

import Skill from './component/skill/index';

import Education from './component/education/index';

import Project from './component/project/index';

import Experience from './component/experience/index';

import Contact from './component/contact/index';

import ScrollToHash from './scrollToHash';

import ProjectDetail from './component/project/projectDetail';



function MainPortfolio() {

  useEffect(() => {

    const srtop = ScrollReveal({

      origin: "top",

      distance: "80px",

      duration: 1000,

      reset: true,

    });



    const timer = setTimeout(() => {

      srtop.reveal(".home .content h3", { delay: 200 });

      srtop.reveal(".home .content p", { delay: 200 });

      srtop.reveal(".skills .container", { interval: 200 });

      srtop.reveal(".work .box", { interval: 200 });

    }, 300);



    return () => clearTimeout(timer);

  }, []);



  return (

    <>

      <Home />

      <About />

      <Skill />

      <Education />

      <Project />

      <Experience />

      <Contact />

    </>

  );

}



function App() {

  const [loading, setLoading] = useState(true);

  const [fadeOut, setFadeOut] = useState(false);

 

  // High-performance real-time pointer location state coordinates

  const [coords, setCoords] = useState({ x: -100, y: -100 });



  useEffect(() => {

    const handleMouseMove = (e) => {

      setCoords({ x: e.clientX, y: e.clientY });



      // Synchronize the mouse positions directly to the CSS engine for the spotlight backdrop

      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);

      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);

    };



    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => window.removeEventListener('mousemove', handleMouseMove);

  }, []);



  useEffect(() => {

    document.body.classList.add('no-scroll');

    const triggerFadeTimer = setTimeout(() => {

      setFadeOut(true);

      const unmountTimer = setTimeout(() => {

        setLoading(false);

        document.body.classList.remove('no-scroll');

      }, 400);

      return () => clearTimeout(unmountTimer);

    }, 3500);



    return () => {

      clearTimeout(triggerFadeTimer);

      document.body.classList.remove('no-scroll');

    };

  }, []);



  return (

    <Router>

      <ScrollToHash />

     

      {/* 1. BRIGHT SPOTLIGHT GLOW BACKGROUND LAYER */}

      <div className="global-mouse-spotlight" aria-hidden="true" />

     

      {/* 2. DEAD CENTER TRACKING PINPOINT PIN */}

      <div

        className="smooth-cursor-dot"

        style={{ transform: `translate3d(${coords.x}px, ${coords.y}px, 0)` }}

      />

     

      {/* 3. MATTE GEOMETRIC RING HALO TRAIL */}

      <div

        className="smooth-cursor-ring"

        style={{ transform: `translate3d(${coords.x}px, ${coords.y}px, 0)` }}

      />



      {loading && <Preloader isFadingOut={fadeOut} />}

     

      <Navbar />



      <Routes>

        <Route path="/" element={<MainPortfolio />} />

        <Route path="/project/:id" element={<ProjectDetail />} />

      </Routes>



      <Footer />

    </Router>

  );

}



export default App; 