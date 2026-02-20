import React from "react";
import { motion } from "framer-motion";

const Status = () => {
  return (
    <section className="min-h-screen bg-background text-white px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8">System Status</h1>

        <div className="space-y-6 text-secondary leading-relaxed">
          <p>
            Droham services are operating normally.
          </p>

          <h2 className="text-white text-xl font-semibold mt-8">
            Uptime
          </h2>
          <p>
            Current system uptime: 99.99%
          </p>

          <h2 className="text-white text-xl font-semibold mt-8">
            Incidents
          </h2>
          <p>
            No active incidents reported.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Status;