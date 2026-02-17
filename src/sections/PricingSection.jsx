import React from "react";
import SectionWrapper from "@/layouts/SectionWrapper";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import clsx from "clsx";

const PricingCard = ({ title, price, features, recommended = false }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className={clsx(
                "relative p-8 rounded-2xl border backdrop-blur-xl flex flex-col",
                recommended
                    ? "bg-white/10 border-accent/50 shadow-2xl shadow-accent/20 z-10 scale-105"
                    : "bg-white/5 border-white/10 hover:border-white/20"
            )}
        >
            {recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-white text-xs font-bold rounded-full uppercase tracking-wider">
                    Most Popular
                </div>
            )}

            <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">{price}</span>
                    <span className="text-secondary">/month</span>
                </div>
            </div>

            <ul className="flex-1 space-y-4 mb-8">
                {features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-secondary">
                        <Check className="w-5 h-5 text-accent" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <button
                className={clsx(
                    "w-full py-3 rounded-lg font-bold transition-all",
                    recommended
                        ? "bg-accent hover:bg-accent-glow text-white shadow-lg shadow-accent/25"
                        : "bg-white/10 hover:bg-white/20 text-white"
                )}
            >
                Get Started
            </button>
        </motion.div>
    );
};

const PricingSection = () => {
    const plans = [
        {
            title: "Starter",
            price: "$0",
            features: ["Up to 3 users", "Basic analytics", "Community support", "1GB storage"],
        },
        {
            title: "Pro",
            price: "$49",
            recommended: true,
            features: ["Unlimited users", "Advanced AI features", "Priority support", "100GB storage", "API access"],
        },
        {
            title: "Enterprise",
            price: "Custom",
            features: ["Dedicated infrastructure", "SLA guarantee", "24/7 Phone support", "Unlimited storage", "Custom integrations"],
        },
    ];

    return (
        <SectionWrapper id="pricing" className="bg-gradient-to-b from-transparent to-background/50">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                    Simple, transparent pricing
                </h2>
                <p className="text-secondary text-lg max-w-2xl mx-auto">
                    Choose the plan that fits your needs. No hidden fees.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
                {plans.map((plan, idx) => (
                    <PricingCard key={idx} {...plan} />
                ))}
            </div>
        </SectionWrapper>
    );
};

export default PricingSection;
