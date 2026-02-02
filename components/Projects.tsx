"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Next.js와 Stripe를 활용한 풀스택 전자상거래 플랫폼. 실시간 재고 관리와 결제 시스템 구현.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    image: "🛒",
    link: "#",
    github: "#",
  },
  {
    title: "Real-time Chat App",
    description: "WebSocket을 활용한 실시간 채팅 애플리케이션. 메시지 암호화 및 파일 공유 기능 포함.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    image: "💬",
    link: "#",
    github: "#",
  },
  {
    title: "AI Image Generator",
    description: "AI를 활용한 이미지 생성 웹 앱. OpenAI API 연동 및 프롬프트 최적화 기능.",
    tags: ["Next.js", "OpenAI", "Tailwind", "Vercel"],
    image: "🎨",
    link: "#",
    github: "#",
  },
  {
    title: "Task Management Tool",
    description: "드래그 앤 드롭 기반 칸반 보드. 팀 협업 및 실시간 동기화 기능 제공.",
    tags: ["React", "Firebase", "DnD Kit", "TypeScript"],
    image: "📋",
    link: "#",
    github: "#",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-12 gradient-text">
            Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group glass-morphism rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform"
            >
              {/* 프로젝트 이미지/아이콘 */}
              <div className="aspect-video bg-gradient-to-br from-[rgb(var(--primary))]/20 to-[rgb(var(--accent))]/20 flex items-center justify-center text-8xl">
                {project.image}
              </div>

              {/* 프로젝트 정보 */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[rgb(var(--primary))] transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/70 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* 기술 태그 */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-white/10 rounded-full border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 링크 버튼 */}
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-[rgb(var(--primary))] hover:text-[rgb(var(--secondary))] transition-colors"
                  >
                    <span>Live Demo</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors"
                  >
                    <span>GitHub</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
