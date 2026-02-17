import React from "react";
import BentoCard from "@/components/ui/BentoCard";
import SectionWrapper from "@/layouts/SectionWrapper";
import { Zap, Shield, Globe, Cpu, BarChart3, Users } from "lucide-react";

const features = [
    {
        title: "Global Scale",
        description: "Deploy instantly to 35+ regions worldwide with edge networking.",
        icon: Globe,
        className: "md:col-span-2",
    },
    {
        title: "Real-time AI",
        description: "Built-in intelligence for predictive analytics and automation.",
        icon: Cpu,
        className: "md:col-span-1",
    },
    {
        title: "Enterprise Security",
        description: "SOC2 Type II certified with automated compliance reporting.",
        icon: Shield,
        className: "md:col-span-1",
    },
    {
        title: "Instant Analytics",
        description: "Visualize data trends with zero latency dashboards.",
        icon: BarChart3,
        className: "md:col-span-2",
    },
    {
        title: "Team Collaboration",
        description: "Real-time multiplayer editing and comments built-in.",
        icon: Users,
        className: "md:col-span-3",
    },
];

const FeatureSection = () => {
    return (
        <SectionWrapper id="features">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    Everything you need to scale
                </h2>
                <p className="text-secondary text-lg max-w-2xl mx-auto">
                    Powerful tools designed for the modern enterprise. Built for speed, security, and global scale.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((feature, idx) => (
                    <BentoCard
                        key={idx}
                        title={feature.title}
                        description={feature.description}
                        icon={feature.icon}
                        className={feature.className}
                    />
                ))}
            </div>
        </SectionWrapper>
    );
};

export default FeatureSection;
