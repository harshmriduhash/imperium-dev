'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { FaMobile, FaReact, FaApple, FaAndroid, FaDatabase, FaCloud } from "react-icons/fa";
import Footer from "@/components/Footer";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const technologies = [
  {
    name: "Native iOS",
    icon: <FaApple className="text-4xl text-gray-400" />,
    items: ["Swift", "SwiftUI", "UIKit", "Core Data", "ARKit"]
  },
  {
    name: "Native Android",
    icon: <FaAndroid className="text-4xl text-green-500" />,
    items: ["Kotlin", "Jetpack Compose", "Material Design", "Room", "Android SDK"]
  },
  {
    name: "Cross-Platform",
    icon: <FaReact className="text-4xl text-blue-500" />,
    items: ["React Native", "Flutter", "Xamarin", "Ionic", "Progressive Web Apps"]
  },
  {
    name: "Backend & Cloud",
    icon: <FaCloud className="text-4xl text-purple-500" />,
    items: ["Firebase", "AWS Amplify", "GraphQL", "REST APIs", "Push Notifications"]
  }
];

const features = [
  {
    title: "Native Performance",
    description: "Optimized native applications that deliver smooth performance and native user experience on both iOS and Android platforms."
  },
  {
    title: "Cross-Platform Development",
    description: "Efficient development of apps that work seamlessly across multiple platforms while maintaining native look and feel."
  },
  {
    title: "Offline Capabilities",
    description: "Robust offline functionality with local data storage and synchronization when connectivity is restored."
  },
  {
    title: "Security & Privacy",
    description: "Enterprise-grade security measures including data encryption, secure authentication, and privacy compliance."
  }
];

export default function MobileDevelopment() {
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
              Mobile App Development
            </h1>
            <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
              Creating powerful, scalable, and user-friendly mobile applications for iOS and Android platforms
            </p>
          </div>
        </motion.div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
          >
            Our Technology Stack
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
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-black">
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
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your mobile app requirements and create a solution that engages your users and drives business growth.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 