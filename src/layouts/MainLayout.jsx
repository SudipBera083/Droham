import React from "react";
import Navbar from "@/components/Navbar";
import { ReactLenis } from "lenis/react";
import logo from "@/assets/logo/logo.png";
import { Link } from "react-router-dom";
import { Linkedin, Github, Youtube, Instagram } from "lucide-react";

const MainLayout = ({ children }) => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.4,
        smoothWheel: true,
        wheelMultiplier: 0.8,
        touchMultiplier: 1.5,
        infinite: false,
      }}
    >
      <div className="min-h-screen bg-background text-primary selection:bg-accent/40 selection:text-white relative">

        <Navbar />

        <main className="relative">{children}</main>

        {/* Sticky Social Sidebar */}
        <div className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-5">

          {[
            { icon: <Linkedin size={20} />, href: "#" },
            // { icon: <Github size={20} />, href: "#" },
            { icon: <Youtube size={20} />, href: "#" },
            { icon: <Instagram size={20} />, href: "#" },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="group relative w-11 h-11 flex items-center justify-center
                         rounded-xl bg-white/5 border border-white/10
                         backdrop-blur-md
                         shadow-lg transition-all duration-300
                         hover:-translate-y-1 hover:bg-white/10"
            >
              {item.icon}

              {/* Glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r 
                              from-orange-500/20 via-blue-500/20 to-purple-500/20 
                              opacity-0 group-hover:opacity-100 
                              blur-xl transition-opacity duration-500 -z-10" />
            </a>
          ))}

        </div>

        {/* Footer */}
        <footer className="relative mt-24 py-16 border-t border-white/5">

          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent -z-10" />

          <div className="max-w-7xl mx-auto px-6">

            <div className="grid md:grid-cols-3 gap-12 items-start">

              {/* Brand */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <img
                    src={logo}
                    alt="Droham Logo"
                    className="h-10 w-auto object-contain"
                  />
                  <span
                    style={{ fontFamily: '"Playwrite Cuba Guides", cursive' }}
                    className="text-2xl font-semibold bg-gradient-to-r 
                    from-white via-gray-200 to-gray-400 
                    bg-clip-text text-transparent"
                  >
                    roham
                  </span>
                </div>

                <p className="text-secondary/70 leading-relaxed max-w-sm">
                  Building intelligent SaaS infrastructure that powers modern enterprises.
                  Automation. Integration. Operational Intelligence.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-white font-semibold mb-6 tracking-wide">
                  Quick Links
                </h4>

                <div className="flex flex-col gap-4">

                  {[
                    { name: "Privacy Policy", to: "/privacy" },
                    { name: "Terms of Service", to: "/terms" },
                    { name: "Security", to: "/security" },
                    { name: "Status", to: "/status" },
                  ].map((link, index) => (
                    <Link
                      key={link.name}
                      to={link.to}
                      className="group relative text-secondary hover:text-white transition-all duration-300 pl-0"
                    >
                      {link.name}

                      {/* Animated underline */}
                      <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />

                      {/* Subtle left accent */}
                      <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-2" />
                    </Link>
                  ))}

                </div>
              </div>
              {/* Contact */}
              <div>
                <h4 className="text-white font-semibold mb-6">
                  Contact
                </h4>
                <div className="flex flex-col gap-4 text-secondary">
                  <p>support@droham.com</p>
                  <p>Kolkata, India</p>
                  <p>Enterprise SaaS Infrastructure</p>
                </div>
              </div>

            </div>

            {/* Bottom Bar */}
            <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">

              <p className="text-sm text-secondary/60">
                © {new Date().getFullYear()} Droham Private Limited. All rights reserved.
              </p>

              <div className="text-sm text-secondary/60">
                Built with intelligence ⚡
              </div>

            </div>

          </div>
        </footer>

      </div>
    </ReactLenis>
  );
};

export default MainLayout;
