// Generates 300 very hard L'Hopitals Rule calculus problems
export const generatedLhopitalProblems: any[] = [
  {
    "id": "gen_lhop_arch1_0",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 4x^2} - \\cos(2x)}{x^2}$.",
    "answer": "4",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sqrt{1 + 4x^2} - \\cos(2x)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{\\frac{4x}{\\sqrt{1 + 4x^2}} + 2\\sin(2x)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{ \\frac{4\\sqrt{1 + 4x^2} - 4x\\left(\\frac{4x}{\\sqrt{1 + 4x^2}}\\right)}{1 + 4x^2} + 4\\cos(2x) }{2} \\\\\n&= \\lim_{x \\to 0} \\frac{ \\frac{4 - 16x^2}{(1 + 4x^2)^{3/2}} + 4\\cos(2x) }{2} \\\\\n&= \\frac{4 + 4}{2} = 4\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch2_0",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{e^{5x} - \\ln(1+3x) - 1 - 2x}{x^2}$.",
    "answer": "17",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{e^{5x} - \\ln(1+3x) - 1 - 2x}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{5e^{5x} - \\frac{3}{1+3x} - 2}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{25e^{5x} - 3(-1)(1+3x)^{-2}(3)}{2} \\\\\n&= \\lim_{x \\to 0} \\frac{25e^{5x} + \\frac{9}{(1+3x)^2}}{2} \\\\\n&= \\frac{25(1) + 9(1)}{2} = 17\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch3_0",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(6x)}{x^3}$.",
    "answer": "\\frac{104}{3}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(6x)}{x^3} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{2\\cos(2x) - \\left(2\\cos(6x) - 12x\\sin(6x)\\right)}{3x^2} \\\\\n&= \\lim_{x \\to 0} \\frac{2\\cos(2x) - 2\\cos(6x) + 12x\\sin(6x)}{3x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 12\\sin(6x) + 12\\sin(6x) + 72x\\cos(6x)}{6x} \\\\\n&= \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 24\\sin(6x) + 72x\\cos(6x)}{6x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-8\\cos(2x) + 144\\cos(6x) + 72\\cos(6x) - 432x\\sin(6x)}{6} \\\\\n&= \\frac{-8(1) + 216(1) - 0}{6} = \\frac{104}{3}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch4_0",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} (1 + 4\\sin x)^{\\frac{3}{x}}$.",
    "answer": "e^{12}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} (1 + 4\\sin x)^{\\frac{3}{x}} \\quad (1^{\\infty}) \\\\\n\\ln L &= \\lim_{x \\to 0} \\frac{3\\ln(1 + 4\\sin x)}{x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{3 \\cdot \\frac{4\\cos x}{1 + 4\\sin x}}{1} \\\\\n&= \\frac{12(1)}{1 + 0} = 12 \\\\\nL &= e^{12}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch5_0",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $L(y) = \\lim_{x \\to 0} \\frac{\\cosh(4xy) - \\cos(7xy)}{x^2}$. \\\\ Find the derivative $L'(y)$.",
    "answer": "65y",
    "steps": "\\begin{aligned}\nL(y) &= \\lim_{x \\to 0} \\frac{\\cosh(4xy) - \\cos(7xy)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4y\\sinh(4xy) + 7y\\sin(7xy)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{16y^2\\cosh(4xy) + 49y^2\\cos(7xy)}{2} \\\\\n&= \\frac{16y^2(1) + 49y^2(1)}{2} = \\frac{65}{2}y^2 \\\\[10pt]\nL'(y) &= \\frac{d}{dy} \\left( \\frac{65}{2}y^2 \\right) = 65y\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch6_0",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $f(u,v) = \\lim_{x \\to 0} \\frac{e^{3 u x^2} - \\cos(3 v x)}{x^2}$. Compute the product $f_u \\cdot f_v$.",
    "answer": "27v",
    "steps": "\\begin{aligned}\nf(u,v) &= \\lim_{x \\to 0} \\frac{e^{3ux^2} - \\cos(3vx)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{6ux e^{3ux^2} + 3v\\sin(3vx)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{6u e^{3ux^2} + 6ux(6ux)e^{3ux^2} + 9v^2\\cos(3vx)}{2} \\\\\n&= \\frac{6u(1) + 0 + 9v^2(1)}{2} = 3u + \\frac{9}{2}v^2 \\\\[10pt]\nf_u &= \\frac{\\partial}{\\partial u}\\left(3u + \\frac{9}{2}v^2\\right) = 3 \\\\\nf_v &= \\frac{\\partial}{\\partial v}\\left(3u + \\frac{9}{2}v^2\\right) = 9v \\\\[10pt]\nf_u \\cdot f_v &= (3)(9v) = 27v\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch1_1",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 5x^2} - \\cos(5x)}{x^2}$.",
    "answer": "15",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sqrt{1 + 5x^2} - \\cos(5x)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{\\frac{5x}{\\sqrt{1 + 5x^2}} + 5\\sin(5x)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{ \\frac{5\\sqrt{1 + 5x^2} - 5x\\left(\\frac{5x}{\\sqrt{1 + 5x^2}}\\right)}{1 + 5x^2} + 25\\cos(5x) }{2} \\\\\n&= \\lim_{x \\to 0} \\frac{ \\frac{5 - 25x^2}{(1 + 5x^2)^{3/2}} + 25\\cos(5x) }{2} \\\\\n&= \\frac{5 + 25}{2} = 15\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch2_1",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{e^{5x} - \\ln(1+4x) - 1 - 1x}{x^2}$.",
    "answer": "\\frac{41}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{e^{5x} - \\ln(1+4x) - 1 - 1x}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{5e^{5x} - \\frac{4}{1+4x} - 1}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{25e^{5x} - 4(-1)(1+4x)^{-2}(4)}{2} \\\\\n&= \\lim_{x \\to 0} \\frac{25e^{5x} + \\frac{16}{(1+4x)^2}}{2} \\\\\n&= \\frac{25(1) + 16(1)}{2} = \\frac{41}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch3_1",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sin(3x) - 3x\\cos(6x)}{x^3}$.",
    "answer": "\\frac{99}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sin(3x) - 3x\\cos(6x)}{x^3} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{3\\cos(3x) - \\left(3\\cos(6x) - 18x\\sin(6x)\\right)}{3x^2} \\\\\n&= \\lim_{x \\to 0} \\frac{3\\cos(3x) - 3\\cos(6x) + 18x\\sin(6x)}{3x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-9\\sin(3x) + 18\\sin(6x) + 18\\sin(6x) + 108x\\cos(6x)}{6x} \\\\\n&= \\lim_{x \\to 0} \\frac{-9\\sin(3x) + 36\\sin(6x) + 108x\\cos(6x)}{6x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-27\\cos(3x) + 216\\cos(6x) + 108\\cos(6x) - 648x\\sin(6x)}{6} \\\\\n&= \\frac{-27(1) + 324(1) - 0}{6} = \\frac{99}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch4_1",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} (1 + 5\\sin x)^{\\frac{4}{x}}$.",
    "answer": "e^{20}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} (1 + 5\\sin x)^{\\frac{4}{x}} \\quad (1^{\\infty}) \\\\\n\\ln L &= \\lim_{x \\to 0} \\frac{4\\ln(1 + 5\\sin x)}{x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{4 \\cdot \\frac{5\\cos x}{1 + 5\\sin x}}{1} \\\\\n&= \\frac{20(1)}{1 + 0} = 20 \\\\\nL &= e^{20}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch5_1",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $L(y) = \\lim_{x \\to 0} \\frac{\\cosh(2xy) - \\cos(5xy)}{x^2}$. \\\\ Find the derivative $L'(y)$.",
    "answer": "29y",
    "steps": "\\begin{aligned}\nL(y) &= \\lim_{x \\to 0} \\frac{\\cosh(2xy) - \\cos(5xy)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{2y\\sinh(2xy) + 5y\\sin(5xy)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4y^2\\cosh(2xy) + 25y^2\\cos(5xy)}{2} \\\\\n&= \\frac{4y^2(1) + 25y^2(1)}{2} = \\frac{29}{2}y^2 \\\\[10pt]\nL'(y) &= \\frac{d}{dy} \\left( \\frac{29}{2}y^2 \\right) = 29y\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch6_1",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $f(u,v) = \\lim_{x \\to 0} \\frac{e^{2 u x^2} - \\cos(5 v x)}{x^2}$. Compute the product $f_u \\cdot f_v$.",
    "answer": "50v",
    "steps": "\\begin{aligned}\nf(u,v) &= \\lim_{x \\to 0} \\frac{e^{2ux^2} - \\cos(5vx)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4ux e^{2ux^2} + 5v\\sin(5vx)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4u e^{2ux^2} + 4ux(4ux)e^{2ux^2} + 25v^2\\cos(5vx)}{2} \\\\\n&= \\frac{4u(1) + 0 + 25v^2(1)}{2} = 2u + \\frac{25}{2}v^2 \\\\[10pt]\nf_u &= \\frac{\\partial}{\\partial u}\\left(2u + \\frac{25}{2}v^2\\right) = 2 \\\\\nf_v &= \\frac{\\partial}{\\partial v}\\left(2u + \\frac{25}{2}v^2\\right) = 25v \\\\[10pt]\nf_u \\cdot f_v &= (2)(25v) = 50v\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch1_2",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 2x^2} - \\cos(5x)}{x^2}$.",
    "answer": "\\frac{27}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sqrt{1 + 2x^2} - \\cos(5x)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{\\frac{2x}{\\sqrt{1 + 2x^2}} + 5\\sin(5x)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{ \\frac{2\\sqrt{1 + 2x^2} - 2x\\left(\\frac{2x}{\\sqrt{1 + 2x^2}}\\right)}{1 + 2x^2} + 25\\cos(5x) }{2} \\\\\n&= \\lim_{x \\to 0} \\frac{ \\frac{2 - 4x^2}{(1 + 2x^2)^{3/2}} + 25\\cos(5x) }{2} \\\\\n&= \\frac{2 + 25}{2} = \\frac{27}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch2_2",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{e^{5x} - \\ln(1+3x) - 1 - 2x}{x^2}$.",
    "answer": "17",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{e^{5x} - \\ln(1+3x) - 1 - 2x}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{5e^{5x} - \\frac{3}{1+3x} - 2}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{25e^{5x} - 3(-1)(1+3x)^{-2}(3)}{2} \\\\\n&= \\lim_{x \\to 0} \\frac{25e^{5x} + \\frac{9}{(1+3x)^2}}{2} \\\\\n&= \\frac{25(1) + 9(1)}{2} = 17\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch3_2",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(6x)}{x^3}$.",
    "answer": "\\frac{104}{3}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(6x)}{x^3} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{2\\cos(2x) - \\left(2\\cos(6x) - 12x\\sin(6x)\\right)}{3x^2} \\\\\n&= \\lim_{x \\to 0} \\frac{2\\cos(2x) - 2\\cos(6x) + 12x\\sin(6x)}{3x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 12\\sin(6x) + 12\\sin(6x) + 72x\\cos(6x)}{6x} \\\\\n&= \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 24\\sin(6x) + 72x\\cos(6x)}{6x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-8\\cos(2x) + 144\\cos(6x) + 72\\cos(6x) - 432x\\sin(6x)}{6} \\\\\n&= \\frac{-8(1) + 216(1) - 0}{6} = \\frac{104}{3}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch4_2",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} (1 + 2\\sin x)^{\\frac{3}{x}}$.",
    "answer": "e^{6}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} (1 + 2\\sin x)^{\\frac{3}{x}} \\quad (1^{\\infty}) \\\\\n\\ln L &= \\lim_{x \\to 0} \\frac{3\\ln(1 + 2\\sin x)}{x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{3 \\cdot \\frac{2\\cos x}{1 + 2\\sin x}}{1} \\\\\n&= \\frac{6(1)}{1 + 0} = 6 \\\\\nL &= e^{6}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch5_2",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $L(y) = \\lim_{x \\to 0} \\frac{\\cosh(3xy) - \\cos(5xy)}{x^2}$. \\\\ Find the derivative $L'(y)$.",
    "answer": "34y",
    "steps": "\\begin{aligned}\nL(y) &= \\lim_{x \\to 0} \\frac{\\cosh(3xy) - \\cos(5xy)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{3y\\sinh(3xy) + 5y\\sin(5xy)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{9y^2\\cosh(3xy) + 25y^2\\cos(5xy)}{2} \\\\\n&= \\frac{9y^2(1) + 25y^2(1)}{2} = 17y^2 \\\\[10pt]\nL'(y) &= \\frac{d}{dy} \\left( 17y^2 \\right) = 34y\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch6_2",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $f(u,v) = \\lim_{x \\to 0} \\frac{e^{4 u x^2} - \\cos(3 v x)}{x^2}$. Compute the product $f_u \\cdot f_v$.",
    "answer": "36v",
    "steps": "\\begin{aligned}\nf(u,v) &= \\lim_{x \\to 0} \\frac{e^{4ux^2} - \\cos(3vx)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{8ux e^{4ux^2} + 3v\\sin(3vx)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{8u e^{4ux^2} + 8ux(8ux)e^{4ux^2} + 9v^2\\cos(3vx)}{2} \\\\\n&= \\frac{8u(1) + 0 + 9v^2(1)}{2} = 4u + \\frac{9}{2}v^2 \\\\[10pt]\nf_u &= \\frac{\\partial}{\\partial u}\\left(4u + \\frac{9}{2}v^2\\right) = 4 \\\\\nf_v &= \\frac{\\partial}{\\partial v}\\left(4u + \\frac{9}{2}v^2\\right) = 9v \\\\[10pt]\nf_u \\cdot f_v &= (4)(9v) = 36v\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch1_3",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 6x^2} - \\cos(2x)}{x^2}$.",
    "answer": "5",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sqrt{1 + 6x^2} - \\cos(2x)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{\\frac{6x}{\\sqrt{1 + 6x^2}} + 2\\sin(2x)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{ \\frac{6\\sqrt{1 + 6x^2} - 6x\\left(\\frac{6x}{\\sqrt{1 + 6x^2}}\\right)}{1 + 6x^2} + 4\\cos(2x) }{2} \\\\\n&= \\lim_{x \\to 0} \\frac{ \\frac{6 - 36x^2}{(1 + 6x^2)^{3/2}} + 4\\cos(2x) }{2} \\\\\n&= \\frac{6 + 4}{2} = 5\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch2_3",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{e^{4x} - \\ln(1+5x) - 1 - -1x}{x^2}$.",
    "answer": "\\frac{41}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{e^{4x} - \\ln(1+5x) - 1 - -1x}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{4e^{4x} - \\frac{5}{1+5x} - -1}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{16e^{4x} - 5(-1)(1+5x)^{-2}(5)}{2} \\\\\n&= \\lim_{x \\to 0} \\frac{16e^{4x} + \\frac{25}{(1+5x)^2}}{2} \\\\\n&= \\frac{16(1) + 25(1)}{2} = \\frac{41}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch3_3",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sin(3x) - 3x\\cos(4x)}{x^3}$.",
    "answer": "\\frac{39}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sin(3x) - 3x\\cos(4x)}{x^3} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{3\\cos(3x) - \\left(3\\cos(4x) - 12x\\sin(4x)\\right)}{3x^2} \\\\\n&= \\lim_{x \\to 0} \\frac{3\\cos(3x) - 3\\cos(4x) + 12x\\sin(4x)}{3x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-9\\sin(3x) + 12\\sin(4x) + 12\\sin(4x) + 48x\\cos(4x)}{6x} \\\\\n&= \\lim_{x \\to 0} \\frac{-9\\sin(3x) + 24\\sin(4x) + 48x\\cos(4x)}{6x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-27\\cos(3x) + 96\\cos(4x) + 48\\cos(4x) - 192x\\sin(4x)}{6} \\\\\n&= \\frac{-27(1) + 144(1) - 0}{6} = \\frac{39}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch4_3",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} (1 + 4\\sin x)^{\\frac{5}{x}}$.",
    "answer": "e^{20}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} (1 + 4\\sin x)^{\\frac{5}{x}} \\quad (1^{\\infty}) \\\\\n\\ln L &= \\lim_{x \\to 0} \\frac{5\\ln(1 + 4\\sin x)}{x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{5 \\cdot \\frac{4\\cos x}{1 + 4\\sin x}}{1} \\\\\n&= \\frac{20(1)}{1 + 0} = 20 \\\\\nL &= e^{20}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch5_3",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $L(y) = \\lim_{x \\to 0} \\frac{\\cosh(2xy) - \\cos(6xy)}{x^2}$. \\\\ Find the derivative $L'(y)$.",
    "answer": "40y",
    "steps": "\\begin{aligned}\nL(y) &= \\lim_{x \\to 0} \\frac{\\cosh(2xy) - \\cos(6xy)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{2y\\sinh(2xy) + 6y\\sin(6xy)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4y^2\\cosh(2xy) + 36y^2\\cos(6xy)}{2} \\\\\n&= \\frac{4y^2(1) + 36y^2(1)}{2} = 20y^2 \\\\[10pt]\nL'(y) &= \\frac{d}{dy} \\left( 20y^2 \\right) = 40y\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch6_3",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $f(u,v) = \\lim_{x \\to 0} \\frac{e^{4 u x^2} - \\cos(4 v x)}{x^2}$. Compute the product $f_u \\cdot f_v$.",
    "answer": "64v",
    "steps": "\\begin{aligned}\nf(u,v) &= \\lim_{x \\to 0} \\frac{e^{4ux^2} - \\cos(4vx)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{8ux e^{4ux^2} + 4v\\sin(4vx)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{8u e^{4ux^2} + 8ux(8ux)e^{4ux^2} + 16v^2\\cos(4vx)}{2} \\\\\n&= \\frac{8u(1) + 0 + 16v^2(1)}{2} = 4u + \\frac{16}{2}v^2 \\\\[10pt]\nf_u &= \\frac{\\partial}{\\partial u}\\left(4u + \\frac{16}{2}v^2\\right) = 4 \\\\\nf_v &= \\frac{\\partial}{\\partial v}\\left(4u + \\frac{16}{2}v^2\\right) = 16v \\\\[10pt]\nf_u \\cdot f_v &= (4)(16v) = 64v\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch1_4",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 5x^2} - \\cos(3x)}{x^2}$.",
    "answer": "7",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sqrt{1 + 5x^2} - \\cos(3x)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{\\frac{5x}{\\sqrt{1 + 5x^2}} + 3\\sin(3x)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{ \\frac{5\\sqrt{1 + 5x^2} - 5x\\left(\\frac{5x}{\\sqrt{1 + 5x^2}}\\right)}{1 + 5x^2} + 9\\cos(3x) }{2} \\\\\n&= \\lim_{x \\to 0} \\frac{ \\frac{5 - 25x^2}{(1 + 5x^2)^{3/2}} + 9\\cos(3x) }{2} \\\\\n&= \\frac{5 + 9}{2} = 7\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch2_4",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{e^{2x} - \\ln(1+5x) - 1 - -3x}{x^2}$.",
    "answer": "\\frac{29}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{e^{2x} - \\ln(1+5x) - 1 - -3x}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{2e^{2x} - \\frac{5}{1+5x} - -3}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{4e^{2x} - 5(-1)(1+5x)^{-2}(5)}{2} \\\\\n&= \\lim_{x \\to 0} \\frac{4e^{2x} + \\frac{25}{(1+5x)^2}}{2} \\\\\n&= \\frac{4(1) + 25(1)}{2} = \\frac{29}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch3_4",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(5x)}{x^3}$.",
    "answer": "\\frac{71}{3}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(5x)}{x^3} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{2\\cos(2x) - \\left(2\\cos(5x) - 10x\\sin(5x)\\right)}{3x^2} \\\\\n&= \\lim_{x \\to 0} \\frac{2\\cos(2x) - 2\\cos(5x) + 10x\\sin(5x)}{3x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 10\\sin(5x) + 10\\sin(5x) + 50x\\cos(5x)}{6x} \\\\\n&= \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 20\\sin(5x) + 50x\\cos(5x)}{6x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-8\\cos(2x) + 100\\cos(5x) + 50\\cos(5x) - 250x\\sin(5x)}{6} \\\\\n&= \\frac{-8(1) + 150(1) - 0}{6} = \\frac{71}{3}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch4_4",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} (1 + 5\\sin x)^{\\frac{5}{x}}$.",
    "answer": "e^{25}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} (1 + 5\\sin x)^{\\frac{5}{x}} \\quad (1^{\\infty}) \\\\\n\\ln L &= \\lim_{x \\to 0} \\frac{5\\ln(1 + 5\\sin x)}{x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{5 \\cdot \\frac{5\\cos x}{1 + 5\\sin x}}{1} \\\\\n&= \\frac{25(1)}{1 + 0} = 25 \\\\\nL &= e^{25}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch5_4",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $L(y) = \\lim_{x \\to 0} \\frac{\\cosh(2xy) - \\cos(5xy)}{x^2}$. \\\\ Find the derivative $L'(y)$.",
    "answer": "29y",
    "steps": "\\begin{aligned}\nL(y) &= \\lim_{x \\to 0} \\frac{\\cosh(2xy) - \\cos(5xy)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{2y\\sinh(2xy) + 5y\\sin(5xy)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4y^2\\cosh(2xy) + 25y^2\\cos(5xy)}{2} \\\\\n&= \\frac{4y^2(1) + 25y^2(1)}{2} = \\frac{29}{2}y^2 \\\\[10pt]\nL'(y) &= \\frac{d}{dy} \\left( \\frac{29}{2}y^2 \\right) = 29y\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch6_4",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $f(u,v) = \\lim_{x \\to 0} \\frac{e^{2 u x^2} - \\cos(4 v x)}{x^2}$. Compute the product $f_u \\cdot f_v$.",
    "answer": "32v",
    "steps": "\\begin{aligned}\nf(u,v) &= \\lim_{x \\to 0} \\frac{e^{2ux^2} - \\cos(4vx)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4ux e^{2ux^2} + 4v\\sin(4vx)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4u e^{2ux^2} + 4ux(4ux)e^{2ux^2} + 16v^2\\cos(4vx)}{2} \\\\\n&= \\frac{4u(1) + 0 + 16v^2(1)}{2} = 2u + \\frac{16}{2}v^2 \\\\[10pt]\nf_u &= \\frac{\\partial}{\\partial u}\\left(2u + \\frac{16}{2}v^2\\right) = 2 \\\\\nf_v &= \\frac{\\partial}{\\partial v}\\left(2u + \\frac{16}{2}v^2\\right) = 16v \\\\[10pt]\nf_u \\cdot f_v &= (2)(16v) = 32v\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch1_5",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 2x^2} - \\cos(4x)}{x^2}$.",
    "answer": "9",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sqrt{1 + 2x^2} - \\cos(4x)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{\\frac{2x}{\\sqrt{1 + 2x^2}} + 4\\sin(4x)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{ \\frac{2\\sqrt{1 + 2x^2} - 2x\\left(\\frac{2x}{\\sqrt{1 + 2x^2}}\\right)}{1 + 2x^2} + 16\\cos(4x) }{2} \\\\\n&= \\lim_{x \\to 0} \\frac{ \\frac{2 - 4x^2}{(1 + 2x^2)^{3/2}} + 16\\cos(4x) }{2} \\\\\n&= \\frac{2 + 16}{2} = 9\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch2_5",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{e^{2x} - \\ln(1+5x) - 1 - -3x}{x^2}$.",
    "answer": "\\frac{29}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{e^{2x} - \\ln(1+5x) - 1 - -3x}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{2e^{2x} - \\frac{5}{1+5x} - -3}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{4e^{2x} - 5(-1)(1+5x)^{-2}(5)}{2} \\\\\n&= \\lim_{x \\to 0} \\frac{4e^{2x} + \\frac{25}{(1+5x)^2}}{2} \\\\\n&= \\frac{4(1) + 25(1)}{2} = \\frac{29}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch3_5",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(6x)}{x^3}$.",
    "answer": "\\frac{104}{3}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(6x)}{x^3} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{2\\cos(2x) - \\left(2\\cos(6x) - 12x\\sin(6x)\\right)}{3x^2} \\\\\n&= \\lim_{x \\to 0} \\frac{2\\cos(2x) - 2\\cos(6x) + 12x\\sin(6x)}{3x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 12\\sin(6x) + 12\\sin(6x) + 72x\\cos(6x)}{6x} \\\\\n&= \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 24\\sin(6x) + 72x\\cos(6x)}{6x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-8\\cos(2x) + 144\\cos(6x) + 72\\cos(6x) - 432x\\sin(6x)}{6} \\\\\n&= \\frac{-8(1) + 216(1) - 0}{6} = \\frac{104}{3}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch4_5",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} (1 + 3\\sin x)^{\\frac{5}{x}}$.",
    "answer": "e^{15}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} (1 + 3\\sin x)^{\\frac{5}{x}} \\quad (1^{\\infty}) \\\\\n\\ln L &= \\lim_{x \\to 0} \\frac{5\\ln(1 + 3\\sin x)}{x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{5 \\cdot \\frac{3\\cos x}{1 + 3\\sin x}}{1} \\\\\n&= \\frac{15(1)}{1 + 0} = 15 \\\\\nL &= e^{15}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch5_5",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $L(y) = \\lim_{x \\to 0} \\frac{\\cosh(3xy) - \\cos(5xy)}{x^2}$. \\\\ Find the derivative $L'(y)$.",
    "answer": "34y",
    "steps": "\\begin{aligned}\nL(y) &= \\lim_{x \\to 0} \\frac{\\cosh(3xy) - \\cos(5xy)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{3y\\sinh(3xy) + 5y\\sin(5xy)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{9y^2\\cosh(3xy) + 25y^2\\cos(5xy)}{2} \\\\\n&= \\frac{9y^2(1) + 25y^2(1)}{2} = 17y^2 \\\\[10pt]\nL'(y) &= \\frac{d}{dy} \\left( 17y^2 \\right) = 34y\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch6_5",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $f(u,v) = \\lim_{x \\to 0} \\frac{e^{4 u x^2} - \\cos(5 v x)}{x^2}$. Compute the product $f_u \\cdot f_v$.",
    "answer": "100v",
    "steps": "\\begin{aligned}\nf(u,v) &= \\lim_{x \\to 0} \\frac{e^{4ux^2} - \\cos(5vx)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{8ux e^{4ux^2} + 5v\\sin(5vx)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{8u e^{4ux^2} + 8ux(8ux)e^{4ux^2} + 25v^2\\cos(5vx)}{2} \\\\\n&= \\frac{8u(1) + 0 + 25v^2(1)}{2} = 4u + \\frac{25}{2}v^2 \\\\[10pt]\nf_u &= \\frac{\\partial}{\\partial u}\\left(4u + \\frac{25}{2}v^2\\right) = 4 \\\\\nf_v &= \\frac{\\partial}{\\partial v}\\left(4u + \\frac{25}{2}v^2\\right) = 25v \\\\[10pt]\nf_u \\cdot f_v &= (4)(25v) = 100v\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch1_6",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 4x^2} - \\cos(3x)}{x^2}$.",
    "answer": "\\frac{13}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sqrt{1 + 4x^2} - \\cos(3x)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{\\frac{4x}{\\sqrt{1 + 4x^2}} + 3\\sin(3x)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{ \\frac{4\\sqrt{1 + 4x^2} - 4x\\left(\\frac{4x}{\\sqrt{1 + 4x^2}}\\right)}{1 + 4x^2} + 9\\cos(3x) }{2} \\\\\n&= \\lim_{x \\to 0} \\frac{ \\frac{4 - 16x^2}{(1 + 4x^2)^{3/2}} + 9\\cos(3x) }{2} \\\\\n&= \\frac{4 + 9}{2} = \\frac{13}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch2_6",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{e^{2x} - \\ln(1+5x) - 1 - -3x}{x^2}$.",
    "answer": "\\frac{29}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{e^{2x} - \\ln(1+5x) - 1 - -3x}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{2e^{2x} - \\frac{5}{1+5x} - -3}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{4e^{2x} - 5(-1)(1+5x)^{-2}(5)}{2} \\\\\n&= \\lim_{x \\to 0} \\frac{4e^{2x} + \\frac{25}{(1+5x)^2}}{2} \\\\\n&= \\frac{4(1) + 25(1)}{2} = \\frac{29}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch3_6",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sin(3x) - 3x\\cos(5x)}{x^3}$.",
    "answer": "33",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sin(3x) - 3x\\cos(5x)}{x^3} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{3\\cos(3x) - \\left(3\\cos(5x) - 15x\\sin(5x)\\right)}{3x^2} \\\\\n&= \\lim_{x \\to 0} \\frac{3\\cos(3x) - 3\\cos(5x) + 15x\\sin(5x)}{3x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-9\\sin(3x) + 15\\sin(5x) + 15\\sin(5x) + 75x\\cos(5x)}{6x} \\\\\n&= \\lim_{x \\to 0} \\frac{-9\\sin(3x) + 30\\sin(5x) + 75x\\cos(5x)}{6x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-27\\cos(3x) + 150\\cos(5x) + 75\\cos(5x) - 375x\\sin(5x)}{6} \\\\\n&= \\frac{-27(1) + 225(1) - 0}{6} = 33\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch4_6",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} (1 + 3\\sin x)^{\\frac{5}{x}}$.",
    "answer": "e^{15}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} (1 + 3\\sin x)^{\\frac{5}{x}} \\quad (1^{\\infty}) \\\\\n\\ln L &= \\lim_{x \\to 0} \\frac{5\\ln(1 + 3\\sin x)}{x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{5 \\cdot \\frac{3\\cos x}{1 + 3\\sin x}}{1} \\\\\n&= \\frac{15(1)}{1 + 0} = 15 \\\\\nL &= e^{15}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch5_6",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $L(y) = \\lim_{x \\to 0} \\frac{\\cosh(4xy) - \\cos(5xy)}{x^2}$. \\\\ Find the derivative $L'(y)$.",
    "answer": "41y",
    "steps": "\\begin{aligned}\nL(y) &= \\lim_{x \\to 0} \\frac{\\cosh(4xy) - \\cos(5xy)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4y\\sinh(4xy) + 5y\\sin(5xy)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{16y^2\\cosh(4xy) + 25y^2\\cos(5xy)}{2} \\\\\n&= \\frac{16y^2(1) + 25y^2(1)}{2} = \\frac{41}{2}y^2 \\\\[10pt]\nL'(y) &= \\frac{d}{dy} \\left( \\frac{41}{2}y^2 \\right) = 41y\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch6_6",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $f(u,v) = \\lim_{x \\to 0} \\frac{e^{3 u x^2} - \\cos(5 v x)}{x^2}$. Compute the product $f_u \\cdot f_v$.",
    "answer": "75v",
    "steps": "\\begin{aligned}\nf(u,v) &= \\lim_{x \\to 0} \\frac{e^{3ux^2} - \\cos(5vx)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{6ux e^{3ux^2} + 5v\\sin(5vx)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{6u e^{3ux^2} + 6ux(6ux)e^{3ux^2} + 25v^2\\cos(5vx)}{2} \\\\\n&= \\frac{6u(1) + 0 + 25v^2(1)}{2} = 3u + \\frac{25}{2}v^2 \\\\[10pt]\nf_u &= \\frac{\\partial}{\\partial u}\\left(3u + \\frac{25}{2}v^2\\right) = 3 \\\\\nf_v &= \\frac{\\partial}{\\partial v}\\left(3u + \\frac{25}{2}v^2\\right) = 25v \\\\[10pt]\nf_u \\cdot f_v &= (3)(25v) = 75v\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch1_7",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 2x^2} - \\cos(5x)}{x^2}$.",
    "answer": "\\frac{27}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sqrt{1 + 2x^2} - \\cos(5x)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{\\frac{2x}{\\sqrt{1 + 2x^2}} + 5\\sin(5x)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{ \\frac{2\\sqrt{1 + 2x^2} - 2x\\left(\\frac{2x}{\\sqrt{1 + 2x^2}}\\right)}{1 + 2x^2} + 25\\cos(5x) }{2} \\\\\n&= \\lim_{x \\to 0} \\frac{ \\frac{2 - 4x^2}{(1 + 2x^2)^{3/2}} + 25\\cos(5x) }{2} \\\\\n&= \\frac{2 + 25}{2} = \\frac{27}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch2_7",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{e^{3x} - \\ln(1+2x) - 1 - 1x}{x^2}$.",
    "answer": "\\frac{13}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{e^{3x} - \\ln(1+2x) - 1 - 1x}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{3e^{3x} - \\frac{2}{1+2x} - 1}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{9e^{3x} - 2(-1)(1+2x)^{-2}(2)}{2} \\\\\n&= \\lim_{x \\to 0} \\frac{9e^{3x} + \\frac{4}{(1+2x)^2}}{2} \\\\\n&= \\frac{9(1) + 4(1)}{2} = \\frac{13}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch3_7",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(4x)}{x^3}$.",
    "answer": "\\frac{44}{3}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(4x)}{x^3} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{2\\cos(2x) - \\left(2\\cos(4x) - 8x\\sin(4x)\\right)}{3x^2} \\\\\n&= \\lim_{x \\to 0} \\frac{2\\cos(2x) - 2\\cos(4x) + 8x\\sin(4x)}{3x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 8\\sin(4x) + 8\\sin(4x) + 32x\\cos(4x)}{6x} \\\\\n&= \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 16\\sin(4x) + 32x\\cos(4x)}{6x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-8\\cos(2x) + 64\\cos(4x) + 32\\cos(4x) - 128x\\sin(4x)}{6} \\\\\n&= \\frac{-8(1) + 96(1) - 0}{6} = \\frac{44}{3}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch4_7",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} (1 + 4\\sin x)^{\\frac{2}{x}}$.",
    "answer": "e^{8}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} (1 + 4\\sin x)^{\\frac{2}{x}} \\quad (1^{\\infty}) \\\\\n\\ln L &= \\lim_{x \\to 0} \\frac{2\\ln(1 + 4\\sin x)}{x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{2 \\cdot \\frac{4\\cos x}{1 + 4\\sin x}}{1} \\\\\n&= \\frac{8(1)}{1 + 0} = 8 \\\\\nL &= e^{8}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch5_7",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $L(y) = \\lim_{x \\to 0} \\frac{\\cosh(2xy) - \\cos(6xy)}{x^2}$. \\\\ Find the derivative $L'(y)$.",
    "answer": "40y",
    "steps": "\\begin{aligned}\nL(y) &= \\lim_{x \\to 0} \\frac{\\cosh(2xy) - \\cos(6xy)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{2y\\sinh(2xy) + 6y\\sin(6xy)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4y^2\\cosh(2xy) + 36y^2\\cos(6xy)}{2} \\\\\n&= \\frac{4y^2(1) + 36y^2(1)}{2} = 20y^2 \\\\[10pt]\nL'(y) &= \\frac{d}{dy} \\left( 20y^2 \\right) = 40y\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch6_7",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $f(u,v) = \\lim_{x \\to 0} \\frac{e^{2 u x^2} - \\cos(4 v x)}{x^2}$. Compute the product $f_u \\cdot f_v$.",
    "answer": "32v",
    "steps": "\\begin{aligned}\nf(u,v) &= \\lim_{x \\to 0} \\frac{e^{2ux^2} - \\cos(4vx)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4ux e^{2ux^2} + 4v\\sin(4vx)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4u e^{2ux^2} + 4ux(4ux)e^{2ux^2} + 16v^2\\cos(4vx)}{2} \\\\\n&= \\frac{4u(1) + 0 + 16v^2(1)}{2} = 2u + \\frac{16}{2}v^2 \\\\[10pt]\nf_u &= \\frac{\\partial}{\\partial u}\\left(2u + \\frac{16}{2}v^2\\right) = 2 \\\\\nf_v &= \\frac{\\partial}{\\partial v}\\left(2u + \\frac{16}{2}v^2\\right) = 16v \\\\[10pt]\nf_u \\cdot f_v &= (2)(16v) = 32v\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch1_8",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 2x^2} - \\cos(2x)}{x^2}$.",
    "answer": "3",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sqrt{1 + 2x^2} - \\cos(2x)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{\\frac{2x}{\\sqrt{1 + 2x^2}} + 2\\sin(2x)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{ \\frac{2\\sqrt{1 + 2x^2} - 2x\\left(\\frac{2x}{\\sqrt{1 + 2x^2}}\\right)}{1 + 2x^2} + 4\\cos(2x) }{2} \\\\\n&= \\lim_{x \\to 0} \\frac{ \\frac{2 - 4x^2}{(1 + 2x^2)^{3/2}} + 4\\cos(2x) }{2} \\\\\n&= \\frac{2 + 4}{2} = 3\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch2_8",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{e^{2x} - \\ln(1+5x) - 1 - -3x}{x^2}$.",
    "answer": "\\frac{29}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{e^{2x} - \\ln(1+5x) - 1 - -3x}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{2e^{2x} - \\frac{5}{1+5x} - -3}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{4e^{2x} - 5(-1)(1+5x)^{-2}(5)}{2} \\\\\n&= \\lim_{x \\to 0} \\frac{4e^{2x} + \\frac{25}{(1+5x)^2}}{2} \\\\\n&= \\frac{4(1) + 25(1)}{2} = \\frac{29}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch3_8",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(4x)}{x^3}$.",
    "answer": "\\frac{44}{3}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(4x)}{x^3} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{2\\cos(2x) - \\left(2\\cos(4x) - 8x\\sin(4x)\\right)}{3x^2} \\\\\n&= \\lim_{x \\to 0} \\frac{2\\cos(2x) - 2\\cos(4x) + 8x\\sin(4x)}{3x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 8\\sin(4x) + 8\\sin(4x) + 32x\\cos(4x)}{6x} \\\\\n&= \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 16\\sin(4x) + 32x\\cos(4x)}{6x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-8\\cos(2x) + 64\\cos(4x) + 32\\cos(4x) - 128x\\sin(4x)}{6} \\\\\n&= \\frac{-8(1) + 96(1) - 0}{6} = \\frac{44}{3}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch4_8",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} (1 + 2\\sin x)^{\\frac{3}{x}}$.",
    "answer": "e^{6}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} (1 + 2\\sin x)^{\\frac{3}{x}} \\quad (1^{\\infty}) \\\\\n\\ln L &= \\lim_{x \\to 0} \\frac{3\\ln(1 + 2\\sin x)}{x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{3 \\cdot \\frac{2\\cos x}{1 + 2\\sin x}}{1} \\\\\n&= \\frac{6(1)}{1 + 0} = 6 \\\\\nL &= e^{6}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch5_8",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $L(y) = \\lim_{x \\to 0} \\frac{\\cosh(3xy) - \\cos(6xy)}{x^2}$. \\\\ Find the derivative $L'(y)$.",
    "answer": "45y",
    "steps": "\\begin{aligned}\nL(y) &= \\lim_{x \\to 0} \\frac{\\cosh(3xy) - \\cos(6xy)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{3y\\sinh(3xy) + 6y\\sin(6xy)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{9y^2\\cosh(3xy) + 36y^2\\cos(6xy)}{2} \\\\\n&= \\frac{9y^2(1) + 36y^2(1)}{2} = \\frac{45}{2}y^2 \\\\[10pt]\nL'(y) &= \\frac{d}{dy} \\left( \\frac{45}{2}y^2 \\right) = 45y\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch6_8",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $f(u,v) = \\lim_{x \\to 0} \\frac{e^{4 u x^2} - \\cos(2 v x)}{x^2}$. Compute the product $f_u \\cdot f_v$.",
    "answer": "16v",
    "steps": "\\begin{aligned}\nf(u,v) &= \\lim_{x \\to 0} \\frac{e^{4ux^2} - \\cos(2vx)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{8ux e^{4ux^2} + 2v\\sin(2vx)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{8u e^{4ux^2} + 8ux(8ux)e^{4ux^2} + 4v^2\\cos(2vx)}{2} \\\\\n&= \\frac{8u(1) + 0 + 4v^2(1)}{2} = 4u + \\frac{4}{2}v^2 \\\\[10pt]\nf_u &= \\frac{\\partial}{\\partial u}\\left(4u + \\frac{4}{2}v^2\\right) = 4 \\\\\nf_v &= \\frac{\\partial}{\\partial v}\\left(4u + \\frac{4}{2}v^2\\right) = 4v \\\\[10pt]\nf_u \\cdot f_v &= (4)(4v) = 16v\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch1_9",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 3x^2} - \\cos(4x)}{x^2}$.",
    "answer": "\\frac{19}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sqrt{1 + 3x^2} - \\cos(4x)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{\\frac{3x}{\\sqrt{1 + 3x^2}} + 4\\sin(4x)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{ \\frac{3\\sqrt{1 + 3x^2} - 3x\\left(\\frac{3x}{\\sqrt{1 + 3x^2}}\\right)}{1 + 3x^2} + 16\\cos(4x) }{2} \\\\\n&= \\lim_{x \\to 0} \\frac{ \\frac{3 - 9x^2}{(1 + 3x^2)^{3/2}} + 16\\cos(4x) }{2} \\\\\n&= \\frac{3 + 16}{2} = \\frac{19}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch2_9",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{e^{4x} - \\ln(1+3x) - 1 - 1x}{x^2}$.",
    "answer": "\\frac{25}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{e^{4x} - \\ln(1+3x) - 1 - 1x}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{4e^{4x} - \\frac{3}{1+3x} - 1}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{16e^{4x} - 3(-1)(1+3x)^{-2}(3)}{2} \\\\\n&= \\lim_{x \\to 0} \\frac{16e^{4x} + \\frac{9}{(1+3x)^2}}{2} \\\\\n&= \\frac{16(1) + 9(1)}{2} = \\frac{25}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch3_9",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sin(3x) - 3x\\cos(4x)}{x^3}$.",
    "answer": "\\frac{39}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sin(3x) - 3x\\cos(4x)}{x^3} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{3\\cos(3x) - \\left(3\\cos(4x) - 12x\\sin(4x)\\right)}{3x^2} \\\\\n&= \\lim_{x \\to 0} \\frac{3\\cos(3x) - 3\\cos(4x) + 12x\\sin(4x)}{3x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-9\\sin(3x) + 12\\sin(4x) + 12\\sin(4x) + 48x\\cos(4x)}{6x} \\\\\n&= \\lim_{x \\to 0} \\frac{-9\\sin(3x) + 24\\sin(4x) + 48x\\cos(4x)}{6x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-27\\cos(3x) + 96\\cos(4x) + 48\\cos(4x) - 192x\\sin(4x)}{6} \\\\\n&= \\frac{-27(1) + 144(1) - 0}{6} = \\frac{39}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch4_9",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} (1 + 2\\sin x)^{\\frac{3}{x}}$.",
    "answer": "e^{6}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} (1 + 2\\sin x)^{\\frac{3}{x}} \\quad (1^{\\infty}) \\\\\n\\ln L &= \\lim_{x \\to 0} \\frac{3\\ln(1 + 2\\sin x)}{x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{3 \\cdot \\frac{2\\cos x}{1 + 2\\sin x}}{1} \\\\\n&= \\frac{6(1)}{1 + 0} = 6 \\\\\nL &= e^{6}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch5_9",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $L(y) = \\lim_{x \\to 0} \\frac{\\cosh(4xy) - \\cos(5xy)}{x^2}$. \\\\ Find the derivative $L'(y)$.",
    "answer": "41y",
    "steps": "\\begin{aligned}\nL(y) &= \\lim_{x \\to 0} \\frac{\\cosh(4xy) - \\cos(5xy)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4y\\sinh(4xy) + 5y\\sin(5xy)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{16y^2\\cosh(4xy) + 25y^2\\cos(5xy)}{2} \\\\\n&= \\frac{16y^2(1) + 25y^2(1)}{2} = \\frac{41}{2}y^2 \\\\[10pt]\nL'(y) &= \\frac{d}{dy} \\left( \\frac{41}{2}y^2 \\right) = 41y\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch6_9",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $f(u,v) = \\lim_{x \\to 0} \\frac{e^{2 u x^2} - \\cos(2 v x)}{x^2}$. Compute the product $f_u \\cdot f_v$.",
    "answer": "8v",
    "steps": "\\begin{aligned}\nf(u,v) &= \\lim_{x \\to 0} \\frac{e^{2ux^2} - \\cos(2vx)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4ux e^{2ux^2} + 2v\\sin(2vx)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4u e^{2ux^2} + 4ux(4ux)e^{2ux^2} + 4v^2\\cos(2vx)}{2} \\\\\n&= \\frac{4u(1) + 0 + 4v^2(1)}{2} = 2u + \\frac{4}{2}v^2 \\\\[10pt]\nf_u &= \\frac{\\partial}{\\partial u}\\left(2u + \\frac{4}{2}v^2\\right) = 2 \\\\\nf_v &= \\frac{\\partial}{\\partial v}\\left(2u + \\frac{4}{2}v^2\\right) = 4v \\\\[10pt]\nf_u \\cdot f_v &= (2)(4v) = 8v\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch1_10",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 6x^2} - \\cos(3x)}{x^2}$.",
    "answer": "\\frac{15}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sqrt{1 + 6x^2} - \\cos(3x)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{\\frac{6x}{\\sqrt{1 + 6x^2}} + 3\\sin(3x)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{ \\frac{6\\sqrt{1 + 6x^2} - 6x\\left(\\frac{6x}{\\sqrt{1 + 6x^2}}\\right)}{1 + 6x^2} + 9\\cos(3x) }{2} \\\\\n&= \\lim_{x \\to 0} \\frac{ \\frac{6 - 36x^2}{(1 + 6x^2)^{3/2}} + 9\\cos(3x) }{2} \\\\\n&= \\frac{6 + 9}{2} = \\frac{15}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch2_10",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{e^{4x} - \\ln(1+2x) - 1 - 2x}{x^2}$.",
    "answer": "10",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{e^{4x} - \\ln(1+2x) - 1 - 2x}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{4e^{4x} - \\frac{2}{1+2x} - 2}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{16e^{4x} - 2(-1)(1+2x)^{-2}(2)}{2} \\\\\n&= \\lim_{x \\to 0} \\frac{16e^{4x} + \\frac{4}{(1+2x)^2}}{2} \\\\\n&= \\frac{16(1) + 4(1)}{2} = 10\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch3_10",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sin(3x) - 3x\\cos(5x)}{x^3}$.",
    "answer": "33",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sin(3x) - 3x\\cos(5x)}{x^3} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{3\\cos(3x) - \\left(3\\cos(5x) - 15x\\sin(5x)\\right)}{3x^2} \\\\\n&= \\lim_{x \\to 0} \\frac{3\\cos(3x) - 3\\cos(5x) + 15x\\sin(5x)}{3x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-9\\sin(3x) + 15\\sin(5x) + 15\\sin(5x) + 75x\\cos(5x)}{6x} \\\\\n&= \\lim_{x \\to 0} \\frac{-9\\sin(3x) + 30\\sin(5x) + 75x\\cos(5x)}{6x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-27\\cos(3x) + 150\\cos(5x) + 75\\cos(5x) - 375x\\sin(5x)}{6} \\\\\n&= \\frac{-27(1) + 225(1) - 0}{6} = 33\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch4_10",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} (1 + 5\\sin x)^{\\frac{3}{x}}$.",
    "answer": "e^{15}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} (1 + 5\\sin x)^{\\frac{3}{x}} \\quad (1^{\\infty}) \\\\\n\\ln L &= \\lim_{x \\to 0} \\frac{3\\ln(1 + 5\\sin x)}{x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{3 \\cdot \\frac{5\\cos x}{1 + 5\\sin x}}{1} \\\\\n&= \\frac{15(1)}{1 + 0} = 15 \\\\\nL &= e^{15}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch5_10",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $L(y) = \\lim_{x \\to 0} \\frac{\\cosh(2xy) - \\cos(6xy)}{x^2}$. \\\\ Find the derivative $L'(y)$.",
    "answer": "40y",
    "steps": "\\begin{aligned}\nL(y) &= \\lim_{x \\to 0} \\frac{\\cosh(2xy) - \\cos(6xy)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{2y\\sinh(2xy) + 6y\\sin(6xy)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4y^2\\cosh(2xy) + 36y^2\\cos(6xy)}{2} \\\\\n&= \\frac{4y^2(1) + 36y^2(1)}{2} = 20y^2 \\\\[10pt]\nL'(y) &= \\frac{d}{dy} \\left( 20y^2 \\right) = 40y\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch6_10",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $f(u,v) = \\lim_{x \\to 0} \\frac{e^{2 u x^2} - \\cos(5 v x)}{x^2}$. Compute the product $f_u \\cdot f_v$.",
    "answer": "50v",
    "steps": "\\begin{aligned}\nf(u,v) &= \\lim_{x \\to 0} \\frac{e^{2ux^2} - \\cos(5vx)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4ux e^{2ux^2} + 5v\\sin(5vx)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4u e^{2ux^2} + 4ux(4ux)e^{2ux^2} + 25v^2\\cos(5vx)}{2} \\\\\n&= \\frac{4u(1) + 0 + 25v^2(1)}{2} = 2u + \\frac{25}{2}v^2 \\\\[10pt]\nf_u &= \\frac{\\partial}{\\partial u}\\left(2u + \\frac{25}{2}v^2\\right) = 2 \\\\\nf_v &= \\frac{\\partial}{\\partial v}\\left(2u + \\frac{25}{2}v^2\\right) = 25v \\\\[10pt]\nf_u \\cdot f_v &= (2)(25v) = 50v\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch1_11",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 5x^2} - \\cos(3x)}{x^2}$.",
    "answer": "7",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sqrt{1 + 5x^2} - \\cos(3x)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{\\frac{5x}{\\sqrt{1 + 5x^2}} + 3\\sin(3x)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{ \\frac{5\\sqrt{1 + 5x^2} - 5x\\left(\\frac{5x}{\\sqrt{1 + 5x^2}}\\right)}{1 + 5x^2} + 9\\cos(3x) }{2} \\\\\n&= \\lim_{x \\to 0} \\frac{ \\frac{5 - 25x^2}{(1 + 5x^2)^{3/2}} + 9\\cos(3x) }{2} \\\\\n&= \\frac{5 + 9}{2} = 7\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch2_11",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{e^{2x} - \\ln(1+3x) - 1 - -1x}{x^2}$.",
    "answer": "\\frac{13}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{e^{2x} - \\ln(1+3x) - 1 - -1x}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{2e^{2x} - \\frac{3}{1+3x} - -1}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{4e^{2x} - 3(-1)(1+3x)^{-2}(3)}{2} \\\\\n&= \\lim_{x \\to 0} \\frac{4e^{2x} + \\frac{9}{(1+3x)^2}}{2} \\\\\n&= \\frac{4(1) + 9(1)}{2} = \\frac{13}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch3_11",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(6x)}{x^3}$.",
    "answer": "\\frac{104}{3}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(6x)}{x^3} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{2\\cos(2x) - \\left(2\\cos(6x) - 12x\\sin(6x)\\right)}{3x^2} \\\\\n&= \\lim_{x \\to 0} \\frac{2\\cos(2x) - 2\\cos(6x) + 12x\\sin(6x)}{3x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 12\\sin(6x) + 12\\sin(6x) + 72x\\cos(6x)}{6x} \\\\\n&= \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 24\\sin(6x) + 72x\\cos(6x)}{6x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-8\\cos(2x) + 144\\cos(6x) + 72\\cos(6x) - 432x\\sin(6x)}{6} \\\\\n&= \\frac{-8(1) + 216(1) - 0}{6} = \\frac{104}{3}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch4_11",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} (1 + 4\\sin x)^{\\frac{4}{x}}$.",
    "answer": "e^{16}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} (1 + 4\\sin x)^{\\frac{4}{x}} \\quad (1^{\\infty}) \\\\\n\\ln L &= \\lim_{x \\to 0} \\frac{4\\ln(1 + 4\\sin x)}{x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{4 \\cdot \\frac{4\\cos x}{1 + 4\\sin x}}{1} \\\\\n&= \\frac{16(1)}{1 + 0} = 16 \\\\\nL &= e^{16}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch5_11",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $L(y) = \\lim_{x \\to 0} \\frac{\\cosh(3xy) - \\cos(6xy)}{x^2}$. \\\\ Find the derivative $L'(y)$.",
    "answer": "45y",
    "steps": "\\begin{aligned}\nL(y) &= \\lim_{x \\to 0} \\frac{\\cosh(3xy) - \\cos(6xy)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{3y\\sinh(3xy) + 6y\\sin(6xy)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{9y^2\\cosh(3xy) + 36y^2\\cos(6xy)}{2} \\\\\n&= \\frac{9y^2(1) + 36y^2(1)}{2} = \\frac{45}{2}y^2 \\\\[10pt]\nL'(y) &= \\frac{d}{dy} \\left( \\frac{45}{2}y^2 \\right) = 45y\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch6_11",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $f(u,v) = \\lim_{x \\to 0} \\frac{e^{2 u x^2} - \\cos(2 v x)}{x^2}$. Compute the product $f_u \\cdot f_v$.",
    "answer": "8v",
    "steps": "\\begin{aligned}\nf(u,v) &= \\lim_{x \\to 0} \\frac{e^{2ux^2} - \\cos(2vx)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4ux e^{2ux^2} + 2v\\sin(2vx)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4u e^{2ux^2} + 4ux(4ux)e^{2ux^2} + 4v^2\\cos(2vx)}{2} \\\\\n&= \\frac{4u(1) + 0 + 4v^2(1)}{2} = 2u + \\frac{4}{2}v^2 \\\\[10pt]\nf_u &= \\frac{\\partial}{\\partial u}\\left(2u + \\frac{4}{2}v^2\\right) = 2 \\\\\nf_v &= \\frac{\\partial}{\\partial v}\\left(2u + \\frac{4}{2}v^2\\right) = 4v \\\\[10pt]\nf_u \\cdot f_v &= (2)(4v) = 8v\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch1_12",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 6x^2} - \\cos(3x)}{x^2}$.",
    "answer": "\\frac{15}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sqrt{1 + 6x^2} - \\cos(3x)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{\\frac{6x}{\\sqrt{1 + 6x^2}} + 3\\sin(3x)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{ \\frac{6\\sqrt{1 + 6x^2} - 6x\\left(\\frac{6x}{\\sqrt{1 + 6x^2}}\\right)}{1 + 6x^2} + 9\\cos(3x) }{2} \\\\\n&= \\lim_{x \\to 0} \\frac{ \\frac{6 - 36x^2}{(1 + 6x^2)^{3/2}} + 9\\cos(3x) }{2} \\\\\n&= \\frac{6 + 9}{2} = \\frac{15}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch2_12",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{e^{6x} - \\ln(1+5x) - 1 - 1x}{x^2}$.",
    "answer": "\\frac{61}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{e^{6x} - \\ln(1+5x) - 1 - 1x}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{6e^{6x} - \\frac{5}{1+5x} - 1}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{36e^{6x} - 5(-1)(1+5x)^{-2}(5)}{2} \\\\\n&= \\lim_{x \\to 0} \\frac{36e^{6x} + \\frac{25}{(1+5x)^2}}{2} \\\\\n&= \\frac{36(1) + 25(1)}{2} = \\frac{61}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch3_12",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sin(3x) - 3x\\cos(5x)}{x^3}$.",
    "answer": "33",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sin(3x) - 3x\\cos(5x)}{x^3} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{3\\cos(3x) - \\left(3\\cos(5x) - 15x\\sin(5x)\\right)}{3x^2} \\\\\n&= \\lim_{x \\to 0} \\frac{3\\cos(3x) - 3\\cos(5x) + 15x\\sin(5x)}{3x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-9\\sin(3x) + 15\\sin(5x) + 15\\sin(5x) + 75x\\cos(5x)}{6x} \\\\\n&= \\lim_{x \\to 0} \\frac{-9\\sin(3x) + 30\\sin(5x) + 75x\\cos(5x)}{6x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-27\\cos(3x) + 150\\cos(5x) + 75\\cos(5x) - 375x\\sin(5x)}{6} \\\\\n&= \\frac{-27(1) + 225(1) - 0}{6} = 33\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch4_12",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} (1 + 2\\sin x)^{\\frac{2}{x}}$.",
    "answer": "e^{4}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} (1 + 2\\sin x)^{\\frac{2}{x}} \\quad (1^{\\infty}) \\\\\n\\ln L &= \\lim_{x \\to 0} \\frac{2\\ln(1 + 2\\sin x)}{x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{2 \\cdot \\frac{2\\cos x}{1 + 2\\sin x}}{1} \\\\\n&= \\frac{4(1)}{1 + 0} = 4 \\\\\nL &= e^{4}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch5_12",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $L(y) = \\lim_{x \\to 0} \\frac{\\cosh(2xy) - \\cos(7xy)}{x^2}$. \\\\ Find the derivative $L'(y)$.",
    "answer": "53y",
    "steps": "\\begin{aligned}\nL(y) &= \\lim_{x \\to 0} \\frac{\\cosh(2xy) - \\cos(7xy)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{2y\\sinh(2xy) + 7y\\sin(7xy)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4y^2\\cosh(2xy) + 49y^2\\cos(7xy)}{2} \\\\\n&= \\frac{4y^2(1) + 49y^2(1)}{2} = \\frac{53}{2}y^2 \\\\[10pt]\nL'(y) &= \\frac{d}{dy} \\left( \\frac{53}{2}y^2 \\right) = 53y\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch6_12",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $f(u,v) = \\lim_{x \\to 0} \\frac{e^{5 u x^2} - \\cos(5 v x)}{x^2}$. Compute the product $f_u \\cdot f_v$.",
    "answer": "125v",
    "steps": "\\begin{aligned}\nf(u,v) &= \\lim_{x \\to 0} \\frac{e^{5ux^2} - \\cos(5vx)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{10ux e^{5ux^2} + 5v\\sin(5vx)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{10u e^{5ux^2} + 10ux(10ux)e^{5ux^2} + 25v^2\\cos(5vx)}{2} \\\\\n&= \\frac{10u(1) + 0 + 25v^2(1)}{2} = 5u + \\frac{25}{2}v^2 \\\\[10pt]\nf_u &= \\frac{\\partial}{\\partial u}\\left(5u + \\frac{25}{2}v^2\\right) = 5 \\\\\nf_v &= \\frac{\\partial}{\\partial v}\\left(5u + \\frac{25}{2}v^2\\right) = 25v \\\\[10pt]\nf_u \\cdot f_v &= (5)(25v) = 125v\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch1_13",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 5x^2} - \\cos(2x)}{x^2}$.",
    "answer": "\\frac{9}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sqrt{1 + 5x^2} - \\cos(2x)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{\\frac{5x}{\\sqrt{1 + 5x^2}} + 2\\sin(2x)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{ \\frac{5\\sqrt{1 + 5x^2} - 5x\\left(\\frac{5x}{\\sqrt{1 + 5x^2}}\\right)}{1 + 5x^2} + 4\\cos(2x) }{2} \\\\\n&= \\lim_{x \\to 0} \\frac{ \\frac{5 - 25x^2}{(1 + 5x^2)^{3/2}} + 4\\cos(2x) }{2} \\\\\n&= \\frac{5 + 4}{2} = \\frac{9}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch2_13",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{e^{4x} - \\ln(1+5x) - 1 - -1x}{x^2}$.",
    "answer": "\\frac{41}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{e^{4x} - \\ln(1+5x) - 1 - -1x}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{4e^{4x} - \\frac{5}{1+5x} - -1}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{16e^{4x} - 5(-1)(1+5x)^{-2}(5)}{2} \\\\\n&= \\lim_{x \\to 0} \\frac{16e^{4x} + \\frac{25}{(1+5x)^2}}{2} \\\\\n&= \\frac{16(1) + 25(1)}{2} = \\frac{41}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch3_13",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(6x)}{x^3}$.",
    "answer": "\\frac{104}{3}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(6x)}{x^3} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{2\\cos(2x) - \\left(2\\cos(6x) - 12x\\sin(6x)\\right)}{3x^2} \\\\\n&= \\lim_{x \\to 0} \\frac{2\\cos(2x) - 2\\cos(6x) + 12x\\sin(6x)}{3x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 12\\sin(6x) + 12\\sin(6x) + 72x\\cos(6x)}{6x} \\\\\n&= \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 24\\sin(6x) + 72x\\cos(6x)}{6x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-8\\cos(2x) + 144\\cos(6x) + 72\\cos(6x) - 432x\\sin(6x)}{6} \\\\\n&= \\frac{-8(1) + 216(1) - 0}{6} = \\frac{104}{3}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch4_13",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} (1 + 5\\sin x)^{\\frac{4}{x}}$.",
    "answer": "e^{20}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} (1 + 5\\sin x)^{\\frac{4}{x}} \\quad (1^{\\infty}) \\\\\n\\ln L &= \\lim_{x \\to 0} \\frac{4\\ln(1 + 5\\sin x)}{x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{4 \\cdot \\frac{5\\cos x}{1 + 5\\sin x}}{1} \\\\\n&= \\frac{20(1)}{1 + 0} = 20 \\\\\nL &= e^{20}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch5_13",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $L(y) = \\lim_{x \\to 0} \\frac{\\cosh(2xy) - \\cos(6xy)}{x^2}$. \\\\ Find the derivative $L'(y)$.",
    "answer": "40y",
    "steps": "\\begin{aligned}\nL(y) &= \\lim_{x \\to 0} \\frac{\\cosh(2xy) - \\cos(6xy)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{2y\\sinh(2xy) + 6y\\sin(6xy)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4y^2\\cosh(2xy) + 36y^2\\cos(6xy)}{2} \\\\\n&= \\frac{4y^2(1) + 36y^2(1)}{2} = 20y^2 \\\\[10pt]\nL'(y) &= \\frac{d}{dy} \\left( 20y^2 \\right) = 40y\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch6_13",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $f(u,v) = \\lim_{x \\to 0} \\frac{e^{3 u x^2} - \\cos(5 v x)}{x^2}$. Compute the product $f_u \\cdot f_v$.",
    "answer": "75v",
    "steps": "\\begin{aligned}\nf(u,v) &= \\lim_{x \\to 0} \\frac{e^{3ux^2} - \\cos(5vx)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{6ux e^{3ux^2} + 5v\\sin(5vx)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{6u e^{3ux^2} + 6ux(6ux)e^{3ux^2} + 25v^2\\cos(5vx)}{2} \\\\\n&= \\frac{6u(1) + 0 + 25v^2(1)}{2} = 3u + \\frac{25}{2}v^2 \\\\[10pt]\nf_u &= \\frac{\\partial}{\\partial u}\\left(3u + \\frac{25}{2}v^2\\right) = 3 \\\\\nf_v &= \\frac{\\partial}{\\partial v}\\left(3u + \\frac{25}{2}v^2\\right) = 25v \\\\[10pt]\nf_u \\cdot f_v &= (3)(25v) = 75v\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch1_14",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 2x^2} - \\cos(4x)}{x^2}$.",
    "answer": "9",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sqrt{1 + 2x^2} - \\cos(4x)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{\\frac{2x}{\\sqrt{1 + 2x^2}} + 4\\sin(4x)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{ \\frac{2\\sqrt{1 + 2x^2} - 2x\\left(\\frac{2x}{\\sqrt{1 + 2x^2}}\\right)}{1 + 2x^2} + 16\\cos(4x) }{2} \\\\\n&= \\lim_{x \\to 0} \\frac{ \\frac{2 - 4x^2}{(1 + 2x^2)^{3/2}} + 16\\cos(4x) }{2} \\\\\n&= \\frac{2 + 16}{2} = 9\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch2_14",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{e^{3x} - \\ln(1+2x) - 1 - 1x}{x^2}$.",
    "answer": "\\frac{13}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{e^{3x} - \\ln(1+2x) - 1 - 1x}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{3e^{3x} - \\frac{2}{1+2x} - 1}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{9e^{3x} - 2(-1)(1+2x)^{-2}(2)}{2} \\\\\n&= \\lim_{x \\to 0} \\frac{9e^{3x} + \\frac{4}{(1+2x)^2}}{2} \\\\\n&= \\frac{9(1) + 4(1)}{2} = \\frac{13}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch3_14",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(6x)}{x^3}$.",
    "answer": "\\frac{104}{3}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(6x)}{x^3} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{2\\cos(2x) - \\left(2\\cos(6x) - 12x\\sin(6x)\\right)}{3x^2} \\\\\n&= \\lim_{x \\to 0} \\frac{2\\cos(2x) - 2\\cos(6x) + 12x\\sin(6x)}{3x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 12\\sin(6x) + 12\\sin(6x) + 72x\\cos(6x)}{6x} \\\\\n&= \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 24\\sin(6x) + 72x\\cos(6x)}{6x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-8\\cos(2x) + 144\\cos(6x) + 72\\cos(6x) - 432x\\sin(6x)}{6} \\\\\n&= \\frac{-8(1) + 216(1) - 0}{6} = \\frac{104}{3}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch4_14",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} (1 + 4\\sin x)^{\\frac{5}{x}}$.",
    "answer": "e^{20}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} (1 + 4\\sin x)^{\\frac{5}{x}} \\quad (1^{\\infty}) \\\\\n\\ln L &= \\lim_{x \\to 0} \\frac{5\\ln(1 + 4\\sin x)}{x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{5 \\cdot \\frac{4\\cos x}{1 + 4\\sin x}}{1} \\\\\n&= \\frac{20(1)}{1 + 0} = 20 \\\\\nL &= e^{20}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch5_14",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $L(y) = \\lim_{x \\to 0} \\frac{\\cosh(4xy) - \\cos(7xy)}{x^2}$. \\\\ Find the derivative $L'(y)$.",
    "answer": "65y",
    "steps": "\\begin{aligned}\nL(y) &= \\lim_{x \\to 0} \\frac{\\cosh(4xy) - \\cos(7xy)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4y\\sinh(4xy) + 7y\\sin(7xy)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{16y^2\\cosh(4xy) + 49y^2\\cos(7xy)}{2} \\\\\n&= \\frac{16y^2(1) + 49y^2(1)}{2} = \\frac{65}{2}y^2 \\\\[10pt]\nL'(y) &= \\frac{d}{dy} \\left( \\frac{65}{2}y^2 \\right) = 65y\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch6_14",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $f(u,v) = \\lim_{x \\to 0} \\frac{e^{2 u x^2} - \\cos(5 v x)}{x^2}$. Compute the product $f_u \\cdot f_v$.",
    "answer": "50v",
    "steps": "\\begin{aligned}\nf(u,v) &= \\lim_{x \\to 0} \\frac{e^{2ux^2} - \\cos(5vx)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4ux e^{2ux^2} + 5v\\sin(5vx)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4u e^{2ux^2} + 4ux(4ux)e^{2ux^2} + 25v^2\\cos(5vx)}{2} \\\\\n&= \\frac{4u(1) + 0 + 25v^2(1)}{2} = 2u + \\frac{25}{2}v^2 \\\\[10pt]\nf_u &= \\frac{\\partial}{\\partial u}\\left(2u + \\frac{25}{2}v^2\\right) = 2 \\\\\nf_v &= \\frac{\\partial}{\\partial v}\\left(2u + \\frac{25}{2}v^2\\right) = 25v \\\\[10pt]\nf_u \\cdot f_v &= (2)(25v) = 50v\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch1_15",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 5x^2} - \\cos(4x)}{x^2}$.",
    "answer": "\\frac{21}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sqrt{1 + 5x^2} - \\cos(4x)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{\\frac{5x}{\\sqrt{1 + 5x^2}} + 4\\sin(4x)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{ \\frac{5\\sqrt{1 + 5x^2} - 5x\\left(\\frac{5x}{\\sqrt{1 + 5x^2}}\\right)}{1 + 5x^2} + 16\\cos(4x) }{2} \\\\\n&= \\lim_{x \\to 0} \\frac{ \\frac{5 - 25x^2}{(1 + 5x^2)^{3/2}} + 16\\cos(4x) }{2} \\\\\n&= \\frac{5 + 16}{2} = \\frac{21}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch2_15",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{e^{5x} - \\ln(1+4x) - 1 - 1x}{x^2}$.",
    "answer": "\\frac{41}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{e^{5x} - \\ln(1+4x) - 1 - 1x}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{5e^{5x} - \\frac{4}{1+4x} - 1}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{25e^{5x} - 4(-1)(1+4x)^{-2}(4)}{2} \\\\\n&= \\lim_{x \\to 0} \\frac{25e^{5x} + \\frac{16}{(1+4x)^2}}{2} \\\\\n&= \\frac{25(1) + 16(1)}{2} = \\frac{41}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch3_15",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sin(3x) - 3x\\cos(6x)}{x^3}$.",
    "answer": "\\frac{99}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sin(3x) - 3x\\cos(6x)}{x^3} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{3\\cos(3x) - \\left(3\\cos(6x) - 18x\\sin(6x)\\right)}{3x^2} \\\\\n&= \\lim_{x \\to 0} \\frac{3\\cos(3x) - 3\\cos(6x) + 18x\\sin(6x)}{3x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-9\\sin(3x) + 18\\sin(6x) + 18\\sin(6x) + 108x\\cos(6x)}{6x} \\\\\n&= \\lim_{x \\to 0} \\frac{-9\\sin(3x) + 36\\sin(6x) + 108x\\cos(6x)}{6x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-27\\cos(3x) + 216\\cos(6x) + 108\\cos(6x) - 648x\\sin(6x)}{6} \\\\\n&= \\frac{-27(1) + 324(1) - 0}{6} = \\frac{99}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch4_15",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} (1 + 5\\sin x)^{\\frac{5}{x}}$.",
    "answer": "e^{25}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} (1 + 5\\sin x)^{\\frac{5}{x}} \\quad (1^{\\infty}) \\\\\n\\ln L &= \\lim_{x \\to 0} \\frac{5\\ln(1 + 5\\sin x)}{x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{5 \\cdot \\frac{5\\cos x}{1 + 5\\sin x}}{1} \\\\\n&= \\frac{25(1)}{1 + 0} = 25 \\\\\nL &= e^{25}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch5_15",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $L(y) = \\lim_{x \\to 0} \\frac{\\cosh(4xy) - \\cos(6xy)}{x^2}$. \\\\ Find the derivative $L'(y)$.",
    "answer": "52y",
    "steps": "\\begin{aligned}\nL(y) &= \\lim_{x \\to 0} \\frac{\\cosh(4xy) - \\cos(6xy)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4y\\sinh(4xy) + 6y\\sin(6xy)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{16y^2\\cosh(4xy) + 36y^2\\cos(6xy)}{2} \\\\\n&= \\frac{16y^2(1) + 36y^2(1)}{2} = 26y^2 \\\\[10pt]\nL'(y) &= \\frac{d}{dy} \\left( 26y^2 \\right) = 52y\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch6_15",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $f(u,v) = \\lim_{x \\to 0} \\frac{e^{2 u x^2} - \\cos(2 v x)}{x^2}$. Compute the product $f_u \\cdot f_v$.",
    "answer": "8v",
    "steps": "\\begin{aligned}\nf(u,v) &= \\lim_{x \\to 0} \\frac{e^{2ux^2} - \\cos(2vx)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4ux e^{2ux^2} + 2v\\sin(2vx)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4u e^{2ux^2} + 4ux(4ux)e^{2ux^2} + 4v^2\\cos(2vx)}{2} \\\\\n&= \\frac{4u(1) + 0 + 4v^2(1)}{2} = 2u + \\frac{4}{2}v^2 \\\\[10pt]\nf_u &= \\frac{\\partial}{\\partial u}\\left(2u + \\frac{4}{2}v^2\\right) = 2 \\\\\nf_v &= \\frac{\\partial}{\\partial v}\\left(2u + \\frac{4}{2}v^2\\right) = 4v \\\\[10pt]\nf_u \\cdot f_v &= (2)(4v) = 8v\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch1_16",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 3x^2} - \\cos(5x)}{x^2}$.",
    "answer": "14",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sqrt{1 + 3x^2} - \\cos(5x)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{\\frac{3x}{\\sqrt{1 + 3x^2}} + 5\\sin(5x)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{ \\frac{3\\sqrt{1 + 3x^2} - 3x\\left(\\frac{3x}{\\sqrt{1 + 3x^2}}\\right)}{1 + 3x^2} + 25\\cos(5x) }{2} \\\\\n&= \\lim_{x \\to 0} \\frac{ \\frac{3 - 9x^2}{(1 + 3x^2)^{3/2}} + 25\\cos(5x) }{2} \\\\\n&= \\frac{3 + 25}{2} = 14\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch2_16",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{e^{3x} - \\ln(1+2x) - 1 - 1x}{x^2}$.",
    "answer": "\\frac{13}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{e^{3x} - \\ln(1+2x) - 1 - 1x}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{3e^{3x} - \\frac{2}{1+2x} - 1}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{9e^{3x} - 2(-1)(1+2x)^{-2}(2)}{2} \\\\\n&= \\lim_{x \\to 0} \\frac{9e^{3x} + \\frac{4}{(1+2x)^2}}{2} \\\\\n&= \\frac{9(1) + 4(1)}{2} = \\frac{13}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch3_16",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(4x)}{x^3}$.",
    "answer": "\\frac{44}{3}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(4x)}{x^3} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{2\\cos(2x) - \\left(2\\cos(4x) - 8x\\sin(4x)\\right)}{3x^2} \\\\\n&= \\lim_{x \\to 0} \\frac{2\\cos(2x) - 2\\cos(4x) + 8x\\sin(4x)}{3x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 8\\sin(4x) + 8\\sin(4x) + 32x\\cos(4x)}{6x} \\\\\n&= \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 16\\sin(4x) + 32x\\cos(4x)}{6x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-8\\cos(2x) + 64\\cos(4x) + 32\\cos(4x) - 128x\\sin(4x)}{6} \\\\\n&= \\frac{-8(1) + 96(1) - 0}{6} = \\frac{44}{3}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch4_16",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} (1 + 5\\sin x)^{\\frac{2}{x}}$.",
    "answer": "e^{10}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} (1 + 5\\sin x)^{\\frac{2}{x}} \\quad (1^{\\infty}) \\\\\n\\ln L &= \\lim_{x \\to 0} \\frac{2\\ln(1 + 5\\sin x)}{x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{2 \\cdot \\frac{5\\cos x}{1 + 5\\sin x}}{1} \\\\\n&= \\frac{10(1)}{1 + 0} = 10 \\\\\nL &= e^{10}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch5_16",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $L(y) = \\lim_{x \\to 0} \\frac{\\cosh(4xy) - \\cos(5xy)}{x^2}$. \\\\ Find the derivative $L'(y)$.",
    "answer": "41y",
    "steps": "\\begin{aligned}\nL(y) &= \\lim_{x \\to 0} \\frac{\\cosh(4xy) - \\cos(5xy)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4y\\sinh(4xy) + 5y\\sin(5xy)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{16y^2\\cosh(4xy) + 25y^2\\cos(5xy)}{2} \\\\\n&= \\frac{16y^2(1) + 25y^2(1)}{2} = \\frac{41}{2}y^2 \\\\[10pt]\nL'(y) &= \\frac{d}{dy} \\left( \\frac{41}{2}y^2 \\right) = 41y\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch6_16",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $f(u,v) = \\lim_{x \\to 0} \\frac{e^{4 u x^2} - \\cos(3 v x)}{x^2}$. Compute the product $f_u \\cdot f_v$.",
    "answer": "36v",
    "steps": "\\begin{aligned}\nf(u,v) &= \\lim_{x \\to 0} \\frac{e^{4ux^2} - \\cos(3vx)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{8ux e^{4ux^2} + 3v\\sin(3vx)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{8u e^{4ux^2} + 8ux(8ux)e^{4ux^2} + 9v^2\\cos(3vx)}{2} \\\\\n&= \\frac{8u(1) + 0 + 9v^2(1)}{2} = 4u + \\frac{9}{2}v^2 \\\\[10pt]\nf_u &= \\frac{\\partial}{\\partial u}\\left(4u + \\frac{9}{2}v^2\\right) = 4 \\\\\nf_v &= \\frac{\\partial}{\\partial v}\\left(4u + \\frac{9}{2}v^2\\right) = 9v \\\\[10pt]\nf_u \\cdot f_v &= (4)(9v) = 36v\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch1_17",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 4x^2} - \\cos(4x)}{x^2}$.",
    "answer": "10",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sqrt{1 + 4x^2} - \\cos(4x)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{\\frac{4x}{\\sqrt{1 + 4x^2}} + 4\\sin(4x)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{ \\frac{4\\sqrt{1 + 4x^2} - 4x\\left(\\frac{4x}{\\sqrt{1 + 4x^2}}\\right)}{1 + 4x^2} + 16\\cos(4x) }{2} \\\\\n&= \\lim_{x \\to 0} \\frac{ \\frac{4 - 16x^2}{(1 + 4x^2)^{3/2}} + 16\\cos(4x) }{2} \\\\\n&= \\frac{4 + 16}{2} = 10\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch2_17",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{e^{4x} - \\ln(1+3x) - 1 - 1x}{x^2}$.",
    "answer": "\\frac{25}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{e^{4x} - \\ln(1+3x) - 1 - 1x}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{4e^{4x} - \\frac{3}{1+3x} - 1}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{16e^{4x} - 3(-1)(1+3x)^{-2}(3)}{2} \\\\\n&= \\lim_{x \\to 0} \\frac{16e^{4x} + \\frac{9}{(1+3x)^2}}{2} \\\\\n&= \\frac{16(1) + 9(1)}{2} = \\frac{25}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch3_17",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sin(3x) - 3x\\cos(4x)}{x^3}$.",
    "answer": "\\frac{39}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sin(3x) - 3x\\cos(4x)}{x^3} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{3\\cos(3x) - \\left(3\\cos(4x) - 12x\\sin(4x)\\right)}{3x^2} \\\\\n&= \\lim_{x \\to 0} \\frac{3\\cos(3x) - 3\\cos(4x) + 12x\\sin(4x)}{3x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-9\\sin(3x) + 12\\sin(4x) + 12\\sin(4x) + 48x\\cos(4x)}{6x} \\\\\n&= \\lim_{x \\to 0} \\frac{-9\\sin(3x) + 24\\sin(4x) + 48x\\cos(4x)}{6x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-27\\cos(3x) + 96\\cos(4x) + 48\\cos(4x) - 192x\\sin(4x)}{6} \\\\\n&= \\frac{-27(1) + 144(1) - 0}{6} = \\frac{39}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch4_17",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} (1 + 4\\sin x)^{\\frac{3}{x}}$.",
    "answer": "e^{12}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} (1 + 4\\sin x)^{\\frac{3}{x}} \\quad (1^{\\infty}) \\\\\n\\ln L &= \\lim_{x \\to 0} \\frac{3\\ln(1 + 4\\sin x)}{x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{3 \\cdot \\frac{4\\cos x}{1 + 4\\sin x}}{1} \\\\\n&= \\frac{12(1)}{1 + 0} = 12 \\\\\nL &= e^{12}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch5_17",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $L(y) = \\lim_{x \\to 0} \\frac{\\cosh(2xy) - \\cos(7xy)}{x^2}$. \\\\ Find the derivative $L'(y)$.",
    "answer": "53y",
    "steps": "\\begin{aligned}\nL(y) &= \\lim_{x \\to 0} \\frac{\\cosh(2xy) - \\cos(7xy)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{2y\\sinh(2xy) + 7y\\sin(7xy)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4y^2\\cosh(2xy) + 49y^2\\cos(7xy)}{2} \\\\\n&= \\frac{4y^2(1) + 49y^2(1)}{2} = \\frac{53}{2}y^2 \\\\[10pt]\nL'(y) &= \\frac{d}{dy} \\left( \\frac{53}{2}y^2 \\right) = 53y\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch6_17",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $f(u,v) = \\lim_{x \\to 0} \\frac{e^{5 u x^2} - \\cos(3 v x)}{x^2}$. Compute the product $f_u \\cdot f_v$.",
    "answer": "45v",
    "steps": "\\begin{aligned}\nf(u,v) &= \\lim_{x \\to 0} \\frac{e^{5ux^2} - \\cos(3vx)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{10ux e^{5ux^2} + 3v\\sin(3vx)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{10u e^{5ux^2} + 10ux(10ux)e^{5ux^2} + 9v^2\\cos(3vx)}{2} \\\\\n&= \\frac{10u(1) + 0 + 9v^2(1)}{2} = 5u + \\frac{9}{2}v^2 \\\\[10pt]\nf_u &= \\frac{\\partial}{\\partial u}\\left(5u + \\frac{9}{2}v^2\\right) = 5 \\\\\nf_v &= \\frac{\\partial}{\\partial v}\\left(5u + \\frac{9}{2}v^2\\right) = 9v \\\\[10pt]\nf_u \\cdot f_v &= (5)(9v) = 45v\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch1_18",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 3x^2} - \\cos(2x)}{x^2}$.",
    "answer": "\\frac{7}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sqrt{1 + 3x^2} - \\cos(2x)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{\\frac{3x}{\\sqrt{1 + 3x^2}} + 2\\sin(2x)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{ \\frac{3\\sqrt{1 + 3x^2} - 3x\\left(\\frac{3x}{\\sqrt{1 + 3x^2}}\\right)}{1 + 3x^2} + 4\\cos(2x) }{2} \\\\\n&= \\lim_{x \\to 0} \\frac{ \\frac{3 - 9x^2}{(1 + 3x^2)^{3/2}} + 4\\cos(2x) }{2} \\\\\n&= \\frac{3 + 4}{2} = \\frac{7}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch2_18",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{e^{3x} - \\ln(1+5x) - 1 - -2x}{x^2}$.",
    "answer": "17",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{e^{3x} - \\ln(1+5x) - 1 - -2x}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{3e^{3x} - \\frac{5}{1+5x} - -2}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{9e^{3x} - 5(-1)(1+5x)^{-2}(5)}{2} \\\\\n&= \\lim_{x \\to 0} \\frac{9e^{3x} + \\frac{25}{(1+5x)^2}}{2} \\\\\n&= \\frac{9(1) + 25(1)}{2} = 17\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch3_18",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(4x)}{x^3}$.",
    "answer": "\\frac{44}{3}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(4x)}{x^3} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{2\\cos(2x) - \\left(2\\cos(4x) - 8x\\sin(4x)\\right)}{3x^2} \\\\\n&= \\lim_{x \\to 0} \\frac{2\\cos(2x) - 2\\cos(4x) + 8x\\sin(4x)}{3x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 8\\sin(4x) + 8\\sin(4x) + 32x\\cos(4x)}{6x} \\\\\n&= \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 16\\sin(4x) + 32x\\cos(4x)}{6x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-8\\cos(2x) + 64\\cos(4x) + 32\\cos(4x) - 128x\\sin(4x)}{6} \\\\\n&= \\frac{-8(1) + 96(1) - 0}{6} = \\frac{44}{3}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch4_18",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} (1 + 5\\sin x)^{\\frac{4}{x}}$.",
    "answer": "e^{20}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} (1 + 5\\sin x)^{\\frac{4}{x}} \\quad (1^{\\infty}) \\\\\n\\ln L &= \\lim_{x \\to 0} \\frac{4\\ln(1 + 5\\sin x)}{x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{4 \\cdot \\frac{5\\cos x}{1 + 5\\sin x}}{1} \\\\\n&= \\frac{20(1)}{1 + 0} = 20 \\\\\nL &= e^{20}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch5_18",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $L(y) = \\lim_{x \\to 0} \\frac{\\cosh(2xy) - \\cos(5xy)}{x^2}$. \\\\ Find the derivative $L'(y)$.",
    "answer": "29y",
    "steps": "\\begin{aligned}\nL(y) &= \\lim_{x \\to 0} \\frac{\\cosh(2xy) - \\cos(5xy)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{2y\\sinh(2xy) + 5y\\sin(5xy)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4y^2\\cosh(2xy) + 25y^2\\cos(5xy)}{2} \\\\\n&= \\frac{4y^2(1) + 25y^2(1)}{2} = \\frac{29}{2}y^2 \\\\[10pt]\nL'(y) &= \\frac{d}{dy} \\left( \\frac{29}{2}y^2 \\right) = 29y\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch6_18",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $f(u,v) = \\lim_{x \\to 0} \\frac{e^{5 u x^2} - \\cos(2 v x)}{x^2}$. Compute the product $f_u \\cdot f_v$.",
    "answer": "20v",
    "steps": "\\begin{aligned}\nf(u,v) &= \\lim_{x \\to 0} \\frac{e^{5ux^2} - \\cos(2vx)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{10ux e^{5ux^2} + 2v\\sin(2vx)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{10u e^{5ux^2} + 10ux(10ux)e^{5ux^2} + 4v^2\\cos(2vx)}{2} \\\\\n&= \\frac{10u(1) + 0 + 4v^2(1)}{2} = 5u + \\frac{4}{2}v^2 \\\\[10pt]\nf_u &= \\frac{\\partial}{\\partial u}\\left(5u + \\frac{4}{2}v^2\\right) = 5 \\\\\nf_v &= \\frac{\\partial}{\\partial v}\\left(5u + \\frac{4}{2}v^2\\right) = 4v \\\\[10pt]\nf_u \\cdot f_v &= (5)(4v) = 20v\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch1_19",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 2x^2} - \\cos(5x)}{x^2}$.",
    "answer": "\\frac{27}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sqrt{1 + 2x^2} - \\cos(5x)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{\\frac{2x}{\\sqrt{1 + 2x^2}} + 5\\sin(5x)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{ \\frac{2\\sqrt{1 + 2x^2} - 2x\\left(\\frac{2x}{\\sqrt{1 + 2x^2}}\\right)}{1 + 2x^2} + 25\\cos(5x) }{2} \\\\\n&= \\lim_{x \\to 0} \\frac{ \\frac{2 - 4x^2}{(1 + 2x^2)^{3/2}} + 25\\cos(5x) }{2} \\\\\n&= \\frac{2 + 25}{2} = \\frac{27}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch2_19",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{e^{5x} - \\ln(1+4x) - 1 - 1x}{x^2}$.",
    "answer": "\\frac{41}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{e^{5x} - \\ln(1+4x) - 1 - 1x}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{5e^{5x} - \\frac{4}{1+4x} - 1}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{25e^{5x} - 4(-1)(1+4x)^{-2}(4)}{2} \\\\\n&= \\lim_{x \\to 0} \\frac{25e^{5x} + \\frac{16}{(1+4x)^2}}{2} \\\\\n&= \\frac{25(1) + 16(1)}{2} = \\frac{41}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch3_19",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(6x)}{x^3}$.",
    "answer": "\\frac{104}{3}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(6x)}{x^3} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{2\\cos(2x) - \\left(2\\cos(6x) - 12x\\sin(6x)\\right)}{3x^2} \\\\\n&= \\lim_{x \\to 0} \\frac{2\\cos(2x) - 2\\cos(6x) + 12x\\sin(6x)}{3x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 12\\sin(6x) + 12\\sin(6x) + 72x\\cos(6x)}{6x} \\\\\n&= \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 24\\sin(6x) + 72x\\cos(6x)}{6x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-8\\cos(2x) + 144\\cos(6x) + 72\\cos(6x) - 432x\\sin(6x)}{6} \\\\\n&= \\frac{-8(1) + 216(1) - 0}{6} = \\frac{104}{3}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch4_19",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} (1 + 4\\sin x)^{\\frac{2}{x}}$.",
    "answer": "e^{8}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} (1 + 4\\sin x)^{\\frac{2}{x}} \\quad (1^{\\infty}) \\\\\n\\ln L &= \\lim_{x \\to 0} \\frac{2\\ln(1 + 4\\sin x)}{x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{2 \\cdot \\frac{4\\cos x}{1 + 4\\sin x}}{1} \\\\\n&= \\frac{8(1)}{1 + 0} = 8 \\\\\nL &= e^{8}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch5_19",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $L(y) = \\lim_{x \\to 0} \\frac{\\cosh(3xy) - \\cos(5xy)}{x^2}$. \\\\ Find the derivative $L'(y)$.",
    "answer": "34y",
    "steps": "\\begin{aligned}\nL(y) &= \\lim_{x \\to 0} \\frac{\\cosh(3xy) - \\cos(5xy)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{3y\\sinh(3xy) + 5y\\sin(5xy)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{9y^2\\cosh(3xy) + 25y^2\\cos(5xy)}{2} \\\\\n&= \\frac{9y^2(1) + 25y^2(1)}{2} = 17y^2 \\\\[10pt]\nL'(y) &= \\frac{d}{dy} \\left( 17y^2 \\right) = 34y\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch6_19",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $f(u,v) = \\lim_{x \\to 0} \\frac{e^{5 u x^2} - \\cos(2 v x)}{x^2}$. Compute the product $f_u \\cdot f_v$.",
    "answer": "20v",
    "steps": "\\begin{aligned}\nf(u,v) &= \\lim_{x \\to 0} \\frac{e^{5ux^2} - \\cos(2vx)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{10ux e^{5ux^2} + 2v\\sin(2vx)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{10u e^{5ux^2} + 10ux(10ux)e^{5ux^2} + 4v^2\\cos(2vx)}{2} \\\\\n&= \\frac{10u(1) + 0 + 4v^2(1)}{2} = 5u + \\frac{4}{2}v^2 \\\\[10pt]\nf_u &= \\frac{\\partial}{\\partial u}\\left(5u + \\frac{4}{2}v^2\\right) = 5 \\\\\nf_v &= \\frac{\\partial}{\\partial v}\\left(5u + \\frac{4}{2}v^2\\right) = 4v \\\\[10pt]\nf_u \\cdot f_v &= (5)(4v) = 20v\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch1_20",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 3x^2} - \\cos(5x)}{x^2}$.",
    "answer": "14",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sqrt{1 + 3x^2} - \\cos(5x)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{\\frac{3x}{\\sqrt{1 + 3x^2}} + 5\\sin(5x)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{ \\frac{3\\sqrt{1 + 3x^2} - 3x\\left(\\frac{3x}{\\sqrt{1 + 3x^2}}\\right)}{1 + 3x^2} + 25\\cos(5x) }{2} \\\\\n&= \\lim_{x \\to 0} \\frac{ \\frac{3 - 9x^2}{(1 + 3x^2)^{3/2}} + 25\\cos(5x) }{2} \\\\\n&= \\frac{3 + 25}{2} = 14\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch2_20",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{e^{2x} - \\ln(1+3x) - 1 - -1x}{x^2}$.",
    "answer": "\\frac{13}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{e^{2x} - \\ln(1+3x) - 1 - -1x}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{2e^{2x} - \\frac{3}{1+3x} - -1}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{4e^{2x} - 3(-1)(1+3x)^{-2}(3)}{2} \\\\\n&= \\lim_{x \\to 0} \\frac{4e^{2x} + \\frac{9}{(1+3x)^2}}{2} \\\\\n&= \\frac{4(1) + 9(1)}{2} = \\frac{13}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch3_20",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(4x)}{x^3}$.",
    "answer": "\\frac{44}{3}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(4x)}{x^3} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{2\\cos(2x) - \\left(2\\cos(4x) - 8x\\sin(4x)\\right)}{3x^2} \\\\\n&= \\lim_{x \\to 0} \\frac{2\\cos(2x) - 2\\cos(4x) + 8x\\sin(4x)}{3x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 8\\sin(4x) + 8\\sin(4x) + 32x\\cos(4x)}{6x} \\\\\n&= \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 16\\sin(4x) + 32x\\cos(4x)}{6x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-8\\cos(2x) + 64\\cos(4x) + 32\\cos(4x) - 128x\\sin(4x)}{6} \\\\\n&= \\frac{-8(1) + 96(1) - 0}{6} = \\frac{44}{3}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch4_20",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} (1 + 4\\sin x)^{\\frac{3}{x}}$.",
    "answer": "e^{12}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} (1 + 4\\sin x)^{\\frac{3}{x}} \\quad (1^{\\infty}) \\\\\n\\ln L &= \\lim_{x \\to 0} \\frac{3\\ln(1 + 4\\sin x)}{x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{3 \\cdot \\frac{4\\cos x}{1 + 4\\sin x}}{1} \\\\\n&= \\frac{12(1)}{1 + 0} = 12 \\\\\nL &= e^{12}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch5_20",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $L(y) = \\lim_{x \\to 0} \\frac{\\cosh(2xy) - \\cos(7xy)}{x^2}$. \\\\ Find the derivative $L'(y)$.",
    "answer": "53y",
    "steps": "\\begin{aligned}\nL(y) &= \\lim_{x \\to 0} \\frac{\\cosh(2xy) - \\cos(7xy)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{2y\\sinh(2xy) + 7y\\sin(7xy)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4y^2\\cosh(2xy) + 49y^2\\cos(7xy)}{2} \\\\\n&= \\frac{4y^2(1) + 49y^2(1)}{2} = \\frac{53}{2}y^2 \\\\[10pt]\nL'(y) &= \\frac{d}{dy} \\left( \\frac{53}{2}y^2 \\right) = 53y\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch6_20",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $f(u,v) = \\lim_{x \\to 0} \\frac{e^{2 u x^2} - \\cos(2 v x)}{x^2}$. Compute the product $f_u \\cdot f_v$.",
    "answer": "8v",
    "steps": "\\begin{aligned}\nf(u,v) &= \\lim_{x \\to 0} \\frac{e^{2ux^2} - \\cos(2vx)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4ux e^{2ux^2} + 2v\\sin(2vx)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4u e^{2ux^2} + 4ux(4ux)e^{2ux^2} + 4v^2\\cos(2vx)}{2} \\\\\n&= \\frac{4u(1) + 0 + 4v^2(1)}{2} = 2u + \\frac{4}{2}v^2 \\\\[10pt]\nf_u &= \\frac{\\partial}{\\partial u}\\left(2u + \\frac{4}{2}v^2\\right) = 2 \\\\\nf_v &= \\frac{\\partial}{\\partial v}\\left(2u + \\frac{4}{2}v^2\\right) = 4v \\\\[10pt]\nf_u \\cdot f_v &= (2)(4v) = 8v\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch1_21",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 3x^2} - \\cos(2x)}{x^2}$.",
    "answer": "\\frac{7}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sqrt{1 + 3x^2} - \\cos(2x)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{\\frac{3x}{\\sqrt{1 + 3x^2}} + 2\\sin(2x)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{ \\frac{3\\sqrt{1 + 3x^2} - 3x\\left(\\frac{3x}{\\sqrt{1 + 3x^2}}\\right)}{1 + 3x^2} + 4\\cos(2x) }{2} \\\\\n&= \\lim_{x \\to 0} \\frac{ \\frac{3 - 9x^2}{(1 + 3x^2)^{3/2}} + 4\\cos(2x) }{2} \\\\\n&= \\frac{3 + 4}{2} = \\frac{7}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch2_21",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{e^{5x} - \\ln(1+2x) - 1 - 3x}{x^2}$.",
    "answer": "\\frac{29}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{e^{5x} - \\ln(1+2x) - 1 - 3x}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{5e^{5x} - \\frac{2}{1+2x} - 3}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{25e^{5x} - 2(-1)(1+2x)^{-2}(2)}{2} \\\\\n&= \\lim_{x \\to 0} \\frac{25e^{5x} + \\frac{4}{(1+2x)^2}}{2} \\\\\n&= \\frac{25(1) + 4(1)}{2} = \\frac{29}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch3_21",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sin(3x) - 3x\\cos(6x)}{x^3}$.",
    "answer": "\\frac{99}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sin(3x) - 3x\\cos(6x)}{x^3} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{3\\cos(3x) - \\left(3\\cos(6x) - 18x\\sin(6x)\\right)}{3x^2} \\\\\n&= \\lim_{x \\to 0} \\frac{3\\cos(3x) - 3\\cos(6x) + 18x\\sin(6x)}{3x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-9\\sin(3x) + 18\\sin(6x) + 18\\sin(6x) + 108x\\cos(6x)}{6x} \\\\\n&= \\lim_{x \\to 0} \\frac{-9\\sin(3x) + 36\\sin(6x) + 108x\\cos(6x)}{6x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-27\\cos(3x) + 216\\cos(6x) + 108\\cos(6x) - 648x\\sin(6x)}{6} \\\\\n&= \\frac{-27(1) + 324(1) - 0}{6} = \\frac{99}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch4_21",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} (1 + 2\\sin x)^{\\frac{3}{x}}$.",
    "answer": "e^{6}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} (1 + 2\\sin x)^{\\frac{3}{x}} \\quad (1^{\\infty}) \\\\\n\\ln L &= \\lim_{x \\to 0} \\frac{3\\ln(1 + 2\\sin x)}{x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{3 \\cdot \\frac{2\\cos x}{1 + 2\\sin x}}{1} \\\\\n&= \\frac{6(1)}{1 + 0} = 6 \\\\\nL &= e^{6}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch5_21",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $L(y) = \\lim_{x \\to 0} \\frac{\\cosh(2xy) - \\cos(7xy)}{x^2}$. \\\\ Find the derivative $L'(y)$.",
    "answer": "53y",
    "steps": "\\begin{aligned}\nL(y) &= \\lim_{x \\to 0} \\frac{\\cosh(2xy) - \\cos(7xy)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{2y\\sinh(2xy) + 7y\\sin(7xy)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4y^2\\cosh(2xy) + 49y^2\\cos(7xy)}{2} \\\\\n&= \\frac{4y^2(1) + 49y^2(1)}{2} = \\frac{53}{2}y^2 \\\\[10pt]\nL'(y) &= \\frac{d}{dy} \\left( \\frac{53}{2}y^2 \\right) = 53y\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch6_21",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $f(u,v) = \\lim_{x \\to 0} \\frac{e^{5 u x^2} - \\cos(5 v x)}{x^2}$. Compute the product $f_u \\cdot f_v$.",
    "answer": "125v",
    "steps": "\\begin{aligned}\nf(u,v) &= \\lim_{x \\to 0} \\frac{e^{5ux^2} - \\cos(5vx)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{10ux e^{5ux^2} + 5v\\sin(5vx)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{10u e^{5ux^2} + 10ux(10ux)e^{5ux^2} + 25v^2\\cos(5vx)}{2} \\\\\n&= \\frac{10u(1) + 0 + 25v^2(1)}{2} = 5u + \\frac{25}{2}v^2 \\\\[10pt]\nf_u &= \\frac{\\partial}{\\partial u}\\left(5u + \\frac{25}{2}v^2\\right) = 5 \\\\\nf_v &= \\frac{\\partial}{\\partial v}\\left(5u + \\frac{25}{2}v^2\\right) = 25v \\\\[10pt]\nf_u \\cdot f_v &= (5)(25v) = 125v\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch1_22",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 3x^2} - \\cos(3x)}{x^2}$.",
    "answer": "6",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sqrt{1 + 3x^2} - \\cos(3x)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{\\frac{3x}{\\sqrt{1 + 3x^2}} + 3\\sin(3x)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{ \\frac{3\\sqrt{1 + 3x^2} - 3x\\left(\\frac{3x}{\\sqrt{1 + 3x^2}}\\right)}{1 + 3x^2} + 9\\cos(3x) }{2} \\\\\n&= \\lim_{x \\to 0} \\frac{ \\frac{3 - 9x^2}{(1 + 3x^2)^{3/2}} + 9\\cos(3x) }{2} \\\\\n&= \\frac{3 + 9}{2} = 6\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch2_22",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{e^{6x} - \\ln(1+5x) - 1 - 1x}{x^2}$.",
    "answer": "\\frac{61}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{e^{6x} - \\ln(1+5x) - 1 - 1x}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{6e^{6x} - \\frac{5}{1+5x} - 1}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{36e^{6x} - 5(-1)(1+5x)^{-2}(5)}{2} \\\\\n&= \\lim_{x \\to 0} \\frac{36e^{6x} + \\frac{25}{(1+5x)^2}}{2} \\\\\n&= \\frac{36(1) + 25(1)}{2} = \\frac{61}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch3_22",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(5x)}{x^3}$.",
    "answer": "\\frac{71}{3}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(5x)}{x^3} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{2\\cos(2x) - \\left(2\\cos(5x) - 10x\\sin(5x)\\right)}{3x^2} \\\\\n&= \\lim_{x \\to 0} \\frac{2\\cos(2x) - 2\\cos(5x) + 10x\\sin(5x)}{3x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 10\\sin(5x) + 10\\sin(5x) + 50x\\cos(5x)}{6x} \\\\\n&= \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 20\\sin(5x) + 50x\\cos(5x)}{6x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-8\\cos(2x) + 100\\cos(5x) + 50\\cos(5x) - 250x\\sin(5x)}{6} \\\\\n&= \\frac{-8(1) + 150(1) - 0}{6} = \\frac{71}{3}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch4_22",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} (1 + 3\\sin x)^{\\frac{5}{x}}$.",
    "answer": "e^{15}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} (1 + 3\\sin x)^{\\frac{5}{x}} \\quad (1^{\\infty}) \\\\\n\\ln L &= \\lim_{x \\to 0} \\frac{5\\ln(1 + 3\\sin x)}{x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{5 \\cdot \\frac{3\\cos x}{1 + 3\\sin x}}{1} \\\\\n&= \\frac{15(1)}{1 + 0} = 15 \\\\\nL &= e^{15}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch5_22",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $L(y) = \\lim_{x \\to 0} \\frac{\\cosh(3xy) - \\cos(7xy)}{x^2}$. \\\\ Find the derivative $L'(y)$.",
    "answer": "58y",
    "steps": "\\begin{aligned}\nL(y) &= \\lim_{x \\to 0} \\frac{\\cosh(3xy) - \\cos(7xy)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{3y\\sinh(3xy) + 7y\\sin(7xy)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{9y^2\\cosh(3xy) + 49y^2\\cos(7xy)}{2} \\\\\n&= \\frac{9y^2(1) + 49y^2(1)}{2} = 29y^2 \\\\[10pt]\nL'(y) &= \\frac{d}{dy} \\left( 29y^2 \\right) = 58y\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch6_22",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $f(u,v) = \\lim_{x \\to 0} \\frac{e^{3 u x^2} - \\cos(4 v x)}{x^2}$. Compute the product $f_u \\cdot f_v$.",
    "answer": "48v",
    "steps": "\\begin{aligned}\nf(u,v) &= \\lim_{x \\to 0} \\frac{e^{3ux^2} - \\cos(4vx)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{6ux e^{3ux^2} + 4v\\sin(4vx)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{6u e^{3ux^2} + 6ux(6ux)e^{3ux^2} + 16v^2\\cos(4vx)}{2} \\\\\n&= \\frac{6u(1) + 0 + 16v^2(1)}{2} = 3u + \\frac{16}{2}v^2 \\\\[10pt]\nf_u &= \\frac{\\partial}{\\partial u}\\left(3u + \\frac{16}{2}v^2\\right) = 3 \\\\\nf_v &= \\frac{\\partial}{\\partial v}\\left(3u + \\frac{16}{2}v^2\\right) = 16v \\\\[10pt]\nf_u \\cdot f_v &= (3)(16v) = 48v\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch1_23",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 6x^2} - \\cos(2x)}{x^2}$.",
    "answer": "5",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sqrt{1 + 6x^2} - \\cos(2x)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{\\frac{6x}{\\sqrt{1 + 6x^2}} + 2\\sin(2x)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{ \\frac{6\\sqrt{1 + 6x^2} - 6x\\left(\\frac{6x}{\\sqrt{1 + 6x^2}}\\right)}{1 + 6x^2} + 4\\cos(2x) }{2} \\\\\n&= \\lim_{x \\to 0} \\frac{ \\frac{6 - 36x^2}{(1 + 6x^2)^{3/2}} + 4\\cos(2x) }{2} \\\\\n&= \\frac{6 + 4}{2} = 5\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch2_23",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{e^{3x} - \\ln(1+5x) - 1 - -2x}{x^2}$.",
    "answer": "17",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{e^{3x} - \\ln(1+5x) - 1 - -2x}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{3e^{3x} - \\frac{5}{1+5x} - -2}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{9e^{3x} - 5(-1)(1+5x)^{-2}(5)}{2} \\\\\n&= \\lim_{x \\to 0} \\frac{9e^{3x} + \\frac{25}{(1+5x)^2}}{2} \\\\\n&= \\frac{9(1) + 25(1)}{2} = 17\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch3_23",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sin(3x) - 3x\\cos(6x)}{x^3}$.",
    "answer": "\\frac{99}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sin(3x) - 3x\\cos(6x)}{x^3} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{3\\cos(3x) - \\left(3\\cos(6x) - 18x\\sin(6x)\\right)}{3x^2} \\\\\n&= \\lim_{x \\to 0} \\frac{3\\cos(3x) - 3\\cos(6x) + 18x\\sin(6x)}{3x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-9\\sin(3x) + 18\\sin(6x) + 18\\sin(6x) + 108x\\cos(6x)}{6x} \\\\\n&= \\lim_{x \\to 0} \\frac{-9\\sin(3x) + 36\\sin(6x) + 108x\\cos(6x)}{6x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-27\\cos(3x) + 216\\cos(6x) + 108\\cos(6x) - 648x\\sin(6x)}{6} \\\\\n&= \\frac{-27(1) + 324(1) - 0}{6} = \\frac{99}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch4_23",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} (1 + 3\\sin x)^{\\frac{2}{x}}$.",
    "answer": "e^{6}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} (1 + 3\\sin x)^{\\frac{2}{x}} \\quad (1^{\\infty}) \\\\\n\\ln L &= \\lim_{x \\to 0} \\frac{2\\ln(1 + 3\\sin x)}{x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{2 \\cdot \\frac{3\\cos x}{1 + 3\\sin x}}{1} \\\\\n&= \\frac{6(1)}{1 + 0} = 6 \\\\\nL &= e^{6}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch5_23",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $L(y) = \\lim_{x \\to 0} \\frac{\\cosh(2xy) - \\cos(6xy)}{x^2}$. \\\\ Find the derivative $L'(y)$.",
    "answer": "40y",
    "steps": "\\begin{aligned}\nL(y) &= \\lim_{x \\to 0} \\frac{\\cosh(2xy) - \\cos(6xy)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{2y\\sinh(2xy) + 6y\\sin(6xy)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4y^2\\cosh(2xy) + 36y^2\\cos(6xy)}{2} \\\\\n&= \\frac{4y^2(1) + 36y^2(1)}{2} = 20y^2 \\\\[10pt]\nL'(y) &= \\frac{d}{dy} \\left( 20y^2 \\right) = 40y\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch6_23",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $f(u,v) = \\lim_{x \\to 0} \\frac{e^{2 u x^2} - \\cos(4 v x)}{x^2}$. Compute the product $f_u \\cdot f_v$.",
    "answer": "32v",
    "steps": "\\begin{aligned}\nf(u,v) &= \\lim_{x \\to 0} \\frac{e^{2ux^2} - \\cos(4vx)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4ux e^{2ux^2} + 4v\\sin(4vx)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4u e^{2ux^2} + 4ux(4ux)e^{2ux^2} + 16v^2\\cos(4vx)}{2} \\\\\n&= \\frac{4u(1) + 0 + 16v^2(1)}{2} = 2u + \\frac{16}{2}v^2 \\\\[10pt]\nf_u &= \\frac{\\partial}{\\partial u}\\left(2u + \\frac{16}{2}v^2\\right) = 2 \\\\\nf_v &= \\frac{\\partial}{\\partial v}\\left(2u + \\frac{16}{2}v^2\\right) = 16v \\\\[10pt]\nf_u \\cdot f_v &= (2)(16v) = 32v\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch1_24",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 5x^2} - \\cos(3x)}{x^2}$.",
    "answer": "7",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sqrt{1 + 5x^2} - \\cos(3x)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{\\frac{5x}{\\sqrt{1 + 5x^2}} + 3\\sin(3x)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{ \\frac{5\\sqrt{1 + 5x^2} - 5x\\left(\\frac{5x}{\\sqrt{1 + 5x^2}}\\right)}{1 + 5x^2} + 9\\cos(3x) }{2} \\\\\n&= \\lim_{x \\to 0} \\frac{ \\frac{5 - 25x^2}{(1 + 5x^2)^{3/2}} + 9\\cos(3x) }{2} \\\\\n&= \\frac{5 + 9}{2} = 7\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch2_24",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{e^{4x} - \\ln(1+2x) - 1 - 2x}{x^2}$.",
    "answer": "10",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{e^{4x} - \\ln(1+2x) - 1 - 2x}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{4e^{4x} - \\frac{2}{1+2x} - 2}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{16e^{4x} - 2(-1)(1+2x)^{-2}(2)}{2} \\\\\n&= \\lim_{x \\to 0} \\frac{16e^{4x} + \\frac{4}{(1+2x)^2}}{2} \\\\\n&= \\frac{16(1) + 4(1)}{2} = 10\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch3_24",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(5x)}{x^3}$.",
    "answer": "\\frac{71}{3}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(5x)}{x^3} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{2\\cos(2x) - \\left(2\\cos(5x) - 10x\\sin(5x)\\right)}{3x^2} \\\\\n&= \\lim_{x \\to 0} \\frac{2\\cos(2x) - 2\\cos(5x) + 10x\\sin(5x)}{3x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 10\\sin(5x) + 10\\sin(5x) + 50x\\cos(5x)}{6x} \\\\\n&= \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 20\\sin(5x) + 50x\\cos(5x)}{6x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-8\\cos(2x) + 100\\cos(5x) + 50\\cos(5x) - 250x\\sin(5x)}{6} \\\\\n&= \\frac{-8(1) + 150(1) - 0}{6} = \\frac{71}{3}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch4_24",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} (1 + 5\\sin x)^{\\frac{4}{x}}$.",
    "answer": "e^{20}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} (1 + 5\\sin x)^{\\frac{4}{x}} \\quad (1^{\\infty}) \\\\\n\\ln L &= \\lim_{x \\to 0} \\frac{4\\ln(1 + 5\\sin x)}{x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{4 \\cdot \\frac{5\\cos x}{1 + 5\\sin x}}{1} \\\\\n&= \\frac{20(1)}{1 + 0} = 20 \\\\\nL &= e^{20}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch5_24",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $L(y) = \\lim_{x \\to 0} \\frac{\\cosh(2xy) - \\cos(7xy)}{x^2}$. \\\\ Find the derivative $L'(y)$.",
    "answer": "53y",
    "steps": "\\begin{aligned}\nL(y) &= \\lim_{x \\to 0} \\frac{\\cosh(2xy) - \\cos(7xy)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{2y\\sinh(2xy) + 7y\\sin(7xy)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4y^2\\cosh(2xy) + 49y^2\\cos(7xy)}{2} \\\\\n&= \\frac{4y^2(1) + 49y^2(1)}{2} = \\frac{53}{2}y^2 \\\\[10pt]\nL'(y) &= \\frac{d}{dy} \\left( \\frac{53}{2}y^2 \\right) = 53y\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch6_24",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $f(u,v) = \\lim_{x \\to 0} \\frac{e^{3 u x^2} - \\cos(5 v x)}{x^2}$. Compute the product $f_u \\cdot f_v$.",
    "answer": "75v",
    "steps": "\\begin{aligned}\nf(u,v) &= \\lim_{x \\to 0} \\frac{e^{3ux^2} - \\cos(5vx)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{6ux e^{3ux^2} + 5v\\sin(5vx)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{6u e^{3ux^2} + 6ux(6ux)e^{3ux^2} + 25v^2\\cos(5vx)}{2} \\\\\n&= \\frac{6u(1) + 0 + 25v^2(1)}{2} = 3u + \\frac{25}{2}v^2 \\\\[10pt]\nf_u &= \\frac{\\partial}{\\partial u}\\left(3u + \\frac{25}{2}v^2\\right) = 3 \\\\\nf_v &= \\frac{\\partial}{\\partial v}\\left(3u + \\frac{25}{2}v^2\\right) = 25v \\\\[10pt]\nf_u \\cdot f_v &= (3)(25v) = 75v\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch1_25",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 3x^2} - \\cos(5x)}{x^2}$.",
    "answer": "14",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sqrt{1 + 3x^2} - \\cos(5x)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{\\frac{3x}{\\sqrt{1 + 3x^2}} + 5\\sin(5x)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{ \\frac{3\\sqrt{1 + 3x^2} - 3x\\left(\\frac{3x}{\\sqrt{1 + 3x^2}}\\right)}{1 + 3x^2} + 25\\cos(5x) }{2} \\\\\n&= \\lim_{x \\to 0} \\frac{ \\frac{3 - 9x^2}{(1 + 3x^2)^{3/2}} + 25\\cos(5x) }{2} \\\\\n&= \\frac{3 + 25}{2} = 14\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch2_25",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{e^{5x} - \\ln(1+2x) - 1 - 3x}{x^2}$.",
    "answer": "\\frac{29}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{e^{5x} - \\ln(1+2x) - 1 - 3x}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{5e^{5x} - \\frac{2}{1+2x} - 3}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{25e^{5x} - 2(-1)(1+2x)^{-2}(2)}{2} \\\\\n&= \\lim_{x \\to 0} \\frac{25e^{5x} + \\frac{4}{(1+2x)^2}}{2} \\\\\n&= \\frac{25(1) + 4(1)}{2} = \\frac{29}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch3_25",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sin(3x) - 3x\\cos(4x)}{x^3}$.",
    "answer": "\\frac{39}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sin(3x) - 3x\\cos(4x)}{x^3} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{3\\cos(3x) - \\left(3\\cos(4x) - 12x\\sin(4x)\\right)}{3x^2} \\\\\n&= \\lim_{x \\to 0} \\frac{3\\cos(3x) - 3\\cos(4x) + 12x\\sin(4x)}{3x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-9\\sin(3x) + 12\\sin(4x) + 12\\sin(4x) + 48x\\cos(4x)}{6x} \\\\\n&= \\lim_{x \\to 0} \\frac{-9\\sin(3x) + 24\\sin(4x) + 48x\\cos(4x)}{6x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-27\\cos(3x) + 96\\cos(4x) + 48\\cos(4x) - 192x\\sin(4x)}{6} \\\\\n&= \\frac{-27(1) + 144(1) - 0}{6} = \\frac{39}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch4_25",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} (1 + 3\\sin x)^{\\frac{3}{x}}$.",
    "answer": "e^{9}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} (1 + 3\\sin x)^{\\frac{3}{x}} \\quad (1^{\\infty}) \\\\\n\\ln L &= \\lim_{x \\to 0} \\frac{3\\ln(1 + 3\\sin x)}{x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{3 \\cdot \\frac{3\\cos x}{1 + 3\\sin x}}{1} \\\\\n&= \\frac{9(1)}{1 + 0} = 9 \\\\\nL &= e^{9}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch5_25",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $L(y) = \\lim_{x \\to 0} \\frac{\\cosh(3xy) - \\cos(7xy)}{x^2}$. \\\\ Find the derivative $L'(y)$.",
    "answer": "58y",
    "steps": "\\begin{aligned}\nL(y) &= \\lim_{x \\to 0} \\frac{\\cosh(3xy) - \\cos(7xy)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{3y\\sinh(3xy) + 7y\\sin(7xy)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{9y^2\\cosh(3xy) + 49y^2\\cos(7xy)}{2} \\\\\n&= \\frac{9y^2(1) + 49y^2(1)}{2} = 29y^2 \\\\[10pt]\nL'(y) &= \\frac{d}{dy} \\left( 29y^2 \\right) = 58y\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch6_25",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $f(u,v) = \\lim_{x \\to 0} \\frac{e^{4 u x^2} - \\cos(4 v x)}{x^2}$. Compute the product $f_u \\cdot f_v$.",
    "answer": "64v",
    "steps": "\\begin{aligned}\nf(u,v) &= \\lim_{x \\to 0} \\frac{e^{4ux^2} - \\cos(4vx)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{8ux e^{4ux^2} + 4v\\sin(4vx)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{8u e^{4ux^2} + 8ux(8ux)e^{4ux^2} + 16v^2\\cos(4vx)}{2} \\\\\n&= \\frac{8u(1) + 0 + 16v^2(1)}{2} = 4u + \\frac{16}{2}v^2 \\\\[10pt]\nf_u &= \\frac{\\partial}{\\partial u}\\left(4u + \\frac{16}{2}v^2\\right) = 4 \\\\\nf_v &= \\frac{\\partial}{\\partial v}\\left(4u + \\frac{16}{2}v^2\\right) = 16v \\\\[10pt]\nf_u \\cdot f_v &= (4)(16v) = 64v\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch1_26",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 2x^2} - \\cos(5x)}{x^2}$.",
    "answer": "\\frac{27}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sqrt{1 + 2x^2} - \\cos(5x)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{\\frac{2x}{\\sqrt{1 + 2x^2}} + 5\\sin(5x)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{ \\frac{2\\sqrt{1 + 2x^2} - 2x\\left(\\frac{2x}{\\sqrt{1 + 2x^2}}\\right)}{1 + 2x^2} + 25\\cos(5x) }{2} \\\\\n&= \\lim_{x \\to 0} \\frac{ \\frac{2 - 4x^2}{(1 + 2x^2)^{3/2}} + 25\\cos(5x) }{2} \\\\\n&= \\frac{2 + 25}{2} = \\frac{27}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch2_26",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{e^{4x} - \\ln(1+2x) - 1 - 2x}{x^2}$.",
    "answer": "10",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{e^{4x} - \\ln(1+2x) - 1 - 2x}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{4e^{4x} - \\frac{2}{1+2x} - 2}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{16e^{4x} - 2(-1)(1+2x)^{-2}(2)}{2} \\\\\n&= \\lim_{x \\to 0} \\frac{16e^{4x} + \\frac{4}{(1+2x)^2}}{2} \\\\\n&= \\frac{16(1) + 4(1)}{2} = 10\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch3_26",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sin(3x) - 3x\\cos(5x)}{x^3}$.",
    "answer": "33",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sin(3x) - 3x\\cos(5x)}{x^3} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{3\\cos(3x) - \\left(3\\cos(5x) - 15x\\sin(5x)\\right)}{3x^2} \\\\\n&= \\lim_{x \\to 0} \\frac{3\\cos(3x) - 3\\cos(5x) + 15x\\sin(5x)}{3x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-9\\sin(3x) + 15\\sin(5x) + 15\\sin(5x) + 75x\\cos(5x)}{6x} \\\\\n&= \\lim_{x \\to 0} \\frac{-9\\sin(3x) + 30\\sin(5x) + 75x\\cos(5x)}{6x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-27\\cos(3x) + 150\\cos(5x) + 75\\cos(5x) - 375x\\sin(5x)}{6} \\\\\n&= \\frac{-27(1) + 225(1) - 0}{6} = 33\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch4_26",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} (1 + 5\\sin x)^{\\frac{5}{x}}$.",
    "answer": "e^{25}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} (1 + 5\\sin x)^{\\frac{5}{x}} \\quad (1^{\\infty}) \\\\\n\\ln L &= \\lim_{x \\to 0} \\frac{5\\ln(1 + 5\\sin x)}{x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{5 \\cdot \\frac{5\\cos x}{1 + 5\\sin x}}{1} \\\\\n&= \\frac{25(1)}{1 + 0} = 25 \\\\\nL &= e^{25}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch5_26",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $L(y) = \\lim_{x \\to 0} \\frac{\\cosh(3xy) - \\cos(5xy)}{x^2}$. \\\\ Find the derivative $L'(y)$.",
    "answer": "34y",
    "steps": "\\begin{aligned}\nL(y) &= \\lim_{x \\to 0} \\frac{\\cosh(3xy) - \\cos(5xy)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{3y\\sinh(3xy) + 5y\\sin(5xy)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{9y^2\\cosh(3xy) + 25y^2\\cos(5xy)}{2} \\\\\n&= \\frac{9y^2(1) + 25y^2(1)}{2} = 17y^2 \\\\[10pt]\nL'(y) &= \\frac{d}{dy} \\left( 17y^2 \\right) = 34y\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch6_26",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $f(u,v) = \\lim_{x \\to 0} \\frac{e^{4 u x^2} - \\cos(3 v x)}{x^2}$. Compute the product $f_u \\cdot f_v$.",
    "answer": "36v",
    "steps": "\\begin{aligned}\nf(u,v) &= \\lim_{x \\to 0} \\frac{e^{4ux^2} - \\cos(3vx)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{8ux e^{4ux^2} + 3v\\sin(3vx)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{8u e^{4ux^2} + 8ux(8ux)e^{4ux^2} + 9v^2\\cos(3vx)}{2} \\\\\n&= \\frac{8u(1) + 0 + 9v^2(1)}{2} = 4u + \\frac{9}{2}v^2 \\\\[10pt]\nf_u &= \\frac{\\partial}{\\partial u}\\left(4u + \\frac{9}{2}v^2\\right) = 4 \\\\\nf_v &= \\frac{\\partial}{\\partial v}\\left(4u + \\frac{9}{2}v^2\\right) = 9v \\\\[10pt]\nf_u \\cdot f_v &= (4)(9v) = 36v\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch1_27",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 3x^2} - \\cos(3x)}{x^2}$.",
    "answer": "6",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sqrt{1 + 3x^2} - \\cos(3x)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{\\frac{3x}{\\sqrt{1 + 3x^2}} + 3\\sin(3x)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{ \\frac{3\\sqrt{1 + 3x^2} - 3x\\left(\\frac{3x}{\\sqrt{1 + 3x^2}}\\right)}{1 + 3x^2} + 9\\cos(3x) }{2} \\\\\n&= \\lim_{x \\to 0} \\frac{ \\frac{3 - 9x^2}{(1 + 3x^2)^{3/2}} + 9\\cos(3x) }{2} \\\\\n&= \\frac{3 + 9}{2} = 6\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch2_27",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{e^{5x} - \\ln(1+3x) - 1 - 2x}{x^2}$.",
    "answer": "17",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{e^{5x} - \\ln(1+3x) - 1 - 2x}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{5e^{5x} - \\frac{3}{1+3x} - 2}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{25e^{5x} - 3(-1)(1+3x)^{-2}(3)}{2} \\\\\n&= \\lim_{x \\to 0} \\frac{25e^{5x} + \\frac{9}{(1+3x)^2}}{2} \\\\\n&= \\frac{25(1) + 9(1)}{2} = 17\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch3_27",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sin(3x) - 3x\\cos(4x)}{x^3}$.",
    "answer": "\\frac{39}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sin(3x) - 3x\\cos(4x)}{x^3} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{3\\cos(3x) - \\left(3\\cos(4x) - 12x\\sin(4x)\\right)}{3x^2} \\\\\n&= \\lim_{x \\to 0} \\frac{3\\cos(3x) - 3\\cos(4x) + 12x\\sin(4x)}{3x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-9\\sin(3x) + 12\\sin(4x) + 12\\sin(4x) + 48x\\cos(4x)}{6x} \\\\\n&= \\lim_{x \\to 0} \\frac{-9\\sin(3x) + 24\\sin(4x) + 48x\\cos(4x)}{6x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-27\\cos(3x) + 96\\cos(4x) + 48\\cos(4x) - 192x\\sin(4x)}{6} \\\\\n&= \\frac{-27(1) + 144(1) - 0}{6} = \\frac{39}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch4_27",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} (1 + 5\\sin x)^{\\frac{3}{x}}$.",
    "answer": "e^{15}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} (1 + 5\\sin x)^{\\frac{3}{x}} \\quad (1^{\\infty}) \\\\\n\\ln L &= \\lim_{x \\to 0} \\frac{3\\ln(1 + 5\\sin x)}{x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{3 \\cdot \\frac{5\\cos x}{1 + 5\\sin x}}{1} \\\\\n&= \\frac{15(1)}{1 + 0} = 15 \\\\\nL &= e^{15}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch5_27",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $L(y) = \\lim_{x \\to 0} \\frac{\\cosh(2xy) - \\cos(7xy)}{x^2}$. \\\\ Find the derivative $L'(y)$.",
    "answer": "53y",
    "steps": "\\begin{aligned}\nL(y) &= \\lim_{x \\to 0} \\frac{\\cosh(2xy) - \\cos(7xy)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{2y\\sinh(2xy) + 7y\\sin(7xy)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4y^2\\cosh(2xy) + 49y^2\\cos(7xy)}{2} \\\\\n&= \\frac{4y^2(1) + 49y^2(1)}{2} = \\frac{53}{2}y^2 \\\\[10pt]\nL'(y) &= \\frac{d}{dy} \\left( \\frac{53}{2}y^2 \\right) = 53y\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch6_27",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $f(u,v) = \\lim_{x \\to 0} \\frac{e^{3 u x^2} - \\cos(4 v x)}{x^2}$. Compute the product $f_u \\cdot f_v$.",
    "answer": "48v",
    "steps": "\\begin{aligned}\nf(u,v) &= \\lim_{x \\to 0} \\frac{e^{3ux^2} - \\cos(4vx)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{6ux e^{3ux^2} + 4v\\sin(4vx)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{6u e^{3ux^2} + 6ux(6ux)e^{3ux^2} + 16v^2\\cos(4vx)}{2} \\\\\n&= \\frac{6u(1) + 0 + 16v^2(1)}{2} = 3u + \\frac{16}{2}v^2 \\\\[10pt]\nf_u &= \\frac{\\partial}{\\partial u}\\left(3u + \\frac{16}{2}v^2\\right) = 3 \\\\\nf_v &= \\frac{\\partial}{\\partial v}\\left(3u + \\frac{16}{2}v^2\\right) = 16v \\\\[10pt]\nf_u \\cdot f_v &= (3)(16v) = 48v\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch1_28",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 3x^2} - \\cos(3x)}{x^2}$.",
    "answer": "6",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sqrt{1 + 3x^2} - \\cos(3x)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{\\frac{3x}{\\sqrt{1 + 3x^2}} + 3\\sin(3x)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{ \\frac{3\\sqrt{1 + 3x^2} - 3x\\left(\\frac{3x}{\\sqrt{1 + 3x^2}}\\right)}{1 + 3x^2} + 9\\cos(3x) }{2} \\\\\n&= \\lim_{x \\to 0} \\frac{ \\frac{3 - 9x^2}{(1 + 3x^2)^{3/2}} + 9\\cos(3x) }{2} \\\\\n&= \\frac{3 + 9}{2} = 6\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch2_28",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{e^{2x} - \\ln(1+4x) - 1 - -2x}{x^2}$.",
    "answer": "10",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{e^{2x} - \\ln(1+4x) - 1 - -2x}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{2e^{2x} - \\frac{4}{1+4x} - -2}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{4e^{2x} - 4(-1)(1+4x)^{-2}(4)}{2} \\\\\n&= \\lim_{x \\to 0} \\frac{4e^{2x} + \\frac{16}{(1+4x)^2}}{2} \\\\\n&= \\frac{4(1) + 16(1)}{2} = 10\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch3_28",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(5x)}{x^3}$.",
    "answer": "\\frac{71}{3}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(5x)}{x^3} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{2\\cos(2x) - \\left(2\\cos(5x) - 10x\\sin(5x)\\right)}{3x^2} \\\\\n&= \\lim_{x \\to 0} \\frac{2\\cos(2x) - 2\\cos(5x) + 10x\\sin(5x)}{3x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 10\\sin(5x) + 10\\sin(5x) + 50x\\cos(5x)}{6x} \\\\\n&= \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 20\\sin(5x) + 50x\\cos(5x)}{6x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-8\\cos(2x) + 100\\cos(5x) + 50\\cos(5x) - 250x\\sin(5x)}{6} \\\\\n&= \\frac{-8(1) + 150(1) - 0}{6} = \\frac{71}{3}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch4_28",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} (1 + 3\\sin x)^{\\frac{2}{x}}$.",
    "answer": "e^{6}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} (1 + 3\\sin x)^{\\frac{2}{x}} \\quad (1^{\\infty}) \\\\\n\\ln L &= \\lim_{x \\to 0} \\frac{2\\ln(1 + 3\\sin x)}{x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{2 \\cdot \\frac{3\\cos x}{1 + 3\\sin x}}{1} \\\\\n&= \\frac{6(1)}{1 + 0} = 6 \\\\\nL &= e^{6}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch5_28",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $L(y) = \\lim_{x \\to 0} \\frac{\\cosh(3xy) - \\cos(7xy)}{x^2}$. \\\\ Find the derivative $L'(y)$.",
    "answer": "58y",
    "steps": "\\begin{aligned}\nL(y) &= \\lim_{x \\to 0} \\frac{\\cosh(3xy) - \\cos(7xy)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{3y\\sinh(3xy) + 7y\\sin(7xy)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{9y^2\\cosh(3xy) + 49y^2\\cos(7xy)}{2} \\\\\n&= \\frac{9y^2(1) + 49y^2(1)}{2} = 29y^2 \\\\[10pt]\nL'(y) &= \\frac{d}{dy} \\left( 29y^2 \\right) = 58y\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch6_28",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $f(u,v) = \\lim_{x \\to 0} \\frac{e^{2 u x^2} - \\cos(2 v x)}{x^2}$. Compute the product $f_u \\cdot f_v$.",
    "answer": "8v",
    "steps": "\\begin{aligned}\nf(u,v) &= \\lim_{x \\to 0} \\frac{e^{2ux^2} - \\cos(2vx)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4ux e^{2ux^2} + 2v\\sin(2vx)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4u e^{2ux^2} + 4ux(4ux)e^{2ux^2} + 4v^2\\cos(2vx)}{2} \\\\\n&= \\frac{4u(1) + 0 + 4v^2(1)}{2} = 2u + \\frac{4}{2}v^2 \\\\[10pt]\nf_u &= \\frac{\\partial}{\\partial u}\\left(2u + \\frac{4}{2}v^2\\right) = 2 \\\\\nf_v &= \\frac{\\partial}{\\partial v}\\left(2u + \\frac{4}{2}v^2\\right) = 4v \\\\[10pt]\nf_u \\cdot f_v &= (2)(4v) = 8v\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch1_29",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 3x^2} - \\cos(4x)}{x^2}$.",
    "answer": "\\frac{19}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sqrt{1 + 3x^2} - \\cos(4x)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{\\frac{3x}{\\sqrt{1 + 3x^2}} + 4\\sin(4x)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{ \\frac{3\\sqrt{1 + 3x^2} - 3x\\left(\\frac{3x}{\\sqrt{1 + 3x^2}}\\right)}{1 + 3x^2} + 16\\cos(4x) }{2} \\\\\n&= \\lim_{x \\to 0} \\frac{ \\frac{3 - 9x^2}{(1 + 3x^2)^{3/2}} + 16\\cos(4x) }{2} \\\\\n&= \\frac{3 + 16}{2} = \\frac{19}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch2_29",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{e^{4x} - \\ln(1+3x) - 1 - 1x}{x^2}$.",
    "answer": "\\frac{25}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{e^{4x} - \\ln(1+3x) - 1 - 1x}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{4e^{4x} - \\frac{3}{1+3x} - 1}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{16e^{4x} - 3(-1)(1+3x)^{-2}(3)}{2} \\\\\n&= \\lim_{x \\to 0} \\frac{16e^{4x} + \\frac{9}{(1+3x)^2}}{2} \\\\\n&= \\frac{16(1) + 9(1)}{2} = \\frac{25}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch3_29",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(6x)}{x^3}$.",
    "answer": "\\frac{104}{3}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(6x)}{x^3} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{2\\cos(2x) - \\left(2\\cos(6x) - 12x\\sin(6x)\\right)}{3x^2} \\\\\n&= \\lim_{x \\to 0} \\frac{2\\cos(2x) - 2\\cos(6x) + 12x\\sin(6x)}{3x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 12\\sin(6x) + 12\\sin(6x) + 72x\\cos(6x)}{6x} \\\\\n&= \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 24\\sin(6x) + 72x\\cos(6x)}{6x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-8\\cos(2x) + 144\\cos(6x) + 72\\cos(6x) - 432x\\sin(6x)}{6} \\\\\n&= \\frac{-8(1) + 216(1) - 0}{6} = \\frac{104}{3}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch4_29",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} (1 + 2\\sin x)^{\\frac{3}{x}}$.",
    "answer": "e^{6}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} (1 + 2\\sin x)^{\\frac{3}{x}} \\quad (1^{\\infty}) \\\\\n\\ln L &= \\lim_{x \\to 0} \\frac{3\\ln(1 + 2\\sin x)}{x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{3 \\cdot \\frac{2\\cos x}{1 + 2\\sin x}}{1} \\\\\n&= \\frac{6(1)}{1 + 0} = 6 \\\\\nL &= e^{6}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch5_29",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $L(y) = \\lim_{x \\to 0} \\frac{\\cosh(4xy) - \\cos(5xy)}{x^2}$. \\\\ Find the derivative $L'(y)$.",
    "answer": "41y",
    "steps": "\\begin{aligned}\nL(y) &= \\lim_{x \\to 0} \\frac{\\cosh(4xy) - \\cos(5xy)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4y\\sinh(4xy) + 5y\\sin(5xy)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{16y^2\\cosh(4xy) + 25y^2\\cos(5xy)}{2} \\\\\n&= \\frac{16y^2(1) + 25y^2(1)}{2} = \\frac{41}{2}y^2 \\\\[10pt]\nL'(y) &= \\frac{d}{dy} \\left( \\frac{41}{2}y^2 \\right) = 41y\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch6_29",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $f(u,v) = \\lim_{x \\to 0} \\frac{e^{5 u x^2} - \\cos(2 v x)}{x^2}$. Compute the product $f_u \\cdot f_v$.",
    "answer": "20v",
    "steps": "\\begin{aligned}\nf(u,v) &= \\lim_{x \\to 0} \\frac{e^{5ux^2} - \\cos(2vx)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{10ux e^{5ux^2} + 2v\\sin(2vx)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{10u e^{5ux^2} + 10ux(10ux)e^{5ux^2} + 4v^2\\cos(2vx)}{2} \\\\\n&= \\frac{10u(1) + 0 + 4v^2(1)}{2} = 5u + \\frac{4}{2}v^2 \\\\[10pt]\nf_u &= \\frac{\\partial}{\\partial u}\\left(5u + \\frac{4}{2}v^2\\right) = 5 \\\\\nf_v &= \\frac{\\partial}{\\partial v}\\left(5u + \\frac{4}{2}v^2\\right) = 4v \\\\[10pt]\nf_u \\cdot f_v &= (5)(4v) = 20v\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch1_30",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 4x^2} - \\cos(4x)}{x^2}$.",
    "answer": "10",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sqrt{1 + 4x^2} - \\cos(4x)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{\\frac{4x}{\\sqrt{1 + 4x^2}} + 4\\sin(4x)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{ \\frac{4\\sqrt{1 + 4x^2} - 4x\\left(\\frac{4x}{\\sqrt{1 + 4x^2}}\\right)}{1 + 4x^2} + 16\\cos(4x) }{2} \\\\\n&= \\lim_{x \\to 0} \\frac{ \\frac{4 - 16x^2}{(1 + 4x^2)^{3/2}} + 16\\cos(4x) }{2} \\\\\n&= \\frac{4 + 16}{2} = 10\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch2_30",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{e^{3x} - \\ln(1+5x) - 1 - -2x}{x^2}$.",
    "answer": "17",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{e^{3x} - \\ln(1+5x) - 1 - -2x}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{3e^{3x} - \\frac{5}{1+5x} - -2}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{9e^{3x} - 5(-1)(1+5x)^{-2}(5)}{2} \\\\\n&= \\lim_{x \\to 0} \\frac{9e^{3x} + \\frac{25}{(1+5x)^2}}{2} \\\\\n&= \\frac{9(1) + 25(1)}{2} = 17\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch3_30",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(6x)}{x^3}$.",
    "answer": "\\frac{104}{3}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(6x)}{x^3} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{2\\cos(2x) - \\left(2\\cos(6x) - 12x\\sin(6x)\\right)}{3x^2} \\\\\n&= \\lim_{x \\to 0} \\frac{2\\cos(2x) - 2\\cos(6x) + 12x\\sin(6x)}{3x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 12\\sin(6x) + 12\\sin(6x) + 72x\\cos(6x)}{6x} \\\\\n&= \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 24\\sin(6x) + 72x\\cos(6x)}{6x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-8\\cos(2x) + 144\\cos(6x) + 72\\cos(6x) - 432x\\sin(6x)}{6} \\\\\n&= \\frac{-8(1) + 216(1) - 0}{6} = \\frac{104}{3}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch4_30",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} (1 + 2\\sin x)^{\\frac{4}{x}}$.",
    "answer": "e^{8}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} (1 + 2\\sin x)^{\\frac{4}{x}} \\quad (1^{\\infty}) \\\\\n\\ln L &= \\lim_{x \\to 0} \\frac{4\\ln(1 + 2\\sin x)}{x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{4 \\cdot \\frac{2\\cos x}{1 + 2\\sin x}}{1} \\\\\n&= \\frac{8(1)}{1 + 0} = 8 \\\\\nL &= e^{8}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch5_30",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $L(y) = \\lim_{x \\to 0} \\frac{\\cosh(3xy) - \\cos(6xy)}{x^2}$. \\\\ Find the derivative $L'(y)$.",
    "answer": "45y",
    "steps": "\\begin{aligned}\nL(y) &= \\lim_{x \\to 0} \\frac{\\cosh(3xy) - \\cos(6xy)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{3y\\sinh(3xy) + 6y\\sin(6xy)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{9y^2\\cosh(3xy) + 36y^2\\cos(6xy)}{2} \\\\\n&= \\frac{9y^2(1) + 36y^2(1)}{2} = \\frac{45}{2}y^2 \\\\[10pt]\nL'(y) &= \\frac{d}{dy} \\left( \\frac{45}{2}y^2 \\right) = 45y\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch6_30",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $f(u,v) = \\lim_{x \\to 0} \\frac{e^{2 u x^2} - \\cos(3 v x)}{x^2}$. Compute the product $f_u \\cdot f_v$.",
    "answer": "18v",
    "steps": "\\begin{aligned}\nf(u,v) &= \\lim_{x \\to 0} \\frac{e^{2ux^2} - \\cos(3vx)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4ux e^{2ux^2} + 3v\\sin(3vx)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4u e^{2ux^2} + 4ux(4ux)e^{2ux^2} + 9v^2\\cos(3vx)}{2} \\\\\n&= \\frac{4u(1) + 0 + 9v^2(1)}{2} = 2u + \\frac{9}{2}v^2 \\\\[10pt]\nf_u &= \\frac{\\partial}{\\partial u}\\left(2u + \\frac{9}{2}v^2\\right) = 2 \\\\\nf_v &= \\frac{\\partial}{\\partial v}\\left(2u + \\frac{9}{2}v^2\\right) = 9v \\\\[10pt]\nf_u \\cdot f_v &= (2)(9v) = 18v\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch1_31",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 2x^2} - \\cos(2x)}{x^2}$.",
    "answer": "3",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sqrt{1 + 2x^2} - \\cos(2x)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{\\frac{2x}{\\sqrt{1 + 2x^2}} + 2\\sin(2x)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{ \\frac{2\\sqrt{1 + 2x^2} - 2x\\left(\\frac{2x}{\\sqrt{1 + 2x^2}}\\right)}{1 + 2x^2} + 4\\cos(2x) }{2} \\\\\n&= \\lim_{x \\to 0} \\frac{ \\frac{2 - 4x^2}{(1 + 2x^2)^{3/2}} + 4\\cos(2x) }{2} \\\\\n&= \\frac{2 + 4}{2} = 3\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch2_31",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{e^{5x} - \\ln(1+4x) - 1 - 1x}{x^2}$.",
    "answer": "\\frac{41}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{e^{5x} - \\ln(1+4x) - 1 - 1x}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{5e^{5x} - \\frac{4}{1+4x} - 1}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{25e^{5x} - 4(-1)(1+4x)^{-2}(4)}{2} \\\\\n&= \\lim_{x \\to 0} \\frac{25e^{5x} + \\frac{16}{(1+4x)^2}}{2} \\\\\n&= \\frac{25(1) + 16(1)}{2} = \\frac{41}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch3_31",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sin(3x) - 3x\\cos(4x)}{x^3}$.",
    "answer": "\\frac{39}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sin(3x) - 3x\\cos(4x)}{x^3} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{3\\cos(3x) - \\left(3\\cos(4x) - 12x\\sin(4x)\\right)}{3x^2} \\\\\n&= \\lim_{x \\to 0} \\frac{3\\cos(3x) - 3\\cos(4x) + 12x\\sin(4x)}{3x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-9\\sin(3x) + 12\\sin(4x) + 12\\sin(4x) + 48x\\cos(4x)}{6x} \\\\\n&= \\lim_{x \\to 0} \\frac{-9\\sin(3x) + 24\\sin(4x) + 48x\\cos(4x)}{6x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-27\\cos(3x) + 96\\cos(4x) + 48\\cos(4x) - 192x\\sin(4x)}{6} \\\\\n&= \\frac{-27(1) + 144(1) - 0}{6} = \\frac{39}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch4_31",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} (1 + 2\\sin x)^{\\frac{5}{x}}$.",
    "answer": "e^{10}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} (1 + 2\\sin x)^{\\frac{5}{x}} \\quad (1^{\\infty}) \\\\\n\\ln L &= \\lim_{x \\to 0} \\frac{5\\ln(1 + 2\\sin x)}{x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{5 \\cdot \\frac{2\\cos x}{1 + 2\\sin x}}{1} \\\\\n&= \\frac{10(1)}{1 + 0} = 10 \\\\\nL &= e^{10}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch5_31",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $L(y) = \\lim_{x \\to 0} \\frac{\\cosh(4xy) - \\cos(7xy)}{x^2}$. \\\\ Find the derivative $L'(y)$.",
    "answer": "65y",
    "steps": "\\begin{aligned}\nL(y) &= \\lim_{x \\to 0} \\frac{\\cosh(4xy) - \\cos(7xy)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4y\\sinh(4xy) + 7y\\sin(7xy)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{16y^2\\cosh(4xy) + 49y^2\\cos(7xy)}{2} \\\\\n&= \\frac{16y^2(1) + 49y^2(1)}{2} = \\frac{65}{2}y^2 \\\\[10pt]\nL'(y) &= \\frac{d}{dy} \\left( \\frac{65}{2}y^2 \\right) = 65y\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch6_31",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $f(u,v) = \\lim_{x \\to 0} \\frac{e^{5 u x^2} - \\cos(5 v x)}{x^2}$. Compute the product $f_u \\cdot f_v$.",
    "answer": "125v",
    "steps": "\\begin{aligned}\nf(u,v) &= \\lim_{x \\to 0} \\frac{e^{5ux^2} - \\cos(5vx)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{10ux e^{5ux^2} + 5v\\sin(5vx)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{10u e^{5ux^2} + 10ux(10ux)e^{5ux^2} + 25v^2\\cos(5vx)}{2} \\\\\n&= \\frac{10u(1) + 0 + 25v^2(1)}{2} = 5u + \\frac{25}{2}v^2 \\\\[10pt]\nf_u &= \\frac{\\partial}{\\partial u}\\left(5u + \\frac{25}{2}v^2\\right) = 5 \\\\\nf_v &= \\frac{\\partial}{\\partial v}\\left(5u + \\frac{25}{2}v^2\\right) = 25v \\\\[10pt]\nf_u \\cdot f_v &= (5)(25v) = 125v\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch1_32",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 6x^2} - \\cos(3x)}{x^2}$.",
    "answer": "\\frac{15}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sqrt{1 + 6x^2} - \\cos(3x)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{\\frac{6x}{\\sqrt{1 + 6x^2}} + 3\\sin(3x)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{ \\frac{6\\sqrt{1 + 6x^2} - 6x\\left(\\frac{6x}{\\sqrt{1 + 6x^2}}\\right)}{1 + 6x^2} + 9\\cos(3x) }{2} \\\\\n&= \\lim_{x \\to 0} \\frac{ \\frac{6 - 36x^2}{(1 + 6x^2)^{3/2}} + 9\\cos(3x) }{2} \\\\\n&= \\frac{6 + 9}{2} = \\frac{15}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch2_32",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{e^{4x} - \\ln(1+5x) - 1 - -1x}{x^2}$.",
    "answer": "\\frac{41}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{e^{4x} - \\ln(1+5x) - 1 - -1x}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{4e^{4x} - \\frac{5}{1+5x} - -1}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{16e^{4x} - 5(-1)(1+5x)^{-2}(5)}{2} \\\\\n&= \\lim_{x \\to 0} \\frac{16e^{4x} + \\frac{25}{(1+5x)^2}}{2} \\\\\n&= \\frac{16(1) + 25(1)}{2} = \\frac{41}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch3_32",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(5x)}{x^3}$.",
    "answer": "\\frac{71}{3}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(5x)}{x^3} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{2\\cos(2x) - \\left(2\\cos(5x) - 10x\\sin(5x)\\right)}{3x^2} \\\\\n&= \\lim_{x \\to 0} \\frac{2\\cos(2x) - 2\\cos(5x) + 10x\\sin(5x)}{3x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 10\\sin(5x) + 10\\sin(5x) + 50x\\cos(5x)}{6x} \\\\\n&= \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 20\\sin(5x) + 50x\\cos(5x)}{6x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-8\\cos(2x) + 100\\cos(5x) + 50\\cos(5x) - 250x\\sin(5x)}{6} \\\\\n&= \\frac{-8(1) + 150(1) - 0}{6} = \\frac{71}{3}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch4_32",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} (1 + 2\\sin x)^{\\frac{5}{x}}$.",
    "answer": "e^{10}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} (1 + 2\\sin x)^{\\frac{5}{x}} \\quad (1^{\\infty}) \\\\\n\\ln L &= \\lim_{x \\to 0} \\frac{5\\ln(1 + 2\\sin x)}{x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{5 \\cdot \\frac{2\\cos x}{1 + 2\\sin x}}{1} \\\\\n&= \\frac{10(1)}{1 + 0} = 10 \\\\\nL &= e^{10}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch5_32",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $L(y) = \\lim_{x \\to 0} \\frac{\\cosh(3xy) - \\cos(7xy)}{x^2}$. \\\\ Find the derivative $L'(y)$.",
    "answer": "58y",
    "steps": "\\begin{aligned}\nL(y) &= \\lim_{x \\to 0} \\frac{\\cosh(3xy) - \\cos(7xy)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{3y\\sinh(3xy) + 7y\\sin(7xy)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{9y^2\\cosh(3xy) + 49y^2\\cos(7xy)}{2} \\\\\n&= \\frac{9y^2(1) + 49y^2(1)}{2} = 29y^2 \\\\[10pt]\nL'(y) &= \\frac{d}{dy} \\left( 29y^2 \\right) = 58y\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch6_32",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $f(u,v) = \\lim_{x \\to 0} \\frac{e^{5 u x^2} - \\cos(3 v x)}{x^2}$. Compute the product $f_u \\cdot f_v$.",
    "answer": "45v",
    "steps": "\\begin{aligned}\nf(u,v) &= \\lim_{x \\to 0} \\frac{e^{5ux^2} - \\cos(3vx)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{10ux e^{5ux^2} + 3v\\sin(3vx)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{10u e^{5ux^2} + 10ux(10ux)e^{5ux^2} + 9v^2\\cos(3vx)}{2} \\\\\n&= \\frac{10u(1) + 0 + 9v^2(1)}{2} = 5u + \\frac{9}{2}v^2 \\\\[10pt]\nf_u &= \\frac{\\partial}{\\partial u}\\left(5u + \\frac{9}{2}v^2\\right) = 5 \\\\\nf_v &= \\frac{\\partial}{\\partial v}\\left(5u + \\frac{9}{2}v^2\\right) = 9v \\\\[10pt]\nf_u \\cdot f_v &= (5)(9v) = 45v\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch1_33",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 6x^2} - \\cos(5x)}{x^2}$.",
    "answer": "\\frac{31}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sqrt{1 + 6x^2} - \\cos(5x)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{\\frac{6x}{\\sqrt{1 + 6x^2}} + 5\\sin(5x)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{ \\frac{6\\sqrt{1 + 6x^2} - 6x\\left(\\frac{6x}{\\sqrt{1 + 6x^2}}\\right)}{1 + 6x^2} + 25\\cos(5x) }{2} \\\\\n&= \\lim_{x \\to 0} \\frac{ \\frac{6 - 36x^2}{(1 + 6x^2)^{3/2}} + 25\\cos(5x) }{2} \\\\\n&= \\frac{6 + 25}{2} = \\frac{31}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch2_33",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{e^{2x} - \\ln(1+4x) - 1 - -2x}{x^2}$.",
    "answer": "10",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{e^{2x} - \\ln(1+4x) - 1 - -2x}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{2e^{2x} - \\frac{4}{1+4x} - -2}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{4e^{2x} - 4(-1)(1+4x)^{-2}(4)}{2} \\\\\n&= \\lim_{x \\to 0} \\frac{4e^{2x} + \\frac{16}{(1+4x)^2}}{2} \\\\\n&= \\frac{4(1) + 16(1)}{2} = 10\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch3_33",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sin(3x) - 3x\\cos(5x)}{x^3}$.",
    "answer": "33",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sin(3x) - 3x\\cos(5x)}{x^3} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{3\\cos(3x) - \\left(3\\cos(5x) - 15x\\sin(5x)\\right)}{3x^2} \\\\\n&= \\lim_{x \\to 0} \\frac{3\\cos(3x) - 3\\cos(5x) + 15x\\sin(5x)}{3x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-9\\sin(3x) + 15\\sin(5x) + 15\\sin(5x) + 75x\\cos(5x)}{6x} \\\\\n&= \\lim_{x \\to 0} \\frac{-9\\sin(3x) + 30\\sin(5x) + 75x\\cos(5x)}{6x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-27\\cos(3x) + 150\\cos(5x) + 75\\cos(5x) - 375x\\sin(5x)}{6} \\\\\n&= \\frac{-27(1) + 225(1) - 0}{6} = 33\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch4_33",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} (1 + 2\\sin x)^{\\frac{4}{x}}$.",
    "answer": "e^{8}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} (1 + 2\\sin x)^{\\frac{4}{x}} \\quad (1^{\\infty}) \\\\\n\\ln L &= \\lim_{x \\to 0} \\frac{4\\ln(1 + 2\\sin x)}{x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{4 \\cdot \\frac{2\\cos x}{1 + 2\\sin x}}{1} \\\\\n&= \\frac{8(1)}{1 + 0} = 8 \\\\\nL &= e^{8}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch5_33",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $L(y) = \\lim_{x \\to 0} \\frac{\\cosh(4xy) - \\cos(6xy)}{x^2}$. \\\\ Find the derivative $L'(y)$.",
    "answer": "52y",
    "steps": "\\begin{aligned}\nL(y) &= \\lim_{x \\to 0} \\frac{\\cosh(4xy) - \\cos(6xy)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4y\\sinh(4xy) + 6y\\sin(6xy)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{16y^2\\cosh(4xy) + 36y^2\\cos(6xy)}{2} \\\\\n&= \\frac{16y^2(1) + 36y^2(1)}{2} = 26y^2 \\\\[10pt]\nL'(y) &= \\frac{d}{dy} \\left( 26y^2 \\right) = 52y\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch6_33",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $f(u,v) = \\lim_{x \\to 0} \\frac{e^{2 u x^2} - \\cos(2 v x)}{x^2}$. Compute the product $f_u \\cdot f_v$.",
    "answer": "8v",
    "steps": "\\begin{aligned}\nf(u,v) &= \\lim_{x \\to 0} \\frac{e^{2ux^2} - \\cos(2vx)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4ux e^{2ux^2} + 2v\\sin(2vx)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4u e^{2ux^2} + 4ux(4ux)e^{2ux^2} + 4v^2\\cos(2vx)}{2} \\\\\n&= \\frac{4u(1) + 0 + 4v^2(1)}{2} = 2u + \\frac{4}{2}v^2 \\\\[10pt]\nf_u &= \\frac{\\partial}{\\partial u}\\left(2u + \\frac{4}{2}v^2\\right) = 2 \\\\\nf_v &= \\frac{\\partial}{\\partial v}\\left(2u + \\frac{4}{2}v^2\\right) = 4v \\\\[10pt]\nf_u \\cdot f_v &= (2)(4v) = 8v\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch1_34",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 6x^2} - \\cos(3x)}{x^2}$.",
    "answer": "\\frac{15}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sqrt{1 + 6x^2} - \\cos(3x)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{\\frac{6x}{\\sqrt{1 + 6x^2}} + 3\\sin(3x)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{ \\frac{6\\sqrt{1 + 6x^2} - 6x\\left(\\frac{6x}{\\sqrt{1 + 6x^2}}\\right)}{1 + 6x^2} + 9\\cos(3x) }{2} \\\\\n&= \\lim_{x \\to 0} \\frac{ \\frac{6 - 36x^2}{(1 + 6x^2)^{3/2}} + 9\\cos(3x) }{2} \\\\\n&= \\frac{6 + 9}{2} = \\frac{15}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch2_34",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{e^{4x} - \\ln(1+3x) - 1 - 1x}{x^2}$.",
    "answer": "\\frac{25}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{e^{4x} - \\ln(1+3x) - 1 - 1x}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{4e^{4x} - \\frac{3}{1+3x} - 1}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{16e^{4x} - 3(-1)(1+3x)^{-2}(3)}{2} \\\\\n&= \\lim_{x \\to 0} \\frac{16e^{4x} + \\frac{9}{(1+3x)^2}}{2} \\\\\n&= \\frac{16(1) + 9(1)}{2} = \\frac{25}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch3_34",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(5x)}{x^3}$.",
    "answer": "\\frac{71}{3}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(5x)}{x^3} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{2\\cos(2x) - \\left(2\\cos(5x) - 10x\\sin(5x)\\right)}{3x^2} \\\\\n&= \\lim_{x \\to 0} \\frac{2\\cos(2x) - 2\\cos(5x) + 10x\\sin(5x)}{3x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 10\\sin(5x) + 10\\sin(5x) + 50x\\cos(5x)}{6x} \\\\\n&= \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 20\\sin(5x) + 50x\\cos(5x)}{6x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-8\\cos(2x) + 100\\cos(5x) + 50\\cos(5x) - 250x\\sin(5x)}{6} \\\\\n&= \\frac{-8(1) + 150(1) - 0}{6} = \\frac{71}{3}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch4_34",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} (1 + 5\\sin x)^{\\frac{2}{x}}$.",
    "answer": "e^{10}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} (1 + 5\\sin x)^{\\frac{2}{x}} \\quad (1^{\\infty}) \\\\\n\\ln L &= \\lim_{x \\to 0} \\frac{2\\ln(1 + 5\\sin x)}{x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{2 \\cdot \\frac{5\\cos x}{1 + 5\\sin x}}{1} \\\\\n&= \\frac{10(1)}{1 + 0} = 10 \\\\\nL &= e^{10}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch5_34",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $L(y) = \\lim_{x \\to 0} \\frac{\\cosh(3xy) - \\cos(6xy)}{x^2}$. \\\\ Find the derivative $L'(y)$.",
    "answer": "45y",
    "steps": "\\begin{aligned}\nL(y) &= \\lim_{x \\to 0} \\frac{\\cosh(3xy) - \\cos(6xy)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{3y\\sinh(3xy) + 6y\\sin(6xy)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{9y^2\\cosh(3xy) + 36y^2\\cos(6xy)}{2} \\\\\n&= \\frac{9y^2(1) + 36y^2(1)}{2} = \\frac{45}{2}y^2 \\\\[10pt]\nL'(y) &= \\frac{d}{dy} \\left( \\frac{45}{2}y^2 \\right) = 45y\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch6_34",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $f(u,v) = \\lim_{x \\to 0} \\frac{e^{3 u x^2} - \\cos(5 v x)}{x^2}$. Compute the product $f_u \\cdot f_v$.",
    "answer": "75v",
    "steps": "\\begin{aligned}\nf(u,v) &= \\lim_{x \\to 0} \\frac{e^{3ux^2} - \\cos(5vx)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{6ux e^{3ux^2} + 5v\\sin(5vx)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{6u e^{3ux^2} + 6ux(6ux)e^{3ux^2} + 25v^2\\cos(5vx)}{2} \\\\\n&= \\frac{6u(1) + 0 + 25v^2(1)}{2} = 3u + \\frac{25}{2}v^2 \\\\[10pt]\nf_u &= \\frac{\\partial}{\\partial u}\\left(3u + \\frac{25}{2}v^2\\right) = 3 \\\\\nf_v &= \\frac{\\partial}{\\partial v}\\left(3u + \\frac{25}{2}v^2\\right) = 25v \\\\[10pt]\nf_u \\cdot f_v &= (3)(25v) = 75v\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch1_35",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 2x^2} - \\cos(2x)}{x^2}$.",
    "answer": "3",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sqrt{1 + 2x^2} - \\cos(2x)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{\\frac{2x}{\\sqrt{1 + 2x^2}} + 2\\sin(2x)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{ \\frac{2\\sqrt{1 + 2x^2} - 2x\\left(\\frac{2x}{\\sqrt{1 + 2x^2}}\\right)}{1 + 2x^2} + 4\\cos(2x) }{2} \\\\\n&= \\lim_{x \\to 0} \\frac{ \\frac{2 - 4x^2}{(1 + 2x^2)^{3/2}} + 4\\cos(2x) }{2} \\\\\n&= \\frac{2 + 4}{2} = 3\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch2_35",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{e^{3x} - \\ln(1+2x) - 1 - 1x}{x^2}$.",
    "answer": "\\frac{13}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{e^{3x} - \\ln(1+2x) - 1 - 1x}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{3e^{3x} - \\frac{2}{1+2x} - 1}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{9e^{3x} - 2(-1)(1+2x)^{-2}(2)}{2} \\\\\n&= \\lim_{x \\to 0} \\frac{9e^{3x} + \\frac{4}{(1+2x)^2}}{2} \\\\\n&= \\frac{9(1) + 4(1)}{2} = \\frac{13}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch3_35",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sin(3x) - 3x\\cos(5x)}{x^3}$.",
    "answer": "33",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sin(3x) - 3x\\cos(5x)}{x^3} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{3\\cos(3x) - \\left(3\\cos(5x) - 15x\\sin(5x)\\right)}{3x^2} \\\\\n&= \\lim_{x \\to 0} \\frac{3\\cos(3x) - 3\\cos(5x) + 15x\\sin(5x)}{3x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-9\\sin(3x) + 15\\sin(5x) + 15\\sin(5x) + 75x\\cos(5x)}{6x} \\\\\n&= \\lim_{x \\to 0} \\frac{-9\\sin(3x) + 30\\sin(5x) + 75x\\cos(5x)}{6x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-27\\cos(3x) + 150\\cos(5x) + 75\\cos(5x) - 375x\\sin(5x)}{6} \\\\\n&= \\frac{-27(1) + 225(1) - 0}{6} = 33\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch4_35",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} (1 + 3\\sin x)^{\\frac{2}{x}}$.",
    "answer": "e^{6}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} (1 + 3\\sin x)^{\\frac{2}{x}} \\quad (1^{\\infty}) \\\\\n\\ln L &= \\lim_{x \\to 0} \\frac{2\\ln(1 + 3\\sin x)}{x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{2 \\cdot \\frac{3\\cos x}{1 + 3\\sin x}}{1} \\\\\n&= \\frac{6(1)}{1 + 0} = 6 \\\\\nL &= e^{6}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch5_35",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $L(y) = \\lim_{x \\to 0} \\frac{\\cosh(2xy) - \\cos(5xy)}{x^2}$. \\\\ Find the derivative $L'(y)$.",
    "answer": "29y",
    "steps": "\\begin{aligned}\nL(y) &= \\lim_{x \\to 0} \\frac{\\cosh(2xy) - \\cos(5xy)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{2y\\sinh(2xy) + 5y\\sin(5xy)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4y^2\\cosh(2xy) + 25y^2\\cos(5xy)}{2} \\\\\n&= \\frac{4y^2(1) + 25y^2(1)}{2} = \\frac{29}{2}y^2 \\\\[10pt]\nL'(y) &= \\frac{d}{dy} \\left( \\frac{29}{2}y^2 \\right) = 29y\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch6_35",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $f(u,v) = \\lim_{x \\to 0} \\frac{e^{4 u x^2} - \\cos(4 v x)}{x^2}$. Compute the product $f_u \\cdot f_v$.",
    "answer": "64v",
    "steps": "\\begin{aligned}\nf(u,v) &= \\lim_{x \\to 0} \\frac{e^{4ux^2} - \\cos(4vx)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{8ux e^{4ux^2} + 4v\\sin(4vx)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{8u e^{4ux^2} + 8ux(8ux)e^{4ux^2} + 16v^2\\cos(4vx)}{2} \\\\\n&= \\frac{8u(1) + 0 + 16v^2(1)}{2} = 4u + \\frac{16}{2}v^2 \\\\[10pt]\nf_u &= \\frac{\\partial}{\\partial u}\\left(4u + \\frac{16}{2}v^2\\right) = 4 \\\\\nf_v &= \\frac{\\partial}{\\partial v}\\left(4u + \\frac{16}{2}v^2\\right) = 16v \\\\[10pt]\nf_u \\cdot f_v &= (4)(16v) = 64v\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch1_36",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 6x^2} - \\cos(2x)}{x^2}$.",
    "answer": "5",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sqrt{1 + 6x^2} - \\cos(2x)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{\\frac{6x}{\\sqrt{1 + 6x^2}} + 2\\sin(2x)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{ \\frac{6\\sqrt{1 + 6x^2} - 6x\\left(\\frac{6x}{\\sqrt{1 + 6x^2}}\\right)}{1 + 6x^2} + 4\\cos(2x) }{2} \\\\\n&= \\lim_{x \\to 0} \\frac{ \\frac{6 - 36x^2}{(1 + 6x^2)^{3/2}} + 4\\cos(2x) }{2} \\\\\n&= \\frac{6 + 4}{2} = 5\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch2_36",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{e^{6x} - \\ln(1+5x) - 1 - 1x}{x^2}$.",
    "answer": "\\frac{61}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{e^{6x} - \\ln(1+5x) - 1 - 1x}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{6e^{6x} - \\frac{5}{1+5x} - 1}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{36e^{6x} - 5(-1)(1+5x)^{-2}(5)}{2} \\\\\n&= \\lim_{x \\to 0} \\frac{36e^{6x} + \\frac{25}{(1+5x)^2}}{2} \\\\\n&= \\frac{36(1) + 25(1)}{2} = \\frac{61}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch3_36",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sin(3x) - 3x\\cos(5x)}{x^3}$.",
    "answer": "33",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sin(3x) - 3x\\cos(5x)}{x^3} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{3\\cos(3x) - \\left(3\\cos(5x) - 15x\\sin(5x)\\right)}{3x^2} \\\\\n&= \\lim_{x \\to 0} \\frac{3\\cos(3x) - 3\\cos(5x) + 15x\\sin(5x)}{3x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-9\\sin(3x) + 15\\sin(5x) + 15\\sin(5x) + 75x\\cos(5x)}{6x} \\\\\n&= \\lim_{x \\to 0} \\frac{-9\\sin(3x) + 30\\sin(5x) + 75x\\cos(5x)}{6x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-27\\cos(3x) + 150\\cos(5x) + 75\\cos(5x) - 375x\\sin(5x)}{6} \\\\\n&= \\frac{-27(1) + 225(1) - 0}{6} = 33\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch4_36",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} (1 + 4\\sin x)^{\\frac{5}{x}}$.",
    "answer": "e^{20}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} (1 + 4\\sin x)^{\\frac{5}{x}} \\quad (1^{\\infty}) \\\\\n\\ln L &= \\lim_{x \\to 0} \\frac{5\\ln(1 + 4\\sin x)}{x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{5 \\cdot \\frac{4\\cos x}{1 + 4\\sin x}}{1} \\\\\n&= \\frac{20(1)}{1 + 0} = 20 \\\\\nL &= e^{20}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch5_36",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $L(y) = \\lim_{x \\to 0} \\frac{\\cosh(3xy) - \\cos(6xy)}{x^2}$. \\\\ Find the derivative $L'(y)$.",
    "answer": "45y",
    "steps": "\\begin{aligned}\nL(y) &= \\lim_{x \\to 0} \\frac{\\cosh(3xy) - \\cos(6xy)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{3y\\sinh(3xy) + 6y\\sin(6xy)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{9y^2\\cosh(3xy) + 36y^2\\cos(6xy)}{2} \\\\\n&= \\frac{9y^2(1) + 36y^2(1)}{2} = \\frac{45}{2}y^2 \\\\[10pt]\nL'(y) &= \\frac{d}{dy} \\left( \\frac{45}{2}y^2 \\right) = 45y\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch6_36",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $f(u,v) = \\lim_{x \\to 0} \\frac{e^{2 u x^2} - \\cos(4 v x)}{x^2}$. Compute the product $f_u \\cdot f_v$.",
    "answer": "32v",
    "steps": "\\begin{aligned}\nf(u,v) &= \\lim_{x \\to 0} \\frac{e^{2ux^2} - \\cos(4vx)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4ux e^{2ux^2} + 4v\\sin(4vx)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4u e^{2ux^2} + 4ux(4ux)e^{2ux^2} + 16v^2\\cos(4vx)}{2} \\\\\n&= \\frac{4u(1) + 0 + 16v^2(1)}{2} = 2u + \\frac{16}{2}v^2 \\\\[10pt]\nf_u &= \\frac{\\partial}{\\partial u}\\left(2u + \\frac{16}{2}v^2\\right) = 2 \\\\\nf_v &= \\frac{\\partial}{\\partial v}\\left(2u + \\frac{16}{2}v^2\\right) = 16v \\\\[10pt]\nf_u \\cdot f_v &= (2)(16v) = 32v\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch1_37",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 3x^2} - \\cos(5x)}{x^2}$.",
    "answer": "14",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sqrt{1 + 3x^2} - \\cos(5x)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{\\frac{3x}{\\sqrt{1 + 3x^2}} + 5\\sin(5x)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{ \\frac{3\\sqrt{1 + 3x^2} - 3x\\left(\\frac{3x}{\\sqrt{1 + 3x^2}}\\right)}{1 + 3x^2} + 25\\cos(5x) }{2} \\\\\n&= \\lim_{x \\to 0} \\frac{ \\frac{3 - 9x^2}{(1 + 3x^2)^{3/2}} + 25\\cos(5x) }{2} \\\\\n&= \\frac{3 + 25}{2} = 14\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch2_37",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{e^{5x} - \\ln(1+3x) - 1 - 2x}{x^2}$.",
    "answer": "17",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{e^{5x} - \\ln(1+3x) - 1 - 2x}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{5e^{5x} - \\frac{3}{1+3x} - 2}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{25e^{5x} - 3(-1)(1+3x)^{-2}(3)}{2} \\\\\n&= \\lim_{x \\to 0} \\frac{25e^{5x} + \\frac{9}{(1+3x)^2}}{2} \\\\\n&= \\frac{25(1) + 9(1)}{2} = 17\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch3_37",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(6x)}{x^3}$.",
    "answer": "\\frac{104}{3}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(6x)}{x^3} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{2\\cos(2x) - \\left(2\\cos(6x) - 12x\\sin(6x)\\right)}{3x^2} \\\\\n&= \\lim_{x \\to 0} \\frac{2\\cos(2x) - 2\\cos(6x) + 12x\\sin(6x)}{3x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 12\\sin(6x) + 12\\sin(6x) + 72x\\cos(6x)}{6x} \\\\\n&= \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 24\\sin(6x) + 72x\\cos(6x)}{6x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-8\\cos(2x) + 144\\cos(6x) + 72\\cos(6x) - 432x\\sin(6x)}{6} \\\\\n&= \\frac{-8(1) + 216(1) - 0}{6} = \\frac{104}{3}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch4_37",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} (1 + 5\\sin x)^{\\frac{3}{x}}$.",
    "answer": "e^{15}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} (1 + 5\\sin x)^{\\frac{3}{x}} \\quad (1^{\\infty}) \\\\\n\\ln L &= \\lim_{x \\to 0} \\frac{3\\ln(1 + 5\\sin x)}{x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{3 \\cdot \\frac{5\\cos x}{1 + 5\\sin x}}{1} \\\\\n&= \\frac{15(1)}{1 + 0} = 15 \\\\\nL &= e^{15}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch5_37",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $L(y) = \\lim_{x \\to 0} \\frac{\\cosh(3xy) - \\cos(5xy)}{x^2}$. \\\\ Find the derivative $L'(y)$.",
    "answer": "34y",
    "steps": "\\begin{aligned}\nL(y) &= \\lim_{x \\to 0} \\frac{\\cosh(3xy) - \\cos(5xy)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{3y\\sinh(3xy) + 5y\\sin(5xy)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{9y^2\\cosh(3xy) + 25y^2\\cos(5xy)}{2} \\\\\n&= \\frac{9y^2(1) + 25y^2(1)}{2} = 17y^2 \\\\[10pt]\nL'(y) &= \\frac{d}{dy} \\left( 17y^2 \\right) = 34y\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch6_37",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $f(u,v) = \\lim_{x \\to 0} \\frac{e^{3 u x^2} - \\cos(4 v x)}{x^2}$. Compute the product $f_u \\cdot f_v$.",
    "answer": "48v",
    "steps": "\\begin{aligned}\nf(u,v) &= \\lim_{x \\to 0} \\frac{e^{3ux^2} - \\cos(4vx)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{6ux e^{3ux^2} + 4v\\sin(4vx)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{6u e^{3ux^2} + 6ux(6ux)e^{3ux^2} + 16v^2\\cos(4vx)}{2} \\\\\n&= \\frac{6u(1) + 0 + 16v^2(1)}{2} = 3u + \\frac{16}{2}v^2 \\\\[10pt]\nf_u &= \\frac{\\partial}{\\partial u}\\left(3u + \\frac{16}{2}v^2\\right) = 3 \\\\\nf_v &= \\frac{\\partial}{\\partial v}\\left(3u + \\frac{16}{2}v^2\\right) = 16v \\\\[10pt]\nf_u \\cdot f_v &= (3)(16v) = 48v\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch1_38",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 5x^2} - \\cos(3x)}{x^2}$.",
    "answer": "7",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sqrt{1 + 5x^2} - \\cos(3x)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{\\frac{5x}{\\sqrt{1 + 5x^2}} + 3\\sin(3x)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{ \\frac{5\\sqrt{1 + 5x^2} - 5x\\left(\\frac{5x}{\\sqrt{1 + 5x^2}}\\right)}{1 + 5x^2} + 9\\cos(3x) }{2} \\\\\n&= \\lim_{x \\to 0} \\frac{ \\frac{5 - 25x^2}{(1 + 5x^2)^{3/2}} + 9\\cos(3x) }{2} \\\\\n&= \\frac{5 + 9}{2} = 7\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch2_38",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{e^{3x} - \\ln(1+2x) - 1 - 1x}{x^2}$.",
    "answer": "\\frac{13}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{e^{3x} - \\ln(1+2x) - 1 - 1x}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{3e^{3x} - \\frac{2}{1+2x} - 1}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{9e^{3x} - 2(-1)(1+2x)^{-2}(2)}{2} \\\\\n&= \\lim_{x \\to 0} \\frac{9e^{3x} + \\frac{4}{(1+2x)^2}}{2} \\\\\n&= \\frac{9(1) + 4(1)}{2} = \\frac{13}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch3_38",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(5x)}{x^3}$.",
    "answer": "\\frac{71}{3}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(5x)}{x^3} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{2\\cos(2x) - \\left(2\\cos(5x) - 10x\\sin(5x)\\right)}{3x^2} \\\\\n&= \\lim_{x \\to 0} \\frac{2\\cos(2x) - 2\\cos(5x) + 10x\\sin(5x)}{3x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 10\\sin(5x) + 10\\sin(5x) + 50x\\cos(5x)}{6x} \\\\\n&= \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 20\\sin(5x) + 50x\\cos(5x)}{6x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-8\\cos(2x) + 100\\cos(5x) + 50\\cos(5x) - 250x\\sin(5x)}{6} \\\\\n&= \\frac{-8(1) + 150(1) - 0}{6} = \\frac{71}{3}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch4_38",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} (1 + 5\\sin x)^{\\frac{3}{x}}$.",
    "answer": "e^{15}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} (1 + 5\\sin x)^{\\frac{3}{x}} \\quad (1^{\\infty}) \\\\\n\\ln L &= \\lim_{x \\to 0} \\frac{3\\ln(1 + 5\\sin x)}{x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{3 \\cdot \\frac{5\\cos x}{1 + 5\\sin x}}{1} \\\\\n&= \\frac{15(1)}{1 + 0} = 15 \\\\\nL &= e^{15}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch5_38",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $L(y) = \\lim_{x \\to 0} \\frac{\\cosh(2xy) - \\cos(7xy)}{x^2}$. \\\\ Find the derivative $L'(y)$.",
    "answer": "53y",
    "steps": "\\begin{aligned}\nL(y) &= \\lim_{x \\to 0} \\frac{\\cosh(2xy) - \\cos(7xy)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{2y\\sinh(2xy) + 7y\\sin(7xy)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4y^2\\cosh(2xy) + 49y^2\\cos(7xy)}{2} \\\\\n&= \\frac{4y^2(1) + 49y^2(1)}{2} = \\frac{53}{2}y^2 \\\\[10pt]\nL'(y) &= \\frac{d}{dy} \\left( \\frac{53}{2}y^2 \\right) = 53y\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch6_38",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $f(u,v) = \\lim_{x \\to 0} \\frac{e^{4 u x^2} - \\cos(4 v x)}{x^2}$. Compute the product $f_u \\cdot f_v$.",
    "answer": "64v",
    "steps": "\\begin{aligned}\nf(u,v) &= \\lim_{x \\to 0} \\frac{e^{4ux^2} - \\cos(4vx)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{8ux e^{4ux^2} + 4v\\sin(4vx)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{8u e^{4ux^2} + 8ux(8ux)e^{4ux^2} + 16v^2\\cos(4vx)}{2} \\\\\n&= \\frac{8u(1) + 0 + 16v^2(1)}{2} = 4u + \\frac{16}{2}v^2 \\\\[10pt]\nf_u &= \\frac{\\partial}{\\partial u}\\left(4u + \\frac{16}{2}v^2\\right) = 4 \\\\\nf_v &= \\frac{\\partial}{\\partial v}\\left(4u + \\frac{16}{2}v^2\\right) = 16v \\\\[10pt]\nf_u \\cdot f_v &= (4)(16v) = 64v\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch1_39",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 4x^2} - \\cos(4x)}{x^2}$.",
    "answer": "10",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sqrt{1 + 4x^2} - \\cos(4x)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{\\frac{4x}{\\sqrt{1 + 4x^2}} + 4\\sin(4x)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{ \\frac{4\\sqrt{1 + 4x^2} - 4x\\left(\\frac{4x}{\\sqrt{1 + 4x^2}}\\right)}{1 + 4x^2} + 16\\cos(4x) }{2} \\\\\n&= \\lim_{x \\to 0} \\frac{ \\frac{4 - 16x^2}{(1 + 4x^2)^{3/2}} + 16\\cos(4x) }{2} \\\\\n&= \\frac{4 + 16}{2} = 10\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch2_39",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{e^{5x} - \\ln(1+4x) - 1 - 1x}{x^2}$.",
    "answer": "\\frac{41}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{e^{5x} - \\ln(1+4x) - 1 - 1x}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{5e^{5x} - \\frac{4}{1+4x} - 1}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{25e^{5x} - 4(-1)(1+4x)^{-2}(4)}{2} \\\\\n&= \\lim_{x \\to 0} \\frac{25e^{5x} + \\frac{16}{(1+4x)^2}}{2} \\\\\n&= \\frac{25(1) + 16(1)}{2} = \\frac{41}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch3_39",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sin(3x) - 3x\\cos(6x)}{x^3}$.",
    "answer": "\\frac{99}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sin(3x) - 3x\\cos(6x)}{x^3} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{3\\cos(3x) - \\left(3\\cos(6x) - 18x\\sin(6x)\\right)}{3x^2} \\\\\n&= \\lim_{x \\to 0} \\frac{3\\cos(3x) - 3\\cos(6x) + 18x\\sin(6x)}{3x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-9\\sin(3x) + 18\\sin(6x) + 18\\sin(6x) + 108x\\cos(6x)}{6x} \\\\\n&= \\lim_{x \\to 0} \\frac{-9\\sin(3x) + 36\\sin(6x) + 108x\\cos(6x)}{6x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-27\\cos(3x) + 216\\cos(6x) + 108\\cos(6x) - 648x\\sin(6x)}{6} \\\\\n&= \\frac{-27(1) + 324(1) - 0}{6} = \\frac{99}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch4_39",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} (1 + 3\\sin x)^{\\frac{3}{x}}$.",
    "answer": "e^{9}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} (1 + 3\\sin x)^{\\frac{3}{x}} \\quad (1^{\\infty}) \\\\\n\\ln L &= \\lim_{x \\to 0} \\frac{3\\ln(1 + 3\\sin x)}{x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{3 \\cdot \\frac{3\\cos x}{1 + 3\\sin x}}{1} \\\\\n&= \\frac{9(1)}{1 + 0} = 9 \\\\\nL &= e^{9}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch5_39",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $L(y) = \\lim_{x \\to 0} \\frac{\\cosh(4xy) - \\cos(5xy)}{x^2}$. \\\\ Find the derivative $L'(y)$.",
    "answer": "41y",
    "steps": "\\begin{aligned}\nL(y) &= \\lim_{x \\to 0} \\frac{\\cosh(4xy) - \\cos(5xy)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4y\\sinh(4xy) + 5y\\sin(5xy)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{16y^2\\cosh(4xy) + 25y^2\\cos(5xy)}{2} \\\\\n&= \\frac{16y^2(1) + 25y^2(1)}{2} = \\frac{41}{2}y^2 \\\\[10pt]\nL'(y) &= \\frac{d}{dy} \\left( \\frac{41}{2}y^2 \\right) = 41y\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch6_39",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $f(u,v) = \\lim_{x \\to 0} \\frac{e^{2 u x^2} - \\cos(2 v x)}{x^2}$. Compute the product $f_u \\cdot f_v$.",
    "answer": "8v",
    "steps": "\\begin{aligned}\nf(u,v) &= \\lim_{x \\to 0} \\frac{e^{2ux^2} - \\cos(2vx)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4ux e^{2ux^2} + 2v\\sin(2vx)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4u e^{2ux^2} + 4ux(4ux)e^{2ux^2} + 4v^2\\cos(2vx)}{2} \\\\\n&= \\frac{4u(1) + 0 + 4v^2(1)}{2} = 2u + \\frac{4}{2}v^2 \\\\[10pt]\nf_u &= \\frac{\\partial}{\\partial u}\\left(2u + \\frac{4}{2}v^2\\right) = 2 \\\\\nf_v &= \\frac{\\partial}{\\partial v}\\left(2u + \\frac{4}{2}v^2\\right) = 4v \\\\[10pt]\nf_u \\cdot f_v &= (2)(4v) = 8v\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch1_40",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 5x^2} - \\cos(4x)}{x^2}$.",
    "answer": "\\frac{21}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sqrt{1 + 5x^2} - \\cos(4x)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{\\frac{5x}{\\sqrt{1 + 5x^2}} + 4\\sin(4x)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{ \\frac{5\\sqrt{1 + 5x^2} - 5x\\left(\\frac{5x}{\\sqrt{1 + 5x^2}}\\right)}{1 + 5x^2} + 16\\cos(4x) }{2} \\\\\n&= \\lim_{x \\to 0} \\frac{ \\frac{5 - 25x^2}{(1 + 5x^2)^{3/2}} + 16\\cos(4x) }{2} \\\\\n&= \\frac{5 + 16}{2} = \\frac{21}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch2_40",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{e^{5x} - \\ln(1+2x) - 1 - 3x}{x^2}$.",
    "answer": "\\frac{29}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{e^{5x} - \\ln(1+2x) - 1 - 3x}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{5e^{5x} - \\frac{2}{1+2x} - 3}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{25e^{5x} - 2(-1)(1+2x)^{-2}(2)}{2} \\\\\n&= \\lim_{x \\to 0} \\frac{25e^{5x} + \\frac{4}{(1+2x)^2}}{2} \\\\\n&= \\frac{25(1) + 4(1)}{2} = \\frac{29}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch3_40",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(5x)}{x^3}$.",
    "answer": "\\frac{71}{3}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(5x)}{x^3} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{2\\cos(2x) - \\left(2\\cos(5x) - 10x\\sin(5x)\\right)}{3x^2} \\\\\n&= \\lim_{x \\to 0} \\frac{2\\cos(2x) - 2\\cos(5x) + 10x\\sin(5x)}{3x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 10\\sin(5x) + 10\\sin(5x) + 50x\\cos(5x)}{6x} \\\\\n&= \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 20\\sin(5x) + 50x\\cos(5x)}{6x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-8\\cos(2x) + 100\\cos(5x) + 50\\cos(5x) - 250x\\sin(5x)}{6} \\\\\n&= \\frac{-8(1) + 150(1) - 0}{6} = \\frac{71}{3}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch4_40",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} (1 + 5\\sin x)^{\\frac{4}{x}}$.",
    "answer": "e^{20}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} (1 + 5\\sin x)^{\\frac{4}{x}} \\quad (1^{\\infty}) \\\\\n\\ln L &= \\lim_{x \\to 0} \\frac{4\\ln(1 + 5\\sin x)}{x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{4 \\cdot \\frac{5\\cos x}{1 + 5\\sin x}}{1} \\\\\n&= \\frac{20(1)}{1 + 0} = 20 \\\\\nL &= e^{20}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch5_40",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $L(y) = \\lim_{x \\to 0} \\frac{\\cosh(2xy) - \\cos(7xy)}{x^2}$. \\\\ Find the derivative $L'(y)$.",
    "answer": "53y",
    "steps": "\\begin{aligned}\nL(y) &= \\lim_{x \\to 0} \\frac{\\cosh(2xy) - \\cos(7xy)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{2y\\sinh(2xy) + 7y\\sin(7xy)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4y^2\\cosh(2xy) + 49y^2\\cos(7xy)}{2} \\\\\n&= \\frac{4y^2(1) + 49y^2(1)}{2} = \\frac{53}{2}y^2 \\\\[10pt]\nL'(y) &= \\frac{d}{dy} \\left( \\frac{53}{2}y^2 \\right) = 53y\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch6_40",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $f(u,v) = \\lim_{x \\to 0} \\frac{e^{3 u x^2} - \\cos(4 v x)}{x^2}$. Compute the product $f_u \\cdot f_v$.",
    "answer": "48v",
    "steps": "\\begin{aligned}\nf(u,v) &= \\lim_{x \\to 0} \\frac{e^{3ux^2} - \\cos(4vx)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{6ux e^{3ux^2} + 4v\\sin(4vx)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{6u e^{3ux^2} + 6ux(6ux)e^{3ux^2} + 16v^2\\cos(4vx)}{2} \\\\\n&= \\frac{6u(1) + 0 + 16v^2(1)}{2} = 3u + \\frac{16}{2}v^2 \\\\[10pt]\nf_u &= \\frac{\\partial}{\\partial u}\\left(3u + \\frac{16}{2}v^2\\right) = 3 \\\\\nf_v &= \\frac{\\partial}{\\partial v}\\left(3u + \\frac{16}{2}v^2\\right) = 16v \\\\[10pt]\nf_u \\cdot f_v &= (3)(16v) = 48v\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch1_41",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 3x^2} - \\cos(2x)}{x^2}$.",
    "answer": "\\frac{7}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sqrt{1 + 3x^2} - \\cos(2x)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{\\frac{3x}{\\sqrt{1 + 3x^2}} + 2\\sin(2x)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{ \\frac{3\\sqrt{1 + 3x^2} - 3x\\left(\\frac{3x}{\\sqrt{1 + 3x^2}}\\right)}{1 + 3x^2} + 4\\cos(2x) }{2} \\\\\n&= \\lim_{x \\to 0} \\frac{ \\frac{3 - 9x^2}{(1 + 3x^2)^{3/2}} + 4\\cos(2x) }{2} \\\\\n&= \\frac{3 + 4}{2} = \\frac{7}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch2_41",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{e^{3x} - \\ln(1+4x) - 1 - -1x}{x^2}$.",
    "answer": "\\frac{25}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{e^{3x} - \\ln(1+4x) - 1 - -1x}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{3e^{3x} - \\frac{4}{1+4x} - -1}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{9e^{3x} - 4(-1)(1+4x)^{-2}(4)}{2} \\\\\n&= \\lim_{x \\to 0} \\frac{9e^{3x} + \\frac{16}{(1+4x)^2}}{2} \\\\\n&= \\frac{9(1) + 16(1)}{2} = \\frac{25}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch3_41",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sin(3x) - 3x\\cos(5x)}{x^3}$.",
    "answer": "33",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sin(3x) - 3x\\cos(5x)}{x^3} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{3\\cos(3x) - \\left(3\\cos(5x) - 15x\\sin(5x)\\right)}{3x^2} \\\\\n&= \\lim_{x \\to 0} \\frac{3\\cos(3x) - 3\\cos(5x) + 15x\\sin(5x)}{3x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-9\\sin(3x) + 15\\sin(5x) + 15\\sin(5x) + 75x\\cos(5x)}{6x} \\\\\n&= \\lim_{x \\to 0} \\frac{-9\\sin(3x) + 30\\sin(5x) + 75x\\cos(5x)}{6x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-27\\cos(3x) + 150\\cos(5x) + 75\\cos(5x) - 375x\\sin(5x)}{6} \\\\\n&= \\frac{-27(1) + 225(1) - 0}{6} = 33\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch4_41",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} (1 + 3\\sin x)^{\\frac{4}{x}}$.",
    "answer": "e^{12}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} (1 + 3\\sin x)^{\\frac{4}{x}} \\quad (1^{\\infty}) \\\\\n\\ln L &= \\lim_{x \\to 0} \\frac{4\\ln(1 + 3\\sin x)}{x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{4 \\cdot \\frac{3\\cos x}{1 + 3\\sin x}}{1} \\\\\n&= \\frac{12(1)}{1 + 0} = 12 \\\\\nL &= e^{12}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch5_41",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $L(y) = \\lim_{x \\to 0} \\frac{\\cosh(2xy) - \\cos(6xy)}{x^2}$. \\\\ Find the derivative $L'(y)$.",
    "answer": "40y",
    "steps": "\\begin{aligned}\nL(y) &= \\lim_{x \\to 0} \\frac{\\cosh(2xy) - \\cos(6xy)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{2y\\sinh(2xy) + 6y\\sin(6xy)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4y^2\\cosh(2xy) + 36y^2\\cos(6xy)}{2} \\\\\n&= \\frac{4y^2(1) + 36y^2(1)}{2} = 20y^2 \\\\[10pt]\nL'(y) &= \\frac{d}{dy} \\left( 20y^2 \\right) = 40y\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch6_41",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $f(u,v) = \\lim_{x \\to 0} \\frac{e^{4 u x^2} - \\cos(2 v x)}{x^2}$. Compute the product $f_u \\cdot f_v$.",
    "answer": "16v",
    "steps": "\\begin{aligned}\nf(u,v) &= \\lim_{x \\to 0} \\frac{e^{4ux^2} - \\cos(2vx)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{8ux e^{4ux^2} + 2v\\sin(2vx)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{8u e^{4ux^2} + 8ux(8ux)e^{4ux^2} + 4v^2\\cos(2vx)}{2} \\\\\n&= \\frac{8u(1) + 0 + 4v^2(1)}{2} = 4u + \\frac{4}{2}v^2 \\\\[10pt]\nf_u &= \\frac{\\partial}{\\partial u}\\left(4u + \\frac{4}{2}v^2\\right) = 4 \\\\\nf_v &= \\frac{\\partial}{\\partial v}\\left(4u + \\frac{4}{2}v^2\\right) = 4v \\\\[10pt]\nf_u \\cdot f_v &= (4)(4v) = 16v\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch1_42",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 3x^2} - \\cos(4x)}{x^2}$.",
    "answer": "\\frac{19}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sqrt{1 + 3x^2} - \\cos(4x)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{\\frac{3x}{\\sqrt{1 + 3x^2}} + 4\\sin(4x)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{ \\frac{3\\sqrt{1 + 3x^2} - 3x\\left(\\frac{3x}{\\sqrt{1 + 3x^2}}\\right)}{1 + 3x^2} + 16\\cos(4x) }{2} \\\\\n&= \\lim_{x \\to 0} \\frac{ \\frac{3 - 9x^2}{(1 + 3x^2)^{3/2}} + 16\\cos(4x) }{2} \\\\\n&= \\frac{3 + 16}{2} = \\frac{19}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch2_42",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{e^{2x} - \\ln(1+4x) - 1 - -2x}{x^2}$.",
    "answer": "10",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{e^{2x} - \\ln(1+4x) - 1 - -2x}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{2e^{2x} - \\frac{4}{1+4x} - -2}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{4e^{2x} - 4(-1)(1+4x)^{-2}(4)}{2} \\\\\n&= \\lim_{x \\to 0} \\frac{4e^{2x} + \\frac{16}{(1+4x)^2}}{2} \\\\\n&= \\frac{4(1) + 16(1)}{2} = 10\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch3_42",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(4x)}{x^3}$.",
    "answer": "\\frac{44}{3}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(4x)}{x^3} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{2\\cos(2x) - \\left(2\\cos(4x) - 8x\\sin(4x)\\right)}{3x^2} \\\\\n&= \\lim_{x \\to 0} \\frac{2\\cos(2x) - 2\\cos(4x) + 8x\\sin(4x)}{3x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 8\\sin(4x) + 8\\sin(4x) + 32x\\cos(4x)}{6x} \\\\\n&= \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 16\\sin(4x) + 32x\\cos(4x)}{6x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-8\\cos(2x) + 64\\cos(4x) + 32\\cos(4x) - 128x\\sin(4x)}{6} \\\\\n&= \\frac{-8(1) + 96(1) - 0}{6} = \\frac{44}{3}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch4_42",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} (1 + 2\\sin x)^{\\frac{5}{x}}$.",
    "answer": "e^{10}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} (1 + 2\\sin x)^{\\frac{5}{x}} \\quad (1^{\\infty}) \\\\\n\\ln L &= \\lim_{x \\to 0} \\frac{5\\ln(1 + 2\\sin x)}{x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{5 \\cdot \\frac{2\\cos x}{1 + 2\\sin x}}{1} \\\\\n&= \\frac{10(1)}{1 + 0} = 10 \\\\\nL &= e^{10}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch5_42",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $L(y) = \\lim_{x \\to 0} \\frac{\\cosh(4xy) - \\cos(7xy)}{x^2}$. \\\\ Find the derivative $L'(y)$.",
    "answer": "65y",
    "steps": "\\begin{aligned}\nL(y) &= \\lim_{x \\to 0} \\frac{\\cosh(4xy) - \\cos(7xy)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4y\\sinh(4xy) + 7y\\sin(7xy)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{16y^2\\cosh(4xy) + 49y^2\\cos(7xy)}{2} \\\\\n&= \\frac{16y^2(1) + 49y^2(1)}{2} = \\frac{65}{2}y^2 \\\\[10pt]\nL'(y) &= \\frac{d}{dy} \\left( \\frac{65}{2}y^2 \\right) = 65y\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch6_42",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $f(u,v) = \\lim_{x \\to 0} \\frac{e^{4 u x^2} - \\cos(4 v x)}{x^2}$. Compute the product $f_u \\cdot f_v$.",
    "answer": "64v",
    "steps": "\\begin{aligned}\nf(u,v) &= \\lim_{x \\to 0} \\frac{e^{4ux^2} - \\cos(4vx)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{8ux e^{4ux^2} + 4v\\sin(4vx)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{8u e^{4ux^2} + 8ux(8ux)e^{4ux^2} + 16v^2\\cos(4vx)}{2} \\\\\n&= \\frac{8u(1) + 0 + 16v^2(1)}{2} = 4u + \\frac{16}{2}v^2 \\\\[10pt]\nf_u &= \\frac{\\partial}{\\partial u}\\left(4u + \\frac{16}{2}v^2\\right) = 4 \\\\\nf_v &= \\frac{\\partial}{\\partial v}\\left(4u + \\frac{16}{2}v^2\\right) = 16v \\\\[10pt]\nf_u \\cdot f_v &= (4)(16v) = 64v\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch1_43",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 4x^2} - \\cos(5x)}{x^2}$.",
    "answer": "\\frac{29}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sqrt{1 + 4x^2} - \\cos(5x)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{\\frac{4x}{\\sqrt{1 + 4x^2}} + 5\\sin(5x)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{ \\frac{4\\sqrt{1 + 4x^2} - 4x\\left(\\frac{4x}{\\sqrt{1 + 4x^2}}\\right)}{1 + 4x^2} + 25\\cos(5x) }{2} \\\\\n&= \\lim_{x \\to 0} \\frac{ \\frac{4 - 16x^2}{(1 + 4x^2)^{3/2}} + 25\\cos(5x) }{2} \\\\\n&= \\frac{4 + 25}{2} = \\frac{29}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch2_43",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{e^{4x} - \\ln(1+3x) - 1 - 1x}{x^2}$.",
    "answer": "\\frac{25}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{e^{4x} - \\ln(1+3x) - 1 - 1x}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{4e^{4x} - \\frac{3}{1+3x} - 1}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{16e^{4x} - 3(-1)(1+3x)^{-2}(3)}{2} \\\\\n&= \\lim_{x \\to 0} \\frac{16e^{4x} + \\frac{9}{(1+3x)^2}}{2} \\\\\n&= \\frac{16(1) + 9(1)}{2} = \\frac{25}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch3_43",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sin(3x) - 3x\\cos(6x)}{x^3}$.",
    "answer": "\\frac{99}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sin(3x) - 3x\\cos(6x)}{x^3} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{3\\cos(3x) - \\left(3\\cos(6x) - 18x\\sin(6x)\\right)}{3x^2} \\\\\n&= \\lim_{x \\to 0} \\frac{3\\cos(3x) - 3\\cos(6x) + 18x\\sin(6x)}{3x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-9\\sin(3x) + 18\\sin(6x) + 18\\sin(6x) + 108x\\cos(6x)}{6x} \\\\\n&= \\lim_{x \\to 0} \\frac{-9\\sin(3x) + 36\\sin(6x) + 108x\\cos(6x)}{6x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-27\\cos(3x) + 216\\cos(6x) + 108\\cos(6x) - 648x\\sin(6x)}{6} \\\\\n&= \\frac{-27(1) + 324(1) - 0}{6} = \\frac{99}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch4_43",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} (1 + 5\\sin x)^{\\frac{5}{x}}$.",
    "answer": "e^{25}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} (1 + 5\\sin x)^{\\frac{5}{x}} \\quad (1^{\\infty}) \\\\\n\\ln L &= \\lim_{x \\to 0} \\frac{5\\ln(1 + 5\\sin x)}{x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{5 \\cdot \\frac{5\\cos x}{1 + 5\\sin x}}{1} \\\\\n&= \\frac{25(1)}{1 + 0} = 25 \\\\\nL &= e^{25}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch5_43",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $L(y) = \\lim_{x \\to 0} \\frac{\\cosh(2xy) - \\cos(7xy)}{x^2}$. \\\\ Find the derivative $L'(y)$.",
    "answer": "53y",
    "steps": "\\begin{aligned}\nL(y) &= \\lim_{x \\to 0} \\frac{\\cosh(2xy) - \\cos(7xy)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{2y\\sinh(2xy) + 7y\\sin(7xy)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4y^2\\cosh(2xy) + 49y^2\\cos(7xy)}{2} \\\\\n&= \\frac{4y^2(1) + 49y^2(1)}{2} = \\frac{53}{2}y^2 \\\\[10pt]\nL'(y) &= \\frac{d}{dy} \\left( \\frac{53}{2}y^2 \\right) = 53y\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch6_43",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $f(u,v) = \\lim_{x \\to 0} \\frac{e^{2 u x^2} - \\cos(2 v x)}{x^2}$. Compute the product $f_u \\cdot f_v$.",
    "answer": "8v",
    "steps": "\\begin{aligned}\nf(u,v) &= \\lim_{x \\to 0} \\frac{e^{2ux^2} - \\cos(2vx)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4ux e^{2ux^2} + 2v\\sin(2vx)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4u e^{2ux^2} + 4ux(4ux)e^{2ux^2} + 4v^2\\cos(2vx)}{2} \\\\\n&= \\frac{4u(1) + 0 + 4v^2(1)}{2} = 2u + \\frac{4}{2}v^2 \\\\[10pt]\nf_u &= \\frac{\\partial}{\\partial u}\\left(2u + \\frac{4}{2}v^2\\right) = 2 \\\\\nf_v &= \\frac{\\partial}{\\partial v}\\left(2u + \\frac{4}{2}v^2\\right) = 4v \\\\[10pt]\nf_u \\cdot f_v &= (2)(4v) = 8v\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch1_44",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 2x^2} - \\cos(2x)}{x^2}$.",
    "answer": "3",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sqrt{1 + 2x^2} - \\cos(2x)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{\\frac{2x}{\\sqrt{1 + 2x^2}} + 2\\sin(2x)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{ \\frac{2\\sqrt{1 + 2x^2} - 2x\\left(\\frac{2x}{\\sqrt{1 + 2x^2}}\\right)}{1 + 2x^2} + 4\\cos(2x) }{2} \\\\\n&= \\lim_{x \\to 0} \\frac{ \\frac{2 - 4x^2}{(1 + 2x^2)^{3/2}} + 4\\cos(2x) }{2} \\\\\n&= \\frac{2 + 4}{2} = 3\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch2_44",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{e^{3x} - \\ln(1+4x) - 1 - -1x}{x^2}$.",
    "answer": "\\frac{25}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{e^{3x} - \\ln(1+4x) - 1 - -1x}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{3e^{3x} - \\frac{4}{1+4x} - -1}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{9e^{3x} - 4(-1)(1+4x)^{-2}(4)}{2} \\\\\n&= \\lim_{x \\to 0} \\frac{9e^{3x} + \\frac{16}{(1+4x)^2}}{2} \\\\\n&= \\frac{9(1) + 16(1)}{2} = \\frac{25}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch3_44",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(5x)}{x^3}$.",
    "answer": "\\frac{71}{3}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(5x)}{x^3} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{2\\cos(2x) - \\left(2\\cos(5x) - 10x\\sin(5x)\\right)}{3x^2} \\\\\n&= \\lim_{x \\to 0} \\frac{2\\cos(2x) - 2\\cos(5x) + 10x\\sin(5x)}{3x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 10\\sin(5x) + 10\\sin(5x) + 50x\\cos(5x)}{6x} \\\\\n&= \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 20\\sin(5x) + 50x\\cos(5x)}{6x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-8\\cos(2x) + 100\\cos(5x) + 50\\cos(5x) - 250x\\sin(5x)}{6} \\\\\n&= \\frac{-8(1) + 150(1) - 0}{6} = \\frac{71}{3}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch4_44",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} (1 + 2\\sin x)^{\\frac{5}{x}}$.",
    "answer": "e^{10}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} (1 + 2\\sin x)^{\\frac{5}{x}} \\quad (1^{\\infty}) \\\\\n\\ln L &= \\lim_{x \\to 0} \\frac{5\\ln(1 + 2\\sin x)}{x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{5 \\cdot \\frac{2\\cos x}{1 + 2\\sin x}}{1} \\\\\n&= \\frac{10(1)}{1 + 0} = 10 \\\\\nL &= e^{10}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch5_44",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $L(y) = \\lim_{x \\to 0} \\frac{\\cosh(2xy) - \\cos(6xy)}{x^2}$. \\\\ Find the derivative $L'(y)$.",
    "answer": "40y",
    "steps": "\\begin{aligned}\nL(y) &= \\lim_{x \\to 0} \\frac{\\cosh(2xy) - \\cos(6xy)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{2y\\sinh(2xy) + 6y\\sin(6xy)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4y^2\\cosh(2xy) + 36y^2\\cos(6xy)}{2} \\\\\n&= \\frac{4y^2(1) + 36y^2(1)}{2} = 20y^2 \\\\[10pt]\nL'(y) &= \\frac{d}{dy} \\left( 20y^2 \\right) = 40y\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch6_44",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $f(u,v) = \\lim_{x \\to 0} \\frac{e^{5 u x^2} - \\cos(5 v x)}{x^2}$. Compute the product $f_u \\cdot f_v$.",
    "answer": "125v",
    "steps": "\\begin{aligned}\nf(u,v) &= \\lim_{x \\to 0} \\frac{e^{5ux^2} - \\cos(5vx)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{10ux e^{5ux^2} + 5v\\sin(5vx)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{10u e^{5ux^2} + 10ux(10ux)e^{5ux^2} + 25v^2\\cos(5vx)}{2} \\\\\n&= \\frac{10u(1) + 0 + 25v^2(1)}{2} = 5u + \\frac{25}{2}v^2 \\\\[10pt]\nf_u &= \\frac{\\partial}{\\partial u}\\left(5u + \\frac{25}{2}v^2\\right) = 5 \\\\\nf_v &= \\frac{\\partial}{\\partial v}\\left(5u + \\frac{25}{2}v^2\\right) = 25v \\\\[10pt]\nf_u \\cdot f_v &= (5)(25v) = 125v\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch1_45",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 5x^2} - \\cos(2x)}{x^2}$.",
    "answer": "\\frac{9}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sqrt{1 + 5x^2} - \\cos(2x)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{\\frac{5x}{\\sqrt{1 + 5x^2}} + 2\\sin(2x)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{ \\frac{5\\sqrt{1 + 5x^2} - 5x\\left(\\frac{5x}{\\sqrt{1 + 5x^2}}\\right)}{1 + 5x^2} + 4\\cos(2x) }{2} \\\\\n&= \\lim_{x \\to 0} \\frac{ \\frac{5 - 25x^2}{(1 + 5x^2)^{3/2}} + 4\\cos(2x) }{2} \\\\\n&= \\frac{5 + 4}{2} = \\frac{9}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch2_45",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{e^{2x} - \\ln(1+3x) - 1 - -1x}{x^2}$.",
    "answer": "\\frac{13}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{e^{2x} - \\ln(1+3x) - 1 - -1x}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{2e^{2x} - \\frac{3}{1+3x} - -1}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{4e^{2x} - 3(-1)(1+3x)^{-2}(3)}{2} \\\\\n&= \\lim_{x \\to 0} \\frac{4e^{2x} + \\frac{9}{(1+3x)^2}}{2} \\\\\n&= \\frac{4(1) + 9(1)}{2} = \\frac{13}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch3_45",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(5x)}{x^3}$.",
    "answer": "\\frac{71}{3}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(5x)}{x^3} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{2\\cos(2x) - \\left(2\\cos(5x) - 10x\\sin(5x)\\right)}{3x^2} \\\\\n&= \\lim_{x \\to 0} \\frac{2\\cos(2x) - 2\\cos(5x) + 10x\\sin(5x)}{3x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 10\\sin(5x) + 10\\sin(5x) + 50x\\cos(5x)}{6x} \\\\\n&= \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 20\\sin(5x) + 50x\\cos(5x)}{6x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-8\\cos(2x) + 100\\cos(5x) + 50\\cos(5x) - 250x\\sin(5x)}{6} \\\\\n&= \\frac{-8(1) + 150(1) - 0}{6} = \\frac{71}{3}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch4_45",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} (1 + 2\\sin x)^{\\frac{2}{x}}$.",
    "answer": "e^{4}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} (1 + 2\\sin x)^{\\frac{2}{x}} \\quad (1^{\\infty}) \\\\\n\\ln L &= \\lim_{x \\to 0} \\frac{2\\ln(1 + 2\\sin x)}{x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{2 \\cdot \\frac{2\\cos x}{1 + 2\\sin x}}{1} \\\\\n&= \\frac{4(1)}{1 + 0} = 4 \\\\\nL &= e^{4}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch5_45",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $L(y) = \\lim_{x \\to 0} \\frac{\\cosh(4xy) - \\cos(6xy)}{x^2}$. \\\\ Find the derivative $L'(y)$.",
    "answer": "52y",
    "steps": "\\begin{aligned}\nL(y) &= \\lim_{x \\to 0} \\frac{\\cosh(4xy) - \\cos(6xy)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4y\\sinh(4xy) + 6y\\sin(6xy)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{16y^2\\cosh(4xy) + 36y^2\\cos(6xy)}{2} \\\\\n&= \\frac{16y^2(1) + 36y^2(1)}{2} = 26y^2 \\\\[10pt]\nL'(y) &= \\frac{d}{dy} \\left( 26y^2 \\right) = 52y\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch6_45",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $f(u,v) = \\lim_{x \\to 0} \\frac{e^{2 u x^2} - \\cos(2 v x)}{x^2}$. Compute the product $f_u \\cdot f_v$.",
    "answer": "8v",
    "steps": "\\begin{aligned}\nf(u,v) &= \\lim_{x \\to 0} \\frac{e^{2ux^2} - \\cos(2vx)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4ux e^{2ux^2} + 2v\\sin(2vx)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4u e^{2ux^2} + 4ux(4ux)e^{2ux^2} + 4v^2\\cos(2vx)}{2} \\\\\n&= \\frac{4u(1) + 0 + 4v^2(1)}{2} = 2u + \\frac{4}{2}v^2 \\\\[10pt]\nf_u &= \\frac{\\partial}{\\partial u}\\left(2u + \\frac{4}{2}v^2\\right) = 2 \\\\\nf_v &= \\frac{\\partial}{\\partial v}\\left(2u + \\frac{4}{2}v^2\\right) = 4v \\\\[10pt]\nf_u \\cdot f_v &= (2)(4v) = 8v\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch1_46",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 6x^2} - \\cos(2x)}{x^2}$.",
    "answer": "5",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sqrt{1 + 6x^2} - \\cos(2x)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{\\frac{6x}{\\sqrt{1 + 6x^2}} + 2\\sin(2x)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{ \\frac{6\\sqrt{1 + 6x^2} - 6x\\left(\\frac{6x}{\\sqrt{1 + 6x^2}}\\right)}{1 + 6x^2} + 4\\cos(2x) }{2} \\\\\n&= \\lim_{x \\to 0} \\frac{ \\frac{6 - 36x^2}{(1 + 6x^2)^{3/2}} + 4\\cos(2x) }{2} \\\\\n&= \\frac{6 + 4}{2} = 5\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch2_46",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{e^{3x} - \\ln(1+2x) - 1 - 1x}{x^2}$.",
    "answer": "\\frac{13}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{e^{3x} - \\ln(1+2x) - 1 - 1x}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{3e^{3x} - \\frac{2}{1+2x} - 1}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{9e^{3x} - 2(-1)(1+2x)^{-2}(2)}{2} \\\\\n&= \\lim_{x \\to 0} \\frac{9e^{3x} + \\frac{4}{(1+2x)^2}}{2} \\\\\n&= \\frac{9(1) + 4(1)}{2} = \\frac{13}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch3_46",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(6x)}{x^3}$.",
    "answer": "\\frac{104}{3}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(6x)}{x^3} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{2\\cos(2x) - \\left(2\\cos(6x) - 12x\\sin(6x)\\right)}{3x^2} \\\\\n&= \\lim_{x \\to 0} \\frac{2\\cos(2x) - 2\\cos(6x) + 12x\\sin(6x)}{3x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 12\\sin(6x) + 12\\sin(6x) + 72x\\cos(6x)}{6x} \\\\\n&= \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 24\\sin(6x) + 72x\\cos(6x)}{6x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-8\\cos(2x) + 144\\cos(6x) + 72\\cos(6x) - 432x\\sin(6x)}{6} \\\\\n&= \\frac{-8(1) + 216(1) - 0}{6} = \\frac{104}{3}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch4_46",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} (1 + 5\\sin x)^{\\frac{2}{x}}$.",
    "answer": "e^{10}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} (1 + 5\\sin x)^{\\frac{2}{x}} \\quad (1^{\\infty}) \\\\\n\\ln L &= \\lim_{x \\to 0} \\frac{2\\ln(1 + 5\\sin x)}{x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{2 \\cdot \\frac{5\\cos x}{1 + 5\\sin x}}{1} \\\\\n&= \\frac{10(1)}{1 + 0} = 10 \\\\\nL &= e^{10}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch5_46",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $L(y) = \\lim_{x \\to 0} \\frac{\\cosh(4xy) - \\cos(6xy)}{x^2}$. \\\\ Find the derivative $L'(y)$.",
    "answer": "52y",
    "steps": "\\begin{aligned}\nL(y) &= \\lim_{x \\to 0} \\frac{\\cosh(4xy) - \\cos(6xy)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4y\\sinh(4xy) + 6y\\sin(6xy)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{16y^2\\cosh(4xy) + 36y^2\\cos(6xy)}{2} \\\\\n&= \\frac{16y^2(1) + 36y^2(1)}{2} = 26y^2 \\\\[10pt]\nL'(y) &= \\frac{d}{dy} \\left( 26y^2 \\right) = 52y\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch6_46",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $f(u,v) = \\lim_{x \\to 0} \\frac{e^{3 u x^2} - \\cos(5 v x)}{x^2}$. Compute the product $f_u \\cdot f_v$.",
    "answer": "75v",
    "steps": "\\begin{aligned}\nf(u,v) &= \\lim_{x \\to 0} \\frac{e^{3ux^2} - \\cos(5vx)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{6ux e^{3ux^2} + 5v\\sin(5vx)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{6u e^{3ux^2} + 6ux(6ux)e^{3ux^2} + 25v^2\\cos(5vx)}{2} \\\\\n&= \\frac{6u(1) + 0 + 25v^2(1)}{2} = 3u + \\frac{25}{2}v^2 \\\\[10pt]\nf_u &= \\frac{\\partial}{\\partial u}\\left(3u + \\frac{25}{2}v^2\\right) = 3 \\\\\nf_v &= \\frac{\\partial}{\\partial v}\\left(3u + \\frac{25}{2}v^2\\right) = 25v \\\\[10pt]\nf_u \\cdot f_v &= (3)(25v) = 75v\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch1_47",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 4x^2} - \\cos(2x)}{x^2}$.",
    "answer": "4",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sqrt{1 + 4x^2} - \\cos(2x)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{\\frac{4x}{\\sqrt{1 + 4x^2}} + 2\\sin(2x)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{ \\frac{4\\sqrt{1 + 4x^2} - 4x\\left(\\frac{4x}{\\sqrt{1 + 4x^2}}\\right)}{1 + 4x^2} + 4\\cos(2x) }{2} \\\\\n&= \\lim_{x \\to 0} \\frac{ \\frac{4 - 16x^2}{(1 + 4x^2)^{3/2}} + 4\\cos(2x) }{2} \\\\\n&= \\frac{4 + 4}{2} = 4\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch2_47",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{e^{5x} - \\ln(1+4x) - 1 - 1x}{x^2}$.",
    "answer": "\\frac{41}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{e^{5x} - \\ln(1+4x) - 1 - 1x}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{5e^{5x} - \\frac{4}{1+4x} - 1}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{25e^{5x} - 4(-1)(1+4x)^{-2}(4)}{2} \\\\\n&= \\lim_{x \\to 0} \\frac{25e^{5x} + \\frac{16}{(1+4x)^2}}{2} \\\\\n&= \\frac{25(1) + 16(1)}{2} = \\frac{41}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch3_47",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(6x)}{x^3}$.",
    "answer": "\\frac{104}{3}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(6x)}{x^3} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{2\\cos(2x) - \\left(2\\cos(6x) - 12x\\sin(6x)\\right)}{3x^2} \\\\\n&= \\lim_{x \\to 0} \\frac{2\\cos(2x) - 2\\cos(6x) + 12x\\sin(6x)}{3x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 12\\sin(6x) + 12\\sin(6x) + 72x\\cos(6x)}{6x} \\\\\n&= \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 24\\sin(6x) + 72x\\cos(6x)}{6x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-8\\cos(2x) + 144\\cos(6x) + 72\\cos(6x) - 432x\\sin(6x)}{6} \\\\\n&= \\frac{-8(1) + 216(1) - 0}{6} = \\frac{104}{3}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch4_47",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} (1 + 3\\sin x)^{\\frac{4}{x}}$.",
    "answer": "e^{12}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} (1 + 3\\sin x)^{\\frac{4}{x}} \\quad (1^{\\infty}) \\\\\n\\ln L &= \\lim_{x \\to 0} \\frac{4\\ln(1 + 3\\sin x)}{x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{4 \\cdot \\frac{3\\cos x}{1 + 3\\sin x}}{1} \\\\\n&= \\frac{12(1)}{1 + 0} = 12 \\\\\nL &= e^{12}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch5_47",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $L(y) = \\lim_{x \\to 0} \\frac{\\cosh(4xy) - \\cos(6xy)}{x^2}$. \\\\ Find the derivative $L'(y)$.",
    "answer": "52y",
    "steps": "\\begin{aligned}\nL(y) &= \\lim_{x \\to 0} \\frac{\\cosh(4xy) - \\cos(6xy)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4y\\sinh(4xy) + 6y\\sin(6xy)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{16y^2\\cosh(4xy) + 36y^2\\cos(6xy)}{2} \\\\\n&= \\frac{16y^2(1) + 36y^2(1)}{2} = 26y^2 \\\\[10pt]\nL'(y) &= \\frac{d}{dy} \\left( 26y^2 \\right) = 52y\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch6_47",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $f(u,v) = \\lim_{x \\to 0} \\frac{e^{3 u x^2} - \\cos(5 v x)}{x^2}$. Compute the product $f_u \\cdot f_v$.",
    "answer": "75v",
    "steps": "\\begin{aligned}\nf(u,v) &= \\lim_{x \\to 0} \\frac{e^{3ux^2} - \\cos(5vx)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{6ux e^{3ux^2} + 5v\\sin(5vx)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{6u e^{3ux^2} + 6ux(6ux)e^{3ux^2} + 25v^2\\cos(5vx)}{2} \\\\\n&= \\frac{6u(1) + 0 + 25v^2(1)}{2} = 3u + \\frac{25}{2}v^2 \\\\[10pt]\nf_u &= \\frac{\\partial}{\\partial u}\\left(3u + \\frac{25}{2}v^2\\right) = 3 \\\\\nf_v &= \\frac{\\partial}{\\partial v}\\left(3u + \\frac{25}{2}v^2\\right) = 25v \\\\[10pt]\nf_u \\cdot f_v &= (3)(25v) = 75v\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch1_48",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 6x^2} - \\cos(3x)}{x^2}$.",
    "answer": "\\frac{15}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sqrt{1 + 6x^2} - \\cos(3x)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{\\frac{6x}{\\sqrt{1 + 6x^2}} + 3\\sin(3x)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{ \\frac{6\\sqrt{1 + 6x^2} - 6x\\left(\\frac{6x}{\\sqrt{1 + 6x^2}}\\right)}{1 + 6x^2} + 9\\cos(3x) }{2} \\\\\n&= \\lim_{x \\to 0} \\frac{ \\frac{6 - 36x^2}{(1 + 6x^2)^{3/2}} + 9\\cos(3x) }{2} \\\\\n&= \\frac{6 + 9}{2} = \\frac{15}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch2_48",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{e^{6x} - \\ln(1+5x) - 1 - 1x}{x^2}$.",
    "answer": "\\frac{61}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{e^{6x} - \\ln(1+5x) - 1 - 1x}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{6e^{6x} - \\frac{5}{1+5x} - 1}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{36e^{6x} - 5(-1)(1+5x)^{-2}(5)}{2} \\\\\n&= \\lim_{x \\to 0} \\frac{36e^{6x} + \\frac{25}{(1+5x)^2}}{2} \\\\\n&= \\frac{36(1) + 25(1)}{2} = \\frac{61}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch3_48",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(5x)}{x^3}$.",
    "answer": "\\frac{71}{3}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sin(2x) - 2x\\cos(5x)}{x^3} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{2\\cos(2x) - \\left(2\\cos(5x) - 10x\\sin(5x)\\right)}{3x^2} \\\\\n&= \\lim_{x \\to 0} \\frac{2\\cos(2x) - 2\\cos(5x) + 10x\\sin(5x)}{3x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 10\\sin(5x) + 10\\sin(5x) + 50x\\cos(5x)}{6x} \\\\\n&= \\lim_{x \\to 0} \\frac{-4\\sin(2x) + 20\\sin(5x) + 50x\\cos(5x)}{6x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-8\\cos(2x) + 100\\cos(5x) + 50\\cos(5x) - 250x\\sin(5x)}{6} \\\\\n&= \\frac{-8(1) + 150(1) - 0}{6} = \\frac{71}{3}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch4_48",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} (1 + 4\\sin x)^{\\frac{3}{x}}$.",
    "answer": "e^{12}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} (1 + 4\\sin x)^{\\frac{3}{x}} \\quad (1^{\\infty}) \\\\\n\\ln L &= \\lim_{x \\to 0} \\frac{3\\ln(1 + 4\\sin x)}{x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{3 \\cdot \\frac{4\\cos x}{1 + 4\\sin x}}{1} \\\\\n&= \\frac{12(1)}{1 + 0} = 12 \\\\\nL &= e^{12}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch5_48",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $L(y) = \\lim_{x \\to 0} \\frac{\\cosh(4xy) - \\cos(5xy)}{x^2}$. \\\\ Find the derivative $L'(y)$.",
    "answer": "41y",
    "steps": "\\begin{aligned}\nL(y) &= \\lim_{x \\to 0} \\frac{\\cosh(4xy) - \\cos(5xy)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{4y\\sinh(4xy) + 5y\\sin(5xy)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{16y^2\\cosh(4xy) + 25y^2\\cos(5xy)}{2} \\\\\n&= \\frac{16y^2(1) + 25y^2(1)}{2} = \\frac{41}{2}y^2 \\\\[10pt]\nL'(y) &= \\frac{d}{dy} \\left( \\frac{41}{2}y^2 \\right) = 41y\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch6_48",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $f(u,v) = \\lim_{x \\to 0} \\frac{e^{5 u x^2} - \\cos(4 v x)}{x^2}$. Compute the product $f_u \\cdot f_v$.",
    "answer": "80v",
    "steps": "\\begin{aligned}\nf(u,v) &= \\lim_{x \\to 0} \\frac{e^{5ux^2} - \\cos(4vx)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{10ux e^{5ux^2} + 4v\\sin(4vx)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{10u e^{5ux^2} + 10ux(10ux)e^{5ux^2} + 16v^2\\cos(4vx)}{2} \\\\\n&= \\frac{10u(1) + 0 + 16v^2(1)}{2} = 5u + \\frac{16}{2}v^2 \\\\[10pt]\nf_u &= \\frac{\\partial}{\\partial u}\\left(5u + \\frac{16}{2}v^2\\right) = 5 \\\\\nf_v &= \\frac{\\partial}{\\partial v}\\left(5u + \\frac{16}{2}v^2\\right) = 16v \\\\[10pt]\nf_u \\cdot f_v &= (5)(16v) = 80v\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch1_49",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sqrt{1 + 2x^2} - \\cos(3x)}{x^2}$.",
    "answer": "\\frac{11}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sqrt{1 + 2x^2} - \\cos(3x)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{\\frac{2x}{\\sqrt{1 + 2x^2}} + 3\\sin(3x)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{ \\frac{2\\sqrt{1 + 2x^2} - 2x\\left(\\frac{2x}{\\sqrt{1 + 2x^2}}\\right)}{1 + 2x^2} + 9\\cos(3x) }{2} \\\\\n&= \\lim_{x \\to 0} \\frac{ \\frac{2 - 4x^2}{(1 + 2x^2)^{3/2}} + 9\\cos(3x) }{2} \\\\\n&= \\frac{2 + 9}{2} = \\frac{11}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch2_49",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{e^{3x} - \\ln(1+5x) - 1 - -2x}{x^2}$.",
    "answer": "17",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{e^{3x} - \\ln(1+5x) - 1 - -2x}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{3e^{3x} - \\frac{5}{1+5x} - -2}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{9e^{3x} - 5(-1)(1+5x)^{-2}(5)}{2} \\\\\n&= \\lim_{x \\to 0} \\frac{9e^{3x} + \\frac{25}{(1+5x)^2}}{2} \\\\\n&= \\frac{9(1) + 25(1)}{2} = 17\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch3_49",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} \\frac{\\sin(3x) - 3x\\cos(4x)}{x^3}$.",
    "answer": "\\frac{39}{2}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} \\frac{\\sin(3x) - 3x\\cos(4x)}{x^3} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{3\\cos(3x) - \\left(3\\cos(4x) - 12x\\sin(4x)\\right)}{3x^2} \\\\\n&= \\lim_{x \\to 0} \\frac{3\\cos(3x) - 3\\cos(4x) + 12x\\sin(4x)}{3x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-9\\sin(3x) + 12\\sin(4x) + 12\\sin(4x) + 48x\\cos(4x)}{6x} \\\\\n&= \\lim_{x \\to 0} \\frac{-9\\sin(3x) + 24\\sin(4x) + 48x\\cos(4x)}{6x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{-27\\cos(3x) + 96\\cos(4x) + 48\\cos(4x) - 192x\\sin(4x)}{6} \\\\\n&= \\frac{-27(1) + 144(1) - 0}{6} = \\frac{39}{2}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch4_49",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Evaluate the limit $L = \\lim_{x \\to 0} (1 + 4\\sin x)^{\\frac{5}{x}}$.",
    "answer": "e^{20}",
    "steps": "\\begin{aligned}\nL &= \\lim_{x \\to 0} (1 + 4\\sin x)^{\\frac{5}{x}} \\quad (1^{\\infty}) \\\\\n\\ln L &= \\lim_{x \\to 0} \\frac{5\\ln(1 + 4\\sin x)}{x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H} \\lim_{x \\to 0} \\frac{5 \\cdot \\frac{4\\cos x}{1 + 4\\sin x}}{1} \\\\\n&= \\frac{20(1)}{1 + 0} = 20 \\\\\nL &= e^{20}\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch5_49",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $L(y) = \\lim_{x \\to 0} \\frac{\\cosh(3xy) - \\cos(6xy)}{x^2}$. \\\\ Find the derivative $L'(y)$.",
    "answer": "45y",
    "steps": "\\begin{aligned}\nL(y) &= \\lim_{x \\to 0} \\frac{\\cosh(3xy) - \\cos(6xy)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{3y\\sinh(3xy) + 6y\\sin(6xy)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{9y^2\\cosh(3xy) + 36y^2\\cos(6xy)}{2} \\\\\n&= \\frac{9y^2(1) + 36y^2(1)}{2} = \\frac{45}{2}y^2 \\\\[10pt]\nL'(y) &= \\frac{d}{dy} \\left( \\frac{45}{2}y^2 \\right) = 45y\n\\end{aligned}"
  },
  {
    "id": "gen_lhop_arch6_49",
    "topic": "L'Hôpital's Rule",
    "category": "Evaluating Indeterminate Limits",
    "difficulty": "very_hard",
    "statement": "Let $f(u,v) = \\lim_{x \\to 0} \\frac{e^{5 u x^2} - \\cos(4 v x)}{x^2}$. Compute the product $f_u \\cdot f_v$.",
    "answer": "80v",
    "steps": "\\begin{aligned}\nf(u,v) &= \\lim_{x \\to 0} \\frac{e^{5ux^2} - \\cos(4vx)}{x^2} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{10ux e^{5ux^2} + 4v\\sin(4vx)}{2x} \\quad \\left(\\frac{0}{0}\\right) \\\\\n&\\xrightarrow{L'H_x} \\lim_{x \\to 0} \\frac{10u e^{5ux^2} + 10ux(10ux)e^{5ux^2} + 16v^2\\cos(4vx)}{2} \\\\\n&= \\frac{10u(1) + 0 + 16v^2(1)}{2} = 5u + \\frac{16}{2}v^2 \\\\[10pt]\nf_u &= \\frac{\\partial}{\\partial u}\\left(5u + \\frac{16}{2}v^2\\right) = 5 \\\\\nf_v &= \\frac{\\partial}{\\partial v}\\left(5u + \\frac{16}{2}v^2\\right) = 16v \\\\[10pt]\nf_u \\cdot f_v &= (5)(16v) = 80v\n\\end{aligned}"
  }
];
