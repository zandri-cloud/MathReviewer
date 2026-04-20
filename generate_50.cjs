const fs = require('fs');

let problemsString = '';
let idCounter = 6;

function addProblem(difficulty, statement, method, solution, finalAnswer) {
  const s = statement.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  const m = method.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  const sol = solution.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/'/g, "\\'");
  const ans = finalAnswer.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  
  problemsString += `
      {
        id: 'trans-curated-${idCounter++}',
        difficulty: '${difficulty}',
        type: 'free-response',
        statement: 'Find the derivative of: \\\\quad y = ${s}',
        method: '${m}',
        solution: '\\\\begin{aligned}\\n${sol}\\n\\\\end{aligned}',
        finalAnswer: 'y\\' = ${ans}'
      },`;
}

// 1. Easy (10 problems)
const easyData = [
  { s: '\\sin(e^x)', m: 'Chain rule: outer is sine, inner is exponential.', sol: "y' &= \\cos(e^x) \\cdot \\frac{d}{dx}(e^x) \\\\\n y' &= e^x \\cos(e^x)", ans: "e^x \\cos(e^x)" },
  { s: 'e^{\\cosh x}', m: 'Chain rule: outer is exponential, inner is hyperbolic cosine.', sol: "y' &= e^{\\cosh x} \\cdot \\frac{d}{dx}(\\cosh x) \\\\\n y' &= \\sinh x \\cdot e^{\\cosh x}", ans: "\\sinh x \\cdot e^{\\cosh x}" },
  { s: '\\ln(\\arctan x)', m: 'Chain rule: outer is natural log, inner is inverse tangent.', sol: "y' &= \\frac{1}{\\arctan x} \\cdot \\frac{d}{dx}(\\arctan x) \\\\\n y' &= \\frac{1}{\\arctan x} \\cdot \\frac{1}{1+x^2} \\\\\n y' &= \\frac{1}{(1+x^2)\\arctan x}", ans: "\\frac{1}{(1+x^2)\\arctan x}" },
  { s: '\\sinh(\\log_2 x)', m: 'Chain rule: outer is hyperbolic sine, inner is base-2 logarithm.', sol: "y' &= \\cosh(\\log_2 x) \\cdot \\frac{d}{dx}(\\log_2 x) \\\\\n y' &= \\cosh(\\log_2 x) \\cdot \\frac{1}{x \\ln 2} \\\\\n y' &= \\frac{\\cosh(\\log_2 x)}{x \\ln 2}", ans: "\\frac{\\cosh(\\log_2 x)}{x \\ln 2}" },
  { s: '\\arcsin(2^x)', m: 'Chain rule: outer is inverse sine, inner is base-2 exponential.', sol: "y' &= \\frac{1}{\\sqrt{1-(2^x)^2}} \\cdot \\frac{d}{dx}(2^x) \\\\\n y' &= \\frac{1}{\\sqrt{1-4^x}} \\cdot 2^x \\ln 2 \\\\\n y' &= \\frac{2^x \\ln 2}{\\sqrt{1-4^x}}", ans: "\\frac{2^x \\ln 2}{\\sqrt{1-4^x}}" },
  { s: '10^{\\sec x}', m: 'Chain rule: outer is base-10 exponential, inner is secant.', sol: "y' &= 10^{\\sec x} \\ln 10 \\cdot \\frac{d}{dx}(\\sec x) \\\\\n y' &= 10^{\\sec x} \\ln 10 \\cdot \\sec x \\tan x", ans: "10^{\\sec x} \\ln 10 \\sec x \\tan x" },
  { s: '\\cosh(\\arcsin x)', m: 'Chain rule: outer is hyperbolic cosine, inner is inverse sine.', sol: "y' &= \\sinh(\\arcsin x) \\cdot \\frac{d}{dx}(\\arcsin x) \\\\\n y' &= \\sinh(\\arcsin x) \\cdot \\frac{1}{\\sqrt{1-x^2}} \\\\\n y' &= \\frac{\\sinh(\\arcsin x)}{\\sqrt{1-x^2}}", ans: "\\frac{\\sinh(\\arcsin x)}{\\sqrt{1-x^2}}" },
  { s: '\\log_{10}(\\tanh x)', m: 'Chain rule: outer is base-10 log, inner is hyperbolic tangent.', sol: "y' &= \\frac{1}{\\tanh x \\ln 10} \\cdot \\frac{d}{dx}(\\tanh x) \\\\\n y' &= \\frac{1}{\\tanh x \\ln 10} \\cdot \\text{sech}^2 x \\\\\n y' &= \\frac{\\text{sech}^2 x}{\\tanh x \\ln 10}", ans: "\\frac{\\text{sech}^2 x}{\\tanh x \\ln 10}" },
  { s: '\\arctan(\\ln x)', m: 'Chain rule: outer is inverse tangent, inner is natural log.', sol: "y' &= \\frac{1}{1+(\\ln x)^2} \\cdot \\frac{d}{dx}(\\ln x) \\\\\n y' &= \\frac{1}{1+(\\ln x)^2} \\cdot \\frac{1}{x} \\\\\n y' &= \\frac{1}{x(1+(\\ln x)^2)}", ans: "\\frac{1}{x(1+(\\ln x)^2)}" },
  { s: '\\tan(\\text{arsinh } x)', m: 'Chain rule: outer is tangent, inner is inverse hyperbolic sine.', sol: "y' &= \\sec^2(\\text{arsinh } x) \\cdot \\frac{d}{dx}(\\text{arsinh } x) \\\\\n y' &= \\sec^2(\\text{arsinh } x) \\cdot \\frac{1}{\\sqrt{x^2+1}} \\\\\n y' &= \\frac{\\sec^2(\\text{arsinh } x)}{\\sqrt{x^2+1}}", ans: "\\frac{\\sec^2(\\text{arsinh } x)}{\\sqrt{x^2+1}}" }
];

easyData.forEach(d => addProblem('Easy', d.s, `Strategy: ${d.m} Identities: None strictly needed.`, d.sol, d.ans));

// 2. Medium (10 problems)
const mediumData = [
  { s: '\\frac{\\sin(2x)}{\\cos x}', m: 'Use double-angle identity for sine to simplify before differentiating.', iden: '\\sin(2x) = 2\\sin x \\cos x', sol: "y &= \\frac{2\\sin x \\cos x}{\\cos x} = 2\\sin x \\\\\n y' &= 2\\cos x", ans: "2\\cos x" },
  { s: 'e^{\\ln(\\cosh x)} \\cdot \\sinh x', m: 'Use inverse property of exponentials and logs to simplify.', iden: 'e^{\\ln(u)} = u', sol: "y &= \\cosh x \\cdot \\sinh x \\\\\n y' &= \\sinh x \\cdot \\sinh x + \\cosh x \\cdot \\cosh x \\\\\n y' &= \\sinh^2 x + \\cosh^2 x", ans: "\\sinh^2 x + \\cosh^2 x" },
  { s: '\\frac{\\sec^2 x - 1}{\\tan x}', m: 'Use Pythagorean identity to simplify the numerator.', iden: '\\sec^2 x - 1 = \\tan^2 x', sol: "y &= \\frac{\\tan^2 x}{\\tan x} = \\tan x \\\\\n y' &= \\sec^2 x", ans: "\\sec^2 x" },
  { s: '\\ln(e^{x^2 \\sin x})', m: 'Use inverse property of logs and exponentials.', iden: '\\ln(e^u) = u', sol: "y &= x^2 \\sin x \\\\\n y' &= 2x \\sin x + x^2 \\cos x", ans: "x(2\\sin x + x\\cos x)" },
  { s: '\\frac{\\cosh^2 x - \\sinh^2 x}{e^x}', m: 'Use fundamental hyperbolic identity.', iden: '\\cosh^2 x - \\sinh^2 x = 1', sol: "y &= \\frac{1}{e^x} = e^{-x} \\\\\n y' &= -e^{-x}", ans: "-e^{-x}" },
  { s: '2^{\\log_2(\\arctan x)} \\cdot x^2', m: 'Use inverse property of base-2 exponential and log.', iden: 'a^{\\log_a(u)} = u', sol: "y &= \\arctan x \\cdot x^2 \\\\\n y' &= \\frac{1}{1+x^2} \\cdot x^2 + \\arctan x \\cdot 2x \\\\\n y' &= \\frac{x^2}{1+x^2} + 2x\\arctan x", ans: "\\frac{x^2}{1+x^2} + 2x\\arctan x" },
  { s: '\\frac{\\sin^2 x + \\cos^2 x}{\\arcsin x}', m: 'Use Pythagorean identity.', iden: '\\sin^2 x + \\cos^2 x = 1', sol: "y &= \\frac{1}{\\arcsin x} = (\\arcsin x)^{-1} \\\\\n y' &= -(\\arcsin x)^{-2} \\cdot \\frac{1}{\\sqrt{1-x^2}} \\\\\n y' &= -\\frac{1}{\\sqrt{1-x^2}(\\arcsin x)^2}", ans: "-\\frac{1}{\\sqrt{1-x^2}(\\arcsin x)^2}" },
  { s: '\\sinh(2x) \\cdot \\text{csch } x', m: 'Use double-angle identity for hyperbolic sine.', iden: '\\sinh(2x) = 2\\sinh x \\cosh x, \\text{csch } x = 1/\\sinh x', sol: "y &= 2\\sinh x \\cosh x \\cdot \\frac{1}{\\sinh x} = 2\\cosh x \\\\\n y' &= 2\\sinh x", ans: "2\\sinh x" },
  { s: '\\ln(x^3) - 3\\ln x + \\tan x', m: 'Use logarithm power rule to cancel terms.', iden: '\\ln(x^a) = a\\ln x', sol: "y &= 3\\ln x - 3\\ln x + \\tan x = \\tan x \\\\\n y' &= \\sec^2 x", ans: "\\sec^2 x" },
  { s: 'e^{x + \\ln(\\cos x)}', m: 'Use exponential addition rule and inverse properties.', iden: 'e^{a+b} = e^a e^b, e^{\\ln u} = u', sol: "y &= e^x \\cdot e^{\\ln(\\cos x)} = e^x \\cos x \\\\\n y' &= e^x \\cos x + e^x (-\\sin x) \\\\\n y' &= e^x(\\cos x - \\sin x)", ans: "e^x(\\cos x - \\sin x)" }
];

mediumData.forEach(d => addProblem('Medium', d.s, `Strategy: ${d.m} Identity Application: ${d.iden}.`, d.sol, d.ans));

// 3. Hard (10 problems)
const hardData = [
  { s: '\\sin(e^{\\cosh x})', ans: "\\cos(e^{\\cosh x}) \\cdot e^{\\cosh x} \\cdot \\sinh x" },
  { s: '\\ln(\\arcsin(2^x))', ans: "\\frac{2^x \\ln 2}{\\arcsin(2^x) \\sqrt{1-4^x}}" },
  { s: '\\cosh(\\sqrt{\\ln x})', ans: "\\sinh(\\sqrt{\\ln x}) \\cdot \\frac{1}{2\\sqrt{\\ln x}} \\cdot \\frac{1}{x}" },
  { s: '\\arctan(e^{\\sin x})', ans: "\\frac{e^{\\sin x} \\cos x}{1 + e^{2\\sin x}}" },
  { s: 'e^{\\sinh(\\cos x)}', ans: "e^{\\sinh(\\cos x)} \\cdot \\cosh(\\cos x) \\cdot (-\\sin x)" },
  { s: '\\log_2(\\tan(e^x))', ans: "\\frac{\\sec^2(e^x) \\cdot e^x}{\\tan(e^x) \\ln 2}" },
  { s: '\\arcsin(\\ln(\\cosh x))', ans: "\\frac{\\tanh x}{\\sqrt{1 - (\\ln(\\cosh x))^2}}" },
  { s: '\\sinh(2^{\\arctan x})', ans: "\\cosh(2^{\\arctan x}) \\cdot 2^{\\arctan x} \\ln 2 \\cdot \\frac{1}{1+x^2}" },
  { s: '\\tan(\\ln(\\arcsin x))', ans: "\\sec^2(\\ln(\\arcsin x)) \\cdot \\frac{1}{\\arcsin x} \\cdot \\frac{1}{\\sqrt{1-x^2}}" },
  { s: 'e^{\\cos(\\sinh x)}', ans: "e^{\\cos(\\sinh x)} \\cdot (-\\sin(\\sinh x)) \\cdot \\cosh x" }
];

hardData.forEach(d => {
  const sol = `y' &= \\text{Apply chain rule repeatedly from outside in.} \\\\\n y' &= ${d.ans}`;
  addProblem('Hard', d.s, 'Strategy: This is a multi-layered chain rule problem. Peel the layers from the outermost function to the innermost. Identities: None strictly needed.', sol, d.ans);
});

// 4. Very Challenging (10 problems)
const veryChallengingData = [
  { s: '(\\sin x)^{\\cos x}', ans: "(\\sin x)^{\\cos x} [ -\\sin x \\ln(\\sin x) + \\cos x \\cot x ]" },
  { s: '(\\ln x)^{e^x}', ans: "(\\ln x)^{e^x} [ e^x \\ln(\\ln x) + \\frac{e^x}{x \\ln x} ]" },
  { s: '(\\arctan x)^{\\sinh x}', ans: "(\\arctan x)^{\\sinh x} [ \\cosh x \\ln(\\arctan x) + \\frac{\\sinh x}{(1+x^2)\\arctan x} ]" },
  { s: '(\\cosh x)^{\\ln x}', ans: "(\\cosh x)^{\\ln x} [ \\frac{1}{x} \\ln(\\cosh x) + \\ln x \\tanh x ]" },
  { s: '(e^x + 1)^{\\arcsin x}', ans: "(e^x + 1)^{\\arcsin x} [ \\frac{\\ln(e^x + 1)}{\\sqrt{1-x^2}} + \\frac{e^x \\arcsin x}{e^x + 1} ]" },
  { s: 'x^{\\tan x}', ans: "x^{\\tan x} [ \\sec^2 x \\ln x + \\frac{\\tan x}{x} ]" },
  { s: '(\\sinh x)^{x^2}', ans: "(\\sinh x)^{x^2} [ 2x \\ln(\\sinh x) + x^2 \\coth x ]" },
  { s: '(\\sec x)^{e^x}', ans: "(\\sec x)^{e^x} [ e^x \\ln(\\sec x) + e^x \\tan x ]" },
  { s: '(\\log_2 x)^x', ans: "(\\log_2 x)^x [ \\ln(\\log_2 x) + \\frac{1}{\\ln 2 \\cdot \\log_2 x} ]" },
  { s: '(\\arcsin x)^{\\cos x}', ans: "(\\arcsin x)^{\\cos x} [ -\\sin x \\ln(\\arcsin x) + \\frac{\\cos x}{\\arcsin x \\sqrt{1-x^2}} ]" }
];

veryChallengingData.forEach(d => {
  const sol = `\\ln y &= \\ln(${d.s}) \\\\\n \\frac{y'}{y} &= \\frac{d}{dx}[ \\text{exponent} \\cdot \\ln(\\text{base}) ] \\\\\n y' &= ${d.ans}`;
  addProblem('Hard', d.s, 'Strategy: Variable base raised to a variable power requires logarithmic differentiation. Take the natural log of both sides, use log properties to bring down the exponent, and differentiate implicitly using the product rule.', sol, d.ans);
});

// 5. Boss Level (10 problems)
const bossData = [
  { s: '\\ln( (\\sin^2 x + \\cos^2 x) \\cdot e^{\\tan x} )', m: 'Simplify the inside of the log using Pythagorean identity and log properties.', iden: '\\sin^2 x + \\cos^2 x = 1, \\ln(e^u) = u', sol: "y &= \\ln( 1 \\cdot e^{\\tan x} ) = \\tan x \\\\\n y' &= \\sec^2 x", ans: "\\sec^2 x" },
  { s: 'e^{\\ln(\\cosh^2 x - \\sinh^2 x) + \\arcsin(\\sin x)}', m: 'Use hyperbolic identity and inverse properties.', iden: '\\cosh^2 x - \\sinh^2 x = 1, \\ln(1) = 0, \\arcsin(\\sin x) = x', sol: "y &= e^{\\ln(1) + x} = e^{0 + x} = e^x \\\\\n y' &= e^x", ans: "e^x" },
  { s: '\\log_2( 2^{\\sin x} \\cdot 4^{\\cos x} )', m: 'Convert bases to be the same, then use log properties.', iden: '4 = 2^2, \\log_2(2^u) = u', sol: "y &= \\log_2( 2^{\\sin x} \\cdot 2^{2\\cos x} ) = \\log_2( 2^{\\sin x + 2\\cos x} ) \\\\\n y &= \\sin x + 2\\cos x \\\\\n y' &= \\cos x - 2\\sin x", ans: "\\cos x - 2\\sin x" },
  { s: '\\arctan( \\tan( e^{\\ln x} ) )', m: 'Apply inverse properties repeatedly.', iden: 'e^{\\ln x} = x, \\arctan(\\tan u) = u', sol: "y &= \\arctan( \\tan( x ) ) = x \\\\\n y' &= 1", ans: "1" },
  { s: '\\sinh( \\text{arsinh}( \\ln(e^{x^2}) ) )', m: 'Apply inverse properties repeatedly.', iden: '\\ln(e^u) = u, \\sinh(\\text{arsinh } u) = u', sol: "y &= \\sinh( \\text{arsinh}( x^2 ) ) = x^2 \\\\\n y' &= 2x", ans: "2x" },
  { s: '\\cosh( \\text{arcosh}( \\sec^2 x - \\tan^2 x + e^x ) )', m: 'Use Pythagorean identity and inverse properties.', iden: '\\sec^2 x - \\tan^2 x = 1, \\cosh(\\text{arcosh } u) = u', sol: "y &= \\cosh( \\text{arcosh}( 1 + e^x ) ) = 1 + e^x \\\\\n y' &= e^x", ans: "e^x" },
  { s: '\\ln( e^{\\arcsin x} \\cdot e^{\\arccos x} )', m: 'Use exponent rules and the cofunction identity for inverse trig.', iden: 'e^a e^b = e^{a+b}, \\arcsin x + \\arccos x = \\pi/2', sol: "y &= \\ln( e^{\\arcsin x + \\arccos x} ) = \\arcsin x + \\arccos x \\\\\n y &= \\frac{\\pi}{2} \\\\\n y' &= 0", ans: "0" },
  { s: '10^{\\log_{10}( \\frac{\\sin(2x)}{2\\sin x \\cos x} ) + x}', m: 'Use double-angle identity and log properties.', iden: '\\sin(2x) = 2\\sin x \\cos x, \\log_{10}(1) = 0', sol: "y &= 10^{\\log_{10}( 1 ) + x} = 10^{0 + x} = 10^x \\\\\n y' &= 10^x \\ln 10", ans: "10^x \\ln 10" },
  { s: 'e^{\\frac{1}{2}\\ln(1 - \\sin^2 x)}', m: 'Use Pythagorean identity and log power rule.', iden: '1 - \\sin^2 x = \\cos^2 x, \\frac{1}{2}\\ln(u^2) = \\ln u', sol: "y &= e^{\\frac{1}{2}\\ln(\\cos^2 x)} = e^{\\ln(\\cos x)} = \\cos x \\\\\n y' &= -\\sin x", ans: "-\\sin x" },
  { s: '\\ln( (\\cosh x + \\sinh x)^3 )', m: 'Use the definition of hyperbolic functions or the identity cosh x + sinh x = e^x.', iden: '\\cosh x + \\sinh x = e^x', sol: "y &= \\ln( (e^x)^3 ) = \\ln( e^{3x} ) = 3x \\\\\n y' &= 3", ans: "3" }
];

bossData.forEach(d => addProblem('Hard', d.s, `Strategy: This looks impossible to differentiate directly. Aggressively apply fundamental identities to collapse the massive expression into a simple one before taking a single derivative. Identity Application: ${d.iden}.`, d.sol, d.ans));

// Remove trailing comma
problemsString = problemsString.replace(/,$/, '');

const dataPath = 'src/data/calculusData.tsx';
let content = fs.readFileSync(dataPath, 'utf8');

const startIndex = content.indexOf("id: 'derivatives-transcendental'");
const problemsKeyIndex = content.indexOf("problems: [", startIndex);

let bracketCount = 0;
let endIndex = -1;

for (let i = problemsKeyIndex + 10; i < content.length; i++) {
  if (content[i] === '[') bracketCount++;
  else if (content[i] === ']') {
    bracketCount--;
    if (bracketCount === 0) {
      endIndex = i; // Point to the closing bracket
      break;
    }
  }
}

const newContent = content.substring(0, endIndex) + ',' + problemsString + '\\n    ' + content.substring(endIndex);

fs.writeFileSync(dataPath, newContent, 'utf8');
console.log('Successfully appended 50 problems.');
