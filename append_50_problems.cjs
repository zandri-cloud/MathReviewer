const fs = require('fs');

const problems = [];

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
    solution: `\\begin{aligned}\ny &= e^{${a}x} \\sin(${b}x) \\cos(${b}x) \\\\\ny &= \\frac{1}{2} e^{${a}x} \\sin(${2*b}x) \\\\\ny' &= \\frac{1}{2} \\left[ \\frac{d}{dx}(e^{${a}x}) \\sin(${2*b}x) + e^{${a}x} \\frac{d}{dx}(\\sin(${2*b}x)) \\right] \\\\\ny' &= \\frac{1}{2} \\left[ ${a} e^{${a}x} \\sin(${2*b}x) + e^{${a}x} \\cos(${2*b}x) \\cdot ${2*b} \\right] \\\\\ny' &= \\frac{1}{2} e^{${a}x} \\left( ${a} \\sin(${2*b}x) + ${2*b} \\cos(${2*b}x) \\right)\n\\end{aligned}`,
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
    solution: `\\begin{aligned}\ny' &= \\frac{d}{dx}(\\ln(\\tan(${c}x) + \\sec(${c}x))) \\cdot \\cos(${2*c}x) + \\ln(\\tan(${c}x) + \\sec(${c}x)) \\cdot \\frac{d}{dx}(\\cos(${2*c}x)) \\\\\n\\frac{d}{dx}(\\ln(\\tan(${c}x) + \\sec(${c}x))) &= \\frac{1}{\\tan(${c}x) + \\sec(${c}x)} \\cdot (${c}\\sec^2(${c}x) + ${c}\\sec(${c}x)\\tan(${c}x)) = ${c}\\sec(${c}x) \\\\\ny' &= ${c}\\sec(${c}x) \\cos(${2*c}x) - ${2*c} \\ln(\\tan(${c}x) + \\sec(${c}x)) \\sin(${2*c}x)\n\\end{aligned}`,
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
    solution: `\\begin{aligned}\ny &= \\frac{2\\sin(${n}x)\\cos(${n}x)}{1 + (2\\cos^2(${n}x) - 1)} \\\\\ny &= \\frac{2\\sin(${n}x)\\cos(${n}x)}{2\\cos^2(${n}x)} \\\\\ny &= \\tan(${n}x) \\\\\ny' &= ${n}\\sec^2(${n}x)\n\\end{aligned}`,
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
    solution: `\\begin{aligned}\ny &= \\ln\\left(\\sqrt{\\frac{2\\sin^2(${m}x)}{2\\cos^2(${m}x)}}\\right) \\\\\ny &= \\ln\\left(\\sqrt{\\tan^2(${m}x)}\\right) \\\\\ny &= \\ln|\\tan(${m}x)| \\\\\ny' &= \\frac{1}{\\tan(${m}x)} \\cdot \\sec^2(${m}x) \\cdot ${m} \\\\\ny' &= \\frac{${m}}{\\frac{\\sin(${m}x)}{\\cos(${m}x)}} \\cdot \\frac{1}{\\cos^2(${m}x)} = \\frac{${m}}{\\sin(${m}x)\\cos(${m}x)} \\\\\ny' &= \\frac{${2*m}}{2\\sin(${m}x)\\cos(${m}x)} = \\frac{${2*m}}{\\sin(${2*m}x)} = ${2*m}\\csc(${2*m}x)\n\\end{aligned}`,
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
    solution: `\\begin{aligned}\ny' &= e^{\\sin^2(${n}x)} \\cdot \\frac{d}{dx}(\\sin^2(${n}x)) \\\\\ny' &= e^{\\sin^2(${n}x)} \\cdot 2\\sin(${n}x)\\cos(${n}x) \\cdot ${n} \\\\\ny' &= ${n} e^{\\sin^2(${n}x)} (2\\sin(${n}x)\\cos(${n}x)) \\\\\ny' &= ${n} e^{\\sin^2(${n}x)} \\sin(${2*n}x)\n\\end{aligned}`,
    finalAnswer: `y' = ${n} e^{\\sin^2(${n}x)} \\sin(${2*n}x)`
  });
}

let content = fs.readFileSync('src/data/calculusData.tsx', 'utf8');

const topicIndex = content.indexOf("id: 'derivatives-transcendental'");
const problemsStartIndex = content.indexOf('problems: [', topicIndex);
const problemsEndIndex = content.indexOf(']', problemsStartIndex);

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

const existingProblemsStr = content.substring(problemsStartIndex + 11, problemsEndIndex).trim();

let newProblemsArrayStr = '';
if (existingProblemsStr.length > 0) {
  newProblemsArrayStr = existingProblemsStr + ',\\n' + problemsString;
} else {
  newProblemsArrayStr = problemsString;
}

const newContent = content.substring(0, problemsStartIndex + 11) + '\\n' + newProblemsArrayStr + '\\n    ' + content.substring(problemsEndIndex);

fs.writeFileSync('src/data/calculusData.tsx', newContent);
console.log('Successfully added 50 problems.');
