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
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Transcendental Derivatives</h2>
          <p className="text-on-surface-variant mb-4">Derivatives of functions that cannot be expressed in terms of a finite sequence of algebraic operations.</p>
        </section>
      </div>
    ),
    problems: [
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
