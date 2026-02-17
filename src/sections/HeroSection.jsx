import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronRight, Activity, Globe, Shield, Zap } from "lucide-react";
import TiltContainer from "@/components/ui/TiltContainer";
import Cube3D from "@/components/ui/Cube3D";

const HeroSection = () => {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();

    // Parallax effects
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const rotate = useTransform(scrollY, [0, 500], [0, 10]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-[110vh] w-full flex items-center justify-center overflow-hidden bg-background pt-32 pb-20 perspective-2000"
        >
            {/* Ambient Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* 3D Cubes floating */}
                <motion.div style={{ y: y1, x: -50 }} className="absolute top-[15%] left-[5%] opacity-30">
                    <Cube3D size={60} className="animate-float" />
                </motion.div>
                <motion.div style={{ y: y2, x: 50 }} className="absolute bottom-[20%] right-[10%] opacity-30">
                    <Cube3D size={80} className="animate-float-3d" />
                </motion.div>
                <div className="absolute top-[40%] left-[20%] opacity-10 blur-sm transform scale-50">
                    <Cube3D size={120} />
                </div>

                {/* Gradients */}
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/20 rounded-full blur-[120px] animate-pulse-slow" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="flex-1 text-center lg:text-left z-20"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:bg-white/10 transition-all cursor-pointer group hover:scale-105"
                        >
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                            </span>
                            <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">v3.0 Now Live</span>
                            <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                        </motion.div>

                        <h1 className="text-fluid-hero font-black mb-6 leading-[1.05] tracking-tight transform-style-3d">
                            <span className="block text-white reveal-text">
                                Architecting
                            </span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-400 to-pink-400 bg-300% animate-gradient pb-2">
                                The Future.
                            </span>
                        </h1>

                        <p className="text-fluid-lg text-secondary max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed text-balance">
                            Experience the next generation of enterprise management.
                            Fully automated, infinitely scalable, and designed for
                            <span className="text-white font-semibold"> sheer performance</span>.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <button className="group relative px-8 py-4 bg-white text-black font-bold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-700 ease-in-out" />
                                <span className="relative flex items-center gap-2">
                                    Start Building <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>

                            <button className="px-8 py-4 bg-white/5 text-white font-medium rounded-full hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2">
                                <Zap className="w-5 h-5 text-yellow-400 fill-yellow-400/20" />
                                Documentation
                            </button>
                        </div>
                    </motion.div>

                    {/* 3D Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 1.2, delay: 0.2, type: "spring", damping: 20 }}
                        style={{ rotate }}
                        className="flex-1 w-full max-w-xl perspective-2000 relative z-10"
                    >
                        <TiltContainer className="w-full" perspective={2000}>
                            {/* Main Holographic Board */}
                            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 shadow-2xl shadow-accent/20 preserve-3d">

                                {/* Floating Elements coming out of the board */}
                                <div className="absolute -top-10 -right-10 translate-z-50 animate-float-slow">
                                    <div className="p-4 rounded-xl bg-surface/80 backdrop-blur-md border border-white/10 shadow-xl flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                                            <Activity className="w-6 h-6 text-green-400" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-secondary">System Status</div>
                                            <div className="text-sm font-bold text-white">All Systems Go</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute -bottom-5 -left-5 translate-z-30 animate-float-medium">
                                    <div className="p-4 rounded-xl bg-surface/80 backdrop-blur-md border border-white/10 shadow-xl">
                                        <div className="flex items-center gap-3 mb-2">
                                            <Globe className="w-5 h-5 text-blue-400" />
                                            <span className="text-sm font-bold">Global Mesh</span>
                                        </div>
                                        <div className="w-32 h-1.5 bg-white/10 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: "85%" }}
                                                transition={{ duration: 1, delay: 1 }}
                                                className="h-full bg-blue-500"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Internal Grid/UI */}
                                <div className="grid grid-cols-2 gap-4 translate-z-20">
                                    <div className="bg-white/5 rounded-lg p-4 border border-white/5 h-32 flex flex-col justify-between group hover:bg-white/10 transition-colors">
                                        <Shield className="w-6 h-6 text-purple-400 mb-2" />
                                        <div className="w-16 h-2 bg-white/20 rounded-full" />
                                        <div className="w-24 h-2 bg-white/10 rounded-full" />
                                    </div>
                                    <div className="bg-white/5 rounded-lg p-4 border border-white/5 h-32 flex flex-col justify-between group hover:bg-white/10 transition-colors">
                                        <div className="flex gap-1">
                                            <div className="w-2 h-8 bg-accent/40 rounded-sm" />
                                            <div className="w-2 h-12 bg-accent/60 rounded-sm" />
                                            <div className="w-2 h-6 bg-accent/80 rounded-sm" />
                                            <div className="w-2 h-10 bg-accent rounded-sm" />
                                        </div>
                                        <div className="w-20 h-2 bg-white/20 rounded-full" />
                                    </div>
                                    <div className="bg-white/5 rounded-lg p-4 border border-white/5 h-24 col-span-2 flex items-center gap-4 group hover:bg-white/10 transition-colors">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-purple-600 animate-spin-slow opacity-80" />
                                        <div className="space-y-2">
                                            <div className="w-48 h-2 bg-white/20 rounded-full" />
                                            <div className="w-32 h-2 bg-white/10 rounded-full" />
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative glow behind */}
                                <div className="absolute inset-0 bg-accent/10 blur-3xl -z-10 translate-z-n10" />
                            </div>
                        </TiltContainer>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
