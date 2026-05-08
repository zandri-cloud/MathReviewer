const fs = require('fs');
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
      endIndex = i + 1;
      break;
    }
  }
}

const newProblems = `[
      {
        id: 'trans-curated-1',
        difficulty: 'Easy',
        type: 'free-response',
        statement: 'Find the derivative of: \\\\quad y = e^{\\\\arcsin(x)}',
        method: 'Strategy: We have an exponential function where the exponent is an inverse trigonometric function. We will use the chain rule: the derivative of e^u is e^u * u\\'. Identities: None strictly needed.',
        solution: '\\\\begin{aligned}\\n y\\' &= e^{\\\\arcsin(x)} \\\\cdot \\\\frac{d}{dx}(\\\\arcsin(x)) \\\\\\\\\\n y\\' &= e^{\\\\arcsin(x)} \\\\cdot \\\\frac{1}{\\\\sqrt{1-x^2}} \\\\\\\\\\n y\\' &= \\\\frac{e^{\\\\arcsin(x)}}{\\\\sqrt{1-x^2}}\\n\\\\end{aligned}',
        finalAnswer: 'y\\' = \\\\frac{e^{\\\\arcsin(x)}}{\\\\sqrt{1-x^2}}'
      },
      {
        id: 'trans-curated-2',
        difficulty: 'Medium',
        type: 'free-response',
        statement: 'Find the derivative of: \\\\quad y = \\\\frac{\\\\sin(2x)}{e^x \\\\sin x}',
        method: 'Strategy: Before jumping into a messy quotient rule, we can use the double-angle identity for sine to cancel out terms. Then we use the product rule and chain rule on the simplified expression. Identity Application: \\\\sin(2x) = 2\\\\sin(x)\\\\cos(x).',
        solution: '\\\\begin{aligned}\\n y &= \\\\frac{2\\\\sin x \\\\cos x}{e^x \\\\sin x} \\\\\\\\\\n y &= \\\\frac{2\\\\cos x}{e^x} = 2e^{-x}\\\\cos x \\\\\\\\\\n y\\' &= 2 \\\\left[ \\\\frac{d}{dx}(e^{-x})\\\\cos x + e^{-x}\\\\frac{d}{dx}(\\\\cos x) \\\\right] \\\\\\\\\\n y\\' &= 2 \\\\left[ -e^{-x}\\\\cos x - e^{-x}\\\\sin x \\\\right] \\\\\\\\\\n y\\' &= -2e^{-x}(\\\\cos x + \\\\sin x)\\n\\\\end{aligned}',
        finalAnswer: 'y\\' = -2e^{-x}(\\\\cos x + \\\\sin x)'
      },
      {
        id: 'trans-curated-3',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\\\quad y = \\\\log_2(\\\\cosh(\\\\sin(e^x)))',
        method: 'Strategy: This is a classic "onion" problem. We peel it layer by layer using the chain rule. We start with the outermost function (base-2 logarithm), then the hyperbolic cosine, then the trigonometric sine, and finally the inner exponential function. Identities: \\\\frac{d}{dx}\\\\log_a(x) = \\\\frac{1}{x \\\\ln a}.',
        solution: '\\\\begin{aligned}\\n y\\' &= \\\\frac{1}{\\\\cosh(\\\\sin(e^x)) \\\\ln 2} \\\\cdot \\\\frac{d}{dx}(\\\\cosh(\\\\sin(e^x))) \\\\\\\\\\n y\\' &= \\\\frac{1}{\\\\cosh(\\\\sin(e^x)) \\\\ln 2} \\\\cdot \\\\sinh(\\\\sin(e^x)) \\\\cdot \\\\frac{d}{dx}(\\\\sin(e^x)) \\\\\\\\\\n y\\' &= \\\\frac{\\\\sinh(\\\\sin(e^x))}{\\\\cosh(\\\\sin(e^x)) \\\\ln 2} \\\\cdot \\\\cos(e^x) \\\\cdot \\\\frac{d}{dx}(e^x) \\\\\\\\\\n y\\' &= \\\\frac{\\\\tanh(\\\\sin(e^x))}{\\\\ln 2} \\\\cdot \\\\cos(e^x) \\\\cdot e^x \\\\\\\\\\n y\\' &= \\\\frac{e^x \\\\cos(e^x) \\\\tanh(\\\\sin(e^x))}{\\\\ln 2}\\n\\\\end{aligned}',
        finalAnswer: 'y\\' = \\\\frac{e^x \\\\cos(e^x) \\\\tanh(\\\\sin(e^x))}{\\\\ln 2}'
      },
      {
        id: 'trans-curated-4',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\\\quad y = (\\\\arctan x)^{e^{-x}}',
        method: 'Strategy: Because we have a variable base raised to a variable power, standard exponential rules fail. We must use logarithmic differentiation: take the natural log of both sides to bring the exponent down, then differentiate implicitly using the product rule. Identities: \\\\ln(a^b) = b \\\\ln a.',
        solution: '\\\\begin{aligned}\\n \\\\ln y &= \\\\ln\\\\left( (\\\\arctan x)^{e^{-x}} \\\\right) \\\\\\\\\\n \\\\ln y &= e^{-x} \\\\ln(\\\\arctan x) \\\\\\\\\\n \\\\frac{d}{dx}(\\\\ln y) &= \\\\frac{d}{dx}\\\\left( e^{-x} \\\\ln(\\\\arctan x) \\\\right) \\\\\\\\\\n \\\\frac{y\\'}{y} &= -e^{-x} \\\\ln(\\\\arctan x) + e^{-x} \\\\cdot \\\\frac{1}{\\\\arctan x} \\\\cdot \\\\frac{1}{1+x^2} \\\\\\\\\\n y\\' &= y \\\\left[ \\\\frac{e^{-x}}{(1+x^2)\\\\arctan x} - e^{-x} \\\\ln(\\\\arctan x) \\\\right] \\\\\\\\\\n y\\' &= (\\\\arctan x)^{e^{-x}} e^{-x} \\\\left[ \\\\frac{1}{(1+x^2)\\\\arctan x} - \\\\ln(\\\\arctan x) \\\\right]\\n\\\\end{aligned}',
        finalAnswer: 'y\\' = (\\\\arctan x)^{e^{-x}} e^{-x} \\\\left[ \\\\frac{1}{(1+x^2)\\\\arctan x} - \\\\ln(\\\\arctan x) \\\\right]'
      },
      {
        id: 'trans-curated-5',
        difficulty: 'Hard',
        type: 'free-response',
        statement: 'Find the derivative of: \\\\quad y = \\\\ln\\\\left( \\\\left[ \\\\frac{\\\\cosh^2(x) - \\\\sinh^2(x)}{\\\\sec^2(x) - \\\\tan^2(x)} \\\\right]^{\\\\pi} \\\\cdot \\\\frac{e^{\\\\arctan(\\\\tan(x^3))}}{\\\\sqrt{1 - \\\\sin^2(x)}} \\\\right)',
        method: 'Strategy: At first glance, this looks impossible to differentiate directly. The key is to aggressively apply fundamental identities to collapse the massive expression into a simple one before taking a single derivative. Identities: 1) \\\\cosh^2(x) - \\\\sinh^2(x) = 1. 2) \\\\sec^2(x) - \\\\tan^2(x) = 1. 3) \\\\arctan(\\\\tan(\\\\theta)) = \\\\theta. 4) 1 - \\\\sin^2(x) = \\\\cos^2(x). 5) \\\\ln(A/B) = \\\\ln A - \\\\ln B.',
        solution: '\\\\begin{aligned}\\n y &= \\\\ln\\\\left( \\\\left[ \\\\frac{1}{1} \\\\right]^{\\\\pi} \\\\cdot \\\\frac{e^{x^3}}{\\\\sqrt{\\\\cos^2(x)}} \\\\right) \\\\\\\\\\n y &= \\\\ln\\\\left( 1 \\\\cdot \\\\frac{e^{x^3}}{\\\\cos x} \\\\right) \\\\\\\\\\n y &= \\\\ln(e^{x^3}) - \\\\ln(\\\\cos x) \\\\\\\\\\n y &= x^3 - \\\\ln(\\\\cos x) \\\\\\\\\\n y\\' &= \\\\frac{d}{dx}(x^3) - \\\\frac{d}{dx}(\\\\ln(\\\\cos x)) \\\\\\\\\\n y\\' &= 3x^2 - \\\\frac{1}{\\\\cos x}(-\\\\sin x) \\\\\\\\\\n y\\' &= 3x^2 + \\\\tan x\\n\\\\end{aligned}',
        finalAnswer: 'y\\' = 3x^2 + \\\\tan x'
      }
    ]`;

content = content.substring(0, problemsKeyIndex + 10) + newProblems + content.substring(endIndex);

fs.writeFileSync(dataPath, content, 'utf8');
console.log('Successfully replaced problems.');
