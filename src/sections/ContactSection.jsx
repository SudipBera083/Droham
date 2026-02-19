import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="contact" className="bg-background px-6 py-16">
      <div className="max-w-3xl mx-auto">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Get in <span className="bg-gradient-to-r from-orange-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
        </motion.div>

        {/* Form Card */}
        <div className="relative rounded-2xl p-8 
                        bg-gradient-to-br from-white/5 to-white/2 
                        backdrop-blur-xl border border-white/10 
                        shadow-[0_15px_40px_rgba(0,0,0,0.6)]">

          {/* Soft Glow */}
          <div className="absolute inset-0 rounded-2xl 
                          bg-gradient-to-r from-orange-500/10 via-blue-500/10 to-purple-500/10 
                          blur-2xl opacity-20 -z-10" />

          <form onSubmit={handleSubmit} className="space-y-6">

            <InputField
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

            <InputField
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />

            <InputField
              label="Company"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full rounded-xl bg-white/5 border border-white/15
                           px-6 py-4 text-white text-base font-medium
                           focus:outline-none focus:border-accent 
                           focus:ring-2 focus:ring-accent/40
                           transition-all duration-300 resize-none"
                placeholder="Describe your requirements..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl
                         bg-accent hover:bg-accent-glow
                         text-white font-semibold text-lg
                         transition-all duration-300
                         active:scale-[0.98]"
            >
              Send Message
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

const InputField = ({ label, name, type = "text", value, onChange }) => (
  <div>
    <label className="block text-sm text-gray-400 mb-2">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required
      className="w-full rounded-xl bg-white/5 border border-white/15
                 px-6 py-4 text-white text-base font-medium
                 focus:outline-none focus:border-accent 
                 focus:ring-2 focus:ring-accent/40
                 transition-all duration-300"
      placeholder={`Enter your ${label.toLowerCase()}`}
    />
  </div>
);

export default ContactSection;
