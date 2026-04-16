import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

export function NavigationDock({ currentIndex, total, onNext, onPrev, onSubmit }: { currentIndex: number, total: number, onNext: () => void, onPrev: () => void, onSubmit: () => void }) {
  return (
    <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center justify-between sm:justify-center gap-2 sm:gap-4 bg-surface-container-low/80 backdrop-blur-2xl px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-outline-variant/30 shadow-[0_8px_32px_rgba(0,0,0,0.1)] w-[95%] sm:w-auto max-w-full">
      <button 
        onClick={onPrev} 
        disabled={currentIndex === 0}
        className="w-10 h-10 shrink-0 rounded-full flex items-center justify-center bg-surface-container-lowest/50 hover:bg-surface-container-lowest transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-on-surface"
      >
        <span className="material-symbols-outlined">chevron_left</span>
      </button>
      
      <div className="flex gap-1.5 sm:gap-2 overflow-x-auto hide-scrollbar px-2">
        {Array.from({ length: total }).map((_, i) => (
          <div 
            key={i} 
            className={cn(
              "w-2 h-2 shrink-0 rounded-full transition-all duration-300",
              i === currentIndex ? "bg-primary scale-125" : "bg-outline-variant/50"
            )} 
          />
        ))}
      </div>
      
      {currentIndex < total - 1 ? (
        <button 
          onClick={onNext} 
          className="w-10 h-10 shrink-0 rounded-full flex items-center justify-center bg-surface-container-lowest/50 hover:bg-surface-container-lowest transition-colors text-on-surface"
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      ) : (
        <button 
          onClick={onSubmit} 
          className="px-4 sm:px-6 py-2 shrink-0 rounded-full bg-primary text-white font-bold uppercase tracking-widest text-[10px] sm:text-xs hover:bg-primary-container transition-colors shadow-md"
        >
          Finish
        </button>
      )}
    </div>
  );
}
