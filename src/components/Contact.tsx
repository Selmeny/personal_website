"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, FileText, ArrowRight } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="relative flex min-h-[50vh] flex-col items-center justify-center bg-black px-4 py-10 text-white">
            {/* Footer / Contact Content */}
            <div className="container mx-auto max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Let's Connect</h2>
                    <p className="text-gray-400 max-w-xl mx-auto text-lg">
                        I'm always open to discussing cybersecurity, application security, or new opportunities.
                        Feel free to reach out directly.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <a
                        href="mailto:paulmbrugman@gmail.com" // Assuming email from context or placeholder
                        className="flex items-center gap-3 rounded-full bg-white px-8 py-4 text-black font-bold hover:bg-gray-200 transition-colors w-full sm:w-auto justify-center"
                    >
                        <Mail className="h-5 w-5" />
                        Email Me
                    </a>

                    <a
                        href="https://www.linkedin.com/in/paulmbrugman/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-white font-bold hover:bg-white/10 transition-colors w-full sm:w-auto justify-center"
                    >
                        <Linkedin className="h-5 w-5" />
                        LinkedIn
                    </a>

                    <a
                        href="https://www.seek.com.au/profiles/paul-brugman-DvJggdsvwl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 rounded-full border border-pink-500/20 bg-pink-500/10 px-8 py-4 text-pink-400 font-bold hover:bg-pink-500/20 transition-colors w-full sm:w-auto justify-center"
                    >
                        <FileText className="h-5 w-5" />
                        Seek Profile
                    </a>
                </motion.div>

                <footer className="mt-20 pt-8 border-t border-gray-800 text-gray-500 text-sm">
                    © {new Date().getFullYear()} Paul Brugman. Built with Next.js & Tailwind.
                </footer>
            </div>
        </section>
    );
}
