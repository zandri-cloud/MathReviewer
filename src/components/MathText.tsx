import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
<<<<<<< HEAD
=======
import { cn } from '../lib/utils';
>>>>>>> 93d8286 (V3)

interface MathTextProps {
  math: string;
  block?: boolean;
  className?: string;
}

export function MathText({ math, block = false, className }: MathTextProps) {
  if (block) {
    return (
<<<<<<< HEAD
      <div className={className}>
=======
      <div className={cn("overflow-x-auto overflow-y-hidden py-2 max-w-full", className)}>
>>>>>>> 93d8286 (V3)
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
