<div align="center">

# Droham

### Next-Generation Enterprise Resource Planning

[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-E836B5?logo=framer&logoColor=white)](https://motion.dev)
[![Deployed on Vercel](https://img.shields.io/badge/Vercel-Deployed-000?logo=vercel&logoColor=white)](https://vercel.com)

**Limitless Performance. Precision Engineering.**

A high-performance SaaS landing page for [Droham Private Limited](https://github.com/SudipBera083/Droham) — featuring CSS-only 3D animations, buttery-smooth scrolling, and fully responsive design across all devices.

</div>

---

## ✦ Highlights

| | Feature | Details |
|---|---|---|
| 🎯 | **CSS 3D Animations** | Perspective transforms, preserve-3d depth layers, spring-physics tilt cards — zero WebGL, pure CSS + Framer Motion |
| 🧈 | **Ultra-Smooth Scroll** | Lenis smooth scroll engine with tuned interpolation (`lerp: 0.08`) and per-device multipliers |
| 📱 | **Fully Responsive** | Fluid typography via `clamp()`, adaptive grids (1→2→3 cols), full-screen mobile nav overlay |
| ♿ | **Accessible** | `prefers-reduced-motion` support, semantic HTML, 44px+ touch targets, `aria-hidden` on decorative elements |
| ⚡ | **Performant** | GPU-accelerated transforms, `will-change` optimization, 115KB gzipped production bundle |

---

## ✦ Tech Stack

| Layer | Technology | Role |
|:---|:---|:---|
| **Framework** | React 19.2 | Component architecture |
| **Build** | Vite 7.3 | Development server & bundler |
| **Styling** | Tailwind CSS 4.1 | Utility-first design system |
| **Animation** | Framer Motion 12 | Scroll reveals, spring physics, variants |
| **Scroll** | Lenis 1.3 | Smooth scroll engine |
| **Icons** | Lucide React | Consistent SVG icon set |
| **Utilities** | clsx, tailwind-merge | Conditional class composition |

---

## ✦ Architecture

```
src/
├── components/
│   ├── Navbar.jsx              # Fixed nav with mobile overlay & scroll detection
│   └── ui/
│       └── BentoCard.jsx       # 3D tilt card with spring physics
├── sections/
│   ├── HeroSection.jsx         # 3D floating dashboard + mouse parallax
│   ├── TrustSection.jsx        # Infinite logo scroll with edge masks
│   ├── FeatureSection.jsx      # Staggered bento grid
│   ├── PricingSection.jsx      # 3D hover pricing cards
│   └── CTASection.jsx          # Orbiting spheres + glassmorphic CTA
├── layouts/
│   ├── MainLayout.jsx          # Lenis provider + responsive footer
│   └── SectionWrapper.jsx      # Scroll-triggered reveal wrapper
├── index.css                   # Design tokens, 3D keyframes, fluid utilities
├── App.jsx                     # Page composition
└── main.jsx                    # Entry point
```

---

## ✦ Getting Started

### Prerequisites

- **Node.js** 18+ &nbsp;·&nbsp; **npm** 9+

### Quick Start

```bash
# Clone
git clone https://github.com/SudipBera083/Droham.git
cd Droham/react_v2.0/core

# Install
npm install

# Develop
npm run dev
# → http://localhost:5173

# Build
npm run build
# → Optimized output in dist/
```

---

## ✦ Customization

### Theme & Colors

All design tokens are defined in `src/index.css` using Tailwind v4 CSS variables:

```css
@theme {
  --color-accent: #5E6AD2;      /* Brand color */
  --color-background: #030305;  /* Page background */
  --color-surface: #0A0A0C;     /* Card surfaces */
  --color-secondary: #A1A1AA;   /* Muted text */
}
```

### 3D Effects

The 3D system uses pure CSS — no external 3D libraries:

- **Perspective containers** → `perspective-1000`, `perspective-1500`, `perspective-2000`
- **Depth layers** → `preserve-3d` + `translateZ()` on child elements
- **Interactive tilt** → Spring-animated `rotateX/rotateY` via Framer Motion
- **Orbital animation** → `@keyframes orbit` with `rotateX(70deg) rotateZ()`

### Smooth Scroll

Lenis config lives in `MainLayout.jsx`:

```jsx
<ReactLenis root options={{
  lerp: 0.08,          // Interpolation smoothness
  duration: 1.4,       // Scroll duration
  wheelMultiplier: 0.8, // Desktop scroll speed
  touchMultiplier: 1.5, // Mobile touch sensitivity
}} />
```

---

## ✦ Deployment

Production-ready for **Vercel**, **Netlify**, or any static hosting.

| Setting | Value |
|:---|:---|
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Node Version | 18+ |

A `vercel.json` is included for SPA routing support.

---

## ✦ Scripts

| Command | Description |
|:---|:---|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Create optimized production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint checks |

---

<div align="center">

**Droham Private Limited** · © 2026

Built with precision by the Droham engineering team.

</div>
