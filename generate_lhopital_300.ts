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

function getRandom(arr: number[]): number {
    return arr[Math.floor(Math.random() * arr.length)];
}

function gcd(a: number, b: number): number {
    return b === 0 ? Math.abs(a) : gcd(b, a % b);
}

function formatFraction(n: number, d: number): string {
    if (d === 0) return "undefined";
    const sign = n * d < 0 ? "-" : "";
    n = Math.abs(n); d = Math.abs(d);
    const divisor = gcd(n, d);
    n /= divisor; d /= divisor;
    if (d === 1) return `${sign}${n}`;
    if (n === 0) return "0";
    return `${sign}\\frac{${n}}{${d}}`;
}

// Arch 1: Pure L'Hopital Sqrt/Trig
function genArch1(idStr: string): ExamProblem {
    let a = getRandom([2, 3, 4, 5, 6]);
    let b = getRandom([2, 3, 4, 5]);

    let statement = `Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + ${a}x^2} - \\cos(${b}x)}{x^2}$.`;
    
    let n = a + b * b;
    let d = 2;
    let ans = formatFraction(n, d);

    let steps = `\\begin{aligned}\n`;
    steps += `L &= \\lim_{x \\to 0} \\frac{\\sqrt{1 + ${a}x^2} - \\cos(${b}x)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n`;
    steps += `&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{\\frac{${a}x}{\\sqrt{1 + ${a}x^2}} + ${b}\\sin(${b}x)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n`;
    steps += `&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{ \\frac{${a}\\sqrt{1 + ${a}x^2} - ${a}x\\left(\\frac{${a}x}{\\sqrt{1 + ${a}x^2}}\\right)}{1 + ${a}x^2} + ${b*b}\\cos(${b}x) }{2} \\\\\n`;
    steps += `&= \\lim_{x \\to 0} \\frac{ \\frac{${a} - ${a*a}x^2}{(1 + ${a}x^2)^{3/2}} + ${b*b}\\cos(${b}x) }{2} \\\\\n`;
    steps += `&= \\frac{${a} + ${b*b}}{2} = ${ans}\n`;
    steps += `\\end{aligned}`;

    return { id: idStr, topic: 'L\'Hôpital\'s Rule', category: 'Evaluating Indeterminate Limits', difficulty: 'very_hard', statement, answer: ans, steps };
}

// Arch 2: Pure Exp/Log 
function genArch2(idStr: string): ExamProblem {
    let a = getRandom([2, 3, 4, 5]);
    let b = getRandom([2, 3, 4, 5]);
    if (a === b) a += 1;
    let c = a - b;

    let statement = `Evaluate the limit $L = \\lim_{x \\to 0} \\frac{e^{${a}x} - \\ln(1+${b}x) - 1 - ${c}x}{x^2}$.`;
    
    let n = a * a + b * b;
    let d = 2;
    let ans = formatFraction(n, d);

    let steps = `\\begin{aligned}\n`;
    steps += `L &= \\lim_{x \\to 0} \\frac{e^{${a}x} - \\ln(1+${b}x) - 1 - ${c}x}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n`;
    steps += `&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{${a}e^{${a}x} - \\frac{${b}}{1+${b}x} - ${c}}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n`;
    steps += `&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{${a*a}e^{${a}x} - ${b}(-1)(1+${b}x)^{-2}(${b})}{2} \\\\\n`;
    steps += `&= \\lim_{x \\to 0} \\frac{${a*a}e^{${a}x} + \\frac{${b*b}}{(1+${b}x)^2}}{2} \\\\\n`;
    steps += `&= \\frac{${a*a}(1) + ${b*b}(1)}{2} = ${ans}\n`;
    steps += `\\end{aligned}`;

    return { id: idStr, topic: 'L\'Hôpital\'s Rule', category: 'Evaluating Indeterminate Limits', difficulty: 'very_hard', statement, answer: ans, steps };
}

// Arch 3: Multi-L'H Trig
function genArch3(idStr: string): ExamProblem {
    let a = getRandom([2, 3]);
    let b = getRandom([4, 5, 6]);

    let statement = `Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sin(${a}x) - ${a}x\\cos(${b}x)}{x^3}$.`;
    
    let n = -(a * a * a) + 3 * a * b * b;
    let d = 6;
    let ans = formatFraction(n, d);

    let steps = `\\begin{aligned}\n`;
    steps += `L &= \\lim_{x \\to 0} \\frac{\\sin(${a}x) - ${a}x\\cos(${b}x)}{x^3} \\quad \\left(\\frac{0}{0}\\right) \\\\\n`;
    steps += `&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{${a}\\cos(${a}x) - \\left(${a}\\cos(${b}x) - ${a*b}x\\sin(${b}x)\\right)}{3x^2} \\\\\n`;
    steps += `&= \\lim_{x \\to 0} \\frac{${a}\\cos(${a}x) - ${a}\\cos(${b}x) + ${a*b}x\\sin(${b}x)}{3x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n`;
    steps += `&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-${a*a}\\sin(${a}x) + ${a*b}\\sin(${b}x) + ${a*b}\\sin(${b}x) + ${a*b*b}x\\cos(${b}x)}{6x} \\\\\n`;
    steps += `&= \\lim_{x \\to 0} \\frac{-${a*a}\\sin(${a}x) + ${2*a*b}\\sin(${b}x) + ${a*b*b}x\\cos(${b}x)}{6x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n`;
    steps += `&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-${a*a*a}\\cos(${a}x) + ${2*a*b*b}\\cos(${b}x) + ${a*b*b}\\cos(${b}x) - ${a*b*b*b}x\\sin(${b}x)}{6} \\\\\n`;
    steps += `&= \\frac{-${a*a*a}(1) + ${3*a*b*b}(1) - 0}{6} = ${ans}\n`;
    steps += `\\end{aligned}`;

    return { id: idStr, topic: 'L\'Hôpital\'s Rule', category: 'Evaluating Indeterminate Limits', difficulty: 'very_hard', statement, answer: ans, steps };
}

// Arch 4: Exponential Powers 
function genArch4(idStr: string): ExamProblem {
    let a = getRandom([2, 3, 4, 5]);
    let b = getRandom([2, 3, 4, 5]);

    let statement = `Evaluate the limit $L = \\lim_{x \\to 0} (1 + ${a}\\sin x)^{\\frac{${b}}{x}}$.`;
    let ans = `e^{${a*b}}`;

    let steps = `\\begin{aligned}\n`;
    steps += `L &= \\lim_{x \\to 0} (1 + ${a}\\sin x)^{\\frac{${b}}{x}} \\quad (1^{\\infty}) \\\\\n`;
    steps += `\\ln L &= \\lim_{x \\to 0} \\frac{${b}\\ln(1 + ${a}\\sin x)}{x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n`;
    steps += `&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{${b} \\cdot \\frac{${a}\\cos x}{1 + ${a}\\sin x}}{1} \\\\\n`;
    steps += `&= \\frac{${a*b}(1)}{1 + 0} = ${a*b} \\\\\n`;
    steps += `L &= ${ans}\n`;
    steps += `\\end{aligned}`;

    return { id: idStr, topic: 'L\'Hôpital\'s Rule', category: 'Evaluating Indeterminate Limits', difficulty: 'very_hard', statement, answer: ans, steps };
}

// Arch 5: Partial Derivative Mix 1
function genArch5(idStr: string): ExamProblem {
    let a = getRandom([2, 3, 4]);
    let b = getRandom([5, 6, 7]);

    let statement = `Let $L(y) = \\lim_{x \\to 0} \\frac{\\cosh(${a}xy) - \\cos(${b}xy)}{x^2}$. \\\\ Find the derivative $L'(y)$.`;
    
    let k = a*a + b*b;
    let n = k; let d = 2;
    let coef = formatFraction(n, d);
    let ans = `${k}y`;

    let steps = `\\begin{aligned}\n`;
    steps += `L(y) &= \\lim_{x \\to 0} \\frac{\\cosh(${a}xy) - \\cos(${b}xy)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n`;
    steps += `&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{${a}y\\sinh(${a}xy) + ${b}y\\sin(${b}xy)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n`;
    steps += `&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{${a*a}y^2\\cosh(${a}xy) + ${b*b}y^2\\cos(${b}xy)}{2} \\\\\n`;
    steps += `&= \\frac{${a*a}y^2(1) + ${b*b}y^2(1)}{2} = ${coef}y^2 \\\\[10pt]\n`;
    steps += `L'(y) &= \\frac{d}{dy} \\left( ${coef}y^2 \\right) = ${k}y\n`;
    steps += `\\end{aligned}`;

    return { id: idStr, topic: 'L\'Hôpital\'s Rule', category: 'Evaluating Indeterminate Limits', difficulty: 'very_hard', statement, answer: ans, steps };
}

// Arch 6: Partial Derivative Mix 2
function genArch6(idStr: string): ExamProblem {
    let a = getRandom([2, 3, 4, 5]);
    let b = getRandom([2, 3, 4, 5]);

    let statement = `Let $f(u,v) = \\lim_{x \\to 0} \\frac{e^{${a} u x^2} - \\cos(${b} v x)}{x^2}$. Compute the product $f_u \\cdot f_v$.`;
    
    let ans = `${a * b * b}v`;

    let steps = `\\begin{aligned}\n`;
    steps += `f(u,v) &= \\lim_{x \\to 0} \\frac{e^{${a}ux^2} - \\cos(${b}vx)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n`;
    steps += `&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{${2*a}ux e^{${a}ux^2} + ${b}v\\sin(${b}vx)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n`;
    steps += `&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{${2*a}u e^{${a}ux^2} + ${2*a}ux(${2*a}ux)e^{${a}ux^2} + ${b*b}v^2\\cos(${b}vx)}{2} \\\\\n`;
    steps += `&= \\frac{${2*a}u(1) + 0 + ${b*b}v^2(1)}{2} = ${a}u + \\frac{${b*b}}{2}v^2 \\\\[10pt]\n`;
    steps += `f_u &= \\frac{\\partial}{\\partial u}\\left(${a}u + \\frac{${b*b}}{2}v^2\\right) = ${a} \\\\\n`;
    steps += `f_v &= \\frac{\\partial}{\\partial v}\\left(${a}u + \\frac{${b*b}}{2}v^2\\right) = ${b*b}v \\\\[10pt]\n`;
    steps += `f_u \\cdot f_v &= (${a})(${b*b}v) = ${ans}\n`;
    steps += `\\end{aligned}`;

    return { id: idStr, topic: 'L\'Hôpital\'s Rule', category: 'Evaluating Indeterminate Limits', difficulty: 'very_hard', statement, answer: ans, steps };
}

const allProblems: ExamProblem[] = [];

// 6 archetypes * 50 = 300 problems
for (let i = 0; i < 50; i++) {
    allProblems.push(genArch1(`gen_lhop_arch1_${i}`));
    allProblems.push(genArch2(`gen_lhop_arch2_${i}`));
    allProblems.push(genArch3(`gen_lhop_arch3_${i}`));
    allProblems.push(genArch4(`gen_lhop_arch4_${i}`));
    allProblems.push(genArch5(`gen_lhop_arch5_${i}`));
    allProblems.push(genArch6(`gen_lhop_arch6_${i}`));
}

const outputPath = path.join(process.cwd(), 'src/data/generatedLhopital300.ts');
const fileContent = `// Generates 300 very hard L'Hopitals Rule calculus problems
export const generatedLhopitalProblems: any[] = ${JSON.stringify(allProblems, null, 2)};
`;

fs.writeFileSync(outputPath, fileContent);
console.log(`Generated ${allProblems.length} L'Hopital's Rule problems to ${outputPath}`);
