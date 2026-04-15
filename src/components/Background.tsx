import React from 'react';
import { motion } from 'motion/react';

export function Background() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-surface transition-colors duration-500">
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-primary/10 blur-[100px]"
      />
      <motion.div
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 150, -50, 0],
          scale: [1, 0.9, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-[10%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-tertiary/10 blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, 80, -100, 0],
          y: [0, 80, 100, 0],
          scale: [1, 1.5, 0.9, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[40%] left-[60%] w-[30vw] h-[30vw] rounded-full bg-primary-container/10 blur-[90px]"
      />
    </div>
  );
}
