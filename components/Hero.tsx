"use client";

import { motion } from "framer-motion";
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen  flex items-center justify-center section-padding">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* 애니메이션 텍스트 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-[rgb(var(--primary))] font-semibold text-4xl">안녕하세요 👋</h1>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[rgb(var(--foreground))]">
              {t('iAm')} <span className="gradient-text">{t('webDeveloper')}</span>
              {t('iAmSuffix') && <><br />{t('iAmSuffix')}</>}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto"
          >
            {t('heroDescription')}
          </motion.p>

          {/* CTA 버튼 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-[rgb(var(--primary))] text-white rounded-xl font-semibold hover:bg-[rgb(var(--secondary))] transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              {t('viewProjects')}
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-[rgb(var(--primary))] text-[rgb(var(--primary))] rounded-xl font-semibold hover:bg-[rgb(var(--primary))] hover:text-white transition-all"
            >
              {t('contactMe')}
            </a>
          </motion.div>

          {/* 스크롤 인디케이터 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-20"
          >
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-2"
              >
                <motion.div className="w-1.5 h-1.5 bg-[rgb(var(--primary))] rounded-full" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}