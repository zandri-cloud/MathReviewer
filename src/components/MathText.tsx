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
  const mathString = typeof math === 'string' ? math : String(math || '');

  if (block) {
    return (
      <div className={cn("overflow-x-auto overflow-y-hidden py-2 max-w-full", className)}>
        <BlockMath math={mathString} />
      </div>
    );
  }
  
  return (
    <span className={className}>
      <InlineMath math={mathString} />
    </span>
  );
}
