'use client';

import { motion } from "framer-motion";
import { FaUsers, FaLightbulb, FaRocket, FaHandshake } from "react-icons/fa";
import Footer from "@/components/Footer";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function About() {
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
              About Imperium.dev
            </h1>
            <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
              We're a team of passionate developers, designers, and innovators dedicated to turning your ideas into reality.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                Our Mission
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                At Imperium.dev, we believe that great ideas deserve to be brought to life. Our mission is to empower entrepreneurs and businesses by providing them with the tools, expertise, and support they need to build successful digital products.
              </p>
              <p className="text-gray-300 text-lg">
                We combine cutting-edge technology with creative problem-solving to deliver solutions that not only meet but exceed our clients' expectations.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <FaUsers className="text-4xl text-blue-500" />, title: "Team", value: "50+" },
                { icon: <FaLightbulb className="text-4xl text-purple-500" />, title: "Projects", value: "200+" },
                { icon: <FaRocket className="text-4xl text-pink-500" />, title: "Startups", value: "100+" },
                { icon: <FaHandshake className="text-4xl text-blue-500" />, title: "Clients", value: "150+" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-2xl bg-black/50 border border-gray-800 text-center"
                >
                  {stat.icon}
                  <h3 className="text-2xl font-bold mt-4 text-white">{stat.value}</h3>
                  <p className="text-gray-400">{stat.title}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
          >
            Our Values
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions."
              },
              {
                title: "Excellence",
                description: "We strive for excellence in everything we do, from code quality to client communication."
              },
              {
                title: "Partnership",
                description: "We believe in building long-term partnerships with our clients, based on trust and mutual success."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                className="p-8 rounded-2xl bg-black/50 border border-gray-800"
              >
                <h3 className="text-2xl font-bold mb-4 text-white">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
          >
            Our Leadership Team
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "John Doe",
                role: "CEO & Founder",
                bio: "Visionary leader with 15+ years of experience in tech and entrepreneurship."
              },
              {
                name: "Jane Smith",
                role: "CTO",
                bio: "Tech innovator specializing in AI and scalable architecture."
              },
              {
                name: "Mike Johnson",
                role: "Head of Design",
                bio: "Award-winning designer focused on creating exceptional user experiences."
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                className="p-8 rounded-2xl bg-black/50 border border-gray-800 text-center"
              >
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
                <h3 className="text-2xl font-bold mb-2 text-white">{member.name}</h3>
                <p className="text-blue-400 mb-4">{member.role}</p>
                <p className="text-gray-400">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
} 