"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Next.js와 Stripe를 활용한 풀스택 전자상거래 플랫폼.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    image: "🛒",
    link: "#",
    github: "#",
  },
  {
    title: "Real-time Chat App",
    description: "WebSocket을 활용한 실시간 채팅 애플리케이션.",
    tags: ["React", "Node.js", "Socket.io"],
    image: "💬",
    link: "#",
    github: "#",
  },
  {
    title: "AI Image Generator",
    description: "AI를 활용한 이미지 생성 웹 앱.",
    tags: ["Next.js", "OpenAI", "Tailwind"],
    image: "🎨",
    link: "#",
    github: "#",
  },
  {
    title: "Task Management Tool",
    description: "드래그 앤 드롭 기반 칸반 보드.",
    tags: ["React", "Firebase", "TypeScript"],
    image: "📋",
    link: "#",
    github: "#",
  },
];

export default function Projects() {
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
            Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--secondary))] mb-8"></div>
        </motion.div>

        {/* 리스트 컨테이너: grid-cols-1로 설정 */}
        <div className="flex flex-col gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group flex flex-col sm:flex-row items-center gap-6 p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-[rgb(var(--border))] hover:shadow-md transition-all hover:bg-white"
            >
              {/* 왼쪽: 작은 아이콘/이미지 영역 (고정 사이즈) */}
              <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 bg-gradient-to-br from-[rgb(var(--primary))]/10 to-[rgb(var(--accent))]/10 rounded-xl flex items-center justify-center text-4xl group-hover:scale-105 transition-transform">
                {project.image}
              </div>

              {/* 오른쪽: 상세 정보 영역 */}
              <div className="flex-grow w-full">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-[rgb(var(--foreground))] group-hover:text-[rgb(var(--primary))] transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* 링크 버튼을 제목 옆으로 배치 */}
                  <div className="flex gap-3">
                    <a href={project.link} className="text-sm font-medium text-[rgb(var(--primary))] hover:underline">Live</a>
                    <a href={project.github} className="text-sm font-medium text-gray-500 hover:text-black">Code</a>
                  </div>
                </div>

                <p className="text-gray-600 mb-3 text-sm line-clamp-2">
                  {project.description}
                </p>

                {/* 기술 태그 */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-semibold bg-white text-[rgb(var(--primary))] rounded-md border border-[rgb(var(--border))]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}