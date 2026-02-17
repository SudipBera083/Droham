import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/layouts/SectionWrapper";
import { ChevronRight, ArrowRight } from "lucide-react";

const HeroSection = () => {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background pt-20">
            {/* Aurora Background Effects - CSS Only (High Performance) */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[120px] animate-pulse-slow" />
                <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] bg-purple-500/20 rounded-full blur-[100px] animate-float delay-1000" />
                <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-pointer group">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                        </span>
                        <span className="text-sm font-medium text-gray-300">v2.0 System Online</span>
                        <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                    </div>

                    {/* Heading */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[1.1] tracking-tight">
                        <span className="block text-white">
                            Limitless
                        </span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-400 to-pink-400 bg-300% animate-gradient pb-2">
                            Performance.
                        </span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
                        The ERP platform built for speed. No bloat, just
                        <span className="text-white font-medium"> raw power</span> and
                        <span className="text-white font-medium"> precision engineering</span>.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="group relative px-8 py-4 bg-white text-black font-bold rounded-full hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] transition-all overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="relative z-10 flex items-center gap-2">
                                Start Building <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>

                        <button className="px-8 py-4 bg-white/5 text-white font-medium rounded-full hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all">
                            Documentation
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Grid overlay for texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
        </section>
    );
};

export default HeroSection;
