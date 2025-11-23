import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const Cursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Use MotionValues for performance instead of state
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  // Smooth spring animation
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', moveMouse);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Main Cursor Dot */}
      <motion.div
        style={{ 
          x, 
          y,
          translateX: '-50%',
          translateY: '-50%'
        }}
        className={`fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference`}
      >
        <motion.div 
          animate={{ 
            scale: isHovered ? 4 : 1,
            backgroundColor: isHovered ? '#ffffff' : '#ffffff' 
          }}
          transition={{ duration: 0.2 }}
          className="w-4 h-4 bg-white rounded-full"
        />
      </motion.div>
      
      {/* Secondary Ring (Optional for more "tech" feel) */}
      <motion.div
         style={{ 
          x, 
          y,
          translateX: '-50%',
          translateY: '-50%'
        }}
        className="fixed top-0 left-0 z-[9998] pointer-events-none mix-blend-difference"
      >
         <motion.div 
            animate={{ scale: isHovered ? 0 : 1 }}
            className="w-12 h-12 border border-white rounded-full opacity-20"
         />
      </motion.div>
    </>
  );
};

export default Cursor;