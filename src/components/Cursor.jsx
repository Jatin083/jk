import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Cursor = () => {
  const cursorRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      gsap.to(cursorRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.2,
        ease: 'power1.out',
        opacity: 1,
        
      });
      setIsVisible(true);
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`h-[18px] w-[18px] bg-white rounded-full fixed z-[9999] ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ 
        transition: 'opacity 0.5s ease-in-out',
        mixBlendMode: 'difference' // This will blend the cursor with the background
      }}
    ></div>
  );
};

export default Cursor;
