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

  if (mathString.includes('$')) {
    const parts = mathString.split(/(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$)/g);
    
    return (
      <span className={cn(block && "block overflow-x-auto overflow-y-hidden py-2 max-w-full", className)}>
        {parts.map((part, i) => {
          if (part.startsWith('$$') && part.endsWith('$$')) {
            return <BlockMath key={i} math={part.slice(2, -2)} />;
          } else if (part.startsWith('$') && part.endsWith('$')) {
            return <InlineMath key={i} math={part.slice(1, -1)} />;
          }
          return <span key={i}>{part}</span>;
        })}
      </span>
    );
  }

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
