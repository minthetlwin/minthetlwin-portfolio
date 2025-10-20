import React from "react";
import { useRef, useEffect, useState } from "react";
import Typed from "typed.js";
import "../../assets/css/style.css";
import "../../assets/css/floatingtext.css";
import ScrollReveal from "scrollreveal";

export default function Home() {

  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
    // Hide after 3 seconds
    setTimeout(() => setShowMessage(false), 3000);
  };
  const canvasRef = useRef(null);
  const typeRef = useRef(null);

    useEffect(() => {
    // 🔹 Handle tab visibility change
    const handleVisibilityChange = () => {
      const favicon = document.getElementById("favicon");
      if (document.visibilityState === "visible") {
        document.title = "Min Thet Lwin | Portfolio";
        if (favicon) favicon.href = "assets/images/favicon.png";
      } else {
        document.title = "Min Thet Lwin | Portfolio";
        if (favicon) favicon.href = "assets/images/favhand.png";
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // 🔹 Initialize Typed.js animation
    const typed = new Typed(typeRef.current, {
      strings: [
        "Full Stack Developer",
      ],
      loop: true,
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 500,
    });

    // 🔹 Cleanup on unmount
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      typed.destroy(); // stop typed.js instance when component unmounts
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    // Particle colors
    const colors = ["#38bdf8", "#10b981", "#a78bfa", "#f472b6"];
    const particles = [];

    // Create floating particles
    function createParticles(count) {
      for (let i = 0; i < count; i++) {
        const type = ["plus", "circle", "hollow"][Math.floor(Math.random() * 3)];
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 12 + 6,
          color: colors[Math.floor(Math.random() * colors.length)],
          dx: (Math.random() - 0.5) * 0.4,
          dy: (Math.random() - 0.5) * 0.4,
          type,
        });
      }
    }

    // Draw shapes
    function drawPlus(x, y, size, color) {
      ctx.strokeStyle = color + "66";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x - size / 2, y);
      ctx.lineTo(x + size / 2, y);
      ctx.moveTo(x, y - size / 2);
      ctx.lineTo(x, y + size / 2);
      ctx.stroke();
    }

    function drawCircle(x, y, size, color, hollow = false) {
      ctx.beginPath();
      ctx.arc(x, y, size / 2, 0, Math.PI * 2);
      if (hollow) {
        ctx.strokeStyle = color + "66";
        ctx.lineWidth = 2;
        ctx.stroke();
      } else {
        ctx.fillStyle = color + "33";
        ctx.fill();
      }
    }

    // Animate background
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        if (p.type === "plus") drawPlus(p.x, p.y, p.size, p.color);
        if (p.type === "circle") drawCircle(p.x, p.y, p.size, p.color, false);
        if (p.type === "hollow") drawCircle(p.x, p.y, p.size, p.color, true);

        // Move particles
        p.x += p.dx;
        p.y += p.dy;

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });

      requestAnimationFrame(animate);
    }

    // Initialize
    createParticles(40);
    animate();

    // Handle resize
    window.addEventListener("resize", resizeCanvas);

    // Cleanup when component unmounts
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <>
    <section className="home" id="home">
      <canvas ref={canvasRef} id="background"></canvas>
      <div className="content">
        <h2>
          Hi,
          <br /> I'm Min Thet Lwin
        </h2>
        <p>
          i am <span ref={typeRef} className="typing-text"></span>
        </p>
        <a href="#about" className="btn">
          <span>About Me</span>
          <i className="fas fa-arrow-circle-down"></i>
        </a>
        <div className="socials">
          <ul className="social-icons">
            <li>
              <a
                className="linkedin"
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/min-thet-lwin-474298317/"
                target="_blank"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                className="github"
                aria-label="GitHub"
                href="https://github.com/minthetlwin"
                target="_blank"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a
                className="telegram"
                aria-label="Telegram"
                href="https://t.me/sacrerex"
                target="_blank"
              >
                <i className="fab fa-telegram-plane"></i>
              </a>
            </li>
            <li>
              <a
                className="instagram"
                aria-label="Instagram"
                href="https://www.instagram.com/sacre_rex/"
              >
                <i className="fab fa-instagram" target="_blank"></i>
              </a>
            </li>
            <li>
              <a
                className="facebook"
                aria-label="Facebook"
                href="https://www.facebook.com/sacrerex"
                target="_blank"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a
                className="tiktok"
                aria-label="TikTok"
                href="https://www.tiktok.com/@minthetlwin71?_t=ZS-90iK4DnLvM7&_r=1"
                target="_blank"
              >
                <i className="fab fa-tiktok"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <main>
        <div id="sketch-board-con" onClick={handleClick}>
          <div id="sketch-board">
            <div id="head">
              <div id="lens">
                <div id="upper-shadow"></div>
                <div id="rect"></div>
                <div id="eyes"></div>
              </div>
            </div>

            <div id="ear">
              <div id="ear-antenna"></div>
            </div>

            <div id="small-cap"></div>

            <div id="body">
              <div id="shadow-box"></div>
              <div id="pocket-area">
                <div id="pocket"></div>
              </div>
            </div>

            <div id="hands">
              <div class="hand"></div>
              <div class="hand"></div>
            </div>
          </div>

          <div id="robot-shadow"></div>
        </div>
      </main>
       {/* Floating animated message */}
      {showMessage && (
        <p className="floating-text">
          Hello,Nice to meet you!
        </p>
      )}
    </section>

    </>
  );
}
