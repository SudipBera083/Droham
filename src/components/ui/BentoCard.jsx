import React, { useRef, useState, useCallback } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

const BentoCard = ({ title, description, icon: Icon, className, children }) => {
    const ref = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    // 3D tilt values
    const rotateX = useSpring(0, { stiffness: 300, damping: 30 });
    const rotateY = useSpring(0, { stiffness: 300, damping: 30 });

    const handleMouseMove = useCallback(({ currentTarget, clientX, clientY }) => {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        x.set(clientX - left);
        y.set(clientY - top);

        // 3D tilt calculation
        const centerX = width / 2;
        const centerY = height / 2;
        const tiltX = ((clientY - top - centerY) / centerY) * -8;
        const tiltY = ((clientX - left - centerX) / centerX) * 8;
        rotateX.set(tiltX);
        rotateY.set(tiltY);
    }, [x, y, rotateX, rotateY]);

    const handleMouseLeave = useCallback(() => {
        rotateX.set(0);
        rotateY.set(0);
        setIsHovered(false);
    }, [rotateX, rotateY]);

    const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
    const style = { maskImage, WebkitMaskImage: maskImage };

    return (
        <div className={`perspective-1000 ${className}`}>
            <motion.div
                ref={ref}
                onMouseMove={(e) => { handleMouseMove(e); setIsHovered(true); }}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 hover:border-white/20 transition-colors duration-500 preserve-3d backface-hidden cursor-default"
            >
                {/* Glow follow effect */}
                <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-500 group-hover:opacity-100">
                    <motion.div
                        style={style}
                        className="absolute inset-0 bg-gradient-to-r from-accent/20 to-purple-500/20 opacity-40 backdrop-blur-xl"
                    />
                </div>

                {/* Shimmer sweep */}
                <div className="absolute inset-0 shimmer-bg opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10 preserve-3d">
                    {/* Icon — floats up on hover */}
                    <motion.div
                        animate={{ z: isHovered ? 40 : 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="mb-4 inline-flex items-center justify-center h-12 w-12 rounded-xl bg-white/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-lg shadow-transparent group-hover:shadow-accent/20"
                    >
                        {Icon && <Icon className="h-6 w-6" />}
                    </motion.div>

                    <h3 className="mb-2 text-lg sm:text-xl font-bold text-white group-hover:text-white transition-colors">{title}</h3>
                    <p className="text-sm sm:text-base text-secondary leading-relaxed">{description}</p>
                    {children && <div className="mt-6">{children}</div>}
                </div>
            </motion.div>
        </div>
    );
};

export default BentoCard;
