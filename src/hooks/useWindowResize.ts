'use client'
import { useState, useLayoutEffect } from 'react';

export function useWindowResize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0
  });
  const handleSize = (event: UIEvent) => {
    const target = event.target as Window;
    setWindowSize({
      width: target.innerWidth,
      height: target.innerHeight,
    });
  };

  useLayoutEffect(() => {
    window.addEventListener('resize', handleSize);
    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, []);

  return windowSize;
}
