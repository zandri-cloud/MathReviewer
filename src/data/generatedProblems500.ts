import { ExamProblem } from './examData';

const generateProblems = (): ExamProblem[] => {
  const problems: ExamProblem[] = [];
  
  // Template 1: Trig (100 problems)
  for (let a = 1; a <= 10; a++) {
    for (let b = 1; b <= 10; b++) {
      problems.push({
        id: `gen500-trig-${a}-${b}`,
        topic: "trig",
        difficulty: a + b < 8 ? "easy" : (a + b < 15 ? "medium" : "hard"),
        statement: `Find the derivative of: \\quad y = ${a === 1 ? '' : a}\\sin(${b === 1 ? '' : b}x)`,
        answer: `y' = ${a * b}\\cos(${b === 1 ? '' : b}x)`,
        steps: [`\\begin{aligned} y' &= ${a === 1 ? '' : a} \\cdot \\cos(${b === 1 ? '' : b}x) \\cdot ${b} \\\\ y' &= ${a * b}\\cos(${b === 1 ? '' : b}x) \\end{aligned}`]
      });
    }
  }

  // Template 2: Exponential (100 problems)
  for (let a = 1; a <= 10; a++) {
    for (let b = 1; b <= 10; b++) {
      problems.push({
        id: `gen500-exp-${a}-${b}`,
        topic: "exponential",
        difficulty: a + b < 8 ? "easy" : (a + b < 15 ? "medium" : "hard"),
        statement: `Find the derivative of: \\quad y = ${a === 1 ? '' : a}e^{${b === 1 ? '' : b}x}`,
        answer: `y' = ${a * b}e^{${b === 1 ? '' : b}x}`,
        steps: [`\\begin{aligned} y' &= ${a === 1 ? '' : a} \\cdot e^{${b === 1 ? '' : b}x} \\cdot ${b} \\\\ y' &= ${a * b}e^{${b === 1 ? '' : b}x} \\end{aligned}`]
      });
    }
  }

  // Template 3: Logarithmic (100 problems)
  for (let a = 1; a <= 10; a++) {
    for (let b = 1; b <= 10; b++) {
      problems.push({
        id: `gen500-log-${a}-${b}`,
        topic: "logarithmic",
        difficulty: a + b < 8 ? "easy" : (a + b < 15 ? "medium" : "hard"),
        statement: `Find the derivative of: \\quad y = ${a === 1 ? '' : a}\\ln(${b === 1 ? '' : b}x)`,
        answer: `y' = \\frac{${a}}{x}`,
        steps: [`\\begin{aligned} y' &= ${a === 1 ? '' : a} \\cdot \\frac{1}{${b === 1 ? '' : b}x} \\cdot ${b} \\\\ y' &= \\frac{${a}}{x} \\end{aligned}`]
      });
    }
  }

  // Template 4: Inverse Trig (100 problems)
  for (let a = 1; a <= 10; a++) {
    for (let b = 1; b <= 10; b++) {
      problems.push({
        id: `gen500-inv-${a}-${b}`,
        topic: "inverse_trig",
        difficulty: a + b < 8 ? "medium" : (a + b < 15 ? "hard" : "very_hard"),
        statement: `Find the derivative of: \\quad y = ${a === 1 ? '' : a}\\arctan(${b === 1 ? '' : b}x)`,
        answer: `y' = \\frac{${a * b}}{1 + (${b === 1 ? '' : b}x)^2}`,
        steps: [`\\begin{aligned} y' &= ${a === 1 ? '' : a} \\cdot \\frac{1}{1 + (${b === 1 ? '' : b}x)^2} \\cdot ${b} \\\\ y' &= \\frac{${a * b}}{1 + (${b === 1 ? '' : b}x)^2} \\end{aligned}`]
      });
    }
  }

  // Template 5: Hyperbolic (100 problems)
  for (let a = 1; a <= 10; a++) {
    for (let b = 1; b <= 10; b++) {
      problems.push({
        id: `gen500-hyp-${a}-${b}`,
        topic: "hyperbolic",
        difficulty: a + b < 8 ? "medium" : (a + b < 15 ? "hard" : "very_hard"),
        statement: `Find the derivative of: \\quad y = ${a === 1 ? '' : a}\\sinh(${b === 1 ? '' : b}x)`,
        answer: `y' = ${a * b}\\cosh(${b === 1 ? '' : b}x)`,
        steps: [`\\begin{aligned} y' &= ${a === 1 ? '' : a} \\cdot \\cosh(${b === 1 ? '' : b}x) \\cdot ${b} \\\\ y' &= ${a * b}\\cosh(${b === 1 ? '' : b}x) \\end{aligned}`]
      });
    }
  }

  return problems;
};

export const generatedProblems500 = generateProblems();
