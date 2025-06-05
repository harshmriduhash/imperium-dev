'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { FaCode, FaMobile, FaRobot, FaRocket } from "react-icons/fa";
import Footer from "@/components/Footer";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const services = [
  {
    title: "Web Development",
    description: "Custom web applications built with modern technologies. From simple websites to complex enterprise solutions.",
    icon: <FaCode className="text-4xl text-blue-500" />,
    link: "/services/web-development",
    features: ["React/Next.js", "Node.js", "Full-stack Development", "Progressive Web Apps"]
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android. Fast, responsive, and user-friendly.",
    icon: <FaMobile className="text-4xl text-purple-500" />,
    link: "/services/mobile-development",
    features: ["React Native", "iOS Development", "Android Development", "Cross-platform Solutions"]
  },
  {
    title: "AI Solutions",
    description: "Cutting-edge AI and machine learning solutions to automate processes and gain valuable insights.",
    icon: <FaRobot className="text-4xl text-pink-500" />,
    link: "/services/ai-solutions",
    features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
  },
  {
    title: "MVP Development",
    description: "Rapid development of minimum viable products to validate your business idea quickly and efficiently.",
    icon: <FaRocket className="text-4xl text-blue-500" />,
    link: "/services/mvp-development",
    features: ["Rapid Prototyping", "Market Validation", "Lean Development", "Quick Deployment"]
  }
];

export default function Services() {
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
              Our Services
            </h1>
            <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
              Comprehensive software development services tailored to your business needs
            </p>
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                whileHover={{ scale: 1.02 }}
                className="p-8 rounded-2xl bg-black/50 border border-gray-800"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-xl bg-gray-900">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                    <p className="text-gray-400 mb-6">{service.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full text-sm bg-gray-900 text-gray-300"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={service.link}
                      className="inline-flex items-center text-blue-500 hover:text-blue-400"
                    >
                      Learn more
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your business goals with our expert development services.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 