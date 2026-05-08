import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MathText } from './MathText';
import { cn } from '../lib/utils';

type Mode = 'trig' | 'hyperbolic';

interface NodeData {
  id: string;
  trig: string;
  hyp: string;
  x: number;
  y: number;
  derivTrig: string;
  derivHyp: string;
}

const nodes: NodeData[] = [
  { id: 'sin', trig: '\\sin x', hyp: '\\sinh x', x: -1, y: -1, derivTrig: '\\cos x', derivHyp: '\\cosh x' },
  { id: 'cos', trig: '\\cos x', hyp: '\\cosh x', x: 1, y: -1, derivTrig: '-\\sin x', derivHyp: '\\sinh x' },
  { id: 'tan', trig: '\\tan x', hyp: '\\tanh x', x: -2, y: 0, derivTrig: '\\sec^2 x', derivHyp: '\\text{sech}^2 x' },
  { id: '1', trig: '1', hyp: '1', x: 0, y: 0, derivTrig: '0', derivHyp: '0' },
  { id: 'cot', trig: '\\cot x', hyp: '\\coth x', x: 2, y: 0, derivTrig: '-\\csc^2 x', derivHyp: '-\\text{csch}^2 x' },
  { id: 'sec', trig: '\\sec x', hyp: '\\text{sech } x', x: -1, y: 1, derivTrig: '\\sec x \\tan x', derivHyp: '-\\text{sech } x \\tanh x' },
  { id: 'csc', trig: '\\csc x', hyp: '\\text{csch } x', x: 1, y: 1, derivTrig: '-\\csc x \\cot x', derivHyp: '-\\text{csch } x \\coth x' },
];

export function MagicHexagon() {
  const [mode, setMode] = useState<Mode>('trig');
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const handleNodeClick = (id: string) => {
    setActiveNode(activeNode === id ? null : id);
  };

  const getActiveNodeData = () => nodes.find(n => n.id === activeNode);

  return (
    <div className="bg-surface-container-lowest rounded-3xl p-6 lg:p-12 shadow-sm ghost-border flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-6 text-center">Interactive Magic Hexagon</h2>
      
      <div className="flex gap-4 mb-12 bg-surface-container-low p-2 rounded-full">
        <button
          onClick={() => { setMode('trig'); setActiveNode(null); }}
          className={cn(
            "px-6 py-2 rounded-full text-sm font-semibold transition-all",
            mode === 'trig' ? "bg-primary text-white shadow-md" : "text-on-surface-variant hover:text-on-surface"
          )}
        >
          Trigonometric
        </button>
        <button
          onClick={() => { setMode('hyperbolic'); setActiveNode(null); }}
          className={cn(
            "px-6 py-2 rounded-full text-sm font-semibold transition-all",
            mode === 'hyperbolic' ? "bg-primary text-white shadow-md" : "text-on-surface-variant hover:text-on-surface"
          )}
        >
          Hyperbolic
        </button>
      </div>

      <div className="relative w-full max-w-md aspect-square mb-8">
        {/* Hexagon SVG Background */}
        <svg className="absolute inset-0 w-full h-full" viewBox="-3 -3 6 6">
          <polygon 
            points="0,-2 1.732,-1 1.732,1 0,2 -1.732,1 -1.732,-1" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.05" 
            className="text-outline-variant/30"
          />
          <line x1="-1.732" y1="-1" x2="1.732" y2="1" stroke="currentColor" strokeWidth="0.02" className="text-outline-variant/30" />
          <line x1="-1.732" y1="1" x2="1.732" y2="-1" stroke="currentColor" strokeWidth="0.02" className="text-outline-variant/30" />
          <line x1="0" y1="-2" x2="0" y2="2" stroke="currentColor" strokeWidth="0.02" className="text-outline-variant/30" />
        </svg>

        {/* Nodes */}
        {nodes.map((node) => {
          // Map abstract coordinates to SVG/CSS percentages
          // x: -2 to 2, y: -1 to 1
          const left = `${50 + node.x * 25}%`;
          const top = `${50 + node.y * 40}%`;
          const isActive = activeNode === node.id;
          const isCenter = node.id === '1';

          return (
            <motion.button
              key={node.id}
              onClick={() => handleNodeClick(node.id)}
              className={cn(
                "absolute -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm border-2",
                isActive ? "bg-primary border-primary text-white scale-110 z-10 shadow-lg" : 
                isCenter ? "bg-surface-container-high border-outline-variant text-on-surface" :
                "bg-surface-container border-outline-variant text-on-surface hover:border-primary/50 hover:scale-105"
              )}
              style={{ left, top }}
              whileHover={{ scale: isActive ? 1.1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MathText math={mode === 'trig' ? node.trig : node.hyp} className={cn("text-sm sm:text-base", isActive && "text-white")} />
            </motion.button>
          );
        })}
      </div>

      {/* Info Panel */}
      <div className="w-full max-w-lg min-h-[120px] bg-surface-container-low rounded-2xl p-4 sm:p-6 border border-outline-variant/20 flex flex-col items-center justify-center text-center overflow-hidden">
        <AnimatePresence mode="wait">
          {activeNode ? (
            <motion.div
              key={activeNode}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col items-center gap-4 w-full"
            >
              <div className="text-sm font-bold uppercase tracking-widest text-secondary">Derivative</div>
              <div className="flex items-center gap-3 sm:gap-4 text-base sm:text-xl max-w-full overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
                <MathText math={`\\frac{d}{dx}(${mode === 'trig' ? getActiveNodeData()?.trig : getActiveNodeData()?.hyp})`} className="shrink-0" />
                <span className="shrink-0">=</span>
                <MathText math={mode === 'trig' ? getActiveNodeData()?.derivTrig! : getActiveNodeData()?.derivHyp!} className="text-primary font-bold shrink-0" />
              </div>
              {activeNode !== '1' && (
                <p className="text-sm text-on-surface-variant mt-2">
                  Click other nodes to explore relationships, or click this node again to deselect.
                </p>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-on-surface-variant"
            >
              Click any function on the hexagon to reveal its derivative.
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
