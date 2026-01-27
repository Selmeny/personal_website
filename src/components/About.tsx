"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="relative flex min-h-[50vh] flex-col items-center justify-center bg-zinc-900 px-4 py-20 text-white">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-green-400">About Me</h2>
                    <div className="mt-2 h-1 w-20 bg-green-500/50 mx-auto rounded-full" />
                </motion.div>

                <div className="grid gap-12 md:grid-cols-2 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {/* Image Placeholder - using div for now, replace with actual image later */}
                        <div className="aspect-square w-full max-w-md rounded-2xl bg-gradient-to-tr from-green-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center overflow-hidden relative">
                            <div className="absolute inset-0 bg-grid-white/[0.05]" />
                            <span className="text-white/20 text-6xl font-bold">PB</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="space-y-6 text-lg text-gray-300"
                    >
                        <p>
                            I am a dedicated <strong>Master of Information Technology</strong> student at
                            <span className="text-green-400"> James Cook University</span>, specializing in Cybersecurity.
                        </p>
                        <p>
                            With a strong technical foundation built over <strong>4 years as an Android Developer</strong>,
                            I possess a unique perspective on Application Security (AppSec) and the Software Development Life Cycle (SDLC).
                            I have designed, developed, and maintained numerous mobile applications, giving me deep insight into seeing code from both a builder's and a breaker's point of view.
                        </p>
                        <p>
                            Currently, I am expanding my expertise in <strong>Network Security, Threat Detection, and Linux</strong> systems.
                            My goal is to leverage my development background to secure critical infrastructure and applications against evolving digital threats.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
