# 💎 Droham: Next-Gen ERP Platform

[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6.0-purple?logo=vite)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-cyan?logo=tailwindcss)](https://tailwindcss.com)
[![Three.js](https://img.shields.io/badge/Three.js-R3F-black?logo=three.js)](https://docs.pmnd.rs/react-three-fiber)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-pink?logo=framer)](https://www.framer.com/motion/)

> **The future of enterprise software, reimagined.**
> 
> A high-performance, visually stunning SaaS landing page built for **Droham Private Limited**. Designed to convey premium quality, trust, and massive scale.

---

## 🚀 Key Features

### 🎨 Visual Excellence
- **Cinematic 3D Hero**: Built with React Three Fiber, featuring physical glass materials (`MeshTransmissionMaterial`), bloom, noise, and vignette post-processing.
- **Glassmorphism 2.0**: Accurate frosted glass effects using backdrop filters and border gradients.
- **Premium Fluid Motion**: Powered by **Lenis** for ultra-smooth, luxurious scroll physics.
- **Interactive UI**: Bento grids, tilt-effect pricing cards, and magnetic button interactions.

### ⚡ Performance & Tech
- **Tailwind CSS v4**: Bleeding-edge CSS-first configuration for zero-runtime overhead.
- **Vite Powered**: Instant HMR and optimized production builds.
- **Code Splitting**: Dynamic imports for heavy 3D assets to ensure fast initial loads.
- **Responsive**: Fully fluid design that adapts from mobile to 4K displays.

---

## 🛠️ Tech Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Core** | React 19, Vite | Foundation & Build Tool |
| **Styling** | Tailwind CSS v4 | Utility-first Design System |
| **3D Engine** | @react-three/fiber | Declarative Three.js Scene |
| **Post-Processing** | @react-three/postprocessing | Bloom, DOF, Noise Effects |
| **Animation** | Framer Motion | Complex UI Transitions |
| **Scroll** | Lenis | Smooth Scroll Handling |
| **Icons** | Lucide React | Modern SVG Icon Set |

---

## 📦 Getting Started

### Prerequisites
- Node.js 18+
- npm / yarn / pnpm

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/SudipBera083/Droham.git
    cd Droham/react_v2.0/core
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # Note: Requires @tailwindcss/postcss for v4 compatibility
    ```

3.  **Start Development Server**
    ```bash
    npm run dev
    # Server will start at http://localhost:5173
    ```

4.  **Build for Production**
    ```bash
    npm run build
    # optimises assets and generates dist/ folder
    ```

---

## 📂 Project Structure

```bash
src/
├── components/         # Reusable UI components
│   ├── ui/            # Primitive components (Buttons, Cards)
│   └── Hero3D.jsx     # The main 3D scene
├── sections/           # Landing page sections
│   ├── FeatureSection.jsx # Bento grid
│   ├── PricingSection.jsx # 3D Cards
│   └── CTASection.jsx     # Cinematic footer
├── layouts/            # Page wrappers (MainLayout with Lenis)
├── assets/             # Static images/fonts
└── index.css           # Global styles & Tailwind v4 Theme
```

---

## 🎨 Customization Guide

### colors & Theme
The project uses **Tailwind v4 CSS variables** for theming.
Edit `src/index.css` to modify the design system:

```css
@theme {
  /* Change brand color */
  --color-accent: #5E6AD2; 
  
  /* Adjust Animation Speed */
  --animate-float: float 8s ease-in-out infinite;
}
```

### 3D Effects
To tweak the 3D scene, open `src/components/Hero3D.jsx`:
- **Bloom**: Adjust `intensity` in `<Bloom />`.
- **Glass**: Modify `roughness` and `transmission` in `<MeshTransmissionMaterial />`.

---

## 🚢 Deployment

The project is ready for **Vercel** or **Netlify**.

**Vercel/Netlify Build Settings:**
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

---

© 2026 Droham Private Limited. All rights reserved.
Built with ❤️ by Antigravity.
