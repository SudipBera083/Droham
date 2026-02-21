import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Code, Rocket, Shield } from "lucide-react";

const sections = [
  {
    icon: <Rocket className="w-5 h-5 text-purple-400" />,
    title: "Getting Started",
    content:
      "Learn how to set up Droham OS, configure your ERP modules, and deploy your enterprise system efficiently.",
  },
  {
    icon: <Code className="w-5 h-5 text-cyan-400" />,
    title: "API & Integrations",
    content:
      "Integrate Droham with external services using secure REST APIs and enterprise-grade authentication mechanisms.",
  },
  {
    icon: <Shield className="w-5 h-5 text-indigo-400" />,
    title: "Security & Compliance",
    content:
      "Understand our encryption standards, access control policies, and compliance practices for secure deployments.",
  },
  {
    icon: <BookOpen className="w-5 h-5 text-green-400" />,
    title: "Deployment Guide",
    content:
      "Deploy Droham on cloud infrastructure with scalability and high availability best practices.",
  },
];

const Documentation = () => {
  return (
    <section className="relative min-h-screen bg-[#020617] text-white px-6 py-28 overflow-hidden">

      {/* 🔥 Animated Gradient Background */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute w-[600px] h-[600px] bg-cyan-500/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute w-[600px] h-[600px] bg-indigo-600/30 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative grid md:grid-cols-4 gap-10">

        {/* 📘 Sidebar */}
        <div className="md:col-span-1 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 h-fit">
          <h2 className="text-lg font-semibold mb-6 text-purple-400">
            Documentation
          </h2>
          <ul className="space-y-4 text-gray-400">
            {sections.map((sec, i) => (
              <li key={i} className="hover:text-white transition cursor-pointer">
                {sec.title}
              </li>
            ))}
          </ul>
        </div>

        {/* 📄 Content */}
        <div className="md:col-span-3 space-y-10">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Droham Documentation
            </h1>
            <p className="text-gray-400 mt-4 max-w-2xl">
              Everything you need to integrate, deploy, and scale Droham OS
              across enterprise systems.
            </p>
          </motion.div>

          {/* Sections */}
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition"
            >
              <div className="flex items-center gap-3 mb-4">
                {section.icon}
                <h2 className="text-xl font-semibold text-white">
                  {section.title}
                </h2>
              </div>
              <p className="text-gray-400">{section.content}</p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Documentation;