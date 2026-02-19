import React, { useRef, useState, useCallback } from "react";
import SectionWrapper from "@/layouts/SectionWrapper";
import { Check } from "lucide-react";
import { motion, useSpring } from "framer-motion";
import clsx from "clsx";

const PricingCard = ({ title, price, features, recommended = false, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const rotateX = useSpring(0, { stiffness: 300, damping: 30 });
    const rotateY = useSpring(0, { stiffness: 300, damping: 30 });

    const handleMouseMove = useCallback((e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const centerX = width / 2;
        const centerY = height / 2;
        const tiltX = ((e.clientY - top - centerY) / centerY) * -6;
        const tiltY = ((e.clientX - left - centerX) / centerX) * 6;
        rotateX.set(tiltX);
        rotateY.set(tiltY);
    }, [rotateX, rotateY]);

    const handleMouseLeave = useCallback(() => {
        rotateX.set(0);
        rotateY.set(0);
        setIsHovered(false);
    }, [rotateX, rotateY]);

    return (
        <div className="perspective-1000">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                onMouseMove={(e) => { handleMouseMove(e); setIsHovered(true); }}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY }}
                className={clsx(
                    "relative p-6 sm:p-8 rounded-2xl border backdrop-blur-xl flex flex-col preserve-3d backface-hidden transition-shadow duration-500",
                    recommended
                        ? "bg-white/[0.08] border-accent/40 shadow-2xl shadow-accent/10 z-10 md:scale-105"
                        : "bg-white/[0.03] border-white/10 hover:border-white/20"
                )}
            >
                {/* Animated shimmer for recommended */}
                {recommended && (
                    <>
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-accent to-purple-500 text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-lg shadow-accent/20">
                            Most Popular
                        </div>
                        <div className="absolute inset-0 rounded-2xl shimmer-bg animate-shimmer opacity-30 pointer-events-none" />
                    </>
                )}

                <div className="mb-6 sm:mb-8 relative z-10" style={{ transform: "translateZ(15px)" }}>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{title}</h3>
                    <div className="flex items-baseline gap-1">
                        <span className="text-fluid-4xl font-bold text-white">{price}</span>
                        {price !== "Custom" && <span className="text-secondary text-sm">/month</span>}
                    </div>
                </div>

                <ul className="flex-1 space-y-3 sm:space-y-4 mb-6 sm:mb-8 relative z-10" style={{ transform: "translateZ(10px)" }}>
                    {features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-secondary text-sm sm:text-base">
                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center">
                                <Check className="w-3 h-3 text-accent" />
                            </div>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>

                <button
                    className={clsx(
                        "w-full py-3 sm:py-3.5 rounded-xl font-bold transition-all duration-300 relative z-10 active:scale-[0.97]",
                        recommended
                            ? "bg-gradient-to-r from-accent to-purple-500 hover:from-accent-glow hover:to-purple-600 text-white shadow-lg shadow-accent/25"
                            : "bg-white/10 hover:bg-white/20 text-white"
                    )}
                    style={{ transform: "translateZ(20px)" }}
                >
                    Get Started
                </button>
            </motion.div>
        </div>
    );
};

const PricingSection = () => {
    const plans = [
        {
            title: "3 months",
            price: "₹399",
            
            features: ["Advanced AI features", "Priority support", "256GB storage", "API access"],    
        },
        {
            title: "6 months",
            price: "₹699",
            recommended: true,
            features: ["Advanced AI features", "Priority support", "512GB storage", "API access"],
        },
        {
            title: "11 months",
            price: "₹1199",
            
            features: ["Advanced AI features", "Priority support", "1TB storage", "API access"],
        },
    ];

    return (
        <SectionWrapper id="pricing" className="bg-gradient-to-b from-transparent to-background/50">
            <div className="text-center mb-12 md:mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-fluid-3xl md:text-fluid-4xl font-bold mb-4 md:mb-6 text-white"
                >
                    Simple, transparent pricing
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-secondary text-fluid-lg max-w-2xl mx-auto"
                >
                    Choose the plan that fits your needs. No hidden fees.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto items-center">
                {plans.map((plan, idx) => (
                    <PricingCard key={idx} {...plan} index={idx} />
                ))}
            </div>
        </SectionWrapper>
    );
};

export default PricingSection;
