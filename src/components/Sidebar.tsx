import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import { TopicData, categories } from '../data/calculusData';

interface SidebarProps {
  topics: TopicData[];
  onAddTopic: () => void;
}

export function Sidebar({ topics, onAddTopic }: SidebarProps) {
  const location = useLocation();

  return (
    <aside className="hidden lg:flex flex-col gap-2 p-4 rounded-3xl h-[calc(100vh-120px)] w-72 bg-surface-container-low/50 backdrop-blur-md sticky top-24 ghost-border">
      <div className="mb-4 px-4">
        <p className="text-primary font-bold uppercase text-[10px] tracking-widest mb-1">Calculus Hub</p>
        <p className="text-secondary text-xs italic font-serif">Theory & Problems</p>
      </div>
      
      <div className="flex flex-col gap-6 flex-1 overflow-y-auto no-scrollbar pb-4">
        {categories.map(category => {
          const categoryTopics = topics.filter(t => t.categoryId === category.id);
          if (categoryTopics.length === 0) return null;
          
          return (
            <div key={category.id} className="flex flex-col gap-1">
              <h3 className="px-4 text-[11px] font-bold uppercase tracking-widest text-secondary/70 mb-2">
                {category.title}
              </h3>
              {categoryTopics.map((topic) => {
                const isActive = location.pathname.includes(`/topics/${topic.id}`);
                return (
                  <Link
                    key={topic.id}
                    to={`/topics/${topic.id}`}
                    className={cn(
                      "px-4 py-2.5 flex items-center gap-3 transition-all duration-300 rounded-xl text-sm font-medium",
                      isActive 
                        ? "bg-surface-container-lowest text-primary shadow-sm" 
                        : "text-secondary hover:bg-surface-container-lowest/50 hover:translate-x-1"
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

        <div className="flex flex-col gap-1">
          <h3 className="px-4 text-[11px] font-bold uppercase tracking-widest text-secondary/70 mb-2">
            Resources
          </h3>
          <Link
            to="/formulas"
            className={cn(
              "px-4 py-2.5 flex items-center gap-3 transition-all duration-300 rounded-xl text-sm font-medium",
              location.pathname === '/formulas'
                ? "bg-surface-container-lowest text-primary shadow-sm" 
                : "text-secondary hover:bg-surface-container-lowest/50 hover:translate-x-1"
            )}
          >
            <span className="material-symbols-outlined text-lg">functions</span>
            Formula Reference
          </Link>
        </div>
      </div>

      <div className="mt-auto pt-4 border-t border-outline-variant/20">
        <button 
          onClick={onAddTopic}
          className="w-full px-4 py-3 flex items-center justify-center gap-2 transition-all duration-300 rounded-xl text-sm font-medium bg-primary text-white hover:bg-primary-container active:scale-95 shadow-sm"
        >
          <span className="material-symbols-outlined text-sm">add</span>
          Add Topic
        </button>
      </div>
    </aside>
  );
}
