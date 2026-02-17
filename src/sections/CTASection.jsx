import React from "react";
import SectionWrapper from "@/layouts/SectionWrapper";
import { motion } from "framer-motion";
import { ChevronRight, Zap } from "lucide-react";

const CTASection = () => {
    return (
        <SectionWrapper id="cta" className="relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[300px] sm:h-[400px] bg-accent/20 blur-[120px] rounded-full pointer-events-none" />

            {/* 3D Orbiting Spheres */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden perspective-2000">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] preserve-3d animate-orbit">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-accent to-purple-500 blur-[2px] shadow-lg shadow-accent/50" style={{ transform: "translateZ(250px)" }} />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-pink-400 to-red-400 blur-[1px] shadow-lg shadow-pink-500/50" style={{ transform: "translateZ(200px)" }} />
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 blur-[1px] shadow-lg shadow-cyan-500/50" style={{ transform: "translateZ(180px)" }} />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] preserve-3d animate-orbit-reverse">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 blur-[1px] shadow-lg shadow-emerald-500/50" style={{ transform: "translateZ(220px)" }} />
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 blur-[1px] shadow-lg shadow-amber-500/50" style={{ transform: "translateZ(160px)" }} />
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 max-w-4xl mx-auto text-center px-5 sm:px-8 py-16 sm:py-20 md:py-24 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl overflow-hidden group preserve-3d"
            >
                {/* Animated Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] pointer-events-none" />

                <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 border border-accent/20 mb-6 md:mb-8 backdrop-blur-md">
                        <Zap className="w-4 h-4 text-accent" fill="currentColor" />
                        <span className="text-xs sm:text-sm font-bold text-accent">Ready for the future?</span>
                    </div>

                    <h2 className="text-fluid-3xl md:text-fluid-4xl font-black mb-4 md:mb-6 text-white tracking-tight leading-tight">
                        Start building your <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
                            dream enterprise today.
                        </span>
                    </h2>

                    <p className="text-fluid-base text-secondary mb-8 md:mb-10 max-w-xl mx-auto leading-relaxed">
                        Join thousands of forward-thinking companies scaling with Droham.
                        No credit card required for the 14-day trial.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                        <button className="group relative w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-[0_0_50px_-10px_rgba(255,255,255,0.2)] hover:shadow-[0_0_80px_-10px_rgba(255,255,255,0.35)] overflow-hidden active:scale-[0.97]">
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                Get Started Free <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                        </button>
                        <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all duration-300 active:scale-[0.97]">
                            Talk to Sales
                        </button>
                    </div>
                </div>
            </motion.div>
        </SectionWrapper>
    );
};

export default CTASection;
