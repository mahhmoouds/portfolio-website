"use client";

import { motion } from "framer-motion";
import { Database, CheckCircle2, MonitorSmartphone, PlayCircle } from "lucide-react";

type Project = {
  title: string;
  role: string;
  year: string;
  description: string;
  techStack: string[];
  bullets: string[];
  impact: string;
};

const projects: Project[] = [
  {
    title: "IGT — Israel Genocide Tracker (Palestine Incident Tracking Platform)",
    role: "Co-Owner & Principal Data Systems Architect",
    year: "2025",
    description:
      "A multi-source incident tracking and verification platform documenting genocide crimes and incidents affecting Palestinians, designed for transparent verification and structured evidence presentation.",
    techStack: [
      "Data Engineering",
      "Multi-Source Integration",
      "Verification Systems",
      "API Development",
      "Data Normalization",
      "Audit Systems",
    ],
    bullets: [
      "Co-owner and core technical architect of the platform.",
      "Designed system architecture for incident tracking and verification.",
      "Built automated multi-source data ingestion pipelines.",
      "Implemented connectors for APIs, feeds, and scraping sources.",
      "Designed normalization and deduplication algorithms.",
      "Built confidence scoring and verification models.",
      "Implemented evidence panels and source traceability.",
      "Designed audit trail and transparency workflows.",
      "Built human-review + automated pipeline hybrid system.",
      "Implemented structured publication workflows.",
    ],
    impact:
      "High-complexity data engineering, verification architecture, and social impact platform for documenting crimes against Palestinians.",
  },
  {
    title: "CybaSquad — AI Tech Talent Matching Platform",
    role: "Platform QA & Reliability Lead",
    year: "2025",
    description:
      "AI-powered platform connecting vetted tech professionals with businesses through ranking, verification, and AI matching.",
    techStack: [
      "QA Engineering",
      "Platform Testing",
      "AI Workflow Validation",
      "Performance Testing",
      "Production Readiness",
    ],
    bullets: [
      "Led structured platform testing and reliability validation.",
      "Performed scenario and workflow testing across user journeys.",
      "Identified bugs, logic errors, and usability gaps.",
      "Validated AI matching workflows and ranking flows.",
      "Contributed to performance and UX improvements.",
      "Supported production stability and readiness.",
    ],
    impact: "Hands-on experience in production platform QA and reliability engineering.",
  },
  {
    title: "AlaBali Website — Adaptive Popup Advertisement System",
    role: "Frontend Systems Engineer",
    year: "2025",
    description:
      "A flexible popup engagement system aligned with UX best practices and behavioral triggers for an e-commerce/marketing experience.",
    techStack: [
      "Frontend Engineering",
      "UX Design",
      "Behavioral Triggers",
      "Responsive Design",
      "Performance Optimization",
    ],
    bullets: [
      "Researched popup UX and engagement strategies.",
      "Implemented adaptive popup behavior engine.",
      "Built refresh and return-visit detection logic.",
      "Designed responsive popup positioning logic.",
      "Implemented resize-aware layout adaptation.",
      "Balanced engagement goals with non-intrusive UX.",
      "Optimized performance and trigger timing.",
    ],
    impact:
      "Frontend behavior engineering with strong focus on user experience and non-intrusive engagement.",
  },
  {
    title: "CyberTwins — Technical Education YouTube Platform",
    role: "Technical Content Architect & Strategy Lead",
    year: "2025",
    description:
      "A technical education channel where two developers solve the same challenge using different approaches to demonstrate diverse problem-solving strategies.",
    techStack: [
      "Technical Communication",
      "Content Strategy",
      "Developer Education",
      "Challenge-Based Learning",
      "Video Production",
    ],
    bullets: [
      "Designed dual-solution challenge format.",
      "Built repeatable technical content structure.",
      "Developed challenge-based learning model.",
      "Created developer education workflows.",
      "Built audience interaction challenge pipeline.",
      "Produced structured technical explanation content.",
    ],
    impact:
      "Strengthened technical communication, education strategy, and developer-focused content design.",
  },
];

const iconMap = {
  0: Database,
  1: CheckCircle2,
  2: MonitorSmartphone,
  3: PlayCircle,
} as const;

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto">
            A selection of impact-driven platforms and systems I&apos;ve contributed to across data
            engineering, AI platforms, frontend systems, and technical education.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => {
              const Icon = iconMap[index as keyof typeof iconMap] ?? Database;
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-xl shadow-lg p-6 border border-slate-200 dark:border-slate-700 flex flex-col h-full"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg flex-shrink-0">
                      <Icon className="text-blue-600 dark:text-blue-400" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                        {project.role} · {project.year}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-700 dark:text-slate-300 mb-4 text-sm">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                      Tech Focus:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-xs border border-slate-200 dark:border-slate-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <ul className="space-y-1.5 text-slate-700 dark:text-slate-300 text-sm mb-4">
                    {project.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-3 border-t border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-400">
                    <span className="font-semibold text-slate-900 dark:text-white">Impact: </span>
                    {project.impact}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


