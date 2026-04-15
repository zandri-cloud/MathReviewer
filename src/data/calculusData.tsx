import React from 'react';
import { MathText } from '../components/MathText';

export interface Problem {
  id: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  statement: string;
  method?: string;
  solution: string;
  finalAnswer?: string;
  type?: 'multiple-choice' | 'free-response';
  options?: string[];
  correctAnswerIndex?: number;
}

export interface TopicData {
  id: string;
  categoryId: string;
  title: string;
  icon: string;
  description: string;
  theory: React.ReactNode;
  problems: Problem[];
}

export interface Category {
  id: string;
  title: string;
}

export interface Formula {
  id: string;
  category: string;
  name: string;
  latex: string;
  description?: string;
}

export const categories: Category[] = [
  { id: 'differential', title: 'Differential Calculus' },
];

export const formulas: Formula[] = [
  { id: 'f-pythagorean-1', category: 'Trigonometric Identities', name: 'Pythagorean Identity (Sine & Cosine)', latex: '\\sin^2\\theta + \\cos^2\\theta = 1' },
  { id: 'f-pythagorean-2', category: 'Trigonometric Identities', name: 'Pythagorean Identity (Tangent & Secant)', latex: '1 + \\tan^2\\theta = \\sec^2\\theta' },
  { id: 'f-pythagorean-3', category: 'Trigonometric Identities', name: 'Pythagorean Identity (Cotangent & Cosecant)', latex: '1 + \\cot^2\\theta = \\csc^2\\theta' },
  { id: 'f-prod-sum-1', category: 'Trigonometric Identities', name: 'Product to Sum (sin cos)', latex: '\\sin x \\cos y = \\frac{1}{2}[\\sin(x+y) + \\sin(x-y)]' },
  { id: 'f-prod-sum-2', category: 'Trigonometric Identities', name: 'Product to Sum (cos sin)', latex: '\\cos x \\sin y = \\frac{1}{2}[\\sin(x+y) - \\sin(x-y)]' },
  { id: 'f-prod-sum-3', category: 'Trigonometric Identities', name: 'Product to Sum (cos cos)', latex: '\\cos x \\cos y = \\frac{1}{2}[\\cos(x+y) + \\cos(x-y)]' },
  { id: 'f-prod-sum-4', category: 'Trigonometric Identities', name: 'Product to Sum (sin sin)', latex: '\\sin x \\sin y = \\frac{1}{2}[\\cos(x-y) - \\cos(x+y)]' },
  { id: 'f-sum-prod-1', category: 'Trigonometric Identities', name: 'Sum to Product (sin + sin)', latex: '\\sin x + \\sin y = 2\\sin\\left(\\frac{x+y}{2}\\right)\\cos\\left(\\frac{x-y}{2}\\right)' },
  { id: 'f-sum-prod-2', category: 'Trigonometric Identities', name: 'Sum to Product (sin - sin)', latex: '\\sin x - \\sin y = 2\\cos\\left(\\frac{x+y}{2}\\right)\\sin\\left(\\frac{x-y}{2}\\right)' },
  { id: 'f-sum-prod-3', category: 'Trigonometric Identities', name: 'Sum to Product (cos + cos)', latex: '\\cos x + \\cos y = 2\\cos\\left(\\frac{x+y}{2}\\right)\\cos\\left(\\frac{x-y}{2}\\right)' },
  { id: 'f-sum-prod-4', category: 'Trigonometric Identities', name: 'Sum to Product (cos - cos)', latex: '\\cos x - \\cos y = -2\\sin\\left(\\frac{x+y}{2}\\right)\\sin\\left(\\frac{x-y}{2}\\right)' },
  { id: 'f-half-sin', category: 'Trigonometric Identities', name: 'Half-Angle (Sine)', latex: '\\sin\\left(\\frac{\\theta}{2}\\right) = \\pm\\sqrt{\\frac{1-\\cos\\theta}{2}}' },
  { id: 'f-half-cos', category: 'Trigonometric Identities', name: 'Half-Angle (Cosine)', latex: '\\cos\\left(\\frac{\\theta}{2}\\right) = \\pm\\sqrt{\\frac{1+\\cos\\theta}{2}}' },
  { id: 'f-half-tan-1', category: 'Trigonometric Identities', name: 'Half-Angle (Tangent) 1', latex: '\\tan\\left(\\frac{\\theta}{2}\\right) = \\pm\\sqrt{\\frac{1-\\cos\\theta}{1+\\cos\\theta}}' },
  { id: 'f-half-tan-2', category: 'Trigonometric Identities', name: 'Half-Angle (Tangent) 2', latex: '\\tan\\left(\\frac{\\theta}{2}\\right) = \\frac{\\sin\\theta}{1+\\cos\\theta}' },
  { id: 'f-half-tan-3', category: 'Trigonometric Identities', name: 'Half-Angle (Tangent) 3', latex: '\\tan\\left(\\frac{\\theta}{2}\\right) = \\frac{1-\\cos\\theta}{\\sin\\theta}' },

  { id: 'f-tan-sum', category: 'Trigonometry', name: 'Tangent Sum Identity', latex: '\\tan(x+y) = \\frac{\\tan x + \\tan y}{1 - \\tan x \\tan y}' },
  { id: 'f-const', category: 'Derivatives', name: 'Constant Rule', latex: '\\frac{d}{dx}(c) = 0' },
  { id: 'f-power', category: 'Derivatives', name: 'Power Rule', latex: '\\frac{d}{dx}(x^n) = nx^{n-1}' },
  { id: 'f-sum', category: 'Derivatives', name: 'Sum Rule', latex: '\\frac{d}{dx}[f(x) \\pm g(x)] = f\'(x) \\pm g\'(x)' },
  { id: 'f-product', category: 'Derivatives', name: 'Product Rule', latex: '\\frac{d}{dx}[f(x)g(x)] = f\'(x)g(x) + f(x)g\'(x)' },
  { id: 'f-quotient', category: 'Derivatives', name: 'Quotient Rule', latex: '\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right] = \\frac{f\'(x)g(x) - f(x)g\'(x)}{[g(x)]^2}' },
  { id: 'f-chain', category: 'Derivatives', name: 'Chain Rule', latex: '\\frac{d}{dx}[f(g(x))] = f\'(g(x))g\'(x)' },
  { id: 'f-sin', category: 'Trigonometric', name: 'Derivative of Sine', latex: '\\frac{d}{dx}(\\sin x) = \\cos x' },
  { id: 'f-cos', category: 'Trigonometric', name: 'Derivative of Cosine', latex: '\\frac{d}{dx}(\\cos x) = -\\sin x' },
  { id: 'f-tan', category: 'Trigonometric', name: 'Derivative of Tangent', latex: '\\frac{d}{dx}(\\tan x) = \\sec^2 x' },
  { id: 'f-cot', category: 'Trigonometric', name: 'Derivative of Cotangent', latex: '\\frac{d}{dx}(\\cot x) = -\\csc^2 x' },
  { id: 'f-sec', category: 'Trigonometric', name: 'Derivative of Secant', latex: '\\frac{d}{dx}(\\sec x) = \\sec x \\tan x' },
  { id: 'f-csc', category: 'Trigonometric', name: 'Derivative of Cosecant', latex: '\\frac{d}{dx}(\\csc x) = -\\csc x \\cot x' },
  { id: 'f-arcsin', category: 'Inverse Trig', name: 'Derivative of Arcsine', latex: '\\frac{d}{dx}(\\arcsin x) = \\frac{1}{\\sqrt{1-x^2}}' },
  { id: 'f-arccos', category: 'Inverse Trig', name: 'Derivative of Arccosine', latex: '\\frac{d}{dx}(\\arccos x) = -\\frac{1}{\\sqrt{1-x^2}}' },
  { id: 'f-arctan', category: 'Inverse Trig', name: 'Derivative of Arctangent', latex: '\\frac{d}{dx}(\\arctan x) = \\frac{1}{1+x^2}' },
  { id: 'f-arccot', category: 'Inverse Trig', name: 'Derivative of Arccotangent', latex: '\\frac{d}{dx}(\\text{arccot } x) = -\\frac{1}{1+x^2}' },
  { id: 'f-arcsec', category: 'Inverse Trig', name: 'Derivative of Arcsecant', latex: '\\frac{d}{dx}(\\text{arcsec } x) = \\frac{1}{|x|\\sqrt{x^2-1}}' },
  { id: 'f-arccsc', category: 'Inverse Trig', name: 'Derivative of Arccosecant', latex: '\\frac{d}{dx}(\\text{arccsc } x) = -\\frac{1}{|x|\\sqrt{x^2-1}}' },
  { id: 'f-exp', category: 'Exponential & Log', name: 'Derivative of e^x', latex: '\\frac{d}{dx}(e^x) = e^x' },
  { id: 'f-exp-a', category: 'Exponential & Log', name: 'Derivative of a^x', latex: '\\frac{d}{dx}(a^x) = a^x \\ln a' },
  { id: 'f-ln', category: 'Exponential & Log', name: 'Derivative of ln(x)', latex: '\\frac{d}{dx}(\\ln x) = \\frac{1}{x}' },
  { id: 'f-log', category: 'Exponential & Log', name: 'Derivative of log_a(x)', latex: '\\frac{d}{dx}(\\log_a x) = \\frac{1}{x \\ln a}' },
  { id: 'f-sinh', category: 'Hyperbolic', name: 'Derivative of sinh(x)', latex: '\\frac{d}{dx}(\\sinh x) = \\cosh x' },
  { id: 'f-cosh', category: 'Hyperbolic', name: 'Derivative of cosh(x)', latex: '\\frac{d}{dx}(\\cosh x) = \\sinh x' },
  { id: 'f-tanh', category: 'Hyperbolic', name: 'Derivative of tanh(x)', latex: '\\frac{d}{dx}(\\tanh x) = \\text{sech}^2 x' },
  { id: 'f-coth', category: 'Hyperbolic', name: 'Derivative of coth(x)', latex: '\\frac{d}{dx}(\\coth x) = -\\text{csch}^2 x' },
  { id: 'f-sech', category: 'Hyperbolic', name: 'Derivative of sech(x)', latex: '\\frac{d}{dx}(\\text{sech } x) = -\\text{sech } x \\tanh x' },
  { id: 'f-csch', category: 'Hyperbolic', name: 'Derivative of csch(x)', latex: '\\frac{d}{dx}(\\text{csch } x) = -\\text{csch } x \\coth x' },
  { id: 'f-arsinh', category: 'Inverse Hyperbolic', name: 'Derivative of arsinh(x)', latex: '\\frac{d}{dx}(\\text{arsinh } x) = \\frac{1}{\\sqrt{x^2+1}}' },
  { id: 'f-arcosh', category: 'Inverse Hyperbolic', name: 'Derivative of arcosh(x)', latex: '\\frac{d}{dx}(\\text{arcosh } x) = \\frac{1}{\\sqrt{x^2-1}}' },
  { id: 'f-artanh', category: 'Inverse Hyperbolic', name: 'Derivative of artanh(x)', latex: '\\frac{d}{dx}(\\text{artanh } x) = \\frac{1}{1-x^2}' },
  { id: 'f-arcoth', category: 'Inverse Hyperbolic', name: 'Derivative of arcoth(x)', latex: '\\frac{d}{dx}(\\text{arcoth } x) = \\frac{1}{1-x^2}' },
  { id: 'f-arsech', category: 'Inverse Hyperbolic', name: 'Derivative of arsech(x)', latex: '\\frac{d}{dx}(\\text{arsech } x) = -\\frac{1}{x\\sqrt{1-x^2}}' },
  { id: 'f-arcsch', category: 'Inverse Hyperbolic', name: 'Derivative of arcsch(x)', latex: '\\frac{d}{dx}(\\text{arcsch } x) = -\\frac{1}{|x|\\sqrt{1+x^2}}' },
  { id: 'f-pythagorean', category: 'Right Triangle', name: 'Pythagorean Theorem', latex: 'a^2 + b^2 = c^2' },
  { id: 'f-soh', category: 'Right Triangle', name: 'Sine (SOH)', latex: '\\sin \\theta = \\frac{\\text{Opposite}}{\\text{Hypotenuse}}' },
  { id: 'f-cah', category: 'Right Triangle', name: 'Cosine (CAH)', latex: '\\cos \\theta = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}}' },
  { id: 'f-toa', category: 'Right Triangle', name: 'Tangent (TOA)', latex: '\\tan \\theta = \\frac{\\text{Opposite}}{\\text{Adjacent}}' },
  { id: 'f-tan-half', category: 'Trigonometric Identities', name: 'Tangent Half-Angle', latex: '\\tan\\left(\\frac{\\theta}{2}\\right) = \\frac{\\sin \\theta}{1 + \\cos \\theta} = \\frac{1 - \\cos \\theta}{\\sin \\theta}' },
  { id: 'f-cofunc-sin', category: 'Trigonometric Identities', name: 'Cofunction (Sine)', latex: '\\sin\\left(\\frac{\\pi}{2} - \\theta\\right) = \\cos \\theta' },
  { id: 'f-cofunc-cos', category: 'Trigonometric Identities', name: 'Cofunction (Cosine)', latex: '\\cos\\left(\\frac{\\pi}{2} - \\theta\\right) = \\sin \\theta' },
  { id: 'f-cofunc-tan', category: 'Trigonometric Identities', name: 'Cofunction (Tangent)', latex: '\\tan\\left(\\frac{\\pi}{2} - \\theta\\right) = \\cot \\theta' },
  { id: 'f-double-sin', category: 'Trigonometric Identities', name: 'Double Angle (Sine)', latex: '\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta' },
  { id: 'f-double-cos', category: 'Trigonometric Identities', name: 'Double Angle (Cosine)', latex: '\\cos(2\\theta) = \\cos^2\\theta - \\sin^2\\theta' },
  { id: 'f-double-tan', category: 'Trigonometric Identities', name: 'Double Angle (Tangent)', latex: '\\tan(2\\theta) = \\frac{2\\tan\\theta}{1 - \\tan^2\\theta}' },
];

export const initialTopics: TopicData[] = [
  {
    id: 'functions-graphs',
    categoryId: 'differential',
    title: 'Functions and Graphs',
    icon: 'polyline',
    description: 'Domain, range, and transformations of functions.',
    theory: (
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Domain and Range</h2>
          <p className="text-on-surface-variant mb-4">The domain of a function is the set of all possible input values (x-values) for which the function is defined. The range is the set of all possible output values (y-values).</p>
        </section>
      </div>
    ),
    problems: []
  },
  {
    id: 'limits',
    categoryId: 'differential',
    title: 'Limits',
    icon: 'start',
    description: 'Limit laws, one-sided limits, limits at infinity, infinite limits, indeterminate forms.',
    theory: (
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Limit Laws</h2>
          <div className="bg-surface-container-low/50 rounded-2xl p-6 mb-4">
            <MathText block math="\lim_{x \to a} [f(x) + g(x)] = \lim_{x \to a} f(x) + \lim_{x \to a} g(x)" />
          </div>
        </section>
      </div>
    ),
    problems: []
  },
  {
    id: 'continuity',
    categoryId: 'differential',
    title: 'Continuity',
    icon: 'timeline',
    description: 'Definition, types of discontinuity, continuity tests.',
    theory: (
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Definition of Continuity</h2>
          <p className="text-on-surface-variant mb-4">A function f is continuous at a point x = a if:</p>
          <div className="bg-surface-container-low/50 rounded-2xl p-6 mb-4">
            <MathText block math="\lim_{x \to a} f(x) = f(a)" />
          </div>
        </section>
      </div>
    ),
    problems: []
  },
  {
    id: 'derivative-definition',
    categoryId: 'differential',
    title: 'Derivative Definition',
    icon: 'architecture',
    description: 'Limit definition of the derivative.',
    theory: (
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Limit Definition</h2>
          <div className="bg-surface-container-low/50 rounded-2xl p-6 mb-4">
            <MathText block math="f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}" />
          </div>
        </section>
      </div>
    ),
    problems: []
  },
  {
    id: 'differentiation-rules',
    categoryId: 'differential',
    title: 'Differentiation Rules',
    icon: 'rule',
    description: 'Constant, power, sum, difference, product, quotient, chain rule.',
    theory: (
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Basic Rules</h2>
          <p className="text-on-surface-variant mb-4">See the Formula Reference for a complete list of rules.</p>
        </section>
      </div>
    ),
    problems: []
  },
 {
    id: 'derivatives-transcendental',
    categoryId: 'differential',
    title: 'Derivatives of Transcendental Functions',
    icon: 'functions',
    description: 'Algebraic, trigonometric, inverse trigonometric, exponential, and logarithmic functions.',
    theory: (
      <>
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold mb-4">Patterns and Approaches</h2>
          <p className="text-on-surface-variant mb-6">
            When finding derivatives of transcendental functions, you will typically encounter specific patterns. Recognizing these patterns is key to choosing the right approach. Here are the most common patterns and how to solve them:
          </p>
          
          <div className="grid gap-6">
            {/* Pattern 1 */}
            <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/20">
              <h3 className="text-lg font-bold text-primary mb-2">1. Direct Application with Chain Rule</h3>
              <p className="text-sm text-on-surface-variant mb-4">
                <strong>Pattern:</strong> A transcendental function with a complex argument, like <MathText math="f(g(x))" />. Examples include <MathText math="e^{u}" />, <MathText math="\sin(u)" />, or <MathText math="\ln(u)" />.
              </p>
              <p className="text-sm text-on-surface-variant mb-4">
                <strong>Approach:</strong> Identify the outer transcendental function and the inner algebraic (or other) function. Apply the specific derivative rule for the outer function, then multiply by the derivative of the inner function.
              </p>
              <div className="bg-surface-container-lowest p-4 rounded-xl overflow-x-auto no-scrollbar">
                <h4 className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">Example</h4>
                <MathText block math="y = \sin(x^2 + 3x)" className="mb-2 text-[13px] md:text-base" />
                <MathText block math="y' = \cos(x^2 + 3x) \cdot \frac{d}{dx}(x^2 + 3x)" className="mb-2 text-[13px] md:text-base" />
                <MathText block math="y' = (2x + 3)\cos(x^2 + 3x)" className="text-[13px] md:text-base" />
              </div>
            </div>

            {/* Pattern 2 */}
            <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/20">
              <h3 className="text-lg font-bold text-primary mb-2">2. Logarithmic Differentiation</h3>
              <p className="text-sm text-on-surface-variant mb-4">
                <strong>Pattern:</strong> Functions with a variable base and a variable exponent (e.g., <MathText math="y = x^x" />) or highly complex products/quotients/roots where standard rules would be extremely tedious.
              </p>
              <p className="text-sm text-on-surface-variant mb-4">
                <strong>Approach:</strong> Take the natural logarithm (<MathText math="\ln" />) of both sides. Use logarithm properties to expand the right side. Differentiate implicitly, then multiply both sides by the original <MathText math="y" /> to solve for <MathText math="y'" />.
              </p>
              <div className="bg-surface-container-lowest p-4 rounded-xl overflow-x-auto no-scrollbar">
                <h4 className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">Example</h4>
                <MathText block math="y = x^{\sin x}" className="mb-2 text-[13px] md:text-base" />
                <MathText block math="\ln y = \ln(x^{\sin x}) \implies \ln y = \sin x \cdot \ln x" className="mb-2 text-[13px] md:text-base" />
                <MathText block math="\frac{1}{y}y' = \cos x \cdot \ln x + \sin x \cdot \frac{1}{x}" className="mb-2 text-[13px] md:text-base" />
                <MathText block math="y' = x^{\sin x} \left( \cos x \ln x + \frac{\sin x}{x} \right)" className="text-[13px] md:text-base" />
              </div>
            </div>

            {/* Pattern 3 */}
            <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/20">
              <h3 className="text-lg font-bold text-primary mb-2">3. Implicit Differentiation</h3>
              <p className="text-sm text-on-surface-variant mb-4">
                <strong>Pattern:</strong> Equations where <MathText math="y" /> is not isolated and is mixed with <MathText math="x" /> inside transcendental functions, such as <MathText math="e^{xy} + \sin(y) = x" />.
              </p>
              <p className="text-sm text-on-surface-variant mb-4">
                <strong>Approach:</strong> Differentiate both sides with respect to <MathText math="x" />. Remember that <MathText math="y" /> is a function of <MathText math="x" />, so every time you differentiate a term with <MathText math="y" />, you must multiply by <MathText math="y'" /> (Chain Rule). Finally, algebraically isolate <MathText math="y'" />.
              </p>
              <div className="bg-surface-container-lowest p-4 rounded-xl overflow-x-auto no-scrollbar">
                <h4 className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">Example</h4>
                <MathText block math="\ln(xy) = y^2" className="mb-2 text-[13px] md:text-base" />
                <MathText block math="\frac{1}{xy} \cdot (1 \cdot y + x \cdot y') = 2y \cdot y'" className="mb-2 text-[13px] md:text-base" />
                <MathText block math="\frac{1}{x} + \frac{y'}{y} = 2yy' \implies \frac{1}{x} = y'\left(2y - \frac{1}{y}\right)" className="mb-2 text-[13px] md:text-base" />
                <MathText block math="y' = \frac{1}{x(2y - \frac{1}{y})} = \frac{y}{x(2y^2 - 1)}" className="text-[13px] md:text-base" />
              </div>
            </div>

            {/* Pattern 4 */}
            <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/20">
              <h3 className="text-lg font-bold text-primary mb-2">4. Product and Quotient Rules</h3>
              <p className="text-sm text-on-surface-variant mb-4">
                <strong>Pattern:</strong> A function that is a product or quotient involving at least one transcendental function, like <MathText math="y = x^2 e^x" /> or <MathText math="y = \frac{\ln x}{x}" />.
              </p>
              <p className="text-sm text-on-surface-variant mb-4">
                <strong>Approach:</strong> Set up the Product Rule (<MathText math="(uv)' = u'v + uv'" />) or Quotient Rule (<MathText math="\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}" />) first. Then, evaluate the derivatives of the individual transcendental parts as needed.
              </p>
              <div className="bg-surface-container-lowest p-4 rounded-xl overflow-x-auto no-scrollbar">
                <h4 className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">Example</h4>
                <MathText block math="y = x^2 e^{-x}" className="mb-2 text-[13px] md:text-base" />
                <MathText block math="y' = (2x)(e^{-x}) + (x^2)(-e^{-x})" className="mb-2 text-[13px] md:text-base" />
                <MathText block math="y' = xe^{-x}(2 - x)" className="text-[13px] md:text-base" />
              </div>
            </div>
          </div>
        </section>
      </>
    ),
    problems: [      {        id: 'trans-easy-gen-1',        difficulty: 'Easy',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\sin(1x) + e^{1x}',        method: 'Sum Rule and Chain Rule',        solution: '\\begin{aligned}\n y\' &= \\frac{d}{dx}(\\sin(1x)) + \\frac{d}{dx}(e^{1x}) \\\\\n y\' &= 1\\cos(1x) + 1e^{1x}\n\\end{aligned}',        finalAnswer: 'y\' = 1\\cos(1x) + 1e^{1x}'      },      {        id: 'trans-easy-gen-2',        difficulty: 'Easy',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\sin(2x) + e^{2x}',        method: 'Sum Rule and Chain Rule',        solution: '\\begin{aligned}\n y\' &= \\frac{d}{dx}(\\sin(2x)) + \\frac{d}{dx}(e^{2x}) \\\\\n y\' &= 2\\cos(2x) + 2e^{2x}\n\\end{aligned}',        finalAnswer: 'y\' = 2\\cos(2x) + 2e^{2x}'      },      {        id: 'trans-easy-gen-3',        difficulty: 'Easy',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\sin(3x) + e^{3x}',        method: 'Sum Rule and Chain Rule',        solution: '\\begin{aligned}\n y\' &= \\frac{d}{dx}(\\sin(3x)) + \\frac{d}{dx}(e^{3x}) \\\\\n y\' &= 3\\cos(3x) + 3e^{3x}\n\\end{aligned}',        finalAnswer: 'y\' = 3\\cos(3x) + 3e^{3x}'      },      {        id: 'trans-easy-gen-4',        difficulty: 'Easy',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\sin(4x) + e^{4x}',        method: 'Sum Rule and Chain Rule',        solution: '\\begin{aligned}\n y\' &= \\frac{d}{dx}(\\sin(4x)) + \\frac{d}{dx}(e^{4x}) \\\\\n y\' &= 4\\cos(4x) + 4e^{4x}\n\\end{aligned}',        finalAnswer: 'y\' = 4\\cos(4x) + 4e^{4x}'      },      {        id: 'trans-easy-gen-5',        difficulty: 'Easy',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\sin(5x) + e^{5x}',        method: 'Sum Rule and Chain Rule',        solution: '\\begin{aligned}\n y\' &= \\frac{d}{dx}(\\sin(5x)) + \\frac{d}{dx}(e^{5x}) \\\\\n y\' &= 5\\cos(5x) + 5e^{5x}\n\\end{aligned}',        finalAnswer: 'y\' = 5\\cos(5x) + 5e^{5x}'      },      {        id: 'trans-easy-gen-6',        difficulty: 'Easy',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\sin(6x) + e^{6x}',        method: 'Sum Rule and Chain Rule',        solution: '\\begin{aligned}\n y\' &= \\frac{d}{dx}(\\sin(6x)) + \\frac{d}{dx}(e^{6x}) \\\\\n y\' &= 6\\cos(6x) + 6e^{6x}\n\\end{aligned}',        finalAnswer: 'y\' = 6\\cos(6x) + 6e^{6x}'      },      {        id: 'trans-easy-gen-7',        difficulty: 'Easy',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\sin(7x) + e^{7x}',        method: 'Sum Rule and Chain Rule',        solution: '\\begin{aligned}\n y\' &= \\frac{d}{dx}(\\sin(7x)) + \\frac{d}{dx}(e^{7x}) \\\\\n y\' &= 7\\cos(7x) + 7e^{7x}\n\\end{aligned}',        finalAnswer: 'y\' = 7\\cos(7x) + 7e^{7x}'      },      {        id: 'trans-easy-gen-8',        difficulty: 'Easy',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\sin(8x) + e^{8x}',        method: 'Sum Rule and Chain Rule',        solution: '\\begin{aligned}\n y\' &= \\frac{d}{dx}(\\sin(8x)) + \\frac{d}{dx}(e^{8x}) \\\\\n y\' &= 8\\cos(8x) + 8e^{8x}\n\\end{aligned}',        finalAnswer: 'y\' = 8\\cos(8x) + 8e^{8x}'      },      {        id: 'trans-easy-gen-9',        difficulty: 'Easy',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\sin(9x) + e^{9x}',        method: 'Sum Rule and Chain Rule',        solution: '\\begin{aligned}\n y\' &= \\frac{d}{dx}(\\sin(9x)) + \\frac{d}{dx}(e^{9x}) \\\\\n y\' &= 9\\cos(9x) + 9e^{9x}\n\\end{aligned}',        finalAnswer: 'y\' = 9\\cos(9x) + 9e^{9x}'      },      {        id: 'trans-easy-gen-10',        difficulty: 'Easy',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\sin(10x) + e^{10x}',        method: 'Sum Rule and Chain Rule',        solution: '\\begin{aligned}\n y\' &= \\frac{d}{dx}(\\sin(10x)) + \\frac{d}{dx}(e^{10x}) \\\\\n y\' &= 10\\cos(10x) + 10e^{10x}\n\\end{aligned}',        finalAnswer: 'y\' = 10\\cos(10x) + 10e^{10x}'      },      {        id: 'trans-easy-gen-11',        difficulty: 'Easy',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\sin(11x) + e^{11x}',        method: 'Sum Rule and Chain Rule',        solution: '\\begin{aligned}\n y\' &= \\frac{d}{dx}(\\sin(11x)) + \\frac{d}{dx}(e^{11x}) \\\\\n y\' &= 11\\cos(11x) + 11e^{11x}\n\\end{aligned}',        finalAnswer: 'y\' = 11\\cos(11x) + 11e^{11x}'      },      {        id: 'trans-easy-gen-12',        difficulty: 'Easy',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\sin(12x) + e^{12x}',        method: 'Sum Rule and Chain Rule',        solution: '\\begin{aligned}\n y\' &= \\frac{d}{dx}(\\sin(12x)) + \\frac{d}{dx}(e^{12x}) \\\\\n y\' &= 12\\cos(12x) + 12e^{12x}\n\\end{aligned}',        finalAnswer: 'y\' = 12\\cos(12x) + 12e^{12x}'      },      {        id: 'trans-easy-gen-13',        difficulty: 'Easy',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\sin(13x) + e^{13x}',        method: 'Sum Rule and Chain Rule',        solution: '\\begin{aligned}\n y\' &= \\frac{d}{dx}(\\sin(13x)) + \\frac{d}{dx}(e^{13x}) \\\\\n y\' &= 13\\cos(13x) + 13e^{13x}\n\\end{aligned}',        finalAnswer: 'y\' = 13\\cos(13x) + 13e^{13x}'      },      {        id: 'trans-easy-gen-14',        difficulty: 'Easy',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\sin(14x) + e^{14x}',        method: 'Sum Rule and Chain Rule',        solution: '\\begin{aligned}\n y\' &= \\frac{d}{dx}(\\sin(14x)) + \\frac{d}{dx}(e^{14x}) \\\\\n y\' &= 14\\cos(14x) + 14e^{14x}\n\\end{aligned}',        finalAnswer: 'y\' = 14\\cos(14x) + 14e^{14x}'      },      {        id: 'trans-easy-gen-15',        difficulty: 'Easy',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\sin(15x) + e^{15x}',        method: 'Sum Rule and Chain Rule',        solution: '\\begin{aligned}\n y\' &= \\frac{d}{dx}(\\sin(15x)) + \\frac{d}{dx}(e^{15x}) \\\\\n y\' &= 15\\cos(15x) + 15e^{15x}\n\\end{aligned}',        finalAnswer: 'y\' = 15\\cos(15x) + 15e^{15x}'      },      {        id: 'trans-easy-gen-16',        difficulty: 'Easy',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\sin(16x) + e^{16x}',        method: 'Sum Rule and Chain Rule',        solution: '\\begin{aligned}\n y\' &= \\frac{d}{dx}(\\sin(16x)) + \\frac{d}{dx}(e^{16x}) \\\\\n y\' &= 16\\cos(16x) + 16e^{16x}\n\\end{aligned}',        finalAnswer: 'y\' = 16\\cos(16x) + 16e^{16x}'      },      {        id: 'trans-easy-gen-17',        difficulty: 'Easy',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\sin(17x) + e^{17x}',        method: 'Sum Rule and Chain Rule',        solution: '\\begin{aligned}\n y\' &= \\frac{d}{dx}(\\sin(17x)) + \\frac{d}{dx}(e^{17x}) \\\\\n y\' &= 17\\cos(17x) + 17e^{17x}\n\\end{aligned}',        finalAnswer: 'y\' = 17\\cos(17x) + 17e^{17x}'      },      {        id: 'trans-easy-gen-18',        difficulty: 'Easy',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\sin(18x) + e^{18x}',        method: 'Sum Rule and Chain Rule',        solution: '\\begin{aligned}\n y\' &= \\frac{d}{dx}(\\sin(18x)) + \\frac{d}{dx}(e^{18x}) \\\\\n y\' &= 18\\cos(18x) + 18e^{18x}\n\\end{aligned}',        finalAnswer: 'y\' = 18\\cos(18x) + 18e^{18x}'      },      {        id: 'trans-easy-gen-19',        difficulty: 'Easy',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\sin(19x) + e^{19x}',        method: 'Sum Rule and Chain Rule',        solution: '\\begin{aligned}\n y\' &= \\frac{d}{dx}(\\sin(19x)) + \\frac{d}{dx}(e^{19x}) \\\\\n y\' &= 19\\cos(19x) + 19e^{19x}\n\\end{aligned}',        finalAnswer: 'y\' = 19\\cos(19x) + 19e^{19x}'      },      {        id: 'trans-easy-gen-20',        difficulty: 'Easy',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\sin(20x) + e^{20x}',        method: 'Sum Rule and Chain Rule',        solution: '\\begin{aligned}\n y\' &= \\frac{d}{dx}(\\sin(20x)) + \\frac{d}{dx}(e^{20x}) \\\\\n y\' &= 20\\cos(20x) + 20e^{20x}\n\\end{aligned}',        finalAnswer: 'y\' = 20\\cos(20x) + 20e^{20x}'      },      {        id: 'trans-hard-gen-1',        difficulty: 'Hard',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\frac{\\sqrt{\\sin^2(1x) + \\cosh(1x)}}{e^{1x}\\tan^{-1}(x)}\\right)',        method: 'Logarithmic Differentiation and Logical Algebra',        solution: '\\begin{aligned}\n \\ln y &= \\frac{1}{2}\\ln(\\sin^2(1x) + \\cosh(1x)) - 1x - \\ln(\\tan^{-1}(x)) \\\\\n \\frac{y\'}{y} &= \\frac{1}{2} \\frac{2(1)\\sin(1x)\\cos(1x) + 1\\sinh(1x)}{\\sin^2(1x) + \\cosh(1x)} - 1 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\\\\n y\' &= y \\left[ \\frac{1\\sin(2\\cdot1x) + 1\\sinh(1x)}{2(\\sin^2(1x) + \\cosh(1x))} - 1 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]\n\\end{aligned}',        finalAnswer: 'y\' = y \\left[ \\frac{1\\sin(2x) + 1\\sinh(1x)}{2(\\sin^2(1x) + \\cosh(1x))} - 1 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]'      },      {        id: 'trans-hard-gen-2',        difficulty: 'Hard',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\frac{\\sqrt{\\sin^2(2x) + \\cosh(2x)}}{e^{2x}\\tan^{-1}(x)}\\right)',        method: 'Logarithmic Differentiation and Logical Algebra',        solution: '\\begin{aligned}\n \\ln y &= \\frac{1}{2}\\ln(\\sin^2(2x) + \\cosh(2x)) - 2x - \\ln(\\tan^{-1}(x)) \\\\\n \\frac{y\'}{y} &= \\frac{1}{2} \\frac{2(2)\\sin(2x)\\cos(2x) + 2\\sinh(2x)}{\\sin^2(2x) + \\cosh(2x)} - 2 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\\\\n y\' &= y \\left[ \\frac{2\\sin(2\\cdot2x) + 2\\sinh(2x)}{2(\\sin^2(2x) + \\cosh(2x))} - 2 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]\n\\end{aligned}',        finalAnswer: 'y\' = y \\left[ \\frac{2\\sin(4x) + 2\\sinh(2x)}{2(\\sin^2(2x) + \\cosh(2x))} - 2 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]'      },      {        id: 'trans-hard-gen-3',        difficulty: 'Hard',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\frac{\\sqrt{\\sin^2(3x) + \\cosh(3x)}}{e^{3x}\\tan^{-1}(x)}\\right)',        method: 'Logarithmic Differentiation and Logical Algebra',        solution: '\\begin{aligned}\n \\ln y &= \\frac{1}{2}\\ln(\\sin^2(3x) + \\cosh(3x)) - 3x - \\ln(\\tan^{-1}(x)) \\\\\n \\frac{y\'}{y} &= \\frac{1}{2} \\frac{2(3)\\sin(3x)\\cos(3x) + 3\\sinh(3x)}{\\sin^2(3x) + \\cosh(3x)} - 3 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\\\\n y\' &= y \\left[ \\frac{3\\sin(2\\cdot3x) + 3\\sinh(3x)}{2(\\sin^2(3x) + \\cosh(3x))} - 3 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]\n\\end{aligned}',        finalAnswer: 'y\' = y \\left[ \\frac{3\\sin(6x) + 3\\sinh(3x)}{2(\\sin^2(3x) + \\cosh(3x))} - 3 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]'      },      {        id: 'trans-hard-gen-4',        difficulty: 'Hard',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\frac{\\sqrt{\\sin^2(4x) + \\cosh(4x)}}{e^{4x}\\tan^{-1}(x)}\\right)',        method: 'Logarithmic Differentiation and Logical Algebra',        solution: '\\begin{aligned}\n \\ln y &= \\frac{1}{2}\\ln(\\sin^2(4x) + \\cosh(4x)) - 4x - \\ln(\\tan^{-1}(x)) \\\\\n \\frac{y\'}{y} &= \\frac{1}{2} \\frac{2(4)\\sin(4x)\\cos(4x) + 4\\sinh(4x)}{\\sin^2(4x) + \\cosh(4x)} - 4 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\\\\n y\' &= y \\left[ \\frac{4\\sin(2\\cdot4x) + 4\\sinh(4x)}{2(\\sin^2(4x) + \\cosh(4x))} - 4 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]\n\\end{aligned}',        finalAnswer: 'y\' = y \\left[ \\frac{4\\sin(8x) + 4\\sinh(4x)}{2(\\sin^2(4x) + \\cosh(4x))} - 4 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]'      },      {        id: 'trans-hard-gen-5',        difficulty: 'Hard',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\frac{\\sqrt{\\sin^2(5x) + \\cosh(5x)}}{e^{5x}\\tan^{-1}(x)}\\right)',        method: 'Logarithmic Differentiation and Logical Algebra',        solution: '\\begin{aligned}\n \\ln y &= \\frac{1}{2}\\ln(\\sin^2(5x) + \\cosh(5x)) - 5x - \\ln(\\tan^{-1}(x)) \\\\\n \\frac{y\'}{y} &= \\frac{1}{2} \\frac{2(5)\\sin(5x)\\cos(5x) + 5\\sinh(5x)}{\\sin^2(5x) + \\cosh(5x)} - 5 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\\\\n y\' &= y \\left[ \\frac{5\\sin(2\\cdot5x) + 5\\sinh(5x)}{2(\\sin^2(5x) + \\cosh(5x))} - 5 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]\n\\end{aligned}',        finalAnswer: 'y\' = y \\left[ \\frac{5\\sin(10x) + 5\\sinh(5x)}{2(\\sin^2(5x) + \\cosh(5x))} - 5 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]'      },      {        id: 'trans-hard-gen-6',        difficulty: 'Hard',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\frac{\\sqrt{\\sin^2(6x) + \\cosh(6x)}}{e^{6x}\\tan^{-1}(x)}\\right)',        method: 'Logarithmic Differentiation and Logical Algebra',        solution: '\\begin{aligned}\n \\ln y &= \\frac{1}{2}\\ln(\\sin^2(6x) + \\cosh(6x)) - 6x - \\ln(\\tan^{-1}(x)) \\\\\n \\frac{y\'}{y} &= \\frac{1}{2} \\frac{2(6)\\sin(6x)\\cos(6x) + 6\\sinh(6x)}{\\sin^2(6x) + \\cosh(6x)} - 6 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\\\\n y\' &= y \\left[ \\frac{6\\sin(2\\cdot6x) + 6\\sinh(6x)}{2(\\sin^2(6x) + \\cosh(6x))} - 6 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]\n\\end{aligned}',        finalAnswer: 'y\' = y \\left[ \\frac{6\\sin(12x) + 6\\sinh(6x)}{2(\\sin^2(6x) + \\cosh(6x))} - 6 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]'      },      {        id: 'trans-hard-gen-7',        difficulty: 'Hard',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\frac{\\sqrt{\\sin^2(7x) + \\cosh(7x)}}{e^{7x}\\tan^{-1}(x)}\\right)',        method: 'Logarithmic Differentiation and Logical Algebra',        solution: '\\begin{aligned}\n \\ln y &= \\frac{1}{2}\\ln(\\sin^2(7x) + \\cosh(7x)) - 7x - \\ln(\\tan^{-1}(x)) \\\\\n \\frac{y\'}{y} &= \\frac{1}{2} \\frac{2(7)\\sin(7x)\\cos(7x) + 7\\sinh(7x)}{\\sin^2(7x) + \\cosh(7x)} - 7 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\\\\n y\' &= y \\left[ \\frac{7\\sin(2\\cdot7x) + 7\\sinh(7x)}{2(\\sin^2(7x) + \\cosh(7x))} - 7 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]\n\\end{aligned}',        finalAnswer: 'y\' = y \\left[ \\frac{7\\sin(14x) + 7\\sinh(7x)}{2(\\sin^2(7x) + \\cosh(7x))} - 7 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]'      },      {        id: 'trans-hard-gen-8',        difficulty: 'Hard',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\frac{\\sqrt{\\sin^2(8x) + \\cosh(8x)}}{e^{8x}\\tan^{-1}(x)}\\right)',        method: 'Logarithmic Differentiation and Logical Algebra',        solution: '\\begin{aligned}\n \\ln y &= \\frac{1}{2}\\ln(\\sin^2(8x) + \\cosh(8x)) - 8x - \\ln(\\tan^{-1}(x)) \\\\\n \\frac{y\'}{y} &= \\frac{1}{2} \\frac{2(8)\\sin(8x)\\cos(8x) + 8\\sinh(8x)}{\\sin^2(8x) + \\cosh(8x)} - 8 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\\\\n y\' &= y \\left[ \\frac{8\\sin(2\\cdot8x) + 8\\sinh(8x)}{2(\\sin^2(8x) + \\cosh(8x))} - 8 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]\n\\end{aligned}',        finalAnswer: 'y\' = y \\left[ \\frac{8\\sin(16x) + 8\\sinh(8x)}{2(\\sin^2(8x) + \\cosh(8x))} - 8 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]'      },      {        id: 'trans-hard-gen-9',        difficulty: 'Hard',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\frac{\\sqrt{\\sin^2(9x) + \\cosh(9x)}}{e^{9x}\\tan^{-1}(x)}\\right)',        method: 'Logarithmic Differentiation and Logical Algebra',        solution: '\\begin{aligned}\n \\ln y &= \\frac{1}{2}\\ln(\\sin^2(9x) + \\cosh(9x)) - 9x - \\ln(\\tan^{-1}(x)) \\\\\n \\frac{y\'}{y} &= \\frac{1}{2} \\frac{2(9)\\sin(9x)\\cos(9x) + 9\\sinh(9x)}{\\sin^2(9x) + \\cosh(9x)} - 9 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\\\\n y\' &= y \\left[ \\frac{9\\sin(2\\cdot9x) + 9\\sinh(9x)}{2(\\sin^2(9x) + \\cosh(9x))} - 9 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]\n\\end{aligned}',        finalAnswer: 'y\' = y \\left[ \\frac{9\\sin(18x) + 9\\sinh(9x)}{2(\\sin^2(9x) + \\cosh(9x))} - 9 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]'      },      {        id: 'trans-hard-gen-10',        difficulty: 'Hard',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\frac{\\sqrt{\\sin^2(10x) + \\cosh(10x)}}{e^{10x}\\tan^{-1}(x)}\\right)',        method: 'Logarithmic Differentiation and Logical Algebra',        solution: '\\begin{aligned}\n \\ln y &= \\frac{1}{2}\\ln(\\sin^2(10x) + \\cosh(10x)) - 10x - \\ln(\\tan^{-1}(x)) \\\\\n \\frac{y\'}{y} &= \\frac{1}{2} \\frac{2(10)\\sin(10x)\\cos(10x) + 10\\sinh(10x)}{\\sin^2(10x) + \\cosh(10x)} - 10 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\\\\n y\' &= y \\left[ \\frac{10\\sin(2\\cdot10x) + 10\\sinh(10x)}{2(\\sin^2(10x) + \\cosh(10x))} - 10 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]\n\\end{aligned}',        finalAnswer: 'y\' = y \\left[ \\frac{10\\sin(20x) + 10\\sinh(10x)}{2(\\sin^2(10x) + \\cosh(10x))} - 10 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]'      },      {        id: 'trans-hard-gen-11',        difficulty: 'Hard',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\frac{\\sqrt{\\sin^2(11x) + \\cosh(11x)}}{e^{11x}\\tan^{-1}(x)}\\right)',        method: 'Logarithmic Differentiation and Logical Algebra',        solution: '\\begin{aligned}\n \\ln y &= \\frac{1}{2}\\ln(\\sin^2(11x) + \\cosh(11x)) - 11x - \\ln(\\tan^{-1}(x)) \\\\\n \\frac{y\'}{y} &= \\frac{1}{2} \\frac{2(11)\\sin(11x)\\cos(11x) + 11\\sinh(11x)}{\\sin^2(11x) + \\cosh(11x)} - 11 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\\\\n y\' &= y \\left[ \\frac{11\\sin(2\\cdot11x) + 11\\sinh(11x)}{2(\\sin^2(11x) + \\cosh(11x))} - 11 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]\n\\end{aligned}',        finalAnswer: 'y\' = y \\left[ \\frac{11\\sin(22x) + 11\\sinh(11x)}{2(\\sin^2(11x) + \\cosh(11x))} - 11 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]'      },      {        id: 'trans-hard-gen-12',        difficulty: 'Hard',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\frac{\\sqrt{\\sin^2(12x) + \\cosh(12x)}}{e^{12x}\\tan^{-1}(x)}\\right)',        method: 'Logarithmic Differentiation and Logical Algebra',        solution: '\\begin{aligned}\n \\ln y &= \\frac{1}{2}\\ln(\\sin^2(12x) + \\cosh(12x)) - 12x - \\ln(\\tan^{-1}(x)) \\\\\n \\frac{y\'}{y} &= \\frac{1}{2} \\frac{2(12)\\sin(12x)\\cos(12x) + 12\\sinh(12x)}{\\sin^2(12x) + \\cosh(12x)} - 12 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\\\\n y\' &= y \\left[ \\frac{12\\sin(2\\cdot12x) + 12\\sinh(12x)}{2(\\sin^2(12x) + \\cosh(12x))} - 12 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]\n\\end{aligned}',        finalAnswer: 'y\' = y \\left[ \\frac{12\\sin(24x) + 12\\sinh(12x)}{2(\\sin^2(12x) + \\cosh(12x))} - 12 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]'      },      {        id: 'trans-hard-gen-13',        difficulty: 'Hard',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\frac{\\sqrt{\\sin^2(13x) + \\cosh(13x)}}{e^{13x}\\tan^{-1}(x)}\\right)',        method: 'Logarithmic Differentiation and Logical Algebra',        solution: '\\begin{aligned}\n \\ln y &= \\frac{1}{2}\\ln(\\sin^2(13x) + \\cosh(13x)) - 13x - \\ln(\\tan^{-1}(x)) \\\\\n \\frac{y\'}{y} &= \\frac{1}{2} \\frac{2(13)\\sin(13x)\\cos(13x) + 13\\sinh(13x)}{\\sin^2(13x) + \\cosh(13x)} - 13 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\\\\n y\' &= y \\left[ \\frac{13\\sin(2\\cdot13x) + 13\\sinh(13x)}{2(\\sin^2(13x) + \\cosh(13x))} - 13 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]\n\\end{aligned}',        finalAnswer: 'y\' = y \\left[ \\frac{13\\sin(26x) + 13\\sinh(13x)}{2(\\sin^2(13x) + \\cosh(13x))} - 13 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]'      },      {        id: 'trans-hard-gen-14',        difficulty: 'Hard',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\frac{\\sqrt{\\sin^2(14x) + \\cosh(14x)}}{e^{14x}\\tan^{-1}(x)}\\right)',        method: 'Logarithmic Differentiation and Logical Algebra',        solution: '\\begin{aligned}\n \\ln y &= \\frac{1}{2}\\ln(\\sin^2(14x) + \\cosh(14x)) - 14x - \\ln(\\tan^{-1}(x)) \\\\\n \\frac{y\'}{y} &= \\frac{1}{2} \\frac{2(14)\\sin(14x)\\cos(14x) + 14\\sinh(14x)}{\\sin^2(14x) + \\cosh(14x)} - 14 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\\\\n y\' &= y \\left[ \\frac{14\\sin(2\\cdot14x) + 14\\sinh(14x)}{2(\\sin^2(14x) + \\cosh(14x))} - 14 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]\n\\end{aligned}',        finalAnswer: 'y\' = y \\left[ \\frac{14\\sin(28x) + 14\\sinh(14x)}{2(\\sin^2(14x) + \\cosh(14x))} - 14 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]'      },      {        id: 'trans-hard-gen-15',        difficulty: 'Hard',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\frac{\\sqrt{\\sin^2(15x) + \\cosh(15x)}}{e^{15x}\\tan^{-1}(x)}\\right)',        method: 'Logarithmic Differentiation and Logical Algebra',        solution: '\\begin{aligned}\n \\ln y &= \\frac{1}{2}\\ln(\\sin^2(15x) + \\cosh(15x)) - 15x - \\ln(\\tan^{-1}(x)) \\\\\n \\frac{y\'}{y} &= \\frac{1}{2} \\frac{2(15)\\sin(15x)\\cos(15x) + 15\\sinh(15x)}{\\sin^2(15x) + \\cosh(15x)} - 15 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\\\\n y\' &= y \\left[ \\frac{15\\sin(2\\cdot15x) + 15\\sinh(15x)}{2(\\sin^2(15x) + \\cosh(15x))} - 15 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]\n\\end{aligned}',        finalAnswer: 'y\' = y \\left[ \\frac{15\\sin(30x) + 15\\sinh(15x)}{2(\\sin^2(15x) + \\cosh(15x))} - 15 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]'      },      {        id: 'trans-hard-gen-16',        difficulty: 'Hard',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\frac{\\sqrt{\\sin^2(16x) + \\cosh(16x)}}{e^{16x}\\tan^{-1}(x)}\\right)',        method: 'Logarithmic Differentiation and Logical Algebra',        solution: '\\begin{aligned}\n \\ln y &= \\frac{1}{2}\\ln(\\sin^2(16x) + \\cosh(16x)) - 16x - \\ln(\\tan^{-1}(x)) \\\\\n \\frac{y\'}{y} &= \\frac{1}{2} \\frac{2(16)\\sin(16x)\\cos(16x) + 16\\sinh(16x)}{\\sin^2(16x) + \\cosh(16x)} - 16 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\\\\n y\' &= y \\left[ \\frac{16\\sin(2\\cdot16x) + 16\\sinh(16x)}{2(\\sin^2(16x) + \\cosh(16x))} - 16 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]\n\\end{aligned}',        finalAnswer: 'y\' = y \\left[ \\frac{16\\sin(32x) + 16\\sinh(16x)}{2(\\sin^2(16x) + \\cosh(16x))} - 16 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]'      },      {        id: 'trans-hard-gen-17',        difficulty: 'Hard',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\frac{\\sqrt{\\sin^2(17x) + \\cosh(17x)}}{e^{17x}\\tan^{-1}(x)}\\right)',        method: 'Logarithmic Differentiation and Logical Algebra',        solution: '\\begin{aligned}\n \\ln y &= \\frac{1}{2}\\ln(\\sin^2(17x) + \\cosh(17x)) - 17x - \\ln(\\tan^{-1}(x)) \\\\\n \\frac{y\'}{y} &= \\frac{1}{2} \\frac{2(17)\\sin(17x)\\cos(17x) + 17\\sinh(17x)}{\\sin^2(17x) + \\cosh(17x)} - 17 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\\\\n y\' &= y \\left[ \\frac{17\\sin(2\\cdot17x) + 17\\sinh(17x)}{2(\\sin^2(17x) + \\cosh(17x))} - 17 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]\n\\end{aligned}',        finalAnswer: 'y\' = y \\left[ \\frac{17\\sin(34x) + 17\\sinh(17x)}{2(\\sin^2(17x) + \\cosh(17x))} - 17 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]'      },      {        id: 'trans-hard-gen-18',        difficulty: 'Hard',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\frac{\\sqrt{\\sin^2(18x) + \\cosh(18x)}}{e^{18x}\\tan^{-1}(x)}\\right)',        method: 'Logarithmic Differentiation and Logical Algebra',        solution: '\\begin{aligned}\n \\ln y &= \\frac{1}{2}\\ln(\\sin^2(18x) + \\cosh(18x)) - 18x - \\ln(\\tan^{-1}(x)) \\\\\n \\frac{y\'}{y} &= \\frac{1}{2} \\frac{2(18)\\sin(18x)\\cos(18x) + 18\\sinh(18x)}{\\sin^2(18x) + \\cosh(18x)} - 18 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\\\\n y\' &= y \\left[ \\frac{18\\sin(2\\cdot18x) + 18\\sinh(18x)}{2(\\sin^2(18x) + \\cosh(18x))} - 18 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]\n\\end{aligned}',        finalAnswer: 'y\' = y \\left[ \\frac{18\\sin(36x) + 18\\sinh(18x)}{2(\\sin^2(18x) + \\cosh(18x))} - 18 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]'      },      {        id: 'trans-hard-gen-19',        difficulty: 'Hard',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\frac{\\sqrt{\\sin^2(19x) + \\cosh(19x)}}{e^{19x}\\tan^{-1}(x)}\\right)',        method: 'Logarithmic Differentiation and Logical Algebra',        solution: '\\begin{aligned}\n \\ln y &= \\frac{1}{2}\\ln(\\sin^2(19x) + \\cosh(19x)) - 19x - \\ln(\\tan^{-1}(x)) \\\\\n \\frac{y\'}{y} &= \\frac{1}{2} \\frac{2(19)\\sin(19x)\\cos(19x) + 19\\sinh(19x)}{\\sin^2(19x) + \\cosh(19x)} - 19 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\\\\n y\' &= y \\left[ \\frac{19\\sin(2\\cdot19x) + 19\\sinh(19x)}{2(\\sin^2(19x) + \\cosh(19x))} - 19 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]\n\\end{aligned}',        finalAnswer: 'y\' = y \\left[ \\frac{19\\sin(38x) + 19\\sinh(19x)}{2(\\sin^2(19x) + \\cosh(19x))} - 19 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]'      },      {        id: 'trans-hard-gen-20',        difficulty: 'Hard',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\frac{\\sqrt{\\sin^2(20x) + \\cosh(20x)}}{e^{20x}\\tan^{-1}(x)}\\right)',        method: 'Logarithmic Differentiation and Logical Algebra',        solution: '\\begin{aligned}\n \\ln y &= \\frac{1}{2}\\ln(\\sin^2(20x) + \\cosh(20x)) - 20x - \\ln(\\tan^{-1}(x)) \\\\\n \\frac{y\'}{y} &= \\frac{1}{2} \\frac{2(20)\\sin(20x)\\cos(20x) + 20\\sinh(20x)}{\\sin^2(20x) + \\cosh(20x)} - 20 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\\\\n y\' &= y \\left[ \\frac{20\\sin(2\\cdot20x) + 20\\sinh(20x)}{2(\\sin^2(20x) + \\cosh(20x))} - 20 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]\n\\end{aligned}',        finalAnswer: 'y\' = y \\left[ \\frac{20\\sin(40x) + 20\\sinh(20x)}{2(\\sin^2(20x) + \\cosh(20x))} - 20 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]'      },      {        id: 'trans-hard-gen-21',        difficulty: 'Hard',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\frac{\\sqrt{\\sin^2(21x) + \\cosh(21x)}}{e^{21x}\\tan^{-1}(x)}\\right)',        method: 'Logarithmic Differentiation and Logical Algebra',        solution: '\\begin{aligned}\n \\ln y &= \\frac{1}{2}\\ln(\\sin^2(21x) + \\cosh(21x)) - 21x - \\ln(\\tan^{-1}(x)) \\\\\n \\frac{y\'}{y} &= \\frac{1}{2} \\frac{2(21)\\sin(21x)\\cos(21x) + 21\\sinh(21x)}{\\sin^2(21x) + \\cosh(21x)} - 21 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\\\\n y\' &= y \\left[ \\frac{21\\sin(2\\cdot21x) + 21\\sinh(21x)}{2(\\sin^2(21x) + \\cosh(21x))} - 21 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]\n\\end{aligned}',        finalAnswer: 'y\' = y \\left[ \\frac{21\\sin(42x) + 21\\sinh(21x)}{2(\\sin^2(21x) + \\cosh(21x))} - 21 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]'      },      {        id: 'trans-hard-gen-22',        difficulty: 'Hard',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\frac{\\sqrt{\\sin^2(22x) + \\cosh(22x)}}{e^{22x}\\tan^{-1}(x)}\\right)',        method: 'Logarithmic Differentiation and Logical Algebra',        solution: '\\begin{aligned}\n \\ln y &= \\frac{1}{2}\\ln(\\sin^2(22x) + \\cosh(22x)) - 22x - \\ln(\\tan^{-1}(x)) \\\\\n \\frac{y\'}{y} &= \\frac{1}{2} \\frac{2(22)\\sin(22x)\\cos(22x) + 22\\sinh(22x)}{\\sin^2(22x) + \\cosh(22x)} - 22 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\\\\n y\' &= y \\left[ \\frac{22\\sin(2\\cdot22x) + 22\\sinh(22x)}{2(\\sin^2(22x) + \\cosh(22x))} - 22 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]\n\\end{aligned}',        finalAnswer: 'y\' = y \\left[ \\frac{22\\sin(44x) + 22\\sinh(22x)}{2(\\sin^2(22x) + \\cosh(22x))} - 22 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]'      },      {        id: 'trans-hard-gen-23',        difficulty: 'Hard',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\frac{\\sqrt{\\sin^2(23x) + \\cosh(23x)}}{e^{23x}\\tan^{-1}(x)}\\right)',        method: 'Logarithmic Differentiation and Logical Algebra',        solution: '\\begin{aligned}\n \\ln y &= \\frac{1}{2}\\ln(\\sin^2(23x) + \\cosh(23x)) - 23x - \\ln(\\tan^{-1}(x)) \\\\\n \\frac{y\'}{y} &= \\frac{1}{2} \\frac{2(23)\\sin(23x)\\cos(23x) + 23\\sinh(23x)}{\\sin^2(23x) + \\cosh(23x)} - 23 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\\\\n y\' &= y \\left[ \\frac{23\\sin(2\\cdot23x) + 23\\sinh(23x)}{2(\\sin^2(23x) + \\cosh(23x))} - 23 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]\n\\end{aligned}',        finalAnswer: 'y\' = y \\left[ \\frac{23\\sin(46x) + 23\\sinh(23x)}{2(\\sin^2(23x) + \\cosh(23x))} - 23 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]'      },      {        id: 'trans-hard-gen-24',        difficulty: 'Hard',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\frac{\\sqrt{\\sin^2(24x) + \\cosh(24x)}}{e^{24x}\\tan^{-1}(x)}\\right)',        method: 'Logarithmic Differentiation and Logical Algebra',        solution: '\\begin{aligned}\n \\ln y &= \\frac{1}{2}\\ln(\\sin^2(24x) + \\cosh(24x)) - 24x - \\ln(\\tan^{-1}(x)) \\\\\n \\frac{y\'}{y} &= \\frac{1}{2} \\frac{2(24)\\sin(24x)\\cos(24x) + 24\\sinh(24x)}{\\sin^2(24x) + \\cosh(24x)} - 24 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\\\\n y\' &= y \\left[ \\frac{24\\sin(2\\cdot24x) + 24\\sinh(24x)}{2(\\sin^2(24x) + \\cosh(24x))} - 24 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]\n\\end{aligned}',        finalAnswer: 'y\' = y \\left[ \\frac{24\\sin(48x) + 24\\sinh(24x)}{2(\\sin^2(24x) + \\cosh(24x))} - 24 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]'      },      {        id: 'trans-hard-gen-25',        difficulty: 'Hard',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\frac{\\sqrt{\\sin^2(25x) + \\cosh(25x)}}{e^{25x}\\tan^{-1}(x)}\\right)',        method: 'Logarithmic Differentiation and Logical Algebra',        solution: '\\begin{aligned}\n \\ln y &= \\frac{1}{2}\\ln(\\sin^2(25x) + \\cosh(25x)) - 25x - \\ln(\\tan^{-1}(x)) \\\\\n \\frac{y\'}{y} &= \\frac{1}{2} \\frac{2(25)\\sin(25x)\\cos(25x) + 25\\sinh(25x)}{\\sin^2(25x) + \\cosh(25x)} - 25 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\\\\n y\' &= y \\left[ \\frac{25\\sin(2\\cdot25x) + 25\\sinh(25x)}{2(\\sin^2(25x) + \\cosh(25x))} - 25 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]\n\\end{aligned}',        finalAnswer: 'y\' = y \\left[ \\frac{25\\sin(50x) + 25\\sinh(25x)}{2(\\sin^2(25x) + \\cosh(25x))} - 25 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]'      },      {        id: 'trans-hard-gen-26',        difficulty: 'Hard',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\frac{\\sqrt{\\sin^2(26x) + \\cosh(26x)}}{e^{26x}\\tan^{-1}(x)}\\right)',        method: 'Logarithmic Differentiation and Logical Algebra',        solution: '\\begin{aligned}\n \\ln y &= \\frac{1}{2}\\ln(\\sin^2(26x) + \\cosh(26x)) - 26x - \\ln(\\tan^{-1}(x)) \\\\\n \\frac{y\'}{y} &= \\frac{1}{2} \\frac{2(26)\\sin(26x)\\cos(26x) + 26\\sinh(26x)}{\\sin^2(26x) + \\cosh(26x)} - 26 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\\\\n y\' &= y \\left[ \\frac{26\\sin(2\\cdot26x) + 26\\sinh(26x)}{2(\\sin^2(26x) + \\cosh(26x))} - 26 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]\n\\end{aligned}',        finalAnswer: 'y\' = y \\left[ \\frac{26\\sin(52x) + 26\\sinh(26x)}{2(\\sin^2(26x) + \\cosh(26x))} - 26 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]'      },      {        id: 'trans-hard-gen-27',        difficulty: 'Hard',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\frac{\\sqrt{\\sin^2(27x) + \\cosh(27x)}}{e^{27x}\\tan^{-1}(x)}\\right)',        method: 'Logarithmic Differentiation and Logical Algebra',        solution: '\\begin{aligned}\n \\ln y &= \\frac{1}{2}\\ln(\\sin^2(27x) + \\cosh(27x)) - 27x - \\ln(\\tan^{-1}(x)) \\\\\n \\frac{y\'}{y} &= \\frac{1}{2} \\frac{2(27)\\sin(27x)\\cos(27x) + 27\\sinh(27x)}{\\sin^2(27x) + \\cosh(27x)} - 27 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\\\\n y\' &= y \\left[ \\frac{27\\sin(2\\cdot27x) + 27\\sinh(27x)}{2(\\sin^2(27x) + \\cosh(27x))} - 27 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]\n\\end{aligned}',        finalAnswer: 'y\' = y \\left[ \\frac{27\\sin(54x) + 27\\sinh(27x)}{2(\\sin^2(27x) + \\cosh(27x))} - 27 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]'      },      {        id: 'trans-hard-gen-28',        difficulty: 'Hard',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\frac{\\sqrt{\\sin^2(28x) + \\cosh(28x)}}{e^{28x}\\tan^{-1}(x)}\\right)',        method: 'Logarithmic Differentiation and Logical Algebra',        solution: '\\begin{aligned}\n \\ln y &= \\frac{1}{2}\\ln(\\sin^2(28x) + \\cosh(28x)) - 28x - \\ln(\\tan^{-1}(x)) \\\\\n \\frac{y\'}{y} &= \\frac{1}{2} \\frac{2(28)\\sin(28x)\\cos(28x) + 28\\sinh(28x)}{\\sin^2(28x) + \\cosh(28x)} - 28 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\\\\n y\' &= y \\left[ \\frac{28\\sin(2\\cdot28x) + 28\\sinh(28x)}{2(\\sin^2(28x) + \\cosh(28x))} - 28 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]\n\\end{aligned}',        finalAnswer: 'y\' = y \\left[ \\frac{28\\sin(56x) + 28\\sinh(28x)}{2(\\sin^2(28x) + \\cosh(28x))} - 28 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]'      },      {        id: 'trans-hard-gen-29',        difficulty: 'Hard',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\frac{\\sqrt{\\sin^2(29x) + \\cosh(29x)}}{e^{29x}\\tan^{-1}(x)}\\right)',        method: 'Logarithmic Differentiation and Logical Algebra',        solution: '\\begin{aligned}\n \\ln y &= \\frac{1}{2}\\ln(\\sin^2(29x) + \\cosh(29x)) - 29x - \\ln(\\tan^{-1}(x)) \\\\\n \\frac{y\'}{y} &= \\frac{1}{2} \\frac{2(29)\\sin(29x)\\cos(29x) + 29\\sinh(29x)}{\\sin^2(29x) + \\cosh(29x)} - 29 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\\\\n y\' &= y \\left[ \\frac{29\\sin(2\\cdot29x) + 29\\sinh(29x)}{2(\\sin^2(29x) + \\cosh(29x))} - 29 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]\n\\end{aligned}',        finalAnswer: 'y\' = y \\left[ \\frac{29\\sin(58x) + 29\\sinh(29x)}{2(\\sin^2(29x) + \\cosh(29x))} - 29 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]'      },      {        id: 'trans-hard-gen-30',        difficulty: 'Hard',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\frac{\\sqrt{\\sin^2(30x) + \\cosh(30x)}}{e^{30x}\\tan^{-1}(x)}\\right)',        method: 'Logarithmic Differentiation and Logical Algebra',        solution: '\\begin{aligned}\n \\ln y &= \\frac{1}{2}\\ln(\\sin^2(30x) + \\cosh(30x)) - 30x - \\ln(\\tan^{-1}(x)) \\\\\n \\frac{y\'}{y} &= \\frac{1}{2} \\frac{2(30)\\sin(30x)\\cos(30x) + 30\\sinh(30x)}{\\sin^2(30x) + \\cosh(30x)} - 30 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\\\\n y\' &= y \\left[ \\frac{30\\sin(2\\cdot30x) + 30\\sinh(30x)}{2(\\sin^2(30x) + \\cosh(30x))} - 30 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]\n\\end{aligned}',        finalAnswer: 'y\' = y \\left[ \\frac{30\\sin(60x) + 30\\sinh(30x)}{2(\\sin^2(30x) + \\cosh(30x))} - 30 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]'      },      {        id: 'trans-hard-gen-31',        difficulty: 'Hard',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\frac{\\sqrt{\\sin^2(31x) + \\cosh(31x)}}{e^{31x}\\tan^{-1}(x)}\\right)',        method: 'Logarithmic Differentiation and Logical Algebra',        solution: '\\begin{aligned}\n \\ln y &= \\frac{1}{2}\\ln(\\sin^2(31x) + \\cosh(31x)) - 31x - \\ln(\\tan^{-1}(x)) \\\\\n \\frac{y\'}{y} &= \\frac{1}{2} \\frac{2(31)\\sin(31x)\\cos(31x) + 31\\sinh(31x)}{\\sin^2(31x) + \\cosh(31x)} - 31 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\\\\n y\' &= y \\left[ \\frac{31\\sin(2\\cdot31x) + 31\\sinh(31x)}{2(\\sin^2(31x) + \\cosh(31x))} - 31 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]\n\\end{aligned}',        finalAnswer: 'y\' = y \\left[ \\frac{31\\sin(62x) + 31\\sinh(31x)}{2(\\sin^2(31x) + \\cosh(31x))} - 31 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]'      },      {        id: 'trans-hard-gen-32',        difficulty: 'Hard',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\frac{\\sqrt{\\sin^2(32x) + \\cosh(32x)}}{e^{32x}\\tan^{-1}(x)}\\right)',        method: 'Logarithmic Differentiation and Logical Algebra',        solution: '\\begin{aligned}\n \\ln y &= \\frac{1}{2}\\ln(\\sin^2(32x) + \\cosh(32x)) - 32x - \\ln(\\tan^{-1}(x)) \\\\\n \\frac{y\'}{y} &= \\frac{1}{2} \\frac{2(32)\\sin(32x)\\cos(32x) + 32\\sinh(32x)}{\\sin^2(32x) + \\cosh(32x)} - 32 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\\\\n y\' &= y \\left[ \\frac{32\\sin(2\\cdot32x) + 32\\sinh(32x)}{2(\\sin^2(32x) + \\cosh(32x))} - 32 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]\n\\end{aligned}',        finalAnswer: 'y\' = y \\left[ \\frac{32\\sin(64x) + 32\\sinh(32x)}{2(\\sin^2(32x) + \\cosh(32x))} - 32 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]'      },      {        id: 'trans-hard-gen-33',        difficulty: 'Hard',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\frac{\\sqrt{\\sin^2(33x) + \\cosh(33x)}}{e^{33x}\\tan^{-1}(x)}\\right)',        method: 'Logarithmic Differentiation and Logical Algebra',        solution: '\\begin{aligned}\n \\ln y &= \\frac{1}{2}\\ln(\\sin^2(33x) + \\cosh(33x)) - 33x - \\ln(\\tan^{-1}(x)) \\\\\n \\frac{y\'}{y} &= \\frac{1}{2} \\frac{2(33)\\sin(33x)\\cos(33x) + 33\\sinh(33x)}{\\sin^2(33x) + \\cosh(33x)} - 33 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\\\\n y\' &= y \\left[ \\frac{33\\sin(2\\cdot33x) + 33\\sinh(33x)}{2(\\sin^2(33x) + \\cosh(33x))} - 33 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]\n\\end{aligned}',        finalAnswer: 'y\' = y \\left[ \\frac{33\\sin(66x) + 33\\sinh(33x)}{2(\\sin^2(33x) + \\cosh(33x))} - 33 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]'      },      {        id: 'trans-hard-gen-34',        difficulty: 'Hard',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\frac{\\sqrt{\\sin^2(34x) + \\cosh(34x)}}{e^{34x}\\tan^{-1}(x)}\\right)',        method: 'Logarithmic Differentiation and Logical Algebra',        solution: '\\begin{aligned}\n \\ln y &= \\frac{1}{2}\\ln(\\sin^2(34x) + \\cosh(34x)) - 34x - \\ln(\\tan^{-1}(x)) \\\\\n \\frac{y\'}{y} &= \\frac{1}{2} \\frac{2(34)\\sin(34x)\\cos(34x) + 34\\sinh(34x)}{\\sin^2(34x) + \\cosh(34x)} - 34 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\\\\n y\' &= y \\left[ \\frac{34\\sin(2\\cdot34x) + 34\\sinh(34x)}{2(\\sin^2(34x) + \\cosh(34x))} - 34 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]\n\\end{aligned}',        finalAnswer: 'y\' = y \\left[ \\frac{34\\sin(68x) + 34\\sinh(34x)}{2(\\sin^2(34x) + \\cosh(34x))} - 34 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]'      },      {        id: 'trans-hard-gen-35',        difficulty: 'Hard',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\frac{\\sqrt{\\sin^2(35x) + \\cosh(35x)}}{e^{35x}\\tan^{-1}(x)}\\right)',        method: 'Logarithmic Differentiation and Logical Algebra',        solution: '\\begin{aligned}\n \\ln y &= \\frac{1}{2}\\ln(\\sin^2(35x) + \\cosh(35x)) - 35x - \\ln(\\tan^{-1}(x)) \\\\\n \\frac{y\'}{y} &= \\frac{1}{2} \\frac{2(35)\\sin(35x)\\cos(35x) + 35\\sinh(35x)}{\\sin^2(35x) + \\cosh(35x)} - 35 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\\\\n y\' &= y \\left[ \\frac{35\\sin(2\\cdot35x) + 35\\sinh(35x)}{2(\\sin^2(35x) + \\cosh(35x))} - 35 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]\n\\end{aligned}',        finalAnswer: 'y\' = y \\left[ \\frac{35\\sin(70x) + 35\\sinh(35x)}{2(\\sin^2(35x) + \\cosh(35x))} - 35 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]'      },      {        id: 'trans-hard-gen-36',        difficulty: 'Hard',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\frac{\\sqrt{\\sin^2(36x) + \\cosh(36x)}}{e^{36x}\\tan^{-1}(x)}\\right)',        method: 'Logarithmic Differentiation and Logical Algebra',        solution: '\\begin{aligned}\n \\ln y &= \\frac{1}{2}\\ln(\\sin^2(36x) + \\cosh(36x)) - 36x - \\ln(\\tan^{-1}(x)) \\\\\n \\frac{y\'}{y} &= \\frac{1}{2} \\frac{2(36)\\sin(36x)\\cos(36x) + 36\\sinh(36x)}{\\sin^2(36x) + \\cosh(36x)} - 36 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\\\\n y\' &= y \\left[ \\frac{36\\sin(2\\cdot36x) + 36\\sinh(36x)}{2(\\sin^2(36x) + \\cosh(36x))} - 36 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]\n\\end{aligned}',        finalAnswer: 'y\' = y \\left[ \\frac{36\\sin(72x) + 36\\sinh(36x)}{2(\\sin^2(36x) + \\cosh(36x))} - 36 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]'      },      {        id: 'trans-hard-gen-37',        difficulty: 'Hard',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\frac{\\sqrt{\\sin^2(37x) + \\cosh(37x)}}{e^{37x}\\tan^{-1}(x)}\\right)',        method: 'Logarithmic Differentiation and Logical Algebra',        solution: '\\begin{aligned}\n \\ln y &= \\frac{1}{2}\\ln(\\sin^2(37x) + \\cosh(37x)) - 37x - \\ln(\\tan^{-1}(x)) \\\\\n \\frac{y\'}{y} &= \\frac{1}{2} \\frac{2(37)\\sin(37x)\\cos(37x) + 37\\sinh(37x)}{\\sin^2(37x) + \\cosh(37x)} - 37 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\\\\n y\' &= y \\left[ \\frac{37\\sin(2\\cdot37x) + 37\\sinh(37x)}{2(\\sin^2(37x) + \\cosh(37x))} - 37 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]\n\\end{aligned}',        finalAnswer: 'y\' = y \\left[ \\frac{37\\sin(74x) + 37\\sinh(37x)}{2(\\sin^2(37x) + \\cosh(37x))} - 37 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]'      },      {        id: 'trans-hard-gen-38',        difficulty: 'Hard',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\frac{\\sqrt{\\sin^2(38x) + \\cosh(38x)}}{e^{38x}\\tan^{-1}(x)}\\right)',        method: 'Logarithmic Differentiation and Logical Algebra',        solution: '\\begin{aligned}\n \\ln y &= \\frac{1}{2}\\ln(\\sin^2(38x) + \\cosh(38x)) - 38x - \\ln(\\tan^{-1}(x)) \\\\\n \\frac{y\'}{y} &= \\frac{1}{2} \\frac{2(38)\\sin(38x)\\cos(38x) + 38\\sinh(38x)}{\\sin^2(38x) + \\cosh(38x)} - 38 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\\\\n y\' &= y \\left[ \\frac{38\\sin(2\\cdot38x) + 38\\sinh(38x)}{2(\\sin^2(38x) + \\cosh(38x))} - 38 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]\n\\end{aligned}',        finalAnswer: 'y\' = y \\left[ \\frac{38\\sin(76x) + 38\\sinh(38x)}{2(\\sin^2(38x) + \\cosh(38x))} - 38 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]'      },      {        id: 'trans-hard-gen-39',        difficulty: 'Hard',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\frac{\\sqrt{\\sin^2(39x) + \\cosh(39x)}}{e^{39x}\\tan^{-1}(x)}\\right)',        method: 'Logarithmic Differentiation and Logical Algebra',        solution: '\\begin{aligned}\n \\ln y &= \\frac{1}{2}\\ln(\\sin^2(39x) + \\cosh(39x)) - 39x - \\ln(\\tan^{-1}(x)) \\\\\n \\frac{y\'}{y} &= \\frac{1}{2} \\frac{2(39)\\sin(39x)\\cos(39x) + 39\\sinh(39x)}{\\sin^2(39x) + \\cosh(39x)} - 39 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\\\\n y\' &= y \\left[ \\frac{39\\sin(2\\cdot39x) + 39\\sinh(39x)}{2(\\sin^2(39x) + \\cosh(39x))} - 39 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]\n\\end{aligned}',        finalAnswer: 'y\' = y \\left[ \\frac{39\\sin(78x) + 39\\sinh(39x)}{2(\\sin^2(39x) + \\cosh(39x))} - 39 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]'      },      {        id: 'trans-hard-gen-40',        difficulty: 'Hard',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\frac{\\sqrt{\\sin^2(40x) + \\cosh(40x)}}{e^{40x}\\tan^{-1}(x)}\\right)',        method: 'Logarithmic Differentiation and Logical Algebra',        solution: '\\begin{aligned}\n \\ln y &= \\frac{1}{2}\\ln(\\sin^2(40x) + \\cosh(40x)) - 40x - \\ln(\\tan^{-1}(x)) \\\\\n \\frac{y\'}{y} &= \\frac{1}{2} \\frac{2(40)\\sin(40x)\\cos(40x) + 40\\sinh(40x)}{\\sin^2(40x) + \\cosh(40x)} - 40 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\\\\n y\' &= y \\left[ \\frac{40\\sin(2\\cdot40x) + 40\\sinh(40x)}{2(\\sin^2(40x) + \\cosh(40x))} - 40 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]\n\\end{aligned}',        finalAnswer: 'y\' = y \\left[ \\frac{40\\sin(80x) + 40\\sinh(40x)}{2(\\sin^2(40x) + \\cosh(40x))} - 40 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]'      },      {        id: 'trans-hard-gen-41',        difficulty: 'Hard',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\frac{\\sqrt{\\sin^2(41x) + \\cosh(41x)}}{e^{41x}\\tan^{-1}(x)}\\right)',        method: 'Logarithmic Differentiation and Logical Algebra',        solution: '\\begin{aligned}\n \\ln y &= \\frac{1}{2}\\ln(\\sin^2(41x) + \\cosh(41x)) - 41x - \\ln(\\tan^{-1}(x)) \\\\\n \\frac{y\'}{y} &= \\frac{1}{2} \\frac{2(41)\\sin(41x)\\cos(41x) + 41\\sinh(41x)}{\\sin^2(41x) + \\cosh(41x)} - 41 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\\\\n y\' &= y \\left[ \\frac{41\\sin(2\\cdot41x) + 41\\sinh(41x)}{2(\\sin^2(41x) + \\cosh(41x))} - 41 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]\n\\end{aligned}',        finalAnswer: 'y\' = y \\left[ \\frac{41\\sin(82x) + 41\\sinh(41x)}{2(\\sin^2(41x) + \\cosh(41x))} - 41 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]'      },      {        id: 'trans-hard-gen-42',        difficulty: 'Hard',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\frac{\\sqrt{\\sin^2(42x) + \\cosh(42x)}}{e^{42x}\\tan^{-1}(x)}\\right)',        method: 'Logarithmic Differentiation and Logical Algebra',        solution: '\\begin{aligned}\n \\ln y &= \\frac{1}{2}\\ln(\\sin^2(42x) + \\cosh(42x)) - 42x - \\ln(\\tan^{-1}(x)) \\\\\n \\frac{y\'}{y} &= \\frac{1}{2} \\frac{2(42)\\sin(42x)\\cos(42x) + 42\\sinh(42x)}{\\sin^2(42x) + \\cosh(42x)} - 42 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\\\\n y\' &= y \\left[ \\frac{42\\sin(2\\cdot42x) + 42\\sinh(42x)}{2(\\sin^2(42x) + \\cosh(42x))} - 42 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]\n\\end{aligned}',        finalAnswer: 'y\' = y \\left[ \\frac{42\\sin(84x) + 42\\sinh(42x)}{2(\\sin^2(42x) + \\cosh(42x))} - 42 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]'      },      {        id: 'trans-hard-gen-43',        difficulty: 'Hard',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\frac{\\sqrt{\\sin^2(43x) + \\cosh(43x)}}{e^{43x}\\tan^{-1}(x)}\\right)',        method: 'Logarithmic Differentiation and Logical Algebra',        solution: '\\begin{aligned}\n \\ln y &= \\frac{1}{2}\\ln(\\sin^2(43x) + \\cosh(43x)) - 43x - \\ln(\\tan^{-1}(x)) \\\\\n \\frac{y\'}{y} &= \\frac{1}{2} \\frac{2(43)\\sin(43x)\\cos(43x) + 43\\sinh(43x)}{\\sin^2(43x) + \\cosh(43x)} - 43 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\\\\n y\' &= y \\left[ \\frac{43\\sin(2\\cdot43x) + 43\\sinh(43x)}{2(\\sin^2(43x) + \\cosh(43x))} - 43 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]\n\\end{aligned}',        finalAnswer: 'y\' = y \\left[ \\frac{43\\sin(86x) + 43\\sinh(43x)}{2(\\sin^2(43x) + \\cosh(43x))} - 43 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]'      },      {        id: 'trans-hard-gen-44',        difficulty: 'Hard',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\frac{\\sqrt{\\sin^2(44x) + \\cosh(44x)}}{e^{44x}\\tan^{-1}(x)}\\right)',        method: 'Logarithmic Differentiation and Logical Algebra',        solution: '\\begin{aligned}\n \\ln y &= \\frac{1}{2}\\ln(\\sin^2(44x) + \\cosh(44x)) - 44x - \\ln(\\tan^{-1}(x)) \\\\\n \\frac{y\'}{y} &= \\frac{1}{2} \\frac{2(44)\\sin(44x)\\cos(44x) + 44\\sinh(44x)}{\\sin^2(44x) + \\cosh(44x)} - 44 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\\\\n y\' &= y \\left[ \\frac{44\\sin(2\\cdot44x) + 44\\sinh(44x)}{2(\\sin^2(44x) + \\cosh(44x))} - 44 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]\n\\end{aligned}',        finalAnswer: 'y\' = y \\left[ \\frac{44\\sin(88x) + 44\\sinh(44x)}{2(\\sin^2(44x) + \\cosh(44x))} - 44 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]'      },      {        id: 'trans-hard-gen-45',        difficulty: 'Hard',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\frac{\\sqrt{\\sin^2(45x) + \\cosh(45x)}}{e^{45x}\\tan^{-1}(x)}\\right)',        method: 'Logarithmic Differentiation and Logical Algebra',        solution: '\\begin{aligned}\n \\ln y &= \\frac{1}{2}\\ln(\\sin^2(45x) + \\cosh(45x)) - 45x - \\ln(\\tan^{-1}(x)) \\\\\n \\frac{y\'}{y} &= \\frac{1}{2} \\frac{2(45)\\sin(45x)\\cos(45x) + 45\\sinh(45x)}{\\sin^2(45x) + \\cosh(45x)} - 45 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\\\\n y\' &= y \\left[ \\frac{45\\sin(2\\cdot45x) + 45\\sinh(45x)}{2(\\sin^2(45x) + \\cosh(45x))} - 45 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]\n\\end{aligned}',        finalAnswer: 'y\' = y \\left[ \\frac{45\\sin(90x) + 45\\sinh(45x)}{2(\\sin^2(45x) + \\cosh(45x))} - 45 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]'      },      {        id: 'trans-hard-gen-46',        difficulty: 'Hard',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\frac{\\sqrt{\\sin^2(46x) + \\cosh(46x)}}{e^{46x}\\tan^{-1}(x)}\\right)',        method: 'Logarithmic Differentiation and Logical Algebra',        solution: '\\begin{aligned}\n \\ln y &= \\frac{1}{2}\\ln(\\sin^2(46x) + \\cosh(46x)) - 46x - \\ln(\\tan^{-1}(x)) \\\\\n \\frac{y\'}{y} &= \\frac{1}{2} \\frac{2(46)\\sin(46x)\\cos(46x) + 46\\sinh(46x)}{\\sin^2(46x) + \\cosh(46x)} - 46 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\\\\n y\' &= y \\left[ \\frac{46\\sin(2\\cdot46x) + 46\\sinh(46x)}{2(\\sin^2(46x) + \\cosh(46x))} - 46 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]\n\\end{aligned}',        finalAnswer: 'y\' = y \\left[ \\frac{46\\sin(92x) + 46\\sinh(46x)}{2(\\sin^2(46x) + \\cosh(46x))} - 46 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]'      },      {        id: 'trans-hard-gen-47',        difficulty: 'Hard',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\frac{\\sqrt{\\sin^2(47x) + \\cosh(47x)}}{e^{47x}\\tan^{-1}(x)}\\right)',        method: 'Logarithmic Differentiation and Logical Algebra',        solution: '\\begin{aligned}\n \\ln y &= \\frac{1}{2}\\ln(\\sin^2(47x) + \\cosh(47x)) - 47x - \\ln(\\tan^{-1}(x)) \\\\\n \\frac{y\'}{y} &= \\frac{1}{2} \\frac{2(47)\\sin(47x)\\cos(47x) + 47\\sinh(47x)}{\\sin^2(47x) + \\cosh(47x)} - 47 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\\\\n y\' &= y \\left[ \\frac{47\\sin(2\\cdot47x) + 47\\sinh(47x)}{2(\\sin^2(47x) + \\cosh(47x))} - 47 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]\n\\end{aligned}',        finalAnswer: 'y\' = y \\left[ \\frac{47\\sin(94x) + 47\\sinh(47x)}{2(\\sin^2(47x) + \\cosh(47x))} - 47 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]'      },      {        id: 'trans-hard-gen-48',        difficulty: 'Hard',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\frac{\\sqrt{\\sin^2(48x) + \\cosh(48x)}}{e^{48x}\\tan^{-1}(x)}\\right)',        method: 'Logarithmic Differentiation and Logical Algebra',        solution: '\\begin{aligned}\n \\ln y &= \\frac{1}{2}\\ln(\\sin^2(48x) + \\cosh(48x)) - 48x - \\ln(\\tan^{-1}(x)) \\\\\n \\frac{y\'}{y} &= \\frac{1}{2} \\frac{2(48)\\sin(48x)\\cos(48x) + 48\\sinh(48x)}{\\sin^2(48x) + \\cosh(48x)} - 48 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\\\\n y\' &= y \\left[ \\frac{48\\sin(2\\cdot48x) + 48\\sinh(48x)}{2(\\sin^2(48x) + \\cosh(48x))} - 48 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]\n\\end{aligned}',        finalAnswer: 'y\' = y \\left[ \\frac{48\\sin(96x) + 48\\sinh(48x)}{2(\\sin^2(48x) + \\cosh(48x))} - 48 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]'      },      {        id: 'trans-hard-gen-49',        difficulty: 'Hard',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\frac{\\sqrt{\\sin^2(49x) + \\cosh(49x)}}{e^{49x}\\tan^{-1}(x)}\\right)',        method: 'Logarithmic Differentiation and Logical Algebra',        solution: '\\begin{aligned}\n \\ln y &= \\frac{1}{2}\\ln(\\sin^2(49x) + \\cosh(49x)) - 49x - \\ln(\\tan^{-1}(x)) \\\\\n \\frac{y\'}{y} &= \\frac{1}{2} \\frac{2(49)\\sin(49x)\\cos(49x) + 49\\sinh(49x)}{\\sin^2(49x) + \\cosh(49x)} - 49 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\\\\n y\' &= y \\left[ \\frac{49\\sin(2\\cdot49x) + 49\\sinh(49x)}{2(\\sin^2(49x) + \\cosh(49x))} - 49 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]\n\\end{aligned}',        finalAnswer: 'y\' = y \\left[ \\frac{49\\sin(98x) + 49\\sinh(49x)}{2(\\sin^2(49x) + \\cosh(49x))} - 49 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]'      },      {        id: 'trans-hard-gen-50',        difficulty: 'Hard',        type: 'free-response',        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\frac{\\sqrt{\\sin^2(50x) + \\cosh(50x)}}{e^{50x}\\tan^{-1}(x)}\\right)',        method: 'Logarithmic Differentiation and Logical Algebra',        solution: '\\begin{aligned}\n \\ln y &= \\frac{1}{2}\\ln(\\sin^2(50x) + \\cosh(50x)) - 50x - \\ln(\\tan^{-1}(x)) \\\\\n \\frac{y\'}{y} &= \\frac{1}{2} \\frac{2(50)\\sin(50x)\\cos(50x) + 50\\sinh(50x)}{\\sin^2(50x) + \\cosh(50x)} - 50 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\\\\n y\' &= y \\left[ \\frac{50\\sin(2\\cdot50x) + 50\\sinh(50x)}{2(\\sin^2(50x) + \\cosh(50x))} - 50 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]\n\\end{aligned}',        finalAnswer: 'y\' = y \\left[ \\frac{50\\sin(100x) + 50\\sinh(50x)}{2(\\sin^2(50x) + \\cosh(50x))} - 50 - \\frac{1}{(1+x^2)\\tan^{-1}(x)} \\right]'      },
      {
        id: 'trans-log-1',
        difficulty: 'Medium',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = x^x (1 - \\ln x)',
        method: 'Logarithmic Differentiation and Product Rule',
        solution: '\\begin{aligned}\n\\ln y &= x \\ln x + \\ln(1 - \\ln x) \\\\\n\\frac{y\'}{y} &= \\ln x + 1 - \\frac{1}{x(1 - \\ln x)} \\\\\ny\' &= x^x (1 - \\ln x) \\left( \\ln x + 1 - \\frac{1}{x(1 - \\ln x)} \\right)\n\\end{aligned}',
        finalAnswer: 'y\' = x^x (1 - \\ln x)(\\ln x + 1) - x^{x-1}'
      },
      {
        id: 'trans-log-2',
        difficulty: 'Medium',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\frac{(x-5)^3}{(x-4)^4}',
        method: 'Logarithmic Differentiation',
        solution: '\\begin{aligned}\n\\ln y &= 3 \\ln(x-5) - 4 \\ln(x-4) \\\\\n\\frac{y\'}{y} &= \\frac{3}{x-5} - \\frac{4}{x-4} \\\\\ny\' &= \\frac{(x-5)^3}{(x-4)^4} \\left( \\frac{3(x-4) - 4(x-5)}{(x-5)(x-4)} \\right)\n\\end{aligned}',
        finalAnswer: 'y\' = \\frac{(x-5)^2 (8-x)}{(x-4)^5}'
      },
      {
        id: 'trans-log-3',
        difficulty: 'Medium',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\ln \\frac{x^2(x - 1)}{(x + 1)^4}',
        method: 'Logarithm Properties and Chain Rule',
        solution: '\\begin{aligned}\ny &= 2 \\ln x + \\ln(x-1) - 4 \\ln(x+1) \\\\\ny\' &= \\frac{2}{x} + \\frac{1}{x-1} - \\frac{4}{x+1}\n\\end{aligned}',
        finalAnswer: 'y\' = \\frac{-x^2 + 4x - 2}{x(x-1)(x+1)}'
      },
      {
        id: 'trans-exp-1',
        difficulty: 'Easy',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = 3^{4x}',
        method: 'Exponential Rule and Chain Rule',
        solution: '\\begin{aligned}\ny\' &= 3^{4x} \\ln 3 \\cdot \\frac{d}{dx}(4x) \\\\\ny\' &= 4 \\cdot 3^{4x} \\ln 3\n\\end{aligned}',
        finalAnswer: 'y\' = 4 \\ln 3 \\cdot 3^{4x}'
      },
      {
        id: 'trans-exp-2',
        difficulty: 'Medium',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\frac{1 + 2^{x}}{1 - 2^{x}}',
        method: 'Quotient Rule and Exponential Rule',
        solution: '\\begin{aligned}\ny\' &= \\frac{(1 - 2^x)(2^x \\ln 2) - (1 + 2^x)(-2^x \\ln 2)}{(1 - 2^x)^2} \\\\\ny\' &= \\frac{2^x \\ln 2 - 4^x \\ln 2 + 2^x \\ln 2 + 4^x \\ln 2}{(1 - 2^x)^2}\n\\end{aligned}',
        finalAnswer: 'y\' = \\frac{2^{x+1} \\ln 2}{(1 - 2^x)^2}'
      },
      {
        id: 'trans-exp-3',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = 2^{x^{e^{x}}}',
        method: 'Logarithmic Differentiation',
        solution: '\\begin{aligned}\n\\ln y &= x^{e^x} \\ln 2 \\\\\n\\ln(\\ln y) &= \\ln(\\ln 2) + e^x \\ln x \\\\\n\\frac{1}{\\ln y} \\frac{y\'}{y} &= e^x \\ln x + \\frac{e^x}{x} \\\\\ny\' &= y \\ln y \\cdot e^x \\left( \\ln x + \\frac{1}{x} \\right)\n\\end{aligned}',
        finalAnswer: 'y\' = 2^{x^{e^x}} x^{e^x} e^x \\ln 2 \\left( \\ln x + \\frac{1}{x} \\right)'
      },
      {
        id: 'trans-trig-1',
        difficulty: 'Medium',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\ln \\left( \\sec x + \\tan x \\right)',
        method: 'Chain Rule',
        solution: '\\begin{aligned}\ny\' &= \\frac{1}{\\sec x + \\tan x} (\\sec x \\tan x + \\sec^2 x) \\\\\ny\' &= \\frac{\\sec x (\\tan x + \\sec x)}{\\sec x + \\tan x}\n\\end{aligned}',
        finalAnswer: 'y\' = \\sec x'
      },
      {
        id: 'trans-trig-2',
        difficulty: 'Medium',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\ln \\left( \\frac{1 - \\sin x}{1 + \\sin x} \\right)',
        method: 'Logarithm Properties and Chain Rule',
        solution: '\\begin{aligned}\ny &= \\ln(1 - \\sin x) - \\ln(1 + \\sin x) \\\\\ny\' &= \\frac{-\\cos x}{1 - \\sin x} - \\frac{\\cos x}{1 + \\sin x} \\\\\ny\' &= \\frac{-\\cos x(1 + \\sin x) - \\cos x(1 - \\sin x)}{1 - \\sin^2 x} \\\\\ny\' &= \\frac{-2\\cos x}{\\cos^2 x}\n\\end{aligned}',
        finalAnswer: 'y\' = -2\\sec x'
      },
      {
        id: 'trans-trig-3',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad \\psi = \\frac{\\cos^6 2x}{(1 - \\sin 2x)^3}',
        method: 'Quotient Rule and Chain Rule',
        solution: '\\begin{aligned}\n\\psi\' &= \\frac{(1-\\sin 2x)^3(6\\cos^5 2x)(-2\\sin 2x) - \\cos^6 2x(3)(1-\\sin 2x)^2(-2\\cos 2x)}{(1-\\sin 2x)^6} \\\\\n\\psi\' &= \\frac{-12\\cos^5 2x \\sin 2x (1-\\sin 2x) + 6\\cos^7 2x}{(1-\\sin 2x)^4}\n\\end{aligned}',
        finalAnswer: '\\psi\' = \\frac{6\\cos^5 2x (\\cos^2 2x - 2\\sin 2x + 2\\sin^2 2x)}{(1-\\sin 2x)^4}'
      },
      {
        id: 'trans-invtrig-1',
        difficulty: 'Medium',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = x \\text{Arctan}x - \\ln \\sqrt{1+x^2}',
        method: 'Product Rule and Chain Rule',
        solution: '\\begin{aligned}\ny\' &= \\left( \\text{Arctan}x + x \\frac{1}{1+x^2} \\right) - \\frac{1}{2} \\frac{2x}{1+x^2} \\\\\ny\' &= \\text{Arctan}x + \\frac{x}{1+x^2} - \\frac{x}{1+x^2}\n\\end{aligned}',
        finalAnswer: 'y\' = \\text{Arctan}x'
      },
      {
        id: 'trans-invtrig-2',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = x \\text{Arcsec}2x + \\frac{1}{2} \\ln \\left( 2x + \\sqrt{4x^2 - 1} \\right)',
        method: 'Product Rule and Chain Rule',
        solution: '\\begin{aligned}\ny\' &= \\text{Arcsec}2x + x \\frac{2}{|2x|\\sqrt{4x^2-1}} + \\frac{1}{2} \\frac{2 + \\frac{8x}{2\\sqrt{4x^2-1}}}{2x + \\sqrt{4x^2-1}} \\\\\ny\' &= \\text{Arcsec}2x + \\frac{1}{\\sqrt{4x^2-1}} + \\frac{1}{2} \\frac{2\\sqrt{4x^2-1} + 4x}{\\sqrt{4x^2-1}(2x + \\sqrt{4x^2-1})} \\\\\ny\' &= \\text{Arcsec}2x + \\frac{1}{\\sqrt{4x^2-1}} + \\frac{1}{\\sqrt{4x^2-1}}\n\\end{aligned}',
        finalAnswer: 'y\' = \\text{Arcsec}2x + \\frac{2}{\\sqrt{4x^2-1}}'
      },
      {
        id: 'trans-implicit-1',
        difficulty: 'Medium',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad \\sin y + \\ln x = \\ln (x+y)',
        method: 'Implicit Differentiation',
        solution: '\\begin{aligned}\n\\cos y \\cdot y\' + \\frac{1}{x} &= \\frac{1 + y\'}{x+y} \\\\\n\\cos y \\cdot y\' - \\frac{y\'}{x+y} &= \\frac{1}{x+y} - \\frac{1}{x} \\\\\ny\' \\left( \\cos y - \\frac{1}{x+y} \\right) &= \\frac{x - (x+y)}{x(x+y)} \\\\\ny\' \\left( \\frac{(x+y)\\cos y - 1}{x+y} \\right) &= \\frac{-y}{x(x+y)}\n\\end{aligned}',
        finalAnswer: 'y\' = \\frac{-y}{x((x+y)\\cos y - 1)}'
      },
      {
        id: 'trans-implicit-2',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad x^{y} - e^{y} = x^{e^{y}}',
        method: 'Implicit Differentiation',
        solution: '\\begin{aligned}\nx^y \\left( y\' \\ln x + \\frac{y}{x} \\right) - e^y y\' &= x^{e^y} \\left( e^y y\' \\ln x + \\frac{e^y}{x} \\right) \\\\\ny\' (x^y \\ln x - e^y - x^{e^y} e^y \\ln x) &= x^{e^y} \\frac{e^y}{x} - y x^{y-1}\n\\end{aligned}',
        finalAnswer: 'y\' = \\frac{x^{e^y-1} e^y - y x^{y-1}}{x^y \\ln x - e^y - x^{e^y} e^y \\ln x}'
      },
      {
        id: 'trans-param-1',
        difficulty: 'Medium',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad x = \\ln \\frac{1 + t^2}{1 - t^2}',
        method: 'Parametric Differentiation',
        solution: '\\begin{aligned}\nx &= \\ln(1+t^2) - \\ln(1-t^2) \\\\\n\\frac{dx}{dt} &= \\frac{2t}{1+t^2} - \\frac{-2t}{1-t^2} \\\\\n\\frac{dx}{dt} &= \\frac{2t(1-t^2) + 2t(1+t^2)}{1-t^4}\n\\end{aligned}',
        finalAnswer: '\\frac{dx}{dt} = \\frac{4t}{1 - t^4}'
      },
      {
        id: 'trans-alg-1',
        difficulty: 'Medium',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\frac{x^2}{\\sqrt{2ax - x^2}}',
        method: 'Quotient Rule and Chain Rule',
        solution: '\\begin{aligned}\ny\' &= \\frac{2x\\sqrt{2ax-x^2} - x^2 \\frac{2a-2x}{2\\sqrt{2ax-x^2}}}{2ax-x^2} \\\\\ny\' &= \\frac{2x(2ax-x^2) - x^2(a-x)}{(2ax-x^2)^{\\frac{3}{2}}} \\\\\ny\' &= \\frac{4ax^2 - 2x^3 - ax^2 + x^3}{(2ax-x^2)^{\\frac{3}{2}}}\n\\end{aligned}',
        finalAnswer: 'y\' = \\frac{3ax^2 - x^3}{(2ax-x^2)^{\\frac{3}{2}}}'
      },
      {
        id: 'trans-higher-1',
        difficulty: 'Medium',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = x^3 \\ln x',
        method: 'Product Rule',
        solution: '\\begin{aligned}\ny\' &= 3x^2 \\ln x + x^2 \\\\\ny\'\' &= 6x \\ln x + 3x + 2x = 6x \\ln x + 5x \\\\\ny\'\'\' &= 6 \\ln x + 6 + 5 = 6 \\ln x + 11 \\\\\ny^{(4)} &= \\frac{6}{x}\n\\end{aligned}',
        finalAnswer: 'y^{(4)} = \\frac{6}{x}'
      },
      {
        id: 'trans-hard-1',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\frac{(x^2+1)^{\\sin x}}{\\sqrt{x^3-1} e^{2x}}',
        method: 'Logarithmic Differentiation',
        solution: '\\begin{aligned}\n\\ln y &= \\sin x \\ln(x^2+1) - \\frac{1}{2}\\ln(x^3-1) - 2x \\\\\n\\frac{y\'}{y} &= \\cos x \\ln(x^2+1) + \\frac{2x \\sin x}{x^2+1} - \\frac{3x^2}{2(x^3-1)} - 2 \\\\\ny\' &= y \\left( \\cos x \\ln(x^2+1) + \\frac{2x \\sin x}{x^2+1} - \\frac{3x^2}{2(x^3-1)} - 2 \\right)\n\\end{aligned}',
        finalAnswer: 'y\' = \\frac{(x^2+1)^{\\sin x}}{\\sqrt{x^3-1} e^{2x}} \\left( \\cos x \\ln(x^2+1) + \\frac{2x \\sin x}{x^2+1} - \\frac{3x^2}{2(x^3-1)} - 2 \\right)'
      },
      {
        id: 'trans-hard-2',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = e^{\\sec^2(3x)} \\cdot 2^{\\sqrt{x^2+1}}',
        method: 'Exponential Functions and Product Rule',
        solution: '\\begin{aligned}\ny\' &= \\frac{d}{dx}\\left( e^{\\sec^2(3x)} \\right) \\cdot 2^{\\sqrt{x^2+1}} + e^{\\sec^2(3x)} \\cdot \\frac{d}{dx}\\left( 2^{\\sqrt{x^2+1}} \\right) \\\\\n\\frac{d}{dx}\\left( e^{\\sec^2(3x)} \\right) &= e^{\\sec^2(3x)} \\cdot 2\\sec(3x) \\cdot \\sec(3x)\\tan(3x) \\cdot 3 = 6\\sec^2(3x)\\tan(3x) e^{\\sec^2(3x)} \\\\\n\\frac{d}{dx}\\left( 2^{\\sqrt{x^2+1}} \\right) &= 2^{\\sqrt{x^2+1}} \\ln 2 \\cdot \\frac{x}{\\sqrt{x^2+1}} \\\\\ny\' &= e^{\\sec^2(3x)} 2^{\\sqrt{x^2+1}} \\left( 6\\sec^2(3x)\\tan(3x) + \\frac{x \\ln 2}{\\sqrt{x^2+1}} \\right)\n\\end{aligned}',
        finalAnswer: 'y\' = e^{\\sec^2(3x)} 2^{\\sqrt{x^2+1}} \\left( 6\\sec^2(3x)\\tan(3x) + \\frac{x \\ln 2}{\\sqrt{x^2+1}} \\right)'
      },
      {
        id: 'trans-hard-3',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\cos^3\\left( \\sin\\left( \\sqrt{x^2 + \\cot(4x)} \\right) \\right)',
        method: 'Trigonometric Functions and Chain Rule',
        solution: '\\begin{aligned}\ny\' &= 3\\cos^2\\left( \\sin\\left( \\sqrt{x^2 + \\cot(4x)} \\right) \\right) \\cdot \\left( -\\sin\\left( \\sin\\left( \\sqrt{x^2 + \\cot(4x)} \\right) \\right) \\right) \\cdot \\frac{d}{dx} \\sin\\left( \\sqrt{x^2 + \\cot(4x)} \\right) \\\\\n\\frac{d}{dx} \\sin\\left( \\sqrt{x^2 + \\cot(4x)} \\right) &= \\cos\\left( \\sqrt{x^2 + \\cot(4x)} \\right) \\cdot \\frac{1}{2\\sqrt{x^2 + \\cot(4x)}} \\cdot (2x - 4\\csc^2(4x))\n\\end{aligned}',
        finalAnswer: 'y\' = \\frac{-3(x - 2\\csc^2(4x))\\cos^2(\\sin(\\sqrt{x^2 + \\cot(4x)}))\\sin(\\sin(\\sqrt{x^2 + \\cot(4x)}))\\cos(\\sqrt{x^2 + \\cot(4x)})}{\\sqrt{x^2 + \\cot(4x)}}'
      },
      {
        id: 'trans-hard-4',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\text{Arctan}\\left( \\frac{e^x - e^{-x}}{e^x + e^{-x}} \\right)',
        method: 'Inverse Trigonometric Functions and Chain Rule',
        solution: '\\begin{aligned}\ny &= \\text{Arctan}(\\tanh x) \\\\\ny\' &= \\frac{1}{1 + \\tanh^2 x} \\cdot \\text{sech}^2 x \\\\\ny\' &= \\frac{\\text{sech}^2 x}{1 + \\tanh^2 x} = \\frac{1}{\\cosh^2 x + \\sinh^2 x} = \\frac{1}{\\cosh(2x)}\n\\end{aligned}',
        finalAnswer: 'y\' = \\text{sech}(2x)'
      },
      {
        id: 'trans-hard-5',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = x^2 e^{-x} \\sin x',
        method: 'Higher-order derivatives',
        solution: '\\begin{aligned}\ny\' &= 2x e^{-x} \\sin x - x^2 e^{-x} \\sin x + x^2 e^{-x} \\cos x \\\\\ny\' &= x e^{-x} (2\\sin x - x\\sin x + x\\cos x) \\\\\ny\'\' &= \\frac{d}{dx} [x^2 e^{-x} (\\cos x - \\sin x) + 2x e^{-x} \\sin x] \\\\\ny\'\' &= x^2 e^{-x} (-2\\cos x) + 2x e^{-x} (\\cos x - \\sin x) - x^2 e^{-x} (\\cos x - \\sin x) + 2e^{-x} \\sin x - 2x e^{-x} \\sin x + 2x e^{-x} \\cos x \\\\\ny\'\' &= e^{-x} \\left( x^2(-2\\cos x - \\cos x + \\sin x) + x(2\\cos x - 2\\sin x - 2\\sin x + 2\\cos x) + 2\\sin x \\right)\n\\end{aligned}',
        finalAnswer: 'y\'\' = e^{-x} \\left( x^2(\\sin x - 3\\cos x) + 4x(\\cos x - \\sin x) + 2\\sin x \\right)'
      },
                        {
        id: 'trans-superhard-t5-1',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\ln(\\tan(2x) + \\sec(2x)) \\cdot \\cos(4x)`,
        method: 'Product Rule and Chain Rule',
        solution: `\\begin{aligned}
\\frac{d}{dx}[\\ln(\\tan(2x) + \\sec(2x))] &= \\frac{2\\sec^2(2x) + 2\\sec(2x)\\tan(2x)}{\\tan(2x) + \\sec(2x)} = 2\\sec(2x) \\\\
y' &= 2\\sec(2x) \\cos(4x) + \\ln(\\tan(2x) + \\sec(2x)) (-4\\sin(4x))
\\end{aligned}`,
        finalAnswer: `y' = 2\\sec(2x) \\cos(4x) - 4\\sin(4x) \\ln(\\tan(2x) + \\sec(2x))`
      },
      {
        id: 'trans-superhard-t5-2',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\frac{\\sin(6x)}{1 + \\cos(6x)}`,
        method: 'Double Angle Identity Simplification',
        solution: `\\begin{aligned}
y &= \\frac{2\\sin(3x)\\cos(3x)}{2\\cos^2(3x)} = \\tan(3x) \\\\
y' &= 3\\sec^2(3x)
\\end{aligned}`,
        finalAnswer: `y' = 3\\sec^2(3x)`
      },
      {
        id: 'trans-superhard-t5-3',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\ln\\left(\\sqrt{\\frac{1-\\cos(6x)}{1+\\cos(6x)}}\\right)`,
        method: 'Double Angle Identity and Logarithmic Differentiation',
        solution: `\\begin{aligned}
y &= \\ln\\left(\\sqrt{\\frac{2\\sin^2(3x)}{2\\cos^2(3x)}}\\right) = \\ln(\\tan(3x)) \\\\
y' &= \\frac{1}{\\tan(3x)} \\cdot 3\\sec^2(3x) = \\frac{3\\cos(3x)}{\\sin(3x)} \\cdot \\frac{1}{\\cos^2(3x)} = \\frac{3}{\\sin(3x)\\cos(3x)} = \\frac{6}{\\sin(6x)} = 6\\csc(6x)
\\end{aligned}`,
        finalAnswer: `y' = 6\\csc(6x)`
      },
      {
        id: 'trans-superhard-t5-4',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = e^{\\sin^2(2x)}`,
        method: 'Chain Rule and Double Angle Identity',
        solution: `\\begin{aligned}
y' &= e^{\\sin^2(2x)} \\cdot 2\\sin(2x)\\cos(2x) \\cdot 2 \\\\
y' &= 2 e^{\\sin^2(2x)} \\sin(4x)
\\end{aligned}`,
        finalAnswer: `y' = 2 e^{\\sin^2(2x)} \\sin(4x)`
      },
      {
        id: 'trans-superhard-t5-5',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\arcsin\\left(\\frac{2 \\tan(6x)}{1 + \\tan^2(6x)}\\right)`,
        method: 'Double Angle Identity for Sine',
        solution: `\\begin{aligned}
\\frac{2 \\tan(6x)}{1 + \\tan^2(6x)} &= \\sin(12x) \\\\
y &= \\arcsin(\\sin(12x)) = 12x \\quad \\text{(assuming principal domain)} \\\\
y' &= 12
\\end{aligned}`,
        finalAnswer: `y' = 12`
      },
      {
        id: 'trans-superhard-t5-6',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\cos^4(6x) - \\sin^4(6x)`,
        method: 'Algebraic Simplification and Double Angle Identity',
        solution: `\\begin{aligned}
y &= (\\cos^2(6x) - \\sin^2(6x))(\\cos^2(6x) + \\sin^2(6x)) \\\\
y &= \\cos(12x) \\cdot 1 = \\cos(12x) \\\\
y' &= -12\\sin(12x)
\\end{aligned}`,
        finalAnswer: `y' = -12\\sin(12x)`
      },
      {
        id: 'trans-superhard-t5-7',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\sqrt{1 + \\sin(8x)}`,
        method: 'Perfect Square and Chain Rule',
        solution: `\\begin{aligned}
1 + \\sin(8x) &= \\sin^2(4x) + \\cos^2(4x) + 2\\sin(4x)\\cos(4x) = (\\sin(4x) + \\cos(4x))^2 \\\\
y &= |\\sin(4x) + \\cos(4x)| \\\\
y' &= 4(\\cos(4x) - \\sin(4x)) \\cdot \\text{sgn}(\\sin(4x) + \\cos(4x))
\\end{aligned}`,
        finalAnswer: `y' = 4(\\cos(4x) - \\sin(4x)) \\quad \\text{(for } \\sin(4x) + \\cos(4x) > 0 \\text{)}`
      },
      {
        id: 'trans-superhard-t5-8',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\ln(\\sec(2x) + \\tan(2x))^{\\sin(2x)}`,
        method: 'Logarithmic Properties and Product Rule',
        solution: `\\begin{aligned}
y &= \\sin(2x) \\ln(\\sec(2x) + \\tan(2x)) \\\\
y' &= 2\\cos(2x) \\ln(\\sec(2x) + \\tan(2x)) + \\sin(2x) \\cdot \\frac{2\\sec(2x)(\\sec(2x) + \\tan(2x))}{\\sec(2x) + \\tan(2x)} \\\\
y' &= 2\\cos(2x) \\ln(\\sec(2x) + \\tan(2x)) + 2\\sin(2x)\\sec(2x) \\\\
y' &= 2\\cos(2x) \\ln(\\sec(2x) + \\tan(2x)) + 2\\tan(2x)
\\end{aligned}`,
        finalAnswer: `y' = 2\\cos(2x) \\ln(\\sec(2x) + \\tan(2x)) + 2\\tan(2x)`
      },
      {
        id: 'trans-superhard-t5-9',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\frac{1 - \\tan^2(5x)}{1 + \\tan^2(5x)}`,
        method: 'Double Angle Identity for Cosine',
        solution: `\\begin{aligned}
y &= \\cos(10x) \\\\
y' &= -10\\sin(10x)
\\end{aligned}`,
        finalAnswer: `y' = -10\\sin(10x)`
      },
      {
        id: 'trans-superhard-t5-10',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = e^{2x} \\sin(3x) \\cos(3x)`,
        method: 'Double Angle Identity and Product Rule',
        solution: `\\begin{aligned}
y &= \\frac{1}{2} e^{2x} \\sin(6x) \\\\
y' &= \\frac{1}{2} \\left( 2 e^{2x} \\sin(6x) + e^{2x} \\cos(6x) \\cdot 6 \\right) \\\\
y' &= \\frac{1}{2} e^{2x} (2 \\sin(6x) + 6 \\cos(6x))
\\end{aligned}`,
        finalAnswer: `y' = \\frac{1}{2} e^{2x} (2 \\sin(6x) + 6 \\cos(6x))`
      },
      {
        id: 'trans-superhard-t5-11',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\ln(\\tan(5x) + \\sec(5x)) \\cdot \\cos(10x)`,
        method: 'Product Rule and Chain Rule',
        solution: `\\begin{aligned}
\\frac{d}{dx}[\\ln(\\tan(5x) + \\sec(5x))] &= \\frac{5\\sec^2(5x) + 5\\sec(5x)\\tan(5x)}{\\tan(5x) + \\sec(5x)} = 5\\sec(5x) \\\\
y' &= 5\\sec(5x) \\cos(10x) + \\ln(\\tan(5x) + \\sec(5x)) (-10\\sin(10x))
\\end{aligned}`,
        finalAnswer: `y' = 5\\sec(5x) \\cos(10x) - 10\\sin(10x) \\ln(\\tan(5x) + \\sec(5x))`
      },
      {
        id: 'trans-superhard-t5-12',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\frac{\\sin(8x)}{1 + \\cos(8x)}`,
        method: 'Double Angle Identity Simplification',
        solution: `\\begin{aligned}
y &= \\frac{2\\sin(4x)\\cos(4x)}{2\\cos^2(4x)} = \\tan(4x) \\\\
y' &= 4\\sec^2(4x)
\\end{aligned}`,
        finalAnswer: `y' = 4\\sec^2(4x)`
      },
      {
        id: 'trans-superhard-t5-13',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\ln\\left(\\sqrt{\\frac{1-\\cos(12x)}{1+\\cos(12x)}}\\right)`,
        method: 'Double Angle Identity and Logarithmic Differentiation',
        solution: `\\begin{aligned}
y &= \\ln\\left(\\sqrt{\\frac{2\\sin^2(6x)}{2\\cos^2(6x)}}\\right) = \\ln(\\tan(6x)) \\\\
y' &= \\frac{1}{\\tan(6x)} \\cdot 6\\sec^2(6x) = \\frac{6\\cos(6x)}{\\sin(6x)} \\cdot \\frac{1}{\\cos^2(6x)} = \\frac{6}{\\sin(6x)\\cos(6x)} = \\frac{12}{\\sin(12x)} = 12\\csc(12x)
\\end{aligned}`,
        finalAnswer: `y' = 12\\csc(12x)`
      },
      {
        id: 'trans-superhard-t5-14',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = e^{\\sin^2(4x)}`,
        method: 'Chain Rule and Double Angle Identity',
        solution: `\\begin{aligned}
y' &= e^{\\sin^2(4x)} \\cdot 2\\sin(4x)\\cos(4x) \\cdot 4 \\\\
y' &= 4 e^{\\sin^2(4x)} \\sin(8x)
\\end{aligned}`,
        finalAnswer: `y' = 4 e^{\\sin^2(4x)} \\sin(8x)`
      },
      {
        id: 'trans-superhard-t5-15',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\arcsin\\left(\\frac{2 \\tan(3x)}{1 + \\tan^2(3x)}\\right)`,
        method: 'Double Angle Identity for Sine',
        solution: `\\begin{aligned}
\\frac{2 \\tan(3x)}{1 + \\tan^2(3x)} &= \\sin(6x) \\\\
y &= \\arcsin(\\sin(6x)) = 6x \\quad \\text{(assuming principal domain)} \\\\
y' &= 6
\\end{aligned}`,
        finalAnswer: `y' = 6`
      },
      {
        id: 'trans-superhard-t5-16',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\cos^4(2x) - \\sin^4(2x)`,
        method: 'Algebraic Simplification and Double Angle Identity',
        solution: `\\begin{aligned}
y &= (\\cos^2(2x) - \\sin^2(2x))(\\cos^2(2x) + \\sin^2(2x)) \\\\
y &= \\cos(4x) \\cdot 1 = \\cos(4x) \\\\
y' &= -4\\sin(4x)
\\end{aligned}`,
        finalAnswer: `y' = -4\\sin(4x)`
      },
      {
        id: 'trans-superhard-t5-17',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\sqrt{1 + \\sin(6x)}`,
        method: 'Perfect Square and Chain Rule',
        solution: `\\begin{aligned}
1 + \\sin(6x) &= \\sin^2(3x) + \\cos^2(3x) + 2\\sin(3x)\\cos(3x) = (\\sin(3x) + \\cos(3x))^2 \\\\
y &= |\\sin(3x) + \\cos(3x)| \\\\
y' &= 3(\\cos(3x) - \\sin(3x)) \\cdot \\text{sgn}(\\sin(3x) + \\cos(3x))
\\end{aligned}`,
        finalAnswer: `y' = 3(\\cos(3x) - \\sin(3x)) \\quad \\text{(for } \\sin(3x) + \\cos(3x) > 0 \\text{)}`
      },
      {
        id: 'trans-superhard-t5-18',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\ln(\\sec(3x) + \\tan(3x))^{\\sin(3x)}`,
        method: 'Logarithmic Properties and Product Rule',
        solution: `\\begin{aligned}
y &= \\sin(3x) \\ln(\\sec(3x) + \\tan(3x)) \\\\
y' &= 3\\cos(3x) \\ln(\\sec(3x) + \\tan(3x)) + \\sin(3x) \\cdot \\frac{3\\sec(3x)(\\sec(3x) + \\tan(3x))}{\\sec(3x) + \\tan(3x)} \\\\
y' &= 3\\cos(3x) \\ln(\\sec(3x) + \\tan(3x)) + 3\\sin(3x)\\sec(3x) \\\\
y' &= 3\\cos(3x) \\ln(\\sec(3x) + \\tan(3x)) + 3\\tan(3x)
\\end{aligned}`,
        finalAnswer: `y' = 3\\cos(3x) \\ln(\\sec(3x) + \\tan(3x)) + 3\\tan(3x)`
      },
      {
        id: 'trans-superhard-t5-19',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\frac{1 - \\tan^2(5x)}{1 + \\tan^2(5x)}`,
        method: 'Double Angle Identity for Cosine',
        solution: `\\begin{aligned}
y &= \\cos(10x) \\\\
y' &= -10\\sin(10x)
\\end{aligned}`,
        finalAnswer: `y' = -10\\sin(10x)`
      },
      {
        id: 'trans-superhard-t5-20',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = e^{3x} \\sin(2x) \\cos(2x)`,
        method: 'Double Angle Identity and Product Rule',
        solution: `\\begin{aligned}
y &= \\frac{1}{2} e^{3x} \\sin(4x) \\\\
y' &= \\frac{1}{2} \\left( 3 e^{3x} \\sin(4x) + e^{3x} \\cos(4x) \\cdot 4 \\right) \\\\
y' &= \\frac{1}{2} e^{3x} (3 \\sin(4x) + 4 \\cos(4x))
\\end{aligned}`,
        finalAnswer: `y' = \\frac{1}{2} e^{3x} (3 \\sin(4x) + 4 \\cos(4x))`
      },
      {
        id: 'trans-superhard-t5-21',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\ln(\\tan(5x) + \\sec(5x)) \\cdot \\cos(10x)`,
        method: 'Product Rule and Chain Rule',
        solution: `\\begin{aligned}
\\frac{d}{dx}[\\ln(\\tan(5x) + \\sec(5x))] &= \\frac{5\\sec^2(5x) + 5\\sec(5x)\\tan(5x)}{\\tan(5x) + \\sec(5x)} = 5\\sec(5x) \\\\
y' &= 5\\sec(5x) \\cos(10x) + \\ln(\\tan(5x) + \\sec(5x)) (-10\\sin(10x))
\\end{aligned}`,
        finalAnswer: `y' = 5\\sec(5x) \\cos(10x) - 10\\sin(10x) \\ln(\\tan(5x) + \\sec(5x))`
      },
      {
        id: 'trans-superhard-t5-22',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\frac{\\sin(10x)}{1 + \\cos(10x)}`,
        method: 'Double Angle Identity Simplification',
        solution: `\\begin{aligned}
y &= \\frac{2\\sin(5x)\\cos(5x)}{2\\cos^2(5x)} = \\tan(5x) \\\\
y' &= 5\\sec^2(5x)
\\end{aligned}`,
        finalAnswer: `y' = 5\\sec^2(5x)`
      },
      {
        id: 'trans-superhard-t5-23',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\ln\\left(\\sqrt{\\frac{1-\\cos(6x)}{1+\\cos(6x)}}\\right)`,
        method: 'Double Angle Identity and Logarithmic Differentiation',
        solution: `\\begin{aligned}
y &= \\ln\\left(\\sqrt{\\frac{2\\sin^2(3x)}{2\\cos^2(3x)}}\\right) = \\ln(\\tan(3x)) \\\\
y' &= \\frac{1}{\\tan(3x)} \\cdot 3\\sec^2(3x) = \\frac{3\\cos(3x)}{\\sin(3x)} \\cdot \\frac{1}{\\cos^2(3x)} = \\frac{3}{\\sin(3x)\\cos(3x)} = \\frac{6}{\\sin(6x)} = 6\\csc(6x)
\\end{aligned}`,
        finalAnswer: `y' = 6\\csc(6x)`
      },
      {
        id: 'trans-superhard-t5-24',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = e^{\\sin^2(2x)}`,
        method: 'Chain Rule and Double Angle Identity',
        solution: `\\begin{aligned}
y' &= e^{\\sin^2(2x)} \\cdot 2\\sin(2x)\\cos(2x) \\cdot 2 \\\\
y' &= 2 e^{\\sin^2(2x)} \\sin(4x)
\\end{aligned}`,
        finalAnswer: `y' = 2 e^{\\sin^2(2x)} \\sin(4x)`
      },
      {
        id: 'trans-superhard-t5-25',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\arcsin\\left(\\frac{2 \\tan(5x)}{1 + \\tan^2(5x)}\\right)`,
        method: 'Double Angle Identity for Sine',
        solution: `\\begin{aligned}
\\frac{2 \\tan(5x)}{1 + \\tan^2(5x)} &= \\sin(10x) \\\\
y &= \\arcsin(\\sin(10x)) = 10x \\quad \\text{(assuming principal domain)} \\\\
y' &= 10
\\end{aligned}`,
        finalAnswer: `y' = 10`
      },
      {
        id: 'trans-superhard-t5-26',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\cos^4(4x) - \\sin^4(4x)`,
        method: 'Algebraic Simplification and Double Angle Identity',
        solution: `\\begin{aligned}
y &= (\\cos^2(4x) - \\sin^2(4x))(\\cos^2(4x) + \\sin^2(4x)) \\\\
y &= \\cos(8x) \\cdot 1 = \\cos(8x) \\\\
y' &= -8\\sin(8x)
\\end{aligned}`,
        finalAnswer: `y' = -8\\sin(8x)`
      },
      {
        id: 'trans-superhard-t5-27',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\sqrt{1 + \\sin(12x)}`,
        method: 'Perfect Square and Chain Rule',
        solution: `\\begin{aligned}
1 + \\sin(12x) &= \\sin^2(6x) + \\cos^2(6x) + 2\\sin(6x)\\cos(6x) = (\\sin(6x) + \\cos(6x))^2 \\\\
y &= |\\sin(6x) + \\cos(6x)| \\\\
y' &= 6(\\cos(6x) - \\sin(6x)) \\cdot \\text{sgn}(\\sin(6x) + \\cos(6x))
\\end{aligned}`,
        finalAnswer: `y' = 6(\\cos(6x) - \\sin(6x)) \\quad \\text{(for } \\sin(6x) + \\cos(6x) > 0 \\text{)}`
      },
      {
        id: 'trans-superhard-t5-28',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\ln(\\sec(2x) + \\tan(2x))^{\\sin(2x)}`,
        method: 'Logarithmic Properties and Product Rule',
        solution: `\\begin{aligned}
y &= \\sin(2x) \\ln(\\sec(2x) + \\tan(2x)) \\\\
y' &= 2\\cos(2x) \\ln(\\sec(2x) + \\tan(2x)) + \\sin(2x) \\cdot \\frac{2\\sec(2x)(\\sec(2x) + \\tan(2x))}{\\sec(2x) + \\tan(2x)} \\\\
y' &= 2\\cos(2x) \\ln(\\sec(2x) + \\tan(2x)) + 2\\sin(2x)\\sec(2x) \\\\
y' &= 2\\cos(2x) \\ln(\\sec(2x) + \\tan(2x)) + 2\\tan(2x)
\\end{aligned}`,
        finalAnswer: `y' = 2\\cos(2x) \\ln(\\sec(2x) + \\tan(2x)) + 2\\tan(2x)`
      },
      {
        id: 'trans-superhard-t5-29',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\frac{1 - \\tan^2(3x)}{1 + \\tan^2(3x)}`,
        method: 'Double Angle Identity for Cosine',
        solution: `\\begin{aligned}
y &= \\cos(6x) \\\\
y' &= -6\\sin(6x)
\\end{aligned}`,
        finalAnswer: `y' = -6\\sin(6x)`
      },
      {
        id: 'trans-superhard-t5-30',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = e^{3x} \\sin(2x) \\cos(2x)`,
        method: 'Double Angle Identity and Product Rule',
        solution: `\\begin{aligned}
y &= \\frac{1}{2} e^{3x} \\sin(4x) \\\\
y' &= \\frac{1}{2} \\left( 3 e^{3x} \\sin(4x) + e^{3x} \\cos(4x) \\cdot 4 \\right) \\\\
y' &= \\frac{1}{2} e^{3x} (3 \\sin(4x) + 4 \\cos(4x))
\\end{aligned}`,
        finalAnswer: `y' = \\frac{1}{2} e^{3x} (3 \\sin(4x) + 4 \\cos(4x))`
      },
      {
        id: 'trans-superhard-t5-31',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\ln(\\tan(4x) + \\sec(4x)) \\cdot \\cos(8x)`,
        method: 'Product Rule and Chain Rule',
        solution: `\\begin{aligned}
\\frac{d}{dx}[\\ln(\\tan(4x) + \\sec(4x))] &= \\frac{4\\sec^2(4x) + 4\\sec(4x)\\tan(4x)}{\\tan(4x) + \\sec(4x)} = 4\\sec(4x) \\\\
y' &= 4\\sec(4x) \\cos(8x) + \\ln(\\tan(4x) + \\sec(4x)) (-8\\sin(8x))
\\end{aligned}`,
        finalAnswer: `y' = 4\\sec(4x) \\cos(8x) - 8\\sin(8x) \\ln(\\tan(4x) + \\sec(4x))`
      },
      {
        id: 'trans-superhard-t5-32',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\frac{\\sin(8x)}{1 + \\cos(8x)}`,
        method: 'Double Angle Identity Simplification',
        solution: `\\begin{aligned}
y &= \\frac{2\\sin(4x)\\cos(4x)}{2\\cos^2(4x)} = \\tan(4x) \\\\
y' &= 4\\sec^2(4x)
\\end{aligned}`,
        finalAnswer: `y' = 4\\sec^2(4x)`
      },
      {
        id: 'trans-superhard-t5-33',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\ln\\left(\\sqrt{\\frac{1-\\cos(10x)}{1+\\cos(10x)}}\\right)`,
        method: 'Double Angle Identity and Logarithmic Differentiation',
        solution: `\\begin{aligned}
y &= \\ln\\left(\\sqrt{\\frac{2\\sin^2(5x)}{2\\cos^2(5x)}}\\right) = \\ln(\\tan(5x)) \\\\
y' &= \\frac{1}{\\tan(5x)} \\cdot 5\\sec^2(5x) = \\frac{5\\cos(5x)}{\\sin(5x)} \\cdot \\frac{1}{\\cos^2(5x)} = \\frac{5}{\\sin(5x)\\cos(5x)} = \\frac{10}{\\sin(10x)} = 10\\csc(10x)
\\end{aligned}`,
        finalAnswer: `y' = 10\\csc(10x)`
      },
      {
        id: 'trans-superhard-t5-34',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = e^{\\sin^2(6x)}`,
        method: 'Chain Rule and Double Angle Identity',
        solution: `\\begin{aligned}
y' &= e^{\\sin^2(6x)} \\cdot 2\\sin(6x)\\cos(6x) \\cdot 6 \\\\
y' &= 6 e^{\\sin^2(6x)} \\sin(12x)
\\end{aligned}`,
        finalAnswer: `y' = 6 e^{\\sin^2(6x)} \\sin(12x)`
      },
      {
        id: 'trans-superhard-t5-35',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\arcsin\\left(\\frac{2 \\tan(3x)}{1 + \\tan^2(3x)}\\right)`,
        method: 'Double Angle Identity for Sine',
        solution: `\\begin{aligned}
\\frac{2 \\tan(3x)}{1 + \\tan^2(3x)} &= \\sin(6x) \\\\
y &= \\arcsin(\\sin(6x)) = 6x \\quad \\text{(assuming principal domain)} \\\\
y' &= 6
\\end{aligned}`,
        finalAnswer: `y' = 6`
      },
      {
        id: 'trans-superhard-t5-36',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\cos^4(2x) - \\sin^4(2x)`,
        method: 'Algebraic Simplification and Double Angle Identity',
        solution: `\\begin{aligned}
y &= (\\cos^2(2x) - \\sin^2(2x))(\\cos^2(2x) + \\sin^2(2x)) \\\\
y &= \\cos(4x) \\cdot 1 = \\cos(4x) \\\\
y' &= -4\\sin(4x)
\\end{aligned}`,
        finalAnswer: `y' = -4\\sin(4x)`
      },
      {
        id: 'trans-superhard-t5-37',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\sqrt{1 + \\sin(10x)}`,
        method: 'Perfect Square and Chain Rule',
        solution: `\\begin{aligned}
1 + \\sin(10x) &= \\sin^2(5x) + \\cos^2(5x) + 2\\sin(5x)\\cos(5x) = (\\sin(5x) + \\cos(5x))^2 \\\\
y &= |\\sin(5x) + \\cos(5x)| \\\\
y' &= 5(\\cos(5x) - \\sin(5x)) \\cdot \\text{sgn}(\\sin(5x) + \\cos(5x))
\\end{aligned}`,
        finalAnswer: `y' = 5(\\cos(5x) - \\sin(5x)) \\quad \\text{(for } \\sin(5x) + \\cos(5x) > 0 \\text{)}`
      },
      {
        id: 'trans-superhard-t5-38',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\ln(\\sec(4x) + \\tan(4x))^{\\sin(4x)}`,
        method: 'Logarithmic Properties and Product Rule',
        solution: `\\begin{aligned}
y &= \\sin(4x) \\ln(\\sec(4x) + \\tan(4x)) \\\\
y' &= 4\\cos(4x) \\ln(\\sec(4x) + \\tan(4x)) + \\sin(4x) \\cdot \\frac{4\\sec(4x)(\\sec(4x) + \\tan(4x))}{\\sec(4x) + \\tan(4x)} \\\\
y' &= 4\\cos(4x) \\ln(\\sec(4x) + \\tan(4x)) + 4\\sin(4x)\\sec(4x) \\\\
y' &= 4\\cos(4x) \\ln(\\sec(4x) + \\tan(4x)) + 4\\tan(4x)
\\end{aligned}`,
        finalAnswer: `y' = 4\\cos(4x) \\ln(\\sec(4x) + \\tan(4x)) + 4\\tan(4x)`
      },
      {
        id: 'trans-superhard-t5-39',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\frac{1 - \\tan^2(2x)}{1 + \\tan^2(2x)}`,
        method: 'Double Angle Identity for Cosine',
        solution: `\\begin{aligned}
y &= \\cos(4x) \\\\
y' &= -4\\sin(4x)
\\end{aligned}`,
        finalAnswer: `y' = -4\\sin(4x)`
      },
      {
        id: 'trans-superhard-t5-40',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = e^{6x} \\sin(2x) \\cos(2x)`,
        method: 'Double Angle Identity and Product Rule',
        solution: `\\begin{aligned}
y &= \\frac{1}{2} e^{6x} \\sin(4x) \\\\
y' &= \\frac{1}{2} \\left( 6 e^{6x} \\sin(4x) + e^{6x} \\cos(4x) \\cdot 4 \\right) \\\\
y' &= \\frac{1}{2} e^{6x} (6 \\sin(4x) + 4 \\cos(4x))
\\end{aligned}`,
        finalAnswer: `y' = \\frac{1}{2} e^{6x} (6 \\sin(4x) + 4 \\cos(4x))`
      },
      {
        id: 'trans-superhard-t5-41',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\ln(\\tan(3x) + \\sec(3x)) \\cdot \\cos(6x)`,
        method: 'Product Rule and Chain Rule',
        solution: `\\begin{aligned}
\\frac{d}{dx}[\\ln(\\tan(3x) + \\sec(3x))] &= \\frac{3\\sec^2(3x) + 3\\sec(3x)\\tan(3x)}{\\tan(3x) + \\sec(3x)} = 3\\sec(3x) \\\\
y' &= 3\\sec(3x) \\cos(6x) + \\ln(\\tan(3x) + \\sec(3x)) (-6\\sin(6x))
\\end{aligned}`,
        finalAnswer: `y' = 3\\sec(3x) \\cos(6x) - 6\\sin(6x) \\ln(\\tan(3x) + \\sec(3x))`
      },
      {
        id: 'trans-superhard-t5-42',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\frac{\\sin(10x)}{1 + \\cos(10x)}`,
        method: 'Double Angle Identity Simplification',
        solution: `\\begin{aligned}
y &= \\frac{2\\sin(5x)\\cos(5x)}{2\\cos^2(5x)} = \\tan(5x) \\\\
y' &= 5\\sec^2(5x)
\\end{aligned}`,
        finalAnswer: `y' = 5\\sec^2(5x)`
      },
      {
        id: 'trans-superhard-t5-43',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\ln\\left(\\sqrt{\\frac{1-\\cos(6x)}{1+\\cos(6x)}}\\right)`,
        method: 'Double Angle Identity and Logarithmic Differentiation',
        solution: `\\begin{aligned}
y &= \\ln\\left(\\sqrt{\\frac{2\\sin^2(3x)}{2\\cos^2(3x)}}\\right) = \\ln(\\tan(3x)) \\\\
y' &= \\frac{1}{\\tan(3x)} \\cdot 3\\sec^2(3x) = \\frac{3\\cos(3x)}{\\sin(3x)} \\cdot \\frac{1}{\\cos^2(3x)} = \\frac{3}{\\sin(3x)\\cos(3x)} = \\frac{6}{\\sin(6x)} = 6\\csc(6x)
\\end{aligned}`,
        finalAnswer: `y' = 6\\csc(6x)`
      },
      {
        id: 'trans-superhard-t5-44',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = e^{\\sin^2(3x)}`,
        method: 'Chain Rule and Double Angle Identity',
        solution: `\\begin{aligned}
y' &= e^{\\sin^2(3x)} \\cdot 2\\sin(3x)\\cos(3x) \\cdot 3 \\\\
y' &= 3 e^{\\sin^2(3x)} \\sin(6x)
\\end{aligned}`,
        finalAnswer: `y' = 3 e^{\\sin^2(3x)} \\sin(6x)`
      },
      {
        id: 'trans-superhard-t5-45',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\arcsin\\left(\\frac{2 \\tan(6x)}{1 + \\tan^2(6x)}\\right)`,
        method: 'Double Angle Identity for Sine',
        solution: `\\begin{aligned}
\\frac{2 \\tan(6x)}{1 + \\tan^2(6x)} &= \\sin(12x) \\\\
y &= \\arcsin(\\sin(12x)) = 12x \\quad \\text{(assuming principal domain)} \\\\
y' &= 12
\\end{aligned}`,
        finalAnswer: `y' = 12`
      },
      {
        id: 'trans-superhard-t5-46',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\cos^4(3x) - \\sin^4(3x)`,
        method: 'Algebraic Simplification and Double Angle Identity',
        solution: `\\begin{aligned}
y &= (\\cos^2(3x) - \\sin^2(3x))(\\cos^2(3x) + \\sin^2(3x)) \\\\
y &= \\cos(6x) \\cdot 1 = \\cos(6x) \\\\
y' &= -6\\sin(6x)
\\end{aligned}`,
        finalAnswer: `y' = -6\\sin(6x)`
      },
      {
        id: 'trans-superhard-t5-47',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\sqrt{1 + \\sin(4x)}`,
        method: 'Perfect Square and Chain Rule',
        solution: `\\begin{aligned}
1 + \\sin(4x) &= \\sin^2(2x) + \\cos^2(2x) + 2\\sin(2x)\\cos(2x) = (\\sin(2x) + \\cos(2x))^2 \\\\
y &= |\\sin(2x) + \\cos(2x)| \\\\
y' &= 2(\\cos(2x) - \\sin(2x)) \\cdot \\text{sgn}(\\sin(2x) + \\cos(2x))
\\end{aligned}`,
        finalAnswer: `y' = 2(\\cos(2x) - \\sin(2x)) \\quad \\text{(for } \\sin(2x) + \\cos(2x) > 0 \\text{)}`
      },
      {
        id: 'trans-superhard-t5-48',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\ln(\\sec(3x) + \\tan(3x))^{\\sin(3x)}`,
        method: 'Logarithmic Properties and Product Rule',
        solution: `\\begin{aligned}
y &= \\sin(3x) \\ln(\\sec(3x) + \\tan(3x)) \\\\
y' &= 3\\cos(3x) \\ln(\\sec(3x) + \\tan(3x)) + \\sin(3x) \\cdot \\frac{3\\sec(3x)(\\sec(3x) + \\tan(3x))}{\\sec(3x) + \\tan(3x)} \\\\
y' &= 3\\cos(3x) \\ln(\\sec(3x) + \\tan(3x)) + 3\\sin(3x)\\sec(3x) \\\\
y' &= 3\\cos(3x) \\ln(\\sec(3x) + \\tan(3x)) + 3\\tan(3x)
\\end{aligned}`,
        finalAnswer: `y' = 3\\cos(3x) \\ln(\\sec(3x) + \\tan(3x)) + 3\\tan(3x)`
      },
      {
        id: 'trans-superhard-t5-49',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\frac{1 - \\tan^2(6x)}{1 + \\tan^2(6x)}`,
        method: 'Double Angle Identity for Cosine',
        solution: `\\begin{aligned}
y &= \\cos(12x) \\\\
y' &= -12\\sin(12x)
\\end{aligned}`,
        finalAnswer: `y' = -12\\sin(12x)`
      },
      {
        id: 'trans-superhard-t5-50',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = e^{2x} \\sin(3x) \\cos(3x)`,
        method: 'Double Angle Identity and Product Rule',
        solution: `\\begin{aligned}
y &= \\frac{1}{2} e^{2x} \\sin(6x) \\\\
y' &= \\frac{1}{2} \\left( 2 e^{2x} \\sin(6x) + e^{2x} \\cos(6x) \\cdot 6 \\right) \\\\
y' &= \\frac{1}{2} e^{2x} (2 \\sin(6x) + 6 \\cos(6x))
\\end{aligned}`,
        finalAnswer: `y' = \\frac{1}{2} e^{2x} (2 \\sin(6x) + 6 \\cos(6x))`
      },
      {
        id: 'trans-superhard-t5-51',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\ln(\\tan(6x) + \\sec(6x)) \\cdot \\cos(12x)`,
        method: 'Product Rule and Chain Rule',
        solution: `\\begin{aligned}
\\frac{d}{dx}[\\ln(\\tan(6x) + \\sec(6x))] &= \\frac{6\\sec^2(6x) + 6\\sec(6x)\\tan(6x)}{\\tan(6x) + \\sec(6x)} = 6\\sec(6x) \\\\
y' &= 6\\sec(6x) \\cos(12x) + \\ln(\\tan(6x) + \\sec(6x)) (-12\\sin(12x))
\\end{aligned}`,
        finalAnswer: `y' = 6\\sec(6x) \\cos(12x) - 12\\sin(12x) \\ln(\\tan(6x) + \\sec(6x))`
      },
      {
        id: 'trans-superhard-t5-52',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\frac{\\sin(8x)}{1 + \\cos(8x)}`,
        method: 'Double Angle Identity Simplification',
        solution: `\\begin{aligned}
y &= \\frac{2\\sin(4x)\\cos(4x)}{2\\cos^2(4x)} = \\tan(4x) \\\\
y' &= 4\\sec^2(4x)
\\end{aligned}`,
        finalAnswer: `y' = 4\\sec^2(4x)`
      },
      {
        id: 'trans-superhard-t5-53',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\ln\\left(\\sqrt{\\frac{1-\\cos(6x)}{1+\\cos(6x)}}\\right)`,
        method: 'Double Angle Identity and Logarithmic Differentiation',
        solution: `\\begin{aligned}
y &= \\ln\\left(\\sqrt{\\frac{2\\sin^2(3x)}{2\\cos^2(3x)}}\\right) = \\ln(\\tan(3x)) \\\\
y' &= \\frac{1}{\\tan(3x)} \\cdot 3\\sec^2(3x) = \\frac{3\\cos(3x)}{\\sin(3x)} \\cdot \\frac{1}{\\cos^2(3x)} = \\frac{3}{\\sin(3x)\\cos(3x)} = \\frac{6}{\\sin(6x)} = 6\\csc(6x)
\\end{aligned}`,
        finalAnswer: `y' = 6\\csc(6x)`
      },
      {
        id: 'trans-superhard-t5-54',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = e^{\\sin^2(4x)}`,
        method: 'Chain Rule and Double Angle Identity',
        solution: `\\begin{aligned}
y' &= e^{\\sin^2(4x)} \\cdot 2\\sin(4x)\\cos(4x) \\cdot 4 \\\\
y' &= 4 e^{\\sin^2(4x)} \\sin(8x)
\\end{aligned}`,
        finalAnswer: `y' = 4 e^{\\sin^2(4x)} \\sin(8x)`
      },
      {
        id: 'trans-superhard-t5-55',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\arcsin\\left(\\frac{2 \\tan(4x)}{1 + \\tan^2(4x)}\\right)`,
        method: 'Double Angle Identity for Sine',
        solution: `\\begin{aligned}
\\frac{2 \\tan(4x)}{1 + \\tan^2(4x)} &= \\sin(8x) \\\\
y &= \\arcsin(\\sin(8x)) = 8x \\quad \\text{(assuming principal domain)} \\\\
y' &= 8
\\end{aligned}`,
        finalAnswer: `y' = 8`
      },
      {
        id: 'trans-superhard-t5-56',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\cos^4(2x) - \\sin^4(2x)`,
        method: 'Algebraic Simplification and Double Angle Identity',
        solution: `\\begin{aligned}
y &= (\\cos^2(2x) - \\sin^2(2x))(\\cos^2(2x) + \\sin^2(2x)) \\\\
y &= \\cos(4x) \\cdot 1 = \\cos(4x) \\\\
y' &= -4\\sin(4x)
\\end{aligned}`,
        finalAnswer: `y' = -4\\sin(4x)`
      },
      {
        id: 'trans-superhard-t5-57',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\sqrt{1 + \\sin(12x)}`,
        method: 'Perfect Square and Chain Rule',
        solution: `\\begin{aligned}
1 + \\sin(12x) &= \\sin^2(6x) + \\cos^2(6x) + 2\\sin(6x)\\cos(6x) = (\\sin(6x) + \\cos(6x))^2 \\\\
y &= |\\sin(6x) + \\cos(6x)| \\\\
y' &= 6(\\cos(6x) - \\sin(6x)) \\cdot \\text{sgn}(\\sin(6x) + \\cos(6x))
\\end{aligned}`,
        finalAnswer: `y' = 6(\\cos(6x) - \\sin(6x)) \\quad \\text{(for } \\sin(6x) + \\cos(6x) > 0 \\text{)}`
      },
      {
        id: 'trans-superhard-t5-58',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\ln(\\sec(2x) + \\tan(2x))^{\\sin(2x)}`,
        method: 'Logarithmic Properties and Product Rule',
        solution: `\\begin{aligned}
y &= \\sin(2x) \\ln(\\sec(2x) + \\tan(2x)) \\\\
y' &= 2\\cos(2x) \\ln(\\sec(2x) + \\tan(2x)) + \\sin(2x) \\cdot \\frac{2\\sec(2x)(\\sec(2x) + \\tan(2x))}{\\sec(2x) + \\tan(2x)} \\\\
y' &= 2\\cos(2x) \\ln(\\sec(2x) + \\tan(2x)) + 2\\sin(2x)\\sec(2x) \\\\
y' &= 2\\cos(2x) \\ln(\\sec(2x) + \\tan(2x)) + 2\\tan(2x)
\\end{aligned}`,
        finalAnswer: `y' = 2\\cos(2x) \\ln(\\sec(2x) + \\tan(2x)) + 2\\tan(2x)`
      },
      {
        id: 'trans-superhard-t5-59',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\frac{1 - \\tan^2(5x)}{1 + \\tan^2(5x)}`,
        method: 'Double Angle Identity for Cosine',
        solution: `\\begin{aligned}
y &= \\cos(10x) \\\\
y' &= -10\\sin(10x)
\\end{aligned}`,
        finalAnswer: `y' = -10\\sin(10x)`
      },
      {
        id: 'trans-superhard-t5-60',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = e^{5x} \\sin(4x) \\cos(4x)`,
        method: 'Double Angle Identity and Product Rule',
        solution: `\\begin{aligned}
y &= \\frac{1}{2} e^{5x} \\sin(8x) \\\\
y' &= \\frac{1}{2} \\left( 5 e^{5x} \\sin(8x) + e^{5x} \\cos(8x) \\cdot 8 \\right) \\\\
y' &= \\frac{1}{2} e^{5x} (5 \\sin(8x) + 8 \\cos(8x))
\\end{aligned}`,
        finalAnswer: `y' = \\frac{1}{2} e^{5x} (5 \\sin(8x) + 8 \\cos(8x))`
      },
      {
        id: 'trans-superhard-t5-61',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\ln(\\tan(4x) + \\sec(4x)) \\cdot \\cos(8x)`,
        method: 'Product Rule and Chain Rule',
        solution: `\\begin{aligned}
\\frac{d}{dx}[\\ln(\\tan(4x) + \\sec(4x))] &= \\frac{4\\sec^2(4x) + 4\\sec(4x)\\tan(4x)}{\\tan(4x) + \\sec(4x)} = 4\\sec(4x) \\\\
y' &= 4\\sec(4x) \\cos(8x) + \\ln(\\tan(4x) + \\sec(4x)) (-8\\sin(8x))
\\end{aligned}`,
        finalAnswer: `y' = 4\\sec(4x) \\cos(8x) - 8\\sin(8x) \\ln(\\tan(4x) + \\sec(4x))`
      },
      {
        id: 'trans-superhard-t5-62',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\frac{\\sin(4x)}{1 + \\cos(4x)}`,
        method: 'Double Angle Identity Simplification',
        solution: `\\begin{aligned}
y &= \\frac{2\\sin(2x)\\cos(2x)}{2\\cos^2(2x)} = \\tan(2x) \\\\
y' &= 2\\sec^2(2x)
\\end{aligned}`,
        finalAnswer: `y' = 2\\sec^2(2x)`
      },
      {
        id: 'trans-superhard-t5-63',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\ln\\left(\\sqrt{\\frac{1-\\cos(12x)}{1+\\cos(12x)}}\\right)`,
        method: 'Double Angle Identity and Logarithmic Differentiation',
        solution: `\\begin{aligned}
y &= \\ln\\left(\\sqrt{\\frac{2\\sin^2(6x)}{2\\cos^2(6x)}}\\right) = \\ln(\\tan(6x)) \\\\
y' &= \\frac{1}{\\tan(6x)} \\cdot 6\\sec^2(6x) = \\frac{6\\cos(6x)}{\\sin(6x)} \\cdot \\frac{1}{\\cos^2(6x)} = \\frac{6}{\\sin(6x)\\cos(6x)} = \\frac{12}{\\sin(12x)} = 12\\csc(12x)
\\end{aligned}`,
        finalAnswer: `y' = 12\\csc(12x)`
      },
      {
        id: 'trans-superhard-t5-64',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = e^{\\sin^2(5x)}`,
        method: 'Chain Rule and Double Angle Identity',
        solution: `\\begin{aligned}
y' &= e^{\\sin^2(5x)} \\cdot 2\\sin(5x)\\cos(5x) \\cdot 5 \\\\
y' &= 5 e^{\\sin^2(5x)} \\sin(10x)
\\end{aligned}`,
        finalAnswer: `y' = 5 e^{\\sin^2(5x)} \\sin(10x)`
      },
      {
        id: 'trans-superhard-t5-65',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\arcsin\\left(\\frac{2 \\tan(3x)}{1 + \\tan^2(3x)}\\right)`,
        method: 'Double Angle Identity for Sine',
        solution: `\\begin{aligned}
\\frac{2 \\tan(3x)}{1 + \\tan^2(3x)} &= \\sin(6x) \\\\
y &= \\arcsin(\\sin(6x)) = 6x \\quad \\text{(assuming principal domain)} \\\\
y' &= 6
\\end{aligned}`,
        finalAnswer: `y' = 6`
      },
      {
        id: 'trans-superhard-t5-66',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\cos^4(6x) - \\sin^4(6x)`,
        method: 'Algebraic Simplification and Double Angle Identity',
        solution: `\\begin{aligned}
y &= (\\cos^2(6x) - \\sin^2(6x))(\\cos^2(6x) + \\sin^2(6x)) \\\\
y &= \\cos(12x) \\cdot 1 = \\cos(12x) \\\\
y' &= -12\\sin(12x)
\\end{aligned}`,
        finalAnswer: `y' = -12\\sin(12x)`
      },
      {
        id: 'trans-superhard-t5-67',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\sqrt{1 + \\sin(10x)}`,
        method: 'Perfect Square and Chain Rule',
        solution: `\\begin{aligned}
1 + \\sin(10x) &= \\sin^2(5x) + \\cos^2(5x) + 2\\sin(5x)\\cos(5x) = (\\sin(5x) + \\cos(5x))^2 \\\\
y &= |\\sin(5x) + \\cos(5x)| \\\\
y' &= 5(\\cos(5x) - \\sin(5x)) \\cdot \\text{sgn}(\\sin(5x) + \\cos(5x))
\\end{aligned}`,
        finalAnswer: `y' = 5(\\cos(5x) - \\sin(5x)) \\quad \\text{(for } \\sin(5x) + \\cos(5x) > 0 \\text{)}`
      },
      {
        id: 'trans-superhard-t5-68',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\ln(\\sec(4x) + \\tan(4x))^{\\sin(4x)}`,
        method: 'Logarithmic Properties and Product Rule',
        solution: `\\begin{aligned}
y &= \\sin(4x) \\ln(\\sec(4x) + \\tan(4x)) \\\\
y' &= 4\\cos(4x) \\ln(\\sec(4x) + \\tan(4x)) + \\sin(4x) \\cdot \\frac{4\\sec(4x)(\\sec(4x) + \\tan(4x))}{\\sec(4x) + \\tan(4x)} \\\\
y' &= 4\\cos(4x) \\ln(\\sec(4x) + \\tan(4x)) + 4\\sin(4x)\\sec(4x) \\\\
y' &= 4\\cos(4x) \\ln(\\sec(4x) + \\tan(4x)) + 4\\tan(4x)
\\end{aligned}`,
        finalAnswer: `y' = 4\\cos(4x) \\ln(\\sec(4x) + \\tan(4x)) + 4\\tan(4x)`
      },
      {
        id: 'trans-superhard-t5-69',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\frac{1 - \\tan^2(4x)}{1 + \\tan^2(4x)}`,
        method: 'Double Angle Identity for Cosine',
        solution: `\\begin{aligned}
y &= \\cos(8x) \\\\
y' &= -8\\sin(8x)
\\end{aligned}`,
        finalAnswer: `y' = -8\\sin(8x)`
      },
      {
        id: 'trans-superhard-t5-70',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = e^{3x} \\sin(5x) \\cos(5x)`,
        method: 'Double Angle Identity and Product Rule',
        solution: `\\begin{aligned}
y &= \\frac{1}{2} e^{3x} \\sin(10x) \\\\
y' &= \\frac{1}{2} \\left( 3 e^{3x} \\sin(10x) + e^{3x} \\cos(10x) \\cdot 10 \\right) \\\\
y' &= \\frac{1}{2} e^{3x} (3 \\sin(10x) + 10 \\cos(10x))
\\end{aligned}`,
        finalAnswer: `y' = \\frac{1}{2} e^{3x} (3 \\sin(10x) + 10 \\cos(10x))`
      },
      {
        id: 'trans-superhard-t5-71',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\ln(\\tan(2x) + \\sec(2x)) \\cdot \\cos(4x)`,
        method: 'Product Rule and Chain Rule',
        solution: `\\begin{aligned}
\\frac{d}{dx}[\\ln(\\tan(2x) + \\sec(2x))] &= \\frac{2\\sec^2(2x) + 2\\sec(2x)\\tan(2x)}{\\tan(2x) + \\sec(2x)} = 2\\sec(2x) \\\\
y' &= 2\\sec(2x) \\cos(4x) + \\ln(\\tan(2x) + \\sec(2x)) (-4\\sin(4x))
\\end{aligned}`,
        finalAnswer: `y' = 2\\sec(2x) \\cos(4x) - 4\\sin(4x) \\ln(\\tan(2x) + \\sec(2x))`
      },
      {
        id: 'trans-superhard-t5-72',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\frac{\\sin(8x)}{1 + \\cos(8x)}`,
        method: 'Double Angle Identity Simplification',
        solution: `\\begin{aligned}
y &= \\frac{2\\sin(4x)\\cos(4x)}{2\\cos^2(4x)} = \\tan(4x) \\\\
y' &= 4\\sec^2(4x)
\\end{aligned}`,
        finalAnswer: `y' = 4\\sec^2(4x)`
      },
      {
        id: 'trans-superhard-t5-73',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\ln\\left(\\sqrt{\\frac{1-\\cos(10x)}{1+\\cos(10x)}}\\right)`,
        method: 'Double Angle Identity and Logarithmic Differentiation',
        solution: `\\begin{aligned}
y &= \\ln\\left(\\sqrt{\\frac{2\\sin^2(5x)}{2\\cos^2(5x)}}\\right) = \\ln(\\tan(5x)) \\\\
y' &= \\frac{1}{\\tan(5x)} \\cdot 5\\sec^2(5x) = \\frac{5\\cos(5x)}{\\sin(5x)} \\cdot \\frac{1}{\\cos^2(5x)} = \\frac{5}{\\sin(5x)\\cos(5x)} = \\frac{10}{\\sin(10x)} = 10\\csc(10x)
\\end{aligned}`,
        finalAnswer: `y' = 10\\csc(10x)`
      },
      {
        id: 'trans-superhard-t5-74',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = e^{\\sin^2(2x)}`,
        method: 'Chain Rule and Double Angle Identity',
        solution: `\\begin{aligned}
y' &= e^{\\sin^2(2x)} \\cdot 2\\sin(2x)\\cos(2x) \\cdot 2 \\\\
y' &= 2 e^{\\sin^2(2x)} \\sin(4x)
\\end{aligned}`,
        finalAnswer: `y' = 2 e^{\\sin^2(2x)} \\sin(4x)`
      },
      {
        id: 'trans-superhard-t5-75',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\arcsin\\left(\\frac{2 \\tan(6x)}{1 + \\tan^2(6x)}\\right)`,
        method: 'Double Angle Identity for Sine',
        solution: `\\begin{aligned}
\\frac{2 \\tan(6x)}{1 + \\tan^2(6x)} &= \\sin(12x) \\\\
y &= \\arcsin(\\sin(12x)) = 12x \\quad \\text{(assuming principal domain)} \\\\
y' &= 12
\\end{aligned}`,
        finalAnswer: `y' = 12`
      },
      {
        id: 'trans-superhard-t5-76',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\cos^4(3x) - \\sin^4(3x)`,
        method: 'Algebraic Simplification and Double Angle Identity',
        solution: `\\begin{aligned}
y &= (\\cos^2(3x) - \\sin^2(3x))(\\cos^2(3x) + \\sin^2(3x)) \\\\
y &= \\cos(6x) \\cdot 1 = \\cos(6x) \\\\
y' &= -6\\sin(6x)
\\end{aligned}`,
        finalAnswer: `y' = -6\\sin(6x)`
      },
      {
        id: 'trans-superhard-t5-77',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\sqrt{1 + \\sin(10x)}`,
        method: 'Perfect Square and Chain Rule',
        solution: `\\begin{aligned}
1 + \\sin(10x) &= \\sin^2(5x) + \\cos^2(5x) + 2\\sin(5x)\\cos(5x) = (\\sin(5x) + \\cos(5x))^2 \\\\
y &= |\\sin(5x) + \\cos(5x)| \\\\
y' &= 5(\\cos(5x) - \\sin(5x)) \\cdot \\text{sgn}(\\sin(5x) + \\cos(5x))
\\end{aligned}`,
        finalAnswer: `y' = 5(\\cos(5x) - \\sin(5x)) \\quad \\text{(for } \\sin(5x) + \\cos(5x) > 0 \\text{)}`
      },
      {
        id: 'trans-superhard-t5-78',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\ln(\\sec(4x) + \\tan(4x))^{\\sin(4x)}`,
        method: 'Logarithmic Properties and Product Rule',
        solution: `\\begin{aligned}
y &= \\sin(4x) \\ln(\\sec(4x) + \\tan(4x)) \\\\
y' &= 4\\cos(4x) \\ln(\\sec(4x) + \\tan(4x)) + \\sin(4x) \\cdot \\frac{4\\sec(4x)(\\sec(4x) + \\tan(4x))}{\\sec(4x) + \\tan(4x)} \\\\
y' &= 4\\cos(4x) \\ln(\\sec(4x) + \\tan(4x)) + 4\\sin(4x)\\sec(4x) \\\\
y' &= 4\\cos(4x) \\ln(\\sec(4x) + \\tan(4x)) + 4\\tan(4x)
\\end{aligned}`,
        finalAnswer: `y' = 4\\cos(4x) \\ln(\\sec(4x) + \\tan(4x)) + 4\\tan(4x)`
      },
      {
        id: 'trans-superhard-t5-79',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\frac{1 - \\tan^2(4x)}{1 + \\tan^2(4x)}`,
        method: 'Double Angle Identity for Cosine',
        solution: `\\begin{aligned}
y &= \\cos(8x) \\\\
y' &= -8\\sin(8x)
\\end{aligned}`,
        finalAnswer: `y' = -8\\sin(8x)`
      },
      {
        id: 'trans-superhard-t5-80',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = e^{3x} \\sin(3x) \\cos(3x)`,
        method: 'Double Angle Identity and Product Rule',
        solution: `\\begin{aligned}
y &= \\frac{1}{2} e^{3x} \\sin(6x) \\\\
y' &= \\frac{1}{2} \\left( 3 e^{3x} \\sin(6x) + e^{3x} \\cos(6x) \\cdot 6 \\right) \\\\
y' &= \\frac{1}{2} e^{3x} (3 \\sin(6x) + 6 \\cos(6x))
\\end{aligned}`,
        finalAnswer: `y' = \\frac{1}{2} e^{3x} (3 \\sin(6x) + 6 \\cos(6x))`
      },
      {
        id: 'trans-superhard-t5-81',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\ln(\\tan(3x) + \\sec(3x)) \\cdot \\cos(6x)`,
        method: 'Product Rule and Chain Rule',
        solution: `\\begin{aligned}
\\frac{d}{dx}[\\ln(\\tan(3x) + \\sec(3x))] &= \\frac{3\\sec^2(3x) + 3\\sec(3x)\\tan(3x)}{\\tan(3x) + \\sec(3x)} = 3\\sec(3x) \\\\
y' &= 3\\sec(3x) \\cos(6x) + \\ln(\\tan(3x) + \\sec(3x)) (-6\\sin(6x))
\\end{aligned}`,
        finalAnswer: `y' = 3\\sec(3x) \\cos(6x) - 6\\sin(6x) \\ln(\\tan(3x) + \\sec(3x))`
      },
      {
        id: 'trans-superhard-t5-82',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\frac{\\sin(6x)}{1 + \\cos(6x)}`,
        method: 'Double Angle Identity Simplification',
        solution: `\\begin{aligned}
y &= \\frac{2\\sin(3x)\\cos(3x)}{2\\cos^2(3x)} = \\tan(3x) \\\\
y' &= 3\\sec^2(3x)
\\end{aligned}`,
        finalAnswer: `y' = 3\\sec^2(3x)`
      },
      {
        id: 'trans-superhard-t5-83',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\ln\\left(\\sqrt{\\frac{1-\\cos(4x)}{1+\\cos(4x)}}\\right)`,
        method: 'Double Angle Identity and Logarithmic Differentiation',
        solution: `\\begin{aligned}
y &= \\ln\\left(\\sqrt{\\frac{2\\sin^2(2x)}{2\\cos^2(2x)}}\\right) = \\ln(\\tan(2x)) \\\\
y' &= \\frac{1}{\\tan(2x)} \\cdot 2\\sec^2(2x) = \\frac{2\\cos(2x)}{\\sin(2x)} \\cdot \\frac{1}{\\cos^2(2x)} = \\frac{2}{\\sin(2x)\\cos(2x)} = \\frac{4}{\\sin(4x)} = 4\\csc(4x)
\\end{aligned}`,
        finalAnswer: `y' = 4\\csc(4x)`
      },
      {
        id: 'trans-superhard-t5-84',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = e^{\\sin^2(3x)}`,
        method: 'Chain Rule and Double Angle Identity',
        solution: `\\begin{aligned}
y' &= e^{\\sin^2(3x)} \\cdot 2\\sin(3x)\\cos(3x) \\cdot 3 \\\\
y' &= 3 e^{\\sin^2(3x)} \\sin(6x)
\\end{aligned}`,
        finalAnswer: `y' = 3 e^{\\sin^2(3x)} \\sin(6x)`
      },
      {
        id: 'trans-superhard-t5-85',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\arcsin\\left(\\frac{2 \\tan(6x)}{1 + \\tan^2(6x)}\\right)`,
        method: 'Double Angle Identity for Sine',
        solution: `\\begin{aligned}
\\frac{2 \\tan(6x)}{1 + \\tan^2(6x)} &= \\sin(12x) \\\\
y &= \\arcsin(\\sin(12x)) = 12x \\quad \\text{(assuming principal domain)} \\\\
y' &= 12
\\end{aligned}`,
        finalAnswer: `y' = 12`
      },
      {
        id: 'trans-superhard-t5-86',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\cos^4(3x) - \\sin^4(3x)`,
        method: 'Algebraic Simplification and Double Angle Identity',
        solution: `\\begin{aligned}
y &= (\\cos^2(3x) - \\sin^2(3x))(\\cos^2(3x) + \\sin^2(3x)) \\\\
y &= \\cos(6x) \\cdot 1 = \\cos(6x) \\\\
y' &= -6\\sin(6x)
\\end{aligned}`,
        finalAnswer: `y' = -6\\sin(6x)`
      },
      {
        id: 'trans-superhard-t5-87',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\sqrt{1 + \\sin(6x)}`,
        method: 'Perfect Square and Chain Rule',
        solution: `\\begin{aligned}
1 + \\sin(6x) &= \\sin^2(3x) + \\cos^2(3x) + 2\\sin(3x)\\cos(3x) = (\\sin(3x) + \\cos(3x))^2 \\\\
y &= |\\sin(3x) + \\cos(3x)| \\\\
y' &= 3(\\cos(3x) - \\sin(3x)) \\cdot \\text{sgn}(\\sin(3x) + \\cos(3x))
\\end{aligned}`,
        finalAnswer: `y' = 3(\\cos(3x) - \\sin(3x)) \\quad \\text{(for } \\sin(3x) + \\cos(3x) > 0 \\text{)}`
      },
      {
        id: 'trans-superhard-t5-88',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\ln(\\sec(4x) + \\tan(4x))^{\\sin(4x)}`,
        method: 'Logarithmic Properties and Product Rule',
        solution: `\\begin{aligned}
y &= \\sin(4x) \\ln(\\sec(4x) + \\tan(4x)) \\\\
y' &= 4\\cos(4x) \\ln(\\sec(4x) + \\tan(4x)) + \\sin(4x) \\cdot \\frac{4\\sec(4x)(\\sec(4x) + \\tan(4x))}{\\sec(4x) + \\tan(4x)} \\\\
y' &= 4\\cos(4x) \\ln(\\sec(4x) + \\tan(4x)) + 4\\sin(4x)\\sec(4x) \\\\
y' &= 4\\cos(4x) \\ln(\\sec(4x) + \\tan(4x)) + 4\\tan(4x)
\\end{aligned}`,
        finalAnswer: `y' = 4\\cos(4x) \\ln(\\sec(4x) + \\tan(4x)) + 4\\tan(4x)`
      },
      {
        id: 'trans-superhard-t5-89',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\frac{1 - \\tan^2(4x)}{1 + \\tan^2(4x)}`,
        method: 'Double Angle Identity for Cosine',
        solution: `\\begin{aligned}
y &= \\cos(8x) \\\\
y' &= -8\\sin(8x)
\\end{aligned}`,
        finalAnswer: `y' = -8\\sin(8x)`
      },
      {
        id: 'trans-superhard-t5-90',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = e^{2x} \\sin(5x) \\cos(5x)`,
        method: 'Double Angle Identity and Product Rule',
        solution: `\\begin{aligned}
y &= \\frac{1}{2} e^{2x} \\sin(10x) \\\\
y' &= \\frac{1}{2} \\left( 2 e^{2x} \\sin(10x) + e^{2x} \\cos(10x) \\cdot 10 \\right) \\\\
y' &= \\frac{1}{2} e^{2x} (2 \\sin(10x) + 10 \\cos(10x))
\\end{aligned}`,
        finalAnswer: `y' = \\frac{1}{2} e^{2x} (2 \\sin(10x) + 10 \\cos(10x))`
      },
      {
        id: 'trans-superhard-t5-91',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\ln(\\tan(5x) + \\sec(5x)) \\cdot \\cos(10x)`,
        method: 'Product Rule and Chain Rule',
        solution: `\\begin{aligned}
\\frac{d}{dx}[\\ln(\\tan(5x) + \\sec(5x))] &= \\frac{5\\sec^2(5x) + 5\\sec(5x)\\tan(5x)}{\\tan(5x) + \\sec(5x)} = 5\\sec(5x) \\\\
y' &= 5\\sec(5x) \\cos(10x) + \\ln(\\tan(5x) + \\sec(5x)) (-10\\sin(10x))
\\end{aligned}`,
        finalAnswer: `y' = 5\\sec(5x) \\cos(10x) - 10\\sin(10x) \\ln(\\tan(5x) + \\sec(5x))`
      },
      {
        id: 'trans-superhard-t5-92',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\frac{\\sin(6x)}{1 + \\cos(6x)}`,
        method: 'Double Angle Identity Simplification',
        solution: `\\begin{aligned}
y &= \\frac{2\\sin(3x)\\cos(3x)}{2\\cos^2(3x)} = \\tan(3x) \\\\
y' &= 3\\sec^2(3x)
\\end{aligned}`,
        finalAnswer: `y' = 3\\sec^2(3x)`
      },
      {
        id: 'trans-superhard-t5-93',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\ln\\left(\\sqrt{\\frac{1-\\cos(12x)}{1+\\cos(12x)}}\\right)`,
        method: 'Double Angle Identity and Logarithmic Differentiation',
        solution: `\\begin{aligned}
y &= \\ln\\left(\\sqrt{\\frac{2\\sin^2(6x)}{2\\cos^2(6x)}}\\right) = \\ln(\\tan(6x)) \\\\
y' &= \\frac{1}{\\tan(6x)} \\cdot 6\\sec^2(6x) = \\frac{6\\cos(6x)}{\\sin(6x)} \\cdot \\frac{1}{\\cos^2(6x)} = \\frac{6}{\\sin(6x)\\cos(6x)} = \\frac{12}{\\sin(12x)} = 12\\csc(12x)
\\end{aligned}`,
        finalAnswer: `y' = 12\\csc(12x)`
      },
      {
        id: 'trans-superhard-t5-94',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = e^{\\sin^2(6x)}`,
        method: 'Chain Rule and Double Angle Identity',
        solution: `\\begin{aligned}
y' &= e^{\\sin^2(6x)} \\cdot 2\\sin(6x)\\cos(6x) \\cdot 6 \\\\
y' &= 6 e^{\\sin^2(6x)} \\sin(12x)
\\end{aligned}`,
        finalAnswer: `y' = 6 e^{\\sin^2(6x)} \\sin(12x)`
      },
      {
        id: 'trans-superhard-t5-95',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\arcsin\\left(\\frac{2 \\tan(4x)}{1 + \\tan^2(4x)}\\right)`,
        method: 'Double Angle Identity for Sine',
        solution: `\\begin{aligned}
\\frac{2 \\tan(4x)}{1 + \\tan^2(4x)} &= \\sin(8x) \\\\
y &= \\arcsin(\\sin(8x)) = 8x \\quad \\text{(assuming principal domain)} \\\\
y' &= 8
\\end{aligned}`,
        finalAnswer: `y' = 8`
      },
      {
        id: 'trans-superhard-t5-96',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\cos^4(5x) - \\sin^4(5x)`,
        method: 'Algebraic Simplification and Double Angle Identity',
        solution: `\\begin{aligned}
y &= (\\cos^2(5x) - \\sin^2(5x))(\\cos^2(5x) + \\sin^2(5x)) \\\\
y &= \\cos(10x) \\cdot 1 = \\cos(10x) \\\\
y' &= -10\\sin(10x)
\\end{aligned}`,
        finalAnswer: `y' = -10\\sin(10x)`
      },
      {
        id: 'trans-superhard-t5-97',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\sqrt{1 + \\sin(8x)}`,
        method: 'Perfect Square and Chain Rule',
        solution: `\\begin{aligned}
1 + \\sin(8x) &= \\sin^2(4x) + \\cos^2(4x) + 2\\sin(4x)\\cos(4x) = (\\sin(4x) + \\cos(4x))^2 \\\\
y &= |\\sin(4x) + \\cos(4x)| \\\\
y' &= 4(\\cos(4x) - \\sin(4x)) \\cdot \\text{sgn}(\\sin(4x) + \\cos(4x))
\\end{aligned}`,
        finalAnswer: `y' = 4(\\cos(4x) - \\sin(4x)) \\quad \\text{(for } \\sin(4x) + \\cos(4x) > 0 \\text{)}`
      },
      {
        id: 'trans-superhard-t5-98',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\ln(\\sec(4x) + \\tan(4x))^{\\sin(4x)}`,
        method: 'Logarithmic Properties and Product Rule',
        solution: `\\begin{aligned}
y &= \\sin(4x) \\ln(\\sec(4x) + \\tan(4x)) \\\\
y' &= 4\\cos(4x) \\ln(\\sec(4x) + \\tan(4x)) + \\sin(4x) \\cdot \\frac{4\\sec(4x)(\\sec(4x) + \\tan(4x))}{\\sec(4x) + \\tan(4x)} \\\\
y' &= 4\\cos(4x) \\ln(\\sec(4x) + \\tan(4x)) + 4\\sin(4x)\\sec(4x) \\\\
y' &= 4\\cos(4x) \\ln(\\sec(4x) + \\tan(4x)) + 4\\tan(4x)
\\end{aligned}`,
        finalAnswer: `y' = 4\\cos(4x) \\ln(\\sec(4x) + \\tan(4x)) + 4\\tan(4x)`
      },
      {
        id: 'trans-superhard-t5-99',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\frac{1 - \\tan^2(4x)}{1 + \\tan^2(4x)}`,
        method: 'Double Angle Identity for Cosine',
        solution: `\\begin{aligned}
y &= \\cos(8x) \\\\
y' &= -8\\sin(8x)
\\end{aligned}`,
        finalAnswer: `y' = -8\\sin(8x)`
      },
      {
        id: 'trans-superhard-t5-100',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = e^{5x} \\sin(4x) \\cos(4x)`,
        method: 'Double Angle Identity and Product Rule',
        solution: `\\begin{aligned}
y &= \\frac{1}{2} e^{5x} \\sin(8x) \\\\
y' &= \\frac{1}{2} \\left( 5 e^{5x} \\sin(8x) + e^{5x} \\cos(8x) \\cdot 8 \\right) \\\\
y' &= \\frac{1}{2} e^{5x} (5 \\sin(8x) + 8 \\cos(8x))
\\end{aligned}`,
        finalAnswer: `y' = \\frac{1}{2} e^{5x} (5 \\sin(8x) + 8 \\cos(8x))`
      }
    ,
      {
        id: 'trans-hyperbolic-1',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = e^{3x} \\tanh(5x)`,
        method: 'Product Rule and Chain Rule',
        solution: `\\begin{aligned}
y' &= e^{3x} \\cdot \\text{sech}^2(5x) \\cdot 5 + \\tanh(5x) \\cdot e^{3x} \\cdot 3 \\\\
y' &= e^{3x} (5 \\text{sech}^2(5x) + 3 \\tanh(5x))
\\end{aligned}`,
        finalAnswer: `y' = e^{3x} (5 \\text{sech}^2(5x) + 3 \\tanh(5x))`
      },
      {
        id: 'trans-hyperbolic-2',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\ln(\\cosh(4x))`,
        method: 'Chain Rule',
        solution: `\\begin{aligned}
y' &= \\frac{1}{\\cosh(4x)} \\cdot \\sinh(4x) \\cdot 4 \\\\
y' &= 4 \\tanh(4x)
\\end{aligned}`,
        finalAnswer: `y' = 4 \\tanh(4x)`
      },
      {
        id: 'trans-hyperbolic-3',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\sin(\\sinh(4x))`,
        method: 'Chain Rule',
        solution: `\\begin{aligned}
y' &= \\cos(\\sinh(4x)) \\cdot \\cosh(4x) \\cdot 4 \\\\
y' &= 4 \\cosh(4x) \\cos(\\sinh(4x))
\\end{aligned}`,
        finalAnswer: `y' = 4 \\cosh(4x) \\cos(\\sinh(4x))`
      },
      {
        id: 'trans-hyperbolic-4',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\arcsin(\\tanh(4x))`,
        method: 'Chain Rule',
        solution: `\\begin{aligned}
y' &= \\frac{1}{\\sqrt{1 - \\tanh^2(4x)}} \\cdot \\text{sech}^2(4x) \\cdot 4 \\\\
y' &= \\frac{1}{\\text{sech}(4x)} \\cdot 4 \\text{sech}^2(4x) \\\\
y' &= 4 \\text{sech}(4x)
\\end{aligned}`,
        finalAnswer: `y' = 4 \\text{sech}(4x)`
      },
      {
        id: 'trans-hyperbolic-5',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\cosh^3(5x)`,
        method: 'Chain Rule',
        solution: `\\begin{aligned}
y' &= 3\\cosh^2(5x) \\cdot \\sinh(5x) \\cdot 5 \\\\
y' &= 15 \\cosh^2(5x) \\sinh(5x)
\\end{aligned}`,
        finalAnswer: `y' = 15 \\cosh^2(5x) \\sinh(5x)`
      },
      {
        id: 'trans-hyperbolic-6',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\text{sech}(4x) \\tan(5x)`,
        method: 'Product Rule',
        solution: `\\begin{aligned}
y' &= \\text{sech}(4x) \\cdot \\sec^2(5x) \\cdot 5 + \\tan(5x) \\cdot (-\\text{sech}(4x)\\tanh(4x)) \\cdot 4 \\\\
y' &= \\text{sech}(4x) (5 \\sec^2(5x) - 4 \\tan(5x) \\tanh(4x))
\\end{aligned}`,
        finalAnswer: `y' = \\text{sech}(4x) (5 \\sec^2(5x) - 4 \\tan(5x) \\tanh(4x))`
      },
      {
        id: 'trans-hyperbolic-7',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\sqrt{1 + \\sinh^2(3x)}`,
        method: 'Hyperbolic Identity and Chain Rule',
        solution: `\\begin{aligned}
1 + \\sinh^2(3x) &= \\cosh^2(3x) \\\\
y &= \\sqrt{\\cosh^2(3x)} = \\cosh(3x) \\quad \\text{(since } \\cosh x > 0 \\text{)} \\\\
y' &= 3 \\sinh(3x)
\\end{aligned}`,
        finalAnswer: `y' = 3 \\sinh(3x)`
      },
      {
        id: 'trans-hyperbolic-8',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\ln(\\sinh(4x) + \\cosh(4x))`,
        method: 'Hyperbolic Identity and Logarithmic Properties',
        solution: `\\begin{aligned}
\\sinh(4x) + \\cosh(4x) &= e^{4x} \\\\
y &= \\ln(e^{4x}) = 4x \\\\
y' &= 4
\\end{aligned}`,
        finalAnswer: `y' = 4`
      },
      {
        id: 'trans-hyperbolic-9',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\frac{\\sinh(5x)}{1 + \\cosh(5x)}`,
        method: 'Quotient Rule',
        solution: `\\begin{aligned}
y' &= \\frac{(1 + \\cosh(5x))(5\\cosh(5x)) - \\sinh(5x)(5\\sinh(5x))}{(1 + \\cosh(5x))^2} \\\\
y' &= \\frac{5\\cosh(5x) + 5\\cosh^2(5x) - 5\\sinh^2(5x)}{(1 + \\cosh(5x))^2} \\\\
y' &= \\frac{5\\cosh(5x) + 5(\\cosh^2(5x) - \\sinh^2(5x))}{(1 + \\cosh(5x))^2} \\\\
y' &= \\frac{5\\cosh(5x) + 5}{(1 + \\cosh(5x))^2} = \\frac{5(1 + \\cosh(5x))}{(1 + \\cosh(5x))^2} \\\\
y' &= \\frac{5}{1 + \\cosh(5x)}
\\end{aligned}`,
        finalAnswer: `y' = \\frac{5}{1 + \\cosh(5x)}`
      },
      {
        id: 'trans-hyperbolic-10',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\sinh(2x) \\cosh(2x)`,
        method: 'Double Angle Identity for Hyperbolic Functions',
        solution: `\\begin{aligned}
y &= \\frac{1}{2} \\sinh(4x) \\\\
y' &= \\frac{1}{2} \\cosh(4x) \\cdot 4 \\\\
y' &= 2 \\cosh(4x)
\\end{aligned}`,
        finalAnswer: `y' = 2 \\cosh(4x)`
      },
      {
        id: 'trans-hyperbolic-11',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = e^{3x} \\tanh(4x)`,
        method: 'Product Rule and Chain Rule',
        solution: `\\begin{aligned}
y' &= e^{3x} \\cdot \\text{sech}^2(4x) \\cdot 4 + \\tanh(4x) \\cdot e^{3x} \\cdot 3 \\\\
y' &= e^{3x} (4 \\text{sech}^2(4x) + 3 \\tanh(4x))
\\end{aligned}`,
        finalAnswer: `y' = e^{3x} (4 \\text{sech}^2(4x) + 3 \\tanh(4x))`
      },
      {
        id: 'trans-hyperbolic-12',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\ln(\\cosh(6x))`,
        method: 'Chain Rule',
        solution: `\\begin{aligned}
y' &= \\frac{1}{\\cosh(6x)} \\cdot \\sinh(6x) \\cdot 6 \\\\
y' &= 6 \\tanh(6x)
\\end{aligned}`,
        finalAnswer: `y' = 6 \\tanh(6x)`
      },
      {
        id: 'trans-hyperbolic-13',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\sin(\\sinh(6x))`,
        method: 'Chain Rule',
        solution: `\\begin{aligned}
y' &= \\cos(\\sinh(6x)) \\cdot \\cosh(6x) \\cdot 6 \\\\
y' &= 6 \\cosh(6x) \\cos(\\sinh(6x))
\\end{aligned}`,
        finalAnswer: `y' = 6 \\cosh(6x) \\cos(\\sinh(6x))`
      },
      {
        id: 'trans-hyperbolic-14',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\arcsin(\\tanh(6x))`,
        method: 'Chain Rule',
        solution: `\\begin{aligned}
y' &= \\frac{1}{\\sqrt{1 - \\tanh^2(6x)}} \\cdot \\text{sech}^2(6x) \\cdot 6 \\\\
y' &= \\frac{1}{\\text{sech}(6x)} \\cdot 6 \\text{sech}^2(6x) \\\\
y' &= 6 \\text{sech}(6x)
\\end{aligned}`,
        finalAnswer: `y' = 6 \\text{sech}(6x)`
      },
      {
        id: 'trans-hyperbolic-15',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\cosh^3(4x)`,
        method: 'Chain Rule',
        solution: `\\begin{aligned}
y' &= 3\\cosh^2(4x) \\cdot \\sinh(4x) \\cdot 4 \\\\
y' &= 12 \\cosh^2(4x) \\sinh(4x)
\\end{aligned}`,
        finalAnswer: `y' = 12 \\cosh^2(4x) \\sinh(4x)`
      },
      {
        id: 'trans-hyperbolic-16',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\text{sech}(2x) \\tan(6x)`,
        method: 'Product Rule',
        solution: `\\begin{aligned}
y' &= \\text{sech}(2x) \\cdot \\sec^2(6x) \\cdot 6 + \\tan(6x) \\cdot (-\\text{sech}(2x)\\tanh(2x)) \\cdot 2 \\\\
y' &= \\text{sech}(2x) (6 \\sec^2(6x) - 2 \\tan(6x) \\tanh(2x))
\\end{aligned}`,
        finalAnswer: `y' = \\text{sech}(2x) (6 \\sec^2(6x) - 2 \\tan(6x) \\tanh(2x))`
      },
      {
        id: 'trans-hyperbolic-17',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\sqrt{1 + \\sinh^2(4x)}`,
        method: 'Hyperbolic Identity and Chain Rule',
        solution: `\\begin{aligned}
1 + \\sinh^2(4x) &= \\cosh^2(4x) \\\\
y &= \\sqrt{\\cosh^2(4x)} = \\cosh(4x) \\quad \\text{(since } \\cosh x > 0 \\text{)} \\\\
y' &= 4 \\sinh(4x)
\\end{aligned}`,
        finalAnswer: `y' = 4 \\sinh(4x)`
      },
      {
        id: 'trans-hyperbolic-18',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\ln(\\sinh(5x) + \\cosh(5x))`,
        method: 'Hyperbolic Identity and Logarithmic Properties',
        solution: `\\begin{aligned}
\\sinh(5x) + \\cosh(5x) &= e^{5x} \\\\
y &= \\ln(e^{5x}) = 5x \\\\
y' &= 5
\\end{aligned}`,
        finalAnswer: `y' = 5`
      },
      {
        id: 'trans-hyperbolic-19',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\frac{\\sinh(3x)}{1 + \\cosh(3x)}`,
        method: 'Quotient Rule',
        solution: `\\begin{aligned}
y' &= \\frac{(1 + \\cosh(3x))(3\\cosh(3x)) - \\sinh(3x)(3\\sinh(3x))}{(1 + \\cosh(3x))^2} \\\\
y' &= \\frac{3\\cosh(3x) + 3\\cosh^2(3x) - 3\\sinh^2(3x)}{(1 + \\cosh(3x))^2} \\\\
y' &= \\frac{3\\cosh(3x) + 3(\\cosh^2(3x) - \\sinh^2(3x))}{(1 + \\cosh(3x))^2} \\\\
y' &= \\frac{3\\cosh(3x) + 3}{(1 + \\cosh(3x))^2} = \\frac{3(1 + \\cosh(3x))}{(1 + \\cosh(3x))^2} \\\\
y' &= \\frac{3}{1 + \\cosh(3x)}
\\end{aligned}`,
        finalAnswer: `y' = \\frac{3}{1 + \\cosh(3x)}`
      },
      {
        id: 'trans-hyperbolic-20',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\sinh(3x) \\cosh(3x)`,
        method: 'Double Angle Identity for Hyperbolic Functions',
        solution: `\\begin{aligned}
y &= \\frac{1}{2} \\sinh(6x) \\\\
y' &= \\frac{1}{2} \\cosh(6x) \\cdot 6 \\\\
y' &= 3 \\cosh(6x)
\\end{aligned}`,
        finalAnswer: `y' = 3 \\cosh(6x)`
      },
      {
        id: 'trans-hyperbolic-21',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = e^{5x} \\tanh(6x)`,
        method: 'Product Rule and Chain Rule',
        solution: `\\begin{aligned}
y' &= e^{5x} \\cdot \\text{sech}^2(6x) \\cdot 6 + \\tanh(6x) \\cdot e^{5x} \\cdot 5 \\\\
y' &= e^{5x} (6 \\text{sech}^2(6x) + 5 \\tanh(6x))
\\end{aligned}`,
        finalAnswer: `y' = e^{5x} (6 \\text{sech}^2(6x) + 5 \\tanh(6x))`
      },
      {
        id: 'trans-hyperbolic-22',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\ln(\\cosh(3x))`,
        method: 'Chain Rule',
        solution: `\\begin{aligned}
y' &= \\frac{1}{\\cosh(3x)} \\cdot \\sinh(3x) \\cdot 3 \\\\
y' &= 3 \\tanh(3x)
\\end{aligned}`,
        finalAnswer: `y' = 3 \\tanh(3x)`
      },
      {
        id: 'trans-hyperbolic-23',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\sin(\\sinh(4x))`,
        method: 'Chain Rule',
        solution: `\\begin{aligned}
y' &= \\cos(\\sinh(4x)) \\cdot \\cosh(4x) \\cdot 4 \\\\
y' &= 4 \\cosh(4x) \\cos(\\sinh(4x))
\\end{aligned}`,
        finalAnswer: `y' = 4 \\cosh(4x) \\cos(\\sinh(4x))`
      },
      {
        id: 'trans-hyperbolic-24',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\arcsin(\\tanh(2x))`,
        method: 'Chain Rule',
        solution: `\\begin{aligned}
y' &= \\frac{1}{\\sqrt{1 - \\tanh^2(2x)}} \\cdot \\text{sech}^2(2x) \\cdot 2 \\\\
y' &= \\frac{1}{\\text{sech}(2x)} \\cdot 2 \\text{sech}^2(2x) \\\\
y' &= 2 \\text{sech}(2x)
\\end{aligned}`,
        finalAnswer: `y' = 2 \\text{sech}(2x)`
      },
      {
        id: 'trans-hyperbolic-25',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\cosh^3(6x)`,
        method: 'Chain Rule',
        solution: `\\begin{aligned}
y' &= 3\\cosh^2(6x) \\cdot \\sinh(6x) \\cdot 6 \\\\
y' &= 18 \\cosh^2(6x) \\sinh(6x)
\\end{aligned}`,
        finalAnswer: `y' = 18 \\cosh^2(6x) \\sinh(6x)`
      },
      {
        id: 'trans-hyperbolic-26',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\text{sech}(6x) \\tan(6x)`,
        method: 'Product Rule',
        solution: `\\begin{aligned}
y' &= \\text{sech}(6x) \\cdot \\sec^2(6x) \\cdot 6 + \\tan(6x) \\cdot (-\\text{sech}(6x)\\tanh(6x)) \\cdot 6 \\\\
y' &= \\text{sech}(6x) (6 \\sec^2(6x) - 6 \\tan(6x) \\tanh(6x))
\\end{aligned}`,
        finalAnswer: `y' = \\text{sech}(6x) (6 \\sec^2(6x) - 6 \\tan(6x) \\tanh(6x))`
      },
      {
        id: 'trans-hyperbolic-27',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\sqrt{1 + \\sinh^2(4x)}`,
        method: 'Hyperbolic Identity and Chain Rule',
        solution: `\\begin{aligned}
1 + \\sinh^2(4x) &= \\cosh^2(4x) \\\\
y &= \\sqrt{\\cosh^2(4x)} = \\cosh(4x) \\quad \\text{(since } \\cosh x > 0 \\text{)} \\\\
y' &= 4 \\sinh(4x)
\\end{aligned}`,
        finalAnswer: `y' = 4 \\sinh(4x)`
      },
      {
        id: 'trans-hyperbolic-28',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\ln(\\sinh(3x) + \\cosh(3x))`,
        method: 'Hyperbolic Identity and Logarithmic Properties',
        solution: `\\begin{aligned}
\\sinh(3x) + \\cosh(3x) &= e^{3x} \\\\
y &= \\ln(e^{3x}) = 3x \\\\
y' &= 3
\\end{aligned}`,
        finalAnswer: `y' = 3`
      },
      {
        id: 'trans-hyperbolic-29',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\frac{\\sinh(3x)}{1 + \\cosh(3x)}`,
        method: 'Quotient Rule',
        solution: `\\begin{aligned}
y' &= \\frac{(1 + \\cosh(3x))(3\\cosh(3x)) - \\sinh(3x)(3\\sinh(3x))}{(1 + \\cosh(3x))^2} \\\\
y' &= \\frac{3\\cosh(3x) + 3\\cosh^2(3x) - 3\\sinh^2(3x)}{(1 + \\cosh(3x))^2} \\\\
y' &= \\frac{3\\cosh(3x) + 3(\\cosh^2(3x) - \\sinh^2(3x))}{(1 + \\cosh(3x))^2} \\\\
y' &= \\frac{3\\cosh(3x) + 3}{(1 + \\cosh(3x))^2} = \\frac{3(1 + \\cosh(3x))}{(1 + \\cosh(3x))^2} \\\\
y' &= \\frac{3}{1 + \\cosh(3x)}
\\end{aligned}`,
        finalAnswer: `y' = \\frac{3}{1 + \\cosh(3x)}`
      },
      {
        id: 'trans-hyperbolic-30',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\sinh(2x) \\cosh(2x)`,
        method: 'Double Angle Identity for Hyperbolic Functions',
        solution: `\\begin{aligned}
y &= \\frac{1}{2} \\sinh(4x) \\\\
y' &= \\frac{1}{2} \\cosh(4x) \\cdot 4 \\\\
y' &= 2 \\cosh(4x)
\\end{aligned}`,
        finalAnswer: `y' = 2 \\cosh(4x)`
      },
      {
        id: 'trans-hyperbolic-31',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = e^{5x} \\tanh(3x)`,
        method: 'Product Rule and Chain Rule',
        solution: `\\begin{aligned}
y' &= e^{5x} \\cdot \\text{sech}^2(3x) \\cdot 3 + \\tanh(3x) \\cdot e^{5x} \\cdot 5 \\\\
y' &= e^{5x} (3 \\text{sech}^2(3x) + 5 \\tanh(3x))
\\end{aligned}`,
        finalAnswer: `y' = e^{5x} (3 \\text{sech}^2(3x) + 5 \\tanh(3x))`
      },
      {
        id: 'trans-hyperbolic-32',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\ln(\\cosh(2x))`,
        method: 'Chain Rule',
        solution: `\\begin{aligned}
y' &= \\frac{1}{\\cosh(2x)} \\cdot \\sinh(2x) \\cdot 2 \\\\
y' &= 2 \\tanh(2x)
\\end{aligned}`,
        finalAnswer: `y' = 2 \\tanh(2x)`
      },
      {
        id: 'trans-hyperbolic-33',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\sin(\\sinh(4x))`,
        method: 'Chain Rule',
        solution: `\\begin{aligned}
y' &= \\cos(\\sinh(4x)) \\cdot \\cosh(4x) \\cdot 4 \\\\
y' &= 4 \\cosh(4x) \\cos(\\sinh(4x))
\\end{aligned}`,
        finalAnswer: `y' = 4 \\cosh(4x) \\cos(\\sinh(4x))`
      },
      {
        id: 'trans-hyperbolic-34',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\arcsin(\\tanh(6x))`,
        method: 'Chain Rule',
        solution: `\\begin{aligned}
y' &= \\frac{1}{\\sqrt{1 - \\tanh^2(6x)}} \\cdot \\text{sech}^2(6x) \\cdot 6 \\\\
y' &= \\frac{1}{\\text{sech}(6x)} \\cdot 6 \\text{sech}^2(6x) \\\\
y' &= 6 \\text{sech}(6x)
\\end{aligned}`,
        finalAnswer: `y' = 6 \\text{sech}(6x)`
      },
      {
        id: 'trans-hyperbolic-35',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\cosh^3(6x)`,
        method: 'Chain Rule',
        solution: `\\begin{aligned}
y' &= 3\\cosh^2(6x) \\cdot \\sinh(6x) \\cdot 6 \\\\
y' &= 18 \\cosh^2(6x) \\sinh(6x)
\\end{aligned}`,
        finalAnswer: `y' = 18 \\cosh^2(6x) \\sinh(6x)`
      },
      {
        id: 'trans-hyperbolic-36',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\text{sech}(5x) \\tan(6x)`,
        method: 'Product Rule',
        solution: `\\begin{aligned}
y' &= \\text{sech}(5x) \\cdot \\sec^2(6x) \\cdot 6 + \\tan(6x) \\cdot (-\\text{sech}(5x)\\tanh(5x)) \\cdot 5 \\\\
y' &= \\text{sech}(5x) (6 \\sec^2(6x) - 5 \\tan(6x) \\tanh(5x))
\\end{aligned}`,
        finalAnswer: `y' = \\text{sech}(5x) (6 \\sec^2(6x) - 5 \\tan(6x) \\tanh(5x))`
      },
      {
        id: 'trans-hyperbolic-37',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\sqrt{1 + \\sinh^2(4x)}`,
        method: 'Hyperbolic Identity and Chain Rule',
        solution: `\\begin{aligned}
1 + \\sinh^2(4x) &= \\cosh^2(4x) \\\\
y &= \\sqrt{\\cosh^2(4x)} = \\cosh(4x) \\quad \\text{(since } \\cosh x > 0 \\text{)} \\\\
y' &= 4 \\sinh(4x)
\\end{aligned}`,
        finalAnswer: `y' = 4 \\sinh(4x)`
      },
      {
        id: 'trans-hyperbolic-38',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\ln(\\sinh(4x) + \\cosh(4x))`,
        method: 'Hyperbolic Identity and Logarithmic Properties',
        solution: `\\begin{aligned}
\\sinh(4x) + \\cosh(4x) &= e^{4x} \\\\
y &= \\ln(e^{4x}) = 4x \\\\
y' &= 4
\\end{aligned}`,
        finalAnswer: `y' = 4`
      },
      {
        id: 'trans-hyperbolic-39',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\frac{\\sinh(5x)}{1 + \\cosh(5x)}`,
        method: 'Quotient Rule',
        solution: `\\begin{aligned}
y' &= \\frac{(1 + \\cosh(5x))(5\\cosh(5x)) - \\sinh(5x)(5\\sinh(5x))}{(1 + \\cosh(5x))^2} \\\\
y' &= \\frac{5\\cosh(5x) + 5\\cosh^2(5x) - 5\\sinh^2(5x)}{(1 + \\cosh(5x))^2} \\\\
y' &= \\frac{5\\cosh(5x) + 5(\\cosh^2(5x) - \\sinh^2(5x))}{(1 + \\cosh(5x))^2} \\\\
y' &= \\frac{5\\cosh(5x) + 5}{(1 + \\cosh(5x))^2} = \\frac{5(1 + \\cosh(5x))}{(1 + \\cosh(5x))^2} \\\\
y' &= \\frac{5}{1 + \\cosh(5x)}
\\end{aligned}`,
        finalAnswer: `y' = \\frac{5}{1 + \\cosh(5x)}`
      },
      {
        id: 'trans-hyperbolic-40',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\sinh(2x) \\cosh(2x)`,
        method: 'Double Angle Identity for Hyperbolic Functions',
        solution: `\\begin{aligned}
y &= \\frac{1}{2} \\sinh(4x) \\\\
y' &= \\frac{1}{2} \\cosh(4x) \\cdot 4 \\\\
y' &= 2 \\cosh(4x)
\\end{aligned}`,
        finalAnswer: `y' = 2 \\cosh(4x)`
      },
      {
        id: 'trans-hyperbolic-41',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = e^{6x} \\tanh(4x)`,
        method: 'Product Rule and Chain Rule',
        solution: `\\begin{aligned}
y' &= e^{6x} \\cdot \\text{sech}^2(4x) \\cdot 4 + \\tanh(4x) \\cdot e^{6x} \\cdot 6 \\\\
y' &= e^{6x} (4 \\text{sech}^2(4x) + 6 \\tanh(4x))
\\end{aligned}`,
        finalAnswer: `y' = e^{6x} (4 \\text{sech}^2(4x) + 6 \\tanh(4x))`
      },
      {
        id: 'trans-hyperbolic-42',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\ln(\\cosh(4x))`,
        method: 'Chain Rule',
        solution: `\\begin{aligned}
y' &= \\frac{1}{\\cosh(4x)} \\cdot \\sinh(4x) \\cdot 4 \\\\
y' &= 4 \\tanh(4x)
\\end{aligned}`,
        finalAnswer: `y' = 4 \\tanh(4x)`
      },
      {
        id: 'trans-hyperbolic-43',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\sin(\\sinh(5x))`,
        method: 'Chain Rule',
        solution: `\\begin{aligned}
y' &= \\cos(\\sinh(5x)) \\cdot \\cosh(5x) \\cdot 5 \\\\
y' &= 5 \\cosh(5x) \\cos(\\sinh(5x))
\\end{aligned}`,
        finalAnswer: `y' = 5 \\cosh(5x) \\cos(\\sinh(5x))`
      },
      {
        id: 'trans-hyperbolic-44',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\arcsin(\\tanh(5x))`,
        method: 'Chain Rule',
        solution: `\\begin{aligned}
y' &= \\frac{1}{\\sqrt{1 - \\tanh^2(5x)}} \\cdot \\text{sech}^2(5x) \\cdot 5 \\\\
y' &= \\frac{1}{\\text{sech}(5x)} \\cdot 5 \\text{sech}^2(5x) \\\\
y' &= 5 \\text{sech}(5x)
\\end{aligned}`,
        finalAnswer: `y' = 5 \\text{sech}(5x)`
      },
      {
        id: 'trans-hyperbolic-45',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\cosh^3(3x)`,
        method: 'Chain Rule',
        solution: `\\begin{aligned}
y' &= 3\\cosh^2(3x) \\cdot \\sinh(3x) \\cdot 3 \\\\
y' &= 9 \\cosh^2(3x) \\sinh(3x)
\\end{aligned}`,
        finalAnswer: `y' = 9 \\cosh^2(3x) \\sinh(3x)`
      },
      {
        id: 'trans-hyperbolic-46',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\text{sech}(5x) \\tan(6x)`,
        method: 'Product Rule',
        solution: `\\begin{aligned}
y' &= \\text{sech}(5x) \\cdot \\sec^2(6x) \\cdot 6 + \\tan(6x) \\cdot (-\\text{sech}(5x)\\tanh(5x)) \\cdot 5 \\\\
y' &= \\text{sech}(5x) (6 \\sec^2(6x) - 5 \\tan(6x) \\tanh(5x))
\\end{aligned}`,
        finalAnswer: `y' = \\text{sech}(5x) (6 \\sec^2(6x) - 5 \\tan(6x) \\tanh(5x))`
      },
      {
        id: 'trans-hyperbolic-47',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\sqrt{1 + \\sinh^2(5x)}`,
        method: 'Hyperbolic Identity and Chain Rule',
        solution: `\\begin{aligned}
1 + \\sinh^2(5x) &= \\cosh^2(5x) \\\\
y &= \\sqrt{\\cosh^2(5x)} = \\cosh(5x) \\quad \\text{(since } \\cosh x > 0 \\text{)} \\\\
y' &= 5 \\sinh(5x)
\\end{aligned}`,
        finalAnswer: `y' = 5 \\sinh(5x)`
      },
      {
        id: 'trans-hyperbolic-48',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\ln(\\sinh(3x) + \\cosh(3x))`,
        method: 'Hyperbolic Identity and Logarithmic Properties',
        solution: `\\begin{aligned}
\\sinh(3x) + \\cosh(3x) &= e^{3x} \\\\
y &= \\ln(e^{3x}) = 3x \\\\
y' &= 3
\\end{aligned}`,
        finalAnswer: `y' = 3`
      },
      {
        id: 'trans-hyperbolic-49',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\frac{\\sinh(4x)}{1 + \\cosh(4x)}`,
        method: 'Quotient Rule',
        solution: `\\begin{aligned}
y' &= \\frac{(1 + \\cosh(4x))(4\\cosh(4x)) - \\sinh(4x)(4\\sinh(4x))}{(1 + \\cosh(4x))^2} \\\\
y' &= \\frac{4\\cosh(4x) + 4\\cosh^2(4x) - 4\\sinh^2(4x)}{(1 + \\cosh(4x))^2} \\\\
y' &= \\frac{4\\cosh(4x) + 4(\\cosh^2(4x) - \\sinh^2(4x))}{(1 + \\cosh(4x))^2} \\\\
y' &= \\frac{4\\cosh(4x) + 4}{(1 + \\cosh(4x))^2} = \\frac{4(1 + \\cosh(4x))}{(1 + \\cosh(4x))^2} \\\\
y' &= \\frac{4}{1 + \\cosh(4x)}
\\end{aligned}`,
        finalAnswer: `y' = \\frac{4}{1 + \\cosh(4x)}`
      },
      {
        id: 'trans-hyperbolic-50',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\sinh(5x) \\cosh(5x)`,
        method: 'Double Angle Identity for Hyperbolic Functions',
        solution: `\\begin{aligned}
y &= \\frac{1}{2} \\sinh(10x) \\\\
y' &= \\frac{1}{2} \\cosh(10x) \\cdot 10 \\\\
y' &= 5 \\cosh(10x)
\\end{aligned}`,
        finalAnswer: `y' = 5 \\cosh(10x)`
      }
    ,
      {
        id: 'trans-mixed-1',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\frac{\\ln(4x^2 + 1)}{\\cos(3x)}`,
        method: 'Quotient Rule and Chain Rule',
        solution: `\\begin{aligned}
y' &= \\frac{\\cos(3x) \\cdot \\frac{8x}{4x^2 + 1} - \\ln(4x^2 + 1) \\cdot (-3\\sin(3x))}{\\cos^2(3x)} \\\\
y' &= \\frac{\\frac{8x\\cos(3x)}{4x^2 + 1} + 3\\sin(3x)\\ln(4x^2 + 1)}{\\cos^2(3x)}
\\end{aligned}`,
        finalAnswer: `y' = \\frac{\\frac{8x\\cos(3x)}{4x^2 + 1} + 3\\sin(3x)\\ln(4x^2 + 1)}{\\cos^2(3x)}`
      },
      {
        id: 'trans-mixed-2',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\arcsin(e^{-5x})`,
        method: 'Chain Rule with Inverse Trigonometric and Exponential Functions',
        solution: `\\begin{aligned}
y' &= \\frac{1}{\\sqrt{1 - (e^{-5x})^2}} \\cdot \\frac{d}{dx}(e^{-5x}) \\\\
y' &= \\frac{1}{\\sqrt{1 - e^{-10x}}} \\cdot (-5e^{-5x}) \\\\
y' &= -\\frac{5e^{-5x}}{\\sqrt{1 - e^{-10x}}}
\\end{aligned}`,
        finalAnswer: `y' = -\\frac{5e^{-5x}}{\\sqrt{1 - e^{-10x}}}`
      },
      {
        id: 'trans-mixed-3',
        difficulty: 'Easy',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\tan^3(3x) \\sec(6x)`,
        method: 'Product Rule and Chain Rule',
        solution: `\\begin{aligned}
y' &= (\\tan^3(3x))' \\sec(6x) + \\tan^3(3x) (\\sec(6x))' \\\\
y' &= 3\\tan^2(3x) \\cdot 3\\sec^2(3x) \\sec(6x) + \\tan^3(3x) \\cdot 6\\sec(6x)\\tan(6x) \\\\
y' &= 9\\tan^2(3x)\\sec^2(3x)\\sec(6x) + 6\\tan^3(3x)\\sec(6x)\\tan(6x)
\\end{aligned}`,
        finalAnswer: `y' = 9\\tan^2(3x)\\sec^2(3x)\\sec(6x) + 6\\tan^3(3x)\\sec(6x)\\tan(6x)`
      },
      {
        id: 'trans-mixed-4',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\ln(\\sqrt{\\frac{1+\\sin(3x)}{1-\\sin(3x)}})`,
        method: 'Logarithmic Properties and Chain Rule',
        solution: `\\begin{aligned}
y &= \\frac{1}{2} \\left( \\ln(1+\\sin(3x)) - \\ln(1-\\sin(3x)) \\right) \\\\
y' &= \\frac{1}{2} \\left( \\frac{3\\cos(3x)}{1+\\sin(3x)} - \\frac{-3\\cos(3x)}{1-\\sin(3x)} \\right) \\\\
y' &= \\frac{3\\cos(3x)}{2} \\left( \\frac{1-\\sin(3x) + 1+\\sin(3x)}{(1+\\sin(3x))(1-\\sin(3x))} \\right) \\\\
y' &= \\frac{3\\cos(3x)}{2} \\left( \\frac{2}{1-\\sin^2(3x)} \\right) \\\\
y' &= \\frac{3\\cos(3x)}{\\cos^2(3x)} = 3\\sec(3x)
\\end{aligned}`,
        finalAnswer: `y' = 3\\sec(3x)`
      },
      {
        id: 'trans-mixed-5',
        difficulty: 'Easy',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = e^{3x} \\sin(3x) \\ln(x)`,
        method: 'Product Rule (Three terms) and Chain Rule',
        solution: `\\begin{aligned}
y' &= (e^{3x})' \\sin(3x) \\ln(x) + e^{3x} (\\sin(3x))' \\ln(x) + e^{3x} \\sin(3x) (\\ln(x))' \\\\
y' &= 3e^{3x} \\sin(3x) \\ln(x) + e^{3x} (3\\cos(3x)) \\ln(x) + e^{3x} \\sin(3x) \\frac{1}{x} \\\\
y' &= e^{3x} \\left( 3\\sin(3x)\\ln(x) + 3\\cos(3x)\\ln(x) + \\frac{\\sin(3x)}{x} \\right)
\\end{aligned}`,
        finalAnswer: `y' = e^{3x} \\left( 3\\sin(3x)\\ln(x) + 3\\cos(3x)\\ln(x) + \\frac{\\sin(3x)}{x} \\right)`
      },
      {
        id: 'trans-mixed-6',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\frac{\\ln(2x^2 + 1)}{\\cos(2x)}`,
        method: 'Quotient Rule and Chain Rule',
        solution: `\\begin{aligned}
y' &= \\frac{\\cos(2x) \\cdot \\frac{4x}{2x^2 + 1} - \\ln(2x^2 + 1) \\cdot (-2\\sin(2x))}{\\cos^2(2x)} \\\\
y' &= \\frac{\\frac{4x\\cos(2x)}{2x^2 + 1} + 2\\sin(2x)\\ln(2x^2 + 1)}{\\cos^2(2x)}
\\end{aligned}`,
        finalAnswer: `y' = \\frac{\\frac{4x\\cos(2x)}{2x^2 + 1} + 2\\sin(2x)\\ln(2x^2 + 1)}{\\cos^2(2x)}`
      },
      {
        id: 'trans-mixed-7',
        difficulty: 'Medium',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\arcsin(e^{-4x})`,
        method: 'Chain Rule with Inverse Trigonometric and Exponential Functions',
        solution: `\\begin{aligned}
y' &= \\frac{1}{\\sqrt{1 - (e^{-4x})^2}} \\cdot \\frac{d}{dx}(e^{-4x}) \\\\
y' &= \\frac{1}{\\sqrt{1 - e^{-8x}}} \\cdot (-4e^{-4x}) \\\\
y' &= -\\frac{4e^{-4x}}{\\sqrt{1 - e^{-8x}}}
\\end{aligned}`,
        finalAnswer: `y' = -\\frac{4e^{-4x}}{\\sqrt{1 - e^{-8x}}}`
      },
      {
        id: 'trans-mixed-8',
        difficulty: 'Medium',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\tan^3(5x) \\sec(5x)`,
        method: 'Product Rule and Chain Rule',
        solution: `\\begin{aligned}
y' &= (\\tan^3(5x))' \\sec(5x) + \\tan^3(5x) (\\sec(5x))' \\\\
y' &= 3\\tan^2(5x) \\cdot 5\\sec^2(5x) \\sec(5x) + \\tan^3(5x) \\cdot 5\\sec(5x)\\tan(5x) \\\\
y' &= 15\\tan^2(5x)\\sec^2(5x)\\sec(5x) + 5\\tan^3(5x)\\sec(5x)\\tan(5x)
\\end{aligned}`,
        finalAnswer: `y' = 15\\tan^2(5x)\\sec^2(5x)\\sec(5x) + 5\\tan^3(5x)\\sec(5x)\\tan(5x)`
      },
      {
        id: 'trans-mixed-9',
        difficulty: 'Easy',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\ln(\\sqrt{\\frac{1+\\sin(5x)}{1-\\sin(5x)}})`,
        method: 'Logarithmic Properties and Chain Rule',
        solution: `\\begin{aligned}
y &= \\frac{1}{2} \\left( \\ln(1+\\sin(5x)) - \\ln(1-\\sin(5x)) \\right) \\\\
y' &= \\frac{1}{2} \\left( \\frac{5\\cos(5x)}{1+\\sin(5x)} - \\frac{-5\\cos(5x)}{1-\\sin(5x)} \\right) \\\\
y' &= \\frac{5\\cos(5x)}{2} \\left( \\frac{1-\\sin(5x) + 1+\\sin(5x)}{(1+\\sin(5x))(1-\\sin(5x))} \\right) \\\\
y' &= \\frac{5\\cos(5x)}{2} \\left( \\frac{2}{1-\\sin^2(5x)} \\right) \\\\
y' &= \\frac{5\\cos(5x)}{\\cos^2(5x)} = 5\\sec(5x)
\\end{aligned}`,
        finalAnswer: `y' = 5\\sec(5x)`
      },
      {
        id: 'trans-mixed-10',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = e^{3x} \\sin(5x) \\ln(x)`,
        method: 'Product Rule (Three terms) and Chain Rule',
        solution: `\\begin{aligned}
y' &= (e^{3x})' \\sin(5x) \\ln(x) + e^{3x} (\\sin(5x))' \\ln(x) + e^{3x} \\sin(5x) (\\ln(x))' \\\\
y' &= 3e^{3x} \\sin(5x) \\ln(x) + e^{3x} (5\\cos(5x)) \\ln(x) + e^{3x} \\sin(5x) \\frac{1}{x} \\\\
y' &= e^{3x} \\left( 3\\sin(5x)\\ln(x) + 5\\cos(5x)\\ln(x) + \\frac{\\sin(5x)}{x} \\right)
\\end{aligned}`,
        finalAnswer: `y' = e^{3x} \\left( 3\\sin(5x)\\ln(x) + 5\\cos(5x)\\ln(x) + \\frac{\\sin(5x)}{x} \\right)`
      },
      {
        id: 'trans-mixed-11',
        difficulty: 'Medium',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\frac{\\ln(3x^2 + 1)}{\\cos(4x)}`,
        method: 'Quotient Rule and Chain Rule',
        solution: `\\begin{aligned}
y' &= \\frac{\\cos(4x) \\cdot \\frac{6x}{3x^2 + 1} - \\ln(3x^2 + 1) \\cdot (-4\\sin(4x))}{\\cos^2(4x)} \\\\
y' &= \\frac{\\frac{6x\\cos(4x)}{3x^2 + 1} + 4\\sin(4x)\\ln(3x^2 + 1)}{\\cos^2(4x)}
\\end{aligned}`,
        finalAnswer: `y' = \\frac{\\frac{6x\\cos(4x)}{3x^2 + 1} + 4\\sin(4x)\\ln(3x^2 + 1)}{\\cos^2(4x)}`
      },
      {
        id: 'trans-mixed-12',
        difficulty: 'Medium',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\arcsin(e^{-3x})`,
        method: 'Chain Rule with Inverse Trigonometric and Exponential Functions',
        solution: `\\begin{aligned}
y' &= \\frac{1}{\\sqrt{1 - (e^{-3x})^2}} \\cdot \\frac{d}{dx}(e^{-3x}) \\\\
y' &= \\frac{1}{\\sqrt{1 - e^{-6x}}} \\cdot (-3e^{-3x}) \\\\
y' &= -\\frac{3e^{-3x}}{\\sqrt{1 - e^{-6x}}}
\\end{aligned}`,
        finalAnswer: `y' = -\\frac{3e^{-3x}}{\\sqrt{1 - e^{-6x}}}`
      },
      {
        id: 'trans-mixed-13',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\tan^3(2x) \\sec(4x)`,
        method: 'Product Rule and Chain Rule',
        solution: `\\begin{aligned}
y' &= (\\tan^3(2x))' \\sec(4x) + \\tan^3(2x) (\\sec(4x))' \\\\
y' &= 3\\tan^2(2x) \\cdot 2\\sec^2(2x) \\sec(4x) + \\tan^3(2x) \\cdot 4\\sec(4x)\\tan(4x) \\\\
y' &= 6\\tan^2(2x)\\sec^2(2x)\\sec(4x) + 4\\tan^3(2x)\\sec(4x)\\tan(4x)
\\end{aligned}`,
        finalAnswer: `y' = 6\\tan^2(2x)\\sec^2(2x)\\sec(4x) + 4\\tan^3(2x)\\sec(4x)\\tan(4x)`
      },
      {
        id: 'trans-mixed-14',
        difficulty: 'Medium',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\ln(\\sqrt{\\frac{1+\\sin(5x)}{1-\\sin(5x)}})`,
        method: 'Logarithmic Properties and Chain Rule',
        solution: `\\begin{aligned}
y &= \\frac{1}{2} \\left( \\ln(1+\\sin(5x)) - \\ln(1-\\sin(5x)) \\right) \\\\
y' &= \\frac{1}{2} \\left( \\frac{5\\cos(5x)}{1+\\sin(5x)} - \\frac{-5\\cos(5x)}{1-\\sin(5x)} \\right) \\\\
y' &= \\frac{5\\cos(5x)}{2} \\left( \\frac{1-\\sin(5x) + 1+\\sin(5x)}{(1+\\sin(5x))(1-\\sin(5x))} \\right) \\\\
y' &= \\frac{5\\cos(5x)}{2} \\left( \\frac{2}{1-\\sin^2(5x)} \\right) \\\\
y' &= \\frac{5\\cos(5x)}{\\cos^2(5x)} = 5\\sec(5x)
\\end{aligned}`,
        finalAnswer: `y' = 5\\sec(5x)`
      },
      {
        id: 'trans-mixed-15',
        difficulty: 'Medium',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = e^{5x} \\sin(6x) \\ln(x)`,
        method: 'Product Rule (Three terms) and Chain Rule',
        solution: `\\begin{aligned}
y' &= (e^{5x})' \\sin(6x) \\ln(x) + e^{5x} (\\sin(6x))' \\ln(x) + e^{5x} \\sin(6x) (\\ln(x))' \\\\
y' &= 5e^{5x} \\sin(6x) \\ln(x) + e^{5x} (6\\cos(6x)) \\ln(x) + e^{5x} \\sin(6x) \\frac{1}{x} \\\\
y' &= e^{5x} \\left( 5\\sin(6x)\\ln(x) + 6\\cos(6x)\\ln(x) + \\frac{\\sin(6x)}{x} \\right)
\\end{aligned}`,
        finalAnswer: `y' = e^{5x} \\left( 5\\sin(6x)\\ln(x) + 6\\cos(6x)\\ln(x) + \\frac{\\sin(6x)}{x} \\right)`
      },
      {
        id: 'trans-mixed-16',
        difficulty: 'Medium',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\frac{\\ln(2x^2 + 1)}{\\cos(4x)}`,
        method: 'Quotient Rule and Chain Rule',
        solution: `\\begin{aligned}
y' &= \\frac{\\cos(4x) \\cdot \\frac{4x}{2x^2 + 1} - \\ln(2x^2 + 1) \\cdot (-4\\sin(4x))}{\\cos^2(4x)} \\\\
y' &= \\frac{\\frac{4x\\cos(4x)}{2x^2 + 1} + 4\\sin(4x)\\ln(2x^2 + 1)}{\\cos^2(4x)}
\\end{aligned}`,
        finalAnswer: `y' = \\frac{\\frac{4x\\cos(4x)}{2x^2 + 1} + 4\\sin(4x)\\ln(2x^2 + 1)}{\\cos^2(4x)}`
      },
      {
        id: 'trans-mixed-17',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\arcsin(e^{-3x})`,
        method: 'Chain Rule with Inverse Trigonometric and Exponential Functions',
        solution: `\\begin{aligned}
y' &= \\frac{1}{\\sqrt{1 - (e^{-3x})^2}} \\cdot \\frac{d}{dx}(e^{-3x}) \\\\
y' &= \\frac{1}{\\sqrt{1 - e^{-6x}}} \\cdot (-3e^{-3x}) \\\\
y' &= -\\frac{3e^{-3x}}{\\sqrt{1 - e^{-6x}}}
\\end{aligned}`,
        finalAnswer: `y' = -\\frac{3e^{-3x}}{\\sqrt{1 - e^{-6x}}}`
      },
      {
        id: 'trans-mixed-18',
        difficulty: 'Easy',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\tan^3(6x) \\sec(4x)`,
        method: 'Product Rule and Chain Rule',
        solution: `\\begin{aligned}
y' &= (\\tan^3(6x))' \\sec(4x) + \\tan^3(6x) (\\sec(4x))' \\\\
y' &= 3\\tan^2(6x) \\cdot 6\\sec^2(6x) \\sec(4x) + \\tan^3(6x) \\cdot 4\\sec(4x)\\tan(4x) \\\\
y' &= 18\\tan^2(6x)\\sec^2(6x)\\sec(4x) + 4\\tan^3(6x)\\sec(4x)\\tan(4x)
\\end{aligned}`,
        finalAnswer: `y' = 18\\tan^2(6x)\\sec^2(6x)\\sec(4x) + 4\\tan^3(6x)\\sec(4x)\\tan(4x)`
      },
      {
        id: 'trans-mixed-19',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\ln(\\sqrt{\\frac{1+\\sin(5x)}{1-\\sin(5x)}})`,
        method: 'Logarithmic Properties and Chain Rule',
        solution: `\\begin{aligned}
y &= \\frac{1}{2} \\left( \\ln(1+\\sin(5x)) - \\ln(1-\\sin(5x)) \\right) \\\\
y' &= \\frac{1}{2} \\left( \\frac{5\\cos(5x)}{1+\\sin(5x)} - \\frac{-5\\cos(5x)}{1-\\sin(5x)} \\right) \\\\
y' &= \\frac{5\\cos(5x)}{2} \\left( \\frac{1-\\sin(5x) + 1+\\sin(5x)}{(1+\\sin(5x))(1-\\sin(5x))} \\right) \\\\
y' &= \\frac{5\\cos(5x)}{2} \\left( \\frac{2}{1-\\sin^2(5x)} \\right) \\\\
y' &= \\frac{5\\cos(5x)}{\\cos^2(5x)} = 5\\sec(5x)
\\end{aligned}`,
        finalAnswer: `y' = 5\\sec(5x)`
      },
      {
        id: 'trans-mixed-20',
        difficulty: 'Medium',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = e^{6x} \\sin(5x) \\ln(x)`,
        method: 'Product Rule (Three terms) and Chain Rule',
        solution: `\\begin{aligned}
y' &= (e^{6x})' \\sin(5x) \\ln(x) + e^{6x} (\\sin(5x))' \\ln(x) + e^{6x} \\sin(5x) (\\ln(x))' \\\\
y' &= 6e^{6x} \\sin(5x) \\ln(x) + e^{6x} (5\\cos(5x)) \\ln(x) + e^{6x} \\sin(5x) \\frac{1}{x} \\\\
y' &= e^{6x} \\left( 6\\sin(5x)\\ln(x) + 5\\cos(5x)\\ln(x) + \\frac{\\sin(5x)}{x} \\right)
\\end{aligned}`,
        finalAnswer: `y' = e^{6x} \\left( 6\\sin(5x)\\ln(x) + 5\\cos(5x)\\ln(x) + \\frac{\\sin(5x)}{x} \\right)`
      },
      {
        id: 'trans-mixed-21',
        difficulty: 'Medium',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\frac{\\ln(5x^2 + 1)}{\\cos(4x)}`,
        method: 'Quotient Rule and Chain Rule',
        solution: `\\begin{aligned}
y' &= \\frac{\\cos(4x) \\cdot \\frac{10x}{5x^2 + 1} - \\ln(5x^2 + 1) \\cdot (-4\\sin(4x))}{\\cos^2(4x)} \\\\
y' &= \\frac{\\frac{10x\\cos(4x)}{5x^2 + 1} + 4\\sin(4x)\\ln(5x^2 + 1)}{\\cos^2(4x)}
\\end{aligned}`,
        finalAnswer: `y' = \\frac{\\frac{10x\\cos(4x)}{5x^2 + 1} + 4\\sin(4x)\\ln(5x^2 + 1)}{\\cos^2(4x)}`
      },
      {
        id: 'trans-mixed-22',
        difficulty: 'Easy',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\arcsin(e^{-6x})`,
        method: 'Chain Rule with Inverse Trigonometric and Exponential Functions',
        solution: `\\begin{aligned}
y' &= \\frac{1}{\\sqrt{1 - (e^{-6x})^2}} \\cdot \\frac{d}{dx}(e^{-6x}) \\\\
y' &= \\frac{1}{\\sqrt{1 - e^{-12x}}} \\cdot (-6e^{-6x}) \\\\
y' &= -\\frac{6e^{-6x}}{\\sqrt{1 - e^{-12x}}}
\\end{aligned}`,
        finalAnswer: `y' = -\\frac{6e^{-6x}}{\\sqrt{1 - e^{-12x}}}`
      },
      {
        id: 'trans-mixed-23',
        difficulty: 'Easy',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\tan^3(2x) \\sec(3x)`,
        method: 'Product Rule and Chain Rule',
        solution: `\\begin{aligned}
y' &= (\\tan^3(2x))' \\sec(3x) + \\tan^3(2x) (\\sec(3x))' \\\\
y' &= 3\\tan^2(2x) \\cdot 2\\sec^2(2x) \\sec(3x) + \\tan^3(2x) \\cdot 3\\sec(3x)\\tan(3x) \\\\
y' &= 6\\tan^2(2x)\\sec^2(2x)\\sec(3x) + 3\\tan^3(2x)\\sec(3x)\\tan(3x)
\\end{aligned}`,
        finalAnswer: `y' = 6\\tan^2(2x)\\sec^2(2x)\\sec(3x) + 3\\tan^3(2x)\\sec(3x)\\tan(3x)`
      },
      {
        id: 'trans-mixed-24',
        difficulty: 'Easy',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\ln(\\sqrt{\\frac{1+\\sin(6x)}{1-\\sin(6x)}})`,
        method: 'Logarithmic Properties and Chain Rule',
        solution: `\\begin{aligned}
y &= \\frac{1}{2} \\left( \\ln(1+\\sin(6x)) - \\ln(1-\\sin(6x)) \\right) \\\\
y' &= \\frac{1}{2} \\left( \\frac{6\\cos(6x)}{1+\\sin(6x)} - \\frac{-6\\cos(6x)}{1-\\sin(6x)} \\right) \\\\
y' &= \\frac{6\\cos(6x)}{2} \\left( \\frac{1-\\sin(6x) + 1+\\sin(6x)}{(1+\\sin(6x))(1-\\sin(6x))} \\right) \\\\
y' &= \\frac{6\\cos(6x)}{2} \\left( \\frac{2}{1-\\sin^2(6x)} \\right) \\\\
y' &= \\frac{6\\cos(6x)}{\\cos^2(6x)} = 6\\sec(6x)
\\end{aligned}`,
        finalAnswer: `y' = 6\\sec(6x)`
      },
      {
        id: 'trans-mixed-25',
        difficulty: 'Easy',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = e^{3x} \\sin(5x) \\ln(x)`,
        method: 'Product Rule (Three terms) and Chain Rule',
        solution: `\\begin{aligned}
y' &= (e^{3x})' \\sin(5x) \\ln(x) + e^{3x} (\\sin(5x))' \\ln(x) + e^{3x} \\sin(5x) (\\ln(x))' \\\\
y' &= 3e^{3x} \\sin(5x) \\ln(x) + e^{3x} (5\\cos(5x)) \\ln(x) + e^{3x} \\sin(5x) \\frac{1}{x} \\\\
y' &= e^{3x} \\left( 3\\sin(5x)\\ln(x) + 5\\cos(5x)\\ln(x) + \\frac{\\sin(5x)}{x} \\right)
\\end{aligned}`,
        finalAnswer: `y' = e^{3x} \\left( 3\\sin(5x)\\ln(x) + 5\\cos(5x)\\ln(x) + \\frac{\\sin(5x)}{x} \\right)`
      },
      {
        id: 'trans-mixed-26',
        difficulty: 'Medium',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\frac{\\ln(5x^2 + 1)}{\\cos(3x)}`,
        method: 'Quotient Rule and Chain Rule',
        solution: `\\begin{aligned}
y' &= \\frac{\\cos(3x) \\cdot \\frac{10x}{5x^2 + 1} - \\ln(5x^2 + 1) \\cdot (-3\\sin(3x))}{\\cos^2(3x)} \\\\
y' &= \\frac{\\frac{10x\\cos(3x)}{5x^2 + 1} + 3\\sin(3x)\\ln(5x^2 + 1)}{\\cos^2(3x)}
\\end{aligned}`,
        finalAnswer: `y' = \\frac{\\frac{10x\\cos(3x)}{5x^2 + 1} + 3\\sin(3x)\\ln(5x^2 + 1)}{\\cos^2(3x)}`
      },
      {
        id: 'trans-mixed-27',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\arcsin(e^{-6x})`,
        method: 'Chain Rule with Inverse Trigonometric and Exponential Functions',
        solution: `\\begin{aligned}
y' &= \\frac{1}{\\sqrt{1 - (e^{-6x})^2}} \\cdot \\frac{d}{dx}(e^{-6x}) \\\\
y' &= \\frac{1}{\\sqrt{1 - e^{-12x}}} \\cdot (-6e^{-6x}) \\\\
y' &= -\\frac{6e^{-6x}}{\\sqrt{1 - e^{-12x}}}
\\end{aligned}`,
        finalAnswer: `y' = -\\frac{6e^{-6x}}{\\sqrt{1 - e^{-12x}}}`
      },
      {
        id: 'trans-mixed-28',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\tan^3(3x) \\sec(2x)`,
        method: 'Product Rule and Chain Rule',
        solution: `\\begin{aligned}
y' &= (\\tan^3(3x))' \\sec(2x) + \\tan^3(3x) (\\sec(2x))' \\\\
y' &= 3\\tan^2(3x) \\cdot 3\\sec^2(3x) \\sec(2x) + \\tan^3(3x) \\cdot 2\\sec(2x)\\tan(2x) \\\\
y' &= 9\\tan^2(3x)\\sec^2(3x)\\sec(2x) + 2\\tan^3(3x)\\sec(2x)\\tan(2x)
\\end{aligned}`,
        finalAnswer: `y' = 9\\tan^2(3x)\\sec^2(3x)\\sec(2x) + 2\\tan^3(3x)\\sec(2x)\\tan(2x)`
      },
      {
        id: 'trans-mixed-29',
        difficulty: 'Medium',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\ln(\\sqrt{\\frac{1+\\sin(5x)}{1-\\sin(5x)}})`,
        method: 'Logarithmic Properties and Chain Rule',
        solution: `\\begin{aligned}
y &= \\frac{1}{2} \\left( \\ln(1+\\sin(5x)) - \\ln(1-\\sin(5x)) \\right) \\\\
y' &= \\frac{1}{2} \\left( \\frac{5\\cos(5x)}{1+\\sin(5x)} - \\frac{-5\\cos(5x)}{1-\\sin(5x)} \\right) \\\\
y' &= \\frac{5\\cos(5x)}{2} \\left( \\frac{1-\\sin(5x) + 1+\\sin(5x)}{(1+\\sin(5x))(1-\\sin(5x))} \\right) \\\\
y' &= \\frac{5\\cos(5x)}{2} \\left( \\frac{2}{1-\\sin^2(5x)} \\right) \\\\
y' &= \\frac{5\\cos(5x)}{\\cos^2(5x)} = 5\\sec(5x)
\\end{aligned}`,
        finalAnswer: `y' = 5\\sec(5x)`
      },
      {
        id: 'trans-mixed-30',
        difficulty: 'Easy',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = e^{3x} \\sin(6x) \\ln(x)`,
        method: 'Product Rule (Three terms) and Chain Rule',
        solution: `\\begin{aligned}
y' &= (e^{3x})' \\sin(6x) \\ln(x) + e^{3x} (\\sin(6x))' \\ln(x) + e^{3x} \\sin(6x) (\\ln(x))' \\\\
y' &= 3e^{3x} \\sin(6x) \\ln(x) + e^{3x} (6\\cos(6x)) \\ln(x) + e^{3x} \\sin(6x) \\frac{1}{x} \\\\
y' &= e^{3x} \\left( 3\\sin(6x)\\ln(x) + 6\\cos(6x)\\ln(x) + \\frac{\\sin(6x)}{x} \\right)
\\end{aligned}`,
        finalAnswer: `y' = e^{3x} \\left( 3\\sin(6x)\\ln(x) + 6\\cos(6x)\\ln(x) + \\frac{\\sin(6x)}{x} \\right)`
      },
      {
        id: 'trans-mixed-31',
        difficulty: 'Easy',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\frac{\\ln(4x^2 + 1)}{\\cos(2x)}`,
        method: 'Quotient Rule and Chain Rule',
        solution: `\\begin{aligned}
y' &= \\frac{\\cos(2x) \\cdot \\frac{8x}{4x^2 + 1} - \\ln(4x^2 + 1) \\cdot (-2\\sin(2x))}{\\cos^2(2x)} \\\\
y' &= \\frac{\\frac{8x\\cos(2x)}{4x^2 + 1} + 2\\sin(2x)\\ln(4x^2 + 1)}{\\cos^2(2x)}
\\end{aligned}`,
        finalAnswer: `y' = \\frac{\\frac{8x\\cos(2x)}{4x^2 + 1} + 2\\sin(2x)\\ln(4x^2 + 1)}{\\cos^2(2x)}`
      },
      {
        id: 'trans-mixed-32',
        difficulty: 'Medium',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\arcsin(e^{-2x})`,
        method: 'Chain Rule with Inverse Trigonometric and Exponential Functions',
        solution: `\\begin{aligned}
y' &= \\frac{1}{\\sqrt{1 - (e^{-2x})^2}} \\cdot \\frac{d}{dx}(e^{-2x}) \\\\
y' &= \\frac{1}{\\sqrt{1 - e^{-4x}}} \\cdot (-2e^{-2x}) \\\\
y' &= -\\frac{2e^{-2x}}{\\sqrt{1 - e^{-4x}}}
\\end{aligned}`,
        finalAnswer: `y' = -\\frac{2e^{-2x}}{\\sqrt{1 - e^{-4x}}}`
      },
      {
        id: 'trans-mixed-33',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\tan^3(5x) \\sec(4x)`,
        method: 'Product Rule and Chain Rule',
        solution: `\\begin{aligned}
y' &= (\\tan^3(5x))' \\sec(4x) + \\tan^3(5x) (\\sec(4x))' \\\\
y' &= 3\\tan^2(5x) \\cdot 5\\sec^2(5x) \\sec(4x) + \\tan^3(5x) \\cdot 4\\sec(4x)\\tan(4x) \\\\
y' &= 15\\tan^2(5x)\\sec^2(5x)\\sec(4x) + 4\\tan^3(5x)\\sec(4x)\\tan(4x)
\\end{aligned}`,
        finalAnswer: `y' = 15\\tan^2(5x)\\sec^2(5x)\\sec(4x) + 4\\tan^3(5x)\\sec(4x)\\tan(4x)`
      },
      {
        id: 'trans-mixed-34',
        difficulty: 'Easy',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\ln(\\sqrt{\\frac{1+\\sin(4x)}{1-\\sin(4x)}})`,
        method: 'Logarithmic Properties and Chain Rule',
        solution: `\\begin{aligned}
y &= \\frac{1}{2} \\left( \\ln(1+\\sin(4x)) - \\ln(1-\\sin(4x)) \\right) \\\\
y' &= \\frac{1}{2} \\left( \\frac{4\\cos(4x)}{1+\\sin(4x)} - \\frac{-4\\cos(4x)}{1-\\sin(4x)} \\right) \\\\
y' &= \\frac{4\\cos(4x)}{2} \\left( \\frac{1-\\sin(4x) + 1+\\sin(4x)}{(1+\\sin(4x))(1-\\sin(4x))} \\right) \\\\
y' &= \\frac{4\\cos(4x)}{2} \\left( \\frac{2}{1-\\sin^2(4x)} \\right) \\\\
y' &= \\frac{4\\cos(4x)}{\\cos^2(4x)} = 4\\sec(4x)
\\end{aligned}`,
        finalAnswer: `y' = 4\\sec(4x)`
      },
      {
        id: 'trans-mixed-35',
        difficulty: 'Easy',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = e^{5x} \\sin(3x) \\ln(x)`,
        method: 'Product Rule (Three terms) and Chain Rule',
        solution: `\\begin{aligned}
y' &= (e^{5x})' \\sin(3x) \\ln(x) + e^{5x} (\\sin(3x))' \\ln(x) + e^{5x} \\sin(3x) (\\ln(x))' \\\\
y' &= 5e^{5x} \\sin(3x) \\ln(x) + e^{5x} (3\\cos(3x)) \\ln(x) + e^{5x} \\sin(3x) \\frac{1}{x} \\\\
y' &= e^{5x} \\left( 5\\sin(3x)\\ln(x) + 3\\cos(3x)\\ln(x) + \\frac{\\sin(3x)}{x} \\right)
\\end{aligned}`,
        finalAnswer: `y' = e^{5x} \\left( 5\\sin(3x)\\ln(x) + 3\\cos(3x)\\ln(x) + \\frac{\\sin(3x)}{x} \\right)`
      },
      {
        id: 'trans-mixed-36',
        difficulty: 'Easy',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\frac{\\ln(6x^2 + 1)}{\\cos(5x)}`,
        method: 'Quotient Rule and Chain Rule',
        solution: `\\begin{aligned}
y' &= \\frac{\\cos(5x) \\cdot \\frac{12x}{6x^2 + 1} - \\ln(6x^2 + 1) \\cdot (-5\\sin(5x))}{\\cos^2(5x)} \\\\
y' &= \\frac{\\frac{12x\\cos(5x)}{6x^2 + 1} + 5\\sin(5x)\\ln(6x^2 + 1)}{\\cos^2(5x)}
\\end{aligned}`,
        finalAnswer: `y' = \\frac{\\frac{12x\\cos(5x)}{6x^2 + 1} + 5\\sin(5x)\\ln(6x^2 + 1)}{\\cos^2(5x)}`
      },
      {
        id: 'trans-mixed-37',
        difficulty: 'Medium',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\arcsin(e^{-4x})`,
        method: 'Chain Rule with Inverse Trigonometric and Exponential Functions',
        solution: `\\begin{aligned}
y' &= \\frac{1}{\\sqrt{1 - (e^{-4x})^2}} \\cdot \\frac{d}{dx}(e^{-4x}) \\\\
y' &= \\frac{1}{\\sqrt{1 - e^{-8x}}} \\cdot (-4e^{-4x}) \\\\
y' &= -\\frac{4e^{-4x}}{\\sqrt{1 - e^{-8x}}}
\\end{aligned}`,
        finalAnswer: `y' = -\\frac{4e^{-4x}}{\\sqrt{1 - e^{-8x}}}`
      },
      {
        id: 'trans-mixed-38',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\tan^3(6x) \\sec(6x)`,
        method: 'Product Rule and Chain Rule',
        solution: `\\begin{aligned}
y' &= (\\tan^3(6x))' \\sec(6x) + \\tan^3(6x) (\\sec(6x))' \\\\
y' &= 3\\tan^2(6x) \\cdot 6\\sec^2(6x) \\sec(6x) + \\tan^3(6x) \\cdot 6\\sec(6x)\\tan(6x) \\\\
y' &= 18\\tan^2(6x)\\sec^2(6x)\\sec(6x) + 6\\tan^3(6x)\\sec(6x)\\tan(6x)
\\end{aligned}`,
        finalAnswer: `y' = 18\\tan^2(6x)\\sec^2(6x)\\sec(6x) + 6\\tan^3(6x)\\sec(6x)\\tan(6x)`
      },
      {
        id: 'trans-mixed-39',
        difficulty: 'Easy',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\ln(\\sqrt{\\frac{1+\\sin(4x)}{1-\\sin(4x)}})`,
        method: 'Logarithmic Properties and Chain Rule',
        solution: `\\begin{aligned}
y &= \\frac{1}{2} \\left( \\ln(1+\\sin(4x)) - \\ln(1-\\sin(4x)) \\right) \\\\
y' &= \\frac{1}{2} \\left( \\frac{4\\cos(4x)}{1+\\sin(4x)} - \\frac{-4\\cos(4x)}{1-\\sin(4x)} \\right) \\\\
y' &= \\frac{4\\cos(4x)}{2} \\left( \\frac{1-\\sin(4x) + 1+\\sin(4x)}{(1+\\sin(4x))(1-\\sin(4x))} \\right) \\\\
y' &= \\frac{4\\cos(4x)}{2} \\left( \\frac{2}{1-\\sin^2(4x)} \\right) \\\\
y' &= \\frac{4\\cos(4x)}{\\cos^2(4x)} = 4\\sec(4x)
\\end{aligned}`,
        finalAnswer: `y' = 4\\sec(4x)`
      },
      {
        id: 'trans-mixed-40',
        difficulty: 'Medium',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = e^{5x} \\sin(4x) \\ln(x)`,
        method: 'Product Rule (Three terms) and Chain Rule',
        solution: `\\begin{aligned}
y' &= (e^{5x})' \\sin(4x) \\ln(x) + e^{5x} (\\sin(4x))' \\ln(x) + e^{5x} \\sin(4x) (\\ln(x))' \\\\
y' &= 5e^{5x} \\sin(4x) \\ln(x) + e^{5x} (4\\cos(4x)) \\ln(x) + e^{5x} \\sin(4x) \\frac{1}{x} \\\\
y' &= e^{5x} \\left( 5\\sin(4x)\\ln(x) + 4\\cos(4x)\\ln(x) + \\frac{\\sin(4x)}{x} \\right)
\\end{aligned}`,
        finalAnswer: `y' = e^{5x} \\left( 5\\sin(4x)\\ln(x) + 4\\cos(4x)\\ln(x) + \\frac{\\sin(4x)}{x} \\right)`
      },
      {
        id: 'trans-mixed-41',
        difficulty: 'Medium',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\frac{\\ln(4x^2 + 1)}{\\cos(4x)}`,
        method: 'Quotient Rule and Chain Rule',
        solution: `\\begin{aligned}
y' &= \\frac{\\cos(4x) \\cdot \\frac{8x}{4x^2 + 1} - \\ln(4x^2 + 1) \\cdot (-4\\sin(4x))}{\\cos^2(4x)} \\\\
y' &= \\frac{\\frac{8x\\cos(4x)}{4x^2 + 1} + 4\\sin(4x)\\ln(4x^2 + 1)}{\\cos^2(4x)}
\\end{aligned}`,
        finalAnswer: `y' = \\frac{\\frac{8x\\cos(4x)}{4x^2 + 1} + 4\\sin(4x)\\ln(4x^2 + 1)}{\\cos^2(4x)}`
      },
      {
        id: 'trans-mixed-42',
        difficulty: 'Medium',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\arcsin(e^{-6x})`,
        method: 'Chain Rule with Inverse Trigonometric and Exponential Functions',
        solution: `\\begin{aligned}
y' &= \\frac{1}{\\sqrt{1 - (e^{-6x})^2}} \\cdot \\frac{d}{dx}(e^{-6x}) \\\\
y' &= \\frac{1}{\\sqrt{1 - e^{-12x}}} \\cdot (-6e^{-6x}) \\\\
y' &= -\\frac{6e^{-6x}}{\\sqrt{1 - e^{-12x}}}
\\end{aligned}`,
        finalAnswer: `y' = -\\frac{6e^{-6x}}{\\sqrt{1 - e^{-12x}}}`
      },
      {
        id: 'trans-mixed-43',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\tan^3(2x) \\sec(3x)`,
        method: 'Product Rule and Chain Rule',
        solution: `\\begin{aligned}
y' &= (\\tan^3(2x))' \\sec(3x) + \\tan^3(2x) (\\sec(3x))' \\\\
y' &= 3\\tan^2(2x) \\cdot 2\\sec^2(2x) \\sec(3x) + \\tan^3(2x) \\cdot 3\\sec(3x)\\tan(3x) \\\\
y' &= 6\\tan^2(2x)\\sec^2(2x)\\sec(3x) + 3\\tan^3(2x)\\sec(3x)\\tan(3x)
\\end{aligned}`,
        finalAnswer: `y' = 6\\tan^2(2x)\\sec^2(2x)\\sec(3x) + 3\\tan^3(2x)\\sec(3x)\\tan(3x)`
      },
      {
        id: 'trans-mixed-44',
        difficulty: 'Medium',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\ln(\\sqrt{\\frac{1+\\sin(2x)}{1-\\sin(2x)}})`,
        method: 'Logarithmic Properties and Chain Rule',
        solution: `\\begin{aligned}
y &= \\frac{1}{2} \\left( \\ln(1+\\sin(2x)) - \\ln(1-\\sin(2x)) \\right) \\\\
y' &= \\frac{1}{2} \\left( \\frac{2\\cos(2x)}{1+\\sin(2x)} - \\frac{-2\\cos(2x)}{1-\\sin(2x)} \\right) \\\\
y' &= \\frac{2\\cos(2x)}{2} \\left( \\frac{1-\\sin(2x) + 1+\\sin(2x)}{(1+\\sin(2x))(1-\\sin(2x))} \\right) \\\\
y' &= \\frac{2\\cos(2x)}{2} \\left( \\frac{2}{1-\\sin^2(2x)} \\right) \\\\
y' &= \\frac{2\\cos(2x)}{\\cos^2(2x)} = 2\\sec(2x)
\\end{aligned}`,
        finalAnswer: `y' = 2\\sec(2x)`
      },
      {
        id: 'trans-mixed-45',
        difficulty: 'Medium',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = e^{6x} \\sin(2x) \\ln(x)`,
        method: 'Product Rule (Three terms) and Chain Rule',
        solution: `\\begin{aligned}
y' &= (e^{6x})' \\sin(2x) \\ln(x) + e^{6x} (\\sin(2x))' \\ln(x) + e^{6x} \\sin(2x) (\\ln(x))' \\\\
y' &= 6e^{6x} \\sin(2x) \\ln(x) + e^{6x} (2\\cos(2x)) \\ln(x) + e^{6x} \\sin(2x) \\frac{1}{x} \\\\
y' &= e^{6x} \\left( 6\\sin(2x)\\ln(x) + 2\\cos(2x)\\ln(x) + \\frac{\\sin(2x)}{x} \\right)
\\end{aligned}`,
        finalAnswer: `y' = e^{6x} \\left( 6\\sin(2x)\\ln(x) + 2\\cos(2x)\\ln(x) + \\frac{\\sin(2x)}{x} \\right)`
      },
      {
        id: 'trans-mixed-46',
        difficulty: 'Medium',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\frac{\\ln(2x^2 + 1)}{\\cos(4x)}`,
        method: 'Quotient Rule and Chain Rule',
        solution: `\\begin{aligned}
y' &= \\frac{\\cos(4x) \\cdot \\frac{4x}{2x^2 + 1} - \\ln(2x^2 + 1) \\cdot (-4\\sin(4x))}{\\cos^2(4x)} \\\\
y' &= \\frac{\\frac{4x\\cos(4x)}{2x^2 + 1} + 4\\sin(4x)\\ln(2x^2 + 1)}{\\cos^2(4x)}
\\end{aligned}`,
        finalAnswer: `y' = \\frac{\\frac{4x\\cos(4x)}{2x^2 + 1} + 4\\sin(4x)\\ln(2x^2 + 1)}{\\cos^2(4x)}`
      },
      {
        id: 'trans-mixed-47',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\arcsin(e^{-2x})`,
        method: 'Chain Rule with Inverse Trigonometric and Exponential Functions',
        solution: `\\begin{aligned}
y' &= \\frac{1}{\\sqrt{1 - (e^{-2x})^2}} \\cdot \\frac{d}{dx}(e^{-2x}) \\\\
y' &= \\frac{1}{\\sqrt{1 - e^{-4x}}} \\cdot (-2e^{-2x}) \\\\
y' &= -\\frac{2e^{-2x}}{\\sqrt{1 - e^{-4x}}}
\\end{aligned}`,
        finalAnswer: `y' = -\\frac{2e^{-2x}}{\\sqrt{1 - e^{-4x}}}`
      },
      {
        id: 'trans-mixed-48',
        difficulty: 'Easy',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\tan^3(4x) \\sec(4x)`,
        method: 'Product Rule and Chain Rule',
        solution: `\\begin{aligned}
y' &= (\\tan^3(4x))' \\sec(4x) + \\tan^3(4x) (\\sec(4x))' \\\\
y' &= 3\\tan^2(4x) \\cdot 4\\sec^2(4x) \\sec(4x) + \\tan^3(4x) \\cdot 4\\sec(4x)\\tan(4x) \\\\
y' &= 12\\tan^2(4x)\\sec^2(4x)\\sec(4x) + 4\\tan^3(4x)\\sec(4x)\\tan(4x)
\\end{aligned}`,
        finalAnswer: `y' = 12\\tan^2(4x)\\sec^2(4x)\\sec(4x) + 4\\tan^3(4x)\\sec(4x)\\tan(4x)`
      },
      {
        id: 'trans-mixed-49',
        difficulty: 'Medium',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\ln(\\sqrt{\\frac{1+\\sin(3x)}{1-\\sin(3x)}})`,
        method: 'Logarithmic Properties and Chain Rule',
        solution: `\\begin{aligned}
y &= \\frac{1}{2} \\left( \\ln(1+\\sin(3x)) - \\ln(1-\\sin(3x)) \\right) \\\\
y' &= \\frac{1}{2} \\left( \\frac{3\\cos(3x)}{1+\\sin(3x)} - \\frac{-3\\cos(3x)}{1-\\sin(3x)} \\right) \\\\
y' &= \\frac{3\\cos(3x)}{2} \\left( \\frac{1-\\sin(3x) + 1+\\sin(3x)}{(1+\\sin(3x))(1-\\sin(3x))} \\right) \\\\
y' &= \\frac{3\\cos(3x)}{2} \\left( \\frac{2}{1-\\sin^2(3x)} \\right) \\\\
y' &= \\frac{3\\cos(3x)}{\\cos^2(3x)} = 3\\sec(3x)
\\end{aligned}`,
        finalAnswer: `y' = 3\\sec(3x)`
      },
      {
        id: 'trans-mixed-50',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = e^{5x} \\sin(2x) \\ln(x)`,
        method: 'Product Rule (Three terms) and Chain Rule',
        solution: `\\begin{aligned}
y' &= (e^{5x})' \\sin(2x) \\ln(x) + e^{5x} (\\sin(2x))' \\ln(x) + e^{5x} \\sin(2x) (\\ln(x))' \\\\
y' &= 5e^{5x} \\sin(2x) \\ln(x) + e^{5x} (2\\cos(2x)) \\ln(x) + e^{5x} \\sin(2x) \\frac{1}{x} \\\\
y' &= e^{5x} \\left( 5\\sin(2x)\\ln(x) + 2\\cos(2x)\\ln(x) + \\frac{\\sin(2x)}{x} \\right)
\\end{aligned}`,
        finalAnswer: `y' = e^{5x} \\left( 5\\sin(2x)\\ln(x) + 2\\cos(2x)\\ln(x) + \\frac{\\sin(2x)}{x} \\right)`
      },
      {
        id: 'trans-tansum-1',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad \\tan(x + y) = 5x`,
        method: 'Implicit Differentiation and Tangent Sum Identity',
        solution: `\\begin{aligned}
\\text{Differentiating both sides with respect to } x: \\\\
\\sec^2(x + y) \\cdot \\left(1 + \\frac{dy}{dx}\\right) &= 5 \\\\
1 + \\frac{dy}{dx} &= \\frac{5}{\\sec^2(x + y)} \\\\
\\frac{dy}{dx} &= 5\\cos^2(x + y) - 1 \\\\
\\text{Alternatively, using } \\tan(x+y) = \\frac{\\tan x + \\tan y}{1 - \\tan x \\tan y} = 5x \\\\
\\text{We can differentiate implicitly from the identity, but the direct chain rule is more elegant.}
\\end{aligned}`,
        finalAnswer: `\\frac{dy}{dx} = 5\\cos^2(x + y) - 1`
      },
      {
        id: 'trans-tansum-2',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\frac{\\tan(3x) + \\tan(4x)}{1 - \\tan(3x)\\tan(4x)}`,
        method: 'Tangent Sum Identity and Chain Rule',
        solution: `\\begin{aligned}
\\text{Recognize the Tangent Sum Identity: } \\frac{\\tan A + \\tan B}{1 - \\tan A \\tan B} = \\tan(A + B) \\\\
y &= \\tan(3x + 4x) \\\\
y &= \\tan(7x) \\\\
y' &= \\sec^2(7x) \\cdot 7 \\\\
y' &= 7\\sec^2(7x)
\\end{aligned}`,
        finalAnswer: `y' = 7\\sec^2(7x)`
      },
      {
        id: 'trans-tansum-3',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\tan(2x + 2x^2)`,
        method: 'Chain Rule and Tangent Sum Identity',
        solution: `\\begin{aligned}
\\text{Using the chain rule directly:} \\\\
y' &= \\sec^2(2x + 2x^2) \\cdot \\frac{d}{dx}(2x + 2x^2) \\\\
y' &= (2 + 4x) \\sec^2(2x + 2x^2) \\\\
\\text{Alternatively, using the tangent sum identity: } \\tan(A+B) = \\frac{\\tan A + \\tan B}{1 - \\tan A \\tan B} \\\\
y &= \\frac{\\tan(2x) + \\tan(2x^2)}{1 - \\tan(2x)\\tan(2x^2)} \\\\
\\text{Differentiating this using the quotient rule yields the same result.}
\\end{aligned}`,
        finalAnswer: `y' = (2 + 4x) \\sec^2(2x + 2x^2)`
      },
      {
        id: 'trans-tansum-4',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad \\tan(x + y) = 4x`,
        method: 'Implicit Differentiation and Tangent Sum Identity',
        solution: `\\begin{aligned}
\\text{Differentiating both sides with respect to } x: \\\\
\\sec^2(x + y) \\cdot \\left(1 + \\frac{dy}{dx}\\right) &= 4 \\\\
1 + \\frac{dy}{dx} &= \\frac{4}{\\sec^2(x + y)} \\\\
\\frac{dy}{dx} &= 4\\cos^2(x + y) - 1 \\\\
\\text{Alternatively, using } \\tan(x+y) = \\frac{\\tan x + \\tan y}{1 - \\tan x \\tan y} = 4x \\\\
\\text{We can differentiate implicitly from the identity, but the direct chain rule is more elegant.}
\\end{aligned}`,
        finalAnswer: `\\frac{dy}{dx} = 4\\cos^2(x + y) - 1`
      },
      {
        id: 'trans-tansum-5',
        difficulty: 'Medium',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\frac{\\tan(3x) + \\tan(2x)}{1 - \\tan(3x)\\tan(2x)}`,
        method: 'Tangent Sum Identity and Chain Rule',
        solution: `\\begin{aligned}
\\text{Recognize the Tangent Sum Identity: } \\frac{\\tan A + \\tan B}{1 - \\tan A \\tan B} = \\tan(A + B) \\\\
y &= \\tan(3x + 2x) \\\\
y &= \\tan(5x) \\\\
y' &= \\sec^2(5x) \\cdot 5 \\\\
y' &= 5\\sec^2(5x)
\\end{aligned}`,
        finalAnswer: `y' = 5\\sec^2(5x)`
      },
      {
        id: 'trans-tansum-6',
        difficulty: 'Medium',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\tan(4x + 3x^2)`,
        method: 'Chain Rule and Tangent Sum Identity',
        solution: `\\begin{aligned}
\\text{Using the chain rule directly:} \\\\
y' &= \\sec^2(4x + 3x^2) \\cdot \\frac{d}{dx}(4x + 3x^2) \\\\
y' &= (4 + 6x) \\sec^2(4x + 3x^2) \\\\
\\text{Alternatively, using the tangent sum identity: } \\tan(A+B) = \\frac{\\tan A + \\tan B}{1 - \\tan A \\tan B} \\\\
y &= \\frac{\\tan(4x) + \\tan(3x^2)}{1 - \\tan(4x)\\tan(3x^2)} \\\\
\\text{Differentiating this using the quotient rule yields the same result.}
\\end{aligned}`,
        finalAnswer: `y' = (4 + 6x) \\sec^2(4x + 3x^2)`
      },
      {
        id: 'trans-tansum-7',
        difficulty: 'Medium',
        type: 'free-response',
        statement: `Find the derivative of: \\quad \\tan(x + y) = 3x`,
        method: 'Implicit Differentiation and Tangent Sum Identity',
        solution: `\\begin{aligned}
\\text{Differentiating both sides with respect to } x: \\\\
\\sec^2(x + y) \\cdot \\left(1 + \\frac{dy}{dx}\\right) &= 3 \\\\
1 + \\frac{dy}{dx} &= \\frac{3}{\\sec^2(x + y)} \\\\
\\frac{dy}{dx} &= 3\\cos^2(x + y) - 1 \\\\
\\text{Alternatively, using } \\tan(x+y) = \\frac{\\tan x + \\tan y}{1 - \\tan x \\tan y} = 3x \\\\
\\text{We can differentiate implicitly from the identity, but the direct chain rule is more elegant.}
\\end{aligned}`,
        finalAnswer: `\\frac{dy}{dx} = 3\\cos^2(x + y) - 1`
      },
      {
        id: 'trans-tansum-8',
        difficulty: 'Medium',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\frac{\\tan(2x) + \\tan(3x)}{1 - \\tan(2x)\\tan(3x)}`,
        method: 'Tangent Sum Identity and Chain Rule',
        solution: `\\begin{aligned}
\\text{Recognize the Tangent Sum Identity: } \\frac{\\tan A + \\tan B}{1 - \\tan A \\tan B} = \\tan(A + B) \\\\
y &= \\tan(2x + 3x) \\\\
y &= \\tan(5x) \\\\
y' &= \\sec^2(5x) \\cdot 5 \\\\
y' &= 5\\sec^2(5x)
\\end{aligned}`,
        finalAnswer: `y' = 5\\sec^2(5x)`
      },
      {
        id: 'trans-tansum-9',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\tan(3x + 2x^2)`,
        method: 'Chain Rule and Tangent Sum Identity',
        solution: `\\begin{aligned}
\\text{Using the chain rule directly:} \\\\
y' &= \\sec^2(3x + 2x^2) \\cdot \\frac{d}{dx}(3x + 2x^2) \\\\
y' &= (3 + 4x) \\sec^2(3x + 2x^2) \\\\
\\text{Alternatively, using the tangent sum identity: } \\tan(A+B) = \\frac{\\tan A + \\tan B}{1 - \\tan A \\tan B} \\\\
y &= \\frac{\\tan(3x) + \\tan(2x^2)}{1 - \\tan(3x)\\tan(2x^2)} \\\\
\\text{Differentiating this using the quotient rule yields the same result.}
\\end{aligned}`,
        finalAnswer: `y' = (3 + 4x) \\sec^2(3x + 2x^2)`
      },
      {
        id: 'trans-tansum-10',
        difficulty: 'Medium',
        type: 'free-response',
        statement: `Find the derivative of: \\quad \\tan(x + y) = 5x`,
        method: 'Implicit Differentiation and Tangent Sum Identity',
        solution: `\\begin{aligned}
\\text{Differentiating both sides with respect to } x: \\\\
\\sec^2(x + y) \\cdot \\left(1 + \\frac{dy}{dx}\\right) &= 5 \\\\
1 + \\frac{dy}{dx} &= \\frac{5}{\\sec^2(x + y)} \\\\
\\frac{dy}{dx} &= 5\\cos^2(x + y) - 1 \\\\
\\text{Alternatively, using } \\tan(x+y) = \\frac{\\tan x + \\tan y}{1 - \\tan x \\tan y} = 5x \\\\
\\text{We can differentiate implicitly from the identity, but the direct chain rule is more elegant.}
\\end{aligned}`,
        finalAnswer: `\\frac{dy}{dx} = 5\\cos^2(x + y) - 1`
      },
      {
        id: 'trans-tansum-11',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\frac{\\tan(3x) + \\tan(2x)}{1 - \\tan(3x)\\tan(2x)}`,
        method: 'Tangent Sum Identity and Chain Rule',
        solution: `\\begin{aligned}
\\text{Recognize the Tangent Sum Identity: } \\frac{\\tan A + \\tan B}{1 - \\tan A \\tan B} = \\tan(A + B) \\\\
y &= \\tan(3x + 2x) \\\\
y &= \\tan(5x) \\\\
y' &= \\sec^2(5x) \\cdot 5 \\\\
y' &= 5\\sec^2(5x)
\\end{aligned}`,
        finalAnswer: `y' = 5\\sec^2(5x)`
      },
      {
        id: 'trans-tansum-12',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\tan(2x + 5x^2)`,
        method: 'Chain Rule and Tangent Sum Identity',
        solution: `\\begin{aligned}
\\text{Using the chain rule directly:} \\\\
y' &= \\sec^2(2x + 5x^2) \\cdot \\frac{d}{dx}(2x + 5x^2) \\\\
y' &= (2 + 10x) \\sec^2(2x + 5x^2) \\\\
\\text{Alternatively, using the tangent sum identity: } \\tan(A+B) = \\frac{\\tan A + \\tan B}{1 - \\tan A \\tan B} \\\\
y &= \\frac{\\tan(2x) + \\tan(5x^2)}{1 - \\tan(2x)\\tan(5x^2)} \\\\
\\text{Differentiating this using the quotient rule yields the same result.}
\\end{aligned}`,
        finalAnswer: `y' = (2 + 10x) \\sec^2(2x + 5x^2)`
      },
      {
        id: 'trans-tansum-13',
        difficulty: 'Medium',
        type: 'free-response',
        statement: `Find the derivative of: \\quad \\tan(x + y) = 2x`,
        method: 'Implicit Differentiation and Tangent Sum Identity',
        solution: `\\begin{aligned}
\\text{Differentiating both sides with respect to } x: \\\\
\\sec^2(x + y) \\cdot \\left(1 + \\frac{dy}{dx}\\right) &= 2 \\\\
1 + \\frac{dy}{dx} &= \\frac{2}{\\sec^2(x + y)} \\\\
\\frac{dy}{dx} &= 2\\cos^2(x + y) - 1 \\\\
\\text{Alternatively, using } \\tan(x+y) = \\frac{\\tan x + \\tan y}{1 - \\tan x \\tan y} = 2x \\\\
\\text{We can differentiate implicitly from the identity, but the direct chain rule is more elegant.}
\\end{aligned}`,
        finalAnswer: `\\frac{dy}{dx} = 2\\cos^2(x + y) - 1`
      },
      {
        id: 'trans-tansum-14',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\frac{\\tan(2x) + \\tan(4x)}{1 - \\tan(2x)\\tan(4x)}`,
        method: 'Tangent Sum Identity and Chain Rule',
        solution: `\\begin{aligned}
\\text{Recognize the Tangent Sum Identity: } \\frac{\\tan A + \\tan B}{1 - \\tan A \\tan B} = \\tan(A + B) \\\\
y &= \\tan(2x + 4x) \\\\
y &= \\tan(6x) \\\\
y' &= \\sec^2(6x) \\cdot 6 \\\\
y' &= 6\\sec^2(6x)
\\end{aligned}`,
        finalAnswer: `y' = 6\\sec^2(6x)`
      },
      {
        id: 'trans-tansum-15',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\tan(4x + 4x^2)`,
        method: 'Chain Rule and Tangent Sum Identity',
        solution: `\\begin{aligned}
\\text{Using the chain rule directly:} \\\\
y' &= \\sec^2(4x + 4x^2) \\cdot \\frac{d}{dx}(4x + 4x^2) \\\\
y' &= (4 + 8x) \\sec^2(4x + 4x^2) \\\\
\\text{Alternatively, using the tangent sum identity: } \\tan(A+B) = \\frac{\\tan A + \\tan B}{1 - \\tan A \\tan B} \\\\
y &= \\frac{\\tan(4x) + \\tan(4x^2)}{1 - \\tan(4x)\\tan(4x^2)} \\\\
\\text{Differentiating this using the quotient rule yields the same result.}
\\end{aligned}`,
        finalAnswer: `y' = (4 + 8x) \\sec^2(4x + 4x^2)`
      },
      {
        id: 'trans-tansum-16',
        difficulty: 'Medium',
        type: 'free-response',
        statement: `Find the derivative of: \\quad \\tan(x + y) = 2x`,
        method: 'Implicit Differentiation and Tangent Sum Identity',
        solution: `\\begin{aligned}
\\text{Differentiating both sides with respect to } x: \\\\
\\sec^2(x + y) \\cdot \\left(1 + \\frac{dy}{dx}\\right) &= 2 \\\\
1 + \\frac{dy}{dx} &= \\frac{2}{\\sec^2(x + y)} \\\\
\\frac{dy}{dx} &= 2\\cos^2(x + y) - 1 \\\\
\\text{Alternatively, using } \\tan(x+y) = \\frac{\\tan x + \\tan y}{1 - \\tan x \\tan y} = 2x \\\\
\\text{We can differentiate implicitly from the identity, but the direct chain rule is more elegant.}
\\end{aligned}`,
        finalAnswer: `\\frac{dy}{dx} = 2\\cos^2(x + y) - 1`
      },
      {
        id: 'trans-tansum-17',
        difficulty: 'Medium',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\frac{\\tan(5x) + \\tan(5x)}{1 - \\tan(5x)\\tan(5x)}`,
        method: 'Tangent Sum Identity and Chain Rule',
        solution: `\\begin{aligned}
\\text{Recognize the Tangent Sum Identity: } \\frac{\\tan A + \\tan B}{1 - \\tan A \\tan B} = \\tan(A + B) \\\\
y &= \\tan(5x + 5x) \\\\
y &= \\tan(10x) \\\\
y' &= \\sec^2(10x) \\cdot 10 \\\\
y' &= 10\\sec^2(10x)
\\end{aligned}`,
        finalAnswer: `y' = 10\\sec^2(10x)`
      },
      {
        id: 'trans-tansum-18',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\tan(4x + 3x^2)`,
        method: 'Chain Rule and Tangent Sum Identity',
        solution: `\\begin{aligned}
\\text{Using the chain rule directly:} \\\\
y' &= \\sec^2(4x + 3x^2) \\cdot \\frac{d}{dx}(4x + 3x^2) \\\\
y' &= (4 + 6x) \\sec^2(4x + 3x^2) \\\\
\\text{Alternatively, using the tangent sum identity: } \\tan(A+B) = \\frac{\\tan A + \\tan B}{1 - \\tan A \\tan B} \\\\
y &= \\frac{\\tan(4x) + \\tan(3x^2)}{1 - \\tan(4x)\\tan(3x^2)} \\\\
\\text{Differentiating this using the quotient rule yields the same result.}
\\end{aligned}`,
        finalAnswer: `y' = (4 + 6x) \\sec^2(4x + 3x^2)`
      },
      {
        id: 'trans-tansum-19',
        difficulty: 'Medium',
        type: 'free-response',
        statement: `Find the derivative of: \\quad \\tan(x + y) = 5x`,
        method: 'Implicit Differentiation and Tangent Sum Identity',
        solution: `\\begin{aligned}
\\text{Differentiating both sides with respect to } x: \\\\
\\sec^2(x + y) \\cdot \\left(1 + \\frac{dy}{dx}\\right) &= 5 \\\\
1 + \\frac{dy}{dx} &= \\frac{5}{\\sec^2(x + y)} \\\\
\\frac{dy}{dx} &= 5\\cos^2(x + y) - 1 \\\\
\\text{Alternatively, using } \\tan(x+y) = \\frac{\\tan x + \\tan y}{1 - \\tan x \\tan y} = 5x \\\\
\\text{We can differentiate implicitly from the identity, but the direct chain rule is more elegant.}
\\end{aligned}`,
        finalAnswer: `\\frac{dy}{dx} = 5\\cos^2(x + y) - 1`
      },
      {
        id: 'trans-tansum-20',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\frac{\\tan(2x) + \\tan(4x)}{1 - \\tan(2x)\\tan(4x)}`,
        method: 'Tangent Sum Identity and Chain Rule',
        solution: `\\begin{aligned}
\\text{Recognize the Tangent Sum Identity: } \\frac{\\tan A + \\tan B}{1 - \\tan A \\tan B} = \\tan(A + B) \\\\
y &= \\tan(2x + 4x) \\\\
y &= \\tan(6x) \\\\
y' &= \\sec^2(6x) \\cdot 6 \\\\
y' &= 6\\sec^2(6x)
\\end{aligned}`,
        finalAnswer: `y' = 6\\sec^2(6x)`
      },
      {
        id: 'trans-tansum-21',
        difficulty: 'Medium',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\tan(4x + 5x^2)`,
        method: 'Chain Rule and Tangent Sum Identity',
        solution: `\\begin{aligned}
\\text{Using the chain rule directly:} \\\\
y' &= \\sec^2(4x + 5x^2) \\cdot \\frac{d}{dx}(4x + 5x^2) \\\\
y' &= (4 + 10x) \\sec^2(4x + 5x^2) \\\\
\\text{Alternatively, using the tangent sum identity: } \\tan(A+B) = \\frac{\\tan A + \\tan B}{1 - \\tan A \\tan B} \\\\
y &= \\frac{\\tan(4x) + \\tan(5x^2)}{1 - \\tan(4x)\\tan(5x^2)} \\\\
\\text{Differentiating this using the quotient rule yields the same result.}
\\end{aligned}`,
        finalAnswer: `y' = (4 + 10x) \\sec^2(4x + 5x^2)`
      },
      {
        id: 'trans-tansum-22',
        difficulty: 'Medium',
        type: 'free-response',
        statement: `Find the derivative of: \\quad \\tan(x + y) = 4x`,
        method: 'Implicit Differentiation and Tangent Sum Identity',
        solution: `\\begin{aligned}
\\text{Differentiating both sides with respect to } x: \\\\
\\sec^2(x + y) \\cdot \\left(1 + \\frac{dy}{dx}\\right) &= 4 \\\\
1 + \\frac{dy}{dx} &= \\frac{4}{\\sec^2(x + y)} \\\\
\\frac{dy}{dx} &= 4\\cos^2(x + y) - 1 \\\\
\\text{Alternatively, using } \\tan(x+y) = \\frac{\\tan x + \\tan y}{1 - \\tan x \\tan y} = 4x \\\\
\\text{We can differentiate implicitly from the identity, but the direct chain rule is more elegant.}
\\end{aligned}`,
        finalAnswer: `\\frac{dy}{dx} = 4\\cos^2(x + y) - 1`
      },
      {
        id: 'trans-tansum-23',
        difficulty: 'Medium',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\frac{\\tan(5x) + \\tan(2x)}{1 - \\tan(5x)\\tan(2x)}`,
        method: 'Tangent Sum Identity and Chain Rule',
        solution: `\\begin{aligned}
\\text{Recognize the Tangent Sum Identity: } \\frac{\\tan A + \\tan B}{1 - \\tan A \\tan B} = \\tan(A + B) \\\\
y &= \\tan(5x + 2x) \\\\
y &= \\tan(7x) \\\\
y' &= \\sec^2(7x) \\cdot 7 \\\\
y' &= 7\\sec^2(7x)
\\end{aligned}`,
        finalAnswer: `y' = 7\\sec^2(7x)`
      },
      {
        id: 'trans-tansum-24',
        difficulty: 'Medium',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\tan(4x + 4x^2)`,
        method: 'Chain Rule and Tangent Sum Identity',
        solution: `\\begin{aligned}
\\text{Using the chain rule directly:} \\\\
y' &= \\sec^2(4x + 4x^2) \\cdot \\frac{d}{dx}(4x + 4x^2) \\\\
y' &= (4 + 8x) \\sec^2(4x + 4x^2) \\\\
\\text{Alternatively, using the tangent sum identity: } \\tan(A+B) = \\frac{\\tan A + \\tan B}{1 - \\tan A \\tan B} \\\\
y &= \\frac{\\tan(4x) + \\tan(4x^2)}{1 - \\tan(4x)\\tan(4x^2)} \\\\
\\text{Differentiating this using the quotient rule yields the same result.}
\\end{aligned}`,
        finalAnswer: `y' = (4 + 8x) \\sec^2(4x + 4x^2)`
      },
      {
        id: 'trans-tansum-25',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad \\tan(x + y) = 2x`,
        method: 'Implicit Differentiation and Tangent Sum Identity',
        solution: `\\begin{aligned}
\\text{Differentiating both sides with respect to } x: \\\\
\\sec^2(x + y) \\cdot \\left(1 + \\frac{dy}{dx}\\right) &= 2 \\\\
1 + \\frac{dy}{dx} &= \\frac{2}{\\sec^2(x + y)} \\\\
\\frac{dy}{dx} &= 2\\cos^2(x + y) - 1 \\\\
\\text{Alternatively, using } \\tan(x+y) = \\frac{\\tan x + \\tan y}{1 - \\tan x \\tan y} = 2x \\\\
\\text{We can differentiate implicitly from the identity, but the direct chain rule is more elegant.}
\\end{aligned}`,
        finalAnswer: `\\frac{dy}{dx} = 2\\cos^2(x + y) - 1`
      },
      {
        id: 'trans-tansum-26',
        difficulty: 'Medium',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\frac{\\tan(3x) + \\tan(3x)}{1 - \\tan(3x)\\tan(3x)}`,
        method: 'Tangent Sum Identity and Chain Rule',
        solution: `\\begin{aligned}
\\text{Recognize the Tangent Sum Identity: } \\frac{\\tan A + \\tan B}{1 - \\tan A \\tan B} = \\tan(A + B) \\\\
y &= \\tan(3x + 3x) \\\\
y &= \\tan(6x) \\\\
y' &= \\sec^2(6x) \\cdot 6 \\\\
y' &= 6\\sec^2(6x)
\\end{aligned}`,
        finalAnswer: `y' = 6\\sec^2(6x)`
      },
      {
        id: 'trans-tansum-27',
        difficulty: 'Medium',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\tan(5x + 2x^2)`,
        method: 'Chain Rule and Tangent Sum Identity',
        solution: `\\begin{aligned}
\\text{Using the chain rule directly:} \\\\
y' &= \\sec^2(5x + 2x^2) \\cdot \\frac{d}{dx}(5x + 2x^2) \\\\
y' &= (5 + 4x) \\sec^2(5x + 2x^2) \\\\
\\text{Alternatively, using the tangent sum identity: } \\tan(A+B) = \\frac{\\tan A + \\tan B}{1 - \\tan A \\tan B} \\\\
y &= \\frac{\\tan(5x) + \\tan(2x^2)}{1 - \\tan(5x)\\tan(2x^2)} \\\\
\\text{Differentiating this using the quotient rule yields the same result.}
\\end{aligned}`,
        finalAnswer: `y' = (5 + 4x) \\sec^2(5x + 2x^2)`
      },
      {
        id: 'trans-tansum-28',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad \\tan(x + y) = 5x`,
        method: 'Implicit Differentiation and Tangent Sum Identity',
        solution: `\\begin{aligned}
\\text{Differentiating both sides with respect to } x: \\\\
\\sec^2(x + y) \\cdot \\left(1 + \\frac{dy}{dx}\\right) &= 5 \\\\
1 + \\frac{dy}{dx} &= \\frac{5}{\\sec^2(x + y)} \\\\
\\frac{dy}{dx} &= 5\\cos^2(x + y) - 1 \\\\
\\text{Alternatively, using } \\tan(x+y) = \\frac{\\tan x + \\tan y}{1 - \\tan x \\tan y} = 5x \\\\
\\text{We can differentiate implicitly from the identity, but the direct chain rule is more elegant.}
\\end{aligned}`,
        finalAnswer: `\\frac{dy}{dx} = 5\\cos^2(x + y) - 1`
      },
      {
        id: 'trans-tansum-29',
        difficulty: 'Medium',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\frac{\\tan(4x) + \\tan(4x)}{1 - \\tan(4x)\\tan(4x)}`,
        method: 'Tangent Sum Identity and Chain Rule',
        solution: `\\begin{aligned}
\\text{Recognize the Tangent Sum Identity: } \\frac{\\tan A + \\tan B}{1 - \\tan A \\tan B} = \\tan(A + B) \\\\
y &= \\tan(4x + 4x) \\\\
y &= \\tan(8x) \\\\
y' &= \\sec^2(8x) \\cdot 8 \\\\
y' &= 8\\sec^2(8x)
\\end{aligned}`,
        finalAnswer: `y' = 8\\sec^2(8x)`
      },
      {
        id: 'trans-tansum-30',
        difficulty: 'Hard',
        type: 'free-response',
        statement: `Find the derivative of: \\quad y = \\tan(4x + 5x^2)`,
        method: 'Chain Rule and Tangent Sum Identity',
        solution: `\\begin{aligned}
\\text{Using the chain rule directly:} \\\\
y' &= \\sec^2(4x + 5x^2) \\cdot \\frac{d}{dx}(4x + 5x^2) \\\\
y' &= (4 + 10x) \\sec^2(4x + 5x^2) \\\\
\\text{Alternatively, using the tangent sum identity: } \\tan(A+B) = \\frac{\\tan A + \\tan B}{1 - \\tan A \\tan B} \\\\
y &= \\frac{\\tan(4x) + \\tan(5x^2)}{1 - \\tan(4x)\\tan(5x^2)} \\\\
\\text{Differentiating this using the quotient rule yields the same result.}
\\end{aligned}`,
        finalAnswer: `y' = (4 + 10x) \\sec^2(4x + 5x^2)`
      }
    ]
  }
];
