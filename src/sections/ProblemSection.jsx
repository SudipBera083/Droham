import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Database, Clock } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ProblemSection = () => {
  const problems = [
    {
      icon: <Database size={26} />,
      title: "Disconnected Systems",
      desc: "Manual entries, spreadsheets, and reporting tools operating separately.",
    },
    {
      icon: <Clock size={26} />,
      title: "Delayed Reports",
      desc: "Inefficient workflows slow down reporting and impact patient trust.",
    },
    {
      icon: <AlertTriangle size={26} />,
      title: "Revenue Leakages",
      desc: "Billing errors and operational blind spots reduce profitability.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16"
        >
          Modern Labs Need{" "}
          <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">
            Intelligent ERP
          </span>
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10"
        >
          {problems.map((itemData, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -8, scale: 1.03 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-300"
            >
              <div className="text-accent mb-4">{itemData.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {itemData.title}
              </h3>
              <p className="text-secondary">{itemData.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
