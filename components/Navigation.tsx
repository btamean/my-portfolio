"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface NavigationProps {
  scrollToSection: (index: number) => void;
  currentSection: number;
}

export default function Navigation({ scrollToSection, currentSection }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || currentSection > 0 // 첫 섹션이 아닐 때도 배경색이 보이면 더 좋습니다
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-[rgb(var(--border))]" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* 로고 클릭 시 홈(0번)으로 이동 */}
          <button 
            onClick={() => scrollToSection(0)} 
            className="text-xl font-bold text-[rgb(var(--foreground))]"
          >
            YourName
          </button>

          {/* 네비게이션 메뉴 */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* 2. <a> 태그 대신 <button>을 사용하고 scrollToSection을 연결합니다. */}
                <button
                  onClick={() => scrollToSection(index)}
                  className={`text-sm font-medium transition-colors relative group ${
                    currentSection === index 
                      ? "text-[rgb(var(--primary))]" 
                      : "text-gray-600 hover:text-[rgb(var(--primary))]"
                  }`}
                >
                  {item.name}
                  {/* 현재 섹션일 때 밑줄 표시 */}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-[rgb(var(--primary))] transition-all ${
                    currentSection === index ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
                </button>
              </motion.li>
            ))}
          </ul>

          {/* 모바일 메뉴 버튼 */}
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}