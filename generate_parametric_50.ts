import fs from 'fs';
import path from 'path';

export interface ExamProblem {
    id: string;
    topic: string;
    category: string;
    difficulty: "easy" | "medium" | "hard" | "very_hard" | "boss";
    statement: string;
    answer: string;
    steps?: string;
}

const CONSTS_A = [2, 3, 4, 5, 6, 7];
const CONSTS_B = [1, 2, 3, 4, 5];

function getRandom<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}

const gcd = (a: number, b: number): number => b === 0 ? Math.abs(a) : gcd(b, a % b);

function generateComplexRational(idStr: string): ExamProblem {
    let a = getRandom(CONSTS_A);
    let b = getRandom(CONSTS_B);
    
    // x = (t^2 - a) / (t^2 + a)
    // y = bt / (t^2 + a)
    // Testing factoring and quotient rules + chain simplification
    
    let a_str = a === 1 ? '' : a;
    let b_str = b === 1 ? '' : b;

    let statement = `A curve is given parametrically by $x = \\frac{t^2 - ${a}}{t^2 + ${a}}$ and $y = \\frac{${b_str} t}{t^2 + ${a}}$. Find $\\frac{dy}{dx}$ and express it in simplest factored form.`;
    
    // dx/dt = [ 2t(t^2 + a) - (t^2 - a)(2t) ] / (t^2 + a)^2 = [2t^3 + 2at - 2t^3 + 2at] / (t^2+a)^2 = 4at / (t^2 + a)^2
    // dy/dt = [ b(t^2 + a) - bt(2t) ] / (t^2 + a)^2 = [bt^2 + ba - 2bt^2] / (t^2+a)^2 = b(a - t^2) / (t^2 + a)^2
    // dy/dx = [b(a - t^2) / (t^2 + a)^2] / [4at / (t^2 + a)^2] = b(a - t^2) / (4at)

    let num_b = b;
    let ans = `\\frac{${b}(${a} - t^2)}{${4*a}t}`;
    if (b % 2 !== 0 && (4*a) % b === 0) {
       ans = `\\frac{${a} - t^2}{${(4*a)/b}t}`;
    }

    let steps = `\\begin{aligned}\n`;
    steps += `x &= \\frac{t^2 - ${a}}{t^2 + ${a}} \\\\\n`;
    steps += `\\frac{dx}{dt} &= \\frac{2t(t^2 + ${a}) - (t^2 - ${a})(2t)}{(t^2 + ${a})^2} \\\\\n`;
    steps += `&= \\frac{2t^3 + ${2*a}t - 2t^3 + ${2*a}t}{(t^2 + ${a})^2} = \\frac{${4*a}t}{(t^2 + ${a})^2} \\\\[10pt]\n`;

    steps += `y &= \\frac{${b_str}t}{t^2 + ${a}} \\\\\n`;
    steps += `\\frac{dy}{dt} &= \\frac{${b}(t^2 + ${a}) - (${b_str}t)(2t)}{(t^2 + ${a})^2} \\\\\n`;
    steps += `&= \\frac{${b}t^2 + ${a*b} - ${2*b}t^2}{(t^2 + ${a})^2} = \\frac{${a*b} - ${b}t^2}{(t^2 + ${a})^2} = \\frac{${b}(${a} - t^2)}{(t^2 + ${a})^2} \\\\[10pt]\n`;

    steps += `\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{\\frac{${b}(${a} - t^2)}{(t^2 + ${a})^2}}{\\frac{${4*a}t}{(t^2 + ${a})^2}} \\\\\n`;
    steps += `&= \\frac{${b}(${a} - t^2)}{${4*a}t} \\\\\n`;
    if (ans !== `\\frac{${b}(${a} - t^2)}{${4*a}t}`) {
         steps += `&= ${ans} \\\\\n`;
    }
    steps += `\\end{aligned}`;

    return {
        id: idStr,
        topic: 'Derivatives',
        category: 'Parametric Equations',
        difficulty: 'very_hard',
        statement,
        answer: ans,
        steps
    };
}

function generateSecondDerivImplicit(idStr: string): ExamProblem {
    let a = getRandom([2,3,4,5]);
    // x = e^t + e^{-t} => dx/dt = e^t - e^{-t}
    // y = a(e^t - e^{-t}) => dy/dt = a(e^t + e^{-t})
    let statement = `A curve is defined by $x = e^t + e^{-t}$ and $y = ${a}(e^t - e^{-t})$. Find the second derivative $\\frac{d^2y}{dx^2}$ in terms of $t$.`;
    
    // dx/dt = e^t - e^{-t}
    // dy/dt = a(e^t + e^{-t})
    // dy/dx = a(e^t + e^{-t}) / (e^t - e^{-t}) = a \coth(t) (or just leave in terms of e)
    
    // d/dt (dy/dx) = a [ (e^t - e^{-t})(e^t - e^{-t}) - (e^t + e^{-t})(e^t + e^{-t}) ] / (e^t - e^{-t})^2
    // = a [ (e^{2t} - 2 + e^{-2t}) - (e^{2t} + 2 + e^{-2t}) ] / (e^t - e^{-t})^2
    // = a [ -4 ] / (e^t - e^{-t})^2 = -4a / (e^t - e^{-t})^2
    
    // d^2y/dx^2 = [ -4a / (e^t - e^{-t})^2 ] / (e^t - e^{-t}) = -4a / (e^t - e^{-t})^3

    let ans = `-\\frac{${4*a}}{(e^t - e^{-t})^3}`;

    let steps = `\\begin{aligned}\n`;
    steps += `x &= e^t + e^{-t} \\implies \\frac{dx}{dt} = e^t - e^{-t} \\\\\n`;
    steps += `y &= ${a}(e^t - e^{-t}) \\implies \\frac{dy}{dt} = ${a}(e^t + e^{-t}) \\\\[10pt]\n`;

    steps += `\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{${a}(e^t + e^{-t})}{e^t - e^{-t}} \\\\[10pt]\n`;

    steps += `\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= ${a}\\left[\\frac{(e^t - e^{-t})(e^t - e^{-t}) - (e^t + e^{-t})(e^t + e^{-t})}{(e^t - e^{-t})^2}\\right] \\\\\n`;
    steps += `&= ${a}\\left[\\frac{(e^{2t} - 2 + e^{-2t}) - (e^{2t} + 2 + e^{-2t})}{(e^t - e^{-t})^2}\\right] \\\\\n`;
    steps += `&= ${a}\\left[\\frac{-4}{(e^t - e^{-t})^2}\\right] = \\frac{-${4*a}}{(e^t - e^{-t})^2} \\\\[10pt]\n`;

    steps += `\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}(\\frac{dy}{dx})}{\\frac{dx}{dt}} = \\frac{\\frac{-${4*a}}{(e^t - e^{-t})^2}}{e^t - e^{-t}} \\\\\n`;
    steps += `&= -\\frac{${4*a}}{(e^t - e^{-t})^3} \\\\\n`;
    steps += `\\end{aligned}`;

    return {
        id: idStr,
        topic: 'Derivatives',
        category: 'Parametric Equations',
        difficulty: 'very_hard',
        statement,
        answer: ans,
        steps
    };
}


const allProblems: ExamProblem[] = [];

for (let i = 0; i < 25; i++) {
    allProblems.push(generateComplexRational(`gen_param_vh_rat_${i}`));
    allProblems.push(generateSecondDerivImplicit(`gen_param_vh_sec_${i}`));
}

const outputPath = path.join(process.cwd(), 'src/data/generatedParametric50VeryHard.ts');
const fileContent = `// Generates 50 very hard parametric calculus problems
export const generatedParametric50VeryHard: any[] = ${JSON.stringify(allProblems, null, 2)};
`;

fs.writeFileSync(outputPath, fileContent);
console.log(`Generated ${allProblems.length} very hard parametric problems to ${outputPath}`);
