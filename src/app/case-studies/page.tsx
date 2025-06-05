'use client';

import { motion } from "framer-motion";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import Footer from "@/components/Footer";
import { metadata } from "../metadata";
import Head from "next/head";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const caseStudies = [
  {
    title: "E-Commerce Platform Transformation",
    description: "Revolutionized an outdated e-commerce platform with modern tech stack and improved user experience. Achieved 300% increase in conversion rate and 50% reduction in load time.",
    category: "Web Development",
    image: "/case-studies/ecommerce.jpg",
    results: ["300% increase in conversion rate", "50% reduction in load time", "Improved mobile engagement"],
    pdfUrl: "/case-studies/ecommerce-case-study.pdf",
    keywords: "e-commerce development, platform transformation, conversion rate optimization, performance optimization"
  },
  {
    title: "AI-Powered Healthcare Solution",
    description: "Developed an AI system for early disease detection and patient care optimization. Leveraging machine learning to improve diagnosis accuracy and reduce operational costs.",
    category: "AI Solutions",
    image: "/case-studies/healthcare.jpg",
    results: ["95% accuracy in predictions", "40% faster diagnosis", "Reduced operational costs"],
    pdfUrl: "/case-studies/healthcare-case-study.pdf",
    keywords: "AI healthcare, machine learning, disease detection, healthcare optimization"
  },
  {
    title: "FinTech Mobile App",
    description: "Created a secure and intuitive mobile banking application with advanced features. Achieved 1M+ downloads and maintained 99.9% uptime.",
    category: "Mobile Development",
    image: "/case-studies/fintech.jpg",
    results: ["1M+ downloads", "4.8/5 app store rating", "99.9% uptime"],
    pdfUrl: "/case-studies/fintech-case-study.pdf",
    keywords: "fintech app, mobile banking, secure banking, financial technology"
  }
];

export default function CaseStudies() {
  return (
    <>
      <Head>
        <title>{metadata.caseStudies.title}</title>
        <meta name="description" content={metadata.caseStudies.description} />
        <meta name="keywords" content={metadata.caseStudies.keywords} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.caseStudies.title} />
        <meta property="og:description" content={metadata.caseStudies.description} />
        
        {/* Twitter */}
        <meta name="twitter:title" content={metadata.caseStudies.title} />
        <meta name="twitter:description" content={metadata.caseStudies.description} />
      </Head>
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
                Case Studies
              </h1>
              <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
                Explore our successful client projects and case studies. See how we've helped businesses transform their digital presence and achieve remarkable results.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  whileHover={{ scale: 1.02 }}
                  className="bg-black/50 border border-gray-800 rounded-2xl overflow-hidden"
                >
                  <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                  <div className="p-6">
                    <span className="text-sm text-blue-400 mb-2 block">{study.category}</span>
                    <h2 className="text-2xl font-bold mb-4 text-white">{study.title}</h2>
                    <p className="text-gray-400 mb-6">{study.description}</p>
                    <ul className="space-y-2 mb-6">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-center text-gray-300">
                          <FaArrowRight className="text-blue-500 mr-2 text-sm" />
                          {result}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col gap-3">
                      <a
                        href={study.pdfUrl}
                        download
                        className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                        aria-label={`Download ${study.title} case study`}
                      >
                        <FaDownload className="text-sm" />
                        Download Case Study
                      </a>
                      <button 
                        className="w-full py-3 px-6 rounded-lg border border-gray-700 text-gray-300 font-semibold hover:border-blue-500 hover:text-blue-500 transition-all"
                        aria-label={`View details for ${study.title}`}
                      >
                        View Details
                      </button>
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
                Let's discuss how we can help transform your business with our expertise and innovative solutions.
              </p>
              <button 
                className="py-4 px-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:opacity-90 transition-opacity"
                aria-label="Get in touch to start your project"
              >
                Get in Touch
              </button>
            </motion.div>
          </div>
        </section>

        <div className="border-t border-gray-800">
          <Footer />
        </div>
      </div>
    </>
  );
} 