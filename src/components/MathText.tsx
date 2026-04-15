import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import { cn } from '../lib/utils';

interface MathTextProps {
  math: string;
  block?: boolean;
  className?: string;
}

export function MathText({ math, block = false, className }: MathTextProps) {
  if (block) {
    return (
      <div className={cn("overflow-x-auto overflow-y-hidden py-2 max-w-full", className)}>
        <BlockMath math={math} />
      </div>
    );
  }
  
  return (
    <span className={className}>
      <InlineMath math={math} />
    </span>
  );
}
