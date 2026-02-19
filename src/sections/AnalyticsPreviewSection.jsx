import React from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Daily Revenue", value: "₹1,45,320" },
  { label: "Pending Reports", value: "18" },
  { label: "Abnormal Alerts", value: "3" },
];

const bars = [40, 75, 55, 90, 65, 85];

const AnalyticsPreviewSection = () => {
  return (
    <section className="relative py-24 md:py-36 bg-background overflow-hidden">

      {/* Soft Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      <div className="hidden md:block absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-500/20 blur-[150px] rounded-full opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Operational{" "}
            <span className="bg-gradient-to-r from-orange-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Intelligence
            </span>
          </h2>
        </motion.div>

        {/* Dashboard Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          whileHover={{ rotateX: 4, rotateY: -4 }}
          className="relative mx-auto max-w-5xl perspective-1000"
        >
          <div className="relative p-6 sm:p-10 md:p-14 rounded-3xl 
                          bg-white/[0.05] 
                          backdrop-blur-2xl 
                          border border-white/10 
                          shadow-[0_40px_120px_rgba(0,0,0,0.7)]">

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 md:mb-16">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="p-6 rounded-2xl bg-white/[0.06] border border-white/10 backdrop-blur-xl text-center sm:text-left"
                >
                  <p className="text-secondary text-sm mb-2">
                    {stat.label}
                  </p>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                    {stat.value}
                  </h3>
                </motion.div>
              ))}
            </div>

            {/* Animated Bar Chart */}
            <div className="flex items-end justify-between h-48 sm:h-60 gap-2 sm:gap-4">
              {bars.map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${height}%` }}
                  transition={{ duration: 1.2, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex-1 rounded-xl bg-gradient-to-t from-accent via-purple-500 to-blue-500 shadow-lg"
                >
                  {/* Glow */}
                  <div className="absolute inset-0 rounded-xl bg-purple-500 blur-xl opacity-30" />
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AnalyticsPreviewSection;
