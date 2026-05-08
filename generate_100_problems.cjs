const fs = require('fs');

const difficulties = ['easy', 'medium', 'hard', 'very_hard', 'boss'];
const topics = ['trig', 'inverse_trig', 'hyperbolic', 'logarithmic', 'exponential'];

let problems = [];
let idCounter = 1;

for (let diff of difficulties) {
    for (let i = 0; i < 20; i++) {
        const topic = topics[i % topics.length];
        
        let statement = '';
        let answer = '';
        let method = '';
        
        // Generate pseudo-random but structurally unique problems
        if (diff === 'easy') {
            statement = `y = \\sin(${i+2}e^{${i+1}x})`;
            answer = `y' = ${i+2}(${i+1})e^{${i+1}x}\\cos(${i+2}e^{${i+1}x})`;
            method = 'Chain rule only. 2 transcendental families.';
        } else if (diff === 'medium') {
            statement = `y = \\frac{\\cos(${i+2}x)}{e^{${i+1}x}}`;
            answer = `y' = \\frac{-${i+2}\\sin(${i+2}x) - ${i+1}\\cos(${i+2}x)}{e^{${i+1}x}}`;
            method = 'Quotient rule and chain rule.';
        } else if (diff === 'hard') {
            statement = `y = \\ln(\\cosh(\\sin(${i+2}x)))`;
            answer = `y' = ${i+2}\\cos(${i+2}x)\\tanh(\\sin(${i+2}x))`;
            method = '3-4 layer nested chain rule.';
        } else if (diff === 'very_hard') {
            statement = `y = (\\arctan(${i+1}x))^{\\sinh(${i+2}x)}`;
            answer = `y' = (\\arctan(${i+1}x))^{\\sinh(${i+2}x)} \\left[ ${i+2}\\cosh(${i+2}x)\\ln(\\arctan(${i+1}x)) + \\frac{${i+1}\\sinh(${i+2}x)}{(1+${(i+1)*(i+1)}x^2)\\arctan(${i+1}x)} \\right]`;
            method = 'Logarithmic differentiation required.';
        } else if (diff === 'boss') {
            statement = `y = \\ln\\left( \\frac{\\cosh^2(${i+2}x) - \\sinh^2(${i+2}x)}{\\sec^2(${i+1}x) - \\tan^2(${i+1}x)} \\cdot e^{\\arcsin(\\sin(${i+3}x))} \\right)`;
            answer = `y' = ${i+3}`;
            method = 'Must be simplified first using identities.';
        }
        
        problems.push({
            id: `gen100-${idCounter++}`,
            topic: topic,
            difficulty: diff,
            statement: statement,
            method: method,
            answer: answer,
            steps: [
                "Identify the outer function and inner function.",
                "Apply the appropriate differentiation rules.",
                "Simplify the resulting expression to get the final answer."
            ]
        });
    }
}

const fileContent = `export type Problem = {
  id: string;
  topic: "trig" | "inverse_trig" | "hyperbolic" | "logarithmic" | "exponential";
  difficulty: "easy" | "medium" | "hard" | "very_hard" | "boss";
  statement: string;
  method?: string;
  answer: string;
  steps?: string[];
};

export const generatedProblems100: Problem[] = ${JSON.stringify(problems, null, 2)};
`;

fs.writeFileSync('src/data/generatedProblems100.ts', fileContent);
console.log('Generated 100 problems.');
