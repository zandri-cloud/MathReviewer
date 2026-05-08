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

function gcd(a: number, b: number): number {
    return b === 0 ? Math.abs(a) : gcd(b, a % b);
}

function formatFraction(n: number, d: number): string {
    if (d === 0) return "undefined";
    const sign = n * d < 0 ? "-" : "";
    n = Math.abs(n);
    d = Math.abs(d);
    const divisor = gcd(n, d);
    n /= divisor;
    d /= divisor;
    if (d === 1) return `${sign}${n}`;
    if (n === 0) return "0";
    return `${sign}\\frac{${n}}{${d}}`;
}

function formatLineEq(mNum: number, mDen: number, bNum: number, bDen: number): string {
    const mStr = formatFraction(mNum, mDen);
    const bStr = formatFraction(bNum, bDen);
    
    let eq = "";
    if (mStr === "1") eq += "x";
    else if (mStr === "-1") eq += "-x";
    else if (mStr !== "0") eq += `${mStr}x`;

    if (bStr !== "0") {
        if (bStr.startsWith("-")) {
            eq += (mStr === "0") ? bStr : ` - ${bStr.substring(1)}`;
        } else {
            eq += (mStr === "0") ? bStr : ` + ${bStr}`;
        }
    } else if (mStr === "0") {
        eq += "0";
    }
    return eq;
}

function genSecondDerivPolynomial(idStr: string): ExamProblem {
    let a = Math.floor(Math.random() * 4) + 1;
    let b = Math.floor(Math.random() * 4) + 1;
    let c = Math.floor(Math.random() * 4) + 1;
    let d = Math.floor(Math.random() * 4) + 1;
    
    let statement = `Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = ${a}t^2 + ${b}t$, $y = ${c}t^3 + ${d}t^2$.`;
    
    let c1 = 6 * a * c;
    let c2 = 6 * b * c;
    let c3 = 2 * b * d;
    
    let ans = `\\frac{${c1}t^2 + ${c2}t + ${c3}}{(${2*a}t + ${b})^3}`;
    
    let steps = `\\begin{aligned}\n`;
    steps += `\\frac{dx}{dt} &= ${2*a}t + ${b}, \\quad \\frac{dy}{dt} = ${3*c}t^2 + ${2*d}t \\\\[10pt]\n`;
    steps += `\\frac{dy}{dx} &= \\frac{${3*c}t^2 + ${2*d}t}{${2*a}t + ${b}} \\\\[10pt]\n`;
    steps += `\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(${6*c}t + ${2*d})(${2*a}t + ${b}) - (${3*c}t^2 + ${2*d}t)(${2*a})}{(${2*a}t + ${b})^2} \\\\\n`;
    steps += `&= \\frac{${12*a*c}t^2 + ${6*b*c}t + ${4*a*d}t + ${2*b*d} - ${6*a*c}t^2 - ${4*a*d}t}{(${2*a}t + ${b})^2} \\\\\n`;
    steps += `&= \\frac{${c1}t^2 + ${c2}t + ${c3}}{(${2*a}t + ${b})^2} \\\\[10pt]\n`;
    steps += `\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{${c1}t^2 + ${c2}t + ${c3}}{(${2*a}t + ${b})^2}}{${2*a}t + ${b}} \\\\\n`;
    steps += `&= ${ans}\n`;
    steps += `\\end{aligned}`;
    return { id: idStr, topic: 'Derivatives', category: 'Parametric Equations', difficulty: 'hard', statement, answer: ans, steps };
}

function genSecondDerivTrig(idStr: string): ExamProblem {
    let a = Math.floor(Math.random() * 5) + 2;
    let b = Math.floor(Math.random() * 5) + 2;
    let k = Math.floor(Math.random() * 3) + 2;
    let statement = `For the parametric equations $x = ${a}\\cos(${k}t)$ and $y = ${b}\\sin(${k}t)$, find $\\frac{d^2y}{dx^2}$.`;
    
    let ansFrac = formatFraction(-b, a*a);
    let ans = `${ansFrac === '-1' ? '-' : ansFrac === '1' ? '' : ansFrac}\\csc^3(${k}t)`;
    
    let b_a = formatFraction(b, a);
    let bk_a = formatFraction(b*k, a);
    
    let steps = `\\begin{aligned}\n`;
    steps += `\\frac{dx}{dt} &= -${a*k}\\sin(${k}t), \\quad \\frac{dy}{dt} = ${b*k}\\cos(${k}t) \\\\[10pt]\n`;
    steps += `\\frac{dy}{dx} &= \\frac{${b*k}\\cos(${k}t)}{-${a*k}\\sin(${k}t)} = -${b_a === '1' ? '' : b_a}\\cot(${k}t) \\\\[10pt]\n`;
    steps += `\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -${b_a === '1' ? '' : b_a} \\cdot (-\\csc^2(${k}t) \\cdot ${k}) = ${bk_a === '1' ? '' : bk_a}\\csc^2(${k}t) \\\\[10pt]\n`;
    steps += `\\frac{d^2y}{dx^2} &= \\frac{${bk_a === '1' ? '' : bk_a}\\csc^2(${k}t)}{-${a*k}\\sin(${k}t)} = ${ans}\n`;
    steps += `\\end{aligned}`;
    return { id: idStr, topic: 'Derivatives', category: 'Parametric Equations', difficulty: 'hard', statement, answer: ans, steps };
}

function genSlopeAtPoint(idStr: string): ExamProblem {
    let a = Math.floor(Math.random() * 5) + 1;
    let b = Math.floor(Math.random() * 5) + 1;
    let t0 = Math.floor(Math.random() * 4) + 1;
    let isNeg = Math.random() < 0.5 ? -1 : 1;
    t0 *= isNeg; 
    
    let statement = `Find the slope of the curve defined by $x = ${a}t^2 - ${b}t$ and $y = t^3 + ${b}t$ at the point where $t = ${t0}$.`;
    
    let dxdt = 2*a*t0 - b;
    let dydt = 3*t0*t0 + b;
    
    while (dxdt === 0) {
        t0 += 1;
        dxdt = 2*a*t0 - b;
        dydt = 3*t0*t0 + b;
    }
    
    // update statement if t0 changed
    statement = `Find the slope of the curve defined by $x = ${a}t^2 - ${b}t$ and $y = t^3 + ${b}t$ at the point where $t = ${t0}$.`;
    
    let ans = formatFraction(dydt, dxdt);
    
    let steps = `\\begin{aligned}\n`;
    steps += `\\frac{dx}{dt} &= ${2*a}t - ${b} \\implies \\left. \\frac{dx}{dt} \\right|_{t=${t0}} = ${dxdt} \\\\[10pt]\n`;
    steps += `\\frac{dy}{dt} &= 3t^2 + ${b} \\implies \\left. \\frac{dy}{dt} \\right|_{t=${t0}} = ${dydt} \\\\[10pt]\n`;
    steps += `\\text{Slope } m &= \\left. \\frac{dy}{dx} \\right|_{t=${t0}} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{${dydt}}{${dxdt}} = ${ans}\n`;
    steps += `\\end{aligned}`;
    return { id: idStr, topic: 'Derivatives', category: 'Parametric Equations', difficulty: 'hard', statement, answer: ans, steps };
}

function genTangentLine(idStr: string): ExamProblem {
    let a = Math.floor(Math.random() * 3) + 1;
    let b = Math.floor(Math.random() * 3) + 1;
    let t0 = Math.floor(Math.random() * 3) + 1;
    let isNeg = Math.random() < 0.5 ? -1 : 1;
    t0 *= isNeg;
    
    let x0 = a*t0*t0;
    let y0 = b*t0*t0*t0 - t0;
    let dxdt = 2*a*t0;
    let dydt = 3*b*t0*t0 - 1;
    
    while (dxdt === 0) { 
        t0 += 1; 
        x0 = a*t0*t0; 
        y0 = b*Math.pow(t0, 3) - t0; 
        dxdt = 2*a*t0; 
        dydt = 3*b*t0*t0 - 1; 
    }

    let statement = `Find the equation of the tangent line to the curve $x = ${a === 1 ? '' : a}t^2$, $y = ${b === 1 ? '' : b}t^3 - t$ at $t = ${t0}$.`;
    
    let mNum = dydt; let mDen = dxdt;
    let bNum = y0 * mDen - mNum * x0; let bDen = mDen;
    
    let eq = formatLineEq(mNum, mDen, bNum, bDen);
    let ans = eq;
    let mFrac = formatFraction(mNum, mDen);
    
    let steps = `\\begin{aligned}\n`;
    steps += `x(${t0}) &= ${a}(${t0})^2 = ${x0} \\\\\n`;
    steps += `y(${t0}) &= ${b}(${t0})^3 - (${t0}) = ${y0} \\\\[10pt]\n`;
    steps += `\\frac{dx}{dt} &= ${2*a}t \\implies \\left. \\frac{dx}{dt} \\right|_{t=${t0}} = ${dxdt} \\\\\n`;
    steps += `\\frac{dy}{dt} &= ${3*b}t^2 - 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=${t0}} = ${dydt} \\\\[10pt]\n`;
    steps += `m &= \\frac{${dydt}}{${dxdt}} = ${mFrac} \\\\[10pt]\n`;
    steps += `y ${y0 < 0 ? '+' : '-'} ${Math.abs(y0)} &= ${mFrac}(x ${x0 < 0 ? '+' : '-'} ${Math.abs(x0)}) \\\\\n`;
    steps += `y &= ${ans}\n`;
    steps += `\\end{aligned}`;
    return { id: idStr, topic: 'Derivatives', category: 'Parametric Equations', difficulty: 'hard', statement, answer: ans, steps };
}

function genNormalLine(idStr: string): ExamProblem {
    let a = Math.floor(Math.random() * 3) + 1;
    let b = Math.floor(Math.random() * 3) + 1;
    let c = Math.floor(Math.random() * 4) + 1;
    let t0 = Math.floor(Math.random() * 2) + 1;
    let isNeg = Math.random() < 0.5 ? -1 : 1;
    t0 *= isNeg;
    
    let dxdt = 3*a*t0*t0 - b;
    let dydt = 2*c*t0;
    
    while (dxdt === 0 || dydt === 0) { 
        t0 += 1; 
        dxdt = 3*a*t0*t0 - b;
        dydt = 2*c*t0;
    }
    let x0 = a*Math.pow(t0, 3) - b*t0;
    let y0 = c*t0*t0;
    
    let statement = `Find the equation of the normal line to the curve $x = ${a === 1 ? '' : a}t^3 - ${b === 1 ? '' : b}t$, $y = ${c === 1 ? '' : c}t^2$ at $t = ${t0}$.`;
    
    let mNum = -dxdt; let mDen = dydt;
    let bNum = y0 * mDen - mNum * x0; let bDen = mDen;
    
    let eq = formatLineEq(mNum, mDen, bNum, bDen);
    let ans = eq;
    
    let mFrac = formatFraction(dydt, dxdt);
    let mNormFrac = formatFraction(mNum, mDen);
    
    let steps = `\\begin{aligned}\n`;
    steps += `x(${t0}) &= ${a}(${t0})^3 - ${b}(${t0}) = ${x0} \\\\\n`;
    steps += `y(${t0}) &= ${c}(${t0})^2 = ${y0} \\\\[10pt]\n`;
    steps += `\\left. \\frac{dx}{dt} \\right|_{t=${t0}} &= 3(${a})(${t0})^2 - ${b} = ${dxdt} \\\\\n`;
    steps += `\\left. \\frac{dy}{dt} \\right|_{t=${t0}} &= 2(${c})(${t0}) = ${dydt} \\\\[10pt]\n`;
    steps += `m_{tangent} &= \\frac{${dydt}}{${dxdt}} = ${mFrac} \\\\[10pt]\n`;
    steps += `m_{normal} &= -\\frac{1}{m_{tangent}} = ${mNormFrac} \\\\[10pt]\n`;
    steps += `y ${y0 < 0 ? '+' : '-'} ${Math.abs(y0)} &= ${mNormFrac}(x ${x0 < 0 ? '+' : '-'} ${Math.abs(x0)}) \\\\\n`;
    steps += `y &= ${ans}\n`;
    steps += `\\end{aligned}`;
    return { id: idStr, topic: 'Derivatives', category: 'Parametric Equations', difficulty: 'hard', statement, answer: ans, steps };
}

const allProblems: any[] = [];

for (let i = 0; i < 75; i++) {
    allProblems.push(genSecondDerivPolynomial(`gen_param_sec_poly_${i}`));
    allProblems.push(genSecondDerivTrig(`gen_param_sec_trig_${i}`));
}

for (let i = 0; i < 50; i++) {
    allProblems.push(genSlopeAtPoint(`gen_param_slope_${i}`));
    allProblems.push(genTangentLine(`gen_param_tangent_${i}`));
    allProblems.push(genNormalLine(`gen_param_normal_${i}`));
}

const outputPath = path.join(process.cwd(), 'src/data/generatedParametric300.ts');
const fileContent = `// Generates 300 unique hard parametric calculus problems (Second Derivs + Tangents/Normals)
export const generatedParametricProblems: any[] = ${JSON.stringify(allProblems, null, 2)};
`;

fs.writeFileSync(outputPath, fileContent);
console.log(`Generated ${allProblems.length} parametric problems to ${outputPath}`);
