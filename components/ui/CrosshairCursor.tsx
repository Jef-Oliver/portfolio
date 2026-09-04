'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CrosshairCursor() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isClicking, setIsClicking] = useState(false);
  const [isTargeting, setIsTargeting] = useState(false);

  useEffect(() => {
    // Only activate on devices with fine pointer (mouse)
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      // Check if hovering over a targetable game sprite
      const target = e.target as HTMLElement;
      if (target && target.closest('[data-game-target="true"]')) {
        setIsTargeting(true);
      } else {
        setIsTargeting(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = (e: MouseEvent) => {
      setIsClicking(false);
      const target = e.target as HTMLElement;
      if (!target || !target.closest('[data-game-target="true"]')) {
        setIsTargeting(false);
      }
    };
    const handleMouseLeave = () => setIsTargeting(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      <AnimatePresence>
        {isTargeting && (
          <motion.div
            key="targeting-reticle"
            className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              x: mousePos.x,
              y: mousePos.y,
            }}
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.4, opacity: 0 }}
            transition={{ duration: 0.12 }}
          >
            {/* Outer Lock-on Ring */}
            <motion.div
              animate={{
                scale: isClicking ? 0.8 : 1.25,
                rotate: 45,
              }}
              transition={{ duration: 0.1 }}
              className="w-9 h-9 rounded-full border-2 border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.9)] relative flex items-center justify-center"
            >
              {/* Crosshair Lines */}
              <div className="absolute top-0 bottom-0 w-[1.5px] bg-red-500" />
              <div className="absolute left-0 right-0 h-[1.5px] bg-red-500" />

              {/* Center target dot */}
              <div className="w-1.5 h-1.5 rounded-full z-10 bg-red-500 animate-ping" />

              {/* Lock-on Corners */}
              <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-red-500" />
              <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-red-500" />
              <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-red-500" />
              <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-red-500" />
            </motion.div>

            {/* Click shockwave */}
            {isClicking && (
              <motion.div
                initial={{ scale: 0.6, opacity: 1 }}
                animate={{ scale: 2.2, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 w-9 h-9 rounded-full border border-red-500"
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

