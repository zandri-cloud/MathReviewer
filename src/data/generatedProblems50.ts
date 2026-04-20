import { ExamProblem } from './examData';

export const generatedProblems50: ExamProblem[] = [
  // Template 1
  ...Array.from({ length: 10 }).map((_, i) => {
    const a = i + 1;
    const b = i + 2;
    return {
      id: `trans-superhard-t1-${i + 1}`,
      topic: 'trig' as const,
      difficulty: 'very_hard' as const,
      statement: `y = e^{${a}x} \\sin(${b}x) \\cos(${b}x)`,
      method: 'Double Angle Identity and Product Rule',
      answer: `\\frac{1}{2} e^{${a}x} \\left( ${a} \\sin(${2*b}x) + ${2*b} \\cos(${2*b}x) \\right)`,
      steps: [
        `y = \\frac{1}{2} e^{${a}x} \\sin(${2*b}x)`,
        `y' = \\frac{1}{2} \\left[ ${a} e^{${a}x} \\sin(${2*b}x) + e^{${a}x} \\cos(${2*b}x) \\cdot ${2*b} \\right]`
      ]
    };
  }),
  // Template 2
  ...Array.from({ length: 10 }).map((_, i) => {
    const c = i + 3;
    return {
      id: `trans-superhard-t2-${i + 1}`,
      topic: 'logarithmic' as const,
      difficulty: 'boss' as const,
      statement: `y = \\ln(\\tan(${c}x) + \\sec(${c}x)) \\cdot \\cos(${2*c}x)`,
      method: 'Product Rule and Chain Rule',
      answer: `${c}\\sec(${c}x) \\cos(${2*c}x) - ${2*c} \\ln(\\tan(${c}x) + \\sec(${c}x)) \\sin(${2*c}x)`,
      steps: [
        `\\frac{d}{dx}(\\ln(\\tan(${c}x) + \\sec(${c}x))) = ${c}\\sec(${c}x)`,
        `y' = ${c}\\sec(${c}x) \\cos(${2*c}x) - ${2*c} \\ln(\\tan(${c}x) + \\sec(${c}x)) \\sin(${2*c}x)`
      ]
    };
  }),
  // Template 3
  ...Array.from({ length: 10 }).map((_, i) => {
    const n = i + 2;
    return {
      id: `trans-superhard-t3-${i + 1}`,
      topic: 'trig' as const,
      difficulty: 'hard' as const,
      statement: `y = \\frac{\\sin(${2*n}x)}{1 + \\cos(${2*n}x)}`,
      method: 'Double Angle Identity and Chain Rule',
      answer: `${n}\\sec^2(${n}x)`,
      steps: [
        `y = \\frac{2\\sin(${n}x)\\cos(${n}x)}{2\\cos^2(${n}x)} = \\tan(${n}x)`,
        `y' = ${n}\\sec^2(${n}x)`
      ]
    };
  }),
  // Template 4
  ...Array.from({ length: 10 }).map((_, i) => {
    const m = i + 4;
    return {
      id: `trans-superhard-t4-${i + 1}`,
      topic: 'logarithmic' as const,
      difficulty: 'very_hard' as const,
      statement: `y = \\ln\\left(\\sqrt{\\frac{1-\\cos(${2*m}x)}{1+\\cos(${2*m}x)}}\\right)`,
      method: 'Double Angle Identity and Logarithmic Differentiation',
      answer: `${2*m}\\csc(${2*m}x)`,
      steps: [
        `y = \\ln|\\tan(${m}x)|`,
        `y' = \\frac{1}{\\tan(${m}x)} \\cdot \\sec^2(${m}x) \\cdot ${m} = ${2*m}\\csc(${2*m}x)`
      ]
    };
  }),
  // Template 5
  ...Array.from({ length: 10 }).map((_, i) => {
    const n = i + 5;
    return {
      id: `trans-superhard-t5-${i + 1}`,
      topic: 'exponential' as const,
      difficulty: 'hard' as const,
      statement: `y = e^{\\sin^2(${n}x)}`,
      method: 'Chain Rule and Double Angle Identity',
      answer: `${n} e^{\\sin^2(${n}x)} \\sin(${2*n}x)`,
      steps: [
        `y' = e^{\\sin^2(${n}x)} \\cdot 2\\sin(${n}x)\\cos(${n}x) \\cdot ${n}`,
        `y' = ${n} e^{\\sin^2(${n}x)} \\sin(${2*n}x)`
      ]
    };
  })
];
