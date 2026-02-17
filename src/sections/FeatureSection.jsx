import React from "react";
import BentoCard from "@/components/ui/BentoCard";
import SectionWrapper from "@/layouts/SectionWrapper";
import { motion } from "framer-motion";
import { Zap, Shield, Globe, Cpu, BarChart3, Users } from "lucide-react";

const features = [
    {
        title: "Global Scale",
        description: "Deploy instantly to 35+ regions worldwide with edge networking and automatic failover.",
        icon: Globe,
        className: "sm:col-span-2 lg:col-span-2",
    },
    {
        title: "Real-time AI",
        description: "Built-in intelligence for predictive analytics and automation.",
        icon: Cpu,
        className: "sm:col-span-1 lg:col-span-1",
    },
    {
        title: "Enterprise Security",
        description: "SOC2 Type II certified with automated compliance reporting.",
        icon: Shield,
        className: "sm:col-span-1 lg:col-span-1",
    },
    {
        title: "Instant Analytics",
        description: "Visualize data trends with zero-latency dashboards and real-time insights.",
        icon: BarChart3,
        className: "sm:col-span-2 lg:col-span-2",
    },
    {
        title: "Team Collaboration",
        description: "Real-time multiplayer editing and comments built-in for seamless teamwork.",
        icon: Users,
        className: "sm:col-span-2 lg:col-span-3",
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

const FeatureSection = () => {
    return (
        <SectionWrapper id="features">
            <div className="text-center mb-12 md:mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-fluid-3xl md:text-fluid-4xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
                >
                    Everything you need to scale
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-secondary text-fluid-lg max-w-2xl mx-auto"
                >
                    Powerful tools designed for the modern enterprise. Built for speed, security, and global scale.
                </motion.p>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
            >
                {features.map((feature, idx) => (
                    <motion.div key={idx} variants={itemVariants} className={feature.className}>
                        <BentoCard
                            title={feature.title}
                            description={feature.description}
                            icon={feature.icon}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </SectionWrapper>
    );
};

export default FeatureSection;
