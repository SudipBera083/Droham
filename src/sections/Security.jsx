import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const Security = () => {
  return (
    <section className="relative min-h-screen bg-[#020617] text-white px-6 py-28 overflow-hidden">

      {/* 🔥 Animated Gradient Mesh */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute w-[600px] h-[600px] bg-cyan-500/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute w-[600px] h-[600px] bg-indigo-600/30 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* 🔐 Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] -z-10"></div>

      {/* 🔎 Scanning Line */}
      <motion.div
        className="absolute left-0 right-0 h-[2px] bg-cyan-400/40 -z-10"
        animate={{ y: ["0%", "100%"] }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-5xl mx-auto relative">

        {/* 🛡 Animated Shield Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            whileHover={{ rotate: 6, scale: 1.1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-cyan-500/30 blur-2xl rounded-full"></div>
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl">
              <ShieldCheck size={56} className="text-cyan-400" />
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold mt-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Enterprise Security
          </h1>

          <p className="text-gray-400 mt-4 max-w-xl text-center">
            Droham Private Limited delivers enterprise-grade protection
            through advanced encryption, secure cloud infrastructure,
            and continuous monitoring systems.
          </p>
        </motion.div>

        {/* 💎 Glass Security Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          whileHover={{ rotateX: 2, rotateY: -2 }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl space-y-8 text-gray-300 leading-relaxed"
        >
          <h2 className="text-white text-xl font-semibold">
            1. Secure Infrastructure
          </h2>
          <p>
            Our ERP platform operates on enterprise-grade cloud infrastructure
            with network isolation, continuous monitoring, and hardened
            production environments. Role-based access control (RBAC)
            ensures restricted user authorization.
          </p>

          <h2 className="text-white text-xl font-semibold">
            2. Data Encryption
          </h2>
          <p>
            All communications are encrypted using HTTPS with TLS protocols.
            Sensitive data is encrypted at rest using modern cryptographic
            standards to prevent unauthorized access.
          </p>

          <h2 className="text-white text-xl font-semibold">
            3. Access Control & Authentication
          </h2>
          <p>
            We enforce strong password policies, secure session management,
            and administrative monitoring to prevent misuse or unauthorized
            privilege escalation.
          </p>

          <h2 className="text-white text-xl font-semibold">
            4. Backup & Disaster Recovery
          </h2>
          <p>
            Automated backups and structured disaster recovery mechanisms
            ensure minimal downtime and maintain business continuity
            across all ERP modules.
          </p>

          <h2 className="text-white text-xl font-semibold">
            5. Monitoring & Incident Response
          </h2>
          <p>
            Our systems are monitored 24/7 with automated threat detection.
            In case of an incident, structured response protocols are
            executed immediately to mitigate risks.
          </p>

          <h2 className="text-white text-xl font-semibold">
            6. Compliance & Best Practices
          </h2>
          <p>
            Droham aligns with recognized global security best practices
            and continuously improves compliance standards applicable to
            enterprise data protection.
          </p>

          <p className="text-sm text-gray-500 pt-6 border-t border-white/10">
            Last Updated: {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Security;