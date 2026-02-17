import React from "react";
import Navbar from "@/components/Navbar";
import { ReactLenis } from "lenis/react";

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
            <div className="min-h-screen bg-background text-primary selection:bg-accent/40 selection:text-white">
                <Navbar />
                <main className="relative">{children}</main>

                {/* Footer */}
                <footer className="relative py-12 md:py-16 border-t border-white/5">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            {/* Logo */}
                            <div className="flex items-center gap-2">
                                <div className="w-7 h-7 bg-gradient-to-tr from-accent to-purple-500 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">D</span>
                                </div>
                                <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                    Droham
                                </span>
                            </div>

                            {/* Links */}
                            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
                                {["Privacy", "Terms", "Security", "Status"].map((link) => (
                                    <a
                                        key={link}
                                        href={`#${link.toLowerCase()}`}
                                        className="text-sm text-secondary hover:text-white transition-colors duration-300"
                                    >
                                        {link}
                                    </a>
                                ))}
                            </div>

                            {/* Copyright */}
                            <p className="text-sm text-secondary/60">
                                © {new Date().getFullYear()} Droham Inc.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </ReactLenis>
    );
};

export default MainLayout;
