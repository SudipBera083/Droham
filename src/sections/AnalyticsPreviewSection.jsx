import React from "react";
import { motion } from "framer-motion";

const AnalyticsPreviewSection = () => {
  return (
    <section className="py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16"
        >
          Real-Time Lab Intelligence Dashboard
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileHover={{ rotateX: 3, rotateY: -3 }}
          className="rounded-3xl bg-white/5 border border-white/10 p-12 shadow-2xl perspective-1000"
        >
          <div className="grid md:grid-cols-3 gap-10 text-left">
            {[
              { label: "Daily Revenue", value: "₹1,45,320", color: "text-green-400" },
              { label: "Pending Reports", value: "18", color: "text-orange-400" },
              { label: "Abnormal Alerts", value: "3", color: "text-red-400" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {stat.label}
                </h3>
                <p className={`text-4xl font-bold ${stat.color}`}>
                  {stat.value}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnalyticsPreviewSection;
