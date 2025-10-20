import React, { useRef, useEffect } from "react";
import '../../assets/css/style.css';
import Portfolio from '../../assets/image/project/portfolio.png';
import StudentRegistration from '../../assets/image/project/studentRegistration.png';
import WaHtaKa from '../../assets/image/project/wahtakalatha.png';
import RemoteCode from '../../assets/image/project/remoteCode.png';
import JobFinder from '../../assets/image/project/jobFinder.png';
import Chronocraft from '../../assets/image/project/chronocraft.png';
import Restaurant from '../../assets/image/project/restaurant.png';
import Music from '../../assets/image/project/music.png';
import MagicPuzzle from '../../assets/image/project/magicPuzzle.png';

export default function Project(){
  
  const canvasRef = useRef(null);
  const stars = [];
  const numStars = 150;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Create stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random(),
        delta: Math.random() * 0.02,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let star of stars) {
        // Twinkling effect
        star.alpha += star.delta;
        if (star.alpha <= 0 || star.alpha >= 1) star.delta *= -1;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
      }

      requestAnimationFrame(draw);
    };

    draw();

    // Handle window resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      stars.length = 0;
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.5 + 0.5,
          alpha: Math.random(),
          delta: Math.random() * 0.02,
        });
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

    return(
        <section class="work" id="work">
<canvas ref={canvasRef} id="background"></canvas>
  <h2 class="heading"><i class="fas fa-laptop-code"></i> Projects</h2>

  <div class="box-container">
{/* Portfolio Website */}
    <div class="box tilt">
      <img draggable="false" src={Portfolio} alt="" />
      <div class="content">
        <div class="tag">
        <h3>Portfolio Website</h3>
        </div>
        <div class="desc">
          <p>This portfolio website showcases the projects I’ve built throughout my learning and development journey — from web applications and admin panels to creative systems and design experiments. Each project reflects my growth, passion, and dedication to building clean, functional, and meaningful digital experiences.</p>
          <div class="btns">
            {/* <a href="#" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a> */}
            {/* <a href="https://github.com/jigar-sable/Portfolio-Website" class="btn" target="_blank">Code <i class="fas fa-code"></i></a> */}
          </div>
        </div>
      </div>
    </div>

{/* Student Registration System */}
    <div class="box tilt">
      <img draggable="false" src={StudentRegistration} alt="" />
      <div class="content">
        <div class="tag">
        <h3>UCS(MDY) Student Registration System</h3>
        </div>
        <div class="desc">
          <p>This project showcases a fully online university student registration system designed to simplify and modernize the enrollment process. It includes features like student management, registration form handling, payment tracking, academic year setup, and role-based admin control. Every part of this system reflects my focus on creating efficient, secure, and user-friendly web applications that make university administration smoother and more accessible.</p>
          <div class="btns">
            {/* <a href="#" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a> */}
            {/* <a href="https://github.com/jigar-sable/Portfolio-Website" class="btn" target="_blank">Code <i class="fas fa-code"></i></a> */}
          </div>
        </div>
      </div>
    </div>
</div>
  <div class="box-container">
{/* Wa Hta Ka La Tha */}
    <div class="box tilt">
      <img draggable="false" src={WaHtaKa} alt="" />
      <div class="content">
        <div class="tag">
        <h3>Government's Basic Literacy Project - WaHtaKaLaTha</h3>
        </div>
        <div class="desc">
          <p>This project focuses on supporting the Government Basic Literacy initiative aimed at improving education accessibility for all. I contributed to the development and implementation of digital tools that help manage literacy data and learning resources. Working alongside my supervisor, I assisted in designing and building key components of the system, ensuring it was efficient, user-friendly, and aligned with the project’s educational goals.</p>
          <div class="btns">
            {/* <a href="#" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a> */}
            {/* <a href="https://github.com/jigar-sable/Portfolio-Website" class="btn" target="_blank">Code <i class="fas fa-code"></i></a> */}
          </div>
        </div>
      </div>
    </div>

{/* Remote Code */}
    <div class="box tilt">
      <img draggable="false" src={RemoteCode} alt="" />
      <div class="content">
        <div class="tag">
        <h3>RMI based RemoteCode Execution and Compilation System</h3>
        </div>
        <div class="desc">
          <p>This project is a Java RMI-based Remote Code Execution and Compilation System that allows users to write, compile, and execute code remotely through a graphical interface. It supports multiple programming languages and securely handles code execution on the server side. I developed the RMI components, including the executor interface, implementation, server, and client GUI, and later integrated a Spring Boot bridge to enable mobile and web access. This project reflects my focus on distributed systems, secure execution, and cross-platform accessibility.</p>
          <div class="btns">
            {/* <a href="#" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a> */}
            {/* <a href="https://github.com/jigar-sable/Portfolio-Website" class="btn" target="_blank">Code <i class="fas fa-code"></i></a> */}
          </div>
        </div>
      </div>
    </div>

{/* Job Finder Website */}
    <div class="box tilt">
      <img draggable="false" src={JobFinder} alt="" />
      <div class="content">
        <div class="tag">
        <h3>JobFinder Website</h3>
        </div>
        <div class="desc">
          <p>This project is a dynamic Job Finder platform designed to connect freelancers with companies looking for skilled talent. Built as a Java dynamic web application, it features separate dashboards for freelancers, clients, and admins — including job posting, proposal management, work submission, and rating systems. I worked on both frontend and backend components to ensure a smooth, user-friendly experience that supports efficient communication and collaboration between clients and freelancers.</p>
          <div class="btns">
            {/* <a href="#" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a> */}
            {/* <a href="https://github.com/jigar-sable/Portfolio-Website" class="btn" target="_blank">Code <i class="fas fa-code"></i></a> */}
          </div>
        </div>
      </div>
    </div>
</div>

<div class="box-container">
{/* Chronocraft */}
    <div class="box tilt">
      <img draggable="false" src={Chronocraft} alt="" />
      <div class="content">
        <div class="tag">
        <h3>ChronoCraft - EventManager</h3>
        </div>
        <div class="desc">
          <p>ChronoCraft is an Event Management System developed in C# that allows users to create, organize, and manage events efficiently with real-time notifications. The system provides features such as event scheduling, participant tracking, and instant updates using a responsive and intuitive interface. I focused on building the real-time notification functionality and ensuring smooth event synchronization to enhance user engagement and communication. This project reflects my interest in creating smart, interactive systems using C# and modern event-driven design.</p>
          <div class="btns">
            {/* <a href="#" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a> */}
            {/* <a href="https://github.com/jigar-sable/Portfolio-Website" class="btn" target="_blank">Code <i class="fas fa-code"></i></a> */}
          </div>
        </div>
      </div>
    </div>

{/* Music Streaming Website */}
    <div class="box tilt">
      <img draggable="false" src={Music} alt="" />
      <div class="content">
        <div class="tag">
        <h3>Music Streaming Website</h3>
        </div>
        <div class="desc">
          <p>This project is a modern Music Streaming Website that allows users to explore, play, and manage their favorite songs seamlessly. It features real-time audio playback, playlist creation, and a clean, responsive interface designed for a smooth listening experience. I focused on building the core streaming functionality, user-friendly UI, and database integration to ensure fast performance and personalized music recommendations. This project reflects my passion for combining technology and creativity to deliver engaging digital experiences.</p>
          <div class="btns">
            {/* <a href="#" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a> */}
            {/* <a href="https://github.com/jigar-sable/Portfolio-Website" class="btn" target="_blank">Code <i class="fas fa-code"></i></a> */}
          </div>
        </div>
      </div>
    </div>

{/* Restaurant Ordering with Qr Code */}
    <div class="box tilt">
      <img draggable="false" src={Restaurant} alt="" />
      <div class="content">
        <div class="tag">
        <h3>Restaurant Ordering with Qr Code</h3>
        </div>
        <div class="desc">
          <p>This project is a Restaurant Ordering System that leverages QR code technology to streamline the dining experience. Customers can scan a QR code at their table to view the menu, place orders, and make payments directly from their devices. I developed both the frontend and backend components to ensure a smooth, real-time ordering process, making the system efficient, user-friendly, and easy to manage for restaurant staff. This project reflects my focus on combining convenience and technology to enhance everyday experiences.</p>
          <div class="btns">
            {/* <a href="#" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a> */}
            {/* <a href="https://github.com/jigar-sable/Portfolio-Website" class="btn" target="_blank">Code <i class="fas fa-code"></i></a> */}
          </div>
        </div>
      </div>
    </div>


</div>




</section>
    )
}