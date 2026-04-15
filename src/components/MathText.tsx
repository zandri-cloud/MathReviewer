import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

interface MathTextProps {
  math: string;
  block?: boolean;
  className?: string;
}

export function MathText({ math, block = false, className }: MathTextProps) {
  if (block) {
    return (
      <div className={className}>
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
