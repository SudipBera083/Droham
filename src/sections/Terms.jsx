import React from "react";
import { motion } from "framer-motion";
import { Scale } from "lucide-react";

const Terms = () => {
  return (
    <section className="relative min-h-screen bg-[#020617] text-white px-6 py-28 overflow-hidden">

      {/* 🔥 Animated Gradient Mesh */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute w-[600px] h-[600px] bg-indigo-500/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* 📜 Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] -z-10"></div>

      {/* 🔎 Scanning Line */}
      <motion.div
        className="absolute left-0 right-0 h-[2px] bg-indigo-400/40 -z-10"
        animate={{ y: ["0%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-5xl mx-auto relative">

        {/* ⚖ Animated Legal Header */}
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
            <div className="absolute inset-0 bg-indigo-500/30 blur-2xl rounded-full"></div>
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl">
              <Scale size={56} className="text-indigo-400" />
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold mt-8 bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">
            Terms of Service
          </h1>

          <p className="text-gray-400 mt-4 max-w-xl text-center">
            These Terms govern your access and use of Droham OS and its
            enterprise ERP solutions. By using our services, you agree
            to comply with these legally binding conditions.
          </p>
        </motion.div>

        {/* 💎 Glass Legal Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          whileHover={{ rotateX: 2, rotateY: -2 }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl space-y-8 text-gray-300 leading-relaxed"
        >
          <p>
            These Terms of Service ("Terms") govern your access to and use
            of services provided by <strong className="text-white">Droham Private Limited</strong>.
            By accessing or using Droham OS, you agree to be legally bound by these Terms.
          </p>

          <h2 className="text-white text-xl font-semibold">
            1. Eligibility & Account Registration
          </h2>
          <p>
            Users must be legally capable of entering into binding agreements.
            You are responsible for maintaining the confidentiality of your
            credentials and ensuring all account information remains accurate.
          </p>

          <h2 className="text-white text-xl font-semibold">
            2. Acceptable Use
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use the platform strictly for lawful enterprise purposes.</li>
            <li>Avoid unauthorized system access or data manipulation.</li>
            <li>Do not reverse engineer or exploit proprietary technology.</li>
            <li>Do not disrupt service integrity or infrastructure.</li>
          </ul>

          <h2 className="text-white text-xl font-semibold">
            3. Service Availability
          </h2>
          <p>
            While Droham strives for high availability and reliability,
            uninterrupted service is not guaranteed due to maintenance,
            third-party infrastructure dependencies, or unforeseen events.
          </p>

          <h2 className="text-white text-xl font-semibold">
            4. Intellectual Property
          </h2>
          <p>
            All platform software, trademarks, designs, and proprietary
            technologies remain the exclusive property of Droham Private Limited.
          </p>

          <h2 className="text-white text-xl font-semibold">
            5. Limitation of Liability
          </h2>
          <p>
            To the fullest extent permitted by law, Droham shall not be
            liable for indirect or consequential damages, including data loss,
            service interruption, or third-party infrastructure failures.
          </p>

          <h2 className="text-white text-xl font-semibold">
            6. Termination
          </h2>
          <p>
            Droham reserves the right to suspend or terminate user access
            in cases of policy violations, misuse, or actions that compromise
            platform security.
          </p>

          <h2 className="text-white text-xl font-semibold">
            7. Governing Law
          </h2>
          <p>
            These Terms are governed by applicable laws of the jurisdiction
            in which Droham Private Limited operates.
          </p>

          <h2 className="text-white text-xl font-semibold">
            8. Contact Information
          </h2>
          <p>
            Email: <span className="text-indigo-400">support@droham.com</span>
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

export default Terms;