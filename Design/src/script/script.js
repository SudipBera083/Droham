/* Advanced interactions: particles, tilt, parallax, counters, reveal */
(() => {
  const $ = s => document.querySelector(s);
  const $$ = s => Array.from(document.querySelectorAll(s));

  // Canvas background (subtle particles / noise)
  function initBG() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = canvas.width = innerWidth;
    let h = canvas.height = innerHeight;
    const particles = [];
    const num = Math.round((w*h)/70000);
    for(let i=0;i<num;i++) particles.push({x:Math.random()*w, y:Math.random()*h, r: Math.random()*1.6 + 0.4, vx:(Math.random()-0.5)*0.2, vy:(Math.random()-0.5)*0.2, a: Math.random()*0.6+0.2});

    function resize(){ w=canvas.width=innerWidth; h=canvas.height=innerHeight }
    addEventListener('resize', resize);

    function draw(){
      ctx.clearRect(0,0,w,h);
      // subtle mesh glow gradient
      const g = ctx.createLinearGradient(0,0,w,h); g.addColorStop(0,'rgba(11,99,212,0.06)'); g.addColorStop(1,'rgba(108,140,255,0.02)');
      ctx.fillStyle = g; ctx.fillRect(0,0,w,h);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy; p.a += Math.sin(Date.now()/2000+p.x+p.y)*0.0005;
        if(p.x<0||p.x>w) p.vx *= -1; if(p.y<0||p.y>h) p.vy *= -1;
        ctx.beginPath(); ctx.globalAlpha = p.a; ctx.fillStyle = 'rgba(255,255,255,0.9)'; ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill(); ctx.globalAlpha=1;
      });
      requestAnimationFrame(draw);
    }
    draw();
  }

  // Tilt effect for elements with data-tilt
  function initTilt(){
    $$('[data-tilt]').forEach(el => {
      const bounds = el.getBoundingClientRect();
      el.style.transformStyle = 'preserve-3d';
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width/2; const cy = rect.top + rect.height/2;
        const dx = e.clientX - cx; const dy = e.clientY - cy; const rx = -(dy/rect.height)*10; const ry = (dx/rect.width)*12;
        el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(12px)`;
      });
      el.addEventListener('mouseleave', () => el.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0)');
    });
  }

  // Reveal on scroll + stagger
  function initReveal(){
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('reveal');
          obs.unobserve(entry.target);
        }
      });
    }, {threshold:0.12});
    $$('.module-card, .feature-card, .stat-panel, .price, .dashboard-3d').forEach(el=>obs.observe(el));
  }

  // Animated counters
  function initCounters(){
    $$('[data-count]').forEach(el=>{
      const target = parseFloat(el.getAttribute('data-count'))||0; const isFloat = (String(target).indexOf('.')>-1);
      let current=0; const duration=1400; const start = performance.now();
      function step(ts){
        const t = Math.min(1,(ts-start)/duration);
        const eased = 1 - Math.pow(1-t,3);
        const val = Math.round((target*eased) * (isFloat?10:1)) / (isFloat?10:1);
        el.textContent = isFloat? val.toFixed(1): val.toLocaleString();
        if(t<1) requestAnimationFrame(step);
      }
      // start when visible
      const o = new IntersectionObserver((es)=>{ if(es[0].isIntersecting){ requestAnimationFrame(step); o.disconnect(); } }); o.observe(el);
    });
  }

  // Smooth internal links
  function initLinks(){
    document.querySelectorAll("a[href^='#']").forEach(a=>a.addEventListener('click', (e)=>{
      const target = document.querySelector(a.getAttribute('href'));
      if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}); }
    }));
  }

  // Set year
  document.addEventListener('DOMContentLoaded', ()=>{ const y=document.getElementById('year'); if(y) y.textContent = new Date().getFullYear(); });

  // init all after DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    try{
      initBG(); initTilt(); initReveal(); initCounters(); initLinks();
    }catch(err){ console.warn('Init error', err); }
  });

})();
