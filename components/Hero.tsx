"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Calendar, Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent"
          >
            Mahmoud Aly
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 mb-8 font-medium"
          >
            Computer Science Undergraduate | AI Enthusiast | Full-Stack Developer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <a
              href="mailto:mi2371384@gmail.com"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              <Mail size={18} />
              <span>Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/mahmoud-alyy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/mahhmoouds"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12"
          >
            <div className="flex items-center justify-center gap-2 p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md">
              <Mail size={20} className="text-blue-600" />
              <span className="text-sm text-slate-700 dark:text-slate-300">mi2371384@gmail.com</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md">
              <Phone size={20} className="text-blue-600" />
              <span className="text-sm text-slate-700 dark:text-slate-300">+601162288349</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md">
              <MapPin size={20} className="text-blue-600" />
              <span className="text-sm text-slate-700 dark:text-slate-300">Shah Alam, Selangor</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md">
              <Calendar size={20} className="text-blue-600" />
              <span className="text-sm text-slate-700 dark:text-slate-300">10.08.2004</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

