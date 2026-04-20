// Generates 300 very hard Higher-Order Derivatives calculus problems
export const generatedHigherOrderProblems: any[] = [
  {
    "id": "gen_higher_order_arch1_0",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = x^2 e^{3x}$.",
    "answer": "e^{3x}(27x^2 + 54x + 18)",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{d}{dx}(x^2)e^{3x} + x^2\\frac{d}{dx}(e^{3x}) \\\\\n&= 2x e^{3x} + 3x^2 e^{3x} = e^{3x}(3x^2 + 2x) \\\\[10pt]\nf''(x) &= \\frac{d}{dx}(e^{3x})(3x^2 + 2x) + e^{3x}\\frac{d}{dx}(3x^2 + 2x) \\\\\n&= 3e^{3x}(3x^2 + 2x) + e^{3x}(6x + 2) \\\\\n&= e^{3x}(9x^2 + 6x + 6x + 2) = e^{3x}(9x^2 + 12x + 2) \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(e^{3x})(9x^2 + 12x + 2) + e^{3x}\\frac{d}{dx}(9x^2 + 12x + 2) \\\\\n&= 3e^{3x}(9x^2 + 12x + 2) + e^{3x}(18x + 12) \\\\\n&= e^{3x}(27x^2 + 36x + 6 + 18x + 12) \\\\\n&= e^{3x}(27x^2 + 54x + 18) \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch2_0",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = e^{4x} \\sin(5x)$.",
    "answer": "e^{4x} \\left[ -236\\sin(5x) + 115\\cos(5x) \\right]",
    "steps": "\\begin{aligned}\nf'(x) &= e^{4x}(4\\sin(5x)) + e^{4x}(5\\cos(5x)) \\\\\n&= e^{4x}(4\\sin(5x) + 5\\cos(5x)) \\\\[10pt]\nf''(x) &= 4e^{4x}(4\\sin(5x) + 5\\cos(5x)) + e^{4x}(20\\cos(5x) - 25\\sin(5x)) \\\\\n&= e^{4x} \\left[ (16 - 25)\\sin(5x) + (20 + 20)\\cos(5x) \\right] \\\\\n&= e^{4x} \\left[ -9\\sin(5x) + 40\\cos(5x) \\right] \\\\[10pt]\nf'''(x) &= 4e^{4x} \\left[ -9\\sin(5x) + 40\\cos(5x) \\right] + e^{4x} \\left[ -45\\cos(5x) - 200\\sin(5x) \\right] \\\\\n&= e^{4x} \\left[ (-36 - 200)\\sin(5x) + (160 + -45)\\cos(5x) \\right] \\\\\n&= e^{4x} \\left[ (-236)\\sin(5x) + (115)\\cos(5x) \\right] \\\\\n&= e^{4x} \\left[ -236\\sin(5x) + 115\\cos(5x) \\right] \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch3_0",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\ln(9x^2 - 4)$ for $x > \\frac{2}{3}$. \\\\ \\textit{Hint: Factor the argument first.}",
    "answer": "\\frac{54}{(3x-2)^3} + \\frac{54}{(3x+2)^3}",
    "steps": "\\begin{aligned}\nf(x) &= \\ln((3x - 2)(3x + 2)) = \\ln(3x - 2) + \\ln(3x + 2) \\\\[10pt]\nf'(x) &= \\frac{3}{3x - 2} + \\frac{3}{3x + 2} \\\\\n&= 3(3x - 2)^{-1} + 3(3x + 2)^{-1} \\\\[10pt]\nf''(x) &= -9(3x - 2)^{-2} - 9(3x + 2)^{-2} \\\\[10pt]\nf'''(x) &= 54(3x - 2)^{-3} + 54(3x + 2)^{-3} \\\\\n&= \\frac{54}{(3x-2)^3} + \\frac{54}{(3x+2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch4_0",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\arctan(5x)$.",
    "answer": "\\frac{250(75x^2 - 1)}{(1 + 25x^2)^3}",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{5}{1 + (5x)^2} = 5(1 + 25x^2)^{-1} \\\\[10pt]\nf''(x) &= -5(1 + 25x^2)^{-2} (\\frac{d}{dx}(1 + 25x^2)) \\\\\n&= -5(1 + 25x^2)^{-2} (50x) = -250x(1 + 25x^2)^{-2} \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(-250x)(1 + 25x^2)^{-2} + (-250x)\\frac{d}{dx}((1 + 25x^2)^{-2}) \\\\\n&= -250(1 + 25x^2)^{-2} + (-250x)(-2)(1 + 25x^2)^{-3}(50x) \\\\\n&= \\frac{-250}{(1 + 25x^2)^2} + \\frac{25000x^2}{(1 + 25x^2)^3} \\\\\n&= \\frac{-250(1 + 25x^2) + 25000x^2}{(1 + 25x^2)^3} \\\\\n&= \\frac{-250 - 6250x^2 + 25000x^2}{(1 + 25x^2)^3} \\\\\n&= \\frac{-250 + 18750x^2}{(1 + 25x^2)^3} \\\\\n&= \\frac{250(75x^2 - 1)}{(1 + 25x^2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch5_0",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fourth derivative $f^{(4)}(x)$ of $f(x) = \\frac{4}{\\sqrt{3x + 1}}$.",
    "answer": "\\frac{34020}{16(3x + 1)^{9/2}}",
    "steps": "\\begin{aligned}\nf(x) &= 4(3x + 1)^{-1/2} \\\\[10pt]\nf'(x) &= 4 \\left(-\\frac{1}{2}\\right)(3x + 1)^{-3/2}(3) = -\\frac{12}{2}(3x + 1)^{-3/2} \\\\[10pt]\nf''(x) &= -\\frac{12}{2} \\left(-\\frac{3}{2}\\right)(3x + 1)^{-5/2}(3) = \\frac{108}{4}(3x + 1)^{-5/2} \\\\[10pt]\nf'''(x) &= \\frac{108}{4} \\left(-\\frac{5}{2}\\right)(3x + 1)^{-7/2}(3) = -\\frac{1620}{8}(3x + 1)^{-7/2} \\\\[10pt]\nf^{(4)}(x) &= -\\frac{1620}{8} \\left(-\\frac{7}{2}\\right)(3x + 1)^{-9/2}(3) = \\frac{34020}{16}(3x + 1)^{-9/2} \\\\\n&= \\frac{34020}{16(3x + 1)^{9/2}} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch6_0",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fifth derivative $f^{(5)}(x)$ of $f(x) = 5x^3 \\ln(5x)$.",
    "answer": "-\\frac{30}{x^2}",
    "steps": "\\begin{aligned}\nf'(x) &= 5 \\left[ 3x^2 \\ln(5x) + x^3 \\left(\\frac{1}{x}\\right) \\right] = 5(3x^2 \\ln(5x) + x^2) \\\\[10pt]\nf''(x) &= 5 \\left[ 6x \\ln(5x) + 3x^2 \\left(\\frac{1}{x}\\right) + 2x \\right] = 5(6x \\ln(5x) + 5x) \\\\[10pt]\nf'''(x) &= 5 \\left[ 6\\ln(5x) + 6x \\left(\\frac{1}{x}\\right) + 5 \\right] = 5(6\\ln(5x) + 11) \\\\[10pt]\nf^{(4)}(x) &= 5 \\left[ 6 \\left(\\frac{1}{x}\\right) + 0 \\right] = \\frac{30}{x} = 30x^{-1} \\\\[10pt]\nf^{(5)}(x) &= -30x^{-2} = -\\frac{30}{x^2} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch1_1",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = x^2 e^{5x}$.",
    "answer": "e^{5x}(125x^2 + 150x + 30)",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{d}{dx}(x^2)e^{5x} + x^2\\frac{d}{dx}(e^{5x}) \\\\\n&= 2x e^{5x} + 5x^2 e^{5x} = e^{5x}(5x^2 + 2x) \\\\[10pt]\nf''(x) &= \\frac{d}{dx}(e^{5x})(5x^2 + 2x) + e^{5x}\\frac{d}{dx}(5x^2 + 2x) \\\\\n&= 5e^{5x}(5x^2 + 2x) + e^{5x}(10x + 2) \\\\\n&= e^{5x}(25x^2 + 10x + 10x + 2) = e^{5x}(25x^2 + 20x + 2) \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(e^{5x})(25x^2 + 20x + 2) + e^{5x}\\frac{d}{dx}(25x^2 + 20x + 2) \\\\\n&= 5e^{5x}(25x^2 + 20x + 2) + e^{5x}(50x + 20) \\\\\n&= e^{5x}(125x^2 + 100x + 10 + 50x + 20) \\\\\n&= e^{5x}(125x^2 + 150x + 30) \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch2_1",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = e^{2x} \\sin(3x)$.",
    "answer": "e^{2x} \\left[ -46\\sin(3x) + 9\\cos(3x) \\right]",
    "steps": "\\begin{aligned}\nf'(x) &= e^{2x}(2\\sin(3x)) + e^{2x}(3\\cos(3x)) \\\\\n&= e^{2x}(2\\sin(3x) + 3\\cos(3x)) \\\\[10pt]\nf''(x) &= 2e^{2x}(2\\sin(3x) + 3\\cos(3x)) + e^{2x}(6\\cos(3x) - 9\\sin(3x)) \\\\\n&= e^{2x} \\left[ (4 - 9)\\sin(3x) + (6 + 6)\\cos(3x) \\right] \\\\\n&= e^{2x} \\left[ -5\\sin(3x) + 12\\cos(3x) \\right] \\\\[10pt]\nf'''(x) &= 2e^{2x} \\left[ -5\\sin(3x) + 12\\cos(3x) \\right] + e^{2x} \\left[ -15\\cos(3x) - 36\\sin(3x) \\right] \\\\\n&= e^{2x} \\left[ (-10 - 36)\\sin(3x) + (24 + -15)\\cos(3x) \\right] \\\\\n&= e^{2x} \\left[ (-46)\\sin(3x) + (9)\\cos(3x) \\right] \\\\\n&= e^{2x} \\left[ -46\\sin(3x) + 9\\cos(3x) \\right] \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch3_1",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\ln(25x^2 - 49)$ for $x > \\frac{7}{5}$. \\\\ \\textit{Hint: Factor the argument first.}",
    "answer": "\\frac{250}{(5x-7)^3} + \\frac{250}{(5x+7)^3}",
    "steps": "\\begin{aligned}\nf(x) &= \\ln((5x - 7)(5x + 7)) = \\ln(5x - 7) + \\ln(5x + 7) \\\\[10pt]\nf'(x) &= \\frac{5}{5x - 7} + \\frac{5}{5x + 7} \\\\\n&= 5(5x - 7)^{-1} + 5(5x + 7)^{-1} \\\\[10pt]\nf''(x) &= -25(5x - 7)^{-2} - 25(5x + 7)^{-2} \\\\[10pt]\nf'''(x) &= 250(5x - 7)^{-3} + 250(5x + 7)^{-3} \\\\\n&= \\frac{250}{(5x-7)^3} + \\frac{250}{(5x+7)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch4_1",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\arctan(2x)$.",
    "answer": "\\frac{16(12x^2 - 1)}{(1 + 4x^2)^3}",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{2}{1 + (2x)^2} = 2(1 + 4x^2)^{-1} \\\\[10pt]\nf''(x) &= -2(1 + 4x^2)^{-2} (\\frac{d}{dx}(1 + 4x^2)) \\\\\n&= -2(1 + 4x^2)^{-2} (8x) = -16x(1 + 4x^2)^{-2} \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(-16x)(1 + 4x^2)^{-2} + (-16x)\\frac{d}{dx}((1 + 4x^2)^{-2}) \\\\\n&= -16(1 + 4x^2)^{-2} + (-16x)(-2)(1 + 4x^2)^{-3}(8x) \\\\\n&= \\frac{-16}{(1 + 4x^2)^2} + \\frac{256x^2}{(1 + 4x^2)^3} \\\\\n&= \\frac{-16(1 + 4x^2) + 256x^2}{(1 + 4x^2)^3} \\\\\n&= \\frac{-16 - 64x^2 + 256x^2}{(1 + 4x^2)^3} \\\\\n&= \\frac{-16 + 192x^2}{(1 + 4x^2)^3} \\\\\n&= \\frac{16(12x^2 - 1)}{(1 + 4x^2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch5_1",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fourth derivative $f^{(4)}(x)$ of $f(x) = \\frac{8}{\\sqrt{2x + 1}}$.",
    "answer": "\\frac{13440}{16(2x + 1)^{9/2}}",
    "steps": "\\begin{aligned}\nf(x) &= 8(2x + 1)^{-1/2} \\\\[10pt]\nf'(x) &= 8 \\left(-\\frac{1}{2}\\right)(2x + 1)^{-3/2}(2) = -\\frac{16}{2}(2x + 1)^{-3/2} \\\\[10pt]\nf''(x) &= -\\frac{16}{2} \\left(-\\frac{3}{2}\\right)(2x + 1)^{-5/2}(2) = \\frac{96}{4}(2x + 1)^{-5/2} \\\\[10pt]\nf'''(x) &= \\frac{96}{4} \\left(-\\frac{5}{2}\\right)(2x + 1)^{-7/2}(2) = -\\frac{960}{8}(2x + 1)^{-7/2} \\\\[10pt]\nf^{(4)}(x) &= -\\frac{960}{8} \\left(-\\frac{7}{2}\\right)(2x + 1)^{-9/2}(2) = \\frac{13440}{16}(2x + 1)^{-9/2} \\\\\n&= \\frac{13440}{16(2x + 1)^{9/2}} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch6_1",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fifth derivative $f^{(5)}(x)$ of $f(x) = 7x^3 \\ln(3x)$.",
    "answer": "-\\frac{42}{x^2}",
    "steps": "\\begin{aligned}\nf'(x) &= 7 \\left[ 3x^2 \\ln(3x) + x^3 \\left(\\frac{1}{x}\\right) \\right] = 7(3x^2 \\ln(3x) + x^2) \\\\[10pt]\nf''(x) &= 7 \\left[ 6x \\ln(3x) + 3x^2 \\left(\\frac{1}{x}\\right) + 2x \\right] = 7(6x \\ln(3x) + 5x) \\\\[10pt]\nf'''(x) &= 7 \\left[ 6\\ln(3x) + 6x \\left(\\frac{1}{x}\\right) + 5 \\right] = 7(6\\ln(3x) + 11) \\\\[10pt]\nf^{(4)}(x) &= 7 \\left[ 6 \\left(\\frac{1}{x}\\right) + 0 \\right] = \\frac{42}{x} = 42x^{-1} \\\\[10pt]\nf^{(5)}(x) &= -42x^{-2} = -\\frac{42}{x^2} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch1_2",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = x^2 e^{2x}$.",
    "answer": "e^{2x}(8x^2 + 24x + 12)",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{d}{dx}(x^2)e^{2x} + x^2\\frac{d}{dx}(e^{2x}) \\\\\n&= 2x e^{2x} + 2x^2 e^{2x} = e^{2x}(2x^2 + 2x) \\\\[10pt]\nf''(x) &= \\frac{d}{dx}(e^{2x})(2x^2 + 2x) + e^{2x}\\frac{d}{dx}(2x^2 + 2x) \\\\\n&= 2e^{2x}(2x^2 + 2x) + e^{2x}(4x + 2) \\\\\n&= e^{2x}(4x^2 + 4x + 4x + 2) = e^{2x}(4x^2 + 8x + 2) \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(e^{2x})(4x^2 + 8x + 2) + e^{2x}\\frac{d}{dx}(4x^2 + 8x + 2) \\\\\n&= 2e^{2x}(4x^2 + 8x + 2) + e^{2x}(8x + 8) \\\\\n&= e^{2x}(8x^2 + 16x + 4 + 8x + 8) \\\\\n&= e^{2x}(8x^2 + 24x + 12) \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch2_2",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = e^{4x} \\sin(5x)$.",
    "answer": "e^{4x} \\left[ -236\\sin(5x) + 115\\cos(5x) \\right]",
    "steps": "\\begin{aligned}\nf'(x) &= e^{4x}(4\\sin(5x)) + e^{4x}(5\\cos(5x)) \\\\\n&= e^{4x}(4\\sin(5x) + 5\\cos(5x)) \\\\[10pt]\nf''(x) &= 4e^{4x}(4\\sin(5x) + 5\\cos(5x)) + e^{4x}(20\\cos(5x) - 25\\sin(5x)) \\\\\n&= e^{4x} \\left[ (16 - 25)\\sin(5x) + (20 + 20)\\cos(5x) \\right] \\\\\n&= e^{4x} \\left[ -9\\sin(5x) + 40\\cos(5x) \\right] \\\\[10pt]\nf'''(x) &= 4e^{4x} \\left[ -9\\sin(5x) + 40\\cos(5x) \\right] + e^{4x} \\left[ -45\\cos(5x) - 200\\sin(5x) \\right] \\\\\n&= e^{4x} \\left[ (-36 - 200)\\sin(5x) + (160 + -45)\\cos(5x) \\right] \\\\\n&= e^{4x} \\left[ (-236)\\sin(5x) + (115)\\cos(5x) \\right] \\\\\n&= e^{4x} \\left[ -236\\sin(5x) + 115\\cos(5x) \\right] \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch3_2",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\ln(25x^2 - 1)$ for $x > \\frac{1}{5}$. \\\\ \\textit{Hint: Factor the argument first.}",
    "answer": "\\frac{250}{(5x-1)^3} + \\frac{250}{(5x+1)^3}",
    "steps": "\\begin{aligned}\nf(x) &= \\ln((5x - 1)(5x + 1)) = \\ln(5x - 1) + \\ln(5x + 1) \\\\[10pt]\nf'(x) &= \\frac{5}{5x - 1} + \\frac{5}{5x + 1} \\\\\n&= 5(5x - 1)^{-1} + 5(5x + 1)^{-1} \\\\[10pt]\nf''(x) &= -25(5x - 1)^{-2} - 25(5x + 1)^{-2} \\\\[10pt]\nf'''(x) &= 250(5x - 1)^{-3} + 250(5x + 1)^{-3} \\\\\n&= \\frac{250}{(5x-1)^3} + \\frac{250}{(5x+1)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch4_2",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\arctan(3x)$.",
    "answer": "\\frac{54(27x^2 - 1)}{(1 + 9x^2)^3}",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{3}{1 + (3x)^2} = 3(1 + 9x^2)^{-1} \\\\[10pt]\nf''(x) &= -3(1 + 9x^2)^{-2} (\\frac{d}{dx}(1 + 9x^2)) \\\\\n&= -3(1 + 9x^2)^{-2} (18x) = -54x(1 + 9x^2)^{-2} \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(-54x)(1 + 9x^2)^{-2} + (-54x)\\frac{d}{dx}((1 + 9x^2)^{-2}) \\\\\n&= -54(1 + 9x^2)^{-2} + (-54x)(-2)(1 + 9x^2)^{-3}(18x) \\\\\n&= \\frac{-54}{(1 + 9x^2)^2} + \\frac{1944x^2}{(1 + 9x^2)^3} \\\\\n&= \\frac{-54(1 + 9x^2) + 1944x^2}{(1 + 9x^2)^3} \\\\\n&= \\frac{-54 - 486x^2 + 1944x^2}{(1 + 9x^2)^3} \\\\\n&= \\frac{-54 + 1458x^2}{(1 + 9x^2)^3} \\\\\n&= \\frac{54(27x^2 - 1)}{(1 + 9x^2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch5_2",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fourth derivative $f^{(4)}(x)$ of $f(x) = \\frac{4}{\\sqrt{2x + 1}}$.",
    "answer": "\\frac{6720}{16(2x + 1)^{9/2}}",
    "steps": "\\begin{aligned}\nf(x) &= 4(2x + 1)^{-1/2} \\\\[10pt]\nf'(x) &= 4 \\left(-\\frac{1}{2}\\right)(2x + 1)^{-3/2}(2) = -\\frac{8}{2}(2x + 1)^{-3/2} \\\\[10pt]\nf''(x) &= -\\frac{8}{2} \\left(-\\frac{3}{2}\\right)(2x + 1)^{-5/2}(2) = \\frac{48}{4}(2x + 1)^{-5/2} \\\\[10pt]\nf'''(x) &= \\frac{48}{4} \\left(-\\frac{5}{2}\\right)(2x + 1)^{-7/2}(2) = -\\frac{480}{8}(2x + 1)^{-7/2} \\\\[10pt]\nf^{(4)}(x) &= -\\frac{480}{8} \\left(-\\frac{7}{2}\\right)(2x + 1)^{-9/2}(2) = \\frac{6720}{16}(2x + 1)^{-9/2} \\\\\n&= \\frac{6720}{16(2x + 1)^{9/2}} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch6_2",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fifth derivative $f^{(5)}(x)$ of $f(x) = 5x^3 \\ln(4x)$.",
    "answer": "-\\frac{30}{x^2}",
    "steps": "\\begin{aligned}\nf'(x) &= 5 \\left[ 3x^2 \\ln(4x) + x^3 \\left(\\frac{1}{x}\\right) \\right] = 5(3x^2 \\ln(4x) + x^2) \\\\[10pt]\nf''(x) &= 5 \\left[ 6x \\ln(4x) + 3x^2 \\left(\\frac{1}{x}\\right) + 2x \\right] = 5(6x \\ln(4x) + 5x) \\\\[10pt]\nf'''(x) &= 5 \\left[ 6\\ln(4x) + 6x \\left(\\frac{1}{x}\\right) + 5 \\right] = 5(6\\ln(4x) + 11) \\\\[10pt]\nf^{(4)}(x) &= 5 \\left[ 6 \\left(\\frac{1}{x}\\right) + 0 \\right] = \\frac{30}{x} = 30x^{-1} \\\\[10pt]\nf^{(5)}(x) &= -30x^{-2} = -\\frac{30}{x^2} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch1_3",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = x^2 e^{4x}$.",
    "answer": "e^{4x}(64x^2 + 96x + 24)",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{d}{dx}(x^2)e^{4x} + x^2\\frac{d}{dx}(e^{4x}) \\\\\n&= 2x e^{4x} + 4x^2 e^{4x} = e^{4x}(4x^2 + 2x) \\\\[10pt]\nf''(x) &= \\frac{d}{dx}(e^{4x})(4x^2 + 2x) + e^{4x}\\frac{d}{dx}(4x^2 + 2x) \\\\\n&= 4e^{4x}(4x^2 + 2x) + e^{4x}(8x + 2) \\\\\n&= e^{4x}(16x^2 + 8x + 8x + 2) = e^{4x}(16x^2 + 16x + 2) \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(e^{4x})(16x^2 + 16x + 2) + e^{4x}\\frac{d}{dx}(16x^2 + 16x + 2) \\\\\n&= 4e^{4x}(16x^2 + 16x + 2) + e^{4x}(32x + 16) \\\\\n&= e^{4x}(64x^2 + 64x + 8 + 32x + 16) \\\\\n&= e^{4x}(64x^2 + 96x + 24) \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch2_3",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = e^{3x} \\sin(4x)$.",
    "answer": "e^{3x} \\left[ -117\\sin(4x) + 44\\cos(4x) \\right]",
    "steps": "\\begin{aligned}\nf'(x) &= e^{3x}(3\\sin(4x)) + e^{3x}(4\\cos(4x)) \\\\\n&= e^{3x}(3\\sin(4x) + 4\\cos(4x)) \\\\[10pt]\nf''(x) &= 3e^{3x}(3\\sin(4x) + 4\\cos(4x)) + e^{3x}(12\\cos(4x) - 16\\sin(4x)) \\\\\n&= e^{3x} \\left[ (9 - 16)\\sin(4x) + (12 + 12)\\cos(4x) \\right] \\\\\n&= e^{3x} \\left[ -7\\sin(4x) + 24\\cos(4x) \\right] \\\\[10pt]\nf'''(x) &= 3e^{3x} \\left[ -7\\sin(4x) + 24\\cos(4x) \\right] + e^{3x} \\left[ -28\\cos(4x) - 96\\sin(4x) \\right] \\\\\n&= e^{3x} \\left[ (-21 - 96)\\sin(4x) + (72 + -28)\\cos(4x) \\right] \\\\\n&= e^{3x} \\left[ (-117)\\sin(4x) + (44)\\cos(4x) \\right] \\\\\n&= e^{3x} \\left[ -117\\sin(4x) + 44\\cos(4x) \\right] \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch3_3",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\ln(25x^2 - 49)$ for $x > \\frac{7}{5}$. \\\\ \\textit{Hint: Factor the argument first.}",
    "answer": "\\frac{250}{(5x-7)^3} + \\frac{250}{(5x+7)^3}",
    "steps": "\\begin{aligned}\nf(x) &= \\ln((5x - 7)(5x + 7)) = \\ln(5x - 7) + \\ln(5x + 7) \\\\[10pt]\nf'(x) &= \\frac{5}{5x - 7} + \\frac{5}{5x + 7} \\\\\n&= 5(5x - 7)^{-1} + 5(5x + 7)^{-1} \\\\[10pt]\nf''(x) &= -25(5x - 7)^{-2} - 25(5x + 7)^{-2} \\\\[10pt]\nf'''(x) &= 250(5x - 7)^{-3} + 250(5x + 7)^{-3} \\\\\n&= \\frac{250}{(5x-7)^3} + \\frac{250}{(5x+7)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch4_3",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\arctan(2x)$.",
    "answer": "\\frac{16(12x^2 - 1)}{(1 + 4x^2)^3}",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{2}{1 + (2x)^2} = 2(1 + 4x^2)^{-1} \\\\[10pt]\nf''(x) &= -2(1 + 4x^2)^{-2} (\\frac{d}{dx}(1 + 4x^2)) \\\\\n&= -2(1 + 4x^2)^{-2} (8x) = -16x(1 + 4x^2)^{-2} \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(-16x)(1 + 4x^2)^{-2} + (-16x)\\frac{d}{dx}((1 + 4x^2)^{-2}) \\\\\n&= -16(1 + 4x^2)^{-2} + (-16x)(-2)(1 + 4x^2)^{-3}(8x) \\\\\n&= \\frac{-16}{(1 + 4x^2)^2} + \\frac{256x^2}{(1 + 4x^2)^3} \\\\\n&= \\frac{-16(1 + 4x^2) + 256x^2}{(1 + 4x^2)^3} \\\\\n&= \\frac{-16 - 64x^2 + 256x^2}{(1 + 4x^2)^3} \\\\\n&= \\frac{-16 + 192x^2}{(1 + 4x^2)^3} \\\\\n&= \\frac{16(12x^2 - 1)}{(1 + 4x^2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch5_3",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fourth derivative $f^{(4)}(x)$ of $f(x) = \\frac{16}{\\sqrt{5x + 1}}$.",
    "answer": "\\frac{1050000}{16(5x + 1)^{9/2}}",
    "steps": "\\begin{aligned}\nf(x) &= 16(5x + 1)^{-1/2} \\\\[10pt]\nf'(x) &= 16 \\left(-\\frac{1}{2}\\right)(5x + 1)^{-3/2}(5) = -\\frac{80}{2}(5x + 1)^{-3/2} \\\\[10pt]\nf''(x) &= -\\frac{80}{2} \\left(-\\frac{3}{2}\\right)(5x + 1)^{-5/2}(5) = \\frac{1200}{4}(5x + 1)^{-5/2} \\\\[10pt]\nf'''(x) &= \\frac{1200}{4} \\left(-\\frac{5}{2}\\right)(5x + 1)^{-7/2}(5) = -\\frac{30000}{8}(5x + 1)^{-7/2} \\\\[10pt]\nf^{(4)}(x) &= -\\frac{30000}{8} \\left(-\\frac{7}{2}\\right)(5x + 1)^{-9/2}(5) = \\frac{1050000}{16}(5x + 1)^{-9/2} \\\\\n&= \\frac{1050000}{16(5x + 1)^{9/2}} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch6_3",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fifth derivative $f^{(5)}(x)$ of $f(x) = 7x^3 \\ln(3x)$.",
    "answer": "-\\frac{42}{x^2}",
    "steps": "\\begin{aligned}\nf'(x) &= 7 \\left[ 3x^2 \\ln(3x) + x^3 \\left(\\frac{1}{x}\\right) \\right] = 7(3x^2 \\ln(3x) + x^2) \\\\[10pt]\nf''(x) &= 7 \\left[ 6x \\ln(3x) + 3x^2 \\left(\\frac{1}{x}\\right) + 2x \\right] = 7(6x \\ln(3x) + 5x) \\\\[10pt]\nf'''(x) &= 7 \\left[ 6\\ln(3x) + 6x \\left(\\frac{1}{x}\\right) + 5 \\right] = 7(6\\ln(3x) + 11) \\\\[10pt]\nf^{(4)}(x) &= 7 \\left[ 6 \\left(\\frac{1}{x}\\right) + 0 \\right] = \\frac{42}{x} = 42x^{-1} \\\\[10pt]\nf^{(5)}(x) &= -42x^{-2} = -\\frac{42}{x^2} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch1_4",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = x^2 e^{3x}$.",
    "answer": "e^{3x}(27x^2 + 54x + 18)",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{d}{dx}(x^2)e^{3x} + x^2\\frac{d}{dx}(e^{3x}) \\\\\n&= 2x e^{3x} + 3x^2 e^{3x} = e^{3x}(3x^2 + 2x) \\\\[10pt]\nf''(x) &= \\frac{d}{dx}(e^{3x})(3x^2 + 2x) + e^{3x}\\frac{d}{dx}(3x^2 + 2x) \\\\\n&= 3e^{3x}(3x^2 + 2x) + e^{3x}(6x + 2) \\\\\n&= e^{3x}(9x^2 + 6x + 6x + 2) = e^{3x}(9x^2 + 12x + 2) \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(e^{3x})(9x^2 + 12x + 2) + e^{3x}\\frac{d}{dx}(9x^2 + 12x + 2) \\\\\n&= 3e^{3x}(9x^2 + 12x + 2) + e^{3x}(18x + 12) \\\\\n&= e^{3x}(27x^2 + 36x + 6 + 18x + 12) \\\\\n&= e^{3x}(27x^2 + 54x + 18) \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch2_4",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = e^{3x} \\sin(4x)$.",
    "answer": "e^{3x} \\left[ -117\\sin(4x) + 44\\cos(4x) \\right]",
    "steps": "\\begin{aligned}\nf'(x) &= e^{3x}(3\\sin(4x)) + e^{3x}(4\\cos(4x)) \\\\\n&= e^{3x}(3\\sin(4x) + 4\\cos(4x)) \\\\[10pt]\nf''(x) &= 3e^{3x}(3\\sin(4x) + 4\\cos(4x)) + e^{3x}(12\\cos(4x) - 16\\sin(4x)) \\\\\n&= e^{3x} \\left[ (9 - 16)\\sin(4x) + (12 + 12)\\cos(4x) \\right] \\\\\n&= e^{3x} \\left[ -7\\sin(4x) + 24\\cos(4x) \\right] \\\\[10pt]\nf'''(x) &= 3e^{3x} \\left[ -7\\sin(4x) + 24\\cos(4x) \\right] + e^{3x} \\left[ -28\\cos(4x) - 96\\sin(4x) \\right] \\\\\n&= e^{3x} \\left[ (-21 - 96)\\sin(4x) + (72 + -28)\\cos(4x) \\right] \\\\\n&= e^{3x} \\left[ (-117)\\sin(4x) + (44)\\cos(4x) \\right] \\\\\n&= e^{3x} \\left[ -117\\sin(4x) + 44\\cos(4x) \\right] \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch3_4",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\ln(4x^2 - 1)$ for $x > \\frac{1}{2}$. \\\\ \\textit{Hint: Factor the argument first.}",
    "answer": "\\frac{16}{(2x-1)^3} + \\frac{16}{(2x+1)^3}",
    "steps": "\\begin{aligned}\nf(x) &= \\ln((2x - 1)(2x + 1)) = \\ln(2x - 1) + \\ln(2x + 1) \\\\[10pt]\nf'(x) &= \\frac{2}{2x - 1} + \\frac{2}{2x + 1} \\\\\n&= 2(2x - 1)^{-1} + 2(2x + 1)^{-1} \\\\[10pt]\nf''(x) &= -4(2x - 1)^{-2} - 4(2x + 1)^{-2} \\\\[10pt]\nf'''(x) &= 16(2x - 1)^{-3} + 16(2x + 1)^{-3} \\\\\n&= \\frac{16}{(2x-1)^3} + \\frac{16}{(2x+1)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch4_4",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\arctan(4x)$.",
    "answer": "\\frac{128(48x^2 - 1)}{(1 + 16x^2)^3}",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{4}{1 + (4x)^2} = 4(1 + 16x^2)^{-1} \\\\[10pt]\nf''(x) &= -4(1 + 16x^2)^{-2} (\\frac{d}{dx}(1 + 16x^2)) \\\\\n&= -4(1 + 16x^2)^{-2} (32x) = -128x(1 + 16x^2)^{-2} \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(-128x)(1 + 16x^2)^{-2} + (-128x)\\frac{d}{dx}((1 + 16x^2)^{-2}) \\\\\n&= -128(1 + 16x^2)^{-2} + (-128x)(-2)(1 + 16x^2)^{-3}(32x) \\\\\n&= \\frac{-128}{(1 + 16x^2)^2} + \\frac{8192x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{-128(1 + 16x^2) + 8192x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{-128 - 2048x^2 + 8192x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{-128 + 6144x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{128(48x^2 - 1)}{(1 + 16x^2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch5_4",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fourth derivative $f^{(4)}(x)$ of $f(x) = \\frac{8}{\\sqrt{2x + 1}}$.",
    "answer": "\\frac{13440}{16(2x + 1)^{9/2}}",
    "steps": "\\begin{aligned}\nf(x) &= 8(2x + 1)^{-1/2} \\\\[10pt]\nf'(x) &= 8 \\left(-\\frac{1}{2}\\right)(2x + 1)^{-3/2}(2) = -\\frac{16}{2}(2x + 1)^{-3/2} \\\\[10pt]\nf''(x) &= -\\frac{16}{2} \\left(-\\frac{3}{2}\\right)(2x + 1)^{-5/2}(2) = \\frac{96}{4}(2x + 1)^{-5/2} \\\\[10pt]\nf'''(x) &= \\frac{96}{4} \\left(-\\frac{5}{2}\\right)(2x + 1)^{-7/2}(2) = -\\frac{960}{8}(2x + 1)^{-7/2} \\\\[10pt]\nf^{(4)}(x) &= -\\frac{960}{8} \\left(-\\frac{7}{2}\\right)(2x + 1)^{-9/2}(2) = \\frac{13440}{16}(2x + 1)^{-9/2} \\\\\n&= \\frac{13440}{16(2x + 1)^{9/2}} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch6_4",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fifth derivative $f^{(5)}(x)$ of $f(x) = 3x^3 \\ln(6x)$.",
    "answer": "-\\frac{18}{x^2}",
    "steps": "\\begin{aligned}\nf'(x) &= 3 \\left[ 3x^2 \\ln(6x) + x^3 \\left(\\frac{1}{x}\\right) \\right] = 3(3x^2 \\ln(6x) + x^2) \\\\[10pt]\nf''(x) &= 3 \\left[ 6x \\ln(6x) + 3x^2 \\left(\\frac{1}{x}\\right) + 2x \\right] = 3(6x \\ln(6x) + 5x) \\\\[10pt]\nf'''(x) &= 3 \\left[ 6\\ln(6x) + 6x \\left(\\frac{1}{x}\\right) + 5 \\right] = 3(6\\ln(6x) + 11) \\\\[10pt]\nf^{(4)}(x) &= 3 \\left[ 6 \\left(\\frac{1}{x}\\right) + 0 \\right] = \\frac{18}{x} = 18x^{-1} \\\\[10pt]\nf^{(5)}(x) &= -18x^{-2} = -\\frac{18}{x^2} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch1_5",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = x^2 e^{2x}$.",
    "answer": "e^{2x}(8x^2 + 24x + 12)",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{d}{dx}(x^2)e^{2x} + x^2\\frac{d}{dx}(e^{2x}) \\\\\n&= 2x e^{2x} + 2x^2 e^{2x} = e^{2x}(2x^2 + 2x) \\\\[10pt]\nf''(x) &= \\frac{d}{dx}(e^{2x})(2x^2 + 2x) + e^{2x}\\frac{d}{dx}(2x^2 + 2x) \\\\\n&= 2e^{2x}(2x^2 + 2x) + e^{2x}(4x + 2) \\\\\n&= e^{2x}(4x^2 + 4x + 4x + 2) = e^{2x}(4x^2 + 8x + 2) \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(e^{2x})(4x^2 + 8x + 2) + e^{2x}\\frac{d}{dx}(4x^2 + 8x + 2) \\\\\n&= 2e^{2x}(4x^2 + 8x + 2) + e^{2x}(8x + 8) \\\\\n&= e^{2x}(8x^2 + 16x + 4 + 8x + 8) \\\\\n&= e^{2x}(8x^2 + 24x + 12) \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch2_5",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = e^{4x} \\sin(2x)$.",
    "answer": "e^{4x} \\left[ 16\\sin(2x) + 88\\cos(2x) \\right]",
    "steps": "\\begin{aligned}\nf'(x) &= e^{4x}(4\\sin(2x)) + e^{4x}(2\\cos(2x)) \\\\\n&= e^{4x}(4\\sin(2x) + 2\\cos(2x)) \\\\[10pt]\nf''(x) &= 4e^{4x}(4\\sin(2x) + 2\\cos(2x)) + e^{4x}(8\\cos(2x) - 4\\sin(2x)) \\\\\n&= e^{4x} \\left[ (16 - 4)\\sin(2x) + (8 + 8)\\cos(2x) \\right] \\\\\n&= e^{4x} \\left[ 12\\sin(2x) + 16\\cos(2x) \\right] \\\\[10pt]\nf'''(x) &= 4e^{4x} \\left[ 12\\sin(2x) + 16\\cos(2x) \\right] + e^{4x} \\left[ 24\\cos(2x) - 32\\sin(2x) \\right] \\\\\n&= e^{4x} \\left[ (48 - 32)\\sin(2x) + (64 + 24)\\cos(2x) \\right] \\\\\n&= e^{4x} \\left[ (16)\\sin(2x) + (88)\\cos(2x) \\right] \\\\\n&= e^{4x} \\left[ 16\\sin(2x) + 88\\cos(2x) \\right] \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch3_5",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\ln(16x^2 - 1)$ for $x > \\frac{1}{4}$. \\\\ \\textit{Hint: Factor the argument first.}",
    "answer": "\\frac{128}{(4x-1)^3} + \\frac{128}{(4x+1)^3}",
    "steps": "\\begin{aligned}\nf(x) &= \\ln((4x - 1)(4x + 1)) = \\ln(4x - 1) + \\ln(4x + 1) \\\\[10pt]\nf'(x) &= \\frac{4}{4x - 1} + \\frac{4}{4x + 1} \\\\\n&= 4(4x - 1)^{-1} + 4(4x + 1)^{-1} \\\\[10pt]\nf''(x) &= -16(4x - 1)^{-2} - 16(4x + 1)^{-2} \\\\[10pt]\nf'''(x) &= 128(4x - 1)^{-3} + 128(4x + 1)^{-3} \\\\\n&= \\frac{128}{(4x-1)^3} + \\frac{128}{(4x+1)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch4_5",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\arctan(5x)$.",
    "answer": "\\frac{250(75x^2 - 1)}{(1 + 25x^2)^3}",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{5}{1 + (5x)^2} = 5(1 + 25x^2)^{-1} \\\\[10pt]\nf''(x) &= -5(1 + 25x^2)^{-2} (\\frac{d}{dx}(1 + 25x^2)) \\\\\n&= -5(1 + 25x^2)^{-2} (50x) = -250x(1 + 25x^2)^{-2} \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(-250x)(1 + 25x^2)^{-2} + (-250x)\\frac{d}{dx}((1 + 25x^2)^{-2}) \\\\\n&= -250(1 + 25x^2)^{-2} + (-250x)(-2)(1 + 25x^2)^{-3}(50x) \\\\\n&= \\frac{-250}{(1 + 25x^2)^2} + \\frac{25000x^2}{(1 + 25x^2)^3} \\\\\n&= \\frac{-250(1 + 25x^2) + 25000x^2}{(1 + 25x^2)^3} \\\\\n&= \\frac{-250 - 6250x^2 + 25000x^2}{(1 + 25x^2)^3} \\\\\n&= \\frac{-250 + 18750x^2}{(1 + 25x^2)^3} \\\\\n&= \\frac{250(75x^2 - 1)}{(1 + 25x^2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch5_5",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fourth derivative $f^{(4)}(x)$ of $f(x) = \\frac{16}{\\sqrt{2x + 1}}$.",
    "answer": "\\frac{26880}{16(2x + 1)^{9/2}}",
    "steps": "\\begin{aligned}\nf(x) &= 16(2x + 1)^{-1/2} \\\\[10pt]\nf'(x) &= 16 \\left(-\\frac{1}{2}\\right)(2x + 1)^{-3/2}(2) = -\\frac{32}{2}(2x + 1)^{-3/2} \\\\[10pt]\nf''(x) &= -\\frac{32}{2} \\left(-\\frac{3}{2}\\right)(2x + 1)^{-5/2}(2) = \\frac{192}{4}(2x + 1)^{-5/2} \\\\[10pt]\nf'''(x) &= \\frac{192}{4} \\left(-\\frac{5}{2}\\right)(2x + 1)^{-7/2}(2) = -\\frac{1920}{8}(2x + 1)^{-7/2} \\\\[10pt]\nf^{(4)}(x) &= -\\frac{1920}{8} \\left(-\\frac{7}{2}\\right)(2x + 1)^{-9/2}(2) = \\frac{26880}{16}(2x + 1)^{-9/2} \\\\\n&= \\frac{26880}{16(2x + 1)^{9/2}} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch6_5",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fifth derivative $f^{(5)}(x)$ of $f(x) = 4x^3 \\ln(3x)$.",
    "answer": "-\\frac{24}{x^2}",
    "steps": "\\begin{aligned}\nf'(x) &= 4 \\left[ 3x^2 \\ln(3x) + x^3 \\left(\\frac{1}{x}\\right) \\right] = 4(3x^2 \\ln(3x) + x^2) \\\\[10pt]\nf''(x) &= 4 \\left[ 6x \\ln(3x) + 3x^2 \\left(\\frac{1}{x}\\right) + 2x \\right] = 4(6x \\ln(3x) + 5x) \\\\[10pt]\nf'''(x) &= 4 \\left[ 6\\ln(3x) + 6x \\left(\\frac{1}{x}\\right) + 5 \\right] = 4(6\\ln(3x) + 11) \\\\[10pt]\nf^{(4)}(x) &= 4 \\left[ 6 \\left(\\frac{1}{x}\\right) + 0 \\right] = \\frac{24}{x} = 24x^{-1} \\\\[10pt]\nf^{(5)}(x) &= -24x^{-2} = -\\frac{24}{x^2} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch1_6",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = x^2 e^{5x}$.",
    "answer": "e^{5x}(125x^2 + 150x + 30)",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{d}{dx}(x^2)e^{5x} + x^2\\frac{d}{dx}(e^{5x}) \\\\\n&= 2x e^{5x} + 5x^2 e^{5x} = e^{5x}(5x^2 + 2x) \\\\[10pt]\nf''(x) &= \\frac{d}{dx}(e^{5x})(5x^2 + 2x) + e^{5x}\\frac{d}{dx}(5x^2 + 2x) \\\\\n&= 5e^{5x}(5x^2 + 2x) + e^{5x}(10x + 2) \\\\\n&= e^{5x}(25x^2 + 10x + 10x + 2) = e^{5x}(25x^2 + 20x + 2) \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(e^{5x})(25x^2 + 20x + 2) + e^{5x}\\frac{d}{dx}(25x^2 + 20x + 2) \\\\\n&= 5e^{5x}(25x^2 + 20x + 2) + e^{5x}(50x + 20) \\\\\n&= e^{5x}(125x^2 + 100x + 10 + 50x + 20) \\\\\n&= e^{5x}(125x^2 + 150x + 30) \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch2_6",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = e^{2x} \\sin(3x)$.",
    "answer": "e^{2x} \\left[ -46\\sin(3x) + 9\\cos(3x) \\right]",
    "steps": "\\begin{aligned}\nf'(x) &= e^{2x}(2\\sin(3x)) + e^{2x}(3\\cos(3x)) \\\\\n&= e^{2x}(2\\sin(3x) + 3\\cos(3x)) \\\\[10pt]\nf''(x) &= 2e^{2x}(2\\sin(3x) + 3\\cos(3x)) + e^{2x}(6\\cos(3x) - 9\\sin(3x)) \\\\\n&= e^{2x} \\left[ (4 - 9)\\sin(3x) + (6 + 6)\\cos(3x) \\right] \\\\\n&= e^{2x} \\left[ -5\\sin(3x) + 12\\cos(3x) \\right] \\\\[10pt]\nf'''(x) &= 2e^{2x} \\left[ -5\\sin(3x) + 12\\cos(3x) \\right] + e^{2x} \\left[ -15\\cos(3x) - 36\\sin(3x) \\right] \\\\\n&= e^{2x} \\left[ (-10 - 36)\\sin(3x) + (24 + -15)\\cos(3x) \\right] \\\\\n&= e^{2x} \\left[ (-46)\\sin(3x) + (9)\\cos(3x) \\right] \\\\\n&= e^{2x} \\left[ -46\\sin(3x) + 9\\cos(3x) \\right] \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch3_6",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\ln(4x^2 - 25)$ for $x > \\frac{5}{2}$. \\\\ \\textit{Hint: Factor the argument first.}",
    "answer": "\\frac{16}{(2x-5)^3} + \\frac{16}{(2x+5)^3}",
    "steps": "\\begin{aligned}\nf(x) &= \\ln((2x - 5)(2x + 5)) = \\ln(2x - 5) + \\ln(2x + 5) \\\\[10pt]\nf'(x) &= \\frac{2}{2x - 5} + \\frac{2}{2x + 5} \\\\\n&= 2(2x - 5)^{-1} + 2(2x + 5)^{-1} \\\\[10pt]\nf''(x) &= -4(2x - 5)^{-2} - 4(2x + 5)^{-2} \\\\[10pt]\nf'''(x) &= 16(2x - 5)^{-3} + 16(2x + 5)^{-3} \\\\\n&= \\frac{16}{(2x-5)^3} + \\frac{16}{(2x+5)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch4_6",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\arctan(4x)$.",
    "answer": "\\frac{128(48x^2 - 1)}{(1 + 16x^2)^3}",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{4}{1 + (4x)^2} = 4(1 + 16x^2)^{-1} \\\\[10pt]\nf''(x) &= -4(1 + 16x^2)^{-2} (\\frac{d}{dx}(1 + 16x^2)) \\\\\n&= -4(1 + 16x^2)^{-2} (32x) = -128x(1 + 16x^2)^{-2} \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(-128x)(1 + 16x^2)^{-2} + (-128x)\\frac{d}{dx}((1 + 16x^2)^{-2}) \\\\\n&= -128(1 + 16x^2)^{-2} + (-128x)(-2)(1 + 16x^2)^{-3}(32x) \\\\\n&= \\frac{-128}{(1 + 16x^2)^2} + \\frac{8192x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{-128(1 + 16x^2) + 8192x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{-128 - 2048x^2 + 8192x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{-128 + 6144x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{128(48x^2 - 1)}{(1 + 16x^2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch5_6",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fourth derivative $f^{(4)}(x)$ of $f(x) = \\frac{4}{\\sqrt{2x + 1}}$.",
    "answer": "\\frac{6720}{16(2x + 1)^{9/2}}",
    "steps": "\\begin{aligned}\nf(x) &= 4(2x + 1)^{-1/2} \\\\[10pt]\nf'(x) &= 4 \\left(-\\frac{1}{2}\\right)(2x + 1)^{-3/2}(2) = -\\frac{8}{2}(2x + 1)^{-3/2} \\\\[10pt]\nf''(x) &= -\\frac{8}{2} \\left(-\\frac{3}{2}\\right)(2x + 1)^{-5/2}(2) = \\frac{48}{4}(2x + 1)^{-5/2} \\\\[10pt]\nf'''(x) &= \\frac{48}{4} \\left(-\\frac{5}{2}\\right)(2x + 1)^{-7/2}(2) = -\\frac{480}{8}(2x + 1)^{-7/2} \\\\[10pt]\nf^{(4)}(x) &= -\\frac{480}{8} \\left(-\\frac{7}{2}\\right)(2x + 1)^{-9/2}(2) = \\frac{6720}{16}(2x + 1)^{-9/2} \\\\\n&= \\frac{6720}{16(2x + 1)^{9/2}} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch6_6",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fifth derivative $f^{(5)}(x)$ of $f(x) = 4x^3 \\ln(5x)$.",
    "answer": "-\\frac{24}{x^2}",
    "steps": "\\begin{aligned}\nf'(x) &= 4 \\left[ 3x^2 \\ln(5x) + x^3 \\left(\\frac{1}{x}\\right) \\right] = 4(3x^2 \\ln(5x) + x^2) \\\\[10pt]\nf''(x) &= 4 \\left[ 6x \\ln(5x) + 3x^2 \\left(\\frac{1}{x}\\right) + 2x \\right] = 4(6x \\ln(5x) + 5x) \\\\[10pt]\nf'''(x) &= 4 \\left[ 6\\ln(5x) + 6x \\left(\\frac{1}{x}\\right) + 5 \\right] = 4(6\\ln(5x) + 11) \\\\[10pt]\nf^{(4)}(x) &= 4 \\left[ 6 \\left(\\frac{1}{x}\\right) + 0 \\right] = \\frac{24}{x} = 24x^{-1} \\\\[10pt]\nf^{(5)}(x) &= -24x^{-2} = -\\frac{24}{x^2} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch1_7",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = x^2 e^{5x}$.",
    "answer": "e^{5x}(125x^2 + 150x + 30)",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{d}{dx}(x^2)e^{5x} + x^2\\frac{d}{dx}(e^{5x}) \\\\\n&= 2x e^{5x} + 5x^2 e^{5x} = e^{5x}(5x^2 + 2x) \\\\[10pt]\nf''(x) &= \\frac{d}{dx}(e^{5x})(5x^2 + 2x) + e^{5x}\\frac{d}{dx}(5x^2 + 2x) \\\\\n&= 5e^{5x}(5x^2 + 2x) + e^{5x}(10x + 2) \\\\\n&= e^{5x}(25x^2 + 10x + 10x + 2) = e^{5x}(25x^2 + 20x + 2) \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(e^{5x})(25x^2 + 20x + 2) + e^{5x}\\frac{d}{dx}(25x^2 + 20x + 2) \\\\\n&= 5e^{5x}(25x^2 + 20x + 2) + e^{5x}(50x + 20) \\\\\n&= e^{5x}(125x^2 + 100x + 10 + 50x + 20) \\\\\n&= e^{5x}(125x^2 + 150x + 30) \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch2_7",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = e^{4x} \\sin(3x)$.",
    "answer": "e^{4x} \\left[ -44\\sin(3x) + 117\\cos(3x) \\right]",
    "steps": "\\begin{aligned}\nf'(x) &= e^{4x}(4\\sin(3x)) + e^{4x}(3\\cos(3x)) \\\\\n&= e^{4x}(4\\sin(3x) + 3\\cos(3x)) \\\\[10pt]\nf''(x) &= 4e^{4x}(4\\sin(3x) + 3\\cos(3x)) + e^{4x}(12\\cos(3x) - 9\\sin(3x)) \\\\\n&= e^{4x} \\left[ (16 - 9)\\sin(3x) + (12 + 12)\\cos(3x) \\right] \\\\\n&= e^{4x} \\left[ 7\\sin(3x) + 24\\cos(3x) \\right] \\\\[10pt]\nf'''(x) &= 4e^{4x} \\left[ 7\\sin(3x) + 24\\cos(3x) \\right] + e^{4x} \\left[ 21\\cos(3x) - 72\\sin(3x) \\right] \\\\\n&= e^{4x} \\left[ (28 - 72)\\sin(3x) + (96 + 21)\\cos(3x) \\right] \\\\\n&= e^{4x} \\left[ (-44)\\sin(3x) + (117)\\cos(3x) \\right] \\\\\n&= e^{4x} \\left[ -44\\sin(3x) + 117\\cos(3x) \\right] \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch3_7",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\ln(25x^2 - 9)$ for $x > \\frac{3}{5}$. \\\\ \\textit{Hint: Factor the argument first.}",
    "answer": "\\frac{250}{(5x-3)^3} + \\frac{250}{(5x+3)^3}",
    "steps": "\\begin{aligned}\nf(x) &= \\ln((5x - 3)(5x + 3)) = \\ln(5x - 3) + \\ln(5x + 3) \\\\[10pt]\nf'(x) &= \\frac{5}{5x - 3} + \\frac{5}{5x + 3} \\\\\n&= 5(5x - 3)^{-1} + 5(5x + 3)^{-1} \\\\[10pt]\nf''(x) &= -25(5x - 3)^{-2} - 25(5x + 3)^{-2} \\\\[10pt]\nf'''(x) &= 250(5x - 3)^{-3} + 250(5x + 3)^{-3} \\\\\n&= \\frac{250}{(5x-3)^3} + \\frac{250}{(5x+3)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch4_7",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\arctan(4x)$.",
    "answer": "\\frac{128(48x^2 - 1)}{(1 + 16x^2)^3}",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{4}{1 + (4x)^2} = 4(1 + 16x^2)^{-1} \\\\[10pt]\nf''(x) &= -4(1 + 16x^2)^{-2} (\\frac{d}{dx}(1 + 16x^2)) \\\\\n&= -4(1 + 16x^2)^{-2} (32x) = -128x(1 + 16x^2)^{-2} \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(-128x)(1 + 16x^2)^{-2} + (-128x)\\frac{d}{dx}((1 + 16x^2)^{-2}) \\\\\n&= -128(1 + 16x^2)^{-2} + (-128x)(-2)(1 + 16x^2)^{-3}(32x) \\\\\n&= \\frac{-128}{(1 + 16x^2)^2} + \\frac{8192x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{-128(1 + 16x^2) + 8192x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{-128 - 2048x^2 + 8192x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{-128 + 6144x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{128(48x^2 - 1)}{(1 + 16x^2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch5_7",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fourth derivative $f^{(4)}(x)$ of $f(x) = \\frac{8}{\\sqrt{5x + 1}}$.",
    "answer": "\\frac{525000}{16(5x + 1)^{9/2}}",
    "steps": "\\begin{aligned}\nf(x) &= 8(5x + 1)^{-1/2} \\\\[10pt]\nf'(x) &= 8 \\left(-\\frac{1}{2}\\right)(5x + 1)^{-3/2}(5) = -\\frac{40}{2}(5x + 1)^{-3/2} \\\\[10pt]\nf''(x) &= -\\frac{40}{2} \\left(-\\frac{3}{2}\\right)(5x + 1)^{-5/2}(5) = \\frac{600}{4}(5x + 1)^{-5/2} \\\\[10pt]\nf'''(x) &= \\frac{600}{4} \\left(-\\frac{5}{2}\\right)(5x + 1)^{-7/2}(5) = -\\frac{15000}{8}(5x + 1)^{-7/2} \\\\[10pt]\nf^{(4)}(x) &= -\\frac{15000}{8} \\left(-\\frac{7}{2}\\right)(5x + 1)^{-9/2}(5) = \\frac{525000}{16}(5x + 1)^{-9/2} \\\\\n&= \\frac{525000}{16(5x + 1)^{9/2}} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch6_7",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fifth derivative $f^{(5)}(x)$ of $f(x) = 3x^3 \\ln(2x)$.",
    "answer": "-\\frac{18}{x^2}",
    "steps": "\\begin{aligned}\nf'(x) &= 3 \\left[ 3x^2 \\ln(2x) + x^3 \\left(\\frac{1}{x}\\right) \\right] = 3(3x^2 \\ln(2x) + x^2) \\\\[10pt]\nf''(x) &= 3 \\left[ 6x \\ln(2x) + 3x^2 \\left(\\frac{1}{x}\\right) + 2x \\right] = 3(6x \\ln(2x) + 5x) \\\\[10pt]\nf'''(x) &= 3 \\left[ 6\\ln(2x) + 6x \\left(\\frac{1}{x}\\right) + 5 \\right] = 3(6\\ln(2x) + 11) \\\\[10pt]\nf^{(4)}(x) &= 3 \\left[ 6 \\left(\\frac{1}{x}\\right) + 0 \\right] = \\frac{18}{x} = 18x^{-1} \\\\[10pt]\nf^{(5)}(x) &= -18x^{-2} = -\\frac{18}{x^2} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch1_8",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = x^2 e^{3x}$.",
    "answer": "e^{3x}(27x^2 + 54x + 18)",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{d}{dx}(x^2)e^{3x} + x^2\\frac{d}{dx}(e^{3x}) \\\\\n&= 2x e^{3x} + 3x^2 e^{3x} = e^{3x}(3x^2 + 2x) \\\\[10pt]\nf''(x) &= \\frac{d}{dx}(e^{3x})(3x^2 + 2x) + e^{3x}\\frac{d}{dx}(3x^2 + 2x) \\\\\n&= 3e^{3x}(3x^2 + 2x) + e^{3x}(6x + 2) \\\\\n&= e^{3x}(9x^2 + 6x + 6x + 2) = e^{3x}(9x^2 + 12x + 2) \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(e^{3x})(9x^2 + 12x + 2) + e^{3x}\\frac{d}{dx}(9x^2 + 12x + 2) \\\\\n&= 3e^{3x}(9x^2 + 12x + 2) + e^{3x}(18x + 12) \\\\\n&= e^{3x}(27x^2 + 36x + 6 + 18x + 12) \\\\\n&= e^{3x}(27x^2 + 54x + 18) \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch2_8",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = e^{4x} \\sin(2x)$.",
    "answer": "e^{4x} \\left[ 16\\sin(2x) + 88\\cos(2x) \\right]",
    "steps": "\\begin{aligned}\nf'(x) &= e^{4x}(4\\sin(2x)) + e^{4x}(2\\cos(2x)) \\\\\n&= e^{4x}(4\\sin(2x) + 2\\cos(2x)) \\\\[10pt]\nf''(x) &= 4e^{4x}(4\\sin(2x) + 2\\cos(2x)) + e^{4x}(8\\cos(2x) - 4\\sin(2x)) \\\\\n&= e^{4x} \\left[ (16 - 4)\\sin(2x) + (8 + 8)\\cos(2x) \\right] \\\\\n&= e^{4x} \\left[ 12\\sin(2x) + 16\\cos(2x) \\right] \\\\[10pt]\nf'''(x) &= 4e^{4x} \\left[ 12\\sin(2x) + 16\\cos(2x) \\right] + e^{4x} \\left[ 24\\cos(2x) - 32\\sin(2x) \\right] \\\\\n&= e^{4x} \\left[ (48 - 32)\\sin(2x) + (64 + 24)\\cos(2x) \\right] \\\\\n&= e^{4x} \\left[ (16)\\sin(2x) + (88)\\cos(2x) \\right] \\\\\n&= e^{4x} \\left[ 16\\sin(2x) + 88\\cos(2x) \\right] \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch3_8",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\ln(25x^2 - 49)$ for $x > \\frac{7}{5}$. \\\\ \\textit{Hint: Factor the argument first.}",
    "answer": "\\frac{250}{(5x-7)^3} + \\frac{250}{(5x+7)^3}",
    "steps": "\\begin{aligned}\nf(x) &= \\ln((5x - 7)(5x + 7)) = \\ln(5x - 7) + \\ln(5x + 7) \\\\[10pt]\nf'(x) &= \\frac{5}{5x - 7} + \\frac{5}{5x + 7} \\\\\n&= 5(5x - 7)^{-1} + 5(5x + 7)^{-1} \\\\[10pt]\nf''(x) &= -25(5x - 7)^{-2} - 25(5x + 7)^{-2} \\\\[10pt]\nf'''(x) &= 250(5x - 7)^{-3} + 250(5x + 7)^{-3} \\\\\n&= \\frac{250}{(5x-7)^3} + \\frac{250}{(5x+7)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch4_8",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\arctan(2x)$.",
    "answer": "\\frac{16(12x^2 - 1)}{(1 + 4x^2)^3}",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{2}{1 + (2x)^2} = 2(1 + 4x^2)^{-1} \\\\[10pt]\nf''(x) &= -2(1 + 4x^2)^{-2} (\\frac{d}{dx}(1 + 4x^2)) \\\\\n&= -2(1 + 4x^2)^{-2} (8x) = -16x(1 + 4x^2)^{-2} \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(-16x)(1 + 4x^2)^{-2} + (-16x)\\frac{d}{dx}((1 + 4x^2)^{-2}) \\\\\n&= -16(1 + 4x^2)^{-2} + (-16x)(-2)(1 + 4x^2)^{-3}(8x) \\\\\n&= \\frac{-16}{(1 + 4x^2)^2} + \\frac{256x^2}{(1 + 4x^2)^3} \\\\\n&= \\frac{-16(1 + 4x^2) + 256x^2}{(1 + 4x^2)^3} \\\\\n&= \\frac{-16 - 64x^2 + 256x^2}{(1 + 4x^2)^3} \\\\\n&= \\frac{-16 + 192x^2}{(1 + 4x^2)^3} \\\\\n&= \\frac{16(12x^2 - 1)}{(1 + 4x^2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch5_8",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fourth derivative $f^{(4)}(x)$ of $f(x) = \\frac{8}{\\sqrt{2x + 1}}$.",
    "answer": "\\frac{13440}{16(2x + 1)^{9/2}}",
    "steps": "\\begin{aligned}\nf(x) &= 8(2x + 1)^{-1/2} \\\\[10pt]\nf'(x) &= 8 \\left(-\\frac{1}{2}\\right)(2x + 1)^{-3/2}(2) = -\\frac{16}{2}(2x + 1)^{-3/2} \\\\[10pt]\nf''(x) &= -\\frac{16}{2} \\left(-\\frac{3}{2}\\right)(2x + 1)^{-5/2}(2) = \\frac{96}{4}(2x + 1)^{-5/2} \\\\[10pt]\nf'''(x) &= \\frac{96}{4} \\left(-\\frac{5}{2}\\right)(2x + 1)^{-7/2}(2) = -\\frac{960}{8}(2x + 1)^{-7/2} \\\\[10pt]\nf^{(4)}(x) &= -\\frac{960}{8} \\left(-\\frac{7}{2}\\right)(2x + 1)^{-9/2}(2) = \\frac{13440}{16}(2x + 1)^{-9/2} \\\\\n&= \\frac{13440}{16(2x + 1)^{9/2}} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch6_8",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fifth derivative $f^{(5)}(x)$ of $f(x) = 4x^3 \\ln(6x)$.",
    "answer": "-\\frac{24}{x^2}",
    "steps": "\\begin{aligned}\nf'(x) &= 4 \\left[ 3x^2 \\ln(6x) + x^3 \\left(\\frac{1}{x}\\right) \\right] = 4(3x^2 \\ln(6x) + x^2) \\\\[10pt]\nf''(x) &= 4 \\left[ 6x \\ln(6x) + 3x^2 \\left(\\frac{1}{x}\\right) + 2x \\right] = 4(6x \\ln(6x) + 5x) \\\\[10pt]\nf'''(x) &= 4 \\left[ 6\\ln(6x) + 6x \\left(\\frac{1}{x}\\right) + 5 \\right] = 4(6\\ln(6x) + 11) \\\\[10pt]\nf^{(4)}(x) &= 4 \\left[ 6 \\left(\\frac{1}{x}\\right) + 0 \\right] = \\frac{24}{x} = 24x^{-1} \\\\[10pt]\nf^{(5)}(x) &= -24x^{-2} = -\\frac{24}{x^2} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch1_9",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = x^2 e^{3x}$.",
    "answer": "e^{3x}(27x^2 + 54x + 18)",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{d}{dx}(x^2)e^{3x} + x^2\\frac{d}{dx}(e^{3x}) \\\\\n&= 2x e^{3x} + 3x^2 e^{3x} = e^{3x}(3x^2 + 2x) \\\\[10pt]\nf''(x) &= \\frac{d}{dx}(e^{3x})(3x^2 + 2x) + e^{3x}\\frac{d}{dx}(3x^2 + 2x) \\\\\n&= 3e^{3x}(3x^2 + 2x) + e^{3x}(6x + 2) \\\\\n&= e^{3x}(9x^2 + 6x + 6x + 2) = e^{3x}(9x^2 + 12x + 2) \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(e^{3x})(9x^2 + 12x + 2) + e^{3x}\\frac{d}{dx}(9x^2 + 12x + 2) \\\\\n&= 3e^{3x}(9x^2 + 12x + 2) + e^{3x}(18x + 12) \\\\\n&= e^{3x}(27x^2 + 36x + 6 + 18x + 12) \\\\\n&= e^{3x}(27x^2 + 54x + 18) \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch2_9",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = e^{2x} \\sin(4x)$.",
    "answer": "e^{2x} \\left[ -88\\sin(4x) - 16\\cos(4x) \\right]",
    "steps": "\\begin{aligned}\nf'(x) &= e^{2x}(2\\sin(4x)) + e^{2x}(4\\cos(4x)) \\\\\n&= e^{2x}(2\\sin(4x) + 4\\cos(4x)) \\\\[10pt]\nf''(x) &= 2e^{2x}(2\\sin(4x) + 4\\cos(4x)) + e^{2x}(8\\cos(4x) - 16\\sin(4x)) \\\\\n&= e^{2x} \\left[ (4 - 16)\\sin(4x) + (8 + 8)\\cos(4x) \\right] \\\\\n&= e^{2x} \\left[ -12\\sin(4x) + 16\\cos(4x) \\right] \\\\[10pt]\nf'''(x) &= 2e^{2x} \\left[ -12\\sin(4x) + 16\\cos(4x) \\right] + e^{2x} \\left[ -48\\cos(4x) - 64\\sin(4x) \\right] \\\\\n&= e^{2x} \\left[ (-24 - 64)\\sin(4x) + (32 + -48)\\cos(4x) \\right] \\\\\n&= e^{2x} \\left[ (-88)\\sin(4x) + (-16)\\cos(4x) \\right] \\\\\n&= e^{2x} \\left[ -88\\sin(4x) - 16\\cos(4x) \\right] \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch3_9",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\ln(25x^2 - 49)$ for $x > \\frac{7}{5}$. \\\\ \\textit{Hint: Factor the argument first.}",
    "answer": "\\frac{250}{(5x-7)^3} + \\frac{250}{(5x+7)^3}",
    "steps": "\\begin{aligned}\nf(x) &= \\ln((5x - 7)(5x + 7)) = \\ln(5x - 7) + \\ln(5x + 7) \\\\[10pt]\nf'(x) &= \\frac{5}{5x - 7} + \\frac{5}{5x + 7} \\\\\n&= 5(5x - 7)^{-1} + 5(5x + 7)^{-1} \\\\[10pt]\nf''(x) &= -25(5x - 7)^{-2} - 25(5x + 7)^{-2} \\\\[10pt]\nf'''(x) &= 250(5x - 7)^{-3} + 250(5x + 7)^{-3} \\\\\n&= \\frac{250}{(5x-7)^3} + \\frac{250}{(5x+7)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch4_9",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\arctan(5x)$.",
    "answer": "\\frac{250(75x^2 - 1)}{(1 + 25x^2)^3}",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{5}{1 + (5x)^2} = 5(1 + 25x^2)^{-1} \\\\[10pt]\nf''(x) &= -5(1 + 25x^2)^{-2} (\\frac{d}{dx}(1 + 25x^2)) \\\\\n&= -5(1 + 25x^2)^{-2} (50x) = -250x(1 + 25x^2)^{-2} \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(-250x)(1 + 25x^2)^{-2} + (-250x)\\frac{d}{dx}((1 + 25x^2)^{-2}) \\\\\n&= -250(1 + 25x^2)^{-2} + (-250x)(-2)(1 + 25x^2)^{-3}(50x) \\\\\n&= \\frac{-250}{(1 + 25x^2)^2} + \\frac{25000x^2}{(1 + 25x^2)^3} \\\\\n&= \\frac{-250(1 + 25x^2) + 25000x^2}{(1 + 25x^2)^3} \\\\\n&= \\frac{-250 - 6250x^2 + 25000x^2}{(1 + 25x^2)^3} \\\\\n&= \\frac{-250 + 18750x^2}{(1 + 25x^2)^3} \\\\\n&= \\frac{250(75x^2 - 1)}{(1 + 25x^2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch5_9",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fourth derivative $f^{(4)}(x)$ of $f(x) = \\frac{4}{\\sqrt{2x + 1}}$.",
    "answer": "\\frac{6720}{16(2x + 1)^{9/2}}",
    "steps": "\\begin{aligned}\nf(x) &= 4(2x + 1)^{-1/2} \\\\[10pt]\nf'(x) &= 4 \\left(-\\frac{1}{2}\\right)(2x + 1)^{-3/2}(2) = -\\frac{8}{2}(2x + 1)^{-3/2} \\\\[10pt]\nf''(x) &= -\\frac{8}{2} \\left(-\\frac{3}{2}\\right)(2x + 1)^{-5/2}(2) = \\frac{48}{4}(2x + 1)^{-5/2} \\\\[10pt]\nf'''(x) &= \\frac{48}{4} \\left(-\\frac{5}{2}\\right)(2x + 1)^{-7/2}(2) = -\\frac{480}{8}(2x + 1)^{-7/2} \\\\[10pt]\nf^{(4)}(x) &= -\\frac{480}{8} \\left(-\\frac{7}{2}\\right)(2x + 1)^{-9/2}(2) = \\frac{6720}{16}(2x + 1)^{-9/2} \\\\\n&= \\frac{6720}{16(2x + 1)^{9/2}} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch6_9",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fifth derivative $f^{(5)}(x)$ of $f(x) = 4x^3 \\ln(3x)$.",
    "answer": "-\\frac{24}{x^2}",
    "steps": "\\begin{aligned}\nf'(x) &= 4 \\left[ 3x^2 \\ln(3x) + x^3 \\left(\\frac{1}{x}\\right) \\right] = 4(3x^2 \\ln(3x) + x^2) \\\\[10pt]\nf''(x) &= 4 \\left[ 6x \\ln(3x) + 3x^2 \\left(\\frac{1}{x}\\right) + 2x \\right] = 4(6x \\ln(3x) + 5x) \\\\[10pt]\nf'''(x) &= 4 \\left[ 6\\ln(3x) + 6x \\left(\\frac{1}{x}\\right) + 5 \\right] = 4(6\\ln(3x) + 11) \\\\[10pt]\nf^{(4)}(x) &= 4 \\left[ 6 \\left(\\frac{1}{x}\\right) + 0 \\right] = \\frac{24}{x} = 24x^{-1} \\\\[10pt]\nf^{(5)}(x) &= -24x^{-2} = -\\frac{24}{x^2} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch1_10",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = x^2 e^{6x}$.",
    "answer": "e^{6x}(216x^2 + 216x + 36)",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{d}{dx}(x^2)e^{6x} + x^2\\frac{d}{dx}(e^{6x}) \\\\\n&= 2x e^{6x} + 6x^2 e^{6x} = e^{6x}(6x^2 + 2x) \\\\[10pt]\nf''(x) &= \\frac{d}{dx}(e^{6x})(6x^2 + 2x) + e^{6x}\\frac{d}{dx}(6x^2 + 2x) \\\\\n&= 6e^{6x}(6x^2 + 2x) + e^{6x}(12x + 2) \\\\\n&= e^{6x}(36x^2 + 12x + 12x + 2) = e^{6x}(36x^2 + 24x + 2) \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(e^{6x})(36x^2 + 24x + 2) + e^{6x}\\frac{d}{dx}(36x^2 + 24x + 2) \\\\\n&= 6e^{6x}(36x^2 + 24x + 2) + e^{6x}(72x + 24) \\\\\n&= e^{6x}(216x^2 + 144x + 12 + 72x + 24) \\\\\n&= e^{6x}(216x^2 + 216x + 36) \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch2_10",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = e^{4x} \\sin(3x)$.",
    "answer": "e^{4x} \\left[ -44\\sin(3x) + 117\\cos(3x) \\right]",
    "steps": "\\begin{aligned}\nf'(x) &= e^{4x}(4\\sin(3x)) + e^{4x}(3\\cos(3x)) \\\\\n&= e^{4x}(4\\sin(3x) + 3\\cos(3x)) \\\\[10pt]\nf''(x) &= 4e^{4x}(4\\sin(3x) + 3\\cos(3x)) + e^{4x}(12\\cos(3x) - 9\\sin(3x)) \\\\\n&= e^{4x} \\left[ (16 - 9)\\sin(3x) + (12 + 12)\\cos(3x) \\right] \\\\\n&= e^{4x} \\left[ 7\\sin(3x) + 24\\cos(3x) \\right] \\\\[10pt]\nf'''(x) &= 4e^{4x} \\left[ 7\\sin(3x) + 24\\cos(3x) \\right] + e^{4x} \\left[ 21\\cos(3x) - 72\\sin(3x) \\right] \\\\\n&= e^{4x} \\left[ (28 - 72)\\sin(3x) + (96 + 21)\\cos(3x) \\right] \\\\\n&= e^{4x} \\left[ (-44)\\sin(3x) + (117)\\cos(3x) \\right] \\\\\n&= e^{4x} \\left[ -44\\sin(3x) + 117\\cos(3x) \\right] \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch3_10",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\ln(9x^2 - 1)$ for $x > \\frac{1}{3}$. \\\\ \\textit{Hint: Factor the argument first.}",
    "answer": "\\frac{54}{(3x-1)^3} + \\frac{54}{(3x+1)^3}",
    "steps": "\\begin{aligned}\nf(x) &= \\ln((3x - 1)(3x + 1)) = \\ln(3x - 1) + \\ln(3x + 1) \\\\[10pt]\nf'(x) &= \\frac{3}{3x - 1} + \\frac{3}{3x + 1} \\\\\n&= 3(3x - 1)^{-1} + 3(3x + 1)^{-1} \\\\[10pt]\nf''(x) &= -9(3x - 1)^{-2} - 9(3x + 1)^{-2} \\\\[10pt]\nf'''(x) &= 54(3x - 1)^{-3} + 54(3x + 1)^{-3} \\\\\n&= \\frac{54}{(3x-1)^3} + \\frac{54}{(3x+1)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch4_10",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\arctan(4x)$.",
    "answer": "\\frac{128(48x^2 - 1)}{(1 + 16x^2)^3}",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{4}{1 + (4x)^2} = 4(1 + 16x^2)^{-1} \\\\[10pt]\nf''(x) &= -4(1 + 16x^2)^{-2} (\\frac{d}{dx}(1 + 16x^2)) \\\\\n&= -4(1 + 16x^2)^{-2} (32x) = -128x(1 + 16x^2)^{-2} \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(-128x)(1 + 16x^2)^{-2} + (-128x)\\frac{d}{dx}((1 + 16x^2)^{-2}) \\\\\n&= -128(1 + 16x^2)^{-2} + (-128x)(-2)(1 + 16x^2)^{-3}(32x) \\\\\n&= \\frac{-128}{(1 + 16x^2)^2} + \\frac{8192x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{-128(1 + 16x^2) + 8192x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{-128 - 2048x^2 + 8192x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{-128 + 6144x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{128(48x^2 - 1)}{(1 + 16x^2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch5_10",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fourth derivative $f^{(4)}(x)$ of $f(x) = \\frac{2}{\\sqrt{2x + 1}}$.",
    "answer": "\\frac{3360}{16(2x + 1)^{9/2}}",
    "steps": "\\begin{aligned}\nf(x) &= 2(2x + 1)^{-1/2} \\\\[10pt]\nf'(x) &= 2 \\left(-\\frac{1}{2}\\right)(2x + 1)^{-3/2}(2) = -\\frac{4}{2}(2x + 1)^{-3/2} \\\\[10pt]\nf''(x) &= -\\frac{4}{2} \\left(-\\frac{3}{2}\\right)(2x + 1)^{-5/2}(2) = \\frac{24}{4}(2x + 1)^{-5/2} \\\\[10pt]\nf'''(x) &= \\frac{24}{4} \\left(-\\frac{5}{2}\\right)(2x + 1)^{-7/2}(2) = -\\frac{240}{8}(2x + 1)^{-7/2} \\\\[10pt]\nf^{(4)}(x) &= -\\frac{240}{8} \\left(-\\frac{7}{2}\\right)(2x + 1)^{-9/2}(2) = \\frac{3360}{16}(2x + 1)^{-9/2} \\\\\n&= \\frac{3360}{16(2x + 1)^{9/2}} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch6_10",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fifth derivative $f^{(5)}(x)$ of $f(x) = 2x^3 \\ln(5x)$.",
    "answer": "-\\frac{12}{x^2}",
    "steps": "\\begin{aligned}\nf'(x) &= 2 \\left[ 3x^2 \\ln(5x) + x^3 \\left(\\frac{1}{x}\\right) \\right] = 2(3x^2 \\ln(5x) + x^2) \\\\[10pt]\nf''(x) &= 2 \\left[ 6x \\ln(5x) + 3x^2 \\left(\\frac{1}{x}\\right) + 2x \\right] = 2(6x \\ln(5x) + 5x) \\\\[10pt]\nf'''(x) &= 2 \\left[ 6\\ln(5x) + 6x \\left(\\frac{1}{x}\\right) + 5 \\right] = 2(6\\ln(5x) + 11) \\\\[10pt]\nf^{(4)}(x) &= 2 \\left[ 6 \\left(\\frac{1}{x}\\right) + 0 \\right] = \\frac{12}{x} = 12x^{-1} \\\\[10pt]\nf^{(5)}(x) &= -12x^{-2} = -\\frac{12}{x^2} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch1_11",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = x^2 e^{2x}$.",
    "answer": "e^{2x}(8x^2 + 24x + 12)",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{d}{dx}(x^2)e^{2x} + x^2\\frac{d}{dx}(e^{2x}) \\\\\n&= 2x e^{2x} + 2x^2 e^{2x} = e^{2x}(2x^2 + 2x) \\\\[10pt]\nf''(x) &= \\frac{d}{dx}(e^{2x})(2x^2 + 2x) + e^{2x}\\frac{d}{dx}(2x^2 + 2x) \\\\\n&= 2e^{2x}(2x^2 + 2x) + e^{2x}(4x + 2) \\\\\n&= e^{2x}(4x^2 + 4x + 4x + 2) = e^{2x}(4x^2 + 8x + 2) \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(e^{2x})(4x^2 + 8x + 2) + e^{2x}\\frac{d}{dx}(4x^2 + 8x + 2) \\\\\n&= 2e^{2x}(4x^2 + 8x + 2) + e^{2x}(8x + 8) \\\\\n&= e^{2x}(8x^2 + 16x + 4 + 8x + 8) \\\\\n&= e^{2x}(8x^2 + 24x + 12) \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch2_11",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = e^{3x} \\sin(4x)$.",
    "answer": "e^{3x} \\left[ -117\\sin(4x) + 44\\cos(4x) \\right]",
    "steps": "\\begin{aligned}\nf'(x) &= e^{3x}(3\\sin(4x)) + e^{3x}(4\\cos(4x)) \\\\\n&= e^{3x}(3\\sin(4x) + 4\\cos(4x)) \\\\[10pt]\nf''(x) &= 3e^{3x}(3\\sin(4x) + 4\\cos(4x)) + e^{3x}(12\\cos(4x) - 16\\sin(4x)) \\\\\n&= e^{3x} \\left[ (9 - 16)\\sin(4x) + (12 + 12)\\cos(4x) \\right] \\\\\n&= e^{3x} \\left[ -7\\sin(4x) + 24\\cos(4x) \\right] \\\\[10pt]\nf'''(x) &= 3e^{3x} \\left[ -7\\sin(4x) + 24\\cos(4x) \\right] + e^{3x} \\left[ -28\\cos(4x) - 96\\sin(4x) \\right] \\\\\n&= e^{3x} \\left[ (-21 - 96)\\sin(4x) + (72 + -28)\\cos(4x) \\right] \\\\\n&= e^{3x} \\left[ (-117)\\sin(4x) + (44)\\cos(4x) \\right] \\\\\n&= e^{3x} \\left[ -117\\sin(4x) + 44\\cos(4x) \\right] \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch3_11",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\ln(25x^2 - 36)$ for $x > \\frac{6}{5}$. \\\\ \\textit{Hint: Factor the argument first.}",
    "answer": "\\frac{250}{(5x-6)^3} + \\frac{250}{(5x+6)^3}",
    "steps": "\\begin{aligned}\nf(x) &= \\ln((5x - 6)(5x + 6)) = \\ln(5x - 6) + \\ln(5x + 6) \\\\[10pt]\nf'(x) &= \\frac{5}{5x - 6} + \\frac{5}{5x + 6} \\\\\n&= 5(5x - 6)^{-1} + 5(5x + 6)^{-1} \\\\[10pt]\nf''(x) &= -25(5x - 6)^{-2} - 25(5x + 6)^{-2} \\\\[10pt]\nf'''(x) &= 250(5x - 6)^{-3} + 250(5x + 6)^{-3} \\\\\n&= \\frac{250}{(5x-6)^3} + \\frac{250}{(5x+6)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch4_11",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\arctan(4x)$.",
    "answer": "\\frac{128(48x^2 - 1)}{(1 + 16x^2)^3}",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{4}{1 + (4x)^2} = 4(1 + 16x^2)^{-1} \\\\[10pt]\nf''(x) &= -4(1 + 16x^2)^{-2} (\\frac{d}{dx}(1 + 16x^2)) \\\\\n&= -4(1 + 16x^2)^{-2} (32x) = -128x(1 + 16x^2)^{-2} \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(-128x)(1 + 16x^2)^{-2} + (-128x)\\frac{d}{dx}((1 + 16x^2)^{-2}) \\\\\n&= -128(1 + 16x^2)^{-2} + (-128x)(-2)(1 + 16x^2)^{-3}(32x) \\\\\n&= \\frac{-128}{(1 + 16x^2)^2} + \\frac{8192x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{-128(1 + 16x^2) + 8192x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{-128 - 2048x^2 + 8192x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{-128 + 6144x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{128(48x^2 - 1)}{(1 + 16x^2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch5_11",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fourth derivative $f^{(4)}(x)$ of $f(x) = \\frac{2}{\\sqrt{3x + 1}}$.",
    "answer": "\\frac{17010}{16(3x + 1)^{9/2}}",
    "steps": "\\begin{aligned}\nf(x) &= 2(3x + 1)^{-1/2} \\\\[10pt]\nf'(x) &= 2 \\left(-\\frac{1}{2}\\right)(3x + 1)^{-3/2}(3) = -\\frac{6}{2}(3x + 1)^{-3/2} \\\\[10pt]\nf''(x) &= -\\frac{6}{2} \\left(-\\frac{3}{2}\\right)(3x + 1)^{-5/2}(3) = \\frac{54}{4}(3x + 1)^{-5/2} \\\\[10pt]\nf'''(x) &= \\frac{54}{4} \\left(-\\frac{5}{2}\\right)(3x + 1)^{-7/2}(3) = -\\frac{810}{8}(3x + 1)^{-7/2} \\\\[10pt]\nf^{(4)}(x) &= -\\frac{810}{8} \\left(-\\frac{7}{2}\\right)(3x + 1)^{-9/2}(3) = \\frac{17010}{16}(3x + 1)^{-9/2} \\\\\n&= \\frac{17010}{16(3x + 1)^{9/2}} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch6_11",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fifth derivative $f^{(5)}(x)$ of $f(x) = 4x^3 \\ln(4x)$.",
    "answer": "-\\frac{24}{x^2}",
    "steps": "\\begin{aligned}\nf'(x) &= 4 \\left[ 3x^2 \\ln(4x) + x^3 \\left(\\frac{1}{x}\\right) \\right] = 4(3x^2 \\ln(4x) + x^2) \\\\[10pt]\nf''(x) &= 4 \\left[ 6x \\ln(4x) + 3x^2 \\left(\\frac{1}{x}\\right) + 2x \\right] = 4(6x \\ln(4x) + 5x) \\\\[10pt]\nf'''(x) &= 4 \\left[ 6\\ln(4x) + 6x \\left(\\frac{1}{x}\\right) + 5 \\right] = 4(6\\ln(4x) + 11) \\\\[10pt]\nf^{(4)}(x) &= 4 \\left[ 6 \\left(\\frac{1}{x}\\right) + 0 \\right] = \\frac{24}{x} = 24x^{-1} \\\\[10pt]\nf^{(5)}(x) &= -24x^{-2} = -\\frac{24}{x^2} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch1_12",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = x^2 e^{4x}$.",
    "answer": "e^{4x}(64x^2 + 96x + 24)",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{d}{dx}(x^2)e^{4x} + x^2\\frac{d}{dx}(e^{4x}) \\\\\n&= 2x e^{4x} + 4x^2 e^{4x} = e^{4x}(4x^2 + 2x) \\\\[10pt]\nf''(x) &= \\frac{d}{dx}(e^{4x})(4x^2 + 2x) + e^{4x}\\frac{d}{dx}(4x^2 + 2x) \\\\\n&= 4e^{4x}(4x^2 + 2x) + e^{4x}(8x + 2) \\\\\n&= e^{4x}(16x^2 + 8x + 8x + 2) = e^{4x}(16x^2 + 16x + 2) \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(e^{4x})(16x^2 + 16x + 2) + e^{4x}\\frac{d}{dx}(16x^2 + 16x + 2) \\\\\n&= 4e^{4x}(16x^2 + 16x + 2) + e^{4x}(32x + 16) \\\\\n&= e^{4x}(64x^2 + 64x + 8 + 32x + 16) \\\\\n&= e^{4x}(64x^2 + 96x + 24) \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch2_12",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = e^{2x} \\sin(3x)$.",
    "answer": "e^{2x} \\left[ -46\\sin(3x) + 9\\cos(3x) \\right]",
    "steps": "\\begin{aligned}\nf'(x) &= e^{2x}(2\\sin(3x)) + e^{2x}(3\\cos(3x)) \\\\\n&= e^{2x}(2\\sin(3x) + 3\\cos(3x)) \\\\[10pt]\nf''(x) &= 2e^{2x}(2\\sin(3x) + 3\\cos(3x)) + e^{2x}(6\\cos(3x) - 9\\sin(3x)) \\\\\n&= e^{2x} \\left[ (4 - 9)\\sin(3x) + (6 + 6)\\cos(3x) \\right] \\\\\n&= e^{2x} \\left[ -5\\sin(3x) + 12\\cos(3x) \\right] \\\\[10pt]\nf'''(x) &= 2e^{2x} \\left[ -5\\sin(3x) + 12\\cos(3x) \\right] + e^{2x} \\left[ -15\\cos(3x) - 36\\sin(3x) \\right] \\\\\n&= e^{2x} \\left[ (-10 - 36)\\sin(3x) + (24 + -15)\\cos(3x) \\right] \\\\\n&= e^{2x} \\left[ (-46)\\sin(3x) + (9)\\cos(3x) \\right] \\\\\n&= e^{2x} \\left[ -46\\sin(3x) + 9\\cos(3x) \\right] \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch3_12",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\ln(9x^2 - 1)$ for $x > \\frac{1}{3}$. \\\\ \\textit{Hint: Factor the argument first.}",
    "answer": "\\frac{54}{(3x-1)^3} + \\frac{54}{(3x+1)^3}",
    "steps": "\\begin{aligned}\nf(x) &= \\ln((3x - 1)(3x + 1)) = \\ln(3x - 1) + \\ln(3x + 1) \\\\[10pt]\nf'(x) &= \\frac{3}{3x - 1} + \\frac{3}{3x + 1} \\\\\n&= 3(3x - 1)^{-1} + 3(3x + 1)^{-1} \\\\[10pt]\nf''(x) &= -9(3x - 1)^{-2} - 9(3x + 1)^{-2} \\\\[10pt]\nf'''(x) &= 54(3x - 1)^{-3} + 54(3x + 1)^{-3} \\\\\n&= \\frac{54}{(3x-1)^3} + \\frac{54}{(3x+1)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch4_12",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\arctan(4x)$.",
    "answer": "\\frac{128(48x^2 - 1)}{(1 + 16x^2)^3}",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{4}{1 + (4x)^2} = 4(1 + 16x^2)^{-1} \\\\[10pt]\nf''(x) &= -4(1 + 16x^2)^{-2} (\\frac{d}{dx}(1 + 16x^2)) \\\\\n&= -4(1 + 16x^2)^{-2} (32x) = -128x(1 + 16x^2)^{-2} \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(-128x)(1 + 16x^2)^{-2} + (-128x)\\frac{d}{dx}((1 + 16x^2)^{-2}) \\\\\n&= -128(1 + 16x^2)^{-2} + (-128x)(-2)(1 + 16x^2)^{-3}(32x) \\\\\n&= \\frac{-128}{(1 + 16x^2)^2} + \\frac{8192x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{-128(1 + 16x^2) + 8192x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{-128 - 2048x^2 + 8192x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{-128 + 6144x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{128(48x^2 - 1)}{(1 + 16x^2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch5_12",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fourth derivative $f^{(4)}(x)$ of $f(x) = \\frac{4}{\\sqrt{5x + 1}}$.",
    "answer": "\\frac{262500}{16(5x + 1)^{9/2}}",
    "steps": "\\begin{aligned}\nf(x) &= 4(5x + 1)^{-1/2} \\\\[10pt]\nf'(x) &= 4 \\left(-\\frac{1}{2}\\right)(5x + 1)^{-3/2}(5) = -\\frac{20}{2}(5x + 1)^{-3/2} \\\\[10pt]\nf''(x) &= -\\frac{20}{2} \\left(-\\frac{3}{2}\\right)(5x + 1)^{-5/2}(5) = \\frac{300}{4}(5x + 1)^{-5/2} \\\\[10pt]\nf'''(x) &= \\frac{300}{4} \\left(-\\frac{5}{2}\\right)(5x + 1)^{-7/2}(5) = -\\frac{7500}{8}(5x + 1)^{-7/2} \\\\[10pt]\nf^{(4)}(x) &= -\\frac{7500}{8} \\left(-\\frac{7}{2}\\right)(5x + 1)^{-9/2}(5) = \\frac{262500}{16}(5x + 1)^{-9/2} \\\\\n&= \\frac{262500}{16(5x + 1)^{9/2}} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch6_12",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fifth derivative $f^{(5)}(x)$ of $f(x) = 3x^3 \\ln(3x)$.",
    "answer": "-\\frac{18}{x^2}",
    "steps": "\\begin{aligned}\nf'(x) &= 3 \\left[ 3x^2 \\ln(3x) + x^3 \\left(\\frac{1}{x}\\right) \\right] = 3(3x^2 \\ln(3x) + x^2) \\\\[10pt]\nf''(x) &= 3 \\left[ 6x \\ln(3x) + 3x^2 \\left(\\frac{1}{x}\\right) + 2x \\right] = 3(6x \\ln(3x) + 5x) \\\\[10pt]\nf'''(x) &= 3 \\left[ 6\\ln(3x) + 6x \\left(\\frac{1}{x}\\right) + 5 \\right] = 3(6\\ln(3x) + 11) \\\\[10pt]\nf^{(4)}(x) &= 3 \\left[ 6 \\left(\\frac{1}{x}\\right) + 0 \\right] = \\frac{18}{x} = 18x^{-1} \\\\[10pt]\nf^{(5)}(x) &= -18x^{-2} = -\\frac{18}{x^2} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch1_13",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = x^2 e^{3x}$.",
    "answer": "e^{3x}(27x^2 + 54x + 18)",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{d}{dx}(x^2)e^{3x} + x^2\\frac{d}{dx}(e^{3x}) \\\\\n&= 2x e^{3x} + 3x^2 e^{3x} = e^{3x}(3x^2 + 2x) \\\\[10pt]\nf''(x) &= \\frac{d}{dx}(e^{3x})(3x^2 + 2x) + e^{3x}\\frac{d}{dx}(3x^2 + 2x) \\\\\n&= 3e^{3x}(3x^2 + 2x) + e^{3x}(6x + 2) \\\\\n&= e^{3x}(9x^2 + 6x + 6x + 2) = e^{3x}(9x^2 + 12x + 2) \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(e^{3x})(9x^2 + 12x + 2) + e^{3x}\\frac{d}{dx}(9x^2 + 12x + 2) \\\\\n&= 3e^{3x}(9x^2 + 12x + 2) + e^{3x}(18x + 12) \\\\\n&= e^{3x}(27x^2 + 36x + 6 + 18x + 12) \\\\\n&= e^{3x}(27x^2 + 54x + 18) \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch2_13",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = e^{3x} \\sin(2x)$.",
    "answer": "e^{3x} \\left[ -9\\sin(2x) + 46\\cos(2x) \\right]",
    "steps": "\\begin{aligned}\nf'(x) &= e^{3x}(3\\sin(2x)) + e^{3x}(2\\cos(2x)) \\\\\n&= e^{3x}(3\\sin(2x) + 2\\cos(2x)) \\\\[10pt]\nf''(x) &= 3e^{3x}(3\\sin(2x) + 2\\cos(2x)) + e^{3x}(6\\cos(2x) - 4\\sin(2x)) \\\\\n&= e^{3x} \\left[ (9 - 4)\\sin(2x) + (6 + 6)\\cos(2x) \\right] \\\\\n&= e^{3x} \\left[ 5\\sin(2x) + 12\\cos(2x) \\right] \\\\[10pt]\nf'''(x) &= 3e^{3x} \\left[ 5\\sin(2x) + 12\\cos(2x) \\right] + e^{3x} \\left[ 10\\cos(2x) - 24\\sin(2x) \\right] \\\\\n&= e^{3x} \\left[ (15 - 24)\\sin(2x) + (36 + 10)\\cos(2x) \\right] \\\\\n&= e^{3x} \\left[ (-9)\\sin(2x) + (46)\\cos(2x) \\right] \\\\\n&= e^{3x} \\left[ -9\\sin(2x) + 46\\cos(2x) \\right] \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch3_13",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\ln(16x^2 - 1)$ for $x > \\frac{1}{4}$. \\\\ \\textit{Hint: Factor the argument first.}",
    "answer": "\\frac{128}{(4x-1)^3} + \\frac{128}{(4x+1)^3}",
    "steps": "\\begin{aligned}\nf(x) &= \\ln((4x - 1)(4x + 1)) = \\ln(4x - 1) + \\ln(4x + 1) \\\\[10pt]\nf'(x) &= \\frac{4}{4x - 1} + \\frac{4}{4x + 1} \\\\\n&= 4(4x - 1)^{-1} + 4(4x + 1)^{-1} \\\\[10pt]\nf''(x) &= -16(4x - 1)^{-2} - 16(4x + 1)^{-2} \\\\[10pt]\nf'''(x) &= 128(4x - 1)^{-3} + 128(4x + 1)^{-3} \\\\\n&= \\frac{128}{(4x-1)^3} + \\frac{128}{(4x+1)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch4_13",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\arctan(2x)$.",
    "answer": "\\frac{16(12x^2 - 1)}{(1 + 4x^2)^3}",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{2}{1 + (2x)^2} = 2(1 + 4x^2)^{-1} \\\\[10pt]\nf''(x) &= -2(1 + 4x^2)^{-2} (\\frac{d}{dx}(1 + 4x^2)) \\\\\n&= -2(1 + 4x^2)^{-2} (8x) = -16x(1 + 4x^2)^{-2} \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(-16x)(1 + 4x^2)^{-2} + (-16x)\\frac{d}{dx}((1 + 4x^2)^{-2}) \\\\\n&= -16(1 + 4x^2)^{-2} + (-16x)(-2)(1 + 4x^2)^{-3}(8x) \\\\\n&= \\frac{-16}{(1 + 4x^2)^2} + \\frac{256x^2}{(1 + 4x^2)^3} \\\\\n&= \\frac{-16(1 + 4x^2) + 256x^2}{(1 + 4x^2)^3} \\\\\n&= \\frac{-16 - 64x^2 + 256x^2}{(1 + 4x^2)^3} \\\\\n&= \\frac{-16 + 192x^2}{(1 + 4x^2)^3} \\\\\n&= \\frac{16(12x^2 - 1)}{(1 + 4x^2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch5_13",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fourth derivative $f^{(4)}(x)$ of $f(x) = \\frac{2}{\\sqrt{5x + 1}}$.",
    "answer": "\\frac{131250}{16(5x + 1)^{9/2}}",
    "steps": "\\begin{aligned}\nf(x) &= 2(5x + 1)^{-1/2} \\\\[10pt]\nf'(x) &= 2 \\left(-\\frac{1}{2}\\right)(5x + 1)^{-3/2}(5) = -\\frac{10}{2}(5x + 1)^{-3/2} \\\\[10pt]\nf''(x) &= -\\frac{10}{2} \\left(-\\frac{3}{2}\\right)(5x + 1)^{-5/2}(5) = \\frac{150}{4}(5x + 1)^{-5/2} \\\\[10pt]\nf'''(x) &= \\frac{150}{4} \\left(-\\frac{5}{2}\\right)(5x + 1)^{-7/2}(5) = -\\frac{3750}{8}(5x + 1)^{-7/2} \\\\[10pt]\nf^{(4)}(x) &= -\\frac{3750}{8} \\left(-\\frac{7}{2}\\right)(5x + 1)^{-9/2}(5) = \\frac{131250}{16}(5x + 1)^{-9/2} \\\\\n&= \\frac{131250}{16(5x + 1)^{9/2}} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch6_13",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fifth derivative $f^{(5)}(x)$ of $f(x) = 3x^3 \\ln(2x)$.",
    "answer": "-\\frac{18}{x^2}",
    "steps": "\\begin{aligned}\nf'(x) &= 3 \\left[ 3x^2 \\ln(2x) + x^3 \\left(\\frac{1}{x}\\right) \\right] = 3(3x^2 \\ln(2x) + x^2) \\\\[10pt]\nf''(x) &= 3 \\left[ 6x \\ln(2x) + 3x^2 \\left(\\frac{1}{x}\\right) + 2x \\right] = 3(6x \\ln(2x) + 5x) \\\\[10pt]\nf'''(x) &= 3 \\left[ 6\\ln(2x) + 6x \\left(\\frac{1}{x}\\right) + 5 \\right] = 3(6\\ln(2x) + 11) \\\\[10pt]\nf^{(4)}(x) &= 3 \\left[ 6 \\left(\\frac{1}{x}\\right) + 0 \\right] = \\frac{18}{x} = 18x^{-1} \\\\[10pt]\nf^{(5)}(x) &= -18x^{-2} = -\\frac{18}{x^2} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch1_14",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = x^2 e^{5x}$.",
    "answer": "e^{5x}(125x^2 + 150x + 30)",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{d}{dx}(x^2)e^{5x} + x^2\\frac{d}{dx}(e^{5x}) \\\\\n&= 2x e^{5x} + 5x^2 e^{5x} = e^{5x}(5x^2 + 2x) \\\\[10pt]\nf''(x) &= \\frac{d}{dx}(e^{5x})(5x^2 + 2x) + e^{5x}\\frac{d}{dx}(5x^2 + 2x) \\\\\n&= 5e^{5x}(5x^2 + 2x) + e^{5x}(10x + 2) \\\\\n&= e^{5x}(25x^2 + 10x + 10x + 2) = e^{5x}(25x^2 + 20x + 2) \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(e^{5x})(25x^2 + 20x + 2) + e^{5x}\\frac{d}{dx}(25x^2 + 20x + 2) \\\\\n&= 5e^{5x}(25x^2 + 20x + 2) + e^{5x}(50x + 20) \\\\\n&= e^{5x}(125x^2 + 100x + 10 + 50x + 20) \\\\\n&= e^{5x}(125x^2 + 150x + 30) \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch2_14",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = e^{2x} \\sin(3x)$.",
    "answer": "e^{2x} \\left[ -46\\sin(3x) + 9\\cos(3x) \\right]",
    "steps": "\\begin{aligned}\nf'(x) &= e^{2x}(2\\sin(3x)) + e^{2x}(3\\cos(3x)) \\\\\n&= e^{2x}(2\\sin(3x) + 3\\cos(3x)) \\\\[10pt]\nf''(x) &= 2e^{2x}(2\\sin(3x) + 3\\cos(3x)) + e^{2x}(6\\cos(3x) - 9\\sin(3x)) \\\\\n&= e^{2x} \\left[ (4 - 9)\\sin(3x) + (6 + 6)\\cos(3x) \\right] \\\\\n&= e^{2x} \\left[ -5\\sin(3x) + 12\\cos(3x) \\right] \\\\[10pt]\nf'''(x) &= 2e^{2x} \\left[ -5\\sin(3x) + 12\\cos(3x) \\right] + e^{2x} \\left[ -15\\cos(3x) - 36\\sin(3x) \\right] \\\\\n&= e^{2x} \\left[ (-10 - 36)\\sin(3x) + (24 + -15)\\cos(3x) \\right] \\\\\n&= e^{2x} \\left[ (-46)\\sin(3x) + (9)\\cos(3x) \\right] \\\\\n&= e^{2x} \\left[ -46\\sin(3x) + 9\\cos(3x) \\right] \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch3_14",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\ln(25x^2 - 36)$ for $x > \\frac{6}{5}$. \\\\ \\textit{Hint: Factor the argument first.}",
    "answer": "\\frac{250}{(5x-6)^3} + \\frac{250}{(5x+6)^3}",
    "steps": "\\begin{aligned}\nf(x) &= \\ln((5x - 6)(5x + 6)) = \\ln(5x - 6) + \\ln(5x + 6) \\\\[10pt]\nf'(x) &= \\frac{5}{5x - 6} + \\frac{5}{5x + 6} \\\\\n&= 5(5x - 6)^{-1} + 5(5x + 6)^{-1} \\\\[10pt]\nf''(x) &= -25(5x - 6)^{-2} - 25(5x + 6)^{-2} \\\\[10pt]\nf'''(x) &= 250(5x - 6)^{-3} + 250(5x + 6)^{-3} \\\\\n&= \\frac{250}{(5x-6)^3} + \\frac{250}{(5x+6)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch4_14",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\arctan(3x)$.",
    "answer": "\\frac{54(27x^2 - 1)}{(1 + 9x^2)^3}",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{3}{1 + (3x)^2} = 3(1 + 9x^2)^{-1} \\\\[10pt]\nf''(x) &= -3(1 + 9x^2)^{-2} (\\frac{d}{dx}(1 + 9x^2)) \\\\\n&= -3(1 + 9x^2)^{-2} (18x) = -54x(1 + 9x^2)^{-2} \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(-54x)(1 + 9x^2)^{-2} + (-54x)\\frac{d}{dx}((1 + 9x^2)^{-2}) \\\\\n&= -54(1 + 9x^2)^{-2} + (-54x)(-2)(1 + 9x^2)^{-3}(18x) \\\\\n&= \\frac{-54}{(1 + 9x^2)^2} + \\frac{1944x^2}{(1 + 9x^2)^3} \\\\\n&= \\frac{-54(1 + 9x^2) + 1944x^2}{(1 + 9x^2)^3} \\\\\n&= \\frac{-54 - 486x^2 + 1944x^2}{(1 + 9x^2)^3} \\\\\n&= \\frac{-54 + 1458x^2}{(1 + 9x^2)^3} \\\\\n&= \\frac{54(27x^2 - 1)}{(1 + 9x^2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch5_14",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fourth derivative $f^{(4)}(x)$ of $f(x) = \\frac{8}{\\sqrt{3x + 1}}$.",
    "answer": "\\frac{68040}{16(3x + 1)^{9/2}}",
    "steps": "\\begin{aligned}\nf(x) &= 8(3x + 1)^{-1/2} \\\\[10pt]\nf'(x) &= 8 \\left(-\\frac{1}{2}\\right)(3x + 1)^{-3/2}(3) = -\\frac{24}{2}(3x + 1)^{-3/2} \\\\[10pt]\nf''(x) &= -\\frac{24}{2} \\left(-\\frac{3}{2}\\right)(3x + 1)^{-5/2}(3) = \\frac{216}{4}(3x + 1)^{-5/2} \\\\[10pt]\nf'''(x) &= \\frac{216}{4} \\left(-\\frac{5}{2}\\right)(3x + 1)^{-7/2}(3) = -\\frac{3240}{8}(3x + 1)^{-7/2} \\\\[10pt]\nf^{(4)}(x) &= -\\frac{3240}{8} \\left(-\\frac{7}{2}\\right)(3x + 1)^{-9/2}(3) = \\frac{68040}{16}(3x + 1)^{-9/2} \\\\\n&= \\frac{68040}{16(3x + 1)^{9/2}} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch6_14",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fifth derivative $f^{(5)}(x)$ of $f(x) = 7x^3 \\ln(6x)$.",
    "answer": "-\\frac{42}{x^2}",
    "steps": "\\begin{aligned}\nf'(x) &= 7 \\left[ 3x^2 \\ln(6x) + x^3 \\left(\\frac{1}{x}\\right) \\right] = 7(3x^2 \\ln(6x) + x^2) \\\\[10pt]\nf''(x) &= 7 \\left[ 6x \\ln(6x) + 3x^2 \\left(\\frac{1}{x}\\right) + 2x \\right] = 7(6x \\ln(6x) + 5x) \\\\[10pt]\nf'''(x) &= 7 \\left[ 6\\ln(6x) + 6x \\left(\\frac{1}{x}\\right) + 5 \\right] = 7(6\\ln(6x) + 11) \\\\[10pt]\nf^{(4)}(x) &= 7 \\left[ 6 \\left(\\frac{1}{x}\\right) + 0 \\right] = \\frac{42}{x} = 42x^{-1} \\\\[10pt]\nf^{(5)}(x) &= -42x^{-2} = -\\frac{42}{x^2} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch1_15",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = x^2 e^{2x}$.",
    "answer": "e^{2x}(8x^2 + 24x + 12)",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{d}{dx}(x^2)e^{2x} + x^2\\frac{d}{dx}(e^{2x}) \\\\\n&= 2x e^{2x} + 2x^2 e^{2x} = e^{2x}(2x^2 + 2x) \\\\[10pt]\nf''(x) &= \\frac{d}{dx}(e^{2x})(2x^2 + 2x) + e^{2x}\\frac{d}{dx}(2x^2 + 2x) \\\\\n&= 2e^{2x}(2x^2 + 2x) + e^{2x}(4x + 2) \\\\\n&= e^{2x}(4x^2 + 4x + 4x + 2) = e^{2x}(4x^2 + 8x + 2) \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(e^{2x})(4x^2 + 8x + 2) + e^{2x}\\frac{d}{dx}(4x^2 + 8x + 2) \\\\\n&= 2e^{2x}(4x^2 + 8x + 2) + e^{2x}(8x + 8) \\\\\n&= e^{2x}(8x^2 + 16x + 4 + 8x + 8) \\\\\n&= e^{2x}(8x^2 + 24x + 12) \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch2_15",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = e^{4x} \\sin(5x)$.",
    "answer": "e^{4x} \\left[ -236\\sin(5x) + 115\\cos(5x) \\right]",
    "steps": "\\begin{aligned}\nf'(x) &= e^{4x}(4\\sin(5x)) + e^{4x}(5\\cos(5x)) \\\\\n&= e^{4x}(4\\sin(5x) + 5\\cos(5x)) \\\\[10pt]\nf''(x) &= 4e^{4x}(4\\sin(5x) + 5\\cos(5x)) + e^{4x}(20\\cos(5x) - 25\\sin(5x)) \\\\\n&= e^{4x} \\left[ (16 - 25)\\sin(5x) + (20 + 20)\\cos(5x) \\right] \\\\\n&= e^{4x} \\left[ -9\\sin(5x) + 40\\cos(5x) \\right] \\\\[10pt]\nf'''(x) &= 4e^{4x} \\left[ -9\\sin(5x) + 40\\cos(5x) \\right] + e^{4x} \\left[ -45\\cos(5x) - 200\\sin(5x) \\right] \\\\\n&= e^{4x} \\left[ (-36 - 200)\\sin(5x) + (160 + -45)\\cos(5x) \\right] \\\\\n&= e^{4x} \\left[ (-236)\\sin(5x) + (115)\\cos(5x) \\right] \\\\\n&= e^{4x} \\left[ -236\\sin(5x) + 115\\cos(5x) \\right] \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch3_15",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\ln(9x^2 - 49)$ for $x > \\frac{7}{3}$. \\\\ \\textit{Hint: Factor the argument first.}",
    "answer": "\\frac{54}{(3x-7)^3} + \\frac{54}{(3x+7)^3}",
    "steps": "\\begin{aligned}\nf(x) &= \\ln((3x - 7)(3x + 7)) = \\ln(3x - 7) + \\ln(3x + 7) \\\\[10pt]\nf'(x) &= \\frac{3}{3x - 7} + \\frac{3}{3x + 7} \\\\\n&= 3(3x - 7)^{-1} + 3(3x + 7)^{-1} \\\\[10pt]\nf''(x) &= -9(3x - 7)^{-2} - 9(3x + 7)^{-2} \\\\[10pt]\nf'''(x) &= 54(3x - 7)^{-3} + 54(3x + 7)^{-3} \\\\\n&= \\frac{54}{(3x-7)^3} + \\frac{54}{(3x+7)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch4_15",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\arctan(3x)$.",
    "answer": "\\frac{54(27x^2 - 1)}{(1 + 9x^2)^3}",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{3}{1 + (3x)^2} = 3(1 + 9x^2)^{-1} \\\\[10pt]\nf''(x) &= -3(1 + 9x^2)^{-2} (\\frac{d}{dx}(1 + 9x^2)) \\\\\n&= -3(1 + 9x^2)^{-2} (18x) = -54x(1 + 9x^2)^{-2} \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(-54x)(1 + 9x^2)^{-2} + (-54x)\\frac{d}{dx}((1 + 9x^2)^{-2}) \\\\\n&= -54(1 + 9x^2)^{-2} + (-54x)(-2)(1 + 9x^2)^{-3}(18x) \\\\\n&= \\frac{-54}{(1 + 9x^2)^2} + \\frac{1944x^2}{(1 + 9x^2)^3} \\\\\n&= \\frac{-54(1 + 9x^2) + 1944x^2}{(1 + 9x^2)^3} \\\\\n&= \\frac{-54 - 486x^2 + 1944x^2}{(1 + 9x^2)^3} \\\\\n&= \\frac{-54 + 1458x^2}{(1 + 9x^2)^3} \\\\\n&= \\frac{54(27x^2 - 1)}{(1 + 9x^2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch5_15",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fourth derivative $f^{(4)}(x)$ of $f(x) = \\frac{2}{\\sqrt{3x + 1}}$.",
    "answer": "\\frac{17010}{16(3x + 1)^{9/2}}",
    "steps": "\\begin{aligned}\nf(x) &= 2(3x + 1)^{-1/2} \\\\[10pt]\nf'(x) &= 2 \\left(-\\frac{1}{2}\\right)(3x + 1)^{-3/2}(3) = -\\frac{6}{2}(3x + 1)^{-3/2} \\\\[10pt]\nf''(x) &= -\\frac{6}{2} \\left(-\\frac{3}{2}\\right)(3x + 1)^{-5/2}(3) = \\frac{54}{4}(3x + 1)^{-5/2} \\\\[10pt]\nf'''(x) &= \\frac{54}{4} \\left(-\\frac{5}{2}\\right)(3x + 1)^{-7/2}(3) = -\\frac{810}{8}(3x + 1)^{-7/2} \\\\[10pt]\nf^{(4)}(x) &= -\\frac{810}{8} \\left(-\\frac{7}{2}\\right)(3x + 1)^{-9/2}(3) = \\frac{17010}{16}(3x + 1)^{-9/2} \\\\\n&= \\frac{17010}{16(3x + 1)^{9/2}} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch6_15",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fifth derivative $f^{(5)}(x)$ of $f(x) = 2x^3 \\ln(5x)$.",
    "answer": "-\\frac{12}{x^2}",
    "steps": "\\begin{aligned}\nf'(x) &= 2 \\left[ 3x^2 \\ln(5x) + x^3 \\left(\\frac{1}{x}\\right) \\right] = 2(3x^2 \\ln(5x) + x^2) \\\\[10pt]\nf''(x) &= 2 \\left[ 6x \\ln(5x) + 3x^2 \\left(\\frac{1}{x}\\right) + 2x \\right] = 2(6x \\ln(5x) + 5x) \\\\[10pt]\nf'''(x) &= 2 \\left[ 6\\ln(5x) + 6x \\left(\\frac{1}{x}\\right) + 5 \\right] = 2(6\\ln(5x) + 11) \\\\[10pt]\nf^{(4)}(x) &= 2 \\left[ 6 \\left(\\frac{1}{x}\\right) + 0 \\right] = \\frac{12}{x} = 12x^{-1} \\\\[10pt]\nf^{(5)}(x) &= -12x^{-2} = -\\frac{12}{x^2} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch1_16",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = x^2 e^{5x}$.",
    "answer": "e^{5x}(125x^2 + 150x + 30)",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{d}{dx}(x^2)e^{5x} + x^2\\frac{d}{dx}(e^{5x}) \\\\\n&= 2x e^{5x} + 5x^2 e^{5x} = e^{5x}(5x^2 + 2x) \\\\[10pt]\nf''(x) &= \\frac{d}{dx}(e^{5x})(5x^2 + 2x) + e^{5x}\\frac{d}{dx}(5x^2 + 2x) \\\\\n&= 5e^{5x}(5x^2 + 2x) + e^{5x}(10x + 2) \\\\\n&= e^{5x}(25x^2 + 10x + 10x + 2) = e^{5x}(25x^2 + 20x + 2) \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(e^{5x})(25x^2 + 20x + 2) + e^{5x}\\frac{d}{dx}(25x^2 + 20x + 2) \\\\\n&= 5e^{5x}(25x^2 + 20x + 2) + e^{5x}(50x + 20) \\\\\n&= e^{5x}(125x^2 + 100x + 10 + 50x + 20) \\\\\n&= e^{5x}(125x^2 + 150x + 30) \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch2_16",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = e^{4x} \\sin(5x)$.",
    "answer": "e^{4x} \\left[ -236\\sin(5x) + 115\\cos(5x) \\right]",
    "steps": "\\begin{aligned}\nf'(x) &= e^{4x}(4\\sin(5x)) + e^{4x}(5\\cos(5x)) \\\\\n&= e^{4x}(4\\sin(5x) + 5\\cos(5x)) \\\\[10pt]\nf''(x) &= 4e^{4x}(4\\sin(5x) + 5\\cos(5x)) + e^{4x}(20\\cos(5x) - 25\\sin(5x)) \\\\\n&= e^{4x} \\left[ (16 - 25)\\sin(5x) + (20 + 20)\\cos(5x) \\right] \\\\\n&= e^{4x} \\left[ -9\\sin(5x) + 40\\cos(5x) \\right] \\\\[10pt]\nf'''(x) &= 4e^{4x} \\left[ -9\\sin(5x) + 40\\cos(5x) \\right] + e^{4x} \\left[ -45\\cos(5x) - 200\\sin(5x) \\right] \\\\\n&= e^{4x} \\left[ (-36 - 200)\\sin(5x) + (160 + -45)\\cos(5x) \\right] \\\\\n&= e^{4x} \\left[ (-236)\\sin(5x) + (115)\\cos(5x) \\right] \\\\\n&= e^{4x} \\left[ -236\\sin(5x) + 115\\cos(5x) \\right] \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch3_16",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\ln(9x^2 - 4)$ for $x > \\frac{2}{3}$. \\\\ \\textit{Hint: Factor the argument first.}",
    "answer": "\\frac{54}{(3x-2)^3} + \\frac{54}{(3x+2)^3}",
    "steps": "\\begin{aligned}\nf(x) &= \\ln((3x - 2)(3x + 2)) = \\ln(3x - 2) + \\ln(3x + 2) \\\\[10pt]\nf'(x) &= \\frac{3}{3x - 2} + \\frac{3}{3x + 2} \\\\\n&= 3(3x - 2)^{-1} + 3(3x + 2)^{-1} \\\\[10pt]\nf''(x) &= -9(3x - 2)^{-2} - 9(3x + 2)^{-2} \\\\[10pt]\nf'''(x) &= 54(3x - 2)^{-3} + 54(3x + 2)^{-3} \\\\\n&= \\frac{54}{(3x-2)^3} + \\frac{54}{(3x+2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch4_16",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\arctan(4x)$.",
    "answer": "\\frac{128(48x^2 - 1)}{(1 + 16x^2)^3}",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{4}{1 + (4x)^2} = 4(1 + 16x^2)^{-1} \\\\[10pt]\nf''(x) &= -4(1 + 16x^2)^{-2} (\\frac{d}{dx}(1 + 16x^2)) \\\\\n&= -4(1 + 16x^2)^{-2} (32x) = -128x(1 + 16x^2)^{-2} \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(-128x)(1 + 16x^2)^{-2} + (-128x)\\frac{d}{dx}((1 + 16x^2)^{-2}) \\\\\n&= -128(1 + 16x^2)^{-2} + (-128x)(-2)(1 + 16x^2)^{-3}(32x) \\\\\n&= \\frac{-128}{(1 + 16x^2)^2} + \\frac{8192x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{-128(1 + 16x^2) + 8192x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{-128 - 2048x^2 + 8192x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{-128 + 6144x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{128(48x^2 - 1)}{(1 + 16x^2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch5_16",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fourth derivative $f^{(4)}(x)$ of $f(x) = \\frac{2}{\\sqrt{3x + 1}}$.",
    "answer": "\\frac{17010}{16(3x + 1)^{9/2}}",
    "steps": "\\begin{aligned}\nf(x) &= 2(3x + 1)^{-1/2} \\\\[10pt]\nf'(x) &= 2 \\left(-\\frac{1}{2}\\right)(3x + 1)^{-3/2}(3) = -\\frac{6}{2}(3x + 1)^{-3/2} \\\\[10pt]\nf''(x) &= -\\frac{6}{2} \\left(-\\frac{3}{2}\\right)(3x + 1)^{-5/2}(3) = \\frac{54}{4}(3x + 1)^{-5/2} \\\\[10pt]\nf'''(x) &= \\frac{54}{4} \\left(-\\frac{5}{2}\\right)(3x + 1)^{-7/2}(3) = -\\frac{810}{8}(3x + 1)^{-7/2} \\\\[10pt]\nf^{(4)}(x) &= -\\frac{810}{8} \\left(-\\frac{7}{2}\\right)(3x + 1)^{-9/2}(3) = \\frac{17010}{16}(3x + 1)^{-9/2} \\\\\n&= \\frac{17010}{16(3x + 1)^{9/2}} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch6_16",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fifth derivative $f^{(5)}(x)$ of $f(x) = 7x^3 \\ln(6x)$.",
    "answer": "-\\frac{42}{x^2}",
    "steps": "\\begin{aligned}\nf'(x) &= 7 \\left[ 3x^2 \\ln(6x) + x^3 \\left(\\frac{1}{x}\\right) \\right] = 7(3x^2 \\ln(6x) + x^2) \\\\[10pt]\nf''(x) &= 7 \\left[ 6x \\ln(6x) + 3x^2 \\left(\\frac{1}{x}\\right) + 2x \\right] = 7(6x \\ln(6x) + 5x) \\\\[10pt]\nf'''(x) &= 7 \\left[ 6\\ln(6x) + 6x \\left(\\frac{1}{x}\\right) + 5 \\right] = 7(6\\ln(6x) + 11) \\\\[10pt]\nf^{(4)}(x) &= 7 \\left[ 6 \\left(\\frac{1}{x}\\right) + 0 \\right] = \\frac{42}{x} = 42x^{-1} \\\\[10pt]\nf^{(5)}(x) &= -42x^{-2} = -\\frac{42}{x^2} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch1_17",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = x^2 e^{3x}$.",
    "answer": "e^{3x}(27x^2 + 54x + 18)",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{d}{dx}(x^2)e^{3x} + x^2\\frac{d}{dx}(e^{3x}) \\\\\n&= 2x e^{3x} + 3x^2 e^{3x} = e^{3x}(3x^2 + 2x) \\\\[10pt]\nf''(x) &= \\frac{d}{dx}(e^{3x})(3x^2 + 2x) + e^{3x}\\frac{d}{dx}(3x^2 + 2x) \\\\\n&= 3e^{3x}(3x^2 + 2x) + e^{3x}(6x + 2) \\\\\n&= e^{3x}(9x^2 + 6x + 6x + 2) = e^{3x}(9x^2 + 12x + 2) \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(e^{3x})(9x^2 + 12x + 2) + e^{3x}\\frac{d}{dx}(9x^2 + 12x + 2) \\\\\n&= 3e^{3x}(9x^2 + 12x + 2) + e^{3x}(18x + 12) \\\\\n&= e^{3x}(27x^2 + 36x + 6 + 18x + 12) \\\\\n&= e^{3x}(27x^2 + 54x + 18) \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch2_17",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = e^{3x} \\sin(2x)$.",
    "answer": "e^{3x} \\left[ -9\\sin(2x) + 46\\cos(2x) \\right]",
    "steps": "\\begin{aligned}\nf'(x) &= e^{3x}(3\\sin(2x)) + e^{3x}(2\\cos(2x)) \\\\\n&= e^{3x}(3\\sin(2x) + 2\\cos(2x)) \\\\[10pt]\nf''(x) &= 3e^{3x}(3\\sin(2x) + 2\\cos(2x)) + e^{3x}(6\\cos(2x) - 4\\sin(2x)) \\\\\n&= e^{3x} \\left[ (9 - 4)\\sin(2x) + (6 + 6)\\cos(2x) \\right] \\\\\n&= e^{3x} \\left[ 5\\sin(2x) + 12\\cos(2x) \\right] \\\\[10pt]\nf'''(x) &= 3e^{3x} \\left[ 5\\sin(2x) + 12\\cos(2x) \\right] + e^{3x} \\left[ 10\\cos(2x) - 24\\sin(2x) \\right] \\\\\n&= e^{3x} \\left[ (15 - 24)\\sin(2x) + (36 + 10)\\cos(2x) \\right] \\\\\n&= e^{3x} \\left[ (-9)\\sin(2x) + (46)\\cos(2x) \\right] \\\\\n&= e^{3x} \\left[ -9\\sin(2x) + 46\\cos(2x) \\right] \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch3_17",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\ln(25x^2 - 4)$ for $x > \\frac{2}{5}$. \\\\ \\textit{Hint: Factor the argument first.}",
    "answer": "\\frac{250}{(5x-2)^3} + \\frac{250}{(5x+2)^3}",
    "steps": "\\begin{aligned}\nf(x) &= \\ln((5x - 2)(5x + 2)) = \\ln(5x - 2) + \\ln(5x + 2) \\\\[10pt]\nf'(x) &= \\frac{5}{5x - 2} + \\frac{5}{5x + 2} \\\\\n&= 5(5x - 2)^{-1} + 5(5x + 2)^{-1} \\\\[10pt]\nf''(x) &= -25(5x - 2)^{-2} - 25(5x + 2)^{-2} \\\\[10pt]\nf'''(x) &= 250(5x - 2)^{-3} + 250(5x + 2)^{-3} \\\\\n&= \\frac{250}{(5x-2)^3} + \\frac{250}{(5x+2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch4_17",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\arctan(5x)$.",
    "answer": "\\frac{250(75x^2 - 1)}{(1 + 25x^2)^3}",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{5}{1 + (5x)^2} = 5(1 + 25x^2)^{-1} \\\\[10pt]\nf''(x) &= -5(1 + 25x^2)^{-2} (\\frac{d}{dx}(1 + 25x^2)) \\\\\n&= -5(1 + 25x^2)^{-2} (50x) = -250x(1 + 25x^2)^{-2} \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(-250x)(1 + 25x^2)^{-2} + (-250x)\\frac{d}{dx}((1 + 25x^2)^{-2}) \\\\\n&= -250(1 + 25x^2)^{-2} + (-250x)(-2)(1 + 25x^2)^{-3}(50x) \\\\\n&= \\frac{-250}{(1 + 25x^2)^2} + \\frac{25000x^2}{(1 + 25x^2)^3} \\\\\n&= \\frac{-250(1 + 25x^2) + 25000x^2}{(1 + 25x^2)^3} \\\\\n&= \\frac{-250 - 6250x^2 + 25000x^2}{(1 + 25x^2)^3} \\\\\n&= \\frac{-250 + 18750x^2}{(1 + 25x^2)^3} \\\\\n&= \\frac{250(75x^2 - 1)}{(1 + 25x^2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch5_17",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fourth derivative $f^{(4)}(x)$ of $f(x) = \\frac{2}{\\sqrt{2x + 1}}$.",
    "answer": "\\frac{3360}{16(2x + 1)^{9/2}}",
    "steps": "\\begin{aligned}\nf(x) &= 2(2x + 1)^{-1/2} \\\\[10pt]\nf'(x) &= 2 \\left(-\\frac{1}{2}\\right)(2x + 1)^{-3/2}(2) = -\\frac{4}{2}(2x + 1)^{-3/2} \\\\[10pt]\nf''(x) &= -\\frac{4}{2} \\left(-\\frac{3}{2}\\right)(2x + 1)^{-5/2}(2) = \\frac{24}{4}(2x + 1)^{-5/2} \\\\[10pt]\nf'''(x) &= \\frac{24}{4} \\left(-\\frac{5}{2}\\right)(2x + 1)^{-7/2}(2) = -\\frac{240}{8}(2x + 1)^{-7/2} \\\\[10pt]\nf^{(4)}(x) &= -\\frac{240}{8} \\left(-\\frac{7}{2}\\right)(2x + 1)^{-9/2}(2) = \\frac{3360}{16}(2x + 1)^{-9/2} \\\\\n&= \\frac{3360}{16(2x + 1)^{9/2}} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch6_17",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fifth derivative $f^{(5)}(x)$ of $f(x) = 3x^3 \\ln(6x)$.",
    "answer": "-\\frac{18}{x^2}",
    "steps": "\\begin{aligned}\nf'(x) &= 3 \\left[ 3x^2 \\ln(6x) + x^3 \\left(\\frac{1}{x}\\right) \\right] = 3(3x^2 \\ln(6x) + x^2) \\\\[10pt]\nf''(x) &= 3 \\left[ 6x \\ln(6x) + 3x^2 \\left(\\frac{1}{x}\\right) + 2x \\right] = 3(6x \\ln(6x) + 5x) \\\\[10pt]\nf'''(x) &= 3 \\left[ 6\\ln(6x) + 6x \\left(\\frac{1}{x}\\right) + 5 \\right] = 3(6\\ln(6x) + 11) \\\\[10pt]\nf^{(4)}(x) &= 3 \\left[ 6 \\left(\\frac{1}{x}\\right) + 0 \\right] = \\frac{18}{x} = 18x^{-1} \\\\[10pt]\nf^{(5)}(x) &= -18x^{-2} = -\\frac{18}{x^2} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch1_18",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = x^2 e^{2x}$.",
    "answer": "e^{2x}(8x^2 + 24x + 12)",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{d}{dx}(x^2)e^{2x} + x^2\\frac{d}{dx}(e^{2x}) \\\\\n&= 2x e^{2x} + 2x^2 e^{2x} = e^{2x}(2x^2 + 2x) \\\\[10pt]\nf''(x) &= \\frac{d}{dx}(e^{2x})(2x^2 + 2x) + e^{2x}\\frac{d}{dx}(2x^2 + 2x) \\\\\n&= 2e^{2x}(2x^2 + 2x) + e^{2x}(4x + 2) \\\\\n&= e^{2x}(4x^2 + 4x + 4x + 2) = e^{2x}(4x^2 + 8x + 2) \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(e^{2x})(4x^2 + 8x + 2) + e^{2x}\\frac{d}{dx}(4x^2 + 8x + 2) \\\\\n&= 2e^{2x}(4x^2 + 8x + 2) + e^{2x}(8x + 8) \\\\\n&= e^{2x}(8x^2 + 16x + 4 + 8x + 8) \\\\\n&= e^{2x}(8x^2 + 24x + 12) \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch2_18",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = e^{4x} \\sin(2x)$.",
    "answer": "e^{4x} \\left[ 16\\sin(2x) + 88\\cos(2x) \\right]",
    "steps": "\\begin{aligned}\nf'(x) &= e^{4x}(4\\sin(2x)) + e^{4x}(2\\cos(2x)) \\\\\n&= e^{4x}(4\\sin(2x) + 2\\cos(2x)) \\\\[10pt]\nf''(x) &= 4e^{4x}(4\\sin(2x) + 2\\cos(2x)) + e^{4x}(8\\cos(2x) - 4\\sin(2x)) \\\\\n&= e^{4x} \\left[ (16 - 4)\\sin(2x) + (8 + 8)\\cos(2x) \\right] \\\\\n&= e^{4x} \\left[ 12\\sin(2x) + 16\\cos(2x) \\right] \\\\[10pt]\nf'''(x) &= 4e^{4x} \\left[ 12\\sin(2x) + 16\\cos(2x) \\right] + e^{4x} \\left[ 24\\cos(2x) - 32\\sin(2x) \\right] \\\\\n&= e^{4x} \\left[ (48 - 32)\\sin(2x) + (64 + 24)\\cos(2x) \\right] \\\\\n&= e^{4x} \\left[ (16)\\sin(2x) + (88)\\cos(2x) \\right] \\\\\n&= e^{4x} \\left[ 16\\sin(2x) + 88\\cos(2x) \\right] \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch3_18",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\ln(16x^2 - 49)$ for $x > \\frac{7}{4}$. \\\\ \\textit{Hint: Factor the argument first.}",
    "answer": "\\frac{128}{(4x-7)^3} + \\frac{128}{(4x+7)^3}",
    "steps": "\\begin{aligned}\nf(x) &= \\ln((4x - 7)(4x + 7)) = \\ln(4x - 7) + \\ln(4x + 7) \\\\[10pt]\nf'(x) &= \\frac{4}{4x - 7} + \\frac{4}{4x + 7} \\\\\n&= 4(4x - 7)^{-1} + 4(4x + 7)^{-1} \\\\[10pt]\nf''(x) &= -16(4x - 7)^{-2} - 16(4x + 7)^{-2} \\\\[10pt]\nf'''(x) &= 128(4x - 7)^{-3} + 128(4x + 7)^{-3} \\\\\n&= \\frac{128}{(4x-7)^3} + \\frac{128}{(4x+7)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch4_18",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\arctan(2x)$.",
    "answer": "\\frac{16(12x^2 - 1)}{(1 + 4x^2)^3}",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{2}{1 + (2x)^2} = 2(1 + 4x^2)^{-1} \\\\[10pt]\nf''(x) &= -2(1 + 4x^2)^{-2} (\\frac{d}{dx}(1 + 4x^2)) \\\\\n&= -2(1 + 4x^2)^{-2} (8x) = -16x(1 + 4x^2)^{-2} \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(-16x)(1 + 4x^2)^{-2} + (-16x)\\frac{d}{dx}((1 + 4x^2)^{-2}) \\\\\n&= -16(1 + 4x^2)^{-2} + (-16x)(-2)(1 + 4x^2)^{-3}(8x) \\\\\n&= \\frac{-16}{(1 + 4x^2)^2} + \\frac{256x^2}{(1 + 4x^2)^3} \\\\\n&= \\frac{-16(1 + 4x^2) + 256x^2}{(1 + 4x^2)^3} \\\\\n&= \\frac{-16 - 64x^2 + 256x^2}{(1 + 4x^2)^3} \\\\\n&= \\frac{-16 + 192x^2}{(1 + 4x^2)^3} \\\\\n&= \\frac{16(12x^2 - 1)}{(1 + 4x^2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch5_18",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fourth derivative $f^{(4)}(x)$ of $f(x) = \\frac{2}{\\sqrt{2x + 1}}$.",
    "answer": "\\frac{3360}{16(2x + 1)^{9/2}}",
    "steps": "\\begin{aligned}\nf(x) &= 2(2x + 1)^{-1/2} \\\\[10pt]\nf'(x) &= 2 \\left(-\\frac{1}{2}\\right)(2x + 1)^{-3/2}(2) = -\\frac{4}{2}(2x + 1)^{-3/2} \\\\[10pt]\nf''(x) &= -\\frac{4}{2} \\left(-\\frac{3}{2}\\right)(2x + 1)^{-5/2}(2) = \\frac{24}{4}(2x + 1)^{-5/2} \\\\[10pt]\nf'''(x) &= \\frac{24}{4} \\left(-\\frac{5}{2}\\right)(2x + 1)^{-7/2}(2) = -\\frac{240}{8}(2x + 1)^{-7/2} \\\\[10pt]\nf^{(4)}(x) &= -\\frac{240}{8} \\left(-\\frac{7}{2}\\right)(2x + 1)^{-9/2}(2) = \\frac{3360}{16}(2x + 1)^{-9/2} \\\\\n&= \\frac{3360}{16(2x + 1)^{9/2}} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch6_18",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fifth derivative $f^{(5)}(x)$ of $f(x) = 5x^3 \\ln(3x)$.",
    "answer": "-\\frac{30}{x^2}",
    "steps": "\\begin{aligned}\nf'(x) &= 5 \\left[ 3x^2 \\ln(3x) + x^3 \\left(\\frac{1}{x}\\right) \\right] = 5(3x^2 \\ln(3x) + x^2) \\\\[10pt]\nf''(x) &= 5 \\left[ 6x \\ln(3x) + 3x^2 \\left(\\frac{1}{x}\\right) + 2x \\right] = 5(6x \\ln(3x) + 5x) \\\\[10pt]\nf'''(x) &= 5 \\left[ 6\\ln(3x) + 6x \\left(\\frac{1}{x}\\right) + 5 \\right] = 5(6\\ln(3x) + 11) \\\\[10pt]\nf^{(4)}(x) &= 5 \\left[ 6 \\left(\\frac{1}{x}\\right) + 0 \\right] = \\frac{30}{x} = 30x^{-1} \\\\[10pt]\nf^{(5)}(x) &= -30x^{-2} = -\\frac{30}{x^2} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch1_19",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = x^2 e^{5x}$.",
    "answer": "e^{5x}(125x^2 + 150x + 30)",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{d}{dx}(x^2)e^{5x} + x^2\\frac{d}{dx}(e^{5x}) \\\\\n&= 2x e^{5x} + 5x^2 e^{5x} = e^{5x}(5x^2 + 2x) \\\\[10pt]\nf''(x) &= \\frac{d}{dx}(e^{5x})(5x^2 + 2x) + e^{5x}\\frac{d}{dx}(5x^2 + 2x) \\\\\n&= 5e^{5x}(5x^2 + 2x) + e^{5x}(10x + 2) \\\\\n&= e^{5x}(25x^2 + 10x + 10x + 2) = e^{5x}(25x^2 + 20x + 2) \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(e^{5x})(25x^2 + 20x + 2) + e^{5x}\\frac{d}{dx}(25x^2 + 20x + 2) \\\\\n&= 5e^{5x}(25x^2 + 20x + 2) + e^{5x}(50x + 20) \\\\\n&= e^{5x}(125x^2 + 100x + 10 + 50x + 20) \\\\\n&= e^{5x}(125x^2 + 150x + 30) \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch2_19",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = e^{2x} \\sin(4x)$.",
    "answer": "e^{2x} \\left[ -88\\sin(4x) - 16\\cos(4x) \\right]",
    "steps": "\\begin{aligned}\nf'(x) &= e^{2x}(2\\sin(4x)) + e^{2x}(4\\cos(4x)) \\\\\n&= e^{2x}(2\\sin(4x) + 4\\cos(4x)) \\\\[10pt]\nf''(x) &= 2e^{2x}(2\\sin(4x) + 4\\cos(4x)) + e^{2x}(8\\cos(4x) - 16\\sin(4x)) \\\\\n&= e^{2x} \\left[ (4 - 16)\\sin(4x) + (8 + 8)\\cos(4x) \\right] \\\\\n&= e^{2x} \\left[ -12\\sin(4x) + 16\\cos(4x) \\right] \\\\[10pt]\nf'''(x) &= 2e^{2x} \\left[ -12\\sin(4x) + 16\\cos(4x) \\right] + e^{2x} \\left[ -48\\cos(4x) - 64\\sin(4x) \\right] \\\\\n&= e^{2x} \\left[ (-24 - 64)\\sin(4x) + (32 + -48)\\cos(4x) \\right] \\\\\n&= e^{2x} \\left[ (-88)\\sin(4x) + (-16)\\cos(4x) \\right] \\\\\n&= e^{2x} \\left[ -88\\sin(4x) - 16\\cos(4x) \\right] \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch3_19",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\ln(9x^2 - 1)$ for $x > \\frac{1}{3}$. \\\\ \\textit{Hint: Factor the argument first.}",
    "answer": "\\frac{54}{(3x-1)^3} + \\frac{54}{(3x+1)^3}",
    "steps": "\\begin{aligned}\nf(x) &= \\ln((3x - 1)(3x + 1)) = \\ln(3x - 1) + \\ln(3x + 1) \\\\[10pt]\nf'(x) &= \\frac{3}{3x - 1} + \\frac{3}{3x + 1} \\\\\n&= 3(3x - 1)^{-1} + 3(3x + 1)^{-1} \\\\[10pt]\nf''(x) &= -9(3x - 1)^{-2} - 9(3x + 1)^{-2} \\\\[10pt]\nf'''(x) &= 54(3x - 1)^{-3} + 54(3x + 1)^{-3} \\\\\n&= \\frac{54}{(3x-1)^3} + \\frac{54}{(3x+1)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch4_19",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\arctan(2x)$.",
    "answer": "\\frac{16(12x^2 - 1)}{(1 + 4x^2)^3}",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{2}{1 + (2x)^2} = 2(1 + 4x^2)^{-1} \\\\[10pt]\nf''(x) &= -2(1 + 4x^2)^{-2} (\\frac{d}{dx}(1 + 4x^2)) \\\\\n&= -2(1 + 4x^2)^{-2} (8x) = -16x(1 + 4x^2)^{-2} \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(-16x)(1 + 4x^2)^{-2} + (-16x)\\frac{d}{dx}((1 + 4x^2)^{-2}) \\\\\n&= -16(1 + 4x^2)^{-2} + (-16x)(-2)(1 + 4x^2)^{-3}(8x) \\\\\n&= \\frac{-16}{(1 + 4x^2)^2} + \\frac{256x^2}{(1 + 4x^2)^3} \\\\\n&= \\frac{-16(1 + 4x^2) + 256x^2}{(1 + 4x^2)^3} \\\\\n&= \\frac{-16 - 64x^2 + 256x^2}{(1 + 4x^2)^3} \\\\\n&= \\frac{-16 + 192x^2}{(1 + 4x^2)^3} \\\\\n&= \\frac{16(12x^2 - 1)}{(1 + 4x^2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch5_19",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fourth derivative $f^{(4)}(x)$ of $f(x) = \\frac{8}{\\sqrt{2x + 1}}$.",
    "answer": "\\frac{13440}{16(2x + 1)^{9/2}}",
    "steps": "\\begin{aligned}\nf(x) &= 8(2x + 1)^{-1/2} \\\\[10pt]\nf'(x) &= 8 \\left(-\\frac{1}{2}\\right)(2x + 1)^{-3/2}(2) = -\\frac{16}{2}(2x + 1)^{-3/2} \\\\[10pt]\nf''(x) &= -\\frac{16}{2} \\left(-\\frac{3}{2}\\right)(2x + 1)^{-5/2}(2) = \\frac{96}{4}(2x + 1)^{-5/2} \\\\[10pt]\nf'''(x) &= \\frac{96}{4} \\left(-\\frac{5}{2}\\right)(2x + 1)^{-7/2}(2) = -\\frac{960}{8}(2x + 1)^{-7/2} \\\\[10pt]\nf^{(4)}(x) &= -\\frac{960}{8} \\left(-\\frac{7}{2}\\right)(2x + 1)^{-9/2}(2) = \\frac{13440}{16}(2x + 1)^{-9/2} \\\\\n&= \\frac{13440}{16(2x + 1)^{9/2}} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch6_19",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fifth derivative $f^{(5)}(x)$ of $f(x) = 4x^3 \\ln(4x)$.",
    "answer": "-\\frac{24}{x^2}",
    "steps": "\\begin{aligned}\nf'(x) &= 4 \\left[ 3x^2 \\ln(4x) + x^3 \\left(\\frac{1}{x}\\right) \\right] = 4(3x^2 \\ln(4x) + x^2) \\\\[10pt]\nf''(x) &= 4 \\left[ 6x \\ln(4x) + 3x^2 \\left(\\frac{1}{x}\\right) + 2x \\right] = 4(6x \\ln(4x) + 5x) \\\\[10pt]\nf'''(x) &= 4 \\left[ 6\\ln(4x) + 6x \\left(\\frac{1}{x}\\right) + 5 \\right] = 4(6\\ln(4x) + 11) \\\\[10pt]\nf^{(4)}(x) &= 4 \\left[ 6 \\left(\\frac{1}{x}\\right) + 0 \\right] = \\frac{24}{x} = 24x^{-1} \\\\[10pt]\nf^{(5)}(x) &= -24x^{-2} = -\\frac{24}{x^2} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch1_20",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = x^2 e^{2x}$.",
    "answer": "e^{2x}(8x^2 + 24x + 12)",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{d}{dx}(x^2)e^{2x} + x^2\\frac{d}{dx}(e^{2x}) \\\\\n&= 2x e^{2x} + 2x^2 e^{2x} = e^{2x}(2x^2 + 2x) \\\\[10pt]\nf''(x) &= \\frac{d}{dx}(e^{2x})(2x^2 + 2x) + e^{2x}\\frac{d}{dx}(2x^2 + 2x) \\\\\n&= 2e^{2x}(2x^2 + 2x) + e^{2x}(4x + 2) \\\\\n&= e^{2x}(4x^2 + 4x + 4x + 2) = e^{2x}(4x^2 + 8x + 2) \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(e^{2x})(4x^2 + 8x + 2) + e^{2x}\\frac{d}{dx}(4x^2 + 8x + 2) \\\\\n&= 2e^{2x}(4x^2 + 8x + 2) + e^{2x}(8x + 8) \\\\\n&= e^{2x}(8x^2 + 16x + 4 + 8x + 8) \\\\\n&= e^{2x}(8x^2 + 24x + 12) \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch2_20",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = e^{3x} \\sin(2x)$.",
    "answer": "e^{3x} \\left[ -9\\sin(2x) + 46\\cos(2x) \\right]",
    "steps": "\\begin{aligned}\nf'(x) &= e^{3x}(3\\sin(2x)) + e^{3x}(2\\cos(2x)) \\\\\n&= e^{3x}(3\\sin(2x) + 2\\cos(2x)) \\\\[10pt]\nf''(x) &= 3e^{3x}(3\\sin(2x) + 2\\cos(2x)) + e^{3x}(6\\cos(2x) - 4\\sin(2x)) \\\\\n&= e^{3x} \\left[ (9 - 4)\\sin(2x) + (6 + 6)\\cos(2x) \\right] \\\\\n&= e^{3x} \\left[ 5\\sin(2x) + 12\\cos(2x) \\right] \\\\[10pt]\nf'''(x) &= 3e^{3x} \\left[ 5\\sin(2x) + 12\\cos(2x) \\right] + e^{3x} \\left[ 10\\cos(2x) - 24\\sin(2x) \\right] \\\\\n&= e^{3x} \\left[ (15 - 24)\\sin(2x) + (36 + 10)\\cos(2x) \\right] \\\\\n&= e^{3x} \\left[ (-9)\\sin(2x) + (46)\\cos(2x) \\right] \\\\\n&= e^{3x} \\left[ -9\\sin(2x) + 46\\cos(2x) \\right] \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch3_20",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\ln(16x^2 - 1)$ for $x > \\frac{1}{4}$. \\\\ \\textit{Hint: Factor the argument first.}",
    "answer": "\\frac{128}{(4x-1)^3} + \\frac{128}{(4x+1)^3}",
    "steps": "\\begin{aligned}\nf(x) &= \\ln((4x - 1)(4x + 1)) = \\ln(4x - 1) + \\ln(4x + 1) \\\\[10pt]\nf'(x) &= \\frac{4}{4x - 1} + \\frac{4}{4x + 1} \\\\\n&= 4(4x - 1)^{-1} + 4(4x + 1)^{-1} \\\\[10pt]\nf''(x) &= -16(4x - 1)^{-2} - 16(4x + 1)^{-2} \\\\[10pt]\nf'''(x) &= 128(4x - 1)^{-3} + 128(4x + 1)^{-3} \\\\\n&= \\frac{128}{(4x-1)^3} + \\frac{128}{(4x+1)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch4_20",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\arctan(2x)$.",
    "answer": "\\frac{16(12x^2 - 1)}{(1 + 4x^2)^3}",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{2}{1 + (2x)^2} = 2(1 + 4x^2)^{-1} \\\\[10pt]\nf''(x) &= -2(1 + 4x^2)^{-2} (\\frac{d}{dx}(1 + 4x^2)) \\\\\n&= -2(1 + 4x^2)^{-2} (8x) = -16x(1 + 4x^2)^{-2} \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(-16x)(1 + 4x^2)^{-2} + (-16x)\\frac{d}{dx}((1 + 4x^2)^{-2}) \\\\\n&= -16(1 + 4x^2)^{-2} + (-16x)(-2)(1 + 4x^2)^{-3}(8x) \\\\\n&= \\frac{-16}{(1 + 4x^2)^2} + \\frac{256x^2}{(1 + 4x^2)^3} \\\\\n&= \\frac{-16(1 + 4x^2) + 256x^2}{(1 + 4x^2)^3} \\\\\n&= \\frac{-16 - 64x^2 + 256x^2}{(1 + 4x^2)^3} \\\\\n&= \\frac{-16 + 192x^2}{(1 + 4x^2)^3} \\\\\n&= \\frac{16(12x^2 - 1)}{(1 + 4x^2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch5_20",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fourth derivative $f^{(4)}(x)$ of $f(x) = \\frac{8}{\\sqrt{3x + 1}}$.",
    "answer": "\\frac{68040}{16(3x + 1)^{9/2}}",
    "steps": "\\begin{aligned}\nf(x) &= 8(3x + 1)^{-1/2} \\\\[10pt]\nf'(x) &= 8 \\left(-\\frac{1}{2}\\right)(3x + 1)^{-3/2}(3) = -\\frac{24}{2}(3x + 1)^{-3/2} \\\\[10pt]\nf''(x) &= -\\frac{24}{2} \\left(-\\frac{3}{2}\\right)(3x + 1)^{-5/2}(3) = \\frac{216}{4}(3x + 1)^{-5/2} \\\\[10pt]\nf'''(x) &= \\frac{216}{4} \\left(-\\frac{5}{2}\\right)(3x + 1)^{-7/2}(3) = -\\frac{3240}{8}(3x + 1)^{-7/2} \\\\[10pt]\nf^{(4)}(x) &= -\\frac{3240}{8} \\left(-\\frac{7}{2}\\right)(3x + 1)^{-9/2}(3) = \\frac{68040}{16}(3x + 1)^{-9/2} \\\\\n&= \\frac{68040}{16(3x + 1)^{9/2}} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch6_20",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fifth derivative $f^{(5)}(x)$ of $f(x) = 3x^3 \\ln(3x)$.",
    "answer": "-\\frac{18}{x^2}",
    "steps": "\\begin{aligned}\nf'(x) &= 3 \\left[ 3x^2 \\ln(3x) + x^3 \\left(\\frac{1}{x}\\right) \\right] = 3(3x^2 \\ln(3x) + x^2) \\\\[10pt]\nf''(x) &= 3 \\left[ 6x \\ln(3x) + 3x^2 \\left(\\frac{1}{x}\\right) + 2x \\right] = 3(6x \\ln(3x) + 5x) \\\\[10pt]\nf'''(x) &= 3 \\left[ 6\\ln(3x) + 6x \\left(\\frac{1}{x}\\right) + 5 \\right] = 3(6\\ln(3x) + 11) \\\\[10pt]\nf^{(4)}(x) &= 3 \\left[ 6 \\left(\\frac{1}{x}\\right) + 0 \\right] = \\frac{18}{x} = 18x^{-1} \\\\[10pt]\nf^{(5)}(x) &= -18x^{-2} = -\\frac{18}{x^2} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch1_21",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = x^2 e^{4x}$.",
    "answer": "e^{4x}(64x^2 + 96x + 24)",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{d}{dx}(x^2)e^{4x} + x^2\\frac{d}{dx}(e^{4x}) \\\\\n&= 2x e^{4x} + 4x^2 e^{4x} = e^{4x}(4x^2 + 2x) \\\\[10pt]\nf''(x) &= \\frac{d}{dx}(e^{4x})(4x^2 + 2x) + e^{4x}\\frac{d}{dx}(4x^2 + 2x) \\\\\n&= 4e^{4x}(4x^2 + 2x) + e^{4x}(8x + 2) \\\\\n&= e^{4x}(16x^2 + 8x + 8x + 2) = e^{4x}(16x^2 + 16x + 2) \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(e^{4x})(16x^2 + 16x + 2) + e^{4x}\\frac{d}{dx}(16x^2 + 16x + 2) \\\\\n&= 4e^{4x}(16x^2 + 16x + 2) + e^{4x}(32x + 16) \\\\\n&= e^{4x}(64x^2 + 64x + 8 + 32x + 16) \\\\\n&= e^{4x}(64x^2 + 96x + 24) \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch2_21",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = e^{3x} \\sin(4x)$.",
    "answer": "e^{3x} \\left[ -117\\sin(4x) + 44\\cos(4x) \\right]",
    "steps": "\\begin{aligned}\nf'(x) &= e^{3x}(3\\sin(4x)) + e^{3x}(4\\cos(4x)) \\\\\n&= e^{3x}(3\\sin(4x) + 4\\cos(4x)) \\\\[10pt]\nf''(x) &= 3e^{3x}(3\\sin(4x) + 4\\cos(4x)) + e^{3x}(12\\cos(4x) - 16\\sin(4x)) \\\\\n&= e^{3x} \\left[ (9 - 16)\\sin(4x) + (12 + 12)\\cos(4x) \\right] \\\\\n&= e^{3x} \\left[ -7\\sin(4x) + 24\\cos(4x) \\right] \\\\[10pt]\nf'''(x) &= 3e^{3x} \\left[ -7\\sin(4x) + 24\\cos(4x) \\right] + e^{3x} \\left[ -28\\cos(4x) - 96\\sin(4x) \\right] \\\\\n&= e^{3x} \\left[ (-21 - 96)\\sin(4x) + (72 + -28)\\cos(4x) \\right] \\\\\n&= e^{3x} \\left[ (-117)\\sin(4x) + (44)\\cos(4x) \\right] \\\\\n&= e^{3x} \\left[ -117\\sin(4x) + 44\\cos(4x) \\right] \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch3_21",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\ln(16x^2 - 25)$ for $x > \\frac{5}{4}$. \\\\ \\textit{Hint: Factor the argument first.}",
    "answer": "\\frac{128}{(4x-5)^3} + \\frac{128}{(4x+5)^3}",
    "steps": "\\begin{aligned}\nf(x) &= \\ln((4x - 5)(4x + 5)) = \\ln(4x - 5) + \\ln(4x + 5) \\\\[10pt]\nf'(x) &= \\frac{4}{4x - 5} + \\frac{4}{4x + 5} \\\\\n&= 4(4x - 5)^{-1} + 4(4x + 5)^{-1} \\\\[10pt]\nf''(x) &= -16(4x - 5)^{-2} - 16(4x + 5)^{-2} \\\\[10pt]\nf'''(x) &= 128(4x - 5)^{-3} + 128(4x + 5)^{-3} \\\\\n&= \\frac{128}{(4x-5)^3} + \\frac{128}{(4x+5)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch4_21",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\arctan(4x)$.",
    "answer": "\\frac{128(48x^2 - 1)}{(1 + 16x^2)^3}",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{4}{1 + (4x)^2} = 4(1 + 16x^2)^{-1} \\\\[10pt]\nf''(x) &= -4(1 + 16x^2)^{-2} (\\frac{d}{dx}(1 + 16x^2)) \\\\\n&= -4(1 + 16x^2)^{-2} (32x) = -128x(1 + 16x^2)^{-2} \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(-128x)(1 + 16x^2)^{-2} + (-128x)\\frac{d}{dx}((1 + 16x^2)^{-2}) \\\\\n&= -128(1 + 16x^2)^{-2} + (-128x)(-2)(1 + 16x^2)^{-3}(32x) \\\\\n&= \\frac{-128}{(1 + 16x^2)^2} + \\frac{8192x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{-128(1 + 16x^2) + 8192x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{-128 - 2048x^2 + 8192x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{-128 + 6144x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{128(48x^2 - 1)}{(1 + 16x^2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch5_21",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fourth derivative $f^{(4)}(x)$ of $f(x) = \\frac{8}{\\sqrt{5x + 1}}$.",
    "answer": "\\frac{525000}{16(5x + 1)^{9/2}}",
    "steps": "\\begin{aligned}\nf(x) &= 8(5x + 1)^{-1/2} \\\\[10pt]\nf'(x) &= 8 \\left(-\\frac{1}{2}\\right)(5x + 1)^{-3/2}(5) = -\\frac{40}{2}(5x + 1)^{-3/2} \\\\[10pt]\nf''(x) &= -\\frac{40}{2} \\left(-\\frac{3}{2}\\right)(5x + 1)^{-5/2}(5) = \\frac{600}{4}(5x + 1)^{-5/2} \\\\[10pt]\nf'''(x) &= \\frac{600}{4} \\left(-\\frac{5}{2}\\right)(5x + 1)^{-7/2}(5) = -\\frac{15000}{8}(5x + 1)^{-7/2} \\\\[10pt]\nf^{(4)}(x) &= -\\frac{15000}{8} \\left(-\\frac{7}{2}\\right)(5x + 1)^{-9/2}(5) = \\frac{525000}{16}(5x + 1)^{-9/2} \\\\\n&= \\frac{525000}{16(5x + 1)^{9/2}} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch6_21",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fifth derivative $f^{(5)}(x)$ of $f(x) = 5x^3 \\ln(2x)$.",
    "answer": "-\\frac{30}{x^2}",
    "steps": "\\begin{aligned}\nf'(x) &= 5 \\left[ 3x^2 \\ln(2x) + x^3 \\left(\\frac{1}{x}\\right) \\right] = 5(3x^2 \\ln(2x) + x^2) \\\\[10pt]\nf''(x) &= 5 \\left[ 6x \\ln(2x) + 3x^2 \\left(\\frac{1}{x}\\right) + 2x \\right] = 5(6x \\ln(2x) + 5x) \\\\[10pt]\nf'''(x) &= 5 \\left[ 6\\ln(2x) + 6x \\left(\\frac{1}{x}\\right) + 5 \\right] = 5(6\\ln(2x) + 11) \\\\[10pt]\nf^{(4)}(x) &= 5 \\left[ 6 \\left(\\frac{1}{x}\\right) + 0 \\right] = \\frac{30}{x} = 30x^{-1} \\\\[10pt]\nf^{(5)}(x) &= -30x^{-2} = -\\frac{30}{x^2} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch1_22",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = x^2 e^{3x}$.",
    "answer": "e^{3x}(27x^2 + 54x + 18)",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{d}{dx}(x^2)e^{3x} + x^2\\frac{d}{dx}(e^{3x}) \\\\\n&= 2x e^{3x} + 3x^2 e^{3x} = e^{3x}(3x^2 + 2x) \\\\[10pt]\nf''(x) &= \\frac{d}{dx}(e^{3x})(3x^2 + 2x) + e^{3x}\\frac{d}{dx}(3x^2 + 2x) \\\\\n&= 3e^{3x}(3x^2 + 2x) + e^{3x}(6x + 2) \\\\\n&= e^{3x}(9x^2 + 6x + 6x + 2) = e^{3x}(9x^2 + 12x + 2) \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(e^{3x})(9x^2 + 12x + 2) + e^{3x}\\frac{d}{dx}(9x^2 + 12x + 2) \\\\\n&= 3e^{3x}(9x^2 + 12x + 2) + e^{3x}(18x + 12) \\\\\n&= e^{3x}(27x^2 + 36x + 6 + 18x + 12) \\\\\n&= e^{3x}(27x^2 + 54x + 18) \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch2_22",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = e^{3x} \\sin(4x)$.",
    "answer": "e^{3x} \\left[ -117\\sin(4x) + 44\\cos(4x) \\right]",
    "steps": "\\begin{aligned}\nf'(x) &= e^{3x}(3\\sin(4x)) + e^{3x}(4\\cos(4x)) \\\\\n&= e^{3x}(3\\sin(4x) + 4\\cos(4x)) \\\\[10pt]\nf''(x) &= 3e^{3x}(3\\sin(4x) + 4\\cos(4x)) + e^{3x}(12\\cos(4x) - 16\\sin(4x)) \\\\\n&= e^{3x} \\left[ (9 - 16)\\sin(4x) + (12 + 12)\\cos(4x) \\right] \\\\\n&= e^{3x} \\left[ -7\\sin(4x) + 24\\cos(4x) \\right] \\\\[10pt]\nf'''(x) &= 3e^{3x} \\left[ -7\\sin(4x) + 24\\cos(4x) \\right] + e^{3x} \\left[ -28\\cos(4x) - 96\\sin(4x) \\right] \\\\\n&= e^{3x} \\left[ (-21 - 96)\\sin(4x) + (72 + -28)\\cos(4x) \\right] \\\\\n&= e^{3x} \\left[ (-117)\\sin(4x) + (44)\\cos(4x) \\right] \\\\\n&= e^{3x} \\left[ -117\\sin(4x) + 44\\cos(4x) \\right] \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch3_22",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\ln(25x^2 - 36)$ for $x > \\frac{6}{5}$. \\\\ \\textit{Hint: Factor the argument first.}",
    "answer": "\\frac{250}{(5x-6)^3} + \\frac{250}{(5x+6)^3}",
    "steps": "\\begin{aligned}\nf(x) &= \\ln((5x - 6)(5x + 6)) = \\ln(5x - 6) + \\ln(5x + 6) \\\\[10pt]\nf'(x) &= \\frac{5}{5x - 6} + \\frac{5}{5x + 6} \\\\\n&= 5(5x - 6)^{-1} + 5(5x + 6)^{-1} \\\\[10pt]\nf''(x) &= -25(5x - 6)^{-2} - 25(5x + 6)^{-2} \\\\[10pt]\nf'''(x) &= 250(5x - 6)^{-3} + 250(5x + 6)^{-3} \\\\\n&= \\frac{250}{(5x-6)^3} + \\frac{250}{(5x+6)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch4_22",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\arctan(3x)$.",
    "answer": "\\frac{54(27x^2 - 1)}{(1 + 9x^2)^3}",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{3}{1 + (3x)^2} = 3(1 + 9x^2)^{-1} \\\\[10pt]\nf''(x) &= -3(1 + 9x^2)^{-2} (\\frac{d}{dx}(1 + 9x^2)) \\\\\n&= -3(1 + 9x^2)^{-2} (18x) = -54x(1 + 9x^2)^{-2} \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(-54x)(1 + 9x^2)^{-2} + (-54x)\\frac{d}{dx}((1 + 9x^2)^{-2}) \\\\\n&= -54(1 + 9x^2)^{-2} + (-54x)(-2)(1 + 9x^2)^{-3}(18x) \\\\\n&= \\frac{-54}{(1 + 9x^2)^2} + \\frac{1944x^2}{(1 + 9x^2)^3} \\\\\n&= \\frac{-54(1 + 9x^2) + 1944x^2}{(1 + 9x^2)^3} \\\\\n&= \\frac{-54 - 486x^2 + 1944x^2}{(1 + 9x^2)^3} \\\\\n&= \\frac{-54 + 1458x^2}{(1 + 9x^2)^3} \\\\\n&= \\frac{54(27x^2 - 1)}{(1 + 9x^2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch5_22",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fourth derivative $f^{(4)}(x)$ of $f(x) = \\frac{16}{\\sqrt{3x + 1}}$.",
    "answer": "\\frac{136080}{16(3x + 1)^{9/2}}",
    "steps": "\\begin{aligned}\nf(x) &= 16(3x + 1)^{-1/2} \\\\[10pt]\nf'(x) &= 16 \\left(-\\frac{1}{2}\\right)(3x + 1)^{-3/2}(3) = -\\frac{48}{2}(3x + 1)^{-3/2} \\\\[10pt]\nf''(x) &= -\\frac{48}{2} \\left(-\\frac{3}{2}\\right)(3x + 1)^{-5/2}(3) = \\frac{432}{4}(3x + 1)^{-5/2} \\\\[10pt]\nf'''(x) &= \\frac{432}{4} \\left(-\\frac{5}{2}\\right)(3x + 1)^{-7/2}(3) = -\\frac{6480}{8}(3x + 1)^{-7/2} \\\\[10pt]\nf^{(4)}(x) &= -\\frac{6480}{8} \\left(-\\frac{7}{2}\\right)(3x + 1)^{-9/2}(3) = \\frac{136080}{16}(3x + 1)^{-9/2} \\\\\n&= \\frac{136080}{16(3x + 1)^{9/2}} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch6_22",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fifth derivative $f^{(5)}(x)$ of $f(x) = 2x^3 \\ln(4x)$.",
    "answer": "-\\frac{12}{x^2}",
    "steps": "\\begin{aligned}\nf'(x) &= 2 \\left[ 3x^2 \\ln(4x) + x^3 \\left(\\frac{1}{x}\\right) \\right] = 2(3x^2 \\ln(4x) + x^2) \\\\[10pt]\nf''(x) &= 2 \\left[ 6x \\ln(4x) + 3x^2 \\left(\\frac{1}{x}\\right) + 2x \\right] = 2(6x \\ln(4x) + 5x) \\\\[10pt]\nf'''(x) &= 2 \\left[ 6\\ln(4x) + 6x \\left(\\frac{1}{x}\\right) + 5 \\right] = 2(6\\ln(4x) + 11) \\\\[10pt]\nf^{(4)}(x) &= 2 \\left[ 6 \\left(\\frac{1}{x}\\right) + 0 \\right] = \\frac{12}{x} = 12x^{-1} \\\\[10pt]\nf^{(5)}(x) &= -12x^{-2} = -\\frac{12}{x^2} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch1_23",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = x^2 e^{6x}$.",
    "answer": "e^{6x}(216x^2 + 216x + 36)",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{d}{dx}(x^2)e^{6x} + x^2\\frac{d}{dx}(e^{6x}) \\\\\n&= 2x e^{6x} + 6x^2 e^{6x} = e^{6x}(6x^2 + 2x) \\\\[10pt]\nf''(x) &= \\frac{d}{dx}(e^{6x})(6x^2 + 2x) + e^{6x}\\frac{d}{dx}(6x^2 + 2x) \\\\\n&= 6e^{6x}(6x^2 + 2x) + e^{6x}(12x + 2) \\\\\n&= e^{6x}(36x^2 + 12x + 12x + 2) = e^{6x}(36x^2 + 24x + 2) \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(e^{6x})(36x^2 + 24x + 2) + e^{6x}\\frac{d}{dx}(36x^2 + 24x + 2) \\\\\n&= 6e^{6x}(36x^2 + 24x + 2) + e^{6x}(72x + 24) \\\\\n&= e^{6x}(216x^2 + 144x + 12 + 72x + 24) \\\\\n&= e^{6x}(216x^2 + 216x + 36) \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch2_23",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = e^{3x} \\sin(4x)$.",
    "answer": "e^{3x} \\left[ -117\\sin(4x) + 44\\cos(4x) \\right]",
    "steps": "\\begin{aligned}\nf'(x) &= e^{3x}(3\\sin(4x)) + e^{3x}(4\\cos(4x)) \\\\\n&= e^{3x}(3\\sin(4x) + 4\\cos(4x)) \\\\[10pt]\nf''(x) &= 3e^{3x}(3\\sin(4x) + 4\\cos(4x)) + e^{3x}(12\\cos(4x) - 16\\sin(4x)) \\\\\n&= e^{3x} \\left[ (9 - 16)\\sin(4x) + (12 + 12)\\cos(4x) \\right] \\\\\n&= e^{3x} \\left[ -7\\sin(4x) + 24\\cos(4x) \\right] \\\\[10pt]\nf'''(x) &= 3e^{3x} \\left[ -7\\sin(4x) + 24\\cos(4x) \\right] + e^{3x} \\left[ -28\\cos(4x) - 96\\sin(4x) \\right] \\\\\n&= e^{3x} \\left[ (-21 - 96)\\sin(4x) + (72 + -28)\\cos(4x) \\right] \\\\\n&= e^{3x} \\left[ (-117)\\sin(4x) + (44)\\cos(4x) \\right] \\\\\n&= e^{3x} \\left[ -117\\sin(4x) + 44\\cos(4x) \\right] \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch3_23",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\ln(4x^2 - 1)$ for $x > \\frac{1}{2}$. \\\\ \\textit{Hint: Factor the argument first.}",
    "answer": "\\frac{16}{(2x-1)^3} + \\frac{16}{(2x+1)^3}",
    "steps": "\\begin{aligned}\nf(x) &= \\ln((2x - 1)(2x + 1)) = \\ln(2x - 1) + \\ln(2x + 1) \\\\[10pt]\nf'(x) &= \\frac{2}{2x - 1} + \\frac{2}{2x + 1} \\\\\n&= 2(2x - 1)^{-1} + 2(2x + 1)^{-1} \\\\[10pt]\nf''(x) &= -4(2x - 1)^{-2} - 4(2x + 1)^{-2} \\\\[10pt]\nf'''(x) &= 16(2x - 1)^{-3} + 16(2x + 1)^{-3} \\\\\n&= \\frac{16}{(2x-1)^3} + \\frac{16}{(2x+1)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch4_23",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\arctan(4x)$.",
    "answer": "\\frac{128(48x^2 - 1)}{(1 + 16x^2)^3}",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{4}{1 + (4x)^2} = 4(1 + 16x^2)^{-1} \\\\[10pt]\nf''(x) &= -4(1 + 16x^2)^{-2} (\\frac{d}{dx}(1 + 16x^2)) \\\\\n&= -4(1 + 16x^2)^{-2} (32x) = -128x(1 + 16x^2)^{-2} \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(-128x)(1 + 16x^2)^{-2} + (-128x)\\frac{d}{dx}((1 + 16x^2)^{-2}) \\\\\n&= -128(1 + 16x^2)^{-2} + (-128x)(-2)(1 + 16x^2)^{-3}(32x) \\\\\n&= \\frac{-128}{(1 + 16x^2)^2} + \\frac{8192x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{-128(1 + 16x^2) + 8192x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{-128 - 2048x^2 + 8192x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{-128 + 6144x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{128(48x^2 - 1)}{(1 + 16x^2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch5_23",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fourth derivative $f^{(4)}(x)$ of $f(x) = \\frac{4}{\\sqrt{2x + 1}}$.",
    "answer": "\\frac{6720}{16(2x + 1)^{9/2}}",
    "steps": "\\begin{aligned}\nf(x) &= 4(2x + 1)^{-1/2} \\\\[10pt]\nf'(x) &= 4 \\left(-\\frac{1}{2}\\right)(2x + 1)^{-3/2}(2) = -\\frac{8}{2}(2x + 1)^{-3/2} \\\\[10pt]\nf''(x) &= -\\frac{8}{2} \\left(-\\frac{3}{2}\\right)(2x + 1)^{-5/2}(2) = \\frac{48}{4}(2x + 1)^{-5/2} \\\\[10pt]\nf'''(x) &= \\frac{48}{4} \\left(-\\frac{5}{2}\\right)(2x + 1)^{-7/2}(2) = -\\frac{480}{8}(2x + 1)^{-7/2} \\\\[10pt]\nf^{(4)}(x) &= -\\frac{480}{8} \\left(-\\frac{7}{2}\\right)(2x + 1)^{-9/2}(2) = \\frac{6720}{16}(2x + 1)^{-9/2} \\\\\n&= \\frac{6720}{16(2x + 1)^{9/2}} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch6_23",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fifth derivative $f^{(5)}(x)$ of $f(x) = 5x^3 \\ln(2x)$.",
    "answer": "-\\frac{30}{x^2}",
    "steps": "\\begin{aligned}\nf'(x) &= 5 \\left[ 3x^2 \\ln(2x) + x^3 \\left(\\frac{1}{x}\\right) \\right] = 5(3x^2 \\ln(2x) + x^2) \\\\[10pt]\nf''(x) &= 5 \\left[ 6x \\ln(2x) + 3x^2 \\left(\\frac{1}{x}\\right) + 2x \\right] = 5(6x \\ln(2x) + 5x) \\\\[10pt]\nf'''(x) &= 5 \\left[ 6\\ln(2x) + 6x \\left(\\frac{1}{x}\\right) + 5 \\right] = 5(6\\ln(2x) + 11) \\\\[10pt]\nf^{(4)}(x) &= 5 \\left[ 6 \\left(\\frac{1}{x}\\right) + 0 \\right] = \\frac{30}{x} = 30x^{-1} \\\\[10pt]\nf^{(5)}(x) &= -30x^{-2} = -\\frac{30}{x^2} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch1_24",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = x^2 e^{4x}$.",
    "answer": "e^{4x}(64x^2 + 96x + 24)",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{d}{dx}(x^2)e^{4x} + x^2\\frac{d}{dx}(e^{4x}) \\\\\n&= 2x e^{4x} + 4x^2 e^{4x} = e^{4x}(4x^2 + 2x) \\\\[10pt]\nf''(x) &= \\frac{d}{dx}(e^{4x})(4x^2 + 2x) + e^{4x}\\frac{d}{dx}(4x^2 + 2x) \\\\\n&= 4e^{4x}(4x^2 + 2x) + e^{4x}(8x + 2) \\\\\n&= e^{4x}(16x^2 + 8x + 8x + 2) = e^{4x}(16x^2 + 16x + 2) \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(e^{4x})(16x^2 + 16x + 2) + e^{4x}\\frac{d}{dx}(16x^2 + 16x + 2) \\\\\n&= 4e^{4x}(16x^2 + 16x + 2) + e^{4x}(32x + 16) \\\\\n&= e^{4x}(64x^2 + 64x + 8 + 32x + 16) \\\\\n&= e^{4x}(64x^2 + 96x + 24) \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch2_24",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = e^{2x} \\sin(3x)$.",
    "answer": "e^{2x} \\left[ -46\\sin(3x) + 9\\cos(3x) \\right]",
    "steps": "\\begin{aligned}\nf'(x) &= e^{2x}(2\\sin(3x)) + e^{2x}(3\\cos(3x)) \\\\\n&= e^{2x}(2\\sin(3x) + 3\\cos(3x)) \\\\[10pt]\nf''(x) &= 2e^{2x}(2\\sin(3x) + 3\\cos(3x)) + e^{2x}(6\\cos(3x) - 9\\sin(3x)) \\\\\n&= e^{2x} \\left[ (4 - 9)\\sin(3x) + (6 + 6)\\cos(3x) \\right] \\\\\n&= e^{2x} \\left[ -5\\sin(3x) + 12\\cos(3x) \\right] \\\\[10pt]\nf'''(x) &= 2e^{2x} \\left[ -5\\sin(3x) + 12\\cos(3x) \\right] + e^{2x} \\left[ -15\\cos(3x) - 36\\sin(3x) \\right] \\\\\n&= e^{2x} \\left[ (-10 - 36)\\sin(3x) + (24 + -15)\\cos(3x) \\right] \\\\\n&= e^{2x} \\left[ (-46)\\sin(3x) + (9)\\cos(3x) \\right] \\\\\n&= e^{2x} \\left[ -46\\sin(3x) + 9\\cos(3x) \\right] \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch3_24",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\ln(4x^2 - 9)$ for $x > \\frac{3}{2}$. \\\\ \\textit{Hint: Factor the argument first.}",
    "answer": "\\frac{16}{(2x-3)^3} + \\frac{16}{(2x+3)^3}",
    "steps": "\\begin{aligned}\nf(x) &= \\ln((2x - 3)(2x + 3)) = \\ln(2x - 3) + \\ln(2x + 3) \\\\[10pt]\nf'(x) &= \\frac{2}{2x - 3} + \\frac{2}{2x + 3} \\\\\n&= 2(2x - 3)^{-1} + 2(2x + 3)^{-1} \\\\[10pt]\nf''(x) &= -4(2x - 3)^{-2} - 4(2x + 3)^{-2} \\\\[10pt]\nf'''(x) &= 16(2x - 3)^{-3} + 16(2x + 3)^{-3} \\\\\n&= \\frac{16}{(2x-3)^3} + \\frac{16}{(2x+3)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch4_24",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\arctan(3x)$.",
    "answer": "\\frac{54(27x^2 - 1)}{(1 + 9x^2)^3}",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{3}{1 + (3x)^2} = 3(1 + 9x^2)^{-1} \\\\[10pt]\nf''(x) &= -3(1 + 9x^2)^{-2} (\\frac{d}{dx}(1 + 9x^2)) \\\\\n&= -3(1 + 9x^2)^{-2} (18x) = -54x(1 + 9x^2)^{-2} \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(-54x)(1 + 9x^2)^{-2} + (-54x)\\frac{d}{dx}((1 + 9x^2)^{-2}) \\\\\n&= -54(1 + 9x^2)^{-2} + (-54x)(-2)(1 + 9x^2)^{-3}(18x) \\\\\n&= \\frac{-54}{(1 + 9x^2)^2} + \\frac{1944x^2}{(1 + 9x^2)^3} \\\\\n&= \\frac{-54(1 + 9x^2) + 1944x^2}{(1 + 9x^2)^3} \\\\\n&= \\frac{-54 - 486x^2 + 1944x^2}{(1 + 9x^2)^3} \\\\\n&= \\frac{-54 + 1458x^2}{(1 + 9x^2)^3} \\\\\n&= \\frac{54(27x^2 - 1)}{(1 + 9x^2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch5_24",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fourth derivative $f^{(4)}(x)$ of $f(x) = \\frac{16}{\\sqrt{3x + 1}}$.",
    "answer": "\\frac{136080}{16(3x + 1)^{9/2}}",
    "steps": "\\begin{aligned}\nf(x) &= 16(3x + 1)^{-1/2} \\\\[10pt]\nf'(x) &= 16 \\left(-\\frac{1}{2}\\right)(3x + 1)^{-3/2}(3) = -\\frac{48}{2}(3x + 1)^{-3/2} \\\\[10pt]\nf''(x) &= -\\frac{48}{2} \\left(-\\frac{3}{2}\\right)(3x + 1)^{-5/2}(3) = \\frac{432}{4}(3x + 1)^{-5/2} \\\\[10pt]\nf'''(x) &= \\frac{432}{4} \\left(-\\frac{5}{2}\\right)(3x + 1)^{-7/2}(3) = -\\frac{6480}{8}(3x + 1)^{-7/2} \\\\[10pt]\nf^{(4)}(x) &= -\\frac{6480}{8} \\left(-\\frac{7}{2}\\right)(3x + 1)^{-9/2}(3) = \\frac{136080}{16}(3x + 1)^{-9/2} \\\\\n&= \\frac{136080}{16(3x + 1)^{9/2}} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch6_24",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fifth derivative $f^{(5)}(x)$ of $f(x) = 3x^3 \\ln(5x)$.",
    "answer": "-\\frac{18}{x^2}",
    "steps": "\\begin{aligned}\nf'(x) &= 3 \\left[ 3x^2 \\ln(5x) + x^3 \\left(\\frac{1}{x}\\right) \\right] = 3(3x^2 \\ln(5x) + x^2) \\\\[10pt]\nf''(x) &= 3 \\left[ 6x \\ln(5x) + 3x^2 \\left(\\frac{1}{x}\\right) + 2x \\right] = 3(6x \\ln(5x) + 5x) \\\\[10pt]\nf'''(x) &= 3 \\left[ 6\\ln(5x) + 6x \\left(\\frac{1}{x}\\right) + 5 \\right] = 3(6\\ln(5x) + 11) \\\\[10pt]\nf^{(4)}(x) &= 3 \\left[ 6 \\left(\\frac{1}{x}\\right) + 0 \\right] = \\frac{18}{x} = 18x^{-1} \\\\[10pt]\nf^{(5)}(x) &= -18x^{-2} = -\\frac{18}{x^2} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch1_25",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = x^2 e^{4x}$.",
    "answer": "e^{4x}(64x^2 + 96x + 24)",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{d}{dx}(x^2)e^{4x} + x^2\\frac{d}{dx}(e^{4x}) \\\\\n&= 2x e^{4x} + 4x^2 e^{4x} = e^{4x}(4x^2 + 2x) \\\\[10pt]\nf''(x) &= \\frac{d}{dx}(e^{4x})(4x^2 + 2x) + e^{4x}\\frac{d}{dx}(4x^2 + 2x) \\\\\n&= 4e^{4x}(4x^2 + 2x) + e^{4x}(8x + 2) \\\\\n&= e^{4x}(16x^2 + 8x + 8x + 2) = e^{4x}(16x^2 + 16x + 2) \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(e^{4x})(16x^2 + 16x + 2) + e^{4x}\\frac{d}{dx}(16x^2 + 16x + 2) \\\\\n&= 4e^{4x}(16x^2 + 16x + 2) + e^{4x}(32x + 16) \\\\\n&= e^{4x}(64x^2 + 64x + 8 + 32x + 16) \\\\\n&= e^{4x}(64x^2 + 96x + 24) \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch2_25",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = e^{4x} \\sin(5x)$.",
    "answer": "e^{4x} \\left[ -236\\sin(5x) + 115\\cos(5x) \\right]",
    "steps": "\\begin{aligned}\nf'(x) &= e^{4x}(4\\sin(5x)) + e^{4x}(5\\cos(5x)) \\\\\n&= e^{4x}(4\\sin(5x) + 5\\cos(5x)) \\\\[10pt]\nf''(x) &= 4e^{4x}(4\\sin(5x) + 5\\cos(5x)) + e^{4x}(20\\cos(5x) - 25\\sin(5x)) \\\\\n&= e^{4x} \\left[ (16 - 25)\\sin(5x) + (20 + 20)\\cos(5x) \\right] \\\\\n&= e^{4x} \\left[ -9\\sin(5x) + 40\\cos(5x) \\right] \\\\[10pt]\nf'''(x) &= 4e^{4x} \\left[ -9\\sin(5x) + 40\\cos(5x) \\right] + e^{4x} \\left[ -45\\cos(5x) - 200\\sin(5x) \\right] \\\\\n&= e^{4x} \\left[ (-36 - 200)\\sin(5x) + (160 + -45)\\cos(5x) \\right] \\\\\n&= e^{4x} \\left[ (-236)\\sin(5x) + (115)\\cos(5x) \\right] \\\\\n&= e^{4x} \\left[ -236\\sin(5x) + 115\\cos(5x) \\right] \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch3_25",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\ln(4x^2 - 1)$ for $x > \\frac{1}{2}$. \\\\ \\textit{Hint: Factor the argument first.}",
    "answer": "\\frac{16}{(2x-1)^3} + \\frac{16}{(2x+1)^3}",
    "steps": "\\begin{aligned}\nf(x) &= \\ln((2x - 1)(2x + 1)) = \\ln(2x - 1) + \\ln(2x + 1) \\\\[10pt]\nf'(x) &= \\frac{2}{2x - 1} + \\frac{2}{2x + 1} \\\\\n&= 2(2x - 1)^{-1} + 2(2x + 1)^{-1} \\\\[10pt]\nf''(x) &= -4(2x - 1)^{-2} - 4(2x + 1)^{-2} \\\\[10pt]\nf'''(x) &= 16(2x - 1)^{-3} + 16(2x + 1)^{-3} \\\\\n&= \\frac{16}{(2x-1)^3} + \\frac{16}{(2x+1)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch4_25",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\arctan(3x)$.",
    "answer": "\\frac{54(27x^2 - 1)}{(1 + 9x^2)^3}",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{3}{1 + (3x)^2} = 3(1 + 9x^2)^{-1} \\\\[10pt]\nf''(x) &= -3(1 + 9x^2)^{-2} (\\frac{d}{dx}(1 + 9x^2)) \\\\\n&= -3(1 + 9x^2)^{-2} (18x) = -54x(1 + 9x^2)^{-2} \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(-54x)(1 + 9x^2)^{-2} + (-54x)\\frac{d}{dx}((1 + 9x^2)^{-2}) \\\\\n&= -54(1 + 9x^2)^{-2} + (-54x)(-2)(1 + 9x^2)^{-3}(18x) \\\\\n&= \\frac{-54}{(1 + 9x^2)^2} + \\frac{1944x^2}{(1 + 9x^2)^3} \\\\\n&= \\frac{-54(1 + 9x^2) + 1944x^2}{(1 + 9x^2)^3} \\\\\n&= \\frac{-54 - 486x^2 + 1944x^2}{(1 + 9x^2)^3} \\\\\n&= \\frac{-54 + 1458x^2}{(1 + 9x^2)^3} \\\\\n&= \\frac{54(27x^2 - 1)}{(1 + 9x^2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch5_25",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fourth derivative $f^{(4)}(x)$ of $f(x) = \\frac{4}{\\sqrt{2x + 1}}$.",
    "answer": "\\frac{6720}{16(2x + 1)^{9/2}}",
    "steps": "\\begin{aligned}\nf(x) &= 4(2x + 1)^{-1/2} \\\\[10pt]\nf'(x) &= 4 \\left(-\\frac{1}{2}\\right)(2x + 1)^{-3/2}(2) = -\\frac{8}{2}(2x + 1)^{-3/2} \\\\[10pt]\nf''(x) &= -\\frac{8}{2} \\left(-\\frac{3}{2}\\right)(2x + 1)^{-5/2}(2) = \\frac{48}{4}(2x + 1)^{-5/2} \\\\[10pt]\nf'''(x) &= \\frac{48}{4} \\left(-\\frac{5}{2}\\right)(2x + 1)^{-7/2}(2) = -\\frac{480}{8}(2x + 1)^{-7/2} \\\\[10pt]\nf^{(4)}(x) &= -\\frac{480}{8} \\left(-\\frac{7}{2}\\right)(2x + 1)^{-9/2}(2) = \\frac{6720}{16}(2x + 1)^{-9/2} \\\\\n&= \\frac{6720}{16(2x + 1)^{9/2}} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch6_25",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fifth derivative $f^{(5)}(x)$ of $f(x) = 5x^3 \\ln(5x)$.",
    "answer": "-\\frac{30}{x^2}",
    "steps": "\\begin{aligned}\nf'(x) &= 5 \\left[ 3x^2 \\ln(5x) + x^3 \\left(\\frac{1}{x}\\right) \\right] = 5(3x^2 \\ln(5x) + x^2) \\\\[10pt]\nf''(x) &= 5 \\left[ 6x \\ln(5x) + 3x^2 \\left(\\frac{1}{x}\\right) + 2x \\right] = 5(6x \\ln(5x) + 5x) \\\\[10pt]\nf'''(x) &= 5 \\left[ 6\\ln(5x) + 6x \\left(\\frac{1}{x}\\right) + 5 \\right] = 5(6\\ln(5x) + 11) \\\\[10pt]\nf^{(4)}(x) &= 5 \\left[ 6 \\left(\\frac{1}{x}\\right) + 0 \\right] = \\frac{30}{x} = 30x^{-1} \\\\[10pt]\nf^{(5)}(x) &= -30x^{-2} = -\\frac{30}{x^2} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch1_26",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = x^2 e^{3x}$.",
    "answer": "e^{3x}(27x^2 + 54x + 18)",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{d}{dx}(x^2)e^{3x} + x^2\\frac{d}{dx}(e^{3x}) \\\\\n&= 2x e^{3x} + 3x^2 e^{3x} = e^{3x}(3x^2 + 2x) \\\\[10pt]\nf''(x) &= \\frac{d}{dx}(e^{3x})(3x^2 + 2x) + e^{3x}\\frac{d}{dx}(3x^2 + 2x) \\\\\n&= 3e^{3x}(3x^2 + 2x) + e^{3x}(6x + 2) \\\\\n&= e^{3x}(9x^2 + 6x + 6x + 2) = e^{3x}(9x^2 + 12x + 2) \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(e^{3x})(9x^2 + 12x + 2) + e^{3x}\\frac{d}{dx}(9x^2 + 12x + 2) \\\\\n&= 3e^{3x}(9x^2 + 12x + 2) + e^{3x}(18x + 12) \\\\\n&= e^{3x}(27x^2 + 36x + 6 + 18x + 12) \\\\\n&= e^{3x}(27x^2 + 54x + 18) \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch2_26",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = e^{2x} \\sin(3x)$.",
    "answer": "e^{2x} \\left[ -46\\sin(3x) + 9\\cos(3x) \\right]",
    "steps": "\\begin{aligned}\nf'(x) &= e^{2x}(2\\sin(3x)) + e^{2x}(3\\cos(3x)) \\\\\n&= e^{2x}(2\\sin(3x) + 3\\cos(3x)) \\\\[10pt]\nf''(x) &= 2e^{2x}(2\\sin(3x) + 3\\cos(3x)) + e^{2x}(6\\cos(3x) - 9\\sin(3x)) \\\\\n&= e^{2x} \\left[ (4 - 9)\\sin(3x) + (6 + 6)\\cos(3x) \\right] \\\\\n&= e^{2x} \\left[ -5\\sin(3x) + 12\\cos(3x) \\right] \\\\[10pt]\nf'''(x) &= 2e^{2x} \\left[ -5\\sin(3x) + 12\\cos(3x) \\right] + e^{2x} \\left[ -15\\cos(3x) - 36\\sin(3x) \\right] \\\\\n&= e^{2x} \\left[ (-10 - 36)\\sin(3x) + (24 + -15)\\cos(3x) \\right] \\\\\n&= e^{2x} \\left[ (-46)\\sin(3x) + (9)\\cos(3x) \\right] \\\\\n&= e^{2x} \\left[ -46\\sin(3x) + 9\\cos(3x) \\right] \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch3_26",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\ln(25x^2 - 36)$ for $x > \\frac{6}{5}$. \\\\ \\textit{Hint: Factor the argument first.}",
    "answer": "\\frac{250}{(5x-6)^3} + \\frac{250}{(5x+6)^3}",
    "steps": "\\begin{aligned}\nf(x) &= \\ln((5x - 6)(5x + 6)) = \\ln(5x - 6) + \\ln(5x + 6) \\\\[10pt]\nf'(x) &= \\frac{5}{5x - 6} + \\frac{5}{5x + 6} \\\\\n&= 5(5x - 6)^{-1} + 5(5x + 6)^{-1} \\\\[10pt]\nf''(x) &= -25(5x - 6)^{-2} - 25(5x + 6)^{-2} \\\\[10pt]\nf'''(x) &= 250(5x - 6)^{-3} + 250(5x + 6)^{-3} \\\\\n&= \\frac{250}{(5x-6)^3} + \\frac{250}{(5x+6)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch4_26",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\arctan(3x)$.",
    "answer": "\\frac{54(27x^2 - 1)}{(1 + 9x^2)^3}",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{3}{1 + (3x)^2} = 3(1 + 9x^2)^{-1} \\\\[10pt]\nf''(x) &= -3(1 + 9x^2)^{-2} (\\frac{d}{dx}(1 + 9x^2)) \\\\\n&= -3(1 + 9x^2)^{-2} (18x) = -54x(1 + 9x^2)^{-2} \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(-54x)(1 + 9x^2)^{-2} + (-54x)\\frac{d}{dx}((1 + 9x^2)^{-2}) \\\\\n&= -54(1 + 9x^2)^{-2} + (-54x)(-2)(1 + 9x^2)^{-3}(18x) \\\\\n&= \\frac{-54}{(1 + 9x^2)^2} + \\frac{1944x^2}{(1 + 9x^2)^3} \\\\\n&= \\frac{-54(1 + 9x^2) + 1944x^2}{(1 + 9x^2)^3} \\\\\n&= \\frac{-54 - 486x^2 + 1944x^2}{(1 + 9x^2)^3} \\\\\n&= \\frac{-54 + 1458x^2}{(1 + 9x^2)^3} \\\\\n&= \\frac{54(27x^2 - 1)}{(1 + 9x^2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch5_26",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fourth derivative $f^{(4)}(x)$ of $f(x) = \\frac{8}{\\sqrt{3x + 1}}$.",
    "answer": "\\frac{68040}{16(3x + 1)^{9/2}}",
    "steps": "\\begin{aligned}\nf(x) &= 8(3x + 1)^{-1/2} \\\\[10pt]\nf'(x) &= 8 \\left(-\\frac{1}{2}\\right)(3x + 1)^{-3/2}(3) = -\\frac{24}{2}(3x + 1)^{-3/2} \\\\[10pt]\nf''(x) &= -\\frac{24}{2} \\left(-\\frac{3}{2}\\right)(3x + 1)^{-5/2}(3) = \\frac{216}{4}(3x + 1)^{-5/2} \\\\[10pt]\nf'''(x) &= \\frac{216}{4} \\left(-\\frac{5}{2}\\right)(3x + 1)^{-7/2}(3) = -\\frac{3240}{8}(3x + 1)^{-7/2} \\\\[10pt]\nf^{(4)}(x) &= -\\frac{3240}{8} \\left(-\\frac{7}{2}\\right)(3x + 1)^{-9/2}(3) = \\frac{68040}{16}(3x + 1)^{-9/2} \\\\\n&= \\frac{68040}{16(3x + 1)^{9/2}} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch6_26",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fifth derivative $f^{(5)}(x)$ of $f(x) = 5x^3 \\ln(5x)$.",
    "answer": "-\\frac{30}{x^2}",
    "steps": "\\begin{aligned}\nf'(x) &= 5 \\left[ 3x^2 \\ln(5x) + x^3 \\left(\\frac{1}{x}\\right) \\right] = 5(3x^2 \\ln(5x) + x^2) \\\\[10pt]\nf''(x) &= 5 \\left[ 6x \\ln(5x) + 3x^2 \\left(\\frac{1}{x}\\right) + 2x \\right] = 5(6x \\ln(5x) + 5x) \\\\[10pt]\nf'''(x) &= 5 \\left[ 6\\ln(5x) + 6x \\left(\\frac{1}{x}\\right) + 5 \\right] = 5(6\\ln(5x) + 11) \\\\[10pt]\nf^{(4)}(x) &= 5 \\left[ 6 \\left(\\frac{1}{x}\\right) + 0 \\right] = \\frac{30}{x} = 30x^{-1} \\\\[10pt]\nf^{(5)}(x) &= -30x^{-2} = -\\frac{30}{x^2} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch1_27",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = x^2 e^{4x}$.",
    "answer": "e^{4x}(64x^2 + 96x + 24)",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{d}{dx}(x^2)e^{4x} + x^2\\frac{d}{dx}(e^{4x}) \\\\\n&= 2x e^{4x} + 4x^2 e^{4x} = e^{4x}(4x^2 + 2x) \\\\[10pt]\nf''(x) &= \\frac{d}{dx}(e^{4x})(4x^2 + 2x) + e^{4x}\\frac{d}{dx}(4x^2 + 2x) \\\\\n&= 4e^{4x}(4x^2 + 2x) + e^{4x}(8x + 2) \\\\\n&= e^{4x}(16x^2 + 8x + 8x + 2) = e^{4x}(16x^2 + 16x + 2) \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(e^{4x})(16x^2 + 16x + 2) + e^{4x}\\frac{d}{dx}(16x^2 + 16x + 2) \\\\\n&= 4e^{4x}(16x^2 + 16x + 2) + e^{4x}(32x + 16) \\\\\n&= e^{4x}(64x^2 + 64x + 8 + 32x + 16) \\\\\n&= e^{4x}(64x^2 + 96x + 24) \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch2_27",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = e^{4x} \\sin(3x)$.",
    "answer": "e^{4x} \\left[ -44\\sin(3x) + 117\\cos(3x) \\right]",
    "steps": "\\begin{aligned}\nf'(x) &= e^{4x}(4\\sin(3x)) + e^{4x}(3\\cos(3x)) \\\\\n&= e^{4x}(4\\sin(3x) + 3\\cos(3x)) \\\\[10pt]\nf''(x) &= 4e^{4x}(4\\sin(3x) + 3\\cos(3x)) + e^{4x}(12\\cos(3x) - 9\\sin(3x)) \\\\\n&= e^{4x} \\left[ (16 - 9)\\sin(3x) + (12 + 12)\\cos(3x) \\right] \\\\\n&= e^{4x} \\left[ 7\\sin(3x) + 24\\cos(3x) \\right] \\\\[10pt]\nf'''(x) &= 4e^{4x} \\left[ 7\\sin(3x) + 24\\cos(3x) \\right] + e^{4x} \\left[ 21\\cos(3x) - 72\\sin(3x) \\right] \\\\\n&= e^{4x} \\left[ (28 - 72)\\sin(3x) + (96 + 21)\\cos(3x) \\right] \\\\\n&= e^{4x} \\left[ (-44)\\sin(3x) + (117)\\cos(3x) \\right] \\\\\n&= e^{4x} \\left[ -44\\sin(3x) + 117\\cos(3x) \\right] \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch3_27",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\ln(9x^2 - 16)$ for $x > \\frac{4}{3}$. \\\\ \\textit{Hint: Factor the argument first.}",
    "answer": "\\frac{54}{(3x-4)^3} + \\frac{54}{(3x+4)^3}",
    "steps": "\\begin{aligned}\nf(x) &= \\ln((3x - 4)(3x + 4)) = \\ln(3x - 4) + \\ln(3x + 4) \\\\[10pt]\nf'(x) &= \\frac{3}{3x - 4} + \\frac{3}{3x + 4} \\\\\n&= 3(3x - 4)^{-1} + 3(3x + 4)^{-1} \\\\[10pt]\nf''(x) &= -9(3x - 4)^{-2} - 9(3x + 4)^{-2} \\\\[10pt]\nf'''(x) &= 54(3x - 4)^{-3} + 54(3x + 4)^{-3} \\\\\n&= \\frac{54}{(3x-4)^3} + \\frac{54}{(3x+4)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch4_27",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\arctan(5x)$.",
    "answer": "\\frac{250(75x^2 - 1)}{(1 + 25x^2)^3}",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{5}{1 + (5x)^2} = 5(1 + 25x^2)^{-1} \\\\[10pt]\nf''(x) &= -5(1 + 25x^2)^{-2} (\\frac{d}{dx}(1 + 25x^2)) \\\\\n&= -5(1 + 25x^2)^{-2} (50x) = -250x(1 + 25x^2)^{-2} \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(-250x)(1 + 25x^2)^{-2} + (-250x)\\frac{d}{dx}((1 + 25x^2)^{-2}) \\\\\n&= -250(1 + 25x^2)^{-2} + (-250x)(-2)(1 + 25x^2)^{-3}(50x) \\\\\n&= \\frac{-250}{(1 + 25x^2)^2} + \\frac{25000x^2}{(1 + 25x^2)^3} \\\\\n&= \\frac{-250(1 + 25x^2) + 25000x^2}{(1 + 25x^2)^3} \\\\\n&= \\frac{-250 - 6250x^2 + 25000x^2}{(1 + 25x^2)^3} \\\\\n&= \\frac{-250 + 18750x^2}{(1 + 25x^2)^3} \\\\\n&= \\frac{250(75x^2 - 1)}{(1 + 25x^2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch5_27",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fourth derivative $f^{(4)}(x)$ of $f(x) = \\frac{16}{\\sqrt{3x + 1}}$.",
    "answer": "\\frac{136080}{16(3x + 1)^{9/2}}",
    "steps": "\\begin{aligned}\nf(x) &= 16(3x + 1)^{-1/2} \\\\[10pt]\nf'(x) &= 16 \\left(-\\frac{1}{2}\\right)(3x + 1)^{-3/2}(3) = -\\frac{48}{2}(3x + 1)^{-3/2} \\\\[10pt]\nf''(x) &= -\\frac{48}{2} \\left(-\\frac{3}{2}\\right)(3x + 1)^{-5/2}(3) = \\frac{432}{4}(3x + 1)^{-5/2} \\\\[10pt]\nf'''(x) &= \\frac{432}{4} \\left(-\\frac{5}{2}\\right)(3x + 1)^{-7/2}(3) = -\\frac{6480}{8}(3x + 1)^{-7/2} \\\\[10pt]\nf^{(4)}(x) &= -\\frac{6480}{8} \\left(-\\frac{7}{2}\\right)(3x + 1)^{-9/2}(3) = \\frac{136080}{16}(3x + 1)^{-9/2} \\\\\n&= \\frac{136080}{16(3x + 1)^{9/2}} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch6_27",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fifth derivative $f^{(5)}(x)$ of $f(x) = 3x^3 \\ln(4x)$.",
    "answer": "-\\frac{18}{x^2}",
    "steps": "\\begin{aligned}\nf'(x) &= 3 \\left[ 3x^2 \\ln(4x) + x^3 \\left(\\frac{1}{x}\\right) \\right] = 3(3x^2 \\ln(4x) + x^2) \\\\[10pt]\nf''(x) &= 3 \\left[ 6x \\ln(4x) + 3x^2 \\left(\\frac{1}{x}\\right) + 2x \\right] = 3(6x \\ln(4x) + 5x) \\\\[10pt]\nf'''(x) &= 3 \\left[ 6\\ln(4x) + 6x \\left(\\frac{1}{x}\\right) + 5 \\right] = 3(6\\ln(4x) + 11) \\\\[10pt]\nf^{(4)}(x) &= 3 \\left[ 6 \\left(\\frac{1}{x}\\right) + 0 \\right] = \\frac{18}{x} = 18x^{-1} \\\\[10pt]\nf^{(5)}(x) &= -18x^{-2} = -\\frac{18}{x^2} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch1_28",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = x^2 e^{4x}$.",
    "answer": "e^{4x}(64x^2 + 96x + 24)",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{d}{dx}(x^2)e^{4x} + x^2\\frac{d}{dx}(e^{4x}) \\\\\n&= 2x e^{4x} + 4x^2 e^{4x} = e^{4x}(4x^2 + 2x) \\\\[10pt]\nf''(x) &= \\frac{d}{dx}(e^{4x})(4x^2 + 2x) + e^{4x}\\frac{d}{dx}(4x^2 + 2x) \\\\\n&= 4e^{4x}(4x^2 + 2x) + e^{4x}(8x + 2) \\\\\n&= e^{4x}(16x^2 + 8x + 8x + 2) = e^{4x}(16x^2 + 16x + 2) \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(e^{4x})(16x^2 + 16x + 2) + e^{4x}\\frac{d}{dx}(16x^2 + 16x + 2) \\\\\n&= 4e^{4x}(16x^2 + 16x + 2) + e^{4x}(32x + 16) \\\\\n&= e^{4x}(64x^2 + 64x + 8 + 32x + 16) \\\\\n&= e^{4x}(64x^2 + 96x + 24) \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch2_28",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = e^{3x} \\sin(4x)$.",
    "answer": "e^{3x} \\left[ -117\\sin(4x) + 44\\cos(4x) \\right]",
    "steps": "\\begin{aligned}\nf'(x) &= e^{3x}(3\\sin(4x)) + e^{3x}(4\\cos(4x)) \\\\\n&= e^{3x}(3\\sin(4x) + 4\\cos(4x)) \\\\[10pt]\nf''(x) &= 3e^{3x}(3\\sin(4x) + 4\\cos(4x)) + e^{3x}(12\\cos(4x) - 16\\sin(4x)) \\\\\n&= e^{3x} \\left[ (9 - 16)\\sin(4x) + (12 + 12)\\cos(4x) \\right] \\\\\n&= e^{3x} \\left[ -7\\sin(4x) + 24\\cos(4x) \\right] \\\\[10pt]\nf'''(x) &= 3e^{3x} \\left[ -7\\sin(4x) + 24\\cos(4x) \\right] + e^{3x} \\left[ -28\\cos(4x) - 96\\sin(4x) \\right] \\\\\n&= e^{3x} \\left[ (-21 - 96)\\sin(4x) + (72 + -28)\\cos(4x) \\right] \\\\\n&= e^{3x} \\left[ (-117)\\sin(4x) + (44)\\cos(4x) \\right] \\\\\n&= e^{3x} \\left[ -117\\sin(4x) + 44\\cos(4x) \\right] \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch3_28",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\ln(9x^2 - 1)$ for $x > \\frac{1}{3}$. \\\\ \\textit{Hint: Factor the argument first.}",
    "answer": "\\frac{54}{(3x-1)^3} + \\frac{54}{(3x+1)^3}",
    "steps": "\\begin{aligned}\nf(x) &= \\ln((3x - 1)(3x + 1)) = \\ln(3x - 1) + \\ln(3x + 1) \\\\[10pt]\nf'(x) &= \\frac{3}{3x - 1} + \\frac{3}{3x + 1} \\\\\n&= 3(3x - 1)^{-1} + 3(3x + 1)^{-1} \\\\[10pt]\nf''(x) &= -9(3x - 1)^{-2} - 9(3x + 1)^{-2} \\\\[10pt]\nf'''(x) &= 54(3x - 1)^{-3} + 54(3x + 1)^{-3} \\\\\n&= \\frac{54}{(3x-1)^3} + \\frac{54}{(3x+1)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch4_28",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\arctan(5x)$.",
    "answer": "\\frac{250(75x^2 - 1)}{(1 + 25x^2)^3}",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{5}{1 + (5x)^2} = 5(1 + 25x^2)^{-1} \\\\[10pt]\nf''(x) &= -5(1 + 25x^2)^{-2} (\\frac{d}{dx}(1 + 25x^2)) \\\\\n&= -5(1 + 25x^2)^{-2} (50x) = -250x(1 + 25x^2)^{-2} \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(-250x)(1 + 25x^2)^{-2} + (-250x)\\frac{d}{dx}((1 + 25x^2)^{-2}) \\\\\n&= -250(1 + 25x^2)^{-2} + (-250x)(-2)(1 + 25x^2)^{-3}(50x) \\\\\n&= \\frac{-250}{(1 + 25x^2)^2} + \\frac{25000x^2}{(1 + 25x^2)^3} \\\\\n&= \\frac{-250(1 + 25x^2) + 25000x^2}{(1 + 25x^2)^3} \\\\\n&= \\frac{-250 - 6250x^2 + 25000x^2}{(1 + 25x^2)^3} \\\\\n&= \\frac{-250 + 18750x^2}{(1 + 25x^2)^3} \\\\\n&= \\frac{250(75x^2 - 1)}{(1 + 25x^2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch5_28",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fourth derivative $f^{(4)}(x)$ of $f(x) = \\frac{4}{\\sqrt{2x + 1}}$.",
    "answer": "\\frac{6720}{16(2x + 1)^{9/2}}",
    "steps": "\\begin{aligned}\nf(x) &= 4(2x + 1)^{-1/2} \\\\[10pt]\nf'(x) &= 4 \\left(-\\frac{1}{2}\\right)(2x + 1)^{-3/2}(2) = -\\frac{8}{2}(2x + 1)^{-3/2} \\\\[10pt]\nf''(x) &= -\\frac{8}{2} \\left(-\\frac{3}{2}\\right)(2x + 1)^{-5/2}(2) = \\frac{48}{4}(2x + 1)^{-5/2} \\\\[10pt]\nf'''(x) &= \\frac{48}{4} \\left(-\\frac{5}{2}\\right)(2x + 1)^{-7/2}(2) = -\\frac{480}{8}(2x + 1)^{-7/2} \\\\[10pt]\nf^{(4)}(x) &= -\\frac{480}{8} \\left(-\\frac{7}{2}\\right)(2x + 1)^{-9/2}(2) = \\frac{6720}{16}(2x + 1)^{-9/2} \\\\\n&= \\frac{6720}{16(2x + 1)^{9/2}} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch6_28",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fifth derivative $f^{(5)}(x)$ of $f(x) = 5x^3 \\ln(2x)$.",
    "answer": "-\\frac{30}{x^2}",
    "steps": "\\begin{aligned}\nf'(x) &= 5 \\left[ 3x^2 \\ln(2x) + x^3 \\left(\\frac{1}{x}\\right) \\right] = 5(3x^2 \\ln(2x) + x^2) \\\\[10pt]\nf''(x) &= 5 \\left[ 6x \\ln(2x) + 3x^2 \\left(\\frac{1}{x}\\right) + 2x \\right] = 5(6x \\ln(2x) + 5x) \\\\[10pt]\nf'''(x) &= 5 \\left[ 6\\ln(2x) + 6x \\left(\\frac{1}{x}\\right) + 5 \\right] = 5(6\\ln(2x) + 11) \\\\[10pt]\nf^{(4)}(x) &= 5 \\left[ 6 \\left(\\frac{1}{x}\\right) + 0 \\right] = \\frac{30}{x} = 30x^{-1} \\\\[10pt]\nf^{(5)}(x) &= -30x^{-2} = -\\frac{30}{x^2} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch1_29",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = x^2 e^{6x}$.",
    "answer": "e^{6x}(216x^2 + 216x + 36)",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{d}{dx}(x^2)e^{6x} + x^2\\frac{d}{dx}(e^{6x}) \\\\\n&= 2x e^{6x} + 6x^2 e^{6x} = e^{6x}(6x^2 + 2x) \\\\[10pt]\nf''(x) &= \\frac{d}{dx}(e^{6x})(6x^2 + 2x) + e^{6x}\\frac{d}{dx}(6x^2 + 2x) \\\\\n&= 6e^{6x}(6x^2 + 2x) + e^{6x}(12x + 2) \\\\\n&= e^{6x}(36x^2 + 12x + 12x + 2) = e^{6x}(36x^2 + 24x + 2) \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(e^{6x})(36x^2 + 24x + 2) + e^{6x}\\frac{d}{dx}(36x^2 + 24x + 2) \\\\\n&= 6e^{6x}(36x^2 + 24x + 2) + e^{6x}(72x + 24) \\\\\n&= e^{6x}(216x^2 + 144x + 12 + 72x + 24) \\\\\n&= e^{6x}(216x^2 + 216x + 36) \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch2_29",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = e^{4x} \\sin(3x)$.",
    "answer": "e^{4x} \\left[ -44\\sin(3x) + 117\\cos(3x) \\right]",
    "steps": "\\begin{aligned}\nf'(x) &= e^{4x}(4\\sin(3x)) + e^{4x}(3\\cos(3x)) \\\\\n&= e^{4x}(4\\sin(3x) + 3\\cos(3x)) \\\\[10pt]\nf''(x) &= 4e^{4x}(4\\sin(3x) + 3\\cos(3x)) + e^{4x}(12\\cos(3x) - 9\\sin(3x)) \\\\\n&= e^{4x} \\left[ (16 - 9)\\sin(3x) + (12 + 12)\\cos(3x) \\right] \\\\\n&= e^{4x} \\left[ 7\\sin(3x) + 24\\cos(3x) \\right] \\\\[10pt]\nf'''(x) &= 4e^{4x} \\left[ 7\\sin(3x) + 24\\cos(3x) \\right] + e^{4x} \\left[ 21\\cos(3x) - 72\\sin(3x) \\right] \\\\\n&= e^{4x} \\left[ (28 - 72)\\sin(3x) + (96 + 21)\\cos(3x) \\right] \\\\\n&= e^{4x} \\left[ (-44)\\sin(3x) + (117)\\cos(3x) \\right] \\\\\n&= e^{4x} \\left[ -44\\sin(3x) + 117\\cos(3x) \\right] \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch3_29",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\ln(9x^2 - 1)$ for $x > \\frac{1}{3}$. \\\\ \\textit{Hint: Factor the argument first.}",
    "answer": "\\frac{54}{(3x-1)^3} + \\frac{54}{(3x+1)^3}",
    "steps": "\\begin{aligned}\nf(x) &= \\ln((3x - 1)(3x + 1)) = \\ln(3x - 1) + \\ln(3x + 1) \\\\[10pt]\nf'(x) &= \\frac{3}{3x - 1} + \\frac{3}{3x + 1} \\\\\n&= 3(3x - 1)^{-1} + 3(3x + 1)^{-1} \\\\[10pt]\nf''(x) &= -9(3x - 1)^{-2} - 9(3x + 1)^{-2} \\\\[10pt]\nf'''(x) &= 54(3x - 1)^{-3} + 54(3x + 1)^{-3} \\\\\n&= \\frac{54}{(3x-1)^3} + \\frac{54}{(3x+1)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch4_29",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\arctan(5x)$.",
    "answer": "\\frac{250(75x^2 - 1)}{(1 + 25x^2)^3}",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{5}{1 + (5x)^2} = 5(1 + 25x^2)^{-1} \\\\[10pt]\nf''(x) &= -5(1 + 25x^2)^{-2} (\\frac{d}{dx}(1 + 25x^2)) \\\\\n&= -5(1 + 25x^2)^{-2} (50x) = -250x(1 + 25x^2)^{-2} \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(-250x)(1 + 25x^2)^{-2} + (-250x)\\frac{d}{dx}((1 + 25x^2)^{-2}) \\\\\n&= -250(1 + 25x^2)^{-2} + (-250x)(-2)(1 + 25x^2)^{-3}(50x) \\\\\n&= \\frac{-250}{(1 + 25x^2)^2} + \\frac{25000x^2}{(1 + 25x^2)^3} \\\\\n&= \\frac{-250(1 + 25x^2) + 25000x^2}{(1 + 25x^2)^3} \\\\\n&= \\frac{-250 - 6250x^2 + 25000x^2}{(1 + 25x^2)^3} \\\\\n&= \\frac{-250 + 18750x^2}{(1 + 25x^2)^3} \\\\\n&= \\frac{250(75x^2 - 1)}{(1 + 25x^2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch5_29",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fourth derivative $f^{(4)}(x)$ of $f(x) = \\frac{8}{\\sqrt{2x + 1}}$.",
    "answer": "\\frac{13440}{16(2x + 1)^{9/2}}",
    "steps": "\\begin{aligned}\nf(x) &= 8(2x + 1)^{-1/2} \\\\[10pt]\nf'(x) &= 8 \\left(-\\frac{1}{2}\\right)(2x + 1)^{-3/2}(2) = -\\frac{16}{2}(2x + 1)^{-3/2} \\\\[10pt]\nf''(x) &= -\\frac{16}{2} \\left(-\\frac{3}{2}\\right)(2x + 1)^{-5/2}(2) = \\frac{96}{4}(2x + 1)^{-5/2} \\\\[10pt]\nf'''(x) &= \\frac{96}{4} \\left(-\\frac{5}{2}\\right)(2x + 1)^{-7/2}(2) = -\\frac{960}{8}(2x + 1)^{-7/2} \\\\[10pt]\nf^{(4)}(x) &= -\\frac{960}{8} \\left(-\\frac{7}{2}\\right)(2x + 1)^{-9/2}(2) = \\frac{13440}{16}(2x + 1)^{-9/2} \\\\\n&= \\frac{13440}{16(2x + 1)^{9/2}} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch6_29",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fifth derivative $f^{(5)}(x)$ of $f(x) = 5x^3 \\ln(3x)$.",
    "answer": "-\\frac{30}{x^2}",
    "steps": "\\begin{aligned}\nf'(x) &= 5 \\left[ 3x^2 \\ln(3x) + x^3 \\left(\\frac{1}{x}\\right) \\right] = 5(3x^2 \\ln(3x) + x^2) \\\\[10pt]\nf''(x) &= 5 \\left[ 6x \\ln(3x) + 3x^2 \\left(\\frac{1}{x}\\right) + 2x \\right] = 5(6x \\ln(3x) + 5x) \\\\[10pt]\nf'''(x) &= 5 \\left[ 6\\ln(3x) + 6x \\left(\\frac{1}{x}\\right) + 5 \\right] = 5(6\\ln(3x) + 11) \\\\[10pt]\nf^{(4)}(x) &= 5 \\left[ 6 \\left(\\frac{1}{x}\\right) + 0 \\right] = \\frac{30}{x} = 30x^{-1} \\\\[10pt]\nf^{(5)}(x) &= -30x^{-2} = -\\frac{30}{x^2} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch1_30",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = x^2 e^{5x}$.",
    "answer": "e^{5x}(125x^2 + 150x + 30)",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{d}{dx}(x^2)e^{5x} + x^2\\frac{d}{dx}(e^{5x}) \\\\\n&= 2x e^{5x} + 5x^2 e^{5x} = e^{5x}(5x^2 + 2x) \\\\[10pt]\nf''(x) &= \\frac{d}{dx}(e^{5x})(5x^2 + 2x) + e^{5x}\\frac{d}{dx}(5x^2 + 2x) \\\\\n&= 5e^{5x}(5x^2 + 2x) + e^{5x}(10x + 2) \\\\\n&= e^{5x}(25x^2 + 10x + 10x + 2) = e^{5x}(25x^2 + 20x + 2) \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(e^{5x})(25x^2 + 20x + 2) + e^{5x}\\frac{d}{dx}(25x^2 + 20x + 2) \\\\\n&= 5e^{5x}(25x^2 + 20x + 2) + e^{5x}(50x + 20) \\\\\n&= e^{5x}(125x^2 + 100x + 10 + 50x + 20) \\\\\n&= e^{5x}(125x^2 + 150x + 30) \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch2_30",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = e^{4x} \\sin(5x)$.",
    "answer": "e^{4x} \\left[ -236\\sin(5x) + 115\\cos(5x) \\right]",
    "steps": "\\begin{aligned}\nf'(x) &= e^{4x}(4\\sin(5x)) + e^{4x}(5\\cos(5x)) \\\\\n&= e^{4x}(4\\sin(5x) + 5\\cos(5x)) \\\\[10pt]\nf''(x) &= 4e^{4x}(4\\sin(5x) + 5\\cos(5x)) + e^{4x}(20\\cos(5x) - 25\\sin(5x)) \\\\\n&= e^{4x} \\left[ (16 - 25)\\sin(5x) + (20 + 20)\\cos(5x) \\right] \\\\\n&= e^{4x} \\left[ -9\\sin(5x) + 40\\cos(5x) \\right] \\\\[10pt]\nf'''(x) &= 4e^{4x} \\left[ -9\\sin(5x) + 40\\cos(5x) \\right] + e^{4x} \\left[ -45\\cos(5x) - 200\\sin(5x) \\right] \\\\\n&= e^{4x} \\left[ (-36 - 200)\\sin(5x) + (160 + -45)\\cos(5x) \\right] \\\\\n&= e^{4x} \\left[ (-236)\\sin(5x) + (115)\\cos(5x) \\right] \\\\\n&= e^{4x} \\left[ -236\\sin(5x) + 115\\cos(5x) \\right] \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch3_30",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\ln(16x^2 - 25)$ for $x > \\frac{5}{4}$. \\\\ \\textit{Hint: Factor the argument first.}",
    "answer": "\\frac{128}{(4x-5)^3} + \\frac{128}{(4x+5)^3}",
    "steps": "\\begin{aligned}\nf(x) &= \\ln((4x - 5)(4x + 5)) = \\ln(4x - 5) + \\ln(4x + 5) \\\\[10pt]\nf'(x) &= \\frac{4}{4x - 5} + \\frac{4}{4x + 5} \\\\\n&= 4(4x - 5)^{-1} + 4(4x + 5)^{-1} \\\\[10pt]\nf''(x) &= -16(4x - 5)^{-2} - 16(4x + 5)^{-2} \\\\[10pt]\nf'''(x) &= 128(4x - 5)^{-3} + 128(4x + 5)^{-3} \\\\\n&= \\frac{128}{(4x-5)^3} + \\frac{128}{(4x+5)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch4_30",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\arctan(5x)$.",
    "answer": "\\frac{250(75x^2 - 1)}{(1 + 25x^2)^3}",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{5}{1 + (5x)^2} = 5(1 + 25x^2)^{-1} \\\\[10pt]\nf''(x) &= -5(1 + 25x^2)^{-2} (\\frac{d}{dx}(1 + 25x^2)) \\\\\n&= -5(1 + 25x^2)^{-2} (50x) = -250x(1 + 25x^2)^{-2} \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(-250x)(1 + 25x^2)^{-2} + (-250x)\\frac{d}{dx}((1 + 25x^2)^{-2}) \\\\\n&= -250(1 + 25x^2)^{-2} + (-250x)(-2)(1 + 25x^2)^{-3}(50x) \\\\\n&= \\frac{-250}{(1 + 25x^2)^2} + \\frac{25000x^2}{(1 + 25x^2)^3} \\\\\n&= \\frac{-250(1 + 25x^2) + 25000x^2}{(1 + 25x^2)^3} \\\\\n&= \\frac{-250 - 6250x^2 + 25000x^2}{(1 + 25x^2)^3} \\\\\n&= \\frac{-250 + 18750x^2}{(1 + 25x^2)^3} \\\\\n&= \\frac{250(75x^2 - 1)}{(1 + 25x^2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch5_30",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fourth derivative $f^{(4)}(x)$ of $f(x) = \\frac{8}{\\sqrt{3x + 1}}$.",
    "answer": "\\frac{68040}{16(3x + 1)^{9/2}}",
    "steps": "\\begin{aligned}\nf(x) &= 8(3x + 1)^{-1/2} \\\\[10pt]\nf'(x) &= 8 \\left(-\\frac{1}{2}\\right)(3x + 1)^{-3/2}(3) = -\\frac{24}{2}(3x + 1)^{-3/2} \\\\[10pt]\nf''(x) &= -\\frac{24}{2} \\left(-\\frac{3}{2}\\right)(3x + 1)^{-5/2}(3) = \\frac{216}{4}(3x + 1)^{-5/2} \\\\[10pt]\nf'''(x) &= \\frac{216}{4} \\left(-\\frac{5}{2}\\right)(3x + 1)^{-7/2}(3) = -\\frac{3240}{8}(3x + 1)^{-7/2} \\\\[10pt]\nf^{(4)}(x) &= -\\frac{3240}{8} \\left(-\\frac{7}{2}\\right)(3x + 1)^{-9/2}(3) = \\frac{68040}{16}(3x + 1)^{-9/2} \\\\\n&= \\frac{68040}{16(3x + 1)^{9/2}} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch6_30",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fifth derivative $f^{(5)}(x)$ of $f(x) = 5x^3 \\ln(4x)$.",
    "answer": "-\\frac{30}{x^2}",
    "steps": "\\begin{aligned}\nf'(x) &= 5 \\left[ 3x^2 \\ln(4x) + x^3 \\left(\\frac{1}{x}\\right) \\right] = 5(3x^2 \\ln(4x) + x^2) \\\\[10pt]\nf''(x) &= 5 \\left[ 6x \\ln(4x) + 3x^2 \\left(\\frac{1}{x}\\right) + 2x \\right] = 5(6x \\ln(4x) + 5x) \\\\[10pt]\nf'''(x) &= 5 \\left[ 6\\ln(4x) + 6x \\left(\\frac{1}{x}\\right) + 5 \\right] = 5(6\\ln(4x) + 11) \\\\[10pt]\nf^{(4)}(x) &= 5 \\left[ 6 \\left(\\frac{1}{x}\\right) + 0 \\right] = \\frac{30}{x} = 30x^{-1} \\\\[10pt]\nf^{(5)}(x) &= -30x^{-2} = -\\frac{30}{x^2} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch1_31",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = x^2 e^{4x}$.",
    "answer": "e^{4x}(64x^2 + 96x + 24)",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{d}{dx}(x^2)e^{4x} + x^2\\frac{d}{dx}(e^{4x}) \\\\\n&= 2x e^{4x} + 4x^2 e^{4x} = e^{4x}(4x^2 + 2x) \\\\[10pt]\nf''(x) &= \\frac{d}{dx}(e^{4x})(4x^2 + 2x) + e^{4x}\\frac{d}{dx}(4x^2 + 2x) \\\\\n&= 4e^{4x}(4x^2 + 2x) + e^{4x}(8x + 2) \\\\\n&= e^{4x}(16x^2 + 8x + 8x + 2) = e^{4x}(16x^2 + 16x + 2) \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(e^{4x})(16x^2 + 16x + 2) + e^{4x}\\frac{d}{dx}(16x^2 + 16x + 2) \\\\\n&= 4e^{4x}(16x^2 + 16x + 2) + e^{4x}(32x + 16) \\\\\n&= e^{4x}(64x^2 + 64x + 8 + 32x + 16) \\\\\n&= e^{4x}(64x^2 + 96x + 24) \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch2_31",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = e^{3x} \\sin(2x)$.",
    "answer": "e^{3x} \\left[ -9\\sin(2x) + 46\\cos(2x) \\right]",
    "steps": "\\begin{aligned}\nf'(x) &= e^{3x}(3\\sin(2x)) + e^{3x}(2\\cos(2x)) \\\\\n&= e^{3x}(3\\sin(2x) + 2\\cos(2x)) \\\\[10pt]\nf''(x) &= 3e^{3x}(3\\sin(2x) + 2\\cos(2x)) + e^{3x}(6\\cos(2x) - 4\\sin(2x)) \\\\\n&= e^{3x} \\left[ (9 - 4)\\sin(2x) + (6 + 6)\\cos(2x) \\right] \\\\\n&= e^{3x} \\left[ 5\\sin(2x) + 12\\cos(2x) \\right] \\\\[10pt]\nf'''(x) &= 3e^{3x} \\left[ 5\\sin(2x) + 12\\cos(2x) \\right] + e^{3x} \\left[ 10\\cos(2x) - 24\\sin(2x) \\right] \\\\\n&= e^{3x} \\left[ (15 - 24)\\sin(2x) + (36 + 10)\\cos(2x) \\right] \\\\\n&= e^{3x} \\left[ (-9)\\sin(2x) + (46)\\cos(2x) \\right] \\\\\n&= e^{3x} \\left[ -9\\sin(2x) + 46\\cos(2x) \\right] \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch3_31",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\ln(25x^2 - 4)$ for $x > \\frac{2}{5}$. \\\\ \\textit{Hint: Factor the argument first.}",
    "answer": "\\frac{250}{(5x-2)^3} + \\frac{250}{(5x+2)^3}",
    "steps": "\\begin{aligned}\nf(x) &= \\ln((5x - 2)(5x + 2)) = \\ln(5x - 2) + \\ln(5x + 2) \\\\[10pt]\nf'(x) &= \\frac{5}{5x - 2} + \\frac{5}{5x + 2} \\\\\n&= 5(5x - 2)^{-1} + 5(5x + 2)^{-1} \\\\[10pt]\nf''(x) &= -25(5x - 2)^{-2} - 25(5x + 2)^{-2} \\\\[10pt]\nf'''(x) &= 250(5x - 2)^{-3} + 250(5x + 2)^{-3} \\\\\n&= \\frac{250}{(5x-2)^3} + \\frac{250}{(5x+2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch4_31",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\arctan(5x)$.",
    "answer": "\\frac{250(75x^2 - 1)}{(1 + 25x^2)^3}",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{5}{1 + (5x)^2} = 5(1 + 25x^2)^{-1} \\\\[10pt]\nf''(x) &= -5(1 + 25x^2)^{-2} (\\frac{d}{dx}(1 + 25x^2)) \\\\\n&= -5(1 + 25x^2)^{-2} (50x) = -250x(1 + 25x^2)^{-2} \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(-250x)(1 + 25x^2)^{-2} + (-250x)\\frac{d}{dx}((1 + 25x^2)^{-2}) \\\\\n&= -250(1 + 25x^2)^{-2} + (-250x)(-2)(1 + 25x^2)^{-3}(50x) \\\\\n&= \\frac{-250}{(1 + 25x^2)^2} + \\frac{25000x^2}{(1 + 25x^2)^3} \\\\\n&= \\frac{-250(1 + 25x^2) + 25000x^2}{(1 + 25x^2)^3} \\\\\n&= \\frac{-250 - 6250x^2 + 25000x^2}{(1 + 25x^2)^3} \\\\\n&= \\frac{-250 + 18750x^2}{(1 + 25x^2)^3} \\\\\n&= \\frac{250(75x^2 - 1)}{(1 + 25x^2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch5_31",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fourth derivative $f^{(4)}(x)$ of $f(x) = \\frac{16}{\\sqrt{3x + 1}}$.",
    "answer": "\\frac{136080}{16(3x + 1)^{9/2}}",
    "steps": "\\begin{aligned}\nf(x) &= 16(3x + 1)^{-1/2} \\\\[10pt]\nf'(x) &= 16 \\left(-\\frac{1}{2}\\right)(3x + 1)^{-3/2}(3) = -\\frac{48}{2}(3x + 1)^{-3/2} \\\\[10pt]\nf''(x) &= -\\frac{48}{2} \\left(-\\frac{3}{2}\\right)(3x + 1)^{-5/2}(3) = \\frac{432}{4}(3x + 1)^{-5/2} \\\\[10pt]\nf'''(x) &= \\frac{432}{4} \\left(-\\frac{5}{2}\\right)(3x + 1)^{-7/2}(3) = -\\frac{6480}{8}(3x + 1)^{-7/2} \\\\[10pt]\nf^{(4)}(x) &= -\\frac{6480}{8} \\left(-\\frac{7}{2}\\right)(3x + 1)^{-9/2}(3) = \\frac{136080}{16}(3x + 1)^{-9/2} \\\\\n&= \\frac{136080}{16(3x + 1)^{9/2}} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch6_31",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fifth derivative $f^{(5)}(x)$ of $f(x) = 5x^3 \\ln(2x)$.",
    "answer": "-\\frac{30}{x^2}",
    "steps": "\\begin{aligned}\nf'(x) &= 5 \\left[ 3x^2 \\ln(2x) + x^3 \\left(\\frac{1}{x}\\right) \\right] = 5(3x^2 \\ln(2x) + x^2) \\\\[10pt]\nf''(x) &= 5 \\left[ 6x \\ln(2x) + 3x^2 \\left(\\frac{1}{x}\\right) + 2x \\right] = 5(6x \\ln(2x) + 5x) \\\\[10pt]\nf'''(x) &= 5 \\left[ 6\\ln(2x) + 6x \\left(\\frac{1}{x}\\right) + 5 \\right] = 5(6\\ln(2x) + 11) \\\\[10pt]\nf^{(4)}(x) &= 5 \\left[ 6 \\left(\\frac{1}{x}\\right) + 0 \\right] = \\frac{30}{x} = 30x^{-1} \\\\[10pt]\nf^{(5)}(x) &= -30x^{-2} = -\\frac{30}{x^2} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch1_32",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = x^2 e^{4x}$.",
    "answer": "e^{4x}(64x^2 + 96x + 24)",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{d}{dx}(x^2)e^{4x} + x^2\\frac{d}{dx}(e^{4x}) \\\\\n&= 2x e^{4x} + 4x^2 e^{4x} = e^{4x}(4x^2 + 2x) \\\\[10pt]\nf''(x) &= \\frac{d}{dx}(e^{4x})(4x^2 + 2x) + e^{4x}\\frac{d}{dx}(4x^2 + 2x) \\\\\n&= 4e^{4x}(4x^2 + 2x) + e^{4x}(8x + 2) \\\\\n&= e^{4x}(16x^2 + 8x + 8x + 2) = e^{4x}(16x^2 + 16x + 2) \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(e^{4x})(16x^2 + 16x + 2) + e^{4x}\\frac{d}{dx}(16x^2 + 16x + 2) \\\\\n&= 4e^{4x}(16x^2 + 16x + 2) + e^{4x}(32x + 16) \\\\\n&= e^{4x}(64x^2 + 64x + 8 + 32x + 16) \\\\\n&= e^{4x}(64x^2 + 96x + 24) \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch2_32",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = e^{2x} \\sin(4x)$.",
    "answer": "e^{2x} \\left[ -88\\sin(4x) - 16\\cos(4x) \\right]",
    "steps": "\\begin{aligned}\nf'(x) &= e^{2x}(2\\sin(4x)) + e^{2x}(4\\cos(4x)) \\\\\n&= e^{2x}(2\\sin(4x) + 4\\cos(4x)) \\\\[10pt]\nf''(x) &= 2e^{2x}(2\\sin(4x) + 4\\cos(4x)) + e^{2x}(8\\cos(4x) - 16\\sin(4x)) \\\\\n&= e^{2x} \\left[ (4 - 16)\\sin(4x) + (8 + 8)\\cos(4x) \\right] \\\\\n&= e^{2x} \\left[ -12\\sin(4x) + 16\\cos(4x) \\right] \\\\[10pt]\nf'''(x) &= 2e^{2x} \\left[ -12\\sin(4x) + 16\\cos(4x) \\right] + e^{2x} \\left[ -48\\cos(4x) - 64\\sin(4x) \\right] \\\\\n&= e^{2x} \\left[ (-24 - 64)\\sin(4x) + (32 + -48)\\cos(4x) \\right] \\\\\n&= e^{2x} \\left[ (-88)\\sin(4x) + (-16)\\cos(4x) \\right] \\\\\n&= e^{2x} \\left[ -88\\sin(4x) - 16\\cos(4x) \\right] \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch3_32",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\ln(4x^2 - 9)$ for $x > \\frac{3}{2}$. \\\\ \\textit{Hint: Factor the argument first.}",
    "answer": "\\frac{16}{(2x-3)^3} + \\frac{16}{(2x+3)^3}",
    "steps": "\\begin{aligned}\nf(x) &= \\ln((2x - 3)(2x + 3)) = \\ln(2x - 3) + \\ln(2x + 3) \\\\[10pt]\nf'(x) &= \\frac{2}{2x - 3} + \\frac{2}{2x + 3} \\\\\n&= 2(2x - 3)^{-1} + 2(2x + 3)^{-1} \\\\[10pt]\nf''(x) &= -4(2x - 3)^{-2} - 4(2x + 3)^{-2} \\\\[10pt]\nf'''(x) &= 16(2x - 3)^{-3} + 16(2x + 3)^{-3} \\\\\n&= \\frac{16}{(2x-3)^3} + \\frac{16}{(2x+3)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch4_32",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\arctan(5x)$.",
    "answer": "\\frac{250(75x^2 - 1)}{(1 + 25x^2)^3}",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{5}{1 + (5x)^2} = 5(1 + 25x^2)^{-1} \\\\[10pt]\nf''(x) &= -5(1 + 25x^2)^{-2} (\\frac{d}{dx}(1 + 25x^2)) \\\\\n&= -5(1 + 25x^2)^{-2} (50x) = -250x(1 + 25x^2)^{-2} \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(-250x)(1 + 25x^2)^{-2} + (-250x)\\frac{d}{dx}((1 + 25x^2)^{-2}) \\\\\n&= -250(1 + 25x^2)^{-2} + (-250x)(-2)(1 + 25x^2)^{-3}(50x) \\\\\n&= \\frac{-250}{(1 + 25x^2)^2} + \\frac{25000x^2}{(1 + 25x^2)^3} \\\\\n&= \\frac{-250(1 + 25x^2) + 25000x^2}{(1 + 25x^2)^3} \\\\\n&= \\frac{-250 - 6250x^2 + 25000x^2}{(1 + 25x^2)^3} \\\\\n&= \\frac{-250 + 18750x^2}{(1 + 25x^2)^3} \\\\\n&= \\frac{250(75x^2 - 1)}{(1 + 25x^2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch5_32",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fourth derivative $f^{(4)}(x)$ of $f(x) = \\frac{16}{\\sqrt{2x + 1}}$.",
    "answer": "\\frac{26880}{16(2x + 1)^{9/2}}",
    "steps": "\\begin{aligned}\nf(x) &= 16(2x + 1)^{-1/2} \\\\[10pt]\nf'(x) &= 16 \\left(-\\frac{1}{2}\\right)(2x + 1)^{-3/2}(2) = -\\frac{32}{2}(2x + 1)^{-3/2} \\\\[10pt]\nf''(x) &= -\\frac{32}{2} \\left(-\\frac{3}{2}\\right)(2x + 1)^{-5/2}(2) = \\frac{192}{4}(2x + 1)^{-5/2} \\\\[10pt]\nf'''(x) &= \\frac{192}{4} \\left(-\\frac{5}{2}\\right)(2x + 1)^{-7/2}(2) = -\\frac{1920}{8}(2x + 1)^{-7/2} \\\\[10pt]\nf^{(4)}(x) &= -\\frac{1920}{8} \\left(-\\frac{7}{2}\\right)(2x + 1)^{-9/2}(2) = \\frac{26880}{16}(2x + 1)^{-9/2} \\\\\n&= \\frac{26880}{16(2x + 1)^{9/2}} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch6_32",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fifth derivative $f^{(5)}(x)$ of $f(x) = 5x^3 \\ln(6x)$.",
    "answer": "-\\frac{30}{x^2}",
    "steps": "\\begin{aligned}\nf'(x) &= 5 \\left[ 3x^2 \\ln(6x) + x^3 \\left(\\frac{1}{x}\\right) \\right] = 5(3x^2 \\ln(6x) + x^2) \\\\[10pt]\nf''(x) &= 5 \\left[ 6x \\ln(6x) + 3x^2 \\left(\\frac{1}{x}\\right) + 2x \\right] = 5(6x \\ln(6x) + 5x) \\\\[10pt]\nf'''(x) &= 5 \\left[ 6\\ln(6x) + 6x \\left(\\frac{1}{x}\\right) + 5 \\right] = 5(6\\ln(6x) + 11) \\\\[10pt]\nf^{(4)}(x) &= 5 \\left[ 6 \\left(\\frac{1}{x}\\right) + 0 \\right] = \\frac{30}{x} = 30x^{-1} \\\\[10pt]\nf^{(5)}(x) &= -30x^{-2} = -\\frac{30}{x^2} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch1_33",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = x^2 e^{4x}$.",
    "answer": "e^{4x}(64x^2 + 96x + 24)",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{d}{dx}(x^2)e^{4x} + x^2\\frac{d}{dx}(e^{4x}) \\\\\n&= 2x e^{4x} + 4x^2 e^{4x} = e^{4x}(4x^2 + 2x) \\\\[10pt]\nf''(x) &= \\frac{d}{dx}(e^{4x})(4x^2 + 2x) + e^{4x}\\frac{d}{dx}(4x^2 + 2x) \\\\\n&= 4e^{4x}(4x^2 + 2x) + e^{4x}(8x + 2) \\\\\n&= e^{4x}(16x^2 + 8x + 8x + 2) = e^{4x}(16x^2 + 16x + 2) \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(e^{4x})(16x^2 + 16x + 2) + e^{4x}\\frac{d}{dx}(16x^2 + 16x + 2) \\\\\n&= 4e^{4x}(16x^2 + 16x + 2) + e^{4x}(32x + 16) \\\\\n&= e^{4x}(64x^2 + 64x + 8 + 32x + 16) \\\\\n&= e^{4x}(64x^2 + 96x + 24) \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch2_33",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = e^{2x} \\sin(3x)$.",
    "answer": "e^{2x} \\left[ -46\\sin(3x) + 9\\cos(3x) \\right]",
    "steps": "\\begin{aligned}\nf'(x) &= e^{2x}(2\\sin(3x)) + e^{2x}(3\\cos(3x)) \\\\\n&= e^{2x}(2\\sin(3x) + 3\\cos(3x)) \\\\[10pt]\nf''(x) &= 2e^{2x}(2\\sin(3x) + 3\\cos(3x)) + e^{2x}(6\\cos(3x) - 9\\sin(3x)) \\\\\n&= e^{2x} \\left[ (4 - 9)\\sin(3x) + (6 + 6)\\cos(3x) \\right] \\\\\n&= e^{2x} \\left[ -5\\sin(3x) + 12\\cos(3x) \\right] \\\\[10pt]\nf'''(x) &= 2e^{2x} \\left[ -5\\sin(3x) + 12\\cos(3x) \\right] + e^{2x} \\left[ -15\\cos(3x) - 36\\sin(3x) \\right] \\\\\n&= e^{2x} \\left[ (-10 - 36)\\sin(3x) + (24 + -15)\\cos(3x) \\right] \\\\\n&= e^{2x} \\left[ (-46)\\sin(3x) + (9)\\cos(3x) \\right] \\\\\n&= e^{2x} \\left[ -46\\sin(3x) + 9\\cos(3x) \\right] \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch3_33",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\ln(16x^2 - 49)$ for $x > \\frac{7}{4}$. \\\\ \\textit{Hint: Factor the argument first.}",
    "answer": "\\frac{128}{(4x-7)^3} + \\frac{128}{(4x+7)^3}",
    "steps": "\\begin{aligned}\nf(x) &= \\ln((4x - 7)(4x + 7)) = \\ln(4x - 7) + \\ln(4x + 7) \\\\[10pt]\nf'(x) &= \\frac{4}{4x - 7} + \\frac{4}{4x + 7} \\\\\n&= 4(4x - 7)^{-1} + 4(4x + 7)^{-1} \\\\[10pt]\nf''(x) &= -16(4x - 7)^{-2} - 16(4x + 7)^{-2} \\\\[10pt]\nf'''(x) &= 128(4x - 7)^{-3} + 128(4x + 7)^{-3} \\\\\n&= \\frac{128}{(4x-7)^3} + \\frac{128}{(4x+7)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch4_33",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\arctan(4x)$.",
    "answer": "\\frac{128(48x^2 - 1)}{(1 + 16x^2)^3}",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{4}{1 + (4x)^2} = 4(1 + 16x^2)^{-1} \\\\[10pt]\nf''(x) &= -4(1 + 16x^2)^{-2} (\\frac{d}{dx}(1 + 16x^2)) \\\\\n&= -4(1 + 16x^2)^{-2} (32x) = -128x(1 + 16x^2)^{-2} \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(-128x)(1 + 16x^2)^{-2} + (-128x)\\frac{d}{dx}((1 + 16x^2)^{-2}) \\\\\n&= -128(1 + 16x^2)^{-2} + (-128x)(-2)(1 + 16x^2)^{-3}(32x) \\\\\n&= \\frac{-128}{(1 + 16x^2)^2} + \\frac{8192x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{-128(1 + 16x^2) + 8192x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{-128 - 2048x^2 + 8192x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{-128 + 6144x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{128(48x^2 - 1)}{(1 + 16x^2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch5_33",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fourth derivative $f^{(4)}(x)$ of $f(x) = \\frac{4}{\\sqrt{5x + 1}}$.",
    "answer": "\\frac{262500}{16(5x + 1)^{9/2}}",
    "steps": "\\begin{aligned}\nf(x) &= 4(5x + 1)^{-1/2} \\\\[10pt]\nf'(x) &= 4 \\left(-\\frac{1}{2}\\right)(5x + 1)^{-3/2}(5) = -\\frac{20}{2}(5x + 1)^{-3/2} \\\\[10pt]\nf''(x) &= -\\frac{20}{2} \\left(-\\frac{3}{2}\\right)(5x + 1)^{-5/2}(5) = \\frac{300}{4}(5x + 1)^{-5/2} \\\\[10pt]\nf'''(x) &= \\frac{300}{4} \\left(-\\frac{5}{2}\\right)(5x + 1)^{-7/2}(5) = -\\frac{7500}{8}(5x + 1)^{-7/2} \\\\[10pt]\nf^{(4)}(x) &= -\\frac{7500}{8} \\left(-\\frac{7}{2}\\right)(5x + 1)^{-9/2}(5) = \\frac{262500}{16}(5x + 1)^{-9/2} \\\\\n&= \\frac{262500}{16(5x + 1)^{9/2}} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch6_33",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fifth derivative $f^{(5)}(x)$ of $f(x) = 2x^3 \\ln(6x)$.",
    "answer": "-\\frac{12}{x^2}",
    "steps": "\\begin{aligned}\nf'(x) &= 2 \\left[ 3x^2 \\ln(6x) + x^3 \\left(\\frac{1}{x}\\right) \\right] = 2(3x^2 \\ln(6x) + x^2) \\\\[10pt]\nf''(x) &= 2 \\left[ 6x \\ln(6x) + 3x^2 \\left(\\frac{1}{x}\\right) + 2x \\right] = 2(6x \\ln(6x) + 5x) \\\\[10pt]\nf'''(x) &= 2 \\left[ 6\\ln(6x) + 6x \\left(\\frac{1}{x}\\right) + 5 \\right] = 2(6\\ln(6x) + 11) \\\\[10pt]\nf^{(4)}(x) &= 2 \\left[ 6 \\left(\\frac{1}{x}\\right) + 0 \\right] = \\frac{12}{x} = 12x^{-1} \\\\[10pt]\nf^{(5)}(x) &= -12x^{-2} = -\\frac{12}{x^2} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch1_34",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = x^2 e^{6x}$.",
    "answer": "e^{6x}(216x^2 + 216x + 36)",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{d}{dx}(x^2)e^{6x} + x^2\\frac{d}{dx}(e^{6x}) \\\\\n&= 2x e^{6x} + 6x^2 e^{6x} = e^{6x}(6x^2 + 2x) \\\\[10pt]\nf''(x) &= \\frac{d}{dx}(e^{6x})(6x^2 + 2x) + e^{6x}\\frac{d}{dx}(6x^2 + 2x) \\\\\n&= 6e^{6x}(6x^2 + 2x) + e^{6x}(12x + 2) \\\\\n&= e^{6x}(36x^2 + 12x + 12x + 2) = e^{6x}(36x^2 + 24x + 2) \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(e^{6x})(36x^2 + 24x + 2) + e^{6x}\\frac{d}{dx}(36x^2 + 24x + 2) \\\\\n&= 6e^{6x}(36x^2 + 24x + 2) + e^{6x}(72x + 24) \\\\\n&= e^{6x}(216x^2 + 144x + 12 + 72x + 24) \\\\\n&= e^{6x}(216x^2 + 216x + 36) \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch2_34",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = e^{2x} \\sin(4x)$.",
    "answer": "e^{2x} \\left[ -88\\sin(4x) - 16\\cos(4x) \\right]",
    "steps": "\\begin{aligned}\nf'(x) &= e^{2x}(2\\sin(4x)) + e^{2x}(4\\cos(4x)) \\\\\n&= e^{2x}(2\\sin(4x) + 4\\cos(4x)) \\\\[10pt]\nf''(x) &= 2e^{2x}(2\\sin(4x) + 4\\cos(4x)) + e^{2x}(8\\cos(4x) - 16\\sin(4x)) \\\\\n&= e^{2x} \\left[ (4 - 16)\\sin(4x) + (8 + 8)\\cos(4x) \\right] \\\\\n&= e^{2x} \\left[ -12\\sin(4x) + 16\\cos(4x) \\right] \\\\[10pt]\nf'''(x) &= 2e^{2x} \\left[ -12\\sin(4x) + 16\\cos(4x) \\right] + e^{2x} \\left[ -48\\cos(4x) - 64\\sin(4x) \\right] \\\\\n&= e^{2x} \\left[ (-24 - 64)\\sin(4x) + (32 + -48)\\cos(4x) \\right] \\\\\n&= e^{2x} \\left[ (-88)\\sin(4x) + (-16)\\cos(4x) \\right] \\\\\n&= e^{2x} \\left[ -88\\sin(4x) - 16\\cos(4x) \\right] \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch3_34",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\ln(25x^2 - 9)$ for $x > \\frac{3}{5}$. \\\\ \\textit{Hint: Factor the argument first.}",
    "answer": "\\frac{250}{(5x-3)^3} + \\frac{250}{(5x+3)^3}",
    "steps": "\\begin{aligned}\nf(x) &= \\ln((5x - 3)(5x + 3)) = \\ln(5x - 3) + \\ln(5x + 3) \\\\[10pt]\nf'(x) &= \\frac{5}{5x - 3} + \\frac{5}{5x + 3} \\\\\n&= 5(5x - 3)^{-1} + 5(5x + 3)^{-1} \\\\[10pt]\nf''(x) &= -25(5x - 3)^{-2} - 25(5x + 3)^{-2} \\\\[10pt]\nf'''(x) &= 250(5x - 3)^{-3} + 250(5x + 3)^{-3} \\\\\n&= \\frac{250}{(5x-3)^3} + \\frac{250}{(5x+3)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch4_34",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\arctan(5x)$.",
    "answer": "\\frac{250(75x^2 - 1)}{(1 + 25x^2)^3}",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{5}{1 + (5x)^2} = 5(1 + 25x^2)^{-1} \\\\[10pt]\nf''(x) &= -5(1 + 25x^2)^{-2} (\\frac{d}{dx}(1 + 25x^2)) \\\\\n&= -5(1 + 25x^2)^{-2} (50x) = -250x(1 + 25x^2)^{-2} \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(-250x)(1 + 25x^2)^{-2} + (-250x)\\frac{d}{dx}((1 + 25x^2)^{-2}) \\\\\n&= -250(1 + 25x^2)^{-2} + (-250x)(-2)(1 + 25x^2)^{-3}(50x) \\\\\n&= \\frac{-250}{(1 + 25x^2)^2} + \\frac{25000x^2}{(1 + 25x^2)^3} \\\\\n&= \\frac{-250(1 + 25x^2) + 25000x^2}{(1 + 25x^2)^3} \\\\\n&= \\frac{-250 - 6250x^2 + 25000x^2}{(1 + 25x^2)^3} \\\\\n&= \\frac{-250 + 18750x^2}{(1 + 25x^2)^3} \\\\\n&= \\frac{250(75x^2 - 1)}{(1 + 25x^2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch5_34",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fourth derivative $f^{(4)}(x)$ of $f(x) = \\frac{4}{\\sqrt{5x + 1}}$.",
    "answer": "\\frac{262500}{16(5x + 1)^{9/2}}",
    "steps": "\\begin{aligned}\nf(x) &= 4(5x + 1)^{-1/2} \\\\[10pt]\nf'(x) &= 4 \\left(-\\frac{1}{2}\\right)(5x + 1)^{-3/2}(5) = -\\frac{20}{2}(5x + 1)^{-3/2} \\\\[10pt]\nf''(x) &= -\\frac{20}{2} \\left(-\\frac{3}{2}\\right)(5x + 1)^{-5/2}(5) = \\frac{300}{4}(5x + 1)^{-5/2} \\\\[10pt]\nf'''(x) &= \\frac{300}{4} \\left(-\\frac{5}{2}\\right)(5x + 1)^{-7/2}(5) = -\\frac{7500}{8}(5x + 1)^{-7/2} \\\\[10pt]\nf^{(4)}(x) &= -\\frac{7500}{8} \\left(-\\frac{7}{2}\\right)(5x + 1)^{-9/2}(5) = \\frac{262500}{16}(5x + 1)^{-9/2} \\\\\n&= \\frac{262500}{16(5x + 1)^{9/2}} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch6_34",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fifth derivative $f^{(5)}(x)$ of $f(x) = 3x^3 \\ln(6x)$.",
    "answer": "-\\frac{18}{x^2}",
    "steps": "\\begin{aligned}\nf'(x) &= 3 \\left[ 3x^2 \\ln(6x) + x^3 \\left(\\frac{1}{x}\\right) \\right] = 3(3x^2 \\ln(6x) + x^2) \\\\[10pt]\nf''(x) &= 3 \\left[ 6x \\ln(6x) + 3x^2 \\left(\\frac{1}{x}\\right) + 2x \\right] = 3(6x \\ln(6x) + 5x) \\\\[10pt]\nf'''(x) &= 3 \\left[ 6\\ln(6x) + 6x \\left(\\frac{1}{x}\\right) + 5 \\right] = 3(6\\ln(6x) + 11) \\\\[10pt]\nf^{(4)}(x) &= 3 \\left[ 6 \\left(\\frac{1}{x}\\right) + 0 \\right] = \\frac{18}{x} = 18x^{-1} \\\\[10pt]\nf^{(5)}(x) &= -18x^{-2} = -\\frac{18}{x^2} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch1_35",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = x^2 e^{4x}$.",
    "answer": "e^{4x}(64x^2 + 96x + 24)",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{d}{dx}(x^2)e^{4x} + x^2\\frac{d}{dx}(e^{4x}) \\\\\n&= 2x e^{4x} + 4x^2 e^{4x} = e^{4x}(4x^2 + 2x) \\\\[10pt]\nf''(x) &= \\frac{d}{dx}(e^{4x})(4x^2 + 2x) + e^{4x}\\frac{d}{dx}(4x^2 + 2x) \\\\\n&= 4e^{4x}(4x^2 + 2x) + e^{4x}(8x + 2) \\\\\n&= e^{4x}(16x^2 + 8x + 8x + 2) = e^{4x}(16x^2 + 16x + 2) \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(e^{4x})(16x^2 + 16x + 2) + e^{4x}\\frac{d}{dx}(16x^2 + 16x + 2) \\\\\n&= 4e^{4x}(16x^2 + 16x + 2) + e^{4x}(32x + 16) \\\\\n&= e^{4x}(64x^2 + 64x + 8 + 32x + 16) \\\\\n&= e^{4x}(64x^2 + 96x + 24) \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch2_35",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = e^{3x} \\sin(2x)$.",
    "answer": "e^{3x} \\left[ -9\\sin(2x) + 46\\cos(2x) \\right]",
    "steps": "\\begin{aligned}\nf'(x) &= e^{3x}(3\\sin(2x)) + e^{3x}(2\\cos(2x)) \\\\\n&= e^{3x}(3\\sin(2x) + 2\\cos(2x)) \\\\[10pt]\nf''(x) &= 3e^{3x}(3\\sin(2x) + 2\\cos(2x)) + e^{3x}(6\\cos(2x) - 4\\sin(2x)) \\\\\n&= e^{3x} \\left[ (9 - 4)\\sin(2x) + (6 + 6)\\cos(2x) \\right] \\\\\n&= e^{3x} \\left[ 5\\sin(2x) + 12\\cos(2x) \\right] \\\\[10pt]\nf'''(x) &= 3e^{3x} \\left[ 5\\sin(2x) + 12\\cos(2x) \\right] + e^{3x} \\left[ 10\\cos(2x) - 24\\sin(2x) \\right] \\\\\n&= e^{3x} \\left[ (15 - 24)\\sin(2x) + (36 + 10)\\cos(2x) \\right] \\\\\n&= e^{3x} \\left[ (-9)\\sin(2x) + (46)\\cos(2x) \\right] \\\\\n&= e^{3x} \\left[ -9\\sin(2x) + 46\\cos(2x) \\right] \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch3_35",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\ln(25x^2 - 49)$ for $x > \\frac{7}{5}$. \\\\ \\textit{Hint: Factor the argument first.}",
    "answer": "\\frac{250}{(5x-7)^3} + \\frac{250}{(5x+7)^3}",
    "steps": "\\begin{aligned}\nf(x) &= \\ln((5x - 7)(5x + 7)) = \\ln(5x - 7) + \\ln(5x + 7) \\\\[10pt]\nf'(x) &= \\frac{5}{5x - 7} + \\frac{5}{5x + 7} \\\\\n&= 5(5x - 7)^{-1} + 5(5x + 7)^{-1} \\\\[10pt]\nf''(x) &= -25(5x - 7)^{-2} - 25(5x + 7)^{-2} \\\\[10pt]\nf'''(x) &= 250(5x - 7)^{-3} + 250(5x + 7)^{-3} \\\\\n&= \\frac{250}{(5x-7)^3} + \\frac{250}{(5x+7)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch4_35",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\arctan(3x)$.",
    "answer": "\\frac{54(27x^2 - 1)}{(1 + 9x^2)^3}",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{3}{1 + (3x)^2} = 3(1 + 9x^2)^{-1} \\\\[10pt]\nf''(x) &= -3(1 + 9x^2)^{-2} (\\frac{d}{dx}(1 + 9x^2)) \\\\\n&= -3(1 + 9x^2)^{-2} (18x) = -54x(1 + 9x^2)^{-2} \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(-54x)(1 + 9x^2)^{-2} + (-54x)\\frac{d}{dx}((1 + 9x^2)^{-2}) \\\\\n&= -54(1 + 9x^2)^{-2} + (-54x)(-2)(1 + 9x^2)^{-3}(18x) \\\\\n&= \\frac{-54}{(1 + 9x^2)^2} + \\frac{1944x^2}{(1 + 9x^2)^3} \\\\\n&= \\frac{-54(1 + 9x^2) + 1944x^2}{(1 + 9x^2)^3} \\\\\n&= \\frac{-54 - 486x^2 + 1944x^2}{(1 + 9x^2)^3} \\\\\n&= \\frac{-54 + 1458x^2}{(1 + 9x^2)^3} \\\\\n&= \\frac{54(27x^2 - 1)}{(1 + 9x^2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch5_35",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fourth derivative $f^{(4)}(x)$ of $f(x) = \\frac{8}{\\sqrt{5x + 1}}$.",
    "answer": "\\frac{525000}{16(5x + 1)^{9/2}}",
    "steps": "\\begin{aligned}\nf(x) &= 8(5x + 1)^{-1/2} \\\\[10pt]\nf'(x) &= 8 \\left(-\\frac{1}{2}\\right)(5x + 1)^{-3/2}(5) = -\\frac{40}{2}(5x + 1)^{-3/2} \\\\[10pt]\nf''(x) &= -\\frac{40}{2} \\left(-\\frac{3}{2}\\right)(5x + 1)^{-5/2}(5) = \\frac{600}{4}(5x + 1)^{-5/2} \\\\[10pt]\nf'''(x) &= \\frac{600}{4} \\left(-\\frac{5}{2}\\right)(5x + 1)^{-7/2}(5) = -\\frac{15000}{8}(5x + 1)^{-7/2} \\\\[10pt]\nf^{(4)}(x) &= -\\frac{15000}{8} \\left(-\\frac{7}{2}\\right)(5x + 1)^{-9/2}(5) = \\frac{525000}{16}(5x + 1)^{-9/2} \\\\\n&= \\frac{525000}{16(5x + 1)^{9/2}} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch6_35",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fifth derivative $f^{(5)}(x)$ of $f(x) = 3x^3 \\ln(5x)$.",
    "answer": "-\\frac{18}{x^2}",
    "steps": "\\begin{aligned}\nf'(x) &= 3 \\left[ 3x^2 \\ln(5x) + x^3 \\left(\\frac{1}{x}\\right) \\right] = 3(3x^2 \\ln(5x) + x^2) \\\\[10pt]\nf''(x) &= 3 \\left[ 6x \\ln(5x) + 3x^2 \\left(\\frac{1}{x}\\right) + 2x \\right] = 3(6x \\ln(5x) + 5x) \\\\[10pt]\nf'''(x) &= 3 \\left[ 6\\ln(5x) + 6x \\left(\\frac{1}{x}\\right) + 5 \\right] = 3(6\\ln(5x) + 11) \\\\[10pt]\nf^{(4)}(x) &= 3 \\left[ 6 \\left(\\frac{1}{x}\\right) + 0 \\right] = \\frac{18}{x} = 18x^{-1} \\\\[10pt]\nf^{(5)}(x) &= -18x^{-2} = -\\frac{18}{x^2} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch1_36",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = x^2 e^{2x}$.",
    "answer": "e^{2x}(8x^2 + 24x + 12)",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{d}{dx}(x^2)e^{2x} + x^2\\frac{d}{dx}(e^{2x}) \\\\\n&= 2x e^{2x} + 2x^2 e^{2x} = e^{2x}(2x^2 + 2x) \\\\[10pt]\nf''(x) &= \\frac{d}{dx}(e^{2x})(2x^2 + 2x) + e^{2x}\\frac{d}{dx}(2x^2 + 2x) \\\\\n&= 2e^{2x}(2x^2 + 2x) + e^{2x}(4x + 2) \\\\\n&= e^{2x}(4x^2 + 4x + 4x + 2) = e^{2x}(4x^2 + 8x + 2) \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(e^{2x})(4x^2 + 8x + 2) + e^{2x}\\frac{d}{dx}(4x^2 + 8x + 2) \\\\\n&= 2e^{2x}(4x^2 + 8x + 2) + e^{2x}(8x + 8) \\\\\n&= e^{2x}(8x^2 + 16x + 4 + 8x + 8) \\\\\n&= e^{2x}(8x^2 + 24x + 12) \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch2_36",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = e^{2x} \\sin(4x)$.",
    "answer": "e^{2x} \\left[ -88\\sin(4x) - 16\\cos(4x) \\right]",
    "steps": "\\begin{aligned}\nf'(x) &= e^{2x}(2\\sin(4x)) + e^{2x}(4\\cos(4x)) \\\\\n&= e^{2x}(2\\sin(4x) + 4\\cos(4x)) \\\\[10pt]\nf''(x) &= 2e^{2x}(2\\sin(4x) + 4\\cos(4x)) + e^{2x}(8\\cos(4x) - 16\\sin(4x)) \\\\\n&= e^{2x} \\left[ (4 - 16)\\sin(4x) + (8 + 8)\\cos(4x) \\right] \\\\\n&= e^{2x} \\left[ -12\\sin(4x) + 16\\cos(4x) \\right] \\\\[10pt]\nf'''(x) &= 2e^{2x} \\left[ -12\\sin(4x) + 16\\cos(4x) \\right] + e^{2x} \\left[ -48\\cos(4x) - 64\\sin(4x) \\right] \\\\\n&= e^{2x} \\left[ (-24 - 64)\\sin(4x) + (32 + -48)\\cos(4x) \\right] \\\\\n&= e^{2x} \\left[ (-88)\\sin(4x) + (-16)\\cos(4x) \\right] \\\\\n&= e^{2x} \\left[ -88\\sin(4x) - 16\\cos(4x) \\right] \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch3_36",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\ln(25x^2 - 9)$ for $x > \\frac{3}{5}$. \\\\ \\textit{Hint: Factor the argument first.}",
    "answer": "\\frac{250}{(5x-3)^3} + \\frac{250}{(5x+3)^3}",
    "steps": "\\begin{aligned}\nf(x) &= \\ln((5x - 3)(5x + 3)) = \\ln(5x - 3) + \\ln(5x + 3) \\\\[10pt]\nf'(x) &= \\frac{5}{5x - 3} + \\frac{5}{5x + 3} \\\\\n&= 5(5x - 3)^{-1} + 5(5x + 3)^{-1} \\\\[10pt]\nf''(x) &= -25(5x - 3)^{-2} - 25(5x + 3)^{-2} \\\\[10pt]\nf'''(x) &= 250(5x - 3)^{-3} + 250(5x + 3)^{-3} \\\\\n&= \\frac{250}{(5x-3)^3} + \\frac{250}{(5x+3)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch4_36",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\arctan(2x)$.",
    "answer": "\\frac{16(12x^2 - 1)}{(1 + 4x^2)^3}",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{2}{1 + (2x)^2} = 2(1 + 4x^2)^{-1} \\\\[10pt]\nf''(x) &= -2(1 + 4x^2)^{-2} (\\frac{d}{dx}(1 + 4x^2)) \\\\\n&= -2(1 + 4x^2)^{-2} (8x) = -16x(1 + 4x^2)^{-2} \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(-16x)(1 + 4x^2)^{-2} + (-16x)\\frac{d}{dx}((1 + 4x^2)^{-2}) \\\\\n&= -16(1 + 4x^2)^{-2} + (-16x)(-2)(1 + 4x^2)^{-3}(8x) \\\\\n&= \\frac{-16}{(1 + 4x^2)^2} + \\frac{256x^2}{(1 + 4x^2)^3} \\\\\n&= \\frac{-16(1 + 4x^2) + 256x^2}{(1 + 4x^2)^3} \\\\\n&= \\frac{-16 - 64x^2 + 256x^2}{(1 + 4x^2)^3} \\\\\n&= \\frac{-16 + 192x^2}{(1 + 4x^2)^3} \\\\\n&= \\frac{16(12x^2 - 1)}{(1 + 4x^2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch5_36",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fourth derivative $f^{(4)}(x)$ of $f(x) = \\frac{8}{\\sqrt{2x + 1}}$.",
    "answer": "\\frac{13440}{16(2x + 1)^{9/2}}",
    "steps": "\\begin{aligned}\nf(x) &= 8(2x + 1)^{-1/2} \\\\[10pt]\nf'(x) &= 8 \\left(-\\frac{1}{2}\\right)(2x + 1)^{-3/2}(2) = -\\frac{16}{2}(2x + 1)^{-3/2} \\\\[10pt]\nf''(x) &= -\\frac{16}{2} \\left(-\\frac{3}{2}\\right)(2x + 1)^{-5/2}(2) = \\frac{96}{4}(2x + 1)^{-5/2} \\\\[10pt]\nf'''(x) &= \\frac{96}{4} \\left(-\\frac{5}{2}\\right)(2x + 1)^{-7/2}(2) = -\\frac{960}{8}(2x + 1)^{-7/2} \\\\[10pt]\nf^{(4)}(x) &= -\\frac{960}{8} \\left(-\\frac{7}{2}\\right)(2x + 1)^{-9/2}(2) = \\frac{13440}{16}(2x + 1)^{-9/2} \\\\\n&= \\frac{13440}{16(2x + 1)^{9/2}} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch6_36",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fifth derivative $f^{(5)}(x)$ of $f(x) = 2x^3 \\ln(4x)$.",
    "answer": "-\\frac{12}{x^2}",
    "steps": "\\begin{aligned}\nf'(x) &= 2 \\left[ 3x^2 \\ln(4x) + x^3 \\left(\\frac{1}{x}\\right) \\right] = 2(3x^2 \\ln(4x) + x^2) \\\\[10pt]\nf''(x) &= 2 \\left[ 6x \\ln(4x) + 3x^2 \\left(\\frac{1}{x}\\right) + 2x \\right] = 2(6x \\ln(4x) + 5x) \\\\[10pt]\nf'''(x) &= 2 \\left[ 6\\ln(4x) + 6x \\left(\\frac{1}{x}\\right) + 5 \\right] = 2(6\\ln(4x) + 11) \\\\[10pt]\nf^{(4)}(x) &= 2 \\left[ 6 \\left(\\frac{1}{x}\\right) + 0 \\right] = \\frac{12}{x} = 12x^{-1} \\\\[10pt]\nf^{(5)}(x) &= -12x^{-2} = -\\frac{12}{x^2} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch1_37",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = x^2 e^{5x}$.",
    "answer": "e^{5x}(125x^2 + 150x + 30)",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{d}{dx}(x^2)e^{5x} + x^2\\frac{d}{dx}(e^{5x}) \\\\\n&= 2x e^{5x} + 5x^2 e^{5x} = e^{5x}(5x^2 + 2x) \\\\[10pt]\nf''(x) &= \\frac{d}{dx}(e^{5x})(5x^2 + 2x) + e^{5x}\\frac{d}{dx}(5x^2 + 2x) \\\\\n&= 5e^{5x}(5x^2 + 2x) + e^{5x}(10x + 2) \\\\\n&= e^{5x}(25x^2 + 10x + 10x + 2) = e^{5x}(25x^2 + 20x + 2) \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(e^{5x})(25x^2 + 20x + 2) + e^{5x}\\frac{d}{dx}(25x^2 + 20x + 2) \\\\\n&= 5e^{5x}(25x^2 + 20x + 2) + e^{5x}(50x + 20) \\\\\n&= e^{5x}(125x^2 + 100x + 10 + 50x + 20) \\\\\n&= e^{5x}(125x^2 + 150x + 30) \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch2_37",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = e^{2x} \\sin(4x)$.",
    "answer": "e^{2x} \\left[ -88\\sin(4x) - 16\\cos(4x) \\right]",
    "steps": "\\begin{aligned}\nf'(x) &= e^{2x}(2\\sin(4x)) + e^{2x}(4\\cos(4x)) \\\\\n&= e^{2x}(2\\sin(4x) + 4\\cos(4x)) \\\\[10pt]\nf''(x) &= 2e^{2x}(2\\sin(4x) + 4\\cos(4x)) + e^{2x}(8\\cos(4x) - 16\\sin(4x)) \\\\\n&= e^{2x} \\left[ (4 - 16)\\sin(4x) + (8 + 8)\\cos(4x) \\right] \\\\\n&= e^{2x} \\left[ -12\\sin(4x) + 16\\cos(4x) \\right] \\\\[10pt]\nf'''(x) &= 2e^{2x} \\left[ -12\\sin(4x) + 16\\cos(4x) \\right] + e^{2x} \\left[ -48\\cos(4x) - 64\\sin(4x) \\right] \\\\\n&= e^{2x} \\left[ (-24 - 64)\\sin(4x) + (32 + -48)\\cos(4x) \\right] \\\\\n&= e^{2x} \\left[ (-88)\\sin(4x) + (-16)\\cos(4x) \\right] \\\\\n&= e^{2x} \\left[ -88\\sin(4x) - 16\\cos(4x) \\right] \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch3_37",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\ln(16x^2 - 25)$ for $x > \\frac{5}{4}$. \\\\ \\textit{Hint: Factor the argument first.}",
    "answer": "\\frac{128}{(4x-5)^3} + \\frac{128}{(4x+5)^3}",
    "steps": "\\begin{aligned}\nf(x) &= \\ln((4x - 5)(4x + 5)) = \\ln(4x - 5) + \\ln(4x + 5) \\\\[10pt]\nf'(x) &= \\frac{4}{4x - 5} + \\frac{4}{4x + 5} \\\\\n&= 4(4x - 5)^{-1} + 4(4x + 5)^{-1} \\\\[10pt]\nf''(x) &= -16(4x - 5)^{-2} - 16(4x + 5)^{-2} \\\\[10pt]\nf'''(x) &= 128(4x - 5)^{-3} + 128(4x + 5)^{-3} \\\\\n&= \\frac{128}{(4x-5)^3} + \\frac{128}{(4x+5)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch4_37",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\arctan(3x)$.",
    "answer": "\\frac{54(27x^2 - 1)}{(1 + 9x^2)^3}",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{3}{1 + (3x)^2} = 3(1 + 9x^2)^{-1} \\\\[10pt]\nf''(x) &= -3(1 + 9x^2)^{-2} (\\frac{d}{dx}(1 + 9x^2)) \\\\\n&= -3(1 + 9x^2)^{-2} (18x) = -54x(1 + 9x^2)^{-2} \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(-54x)(1 + 9x^2)^{-2} + (-54x)\\frac{d}{dx}((1 + 9x^2)^{-2}) \\\\\n&= -54(1 + 9x^2)^{-2} + (-54x)(-2)(1 + 9x^2)^{-3}(18x) \\\\\n&= \\frac{-54}{(1 + 9x^2)^2} + \\frac{1944x^2}{(1 + 9x^2)^3} \\\\\n&= \\frac{-54(1 + 9x^2) + 1944x^2}{(1 + 9x^2)^3} \\\\\n&= \\frac{-54 - 486x^2 + 1944x^2}{(1 + 9x^2)^3} \\\\\n&= \\frac{-54 + 1458x^2}{(1 + 9x^2)^3} \\\\\n&= \\frac{54(27x^2 - 1)}{(1 + 9x^2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch5_37",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fourth derivative $f^{(4)}(x)$ of $f(x) = \\frac{16}{\\sqrt{3x + 1}}$.",
    "answer": "\\frac{136080}{16(3x + 1)^{9/2}}",
    "steps": "\\begin{aligned}\nf(x) &= 16(3x + 1)^{-1/2} \\\\[10pt]\nf'(x) &= 16 \\left(-\\frac{1}{2}\\right)(3x + 1)^{-3/2}(3) = -\\frac{48}{2}(3x + 1)^{-3/2} \\\\[10pt]\nf''(x) &= -\\frac{48}{2} \\left(-\\frac{3}{2}\\right)(3x + 1)^{-5/2}(3) = \\frac{432}{4}(3x + 1)^{-5/2} \\\\[10pt]\nf'''(x) &= \\frac{432}{4} \\left(-\\frac{5}{2}\\right)(3x + 1)^{-7/2}(3) = -\\frac{6480}{8}(3x + 1)^{-7/2} \\\\[10pt]\nf^{(4)}(x) &= -\\frac{6480}{8} \\left(-\\frac{7}{2}\\right)(3x + 1)^{-9/2}(3) = \\frac{136080}{16}(3x + 1)^{-9/2} \\\\\n&= \\frac{136080}{16(3x + 1)^{9/2}} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch6_37",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fifth derivative $f^{(5)}(x)$ of $f(x) = 7x^3 \\ln(6x)$.",
    "answer": "-\\frac{42}{x^2}",
    "steps": "\\begin{aligned}\nf'(x) &= 7 \\left[ 3x^2 \\ln(6x) + x^3 \\left(\\frac{1}{x}\\right) \\right] = 7(3x^2 \\ln(6x) + x^2) \\\\[10pt]\nf''(x) &= 7 \\left[ 6x \\ln(6x) + 3x^2 \\left(\\frac{1}{x}\\right) + 2x \\right] = 7(6x \\ln(6x) + 5x) \\\\[10pt]\nf'''(x) &= 7 \\left[ 6\\ln(6x) + 6x \\left(\\frac{1}{x}\\right) + 5 \\right] = 7(6\\ln(6x) + 11) \\\\[10pt]\nf^{(4)}(x) &= 7 \\left[ 6 \\left(\\frac{1}{x}\\right) + 0 \\right] = \\frac{42}{x} = 42x^{-1} \\\\[10pt]\nf^{(5)}(x) &= -42x^{-2} = -\\frac{42}{x^2} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch1_38",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = x^2 e^{4x}$.",
    "answer": "e^{4x}(64x^2 + 96x + 24)",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{d}{dx}(x^2)e^{4x} + x^2\\frac{d}{dx}(e^{4x}) \\\\\n&= 2x e^{4x} + 4x^2 e^{4x} = e^{4x}(4x^2 + 2x) \\\\[10pt]\nf''(x) &= \\frac{d}{dx}(e^{4x})(4x^2 + 2x) + e^{4x}\\frac{d}{dx}(4x^2 + 2x) \\\\\n&= 4e^{4x}(4x^2 + 2x) + e^{4x}(8x + 2) \\\\\n&= e^{4x}(16x^2 + 8x + 8x + 2) = e^{4x}(16x^2 + 16x + 2) \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(e^{4x})(16x^2 + 16x + 2) + e^{4x}\\frac{d}{dx}(16x^2 + 16x + 2) \\\\\n&= 4e^{4x}(16x^2 + 16x + 2) + e^{4x}(32x + 16) \\\\\n&= e^{4x}(64x^2 + 64x + 8 + 32x + 16) \\\\\n&= e^{4x}(64x^2 + 96x + 24) \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch2_38",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = e^{4x} \\sin(5x)$.",
    "answer": "e^{4x} \\left[ -236\\sin(5x) + 115\\cos(5x) \\right]",
    "steps": "\\begin{aligned}\nf'(x) &= e^{4x}(4\\sin(5x)) + e^{4x}(5\\cos(5x)) \\\\\n&= e^{4x}(4\\sin(5x) + 5\\cos(5x)) \\\\[10pt]\nf''(x) &= 4e^{4x}(4\\sin(5x) + 5\\cos(5x)) + e^{4x}(20\\cos(5x) - 25\\sin(5x)) \\\\\n&= e^{4x} \\left[ (16 - 25)\\sin(5x) + (20 + 20)\\cos(5x) \\right] \\\\\n&= e^{4x} \\left[ -9\\sin(5x) + 40\\cos(5x) \\right] \\\\[10pt]\nf'''(x) &= 4e^{4x} \\left[ -9\\sin(5x) + 40\\cos(5x) \\right] + e^{4x} \\left[ -45\\cos(5x) - 200\\sin(5x) \\right] \\\\\n&= e^{4x} \\left[ (-36 - 200)\\sin(5x) + (160 + -45)\\cos(5x) \\right] \\\\\n&= e^{4x} \\left[ (-236)\\sin(5x) + (115)\\cos(5x) \\right] \\\\\n&= e^{4x} \\left[ -236\\sin(5x) + 115\\cos(5x) \\right] \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch3_38",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\ln(4x^2 - 9)$ for $x > \\frac{3}{2}$. \\\\ \\textit{Hint: Factor the argument first.}",
    "answer": "\\frac{16}{(2x-3)^3} + \\frac{16}{(2x+3)^3}",
    "steps": "\\begin{aligned}\nf(x) &= \\ln((2x - 3)(2x + 3)) = \\ln(2x - 3) + \\ln(2x + 3) \\\\[10pt]\nf'(x) &= \\frac{2}{2x - 3} + \\frac{2}{2x + 3} \\\\\n&= 2(2x - 3)^{-1} + 2(2x + 3)^{-1} \\\\[10pt]\nf''(x) &= -4(2x - 3)^{-2} - 4(2x + 3)^{-2} \\\\[10pt]\nf'''(x) &= 16(2x - 3)^{-3} + 16(2x + 3)^{-3} \\\\\n&= \\frac{16}{(2x-3)^3} + \\frac{16}{(2x+3)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch4_38",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\arctan(4x)$.",
    "answer": "\\frac{128(48x^2 - 1)}{(1 + 16x^2)^3}",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{4}{1 + (4x)^2} = 4(1 + 16x^2)^{-1} \\\\[10pt]\nf''(x) &= -4(1 + 16x^2)^{-2} (\\frac{d}{dx}(1 + 16x^2)) \\\\\n&= -4(1 + 16x^2)^{-2} (32x) = -128x(1 + 16x^2)^{-2} \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(-128x)(1 + 16x^2)^{-2} + (-128x)\\frac{d}{dx}((1 + 16x^2)^{-2}) \\\\\n&= -128(1 + 16x^2)^{-2} + (-128x)(-2)(1 + 16x^2)^{-3}(32x) \\\\\n&= \\frac{-128}{(1 + 16x^2)^2} + \\frac{8192x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{-128(1 + 16x^2) + 8192x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{-128 - 2048x^2 + 8192x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{-128 + 6144x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{128(48x^2 - 1)}{(1 + 16x^2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch5_38",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fourth derivative $f^{(4)}(x)$ of $f(x) = \\frac{16}{\\sqrt{5x + 1}}$.",
    "answer": "\\frac{1050000}{16(5x + 1)^{9/2}}",
    "steps": "\\begin{aligned}\nf(x) &= 16(5x + 1)^{-1/2} \\\\[10pt]\nf'(x) &= 16 \\left(-\\frac{1}{2}\\right)(5x + 1)^{-3/2}(5) = -\\frac{80}{2}(5x + 1)^{-3/2} \\\\[10pt]\nf''(x) &= -\\frac{80}{2} \\left(-\\frac{3}{2}\\right)(5x + 1)^{-5/2}(5) = \\frac{1200}{4}(5x + 1)^{-5/2} \\\\[10pt]\nf'''(x) &= \\frac{1200}{4} \\left(-\\frac{5}{2}\\right)(5x + 1)^{-7/2}(5) = -\\frac{30000}{8}(5x + 1)^{-7/2} \\\\[10pt]\nf^{(4)}(x) &= -\\frac{30000}{8} \\left(-\\frac{7}{2}\\right)(5x + 1)^{-9/2}(5) = \\frac{1050000}{16}(5x + 1)^{-9/2} \\\\\n&= \\frac{1050000}{16(5x + 1)^{9/2}} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch6_38",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fifth derivative $f^{(5)}(x)$ of $f(x) = 7x^3 \\ln(2x)$.",
    "answer": "-\\frac{42}{x^2}",
    "steps": "\\begin{aligned}\nf'(x) &= 7 \\left[ 3x^2 \\ln(2x) + x^3 \\left(\\frac{1}{x}\\right) \\right] = 7(3x^2 \\ln(2x) + x^2) \\\\[10pt]\nf''(x) &= 7 \\left[ 6x \\ln(2x) + 3x^2 \\left(\\frac{1}{x}\\right) + 2x \\right] = 7(6x \\ln(2x) + 5x) \\\\[10pt]\nf'''(x) &= 7 \\left[ 6\\ln(2x) + 6x \\left(\\frac{1}{x}\\right) + 5 \\right] = 7(6\\ln(2x) + 11) \\\\[10pt]\nf^{(4)}(x) &= 7 \\left[ 6 \\left(\\frac{1}{x}\\right) + 0 \\right] = \\frac{42}{x} = 42x^{-1} \\\\[10pt]\nf^{(5)}(x) &= -42x^{-2} = -\\frac{42}{x^2} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch1_39",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = x^2 e^{2x}$.",
    "answer": "e^{2x}(8x^2 + 24x + 12)",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{d}{dx}(x^2)e^{2x} + x^2\\frac{d}{dx}(e^{2x}) \\\\\n&= 2x e^{2x} + 2x^2 e^{2x} = e^{2x}(2x^2 + 2x) \\\\[10pt]\nf''(x) &= \\frac{d}{dx}(e^{2x})(2x^2 + 2x) + e^{2x}\\frac{d}{dx}(2x^2 + 2x) \\\\\n&= 2e^{2x}(2x^2 + 2x) + e^{2x}(4x + 2) \\\\\n&= e^{2x}(4x^2 + 4x + 4x + 2) = e^{2x}(4x^2 + 8x + 2) \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(e^{2x})(4x^2 + 8x + 2) + e^{2x}\\frac{d}{dx}(4x^2 + 8x + 2) \\\\\n&= 2e^{2x}(4x^2 + 8x + 2) + e^{2x}(8x + 8) \\\\\n&= e^{2x}(8x^2 + 16x + 4 + 8x + 8) \\\\\n&= e^{2x}(8x^2 + 24x + 12) \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch2_39",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = e^{4x} \\sin(2x)$.",
    "answer": "e^{4x} \\left[ 16\\sin(2x) + 88\\cos(2x) \\right]",
    "steps": "\\begin{aligned}\nf'(x) &= e^{4x}(4\\sin(2x)) + e^{4x}(2\\cos(2x)) \\\\\n&= e^{4x}(4\\sin(2x) + 2\\cos(2x)) \\\\[10pt]\nf''(x) &= 4e^{4x}(4\\sin(2x) + 2\\cos(2x)) + e^{4x}(8\\cos(2x) - 4\\sin(2x)) \\\\\n&= e^{4x} \\left[ (16 - 4)\\sin(2x) + (8 + 8)\\cos(2x) \\right] \\\\\n&= e^{4x} \\left[ 12\\sin(2x) + 16\\cos(2x) \\right] \\\\[10pt]\nf'''(x) &= 4e^{4x} \\left[ 12\\sin(2x) + 16\\cos(2x) \\right] + e^{4x} \\left[ 24\\cos(2x) - 32\\sin(2x) \\right] \\\\\n&= e^{4x} \\left[ (48 - 32)\\sin(2x) + (64 + 24)\\cos(2x) \\right] \\\\\n&= e^{4x} \\left[ (16)\\sin(2x) + (88)\\cos(2x) \\right] \\\\\n&= e^{4x} \\left[ 16\\sin(2x) + 88\\cos(2x) \\right] \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch3_39",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\ln(4x^2 - 9)$ for $x > \\frac{3}{2}$. \\\\ \\textit{Hint: Factor the argument first.}",
    "answer": "\\frac{16}{(2x-3)^3} + \\frac{16}{(2x+3)^3}",
    "steps": "\\begin{aligned}\nf(x) &= \\ln((2x - 3)(2x + 3)) = \\ln(2x - 3) + \\ln(2x + 3) \\\\[10pt]\nf'(x) &= \\frac{2}{2x - 3} + \\frac{2}{2x + 3} \\\\\n&= 2(2x - 3)^{-1} + 2(2x + 3)^{-1} \\\\[10pt]\nf''(x) &= -4(2x - 3)^{-2} - 4(2x + 3)^{-2} \\\\[10pt]\nf'''(x) &= 16(2x - 3)^{-3} + 16(2x + 3)^{-3} \\\\\n&= \\frac{16}{(2x-3)^3} + \\frac{16}{(2x+3)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch4_39",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\arctan(4x)$.",
    "answer": "\\frac{128(48x^2 - 1)}{(1 + 16x^2)^3}",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{4}{1 + (4x)^2} = 4(1 + 16x^2)^{-1} \\\\[10pt]\nf''(x) &= -4(1 + 16x^2)^{-2} (\\frac{d}{dx}(1 + 16x^2)) \\\\\n&= -4(1 + 16x^2)^{-2} (32x) = -128x(1 + 16x^2)^{-2} \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(-128x)(1 + 16x^2)^{-2} + (-128x)\\frac{d}{dx}((1 + 16x^2)^{-2}) \\\\\n&= -128(1 + 16x^2)^{-2} + (-128x)(-2)(1 + 16x^2)^{-3}(32x) \\\\\n&= \\frac{-128}{(1 + 16x^2)^2} + \\frac{8192x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{-128(1 + 16x^2) + 8192x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{-128 - 2048x^2 + 8192x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{-128 + 6144x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{128(48x^2 - 1)}{(1 + 16x^2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch5_39",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fourth derivative $f^{(4)}(x)$ of $f(x) = \\frac{16}{\\sqrt{5x + 1}}$.",
    "answer": "\\frac{1050000}{16(5x + 1)^{9/2}}",
    "steps": "\\begin{aligned}\nf(x) &= 16(5x + 1)^{-1/2} \\\\[10pt]\nf'(x) &= 16 \\left(-\\frac{1}{2}\\right)(5x + 1)^{-3/2}(5) = -\\frac{80}{2}(5x + 1)^{-3/2} \\\\[10pt]\nf''(x) &= -\\frac{80}{2} \\left(-\\frac{3}{2}\\right)(5x + 1)^{-5/2}(5) = \\frac{1200}{4}(5x + 1)^{-5/2} \\\\[10pt]\nf'''(x) &= \\frac{1200}{4} \\left(-\\frac{5}{2}\\right)(5x + 1)^{-7/2}(5) = -\\frac{30000}{8}(5x + 1)^{-7/2} \\\\[10pt]\nf^{(4)}(x) &= -\\frac{30000}{8} \\left(-\\frac{7}{2}\\right)(5x + 1)^{-9/2}(5) = \\frac{1050000}{16}(5x + 1)^{-9/2} \\\\\n&= \\frac{1050000}{16(5x + 1)^{9/2}} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch6_39",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fifth derivative $f^{(5)}(x)$ of $f(x) = 3x^3 \\ln(3x)$.",
    "answer": "-\\frac{18}{x^2}",
    "steps": "\\begin{aligned}\nf'(x) &= 3 \\left[ 3x^2 \\ln(3x) + x^3 \\left(\\frac{1}{x}\\right) \\right] = 3(3x^2 \\ln(3x) + x^2) \\\\[10pt]\nf''(x) &= 3 \\left[ 6x \\ln(3x) + 3x^2 \\left(\\frac{1}{x}\\right) + 2x \\right] = 3(6x \\ln(3x) + 5x) \\\\[10pt]\nf'''(x) &= 3 \\left[ 6\\ln(3x) + 6x \\left(\\frac{1}{x}\\right) + 5 \\right] = 3(6\\ln(3x) + 11) \\\\[10pt]\nf^{(4)}(x) &= 3 \\left[ 6 \\left(\\frac{1}{x}\\right) + 0 \\right] = \\frac{18}{x} = 18x^{-1} \\\\[10pt]\nf^{(5)}(x) &= -18x^{-2} = -\\frac{18}{x^2} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch1_40",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = x^2 e^{4x}$.",
    "answer": "e^{4x}(64x^2 + 96x + 24)",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{d}{dx}(x^2)e^{4x} + x^2\\frac{d}{dx}(e^{4x}) \\\\\n&= 2x e^{4x} + 4x^2 e^{4x} = e^{4x}(4x^2 + 2x) \\\\[10pt]\nf''(x) &= \\frac{d}{dx}(e^{4x})(4x^2 + 2x) + e^{4x}\\frac{d}{dx}(4x^2 + 2x) \\\\\n&= 4e^{4x}(4x^2 + 2x) + e^{4x}(8x + 2) \\\\\n&= e^{4x}(16x^2 + 8x + 8x + 2) = e^{4x}(16x^2 + 16x + 2) \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(e^{4x})(16x^2 + 16x + 2) + e^{4x}\\frac{d}{dx}(16x^2 + 16x + 2) \\\\\n&= 4e^{4x}(16x^2 + 16x + 2) + e^{4x}(32x + 16) \\\\\n&= e^{4x}(64x^2 + 64x + 8 + 32x + 16) \\\\\n&= e^{4x}(64x^2 + 96x + 24) \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch2_40",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = e^{2x} \\sin(4x)$.",
    "answer": "e^{2x} \\left[ -88\\sin(4x) - 16\\cos(4x) \\right]",
    "steps": "\\begin{aligned}\nf'(x) &= e^{2x}(2\\sin(4x)) + e^{2x}(4\\cos(4x)) \\\\\n&= e^{2x}(2\\sin(4x) + 4\\cos(4x)) \\\\[10pt]\nf''(x) &= 2e^{2x}(2\\sin(4x) + 4\\cos(4x)) + e^{2x}(8\\cos(4x) - 16\\sin(4x)) \\\\\n&= e^{2x} \\left[ (4 - 16)\\sin(4x) + (8 + 8)\\cos(4x) \\right] \\\\\n&= e^{2x} \\left[ -12\\sin(4x) + 16\\cos(4x) \\right] \\\\[10pt]\nf'''(x) &= 2e^{2x} \\left[ -12\\sin(4x) + 16\\cos(4x) \\right] + e^{2x} \\left[ -48\\cos(4x) - 64\\sin(4x) \\right] \\\\\n&= e^{2x} \\left[ (-24 - 64)\\sin(4x) + (32 + -48)\\cos(4x) \\right] \\\\\n&= e^{2x} \\left[ (-88)\\sin(4x) + (-16)\\cos(4x) \\right] \\\\\n&= e^{2x} \\left[ -88\\sin(4x) - 16\\cos(4x) \\right] \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch3_40",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\ln(9x^2 - 49)$ for $x > \\frac{7}{3}$. \\\\ \\textit{Hint: Factor the argument first.}",
    "answer": "\\frac{54}{(3x-7)^3} + \\frac{54}{(3x+7)^3}",
    "steps": "\\begin{aligned}\nf(x) &= \\ln((3x - 7)(3x + 7)) = \\ln(3x - 7) + \\ln(3x + 7) \\\\[10pt]\nf'(x) &= \\frac{3}{3x - 7} + \\frac{3}{3x + 7} \\\\\n&= 3(3x - 7)^{-1} + 3(3x + 7)^{-1} \\\\[10pt]\nf''(x) &= -9(3x - 7)^{-2} - 9(3x + 7)^{-2} \\\\[10pt]\nf'''(x) &= 54(3x - 7)^{-3} + 54(3x + 7)^{-3} \\\\\n&= \\frac{54}{(3x-7)^3} + \\frac{54}{(3x+7)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch4_40",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\arctan(3x)$.",
    "answer": "\\frac{54(27x^2 - 1)}{(1 + 9x^2)^3}",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{3}{1 + (3x)^2} = 3(1 + 9x^2)^{-1} \\\\[10pt]\nf''(x) &= -3(1 + 9x^2)^{-2} (\\frac{d}{dx}(1 + 9x^2)) \\\\\n&= -3(1 + 9x^2)^{-2} (18x) = -54x(1 + 9x^2)^{-2} \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(-54x)(1 + 9x^2)^{-2} + (-54x)\\frac{d}{dx}((1 + 9x^2)^{-2}) \\\\\n&= -54(1 + 9x^2)^{-2} + (-54x)(-2)(1 + 9x^2)^{-3}(18x) \\\\\n&= \\frac{-54}{(1 + 9x^2)^2} + \\frac{1944x^2}{(1 + 9x^2)^3} \\\\\n&= \\frac{-54(1 + 9x^2) + 1944x^2}{(1 + 9x^2)^3} \\\\\n&= \\frac{-54 - 486x^2 + 1944x^2}{(1 + 9x^2)^3} \\\\\n&= \\frac{-54 + 1458x^2}{(1 + 9x^2)^3} \\\\\n&= \\frac{54(27x^2 - 1)}{(1 + 9x^2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch5_40",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fourth derivative $f^{(4)}(x)$ of $f(x) = \\frac{4}{\\sqrt{5x + 1}}$.",
    "answer": "\\frac{262500}{16(5x + 1)^{9/2}}",
    "steps": "\\begin{aligned}\nf(x) &= 4(5x + 1)^{-1/2} \\\\[10pt]\nf'(x) &= 4 \\left(-\\frac{1}{2}\\right)(5x + 1)^{-3/2}(5) = -\\frac{20}{2}(5x + 1)^{-3/2} \\\\[10pt]\nf''(x) &= -\\frac{20}{2} \\left(-\\frac{3}{2}\\right)(5x + 1)^{-5/2}(5) = \\frac{300}{4}(5x + 1)^{-5/2} \\\\[10pt]\nf'''(x) &= \\frac{300}{4} \\left(-\\frac{5}{2}\\right)(5x + 1)^{-7/2}(5) = -\\frac{7500}{8}(5x + 1)^{-7/2} \\\\[10pt]\nf^{(4)}(x) &= -\\frac{7500}{8} \\left(-\\frac{7}{2}\\right)(5x + 1)^{-9/2}(5) = \\frac{262500}{16}(5x + 1)^{-9/2} \\\\\n&= \\frac{262500}{16(5x + 1)^{9/2}} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch6_40",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fifth derivative $f^{(5)}(x)$ of $f(x) = 7x^3 \\ln(3x)$.",
    "answer": "-\\frac{42}{x^2}",
    "steps": "\\begin{aligned}\nf'(x) &= 7 \\left[ 3x^2 \\ln(3x) + x^3 \\left(\\frac{1}{x}\\right) \\right] = 7(3x^2 \\ln(3x) + x^2) \\\\[10pt]\nf''(x) &= 7 \\left[ 6x \\ln(3x) + 3x^2 \\left(\\frac{1}{x}\\right) + 2x \\right] = 7(6x \\ln(3x) + 5x) \\\\[10pt]\nf'''(x) &= 7 \\left[ 6\\ln(3x) + 6x \\left(\\frac{1}{x}\\right) + 5 \\right] = 7(6\\ln(3x) + 11) \\\\[10pt]\nf^{(4)}(x) &= 7 \\left[ 6 \\left(\\frac{1}{x}\\right) + 0 \\right] = \\frac{42}{x} = 42x^{-1} \\\\[10pt]\nf^{(5)}(x) &= -42x^{-2} = -\\frac{42}{x^2} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch1_41",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = x^2 e^{6x}$.",
    "answer": "e^{6x}(216x^2 + 216x + 36)",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{d}{dx}(x^2)e^{6x} + x^2\\frac{d}{dx}(e^{6x}) \\\\\n&= 2x e^{6x} + 6x^2 e^{6x} = e^{6x}(6x^2 + 2x) \\\\[10pt]\nf''(x) &= \\frac{d}{dx}(e^{6x})(6x^2 + 2x) + e^{6x}\\frac{d}{dx}(6x^2 + 2x) \\\\\n&= 6e^{6x}(6x^2 + 2x) + e^{6x}(12x + 2) \\\\\n&= e^{6x}(36x^2 + 12x + 12x + 2) = e^{6x}(36x^2 + 24x + 2) \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(e^{6x})(36x^2 + 24x + 2) + e^{6x}\\frac{d}{dx}(36x^2 + 24x + 2) \\\\\n&= 6e^{6x}(36x^2 + 24x + 2) + e^{6x}(72x + 24) \\\\\n&= e^{6x}(216x^2 + 144x + 12 + 72x + 24) \\\\\n&= e^{6x}(216x^2 + 216x + 36) \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch2_41",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = e^{2x} \\sin(3x)$.",
    "answer": "e^{2x} \\left[ -46\\sin(3x) + 9\\cos(3x) \\right]",
    "steps": "\\begin{aligned}\nf'(x) &= e^{2x}(2\\sin(3x)) + e^{2x}(3\\cos(3x)) \\\\\n&= e^{2x}(2\\sin(3x) + 3\\cos(3x)) \\\\[10pt]\nf''(x) &= 2e^{2x}(2\\sin(3x) + 3\\cos(3x)) + e^{2x}(6\\cos(3x) - 9\\sin(3x)) \\\\\n&= e^{2x} \\left[ (4 - 9)\\sin(3x) + (6 + 6)\\cos(3x) \\right] \\\\\n&= e^{2x} \\left[ -5\\sin(3x) + 12\\cos(3x) \\right] \\\\[10pt]\nf'''(x) &= 2e^{2x} \\left[ -5\\sin(3x) + 12\\cos(3x) \\right] + e^{2x} \\left[ -15\\cos(3x) - 36\\sin(3x) \\right] \\\\\n&= e^{2x} \\left[ (-10 - 36)\\sin(3x) + (24 + -15)\\cos(3x) \\right] \\\\\n&= e^{2x} \\left[ (-46)\\sin(3x) + (9)\\cos(3x) \\right] \\\\\n&= e^{2x} \\left[ -46\\sin(3x) + 9\\cos(3x) \\right] \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch3_41",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\ln(25x^2 - 4)$ for $x > \\frac{2}{5}$. \\\\ \\textit{Hint: Factor the argument first.}",
    "answer": "\\frac{250}{(5x-2)^3} + \\frac{250}{(5x+2)^3}",
    "steps": "\\begin{aligned}\nf(x) &= \\ln((5x - 2)(5x + 2)) = \\ln(5x - 2) + \\ln(5x + 2) \\\\[10pt]\nf'(x) &= \\frac{5}{5x - 2} + \\frac{5}{5x + 2} \\\\\n&= 5(5x - 2)^{-1} + 5(5x + 2)^{-1} \\\\[10pt]\nf''(x) &= -25(5x - 2)^{-2} - 25(5x + 2)^{-2} \\\\[10pt]\nf'''(x) &= 250(5x - 2)^{-3} + 250(5x + 2)^{-3} \\\\\n&= \\frac{250}{(5x-2)^3} + \\frac{250}{(5x+2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch4_41",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\arctan(4x)$.",
    "answer": "\\frac{128(48x^2 - 1)}{(1 + 16x^2)^3}",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{4}{1 + (4x)^2} = 4(1 + 16x^2)^{-1} \\\\[10pt]\nf''(x) &= -4(1 + 16x^2)^{-2} (\\frac{d}{dx}(1 + 16x^2)) \\\\\n&= -4(1 + 16x^2)^{-2} (32x) = -128x(1 + 16x^2)^{-2} \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(-128x)(1 + 16x^2)^{-2} + (-128x)\\frac{d}{dx}((1 + 16x^2)^{-2}) \\\\\n&= -128(1 + 16x^2)^{-2} + (-128x)(-2)(1 + 16x^2)^{-3}(32x) \\\\\n&= \\frac{-128}{(1 + 16x^2)^2} + \\frac{8192x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{-128(1 + 16x^2) + 8192x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{-128 - 2048x^2 + 8192x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{-128 + 6144x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{128(48x^2 - 1)}{(1 + 16x^2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch5_41",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fourth derivative $f^{(4)}(x)$ of $f(x) = \\frac{16}{\\sqrt{2x + 1}}$.",
    "answer": "\\frac{26880}{16(2x + 1)^{9/2}}",
    "steps": "\\begin{aligned}\nf(x) &= 16(2x + 1)^{-1/2} \\\\[10pt]\nf'(x) &= 16 \\left(-\\frac{1}{2}\\right)(2x + 1)^{-3/2}(2) = -\\frac{32}{2}(2x + 1)^{-3/2} \\\\[10pt]\nf''(x) &= -\\frac{32}{2} \\left(-\\frac{3}{2}\\right)(2x + 1)^{-5/2}(2) = \\frac{192}{4}(2x + 1)^{-5/2} \\\\[10pt]\nf'''(x) &= \\frac{192}{4} \\left(-\\frac{5}{2}\\right)(2x + 1)^{-7/2}(2) = -\\frac{1920}{8}(2x + 1)^{-7/2} \\\\[10pt]\nf^{(4)}(x) &= -\\frac{1920}{8} \\left(-\\frac{7}{2}\\right)(2x + 1)^{-9/2}(2) = \\frac{26880}{16}(2x + 1)^{-9/2} \\\\\n&= \\frac{26880}{16(2x + 1)^{9/2}} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch6_41",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fifth derivative $f^{(5)}(x)$ of $f(x) = 4x^3 \\ln(4x)$.",
    "answer": "-\\frac{24}{x^2}",
    "steps": "\\begin{aligned}\nf'(x) &= 4 \\left[ 3x^2 \\ln(4x) + x^3 \\left(\\frac{1}{x}\\right) \\right] = 4(3x^2 \\ln(4x) + x^2) \\\\[10pt]\nf''(x) &= 4 \\left[ 6x \\ln(4x) + 3x^2 \\left(\\frac{1}{x}\\right) + 2x \\right] = 4(6x \\ln(4x) + 5x) \\\\[10pt]\nf'''(x) &= 4 \\left[ 6\\ln(4x) + 6x \\left(\\frac{1}{x}\\right) + 5 \\right] = 4(6\\ln(4x) + 11) \\\\[10pt]\nf^{(4)}(x) &= 4 \\left[ 6 \\left(\\frac{1}{x}\\right) + 0 \\right] = \\frac{24}{x} = 24x^{-1} \\\\[10pt]\nf^{(5)}(x) &= -24x^{-2} = -\\frac{24}{x^2} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch1_42",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = x^2 e^{6x}$.",
    "answer": "e^{6x}(216x^2 + 216x + 36)",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{d}{dx}(x^2)e^{6x} + x^2\\frac{d}{dx}(e^{6x}) \\\\\n&= 2x e^{6x} + 6x^2 e^{6x} = e^{6x}(6x^2 + 2x) \\\\[10pt]\nf''(x) &= \\frac{d}{dx}(e^{6x})(6x^2 + 2x) + e^{6x}\\frac{d}{dx}(6x^2 + 2x) \\\\\n&= 6e^{6x}(6x^2 + 2x) + e^{6x}(12x + 2) \\\\\n&= e^{6x}(36x^2 + 12x + 12x + 2) = e^{6x}(36x^2 + 24x + 2) \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(e^{6x})(36x^2 + 24x + 2) + e^{6x}\\frac{d}{dx}(36x^2 + 24x + 2) \\\\\n&= 6e^{6x}(36x^2 + 24x + 2) + e^{6x}(72x + 24) \\\\\n&= e^{6x}(216x^2 + 144x + 12 + 72x + 24) \\\\\n&= e^{6x}(216x^2 + 216x + 36) \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch2_42",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = e^{4x} \\sin(3x)$.",
    "answer": "e^{4x} \\left[ -44\\sin(3x) + 117\\cos(3x) \\right]",
    "steps": "\\begin{aligned}\nf'(x) &= e^{4x}(4\\sin(3x)) + e^{4x}(3\\cos(3x)) \\\\\n&= e^{4x}(4\\sin(3x) + 3\\cos(3x)) \\\\[10pt]\nf''(x) &= 4e^{4x}(4\\sin(3x) + 3\\cos(3x)) + e^{4x}(12\\cos(3x) - 9\\sin(3x)) \\\\\n&= e^{4x} \\left[ (16 - 9)\\sin(3x) + (12 + 12)\\cos(3x) \\right] \\\\\n&= e^{4x} \\left[ 7\\sin(3x) + 24\\cos(3x) \\right] \\\\[10pt]\nf'''(x) &= 4e^{4x} \\left[ 7\\sin(3x) + 24\\cos(3x) \\right] + e^{4x} \\left[ 21\\cos(3x) - 72\\sin(3x) \\right] \\\\\n&= e^{4x} \\left[ (28 - 72)\\sin(3x) + (96 + 21)\\cos(3x) \\right] \\\\\n&= e^{4x} \\left[ (-44)\\sin(3x) + (117)\\cos(3x) \\right] \\\\\n&= e^{4x} \\left[ -44\\sin(3x) + 117\\cos(3x) \\right] \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch3_42",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\ln(4x^2 - 49)$ for $x > \\frac{7}{2}$. \\\\ \\textit{Hint: Factor the argument first.}",
    "answer": "\\frac{16}{(2x-7)^3} + \\frac{16}{(2x+7)^3}",
    "steps": "\\begin{aligned}\nf(x) &= \\ln((2x - 7)(2x + 7)) = \\ln(2x - 7) + \\ln(2x + 7) \\\\[10pt]\nf'(x) &= \\frac{2}{2x - 7} + \\frac{2}{2x + 7} \\\\\n&= 2(2x - 7)^{-1} + 2(2x + 7)^{-1} \\\\[10pt]\nf''(x) &= -4(2x - 7)^{-2} - 4(2x + 7)^{-2} \\\\[10pt]\nf'''(x) &= 16(2x - 7)^{-3} + 16(2x + 7)^{-3} \\\\\n&= \\frac{16}{(2x-7)^3} + \\frac{16}{(2x+7)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch4_42",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\arctan(2x)$.",
    "answer": "\\frac{16(12x^2 - 1)}{(1 + 4x^2)^3}",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{2}{1 + (2x)^2} = 2(1 + 4x^2)^{-1} \\\\[10pt]\nf''(x) &= -2(1 + 4x^2)^{-2} (\\frac{d}{dx}(1 + 4x^2)) \\\\\n&= -2(1 + 4x^2)^{-2} (8x) = -16x(1 + 4x^2)^{-2} \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(-16x)(1 + 4x^2)^{-2} + (-16x)\\frac{d}{dx}((1 + 4x^2)^{-2}) \\\\\n&= -16(1 + 4x^2)^{-2} + (-16x)(-2)(1 + 4x^2)^{-3}(8x) \\\\\n&= \\frac{-16}{(1 + 4x^2)^2} + \\frac{256x^2}{(1 + 4x^2)^3} \\\\\n&= \\frac{-16(1 + 4x^2) + 256x^2}{(1 + 4x^2)^3} \\\\\n&= \\frac{-16 - 64x^2 + 256x^2}{(1 + 4x^2)^3} \\\\\n&= \\frac{-16 + 192x^2}{(1 + 4x^2)^3} \\\\\n&= \\frac{16(12x^2 - 1)}{(1 + 4x^2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch5_42",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fourth derivative $f^{(4)}(x)$ of $f(x) = \\frac{2}{\\sqrt{5x + 1}}$.",
    "answer": "\\frac{131250}{16(5x + 1)^{9/2}}",
    "steps": "\\begin{aligned}\nf(x) &= 2(5x + 1)^{-1/2} \\\\[10pt]\nf'(x) &= 2 \\left(-\\frac{1}{2}\\right)(5x + 1)^{-3/2}(5) = -\\frac{10}{2}(5x + 1)^{-3/2} \\\\[10pt]\nf''(x) &= -\\frac{10}{2} \\left(-\\frac{3}{2}\\right)(5x + 1)^{-5/2}(5) = \\frac{150}{4}(5x + 1)^{-5/2} \\\\[10pt]\nf'''(x) &= \\frac{150}{4} \\left(-\\frac{5}{2}\\right)(5x + 1)^{-7/2}(5) = -\\frac{3750}{8}(5x + 1)^{-7/2} \\\\[10pt]\nf^{(4)}(x) &= -\\frac{3750}{8} \\left(-\\frac{7}{2}\\right)(5x + 1)^{-9/2}(5) = \\frac{131250}{16}(5x + 1)^{-9/2} \\\\\n&= \\frac{131250}{16(5x + 1)^{9/2}} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch6_42",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fifth derivative $f^{(5)}(x)$ of $f(x) = 7x^3 \\ln(2x)$.",
    "answer": "-\\frac{42}{x^2}",
    "steps": "\\begin{aligned}\nf'(x) &= 7 \\left[ 3x^2 \\ln(2x) + x^3 \\left(\\frac{1}{x}\\right) \\right] = 7(3x^2 \\ln(2x) + x^2) \\\\[10pt]\nf''(x) &= 7 \\left[ 6x \\ln(2x) + 3x^2 \\left(\\frac{1}{x}\\right) + 2x \\right] = 7(6x \\ln(2x) + 5x) \\\\[10pt]\nf'''(x) &= 7 \\left[ 6\\ln(2x) + 6x \\left(\\frac{1}{x}\\right) + 5 \\right] = 7(6\\ln(2x) + 11) \\\\[10pt]\nf^{(4)}(x) &= 7 \\left[ 6 \\left(\\frac{1}{x}\\right) + 0 \\right] = \\frac{42}{x} = 42x^{-1} \\\\[10pt]\nf^{(5)}(x) &= -42x^{-2} = -\\frac{42}{x^2} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch1_43",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = x^2 e^{4x}$.",
    "answer": "e^{4x}(64x^2 + 96x + 24)",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{d}{dx}(x^2)e^{4x} + x^2\\frac{d}{dx}(e^{4x}) \\\\\n&= 2x e^{4x} + 4x^2 e^{4x} = e^{4x}(4x^2 + 2x) \\\\[10pt]\nf''(x) &= \\frac{d}{dx}(e^{4x})(4x^2 + 2x) + e^{4x}\\frac{d}{dx}(4x^2 + 2x) \\\\\n&= 4e^{4x}(4x^2 + 2x) + e^{4x}(8x + 2) \\\\\n&= e^{4x}(16x^2 + 8x + 8x + 2) = e^{4x}(16x^2 + 16x + 2) \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(e^{4x})(16x^2 + 16x + 2) + e^{4x}\\frac{d}{dx}(16x^2 + 16x + 2) \\\\\n&= 4e^{4x}(16x^2 + 16x + 2) + e^{4x}(32x + 16) \\\\\n&= e^{4x}(64x^2 + 64x + 8 + 32x + 16) \\\\\n&= e^{4x}(64x^2 + 96x + 24) \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch2_43",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = e^{2x} \\sin(3x)$.",
    "answer": "e^{2x} \\left[ -46\\sin(3x) + 9\\cos(3x) \\right]",
    "steps": "\\begin{aligned}\nf'(x) &= e^{2x}(2\\sin(3x)) + e^{2x}(3\\cos(3x)) \\\\\n&= e^{2x}(2\\sin(3x) + 3\\cos(3x)) \\\\[10pt]\nf''(x) &= 2e^{2x}(2\\sin(3x) + 3\\cos(3x)) + e^{2x}(6\\cos(3x) - 9\\sin(3x)) \\\\\n&= e^{2x} \\left[ (4 - 9)\\sin(3x) + (6 + 6)\\cos(3x) \\right] \\\\\n&= e^{2x} \\left[ -5\\sin(3x) + 12\\cos(3x) \\right] \\\\[10pt]\nf'''(x) &= 2e^{2x} \\left[ -5\\sin(3x) + 12\\cos(3x) \\right] + e^{2x} \\left[ -15\\cos(3x) - 36\\sin(3x) \\right] \\\\\n&= e^{2x} \\left[ (-10 - 36)\\sin(3x) + (24 + -15)\\cos(3x) \\right] \\\\\n&= e^{2x} \\left[ (-46)\\sin(3x) + (9)\\cos(3x) \\right] \\\\\n&= e^{2x} \\left[ -46\\sin(3x) + 9\\cos(3x) \\right] \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch3_43",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\ln(16x^2 - 25)$ for $x > \\frac{5}{4}$. \\\\ \\textit{Hint: Factor the argument first.}",
    "answer": "\\frac{128}{(4x-5)^3} + \\frac{128}{(4x+5)^3}",
    "steps": "\\begin{aligned}\nf(x) &= \\ln((4x - 5)(4x + 5)) = \\ln(4x - 5) + \\ln(4x + 5) \\\\[10pt]\nf'(x) &= \\frac{4}{4x - 5} + \\frac{4}{4x + 5} \\\\\n&= 4(4x - 5)^{-1} + 4(4x + 5)^{-1} \\\\[10pt]\nf''(x) &= -16(4x - 5)^{-2} - 16(4x + 5)^{-2} \\\\[10pt]\nf'''(x) &= 128(4x - 5)^{-3} + 128(4x + 5)^{-3} \\\\\n&= \\frac{128}{(4x-5)^3} + \\frac{128}{(4x+5)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch4_43",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\arctan(3x)$.",
    "answer": "\\frac{54(27x^2 - 1)}{(1 + 9x^2)^3}",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{3}{1 + (3x)^2} = 3(1 + 9x^2)^{-1} \\\\[10pt]\nf''(x) &= -3(1 + 9x^2)^{-2} (\\frac{d}{dx}(1 + 9x^2)) \\\\\n&= -3(1 + 9x^2)^{-2} (18x) = -54x(1 + 9x^2)^{-2} \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(-54x)(1 + 9x^2)^{-2} + (-54x)\\frac{d}{dx}((1 + 9x^2)^{-2}) \\\\\n&= -54(1 + 9x^2)^{-2} + (-54x)(-2)(1 + 9x^2)^{-3}(18x) \\\\\n&= \\frac{-54}{(1 + 9x^2)^2} + \\frac{1944x^2}{(1 + 9x^2)^3} \\\\\n&= \\frac{-54(1 + 9x^2) + 1944x^2}{(1 + 9x^2)^3} \\\\\n&= \\frac{-54 - 486x^2 + 1944x^2}{(1 + 9x^2)^3} \\\\\n&= \\frac{-54 + 1458x^2}{(1 + 9x^2)^3} \\\\\n&= \\frac{54(27x^2 - 1)}{(1 + 9x^2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch5_43",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fourth derivative $f^{(4)}(x)$ of $f(x) = \\frac{4}{\\sqrt{5x + 1}}$.",
    "answer": "\\frac{262500}{16(5x + 1)^{9/2}}",
    "steps": "\\begin{aligned}\nf(x) &= 4(5x + 1)^{-1/2} \\\\[10pt]\nf'(x) &= 4 \\left(-\\frac{1}{2}\\right)(5x + 1)^{-3/2}(5) = -\\frac{20}{2}(5x + 1)^{-3/2} \\\\[10pt]\nf''(x) &= -\\frac{20}{2} \\left(-\\frac{3}{2}\\right)(5x + 1)^{-5/2}(5) = \\frac{300}{4}(5x + 1)^{-5/2} \\\\[10pt]\nf'''(x) &= \\frac{300}{4} \\left(-\\frac{5}{2}\\right)(5x + 1)^{-7/2}(5) = -\\frac{7500}{8}(5x + 1)^{-7/2} \\\\[10pt]\nf^{(4)}(x) &= -\\frac{7500}{8} \\left(-\\frac{7}{2}\\right)(5x + 1)^{-9/2}(5) = \\frac{262500}{16}(5x + 1)^{-9/2} \\\\\n&= \\frac{262500}{16(5x + 1)^{9/2}} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch6_43",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fifth derivative $f^{(5)}(x)$ of $f(x) = 4x^3 \\ln(5x)$.",
    "answer": "-\\frac{24}{x^2}",
    "steps": "\\begin{aligned}\nf'(x) &= 4 \\left[ 3x^2 \\ln(5x) + x^3 \\left(\\frac{1}{x}\\right) \\right] = 4(3x^2 \\ln(5x) + x^2) \\\\[10pt]\nf''(x) &= 4 \\left[ 6x \\ln(5x) + 3x^2 \\left(\\frac{1}{x}\\right) + 2x \\right] = 4(6x \\ln(5x) + 5x) \\\\[10pt]\nf'''(x) &= 4 \\left[ 6\\ln(5x) + 6x \\left(\\frac{1}{x}\\right) + 5 \\right] = 4(6\\ln(5x) + 11) \\\\[10pt]\nf^{(4)}(x) &= 4 \\left[ 6 \\left(\\frac{1}{x}\\right) + 0 \\right] = \\frac{24}{x} = 24x^{-1} \\\\[10pt]\nf^{(5)}(x) &= -24x^{-2} = -\\frac{24}{x^2} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch1_44",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = x^2 e^{6x}$.",
    "answer": "e^{6x}(216x^2 + 216x + 36)",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{d}{dx}(x^2)e^{6x} + x^2\\frac{d}{dx}(e^{6x}) \\\\\n&= 2x e^{6x} + 6x^2 e^{6x} = e^{6x}(6x^2 + 2x) \\\\[10pt]\nf''(x) &= \\frac{d}{dx}(e^{6x})(6x^2 + 2x) + e^{6x}\\frac{d}{dx}(6x^2 + 2x) \\\\\n&= 6e^{6x}(6x^2 + 2x) + e^{6x}(12x + 2) \\\\\n&= e^{6x}(36x^2 + 12x + 12x + 2) = e^{6x}(36x^2 + 24x + 2) \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(e^{6x})(36x^2 + 24x + 2) + e^{6x}\\frac{d}{dx}(36x^2 + 24x + 2) \\\\\n&= 6e^{6x}(36x^2 + 24x + 2) + e^{6x}(72x + 24) \\\\\n&= e^{6x}(216x^2 + 144x + 12 + 72x + 24) \\\\\n&= e^{6x}(216x^2 + 216x + 36) \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch2_44",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = e^{2x} \\sin(3x)$.",
    "answer": "e^{2x} \\left[ -46\\sin(3x) + 9\\cos(3x) \\right]",
    "steps": "\\begin{aligned}\nf'(x) &= e^{2x}(2\\sin(3x)) + e^{2x}(3\\cos(3x)) \\\\\n&= e^{2x}(2\\sin(3x) + 3\\cos(3x)) \\\\[10pt]\nf''(x) &= 2e^{2x}(2\\sin(3x) + 3\\cos(3x)) + e^{2x}(6\\cos(3x) - 9\\sin(3x)) \\\\\n&= e^{2x} \\left[ (4 - 9)\\sin(3x) + (6 + 6)\\cos(3x) \\right] \\\\\n&= e^{2x} \\left[ -5\\sin(3x) + 12\\cos(3x) \\right] \\\\[10pt]\nf'''(x) &= 2e^{2x} \\left[ -5\\sin(3x) + 12\\cos(3x) \\right] + e^{2x} \\left[ -15\\cos(3x) - 36\\sin(3x) \\right] \\\\\n&= e^{2x} \\left[ (-10 - 36)\\sin(3x) + (24 + -15)\\cos(3x) \\right] \\\\\n&= e^{2x} \\left[ (-46)\\sin(3x) + (9)\\cos(3x) \\right] \\\\\n&= e^{2x} \\left[ -46\\sin(3x) + 9\\cos(3x) \\right] \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch3_44",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\ln(4x^2 - 25)$ for $x > \\frac{5}{2}$. \\\\ \\textit{Hint: Factor the argument first.}",
    "answer": "\\frac{16}{(2x-5)^3} + \\frac{16}{(2x+5)^3}",
    "steps": "\\begin{aligned}\nf(x) &= \\ln((2x - 5)(2x + 5)) = \\ln(2x - 5) + \\ln(2x + 5) \\\\[10pt]\nf'(x) &= \\frac{2}{2x - 5} + \\frac{2}{2x + 5} \\\\\n&= 2(2x - 5)^{-1} + 2(2x + 5)^{-1} \\\\[10pt]\nf''(x) &= -4(2x - 5)^{-2} - 4(2x + 5)^{-2} \\\\[10pt]\nf'''(x) &= 16(2x - 5)^{-3} + 16(2x + 5)^{-3} \\\\\n&= \\frac{16}{(2x-5)^3} + \\frac{16}{(2x+5)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch4_44",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\arctan(2x)$.",
    "answer": "\\frac{16(12x^2 - 1)}{(1 + 4x^2)^3}",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{2}{1 + (2x)^2} = 2(1 + 4x^2)^{-1} \\\\[10pt]\nf''(x) &= -2(1 + 4x^2)^{-2} (\\frac{d}{dx}(1 + 4x^2)) \\\\\n&= -2(1 + 4x^2)^{-2} (8x) = -16x(1 + 4x^2)^{-2} \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(-16x)(1 + 4x^2)^{-2} + (-16x)\\frac{d}{dx}((1 + 4x^2)^{-2}) \\\\\n&= -16(1 + 4x^2)^{-2} + (-16x)(-2)(1 + 4x^2)^{-3}(8x) \\\\\n&= \\frac{-16}{(1 + 4x^2)^2} + \\frac{256x^2}{(1 + 4x^2)^3} \\\\\n&= \\frac{-16(1 + 4x^2) + 256x^2}{(1 + 4x^2)^3} \\\\\n&= \\frac{-16 - 64x^2 + 256x^2}{(1 + 4x^2)^3} \\\\\n&= \\frac{-16 + 192x^2}{(1 + 4x^2)^3} \\\\\n&= \\frac{16(12x^2 - 1)}{(1 + 4x^2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch5_44",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fourth derivative $f^{(4)}(x)$ of $f(x) = \\frac{16}{\\sqrt{2x + 1}}$.",
    "answer": "\\frac{26880}{16(2x + 1)^{9/2}}",
    "steps": "\\begin{aligned}\nf(x) &= 16(2x + 1)^{-1/2} \\\\[10pt]\nf'(x) &= 16 \\left(-\\frac{1}{2}\\right)(2x + 1)^{-3/2}(2) = -\\frac{32}{2}(2x + 1)^{-3/2} \\\\[10pt]\nf''(x) &= -\\frac{32}{2} \\left(-\\frac{3}{2}\\right)(2x + 1)^{-5/2}(2) = \\frac{192}{4}(2x + 1)^{-5/2} \\\\[10pt]\nf'''(x) &= \\frac{192}{4} \\left(-\\frac{5}{2}\\right)(2x + 1)^{-7/2}(2) = -\\frac{1920}{8}(2x + 1)^{-7/2} \\\\[10pt]\nf^{(4)}(x) &= -\\frac{1920}{8} \\left(-\\frac{7}{2}\\right)(2x + 1)^{-9/2}(2) = \\frac{26880}{16}(2x + 1)^{-9/2} \\\\\n&= \\frac{26880}{16(2x + 1)^{9/2}} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch6_44",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fifth derivative $f^{(5)}(x)$ of $f(x) = 3x^3 \\ln(2x)$.",
    "answer": "-\\frac{18}{x^2}",
    "steps": "\\begin{aligned}\nf'(x) &= 3 \\left[ 3x^2 \\ln(2x) + x^3 \\left(\\frac{1}{x}\\right) \\right] = 3(3x^2 \\ln(2x) + x^2) \\\\[10pt]\nf''(x) &= 3 \\left[ 6x \\ln(2x) + 3x^2 \\left(\\frac{1}{x}\\right) + 2x \\right] = 3(6x \\ln(2x) + 5x) \\\\[10pt]\nf'''(x) &= 3 \\left[ 6\\ln(2x) + 6x \\left(\\frac{1}{x}\\right) + 5 \\right] = 3(6\\ln(2x) + 11) \\\\[10pt]\nf^{(4)}(x) &= 3 \\left[ 6 \\left(\\frac{1}{x}\\right) + 0 \\right] = \\frac{18}{x} = 18x^{-1} \\\\[10pt]\nf^{(5)}(x) &= -18x^{-2} = -\\frac{18}{x^2} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch1_45",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = x^2 e^{6x}$.",
    "answer": "e^{6x}(216x^2 + 216x + 36)",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{d}{dx}(x^2)e^{6x} + x^2\\frac{d}{dx}(e^{6x}) \\\\\n&= 2x e^{6x} + 6x^2 e^{6x} = e^{6x}(6x^2 + 2x) \\\\[10pt]\nf''(x) &= \\frac{d}{dx}(e^{6x})(6x^2 + 2x) + e^{6x}\\frac{d}{dx}(6x^2 + 2x) \\\\\n&= 6e^{6x}(6x^2 + 2x) + e^{6x}(12x + 2) \\\\\n&= e^{6x}(36x^2 + 12x + 12x + 2) = e^{6x}(36x^2 + 24x + 2) \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(e^{6x})(36x^2 + 24x + 2) + e^{6x}\\frac{d}{dx}(36x^2 + 24x + 2) \\\\\n&= 6e^{6x}(36x^2 + 24x + 2) + e^{6x}(72x + 24) \\\\\n&= e^{6x}(216x^2 + 144x + 12 + 72x + 24) \\\\\n&= e^{6x}(216x^2 + 216x + 36) \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch2_45",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = e^{2x} \\sin(4x)$.",
    "answer": "e^{2x} \\left[ -88\\sin(4x) - 16\\cos(4x) \\right]",
    "steps": "\\begin{aligned}\nf'(x) &= e^{2x}(2\\sin(4x)) + e^{2x}(4\\cos(4x)) \\\\\n&= e^{2x}(2\\sin(4x) + 4\\cos(4x)) \\\\[10pt]\nf''(x) &= 2e^{2x}(2\\sin(4x) + 4\\cos(4x)) + e^{2x}(8\\cos(4x) - 16\\sin(4x)) \\\\\n&= e^{2x} \\left[ (4 - 16)\\sin(4x) + (8 + 8)\\cos(4x) \\right] \\\\\n&= e^{2x} \\left[ -12\\sin(4x) + 16\\cos(4x) \\right] \\\\[10pt]\nf'''(x) &= 2e^{2x} \\left[ -12\\sin(4x) + 16\\cos(4x) \\right] + e^{2x} \\left[ -48\\cos(4x) - 64\\sin(4x) \\right] \\\\\n&= e^{2x} \\left[ (-24 - 64)\\sin(4x) + (32 + -48)\\cos(4x) \\right] \\\\\n&= e^{2x} \\left[ (-88)\\sin(4x) + (-16)\\cos(4x) \\right] \\\\\n&= e^{2x} \\left[ -88\\sin(4x) - 16\\cos(4x) \\right] \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch3_45",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\ln(25x^2 - 9)$ for $x > \\frac{3}{5}$. \\\\ \\textit{Hint: Factor the argument first.}",
    "answer": "\\frac{250}{(5x-3)^3} + \\frac{250}{(5x+3)^3}",
    "steps": "\\begin{aligned}\nf(x) &= \\ln((5x - 3)(5x + 3)) = \\ln(5x - 3) + \\ln(5x + 3) \\\\[10pt]\nf'(x) &= \\frac{5}{5x - 3} + \\frac{5}{5x + 3} \\\\\n&= 5(5x - 3)^{-1} + 5(5x + 3)^{-1} \\\\[10pt]\nf''(x) &= -25(5x - 3)^{-2} - 25(5x + 3)^{-2} \\\\[10pt]\nf'''(x) &= 250(5x - 3)^{-3} + 250(5x + 3)^{-3} \\\\\n&= \\frac{250}{(5x-3)^3} + \\frac{250}{(5x+3)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch4_45",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\arctan(5x)$.",
    "answer": "\\frac{250(75x^2 - 1)}{(1 + 25x^2)^3}",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{5}{1 + (5x)^2} = 5(1 + 25x^2)^{-1} \\\\[10pt]\nf''(x) &= -5(1 + 25x^2)^{-2} (\\frac{d}{dx}(1 + 25x^2)) \\\\\n&= -5(1 + 25x^2)^{-2} (50x) = -250x(1 + 25x^2)^{-2} \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(-250x)(1 + 25x^2)^{-2} + (-250x)\\frac{d}{dx}((1 + 25x^2)^{-2}) \\\\\n&= -250(1 + 25x^2)^{-2} + (-250x)(-2)(1 + 25x^2)^{-3}(50x) \\\\\n&= \\frac{-250}{(1 + 25x^2)^2} + \\frac{25000x^2}{(1 + 25x^2)^3} \\\\\n&= \\frac{-250(1 + 25x^2) + 25000x^2}{(1 + 25x^2)^3} \\\\\n&= \\frac{-250 - 6250x^2 + 25000x^2}{(1 + 25x^2)^3} \\\\\n&= \\frac{-250 + 18750x^2}{(1 + 25x^2)^3} \\\\\n&= \\frac{250(75x^2 - 1)}{(1 + 25x^2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch5_45",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fourth derivative $f^{(4)}(x)$ of $f(x) = \\frac{4}{\\sqrt{3x + 1}}$.",
    "answer": "\\frac{34020}{16(3x + 1)^{9/2}}",
    "steps": "\\begin{aligned}\nf(x) &= 4(3x + 1)^{-1/2} \\\\[10pt]\nf'(x) &= 4 \\left(-\\frac{1}{2}\\right)(3x + 1)^{-3/2}(3) = -\\frac{12}{2}(3x + 1)^{-3/2} \\\\[10pt]\nf''(x) &= -\\frac{12}{2} \\left(-\\frac{3}{2}\\right)(3x + 1)^{-5/2}(3) = \\frac{108}{4}(3x + 1)^{-5/2} \\\\[10pt]\nf'''(x) &= \\frac{108}{4} \\left(-\\frac{5}{2}\\right)(3x + 1)^{-7/2}(3) = -\\frac{1620}{8}(3x + 1)^{-7/2} \\\\[10pt]\nf^{(4)}(x) &= -\\frac{1620}{8} \\left(-\\frac{7}{2}\\right)(3x + 1)^{-9/2}(3) = \\frac{34020}{16}(3x + 1)^{-9/2} \\\\\n&= \\frac{34020}{16(3x + 1)^{9/2}} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch6_45",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fifth derivative $f^{(5)}(x)$ of $f(x) = 3x^3 \\ln(6x)$.",
    "answer": "-\\frac{18}{x^2}",
    "steps": "\\begin{aligned}\nf'(x) &= 3 \\left[ 3x^2 \\ln(6x) + x^3 \\left(\\frac{1}{x}\\right) \\right] = 3(3x^2 \\ln(6x) + x^2) \\\\[10pt]\nf''(x) &= 3 \\left[ 6x \\ln(6x) + 3x^2 \\left(\\frac{1}{x}\\right) + 2x \\right] = 3(6x \\ln(6x) + 5x) \\\\[10pt]\nf'''(x) &= 3 \\left[ 6\\ln(6x) + 6x \\left(\\frac{1}{x}\\right) + 5 \\right] = 3(6\\ln(6x) + 11) \\\\[10pt]\nf^{(4)}(x) &= 3 \\left[ 6 \\left(\\frac{1}{x}\\right) + 0 \\right] = \\frac{18}{x} = 18x^{-1} \\\\[10pt]\nf^{(5)}(x) &= -18x^{-2} = -\\frac{18}{x^2} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch1_46",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = x^2 e^{6x}$.",
    "answer": "e^{6x}(216x^2 + 216x + 36)",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{d}{dx}(x^2)e^{6x} + x^2\\frac{d}{dx}(e^{6x}) \\\\\n&= 2x e^{6x} + 6x^2 e^{6x} = e^{6x}(6x^2 + 2x) \\\\[10pt]\nf''(x) &= \\frac{d}{dx}(e^{6x})(6x^2 + 2x) + e^{6x}\\frac{d}{dx}(6x^2 + 2x) \\\\\n&= 6e^{6x}(6x^2 + 2x) + e^{6x}(12x + 2) \\\\\n&= e^{6x}(36x^2 + 12x + 12x + 2) = e^{6x}(36x^2 + 24x + 2) \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(e^{6x})(36x^2 + 24x + 2) + e^{6x}\\frac{d}{dx}(36x^2 + 24x + 2) \\\\\n&= 6e^{6x}(36x^2 + 24x + 2) + e^{6x}(72x + 24) \\\\\n&= e^{6x}(216x^2 + 144x + 12 + 72x + 24) \\\\\n&= e^{6x}(216x^2 + 216x + 36) \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch2_46",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = e^{4x} \\sin(5x)$.",
    "answer": "e^{4x} \\left[ -236\\sin(5x) + 115\\cos(5x) \\right]",
    "steps": "\\begin{aligned}\nf'(x) &= e^{4x}(4\\sin(5x)) + e^{4x}(5\\cos(5x)) \\\\\n&= e^{4x}(4\\sin(5x) + 5\\cos(5x)) \\\\[10pt]\nf''(x) &= 4e^{4x}(4\\sin(5x) + 5\\cos(5x)) + e^{4x}(20\\cos(5x) - 25\\sin(5x)) \\\\\n&= e^{4x} \\left[ (16 - 25)\\sin(5x) + (20 + 20)\\cos(5x) \\right] \\\\\n&= e^{4x} \\left[ -9\\sin(5x) + 40\\cos(5x) \\right] \\\\[10pt]\nf'''(x) &= 4e^{4x} \\left[ -9\\sin(5x) + 40\\cos(5x) \\right] + e^{4x} \\left[ -45\\cos(5x) - 200\\sin(5x) \\right] \\\\\n&= e^{4x} \\left[ (-36 - 200)\\sin(5x) + (160 + -45)\\cos(5x) \\right] \\\\\n&= e^{4x} \\left[ (-236)\\sin(5x) + (115)\\cos(5x) \\right] \\\\\n&= e^{4x} \\left[ -236\\sin(5x) + 115\\cos(5x) \\right] \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch3_46",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\ln(4x^2 - 1)$ for $x > \\frac{1}{2}$. \\\\ \\textit{Hint: Factor the argument first.}",
    "answer": "\\frac{16}{(2x-1)^3} + \\frac{16}{(2x+1)^3}",
    "steps": "\\begin{aligned}\nf(x) &= \\ln((2x - 1)(2x + 1)) = \\ln(2x - 1) + \\ln(2x + 1) \\\\[10pt]\nf'(x) &= \\frac{2}{2x - 1} + \\frac{2}{2x + 1} \\\\\n&= 2(2x - 1)^{-1} + 2(2x + 1)^{-1} \\\\[10pt]\nf''(x) &= -4(2x - 1)^{-2} - 4(2x + 1)^{-2} \\\\[10pt]\nf'''(x) &= 16(2x - 1)^{-3} + 16(2x + 1)^{-3} \\\\\n&= \\frac{16}{(2x-1)^3} + \\frac{16}{(2x+1)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch4_46",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\arctan(2x)$.",
    "answer": "\\frac{16(12x^2 - 1)}{(1 + 4x^2)^3}",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{2}{1 + (2x)^2} = 2(1 + 4x^2)^{-1} \\\\[10pt]\nf''(x) &= -2(1 + 4x^2)^{-2} (\\frac{d}{dx}(1 + 4x^2)) \\\\\n&= -2(1 + 4x^2)^{-2} (8x) = -16x(1 + 4x^2)^{-2} \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(-16x)(1 + 4x^2)^{-2} + (-16x)\\frac{d}{dx}((1 + 4x^2)^{-2}) \\\\\n&= -16(1 + 4x^2)^{-2} + (-16x)(-2)(1 + 4x^2)^{-3}(8x) \\\\\n&= \\frac{-16}{(1 + 4x^2)^2} + \\frac{256x^2}{(1 + 4x^2)^3} \\\\\n&= \\frac{-16(1 + 4x^2) + 256x^2}{(1 + 4x^2)^3} \\\\\n&= \\frac{-16 - 64x^2 + 256x^2}{(1 + 4x^2)^3} \\\\\n&= \\frac{-16 + 192x^2}{(1 + 4x^2)^3} \\\\\n&= \\frac{16(12x^2 - 1)}{(1 + 4x^2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch5_46",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fourth derivative $f^{(4)}(x)$ of $f(x) = \\frac{8}{\\sqrt{2x + 1}}$.",
    "answer": "\\frac{13440}{16(2x + 1)^{9/2}}",
    "steps": "\\begin{aligned}\nf(x) &= 8(2x + 1)^{-1/2} \\\\[10pt]\nf'(x) &= 8 \\left(-\\frac{1}{2}\\right)(2x + 1)^{-3/2}(2) = -\\frac{16}{2}(2x + 1)^{-3/2} \\\\[10pt]\nf''(x) &= -\\frac{16}{2} \\left(-\\frac{3}{2}\\right)(2x + 1)^{-5/2}(2) = \\frac{96}{4}(2x + 1)^{-5/2} \\\\[10pt]\nf'''(x) &= \\frac{96}{4} \\left(-\\frac{5}{2}\\right)(2x + 1)^{-7/2}(2) = -\\frac{960}{8}(2x + 1)^{-7/2} \\\\[10pt]\nf^{(4)}(x) &= -\\frac{960}{8} \\left(-\\frac{7}{2}\\right)(2x + 1)^{-9/2}(2) = \\frac{13440}{16}(2x + 1)^{-9/2} \\\\\n&= \\frac{13440}{16(2x + 1)^{9/2}} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch6_46",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fifth derivative $f^{(5)}(x)$ of $f(x) = 4x^3 \\ln(6x)$.",
    "answer": "-\\frac{24}{x^2}",
    "steps": "\\begin{aligned}\nf'(x) &= 4 \\left[ 3x^2 \\ln(6x) + x^3 \\left(\\frac{1}{x}\\right) \\right] = 4(3x^2 \\ln(6x) + x^2) \\\\[10pt]\nf''(x) &= 4 \\left[ 6x \\ln(6x) + 3x^2 \\left(\\frac{1}{x}\\right) + 2x \\right] = 4(6x \\ln(6x) + 5x) \\\\[10pt]\nf'''(x) &= 4 \\left[ 6\\ln(6x) + 6x \\left(\\frac{1}{x}\\right) + 5 \\right] = 4(6\\ln(6x) + 11) \\\\[10pt]\nf^{(4)}(x) &= 4 \\left[ 6 \\left(\\frac{1}{x}\\right) + 0 \\right] = \\frac{24}{x} = 24x^{-1} \\\\[10pt]\nf^{(5)}(x) &= -24x^{-2} = -\\frac{24}{x^2} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch1_47",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = x^2 e^{2x}$.",
    "answer": "e^{2x}(8x^2 + 24x + 12)",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{d}{dx}(x^2)e^{2x} + x^2\\frac{d}{dx}(e^{2x}) \\\\\n&= 2x e^{2x} + 2x^2 e^{2x} = e^{2x}(2x^2 + 2x) \\\\[10pt]\nf''(x) &= \\frac{d}{dx}(e^{2x})(2x^2 + 2x) + e^{2x}\\frac{d}{dx}(2x^2 + 2x) \\\\\n&= 2e^{2x}(2x^2 + 2x) + e^{2x}(4x + 2) \\\\\n&= e^{2x}(4x^2 + 4x + 4x + 2) = e^{2x}(4x^2 + 8x + 2) \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(e^{2x})(4x^2 + 8x + 2) + e^{2x}\\frac{d}{dx}(4x^2 + 8x + 2) \\\\\n&= 2e^{2x}(4x^2 + 8x + 2) + e^{2x}(8x + 8) \\\\\n&= e^{2x}(8x^2 + 16x + 4 + 8x + 8) \\\\\n&= e^{2x}(8x^2 + 24x + 12) \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch2_47",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = e^{3x} \\sin(4x)$.",
    "answer": "e^{3x} \\left[ -117\\sin(4x) + 44\\cos(4x) \\right]",
    "steps": "\\begin{aligned}\nf'(x) &= e^{3x}(3\\sin(4x)) + e^{3x}(4\\cos(4x)) \\\\\n&= e^{3x}(3\\sin(4x) + 4\\cos(4x)) \\\\[10pt]\nf''(x) &= 3e^{3x}(3\\sin(4x) + 4\\cos(4x)) + e^{3x}(12\\cos(4x) - 16\\sin(4x)) \\\\\n&= e^{3x} \\left[ (9 - 16)\\sin(4x) + (12 + 12)\\cos(4x) \\right] \\\\\n&= e^{3x} \\left[ -7\\sin(4x) + 24\\cos(4x) \\right] \\\\[10pt]\nf'''(x) &= 3e^{3x} \\left[ -7\\sin(4x) + 24\\cos(4x) \\right] + e^{3x} \\left[ -28\\cos(4x) - 96\\sin(4x) \\right] \\\\\n&= e^{3x} \\left[ (-21 - 96)\\sin(4x) + (72 + -28)\\cos(4x) \\right] \\\\\n&= e^{3x} \\left[ (-117)\\sin(4x) + (44)\\cos(4x) \\right] \\\\\n&= e^{3x} \\left[ -117\\sin(4x) + 44\\cos(4x) \\right] \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch3_47",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\ln(25x^2 - 4)$ for $x > \\frac{2}{5}$. \\\\ \\textit{Hint: Factor the argument first.}",
    "answer": "\\frac{250}{(5x-2)^3} + \\frac{250}{(5x+2)^3}",
    "steps": "\\begin{aligned}\nf(x) &= \\ln((5x - 2)(5x + 2)) = \\ln(5x - 2) + \\ln(5x + 2) \\\\[10pt]\nf'(x) &= \\frac{5}{5x - 2} + \\frac{5}{5x + 2} \\\\\n&= 5(5x - 2)^{-1} + 5(5x + 2)^{-1} \\\\[10pt]\nf''(x) &= -25(5x - 2)^{-2} - 25(5x + 2)^{-2} \\\\[10pt]\nf'''(x) &= 250(5x - 2)^{-3} + 250(5x + 2)^{-3} \\\\\n&= \\frac{250}{(5x-2)^3} + \\frac{250}{(5x+2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch4_47",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\arctan(3x)$.",
    "answer": "\\frac{54(27x^2 - 1)}{(1 + 9x^2)^3}",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{3}{1 + (3x)^2} = 3(1 + 9x^2)^{-1} \\\\[10pt]\nf''(x) &= -3(1 + 9x^2)^{-2} (\\frac{d}{dx}(1 + 9x^2)) \\\\\n&= -3(1 + 9x^2)^{-2} (18x) = -54x(1 + 9x^2)^{-2} \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(-54x)(1 + 9x^2)^{-2} + (-54x)\\frac{d}{dx}((1 + 9x^2)^{-2}) \\\\\n&= -54(1 + 9x^2)^{-2} + (-54x)(-2)(1 + 9x^2)^{-3}(18x) \\\\\n&= \\frac{-54}{(1 + 9x^2)^2} + \\frac{1944x^2}{(1 + 9x^2)^3} \\\\\n&= \\frac{-54(1 + 9x^2) + 1944x^2}{(1 + 9x^2)^3} \\\\\n&= \\frac{-54 - 486x^2 + 1944x^2}{(1 + 9x^2)^3} \\\\\n&= \\frac{-54 + 1458x^2}{(1 + 9x^2)^3} \\\\\n&= \\frac{54(27x^2 - 1)}{(1 + 9x^2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch5_47",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fourth derivative $f^{(4)}(x)$ of $f(x) = \\frac{4}{\\sqrt{2x + 1}}$.",
    "answer": "\\frac{6720}{16(2x + 1)^{9/2}}",
    "steps": "\\begin{aligned}\nf(x) &= 4(2x + 1)^{-1/2} \\\\[10pt]\nf'(x) &= 4 \\left(-\\frac{1}{2}\\right)(2x + 1)^{-3/2}(2) = -\\frac{8}{2}(2x + 1)^{-3/2} \\\\[10pt]\nf''(x) &= -\\frac{8}{2} \\left(-\\frac{3}{2}\\right)(2x + 1)^{-5/2}(2) = \\frac{48}{4}(2x + 1)^{-5/2} \\\\[10pt]\nf'''(x) &= \\frac{48}{4} \\left(-\\frac{5}{2}\\right)(2x + 1)^{-7/2}(2) = -\\frac{480}{8}(2x + 1)^{-7/2} \\\\[10pt]\nf^{(4)}(x) &= -\\frac{480}{8} \\left(-\\frac{7}{2}\\right)(2x + 1)^{-9/2}(2) = \\frac{6720}{16}(2x + 1)^{-9/2} \\\\\n&= \\frac{6720}{16(2x + 1)^{9/2}} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch6_47",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fifth derivative $f^{(5)}(x)$ of $f(x) = 3x^3 \\ln(3x)$.",
    "answer": "-\\frac{18}{x^2}",
    "steps": "\\begin{aligned}\nf'(x) &= 3 \\left[ 3x^2 \\ln(3x) + x^3 \\left(\\frac{1}{x}\\right) \\right] = 3(3x^2 \\ln(3x) + x^2) \\\\[10pt]\nf''(x) &= 3 \\left[ 6x \\ln(3x) + 3x^2 \\left(\\frac{1}{x}\\right) + 2x \\right] = 3(6x \\ln(3x) + 5x) \\\\[10pt]\nf'''(x) &= 3 \\left[ 6\\ln(3x) + 6x \\left(\\frac{1}{x}\\right) + 5 \\right] = 3(6\\ln(3x) + 11) \\\\[10pt]\nf^{(4)}(x) &= 3 \\left[ 6 \\left(\\frac{1}{x}\\right) + 0 \\right] = \\frac{18}{x} = 18x^{-1} \\\\[10pt]\nf^{(5)}(x) &= -18x^{-2} = -\\frac{18}{x^2} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch1_48",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = x^2 e^{3x}$.",
    "answer": "e^{3x}(27x^2 + 54x + 18)",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{d}{dx}(x^2)e^{3x} + x^2\\frac{d}{dx}(e^{3x}) \\\\\n&= 2x e^{3x} + 3x^2 e^{3x} = e^{3x}(3x^2 + 2x) \\\\[10pt]\nf''(x) &= \\frac{d}{dx}(e^{3x})(3x^2 + 2x) + e^{3x}\\frac{d}{dx}(3x^2 + 2x) \\\\\n&= 3e^{3x}(3x^2 + 2x) + e^{3x}(6x + 2) \\\\\n&= e^{3x}(9x^2 + 6x + 6x + 2) = e^{3x}(9x^2 + 12x + 2) \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(e^{3x})(9x^2 + 12x + 2) + e^{3x}\\frac{d}{dx}(9x^2 + 12x + 2) \\\\\n&= 3e^{3x}(9x^2 + 12x + 2) + e^{3x}(18x + 12) \\\\\n&= e^{3x}(27x^2 + 36x + 6 + 18x + 12) \\\\\n&= e^{3x}(27x^2 + 54x + 18) \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch2_48",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = e^{2x} \\sin(3x)$.",
    "answer": "e^{2x} \\left[ -46\\sin(3x) + 9\\cos(3x) \\right]",
    "steps": "\\begin{aligned}\nf'(x) &= e^{2x}(2\\sin(3x)) + e^{2x}(3\\cos(3x)) \\\\\n&= e^{2x}(2\\sin(3x) + 3\\cos(3x)) \\\\[10pt]\nf''(x) &= 2e^{2x}(2\\sin(3x) + 3\\cos(3x)) + e^{2x}(6\\cos(3x) - 9\\sin(3x)) \\\\\n&= e^{2x} \\left[ (4 - 9)\\sin(3x) + (6 + 6)\\cos(3x) \\right] \\\\\n&= e^{2x} \\left[ -5\\sin(3x) + 12\\cos(3x) \\right] \\\\[10pt]\nf'''(x) &= 2e^{2x} \\left[ -5\\sin(3x) + 12\\cos(3x) \\right] + e^{2x} \\left[ -15\\cos(3x) - 36\\sin(3x) \\right] \\\\\n&= e^{2x} \\left[ (-10 - 36)\\sin(3x) + (24 + -15)\\cos(3x) \\right] \\\\\n&= e^{2x} \\left[ (-46)\\sin(3x) + (9)\\cos(3x) \\right] \\\\\n&= e^{2x} \\left[ -46\\sin(3x) + 9\\cos(3x) \\right] \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch3_48",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\ln(9x^2 - 4)$ for $x > \\frac{2}{3}$. \\\\ \\textit{Hint: Factor the argument first.}",
    "answer": "\\frac{54}{(3x-2)^3} + \\frac{54}{(3x+2)^3}",
    "steps": "\\begin{aligned}\nf(x) &= \\ln((3x - 2)(3x + 2)) = \\ln(3x - 2) + \\ln(3x + 2) \\\\[10pt]\nf'(x) &= \\frac{3}{3x - 2} + \\frac{3}{3x + 2} \\\\\n&= 3(3x - 2)^{-1} + 3(3x + 2)^{-1} \\\\[10pt]\nf''(x) &= -9(3x - 2)^{-2} - 9(3x + 2)^{-2} \\\\[10pt]\nf'''(x) &= 54(3x - 2)^{-3} + 54(3x + 2)^{-3} \\\\\n&= \\frac{54}{(3x-2)^3} + \\frac{54}{(3x+2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch4_48",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\arctan(4x)$.",
    "answer": "\\frac{128(48x^2 - 1)}{(1 + 16x^2)^3}",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{4}{1 + (4x)^2} = 4(1 + 16x^2)^{-1} \\\\[10pt]\nf''(x) &= -4(1 + 16x^2)^{-2} (\\frac{d}{dx}(1 + 16x^2)) \\\\\n&= -4(1 + 16x^2)^{-2} (32x) = -128x(1 + 16x^2)^{-2} \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(-128x)(1 + 16x^2)^{-2} + (-128x)\\frac{d}{dx}((1 + 16x^2)^{-2}) \\\\\n&= -128(1 + 16x^2)^{-2} + (-128x)(-2)(1 + 16x^2)^{-3}(32x) \\\\\n&= \\frac{-128}{(1 + 16x^2)^2} + \\frac{8192x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{-128(1 + 16x^2) + 8192x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{-128 - 2048x^2 + 8192x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{-128 + 6144x^2}{(1 + 16x^2)^3} \\\\\n&= \\frac{128(48x^2 - 1)}{(1 + 16x^2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch5_48",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fourth derivative $f^{(4)}(x)$ of $f(x) = \\frac{16}{\\sqrt{5x + 1}}$.",
    "answer": "\\frac{1050000}{16(5x + 1)^{9/2}}",
    "steps": "\\begin{aligned}\nf(x) &= 16(5x + 1)^{-1/2} \\\\[10pt]\nf'(x) &= 16 \\left(-\\frac{1}{2}\\right)(5x + 1)^{-3/2}(5) = -\\frac{80}{2}(5x + 1)^{-3/2} \\\\[10pt]\nf''(x) &= -\\frac{80}{2} \\left(-\\frac{3}{2}\\right)(5x + 1)^{-5/2}(5) = \\frac{1200}{4}(5x + 1)^{-5/2} \\\\[10pt]\nf'''(x) &= \\frac{1200}{4} \\left(-\\frac{5}{2}\\right)(5x + 1)^{-7/2}(5) = -\\frac{30000}{8}(5x + 1)^{-7/2} \\\\[10pt]\nf^{(4)}(x) &= -\\frac{30000}{8} \\left(-\\frac{7}{2}\\right)(5x + 1)^{-9/2}(5) = \\frac{1050000}{16}(5x + 1)^{-9/2} \\\\\n&= \\frac{1050000}{16(5x + 1)^{9/2}} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch6_48",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fifth derivative $f^{(5)}(x)$ of $f(x) = 7x^3 \\ln(3x)$.",
    "answer": "-\\frac{42}{x^2}",
    "steps": "\\begin{aligned}\nf'(x) &= 7 \\left[ 3x^2 \\ln(3x) + x^3 \\left(\\frac{1}{x}\\right) \\right] = 7(3x^2 \\ln(3x) + x^2) \\\\[10pt]\nf''(x) &= 7 \\left[ 6x \\ln(3x) + 3x^2 \\left(\\frac{1}{x}\\right) + 2x \\right] = 7(6x \\ln(3x) + 5x) \\\\[10pt]\nf'''(x) &= 7 \\left[ 6\\ln(3x) + 6x \\left(\\frac{1}{x}\\right) + 5 \\right] = 7(6\\ln(3x) + 11) \\\\[10pt]\nf^{(4)}(x) &= 7 \\left[ 6 \\left(\\frac{1}{x}\\right) + 0 \\right] = \\frac{42}{x} = 42x^{-1} \\\\[10pt]\nf^{(5)}(x) &= -42x^{-2} = -\\frac{42}{x^2} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch1_49",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = x^2 e^{6x}$.",
    "answer": "e^{6x}(216x^2 + 216x + 36)",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{d}{dx}(x^2)e^{6x} + x^2\\frac{d}{dx}(e^{6x}) \\\\\n&= 2x e^{6x} + 6x^2 e^{6x} = e^{6x}(6x^2 + 2x) \\\\[10pt]\nf''(x) &= \\frac{d}{dx}(e^{6x})(6x^2 + 2x) + e^{6x}\\frac{d}{dx}(6x^2 + 2x) \\\\\n&= 6e^{6x}(6x^2 + 2x) + e^{6x}(12x + 2) \\\\\n&= e^{6x}(36x^2 + 12x + 12x + 2) = e^{6x}(36x^2 + 24x + 2) \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(e^{6x})(36x^2 + 24x + 2) + e^{6x}\\frac{d}{dx}(36x^2 + 24x + 2) \\\\\n&= 6e^{6x}(36x^2 + 24x + 2) + e^{6x}(72x + 24) \\\\\n&= e^{6x}(216x^2 + 144x + 12 + 72x + 24) \\\\\n&= e^{6x}(216x^2 + 216x + 36) \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch2_49",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = e^{4x} \\sin(2x)$.",
    "answer": "e^{4x} \\left[ 16\\sin(2x) + 88\\cos(2x) \\right]",
    "steps": "\\begin{aligned}\nf'(x) &= e^{4x}(4\\sin(2x)) + e^{4x}(2\\cos(2x)) \\\\\n&= e^{4x}(4\\sin(2x) + 2\\cos(2x)) \\\\[10pt]\nf''(x) &= 4e^{4x}(4\\sin(2x) + 2\\cos(2x)) + e^{4x}(8\\cos(2x) - 4\\sin(2x)) \\\\\n&= e^{4x} \\left[ (16 - 4)\\sin(2x) + (8 + 8)\\cos(2x) \\right] \\\\\n&= e^{4x} \\left[ 12\\sin(2x) + 16\\cos(2x) \\right] \\\\[10pt]\nf'''(x) &= 4e^{4x} \\left[ 12\\sin(2x) + 16\\cos(2x) \\right] + e^{4x} \\left[ 24\\cos(2x) - 32\\sin(2x) \\right] \\\\\n&= e^{4x} \\left[ (48 - 32)\\sin(2x) + (64 + 24)\\cos(2x) \\right] \\\\\n&= e^{4x} \\left[ (16)\\sin(2x) + (88)\\cos(2x) \\right] \\\\\n&= e^{4x} \\left[ 16\\sin(2x) + 88\\cos(2x) \\right] \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch3_49",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\ln(16x^2 - 49)$ for $x > \\frac{7}{4}$. \\\\ \\textit{Hint: Factor the argument first.}",
    "answer": "\\frac{128}{(4x-7)^3} + \\frac{128}{(4x+7)^3}",
    "steps": "\\begin{aligned}\nf(x) &= \\ln((4x - 7)(4x + 7)) = \\ln(4x - 7) + \\ln(4x + 7) \\\\[10pt]\nf'(x) &= \\frac{4}{4x - 7} + \\frac{4}{4x + 7} \\\\\n&= 4(4x - 7)^{-1} + 4(4x + 7)^{-1} \\\\[10pt]\nf''(x) &= -16(4x - 7)^{-2} - 16(4x + 7)^{-2} \\\\[10pt]\nf'''(x) &= 128(4x - 7)^{-3} + 128(4x + 7)^{-3} \\\\\n&= \\frac{128}{(4x-7)^3} + \\frac{128}{(4x+7)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch4_49",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the third derivative $f'''(x)$ of $f(x) = \\arctan(2x)$.",
    "answer": "\\frac{16(12x^2 - 1)}{(1 + 4x^2)^3}",
    "steps": "\\begin{aligned}\nf'(x) &= \\frac{2}{1 + (2x)^2} = 2(1 + 4x^2)^{-1} \\\\[10pt]\nf''(x) &= -2(1 + 4x^2)^{-2} (\\frac{d}{dx}(1 + 4x^2)) \\\\\n&= -2(1 + 4x^2)^{-2} (8x) = -16x(1 + 4x^2)^{-2} \\\\[10pt]\nf'''(x) &= \\frac{d}{dx}(-16x)(1 + 4x^2)^{-2} + (-16x)\\frac{d}{dx}((1 + 4x^2)^{-2}) \\\\\n&= -16(1 + 4x^2)^{-2} + (-16x)(-2)(1 + 4x^2)^{-3}(8x) \\\\\n&= \\frac{-16}{(1 + 4x^2)^2} + \\frac{256x^2}{(1 + 4x^2)^3} \\\\\n&= \\frac{-16(1 + 4x^2) + 256x^2}{(1 + 4x^2)^3} \\\\\n&= \\frac{-16 - 64x^2 + 256x^2}{(1 + 4x^2)^3} \\\\\n&= \\frac{-16 + 192x^2}{(1 + 4x^2)^3} \\\\\n&= \\frac{16(12x^2 - 1)}{(1 + 4x^2)^3} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch5_49",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fourth derivative $f^{(4)}(x)$ of $f(x) = \\frac{16}{\\sqrt{3x + 1}}$.",
    "answer": "\\frac{136080}{16(3x + 1)^{9/2}}",
    "steps": "\\begin{aligned}\nf(x) &= 16(3x + 1)^{-1/2} \\\\[10pt]\nf'(x) &= 16 \\left(-\\frac{1}{2}\\right)(3x + 1)^{-3/2}(3) = -\\frac{48}{2}(3x + 1)^{-3/2} \\\\[10pt]\nf''(x) &= -\\frac{48}{2} \\left(-\\frac{3}{2}\\right)(3x + 1)^{-5/2}(3) = \\frac{432}{4}(3x + 1)^{-5/2} \\\\[10pt]\nf'''(x) &= \\frac{432}{4} \\left(-\\frac{5}{2}\\right)(3x + 1)^{-7/2}(3) = -\\frac{6480}{8}(3x + 1)^{-7/2} \\\\[10pt]\nf^{(4)}(x) &= -\\frac{6480}{8} \\left(-\\frac{7}{2}\\right)(3x + 1)^{-9/2}(3) = \\frac{136080}{16}(3x + 1)^{-9/2} \\\\\n&= \\frac{136080}{16(3x + 1)^{9/2}} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_higher_order_arch6_49",
    "topic": "Higher-Order Derivatives",
    "category": "Derivatives",
    "difficulty": "very_hard",
    "statement": "Find the fifth derivative $f^{(5)}(x)$ of $f(x) = 5x^3 \\ln(4x)$.",
    "answer": "-\\frac{30}{x^2}",
    "steps": "\\begin{aligned}\nf'(x) &= 5 \\left[ 3x^2 \\ln(4x) + x^3 \\left(\\frac{1}{x}\\right) \\right] = 5(3x^2 \\ln(4x) + x^2) \\\\[10pt]\nf''(x) &= 5 \\left[ 6x \\ln(4x) + 3x^2 \\left(\\frac{1}{x}\\right) + 2x \\right] = 5(6x \\ln(4x) + 5x) \\\\[10pt]\nf'''(x) &= 5 \\left[ 6\\ln(4x) + 6x \\left(\\frac{1}{x}\\right) + 5 \\right] = 5(6\\ln(4x) + 11) \\\\[10pt]\nf^{(4)}(x) &= 5 \\left[ 6 \\left(\\frac{1}{x}\\right) + 0 \\right] = \\frac{30}{x} = 30x^{-1} \\\\[10pt]\nf^{(5)}(x) &= -30x^{-2} = -\\frac{30}{x^2} \\\\\n\\end{aligned}"
  }
];
