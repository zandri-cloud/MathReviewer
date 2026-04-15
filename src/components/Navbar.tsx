import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import { useTheme } from '../lib/useTheme';

export function Navbar() {
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Calculus Hub', path: '/topics' },
  ];

  return (
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
      </div>

      <div className="flex items-center gap-4">
        <button 
          onClick={toggleTheme}
          className="p-2 text-secondary hover:bg-surface-container-high/50 rounded-full transition-colors active:scale-95 flex items-center justify-center"
          aria-label="Toggle Dark Mode"
        >
          <span className="material-symbols-outlined">
            {isDark ? 'light_mode' : 'dark_mode'}
          </span>
        </button>
      </div>
    </nav>
  );
}
