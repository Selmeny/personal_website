"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, ExternalLink } from "lucide-react";

export default function Certifications() {
    const education = [
        {
            school: "James Cook University",
            degree: "Master of Information Technology",
            field: "Cybersecurity",
            year: "2026 – 2027",
        },
        {
            school: "Gamma College Sydney",
            degree: "Advanced Diploma of Information Technology",
            field: "IT",
            year: "2024 – 2026",
        },
        {
            school: "IPB University",
            degree: "Bachelor of Forestry",
            field: "Forestry",
            year: "2009 – 2014",
        },
    ];

    const certifications = [
        "Google Cybersecurity Professional Certificate",
        "Automate Cybersecurity Tasks with Python (Google)",
        "Cisco Junior Cybersecurity Analyst",
        "Tools of the Trade: Linux and SQL",
        "Connect and Protect: Networks and Network Security",
        "Detection and Response (Google)",
        "Manage Security Risks (Google)",
    ];

    return (
        <section className="relative min-h-screen bg-zinc-900 px-4 py-20 text-white">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-purple-400">Education & Certifications</h2>
                    <div className="mt-2 h-1 w-20 bg-purple-500/50 mx-auto rounded-full" />
                </motion.div>

                <div className="grid gap-12 md:grid-cols-2">
                    {/* Education Column */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-3 mb-6">
                            <GraduationCap className="text-purple-400 h-8 w-8" />
                            <h3 className="text-2xl font-semibold">Education</h3>
                        </div>
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="rounded-xl bg-white/5 p-6 border border-white/10 hover:border-purple-500/50 transition-colors"
                            >
                                <h4 className="text-lg font-bold">{edu.school}</h4>
                                <p className="text-purple-300">{edu.degree}</p>
                                <div className="flex justify-between items-center mt-2 text-sm text-gray-400">
                                    <span>{edu.field}</span>
                                    <span>{edu.year}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Certifications Column */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-3 mb-6">
                            <Award className="text-green-400 h-8 w-8" />
                            <h3 className="text-2xl font-semibold">Certifications</h3>
                        </div>
                        <div className="grid gap-4">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    className="flex items-center justify-between rounded-lg bg-white/5 p-4 border border-white/10 hover:bg-white/10 transition-colors group"
                                >
                                    <span className="font-medium group-hover:text-green-300 transition-colors">{cert}</span>
                                    <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
