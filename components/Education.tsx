"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, ExternalLink } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Education
          </h2>

          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <GraduationCap className="text-blue-600 dark:text-blue-400" size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  Bachelor in Computer Science (HONS.)
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-400 mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    <span>Management and Science University, Shah Alam, Selangor</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>Feb 2023 - Feb 2026</span>
                  </div>
                </div>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  <strong>Relevant courses:</strong> Data Structures & Algorithms, Object-Oriented Programming (OOP), 
                  Web Development, API Development, Database Management, Operating Systems, Artificial Intelligence, 
                  Distributed Systems, Software Engineering Principles, Computer Architecture, System Analysis & Design, 
                  Network & Data Security, Computer Vision, Linux Programming.
                </p>
              </div>
            </div>
          </div>

          {/* Graduation Project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 rounded-xl shadow-lg p-8 border-2 border-blue-200 dark:border-blue-800"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Graduation Project
              </h3>
              <div className="flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-400 mb-6">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Organization:</span>
                  <span>MSU University</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>Graduation Project Presentation | 20.6.2025</span>
                </div>
              </div>
              <h4 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                A DEVELOPMENT OF AN AI-POWERED MENTAL HEALTH COUNSELING SYSTEM – CHATCARE
              </h4>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-semibold mr-2 mb-2">
                  Tech Stack
                </span>
                <span className="text-slate-700 dark:text-slate-300">
                  Django, Python, Groq API, LangChain, ChromaDB, HuggingFace Embeddings, SQLite, Bootstrap 5, JavaScript
                </span>
              </div>
            </div>

            <ul className="space-y-3 text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">•</span>
                <span>
                  Built a web-based mental health counseling chatbot that provides real-time, personalized support and 
                  evidence-based guidance to users.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">•</span>
                <span>
                  Integrated RAG (Retrieval-Augmented Generation) using ChromaDB vector store and HuggingFace embeddings 
                  to enhance AI responses with contextual mental health knowledge from local documents and web sources.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">•</span>
                <span>
                  Implemented multi-model LLM support with Groq API, supporting Llama 3.1 and Llama 3.3 models with 
                  configurable parameters (temperature, max tokens, streaming) for personalized AI interactions.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">•</span>
                <span>
                  Developed a document processing system that extracts and indexes content from PDF, DOCX, TXT, and CSV 
                  files, enabling the AI to reference user-uploaded resources during conversations.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">•</span>
                <span>
                  Built a custom prompt engineering interface allowing users to define AI behavior and system prompts, 
                  with dynamic site name generation based on custom personas.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">•</span>
                <span>
                  Designed a modular Django architecture with user authentication, chat history persistence, and a 
                  responsive UI using Bootstrap 5 and crispy forms.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">•</span>
                <span>
                  Implemented streaming responses for real-time chat interactions and intelligent keyword-based document 
                  retrieval to provide contextually relevant information during counseling sessions.
                </span>
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="https://drive.google.com/drive/folders/1YqMWTR01ZFPZ59McHWid5-RZM4G9AUKa?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <ExternalLink size={18} />
                <span>Graduation Project Documents</span>
              </a>
              <a
                href="https://github.com/mahhmoouds/ChatCare.git"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
              >
                <ExternalLink size={18} />
                <span>GitHub Repository</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

