import React from "react";
import { motion } from "framer-motion";

const Privacy = () => {
  return (
    <section className="min-h-screen bg-background text-white px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <div className="space-y-6 text-secondary leading-relaxed">
          <p>
            Droham Private Limited is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, and safeguard your data.
          </p>

          <h2 className="text-white text-xl font-semibold mt-8">
            Information We Collect
          </h2>
          <p>
            We collect operational data, usage analytics, and account information
            necessary to deliver our ERP cloud services securely and efficiently.
          </p>

          <h2 className="text-white text-xl font-semibold mt-8">
            Data Protection
          </h2>
          <p>
            All data is encrypted in transit and at rest using industry-standard
            security protocols.
          </p>

          <h2 className="text-white text-xl font-semibold mt-8">
            Contact
          </h2>
          <p>Email: support@droham.com</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Privacy;