"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import { useFullPageScroll } from "@/hooks/useFullPageScroll";

const sections = ['home', 'about', 'skills', 'projects', 'contact'];

export default function Home() {
  const { currentSection } = useFullPageScroll(sections);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />
      
      <div className="relative">
        <section id="home" className="min-h-screen">
          <Hero />
        </section>
        
        <section id="about" className="min-h-screen">
          <About />
        </section>
        
        <section id="skills" className="min-h-screen">
          <Skills />
        </section>
        
        <section id="projects" className="min-h-screen">
          <Projects />
        </section>
        
        <section id="contact" className="min-h-screen">
          <Contact />
        </section>
      </div>

      {/* 페이지 인디케이터 */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3">
        {sections.map((section, index) => (
          <button
            key={section}
            onClick={() => {
              document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSection === index 
                ? 'bg-[rgb(var(--primary))] w-8' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to ${section}`}
          />
        ))}
      </div>

      {/* 푸터 */}
      <footer className="border-t border-[rgb(var(--border))] py-8 bg-[rgb(var(--muted))]">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Your Name. Built with Next.js & Tailwind CSS
          </p>
        </div>
      </footer>
    </main>
  );
}