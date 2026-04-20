import React from 'react';
import { MathText } from '../components/MathText';
import { generatedParametricProblems } from './generatedParametric300';
import { generatedParametric50VeryHard } from './generatedParametric50VeryHard';
import { generatedPartialProblems } from './generatedPartial300';
import { generatedLhopitalProblems } from './generatedLhopital300';
import { generatedHigherOrderProblems } from './generatedHigherOrder300';
import { generatedApplicationsProblems } from './generatedApplications100';
import { generatedMoreApps } from './generatedMoreApps';
import { generatedMegaApps } from './generatedMegaApps';

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
  { id: 'applications', title: 'Applications' }
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
  { id: 'f-exp-u', category: 'Exponential & Log', name: 'Derivative of e^u (Chain Rule)', latex: '\\frac{d}{dx}(e^u) = e^u \\frac{du}{dx}' },
  { id: 'f-exp-a', category: 'Exponential & Log', name: 'Derivative of a^x', latex: '\\frac{d}{dx}(a^x) = a^x \\ln a' },
  { id: 'f-exp-au', category: 'Exponential & Log', name: 'Derivative of a^u (Chain Rule)', latex: '\\frac{d}{dx}(a^u) = a^u \\ln a \\frac{du}{dx}' },
  { id: 'f-ln', category: 'Exponential & Log', name: 'Derivative of ln(x)', latex: '\\frac{d}{dx}(\\ln x) = \\frac{1}{x}' },
  { id: 'f-ln-u', category: 'Exponential & Log', name: 'Derivative of ln(u) (Chain Rule)', latex: '\\frac{d}{dx}(\\ln u) = \\frac{1}{u} \\frac{du}{dx}' },
  { id: 'f-log', category: 'Exponential & Log', name: 'Derivative of log_a(x)', latex: '\\frac{d}{dx}(\\log_a x) = \\frac{1}{x \\ln a}' },
  { id: 'f-log-u', category: 'Exponential & Log', name: 'Derivative of log_a(u) (Chain Rule)', latex: '\\frac{d}{dx}(\\log_a u) = \\frac{1}{u \\ln a} \\frac{du}{dx}' },
  { id: 'f-log-diff', category: 'Exponential & Log', name: 'Logarithmic Differentiation', latex: 'y = f(x) \\implies \\ln y = \\ln f(x) \\implies y\' = y \\frac{d}{dx}[\\ln f(x)]' },
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

  { id: 'f-parametric-1st', category: 'Parametric Equations', name: 'First Derivative', latex: '\\frac{dy}{dx} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}}' },
  { id: 'f-parametric-2nd', category: 'Parametric Equations', name: 'Second Derivative', latex: '\\frac{d^2y}{dx^2} = \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}}' },

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
  
  // Applications of Derivatives: Optimization Shortcuts
  { id: 'f-opt-box-open', category: 'Optimization Shortcuts', name: 'Open Box (Square Base) Max Volume', latex: 'b = 2h' },
  { id: 'f-opt-box-closed', category: 'Optimization Shortcuts', name: 'Closed Box (Square Base) Max Volume', latex: 'b = h \\text{ (Cube)}' },
  { id: 'f-opt-cyl-closed', category: 'Optimization Shortcuts', name: 'Closed Cylinder Max Volume', latex: 'h = 2r' },
  { id: 'f-opt-cyl-open', category: 'Optimization Shortcuts', name: 'Open Cylinder Max Volume', latex: 'h = r' },
  { id: 'f-opt-rect-perim', category: 'Optimization Shortcuts', name: 'Max Area Rectangle (Fixed Perimeter)', latex: 'l = w = \\frac{P}{4} \\text{ (Square)}' },
  { id: 'f-opt-rect-circle', category: 'Optimization Shortcuts', name: 'Max Area Rectangle Inscribed in Circle', latex: '\\text{Square with diagonal } D' },
  { id: 'f-opt-cyl-sphere', category: 'Optimization Shortcuts', name: 'Largest Cylinder in a Sphere (Radius R)', latex: 'h = \\frac{2R}{\\sqrt{3}}' },
  { id: 'f-opt-cone-sphere', category: 'Optimization Shortcuts', name: 'Largest Cone in a Sphere (Radius R)', latex: 'h = \\frac{4R}{3}' },
  { id: 'f-opt-light', category: 'Optimization Shortcuts', name: 'Optimal Height for Illumination', latex: 'h = \\frac{R}{\\sqrt{2}}' },
  { id: 'f-opt-corridor', category: 'Optimization Shortcuts', name: 'Longest Pipe around Corner', latex: 'L = (a^{2/3} + b^{2/3})^{3/2}' },
  { id: 'f-opt-wire-cut', category: 'Optimization Shortcuts', name: 'Wire Cut into Square and Circle', latex: '\\text{Max area: All circle. Min area: } \\frac{\\text{Perimeter}}{\\pi+4}' },
  { id: 'f-opt-rect-ellipse', category: 'Optimization Shortcuts', name: 'Max Area Rectangle in Ellipse', latex: 'A_{\\text{max}} = 2ab' },
  { id: 'f-opt-cyl-cone', category: 'Optimization Shortcuts', name: 'Largest Cylinder in a Cone', latex: 'r = \\frac{2}{3}R, \\quad h = \\frac{1}{3}H' },
  { id: 'f-opt-rect-para', category: 'Optimization Shortcuts', name: 'Max Rectangle under Parabola', latex: 'y = \\frac{2}{3}H \\text{ (height)}' },
  { id: 'f-opt-rect-semi', category: 'Optimization Shortcuts', name: 'Max Rectangle in Semicircle', latex: 'A_{\\text{max}} = R^2, \\quad y = \\frac{R}{\\sqrt{2}}' },
  { id: 'f-opt-triangle-sides', category: 'Optimization Shortcuts', name: 'Max Triangle Area (Fixed Sides a, b)', latex: '\\theta = 90^\\circ \\implies A_{\\text{max}} = \\frac{1}{2}ab' },
  
  // Applications of Derivatives: Related Rates Steps & Formulas
  { id: 'f-rr-ladder', category: 'Related Rates', name: 'Sliding Ladder (Length L)', latex: 'x\\frac{dx}{dt} + y\\frac{dy}{dt} = 0 \\implies v_y = -\\frac{x}{y}v_x' },
  { id: 'f-rr-cone', category: 'Related Rates', name: 'Conical Tank (Base R, Height H)', latex: 'r = \\frac{R}{H}h \\implies V = \\frac{\\pi R^2}{3H^2}h^3' },
  { id: 'f-rr-shadow-len', category: 'Related Rates', name: 'Rate of Shadow Length', latex: '\\frac{dy}{dt} = v_{\\text{person}} \\cdot \\left(\\frac{h_{\\text{person}}}{H_{\\text{lamp}} - h_{\\text{person}}}\\right)' },
  { id: 'f-rr-shadow-tip', category: 'Related Rates', name: 'Rate of Shadow Tip', latex: '\\frac{d(y+s)}{dt} = v_{\\text{person}} \\cdot \\left(\\frac{H_{\\text{lamp}}}{H_{\\text{lamp}} - h_{\\text{person}}}\\right)' },
  { id: 'f-rr-sphere', category: 'Related Rates', name: 'Spherical Balloon', latex: '\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}' },
  { id: 'f-rr-cylinder', category: 'Related Rates', name: 'Cylindrical Tank', latex: '\\frac{dV}{dt} = \\pi r^2 \\frac{dh}{dt} + 2\\pi rh \\frac{dr}{dt}' },
  { id: 'f-rr-ships', category: 'Related Rates', name: 'Two Ships (Pythagorean)', latex: 'D\\frac{dD}{dt} = x\\frac{dx}{dt} + y\\frac{dy}{dt}' },
  { id: 'f-rr-kite', category: 'Related Rates', name: 'Kite (Fixed Height y)', latex: 'x\\frac{dx}{dt} = s\\frac{ds}{dt}' },
  { id: 'f-rr-angle', category: 'Related Rates', name: 'Angle of Elevation', latex: '\\sec^2\\theta \\frac{d\\theta}{dt} = \\frac{1}{x}\\frac{dy}{dt} - \\frac{y}{x^2}\\frac{dx}{dt}' },
  { id: 'f-rr-boyle', category: 'Related Rates', name: "Boyle's Law (PV = C)", latex: 'P\\frac{dV}{dt} + V\\frac{dP}{dt} = 0' },
  { id: 'f-rr-cone-angle', category: 'Related Rates', name: 'Cone with Fixed semi-vertical angle', latex: 'r = h\\tan\\alpha \\implies V = \\frac{\\pi}{3}h^3\\tan^2\\alpha' },
  { id: 'f-rr-falling', category: 'Related Rates', name: 'Falling Object Equation', latex: 'h(t) = h_0 + v_0t - \\frac{1}{2}gt^2' },
  { id: 'f-rr-omega', category: 'Related Rates', name: 'Angular Velocity (Rotation)', latex: '\\omega = \\frac{d\\theta}{dt}, \\quad v = r\\omega' },
  { id: 'f-rr-trough', category: 'Related Rates', name: 'Trapezoidal Trough Volume', latex: 'V = L\\cdot h \\cdot \\frac{b_1 + b_2(h)}{2}' },
  
  // Applications of Derivatives: Steps & Methodologies
  { id: 'f-opt-steps', category: 'Optimization Shortcuts', name: 'Steps for Optimization', latex: '\\begin{aligned} &\\text{1. Identify given \\& target quantity. Draw a diagram.} \\\\ &\\text{2. Write primary equation (e.g. } A = xy\\text{)} \\\\ &\\text{3. Use constraint to rewrite in one variable} \\\\ &\\text{4. Find derivative } f\'(x) \\\\ &\\text{5. Set } f\'(x)=0 \\text{ to find critical points} \\\\ &\\text{6. Verify minimum/maximum using derivative tests.} \\end{aligned}' },
  { id: 'f-rr-steps', category: 'Related Rates', name: 'Steps for Related Rates', latex: '\\begin{aligned} &\\text{1. Identify known rates \\& target rate. Draw snapshot.} \\\\ &\\text{2. Write equation relating variables (Pythagoras, Triangles, etc)} \\\\ &\\text{3. Differentiate implicitly with respect to } t \\\\ &\\text{4. Substitute known snapshot values \\& known rates} \\\\ &\\text{5. Solve algebraically for the target rate} \\end{aligned}' },
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
            <MathText block math={String.raw`\lim_{x \to a} [f(x) + g(x)] = \lim_{x \to a} f(x) + \lim_{x \to a} g(x)`} />
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
            <MathText block math={String.raw`\lim_{x \to a} f(x) = f(a)`} />
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
            <MathText block math={String.raw`f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}`} />
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
    id: 'parametric-equations',
    categoryId: 'differential',
    title: 'Derivatives of Parametric Equations',
    icon: 'moving',
    description: 'First and second derivatives of curves defined by parametric equations x(t) and y(t).',
    theory: (
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Parametric Differentiation</h2>
          <p className="text-on-surface-variant mb-6">
            When a curve is defined by parametric equations <MathText math="x = f(t)" /> and <MathText math="y = g(t)" />, we can find the derivative <MathText math="\frac{dy}{dx}" /> without eliminating the parameter <MathText math="t" /> by using the Chain Rule.
          </p>
          
          <div className="grid gap-6">
            {/* Rule 1 */}
            <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/20">
              <h3 className="text-lg font-bold text-primary mb-2">First Derivative</h3>
              <p className="text-sm text-on-surface-variant mb-4">
                The first derivative <MathText math="\frac{dy}{dx}" /> is given by the quotient of the derivatives with respect to <MathText math="t" />.
              </p>
              <div className="bg-surface-container-lowest p-4 rounded-xl overflow-x-auto no-scrollbar mb-4">
                <MathText block math={String.raw`\frac{dy}{dx} = \frac{\frac{dy}{dt}}{\frac{dx}{dt}}, \quad \text{provided } \frac{dx}{dt} \neq 0`} className="text-[13px] md:text-base"/>
              </div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">Example</h4>
              <div className="bg-surface-container-lowest p-4 rounded-xl overflow-x-auto no-scrollbar">
                <MathText block math={String.raw`x = t^2, \quad y = t^3 - 3t`} className="mb-2 text-[13px] md:text-base" />
                <MathText block math={String.raw`\frac{dx}{dt} = 2t, \quad \frac{dy}{dt} = 3t^2 - 3`} className="mb-2 text-[13px] md:text-base" />
                <MathText block math={String.raw`\frac{dy}{dx} = \frac{3t^2 - 3}{2t}`} className="text-[13px] md:text-base" />
              </div>
            </div>

            {/* Rule 2 */}
            <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/20">
              <h3 className="text-lg font-bold text-primary mb-2">Second Derivative</h3>
              <p className="text-sm text-on-surface-variant mb-4">
                The second derivative <MathText math="\frac{d^2y}{dx^2}" /> is obtained by differentiating <MathText math="\frac{dy}{dx}" /> with respect to <MathText math="t" />, and dividing by <MathText math="\frac{dx}{dt}" /> again. Be careful: it is NOT simply the quotient of the second derivatives!
              </p>
              <div className="bg-surface-container-lowest p-4 rounded-xl overflow-x-auto no-scrollbar mb-4">
                <MathText block math={String.raw`\frac{d^2y}{dx^2} = \frac{\frac{d}{dt}\left(\frac{dy}{dx}\right)}{\frac{dx}{dt}}`} className="text-[13px] md:text-base" />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">Example</h4>
              <div className="bg-surface-container-lowest p-4 rounded-xl overflow-x-auto no-scrollbar">
                <MathText block math={String.raw`\frac{d}{dt}\left(\frac{dy}{dx}\right) = \frac{d}{dt}\left(\frac{3t^2 - 3}{2t}\right) = \frac{(6t)(2t) - (3t^2 - 3)(2)}{4t^2} = \frac{6t^2 + 6}{4t^2} = \frac{3t^2 + 3}{2t^2}`} className="mb-2 text-[13px] md:text-base" />
                <MathText block math={String.raw`\frac{d^2y}{dx^2} = \frac{\frac{3t^2 + 3}{2t^2}}{2t} = \frac{3t^2 + 3}{4t^3}`} className="text-[13px] md:text-base" />
              </div>
            </div>
            
          </div>
        </section>
      </div>
    ),
    problems: [...generatedParametricProblems, ...generatedParametric50VeryHard].map((p: any) => ({
      id: p.id,
      difficulty: p.difficulty === 'very_hard' ? 'Very Hard' : 'Hard',
      statement: p.statement,
      solution: typeof p.steps === 'string' ? p.steps : Array.isArray(p.steps) ? p.steps.join('\n') : '',
      finalAnswer: p.answer,
      type: 'free-response'
    }))
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
          <h2 className="text-2xl font-semibold mb-4">Patterns and Approaches</h2>
          <p className="text-on-surface-variant mb-6">
            When finding derivatives of transcendental functions, you will typically encounter specific patterns. Recognizing these patterns is key to choosing the right approach. Here are the most common patterns and how to solve them:
          </p>
          
          <div className="grid gap-6">
            {/* Pattern 1 */}
            <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/20">
              <h3 className="text-lg font-bold text-primary mb-2">1. Direct Application with Chain Rule</h3>
              <p className="text-sm text-on-surface-variant mb-4">
                <strong>Pattern:</strong> A transcendental function with a complex argument, like <MathText math={String.raw`f(g(x))`} />. Examples include <MathText math={String.raw`e^{u}`} />, <MathText math={String.raw`\sin(u)`} />, or <MathText math={String.raw`\ln(u)`} />.
              </p>
              <p className="text-sm text-on-surface-variant mb-4">
                <strong>Approach:</strong> Identify the outer transcendental function and the inner algebraic (or other) function. Apply the specific derivative rule for the outer function, then multiply by the derivative of the inner function.
              </p>
              <div className="bg-surface-container-lowest p-4 rounded-xl overflow-x-auto no-scrollbar">
                <h4 className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">Example</h4>
                <MathText block math={String.raw`y = \sin(x^2 + 3x)`} className="mb-2 text-[13px] md:text-base" />
                <MathText block math={String.raw`y' = \cos(x^2 + 3x) \cdot \frac{d}{dx}(x^2 + 3x)`} className="mb-2 text-[13px] md:text-base" />
                <MathText block math={String.raw`y' = (2x + 3)\cos(x^2 + 3x)`} className="text-[13px] md:text-base" />
              </div>
            </div>

            {/* Pattern 2 */}
            <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/20">
              <h3 className="text-lg font-bold text-primary mb-2">2. Logarithmic Differentiation</h3>
              <p className="text-sm text-on-surface-variant mb-4">
                <strong>Pattern:</strong> Functions with a variable base and a variable exponent (e.g., <MathText math="y = x^x" />) or highly complex products/quotients/roots where standard rules would be extremely tedious.
              </p>
              <p className="text-sm text-on-surface-variant mb-4">
                <strong>Approach:</strong> Take the natural logarithm (<MathText math={String.raw`\ln`} />) of both sides. Use logarithm properties to expand the right side. Differentiate implicitly, then multiply both sides by the original <MathText math={String.raw`y`} /> to solve for <MathText math={String.raw`y'`} />.
              </p>
              <div className="bg-surface-container-lowest p-4 rounded-xl overflow-x-auto no-scrollbar">
                <h4 className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">Example</h4>
                <MathText block math={String.raw`y = x^{\sin x}`} className="mb-2 text-[13px] md:text-base" />
                <MathText block math={String.raw`\ln y = \ln(x^{\sin x}) \implies \ln y = \sin x \cdot \ln x`} className="mb-2 text-[13px] md:text-base" />
                <MathText block math={String.raw`\frac{1}{y}y' = \cos x \cdot \ln x + \sin x \cdot \frac{1}{x}`} className="mb-2 text-[13px] md:text-base" />
                <MathText block math={String.raw`y' = x^{\sin x} \left( \cos x \ln x + \frac{\sin x}{x} \right)`} className="text-[13px] md:text-base" />
              </div>
            </div>

            {/* Pattern 3 */}
            <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/20">
              <h3 className="text-lg font-bold text-primary mb-2">3. Implicit Differentiation</h3>
              <p className="text-sm text-on-surface-variant mb-4">
                <strong>Pattern:</strong> Equations where <MathText math={String.raw`y`} /> is not isolated and is mixed with <MathText math={String.raw`x`} /> inside transcendental functions, such as <MathText math={String.raw`e^{xy} + \sin(y) = x`} />.
              </p>
              <p className="text-sm text-on-surface-variant mb-4">
                <strong>Approach:</strong> Differentiate both sides with respect to <MathText math="x" />. Remember that <MathText math="y" /> is a function of <MathText math="x" />, so every time you differentiate a term with <MathText math="y" />, you must multiply by <MathText math="y'" /> (Chain Rule). Finally, algebraically isolate <MathText math="y'" />.
              </p>
              <div className="bg-surface-container-lowest p-4 rounded-xl overflow-x-auto no-scrollbar">
                <h4 className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">Example</h4>
                <MathText block math={String.raw`\ln(xy) = y^2`} className="mb-2 text-[13px] md:text-base" />
                <MathText block math={String.raw`\frac{1}{xy} \cdot (1 \cdot y + x \cdot y') = 2y \cdot y'`} className="mb-2 text-[13px] md:text-base" />
                <MathText block math={String.raw`\frac{1}{x} + \frac{y'}{y} = 2yy' \implies \frac{1}{x} = y'\left(2y - \frac{1}{y}\right)`} className="mb-2 text-[13px] md:text-base" />
                <MathText block math={String.raw`y' = \frac{1}{x(2y - \frac{1}{y})} = \frac{y}{x(2y^2 - 1)}`} className="text-[13px] md:text-base" />
              </div>
            </div>

            {/* Pattern 4 */}
            <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/20">
              <h3 className="text-lg font-bold text-primary mb-2">4. Product and Quotient Rules</h3>
              <p className="text-sm text-on-surface-variant mb-4">
                <strong>Pattern:</strong> A function that is a product or quotient involving at least one transcendental function, like <MathText math={String.raw`y = x^2 e^x`} /> or <MathText math={String.raw`y = \frac{\ln x}{x}`} />.
              </p>
              <p className="text-sm text-on-surface-variant mb-4">
                <strong>Approach:</strong> Set up the Product Rule (<MathText math={String.raw`(uv)' = u'v + uv'`} />) or Quotient Rule (<MathText math={String.raw`\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}`} />) first. Then, evaluate the derivatives of the individual transcendental parts as needed.
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
      </div>
    ),
    problems: [
      {
        id: 'trans-curated-1',
        difficulty: 'Easy',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = e^{\\arcsin(x)}',
        method: 'Strategy: We have an exponential function where the exponent is an inverse trigonometric function. We will use the chain rule: the derivative of e^u is e^u * u\'. Identities: None strictly needed.',
        solution: '\\begin{aligned}\n y\' &= e^{\\arcsin(x)} \\cdot \\frac{d}{dx}(\\arcsin(x)) \\\\\n y\' &= e^{\\arcsin(x)} \\cdot \\frac{1}{\\sqrt{1-x^2}} \\\\\n y\' &= \\frac{e^{\\arcsin(x)}}{\\sqrt{1-x^2}}\n\\end{aligned}',
        finalAnswer: 'y\' = \\frac{e^{\\arcsin(x)}}{\\sqrt{1-x^2}}'
      },
      {
        id: 'trans-curated-2',
        difficulty: 'Medium',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\frac{\\sin(2x)}{e^x \\sin x}',
        method: 'Strategy: Before jumping into a messy quotient rule, we can use the double-angle identity for sine to cancel out terms. Then we use the product rule and chain rule on the simplified expression. Identity Application: \\sin(2x) = 2\\sin(x)\\cos(x).',
        solution: '\\begin{aligned}\n y &= \\frac{2\\sin x \\cos x}{e^x \\sin x} \\\\\n y &= \\frac{2\\cos x}{e^x} = 2e^{-x}\\cos x \\\\\n y\' &= 2 \\left[ \\frac{d}{dx}(e^{-x})\\cos x + e^{-x}\\frac{d}{dx}(\\cos x) \\right] \\\\\n y\' &= 2 [ -e^{-x}\\cos x - e^{-x}\\sin x ] \\\\\n y\' &= -2e^{-x}(\\cos x + \\sin x)\n\\end{aligned}',
        finalAnswer: 'y\' = -2e^{-x}(\\cos x + \\sin x)'
      },
      {
        id: 'trans-superhard-t1-1',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = e^{1x} \\sin(2x) \\cos(2x)',
        method: 'Double Angle Identity and Product Rule',
        solution: '\\begin{aligned}\ny &= e^{1x} \\sin(2x) \\cos(2x) \\\\\ny &= \\frac{1}{2} e^{1x} \\sin(4x) \\\\\ny\' &= \\frac{1}{2} \\left[ \\frac{d}{dx}(e^{1x}) \\sin(4x) + e^{1x} \\frac{d}{dx}(\\sin(4x)) \\right] \\\\\ny\' &= \\frac{1}{2} \\left[ 1 e^{1x} \\sin(4x) + e^{1x} \\cos(4x) \\cdot 4 \\right] \\\\\ny\' &= \\frac{1}{2} e^{1x} \\left( 1 \\sin(4x) + 4 \\cos(4x) \\right)\n\\end{aligned}',
        finalAnswer: 'y\' = \\frac{1}{2} e^{1x} \\left( 1 \\sin(4x) + 4 \\cos(4x) \\right)'
      },
      {
        id: 'trans-superhard-t1-2',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = e^{2x} \\sin(3x) \\cos(3x)',
        method: 'Double Angle Identity and Product Rule',
        solution: '\\begin{aligned}\ny &= e^{2x} \\sin(3x) \\cos(3x) \\\\\ny &= \\frac{1}{2} e^{2x} \\sin(6x) \\\\\ny\' &= \\frac{1}{2} \\left[ \\frac{d}{dx}(e^{2x}) \\sin(6x) + e^{2x} \\frac{d}{dx}(\\sin(6x)) \\right] \\\\\ny\' &= \\frac{1}{2} \\left[ 2 e^{2x} \\sin(6x) + e^{2x} \\cos(6x) \\cdot 6 \\right] \\\\\ny\' &= \\frac{1}{2} e^{2x} \\left( 2 \\sin(6x) + 6 \\cos(6x) \\right)\n\\end{aligned}',
        finalAnswer: 'y\' = \\frac{1}{2} e^{2x} \\left( 2 \\sin(6x) + 6 \\cos(6x) \\right)'
      },
      {
        id: 'trans-superhard-t1-3',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = e^{3x} \\sin(4x) \\cos(4x)',
        method: 'Double Angle Identity and Product Rule',
        solution: '\\begin{aligned}\ny &= e^{3x} \\sin(4x) \\cos(4x) \\\\\ny &= \\frac{1}{2} e^{3x} \\sin(8x) \\\\\ny\' &= \\frac{1}{2} \\left[ \\frac{d}{dx}(e^{3x}) \\sin(8x) + e^{3x} \\frac{d}{dx}(\\sin(8x)) \\right] \\\\\ny\' &= \\frac{1}{2} \\left[ 3 e^{3x} \\sin(8x) + e^{3x} \\cos(8x) \\cdot 8 \\right] \\\\\ny\' &= \\frac{1}{2} e^{3x} \\left( 3 \\sin(8x) + 8 \\cos(8x) \\right)\n\\end{aligned}',
        finalAnswer: 'y\' = \\frac{1}{2} e^{3x} \\left( 3 \\sin(8x) + 8 \\cos(8x) \\right)'
      },
      {
        id: 'trans-superhard-t1-4',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = e^{4x} \\sin(5x) \\cos(5x)',
        method: 'Double Angle Identity and Product Rule',
        solution: '\\begin{aligned}\ny &= e^{4x} \\sin(5x) \\cos(5x) \\\\\ny &= \\frac{1}{2} e^{4x} \\sin(10x) \\\\\ny\' &= \\frac{1}{2} \\left[ \\frac{d}{dx}(e^{4x}) \\sin(10x) + e^{4x} \\frac{d}{dx}(\\sin(10x)) \\right] \\\\\ny\' &= \\frac{1}{2} \\left[ 4 e^{4x} \\sin(10x) + e^{4x} \\cos(10x) \\cdot 10 \\right] \\\\\ny\' &= \\frac{1}{2} e^{4x} \\left( 4 \\sin(10x) + 10 \\cos(10x) \\right)\n\\end{aligned}',
        finalAnswer: 'y\' = \\frac{1}{2} e^{4x} \\left( 4 \\sin(10x) + 10 \\cos(10x) \\right)'
      },
      {
        id: 'trans-superhard-t1-5',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = e^{5x} \\sin(6x) \\cos(6x)',
        method: 'Double Angle Identity and Product Rule',
        solution: '\\begin{aligned}\ny &= e^{5x} \\sin(6x) \\cos(6x) \\\\\ny &= \\frac{1}{2} e^{5x} \\sin(12x) \\\\\ny\' &= \\frac{1}{2} \\left[ \\frac{d}{dx}(e^{5x}) \\sin(12x) + e^{5x} \\frac{d}{dx}(\\sin(12x)) \\right] \\\\\ny\' &= \\frac{1}{2} \\left[ 5 e^{5x} \\sin(12x) + e^{5x} \\cos(12x) \\cdot 12 \\right] \\\\\ny\' &= \\frac{1}{2} e^{5x} \\left( 5 \\sin(12x) + 12 \\cos(12x) \\right)\n\\end{aligned}',
        finalAnswer: 'y\' = \\frac{1}{2} e^{5x} \\left( 5 \\sin(12x) + 12 \\cos(12x) \\right)'
      },
      {
        id: 'trans-superhard-t1-6',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = e^{6x} \\sin(7x) \\cos(7x)',
        method: 'Double Angle Identity and Product Rule',
        solution: '\\begin{aligned}\ny &= e^{6x} \\sin(7x) \\cos(7x) \\\\\ny &= \\frac{1}{2} e^{6x} \\sin(14x) \\\\\ny\' &= \\frac{1}{2} \\left[ \\frac{d}{dx}(e^{6x}) \\sin(14x) + e^{6x} \\frac{d}{dx}(\\sin(14x)) \\right] \\\\\ny\' &= \\frac{1}{2} \\left[ 6 e^{6x} \\sin(14x) + e^{6x} \\cos(14x) \\cdot 14 \\right] \\\\\ny\' &= \\frac{1}{2} e^{6x} \\left( 6 \\sin(14x) + 14 \\cos(14x) \\right)\n\\end{aligned}',
        finalAnswer: 'y\' = \\frac{1}{2} e^{6x} \\left( 6 \\sin(14x) + 14 \\cos(14x) \\right)'
      },
      {
        id: 'trans-superhard-t1-7',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = e^{7x} \\sin(8x) \\cos(8x)',
        method: 'Double Angle Identity and Product Rule',
        solution: '\\begin{aligned}\ny &= e^{7x} \\sin(8x) \\cos(8x) \\\\\ny &= \\frac{1}{2} e^{7x} \\sin(16x) \\\\\ny\' &= \\frac{1}{2} \\left[ \\frac{d}{dx}(e^{7x}) \\sin(16x) + e^{7x} \\frac{d}{dx}(\\sin(16x)) \\right] \\\\\ny\' &= \\frac{1}{2} \\left[ 7 e^{7x} \\sin(16x) + e^{7x} \\cos(16x) \\cdot 16 \\right] \\\\\ny\' &= \\frac{1}{2} e^{7x} \\left( 7 \\sin(16x) + 16 \\cos(16x) \\right)\n\\end{aligned}',
        finalAnswer: 'y\' = \\frac{1}{2} e^{7x} \\left( 7 \\sin(16x) + 16 \\cos(16x) \\right)'
      },
      {
        id: 'trans-superhard-t1-8',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = e^{8x} \\sin(9x) \\cos(9x)',
        method: 'Double Angle Identity and Product Rule',
        solution: '\\begin{aligned}\ny &= e^{8x} \\sin(9x) \\cos(9x) \\\\\ny &= \\frac{1}{2} e^{8x} \\sin(18x) \\\\\ny\' &= \\frac{1}{2} \\left[ \\frac{d}{dx}(e^{8x}) \\sin(18x) + e^{8x} \\frac{d}{dx}(\\sin(18x)) \\right] \\\\\ny\' &= \\frac{1}{2} \\left[ 8 e^{8x} \\sin(18x) + e^{8x} \\cos(18x) \\cdot 18 \\right] \\\\\ny\' &= \\frac{1}{2} e^{8x} \\left( 8 \\sin(18x) + 18 \\cos(18x) \\right)\n\\end{aligned}',
        finalAnswer: 'y\' = \\frac{1}{2} e^{8x} \\left( 8 \\sin(18x) + 18 \\cos(18x) \\right)'
      },
      {
        id: 'trans-superhard-t1-9',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = e^{9x} \\sin(10x) \\cos(10x)',
        method: 'Double Angle Identity and Product Rule',
        solution: '\\begin{aligned}\ny &= e^{9x} \\sin(10x) \\cos(10x) \\\\\ny &= \\frac{1}{2} e^{9x} \\sin(20x) \\\\\ny\' &= \\frac{1}{2} \\left[ \\frac{d}{dx}(e^{9x}) \\sin(20x) + e^{9x} \\frac{d}{dx}(\\sin(20x)) \\right] \\\\\ny\' &= \\frac{1}{2} \\left[ 9 e^{9x} \\sin(20x) + e^{9x} \\cos(20x) \\cdot 20 \\right] \\\\\ny\' &= \\frac{1}{2} e^{9x} \\left( 9 \\sin(20x) + 20 \\cos(20x) \\right)\n\\end{aligned}',
        finalAnswer: 'y\' = \\frac{1}{2} e^{9x} \\left( 9 \\sin(20x) + 20 \\cos(20x) \\right)'
      },
      {
        id: 'trans-superhard-t1-10',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = e^{10x} \\sin(11x) \\cos(11x)',
        method: 'Double Angle Identity and Product Rule',
        solution: '\\begin{aligned}\ny &= e^{10x} \\sin(11x) \\cos(11x) \\\\\ny &= \\frac{1}{2} e^{10x} \\sin(22x) \\\\\ny\' &= \\frac{1}{2} \\left[ \\frac{d}{dx}(e^{10x}) \\sin(22x) + e^{10x} \\frac{d}{dx}(\\sin(22x)) \\right] \\\\\ny\' &= \\frac{1}{2} \\left[ 10 e^{10x} \\sin(22x) + e^{10x} \\cos(22x) \\cdot 22 \\right] \\\\\ny\' &= \\frac{1}{2} e^{10x} \\left( 10 \\sin(22x) + 22 \\cos(22x) \\right)\n\\end{aligned}',
        finalAnswer: 'y\' = \\frac{1}{2} e^{10x} \\left( 10 \\sin(22x) + 22 \\cos(22x) \\right)'
      },
      {
        id: 'trans-superhard-t2-1',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\ln(\\tan(3x) + \\sec(3x)) \\cdot \\cos(6x)',
        method: 'Product Rule and Chain Rule',
        solution: '\\begin{aligned}\ny\' &= \\frac{d}{dx}(\\ln(\\tan(3x) + \\sec(3x))) \\cdot \\cos(6x) + \\ln(\\tan(3x) + \\sec(3x)) \\cdot \\frac{d}{dx}(\\cos(6x)) \\\\\n\\frac{d}{dx}(\\ln(\\tan(3x) + \\sec(3x))) &= \\frac{1}{\\tan(3x) + \\sec(3x)} \\cdot (3\\sec^2(3x) + 3\\sec(3x)\\tan(3x)) = 3\\sec(3x) \\\\\ny\' &= 3\\sec(3x) \\cos(6x) - 6 \\ln(\\tan(3x) + \\sec(3x)) \\sin(6x)\n\\end{aligned}',
        finalAnswer: 'y\' = 3\\sec(3x) \\cos(6x) - 6 \\ln(\\tan(3x) + \\sec(3x)) \\sin(6x)'
      },
      {
        id: 'trans-superhard-t2-2',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\ln(\\tan(4x) + \\sec(4x)) \\cdot \\cos(8x)',
        method: 'Product Rule and Chain Rule',
        solution: '\\begin{aligned}\ny\' &= \\frac{d}{dx}(\\ln(\\tan(4x) + \\sec(4x))) \\cdot \\cos(8x) + \\ln(\\tan(4x) + \\sec(4x)) \\cdot \\frac{d}{dx}(\\cos(8x)) \\\\\n\\frac{d}{dx}(\\ln(\\tan(4x) + \\sec(4x))) &= \\frac{1}{\\tan(4x) + \\sec(4x)} \\cdot (4\\sec^2(4x) + 4\\sec(4x)\\tan(4x)) = 4\\sec(4x) \\\\\ny\' &= 4\\sec(4x) \\cos(8x) - 8 \\ln(\\tan(4x) + \\sec(4x)) \\sin(8x)\n\\end{aligned}',
        finalAnswer: 'y\' = 4\\sec(4x) \\cos(8x) - 8 \\ln(\\tan(4x) + \\sec(4x)) \\sin(8x)'
      },
      {
        id: 'trans-superhard-t2-3',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\ln(\\tan(5x) + \\sec(5x)) \\cdot \\cos(10x)',
        method: 'Product Rule and Chain Rule',
        solution: '\\begin{aligned}\ny\' &= \\frac{d}{dx}(\\ln(\\tan(5x) + \\sec(5x))) \\cdot \\cos(10x) + \\ln(\\tan(5x) + \\sec(5x)) \\cdot \\frac{d}{dx}(\\cos(10x)) \\\\\n\\frac{d}{dx}(\\ln(\\tan(5x) + \\sec(5x))) &= \\frac{1}{\\tan(5x) + \\sec(5x)} \\cdot (5\\sec^2(5x) + 5\\sec(5x)\\tan(5x)) = 5\\sec(5x) \\\\\ny\' &= 5\\sec(5x) \\cos(10x) - 10 \\ln(\\tan(5x) + \\sec(5x)) \\sin(10x)\n\\end{aligned}',
        finalAnswer: 'y\' = 5\\sec(5x) \\cos(10x) - 10 \\ln(\\tan(5x) + \\sec(5x)) \\sin(10x)'
      },
      {
        id: 'trans-superhard-t2-4',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\ln(\\tan(6x) + \\sec(6x)) \\cdot \\cos(12x)',
        method: 'Product Rule and Chain Rule',
        solution: '\\begin{aligned}\ny\' &= \\frac{d}{dx}(\\ln(\\tan(6x) + \\sec(6x))) \\cdot \\cos(12x) + \\ln(\\tan(6x) + \\sec(6x)) \\cdot \\frac{d}{dx}(\\cos(12x)) \\\\\n\\frac{d}{dx}(\\ln(\\tan(6x) + \\sec(6x))) &= \\frac{1}{\\tan(6x) + \\sec(6x)} \\cdot (6\\sec^2(6x) + 6\\sec(6x)\\tan(6x)) = 6\\sec(6x) \\\\\ny\' &= 6\\sec(6x) \\cos(12x) - 12 \\ln(\\tan(6x) + \\sec(6x)) \\sin(12x)\n\\end{aligned}',
        finalAnswer: 'y\' = 6\\sec(6x) \\cos(12x) - 12 \\ln(\\tan(6x) + \\sec(6x)) \\sin(12x)'
      },
      {
        id: 'trans-superhard-t2-5',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\ln(\\tan(7x) + \\sec(7x)) \\cdot \\cos(14x)',
        method: 'Product Rule and Chain Rule',
        solution: '\\begin{aligned}\ny\' &= \\frac{d}{dx}(\\ln(\\tan(7x) + \\sec(7x))) \\cdot \\cos(14x) + \\ln(\\tan(7x) + \\sec(7x)) \\cdot \\frac{d}{dx}(\\cos(14x)) \\\\\n\\frac{d}{dx}(\\ln(\\tan(7x) + \\sec(7x))) &= \\frac{1}{\\tan(7x) + \\sec(7x)} \\cdot (7\\sec^2(7x) + 7\\sec(7x)\\tan(7x)) = 7\\sec(7x) \\\\\ny\' &= 7\\sec(7x) \\cos(14x) - 14 \\ln(\\tan(7x) + \\sec(7x)) \\sin(14x)\n\\end{aligned}',
        finalAnswer: 'y\' = 7\\sec(7x) \\cos(14x) - 14 \\ln(\\tan(7x) + \\sec(7x)) \\sin(14x)'
      },
      {
        id: 'trans-superhard-t2-6',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\ln(\\tan(8x) + \\sec(8x)) \\cdot \\cos(16x)',
        method: 'Product Rule and Chain Rule',
        solution: '\\begin{aligned}\ny\' &= \\frac{d}{dx}(\\ln(\\tan(8x) + \\sec(8x))) \\cdot \\cos(16x) + \\ln(\\tan(8x) + \\sec(8x)) \\cdot \\frac{d}{dx}(\\cos(16x)) \\\\\n\\frac{d}{dx}(\\ln(\\tan(8x) + \\sec(8x))) &= \\frac{1}{\\tan(8x) + \\sec(8x)} \\cdot (8\\sec^2(8x) + 8\\sec(8x)\\tan(8x)) = 8\\sec(8x) \\\\\ny\' &= 8\\sec(8x) \\cos(16x) - 16 \\ln(\\tan(8x) + \\sec(8x)) \\sin(16x)\n\\end{aligned}',
        finalAnswer: 'y\' = 8\\sec(8x) \\cos(16x) - 16 \\ln(\\tan(8x) + \\sec(8x)) \\sin(16x)'
      },
      {
        id: 'trans-superhard-t2-7',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\ln(\\tan(9x) + \\sec(9x)) \\cdot \\cos(18x)',
        method: 'Product Rule and Chain Rule',
        solution: '\\begin{aligned}\ny\' &= \\frac{d}{dx}(\\ln(\\tan(9x) + \\sec(9x))) \\cdot \\cos(18x) + \\ln(\\tan(9x) + \\sec(9x)) \\cdot \\frac{d}{dx}(\\cos(18x)) \\\\\n\\frac{d}{dx}(\\ln(\\tan(9x) + \\sec(9x))) &= \\frac{1}{\\tan(9x) + \\sec(9x)} \\cdot (9\\sec^2(9x) + 9\\sec(9x)\\tan(9x)) = 9\\sec(9x) \\\\\ny\' &= 9\\sec(9x) \\cos(18x) - 18 \\ln(\\tan(9x) + \\sec(9x)) \\sin(18x)\n\\end{aligned}',
        finalAnswer: 'y\' = 9\\sec(9x) \\cos(18x) - 18 \\ln(\\tan(9x) + \\sec(9x)) \\sin(18x)'
      },
      {
        id: 'trans-superhard-t2-8',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\ln(\\tan(10x) + \\sec(10x)) \\cdot \\cos(20x)',
        method: 'Product Rule and Chain Rule',
        solution: '\\begin{aligned}\ny\' &= \\frac{d}{dx}(\\ln(\\tan(10x) + \\sec(10x))) \\cdot \\cos(20x) + \\ln(\\tan(10x) + \\sec(10x)) \\cdot \\frac{d}{dx}(\\cos(20x)) \\\\\n\\frac{d}{dx}(\\ln(\\tan(10x) + \\sec(10x))) &= \\frac{1}{\\tan(10x) + \\sec(10x)} \\cdot (10\\sec^2(10x) + 10\\sec(10x)\\tan(10x)) = 10\\sec(10x) \\\\\ny\' &= 10\\sec(10x) \\cos(20x) - 20 \\ln(\\tan(10x) + \\sec(10x)) \\sin(20x)\n\\end{aligned}',
        finalAnswer: 'y\' = 10\\sec(10x) \\cos(20x) - 20 \\ln(\\tan(10x) + \\sec(10x)) \\sin(20x)'
      },
      {
        id: 'trans-superhard-t2-9',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\ln(\\tan(11x) + \\sec(11x)) \\cdot \\cos(22x)',
        method: 'Product Rule and Chain Rule',
        solution: '\\begin{aligned}\ny\' &= \\frac{d}{dx}(\\ln(\\tan(11x) + \\sec(11x))) \\cdot \\cos(22x) + \\ln(\\tan(11x) + \\sec(11x)) \\cdot \\frac{d}{dx}(\\cos(22x)) \\\\\n\\frac{d}{dx}(\\ln(\\tan(11x) + \\sec(11x))) &= \\frac{1}{\\tan(11x) + \\sec(11x)} \\cdot (11\\sec^2(11x) + 11\\sec(11x)\\tan(11x)) = 11\\sec(11x) \\\\\ny\' &= 11\\sec(11x) \\cos(22x) - 22 \\ln(\\tan(11x) + \\sec(11x)) \\sin(22x)\n\\end{aligned}',
        finalAnswer: 'y\' = 11\\sec(11x) \\cos(22x) - 22 \\ln(\\tan(11x) + \\sec(11x)) \\sin(22x)'
      },
      {
        id: 'trans-superhard-t2-10',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\ln(\\tan(12x) + \\sec(12x)) \\cdot \\cos(24x)',
        method: 'Product Rule and Chain Rule',
        solution: '\\begin{aligned}\ny\' &= \\frac{d}{dx}(\\ln(\\tan(12x) + \\sec(12x))) \\cdot \\cos(24x) + \\ln(\\tan(12x) + \\sec(12x)) \\cdot \\frac{d}{dx}(\\cos(24x)) \\\\\n\\frac{d}{dx}(\\ln(\\tan(12x) + \\sec(12x))) &= \\frac{1}{\\tan(12x) + \\sec(12x)} \\cdot (12\\sec^2(12x) + 12\\sec(12x)\\tan(12x)) = 12\\sec(12x) \\\\\ny\' &= 12\\sec(12x) \\cos(24x) - 24 \\ln(\\tan(12x) + \\sec(12x)) \\sin(24x)\n\\end{aligned}',
        finalAnswer: 'y\' = 12\\sec(12x) \\cos(24x) - 24 \\ln(\\tan(12x) + \\sec(12x)) \\sin(24x)'
      },
      {
        id: 'trans-superhard-t3-1',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\frac{\\sin(4x)}{1 + \\cos(4x)}',
        method: 'Double Angle Identity and Chain Rule',
        solution: '\\begin{aligned}\ny &= \\frac{2\\sin(2x)\\cos(2x)}{1 + (2\\cos^2(2x) - 1)} \\\\\ny &= \\frac{2\\sin(2x)\\cos(2x)}{2\\cos^2(2x)} \\\\\ny &= \\tan(2x) \\\\\ny\' &= 2\\sec^2(2x)\n\\end{aligned}',
        finalAnswer: 'y\' = 2\\sec^2(2x)'
      },
      {
        id: 'trans-superhard-t3-2',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\frac{\\sin(6x)}{1 + \\cos(6x)}',
        method: 'Double Angle Identity and Chain Rule',
        solution: '\\begin{aligned}\ny &= \\frac{2\\sin(3x)\\cos(3x)}{1 + (2\\cos^2(3x) - 1)} \\\\\ny &= \\frac{2\\sin(3x)\\cos(3x)}{2\\cos^2(3x)} \\\\\ny &= \\tan(3x) \\\\\ny\' &= 3\\sec^2(3x)\n\\end{aligned}',
        finalAnswer: 'y\' = 3\\sec^2(3x)'
      },
      {
        id: 'trans-superhard-t3-3',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\frac{\\sin(8x)}{1 + \\cos(8x)}',
        method: 'Double Angle Identity and Chain Rule',
        solution: '\\begin{aligned}\ny &= \\frac{2\\sin(4x)\\cos(4x)}{1 + (2\\cos^2(4x) - 1)} \\\\\ny &= \\frac{2\\sin(4x)\\cos(4x)}{2\\cos^2(4x)} \\\\\ny &= \\tan(4x) \\\\\ny\' &= 4\\sec^2(4x)\n\\end{aligned}',
        finalAnswer: 'y\' = 4\\sec^2(4x)'
      },
      {
        id: 'trans-superhard-t3-4',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\frac{\\sin(10x)}{1 + \\cos(10x)}',
        method: 'Double Angle Identity and Chain Rule',
        solution: '\\begin{aligned}\ny &= \\frac{2\\sin(5x)\\cos(5x)}{1 + (2\\cos^2(5x) - 1)} \\\\\ny &= \\frac{2\\sin(5x)\\cos(5x)}{2\\cos^2(5x)} \\\\\ny &= \\tan(5x) \\\\\ny\' &= 5\\sec^2(5x)\n\\end{aligned}',
        finalAnswer: 'y\' = 5\\sec^2(5x)'
      },
      {
        id: 'trans-superhard-t3-5',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\frac{\\sin(12x)}{1 + \\cos(12x)}',
        method: 'Double Angle Identity and Chain Rule',
        solution: '\\begin{aligned}\ny &= \\frac{2\\sin(6x)\\cos(6x)}{1 + (2\\cos^2(6x) - 1)} \\\\\ny &= \\frac{2\\sin(6x)\\cos(6x)}{2\\cos^2(6x)} \\\\\ny &= \\tan(6x) \\\\\ny\' &= 6\\sec^2(6x)\n\\end{aligned}',
        finalAnswer: 'y\' = 6\\sec^2(6x)'
      },
      {
        id: 'trans-superhard-t3-6',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\frac{\\sin(14x)}{1 + \\cos(14x)}',
        method: 'Double Angle Identity and Chain Rule',
        solution: '\\begin{aligned}\ny &= \\frac{2\\sin(7x)\\cos(7x)}{1 + (2\\cos^2(7x) - 1)} \\\\\ny &= \\frac{2\\sin(7x)\\cos(7x)}{2\\cos^2(7x)} \\\\\ny &= \\tan(7x) \\\\\ny\' &= 7\\sec^2(7x)\n\\end{aligned}',
        finalAnswer: 'y\' = 7\\sec^2(7x)'
      },
      {
        id: 'trans-superhard-t3-7',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\frac{\\sin(16x)}{1 + \\cos(16x)}',
        method: 'Double Angle Identity and Chain Rule',
        solution: '\\begin{aligned}\ny &= \\frac{2\\sin(8x)\\cos(8x)}{1 + (2\\cos^2(8x) - 1)} \\\\\ny &= \\frac{2\\sin(8x)\\cos(8x)}{2\\cos^2(8x)} \\\\\ny &= \\tan(8x) \\\\\ny\' &= 8\\sec^2(8x)\n\\end{aligned}',
        finalAnswer: 'y\' = 8\\sec^2(8x)'
      },
      {
        id: 'trans-superhard-t3-8',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\frac{\\sin(18x)}{1 + \\cos(18x)}',
        method: 'Double Angle Identity and Chain Rule',
        solution: '\\begin{aligned}\ny &= \\frac{2\\sin(9x)\\cos(9x)}{1 + (2\\cos^2(9x) - 1)} \\\\\ny &= \\frac{2\\sin(9x)\\cos(9x)}{2\\cos^2(9x)} \\\\\ny &= \\tan(9x) \\\\\ny\' &= 9\\sec^2(9x)\n\\end{aligned}',
        finalAnswer: 'y\' = 9\\sec^2(9x)'
      },
      {
        id: 'trans-superhard-t3-9',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\frac{\\sin(20x)}{1 + \\cos(20x)}',
        method: 'Double Angle Identity and Chain Rule',
        solution: '\\begin{aligned}\ny &= \\frac{2\\sin(10x)\\cos(10x)}{1 + (2\\cos^2(10x) - 1)} \\\\\ny &= \\frac{2\\sin(10x)\\cos(10x)}{2\\cos^2(10x)} \\\\\ny &= \\tan(10x) \\\\\ny\' &= 10\\sec^2(10x)\n\\end{aligned}',
        finalAnswer: 'y\' = 10\\sec^2(10x)'
      },
      {
        id: 'trans-superhard-t3-10',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\frac{\\sin(22x)}{1 + \\cos(22x)}',
        method: 'Double Angle Identity and Chain Rule',
        solution: '\\begin{aligned}\ny &= \\frac{2\\sin(11x)\\cos(11x)}{1 + (2\\cos^2(11x) - 1)} \\\\\ny &= \\frac{2\\sin(11x)\\cos(11x)}{2\\cos^2(11x)} \\\\\ny &= \\tan(11x) \\\\\ny\' &= 11\\sec^2(11x)\n\\end{aligned}',
        finalAnswer: 'y\' = 11\\sec^2(11x)'
      },
      {
        id: 'trans-superhard-t4-1',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\sqrt{\\frac{1-\\cos(8x)}{1+\\cos(8x)}}\\right)',
        method: 'Double Angle Identity and Logarithmic Differentiation',
        solution: '\\begin{aligned}\ny &= \\ln\\left(\\sqrt{\\frac{2\\sin^2(4x)}{2\\cos^2(4x)}}\\right) \\\\\ny &= \\ln\\left(\\sqrt{\\tan^2(4x)}\\right) \\\\\ny &= \\ln|\\tan(4x)| \\\\\ny\' &= \\frac{1}{\\tan(4x)} \\cdot \\sec^2(4x) \\cdot 4 \\\\\ny\' &= \\frac{4}{\\frac{\\sin(4x)}{\\cos(4x)}} \\cdot \\frac{1}{\\cos^2(4x)} = \\frac{4}{\\sin(4x)\\cos(4x)} \\\\\ny\' &= \\frac{8}{2\\sin(4x)\\cos(4x)} = \\frac{8}{\\sin(8x)} = 8\\csc(8x)\n\\end{aligned}',
        finalAnswer: 'y\' = 8\\csc(8x)'
      },
      {
        id: 'trans-superhard-t4-2',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\sqrt{\\frac{1-\\cos(10x)}{1+\\cos(10x)}}\\right)',
        method: 'Double Angle Identity and Logarithmic Differentiation',
        solution: '\\begin{aligned}\ny &= \\ln\\left(\\sqrt{\\frac{2\\sin^2(5x)}{2\\cos^2(5x)}}\\right) \\\\\ny &= \\ln\\left(\\sqrt{\\tan^2(5x)}\\right) \\\\\ny &= \\ln|\\tan(5x)| \\\\\ny\' &= \\frac{1}{\\tan(5x)} \\cdot \\sec^2(5x) \\cdot 5 \\\\\ny\' &= \\frac{5}{\\frac{\\sin(5x)}{\\cos(5x)}} \\cdot \\frac{1}{\\cos^2(5x)} = \\frac{5}{\\sin(5x)\\cos(5x)} \\\\\ny\' &= \\frac{10}{2\\sin(5x)\\cos(5x)} = \\frac{10}{\\sin(10x)} = 10\\csc(10x)\n\\end{aligned}',
        finalAnswer: 'y\' = 10\\csc(10x)'
      },
      {
        id: 'trans-superhard-t4-3',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\sqrt{\\frac{1-\\cos(12x)}{1+\\cos(12x)}}\\right)',
        method: 'Double Angle Identity and Logarithmic Differentiation',
        solution: '\\begin{aligned}\ny &= \\ln\\left(\\sqrt{\\frac{2\\sin^2(6x)}{2\\cos^2(6x)}}\\right) \\\\\ny &= \\ln\\left(\\sqrt{\\tan^2(6x)}\\right) \\\\\ny &= \\ln|\\tan(6x)| \\\\\ny\' &= \\frac{1}{\\tan(6x)} \\cdot \\sec^2(6x) \\cdot 6 \\\\\ny\' &= \\frac{6}{\\frac{\\sin(6x)}{\\cos(6x)}} \\cdot \\frac{1}{\\cos^2(6x)} = \\frac{6}{\\sin(6x)\\cos(6x)} \\\\\ny\' &= \\frac{12}{2\\sin(6x)\\cos(6x)} = \\frac{12}{\\sin(12x)} = 12\\csc(12x)\n\\end{aligned}',
        finalAnswer: 'y\' = 12\\csc(12x)'
      },
      {
        id: 'trans-superhard-t4-4',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\sqrt{\\frac{1-\\cos(14x)}{1+\\cos(14x)}}\\right)',
        method: 'Double Angle Identity and Logarithmic Differentiation',
        solution: '\\begin{aligned}\ny &= \\ln\\left(\\sqrt{\\frac{2\\sin^2(7x)}{2\\cos^2(7x)}}\\right) \\\\\ny &= \\ln\\left(\\sqrt{\\tan^2(7x)}\\right) \\\\\ny &= \\ln|\\tan(7x)| \\\\\ny\' &= \\frac{1}{\\tan(7x)} \\cdot \\sec^2(7x) \\cdot 7 \\\\\ny\' &= \\frac{7}{\\frac{\\sin(7x)}{\\cos(7x)}} \\cdot \\frac{1}{\\cos^2(7x)} = \\frac{7}{\\sin(7x)\\cos(7x)} \\\\\ny\' &= \\frac{14}{2\\sin(7x)\\cos(7x)} = \\frac{14}{\\sin(14x)} = 14\\csc(14x)\n\\end{aligned}',
        finalAnswer: 'y\' = 14\\csc(14x)'
      },
      {
        id: 'trans-superhard-t4-5',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\sqrt{\\frac{1-\\cos(16x)}{1+\\cos(16x)}}\\right)',
        method: 'Double Angle Identity and Logarithmic Differentiation',
        solution: '\\begin{aligned}\ny &= \\ln\\left(\\sqrt{\\frac{2\\sin^2(8x)}{2\\cos^2(8x)}}\\right) \\\\\ny &= \\ln\\left(\\sqrt{\\tan^2(8x)}\\right) \\\\\ny &= \\ln|\\tan(8x)| \\\\\ny\' &= \\frac{1}{\\tan(8x)} \\cdot \\sec^2(8x) \\cdot 8 \\\\\ny\' &= \\frac{8}{\\frac{\\sin(8x)}{\\cos(8x)}} \\cdot \\frac{1}{\\cos^2(8x)} = \\frac{8}{\\sin(8x)\\cos(8x)} \\\\\ny\' &= \\frac{16}{2\\sin(8x)\\cos(8x)} = \\frac{16}{\\sin(16x)} = 16\\csc(16x)\n\\end{aligned}',
        finalAnswer: 'y\' = 16\\csc(16x)'
      },
      {
        id: 'trans-superhard-t4-6',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\sqrt{\\frac{1-\\cos(18x)}{1+\\cos(18x)}}\\right)',
        method: 'Double Angle Identity and Logarithmic Differentiation',
        solution: '\\begin{aligned}\ny &= \\ln\\left(\\sqrt{\\frac{2\\sin^2(9x)}{2\\cos^2(9x)}}\\right) \\\\\ny &= \\ln\\left(\\sqrt{\\tan^2(9x)}\\right) \\\\\ny &= \\ln|\\tan(9x)| \\\\\ny\' &= \\frac{1}{\\tan(9x)} \\cdot \\sec^2(9x) \\cdot 9 \\\\\ny\' &= \\frac{9}{\\frac{\\sin(9x)}{\\cos(9x)}} \\cdot \\frac{1}{\\cos^2(9x)} = \\frac{9}{\\sin(9x)\\cos(9x)} \\\\\ny\' &= \\frac{18}{2\\sin(9x)\\cos(9x)} = \\frac{18}{\\sin(18x)} = 18\\csc(18x)\n\\end{aligned}',
        finalAnswer: 'y\' = 18\\csc(18x)'
      },
      {
        id: 'trans-superhard-t4-7',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\sqrt{\\frac{1-\\cos(20x)}{1+\\cos(20x)}}\\right)',
        method: 'Double Angle Identity and Logarithmic Differentiation',
        solution: '\\begin{aligned}\ny &= \\ln\\left(\\sqrt{\\frac{2\\sin^2(10x)}{2\\cos^2(10x)}}\\right) \\\\\ny &= \\ln\\left(\\sqrt{\\tan^2(10x)}\\right) \\\\\ny &= \\ln|\\tan(10x)| \\\\\ny\' &= \\frac{1}{\\tan(10x)} \\cdot \\sec^2(10x) \\cdot 10 \\\\\ny\' &= \\frac{10}{\\frac{\\sin(10x)}{\\cos(10x)}} \\cdot \\frac{1}{\\cos^2(10x)} = \\frac{10}{\\sin(10x)\\cos(10x)} \\\\\ny\' &= \\frac{20}{2\\sin(10x)\\cos(10x)} = \\frac{20}{\\sin(20x)} = 20\\csc(20x)\n\\end{aligned}',
        finalAnswer: 'y\' = 20\\csc(20x)'
      },
      {
        id: 'trans-superhard-t4-8',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\sqrt{\\frac{1-\\cos(22x)}{1+\\cos(22x)}}\\right)',
        method: 'Double Angle Identity and Logarithmic Differentiation',
        solution: '\\begin{aligned}\ny &= \\ln\\left(\\sqrt{\\frac{2\\sin^2(11x)}{2\\cos^2(11x)}}\\right) \\\\\ny &= \\ln\\left(\\sqrt{\\tan^2(11x)}\\right) \\\\\ny &= \\ln|\\tan(11x)| \\\\\ny\' &= \\frac{1}{\\tan(11x)} \\cdot \\sec^2(11x) \\cdot 11 \\\\\ny\' &= \\frac{11}{\\frac{\\sin(11x)}{\\cos(11x)}} \\cdot \\frac{1}{\\cos^2(11x)} = \\frac{11}{\\sin(11x)\\cos(11x)} \\\\\ny\' &= \\frac{22}{2\\sin(11x)\\cos(11x)} = \\frac{22}{\\sin(22x)} = 22\\csc(22x)\n\\end{aligned}',
        finalAnswer: 'y\' = 22\\csc(22x)'
      },
      {
        id: 'trans-superhard-t4-9',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\sqrt{\\frac{1-\\cos(24x)}{1+\\cos(24x)}}\\right)',
        method: 'Double Angle Identity and Logarithmic Differentiation',
        solution: '\\begin{aligned}\ny &= \\ln\\left(\\sqrt{\\frac{2\\sin^2(12x)}{2\\cos^2(12x)}}\\right) \\\\\ny &= \\ln\\left(\\sqrt{\\tan^2(12x)}\\right) \\\\\ny &= \\ln|\\tan(12x)| \\\\\ny\' &= \\frac{1}{\\tan(12x)} \\cdot \\sec^2(12x) \\cdot 12 \\\\\ny\' &= \\frac{12}{\\frac{\\sin(12x)}{\\cos(12x)}} \\cdot \\frac{1}{\\cos^2(12x)} = \\frac{12}{\\sin(12x)\\cos(12x)} \\\\\ny\' &= \\frac{24}{2\\sin(12x)\\cos(12x)} = \\frac{24}{\\sin(24x)} = 24\\csc(24x)\n\\end{aligned}',
        finalAnswer: 'y\' = 24\\csc(24x)'
      },
      {
        id: 'trans-superhard-t4-10',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\ln\\left(\\sqrt{\\frac{1-\\cos(26x)}{1+\\cos(26x)}}\\right)',
        method: 'Double Angle Identity and Logarithmic Differentiation',
        solution: '\\begin{aligned}\ny &= \\ln\\left(\\sqrt{\\frac{2\\sin^2(13x)}{2\\cos^2(13x)}}\\right) \\\\\ny &= \\ln\\left(\\sqrt{\\tan^2(13x)}\\right) \\\\\ny &= \\ln|\\tan(13x)| \\\\\ny\' &= \\frac{1}{\\tan(13x)} \\cdot \\sec^2(13x) \\cdot 13 \\\\\ny\' &= \\frac{13}{\\frac{\\sin(13x)}{\\cos(13x)}} \\cdot \\frac{1}{\\cos^2(13x)} = \\frac{13}{\\sin(13x)\\cos(13x)} \\\\\ny\' &= \\frac{26}{2\\sin(13x)\\cos(13x)} = \\frac{26}{\\sin(26x)} = 26\\csc(26x)\n\\end{aligned}',
        finalAnswer: 'y\' = 26\\csc(26x)'
      },
      {
        id: 'trans-superhard-t5-1',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = e^{\\sin^2(5x)}',
        method: 'Chain Rule and Double Angle Identity',
        solution: '\\begin{aligned}\ny\' &= e^{\\sin^2(5x)} \\cdot \\frac{d}{dx}(\\sin^2(5x)) \\\\\ny\' &= e^{\\sin^2(5x)} \\cdot 2\\sin(5x)\\cos(5x) \\cdot 5 \\\\\ny\' &= 5 e^{\\sin^2(5x)} (2\\sin(5x)\\cos(5x)) \\\\\ny\' &= 5 e^{\\sin^2(5x)} \\sin(10x)\n\\end{aligned}',
        finalAnswer: 'y\' = 5 e^{\\sin^2(5x)} \\sin(10x)'
      },
      {
        id: 'trans-superhard-t5-2',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = e^{\\sin^2(6x)}',
        method: 'Chain Rule and Double Angle Identity',
        solution: '\\begin{aligned}\ny\' &= e^{\\sin^2(6x)} \\cdot \\frac{d}{dx}(\\sin^2(6x)) \\\\\ny\' &= e^{\\sin^2(6x)} \\cdot 2\\sin(6x)\\cos(6x) \\cdot 6 \\\\\ny\' &= 6 e^{\\sin^2(6x)} (2\\sin(6x)\\cos(6x)) \\\\\ny\' &= 6 e^{\\sin^2(6x)} \\sin(12x)\n\\end{aligned}',
        finalAnswer: 'y\' = 6 e^{\\sin^2(6x)} \\sin(12x)'
      },
      {
        id: 'trans-superhard-t5-3',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = e^{\\sin^2(7x)}',
        method: 'Chain Rule and Double Angle Identity',
        solution: '\\begin{aligned}\ny\' &= e^{\\sin^2(7x)} \\cdot \\frac{d}{dx}(\\sin^2(7x)) \\\\\ny\' &= e^{\\sin^2(7x)} \\cdot 2\\sin(7x)\\cos(7x) \\cdot 7 \\\\\ny\' &= 7 e^{\\sin^2(7x)} (2\\sin(7x)\\cos(7x)) \\\\\ny\' &= 7 e^{\\sin^2(7x)} \\sin(14x)\n\\end{aligned}',
        finalAnswer: 'y\' = 7 e^{\\sin^2(7x)} \\sin(14x)'
      },
      {
        id: 'trans-superhard-t5-4',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = e^{\\sin^2(8x)}',
        method: 'Chain Rule and Double Angle Identity',
        solution: '\\begin{aligned}\ny\' &= e^{\\sin^2(8x)} \\cdot \\frac{d}{dx}(\\sin^2(8x)) \\\\\ny\' &= e^{\\sin^2(8x)} \\cdot 2\\sin(8x)\\cos(8x) \\cdot 8 \\\\\ny\' &= 8 e^{\\sin^2(8x)} (2\\sin(8x)\\cos(8x)) \\\\\ny\' &= 8 e^{\\sin^2(8x)} \\sin(16x)\n\\end{aligned}',
        finalAnswer: 'y\' = 8 e^{\\sin^2(8x)} \\sin(16x)'
      },
      {
        id: 'trans-superhard-t5-5',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = e^{\\sin^2(9x)}',
        method: 'Chain Rule and Double Angle Identity',
        solution: '\\begin{aligned}\ny\' &= e^{\\sin^2(9x)} \\cdot \\frac{d}{dx}(\\sin^2(9x)) \\\\\ny\' &= e^{\\sin^2(9x)} \\cdot 2\\sin(9x)\\cos(9x) \\cdot 9 \\\\\ny\' &= 9 e^{\\sin^2(9x)} (2\\sin(9x)\\cos(9x)) \\\\\ny\' &= 9 e^{\\sin^2(9x)} \\sin(18x)\n\\end{aligned}',
        finalAnswer: 'y\' = 9 e^{\\sin^2(9x)} \\sin(18x)'
      },
      {
        id: 'trans-superhard-t5-6',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = e^{\\sin^2(10x)}',
        method: 'Chain Rule and Double Angle Identity',
        solution: '\\begin{aligned}\ny\' &= e^{\\sin^2(10x)} \\cdot \\frac{d}{dx}(\\sin^2(10x)) \\\\\ny\' &= e^{\\sin^2(10x)} \\cdot 2\\sin(10x)\\cos(10x) \\cdot 10 \\\\\ny\' &= 10 e^{\\sin^2(10x)} (2\\sin(10x)\\cos(10x)) \\\\\ny\' &= 10 e^{\\sin^2(10x)} \\sin(20x)\n\\end{aligned}',
        finalAnswer: 'y\' = 10 e^{\\sin^2(10x)} \\sin(20x)'
      },
      {
        id: 'trans-superhard-t5-7',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = e^{\\sin^2(11x)}',
        method: 'Chain Rule and Double Angle Identity',
        solution: '\\begin{aligned}\ny\' &= e^{\\sin^2(11x)} \\cdot \\frac{d}{dx}(\\sin^2(11x)) \\\\\ny\' &= e^{\\sin^2(11x)} \\cdot 2\\sin(11x)\\cos(11x) \\cdot 11 \\\\\ny\' &= 11 e^{\\sin^2(11x)} (2\\sin(11x)\\cos(11x)) \\\\\ny\' &= 11 e^{\\sin^2(11x)} \\sin(22x)\n\\end{aligned}',
        finalAnswer: 'y\' = 11 e^{\\sin^2(11x)} \\sin(22x)'
      },
      {
        id: 'trans-superhard-t5-8',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = e^{\\sin^2(12x)}',
        method: 'Chain Rule and Double Angle Identity',
        solution: '\\begin{aligned}\ny\' &= e^{\\sin^2(12x)} \\cdot \\frac{d}{dx}(\\sin^2(12x)) \\\\\ny\' &= e^{\\sin^2(12x)} \\cdot 2\\sin(12x)\\cos(12x) \\cdot 12 \\\\\ny\' &= 12 e^{\\sin^2(12x)} (2\\sin(12x)\\cos(12x)) \\\\\ny\' &= 12 e^{\\sin^2(12x)} \\sin(24x)\n\\end{aligned}',
        finalAnswer: 'y\' = 12 e^{\\sin^2(12x)} \\sin(24x)'
      },
      {
        id: 'trans-superhard-t5-9',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = e^{\\sin^2(13x)}',
        method: 'Chain Rule and Double Angle Identity',
        solution: '\\begin{aligned}\ny\' &= e^{\\sin^2(13x)} \\cdot \\frac{d}{dx}(\\sin^2(13x)) \\\\\ny\' &= e^{\\sin^2(13x)} \\cdot 2\\sin(13x)\\cos(13x) \\cdot 13 \\\\\ny\' &= 13 e^{\\sin^2(13x)} (2\\sin(13x)\\cos(13x)) \\\\\ny\' &= 13 e^{\\sin^2(13x)} \\sin(26x)\n\\end{aligned}',
        finalAnswer: 'y\' = 13 e^{\\sin^2(13x)} \\sin(26x)'
      },
      {
        id: 'trans-superhard-t5-10',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = e^{\\sin^2(14x)}',
        method: 'Chain Rule and Double Angle Identity',
        solution: '\\begin{aligned}\ny\' &= e^{\\sin^2(14x)} \\cdot \\frac{d}{dx}(\\sin^2(14x)) \\\\\ny\' &= e^{\\sin^2(14x)} \\cdot 2\\sin(14x)\\cos(14x) \\cdot 14 \\\\\ny\' &= 14 e^{\\sin^2(14x)} (2\\sin(14x)\\cos(14x)) \\\\\ny\' &= 14 e^{\\sin^2(14x)} \\sin(28x)\n\\end{aligned}',
        finalAnswer: 'y\' = 14 e^{\\sin^2(14x)} \\sin(28x)'
      },
      {
        id: 'trans-curated-3',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\log_2(\\cosh(\\sin(e^x)))',
        solution: '\\begin{aligned}\n y\' &= \\frac{1}{\\cosh(\\sin(e^x)) \\ln 2} \\cdot \\frac{d}{dx}(\\cosh(\\sin(e^x))) \\\\\n y\' &= \\frac{1}{\\cosh(\\sin(e^x)) \\ln 2} \\cdot \\sinh(\\sin(e^x)) \\cdot \\frac{d}{dx}(\\sin(e^x)) \\\\\n y\' &= \\frac{\\sinh(\\sin(e^x))}{\\cosh(\\sin(e^x)) \\ln 2} \\cdot \\cos(e^x) \\cdot \\frac{d}{dx}(e^x) \\\\\n y\' &= \\frac{\\tanh(\\sin(e^x))}{\\ln 2} \\cdot \\cos(e^x) \\cdot e^x \\\\\n y\' &= \\frac{e^x \\cos(e^x) \\tanh(\\sin(e^x))}{\\ln 2}\n\\end{aligned}',
        finalAnswer: 'y\' = \\frac{e^x \\cos(e^x) \\tanh(\\sin(e^x))}{\\ln 2}'
      },
      {
        id: 'trans-curated-4',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = (\\arctan x)^{e^{-x}}',
        method: 'Strategy: Because we have a variable base raised to a variable power, standard exponential rules fail. We must use logarithmic differentiation: take the natural log of both sides to bring the exponent down, then differentiate implicitly using the product rule. Identities: \\ln(a^b) = b \\ln a.',
        solution: '\\begin{aligned}\n \\ln y &= \\ln\\left( (\\arctan x)^{e^{-x}} \\right) \\\\\n \\ln y &= e^{-x} \\ln(\\arctan x) \\\\\n \\frac{d}{dx}(\\ln y) &= \\frac{d}{dx}\\left( e^{-x} \\ln(\\arctan x) \\right) \\\\\n \\frac{y\'}{y} &= -e^{-x} \\ln(\\arctan x) + e^{-x} \\cdot \\frac{1}{\\arctan x} \\cdot \\frac{1}{1+x^2} \\\\\n y\' &= y \\left[ \\frac{e^{-x}}{(1+x^2)\\arctan x} - e^{-x} \\ln(\\arctan x) \\right] \\\\\n y\' &= (\\arctan x)^{e^{-x}} e^{-x} \\left[ \\frac{1}{(1+x^2)\\arctan x} - \\ln(\\arctan x) \\right]\n\\end{aligned}',
        finalAnswer: 'y\' = (\\arctan x)^{e^{-x}} e^{-x} \\left[ \\frac{1}{(1+x^2)\\arctan x} - \\ln(\\arctan x) \\right]'
      },
      {
        id: 'trans-curated-5',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\ln\\left( \\left[ \\frac{\\cosh^2(x) - \\sinh^2(x)}{\\sec^2(x) - \\tan^2(x)} \\right]^{\\pi} \\cdot \\frac{e^{\\arctan(\\tan(x^3))}}{\\sqrt{1 - \\sin^2(x)}} \\right)',
        method: 'Strategy: At first glance, this looks impossible to differentiate directly. The key is to aggressively apply fundamental identities to collapse the massive expression into a simple one before taking a single derivative. Identities: 1) \\cosh^2(x) - \\sinh^2(x) = 1. 2) \\sec^2(x) - \\tan^2(x) = 1. 3) \\arctan(\\tan(\\theta)) = \\theta. 4) 1 - \\sin^2(x) = \\cos^2(x). 5) \\ln(A/B) = \\ln A - \\ln B.',
        solution: '\\begin{aligned}\n y &= \\ln\\left( \\left[ \\frac{1}{1} \\right]^{\\pi} \\cdot \\frac{e^{x^3}}{\\sqrt{\\cos^2(x)}} \\right) \\\\\n y &= \\ln\\left( 1 \\cdot \\frac{e^{x^3}}{\\cos x} \\right) \\\\\n y &= \\ln(e^{x^3}) - \\ln(\\cos x) \\\\\n y &= x^3 - \\ln(\\cos x) \\\\\n y\' &= \\frac{d}{dx}(x^3) - \\frac{d}{dx}(\\ln(\\cos x)) \\\\\n y\' &= 3x^2 - \\frac{1}{\\cos x}(-\\sin x) \\\\\n y\' &= 3x^2 + \\tan x\n\\end{aligned}',
        finalAnswer: 'y\' = 3x^2 + \\tan x'
      }
    ,
      {
        id: 'trans-curated-6',
        difficulty: 'Easy',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\sin(e^x)',
        method: 'Strategy: Chain rule: outer is sine, inner is exponential. Identities: None strictly needed.',
        solution: '\\begin{aligned}\ny\' &= \\cos(e^x) \\cdot \\frac{d}{dx}(e^x) \\\\\n y\' &= e^x \\cos(e^x)\n\\end{aligned}',
        finalAnswer: 'y\' = e^x \\cos(e^x)'
      },
      {
        id: 'trans-curated-7',
        difficulty: 'Easy',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = e^{\\cosh x}',
        method: 'Strategy: Chain rule: outer is exponential, inner is hyperbolic cosine. Identities: None strictly needed.',
        solution: '\\begin{aligned}\ny\' &= e^{\\cosh x} \\cdot \\frac{d}{dx}(\\cosh x) \\\\\n y\' &= \\sinh x \\cdot e^{\\cosh x}\n\\end{aligned}',
        finalAnswer: 'y\' = \\sinh x \\cdot e^{\\cosh x}'
      },
      {
        id: 'trans-curated-8',
        difficulty: 'Easy',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\ln(\\arctan x)',
        method: 'Strategy: Chain rule: outer is natural log, inner is inverse tangent. Identities: None strictly needed.',
        solution: '\\begin{aligned}\ny\' &= \\frac{1}{\\arctan x} \\cdot \\frac{d}{dx}(\\arctan x) \\\\\n y\' &= \\frac{1}{\\arctan x} \\cdot \\frac{1}{1+x^2} \\\\\n y\' &= \\frac{1}{(1+x^2)\\arctan x}\n\\end{aligned}',
        finalAnswer: 'y\' = \\frac{1}{(1+x^2)\\arctan x}'
      },
      {
        id: 'trans-curated-9',
        difficulty: 'Easy',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\sinh(\\log_2 x)',
        method: 'Strategy: Chain rule: outer is hyperbolic sine, inner is base-2 logarithm. Identities: None strictly needed.',
        solution: '\\begin{aligned}\ny\' &= \\cosh(\\log_2 x) \\cdot \\frac{d}{dx}(\\log_2 x) \\\\\n y\' &= \\cosh(\\log_2 x) \\cdot \\frac{1}{x \\ln 2} \\\\\n y\' &= \\frac{\\cosh(\\log_2 x)}{x \\ln 2}\n\\end{aligned}',
        finalAnswer: 'y\' = \\frac{\\cosh(\\log_2 x)}{x \\ln 2}'
      },
      {
        id: 'trans-curated-10',
        difficulty: 'Easy',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\arcsin(2^x)',
        method: 'Strategy: Chain rule: outer is inverse sine, inner is base-2 exponential. Identities: None strictly needed.',
        solution: '\\begin{aligned}\ny\' &= \\frac{1}{\\sqrt{1-(2^x)^2}} \\cdot \\frac{d}{dx}(2^x) \\\\\n y\' &= \\frac{1}{\\sqrt{1-4^x}} \\cdot 2^x \\ln 2 \\\\\n y\' &= \\frac{2^x \\ln 2}{\\sqrt{1-4^x}}\n\\end{aligned}',
        finalAnswer: 'y\' = \\frac{2^x \\ln 2}{\\sqrt{1-4^x}}'
      },
      {
        id: 'trans-curated-11',
        difficulty: 'Easy',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = 10^{\\sec x}',
        method: 'Strategy: Chain rule: outer is base-10 exponential, inner is secant. Identities: None strictly needed.',
        solution: '\\begin{aligned}\ny\' &= 10^{\\sec x} \\ln 10 \\cdot \\frac{d}{dx}(\\sec x) \\\\\n y\' &= 10^{\\sec x} \\ln 10 \\cdot \\sec x \\tan x\n\\end{aligned}',
        finalAnswer: 'y\' = 10^{\\sec x} \\ln 10 \\sec x \\tan x'
      },
      {
        id: 'trans-curated-12',
        difficulty: 'Easy',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\cosh(\\arcsin x)',
        method: 'Strategy: Chain rule: outer is hyperbolic cosine, inner is inverse sine. Identities: None strictly needed.',
        solution: '\\begin{aligned}\ny\' &= \\sinh(\\arcsin x) \\cdot \\frac{d}{dx}(\\arcsin x) \\\\\n y\' &= \\sinh(\\arcsin x) \\cdot \\frac{1}{\\sqrt{1-x^2}} \\\\\n y\' &= \\frac{\\sinh(\\arcsin x)}{\\sqrt{1-x^2}}\n\\end{aligned}',
        finalAnswer: 'y\' = \\frac{\\sinh(\\arcsin x)}{\\sqrt{1-x^2}}'
      },
      {
        id: 'trans-curated-13',
        difficulty: 'Easy',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\log_{10}(\\tanh x)',
        method: 'Strategy: Chain rule: outer is base-10 log, inner is hyperbolic tangent. Identities: None strictly needed.',
        solution: '\\begin{aligned}\ny\' &= \\frac{1}{\\tanh x \\ln 10} \\cdot \\frac{d}{dx}(\\tanh x) \\\\\n y\' &= \\frac{1}{\\tanh x \\ln 10} \\cdot \\text{sech}^2 x \\\\\n y\' &= \\frac{\\text{sech}^2 x}{\\tanh x \\ln 10}\n\\end{aligned}',
        finalAnswer: 'y\' = \\frac{\\text{sech}^2 x}{\\tanh x \\ln 10}'
      },
      {
        id: 'trans-curated-14',
        difficulty: 'Easy',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\arctan(\\ln x)',
        method: 'Strategy: Chain rule: outer is inverse tangent, inner is natural log. Identities: None strictly needed.',
        solution: '\\begin{aligned}\ny\' &= \\frac{1}{1+(\\ln x)^2} \\cdot \\frac{d}{dx}(\\ln x) \\\\\n y\' &= \\frac{1}{1+(\\ln x)^2} \\cdot \\frac{1}{x} \\\\\n y\' &= \\frac{1}{x(1+(\\ln x)^2)}\n\\end{aligned}',
        finalAnswer: 'y\' = \\frac{1}{x(1+(\\ln x)^2)}'
      },
      {
        id: 'trans-curated-15',
        difficulty: 'Easy',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\tan(\\text{arsinh } x)',
        method: 'Strategy: Chain rule: outer is tangent, inner is inverse hyperbolic sine. Identities: None strictly needed.',
        solution: '\\begin{aligned}\ny\' &= \\sec^2(\\text{arsinh } x) \\cdot \\frac{d}{dx}(\\text{arsinh } x) \\\\\n y\' &= \\sec^2(\\text{arsinh } x) \\cdot \\frac{1}{\\sqrt{x^2+1}} \\\\\n y\' &= \\frac{\\sec^2(\\text{arsinh } x)}{\\sqrt{x^2+1}}\n\\end{aligned}',
        finalAnswer: 'y\' = \\frac{\\sec^2(\\text{arsinh } x)}{\\sqrt{x^2+1}}'
      },
      {
        id: 'trans-curated-16',
        difficulty: 'Medium',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\frac{\\sin(2x)}{\\cos x}',
        method: 'Strategy: Use double-angle identity for sine to simplify before differentiating. Identity Application: \\sin(2x) = 2\\sin x \\cos x.',
        solution: '\\begin{aligned}\ny &= \\frac{2\\sin x \\cos x}{\\cos x} = 2\\sin x \\\\\n y\' &= 2\\cos x\n\\end{aligned}',
        finalAnswer: 'y\' = 2\\cos x'
      },
      {
        id: 'trans-curated-17',
        difficulty: 'Medium',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = e^{\\ln(\\cosh x)} \\cdot \\sinh x',
        method: 'Strategy: Use inverse property of exponentials and logs to simplify. Identity Application: e^{\\ln(u)} = u.',
        solution: '\\begin{aligned}\ny &= \\cosh x \\cdot \\sinh x \\\\\n y\' &= \\sinh x \\cdot \\sinh x + \\cosh x \\cdot \\cosh x \\\\\n y\' &= \\sinh^2 x + \\cosh^2 x\n\\end{aligned}',
        finalAnswer: 'y\' = \\sinh^2 x + \\cosh^2 x'
      },
      {
        id: 'trans-curated-18',
        difficulty: 'Medium',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\frac{\\sec^2 x - 1}{\\tan x}',
        method: 'Strategy: Use Pythagorean identity to simplify the numerator. Identity Application: \\sec^2 x - 1 = \\tan^2 x.',
        solution: '\\begin{aligned}\ny &= \\frac{\\tan^2 x}{\\tan x} = \\tan x \\\\\n y\' &= \\sec^2 x\n\\end{aligned}',
        finalAnswer: 'y\' = \\sec^2 x'
      },
      {
        id: 'trans-curated-19',
        difficulty: 'Medium',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\ln(e^{x^2 \\sin x})',
        method: 'Strategy: Use inverse property of logs and exponentials. Identity Application: \\ln(e^u) = u.',
        solution: '\\begin{aligned}\ny &= x^2 \\sin x \\\\\n y\' &= 2x \\sin x + x^2 \\cos x\n\\end{aligned}',
        finalAnswer: 'y\' = x(2\\sin x + x\\cos x)'
      },
      {
        id: 'trans-curated-20',
        difficulty: 'Medium',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\frac{\\cosh^2 x - \\sinh^2 x}{e^x}',
        method: 'Strategy: Use fundamental hyperbolic identity. Identity Application: \\cosh^2 x - \\sinh^2 x = 1.',
        solution: '\\begin{aligned}\ny &= \\frac{1}{e^x} = e^{-x} \\\\\n y\' &= -e^{-x}\n\\end{aligned}',
        finalAnswer: 'y\' = -e^{-x}'
      },
      {
        id: 'trans-curated-21',
        difficulty: 'Medium',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = 2^{\\log_2(\\arctan x)} \\cdot x^2',
        method: 'Strategy: Use inverse property of base-2 exponential and log. Identity Application: a^{\\log_a(u)} = u.',
        solution: '\\begin{aligned}\ny &= \\arctan x \\cdot x^2 \\\\\n y\' &= \\frac{1}{1+x^2} \\cdot x^2 + \\arctan x \\cdot 2x \\\\\n y\' &= \\frac{x^2}{1+x^2} + 2x\\arctan x\n\\end{aligned}',
        finalAnswer: 'y\' = \\frac{x^2}{1+x^2} + 2x\\arctan x'
      },
      {
        id: 'trans-curated-22',
        difficulty: 'Medium',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\frac{\\sin^2 x + \\cos^2 x}{\\arcsin x}',
        method: 'Strategy: Use Pythagorean identity. Identity Application: \\sin^2 x + \\cos^2 x = 1.',
        solution: '\\begin{aligned}\ny &= \\frac{1}{\\arcsin x} = (\\arcsin x)^{-1} \\\\\n y\' &= -(\\arcsin x)^{-2} \\cdot \\frac{1}{\\sqrt{1-x^2}} \\\\\n y\' &= -\\frac{1}{\\sqrt{1-x^2}(\\arcsin x)^2}\n\\end{aligned}',
        finalAnswer: 'y\' = -\\frac{1}{\\sqrt{1-x^2}(\\arcsin x)^2}'
      },
      {
        id: 'trans-curated-23',
        difficulty: 'Medium',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\sinh(2x) \\cdot \\text{csch } x',
        method: 'Strategy: Use double-angle identity for hyperbolic sine. Identity Application: \\sinh(2x) = 2\\sinh x \\cosh x, \\text{csch } x = 1/\\sinh x.',
        solution: '\\begin{aligned}\ny &= 2\\sinh x \\cosh x \\cdot \\frac{1}{\\sinh x} = 2\\cosh x \\\\\n y\' &= 2\\sinh x\n\\end{aligned}',
        finalAnswer: 'y\' = 2\\sinh x'
      },
      {
        id: 'trans-curated-24',
        difficulty: 'Medium',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\ln(x^3) - 3\\ln x + \\tan x',
        method: 'Strategy: Use logarithm power rule to cancel terms. Identity Application: \\ln(x^a) = a\\ln x.',
        solution: '\\begin{aligned}\ny &= 3\\ln x - 3\\ln x + \\tan x = \\tan x \\\\\n y\' &= \\sec^2 x\n\\end{aligned}',
        finalAnswer: 'y\' = \\sec^2 x'
      },
      {
        id: 'trans-curated-25',
        difficulty: 'Medium',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = e^{x + \\ln(\\cos x)}',
        method: 'Strategy: Use exponential addition rule and inverse properties. Identity Application: e^{a+b} = e^a e^b, e^{\\ln u} = u.',
        solution: '\\begin{aligned}\ny &= e^x \\cdot e^{\\ln(\\cos x)} = e^x \\cos x \\\\\n y\' &= e^x \\cos x + e^x (-\\sin x) \\\\\n y\' &= e^x(\\cos x - \\sin x)\n\\end{aligned}',
        finalAnswer: 'y\' = e^x(\\cos x - \\sin x)'
      },
      {
        id: 'trans-curated-26',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\sin(e^{\\cosh x})',
        method: 'Strategy: This is a multi-layered chain rule problem. Peel the layers from the outermost function to the innermost. Identities: None strictly needed.',
        solution: '\\begin{aligned}\ny\' &= \\text{Apply chain rule repeatedly from outside in.} \\\\\n y\' &= \\cos(e^{\\cosh x}) \\cdot e^{\\cosh x} \\cdot \\sinh x\n\\end{aligned}',
        finalAnswer: 'y\' = \\cos(e^{\\cosh x}) \\cdot e^{\\cosh x} \\cdot \\sinh x'
      },
      {
        id: 'trans-curated-27',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\ln(\\arcsin(2^x))',
        method: 'Strategy: This is a multi-layered chain rule problem. Peel the layers from the outermost function to the innermost. Identities: None strictly needed.',
        solution: '\\begin{aligned}\ny\' &= \\text{Apply chain rule repeatedly from outside in.} \\\\\n y\' &= \\frac{2^x \\ln 2}{\\arcsin(2^x) \\sqrt{1-4^x}}\n\\end{aligned}',
        finalAnswer: 'y\' = \\frac{2^x \\ln 2}{\\arcsin(2^x) \\sqrt{1-4^x}}'
      },
      {
        id: 'trans-curated-28',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\cosh(\\sqrt{\\ln x})',
        method: 'Strategy: This is a multi-layered chain rule problem. Peel the layers from the outermost function to the innermost. Identities: None strictly needed.',
        solution: '\\begin{aligned}\ny\' &= \\text{Apply chain rule repeatedly from outside in.} \\\\\n y\' &= \\sinh(\\sqrt{\\ln x}) \\cdot \\frac{1}{2\\sqrt{\\ln x}} \\cdot \\frac{1}{x}\n\\end{aligned}',
        finalAnswer: 'y\' = \\sinh(\\sqrt{\\ln x}) \\cdot \\frac{1}{2\\sqrt{\\ln x}} \\cdot \\frac{1}{x}'
      },
      {
        id: 'trans-curated-29',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\arctan(e^{\\sin x})',
        method: 'Strategy: This is a multi-layered chain rule problem. Peel the layers from the outermost function to the innermost. Identities: None strictly needed.',
        solution: '\\begin{aligned}\ny\' &= \\text{Apply chain rule repeatedly from outside in.} \\\\\n y\' &= \\frac{e^{\\sin x} \\cos x}{1 + e^{2\\sin x}}\n\\end{aligned}',
        finalAnswer: 'y\' = \\frac{e^{\\sin x} \\cos x}{1 + e^{2\\sin x}}'
      },
      {
        id: 'trans-curated-30',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = e^{\\sinh(\\cos x)}',
        method: 'Strategy: This is a multi-layered chain rule problem. Peel the layers from the outermost function to the innermost. Identities: None strictly needed.',
        solution: '\\begin{aligned}\ny\' &= \\text{Apply chain rule repeatedly from outside in.} \\\\\n y\' &= e^{\\sinh(\\cos x)} \\cdot \\cosh(\\cos x) \\cdot (-\\sin x)\n\\end{aligned}',
        finalAnswer: 'y\' = e^{\\sinh(\\cos x)} \\cdot \\cosh(\\cos x) \\cdot (-\\sin x)'
      },
      {
        id: 'trans-curated-31',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\log_2(\\tan(e^x))',
        method: 'Strategy: This is a multi-layered chain rule problem. Peel the layers from the outermost function to the innermost. Identities: None strictly needed.',
        solution: '\\begin{aligned}\ny\' &= \\text{Apply chain rule repeatedly from outside in.} \\\\\n y\' &= \\frac{\\sec^2(e^x) \\cdot e^x}{\\tan(e^x) \\ln 2}\n\\end{aligned}',
        finalAnswer: 'y\' = \\frac{\\sec^2(e^x) \\cdot e^x}{\\tan(e^x) \\ln 2}'
      },
      {
        id: 'trans-curated-32',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\arcsin(\\ln(\\cosh x))',
        method: 'Strategy: This is a multi-layered chain rule problem. Peel the layers from the outermost function to the innermost. Identities: None strictly needed.',
        solution: '\\begin{aligned}\ny\' &= \\text{Apply chain rule repeatedly from outside in.} \\\\\n y\' &= \\frac{\\tanh x}{\\sqrt{1 - (\\ln(\\cosh x))^2}}\n\\end{aligned}',
        finalAnswer: 'y\' = \\frac{\\tanh x}{\\sqrt{1 - (\\ln(\\cosh x))^2}}'
      },
      {
        id: 'trans-curated-33',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\sinh(2^{\\arctan x})',
        method: 'Strategy: This is a multi-layered chain rule problem. Peel the layers from the outermost function to the innermost. Identities: None strictly needed.',
        solution: '\\begin{aligned}\ny\' &= \\text{Apply chain rule repeatedly from outside in.} \\\\\n y\' &= \\cosh(2^{\\arctan x}) \\cdot 2^{\\arctan x} \\ln 2 \\cdot \\frac{1}{1+x^2}\n\\end{aligned}',
        finalAnswer: 'y\' = \\cosh(2^{\\arctan x}) \\cdot 2^{\\arctan x} \\ln 2 \\cdot \\frac{1}{1+x^2}'
      },
      {
        id: 'trans-curated-34',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\tan(\\ln(\\arcsin x))',
        method: 'Strategy: This is a multi-layered chain rule problem. Peel the layers from the outermost function to the innermost. Identities: None strictly needed.',
        solution: '\\begin{aligned}\ny\' &= \\text{Apply chain rule repeatedly from outside in.} \\\\\n y\' &= \\sec^2(\\ln(\\arcsin x)) \\cdot \\frac{1}{\\arcsin x} \\cdot \\frac{1}{\\sqrt{1-x^2}}\n\\end{aligned}',
        finalAnswer: 'y\' = \\sec^2(\\ln(\\arcsin x)) \\cdot \\frac{1}{\\arcsin x} \\cdot \\frac{1}{\\sqrt{1-x^2}}'
      },
      {
        id: 'trans-curated-35',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = e^{\\cos(\\sinh x)}',
        method: 'Strategy: This is a multi-layered chain rule problem. Peel the layers from the outermost function to the innermost. Identities: None strictly needed.',
        solution: '\\begin{aligned}\ny\' &= \\text{Apply chain rule repeatedly from outside in.} \\\\\n y\' &= e^{\\cos(\\sinh x)} \\cdot (-\\sin(\\sinh x)) \\cdot \\cosh x\n\\end{aligned}',
        finalAnswer: 'y\' = e^{\\cos(\\sinh x)} \\cdot (-\\sin(\\sinh x)) \\cdot \\cosh x'
      },
      {
        id: 'trans-curated-36',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = (\\sin x)^{\\cos x}',
        method: 'Strategy: Variable base raised to a variable power requires logarithmic differentiation. Take the natural log of both sides, use log properties to bring down the exponent, and differentiate implicitly using the product rule.',
        solution: '\\begin{aligned}\n\\ln y &= \\ln((\\sin x)^{\\cos x}) \\\\\n \\frac{y\'}{y} &= \\frac{d}{dx}[ \\text{exponent} \\cdot \\ln(\\text{base}) ] \\\\\n y\' &= (\\sin x)^{\\cos x} [ -\\sin x \\ln(\\sin x) + \\cos x \\cot x ]\n\\end{aligned}',
        finalAnswer: 'y\' = (\\sin x)^{\\cos x} [ -\\sin x \\ln(\\sin x) + \\cos x \\cot x ]'
      },
      {
        id: 'trans-curated-37',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = (\\ln x)^{e^x}',
        method: 'Strategy: Variable base raised to a variable power requires logarithmic differentiation. Take the natural log of both sides, use log properties to bring down the exponent, and differentiate implicitly using the product rule.',
        solution: '\\begin{aligned}\n\\ln y &= \\ln((\\ln x)^{e^x}) \\\\\n \\frac{y\'}{y} &= \\frac{d}{dx}[ \\text{exponent} \\cdot \\ln(\\text{base}) ] \\\\\n y\' &= (\\ln x)^{e^x} [ e^x \\ln(\\ln x) + \\frac{e^x}{x \\ln x} ]\n\\end{aligned}',
        finalAnswer: 'y\' = (\\ln x)^{e^x} [ e^x \\ln(\\ln x) + \\frac{e^x}{x \\ln x} ]'
      },
      {
        id: 'trans-curated-38',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = (\\arctan x)^{\\sinh x}',
        method: 'Strategy: Variable base raised to a variable power requires logarithmic differentiation. Take the natural log of both sides, use log properties to bring down the exponent, and differentiate implicitly using the product rule.',
        solution: '\\begin{aligned}\n\\ln y &= \\ln((\\arctan x)^{\\sinh x}) \\\\\n \\frac{y\'}{y} &= \\frac{d}{dx}[ \\text{exponent} \\cdot \\ln(\\text{base}) ] \\\\\n y\' &= (\\arctan x)^{\\sinh x} [ \\cosh x \\ln(\\arctan x) + \\frac{\\sinh x}{(1+x^2)\\arctan x} ]\n\\end{aligned}',
        finalAnswer: 'y\' = (\\arctan x)^{\\sinh x} [ \\cosh x \\ln(\\arctan x) + \\frac{\\sinh x}{(1+x^2)\\arctan x} ]'
      },
      {
        id: 'trans-curated-39',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = (\\cosh x)^{\\ln x}',
        method: 'Strategy: Variable base raised to a variable power requires logarithmic differentiation. Take the natural log of both sides, use log properties to bring down the exponent, and differentiate implicitly using the product rule.',
        solution: '\\begin{aligned}\n\\ln y &= \\ln((\\cosh x)^{\\ln x}) \\\\\n \\frac{y\'}{y} &= \\frac{d}{dx}[ \\text{exponent} \\cdot \\ln(\\text{base}) ] \\\\\n y\' &= (\\cosh x)^{\\ln x} [ \\frac{1}{x} \\ln(\\cosh x) + \\ln x \\tanh x ]\n\\end{aligned}',
        finalAnswer: 'y\' = (\\cosh x)^{\\ln x} [ \\frac{1}{x} \\ln(\\cosh x) + \\ln x \\tanh x ]'
      },
      {
        id: 'trans-curated-40',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = (e^x + 1)^{\\arcsin x}',
        method: 'Strategy: Variable base raised to a variable power requires logarithmic differentiation. Take the natural log of both sides, use log properties to bring down the exponent, and differentiate implicitly using the product rule.',
        solution: '\\begin{aligned}\n\\ln y &= \\ln((e^x + 1)^{\\arcsin x}) \\\\\n \\frac{y\'}{y} &= \\frac{d}{dx}[ \\text{exponent} \\cdot \\ln(\\text{base}) ] \\\\\n y\' &= (e^x + 1)^{\\arcsin x} [ \\frac{\\ln(e^x + 1)}{\\sqrt{1-x^2}} + \\frac{e^x \\arcsin x}{e^x + 1} ]\n\\end{aligned}',
        finalAnswer: 'y\' = (e^x + 1)^{\\arcsin x} [ \\frac{\\ln(e^x + 1)}{\\sqrt{1-x^2}} + \\frac{e^x \\arcsin x}{e^x + 1} ]'
      },
      {
        id: 'trans-curated-41',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = x^{\\tan x}',
        method: 'Strategy: Variable base raised to a variable power requires logarithmic differentiation. Take the natural log of both sides, use log properties to bring down the exponent, and differentiate implicitly using the product rule.',
        solution: '\\begin{aligned}\n\\ln y &= \\ln(x^{\\tan x}) \\\\\n \\frac{y\'}{y} &= \\frac{d}{dx}[ \\text{exponent} \\cdot \\ln(\\text{base}) ] \\\\\n y\' &= x^{\\tan x} [ \\sec^2 x \\ln x + \\frac{\\tan x}{x} ]\n\\end{aligned}',
        finalAnswer: 'y\' = x^{\\tan x} [ \\sec^2 x \\ln x + \\frac{\\tan x}{x} ]'
      },
      {
        id: 'trans-curated-42',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = (\\sinh x)^{x^2}',
        method: 'Strategy: Variable base raised to a variable power requires logarithmic differentiation. Take the natural log of both sides, use log properties to bring down the exponent, and differentiate implicitly using the product rule.',
        solution: '\\begin{aligned}\n\\ln y &= \\ln((\\sinh x)^{x^2}) \\\\\n \\frac{y\'}{y} &= \\frac{d}{dx}[ \\text{exponent} \\cdot \\ln(\\text{base}) ] \\\\\n y\' &= (\\sinh x)^{x^2} [ 2x \\ln(\\sinh x) + x^2 \\coth x ]\n\\end{aligned}',
        finalAnswer: 'y\' = (\\sinh x)^{x^2} [ 2x \\ln(\\sinh x) + x^2 \\coth x ]'
      },
      {
        id: 'trans-curated-43',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = (\\sec x)^{e^x}',
        method: 'Strategy: Variable base raised to a variable power requires logarithmic differentiation. Take the natural log of both sides, use log properties to bring down the exponent, and differentiate implicitly using the product rule.',
        solution: '\\begin{aligned}\n\\ln y &= \\ln((\\sec x)^{e^x}) \\\\\n \\frac{y\'}{y} &= \\frac{d}{dx}[ \\text{exponent} \\cdot \\ln(\\text{base}) ] \\\\\n y\' &= (\\sec x)^{e^x} [ e^x \\ln(\\sec x) + e^x \\tan x ]\n\\end{aligned}',
        finalAnswer: 'y\' = (\\sec x)^{e^x} [ e^x \\ln(\\sec x) + e^x \\tan x ]'
      },
      {
        id: 'trans-curated-44',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = (\\log_2 x)^x',
        method: 'Strategy: Variable base raised to a variable power requires logarithmic differentiation. Take the natural log of both sides, use log properties to bring down the exponent, and differentiate implicitly using the product rule.',
        solution: '\\begin{aligned}\n\\ln y &= \\ln((\\log_2 x)^x) \\\\\n \\frac{y\'}{y} &= \\frac{d}{dx}[ \\text{exponent} \\cdot \\ln(\\text{base}) ] \\\\\n y\' &= (\\log_2 x)^x [ \\ln(\\log_2 x) + \\frac{1}{\\ln 2 \\cdot \\log_2 x} ]\n\\end{aligned}',
        finalAnswer: 'y\' = (\\log_2 x)^x [ \\ln(\\log_2 x) + \\frac{1}{\\ln 2 \\cdot \\log_2 x} ]'
      },
      {
        id: 'trans-curated-45',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = (\\arcsin x)^{\\cos x}',
        method: 'Strategy: Variable base raised to a variable power requires logarithmic differentiation. Take the natural log of both sides, use log properties to bring down the exponent, and differentiate implicitly using the product rule.',
        solution: '\\begin{aligned}\n\\ln y &= \\ln((\\arcsin x)^{\\cos x}) \\\\\n \\frac{y\'}{y} &= \\frac{d}{dx}[ \\text{exponent} \\cdot \\ln(\\text{base}) ] \\\\\n y\' &= (\\arcsin x)^{\\cos x} [ -\\sin x \\ln(\\arcsin x) + \\frac{\\cos x}{\\arcsin x \\sqrt{1-x^2}} ]\n\\end{aligned}',
        finalAnswer: 'y\' = (\\arcsin x)^{\\cos x} [ -\\sin x \\ln(\\arcsin x) + \\frac{\\cos x}{\\arcsin x \\sqrt{1-x^2}} ]'
      },
      {
        id: 'trans-curated-46',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\ln( (\\sin^2 x + \\cos^2 x) \\cdot e^{\\tan x} )',
        method: 'Strategy: This looks impossible to differentiate directly. Aggressively apply fundamental identities to collapse the massive expression into a simple one before taking a single derivative. Identity Application: \\sin^2 x + \\cos^2 x = 1, \\ln(e^u) = u.',
        solution: '\\begin{aligned}\ny &= \\ln( 1 \\cdot e^{\\tan x} ) = \\tan x \\\\\n y\' &= \\sec^2 x\n\\end{aligned}',
        finalAnswer: 'y\' = \\sec^2 x'
      },
      {
        id: 'trans-curated-47',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = e^{\\ln(\\cosh^2 x - \\sinh^2 x) + \\arcsin(\\sin x)}',
        method: 'Strategy: This looks impossible to differentiate directly. Aggressively apply fundamental identities to collapse the massive expression into a simple one before taking a single derivative. Identity Application: \\cosh^2 x - \\sinh^2 x = 1, \\ln(1) = 0, \\arcsin(\\sin x) = x.',
        solution: '\\begin{aligned}\ny &= e^{\\ln(1) + x} = e^{0 + x} = e^x \\\\\n y\' &= e^x\n\\end{aligned}',
        finalAnswer: 'y\' = e^x'
      },
      {
        id: 'trans-curated-48',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\log_2( 2^{\\sin x} \\cdot 4^{\\cos x} )',
        method: 'Strategy: This looks impossible to differentiate directly. Aggressively apply fundamental identities to collapse the massive expression into a simple one before taking a single derivative. Identity Application: 4 = 2^2, \\log_2(2^u) = u.',
        solution: '\\begin{aligned}\ny &= \\log_2( 2^{\\sin x} \\cdot 2^{2\\cos x} ) = \\log_2( 2^{\\sin x + 2\\cos x} ) \\\\\n y &= \\sin x + 2\\cos x \\\\\n y\' &= \\cos x - 2\\sin x\n\\end{aligned}',
        finalAnswer: 'y\' = \\cos x - 2\\sin x'
      },
      {
        id: 'trans-curated-49',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\arctan( \\tan( e^{\\ln x} ) )',
        method: 'Strategy: This looks impossible to differentiate directly. Aggressively apply fundamental identities to collapse the massive expression into a simple one before taking a single derivative. Identity Application: e^{\\ln x} = x, \\arctan(\\tan u) = u.',
        solution: '\\begin{aligned}\ny &= \\arctan( \\tan( x ) ) = x \\\\\n y\' &= 1\n\\end{aligned}',
        finalAnswer: 'y\' = 1'
      },
      {
        id: 'trans-curated-50',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\sinh( \\text{arsinh}( \\ln(e^{x^2}) ) )',
        method: 'Strategy: This looks impossible to differentiate directly. Aggressively apply fundamental identities to collapse the massive expression into a simple one before taking a single derivative. Identity Application: \\ln(e^u) = u, \\sinh(\\text{arsinh } u) = u.',
        solution: '\\begin{aligned}\ny &= \\sinh( \\text{arsinh}( x^2 ) ) = x^2 \\\\\n y\' &= 2x\n\\end{aligned}',
        finalAnswer: 'y\' = 2x'
      },
      {
        id: 'trans-curated-51',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\cosh( \\text{arcosh}( \\sec^2 x - \\tan^2 x + e^x ) )',
        method: 'Strategy: This looks impossible to differentiate directly. Aggressively apply fundamental identities to collapse the massive expression into a simple one before taking a single derivative. Identity Application: \\sec^2 x - \\tan^2 x = 1, \\cosh(\\text{arcosh } u) = u.',
        solution: '\\begin{aligned}\ny &= \\cosh( \\text{arcosh}( 1 + e^x ) ) = 1 + e^x \\\\\n y\' &= e^x\n\\end{aligned}',
        finalAnswer: 'y\' = e^x'
      },
      {
        id: 'trans-curated-52',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\ln( e^{\\arcsin x} \\cdot e^{\\arccos x} )',
        method: 'Strategy: This looks impossible to differentiate directly. Aggressively apply fundamental identities to collapse the massive expression into a simple one before taking a single derivative. Identity Application: e^a e^b = e^{a+b}, \\arcsin x + \\arccos x = \\pi/2.',
        solution: '\\begin{aligned}\ny &= \\ln( e^{\\arcsin x + \\arccos x} ) = \\arcsin x + \\arccos x \\\\\n y &= \\frac{\\pi}{2} \\\\\n y\' &= 0\n\\end{aligned}',
        finalAnswer: 'y\' = 0'
      },
      {
        id: 'trans-curated-53',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = 10^{\\log_{10}( \\frac{\\sin(2x)}{2\\sin x \\cos x} ) + x}',
        method: 'Strategy: This looks impossible to differentiate directly. Aggressively apply fundamental identities to collapse the massive expression into a simple one before taking a single derivative. Identity Application: \\sin(2x) = 2\\sin x \\cos x, \\log_{10}(1) = 0.',
        solution: '\\begin{aligned}\ny &= 10^{\\log_{10}( 1 ) + x} = 10^{0 + x} = 10^x \\\\\n y\' &= 10^x \\ln 10\n\\end{aligned}',
        finalAnswer: 'y\' = 10^x \\ln 10'
      },
      {
        id: 'trans-curated-54',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = e^{\\frac{1}{2}\\ln(1 - \\sin^2 x)}',
        method: 'Strategy: This looks impossible to differentiate directly. Aggressively apply fundamental identities to collapse the massive expression into a simple one before taking a single derivative. Identity Application: 1 - \\sin^2 x = \\cos^2 x, \\frac{1}{2}\\ln(u^2) = \\ln u.',
        solution: '\\begin{aligned}\ny &= e^{\\frac{1}{2}\\ln(\\cos^2 x)} = e^{\\ln(\\cos x)} = \\cos x \\\\\n y\' &= -\\sin x\n\\end{aligned}',
        finalAnswer: 'y\' = -\\sin x'
      },
      {
        id: 'trans-curated-55',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\quad y = \\ln( (\\cosh x + \\sinh x)^3 )',
        method: 'Strategy: This looks impossible to differentiate directly. Aggressively apply fundamental identities to collapse the massive expression into a simple one before taking a single derivative. Identity Application: \\cosh x + \\sinh x = e^x.',
        solution: '\\begin{aligned}\ny &= \\ln( (e^x)^3 ) = \\ln( e^{3x} ) = 3x \\\\\n y\' &= 3\n\\end{aligned}',
        finalAnswer: 'y\' = 3'
      }
    ]
  },
  {
    id: 'partial-derivatives',
    categoryId: 'differential',
    title: 'Higher-Order Partial Derivatives',
    icon: 'layers',
    description: 'First, second, and mixed partial derivatives of multivariable functions.',
    theory: (
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Partial Differentiation</h2>
          <p className="text-on-surface-variant mb-6">
            When finding the derivative of a function with multiple variables, such as <MathText math="f(x, y)" />, a partial derivative is taken with respect to one variable while holding the other variables constant.
          </p>
          
          <div className="grid gap-6">
            <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/20">
              <h3 className="text-lg font-bold text-primary mb-2">First-Order Partials</h3>
              <ul className="list-disc list-inside space-y-2 text-on-surface-variant mb-4">
                <li><MathText math="f_x" /> or <MathText math="\frac{\partial f}{\partial x}" />: Differentiate with respect to <MathText math="x" />, treating <MathText math="y" /> as a constant.</li>
                <li><MathText math="f_y" /> or <MathText math="\frac{\partial f}{\partial y}" />: Differentiate with respect to <MathText math="y" />, treating <MathText math="x" /> as a constant.</li>
              </ul>
              <div className="bg-surface-container-lowest p-4 rounded-xl overflow-x-auto no-scrollbar mb-4">
                <MathText block math={String.raw`f(x,y) = x^3 y^2 \implies f_x = 3x^2 y^2, \quad f_y = 2x^3 y`} className="text-[13px] md:text-base"/>
              </div>
            </div>

            <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/20">
              <h3 className="text-lg font-bold text-primary mb-2">Second-Order & Mixed Partials</h3>
              <p className="text-sm text-on-surface-variant mb-4">
                You can take the partial derivative of a partial derivative. Pure partials (<MathText math="f_{xx}, f_{yy}" />) differentiate respecting the same variable twice. Mixed partials (<MathText math="f_{xy}, f_{yx}" />) differentiate respecting one variable, then the other.
              </p>
              <div className="bg-surface-container-lowest p-4 rounded-xl overflow-x-auto no-scrollbar mb-4">
                <MathText block math={String.raw`f_{xy} = \frac{\partial}{\partial y}\left(\frac{\partial f}{\partial x}\right)`} className="text-[13px] md:text-base" />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">Clairaut's Theorem</h4>
              <p className="text-sm text-on-surface-variant mb-4">
                If the mixed partial derivatives <MathText math="f_{xy}" /> and <MathText math="f_{yx}" /> are continuous on an open disc, then they are absolutely equal! (<MathText math="f_{xy} = f_{yx}" />).
              </p>
            </div>
          </div>
        </section>
      </div>
    ),
    problems: generatedPartialProblems.map((p: any) => ({
      id: p.id,
      difficulty: p.difficulty === 'very_hard' ? 'Very Hard' : 'Hard',
      statement: p.statement,
      solution: typeof p.steps === 'string' ? p.steps : Array.isArray(p.steps) ? p.steps.join('\n') : '',
      finalAnswer: p.answer,
      type: 'free-response'
    }))
  },
  {
    id: 'higher-order-derivatives',
    categoryId: 'differential',
    title: 'Higher-Order Derivatives',
    icon: 'layers',
    description: 'Finding the second, third, and n-th derivatives of complex functions.',
    theory: (
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Higher-Order Derivatives</h2>
          <p className="text-on-surface-variant mb-6">
            A higher-order derivative involves taking the derivative of a function multiple times successively. If <MathText math="f(x)" /> represents position, its first derivative is velocity, and its second derivative is acceleration.
          </p>
          
          <div className="grid gap-6">
            <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/20">
              <h3 className="text-lg font-bold text-primary mb-2">Notation</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-on-surface-variant mb-4">
                <li><strong>First:</strong> <MathText math="y' = \frac{dy}{dx} = f'(x)" /></li>
                <li><strong>Second:</strong> <MathText math="y'' = \frac{d^2y}{dx^2} = f''(x)" /></li>
                <li><strong>Third:</strong> <MathText math="y''' = \frac{d^3y}{dx^3} = f'''(x)" /></li>
                <li><strong>n-th Order:</strong> <MathText math="y^{(n)} = \frac{d^n y}{dx^n} = f^{(n)}(x)" /></li>
              </ul>
              <div className="bg-surface-container-lowest p-4 rounded-xl overflow-x-auto no-scrollbar mb-4">
                <MathText block math={String.raw`f^{(n)}(x) = \frac{d}{dx}\left[f^{(n-1)}(x)\right]`} className="text-[13px] md:text-base"/>
              </div>
            </div>

            <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/20">
              <h3 className="text-lg font-bold text-primary mb-2">Patterns & Formulas</h3>
              <p className="text-sm text-on-surface-variant mb-4">
                You will often be asked to evaluate very high derivatives where iterating is impossible. Always compute the first 3 or 4 derivatives to look for a cyclical or factorial pattern!
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-on-surface-variant mb-4">
                <li><MathText math="\frac{d^n}{dx^n} e^{kx} = k^n e^{kx}" /></li>
                <li><MathText math="\frac{d}{dx} \ln(x) = x^{-1} \implies \text{Next derives will spawn factorials!}" /></li>
                <li><MathText math="\sin(x)" /> and <MathText math="\cos(x)" /> cycle every 4 derivatives.</li>
              </ul>
              <h4 className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">Example</h4>
              <div className="bg-surface-container-lowest p-4 rounded-xl overflow-x-auto no-scrollbar">
                <MathText block math={String.raw`f(x) = \ln(1+x) \implies f'(x) = (1+x)^{-1} \implies f''(x) = -(1+x)^{-2}`} className="mb-2 text-[13px] md:text-base" />
                <MathText block math={String.raw`f'''(x) = 2(1+x)^{-3} \implies f^{(4)}(x) = -6(1+x)^{-4}`} className="text-[13px] md:text-base" />
              </div>
            </div>
          </div>
        </section>
      </div>
    ),
    problems: generatedHigherOrderProblems.map((p: any) => ({
      id: p.id,
      difficulty: p.difficulty === 'very_hard' ? 'Very Hard' : 'Hard',
      statement: p.statement,
      solution: typeof p.steps === 'string' ? p.steps : Array.isArray(p.steps) ? p.steps.join('\n') : '',
      finalAnswer: p.answer,
      type: 'free-response'
    }))
  },
  {
    id: 'lhopitals-rule',
    categoryId: 'applications',
    title: 'L\'Hôpital\'s Rule',
    icon: 'all_inclusive',
    description: 'Evaluating tricky indeterminate limits using successive differentiation.',
    theory: (
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">L'Hôpital's Rule</h2>
          <p className="text-on-surface-variant mb-6">
            L'Hôpital's Rule provides a method to evaluate limits that result in an indeterminate form, specifically <MathText math="\frac{0}{0}" /> or <MathText math="\frac{\pm \infty}{\pm \infty}" />. It works by differentiating the numerator and the denominator separately.
          </p>
          
          <div className="grid gap-6">
            <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/20">
              <h3 className="text-lg font-bold text-primary mb-2">The Formula</h3>
              <p className="text-sm text-on-surface-variant mb-4">
                If <MathText math="\lim_{x \to c} \frac{f(x)}{g(x)}" /> evaluates to <MathText math="\frac{0}{0}" /> or <MathText math="\frac{\infty}{\infty}" />, then:
              </p>
              <div className="bg-surface-container-lowest p-4 rounded-xl overflow-x-auto no-scrollbar mb-4">
                <MathText block math={String.raw`\lim_{x \to c} \frac{f(x)}{g(x)} = \lim_{x \to c} \frac{f'(x)}{g'(x)}`} className="text-[13px] md:text-base"/>
              </div>
              <p className="text-sm text-secondary-container-on font-semibold">
                Keep repeating the rule if the new limit is also indeterminate!
              </p>
            </div>

            <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/20">
              <h3 className="text-lg font-bold text-primary mb-2">Other Indeterminate Forms</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-on-surface-variant mb-4">
                <li>Products (<MathText math="0 \cdot \infty" />): Rewrite as a fraction <MathText math="f / (1/g)" /> or <MathText math="g / (1/f)" />.</li>
                <li>Differences (<MathText math="\infty - \infty" />): Combine fractions using a common denominator or properties of logarithms.</li>
                <li>Powers (<MathText math="1^\infty, 0^0, \infty^0" />): Use natural logarithms! Let <MathText math="L = \lim f(x)^{g(x)}" />. Then <MathText math="\ln(L) = \lim g(x) \ln(f(x))" />, which is a <MathText math="0 \cdot \infty" /> form. Compute it, then evaluate <MathText math="L = e^{\text{result}}" />.</li>
              </ul>
              <h4 className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">Example</h4>
              <div className="bg-surface-container-lowest p-4 rounded-xl overflow-x-auto no-scrollbar">
                <MathText block math={String.raw`\lim_{x \to 0} \frac{\sin(2x)}{x} \xrightarrow{L'H} \lim_{x \to 0} \frac{2\cos(2x)}{1} = 2(1) = 2`} className="text-[13px] md:text-base" />
              </div>
            </div>
          </div>
        </section>
      </div>
    ),
    problems: generatedLhopitalProblems.map((p: any) => ({
      id: p.id,
      difficulty: p.difficulty === 'very_hard' ? 'Very Hard' : 'Hard',
      statement: p.statement,
      solution: typeof p.steps === 'string' ? p.steps : Array.isArray(p.steps) ? p.steps.join('\n') : '',
      finalAnswer: p.answer,
      type: 'free-response'
    }))
  },
  {
    id: 'applications-of-derivatives',
    categoryId: 'applications',
    title: 'Applications of Derivatives',
    icon: 'show_chart',
    description: 'Master real-world optimization (Maxima and Minima) and dynamic systems (Time Rates/Related Rates).',
    theory: (
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Optimization: Maxima and Minima</h2>
          <p className="text-on-surface-variant mb-6">
            Finding the largest or smallest value of a quantity under certain constraints is a classic application of calculus. The core idea is to express the quantity you want to optimize as a function of a single variable, say <MathText math="f(x)" />, and then find where its derivative is zero, <MathText math="f'(x) = 0" />.
          </p>
          
          <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/20 mb-6">
            <h3 className="text-lg font-bold text-primary mb-2">The Optimization Blueprint</h3>
            <ul className="list-disc list-inside text-sm space-y-2 text-on-surface-variant">
              <li><strong>Draw and Label:</strong> Sketch the scenario. Identify variables and constants.</li>
              <li><strong>Primary Equation:</strong> Write an equation for the quantity to be maximized or minimized.</li>
              <li><strong>Constraint Equation:</strong> Use constraints to reduce the primary equation to one single independent variable.</li>
              <li><strong>Differentiate & Solve:</strong> Find the critical points where <MathText math="f'(x) = 0" /> or is undefined.</li>
              <li><strong>Verify:</strong> Make sure the critical point corresponds to the desired extremum (usually using the First or Second Derivative Test).</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Time Rates (Related Rates)</h2>
          <p className="text-on-surface-variant mb-6">
            In related rates problems, we compute the rate of change of one quantity by relating it to the known rate of change of another quantity, utilizing the Chain Rule with respect to time <MathText math="t" />.
          </p>
          
          <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/20">
            <h3 className="text-lg font-bold text-primary mb-2">The Related Rates Blueprint</h3>
            <ul className="list-disc list-inside text-sm space-y-2 text-on-surface-variant">
              <li><strong>Snapshot vs Timeline:</strong> Visualize the setup. Assign letters to quantities that <em>vary</em> with time. Do NOT plug in numerical values for varying quantities yet!</li>
              <li><strong>Identify Rates:</strong> Write out the known rates (e.g., <MathText math="\frac{dx}{dt} = 5" />) and the rate you want to find (e.g., <MathText math="\frac{dy}{dt} = ?" />).</li>
              <li><strong>The Relational Equation:</strong> Write an equation linking the variables (using Pythagorean theorem, similar triangles, trigonometry, or volume formulas).</li>
              <li><strong>Implicit Differentiation:</strong> Differentiate both sides with respect to time <MathText math="t" />. Remember to multiply by <MathText math="\frac{d}{dt}" /> for every variable.</li>
              <li><strong>Evaluate:</strong> Now, and <em>only</em> now, plug in the instantaneous 'snapshot' values to solve for the unknown rate.</li>
            </ul>
          </div>
        </section>
      </div>
    ),
    problems: [...generatedApplicationsProblems, ...generatedMoreApps, ...generatedMegaApps].map((p: any) => ({
      id: p.id,
      difficulty: p.difficulty.toLowerCase() === 'highest' ? 'Hard' : p.difficulty.toLowerCase() === 'very_hard' ? 'Hard' : (p.difficulty.charAt(0).toUpperCase() + p.difficulty.slice(1)),
      statement: p.statement.includes('$') ? p.statement : `${p.statement} $ $`,
      solution: typeof p.steps === 'string' ? p.steps : Array.isArray(p.steps) ? p.steps.join('\n') : '',
      finalAnswer: p.answer,
      type: 'free-response'
    }))
  }
];
