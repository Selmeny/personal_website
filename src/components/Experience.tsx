"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
    {
        company: "Vertilogic",
        role: "Android Developer",
        date: "Feb 2019 – Feb 2023",
        description: "Designed, developed, and maintained Android applications. Successfully delivered 9 applications for various clients.",
        skills: ["Android Framework", "Kotlin", "Java", "Firebase", "Mobile App Development"],
    },
    {
        company: "Sinarmas Forestry",
        role: "Organization & People Development Specialist",
        date: "Nov 2015 – Apr 2018",
        description: "Designed and implemented training and development programs. Managed performance reviews and training needs for 300+ employees.",
        skills: ["People Development", "Organizational Development", "Performance Management"],
    },
    {
        company: "Sinarmas Forestry",
        role: "Management Trainee",
        date: "May 2015 – Oct 2015",
        description: "Intensive training program in forestry management. Graduated with the highest score in the cohort.",
        skills: ["Leadership", "Project Management"],
    },
    {
        company: "The University of Göttingen",
        role: "Research Assistant (EFForTS)",
        date: "Oct 2014 – Dec 2014",
        description: "Supported entomological research through experiments and data collection. Analyzed data from over 1,000 insect samples.",
        skills: ["Research", "Data Analysis"],
    },
];

export default function Experience() {
    return (
        <section className="relative min-h-screen bg-black px-4 py-20 text-white">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-blue-400">Experience</h2>
                    <div className="mt-2 h-1 w-20 bg-blue-500/50 mx-auto rounded-full" />
                </motion.div>

                <div className="relative border-l border-gray-700 ml-4 md:ml-6 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[9px] md:-left-[11px] top-1 h-5 w-5 md:h-6 md:w-6 rounded-full border-4 border-black bg-blue-500" />

                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                <span className="text-sm font-mono text-gray-500">{exp.date}</span>
                            </div>
                            <div className="text-lg font-medium text-blue-300 mb-2">{exp.company}</div>
                            <p className="mb-4 text-gray-400 max-w-2xl">{exp.description}</p>

                            <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill) => (
                                    <span key={skill} className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300 border border-blue-500/20">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
