import React from 'react';
import { motion } from 'motion/react';
import { MathText } from '../MathText';
import { MathKeyboard } from './MathKeyboard';
import { ExamProblem } from '../../data/examData';
import { cn } from '../../lib/utils';

export function QuestionCardGlassUI({ question, index, total, answer, onAnswerChange }: { question: ExamProblem, index: number, total: number, answer: string, onAnswerChange: (ans: string) => void }) {
  return (
    <motion.div 
      key={question.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-4xl max-h-full overflow-y-auto bg-surface-container-low/40 backdrop-blur-3xl rounded-3xl p-5 sm:p-8 md:p-12 border border-outline-variant/20 shadow-2xl flex flex-col gap-6 sm:gap-8"
    >
      <div className="flex justify-between items-center border-b border-outline-variant/20 pb-4">
        <span className="text-secondary font-bold tracking-widest uppercase text-xs sm:text-sm">Question {index + 1} of {total}</span>
        <span className={cn(
          "px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider",
          question.difficulty === 'easy' ? "bg-tertiary/20 text-tertiary" :
          question.difficulty === 'medium' ? "bg-primary/20 text-primary" :
          question.difficulty === 'hard' ? "bg-orange-500/20 text-orange-500" :
          question.difficulty === 'very_hard' ? "bg-red-500/20 text-red-500" :
          "bg-purple-500/20 text-purple-500"
        )}>
          {question.difficulty.replace('_', ' ')}
        </span>
      </div>
      
      <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif text-on-surface leading-relaxed min-h-[100px] sm:min-h-[120px] flex items-center justify-center overflow-x-auto py-4">
        <MathText block math={question.statement} className="text-center" />
      </div>
      
      <div className="mt-4 sm:mt-8">
        <label className="block text-xs sm:text-sm font-medium text-secondary mb-2 uppercase tracking-widest">Your Answer</label>
        <MathKeyboard onInsert={(text) => onAnswerChange(answer + text)} />
        <div className="relative">
          <input 
            type="text" 
            value={answer}
            onChange={(e) => onAnswerChange(e.target.value)}
            placeholder="e.g. y' = 2x"
            className="w-full bg-surface-container-lowest/50 backdrop-blur-md border border-outline-variant/30 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg font-mono text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all shadow-inner"
          />
        </div>
      </div>
    </motion.div>
  );
}
