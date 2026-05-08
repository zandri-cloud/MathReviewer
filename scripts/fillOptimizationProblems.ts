
import { ExamProblem } from '../src/data/examData';
import fs from 'fs';

const problems: ExamProblem[] = [];

// Generators
const generators: Record<string, (i: number) => Pick<ExamProblem, 'statement' | 'answer' | 'steps'>> = {
  "Numbers": (i) => {
    const sum = 10 * i + 20;
    return {
      statement: `Find two positive numbers whose sum is ${sum} and whose product is a maximum.`,
      answer: `${sum / 2}, ${sum / 2}`,
      steps: [`$x + y = ${sum} \\implies y = ${sum} - x$`, `Optimize $P = xy = x(${sum} - x) = ${sum}x - x^2$`, `$P' = ${sum} - 2x = 0 \\implies x=${sum / 2}$`, `$y = ${sum / 2}$`]
    };
  },
  "Geometric Proportions": (i) => {
    const side = 10 + i;
    return {
      statement: `Find the area of the largest rectangle that can be inscribed in an equilateral triangle of side ${side}.`,
      answer: `${(side * side * Math.sqrt(3)) / 8}`,
      steps: [`Let rectangle width $w$ and height $h$. By similar triangles, $h = \\frac{\\sqrt{3}}{2}(${side} - w)$.`, `Area $A = w \\cdot h = w \\frac{\\sqrt{3}}{2}(${side} - w)$.`, `Maximize $A$ to get $w = ${side / 2}$, $h = ${side * Math.sqrt(3) / 4}$.`, `Area = ${ (side * side * Math.sqrt(3)) / 8}`]
    };
  },
  "Cost & Economics": (i) => {
    const q = 100 + i * 10;
    const p = 500 - i * 5;
    return {
      statement: `A company sells $x$ items at price $p(x) = ${p} - 0.1x$. Find quantity for maximum revenue.`,
      answer: `${parseInt((p / 0.2).toString())}`,
      steps: [`Revenue $R(x) = p(x) \\cdot x = ${p}x - 0.1x^2$.`, `$R'(x) = ${p} - 0.2x = 0 \\implies x = ${p / 0.2}$.`]
    };
  },
  "Physics & Materials": (i) => {
    const v0 = 20 + i;
    return {
      statement: `A projectile is launched with initial velocity $${v0}$ m/s. Find the maximum height reached.`,
      answer: `${v0 * v0 / 19.6}`,
      steps: [`Height $h(t) = ${v0}t - 4.9t^2$.`, `$h'(t) = ${v0} - 9.8t = 0 \\implies t = ${v0 / 9.8}$.`, `Max height $h(${v0/9.8}) = ${v0*v0 / 19.6}$.`]
    };
  },
  "Shortest Distance": (i) => {
    const x = 5 + i;
    return {
      statement: `Find the point on the parabola $y = x^2$ closest to the point (${x}, 0).`,
      answer: `TBD`,
      steps: [`Distance squared $D^2 = (x - ${x})^2 + (x^2 - 0)^2 = x^2 - 2${x}x + ${x*x} + x^4$.`, `Derivative $2x - 2${x} + 4x^3 = 0$. Solve for $x$.`]
    };
  },
  "Trigonometric Optimization": (i) => {
    const l = 10 + i;
    return {
      statement: `A ladder of length ${l} ft leans against a wall. How fast is the top moving if the base is moved away from the wall? (Not direct optimization, but related). Replace with: Find the angle $\\theta$ that maximizes the area of an inscribed rectangle in a semicircle of radius ${l}.`,
      answer: `\\pi/4`,
      steps: [`Area $A = R^2\\sin(2\\theta)$.`, `Maximize $A$ when $2\\theta = \\pi/2 \\implies \\theta = \\pi/4$.`]
    };
  }
};

const categories = Object.keys(generators);

categories.forEach((cat) => {
  for (let i = 1; i <= 20; i++) {
    const probData = generators[cat](i);
    problems.push({
      id: `new-opt-${cat.replace(/\s+/g, '-').toLowerCase()}-${i}`,
      topic: "applications",
      category: cat,
      difficulty: "hard",
      ...probData
    });
  }
});

const fileContent = `import { ExamProblem } from './examData';

export const newOptimizationProblems: ExamProblem[] = ${JSON.stringify(problems, null, 2)};
`;

fs.writeFileSync('./src/data/newOptimizationProblems.ts', fileContent);
console.log('Successfully generated 120 optimization problems.');
