const fs = require('fs');

const dataPath = 'src/data/calculusData.tsx';
let content = fs.readFileSync(dataPath, 'utf8');

const newFormulas = `
  { id: 'f-pythagorean-1', category: 'Trigonometric Identities', name: 'Pythagorean Identity (Sine & Cosine)', latex: '\\\\sin^2\\\\theta + \\\\cos^2\\\\theta = 1' },
  { id: 'f-pythagorean-2', category: 'Trigonometric Identities', name: 'Pythagorean Identity (Tangent & Secant)', latex: '1 + \\\\tan^2\\\\theta = \\\\sec^2\\\\theta' },
  { id: 'f-pythagorean-3', category: 'Trigonometric Identities', name: 'Pythagorean Identity (Cotangent & Cosecant)', latex: '1 + \\\\cot^2\\\\theta = \\\\csc^2\\\\theta' },
  { id: 'f-prod-sum-1', category: 'Trigonometric Identities', name: 'Product to Sum (sin cos)', latex: '\\\\sin x \\\\cos y = \\\\frac{1}{2}[\\\\sin(x+y) + \\\\sin(x-y)]' },
  { id: 'f-prod-sum-2', category: 'Trigonometric Identities', name: 'Product to Sum (cos sin)', latex: '\\\\cos x \\\\sin y = \\\\frac{1}{2}[\\\\sin(x+y) - \\\\sin(x-y)]' },
  { id: 'f-prod-sum-3', category: 'Trigonometric Identities', name: 'Product to Sum (cos cos)', latex: '\\\\cos x \\\\cos y = \\\\frac{1}{2}[\\\\cos(x+y) + \\\\cos(x-y)]' },
  { id: 'f-prod-sum-4', category: 'Trigonometric Identities', name: 'Product to Sum (sin sin)', latex: '\\\\sin x \\\\sin y = \\\\frac{1}{2}[\\\\cos(x-y) - \\\\cos(x+y)]' },
  { id: 'f-sum-prod-1', category: 'Trigonometric Identities', name: 'Sum to Product (sin + sin)', latex: '\\\\sin x + \\\\sin y = 2\\\\sin\\\\left(\\\\frac{x+y}{2}\\\\right)\\\\cos\\\\left(\\\\frac{x-y}{2}\\\\right)' },
  { id: 'f-sum-prod-2', category: 'Trigonometric Identities', name: 'Sum to Product (sin - sin)', latex: '\\\\sin x - \\\\sin y = 2\\\\cos\\\\left(\\\\frac{x+y}{2}\\\\right)\\\\sin\\\\left(\\\\frac{x-y}{2}\\\\right)' },
  { id: 'f-sum-prod-3', category: 'Trigonometric Identities', name: 'Sum to Product (cos + cos)', latex: '\\\\cos x + \\\\cos y = 2\\\\cos\\\\left(\\\\frac{x+y}{2}\\\\right)\\\\cos\\\\left(\\\\frac{x-y}{2}\\\\right)' },
  { id: 'f-sum-prod-4', category: 'Trigonometric Identities', name: 'Sum to Product (cos - cos)', latex: '\\\\cos x - \\\\cos y = -2\\\\sin\\\\left(\\\\frac{x+y}{2}\\\\right)\\\\sin\\\\left(\\\\frac{x-y}{2}\\\\right)' },
  { id: 'f-half-sin', category: 'Trigonometric Identities', name: 'Half-Angle (Sine)', latex: '\\\\sin\\\\left(\\\\frac{\\\\theta}{2}\\\\right) = \\\\pm\\\\sqrt{\\\\frac{1-\\\\cos\\\\theta}{2}}' },
  { id: 'f-half-cos', category: 'Trigonometric Identities', name: 'Half-Angle (Cosine)', latex: '\\\\cos\\\\left(\\\\frac{\\\\theta}{2}\\\\right) = \\\\pm\\\\sqrt{\\\\frac{1+\\\\cos\\\\theta}{2}}' },
  { id: 'f-half-tan-1', category: 'Trigonometric Identities', name: 'Half-Angle (Tangent) 1', latex: '\\\\tan\\\\left(\\\\frac{\\\\theta}{2}\\\\right) = \\\\pm\\\\sqrt{\\\\frac{1-\\\\cos\\\\theta}{1+\\\\cos\\\\theta}}' },
  { id: 'f-half-tan-2', category: 'Trigonometric Identities', name: 'Half-Angle (Tangent) 2', latex: '\\\\tan\\\\left(\\\\frac{\\\\theta}{2}\\\\right) = \\\\frac{\\\\sin\\\\theta}{1+\\\\cos\\\\theta}' },
  { id: 'f-half-tan-3', category: 'Trigonometric Identities', name: 'Half-Angle (Tangent) 3', latex: '\\\\tan\\\\left(\\\\frac{\\\\theta}{2}\\\\right) = \\\\frac{1-\\\\cos\\\\theta}{\\\\sin\\\\theta}' },
`;

content = content.replace(
  "export const formulas: Formula[] = [",
  "export const formulas: Formula[] = [" + newFormulas
);

const newProblems = [];

for (let i = 1; i <= 20; i++) {
  newProblems.push(
    "      {" +
    "        id: 'trans-easy-gen-" + i + "'," +
    "        difficulty: 'Easy'," +
    "        type: 'free-response'," +
    "        statement: 'Find the derivative of: \\\\quad y = \\\\sin(" + i + "x) + e^{" + i + "x}'," +
    "        method: 'Sum Rule and Chain Rule'," +
    "        solution: '\\\\begin{aligned}\\n y\\' &= \\\\frac{d}{dx}(\\\\sin(" + i + "x)) + \\\\frac{d}{dx}(e^{" + i + "x}) \\\\\\\\\\n y\\' &= " + i + "\\\\cos(" + i + "x) + " + i + "e^{" + i + "x}\\n\\\\end{aligned}'," +
    "        finalAnswer: 'y\\' = " + i + "\\\\cos(" + i + "x) + " + i + "e^{" + i + "x}'" +
    "      }"
  );
}

for (let i = 1; i <= 50; i++) {
  newProblems.push(
    "      {" +
    "        id: 'trans-hard-gen-" + i + "'," +
    "        difficulty: 'Hard'," +
    "        type: 'free-response'," +
    "        statement: 'Find the derivative of: \\\\quad y = \\\\ln\\\\left(\\\\frac{\\\\sqrt{\\\\sin^2(" + i + "x) + \\\\cosh(" + i + "x)}}{e^{" + i + "x}\\\\tan^{-1}(x)}\\\\right)'," +
    "        method: 'Logarithmic Differentiation and Logical Algebra'," +
    "        solution: '\\\\begin{aligned}\\n \\\\ln y &= \\\\frac{1}{2}\\\\ln(\\\\sin^2(" + i + "x) + \\\\cosh(" + i + "x)) - " + i + "x - \\\\ln(\\\\tan^{-1}(x)) \\\\\\\\\\n \\\\frac{y\\'}{y} &= \\\\frac{1}{2} \\\\frac{2(" + i + ")\\\\sin(" + i + "x)\\\\cos(" + i + "x) + " + i + "\\\\sinh(" + i + "x)}{\\\\sin^2(" + i + "x) + \\\\cosh(" + i + "x)} - " + i + " - \\\\frac{1}{(1+x^2)\\\\tan^{-1}(x)} \\\\\\\\\\n y\\' &= y \\\\left[ \\\\frac{" + i + "\\\\sin(2\\\\cdot" + i + "x) + " + i + "\\\\sinh(" + i + "x)}{2(\\\\sin^2(" + i + "x) + \\\\cosh(" + i + "x))} - " + i + " - \\\\frac{1}{(1+x^2)\\\\tan^{-1}(x)} \\\\right]\\n\\\\end{aligned}'," +
    "        finalAnswer: 'y\\' = y \\\\left[ \\\\frac{" + i + "\\\\sin(" + (2*i) + "x) + " + i + "\\\\sinh(" + i + "x)}{2(\\\\sin^2(" + i + "x) + \\\\cosh(" + i + "x))} - " + i + " - \\\\frac{1}{(1+x^2)\\\\tan^{-1}(x)} \\\\right]'" +
    "      }"
  );
}

const problemsString = newProblems.join(',');

const topicRegex = /(id:\s*'derivatives-transcendental'[\s\S]*?problems:\s*\[)/;
content = content.replace(topicRegex, "$1" + problemsString + ",");

fs.writeFileSync(dataPath, content, 'utf8');
console.log('Successfully added formulas and problems.');
