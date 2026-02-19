import React from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Daily Revenue", value: "₹1,45,320", color: "from-green-400 to-emerald-500" },
  { label: "Pending Reports", value: "18", color: "from-orange-400 to-yellow-500" },
  { label: "Abnormal Alerts", value: "3", color: "from-red-400 to-pink-500" },
];

const bars = [40, 75, 55, 90, 65, 85];

const AnalyticsPreviewSection = () => {
  return (
    <section className="relative py-36 bg-background overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-500/20 blur-[150px] rounded-full opacity-40" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-purple-600/20 blur-[140px] rounded-full opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold mb-20"
        >
           Operational{" "}
          <span className="bg-gradient-to-r from-orange-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Intelligence
          </span>
        </motion.h2>

        {/* 3D Dashboard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 60 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          whileHover={{ rotateX: 4, rotateY: -4 }}
          className="relative mx-auto max-w-5xl perspective-1000"
        >

          <div className="relative p-14 rounded-3xl 
                          bg-white/[0.06] 
                          backdrop-blur-3xl 
                          border border-white/10 
                          shadow-[0_50px_120px_rgba(0,0,0,0.7)]">

            {/* Animated Bar Chart */}
            <div className="flex items-end justify-between h-60 mb-16">

              {bars.map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${height}%` }}
                  transition={{ duration: 1.2, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="w-10 rounded-xl bg-gradient-to-t from-accent to-purple-500 shadow-lg"
                />
              ))}

            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-12 text-left">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="relative p-6 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl"
                >

                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 hover:opacity-20 blur-2xl transition-opacity duration-500 -z-10`} />

                  <h3 className="text-lg font-semibold mb-3 text-white">
                    {stat.label}
                  </h3>

                  <p className="text-4xl font-bold text-white">
                    {stat.value}
                  </p>

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
