import fs from "fs";

const problems: any[] = [];
let idCounter = 60000;

function gen(
  category: string,
  difficulty: "easy" | "medium" | "hard" | "very_hard" | "boss",
  statement: string,
  answer: string,
  steps: string[],
) {
  problems.push({
    id: `limits-var-${idCounter++}`,
    topic: "limits",
    category,
    difficulty,
    statement,
    answer,
    steps,
  });
}

// 1. Limit laws (hard complex algebra using conjugates, factorizations)
for (let i = 0; i < 50; i++) {
  const a = Math.floor(Math.random() * 8) + 1;
  const b = Math.floor(Math.random() * 8) + 1;
  const c = Math.floor(Math.random() * 8) + 1;
  // Type: \lim_{x \to a} \frac{\sqrt{x+b} - \sqrt{a+b}}{x-a} or similar rational functions
  if (i % 2 === 0) {
    gen("Limit Laws", "hard", `\\lim_{x \\to ${a}} \\frac{x^2 - ${(a+c)}x + ${a*c}}{x - ${a}}`, `${a-c}`, [`Factor: $x^2 - ${(a+c)}x + ${a*c} = (x-${a})(x-${c})$.`, `Cancel $(x-${a})$.`, `Evaluate: ${a}-${c} = ${a-c}.`]);
  } else {
    gen("Limit Laws", "very_hard", `\\lim_{x \\to ${a}} \\frac{\\sqrt{x+${b}} - \\sqrt{${a+b}}}{x-${a}}`, `\\frac{1}{2\\sqrt{${a+b}}}`, [`Multiply by conjugate: $\\frac{\\sqrt{x+${b}} + \\sqrt{${a+b}}}{\\sqrt{x+${b}} + \\sqrt{${a+b}}}$.`, `Simplify: $\\frac{x+${b} - (${a+b})}{(x-${a})(\\sqrt{x+${b}} + \\sqrt{${a+b}})}$.`]);
  }
}

// 2. One sided limits (piecewise, absolute value)
for (let i = 0; i < 50; i++) {
  const a = Math.floor(Math.random() * 5) + 1;
  const b = Math.floor(Math.random() * 3) + 1;
  gen("One-Sided Limits", "medium", `\\lim_{x \\to ${a}^-} \\frac{${b}x - ${a*b}}{|x-${a}|}`, `${-b}`, [`Since $x < ${a}$, $|x-${a}| = -(x-${a})$.`, `Numerator: ${b}(x-${a})$.`, `Limit: $\\frac{${b}(x-${a})}{-(x-${a})} = -${b}$.`]);
}

// 3. Limits at infinity (complex rational/root functions)
for (let i = 0; i < 50; i++) {
  const a = Math.floor(Math.random() * 5) + 1;
  const b = Math.floor(Math.random() * 5) + 1;
  gen("Limits at Infinity", "hard", `\\lim_{x \\to \\infty} \\frac{\\sqrt{${a}x^4 + ${b}x^2}}{${a}x^2 + ${b}}`, `\\frac{\\sqrt{${a}}}{${a}}`, [`Divide numerator and denominator by $x^2$.`, `Limit of $\\frac{\\sqrt{${a} + ${b}/x^2}}{{${a} + ${b}/x^2}}$ is $\\frac{\\sqrt{${a}}}{${a}}$.`]);
}

// 4. Infinite limits & Squeeze Theorem
for (let i = 0; i < 50; i++) {
  const a = Math.floor(Math.random() * 5) + 1;
  if (i % 2 === 0) {
    gen("Infinite Limits", "hard", `\\lim_{x \\to \\infty} ${a}x^2 \\sin(\\frac{1}{x^2})`, `${a}`, [`Let $u = 1/x^2$. As $x \\to \\infty, u \\to 0$.`, `Limit: $\\lim_{u \\to 0} \\frac{${a} \\sin(u)}{u} = ${a}$.`]);
  } else {
    gen("Squeeze Theorem", "very_hard", `\\lim_{x \\to 0} x^2 \\cos(\\frac{${a}}{x})`, "0", [`Since $-1 \\le \\cos(\\frac{${a}}{x}) \\le 1$.`, `It follows that $-x^2 \\le x^2 \\cos(\\frac{${a}}{x}) \\le x^2$.`, `Since $\\lim_{x \\to 0} (-x^2) = 0$ and $\\lim_{x \\to 0} (x^2) = 0$, by Squeeze Theorem, limit is 0.`]);
  }
}

// 5. Indeterminate forms (L'Hôpital)
for (let i = 0; i < 50; i++) {
  const a = Math.floor(Math.random() * 8) + 1;
  const b = Math.floor(Math.random() * 8) + 1;
  gen("Indeterminate Forms", "very_hard", `\\lim_{x \\to 0} \\frac{e^{${a}x} - 1 - ${a}x}{x^2}`, `${a*a/2}`, [`Use L'Hôpital's Rule twice.`, `First derivative: $\\frac{${a}e^{${a}x} - ${a}}{2x}$.`, `Second derivative: $\\frac{${a*a}e^{${a}x}}{2}$.`, `Evaluate at $x=0$: ${a*a/2}.`]);
}

const fileContent = `
import { ExamProblem } from './examData';

export const generatedLimits250: ExamProblem[] = ${JSON.stringify(problems, null, 2)};
`;

fs.writeFileSync("src/data/generatedLimits250.ts", fileContent);
console.log(`Successfully generated ${problems.length} limit problems.`);
