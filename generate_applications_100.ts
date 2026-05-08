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
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) {
        let t = b;
        b = a % b;
        a = t;
    }
    return a;
}

function formatFraction(num: number, den: number): string {
    if (den === 0) return "undefined";
    let g = gcd(num, den);
    num = num / g;
    den = den / g;
    if (den < 0) {
        num = -num;
        den = -den;
    }
    if (den === 1) return `${num}`;
    let sign = num < 0 ? "-" : "";
    return `${sign}\\frac{${Math.abs(num)}}{${den}}`;
}

// Arch 1: Corridor / Pipe Shortest Distance Optimization
function genArch1(idStr: string, c1: number, c2: number): ExamProblem {
    let a = c1*c1*c1; let b = c2*c2*c2;
    let var_c1 = c1 + 1; let var_c2 = c2 + 1;
    let var_a = var_c1 ** 3; let var_b = var_c2 ** 3;
    
    let L_max_val = Math.pow(c1*c1 + c2*c2, 1.5);
    // Use fixed precision to avoid floating point issues if not perfect int
    let L_max = Number.isInteger(L_max_val) ? L_max_val : L_max_val.toFixed(2);
    let v_L_max_val = Math.pow(var_c1*var_c1 + var_c2*var_c2, 1.5);
    let v_L_max = Number.isInteger(v_L_max_val) ? v_L_max_val : v_L_max_val.toFixed(2);

    let statement = `A metal pipe is being carried horizontally around a right-angled corner from a corridor of width ${a} m into a corridor of width ${b} m. Find the length of the longest pipe capable of being moved around the corner. Neglect the diameter of the pipe.`;
    
    let steps = `\\begin{aligned}\n`;
    steps += `&\\text{Let } L \\text{ be the length of the pipe touching both walls and the corner.} \\\\\n`;
    steps += `&L(\\theta) = \\frac{${a}}{\\sin\\theta} + \\frac{${b}}{\\cos\\theta} \\\\\n`;
    steps += `&L'(\\theta) = -${a}\\csc\\theta\\cot\\theta + ${b}\\sec\\theta\\tan\\theta = 0 \\\\\n`;
    steps += `&\\frac{${a}\\cos\\theta}{\\sin^2\\theta} = \\frac{${b}\\sin\\theta}{\\cos^2\\theta} \\implies \\tan^3\\theta = \\frac{${a}}{${b}} \\\\\n`;
    steps += `&\\tan\\theta = \\frac{${c1}}{${c2}} \\implies \\sin\\theta = \\frac{${c1}}{\\sqrt{${c1*c1 + c2*c2}}}, \\cos\\theta = \\frac{${c2}}{\\sqrt{${c1*c1 + c2*c2}}} \\\\\n`;
    steps += `&L_{max} = \\frac{${a}}{\\frac{${c1}}{\\sqrt{${c1*c1 + c2*c2}}}} + \\frac{${b}}{\\frac{${c2}}{\\sqrt{${c1*c1 + c2*c2}}}} = ${c1*c1}\\sqrt{${c1*c1 + c2*c2}} + ${c2*c2}\\sqrt{${c1*c1 + c2*c2}} \\\\\n`;
    steps += `&L_{max} = (${c1*c1} + ${c2*c2})\\sqrt{${c1*c1 + c2*c2}} = ${L_max} \\quad \\text{m.} \\\\[15pt]\n`;

    steps += `&\\textbf{Optimization Insight:} \\\\\n`;
    steps += `&\\text{For perpendicular corridors of widths } w_1 \\text{ and } w_2 \\text{, the maximum length is fiercely restricted to } L = (w_1^{2/3} + w_2^{2/3})^{3/2}. \\\\\n`;
    steps += `&\\text{This dimensional identity instantly bypasses deep angular trigonometry limits.} \\\\[15pt]\n`;

    steps += `&\\textbf{Variation Problem:} \\\\\n`;
    steps += `&\\text{What is the absolute longest pipe for corridors of dimensions } ${var_a} \\text{ m and } ${var_b} \\text{ m?} \\\\\n`;
    steps += `&L_{max} = (${var_a}^{2/3} + ${var_b}^{2/3})^{3/2} = (${var_c1}^2 + ${var_c2}^2)^{3/2} = ${v_L_max} \\text{ m.} \\\\\n`;
    steps += `\\end{aligned}`;

    return { id: idStr, topic: 'Maxima and Minima', category: 'Applications of Derivatives', difficulty: 'very_hard', statement, answer: `${L_max}`, steps };
}

// Arch 2: Inscribed Cylinder Optimization
function genArch2(idStr: string, R: number): ExamProblem {
    let var_R = R + 3;
    let statement = `A right circular cylinder is inscribed in a sphere of radius ${R} cm. Find the maximum possible volume of the cylinder.`;
    
    let R2 = R*R;
    let opt_h2 = (4 * R2) / 3;
    let max_v = (4 * Math.PI * R * R * R) / (3 * Math.sqrt(3));
    let ans_v = `\\frac{${4 * R*R*R}\\pi}{3\\sqrt{3}}`;
    let var_ans = `\\frac{${4 * var_R*var_R*var_R}\\pi}{3\\sqrt{3}}`;

    let steps = `\\begin{aligned}\n`;
    steps += `&\\text{Let } h \\text{ be the cylinder height and } r \\text{ be its radius.} \\\\\n`;
    steps += `&\\text{By the Pythagorean theorem on the inscribed cross-section: } r^2 + \\left(\\frac{h}{2}\\right)^2 = ${R}^2 \\implies r^2 = ${R2} - \\frac{h^2}{4}. \\\\\n`;
    steps += `&V(h) = \\pi r^2 h = \\pi h \\left(${R2} - \\frac{h^2}{4}\\right) = \\pi \\left(${R2}h - \\frac{h^3}{4}\\right). \\\\\n`;
    steps += `&V'(h) = \\pi \\left(${R2} - \\frac{3h^2}{4}\\right) = 0 \\implies 3h^2 = ${4 * R2} \\implies h = \\frac{${2*R}}{\\sqrt{3}}. \\\\\n`;
    steps += `&V_{max} = \\pi \\left(\\frac{${2*R}}{\\sqrt{3}}\\right) \\left(${R2} - \\frac{${4*R2/4}}{3}\\right) = \\pi \\left(\\frac{${2*R}}{\\sqrt{3}}\\right) \\left(\\frac{${2*R2}}{3}\\right) = ${ans_v} \\text{ cm}^3. \\\\[15pt]\n`;

    steps += `&\\textbf{Optimization Insight:} \\\\\n`;
    steps += `&\\text{When a cylinder is inscribed in any sphere of radius } R \\text{, the maximum volume always occurs identically at height } h = \\frac{2R}{\\sqrt{3}}. \\\\\n`;
    steps += `&\\text{This symmetry factor dictates exactly } V_{max} = \\frac{4\\pi R^3}{3\\sqrt{3}}, \\text{ completely skipping repetitive derivative resets.} \\\\[15pt]\n`;

    steps += `&\\textbf{Variation Problem:} \\\\\n`;
    steps += `&\\text{Find the maximum volume of a cylinder inscribed in a sphere of altered radius } R = ${var_R} \\text{ cm.} \\\\\n`;
    steps += `&\\text{Directly substituting the geometric rule: } V_{max} = ${var_ans} \\text{ cm}^3. \\\\\n`;
    steps += `\\end{aligned}`;

    return { id: idStr, topic: 'Maxima and Minima', category: 'Applications of Derivatives', difficulty: 'very_hard', statement, answer: ans_v, steps };
}

// Arch 3: Box Cutout Minimization / Maximize Volume
function genArch3(idStr: string, W: number): ExamProblem {
    let var_W = W + 6;
    let statement = `A manufacturer wishes to create an open box by cutting identical squares from the four corners of a ${W} cm by ${W} cm piece of cardboard and folding up the sides. Find the side length of the square cutout that maximizes the volume.`;
    
    let opt_x = W / 6;
    let max_v = opt_x * (W - 2*opt_x) * (W - 2*opt_x);
    
    let var_opt_x = var_W / 6;
    let var_max_v = var_opt_x * (var_W - 2*var_opt_x) * (var_W - 2*var_opt_x);

    let steps = `\\begin{aligned}\n`;
    steps += `&\\text{Let } x \\text{ be the side length of the cut squares. The resulting box dimensions are } ( ${W}-2x ) \\times ( ${W}-2x ) \\times x. \\\\\n`;
    steps += `&V(x) = x(${W}-2x)^2 \\\\\n`;
    steps += `&V'(x) = (${W}-2x)^2 + x \\cdot 2(${W}-2x)(-2) = (${W}-2x) [ (${W}-2x) - 4x ] \\\\\n`;
    steps += `&V'(x) = (${W}-2x)(${W}-6x) = 0. \\\\\n`;
    steps += `&\\text{Critical points: } x = ${W/2} \\text{ (minimum, flat sheet) and } x = ${W/6} \\text{ (maximum volume).} \\\\\n`;
    steps += `&\\text{Max Volume evaluated: } V(${W/6}) = ${opt_x} (${W - 2*opt_x})^2 = ${max_v} \\text{ cm}^3. \\\\[15pt]\n`;

    steps += `&\\textbf{Optimization Insight:} \\\\\n`;
    steps += `&\\text{For any square sheet of side } S \\text{, the derivative zeroes invariably scale such that the optimal cutout is exactly } \\frac{S}{6}. \\\\\n`;
    steps += `&\\text{Symmetric reduction identifies the maximum root strictly proportional to the geometry's boundary condition.} \\\\[15pt]\n`;

    steps += `&\\textbf{Variation Problem:} \\\\\n`;
    steps += `&\\text{Given a larger square cardboard sheet of side } ${var_W} \\text{ cm, calculate the maximum possible folded volume.} \\\\\n`;
    steps += `&\\text{Using optimized reduction: } x_{opt} = \\frac{${var_W}}{6} = ${var_opt_x} \\text{ cm.} \\\\\n`;
    steps += `&V_{max} = ${var_opt_x} (${var_W} - 2(${var_opt_x}))^2 = ${var_max_v} \\text{ cm}^3. \\\\\n`;
    steps += `\\end{aligned}`;

    return { id: idStr, topic: 'Maxima and Minima', category: 'Applications of Derivatives', difficulty: 'very_hard', statement, answer: `${opt_x}`, steps };
}

// Arch 4: Shadow Rates
function genArch4(idStr: string, H: number, p: number, v: number): ExamProblem {
    let var_H = H + 5; let var_p = p; let var_v = v + 1;
    let statement = `A streetlamp is mounted atop a ${H} ft pole. A person ${p} ft tall walks away from the pole precisely at a speed of ${v} ft/s sequentially strictly in a straight line. Determine the rate at which the tip of their shadow is moving.`;
    
    let rate_tip = (H * v) / (H - p);
    let ans = formatFraction(H * v, H - p);
    let var_ans = formatFraction(var_H * var_v, var_H - var_p);

    let steps = `\\begin{aligned}\n`;
    steps += `&\\text{Let } x \\text{ be the distance from the man to the pole, and } S \\text{ be the length of his shadow.} \\\\\n`;
    steps += `&\\text{Given: } \\frac{dx}{dt} = ${v} \\text{ ft/s.} \\\\\n`;
    steps += `&\\text{By similar triangles linking the lamp tip, person tip, and shadow tip: } \\frac{S+x}{${H}} = \\frac{S}{${p}} \\\\\n`;
    steps += `&${p}S + ${p}x = ${H}S \\implies S(${H} - ${p}) = ${p}x \\implies S = \\frac{${p}}{${H-p}}x. \\\\\n`;
    steps += `&\\text{Differentiating wrt time } t: \\frac{dS}{dt} = \\frac{${p}}{${H-p}} \\frac{dx}{dt} = \\frac{${p * v}}{${H-p}}. \\\\\n`;
    steps += `&\\text{The absolute tip position is } T = S + x, \\text{ so } \\frac{dT}{dt} = \\frac{dS}{dt} + \\frac{dx}{dt}. \\\\\n`;
    steps += `&\\frac{dT}{dt} = \\frac{${p * v}}{${H-p}} + ${v} = \\frac{${p * v} + ${v * (H-p)}}{${H-p}} = \\frac{${H * v}}{${H-p}} = ${ans} \\text{ ft/s.} \\\\[15pt]\n`;

    steps += `&\\textbf{Optimization Insight:} \\\\\n`;
    steps += `&\\text{The kinematics of shadow projection linearly translate the origin walker's velocity } v \\text{ by the relative height ratio scalar. } \\\\\n`;
    steps += `&\\text{Velocity of the tip invariably evaluates exactly as } v_{tip} = v \\left(\\frac{H}{H-p}\\right). \\\\[15pt]\n`;

    steps += `&\\textbf{Variation Problem:} \\\\\n`;
    steps += `&\\text{If the lamp is raised to } ${var_H} \\text{ ft and the person walks at } ${var_v} \\text{ ft/s, what is the new rate of the shadow's tip?} \\\\\n`;
    steps += `&\\text{Utilizing geometric velocity mapping: } v_{tip} = ${var_v} \\left(\\frac{${var_H}}{${var_H - var_p}}\\right) = ${var_ans} \\text{ ft/s.} \\\\\n`;
    steps += `\\end{aligned}`;

    return { id: idStr, topic: 'Time Rates', category: 'Applications of Derivatives', difficulty: 'very_hard', statement, answer: `${ans}`, steps };
}

// Arch 5: Conical Tank Water Flow
function genArch5(idStr: string, R: number, H: number, k: number, h_eval: number): ExamProblem {
    let var_h_eval = h_eval + 1;
    let statement = `Water strictly pours seamlessly into an inverted conical tank mapping a radius of ${R} m and altitude ${H} m at a relentless constant rate of ${k} m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly ${h_eval} m.`;
    
    let h2 = h_eval * h_eval;
    let rate = (H * H * k) / (Math.PI * R * R * h2);
    let ans_val = formatFraction(H * H * k, R * R * h2);
    let ans = `${ans_val} \\frac{1}{\\pi}`;

    let v_h2 = var_h_eval * var_h_eval;
    let v_ans_val = formatFraction(H * H * k, R * R * v_h2);
    let v_ans = `${v_ans_val} \\frac{1}{\\pi}`;

    let steps = `\\begin{aligned}\n`;
    steps += `&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n`;
    steps += `&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = ${k}. \\\\\n`;
    steps += `&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{${R}}{${H}} \\implies r = \\frac{${R}}{${H}}h. \\\\\n`;
    steps += `&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{${R}}{${H}}h\\right)^2 h = \\frac{${R*R}\\pi}{${3*H*H}}h^3. \\\\\n`;
    steps += `&\\frac{dV}{dt} = \\frac{${R*R}\\pi}{${H*H}} h^2 \\frac{dh}{dt} \\implies ${k} = \\frac{${R*R}\\pi}{${H*H}} (${h_eval})^2 \\frac{dh}{dt}. \\\\\n`;
    steps += `&\\frac{dh}{dt} = \\frac{${k * H*H}}{${R*R * h2}\\pi} = ${ans} \\text{ m/min.} \\\\[15pt]\n`;

    steps += `&\\textbf{Optimization Insight:} \\\\\n`;
    steps += `&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n`;
    steps += `&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n`;

    steps += `&\\textbf{Variation Problem:} \\\\\n`;
    steps += `&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } ${var_h_eval} \\text{ m.} \\\\\n`;
    steps += `&\\frac{dh}{dt} = \\frac{${k * H*H}}{${R*R * v_h2}\\pi} = ${v_ans} \\text{ m/min.} \\\\\n`;
    steps += `\\end{aligned}`;

    return { id: idStr, topic: 'Time Rates', category: 'Applications of Derivatives', difficulty: 'very_hard', statement, answer: `${ans}`, steps };
}

const allProblems: ExamProblem[] = [];
let idCounter = 1;

for (let c1 = 1; c1 <= 3; c1++) {
    for (let c2 = 1; c2 <= 4; c2++) {
        allProblems.push(genArch1(`gen_app_deriv_arch1_${idCounter++}`, c1, c2));
    }
}

let Rs = [3, 6, 9, 12, 15, 18, 24];
for (let r of Rs) {
    allProblems.push(genArch2(`gen_app_deriv_arch2_${idCounter++}`, r));
    allProblems.push(genArch2(`gen_app_deriv_arch2_${idCounter++}`, r * 2));
}

let Ws = [6, 12, 18, 24, 30, 36, 42, 60];
for (let w of Ws) {
    allProblems.push(genArch3(`gen_app_deriv_arch3_${idCounter++}`, w));
    allProblems.push(genArch3(`gen_app_deriv_arch3_${idCounter++}`, w * 2));
}

let Hs = [15, 20, 25, 30];
let ps = [5, 6];
let vs = [2, 3, 4];
for (let h of Hs) {
    for (let p of ps) {
        for (let v of vs) {
            allProblems.push(genArch4(`gen_app_deriv_arch4_${idCounter++}`, h, p, v));
        }
    }
}

let cradii = [4, 5, 6];
let cheights = [10, 12, 15];
let cks = [2, 3, 4];
let cevals = [2, 4, 5];
for (let r of cradii) {
    for (let h of cheights) {
        for (let k of cks) {
            for (let eval_ of cevals) {
                if (eval_ < h) {
                    allProblems.push(genArch5(`gen_app_deriv_arch5_${idCounter++}`, r, h, k, eval_));
                }
            }
        }
    }
}

const outputPath = path.join(process.cwd(), 'src/data/generatedApplications100.ts');
const fileContent = `// Generates 150+ very hard Applications of Derivatives calculus problems
export const generatedApplicationsProblems: any[] = ${JSON.stringify(allProblems, null, 2)};
`;

fs.writeFileSync(outputPath, fileContent);
console.log(`Generated ${allProblems.length} Applications of Derivatives problems to ${outputPath}`);
