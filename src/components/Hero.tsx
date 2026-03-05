"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden bg-black text-white p-4">
            {/* Background Matrix/Grid Effect */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            {/* Decorative Glow elements */}
            <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-green-500/20 blur-[100px]" />
            <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px]" />

            <div className="z-10 flex max-w-4xl flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="mb-4 inline-block rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm font-medium text-green-400">
                        Cybersecurity Enthusiast & Ex-Android Developer
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mt-4 text-5xl font-bold tracking-tight sm:text-7xl"
                >
                    Paul <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Brugman</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-6 max-w-2xl text-lg text-gray-400"
                >
                    Bridging the gap between secure code and network defence.
                    Masters student at James Cook University with 4+ years of application development experience.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-8 flex gap-4"
                >
                    <a
                        href="#contact"
                        className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black hover:bg-gray-200 transition-colors"
                    >
                        Contact Me
                    </a>
                    <a
                        href="https://www.linkedin.com/in/paulmbrugman/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                    >
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 animate-bounce"
                >
                    <ArrowDown className="text-gray-500 h-6 w-6" />
                </motion.div>
            </div>
        </section>
    );
}
