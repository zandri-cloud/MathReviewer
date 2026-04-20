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

// Arch 1: 3rd derivative of x^2 e^{ax}
function genArch1(idStr: string): ExamProblem {
    let a = getRandom([2, 3, 4, 5, 6]);
    let statement = `Find the third derivative $f'''(x)$ of $f(x) = x^2 e^{${a}x}$.`;

    let c1 = a * a * a;
    let c2 = 6 * a * a;
    let c3 = 6 * a;
    let ans = `e^{${a}x}(${c1}x^2 + ${c2}x + ${c3})`;

    let steps = `\\begin{aligned}\n`;
    steps += `f'(x) &= \\frac{d}{dx}(x^2)e^{${a}x} + x^2\\frac{d}{dx}(e^{${a}x}) \\\\\n`;
    steps += `&= 2x e^{${a}x} + ${a}x^2 e^{${a}x} = e^{${a}x}(${a}x^2 + 2x) \\\\[10pt]\n`;
    steps += `f''(x) &= \\frac{d}{dx}(e^{${a}x})(${a}x^2 + 2x) + e^{${a}x}\\frac{d}{dx}(${a}x^2 + 2x) \\\\\n`;
    steps += `&= ${a}e^{${a}x}(${a}x^2 + 2x) + e^{${a}x}(${2*a}x + 2) \\\\\n`;
    steps += `&= e^{${a}x}(${a*a}x^2 + ${2*a}x + ${2*a}x + 2) = e^{${a}x}(${a*a}x^2 + ${4*a}x + 2) \\\\[10pt]\n`;
    steps += `f'''(x) &= \\frac{d}{dx}(e^{${a}x})(${a*a}x^2 + ${4*a}x + 2) + e^{${a}x}\\frac{d}{dx}(${a*a}x^2 + ${4*a}x + 2) \\\\\n`;
    steps += `&= ${a}e^{${a}x}(${a*a}x^2 + ${4*a}x + 2) + e^{${a}x}(${2*a*a}x + ${4*a}) \\\\\n`;
    steps += `&= e^{${a}x}(${c1}x^2 + ${4*a*a}x + ${2*a} + ${2*a*a}x + ${4*a}) \\\\\n`;
    steps += `&= e^{${a}x}(${c1}x^2 + ${c2}x + ${c3}) \\\\\n`;
    steps += `\\end{aligned}`;

    return { id: idStr, topic: 'Higher-Order Derivatives', category: 'Derivatives', difficulty: 'very_hard', statement, answer: ans, steps };
}

// Arch 2: 3rd derivative of e^{ax} \sin(bx)
function genArch2(idStr: string): ExamProblem {
    let a = getRandom([2, 3, 4]);
    let b = getRandom([2, 3, 4]);
    if (a === b) b++;

    let statement = `Find the third derivative $f'''(x)$ of $f(x) = e^{${a}x} \\sin(${b}x)$.`;

    let c1 = a * a - b * b;
    let c2 = 2 * a * b;
    let d1 = a * a * a - 3 * a * b * b;
    let d2 = 3 * a * a * b - b * b * b;

    let d1Str = d1 === 1 ? '' : d1 === -1 ? '-' : d1;
    let d2Str = d2 > 0 ? `+ ${d2}` : `- ${Math.abs(d2)}`;
    let ans = `e^{${a}x} \\left[ ${d1Str}\\sin(${b}x) ${d2Str}\\cos(${b}x) \\right]`;

    let steps = `\\begin{aligned}\n`;
    steps += `f'(x) &= e^{${a}x}(${a}\\sin(${b}x)) + e^{${a}x}(${b}\\cos(${b}x)) \\\\\n`;
    steps += `&= e^{${a}x}(${a}\\sin(${b}x) + ${b}\\cos(${b}x)) \\\\[10pt]\n`;
    steps += `f''(x) &= ${a}e^{${a}x}(${a}\\sin(${b}x) + ${b}\\cos(${b}x)) + e^{${a}x}(${a*b}\\cos(${b}x) - ${b*b}\\sin(${b}x)) \\\\\n`;
    steps += `&= e^{${a}x} \\left[ (${a*a} - ${b*b})\\sin(${b}x) + (${a*b} + ${a*b})\\cos(${b}x) \\right] \\\\\n`;
    steps += `&= e^{${a}x} \\left[ ${c1}\\sin(${b}x) + ${c2}\\cos(${b}x) \\right] \\\\[10pt]\n`;
    steps += `f'''(x) &= ${a}e^{${a}x} \\left[ ${c1}\\sin(${b}x) + ${c2}\\cos(${b}x) \\right] + e^{${a}x} \\left[ ${c1*b}\\cos(${b}x) - ${c2*b}\\sin(${b}x) \\right] \\\\\n`;
    steps += `&= e^{${a}x} \\left[ (${a*c1} - ${c2*b})\\sin(${b}x) + (${a*c2} + ${c1*b})\\cos(${b}x) \\right] \\\\\n`;
    steps += `&= e^{${a}x} \\left[ (${a*c1 - c2*b})\\sin(${b}x) + (${a*c2 + c1*b})\\cos(${b}x) \\right] \\\\\n`;
    steps += `&= ${ans} \\\\\n`;
    steps += `\\end{aligned}`;

    return { id: idStr, topic: 'Higher-Order Derivatives', category: 'Derivatives', difficulty: 'very_hard', statement, answer: ans, steps };
}

// Arch 3: 3rd derivative of ln(a^2 x^2 - b^2) using log tricks
function genArch3(idStr: string): ExamProblem {
    let a = getRandom([2, 3, 4, 5]);
    let b = getRandom([1, 2, 3, 5, 7]);
    if (a === b) b++;

    let statement = `Find the third derivative $f'''(x)$ of $f(x) = \\ln(${a*a}x^2 - ${b*b})$ for $x > \\frac{${b}}{${a}}$. \\\\ \\textit{Hint: Factor the argument first.}`;

    let ans = `\\frac{${2*a*a*a}}{(${a}x-${b})^3} + \\frac{${2*a*a*a}}{(${a}x+${b})^3}`;

    let steps = `\\begin{aligned}\n`;
    steps += `f(x) &= \\ln((${a}x - ${b})(${a}x + ${b})) = \\ln(${a}x - ${b}) + \\ln(${a}x + ${b}) \\\\[10pt]\n`;
    steps += `f'(x) &= \\frac{${a}}{${a}x - ${b}} + \\frac{${a}}{${a}x + ${b}} \\\\\n`;
    steps += `&= ${a}(${a}x - ${b})^{-1} + ${a}(${a}x + ${b})^{-1} \\\\[10pt]\n`;
    steps += `f''(x) &= -${a*a}(${a}x - ${b})^{-2} - ${a*a}(${a}x + ${b})^{-2} \\\\[10pt]\n`;
    steps += `f'''(x) &= ${2*a*a*a}(${a}x - ${b})^{-3} + ${2*a*a*a}(${a}x + ${b})^{-3} \\\\\n`;
    steps += `&= ${ans} \\\\\n`;
    steps += `\\end{aligned}`;

    return { id: idStr, topic: 'Higher-Order Derivatives', category: 'Derivatives', difficulty: 'very_hard', statement, answer: ans, steps };
}

// Arch 4: 3rd derivative of arctan(ax)
function genArch4(idStr: string): ExamProblem {
    let a = getRandom([2, 3, 4, 5]);
    let statement = `Find the third derivative $f'''(x)$ of $f(x) = \\arctan(${a}x)$.`;

    let a2 = a * a;
    let a3 = a2 * a;
    let ans = `\\frac{${2*a3}(${3*a2}x^2 - 1)}{(1 + ${a2}x^2)^3}`;

    let steps = `\\begin{aligned}\n`;
    steps += `f'(x) &= \\frac{${a}}{1 + (${a}x)^2} = ${a}(1 + ${a2}x^2)^{-1} \\\\[10pt]\n`;
    steps += `f''(x) &= -${a}(1 + ${a2}x^2)^{-2} (\\frac{d}{dx}(1 + ${a2}x^2)) \\\\\n`;
    steps += `&= -${a}(1 + ${a2}x^2)^{-2} (${2*a2}x) = -${2*a3}x(1 + ${a2}x^2)^{-2} \\\\[10pt]\n`;
    steps += `f'''(x) &= \\frac{d}{dx}(-${2*a3}x)(1 + ${a2}x^2)^{-2} + (-${2*a3}x)\\frac{d}{dx}((1 + ${a2}x^2)^{-2}) \\\\\n`;
    steps += `&= -${2*a3}(1 + ${a2}x^2)^{-2} + (-${2*a3}x)(-2)(1 + ${a2}x^2)^{-3}(${2*a2}x) \\\\\n`;
    steps += `&= \\frac{-${2*a3}}{(1 + ${a2}x^2)^2} + \\frac{${8*a3*a2}x^2}{(1 + ${a2}x^2)^3} \\\\\n`;
    steps += `&= \\frac{-${2*a3}(1 + ${a2}x^2) + ${8*a3*a2}x^2}{(1 + ${a2}x^2)^3} \\\\\n`;
    steps += `&= \\frac{-${2*a3} - ${2*a3*a2}x^2 + ${8*a3*a2}x^2}{(1 + ${a2}x^2)^3} \\\\\n`;
    steps += `&= \\frac{-${2*a3} + ${6*a3*a2}x^2}{(1 + ${a2}x^2)^3} \\\\\n`;
    steps += `&= \\frac{${2*a3}(${3*a2}x^2 - 1)}{(1 + ${a2}x^2)^3} \\\\\n`;
    steps += `\\end{aligned}`;

    return { id: idStr, topic: 'Higher-Order Derivatives', category: 'Derivatives', difficulty: 'very_hard', statement, answer: ans, steps };
}

// Arch 5: 4th derivative of c(ax+1)^{-1/2}
function genArch5(idStr: string): ExamProblem {
    let c = getRandom([2, 4, 8, 16]);
    let a = getRandom([2, 3, 5]);

    let statement = `Find the fourth derivative $f^{(4)}(x)$ of $f(x) = \\frac{${c}}{\\sqrt{${a}x + 1}}$.`;

    let n = 105 * a * a * a * a * c;
    let ans = `\\frac{${n}}{16(${a}x + 1)^{9/2}}`;

    let steps = `\\begin{aligned}\n`;
    steps += `f(x) &= ${c}(${a}x + 1)^{-1/2} \\\\[10pt]\n`;
    steps += `f'(x) &= ${c} \\left(-\\frac{1}{2}\\right)(${a}x + 1)^{-3/2}(${a}) = -\\frac{${c*a}}{2}(${a}x + 1)^{-3/2} \\\\[10pt]\n`;
    steps += `f''(x) &= -\\frac{${c*a}}{2} \\left(-\\frac{3}{2}\\right)(${a}x + 1)^{-5/2}(${a}) = \\frac{${3*c*a*a}}{4}(${a}x + 1)^{-5/2} \\\\[10pt]\n`;
    steps += `f'''(x) &= \\frac{${3*c*a*a}}{4} \\left(-\\frac{5}{2}\\right)(${a}x + 1)^{-7/2}(${a}) = -\\frac{${15*c*a*a*a}}{8}(${a}x + 1)^{-7/2} \\\\[10pt]\n`;
    steps += `f^{(4)}(x) &= -\\frac{${15*c*a*a*a}}{8} \\left(-\\frac{7}{2}\\right)(${a}x + 1)^{-9/2}(${a}) = \\frac{${105*c*a*a*a*a}}{16}(${a}x + 1)^{-9/2} \\\\\n`;
    steps += `&= ${ans} \\\\\n`;
    steps += `\\end{aligned}`;

    return { id: idStr, topic: 'Higher-Order Derivatives', category: 'Derivatives', difficulty: 'very_hard', statement, answer: ans, steps };
}

// Arch 6: 5th derivative of cx^3 ln(ax)
function genArch6(idStr: string): ExamProblem {
    let c = getRandom([2, 3, 4, 5, 7]);
    let a = getRandom([2, 3, 4, 5, 6]);

    let statement = `Find the fifth derivative $f^{(5)}(x)$ of $f(x) = ${c}x^3 \\ln(${a}x)$.`;

    let ans = `-\\frac{${6*c}}{x^2}`;

    let steps = `\\begin{aligned}\n`;
    steps += `f'(x) &= ${c} \\left[ 3x^2 \\ln(${a}x) + x^3 \\left(\\frac{1}{x}\\right) \\right] = ${c}(3x^2 \\ln(${a}x) + x^2) \\\\[10pt]\n`;
    steps += `f''(x) &= ${c} \\left[ 6x \\ln(${a}x) + 3x^2 \\left(\\frac{1}{x}\\right) + 2x \\right] = ${c}(6x \\ln(${a}x) + 5x) \\\\[10pt]\n`;
    steps += `f'''(x) &= ${c} \\left[ 6\\ln(${a}x) + 6x \\left(\\frac{1}{x}\\right) + 5 \\right] = ${c}(6\\ln(${a}x) + 11) \\\\[10pt]\n`;
    steps += `f^{(4)}(x) &= ${c} \\left[ 6 \\left(\\frac{1}{x}\\right) + 0 \\right] = \\frac{${6*c}}{x} = ${6*c}x^{-1} \\\\[10pt]\n`;
    steps += `f^{(5)}(x) &= -${6*c}x^{-2} = ${ans} \\\\\n`;
    steps += `\\end{aligned}`;

    return { id: idStr, topic: 'Higher-Order Derivatives', category: 'Derivatives', difficulty: 'very_hard', statement, answer: ans, steps };
}

const allProblems: ExamProblem[] = [];

// 6 archetypes * 50 = 300 problems
for (let i = 0; i < 50; i++) {
    allProblems.push(genArch1(`gen_higher_order_arch1_${i}`));
    allProblems.push(genArch2(`gen_higher_order_arch2_${i}`));
    allProblems.push(genArch3(`gen_higher_order_arch3_${i}`));
    allProblems.push(genArch4(`gen_higher_order_arch4_${i}`));
    allProblems.push(genArch5(`gen_higher_order_arch5_${i}`));
    allProblems.push(genArch6(`gen_higher_order_arch6_${i}`));
}

const outputPath = path.join(process.cwd(), 'src/data/generatedHigherOrder300.ts');
const fileContent = `// Generates 300 very hard Higher-Order Derivatives calculus problems
export const generatedHigherOrderProblems: any[] = ${JSON.stringify(allProblems, null, 2)};
`;

fs.writeFileSync(outputPath, fileContent);
console.log(`Generated ${allProblems.length} Higher-Order Derivative problems to ${outputPath}`);
