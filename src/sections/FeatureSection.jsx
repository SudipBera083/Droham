import React from "react";
import BentoCard from "@/components/ui/BentoCard";
import SectionWrapper from "@/layouts/SectionWrapper";
import { motion } from "framer-motion";
import { Zap, Shield, Globe, Cpu, BarChart3, Users, ArrowUpRight } from "lucide-react";
import TiltContainer from "@/components/ui/TiltContainer";

const features = [
    {
        title: "Global Scale",
        description: "Deploy instantly to 35+ regions worldwide with edge networking and automatic failover.",
        icon: Globe,
        className: "sm:col-span-2 lg:col-span-2",
        link: "#global-scale",
    },
    {
        title: "Real-time AI",
        description: "Built-in intelligence for predictive analytics and automation.",
        icon: Cpu,
        className: "sm:col-span-1 lg:col-span-1",
        link: "#real-time-ai",
    },
    {
        title: "Enterprise Security",
        description: "SOC2 Type II certified with automated compliance reporting.",
        icon: Shield,
        className: "sm:col-span-1 lg:col-span-1",
        link: "#security",
    },
    {
        title: "Instant Analytics",
        description: "Visualize data trends with zero-latency dashboards and real-time insights.",
        icon: BarChart3,
        className: "sm:col-span-2 lg:col-span-2",
        link: "#analytics",
    },
    {
        title: "Team Collaboration",
        description: "Real-time multiplayer editing and comments built-in for seamless teamwork.",
        icon: Users,
        className: "sm:col-span-2 lg:col-span-3",
        link: "#collaboration",
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -10 },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

const FeatureSection = () => {
    return (
        <SectionWrapper id="features">
            <div className="text-center mb-16 md:mb-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="w-20 h-20 mx-auto bg-accent/10 rounded-full blur-2xl absolute inset-0 -z-10"
                />

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-fluid-3xl md:text-fluid-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/40"
                >
                    Everything you need to scale
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-secondary text-fluid-lg max-w-2xl mx-auto leading-relaxed"
                >
                    Powerful tools designed for the modern enterprise. Built for speed, security, and global scale.
                </motion.p>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 perspective-1000"
            >
                {features.map((feature, idx) => (
                    <motion.div key={idx} variants={itemVariants} className={`${feature.className} preserve-3d`}>
                        <TiltContainer className="h-full" perspective={1500}>
                            {/* Re-using BentoCard structure but ensuring it plays nice with TiltContainer */}
                            <div className="h-full group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 hover:bg-white/[0.05] transition-colors duration-500 shadow-2xl preserve-3d flex flex-col justify-between">

                                {/* Inner 3D Elements */}
                                <div className="absolute top-0 right-0 p-10 opacity-20 transform translate-x-10 -translate-y-10 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700 ease-out translate-z-10">
                                    <feature.icon className="w-32 h-32 text-accent" />
                                </div>

                                <div className="relative z-10 translate-z-20">
                                    <div className="mb-6 inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-white/5 border border-white/10 text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-lg">
                                        <feature.icon className="h-7 w-7" />
                                    </div>

                                    <h3 className="mb-3 text-2xl font-bold text-white group-hover:translate-x-1 transition-transform duration-300">{feature.title}</h3>
                                    <p className="text-secondary leading-relaxed group-hover:text-gray-300 transition-colors mb-6">{feature.description}</p>
                                </div>

                                {/* Link Button */}
                                {/* <div className="relative z-20 translate-z-30 pt-4 mt-auto">
                                    <a
                                        href={feature.link}
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-white transition-colors group/btn"
                                    >
                                        Learn more
                                        <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                    </a>
                                </div> */}

                                {/* Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            </div>
                        </TiltContainer>
                    </motion.div>
                ))}
            </motion.div>
        </SectionWrapper>
    );
};

export default FeatureSection;
