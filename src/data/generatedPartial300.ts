// Generates 300 very hard partial derivative calculus problems
export const generatedPartialProblems: any[] = [
  {
    "id": "gen_partial_arch1_0",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 y^{4} e^{\\frac{3x}{y}}$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "15y e^{\\frac{3x}{y}} (3y - 3x)",
    "steps": "\\begin{aligned}\nf_x &= \\frac{\\partial}{\\partial x} \\left( 5 y^{4} e^{\\frac{3x}{y}} \\right) = 5 y^{4} e^{\\frac{3x}{y}} \\left(\\frac{3}{y}\\right) = 15 y^{3} e^{\\frac{3x}{y}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 15 y^{3} e^{\\frac{3x}{y}} \\right) \\\\[10pt]\n&= 15 \\left[ (3)y^{2} e^{\\frac{3x}{y}} + y^{3} e^{\\frac{3x}{y}} \\left(-\\frac{3x}{y^2}\\right) \\right] \\\\[10pt]\n&= 15 y^{1} e^{\\frac{3x}{y}} \\left( 3y - 3x \\right) \\\\\n&= 15y e^{\\frac{3x}{y}} (3y - 3x)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch2_0",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 \\arctan\\left(\\frac{5x}{7y}\\right)$. Find $f_{xy}$.",
    "answer": "\\frac{175(25x^2 - 49y^2)}{(25x^2 + 49y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 5 \\frac{1}{1 + \\left(\\frac{5x}{7y}\\right)^2} \\cdot \\frac{5}{7y} = \\frac{5 \\cdot 49y^2}{25x^2 + 49y^2} \\cdot \\frac{5}{7y} = \\frac{175y}{25x^2 + 49y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( \\frac{175y}{25x^2 + 49y^2} \\right) \\\\[10pt]\n&= \\frac{175(25x^2 + 49y^2) - (175y)(2 \\cdot 49y)}{(25x^2 + 49y^2)^2} \\\\[10pt]\n&= \\frac{175(25x^2 + 49y^2) - 17150y^2}{(25x^2 + 49y^2)^2} \\\\[10pt]\n&= \\frac{175(25x^2 - 49y^2)}{(25x^2 + 49y^2)^2} \\\\\n&= \\frac{175(25x^2 - 49y^2)}{(25x^2 + 49y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch3_0",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\ln(3x^2 + 2y^2)$. Find the mixed second-order partial derivative $f_{xy}$.",
    "answer": "-\\frac{72xy}{(3x^2 + 2y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 3 \\frac{1}{3x^2 + 2y^2} \\cdot (6x) = \\frac{18x}{3x^2 + 2y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 18x(3x^2 + 2y^2)^{-1} \\right] \\\\[10pt]\n&= 18x (-1)(3x^2 + 2y^2)^{-2} (4y) \\\\[10pt]\n&= -\\frac{72xy}{(3x^2 + 2y^2)^2} \\\\\n&= -\\frac{72xy}{(3x^2 + 2y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch4_0",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\sin(3x^2 y^3)$. Find $f_{xy}$.",
    "answer": "54xy^2 \\cos(3x^2 y^3) - 162x^3 y^5 \\sin(3x^2 y^3)",
    "steps": "\\begin{aligned}\nf_x &= 3 \\cos(3x^2 y^3) \\cdot (6xy^3) = 18xy^3 \\cos(3x^2 y^3) \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 18xy^3 \\cos(3x^2 y^3) \\right) \\\\[10pt]\n&= 18x \\left[ 3y^2 \\cos(3x^2 y^3) + y^3 (-\\sin(3x^2 y^3)) (\\frac{\\partial}{\\partial y}(3x^2 y^3)) \\right] \\\\[10pt]\n&= 18x \\left[ 3y^2 \\cos(3x^2 y^3) - y^3 \\sin(3x^2 y^3) (9x^2 y^2) \\right] \\\\[10pt]\n&= 54xy^2 \\cos(3x^2 y^3) - 162x^3 y^5 \\sin(3x^2 y^3) \\\\\n&= 54xy^2 \\cos(3x^2 y^3) - 162x^3 y^5 \\sin(3x^2 y^3)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch5_0",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 \\sqrt{4x^2 + 6y^2}$. Find the second-order partial derivative $f_{xx}$.",
    "answer": "\\frac{120y^2}{(4x^2 + 6y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= \\frac{1}{2} 5(4x^2 + 6y^2)^{-\\frac{1}{2}} (\\frac{\\partial}{\\partial x}(4x^2 + 6y^2)) \\\\[10pt]\n&= \\frac{1}{2} 5(4x^2 + 6y^2)^{-\\frac{1}{2}} (8x) = \\frac{20x}{\\sqrt{4x^2 + 6y^2}} \\\\[10pt]\nf_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{20x}{\\sqrt{4x^2 + 6y^2}} \\right) \\\\[10pt]\n&= \\frac{20\\sqrt{4x^2 + 6y^2} - 20x \\left( \\frac{4x}{\\sqrt{4x^2 + 6y^2}} \\right)}{4x^2 + 6y^2} \\\\[10pt]\n&= \\frac{\\frac{20(4x^2 + 6y^2) - 80x^2}{\\sqrt{4x^2 + 6y^2}}}{4x^2 + 6y^2} \\\\[10pt]\n&= \\frac{80x^2 + 120y^2 - 80x^2}{(4x^2 + 6y^2)^{\\frac{3}{2}}} \\\\[10pt]\n&= \\frac{120y^2}{(4x^2 + 6y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch6_0",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 \\arcsin(2xy)$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "\\frac{10}{(1 - 4x^2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= 5 \\frac{1}{\\sqrt{1 - (2xy)^2}} (2y) = \\frac{10y}{\\sqrt{1 - 4x^2y^2}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 10y (1 - 4x^2y^2)^{-\\frac{1}{2}} \\right] \\\\[10pt]\n&= 10 \\left[ 1 \\cdot (1 - 4x^2y^2)^{-\\frac{1}{2}} + y \\left(-\\frac{1}{2}\\right)(1 - 4x^2y^2)^{-\\frac{3}{2}} (-8x^2y) \\right] \\\\[10pt]\n&= 10 \\left[ \\frac{1}{\\sqrt{1 - 4x^2y^2}} + \\frac{4x^2y^2}{(1 - 4x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= 10 \\left[ \\frac{(1 - 4x^2y^2) + 4x^2y^2}{(1 - 4x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= \\frac{10 (1)}{(1 - 4x^2y^2)^{\\frac{3}{2}}} = \\frac{10}{(1 - 4x^2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch1_1",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 y^{6} e^{\\frac{5x}{y}}$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "20y^{3} e^{\\frac{5x}{y}} (5y - 5x)",
    "steps": "\\begin{aligned}\nf_x &= \\frac{\\partial}{\\partial x} \\left( 4 y^{6} e^{\\frac{5x}{y}} \\right) = 4 y^{6} e^{\\frac{5x}{y}} \\left(\\frac{5}{y}\\right) = 20 y^{5} e^{\\frac{5x}{y}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 20 y^{5} e^{\\frac{5x}{y}} \\right) \\\\[10pt]\n&= 20 \\left[ (5)y^{4} e^{\\frac{5x}{y}} + y^{5} e^{\\frac{5x}{y}} \\left(-\\frac{5x}{y^2}\\right) \\right] \\\\[10pt]\n&= 20 y^{3} e^{\\frac{5x}{y}} \\left( 5y - 5x \\right) \\\\\n&= 20y^{3} e^{\\frac{5x}{y}} (5y - 5x)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch2_1",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\arctan\\left(\\frac{7x}{5y}\\right)$. Find $f_{xy}$.",
    "answer": "\\frac{105(49x^2 - 25y^2)}{(49x^2 + 25y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 3 \\frac{1}{1 + \\left(\\frac{7x}{5y}\\right)^2} \\cdot \\frac{7}{5y} = \\frac{3 \\cdot 25y^2}{49x^2 + 25y^2} \\cdot \\frac{7}{5y} = \\frac{105y}{49x^2 + 25y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( \\frac{105y}{49x^2 + 25y^2} \\right) \\\\[10pt]\n&= \\frac{105(49x^2 + 25y^2) - (105y)(2 \\cdot 25y)}{(49x^2 + 25y^2)^2} \\\\[10pt]\n&= \\frac{105(49x^2 + 25y^2) - 5250y^2}{(49x^2 + 25y^2)^2} \\\\[10pt]\n&= \\frac{105(49x^2 - 25y^2)}{(49x^2 + 25y^2)^2} \\\\\n&= \\frac{105(49x^2 - 25y^2)}{(49x^2 + 25y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch3_1",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 \\ln(5x^2 + 3y^2)$. Find the mixed second-order partial derivative $f_{xy}$.",
    "answer": "-\\frac{300xy}{(5x^2 + 3y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 5 \\frac{1}{5x^2 + 3y^2} \\cdot (10x) = \\frac{50x}{5x^2 + 3y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 50x(5x^2 + 3y^2)^{-1} \\right] \\\\[10pt]\n&= 50x (-1)(5x^2 + 3y^2)^{-2} (6y) \\\\[10pt]\n&= -\\frac{300xy}{(5x^2 + 3y^2)^2} \\\\\n&= -\\frac{300xy}{(5x^2 + 3y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch4_1",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 \\sin(4x^2 y^3)$. Find $f_{xy}$.",
    "answer": "96xy^2 \\cos(4x^2 y^3) - 384x^3 y^5 \\sin(4x^2 y^3)",
    "steps": "\\begin{aligned}\nf_x &= 4 \\cos(4x^2 y^3) \\cdot (8xy^3) = 32xy^3 \\cos(4x^2 y^3) \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 32xy^3 \\cos(4x^2 y^3) \\right) \\\\[10pt]\n&= 32x \\left[ 3y^2 \\cos(4x^2 y^3) + y^3 (-\\sin(4x^2 y^3)) (\\frac{\\partial}{\\partial y}(4x^2 y^3)) \\right] \\\\[10pt]\n&= 32x \\left[ 3y^2 \\cos(4x^2 y^3) - y^3 \\sin(4x^2 y^3) (12x^2 y^2) \\right] \\\\[10pt]\n&= 96xy^2 \\cos(4x^2 y^3) - 384x^3 y^5 \\sin(4x^2 y^3) \\\\\n&= 96xy^2 \\cos(4x^2 y^3) - 384x^3 y^5 \\sin(4x^2 y^3)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch5_1",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 \\sqrt{4x^2 + 4y^2}$. Find the second-order partial derivative $f_{xx}$.",
    "answer": "\\frac{64y^2}{(4x^2 + 4y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= \\frac{1}{2} 4(4x^2 + 4y^2)^{-\\frac{1}{2}} (\\frac{\\partial}{\\partial x}(4x^2 + 4y^2)) \\\\[10pt]\n&= \\frac{1}{2} 4(4x^2 + 4y^2)^{-\\frac{1}{2}} (8x) = \\frac{16x}{\\sqrt{4x^2 + 4y^2}} \\\\[10pt]\nf_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{16x}{\\sqrt{4x^2 + 4y^2}} \\right) \\\\[10pt]\n&= \\frac{16\\sqrt{4x^2 + 4y^2} - 16x \\left( \\frac{4x}{\\sqrt{4x^2 + 4y^2}} \\right)}{4x^2 + 4y^2} \\\\[10pt]\n&= \\frac{\\frac{16(4x^2 + 4y^2) - 64x^2}{\\sqrt{4x^2 + 4y^2}}}{4x^2 + 4y^2} \\\\[10pt]\n&= \\frac{64x^2 + 64y^2 - 64x^2}{(4x^2 + 4y^2)^{\\frac{3}{2}}} \\\\[10pt]\n&= \\frac{64y^2}{(4x^2 + 4y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch6_1",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\arcsin(4xy)$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "\\frac{8}{(1 - 16x^2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= 2 \\frac{1}{\\sqrt{1 - (4xy)^2}} (4y) = \\frac{8y}{\\sqrt{1 - 16x^2y^2}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 8y (1 - 16x^2y^2)^{-\\frac{1}{2}} \\right] \\\\[10pt]\n&= 8 \\left[ 1 \\cdot (1 - 16x^2y^2)^{-\\frac{1}{2}} + y \\left(-\\frac{1}{2}\\right)(1 - 16x^2y^2)^{-\\frac{3}{2}} (-32x^2y) \\right] \\\\[10pt]\n&= 8 \\left[ \\frac{1}{\\sqrt{1 - 16x^2y^2}} + \\frac{16x^2y^2}{(1 - 16x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= 8 \\left[ \\frac{(1 - 16x^2y^2) + 16x^2y^2}{(1 - 16x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= \\frac{8 (1)}{(1 - 16x^2y^2)^{\\frac{3}{2}}} = \\frac{8}{(1 - 16x^2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch1_2",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 y^{5} e^{\\frac{3x}{y}}$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "12y^{2} e^{\\frac{3x}{y}} (4y - 3x)",
    "steps": "\\begin{aligned}\nf_x &= \\frac{\\partial}{\\partial x} \\left( 4 y^{5} e^{\\frac{3x}{y}} \\right) = 4 y^{5} e^{\\frac{3x}{y}} \\left(\\frac{3}{y}\\right) = 12 y^{4} e^{\\frac{3x}{y}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 12 y^{4} e^{\\frac{3x}{y}} \\right) \\\\[10pt]\n&= 12 \\left[ (4)y^{3} e^{\\frac{3x}{y}} + y^{4} e^{\\frac{3x}{y}} \\left(-\\frac{3x}{y^2}\\right) \\right] \\\\[10pt]\n&= 12 y^{2} e^{\\frac{3x}{y}} \\left( 4y - 3x \\right) \\\\\n&= 12y^{2} e^{\\frac{3x}{y}} (4y - 3x)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch2_2",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\arctan\\left(\\frac{7x}{7y}\\right)$. Find $f_{xy}$.",
    "answer": "\\frac{147(49x^2 - 49y^2)}{(49x^2 + 49y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 3 \\frac{1}{1 + \\left(\\frac{7x}{7y}\\right)^2} \\cdot \\frac{7}{7y} = \\frac{3 \\cdot 49y^2}{49x^2 + 49y^2} \\cdot \\frac{7}{7y} = \\frac{147y}{49x^2 + 49y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( \\frac{147y}{49x^2 + 49y^2} \\right) \\\\[10pt]\n&= \\frac{147(49x^2 + 49y^2) - (147y)(2 \\cdot 49y)}{(49x^2 + 49y^2)^2} \\\\[10pt]\n&= \\frac{147(49x^2 + 49y^2) - 14406y^2}{(49x^2 + 49y^2)^2} \\\\[10pt]\n&= \\frac{147(49x^2 - 49y^2)}{(49x^2 + 49y^2)^2} \\\\\n&= \\frac{147(49x^2 - 49y^2)}{(49x^2 + 49y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch3_2",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\ln(3x^2 + 2y^2)$. Find the mixed second-order partial derivative $f_{xy}$.",
    "answer": "-\\frac{48xy}{(3x^2 + 2y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 2 \\frac{1}{3x^2 + 2y^2} \\cdot (6x) = \\frac{12x}{3x^2 + 2y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 12x(3x^2 + 2y^2)^{-1} \\right] \\\\[10pt]\n&= 12x (-1)(3x^2 + 2y^2)^{-2} (4y) \\\\[10pt]\n&= -\\frac{48xy}{(3x^2 + 2y^2)^2} \\\\\n&= -\\frac{48xy}{(3x^2 + 2y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch4_2",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\sin(2x^2 y^3)$. Find $f_{xy}$.",
    "answer": "36xy^2 \\cos(2x^2 y^3) - 72x^3 y^5 \\sin(2x^2 y^3)",
    "steps": "\\begin{aligned}\nf_x &= 3 \\cos(2x^2 y^3) \\cdot (4xy^3) = 12xy^3 \\cos(2x^2 y^3) \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 12xy^3 \\cos(2x^2 y^3) \\right) \\\\[10pt]\n&= 12x \\left[ 3y^2 \\cos(2x^2 y^3) + y^3 (-\\sin(2x^2 y^3)) (\\frac{\\partial}{\\partial y}(2x^2 y^3)) \\right] \\\\[10pt]\n&= 12x \\left[ 3y^2 \\cos(2x^2 y^3) - y^3 \\sin(2x^2 y^3) (6x^2 y^2) \\right] \\\\[10pt]\n&= 36xy^2 \\cos(2x^2 y^3) - 72x^3 y^5 \\sin(2x^2 y^3) \\\\\n&= 36xy^2 \\cos(2x^2 y^3) - 72x^3 y^5 \\sin(2x^2 y^3)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch5_2",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\sqrt{3x^2 + 5y^2}$. Find the second-order partial derivative $f_{xx}$.",
    "answer": "\\frac{45y^2}{(3x^2 + 5y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= \\frac{1}{2} 3(3x^2 + 5y^2)^{-\\frac{1}{2}} (\\frac{\\partial}{\\partial x}(3x^2 + 5y^2)) \\\\[10pt]\n&= \\frac{1}{2} 3(3x^2 + 5y^2)^{-\\frac{1}{2}} (6x) = \\frac{9x}{\\sqrt{3x^2 + 5y^2}} \\\\[10pt]\nf_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{9x}{\\sqrt{3x^2 + 5y^2}} \\right) \\\\[10pt]\n&= \\frac{9\\sqrt{3x^2 + 5y^2} - 9x \\left( \\frac{3x}{\\sqrt{3x^2 + 5y^2}} \\right)}{3x^2 + 5y^2} \\\\[10pt]\n&= \\frac{\\frac{9(3x^2 + 5y^2) - 27x^2}{\\sqrt{3x^2 + 5y^2}}}{3x^2 + 5y^2} \\\\[10pt]\n&= \\frac{27x^2 + 45y^2 - 27x^2}{(3x^2 + 5y^2)^{\\frac{3}{2}}} \\\\[10pt]\n&= \\frac{45y^2}{(3x^2 + 5y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch6_2",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 \\arcsin(5xy)$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "\\frac{25}{(1 - 25x^2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= 5 \\frac{1}{\\sqrt{1 - (5xy)^2}} (5y) = \\frac{25y}{\\sqrt{1 - 25x^2y^2}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 25y (1 - 25x^2y^2)^{-\\frac{1}{2}} \\right] \\\\[10pt]\n&= 25 \\left[ 1 \\cdot (1 - 25x^2y^2)^{-\\frac{1}{2}} + y \\left(-\\frac{1}{2}\\right)(1 - 25x^2y^2)^{-\\frac{3}{2}} (-50x^2y) \\right] \\\\[10pt]\n&= 25 \\left[ \\frac{1}{\\sqrt{1 - 25x^2y^2}} + \\frac{25x^2y^2}{(1 - 25x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= 25 \\left[ \\frac{(1 - 25x^2y^2) + 25x^2y^2}{(1 - 25x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= \\frac{25 (1)}{(1 - 25x^2y^2)^{\\frac{3}{2}}} = \\frac{25}{(1 - 25x^2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch1_3",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 y^{7} e^{\\frac{5x}{y}}$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "10y^{4} e^{\\frac{5x}{y}} (6y - 5x)",
    "steps": "\\begin{aligned}\nf_x &= \\frac{\\partial}{\\partial x} \\left( 2 y^{7} e^{\\frac{5x}{y}} \\right) = 2 y^{7} e^{\\frac{5x}{y}} \\left(\\frac{5}{y}\\right) = 10 y^{6} e^{\\frac{5x}{y}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 10 y^{6} e^{\\frac{5x}{y}} \\right) \\\\[10pt]\n&= 10 \\left[ (6)y^{5} e^{\\frac{5x}{y}} + y^{6} e^{\\frac{5x}{y}} \\left(-\\frac{5x}{y^2}\\right) \\right] \\\\[10pt]\n&= 10 y^{4} e^{\\frac{5x}{y}} \\left( 6y - 5x \\right) \\\\\n&= 10y^{4} e^{\\frac{5x}{y}} (6y - 5x)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch2_3",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\arctan\\left(\\frac{3x}{7y}\\right)$. Find $f_{xy}$.",
    "answer": "\\frac{42(9x^2 - 49y^2)}{(9x^2 + 49y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 2 \\frac{1}{1 + \\left(\\frac{3x}{7y}\\right)^2} \\cdot \\frac{3}{7y} = \\frac{2 \\cdot 49y^2}{9x^2 + 49y^2} \\cdot \\frac{3}{7y} = \\frac{42y}{9x^2 + 49y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( \\frac{42y}{9x^2 + 49y^2} \\right) \\\\[10pt]\n&= \\frac{42(9x^2 + 49y^2) - (42y)(2 \\cdot 49y)}{(9x^2 + 49y^2)^2} \\\\[10pt]\n&= \\frac{42(9x^2 + 49y^2) - 4116y^2}{(9x^2 + 49y^2)^2} \\\\[10pt]\n&= \\frac{42(9x^2 - 49y^2)}{(9x^2 + 49y^2)^2} \\\\\n&= \\frac{42(9x^2 - 49y^2)}{(9x^2 + 49y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch3_3",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 \\ln(3x^2 + 4y^2)$. Find the mixed second-order partial derivative $f_{xy}$.",
    "answer": "-\\frac{240xy}{(3x^2 + 4y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 5 \\frac{1}{3x^2 + 4y^2} \\cdot (6x) = \\frac{30x}{3x^2 + 4y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 30x(3x^2 + 4y^2)^{-1} \\right] \\\\[10pt]\n&= 30x (-1)(3x^2 + 4y^2)^{-2} (8y) \\\\[10pt]\n&= -\\frac{240xy}{(3x^2 + 4y^2)^2} \\\\\n&= -\\frac{240xy}{(3x^2 + 4y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch4_3",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 \\sin(3x^2 y^3)$. Find $f_{xy}$.",
    "answer": "90xy^2 \\cos(3x^2 y^3) - 270x^3 y^5 \\sin(3x^2 y^3)",
    "steps": "\\begin{aligned}\nf_x &= 5 \\cos(3x^2 y^3) \\cdot (6xy^3) = 30xy^3 \\cos(3x^2 y^3) \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 30xy^3 \\cos(3x^2 y^3) \\right) \\\\[10pt]\n&= 30x \\left[ 3y^2 \\cos(3x^2 y^3) + y^3 (-\\sin(3x^2 y^3)) (\\frac{\\partial}{\\partial y}(3x^2 y^3)) \\right] \\\\[10pt]\n&= 30x \\left[ 3y^2 \\cos(3x^2 y^3) - y^3 \\sin(3x^2 y^3) (9x^2 y^2) \\right] \\\\[10pt]\n&= 90xy^2 \\cos(3x^2 y^3) - 270x^3 y^5 \\sin(3x^2 y^3) \\\\\n&= 90xy^2 \\cos(3x^2 y^3) - 270x^3 y^5 \\sin(3x^2 y^3)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch5_3",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 7 \\sqrt{2x^2 + 4y^2}$. Find the second-order partial derivative $f_{xx}$.",
    "answer": "\\frac{56y^2}{(2x^2 + 4y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= \\frac{1}{2} 7(2x^2 + 4y^2)^{-\\frac{1}{2}} (\\frac{\\partial}{\\partial x}(2x^2 + 4y^2)) \\\\[10pt]\n&= \\frac{1}{2} 7(2x^2 + 4y^2)^{-\\frac{1}{2}} (4x) = \\frac{14x}{\\sqrt{2x^2 + 4y^2}} \\\\[10pt]\nf_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{14x}{\\sqrt{2x^2 + 4y^2}} \\right) \\\\[10pt]\n&= \\frac{14\\sqrt{2x^2 + 4y^2} - 14x \\left( \\frac{2x}{\\sqrt{2x^2 + 4y^2}} \\right)}{2x^2 + 4y^2} \\\\[10pt]\n&= \\frac{\\frac{14(2x^2 + 4y^2) - 28x^2}{\\sqrt{2x^2 + 4y^2}}}{2x^2 + 4y^2} \\\\[10pt]\n&= \\frac{28x^2 + 56y^2 - 28x^2}{(2x^2 + 4y^2)^{\\frac{3}{2}}} \\\\[10pt]\n&= \\frac{56y^2}{(2x^2 + 4y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch6_3",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 8 \\arcsin(2xy)$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "\\frac{16}{(1 - 4x^2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= 8 \\frac{1}{\\sqrt{1 - (2xy)^2}} (2y) = \\frac{16y}{\\sqrt{1 - 4x^2y^2}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 16y (1 - 4x^2y^2)^{-\\frac{1}{2}} \\right] \\\\[10pt]\n&= 16 \\left[ 1 \\cdot (1 - 4x^2y^2)^{-\\frac{1}{2}} + y \\left(-\\frac{1}{2}\\right)(1 - 4x^2y^2)^{-\\frac{3}{2}} (-8x^2y) \\right] \\\\[10pt]\n&= 16 \\left[ \\frac{1}{\\sqrt{1 - 4x^2y^2}} + \\frac{4x^2y^2}{(1 - 4x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= 16 \\left[ \\frac{(1 - 4x^2y^2) + 4x^2y^2}{(1 - 4x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= \\frac{16 (1)}{(1 - 4x^2y^2)^{\\frac{3}{2}}} = \\frac{16}{(1 - 4x^2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch1_4",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 y^{7} e^{\\frac{2x}{y}}$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "6y^{4} e^{\\frac{2x}{y}} (6y - 2x)",
    "steps": "\\begin{aligned}\nf_x &= \\frac{\\partial}{\\partial x} \\left( 3 y^{7} e^{\\frac{2x}{y}} \\right) = 3 y^{7} e^{\\frac{2x}{y}} \\left(\\frac{2}{y}\\right) = 6 y^{6} e^{\\frac{2x}{y}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 6 y^{6} e^{\\frac{2x}{y}} \\right) \\\\[10pt]\n&= 6 \\left[ (6)y^{5} e^{\\frac{2x}{y}} + y^{6} e^{\\frac{2x}{y}} \\left(-\\frac{2x}{y^2}\\right) \\right] \\\\[10pt]\n&= 6 y^{4} e^{\\frac{2x}{y}} \\left( 6y - 2x \\right) \\\\\n&= 6y^{4} e^{\\frac{2x}{y}} (6y - 2x)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch2_4",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 \\arctan\\left(\\frac{5x}{3y}\\right)$. Find $f_{xy}$.",
    "answer": "\\frac{75(25x^2 - 9y^2)}{(25x^2 + 9y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 5 \\frac{1}{1 + \\left(\\frac{5x}{3y}\\right)^2} \\cdot \\frac{5}{3y} = \\frac{5 \\cdot 9y^2}{25x^2 + 9y^2} \\cdot \\frac{5}{3y} = \\frac{75y}{25x^2 + 9y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( \\frac{75y}{25x^2 + 9y^2} \\right) \\\\[10pt]\n&= \\frac{75(25x^2 + 9y^2) - (75y)(2 \\cdot 9y)}{(25x^2 + 9y^2)^2} \\\\[10pt]\n&= \\frac{75(25x^2 + 9y^2) - 1350y^2}{(25x^2 + 9y^2)^2} \\\\[10pt]\n&= \\frac{75(25x^2 - 9y^2)}{(25x^2 + 9y^2)^2} \\\\\n&= \\frac{75(25x^2 - 9y^2)}{(25x^2 + 9y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch3_4",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 \\ln(4x^2 + 4y^2)$. Find the mixed second-order partial derivative $f_{xy}$.",
    "answer": "-\\frac{256xy}{(4x^2 + 4y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 4 \\frac{1}{4x^2 + 4y^2} \\cdot (8x) = \\frac{32x}{4x^2 + 4y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 32x(4x^2 + 4y^2)^{-1} \\right] \\\\[10pt]\n&= 32x (-1)(4x^2 + 4y^2)^{-2} (8y) \\\\[10pt]\n&= -\\frac{256xy}{(4x^2 + 4y^2)^2} \\\\\n&= -\\frac{256xy}{(4x^2 + 4y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch4_4",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 \\sin(5x^2 y^3)$. Find $f_{xy}$.",
    "answer": "150xy^2 \\cos(5x^2 y^3) - 750x^3 y^5 \\sin(5x^2 y^3)",
    "steps": "\\begin{aligned}\nf_x &= 5 \\cos(5x^2 y^3) \\cdot (10xy^3) = 50xy^3 \\cos(5x^2 y^3) \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 50xy^3 \\cos(5x^2 y^3) \\right) \\\\[10pt]\n&= 50x \\left[ 3y^2 \\cos(5x^2 y^3) + y^3 (-\\sin(5x^2 y^3)) (\\frac{\\partial}{\\partial y}(5x^2 y^3)) \\right] \\\\[10pt]\n&= 50x \\left[ 3y^2 \\cos(5x^2 y^3) - y^3 \\sin(5x^2 y^3) (15x^2 y^2) \\right] \\\\[10pt]\n&= 150xy^2 \\cos(5x^2 y^3) - 750x^3 y^5 \\sin(5x^2 y^3) \\\\\n&= 150xy^2 \\cos(5x^2 y^3) - 750x^3 y^5 \\sin(5x^2 y^3)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch5_4",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 7 \\sqrt{5x^2 + 4y^2}$. Find the second-order partial derivative $f_{xx}$.",
    "answer": "\\frac{140y^2}{(5x^2 + 4y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= \\frac{1}{2} 7(5x^2 + 4y^2)^{-\\frac{1}{2}} (\\frac{\\partial}{\\partial x}(5x^2 + 4y^2)) \\\\[10pt]\n&= \\frac{1}{2} 7(5x^2 + 4y^2)^{-\\frac{1}{2}} (10x) = \\frac{35x}{\\sqrt{5x^2 + 4y^2}} \\\\[10pt]\nf_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{35x}{\\sqrt{5x^2 + 4y^2}} \\right) \\\\[10pt]\n&= \\frac{35\\sqrt{5x^2 + 4y^2} - 35x \\left( \\frac{5x}{\\sqrt{5x^2 + 4y^2}} \\right)}{5x^2 + 4y^2} \\\\[10pt]\n&= \\frac{\\frac{35(5x^2 + 4y^2) - 175x^2}{\\sqrt{5x^2 + 4y^2}}}{5x^2 + 4y^2} \\\\[10pt]\n&= \\frac{175x^2 + 140y^2 - 175x^2}{(5x^2 + 4y^2)^{\\frac{3}{2}}} \\\\[10pt]\n&= \\frac{140y^2}{(5x^2 + 4y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch6_4",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\arcsin(2xy)$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "\\frac{6}{(1 - 4x^2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= 3 \\frac{1}{\\sqrt{1 - (2xy)^2}} (2y) = \\frac{6y}{\\sqrt{1 - 4x^2y^2}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 6y (1 - 4x^2y^2)^{-\\frac{1}{2}} \\right] \\\\[10pt]\n&= 6 \\left[ 1 \\cdot (1 - 4x^2y^2)^{-\\frac{1}{2}} + y \\left(-\\frac{1}{2}\\right)(1 - 4x^2y^2)^{-\\frac{3}{2}} (-8x^2y) \\right] \\\\[10pt]\n&= 6 \\left[ \\frac{1}{\\sqrt{1 - 4x^2y^2}} + \\frac{4x^2y^2}{(1 - 4x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= 6 \\left[ \\frac{(1 - 4x^2y^2) + 4x^2y^2}{(1 - 4x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= \\frac{6 (1)}{(1 - 4x^2y^2)^{\\frac{3}{2}}} = \\frac{6}{(1 - 4x^2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch1_5",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 y^{4} e^{\\frac{5x}{y}}$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "25y e^{\\frac{5x}{y}} (3y - 5x)",
    "steps": "\\begin{aligned}\nf_x &= \\frac{\\partial}{\\partial x} \\left( 5 y^{4} e^{\\frac{5x}{y}} \\right) = 5 y^{4} e^{\\frac{5x}{y}} \\left(\\frac{5}{y}\\right) = 25 y^{3} e^{\\frac{5x}{y}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 25 y^{3} e^{\\frac{5x}{y}} \\right) \\\\[10pt]\n&= 25 \\left[ (3)y^{2} e^{\\frac{5x}{y}} + y^{3} e^{\\frac{5x}{y}} \\left(-\\frac{5x}{y^2}\\right) \\right] \\\\[10pt]\n&= 25 y^{1} e^{\\frac{5x}{y}} \\left( 3y - 5x \\right) \\\\\n&= 25y e^{\\frac{5x}{y}} (3y - 5x)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch2_5",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\arctan\\left(\\frac{5x}{7y}\\right)$. Find $f_{xy}$.",
    "answer": "\\frac{70(25x^2 - 49y^2)}{(25x^2 + 49y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 2 \\frac{1}{1 + \\left(\\frac{5x}{7y}\\right)^2} \\cdot \\frac{5}{7y} = \\frac{2 \\cdot 49y^2}{25x^2 + 49y^2} \\cdot \\frac{5}{7y} = \\frac{70y}{25x^2 + 49y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( \\frac{70y}{25x^2 + 49y^2} \\right) \\\\[10pt]\n&= \\frac{70(25x^2 + 49y^2) - (70y)(2 \\cdot 49y)}{(25x^2 + 49y^2)^2} \\\\[10pt]\n&= \\frac{70(25x^2 + 49y^2) - 6860y^2}{(25x^2 + 49y^2)^2} \\\\[10pt]\n&= \\frac{70(25x^2 - 49y^2)}{(25x^2 + 49y^2)^2} \\\\\n&= \\frac{70(25x^2 - 49y^2)}{(25x^2 + 49y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch3_5",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\ln(2x^2 + 3y^2)$. Find the mixed second-order partial derivative $f_{xy}$.",
    "answer": "-\\frac{72xy}{(2x^2 + 3y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 3 \\frac{1}{2x^2 + 3y^2} \\cdot (4x) = \\frac{12x}{2x^2 + 3y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 12x(2x^2 + 3y^2)^{-1} \\right] \\\\[10pt]\n&= 12x (-1)(2x^2 + 3y^2)^{-2} (6y) \\\\[10pt]\n&= -\\frac{72xy}{(2x^2 + 3y^2)^2} \\\\\n&= -\\frac{72xy}{(2x^2 + 3y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch4_5",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\sin(4x^2 y^3)$. Find $f_{xy}$.",
    "answer": "48xy^2 \\cos(4x^2 y^3) - 192x^3 y^5 \\sin(4x^2 y^3)",
    "steps": "\\begin{aligned}\nf_x &= 2 \\cos(4x^2 y^3) \\cdot (8xy^3) = 16xy^3 \\cos(4x^2 y^3) \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 16xy^3 \\cos(4x^2 y^3) \\right) \\\\[10pt]\n&= 16x \\left[ 3y^2 \\cos(4x^2 y^3) + y^3 (-\\sin(4x^2 y^3)) (\\frac{\\partial}{\\partial y}(4x^2 y^3)) \\right] \\\\[10pt]\n&= 16x \\left[ 3y^2 \\cos(4x^2 y^3) - y^3 \\sin(4x^2 y^3) (12x^2 y^2) \\right] \\\\[10pt]\n&= 48xy^2 \\cos(4x^2 y^3) - 192x^3 y^5 \\sin(4x^2 y^3) \\\\\n&= 48xy^2 \\cos(4x^2 y^3) - 192x^3 y^5 \\sin(4x^2 y^3)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch5_5",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\sqrt{4x^2 + 3y^2}$. Find the second-order partial derivative $f_{xx}$.",
    "answer": "\\frac{24y^2}{(4x^2 + 3y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= \\frac{1}{2} 2(4x^2 + 3y^2)^{-\\frac{1}{2}} (\\frac{\\partial}{\\partial x}(4x^2 + 3y^2)) \\\\[10pt]\n&= \\frac{1}{2} 2(4x^2 + 3y^2)^{-\\frac{1}{2}} (8x) = \\frac{8x}{\\sqrt{4x^2 + 3y^2}} \\\\[10pt]\nf_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{8x}{\\sqrt{4x^2 + 3y^2}} \\right) \\\\[10pt]\n&= \\frac{8\\sqrt{4x^2 + 3y^2} - 8x \\left( \\frac{4x}{\\sqrt{4x^2 + 3y^2}} \\right)}{4x^2 + 3y^2} \\\\[10pt]\n&= \\frac{\\frac{8(4x^2 + 3y^2) - 32x^2}{\\sqrt{4x^2 + 3y^2}}}{4x^2 + 3y^2} \\\\[10pt]\n&= \\frac{32x^2 + 24y^2 - 32x^2}{(4x^2 + 3y^2)^{\\frac{3}{2}}} \\\\[10pt]\n&= \\frac{24y^2}{(4x^2 + 3y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch6_5",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 \\arcsin(6xy)$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "\\frac{30}{(1 - 36x^2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= 5 \\frac{1}{\\sqrt{1 - (6xy)^2}} (6y) = \\frac{30y}{\\sqrt{1 - 36x^2y^2}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 30y (1 - 36x^2y^2)^{-\\frac{1}{2}} \\right] \\\\[10pt]\n&= 30 \\left[ 1 \\cdot (1 - 36x^2y^2)^{-\\frac{1}{2}} + y \\left(-\\frac{1}{2}\\right)(1 - 36x^2y^2)^{-\\frac{3}{2}} (-72x^2y) \\right] \\\\[10pt]\n&= 30 \\left[ \\frac{1}{\\sqrt{1 - 36x^2y^2}} + \\frac{36x^2y^2}{(1 - 36x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= 30 \\left[ \\frac{(1 - 36x^2y^2) + 36x^2y^2}{(1 - 36x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= \\frac{30 (1)}{(1 - 36x^2y^2)^{\\frac{3}{2}}} = \\frac{30}{(1 - 36x^2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch1_6",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 y^{7} e^{\\frac{5x}{y}}$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "15y^{4} e^{\\frac{5x}{y}} (6y - 5x)",
    "steps": "\\begin{aligned}\nf_x &= \\frac{\\partial}{\\partial x} \\left( 3 y^{7} e^{\\frac{5x}{y}} \\right) = 3 y^{7} e^{\\frac{5x}{y}} \\left(\\frac{5}{y}\\right) = 15 y^{6} e^{\\frac{5x}{y}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 15 y^{6} e^{\\frac{5x}{y}} \\right) \\\\[10pt]\n&= 15 \\left[ (6)y^{5} e^{\\frac{5x}{y}} + y^{6} e^{\\frac{5x}{y}} \\left(-\\frac{5x}{y^2}\\right) \\right] \\\\[10pt]\n&= 15 y^{4} e^{\\frac{5x}{y}} \\left( 6y - 5x \\right) \\\\\n&= 15y^{4} e^{\\frac{5x}{y}} (6y - 5x)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch2_6",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 \\arctan\\left(\\frac{5x}{2y}\\right)$. Find $f_{xy}$.",
    "answer": "\\frac{50(25x^2 - 4y^2)}{(25x^2 + 4y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 5 \\frac{1}{1 + \\left(\\frac{5x}{2y}\\right)^2} \\cdot \\frac{5}{2y} = \\frac{5 \\cdot 4y^2}{25x^2 + 4y^2} \\cdot \\frac{5}{2y} = \\frac{50y}{25x^2 + 4y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( \\frac{50y}{25x^2 + 4y^2} \\right) \\\\[10pt]\n&= \\frac{50(25x^2 + 4y^2) - (50y)(2 \\cdot 4y)}{(25x^2 + 4y^2)^2} \\\\[10pt]\n&= \\frac{50(25x^2 + 4y^2) - 400y^2}{(25x^2 + 4y^2)^2} \\\\[10pt]\n&= \\frac{50(25x^2 - 4y^2)}{(25x^2 + 4y^2)^2} \\\\\n&= \\frac{50(25x^2 - 4y^2)}{(25x^2 + 4y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch3_6",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 \\ln(4x^2 + 3y^2)$. Find the mixed second-order partial derivative $f_{xy}$.",
    "answer": "-\\frac{192xy}{(4x^2 + 3y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 4 \\frac{1}{4x^2 + 3y^2} \\cdot (8x) = \\frac{32x}{4x^2 + 3y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 32x(4x^2 + 3y^2)^{-1} \\right] \\\\[10pt]\n&= 32x (-1)(4x^2 + 3y^2)^{-2} (6y) \\\\[10pt]\n&= -\\frac{192xy}{(4x^2 + 3y^2)^2} \\\\\n&= -\\frac{192xy}{(4x^2 + 3y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch4_6",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\sin(2x^2 y^3)$. Find $f_{xy}$.",
    "answer": "24xy^2 \\cos(2x^2 y^3) - 48x^3 y^5 \\sin(2x^2 y^3)",
    "steps": "\\begin{aligned}\nf_x &= 2 \\cos(2x^2 y^3) \\cdot (4xy^3) = 8xy^3 \\cos(2x^2 y^3) \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 8xy^3 \\cos(2x^2 y^3) \\right) \\\\[10pt]\n&= 8x \\left[ 3y^2 \\cos(2x^2 y^3) + y^3 (-\\sin(2x^2 y^3)) (\\frac{\\partial}{\\partial y}(2x^2 y^3)) \\right] \\\\[10pt]\n&= 8x \\left[ 3y^2 \\cos(2x^2 y^3) - y^3 \\sin(2x^2 y^3) (6x^2 y^2) \\right] \\\\[10pt]\n&= 24xy^2 \\cos(2x^2 y^3) - 48x^3 y^5 \\sin(2x^2 y^3) \\\\\n&= 24xy^2 \\cos(2x^2 y^3) - 48x^3 y^5 \\sin(2x^2 y^3)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch5_6",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\sqrt{5x^2 + 5y^2}$. Find the second-order partial derivative $f_{xx}$.",
    "answer": "\\frac{75y^2}{(5x^2 + 5y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= \\frac{1}{2} 3(5x^2 + 5y^2)^{-\\frac{1}{2}} (\\frac{\\partial}{\\partial x}(5x^2 + 5y^2)) \\\\[10pt]\n&= \\frac{1}{2} 3(5x^2 + 5y^2)^{-\\frac{1}{2}} (10x) = \\frac{15x}{\\sqrt{5x^2 + 5y^2}} \\\\[10pt]\nf_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{15x}{\\sqrt{5x^2 + 5y^2}} \\right) \\\\[10pt]\n&= \\frac{15\\sqrt{5x^2 + 5y^2} - 15x \\left( \\frac{5x}{\\sqrt{5x^2 + 5y^2}} \\right)}{5x^2 + 5y^2} \\\\[10pt]\n&= \\frac{\\frac{15(5x^2 + 5y^2) - 75x^2}{\\sqrt{5x^2 + 5y^2}}}{5x^2 + 5y^2} \\\\[10pt]\n&= \\frac{75x^2 + 75y^2 - 75x^2}{(5x^2 + 5y^2)^{\\frac{3}{2}}} \\\\[10pt]\n&= \\frac{75y^2}{(5x^2 + 5y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch6_6",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 8 \\arcsin(2xy)$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "\\frac{16}{(1 - 4x^2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= 8 \\frac{1}{\\sqrt{1 - (2xy)^2}} (2y) = \\frac{16y}{\\sqrt{1 - 4x^2y^2}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 16y (1 - 4x^2y^2)^{-\\frac{1}{2}} \\right] \\\\[10pt]\n&= 16 \\left[ 1 \\cdot (1 - 4x^2y^2)^{-\\frac{1}{2}} + y \\left(-\\frac{1}{2}\\right)(1 - 4x^2y^2)^{-\\frac{3}{2}} (-8x^2y) \\right] \\\\[10pt]\n&= 16 \\left[ \\frac{1}{\\sqrt{1 - 4x^2y^2}} + \\frac{4x^2y^2}{(1 - 4x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= 16 \\left[ \\frac{(1 - 4x^2y^2) + 4x^2y^2}{(1 - 4x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= \\frac{16 (1)}{(1 - 4x^2y^2)^{\\frac{3}{2}}} = \\frac{16}{(1 - 4x^2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch1_7",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 y^{6} e^{\\frac{4x}{y}}$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "12y^{3} e^{\\frac{4x}{y}} (5y - 4x)",
    "steps": "\\begin{aligned}\nf_x &= \\frac{\\partial}{\\partial x} \\left( 3 y^{6} e^{\\frac{4x}{y}} \\right) = 3 y^{6} e^{\\frac{4x}{y}} \\left(\\frac{4}{y}\\right) = 12 y^{5} e^{\\frac{4x}{y}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 12 y^{5} e^{\\frac{4x}{y}} \\right) \\\\[10pt]\n&= 12 \\left[ (5)y^{4} e^{\\frac{4x}{y}} + y^{5} e^{\\frac{4x}{y}} \\left(-\\frac{4x}{y^2}\\right) \\right] \\\\[10pt]\n&= 12 y^{3} e^{\\frac{4x}{y}} \\left( 5y - 4x \\right) \\\\\n&= 12y^{3} e^{\\frac{4x}{y}} (5y - 4x)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch2_7",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 \\arctan\\left(\\frac{2x}{5y}\\right)$. Find $f_{xy}$.",
    "answer": "\\frac{50(4x^2 - 25y^2)}{(4x^2 + 25y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 5 \\frac{1}{1 + \\left(\\frac{2x}{5y}\\right)^2} \\cdot \\frac{2}{5y} = \\frac{5 \\cdot 25y^2}{4x^2 + 25y^2} \\cdot \\frac{2}{5y} = \\frac{50y}{4x^2 + 25y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( \\frac{50y}{4x^2 + 25y^2} \\right) \\\\[10pt]\n&= \\frac{50(4x^2 + 25y^2) - (50y)(2 \\cdot 25y)}{(4x^2 + 25y^2)^2} \\\\[10pt]\n&= \\frac{50(4x^2 + 25y^2) - 2500y^2}{(4x^2 + 25y^2)^2} \\\\[10pt]\n&= \\frac{50(4x^2 - 25y^2)}{(4x^2 + 25y^2)^2} \\\\\n&= \\frac{50(4x^2 - 25y^2)}{(4x^2 + 25y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch3_7",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 \\ln(3x^2 + 5y^2)$. Find the mixed second-order partial derivative $f_{xy}$.",
    "answer": "-\\frac{240xy}{(3x^2 + 5y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 4 \\frac{1}{3x^2 + 5y^2} \\cdot (6x) = \\frac{24x}{3x^2 + 5y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 24x(3x^2 + 5y^2)^{-1} \\right] \\\\[10pt]\n&= 24x (-1)(3x^2 + 5y^2)^{-2} (10y) \\\\[10pt]\n&= -\\frac{240xy}{(3x^2 + 5y^2)^2} \\\\\n&= -\\frac{240xy}{(3x^2 + 5y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch4_7",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\sin(4x^2 y^3)$. Find $f_{xy}$.",
    "answer": "72xy^2 \\cos(4x^2 y^3) - 288x^3 y^5 \\sin(4x^2 y^3)",
    "steps": "\\begin{aligned}\nf_x &= 3 \\cos(4x^2 y^3) \\cdot (8xy^3) = 24xy^3 \\cos(4x^2 y^3) \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 24xy^3 \\cos(4x^2 y^3) \\right) \\\\[10pt]\n&= 24x \\left[ 3y^2 \\cos(4x^2 y^3) + y^3 (-\\sin(4x^2 y^3)) (\\frac{\\partial}{\\partial y}(4x^2 y^3)) \\right] \\\\[10pt]\n&= 24x \\left[ 3y^2 \\cos(4x^2 y^3) - y^3 \\sin(4x^2 y^3) (12x^2 y^2) \\right] \\\\[10pt]\n&= 72xy^2 \\cos(4x^2 y^3) - 288x^3 y^5 \\sin(4x^2 y^3) \\\\\n&= 72xy^2 \\cos(4x^2 y^3) - 288x^3 y^5 \\sin(4x^2 y^3)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch5_7",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 7 \\sqrt{3x^2 + 4y^2}$. Find the second-order partial derivative $f_{xx}$.",
    "answer": "\\frac{84y^2}{(3x^2 + 4y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= \\frac{1}{2} 7(3x^2 + 4y^2)^{-\\frac{1}{2}} (\\frac{\\partial}{\\partial x}(3x^2 + 4y^2)) \\\\[10pt]\n&= \\frac{1}{2} 7(3x^2 + 4y^2)^{-\\frac{1}{2}} (6x) = \\frac{21x}{\\sqrt{3x^2 + 4y^2}} \\\\[10pt]\nf_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{21x}{\\sqrt{3x^2 + 4y^2}} \\right) \\\\[10pt]\n&= \\frac{21\\sqrt{3x^2 + 4y^2} - 21x \\left( \\frac{3x}{\\sqrt{3x^2 + 4y^2}} \\right)}{3x^2 + 4y^2} \\\\[10pt]\n&= \\frac{\\frac{21(3x^2 + 4y^2) - 63x^2}{\\sqrt{3x^2 + 4y^2}}}{3x^2 + 4y^2} \\\\[10pt]\n&= \\frac{63x^2 + 84y^2 - 63x^2}{(3x^2 + 4y^2)^{\\frac{3}{2}}} \\\\[10pt]\n&= \\frac{84y^2}{(3x^2 + 4y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch6_7",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 \\arcsin(6xy)$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "\\frac{24}{(1 - 36x^2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= 4 \\frac{1}{\\sqrt{1 - (6xy)^2}} (6y) = \\frac{24y}{\\sqrt{1 - 36x^2y^2}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 24y (1 - 36x^2y^2)^{-\\frac{1}{2}} \\right] \\\\[10pt]\n&= 24 \\left[ 1 \\cdot (1 - 36x^2y^2)^{-\\frac{1}{2}} + y \\left(-\\frac{1}{2}\\right)(1 - 36x^2y^2)^{-\\frac{3}{2}} (-72x^2y) \\right] \\\\[10pt]\n&= 24 \\left[ \\frac{1}{\\sqrt{1 - 36x^2y^2}} + \\frac{36x^2y^2}{(1 - 36x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= 24 \\left[ \\frac{(1 - 36x^2y^2) + 36x^2y^2}{(1 - 36x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= \\frac{24 (1)}{(1 - 36x^2y^2)^{\\frac{3}{2}}} = \\frac{24}{(1 - 36x^2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch1_8",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 y^{4} e^{\\frac{2x}{y}}$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "8y e^{\\frac{2x}{y}} (3y - 2x)",
    "steps": "\\begin{aligned}\nf_x &= \\frac{\\partial}{\\partial x} \\left( 4 y^{4} e^{\\frac{2x}{y}} \\right) = 4 y^{4} e^{\\frac{2x}{y}} \\left(\\frac{2}{y}\\right) = 8 y^{3} e^{\\frac{2x}{y}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 8 y^{3} e^{\\frac{2x}{y}} \\right) \\\\[10pt]\n&= 8 \\left[ (3)y^{2} e^{\\frac{2x}{y}} + y^{3} e^{\\frac{2x}{y}} \\left(-\\frac{2x}{y^2}\\right) \\right] \\\\[10pt]\n&= 8 y^{1} e^{\\frac{2x}{y}} \\left( 3y - 2x \\right) \\\\\n&= 8y e^{\\frac{2x}{y}} (3y - 2x)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch2_8",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\arctan\\left(\\frac{2x}{2y}\\right)$. Find $f_{xy}$.",
    "answer": "\\frac{12(4x^2 - 4y^2)}{(4x^2 + 4y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 3 \\frac{1}{1 + \\left(\\frac{2x}{2y}\\right)^2} \\cdot \\frac{2}{2y} = \\frac{3 \\cdot 4y^2}{4x^2 + 4y^2} \\cdot \\frac{2}{2y} = \\frac{12y}{4x^2 + 4y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( \\frac{12y}{4x^2 + 4y^2} \\right) \\\\[10pt]\n&= \\frac{12(4x^2 + 4y^2) - (12y)(2 \\cdot 4y)}{(4x^2 + 4y^2)^2} \\\\[10pt]\n&= \\frac{12(4x^2 + 4y^2) - 96y^2}{(4x^2 + 4y^2)^2} \\\\[10pt]\n&= \\frac{12(4x^2 - 4y^2)}{(4x^2 + 4y^2)^2} \\\\\n&= \\frac{12(4x^2 - 4y^2)}{(4x^2 + 4y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch3_8",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\ln(3x^2 + 4y^2)$. Find the mixed second-order partial derivative $f_{xy}$.",
    "answer": "-\\frac{144xy}{(3x^2 + 4y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 3 \\frac{1}{3x^2 + 4y^2} \\cdot (6x) = \\frac{18x}{3x^2 + 4y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 18x(3x^2 + 4y^2)^{-1} \\right] \\\\[10pt]\n&= 18x (-1)(3x^2 + 4y^2)^{-2} (8y) \\\\[10pt]\n&= -\\frac{144xy}{(3x^2 + 4y^2)^2} \\\\\n&= -\\frac{144xy}{(3x^2 + 4y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch4_8",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 \\sin(5x^2 y^3)$. Find $f_{xy}$.",
    "answer": "120xy^2 \\cos(5x^2 y^3) - 600x^3 y^5 \\sin(5x^2 y^3)",
    "steps": "\\begin{aligned}\nf_x &= 4 \\cos(5x^2 y^3) \\cdot (10xy^3) = 40xy^3 \\cos(5x^2 y^3) \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 40xy^3 \\cos(5x^2 y^3) \\right) \\\\[10pt]\n&= 40x \\left[ 3y^2 \\cos(5x^2 y^3) + y^3 (-\\sin(5x^2 y^3)) (\\frac{\\partial}{\\partial y}(5x^2 y^3)) \\right] \\\\[10pt]\n&= 40x \\left[ 3y^2 \\cos(5x^2 y^3) - y^3 \\sin(5x^2 y^3) (15x^2 y^2) \\right] \\\\[10pt]\n&= 120xy^2 \\cos(5x^2 y^3) - 600x^3 y^5 \\sin(5x^2 y^3) \\\\\n&= 120xy^2 \\cos(5x^2 y^3) - 600x^3 y^5 \\sin(5x^2 y^3)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch5_8",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 \\sqrt{2x^2 + 4y^2}$. Find the second-order partial derivative $f_{xx}$.",
    "answer": "\\frac{32y^2}{(2x^2 + 4y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= \\frac{1}{2} 4(2x^2 + 4y^2)^{-\\frac{1}{2}} (\\frac{\\partial}{\\partial x}(2x^2 + 4y^2)) \\\\[10pt]\n&= \\frac{1}{2} 4(2x^2 + 4y^2)^{-\\frac{1}{2}} (4x) = \\frac{8x}{\\sqrt{2x^2 + 4y^2}} \\\\[10pt]\nf_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{8x}{\\sqrt{2x^2 + 4y^2}} \\right) \\\\[10pt]\n&= \\frac{8\\sqrt{2x^2 + 4y^2} - 8x \\left( \\frac{2x}{\\sqrt{2x^2 + 4y^2}} \\right)}{2x^2 + 4y^2} \\\\[10pt]\n&= \\frac{\\frac{8(2x^2 + 4y^2) - 16x^2}{\\sqrt{2x^2 + 4y^2}}}{2x^2 + 4y^2} \\\\[10pt]\n&= \\frac{16x^2 + 32y^2 - 16x^2}{(2x^2 + 4y^2)^{\\frac{3}{2}}} \\\\[10pt]\n&= \\frac{32y^2}{(2x^2 + 4y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch6_8",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 8 \\arcsin(6xy)$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "\\frac{48}{(1 - 36x^2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= 8 \\frac{1}{\\sqrt{1 - (6xy)^2}} (6y) = \\frac{48y}{\\sqrt{1 - 36x^2y^2}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 48y (1 - 36x^2y^2)^{-\\frac{1}{2}} \\right] \\\\[10pt]\n&= 48 \\left[ 1 \\cdot (1 - 36x^2y^2)^{-\\frac{1}{2}} + y \\left(-\\frac{1}{2}\\right)(1 - 36x^2y^2)^{-\\frac{3}{2}} (-72x^2y) \\right] \\\\[10pt]\n&= 48 \\left[ \\frac{1}{\\sqrt{1 - 36x^2y^2}} + \\frac{36x^2y^2}{(1 - 36x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= 48 \\left[ \\frac{(1 - 36x^2y^2) + 36x^2y^2}{(1 - 36x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= \\frac{48 (1)}{(1 - 36x^2y^2)^{\\frac{3}{2}}} = \\frac{48}{(1 - 36x^2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch1_9",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 y^{7} e^{\\frac{4x}{y}}$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "16y^{4} e^{\\frac{4x}{y}} (6y - 4x)",
    "steps": "\\begin{aligned}\nf_x &= \\frac{\\partial}{\\partial x} \\left( 4 y^{7} e^{\\frac{4x}{y}} \\right) = 4 y^{7} e^{\\frac{4x}{y}} \\left(\\frac{4}{y}\\right) = 16 y^{6} e^{\\frac{4x}{y}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 16 y^{6} e^{\\frac{4x}{y}} \\right) \\\\[10pt]\n&= 16 \\left[ (6)y^{5} e^{\\frac{4x}{y}} + y^{6} e^{\\frac{4x}{y}} \\left(-\\frac{4x}{y^2}\\right) \\right] \\\\[10pt]\n&= 16 y^{4} e^{\\frac{4x}{y}} \\left( 6y - 4x \\right) \\\\\n&= 16y^{4} e^{\\frac{4x}{y}} (6y - 4x)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch2_9",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 \\arctan\\left(\\frac{5x}{2y}\\right)$. Find $f_{xy}$.",
    "answer": "\\frac{50(25x^2 - 4y^2)}{(25x^2 + 4y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 5 \\frac{1}{1 + \\left(\\frac{5x}{2y}\\right)^2} \\cdot \\frac{5}{2y} = \\frac{5 \\cdot 4y^2}{25x^2 + 4y^2} \\cdot \\frac{5}{2y} = \\frac{50y}{25x^2 + 4y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( \\frac{50y}{25x^2 + 4y^2} \\right) \\\\[10pt]\n&= \\frac{50(25x^2 + 4y^2) - (50y)(2 \\cdot 4y)}{(25x^2 + 4y^2)^2} \\\\[10pt]\n&= \\frac{50(25x^2 + 4y^2) - 400y^2}{(25x^2 + 4y^2)^2} \\\\[10pt]\n&= \\frac{50(25x^2 - 4y^2)}{(25x^2 + 4y^2)^2} \\\\\n&= \\frac{50(25x^2 - 4y^2)}{(25x^2 + 4y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch3_9",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 \\ln(5x^2 + 3y^2)$. Find the mixed second-order partial derivative $f_{xy}$.",
    "answer": "-\\frac{240xy}{(5x^2 + 3y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 4 \\frac{1}{5x^2 + 3y^2} \\cdot (10x) = \\frac{40x}{5x^2 + 3y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 40x(5x^2 + 3y^2)^{-1} \\right] \\\\[10pt]\n&= 40x (-1)(5x^2 + 3y^2)^{-2} (6y) \\\\[10pt]\n&= -\\frac{240xy}{(5x^2 + 3y^2)^2} \\\\\n&= -\\frac{240xy}{(5x^2 + 3y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch4_9",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 \\sin(4x^2 y^3)$. Find $f_{xy}$.",
    "answer": "96xy^2 \\cos(4x^2 y^3) - 384x^3 y^5 \\sin(4x^2 y^3)",
    "steps": "\\begin{aligned}\nf_x &= 4 \\cos(4x^2 y^3) \\cdot (8xy^3) = 32xy^3 \\cos(4x^2 y^3) \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 32xy^3 \\cos(4x^2 y^3) \\right) \\\\[10pt]\n&= 32x \\left[ 3y^2 \\cos(4x^2 y^3) + y^3 (-\\sin(4x^2 y^3)) (\\frac{\\partial}{\\partial y}(4x^2 y^3)) \\right] \\\\[10pt]\n&= 32x \\left[ 3y^2 \\cos(4x^2 y^3) - y^3 \\sin(4x^2 y^3) (12x^2 y^2) \\right] \\\\[10pt]\n&= 96xy^2 \\cos(4x^2 y^3) - 384x^3 y^5 \\sin(4x^2 y^3) \\\\\n&= 96xy^2 \\cos(4x^2 y^3) - 384x^3 y^5 \\sin(4x^2 y^3)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch5_9",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 \\sqrt{5x^2 + 2y^2}$. Find the second-order partial derivative $f_{xx}$.",
    "answer": "\\frac{40y^2}{(5x^2 + 2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= \\frac{1}{2} 4(5x^2 + 2y^2)^{-\\frac{1}{2}} (\\frac{\\partial}{\\partial x}(5x^2 + 2y^2)) \\\\[10pt]\n&= \\frac{1}{2} 4(5x^2 + 2y^2)^{-\\frac{1}{2}} (10x) = \\frac{20x}{\\sqrt{5x^2 + 2y^2}} \\\\[10pt]\nf_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{20x}{\\sqrt{5x^2 + 2y^2}} \\right) \\\\[10pt]\n&= \\frac{20\\sqrt{5x^2 + 2y^2} - 20x \\left( \\frac{5x}{\\sqrt{5x^2 + 2y^2}} \\right)}{5x^2 + 2y^2} \\\\[10pt]\n&= \\frac{\\frac{20(5x^2 + 2y^2) - 100x^2}{\\sqrt{5x^2 + 2y^2}}}{5x^2 + 2y^2} \\\\[10pt]\n&= \\frac{100x^2 + 40y^2 - 100x^2}{(5x^2 + 2y^2)^{\\frac{3}{2}}} \\\\[10pt]\n&= \\frac{40y^2}{(5x^2 + 2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch6_9",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\arcsin(6xy)$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "\\frac{18}{(1 - 36x^2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= 3 \\frac{1}{\\sqrt{1 - (6xy)^2}} (6y) = \\frac{18y}{\\sqrt{1 - 36x^2y^2}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 18y (1 - 36x^2y^2)^{-\\frac{1}{2}} \\right] \\\\[10pt]\n&= 18 \\left[ 1 \\cdot (1 - 36x^2y^2)^{-\\frac{1}{2}} + y \\left(-\\frac{1}{2}\\right)(1 - 36x^2y^2)^{-\\frac{3}{2}} (-72x^2y) \\right] \\\\[10pt]\n&= 18 \\left[ \\frac{1}{\\sqrt{1 - 36x^2y^2}} + \\frac{36x^2y^2}{(1 - 36x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= 18 \\left[ \\frac{(1 - 36x^2y^2) + 36x^2y^2}{(1 - 36x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= \\frac{18 (1)}{(1 - 36x^2y^2)^{\\frac{3}{2}}} = \\frac{18}{(1 - 36x^2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch1_10",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 y^{5} e^{\\frac{5x}{y}}$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "15y^{2} e^{\\frac{5x}{y}} (4y - 5x)",
    "steps": "\\begin{aligned}\nf_x &= \\frac{\\partial}{\\partial x} \\left( 3 y^{5} e^{\\frac{5x}{y}} \\right) = 3 y^{5} e^{\\frac{5x}{y}} \\left(\\frac{5}{y}\\right) = 15 y^{4} e^{\\frac{5x}{y}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 15 y^{4} e^{\\frac{5x}{y}} \\right) \\\\[10pt]\n&= 15 \\left[ (4)y^{3} e^{\\frac{5x}{y}} + y^{4} e^{\\frac{5x}{y}} \\left(-\\frac{5x}{y^2}\\right) \\right] \\\\[10pt]\n&= 15 y^{2} e^{\\frac{5x}{y}} \\left( 4y - 5x \\right) \\\\\n&= 15y^{2} e^{\\frac{5x}{y}} (4y - 5x)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch2_10",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 \\arctan\\left(\\frac{7x}{5y}\\right)$. Find $f_{xy}$.",
    "answer": "\\frac{140(49x^2 - 25y^2)}{(49x^2 + 25y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 4 \\frac{1}{1 + \\left(\\frac{7x}{5y}\\right)^2} \\cdot \\frac{7}{5y} = \\frac{4 \\cdot 25y^2}{49x^2 + 25y^2} \\cdot \\frac{7}{5y} = \\frac{140y}{49x^2 + 25y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( \\frac{140y}{49x^2 + 25y^2} \\right) \\\\[10pt]\n&= \\frac{140(49x^2 + 25y^2) - (140y)(2 \\cdot 25y)}{(49x^2 + 25y^2)^2} \\\\[10pt]\n&= \\frac{140(49x^2 + 25y^2) - 7000y^2}{(49x^2 + 25y^2)^2} \\\\[10pt]\n&= \\frac{140(49x^2 - 25y^2)}{(49x^2 + 25y^2)^2} \\\\\n&= \\frac{140(49x^2 - 25y^2)}{(49x^2 + 25y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch3_10",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\ln(4x^2 + 2y^2)$. Find the mixed second-order partial derivative $f_{xy}$.",
    "answer": "-\\frac{64xy}{(4x^2 + 2y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 2 \\frac{1}{4x^2 + 2y^2} \\cdot (8x) = \\frac{16x}{4x^2 + 2y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 16x(4x^2 + 2y^2)^{-1} \\right] \\\\[10pt]\n&= 16x (-1)(4x^2 + 2y^2)^{-2} (4y) \\\\[10pt]\n&= -\\frac{64xy}{(4x^2 + 2y^2)^2} \\\\\n&= -\\frac{64xy}{(4x^2 + 2y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch4_10",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 \\sin(5x^2 y^3)$. Find $f_{xy}$.",
    "answer": "150xy^2 \\cos(5x^2 y^3) - 750x^3 y^5 \\sin(5x^2 y^3)",
    "steps": "\\begin{aligned}\nf_x &= 5 \\cos(5x^2 y^3) \\cdot (10xy^3) = 50xy^3 \\cos(5x^2 y^3) \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 50xy^3 \\cos(5x^2 y^3) \\right) \\\\[10pt]\n&= 50x \\left[ 3y^2 \\cos(5x^2 y^3) + y^3 (-\\sin(5x^2 y^3)) (\\frac{\\partial}{\\partial y}(5x^2 y^3)) \\right] \\\\[10pt]\n&= 50x \\left[ 3y^2 \\cos(5x^2 y^3) - y^3 \\sin(5x^2 y^3) (15x^2 y^2) \\right] \\\\[10pt]\n&= 150xy^2 \\cos(5x^2 y^3) - 750x^3 y^5 \\sin(5x^2 y^3) \\\\\n&= 150xy^2 \\cos(5x^2 y^3) - 750x^3 y^5 \\sin(5x^2 y^3)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch5_10",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\sqrt{4x^2 + 2y^2}$. Find the second-order partial derivative $f_{xx}$.",
    "answer": "\\frac{16y^2}{(4x^2 + 2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= \\frac{1}{2} 2(4x^2 + 2y^2)^{-\\frac{1}{2}} (\\frac{\\partial}{\\partial x}(4x^2 + 2y^2)) \\\\[10pt]\n&= \\frac{1}{2} 2(4x^2 + 2y^2)^{-\\frac{1}{2}} (8x) = \\frac{8x}{\\sqrt{4x^2 + 2y^2}} \\\\[10pt]\nf_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{8x}{\\sqrt{4x^2 + 2y^2}} \\right) \\\\[10pt]\n&= \\frac{8\\sqrt{4x^2 + 2y^2} - 8x \\left( \\frac{4x}{\\sqrt{4x^2 + 2y^2}} \\right)}{4x^2 + 2y^2} \\\\[10pt]\n&= \\frac{\\frac{8(4x^2 + 2y^2) - 32x^2}{\\sqrt{4x^2 + 2y^2}}}{4x^2 + 2y^2} \\\\[10pt]\n&= \\frac{32x^2 + 16y^2 - 32x^2}{(4x^2 + 2y^2)^{\\frac{3}{2}}} \\\\[10pt]\n&= \\frac{16y^2}{(4x^2 + 2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch6_10",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 8 \\arcsin(3xy)$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "\\frac{24}{(1 - 9x^2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= 8 \\frac{1}{\\sqrt{1 - (3xy)^2}} (3y) = \\frac{24y}{\\sqrt{1 - 9x^2y^2}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 24y (1 - 9x^2y^2)^{-\\frac{1}{2}} \\right] \\\\[10pt]\n&= 24 \\left[ 1 \\cdot (1 - 9x^2y^2)^{-\\frac{1}{2}} + y \\left(-\\frac{1}{2}\\right)(1 - 9x^2y^2)^{-\\frac{3}{2}} (-18x^2y) \\right] \\\\[10pt]\n&= 24 \\left[ \\frac{1}{\\sqrt{1 - 9x^2y^2}} + \\frac{9x^2y^2}{(1 - 9x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= 24 \\left[ \\frac{(1 - 9x^2y^2) + 9x^2y^2}{(1 - 9x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= \\frac{24 (1)}{(1 - 9x^2y^2)^{\\frac{3}{2}}} = \\frac{24}{(1 - 9x^2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch1_11",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 y^{6} e^{\\frac{3x}{y}}$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "6y^{3} e^{\\frac{3x}{y}} (5y - 3x)",
    "steps": "\\begin{aligned}\nf_x &= \\frac{\\partial}{\\partial x} \\left( 2 y^{6} e^{\\frac{3x}{y}} \\right) = 2 y^{6} e^{\\frac{3x}{y}} \\left(\\frac{3}{y}\\right) = 6 y^{5} e^{\\frac{3x}{y}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 6 y^{5} e^{\\frac{3x}{y}} \\right) \\\\[10pt]\n&= 6 \\left[ (5)y^{4} e^{\\frac{3x}{y}} + y^{5} e^{\\frac{3x}{y}} \\left(-\\frac{3x}{y^2}\\right) \\right] \\\\[10pt]\n&= 6 y^{3} e^{\\frac{3x}{y}} \\left( 5y - 3x \\right) \\\\\n&= 6y^{3} e^{\\frac{3x}{y}} (5y - 3x)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch2_11",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\arctan\\left(\\frac{2x}{3y}\\right)$. Find $f_{xy}$.",
    "answer": "\\frac{12(4x^2 - 9y^2)}{(4x^2 + 9y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 2 \\frac{1}{1 + \\left(\\frac{2x}{3y}\\right)^2} \\cdot \\frac{2}{3y} = \\frac{2 \\cdot 9y^2}{4x^2 + 9y^2} \\cdot \\frac{2}{3y} = \\frac{12y}{4x^2 + 9y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( \\frac{12y}{4x^2 + 9y^2} \\right) \\\\[10pt]\n&= \\frac{12(4x^2 + 9y^2) - (12y)(2 \\cdot 9y)}{(4x^2 + 9y^2)^2} \\\\[10pt]\n&= \\frac{12(4x^2 + 9y^2) - 216y^2}{(4x^2 + 9y^2)^2} \\\\[10pt]\n&= \\frac{12(4x^2 - 9y^2)}{(4x^2 + 9y^2)^2} \\\\\n&= \\frac{12(4x^2 - 9y^2)}{(4x^2 + 9y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch3_11",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\ln(5x^2 + 2y^2)$. Find the mixed second-order partial derivative $f_{xy}$.",
    "answer": "-\\frac{80xy}{(5x^2 + 2y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 2 \\frac{1}{5x^2 + 2y^2} \\cdot (10x) = \\frac{20x}{5x^2 + 2y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 20x(5x^2 + 2y^2)^{-1} \\right] \\\\[10pt]\n&= 20x (-1)(5x^2 + 2y^2)^{-2} (4y) \\\\[10pt]\n&= -\\frac{80xy}{(5x^2 + 2y^2)^2} \\\\\n&= -\\frac{80xy}{(5x^2 + 2y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch4_11",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 \\sin(4x^2 y^3)$. Find $f_{xy}$.",
    "answer": "120xy^2 \\cos(4x^2 y^3) - 480x^3 y^5 \\sin(4x^2 y^3)",
    "steps": "\\begin{aligned}\nf_x &= 5 \\cos(4x^2 y^3) \\cdot (8xy^3) = 40xy^3 \\cos(4x^2 y^3) \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 40xy^3 \\cos(4x^2 y^3) \\right) \\\\[10pt]\n&= 40x \\left[ 3y^2 \\cos(4x^2 y^3) + y^3 (-\\sin(4x^2 y^3)) (\\frac{\\partial}{\\partial y}(4x^2 y^3)) \\right] \\\\[10pt]\n&= 40x \\left[ 3y^2 \\cos(4x^2 y^3) - y^3 \\sin(4x^2 y^3) (12x^2 y^2) \\right] \\\\[10pt]\n&= 120xy^2 \\cos(4x^2 y^3) - 480x^3 y^5 \\sin(4x^2 y^3) \\\\\n&= 120xy^2 \\cos(4x^2 y^3) - 480x^3 y^5 \\sin(4x^2 y^3)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch5_11",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 7 \\sqrt{4x^2 + 2y^2}$. Find the second-order partial derivative $f_{xx}$.",
    "answer": "\\frac{56y^2}{(4x^2 + 2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= \\frac{1}{2} 7(4x^2 + 2y^2)^{-\\frac{1}{2}} (\\frac{\\partial}{\\partial x}(4x^2 + 2y^2)) \\\\[10pt]\n&= \\frac{1}{2} 7(4x^2 + 2y^2)^{-\\frac{1}{2}} (8x) = \\frac{28x}{\\sqrt{4x^2 + 2y^2}} \\\\[10pt]\nf_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{28x}{\\sqrt{4x^2 + 2y^2}} \\right) \\\\[10pt]\n&= \\frac{28\\sqrt{4x^2 + 2y^2} - 28x \\left( \\frac{4x}{\\sqrt{4x^2 + 2y^2}} \\right)}{4x^2 + 2y^2} \\\\[10pt]\n&= \\frac{\\frac{28(4x^2 + 2y^2) - 112x^2}{\\sqrt{4x^2 + 2y^2}}}{4x^2 + 2y^2} \\\\[10pt]\n&= \\frac{112x^2 + 56y^2 - 112x^2}{(4x^2 + 2y^2)^{\\frac{3}{2}}} \\\\[10pt]\n&= \\frac{56y^2}{(4x^2 + 2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch6_11",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\arcsin(2xy)$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "\\frac{6}{(1 - 4x^2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= 3 \\frac{1}{\\sqrt{1 - (2xy)^2}} (2y) = \\frac{6y}{\\sqrt{1 - 4x^2y^2}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 6y (1 - 4x^2y^2)^{-\\frac{1}{2}} \\right] \\\\[10pt]\n&= 6 \\left[ 1 \\cdot (1 - 4x^2y^2)^{-\\frac{1}{2}} + y \\left(-\\frac{1}{2}\\right)(1 - 4x^2y^2)^{-\\frac{3}{2}} (-8x^2y) \\right] \\\\[10pt]\n&= 6 \\left[ \\frac{1}{\\sqrt{1 - 4x^2y^2}} + \\frac{4x^2y^2}{(1 - 4x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= 6 \\left[ \\frac{(1 - 4x^2y^2) + 4x^2y^2}{(1 - 4x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= \\frac{6 (1)}{(1 - 4x^2y^2)^{\\frac{3}{2}}} = \\frac{6}{(1 - 4x^2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch1_12",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 y^{5} e^{\\frac{3x}{y}}$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "15y^{2} e^{\\frac{3x}{y}} (4y - 3x)",
    "steps": "\\begin{aligned}\nf_x &= \\frac{\\partial}{\\partial x} \\left( 5 y^{5} e^{\\frac{3x}{y}} \\right) = 5 y^{5} e^{\\frac{3x}{y}} \\left(\\frac{3}{y}\\right) = 15 y^{4} e^{\\frac{3x}{y}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 15 y^{4} e^{\\frac{3x}{y}} \\right) \\\\[10pt]\n&= 15 \\left[ (4)y^{3} e^{\\frac{3x}{y}} + y^{4} e^{\\frac{3x}{y}} \\left(-\\frac{3x}{y^2}\\right) \\right] \\\\[10pt]\n&= 15 y^{2} e^{\\frac{3x}{y}} \\left( 4y - 3x \\right) \\\\\n&= 15y^{2} e^{\\frac{3x}{y}} (4y - 3x)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch2_12",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 6 \\arctan\\left(\\frac{7x}{5y}\\right)$. Find $f_{xy}$.",
    "answer": "\\frac{210(49x^2 - 25y^2)}{(49x^2 + 25y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 6 \\frac{1}{1 + \\left(\\frac{7x}{5y}\\right)^2} \\cdot \\frac{7}{5y} = \\frac{6 \\cdot 25y^2}{49x^2 + 25y^2} \\cdot \\frac{7}{5y} = \\frac{210y}{49x^2 + 25y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( \\frac{210y}{49x^2 + 25y^2} \\right) \\\\[10pt]\n&= \\frac{210(49x^2 + 25y^2) - (210y)(2 \\cdot 25y)}{(49x^2 + 25y^2)^2} \\\\[10pt]\n&= \\frac{210(49x^2 + 25y^2) - 10500y^2}{(49x^2 + 25y^2)^2} \\\\[10pt]\n&= \\frac{210(49x^2 - 25y^2)}{(49x^2 + 25y^2)^2} \\\\\n&= \\frac{210(49x^2 - 25y^2)}{(49x^2 + 25y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch3_12",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 \\ln(3x^2 + 4y^2)$. Find the mixed second-order partial derivative $f_{xy}$.",
    "answer": "-\\frac{240xy}{(3x^2 + 4y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 5 \\frac{1}{3x^2 + 4y^2} \\cdot (6x) = \\frac{30x}{3x^2 + 4y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 30x(3x^2 + 4y^2)^{-1} \\right] \\\\[10pt]\n&= 30x (-1)(3x^2 + 4y^2)^{-2} (8y) \\\\[10pt]\n&= -\\frac{240xy}{(3x^2 + 4y^2)^2} \\\\\n&= -\\frac{240xy}{(3x^2 + 4y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch4_12",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\sin(3x^2 y^3)$. Find $f_{xy}$.",
    "answer": "54xy^2 \\cos(3x^2 y^3) - 162x^3 y^5 \\sin(3x^2 y^3)",
    "steps": "\\begin{aligned}\nf_x &= 3 \\cos(3x^2 y^3) \\cdot (6xy^3) = 18xy^3 \\cos(3x^2 y^3) \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 18xy^3 \\cos(3x^2 y^3) \\right) \\\\[10pt]\n&= 18x \\left[ 3y^2 \\cos(3x^2 y^3) + y^3 (-\\sin(3x^2 y^3)) (\\frac{\\partial}{\\partial y}(3x^2 y^3)) \\right] \\\\[10pt]\n&= 18x \\left[ 3y^2 \\cos(3x^2 y^3) - y^3 \\sin(3x^2 y^3) (9x^2 y^2) \\right] \\\\[10pt]\n&= 54xy^2 \\cos(3x^2 y^3) - 162x^3 y^5 \\sin(3x^2 y^3) \\\\\n&= 54xy^2 \\cos(3x^2 y^3) - 162x^3 y^5 \\sin(3x^2 y^3)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch5_12",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\sqrt{4x^2 + 3y^2}$. Find the second-order partial derivative $f_{xx}$.",
    "answer": "\\frac{36y^2}{(4x^2 + 3y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= \\frac{1}{2} 3(4x^2 + 3y^2)^{-\\frac{1}{2}} (\\frac{\\partial}{\\partial x}(4x^2 + 3y^2)) \\\\[10pt]\n&= \\frac{1}{2} 3(4x^2 + 3y^2)^{-\\frac{1}{2}} (8x) = \\frac{12x}{\\sqrt{4x^2 + 3y^2}} \\\\[10pt]\nf_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{12x}{\\sqrt{4x^2 + 3y^2}} \\right) \\\\[10pt]\n&= \\frac{12\\sqrt{4x^2 + 3y^2} - 12x \\left( \\frac{4x}{\\sqrt{4x^2 + 3y^2}} \\right)}{4x^2 + 3y^2} \\\\[10pt]\n&= \\frac{\\frac{12(4x^2 + 3y^2) - 48x^2}{\\sqrt{4x^2 + 3y^2}}}{4x^2 + 3y^2} \\\\[10pt]\n&= \\frac{48x^2 + 36y^2 - 48x^2}{(4x^2 + 3y^2)^{\\frac{3}{2}}} \\\\[10pt]\n&= \\frac{36y^2}{(4x^2 + 3y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch6_12",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 8 \\arcsin(6xy)$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "\\frac{48}{(1 - 36x^2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= 8 \\frac{1}{\\sqrt{1 - (6xy)^2}} (6y) = \\frac{48y}{\\sqrt{1 - 36x^2y^2}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 48y (1 - 36x^2y^2)^{-\\frac{1}{2}} \\right] \\\\[10pt]\n&= 48 \\left[ 1 \\cdot (1 - 36x^2y^2)^{-\\frac{1}{2}} + y \\left(-\\frac{1}{2}\\right)(1 - 36x^2y^2)^{-\\frac{3}{2}} (-72x^2y) \\right] \\\\[10pt]\n&= 48 \\left[ \\frac{1}{\\sqrt{1 - 36x^2y^2}} + \\frac{36x^2y^2}{(1 - 36x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= 48 \\left[ \\frac{(1 - 36x^2y^2) + 36x^2y^2}{(1 - 36x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= \\frac{48 (1)}{(1 - 36x^2y^2)^{\\frac{3}{2}}} = \\frac{48}{(1 - 36x^2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch1_13",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 y^{5} e^{\\frac{4x}{y}}$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "20y^{2} e^{\\frac{4x}{y}} (4y - 4x)",
    "steps": "\\begin{aligned}\nf_x &= \\frac{\\partial}{\\partial x} \\left( 5 y^{5} e^{\\frac{4x}{y}} \\right) = 5 y^{5} e^{\\frac{4x}{y}} \\left(\\frac{4}{y}\\right) = 20 y^{4} e^{\\frac{4x}{y}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 20 y^{4} e^{\\frac{4x}{y}} \\right) \\\\[10pt]\n&= 20 \\left[ (4)y^{3} e^{\\frac{4x}{y}} + y^{4} e^{\\frac{4x}{y}} \\left(-\\frac{4x}{y^2}\\right) \\right] \\\\[10pt]\n&= 20 y^{2} e^{\\frac{4x}{y}} \\left( 4y - 4x \\right) \\\\\n&= 20y^{2} e^{\\frac{4x}{y}} (4y - 4x)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch2_13",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 7 \\arctan\\left(\\frac{3x}{7y}\\right)$. Find $f_{xy}$.",
    "answer": "\\frac{147(9x^2 - 49y^2)}{(9x^2 + 49y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 7 \\frac{1}{1 + \\left(\\frac{3x}{7y}\\right)^2} \\cdot \\frac{3}{7y} = \\frac{7 \\cdot 49y^2}{9x^2 + 49y^2} \\cdot \\frac{3}{7y} = \\frac{147y}{9x^2 + 49y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( \\frac{147y}{9x^2 + 49y^2} \\right) \\\\[10pt]\n&= \\frac{147(9x^2 + 49y^2) - (147y)(2 \\cdot 49y)}{(9x^2 + 49y^2)^2} \\\\[10pt]\n&= \\frac{147(9x^2 + 49y^2) - 14406y^2}{(9x^2 + 49y^2)^2} \\\\[10pt]\n&= \\frac{147(9x^2 - 49y^2)}{(9x^2 + 49y^2)^2} \\\\\n&= \\frac{147(9x^2 - 49y^2)}{(9x^2 + 49y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch3_13",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\ln(2x^2 + 3y^2)$. Find the mixed second-order partial derivative $f_{xy}$.",
    "answer": "-\\frac{72xy}{(2x^2 + 3y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 3 \\frac{1}{2x^2 + 3y^2} \\cdot (4x) = \\frac{12x}{2x^2 + 3y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 12x(2x^2 + 3y^2)^{-1} \\right] \\\\[10pt]\n&= 12x (-1)(2x^2 + 3y^2)^{-2} (6y) \\\\[10pt]\n&= -\\frac{72xy}{(2x^2 + 3y^2)^2} \\\\\n&= -\\frac{72xy}{(2x^2 + 3y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch4_13",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 \\sin(2x^2 y^3)$. Find $f_{xy}$.",
    "answer": "48xy^2 \\cos(2x^2 y^3) - 96x^3 y^5 \\sin(2x^2 y^3)",
    "steps": "\\begin{aligned}\nf_x &= 4 \\cos(2x^2 y^3) \\cdot (4xy^3) = 16xy^3 \\cos(2x^2 y^3) \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 16xy^3 \\cos(2x^2 y^3) \\right) \\\\[10pt]\n&= 16x \\left[ 3y^2 \\cos(2x^2 y^3) + y^3 (-\\sin(2x^2 y^3)) (\\frac{\\partial}{\\partial y}(2x^2 y^3)) \\right] \\\\[10pt]\n&= 16x \\left[ 3y^2 \\cos(2x^2 y^3) - y^3 \\sin(2x^2 y^3) (6x^2 y^2) \\right] \\\\[10pt]\n&= 48xy^2 \\cos(2x^2 y^3) - 96x^3 y^5 \\sin(2x^2 y^3) \\\\\n&= 48xy^2 \\cos(2x^2 y^3) - 96x^3 y^5 \\sin(2x^2 y^3)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch5_13",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 \\sqrt{4x^2 + 4y^2}$. Find the second-order partial derivative $f_{xx}$.",
    "answer": "\\frac{80y^2}{(4x^2 + 4y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= \\frac{1}{2} 5(4x^2 + 4y^2)^{-\\frac{1}{2}} (\\frac{\\partial}{\\partial x}(4x^2 + 4y^2)) \\\\[10pt]\n&= \\frac{1}{2} 5(4x^2 + 4y^2)^{-\\frac{1}{2}} (8x) = \\frac{20x}{\\sqrt{4x^2 + 4y^2}} \\\\[10pt]\nf_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{20x}{\\sqrt{4x^2 + 4y^2}} \\right) \\\\[10pt]\n&= \\frac{20\\sqrt{4x^2 + 4y^2} - 20x \\left( \\frac{4x}{\\sqrt{4x^2 + 4y^2}} \\right)}{4x^2 + 4y^2} \\\\[10pt]\n&= \\frac{\\frac{20(4x^2 + 4y^2) - 80x^2}{\\sqrt{4x^2 + 4y^2}}}{4x^2 + 4y^2} \\\\[10pt]\n&= \\frac{80x^2 + 80y^2 - 80x^2}{(4x^2 + 4y^2)^{\\frac{3}{2}}} \\\\[10pt]\n&= \\frac{80y^2}{(4x^2 + 4y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch6_13",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 8 \\arcsin(2xy)$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "\\frac{16}{(1 - 4x^2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= 8 \\frac{1}{\\sqrt{1 - (2xy)^2}} (2y) = \\frac{16y}{\\sqrt{1 - 4x^2y^2}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 16y (1 - 4x^2y^2)^{-\\frac{1}{2}} \\right] \\\\[10pt]\n&= 16 \\left[ 1 \\cdot (1 - 4x^2y^2)^{-\\frac{1}{2}} + y \\left(-\\frac{1}{2}\\right)(1 - 4x^2y^2)^{-\\frac{3}{2}} (-8x^2y) \\right] \\\\[10pt]\n&= 16 \\left[ \\frac{1}{\\sqrt{1 - 4x^2y^2}} + \\frac{4x^2y^2}{(1 - 4x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= 16 \\left[ \\frac{(1 - 4x^2y^2) + 4x^2y^2}{(1 - 4x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= \\frac{16 (1)}{(1 - 4x^2y^2)^{\\frac{3}{2}}} = \\frac{16}{(1 - 4x^2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch1_14",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 y^{7} e^{\\frac{2x}{y}}$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "6y^{4} e^{\\frac{2x}{y}} (6y - 2x)",
    "steps": "\\begin{aligned}\nf_x &= \\frac{\\partial}{\\partial x} \\left( 3 y^{7} e^{\\frac{2x}{y}} \\right) = 3 y^{7} e^{\\frac{2x}{y}} \\left(\\frac{2}{y}\\right) = 6 y^{6} e^{\\frac{2x}{y}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 6 y^{6} e^{\\frac{2x}{y}} \\right) \\\\[10pt]\n&= 6 \\left[ (6)y^{5} e^{\\frac{2x}{y}} + y^{6} e^{\\frac{2x}{y}} \\left(-\\frac{2x}{y^2}\\right) \\right] \\\\[10pt]\n&= 6 y^{4} e^{\\frac{2x}{y}} \\left( 6y - 2x \\right) \\\\\n&= 6y^{4} e^{\\frac{2x}{y}} (6y - 2x)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch2_14",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 7 \\arctan\\left(\\frac{7x}{7y}\\right)$. Find $f_{xy}$.",
    "answer": "\\frac{343(49x^2 - 49y^2)}{(49x^2 + 49y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 7 \\frac{1}{1 + \\left(\\frac{7x}{7y}\\right)^2} \\cdot \\frac{7}{7y} = \\frac{7 \\cdot 49y^2}{49x^2 + 49y^2} \\cdot \\frac{7}{7y} = \\frac{343y}{49x^2 + 49y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( \\frac{343y}{49x^2 + 49y^2} \\right) \\\\[10pt]\n&= \\frac{343(49x^2 + 49y^2) - (343y)(2 \\cdot 49y)}{(49x^2 + 49y^2)^2} \\\\[10pt]\n&= \\frac{343(49x^2 + 49y^2) - 33614y^2}{(49x^2 + 49y^2)^2} \\\\[10pt]\n&= \\frac{343(49x^2 - 49y^2)}{(49x^2 + 49y^2)^2} \\\\\n&= \\frac{343(49x^2 - 49y^2)}{(49x^2 + 49y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch3_14",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 \\ln(5x^2 + 3y^2)$. Find the mixed second-order partial derivative $f_{xy}$.",
    "answer": "-\\frac{240xy}{(5x^2 + 3y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 4 \\frac{1}{5x^2 + 3y^2} \\cdot (10x) = \\frac{40x}{5x^2 + 3y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 40x(5x^2 + 3y^2)^{-1} \\right] \\\\[10pt]\n&= 40x (-1)(5x^2 + 3y^2)^{-2} (6y) \\\\[10pt]\n&= -\\frac{240xy}{(5x^2 + 3y^2)^2} \\\\\n&= -\\frac{240xy}{(5x^2 + 3y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch4_14",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 \\sin(2x^2 y^3)$. Find $f_{xy}$.",
    "answer": "48xy^2 \\cos(2x^2 y^3) - 96x^3 y^5 \\sin(2x^2 y^3)",
    "steps": "\\begin{aligned}\nf_x &= 4 \\cos(2x^2 y^3) \\cdot (4xy^3) = 16xy^3 \\cos(2x^2 y^3) \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 16xy^3 \\cos(2x^2 y^3) \\right) \\\\[10pt]\n&= 16x \\left[ 3y^2 \\cos(2x^2 y^3) + y^3 (-\\sin(2x^2 y^3)) (\\frac{\\partial}{\\partial y}(2x^2 y^3)) \\right] \\\\[10pt]\n&= 16x \\left[ 3y^2 \\cos(2x^2 y^3) - y^3 \\sin(2x^2 y^3) (6x^2 y^2) \\right] \\\\[10pt]\n&= 48xy^2 \\cos(2x^2 y^3) - 96x^3 y^5 \\sin(2x^2 y^3) \\\\\n&= 48xy^2 \\cos(2x^2 y^3) - 96x^3 y^5 \\sin(2x^2 y^3)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch5_14",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 \\sqrt{2x^2 + 5y^2}$. Find the second-order partial derivative $f_{xx}$.",
    "answer": "\\frac{40y^2}{(2x^2 + 5y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= \\frac{1}{2} 4(2x^2 + 5y^2)^{-\\frac{1}{2}} (\\frac{\\partial}{\\partial x}(2x^2 + 5y^2)) \\\\[10pt]\n&= \\frac{1}{2} 4(2x^2 + 5y^2)^{-\\frac{1}{2}} (4x) = \\frac{8x}{\\sqrt{2x^2 + 5y^2}} \\\\[10pt]\nf_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{8x}{\\sqrt{2x^2 + 5y^2}} \\right) \\\\[10pt]\n&= \\frac{8\\sqrt{2x^2 + 5y^2} - 8x \\left( \\frac{2x}{\\sqrt{2x^2 + 5y^2}} \\right)}{2x^2 + 5y^2} \\\\[10pt]\n&= \\frac{\\frac{8(2x^2 + 5y^2) - 16x^2}{\\sqrt{2x^2 + 5y^2}}}{2x^2 + 5y^2} \\\\[10pt]\n&= \\frac{16x^2 + 40y^2 - 16x^2}{(2x^2 + 5y^2)^{\\frac{3}{2}}} \\\\[10pt]\n&= \\frac{40y^2}{(2x^2 + 5y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch6_14",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\arcsin(6xy)$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "\\frac{12}{(1 - 36x^2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= 2 \\frac{1}{\\sqrt{1 - (6xy)^2}} (6y) = \\frac{12y}{\\sqrt{1 - 36x^2y^2}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 12y (1 - 36x^2y^2)^{-\\frac{1}{2}} \\right] \\\\[10pt]\n&= 12 \\left[ 1 \\cdot (1 - 36x^2y^2)^{-\\frac{1}{2}} + y \\left(-\\frac{1}{2}\\right)(1 - 36x^2y^2)^{-\\frac{3}{2}} (-72x^2y) \\right] \\\\[10pt]\n&= 12 \\left[ \\frac{1}{\\sqrt{1 - 36x^2y^2}} + \\frac{36x^2y^2}{(1 - 36x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= 12 \\left[ \\frac{(1 - 36x^2y^2) + 36x^2y^2}{(1 - 36x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= \\frac{12 (1)}{(1 - 36x^2y^2)^{\\frac{3}{2}}} = \\frac{12}{(1 - 36x^2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch1_15",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 y^{4} e^{\\frac{2x}{y}}$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "10y e^{\\frac{2x}{y}} (3y - 2x)",
    "steps": "\\begin{aligned}\nf_x &= \\frac{\\partial}{\\partial x} \\left( 5 y^{4} e^{\\frac{2x}{y}} \\right) = 5 y^{4} e^{\\frac{2x}{y}} \\left(\\frac{2}{y}\\right) = 10 y^{3} e^{\\frac{2x}{y}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 10 y^{3} e^{\\frac{2x}{y}} \\right) \\\\[10pt]\n&= 10 \\left[ (3)y^{2} e^{\\frac{2x}{y}} + y^{3} e^{\\frac{2x}{y}} \\left(-\\frac{2x}{y^2}\\right) \\right] \\\\[10pt]\n&= 10 y^{1} e^{\\frac{2x}{y}} \\left( 3y - 2x \\right) \\\\\n&= 10y e^{\\frac{2x}{y}} (3y - 2x)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch2_15",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\arctan\\left(\\frac{2x}{3y}\\right)$. Find $f_{xy}$.",
    "answer": "\\frac{18(4x^2 - 9y^2)}{(4x^2 + 9y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 3 \\frac{1}{1 + \\left(\\frac{2x}{3y}\\right)^2} \\cdot \\frac{2}{3y} = \\frac{3 \\cdot 9y^2}{4x^2 + 9y^2} \\cdot \\frac{2}{3y} = \\frac{18y}{4x^2 + 9y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( \\frac{18y}{4x^2 + 9y^2} \\right) \\\\[10pt]\n&= \\frac{18(4x^2 + 9y^2) - (18y)(2 \\cdot 9y)}{(4x^2 + 9y^2)^2} \\\\[10pt]\n&= \\frac{18(4x^2 + 9y^2) - 324y^2}{(4x^2 + 9y^2)^2} \\\\[10pt]\n&= \\frac{18(4x^2 - 9y^2)}{(4x^2 + 9y^2)^2} \\\\\n&= \\frac{18(4x^2 - 9y^2)}{(4x^2 + 9y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch3_15",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\ln(3x^2 + 2y^2)$. Find the mixed second-order partial derivative $f_{xy}$.",
    "answer": "-\\frac{72xy}{(3x^2 + 2y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 3 \\frac{1}{3x^2 + 2y^2} \\cdot (6x) = \\frac{18x}{3x^2 + 2y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 18x(3x^2 + 2y^2)^{-1} \\right] \\\\[10pt]\n&= 18x (-1)(3x^2 + 2y^2)^{-2} (4y) \\\\[10pt]\n&= -\\frac{72xy}{(3x^2 + 2y^2)^2} \\\\\n&= -\\frac{72xy}{(3x^2 + 2y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch4_15",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 \\sin(2x^2 y^3)$. Find $f_{xy}$.",
    "answer": "48xy^2 \\cos(2x^2 y^3) - 96x^3 y^5 \\sin(2x^2 y^3)",
    "steps": "\\begin{aligned}\nf_x &= 4 \\cos(2x^2 y^3) \\cdot (4xy^3) = 16xy^3 \\cos(2x^2 y^3) \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 16xy^3 \\cos(2x^2 y^3) \\right) \\\\[10pt]\n&= 16x \\left[ 3y^2 \\cos(2x^2 y^3) + y^3 (-\\sin(2x^2 y^3)) (\\frac{\\partial}{\\partial y}(2x^2 y^3)) \\right] \\\\[10pt]\n&= 16x \\left[ 3y^2 \\cos(2x^2 y^3) - y^3 \\sin(2x^2 y^3) (6x^2 y^2) \\right] \\\\[10pt]\n&= 48xy^2 \\cos(2x^2 y^3) - 96x^3 y^5 \\sin(2x^2 y^3) \\\\\n&= 48xy^2 \\cos(2x^2 y^3) - 96x^3 y^5 \\sin(2x^2 y^3)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch5_15",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 \\sqrt{2x^2 + 5y^2}$. Find the second-order partial derivative $f_{xx}$.",
    "answer": "\\frac{50y^2}{(2x^2 + 5y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= \\frac{1}{2} 5(2x^2 + 5y^2)^{-\\frac{1}{2}} (\\frac{\\partial}{\\partial x}(2x^2 + 5y^2)) \\\\[10pt]\n&= \\frac{1}{2} 5(2x^2 + 5y^2)^{-\\frac{1}{2}} (4x) = \\frac{10x}{\\sqrt{2x^2 + 5y^2}} \\\\[10pt]\nf_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{10x}{\\sqrt{2x^2 + 5y^2}} \\right) \\\\[10pt]\n&= \\frac{10\\sqrt{2x^2 + 5y^2} - 10x \\left( \\frac{2x}{\\sqrt{2x^2 + 5y^2}} \\right)}{2x^2 + 5y^2} \\\\[10pt]\n&= \\frac{\\frac{10(2x^2 + 5y^2) - 20x^2}{\\sqrt{2x^2 + 5y^2}}}{2x^2 + 5y^2} \\\\[10pt]\n&= \\frac{20x^2 + 50y^2 - 20x^2}{(2x^2 + 5y^2)^{\\frac{3}{2}}} \\\\[10pt]\n&= \\frac{50y^2}{(2x^2 + 5y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch6_15",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 8 \\arcsin(4xy)$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "\\frac{32}{(1 - 16x^2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= 8 \\frac{1}{\\sqrt{1 - (4xy)^2}} (4y) = \\frac{32y}{\\sqrt{1 - 16x^2y^2}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 32y (1 - 16x^2y^2)^{-\\frac{1}{2}} \\right] \\\\[10pt]\n&= 32 \\left[ 1 \\cdot (1 - 16x^2y^2)^{-\\frac{1}{2}} + y \\left(-\\frac{1}{2}\\right)(1 - 16x^2y^2)^{-\\frac{3}{2}} (-32x^2y) \\right] \\\\[10pt]\n&= 32 \\left[ \\frac{1}{\\sqrt{1 - 16x^2y^2}} + \\frac{16x^2y^2}{(1 - 16x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= 32 \\left[ \\frac{(1 - 16x^2y^2) + 16x^2y^2}{(1 - 16x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= \\frac{32 (1)}{(1 - 16x^2y^2)^{\\frac{3}{2}}} = \\frac{32}{(1 - 16x^2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch1_16",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 y^{7} e^{\\frac{3x}{y}}$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "9y^{4} e^{\\frac{3x}{y}} (6y - 3x)",
    "steps": "\\begin{aligned}\nf_x &= \\frac{\\partial}{\\partial x} \\left( 3 y^{7} e^{\\frac{3x}{y}} \\right) = 3 y^{7} e^{\\frac{3x}{y}} \\left(\\frac{3}{y}\\right) = 9 y^{6} e^{\\frac{3x}{y}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 9 y^{6} e^{\\frac{3x}{y}} \\right) \\\\[10pt]\n&= 9 \\left[ (6)y^{5} e^{\\frac{3x}{y}} + y^{6} e^{\\frac{3x}{y}} \\left(-\\frac{3x}{y^2}\\right) \\right] \\\\[10pt]\n&= 9 y^{4} e^{\\frac{3x}{y}} \\left( 6y - 3x \\right) \\\\\n&= 9y^{4} e^{\\frac{3x}{y}} (6y - 3x)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch2_16",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 7 \\arctan\\left(\\frac{5x}{5y}\\right)$. Find $f_{xy}$.",
    "answer": "\\frac{175(25x^2 - 25y^2)}{(25x^2 + 25y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 7 \\frac{1}{1 + \\left(\\frac{5x}{5y}\\right)^2} \\cdot \\frac{5}{5y} = \\frac{7 \\cdot 25y^2}{25x^2 + 25y^2} \\cdot \\frac{5}{5y} = \\frac{175y}{25x^2 + 25y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( \\frac{175y}{25x^2 + 25y^2} \\right) \\\\[10pt]\n&= \\frac{175(25x^2 + 25y^2) - (175y)(2 \\cdot 25y)}{(25x^2 + 25y^2)^2} \\\\[10pt]\n&= \\frac{175(25x^2 + 25y^2) - 8750y^2}{(25x^2 + 25y^2)^2} \\\\[10pt]\n&= \\frac{175(25x^2 - 25y^2)}{(25x^2 + 25y^2)^2} \\\\\n&= \\frac{175(25x^2 - 25y^2)}{(25x^2 + 25y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch3_16",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\ln(4x^2 + 2y^2)$. Find the mixed second-order partial derivative $f_{xy}$.",
    "answer": "-\\frac{64xy}{(4x^2 + 2y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 2 \\frac{1}{4x^2 + 2y^2} \\cdot (8x) = \\frac{16x}{4x^2 + 2y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 16x(4x^2 + 2y^2)^{-1} \\right] \\\\[10pt]\n&= 16x (-1)(4x^2 + 2y^2)^{-2} (4y) \\\\[10pt]\n&= -\\frac{64xy}{(4x^2 + 2y^2)^2} \\\\\n&= -\\frac{64xy}{(4x^2 + 2y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch4_16",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 \\sin(3x^2 y^3)$. Find $f_{xy}$.",
    "answer": "72xy^2 \\cos(3x^2 y^3) - 216x^3 y^5 \\sin(3x^2 y^3)",
    "steps": "\\begin{aligned}\nf_x &= 4 \\cos(3x^2 y^3) \\cdot (6xy^3) = 24xy^3 \\cos(3x^2 y^3) \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 24xy^3 \\cos(3x^2 y^3) \\right) \\\\[10pt]\n&= 24x \\left[ 3y^2 \\cos(3x^2 y^3) + y^3 (-\\sin(3x^2 y^3)) (\\frac{\\partial}{\\partial y}(3x^2 y^3)) \\right] \\\\[10pt]\n&= 24x \\left[ 3y^2 \\cos(3x^2 y^3) - y^3 \\sin(3x^2 y^3) (9x^2 y^2) \\right] \\\\[10pt]\n&= 72xy^2 \\cos(3x^2 y^3) - 216x^3 y^5 \\sin(3x^2 y^3) \\\\\n&= 72xy^2 \\cos(3x^2 y^3) - 216x^3 y^5 \\sin(3x^2 y^3)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch5_16",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 \\sqrt{2x^2 + 4y^2}$. Find the second-order partial derivative $f_{xx}$.",
    "answer": "\\frac{40y^2}{(2x^2 + 4y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= \\frac{1}{2} 5(2x^2 + 4y^2)^{-\\frac{1}{2}} (\\frac{\\partial}{\\partial x}(2x^2 + 4y^2)) \\\\[10pt]\n&= \\frac{1}{2} 5(2x^2 + 4y^2)^{-\\frac{1}{2}} (4x) = \\frac{10x}{\\sqrt{2x^2 + 4y^2}} \\\\[10pt]\nf_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{10x}{\\sqrt{2x^2 + 4y^2}} \\right) \\\\[10pt]\n&= \\frac{10\\sqrt{2x^2 + 4y^2} - 10x \\left( \\frac{2x}{\\sqrt{2x^2 + 4y^2}} \\right)}{2x^2 + 4y^2} \\\\[10pt]\n&= \\frac{\\frac{10(2x^2 + 4y^2) - 20x^2}{\\sqrt{2x^2 + 4y^2}}}{2x^2 + 4y^2} \\\\[10pt]\n&= \\frac{20x^2 + 40y^2 - 20x^2}{(2x^2 + 4y^2)^{\\frac{3}{2}}} \\\\[10pt]\n&= \\frac{40y^2}{(2x^2 + 4y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch6_16",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 8 \\arcsin(5xy)$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "\\frac{40}{(1 - 25x^2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= 8 \\frac{1}{\\sqrt{1 - (5xy)^2}} (5y) = \\frac{40y}{\\sqrt{1 - 25x^2y^2}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 40y (1 - 25x^2y^2)^{-\\frac{1}{2}} \\right] \\\\[10pt]\n&= 40 \\left[ 1 \\cdot (1 - 25x^2y^2)^{-\\frac{1}{2}} + y \\left(-\\frac{1}{2}\\right)(1 - 25x^2y^2)^{-\\frac{3}{2}} (-50x^2y) \\right] \\\\[10pt]\n&= 40 \\left[ \\frac{1}{\\sqrt{1 - 25x^2y^2}} + \\frac{25x^2y^2}{(1 - 25x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= 40 \\left[ \\frac{(1 - 25x^2y^2) + 25x^2y^2}{(1 - 25x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= \\frac{40 (1)}{(1 - 25x^2y^2)^{\\frac{3}{2}}} = \\frac{40}{(1 - 25x^2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch1_17",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 y^{6} e^{\\frac{2x}{y}}$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "6y^{3} e^{\\frac{2x}{y}} (5y - 2x)",
    "steps": "\\begin{aligned}\nf_x &= \\frac{\\partial}{\\partial x} \\left( 3 y^{6} e^{\\frac{2x}{y}} \\right) = 3 y^{6} e^{\\frac{2x}{y}} \\left(\\frac{2}{y}\\right) = 6 y^{5} e^{\\frac{2x}{y}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 6 y^{5} e^{\\frac{2x}{y}} \\right) \\\\[10pt]\n&= 6 \\left[ (5)y^{4} e^{\\frac{2x}{y}} + y^{5} e^{\\frac{2x}{y}} \\left(-\\frac{2x}{y^2}\\right) \\right] \\\\[10pt]\n&= 6 y^{3} e^{\\frac{2x}{y}} \\left( 5y - 2x \\right) \\\\\n&= 6y^{3} e^{\\frac{2x}{y}} (5y - 2x)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch2_17",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 \\arctan\\left(\\frac{5x}{3y}\\right)$. Find $f_{xy}$.",
    "answer": "\\frac{75(25x^2 - 9y^2)}{(25x^2 + 9y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 5 \\frac{1}{1 + \\left(\\frac{5x}{3y}\\right)^2} \\cdot \\frac{5}{3y} = \\frac{5 \\cdot 9y^2}{25x^2 + 9y^2} \\cdot \\frac{5}{3y} = \\frac{75y}{25x^2 + 9y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( \\frac{75y}{25x^2 + 9y^2} \\right) \\\\[10pt]\n&= \\frac{75(25x^2 + 9y^2) - (75y)(2 \\cdot 9y)}{(25x^2 + 9y^2)^2} \\\\[10pt]\n&= \\frac{75(25x^2 + 9y^2) - 1350y^2}{(25x^2 + 9y^2)^2} \\\\[10pt]\n&= \\frac{75(25x^2 - 9y^2)}{(25x^2 + 9y^2)^2} \\\\\n&= \\frac{75(25x^2 - 9y^2)}{(25x^2 + 9y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch3_17",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 \\ln(4x^2 + 3y^2)$. Find the mixed second-order partial derivative $f_{xy}$.",
    "answer": "-\\frac{240xy}{(4x^2 + 3y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 5 \\frac{1}{4x^2 + 3y^2} \\cdot (8x) = \\frac{40x}{4x^2 + 3y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 40x(4x^2 + 3y^2)^{-1} \\right] \\\\[10pt]\n&= 40x (-1)(4x^2 + 3y^2)^{-2} (6y) \\\\[10pt]\n&= -\\frac{240xy}{(4x^2 + 3y^2)^2} \\\\\n&= -\\frac{240xy}{(4x^2 + 3y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch4_17",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\sin(5x^2 y^3)$. Find $f_{xy}$.",
    "answer": "60xy^2 \\cos(5x^2 y^3) - 300x^3 y^5 \\sin(5x^2 y^3)",
    "steps": "\\begin{aligned}\nf_x &= 2 \\cos(5x^2 y^3) \\cdot (10xy^3) = 20xy^3 \\cos(5x^2 y^3) \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 20xy^3 \\cos(5x^2 y^3) \\right) \\\\[10pt]\n&= 20x \\left[ 3y^2 \\cos(5x^2 y^3) + y^3 (-\\sin(5x^2 y^3)) (\\frac{\\partial}{\\partial y}(5x^2 y^3)) \\right] \\\\[10pt]\n&= 20x \\left[ 3y^2 \\cos(5x^2 y^3) - y^3 \\sin(5x^2 y^3) (15x^2 y^2) \\right] \\\\[10pt]\n&= 60xy^2 \\cos(5x^2 y^3) - 300x^3 y^5 \\sin(5x^2 y^3) \\\\\n&= 60xy^2 \\cos(5x^2 y^3) - 300x^3 y^5 \\sin(5x^2 y^3)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch5_17",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 \\sqrt{4x^2 + 5y^2}$. Find the second-order partial derivative $f_{xx}$.",
    "answer": "\\frac{100y^2}{(4x^2 + 5y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= \\frac{1}{2} 5(4x^2 + 5y^2)^{-\\frac{1}{2}} (\\frac{\\partial}{\\partial x}(4x^2 + 5y^2)) \\\\[10pt]\n&= \\frac{1}{2} 5(4x^2 + 5y^2)^{-\\frac{1}{2}} (8x) = \\frac{20x}{\\sqrt{4x^2 + 5y^2}} \\\\[10pt]\nf_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{20x}{\\sqrt{4x^2 + 5y^2}} \\right) \\\\[10pt]\n&= \\frac{20\\sqrt{4x^2 + 5y^2} - 20x \\left( \\frac{4x}{\\sqrt{4x^2 + 5y^2}} \\right)}{4x^2 + 5y^2} \\\\[10pt]\n&= \\frac{\\frac{20(4x^2 + 5y^2) - 80x^2}{\\sqrt{4x^2 + 5y^2}}}{4x^2 + 5y^2} \\\\[10pt]\n&= \\frac{80x^2 + 100y^2 - 80x^2}{(4x^2 + 5y^2)^{\\frac{3}{2}}} \\\\[10pt]\n&= \\frac{100y^2}{(4x^2 + 5y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch6_17",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\arcsin(5xy)$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "\\frac{10}{(1 - 25x^2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= 2 \\frac{1}{\\sqrt{1 - (5xy)^2}} (5y) = \\frac{10y}{\\sqrt{1 - 25x^2y^2}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 10y (1 - 25x^2y^2)^{-\\frac{1}{2}} \\right] \\\\[10pt]\n&= 10 \\left[ 1 \\cdot (1 - 25x^2y^2)^{-\\frac{1}{2}} + y \\left(-\\frac{1}{2}\\right)(1 - 25x^2y^2)^{-\\frac{3}{2}} (-50x^2y) \\right] \\\\[10pt]\n&= 10 \\left[ \\frac{1}{\\sqrt{1 - 25x^2y^2}} + \\frac{25x^2y^2}{(1 - 25x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= 10 \\left[ \\frac{(1 - 25x^2y^2) + 25x^2y^2}{(1 - 25x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= \\frac{10 (1)}{(1 - 25x^2y^2)^{\\frac{3}{2}}} = \\frac{10}{(1 - 25x^2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch1_18",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 y^{6} e^{\\frac{3x}{y}}$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "12y^{3} e^{\\frac{3x}{y}} (5y - 3x)",
    "steps": "\\begin{aligned}\nf_x &= \\frac{\\partial}{\\partial x} \\left( 4 y^{6} e^{\\frac{3x}{y}} \\right) = 4 y^{6} e^{\\frac{3x}{y}} \\left(\\frac{3}{y}\\right) = 12 y^{5} e^{\\frac{3x}{y}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 12 y^{5} e^{\\frac{3x}{y}} \\right) \\\\[10pt]\n&= 12 \\left[ (5)y^{4} e^{\\frac{3x}{y}} + y^{5} e^{\\frac{3x}{y}} \\left(-\\frac{3x}{y^2}\\right) \\right] \\\\[10pt]\n&= 12 y^{3} e^{\\frac{3x}{y}} \\left( 5y - 3x \\right) \\\\\n&= 12y^{3} e^{\\frac{3x}{y}} (5y - 3x)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch2_18",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 \\arctan\\left(\\frac{5x}{7y}\\right)$. Find $f_{xy}$.",
    "answer": "\\frac{175(25x^2 - 49y^2)}{(25x^2 + 49y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 5 \\frac{1}{1 + \\left(\\frac{5x}{7y}\\right)^2} \\cdot \\frac{5}{7y} = \\frac{5 \\cdot 49y^2}{25x^2 + 49y^2} \\cdot \\frac{5}{7y} = \\frac{175y}{25x^2 + 49y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( \\frac{175y}{25x^2 + 49y^2} \\right) \\\\[10pt]\n&= \\frac{175(25x^2 + 49y^2) - (175y)(2 \\cdot 49y)}{(25x^2 + 49y^2)^2} \\\\[10pt]\n&= \\frac{175(25x^2 + 49y^2) - 17150y^2}{(25x^2 + 49y^2)^2} \\\\[10pt]\n&= \\frac{175(25x^2 - 49y^2)}{(25x^2 + 49y^2)^2} \\\\\n&= \\frac{175(25x^2 - 49y^2)}{(25x^2 + 49y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch3_18",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\ln(5x^2 + 2y^2)$. Find the mixed second-order partial derivative $f_{xy}$.",
    "answer": "-\\frac{120xy}{(5x^2 + 2y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 3 \\frac{1}{5x^2 + 2y^2} \\cdot (10x) = \\frac{30x}{5x^2 + 2y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 30x(5x^2 + 2y^2)^{-1} \\right] \\\\[10pt]\n&= 30x (-1)(5x^2 + 2y^2)^{-2} (4y) \\\\[10pt]\n&= -\\frac{120xy}{(5x^2 + 2y^2)^2} \\\\\n&= -\\frac{120xy}{(5x^2 + 2y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch4_18",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 \\sin(3x^2 y^3)$. Find $f_{xy}$.",
    "answer": "90xy^2 \\cos(3x^2 y^3) - 270x^3 y^5 \\sin(3x^2 y^3)",
    "steps": "\\begin{aligned}\nf_x &= 5 \\cos(3x^2 y^3) \\cdot (6xy^3) = 30xy^3 \\cos(3x^2 y^3) \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 30xy^3 \\cos(3x^2 y^3) \\right) \\\\[10pt]\n&= 30x \\left[ 3y^2 \\cos(3x^2 y^3) + y^3 (-\\sin(3x^2 y^3)) (\\frac{\\partial}{\\partial y}(3x^2 y^3)) \\right] \\\\[10pt]\n&= 30x \\left[ 3y^2 \\cos(3x^2 y^3) - y^3 \\sin(3x^2 y^3) (9x^2 y^2) \\right] \\\\[10pt]\n&= 90xy^2 \\cos(3x^2 y^3) - 270x^3 y^5 \\sin(3x^2 y^3) \\\\\n&= 90xy^2 \\cos(3x^2 y^3) - 270x^3 y^5 \\sin(3x^2 y^3)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch5_18",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\sqrt{3x^2 + 4y^2}$. Find the second-order partial derivative $f_{xx}$.",
    "answer": "\\frac{24y^2}{(3x^2 + 4y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= \\frac{1}{2} 2(3x^2 + 4y^2)^{-\\frac{1}{2}} (\\frac{\\partial}{\\partial x}(3x^2 + 4y^2)) \\\\[10pt]\n&= \\frac{1}{2} 2(3x^2 + 4y^2)^{-\\frac{1}{2}} (6x) = \\frac{6x}{\\sqrt{3x^2 + 4y^2}} \\\\[10pt]\nf_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{6x}{\\sqrt{3x^2 + 4y^2}} \\right) \\\\[10pt]\n&= \\frac{6\\sqrt{3x^2 + 4y^2} - 6x \\left( \\frac{3x}{\\sqrt{3x^2 + 4y^2}} \\right)}{3x^2 + 4y^2} \\\\[10pt]\n&= \\frac{\\frac{6(3x^2 + 4y^2) - 18x^2}{\\sqrt{3x^2 + 4y^2}}}{3x^2 + 4y^2} \\\\[10pt]\n&= \\frac{18x^2 + 24y^2 - 18x^2}{(3x^2 + 4y^2)^{\\frac{3}{2}}} \\\\[10pt]\n&= \\frac{24y^2}{(3x^2 + 4y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch6_18",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\arcsin(4xy)$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "\\frac{8}{(1 - 16x^2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= 2 \\frac{1}{\\sqrt{1 - (4xy)^2}} (4y) = \\frac{8y}{\\sqrt{1 - 16x^2y^2}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 8y (1 - 16x^2y^2)^{-\\frac{1}{2}} \\right] \\\\[10pt]\n&= 8 \\left[ 1 \\cdot (1 - 16x^2y^2)^{-\\frac{1}{2}} + y \\left(-\\frac{1}{2}\\right)(1 - 16x^2y^2)^{-\\frac{3}{2}} (-32x^2y) \\right] \\\\[10pt]\n&= 8 \\left[ \\frac{1}{\\sqrt{1 - 16x^2y^2}} + \\frac{16x^2y^2}{(1 - 16x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= 8 \\left[ \\frac{(1 - 16x^2y^2) + 16x^2y^2}{(1 - 16x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= \\frac{8 (1)}{(1 - 16x^2y^2)^{\\frac{3}{2}}} = \\frac{8}{(1 - 16x^2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch1_19",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 y^{4} e^{\\frac{5x}{y}}$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "10y e^{\\frac{5x}{y}} (3y - 5x)",
    "steps": "\\begin{aligned}\nf_x &= \\frac{\\partial}{\\partial x} \\left( 2 y^{4} e^{\\frac{5x}{y}} \\right) = 2 y^{4} e^{\\frac{5x}{y}} \\left(\\frac{5}{y}\\right) = 10 y^{3} e^{\\frac{5x}{y}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 10 y^{3} e^{\\frac{5x}{y}} \\right) \\\\[10pt]\n&= 10 \\left[ (3)y^{2} e^{\\frac{5x}{y}} + y^{3} e^{\\frac{5x}{y}} \\left(-\\frac{5x}{y^2}\\right) \\right] \\\\[10pt]\n&= 10 y^{1} e^{\\frac{5x}{y}} \\left( 3y - 5x \\right) \\\\\n&= 10y e^{\\frac{5x}{y}} (3y - 5x)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch2_19",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 \\arctan\\left(\\frac{5x}{7y}\\right)$. Find $f_{xy}$.",
    "answer": "\\frac{175(25x^2 - 49y^2)}{(25x^2 + 49y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 5 \\frac{1}{1 + \\left(\\frac{5x}{7y}\\right)^2} \\cdot \\frac{5}{7y} = \\frac{5 \\cdot 49y^2}{25x^2 + 49y^2} \\cdot \\frac{5}{7y} = \\frac{175y}{25x^2 + 49y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( \\frac{175y}{25x^2 + 49y^2} \\right) \\\\[10pt]\n&= \\frac{175(25x^2 + 49y^2) - (175y)(2 \\cdot 49y)}{(25x^2 + 49y^2)^2} \\\\[10pt]\n&= \\frac{175(25x^2 + 49y^2) - 17150y^2}{(25x^2 + 49y^2)^2} \\\\[10pt]\n&= \\frac{175(25x^2 - 49y^2)}{(25x^2 + 49y^2)^2} \\\\\n&= \\frac{175(25x^2 - 49y^2)}{(25x^2 + 49y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch3_19",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 \\ln(3x^2 + 5y^2)$. Find the mixed second-order partial derivative $f_{xy}$.",
    "answer": "-\\frac{300xy}{(3x^2 + 5y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 5 \\frac{1}{3x^2 + 5y^2} \\cdot (6x) = \\frac{30x}{3x^2 + 5y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 30x(3x^2 + 5y^2)^{-1} \\right] \\\\[10pt]\n&= 30x (-1)(3x^2 + 5y^2)^{-2} (10y) \\\\[10pt]\n&= -\\frac{300xy}{(3x^2 + 5y^2)^2} \\\\\n&= -\\frac{300xy}{(3x^2 + 5y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch4_19",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\sin(4x^2 y^3)$. Find $f_{xy}$.",
    "answer": "48xy^2 \\cos(4x^2 y^3) - 192x^3 y^5 \\sin(4x^2 y^3)",
    "steps": "\\begin{aligned}\nf_x &= 2 \\cos(4x^2 y^3) \\cdot (8xy^3) = 16xy^3 \\cos(4x^2 y^3) \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 16xy^3 \\cos(4x^2 y^3) \\right) \\\\[10pt]\n&= 16x \\left[ 3y^2 \\cos(4x^2 y^3) + y^3 (-\\sin(4x^2 y^3)) (\\frac{\\partial}{\\partial y}(4x^2 y^3)) \\right] \\\\[10pt]\n&= 16x \\left[ 3y^2 \\cos(4x^2 y^3) - y^3 \\sin(4x^2 y^3) (12x^2 y^2) \\right] \\\\[10pt]\n&= 48xy^2 \\cos(4x^2 y^3) - 192x^3 y^5 \\sin(4x^2 y^3) \\\\\n&= 48xy^2 \\cos(4x^2 y^3) - 192x^3 y^5 \\sin(4x^2 y^3)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch5_19",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 \\sqrt{2x^2 + 6y^2}$. Find the second-order partial derivative $f_{xx}$.",
    "answer": "\\frac{60y^2}{(2x^2 + 6y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= \\frac{1}{2} 5(2x^2 + 6y^2)^{-\\frac{1}{2}} (\\frac{\\partial}{\\partial x}(2x^2 + 6y^2)) \\\\[10pt]\n&= \\frac{1}{2} 5(2x^2 + 6y^2)^{-\\frac{1}{2}} (4x) = \\frac{10x}{\\sqrt{2x^2 + 6y^2}} \\\\[10pt]\nf_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{10x}{\\sqrt{2x^2 + 6y^2}} \\right) \\\\[10pt]\n&= \\frac{10\\sqrt{2x^2 + 6y^2} - 10x \\left( \\frac{2x}{\\sqrt{2x^2 + 6y^2}} \\right)}{2x^2 + 6y^2} \\\\[10pt]\n&= \\frac{\\frac{10(2x^2 + 6y^2) - 20x^2}{\\sqrt{2x^2 + 6y^2}}}{2x^2 + 6y^2} \\\\[10pt]\n&= \\frac{20x^2 + 60y^2 - 20x^2}{(2x^2 + 6y^2)^{\\frac{3}{2}}} \\\\[10pt]\n&= \\frac{60y^2}{(2x^2 + 6y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch6_19",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\arcsin(3xy)$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "\\frac{6}{(1 - 9x^2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= 2 \\frac{1}{\\sqrt{1 - (3xy)^2}} (3y) = \\frac{6y}{\\sqrt{1 - 9x^2y^2}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 6y (1 - 9x^2y^2)^{-\\frac{1}{2}} \\right] \\\\[10pt]\n&= 6 \\left[ 1 \\cdot (1 - 9x^2y^2)^{-\\frac{1}{2}} + y \\left(-\\frac{1}{2}\\right)(1 - 9x^2y^2)^{-\\frac{3}{2}} (-18x^2y) \\right] \\\\[10pt]\n&= 6 \\left[ \\frac{1}{\\sqrt{1 - 9x^2y^2}} + \\frac{9x^2y^2}{(1 - 9x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= 6 \\left[ \\frac{(1 - 9x^2y^2) + 9x^2y^2}{(1 - 9x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= \\frac{6 (1)}{(1 - 9x^2y^2)^{\\frac{3}{2}}} = \\frac{6}{(1 - 9x^2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch1_20",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 y^{4} e^{\\frac{3x}{y}}$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "15y e^{\\frac{3x}{y}} (3y - 3x)",
    "steps": "\\begin{aligned}\nf_x &= \\frac{\\partial}{\\partial x} \\left( 5 y^{4} e^{\\frac{3x}{y}} \\right) = 5 y^{4} e^{\\frac{3x}{y}} \\left(\\frac{3}{y}\\right) = 15 y^{3} e^{\\frac{3x}{y}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 15 y^{3} e^{\\frac{3x}{y}} \\right) \\\\[10pt]\n&= 15 \\left[ (3)y^{2} e^{\\frac{3x}{y}} + y^{3} e^{\\frac{3x}{y}} \\left(-\\frac{3x}{y^2}\\right) \\right] \\\\[10pt]\n&= 15 y^{1} e^{\\frac{3x}{y}} \\left( 3y - 3x \\right) \\\\\n&= 15y e^{\\frac{3x}{y}} (3y - 3x)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch2_20",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\arctan\\left(\\frac{7x}{3y}\\right)$. Find $f_{xy}$.",
    "answer": "\\frac{42(49x^2 - 9y^2)}{(49x^2 + 9y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 2 \\frac{1}{1 + \\left(\\frac{7x}{3y}\\right)^2} \\cdot \\frac{7}{3y} = \\frac{2 \\cdot 9y^2}{49x^2 + 9y^2} \\cdot \\frac{7}{3y} = \\frac{42y}{49x^2 + 9y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( \\frac{42y}{49x^2 + 9y^2} \\right) \\\\[10pt]\n&= \\frac{42(49x^2 + 9y^2) - (42y)(2 \\cdot 9y)}{(49x^2 + 9y^2)^2} \\\\[10pt]\n&= \\frac{42(49x^2 + 9y^2) - 756y^2}{(49x^2 + 9y^2)^2} \\\\[10pt]\n&= \\frac{42(49x^2 - 9y^2)}{(49x^2 + 9y^2)^2} \\\\\n&= \\frac{42(49x^2 - 9y^2)}{(49x^2 + 9y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch3_20",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 \\ln(2x^2 + 4y^2)$. Find the mixed second-order partial derivative $f_{xy}$.",
    "answer": "-\\frac{160xy}{(2x^2 + 4y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 5 \\frac{1}{2x^2 + 4y^2} \\cdot (4x) = \\frac{20x}{2x^2 + 4y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 20x(2x^2 + 4y^2)^{-1} \\right] \\\\[10pt]\n&= 20x (-1)(2x^2 + 4y^2)^{-2} (8y) \\\\[10pt]\n&= -\\frac{160xy}{(2x^2 + 4y^2)^2} \\\\\n&= -\\frac{160xy}{(2x^2 + 4y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch4_20",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 \\sin(2x^2 y^3)$. Find $f_{xy}$.",
    "answer": "48xy^2 \\cos(2x^2 y^3) - 96x^3 y^5 \\sin(2x^2 y^3)",
    "steps": "\\begin{aligned}\nf_x &= 4 \\cos(2x^2 y^3) \\cdot (4xy^3) = 16xy^3 \\cos(2x^2 y^3) \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 16xy^3 \\cos(2x^2 y^3) \\right) \\\\[10pt]\n&= 16x \\left[ 3y^2 \\cos(2x^2 y^3) + y^3 (-\\sin(2x^2 y^3)) (\\frac{\\partial}{\\partial y}(2x^2 y^3)) \\right] \\\\[10pt]\n&= 16x \\left[ 3y^2 \\cos(2x^2 y^3) - y^3 \\sin(2x^2 y^3) (6x^2 y^2) \\right] \\\\[10pt]\n&= 48xy^2 \\cos(2x^2 y^3) - 96x^3 y^5 \\sin(2x^2 y^3) \\\\\n&= 48xy^2 \\cos(2x^2 y^3) - 96x^3 y^5 \\sin(2x^2 y^3)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch5_20",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 7 \\sqrt{2x^2 + 5y^2}$. Find the second-order partial derivative $f_{xx}$.",
    "answer": "\\frac{70y^2}{(2x^2 + 5y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= \\frac{1}{2} 7(2x^2 + 5y^2)^{-\\frac{1}{2}} (\\frac{\\partial}{\\partial x}(2x^2 + 5y^2)) \\\\[10pt]\n&= \\frac{1}{2} 7(2x^2 + 5y^2)^{-\\frac{1}{2}} (4x) = \\frac{14x}{\\sqrt{2x^2 + 5y^2}} \\\\[10pt]\nf_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{14x}{\\sqrt{2x^2 + 5y^2}} \\right) \\\\[10pt]\n&= \\frac{14\\sqrt{2x^2 + 5y^2} - 14x \\left( \\frac{2x}{\\sqrt{2x^2 + 5y^2}} \\right)}{2x^2 + 5y^2} \\\\[10pt]\n&= \\frac{\\frac{14(2x^2 + 5y^2) - 28x^2}{\\sqrt{2x^2 + 5y^2}}}{2x^2 + 5y^2} \\\\[10pt]\n&= \\frac{28x^2 + 70y^2 - 28x^2}{(2x^2 + 5y^2)^{\\frac{3}{2}}} \\\\[10pt]\n&= \\frac{70y^2}{(2x^2 + 5y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch6_20",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\arcsin(6xy)$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "\\frac{12}{(1 - 36x^2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= 2 \\frac{1}{\\sqrt{1 - (6xy)^2}} (6y) = \\frac{12y}{\\sqrt{1 - 36x^2y^2}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 12y (1 - 36x^2y^2)^{-\\frac{1}{2}} \\right] \\\\[10pt]\n&= 12 \\left[ 1 \\cdot (1 - 36x^2y^2)^{-\\frac{1}{2}} + y \\left(-\\frac{1}{2}\\right)(1 - 36x^2y^2)^{-\\frac{3}{2}} (-72x^2y) \\right] \\\\[10pt]\n&= 12 \\left[ \\frac{1}{\\sqrt{1 - 36x^2y^2}} + \\frac{36x^2y^2}{(1 - 36x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= 12 \\left[ \\frac{(1 - 36x^2y^2) + 36x^2y^2}{(1 - 36x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= \\frac{12 (1)}{(1 - 36x^2y^2)^{\\frac{3}{2}}} = \\frac{12}{(1 - 36x^2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch1_21",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 y^{6} e^{\\frac{2x}{y}}$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "4y^{3} e^{\\frac{2x}{y}} (5y - 2x)",
    "steps": "\\begin{aligned}\nf_x &= \\frac{\\partial}{\\partial x} \\left( 2 y^{6} e^{\\frac{2x}{y}} \\right) = 2 y^{6} e^{\\frac{2x}{y}} \\left(\\frac{2}{y}\\right) = 4 y^{5} e^{\\frac{2x}{y}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 4 y^{5} e^{\\frac{2x}{y}} \\right) \\\\[10pt]\n&= 4 \\left[ (5)y^{4} e^{\\frac{2x}{y}} + y^{5} e^{\\frac{2x}{y}} \\left(-\\frac{2x}{y^2}\\right) \\right] \\\\[10pt]\n&= 4 y^{3} e^{\\frac{2x}{y}} \\left( 5y - 2x \\right) \\\\\n&= 4y^{3} e^{\\frac{2x}{y}} (5y - 2x)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch2_21",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\arctan\\left(\\frac{3x}{2y}\\right)$. Find $f_{xy}$.",
    "answer": "\\frac{18(9x^2 - 4y^2)}{(9x^2 + 4y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 3 \\frac{1}{1 + \\left(\\frac{3x}{2y}\\right)^2} \\cdot \\frac{3}{2y} = \\frac{3 \\cdot 4y^2}{9x^2 + 4y^2} \\cdot \\frac{3}{2y} = \\frac{18y}{9x^2 + 4y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( \\frac{18y}{9x^2 + 4y^2} \\right) \\\\[10pt]\n&= \\frac{18(9x^2 + 4y^2) - (18y)(2 \\cdot 4y)}{(9x^2 + 4y^2)^2} \\\\[10pt]\n&= \\frac{18(9x^2 + 4y^2) - 144y^2}{(9x^2 + 4y^2)^2} \\\\[10pt]\n&= \\frac{18(9x^2 - 4y^2)}{(9x^2 + 4y^2)^2} \\\\\n&= \\frac{18(9x^2 - 4y^2)}{(9x^2 + 4y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch3_21",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\ln(2x^2 + 4y^2)$. Find the mixed second-order partial derivative $f_{xy}$.",
    "answer": "-\\frac{64xy}{(2x^2 + 4y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 2 \\frac{1}{2x^2 + 4y^2} \\cdot (4x) = \\frac{8x}{2x^2 + 4y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 8x(2x^2 + 4y^2)^{-1} \\right] \\\\[10pt]\n&= 8x (-1)(2x^2 + 4y^2)^{-2} (8y) \\\\[10pt]\n&= -\\frac{64xy}{(2x^2 + 4y^2)^2} \\\\\n&= -\\frac{64xy}{(2x^2 + 4y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch4_21",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 \\sin(4x^2 y^3)$. Find $f_{xy}$.",
    "answer": "120xy^2 \\cos(4x^2 y^3) - 480x^3 y^5 \\sin(4x^2 y^3)",
    "steps": "\\begin{aligned}\nf_x &= 5 \\cos(4x^2 y^3) \\cdot (8xy^3) = 40xy^3 \\cos(4x^2 y^3) \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 40xy^3 \\cos(4x^2 y^3) \\right) \\\\[10pt]\n&= 40x \\left[ 3y^2 \\cos(4x^2 y^3) + y^3 (-\\sin(4x^2 y^3)) (\\frac{\\partial}{\\partial y}(4x^2 y^3)) \\right] \\\\[10pt]\n&= 40x \\left[ 3y^2 \\cos(4x^2 y^3) - y^3 \\sin(4x^2 y^3) (12x^2 y^2) \\right] \\\\[10pt]\n&= 120xy^2 \\cos(4x^2 y^3) - 480x^3 y^5 \\sin(4x^2 y^3) \\\\\n&= 120xy^2 \\cos(4x^2 y^3) - 480x^3 y^5 \\sin(4x^2 y^3)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch5_21",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\sqrt{5x^2 + 6y^2}$. Find the second-order partial derivative $f_{xx}$.",
    "answer": "\\frac{60y^2}{(5x^2 + 6y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= \\frac{1}{2} 2(5x^2 + 6y^2)^{-\\frac{1}{2}} (\\frac{\\partial}{\\partial x}(5x^2 + 6y^2)) \\\\[10pt]\n&= \\frac{1}{2} 2(5x^2 + 6y^2)^{-\\frac{1}{2}} (10x) = \\frac{10x}{\\sqrt{5x^2 + 6y^2}} \\\\[10pt]\nf_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{10x}{\\sqrt{5x^2 + 6y^2}} \\right) \\\\[10pt]\n&= \\frac{10\\sqrt{5x^2 + 6y^2} - 10x \\left( \\frac{5x}{\\sqrt{5x^2 + 6y^2}} \\right)}{5x^2 + 6y^2} \\\\[10pt]\n&= \\frac{\\frac{10(5x^2 + 6y^2) - 50x^2}{\\sqrt{5x^2 + 6y^2}}}{5x^2 + 6y^2} \\\\[10pt]\n&= \\frac{50x^2 + 60y^2 - 50x^2}{(5x^2 + 6y^2)^{\\frac{3}{2}}} \\\\[10pt]\n&= \\frac{60y^2}{(5x^2 + 6y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch6_21",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 \\arcsin(6xy)$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "\\frac{30}{(1 - 36x^2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= 5 \\frac{1}{\\sqrt{1 - (6xy)^2}} (6y) = \\frac{30y}{\\sqrt{1 - 36x^2y^2}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 30y (1 - 36x^2y^2)^{-\\frac{1}{2}} \\right] \\\\[10pt]\n&= 30 \\left[ 1 \\cdot (1 - 36x^2y^2)^{-\\frac{1}{2}} + y \\left(-\\frac{1}{2}\\right)(1 - 36x^2y^2)^{-\\frac{3}{2}} (-72x^2y) \\right] \\\\[10pt]\n&= 30 \\left[ \\frac{1}{\\sqrt{1 - 36x^2y^2}} + \\frac{36x^2y^2}{(1 - 36x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= 30 \\left[ \\frac{(1 - 36x^2y^2) + 36x^2y^2}{(1 - 36x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= \\frac{30 (1)}{(1 - 36x^2y^2)^{\\frac{3}{2}}} = \\frac{30}{(1 - 36x^2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch1_22",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 y^{5} e^{\\frac{2x}{y}}$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "8y^{2} e^{\\frac{2x}{y}} (4y - 2x)",
    "steps": "\\begin{aligned}\nf_x &= \\frac{\\partial}{\\partial x} \\left( 4 y^{5} e^{\\frac{2x}{y}} \\right) = 4 y^{5} e^{\\frac{2x}{y}} \\left(\\frac{2}{y}\\right) = 8 y^{4} e^{\\frac{2x}{y}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 8 y^{4} e^{\\frac{2x}{y}} \\right) \\\\[10pt]\n&= 8 \\left[ (4)y^{3} e^{\\frac{2x}{y}} + y^{4} e^{\\frac{2x}{y}} \\left(-\\frac{2x}{y^2}\\right) \\right] \\\\[10pt]\n&= 8 y^{2} e^{\\frac{2x}{y}} \\left( 4y - 2x \\right) \\\\\n&= 8y^{2} e^{\\frac{2x}{y}} (4y - 2x)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch2_22",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 6 \\arctan\\left(\\frac{2x}{3y}\\right)$. Find $f_{xy}$.",
    "answer": "\\frac{36(4x^2 - 9y^2)}{(4x^2 + 9y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 6 \\frac{1}{1 + \\left(\\frac{2x}{3y}\\right)^2} \\cdot \\frac{2}{3y} = \\frac{6 \\cdot 9y^2}{4x^2 + 9y^2} \\cdot \\frac{2}{3y} = \\frac{36y}{4x^2 + 9y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( \\frac{36y}{4x^2 + 9y^2} \\right) \\\\[10pt]\n&= \\frac{36(4x^2 + 9y^2) - (36y)(2 \\cdot 9y)}{(4x^2 + 9y^2)^2} \\\\[10pt]\n&= \\frac{36(4x^2 + 9y^2) - 648y^2}{(4x^2 + 9y^2)^2} \\\\[10pt]\n&= \\frac{36(4x^2 - 9y^2)}{(4x^2 + 9y^2)^2} \\\\\n&= \\frac{36(4x^2 - 9y^2)}{(4x^2 + 9y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch3_22",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 \\ln(4x^2 + 5y^2)$. Find the mixed second-order partial derivative $f_{xy}$.",
    "answer": "-\\frac{400xy}{(4x^2 + 5y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 5 \\frac{1}{4x^2 + 5y^2} \\cdot (8x) = \\frac{40x}{4x^2 + 5y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 40x(4x^2 + 5y^2)^{-1} \\right] \\\\[10pt]\n&= 40x (-1)(4x^2 + 5y^2)^{-2} (10y) \\\\[10pt]\n&= -\\frac{400xy}{(4x^2 + 5y^2)^2} \\\\\n&= -\\frac{400xy}{(4x^2 + 5y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch4_22",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 \\sin(2x^2 y^3)$. Find $f_{xy}$.",
    "answer": "60xy^2 \\cos(2x^2 y^3) - 120x^3 y^5 \\sin(2x^2 y^3)",
    "steps": "\\begin{aligned}\nf_x &= 5 \\cos(2x^2 y^3) \\cdot (4xy^3) = 20xy^3 \\cos(2x^2 y^3) \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 20xy^3 \\cos(2x^2 y^3) \\right) \\\\[10pt]\n&= 20x \\left[ 3y^2 \\cos(2x^2 y^3) + y^3 (-\\sin(2x^2 y^3)) (\\frac{\\partial}{\\partial y}(2x^2 y^3)) \\right] \\\\[10pt]\n&= 20x \\left[ 3y^2 \\cos(2x^2 y^3) - y^3 \\sin(2x^2 y^3) (6x^2 y^2) \\right] \\\\[10pt]\n&= 60xy^2 \\cos(2x^2 y^3) - 120x^3 y^5 \\sin(2x^2 y^3) \\\\\n&= 60xy^2 \\cos(2x^2 y^3) - 120x^3 y^5 \\sin(2x^2 y^3)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch5_22",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\sqrt{3x^2 + 3y^2}$. Find the second-order partial derivative $f_{xx}$.",
    "answer": "\\frac{27y^2}{(3x^2 + 3y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= \\frac{1}{2} 3(3x^2 + 3y^2)^{-\\frac{1}{2}} (\\frac{\\partial}{\\partial x}(3x^2 + 3y^2)) \\\\[10pt]\n&= \\frac{1}{2} 3(3x^2 + 3y^2)^{-\\frac{1}{2}} (6x) = \\frac{9x}{\\sqrt{3x^2 + 3y^2}} \\\\[10pt]\nf_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{9x}{\\sqrt{3x^2 + 3y^2}} \\right) \\\\[10pt]\n&= \\frac{9\\sqrt{3x^2 + 3y^2} - 9x \\left( \\frac{3x}{\\sqrt{3x^2 + 3y^2}} \\right)}{3x^2 + 3y^2} \\\\[10pt]\n&= \\frac{\\frac{9(3x^2 + 3y^2) - 27x^2}{\\sqrt{3x^2 + 3y^2}}}{3x^2 + 3y^2} \\\\[10pt]\n&= \\frac{27x^2 + 27y^2 - 27x^2}{(3x^2 + 3y^2)^{\\frac{3}{2}}} \\\\[10pt]\n&= \\frac{27y^2}{(3x^2 + 3y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch6_22",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 \\arcsin(2xy)$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "\\frac{8}{(1 - 4x^2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= 4 \\frac{1}{\\sqrt{1 - (2xy)^2}} (2y) = \\frac{8y}{\\sqrt{1 - 4x^2y^2}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 8y (1 - 4x^2y^2)^{-\\frac{1}{2}} \\right] \\\\[10pt]\n&= 8 \\left[ 1 \\cdot (1 - 4x^2y^2)^{-\\frac{1}{2}} + y \\left(-\\frac{1}{2}\\right)(1 - 4x^2y^2)^{-\\frac{3}{2}} (-8x^2y) \\right] \\\\[10pt]\n&= 8 \\left[ \\frac{1}{\\sqrt{1 - 4x^2y^2}} + \\frac{4x^2y^2}{(1 - 4x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= 8 \\left[ \\frac{(1 - 4x^2y^2) + 4x^2y^2}{(1 - 4x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= \\frac{8 (1)}{(1 - 4x^2y^2)^{\\frac{3}{2}}} = \\frac{8}{(1 - 4x^2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch1_23",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 y^{5} e^{\\frac{2x}{y}}$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "8y^{2} e^{\\frac{2x}{y}} (4y - 2x)",
    "steps": "\\begin{aligned}\nf_x &= \\frac{\\partial}{\\partial x} \\left( 4 y^{5} e^{\\frac{2x}{y}} \\right) = 4 y^{5} e^{\\frac{2x}{y}} \\left(\\frac{2}{y}\\right) = 8 y^{4} e^{\\frac{2x}{y}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 8 y^{4} e^{\\frac{2x}{y}} \\right) \\\\[10pt]\n&= 8 \\left[ (4)y^{3} e^{\\frac{2x}{y}} + y^{4} e^{\\frac{2x}{y}} \\left(-\\frac{2x}{y^2}\\right) \\right] \\\\[10pt]\n&= 8 y^{2} e^{\\frac{2x}{y}} \\left( 4y - 2x \\right) \\\\\n&= 8y^{2} e^{\\frac{2x}{y}} (4y - 2x)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch2_23",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 6 \\arctan\\left(\\frac{5x}{7y}\\right)$. Find $f_{xy}$.",
    "answer": "\\frac{210(25x^2 - 49y^2)}{(25x^2 + 49y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 6 \\frac{1}{1 + \\left(\\frac{5x}{7y}\\right)^2} \\cdot \\frac{5}{7y} = \\frac{6 \\cdot 49y^2}{25x^2 + 49y^2} \\cdot \\frac{5}{7y} = \\frac{210y}{25x^2 + 49y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( \\frac{210y}{25x^2 + 49y^2} \\right) \\\\[10pt]\n&= \\frac{210(25x^2 + 49y^2) - (210y)(2 \\cdot 49y)}{(25x^2 + 49y^2)^2} \\\\[10pt]\n&= \\frac{210(25x^2 + 49y^2) - 20580y^2}{(25x^2 + 49y^2)^2} \\\\[10pt]\n&= \\frac{210(25x^2 - 49y^2)}{(25x^2 + 49y^2)^2} \\\\\n&= \\frac{210(25x^2 - 49y^2)}{(25x^2 + 49y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch3_23",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\ln(5x^2 + 3y^2)$. Find the mixed second-order partial derivative $f_{xy}$.",
    "answer": "-\\frac{120xy}{(5x^2 + 3y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 2 \\frac{1}{5x^2 + 3y^2} \\cdot (10x) = \\frac{20x}{5x^2 + 3y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 20x(5x^2 + 3y^2)^{-1} \\right] \\\\[10pt]\n&= 20x (-1)(5x^2 + 3y^2)^{-2} (6y) \\\\[10pt]\n&= -\\frac{120xy}{(5x^2 + 3y^2)^2} \\\\\n&= -\\frac{120xy}{(5x^2 + 3y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch4_23",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\sin(4x^2 y^3)$. Find $f_{xy}$.",
    "answer": "72xy^2 \\cos(4x^2 y^3) - 288x^3 y^5 \\sin(4x^2 y^3)",
    "steps": "\\begin{aligned}\nf_x &= 3 \\cos(4x^2 y^3) \\cdot (8xy^3) = 24xy^3 \\cos(4x^2 y^3) \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 24xy^3 \\cos(4x^2 y^3) \\right) \\\\[10pt]\n&= 24x \\left[ 3y^2 \\cos(4x^2 y^3) + y^3 (-\\sin(4x^2 y^3)) (\\frac{\\partial}{\\partial y}(4x^2 y^3)) \\right] \\\\[10pt]\n&= 24x \\left[ 3y^2 \\cos(4x^2 y^3) - y^3 \\sin(4x^2 y^3) (12x^2 y^2) \\right] \\\\[10pt]\n&= 72xy^2 \\cos(4x^2 y^3) - 288x^3 y^5 \\sin(4x^2 y^3) \\\\\n&= 72xy^2 \\cos(4x^2 y^3) - 288x^3 y^5 \\sin(4x^2 y^3)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch5_23",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\sqrt{4x^2 + 5y^2}$. Find the second-order partial derivative $f_{xx}$.",
    "answer": "\\frac{40y^2}{(4x^2 + 5y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= \\frac{1}{2} 2(4x^2 + 5y^2)^{-\\frac{1}{2}} (\\frac{\\partial}{\\partial x}(4x^2 + 5y^2)) \\\\[10pt]\n&= \\frac{1}{2} 2(4x^2 + 5y^2)^{-\\frac{1}{2}} (8x) = \\frac{8x}{\\sqrt{4x^2 + 5y^2}} \\\\[10pt]\nf_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{8x}{\\sqrt{4x^2 + 5y^2}} \\right) \\\\[10pt]\n&= \\frac{8\\sqrt{4x^2 + 5y^2} - 8x \\left( \\frac{4x}{\\sqrt{4x^2 + 5y^2}} \\right)}{4x^2 + 5y^2} \\\\[10pt]\n&= \\frac{\\frac{8(4x^2 + 5y^2) - 32x^2}{\\sqrt{4x^2 + 5y^2}}}{4x^2 + 5y^2} \\\\[10pt]\n&= \\frac{32x^2 + 40y^2 - 32x^2}{(4x^2 + 5y^2)^{\\frac{3}{2}}} \\\\[10pt]\n&= \\frac{40y^2}{(4x^2 + 5y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch6_23",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\arcsin(4xy)$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "\\frac{8}{(1 - 16x^2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= 2 \\frac{1}{\\sqrt{1 - (4xy)^2}} (4y) = \\frac{8y}{\\sqrt{1 - 16x^2y^2}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 8y (1 - 16x^2y^2)^{-\\frac{1}{2}} \\right] \\\\[10pt]\n&= 8 \\left[ 1 \\cdot (1 - 16x^2y^2)^{-\\frac{1}{2}} + y \\left(-\\frac{1}{2}\\right)(1 - 16x^2y^2)^{-\\frac{3}{2}} (-32x^2y) \\right] \\\\[10pt]\n&= 8 \\left[ \\frac{1}{\\sqrt{1 - 16x^2y^2}} + \\frac{16x^2y^2}{(1 - 16x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= 8 \\left[ \\frac{(1 - 16x^2y^2) + 16x^2y^2}{(1 - 16x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= \\frac{8 (1)}{(1 - 16x^2y^2)^{\\frac{3}{2}}} = \\frac{8}{(1 - 16x^2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch1_24",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 y^{5} e^{\\frac{3x}{y}}$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "15y^{2} e^{\\frac{3x}{y}} (4y - 3x)",
    "steps": "\\begin{aligned}\nf_x &= \\frac{\\partial}{\\partial x} \\left( 5 y^{5} e^{\\frac{3x}{y}} \\right) = 5 y^{5} e^{\\frac{3x}{y}} \\left(\\frac{3}{y}\\right) = 15 y^{4} e^{\\frac{3x}{y}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 15 y^{4} e^{\\frac{3x}{y}} \\right) \\\\[10pt]\n&= 15 \\left[ (4)y^{3} e^{\\frac{3x}{y}} + y^{4} e^{\\frac{3x}{y}} \\left(-\\frac{3x}{y^2}\\right) \\right] \\\\[10pt]\n&= 15 y^{2} e^{\\frac{3x}{y}} \\left( 4y - 3x \\right) \\\\\n&= 15y^{2} e^{\\frac{3x}{y}} (4y - 3x)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch2_24",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\arctan\\left(\\frac{5x}{7y}\\right)$. Find $f_{xy}$.",
    "answer": "\\frac{105(25x^2 - 49y^2)}{(25x^2 + 49y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 3 \\frac{1}{1 + \\left(\\frac{5x}{7y}\\right)^2} \\cdot \\frac{5}{7y} = \\frac{3 \\cdot 49y^2}{25x^2 + 49y^2} \\cdot \\frac{5}{7y} = \\frac{105y}{25x^2 + 49y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( \\frac{105y}{25x^2 + 49y^2} \\right) \\\\[10pt]\n&= \\frac{105(25x^2 + 49y^2) - (105y)(2 \\cdot 49y)}{(25x^2 + 49y^2)^2} \\\\[10pt]\n&= \\frac{105(25x^2 + 49y^2) - 10290y^2}{(25x^2 + 49y^2)^2} \\\\[10pt]\n&= \\frac{105(25x^2 - 49y^2)}{(25x^2 + 49y^2)^2} \\\\\n&= \\frac{105(25x^2 - 49y^2)}{(25x^2 + 49y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch3_24",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\ln(2x^2 + 4y^2)$. Find the mixed second-order partial derivative $f_{xy}$.",
    "answer": "-\\frac{64xy}{(2x^2 + 4y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 2 \\frac{1}{2x^2 + 4y^2} \\cdot (4x) = \\frac{8x}{2x^2 + 4y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 8x(2x^2 + 4y^2)^{-1} \\right] \\\\[10pt]\n&= 8x (-1)(2x^2 + 4y^2)^{-2} (8y) \\\\[10pt]\n&= -\\frac{64xy}{(2x^2 + 4y^2)^2} \\\\\n&= -\\frac{64xy}{(2x^2 + 4y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch4_24",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 \\sin(3x^2 y^3)$. Find $f_{xy}$.",
    "answer": "90xy^2 \\cos(3x^2 y^3) - 270x^3 y^5 \\sin(3x^2 y^3)",
    "steps": "\\begin{aligned}\nf_x &= 5 \\cos(3x^2 y^3) \\cdot (6xy^3) = 30xy^3 \\cos(3x^2 y^3) \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 30xy^3 \\cos(3x^2 y^3) \\right) \\\\[10pt]\n&= 30x \\left[ 3y^2 \\cos(3x^2 y^3) + y^3 (-\\sin(3x^2 y^3)) (\\frac{\\partial}{\\partial y}(3x^2 y^3)) \\right] \\\\[10pt]\n&= 30x \\left[ 3y^2 \\cos(3x^2 y^3) - y^3 \\sin(3x^2 y^3) (9x^2 y^2) \\right] \\\\[10pt]\n&= 90xy^2 \\cos(3x^2 y^3) - 270x^3 y^5 \\sin(3x^2 y^3) \\\\\n&= 90xy^2 \\cos(3x^2 y^3) - 270x^3 y^5 \\sin(3x^2 y^3)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch5_24",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\sqrt{3x^2 + 4y^2}$. Find the second-order partial derivative $f_{xx}$.",
    "answer": "\\frac{36y^2}{(3x^2 + 4y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= \\frac{1}{2} 3(3x^2 + 4y^2)^{-\\frac{1}{2}} (\\frac{\\partial}{\\partial x}(3x^2 + 4y^2)) \\\\[10pt]\n&= \\frac{1}{2} 3(3x^2 + 4y^2)^{-\\frac{1}{2}} (6x) = \\frac{9x}{\\sqrt{3x^2 + 4y^2}} \\\\[10pt]\nf_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{9x}{\\sqrt{3x^2 + 4y^2}} \\right) \\\\[10pt]\n&= \\frac{9\\sqrt{3x^2 + 4y^2} - 9x \\left( \\frac{3x}{\\sqrt{3x^2 + 4y^2}} \\right)}{3x^2 + 4y^2} \\\\[10pt]\n&= \\frac{\\frac{9(3x^2 + 4y^2) - 27x^2}{\\sqrt{3x^2 + 4y^2}}}{3x^2 + 4y^2} \\\\[10pt]\n&= \\frac{27x^2 + 36y^2 - 27x^2}{(3x^2 + 4y^2)^{\\frac{3}{2}}} \\\\[10pt]\n&= \\frac{36y^2}{(3x^2 + 4y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch6_24",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 \\arcsin(3xy)$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "\\frac{15}{(1 - 9x^2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= 5 \\frac{1}{\\sqrt{1 - (3xy)^2}} (3y) = \\frac{15y}{\\sqrt{1 - 9x^2y^2}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 15y (1 - 9x^2y^2)^{-\\frac{1}{2}} \\right] \\\\[10pt]\n&= 15 \\left[ 1 \\cdot (1 - 9x^2y^2)^{-\\frac{1}{2}} + y \\left(-\\frac{1}{2}\\right)(1 - 9x^2y^2)^{-\\frac{3}{2}} (-18x^2y) \\right] \\\\[10pt]\n&= 15 \\left[ \\frac{1}{\\sqrt{1 - 9x^2y^2}} + \\frac{9x^2y^2}{(1 - 9x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= 15 \\left[ \\frac{(1 - 9x^2y^2) + 9x^2y^2}{(1 - 9x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= \\frac{15 (1)}{(1 - 9x^2y^2)^{\\frac{3}{2}}} = \\frac{15}{(1 - 9x^2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch1_25",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 y^{5} e^{\\frac{2x}{y}}$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "10y^{2} e^{\\frac{2x}{y}} (4y - 2x)",
    "steps": "\\begin{aligned}\nf_x &= \\frac{\\partial}{\\partial x} \\left( 5 y^{5} e^{\\frac{2x}{y}} \\right) = 5 y^{5} e^{\\frac{2x}{y}} \\left(\\frac{2}{y}\\right) = 10 y^{4} e^{\\frac{2x}{y}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 10 y^{4} e^{\\frac{2x}{y}} \\right) \\\\[10pt]\n&= 10 \\left[ (4)y^{3} e^{\\frac{2x}{y}} + y^{4} e^{\\frac{2x}{y}} \\left(-\\frac{2x}{y^2}\\right) \\right] \\\\[10pt]\n&= 10 y^{2} e^{\\frac{2x}{y}} \\left( 4y - 2x \\right) \\\\\n&= 10y^{2} e^{\\frac{2x}{y}} (4y - 2x)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch2_25",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 \\arctan\\left(\\frac{7x}{7y}\\right)$. Find $f_{xy}$.",
    "answer": "\\frac{245(49x^2 - 49y^2)}{(49x^2 + 49y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 5 \\frac{1}{1 + \\left(\\frac{7x}{7y}\\right)^2} \\cdot \\frac{7}{7y} = \\frac{5 \\cdot 49y^2}{49x^2 + 49y^2} \\cdot \\frac{7}{7y} = \\frac{245y}{49x^2 + 49y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( \\frac{245y}{49x^2 + 49y^2} \\right) \\\\[10pt]\n&= \\frac{245(49x^2 + 49y^2) - (245y)(2 \\cdot 49y)}{(49x^2 + 49y^2)^2} \\\\[10pt]\n&= \\frac{245(49x^2 + 49y^2) - 24010y^2}{(49x^2 + 49y^2)^2} \\\\[10pt]\n&= \\frac{245(49x^2 - 49y^2)}{(49x^2 + 49y^2)^2} \\\\\n&= \\frac{245(49x^2 - 49y^2)}{(49x^2 + 49y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch3_25",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 \\ln(5x^2 + 2y^2)$. Find the mixed second-order partial derivative $f_{xy}$.",
    "answer": "-\\frac{160xy}{(5x^2 + 2y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 4 \\frac{1}{5x^2 + 2y^2} \\cdot (10x) = \\frac{40x}{5x^2 + 2y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 40x(5x^2 + 2y^2)^{-1} \\right] \\\\[10pt]\n&= 40x (-1)(5x^2 + 2y^2)^{-2} (4y) \\\\[10pt]\n&= -\\frac{160xy}{(5x^2 + 2y^2)^2} \\\\\n&= -\\frac{160xy}{(5x^2 + 2y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch4_25",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\sin(4x^2 y^3)$. Find $f_{xy}$.",
    "answer": "48xy^2 \\cos(4x^2 y^3) - 192x^3 y^5 \\sin(4x^2 y^3)",
    "steps": "\\begin{aligned}\nf_x &= 2 \\cos(4x^2 y^3) \\cdot (8xy^3) = 16xy^3 \\cos(4x^2 y^3) \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 16xy^3 \\cos(4x^2 y^3) \\right) \\\\[10pt]\n&= 16x \\left[ 3y^2 \\cos(4x^2 y^3) + y^3 (-\\sin(4x^2 y^3)) (\\frac{\\partial}{\\partial y}(4x^2 y^3)) \\right] \\\\[10pt]\n&= 16x \\left[ 3y^2 \\cos(4x^2 y^3) - y^3 \\sin(4x^2 y^3) (12x^2 y^2) \\right] \\\\[10pt]\n&= 48xy^2 \\cos(4x^2 y^3) - 192x^3 y^5 \\sin(4x^2 y^3) \\\\\n&= 48xy^2 \\cos(4x^2 y^3) - 192x^3 y^5 \\sin(4x^2 y^3)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch5_25",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\sqrt{4x^2 + 2y^2}$. Find the second-order partial derivative $f_{xx}$.",
    "answer": "\\frac{24y^2}{(4x^2 + 2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= \\frac{1}{2} 3(4x^2 + 2y^2)^{-\\frac{1}{2}} (\\frac{\\partial}{\\partial x}(4x^2 + 2y^2)) \\\\[10pt]\n&= \\frac{1}{2} 3(4x^2 + 2y^2)^{-\\frac{1}{2}} (8x) = \\frac{12x}{\\sqrt{4x^2 + 2y^2}} \\\\[10pt]\nf_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{12x}{\\sqrt{4x^2 + 2y^2}} \\right) \\\\[10pt]\n&= \\frac{12\\sqrt{4x^2 + 2y^2} - 12x \\left( \\frac{4x}{\\sqrt{4x^2 + 2y^2}} \\right)}{4x^2 + 2y^2} \\\\[10pt]\n&= \\frac{\\frac{12(4x^2 + 2y^2) - 48x^2}{\\sqrt{4x^2 + 2y^2}}}{4x^2 + 2y^2} \\\\[10pt]\n&= \\frac{48x^2 + 24y^2 - 48x^2}{(4x^2 + 2y^2)^{\\frac{3}{2}}} \\\\[10pt]\n&= \\frac{24y^2}{(4x^2 + 2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch6_25",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 8 \\arcsin(4xy)$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "\\frac{32}{(1 - 16x^2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= 8 \\frac{1}{\\sqrt{1 - (4xy)^2}} (4y) = \\frac{32y}{\\sqrt{1 - 16x^2y^2}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 32y (1 - 16x^2y^2)^{-\\frac{1}{2}} \\right] \\\\[10pt]\n&= 32 \\left[ 1 \\cdot (1 - 16x^2y^2)^{-\\frac{1}{2}} + y \\left(-\\frac{1}{2}\\right)(1 - 16x^2y^2)^{-\\frac{3}{2}} (-32x^2y) \\right] \\\\[10pt]\n&= 32 \\left[ \\frac{1}{\\sqrt{1 - 16x^2y^2}} + \\frac{16x^2y^2}{(1 - 16x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= 32 \\left[ \\frac{(1 - 16x^2y^2) + 16x^2y^2}{(1 - 16x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= \\frac{32 (1)}{(1 - 16x^2y^2)^{\\frac{3}{2}}} = \\frac{32}{(1 - 16x^2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch1_26",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 y^{7} e^{\\frac{3x}{y}}$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "9y^{4} e^{\\frac{3x}{y}} (6y - 3x)",
    "steps": "\\begin{aligned}\nf_x &= \\frac{\\partial}{\\partial x} \\left( 3 y^{7} e^{\\frac{3x}{y}} \\right) = 3 y^{7} e^{\\frac{3x}{y}} \\left(\\frac{3}{y}\\right) = 9 y^{6} e^{\\frac{3x}{y}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 9 y^{6} e^{\\frac{3x}{y}} \\right) \\\\[10pt]\n&= 9 \\left[ (6)y^{5} e^{\\frac{3x}{y}} + y^{6} e^{\\frac{3x}{y}} \\left(-\\frac{3x}{y^2}\\right) \\right] \\\\[10pt]\n&= 9 y^{4} e^{\\frac{3x}{y}} \\left( 6y - 3x \\right) \\\\\n&= 9y^{4} e^{\\frac{3x}{y}} (6y - 3x)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch2_26",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\arctan\\left(\\frac{3x}{3y}\\right)$. Find $f_{xy}$.",
    "answer": "\\frac{18(9x^2 - 9y^2)}{(9x^2 + 9y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 2 \\frac{1}{1 + \\left(\\frac{3x}{3y}\\right)^2} \\cdot \\frac{3}{3y} = \\frac{2 \\cdot 9y^2}{9x^2 + 9y^2} \\cdot \\frac{3}{3y} = \\frac{18y}{9x^2 + 9y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( \\frac{18y}{9x^2 + 9y^2} \\right) \\\\[10pt]\n&= \\frac{18(9x^2 + 9y^2) - (18y)(2 \\cdot 9y)}{(9x^2 + 9y^2)^2} \\\\[10pt]\n&= \\frac{18(9x^2 + 9y^2) - 324y^2}{(9x^2 + 9y^2)^2} \\\\[10pt]\n&= \\frac{18(9x^2 - 9y^2)}{(9x^2 + 9y^2)^2} \\\\\n&= \\frac{18(9x^2 - 9y^2)}{(9x^2 + 9y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch3_26",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\ln(2x^2 + 2y^2)$. Find the mixed second-order partial derivative $f_{xy}$.",
    "answer": "-\\frac{32xy}{(2x^2 + 2y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 2 \\frac{1}{2x^2 + 2y^2} \\cdot (4x) = \\frac{8x}{2x^2 + 2y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 8x(2x^2 + 2y^2)^{-1} \\right] \\\\[10pt]\n&= 8x (-1)(2x^2 + 2y^2)^{-2} (4y) \\\\[10pt]\n&= -\\frac{32xy}{(2x^2 + 2y^2)^2} \\\\\n&= -\\frac{32xy}{(2x^2 + 2y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch4_26",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\sin(3x^2 y^3)$. Find $f_{xy}$.",
    "answer": "36xy^2 \\cos(3x^2 y^3) - 108x^3 y^5 \\sin(3x^2 y^3)",
    "steps": "\\begin{aligned}\nf_x &= 2 \\cos(3x^2 y^3) \\cdot (6xy^3) = 12xy^3 \\cos(3x^2 y^3) \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 12xy^3 \\cos(3x^2 y^3) \\right) \\\\[10pt]\n&= 12x \\left[ 3y^2 \\cos(3x^2 y^3) + y^3 (-\\sin(3x^2 y^3)) (\\frac{\\partial}{\\partial y}(3x^2 y^3)) \\right] \\\\[10pt]\n&= 12x \\left[ 3y^2 \\cos(3x^2 y^3) - y^3 \\sin(3x^2 y^3) (9x^2 y^2) \\right] \\\\[10pt]\n&= 36xy^2 \\cos(3x^2 y^3) - 108x^3 y^5 \\sin(3x^2 y^3) \\\\\n&= 36xy^2 \\cos(3x^2 y^3) - 108x^3 y^5 \\sin(3x^2 y^3)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch5_26",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\sqrt{3x^2 + 3y^2}$. Find the second-order partial derivative $f_{xx}$.",
    "answer": "\\frac{18y^2}{(3x^2 + 3y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= \\frac{1}{2} 2(3x^2 + 3y^2)^{-\\frac{1}{2}} (\\frac{\\partial}{\\partial x}(3x^2 + 3y^2)) \\\\[10pt]\n&= \\frac{1}{2} 2(3x^2 + 3y^2)^{-\\frac{1}{2}} (6x) = \\frac{6x}{\\sqrt{3x^2 + 3y^2}} \\\\[10pt]\nf_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{6x}{\\sqrt{3x^2 + 3y^2}} \\right) \\\\[10pt]\n&= \\frac{6\\sqrt{3x^2 + 3y^2} - 6x \\left( \\frac{3x}{\\sqrt{3x^2 + 3y^2}} \\right)}{3x^2 + 3y^2} \\\\[10pt]\n&= \\frac{\\frac{6(3x^2 + 3y^2) - 18x^2}{\\sqrt{3x^2 + 3y^2}}}{3x^2 + 3y^2} \\\\[10pt]\n&= \\frac{18x^2 + 18y^2 - 18x^2}{(3x^2 + 3y^2)^{\\frac{3}{2}}} \\\\[10pt]\n&= \\frac{18y^2}{(3x^2 + 3y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch6_26",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 \\arcsin(2xy)$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "\\frac{8}{(1 - 4x^2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= 4 \\frac{1}{\\sqrt{1 - (2xy)^2}} (2y) = \\frac{8y}{\\sqrt{1 - 4x^2y^2}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 8y (1 - 4x^2y^2)^{-\\frac{1}{2}} \\right] \\\\[10pt]\n&= 8 \\left[ 1 \\cdot (1 - 4x^2y^2)^{-\\frac{1}{2}} + y \\left(-\\frac{1}{2}\\right)(1 - 4x^2y^2)^{-\\frac{3}{2}} (-8x^2y) \\right] \\\\[10pt]\n&= 8 \\left[ \\frac{1}{\\sqrt{1 - 4x^2y^2}} + \\frac{4x^2y^2}{(1 - 4x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= 8 \\left[ \\frac{(1 - 4x^2y^2) + 4x^2y^2}{(1 - 4x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= \\frac{8 (1)}{(1 - 4x^2y^2)^{\\frac{3}{2}}} = \\frac{8}{(1 - 4x^2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch1_27",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 y^{7} e^{\\frac{2x}{y}}$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "10y^{4} e^{\\frac{2x}{y}} (6y - 2x)",
    "steps": "\\begin{aligned}\nf_x &= \\frac{\\partial}{\\partial x} \\left( 5 y^{7} e^{\\frac{2x}{y}} \\right) = 5 y^{7} e^{\\frac{2x}{y}} \\left(\\frac{2}{y}\\right) = 10 y^{6} e^{\\frac{2x}{y}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 10 y^{6} e^{\\frac{2x}{y}} \\right) \\\\[10pt]\n&= 10 \\left[ (6)y^{5} e^{\\frac{2x}{y}} + y^{6} e^{\\frac{2x}{y}} \\left(-\\frac{2x}{y^2}\\right) \\right] \\\\[10pt]\n&= 10 y^{4} e^{\\frac{2x}{y}} \\left( 6y - 2x \\right) \\\\\n&= 10y^{4} e^{\\frac{2x}{y}} (6y - 2x)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch2_27",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 6 \\arctan\\left(\\frac{7x}{7y}\\right)$. Find $f_{xy}$.",
    "answer": "\\frac{294(49x^2 - 49y^2)}{(49x^2 + 49y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 6 \\frac{1}{1 + \\left(\\frac{7x}{7y}\\right)^2} \\cdot \\frac{7}{7y} = \\frac{6 \\cdot 49y^2}{49x^2 + 49y^2} \\cdot \\frac{7}{7y} = \\frac{294y}{49x^2 + 49y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( \\frac{294y}{49x^2 + 49y^2} \\right) \\\\[10pt]\n&= \\frac{294(49x^2 + 49y^2) - (294y)(2 \\cdot 49y)}{(49x^2 + 49y^2)^2} \\\\[10pt]\n&= \\frac{294(49x^2 + 49y^2) - 28812y^2}{(49x^2 + 49y^2)^2} \\\\[10pt]\n&= \\frac{294(49x^2 - 49y^2)}{(49x^2 + 49y^2)^2} \\\\\n&= \\frac{294(49x^2 - 49y^2)}{(49x^2 + 49y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch3_27",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 \\ln(4x^2 + 3y^2)$. Find the mixed second-order partial derivative $f_{xy}$.",
    "answer": "-\\frac{192xy}{(4x^2 + 3y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 4 \\frac{1}{4x^2 + 3y^2} \\cdot (8x) = \\frac{32x}{4x^2 + 3y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 32x(4x^2 + 3y^2)^{-1} \\right] \\\\[10pt]\n&= 32x (-1)(4x^2 + 3y^2)^{-2} (6y) \\\\[10pt]\n&= -\\frac{192xy}{(4x^2 + 3y^2)^2} \\\\\n&= -\\frac{192xy}{(4x^2 + 3y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch4_27",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\sin(5x^2 y^3)$. Find $f_{xy}$.",
    "answer": "90xy^2 \\cos(5x^2 y^3) - 450x^3 y^5 \\sin(5x^2 y^3)",
    "steps": "\\begin{aligned}\nf_x &= 3 \\cos(5x^2 y^3) \\cdot (10xy^3) = 30xy^3 \\cos(5x^2 y^3) \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 30xy^3 \\cos(5x^2 y^3) \\right) \\\\[10pt]\n&= 30x \\left[ 3y^2 \\cos(5x^2 y^3) + y^3 (-\\sin(5x^2 y^3)) (\\frac{\\partial}{\\partial y}(5x^2 y^3)) \\right] \\\\[10pt]\n&= 30x \\left[ 3y^2 \\cos(5x^2 y^3) - y^3 \\sin(5x^2 y^3) (15x^2 y^2) \\right] \\\\[10pt]\n&= 90xy^2 \\cos(5x^2 y^3) - 450x^3 y^5 \\sin(5x^2 y^3) \\\\\n&= 90xy^2 \\cos(5x^2 y^3) - 450x^3 y^5 \\sin(5x^2 y^3)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch5_27",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 7 \\sqrt{5x^2 + 3y^2}$. Find the second-order partial derivative $f_{xx}$.",
    "answer": "\\frac{105y^2}{(5x^2 + 3y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= \\frac{1}{2} 7(5x^2 + 3y^2)^{-\\frac{1}{2}} (\\frac{\\partial}{\\partial x}(5x^2 + 3y^2)) \\\\[10pt]\n&= \\frac{1}{2} 7(5x^2 + 3y^2)^{-\\frac{1}{2}} (10x) = \\frac{35x}{\\sqrt{5x^2 + 3y^2}} \\\\[10pt]\nf_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{35x}{\\sqrt{5x^2 + 3y^2}} \\right) \\\\[10pt]\n&= \\frac{35\\sqrt{5x^2 + 3y^2} - 35x \\left( \\frac{5x}{\\sqrt{5x^2 + 3y^2}} \\right)}{5x^2 + 3y^2} \\\\[10pt]\n&= \\frac{\\frac{35(5x^2 + 3y^2) - 175x^2}{\\sqrt{5x^2 + 3y^2}}}{5x^2 + 3y^2} \\\\[10pt]\n&= \\frac{175x^2 + 105y^2 - 175x^2}{(5x^2 + 3y^2)^{\\frac{3}{2}}} \\\\[10pt]\n&= \\frac{105y^2}{(5x^2 + 3y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch6_27",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 \\arcsin(5xy)$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "\\frac{20}{(1 - 25x^2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= 4 \\frac{1}{\\sqrt{1 - (5xy)^2}} (5y) = \\frac{20y}{\\sqrt{1 - 25x^2y^2}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 20y (1 - 25x^2y^2)^{-\\frac{1}{2}} \\right] \\\\[10pt]\n&= 20 \\left[ 1 \\cdot (1 - 25x^2y^2)^{-\\frac{1}{2}} + y \\left(-\\frac{1}{2}\\right)(1 - 25x^2y^2)^{-\\frac{3}{2}} (-50x^2y) \\right] \\\\[10pt]\n&= 20 \\left[ \\frac{1}{\\sqrt{1 - 25x^2y^2}} + \\frac{25x^2y^2}{(1 - 25x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= 20 \\left[ \\frac{(1 - 25x^2y^2) + 25x^2y^2}{(1 - 25x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= \\frac{20 (1)}{(1 - 25x^2y^2)^{\\frac{3}{2}}} = \\frac{20}{(1 - 25x^2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch1_28",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 y^{6} e^{\\frac{2x}{y}}$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "8y^{3} e^{\\frac{2x}{y}} (5y - 2x)",
    "steps": "\\begin{aligned}\nf_x &= \\frac{\\partial}{\\partial x} \\left( 4 y^{6} e^{\\frac{2x}{y}} \\right) = 4 y^{6} e^{\\frac{2x}{y}} \\left(\\frac{2}{y}\\right) = 8 y^{5} e^{\\frac{2x}{y}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 8 y^{5} e^{\\frac{2x}{y}} \\right) \\\\[10pt]\n&= 8 \\left[ (5)y^{4} e^{\\frac{2x}{y}} + y^{5} e^{\\frac{2x}{y}} \\left(-\\frac{2x}{y^2}\\right) \\right] \\\\[10pt]\n&= 8 y^{3} e^{\\frac{2x}{y}} \\left( 5y - 2x \\right) \\\\\n&= 8y^{3} e^{\\frac{2x}{y}} (5y - 2x)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch2_28",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\arctan\\left(\\frac{2x}{5y}\\right)$. Find $f_{xy}$.",
    "answer": "\\frac{20(4x^2 - 25y^2)}{(4x^2 + 25y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 2 \\frac{1}{1 + \\left(\\frac{2x}{5y}\\right)^2} \\cdot \\frac{2}{5y} = \\frac{2 \\cdot 25y^2}{4x^2 + 25y^2} \\cdot \\frac{2}{5y} = \\frac{20y}{4x^2 + 25y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( \\frac{20y}{4x^2 + 25y^2} \\right) \\\\[10pt]\n&= \\frac{20(4x^2 + 25y^2) - (20y)(2 \\cdot 25y)}{(4x^2 + 25y^2)^2} \\\\[10pt]\n&= \\frac{20(4x^2 + 25y^2) - 1000y^2}{(4x^2 + 25y^2)^2} \\\\[10pt]\n&= \\frac{20(4x^2 - 25y^2)}{(4x^2 + 25y^2)^2} \\\\\n&= \\frac{20(4x^2 - 25y^2)}{(4x^2 + 25y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch3_28",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\ln(4x^2 + 3y^2)$. Find the mixed second-order partial derivative $f_{xy}$.",
    "answer": "-\\frac{96xy}{(4x^2 + 3y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 2 \\frac{1}{4x^2 + 3y^2} \\cdot (8x) = \\frac{16x}{4x^2 + 3y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 16x(4x^2 + 3y^2)^{-1} \\right] \\\\[10pt]\n&= 16x (-1)(4x^2 + 3y^2)^{-2} (6y) \\\\[10pt]\n&= -\\frac{96xy}{(4x^2 + 3y^2)^2} \\\\\n&= -\\frac{96xy}{(4x^2 + 3y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch4_28",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 \\sin(5x^2 y^3)$. Find $f_{xy}$.",
    "answer": "120xy^2 \\cos(5x^2 y^3) - 600x^3 y^5 \\sin(5x^2 y^3)",
    "steps": "\\begin{aligned}\nf_x &= 4 \\cos(5x^2 y^3) \\cdot (10xy^3) = 40xy^3 \\cos(5x^2 y^3) \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 40xy^3 \\cos(5x^2 y^3) \\right) \\\\[10pt]\n&= 40x \\left[ 3y^2 \\cos(5x^2 y^3) + y^3 (-\\sin(5x^2 y^3)) (\\frac{\\partial}{\\partial y}(5x^2 y^3)) \\right] \\\\[10pt]\n&= 40x \\left[ 3y^2 \\cos(5x^2 y^3) - y^3 \\sin(5x^2 y^3) (15x^2 y^2) \\right] \\\\[10pt]\n&= 120xy^2 \\cos(5x^2 y^3) - 600x^3 y^5 \\sin(5x^2 y^3) \\\\\n&= 120xy^2 \\cos(5x^2 y^3) - 600x^3 y^5 \\sin(5x^2 y^3)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch5_28",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\sqrt{4x^2 + 6y^2}$. Find the second-order partial derivative $f_{xx}$.",
    "answer": "\\frac{48y^2}{(4x^2 + 6y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= \\frac{1}{2} 2(4x^2 + 6y^2)^{-\\frac{1}{2}} (\\frac{\\partial}{\\partial x}(4x^2 + 6y^2)) \\\\[10pt]\n&= \\frac{1}{2} 2(4x^2 + 6y^2)^{-\\frac{1}{2}} (8x) = \\frac{8x}{\\sqrt{4x^2 + 6y^2}} \\\\[10pt]\nf_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{8x}{\\sqrt{4x^2 + 6y^2}} \\right) \\\\[10pt]\n&= \\frac{8\\sqrt{4x^2 + 6y^2} - 8x \\left( \\frac{4x}{\\sqrt{4x^2 + 6y^2}} \\right)}{4x^2 + 6y^2} \\\\[10pt]\n&= \\frac{\\frac{8(4x^2 + 6y^2) - 32x^2}{\\sqrt{4x^2 + 6y^2}}}{4x^2 + 6y^2} \\\\[10pt]\n&= \\frac{32x^2 + 48y^2 - 32x^2}{(4x^2 + 6y^2)^{\\frac{3}{2}}} \\\\[10pt]\n&= \\frac{48y^2}{(4x^2 + 6y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch6_28",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\arcsin(2xy)$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "\\frac{4}{(1 - 4x^2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= 2 \\frac{1}{\\sqrt{1 - (2xy)^2}} (2y) = \\frac{4y}{\\sqrt{1 - 4x^2y^2}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 4y (1 - 4x^2y^2)^{-\\frac{1}{2}} \\right] \\\\[10pt]\n&= 4 \\left[ 1 \\cdot (1 - 4x^2y^2)^{-\\frac{1}{2}} + y \\left(-\\frac{1}{2}\\right)(1 - 4x^2y^2)^{-\\frac{3}{2}} (-8x^2y) \\right] \\\\[10pt]\n&= 4 \\left[ \\frac{1}{\\sqrt{1 - 4x^2y^2}} + \\frac{4x^2y^2}{(1 - 4x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= 4 \\left[ \\frac{(1 - 4x^2y^2) + 4x^2y^2}{(1 - 4x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= \\frac{4 (1)}{(1 - 4x^2y^2)^{\\frac{3}{2}}} = \\frac{4}{(1 - 4x^2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch1_29",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 y^{4} e^{\\frac{5x}{y}}$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "15y e^{\\frac{5x}{y}} (3y - 5x)",
    "steps": "\\begin{aligned}\nf_x &= \\frac{\\partial}{\\partial x} \\left( 3 y^{4} e^{\\frac{5x}{y}} \\right) = 3 y^{4} e^{\\frac{5x}{y}} \\left(\\frac{5}{y}\\right) = 15 y^{3} e^{\\frac{5x}{y}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 15 y^{3} e^{\\frac{5x}{y}} \\right) \\\\[10pt]\n&= 15 \\left[ (3)y^{2} e^{\\frac{5x}{y}} + y^{3} e^{\\frac{5x}{y}} \\left(-\\frac{5x}{y^2}\\right) \\right] \\\\[10pt]\n&= 15 y^{1} e^{\\frac{5x}{y}} \\left( 3y - 5x \\right) \\\\\n&= 15y e^{\\frac{5x}{y}} (3y - 5x)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch2_29",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 7 \\arctan\\left(\\frac{3x}{5y}\\right)$. Find $f_{xy}$.",
    "answer": "\\frac{105(9x^2 - 25y^2)}{(9x^2 + 25y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 7 \\frac{1}{1 + \\left(\\frac{3x}{5y}\\right)^2} \\cdot \\frac{3}{5y} = \\frac{7 \\cdot 25y^2}{9x^2 + 25y^2} \\cdot \\frac{3}{5y} = \\frac{105y}{9x^2 + 25y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( \\frac{105y}{9x^2 + 25y^2} \\right) \\\\[10pt]\n&= \\frac{105(9x^2 + 25y^2) - (105y)(2 \\cdot 25y)}{(9x^2 + 25y^2)^2} \\\\[10pt]\n&= \\frac{105(9x^2 + 25y^2) - 5250y^2}{(9x^2 + 25y^2)^2} \\\\[10pt]\n&= \\frac{105(9x^2 - 25y^2)}{(9x^2 + 25y^2)^2} \\\\\n&= \\frac{105(9x^2 - 25y^2)}{(9x^2 + 25y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch3_29",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\ln(4x^2 + 3y^2)$. Find the mixed second-order partial derivative $f_{xy}$.",
    "answer": "-\\frac{144xy}{(4x^2 + 3y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 3 \\frac{1}{4x^2 + 3y^2} \\cdot (8x) = \\frac{24x}{4x^2 + 3y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 24x(4x^2 + 3y^2)^{-1} \\right] \\\\[10pt]\n&= 24x (-1)(4x^2 + 3y^2)^{-2} (6y) \\\\[10pt]\n&= -\\frac{144xy}{(4x^2 + 3y^2)^2} \\\\\n&= -\\frac{144xy}{(4x^2 + 3y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch4_29",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\sin(4x^2 y^3)$. Find $f_{xy}$.",
    "answer": "48xy^2 \\cos(4x^2 y^3) - 192x^3 y^5 \\sin(4x^2 y^3)",
    "steps": "\\begin{aligned}\nf_x &= 2 \\cos(4x^2 y^3) \\cdot (8xy^3) = 16xy^3 \\cos(4x^2 y^3) \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 16xy^3 \\cos(4x^2 y^3) \\right) \\\\[10pt]\n&= 16x \\left[ 3y^2 \\cos(4x^2 y^3) + y^3 (-\\sin(4x^2 y^3)) (\\frac{\\partial}{\\partial y}(4x^2 y^3)) \\right] \\\\[10pt]\n&= 16x \\left[ 3y^2 \\cos(4x^2 y^3) - y^3 \\sin(4x^2 y^3) (12x^2 y^2) \\right] \\\\[10pt]\n&= 48xy^2 \\cos(4x^2 y^3) - 192x^3 y^5 \\sin(4x^2 y^3) \\\\\n&= 48xy^2 \\cos(4x^2 y^3) - 192x^3 y^5 \\sin(4x^2 y^3)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch5_29",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 \\sqrt{4x^2 + 3y^2}$. Find the second-order partial derivative $f_{xx}$.",
    "answer": "\\frac{48y^2}{(4x^2 + 3y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= \\frac{1}{2} 4(4x^2 + 3y^2)^{-\\frac{1}{2}} (\\frac{\\partial}{\\partial x}(4x^2 + 3y^2)) \\\\[10pt]\n&= \\frac{1}{2} 4(4x^2 + 3y^2)^{-\\frac{1}{2}} (8x) = \\frac{16x}{\\sqrt{4x^2 + 3y^2}} \\\\[10pt]\nf_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{16x}{\\sqrt{4x^2 + 3y^2}} \\right) \\\\[10pt]\n&= \\frac{16\\sqrt{4x^2 + 3y^2} - 16x \\left( \\frac{4x}{\\sqrt{4x^2 + 3y^2}} \\right)}{4x^2 + 3y^2} \\\\[10pt]\n&= \\frac{\\frac{16(4x^2 + 3y^2) - 64x^2}{\\sqrt{4x^2 + 3y^2}}}{4x^2 + 3y^2} \\\\[10pt]\n&= \\frac{64x^2 + 48y^2 - 64x^2}{(4x^2 + 3y^2)^{\\frac{3}{2}}} \\\\[10pt]\n&= \\frac{48y^2}{(4x^2 + 3y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch6_29",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\arcsin(6xy)$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "\\frac{18}{(1 - 36x^2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= 3 \\frac{1}{\\sqrt{1 - (6xy)^2}} (6y) = \\frac{18y}{\\sqrt{1 - 36x^2y^2}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 18y (1 - 36x^2y^2)^{-\\frac{1}{2}} \\right] \\\\[10pt]\n&= 18 \\left[ 1 \\cdot (1 - 36x^2y^2)^{-\\frac{1}{2}} + y \\left(-\\frac{1}{2}\\right)(1 - 36x^2y^2)^{-\\frac{3}{2}} (-72x^2y) \\right] \\\\[10pt]\n&= 18 \\left[ \\frac{1}{\\sqrt{1 - 36x^2y^2}} + \\frac{36x^2y^2}{(1 - 36x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= 18 \\left[ \\frac{(1 - 36x^2y^2) + 36x^2y^2}{(1 - 36x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= \\frac{18 (1)}{(1 - 36x^2y^2)^{\\frac{3}{2}}} = \\frac{18}{(1 - 36x^2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch1_30",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 y^{6} e^{\\frac{2x}{y}}$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "10y^{3} e^{\\frac{2x}{y}} (5y - 2x)",
    "steps": "\\begin{aligned}\nf_x &= \\frac{\\partial}{\\partial x} \\left( 5 y^{6} e^{\\frac{2x}{y}} \\right) = 5 y^{6} e^{\\frac{2x}{y}} \\left(\\frac{2}{y}\\right) = 10 y^{5} e^{\\frac{2x}{y}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 10 y^{5} e^{\\frac{2x}{y}} \\right) \\\\[10pt]\n&= 10 \\left[ (5)y^{4} e^{\\frac{2x}{y}} + y^{5} e^{\\frac{2x}{y}} \\left(-\\frac{2x}{y^2}\\right) \\right] \\\\[10pt]\n&= 10 y^{3} e^{\\frac{2x}{y}} \\left( 5y - 2x \\right) \\\\\n&= 10y^{3} e^{\\frac{2x}{y}} (5y - 2x)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch2_30",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 7 \\arctan\\left(\\frac{7x}{3y}\\right)$. Find $f_{xy}$.",
    "answer": "\\frac{147(49x^2 - 9y^2)}{(49x^2 + 9y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 7 \\frac{1}{1 + \\left(\\frac{7x}{3y}\\right)^2} \\cdot \\frac{7}{3y} = \\frac{7 \\cdot 9y^2}{49x^2 + 9y^2} \\cdot \\frac{7}{3y} = \\frac{147y}{49x^2 + 9y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( \\frac{147y}{49x^2 + 9y^2} \\right) \\\\[10pt]\n&= \\frac{147(49x^2 + 9y^2) - (147y)(2 \\cdot 9y)}{(49x^2 + 9y^2)^2} \\\\[10pt]\n&= \\frac{147(49x^2 + 9y^2) - 2646y^2}{(49x^2 + 9y^2)^2} \\\\[10pt]\n&= \\frac{147(49x^2 - 9y^2)}{(49x^2 + 9y^2)^2} \\\\\n&= \\frac{147(49x^2 - 9y^2)}{(49x^2 + 9y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch3_30",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 \\ln(5x^2 + 5y^2)$. Find the mixed second-order partial derivative $f_{xy}$.",
    "answer": "-\\frac{400xy}{(5x^2 + 5y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 4 \\frac{1}{5x^2 + 5y^2} \\cdot (10x) = \\frac{40x}{5x^2 + 5y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 40x(5x^2 + 5y^2)^{-1} \\right] \\\\[10pt]\n&= 40x (-1)(5x^2 + 5y^2)^{-2} (10y) \\\\[10pt]\n&= -\\frac{400xy}{(5x^2 + 5y^2)^2} \\\\\n&= -\\frac{400xy}{(5x^2 + 5y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch4_30",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\sin(5x^2 y^3)$. Find $f_{xy}$.",
    "answer": "90xy^2 \\cos(5x^2 y^3) - 450x^3 y^5 \\sin(5x^2 y^3)",
    "steps": "\\begin{aligned}\nf_x &= 3 \\cos(5x^2 y^3) \\cdot (10xy^3) = 30xy^3 \\cos(5x^2 y^3) \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 30xy^3 \\cos(5x^2 y^3) \\right) \\\\[10pt]\n&= 30x \\left[ 3y^2 \\cos(5x^2 y^3) + y^3 (-\\sin(5x^2 y^3)) (\\frac{\\partial}{\\partial y}(5x^2 y^3)) \\right] \\\\[10pt]\n&= 30x \\left[ 3y^2 \\cos(5x^2 y^3) - y^3 \\sin(5x^2 y^3) (15x^2 y^2) \\right] \\\\[10pt]\n&= 90xy^2 \\cos(5x^2 y^3) - 450x^3 y^5 \\sin(5x^2 y^3) \\\\\n&= 90xy^2 \\cos(5x^2 y^3) - 450x^3 y^5 \\sin(5x^2 y^3)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch5_30",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\sqrt{3x^2 + 6y^2}$. Find the second-order partial derivative $f_{xx}$.",
    "answer": "\\frac{54y^2}{(3x^2 + 6y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= \\frac{1}{2} 3(3x^2 + 6y^2)^{-\\frac{1}{2}} (\\frac{\\partial}{\\partial x}(3x^2 + 6y^2)) \\\\[10pt]\n&= \\frac{1}{2} 3(3x^2 + 6y^2)^{-\\frac{1}{2}} (6x) = \\frac{9x}{\\sqrt{3x^2 + 6y^2}} \\\\[10pt]\nf_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{9x}{\\sqrt{3x^2 + 6y^2}} \\right) \\\\[10pt]\n&= \\frac{9\\sqrt{3x^2 + 6y^2} - 9x \\left( \\frac{3x}{\\sqrt{3x^2 + 6y^2}} \\right)}{3x^2 + 6y^2} \\\\[10pt]\n&= \\frac{\\frac{9(3x^2 + 6y^2) - 27x^2}{\\sqrt{3x^2 + 6y^2}}}{3x^2 + 6y^2} \\\\[10pt]\n&= \\frac{27x^2 + 54y^2 - 27x^2}{(3x^2 + 6y^2)^{\\frac{3}{2}}} \\\\[10pt]\n&= \\frac{54y^2}{(3x^2 + 6y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch6_30",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\arcsin(6xy)$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "\\frac{18}{(1 - 36x^2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= 3 \\frac{1}{\\sqrt{1 - (6xy)^2}} (6y) = \\frac{18y}{\\sqrt{1 - 36x^2y^2}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 18y (1 - 36x^2y^2)^{-\\frac{1}{2}} \\right] \\\\[10pt]\n&= 18 \\left[ 1 \\cdot (1 - 36x^2y^2)^{-\\frac{1}{2}} + y \\left(-\\frac{1}{2}\\right)(1 - 36x^2y^2)^{-\\frac{3}{2}} (-72x^2y) \\right] \\\\[10pt]\n&= 18 \\left[ \\frac{1}{\\sqrt{1 - 36x^2y^2}} + \\frac{36x^2y^2}{(1 - 36x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= 18 \\left[ \\frac{(1 - 36x^2y^2) + 36x^2y^2}{(1 - 36x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= \\frac{18 (1)}{(1 - 36x^2y^2)^{\\frac{3}{2}}} = \\frac{18}{(1 - 36x^2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch1_31",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 y^{7} e^{\\frac{3x}{y}}$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "12y^{4} e^{\\frac{3x}{y}} (6y - 3x)",
    "steps": "\\begin{aligned}\nf_x &= \\frac{\\partial}{\\partial x} \\left( 4 y^{7} e^{\\frac{3x}{y}} \\right) = 4 y^{7} e^{\\frac{3x}{y}} \\left(\\frac{3}{y}\\right) = 12 y^{6} e^{\\frac{3x}{y}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 12 y^{6} e^{\\frac{3x}{y}} \\right) \\\\[10pt]\n&= 12 \\left[ (6)y^{5} e^{\\frac{3x}{y}} + y^{6} e^{\\frac{3x}{y}} \\left(-\\frac{3x}{y^2}\\right) \\right] \\\\[10pt]\n&= 12 y^{4} e^{\\frac{3x}{y}} \\left( 6y - 3x \\right) \\\\\n&= 12y^{4} e^{\\frac{3x}{y}} (6y - 3x)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch2_31",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 6 \\arctan\\left(\\frac{5x}{2y}\\right)$. Find $f_{xy}$.",
    "answer": "\\frac{60(25x^2 - 4y^2)}{(25x^2 + 4y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 6 \\frac{1}{1 + \\left(\\frac{5x}{2y}\\right)^2} \\cdot \\frac{5}{2y} = \\frac{6 \\cdot 4y^2}{25x^2 + 4y^2} \\cdot \\frac{5}{2y} = \\frac{60y}{25x^2 + 4y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( \\frac{60y}{25x^2 + 4y^2} \\right) \\\\[10pt]\n&= \\frac{60(25x^2 + 4y^2) - (60y)(2 \\cdot 4y)}{(25x^2 + 4y^2)^2} \\\\[10pt]\n&= \\frac{60(25x^2 + 4y^2) - 480y^2}{(25x^2 + 4y^2)^2} \\\\[10pt]\n&= \\frac{60(25x^2 - 4y^2)}{(25x^2 + 4y^2)^2} \\\\\n&= \\frac{60(25x^2 - 4y^2)}{(25x^2 + 4y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch3_31",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\ln(4x^2 + 2y^2)$. Find the mixed second-order partial derivative $f_{xy}$.",
    "answer": "-\\frac{64xy}{(4x^2 + 2y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 2 \\frac{1}{4x^2 + 2y^2} \\cdot (8x) = \\frac{16x}{4x^2 + 2y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 16x(4x^2 + 2y^2)^{-1} \\right] \\\\[10pt]\n&= 16x (-1)(4x^2 + 2y^2)^{-2} (4y) \\\\[10pt]\n&= -\\frac{64xy}{(4x^2 + 2y^2)^2} \\\\\n&= -\\frac{64xy}{(4x^2 + 2y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch4_31",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\sin(2x^2 y^3)$. Find $f_{xy}$.",
    "answer": "24xy^2 \\cos(2x^2 y^3) - 48x^3 y^5 \\sin(2x^2 y^3)",
    "steps": "\\begin{aligned}\nf_x &= 2 \\cos(2x^2 y^3) \\cdot (4xy^3) = 8xy^3 \\cos(2x^2 y^3) \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 8xy^3 \\cos(2x^2 y^3) \\right) \\\\[10pt]\n&= 8x \\left[ 3y^2 \\cos(2x^2 y^3) + y^3 (-\\sin(2x^2 y^3)) (\\frac{\\partial}{\\partial y}(2x^2 y^3)) \\right] \\\\[10pt]\n&= 8x \\left[ 3y^2 \\cos(2x^2 y^3) - y^3 \\sin(2x^2 y^3) (6x^2 y^2) \\right] \\\\[10pt]\n&= 24xy^2 \\cos(2x^2 y^3) - 48x^3 y^5 \\sin(2x^2 y^3) \\\\\n&= 24xy^2 \\cos(2x^2 y^3) - 48x^3 y^5 \\sin(2x^2 y^3)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch5_31",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\sqrt{2x^2 + 5y^2}$. Find the second-order partial derivative $f_{xx}$.",
    "answer": "\\frac{20y^2}{(2x^2 + 5y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= \\frac{1}{2} 2(2x^2 + 5y^2)^{-\\frac{1}{2}} (\\frac{\\partial}{\\partial x}(2x^2 + 5y^2)) \\\\[10pt]\n&= \\frac{1}{2} 2(2x^2 + 5y^2)^{-\\frac{1}{2}} (4x) = \\frac{4x}{\\sqrt{2x^2 + 5y^2}} \\\\[10pt]\nf_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{4x}{\\sqrt{2x^2 + 5y^2}} \\right) \\\\[10pt]\n&= \\frac{4\\sqrt{2x^2 + 5y^2} - 4x \\left( \\frac{2x}{\\sqrt{2x^2 + 5y^2}} \\right)}{2x^2 + 5y^2} \\\\[10pt]\n&= \\frac{\\frac{4(2x^2 + 5y^2) - 8x^2}{\\sqrt{2x^2 + 5y^2}}}{2x^2 + 5y^2} \\\\[10pt]\n&= \\frac{8x^2 + 20y^2 - 8x^2}{(2x^2 + 5y^2)^{\\frac{3}{2}}} \\\\[10pt]\n&= \\frac{20y^2}{(2x^2 + 5y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch6_31",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\arcsin(3xy)$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "\\frac{9}{(1 - 9x^2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= 3 \\frac{1}{\\sqrt{1 - (3xy)^2}} (3y) = \\frac{9y}{\\sqrt{1 - 9x^2y^2}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 9y (1 - 9x^2y^2)^{-\\frac{1}{2}} \\right] \\\\[10pt]\n&= 9 \\left[ 1 \\cdot (1 - 9x^2y^2)^{-\\frac{1}{2}} + y \\left(-\\frac{1}{2}\\right)(1 - 9x^2y^2)^{-\\frac{3}{2}} (-18x^2y) \\right] \\\\[10pt]\n&= 9 \\left[ \\frac{1}{\\sqrt{1 - 9x^2y^2}} + \\frac{9x^2y^2}{(1 - 9x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= 9 \\left[ \\frac{(1 - 9x^2y^2) + 9x^2y^2}{(1 - 9x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= \\frac{9 (1)}{(1 - 9x^2y^2)^{\\frac{3}{2}}} = \\frac{9}{(1 - 9x^2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch1_32",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 y^{5} e^{\\frac{4x}{y}}$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "20y^{2} e^{\\frac{4x}{y}} (4y - 4x)",
    "steps": "\\begin{aligned}\nf_x &= \\frac{\\partial}{\\partial x} \\left( 5 y^{5} e^{\\frac{4x}{y}} \\right) = 5 y^{5} e^{\\frac{4x}{y}} \\left(\\frac{4}{y}\\right) = 20 y^{4} e^{\\frac{4x}{y}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 20 y^{4} e^{\\frac{4x}{y}} \\right) \\\\[10pt]\n&= 20 \\left[ (4)y^{3} e^{\\frac{4x}{y}} + y^{4} e^{\\frac{4x}{y}} \\left(-\\frac{4x}{y^2}\\right) \\right] \\\\[10pt]\n&= 20 y^{2} e^{\\frac{4x}{y}} \\left( 4y - 4x \\right) \\\\\n&= 20y^{2} e^{\\frac{4x}{y}} (4y - 4x)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch2_32",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 6 \\arctan\\left(\\frac{5x}{5y}\\right)$. Find $f_{xy}$.",
    "answer": "\\frac{150(25x^2 - 25y^2)}{(25x^2 + 25y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 6 \\frac{1}{1 + \\left(\\frac{5x}{5y}\\right)^2} \\cdot \\frac{5}{5y} = \\frac{6 \\cdot 25y^2}{25x^2 + 25y^2} \\cdot \\frac{5}{5y} = \\frac{150y}{25x^2 + 25y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( \\frac{150y}{25x^2 + 25y^2} \\right) \\\\[10pt]\n&= \\frac{150(25x^2 + 25y^2) - (150y)(2 \\cdot 25y)}{(25x^2 + 25y^2)^2} \\\\[10pt]\n&= \\frac{150(25x^2 + 25y^2) - 7500y^2}{(25x^2 + 25y^2)^2} \\\\[10pt]\n&= \\frac{150(25x^2 - 25y^2)}{(25x^2 + 25y^2)^2} \\\\\n&= \\frac{150(25x^2 - 25y^2)}{(25x^2 + 25y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch3_32",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\ln(2x^2 + 3y^2)$. Find the mixed second-order partial derivative $f_{xy}$.",
    "answer": "-\\frac{48xy}{(2x^2 + 3y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 2 \\frac{1}{2x^2 + 3y^2} \\cdot (4x) = \\frac{8x}{2x^2 + 3y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 8x(2x^2 + 3y^2)^{-1} \\right] \\\\[10pt]\n&= 8x (-1)(2x^2 + 3y^2)^{-2} (6y) \\\\[10pt]\n&= -\\frac{48xy}{(2x^2 + 3y^2)^2} \\\\\n&= -\\frac{48xy}{(2x^2 + 3y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch4_32",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 \\sin(5x^2 y^3)$. Find $f_{xy}$.",
    "answer": "120xy^2 \\cos(5x^2 y^3) - 600x^3 y^5 \\sin(5x^2 y^3)",
    "steps": "\\begin{aligned}\nf_x &= 4 \\cos(5x^2 y^3) \\cdot (10xy^3) = 40xy^3 \\cos(5x^2 y^3) \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 40xy^3 \\cos(5x^2 y^3) \\right) \\\\[10pt]\n&= 40x \\left[ 3y^2 \\cos(5x^2 y^3) + y^3 (-\\sin(5x^2 y^3)) (\\frac{\\partial}{\\partial y}(5x^2 y^3)) \\right] \\\\[10pt]\n&= 40x \\left[ 3y^2 \\cos(5x^2 y^3) - y^3 \\sin(5x^2 y^3) (15x^2 y^2) \\right] \\\\[10pt]\n&= 120xy^2 \\cos(5x^2 y^3) - 600x^3 y^5 \\sin(5x^2 y^3) \\\\\n&= 120xy^2 \\cos(5x^2 y^3) - 600x^3 y^5 \\sin(5x^2 y^3)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch5_32",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\sqrt{5x^2 + 4y^2}$. Find the second-order partial derivative $f_{xx}$.",
    "answer": "\\frac{60y^2}{(5x^2 + 4y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= \\frac{1}{2} 3(5x^2 + 4y^2)^{-\\frac{1}{2}} (\\frac{\\partial}{\\partial x}(5x^2 + 4y^2)) \\\\[10pt]\n&= \\frac{1}{2} 3(5x^2 + 4y^2)^{-\\frac{1}{2}} (10x) = \\frac{15x}{\\sqrt{5x^2 + 4y^2}} \\\\[10pt]\nf_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{15x}{\\sqrt{5x^2 + 4y^2}} \\right) \\\\[10pt]\n&= \\frac{15\\sqrt{5x^2 + 4y^2} - 15x \\left( \\frac{5x}{\\sqrt{5x^2 + 4y^2}} \\right)}{5x^2 + 4y^2} \\\\[10pt]\n&= \\frac{\\frac{15(5x^2 + 4y^2) - 75x^2}{\\sqrt{5x^2 + 4y^2}}}{5x^2 + 4y^2} \\\\[10pt]\n&= \\frac{75x^2 + 60y^2 - 75x^2}{(5x^2 + 4y^2)^{\\frac{3}{2}}} \\\\[10pt]\n&= \\frac{60y^2}{(5x^2 + 4y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch6_32",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\arcsin(2xy)$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "\\frac{6}{(1 - 4x^2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= 3 \\frac{1}{\\sqrt{1 - (2xy)^2}} (2y) = \\frac{6y}{\\sqrt{1 - 4x^2y^2}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 6y (1 - 4x^2y^2)^{-\\frac{1}{2}} \\right] \\\\[10pt]\n&= 6 \\left[ 1 \\cdot (1 - 4x^2y^2)^{-\\frac{1}{2}} + y \\left(-\\frac{1}{2}\\right)(1 - 4x^2y^2)^{-\\frac{3}{2}} (-8x^2y) \\right] \\\\[10pt]\n&= 6 \\left[ \\frac{1}{\\sqrt{1 - 4x^2y^2}} + \\frac{4x^2y^2}{(1 - 4x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= 6 \\left[ \\frac{(1 - 4x^2y^2) + 4x^2y^2}{(1 - 4x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= \\frac{6 (1)}{(1 - 4x^2y^2)^{\\frac{3}{2}}} = \\frac{6}{(1 - 4x^2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch1_33",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 y^{6} e^{\\frac{3x}{y}}$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "12y^{3} e^{\\frac{3x}{y}} (5y - 3x)",
    "steps": "\\begin{aligned}\nf_x &= \\frac{\\partial}{\\partial x} \\left( 4 y^{6} e^{\\frac{3x}{y}} \\right) = 4 y^{6} e^{\\frac{3x}{y}} \\left(\\frac{3}{y}\\right) = 12 y^{5} e^{\\frac{3x}{y}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 12 y^{5} e^{\\frac{3x}{y}} \\right) \\\\[10pt]\n&= 12 \\left[ (5)y^{4} e^{\\frac{3x}{y}} + y^{5} e^{\\frac{3x}{y}} \\left(-\\frac{3x}{y^2}\\right) \\right] \\\\[10pt]\n&= 12 y^{3} e^{\\frac{3x}{y}} \\left( 5y - 3x \\right) \\\\\n&= 12y^{3} e^{\\frac{3x}{y}} (5y - 3x)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch2_33",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 \\arctan\\left(\\frac{3x}{3y}\\right)$. Find $f_{xy}$.",
    "answer": "\\frac{45(9x^2 - 9y^2)}{(9x^2 + 9y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 5 \\frac{1}{1 + \\left(\\frac{3x}{3y}\\right)^2} \\cdot \\frac{3}{3y} = \\frac{5 \\cdot 9y^2}{9x^2 + 9y^2} \\cdot \\frac{3}{3y} = \\frac{45y}{9x^2 + 9y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( \\frac{45y}{9x^2 + 9y^2} \\right) \\\\[10pt]\n&= \\frac{45(9x^2 + 9y^2) - (45y)(2 \\cdot 9y)}{(9x^2 + 9y^2)^2} \\\\[10pt]\n&= \\frac{45(9x^2 + 9y^2) - 810y^2}{(9x^2 + 9y^2)^2} \\\\[10pt]\n&= \\frac{45(9x^2 - 9y^2)}{(9x^2 + 9y^2)^2} \\\\\n&= \\frac{45(9x^2 - 9y^2)}{(9x^2 + 9y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch3_33",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 \\ln(2x^2 + 2y^2)$. Find the mixed second-order partial derivative $f_{xy}$.",
    "answer": "-\\frac{64xy}{(2x^2 + 2y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 4 \\frac{1}{2x^2 + 2y^2} \\cdot (4x) = \\frac{16x}{2x^2 + 2y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 16x(2x^2 + 2y^2)^{-1} \\right] \\\\[10pt]\n&= 16x (-1)(2x^2 + 2y^2)^{-2} (4y) \\\\[10pt]\n&= -\\frac{64xy}{(2x^2 + 2y^2)^2} \\\\\n&= -\\frac{64xy}{(2x^2 + 2y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch4_33",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\sin(4x^2 y^3)$. Find $f_{xy}$.",
    "answer": "48xy^2 \\cos(4x^2 y^3) - 192x^3 y^5 \\sin(4x^2 y^3)",
    "steps": "\\begin{aligned}\nf_x &= 2 \\cos(4x^2 y^3) \\cdot (8xy^3) = 16xy^3 \\cos(4x^2 y^3) \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 16xy^3 \\cos(4x^2 y^3) \\right) \\\\[10pt]\n&= 16x \\left[ 3y^2 \\cos(4x^2 y^3) + y^3 (-\\sin(4x^2 y^3)) (\\frac{\\partial}{\\partial y}(4x^2 y^3)) \\right] \\\\[10pt]\n&= 16x \\left[ 3y^2 \\cos(4x^2 y^3) - y^3 \\sin(4x^2 y^3) (12x^2 y^2) \\right] \\\\[10pt]\n&= 48xy^2 \\cos(4x^2 y^3) - 192x^3 y^5 \\sin(4x^2 y^3) \\\\\n&= 48xy^2 \\cos(4x^2 y^3) - 192x^3 y^5 \\sin(4x^2 y^3)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch5_33",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 7 \\sqrt{6x^2 + 3y^2}$. Find the second-order partial derivative $f_{xx}$.",
    "answer": "\\frac{126y^2}{(6x^2 + 3y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= \\frac{1}{2} 7(6x^2 + 3y^2)^{-\\frac{1}{2}} (\\frac{\\partial}{\\partial x}(6x^2 + 3y^2)) \\\\[10pt]\n&= \\frac{1}{2} 7(6x^2 + 3y^2)^{-\\frac{1}{2}} (12x) = \\frac{42x}{\\sqrt{6x^2 + 3y^2}} \\\\[10pt]\nf_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{42x}{\\sqrt{6x^2 + 3y^2}} \\right) \\\\[10pt]\n&= \\frac{42\\sqrt{6x^2 + 3y^2} - 42x \\left( \\frac{6x}{\\sqrt{6x^2 + 3y^2}} \\right)}{6x^2 + 3y^2} \\\\[10pt]\n&= \\frac{\\frac{42(6x^2 + 3y^2) - 252x^2}{\\sqrt{6x^2 + 3y^2}}}{6x^2 + 3y^2} \\\\[10pt]\n&= \\frac{252x^2 + 126y^2 - 252x^2}{(6x^2 + 3y^2)^{\\frac{3}{2}}} \\\\[10pt]\n&= \\frac{126y^2}{(6x^2 + 3y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch6_33",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 \\arcsin(5xy)$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "\\frac{20}{(1 - 25x^2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= 4 \\frac{1}{\\sqrt{1 - (5xy)^2}} (5y) = \\frac{20y}{\\sqrt{1 - 25x^2y^2}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 20y (1 - 25x^2y^2)^{-\\frac{1}{2}} \\right] \\\\[10pt]\n&= 20 \\left[ 1 \\cdot (1 - 25x^2y^2)^{-\\frac{1}{2}} + y \\left(-\\frac{1}{2}\\right)(1 - 25x^2y^2)^{-\\frac{3}{2}} (-50x^2y) \\right] \\\\[10pt]\n&= 20 \\left[ \\frac{1}{\\sqrt{1 - 25x^2y^2}} + \\frac{25x^2y^2}{(1 - 25x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= 20 \\left[ \\frac{(1 - 25x^2y^2) + 25x^2y^2}{(1 - 25x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= \\frac{20 (1)}{(1 - 25x^2y^2)^{\\frac{3}{2}}} = \\frac{20}{(1 - 25x^2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch1_34",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 y^{6} e^{\\frac{4x}{y}}$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "20y^{3} e^{\\frac{4x}{y}} (5y - 4x)",
    "steps": "\\begin{aligned}\nf_x &= \\frac{\\partial}{\\partial x} \\left( 5 y^{6} e^{\\frac{4x}{y}} \\right) = 5 y^{6} e^{\\frac{4x}{y}} \\left(\\frac{4}{y}\\right) = 20 y^{5} e^{\\frac{4x}{y}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 20 y^{5} e^{\\frac{4x}{y}} \\right) \\\\[10pt]\n&= 20 \\left[ (5)y^{4} e^{\\frac{4x}{y}} + y^{5} e^{\\frac{4x}{y}} \\left(-\\frac{4x}{y^2}\\right) \\right] \\\\[10pt]\n&= 20 y^{3} e^{\\frac{4x}{y}} \\left( 5y - 4x \\right) \\\\\n&= 20y^{3} e^{\\frac{4x}{y}} (5y - 4x)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch2_34",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\arctan\\left(\\frac{3x}{7y}\\right)$. Find $f_{xy}$.",
    "answer": "\\frac{42(9x^2 - 49y^2)}{(9x^2 + 49y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 2 \\frac{1}{1 + \\left(\\frac{3x}{7y}\\right)^2} \\cdot \\frac{3}{7y} = \\frac{2 \\cdot 49y^2}{9x^2 + 49y^2} \\cdot \\frac{3}{7y} = \\frac{42y}{9x^2 + 49y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( \\frac{42y}{9x^2 + 49y^2} \\right) \\\\[10pt]\n&= \\frac{42(9x^2 + 49y^2) - (42y)(2 \\cdot 49y)}{(9x^2 + 49y^2)^2} \\\\[10pt]\n&= \\frac{42(9x^2 + 49y^2) - 4116y^2}{(9x^2 + 49y^2)^2} \\\\[10pt]\n&= \\frac{42(9x^2 - 49y^2)}{(9x^2 + 49y^2)^2} \\\\\n&= \\frac{42(9x^2 - 49y^2)}{(9x^2 + 49y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch3_34",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 \\ln(3x^2 + 4y^2)$. Find the mixed second-order partial derivative $f_{xy}$.",
    "answer": "-\\frac{240xy}{(3x^2 + 4y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 5 \\frac{1}{3x^2 + 4y^2} \\cdot (6x) = \\frac{30x}{3x^2 + 4y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 30x(3x^2 + 4y^2)^{-1} \\right] \\\\[10pt]\n&= 30x (-1)(3x^2 + 4y^2)^{-2} (8y) \\\\[10pt]\n&= -\\frac{240xy}{(3x^2 + 4y^2)^2} \\\\\n&= -\\frac{240xy}{(3x^2 + 4y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch4_34",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 \\sin(3x^2 y^3)$. Find $f_{xy}$.",
    "answer": "72xy^2 \\cos(3x^2 y^3) - 216x^3 y^5 \\sin(3x^2 y^3)",
    "steps": "\\begin{aligned}\nf_x &= 4 \\cos(3x^2 y^3) \\cdot (6xy^3) = 24xy^3 \\cos(3x^2 y^3) \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 24xy^3 \\cos(3x^2 y^3) \\right) \\\\[10pt]\n&= 24x \\left[ 3y^2 \\cos(3x^2 y^3) + y^3 (-\\sin(3x^2 y^3)) (\\frac{\\partial}{\\partial y}(3x^2 y^3)) \\right] \\\\[10pt]\n&= 24x \\left[ 3y^2 \\cos(3x^2 y^3) - y^3 \\sin(3x^2 y^3) (9x^2 y^2) \\right] \\\\[10pt]\n&= 72xy^2 \\cos(3x^2 y^3) - 216x^3 y^5 \\sin(3x^2 y^3) \\\\\n&= 72xy^2 \\cos(3x^2 y^3) - 216x^3 y^5 \\sin(3x^2 y^3)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch5_34",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\sqrt{4x^2 + 5y^2}$. Find the second-order partial derivative $f_{xx}$.",
    "answer": "\\frac{60y^2}{(4x^2 + 5y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= \\frac{1}{2} 3(4x^2 + 5y^2)^{-\\frac{1}{2}} (\\frac{\\partial}{\\partial x}(4x^2 + 5y^2)) \\\\[10pt]\n&= \\frac{1}{2} 3(4x^2 + 5y^2)^{-\\frac{1}{2}} (8x) = \\frac{12x}{\\sqrt{4x^2 + 5y^2}} \\\\[10pt]\nf_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{12x}{\\sqrt{4x^2 + 5y^2}} \\right) \\\\[10pt]\n&= \\frac{12\\sqrt{4x^2 + 5y^2} - 12x \\left( \\frac{4x}{\\sqrt{4x^2 + 5y^2}} \\right)}{4x^2 + 5y^2} \\\\[10pt]\n&= \\frac{\\frac{12(4x^2 + 5y^2) - 48x^2}{\\sqrt{4x^2 + 5y^2}}}{4x^2 + 5y^2} \\\\[10pt]\n&= \\frac{48x^2 + 60y^2 - 48x^2}{(4x^2 + 5y^2)^{\\frac{3}{2}}} \\\\[10pt]\n&= \\frac{60y^2}{(4x^2 + 5y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch6_34",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 8 \\arcsin(5xy)$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "\\frac{40}{(1 - 25x^2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= 8 \\frac{1}{\\sqrt{1 - (5xy)^2}} (5y) = \\frac{40y}{\\sqrt{1 - 25x^2y^2}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 40y (1 - 25x^2y^2)^{-\\frac{1}{2}} \\right] \\\\[10pt]\n&= 40 \\left[ 1 \\cdot (1 - 25x^2y^2)^{-\\frac{1}{2}} + y \\left(-\\frac{1}{2}\\right)(1 - 25x^2y^2)^{-\\frac{3}{2}} (-50x^2y) \\right] \\\\[10pt]\n&= 40 \\left[ \\frac{1}{\\sqrt{1 - 25x^2y^2}} + \\frac{25x^2y^2}{(1 - 25x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= 40 \\left[ \\frac{(1 - 25x^2y^2) + 25x^2y^2}{(1 - 25x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= \\frac{40 (1)}{(1 - 25x^2y^2)^{\\frac{3}{2}}} = \\frac{40}{(1 - 25x^2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch1_35",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 y^{7} e^{\\frac{2x}{y}}$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "8y^{4} e^{\\frac{2x}{y}} (6y - 2x)",
    "steps": "\\begin{aligned}\nf_x &= \\frac{\\partial}{\\partial x} \\left( 4 y^{7} e^{\\frac{2x}{y}} \\right) = 4 y^{7} e^{\\frac{2x}{y}} \\left(\\frac{2}{y}\\right) = 8 y^{6} e^{\\frac{2x}{y}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 8 y^{6} e^{\\frac{2x}{y}} \\right) \\\\[10pt]\n&= 8 \\left[ (6)y^{5} e^{\\frac{2x}{y}} + y^{6} e^{\\frac{2x}{y}} \\left(-\\frac{2x}{y^2}\\right) \\right] \\\\[10pt]\n&= 8 y^{4} e^{\\frac{2x}{y}} \\left( 6y - 2x \\right) \\\\\n&= 8y^{4} e^{\\frac{2x}{y}} (6y - 2x)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch2_35",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\arctan\\left(\\frac{2x}{7y}\\right)$. Find $f_{xy}$.",
    "answer": "\\frac{28(4x^2 - 49y^2)}{(4x^2 + 49y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 2 \\frac{1}{1 + \\left(\\frac{2x}{7y}\\right)^2} \\cdot \\frac{2}{7y} = \\frac{2 \\cdot 49y^2}{4x^2 + 49y^2} \\cdot \\frac{2}{7y} = \\frac{28y}{4x^2 + 49y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( \\frac{28y}{4x^2 + 49y^2} \\right) \\\\[10pt]\n&= \\frac{28(4x^2 + 49y^2) - (28y)(2 \\cdot 49y)}{(4x^2 + 49y^2)^2} \\\\[10pt]\n&= \\frac{28(4x^2 + 49y^2) - 2744y^2}{(4x^2 + 49y^2)^2} \\\\[10pt]\n&= \\frac{28(4x^2 - 49y^2)}{(4x^2 + 49y^2)^2} \\\\\n&= \\frac{28(4x^2 - 49y^2)}{(4x^2 + 49y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch3_35",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\ln(3x^2 + 4y^2)$. Find the mixed second-order partial derivative $f_{xy}$.",
    "answer": "-\\frac{144xy}{(3x^2 + 4y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 3 \\frac{1}{3x^2 + 4y^2} \\cdot (6x) = \\frac{18x}{3x^2 + 4y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 18x(3x^2 + 4y^2)^{-1} \\right] \\\\[10pt]\n&= 18x (-1)(3x^2 + 4y^2)^{-2} (8y) \\\\[10pt]\n&= -\\frac{144xy}{(3x^2 + 4y^2)^2} \\\\\n&= -\\frac{144xy}{(3x^2 + 4y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch4_35",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\sin(2x^2 y^3)$. Find $f_{xy}$.",
    "answer": "36xy^2 \\cos(2x^2 y^3) - 72x^3 y^5 \\sin(2x^2 y^3)",
    "steps": "\\begin{aligned}\nf_x &= 3 \\cos(2x^2 y^3) \\cdot (4xy^3) = 12xy^3 \\cos(2x^2 y^3) \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 12xy^3 \\cos(2x^2 y^3) \\right) \\\\[10pt]\n&= 12x \\left[ 3y^2 \\cos(2x^2 y^3) + y^3 (-\\sin(2x^2 y^3)) (\\frac{\\partial}{\\partial y}(2x^2 y^3)) \\right] \\\\[10pt]\n&= 12x \\left[ 3y^2 \\cos(2x^2 y^3) - y^3 \\sin(2x^2 y^3) (6x^2 y^2) \\right] \\\\[10pt]\n&= 36xy^2 \\cos(2x^2 y^3) - 72x^3 y^5 \\sin(2x^2 y^3) \\\\\n&= 36xy^2 \\cos(2x^2 y^3) - 72x^3 y^5 \\sin(2x^2 y^3)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch5_35",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\sqrt{5x^2 + 5y^2}$. Find the second-order partial derivative $f_{xx}$.",
    "answer": "\\frac{50y^2}{(5x^2 + 5y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= \\frac{1}{2} 2(5x^2 + 5y^2)^{-\\frac{1}{2}} (\\frac{\\partial}{\\partial x}(5x^2 + 5y^2)) \\\\[10pt]\n&= \\frac{1}{2} 2(5x^2 + 5y^2)^{-\\frac{1}{2}} (10x) = \\frac{10x}{\\sqrt{5x^2 + 5y^2}} \\\\[10pt]\nf_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{10x}{\\sqrt{5x^2 + 5y^2}} \\right) \\\\[10pt]\n&= \\frac{10\\sqrt{5x^2 + 5y^2} - 10x \\left( \\frac{5x}{\\sqrt{5x^2 + 5y^2}} \\right)}{5x^2 + 5y^2} \\\\[10pt]\n&= \\frac{\\frac{10(5x^2 + 5y^2) - 50x^2}{\\sqrt{5x^2 + 5y^2}}}{5x^2 + 5y^2} \\\\[10pt]\n&= \\frac{50x^2 + 50y^2 - 50x^2}{(5x^2 + 5y^2)^{\\frac{3}{2}}} \\\\[10pt]\n&= \\frac{50y^2}{(5x^2 + 5y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch6_35",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 8 \\arcsin(3xy)$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "\\frac{24}{(1 - 9x^2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= 8 \\frac{1}{\\sqrt{1 - (3xy)^2}} (3y) = \\frac{24y}{\\sqrt{1 - 9x^2y^2}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 24y (1 - 9x^2y^2)^{-\\frac{1}{2}} \\right] \\\\[10pt]\n&= 24 \\left[ 1 \\cdot (1 - 9x^2y^2)^{-\\frac{1}{2}} + y \\left(-\\frac{1}{2}\\right)(1 - 9x^2y^2)^{-\\frac{3}{2}} (-18x^2y) \\right] \\\\[10pt]\n&= 24 \\left[ \\frac{1}{\\sqrt{1 - 9x^2y^2}} + \\frac{9x^2y^2}{(1 - 9x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= 24 \\left[ \\frac{(1 - 9x^2y^2) + 9x^2y^2}{(1 - 9x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= \\frac{24 (1)}{(1 - 9x^2y^2)^{\\frac{3}{2}}} = \\frac{24}{(1 - 9x^2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch1_36",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 y^{7} e^{\\frac{3x}{y}}$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "9y^{4} e^{\\frac{3x}{y}} (6y - 3x)",
    "steps": "\\begin{aligned}\nf_x &= \\frac{\\partial}{\\partial x} \\left( 3 y^{7} e^{\\frac{3x}{y}} \\right) = 3 y^{7} e^{\\frac{3x}{y}} \\left(\\frac{3}{y}\\right) = 9 y^{6} e^{\\frac{3x}{y}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 9 y^{6} e^{\\frac{3x}{y}} \\right) \\\\[10pt]\n&= 9 \\left[ (6)y^{5} e^{\\frac{3x}{y}} + y^{6} e^{\\frac{3x}{y}} \\left(-\\frac{3x}{y^2}\\right) \\right] \\\\[10pt]\n&= 9 y^{4} e^{\\frac{3x}{y}} \\left( 6y - 3x \\right) \\\\\n&= 9y^{4} e^{\\frac{3x}{y}} (6y - 3x)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch2_36",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 \\arctan\\left(\\frac{2x}{7y}\\right)$. Find $f_{xy}$.",
    "answer": "\\frac{70(4x^2 - 49y^2)}{(4x^2 + 49y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 5 \\frac{1}{1 + \\left(\\frac{2x}{7y}\\right)^2} \\cdot \\frac{2}{7y} = \\frac{5 \\cdot 49y^2}{4x^2 + 49y^2} \\cdot \\frac{2}{7y} = \\frac{70y}{4x^2 + 49y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( \\frac{70y}{4x^2 + 49y^2} \\right) \\\\[10pt]\n&= \\frac{70(4x^2 + 49y^2) - (70y)(2 \\cdot 49y)}{(4x^2 + 49y^2)^2} \\\\[10pt]\n&= \\frac{70(4x^2 + 49y^2) - 6860y^2}{(4x^2 + 49y^2)^2} \\\\[10pt]\n&= \\frac{70(4x^2 - 49y^2)}{(4x^2 + 49y^2)^2} \\\\\n&= \\frac{70(4x^2 - 49y^2)}{(4x^2 + 49y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch3_36",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 \\ln(5x^2 + 2y^2)$. Find the mixed second-order partial derivative $f_{xy}$.",
    "answer": "-\\frac{160xy}{(5x^2 + 2y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 4 \\frac{1}{5x^2 + 2y^2} \\cdot (10x) = \\frac{40x}{5x^2 + 2y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 40x(5x^2 + 2y^2)^{-1} \\right] \\\\[10pt]\n&= 40x (-1)(5x^2 + 2y^2)^{-2} (4y) \\\\[10pt]\n&= -\\frac{160xy}{(5x^2 + 2y^2)^2} \\\\\n&= -\\frac{160xy}{(5x^2 + 2y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch4_36",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 \\sin(3x^2 y^3)$. Find $f_{xy}$.",
    "answer": "90xy^2 \\cos(3x^2 y^3) - 270x^3 y^5 \\sin(3x^2 y^3)",
    "steps": "\\begin{aligned}\nf_x &= 5 \\cos(3x^2 y^3) \\cdot (6xy^3) = 30xy^3 \\cos(3x^2 y^3) \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 30xy^3 \\cos(3x^2 y^3) \\right) \\\\[10pt]\n&= 30x \\left[ 3y^2 \\cos(3x^2 y^3) + y^3 (-\\sin(3x^2 y^3)) (\\frac{\\partial}{\\partial y}(3x^2 y^3)) \\right] \\\\[10pt]\n&= 30x \\left[ 3y^2 \\cos(3x^2 y^3) - y^3 \\sin(3x^2 y^3) (9x^2 y^2) \\right] \\\\[10pt]\n&= 90xy^2 \\cos(3x^2 y^3) - 270x^3 y^5 \\sin(3x^2 y^3) \\\\\n&= 90xy^2 \\cos(3x^2 y^3) - 270x^3 y^5 \\sin(3x^2 y^3)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch5_36",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\sqrt{6x^2 + 2y^2}$. Find the second-order partial derivative $f_{xx}$.",
    "answer": "\\frac{24y^2}{(6x^2 + 2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= \\frac{1}{2} 2(6x^2 + 2y^2)^{-\\frac{1}{2}} (\\frac{\\partial}{\\partial x}(6x^2 + 2y^2)) \\\\[10pt]\n&= \\frac{1}{2} 2(6x^2 + 2y^2)^{-\\frac{1}{2}} (12x) = \\frac{12x}{\\sqrt{6x^2 + 2y^2}} \\\\[10pt]\nf_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{12x}{\\sqrt{6x^2 + 2y^2}} \\right) \\\\[10pt]\n&= \\frac{12\\sqrt{6x^2 + 2y^2} - 12x \\left( \\frac{6x}{\\sqrt{6x^2 + 2y^2}} \\right)}{6x^2 + 2y^2} \\\\[10pt]\n&= \\frac{\\frac{12(6x^2 + 2y^2) - 72x^2}{\\sqrt{6x^2 + 2y^2}}}{6x^2 + 2y^2} \\\\[10pt]\n&= \\frac{72x^2 + 24y^2 - 72x^2}{(6x^2 + 2y^2)^{\\frac{3}{2}}} \\\\[10pt]\n&= \\frac{24y^2}{(6x^2 + 2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch6_36",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 \\arcsin(4xy)$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "\\frac{16}{(1 - 16x^2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= 4 \\frac{1}{\\sqrt{1 - (4xy)^2}} (4y) = \\frac{16y}{\\sqrt{1 - 16x^2y^2}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 16y (1 - 16x^2y^2)^{-\\frac{1}{2}} \\right] \\\\[10pt]\n&= 16 \\left[ 1 \\cdot (1 - 16x^2y^2)^{-\\frac{1}{2}} + y \\left(-\\frac{1}{2}\\right)(1 - 16x^2y^2)^{-\\frac{3}{2}} (-32x^2y) \\right] \\\\[10pt]\n&= 16 \\left[ \\frac{1}{\\sqrt{1 - 16x^2y^2}} + \\frac{16x^2y^2}{(1 - 16x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= 16 \\left[ \\frac{(1 - 16x^2y^2) + 16x^2y^2}{(1 - 16x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= \\frac{16 (1)}{(1 - 16x^2y^2)^{\\frac{3}{2}}} = \\frac{16}{(1 - 16x^2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch1_37",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 y^{6} e^{\\frac{4x}{y}}$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "12y^{3} e^{\\frac{4x}{y}} (5y - 4x)",
    "steps": "\\begin{aligned}\nf_x &= \\frac{\\partial}{\\partial x} \\left( 3 y^{6} e^{\\frac{4x}{y}} \\right) = 3 y^{6} e^{\\frac{4x}{y}} \\left(\\frac{4}{y}\\right) = 12 y^{5} e^{\\frac{4x}{y}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 12 y^{5} e^{\\frac{4x}{y}} \\right) \\\\[10pt]\n&= 12 \\left[ (5)y^{4} e^{\\frac{4x}{y}} + y^{5} e^{\\frac{4x}{y}} \\left(-\\frac{4x}{y^2}\\right) \\right] \\\\[10pt]\n&= 12 y^{3} e^{\\frac{4x}{y}} \\left( 5y - 4x \\right) \\\\\n&= 12y^{3} e^{\\frac{4x}{y}} (5y - 4x)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch2_37",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 7 \\arctan\\left(\\frac{3x}{5y}\\right)$. Find $f_{xy}$.",
    "answer": "\\frac{105(9x^2 - 25y^2)}{(9x^2 + 25y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 7 \\frac{1}{1 + \\left(\\frac{3x}{5y}\\right)^2} \\cdot \\frac{3}{5y} = \\frac{7 \\cdot 25y^2}{9x^2 + 25y^2} \\cdot \\frac{3}{5y} = \\frac{105y}{9x^2 + 25y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( \\frac{105y}{9x^2 + 25y^2} \\right) \\\\[10pt]\n&= \\frac{105(9x^2 + 25y^2) - (105y)(2 \\cdot 25y)}{(9x^2 + 25y^2)^2} \\\\[10pt]\n&= \\frac{105(9x^2 + 25y^2) - 5250y^2}{(9x^2 + 25y^2)^2} \\\\[10pt]\n&= \\frac{105(9x^2 - 25y^2)}{(9x^2 + 25y^2)^2} \\\\\n&= \\frac{105(9x^2 - 25y^2)}{(9x^2 + 25y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch3_37",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\ln(2x^2 + 3y^2)$. Find the mixed second-order partial derivative $f_{xy}$.",
    "answer": "-\\frac{72xy}{(2x^2 + 3y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 3 \\frac{1}{2x^2 + 3y^2} \\cdot (4x) = \\frac{12x}{2x^2 + 3y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 12x(2x^2 + 3y^2)^{-1} \\right] \\\\[10pt]\n&= 12x (-1)(2x^2 + 3y^2)^{-2} (6y) \\\\[10pt]\n&= -\\frac{72xy}{(2x^2 + 3y^2)^2} \\\\\n&= -\\frac{72xy}{(2x^2 + 3y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch4_37",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\sin(2x^2 y^3)$. Find $f_{xy}$.",
    "answer": "24xy^2 \\cos(2x^2 y^3) - 48x^3 y^5 \\sin(2x^2 y^3)",
    "steps": "\\begin{aligned}\nf_x &= 2 \\cos(2x^2 y^3) \\cdot (4xy^3) = 8xy^3 \\cos(2x^2 y^3) \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 8xy^3 \\cos(2x^2 y^3) \\right) \\\\[10pt]\n&= 8x \\left[ 3y^2 \\cos(2x^2 y^3) + y^3 (-\\sin(2x^2 y^3)) (\\frac{\\partial}{\\partial y}(2x^2 y^3)) \\right] \\\\[10pt]\n&= 8x \\left[ 3y^2 \\cos(2x^2 y^3) - y^3 \\sin(2x^2 y^3) (6x^2 y^2) \\right] \\\\[10pt]\n&= 24xy^2 \\cos(2x^2 y^3) - 48x^3 y^5 \\sin(2x^2 y^3) \\\\\n&= 24xy^2 \\cos(2x^2 y^3) - 48x^3 y^5 \\sin(2x^2 y^3)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch5_37",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\sqrt{6x^2 + 5y^2}$. Find the second-order partial derivative $f_{xx}$.",
    "answer": "\\frac{60y^2}{(6x^2 + 5y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= \\frac{1}{2} 2(6x^2 + 5y^2)^{-\\frac{1}{2}} (\\frac{\\partial}{\\partial x}(6x^2 + 5y^2)) \\\\[10pt]\n&= \\frac{1}{2} 2(6x^2 + 5y^2)^{-\\frac{1}{2}} (12x) = \\frac{12x}{\\sqrt{6x^2 + 5y^2}} \\\\[10pt]\nf_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{12x}{\\sqrt{6x^2 + 5y^2}} \\right) \\\\[10pt]\n&= \\frac{12\\sqrt{6x^2 + 5y^2} - 12x \\left( \\frac{6x}{\\sqrt{6x^2 + 5y^2}} \\right)}{6x^2 + 5y^2} \\\\[10pt]\n&= \\frac{\\frac{12(6x^2 + 5y^2) - 72x^2}{\\sqrt{6x^2 + 5y^2}}}{6x^2 + 5y^2} \\\\[10pt]\n&= \\frac{72x^2 + 60y^2 - 72x^2}{(6x^2 + 5y^2)^{\\frac{3}{2}}} \\\\[10pt]\n&= \\frac{60y^2}{(6x^2 + 5y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch6_37",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 \\arcsin(5xy)$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "\\frac{25}{(1 - 25x^2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= 5 \\frac{1}{\\sqrt{1 - (5xy)^2}} (5y) = \\frac{25y}{\\sqrt{1 - 25x^2y^2}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 25y (1 - 25x^2y^2)^{-\\frac{1}{2}} \\right] \\\\[10pt]\n&= 25 \\left[ 1 \\cdot (1 - 25x^2y^2)^{-\\frac{1}{2}} + y \\left(-\\frac{1}{2}\\right)(1 - 25x^2y^2)^{-\\frac{3}{2}} (-50x^2y) \\right] \\\\[10pt]\n&= 25 \\left[ \\frac{1}{\\sqrt{1 - 25x^2y^2}} + \\frac{25x^2y^2}{(1 - 25x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= 25 \\left[ \\frac{(1 - 25x^2y^2) + 25x^2y^2}{(1 - 25x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= \\frac{25 (1)}{(1 - 25x^2y^2)^{\\frac{3}{2}}} = \\frac{25}{(1 - 25x^2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch1_38",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 y^{5} e^{\\frac{4x}{y}}$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "16y^{2} e^{\\frac{4x}{y}} (4y - 4x)",
    "steps": "\\begin{aligned}\nf_x &= \\frac{\\partial}{\\partial x} \\left( 4 y^{5} e^{\\frac{4x}{y}} \\right) = 4 y^{5} e^{\\frac{4x}{y}} \\left(\\frac{4}{y}\\right) = 16 y^{4} e^{\\frac{4x}{y}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 16 y^{4} e^{\\frac{4x}{y}} \\right) \\\\[10pt]\n&= 16 \\left[ (4)y^{3} e^{\\frac{4x}{y}} + y^{4} e^{\\frac{4x}{y}} \\left(-\\frac{4x}{y^2}\\right) \\right] \\\\[10pt]\n&= 16 y^{2} e^{\\frac{4x}{y}} \\left( 4y - 4x \\right) \\\\\n&= 16y^{2} e^{\\frac{4x}{y}} (4y - 4x)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch2_38",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\arctan\\left(\\frac{3x}{7y}\\right)$. Find $f_{xy}$.",
    "answer": "\\frac{42(9x^2 - 49y^2)}{(9x^2 + 49y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 2 \\frac{1}{1 + \\left(\\frac{3x}{7y}\\right)^2} \\cdot \\frac{3}{7y} = \\frac{2 \\cdot 49y^2}{9x^2 + 49y^2} \\cdot \\frac{3}{7y} = \\frac{42y}{9x^2 + 49y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( \\frac{42y}{9x^2 + 49y^2} \\right) \\\\[10pt]\n&= \\frac{42(9x^2 + 49y^2) - (42y)(2 \\cdot 49y)}{(9x^2 + 49y^2)^2} \\\\[10pt]\n&= \\frac{42(9x^2 + 49y^2) - 4116y^2}{(9x^2 + 49y^2)^2} \\\\[10pt]\n&= \\frac{42(9x^2 - 49y^2)}{(9x^2 + 49y^2)^2} \\\\\n&= \\frac{42(9x^2 - 49y^2)}{(9x^2 + 49y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch3_38",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\ln(2x^2 + 5y^2)$. Find the mixed second-order partial derivative $f_{xy}$.",
    "answer": "-\\frac{120xy}{(2x^2 + 5y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 3 \\frac{1}{2x^2 + 5y^2} \\cdot (4x) = \\frac{12x}{2x^2 + 5y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 12x(2x^2 + 5y^2)^{-1} \\right] \\\\[10pt]\n&= 12x (-1)(2x^2 + 5y^2)^{-2} (10y) \\\\[10pt]\n&= -\\frac{120xy}{(2x^2 + 5y^2)^2} \\\\\n&= -\\frac{120xy}{(2x^2 + 5y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch4_38",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\sin(2x^2 y^3)$. Find $f_{xy}$.",
    "answer": "24xy^2 \\cos(2x^2 y^3) - 48x^3 y^5 \\sin(2x^2 y^3)",
    "steps": "\\begin{aligned}\nf_x &= 2 \\cos(2x^2 y^3) \\cdot (4xy^3) = 8xy^3 \\cos(2x^2 y^3) \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 8xy^3 \\cos(2x^2 y^3) \\right) \\\\[10pt]\n&= 8x \\left[ 3y^2 \\cos(2x^2 y^3) + y^3 (-\\sin(2x^2 y^3)) (\\frac{\\partial}{\\partial y}(2x^2 y^3)) \\right] \\\\[10pt]\n&= 8x \\left[ 3y^2 \\cos(2x^2 y^3) - y^3 \\sin(2x^2 y^3) (6x^2 y^2) \\right] \\\\[10pt]\n&= 24xy^2 \\cos(2x^2 y^3) - 48x^3 y^5 \\sin(2x^2 y^3) \\\\\n&= 24xy^2 \\cos(2x^2 y^3) - 48x^3 y^5 \\sin(2x^2 y^3)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch5_38",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 \\sqrt{4x^2 + 6y^2}$. Find the second-order partial derivative $f_{xx}$.",
    "answer": "\\frac{96y^2}{(4x^2 + 6y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= \\frac{1}{2} 4(4x^2 + 6y^2)^{-\\frac{1}{2}} (\\frac{\\partial}{\\partial x}(4x^2 + 6y^2)) \\\\[10pt]\n&= \\frac{1}{2} 4(4x^2 + 6y^2)^{-\\frac{1}{2}} (8x) = \\frac{16x}{\\sqrt{4x^2 + 6y^2}} \\\\[10pt]\nf_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{16x}{\\sqrt{4x^2 + 6y^2}} \\right) \\\\[10pt]\n&= \\frac{16\\sqrt{4x^2 + 6y^2} - 16x \\left( \\frac{4x}{\\sqrt{4x^2 + 6y^2}} \\right)}{4x^2 + 6y^2} \\\\[10pt]\n&= \\frac{\\frac{16(4x^2 + 6y^2) - 64x^2}{\\sqrt{4x^2 + 6y^2}}}{4x^2 + 6y^2} \\\\[10pt]\n&= \\frac{64x^2 + 96y^2 - 64x^2}{(4x^2 + 6y^2)^{\\frac{3}{2}}} \\\\[10pt]\n&= \\frac{96y^2}{(4x^2 + 6y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch6_38",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\arcsin(6xy)$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "\\frac{12}{(1 - 36x^2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= 2 \\frac{1}{\\sqrt{1 - (6xy)^2}} (6y) = \\frac{12y}{\\sqrt{1 - 36x^2y^2}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 12y (1 - 36x^2y^2)^{-\\frac{1}{2}} \\right] \\\\[10pt]\n&= 12 \\left[ 1 \\cdot (1 - 36x^2y^2)^{-\\frac{1}{2}} + y \\left(-\\frac{1}{2}\\right)(1 - 36x^2y^2)^{-\\frac{3}{2}} (-72x^2y) \\right] \\\\[10pt]\n&= 12 \\left[ \\frac{1}{\\sqrt{1 - 36x^2y^2}} + \\frac{36x^2y^2}{(1 - 36x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= 12 \\left[ \\frac{(1 - 36x^2y^2) + 36x^2y^2}{(1 - 36x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= \\frac{12 (1)}{(1 - 36x^2y^2)^{\\frac{3}{2}}} = \\frac{12}{(1 - 36x^2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch1_39",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 y^{5} e^{\\frac{2x}{y}}$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "8y^{2} e^{\\frac{2x}{y}} (4y - 2x)",
    "steps": "\\begin{aligned}\nf_x &= \\frac{\\partial}{\\partial x} \\left( 4 y^{5} e^{\\frac{2x}{y}} \\right) = 4 y^{5} e^{\\frac{2x}{y}} \\left(\\frac{2}{y}\\right) = 8 y^{4} e^{\\frac{2x}{y}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 8 y^{4} e^{\\frac{2x}{y}} \\right) \\\\[10pt]\n&= 8 \\left[ (4)y^{3} e^{\\frac{2x}{y}} + y^{4} e^{\\frac{2x}{y}} \\left(-\\frac{2x}{y^2}\\right) \\right] \\\\[10pt]\n&= 8 y^{2} e^{\\frac{2x}{y}} \\left( 4y - 2x \\right) \\\\\n&= 8y^{2} e^{\\frac{2x}{y}} (4y - 2x)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch2_39",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 6 \\arctan\\left(\\frac{7x}{7y}\\right)$. Find $f_{xy}$.",
    "answer": "\\frac{294(49x^2 - 49y^2)}{(49x^2 + 49y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 6 \\frac{1}{1 + \\left(\\frac{7x}{7y}\\right)^2} \\cdot \\frac{7}{7y} = \\frac{6 \\cdot 49y^2}{49x^2 + 49y^2} \\cdot \\frac{7}{7y} = \\frac{294y}{49x^2 + 49y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( \\frac{294y}{49x^2 + 49y^2} \\right) \\\\[10pt]\n&= \\frac{294(49x^2 + 49y^2) - (294y)(2 \\cdot 49y)}{(49x^2 + 49y^2)^2} \\\\[10pt]\n&= \\frac{294(49x^2 + 49y^2) - 28812y^2}{(49x^2 + 49y^2)^2} \\\\[10pt]\n&= \\frac{294(49x^2 - 49y^2)}{(49x^2 + 49y^2)^2} \\\\\n&= \\frac{294(49x^2 - 49y^2)}{(49x^2 + 49y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch3_39",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 \\ln(3x^2 + 3y^2)$. Find the mixed second-order partial derivative $f_{xy}$.",
    "answer": "-\\frac{180xy}{(3x^2 + 3y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 5 \\frac{1}{3x^2 + 3y^2} \\cdot (6x) = \\frac{30x}{3x^2 + 3y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 30x(3x^2 + 3y^2)^{-1} \\right] \\\\[10pt]\n&= 30x (-1)(3x^2 + 3y^2)^{-2} (6y) \\\\[10pt]\n&= -\\frac{180xy}{(3x^2 + 3y^2)^2} \\\\\n&= -\\frac{180xy}{(3x^2 + 3y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch4_39",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\sin(4x^2 y^3)$. Find $f_{xy}$.",
    "answer": "48xy^2 \\cos(4x^2 y^3) - 192x^3 y^5 \\sin(4x^2 y^3)",
    "steps": "\\begin{aligned}\nf_x &= 2 \\cos(4x^2 y^3) \\cdot (8xy^3) = 16xy^3 \\cos(4x^2 y^3) \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 16xy^3 \\cos(4x^2 y^3) \\right) \\\\[10pt]\n&= 16x \\left[ 3y^2 \\cos(4x^2 y^3) + y^3 (-\\sin(4x^2 y^3)) (\\frac{\\partial}{\\partial y}(4x^2 y^3)) \\right] \\\\[10pt]\n&= 16x \\left[ 3y^2 \\cos(4x^2 y^3) - y^3 \\sin(4x^2 y^3) (12x^2 y^2) \\right] \\\\[10pt]\n&= 48xy^2 \\cos(4x^2 y^3) - 192x^3 y^5 \\sin(4x^2 y^3) \\\\\n&= 48xy^2 \\cos(4x^2 y^3) - 192x^3 y^5 \\sin(4x^2 y^3)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch5_39",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\sqrt{2x^2 + 3y^2}$. Find the second-order partial derivative $f_{xx}$.",
    "answer": "\\frac{18y^2}{(2x^2 + 3y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= \\frac{1}{2} 3(2x^2 + 3y^2)^{-\\frac{1}{2}} (\\frac{\\partial}{\\partial x}(2x^2 + 3y^2)) \\\\[10pt]\n&= \\frac{1}{2} 3(2x^2 + 3y^2)^{-\\frac{1}{2}} (4x) = \\frac{6x}{\\sqrt{2x^2 + 3y^2}} \\\\[10pt]\nf_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{6x}{\\sqrt{2x^2 + 3y^2}} \\right) \\\\[10pt]\n&= \\frac{6\\sqrt{2x^2 + 3y^2} - 6x \\left( \\frac{2x}{\\sqrt{2x^2 + 3y^2}} \\right)}{2x^2 + 3y^2} \\\\[10pt]\n&= \\frac{\\frac{6(2x^2 + 3y^2) - 12x^2}{\\sqrt{2x^2 + 3y^2}}}{2x^2 + 3y^2} \\\\[10pt]\n&= \\frac{12x^2 + 18y^2 - 12x^2}{(2x^2 + 3y^2)^{\\frac{3}{2}}} \\\\[10pt]\n&= \\frac{18y^2}{(2x^2 + 3y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch6_39",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\arcsin(5xy)$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "\\frac{10}{(1 - 25x^2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= 2 \\frac{1}{\\sqrt{1 - (5xy)^2}} (5y) = \\frac{10y}{\\sqrt{1 - 25x^2y^2}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 10y (1 - 25x^2y^2)^{-\\frac{1}{2}} \\right] \\\\[10pt]\n&= 10 \\left[ 1 \\cdot (1 - 25x^2y^2)^{-\\frac{1}{2}} + y \\left(-\\frac{1}{2}\\right)(1 - 25x^2y^2)^{-\\frac{3}{2}} (-50x^2y) \\right] \\\\[10pt]\n&= 10 \\left[ \\frac{1}{\\sqrt{1 - 25x^2y^2}} + \\frac{25x^2y^2}{(1 - 25x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= 10 \\left[ \\frac{(1 - 25x^2y^2) + 25x^2y^2}{(1 - 25x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= \\frac{10 (1)}{(1 - 25x^2y^2)^{\\frac{3}{2}}} = \\frac{10}{(1 - 25x^2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch1_40",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 y^{6} e^{\\frac{4x}{y}}$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "16y^{3} e^{\\frac{4x}{y}} (5y - 4x)",
    "steps": "\\begin{aligned}\nf_x &= \\frac{\\partial}{\\partial x} \\left( 4 y^{6} e^{\\frac{4x}{y}} \\right) = 4 y^{6} e^{\\frac{4x}{y}} \\left(\\frac{4}{y}\\right) = 16 y^{5} e^{\\frac{4x}{y}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 16 y^{5} e^{\\frac{4x}{y}} \\right) \\\\[10pt]\n&= 16 \\left[ (5)y^{4} e^{\\frac{4x}{y}} + y^{5} e^{\\frac{4x}{y}} \\left(-\\frac{4x}{y^2}\\right) \\right] \\\\[10pt]\n&= 16 y^{3} e^{\\frac{4x}{y}} \\left( 5y - 4x \\right) \\\\\n&= 16y^{3} e^{\\frac{4x}{y}} (5y - 4x)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch2_40",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 6 \\arctan\\left(\\frac{7x}{7y}\\right)$. Find $f_{xy}$.",
    "answer": "\\frac{294(49x^2 - 49y^2)}{(49x^2 + 49y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 6 \\frac{1}{1 + \\left(\\frac{7x}{7y}\\right)^2} \\cdot \\frac{7}{7y} = \\frac{6 \\cdot 49y^2}{49x^2 + 49y^2} \\cdot \\frac{7}{7y} = \\frac{294y}{49x^2 + 49y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( \\frac{294y}{49x^2 + 49y^2} \\right) \\\\[10pt]\n&= \\frac{294(49x^2 + 49y^2) - (294y)(2 \\cdot 49y)}{(49x^2 + 49y^2)^2} \\\\[10pt]\n&= \\frac{294(49x^2 + 49y^2) - 28812y^2}{(49x^2 + 49y^2)^2} \\\\[10pt]\n&= \\frac{294(49x^2 - 49y^2)}{(49x^2 + 49y^2)^2} \\\\\n&= \\frac{294(49x^2 - 49y^2)}{(49x^2 + 49y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch3_40",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\ln(2x^2 + 3y^2)$. Find the mixed second-order partial derivative $f_{xy}$.",
    "answer": "-\\frac{72xy}{(2x^2 + 3y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 3 \\frac{1}{2x^2 + 3y^2} \\cdot (4x) = \\frac{12x}{2x^2 + 3y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 12x(2x^2 + 3y^2)^{-1} \\right] \\\\[10pt]\n&= 12x (-1)(2x^2 + 3y^2)^{-2} (6y) \\\\[10pt]\n&= -\\frac{72xy}{(2x^2 + 3y^2)^2} \\\\\n&= -\\frac{72xy}{(2x^2 + 3y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch4_40",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\sin(4x^2 y^3)$. Find $f_{xy}$.",
    "answer": "48xy^2 \\cos(4x^2 y^3) - 192x^3 y^5 \\sin(4x^2 y^3)",
    "steps": "\\begin{aligned}\nf_x &= 2 \\cos(4x^2 y^3) \\cdot (8xy^3) = 16xy^3 \\cos(4x^2 y^3) \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 16xy^3 \\cos(4x^2 y^3) \\right) \\\\[10pt]\n&= 16x \\left[ 3y^2 \\cos(4x^2 y^3) + y^3 (-\\sin(4x^2 y^3)) (\\frac{\\partial}{\\partial y}(4x^2 y^3)) \\right] \\\\[10pt]\n&= 16x \\left[ 3y^2 \\cos(4x^2 y^3) - y^3 \\sin(4x^2 y^3) (12x^2 y^2) \\right] \\\\[10pt]\n&= 48xy^2 \\cos(4x^2 y^3) - 192x^3 y^5 \\sin(4x^2 y^3) \\\\\n&= 48xy^2 \\cos(4x^2 y^3) - 192x^3 y^5 \\sin(4x^2 y^3)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch5_40",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 7 \\sqrt{3x^2 + 6y^2}$. Find the second-order partial derivative $f_{xx}$.",
    "answer": "\\frac{126y^2}{(3x^2 + 6y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= \\frac{1}{2} 7(3x^2 + 6y^2)^{-\\frac{1}{2}} (\\frac{\\partial}{\\partial x}(3x^2 + 6y^2)) \\\\[10pt]\n&= \\frac{1}{2} 7(3x^2 + 6y^2)^{-\\frac{1}{2}} (6x) = \\frac{21x}{\\sqrt{3x^2 + 6y^2}} \\\\[10pt]\nf_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{21x}{\\sqrt{3x^2 + 6y^2}} \\right) \\\\[10pt]\n&= \\frac{21\\sqrt{3x^2 + 6y^2} - 21x \\left( \\frac{3x}{\\sqrt{3x^2 + 6y^2}} \\right)}{3x^2 + 6y^2} \\\\[10pt]\n&= \\frac{\\frac{21(3x^2 + 6y^2) - 63x^2}{\\sqrt{3x^2 + 6y^2}}}{3x^2 + 6y^2} \\\\[10pt]\n&= \\frac{63x^2 + 126y^2 - 63x^2}{(3x^2 + 6y^2)^{\\frac{3}{2}}} \\\\[10pt]\n&= \\frac{126y^2}{(3x^2 + 6y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch6_40",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\arcsin(3xy)$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "\\frac{9}{(1 - 9x^2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= 3 \\frac{1}{\\sqrt{1 - (3xy)^2}} (3y) = \\frac{9y}{\\sqrt{1 - 9x^2y^2}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 9y (1 - 9x^2y^2)^{-\\frac{1}{2}} \\right] \\\\[10pt]\n&= 9 \\left[ 1 \\cdot (1 - 9x^2y^2)^{-\\frac{1}{2}} + y \\left(-\\frac{1}{2}\\right)(1 - 9x^2y^2)^{-\\frac{3}{2}} (-18x^2y) \\right] \\\\[10pt]\n&= 9 \\left[ \\frac{1}{\\sqrt{1 - 9x^2y^2}} + \\frac{9x^2y^2}{(1 - 9x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= 9 \\left[ \\frac{(1 - 9x^2y^2) + 9x^2y^2}{(1 - 9x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= \\frac{9 (1)}{(1 - 9x^2y^2)^{\\frac{3}{2}}} = \\frac{9}{(1 - 9x^2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch1_41",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 y^{5} e^{\\frac{5x}{y}}$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "25y^{2} e^{\\frac{5x}{y}} (4y - 5x)",
    "steps": "\\begin{aligned}\nf_x &= \\frac{\\partial}{\\partial x} \\left( 5 y^{5} e^{\\frac{5x}{y}} \\right) = 5 y^{5} e^{\\frac{5x}{y}} \\left(\\frac{5}{y}\\right) = 25 y^{4} e^{\\frac{5x}{y}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 25 y^{4} e^{\\frac{5x}{y}} \\right) \\\\[10pt]\n&= 25 \\left[ (4)y^{3} e^{\\frac{5x}{y}} + y^{4} e^{\\frac{5x}{y}} \\left(-\\frac{5x}{y^2}\\right) \\right] \\\\[10pt]\n&= 25 y^{2} e^{\\frac{5x}{y}} \\left( 4y - 5x \\right) \\\\\n&= 25y^{2} e^{\\frac{5x}{y}} (4y - 5x)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch2_41",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\arctan\\left(\\frac{5x}{3y}\\right)$. Find $f_{xy}$.",
    "answer": "\\frac{45(25x^2 - 9y^2)}{(25x^2 + 9y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 3 \\frac{1}{1 + \\left(\\frac{5x}{3y}\\right)^2} \\cdot \\frac{5}{3y} = \\frac{3 \\cdot 9y^2}{25x^2 + 9y^2} \\cdot \\frac{5}{3y} = \\frac{45y}{25x^2 + 9y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( \\frac{45y}{25x^2 + 9y^2} \\right) \\\\[10pt]\n&= \\frac{45(25x^2 + 9y^2) - (45y)(2 \\cdot 9y)}{(25x^2 + 9y^2)^2} \\\\[10pt]\n&= \\frac{45(25x^2 + 9y^2) - 810y^2}{(25x^2 + 9y^2)^2} \\\\[10pt]\n&= \\frac{45(25x^2 - 9y^2)}{(25x^2 + 9y^2)^2} \\\\\n&= \\frac{45(25x^2 - 9y^2)}{(25x^2 + 9y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch3_41",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 \\ln(3x^2 + 2y^2)$. Find the mixed second-order partial derivative $f_{xy}$.",
    "answer": "-\\frac{96xy}{(3x^2 + 2y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 4 \\frac{1}{3x^2 + 2y^2} \\cdot (6x) = \\frac{24x}{3x^2 + 2y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 24x(3x^2 + 2y^2)^{-1} \\right] \\\\[10pt]\n&= 24x (-1)(3x^2 + 2y^2)^{-2} (4y) \\\\[10pt]\n&= -\\frac{96xy}{(3x^2 + 2y^2)^2} \\\\\n&= -\\frac{96xy}{(3x^2 + 2y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch4_41",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\sin(3x^2 y^3)$. Find $f_{xy}$.",
    "answer": "36xy^2 \\cos(3x^2 y^3) - 108x^3 y^5 \\sin(3x^2 y^3)",
    "steps": "\\begin{aligned}\nf_x &= 2 \\cos(3x^2 y^3) \\cdot (6xy^3) = 12xy^3 \\cos(3x^2 y^3) \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 12xy^3 \\cos(3x^2 y^3) \\right) \\\\[10pt]\n&= 12x \\left[ 3y^2 \\cos(3x^2 y^3) + y^3 (-\\sin(3x^2 y^3)) (\\frac{\\partial}{\\partial y}(3x^2 y^3)) \\right] \\\\[10pt]\n&= 12x \\left[ 3y^2 \\cos(3x^2 y^3) - y^3 \\sin(3x^2 y^3) (9x^2 y^2) \\right] \\\\[10pt]\n&= 36xy^2 \\cos(3x^2 y^3) - 108x^3 y^5 \\sin(3x^2 y^3) \\\\\n&= 36xy^2 \\cos(3x^2 y^3) - 108x^3 y^5 \\sin(3x^2 y^3)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch5_41",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\sqrt{3x^2 + 6y^2}$. Find the second-order partial derivative $f_{xx}$.",
    "answer": "\\frac{54y^2}{(3x^2 + 6y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= \\frac{1}{2} 3(3x^2 + 6y^2)^{-\\frac{1}{2}} (\\frac{\\partial}{\\partial x}(3x^2 + 6y^2)) \\\\[10pt]\n&= \\frac{1}{2} 3(3x^2 + 6y^2)^{-\\frac{1}{2}} (6x) = \\frac{9x}{\\sqrt{3x^2 + 6y^2}} \\\\[10pt]\nf_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{9x}{\\sqrt{3x^2 + 6y^2}} \\right) \\\\[10pt]\n&= \\frac{9\\sqrt{3x^2 + 6y^2} - 9x \\left( \\frac{3x}{\\sqrt{3x^2 + 6y^2}} \\right)}{3x^2 + 6y^2} \\\\[10pt]\n&= \\frac{\\frac{9(3x^2 + 6y^2) - 27x^2}{\\sqrt{3x^2 + 6y^2}}}{3x^2 + 6y^2} \\\\[10pt]\n&= \\frac{27x^2 + 54y^2 - 27x^2}{(3x^2 + 6y^2)^{\\frac{3}{2}}} \\\\[10pt]\n&= \\frac{54y^2}{(3x^2 + 6y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch6_41",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 8 \\arcsin(2xy)$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "\\frac{16}{(1 - 4x^2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= 8 \\frac{1}{\\sqrt{1 - (2xy)^2}} (2y) = \\frac{16y}{\\sqrt{1 - 4x^2y^2}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 16y (1 - 4x^2y^2)^{-\\frac{1}{2}} \\right] \\\\[10pt]\n&= 16 \\left[ 1 \\cdot (1 - 4x^2y^2)^{-\\frac{1}{2}} + y \\left(-\\frac{1}{2}\\right)(1 - 4x^2y^2)^{-\\frac{3}{2}} (-8x^2y) \\right] \\\\[10pt]\n&= 16 \\left[ \\frac{1}{\\sqrt{1 - 4x^2y^2}} + \\frac{4x^2y^2}{(1 - 4x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= 16 \\left[ \\frac{(1 - 4x^2y^2) + 4x^2y^2}{(1 - 4x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= \\frac{16 (1)}{(1 - 4x^2y^2)^{\\frac{3}{2}}} = \\frac{16}{(1 - 4x^2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch1_42",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 y^{5} e^{\\frac{5x}{y}}$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "10y^{2} e^{\\frac{5x}{y}} (4y - 5x)",
    "steps": "\\begin{aligned}\nf_x &= \\frac{\\partial}{\\partial x} \\left( 2 y^{5} e^{\\frac{5x}{y}} \\right) = 2 y^{5} e^{\\frac{5x}{y}} \\left(\\frac{5}{y}\\right) = 10 y^{4} e^{\\frac{5x}{y}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 10 y^{4} e^{\\frac{5x}{y}} \\right) \\\\[10pt]\n&= 10 \\left[ (4)y^{3} e^{\\frac{5x}{y}} + y^{4} e^{\\frac{5x}{y}} \\left(-\\frac{5x}{y^2}\\right) \\right] \\\\[10pt]\n&= 10 y^{2} e^{\\frac{5x}{y}} \\left( 4y - 5x \\right) \\\\\n&= 10y^{2} e^{\\frac{5x}{y}} (4y - 5x)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch2_42",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\arctan\\left(\\frac{3x}{7y}\\right)$. Find $f_{xy}$.",
    "answer": "\\frac{63(9x^2 - 49y^2)}{(9x^2 + 49y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 3 \\frac{1}{1 + \\left(\\frac{3x}{7y}\\right)^2} \\cdot \\frac{3}{7y} = \\frac{3 \\cdot 49y^2}{9x^2 + 49y^2} \\cdot \\frac{3}{7y} = \\frac{63y}{9x^2 + 49y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( \\frac{63y}{9x^2 + 49y^2} \\right) \\\\[10pt]\n&= \\frac{63(9x^2 + 49y^2) - (63y)(2 \\cdot 49y)}{(9x^2 + 49y^2)^2} \\\\[10pt]\n&= \\frac{63(9x^2 + 49y^2) - 6174y^2}{(9x^2 + 49y^2)^2} \\\\[10pt]\n&= \\frac{63(9x^2 - 49y^2)}{(9x^2 + 49y^2)^2} \\\\\n&= \\frac{63(9x^2 - 49y^2)}{(9x^2 + 49y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch3_42",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 \\ln(4x^2 + 5y^2)$. Find the mixed second-order partial derivative $f_{xy}$.",
    "answer": "-\\frac{320xy}{(4x^2 + 5y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 4 \\frac{1}{4x^2 + 5y^2} \\cdot (8x) = \\frac{32x}{4x^2 + 5y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 32x(4x^2 + 5y^2)^{-1} \\right] \\\\[10pt]\n&= 32x (-1)(4x^2 + 5y^2)^{-2} (10y) \\\\[10pt]\n&= -\\frac{320xy}{(4x^2 + 5y^2)^2} \\\\\n&= -\\frac{320xy}{(4x^2 + 5y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch4_42",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 \\sin(2x^2 y^3)$. Find $f_{xy}$.",
    "answer": "48xy^2 \\cos(2x^2 y^3) - 96x^3 y^5 \\sin(2x^2 y^3)",
    "steps": "\\begin{aligned}\nf_x &= 4 \\cos(2x^2 y^3) \\cdot (4xy^3) = 16xy^3 \\cos(2x^2 y^3) \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 16xy^3 \\cos(2x^2 y^3) \\right) \\\\[10pt]\n&= 16x \\left[ 3y^2 \\cos(2x^2 y^3) + y^3 (-\\sin(2x^2 y^3)) (\\frac{\\partial}{\\partial y}(2x^2 y^3)) \\right] \\\\[10pt]\n&= 16x \\left[ 3y^2 \\cos(2x^2 y^3) - y^3 \\sin(2x^2 y^3) (6x^2 y^2) \\right] \\\\[10pt]\n&= 48xy^2 \\cos(2x^2 y^3) - 96x^3 y^5 \\sin(2x^2 y^3) \\\\\n&= 48xy^2 \\cos(2x^2 y^3) - 96x^3 y^5 \\sin(2x^2 y^3)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch5_42",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\sqrt{6x^2 + 2y^2}$. Find the second-order partial derivative $f_{xx}$.",
    "answer": "\\frac{24y^2}{(6x^2 + 2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= \\frac{1}{2} 2(6x^2 + 2y^2)^{-\\frac{1}{2}} (\\frac{\\partial}{\\partial x}(6x^2 + 2y^2)) \\\\[10pt]\n&= \\frac{1}{2} 2(6x^2 + 2y^2)^{-\\frac{1}{2}} (12x) = \\frac{12x}{\\sqrt{6x^2 + 2y^2}} \\\\[10pt]\nf_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{12x}{\\sqrt{6x^2 + 2y^2}} \\right) \\\\[10pt]\n&= \\frac{12\\sqrt{6x^2 + 2y^2} - 12x \\left( \\frac{6x}{\\sqrt{6x^2 + 2y^2}} \\right)}{6x^2 + 2y^2} \\\\[10pt]\n&= \\frac{\\frac{12(6x^2 + 2y^2) - 72x^2}{\\sqrt{6x^2 + 2y^2}}}{6x^2 + 2y^2} \\\\[10pt]\n&= \\frac{72x^2 + 24y^2 - 72x^2}{(6x^2 + 2y^2)^{\\frac{3}{2}}} \\\\[10pt]\n&= \\frac{24y^2}{(6x^2 + 2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch6_42",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 \\arcsin(6xy)$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "\\frac{30}{(1 - 36x^2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= 5 \\frac{1}{\\sqrt{1 - (6xy)^2}} (6y) = \\frac{30y}{\\sqrt{1 - 36x^2y^2}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 30y (1 - 36x^2y^2)^{-\\frac{1}{2}} \\right] \\\\[10pt]\n&= 30 \\left[ 1 \\cdot (1 - 36x^2y^2)^{-\\frac{1}{2}} + y \\left(-\\frac{1}{2}\\right)(1 - 36x^2y^2)^{-\\frac{3}{2}} (-72x^2y) \\right] \\\\[10pt]\n&= 30 \\left[ \\frac{1}{\\sqrt{1 - 36x^2y^2}} + \\frac{36x^2y^2}{(1 - 36x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= 30 \\left[ \\frac{(1 - 36x^2y^2) + 36x^2y^2}{(1 - 36x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= \\frac{30 (1)}{(1 - 36x^2y^2)^{\\frac{3}{2}}} = \\frac{30}{(1 - 36x^2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch1_43",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 y^{7} e^{\\frac{2x}{y}}$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "6y^{4} e^{\\frac{2x}{y}} (6y - 2x)",
    "steps": "\\begin{aligned}\nf_x &= \\frac{\\partial}{\\partial x} \\left( 3 y^{7} e^{\\frac{2x}{y}} \\right) = 3 y^{7} e^{\\frac{2x}{y}} \\left(\\frac{2}{y}\\right) = 6 y^{6} e^{\\frac{2x}{y}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 6 y^{6} e^{\\frac{2x}{y}} \\right) \\\\[10pt]\n&= 6 \\left[ (6)y^{5} e^{\\frac{2x}{y}} + y^{6} e^{\\frac{2x}{y}} \\left(-\\frac{2x}{y^2}\\right) \\right] \\\\[10pt]\n&= 6 y^{4} e^{\\frac{2x}{y}} \\left( 6y - 2x \\right) \\\\\n&= 6y^{4} e^{\\frac{2x}{y}} (6y - 2x)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch2_43",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 6 \\arctan\\left(\\frac{3x}{5y}\\right)$. Find $f_{xy}$.",
    "answer": "\\frac{90(9x^2 - 25y^2)}{(9x^2 + 25y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 6 \\frac{1}{1 + \\left(\\frac{3x}{5y}\\right)^2} \\cdot \\frac{3}{5y} = \\frac{6 \\cdot 25y^2}{9x^2 + 25y^2} \\cdot \\frac{3}{5y} = \\frac{90y}{9x^2 + 25y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( \\frac{90y}{9x^2 + 25y^2} \\right) \\\\[10pt]\n&= \\frac{90(9x^2 + 25y^2) - (90y)(2 \\cdot 25y)}{(9x^2 + 25y^2)^2} \\\\[10pt]\n&= \\frac{90(9x^2 + 25y^2) - 4500y^2}{(9x^2 + 25y^2)^2} \\\\[10pt]\n&= \\frac{90(9x^2 - 25y^2)}{(9x^2 + 25y^2)^2} \\\\\n&= \\frac{90(9x^2 - 25y^2)}{(9x^2 + 25y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch3_43",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 \\ln(5x^2 + 5y^2)$. Find the mixed second-order partial derivative $f_{xy}$.",
    "answer": "-\\frac{500xy}{(5x^2 + 5y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 5 \\frac{1}{5x^2 + 5y^2} \\cdot (10x) = \\frac{50x}{5x^2 + 5y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 50x(5x^2 + 5y^2)^{-1} \\right] \\\\[10pt]\n&= 50x (-1)(5x^2 + 5y^2)^{-2} (10y) \\\\[10pt]\n&= -\\frac{500xy}{(5x^2 + 5y^2)^2} \\\\\n&= -\\frac{500xy}{(5x^2 + 5y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch4_43",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\sin(5x^2 y^3)$. Find $f_{xy}$.",
    "answer": "90xy^2 \\cos(5x^2 y^3) - 450x^3 y^5 \\sin(5x^2 y^3)",
    "steps": "\\begin{aligned}\nf_x &= 3 \\cos(5x^2 y^3) \\cdot (10xy^3) = 30xy^3 \\cos(5x^2 y^3) \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 30xy^3 \\cos(5x^2 y^3) \\right) \\\\[10pt]\n&= 30x \\left[ 3y^2 \\cos(5x^2 y^3) + y^3 (-\\sin(5x^2 y^3)) (\\frac{\\partial}{\\partial y}(5x^2 y^3)) \\right] \\\\[10pt]\n&= 30x \\left[ 3y^2 \\cos(5x^2 y^3) - y^3 \\sin(5x^2 y^3) (15x^2 y^2) \\right] \\\\[10pt]\n&= 90xy^2 \\cos(5x^2 y^3) - 450x^3 y^5 \\sin(5x^2 y^3) \\\\\n&= 90xy^2 \\cos(5x^2 y^3) - 450x^3 y^5 \\sin(5x^2 y^3)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch5_43",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\sqrt{2x^2 + 3y^2}$. Find the second-order partial derivative $f_{xx}$.",
    "answer": "\\frac{18y^2}{(2x^2 + 3y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= \\frac{1}{2} 3(2x^2 + 3y^2)^{-\\frac{1}{2}} (\\frac{\\partial}{\\partial x}(2x^2 + 3y^2)) \\\\[10pt]\n&= \\frac{1}{2} 3(2x^2 + 3y^2)^{-\\frac{1}{2}} (4x) = \\frac{6x}{\\sqrt{2x^2 + 3y^2}} \\\\[10pt]\nf_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{6x}{\\sqrt{2x^2 + 3y^2}} \\right) \\\\[10pt]\n&= \\frac{6\\sqrt{2x^2 + 3y^2} - 6x \\left( \\frac{2x}{\\sqrt{2x^2 + 3y^2}} \\right)}{2x^2 + 3y^2} \\\\[10pt]\n&= \\frac{\\frac{6(2x^2 + 3y^2) - 12x^2}{\\sqrt{2x^2 + 3y^2}}}{2x^2 + 3y^2} \\\\[10pt]\n&= \\frac{12x^2 + 18y^2 - 12x^2}{(2x^2 + 3y^2)^{\\frac{3}{2}}} \\\\[10pt]\n&= \\frac{18y^2}{(2x^2 + 3y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch6_43",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\arcsin(5xy)$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "\\frac{10}{(1 - 25x^2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= 2 \\frac{1}{\\sqrt{1 - (5xy)^2}} (5y) = \\frac{10y}{\\sqrt{1 - 25x^2y^2}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 10y (1 - 25x^2y^2)^{-\\frac{1}{2}} \\right] \\\\[10pt]\n&= 10 \\left[ 1 \\cdot (1 - 25x^2y^2)^{-\\frac{1}{2}} + y \\left(-\\frac{1}{2}\\right)(1 - 25x^2y^2)^{-\\frac{3}{2}} (-50x^2y) \\right] \\\\[10pt]\n&= 10 \\left[ \\frac{1}{\\sqrt{1 - 25x^2y^2}} + \\frac{25x^2y^2}{(1 - 25x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= 10 \\left[ \\frac{(1 - 25x^2y^2) + 25x^2y^2}{(1 - 25x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= \\frac{10 (1)}{(1 - 25x^2y^2)^{\\frac{3}{2}}} = \\frac{10}{(1 - 25x^2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch1_44",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 y^{7} e^{\\frac{4x}{y}}$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "8y^{4} e^{\\frac{4x}{y}} (6y - 4x)",
    "steps": "\\begin{aligned}\nf_x &= \\frac{\\partial}{\\partial x} \\left( 2 y^{7} e^{\\frac{4x}{y}} \\right) = 2 y^{7} e^{\\frac{4x}{y}} \\left(\\frac{4}{y}\\right) = 8 y^{6} e^{\\frac{4x}{y}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 8 y^{6} e^{\\frac{4x}{y}} \\right) \\\\[10pt]\n&= 8 \\left[ (6)y^{5} e^{\\frac{4x}{y}} + y^{6} e^{\\frac{4x}{y}} \\left(-\\frac{4x}{y^2}\\right) \\right] \\\\[10pt]\n&= 8 y^{4} e^{\\frac{4x}{y}} \\left( 6y - 4x \\right) \\\\\n&= 8y^{4} e^{\\frac{4x}{y}} (6y - 4x)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch2_44",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\arctan\\left(\\frac{3x}{5y}\\right)$. Find $f_{xy}$.",
    "answer": "\\frac{30(9x^2 - 25y^2)}{(9x^2 + 25y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 2 \\frac{1}{1 + \\left(\\frac{3x}{5y}\\right)^2} \\cdot \\frac{3}{5y} = \\frac{2 \\cdot 25y^2}{9x^2 + 25y^2} \\cdot \\frac{3}{5y} = \\frac{30y}{9x^2 + 25y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( \\frac{30y}{9x^2 + 25y^2} \\right) \\\\[10pt]\n&= \\frac{30(9x^2 + 25y^2) - (30y)(2 \\cdot 25y)}{(9x^2 + 25y^2)^2} \\\\[10pt]\n&= \\frac{30(9x^2 + 25y^2) - 1500y^2}{(9x^2 + 25y^2)^2} \\\\[10pt]\n&= \\frac{30(9x^2 - 25y^2)}{(9x^2 + 25y^2)^2} \\\\\n&= \\frac{30(9x^2 - 25y^2)}{(9x^2 + 25y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch3_44",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\ln(4x^2 + 5y^2)$. Find the mixed second-order partial derivative $f_{xy}$.",
    "answer": "-\\frac{240xy}{(4x^2 + 5y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 3 \\frac{1}{4x^2 + 5y^2} \\cdot (8x) = \\frac{24x}{4x^2 + 5y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 24x(4x^2 + 5y^2)^{-1} \\right] \\\\[10pt]\n&= 24x (-1)(4x^2 + 5y^2)^{-2} (10y) \\\\[10pt]\n&= -\\frac{240xy}{(4x^2 + 5y^2)^2} \\\\\n&= -\\frac{240xy}{(4x^2 + 5y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch4_44",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 \\sin(5x^2 y^3)$. Find $f_{xy}$.",
    "answer": "150xy^2 \\cos(5x^2 y^3) - 750x^3 y^5 \\sin(5x^2 y^3)",
    "steps": "\\begin{aligned}\nf_x &= 5 \\cos(5x^2 y^3) \\cdot (10xy^3) = 50xy^3 \\cos(5x^2 y^3) \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 50xy^3 \\cos(5x^2 y^3) \\right) \\\\[10pt]\n&= 50x \\left[ 3y^2 \\cos(5x^2 y^3) + y^3 (-\\sin(5x^2 y^3)) (\\frac{\\partial}{\\partial y}(5x^2 y^3)) \\right] \\\\[10pt]\n&= 50x \\left[ 3y^2 \\cos(5x^2 y^3) - y^3 \\sin(5x^2 y^3) (15x^2 y^2) \\right] \\\\[10pt]\n&= 150xy^2 \\cos(5x^2 y^3) - 750x^3 y^5 \\sin(5x^2 y^3) \\\\\n&= 150xy^2 \\cos(5x^2 y^3) - 750x^3 y^5 \\sin(5x^2 y^3)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch5_44",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 7 \\sqrt{4x^2 + 6y^2}$. Find the second-order partial derivative $f_{xx}$.",
    "answer": "\\frac{168y^2}{(4x^2 + 6y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= \\frac{1}{2} 7(4x^2 + 6y^2)^{-\\frac{1}{2}} (\\frac{\\partial}{\\partial x}(4x^2 + 6y^2)) \\\\[10pt]\n&= \\frac{1}{2} 7(4x^2 + 6y^2)^{-\\frac{1}{2}} (8x) = \\frac{28x}{\\sqrt{4x^2 + 6y^2}} \\\\[10pt]\nf_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{28x}{\\sqrt{4x^2 + 6y^2}} \\right) \\\\[10pt]\n&= \\frac{28\\sqrt{4x^2 + 6y^2} - 28x \\left( \\frac{4x}{\\sqrt{4x^2 + 6y^2}} \\right)}{4x^2 + 6y^2} \\\\[10pt]\n&= \\frac{\\frac{28(4x^2 + 6y^2) - 112x^2}{\\sqrt{4x^2 + 6y^2}}}{4x^2 + 6y^2} \\\\[10pt]\n&= \\frac{112x^2 + 168y^2 - 112x^2}{(4x^2 + 6y^2)^{\\frac{3}{2}}} \\\\[10pt]\n&= \\frac{168y^2}{(4x^2 + 6y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch6_44",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 \\arcsin(2xy)$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "\\frac{10}{(1 - 4x^2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= 5 \\frac{1}{\\sqrt{1 - (2xy)^2}} (2y) = \\frac{10y}{\\sqrt{1 - 4x^2y^2}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 10y (1 - 4x^2y^2)^{-\\frac{1}{2}} \\right] \\\\[10pt]\n&= 10 \\left[ 1 \\cdot (1 - 4x^2y^2)^{-\\frac{1}{2}} + y \\left(-\\frac{1}{2}\\right)(1 - 4x^2y^2)^{-\\frac{3}{2}} (-8x^2y) \\right] \\\\[10pt]\n&= 10 \\left[ \\frac{1}{\\sqrt{1 - 4x^2y^2}} + \\frac{4x^2y^2}{(1 - 4x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= 10 \\left[ \\frac{(1 - 4x^2y^2) + 4x^2y^2}{(1 - 4x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= \\frac{10 (1)}{(1 - 4x^2y^2)^{\\frac{3}{2}}} = \\frac{10}{(1 - 4x^2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch1_45",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 y^{6} e^{\\frac{5x}{y}}$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "10y^{3} e^{\\frac{5x}{y}} (5y - 5x)",
    "steps": "\\begin{aligned}\nf_x &= \\frac{\\partial}{\\partial x} \\left( 2 y^{6} e^{\\frac{5x}{y}} \\right) = 2 y^{6} e^{\\frac{5x}{y}} \\left(\\frac{5}{y}\\right) = 10 y^{5} e^{\\frac{5x}{y}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 10 y^{5} e^{\\frac{5x}{y}} \\right) \\\\[10pt]\n&= 10 \\left[ (5)y^{4} e^{\\frac{5x}{y}} + y^{5} e^{\\frac{5x}{y}} \\left(-\\frac{5x}{y^2}\\right) \\right] \\\\[10pt]\n&= 10 y^{3} e^{\\frac{5x}{y}} \\left( 5y - 5x \\right) \\\\\n&= 10y^{3} e^{\\frac{5x}{y}} (5y - 5x)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch2_45",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 \\arctan\\left(\\frac{3x}{3y}\\right)$. Find $f_{xy}$.",
    "answer": "\\frac{36(9x^2 - 9y^2)}{(9x^2 + 9y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 4 \\frac{1}{1 + \\left(\\frac{3x}{3y}\\right)^2} \\cdot \\frac{3}{3y} = \\frac{4 \\cdot 9y^2}{9x^2 + 9y^2} \\cdot \\frac{3}{3y} = \\frac{36y}{9x^2 + 9y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( \\frac{36y}{9x^2 + 9y^2} \\right) \\\\[10pt]\n&= \\frac{36(9x^2 + 9y^2) - (36y)(2 \\cdot 9y)}{(9x^2 + 9y^2)^2} \\\\[10pt]\n&= \\frac{36(9x^2 + 9y^2) - 648y^2}{(9x^2 + 9y^2)^2} \\\\[10pt]\n&= \\frac{36(9x^2 - 9y^2)}{(9x^2 + 9y^2)^2} \\\\\n&= \\frac{36(9x^2 - 9y^2)}{(9x^2 + 9y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch3_45",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 \\ln(4x^2 + 3y^2)$. Find the mixed second-order partial derivative $f_{xy}$.",
    "answer": "-\\frac{240xy}{(4x^2 + 3y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 5 \\frac{1}{4x^2 + 3y^2} \\cdot (8x) = \\frac{40x}{4x^2 + 3y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 40x(4x^2 + 3y^2)^{-1} \\right] \\\\[10pt]\n&= 40x (-1)(4x^2 + 3y^2)^{-2} (6y) \\\\[10pt]\n&= -\\frac{240xy}{(4x^2 + 3y^2)^2} \\\\\n&= -\\frac{240xy}{(4x^2 + 3y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch4_45",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\sin(2x^2 y^3)$. Find $f_{xy}$.",
    "answer": "36xy^2 \\cos(2x^2 y^3) - 72x^3 y^5 \\sin(2x^2 y^3)",
    "steps": "\\begin{aligned}\nf_x &= 3 \\cos(2x^2 y^3) \\cdot (4xy^3) = 12xy^3 \\cos(2x^2 y^3) \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 12xy^3 \\cos(2x^2 y^3) \\right) \\\\[10pt]\n&= 12x \\left[ 3y^2 \\cos(2x^2 y^3) + y^3 (-\\sin(2x^2 y^3)) (\\frac{\\partial}{\\partial y}(2x^2 y^3)) \\right] \\\\[10pt]\n&= 12x \\left[ 3y^2 \\cos(2x^2 y^3) - y^3 \\sin(2x^2 y^3) (6x^2 y^2) \\right] \\\\[10pt]\n&= 36xy^2 \\cos(2x^2 y^3) - 72x^3 y^5 \\sin(2x^2 y^3) \\\\\n&= 36xy^2 \\cos(2x^2 y^3) - 72x^3 y^5 \\sin(2x^2 y^3)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch5_45",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 \\sqrt{3x^2 + 2y^2}$. Find the second-order partial derivative $f_{xx}$.",
    "answer": "\\frac{24y^2}{(3x^2 + 2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= \\frac{1}{2} 4(3x^2 + 2y^2)^{-\\frac{1}{2}} (\\frac{\\partial}{\\partial x}(3x^2 + 2y^2)) \\\\[10pt]\n&= \\frac{1}{2} 4(3x^2 + 2y^2)^{-\\frac{1}{2}} (6x) = \\frac{12x}{\\sqrt{3x^2 + 2y^2}} \\\\[10pt]\nf_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{12x}{\\sqrt{3x^2 + 2y^2}} \\right) \\\\[10pt]\n&= \\frac{12\\sqrt{3x^2 + 2y^2} - 12x \\left( \\frac{3x}{\\sqrt{3x^2 + 2y^2}} \\right)}{3x^2 + 2y^2} \\\\[10pt]\n&= \\frac{\\frac{12(3x^2 + 2y^2) - 36x^2}{\\sqrt{3x^2 + 2y^2}}}{3x^2 + 2y^2} \\\\[10pt]\n&= \\frac{36x^2 + 24y^2 - 36x^2}{(3x^2 + 2y^2)^{\\frac{3}{2}}} \\\\[10pt]\n&= \\frac{24y^2}{(3x^2 + 2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch6_45",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 \\arcsin(3xy)$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "\\frac{12}{(1 - 9x^2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= 4 \\frac{1}{\\sqrt{1 - (3xy)^2}} (3y) = \\frac{12y}{\\sqrt{1 - 9x^2y^2}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 12y (1 - 9x^2y^2)^{-\\frac{1}{2}} \\right] \\\\[10pt]\n&= 12 \\left[ 1 \\cdot (1 - 9x^2y^2)^{-\\frac{1}{2}} + y \\left(-\\frac{1}{2}\\right)(1 - 9x^2y^2)^{-\\frac{3}{2}} (-18x^2y) \\right] \\\\[10pt]\n&= 12 \\left[ \\frac{1}{\\sqrt{1 - 9x^2y^2}} + \\frac{9x^2y^2}{(1 - 9x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= 12 \\left[ \\frac{(1 - 9x^2y^2) + 9x^2y^2}{(1 - 9x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= \\frac{12 (1)}{(1 - 9x^2y^2)^{\\frac{3}{2}}} = \\frac{12}{(1 - 9x^2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch1_46",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 y^{4} e^{\\frac{3x}{y}}$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "12y e^{\\frac{3x}{y}} (3y - 3x)",
    "steps": "\\begin{aligned}\nf_x &= \\frac{\\partial}{\\partial x} \\left( 4 y^{4} e^{\\frac{3x}{y}} \\right) = 4 y^{4} e^{\\frac{3x}{y}} \\left(\\frac{3}{y}\\right) = 12 y^{3} e^{\\frac{3x}{y}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 12 y^{3} e^{\\frac{3x}{y}} \\right) \\\\[10pt]\n&= 12 \\left[ (3)y^{2} e^{\\frac{3x}{y}} + y^{3} e^{\\frac{3x}{y}} \\left(-\\frac{3x}{y^2}\\right) \\right] \\\\[10pt]\n&= 12 y^{1} e^{\\frac{3x}{y}} \\left( 3y - 3x \\right) \\\\\n&= 12y e^{\\frac{3x}{y}} (3y - 3x)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch2_46",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 6 \\arctan\\left(\\frac{3x}{5y}\\right)$. Find $f_{xy}$.",
    "answer": "\\frac{90(9x^2 - 25y^2)}{(9x^2 + 25y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 6 \\frac{1}{1 + \\left(\\frac{3x}{5y}\\right)^2} \\cdot \\frac{3}{5y} = \\frac{6 \\cdot 25y^2}{9x^2 + 25y^2} \\cdot \\frac{3}{5y} = \\frac{90y}{9x^2 + 25y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( \\frac{90y}{9x^2 + 25y^2} \\right) \\\\[10pt]\n&= \\frac{90(9x^2 + 25y^2) - (90y)(2 \\cdot 25y)}{(9x^2 + 25y^2)^2} \\\\[10pt]\n&= \\frac{90(9x^2 + 25y^2) - 4500y^2}{(9x^2 + 25y^2)^2} \\\\[10pt]\n&= \\frac{90(9x^2 - 25y^2)}{(9x^2 + 25y^2)^2} \\\\\n&= \\frac{90(9x^2 - 25y^2)}{(9x^2 + 25y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch3_46",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 \\ln(4x^2 + 5y^2)$. Find the mixed second-order partial derivative $f_{xy}$.",
    "answer": "-\\frac{320xy}{(4x^2 + 5y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 4 \\frac{1}{4x^2 + 5y^2} \\cdot (8x) = \\frac{32x}{4x^2 + 5y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 32x(4x^2 + 5y^2)^{-1} \\right] \\\\[10pt]\n&= 32x (-1)(4x^2 + 5y^2)^{-2} (10y) \\\\[10pt]\n&= -\\frac{320xy}{(4x^2 + 5y^2)^2} \\\\\n&= -\\frac{320xy}{(4x^2 + 5y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch4_46",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\sin(4x^2 y^3)$. Find $f_{xy}$.",
    "answer": "72xy^2 \\cos(4x^2 y^3) - 288x^3 y^5 \\sin(4x^2 y^3)",
    "steps": "\\begin{aligned}\nf_x &= 3 \\cos(4x^2 y^3) \\cdot (8xy^3) = 24xy^3 \\cos(4x^2 y^3) \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 24xy^3 \\cos(4x^2 y^3) \\right) \\\\[10pt]\n&= 24x \\left[ 3y^2 \\cos(4x^2 y^3) + y^3 (-\\sin(4x^2 y^3)) (\\frac{\\partial}{\\partial y}(4x^2 y^3)) \\right] \\\\[10pt]\n&= 24x \\left[ 3y^2 \\cos(4x^2 y^3) - y^3 \\sin(4x^2 y^3) (12x^2 y^2) \\right] \\\\[10pt]\n&= 72xy^2 \\cos(4x^2 y^3) - 288x^3 y^5 \\sin(4x^2 y^3) \\\\\n&= 72xy^2 \\cos(4x^2 y^3) - 288x^3 y^5 \\sin(4x^2 y^3)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch5_46",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\sqrt{3x^2 + 2y^2}$. Find the second-order partial derivative $f_{xx}$.",
    "answer": "\\frac{12y^2}{(3x^2 + 2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= \\frac{1}{2} 2(3x^2 + 2y^2)^{-\\frac{1}{2}} (\\frac{\\partial}{\\partial x}(3x^2 + 2y^2)) \\\\[10pt]\n&= \\frac{1}{2} 2(3x^2 + 2y^2)^{-\\frac{1}{2}} (6x) = \\frac{6x}{\\sqrt{3x^2 + 2y^2}} \\\\[10pt]\nf_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{6x}{\\sqrt{3x^2 + 2y^2}} \\right) \\\\[10pt]\n&= \\frac{6\\sqrt{3x^2 + 2y^2} - 6x \\left( \\frac{3x}{\\sqrt{3x^2 + 2y^2}} \\right)}{3x^2 + 2y^2} \\\\[10pt]\n&= \\frac{\\frac{6(3x^2 + 2y^2) - 18x^2}{\\sqrt{3x^2 + 2y^2}}}{3x^2 + 2y^2} \\\\[10pt]\n&= \\frac{18x^2 + 12y^2 - 18x^2}{(3x^2 + 2y^2)^{\\frac{3}{2}}} \\\\[10pt]\n&= \\frac{12y^2}{(3x^2 + 2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch6_46",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 \\arcsin(4xy)$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "\\frac{20}{(1 - 16x^2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= 5 \\frac{1}{\\sqrt{1 - (4xy)^2}} (4y) = \\frac{20y}{\\sqrt{1 - 16x^2y^2}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 20y (1 - 16x^2y^2)^{-\\frac{1}{2}} \\right] \\\\[10pt]\n&= 20 \\left[ 1 \\cdot (1 - 16x^2y^2)^{-\\frac{1}{2}} + y \\left(-\\frac{1}{2}\\right)(1 - 16x^2y^2)^{-\\frac{3}{2}} (-32x^2y) \\right] \\\\[10pt]\n&= 20 \\left[ \\frac{1}{\\sqrt{1 - 16x^2y^2}} + \\frac{16x^2y^2}{(1 - 16x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= 20 \\left[ \\frac{(1 - 16x^2y^2) + 16x^2y^2}{(1 - 16x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= \\frac{20 (1)}{(1 - 16x^2y^2)^{\\frac{3}{2}}} = \\frac{20}{(1 - 16x^2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch1_47",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 y^{5} e^{\\frac{5x}{y}}$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "25y^{2} e^{\\frac{5x}{y}} (4y - 5x)",
    "steps": "\\begin{aligned}\nf_x &= \\frac{\\partial}{\\partial x} \\left( 5 y^{5} e^{\\frac{5x}{y}} \\right) = 5 y^{5} e^{\\frac{5x}{y}} \\left(\\frac{5}{y}\\right) = 25 y^{4} e^{\\frac{5x}{y}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 25 y^{4} e^{\\frac{5x}{y}} \\right) \\\\[10pt]\n&= 25 \\left[ (4)y^{3} e^{\\frac{5x}{y}} + y^{4} e^{\\frac{5x}{y}} \\left(-\\frac{5x}{y^2}\\right) \\right] \\\\[10pt]\n&= 25 y^{2} e^{\\frac{5x}{y}} \\left( 4y - 5x \\right) \\\\\n&= 25y^{2} e^{\\frac{5x}{y}} (4y - 5x)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch2_47",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\arctan\\left(\\frac{3x}{5y}\\right)$. Find $f_{xy}$.",
    "answer": "\\frac{45(9x^2 - 25y^2)}{(9x^2 + 25y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 3 \\frac{1}{1 + \\left(\\frac{3x}{5y}\\right)^2} \\cdot \\frac{3}{5y} = \\frac{3 \\cdot 25y^2}{9x^2 + 25y^2} \\cdot \\frac{3}{5y} = \\frac{45y}{9x^2 + 25y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( \\frac{45y}{9x^2 + 25y^2} \\right) \\\\[10pt]\n&= \\frac{45(9x^2 + 25y^2) - (45y)(2 \\cdot 25y)}{(9x^2 + 25y^2)^2} \\\\[10pt]\n&= \\frac{45(9x^2 + 25y^2) - 2250y^2}{(9x^2 + 25y^2)^2} \\\\[10pt]\n&= \\frac{45(9x^2 - 25y^2)}{(9x^2 + 25y^2)^2} \\\\\n&= \\frac{45(9x^2 - 25y^2)}{(9x^2 + 25y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch3_47",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\ln(4x^2 + 5y^2)$. Find the mixed second-order partial derivative $f_{xy}$.",
    "answer": "-\\frac{160xy}{(4x^2 + 5y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 2 \\frac{1}{4x^2 + 5y^2} \\cdot (8x) = \\frac{16x}{4x^2 + 5y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 16x(4x^2 + 5y^2)^{-1} \\right] \\\\[10pt]\n&= 16x (-1)(4x^2 + 5y^2)^{-2} (10y) \\\\[10pt]\n&= -\\frac{160xy}{(4x^2 + 5y^2)^2} \\\\\n&= -\\frac{160xy}{(4x^2 + 5y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch4_47",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\sin(2x^2 y^3)$. Find $f_{xy}$.",
    "answer": "36xy^2 \\cos(2x^2 y^3) - 72x^3 y^5 \\sin(2x^2 y^3)",
    "steps": "\\begin{aligned}\nf_x &= 3 \\cos(2x^2 y^3) \\cdot (4xy^3) = 12xy^3 \\cos(2x^2 y^3) \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 12xy^3 \\cos(2x^2 y^3) \\right) \\\\[10pt]\n&= 12x \\left[ 3y^2 \\cos(2x^2 y^3) + y^3 (-\\sin(2x^2 y^3)) (\\frac{\\partial}{\\partial y}(2x^2 y^3)) \\right] \\\\[10pt]\n&= 12x \\left[ 3y^2 \\cos(2x^2 y^3) - y^3 \\sin(2x^2 y^3) (6x^2 y^2) \\right] \\\\[10pt]\n&= 36xy^2 \\cos(2x^2 y^3) - 72x^3 y^5 \\sin(2x^2 y^3) \\\\\n&= 36xy^2 \\cos(2x^2 y^3) - 72x^3 y^5 \\sin(2x^2 y^3)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch5_47",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 7 \\sqrt{5x^2 + 2y^2}$. Find the second-order partial derivative $f_{xx}$.",
    "answer": "\\frac{70y^2}{(5x^2 + 2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= \\frac{1}{2} 7(5x^2 + 2y^2)^{-\\frac{1}{2}} (\\frac{\\partial}{\\partial x}(5x^2 + 2y^2)) \\\\[10pt]\n&= \\frac{1}{2} 7(5x^2 + 2y^2)^{-\\frac{1}{2}} (10x) = \\frac{35x}{\\sqrt{5x^2 + 2y^2}} \\\\[10pt]\nf_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{35x}{\\sqrt{5x^2 + 2y^2}} \\right) \\\\[10pt]\n&= \\frac{35\\sqrt{5x^2 + 2y^2} - 35x \\left( \\frac{5x}{\\sqrt{5x^2 + 2y^2}} \\right)}{5x^2 + 2y^2} \\\\[10pt]\n&= \\frac{\\frac{35(5x^2 + 2y^2) - 175x^2}{\\sqrt{5x^2 + 2y^2}}}{5x^2 + 2y^2} \\\\[10pt]\n&= \\frac{175x^2 + 70y^2 - 175x^2}{(5x^2 + 2y^2)^{\\frac{3}{2}}} \\\\[10pt]\n&= \\frac{70y^2}{(5x^2 + 2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch6_47",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 \\arcsin(5xy)$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "\\frac{25}{(1 - 25x^2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= 5 \\frac{1}{\\sqrt{1 - (5xy)^2}} (5y) = \\frac{25y}{\\sqrt{1 - 25x^2y^2}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 25y (1 - 25x^2y^2)^{-\\frac{1}{2}} \\right] \\\\[10pt]\n&= 25 \\left[ 1 \\cdot (1 - 25x^2y^2)^{-\\frac{1}{2}} + y \\left(-\\frac{1}{2}\\right)(1 - 25x^2y^2)^{-\\frac{3}{2}} (-50x^2y) \\right] \\\\[10pt]\n&= 25 \\left[ \\frac{1}{\\sqrt{1 - 25x^2y^2}} + \\frac{25x^2y^2}{(1 - 25x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= 25 \\left[ \\frac{(1 - 25x^2y^2) + 25x^2y^2}{(1 - 25x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= \\frac{25 (1)}{(1 - 25x^2y^2)^{\\frac{3}{2}}} = \\frac{25}{(1 - 25x^2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch1_48",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 y^{4} e^{\\frac{4x}{y}}$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "16y e^{\\frac{4x}{y}} (3y - 4x)",
    "steps": "\\begin{aligned}\nf_x &= \\frac{\\partial}{\\partial x} \\left( 4 y^{4} e^{\\frac{4x}{y}} \\right) = 4 y^{4} e^{\\frac{4x}{y}} \\left(\\frac{4}{y}\\right) = 16 y^{3} e^{\\frac{4x}{y}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 16 y^{3} e^{\\frac{4x}{y}} \\right) \\\\[10pt]\n&= 16 \\left[ (3)y^{2} e^{\\frac{4x}{y}} + y^{3} e^{\\frac{4x}{y}} \\left(-\\frac{4x}{y^2}\\right) \\right] \\\\[10pt]\n&= 16 y^{1} e^{\\frac{4x}{y}} \\left( 3y - 4x \\right) \\\\\n&= 16y e^{\\frac{4x}{y}} (3y - 4x)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch2_48",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 6 \\arctan\\left(\\frac{2x}{3y}\\right)$. Find $f_{xy}$.",
    "answer": "\\frac{36(4x^2 - 9y^2)}{(4x^2 + 9y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 6 \\frac{1}{1 + \\left(\\frac{2x}{3y}\\right)^2} \\cdot \\frac{2}{3y} = \\frac{6 \\cdot 9y^2}{4x^2 + 9y^2} \\cdot \\frac{2}{3y} = \\frac{36y}{4x^2 + 9y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( \\frac{36y}{4x^2 + 9y^2} \\right) \\\\[10pt]\n&= \\frac{36(4x^2 + 9y^2) - (36y)(2 \\cdot 9y)}{(4x^2 + 9y^2)^2} \\\\[10pt]\n&= \\frac{36(4x^2 + 9y^2) - 648y^2}{(4x^2 + 9y^2)^2} \\\\[10pt]\n&= \\frac{36(4x^2 - 9y^2)}{(4x^2 + 9y^2)^2} \\\\\n&= \\frac{36(4x^2 - 9y^2)}{(4x^2 + 9y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch3_48",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 \\ln(4x^2 + 5y^2)$. Find the mixed second-order partial derivative $f_{xy}$.",
    "answer": "-\\frac{320xy}{(4x^2 + 5y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 4 \\frac{1}{4x^2 + 5y^2} \\cdot (8x) = \\frac{32x}{4x^2 + 5y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 32x(4x^2 + 5y^2)^{-1} \\right] \\\\[10pt]\n&= 32x (-1)(4x^2 + 5y^2)^{-2} (10y) \\\\[10pt]\n&= -\\frac{320xy}{(4x^2 + 5y^2)^2} \\\\\n&= -\\frac{320xy}{(4x^2 + 5y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch4_48",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 \\sin(5x^2 y^3)$. Find $f_{xy}$.",
    "answer": "150xy^2 \\cos(5x^2 y^3) - 750x^3 y^5 \\sin(5x^2 y^3)",
    "steps": "\\begin{aligned}\nf_x &= 5 \\cos(5x^2 y^3) \\cdot (10xy^3) = 50xy^3 \\cos(5x^2 y^3) \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 50xy^3 \\cos(5x^2 y^3) \\right) \\\\[10pt]\n&= 50x \\left[ 3y^2 \\cos(5x^2 y^3) + y^3 (-\\sin(5x^2 y^3)) (\\frac{\\partial}{\\partial y}(5x^2 y^3)) \\right] \\\\[10pt]\n&= 50x \\left[ 3y^2 \\cos(5x^2 y^3) - y^3 \\sin(5x^2 y^3) (15x^2 y^2) \\right] \\\\[10pt]\n&= 150xy^2 \\cos(5x^2 y^3) - 750x^3 y^5 \\sin(5x^2 y^3) \\\\\n&= 150xy^2 \\cos(5x^2 y^3) - 750x^3 y^5 \\sin(5x^2 y^3)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch5_48",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 3 \\sqrt{4x^2 + 4y^2}$. Find the second-order partial derivative $f_{xx}$.",
    "answer": "\\frac{48y^2}{(4x^2 + 4y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= \\frac{1}{2} 3(4x^2 + 4y^2)^{-\\frac{1}{2}} (\\frac{\\partial}{\\partial x}(4x^2 + 4y^2)) \\\\[10pt]\n&= \\frac{1}{2} 3(4x^2 + 4y^2)^{-\\frac{1}{2}} (8x) = \\frac{12x}{\\sqrt{4x^2 + 4y^2}} \\\\[10pt]\nf_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{12x}{\\sqrt{4x^2 + 4y^2}} \\right) \\\\[10pt]\n&= \\frac{12\\sqrt{4x^2 + 4y^2} - 12x \\left( \\frac{4x}{\\sqrt{4x^2 + 4y^2}} \\right)}{4x^2 + 4y^2} \\\\[10pt]\n&= \\frac{\\frac{12(4x^2 + 4y^2) - 48x^2}{\\sqrt{4x^2 + 4y^2}}}{4x^2 + 4y^2} \\\\[10pt]\n&= \\frac{48x^2 + 48y^2 - 48x^2}{(4x^2 + 4y^2)^{\\frac{3}{2}}} \\\\[10pt]\n&= \\frac{48y^2}{(4x^2 + 4y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch6_48",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\arcsin(4xy)$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "\\frac{8}{(1 - 16x^2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= 2 \\frac{1}{\\sqrt{1 - (4xy)^2}} (4y) = \\frac{8y}{\\sqrt{1 - 16x^2y^2}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 8y (1 - 16x^2y^2)^{-\\frac{1}{2}} \\right] \\\\[10pt]\n&= 8 \\left[ 1 \\cdot (1 - 16x^2y^2)^{-\\frac{1}{2}} + y \\left(-\\frac{1}{2}\\right)(1 - 16x^2y^2)^{-\\frac{3}{2}} (-32x^2y) \\right] \\\\[10pt]\n&= 8 \\left[ \\frac{1}{\\sqrt{1 - 16x^2y^2}} + \\frac{16x^2y^2}{(1 - 16x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= 8 \\left[ \\frac{(1 - 16x^2y^2) + 16x^2y^2}{(1 - 16x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= \\frac{8 (1)}{(1 - 16x^2y^2)^{\\frac{3}{2}}} = \\frac{8}{(1 - 16x^2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch1_49",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 y^{5} e^{\\frac{2x}{y}}$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "4y^{2} e^{\\frac{2x}{y}} (4y - 2x)",
    "steps": "\\begin{aligned}\nf_x &= \\frac{\\partial}{\\partial x} \\left( 2 y^{5} e^{\\frac{2x}{y}} \\right) = 2 y^{5} e^{\\frac{2x}{y}} \\left(\\frac{2}{y}\\right) = 4 y^{4} e^{\\frac{2x}{y}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 4 y^{4} e^{\\frac{2x}{y}} \\right) \\\\[10pt]\n&= 4 \\left[ (4)y^{3} e^{\\frac{2x}{y}} + y^{4} e^{\\frac{2x}{y}} \\left(-\\frac{2x}{y^2}\\right) \\right] \\\\[10pt]\n&= 4 y^{2} e^{\\frac{2x}{y}} \\left( 4y - 2x \\right) \\\\\n&= 4y^{2} e^{\\frac{2x}{y}} (4y - 2x)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch2_49",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\arctan\\left(\\frac{2x}{5y}\\right)$. Find $f_{xy}$.",
    "answer": "\\frac{20(4x^2 - 25y^2)}{(4x^2 + 25y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 2 \\frac{1}{1 + \\left(\\frac{2x}{5y}\\right)^2} \\cdot \\frac{2}{5y} = \\frac{2 \\cdot 25y^2}{4x^2 + 25y^2} \\cdot \\frac{2}{5y} = \\frac{20y}{4x^2 + 25y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( \\frac{20y}{4x^2 + 25y^2} \\right) \\\\[10pt]\n&= \\frac{20(4x^2 + 25y^2) - (20y)(2 \\cdot 25y)}{(4x^2 + 25y^2)^2} \\\\[10pt]\n&= \\frac{20(4x^2 + 25y^2) - 1000y^2}{(4x^2 + 25y^2)^2} \\\\[10pt]\n&= \\frac{20(4x^2 - 25y^2)}{(4x^2 + 25y^2)^2} \\\\\n&= \\frac{20(4x^2 - 25y^2)}{(4x^2 + 25y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch3_49",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 4 \\ln(3x^2 + 3y^2)$. Find the mixed second-order partial derivative $f_{xy}$.",
    "answer": "-\\frac{144xy}{(3x^2 + 3y^2)^2}",
    "steps": "\\begin{aligned}\nf_x &= 4 \\frac{1}{3x^2 + 3y^2} \\cdot (6x) = \\frac{24x}{3x^2 + 3y^2} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 24x(3x^2 + 3y^2)^{-1} \\right] \\\\[10pt]\n&= 24x (-1)(3x^2 + 3y^2)^{-2} (6y) \\\\[10pt]\n&= -\\frac{144xy}{(3x^2 + 3y^2)^2} \\\\\n&= -\\frac{144xy}{(3x^2 + 3y^2)^2}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch4_49",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 2 \\sin(2x^2 y^3)$. Find $f_{xy}$.",
    "answer": "24xy^2 \\cos(2x^2 y^3) - 48x^3 y^5 \\sin(2x^2 y^3)",
    "steps": "\\begin{aligned}\nf_x &= 2 \\cos(2x^2 y^3) \\cdot (4xy^3) = 8xy^3 \\cos(2x^2 y^3) \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left( 8xy^3 \\cos(2x^2 y^3) \\right) \\\\[10pt]\n&= 8x \\left[ 3y^2 \\cos(2x^2 y^3) + y^3 (-\\sin(2x^2 y^3)) (\\frac{\\partial}{\\partial y}(2x^2 y^3)) \\right] \\\\[10pt]\n&= 8x \\left[ 3y^2 \\cos(2x^2 y^3) - y^3 \\sin(2x^2 y^3) (6x^2 y^2) \\right] \\\\[10pt]\n&= 24xy^2 \\cos(2x^2 y^3) - 48x^3 y^5 \\sin(2x^2 y^3) \\\\\n&= 24xy^2 \\cos(2x^2 y^3) - 48x^3 y^5 \\sin(2x^2 y^3)\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch5_49",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 7 \\sqrt{3x^2 + 4y^2}$. Find the second-order partial derivative $f_{xx}$.",
    "answer": "\\frac{84y^2}{(3x^2 + 4y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= \\frac{1}{2} 7(3x^2 + 4y^2)^{-\\frac{1}{2}} (\\frac{\\partial}{\\partial x}(3x^2 + 4y^2)) \\\\[10pt]\n&= \\frac{1}{2} 7(3x^2 + 4y^2)^{-\\frac{1}{2}} (6x) = \\frac{21x}{\\sqrt{3x^2 + 4y^2}} \\\\[10pt]\nf_{xx} &= \\frac{\\partial}{\\partial x} \\left( \\frac{21x}{\\sqrt{3x^2 + 4y^2}} \\right) \\\\[10pt]\n&= \\frac{21\\sqrt{3x^2 + 4y^2} - 21x \\left( \\frac{3x}{\\sqrt{3x^2 + 4y^2}} \\right)}{3x^2 + 4y^2} \\\\[10pt]\n&= \\frac{\\frac{21(3x^2 + 4y^2) - 63x^2}{\\sqrt{3x^2 + 4y^2}}}{3x^2 + 4y^2} \\\\[10pt]\n&= \\frac{63x^2 + 84y^2 - 63x^2}{(3x^2 + 4y^2)^{\\frac{3}{2}}} \\\\[10pt]\n&= \\frac{84y^2}{(3x^2 + 4y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  },
  {
    "id": "gen_partial_arch6_49",
    "topic": "Derivatives",
    "category": "Partial Derivatives",
    "difficulty": "very_hard",
    "statement": "Let $f(x,y) = 5 \\arcsin(6xy)$. Find the mixed partial derivative $f_{xy}$.",
    "answer": "\\frac{30}{(1 - 36x^2y^2)^{\\frac{3}{2}}}",
    "steps": "\\begin{aligned}\nf_x &= 5 \\frac{1}{\\sqrt{1 - (6xy)^2}} (6y) = \\frac{30y}{\\sqrt{1 - 36x^2y^2}} \\\\[10pt]\nf_{xy} &= \\frac{\\partial}{\\partial y} \\left[ 30y (1 - 36x^2y^2)^{-\\frac{1}{2}} \\right] \\\\[10pt]\n&= 30 \\left[ 1 \\cdot (1 - 36x^2y^2)^{-\\frac{1}{2}} + y \\left(-\\frac{1}{2}\\right)(1 - 36x^2y^2)^{-\\frac{3}{2}} (-72x^2y) \\right] \\\\[10pt]\n&= 30 \\left[ \\frac{1}{\\sqrt{1 - 36x^2y^2}} + \\frac{36x^2y^2}{(1 - 36x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= 30 \\left[ \\frac{(1 - 36x^2y^2) + 36x^2y^2}{(1 - 36x^2y^2)^{\\frac{3}{2}}} \\right] \\\\[10pt]\n&= \\frac{30 (1)}{(1 - 36x^2y^2)^{\\frac{3}{2}}} = \\frac{30}{(1 - 36x^2y^2)^{\\frac{3}{2}}}\n\\end{aligned}"
  }
];
