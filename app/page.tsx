"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* 배경 애니메이션 효과 */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[rgb(var(--primary))] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[rgb(var(--secondary))] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-float animation-delay-400"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[rgb(var(--accent))] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-float animation-delay-600"></div>
      </div>

      {/* 그리드 배경 */}
      <div className="fixed inset-0 -z-10 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgb(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, rgb(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <Navigation />
      
      <div className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>

      {/* 푸터 */}
      <footer className="border-t border-white/10 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Your Name. Built with Next.js & Tailwind CSS
          </p>
        </div>
      </footer>
    </main>
  );
}
