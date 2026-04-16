const fs = require('fs');

const problems = [];
let idCounter = 1;

// Template A: y = \ln(\sinh(ax) + \cosh(bx))
for (let i = 1; i <= 20; i++) {
  const a = i;
  const b = i + 1;
  problems.push({
    id: `trans-gen200-A-${i}`,
    topic: 'logarithmic',
    difficulty: 'hard',
    statement: `y = \\ln(\\sinh(${a}x) + \\cosh(${b}x))`,
    method: 'Chain Rule',
    answer: `\\frac{${a}\\cosh(${a}x) + ${b}\\sinh(${b}x)}{\\sinh(${a}x) + \\cosh(${b}x)}`,
    steps: [
      `y' = \\frac{1}{\\sinh(${a}x) + \\cosh(${b}x)} \\cdot \\frac{d}{dx}(\\sinh(${a}x) + \\cosh(${b}x))`,
      `y' = \\frac{${a}\\cosh(${a}x) + ${b}\\sinh(${b}x)}{\\sinh(${a}x) + \\cosh(${b}x)}`
    ]
  });
}

// Template B: y = e^{\arctan(cx)} \cdot \arcsin(dx)
for (let i = 1; i <= 20; i++) {
  const c = i;
  const d = i + 1;
  problems.push({
    id: `trans-gen200-B-${i}`,
    topic: 'exponential',
    difficulty: 'very_hard',
    statement: `y = e^{\\arctan(${c}x)} \\cdot \\arcsin(${d}x)`,
    method: 'Product Rule and Chain Rule',
    answer: `e^{\\arctan(${c}x)} \\left( \\frac{${c}\\arcsin(${d}x)}{1+${c*c}x^2} + \\frac{${d}}{\\sqrt{1-${d*d}x^2}} \\right)`,
    steps: [
      `y' = \\frac{d}{dx}(e^{\\arctan(${c}x)}) \\arcsin(${d}x) + e^{\\arctan(${c}x)} \\frac{d}{dx}(\\arcsin(${d}x))`,
      `y' = e^{\\arctan(${c}x)} \\cdot \\frac{${c}}{1+${c*c}x^2} \\arcsin(${d}x) + e^{\\arctan(${c}x)} \\frac{${d}}{\\sqrt{1-${d*d}x^2}}`
    ]
  });
}

// Template C: y = \frac{\cosh(mx)}{\ln(nx)}
for (let i = 1; i <= 20; i++) {
  const m = i + 2;
  const n = i + 3;
  problems.push({
    id: `trans-gen200-C-${i}`,
    topic: 'hyperbolic',
    difficulty: 'hard',
    statement: `y = \\frac{\\cosh(${m}x)}{\\ln(${n}x)}`,
    method: 'Quotient Rule',
    answer: `\\frac{${m}\\sinh(${m}x)\\ln(${n}x) - \\frac{\\cosh(${m}x)}{x}}{(\\ln(${n}x))^2}`,
    steps: [
      `y' = \\frac{\\frac{d}{dx}(\\cosh(${m}x))\\ln(${n}x) - \\cosh(${m}x)\\frac{d}{dx}(\\ln(${n}x))}{(\\ln(${n}x))^2}`,
      `y' = \\frac{${m}\\sinh(${m}x)\\ln(${n}x) - \\cosh(${m}x)\\frac{1}{x}}{(\\ln(${n}x))^2}`
    ]
  });
}

// Template D: y = \sin(\cos(\tan(px)))
for (let i = 1; i <= 20; i++) {
  const p = i;
  problems.push({
    id: `trans-gen200-D-${i}`,
    topic: 'trig',
    difficulty: 'boss',
    statement: `y = \\sin(\\cos(\\tan(${p}x)))`,
    method: 'Nested Chain Rule',
    answer: `-\\cos(\\cos(\\tan(${p}x))) \\sin(\\tan(${p}x)) \\sec^2(${p}x) \\cdot ${p}`,
    steps: [
      `y' = \\cos(\\cos(\\tan(${p}x))) \\cdot \\frac{d}{dx}(\\cos(\\tan(${p}x)))`,
      `y' = \\cos(\\cos(\\tan(${p}x))) \\cdot (-\\sin(\\tan(${p}x))) \\cdot \\frac{d}{dx}(\\tan(${p}x))`,
      `y' = -${p}\\cos(\\cos(\\tan(${p}x))) \\sin(\\tan(${p}x)) \\sec^2(${p}x)`
    ]
  });
}

// Template E: y = \log_3(\arcsin(qx) + \arccos(qx))
for (let i = 1; i <= 20; i++) {
  const q = i;
  problems.push({
    id: `trans-gen200-E-${i}`,
    topic: 'logarithmic',
    difficulty: 'easy',
    statement: `y = \\log_3(\\arcsin(${q}x) + \\arccos(${q}x))`,
    method: 'Identity Simplification',
    answer: `0`,
    steps: [
      `\\arcsin(${q}x) + \\arccos(${q}x) = \\frac{\\pi}{2}`,
      `y = \\log_3(\\frac{\\pi}{2})`,
      `y' = 0`
    ]
  });
}

// Template F: y = (\sinh x)^{\cosh x}
for (let i = 1; i <= 20; i++) {
  problems.push({
    id: `trans-gen200-F-${i}`,
    topic: 'hyperbolic',
    difficulty: 'boss',
    statement: `y = (\\sinh(${i}x))^{\\cosh(${i}x)}`,
    method: 'Logarithmic Differentiation',
    answer: `(\\sinh(${i}x))^{\\cosh(${i}x)} \\left[ ${i}\\sinh(${i}x)\\ln(\\sinh(${i}x)) + ${i}\\cosh(${i}x)\\coth(${i}x) \\right]`,
    steps: [
      `\\ln y = \\cosh(${i}x) \\ln(\\sinh(${i}x))`,
      `\\frac{y'}{y} = ${i}\\sinh(${i}x)\\ln(\\sinh(${i}x)) + \\cosh(${i}x) \\frac{${i}\\cosh(${i}x)}{\\sinh(${i}x)}`,
      `y' = y \\left[ ${i}\\sinh(${i}x)\\ln(\\sinh(${i}x)) + ${i}\\cosh(${i}x)\\coth(${i}x) \\right]`
    ]
  });
}

// Template G: y = \sqrt{\frac{1+\tanh(kx)}{1-\tanh(kx)}}
for (let i = 1; i <= 20; i++) {
  const k = i + 1;
  problems.push({
    id: `trans-gen200-G-${i}`,
    topic: 'hyperbolic',
    difficulty: 'very_hard',
    statement: `y = \\sqrt{\\frac{1+\\tanh(${k}x)}{1-\\tanh(${k}x)}}`,
    method: 'Hyperbolic Identity',
    answer: `${k}e^{${k}x}`,
    steps: [
      `\\frac{1+\\tanh(${k}x)}{1-\\tanh(${k}x)} = e^{2\\cdot ${k}x}`,
      `y = \\sqrt{e^{${2*k}x}} = e^{${k}x}`,
      `y' = ${k}e^{${k}x}`
    ]
  });
}

// Template H: y = \ln(\sqrt{x^2+1} - x)
for (let i = 1; i <= 20; i++) {
  const r = i;
  problems.push({
    id: `trans-gen200-H-${i}`,
    topic: 'logarithmic',
    difficulty: 'hard',
    statement: `y = \\ln(\\sqrt{${r*r}x^2+1} - ${r}x)`,
    method: 'Chain Rule and Algebraic Simplification',
    answer: `-\\frac{${r}}{\\sqrt{${r*r}x^2+1}}`,
    steps: [
      `y' = \\frac{1}{\\sqrt{${r*r}x^2+1} - ${r}x} \\cdot (\\frac{${r*r}x}{\\sqrt{${r*r}x^2+1}} - ${r})`,
      `y' = \\frac{1}{\\sqrt{${r*r}x^2+1} - ${r}x} \\cdot \\frac{${r*r}x - ${r}\\sqrt{${r*r}x^2+1}}{\\sqrt{${r*r}x^2+1}}`,
      `y' = -\\frac{${r}}{\\sqrt{${r*r}x^2+1}}`
    ]
  });
}

// Template I: y = e^{x} \arcsin(e^{-x})
for (let i = 1; i <= 20; i++) {
  const s = i;
  problems.push({
    id: `trans-gen200-I-${i}`,
    topic: 'inverse_trig',
    difficulty: 'very_hard',
    statement: `y = e^{${s}x} \\arcsin(e^{-${s}x})`,
    method: 'Product Rule and Chain Rule',
    answer: `${s}e^{${s}x}\\arcsin(e^{-${s}x}) - \\frac{${s}}{\\sqrt{1-e^{-${2*s}x}}}`,
    steps: [
      `y' = ${s}e^{${s}x}\\arcsin(e^{-${s}x}) + e^{${s}x} \\frac{1}{\\sqrt{1-e^{-${2*s}x}}} (-${s}e^{-${s}x})`,
      `y' = ${s}e^{${s}x}\\arcsin(e^{-${s}x}) - \\frac{${s}}{\\sqrt{1-e^{-${2*s}x}}}`
    ]
  });
}

// Template J: y = \arctan(\sinh(tx))
for (let i = 1; i <= 20; i++) {
  const t = i;
  problems.push({
    id: `trans-gen200-J-${i}`,
    topic: 'inverse_trig',
    difficulty: 'medium',
    statement: `y = \\arctan(\\sinh(${t}x))`,
    method: 'Chain Rule and Identity',
    answer: `${t}\\text{sech}(${t}x)`,
    steps: [
      `y' = \\frac{1}{1+\\sinh^2(${t}x)} \\cdot ${t}\\cosh(${t}x)`,
      `y' = \\frac{${t}\\cosh(${t}x)}{\\cosh^2(${t}x)} = \\frac{${t}}{\\cosh(${t}x)} = ${t}\\text{sech}(${t}x)`
    ]
  });
}

const fileContent = `import { ExamProblem } from './examData';

export const generatedProblems200: ExamProblem[] = ${JSON.stringify(problems, null, 2)};
`;

fs.writeFileSync('src/data/generatedProblems200.ts', fileContent);
console.log('Successfully generated 200 problems.');
