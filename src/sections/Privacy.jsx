import React from "react";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";

const Privacy = () => {
  return (
    <section className="relative min-h-screen bg-[#020617] text-white px-6 py-28 overflow-hidden">

      {/* 🔥 Animated Gradient Mesh Background */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute w-[600px] h-[600px] bg-cyan-500/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* 🔐 Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] -z-10"></div>

      {/* 🔎 Scanning Line */}
      <motion.div
        className="absolute left-0 right-0 h-[2px] bg-cyan-400/40 -z-10"
        animate={{ y: ["0%", "100%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-5xl mx-auto relative">

        {/* 🔐 Animated Lock Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            whileHover={{ rotate: 8, scale: 1.1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-cyan-500/30 blur-2xl rounded-full"></div>
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl">
              <Lock size={52} className="text-cyan-400" />
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold mt-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Privacy & Data Protection
          </h1>

          <p className="text-gray-400 mt-4 max-w-xl text-center">
            Droham Private Limited ensures enterprise-grade data protection
            through advanced encryption, secure cloud infrastructure,
            and continuous monitoring.
          </p>
        </motion.div>

        {/* 💎 Glass Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          whileHover={{ rotateX: 2, rotateY: -2 }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl space-y-8 text-gray-300 leading-relaxed"
        >
          <h2 className="text-white text-xl font-semibold">
            1. Information We Collect
          </h2>
          <p>
            We collect account information, operational ERP data, usage
            analytics, and support communications necessary to deliver
            secure enterprise management solutions.
          </p>

          <h2 className="text-white text-xl font-semibold">
            2. Data Usage
          </h2>
          <p>
            Information is used to maintain platform performance,
            enhance security, process subscriptions, and comply with
            regulatory requirements.
          </p>

          <h2 className="text-white text-xl font-semibold">
            3. Security Measures
          </h2>
          <p>
            All data is encrypted in transit using TLS protocols and
            protected at rest with modern cryptographic standards.
            Role-based access control (RBAC) ensures restricted
            authorization levels.
          </p>

          <h2 className="text-white text-xl font-semibold">
            4. Data Sharing & Retention
          </h2>
          <p>
            Droham does not sell personal data. Information is shared
            only with authorized service providers or when legally required.
            Data is retained strictly according to contractual and compliance needs.
          </p>

          <h2 className="text-white text-xl font-semibold">
            5. Contact Information
          </h2>
          <p>
            Email:{" "}
            <span className="text-cyan-400">
              drohamprivatelmtd@gmail.com
            </span>
            <br />
            Company: Droham Private Limited
          </p>

          <p className="text-sm text-gray-500 pt-6 border-t border-white/10">
            Last Updated: {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Privacy;