import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative bg-background text-white py-32 overflow-hidden">

      {/* Floating Gradient Blobs (3D depth illusion) */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500/20 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Hero Block */}
        <motion.div
          initial={{ opacity: 0, rotateX: 15, y: 50 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-28 perspective-1000"
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">
            About{" "}
            <span className="bg-gradient-to-r from-orange-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Droham
            </span>
          </h1>

          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Transforming fragmented enterprise operations into intelligent,
            cloud-driven ERP ecosystems.
          </p>
        </motion.div>

        {/* Main 3D Glass Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 60 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          whileHover={{ rotateX: 3, rotateY: -3 }}
          className="relative rounded-3xl p-12 md:p-16 
                     bg-white/[0.05] backdrop-blur-2xl 
                     border border-white/10 
                     shadow-[0_40px_100px_rgba(0,0,0,0.6)] 
                     transition-all duration-500"
        >

          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r 
                          from-orange-500/10 via-blue-500/10 to-purple-500/10 
                          blur-3xl opacity-40 -z-10" />

          <div className="space-y-10 text-lg text-secondary leading-relaxed">

            <p>
              Droham, inspired by ancient Sanskrit interpretations symbolizing
              something <span className="text-white font-medium">revolutionary</span>,
              embodies transformation at its core. It is engineered to eliminate
              operational inefficiencies and disconnected systems that restrict
              enterprise growth.
            </p>

            <p>
              In a data-driven economy where siloed information and fragmented
              workflows dominate, Droham introduces a unified ERP cloud platform
              that centralizes operations into a secure, scalable environment.
            </p>

            <p>
              Through real-time analytics, workflow automation, role-based access
              control (RBAC), API-driven integrations, and scalable cloud
              architecture, Droham empowers enterprises to optimize operations,
              enhance strategic decisions, and improve long-term resource planning.
            </p>

          </div>
        </motion.div>

        {/* 3D Capability Cards */}
        <div className="grid md:grid-cols-3 gap-10 mt-28">

          {[
            {
              title: "Operational Intelligence",
              desc: "KPI-driven dashboards providing real-time visibility across business functions.",
            },
            {
              title: "Automation Engine",
              desc: "End-to-end process automation reducing manual redundancy and improving throughput.",
            },
            {
              title: "Scalable Cloud Core",
              desc: "Secure infrastructure designed for adaptability across industries and enterprise growth.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.05 }}
              className="relative rounded-2xl p-10 
                         bg-white/[0.04] 
                         border border-white/10 
                         backdrop-blur-xl 
                         shadow-[0_25px_60px_rgba(0,0,0,0.6)] 
                         transition-all duration-500"
            >

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br 
                              from-blue-500/10 to-purple-600/10 
                              opacity-0 hover:opacity-100 
                              blur-xl transition-opacity duration-500 -z-10" />

              <h3 className="text-xl font-semibold mb-4 text-white">
                {card.title}
              </h3>
              <p className="text-secondary">{card.desc}</p>

            </motion.div>
          ))}

        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Built for healthcare institutions, educational organizations, sports
            management bodies, media houses, and enterprise groups, Droham adapts
            through customizable modules and scalable infrastructure.
          </p>

          <p className="mt-10 text-2xl font-medium text-white">
            Droham is not just ERP —  
            it is an intelligent operational framework for enterprises ready to
            scale with clarity and confidence.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
