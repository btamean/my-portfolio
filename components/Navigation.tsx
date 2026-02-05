"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useLanguage } from "@/contexts/LanguageContext";

interface NavigationProps {
  scrollToSection: (index: number) => void;
  currentSection: number;
}

export default function Navigation({ scrollToSection, currentSection }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t('home'), href: "#home" },
    { name: t('about'), href: "#about" },
    { name: t('skills'), href: "#skills" },
    { name: t('projects'), href: "#projects" },
    { name: t('contact'), href: "#contact" },
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

            {/* 다크모드 & 언어 토글 */}
            <div className="hidden md:flex items-center gap-3">
              {/* 다크모드 토글 */}
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>

              {/* 언어 토글 */}
              <button
                onClick={() => setLanguage(language === 'ko' ? 'en' : 'ko')}
                className="px-3 py-1.5 text-sm font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {language === 'ko' ? 'EN' : 'KO'}
              </button>
            </div>

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