import React from "react";
import clsx from "clsx";

const SectionWrapper = ({ children, className, id }) => {
    return (
        <section id={id} className={clsx("relative py-24 md:py-32 overflow-hidden", className)}>
            <div className="max-w-7xl mx-auto px-6 relative z-10">{children}</div>
        </section>
    );
};

export default SectionWrapper;
