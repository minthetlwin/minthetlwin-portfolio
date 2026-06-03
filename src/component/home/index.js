import React, { useRef, useEffect, useState } from "react";
import Typed from "typed.js";
import "../../assets/css/style.css";
import "../../assets/css/floatingtext.css";
import '../../assets/css/home.css';

// Local planet encyclopedia database with Sun integrated
const PLANET_FACTS = {
  Sun: { color: "#fca400", title: "Sun", speed: "Solar Core", note: "The luminous star at the heart of our system, containing 99.8% of its total mass." },
  Mercury: { color: "#a8a29e", title: "Mercury", speed: "Fastest Orbit", note: "The smallest planet in our solar system and closest to the Sun." },
  Venus: { color: "#fdba74", title: "Venus", speed: "Extremely Hot", note: "Thick atmosphere traps heat in a runaway greenhouse effect." },
  Earth: { color: "#3b82f6", title: "Earth", speed: "Life Oasis", note: "Our home planet is the only place known to harbor living ecosystems." },
  Mars: { color: "#ef4444", title: "Mars", speed: "Desert World", note: "A cold, dusty desert world with a very thin atmosphere." },
  Jupiter: { color: "#b45309", title: "Jupiter", speed: "Gas Giant", note: "More than twice as massive than all other planets combined." },
  Saturn: { color: "#fbbf24", title: "Saturn", speed: "Ringed World", note: "Adorned with a dazzling, complex system of icy rings." },
  Uranus: { color: "#22d3ee", title: "Uranus", speed: "Ice Giant", note: "An ice giant that uniquely rotates on an extreme 90-degree tilt." },
  Neptune: { color: "#2563eb", title: "Neptune", speed: "Windy Planet", note: "The most distant major planet orbiting our solar system core." },
  Sun: { color: "#ea580c", title: "Sun", speed: "Solar Core", note: "The luminous star at the heart of our system, containing 99.8% of its total mass." }
};

export default function Home() {
  const [activePlanet, setActivePlanet] = useState(null);
  const canvasRef = useRef(null);
  const typeRef = useRef(null);

  const handlePlanetSelect = (planetKey, e) => {
    e.stopPropagation(); // Prevents layout bubbling conflict triggers
    setActivePlanet(PLANET_FACTS[planetKey]);
  };

  const closeFactBox = (e) => {
    e.stopPropagation();
    setActivePlanet(null);
  };

  useEffect(() => {
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

    const typed = new Typed(typeRef.current, {
      strings: ["FullStack Developer", "React Engineer"],
      loop: true,
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 1200,
    });

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    const colors = ["#3b82f6", "#06b6d4", "#10b981", "#a78bfa"];
    const particles = [];

    function createParticles(count) {
      for (let i = 0; i < count; i++) {
        const type = ["plus", "circle", "hollow"][Math.floor(Math.random() * 3)];
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 10 + 6,
          color: colors[Math.floor(Math.random() * colors.length)],
          dx: (Math.random() - 0.5) * 0.3,
          dy: (Math.random() - 0.5) * 0.3,
          type,
        });
      }
    }

    function drawPlus(x, y, size, color) {
      ctx.strokeStyle = color + "44";
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
        ctx.strokeStyle = color + "44";
        ctx.lineWidth = 2;
        ctx.stroke();
      } else {
        ctx.fillStyle = color + "22";
        ctx.fill();
      }
    }

    let animationId;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        if (p.type === "plus") drawPlus(p.x, p.y, p.size, p.color);
        if (p.type === "circle") drawCircle(p.x, p.y, p.size, p.color, false);
        if (p.type === "hollow") drawCircle(p.x, p.y, p.size, p.color, true);

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      animationId = requestAnimationFrame(animate);
    }

    createParticles(35);
    animate();

    window.addEventListener("resize", resizeCanvas);
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="modern-home-hero" id="home" onClick={() => setActivePlanet(null)}>
      <canvas ref={canvasRef} className="hero-geometry-canvas"></canvas>

      <div className="hero-split-layout">
        {/* Left Side: Typography Matrix */}
        <div className="hero-text-container">
          <div className="welcome-tag">
            <span className="pulse-dot"></span> Available for New Opportunities
          </div>
          <h1 className="hero-main-title">
            Hi, I'm <span className="gradient-name">Min Thet Lwin</span>
          </h1>
          <div className="dynamic-typing-row">
            <p>Engineering robust applications as a <span ref={typeRef} className="typing-text"></span></p>
          </div>

          <div className="hero-cta-group">
            <a href="#about" className="premium-hero-btn">
              <span>Explore My Stack</span>
              <i className="fas fa-arrow-right"></i>
            </a>

            <div className="hero-social-strip">
              <a href="https://www.linkedin.com/in/min-thet-lwin-474298317/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
              <a href="https://github.com/minthetlwin" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
              <a href="https://t.me/sacrerex" target="_blank" rel="noreferrer" aria-label="Telegram"><i className="fab fa-telegram-plane"></i></a>
              <a href="https://www.instagram.com/sacre_rex/" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="https://www.facebook.com/sacrerex" target="_blank" rel="noreferrer" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
              <a href="https://www.tiktok.com/@minthetlwin71" target="_blank" rel="noreferrer" aria-label="TikTok"><i className="fab fa-tiktok"></i></a>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive 3D Solar System Engine */}
        <div className="hero-avatar-container">
          <div className="interactive-stage-card">

            <main className="solar-viewport">
              <div className="solar-system-stage">

                {/* The Solar Core (Sun) */}
                <div className="solar-sun-core" onClick={(e) => handlePlanetSelect("Sun", e)}>
                  <div className="solar-flare-ring"></div>
                </div>

                {/* 1. Mercury */}
                <div className="planetary-track track-mercury">
                  <div className="cosmic-body planet-mercury" onClick={(e) => handlePlanetSelect("Mercury", e)}>
                    <span className="cosmic-label">Mercury</span>
                  </div>
                </div>

                {/* 2. Venus */}
                <div className="planetary-track track-venus">
                  <div className="cosmic-body planet-venus" onClick={(e) => handlePlanetSelect("Venus", e)}>
                    <span className="cosmic-label">Venus</span>
                  </div>
                </div>

                {/* 3. Earth */}
                <div className="planetary-track track-earth">
                  <div className="cosmic-body planet-earth" onClick={(e) => handlePlanetSelect("Earth", e)}>
                    <span className="cosmic-label">Earth</span>
                  </div>
                </div>

                {/* 4. Mars */}
                <div className="planetary-track track-mars">
                  <div className="cosmic-body planet-mars" onClick={(e) => handlePlanetSelect("Mars", e)}>
                    <span className="cosmic-label">Mars</span>
                  </div>
                </div>

                {/* 5. Jupiter */}
                <div className="planetary-track track-jupiter">
                  <div className="cosmic-body planet-jupiter" onClick={(e) => handlePlanetSelect("Jupiter", e)}>
                    <span className="cosmic-label">Jupiter</span>
                  </div>
                </div>

                {/* 6. Saturn */}
                <div className="planetary-track track-saturn">
                  <div className="cosmic-body planet-saturn" onClick={(e) => handlePlanetSelect("Saturn", e)}>
                    <div className="saturn-ring-system"></div>
                    <span className="cosmic-label">Saturn</span>
                  </div>
                </div>

                {/* 7. Uranus */}
                <div className="planetary-track track-uranus">
                  <div className="cosmic-body planet-uranus" onClick={(e) => handlePlanetSelect("Uranus", e)}>
                    <span className="cosmic-label">Uranus</span>
                  </div>
                </div>

                {/* 8. Neptune */}
                <div className="planetary-track track-neptune">
                  <div className="cosmic-body planet-neptune" onClick={(e) => handlePlanetSelect("Neptune", e)}>
                    <span className="cosmic-label">Neptune</span>
                  </div>
                </div>

              </div>
            </main>

            {/* Dynamic Planet Facts Panel Overlay */}
            {activePlanet && (
              <div className="space-fact-overlay-box" style={{ "--accent-color": activePlanet.color }} onClick={(e) => e.stopPropagation()}>
                <button className="close-fact-btn" onClick={closeFactBox}>&times;</button>
                <div className="fact-badge">{activePlanet.speed}</div>
                <h3>{activePlanet.title}</h3>
                <p>{activePlanet.note}</p>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}