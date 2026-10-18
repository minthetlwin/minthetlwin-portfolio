import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./assets/css/style.css";

import Navbar from "./component/navbar/index";
import Footer from "./component/footer/index";
import Home from "./component/home/index";
import Experience from "./component/experience/index";
import Project from "./component/project/index";
import Skill from "./component/skill/index";
import Education from "./component/education/index";
import Contact from "./component/contact/index";
import ProjectDetail from "./component/project/projectDetail";
import ScrollToHash from "./scrollToHash";
import useMotion from "./hooks/useMotion";
import usePointerGlow from "./hooks/usePointerGlow";

function MainPortfolio() {
  return (
    <>
      <Home />
      <Experience />
      <Project />
      <Skill />
      <Education />
      <Contact />
    </>
  );
}

// Lives inside the router so motion re-registers on every route change.
function Motion() {
  const { pathname } = useLocation();
  useMotion(pathname);
  usePointerGlow();
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToHash />
      <Motion />
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Routes>
          <Route path="/" element={<MainPortfolio />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
