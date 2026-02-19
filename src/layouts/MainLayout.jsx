import React from "react";
import Navbar from "@/components/Navbar";
import { ReactLenis } from "lenis/react";
import logo from "@/assets/logo/logo.png";


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
                            {/* <div className="flex items-center">
                                <img
                                    src={logo}
                                    alt="Droham Logo"
                                    className="h-10 md:h-12 w-auto object-contain cursor-pointer transition-transform duration-300 hover:scale-105"
                                />
                            </div> */}
                             <div className="flex items-center gap-1">
                            
                                                {/* Glow Background */}
                                                {/* <div className="absolute inset-0 rounded-2xl bg-gradient-to-r 
                                                from-orange-500/10 via-blue-500/10 to-purple-500/10 
                                                opacity-0 group-hover:opacity-100 
                                                blur-2xl transition-opacity duration-500 -z-10" /> */}
                            
                                                {/* Logo */}
                                                <img
                                                    src={logo}
                                                    alt="Droham Logo"
                                                    className="h-10 md:h-12 w-auto object-contain cursor-pointer transition-transform duration-300 hover:scale-105"/>
                            
                                                {/* Text */}
                                                <span style={{ fontFamily: '"Playwrite Cuba Guides", cursive' }} className="text-xl md:text-2xl font-semibold tracking-tight 
                                                 bg-gradient-to-r from-white via-gray-200 to-gray-400 
                                                 bg-clip-text text-transparent 
                                                 transition-all duration-500 
                                                 group-hover:tracking-normal ">
                                                    roham
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
