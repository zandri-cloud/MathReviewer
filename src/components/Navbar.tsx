import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import { useTheme } from '../lib/useTheme';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar({ onStartExam, onStartPractice }: { onStartExam?: () => void, onStartPractice?: () => void }) {
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Calculus Hub', path: '/topics' },
    { label: 'Formulas', path: '/formulas' },
  ];

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl rounded-full px-6 py-2 z-50 glass-panel shadow-[0_8px_32px_rgba(0,0,0,0.06)] ghost-border flex justify-between items-center transition-transform">
        <Link to="/" className="text-xl font-bold tracking-tighter text-on-surface font-sans">
          The Digital Scholar
        </Link>
        
        <div className="hidden md:flex items-center gap-8 font-sans font-medium tracking-tight">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-3 py-1 rounded-lg transition-all duration-300",
                  isActive 
                    ? "text-primary border-b-2 border-primary rounded-none pb-1" 
                    : "text-secondary hover:text-on-surface hover:bg-surface-container-high/50 active:scale-95"
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <button 
            onClick={onStartPractice}
            className="px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-bold uppercase tracking-widest text-xs hover:bg-secondary/20 transition-colors border border-secondary/20 shadow-sm"
          >
            Practice Mode
          </button>
          <button 
            onClick={onStartExam}
            className="px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold uppercase tracking-widest text-xs hover:bg-primary/20 transition-colors border border-primary/20 shadow-sm"
          >
            Quiz Mode
          </button>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 text-secondary hover:bg-surface-container-high/50 rounded-full transition-colors active:scale-95 flex items-center justify-center"
            aria-label="Toggle Dark Mode"
          >
            <span className="material-symbols-outlined">
              {isDark ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-secondary hover:bg-surface-container-high/50 rounded-full transition-colors active:scale-95 flex items-center justify-center"
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-surface/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-8 p-6"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className="text-2xl font-bold text-on-surface hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-4 w-full max-w-xs">
              <button 
                onClick={() => { onStartPractice?.(); closeMenu(); }}
                className="w-full py-4 rounded-2xl bg-secondary/10 text-secondary font-bold uppercase tracking-widest text-sm border border-secondary/20"
              >
                Practice Mode
              </button>
              <button 
                onClick={() => { onStartExam?.(); closeMenu(); }}
                className="w-full py-4 rounded-2xl bg-primary/10 text-primary font-bold uppercase tracking-widest text-sm border border-primary/20"
              >
                Quiz Mode
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
