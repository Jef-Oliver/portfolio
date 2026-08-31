'use client';

import { motion } from 'framer-motion';

interface MotionContainerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerChildren?: number;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: (stagger: number = 0.1) => ({
    opacity: 1,
    transition: {
      staggerChildren: stagger,
      delayChildren: 0,
    },
  }),
};

export default function MotionContainer({
  children,
  className,
  staggerChildren = 0.1,
}: MotionContainerProps) {
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      custom={staggerChildren}
    >
      {children}
    </motion.div>
  );
}
