import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Lock } from "lucide-react";

const products = [
  {
    name: "Lab Management",
    description:
      "AI-powered pathology ERP for operational automation, analytics, smart reporting, and real-time operational intelligence.",
    active: true,
  },
  {
    name: "Hospital Management",
    description:
      "Unified clinical workflow, billing, and patient lifecycle management platform.",
    active: false,
  },
  {
    name: "College Management",
    description:
      "Integrated academic administration and institutional performance management system.",
    active: false,
  },
];

const Product = () => {
  return (
    <section className="relative py-36 bg-background overflow-hidden">

      {/* Background Energy Fields */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-blue-500/20 blur-[200px] rounded-full opacity-30" />
      <div className="absolute bottom-0 right-0 w-[700px] h-[500px] bg-purple-600/20 blur-[180px] rounded-full opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Droham{" "}
            <span className="bg-gradient-to-r from-orange-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Product Suite
            </span>
          </h2>
          <p className="mt-6 text-white/60 max-w-2xl mx-auto text-lg">
            Modular AI-powered enterprise systems designed for operational transformation.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-3 gap-10">

          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={
                product.active
                  ? { rotateX: 6, rotateY: -6, scale: 1.05 }
                  : {}
              }
              className="relative perspective-1000"
            >
              <div
                className={`relative p-10 rounded-3xl border backdrop-blur-2xl transition-all duration-500 
                ${
                  product.active
                    ? "bg-white/[0.07] border-white/20 shadow-[0_40px_120px_rgba(0,0,0,0.7)]"
                    : "bg-white/[0.03] border-white/10"
                }`}
              >
                {/* Active Glow */}
                {product.active && (
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/10 via-blue-500/10 to-purple-500/10 blur-3xl opacity-60 -z-10" />
                )}

                {/* Disabled Overlay */}
                {!product.active && (
                  <div className="absolute inset-0 rounded-3xl bg-black/50 backdrop-blur-md flex items-center justify-center">
                    <div className="px-6 py-3 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-sm font-semibold uppercase tracking-widest shadow-lg">
                      Coming Soon
                    </div>
                  </div>
                )}

                {/* Title */}
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-white/60 mb-8 leading-relaxed">
                  {product.description}
                </p>

                {/* Footer Section */}
                {product.active ? (
                  <div className="space-y-5">

                    {/* Status */}
                    <div className="flex items-center gap-2 text-green-400 font-medium">
                      <CheckCircle2 className="w-5 h-5" />
                      Live & Available
                    </div>

                    {/* Try Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative w-full py-3 rounded-xl font-semibold text-white 
                      bg-gradient-to-r from-orange-500 to-purple-600 
                      shadow-lg shadow-purple-600/30 
                      transition-all duration-300"
                    >
                      Try Lab Management
                    </motion.button>

                  </div>
                ) : (
                  <div className="text-white/40 text-sm">
                    Scheduled Release Phase
                  </div>
                )}

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Product;