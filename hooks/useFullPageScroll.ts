import { useEffect, useState } from 'react';

export function useFullPageScroll(sectionIds: string[]) {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let touchStartY = 0;
    let touchEndY = 0;

    const scrollToSection = (index: number) => {
      if (index < 0 || index >= sectionIds.length) return;
      
      const element = document.getElementById(sectionIds[index]);
      if (element) {
        setIsScrolling(true);
        element.scrollIntoView({ behavior: 'smooth' });
        setCurrentSection(index);
        
        setTimeout(() => {
          setIsScrolling(false);
        }, 800);
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;
      
      e.preventDefault();
      
      // 훨씬 더 민감하게 - 아주 작은 스크롤에도 반응
      if (Math.abs(e.deltaY) > 5) {
        if (e.deltaY > 0) {
          // 아래로 스크롤
          scrollToSection(currentSection + 1);
        } else {
          // 위로 스크롤
          scrollToSection(currentSection - 1);
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isScrolling) return;
      
      touchEndY = e.changedTouches[0].clientY;
      
      // 모바일도 더 민감하게
      if (touchStartY - touchEndY > 30) {
        // 위로 스와이프 (아래로 이동)
        scrollToSection(currentSection + 1);
      } else if (touchEndY - touchStartY > 30) {
        // 아래로 스와이프 (위로 이동)
        scrollToSection(currentSection - 1);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return;
      
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        scrollToSection(currentSection + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        scrollToSection(currentSection - 1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSection, isScrolling, sectionIds]);

  return { currentSection, setCurrentSection };
}