import React from "react";
import { motion } from "framer-motion";

const useCases = [
  {
    title: "Single Diagnostic Labs",
    desc: "Simplified operations, centralized reports, and real-time revenue visibility.",
  },
  {
    title: "Multi-Branch Pathology Chains",
    desc: "Unified control across locations with intelligent cross-branch analytics.",
  },
  {
    title: "Hospital-Based Labs",
    desc: "Integrated operational workflows with enhanced process automation.",
  },
  {
    title: "Reference Laboratories",
    desc: "High-volume reporting precision with scalable cloud infrastructure.",
  },
];

const UseCaseSection = () => {
  return (
    <section className="relative py-32 bg-background overflow-hidden">

      {/* Background Glow Layers */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-purple-600/20 blur-[150px] rounded-full opacity-40" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Built for{" "}
            <span className="bg-gradient-to-r from-orange-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Modern Diagnostic Excellence
            </span>
          </h2>

          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Droham adapts to every pathology ecosystem — from single labs to
            large diagnostic networks — delivering operational intelligence at scale.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-12">

          {useCases.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{
                y: -15,
                rotateX: 4,
                rotateY: -4,
                scale: 1.04,
              }}
              className="relative group perspective-1000"
            >
              <div className="relative p-10 rounded-3xl 
                              bg-white/[0.05] 
                              border border-white/10 
                              backdrop-blur-2xl 
                              shadow-[0_40px_80px_rgba(0,0,0,0.6)]
                              transition-all duration-500">

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-3xl 
                                bg-gradient-to-br 
                                from-orange-500/10 via-blue-500/10 to-purple-500/10 
                                opacity-0 group-hover:opacity-100 
                                blur-2xl transition-opacity duration-500 -z-10" />

                <h3 className="text-2xl font-semibold mb-6 text-white">
                  {item.title}
                </h3>

                <p className="text-secondary text-lg leading-relaxed">
                  {item.desc}
                </p>

                {/* Accent Line */}
                <div className="mt-8 h-1 w-16 bg-gradient-to-r from-accent to-purple-500 rounded-full transition-all duration-500 group-hover:w-28" />
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default UseCaseSection;
