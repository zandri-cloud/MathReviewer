import React, { useState } from 'react';
import { motion } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

const SOLVER_DATA: Record<string, string> = {
  "Algebraic Manipulation": `
### Algebraic Manipulation
**Pattern:**
1. Substitute $x=a$. If $0/0$, you have a removable discontinuity. 
2. Factor quadratics/polynomials. 
3. If square roots exist, multiply by the conjugate.
4. Simplify and re-substitute.

### Example Solution
$$\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$$
1. Substitute $x=2$: $\\frac{4-4}{2-2} = \\frac{0}{0}$ (Indeterminate).
2. Factor: $x^2 - 4 = (x-2)(x+2)$.
3. Simplify: $\\frac{(x-2)(x+2)}{x-2} = x+2$.
4. Re-substitute: $2+2 = 4$.

### Explanation
Think of this as "unmasking" the function. We know it's undefined at the point of interest, but simplification reveals the hidden behavior. Use conjugates whenever you see $\\sqrt{x \\pm a}$.
  `,
  "One-Sided Limits": `
### One-Sided Limits
**Pattern:**
1. Check $\\lim_{x \\to a^-} f(x)$ (from the left).
2. Check $\\lim_{x \\to a^+} f(x)$ (from the right).
3. If both exist and are equal, the limit exists. Otherwise, it DNE.

### Example Solution
$$\\lim_{x \\to 3^+} \\frac{|x - 3|}{x - 3}$$
1. Since $x > 3$, $x-3 > 0$, so $|x-3| = x-3$.
2. $\\frac{x-3}{x-3} = 1$.
3. Limit is 1.

### Explanation
One-sided limits help handle piecewise functions and absolute values. Always think: "What is the function doing just before (left) and just after (right) the point?"
  `,
  "Limits at Infinity": `
### Limits at Infinity
**Pattern:**
1. If $\\lim_{x \\to \\infty} \\frac{P(x)}{Q(x)}$:
   - Deg(P) < Deg(Q): Limit is 0.
   - Deg(P) = Deg(Q): Limit is ratio of leading coefficients.
   - Deg(P) > Deg(Q): Limit is $\\pm\\infty$.

### Example Solution
$$\\lim_{x \\to \\infty} \\frac{3x^2 + 1}{x^2 + 5}$$
1. Both degrees are 2.
2. Ratio of leading coefficients: $3/1 = 3$.

### Explanation
This is all about the "fight" for dominance between the numerator and denominator. Higher degree polynomials grow faster and decide the outcome of the limit.
  `,
  "Infinite Limits": `
### Infinite Limits
**Pattern:**
1. Substitute $x=a$. If $c/0$ ($c \\ne 0$), you have a vertical asymptote.
2. Check approaching from left/right to determine $+\\infty$ or $-\\infty$.

### Example Solution
$$\\lim_{x \\to 1} \\frac{1}{(x-1)^2}$$
1. Substitute $x=1$: $1/0$.
2. $(x-1)^2$ is always positive near 1.
3. Limit is $\\infty$.

### Explanation
Division by zero isn't a problem, it's a feature! It tells us the function is blowing up to infinity.
  `,
  "Indeterminate Forms": `
### Indeterminate Forms
**Pattern:**
1. If limiting to $0/0$ or $\\infty/\\infty$, use L'Hôpital's Rule.
2. $\\lim \\frac{f(x)}{g(x)} = \\lim \\frac{f'(x)}{g'(x)}$.
3. Repeat if necessary.

### Example Solution
$$\\lim_{x \\to 0} \\frac{\\sin(x)}{x}$$
1. Form $0/0$.
2. Differentiate: $\\lim_{x \\to 0} \\frac{\\cos(x)}{1}$.
3. Substitute: $\\cos(0) = 1$.

### Explanation
L'Hôpital is your best friend when algebra fails. It allows you to look at the *rates of change* of the numerator and denominator to determine the limit.
  `
};

export const AIPatternSolver = () => {
  const types = Object.keys(SOLVER_DATA);
  const [limitType, setLimitType] = useState(types[0]);

  return (
    <div className="font-['Segoe_UI',sans-serif] space-y-6 p-4 sm:p-6 bg-surface-container-low rounded-3xl ghost-border overflow-hidden">
        <h3 className="text-xl font-bold text-on-surface">Smart Pattern Solver</h3>
        <p className="text-secondary text-sm">Select limit type to see solving patterns.</p>
        
        <select
            value={limitType}
            onChange={(e) => setLimitType(e.target.value)}
            className="bg-surface-container-lowest border border-outline-variant p-3 rounded-xl w-full sm:w-64"
        >
            {types.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
        
        <motion.div 
            key={limitType}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-sm dark:prose-invert max-w-none text-on-surface p-4 bg-surface-container-lowest rounded-2xl"
        >
            <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>{SOLVER_DATA[limitType]}</ReactMarkdown>
        </motion.div>
    </div>
  );
};
