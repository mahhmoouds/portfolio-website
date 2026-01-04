"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
              I am a dedicated and proactive Computer Science undergraduate at Management and Science University (MSU), 
              with a strong foundation in software development, systems architecture, and applied AI. Passionate about 
              creating innovative, user-centric applications powered by artificial intelligence, I have hands-on experience 
              in full-stack development using Next.js, React, TypeScript, Prisma, and PostgreSQL, along with working 
              knowledge of Python for scripting, automation, and AI integration.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg mt-4">
              I am also familiar with APIs such as OpenAI, Google Vision, and Cloudinary. Skilled in building scalable 
              applications with modern UI frameworks, secure authentication, and cloud-integrated services, I enjoy solving 
              real-world problems using current technologies and programming languages. I am eager to apply my knowledge in 
              a practical setting, contribute to impactful projects, and gain hands-on experience in areas such as software 
              engineering, AI, backend systems, cloud computing, or cybersecurity.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

