import React from "react";
import { motion } from "framer-motion";

const Terms = () => {
  return (
    <section className="min-h-screen bg-background text-white px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

        <div className="space-y-6 text-secondary leading-relaxed">
          <p>
            By accessing Droham OS, you agree to comply with our operational
            and usage policies.
          </p>

          <h2 className="text-white text-xl font-semibold mt-8">
            Usage
          </h2>
          <p>
            Droham is intended for lawful enterprise usage only.
          </p>

          <h2 className="text-white text-xl font-semibold mt-8">
            Limitations
          </h2>
          <p>
            We are not liable for data loss resulting from misuse,
            unauthorized access, or external infrastructure failures.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Terms;