import * as fs from 'fs';

const problems = [];
let idCounter = 500;

const topics = ["trig", "inverse_trig", "hyperbolic", "logarithmic", "exponential"];
const difficulties = ["easy", "medium", "hard", "very_hard", "boss"];

// Helper to generate random coefficients
const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Template 1: Basic Trig with Chain Rule (Easy/Medium)
for (let i = 1; i <= 100; i++) {
  const a = rand(2, 10);
  const b = rand(2, 10);
  const funcs = ["\\sin", "\\cos", "\\tan", "\\sec", "\\csc", "\\cot"];
  const f = funcs[i % funcs.length];
  
  let deriv = "";
  if (f === "\\sin") deriv = `${a*b}\\cos(${b}x)`;
  if (f === "\\cos") deriv = `-${a*b}\\sin(${b}x)`;
  if (f === "\\tan") deriv = `${a*b}\\sec^2(${b}x)`;
  if (f === "\\sec") deriv = `${a*b}\\sec(${b}x)\\tan(${b}x)`;
  if (f === "\\csc") deriv = `-${a*b}\\csc(${b}x)\\cot(${b}x)`;
  if (f === "\\cot") deriv = `-${a*b}\\csc^2(${b}x)`;

  problems.push({
    id: `gen-500-t1-${i}`,
    topic: "trig",
    difficulty: i < 40 ? "easy" : "medium",
    statement: `Find the derivative of: \\quad y = ${a}${f}(${b}x)`,
    answer: `y' = ${deriv}`,
    solution: `\\begin{aligned} y' &= ${a} \\cdot \\frac{d}{dx}(${f}(${b}x)) \\\\ y' &= ${a} \\cdot (${deriv.split(' ')[0].replace(a*b, b)}) \\\\ y' &= ${deriv} \\end{aligned}`
  });
}

// Template 2: Exponential and Logarithmic (Easy/Medium)
for (let i = 1; i <= 100; i++) {
  const a = rand(2, 10);
  const b = rand(2, 10);
  const isExp = i % 2 === 0;
  
  if (isExp) {
    problems.push({
      id: `gen-500-t2-${i}`,
      topic: "exponential",
      difficulty: i < 50 ? "easy" : "medium",
      statement: `Find the derivative of: \\quad y = ${a}e^{${b}x}`,
      answer: `y' = ${a*b}e^{${b}x}`,
      solution: `\\begin{aligned} y' &= ${a} \\cdot e^{${b}x} \\cdot ${b} \\\\ y' &= ${a*b}e^{${b}x} \\end{aligned}`
    });
  } else {
    problems.push({
      id: `gen-500-t2-${i}`,
      topic: "logarithmic",
      difficulty: i < 50 ? "easy" : "medium",
      statement: `Find the derivative of: \\quad y = ${a}\\ln(${b}x)`,
      answer: `y' = \\frac{${a}}{x}`,
      solution: `\\begin{aligned} y' &= ${a} \\cdot \\frac{1}{${b}x} \\cdot ${b} \\\\ y' &= \\frac{${a}}{x} \\end{aligned}`
    });
  }
}

// Template 3: Inverse Trig (Medium/Hard)
for (let i = 1; i <= 100; i++) {
  const a = rand(2, 5);
  const b = rand(2, 5);
  const funcs = ["\\arcsin", "\\arccos", "\\arctan", "\\text{arcsec}"];
  const f = funcs[i % funcs.length];
  
  let deriv = "";
  if (f === "\\arcsin") deriv = `\\frac{${a*b}}{\\sqrt{1-(${b}x)^2}}`;
  if (f === "\\arccos") deriv = `-\\frac{${a*b}}{\\sqrt{1-(${b}x)^2}}`;
  if (f === "\\arctan") deriv = `\\frac{${a*b}}{1+(${b}x)^2}`;
  if (f === "\\text{arcsec}") deriv = `\\frac{${a*b}}{|${b}x|\\sqrt{(${b}x)^2-1}}`;

  problems.push({
    id: `gen-500-t3-${i}`,
    topic: "inverse_trig",
    difficulty: i < 50 ? "medium" : "hard",
    statement: `Find the derivative of: \\quad y = ${a}${f}(${b}x)`,
    answer: `y' = ${deriv}`,
    solution: `\\begin{aligned} y' &= ${a} \\cdot \\frac{d}{dx}(${f}(${b}x)) \\\\ y' &= ${deriv} \\end{aligned}`
  });
}

// Template 4: Hyperbolic (Medium/Hard)
for (let i = 1; i <= 100; i++) {
  const a = rand(2, 6);
  const b = rand(2, 6);
  const funcs = ["\\sinh", "\\cosh", "\\tanh", "\\text{sech}"];
  const f = funcs[i % funcs.length];
  
  let deriv = "";
  if (f === "\\sinh") deriv = `${a*b}\\cosh(${b}x)`;
  if (f === "\\cosh") deriv = `${a*b}\\sinh(${b}x)`;
  if (f === "\\tanh") deriv = `${a*b}\\text{sech}^2(${b}x)`;
  if (f === "\\text{sech}") deriv = `-${a*b}\\text{sech}(${b}x)\\tanh(${b}x)`;

  problems.push({
    id: `gen-500-t4-${i}`,
    topic: "hyperbolic",
    difficulty: i < 50 ? "medium" : "hard",
    statement: `Find the derivative of: \\quad y = ${a}${f}(${b}x)`,
    answer: `y' = ${deriv}`,
    solution: `\\begin{aligned} y' &= ${a} \\cdot \\frac{d}{dx}(${f}(${b}x)) \\\\ y' &= ${deriv} \\end{aligned}`
  });
}

// Template 5: Complex Combinations (Hard/Very Hard/Boss)
for (let i = 1; i <= 100; i++) {
  const a = rand(2, 4);
  const b = rand(2, 4);
  const c = rand(2, 4);
  
  const type = i % 4;
  if (type === 0) {
    // Product: x^n * e^ax
    problems.push({
      id: `gen-500-t5-${i}`,
      topic: "exponential",
      difficulty: "hard",
      statement: `Find the derivative of: \\quad y = x^{${a}} e^{${b}x}`,
      answer: `y' = x^{${a-1}} e^{${b}x} (${a} + ${b}x)`,
      solution: `\\begin{aligned} y' &= ${a}x^{${a-1}} e^{${b}x} + x^{${a}} (${b}e^{${b}x}) \\\\ y' &= x^{${a-1}} e^{${b}x} (${a} + ${b}x) \\end{aligned}`
    });
  } else if (type === 1) {
    // Quotient: ln(x) / x^n
    problems.push({
      id: `gen-500-t5-${i}`,
      topic: "logarithmic",
      difficulty: "hard",
      statement: `Find the derivative of: \\quad y = \\frac{\\ln(x)}{x^{${a}}}`,
      answer: `y' = \\frac{1 - ${a}\\ln x}{x^{${a+1}}}`,
      solution: `\\begin{aligned} y' &= \\frac{(1/x)x^{${a}} - \\ln(x)(${a}x^{${a-1}})}{(x^{${a}})^2} \\\\ y' &= \\frac{x^{${a-1}} - ${a}x^{${a-1}}\\ln x}{x^{${2*a}}} \\\\ y' &= \\frac{1 - ${a}\\ln x}{x^{${a+1}}} \\end{aligned}`
    });
  } else if (type === 2) {
    // Chain: sin(ln(ax))
    problems.push({
      id: `gen-500-t5-${i}`,
      topic: "trig",
      difficulty: "very_hard",
      statement: `Find the derivative of: \\quad y = \\sin(\\ln(${a}x))`,
      answer: `y' = \\frac{\\cos(\\ln(${a}x))}{x}`,
      solution: `\\begin{aligned} y' &= \\cos(\\ln(${a}x)) \\cdot \\frac{d}{dx}(\\ln(${a}x)) \\\\ y' &= \\cos(\\ln(${a}x)) \\cdot \\frac{1}{${a}x} \\cdot ${a} \\\\ y' &= \\frac{\\cos(\\ln(${a}x))}{x} \\end{aligned}`
    });
  } else {
    // Boss: x^x type (Logarithmic Differentiation)
    problems.push({
      id: `gen-500-t5-${i}`,
      topic: "logarithmic",
      difficulty: "boss",
      statement: `Find the derivative of: \\quad y = (${a}x)^{${b}x}`,
      answer: `y' = (${a}x)^{${b}x} \\cdot ${b}(1 + \\ln(${a}x))`,
      solution: `\\begin{aligned} \\ln y &= ${b}x \\ln(${a}x) \\\\ \\frac{y'}{y} &= ${b}\\ln(${a}x) + ${b}x \\cdot \\frac{1}{${a}x} \\cdot ${a} \\\\ \\frac{y'}{y} &= ${b}\\ln(${a}x) + ${b} \\\\ y' &= y \\cdot ${b}(1 + \\ln(${a}x)) \\\\ y' &= (${a}x)^{${b}x} \\cdot ${b}(1 + \\ln(${a}x)) \\end{aligned}`
    });
  }
}

const output = `export const generatedProblems500 = ${JSON.stringify(problems, null, 2)};`;
fs.writeFileSync('src/data/generatedProblems500.ts', output);
console.log('Generated 500 problems.');
