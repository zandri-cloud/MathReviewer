import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import { TopicData, categories } from '../data/calculusData';

interface SidebarProps {
  topics: TopicData[];
}

export function Sidebar({ topics }: SidebarProps) {
  const location = useLocation();

  return (
    <aside className="flex flex-col gap-2 p-4 rounded-3xl h-auto lg:h-[calc(100vh-120px)] w-full lg:w-72 bg-surface-container-low/50 backdrop-blur-md lg:sticky lg:top-24 ghost-border min-w-0 max-w-full">
      <div className="hidden lg:block mb-4 px-4 shrink-0">
        <p className="text-primary font-bold uppercase text-[10px] tracking-widest mb-1">Calculus Hub</p>
        <p className="text-secondary text-xs italic font-serif">Theory & Problems</p>
      </div>
      
      <div className="flex flex-row lg:flex-col gap-2 lg:gap-6 flex-1 overflow-x-auto lg:overflow-y-auto pb-4 items-center lg:items-stretch w-full">
        {categories.map(category => {
          const categoryTopics = topics.filter(t => t.categoryId === category.id);
          if (categoryTopics.length === 0) return null;
          
          return (
            <div key={category.id} className="flex flex-row lg:flex-col gap-2 lg:gap-1 items-center lg:items-stretch shrink-0 lg:shrink">
              <h3 className="hidden lg:block px-4 text-[11px] font-bold uppercase tracking-widest text-secondary/70 mb-2">
                {category.title}
              </h3>
              {categoryTopics.map((topic) => {
                const isActive = location.pathname.includes(`/topics/${topic.id}`);
                return (
                  <Link
                    key={topic.id}
                    to={`/topics/${topic.id}`}
                    className={cn(
                      "px-4 py-2.5 flex items-center gap-3 transition-all duration-300 rounded-xl text-sm font-medium whitespace-nowrap shrink-0",
                      isActive 
                        ? "bg-surface-container-lowest text-primary shadow-sm" 
                        : "text-secondary hover:bg-surface-container-lowest/50 lg:hover:translate-x-1"
                    )}
                  >
                    <span className={cn("material-symbols-outlined text-lg", isActive && "text-primary")}>
                      {topic.icon}
                    </span>
                    {topic.title}
                  </Link>
                );
              })}
            </div>
          );
        })}

        <div className="flex flex-row lg:flex-col gap-2 lg:gap-1 items-center lg:items-stretch shrink-0 lg:shrink ml-auto lg:ml-0">
          <h3 className="hidden lg:block px-4 text-[11px] font-bold uppercase tracking-widest text-secondary/70 mb-2">
            Resources
          </h3>
          <Link
            to="/formulas"
            className={cn(
              "px-4 py-2.5 flex items-center gap-3 transition-all duration-300 rounded-xl text-sm font-medium whitespace-nowrap shrink-0",
              location.pathname === '/formulas'
                ? "bg-surface-container-lowest text-primary shadow-sm" 
                : "text-secondary hover:bg-surface-container-lowest/50 lg:hover:translate-x-1"
            )}
          >
            <span className="material-symbols-outlined text-lg">functions</span>
            Formula Reference
          </Link>
        </div>
      </div>
    </aside>
  );
}
