import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-white">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Building the <span className="bg-gradient-to-r from-orange-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Operational Brain
            </span>{" "}
            for Modern Enterprises
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Droham Private Limited is redefining how organizations operate by
            connecting intelligence, automation, and integration into one unified platform.
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="bg-white/5 backdrop-blur-xl border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">
              Our Mission
            </h2>
            <p className="mt-6 text-gray-400 leading-relaxed">
              To build intelligent SaaS infrastructure that empowers businesses 
              to operate faster, smarter, and more efficiently.
              We are creating an AI-powered operational layer that integrates seamlessly 
              with ERP systems and transforms data into decision-making power.
            </p>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-white/5 to-white/2 
                          border border-white/10 p-8 shadow-2xl">
            <h3 className="text-xl font-semibold mb-4">What We Believe</h3>
            <ul className="space-y-3 text-gray-400">
              <li>• Intelligence should sit above every system</li>
              <li>• Data should drive real-time decisions</li>
              <li>• Automation reduces operational friction</li>
              <li>• AI should assist, not replace, humans</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Our Vision
        </h2>

        <p className="mt-8 text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
          We envision a future where mid-sized enterprises operate with the 
          same intelligence and automation power as global corporations. 
          Droham OS is the foundation for autonomous, data-driven business ecosystems.
        </p>
      </section>

      {/* Stats Section */}
      <section className="bg-white/5 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-orange-400">
              AI
            </h3>
            <p className="text-gray-400 mt-2">Driven Insights</p>
          </div>

          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-blue-400">
              SaaS
            </h3>
            <p className="text-gray-400 mt-2">Infrastructure</p>
          </div>
            <div>   
            <h3 className="text-3xl md:text-4xl font-bold text-purple-400">
              ERP       


            </h3>            <p className="text-gray-400 mt-2">Integration</p>
          </div>    
            <div>
            <h3 className="text-3xl md:text-4xl font-bold text-green-400">

                Automation
            </h3>
            <p className="text-gray-400 mt-2">Operational Efficiency</p>
          </div>            
        </div>
        </section>
    </div>
  );
}
export default About;
