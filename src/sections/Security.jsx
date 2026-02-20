import React from "react";
import { motion } from "framer-motion";

const Security = () => {
  return (
    <section className="min-h-screen bg-background text-white px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8">Security</h1>

        <div className="space-y-6 text-secondary leading-relaxed">
          <p>
            Droham implements enterprise-grade security measures to protect
            operational data.
          </p>

          <h2 className="text-white text-xl font-semibold mt-8">
            Infrastructure
          </h2>
          <p>
            Hosted on secure cloud infrastructure with role-based access control (RBAC).
          </p>

          <h2 className="text-white text-xl font-semibold mt-8">
            Encryption
          </h2>
          <p>
            All communications are encrypted via HTTPS and secure APIs.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Security;