/* ================================================================
   DROHAM — Motion Engine (2026)
   Particles · Text Scramble · Spotlight · 3D Tilt
   ================================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initTypewriter();
  initTilt();
  initSpotlight();
  initCounters();
  initScrollReveal();
  initHeaderScroll();
});

/* ─── PARTICLE SYSTEM ─── */
function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  const particleCount = 60;
  const connectionDistance = 150;
  const mouseDistance = 200;

  let mouse = { x: null, y: null };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.size = Math.random() * 2 + 1;
      this.color = `rgba(129, 140, 248, ${Math.random() * 0.5})`;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse interaction
      if (mouse.x != null) {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseDistance) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (mouseDistance - distance) / mouseDistance;
          const directionX = forceDirectionX * force * 0.6;
          const directionY = forceDirectionY * force * 0.6;
          this.vx += directionX;
          this.vy += directionY;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }

  function init() {
    resize();
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    // Connections
    for (let a = 0; a < particles.length; a++) {
      for (let b = a; b < particles.length; b++) {
        let dx = particles[a].x - particles[b].x;
        let dy = particles[a].y - particles[b].y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < connectionDistance) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(129, 140, 248, ${1 - distance / connectionDistance})`;
          ctx.lineWidth = 1;
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  init();
  animate();
  window.addEventListener('resize', resize);
}

/* ─── TITLE TYPING EFFECT ─── */
function initTypewriter() {
  const element = document.querySelector('.typewriter-text');
  if (!element) return;

  // Get original text content including line breaks
  // We expect the HTML to be plain text with <br> where needed
  const fullText = element.getAttribute('data-text') || element.innerText.replace(/\n/g, '');
  element.innerHTML = ''; // Clear content
  element.style.opacity = '1';

  let i = 0;
  const speed = 50;

  function type() {
    if (i < fullText.length) {
      let char = fullText.charAt(i);

      // Handle custom line break marker if needed, or just detect specific chars
      // For this specific use case "Build Faster.\nScale Smarter."
      // We can just rely on the existing HTML structure if we iterate differently,
      // but for a true typewriter, rebuilding the string char by char is best.

      if (char === '\n' || fullText.substring(i, i + 4) === '<br>') {
        element.innerHTML += '<br>';
        i += (char === '\n' ? 1 : 4);
      } else {
        element.innerHTML += char;
        i++;
      }
      setTimeout(type, speed);
    } else {
      // Add blinking cursor at the end
      element.innerHTML += '<span class="cursor">|</span>';
    }
  }

  // Start after a slight delay
  setTimeout(type, 500);
}

/* ─── 3D TILT ─── */
function initTilt() {
  const card = document.querySelector('.dashboard-card');
  const container = document.querySelector('.hero-visual');

  if (!card || !container) return;

  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  container.addEventListener('mouseleave', () => {
    card.style.transform = `perspective(1000px) rotateX(5deg) rotateY(-10deg)`;
    setTimeout(() => {
      card.style.transition = 'transform 0.5s ease';
      card.style.transform = `perspective(1000px) rotateX(5deg) rotateY(-10deg)`;
      setTimeout(() => card.style.transition = 'transform 0.1s ease-out', 500);
    }, 100);
  });
}

/* ─── SPOTLIGHT EFFECT ─── */
function initSpotlight() {
  const cards = document.querySelectorAll('.glass-panel');

  document.addEventListener('mousemove', (e) => {
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/* ─── ANIMATED COUNTERS ─── */
function initCounters() {
  const counters = document.querySelectorAll('.counter');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-target'));
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 2000; // ms
        const start = performance.now();

        const animate = (currentTime) => {
          const elapsed = currentTime - start;
          const progress = Math.min(elapsed / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3); // cubic out

          const current = target * ease;

          if (current % 1 !== 0 && target % 1 === 0) {
            el.innerText = Math.floor(current) + suffix;
          } else {
            // For floats like 99.9
            el.innerText = current.toFixed(target % 1 === 0 ? 0 : 1) + suffix;
          }

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            el.innerText = target + suffix;
          }
        };

        requestAnimationFrame(animate);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

/* ─── SCROLL REVEAL (Simple Fade Up) ─── */
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  const elements = document.querySelectorAll('.bento-item, .footer-col');
  elements.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.6s ease-out ${i * 0.1}s, transform 0.6s ease-out ${i * 0.1}s`;
    observer.observe(el);
  });
}

/* ─── HEADER SCROLL ─── */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}
