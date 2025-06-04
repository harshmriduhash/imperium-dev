'use client';

import { motion } from "framer-motion";
import { FaCalendar, FaUser, FaTag } from "react-icons/fa";
import Footer from "@/components/Footer";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function Blog() {
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
              Our Blog
            </h1>
            <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
              Insights, updates, and thoughts on technology, development, and digital innovation.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Featured Post */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="relative rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20"></div>
            <div className="relative p-8 md:p-12">
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                <span className="flex items-center">
                  <FaCalendar className="mr-2" /> March 15, 2024
                </span>
                <span className="flex items-center">
                  <FaUser className="mr-2" /> John Doe
                </span>
                <span className="flex items-center">
                  <FaTag className="mr-2" /> Technology
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                The Future of AI in Software Development
              </h2>
              <p className="text-gray-300 mb-6">
                Exploring how artificial intelligence is revolutionizing the way we build and deploy software applications.
              </p>
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                Read More →
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Building Scalable Web Applications",
                excerpt: "Learn the best practices for creating web applications that can handle millions of users.",
                date: "March 10, 2024",
                author: "Jane Smith",
                category: "Web Development"
              },
              {
                title: "Mobile App Development Trends 2024",
                excerpt: "Discover the latest trends and technologies shaping the future of mobile app development.",
                date: "March 8, 2024",
                author: "Mike Johnson",
                category: "Mobile Development"
              },
              {
                title: "The Rise of AI in Business",
                excerpt: "How artificial intelligence is transforming businesses across different industries.",
                date: "March 5, 2024",
                author: "Sarah Wilson",
                category: "AI"
              },
              {
                title: "Optimizing React Performance",
                excerpt: "Advanced techniques for improving the performance of your React applications.",
                date: "March 3, 2024",
                author: "Alex Brown",
                category: "Web Development"
              },
              {
                title: "Cloud Architecture Best Practices",
                excerpt: "Essential guidelines for designing and implementing cloud-based solutions.",
                date: "March 1, 2024",
                author: "David Lee",
                category: "Cloud"
              },
              {
                title: "UI/UX Design Principles",
                excerpt: "Key principles for creating intuitive and engaging user interfaces.",
                date: "February 28, 2024",
                author: "Emily Chen",
                category: "Design"
              }
            ].map((post, index) => (
              <motion.article
                key={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeIn}
                whileHover={{ scale: 1.02 }}
                className="p-8 rounded-2xl bg-black/50 border border-gray-800"
              >
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <span className="flex items-center">
                    <FaCalendar className="mr-2" /> {post.date}
                  </span>
                  <span className="flex items-center">
                    <FaUser className="mr-2" /> {post.author}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{post.title}</h3>
                <p className="text-gray-400 mb-6">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-400">{post.category}</span>
                  <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                    Read More →
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Subscribe to our newsletter for the latest insights and updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-gray-900 border border-gray-800 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                type="submit"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-all"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
} 