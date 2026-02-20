import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import logo from "@/assets/logo/logo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll Detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock Body Scroll
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close on Route Change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", to: "/", type: "route" },
    { name: "About", to: "/about", type: "route" },
    { name: "Product", to: "#features", type: "anchor" },
    { name: "Pricing", to: "/pricing", type: "route" },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
          scrolled
            ? "bg-background/90 backdrop-blur-xl border-white/5 py-3"
            : "bg-transparent border-transparent py-4 md:py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Droham" className="h-10 md:h-12 w-auto" />
            <span
              style={{ fontFamily: '"Playwrite Cuba Guides", cursive' }}
              className="text-xl md:text-2xl font-semibold text-white"
            >
              roham
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.type === "route" ? (
                <Link
                  key={link.name}
                  to={link.to}
                  className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.to}
                  className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </a>
              )
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-lg bg-white/5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-5 h-5 text-white" />
          </button>
        </div>
      </motion.nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Dark overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-[998] md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Slide-in Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-full bg-background z-[999] md:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full px-6 py-8">

                {/* Header inside mobile menu */}
                <div className="flex items-center justify-between mb-12">
                  <div className="flex items-center gap-2">
                    <img src={logo} alt="Droham" className="h-9 w-auto" />
                    <span
                      style={{ fontFamily: '"Playwrite Cuba Guides", cursive' }}
                      className="text-lg font-semibold text-white"
                    >
                      roham
                    </span>
                  </div>

                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col gap-6">
                  {navLinks.map((link) =>
                    link.type === "route" ? (
                      <Link
                        key={link.name}
                        to={link.to}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-2xl font-semibold text-white"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        key={link.name}
                        href={link.to}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-2xl font-semibold text-white"
                      >
                        {link.name}
                      </a>
                    )
                  )}
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;