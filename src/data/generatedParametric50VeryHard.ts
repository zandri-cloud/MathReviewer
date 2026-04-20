// Generates 50 very hard parametric calculus problems
export const generatedParametric50VeryHard: any[] = [
  {
    "id": "gen_param_vh_rat_0",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "very_hard",
    "statement": "A curve is given parametrically by $x = \\frac{t^2 - 6}{t^2 + 6}$ and $y = \\frac{3 t}{t^2 + 6}$. Find $\\frac{dy}{dx}$ and express it in simplest factored form.",
    "answer": "\\frac{6 - t^2}{8t}",
    "steps": "\\begin{aligned}\nx &= \\frac{t^2 - 6}{t^2 + 6} \\\\\n\\frac{dx}{dt} &= \\frac{2t(t^2 + 6) - (t^2 - 6)(2t)}{(t^2 + 6)^2} \\\\\n&= \\frac{2t^3 + 12t - 2t^3 + 12t}{(t^2 + 6)^2} = \\frac{24t}{(t^2 + 6)^2} \\\\[10pt]\ny &= \\frac{3t}{t^2 + 6} \\\\\n\\frac{dy}{dt} &= \\frac{3(t^2 + 6) - (3t)(2t)}{(t^2 + 6)^2} \\\\\n&= \\frac{3t^2 + 18 - 6t^2}{(t^2 + 6)^2} = \\frac{18 - 3t^2}{(t^2 + 6)^2} = \\frac{3(6 - t^2)}{(t^2 + 6)^2} \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{\\frac{3(6 - t^2)}{(t^2 + 6)^2}}{\\frac{24t}{(t^2 + 6)^2}} \\\\\n&= \\frac{3(6 - t^2)}{24t} \\\\\n&= \\frac{6 - t^2}{8t} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_param_vh_sec_0",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "very_hard",
    "statement": "A curve is defined by $x = e^t + e^{-t}$ and $y = 3(e^t - e^{-t})$. Find the second derivative $\\frac{d^2y}{dx^2}$ in terms of $t$.",
    "answer": "-\\frac{12}{(e^t - e^{-t})^3}",
    "steps": "\\begin{aligned}\nx &= e^t + e^{-t} \\implies \\frac{dx}{dt} = e^t - e^{-t} \\\\\ny &= 3(e^t - e^{-t}) \\implies \\frac{dy}{dt} = 3(e^t + e^{-t}) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{3(e^t + e^{-t})}{e^t - e^{-t}} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= 3\\left[\\frac{(e^t - e^{-t})(e^t - e^{-t}) - (e^t + e^{-t})(e^t + e^{-t})}{(e^t - e^{-t})^2}\\right] \\\\\n&= 3\\left[\\frac{(e^{2t} - 2 + e^{-2t}) - (e^{2t} + 2 + e^{-2t})}{(e^t - e^{-t})^2}\\right] \\\\\n&= 3\\left[\\frac{-4}{(e^t - e^{-t})^2}\\right] = \\frac{-12}{(e^t - e^{-t})^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}(\\frac{dy}{dx})}{\\frac{dx}{dt}} = \\frac{\\frac{-12}{(e^t - e^{-t})^2}}{e^t - e^{-t}} \\\\\n&= -\\frac{12}{(e^t - e^{-t})^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_param_vh_rat_1",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "very_hard",
    "statement": "A curve is given parametrically by $x = \\frac{t^2 - 7}{t^2 + 7}$ and $y = \\frac{3 t}{t^2 + 7}$. Find $\\frac{dy}{dx}$ and express it in simplest factored form.",
    "answer": "\\frac{3(7 - t^2)}{28t}",
    "steps": "\\begin{aligned}\nx &= \\frac{t^2 - 7}{t^2 + 7} \\\\\n\\frac{dx}{dt} &= \\frac{2t(t^2 + 7) - (t^2 - 7)(2t)}{(t^2 + 7)^2} \\\\\n&= \\frac{2t^3 + 14t - 2t^3 + 14t}{(t^2 + 7)^2} = \\frac{28t}{(t^2 + 7)^2} \\\\[10pt]\ny &= \\frac{3t}{t^2 + 7} \\\\\n\\frac{dy}{dt} &= \\frac{3(t^2 + 7) - (3t)(2t)}{(t^2 + 7)^2} \\\\\n&= \\frac{3t^2 + 21 - 6t^2}{(t^2 + 7)^2} = \\frac{21 - 3t^2}{(t^2 + 7)^2} = \\frac{3(7 - t^2)}{(t^2 + 7)^2} \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{\\frac{3(7 - t^2)}{(t^2 + 7)^2}}{\\frac{28t}{(t^2 + 7)^2}} \\\\\n&= \\frac{3(7 - t^2)}{28t} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_param_vh_sec_1",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "very_hard",
    "statement": "A curve is defined by $x = e^t + e^{-t}$ and $y = 5(e^t - e^{-t})$. Find the second derivative $\\frac{d^2y}{dx^2}$ in terms of $t$.",
    "answer": "-\\frac{20}{(e^t - e^{-t})^3}",
    "steps": "\\begin{aligned}\nx &= e^t + e^{-t} \\implies \\frac{dx}{dt} = e^t - e^{-t} \\\\\ny &= 5(e^t - e^{-t}) \\implies \\frac{dy}{dt} = 5(e^t + e^{-t}) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{5(e^t + e^{-t})}{e^t - e^{-t}} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= 5\\left[\\frac{(e^t - e^{-t})(e^t - e^{-t}) - (e^t + e^{-t})(e^t + e^{-t})}{(e^t - e^{-t})^2}\\right] \\\\\n&= 5\\left[\\frac{(e^{2t} - 2 + e^{-2t}) - (e^{2t} + 2 + e^{-2t})}{(e^t - e^{-t})^2}\\right] \\\\\n&= 5\\left[\\frac{-4}{(e^t - e^{-t})^2}\\right] = \\frac{-20}{(e^t - e^{-t})^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}(\\frac{dy}{dx})}{\\frac{dx}{dt}} = \\frac{\\frac{-20}{(e^t - e^{-t})^2}}{e^t - e^{-t}} \\\\\n&= -\\frac{20}{(e^t - e^{-t})^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_param_vh_rat_2",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "very_hard",
    "statement": "A curve is given parametrically by $x = \\frac{t^2 - 5}{t^2 + 5}$ and $y = \\frac{3 t}{t^2 + 5}$. Find $\\frac{dy}{dx}$ and express it in simplest factored form.",
    "answer": "\\frac{3(5 - t^2)}{20t}",
    "steps": "\\begin{aligned}\nx &= \\frac{t^2 - 5}{t^2 + 5} \\\\\n\\frac{dx}{dt} &= \\frac{2t(t^2 + 5) - (t^2 - 5)(2t)}{(t^2 + 5)^2} \\\\\n&= \\frac{2t^3 + 10t - 2t^3 + 10t}{(t^2 + 5)^2} = \\frac{20t}{(t^2 + 5)^2} \\\\[10pt]\ny &= \\frac{3t}{t^2 + 5} \\\\\n\\frac{dy}{dt} &= \\frac{3(t^2 + 5) - (3t)(2t)}{(t^2 + 5)^2} \\\\\n&= \\frac{3t^2 + 15 - 6t^2}{(t^2 + 5)^2} = \\frac{15 - 3t^2}{(t^2 + 5)^2} = \\frac{3(5 - t^2)}{(t^2 + 5)^2} \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{\\frac{3(5 - t^2)}{(t^2 + 5)^2}}{\\frac{20t}{(t^2 + 5)^2}} \\\\\n&= \\frac{3(5 - t^2)}{20t} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_param_vh_sec_2",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "very_hard",
    "statement": "A curve is defined by $x = e^t + e^{-t}$ and $y = 2(e^t - e^{-t})$. Find the second derivative $\\frac{d^2y}{dx^2}$ in terms of $t$.",
    "answer": "-\\frac{8}{(e^t - e^{-t})^3}",
    "steps": "\\begin{aligned}\nx &= e^t + e^{-t} \\implies \\frac{dx}{dt} = e^t - e^{-t} \\\\\ny &= 2(e^t - e^{-t}) \\implies \\frac{dy}{dt} = 2(e^t + e^{-t}) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{2(e^t + e^{-t})}{e^t - e^{-t}} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= 2\\left[\\frac{(e^t - e^{-t})(e^t - e^{-t}) - (e^t + e^{-t})(e^t + e^{-t})}{(e^t - e^{-t})^2}\\right] \\\\\n&= 2\\left[\\frac{(e^{2t} - 2 + e^{-2t}) - (e^{2t} + 2 + e^{-2t})}{(e^t - e^{-t})^2}\\right] \\\\\n&= 2\\left[\\frac{-4}{(e^t - e^{-t})^2}\\right] = \\frac{-8}{(e^t - e^{-t})^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}(\\frac{dy}{dx})}{\\frac{dx}{dt}} = \\frac{\\frac{-8}{(e^t - e^{-t})^2}}{e^t - e^{-t}} \\\\\n&= -\\frac{8}{(e^t - e^{-t})^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_param_vh_rat_3",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "very_hard",
    "statement": "A curve is given parametrically by $x = \\frac{t^2 - 3}{t^2 + 3}$ and $y = \\frac{ t}{t^2 + 3}$. Find $\\frac{dy}{dx}$ and express it in simplest factored form.",
    "answer": "\\frac{3 - t^2}{12t}",
    "steps": "\\begin{aligned}\nx &= \\frac{t^2 - 3}{t^2 + 3} \\\\\n\\frac{dx}{dt} &= \\frac{2t(t^2 + 3) - (t^2 - 3)(2t)}{(t^2 + 3)^2} \\\\\n&= \\frac{2t^3 + 6t - 2t^3 + 6t}{(t^2 + 3)^2} = \\frac{12t}{(t^2 + 3)^2} \\\\[10pt]\ny &= \\frac{t}{t^2 + 3} \\\\\n\\frac{dy}{dt} &= \\frac{1(t^2 + 3) - (t)(2t)}{(t^2 + 3)^2} \\\\\n&= \\frac{1t^2 + 3 - 2t^2}{(t^2 + 3)^2} = \\frac{3 - 1t^2}{(t^2 + 3)^2} = \\frac{1(3 - t^2)}{(t^2 + 3)^2} \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{\\frac{1(3 - t^2)}{(t^2 + 3)^2}}{\\frac{12t}{(t^2 + 3)^2}} \\\\\n&= \\frac{1(3 - t^2)}{12t} \\\\\n&= \\frac{3 - t^2}{12t} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_param_vh_sec_3",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "very_hard",
    "statement": "A curve is defined by $x = e^t + e^{-t}$ and $y = 5(e^t - e^{-t})$. Find the second derivative $\\frac{d^2y}{dx^2}$ in terms of $t$.",
    "answer": "-\\frac{20}{(e^t - e^{-t})^3}",
    "steps": "\\begin{aligned}\nx &= e^t + e^{-t} \\implies \\frac{dx}{dt} = e^t - e^{-t} \\\\\ny &= 5(e^t - e^{-t}) \\implies \\frac{dy}{dt} = 5(e^t + e^{-t}) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{5(e^t + e^{-t})}{e^t - e^{-t}} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= 5\\left[\\frac{(e^t - e^{-t})(e^t - e^{-t}) - (e^t + e^{-t})(e^t + e^{-t})}{(e^t - e^{-t})^2}\\right] \\\\\n&= 5\\left[\\frac{(e^{2t} - 2 + e^{-2t}) - (e^{2t} + 2 + e^{-2t})}{(e^t - e^{-t})^2}\\right] \\\\\n&= 5\\left[\\frac{-4}{(e^t - e^{-t})^2}\\right] = \\frac{-20}{(e^t - e^{-t})^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}(\\frac{dy}{dx})}{\\frac{dx}{dt}} = \\frac{\\frac{-20}{(e^t - e^{-t})^2}}{e^t - e^{-t}} \\\\\n&= -\\frac{20}{(e^t - e^{-t})^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_param_vh_rat_4",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "very_hard",
    "statement": "A curve is given parametrically by $x = \\frac{t^2 - 6}{t^2 + 6}$ and $y = \\frac{ t}{t^2 + 6}$. Find $\\frac{dy}{dx}$ and express it in simplest factored form.",
    "answer": "\\frac{6 - t^2}{24t}",
    "steps": "\\begin{aligned}\nx &= \\frac{t^2 - 6}{t^2 + 6} \\\\\n\\frac{dx}{dt} &= \\frac{2t(t^2 + 6) - (t^2 - 6)(2t)}{(t^2 + 6)^2} \\\\\n&= \\frac{2t^3 + 12t - 2t^3 + 12t}{(t^2 + 6)^2} = \\frac{24t}{(t^2 + 6)^2} \\\\[10pt]\ny &= \\frac{t}{t^2 + 6} \\\\\n\\frac{dy}{dt} &= \\frac{1(t^2 + 6) - (t)(2t)}{(t^2 + 6)^2} \\\\\n&= \\frac{1t^2 + 6 - 2t^2}{(t^2 + 6)^2} = \\frac{6 - 1t^2}{(t^2 + 6)^2} = \\frac{1(6 - t^2)}{(t^2 + 6)^2} \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{\\frac{1(6 - t^2)}{(t^2 + 6)^2}}{\\frac{24t}{(t^2 + 6)^2}} \\\\\n&= \\frac{1(6 - t^2)}{24t} \\\\\n&= \\frac{6 - t^2}{24t} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_param_vh_sec_4",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "very_hard",
    "statement": "A curve is defined by $x = e^t + e^{-t}$ and $y = 3(e^t - e^{-t})$. Find the second derivative $\\frac{d^2y}{dx^2}$ in terms of $t$.",
    "answer": "-\\frac{12}{(e^t - e^{-t})^3}",
    "steps": "\\begin{aligned}\nx &= e^t + e^{-t} \\implies \\frac{dx}{dt} = e^t - e^{-t} \\\\\ny &= 3(e^t - e^{-t}) \\implies \\frac{dy}{dt} = 3(e^t + e^{-t}) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{3(e^t + e^{-t})}{e^t - e^{-t}} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= 3\\left[\\frac{(e^t - e^{-t})(e^t - e^{-t}) - (e^t + e^{-t})(e^t + e^{-t})}{(e^t - e^{-t})^2}\\right] \\\\\n&= 3\\left[\\frac{(e^{2t} - 2 + e^{-2t}) - (e^{2t} + 2 + e^{-2t})}{(e^t - e^{-t})^2}\\right] \\\\\n&= 3\\left[\\frac{-4}{(e^t - e^{-t})^2}\\right] = \\frac{-12}{(e^t - e^{-t})^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}(\\frac{dy}{dx})}{\\frac{dx}{dt}} = \\frac{\\frac{-12}{(e^t - e^{-t})^2}}{e^t - e^{-t}} \\\\\n&= -\\frac{12}{(e^t - e^{-t})^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_param_vh_rat_5",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "very_hard",
    "statement": "A curve is given parametrically by $x = \\frac{t^2 - 7}{t^2 + 7}$ and $y = \\frac{4 t}{t^2 + 7}$. Find $\\frac{dy}{dx}$ and express it in simplest factored form.",
    "answer": "\\frac{4(7 - t^2)}{28t}",
    "steps": "\\begin{aligned}\nx &= \\frac{t^2 - 7}{t^2 + 7} \\\\\n\\frac{dx}{dt} &= \\frac{2t(t^2 + 7) - (t^2 - 7)(2t)}{(t^2 + 7)^2} \\\\\n&= \\frac{2t^3 + 14t - 2t^3 + 14t}{(t^2 + 7)^2} = \\frac{28t}{(t^2 + 7)^2} \\\\[10pt]\ny &= \\frac{4t}{t^2 + 7} \\\\\n\\frac{dy}{dt} &= \\frac{4(t^2 + 7) - (4t)(2t)}{(t^2 + 7)^2} \\\\\n&= \\frac{4t^2 + 28 - 8t^2}{(t^2 + 7)^2} = \\frac{28 - 4t^2}{(t^2 + 7)^2} = \\frac{4(7 - t^2)}{(t^2 + 7)^2} \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{\\frac{4(7 - t^2)}{(t^2 + 7)^2}}{\\frac{28t}{(t^2 + 7)^2}} \\\\\n&= \\frac{4(7 - t^2)}{28t} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_param_vh_sec_5",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "very_hard",
    "statement": "A curve is defined by $x = e^t + e^{-t}$ and $y = 4(e^t - e^{-t})$. Find the second derivative $\\frac{d^2y}{dx^2}$ in terms of $t$.",
    "answer": "-\\frac{16}{(e^t - e^{-t})^3}",
    "steps": "\\begin{aligned}\nx &= e^t + e^{-t} \\implies \\frac{dx}{dt} = e^t - e^{-t} \\\\\ny &= 4(e^t - e^{-t}) \\implies \\frac{dy}{dt} = 4(e^t + e^{-t}) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{4(e^t + e^{-t})}{e^t - e^{-t}} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= 4\\left[\\frac{(e^t - e^{-t})(e^t - e^{-t}) - (e^t + e^{-t})(e^t + e^{-t})}{(e^t - e^{-t})^2}\\right] \\\\\n&= 4\\left[\\frac{(e^{2t} - 2 + e^{-2t}) - (e^{2t} + 2 + e^{-2t})}{(e^t - e^{-t})^2}\\right] \\\\\n&= 4\\left[\\frac{-4}{(e^t - e^{-t})^2}\\right] = \\frac{-16}{(e^t - e^{-t})^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}(\\frac{dy}{dx})}{\\frac{dx}{dt}} = \\frac{\\frac{-16}{(e^t - e^{-t})^2}}{e^t - e^{-t}} \\\\\n&= -\\frac{16}{(e^t - e^{-t})^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_param_vh_rat_6",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "very_hard",
    "statement": "A curve is given parametrically by $x = \\frac{t^2 - 2}{t^2 + 2}$ and $y = \\frac{ t}{t^2 + 2}$. Find $\\frac{dy}{dx}$ and express it in simplest factored form.",
    "answer": "\\frac{2 - t^2}{8t}",
    "steps": "\\begin{aligned}\nx &= \\frac{t^2 - 2}{t^2 + 2} \\\\\n\\frac{dx}{dt} &= \\frac{2t(t^2 + 2) - (t^2 - 2)(2t)}{(t^2 + 2)^2} \\\\\n&= \\frac{2t^3 + 4t - 2t^3 + 4t}{(t^2 + 2)^2} = \\frac{8t}{(t^2 + 2)^2} \\\\[10pt]\ny &= \\frac{t}{t^2 + 2} \\\\\n\\frac{dy}{dt} &= \\frac{1(t^2 + 2) - (t)(2t)}{(t^2 + 2)^2} \\\\\n&= \\frac{1t^2 + 2 - 2t^2}{(t^2 + 2)^2} = \\frac{2 - 1t^2}{(t^2 + 2)^2} = \\frac{1(2 - t^2)}{(t^2 + 2)^2} \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{\\frac{1(2 - t^2)}{(t^2 + 2)^2}}{\\frac{8t}{(t^2 + 2)^2}} \\\\\n&= \\frac{1(2 - t^2)}{8t} \\\\\n&= \\frac{2 - t^2}{8t} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_param_vh_sec_6",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "very_hard",
    "statement": "A curve is defined by $x = e^t + e^{-t}$ and $y = 4(e^t - e^{-t})$. Find the second derivative $\\frac{d^2y}{dx^2}$ in terms of $t$.",
    "answer": "-\\frac{16}{(e^t - e^{-t})^3}",
    "steps": "\\begin{aligned}\nx &= e^t + e^{-t} \\implies \\frac{dx}{dt} = e^t - e^{-t} \\\\\ny &= 4(e^t - e^{-t}) \\implies \\frac{dy}{dt} = 4(e^t + e^{-t}) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{4(e^t + e^{-t})}{e^t - e^{-t}} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= 4\\left[\\frac{(e^t - e^{-t})(e^t - e^{-t}) - (e^t + e^{-t})(e^t + e^{-t})}{(e^t - e^{-t})^2}\\right] \\\\\n&= 4\\left[\\frac{(e^{2t} - 2 + e^{-2t}) - (e^{2t} + 2 + e^{-2t})}{(e^t - e^{-t})^2}\\right] \\\\\n&= 4\\left[\\frac{-4}{(e^t - e^{-t})^2}\\right] = \\frac{-16}{(e^t - e^{-t})^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}(\\frac{dy}{dx})}{\\frac{dx}{dt}} = \\frac{\\frac{-16}{(e^t - e^{-t})^2}}{e^t - e^{-t}} \\\\\n&= -\\frac{16}{(e^t - e^{-t})^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_param_vh_rat_7",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "very_hard",
    "statement": "A curve is given parametrically by $x = \\frac{t^2 - 2}{t^2 + 2}$ and $y = \\frac{3 t}{t^2 + 2}$. Find $\\frac{dy}{dx}$ and express it in simplest factored form.",
    "answer": "\\frac{3(2 - t^2)}{8t}",
    "steps": "\\begin{aligned}\nx &= \\frac{t^2 - 2}{t^2 + 2} \\\\\n\\frac{dx}{dt} &= \\frac{2t(t^2 + 2) - (t^2 - 2)(2t)}{(t^2 + 2)^2} \\\\\n&= \\frac{2t^3 + 4t - 2t^3 + 4t}{(t^2 + 2)^2} = \\frac{8t}{(t^2 + 2)^2} \\\\[10pt]\ny &= \\frac{3t}{t^2 + 2} \\\\\n\\frac{dy}{dt} &= \\frac{3(t^2 + 2) - (3t)(2t)}{(t^2 + 2)^2} \\\\\n&= \\frac{3t^2 + 6 - 6t^2}{(t^2 + 2)^2} = \\frac{6 - 3t^2}{(t^2 + 2)^2} = \\frac{3(2 - t^2)}{(t^2 + 2)^2} \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{\\frac{3(2 - t^2)}{(t^2 + 2)^2}}{\\frac{8t}{(t^2 + 2)^2}} \\\\\n&= \\frac{3(2 - t^2)}{8t} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_param_vh_sec_7",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "very_hard",
    "statement": "A curve is defined by $x = e^t + e^{-t}$ and $y = 4(e^t - e^{-t})$. Find the second derivative $\\frac{d^2y}{dx^2}$ in terms of $t$.",
    "answer": "-\\frac{16}{(e^t - e^{-t})^3}",
    "steps": "\\begin{aligned}\nx &= e^t + e^{-t} \\implies \\frac{dx}{dt} = e^t - e^{-t} \\\\\ny &= 4(e^t - e^{-t}) \\implies \\frac{dy}{dt} = 4(e^t + e^{-t}) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{4(e^t + e^{-t})}{e^t - e^{-t}} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= 4\\left[\\frac{(e^t - e^{-t})(e^t - e^{-t}) - (e^t + e^{-t})(e^t + e^{-t})}{(e^t - e^{-t})^2}\\right] \\\\\n&= 4\\left[\\frac{(e^{2t} - 2 + e^{-2t}) - (e^{2t} + 2 + e^{-2t})}{(e^t - e^{-t})^2}\\right] \\\\\n&= 4\\left[\\frac{-4}{(e^t - e^{-t})^2}\\right] = \\frac{-16}{(e^t - e^{-t})^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}(\\frac{dy}{dx})}{\\frac{dx}{dt}} = \\frac{\\frac{-16}{(e^t - e^{-t})^2}}{e^t - e^{-t}} \\\\\n&= -\\frac{16}{(e^t - e^{-t})^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_param_vh_rat_8",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "very_hard",
    "statement": "A curve is given parametrically by $x = \\frac{t^2 - 2}{t^2 + 2}$ and $y = \\frac{3 t}{t^2 + 2}$. Find $\\frac{dy}{dx}$ and express it in simplest factored form.",
    "answer": "\\frac{3(2 - t^2)}{8t}",
    "steps": "\\begin{aligned}\nx &= \\frac{t^2 - 2}{t^2 + 2} \\\\\n\\frac{dx}{dt} &= \\frac{2t(t^2 + 2) - (t^2 - 2)(2t)}{(t^2 + 2)^2} \\\\\n&= \\frac{2t^3 + 4t - 2t^3 + 4t}{(t^2 + 2)^2} = \\frac{8t}{(t^2 + 2)^2} \\\\[10pt]\ny &= \\frac{3t}{t^2 + 2} \\\\\n\\frac{dy}{dt} &= \\frac{3(t^2 + 2) - (3t)(2t)}{(t^2 + 2)^2} \\\\\n&= \\frac{3t^2 + 6 - 6t^2}{(t^2 + 2)^2} = \\frac{6 - 3t^2}{(t^2 + 2)^2} = \\frac{3(2 - t^2)}{(t^2 + 2)^2} \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{\\frac{3(2 - t^2)}{(t^2 + 2)^2}}{\\frac{8t}{(t^2 + 2)^2}} \\\\\n&= \\frac{3(2 - t^2)}{8t} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_param_vh_sec_8",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "very_hard",
    "statement": "A curve is defined by $x = e^t + e^{-t}$ and $y = 3(e^t - e^{-t})$. Find the second derivative $\\frac{d^2y}{dx^2}$ in terms of $t$.",
    "answer": "-\\frac{12}{(e^t - e^{-t})^3}",
    "steps": "\\begin{aligned}\nx &= e^t + e^{-t} \\implies \\frac{dx}{dt} = e^t - e^{-t} \\\\\ny &= 3(e^t - e^{-t}) \\implies \\frac{dy}{dt} = 3(e^t + e^{-t}) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{3(e^t + e^{-t})}{e^t - e^{-t}} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= 3\\left[\\frac{(e^t - e^{-t})(e^t - e^{-t}) - (e^t + e^{-t})(e^t + e^{-t})}{(e^t - e^{-t})^2}\\right] \\\\\n&= 3\\left[\\frac{(e^{2t} - 2 + e^{-2t}) - (e^{2t} + 2 + e^{-2t})}{(e^t - e^{-t})^2}\\right] \\\\\n&= 3\\left[\\frac{-4}{(e^t - e^{-t})^2}\\right] = \\frac{-12}{(e^t - e^{-t})^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}(\\frac{dy}{dx})}{\\frac{dx}{dt}} = \\frac{\\frac{-12}{(e^t - e^{-t})^2}}{e^t - e^{-t}} \\\\\n&= -\\frac{12}{(e^t - e^{-t})^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_param_vh_rat_9",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "very_hard",
    "statement": "A curve is given parametrically by $x = \\frac{t^2 - 4}{t^2 + 4}$ and $y = \\frac{3 t}{t^2 + 4}$. Find $\\frac{dy}{dx}$ and express it in simplest factored form.",
    "answer": "\\frac{3(4 - t^2)}{16t}",
    "steps": "\\begin{aligned}\nx &= \\frac{t^2 - 4}{t^2 + 4} \\\\\n\\frac{dx}{dt} &= \\frac{2t(t^2 + 4) - (t^2 - 4)(2t)}{(t^2 + 4)^2} \\\\\n&= \\frac{2t^3 + 8t - 2t^3 + 8t}{(t^2 + 4)^2} = \\frac{16t}{(t^2 + 4)^2} \\\\[10pt]\ny &= \\frac{3t}{t^2 + 4} \\\\\n\\frac{dy}{dt} &= \\frac{3(t^2 + 4) - (3t)(2t)}{(t^2 + 4)^2} \\\\\n&= \\frac{3t^2 + 12 - 6t^2}{(t^2 + 4)^2} = \\frac{12 - 3t^2}{(t^2 + 4)^2} = \\frac{3(4 - t^2)}{(t^2 + 4)^2} \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{\\frac{3(4 - t^2)}{(t^2 + 4)^2}}{\\frac{16t}{(t^2 + 4)^2}} \\\\\n&= \\frac{3(4 - t^2)}{16t} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_param_vh_sec_9",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "very_hard",
    "statement": "A curve is defined by $x = e^t + e^{-t}$ and $y = 3(e^t - e^{-t})$. Find the second derivative $\\frac{d^2y}{dx^2}$ in terms of $t$.",
    "answer": "-\\frac{12}{(e^t - e^{-t})^3}",
    "steps": "\\begin{aligned}\nx &= e^t + e^{-t} \\implies \\frac{dx}{dt} = e^t - e^{-t} \\\\\ny &= 3(e^t - e^{-t}) \\implies \\frac{dy}{dt} = 3(e^t + e^{-t}) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{3(e^t + e^{-t})}{e^t - e^{-t}} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= 3\\left[\\frac{(e^t - e^{-t})(e^t - e^{-t}) - (e^t + e^{-t})(e^t + e^{-t})}{(e^t - e^{-t})^2}\\right] \\\\\n&= 3\\left[\\frac{(e^{2t} - 2 + e^{-2t}) - (e^{2t} + 2 + e^{-2t})}{(e^t - e^{-t})^2}\\right] \\\\\n&= 3\\left[\\frac{-4}{(e^t - e^{-t})^2}\\right] = \\frac{-12}{(e^t - e^{-t})^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}(\\frac{dy}{dx})}{\\frac{dx}{dt}} = \\frac{\\frac{-12}{(e^t - e^{-t})^2}}{e^t - e^{-t}} \\\\\n&= -\\frac{12}{(e^t - e^{-t})^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_param_vh_rat_10",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "very_hard",
    "statement": "A curve is given parametrically by $x = \\frac{t^2 - 5}{t^2 + 5}$ and $y = \\frac{5 t}{t^2 + 5}$. Find $\\frac{dy}{dx}$ and express it in simplest factored form.",
    "answer": "\\frac{5 - t^2}{4t}",
    "steps": "\\begin{aligned}\nx &= \\frac{t^2 - 5}{t^2 + 5} \\\\\n\\frac{dx}{dt} &= \\frac{2t(t^2 + 5) - (t^2 - 5)(2t)}{(t^2 + 5)^2} \\\\\n&= \\frac{2t^3 + 10t - 2t^3 + 10t}{(t^2 + 5)^2} = \\frac{20t}{(t^2 + 5)^2} \\\\[10pt]\ny &= \\frac{5t}{t^2 + 5} \\\\\n\\frac{dy}{dt} &= \\frac{5(t^2 + 5) - (5t)(2t)}{(t^2 + 5)^2} \\\\\n&= \\frac{5t^2 + 25 - 10t^2}{(t^2 + 5)^2} = \\frac{25 - 5t^2}{(t^2 + 5)^2} = \\frac{5(5 - t^2)}{(t^2 + 5)^2} \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{\\frac{5(5 - t^2)}{(t^2 + 5)^2}}{\\frac{20t}{(t^2 + 5)^2}} \\\\\n&= \\frac{5(5 - t^2)}{20t} \\\\\n&= \\frac{5 - t^2}{4t} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_param_vh_sec_10",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "very_hard",
    "statement": "A curve is defined by $x = e^t + e^{-t}$ and $y = 3(e^t - e^{-t})$. Find the second derivative $\\frac{d^2y}{dx^2}$ in terms of $t$.",
    "answer": "-\\frac{12}{(e^t - e^{-t})^3}",
    "steps": "\\begin{aligned}\nx &= e^t + e^{-t} \\implies \\frac{dx}{dt} = e^t - e^{-t} \\\\\ny &= 3(e^t - e^{-t}) \\implies \\frac{dy}{dt} = 3(e^t + e^{-t}) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{3(e^t + e^{-t})}{e^t - e^{-t}} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= 3\\left[\\frac{(e^t - e^{-t})(e^t - e^{-t}) - (e^t + e^{-t})(e^t + e^{-t})}{(e^t - e^{-t})^2}\\right] \\\\\n&= 3\\left[\\frac{(e^{2t} - 2 + e^{-2t}) - (e^{2t} + 2 + e^{-2t})}{(e^t - e^{-t})^2}\\right] \\\\\n&= 3\\left[\\frac{-4}{(e^t - e^{-t})^2}\\right] = \\frac{-12}{(e^t - e^{-t})^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}(\\frac{dy}{dx})}{\\frac{dx}{dt}} = \\frac{\\frac{-12}{(e^t - e^{-t})^2}}{e^t - e^{-t}} \\\\\n&= -\\frac{12}{(e^t - e^{-t})^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_param_vh_rat_11",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "very_hard",
    "statement": "A curve is given parametrically by $x = \\frac{t^2 - 3}{t^2 + 3}$ and $y = \\frac{5 t}{t^2 + 3}$. Find $\\frac{dy}{dx}$ and express it in simplest factored form.",
    "answer": "\\frac{5(3 - t^2)}{12t}",
    "steps": "\\begin{aligned}\nx &= \\frac{t^2 - 3}{t^2 + 3} \\\\\n\\frac{dx}{dt} &= \\frac{2t(t^2 + 3) - (t^2 - 3)(2t)}{(t^2 + 3)^2} \\\\\n&= \\frac{2t^3 + 6t - 2t^3 + 6t}{(t^2 + 3)^2} = \\frac{12t}{(t^2 + 3)^2} \\\\[10pt]\ny &= \\frac{5t}{t^2 + 3} \\\\\n\\frac{dy}{dt} &= \\frac{5(t^2 + 3) - (5t)(2t)}{(t^2 + 3)^2} \\\\\n&= \\frac{5t^2 + 15 - 10t^2}{(t^2 + 3)^2} = \\frac{15 - 5t^2}{(t^2 + 3)^2} = \\frac{5(3 - t^2)}{(t^2 + 3)^2} \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{\\frac{5(3 - t^2)}{(t^2 + 3)^2}}{\\frac{12t}{(t^2 + 3)^2}} \\\\\n&= \\frac{5(3 - t^2)}{12t} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_param_vh_sec_11",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "very_hard",
    "statement": "A curve is defined by $x = e^t + e^{-t}$ and $y = 3(e^t - e^{-t})$. Find the second derivative $\\frac{d^2y}{dx^2}$ in terms of $t$.",
    "answer": "-\\frac{12}{(e^t - e^{-t})^3}",
    "steps": "\\begin{aligned}\nx &= e^t + e^{-t} \\implies \\frac{dx}{dt} = e^t - e^{-t} \\\\\ny &= 3(e^t - e^{-t}) \\implies \\frac{dy}{dt} = 3(e^t + e^{-t}) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{3(e^t + e^{-t})}{e^t - e^{-t}} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= 3\\left[\\frac{(e^t - e^{-t})(e^t - e^{-t}) - (e^t + e^{-t})(e^t + e^{-t})}{(e^t - e^{-t})^2}\\right] \\\\\n&= 3\\left[\\frac{(e^{2t} - 2 + e^{-2t}) - (e^{2t} + 2 + e^{-2t})}{(e^t - e^{-t})^2}\\right] \\\\\n&= 3\\left[\\frac{-4}{(e^t - e^{-t})^2}\\right] = \\frac{-12}{(e^t - e^{-t})^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}(\\frac{dy}{dx})}{\\frac{dx}{dt}} = \\frac{\\frac{-12}{(e^t - e^{-t})^2}}{e^t - e^{-t}} \\\\\n&= -\\frac{12}{(e^t - e^{-t})^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_param_vh_rat_12",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "very_hard",
    "statement": "A curve is given parametrically by $x = \\frac{t^2 - 4}{t^2 + 4}$ and $y = \\frac{5 t}{t^2 + 4}$. Find $\\frac{dy}{dx}$ and express it in simplest factored form.",
    "answer": "\\frac{5(4 - t^2)}{16t}",
    "steps": "\\begin{aligned}\nx &= \\frac{t^2 - 4}{t^2 + 4} \\\\\n\\frac{dx}{dt} &= \\frac{2t(t^2 + 4) - (t^2 - 4)(2t)}{(t^2 + 4)^2} \\\\\n&= \\frac{2t^3 + 8t - 2t^3 + 8t}{(t^2 + 4)^2} = \\frac{16t}{(t^2 + 4)^2} \\\\[10pt]\ny &= \\frac{5t}{t^2 + 4} \\\\\n\\frac{dy}{dt} &= \\frac{5(t^2 + 4) - (5t)(2t)}{(t^2 + 4)^2} \\\\\n&= \\frac{5t^2 + 20 - 10t^2}{(t^2 + 4)^2} = \\frac{20 - 5t^2}{(t^2 + 4)^2} = \\frac{5(4 - t^2)}{(t^2 + 4)^2} \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{\\frac{5(4 - t^2)}{(t^2 + 4)^2}}{\\frac{16t}{(t^2 + 4)^2}} \\\\\n&= \\frac{5(4 - t^2)}{16t} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_param_vh_sec_12",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "very_hard",
    "statement": "A curve is defined by $x = e^t + e^{-t}$ and $y = 5(e^t - e^{-t})$. Find the second derivative $\\frac{d^2y}{dx^2}$ in terms of $t$.",
    "answer": "-\\frac{20}{(e^t - e^{-t})^3}",
    "steps": "\\begin{aligned}\nx &= e^t + e^{-t} \\implies \\frac{dx}{dt} = e^t - e^{-t} \\\\\ny &= 5(e^t - e^{-t}) \\implies \\frac{dy}{dt} = 5(e^t + e^{-t}) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{5(e^t + e^{-t})}{e^t - e^{-t}} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= 5\\left[\\frac{(e^t - e^{-t})(e^t - e^{-t}) - (e^t + e^{-t})(e^t + e^{-t})}{(e^t - e^{-t})^2}\\right] \\\\\n&= 5\\left[\\frac{(e^{2t} - 2 + e^{-2t}) - (e^{2t} + 2 + e^{-2t})}{(e^t - e^{-t})^2}\\right] \\\\\n&= 5\\left[\\frac{-4}{(e^t - e^{-t})^2}\\right] = \\frac{-20}{(e^t - e^{-t})^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}(\\frac{dy}{dx})}{\\frac{dx}{dt}} = \\frac{\\frac{-20}{(e^t - e^{-t})^2}}{e^t - e^{-t}} \\\\\n&= -\\frac{20}{(e^t - e^{-t})^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_param_vh_rat_13",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "very_hard",
    "statement": "A curve is given parametrically by $x = \\frac{t^2 - 4}{t^2 + 4}$ and $y = \\frac{2 t}{t^2 + 4}$. Find $\\frac{dy}{dx}$ and express it in simplest factored form.",
    "answer": "\\frac{2(4 - t^2)}{16t}",
    "steps": "\\begin{aligned}\nx &= \\frac{t^2 - 4}{t^2 + 4} \\\\\n\\frac{dx}{dt} &= \\frac{2t(t^2 + 4) - (t^2 - 4)(2t)}{(t^2 + 4)^2} \\\\\n&= \\frac{2t^3 + 8t - 2t^3 + 8t}{(t^2 + 4)^2} = \\frac{16t}{(t^2 + 4)^2} \\\\[10pt]\ny &= \\frac{2t}{t^2 + 4} \\\\\n\\frac{dy}{dt} &= \\frac{2(t^2 + 4) - (2t)(2t)}{(t^2 + 4)^2} \\\\\n&= \\frac{2t^2 + 8 - 4t^2}{(t^2 + 4)^2} = \\frac{8 - 2t^2}{(t^2 + 4)^2} = \\frac{2(4 - t^2)}{(t^2 + 4)^2} \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{\\frac{2(4 - t^2)}{(t^2 + 4)^2}}{\\frac{16t}{(t^2 + 4)^2}} \\\\\n&= \\frac{2(4 - t^2)}{16t} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_param_vh_sec_13",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "very_hard",
    "statement": "A curve is defined by $x = e^t + e^{-t}$ and $y = 5(e^t - e^{-t})$. Find the second derivative $\\frac{d^2y}{dx^2}$ in terms of $t$.",
    "answer": "-\\frac{20}{(e^t - e^{-t})^3}",
    "steps": "\\begin{aligned}\nx &= e^t + e^{-t} \\implies \\frac{dx}{dt} = e^t - e^{-t} \\\\\ny &= 5(e^t - e^{-t}) \\implies \\frac{dy}{dt} = 5(e^t + e^{-t}) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{5(e^t + e^{-t})}{e^t - e^{-t}} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= 5\\left[\\frac{(e^t - e^{-t})(e^t - e^{-t}) - (e^t + e^{-t})(e^t + e^{-t})}{(e^t - e^{-t})^2}\\right] \\\\\n&= 5\\left[\\frac{(e^{2t} - 2 + e^{-2t}) - (e^{2t} + 2 + e^{-2t})}{(e^t - e^{-t})^2}\\right] \\\\\n&= 5\\left[\\frac{-4}{(e^t - e^{-t})^2}\\right] = \\frac{-20}{(e^t - e^{-t})^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}(\\frac{dy}{dx})}{\\frac{dx}{dt}} = \\frac{\\frac{-20}{(e^t - e^{-t})^2}}{e^t - e^{-t}} \\\\\n&= -\\frac{20}{(e^t - e^{-t})^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_param_vh_rat_14",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "very_hard",
    "statement": "A curve is given parametrically by $x = \\frac{t^2 - 4}{t^2 + 4}$ and $y = \\frac{3 t}{t^2 + 4}$. Find $\\frac{dy}{dx}$ and express it in simplest factored form.",
    "answer": "\\frac{3(4 - t^2)}{16t}",
    "steps": "\\begin{aligned}\nx &= \\frac{t^2 - 4}{t^2 + 4} \\\\\n\\frac{dx}{dt} &= \\frac{2t(t^2 + 4) - (t^2 - 4)(2t)}{(t^2 + 4)^2} \\\\\n&= \\frac{2t^3 + 8t - 2t^3 + 8t}{(t^2 + 4)^2} = \\frac{16t}{(t^2 + 4)^2} \\\\[10pt]\ny &= \\frac{3t}{t^2 + 4} \\\\\n\\frac{dy}{dt} &= \\frac{3(t^2 + 4) - (3t)(2t)}{(t^2 + 4)^2} \\\\\n&= \\frac{3t^2 + 12 - 6t^2}{(t^2 + 4)^2} = \\frac{12 - 3t^2}{(t^2 + 4)^2} = \\frac{3(4 - t^2)}{(t^2 + 4)^2} \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{\\frac{3(4 - t^2)}{(t^2 + 4)^2}}{\\frac{16t}{(t^2 + 4)^2}} \\\\\n&= \\frac{3(4 - t^2)}{16t} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_param_vh_sec_14",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "very_hard",
    "statement": "A curve is defined by $x = e^t + e^{-t}$ and $y = 4(e^t - e^{-t})$. Find the second derivative $\\frac{d^2y}{dx^2}$ in terms of $t$.",
    "answer": "-\\frac{16}{(e^t - e^{-t})^3}",
    "steps": "\\begin{aligned}\nx &= e^t + e^{-t} \\implies \\frac{dx}{dt} = e^t - e^{-t} \\\\\ny &= 4(e^t - e^{-t}) \\implies \\frac{dy}{dt} = 4(e^t + e^{-t}) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{4(e^t + e^{-t})}{e^t - e^{-t}} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= 4\\left[\\frac{(e^t - e^{-t})(e^t - e^{-t}) - (e^t + e^{-t})(e^t + e^{-t})}{(e^t - e^{-t})^2}\\right] \\\\\n&= 4\\left[\\frac{(e^{2t} - 2 + e^{-2t}) - (e^{2t} + 2 + e^{-2t})}{(e^t - e^{-t})^2}\\right] \\\\\n&= 4\\left[\\frac{-4}{(e^t - e^{-t})^2}\\right] = \\frac{-16}{(e^t - e^{-t})^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}(\\frac{dy}{dx})}{\\frac{dx}{dt}} = \\frac{\\frac{-16}{(e^t - e^{-t})^2}}{e^t - e^{-t}} \\\\\n&= -\\frac{16}{(e^t - e^{-t})^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_param_vh_rat_15",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "very_hard",
    "statement": "A curve is given parametrically by $x = \\frac{t^2 - 6}{t^2 + 6}$ and $y = \\frac{5 t}{t^2 + 6}$. Find $\\frac{dy}{dx}$ and express it in simplest factored form.",
    "answer": "\\frac{5(6 - t^2)}{24t}",
    "steps": "\\begin{aligned}\nx &= \\frac{t^2 - 6}{t^2 + 6} \\\\\n\\frac{dx}{dt} &= \\frac{2t(t^2 + 6) - (t^2 - 6)(2t)}{(t^2 + 6)^2} \\\\\n&= \\frac{2t^3 + 12t - 2t^3 + 12t}{(t^2 + 6)^2} = \\frac{24t}{(t^2 + 6)^2} \\\\[10pt]\ny &= \\frac{5t}{t^2 + 6} \\\\\n\\frac{dy}{dt} &= \\frac{5(t^2 + 6) - (5t)(2t)}{(t^2 + 6)^2} \\\\\n&= \\frac{5t^2 + 30 - 10t^2}{(t^2 + 6)^2} = \\frac{30 - 5t^2}{(t^2 + 6)^2} = \\frac{5(6 - t^2)}{(t^2 + 6)^2} \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{\\frac{5(6 - t^2)}{(t^2 + 6)^2}}{\\frac{24t}{(t^2 + 6)^2}} \\\\\n&= \\frac{5(6 - t^2)}{24t} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_param_vh_sec_15",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "very_hard",
    "statement": "A curve is defined by $x = e^t + e^{-t}$ and $y = 3(e^t - e^{-t})$. Find the second derivative $\\frac{d^2y}{dx^2}$ in terms of $t$.",
    "answer": "-\\frac{12}{(e^t - e^{-t})^3}",
    "steps": "\\begin{aligned}\nx &= e^t + e^{-t} \\implies \\frac{dx}{dt} = e^t - e^{-t} \\\\\ny &= 3(e^t - e^{-t}) \\implies \\frac{dy}{dt} = 3(e^t + e^{-t}) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{3(e^t + e^{-t})}{e^t - e^{-t}} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= 3\\left[\\frac{(e^t - e^{-t})(e^t - e^{-t}) - (e^t + e^{-t})(e^t + e^{-t})}{(e^t - e^{-t})^2}\\right] \\\\\n&= 3\\left[\\frac{(e^{2t} - 2 + e^{-2t}) - (e^{2t} + 2 + e^{-2t})}{(e^t - e^{-t})^2}\\right] \\\\\n&= 3\\left[\\frac{-4}{(e^t - e^{-t})^2}\\right] = \\frac{-12}{(e^t - e^{-t})^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}(\\frac{dy}{dx})}{\\frac{dx}{dt}} = \\frac{\\frac{-12}{(e^t - e^{-t})^2}}{e^t - e^{-t}} \\\\\n&= -\\frac{12}{(e^t - e^{-t})^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_param_vh_rat_16",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "very_hard",
    "statement": "A curve is given parametrically by $x = \\frac{t^2 - 7}{t^2 + 7}$ and $y = \\frac{4 t}{t^2 + 7}$. Find $\\frac{dy}{dx}$ and express it in simplest factored form.",
    "answer": "\\frac{4(7 - t^2)}{28t}",
    "steps": "\\begin{aligned}\nx &= \\frac{t^2 - 7}{t^2 + 7} \\\\\n\\frac{dx}{dt} &= \\frac{2t(t^2 + 7) - (t^2 - 7)(2t)}{(t^2 + 7)^2} \\\\\n&= \\frac{2t^3 + 14t - 2t^3 + 14t}{(t^2 + 7)^2} = \\frac{28t}{(t^2 + 7)^2} \\\\[10pt]\ny &= \\frac{4t}{t^2 + 7} \\\\\n\\frac{dy}{dt} &= \\frac{4(t^2 + 7) - (4t)(2t)}{(t^2 + 7)^2} \\\\\n&= \\frac{4t^2 + 28 - 8t^2}{(t^2 + 7)^2} = \\frac{28 - 4t^2}{(t^2 + 7)^2} = \\frac{4(7 - t^2)}{(t^2 + 7)^2} \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{\\frac{4(7 - t^2)}{(t^2 + 7)^2}}{\\frac{28t}{(t^2 + 7)^2}} \\\\\n&= \\frac{4(7 - t^2)}{28t} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_param_vh_sec_16",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "very_hard",
    "statement": "A curve is defined by $x = e^t + e^{-t}$ and $y = 3(e^t - e^{-t})$. Find the second derivative $\\frac{d^2y}{dx^2}$ in terms of $t$.",
    "answer": "-\\frac{12}{(e^t - e^{-t})^3}",
    "steps": "\\begin{aligned}\nx &= e^t + e^{-t} \\implies \\frac{dx}{dt} = e^t - e^{-t} \\\\\ny &= 3(e^t - e^{-t}) \\implies \\frac{dy}{dt} = 3(e^t + e^{-t}) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{3(e^t + e^{-t})}{e^t - e^{-t}} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= 3\\left[\\frac{(e^t - e^{-t})(e^t - e^{-t}) - (e^t + e^{-t})(e^t + e^{-t})}{(e^t - e^{-t})^2}\\right] \\\\\n&= 3\\left[\\frac{(e^{2t} - 2 + e^{-2t}) - (e^{2t} + 2 + e^{-2t})}{(e^t - e^{-t})^2}\\right] \\\\\n&= 3\\left[\\frac{-4}{(e^t - e^{-t})^2}\\right] = \\frac{-12}{(e^t - e^{-t})^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}(\\frac{dy}{dx})}{\\frac{dx}{dt}} = \\frac{\\frac{-12}{(e^t - e^{-t})^2}}{e^t - e^{-t}} \\\\\n&= -\\frac{12}{(e^t - e^{-t})^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_param_vh_rat_17",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "very_hard",
    "statement": "A curve is given parametrically by $x = \\frac{t^2 - 2}{t^2 + 2}$ and $y = \\frac{ t}{t^2 + 2}$. Find $\\frac{dy}{dx}$ and express it in simplest factored form.",
    "answer": "\\frac{2 - t^2}{8t}",
    "steps": "\\begin{aligned}\nx &= \\frac{t^2 - 2}{t^2 + 2} \\\\\n\\frac{dx}{dt} &= \\frac{2t(t^2 + 2) - (t^2 - 2)(2t)}{(t^2 + 2)^2} \\\\\n&= \\frac{2t^3 + 4t - 2t^3 + 4t}{(t^2 + 2)^2} = \\frac{8t}{(t^2 + 2)^2} \\\\[10pt]\ny &= \\frac{t}{t^2 + 2} \\\\\n\\frac{dy}{dt} &= \\frac{1(t^2 + 2) - (t)(2t)}{(t^2 + 2)^2} \\\\\n&= \\frac{1t^2 + 2 - 2t^2}{(t^2 + 2)^2} = \\frac{2 - 1t^2}{(t^2 + 2)^2} = \\frac{1(2 - t^2)}{(t^2 + 2)^2} \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{\\frac{1(2 - t^2)}{(t^2 + 2)^2}}{\\frac{8t}{(t^2 + 2)^2}} \\\\\n&= \\frac{1(2 - t^2)}{8t} \\\\\n&= \\frac{2 - t^2}{8t} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_param_vh_sec_17",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "very_hard",
    "statement": "A curve is defined by $x = e^t + e^{-t}$ and $y = 5(e^t - e^{-t})$. Find the second derivative $\\frac{d^2y}{dx^2}$ in terms of $t$.",
    "answer": "-\\frac{20}{(e^t - e^{-t})^3}",
    "steps": "\\begin{aligned}\nx &= e^t + e^{-t} \\implies \\frac{dx}{dt} = e^t - e^{-t} \\\\\ny &= 5(e^t - e^{-t}) \\implies \\frac{dy}{dt} = 5(e^t + e^{-t}) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{5(e^t + e^{-t})}{e^t - e^{-t}} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= 5\\left[\\frac{(e^t - e^{-t})(e^t - e^{-t}) - (e^t + e^{-t})(e^t + e^{-t})}{(e^t - e^{-t})^2}\\right] \\\\\n&= 5\\left[\\frac{(e^{2t} - 2 + e^{-2t}) - (e^{2t} + 2 + e^{-2t})}{(e^t - e^{-t})^2}\\right] \\\\\n&= 5\\left[\\frac{-4}{(e^t - e^{-t})^2}\\right] = \\frac{-20}{(e^t - e^{-t})^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}(\\frac{dy}{dx})}{\\frac{dx}{dt}} = \\frac{\\frac{-20}{(e^t - e^{-t})^2}}{e^t - e^{-t}} \\\\\n&= -\\frac{20}{(e^t - e^{-t})^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_param_vh_rat_18",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "very_hard",
    "statement": "A curve is given parametrically by $x = \\frac{t^2 - 5}{t^2 + 5}$ and $y = \\frac{ t}{t^2 + 5}$. Find $\\frac{dy}{dx}$ and express it in simplest factored form.",
    "answer": "\\frac{5 - t^2}{20t}",
    "steps": "\\begin{aligned}\nx &= \\frac{t^2 - 5}{t^2 + 5} \\\\\n\\frac{dx}{dt} &= \\frac{2t(t^2 + 5) - (t^2 - 5)(2t)}{(t^2 + 5)^2} \\\\\n&= \\frac{2t^3 + 10t - 2t^3 + 10t}{(t^2 + 5)^2} = \\frac{20t}{(t^2 + 5)^2} \\\\[10pt]\ny &= \\frac{t}{t^2 + 5} \\\\\n\\frac{dy}{dt} &= \\frac{1(t^2 + 5) - (t)(2t)}{(t^2 + 5)^2} \\\\\n&= \\frac{1t^2 + 5 - 2t^2}{(t^2 + 5)^2} = \\frac{5 - 1t^2}{(t^2 + 5)^2} = \\frac{1(5 - t^2)}{(t^2 + 5)^2} \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{\\frac{1(5 - t^2)}{(t^2 + 5)^2}}{\\frac{20t}{(t^2 + 5)^2}} \\\\\n&= \\frac{1(5 - t^2)}{20t} \\\\\n&= \\frac{5 - t^2}{20t} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_param_vh_sec_18",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "very_hard",
    "statement": "A curve is defined by $x = e^t + e^{-t}$ and $y = 3(e^t - e^{-t})$. Find the second derivative $\\frac{d^2y}{dx^2}$ in terms of $t$.",
    "answer": "-\\frac{12}{(e^t - e^{-t})^3}",
    "steps": "\\begin{aligned}\nx &= e^t + e^{-t} \\implies \\frac{dx}{dt} = e^t - e^{-t} \\\\\ny &= 3(e^t - e^{-t}) \\implies \\frac{dy}{dt} = 3(e^t + e^{-t}) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{3(e^t + e^{-t})}{e^t - e^{-t}} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= 3\\left[\\frac{(e^t - e^{-t})(e^t - e^{-t}) - (e^t + e^{-t})(e^t + e^{-t})}{(e^t - e^{-t})^2}\\right] \\\\\n&= 3\\left[\\frac{(e^{2t} - 2 + e^{-2t}) - (e^{2t} + 2 + e^{-2t})}{(e^t - e^{-t})^2}\\right] \\\\\n&= 3\\left[\\frac{-4}{(e^t - e^{-t})^2}\\right] = \\frac{-12}{(e^t - e^{-t})^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}(\\frac{dy}{dx})}{\\frac{dx}{dt}} = \\frac{\\frac{-12}{(e^t - e^{-t})^2}}{e^t - e^{-t}} \\\\\n&= -\\frac{12}{(e^t - e^{-t})^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_param_vh_rat_19",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "very_hard",
    "statement": "A curve is given parametrically by $x = \\frac{t^2 - 5}{t^2 + 5}$ and $y = \\frac{2 t}{t^2 + 5}$. Find $\\frac{dy}{dx}$ and express it in simplest factored form.",
    "answer": "\\frac{2(5 - t^2)}{20t}",
    "steps": "\\begin{aligned}\nx &= \\frac{t^2 - 5}{t^2 + 5} \\\\\n\\frac{dx}{dt} &= \\frac{2t(t^2 + 5) - (t^2 - 5)(2t)}{(t^2 + 5)^2} \\\\\n&= \\frac{2t^3 + 10t - 2t^3 + 10t}{(t^2 + 5)^2} = \\frac{20t}{(t^2 + 5)^2} \\\\[10pt]\ny &= \\frac{2t}{t^2 + 5} \\\\\n\\frac{dy}{dt} &= \\frac{2(t^2 + 5) - (2t)(2t)}{(t^2 + 5)^2} \\\\\n&= \\frac{2t^2 + 10 - 4t^2}{(t^2 + 5)^2} = \\frac{10 - 2t^2}{(t^2 + 5)^2} = \\frac{2(5 - t^2)}{(t^2 + 5)^2} \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{\\frac{2(5 - t^2)}{(t^2 + 5)^2}}{\\frac{20t}{(t^2 + 5)^2}} \\\\\n&= \\frac{2(5 - t^2)}{20t} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_param_vh_sec_19",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "very_hard",
    "statement": "A curve is defined by $x = e^t + e^{-t}$ and $y = 4(e^t - e^{-t})$. Find the second derivative $\\frac{d^2y}{dx^2}$ in terms of $t$.",
    "answer": "-\\frac{16}{(e^t - e^{-t})^3}",
    "steps": "\\begin{aligned}\nx &= e^t + e^{-t} \\implies \\frac{dx}{dt} = e^t - e^{-t} \\\\\ny &= 4(e^t - e^{-t}) \\implies \\frac{dy}{dt} = 4(e^t + e^{-t}) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{4(e^t + e^{-t})}{e^t - e^{-t}} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= 4\\left[\\frac{(e^t - e^{-t})(e^t - e^{-t}) - (e^t + e^{-t})(e^t + e^{-t})}{(e^t - e^{-t})^2}\\right] \\\\\n&= 4\\left[\\frac{(e^{2t} - 2 + e^{-2t}) - (e^{2t} + 2 + e^{-2t})}{(e^t - e^{-t})^2}\\right] \\\\\n&= 4\\left[\\frac{-4}{(e^t - e^{-t})^2}\\right] = \\frac{-16}{(e^t - e^{-t})^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}(\\frac{dy}{dx})}{\\frac{dx}{dt}} = \\frac{\\frac{-16}{(e^t - e^{-t})^2}}{e^t - e^{-t}} \\\\\n&= -\\frac{16}{(e^t - e^{-t})^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_param_vh_rat_20",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "very_hard",
    "statement": "A curve is given parametrically by $x = \\frac{t^2 - 6}{t^2 + 6}$ and $y = \\frac{2 t}{t^2 + 6}$. Find $\\frac{dy}{dx}$ and express it in simplest factored form.",
    "answer": "\\frac{2(6 - t^2)}{24t}",
    "steps": "\\begin{aligned}\nx &= \\frac{t^2 - 6}{t^2 + 6} \\\\\n\\frac{dx}{dt} &= \\frac{2t(t^2 + 6) - (t^2 - 6)(2t)}{(t^2 + 6)^2} \\\\\n&= \\frac{2t^3 + 12t - 2t^3 + 12t}{(t^2 + 6)^2} = \\frac{24t}{(t^2 + 6)^2} \\\\[10pt]\ny &= \\frac{2t}{t^2 + 6} \\\\\n\\frac{dy}{dt} &= \\frac{2(t^2 + 6) - (2t)(2t)}{(t^2 + 6)^2} \\\\\n&= \\frac{2t^2 + 12 - 4t^2}{(t^2 + 6)^2} = \\frac{12 - 2t^2}{(t^2 + 6)^2} = \\frac{2(6 - t^2)}{(t^2 + 6)^2} \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{\\frac{2(6 - t^2)}{(t^2 + 6)^2}}{\\frac{24t}{(t^2 + 6)^2}} \\\\\n&= \\frac{2(6 - t^2)}{24t} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_param_vh_sec_20",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "very_hard",
    "statement": "A curve is defined by $x = e^t + e^{-t}$ and $y = 5(e^t - e^{-t})$. Find the second derivative $\\frac{d^2y}{dx^2}$ in terms of $t$.",
    "answer": "-\\frac{20}{(e^t - e^{-t})^3}",
    "steps": "\\begin{aligned}\nx &= e^t + e^{-t} \\implies \\frac{dx}{dt} = e^t - e^{-t} \\\\\ny &= 5(e^t - e^{-t}) \\implies \\frac{dy}{dt} = 5(e^t + e^{-t}) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{5(e^t + e^{-t})}{e^t - e^{-t}} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= 5\\left[\\frac{(e^t - e^{-t})(e^t - e^{-t}) - (e^t + e^{-t})(e^t + e^{-t})}{(e^t - e^{-t})^2}\\right] \\\\\n&= 5\\left[\\frac{(e^{2t} - 2 + e^{-2t}) - (e^{2t} + 2 + e^{-2t})}{(e^t - e^{-t})^2}\\right] \\\\\n&= 5\\left[\\frac{-4}{(e^t - e^{-t})^2}\\right] = \\frac{-20}{(e^t - e^{-t})^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}(\\frac{dy}{dx})}{\\frac{dx}{dt}} = \\frac{\\frac{-20}{(e^t - e^{-t})^2}}{e^t - e^{-t}} \\\\\n&= -\\frac{20}{(e^t - e^{-t})^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_param_vh_rat_21",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "very_hard",
    "statement": "A curve is given parametrically by $x = \\frac{t^2 - 6}{t^2 + 6}$ and $y = \\frac{2 t}{t^2 + 6}$. Find $\\frac{dy}{dx}$ and express it in simplest factored form.",
    "answer": "\\frac{2(6 - t^2)}{24t}",
    "steps": "\\begin{aligned}\nx &= \\frac{t^2 - 6}{t^2 + 6} \\\\\n\\frac{dx}{dt} &= \\frac{2t(t^2 + 6) - (t^2 - 6)(2t)}{(t^2 + 6)^2} \\\\\n&= \\frac{2t^3 + 12t - 2t^3 + 12t}{(t^2 + 6)^2} = \\frac{24t}{(t^2 + 6)^2} \\\\[10pt]\ny &= \\frac{2t}{t^2 + 6} \\\\\n\\frac{dy}{dt} &= \\frac{2(t^2 + 6) - (2t)(2t)}{(t^2 + 6)^2} \\\\\n&= \\frac{2t^2 + 12 - 4t^2}{(t^2 + 6)^2} = \\frac{12 - 2t^2}{(t^2 + 6)^2} = \\frac{2(6 - t^2)}{(t^2 + 6)^2} \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{\\frac{2(6 - t^2)}{(t^2 + 6)^2}}{\\frac{24t}{(t^2 + 6)^2}} \\\\\n&= \\frac{2(6 - t^2)}{24t} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_param_vh_sec_21",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "very_hard",
    "statement": "A curve is defined by $x = e^t + e^{-t}$ and $y = 2(e^t - e^{-t})$. Find the second derivative $\\frac{d^2y}{dx^2}$ in terms of $t$.",
    "answer": "-\\frac{8}{(e^t - e^{-t})^3}",
    "steps": "\\begin{aligned}\nx &= e^t + e^{-t} \\implies \\frac{dx}{dt} = e^t - e^{-t} \\\\\ny &= 2(e^t - e^{-t}) \\implies \\frac{dy}{dt} = 2(e^t + e^{-t}) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{2(e^t + e^{-t})}{e^t - e^{-t}} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= 2\\left[\\frac{(e^t - e^{-t})(e^t - e^{-t}) - (e^t + e^{-t})(e^t + e^{-t})}{(e^t - e^{-t})^2}\\right] \\\\\n&= 2\\left[\\frac{(e^{2t} - 2 + e^{-2t}) - (e^{2t} + 2 + e^{-2t})}{(e^t - e^{-t})^2}\\right] \\\\\n&= 2\\left[\\frac{-4}{(e^t - e^{-t})^2}\\right] = \\frac{-8}{(e^t - e^{-t})^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}(\\frac{dy}{dx})}{\\frac{dx}{dt}} = \\frac{\\frac{-8}{(e^t - e^{-t})^2}}{e^t - e^{-t}} \\\\\n&= -\\frac{8}{(e^t - e^{-t})^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_param_vh_rat_22",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "very_hard",
    "statement": "A curve is given parametrically by $x = \\frac{t^2 - 5}{t^2 + 5}$ and $y = \\frac{ t}{t^2 + 5}$. Find $\\frac{dy}{dx}$ and express it in simplest factored form.",
    "answer": "\\frac{5 - t^2}{20t}",
    "steps": "\\begin{aligned}\nx &= \\frac{t^2 - 5}{t^2 + 5} \\\\\n\\frac{dx}{dt} &= \\frac{2t(t^2 + 5) - (t^2 - 5)(2t)}{(t^2 + 5)^2} \\\\\n&= \\frac{2t^3 + 10t - 2t^3 + 10t}{(t^2 + 5)^2} = \\frac{20t}{(t^2 + 5)^2} \\\\[10pt]\ny &= \\frac{t}{t^2 + 5} \\\\\n\\frac{dy}{dt} &= \\frac{1(t^2 + 5) - (t)(2t)}{(t^2 + 5)^2} \\\\\n&= \\frac{1t^2 + 5 - 2t^2}{(t^2 + 5)^2} = \\frac{5 - 1t^2}{(t^2 + 5)^2} = \\frac{1(5 - t^2)}{(t^2 + 5)^2} \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{\\frac{1(5 - t^2)}{(t^2 + 5)^2}}{\\frac{20t}{(t^2 + 5)^2}} \\\\\n&= \\frac{1(5 - t^2)}{20t} \\\\\n&= \\frac{5 - t^2}{20t} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_param_vh_sec_22",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "very_hard",
    "statement": "A curve is defined by $x = e^t + e^{-t}$ and $y = 4(e^t - e^{-t})$. Find the second derivative $\\frac{d^2y}{dx^2}$ in terms of $t$.",
    "answer": "-\\frac{16}{(e^t - e^{-t})^3}",
    "steps": "\\begin{aligned}\nx &= e^t + e^{-t} \\implies \\frac{dx}{dt} = e^t - e^{-t} \\\\\ny &= 4(e^t - e^{-t}) \\implies \\frac{dy}{dt} = 4(e^t + e^{-t}) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{4(e^t + e^{-t})}{e^t - e^{-t}} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= 4\\left[\\frac{(e^t - e^{-t})(e^t - e^{-t}) - (e^t + e^{-t})(e^t + e^{-t})}{(e^t - e^{-t})^2}\\right] \\\\\n&= 4\\left[\\frac{(e^{2t} - 2 + e^{-2t}) - (e^{2t} + 2 + e^{-2t})}{(e^t - e^{-t})^2}\\right] \\\\\n&= 4\\left[\\frac{-4}{(e^t - e^{-t})^2}\\right] = \\frac{-16}{(e^t - e^{-t})^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}(\\frac{dy}{dx})}{\\frac{dx}{dt}} = \\frac{\\frac{-16}{(e^t - e^{-t})^2}}{e^t - e^{-t}} \\\\\n&= -\\frac{16}{(e^t - e^{-t})^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_param_vh_rat_23",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "very_hard",
    "statement": "A curve is given parametrically by $x = \\frac{t^2 - 4}{t^2 + 4}$ and $y = \\frac{ t}{t^2 + 4}$. Find $\\frac{dy}{dx}$ and express it in simplest factored form.",
    "answer": "\\frac{4 - t^2}{16t}",
    "steps": "\\begin{aligned}\nx &= \\frac{t^2 - 4}{t^2 + 4} \\\\\n\\frac{dx}{dt} &= \\frac{2t(t^2 + 4) - (t^2 - 4)(2t)}{(t^2 + 4)^2} \\\\\n&= \\frac{2t^3 + 8t - 2t^3 + 8t}{(t^2 + 4)^2} = \\frac{16t}{(t^2 + 4)^2} \\\\[10pt]\ny &= \\frac{t}{t^2 + 4} \\\\\n\\frac{dy}{dt} &= \\frac{1(t^2 + 4) - (t)(2t)}{(t^2 + 4)^2} \\\\\n&= \\frac{1t^2 + 4 - 2t^2}{(t^2 + 4)^2} = \\frac{4 - 1t^2}{(t^2 + 4)^2} = \\frac{1(4 - t^2)}{(t^2 + 4)^2} \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{\\frac{1(4 - t^2)}{(t^2 + 4)^2}}{\\frac{16t}{(t^2 + 4)^2}} \\\\\n&= \\frac{1(4 - t^2)}{16t} \\\\\n&= \\frac{4 - t^2}{16t} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_param_vh_sec_23",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "very_hard",
    "statement": "A curve is defined by $x = e^t + e^{-t}$ and $y = 2(e^t - e^{-t})$. Find the second derivative $\\frac{d^2y}{dx^2}$ in terms of $t$.",
    "answer": "-\\frac{8}{(e^t - e^{-t})^3}",
    "steps": "\\begin{aligned}\nx &= e^t + e^{-t} \\implies \\frac{dx}{dt} = e^t - e^{-t} \\\\\ny &= 2(e^t - e^{-t}) \\implies \\frac{dy}{dt} = 2(e^t + e^{-t}) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{2(e^t + e^{-t})}{e^t - e^{-t}} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= 2\\left[\\frac{(e^t - e^{-t})(e^t - e^{-t}) - (e^t + e^{-t})(e^t + e^{-t})}{(e^t - e^{-t})^2}\\right] \\\\\n&= 2\\left[\\frac{(e^{2t} - 2 + e^{-2t}) - (e^{2t} + 2 + e^{-2t})}{(e^t - e^{-t})^2}\\right] \\\\\n&= 2\\left[\\frac{-4}{(e^t - e^{-t})^2}\\right] = \\frac{-8}{(e^t - e^{-t})^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}(\\frac{dy}{dx})}{\\frac{dx}{dt}} = \\frac{\\frac{-8}{(e^t - e^{-t})^2}}{e^t - e^{-t}} \\\\\n&= -\\frac{8}{(e^t - e^{-t})^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_param_vh_rat_24",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "very_hard",
    "statement": "A curve is given parametrically by $x = \\frac{t^2 - 6}{t^2 + 6}$ and $y = \\frac{5 t}{t^2 + 6}$. Find $\\frac{dy}{dx}$ and express it in simplest factored form.",
    "answer": "\\frac{5(6 - t^2)}{24t}",
    "steps": "\\begin{aligned}\nx &= \\frac{t^2 - 6}{t^2 + 6} \\\\\n\\frac{dx}{dt} &= \\frac{2t(t^2 + 6) - (t^2 - 6)(2t)}{(t^2 + 6)^2} \\\\\n&= \\frac{2t^3 + 12t - 2t^3 + 12t}{(t^2 + 6)^2} = \\frac{24t}{(t^2 + 6)^2} \\\\[10pt]\ny &= \\frac{5t}{t^2 + 6} \\\\\n\\frac{dy}{dt} &= \\frac{5(t^2 + 6) - (5t)(2t)}{(t^2 + 6)^2} \\\\\n&= \\frac{5t^2 + 30 - 10t^2}{(t^2 + 6)^2} = \\frac{30 - 5t^2}{(t^2 + 6)^2} = \\frac{5(6 - t^2)}{(t^2 + 6)^2} \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{\\frac{5(6 - t^2)}{(t^2 + 6)^2}}{\\frac{24t}{(t^2 + 6)^2}} \\\\\n&= \\frac{5(6 - t^2)}{24t} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_param_vh_sec_24",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "very_hard",
    "statement": "A curve is defined by $x = e^t + e^{-t}$ and $y = 3(e^t - e^{-t})$. Find the second derivative $\\frac{d^2y}{dx^2}$ in terms of $t$.",
    "answer": "-\\frac{12}{(e^t - e^{-t})^3}",
    "steps": "\\begin{aligned}\nx &= e^t + e^{-t} \\implies \\frac{dx}{dt} = e^t - e^{-t} \\\\\ny &= 3(e^t - e^{-t}) \\implies \\frac{dy}{dt} = 3(e^t + e^{-t}) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{3(e^t + e^{-t})}{e^t - e^{-t}} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= 3\\left[\\frac{(e^t - e^{-t})(e^t - e^{-t}) - (e^t + e^{-t})(e^t + e^{-t})}{(e^t - e^{-t})^2}\\right] \\\\\n&= 3\\left[\\frac{(e^{2t} - 2 + e^{-2t}) - (e^{2t} + 2 + e^{-2t})}{(e^t - e^{-t})^2}\\right] \\\\\n&= 3\\left[\\frac{-4}{(e^t - e^{-t})^2}\\right] = \\frac{-12}{(e^t - e^{-t})^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}(\\frac{dy}{dx})}{\\frac{dx}{dt}} = \\frac{\\frac{-12}{(e^t - e^{-t})^2}}{e^t - e^{-t}} \\\\\n&= -\\frac{12}{(e^t - e^{-t})^3} \\\\\n\\end{aligned}"
  }
];
