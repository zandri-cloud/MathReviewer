import * as fs from 'fs';

const problems = [];
let idCounter = 100;

// Template 1: y = e^{a x} \sin(bx) \cos(bx)
for (let i = 1; i <= 10; i++) {
  const a = i;
  const b = i + 1;
  problems.push({
    id: `trans-superhard-t1-${i}`,
    difficulty: 'Hard',
    type: 'free-response',
    statement: `Find the derivative of: \\quad y = e^{${a}x} \\sin(${b}x) \\cos(${b}x)`,
    method: 'Double Angle Identity and Product Rule',
    solution: `\\begin{aligned}
y &= e^{${a}x} \\sin(${b}x) \\cos(${b}x) \\\\
y &= \\frac{1}{2} e^{${a}x} \\sin(${2*b}x) \\\\
y' &= \\frac{1}{2} \\left[ \\frac{d}{dx}(e^{${a}x}) \\sin(${2*b}x) + e^{${a}x} \\frac{d}{dx}(\\sin(${2*b}x)) \\right] \\\\
y' &= \\frac{1}{2} \\left[ ${a} e^{${a}x} \\sin(${2*b}x) + e^{${a}x} \\cos(${2*b}x) \\cdot ${2*b} \\right] \\\\
y' &= \\frac{1}{2} e^{${a}x} \\left( ${a} \\sin(${2*b}x) + ${2*b} \\cos(${2*b}x) \\right)
\\end{aligned}`,
    finalAnswer: `y' = \\frac{1}{2} e^{${a}x} \\left( ${a} \\sin(${2*b}x) + ${2*b} \\cos(${2*b}x) \\right)`
  });
}

// Template 2: y = \ln(\tan(cx) + \sec(cx)) \cdot \cos(2cx)
for (let i = 1; i <= 10; i++) {
  const c = i + 2;
  problems.push({
    id: `trans-superhard-t2-${i}`,
    difficulty: 'Hard',
    type: 'free-response',
    statement: `Find the derivative of: \\quad y = \\ln(\\tan(${c}x) + \\sec(${c}x)) \\cdot \\cos(${2*c}x)`,
    method: 'Product Rule and Chain Rule',
    solution: `\\begin{aligned}
y' &= \\frac{d}{dx}(\\ln(\\tan(${c}x) + \\sec(${c}x))) \\cdot \\cos(${2*c}x) + \\ln(\\tan(${c}x) + \\sec(${c}x)) \\cdot \\frac{d}{dx}(\\cos(${2*c}x)) \\\\
\\frac{d}{dx}(\\ln(\\tan(${c}x) + \\sec(${c}x))) &= \\frac{1}{\\tan(${c}x) + \\sec(${c}x)} \\cdot (${c}\\sec^2(${c}x) + ${c}\\sec(${c}x)\\tan(${c}x)) = ${c}\\sec(${c}x) \\\\
y' &= ${c}\\sec(${c}x) \\cos(${2*c}x) - ${2*c} \\ln(\\tan(${c}x) + \\sec(${c}x)) \\sin(${2*c}x)
\\end{aligned}`,
    finalAnswer: `y' = ${c}\\sec(${c}x) \\cos(${2*c}x) - ${2*c} \\ln(\\tan(${c}x) + \\sec(${c}x)) \\sin(${2*c}x)`
  });
}

// Template 3: y = \frac{\sin(2nx)}{1 + \cos(2nx)}
for (let i = 1; i <= 10; i++) {
  const n = i + 1;
  problems.push({
    id: `trans-superhard-t3-${i}`,
    difficulty: 'Hard',
    type: 'free-response',
    statement: `Find the derivative of: \\quad y = \\frac{\\sin(${2*n}x)}{1 + \\cos(${2*n}x)}`,
    method: 'Double Angle Identity and Chain Rule',
    solution: `\\begin{aligned}
y &= \\frac{2\\sin(${n}x)\\cos(${n}x)}{1 + (2\\cos^2(${n}x) - 1)} \\\\
y &= \\frac{2\\sin(${n}x)\\cos(${n}x)}{2\\cos^2(${n}x)} \\\\
y &= \\tan(${n}x) \\\\
y' &= ${n}\\sec^2(${n}x)
\\end{aligned}`,
    finalAnswer: `y' = ${n}\\sec^2(${n}x)`
  });
}

// Template 4: y = \ln\left(\sqrt{\frac{1-\cos(2mx)}{1+\cos(2mx)}}\right)
for (let i = 1; i <= 10; i++) {
  const m = i + 3;
  problems.push({
    id: `trans-superhard-t4-${i}`,
    difficulty: 'Hard',
    type: 'free-response',
    statement: `Find the derivative of: \\quad y = \\ln\\left(\\sqrt{\\frac{1-\\cos(${2*m}x)}{1+\\cos(${2*m}x)}}\\right)`,
    method: 'Double Angle Identity and Logarithmic Differentiation',
    solution: `\\begin{aligned}
y &= \\ln\\left(\\sqrt{\\frac{2\\sin^2(${m}x)}{2\\cos^2(${m}x)}}\\right) \\\\
y &= \\ln\\left(\\sqrt{\\tan^2(${m}x)}\\right) \\\\
y &= \\ln|\\tan(${m}x)| \\\\
y' &= \\frac{1}{\\tan(${m}x)} \\cdot \\sec^2(${m}x) \\cdot ${m} \\\\
y' &= \\frac{${m}}{\\frac{\\sin(${m}x)}{\\cos(${m}x)}} \\cdot \\frac{1}{\\cos^2(${m}x)} = \\frac{${m}}{\\sin(${m}x)\\cos(${m}x)} \\\\
y' &= \\frac{${2*m}}{2\\sin(${m}x)\\cos(${m}x)} = \\frac{${2*m}}{\\sin(${2*m}x)} = ${2*m}\\csc(${2*m}x)
\\end{aligned}`,
    finalAnswer: `y' = ${2*m}\\csc(${2*m}x)`
  });
}

// Template 5: y = e^{\sin^2(nx)}
for (let i = 1; i <= 10; i++) {
  const n = i + 4;
  problems.push({
    id: `trans-superhard-t5-${i}`,
    difficulty: 'Hard',
    type: 'free-response',
    statement: `Find the derivative of: \\quad y = e^{\\sin^2(${n}x)}`,
    method: 'Chain Rule and Double Angle Identity',
    solution: `\\begin{aligned}
y' &= e^{\\sin^2(${n}x)} \\cdot \\frac{d}{dx}(\\sin^2(${n}x)) \\\\
y' &= e^{\\sin^2(${n}x)} \\cdot 2\\sin(${n}x)\\cos(${n}x) \\cdot ${n} \\\\
y' &= ${n} e^{\\sin^2(${n}x)} (2\\sin(${n}x)\\cos(${n}x)) \\\\
y' &= ${n} e^{\\sin^2(${n}x)} \\sin(${2*n}x)
\\end{aligned}`,
    finalAnswer: `y' = ${n} e^{\\sin^2(${n}x)} \\sin(${2*n}x)`
  });
}

// Template 6: y = \text{Arcsin}\left(\frac{2 \tan(px)}{1 + \tan^2(px)}\right)
for (let i = 1; i <= 10; i++) {
  const p = i + 2;
  problems.push({
    id: `trans-superhard-t6-${i}`,
    difficulty: 'Hard',
    type: 'free-response',
    statement: `Find the derivative of: \\quad y = \\arcsin\\left(\\frac{2 \\tan(${p}x)}{1 + \\tan^2(${p}x)}\\right)`,
    method: 'Double Angle Identity and Chain Rule',
    solution: `\\begin{aligned}
\\text{Recall that } \\sin(2\\theta) &= \\frac{2\\tan\\theta}{1+\\tan^2\\theta} \\\\
y &= \\arcsin(\\sin(${2*p}x)) \\\\
y &= ${2*p}x \\quad \\text{(for appropriate domain)} \\\\
y' &= ${2*p}
\\end{aligned}`,
    finalAnswer: `y' = ${2*p}`
  });
}

// Template 7: y = \cos^4(qx) - \sin^4(qx)
for (let i = 1; i <= 10; i++) {
  const q = i + 1;
  problems.push({
    id: `trans-superhard-t7-${i}`,
    difficulty: 'Hard',
    type: 'free-response',
    statement: `Find the derivative of: \\quad y = \\cos^4(${q}x) - \\sin^4(${q}x)`,
    method: 'Algebraic Simplification and Double Angle Identity',
    solution: `\\begin{aligned}
y &= (\\cos^2(${q}x) - \\sin^2(${q}x))(\\cos^2(${q}x) + \\sin^2(${q}x)) \\\\
y &= (\\cos(${2*q}x))(1) \\\\
y &= \\cos(${2*q}x) \\\\
y' &= -\\sin(${2*q}x) \\cdot ${2*q} \\\\
y' &= -${2*q}\\sin(${2*q}x)
\\end{aligned}`,
    finalAnswer: `y' = -${2*q}\\sin(${2*q}x)`
  });
}

// Template 8: y = \sqrt{1 + \sin(2kx)}
for (let i = 1; i <= 10; i++) {
  const k = i + 5;
  problems.push({
    id: `trans-superhard-t8-${i}`,
    difficulty: 'Hard',
    type: 'free-response',
    statement: `Find the derivative of: \\quad y = \\sqrt{1 + \\sin(${2*k}x)}`,
    method: 'Double Angle Identity and Chain Rule',
    solution: `\\begin{aligned}
y &= \\sqrt{\\sin^2(${k}x) + \\cos^2(${k}x) + 2\\sin(${k}x)\\cos(${k}x)} \\\\
y &= \\sqrt{(\\sin(${k}x) + \\cos(${k}x))^2} \\\\
y &= |\\sin(${k}x) + \\cos(${k}x)| \\\\
\\text{Assuming } \\sin(${k}x) + \\cos(${k}x) > 0: \\\\
y &= \\sin(${k}x) + \\cos(${k}x) \\\\
y' &= ${k}\\cos(${k}x) - ${k}\\sin(${k}x)
\\end{aligned}`,
    finalAnswer: `y' = ${k}(\\cos(${k}x) - \\sin(${k}x))`
  });
}

// Template 9: y = \ln(\sec(rx) + \tan(rx))^{\sin(rx)}
for (let i = 1; i <= 10; i++) {
  const r = i + 2;
  problems.push({
    id: `trans-superhard-t9-${i}`,
    difficulty: 'Hard',
    type: 'free-response',
    statement: `Find the derivative of: \\quad y = \\ln(\\sec(${r}x) + \\tan(${r}x))^{\\sin(${r}x)}`,
    method: 'Logarithmic Properties and Product Rule',
    solution: `\\begin{aligned}
y &= \\sin(${r}x) \\ln(\\sec(${r}x) + \\tan(${r}x)) \\\\
y' &= \\frac{d}{dx}(\\sin(${r}x)) \\ln(\\sec(${r}x) + \\tan(${r}x)) + \\sin(${r}x) \\frac{d}{dx}(\\ln(\\sec(${r}x) + \\tan(${r}x))) \\\\
y' &= ${r}\\cos(${r}x) \\ln(\\sec(${r}x) + \\tan(${r}x)) + \\sin(${r}x) \\left( \\frac{${r}\\sec(${r}x)\\tan(${r}x) + ${r}\\sec^2(${r}x)}{\\sec(${r}x) + \\tan(${r}x)} \\right) \\\\
y' &= ${r}\\cos(${r}x) \\ln(\\sec(${r}x) + \\tan(${r}x)) + \\sin(${r}x) (${r}\\sec(${r}x)) \\\\
y' &= ${r}\\cos(${r}x) \\ln(\\sec(${r}x) + \\tan(${r}x)) + ${r}\\tan(${r}x)
\\end{aligned}`,
    finalAnswer: `y' = ${r}\\cos(${r}x) \\ln(\\sec(${r}x) + \\tan(${r}x)) + ${r}\\tan(${r}x)`
  });
}

// Template 10: y = \frac{1 - \tan^2(sx)}{1 + \tan^2(sx)}
for (let i = 1; i <= 10; i++) {
  const s = i + 3;
  problems.push({
    id: `trans-superhard-t10-${i}`,
    difficulty: 'Hard',
    type: 'free-response',
    statement: `Find the derivative of: \\quad y = \\frac{1 - \\tan^2(${s}x)}{1 + \\tan^2(${s}x)}`,
    method: 'Double Angle Identity and Chain Rule',
    solution: `\\begin{aligned}
\\text{Recall that } \\cos(2\\theta) &= \\frac{1 - \\tan^2\\theta}{1 + \\tan^2\\theta} \\\\
y &= \\cos(${2*s}x) \\\\
y' &= -\\sin(${2*s}x) \\cdot ${2*s} \\\\
y' &= -${2*s}\\sin(${2*s}x)
\\end{aligned}`,
    finalAnswer: `y' = -${2*s}\\sin(${2*s}x)`
  });
}

// Read the file, inject the problems
let content = fs.readFileSync('src/data/calculusData.tsx', 'utf8');

// Find the derivatives-transcendental problems array
const topicIndex = content.indexOf("id: 'derivatives-transcendental'");
const problemsStartIndex = content.indexOf('problems: [', topicIndex);
const problemsEndIndex = content.indexOf(']', problemsStartIndex);

// Convert problems to string
const problemsString = problems.map(p => {
  return `      {
        id: '${p.id}',
        difficulty: '${p.difficulty}',
        type: '${p.type}',
        statement: '${p.statement.replace(/\\/g, '\\\\')}',
        method: '${p.method}',
        solution: '${p.solution.replace(/\\/g, '\\\\').replace(/\n/g, '\\n')}',
        finalAnswer: '${p.finalAnswer.replace(/\\/g, '\\\\')}'
      }`;
}).join(',\n');

// Insert after the existing problems
const existingProblemsStr = content.substring(problemsStartIndex + 11, problemsEndIndex).trim();

let newProblemsArrayStr = '';
if (existingProblemsStr.length > 0) {
  newProblemsArrayStr = existingProblemsStr + ',\\n' + problemsString;
} else {
  newProblemsArrayStr = problemsString;
}

const newContent = content.substring(0, problemsStartIndex + 11) + '\\n' + newProblemsArrayStr + '\\n    ' + content.substring(problemsEndIndex);

fs.writeFileSync('src/data/calculusData.tsx', newContent);
console.log('Successfully added 100 problems.');
