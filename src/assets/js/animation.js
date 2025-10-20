  window.addEventListener("DOMContentLoaded", () => {
const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

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

// Resize handling
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

  });