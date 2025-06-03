import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.img
            src="/profile.jpg"
            alt="Ganesh Lagad"
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
          />
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Ganesh Lagad
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Full Stack Developer | AI/ML Enthusiast | UI/UX Designer
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="mailto:ganeshlagad2005@gmail.com"
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            >
              <FaEnvelope className="mr-2" />
              ganeshlagad2005@gmail.com
            </a>
            <a
              href="https://github.com/Ganeshh2005"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            >
              <FaGithub className="mr-2" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ganesh-lagad-b7a6b0249/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            >
              <FaLinkedin className="mr-2" />
              LinkedIn
            </a>
            <span className="flex items-center text-gray-600 dark:text-gray-300">
              <FaMapMarkerAlt className="mr-2" />
              Nashik, Maharashtra
            </span>
            <span className="flex items-center text-gray-600 dark:text-gray-300">
              <FaPhone className="mr-2" />
              +91 9370575647
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 