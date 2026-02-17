import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";

const HeroSection = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = useCallback((e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        setMousePos({ x, y });
    }, []);

    const handleMouseLeave = useCallback(() => {
        setMousePos({ x: 0, y: 0 });
    }, []);

    return (
        <section
            className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background pt-20 md:pt-24"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Aurora Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/15 rounded-full blur-[120px] animate-pulse-slow" />
                <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] bg-purple-500/15 rounded-full blur-[100px] animate-float" />
                <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="flex-1 text-center lg:text-left"
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 md:mb-8 hover:bg-white/10 transition-colors duration-300 cursor-pointer group">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                            </span>
                            <span className="text-xs sm:text-sm font-medium text-gray-300">v2.0 System Online</span>
                            <ChevronRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-white transition-colors" />
                        </div>

                        {/* Heading — fluid */}
                        <h1 className="text-fluid-hero font-black mb-4 md:mb-6 leading-[1.05] tracking-tight">
                            <span className="block text-white">
                                Limitless
                            </span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-400 to-pink-400 bg-300% animate-gradient pb-1">
                                Performance.
                            </span>
                        </h1>

                        {/* Subheading */}
                        <p className="text-fluid-lg text-secondary max-w-2xl mx-auto lg:mx-0 mb-8 md:mb-10 leading-relaxed">
                            The ERP platform built for speed. No bloat, just
                            <span className="text-white font-medium"> raw power</span> and
                            <span className="text-white font-medium"> precision engineering</span>.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
                            <button className="group relative w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-full hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] transition-all duration-300 overflow-hidden active:scale-[0.97]">
                                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Start Building <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                            </button>

                            <button className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white font-medium rounded-full hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all duration-300 active:scale-[0.97]">
                                Documentation
                            </button>
                        </div>
                    </motion.div>

                    {/* 3D Dashboard Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="flex-1 w-full max-w-lg lg:max-w-xl perspective-1500"
                    >
                        <div
                            className="preserve-3d transition-transform duration-500 ease-out"
                            style={{
                                transform: `rotateY(${mousePos.x * 8}deg) rotateX(${-mousePos.y * 5}deg)`,
                            }}
                        >
                            {/* Main Dashboard Card */}
                            <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 sm:p-6 shadow-2xl shadow-black/40">
                                {/* Dashboard Header */}
                                <div className="flex items-center gap-2 mb-5">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-400/80" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                                        <div className="w-3 h-3 rounded-full bg-green-400/80" />
                                    </div>
                                    <div className="flex-1 h-6 bg-white/5 rounded-md mx-2" />
                                </div>

                                {/* Stats Row */}
                                <div className="grid grid-cols-3 gap-3 mb-5">
                                    {[
                                        { label: "Revenue", value: "$2.4M", change: "+12%", color: "from-accent to-purple-400" },
                                        { label: "Users", value: "48.2K", change: "+8%", color: "from-emerald-400 to-cyan-400" },
                                        { label: "Growth", value: "94%", change: "+22%", color: "from-pink-400 to-orange-400" },
                                    ].map((stat, i) => (
                                        <motion.div
                                            key={stat.label}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.8 + i * 0.15 }}
                                            className="preserve-3d rounded-xl bg-white/5 border border-white/5 p-3 sm:p-4"
                                            style={{ transform: "translateZ(20px)" }}
                                        >
                                            <p className="text-[10px] sm:text-xs text-secondary mb-1">{stat.label}</p>
                                            <p className="text-base sm:text-lg font-bold text-white">{stat.value}</p>
                                            <span className={`text-[10px] sm:text-xs font-medium bg-clip-text text-transparent bg-gradient-to-r ${stat.color}`}>
                                                {stat.change}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Chart Bars */}
                                <div className="rounded-xl bg-white/5 border border-white/5 p-4" style={{ transform: "translateZ(10px)" }}>
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-xs text-secondary">Performance Overview</span>
                                        <span className="text-xs text-accent">Live</span>
                                    </div>
                                    <div className="flex items-end gap-1.5 sm:gap-2 h-20 sm:h-24">
                                        {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ height: 0 }}
                                                animate={{ height: `${h}%` }}
                                                transition={{ delay: 1 + i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                                className="flex-1 rounded-sm bg-gradient-to-t from-accent/40 to-accent/80 hover:from-accent/60 hover:to-accent transition-colors duration-300"
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Floating Notification — depth layer */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.5, duration: 0.6 }}
                                    className="absolute -right-3 sm:-right-6 top-1/3 rounded-xl bg-surface/90 border border-white/10 backdrop-blur-xl p-3 shadow-xl shadow-black/30 hidden sm:block"
                                    style={{ transform: "translateZ(40px)" }}
                                >
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                                            <span className="text-xs font-bold text-white">✓</span>
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium text-white">Deployment Success</p>
                                            <p className="text-[10px] text-secondary">2 seconds ago</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Grid overlay for texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 pointer-events-none mix-blend-overlay"></div>
        </section>
    );
};

export default HeroSection;
