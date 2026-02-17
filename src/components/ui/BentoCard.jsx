import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

const BentoCard = ({ title, description, icon: Icon, className, children }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top } = currentTarget.getBoundingClientRect();
        x.set(clientX - left);
        y.set(clientY - top);
    }

    const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
    const style = { maskImage, WebkitMaskImage: maskImage };

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            className={`group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-8 hover:border-white/20 transition-colors ${className}`}
        >
            <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100">
                <motion.div
                    style={style}
                    className="absolute inset-0 bg-gradient-to-r from-accent/20 to-purple-500/20 opacity-40 backdrop-blur-xl"
                />
            </div>

            <div className="relative z-10">
                <div className="mb-4 inline-flex items-center justify-center h-12 w-12 rounded-lg bg-white/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                    {Icon && <Icon className="h-6 w-6" />}
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
                <p className="text-secondary">{description}</p>
                <div className="mt-6">{children}</div>
            </div>
        </div>
    );
};

export default BentoCard;
