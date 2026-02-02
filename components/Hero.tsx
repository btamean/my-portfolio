"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-32">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* 애니메이션 텍스트 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              안녕하세요,
              <br />
              <span className="gradient-text neon-glow">웹 개발자</span>
              <br />
              입니다
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/70 mb-8 leading-relaxed"
          >
            사용자 경험을 최우선으로 생각하며,
            <br />
            혁신적이고 아름다운 웹 서비스를 만듭니다
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
              className="px-8 py-4 bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] rounded-full font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-[rgb(var(--primary))]/50"
            >
              프로젝트 보기
            </a>
            <a
              href="#contact"
              className="px-8 py-4 glass-morphism rounded-full font-semibold hover:scale-105 transition-transform"
            >
              연락하기
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
              <span className="text-sm text-white/50 mb-2">스크롤</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
              >
                <motion.div className="w-1.5 h-1.5 bg-white/70 rounded-full" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
