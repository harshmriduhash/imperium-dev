import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Particle = ({ delay }: { delay: number }) => (
  <motion.div
    initial={{ scale: 1, opacity: 1 }}
    animate={{
      scale: [1, 1.5, 0],
      opacity: [1, 0.8, 0],
      y: [0, -100],
      x: [0, Math.random() * 200 - 100],
    }}
    transition={{
      duration: 2,
      delay,
      ease: "easeOut",
    }}
    className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
  />
);

export default function LoadingScreen() {
  const [particles, setParticles] = useState<number[]>([]);

  useEffect(() => {
    // Create 50 particles
    setParticles(Array.from({ length: 50 }, (_, i) => i));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div className="relative">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
        >
          Imperium.dev
        </motion.div>

        {/* Particles container */}
        <div className="absolute inset-0 -z-10">
          {particles.map((i) => (
            <Particle key={i} delay={i * 0.02} />
          ))}
        </div>

        {/* Loading text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm"
        >
          Loading...
        </motion.div>
      </div>
    </motion.div>
  );
} 