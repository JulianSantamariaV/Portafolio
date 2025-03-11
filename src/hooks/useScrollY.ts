import { useEffect, useState } from "react";

export function useScrollY() {
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [scrollingDown, setScrollingDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollingDown(currentScrollY > lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return scrollingDown;
}
