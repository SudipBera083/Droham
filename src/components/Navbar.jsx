import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import clsx from "clsx";
import logo from "@/assets/logo/logo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileMenuOpen]);

    const navLinks = [
        { name: "Home", to: "/", type: "route" },
        { name: "About", to: "/about", type: "route" },
        { name: "Product", to: "#features", type: "anchor" },
        { name: "Pricing", to: "/pricing", type: "route" },
    ];


    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
                scrolled
                    ? "bg-background/80 backdrop-blur-xl border-white/5 py-3"
                    : "bg-transparent border-transparent py-4 md:py-5"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

                {/* Logo */}
                <Link
                    to="/"
                    className="group relative inline-flex items-center gap-1 px-4 py-2 rounded-2xl 
          bg-gradient-to-br from-white/5 to-white/2 
          backdrop-blur-xl border border-white/10 
          shadow-[0_10px_30px_rgba(0,0,0,0.5)] 
          transition-all duration-500 
          hover:shadow-[0_20px_60px_rgba(0,0,0,0.7)] 
          hover:-translate-y-1 cursor-pointer"
                >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r 
            from-orange-500/10 via-blue-500/10 to-purple-500/10 
            opacity-0 group-hover:opacity-100 
            blur-2xl transition-opacity duration-500 -z-10"
                    />

                    <img
                        src={logo}
                        alt="Droham Logo"
                        className="h-10 md:h-12 w-auto object-contain 
            transition-transform duration-500 
            group-hover:scale-110 group-hover:rotate-[2deg]"
                    />

                    <span
                        style={{ fontFamily: '"Playwrite Cuba Guides", cursive' }}
                        className="text-xl md:text-2xl font-semibold tracking-tight 
            bg-gradient-to-r from-white via-gray-200 to-gray-400 
            bg-clip-text text-transparent 
            transition-all duration-500 
            group-hover:tracking-normal"
                    >
                        roham
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => {
                        if (link.type === "route") {
                            return (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    className="text-sm font-medium text-secondary hover:text-white transition-colors duration-300 relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-purple-400 transition-all duration-300 group-hover:w-full" />
                                </Link>
                            );
                        }

                        return (
                            <a
                                key={link.name}
                                href={link.to}
                                className="text-sm font-medium text-secondary hover:text-white transition-colors duration-300 relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-purple-400 transition-all duration-300 group-hover:w-full" />
                            </a>
                        );
                    })}

                </div>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <button className="text-sm font-medium text-white hover:text-accent transition-colors duration-300">
                        Sign In
                    </button>

                    <button className="group relative px-5 py-2.5 bg-white/10 hover:bg-white/15 border border-white/10 rounded-full text-sm font-medium text-white transition-all duration-300 overflow-hidden">
                        <span className="relative z-10 flex items-center gap-1.5">
                            Get Started
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                        </span>
                        <div className="absolute inset-0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden relative w-11 h-11 flex items-center justify-center rounded-lg bg-white/5 active:bg-white/10 transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? (
                        <X className="w-5 h-5" />
                    ) : (
                        <Menu className="w-5 h-5" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden fixed inset-0 top-[70px] bg-background/98 backdrop-blur-2xl z-40"
                    >
                        <div className="flex flex-col h-full px-6 py-10">

                            <div className="flex flex-col gap-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.to}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-2xl font-semibold text-white/80 hover:text-white py-4 border-b border-white/5 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>

                            <div className="mt-auto pb-8 space-y-4">
                                <button className="w-full py-4 bg-accent hover:bg-accent-glow text-white rounded-2xl font-bold transition-all text-lg active:scale-[0.98]">
                                    Get Started Now
                                </button>

                                <button className="w-full py-4 bg-white/5 text-white rounded-2xl font-medium border border-white/10 transition-all active:scale-[0.98]">
                                    Sign In
                                </button>
                            </div>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
