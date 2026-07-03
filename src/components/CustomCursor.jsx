import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const outlineX = useSpring(cursorX, springConfig);
  const outlineY = useSpring(cursorY, springConfig);
  
  const dotSpringConfig = { damping: 15, stiffness: 400, mass: 0.3 };
  const dotX = useSpring(cursorX, dotSpringConfig);
  const dotY = useSpring(cursorY, dotSpringConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleElementHover = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('[role="button"]') ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('hoverable')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleElementHover);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleElementHover);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorX, cursorY, isVisible]);

  return (
    <>
      {/* Outline circle */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border-2 border-primary-400/60"
        style={{
          x: outlineX,
          y: outlineY,
          width: isHovering ? 60 : 40,
          height: isHovering ? 60 : 40,
          marginLeft: isHovering ? -30 : -20,
          marginTop: isHovering ? -30 : -20,
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: isClicking ? 0.8 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
      
      {/* Center dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-primary-400"
        style={{
          x: dotX,
          y: dotY,
          width: isHovering ? 4 : 8,
          height: isHovering ? 4 : 8,
          marginLeft: isHovering ? -2 : -4,
          marginTop: isHovering ? -2 : -4,
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: isClicking ? 0.5 : 1,
          boxShadow: isHovering 
            ? '0 0 20px rgba(139, 92, 246, 0.8), 0 0 40px rgba(139, 92, 246, 0.4)' 
            : '0 0 10px rgba(139, 92, 246, 0.5)',
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Trail effect */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997] rounded-full bg-primary-500/10 blur-xl"
        style={{
          x: outlineX,
          y: outlineY,
          width: 80,
          height: 80,
          marginLeft: -40,
          marginTop: -40,
          opacity: isVisible ? 0.5 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </>
  );
};

export default CustomCursor;