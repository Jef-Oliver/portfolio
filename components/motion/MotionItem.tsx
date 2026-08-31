'use client';

import { motion } from 'framer-motion';

interface MotionItemProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
}

const getVariants = (direction: MotionItemProps['direction'], distance = 30) => {
  const offsets: Record<string, { x?: number; y?: number }> = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  const offset = offsets[direction ?? 'up'];

  return {
    hidden: {
      opacity: 0,
      ...offset,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  };
};

export default function MotionItem({
  children,
  className,
  direction = 'up',
  delay,
}: MotionItemProps) {
  const variants = getVariants(direction);

  return (
    <motion.div
      className={className}
      variants={variants}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </motion.div>
  );
}

// Standalone version (not inside a MotionContainer)
export function MotionReveal({
  children,
  className,
  direction = 'up',
  delay = 0,
  duration = 0.6,
}: MotionItemProps) {
  const variants = getVariants(direction);

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      transition={{ delay, duration, ease: 'easeOut' as const }}
    >
      {children}
    </motion.div>
  );
}
