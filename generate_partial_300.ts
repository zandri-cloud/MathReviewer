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

// Archetype 1: Exponential Product (a>=4 to avoid neg powers easily)
function genArch1(idStr: string): ExamProblem {
    let c = getRandom([2, 3, 4, 5]);
    let a = getRandom([4, 5, 6, 7]);
    let b = getRandom([2, 3, 4, 5]);

    let c_str = c === 1 ? '' : c;
    
    let statement = `Let $f(x,y) = ${c_str} y^{${a}} e^{\\frac{${b}x}{y}}$. Find the mixed partial derivative $f_{xy}$.`;
    
    let cb = c * b;
    let yPow = a - 3;
    let yTerm = yPow === 0 ? '' : yPow === 1 ? 'y' : `y^{${yPow}}`;
    let ans = `${cb}${yTerm} e^{\\frac{${b}x}{y}} (${a-1}y - ${b}x)`;

    let steps = `\\begin{aligned}\n`;
    steps += `f_x &= \\frac{\\partial}{\\partial x} \\left( ${c_str} y^{${a}} e^{\\frac{${b}x}{y}} \\right) = ${c_str} y^{${a}} e^{\\frac{${b}x}{y}} \\left(\\frac{${b}}{y}\\right) = ${cb} y^{${a-1}} e^{\\frac{${b}x}{y}} \\\\[10pt]\n`;
    steps += `f_{xy} &= \\frac{\\partial}{\\partial y} \\left( ${cb} y^{${a-1}} e^{\\frac{${b}x}{y}} \\right) \\\\[10pt]\n`;
    steps += `&= ${cb} \\left[ (${a-1})y^{${a-2}} e^{\\frac{${b}x}{y}} + y^{${a-1}} e^{\\frac{${b}x}{y}} \\left(-\\frac{${b}x}{y^2}\\right) \\right] \\\\[10pt]\n`;
    steps += `&= ${cb} y^{${a-3}} e^{\\frac{${b}x}{y}} \\left( ${a-1}y - ${b}x \\right) \\\\\n`;
    steps += `&= ${ans}\n`;
    steps += `\\end{aligned}`;

    return { id: idStr, topic: 'Derivatives', category: 'Partial Derivatives', difficulty: 'very_hard', statement, answer: ans, steps };
}

// Archetype 2: Inverse Trig
function genArch2(idStr: string): ExamProblem {
    let c = getRandom([2, 3, 4, 5, 6, 7]);
    let a = getRandom([2, 3, 5, 7]);
    let b = getRandom([2, 3, 5, 7]);
    
    let c_str = c === 1 ? '' : c;
    let statement = `Let $f(x,y) = ${c_str} \\arctan\\left(\\frac{${a}x}{${b}y}\\right)$. Find $f_{xy}$.`;
    
    let num = a * b * c;
    let ans = `\\frac{${num}(${a*a}x^2 - ${b*b}y^2)}{(${a*a}x^2 + ${b*b}y^2)^2}`;
    
    let steps = `\\begin{aligned}\n`;
    steps += `f_x &= ${c_str} \\frac{1}{1 + \\left(\\frac{${a}x}{${b}y}\\right)^2} \\cdot \\frac{${a}}{${b}y} = \\frac{${c} \\cdot ${b*b}y^2}{${a*a}x^2 + ${b*b}y^2} \\cdot \\frac{${a}}{${b}y} = \\frac{${num}y}{${a*a}x^2 + ${b*b}y^2} \\\\[10pt]\n`;
    steps += `f_{xy} &= \\frac{\\partial}{\\partial y} \\left( \\frac{${num}y}{${a*a}x^2 + ${b*b}y^2} \\right) \\\\[10pt]\n`;
    steps += `&= \\frac{${num}(${a*a}x^2 + ${b*b}y^2) - (${num}y)(2 \\cdot ${b*b}y)}{(${a*a}x^2 + ${b*b}y^2)^2} \\\\[10pt]\n`;
    steps += `&= \\frac{${num}(${a*a}x^2 + ${b*b}y^2) - ${num * 2 * b * b}y^2}{(${a*a}x^2 + ${b*b}y^2)^2} \\\\[10pt]\n`;
    steps += `&= \\frac{${num}(${a*a}x^2 - ${b*b}y^2)}{(${a*a}x^2 + ${b*b}y^2)^2} \\\\\n`;
    steps += `&= ${ans}\n`;
    steps += `\\end{aligned}`;

    return { id: idStr, topic: 'Derivatives', category: 'Partial Derivatives', difficulty: 'very_hard', statement, answer: ans, steps };
}

// Archetype 3: Natural Log Logarithm Mixed
function genArch3(idStr: string): ExamProblem {
    let c = getRandom([2, 3, 4, 5]);
    let a = getRandom([2, 3, 4, 5]);
    let b = getRandom([2, 3, 4, 5]);

    let c_str = c === 1 ? '' : c;
    let statement = `Let $f(x,y) = ${c_str} \\ln(${a}x^2 + ${b}y^2)$. Find the mixed second-order partial derivative $f_{xy}$.`;
    
    let ans = `-\\frac{${4*a*b*c}xy}{(${a}x^2 + ${b}y^2)^2}`;
    
    let steps = `\\begin{aligned}\n`;
    steps += `f_x &= ${c_str} \\frac{1}{${a}x^2 + ${b}y^2} \\cdot (${2*a}x) = \\frac{${2*c*a}x}{${a}x^2 + ${b}y^2} \\\\[10pt]\n`;
    steps += `f_{xy} &= \\frac{\\partial}{\\partial y} \\left[ ${2*c*a}x(${a}x^2 + ${b}y^2)^{-1} \\right] \\\\[10pt]\n`;
    steps += `&= ${2*c*a}x (-1)(${a}x^2 + ${b}y^2)^{-2} (${2*b}y) \\\\[10pt]\n`;
    steps += `&= -\\frac{${4*a*b*c}xy}{(${a}x^2 + ${b}y^2)^2} \\\\\n`;
    steps += `&= ${ans}\n`;
    steps += `\\end{aligned}`;

    return { id: idStr, topic: 'Derivatives', category: 'Partial Derivatives', difficulty: 'very_hard', statement, answer: ans, steps };
}

// Archetype 4: Sine with mixed terms
function genArch4(idStr: string): ExamProblem {
    let c = getRandom([2, 3, 4, 5]);
    let a = getRandom([2, 3, 4, 5]);

    let c_str = c === 1 ? '' : c;
    let statement = `Let $f(x,y) = ${c_str} \\sin(${a}x^2 y^3)$. Find $f_{xy}$.`;
    
    let ans = `${6*c*a}xy^2 \\cos(${a}x^2 y^3) - ${6*c*a*a}x^3 y^5 \\sin(${a}x^2 y^3)`;
    
    let steps = `\\begin{aligned}\n`;
    steps += `f_x &= ${c_str} \\cos(${a}x^2 y^3) \\cdot (${2*a}xy^3) = ${2*c*a}xy^3 \\cos(${a}x^2 y^3) \\\\[10pt]\n`;
    steps += `f_{xy} &= \\frac{\\partial}{\\partial y} \\left( ${2*c*a}xy^3 \\cos(${a}x^2 y^3) \\right) \\\\[10pt]\n`;
    steps += `&= ${2*c*a}x \\left[ 3y^2 \\cos(${a}x^2 y^3) + y^3 (-\\sin(${a}x^2 y^3)) (\\frac{\\partial}{\\partial y}(${a}x^2 y^3)) \\right] \\\\[10pt]\n`;
    steps += `&= ${2*c*a}x \\left[ 3y^2 \\cos(${a}x^2 y^3) - y^3 \\sin(${a}x^2 y^3) (${3*a}x^2 y^2) \\right] \\\\[10pt]\n`;
    steps += `&= ${6*c*a}xy^2 \\cos(${a}x^2 y^3) - ${6*c*a*a}x^3 y^5 \\sin(${a}x^2 y^3) \\\\\n`;
    steps += `&= ${ans}\n`;
    steps += `\\end{aligned}`;

    return { id: idStr, topic: 'Derivatives', category: 'Partial Derivatives', difficulty: 'very_hard', statement, answer: ans, steps };
}

// Archetype 5: Square Root Second Order Pure
function genArch5(idStr: string): ExamProblem {
    let c = getRandom([2, 3, 4, 5, 7]);
    let a = getRandom([2, 3, 4, 5, 6]);
    let b = getRandom([2, 3, 4, 5, 6]);

    let c_str = c === 1 ? '' : c;
    let statement = `Let $f(x,y) = ${c_str} \\sqrt{${a}x^2 + ${b}y^2}$. Find the second-order partial derivative $f_{xx}$.`;
    
    let ans = `\\frac{${c*a*b}y^2}{(${a}x^2 + ${b}y^2)^{\\frac{3}{2}}}`;
    
    let steps = `\\begin{aligned}\n`;
    steps += `f_x &= \\frac{1}{2} ${c_str}(${a}x^2 + ${b}y^2)^{-\\frac{1}{2}} (\\frac{\\partial}{\\partial x}(${a}x^2 + ${b}y^2)) \\\\[10pt]\n`;
    steps += `&= \\frac{1}{2} ${c_str}(${a}x^2 + ${b}y^2)^{-\\frac{1}{2}} (${2*a}x) = \\frac{${c*a}x}{\\sqrt{${a}x^2 + ${b}y^2}} \\\\[10pt]\n`;
    steps += `f_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{${c*a}x}{\\sqrt{${a}x^2 + ${b}y^2}} \\right) \\\\[10pt]\n`;
    steps += `&= \\frac{${c*a}\\sqrt{${a}x^2 + ${b}y^2} - ${c*a}x \\left( \\frac{${a}x}{\\sqrt{${a}x^2 + ${b}y^2}} \\right)}{${a}x^2 + ${b}y^2} \\\\[10pt]\n`;
    steps += `&= \\frac{\\frac{${c*a}(${a}x^2 + ${b}y^2) - ${c*a*a}x^2}{\\sqrt{${a}x^2 + ${b}y^2}}}{${a}x^2 + ${b}y^2} \\\\[10pt]\n`;
    steps += `&= \\frac{${c*a*a}x^2 + ${c*a*b}y^2 - ${c*a*a}x^2}{(${a}x^2 + ${b}y^2)^{\\frac{3}{2}}} \\\\[10pt]\n`;
    steps += `&= ${ans}\n`;
    steps += `\\end{aligned}`;

    return { id: idStr, topic: 'Derivatives', category: 'Partial Derivatives', difficulty: 'very_hard', statement, answer: ans, steps };
}

// Archetype 6: Arcsin Factoring Extravaganza
function genArch6(idStr: string): ExamProblem {
    let c = getRandom([2, 3, 4, 5, 8]);
    let a = getRandom([2, 3, 4, 5, 6]);

    let c_str = c === 1 ? '' : c;
    let statement = `Let $f(x,y) = ${c_str} \\arcsin(${a}xy)$. Find the mixed partial derivative $f_{xy}$.`;
    
    let ans = `\\frac{${c*a}}{(1 - ${a*a}x^2y^2)^{\\frac{3}{2}}}`;
    
    let steps = `\\begin{aligned}\n`;
    steps += `f_x &= ${c_str} \\frac{1}{\\sqrt{1 - (${a}xy)^2}} (${a}y) = \\frac{${c*a}y}{\\sqrt{1 - ${a*a}x^2y^2}} \\\\[10pt]\n`;
    steps += `f_{xy} &= \\frac{\\partial}{\\partial y} \\left[ ${c*a}y (1 - ${a*a}x^2y^2)^{-\\frac{1}{2}} \\right] \\\\[10pt]\n`;
    steps += `&= ${c*a} \\left[ 1 \\cdot (1 - ${a*a}x^2y^2)^{-\\frac{1}{2}} + y \\left(-\\frac{1}{2}\\right)(1 - ${a*a}x^2y^2)^{-\\frac{3}{2}} (-${2*a*a}x^2y) \\right] \\\\[10pt]\n`;
    steps += `&= ${c*a} \\left[ \\frac{1}{\\sqrt{1 - ${a*a}x^2y^2}} + \\frac{${a*a}x^2y^2}{(1 - ${a*a}x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n`;
    steps += `&= ${c*a} \\left[ \\frac{(1 - ${a*a}x^2y^2) + ${a*a}x^2y^2}{(1 - ${a*a}x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n`;
    steps += `&= \\frac{${c*a} (1)}{(1 - ${a*a}x^2y^2)^{\\frac{3}{2}}} = ${ans}\n`;
    steps += `\\end{aligned}`;

    return { id: idStr, topic: 'Derivatives', category: 'Partial Derivatives', difficulty: 'very_hard', statement, answer: ans, steps };
}

const allProblems: ExamProblem[] = [];

// 6 archetypes * 50 = 300 problems
for (let i = 0; i < 50; i++) {
    allProblems.push(genArch1(`gen_partial_arch1_${i}`));
    allProblems.push(genArch2(`gen_partial_arch2_${i}`));
    allProblems.push(genArch3(`gen_partial_arch3_${i}`));
    allProblems.push(genArch4(`gen_partial_arch4_${i}`));
    allProblems.push(genArch5(`gen_partial_arch5_${i}`));
    allProblems.push(genArch6(`gen_partial_arch6_${i}`));
}

const outputPath = path.join(process.cwd(), 'src/data/generatedPartial300.ts');
const fileContent = `// Generates 300 very hard partial derivative calculus problems
export const generatedPartialProblems: any[] = ${JSON.stringify(allProblems, null, 2)};
`;

fs.writeFileSync(outputPath, fileContent);
console.log(`Generated ${allProblems.length} partial derivative problems to ${outputPath}`);
