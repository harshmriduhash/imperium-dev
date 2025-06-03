'use client';

import { motion } from "framer-motion";
import { FaCode, FaUsers, FaRocket, FaHeart, FaLightbulb, FaHandshake } from "react-icons/fa";
import Footer from "@/components/Footer";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function Careers() {
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
              Join Our Team
            </h1>
            <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
              Build the future with us. We're looking for passionate individuals who want to make a difference.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Culture Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
          >
            Our Culture
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaCode className="text-4xl text-blue-500" />,
                title: "Innovation",
                description: "We encourage creative thinking and continuous learning."
              },
              {
                icon: <FaUsers className="text-4xl text-purple-500" />,
                title: "Collaboration",
                description: "Work with talented individuals in a supportive environment."
              },
              {
                icon: <FaRocket className="text-4xl text-pink-500" />,
                title: "Growth",
                description: "Opportunities for professional and personal development."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                className="p-8 rounded-2xl bg-black/50 border border-gray-800 text-center"
              >
                {value.icon}
                <h3 className="text-2xl font-bold mt-6 mb-4 text-white">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
          >
            Benefits & Perks
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaHeart className="text-3xl text-blue-500" />,
                title: "Health & Wellness",
                items: ["Comprehensive health insurance", "Mental health support", "Fitness reimbursement"]
              },
              {
                icon: <FaLightbulb className="text-3xl text-purple-500" />,
                title: "Learning & Development",
                items: ["Professional development budget", "Conference attendance", "Online courses"]
              },
              {
                icon: <FaHandshake className="text-3xl text-pink-500" />,
                title: "Work-Life Balance",
                items: ["Flexible hours", "Remote work options", "Generous PTO"]
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                className="p-8 rounded-2xl bg-black/50 border border-gray-800"
              >
                <div className="flex items-center mb-6">
                  {benefit.icon}
                  <h3 className="text-2xl font-bold ml-4 text-white">{benefit.title}</h3>
                </div>
                <ul className="space-y-3">
                  {benefit.items.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-400">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
          >
            Open Positions
          </motion.h2>
          <div className="space-y-6">
            {[
              {
                title: "Senior Full Stack Developer",
                location: "Remote",
                type: "Full-time",
                description: "Join our team to build scalable web applications using modern technologies."
              },
              {
                title: "UI/UX Designer",
                location: "San Francisco",
                type: "Full-time",
                description: "Create beautiful and intuitive user interfaces for our clients' products."
              },
              {
                title: "AI Engineer",
                location: "Remote",
                type: "Full-time",
                description: "Work on cutting-edge AI projects and implement machine learning solutions."
              },
              {
                title: "DevOps Engineer",
                location: "Remote",
                type: "Full-time",
                description: "Manage and optimize our cloud infrastructure and deployment pipelines."
              }
            ].map((position, index) => (
              <motion.div
                key={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                whileHover={{ scale: 1.02 }}
                className="p-8 rounded-2xl bg-black/50 border border-gray-800"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-white">{position.title}</h3>
                    <div className="flex items-center gap-4 text-gray-400">
                      <span>{position.location}</span>
                      <span>•</span>
                      <span>{position.type}</span>
                    </div>
                  </div>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="#"
                    className="mt-4 md:mt-0 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-all"
                  >
                    Apply Now
                  </motion.a>
                </div>
                <p className="mt-4 text-gray-400">{position.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#"
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-all"
            >
              Send Your Resume
            </motion.a>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
} 