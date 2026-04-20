import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MathText } from '../components/MathText';
import { formulas, Formula } from '../data/calculusData';
import { MagicHexagon } from '../components/MagicHexagon';
import { cn } from '../lib/utils';

export function FormulaReference() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFormulas = formulas.filter(f => 
    f.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    f.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Group by category
  const groupedFormulas = filteredFormulas.reduce((acc, formula) => {
    if (!acc[formula.category]) acc[formula.category] = [];
    acc[formula.category].push(formula);
    return acc;
  }, {} as Record<string, typeof formulas>);

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-5xl mx-auto w-full">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tighter mb-4">Formula Reference</h1>
          <p className="text-secondary font-serif text-xl mb-8">Search and review essential calculus and algebra formulas.</p>
          
          <div className="max-w-xl mx-auto relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-secondary">search</span>
            <input 
              type="text" 
              placeholder="Search formulas (e.g., 'Power Rule', 'Integrals')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-surface-container-lowest ghost-border rounded-full py-4 pl-12 pr-6 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-sm transition-all"
            />
          </div>
        </div>

        {!searchQuery && (
          <div className="mb-16">
            <MagicHexagon />
          </div>
        )}

        {Object.entries(groupedFormulas).map(([category, catFormulas]) => (
          <div key={category}>
            <CategorySection category={category} formulas={catFormulas} />
          </div>
        ))}

        {filteredFormulas.length === 0 && (
          <div className="text-center py-20 text-secondary">
            <span className="material-symbols-outlined text-6xl mb-4 opacity-50">search_off</span>
            <p className="text-lg font-serif">No formulas found matching "{searchQuery}".</p>
          </div>
        )}
      </motion.div>
    </div>
  );
}

function CategorySection(props: { category: string, formulas: Formula[] }) {
  const { category, formulas } = props;
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-12">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left mb-6 text-primary border-b border-outline-variant/20 pb-2 md:cursor-default md:pointer-events-none"
      >
        <h2 className="text-2xl font-bold">{category}</h2>
        <span className="material-symbols-outlined md:hidden">
          {isOpen ? 'expand_less' : 'expand_more'}
        </span>
      </button>
      
      <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-6", isOpen ? "block" : "hidden md:grid")}>
        {formulas.map(formula => (
          <div key={formula.id} className="bg-surface-container-lowest ghost-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-on-surface mb-4">{formula.name}</h3>
            <div className="bg-surface-container-low/50 rounded-xl p-4 flex justify-center overflow-x-auto no-scrollbar">
              <MathText block math={formula.latex} className="text-lg" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
