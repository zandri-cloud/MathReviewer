import React from 'react';
import { motion } from 'motion/react';

export function MacGlassShell({ children, onClose }: { children: React.ReactNode, onClose: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/40 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-6xl h-full max-h-[90vh] rounded-3xl bg-surface-container-lowest/70 backdrop-blur-2xl border border-outline-variant/30 shadow-[0_32px_64px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col">
        {/* macOS Window Controls */}
        <div className="absolute top-4 left-4 flex gap-2 z-10">
          <button onClick={onClose} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-sm" />
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-hidden relative">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
