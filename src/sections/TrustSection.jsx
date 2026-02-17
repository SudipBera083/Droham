import React from "react";
import { motion } from "framer-motion";

const logos = [
    "Linear", "Vercel", "Stripe", "Raycast", "Arc", "OpenAI", "Ramp", "Mercury"
];

const TrustSection = () => {
    return (
        <section className="py-10 md:py-14 border-y border-white/5 bg-white/[0.01] overflow-hidden perspective-1000">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center preserve-3d">
                <motion.p
                    initial={{ opacity: 0, y: 10, rotateX: 20 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-xs sm:text-sm font-medium text-secondary mb-6 md:mb-8 uppercase tracking-widest translate-z-10"
                >
                    Trusted by innovative teams worldwide
                </motion.p>

                {/* Infinite scroll with gradient edge masks */}
                <div className="relative flex overflow-x-hidden mask-edges group translate-z-0">
                    <div className="animate-loop-scroll flex shrink-0 items-center space-x-8 sm:space-x-12 whitespace-nowrap opacity-40 group-hover:opacity-100 transition-opacity duration-700 group-hover:[animation-play-state:paused]">
                        {[...logos, ...logos].map((logo, i) => (
                            <span
                                key={`a-${i}`}
                                className="text-xl sm:text-2xl font-bold font-sans text-white/80 mx-4 sm:mx-8 select-none hover:text-white transition-colors duration-300 hover:scale-110 transform"
                            >
                                {logo}
                            </span>
                        ))}
                    </div>
                    <div
                        className="animate-loop-scroll flex shrink-0 items-center space-x-8 sm:space-x-12 whitespace-nowrap opacity-40 group-hover:opacity-100 transition-opacity duration-700 group-hover:[animation-play-state:paused]"
                        aria-hidden="true"
                    >
                        {[...logos, ...logos].map((logo, i) => (
                            <span
                                key={`b-${i}`}
                                className="text-xl sm:text-2xl font-bold font-sans text-white/80 mx-4 sm:mx-8 select-none hover:text-white transition-colors duration-300 hover:scale-110 transform"
                            >
                                {logo}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
