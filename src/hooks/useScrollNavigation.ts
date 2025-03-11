import { useState, useEffect } from "react";

export function useScrollNavigation(sectionIds: string[], scrollDelay = 700) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  
  useEffect(() => {
    const disableScroll = (e: WheelEvent) => e.preventDefault();
    window.addEventListener("wheel", disableScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", disableScroll);
    };
  }, []);

  const scrollToSection = (index: number) => {
    if (index >= 0 && index < sectionIds.length && !isScrolling) {
      setIsScrolling(true);
      document.getElementById(sectionIds[index])?.scrollIntoView({ behavior: "smooth" });
      setCurrentIndex(index);
      setTimeout(() => setIsScrolling(false), scrollDelay);
    }
  };

  const handleScroll = (event: React.WheelEvent) => {
    if (isScrolling) return;

    const scrollThreshold = 50;
    if (Math.abs(event.deltaY) < scrollThreshold) return;

    if (event.deltaY > 0) {
      scrollToSection(currentIndex + 1);
    } else {
      scrollToSection(currentIndex - 1);
    }
  };

  return { handleScroll };
}
