import React from "react";
import SectionWrapper from "@/layouts/SectionWrapper";

const logos = [
    "Linear", "Vercel", "Stripe", "Raycast", "Arc", "OpenAI", "Ramp", "Mercury"
];

const TrustSection = () => {
    return (
        <section className="py-12 border-y border-white/5 bg-white/[0.02]">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <p className="text-sm font-medium text-secondary mb-8 uppercase tracking-widest">
                    Trusted by innovative teams worldwide
                </p>

                <div className="relative flex overflow-x-hidden group">
                    <div className="animate-loop-scroll flex space-x-12 whitespace-nowrap opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        {[...logos, ...logos, ...logos].map((logo, i) => (
                            <span key={i} className="text-2xl font-bold font-sans text-white mx-8">
                                {logo}
                            </span>
                        ))}
                    </div>
                    <div className="animate-loop-scroll flex space-x-12 whitespace-nowrap opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 aria-hidden='true'">
                        {[...logos, ...logos, ...logos].map((logo, i) => (
                            <span key={i} className="text-2xl font-bold font-sans text-white mx-8">
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
