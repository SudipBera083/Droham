/* ================================================================
   DROHAM — Premium Interactions Engine
   Canvas BG · Tilt · Scroll Reveal · Counters · Parallax · Nav
   ================================================================ */
(() => {
  'use strict';

  const $ = (s) => document.querySelector(s);
  const $$ = (s) => Array.from(document.querySelectorAll(s));

  /* ─── MESH GRADIENT CANVAS BACKGROUND ─── */
  function initCanvas() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h, particles = [], orbs = [];
    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * DPR;
      canvas.height = h * DPR;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

    resize();
    window.addEventListener('resize', resize);

    // Floating orbs (soft glowing ellipses)
    orbs = [
      { x: w * 0.2, y: h * 0.3, rx: 300, ry: 200, color: 'rgba(99,102,241,0.04)', speed: 0.0003, phase: 0 },
      { x: w * 0.8, y: h * 0.5, rx: 250, ry: 250, color: 'rgba(168,85,247,0.03)', speed: 0.0004, phase: 2 },
      { x: w * 0.5, y: h * 0.8, rx: 350, ry: 150, color: 'rgba(59,130,246,0.03)', speed: 0.0002, phase: 4 },
    ];

    // Subtle particle dots
    const numParticles = Math.min(Math.round((w * h) / 45000), 80);
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.2 + 0.3,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        alpha: Math.random() * 0.3 + 0.1,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    let frame = 0;

    function draw() {
      ctx.clearRect(0, 0, w, h);
      frame++;

      // Ambient orbs
      orbs.forEach((o) => {
        const t = Date.now() * o.speed + o.phase;
        const ox = o.x + Math.sin(t) * 60;
        const oy = o.y + Math.cos(t * 0.7) * 40;
        const grad = ctx.createRadialGradient(ox, oy, 0, ox, oy, o.rx);
        grad.addColorStop(0, o.color);
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.ellipse(ox, oy, o.rx, o.ry, 0, 0, Math.PI * 2);
        ctx.fill();
      });

      // Grid pattern (very subtle)
      if (frame % 2 === 0) {
        ctx.strokeStyle = 'rgba(255,255,255,0.015)';
        ctx.lineWidth = 0.5;
        const gridSize = 80;
        for (let x = 0; x < w; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, h);
          ctx.stroke();
        }
        for (let y = 0; y < h; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(w, y);
          ctx.stroke();
        }
      }

      // Particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.02;

        if (p.x < -5) p.x = w + 5;
        if (p.x > w + 5) p.x = -5;
        if (p.y < -5) p.y = h + 5;
        if (p.y > h + 5) p.y = -5;

        const currentAlpha = p.alpha + Math.sin(p.pulse) * 0.1;
        ctx.beginPath();
        ctx.globalAlpha = Math.max(0, currentAlpha);
        ctx.fillStyle = 'rgba(148,163,184,0.8)';
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      requestAnimationFrame(draw);
    }

    draw();
  }

  /* ─── 3D TILT EFFECT ─── */
  function initTilt() {
    $$('[data-tilt]').forEach((el) => {
      el.style.transformStyle = 'preserve-3d';
      el.style.willChange = 'transform';
      let raf;

      el.addEventListener('mousemove', (e) => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          const rect = el.getBoundingClientRect();
          const cx = rect.left + rect.width / 2;
          const cy = rect.top + rect.height / 2;
          const dx = e.clientX - cx;
          const dy = e.clientY - cy;
          const rx = -(dy / rect.height) * 8;
          const ry = (dx / rect.width) * 8;
          el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.02,1.02,1.02)`;
        });
      });

      el.addEventListener('mouseleave', () => {
        cancelAnimationFrame(raf);
        el.style.transition = 'transform 0.5s cubic-bezier(0.16,1,0.3,1)';
        el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
        setTimeout(() => (el.style.transition = ''), 500);
      });
    });
  }

  /* ─── HERO DASHBOARD TILT ─── */
  function initHeroTilt() {
    const scene = document.getElementById('tilt-scene');
    if (!scene) return;
    const dashboard = scene.querySelector('.dashboard-3d');
    if (!dashboard) return;

    let mx = 0, my = 0, cx = 0, cy = 0;

    document.addEventListener('mousemove', (e) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    function animate() {
      cx += (mx - cx) * 0.05;
      cy += (my - cy) * 0.05;
      const rx = cy * -6;
      const ry = cx * 10;
      dashboard.style.transform = `translate(-50%, -50%) rotateX(${5 + rx}deg) rotateY(${-8 + ry}deg)`;
      requestAnimationFrame(animate);
    }

    animate();
  }

  /* ─── SCROLL REVEAL ─── */
  function initReveal() {
    // Hero animations
    const heroObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            heroObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    $$('.anim-fade-up').forEach((el) => heroObs.observe(el));

    // Section element reveals with stagger
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Straggle children
            const children = entry.target.querySelectorAll('.module-card, .feature-card, .stat-card, .step-card, .price-card, .testimonial-card');
            if (children.length) {
              children.forEach((child, i) => {
                setTimeout(() => {
                  child.classList.add('revealed');
                }, i * 100);
              });
            }
            entry.target.classList.add('revealed');
            revealObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    // Add reveal-element class to all cards
    $$(
      '.module-card, .feature-card, .stat-card, .step-card, .price-card, .testimonial-card'
    ).forEach((el) => {
      el.classList.add('reveal-element');
    });

    // Observe grid parents
    $$(
      '.modules-grid, .features-grid, .stats-grid, .steps-grid, .pricing-grid, .testimonials-grid'
    ).forEach((el) => {
      el.classList.add('stagger-children');
      revealObs.observe(el);
    });

    // Observe section headers
    $$('.section-header, .cta-inner, .logos-section').forEach((el) => {
      el.classList.add('reveal-element');
      revealObs.observe(el);
    });
  }

  /* ─── ANIMATED COUNTERS ─── */
  function initCounters() {
    $$('[data-count]').forEach((el) => {
      const target = parseFloat(el.getAttribute('data-count')) || 0;
      const suffix = el.getAttribute('data-suffix') || '';
      const isFloat = String(target).includes('.');
      const duration = 2000;
      let started = false;

      function animate() {
        if (started) return;
        started = true;
        const start = performance.now();

        function step(ts) {
          const t = Math.min(1, (ts - start) / duration);
          // Ease out cubic
          const eased = 1 - Math.pow(1 - t, 3);
          let val;

          if (isFloat) {
            val = (target * eased).toFixed(1);
          } else if (target >= 10000) {
            val = Math.round(target * eased).toLocaleString();
          } else {
            val = Math.round(target * eased).toString();
          }

          el.textContent = val + suffix;

          if (t < 1) requestAnimationFrame(step);
        }

        requestAnimationFrame(step);
      }

      const obs = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            animate();
            obs.disconnect();
          }
        },
        { threshold: 0.3 }
      );

      obs.observe(el);
    });
  }

  /* ─── HEADER SCROLL STATE ─── */
  function initHeader() {
    const header = document.getElementById('site-header');
    if (!header) return;

    let lastScroll = 0;
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          header.classList.toggle('scrolled', scrollY > 50);
          lastScroll = scrollY;
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  /* ─── MOBILE MENU ─── */
  function initMobileMenu() {
    const toggle = document.getElementById('mobile-toggle');
    const nav = document.getElementById('main-nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      const isOpen = nav.classList.contains('open');
      toggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on link click
    nav.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', false);
        document.body.style.overflow = '';
      });
    });
  }

  /* ─── SMOOTH SCROLL ─── */
  function initSmoothScroll() {
    document.querySelectorAll("a[href^='#']").forEach((a) => {
      a.addEventListener('click', (e) => {
        const href = a.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const headerHeight = document.getElementById('site-header')?.offsetHeight || 0;
          const y = target.getBoundingClientRect().top + window.scrollY - headerHeight - 20;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      });
    });
  }

  /* ─── DROPDOWN TOGGLE ─── */
  function initDropdowns() {
    $$('.dropdown-toggle').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const parent = btn.closest('.has-dropdown');
        const isOpen = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', !isOpen);
      });
    });
  }

  /* ─── PARALLAX ON SCROLL ─── */
  function initParallax() {
    const elements = $$('.hero-glow, .hero-glow-2, .cta-glow-1, .cta-glow-2');
    if (!elements.length) return;

    let scrollY = 0;
    let ticking = false;

    window.addEventListener('scroll', () => {
      scrollY = window.scrollY;
      if (!ticking) {
        requestAnimationFrame(() => {
          elements.forEach((el, i) => {
            const speed = 0.05 + i * 0.02;
            el.style.transform = `translateY(${scrollY * speed}px)`;
          });
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  /* ─── YEAR ─── */
  function initYear() {
    const el = document.getElementById('year');
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ─── BUTTON RIPPLE EFFECT ─── */
  function initRipple() {
    $$('.btn-primary, .btn-glow').forEach((btn) => {
      btn.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        ripple.style.cssText = `
          position:absolute; border-radius:50%;
          width:0; height:0; 
          background:rgba(255,255,255,0.3);
          transform:translate(-50%,-50%);
          animation: ripple-out 0.6s ease-out forwards;
          pointer-events:none;
        `;
        const rect = this.getBoundingClientRect();
        ripple.style.left = (e.clientX - rect.left) + 'px';
        ripple.style.top = (e.clientY - rect.top) + 'px';
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
      });
    });

    // Inject ripple keyframes
    const style = document.createElement('style');
    style.textContent = `
      @keyframes ripple-out {
        to { width: 300px; height: 300px; opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }

  /* ─── MAGNETIC BUTTON EFFECT ─── */
  function initMagnetic() {
    $$('.btn-primary').forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translateY(-2px) translate(${x * 0.1}px, ${y * 0.1}px)`;
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  }

  /* ─── INIT ─── */
  document.addEventListener('DOMContentLoaded', () => {
    try {
      initCanvas();
      initTilt();
      initHeroTilt();
      initReveal();
      initCounters();
      initHeader();
      initMobileMenu();
      initSmoothScroll();
      initDropdowns();
      initParallax();
      initYear();
      initRipple();
      initMagnetic();
    } catch (err) {
      console.warn('Droham init error:', err);
    }
  });
})();
