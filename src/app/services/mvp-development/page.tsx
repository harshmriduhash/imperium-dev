'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { FaRocket, FaCode, FaChartLine, FaUsers, FaLightbulb, FaClock } from "react-icons/fa";
import Footer from "@/components/Footer";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const technologies = [
  {
    name: "Frontend",
    icon: <FaCode className="text-4xl text-blue-500" />,
    items: ["React", "Next.js", "Tailwind CSS", "Material UI", "Progressive Web Apps"]
  },
  {
    name: "Backend",
    icon: <FaServer className="text-4xl text-green-500" />,
    items: ["Node.js", "Express", "Firebase", "Serverless", "REST APIs"]
  },
  {
    name: "Database",
    icon: <FaDatabase className="text-4xl text-purple-500" />,
    items: ["MongoDB", "PostgreSQL", "Redis", "Firestore", "Supabase"]
  },
  {
    name: "DevOps",
    icon: <FaCloud className="text-4xl text-pink-500" />,
    items: ["Docker", "AWS", "CI/CD", "Monitoring", "Analytics"]
  }
];

const features = [
  {
    title: "Rapid Development",
    description: "Quick turnaround time with efficient development processes and modern tools to get your MVP to market faster."
  },
  {
    title: "Market Validation",
    description: "Build, test, and validate your product idea with real users to gather valuable feedback and insights."
  },
  {
    title: "Scalable Architecture",
    description: "Future-proof your MVP with a scalable architecture that can grow with your business needs."
  },
  {
    title: "Cost-Effective",
    description: "Optimize development costs while maintaining quality through efficient processes and modern technologies."
  }
];

const process = [
  {
    title: "Discovery",
    description: "Understanding your business goals, target market, and core features for the MVP.",
    icon: <FaLightbulb className="text-3xl text-blue-500" />
  },
  {
    title: "Design",
    description: "Creating intuitive user interfaces and experiences that align with your brand.",
    icon: <FaUsers className="text-3xl text-purple-500" />
  },
  {
    title: "Development",
    description: "Agile development process with regular updates and feedback incorporation.",
    icon: <FaCode className="text-3xl text-green-500" />
  },
  {
    title: "Launch",
    description: "Deployment and monitoring to ensure smooth operation and gather user feedback.",
    icon: <FaRocket className="text-3xl text-pink-500" />
  }
];

export default function MVPDevelopment() {
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
              MVP Development
            </h1>
            <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
              Transform your ideas into market-ready products quickly and efficiently
            </p>
          </div>
        </motion.div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
          >
            Our MVP Development Process
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="p-6 rounded-2xl bg-black/50 border border-gray-800 text-center"
              >
                <div className="flex justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
          >
            Technology Stack
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="p-6 rounded-2xl bg-black/50 border border-gray-800"
              >
                <div className="flex items-center gap-4 mb-4">
                  {tech.icon}
                  <h3 className="text-xl font-bold text-white">{tech.name}</h3>
                </div>
                <ul className="space-y-2">
                  {tech.items.map((item, idx) => (
                    <li key={idx} className="text-gray-400 flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
          >
            Key Features
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                className="p-8 rounded-2xl bg-black/50 border border-gray-800"
              >
                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
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
              Ready to Launch Your MVP?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's turn your idea into a market-ready product and start gathering valuable user feedback.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Start Your MVP Journey
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 