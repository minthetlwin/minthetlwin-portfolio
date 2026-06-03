import React from "react";
import '../../assets/css/style.css';
import '../../assets/css/skill.css';
import java from '../../assets/image/skill/icons8-java-48.png';
import php from '../../assets/image/skill/icons8-php-64.png';
import python from '../../assets/image/skill/icons8-python-48.png';
import cplus from '../../assets/image/skill/icons8-c-48.png';
import csharp from '../../assets/image/skill/icons8-cshar-48.png'; 
import reactIcon from '../../assets/image/skill/icons8-react-native-48.png';
import html from '../../assets/image/skill/icons8-html5-48.png';
import css from '../../assets/image/skill/icons8-css-48.png';
import javascript from '../../assets/image/skill/icons8-javascript-48.png';
import mysql from '../../assets/image/skill/icons8-mysql-48.png';
import github from '../../assets/image/skill/icons8-github-48.png';
import laravel from '../../assets/image/skill/icons8-laravel-64.png';

export default function Skill() {

  const techStack = [
    { name: "Java", icon: java, category: "language" },
    { name: "PHP", icon: php, category: "language" },
    { name: "Laravel", icon: laravel, category: "framework" },
    { name: "React JS", icon: reactIcon, category: "framework" },
    { name: "JavaScript", icon: javascript, category: "language" },
    { name: "MySQL", icon: mysql, category: "database" },
    { name: "Python", icon: python, category: "language" },
    { name: "C++", icon: cplus, category: "language" },
    { name: "C#", icon: csharp, category: "language" },
    { name: "HTML5", icon: html, category: "frontend" },
    { name: "CSS3", icon: css, category: "frontend" },
    { name: "GitHub", icon: github, category: "tool" },
  ];

  // Combine both sets so the key assignments stay safe and clean
  const doubleStack = [...techStack, ...techStack];

  return (
    <section className="modern-skills-section" id="skills">

      <div className="section-header">
        <span className="section-subtitle">Capabilities</span>
        <h2 className="section-main-title">
          <i className="fas fa-laptop-code"></i> Skills & <span>Abilities</span>
        </h2>
        <div className="title-bar"></div>
      </div>

      {/* Marquee Wrapper Window */}
      <div className="skills-marquee-viewport">
        <div className="skills-marquee-track">
          {doubleStack.map((skill, index) => (
            <div className="skill-card-pill" key={index} data-category={skill.category}>
              <div className="skill-icon-wrapper">
                <img src={skill.icon} alt={`${skill.name} Icon`} draggable="false" />
              </div>
              <div className="skill-info-pane">
                <h3>{skill.name}</h3>
                <span className="skill-category-label">{skill.category}</span>
              </div>
              <div className="pill-glow-overlay"></div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};