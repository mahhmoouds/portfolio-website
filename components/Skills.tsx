"use client";

import { motion } from "framer-motion";
import { Code, Users, Languages } from "lucide-react";

const personalSkills = [
  "Excellent written and verbal communication across technical and non-technical audiences",
  "Proven leadership and team management abilities",
  "Strategic thinking with sound decision-making under pressure",
  "Strong sense of accountability and ownership",
  "Highly adaptable in fast-paced and changing environments",
  "Effective time management and prioritization skills",
  "Skilled in conflict resolution and negotiation",
  "Experienced in mentoring, coaching, and knowledge sharing",
  "Collaborative team player with cross-functional alignment skills",
  "Process-driven with strong attention to detail",
  "Committed to continuous learning and self-improvement",
  "Customer-focused mindset with service excellence orientation",
];

const technicalSkills = {
  "Programming Languages": ["Python", "C++", "TypeScript", "JavaScript"],
  "Web Development": ["Next.js", "React", "Tailwind CSS", "Radix UI", "shadcn/ui"],
  "Backend & Databases": ["Node.js", "Prisma", "PostgreSQL", "MySQL", "RESTful APIs"],
  "Authentication & Security": ["NextAuth (JWT, Google OAuth)", "Secure session handling"],
  "AI & OCR Integration": ["OpenAI", "Groq SDK", "Tesseract.js", "Google Vision API"],
  "DevOps & Tools": ["Git", "GitHub", "npm", "Prisma Studio", "Environment configuration"],
  "Operating Systems": ["Linux", "Windows"],
  "Office & ERP Applications": ["Microsoft Office Suite", "Outlook"],
  "Troubleshooting & Analysis": ["Skilled in debugging codes and operating system issues"],
};

const languages = [
  { name: "Arabic Language", level: "Fluent (Mother tongue)" },
  { name: "English Language", level: "Fluent" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Key Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Personal Skills */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <Users className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Personal Skills</h3>
              </div>
              <ul className="space-y-3">
                {personalSkills.map((skill, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">•</span>
                    <span className="text-slate-700 dark:text-slate-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Technical Skills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                  <Code className="text-indigo-600 dark:text-indigo-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Technical Skills</h3>
              </div>
              <div className="space-y-4">
                {Object.entries(technicalSkills).map(([category, skills]) => (
                  <div key={category}>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">{category}:</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm border border-slate-200 dark:border-slate-600"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-900 dark:to-slate-800 rounded-xl p-8 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                <Languages className="text-purple-600 dark:text-purple-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Languages</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {languages.map((lang, index) => (
                <div
                  key={index}
                  className="p-4 bg-white dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600"
                >
                  <div className="font-semibold text-slate-900 dark:text-white">{lang.name}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">{lang.level}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

