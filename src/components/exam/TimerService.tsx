import React, { useEffect } from 'react';
import { motion } from 'motion/react';

export function TimerService({ timeLeft, setTimeLeft, onTimeUp }: { timeLeft: number, setTimeLeft: React.Dispatch<React.SetStateAction<number>>, onTimeUp: () => void }) {
  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }
    
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    
    return () => clearInterval(timer);
  }, [timeLeft, setTimeLeft, onTimeUp]);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="absolute top-4 right-4 z-10 bg-surface-container-low/50 backdrop-blur-md px-4 py-2 rounded-full border border-outline-variant/30 shadow-sm">
      <span className="font-mono text-lg font-medium text-on-surface tracking-wider">
        {formatTime(timeLeft)}
      </span>
    </div>
  );
}
