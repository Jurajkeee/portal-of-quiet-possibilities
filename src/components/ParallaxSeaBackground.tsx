
import React, { useEffect, useRef } from 'react';

const ParallaxSeaBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const scrollY = window.scrollY;
      const waves = containerRef.current.querySelectorAll('.wave');
      
      waves.forEach((wave, index) => {
        const htmlWave = wave as HTMLElement;
        const speed = 0.2 + (index * 0.1);
        htmlWave.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 w-full h-full overflow-hidden -z-20 opacity-60"
    >
      <div className="wave absolute w-[200%] h-[80px] bottom-[25%] left-0 bg-[rgba(255,255,255,0.2)] animate-wave"></div>
      <div className="wave absolute w-[200%] h-[100px] bottom-[20%] left-0 bg-[rgba(255,255,255,0.1)] animate-wave" style={{ animationDelay: '1s', animationDuration: '18s' }}></div>
      <div className="wave absolute w-[200%] h-[120px] bottom-[15%] left-0 bg-[rgba(255,255,255,0.05)] animate-wave" style={{ animationDelay: '2s', animationDuration: '20s' }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic via-cosmic to-black/70"></div>
    </div>
  );
};

export default ParallaxSeaBackground;
