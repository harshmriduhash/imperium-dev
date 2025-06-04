'use client';

import { motion } from "framer-motion";
import { FaCode, FaMobile, FaRobot, FaChartLine } from "react-icons/fa";
import Footer from "@/components/Footer";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function Work() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20"></div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="max-w-7xl mx-auto relative"
        >
          <div className="text-center">
            <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Our Work
            </h1>
            <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
              Discover how we've helped startups and businesses transform their ideas into successful digital products.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
          >
            Featured Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "AI-Powered Analytics Platform",
                description: "Built a comprehensive analytics platform with AI-driven insights for a Fortune 500 company.",
                category: "Web Development",
                icon: <FaChartLine className="text-4xl text-blue-500" />
              },
              {
                title: "Mobile Banking App",
                description: "Developed a secure and user-friendly mobile banking application for a leading financial institution.",
                category: "Mobile Development",
                icon: <FaMobile className="text-4xl text-purple-500" />
              },
              {
                title: "E-commerce Platform",
                description: "Created a scalable e-commerce platform with advanced features and seamless user experience.",
                category: "Web Development",
                icon: <FaCode className="text-4xl text-pink-500" />
              },
              {
                title: "AI Chatbot Solution",
                description: "Implemented an intelligent chatbot system for customer service automation.",
                category: "AI Development",
                icon: <FaRobot className="text-4xl text-blue-500" />
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                whileHover={{ scale: 1.02 }}
                className="p-8 rounded-2xl bg-black/50 border border-gray-800"
              >
                <div className="flex items-center mb-6">
                  {project.icon}
                  <span className="ml-4 text-blue-400">{project.category}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-6">{project.description}</p>
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                  View Case Study →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                metric: "98%",
                label: "Client Satisfaction",
                description: "Based on post-project surveys"
              },
              {
                metric: "200+",
                label: "Projects Completed",
                description: "Across various industries"
              },
              {
                metric: "50+",
                label: "Enterprise Clients",
                description: "Including Fortune 500 companies"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-8 rounded-2xl bg-black/50 border border-gray-800 text-center"
              >
                <h3 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                  {stat.metric}
                </h3>
                <p className="text-xl font-semibold mb-2 text-white">{stat.label}</p>
                <p className="text-gray-400">{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's create something amazing together. Get in touch to discuss your project.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/contact"
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-all"
            >
              Get Started
            </motion.a>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
} 