import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const WhyDrohamSection = () => {
  return (
    <section className="relative py-36 bg-background overflow-hidden">

      {/* Animated Background Orbs */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -top-32 left-1/4 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[140px]"
      />

      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-blue-500/20 rounded-full blur-[150px]"
      />

      <div className="relative max-w-6xl mx-auto px-6 text-center perspective-1000">

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 60, rotateX: 15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold mb-10 tracking-tight"
        >
          More Than ERP.
          <br />
          <span className="bg-gradient-to-r from-orange-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            The Foundation of Intelligent SaaS
          </span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          viewport={{ once: true }}
          className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed"
        >
          Today, Droham empowers pathology labs with powerful ERP cloud
          infrastructure. Tomorrow, it evolves into an intelligent SaaS layer
          that transforms operational data into strategic clarity.
        </motion.p>

        {/* 3D Vision Cards */}
        <div className="grid md:grid-cols-3 gap-12 mt-24">

          {[
            {
              title: "Operational Core",
              desc: "Centralized ERP architecture that eliminates fragmentation.",
            },
            {
              title: "Intelligence Layer",
              desc: "Real-time analytics transforming operational data into insights.",
            },
            {
              title: "Scalable Future",
              desc: "Designed to expand into predictive and AI-driven automation.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.9 }}
              viewport={{ once: true }}
              whileHover={{
                y: -20,
                rotateX: 6,
                rotateY: -6,
                scale: 1.06,
              }}
              className="relative group"
            >

              <div className="relative p-10 rounded-3xl 
                              bg-white/[0.05] 
                              backdrop-blur-2xl 
                              border border-white/10 
                              shadow-[0_40px_100px_rgba(0,0,0,0.7)]
                              transition-all duration-500">

                {/* Glow Layer */}
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

                {/* Accent underline animation */}
                <div className="mt-8 h-1 w-16 bg-gradient-to-r from-accent to-purple-500 rounded-full transition-all duration-500 group-hover:w-32" />
              </div>

            </motion.div>
          ))}

        </div>

        {/* Strategic Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="mt-28"
        >
          <p className="text-2xl font-medium text-white max-w-4xl mx-auto">
            Droham is not just ERP.
            It is the operational intelligence backbone for enterprises
            preparing to scale with confidence.
          </p>
          <br /><br />

          <Link
            to="/products"
          >
            <button className="px-10 py-4 rounded-full bg-accent text-white font-semibold text-lg hover:bg-accent-glow transition-all">
              Book a Demo
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyDrohamSection;
