"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="h-screen flex items-center justify-center section-padding bg-[rgb(var(--muted))]" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[rgb(var(--foreground))]">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--secondary))] mb-12"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 왼쪽: 프로필 이미지 영역 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square card overflow-hidden relative group">
              <div className="w-full h-full bg-gradient-to-br from-[rgb(var(--primary))]/10 to-[rgb(var(--secondary))]/10 flex items-center justify-center">
                <span className="text-8xl">👨‍💻</span>
              </div>
            </div>
          </motion.div>

          {/* 오른쪽: 소개 텍스트 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              안녕하세요! 사용자 중심의 웹 경험을 만드는 것에 열정을 가진 
              풀스택 웹 개발자입니다.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              최신 웹 기술을 활용하여 성능과 사용성을 모두 갖춘 
              현대적인 웹 애플리케이션을 개발합니다. 클린 코드와 
              우아한 솔루션을 추구하며, 지속적인 학습과 성장을 
              중요하게 생각합니다.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="card p-6 text-center">
                <h3 className="text-3xl font-bold text-[rgb(var(--primary))] mb-2">3+</h3>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div className="card p-6 text-center">
                <h3 className="text-3xl font-bold text-[rgb(var(--secondary))] mb-2">20+</h3>
                <p className="text-sm text-gray-600">Projects Completed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}