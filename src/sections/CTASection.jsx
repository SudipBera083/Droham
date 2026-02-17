import React from "react";
import SectionWrapper from "@/layouts/SectionWrapper";
import { motion } from "framer-motion";
import { ChevronRight, Zap } from "lucide-react";

const CTASection = () => {
    return (
        <SectionWrapper id="cta" className="relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto text-center px-6 py-24 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden group">

                {/* Animated Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] pointer-events-none" />

                <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 mb-8 backdrop-blur-md">
                        <Zap className="w-4 h-4 text-accent" fill="currentColor" />
                        <span className="text-sm font-bold text-accent">Ready for the future?</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tight">
                        Start building your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
                            dream enterprise today.
                        </span>
                    </h2>

                    <p className="text-lg text-secondary mb-10 max-w-xl mx-auto">
                        Join thousands of forward-thinking companies scaling with Droham.
                        No credit card required for the 14-day trial.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="group relative px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-all shadow-[0_0_50px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_80px_-10px_rgba(255,255,255,0.4)] overflow-hidden">
                            <span className="relative z-10 flex items-center gap-2">
                                Get Started Free <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                        <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-colors">
                            Talk to Sales
                        </button>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default CTASection;
