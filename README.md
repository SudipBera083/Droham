## Droham Private Limited — Landing Page

Professional, ultra-modern SaaS landing page built as a static HTML/CSS/JS prototype.

**Preview**
- **Open:** Open [index.html](index.html) in your browser for a quick local preview.
- **Recommended:** Use a local HTTP server for reliable behavior (canvas and smooth scrolling).

**Run Locally**
- Using Python (cross-platform):

```bash
python -m http.server 8000
# then open http://localhost:8000/
```

- Using Node (serve):

```bash
npx serve . -l 8000
# then open http://localhost:8000/
```

**Files**
- `index.html`: Main landing page markup with hero, 3D mockups, modules, features, pricing and footer.
- `style.css`: Design system, glassmorphism, 3D transforms and responsive rules.
- `script.js`: Canvas background, tilt interactions, reveal-on-scroll and animated counters.

**Design Notes**
- Visual system: primary color `#0B63D4`, 8px spacing scale, 12px radii, Inter/Poppins/Space Grotesk fonts.
- Performance: the page uses a canvas particle background; test on target devices and reduce particle density if needed.
- Accessibility: contrast and keyboard behaviors should be validated and improved before production.

**Optional Enhancements**
- Add GSAP/Lenis/Three.js for cinematic motion and WebGL 3D dashboard (CDN friendly).  
- Replace placeholder icons/logos with vector assets (SVG) for sharper visuals.
- Integrate real analytics/demo forms and update CTA endpoints.

**Next steps I can help with**
- Run automated accessibility/contrast checks and fix issues.  
- Integrate GSAP + Three.js for a WebGL dashboard and high-fidelity motion.  
- Produce mobile/tablet screenshots and tweak responsive spacing.

---
© Droham Private Limited — Prototype
