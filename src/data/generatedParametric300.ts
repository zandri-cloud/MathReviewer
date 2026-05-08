// Generates 300 unique hard parametric calculus problems (Second Derivs + Tangents/Normals)
export const generatedParametricProblems: any[] = [
  {
    "id": "gen_param_sec_poly_0",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 4t^2 + 1t$, $y = 3t^3 + 4t^2$.",
    "answer": "\\frac{72t^2 + 18t + 8}{(8t + 1)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 8t + 1, \\quad \\frac{dy}{dt} = 9t^2 + 8t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{9t^2 + 8t}{8t + 1} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(18t + 8)(8t + 1) - (9t^2 + 8t)(8)}{(8t + 1)^2} \\\\\n&= \\frac{144t^2 + 18t + 64t + 8 - 72t^2 - 64t}{(8t + 1)^2} \\\\\n&= \\frac{72t^2 + 18t + 8}{(8t + 1)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{72t^2 + 18t + 8}{(8t + 1)^2}}{8t + 1} \\\\\n&= \\frac{72t^2 + 18t + 8}{(8t + 1)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_0",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 6\\cos(3t)$ and $y = 6\\sin(3t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{1}{6}\\csc^3(3t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -18\\sin(3t), \\quad \\frac{dy}{dt} = 18\\cos(3t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{18\\cos(3t)}{-18\\sin(3t)} = -\\cot(3t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= - \\cdot (-\\csc^2(3t) \\cdot 3) = 3\\csc^2(3t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{3\\csc^2(3t)}{-18\\sin(3t)} = -\\frac{1}{6}\\csc^3(3t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_1",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 4t^2 + 4t$, $y = 4t^3 + 2t^2$.",
    "answer": "\\frac{96t^2 + 96t + 16}{(8t + 4)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 8t + 4, \\quad \\frac{dy}{dt} = 12t^2 + 4t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{12t^2 + 4t}{8t + 4} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(24t + 4)(8t + 4) - (12t^2 + 4t)(8)}{(8t + 4)^2} \\\\\n&= \\frac{192t^2 + 96t + 32t + 16 - 96t^2 - 32t}{(8t + 4)^2} \\\\\n&= \\frac{96t^2 + 96t + 16}{(8t + 4)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{96t^2 + 96t + 16}{(8t + 4)^2}}{8t + 4} \\\\\n&= \\frac{96t^2 + 96t + 16}{(8t + 4)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_1",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 3\\cos(2t)$ and $y = 4\\sin(2t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{4}{9}\\csc^3(2t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -6\\sin(2t), \\quad \\frac{dy}{dt} = 8\\cos(2t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{8\\cos(2t)}{-6\\sin(2t)} = -\\frac{4}{3}\\cot(2t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -\\frac{4}{3} \\cdot (-\\csc^2(2t) \\cdot 2) = \\frac{8}{3}\\csc^2(2t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{8}{3}\\csc^2(2t)}{-6\\sin(2t)} = -\\frac{4}{9}\\csc^3(2t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_2",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 3t^2 + 4t$, $y = 2t^3 + 4t^2$.",
    "answer": "\\frac{36t^2 + 48t + 32}{(6t + 4)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 6t + 4, \\quad \\frac{dy}{dt} = 6t^2 + 8t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{6t^2 + 8t}{6t + 4} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(12t + 8)(6t + 4) - (6t^2 + 8t)(6)}{(6t + 4)^2} \\\\\n&= \\frac{72t^2 + 48t + 48t + 32 - 36t^2 - 48t}{(6t + 4)^2} \\\\\n&= \\frac{36t^2 + 48t + 32}{(6t + 4)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{36t^2 + 48t + 32}{(6t + 4)^2}}{6t + 4} \\\\\n&= \\frac{36t^2 + 48t + 32}{(6t + 4)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_2",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 2\\cos(2t)$ and $y = 5\\sin(2t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{5}{4}\\csc^3(2t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -4\\sin(2t), \\quad \\frac{dy}{dt} = 10\\cos(2t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{10\\cos(2t)}{-4\\sin(2t)} = -\\frac{5}{2}\\cot(2t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -\\frac{5}{2} \\cdot (-\\csc^2(2t) \\cdot 2) = 5\\csc^2(2t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{5\\csc^2(2t)}{-4\\sin(2t)} = -\\frac{5}{4}\\csc^3(2t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_3",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 4t^2 + 1t$, $y = 2t^3 + 3t^2$.",
    "answer": "\\frac{48t^2 + 12t + 6}{(8t + 1)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 8t + 1, \\quad \\frac{dy}{dt} = 6t^2 + 6t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{6t^2 + 6t}{8t + 1} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(12t + 6)(8t + 1) - (6t^2 + 6t)(8)}{(8t + 1)^2} \\\\\n&= \\frac{96t^2 + 12t + 48t + 6 - 48t^2 - 48t}{(8t + 1)^2} \\\\\n&= \\frac{48t^2 + 12t + 6}{(8t + 1)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{48t^2 + 12t + 6}{(8t + 1)^2}}{8t + 1} \\\\\n&= \\frac{48t^2 + 12t + 6}{(8t + 1)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_3",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 4\\cos(2t)$ and $y = 2\\sin(2t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{1}{8}\\csc^3(2t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -8\\sin(2t), \\quad \\frac{dy}{dt} = 4\\cos(2t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{4\\cos(2t)}{-8\\sin(2t)} = -\\frac{1}{2}\\cot(2t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -\\frac{1}{2} \\cdot (-\\csc^2(2t) \\cdot 2) = \\csc^2(2t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\csc^2(2t)}{-8\\sin(2t)} = -\\frac{1}{8}\\csc^3(2t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_4",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 3t^2 + 3t$, $y = 3t^3 + 4t^2$.",
    "answer": "\\frac{54t^2 + 54t + 24}{(6t + 3)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 6t + 3, \\quad \\frac{dy}{dt} = 9t^2 + 8t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{9t^2 + 8t}{6t + 3} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(18t + 8)(6t + 3) - (9t^2 + 8t)(6)}{(6t + 3)^2} \\\\\n&= \\frac{108t^2 + 54t + 48t + 24 - 54t^2 - 48t}{(6t + 3)^2} \\\\\n&= \\frac{54t^2 + 54t + 24}{(6t + 3)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{54t^2 + 54t + 24}{(6t + 3)^2}}{6t + 3} \\\\\n&= \\frac{54t^2 + 54t + 24}{(6t + 3)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_4",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 4\\cos(4t)$ and $y = 3\\sin(4t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{3}{16}\\csc^3(4t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -16\\sin(4t), \\quad \\frac{dy}{dt} = 12\\cos(4t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{12\\cos(4t)}{-16\\sin(4t)} = -\\frac{3}{4}\\cot(4t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -\\frac{3}{4} \\cdot (-\\csc^2(4t) \\cdot 4) = 3\\csc^2(4t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{3\\csc^2(4t)}{-16\\sin(4t)} = -\\frac{3}{16}\\csc^3(4t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_5",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 4t^2 + 4t$, $y = 3t^3 + 1t^2$.",
    "answer": "\\frac{72t^2 + 72t + 8}{(8t + 4)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 8t + 4, \\quad \\frac{dy}{dt} = 9t^2 + 2t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{9t^2 + 2t}{8t + 4} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(18t + 2)(8t + 4) - (9t^2 + 2t)(8)}{(8t + 4)^2} \\\\\n&= \\frac{144t^2 + 72t + 16t + 8 - 72t^2 - 16t}{(8t + 4)^2} \\\\\n&= \\frac{72t^2 + 72t + 8}{(8t + 4)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{72t^2 + 72t + 8}{(8t + 4)^2}}{8t + 4} \\\\\n&= \\frac{72t^2 + 72t + 8}{(8t + 4)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_5",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 4\\cos(2t)$ and $y = 2\\sin(2t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{1}{8}\\csc^3(2t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -8\\sin(2t), \\quad \\frac{dy}{dt} = 4\\cos(2t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{4\\cos(2t)}{-8\\sin(2t)} = -\\frac{1}{2}\\cot(2t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -\\frac{1}{2} \\cdot (-\\csc^2(2t) \\cdot 2) = \\csc^2(2t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\csc^2(2t)}{-8\\sin(2t)} = -\\frac{1}{8}\\csc^3(2t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_6",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 1t^2 + 1t$, $y = 1t^3 + 3t^2$.",
    "answer": "\\frac{6t^2 + 6t + 6}{(2t + 1)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 2t + 1, \\quad \\frac{dy}{dt} = 3t^2 + 6t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{3t^2 + 6t}{2t + 1} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(6t + 6)(2t + 1) - (3t^2 + 6t)(2)}{(2t + 1)^2} \\\\\n&= \\frac{12t^2 + 6t + 12t + 6 - 6t^2 - 12t}{(2t + 1)^2} \\\\\n&= \\frac{6t^2 + 6t + 6}{(2t + 1)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{6t^2 + 6t + 6}{(2t + 1)^2}}{2t + 1} \\\\\n&= \\frac{6t^2 + 6t + 6}{(2t + 1)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_6",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 4\\cos(3t)$ and $y = 3\\sin(3t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{3}{16}\\csc^3(3t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -12\\sin(3t), \\quad \\frac{dy}{dt} = 9\\cos(3t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{9\\cos(3t)}{-12\\sin(3t)} = -\\frac{3}{4}\\cot(3t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -\\frac{3}{4} \\cdot (-\\csc^2(3t) \\cdot 3) = \\frac{9}{4}\\csc^2(3t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{9}{4}\\csc^2(3t)}{-12\\sin(3t)} = -\\frac{3}{16}\\csc^3(3t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_7",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 3t^2 + 3t$, $y = 4t^3 + 3t^2$.",
    "answer": "\\frac{72t^2 + 72t + 18}{(6t + 3)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 6t + 3, \\quad \\frac{dy}{dt} = 12t^2 + 6t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{12t^2 + 6t}{6t + 3} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(24t + 6)(6t + 3) - (12t^2 + 6t)(6)}{(6t + 3)^2} \\\\\n&= \\frac{144t^2 + 72t + 36t + 18 - 72t^2 - 36t}{(6t + 3)^2} \\\\\n&= \\frac{72t^2 + 72t + 18}{(6t + 3)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{72t^2 + 72t + 18}{(6t + 3)^2}}{6t + 3} \\\\\n&= \\frac{72t^2 + 72t + 18}{(6t + 3)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_7",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 2\\cos(3t)$ and $y = 3\\sin(3t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{3}{4}\\csc^3(3t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -6\\sin(3t), \\quad \\frac{dy}{dt} = 9\\cos(3t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{9\\cos(3t)}{-6\\sin(3t)} = -\\frac{3}{2}\\cot(3t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -\\frac{3}{2} \\cdot (-\\csc^2(3t) \\cdot 3) = \\frac{9}{2}\\csc^2(3t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{9}{2}\\csc^2(3t)}{-6\\sin(3t)} = -\\frac{3}{4}\\csc^3(3t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_8",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 2t^2 + 2t$, $y = 2t^3 + 3t^2$.",
    "answer": "\\frac{24t^2 + 24t + 12}{(4t + 2)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 4t + 2, \\quad \\frac{dy}{dt} = 6t^2 + 6t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{6t^2 + 6t}{4t + 2} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(12t + 6)(4t + 2) - (6t^2 + 6t)(4)}{(4t + 2)^2} \\\\\n&= \\frac{48t^2 + 24t + 24t + 12 - 24t^2 - 24t}{(4t + 2)^2} \\\\\n&= \\frac{24t^2 + 24t + 12}{(4t + 2)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{24t^2 + 24t + 12}{(4t + 2)^2}}{4t + 2} \\\\\n&= \\frac{24t^2 + 24t + 12}{(4t + 2)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_8",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 3\\cos(3t)$ and $y = 6\\sin(3t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{2}{3}\\csc^3(3t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -9\\sin(3t), \\quad \\frac{dy}{dt} = 18\\cos(3t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{18\\cos(3t)}{-9\\sin(3t)} = -2\\cot(3t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -2 \\cdot (-\\csc^2(3t) \\cdot 3) = 6\\csc^2(3t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{6\\csc^2(3t)}{-9\\sin(3t)} = -\\frac{2}{3}\\csc^3(3t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_9",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 3t^2 + 4t$, $y = 2t^3 + 2t^2$.",
    "answer": "\\frac{36t^2 + 48t + 16}{(6t + 4)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 6t + 4, \\quad \\frac{dy}{dt} = 6t^2 + 4t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{6t^2 + 4t}{6t + 4} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(12t + 4)(6t + 4) - (6t^2 + 4t)(6)}{(6t + 4)^2} \\\\\n&= \\frac{72t^2 + 48t + 24t + 16 - 36t^2 - 24t}{(6t + 4)^2} \\\\\n&= \\frac{36t^2 + 48t + 16}{(6t + 4)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{36t^2 + 48t + 16}{(6t + 4)^2}}{6t + 4} \\\\\n&= \\frac{36t^2 + 48t + 16}{(6t + 4)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_9",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 2\\cos(3t)$ and $y = 4\\sin(3t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\csc^3(3t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -6\\sin(3t), \\quad \\frac{dy}{dt} = 12\\cos(3t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{12\\cos(3t)}{-6\\sin(3t)} = -2\\cot(3t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -2 \\cdot (-\\csc^2(3t) \\cdot 3) = 6\\csc^2(3t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{6\\csc^2(3t)}{-6\\sin(3t)} = -\\csc^3(3t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_10",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 2t^2 + 4t$, $y = 4t^3 + 3t^2$.",
    "answer": "\\frac{48t^2 + 96t + 24}{(4t + 4)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 4t + 4, \\quad \\frac{dy}{dt} = 12t^2 + 6t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{12t^2 + 6t}{4t + 4} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(24t + 6)(4t + 4) - (12t^2 + 6t)(4)}{(4t + 4)^2} \\\\\n&= \\frac{96t^2 + 96t + 24t + 24 - 48t^2 - 24t}{(4t + 4)^2} \\\\\n&= \\frac{48t^2 + 96t + 24}{(4t + 4)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{48t^2 + 96t + 24}{(4t + 4)^2}}{4t + 4} \\\\\n&= \\frac{48t^2 + 96t + 24}{(4t + 4)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_10",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 5\\cos(2t)$ and $y = 5\\sin(2t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{1}{5}\\csc^3(2t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -10\\sin(2t), \\quad \\frac{dy}{dt} = 10\\cos(2t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{10\\cos(2t)}{-10\\sin(2t)} = -\\cot(2t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= - \\cdot (-\\csc^2(2t) \\cdot 2) = 2\\csc^2(2t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{2\\csc^2(2t)}{-10\\sin(2t)} = -\\frac{1}{5}\\csc^3(2t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_11",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 4t^2 + 1t$, $y = 3t^3 + 3t^2$.",
    "answer": "\\frac{72t^2 + 18t + 6}{(8t + 1)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 8t + 1, \\quad \\frac{dy}{dt} = 9t^2 + 6t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{9t^2 + 6t}{8t + 1} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(18t + 6)(8t + 1) - (9t^2 + 6t)(8)}{(8t + 1)^2} \\\\\n&= \\frac{144t^2 + 18t + 48t + 6 - 72t^2 - 48t}{(8t + 1)^2} \\\\\n&= \\frac{72t^2 + 18t + 6}{(8t + 1)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{72t^2 + 18t + 6}{(8t + 1)^2}}{8t + 1} \\\\\n&= \\frac{72t^2 + 18t + 6}{(8t + 1)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_11",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 4\\cos(4t)$ and $y = 2\\sin(4t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{1}{8}\\csc^3(4t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -16\\sin(4t), \\quad \\frac{dy}{dt} = 8\\cos(4t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{8\\cos(4t)}{-16\\sin(4t)} = -\\frac{1}{2}\\cot(4t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -\\frac{1}{2} \\cdot (-\\csc^2(4t) \\cdot 4) = 2\\csc^2(4t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{2\\csc^2(4t)}{-16\\sin(4t)} = -\\frac{1}{8}\\csc^3(4t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_12",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 3t^2 + 4t$, $y = 2t^3 + 4t^2$.",
    "answer": "\\frac{36t^2 + 48t + 32}{(6t + 4)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 6t + 4, \\quad \\frac{dy}{dt} = 6t^2 + 8t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{6t^2 + 8t}{6t + 4} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(12t + 8)(6t + 4) - (6t^2 + 8t)(6)}{(6t + 4)^2} \\\\\n&= \\frac{72t^2 + 48t + 48t + 32 - 36t^2 - 48t}{(6t + 4)^2} \\\\\n&= \\frac{36t^2 + 48t + 32}{(6t + 4)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{36t^2 + 48t + 32}{(6t + 4)^2}}{6t + 4} \\\\\n&= \\frac{36t^2 + 48t + 32}{(6t + 4)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_12",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 2\\cos(2t)$ and $y = 6\\sin(2t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{3}{2}\\csc^3(2t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -4\\sin(2t), \\quad \\frac{dy}{dt} = 12\\cos(2t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{12\\cos(2t)}{-4\\sin(2t)} = -3\\cot(2t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -3 \\cdot (-\\csc^2(2t) \\cdot 2) = 6\\csc^2(2t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{6\\csc^2(2t)}{-4\\sin(2t)} = -\\frac{3}{2}\\csc^3(2t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_13",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 3t^2 + 1t$, $y = 1t^3 + 4t^2$.",
    "answer": "\\frac{18t^2 + 6t + 8}{(6t + 1)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 6t + 1, \\quad \\frac{dy}{dt} = 3t^2 + 8t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{3t^2 + 8t}{6t + 1} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(6t + 8)(6t + 1) - (3t^2 + 8t)(6)}{(6t + 1)^2} \\\\\n&= \\frac{36t^2 + 6t + 48t + 8 - 18t^2 - 48t}{(6t + 1)^2} \\\\\n&= \\frac{18t^2 + 6t + 8}{(6t + 1)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{18t^2 + 6t + 8}{(6t + 1)^2}}{6t + 1} \\\\\n&= \\frac{18t^2 + 6t + 8}{(6t + 1)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_13",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 5\\cos(4t)$ and $y = 4\\sin(4t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{4}{25}\\csc^3(4t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -20\\sin(4t), \\quad \\frac{dy}{dt} = 16\\cos(4t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{16\\cos(4t)}{-20\\sin(4t)} = -\\frac{4}{5}\\cot(4t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -\\frac{4}{5} \\cdot (-\\csc^2(4t) \\cdot 4) = \\frac{16}{5}\\csc^2(4t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{16}{5}\\csc^2(4t)}{-20\\sin(4t)} = -\\frac{4}{25}\\csc^3(4t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_14",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 1t^2 + 4t$, $y = 2t^3 + 3t^2$.",
    "answer": "\\frac{12t^2 + 48t + 24}{(2t + 4)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 2t + 4, \\quad \\frac{dy}{dt} = 6t^2 + 6t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{6t^2 + 6t}{2t + 4} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(12t + 6)(2t + 4) - (6t^2 + 6t)(2)}{(2t + 4)^2} \\\\\n&= \\frac{24t^2 + 48t + 12t + 24 - 12t^2 - 12t}{(2t + 4)^2} \\\\\n&= \\frac{12t^2 + 48t + 24}{(2t + 4)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{12t^2 + 48t + 24}{(2t + 4)^2}}{2t + 4} \\\\\n&= \\frac{12t^2 + 48t + 24}{(2t + 4)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_14",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 2\\cos(3t)$ and $y = 4\\sin(3t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\csc^3(3t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -6\\sin(3t), \\quad \\frac{dy}{dt} = 12\\cos(3t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{12\\cos(3t)}{-6\\sin(3t)} = -2\\cot(3t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -2 \\cdot (-\\csc^2(3t) \\cdot 3) = 6\\csc^2(3t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{6\\csc^2(3t)}{-6\\sin(3t)} = -\\csc^3(3t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_15",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 1t^2 + 3t$, $y = 3t^3 + 4t^2$.",
    "answer": "\\frac{18t^2 + 54t + 24}{(2t + 3)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 2t + 3, \\quad \\frac{dy}{dt} = 9t^2 + 8t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{9t^2 + 8t}{2t + 3} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(18t + 8)(2t + 3) - (9t^2 + 8t)(2)}{(2t + 3)^2} \\\\\n&= \\frac{36t^2 + 54t + 16t + 24 - 18t^2 - 16t}{(2t + 3)^2} \\\\\n&= \\frac{18t^2 + 54t + 24}{(2t + 3)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{18t^2 + 54t + 24}{(2t + 3)^2}}{2t + 3} \\\\\n&= \\frac{18t^2 + 54t + 24}{(2t + 3)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_15",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 4\\cos(3t)$ and $y = 3\\sin(3t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{3}{16}\\csc^3(3t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -12\\sin(3t), \\quad \\frac{dy}{dt} = 9\\cos(3t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{9\\cos(3t)}{-12\\sin(3t)} = -\\frac{3}{4}\\cot(3t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -\\frac{3}{4} \\cdot (-\\csc^2(3t) \\cdot 3) = \\frac{9}{4}\\csc^2(3t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{9}{4}\\csc^2(3t)}{-12\\sin(3t)} = -\\frac{3}{16}\\csc^3(3t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_16",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 4t^2 + 2t$, $y = 2t^3 + 2t^2$.",
    "answer": "\\frac{48t^2 + 24t + 8}{(8t + 2)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 8t + 2, \\quad \\frac{dy}{dt} = 6t^2 + 4t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{6t^2 + 4t}{8t + 2} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(12t + 4)(8t + 2) - (6t^2 + 4t)(8)}{(8t + 2)^2} \\\\\n&= \\frac{96t^2 + 24t + 32t + 8 - 48t^2 - 32t}{(8t + 2)^2} \\\\\n&= \\frac{48t^2 + 24t + 8}{(8t + 2)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{48t^2 + 24t + 8}{(8t + 2)^2}}{8t + 2} \\\\\n&= \\frac{48t^2 + 24t + 8}{(8t + 2)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_16",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 4\\cos(2t)$ and $y = 4\\sin(2t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{1}{4}\\csc^3(2t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -8\\sin(2t), \\quad \\frac{dy}{dt} = 8\\cos(2t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{8\\cos(2t)}{-8\\sin(2t)} = -\\cot(2t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= - \\cdot (-\\csc^2(2t) \\cdot 2) = 2\\csc^2(2t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{2\\csc^2(2t)}{-8\\sin(2t)} = -\\frac{1}{4}\\csc^3(2t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_17",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 4t^2 + 2t$, $y = 3t^3 + 4t^2$.",
    "answer": "\\frac{72t^2 + 36t + 16}{(8t + 2)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 8t + 2, \\quad \\frac{dy}{dt} = 9t^2 + 8t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{9t^2 + 8t}{8t + 2} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(18t + 8)(8t + 2) - (9t^2 + 8t)(8)}{(8t + 2)^2} \\\\\n&= \\frac{144t^2 + 36t + 64t + 16 - 72t^2 - 64t}{(8t + 2)^2} \\\\\n&= \\frac{72t^2 + 36t + 16}{(8t + 2)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{72t^2 + 36t + 16}{(8t + 2)^2}}{8t + 2} \\\\\n&= \\frac{72t^2 + 36t + 16}{(8t + 2)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_17",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 5\\cos(3t)$ and $y = 5\\sin(3t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{1}{5}\\csc^3(3t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -15\\sin(3t), \\quad \\frac{dy}{dt} = 15\\cos(3t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{15\\cos(3t)}{-15\\sin(3t)} = -\\cot(3t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= - \\cdot (-\\csc^2(3t) \\cdot 3) = 3\\csc^2(3t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{3\\csc^2(3t)}{-15\\sin(3t)} = -\\frac{1}{5}\\csc^3(3t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_18",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 3t^2 + 4t$, $y = 2t^3 + 3t^2$.",
    "answer": "\\frac{36t^2 + 48t + 24}{(6t + 4)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 6t + 4, \\quad \\frac{dy}{dt} = 6t^2 + 6t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{6t^2 + 6t}{6t + 4} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(12t + 6)(6t + 4) - (6t^2 + 6t)(6)}{(6t + 4)^2} \\\\\n&= \\frac{72t^2 + 48t + 36t + 24 - 36t^2 - 36t}{(6t + 4)^2} \\\\\n&= \\frac{36t^2 + 48t + 24}{(6t + 4)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{36t^2 + 48t + 24}{(6t + 4)^2}}{6t + 4} \\\\\n&= \\frac{36t^2 + 48t + 24}{(6t + 4)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_18",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 6\\cos(2t)$ and $y = 4\\sin(2t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{1}{9}\\csc^3(2t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -12\\sin(2t), \\quad \\frac{dy}{dt} = 8\\cos(2t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{8\\cos(2t)}{-12\\sin(2t)} = -\\frac{2}{3}\\cot(2t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -\\frac{2}{3} \\cdot (-\\csc^2(2t) \\cdot 2) = \\frac{4}{3}\\csc^2(2t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{4}{3}\\csc^2(2t)}{-12\\sin(2t)} = -\\frac{1}{9}\\csc^3(2t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_19",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 1t^2 + 4t$, $y = 3t^3 + 3t^2$.",
    "answer": "\\frac{18t^2 + 72t + 24}{(2t + 4)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 2t + 4, \\quad \\frac{dy}{dt} = 9t^2 + 6t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{9t^2 + 6t}{2t + 4} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(18t + 6)(2t + 4) - (9t^2 + 6t)(2)}{(2t + 4)^2} \\\\\n&= \\frac{36t^2 + 72t + 12t + 24 - 18t^2 - 12t}{(2t + 4)^2} \\\\\n&= \\frac{18t^2 + 72t + 24}{(2t + 4)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{18t^2 + 72t + 24}{(2t + 4)^2}}{2t + 4} \\\\\n&= \\frac{18t^2 + 72t + 24}{(2t + 4)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_19",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 6\\cos(3t)$ and $y = 2\\sin(3t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{1}{18}\\csc^3(3t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -18\\sin(3t), \\quad \\frac{dy}{dt} = 6\\cos(3t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{6\\cos(3t)}{-18\\sin(3t)} = -\\frac{1}{3}\\cot(3t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -\\frac{1}{3} \\cdot (-\\csc^2(3t) \\cdot 3) = \\csc^2(3t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\csc^2(3t)}{-18\\sin(3t)} = -\\frac{1}{18}\\csc^3(3t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_20",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 1t^2 + 4t$, $y = 1t^3 + 2t^2$.",
    "answer": "\\frac{6t^2 + 24t + 16}{(2t + 4)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 2t + 4, \\quad \\frac{dy}{dt} = 3t^2 + 4t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{3t^2 + 4t}{2t + 4} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(6t + 4)(2t + 4) - (3t^2 + 4t)(2)}{(2t + 4)^2} \\\\\n&= \\frac{12t^2 + 24t + 8t + 16 - 6t^2 - 8t}{(2t + 4)^2} \\\\\n&= \\frac{6t^2 + 24t + 16}{(2t + 4)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{6t^2 + 24t + 16}{(2t + 4)^2}}{2t + 4} \\\\\n&= \\frac{6t^2 + 24t + 16}{(2t + 4)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_20",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 4\\cos(2t)$ and $y = 5\\sin(2t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{5}{16}\\csc^3(2t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -8\\sin(2t), \\quad \\frac{dy}{dt} = 10\\cos(2t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{10\\cos(2t)}{-8\\sin(2t)} = -\\frac{5}{4}\\cot(2t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -\\frac{5}{4} \\cdot (-\\csc^2(2t) \\cdot 2) = \\frac{5}{2}\\csc^2(2t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{5}{2}\\csc^2(2t)}{-8\\sin(2t)} = -\\frac{5}{16}\\csc^3(2t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_21",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 3t^2 + 2t$, $y = 1t^3 + 3t^2$.",
    "answer": "\\frac{18t^2 + 12t + 12}{(6t + 2)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 6t + 2, \\quad \\frac{dy}{dt} = 3t^2 + 6t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{3t^2 + 6t}{6t + 2} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(6t + 6)(6t + 2) - (3t^2 + 6t)(6)}{(6t + 2)^2} \\\\\n&= \\frac{36t^2 + 12t + 36t + 12 - 18t^2 - 36t}{(6t + 2)^2} \\\\\n&= \\frac{18t^2 + 12t + 12}{(6t + 2)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{18t^2 + 12t + 12}{(6t + 2)^2}}{6t + 2} \\\\\n&= \\frac{18t^2 + 12t + 12}{(6t + 2)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_21",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 2\\cos(2t)$ and $y = 6\\sin(2t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{3}{2}\\csc^3(2t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -4\\sin(2t), \\quad \\frac{dy}{dt} = 12\\cos(2t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{12\\cos(2t)}{-4\\sin(2t)} = -3\\cot(2t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -3 \\cdot (-\\csc^2(2t) \\cdot 2) = 6\\csc^2(2t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{6\\csc^2(2t)}{-4\\sin(2t)} = -\\frac{3}{2}\\csc^3(2t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_22",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 3t^2 + 1t$, $y = 1t^3 + 2t^2$.",
    "answer": "\\frac{18t^2 + 6t + 4}{(6t + 1)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 6t + 1, \\quad \\frac{dy}{dt} = 3t^2 + 4t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{3t^2 + 4t}{6t + 1} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(6t + 4)(6t + 1) - (3t^2 + 4t)(6)}{(6t + 1)^2} \\\\\n&= \\frac{36t^2 + 6t + 24t + 4 - 18t^2 - 24t}{(6t + 1)^2} \\\\\n&= \\frac{18t^2 + 6t + 4}{(6t + 1)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{18t^2 + 6t + 4}{(6t + 1)^2}}{6t + 1} \\\\\n&= \\frac{18t^2 + 6t + 4}{(6t + 1)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_22",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 6\\cos(3t)$ and $y = 5\\sin(3t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{5}{36}\\csc^3(3t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -18\\sin(3t), \\quad \\frac{dy}{dt} = 15\\cos(3t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{15\\cos(3t)}{-18\\sin(3t)} = -\\frac{5}{6}\\cot(3t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -\\frac{5}{6} \\cdot (-\\csc^2(3t) \\cdot 3) = \\frac{5}{2}\\csc^2(3t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{5}{2}\\csc^2(3t)}{-18\\sin(3t)} = -\\frac{5}{36}\\csc^3(3t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_23",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 2t^2 + 3t$, $y = 4t^3 + 3t^2$.",
    "answer": "\\frac{48t^2 + 72t + 18}{(4t + 3)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 4t + 3, \\quad \\frac{dy}{dt} = 12t^2 + 6t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{12t^2 + 6t}{4t + 3} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(24t + 6)(4t + 3) - (12t^2 + 6t)(4)}{(4t + 3)^2} \\\\\n&= \\frac{96t^2 + 72t + 24t + 18 - 48t^2 - 24t}{(4t + 3)^2} \\\\\n&= \\frac{48t^2 + 72t + 18}{(4t + 3)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{48t^2 + 72t + 18}{(4t + 3)^2}}{4t + 3} \\\\\n&= \\frac{48t^2 + 72t + 18}{(4t + 3)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_23",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 4\\cos(2t)$ and $y = 5\\sin(2t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{5}{16}\\csc^3(2t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -8\\sin(2t), \\quad \\frac{dy}{dt} = 10\\cos(2t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{10\\cos(2t)}{-8\\sin(2t)} = -\\frac{5}{4}\\cot(2t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -\\frac{5}{4} \\cdot (-\\csc^2(2t) \\cdot 2) = \\frac{5}{2}\\csc^2(2t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{5}{2}\\csc^2(2t)}{-8\\sin(2t)} = -\\frac{5}{16}\\csc^3(2t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_24",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 1t^2 + 3t$, $y = 2t^3 + 3t^2$.",
    "answer": "\\frac{12t^2 + 36t + 18}{(2t + 3)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 2t + 3, \\quad \\frac{dy}{dt} = 6t^2 + 6t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{6t^2 + 6t}{2t + 3} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(12t + 6)(2t + 3) - (6t^2 + 6t)(2)}{(2t + 3)^2} \\\\\n&= \\frac{24t^2 + 36t + 12t + 18 - 12t^2 - 12t}{(2t + 3)^2} \\\\\n&= \\frac{12t^2 + 36t + 18}{(2t + 3)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{12t^2 + 36t + 18}{(2t + 3)^2}}{2t + 3} \\\\\n&= \\frac{12t^2 + 36t + 18}{(2t + 3)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_24",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 2\\cos(3t)$ and $y = 3\\sin(3t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{3}{4}\\csc^3(3t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -6\\sin(3t), \\quad \\frac{dy}{dt} = 9\\cos(3t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{9\\cos(3t)}{-6\\sin(3t)} = -\\frac{3}{2}\\cot(3t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -\\frac{3}{2} \\cdot (-\\csc^2(3t) \\cdot 3) = \\frac{9}{2}\\csc^2(3t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{9}{2}\\csc^2(3t)}{-6\\sin(3t)} = -\\frac{3}{4}\\csc^3(3t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_25",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 4t^2 + 3t$, $y = 4t^3 + 3t^2$.",
    "answer": "\\frac{96t^2 + 72t + 18}{(8t + 3)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 8t + 3, \\quad \\frac{dy}{dt} = 12t^2 + 6t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{12t^2 + 6t}{8t + 3} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(24t + 6)(8t + 3) - (12t^2 + 6t)(8)}{(8t + 3)^2} \\\\\n&= \\frac{192t^2 + 72t + 48t + 18 - 96t^2 - 48t}{(8t + 3)^2} \\\\\n&= \\frac{96t^2 + 72t + 18}{(8t + 3)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{96t^2 + 72t + 18}{(8t + 3)^2}}{8t + 3} \\\\\n&= \\frac{96t^2 + 72t + 18}{(8t + 3)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_25",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 2\\cos(4t)$ and $y = 4\\sin(4t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\csc^3(4t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -8\\sin(4t), \\quad \\frac{dy}{dt} = 16\\cos(4t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{16\\cos(4t)}{-8\\sin(4t)} = -2\\cot(4t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -2 \\cdot (-\\csc^2(4t) \\cdot 4) = 8\\csc^2(4t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{8\\csc^2(4t)}{-8\\sin(4t)} = -\\csc^3(4t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_26",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 1t^2 + 2t$, $y = 4t^3 + 3t^2$.",
    "answer": "\\frac{24t^2 + 48t + 12}{(2t + 2)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 2t + 2, \\quad \\frac{dy}{dt} = 12t^2 + 6t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{12t^2 + 6t}{2t + 2} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(24t + 6)(2t + 2) - (12t^2 + 6t)(2)}{(2t + 2)^2} \\\\\n&= \\frac{48t^2 + 48t + 12t + 12 - 24t^2 - 12t}{(2t + 2)^2} \\\\\n&= \\frac{24t^2 + 48t + 12}{(2t + 2)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{24t^2 + 48t + 12}{(2t + 2)^2}}{2t + 2} \\\\\n&= \\frac{24t^2 + 48t + 12}{(2t + 2)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_26",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 4\\cos(2t)$ and $y = 4\\sin(2t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{1}{4}\\csc^3(2t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -8\\sin(2t), \\quad \\frac{dy}{dt} = 8\\cos(2t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{8\\cos(2t)}{-8\\sin(2t)} = -\\cot(2t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= - \\cdot (-\\csc^2(2t) \\cdot 2) = 2\\csc^2(2t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{2\\csc^2(2t)}{-8\\sin(2t)} = -\\frac{1}{4}\\csc^3(2t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_27",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 1t^2 + 2t$, $y = 1t^3 + 3t^2$.",
    "answer": "\\frac{6t^2 + 12t + 12}{(2t + 2)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 2t + 2, \\quad \\frac{dy}{dt} = 3t^2 + 6t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{3t^2 + 6t}{2t + 2} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(6t + 6)(2t + 2) - (3t^2 + 6t)(2)}{(2t + 2)^2} \\\\\n&= \\frac{12t^2 + 12t + 12t + 12 - 6t^2 - 12t}{(2t + 2)^2} \\\\\n&= \\frac{6t^2 + 12t + 12}{(2t + 2)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{6t^2 + 12t + 12}{(2t + 2)^2}}{2t + 2} \\\\\n&= \\frac{6t^2 + 12t + 12}{(2t + 2)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_27",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 5\\cos(3t)$ and $y = 4\\sin(3t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{4}{25}\\csc^3(3t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -15\\sin(3t), \\quad \\frac{dy}{dt} = 12\\cos(3t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{12\\cos(3t)}{-15\\sin(3t)} = -\\frac{4}{5}\\cot(3t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -\\frac{4}{5} \\cdot (-\\csc^2(3t) \\cdot 3) = \\frac{12}{5}\\csc^2(3t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{12}{5}\\csc^2(3t)}{-15\\sin(3t)} = -\\frac{4}{25}\\csc^3(3t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_28",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 2t^2 + 4t$, $y = 2t^3 + 4t^2$.",
    "answer": "\\frac{24t^2 + 48t + 32}{(4t + 4)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 4t + 4, \\quad \\frac{dy}{dt} = 6t^2 + 8t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{6t^2 + 8t}{4t + 4} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(12t + 8)(4t + 4) - (6t^2 + 8t)(4)}{(4t + 4)^2} \\\\\n&= \\frac{48t^2 + 48t + 32t + 32 - 24t^2 - 32t}{(4t + 4)^2} \\\\\n&= \\frac{24t^2 + 48t + 32}{(4t + 4)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{24t^2 + 48t + 32}{(4t + 4)^2}}{4t + 4} \\\\\n&= \\frac{24t^2 + 48t + 32}{(4t + 4)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_28",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 6\\cos(2t)$ and $y = 6\\sin(2t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{1}{6}\\csc^3(2t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -12\\sin(2t), \\quad \\frac{dy}{dt} = 12\\cos(2t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{12\\cos(2t)}{-12\\sin(2t)} = -\\cot(2t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= - \\cdot (-\\csc^2(2t) \\cdot 2) = 2\\csc^2(2t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{2\\csc^2(2t)}{-12\\sin(2t)} = -\\frac{1}{6}\\csc^3(2t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_29",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 3t^2 + 3t$, $y = 2t^3 + 4t^2$.",
    "answer": "\\frac{36t^2 + 36t + 24}{(6t + 3)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 6t + 3, \\quad \\frac{dy}{dt} = 6t^2 + 8t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{6t^2 + 8t}{6t + 3} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(12t + 8)(6t + 3) - (6t^2 + 8t)(6)}{(6t + 3)^2} \\\\\n&= \\frac{72t^2 + 36t + 48t + 24 - 36t^2 - 48t}{(6t + 3)^2} \\\\\n&= \\frac{36t^2 + 36t + 24}{(6t + 3)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{36t^2 + 36t + 24}{(6t + 3)^2}}{6t + 3} \\\\\n&= \\frac{36t^2 + 36t + 24}{(6t + 3)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_29",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 6\\cos(4t)$ and $y = 2\\sin(4t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{1}{18}\\csc^3(4t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -24\\sin(4t), \\quad \\frac{dy}{dt} = 8\\cos(4t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{8\\cos(4t)}{-24\\sin(4t)} = -\\frac{1}{3}\\cot(4t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -\\frac{1}{3} \\cdot (-\\csc^2(4t) \\cdot 4) = \\frac{4}{3}\\csc^2(4t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{4}{3}\\csc^2(4t)}{-24\\sin(4t)} = -\\frac{1}{18}\\csc^3(4t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_30",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 2t^2 + 3t$, $y = 3t^3 + 4t^2$.",
    "answer": "\\frac{36t^2 + 54t + 24}{(4t + 3)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 4t + 3, \\quad \\frac{dy}{dt} = 9t^2 + 8t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{9t^2 + 8t}{4t + 3} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(18t + 8)(4t + 3) - (9t^2 + 8t)(4)}{(4t + 3)^2} \\\\\n&= \\frac{72t^2 + 54t + 32t + 24 - 36t^2 - 32t}{(4t + 3)^2} \\\\\n&= \\frac{36t^2 + 54t + 24}{(4t + 3)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{36t^2 + 54t + 24}{(4t + 3)^2}}{4t + 3} \\\\\n&= \\frac{36t^2 + 54t + 24}{(4t + 3)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_30",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 6\\cos(3t)$ and $y = 3\\sin(3t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{1}{12}\\csc^3(3t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -18\\sin(3t), \\quad \\frac{dy}{dt} = 9\\cos(3t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{9\\cos(3t)}{-18\\sin(3t)} = -\\frac{1}{2}\\cot(3t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -\\frac{1}{2} \\cdot (-\\csc^2(3t) \\cdot 3) = \\frac{3}{2}\\csc^2(3t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{3}{2}\\csc^2(3t)}{-18\\sin(3t)} = -\\frac{1}{12}\\csc^3(3t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_31",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 1t^2 + 2t$, $y = 4t^3 + 3t^2$.",
    "answer": "\\frac{24t^2 + 48t + 12}{(2t + 2)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 2t + 2, \\quad \\frac{dy}{dt} = 12t^2 + 6t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{12t^2 + 6t}{2t + 2} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(24t + 6)(2t + 2) - (12t^2 + 6t)(2)}{(2t + 2)^2} \\\\\n&= \\frac{48t^2 + 48t + 12t + 12 - 24t^2 - 12t}{(2t + 2)^2} \\\\\n&= \\frac{24t^2 + 48t + 12}{(2t + 2)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{24t^2 + 48t + 12}{(2t + 2)^2}}{2t + 2} \\\\\n&= \\frac{24t^2 + 48t + 12}{(2t + 2)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_31",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 6\\cos(3t)$ and $y = 6\\sin(3t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{1}{6}\\csc^3(3t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -18\\sin(3t), \\quad \\frac{dy}{dt} = 18\\cos(3t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{18\\cos(3t)}{-18\\sin(3t)} = -\\cot(3t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= - \\cdot (-\\csc^2(3t) \\cdot 3) = 3\\csc^2(3t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{3\\csc^2(3t)}{-18\\sin(3t)} = -\\frac{1}{6}\\csc^3(3t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_32",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 3t^2 + 4t$, $y = 1t^3 + 1t^2$.",
    "answer": "\\frac{18t^2 + 24t + 8}{(6t + 4)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 6t + 4, \\quad \\frac{dy}{dt} = 3t^2 + 2t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{3t^2 + 2t}{6t + 4} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(6t + 2)(6t + 4) - (3t^2 + 2t)(6)}{(6t + 4)^2} \\\\\n&= \\frac{36t^2 + 24t + 12t + 8 - 18t^2 - 12t}{(6t + 4)^2} \\\\\n&= \\frac{18t^2 + 24t + 8}{(6t + 4)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{18t^2 + 24t + 8}{(6t + 4)^2}}{6t + 4} \\\\\n&= \\frac{18t^2 + 24t + 8}{(6t + 4)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_32",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 4\\cos(4t)$ and $y = 4\\sin(4t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{1}{4}\\csc^3(4t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -16\\sin(4t), \\quad \\frac{dy}{dt} = 16\\cos(4t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{16\\cos(4t)}{-16\\sin(4t)} = -\\cot(4t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= - \\cdot (-\\csc^2(4t) \\cdot 4) = 4\\csc^2(4t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{4\\csc^2(4t)}{-16\\sin(4t)} = -\\frac{1}{4}\\csc^3(4t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_33",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 3t^2 + 4t$, $y = 3t^3 + 3t^2$.",
    "answer": "\\frac{54t^2 + 72t + 24}{(6t + 4)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 6t + 4, \\quad \\frac{dy}{dt} = 9t^2 + 6t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{9t^2 + 6t}{6t + 4} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(18t + 6)(6t + 4) - (9t^2 + 6t)(6)}{(6t + 4)^2} \\\\\n&= \\frac{108t^2 + 72t + 36t + 24 - 54t^2 - 36t}{(6t + 4)^2} \\\\\n&= \\frac{54t^2 + 72t + 24}{(6t + 4)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{54t^2 + 72t + 24}{(6t + 4)^2}}{6t + 4} \\\\\n&= \\frac{54t^2 + 72t + 24}{(6t + 4)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_33",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 4\\cos(2t)$ and $y = 2\\sin(2t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{1}{8}\\csc^3(2t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -8\\sin(2t), \\quad \\frac{dy}{dt} = 4\\cos(2t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{4\\cos(2t)}{-8\\sin(2t)} = -\\frac{1}{2}\\cot(2t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -\\frac{1}{2} \\cdot (-\\csc^2(2t) \\cdot 2) = \\csc^2(2t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\csc^2(2t)}{-8\\sin(2t)} = -\\frac{1}{8}\\csc^3(2t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_34",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 1t^2 + 3t$, $y = 4t^3 + 4t^2$.",
    "answer": "\\frac{24t^2 + 72t + 24}{(2t + 3)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 2t + 3, \\quad \\frac{dy}{dt} = 12t^2 + 8t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{12t^2 + 8t}{2t + 3} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(24t + 8)(2t + 3) - (12t^2 + 8t)(2)}{(2t + 3)^2} \\\\\n&= \\frac{48t^2 + 72t + 16t + 24 - 24t^2 - 16t}{(2t + 3)^2} \\\\\n&= \\frac{24t^2 + 72t + 24}{(2t + 3)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{24t^2 + 72t + 24}{(2t + 3)^2}}{2t + 3} \\\\\n&= \\frac{24t^2 + 72t + 24}{(2t + 3)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_34",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 2\\cos(3t)$ and $y = 6\\sin(3t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{3}{2}\\csc^3(3t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -6\\sin(3t), \\quad \\frac{dy}{dt} = 18\\cos(3t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{18\\cos(3t)}{-6\\sin(3t)} = -3\\cot(3t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -3 \\cdot (-\\csc^2(3t) \\cdot 3) = 9\\csc^2(3t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{9\\csc^2(3t)}{-6\\sin(3t)} = -\\frac{3}{2}\\csc^3(3t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_35",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 2t^2 + 4t$, $y = 1t^3 + 1t^2$.",
    "answer": "\\frac{12t^2 + 24t + 8}{(4t + 4)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 4t + 4, \\quad \\frac{dy}{dt} = 3t^2 + 2t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{3t^2 + 2t}{4t + 4} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(6t + 2)(4t + 4) - (3t^2 + 2t)(4)}{(4t + 4)^2} \\\\\n&= \\frac{24t^2 + 24t + 8t + 8 - 12t^2 - 8t}{(4t + 4)^2} \\\\\n&= \\frac{12t^2 + 24t + 8}{(4t + 4)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{12t^2 + 24t + 8}{(4t + 4)^2}}{4t + 4} \\\\\n&= \\frac{12t^2 + 24t + 8}{(4t + 4)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_35",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 5\\cos(4t)$ and $y = 2\\sin(4t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{2}{25}\\csc^3(4t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -20\\sin(4t), \\quad \\frac{dy}{dt} = 8\\cos(4t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{8\\cos(4t)}{-20\\sin(4t)} = -\\frac{2}{5}\\cot(4t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -\\frac{2}{5} \\cdot (-\\csc^2(4t) \\cdot 4) = \\frac{8}{5}\\csc^2(4t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{8}{5}\\csc^2(4t)}{-20\\sin(4t)} = -\\frac{2}{25}\\csc^3(4t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_36",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 3t^2 + 2t$, $y = 2t^3 + 1t^2$.",
    "answer": "\\frac{36t^2 + 24t + 4}{(6t + 2)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 6t + 2, \\quad \\frac{dy}{dt} = 6t^2 + 2t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{6t^2 + 2t}{6t + 2} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(12t + 2)(6t + 2) - (6t^2 + 2t)(6)}{(6t + 2)^2} \\\\\n&= \\frac{72t^2 + 24t + 12t + 4 - 36t^2 - 12t}{(6t + 2)^2} \\\\\n&= \\frac{36t^2 + 24t + 4}{(6t + 2)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{36t^2 + 24t + 4}{(6t + 2)^2}}{6t + 2} \\\\\n&= \\frac{36t^2 + 24t + 4}{(6t + 2)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_36",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 5\\cos(2t)$ and $y = 3\\sin(2t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{3}{25}\\csc^3(2t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -10\\sin(2t), \\quad \\frac{dy}{dt} = 6\\cos(2t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{6\\cos(2t)}{-10\\sin(2t)} = -\\frac{3}{5}\\cot(2t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -\\frac{3}{5} \\cdot (-\\csc^2(2t) \\cdot 2) = \\frac{6}{5}\\csc^2(2t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{6}{5}\\csc^2(2t)}{-10\\sin(2t)} = -\\frac{3}{25}\\csc^3(2t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_37",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 1t^2 + 4t$, $y = 4t^3 + 3t^2$.",
    "answer": "\\frac{24t^2 + 96t + 24}{(2t + 4)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 2t + 4, \\quad \\frac{dy}{dt} = 12t^2 + 6t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{12t^2 + 6t}{2t + 4} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(24t + 6)(2t + 4) - (12t^2 + 6t)(2)}{(2t + 4)^2} \\\\\n&= \\frac{48t^2 + 96t + 12t + 24 - 24t^2 - 12t}{(2t + 4)^2} \\\\\n&= \\frac{24t^2 + 96t + 24}{(2t + 4)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{24t^2 + 96t + 24}{(2t + 4)^2}}{2t + 4} \\\\\n&= \\frac{24t^2 + 96t + 24}{(2t + 4)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_37",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 6\\cos(3t)$ and $y = 3\\sin(3t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{1}{12}\\csc^3(3t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -18\\sin(3t), \\quad \\frac{dy}{dt} = 9\\cos(3t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{9\\cos(3t)}{-18\\sin(3t)} = -\\frac{1}{2}\\cot(3t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -\\frac{1}{2} \\cdot (-\\csc^2(3t) \\cdot 3) = \\frac{3}{2}\\csc^2(3t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{3}{2}\\csc^2(3t)}{-18\\sin(3t)} = -\\frac{1}{12}\\csc^3(3t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_38",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 1t^2 + 3t$, $y = 3t^3 + 4t^2$.",
    "answer": "\\frac{18t^2 + 54t + 24}{(2t + 3)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 2t + 3, \\quad \\frac{dy}{dt} = 9t^2 + 8t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{9t^2 + 8t}{2t + 3} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(18t + 8)(2t + 3) - (9t^2 + 8t)(2)}{(2t + 3)^2} \\\\\n&= \\frac{36t^2 + 54t + 16t + 24 - 18t^2 - 16t}{(2t + 3)^2} \\\\\n&= \\frac{18t^2 + 54t + 24}{(2t + 3)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{18t^2 + 54t + 24}{(2t + 3)^2}}{2t + 3} \\\\\n&= \\frac{18t^2 + 54t + 24}{(2t + 3)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_38",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 2\\cos(4t)$ and $y = 3\\sin(4t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{3}{4}\\csc^3(4t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -8\\sin(4t), \\quad \\frac{dy}{dt} = 12\\cos(4t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{12\\cos(4t)}{-8\\sin(4t)} = -\\frac{3}{2}\\cot(4t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -\\frac{3}{2} \\cdot (-\\csc^2(4t) \\cdot 4) = 6\\csc^2(4t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{6\\csc^2(4t)}{-8\\sin(4t)} = -\\frac{3}{4}\\csc^3(4t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_39",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 3t^2 + 2t$, $y = 1t^3 + 2t^2$.",
    "answer": "\\frac{18t^2 + 12t + 8}{(6t + 2)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 6t + 2, \\quad \\frac{dy}{dt} = 3t^2 + 4t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{3t^2 + 4t}{6t + 2} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(6t + 4)(6t + 2) - (3t^2 + 4t)(6)}{(6t + 2)^2} \\\\\n&= \\frac{36t^2 + 12t + 24t + 8 - 18t^2 - 24t}{(6t + 2)^2} \\\\\n&= \\frac{18t^2 + 12t + 8}{(6t + 2)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{18t^2 + 12t + 8}{(6t + 2)^2}}{6t + 2} \\\\\n&= \\frac{18t^2 + 12t + 8}{(6t + 2)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_39",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 3\\cos(3t)$ and $y = 4\\sin(3t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{4}{9}\\csc^3(3t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -9\\sin(3t), \\quad \\frac{dy}{dt} = 12\\cos(3t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{12\\cos(3t)}{-9\\sin(3t)} = -\\frac{4}{3}\\cot(3t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -\\frac{4}{3} \\cdot (-\\csc^2(3t) \\cdot 3) = 4\\csc^2(3t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{4\\csc^2(3t)}{-9\\sin(3t)} = -\\frac{4}{9}\\csc^3(3t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_40",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 3t^2 + 4t$, $y = 1t^3 + 4t^2$.",
    "answer": "\\frac{18t^2 + 24t + 32}{(6t + 4)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 6t + 4, \\quad \\frac{dy}{dt} = 3t^2 + 8t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{3t^2 + 8t}{6t + 4} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(6t + 8)(6t + 4) - (3t^2 + 8t)(6)}{(6t + 4)^2} \\\\\n&= \\frac{36t^2 + 24t + 48t + 32 - 18t^2 - 48t}{(6t + 4)^2} \\\\\n&= \\frac{18t^2 + 24t + 32}{(6t + 4)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{18t^2 + 24t + 32}{(6t + 4)^2}}{6t + 4} \\\\\n&= \\frac{18t^2 + 24t + 32}{(6t + 4)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_40",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 4\\cos(2t)$ and $y = 4\\sin(2t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{1}{4}\\csc^3(2t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -8\\sin(2t), \\quad \\frac{dy}{dt} = 8\\cos(2t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{8\\cos(2t)}{-8\\sin(2t)} = -\\cot(2t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= - \\cdot (-\\csc^2(2t) \\cdot 2) = 2\\csc^2(2t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{2\\csc^2(2t)}{-8\\sin(2t)} = -\\frac{1}{4}\\csc^3(2t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_41",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 1t^2 + 4t$, $y = 1t^3 + 3t^2$.",
    "answer": "\\frac{6t^2 + 24t + 24}{(2t + 4)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 2t + 4, \\quad \\frac{dy}{dt} = 3t^2 + 6t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{3t^2 + 6t}{2t + 4} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(6t + 6)(2t + 4) - (3t^2 + 6t)(2)}{(2t + 4)^2} \\\\\n&= \\frac{12t^2 + 24t + 12t + 24 - 6t^2 - 12t}{(2t + 4)^2} \\\\\n&= \\frac{6t^2 + 24t + 24}{(2t + 4)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{6t^2 + 24t + 24}{(2t + 4)^2}}{2t + 4} \\\\\n&= \\frac{6t^2 + 24t + 24}{(2t + 4)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_41",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 5\\cos(4t)$ and $y = 5\\sin(4t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{1}{5}\\csc^3(4t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -20\\sin(4t), \\quad \\frac{dy}{dt} = 20\\cos(4t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{20\\cos(4t)}{-20\\sin(4t)} = -\\cot(4t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= - \\cdot (-\\csc^2(4t) \\cdot 4) = 4\\csc^2(4t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{4\\csc^2(4t)}{-20\\sin(4t)} = -\\frac{1}{5}\\csc^3(4t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_42",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 3t^2 + 4t$, $y = 1t^3 + 3t^2$.",
    "answer": "\\frac{18t^2 + 24t + 24}{(6t + 4)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 6t + 4, \\quad \\frac{dy}{dt} = 3t^2 + 6t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{3t^2 + 6t}{6t + 4} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(6t + 6)(6t + 4) - (3t^2 + 6t)(6)}{(6t + 4)^2} \\\\\n&= \\frac{36t^2 + 24t + 36t + 24 - 18t^2 - 36t}{(6t + 4)^2} \\\\\n&= \\frac{18t^2 + 24t + 24}{(6t + 4)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{18t^2 + 24t + 24}{(6t + 4)^2}}{6t + 4} \\\\\n&= \\frac{18t^2 + 24t + 24}{(6t + 4)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_42",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 3\\cos(3t)$ and $y = 6\\sin(3t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{2}{3}\\csc^3(3t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -9\\sin(3t), \\quad \\frac{dy}{dt} = 18\\cos(3t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{18\\cos(3t)}{-9\\sin(3t)} = -2\\cot(3t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -2 \\cdot (-\\csc^2(3t) \\cdot 3) = 6\\csc^2(3t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{6\\csc^2(3t)}{-9\\sin(3t)} = -\\frac{2}{3}\\csc^3(3t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_43",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 1t^2 + 1t$, $y = 3t^3 + 4t^2$.",
    "answer": "\\frac{18t^2 + 18t + 8}{(2t + 1)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 2t + 1, \\quad \\frac{dy}{dt} = 9t^2 + 8t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{9t^2 + 8t}{2t + 1} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(18t + 8)(2t + 1) - (9t^2 + 8t)(2)}{(2t + 1)^2} \\\\\n&= \\frac{36t^2 + 18t + 16t + 8 - 18t^2 - 16t}{(2t + 1)^2} \\\\\n&= \\frac{18t^2 + 18t + 8}{(2t + 1)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{18t^2 + 18t + 8}{(2t + 1)^2}}{2t + 1} \\\\\n&= \\frac{18t^2 + 18t + 8}{(2t + 1)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_43",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 2\\cos(4t)$ and $y = 2\\sin(4t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{1}{2}\\csc^3(4t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -8\\sin(4t), \\quad \\frac{dy}{dt} = 8\\cos(4t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{8\\cos(4t)}{-8\\sin(4t)} = -\\cot(4t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= - \\cdot (-\\csc^2(4t) \\cdot 4) = 4\\csc^2(4t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{4\\csc^2(4t)}{-8\\sin(4t)} = -\\frac{1}{2}\\csc^3(4t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_44",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 3t^2 + 1t$, $y = 1t^3 + 1t^2$.",
    "answer": "\\frac{18t^2 + 6t + 2}{(6t + 1)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 6t + 1, \\quad \\frac{dy}{dt} = 3t^2 + 2t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{3t^2 + 2t}{6t + 1} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(6t + 2)(6t + 1) - (3t^2 + 2t)(6)}{(6t + 1)^2} \\\\\n&= \\frac{36t^2 + 6t + 12t + 2 - 18t^2 - 12t}{(6t + 1)^2} \\\\\n&= \\frac{18t^2 + 6t + 2}{(6t + 1)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{18t^2 + 6t + 2}{(6t + 1)^2}}{6t + 1} \\\\\n&= \\frac{18t^2 + 6t + 2}{(6t + 1)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_44",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 5\\cos(2t)$ and $y = 3\\sin(2t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{3}{25}\\csc^3(2t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -10\\sin(2t), \\quad \\frac{dy}{dt} = 6\\cos(2t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{6\\cos(2t)}{-10\\sin(2t)} = -\\frac{3}{5}\\cot(2t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -\\frac{3}{5} \\cdot (-\\csc^2(2t) \\cdot 2) = \\frac{6}{5}\\csc^2(2t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{6}{5}\\csc^2(2t)}{-10\\sin(2t)} = -\\frac{3}{25}\\csc^3(2t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_45",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 1t^2 + 2t$, $y = 1t^3 + 2t^2$.",
    "answer": "\\frac{6t^2 + 12t + 8}{(2t + 2)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 2t + 2, \\quad \\frac{dy}{dt} = 3t^2 + 4t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{3t^2 + 4t}{2t + 2} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(6t + 4)(2t + 2) - (3t^2 + 4t)(2)}{(2t + 2)^2} \\\\\n&= \\frac{12t^2 + 12t + 8t + 8 - 6t^2 - 8t}{(2t + 2)^2} \\\\\n&= \\frac{6t^2 + 12t + 8}{(2t + 2)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{6t^2 + 12t + 8}{(2t + 2)^2}}{2t + 2} \\\\\n&= \\frac{6t^2 + 12t + 8}{(2t + 2)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_45",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 4\\cos(2t)$ and $y = 3\\sin(2t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{3}{16}\\csc^3(2t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -8\\sin(2t), \\quad \\frac{dy}{dt} = 6\\cos(2t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{6\\cos(2t)}{-8\\sin(2t)} = -\\frac{3}{4}\\cot(2t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -\\frac{3}{4} \\cdot (-\\csc^2(2t) \\cdot 2) = \\frac{3}{2}\\csc^2(2t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{3}{2}\\csc^2(2t)}{-8\\sin(2t)} = -\\frac{3}{16}\\csc^3(2t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_46",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 2t^2 + 2t$, $y = 1t^3 + 4t^2$.",
    "answer": "\\frac{12t^2 + 12t + 16}{(4t + 2)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 4t + 2, \\quad \\frac{dy}{dt} = 3t^2 + 8t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{3t^2 + 8t}{4t + 2} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(6t + 8)(4t + 2) - (3t^2 + 8t)(4)}{(4t + 2)^2} \\\\\n&= \\frac{24t^2 + 12t + 32t + 16 - 12t^2 - 32t}{(4t + 2)^2} \\\\\n&= \\frac{12t^2 + 12t + 16}{(4t + 2)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{12t^2 + 12t + 16}{(4t + 2)^2}}{4t + 2} \\\\\n&= \\frac{12t^2 + 12t + 16}{(4t + 2)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_46",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 5\\cos(4t)$ and $y = 3\\sin(4t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{3}{25}\\csc^3(4t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -20\\sin(4t), \\quad \\frac{dy}{dt} = 12\\cos(4t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{12\\cos(4t)}{-20\\sin(4t)} = -\\frac{3}{5}\\cot(4t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -\\frac{3}{5} \\cdot (-\\csc^2(4t) \\cdot 4) = \\frac{12}{5}\\csc^2(4t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{12}{5}\\csc^2(4t)}{-20\\sin(4t)} = -\\frac{3}{25}\\csc^3(4t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_47",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 2t^2 + 2t$, $y = 2t^3 + 2t^2$.",
    "answer": "\\frac{24t^2 + 24t + 8}{(4t + 2)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 4t + 2, \\quad \\frac{dy}{dt} = 6t^2 + 4t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{6t^2 + 4t}{4t + 2} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(12t + 4)(4t + 2) - (6t^2 + 4t)(4)}{(4t + 2)^2} \\\\\n&= \\frac{48t^2 + 24t + 16t + 8 - 24t^2 - 16t}{(4t + 2)^2} \\\\\n&= \\frac{24t^2 + 24t + 8}{(4t + 2)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{24t^2 + 24t + 8}{(4t + 2)^2}}{4t + 2} \\\\\n&= \\frac{24t^2 + 24t + 8}{(4t + 2)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_47",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 6\\cos(3t)$ and $y = 2\\sin(3t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{1}{18}\\csc^3(3t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -18\\sin(3t), \\quad \\frac{dy}{dt} = 6\\cos(3t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{6\\cos(3t)}{-18\\sin(3t)} = -\\frac{1}{3}\\cot(3t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -\\frac{1}{3} \\cdot (-\\csc^2(3t) \\cdot 3) = \\csc^2(3t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\csc^2(3t)}{-18\\sin(3t)} = -\\frac{1}{18}\\csc^3(3t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_48",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 2t^2 + 2t$, $y = 4t^3 + 1t^2$.",
    "answer": "\\frac{48t^2 + 48t + 4}{(4t + 2)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 4t + 2, \\quad \\frac{dy}{dt} = 12t^2 + 2t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{12t^2 + 2t}{4t + 2} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(24t + 2)(4t + 2) - (12t^2 + 2t)(4)}{(4t + 2)^2} \\\\\n&= \\frac{96t^2 + 48t + 8t + 4 - 48t^2 - 8t}{(4t + 2)^2} \\\\\n&= \\frac{48t^2 + 48t + 4}{(4t + 2)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{48t^2 + 48t + 4}{(4t + 2)^2}}{4t + 2} \\\\\n&= \\frac{48t^2 + 48t + 4}{(4t + 2)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_48",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 4\\cos(2t)$ and $y = 5\\sin(2t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{5}{16}\\csc^3(2t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -8\\sin(2t), \\quad \\frac{dy}{dt} = 10\\cos(2t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{10\\cos(2t)}{-8\\sin(2t)} = -\\frac{5}{4}\\cot(2t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -\\frac{5}{4} \\cdot (-\\csc^2(2t) \\cdot 2) = \\frac{5}{2}\\csc^2(2t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{5}{2}\\csc^2(2t)}{-8\\sin(2t)} = -\\frac{5}{16}\\csc^3(2t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_49",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 1t^2 + 1t$, $y = 4t^3 + 4t^2$.",
    "answer": "\\frac{24t^2 + 24t + 8}{(2t + 1)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 2t + 1, \\quad \\frac{dy}{dt} = 12t^2 + 8t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{12t^2 + 8t}{2t + 1} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(24t + 8)(2t + 1) - (12t^2 + 8t)(2)}{(2t + 1)^2} \\\\\n&= \\frac{48t^2 + 24t + 16t + 8 - 24t^2 - 16t}{(2t + 1)^2} \\\\\n&= \\frac{24t^2 + 24t + 8}{(2t + 1)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{24t^2 + 24t + 8}{(2t + 1)^2}}{2t + 1} \\\\\n&= \\frac{24t^2 + 24t + 8}{(2t + 1)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_49",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 2\\cos(4t)$ and $y = 4\\sin(4t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\csc^3(4t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -8\\sin(4t), \\quad \\frac{dy}{dt} = 16\\cos(4t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{16\\cos(4t)}{-8\\sin(4t)} = -2\\cot(4t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -2 \\cdot (-\\csc^2(4t) \\cdot 4) = 8\\csc^2(4t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{8\\csc^2(4t)}{-8\\sin(4t)} = -\\csc^3(4t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_50",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 4t^2 + 2t$, $y = 3t^3 + 3t^2$.",
    "answer": "\\frac{72t^2 + 36t + 12}{(8t + 2)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 8t + 2, \\quad \\frac{dy}{dt} = 9t^2 + 6t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{9t^2 + 6t}{8t + 2} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(18t + 6)(8t + 2) - (9t^2 + 6t)(8)}{(8t + 2)^2} \\\\\n&= \\frac{144t^2 + 36t + 48t + 12 - 72t^2 - 48t}{(8t + 2)^2} \\\\\n&= \\frac{72t^2 + 36t + 12}{(8t + 2)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{72t^2 + 36t + 12}{(8t + 2)^2}}{8t + 2} \\\\\n&= \\frac{72t^2 + 36t + 12}{(8t + 2)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_50",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 2\\cos(4t)$ and $y = 4\\sin(4t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\csc^3(4t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -8\\sin(4t), \\quad \\frac{dy}{dt} = 16\\cos(4t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{16\\cos(4t)}{-8\\sin(4t)} = -2\\cot(4t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -2 \\cdot (-\\csc^2(4t) \\cdot 4) = 8\\csc^2(4t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{8\\csc^2(4t)}{-8\\sin(4t)} = -\\csc^3(4t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_51",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 4t^2 + 2t$, $y = 3t^3 + 3t^2$.",
    "answer": "\\frac{72t^2 + 36t + 12}{(8t + 2)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 8t + 2, \\quad \\frac{dy}{dt} = 9t^2 + 6t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{9t^2 + 6t}{8t + 2} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(18t + 6)(8t + 2) - (9t^2 + 6t)(8)}{(8t + 2)^2} \\\\\n&= \\frac{144t^2 + 36t + 48t + 12 - 72t^2 - 48t}{(8t + 2)^2} \\\\\n&= \\frac{72t^2 + 36t + 12}{(8t + 2)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{72t^2 + 36t + 12}{(8t + 2)^2}}{8t + 2} \\\\\n&= \\frac{72t^2 + 36t + 12}{(8t + 2)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_51",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 6\\cos(4t)$ and $y = 3\\sin(4t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{1}{12}\\csc^3(4t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -24\\sin(4t), \\quad \\frac{dy}{dt} = 12\\cos(4t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{12\\cos(4t)}{-24\\sin(4t)} = -\\frac{1}{2}\\cot(4t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -\\frac{1}{2} \\cdot (-\\csc^2(4t) \\cdot 4) = 2\\csc^2(4t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{2\\csc^2(4t)}{-24\\sin(4t)} = -\\frac{1}{12}\\csc^3(4t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_52",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 2t^2 + 4t$, $y = 2t^3 + 2t^2$.",
    "answer": "\\frac{24t^2 + 48t + 16}{(4t + 4)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 4t + 4, \\quad \\frac{dy}{dt} = 6t^2 + 4t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{6t^2 + 4t}{4t + 4} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(12t + 4)(4t + 4) - (6t^2 + 4t)(4)}{(4t + 4)^2} \\\\\n&= \\frac{48t^2 + 48t + 16t + 16 - 24t^2 - 16t}{(4t + 4)^2} \\\\\n&= \\frac{24t^2 + 48t + 16}{(4t + 4)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{24t^2 + 48t + 16}{(4t + 4)^2}}{4t + 4} \\\\\n&= \\frac{24t^2 + 48t + 16}{(4t + 4)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_52",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 3\\cos(3t)$ and $y = 2\\sin(3t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{2}{9}\\csc^3(3t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -9\\sin(3t), \\quad \\frac{dy}{dt} = 6\\cos(3t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{6\\cos(3t)}{-9\\sin(3t)} = -\\frac{2}{3}\\cot(3t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -\\frac{2}{3} \\cdot (-\\csc^2(3t) \\cdot 3) = 2\\csc^2(3t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{2\\csc^2(3t)}{-9\\sin(3t)} = -\\frac{2}{9}\\csc^3(3t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_53",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 4t^2 + 2t$, $y = 3t^3 + 2t^2$.",
    "answer": "\\frac{72t^2 + 36t + 8}{(8t + 2)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 8t + 2, \\quad \\frac{dy}{dt} = 9t^2 + 4t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{9t^2 + 4t}{8t + 2} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(18t + 4)(8t + 2) - (9t^2 + 4t)(8)}{(8t + 2)^2} \\\\\n&= \\frac{144t^2 + 36t + 32t + 8 - 72t^2 - 32t}{(8t + 2)^2} \\\\\n&= \\frac{72t^2 + 36t + 8}{(8t + 2)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{72t^2 + 36t + 8}{(8t + 2)^2}}{8t + 2} \\\\\n&= \\frac{72t^2 + 36t + 8}{(8t + 2)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_53",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 2\\cos(2t)$ and $y = 6\\sin(2t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{3}{2}\\csc^3(2t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -4\\sin(2t), \\quad \\frac{dy}{dt} = 12\\cos(2t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{12\\cos(2t)}{-4\\sin(2t)} = -3\\cot(2t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -3 \\cdot (-\\csc^2(2t) \\cdot 2) = 6\\csc^2(2t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{6\\csc^2(2t)}{-4\\sin(2t)} = -\\frac{3}{2}\\csc^3(2t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_54",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 2t^2 + 2t$, $y = 4t^3 + 3t^2$.",
    "answer": "\\frac{48t^2 + 48t + 12}{(4t + 2)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 4t + 2, \\quad \\frac{dy}{dt} = 12t^2 + 6t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{12t^2 + 6t}{4t + 2} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(24t + 6)(4t + 2) - (12t^2 + 6t)(4)}{(4t + 2)^2} \\\\\n&= \\frac{96t^2 + 48t + 24t + 12 - 48t^2 - 24t}{(4t + 2)^2} \\\\\n&= \\frac{48t^2 + 48t + 12}{(4t + 2)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{48t^2 + 48t + 12}{(4t + 2)^2}}{4t + 2} \\\\\n&= \\frac{48t^2 + 48t + 12}{(4t + 2)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_54",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 2\\cos(2t)$ and $y = 4\\sin(2t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\csc^3(2t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -4\\sin(2t), \\quad \\frac{dy}{dt} = 8\\cos(2t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{8\\cos(2t)}{-4\\sin(2t)} = -2\\cot(2t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -2 \\cdot (-\\csc^2(2t) \\cdot 2) = 4\\csc^2(2t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{4\\csc^2(2t)}{-4\\sin(2t)} = -\\csc^3(2t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_55",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 3t^2 + 3t$, $y = 4t^3 + 2t^2$.",
    "answer": "\\frac{72t^2 + 72t + 12}{(6t + 3)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 6t + 3, \\quad \\frac{dy}{dt} = 12t^2 + 4t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{12t^2 + 4t}{6t + 3} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(24t + 4)(6t + 3) - (12t^2 + 4t)(6)}{(6t + 3)^2} \\\\\n&= \\frac{144t^2 + 72t + 24t + 12 - 72t^2 - 24t}{(6t + 3)^2} \\\\\n&= \\frac{72t^2 + 72t + 12}{(6t + 3)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{72t^2 + 72t + 12}{(6t + 3)^2}}{6t + 3} \\\\\n&= \\frac{72t^2 + 72t + 12}{(6t + 3)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_55",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 3\\cos(4t)$ and $y = 3\\sin(4t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{1}{3}\\csc^3(4t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -12\\sin(4t), \\quad \\frac{dy}{dt} = 12\\cos(4t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{12\\cos(4t)}{-12\\sin(4t)} = -\\cot(4t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= - \\cdot (-\\csc^2(4t) \\cdot 4) = 4\\csc^2(4t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{4\\csc^2(4t)}{-12\\sin(4t)} = -\\frac{1}{3}\\csc^3(4t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_56",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 3t^2 + 3t$, $y = 4t^3 + 1t^2$.",
    "answer": "\\frac{72t^2 + 72t + 6}{(6t + 3)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 6t + 3, \\quad \\frac{dy}{dt} = 12t^2 + 2t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{12t^2 + 2t}{6t + 3} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(24t + 2)(6t + 3) - (12t^2 + 2t)(6)}{(6t + 3)^2} \\\\\n&= \\frac{144t^2 + 72t + 12t + 6 - 72t^2 - 12t}{(6t + 3)^2} \\\\\n&= \\frac{72t^2 + 72t + 6}{(6t + 3)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{72t^2 + 72t + 6}{(6t + 3)^2}}{6t + 3} \\\\\n&= \\frac{72t^2 + 72t + 6}{(6t + 3)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_56",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 4\\cos(2t)$ and $y = 5\\sin(2t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{5}{16}\\csc^3(2t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -8\\sin(2t), \\quad \\frac{dy}{dt} = 10\\cos(2t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{10\\cos(2t)}{-8\\sin(2t)} = -\\frac{5}{4}\\cot(2t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -\\frac{5}{4} \\cdot (-\\csc^2(2t) \\cdot 2) = \\frac{5}{2}\\csc^2(2t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{5}{2}\\csc^2(2t)}{-8\\sin(2t)} = -\\frac{5}{16}\\csc^3(2t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_57",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 4t^2 + 3t$, $y = 3t^3 + 3t^2$.",
    "answer": "\\frac{72t^2 + 54t + 18}{(8t + 3)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 8t + 3, \\quad \\frac{dy}{dt} = 9t^2 + 6t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{9t^2 + 6t}{8t + 3} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(18t + 6)(8t + 3) - (9t^2 + 6t)(8)}{(8t + 3)^2} \\\\\n&= \\frac{144t^2 + 54t + 48t + 18 - 72t^2 - 48t}{(8t + 3)^2} \\\\\n&= \\frac{72t^2 + 54t + 18}{(8t + 3)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{72t^2 + 54t + 18}{(8t + 3)^2}}{8t + 3} \\\\\n&= \\frac{72t^2 + 54t + 18}{(8t + 3)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_57",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 4\\cos(2t)$ and $y = 2\\sin(2t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{1}{8}\\csc^3(2t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -8\\sin(2t), \\quad \\frac{dy}{dt} = 4\\cos(2t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{4\\cos(2t)}{-8\\sin(2t)} = -\\frac{1}{2}\\cot(2t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -\\frac{1}{2} \\cdot (-\\csc^2(2t) \\cdot 2) = \\csc^2(2t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\csc^2(2t)}{-8\\sin(2t)} = -\\frac{1}{8}\\csc^3(2t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_58",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 4t^2 + 1t$, $y = 3t^3 + 3t^2$.",
    "answer": "\\frac{72t^2 + 18t + 6}{(8t + 1)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 8t + 1, \\quad \\frac{dy}{dt} = 9t^2 + 6t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{9t^2 + 6t}{8t + 1} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(18t + 6)(8t + 1) - (9t^2 + 6t)(8)}{(8t + 1)^2} \\\\\n&= \\frac{144t^2 + 18t + 48t + 6 - 72t^2 - 48t}{(8t + 1)^2} \\\\\n&= \\frac{72t^2 + 18t + 6}{(8t + 1)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{72t^2 + 18t + 6}{(8t + 1)^2}}{8t + 1} \\\\\n&= \\frac{72t^2 + 18t + 6}{(8t + 1)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_58",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 4\\cos(2t)$ and $y = 3\\sin(2t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{3}{16}\\csc^3(2t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -8\\sin(2t), \\quad \\frac{dy}{dt} = 6\\cos(2t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{6\\cos(2t)}{-8\\sin(2t)} = -\\frac{3}{4}\\cot(2t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -\\frac{3}{4} \\cdot (-\\csc^2(2t) \\cdot 2) = \\frac{3}{2}\\csc^2(2t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{3}{2}\\csc^2(2t)}{-8\\sin(2t)} = -\\frac{3}{16}\\csc^3(2t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_59",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 1t^2 + 2t$, $y = 4t^3 + 2t^2$.",
    "answer": "\\frac{24t^2 + 48t + 8}{(2t + 2)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 2t + 2, \\quad \\frac{dy}{dt} = 12t^2 + 4t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{12t^2 + 4t}{2t + 2} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(24t + 4)(2t + 2) - (12t^2 + 4t)(2)}{(2t + 2)^2} \\\\\n&= \\frac{48t^2 + 48t + 8t + 8 - 24t^2 - 8t}{(2t + 2)^2} \\\\\n&= \\frac{24t^2 + 48t + 8}{(2t + 2)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{24t^2 + 48t + 8}{(2t + 2)^2}}{2t + 2} \\\\\n&= \\frac{24t^2 + 48t + 8}{(2t + 2)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_59",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 6\\cos(2t)$ and $y = 5\\sin(2t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{5}{36}\\csc^3(2t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -12\\sin(2t), \\quad \\frac{dy}{dt} = 10\\cos(2t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{10\\cos(2t)}{-12\\sin(2t)} = -\\frac{5}{6}\\cot(2t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -\\frac{5}{6} \\cdot (-\\csc^2(2t) \\cdot 2) = \\frac{5}{3}\\csc^2(2t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{5}{3}\\csc^2(2t)}{-12\\sin(2t)} = -\\frac{5}{36}\\csc^3(2t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_60",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 1t^2 + 1t$, $y = 1t^3 + 3t^2$.",
    "answer": "\\frac{6t^2 + 6t + 6}{(2t + 1)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 2t + 1, \\quad \\frac{dy}{dt} = 3t^2 + 6t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{3t^2 + 6t}{2t + 1} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(6t + 6)(2t + 1) - (3t^2 + 6t)(2)}{(2t + 1)^2} \\\\\n&= \\frac{12t^2 + 6t + 12t + 6 - 6t^2 - 12t}{(2t + 1)^2} \\\\\n&= \\frac{6t^2 + 6t + 6}{(2t + 1)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{6t^2 + 6t + 6}{(2t + 1)^2}}{2t + 1} \\\\\n&= \\frac{6t^2 + 6t + 6}{(2t + 1)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_60",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 3\\cos(2t)$ and $y = 4\\sin(2t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{4}{9}\\csc^3(2t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -6\\sin(2t), \\quad \\frac{dy}{dt} = 8\\cos(2t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{8\\cos(2t)}{-6\\sin(2t)} = -\\frac{4}{3}\\cot(2t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -\\frac{4}{3} \\cdot (-\\csc^2(2t) \\cdot 2) = \\frac{8}{3}\\csc^2(2t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{8}{3}\\csc^2(2t)}{-6\\sin(2t)} = -\\frac{4}{9}\\csc^3(2t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_61",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 1t^2 + 4t$, $y = 2t^3 + 1t^2$.",
    "answer": "\\frac{12t^2 + 48t + 8}{(2t + 4)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 2t + 4, \\quad \\frac{dy}{dt} = 6t^2 + 2t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{6t^2 + 2t}{2t + 4} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(12t + 2)(2t + 4) - (6t^2 + 2t)(2)}{(2t + 4)^2} \\\\\n&= \\frac{24t^2 + 48t + 4t + 8 - 12t^2 - 4t}{(2t + 4)^2} \\\\\n&= \\frac{12t^2 + 48t + 8}{(2t + 4)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{12t^2 + 48t + 8}{(2t + 4)^2}}{2t + 4} \\\\\n&= \\frac{12t^2 + 48t + 8}{(2t + 4)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_61",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 5\\cos(4t)$ and $y = 6\\sin(4t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{6}{25}\\csc^3(4t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -20\\sin(4t), \\quad \\frac{dy}{dt} = 24\\cos(4t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{24\\cos(4t)}{-20\\sin(4t)} = -\\frac{6}{5}\\cot(4t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -\\frac{6}{5} \\cdot (-\\csc^2(4t) \\cdot 4) = \\frac{24}{5}\\csc^2(4t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{24}{5}\\csc^2(4t)}{-20\\sin(4t)} = -\\frac{6}{25}\\csc^3(4t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_62",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 4t^2 + 3t$, $y = 4t^3 + 1t^2$.",
    "answer": "\\frac{96t^2 + 72t + 6}{(8t + 3)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 8t + 3, \\quad \\frac{dy}{dt} = 12t^2 + 2t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{12t^2 + 2t}{8t + 3} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(24t + 2)(8t + 3) - (12t^2 + 2t)(8)}{(8t + 3)^2} \\\\\n&= \\frac{192t^2 + 72t + 16t + 6 - 96t^2 - 16t}{(8t + 3)^2} \\\\\n&= \\frac{96t^2 + 72t + 6}{(8t + 3)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{96t^2 + 72t + 6}{(8t + 3)^2}}{8t + 3} \\\\\n&= \\frac{96t^2 + 72t + 6}{(8t + 3)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_62",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 2\\cos(4t)$ and $y = 2\\sin(4t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{1}{2}\\csc^3(4t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -8\\sin(4t), \\quad \\frac{dy}{dt} = 8\\cos(4t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{8\\cos(4t)}{-8\\sin(4t)} = -\\cot(4t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= - \\cdot (-\\csc^2(4t) \\cdot 4) = 4\\csc^2(4t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{4\\csc^2(4t)}{-8\\sin(4t)} = -\\frac{1}{2}\\csc^3(4t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_63",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 3t^2 + 4t$, $y = 2t^3 + 4t^2$.",
    "answer": "\\frac{36t^2 + 48t + 32}{(6t + 4)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 6t + 4, \\quad \\frac{dy}{dt} = 6t^2 + 8t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{6t^2 + 8t}{6t + 4} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(12t + 8)(6t + 4) - (6t^2 + 8t)(6)}{(6t + 4)^2} \\\\\n&= \\frac{72t^2 + 48t + 48t + 32 - 36t^2 - 48t}{(6t + 4)^2} \\\\\n&= \\frac{36t^2 + 48t + 32}{(6t + 4)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{36t^2 + 48t + 32}{(6t + 4)^2}}{6t + 4} \\\\\n&= \\frac{36t^2 + 48t + 32}{(6t + 4)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_63",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 6\\cos(3t)$ and $y = 2\\sin(3t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{1}{18}\\csc^3(3t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -18\\sin(3t), \\quad \\frac{dy}{dt} = 6\\cos(3t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{6\\cos(3t)}{-18\\sin(3t)} = -\\frac{1}{3}\\cot(3t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -\\frac{1}{3} \\cdot (-\\csc^2(3t) \\cdot 3) = \\csc^2(3t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\csc^2(3t)}{-18\\sin(3t)} = -\\frac{1}{18}\\csc^3(3t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_64",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 2t^2 + 2t$, $y = 3t^3 + 1t^2$.",
    "answer": "\\frac{36t^2 + 36t + 4}{(4t + 2)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 4t + 2, \\quad \\frac{dy}{dt} = 9t^2 + 2t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{9t^2 + 2t}{4t + 2} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(18t + 2)(4t + 2) - (9t^2 + 2t)(4)}{(4t + 2)^2} \\\\\n&= \\frac{72t^2 + 36t + 8t + 4 - 36t^2 - 8t}{(4t + 2)^2} \\\\\n&= \\frac{36t^2 + 36t + 4}{(4t + 2)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{36t^2 + 36t + 4}{(4t + 2)^2}}{4t + 2} \\\\\n&= \\frac{36t^2 + 36t + 4}{(4t + 2)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_64",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 5\\cos(4t)$ and $y = 2\\sin(4t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{2}{25}\\csc^3(4t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -20\\sin(4t), \\quad \\frac{dy}{dt} = 8\\cos(4t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{8\\cos(4t)}{-20\\sin(4t)} = -\\frac{2}{5}\\cot(4t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -\\frac{2}{5} \\cdot (-\\csc^2(4t) \\cdot 4) = \\frac{8}{5}\\csc^2(4t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{8}{5}\\csc^2(4t)}{-20\\sin(4t)} = -\\frac{2}{25}\\csc^3(4t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_65",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 2t^2 + 2t$, $y = 3t^3 + 1t^2$.",
    "answer": "\\frac{36t^2 + 36t + 4}{(4t + 2)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 4t + 2, \\quad \\frac{dy}{dt} = 9t^2 + 2t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{9t^2 + 2t}{4t + 2} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(18t + 2)(4t + 2) - (9t^2 + 2t)(4)}{(4t + 2)^2} \\\\\n&= \\frac{72t^2 + 36t + 8t + 4 - 36t^2 - 8t}{(4t + 2)^2} \\\\\n&= \\frac{36t^2 + 36t + 4}{(4t + 2)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{36t^2 + 36t + 4}{(4t + 2)^2}}{4t + 2} \\\\\n&= \\frac{36t^2 + 36t + 4}{(4t + 2)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_65",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 4\\cos(3t)$ and $y = 2\\sin(3t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{1}{8}\\csc^3(3t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -12\\sin(3t), \\quad \\frac{dy}{dt} = 6\\cos(3t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{6\\cos(3t)}{-12\\sin(3t)} = -\\frac{1}{2}\\cot(3t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -\\frac{1}{2} \\cdot (-\\csc^2(3t) \\cdot 3) = \\frac{3}{2}\\csc^2(3t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{3}{2}\\csc^2(3t)}{-12\\sin(3t)} = -\\frac{1}{8}\\csc^3(3t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_66",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 1t^2 + 3t$, $y = 4t^3 + 3t^2$.",
    "answer": "\\frac{24t^2 + 72t + 18}{(2t + 3)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 2t + 3, \\quad \\frac{dy}{dt} = 12t^2 + 6t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{12t^2 + 6t}{2t + 3} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(24t + 6)(2t + 3) - (12t^2 + 6t)(2)}{(2t + 3)^2} \\\\\n&= \\frac{48t^2 + 72t + 12t + 18 - 24t^2 - 12t}{(2t + 3)^2} \\\\\n&= \\frac{24t^2 + 72t + 18}{(2t + 3)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{24t^2 + 72t + 18}{(2t + 3)^2}}{2t + 3} \\\\\n&= \\frac{24t^2 + 72t + 18}{(2t + 3)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_66",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 4\\cos(3t)$ and $y = 2\\sin(3t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{1}{8}\\csc^3(3t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -12\\sin(3t), \\quad \\frac{dy}{dt} = 6\\cos(3t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{6\\cos(3t)}{-12\\sin(3t)} = -\\frac{1}{2}\\cot(3t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -\\frac{1}{2} \\cdot (-\\csc^2(3t) \\cdot 3) = \\frac{3}{2}\\csc^2(3t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{3}{2}\\csc^2(3t)}{-12\\sin(3t)} = -\\frac{1}{8}\\csc^3(3t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_67",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 3t^2 + 3t$, $y = 3t^3 + 1t^2$.",
    "answer": "\\frac{54t^2 + 54t + 6}{(6t + 3)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 6t + 3, \\quad \\frac{dy}{dt} = 9t^2 + 2t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{9t^2 + 2t}{6t + 3} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(18t + 2)(6t + 3) - (9t^2 + 2t)(6)}{(6t + 3)^2} \\\\\n&= \\frac{108t^2 + 54t + 12t + 6 - 54t^2 - 12t}{(6t + 3)^2} \\\\\n&= \\frac{54t^2 + 54t + 6}{(6t + 3)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{54t^2 + 54t + 6}{(6t + 3)^2}}{6t + 3} \\\\\n&= \\frac{54t^2 + 54t + 6}{(6t + 3)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_67",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 6\\cos(3t)$ and $y = 4\\sin(3t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{1}{9}\\csc^3(3t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -18\\sin(3t), \\quad \\frac{dy}{dt} = 12\\cos(3t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{12\\cos(3t)}{-18\\sin(3t)} = -\\frac{2}{3}\\cot(3t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -\\frac{2}{3} \\cdot (-\\csc^2(3t) \\cdot 3) = 2\\csc^2(3t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{2\\csc^2(3t)}{-18\\sin(3t)} = -\\frac{1}{9}\\csc^3(3t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_68",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 3t^2 + 2t$, $y = 3t^3 + 4t^2$.",
    "answer": "\\frac{54t^2 + 36t + 16}{(6t + 2)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 6t + 2, \\quad \\frac{dy}{dt} = 9t^2 + 8t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{9t^2 + 8t}{6t + 2} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(18t + 8)(6t + 2) - (9t^2 + 8t)(6)}{(6t + 2)^2} \\\\\n&= \\frac{108t^2 + 36t + 48t + 16 - 54t^2 - 48t}{(6t + 2)^2} \\\\\n&= \\frac{54t^2 + 36t + 16}{(6t + 2)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{54t^2 + 36t + 16}{(6t + 2)^2}}{6t + 2} \\\\\n&= \\frac{54t^2 + 36t + 16}{(6t + 2)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_68",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 4\\cos(3t)$ and $y = 6\\sin(3t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{3}{8}\\csc^3(3t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -12\\sin(3t), \\quad \\frac{dy}{dt} = 18\\cos(3t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{18\\cos(3t)}{-12\\sin(3t)} = -\\frac{3}{2}\\cot(3t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -\\frac{3}{2} \\cdot (-\\csc^2(3t) \\cdot 3) = \\frac{9}{2}\\csc^2(3t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{9}{2}\\csc^2(3t)}{-12\\sin(3t)} = -\\frac{3}{8}\\csc^3(3t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_69",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 4t^2 + 1t$, $y = 1t^3 + 1t^2$.",
    "answer": "\\frac{24t^2 + 6t + 2}{(8t + 1)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 8t + 1, \\quad \\frac{dy}{dt} = 3t^2 + 2t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{3t^2 + 2t}{8t + 1} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(6t + 2)(8t + 1) - (3t^2 + 2t)(8)}{(8t + 1)^2} \\\\\n&= \\frac{48t^2 + 6t + 16t + 2 - 24t^2 - 16t}{(8t + 1)^2} \\\\\n&= \\frac{24t^2 + 6t + 2}{(8t + 1)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{24t^2 + 6t + 2}{(8t + 1)^2}}{8t + 1} \\\\\n&= \\frac{24t^2 + 6t + 2}{(8t + 1)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_69",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 5\\cos(4t)$ and $y = 4\\sin(4t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{4}{25}\\csc^3(4t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -20\\sin(4t), \\quad \\frac{dy}{dt} = 16\\cos(4t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{16\\cos(4t)}{-20\\sin(4t)} = -\\frac{4}{5}\\cot(4t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -\\frac{4}{5} \\cdot (-\\csc^2(4t) \\cdot 4) = \\frac{16}{5}\\csc^2(4t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{16}{5}\\csc^2(4t)}{-20\\sin(4t)} = -\\frac{4}{25}\\csc^3(4t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_70",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 2t^2 + 2t$, $y = 1t^3 + 4t^2$.",
    "answer": "\\frac{12t^2 + 12t + 16}{(4t + 2)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 4t + 2, \\quad \\frac{dy}{dt} = 3t^2 + 8t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{3t^2 + 8t}{4t + 2} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(6t + 8)(4t + 2) - (3t^2 + 8t)(4)}{(4t + 2)^2} \\\\\n&= \\frac{24t^2 + 12t + 32t + 16 - 12t^2 - 32t}{(4t + 2)^2} \\\\\n&= \\frac{12t^2 + 12t + 16}{(4t + 2)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{12t^2 + 12t + 16}{(4t + 2)^2}}{4t + 2} \\\\\n&= \\frac{12t^2 + 12t + 16}{(4t + 2)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_70",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 2\\cos(4t)$ and $y = 2\\sin(4t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{1}{2}\\csc^3(4t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -8\\sin(4t), \\quad \\frac{dy}{dt} = 8\\cos(4t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{8\\cos(4t)}{-8\\sin(4t)} = -\\cot(4t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= - \\cdot (-\\csc^2(4t) \\cdot 4) = 4\\csc^2(4t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{4\\csc^2(4t)}{-8\\sin(4t)} = -\\frac{1}{2}\\csc^3(4t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_71",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 3t^2 + 4t$, $y = 1t^3 + 1t^2$.",
    "answer": "\\frac{18t^2 + 24t + 8}{(6t + 4)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 6t + 4, \\quad \\frac{dy}{dt} = 3t^2 + 2t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{3t^2 + 2t}{6t + 4} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(6t + 2)(6t + 4) - (3t^2 + 2t)(6)}{(6t + 4)^2} \\\\\n&= \\frac{36t^2 + 24t + 12t + 8 - 18t^2 - 12t}{(6t + 4)^2} \\\\\n&= \\frac{18t^2 + 24t + 8}{(6t + 4)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{18t^2 + 24t + 8}{(6t + 4)^2}}{6t + 4} \\\\\n&= \\frac{18t^2 + 24t + 8}{(6t + 4)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_71",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 6\\cos(4t)$ and $y = 4\\sin(4t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{1}{9}\\csc^3(4t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -24\\sin(4t), \\quad \\frac{dy}{dt} = 16\\cos(4t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{16\\cos(4t)}{-24\\sin(4t)} = -\\frac{2}{3}\\cot(4t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -\\frac{2}{3} \\cdot (-\\csc^2(4t) \\cdot 4) = \\frac{8}{3}\\csc^2(4t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{8}{3}\\csc^2(4t)}{-24\\sin(4t)} = -\\frac{1}{9}\\csc^3(4t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_72",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 2t^2 + 2t$, $y = 4t^3 + 4t^2$.",
    "answer": "\\frac{48t^2 + 48t + 16}{(4t + 2)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 4t + 2, \\quad \\frac{dy}{dt} = 12t^2 + 8t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{12t^2 + 8t}{4t + 2} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(24t + 8)(4t + 2) - (12t^2 + 8t)(4)}{(4t + 2)^2} \\\\\n&= \\frac{96t^2 + 48t + 32t + 16 - 48t^2 - 32t}{(4t + 2)^2} \\\\\n&= \\frac{48t^2 + 48t + 16}{(4t + 2)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{48t^2 + 48t + 16}{(4t + 2)^2}}{4t + 2} \\\\\n&= \\frac{48t^2 + 48t + 16}{(4t + 2)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_72",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 4\\cos(3t)$ and $y = 2\\sin(3t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{1}{8}\\csc^3(3t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -12\\sin(3t), \\quad \\frac{dy}{dt} = 6\\cos(3t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{6\\cos(3t)}{-12\\sin(3t)} = -\\frac{1}{2}\\cot(3t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -\\frac{1}{2} \\cdot (-\\csc^2(3t) \\cdot 3) = \\frac{3}{2}\\csc^2(3t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{3}{2}\\csc^2(3t)}{-12\\sin(3t)} = -\\frac{1}{8}\\csc^3(3t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_73",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 2t^2 + 4t$, $y = 4t^3 + 4t^2$.",
    "answer": "\\frac{48t^2 + 96t + 32}{(4t + 4)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 4t + 4, \\quad \\frac{dy}{dt} = 12t^2 + 8t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{12t^2 + 8t}{4t + 4} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(24t + 8)(4t + 4) - (12t^2 + 8t)(4)}{(4t + 4)^2} \\\\\n&= \\frac{96t^2 + 96t + 32t + 32 - 48t^2 - 32t}{(4t + 4)^2} \\\\\n&= \\frac{48t^2 + 96t + 32}{(4t + 4)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{48t^2 + 96t + 32}{(4t + 4)^2}}{4t + 4} \\\\\n&= \\frac{48t^2 + 96t + 32}{(4t + 4)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_73",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 6\\cos(3t)$ and $y = 6\\sin(3t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{1}{6}\\csc^3(3t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -18\\sin(3t), \\quad \\frac{dy}{dt} = 18\\cos(3t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{18\\cos(3t)}{-18\\sin(3t)} = -\\cot(3t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= - \\cdot (-\\csc^2(3t) \\cdot 3) = 3\\csc^2(3t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{3\\csc^2(3t)}{-18\\sin(3t)} = -\\frac{1}{6}\\csc^3(3t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_poly_74",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the second derivative $\\frac{d^2y}{dx^2}$ for the parametric curve $x = 2t^2 + 1t$, $y = 3t^3 + 2t^2$.",
    "answer": "\\frac{36t^2 + 18t + 4}{(4t + 1)^3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 4t + 1, \\quad \\frac{dy}{dt} = 9t^2 + 4t \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{9t^2 + 4t}{4t + 1} \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= \\frac{(18t + 4)(4t + 1) - (9t^2 + 4t)(4)}{(4t + 1)^2} \\\\\n&= \\frac{72t^2 + 18t + 16t + 4 - 36t^2 - 16t}{(4t + 1)^2} \\\\\n&= \\frac{36t^2 + 18t + 4}{(4t + 1)^2} \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}} = \\frac{\\frac{36t^2 + 18t + 4}{(4t + 1)^2}}{4t + 1} \\\\\n&= \\frac{36t^2 + 18t + 4}{(4t + 1)^3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_sec_trig_74",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "For the parametric equations $x = 3\\cos(4t)$ and $y = 2\\sin(4t)$, find $\\frac{d^2y}{dx^2}$.",
    "answer": "-\\frac{2}{9}\\csc^3(4t)",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= -12\\sin(4t), \\quad \\frac{dy}{dt} = 8\\cos(4t) \\\\[10pt]\n\\frac{dy}{dx} &= \\frac{8\\cos(4t)}{-12\\sin(4t)} = -\\frac{2}{3}\\cot(4t) \\\\[10pt]\n\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) &= -\\frac{2}{3} \\cdot (-\\csc^2(4t) \\cdot 4) = \\frac{8}{3}\\csc^2(4t) \\\\[10pt]\n\\frac{d^2y}{dx^2} &= \\frac{\\frac{8}{3}\\csc^2(4t)}{-12\\sin(4t)} = -\\frac{2}{9}\\csc^3(4t)\n\\end{aligned}"
  },
  {
    "id": "gen_param_slope_0",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the slope of the curve defined by $x = 4t^2 - 1t$ and $y = t^3 + 1t$ at the point where $t = -1$.",
    "answer": "-\\frac{4}{9}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 8t - 1 \\implies \\left. \\frac{dx}{dt} \\right|_{t=-1} = -9 \\\\[10pt]\n\\frac{dy}{dt} &= 3t^2 + 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-1} = 4 \\\\[10pt]\n\\text{Slope } m &= \\left. \\frac{dy}{dx} \\right|_{t=-1} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{4}{-9} = -\\frac{4}{9}\n\\end{aligned}"
  },
  {
    "id": "gen_param_tangent_0",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the tangent line to the curve $x = t^2$, $y = 3t^3 - t$ at $t = -2$.",
    "answer": "-\\frac{35}{4}x + 13",
    "steps": "\\begin{aligned}\nx(-2) &= 1(-2)^2 = 4 \\\\\ny(-2) &= 3(-2)^3 - (-2) = -22 \\\\[10pt]\n\\frac{dx}{dt} &= 2t \\implies \\left. \\frac{dx}{dt} \\right|_{t=-2} = -4 \\\\\n\\frac{dy}{dt} &= 9t^2 - 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-2} = 35 \\\\[10pt]\nm &= \\frac{35}{-4} = -\\frac{35}{4} \\\\[10pt]\ny + 22 &= -\\frac{35}{4}(x - 4) \\\\\ny &= -\\frac{35}{4}x + 13\n\\end{aligned}"
  },
  {
    "id": "gen_param_normal_0",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the normal line to the curve $x = 2t^3 - t$, $y = t^2$ at $t = 2$.",
    "answer": "-\\frac{23}{4}x + \\frac{169}{2}",
    "steps": "\\begin{aligned}\nx(2) &= 2(2)^3 - 1(2) = 14 \\\\\ny(2) &= 1(2)^2 = 4 \\\\[10pt]\n\\left. \\frac{dx}{dt} \\right|_{t=2} &= 3(2)(2)^2 - 1 = 23 \\\\\n\\left. \\frac{dy}{dt} \\right|_{t=2} &= 2(1)(2) = 4 \\\\[10pt]\nm_{tangent} &= \\frac{4}{23} = \\frac{4}{23} \\\\[10pt]\nm_{normal} &= -\\frac{1}{m_{tangent}} = -\\frac{23}{4} \\\\[10pt]\ny - 4 &= -\\frac{23}{4}(x - 14) \\\\\ny &= -\\frac{23}{4}x + \\frac{169}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_param_slope_1",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the slope of the curve defined by $x = 1t^2 - 2t$ and $y = t^3 + 2t$ at the point where $t = 2$.",
    "answer": "7",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 2t - 2 \\implies \\left. \\frac{dx}{dt} \\right|_{t=2} = 2 \\\\[10pt]\n\\frac{dy}{dt} &= 3t^2 + 2 \\implies \\left. \\frac{dy}{dt} \\right|_{t=2} = 14 \\\\[10pt]\n\\text{Slope } m &= \\left. \\frac{dy}{dx} \\right|_{t=2} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{14}{2} = 7\n\\end{aligned}"
  },
  {
    "id": "gen_param_tangent_1",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the tangent line to the curve $x = t^2$, $y = 3t^3 - t$ at $t = 2$.",
    "answer": "\\frac{35}{4}x - 13",
    "steps": "\\begin{aligned}\nx(2) &= 1(2)^2 = 4 \\\\\ny(2) &= 3(2)^3 - (2) = 22 \\\\[10pt]\n\\frac{dx}{dt} &= 2t \\implies \\left. \\frac{dx}{dt} \\right|_{t=2} = 4 \\\\\n\\frac{dy}{dt} &= 9t^2 - 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=2} = 35 \\\\[10pt]\nm &= \\frac{35}{4} = \\frac{35}{4} \\\\[10pt]\ny - 22 &= \\frac{35}{4}(x - 4) \\\\\ny &= \\frac{35}{4}x - 13\n\\end{aligned}"
  },
  {
    "id": "gen_param_normal_1",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the normal line to the curve $x = 3t^3 - 2t$, $y = 2t^2$ at $t = -2$.",
    "answer": "\\frac{17}{4}x + 93",
    "steps": "\\begin{aligned}\nx(-2) &= 3(-2)^3 - 2(-2) = -20 \\\\\ny(-2) &= 2(-2)^2 = 8 \\\\[10pt]\n\\left. \\frac{dx}{dt} \\right|_{t=-2} &= 3(3)(-2)^2 - 2 = 34 \\\\\n\\left. \\frac{dy}{dt} \\right|_{t=-2} &= 2(2)(-2) = -8 \\\\[10pt]\nm_{tangent} &= \\frac{-8}{34} = -\\frac{4}{17} \\\\[10pt]\nm_{normal} &= -\\frac{1}{m_{tangent}} = \\frac{17}{4} \\\\[10pt]\ny - 8 &= \\frac{17}{4}(x + 20) \\\\\ny &= \\frac{17}{4}x + 93\n\\end{aligned}"
  },
  {
    "id": "gen_param_slope_2",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the slope of the curve defined by $x = 2t^2 - 4t$ and $y = t^3 + 4t$ at the point where $t = -2$.",
    "answer": "-\\frac{4}{3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 4t - 4 \\implies \\left. \\frac{dx}{dt} \\right|_{t=-2} = -12 \\\\[10pt]\n\\frac{dy}{dt} &= 3t^2 + 4 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-2} = 16 \\\\[10pt]\n\\text{Slope } m &= \\left. \\frac{dy}{dx} \\right|_{t=-2} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{16}{-12} = -\\frac{4}{3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_tangent_2",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the tangent line to the curve $x = t^2$, $y = 3t^3 - t$ at $t = 1$.",
    "answer": "4x - 2",
    "steps": "\\begin{aligned}\nx(1) &= 1(1)^2 = 1 \\\\\ny(1) &= 3(1)^3 - (1) = 2 \\\\[10pt]\n\\frac{dx}{dt} &= 2t \\implies \\left. \\frac{dx}{dt} \\right|_{t=1} = 2 \\\\\n\\frac{dy}{dt} &= 9t^2 - 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=1} = 8 \\\\[10pt]\nm &= \\frac{8}{2} = 4 \\\\[10pt]\ny - 2 &= 4(x - 1) \\\\\ny &= 4x - 2\n\\end{aligned}"
  },
  {
    "id": "gen_param_normal_2",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the normal line to the curve $x = t^3 - 3t$, $y = t^2$ at $t = 2$.",
    "answer": "-\\frac{9}{4}x + \\frac{17}{2}",
    "steps": "\\begin{aligned}\nx(2) &= 1(2)^3 - 3(2) = 2 \\\\\ny(2) &= 1(2)^2 = 4 \\\\[10pt]\n\\left. \\frac{dx}{dt} \\right|_{t=2} &= 3(1)(2)^2 - 3 = 9 \\\\\n\\left. \\frac{dy}{dt} \\right|_{t=2} &= 2(1)(2) = 4 \\\\[10pt]\nm_{tangent} &= \\frac{4}{9} = \\frac{4}{9} \\\\[10pt]\nm_{normal} &= -\\frac{1}{m_{tangent}} = -\\frac{9}{4} \\\\[10pt]\ny - 4 &= -\\frac{9}{4}(x - 2) \\\\\ny &= -\\frac{9}{4}x + \\frac{17}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_param_slope_3",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the slope of the curve defined by $x = 4t^2 - 4t$ and $y = t^3 + 4t$ at the point where $t = -1$.",
    "answer": "-\\frac{7}{12}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 8t - 4 \\implies \\left. \\frac{dx}{dt} \\right|_{t=-1} = -12 \\\\[10pt]\n\\frac{dy}{dt} &= 3t^2 + 4 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-1} = 7 \\\\[10pt]\n\\text{Slope } m &= \\left. \\frac{dy}{dx} \\right|_{t=-1} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{7}{-12} = -\\frac{7}{12}\n\\end{aligned}"
  },
  {
    "id": "gen_param_tangent_3",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the tangent line to the curve $x = 2t^2$, $y = t^3 - t$ at $t = -2$.",
    "answer": "-\\frac{11}{8}x + 5",
    "steps": "\\begin{aligned}\nx(-2) &= 2(-2)^2 = 8 \\\\\ny(-2) &= 1(-2)^3 - (-2) = -6 \\\\[10pt]\n\\frac{dx}{dt} &= 4t \\implies \\left. \\frac{dx}{dt} \\right|_{t=-2} = -8 \\\\\n\\frac{dy}{dt} &= 3t^2 - 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-2} = 11 \\\\[10pt]\nm &= \\frac{11}{-8} = -\\frac{11}{8} \\\\[10pt]\ny + 6 &= -\\frac{11}{8}(x - 8) \\\\\ny &= -\\frac{11}{8}x + 5\n\\end{aligned}"
  },
  {
    "id": "gen_param_normal_3",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the normal line to the curve $x = t^3 - t$, $y = 3t^2$ at $t = -1$.",
    "answer": "\\frac{1}{3}x + 3",
    "steps": "\\begin{aligned}\nx(-1) &= 1(-1)^3 - 1(-1) = 0 \\\\\ny(-1) &= 3(-1)^2 = 3 \\\\[10pt]\n\\left. \\frac{dx}{dt} \\right|_{t=-1} &= 3(1)(-1)^2 - 1 = 2 \\\\\n\\left. \\frac{dy}{dt} \\right|_{t=-1} &= 2(3)(-1) = -6 \\\\[10pt]\nm_{tangent} &= \\frac{-6}{2} = -3 \\\\[10pt]\nm_{normal} &= -\\frac{1}{m_{tangent}} = \\frac{1}{3} \\\\[10pt]\ny - 3 &= \\frac{1}{3}(x - 0) \\\\\ny &= \\frac{1}{3}x + 3\n\\end{aligned}"
  },
  {
    "id": "gen_param_slope_4",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the slope of the curve defined by $x = 5t^2 - 4t$ and $y = t^3 + 4t$ at the point where $t = 1$.",
    "answer": "\\frac{7}{6}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 10t - 4 \\implies \\left. \\frac{dx}{dt} \\right|_{t=1} = 6 \\\\[10pt]\n\\frac{dy}{dt} &= 3t^2 + 4 \\implies \\left. \\frac{dy}{dt} \\right|_{t=1} = 7 \\\\[10pt]\n\\text{Slope } m &= \\left. \\frac{dy}{dx} \\right|_{t=1} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{7}{6} = \\frac{7}{6}\n\\end{aligned}"
  },
  {
    "id": "gen_param_tangent_4",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the tangent line to the curve $x = 3t^2$, $y = t^3 - t$ at $t = -3$.",
    "answer": "-\\frac{13}{9}x + 15",
    "steps": "\\begin{aligned}\nx(-3) &= 3(-3)^2 = 27 \\\\\ny(-3) &= 1(-3)^3 - (-3) = -24 \\\\[10pt]\n\\frac{dx}{dt} &= 6t \\implies \\left. \\frac{dx}{dt} \\right|_{t=-3} = -18 \\\\\n\\frac{dy}{dt} &= 3t^2 - 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-3} = 26 \\\\[10pt]\nm &= \\frac{26}{-18} = -\\frac{13}{9} \\\\[10pt]\ny + 24 &= -\\frac{13}{9}(x - 27) \\\\\ny &= -\\frac{13}{9}x + 15\n\\end{aligned}"
  },
  {
    "id": "gen_param_normal_4",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the normal line to the curve $x = t^3 - 3t$, $y = 3t^2$ at $t = 2$.",
    "answer": "-\\frac{3}{4}x + \\frac{27}{2}",
    "steps": "\\begin{aligned}\nx(2) &= 1(2)^3 - 3(2) = 2 \\\\\ny(2) &= 3(2)^2 = 12 \\\\[10pt]\n\\left. \\frac{dx}{dt} \\right|_{t=2} &= 3(1)(2)^2 - 3 = 9 \\\\\n\\left. \\frac{dy}{dt} \\right|_{t=2} &= 2(3)(2) = 12 \\\\[10pt]\nm_{tangent} &= \\frac{12}{9} = \\frac{4}{3} \\\\[10pt]\nm_{normal} &= -\\frac{1}{m_{tangent}} = -\\frac{3}{4} \\\\[10pt]\ny - 12 &= -\\frac{3}{4}(x - 2) \\\\\ny &= -\\frac{3}{4}x + \\frac{27}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_param_slope_5",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the slope of the curve defined by $x = 3t^2 - 4t$ and $y = t^3 + 4t$ at the point where $t = -3$.",
    "answer": "-\\frac{31}{22}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 6t - 4 \\implies \\left. \\frac{dx}{dt} \\right|_{t=-3} = -22 \\\\[10pt]\n\\frac{dy}{dt} &= 3t^2 + 4 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-3} = 31 \\\\[10pt]\n\\text{Slope } m &= \\left. \\frac{dy}{dx} \\right|_{t=-3} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{31}{-22} = -\\frac{31}{22}\n\\end{aligned}"
  },
  {
    "id": "gen_param_tangent_5",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the tangent line to the curve $x = 3t^2$, $y = 2t^3 - t$ at $t = 3$.",
    "answer": "\\frac{53}{18}x - \\frac{57}{2}",
    "steps": "\\begin{aligned}\nx(3) &= 3(3)^2 = 27 \\\\\ny(3) &= 2(3)^3 - (3) = 51 \\\\[10pt]\n\\frac{dx}{dt} &= 6t \\implies \\left. \\frac{dx}{dt} \\right|_{t=3} = 18 \\\\\n\\frac{dy}{dt} &= 6t^2 - 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=3} = 53 \\\\[10pt]\nm &= \\frac{53}{18} = \\frac{53}{18} \\\\[10pt]\ny - 51 &= \\frac{53}{18}(x - 27) \\\\\ny &= \\frac{53}{18}x - \\frac{57}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_param_normal_5",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the normal line to the curve $x = 2t^3 - 3t$, $y = 3t^2$ at $t = -1$.",
    "answer": "\\frac{1}{2}x + \\frac{5}{2}",
    "steps": "\\begin{aligned}\nx(-1) &= 2(-1)^3 - 3(-1) = 1 \\\\\ny(-1) &= 3(-1)^2 = 3 \\\\[10pt]\n\\left. \\frac{dx}{dt} \\right|_{t=-1} &= 3(2)(-1)^2 - 3 = 3 \\\\\n\\left. \\frac{dy}{dt} \\right|_{t=-1} &= 2(3)(-1) = -6 \\\\[10pt]\nm_{tangent} &= \\frac{-6}{3} = -2 \\\\[10pt]\nm_{normal} &= -\\frac{1}{m_{tangent}} = \\frac{1}{2} \\\\[10pt]\ny - 3 &= \\frac{1}{2}(x - 1) \\\\\ny &= \\frac{1}{2}x + \\frac{5}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_param_slope_6",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the slope of the curve defined by $x = 3t^2 - 2t$ and $y = t^3 + 2t$ at the point where $t = 1$.",
    "answer": "\\frac{5}{4}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 6t - 2 \\implies \\left. \\frac{dx}{dt} \\right|_{t=1} = 4 \\\\[10pt]\n\\frac{dy}{dt} &= 3t^2 + 2 \\implies \\left. \\frac{dy}{dt} \\right|_{t=1} = 5 \\\\[10pt]\n\\text{Slope } m &= \\left. \\frac{dy}{dx} \\right|_{t=1} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{5}{4} = \\frac{5}{4}\n\\end{aligned}"
  },
  {
    "id": "gen_param_tangent_6",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the tangent line to the curve $x = 2t^2$, $y = t^3 - t$ at $t = 3$.",
    "answer": "\\frac{13}{6}x - 15",
    "steps": "\\begin{aligned}\nx(3) &= 2(3)^2 = 18 \\\\\ny(3) &= 1(3)^3 - (3) = 24 \\\\[10pt]\n\\frac{dx}{dt} &= 4t \\implies \\left. \\frac{dx}{dt} \\right|_{t=3} = 12 \\\\\n\\frac{dy}{dt} &= 3t^2 - 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=3} = 26 \\\\[10pt]\nm &= \\frac{26}{12} = \\frac{13}{6} \\\\[10pt]\ny - 24 &= \\frac{13}{6}(x - 18) \\\\\ny &= \\frac{13}{6}x - 15\n\\end{aligned}"
  },
  {
    "id": "gen_param_normal_6",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the normal line to the curve $x = 3t^3 - 2t$, $y = 4t^2$ at $t = 1$.",
    "answer": "-\\frac{7}{8}x + \\frac{39}{8}",
    "steps": "\\begin{aligned}\nx(1) &= 3(1)^3 - 2(1) = 1 \\\\\ny(1) &= 4(1)^2 = 4 \\\\[10pt]\n\\left. \\frac{dx}{dt} \\right|_{t=1} &= 3(3)(1)^2 - 2 = 7 \\\\\n\\left. \\frac{dy}{dt} \\right|_{t=1} &= 2(4)(1) = 8 \\\\[10pt]\nm_{tangent} &= \\frac{8}{7} = \\frac{8}{7} \\\\[10pt]\nm_{normal} &= -\\frac{1}{m_{tangent}} = -\\frac{7}{8} \\\\[10pt]\ny - 4 &= -\\frac{7}{8}(x - 1) \\\\\ny &= -\\frac{7}{8}x + \\frac{39}{8}\n\\end{aligned}"
  },
  {
    "id": "gen_param_slope_7",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the slope of the curve defined by $x = 2t^2 - 5t$ and $y = t^3 + 5t$ at the point where $t = 3$.",
    "answer": "\\frac{32}{7}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 4t - 5 \\implies \\left. \\frac{dx}{dt} \\right|_{t=3} = 7 \\\\[10pt]\n\\frac{dy}{dt} &= 3t^2 + 5 \\implies \\left. \\frac{dy}{dt} \\right|_{t=3} = 32 \\\\[10pt]\n\\text{Slope } m &= \\left. \\frac{dy}{dx} \\right|_{t=3} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{32}{7} = \\frac{32}{7}\n\\end{aligned}"
  },
  {
    "id": "gen_param_tangent_7",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the tangent line to the curve $x = 3t^2$, $y = t^3 - t$ at $t = -3$.",
    "answer": "-\\frac{13}{9}x + 15",
    "steps": "\\begin{aligned}\nx(-3) &= 3(-3)^2 = 27 \\\\\ny(-3) &= 1(-3)^3 - (-3) = -24 \\\\[10pt]\n\\frac{dx}{dt} &= 6t \\implies \\left. \\frac{dx}{dt} \\right|_{t=-3} = -18 \\\\\n\\frac{dy}{dt} &= 3t^2 - 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-3} = 26 \\\\[10pt]\nm &= \\frac{26}{-18} = -\\frac{13}{9} \\\\[10pt]\ny + 24 &= -\\frac{13}{9}(x - 27) \\\\\ny &= -\\frac{13}{9}x + 15\n\\end{aligned}"
  },
  {
    "id": "gen_param_normal_7",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the normal line to the curve $x = 3t^3 - 2t$, $y = t^2$ at $t = -1$.",
    "answer": "\\frac{7}{2}x + \\frac{9}{2}",
    "steps": "\\begin{aligned}\nx(-1) &= 3(-1)^3 - 2(-1) = -1 \\\\\ny(-1) &= 1(-1)^2 = 1 \\\\[10pt]\n\\left. \\frac{dx}{dt} \\right|_{t=-1} &= 3(3)(-1)^2 - 2 = 7 \\\\\n\\left. \\frac{dy}{dt} \\right|_{t=-1} &= 2(1)(-1) = -2 \\\\[10pt]\nm_{tangent} &= \\frac{-2}{7} = -\\frac{2}{7} \\\\[10pt]\nm_{normal} &= -\\frac{1}{m_{tangent}} = \\frac{7}{2} \\\\[10pt]\ny - 1 &= \\frac{7}{2}(x + 1) \\\\\ny &= \\frac{7}{2}x + \\frac{9}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_param_slope_8",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the slope of the curve defined by $x = 1t^2 - 1t$ and $y = t^3 + 1t$ at the point where $t = -3$.",
    "answer": "-4",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 2t - 1 \\implies \\left. \\frac{dx}{dt} \\right|_{t=-3} = -7 \\\\[10pt]\n\\frac{dy}{dt} &= 3t^2 + 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-3} = 28 \\\\[10pt]\n\\text{Slope } m &= \\left. \\frac{dy}{dx} \\right|_{t=-3} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{28}{-7} = -4\n\\end{aligned}"
  },
  {
    "id": "gen_param_tangent_8",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the tangent line to the curve $x = t^2$, $y = 3t^3 - t$ at $t = -3$.",
    "answer": "-\\frac{40}{3}x + 42",
    "steps": "\\begin{aligned}\nx(-3) &= 1(-3)^2 = 9 \\\\\ny(-3) &= 3(-3)^3 - (-3) = -78 \\\\[10pt]\n\\frac{dx}{dt} &= 2t \\implies \\left. \\frac{dx}{dt} \\right|_{t=-3} = -6 \\\\\n\\frac{dy}{dt} &= 9t^2 - 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-3} = 80 \\\\[10pt]\nm &= \\frac{80}{-6} = -\\frac{40}{3} \\\\[10pt]\ny + 78 &= -\\frac{40}{3}(x - 9) \\\\\ny &= -\\frac{40}{3}x + 42\n\\end{aligned}"
  },
  {
    "id": "gen_param_normal_8",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the normal line to the curve $x = t^3 - 2t$, $y = t^2$ at $t = 2$.",
    "answer": "-\\frac{5}{2}x + 14",
    "steps": "\\begin{aligned}\nx(2) &= 1(2)^3 - 2(2) = 4 \\\\\ny(2) &= 1(2)^2 = 4 \\\\[10pt]\n\\left. \\frac{dx}{dt} \\right|_{t=2} &= 3(1)(2)^2 - 2 = 10 \\\\\n\\left. \\frac{dy}{dt} \\right|_{t=2} &= 2(1)(2) = 4 \\\\[10pt]\nm_{tangent} &= \\frac{4}{10} = \\frac{2}{5} \\\\[10pt]\nm_{normal} &= -\\frac{1}{m_{tangent}} = -\\frac{5}{2} \\\\[10pt]\ny - 4 &= -\\frac{5}{2}(x - 4) \\\\\ny &= -\\frac{5}{2}x + 14\n\\end{aligned}"
  },
  {
    "id": "gen_param_slope_9",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the slope of the curve defined by $x = 1t^2 - 2t$ and $y = t^3 + 2t$ at the point where $t = -3$.",
    "answer": "-\\frac{29}{8}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 2t - 2 \\implies \\left. \\frac{dx}{dt} \\right|_{t=-3} = -8 \\\\[10pt]\n\\frac{dy}{dt} &= 3t^2 + 2 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-3} = 29 \\\\[10pt]\n\\text{Slope } m &= \\left. \\frac{dy}{dx} \\right|_{t=-3} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{29}{-8} = -\\frac{29}{8}\n\\end{aligned}"
  },
  {
    "id": "gen_param_tangent_9",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the tangent line to the curve $x = 3t^2$, $y = t^3 - t$ at $t = 2$.",
    "answer": "\\frac{11}{12}x - 5",
    "steps": "\\begin{aligned}\nx(2) &= 3(2)^2 = 12 \\\\\ny(2) &= 1(2)^3 - (2) = 6 \\\\[10pt]\n\\frac{dx}{dt} &= 6t \\implies \\left. \\frac{dx}{dt} \\right|_{t=2} = 12 \\\\\n\\frac{dy}{dt} &= 3t^2 - 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=2} = 11 \\\\[10pt]\nm &= \\frac{11}{12} = \\frac{11}{12} \\\\[10pt]\ny - 6 &= \\frac{11}{12}(x - 12) \\\\\ny &= \\frac{11}{12}x - 5\n\\end{aligned}"
  },
  {
    "id": "gen_param_normal_9",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the normal line to the curve $x = 2t^3 - t$, $y = 4t^2$ at $t = -2$.",
    "answer": "\\frac{23}{16}x + \\frac{289}{8}",
    "steps": "\\begin{aligned}\nx(-2) &= 2(-2)^3 - 1(-2) = -14 \\\\\ny(-2) &= 4(-2)^2 = 16 \\\\[10pt]\n\\left. \\frac{dx}{dt} \\right|_{t=-2} &= 3(2)(-2)^2 - 1 = 23 \\\\\n\\left. \\frac{dy}{dt} \\right|_{t=-2} &= 2(4)(-2) = -16 \\\\[10pt]\nm_{tangent} &= \\frac{-16}{23} = -\\frac{16}{23} \\\\[10pt]\nm_{normal} &= -\\frac{1}{m_{tangent}} = \\frac{23}{16} \\\\[10pt]\ny - 16 &= \\frac{23}{16}(x + 14) \\\\\ny &= \\frac{23}{16}x + \\frac{289}{8}\n\\end{aligned}"
  },
  {
    "id": "gen_param_slope_10",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the slope of the curve defined by $x = 2t^2 - 4t$ and $y = t^3 + 4t$ at the point where $t = 3$.",
    "answer": "\\frac{31}{8}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 4t - 4 \\implies \\left. \\frac{dx}{dt} \\right|_{t=3} = 8 \\\\[10pt]\n\\frac{dy}{dt} &= 3t^2 + 4 \\implies \\left. \\frac{dy}{dt} \\right|_{t=3} = 31 \\\\[10pt]\n\\text{Slope } m &= \\left. \\frac{dy}{dx} \\right|_{t=3} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{31}{8} = \\frac{31}{8}\n\\end{aligned}"
  },
  {
    "id": "gen_param_tangent_10",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the tangent line to the curve $x = t^2$, $y = 2t^3 - t$ at $t = -3$.",
    "answer": "-\\frac{53}{6}x + \\frac{57}{2}",
    "steps": "\\begin{aligned}\nx(-3) &= 1(-3)^2 = 9 \\\\\ny(-3) &= 2(-3)^3 - (-3) = -51 \\\\[10pt]\n\\frac{dx}{dt} &= 2t \\implies \\left. \\frac{dx}{dt} \\right|_{t=-3} = -6 \\\\\n\\frac{dy}{dt} &= 6t^2 - 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-3} = 53 \\\\[10pt]\nm &= \\frac{53}{-6} = -\\frac{53}{6} \\\\[10pt]\ny + 51 &= -\\frac{53}{6}(x - 9) \\\\\ny &= -\\frac{53}{6}x + \\frac{57}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_param_normal_10",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the normal line to the curve $x = 3t^3 - 2t$, $y = 3t^2$ at $t = -1$.",
    "answer": "\\frac{7}{6}x + \\frac{25}{6}",
    "steps": "\\begin{aligned}\nx(-1) &= 3(-1)^3 - 2(-1) = -1 \\\\\ny(-1) &= 3(-1)^2 = 3 \\\\[10pt]\n\\left. \\frac{dx}{dt} \\right|_{t=-1} &= 3(3)(-1)^2 - 2 = 7 \\\\\n\\left. \\frac{dy}{dt} \\right|_{t=-1} &= 2(3)(-1) = -6 \\\\[10pt]\nm_{tangent} &= \\frac{-6}{7} = -\\frac{6}{7} \\\\[10pt]\nm_{normal} &= -\\frac{1}{m_{tangent}} = \\frac{7}{6} \\\\[10pt]\ny - 3 &= \\frac{7}{6}(x + 1) \\\\\ny &= \\frac{7}{6}x + \\frac{25}{6}\n\\end{aligned}"
  },
  {
    "id": "gen_param_slope_11",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the slope of the curve defined by $x = 1t^2 - 1t$ and $y = t^3 + 1t$ at the point where $t = -4$.",
    "answer": "-\\frac{49}{9}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 2t - 1 \\implies \\left. \\frac{dx}{dt} \\right|_{t=-4} = -9 \\\\[10pt]\n\\frac{dy}{dt} &= 3t^2 + 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-4} = 49 \\\\[10pt]\n\\text{Slope } m &= \\left. \\frac{dy}{dx} \\right|_{t=-4} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{49}{-9} = -\\frac{49}{9}\n\\end{aligned}"
  },
  {
    "id": "gen_param_tangent_11",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the tangent line to the curve $x = 3t^2$, $y = 3t^3 - t$ at $t = -1$.",
    "answer": "-\\frac{4}{3}x + 2",
    "steps": "\\begin{aligned}\nx(-1) &= 3(-1)^2 = 3 \\\\\ny(-1) &= 3(-1)^3 - (-1) = -2 \\\\[10pt]\n\\frac{dx}{dt} &= 6t \\implies \\left. \\frac{dx}{dt} \\right|_{t=-1} = -6 \\\\\n\\frac{dy}{dt} &= 9t^2 - 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-1} = 8 \\\\[10pt]\nm &= \\frac{8}{-6} = -\\frac{4}{3} \\\\[10pt]\ny + 2 &= -\\frac{4}{3}(x - 3) \\\\\ny &= -\\frac{4}{3}x + 2\n\\end{aligned}"
  },
  {
    "id": "gen_param_normal_11",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the normal line to the curve $x = 3t^3 - 2t$, $y = t^2$ at $t = 2$.",
    "answer": "-\\frac{17}{2}x + 174",
    "steps": "\\begin{aligned}\nx(2) &= 3(2)^3 - 2(2) = 20 \\\\\ny(2) &= 1(2)^2 = 4 \\\\[10pt]\n\\left. \\frac{dx}{dt} \\right|_{t=2} &= 3(3)(2)^2 - 2 = 34 \\\\\n\\left. \\frac{dy}{dt} \\right|_{t=2} &= 2(1)(2) = 4 \\\\[10pt]\nm_{tangent} &= \\frac{4}{34} = \\frac{2}{17} \\\\[10pt]\nm_{normal} &= -\\frac{1}{m_{tangent}} = -\\frac{17}{2} \\\\[10pt]\ny - 4 &= -\\frac{17}{2}(x - 20) \\\\\ny &= -\\frac{17}{2}x + 174\n\\end{aligned}"
  },
  {
    "id": "gen_param_slope_12",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the slope of the curve defined by $x = 5t^2 - 4t$ and $y = t^3 + 4t$ at the point where $t = -1$.",
    "answer": "-\\frac{1}{2}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 10t - 4 \\implies \\left. \\frac{dx}{dt} \\right|_{t=-1} = -14 \\\\[10pt]\n\\frac{dy}{dt} &= 3t^2 + 4 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-1} = 7 \\\\[10pt]\n\\text{Slope } m &= \\left. \\frac{dy}{dx} \\right|_{t=-1} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{7}{-14} = -\\frac{1}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_param_tangent_12",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the tangent line to the curve $x = 2t^2$, $y = 3t^3 - t$ at $t = -3$.",
    "answer": "-\\frac{20}{3}x + 42",
    "steps": "\\begin{aligned}\nx(-3) &= 2(-3)^2 = 18 \\\\\ny(-3) &= 3(-3)^3 - (-3) = -78 \\\\[10pt]\n\\frac{dx}{dt} &= 4t \\implies \\left. \\frac{dx}{dt} \\right|_{t=-3} = -12 \\\\\n\\frac{dy}{dt} &= 9t^2 - 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-3} = 80 \\\\[10pt]\nm &= \\frac{80}{-12} = -\\frac{20}{3} \\\\[10pt]\ny + 78 &= -\\frac{20}{3}(x - 18) \\\\\ny &= -\\frac{20}{3}x + 42\n\\end{aligned}"
  },
  {
    "id": "gen_param_normal_12",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the normal line to the curve $x = 2t^3 - 2t$, $y = t^2$ at $t = 1$.",
    "answer": "-2x + 1",
    "steps": "\\begin{aligned}\nx(1) &= 2(1)^3 - 2(1) = 0 \\\\\ny(1) &= 1(1)^2 = 1 \\\\[10pt]\n\\left. \\frac{dx}{dt} \\right|_{t=1} &= 3(2)(1)^2 - 2 = 4 \\\\\n\\left. \\frac{dy}{dt} \\right|_{t=1} &= 2(1)(1) = 2 \\\\[10pt]\nm_{tangent} &= \\frac{2}{4} = \\frac{1}{2} \\\\[10pt]\nm_{normal} &= -\\frac{1}{m_{tangent}} = -2 \\\\[10pt]\ny - 1 &= -2(x - 0) \\\\\ny &= -2x + 1\n\\end{aligned}"
  },
  {
    "id": "gen_param_slope_13",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the slope of the curve defined by $x = 3t^2 - 4t$ and $y = t^3 + 4t$ at the point where $t = 4$.",
    "answer": "\\frac{13}{5}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 6t - 4 \\implies \\left. \\frac{dx}{dt} \\right|_{t=4} = 20 \\\\[10pt]\n\\frac{dy}{dt} &= 3t^2 + 4 \\implies \\left. \\frac{dy}{dt} \\right|_{t=4} = 52 \\\\[10pt]\n\\text{Slope } m &= \\left. \\frac{dy}{dx} \\right|_{t=4} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{52}{20} = \\frac{13}{5}\n\\end{aligned}"
  },
  {
    "id": "gen_param_tangent_13",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the tangent line to the curve $x = 3t^2$, $y = t^3 - t$ at $t = 3$.",
    "answer": "\\frac{13}{9}x - 15",
    "steps": "\\begin{aligned}\nx(3) &= 3(3)^2 = 27 \\\\\ny(3) &= 1(3)^3 - (3) = 24 \\\\[10pt]\n\\frac{dx}{dt} &= 6t \\implies \\left. \\frac{dx}{dt} \\right|_{t=3} = 18 \\\\\n\\frac{dy}{dt} &= 3t^2 - 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=3} = 26 \\\\[10pt]\nm &= \\frac{26}{18} = \\frac{13}{9} \\\\[10pt]\ny - 24 &= \\frac{13}{9}(x - 27) \\\\\ny &= \\frac{13}{9}x - 15\n\\end{aligned}"
  },
  {
    "id": "gen_param_normal_13",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the normal line to the curve $x = 3t^3 - 2t$, $y = 4t^2$ at $t = 2$.",
    "answer": "-\\frac{17}{8}x + \\frac{117}{2}",
    "steps": "\\begin{aligned}\nx(2) &= 3(2)^3 - 2(2) = 20 \\\\\ny(2) &= 4(2)^2 = 16 \\\\[10pt]\n\\left. \\frac{dx}{dt} \\right|_{t=2} &= 3(3)(2)^2 - 2 = 34 \\\\\n\\left. \\frac{dy}{dt} \\right|_{t=2} &= 2(4)(2) = 16 \\\\[10pt]\nm_{tangent} &= \\frac{16}{34} = \\frac{8}{17} \\\\[10pt]\nm_{normal} &= -\\frac{1}{m_{tangent}} = -\\frac{17}{8} \\\\[10pt]\ny - 16 &= -\\frac{17}{8}(x - 20) \\\\\ny &= -\\frac{17}{8}x + \\frac{117}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_param_slope_14",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the slope of the curve defined by $x = 5t^2 - 2t$ and $y = t^3 + 2t$ at the point where $t = -1$.",
    "answer": "-\\frac{5}{12}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 10t - 2 \\implies \\left. \\frac{dx}{dt} \\right|_{t=-1} = -12 \\\\[10pt]\n\\frac{dy}{dt} &= 3t^2 + 2 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-1} = 5 \\\\[10pt]\n\\text{Slope } m &= \\left. \\frac{dy}{dx} \\right|_{t=-1} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{5}{-12} = -\\frac{5}{12}\n\\end{aligned}"
  },
  {
    "id": "gen_param_tangent_14",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the tangent line to the curve $x = 3t^2$, $y = t^3 - t$ at $t = 3$.",
    "answer": "\\frac{13}{9}x - 15",
    "steps": "\\begin{aligned}\nx(3) &= 3(3)^2 = 27 \\\\\ny(3) &= 1(3)^3 - (3) = 24 \\\\[10pt]\n\\frac{dx}{dt} &= 6t \\implies \\left. \\frac{dx}{dt} \\right|_{t=3} = 18 \\\\\n\\frac{dy}{dt} &= 3t^2 - 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=3} = 26 \\\\[10pt]\nm &= \\frac{26}{18} = \\frac{13}{9} \\\\[10pt]\ny - 24 &= \\frac{13}{9}(x - 27) \\\\\ny &= \\frac{13}{9}x - 15\n\\end{aligned}"
  },
  {
    "id": "gen_param_normal_14",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the normal line to the curve $x = 2t^3 - t$, $y = t^2$ at $t = -2$.",
    "answer": "\\frac{23}{4}x + \\frac{169}{2}",
    "steps": "\\begin{aligned}\nx(-2) &= 2(-2)^3 - 1(-2) = -14 \\\\\ny(-2) &= 1(-2)^2 = 4 \\\\[10pt]\n\\left. \\frac{dx}{dt} \\right|_{t=-2} &= 3(2)(-2)^2 - 1 = 23 \\\\\n\\left. \\frac{dy}{dt} \\right|_{t=-2} &= 2(1)(-2) = -4 \\\\[10pt]\nm_{tangent} &= \\frac{-4}{23} = -\\frac{4}{23} \\\\[10pt]\nm_{normal} &= -\\frac{1}{m_{tangent}} = \\frac{23}{4} \\\\[10pt]\ny - 4 &= \\frac{23}{4}(x + 14) \\\\\ny &= \\frac{23}{4}x + \\frac{169}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_param_slope_15",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the slope of the curve defined by $x = 5t^2 - 3t$ and $y = t^3 + 3t$ at the point where $t = 1$.",
    "answer": "\\frac{6}{7}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 10t - 3 \\implies \\left. \\frac{dx}{dt} \\right|_{t=1} = 7 \\\\[10pt]\n\\frac{dy}{dt} &= 3t^2 + 3 \\implies \\left. \\frac{dy}{dt} \\right|_{t=1} = 6 \\\\[10pt]\n\\text{Slope } m &= \\left. \\frac{dy}{dx} \\right|_{t=1} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{6}{7} = \\frac{6}{7}\n\\end{aligned}"
  },
  {
    "id": "gen_param_tangent_15",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the tangent line to the curve $x = t^2$, $y = 2t^3 - t$ at $t = 3$.",
    "answer": "\\frac{53}{6}x - \\frac{57}{2}",
    "steps": "\\begin{aligned}\nx(3) &= 1(3)^2 = 9 \\\\\ny(3) &= 2(3)^3 - (3) = 51 \\\\[10pt]\n\\frac{dx}{dt} &= 2t \\implies \\left. \\frac{dx}{dt} \\right|_{t=3} = 6 \\\\\n\\frac{dy}{dt} &= 6t^2 - 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=3} = 53 \\\\[10pt]\nm &= \\frac{53}{6} = \\frac{53}{6} \\\\[10pt]\ny - 51 &= \\frac{53}{6}(x - 9) \\\\\ny &= \\frac{53}{6}x - \\frac{57}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_param_normal_15",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the normal line to the curve $x = 2t^3 - 3t$, $y = 4t^2$ at $t = -1$.",
    "answer": "\\frac{3}{8}x + \\frac{29}{8}",
    "steps": "\\begin{aligned}\nx(-1) &= 2(-1)^3 - 3(-1) = 1 \\\\\ny(-1) &= 4(-1)^2 = 4 \\\\[10pt]\n\\left. \\frac{dx}{dt} \\right|_{t=-1} &= 3(2)(-1)^2 - 3 = 3 \\\\\n\\left. \\frac{dy}{dt} \\right|_{t=-1} &= 2(4)(-1) = -8 \\\\[10pt]\nm_{tangent} &= \\frac{-8}{3} = -\\frac{8}{3} \\\\[10pt]\nm_{normal} &= -\\frac{1}{m_{tangent}} = \\frac{3}{8} \\\\[10pt]\ny - 4 &= \\frac{3}{8}(x - 1) \\\\\ny &= \\frac{3}{8}x + \\frac{29}{8}\n\\end{aligned}"
  },
  {
    "id": "gen_param_slope_16",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the slope of the curve defined by $x = 4t^2 - 2t$ and $y = t^3 + 2t$ at the point where $t = 1$.",
    "answer": "\\frac{5}{6}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 8t - 2 \\implies \\left. \\frac{dx}{dt} \\right|_{t=1} = 6 \\\\[10pt]\n\\frac{dy}{dt} &= 3t^2 + 2 \\implies \\left. \\frac{dy}{dt} \\right|_{t=1} = 5 \\\\[10pt]\n\\text{Slope } m &= \\left. \\frac{dy}{dx} \\right|_{t=1} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{5}{6} = \\frac{5}{6}\n\\end{aligned}"
  },
  {
    "id": "gen_param_tangent_16",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the tangent line to the curve $x = 2t^2$, $y = 3t^3 - t$ at $t = -3$.",
    "answer": "-\\frac{20}{3}x + 42",
    "steps": "\\begin{aligned}\nx(-3) &= 2(-3)^2 = 18 \\\\\ny(-3) &= 3(-3)^3 - (-3) = -78 \\\\[10pt]\n\\frac{dx}{dt} &= 4t \\implies \\left. \\frac{dx}{dt} \\right|_{t=-3} = -12 \\\\\n\\frac{dy}{dt} &= 9t^2 - 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-3} = 80 \\\\[10pt]\nm &= \\frac{80}{-12} = -\\frac{20}{3} \\\\[10pt]\ny + 78 &= -\\frac{20}{3}(x - 18) \\\\\ny &= -\\frac{20}{3}x + 42\n\\end{aligned}"
  },
  {
    "id": "gen_param_normal_16",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the normal line to the curve $x = t^3 - 3t$, $y = 4t^2$ at $t = 2$.",
    "answer": "-\\frac{9}{16}x + \\frac{137}{8}",
    "steps": "\\begin{aligned}\nx(2) &= 1(2)^3 - 3(2) = 2 \\\\\ny(2) &= 4(2)^2 = 16 \\\\[10pt]\n\\left. \\frac{dx}{dt} \\right|_{t=2} &= 3(1)(2)^2 - 3 = 9 \\\\\n\\left. \\frac{dy}{dt} \\right|_{t=2} &= 2(4)(2) = 16 \\\\[10pt]\nm_{tangent} &= \\frac{16}{9} = \\frac{16}{9} \\\\[10pt]\nm_{normal} &= -\\frac{1}{m_{tangent}} = -\\frac{9}{16} \\\\[10pt]\ny - 16 &= -\\frac{9}{16}(x - 2) \\\\\ny &= -\\frac{9}{16}x + \\frac{137}{8}\n\\end{aligned}"
  },
  {
    "id": "gen_param_slope_17",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the slope of the curve defined by $x = 4t^2 - 1t$ and $y = t^3 + 1t$ at the point where $t = 3$.",
    "answer": "\\frac{28}{23}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 8t - 1 \\implies \\left. \\frac{dx}{dt} \\right|_{t=3} = 23 \\\\[10pt]\n\\frac{dy}{dt} &= 3t^2 + 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=3} = 28 \\\\[10pt]\n\\text{Slope } m &= \\left. \\frac{dy}{dx} \\right|_{t=3} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{28}{23} = \\frac{28}{23}\n\\end{aligned}"
  },
  {
    "id": "gen_param_tangent_17",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the tangent line to the curve $x = 2t^2$, $y = 2t^3 - t$ at $t = -2$.",
    "answer": "-\\frac{23}{8}x + 9",
    "steps": "\\begin{aligned}\nx(-2) &= 2(-2)^2 = 8 \\\\\ny(-2) &= 2(-2)^3 - (-2) = -14 \\\\[10pt]\n\\frac{dx}{dt} &= 4t \\implies \\left. \\frac{dx}{dt} \\right|_{t=-2} = -8 \\\\\n\\frac{dy}{dt} &= 6t^2 - 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-2} = 23 \\\\[10pt]\nm &= \\frac{23}{-8} = -\\frac{23}{8} \\\\[10pt]\ny + 14 &= -\\frac{23}{8}(x - 8) \\\\\ny &= -\\frac{23}{8}x + 9\n\\end{aligned}"
  },
  {
    "id": "gen_param_normal_17",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the normal line to the curve $x = t^3 - t$, $y = 4t^2$ at $t = -2$.",
    "answer": "\\frac{11}{16}x + \\frac{161}{8}",
    "steps": "\\begin{aligned}\nx(-2) &= 1(-2)^3 - 1(-2) = -6 \\\\\ny(-2) &= 4(-2)^2 = 16 \\\\[10pt]\n\\left. \\frac{dx}{dt} \\right|_{t=-2} &= 3(1)(-2)^2 - 1 = 11 \\\\\n\\left. \\frac{dy}{dt} \\right|_{t=-2} &= 2(4)(-2) = -16 \\\\[10pt]\nm_{tangent} &= \\frac{-16}{11} = -\\frac{16}{11} \\\\[10pt]\nm_{normal} &= -\\frac{1}{m_{tangent}} = \\frac{11}{16} \\\\[10pt]\ny - 16 &= \\frac{11}{16}(x + 6) \\\\\ny &= \\frac{11}{16}x + \\frac{161}{8}\n\\end{aligned}"
  },
  {
    "id": "gen_param_slope_18",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the slope of the curve defined by $x = 4t^2 - 2t$ and $y = t^3 + 2t$ at the point where $t = -1$.",
    "answer": "-\\frac{1}{2}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 8t - 2 \\implies \\left. \\frac{dx}{dt} \\right|_{t=-1} = -10 \\\\[10pt]\n\\frac{dy}{dt} &= 3t^2 + 2 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-1} = 5 \\\\[10pt]\n\\text{Slope } m &= \\left. \\frac{dy}{dx} \\right|_{t=-1} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{5}{-10} = -\\frac{1}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_param_tangent_18",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the tangent line to the curve $x = 2t^2$, $y = 3t^3 - t$ at $t = 3$.",
    "answer": "\\frac{20}{3}x - 42",
    "steps": "\\begin{aligned}\nx(3) &= 2(3)^2 = 18 \\\\\ny(3) &= 3(3)^3 - (3) = 78 \\\\[10pt]\n\\frac{dx}{dt} &= 4t \\implies \\left. \\frac{dx}{dt} \\right|_{t=3} = 12 \\\\\n\\frac{dy}{dt} &= 9t^2 - 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=3} = 80 \\\\[10pt]\nm &= \\frac{80}{12} = \\frac{20}{3} \\\\[10pt]\ny - 78 &= \\frac{20}{3}(x - 18) \\\\\ny &= \\frac{20}{3}x - 42\n\\end{aligned}"
  },
  {
    "id": "gen_param_normal_18",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the normal line to the curve $x = t^3 - 3t$, $y = 4t^2$ at $t = -2$.",
    "answer": "\\frac{9}{16}x + \\frac{137}{8}",
    "steps": "\\begin{aligned}\nx(-2) &= 1(-2)^3 - 3(-2) = -2 \\\\\ny(-2) &= 4(-2)^2 = 16 \\\\[10pt]\n\\left. \\frac{dx}{dt} \\right|_{t=-2} &= 3(1)(-2)^2 - 3 = 9 \\\\\n\\left. \\frac{dy}{dt} \\right|_{t=-2} &= 2(4)(-2) = -16 \\\\[10pt]\nm_{tangent} &= \\frac{-16}{9} = -\\frac{16}{9} \\\\[10pt]\nm_{normal} &= -\\frac{1}{m_{tangent}} = \\frac{9}{16} \\\\[10pt]\ny - 16 &= \\frac{9}{16}(x + 2) \\\\\ny &= \\frac{9}{16}x + \\frac{137}{8}\n\\end{aligned}"
  },
  {
    "id": "gen_param_slope_19",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the slope of the curve defined by $x = 5t^2 - 3t$ and $y = t^3 + 3t$ at the point where $t = -2$.",
    "answer": "-\\frac{15}{23}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 10t - 3 \\implies \\left. \\frac{dx}{dt} \\right|_{t=-2} = -23 \\\\[10pt]\n\\frac{dy}{dt} &= 3t^2 + 3 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-2} = 15 \\\\[10pt]\n\\text{Slope } m &= \\left. \\frac{dy}{dx} \\right|_{t=-2} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{15}{-23} = -\\frac{15}{23}\n\\end{aligned}"
  },
  {
    "id": "gen_param_tangent_19",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the tangent line to the curve $x = t^2$, $y = 2t^3 - t$ at $t = -2$.",
    "answer": "-\\frac{23}{4}x + 9",
    "steps": "\\begin{aligned}\nx(-2) &= 1(-2)^2 = 4 \\\\\ny(-2) &= 2(-2)^3 - (-2) = -14 \\\\[10pt]\n\\frac{dx}{dt} &= 2t \\implies \\left. \\frac{dx}{dt} \\right|_{t=-2} = -4 \\\\\n\\frac{dy}{dt} &= 6t^2 - 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-2} = 23 \\\\[10pt]\nm &= \\frac{23}{-4} = -\\frac{23}{4} \\\\[10pt]\ny + 14 &= -\\frac{23}{4}(x - 4) \\\\\ny &= -\\frac{23}{4}x + 9\n\\end{aligned}"
  },
  {
    "id": "gen_param_normal_19",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the normal line to the curve $x = 2t^3 - 3t$, $y = 2t^2$ at $t = -1$.",
    "answer": "\\frac{3}{4}x + \\frac{5}{4}",
    "steps": "\\begin{aligned}\nx(-1) &= 2(-1)^3 - 3(-1) = 1 \\\\\ny(-1) &= 2(-1)^2 = 2 \\\\[10pt]\n\\left. \\frac{dx}{dt} \\right|_{t=-1} &= 3(2)(-1)^2 - 3 = 3 \\\\\n\\left. \\frac{dy}{dt} \\right|_{t=-1} &= 2(2)(-1) = -4 \\\\[10pt]\nm_{tangent} &= \\frac{-4}{3} = -\\frac{4}{3} \\\\[10pt]\nm_{normal} &= -\\frac{1}{m_{tangent}} = \\frac{3}{4} \\\\[10pt]\ny - 2 &= \\frac{3}{4}(x - 1) \\\\\ny &= \\frac{3}{4}x + \\frac{5}{4}\n\\end{aligned}"
  },
  {
    "id": "gen_param_slope_20",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the slope of the curve defined by $x = 2t^2 - 2t$ and $y = t^3 + 2t$ at the point where $t = -1$.",
    "answer": "-\\frac{5}{6}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 4t - 2 \\implies \\left. \\frac{dx}{dt} \\right|_{t=-1} = -6 \\\\[10pt]\n\\frac{dy}{dt} &= 3t^2 + 2 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-1} = 5 \\\\[10pt]\n\\text{Slope } m &= \\left. \\frac{dy}{dx} \\right|_{t=-1} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{5}{-6} = -\\frac{5}{6}\n\\end{aligned}"
  },
  {
    "id": "gen_param_tangent_20",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the tangent line to the curve $x = 3t^2$, $y = 3t^3 - t$ at $t = 3$.",
    "answer": "\\frac{40}{9}x - 42",
    "steps": "\\begin{aligned}\nx(3) &= 3(3)^2 = 27 \\\\\ny(3) &= 3(3)^3 - (3) = 78 \\\\[10pt]\n\\frac{dx}{dt} &= 6t \\implies \\left. \\frac{dx}{dt} \\right|_{t=3} = 18 \\\\\n\\frac{dy}{dt} &= 9t^2 - 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=3} = 80 \\\\[10pt]\nm &= \\frac{80}{18} = \\frac{40}{9} \\\\[10pt]\ny - 78 &= \\frac{40}{9}(x - 27) \\\\\ny &= \\frac{40}{9}x - 42\n\\end{aligned}"
  },
  {
    "id": "gen_param_normal_20",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the normal line to the curve $x = 2t^3 - t$, $y = 2t^2$ at $t = 2$.",
    "answer": "-\\frac{23}{8}x + \\frac{193}{4}",
    "steps": "\\begin{aligned}\nx(2) &= 2(2)^3 - 1(2) = 14 \\\\\ny(2) &= 2(2)^2 = 8 \\\\[10pt]\n\\left. \\frac{dx}{dt} \\right|_{t=2} &= 3(2)(2)^2 - 1 = 23 \\\\\n\\left. \\frac{dy}{dt} \\right|_{t=2} &= 2(2)(2) = 8 \\\\[10pt]\nm_{tangent} &= \\frac{8}{23} = \\frac{8}{23} \\\\[10pt]\nm_{normal} &= -\\frac{1}{m_{tangent}} = -\\frac{23}{8} \\\\[10pt]\ny - 8 &= -\\frac{23}{8}(x - 14) \\\\\ny &= -\\frac{23}{8}x + \\frac{193}{4}\n\\end{aligned}"
  },
  {
    "id": "gen_param_slope_21",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the slope of the curve defined by $x = 4t^2 - 1t$ and $y = t^3 + 1t$ at the point where $t = -3$.",
    "answer": "-\\frac{28}{25}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 8t - 1 \\implies \\left. \\frac{dx}{dt} \\right|_{t=-3} = -25 \\\\[10pt]\n\\frac{dy}{dt} &= 3t^2 + 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-3} = 28 \\\\[10pt]\n\\text{Slope } m &= \\left. \\frac{dy}{dx} \\right|_{t=-3} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{28}{-25} = -\\frac{28}{25}\n\\end{aligned}"
  },
  {
    "id": "gen_param_tangent_21",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the tangent line to the curve $x = 2t^2$, $y = 3t^3 - t$ at $t = -3$.",
    "answer": "-\\frac{20}{3}x + 42",
    "steps": "\\begin{aligned}\nx(-3) &= 2(-3)^2 = 18 \\\\\ny(-3) &= 3(-3)^3 - (-3) = -78 \\\\[10pt]\n\\frac{dx}{dt} &= 4t \\implies \\left. \\frac{dx}{dt} \\right|_{t=-3} = -12 \\\\\n\\frac{dy}{dt} &= 9t^2 - 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-3} = 80 \\\\[10pt]\nm &= \\frac{80}{-12} = -\\frac{20}{3} \\\\[10pt]\ny + 78 &= -\\frac{20}{3}(x - 18) \\\\\ny &= -\\frac{20}{3}x + 42\n\\end{aligned}"
  },
  {
    "id": "gen_param_normal_21",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the normal line to the curve $x = 3t^3 - 3t$, $y = 2t^2$ at $t = 1$.",
    "answer": "-\\frac{3}{2}x + 2",
    "steps": "\\begin{aligned}\nx(1) &= 3(1)^3 - 3(1) = 0 \\\\\ny(1) &= 2(1)^2 = 2 \\\\[10pt]\n\\left. \\frac{dx}{dt} \\right|_{t=1} &= 3(3)(1)^2 - 3 = 6 \\\\\n\\left. \\frac{dy}{dt} \\right|_{t=1} &= 2(2)(1) = 4 \\\\[10pt]\nm_{tangent} &= \\frac{4}{6} = \\frac{2}{3} \\\\[10pt]\nm_{normal} &= -\\frac{1}{m_{tangent}} = -\\frac{3}{2} \\\\[10pt]\ny - 2 &= -\\frac{3}{2}(x - 0) \\\\\ny &= -\\frac{3}{2}x + 2\n\\end{aligned}"
  },
  {
    "id": "gen_param_slope_22",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the slope of the curve defined by $x = 1t^2 - 4t$ and $y = t^3 + 4t$ at the point where $t = 1$.",
    "answer": "-\\frac{7}{2}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 2t - 4 \\implies \\left. \\frac{dx}{dt} \\right|_{t=1} = -2 \\\\[10pt]\n\\frac{dy}{dt} &= 3t^2 + 4 \\implies \\left. \\frac{dy}{dt} \\right|_{t=1} = 7 \\\\[10pt]\n\\text{Slope } m &= \\left. \\frac{dy}{dx} \\right|_{t=1} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{7}{-2} = -\\frac{7}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_param_tangent_22",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the tangent line to the curve $x = t^2$, $y = 2t^3 - t$ at $t = 3$.",
    "answer": "\\frac{53}{6}x - \\frac{57}{2}",
    "steps": "\\begin{aligned}\nx(3) &= 1(3)^2 = 9 \\\\\ny(3) &= 2(3)^3 - (3) = 51 \\\\[10pt]\n\\frac{dx}{dt} &= 2t \\implies \\left. \\frac{dx}{dt} \\right|_{t=3} = 6 \\\\\n\\frac{dy}{dt} &= 6t^2 - 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=3} = 53 \\\\[10pt]\nm &= \\frac{53}{6} = \\frac{53}{6} \\\\[10pt]\ny - 51 &= \\frac{53}{6}(x - 9) \\\\\ny &= \\frac{53}{6}x - \\frac{57}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_param_normal_22",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the normal line to the curve $x = t^3 - t$, $y = 3t^2$ at $t = 1$.",
    "answer": "-\\frac{1}{3}x + 3",
    "steps": "\\begin{aligned}\nx(1) &= 1(1)^3 - 1(1) = 0 \\\\\ny(1) &= 3(1)^2 = 3 \\\\[10pt]\n\\left. \\frac{dx}{dt} \\right|_{t=1} &= 3(1)(1)^2 - 1 = 2 \\\\\n\\left. \\frac{dy}{dt} \\right|_{t=1} &= 2(3)(1) = 6 \\\\[10pt]\nm_{tangent} &= \\frac{6}{2} = 3 \\\\[10pt]\nm_{normal} &= -\\frac{1}{m_{tangent}} = -\\frac{1}{3} \\\\[10pt]\ny - 3 &= -\\frac{1}{3}(x - 0) \\\\\ny &= -\\frac{1}{3}x + 3\n\\end{aligned}"
  },
  {
    "id": "gen_param_slope_23",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the slope of the curve defined by $x = 5t^2 - 3t$ and $y = t^3 + 3t$ at the point where $t = -2$.",
    "answer": "-\\frac{15}{23}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 10t - 3 \\implies \\left. \\frac{dx}{dt} \\right|_{t=-2} = -23 \\\\[10pt]\n\\frac{dy}{dt} &= 3t^2 + 3 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-2} = 15 \\\\[10pt]\n\\text{Slope } m &= \\left. \\frac{dy}{dx} \\right|_{t=-2} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{15}{-23} = -\\frac{15}{23}\n\\end{aligned}"
  },
  {
    "id": "gen_param_tangent_23",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the tangent line to the curve $x = t^2$, $y = t^3 - t$ at $t = 1$.",
    "answer": "x - 1",
    "steps": "\\begin{aligned}\nx(1) &= 1(1)^2 = 1 \\\\\ny(1) &= 1(1)^3 - (1) = 0 \\\\[10pt]\n\\frac{dx}{dt} &= 2t \\implies \\left. \\frac{dx}{dt} \\right|_{t=1} = 2 \\\\\n\\frac{dy}{dt} &= 3t^2 - 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=1} = 2 \\\\[10pt]\nm &= \\frac{2}{2} = 1 \\\\[10pt]\ny - 0 &= 1(x - 1) \\\\\ny &= x - 1\n\\end{aligned}"
  },
  {
    "id": "gen_param_normal_23",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the normal line to the curve $x = 2t^3 - 3t$, $y = t^2$ at $t = 1$.",
    "answer": "-\\frac{3}{2}x - \\frac{1}{2}",
    "steps": "\\begin{aligned}\nx(1) &= 2(1)^3 - 3(1) = -1 \\\\\ny(1) &= 1(1)^2 = 1 \\\\[10pt]\n\\left. \\frac{dx}{dt} \\right|_{t=1} &= 3(2)(1)^2 - 3 = 3 \\\\\n\\left. \\frac{dy}{dt} \\right|_{t=1} &= 2(1)(1) = 2 \\\\[10pt]\nm_{tangent} &= \\frac{2}{3} = \\frac{2}{3} \\\\[10pt]\nm_{normal} &= -\\frac{1}{m_{tangent}} = -\\frac{3}{2} \\\\[10pt]\ny - 1 &= -\\frac{3}{2}(x + 1) \\\\\ny &= -\\frac{3}{2}x - \\frac{1}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_param_slope_24",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the slope of the curve defined by $x = 2t^2 - 1t$ and $y = t^3 + 1t$ at the point where $t = -1$.",
    "answer": "-\\frac{4}{5}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 4t - 1 \\implies \\left. \\frac{dx}{dt} \\right|_{t=-1} = -5 \\\\[10pt]\n\\frac{dy}{dt} &= 3t^2 + 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-1} = 4 \\\\[10pt]\n\\text{Slope } m &= \\left. \\frac{dy}{dx} \\right|_{t=-1} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{4}{-5} = -\\frac{4}{5}\n\\end{aligned}"
  },
  {
    "id": "gen_param_tangent_24",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the tangent line to the curve $x = t^2$, $y = t^3 - t$ at $t = -3$.",
    "answer": "-\\frac{13}{3}x + 15",
    "steps": "\\begin{aligned}\nx(-3) &= 1(-3)^2 = 9 \\\\\ny(-3) &= 1(-3)^3 - (-3) = -24 \\\\[10pt]\n\\frac{dx}{dt} &= 2t \\implies \\left. \\frac{dx}{dt} \\right|_{t=-3} = -6 \\\\\n\\frac{dy}{dt} &= 3t^2 - 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-3} = 26 \\\\[10pt]\nm &= \\frac{26}{-6} = -\\frac{13}{3} \\\\[10pt]\ny + 24 &= -\\frac{13}{3}(x - 9) \\\\\ny &= -\\frac{13}{3}x + 15\n\\end{aligned}"
  },
  {
    "id": "gen_param_normal_24",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the normal line to the curve $x = 2t^3 - t$, $y = 2t^2$ at $t = 2$.",
    "answer": "-\\frac{23}{8}x + \\frac{193}{4}",
    "steps": "\\begin{aligned}\nx(2) &= 2(2)^3 - 1(2) = 14 \\\\\ny(2) &= 2(2)^2 = 8 \\\\[10pt]\n\\left. \\frac{dx}{dt} \\right|_{t=2} &= 3(2)(2)^2 - 1 = 23 \\\\\n\\left. \\frac{dy}{dt} \\right|_{t=2} &= 2(2)(2) = 8 \\\\[10pt]\nm_{tangent} &= \\frac{8}{23} = \\frac{8}{23} \\\\[10pt]\nm_{normal} &= -\\frac{1}{m_{tangent}} = -\\frac{23}{8} \\\\[10pt]\ny - 8 &= -\\frac{23}{8}(x - 14) \\\\\ny &= -\\frac{23}{8}x + \\frac{193}{4}\n\\end{aligned}"
  },
  {
    "id": "gen_param_slope_25",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the slope of the curve defined by $x = 3t^2 - 1t$ and $y = t^3 + 1t$ at the point where $t = 1$.",
    "answer": "\\frac{4}{5}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 6t - 1 \\implies \\left. \\frac{dx}{dt} \\right|_{t=1} = 5 \\\\[10pt]\n\\frac{dy}{dt} &= 3t^2 + 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=1} = 4 \\\\[10pt]\n\\text{Slope } m &= \\left. \\frac{dy}{dx} \\right|_{t=1} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{4}{5} = \\frac{4}{5}\n\\end{aligned}"
  },
  {
    "id": "gen_param_tangent_25",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the tangent line to the curve $x = 2t^2$, $y = t^3 - t$ at $t = -2$.",
    "answer": "-\\frac{11}{8}x + 5",
    "steps": "\\begin{aligned}\nx(-2) &= 2(-2)^2 = 8 \\\\\ny(-2) &= 1(-2)^3 - (-2) = -6 \\\\[10pt]\n\\frac{dx}{dt} &= 4t \\implies \\left. \\frac{dx}{dt} \\right|_{t=-2} = -8 \\\\\n\\frac{dy}{dt} &= 3t^2 - 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-2} = 11 \\\\[10pt]\nm &= \\frac{11}{-8} = -\\frac{11}{8} \\\\[10pt]\ny + 6 &= -\\frac{11}{8}(x - 8) \\\\\ny &= -\\frac{11}{8}x + 5\n\\end{aligned}"
  },
  {
    "id": "gen_param_normal_25",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the normal line to the curve $x = 3t^3 - 2t$, $y = 4t^2$ at $t = -2$.",
    "answer": "\\frac{17}{8}x + \\frac{117}{2}",
    "steps": "\\begin{aligned}\nx(-2) &= 3(-2)^3 - 2(-2) = -20 \\\\\ny(-2) &= 4(-2)^2 = 16 \\\\[10pt]\n\\left. \\frac{dx}{dt} \\right|_{t=-2} &= 3(3)(-2)^2 - 2 = 34 \\\\\n\\left. \\frac{dy}{dt} \\right|_{t=-2} &= 2(4)(-2) = -16 \\\\[10pt]\nm_{tangent} &= \\frac{-16}{34} = -\\frac{8}{17} \\\\[10pt]\nm_{normal} &= -\\frac{1}{m_{tangent}} = \\frac{17}{8} \\\\[10pt]\ny - 16 &= \\frac{17}{8}(x + 20) \\\\\ny &= \\frac{17}{8}x + \\frac{117}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_param_slope_26",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the slope of the curve defined by $x = 2t^2 - 5t$ and $y = t^3 + 5t$ at the point where $t = 2$.",
    "answer": "\\frac{17}{3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 4t - 5 \\implies \\left. \\frac{dx}{dt} \\right|_{t=2} = 3 \\\\[10pt]\n\\frac{dy}{dt} &= 3t^2 + 5 \\implies \\left. \\frac{dy}{dt} \\right|_{t=2} = 17 \\\\[10pt]\n\\text{Slope } m &= \\left. \\frac{dy}{dx} \\right|_{t=2} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{17}{3} = \\frac{17}{3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_tangent_26",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the tangent line to the curve $x = 2t^2$, $y = 2t^3 - t$ at $t = -1$.",
    "answer": "-\\frac{5}{4}x + \\frac{3}{2}",
    "steps": "\\begin{aligned}\nx(-1) &= 2(-1)^2 = 2 \\\\\ny(-1) &= 2(-1)^3 - (-1) = -1 \\\\[10pt]\n\\frac{dx}{dt} &= 4t \\implies \\left. \\frac{dx}{dt} \\right|_{t=-1} = -4 \\\\\n\\frac{dy}{dt} &= 6t^2 - 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-1} = 5 \\\\[10pt]\nm &= \\frac{5}{-4} = -\\frac{5}{4} \\\\[10pt]\ny + 1 &= -\\frac{5}{4}(x - 2) \\\\\ny &= -\\frac{5}{4}x + \\frac{3}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_param_normal_26",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the normal line to the curve $x = 3t^3 - 3t$, $y = 3t^2$ at $t = -1$.",
    "answer": "x + 3",
    "steps": "\\begin{aligned}\nx(-1) &= 3(-1)^3 - 3(-1) = 0 \\\\\ny(-1) &= 3(-1)^2 = 3 \\\\[10pt]\n\\left. \\frac{dx}{dt} \\right|_{t=-1} &= 3(3)(-1)^2 - 3 = 6 \\\\\n\\left. \\frac{dy}{dt} \\right|_{t=-1} &= 2(3)(-1) = -6 \\\\[10pt]\nm_{tangent} &= \\frac{-6}{6} = -1 \\\\[10pt]\nm_{normal} &= -\\frac{1}{m_{tangent}} = 1 \\\\[10pt]\ny - 3 &= 1(x - 0) \\\\\ny &= x + 3\n\\end{aligned}"
  },
  {
    "id": "gen_param_slope_27",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the slope of the curve defined by $x = 1t^2 - 4t$ and $y = t^3 + 4t$ at the point where $t = 3$.",
    "answer": "\\frac{31}{2}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 2t - 4 \\implies \\left. \\frac{dx}{dt} \\right|_{t=3} = 2 \\\\[10pt]\n\\frac{dy}{dt} &= 3t^2 + 4 \\implies \\left. \\frac{dy}{dt} \\right|_{t=3} = 31 \\\\[10pt]\n\\text{Slope } m &= \\left. \\frac{dy}{dx} \\right|_{t=3} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{31}{2} = \\frac{31}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_param_tangent_27",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the tangent line to the curve $x = 2t^2$, $y = t^3 - t$ at $t = 2$.",
    "answer": "\\frac{11}{8}x - 5",
    "steps": "\\begin{aligned}\nx(2) &= 2(2)^2 = 8 \\\\\ny(2) &= 1(2)^3 - (2) = 6 \\\\[10pt]\n\\frac{dx}{dt} &= 4t \\implies \\left. \\frac{dx}{dt} \\right|_{t=2} = 8 \\\\\n\\frac{dy}{dt} &= 3t^2 - 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=2} = 11 \\\\[10pt]\nm &= \\frac{11}{8} = \\frac{11}{8} \\\\[10pt]\ny - 6 &= \\frac{11}{8}(x - 8) \\\\\ny &= \\frac{11}{8}x - 5\n\\end{aligned}"
  },
  {
    "id": "gen_param_normal_27",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the normal line to the curve $x = 3t^3 - 3t$, $y = 2t^2$ at $t = 2$.",
    "answer": "-\\frac{33}{8}x + \\frac{329}{4}",
    "steps": "\\begin{aligned}\nx(2) &= 3(2)^3 - 3(2) = 18 \\\\\ny(2) &= 2(2)^2 = 8 \\\\[10pt]\n\\left. \\frac{dx}{dt} \\right|_{t=2} &= 3(3)(2)^2 - 3 = 33 \\\\\n\\left. \\frac{dy}{dt} \\right|_{t=2} &= 2(2)(2) = 8 \\\\[10pt]\nm_{tangent} &= \\frac{8}{33} = \\frac{8}{33} \\\\[10pt]\nm_{normal} &= -\\frac{1}{m_{tangent}} = -\\frac{33}{8} \\\\[10pt]\ny - 8 &= -\\frac{33}{8}(x - 18) \\\\\ny &= -\\frac{33}{8}x + \\frac{329}{4}\n\\end{aligned}"
  },
  {
    "id": "gen_param_slope_28",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the slope of the curve defined by $x = 1t^2 - 3t$ and $y = t^3 + 3t$ at the point where $t = -3$.",
    "answer": "-\\frac{10}{3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 2t - 3 \\implies \\left. \\frac{dx}{dt} \\right|_{t=-3} = -9 \\\\[10pt]\n\\frac{dy}{dt} &= 3t^2 + 3 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-3} = 30 \\\\[10pt]\n\\text{Slope } m &= \\left. \\frac{dy}{dx} \\right|_{t=-3} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{30}{-9} = -\\frac{10}{3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_tangent_28",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the tangent line to the curve $x = 2t^2$, $y = 3t^3 - t$ at $t = 3$.",
    "answer": "\\frac{20}{3}x - 42",
    "steps": "\\begin{aligned}\nx(3) &= 2(3)^2 = 18 \\\\\ny(3) &= 3(3)^3 - (3) = 78 \\\\[10pt]\n\\frac{dx}{dt} &= 4t \\implies \\left. \\frac{dx}{dt} \\right|_{t=3} = 12 \\\\\n\\frac{dy}{dt} &= 9t^2 - 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=3} = 80 \\\\[10pt]\nm &= \\frac{80}{12} = \\frac{20}{3} \\\\[10pt]\ny - 78 &= \\frac{20}{3}(x - 18) \\\\\ny &= \\frac{20}{3}x - 42\n\\end{aligned}"
  },
  {
    "id": "gen_param_normal_28",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the normal line to the curve $x = t^3 - 3t$, $y = 4t^2$ at $t = 2$.",
    "answer": "-\\frac{9}{16}x + \\frac{137}{8}",
    "steps": "\\begin{aligned}\nx(2) &= 1(2)^3 - 3(2) = 2 \\\\\ny(2) &= 4(2)^2 = 16 \\\\[10pt]\n\\left. \\frac{dx}{dt} \\right|_{t=2} &= 3(1)(2)^2 - 3 = 9 \\\\\n\\left. \\frac{dy}{dt} \\right|_{t=2} &= 2(4)(2) = 16 \\\\[10pt]\nm_{tangent} &= \\frac{16}{9} = \\frac{16}{9} \\\\[10pt]\nm_{normal} &= -\\frac{1}{m_{tangent}} = -\\frac{9}{16} \\\\[10pt]\ny - 16 &= -\\frac{9}{16}(x - 2) \\\\\ny &= -\\frac{9}{16}x + \\frac{137}{8}\n\\end{aligned}"
  },
  {
    "id": "gen_param_slope_29",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the slope of the curve defined by $x = 1t^2 - 2t$ and $y = t^3 + 2t$ at the point where $t = 3$.",
    "answer": "\\frac{29}{4}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 2t - 2 \\implies \\left. \\frac{dx}{dt} \\right|_{t=3} = 4 \\\\[10pt]\n\\frac{dy}{dt} &= 3t^2 + 2 \\implies \\left. \\frac{dy}{dt} \\right|_{t=3} = 29 \\\\[10pt]\n\\text{Slope } m &= \\left. \\frac{dy}{dx} \\right|_{t=3} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{29}{4} = \\frac{29}{4}\n\\end{aligned}"
  },
  {
    "id": "gen_param_tangent_29",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the tangent line to the curve $x = 3t^2$, $y = t^3 - t$ at $t = -2$.",
    "answer": "-\\frac{11}{12}x + 5",
    "steps": "\\begin{aligned}\nx(-2) &= 3(-2)^2 = 12 \\\\\ny(-2) &= 1(-2)^3 - (-2) = -6 \\\\[10pt]\n\\frac{dx}{dt} &= 6t \\implies \\left. \\frac{dx}{dt} \\right|_{t=-2} = -12 \\\\\n\\frac{dy}{dt} &= 3t^2 - 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-2} = 11 \\\\[10pt]\nm &= \\frac{11}{-12} = -\\frac{11}{12} \\\\[10pt]\ny + 6 &= -\\frac{11}{12}(x - 12) \\\\\ny &= -\\frac{11}{12}x + 5\n\\end{aligned}"
  },
  {
    "id": "gen_param_normal_29",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the normal line to the curve $x = 2t^3 - t$, $y = 2t^2$ at $t = -1$.",
    "answer": "\\frac{5}{4}x + \\frac{13}{4}",
    "steps": "\\begin{aligned}\nx(-1) &= 2(-1)^3 - 1(-1) = -1 \\\\\ny(-1) &= 2(-1)^2 = 2 \\\\[10pt]\n\\left. \\frac{dx}{dt} \\right|_{t=-1} &= 3(2)(-1)^2 - 1 = 5 \\\\\n\\left. \\frac{dy}{dt} \\right|_{t=-1} &= 2(2)(-1) = -4 \\\\[10pt]\nm_{tangent} &= \\frac{-4}{5} = -\\frac{4}{5} \\\\[10pt]\nm_{normal} &= -\\frac{1}{m_{tangent}} = \\frac{5}{4} \\\\[10pt]\ny - 2 &= \\frac{5}{4}(x + 1) \\\\\ny &= \\frac{5}{4}x + \\frac{13}{4}\n\\end{aligned}"
  },
  {
    "id": "gen_param_slope_30",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the slope of the curve defined by $x = 3t^2 - 5t$ and $y = t^3 + 5t$ at the point where $t = -4$.",
    "answer": "-\\frac{53}{29}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 6t - 5 \\implies \\left. \\frac{dx}{dt} \\right|_{t=-4} = -29 \\\\[10pt]\n\\frac{dy}{dt} &= 3t^2 + 5 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-4} = 53 \\\\[10pt]\n\\text{Slope } m &= \\left. \\frac{dy}{dx} \\right|_{t=-4} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{53}{-29} = -\\frac{53}{29}\n\\end{aligned}"
  },
  {
    "id": "gen_param_tangent_30",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the tangent line to the curve $x = 3t^2$, $y = t^3 - t$ at $t = 2$.",
    "answer": "\\frac{11}{12}x - 5",
    "steps": "\\begin{aligned}\nx(2) &= 3(2)^2 = 12 \\\\\ny(2) &= 1(2)^3 - (2) = 6 \\\\[10pt]\n\\frac{dx}{dt} &= 6t \\implies \\left. \\frac{dx}{dt} \\right|_{t=2} = 12 \\\\\n\\frac{dy}{dt} &= 3t^2 - 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=2} = 11 \\\\[10pt]\nm &= \\frac{11}{12} = \\frac{11}{12} \\\\[10pt]\ny - 6 &= \\frac{11}{12}(x - 12) \\\\\ny &= \\frac{11}{12}x - 5\n\\end{aligned}"
  },
  {
    "id": "gen_param_normal_30",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the normal line to the curve $x = 2t^3 - 3t$, $y = 3t^2$ at $t = 1$.",
    "answer": "-\\frac{1}{2}x + \\frac{5}{2}",
    "steps": "\\begin{aligned}\nx(1) &= 2(1)^3 - 3(1) = -1 \\\\\ny(1) &= 3(1)^2 = 3 \\\\[10pt]\n\\left. \\frac{dx}{dt} \\right|_{t=1} &= 3(2)(1)^2 - 3 = 3 \\\\\n\\left. \\frac{dy}{dt} \\right|_{t=1} &= 2(3)(1) = 6 \\\\[10pt]\nm_{tangent} &= \\frac{6}{3} = 2 \\\\[10pt]\nm_{normal} &= -\\frac{1}{m_{tangent}} = -\\frac{1}{2} \\\\[10pt]\ny - 3 &= -\\frac{1}{2}(x + 1) \\\\\ny &= -\\frac{1}{2}x + \\frac{5}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_param_slope_31",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the slope of the curve defined by $x = 5t^2 - 2t$ and $y = t^3 + 2t$ at the point where $t = 2$.",
    "answer": "\\frac{7}{9}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 10t - 2 \\implies \\left. \\frac{dx}{dt} \\right|_{t=2} = 18 \\\\[10pt]\n\\frac{dy}{dt} &= 3t^2 + 2 \\implies \\left. \\frac{dy}{dt} \\right|_{t=2} = 14 \\\\[10pt]\n\\text{Slope } m &= \\left. \\frac{dy}{dx} \\right|_{t=2} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{14}{18} = \\frac{7}{9}\n\\end{aligned}"
  },
  {
    "id": "gen_param_tangent_31",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the tangent line to the curve $x = 3t^2$, $y = 3t^3 - t$ at $t = 2$.",
    "answer": "\\frac{35}{12}x - 13",
    "steps": "\\begin{aligned}\nx(2) &= 3(2)^2 = 12 \\\\\ny(2) &= 3(2)^3 - (2) = 22 \\\\[10pt]\n\\frac{dx}{dt} &= 6t \\implies \\left. \\frac{dx}{dt} \\right|_{t=2} = 12 \\\\\n\\frac{dy}{dt} &= 9t^2 - 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=2} = 35 \\\\[10pt]\nm &= \\frac{35}{12} = \\frac{35}{12} \\\\[10pt]\ny - 22 &= \\frac{35}{12}(x - 12) \\\\\ny &= \\frac{35}{12}x - 13\n\\end{aligned}"
  },
  {
    "id": "gen_param_normal_31",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the normal line to the curve $x = 2t^3 - t$, $y = t^2$ at $t = -1$.",
    "answer": "\\frac{5}{2}x + \\frac{7}{2}",
    "steps": "\\begin{aligned}\nx(-1) &= 2(-1)^3 - 1(-1) = -1 \\\\\ny(-1) &= 1(-1)^2 = 1 \\\\[10pt]\n\\left. \\frac{dx}{dt} \\right|_{t=-1} &= 3(2)(-1)^2 - 1 = 5 \\\\\n\\left. \\frac{dy}{dt} \\right|_{t=-1} &= 2(1)(-1) = -2 \\\\[10pt]\nm_{tangent} &= \\frac{-2}{5} = -\\frac{2}{5} \\\\[10pt]\nm_{normal} &= -\\frac{1}{m_{tangent}} = \\frac{5}{2} \\\\[10pt]\ny - 1 &= \\frac{5}{2}(x + 1) \\\\\ny &= \\frac{5}{2}x + \\frac{7}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_param_slope_32",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the slope of the curve defined by $x = 1t^2 - 5t$ and $y = t^3 + 5t$ at the point where $t = -1$.",
    "answer": "-\\frac{8}{7}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 2t - 5 \\implies \\left. \\frac{dx}{dt} \\right|_{t=-1} = -7 \\\\[10pt]\n\\frac{dy}{dt} &= 3t^2 + 5 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-1} = 8 \\\\[10pt]\n\\text{Slope } m &= \\left. \\frac{dy}{dx} \\right|_{t=-1} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{8}{-7} = -\\frac{8}{7}\n\\end{aligned}"
  },
  {
    "id": "gen_param_tangent_32",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the tangent line to the curve $x = 3t^2$, $y = t^3 - t$ at $t = 1$.",
    "answer": "\\frac{1}{3}x - 1",
    "steps": "\\begin{aligned}\nx(1) &= 3(1)^2 = 3 \\\\\ny(1) &= 1(1)^3 - (1) = 0 \\\\[10pt]\n\\frac{dx}{dt} &= 6t \\implies \\left. \\frac{dx}{dt} \\right|_{t=1} = 6 \\\\\n\\frac{dy}{dt} &= 3t^2 - 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=1} = 2 \\\\[10pt]\nm &= \\frac{2}{6} = \\frac{1}{3} \\\\[10pt]\ny - 0 &= \\frac{1}{3}(x - 3) \\\\\ny &= \\frac{1}{3}x - 1\n\\end{aligned}"
  },
  {
    "id": "gen_param_normal_32",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the normal line to the curve $x = t^3 - 3t$, $y = 3t^2$ at $t = -2$.",
    "answer": "\\frac{3}{4}x + \\frac{27}{2}",
    "steps": "\\begin{aligned}\nx(-2) &= 1(-2)^3 - 3(-2) = -2 \\\\\ny(-2) &= 3(-2)^2 = 12 \\\\[10pt]\n\\left. \\frac{dx}{dt} \\right|_{t=-2} &= 3(1)(-2)^2 - 3 = 9 \\\\\n\\left. \\frac{dy}{dt} \\right|_{t=-2} &= 2(3)(-2) = -12 \\\\[10pt]\nm_{tangent} &= \\frac{-12}{9} = -\\frac{4}{3} \\\\[10pt]\nm_{normal} &= -\\frac{1}{m_{tangent}} = \\frac{3}{4} \\\\[10pt]\ny - 12 &= \\frac{3}{4}(x + 2) \\\\\ny &= \\frac{3}{4}x + \\frac{27}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_param_slope_33",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the slope of the curve defined by $x = 3t^2 - 4t$ and $y = t^3 + 4t$ at the point where $t = -1$.",
    "answer": "-\\frac{7}{10}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 6t - 4 \\implies \\left. \\frac{dx}{dt} \\right|_{t=-1} = -10 \\\\[10pt]\n\\frac{dy}{dt} &= 3t^2 + 4 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-1} = 7 \\\\[10pt]\n\\text{Slope } m &= \\left. \\frac{dy}{dx} \\right|_{t=-1} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{7}{-10} = -\\frac{7}{10}\n\\end{aligned}"
  },
  {
    "id": "gen_param_tangent_33",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the tangent line to the curve $x = 2t^2$, $y = t^3 - t$ at $t = 1$.",
    "answer": "\\frac{1}{2}x - 1",
    "steps": "\\begin{aligned}\nx(1) &= 2(1)^2 = 2 \\\\\ny(1) &= 1(1)^3 - (1) = 0 \\\\[10pt]\n\\frac{dx}{dt} &= 4t \\implies \\left. \\frac{dx}{dt} \\right|_{t=1} = 4 \\\\\n\\frac{dy}{dt} &= 3t^2 - 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=1} = 2 \\\\[10pt]\nm &= \\frac{2}{4} = \\frac{1}{2} \\\\[10pt]\ny - 0 &= \\frac{1}{2}(x - 2) \\\\\ny &= \\frac{1}{2}x - 1\n\\end{aligned}"
  },
  {
    "id": "gen_param_normal_33",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the normal line to the curve $x = 2t^3 - 2t$, $y = 3t^2$ at $t = 2$.",
    "answer": "-\\frac{11}{6}x + 34",
    "steps": "\\begin{aligned}\nx(2) &= 2(2)^3 - 2(2) = 12 \\\\\ny(2) &= 3(2)^2 = 12 \\\\[10pt]\n\\left. \\frac{dx}{dt} \\right|_{t=2} &= 3(2)(2)^2 - 2 = 22 \\\\\n\\left. \\frac{dy}{dt} \\right|_{t=2} &= 2(3)(2) = 12 \\\\[10pt]\nm_{tangent} &= \\frac{12}{22} = \\frac{6}{11} \\\\[10pt]\nm_{normal} &= -\\frac{1}{m_{tangent}} = -\\frac{11}{6} \\\\[10pt]\ny - 12 &= -\\frac{11}{6}(x - 12) \\\\\ny &= -\\frac{11}{6}x + 34\n\\end{aligned}"
  },
  {
    "id": "gen_param_slope_34",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the slope of the curve defined by $x = 2t^2 - 3t$ and $y = t^3 + 3t$ at the point where $t = 3$.",
    "answer": "\\frac{10}{3}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 4t - 3 \\implies \\left. \\frac{dx}{dt} \\right|_{t=3} = 9 \\\\[10pt]\n\\frac{dy}{dt} &= 3t^2 + 3 \\implies \\left. \\frac{dy}{dt} \\right|_{t=3} = 30 \\\\[10pt]\n\\text{Slope } m &= \\left. \\frac{dy}{dx} \\right|_{t=3} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{30}{9} = \\frac{10}{3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_tangent_34",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the tangent line to the curve $x = 2t^2$, $y = 2t^3 - t$ at $t = -3$.",
    "answer": "-\\frac{53}{12}x + \\frac{57}{2}",
    "steps": "\\begin{aligned}\nx(-3) &= 2(-3)^2 = 18 \\\\\ny(-3) &= 2(-3)^3 - (-3) = -51 \\\\[10pt]\n\\frac{dx}{dt} &= 4t \\implies \\left. \\frac{dx}{dt} \\right|_{t=-3} = -12 \\\\\n\\frac{dy}{dt} &= 6t^2 - 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-3} = 53 \\\\[10pt]\nm &= \\frac{53}{-12} = -\\frac{53}{12} \\\\[10pt]\ny + 51 &= -\\frac{53}{12}(x - 18) \\\\\ny &= -\\frac{53}{12}x + \\frac{57}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_param_normal_34",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the normal line to the curve $x = 2t^3 - 3t$, $y = 3t^2$ at $t = -1$.",
    "answer": "\\frac{1}{2}x + \\frac{5}{2}",
    "steps": "\\begin{aligned}\nx(-1) &= 2(-1)^3 - 3(-1) = 1 \\\\\ny(-1) &= 3(-1)^2 = 3 \\\\[10pt]\n\\left. \\frac{dx}{dt} \\right|_{t=-1} &= 3(2)(-1)^2 - 3 = 3 \\\\\n\\left. \\frac{dy}{dt} \\right|_{t=-1} &= 2(3)(-1) = -6 \\\\[10pt]\nm_{tangent} &= \\frac{-6}{3} = -2 \\\\[10pt]\nm_{normal} &= -\\frac{1}{m_{tangent}} = \\frac{1}{2} \\\\[10pt]\ny - 3 &= \\frac{1}{2}(x - 1) \\\\\ny &= \\frac{1}{2}x + \\frac{5}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_param_slope_35",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the slope of the curve defined by $x = 4t^2 - 1t$ and $y = t^3 + 1t$ at the point where $t = 2$.",
    "answer": "\\frac{13}{15}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 8t - 1 \\implies \\left. \\frac{dx}{dt} \\right|_{t=2} = 15 \\\\[10pt]\n\\frac{dy}{dt} &= 3t^2 + 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=2} = 13 \\\\[10pt]\n\\text{Slope } m &= \\left. \\frac{dy}{dx} \\right|_{t=2} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{13}{15} = \\frac{13}{15}\n\\end{aligned}"
  },
  {
    "id": "gen_param_tangent_35",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the tangent line to the curve $x = t^2$, $y = 3t^3 - t$ at $t = -2$.",
    "answer": "-\\frac{35}{4}x + 13",
    "steps": "\\begin{aligned}\nx(-2) &= 1(-2)^2 = 4 \\\\\ny(-2) &= 3(-2)^3 - (-2) = -22 \\\\[10pt]\n\\frac{dx}{dt} &= 2t \\implies \\left. \\frac{dx}{dt} \\right|_{t=-2} = -4 \\\\\n\\frac{dy}{dt} &= 9t^2 - 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-2} = 35 \\\\[10pt]\nm &= \\frac{35}{-4} = -\\frac{35}{4} \\\\[10pt]\ny + 22 &= -\\frac{35}{4}(x - 4) \\\\\ny &= -\\frac{35}{4}x + 13\n\\end{aligned}"
  },
  {
    "id": "gen_param_normal_35",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the normal line to the curve $x = t^3 - 3t$, $y = t^2$ at $t = 2$.",
    "answer": "-\\frac{9}{4}x + \\frac{17}{2}",
    "steps": "\\begin{aligned}\nx(2) &= 1(2)^3 - 3(2) = 2 \\\\\ny(2) &= 1(2)^2 = 4 \\\\[10pt]\n\\left. \\frac{dx}{dt} \\right|_{t=2} &= 3(1)(2)^2 - 3 = 9 \\\\\n\\left. \\frac{dy}{dt} \\right|_{t=2} &= 2(1)(2) = 4 \\\\[10pt]\nm_{tangent} &= \\frac{4}{9} = \\frac{4}{9} \\\\[10pt]\nm_{normal} &= -\\frac{1}{m_{tangent}} = -\\frac{9}{4} \\\\[10pt]\ny - 4 &= -\\frac{9}{4}(x - 2) \\\\\ny &= -\\frac{9}{4}x + \\frac{17}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_param_slope_36",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the slope of the curve defined by $x = 1t^2 - 5t$ and $y = t^3 + 5t$ at the point where $t = -4$.",
    "answer": "-\\frac{53}{13}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 2t - 5 \\implies \\left. \\frac{dx}{dt} \\right|_{t=-4} = -13 \\\\[10pt]\n\\frac{dy}{dt} &= 3t^2 + 5 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-4} = 53 \\\\[10pt]\n\\text{Slope } m &= \\left. \\frac{dy}{dx} \\right|_{t=-4} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{53}{-13} = -\\frac{53}{13}\n\\end{aligned}"
  },
  {
    "id": "gen_param_tangent_36",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the tangent line to the curve $x = t^2$, $y = t^3 - t$ at $t = -3$.",
    "answer": "-\\frac{13}{3}x + 15",
    "steps": "\\begin{aligned}\nx(-3) &= 1(-3)^2 = 9 \\\\\ny(-3) &= 1(-3)^3 - (-3) = -24 \\\\[10pt]\n\\frac{dx}{dt} &= 2t \\implies \\left. \\frac{dx}{dt} \\right|_{t=-3} = -6 \\\\\n\\frac{dy}{dt} &= 3t^2 - 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-3} = 26 \\\\[10pt]\nm &= \\frac{26}{-6} = -\\frac{13}{3} \\\\[10pt]\ny + 24 &= -\\frac{13}{3}(x - 9) \\\\\ny &= -\\frac{13}{3}x + 15\n\\end{aligned}"
  },
  {
    "id": "gen_param_normal_36",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the normal line to the curve $x = 2t^3 - 2t$, $y = 3t^2$ at $t = -1$.",
    "answer": "\\frac{2}{3}x + 3",
    "steps": "\\begin{aligned}\nx(-1) &= 2(-1)^3 - 2(-1) = 0 \\\\\ny(-1) &= 3(-1)^2 = 3 \\\\[10pt]\n\\left. \\frac{dx}{dt} \\right|_{t=-1} &= 3(2)(-1)^2 - 2 = 4 \\\\\n\\left. \\frac{dy}{dt} \\right|_{t=-1} &= 2(3)(-1) = -6 \\\\[10pt]\nm_{tangent} &= \\frac{-6}{4} = -\\frac{3}{2} \\\\[10pt]\nm_{normal} &= -\\frac{1}{m_{tangent}} = \\frac{2}{3} \\\\[10pt]\ny - 3 &= \\frac{2}{3}(x - 0) \\\\\ny &= \\frac{2}{3}x + 3\n\\end{aligned}"
  },
  {
    "id": "gen_param_slope_37",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the slope of the curve defined by $x = 2t^2 - 2t$ and $y = t^3 + 2t$ at the point where $t = 3$.",
    "answer": "\\frac{29}{10}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 4t - 2 \\implies \\left. \\frac{dx}{dt} \\right|_{t=3} = 10 \\\\[10pt]\n\\frac{dy}{dt} &= 3t^2 + 2 \\implies \\left. \\frac{dy}{dt} \\right|_{t=3} = 29 \\\\[10pt]\n\\text{Slope } m &= \\left. \\frac{dy}{dx} \\right|_{t=3} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{29}{10} = \\frac{29}{10}\n\\end{aligned}"
  },
  {
    "id": "gen_param_tangent_37",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the tangent line to the curve $x = 2t^2$, $y = 3t^3 - t$ at $t = -1$.",
    "answer": "-2x + 2",
    "steps": "\\begin{aligned}\nx(-1) &= 2(-1)^2 = 2 \\\\\ny(-1) &= 3(-1)^3 - (-1) = -2 \\\\[10pt]\n\\frac{dx}{dt} &= 4t \\implies \\left. \\frac{dx}{dt} \\right|_{t=-1} = -4 \\\\\n\\frac{dy}{dt} &= 9t^2 - 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-1} = 8 \\\\[10pt]\nm &= \\frac{8}{-4} = -2 \\\\[10pt]\ny + 2 &= -2(x - 2) \\\\\ny &= -2x + 2\n\\end{aligned}"
  },
  {
    "id": "gen_param_normal_37",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the normal line to the curve $x = 2t^3 - 2t$, $y = 3t^2$ at $t = -1$.",
    "answer": "\\frac{2}{3}x + 3",
    "steps": "\\begin{aligned}\nx(-1) &= 2(-1)^3 - 2(-1) = 0 \\\\\ny(-1) &= 3(-1)^2 = 3 \\\\[10pt]\n\\left. \\frac{dx}{dt} \\right|_{t=-1} &= 3(2)(-1)^2 - 2 = 4 \\\\\n\\left. \\frac{dy}{dt} \\right|_{t=-1} &= 2(3)(-1) = -6 \\\\[10pt]\nm_{tangent} &= \\frac{-6}{4} = -\\frac{3}{2} \\\\[10pt]\nm_{normal} &= -\\frac{1}{m_{tangent}} = \\frac{2}{3} \\\\[10pt]\ny - 3 &= \\frac{2}{3}(x - 0) \\\\\ny &= \\frac{2}{3}x + 3\n\\end{aligned}"
  },
  {
    "id": "gen_param_slope_38",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the slope of the curve defined by $x = 1t^2 - 4t$ and $y = t^3 + 4t$ at the point where $t = 3$.",
    "answer": "\\frac{31}{2}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 2t - 4 \\implies \\left. \\frac{dx}{dt} \\right|_{t=3} = 2 \\\\[10pt]\n\\frac{dy}{dt} &= 3t^2 + 4 \\implies \\left. \\frac{dy}{dt} \\right|_{t=3} = 31 \\\\[10pt]\n\\text{Slope } m &= \\left. \\frac{dy}{dx} \\right|_{t=3} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{31}{2} = \\frac{31}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_param_tangent_38",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the tangent line to the curve $x = 3t^2$, $y = t^3 - t$ at $t = 1$.",
    "answer": "\\frac{1}{3}x - 1",
    "steps": "\\begin{aligned}\nx(1) &= 3(1)^2 = 3 \\\\\ny(1) &= 1(1)^3 - (1) = 0 \\\\[10pt]\n\\frac{dx}{dt} &= 6t \\implies \\left. \\frac{dx}{dt} \\right|_{t=1} = 6 \\\\\n\\frac{dy}{dt} &= 3t^2 - 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=1} = 2 \\\\[10pt]\nm &= \\frac{2}{6} = \\frac{1}{3} \\\\[10pt]\ny - 0 &= \\frac{1}{3}(x - 3) \\\\\ny &= \\frac{1}{3}x - 1\n\\end{aligned}"
  },
  {
    "id": "gen_param_normal_38",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the normal line to the curve $x = 2t^3 - 3t$, $y = t^2$ at $t = -1$.",
    "answer": "\\frac{3}{2}x - \\frac{1}{2}",
    "steps": "\\begin{aligned}\nx(-1) &= 2(-1)^3 - 3(-1) = 1 \\\\\ny(-1) &= 1(-1)^2 = 1 \\\\[10pt]\n\\left. \\frac{dx}{dt} \\right|_{t=-1} &= 3(2)(-1)^2 - 3 = 3 \\\\\n\\left. \\frac{dy}{dt} \\right|_{t=-1} &= 2(1)(-1) = -2 \\\\[10pt]\nm_{tangent} &= \\frac{-2}{3} = -\\frac{2}{3} \\\\[10pt]\nm_{normal} &= -\\frac{1}{m_{tangent}} = \\frac{3}{2} \\\\[10pt]\ny - 1 &= \\frac{3}{2}(x - 1) \\\\\ny &= \\frac{3}{2}x - \\frac{1}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_param_slope_39",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the slope of the curve defined by $x = 1t^2 - 5t$ and $y = t^3 + 5t$ at the point where $t = 3$.",
    "answer": "32",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 2t - 5 \\implies \\left. \\frac{dx}{dt} \\right|_{t=3} = 1 \\\\[10pt]\n\\frac{dy}{dt} &= 3t^2 + 5 \\implies \\left. \\frac{dy}{dt} \\right|_{t=3} = 32 \\\\[10pt]\n\\text{Slope } m &= \\left. \\frac{dy}{dx} \\right|_{t=3} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{32}{1} = 32\n\\end{aligned}"
  },
  {
    "id": "gen_param_tangent_39",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the tangent line to the curve $x = t^2$, $y = 3t^3 - t$ at $t = 1$.",
    "answer": "4x - 2",
    "steps": "\\begin{aligned}\nx(1) &= 1(1)^2 = 1 \\\\\ny(1) &= 3(1)^3 - (1) = 2 \\\\[10pt]\n\\frac{dx}{dt} &= 2t \\implies \\left. \\frac{dx}{dt} \\right|_{t=1} = 2 \\\\\n\\frac{dy}{dt} &= 9t^2 - 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=1} = 8 \\\\[10pt]\nm &= \\frac{8}{2} = 4 \\\\[10pt]\ny - 2 &= 4(x - 1) \\\\\ny &= 4x - 2\n\\end{aligned}"
  },
  {
    "id": "gen_param_normal_39",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the normal line to the curve $x = 3t^3 - 2t$, $y = 4t^2$ at $t = -2$.",
    "answer": "\\frac{17}{8}x + \\frac{117}{2}",
    "steps": "\\begin{aligned}\nx(-2) &= 3(-2)^3 - 2(-2) = -20 \\\\\ny(-2) &= 4(-2)^2 = 16 \\\\[10pt]\n\\left. \\frac{dx}{dt} \\right|_{t=-2} &= 3(3)(-2)^2 - 2 = 34 \\\\\n\\left. \\frac{dy}{dt} \\right|_{t=-2} &= 2(4)(-2) = -16 \\\\[10pt]\nm_{tangent} &= \\frac{-16}{34} = -\\frac{8}{17} \\\\[10pt]\nm_{normal} &= -\\frac{1}{m_{tangent}} = \\frac{17}{8} \\\\[10pt]\ny - 16 &= \\frac{17}{8}(x + 20) \\\\\ny &= \\frac{17}{8}x + \\frac{117}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_param_slope_40",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the slope of the curve defined by $x = 3t^2 - 5t$ and $y = t^3 + 5t$ at the point where $t = -2$.",
    "answer": "-1",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 6t - 5 \\implies \\left. \\frac{dx}{dt} \\right|_{t=-2} = -17 \\\\[10pt]\n\\frac{dy}{dt} &= 3t^2 + 5 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-2} = 17 \\\\[10pt]\n\\text{Slope } m &= \\left. \\frac{dy}{dx} \\right|_{t=-2} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{17}{-17} = -1\n\\end{aligned}"
  },
  {
    "id": "gen_param_tangent_40",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the tangent line to the curve $x = t^2$, $y = 2t^3 - t$ at $t = 2$.",
    "answer": "\\frac{23}{4}x - 9",
    "steps": "\\begin{aligned}\nx(2) &= 1(2)^2 = 4 \\\\\ny(2) &= 2(2)^3 - (2) = 14 \\\\[10pt]\n\\frac{dx}{dt} &= 2t \\implies \\left. \\frac{dx}{dt} \\right|_{t=2} = 4 \\\\\n\\frac{dy}{dt} &= 6t^2 - 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=2} = 23 \\\\[10pt]\nm &= \\frac{23}{4} = \\frac{23}{4} \\\\[10pt]\ny - 14 &= \\frac{23}{4}(x - 4) \\\\\ny &= \\frac{23}{4}x - 9\n\\end{aligned}"
  },
  {
    "id": "gen_param_normal_40",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the normal line to the curve $x = 3t^3 - 2t$, $y = 3t^2$ at $t = 2$.",
    "answer": "-\\frac{17}{6}x + \\frac{206}{3}",
    "steps": "\\begin{aligned}\nx(2) &= 3(2)^3 - 2(2) = 20 \\\\\ny(2) &= 3(2)^2 = 12 \\\\[10pt]\n\\left. \\frac{dx}{dt} \\right|_{t=2} &= 3(3)(2)^2 - 2 = 34 \\\\\n\\left. \\frac{dy}{dt} \\right|_{t=2} &= 2(3)(2) = 12 \\\\[10pt]\nm_{tangent} &= \\frac{12}{34} = \\frac{6}{17} \\\\[10pt]\nm_{normal} &= -\\frac{1}{m_{tangent}} = -\\frac{17}{6} \\\\[10pt]\ny - 12 &= -\\frac{17}{6}(x - 20) \\\\\ny &= -\\frac{17}{6}x + \\frac{206}{3}\n\\end{aligned}"
  },
  {
    "id": "gen_param_slope_41",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the slope of the curve defined by $x = 1t^2 - 2t$ and $y = t^3 + 2t$ at the point where $t = 3$.",
    "answer": "\\frac{29}{4}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 2t - 2 \\implies \\left. \\frac{dx}{dt} \\right|_{t=3} = 4 \\\\[10pt]\n\\frac{dy}{dt} &= 3t^2 + 2 \\implies \\left. \\frac{dy}{dt} \\right|_{t=3} = 29 \\\\[10pt]\n\\text{Slope } m &= \\left. \\frac{dy}{dx} \\right|_{t=3} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{29}{4} = \\frac{29}{4}\n\\end{aligned}"
  },
  {
    "id": "gen_param_tangent_41",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the tangent line to the curve $x = 3t^2$, $y = t^3 - t$ at $t = -3$.",
    "answer": "-\\frac{13}{9}x + 15",
    "steps": "\\begin{aligned}\nx(-3) &= 3(-3)^2 = 27 \\\\\ny(-3) &= 1(-3)^3 - (-3) = -24 \\\\[10pt]\n\\frac{dx}{dt} &= 6t \\implies \\left. \\frac{dx}{dt} \\right|_{t=-3} = -18 \\\\\n\\frac{dy}{dt} &= 3t^2 - 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-3} = 26 \\\\[10pt]\nm &= \\frac{26}{-18} = -\\frac{13}{9} \\\\[10pt]\ny + 24 &= -\\frac{13}{9}(x - 27) \\\\\ny &= -\\frac{13}{9}x + 15\n\\end{aligned}"
  },
  {
    "id": "gen_param_normal_41",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the normal line to the curve $x = 3t^3 - 2t$, $y = 3t^2$ at $t = 1$.",
    "answer": "-\\frac{7}{6}x + \\frac{25}{6}",
    "steps": "\\begin{aligned}\nx(1) &= 3(1)^3 - 2(1) = 1 \\\\\ny(1) &= 3(1)^2 = 3 \\\\[10pt]\n\\left. \\frac{dx}{dt} \\right|_{t=1} &= 3(3)(1)^2 - 2 = 7 \\\\\n\\left. \\frac{dy}{dt} \\right|_{t=1} &= 2(3)(1) = 6 \\\\[10pt]\nm_{tangent} &= \\frac{6}{7} = \\frac{6}{7} \\\\[10pt]\nm_{normal} &= -\\frac{1}{m_{tangent}} = -\\frac{7}{6} \\\\[10pt]\ny - 3 &= -\\frac{7}{6}(x - 1) \\\\\ny &= -\\frac{7}{6}x + \\frac{25}{6}\n\\end{aligned}"
  },
  {
    "id": "gen_param_slope_42",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the slope of the curve defined by $x = 5t^2 - 3t$ and $y = t^3 + 3t$ at the point where $t = -1$.",
    "answer": "-\\frac{6}{13}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 10t - 3 \\implies \\left. \\frac{dx}{dt} \\right|_{t=-1} = -13 \\\\[10pt]\n\\frac{dy}{dt} &= 3t^2 + 3 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-1} = 6 \\\\[10pt]\n\\text{Slope } m &= \\left. \\frac{dy}{dx} \\right|_{t=-1} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{6}{-13} = -\\frac{6}{13}\n\\end{aligned}"
  },
  {
    "id": "gen_param_tangent_42",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the tangent line to the curve $x = t^2$, $y = 3t^3 - t$ at $t = -3$.",
    "answer": "-\\frac{40}{3}x + 42",
    "steps": "\\begin{aligned}\nx(-3) &= 1(-3)^2 = 9 \\\\\ny(-3) &= 3(-3)^3 - (-3) = -78 \\\\[10pt]\n\\frac{dx}{dt} &= 2t \\implies \\left. \\frac{dx}{dt} \\right|_{t=-3} = -6 \\\\\n\\frac{dy}{dt} &= 9t^2 - 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-3} = 80 \\\\[10pt]\nm &= \\frac{80}{-6} = -\\frac{40}{3} \\\\[10pt]\ny + 78 &= -\\frac{40}{3}(x - 9) \\\\\ny &= -\\frac{40}{3}x + 42\n\\end{aligned}"
  },
  {
    "id": "gen_param_normal_42",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the normal line to the curve $x = t^3 - 2t$, $y = 2t^2$ at $t = 1$.",
    "answer": "-\\frac{1}{4}x + \\frac{7}{4}",
    "steps": "\\begin{aligned}\nx(1) &= 1(1)^3 - 2(1) = -1 \\\\\ny(1) &= 2(1)^2 = 2 \\\\[10pt]\n\\left. \\frac{dx}{dt} \\right|_{t=1} &= 3(1)(1)^2 - 2 = 1 \\\\\n\\left. \\frac{dy}{dt} \\right|_{t=1} &= 2(2)(1) = 4 \\\\[10pt]\nm_{tangent} &= \\frac{4}{1} = 4 \\\\[10pt]\nm_{normal} &= -\\frac{1}{m_{tangent}} = -\\frac{1}{4} \\\\[10pt]\ny - 2 &= -\\frac{1}{4}(x + 1) \\\\\ny &= -\\frac{1}{4}x + \\frac{7}{4}\n\\end{aligned}"
  },
  {
    "id": "gen_param_slope_43",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the slope of the curve defined by $x = 3t^2 - 5t$ and $y = t^3 + 5t$ at the point where $t = 1$.",
    "answer": "8",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 6t - 5 \\implies \\left. \\frac{dx}{dt} \\right|_{t=1} = 1 \\\\[10pt]\n\\frac{dy}{dt} &= 3t^2 + 5 \\implies \\left. \\frac{dy}{dt} \\right|_{t=1} = 8 \\\\[10pt]\n\\text{Slope } m &= \\left. \\frac{dy}{dx} \\right|_{t=1} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{8}{1} = 8\n\\end{aligned}"
  },
  {
    "id": "gen_param_tangent_43",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the tangent line to the curve $x = 2t^2$, $y = 3t^3 - t$ at $t = 3$.",
    "answer": "\\frac{20}{3}x - 42",
    "steps": "\\begin{aligned}\nx(3) &= 2(3)^2 = 18 \\\\\ny(3) &= 3(3)^3 - (3) = 78 \\\\[10pt]\n\\frac{dx}{dt} &= 4t \\implies \\left. \\frac{dx}{dt} \\right|_{t=3} = 12 \\\\\n\\frac{dy}{dt} &= 9t^2 - 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=3} = 80 \\\\[10pt]\nm &= \\frac{80}{12} = \\frac{20}{3} \\\\[10pt]\ny - 78 &= \\frac{20}{3}(x - 18) \\\\\ny &= \\frac{20}{3}x - 42\n\\end{aligned}"
  },
  {
    "id": "gen_param_normal_43",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the normal line to the curve $x = 3t^3 - 3t$, $y = 4t^2$ at $t = 2$.",
    "answer": "-\\frac{33}{16}x + \\frac{425}{8}",
    "steps": "\\begin{aligned}\nx(2) &= 3(2)^3 - 3(2) = 18 \\\\\ny(2) &= 4(2)^2 = 16 \\\\[10pt]\n\\left. \\frac{dx}{dt} \\right|_{t=2} &= 3(3)(2)^2 - 3 = 33 \\\\\n\\left. \\frac{dy}{dt} \\right|_{t=2} &= 2(4)(2) = 16 \\\\[10pt]\nm_{tangent} &= \\frac{16}{33} = \\frac{16}{33} \\\\[10pt]\nm_{normal} &= -\\frac{1}{m_{tangent}} = -\\frac{33}{16} \\\\[10pt]\ny - 16 &= -\\frac{33}{16}(x - 18) \\\\\ny &= -\\frac{33}{16}x + \\frac{425}{8}\n\\end{aligned}"
  },
  {
    "id": "gen_param_slope_44",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the slope of the curve defined by $x = 2t^2 - 3t$ and $y = t^3 + 3t$ at the point where $t = -1$.",
    "answer": "-\\frac{6}{7}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 4t - 3 \\implies \\left. \\frac{dx}{dt} \\right|_{t=-1} = -7 \\\\[10pt]\n\\frac{dy}{dt} &= 3t^2 + 3 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-1} = 6 \\\\[10pt]\n\\text{Slope } m &= \\left. \\frac{dy}{dx} \\right|_{t=-1} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{6}{-7} = -\\frac{6}{7}\n\\end{aligned}"
  },
  {
    "id": "gen_param_tangent_44",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the tangent line to the curve $x = t^2$, $y = 2t^3 - t$ at $t = -1$.",
    "answer": "-\\frac{5}{2}x + \\frac{3}{2}",
    "steps": "\\begin{aligned}\nx(-1) &= 1(-1)^2 = 1 \\\\\ny(-1) &= 2(-1)^3 - (-1) = -1 \\\\[10pt]\n\\frac{dx}{dt} &= 2t \\implies \\left. \\frac{dx}{dt} \\right|_{t=-1} = -2 \\\\\n\\frac{dy}{dt} &= 6t^2 - 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-1} = 5 \\\\[10pt]\nm &= \\frac{5}{-2} = -\\frac{5}{2} \\\\[10pt]\ny + 1 &= -\\frac{5}{2}(x - 1) \\\\\ny &= -\\frac{5}{2}x + \\frac{3}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_param_normal_44",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the normal line to the curve $x = 3t^3 - 2t$, $y = t^2$ at $t = -1$.",
    "answer": "\\frac{7}{2}x + \\frac{9}{2}",
    "steps": "\\begin{aligned}\nx(-1) &= 3(-1)^3 - 2(-1) = -1 \\\\\ny(-1) &= 1(-1)^2 = 1 \\\\[10pt]\n\\left. \\frac{dx}{dt} \\right|_{t=-1} &= 3(3)(-1)^2 - 2 = 7 \\\\\n\\left. \\frac{dy}{dt} \\right|_{t=-1} &= 2(1)(-1) = -2 \\\\[10pt]\nm_{tangent} &= \\frac{-2}{7} = -\\frac{2}{7} \\\\[10pt]\nm_{normal} &= -\\frac{1}{m_{tangent}} = \\frac{7}{2} \\\\[10pt]\ny - 1 &= \\frac{7}{2}(x + 1) \\\\\ny &= \\frac{7}{2}x + \\frac{9}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_param_slope_45",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the slope of the curve defined by $x = 5t^2 - 4t$ and $y = t^3 + 4t$ at the point where $t = -3$.",
    "answer": "-\\frac{31}{34}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 10t - 4 \\implies \\left. \\frac{dx}{dt} \\right|_{t=-3} = -34 \\\\[10pt]\n\\frac{dy}{dt} &= 3t^2 + 4 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-3} = 31 \\\\[10pt]\n\\text{Slope } m &= \\left. \\frac{dy}{dx} \\right|_{t=-3} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{31}{-34} = -\\frac{31}{34}\n\\end{aligned}"
  },
  {
    "id": "gen_param_tangent_45",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the tangent line to the curve $x = 2t^2$, $y = t^3 - t$ at $t = -1$.",
    "answer": "-\\frac{1}{2}x + 1",
    "steps": "\\begin{aligned}\nx(-1) &= 2(-1)^2 = 2 \\\\\ny(-1) &= 1(-1)^3 - (-1) = 0 \\\\[10pt]\n\\frac{dx}{dt} &= 4t \\implies \\left. \\frac{dx}{dt} \\right|_{t=-1} = -4 \\\\\n\\frac{dy}{dt} &= 3t^2 - 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-1} = 2 \\\\[10pt]\nm &= \\frac{2}{-4} = -\\frac{1}{2} \\\\[10pt]\ny - 0 &= -\\frac{1}{2}(x - 2) \\\\\ny &= -\\frac{1}{2}x + 1\n\\end{aligned}"
  },
  {
    "id": "gen_param_normal_45",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the normal line to the curve $x = t^3 - 3t$, $y = 4t^2$ at $t = 2$.",
    "answer": "-\\frac{9}{16}x + \\frac{137}{8}",
    "steps": "\\begin{aligned}\nx(2) &= 1(2)^3 - 3(2) = 2 \\\\\ny(2) &= 4(2)^2 = 16 \\\\[10pt]\n\\left. \\frac{dx}{dt} \\right|_{t=2} &= 3(1)(2)^2 - 3 = 9 \\\\\n\\left. \\frac{dy}{dt} \\right|_{t=2} &= 2(4)(2) = 16 \\\\[10pt]\nm_{tangent} &= \\frac{16}{9} = \\frac{16}{9} \\\\[10pt]\nm_{normal} &= -\\frac{1}{m_{tangent}} = -\\frac{9}{16} \\\\[10pt]\ny - 16 &= -\\frac{9}{16}(x - 2) \\\\\ny &= -\\frac{9}{16}x + \\frac{137}{8}\n\\end{aligned}"
  },
  {
    "id": "gen_param_slope_46",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the slope of the curve defined by $x = 5t^2 - 2t$ and $y = t^3 + 2t$ at the point where $t = 4$.",
    "answer": "\\frac{25}{19}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 10t - 2 \\implies \\left. \\frac{dx}{dt} \\right|_{t=4} = 38 \\\\[10pt]\n\\frac{dy}{dt} &= 3t^2 + 2 \\implies \\left. \\frac{dy}{dt} \\right|_{t=4} = 50 \\\\[10pt]\n\\text{Slope } m &= \\left. \\frac{dy}{dx} \\right|_{t=4} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{50}{38} = \\frac{25}{19}\n\\end{aligned}"
  },
  {
    "id": "gen_param_tangent_46",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the tangent line to the curve $x = t^2$, $y = t^3 - t$ at $t = -1$.",
    "answer": "-x + 1",
    "steps": "\\begin{aligned}\nx(-1) &= 1(-1)^2 = 1 \\\\\ny(-1) &= 1(-1)^3 - (-1) = 0 \\\\[10pt]\n\\frac{dx}{dt} &= 2t \\implies \\left. \\frac{dx}{dt} \\right|_{t=-1} = -2 \\\\\n\\frac{dy}{dt} &= 3t^2 - 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-1} = 2 \\\\[10pt]\nm &= \\frac{2}{-2} = -1 \\\\[10pt]\ny - 0 &= -1(x - 1) \\\\\ny &= -x + 1\n\\end{aligned}"
  },
  {
    "id": "gen_param_normal_46",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the normal line to the curve $x = 3t^3 - 2t$, $y = 2t^2$ at $t = -2$.",
    "answer": "\\frac{17}{4}x + 93",
    "steps": "\\begin{aligned}\nx(-2) &= 3(-2)^3 - 2(-2) = -20 \\\\\ny(-2) &= 2(-2)^2 = 8 \\\\[10pt]\n\\left. \\frac{dx}{dt} \\right|_{t=-2} &= 3(3)(-2)^2 - 2 = 34 \\\\\n\\left. \\frac{dy}{dt} \\right|_{t=-2} &= 2(2)(-2) = -8 \\\\[10pt]\nm_{tangent} &= \\frac{-8}{34} = -\\frac{4}{17} \\\\[10pt]\nm_{normal} &= -\\frac{1}{m_{tangent}} = \\frac{17}{4} \\\\[10pt]\ny - 8 &= \\frac{17}{4}(x + 20) \\\\\ny &= \\frac{17}{4}x + 93\n\\end{aligned}"
  },
  {
    "id": "gen_param_slope_47",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the slope of the curve defined by $x = 2t^2 - 1t$ and $y = t^3 + 1t$ at the point where $t = -2$.",
    "answer": "-\\frac{13}{9}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 4t - 1 \\implies \\left. \\frac{dx}{dt} \\right|_{t=-2} = -9 \\\\[10pt]\n\\frac{dy}{dt} &= 3t^2 + 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-2} = 13 \\\\[10pt]\n\\text{Slope } m &= \\left. \\frac{dy}{dx} \\right|_{t=-2} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{13}{-9} = -\\frac{13}{9}\n\\end{aligned}"
  },
  {
    "id": "gen_param_tangent_47",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the tangent line to the curve $x = t^2$, $y = 2t^3 - t$ at $t = -2$.",
    "answer": "-\\frac{23}{4}x + 9",
    "steps": "\\begin{aligned}\nx(-2) &= 1(-2)^2 = 4 \\\\\ny(-2) &= 2(-2)^3 - (-2) = -14 \\\\[10pt]\n\\frac{dx}{dt} &= 2t \\implies \\left. \\frac{dx}{dt} \\right|_{t=-2} = -4 \\\\\n\\frac{dy}{dt} &= 6t^2 - 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-2} = 23 \\\\[10pt]\nm &= \\frac{23}{-4} = -\\frac{23}{4} \\\\[10pt]\ny + 14 &= -\\frac{23}{4}(x - 4) \\\\\ny &= -\\frac{23}{4}x + 9\n\\end{aligned}"
  },
  {
    "id": "gen_param_normal_47",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the normal line to the curve $x = 3t^3 - 3t$, $y = 4t^2$ at $t = 2$.",
    "answer": "-\\frac{33}{16}x + \\frac{425}{8}",
    "steps": "\\begin{aligned}\nx(2) &= 3(2)^3 - 3(2) = 18 \\\\\ny(2) &= 4(2)^2 = 16 \\\\[10pt]\n\\left. \\frac{dx}{dt} \\right|_{t=2} &= 3(3)(2)^2 - 3 = 33 \\\\\n\\left. \\frac{dy}{dt} \\right|_{t=2} &= 2(4)(2) = 16 \\\\[10pt]\nm_{tangent} &= \\frac{16}{33} = \\frac{16}{33} \\\\[10pt]\nm_{normal} &= -\\frac{1}{m_{tangent}} = -\\frac{33}{16} \\\\[10pt]\ny - 16 &= -\\frac{33}{16}(x - 18) \\\\\ny &= -\\frac{33}{16}x + \\frac{425}{8}\n\\end{aligned}"
  },
  {
    "id": "gen_param_slope_48",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the slope of the curve defined by $x = 4t^2 - 1t$ and $y = t^3 + 1t$ at the point where $t = -4$.",
    "answer": "-\\frac{49}{33}",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 8t - 1 \\implies \\left. \\frac{dx}{dt} \\right|_{t=-4} = -33 \\\\[10pt]\n\\frac{dy}{dt} &= 3t^2 + 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-4} = 49 \\\\[10pt]\n\\text{Slope } m &= \\left. \\frac{dy}{dx} \\right|_{t=-4} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{49}{-33} = -\\frac{49}{33}\n\\end{aligned}"
  },
  {
    "id": "gen_param_tangent_48",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the tangent line to the curve $x = 3t^2$, $y = t^3 - t$ at $t = -1$.",
    "answer": "-\\frac{1}{3}x + 1",
    "steps": "\\begin{aligned}\nx(-1) &= 3(-1)^2 = 3 \\\\\ny(-1) &= 1(-1)^3 - (-1) = 0 \\\\[10pt]\n\\frac{dx}{dt} &= 6t \\implies \\left. \\frac{dx}{dt} \\right|_{t=-1} = -6 \\\\\n\\frac{dy}{dt} &= 3t^2 - 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-1} = 2 \\\\[10pt]\nm &= \\frac{2}{-6} = -\\frac{1}{3} \\\\[10pt]\ny - 0 &= -\\frac{1}{3}(x - 3) \\\\\ny &= -\\frac{1}{3}x + 1\n\\end{aligned}"
  },
  {
    "id": "gen_param_normal_48",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the normal line to the curve $x = t^3 - 2t$, $y = t^2$ at $t = -2$.",
    "answer": "\\frac{5}{2}x + 14",
    "steps": "\\begin{aligned}\nx(-2) &= 1(-2)^3 - 2(-2) = -4 \\\\\ny(-2) &= 1(-2)^2 = 4 \\\\[10pt]\n\\left. \\frac{dx}{dt} \\right|_{t=-2} &= 3(1)(-2)^2 - 2 = 10 \\\\\n\\left. \\frac{dy}{dt} \\right|_{t=-2} &= 2(1)(-2) = -4 \\\\[10pt]\nm_{tangent} &= \\frac{-4}{10} = -\\frac{2}{5} \\\\[10pt]\nm_{normal} &= -\\frac{1}{m_{tangent}} = \\frac{5}{2} \\\\[10pt]\ny - 4 &= \\frac{5}{2}(x + 4) \\\\\ny &= \\frac{5}{2}x + 14\n\\end{aligned}"
  },
  {
    "id": "gen_param_slope_49",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the slope of the curve defined by $x = 1t^2 - 1t$ and $y = t^3 + 1t$ at the point where $t = 4$.",
    "answer": "7",
    "steps": "\\begin{aligned}\n\\frac{dx}{dt} &= 2t - 1 \\implies \\left. \\frac{dx}{dt} \\right|_{t=4} = 7 \\\\[10pt]\n\\frac{dy}{dt} &= 3t^2 + 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=4} = 49 \\\\[10pt]\n\\text{Slope } m &= \\left. \\frac{dy}{dx} \\right|_{t=4} = \\frac{\\frac{dy}{dt}}{\\frac{dx}{dt}} = \\frac{49}{7} = 7\n\\end{aligned}"
  },
  {
    "id": "gen_param_tangent_49",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the tangent line to the curve $x = 3t^2$, $y = 3t^3 - t$ at $t = -1$.",
    "answer": "-\\frac{4}{3}x + 2",
    "steps": "\\begin{aligned}\nx(-1) &= 3(-1)^2 = 3 \\\\\ny(-1) &= 3(-1)^3 - (-1) = -2 \\\\[10pt]\n\\frac{dx}{dt} &= 6t \\implies \\left. \\frac{dx}{dt} \\right|_{t=-1} = -6 \\\\\n\\frac{dy}{dt} &= 9t^2 - 1 \\implies \\left. \\frac{dy}{dt} \\right|_{t=-1} = 8 \\\\[10pt]\nm &= \\frac{8}{-6} = -\\frac{4}{3} \\\\[10pt]\ny + 2 &= -\\frac{4}{3}(x - 3) \\\\\ny &= -\\frac{4}{3}x + 2\n\\end{aligned}"
  },
  {
    "id": "gen_param_normal_49",
    "topic": "Derivatives",
    "category": "Parametric Equations",
    "difficulty": "hard",
    "statement": "Find the equation of the normal line to the curve $x = 3t^3 - 3t$, $y = t^2$ at $t = 1$.",
    "answer": "-3x + 1",
    "steps": "\\begin{aligned}\nx(1) &= 3(1)^3 - 3(1) = 0 \\\\\ny(1) &= 1(1)^2 = 1 \\\\[10pt]\n\\left. \\frac{dx}{dt} \\right|_{t=1} &= 3(3)(1)^2 - 3 = 6 \\\\\n\\left. \\frac{dy}{dt} \\right|_{t=1} &= 2(1)(1) = 2 \\\\[10pt]\nm_{tangent} &= \\frac{2}{6} = \\frac{1}{3} \\\\[10pt]\nm_{normal} &= -\\frac{1}{m_{tangent}} = -3 \\\\[10pt]\ny - 1 &= -3(x - 0) \\\\\ny &= -3x + 1\n\\end{aligned}"
  }
];
