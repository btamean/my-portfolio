import { useEffect, useState, useCallback } from 'react';

export function useFullPageScroll(sectionIds: string[]) {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  // 외부에서도 쓸 수 있도록 기능을 밖으로 뺍니다.
  const scrollToSection = useCallback((index: number) => {
    if (index < 0 || index >= sectionIds.length || isScrolling) return;

    const element = document.getElementById(sectionIds[index]);
    if (element) {
      setIsScrolling(true);
      element.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(index);

      setTimeout(() => {
        setIsScrolling(false);
      }, 800);
    }
  }, [isScrolling, sectionIds]);

  useEffect(() => {
    let touchStartY = 0;
    let touchEndY = 0;

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;
      e.preventDefault();
      if (Math.abs(e.deltaY) > 5) {
        if (e.deltaY > 0) {
          scrollToSection(currentSection + 1);
        } else {
          scrollToSection(currentSection - 1);
        }
      }
    };

    // ... handleTouchStart, handleTouchEnd, handleKeyDown은 기존 코드와 동일 ...
    // (내부에서 scrollToSection을 호출하도록 유지)

    const handleTouchStart = (e: TouchEvent) => { touchStartY = e.touches[0].clientY; };
    const handleTouchEnd = (e: TouchEvent) => {
      if (isScrolling) return;
      touchEndY = e.changedTouches[0].clientY;
      if (touchStartY - touchEndY > 30) scrollToSection(currentSection + 1);
      else if (touchEndY - touchStartY > 30) scrollToSection(currentSection - 1);
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return;
      if (e.key === 'ArrowDown' || e.key === 'PageDown') { e.preventDefault(); scrollToSection(currentSection + 1); }
      else if (e.key === 'ArrowUp' || e.key === 'PageUp') { e.preventDefault(); scrollToSection(currentSection - 1); }
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
  }, [currentSection, isScrolling, sectionIds, scrollToSection]); // scrollToSection 추가

  // scrollToSection을 추가로 반환합니다!
  return { currentSection, setCurrentSection, scrollToSection };
}