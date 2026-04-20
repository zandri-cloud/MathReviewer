import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

export function ResultGlassScreen({ score, total, onClose, onReview }: { score: number, total: number, onClose: () => void, onReview: () => void }) {
  const percentage = (score / total) * 100;
  const passed = percentage >= 50; // Arbitrary passing threshold

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center h-full p-8 text-center"
    >
      <div className={cn(
        "w-48 h-48 rounded-full flex items-center justify-center mb-8 shadow-2xl border-4 backdrop-blur-xl",
        passed ? "bg-green-500/20 border-green-500/50" : "bg-red-500/20 border-red-500/50"
      )}>
        <span className={cn(
          "text-6xl font-bold font-mono tracking-tighter",
          passed ? "text-green-400" : "text-red-400"
        )}>
          {score}
        </span>
      </div>
      
      <h1 className="text-5xl font-black tracking-tighter mb-4 text-on-surface">
        {passed ? "YOU ARE READY" : "YOU ARE SO COOKED BRO.. 💀💀"}
      </h1>
      
      <p className="text-xl text-on-surface-variant font-serif italic mb-12">
        {passed ? "Excellent work. The calculus gods smile upon you." : "Time to hit the books again."}
      </p>
      
      <div className="flex gap-4">
        <button 
          onClick={onReview}
          className="px-12 py-4 rounded-full bg-primary text-white font-bold uppercase tracking-widest text-sm hover:bg-primary-container transition-all shadow-lg"
        >
          Review Exam
        </button>
        <button 
          onClick={onClose}
          className="px-12 py-4 rounded-full bg-surface-container-lowest text-on-surface font-bold uppercase tracking-widest text-sm hover:bg-surface-container-low transition-all border border-outline-variant/30 shadow-lg"
        >
          Return to Hub
        </button>
      </div>
    </motion.div>
  );
}
