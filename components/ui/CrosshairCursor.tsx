'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CrosshairCursor() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isClicking, setIsClicking] = useState(false);
  const [isTargeting, setIsTargeting] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only activate on devices with fine pointer (mouse)
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);

      // Check if hovering over a targetable game sprite
      const target = e.target as HTMLElement;
      if (target && target.closest('[data-game-target="true"]')) {
        setIsTargeting(true);
      } else {
        setIsTargeting(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      {/* Reticle / Crosshair */}
      <motion.div
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"
        style={{
          x: mousePos.x,
          y: mousePos.y,
        }}
        transition={{ type: 'spring', stiffness: 1000, damping: 50 }}
      >
        {/* Outer Ring */}
        <motion.div
          animate={{
            scale: isClicking ? 0.75 : isTargeting ? 1.3 : 1,
            rotate: isTargeting ? 45 : 0,
            borderColor: isTargeting ? '#ef4444' : '#00FF41',
          }}
          transition={{ duration: 0.15 }}
          className={`w-8 h-8 rounded-full border-2 transition-colors relative flex items-center justify-center ${
            isTargeting
              ? 'border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)]'
              : 'border-[#00FF41] shadow-[0_0_10px_rgba(0,255,65,0.6)]'
          }`}
        >
          {/* Crosshair Lines */}
          <div
            className={`absolute top-0 bottom-0 w-[1.5px] ${
              isTargeting ? 'bg-red-500' : 'bg-[#00FF41]'
            }`}
          />
          <div
            className={`absolute left-0 right-0 h-[1.5px] ${
              isTargeting ? 'bg-red-500' : 'bg-[#00FF41]'
            }`}
          />

          {/* Center target dot */}
          <div
            className={`w-1.5 h-1.5 rounded-full z-10 ${
              isTargeting ? 'bg-red-500 animate-ping' : 'bg-[#00FF41]'
            }`}
          />

          {/* Lock-on Corners when targeting an enemy */}
          {isTargeting && (
            <>
              <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-red-500" />
              <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-red-500" />
              <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-red-500" />
              <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-red-500" />
            </>
          )}
        </motion.div>

        {/* Small click shockwave */}
        {isClicking && (
          <motion.div
            initial={{ scale: 0.5, opacity: 1 }}
            animate={{ scale: 2.2, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`absolute inset-0 w-8 h-8 rounded-full border ${
              isTargeting ? 'border-red-500' : 'border-[#00FF41]'
            }`}
          />
        )}
      </motion.div>
    </div>
  );
}
