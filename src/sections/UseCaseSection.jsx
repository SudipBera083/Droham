import React from "react";
import { motion } from "framer-motion";

const UseCaseSection = () => {
  const useCases = [
    "Single Diagnostic Labs",
    "Multi-Branch Pathology Chains",
    "Hospital-Based Labs",
    "Reference Laboratories",
  ];

  return (
    <section className="py-24 bg-white/5 border-y border-white/10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold mb-14"
        >
          Built For Every Diagnostic Setup
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.04 }}
              className="p-8 rounded-xl bg-background border border-white/10 backdrop-blur-lg transition-all"
            >
              <p className="text-lg font-medium text-white">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCaseSection;
