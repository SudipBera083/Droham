import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import clsx from "clsx";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [mobileMenuOpen]);

    const navLinks = [
        { name: "Product", href: "#features" },
        { name: "Solutions", href: "#solutions" },
        { name: "Pricing", href: "#pricing" },
        { name: "Enterprise", href: "#enterprise" },
    ];

    const linkVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: { delay: i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] },
        }),
    };

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
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-tr from-accent to-purple-500 rounded-lg flex items-center justify-center shadow-lg shadow-accent/20">
                        <span className="text-white font-bold text-lg">D</span>
                    </div>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        Droham
                    </span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-secondary hover:text-white transition-colors duration-300 relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-purple-400 transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <button className="text-sm font-medium text-white hover:text-accent transition-colors duration-300">
                        Sign In
                    </button>
                    <button className="group relative px-5 py-2.5 bg-white/10 hover:bg-white/15 border border-white/10 rounded-full text-sm font-medium text-white transition-all duration-300 overflow-hidden">
                        <span className="relative z-10 flex items-center gap-1.5">
                            Get Started <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
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
                    {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile Menu — Full Screen Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden fixed inset-0 top-[60px] bg-background/98 backdrop-blur-2xl z-40"
                    >
                        <div className="flex flex-col h-full px-6 py-10">
                            <div className="flex flex-col gap-2">
                                {navLinks.map((link, i) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        custom={i}
                                        variants={linkVariants}
                                        initial="hidden"
                                        animate="visible"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-2xl font-semibold text-white/80 hover:text-white py-4 border-b border-white/5 transition-colors active:text-accent"
                                    >
                                        {link.name}
                                    </motion.a>
                                ))}
                            </div>

                            <div className="mt-auto pb-8 space-y-4">
                                <motion.button
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.4 }}
                                    className="w-full py-4 bg-accent hover:bg-accent-glow text-white rounded-2xl font-bold transition-all text-lg active:scale-[0.98]"
                                >
                                    Get Started Now
                                </motion.button>
                                <motion.button
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.35, duration: 0.4 }}
                                    className="w-full py-4 bg-white/5 text-white rounded-2xl font-medium border border-white/10 transition-all active:scale-[0.98]"
                                >
                                    Sign In
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
