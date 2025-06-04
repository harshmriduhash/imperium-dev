'use client';

import Image from "next/image";
import { FaRocket, FaCode, FaMobile, FaRobot, FaCheck, FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from 'next/link';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">Imperium.dev</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="#services"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Services
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="#features"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Features
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="#pricing"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Pricing
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
                  href="#contact"
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium transition-all"
                >
                  Get Started
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20"></div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="max-w-7xl mx-auto relative"
        >
          <motion.div
            variants={fadeIn}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Build Your MVP, Fast, Affordable, and Stress-Free
            </h1>
            <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
              Turning ideas into reality, fast. Let us take your idea from concept to a market-ready MVP in just a few weeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
                href="#contact"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold transition-all"
              >
                Share Your Vision
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, borderColor: "#3B82F6" }}
                href="#features"
                className="px-8 py-4 rounded-full border-2 border-gray-700 text-gray-300 font-semibold transition-all"
              >
                Learn More
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-black">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.h2
            variants={fadeIn}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
          >
            From Concept to Launch in Weeks, Not Months
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaRocket className="text-blue-500 text-xl" />,
                title: "Rapid MVP Development",
                description: "From concept to market-ready MVP in 5 weeks with iterative development and continuous feedback.",
                bgColor: "bg-blue-900/20"
              },
              {
                icon: <FaCode className="text-purple-500 text-xl" />,
                title: "Modern Tech Stack",
                description: "Built with the latest technologies and AI tools for faster development and better scalability.",
                bgColor: "bg-purple-900/20"
              },
              {
                icon: <FaRobot className="text-pink-500 text-xl" />,
                title: "AI-Powered Solutions",
                description: "Leverage cutting-edge AI to enhance your product's capabilities and user experience.",
                bgColor: "bg-pink-900/20"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.2)" }}
                className={`p-8 rounded-2xl ${feature.bgColor} border border-gray-800 transition-all`}
              >
                <div className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gradient-to-br from-gray-900 to-black">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.h2
            variants={fadeIn}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
          >
            Our Services
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Web Development",
                items: ["Full-stack Development", "Progressive Web Apps", "E-commerce Solutions"]
              },
              {
                title: "Mobile Development",
                items: ["iOS & Android Apps", "Cross-platform Solutions", "App Store Optimization"]
              },
              {
                title: "AI Development",
                items: ["Custom AI Models", "Machine Learning", "Natural Language Processing"]
              },
              {
                title: "MVP Development",
                items: ["Rapid Prototyping", "Market Validation", "Investor-Ready Products"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.2)" }}
                className="p-8 rounded-2xl bg-black/50 border border-gray-800 transition-all"
              >
                <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-400">
                      <FaCheck className="text-blue-500 mr-2" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-black">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.h2
            variants={fadeIn}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
          >
            Choose Your Plan
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Starter",
                price: "$2,997",
                features: ["Basic MVP Development", "4 Weeks Delivery", "Essential Features"],
                highlighted: false
              },
              {
                title: "Professional",
                price: "$4,997",
                features: ["Complete MVP Development", "5 Weeks Delivery", "Advanced Features", "Priority Support"],
                highlighted: true
              },
              {
                title: "Enterprise",
                price: "Custom",
                features: ["Custom Development", "Dedicated Team", "Premium Support", "Custom Timeline"],
                highlighted: false
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.2)" }}
                className={`p-8 rounded-2xl ${plan.highlighted
                    ? "bg-gradient-to-br from-blue-500 to-purple-500 text-white"
                    : "bg-black/50 border border-gray-800"
                  } transition-all relative`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
                <p className="text-4xl font-bold mb-6">{plan.price}</p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <FaCheck className={`mr-2 ${plan.highlighted ? "text-white" : "text-blue-500"}`} /> {feature}
                    </li>
                  ))}
                </ul>
                <motion.a
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
                  href="#contact"
                  className={`block w-full py-3 text-center rounded-full ${plan.highlighted
                      ? "bg-white text-blue-600"
                      : "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                    } font-semibold transition-all`}
                >
                  Get Started
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-gray-900 to-black">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeIn}
            className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            variants={fadeIn}
            className="text-xl text-gray-300 mb-12"
          >
            Let's turn your idea into reality. We're accepting only 3 new clients for May.
          </motion.p>
          <motion.div
            variants={fadeIn}
            className="bg-black/50 rounded-2xl border border-gray-800 p-8"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                placeholder="Tell us about your project"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              ></motion.textarea>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
                type="submit"
                className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold transition-all"
              >
                Share Your Vision
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                Imperium.dev
              </h3>
              <p className="text-gray-400 mb-6">
                Building the future of digital experiences with cutting-edge technology and creative solutions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FaTwitter className="text-xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FaLinkedin className="text-xl" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <FaGithub className="text-xl" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                    Mobile Apps
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                    AI Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                    Cloud Services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Company</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="text-gray-400 hover:text-white transition-colors">
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-400 hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-400">
                  <FaEnvelope className="mr-3" />
                  contact@imperium.dev
                </li>
                <li className="flex items-center text-gray-400">
                  <FaPhone className="mr-3" />
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center text-gray-400">
                  <FaMapMarkerAlt className="mr-3" />
                  San Francisco, CA
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Imperium.dev. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
