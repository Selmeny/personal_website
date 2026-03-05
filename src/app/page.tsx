import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';

export default function Home() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
            <Hero />
            <About />
            <Experience />
            <Certifications />
            <Contact />
        </main>
    );
}
