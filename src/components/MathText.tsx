import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
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

  if (mathString.includes('$') || mathString.includes('**') || mathString.includes('\\text{') || mathString.includes('\n')) {
    // If it looks like it has markdown formatting, newlines, or mixed math/text, handle it gracefully.
    // For raw math blocks that got caught here, but shouldn't be markdown, we'll prefix/suffix with $$ if there's no $.
    let processedText = mathString;
    if (!mathString.includes('$') && !mathString.includes('**')) {
      // If it's pure math with \text or newlines, wrap in $$ so remark-math parses it.
      processedText = `$$\n${mathString}\n$$`;
    }
    
    return (
      <div className={cn("markdown-body", block ? "block overflow-x-auto overflow-y-hidden max-w-full" : "inline", className)}>
        <ReactMarkdown 
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeKatex]}
          components={{
            p: ({node, ...props}) => <span className={block ? "block mb-4 last:mb-0" : "inline"} {...props} />
          }}
        >
          {processedText}
        </ReactMarkdown>
      </div>
    );
  }

  if (block) {
    return (
      <div className={cn("overflow-x-auto overflow-y-hidden py-2 max-w-full whitespace-pre-wrap", className)}>
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

