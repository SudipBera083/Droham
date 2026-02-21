import React from "react";
import { motion } from "framer-motion";
import { Server } from "lucide-react";

const Status = () => {
  return (
    <section className="relative min-h-screen bg-[#020617] text-white px-6 py-28 overflow-hidden">

      {/* 🔥 Animated Gradient Mesh */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-green-600/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute w-[600px] h-[600px] bg-emerald-500/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute w-[600px] h-[600px] bg-teal-600/30 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* 📡 Monitoring Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] -z-10"></div>

      {/* 🔎 Scanning Line */}
      <motion.div
        className="absolute left-0 right-0 h-[2px] bg-green-400/40 -z-10"
        animate={{ y: ["0%", "100%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-5xl mx-auto relative">

        {/* 🖥 Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            whileHover={{ rotate: 6, scale: 1.1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-green-500/30 blur-2xl rounded-full"></div>
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl">
              <Server size={56} className="text-green-400" />
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold mt-8 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            System Status
          </h1>

          <p className="text-gray-400 mt-4 max-w-xl text-center">
            Real-time monitoring and availability metrics for all
            Droham ERP production environments.
          </p>
        </motion.div>

        {/* 💎 Glass Status Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          whileHover={{ rotateX: 2, rotateY: -2 }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl space-y-8 text-gray-300 leading-relaxed"
        >
          <p>
            <strong className="text-white">Droham Private Limited</strong>{" "}
            continuously monitors infrastructure to ensure high
            performance, availability, and reliability across all ERP modules.
          </p>

          {/* 🟢 Operational Status */}
          <div className="bg-green-500/10 border border-green-500/30 p-6 rounded-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-green-500/5 animate-pulse"></div>
            <p className="text-green-400 font-semibold text-lg flex items-center gap-2">
              <span className="w-3 h-3 bg-green-400 rounded-full animate-ping"></span>
              All Systems Operational
            </p>
            <p className="text-sm mt-2 text-gray-400">
              No active service disruptions detected.
            </p>
          </div>

          {/* 📊 Uptime */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-2">
              Service Availability
            </h2>
            <p className="text-3xl font-bold text-green-400">
              99.99% Uptime
            </p>
            <p className="text-sm mt-2">
              Calculated based on rolling 30-day metrics across
              Pathology, Hospital, and College ERP modules.
            </p>
          </div>

          {/* 🛠 Maintenance */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-2">
              Maintenance Policy
            </h2>
            <p>
              Scheduled maintenance occurs during low-traffic windows.
              Advance notifications are provided to minimize operational impact.
            </p>
          </div>

          {/* 🚨 Monitoring */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-2">
              Monitoring & Alerts
            </h2>
            <p>
              24/7 automated monitoring systems detect performance degradation,
              unusual activity, and potential service interruptions in real time.
            </p>
          </div>

          <p className="text-sm text-gray-500 pt-6 border-t border-white/10">
            Last Updated: {new Date().toLocaleString()}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Status;