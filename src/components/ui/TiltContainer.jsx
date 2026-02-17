import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const TiltContainer = ({ children, className = '', perspective = 1000 }) => {
    const ref = useRef(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [scale, setScale] = useState(1);

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        setRotation({
            x: -yPct * 20, // Max tilt X
            y: xPct * 20,  // Max tilt Y
        });
    };

    const handleMouseEnter = () => {
        setScale(1.05);
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
        setScale(1);
    };

    return (
        <motion.div
            ref={ref}
            className={`relative preserve-3d ${className}`}
            style={{ perspective }}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            animate={{
                rotateX: rotation.x,
                rotateY: rotation.y,
                scale: scale,
            }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
            }}
        >
            <div className="preserve-3d h-full w-full">
                {children}
            </div>
        </motion.div>
    );
};

export default TiltContainer;
