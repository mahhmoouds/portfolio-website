"use client";

import { motion } from "framer-motion";
import { Heart, Users, HandHeart } from "lucide-react";

const volunteeringExperiences = [
  {
    icon: Users,
    title: "Community Outreach Volunteer (Orphanage Support Program)",
    organization: "Management and Science University (MSU)",
    points: [
      "Volunteered in a university-led outreach program supporting orphaned children through fun, educational games and interactive activities.",
      "Assisted in organizing recreational sessions and distributing meals to create a safe, joyful, and supportive environment.",
      "Provided emotional support and positive engagement to children through direct interaction and group activities.",
      "Strengthened communication, empathy, and teamwork skills through hands-on community service.",
    ],
  },
  {
    icon: Heart,
    title: "Humanitarian Volunteer – Support Events for Palestinian Children",
    organization: "Community Events",
    points: [
      "Participated in community events focused on supporting Palestinian children in need through awareness activities and on-site assistance.",
      "Assisted with event coordination, activity facilitation, and food distribution during humanitarian gatherings.",
      "Worked alongside volunteers to ensure smooth event flow and a welcoming environment for participants.",
      "Gained experience in humanitarian support, collaboration, and community engagement.",
    ],
  },
  {
    icon: HandHeart,
    title: "Student Volunteer – Community Aid & Food Support Program",
    organization: "Management and Science University (MSU)",
    points: [
      "Volunteered in university-organized initiatives aimed at supporting individuals and families in need through food provision and basic assistance.",
      "Assisted in preparing, packaging, and distributing food while maintaining organization and respect.",
      "Collaborated with student volunteers and coordinators to ensure efficient service delivery.",
      "Enhanced teamwork, responsibility, and organizational skills through active participation.",
    ],
  },
];

export default function Volunteering() {
  return (
    <section id="volunteering" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Volunteering
          </h2>

          <div className="space-y-8">
            {volunteeringExperiences.map((experience, index) => {
              const IconComponent = experience.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg flex-shrink-0">
                      <IconComponent className="text-blue-600 dark:text-blue-400" size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                        {experience.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
                        {experience.organization}
                      </p>
                      <ul className="space-y-2">
                        {experience.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start gap-3">
                            <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">•</span>
                            <span className="text-slate-700 dark:text-slate-300">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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

