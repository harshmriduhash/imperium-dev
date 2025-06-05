import Link from 'next/link';
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
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
                <Link href="/case-studies" className="text-gray-400 hover:text-white transition-colors">
                  Case Studies
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
                +1 (555) 
              </li>
              <li className="flex items-center text-gray-400">
                <FaMapMarkerAlt className="mr-3" />
                Bangalore, India
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Imperium.dev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 