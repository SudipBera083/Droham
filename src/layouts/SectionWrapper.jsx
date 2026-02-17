import React, { useRef } from "react";
import clsx from "clsx";
import { motion, useInView } from "framer-motion";

const SectionWrapper = ({ children, className, id }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <motion.section
            ref={ref}
            id={id}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={clsx(
                "relative py-16 md:py-24 lg:py-32 overflow-hidden",
                className
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {children}
            </div>
        </motion.section>
    );
};

export default SectionWrapper;
