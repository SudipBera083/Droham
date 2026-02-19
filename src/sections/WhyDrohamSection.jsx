import React from "react";
import { motion } from "framer-motion";

const WhyDrohamSection = () => {
  return (
    <section className="py-28 bg-white/5 border-y border-white/10 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-8"
        >
          More Than ERP. A Future SaaS Platform.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
          className="text-secondary text-lg leading-relaxed"
        >
          Today, Droham empowers pathology labs with powerful ERP cloud solutions.
          Tomorrow, we evolve into an intelligent SaaS layer that transforms
          business data into strategic decision-making insights.
        </motion.p>
      </div>
    </section>
  );
};

export default WhyDrohamSection;
