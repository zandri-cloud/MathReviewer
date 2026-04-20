// Generates 150+ very hard Applications of Derivatives calculus problems
export const generatedApplicationsProblems: any[] = [
  {
    "id": "gen_app_deriv_arch1_1",
    "topic": "Maxima and Minima",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A metal pipe is being carried horizontally around a right-angled corner from a corridor of width 1 m into a corridor of width 1 m. Find the length of the longest pipe capable of being moved around the corner. Neglect the diameter of the pipe.",
    "answer": "2.83",
    "steps": "\\begin{aligned}\n&\\text{Let } L \\text{ be the length of the pipe touching both walls and the corner.} \\\\\n&L(\\theta) = \\frac{1}{\\sin\\theta} + \\frac{1}{\\cos\\theta} \\\\\n&L'(\\theta) = -1\\csc\\theta\\cot\\theta + 1\\sec\\theta\\tan\\theta = 0 \\\\\n&\\frac{1\\cos\\theta}{\\sin^2\\theta} = \\frac{1\\sin\\theta}{\\cos^2\\theta} \\implies \\tan^3\\theta = \\frac{1}{1} \\\\\n&\\tan\\theta = \\frac{1}{1} \\implies \\sin\\theta = \\frac{1}{\\sqrt{2}}, \\cos\\theta = \\frac{1}{\\sqrt{2}} \\\\\n&L_{max} = \\frac{1}{\\frac{1}{\\sqrt{2}}} + \\frac{1}{\\frac{1}{\\sqrt{2}}} = 1\\sqrt{2} + 1\\sqrt{2} \\\\\n&L_{max} = (1 + 1)\\sqrt{2} = 2.83 \\quad \\text{m.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For perpendicular corridors of widths } w_1 \\text{ and } w_2 \\text{, the maximum length is fiercely restricted to } L = (w_1^{2/3} + w_2^{2/3})^{3/2}. \\\\\n&\\text{This dimensional identity instantly bypasses deep angular trigonometry limits.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{What is the absolute longest pipe for corridors of dimensions } 8 \\text{ m and } 8 \\text{ m?} \\\\\n&L_{max} = (8^{2/3} + 8^{2/3})^{3/2} = (2^2 + 2^2)^{3/2} = 22.63 \\text{ m.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch1_2",
    "topic": "Maxima and Minima",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A metal pipe is being carried horizontally around a right-angled corner from a corridor of width 1 m into a corridor of width 8 m. Find the length of the longest pipe capable of being moved around the corner. Neglect the diameter of the pipe.",
    "answer": "11.18",
    "steps": "\\begin{aligned}\n&\\text{Let } L \\text{ be the length of the pipe touching both walls and the corner.} \\\\\n&L(\\theta) = \\frac{1}{\\sin\\theta} + \\frac{8}{\\cos\\theta} \\\\\n&L'(\\theta) = -1\\csc\\theta\\cot\\theta + 8\\sec\\theta\\tan\\theta = 0 \\\\\n&\\frac{1\\cos\\theta}{\\sin^2\\theta} = \\frac{8\\sin\\theta}{\\cos^2\\theta} \\implies \\tan^3\\theta = \\frac{1}{8} \\\\\n&\\tan\\theta = \\frac{1}{2} \\implies \\sin\\theta = \\frac{1}{\\sqrt{5}}, \\cos\\theta = \\frac{2}{\\sqrt{5}} \\\\\n&L_{max} = \\frac{1}{\\frac{1}{\\sqrt{5}}} + \\frac{8}{\\frac{2}{\\sqrt{5}}} = 1\\sqrt{5} + 4\\sqrt{5} \\\\\n&L_{max} = (1 + 4)\\sqrt{5} = 11.18 \\quad \\text{m.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For perpendicular corridors of widths } w_1 \\text{ and } w_2 \\text{, the maximum length is fiercely restricted to } L = (w_1^{2/3} + w_2^{2/3})^{3/2}. \\\\\n&\\text{This dimensional identity instantly bypasses deep angular trigonometry limits.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{What is the absolute longest pipe for corridors of dimensions } 8 \\text{ m and } 27 \\text{ m?} \\\\\n&L_{max} = (8^{2/3} + 27^{2/3})^{3/2} = (2^2 + 3^2)^{3/2} = 46.87 \\text{ m.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch1_3",
    "topic": "Maxima and Minima",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A metal pipe is being carried horizontally around a right-angled corner from a corridor of width 1 m into a corridor of width 27 m. Find the length of the longest pipe capable of being moved around the corner. Neglect the diameter of the pipe.",
    "answer": "31.62",
    "steps": "\\begin{aligned}\n&\\text{Let } L \\text{ be the length of the pipe touching both walls and the corner.} \\\\\n&L(\\theta) = \\frac{1}{\\sin\\theta} + \\frac{27}{\\cos\\theta} \\\\\n&L'(\\theta) = -1\\csc\\theta\\cot\\theta + 27\\sec\\theta\\tan\\theta = 0 \\\\\n&\\frac{1\\cos\\theta}{\\sin^2\\theta} = \\frac{27\\sin\\theta}{\\cos^2\\theta} \\implies \\tan^3\\theta = \\frac{1}{27} \\\\\n&\\tan\\theta = \\frac{1}{3} \\implies \\sin\\theta = \\frac{1}{\\sqrt{10}}, \\cos\\theta = \\frac{3}{\\sqrt{10}} \\\\\n&L_{max} = \\frac{1}{\\frac{1}{\\sqrt{10}}} + \\frac{27}{\\frac{3}{\\sqrt{10}}} = 1\\sqrt{10} + 9\\sqrt{10} \\\\\n&L_{max} = (1 + 9)\\sqrt{10} = 31.62 \\quad \\text{m.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For perpendicular corridors of widths } w_1 \\text{ and } w_2 \\text{, the maximum length is fiercely restricted to } L = (w_1^{2/3} + w_2^{2/3})^{3/2}. \\\\\n&\\text{This dimensional identity instantly bypasses deep angular trigonometry limits.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{What is the absolute longest pipe for corridors of dimensions } 8 \\text{ m and } 64 \\text{ m?} \\\\\n&L_{max} = (8^{2/3} + 64^{2/3})^{3/2} = (2^2 + 4^2)^{3/2} = 89.44 \\text{ m.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch1_4",
    "topic": "Maxima and Minima",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A metal pipe is being carried horizontally around a right-angled corner from a corridor of width 1 m into a corridor of width 64 m. Find the length of the longest pipe capable of being moved around the corner. Neglect the diameter of the pipe.",
    "answer": "70.09",
    "steps": "\\begin{aligned}\n&\\text{Let } L \\text{ be the length of the pipe touching both walls and the corner.} \\\\\n&L(\\theta) = \\frac{1}{\\sin\\theta} + \\frac{64}{\\cos\\theta} \\\\\n&L'(\\theta) = -1\\csc\\theta\\cot\\theta + 64\\sec\\theta\\tan\\theta = 0 \\\\\n&\\frac{1\\cos\\theta}{\\sin^2\\theta} = \\frac{64\\sin\\theta}{\\cos^2\\theta} \\implies \\tan^3\\theta = \\frac{1}{64} \\\\\n&\\tan\\theta = \\frac{1}{4} \\implies \\sin\\theta = \\frac{1}{\\sqrt{17}}, \\cos\\theta = \\frac{4}{\\sqrt{17}} \\\\\n&L_{max} = \\frac{1}{\\frac{1}{\\sqrt{17}}} + \\frac{64}{\\frac{4}{\\sqrt{17}}} = 1\\sqrt{17} + 16\\sqrt{17} \\\\\n&L_{max} = (1 + 16)\\sqrt{17} = 70.09 \\quad \\text{m.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For perpendicular corridors of widths } w_1 \\text{ and } w_2 \\text{, the maximum length is fiercely restricted to } L = (w_1^{2/3} + w_2^{2/3})^{3/2}. \\\\\n&\\text{This dimensional identity instantly bypasses deep angular trigonometry limits.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{What is the absolute longest pipe for corridors of dimensions } 8 \\text{ m and } 125 \\text{ m?} \\\\\n&L_{max} = (8^{2/3} + 125^{2/3})^{3/2} = (2^2 + 5^2)^{3/2} = 156.17 \\text{ m.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch1_5",
    "topic": "Maxima and Minima",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A metal pipe is being carried horizontally around a right-angled corner from a corridor of width 8 m into a corridor of width 1 m. Find the length of the longest pipe capable of being moved around the corner. Neglect the diameter of the pipe.",
    "answer": "11.18",
    "steps": "\\begin{aligned}\n&\\text{Let } L \\text{ be the length of the pipe touching both walls and the corner.} \\\\\n&L(\\theta) = \\frac{8}{\\sin\\theta} + \\frac{1}{\\cos\\theta} \\\\\n&L'(\\theta) = -8\\csc\\theta\\cot\\theta + 1\\sec\\theta\\tan\\theta = 0 \\\\\n&\\frac{8\\cos\\theta}{\\sin^2\\theta} = \\frac{1\\sin\\theta}{\\cos^2\\theta} \\implies \\tan^3\\theta = \\frac{8}{1} \\\\\n&\\tan\\theta = \\frac{2}{1} \\implies \\sin\\theta = \\frac{2}{\\sqrt{5}}, \\cos\\theta = \\frac{1}{\\sqrt{5}} \\\\\n&L_{max} = \\frac{8}{\\frac{2}{\\sqrt{5}}} + \\frac{1}{\\frac{1}{\\sqrt{5}}} = 4\\sqrt{5} + 1\\sqrt{5} \\\\\n&L_{max} = (4 + 1)\\sqrt{5} = 11.18 \\quad \\text{m.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For perpendicular corridors of widths } w_1 \\text{ and } w_2 \\text{, the maximum length is fiercely restricted to } L = (w_1^{2/3} + w_2^{2/3})^{3/2}. \\\\\n&\\text{This dimensional identity instantly bypasses deep angular trigonometry limits.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{What is the absolute longest pipe for corridors of dimensions } 27 \\text{ m and } 8 \\text{ m?} \\\\\n&L_{max} = (27^{2/3} + 8^{2/3})^{3/2} = (3^2 + 2^2)^{3/2} = 46.87 \\text{ m.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch1_6",
    "topic": "Maxima and Minima",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A metal pipe is being carried horizontally around a right-angled corner from a corridor of width 8 m into a corridor of width 8 m. Find the length of the longest pipe capable of being moved around the corner. Neglect the diameter of the pipe.",
    "answer": "22.63",
    "steps": "\\begin{aligned}\n&\\text{Let } L \\text{ be the length of the pipe touching both walls and the corner.} \\\\\n&L(\\theta) = \\frac{8}{\\sin\\theta} + \\frac{8}{\\cos\\theta} \\\\\n&L'(\\theta) = -8\\csc\\theta\\cot\\theta + 8\\sec\\theta\\tan\\theta = 0 \\\\\n&\\frac{8\\cos\\theta}{\\sin^2\\theta} = \\frac{8\\sin\\theta}{\\cos^2\\theta} \\implies \\tan^3\\theta = \\frac{8}{8} \\\\\n&\\tan\\theta = \\frac{2}{2} \\implies \\sin\\theta = \\frac{2}{\\sqrt{8}}, \\cos\\theta = \\frac{2}{\\sqrt{8}} \\\\\n&L_{max} = \\frac{8}{\\frac{2}{\\sqrt{8}}} + \\frac{8}{\\frac{2}{\\sqrt{8}}} = 4\\sqrt{8} + 4\\sqrt{8} \\\\\n&L_{max} = (4 + 4)\\sqrt{8} = 22.63 \\quad \\text{m.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For perpendicular corridors of widths } w_1 \\text{ and } w_2 \\text{, the maximum length is fiercely restricted to } L = (w_1^{2/3} + w_2^{2/3})^{3/2}. \\\\\n&\\text{This dimensional identity instantly bypasses deep angular trigonometry limits.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{What is the absolute longest pipe for corridors of dimensions } 27 \\text{ m and } 27 \\text{ m?} \\\\\n&L_{max} = (27^{2/3} + 27^{2/3})^{3/2} = (3^2 + 3^2)^{3/2} = 76.37 \\text{ m.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch1_7",
    "topic": "Maxima and Minima",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A metal pipe is being carried horizontally around a right-angled corner from a corridor of width 8 m into a corridor of width 27 m. Find the length of the longest pipe capable of being moved around the corner. Neglect the diameter of the pipe.",
    "answer": "46.87",
    "steps": "\\begin{aligned}\n&\\text{Let } L \\text{ be the length of the pipe touching both walls and the corner.} \\\\\n&L(\\theta) = \\frac{8}{\\sin\\theta} + \\frac{27}{\\cos\\theta} \\\\\n&L'(\\theta) = -8\\csc\\theta\\cot\\theta + 27\\sec\\theta\\tan\\theta = 0 \\\\\n&\\frac{8\\cos\\theta}{\\sin^2\\theta} = \\frac{27\\sin\\theta}{\\cos^2\\theta} \\implies \\tan^3\\theta = \\frac{8}{27} \\\\\n&\\tan\\theta = \\frac{2}{3} \\implies \\sin\\theta = \\frac{2}{\\sqrt{13}}, \\cos\\theta = \\frac{3}{\\sqrt{13}} \\\\\n&L_{max} = \\frac{8}{\\frac{2}{\\sqrt{13}}} + \\frac{27}{\\frac{3}{\\sqrt{13}}} = 4\\sqrt{13} + 9\\sqrt{13} \\\\\n&L_{max} = (4 + 9)\\sqrt{13} = 46.87 \\quad \\text{m.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For perpendicular corridors of widths } w_1 \\text{ and } w_2 \\text{, the maximum length is fiercely restricted to } L = (w_1^{2/3} + w_2^{2/3})^{3/2}. \\\\\n&\\text{This dimensional identity instantly bypasses deep angular trigonometry limits.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{What is the absolute longest pipe for corridors of dimensions } 27 \\text{ m and } 64 \\text{ m?} \\\\\n&L_{max} = (27^{2/3} + 64^{2/3})^{3/2} = (3^2 + 4^2)^{3/2} = 125 \\text{ m.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch1_8",
    "topic": "Maxima and Minima",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A metal pipe is being carried horizontally around a right-angled corner from a corridor of width 8 m into a corridor of width 64 m. Find the length of the longest pipe capable of being moved around the corner. Neglect the diameter of the pipe.",
    "answer": "89.44",
    "steps": "\\begin{aligned}\n&\\text{Let } L \\text{ be the length of the pipe touching both walls and the corner.} \\\\\n&L(\\theta) = \\frac{8}{\\sin\\theta} + \\frac{64}{\\cos\\theta} \\\\\n&L'(\\theta) = -8\\csc\\theta\\cot\\theta + 64\\sec\\theta\\tan\\theta = 0 \\\\\n&\\frac{8\\cos\\theta}{\\sin^2\\theta} = \\frac{64\\sin\\theta}{\\cos^2\\theta} \\implies \\tan^3\\theta = \\frac{8}{64} \\\\\n&\\tan\\theta = \\frac{2}{4} \\implies \\sin\\theta = \\frac{2}{\\sqrt{20}}, \\cos\\theta = \\frac{4}{\\sqrt{20}} \\\\\n&L_{max} = \\frac{8}{\\frac{2}{\\sqrt{20}}} + \\frac{64}{\\frac{4}{\\sqrt{20}}} = 4\\sqrt{20} + 16\\sqrt{20} \\\\\n&L_{max} = (4 + 16)\\sqrt{20} = 89.44 \\quad \\text{m.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For perpendicular corridors of widths } w_1 \\text{ and } w_2 \\text{, the maximum length is fiercely restricted to } L = (w_1^{2/3} + w_2^{2/3})^{3/2}. \\\\\n&\\text{This dimensional identity instantly bypasses deep angular trigonometry limits.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{What is the absolute longest pipe for corridors of dimensions } 27 \\text{ m and } 125 \\text{ m?} \\\\\n&L_{max} = (27^{2/3} + 125^{2/3})^{3/2} = (3^2 + 5^2)^{3/2} = 198.25 \\text{ m.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch1_9",
    "topic": "Maxima and Minima",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A metal pipe is being carried horizontally around a right-angled corner from a corridor of width 27 m into a corridor of width 1 m. Find the length of the longest pipe capable of being moved around the corner. Neglect the diameter of the pipe.",
    "answer": "31.62",
    "steps": "\\begin{aligned}\n&\\text{Let } L \\text{ be the length of the pipe touching both walls and the corner.} \\\\\n&L(\\theta) = \\frac{27}{\\sin\\theta} + \\frac{1}{\\cos\\theta} \\\\\n&L'(\\theta) = -27\\csc\\theta\\cot\\theta + 1\\sec\\theta\\tan\\theta = 0 \\\\\n&\\frac{27\\cos\\theta}{\\sin^2\\theta} = \\frac{1\\sin\\theta}{\\cos^2\\theta} \\implies \\tan^3\\theta = \\frac{27}{1} \\\\\n&\\tan\\theta = \\frac{3}{1} \\implies \\sin\\theta = \\frac{3}{\\sqrt{10}}, \\cos\\theta = \\frac{1}{\\sqrt{10}} \\\\\n&L_{max} = \\frac{27}{\\frac{3}{\\sqrt{10}}} + \\frac{1}{\\frac{1}{\\sqrt{10}}} = 9\\sqrt{10} + 1\\sqrt{10} \\\\\n&L_{max} = (9 + 1)\\sqrt{10} = 31.62 \\quad \\text{m.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For perpendicular corridors of widths } w_1 \\text{ and } w_2 \\text{, the maximum length is fiercely restricted to } L = (w_1^{2/3} + w_2^{2/3})^{3/2}. \\\\\n&\\text{This dimensional identity instantly bypasses deep angular trigonometry limits.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{What is the absolute longest pipe for corridors of dimensions } 64 \\text{ m and } 8 \\text{ m?} \\\\\n&L_{max} = (64^{2/3} + 8^{2/3})^{3/2} = (4^2 + 2^2)^{3/2} = 89.44 \\text{ m.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch1_10",
    "topic": "Maxima and Minima",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A metal pipe is being carried horizontally around a right-angled corner from a corridor of width 27 m into a corridor of width 8 m. Find the length of the longest pipe capable of being moved around the corner. Neglect the diameter of the pipe.",
    "answer": "46.87",
    "steps": "\\begin{aligned}\n&\\text{Let } L \\text{ be the length of the pipe touching both walls and the corner.} \\\\\n&L(\\theta) = \\frac{27}{\\sin\\theta} + \\frac{8}{\\cos\\theta} \\\\\n&L'(\\theta) = -27\\csc\\theta\\cot\\theta + 8\\sec\\theta\\tan\\theta = 0 \\\\\n&\\frac{27\\cos\\theta}{\\sin^2\\theta} = \\frac{8\\sin\\theta}{\\cos^2\\theta} \\implies \\tan^3\\theta = \\frac{27}{8} \\\\\n&\\tan\\theta = \\frac{3}{2} \\implies \\sin\\theta = \\frac{3}{\\sqrt{13}}, \\cos\\theta = \\frac{2}{\\sqrt{13}} \\\\\n&L_{max} = \\frac{27}{\\frac{3}{\\sqrt{13}}} + \\frac{8}{\\frac{2}{\\sqrt{13}}} = 9\\sqrt{13} + 4\\sqrt{13} \\\\\n&L_{max} = (9 + 4)\\sqrt{13} = 46.87 \\quad \\text{m.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For perpendicular corridors of widths } w_1 \\text{ and } w_2 \\text{, the maximum length is fiercely restricted to } L = (w_1^{2/3} + w_2^{2/3})^{3/2}. \\\\\n&\\text{This dimensional identity instantly bypasses deep angular trigonometry limits.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{What is the absolute longest pipe for corridors of dimensions } 64 \\text{ m and } 27 \\text{ m?} \\\\\n&L_{max} = (64^{2/3} + 27^{2/3})^{3/2} = (4^2 + 3^2)^{3/2} = 125 \\text{ m.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch1_11",
    "topic": "Maxima and Minima",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A metal pipe is being carried horizontally around a right-angled corner from a corridor of width 27 m into a corridor of width 27 m. Find the length of the longest pipe capable of being moved around the corner. Neglect the diameter of the pipe.",
    "answer": "76.37",
    "steps": "\\begin{aligned}\n&\\text{Let } L \\text{ be the length of the pipe touching both walls and the corner.} \\\\\n&L(\\theta) = \\frac{27}{\\sin\\theta} + \\frac{27}{\\cos\\theta} \\\\\n&L'(\\theta) = -27\\csc\\theta\\cot\\theta + 27\\sec\\theta\\tan\\theta = 0 \\\\\n&\\frac{27\\cos\\theta}{\\sin^2\\theta} = \\frac{27\\sin\\theta}{\\cos^2\\theta} \\implies \\tan^3\\theta = \\frac{27}{27} \\\\\n&\\tan\\theta = \\frac{3}{3} \\implies \\sin\\theta = \\frac{3}{\\sqrt{18}}, \\cos\\theta = \\frac{3}{\\sqrt{18}} \\\\\n&L_{max} = \\frac{27}{\\frac{3}{\\sqrt{18}}} + \\frac{27}{\\frac{3}{\\sqrt{18}}} = 9\\sqrt{18} + 9\\sqrt{18} \\\\\n&L_{max} = (9 + 9)\\sqrt{18} = 76.37 \\quad \\text{m.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For perpendicular corridors of widths } w_1 \\text{ and } w_2 \\text{, the maximum length is fiercely restricted to } L = (w_1^{2/3} + w_2^{2/3})^{3/2}. \\\\\n&\\text{This dimensional identity instantly bypasses deep angular trigonometry limits.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{What is the absolute longest pipe for corridors of dimensions } 64 \\text{ m and } 64 \\text{ m?} \\\\\n&L_{max} = (64^{2/3} + 64^{2/3})^{3/2} = (4^2 + 4^2)^{3/2} = 181.02 \\text{ m.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch1_12",
    "topic": "Maxima and Minima",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A metal pipe is being carried horizontally around a right-angled corner from a corridor of width 27 m into a corridor of width 64 m. Find the length of the longest pipe capable of being moved around the corner. Neglect the diameter of the pipe.",
    "answer": "125",
    "steps": "\\begin{aligned}\n&\\text{Let } L \\text{ be the length of the pipe touching both walls and the corner.} \\\\\n&L(\\theta) = \\frac{27}{\\sin\\theta} + \\frac{64}{\\cos\\theta} \\\\\n&L'(\\theta) = -27\\csc\\theta\\cot\\theta + 64\\sec\\theta\\tan\\theta = 0 \\\\\n&\\frac{27\\cos\\theta}{\\sin^2\\theta} = \\frac{64\\sin\\theta}{\\cos^2\\theta} \\implies \\tan^3\\theta = \\frac{27}{64} \\\\\n&\\tan\\theta = \\frac{3}{4} \\implies \\sin\\theta = \\frac{3}{\\sqrt{25}}, \\cos\\theta = \\frac{4}{\\sqrt{25}} \\\\\n&L_{max} = \\frac{27}{\\frac{3}{\\sqrt{25}}} + \\frac{64}{\\frac{4}{\\sqrt{25}}} = 9\\sqrt{25} + 16\\sqrt{25} \\\\\n&L_{max} = (9 + 16)\\sqrt{25} = 125 \\quad \\text{m.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For perpendicular corridors of widths } w_1 \\text{ and } w_2 \\text{, the maximum length is fiercely restricted to } L = (w_1^{2/3} + w_2^{2/3})^{3/2}. \\\\\n&\\text{This dimensional identity instantly bypasses deep angular trigonometry limits.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{What is the absolute longest pipe for corridors of dimensions } 64 \\text{ m and } 125 \\text{ m?} \\\\\n&L_{max} = (64^{2/3} + 125^{2/3})^{3/2} = (4^2 + 5^2)^{3/2} = 262.53 \\text{ m.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch2_13",
    "topic": "Maxima and Minima",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A right circular cylinder is inscribed in a sphere of radius 3 cm. Find the maximum possible volume of the cylinder.",
    "answer": "\\frac{108\\pi}{3\\sqrt{3}}",
    "steps": "\\begin{aligned}\n&\\text{Let } h \\text{ be the cylinder height and } r \\text{ be its radius.} \\\\\n&\\text{By the Pythagorean theorem on the inscribed cross-section: } r^2 + \\left(\\frac{h}{2}\\right)^2 = 3^2 \\implies r^2 = 9 - \\frac{h^2}{4}. \\\\\n&V(h) = \\pi r^2 h = \\pi h \\left(9 - \\frac{h^2}{4}\\right) = \\pi \\left(9h - \\frac{h^3}{4}\\right). \\\\\n&V'(h) = \\pi \\left(9 - \\frac{3h^2}{4}\\right) = 0 \\implies 3h^2 = 36 \\implies h = \\frac{6}{\\sqrt{3}}. \\\\\n&V_{max} = \\pi \\left(\\frac{6}{\\sqrt{3}}\\right) \\left(9 - \\frac{9}{3}\\right) = \\pi \\left(\\frac{6}{\\sqrt{3}}\\right) \\left(\\frac{18}{3}\\right) = \\frac{108\\pi}{3\\sqrt{3}} \\text{ cm}^3. \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{When a cylinder is inscribed in any sphere of radius } R \\text{, the maximum volume always occurs identically at height } h = \\frac{2R}{\\sqrt{3}}. \\\\\n&\\text{This symmetry factor dictates exactly } V_{max} = \\frac{4\\pi R^3}{3\\sqrt{3}}, \\text{ completely skipping repetitive derivative resets.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Find the maximum volume of a cylinder inscribed in a sphere of altered radius } R = 6 \\text{ cm.} \\\\\n&\\text{Directly substituting the geometric rule: } V_{max} = \\frac{864\\pi}{3\\sqrt{3}} \\text{ cm}^3. \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch2_14",
    "topic": "Maxima and Minima",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A right circular cylinder is inscribed in a sphere of radius 6 cm. Find the maximum possible volume of the cylinder.",
    "answer": "\\frac{864\\pi}{3\\sqrt{3}}",
    "steps": "\\begin{aligned}\n&\\text{Let } h \\text{ be the cylinder height and } r \\text{ be its radius.} \\\\\n&\\text{By the Pythagorean theorem on the inscribed cross-section: } r^2 + \\left(\\frac{h}{2}\\right)^2 = 6^2 \\implies r^2 = 36 - \\frac{h^2}{4}. \\\\\n&V(h) = \\pi r^2 h = \\pi h \\left(36 - \\frac{h^2}{4}\\right) = \\pi \\left(36h - \\frac{h^3}{4}\\right). \\\\\n&V'(h) = \\pi \\left(36 - \\frac{3h^2}{4}\\right) = 0 \\implies 3h^2 = 144 \\implies h = \\frac{12}{\\sqrt{3}}. \\\\\n&V_{max} = \\pi \\left(\\frac{12}{\\sqrt{3}}\\right) \\left(36 - \\frac{36}{3}\\right) = \\pi \\left(\\frac{12}{\\sqrt{3}}\\right) \\left(\\frac{72}{3}\\right) = \\frac{864\\pi}{3\\sqrt{3}} \\text{ cm}^3. \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{When a cylinder is inscribed in any sphere of radius } R \\text{, the maximum volume always occurs identically at height } h = \\frac{2R}{\\sqrt{3}}. \\\\\n&\\text{This symmetry factor dictates exactly } V_{max} = \\frac{4\\pi R^3}{3\\sqrt{3}}, \\text{ completely skipping repetitive derivative resets.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Find the maximum volume of a cylinder inscribed in a sphere of altered radius } R = 9 \\text{ cm.} \\\\\n&\\text{Directly substituting the geometric rule: } V_{max} = \\frac{2916\\pi}{3\\sqrt{3}} \\text{ cm}^3. \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch2_15",
    "topic": "Maxima and Minima",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A right circular cylinder is inscribed in a sphere of radius 6 cm. Find the maximum possible volume of the cylinder.",
    "answer": "\\frac{864\\pi}{3\\sqrt{3}}",
    "steps": "\\begin{aligned}\n&\\text{Let } h \\text{ be the cylinder height and } r \\text{ be its radius.} \\\\\n&\\text{By the Pythagorean theorem on the inscribed cross-section: } r^2 + \\left(\\frac{h}{2}\\right)^2 = 6^2 \\implies r^2 = 36 - \\frac{h^2}{4}. \\\\\n&V(h) = \\pi r^2 h = \\pi h \\left(36 - \\frac{h^2}{4}\\right) = \\pi \\left(36h - \\frac{h^3}{4}\\right). \\\\\n&V'(h) = \\pi \\left(36 - \\frac{3h^2}{4}\\right) = 0 \\implies 3h^2 = 144 \\implies h = \\frac{12}{\\sqrt{3}}. \\\\\n&V_{max} = \\pi \\left(\\frac{12}{\\sqrt{3}}\\right) \\left(36 - \\frac{36}{3}\\right) = \\pi \\left(\\frac{12}{\\sqrt{3}}\\right) \\left(\\frac{72}{3}\\right) = \\frac{864\\pi}{3\\sqrt{3}} \\text{ cm}^3. \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{When a cylinder is inscribed in any sphere of radius } R \\text{, the maximum volume always occurs identically at height } h = \\frac{2R}{\\sqrt{3}}. \\\\\n&\\text{This symmetry factor dictates exactly } V_{max} = \\frac{4\\pi R^3}{3\\sqrt{3}}, \\text{ completely skipping repetitive derivative resets.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Find the maximum volume of a cylinder inscribed in a sphere of altered radius } R = 9 \\text{ cm.} \\\\\n&\\text{Directly substituting the geometric rule: } V_{max} = \\frac{2916\\pi}{3\\sqrt{3}} \\text{ cm}^3. \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch2_16",
    "topic": "Maxima and Minima",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A right circular cylinder is inscribed in a sphere of radius 12 cm. Find the maximum possible volume of the cylinder.",
    "answer": "\\frac{6912\\pi}{3\\sqrt{3}}",
    "steps": "\\begin{aligned}\n&\\text{Let } h \\text{ be the cylinder height and } r \\text{ be its radius.} \\\\\n&\\text{By the Pythagorean theorem on the inscribed cross-section: } r^2 + \\left(\\frac{h}{2}\\right)^2 = 12^2 \\implies r^2 = 144 - \\frac{h^2}{4}. \\\\\n&V(h) = \\pi r^2 h = \\pi h \\left(144 - \\frac{h^2}{4}\\right) = \\pi \\left(144h - \\frac{h^3}{4}\\right). \\\\\n&V'(h) = \\pi \\left(144 - \\frac{3h^2}{4}\\right) = 0 \\implies 3h^2 = 576 \\implies h = \\frac{24}{\\sqrt{3}}. \\\\\n&V_{max} = \\pi \\left(\\frac{24}{\\sqrt{3}}\\right) \\left(144 - \\frac{144}{3}\\right) = \\pi \\left(\\frac{24}{\\sqrt{3}}\\right) \\left(\\frac{288}{3}\\right) = \\frac{6912\\pi}{3\\sqrt{3}} \\text{ cm}^3. \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{When a cylinder is inscribed in any sphere of radius } R \\text{, the maximum volume always occurs identically at height } h = \\frac{2R}{\\sqrt{3}}. \\\\\n&\\text{This symmetry factor dictates exactly } V_{max} = \\frac{4\\pi R^3}{3\\sqrt{3}}, \\text{ completely skipping repetitive derivative resets.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Find the maximum volume of a cylinder inscribed in a sphere of altered radius } R = 15 \\text{ cm.} \\\\\n&\\text{Directly substituting the geometric rule: } V_{max} = \\frac{13500\\pi}{3\\sqrt{3}} \\text{ cm}^3. \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch2_17",
    "topic": "Maxima and Minima",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A right circular cylinder is inscribed in a sphere of radius 9 cm. Find the maximum possible volume of the cylinder.",
    "answer": "\\frac{2916\\pi}{3\\sqrt{3}}",
    "steps": "\\begin{aligned}\n&\\text{Let } h \\text{ be the cylinder height and } r \\text{ be its radius.} \\\\\n&\\text{By the Pythagorean theorem on the inscribed cross-section: } r^2 + \\left(\\frac{h}{2}\\right)^2 = 9^2 \\implies r^2 = 81 - \\frac{h^2}{4}. \\\\\n&V(h) = \\pi r^2 h = \\pi h \\left(81 - \\frac{h^2}{4}\\right) = \\pi \\left(81h - \\frac{h^3}{4}\\right). \\\\\n&V'(h) = \\pi \\left(81 - \\frac{3h^2}{4}\\right) = 0 \\implies 3h^2 = 324 \\implies h = \\frac{18}{\\sqrt{3}}. \\\\\n&V_{max} = \\pi \\left(\\frac{18}{\\sqrt{3}}\\right) \\left(81 - \\frac{81}{3}\\right) = \\pi \\left(\\frac{18}{\\sqrt{3}}\\right) \\left(\\frac{162}{3}\\right) = \\frac{2916\\pi}{3\\sqrt{3}} \\text{ cm}^3. \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{When a cylinder is inscribed in any sphere of radius } R \\text{, the maximum volume always occurs identically at height } h = \\frac{2R}{\\sqrt{3}}. \\\\\n&\\text{This symmetry factor dictates exactly } V_{max} = \\frac{4\\pi R^3}{3\\sqrt{3}}, \\text{ completely skipping repetitive derivative resets.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Find the maximum volume of a cylinder inscribed in a sphere of altered radius } R = 12 \\text{ cm.} \\\\\n&\\text{Directly substituting the geometric rule: } V_{max} = \\frac{6912\\pi}{3\\sqrt{3}} \\text{ cm}^3. \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch2_18",
    "topic": "Maxima and Minima",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A right circular cylinder is inscribed in a sphere of radius 18 cm. Find the maximum possible volume of the cylinder.",
    "answer": "\\frac{23328\\pi}{3\\sqrt{3}}",
    "steps": "\\begin{aligned}\n&\\text{Let } h \\text{ be the cylinder height and } r \\text{ be its radius.} \\\\\n&\\text{By the Pythagorean theorem on the inscribed cross-section: } r^2 + \\left(\\frac{h}{2}\\right)^2 = 18^2 \\implies r^2 = 324 - \\frac{h^2}{4}. \\\\\n&V(h) = \\pi r^2 h = \\pi h \\left(324 - \\frac{h^2}{4}\\right) = \\pi \\left(324h - \\frac{h^3}{4}\\right). \\\\\n&V'(h) = \\pi \\left(324 - \\frac{3h^2}{4}\\right) = 0 \\implies 3h^2 = 1296 \\implies h = \\frac{36}{\\sqrt{3}}. \\\\\n&V_{max} = \\pi \\left(\\frac{36}{\\sqrt{3}}\\right) \\left(324 - \\frac{324}{3}\\right) = \\pi \\left(\\frac{36}{\\sqrt{3}}\\right) \\left(\\frac{648}{3}\\right) = \\frac{23328\\pi}{3\\sqrt{3}} \\text{ cm}^3. \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{When a cylinder is inscribed in any sphere of radius } R \\text{, the maximum volume always occurs identically at height } h = \\frac{2R}{\\sqrt{3}}. \\\\\n&\\text{This symmetry factor dictates exactly } V_{max} = \\frac{4\\pi R^3}{3\\sqrt{3}}, \\text{ completely skipping repetitive derivative resets.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Find the maximum volume of a cylinder inscribed in a sphere of altered radius } R = 21 \\text{ cm.} \\\\\n&\\text{Directly substituting the geometric rule: } V_{max} = \\frac{37044\\pi}{3\\sqrt{3}} \\text{ cm}^3. \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch2_19",
    "topic": "Maxima and Minima",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A right circular cylinder is inscribed in a sphere of radius 12 cm. Find the maximum possible volume of the cylinder.",
    "answer": "\\frac{6912\\pi}{3\\sqrt{3}}",
    "steps": "\\begin{aligned}\n&\\text{Let } h \\text{ be the cylinder height and } r \\text{ be its radius.} \\\\\n&\\text{By the Pythagorean theorem on the inscribed cross-section: } r^2 + \\left(\\frac{h}{2}\\right)^2 = 12^2 \\implies r^2 = 144 - \\frac{h^2}{4}. \\\\\n&V(h) = \\pi r^2 h = \\pi h \\left(144 - \\frac{h^2}{4}\\right) = \\pi \\left(144h - \\frac{h^3}{4}\\right). \\\\\n&V'(h) = \\pi \\left(144 - \\frac{3h^2}{4}\\right) = 0 \\implies 3h^2 = 576 \\implies h = \\frac{24}{\\sqrt{3}}. \\\\\n&V_{max} = \\pi \\left(\\frac{24}{\\sqrt{3}}\\right) \\left(144 - \\frac{144}{3}\\right) = \\pi \\left(\\frac{24}{\\sqrt{3}}\\right) \\left(\\frac{288}{3}\\right) = \\frac{6912\\pi}{3\\sqrt{3}} \\text{ cm}^3. \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{When a cylinder is inscribed in any sphere of radius } R \\text{, the maximum volume always occurs identically at height } h = \\frac{2R}{\\sqrt{3}}. \\\\\n&\\text{This symmetry factor dictates exactly } V_{max} = \\frac{4\\pi R^3}{3\\sqrt{3}}, \\text{ completely skipping repetitive derivative resets.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Find the maximum volume of a cylinder inscribed in a sphere of altered radius } R = 15 \\text{ cm.} \\\\\n&\\text{Directly substituting the geometric rule: } V_{max} = \\frac{13500\\pi}{3\\sqrt{3}} \\text{ cm}^3. \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch2_20",
    "topic": "Maxima and Minima",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A right circular cylinder is inscribed in a sphere of radius 24 cm. Find the maximum possible volume of the cylinder.",
    "answer": "\\frac{55296\\pi}{3\\sqrt{3}}",
    "steps": "\\begin{aligned}\n&\\text{Let } h \\text{ be the cylinder height and } r \\text{ be its radius.} \\\\\n&\\text{By the Pythagorean theorem on the inscribed cross-section: } r^2 + \\left(\\frac{h}{2}\\right)^2 = 24^2 \\implies r^2 = 576 - \\frac{h^2}{4}. \\\\\n&V(h) = \\pi r^2 h = \\pi h \\left(576 - \\frac{h^2}{4}\\right) = \\pi \\left(576h - \\frac{h^3}{4}\\right). \\\\\n&V'(h) = \\pi \\left(576 - \\frac{3h^2}{4}\\right) = 0 \\implies 3h^2 = 2304 \\implies h = \\frac{48}{\\sqrt{3}}. \\\\\n&V_{max} = \\pi \\left(\\frac{48}{\\sqrt{3}}\\right) \\left(576 - \\frac{576}{3}\\right) = \\pi \\left(\\frac{48}{\\sqrt{3}}\\right) \\left(\\frac{1152}{3}\\right) = \\frac{55296\\pi}{3\\sqrt{3}} \\text{ cm}^3. \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{When a cylinder is inscribed in any sphere of radius } R \\text{, the maximum volume always occurs identically at height } h = \\frac{2R}{\\sqrt{3}}. \\\\\n&\\text{This symmetry factor dictates exactly } V_{max} = \\frac{4\\pi R^3}{3\\sqrt{3}}, \\text{ completely skipping repetitive derivative resets.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Find the maximum volume of a cylinder inscribed in a sphere of altered radius } R = 27 \\text{ cm.} \\\\\n&\\text{Directly substituting the geometric rule: } V_{max} = \\frac{78732\\pi}{3\\sqrt{3}} \\text{ cm}^3. \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch2_21",
    "topic": "Maxima and Minima",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A right circular cylinder is inscribed in a sphere of radius 15 cm. Find the maximum possible volume of the cylinder.",
    "answer": "\\frac{13500\\pi}{3\\sqrt{3}}",
    "steps": "\\begin{aligned}\n&\\text{Let } h \\text{ be the cylinder height and } r \\text{ be its radius.} \\\\\n&\\text{By the Pythagorean theorem on the inscribed cross-section: } r^2 + \\left(\\frac{h}{2}\\right)^2 = 15^2 \\implies r^2 = 225 - \\frac{h^2}{4}. \\\\\n&V(h) = \\pi r^2 h = \\pi h \\left(225 - \\frac{h^2}{4}\\right) = \\pi \\left(225h - \\frac{h^3}{4}\\right). \\\\\n&V'(h) = \\pi \\left(225 - \\frac{3h^2}{4}\\right) = 0 \\implies 3h^2 = 900 \\implies h = \\frac{30}{\\sqrt{3}}. \\\\\n&V_{max} = \\pi \\left(\\frac{30}{\\sqrt{3}}\\right) \\left(225 - \\frac{225}{3}\\right) = \\pi \\left(\\frac{30}{\\sqrt{3}}\\right) \\left(\\frac{450}{3}\\right) = \\frac{13500\\pi}{3\\sqrt{3}} \\text{ cm}^3. \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{When a cylinder is inscribed in any sphere of radius } R \\text{, the maximum volume always occurs identically at height } h = \\frac{2R}{\\sqrt{3}}. \\\\\n&\\text{This symmetry factor dictates exactly } V_{max} = \\frac{4\\pi R^3}{3\\sqrt{3}}, \\text{ completely skipping repetitive derivative resets.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Find the maximum volume of a cylinder inscribed in a sphere of altered radius } R = 18 \\text{ cm.} \\\\\n&\\text{Directly substituting the geometric rule: } V_{max} = \\frac{23328\\pi}{3\\sqrt{3}} \\text{ cm}^3. \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch2_22",
    "topic": "Maxima and Minima",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A right circular cylinder is inscribed in a sphere of radius 30 cm. Find the maximum possible volume of the cylinder.",
    "answer": "\\frac{108000\\pi}{3\\sqrt{3}}",
    "steps": "\\begin{aligned}\n&\\text{Let } h \\text{ be the cylinder height and } r \\text{ be its radius.} \\\\\n&\\text{By the Pythagorean theorem on the inscribed cross-section: } r^2 + \\left(\\frac{h}{2}\\right)^2 = 30^2 \\implies r^2 = 900 - \\frac{h^2}{4}. \\\\\n&V(h) = \\pi r^2 h = \\pi h \\left(900 - \\frac{h^2}{4}\\right) = \\pi \\left(900h - \\frac{h^3}{4}\\right). \\\\\n&V'(h) = \\pi \\left(900 - \\frac{3h^2}{4}\\right) = 0 \\implies 3h^2 = 3600 \\implies h = \\frac{60}{\\sqrt{3}}. \\\\\n&V_{max} = \\pi \\left(\\frac{60}{\\sqrt{3}}\\right) \\left(900 - \\frac{900}{3}\\right) = \\pi \\left(\\frac{60}{\\sqrt{3}}\\right) \\left(\\frac{1800}{3}\\right) = \\frac{108000\\pi}{3\\sqrt{3}} \\text{ cm}^3. \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{When a cylinder is inscribed in any sphere of radius } R \\text{, the maximum volume always occurs identically at height } h = \\frac{2R}{\\sqrt{3}}. \\\\\n&\\text{This symmetry factor dictates exactly } V_{max} = \\frac{4\\pi R^3}{3\\sqrt{3}}, \\text{ completely skipping repetitive derivative resets.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Find the maximum volume of a cylinder inscribed in a sphere of altered radius } R = 33 \\text{ cm.} \\\\\n&\\text{Directly substituting the geometric rule: } V_{max} = \\frac{143748\\pi}{3\\sqrt{3}} \\text{ cm}^3. \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch2_23",
    "topic": "Maxima and Minima",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A right circular cylinder is inscribed in a sphere of radius 18 cm. Find the maximum possible volume of the cylinder.",
    "answer": "\\frac{23328\\pi}{3\\sqrt{3}}",
    "steps": "\\begin{aligned}\n&\\text{Let } h \\text{ be the cylinder height and } r \\text{ be its radius.} \\\\\n&\\text{By the Pythagorean theorem on the inscribed cross-section: } r^2 + \\left(\\frac{h}{2}\\right)^2 = 18^2 \\implies r^2 = 324 - \\frac{h^2}{4}. \\\\\n&V(h) = \\pi r^2 h = \\pi h \\left(324 - \\frac{h^2}{4}\\right) = \\pi \\left(324h - \\frac{h^3}{4}\\right). \\\\\n&V'(h) = \\pi \\left(324 - \\frac{3h^2}{4}\\right) = 0 \\implies 3h^2 = 1296 \\implies h = \\frac{36}{\\sqrt{3}}. \\\\\n&V_{max} = \\pi \\left(\\frac{36}{\\sqrt{3}}\\right) \\left(324 - \\frac{324}{3}\\right) = \\pi \\left(\\frac{36}{\\sqrt{3}}\\right) \\left(\\frac{648}{3}\\right) = \\frac{23328\\pi}{3\\sqrt{3}} \\text{ cm}^3. \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{When a cylinder is inscribed in any sphere of radius } R \\text{, the maximum volume always occurs identically at height } h = \\frac{2R}{\\sqrt{3}}. \\\\\n&\\text{This symmetry factor dictates exactly } V_{max} = \\frac{4\\pi R^3}{3\\sqrt{3}}, \\text{ completely skipping repetitive derivative resets.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Find the maximum volume of a cylinder inscribed in a sphere of altered radius } R = 21 \\text{ cm.} \\\\\n&\\text{Directly substituting the geometric rule: } V_{max} = \\frac{37044\\pi}{3\\sqrt{3}} \\text{ cm}^3. \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch2_24",
    "topic": "Maxima and Minima",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A right circular cylinder is inscribed in a sphere of radius 36 cm. Find the maximum possible volume of the cylinder.",
    "answer": "\\frac{186624\\pi}{3\\sqrt{3}}",
    "steps": "\\begin{aligned}\n&\\text{Let } h \\text{ be the cylinder height and } r \\text{ be its radius.} \\\\\n&\\text{By the Pythagorean theorem on the inscribed cross-section: } r^2 + \\left(\\frac{h}{2}\\right)^2 = 36^2 \\implies r^2 = 1296 - \\frac{h^2}{4}. \\\\\n&V(h) = \\pi r^2 h = \\pi h \\left(1296 - \\frac{h^2}{4}\\right) = \\pi \\left(1296h - \\frac{h^3}{4}\\right). \\\\\n&V'(h) = \\pi \\left(1296 - \\frac{3h^2}{4}\\right) = 0 \\implies 3h^2 = 5184 \\implies h = \\frac{72}{\\sqrt{3}}. \\\\\n&V_{max} = \\pi \\left(\\frac{72}{\\sqrt{3}}\\right) \\left(1296 - \\frac{1296}{3}\\right) = \\pi \\left(\\frac{72}{\\sqrt{3}}\\right) \\left(\\frac{2592}{3}\\right) = \\frac{186624\\pi}{3\\sqrt{3}} \\text{ cm}^3. \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{When a cylinder is inscribed in any sphere of radius } R \\text{, the maximum volume always occurs identically at height } h = \\frac{2R}{\\sqrt{3}}. \\\\\n&\\text{This symmetry factor dictates exactly } V_{max} = \\frac{4\\pi R^3}{3\\sqrt{3}}, \\text{ completely skipping repetitive derivative resets.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Find the maximum volume of a cylinder inscribed in a sphere of altered radius } R = 39 \\text{ cm.} \\\\\n&\\text{Directly substituting the geometric rule: } V_{max} = \\frac{237276\\pi}{3\\sqrt{3}} \\text{ cm}^3. \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch2_25",
    "topic": "Maxima and Minima",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A right circular cylinder is inscribed in a sphere of radius 24 cm. Find the maximum possible volume of the cylinder.",
    "answer": "\\frac{55296\\pi}{3\\sqrt{3}}",
    "steps": "\\begin{aligned}\n&\\text{Let } h \\text{ be the cylinder height and } r \\text{ be its radius.} \\\\\n&\\text{By the Pythagorean theorem on the inscribed cross-section: } r^2 + \\left(\\frac{h}{2}\\right)^2 = 24^2 \\implies r^2 = 576 - \\frac{h^2}{4}. \\\\\n&V(h) = \\pi r^2 h = \\pi h \\left(576 - \\frac{h^2}{4}\\right) = \\pi \\left(576h - \\frac{h^3}{4}\\right). \\\\\n&V'(h) = \\pi \\left(576 - \\frac{3h^2}{4}\\right) = 0 \\implies 3h^2 = 2304 \\implies h = \\frac{48}{\\sqrt{3}}. \\\\\n&V_{max} = \\pi \\left(\\frac{48}{\\sqrt{3}}\\right) \\left(576 - \\frac{576}{3}\\right) = \\pi \\left(\\frac{48}{\\sqrt{3}}\\right) \\left(\\frac{1152}{3}\\right) = \\frac{55296\\pi}{3\\sqrt{3}} \\text{ cm}^3. \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{When a cylinder is inscribed in any sphere of radius } R \\text{, the maximum volume always occurs identically at height } h = \\frac{2R}{\\sqrt{3}}. \\\\\n&\\text{This symmetry factor dictates exactly } V_{max} = \\frac{4\\pi R^3}{3\\sqrt{3}}, \\text{ completely skipping repetitive derivative resets.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Find the maximum volume of a cylinder inscribed in a sphere of altered radius } R = 27 \\text{ cm.} \\\\\n&\\text{Directly substituting the geometric rule: } V_{max} = \\frac{78732\\pi}{3\\sqrt{3}} \\text{ cm}^3. \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch2_26",
    "topic": "Maxima and Minima",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A right circular cylinder is inscribed in a sphere of radius 48 cm. Find the maximum possible volume of the cylinder.",
    "answer": "\\frac{442368\\pi}{3\\sqrt{3}}",
    "steps": "\\begin{aligned}\n&\\text{Let } h \\text{ be the cylinder height and } r \\text{ be its radius.} \\\\\n&\\text{By the Pythagorean theorem on the inscribed cross-section: } r^2 + \\left(\\frac{h}{2}\\right)^2 = 48^2 \\implies r^2 = 2304 - \\frac{h^2}{4}. \\\\\n&V(h) = \\pi r^2 h = \\pi h \\left(2304 - \\frac{h^2}{4}\\right) = \\pi \\left(2304h - \\frac{h^3}{4}\\right). \\\\\n&V'(h) = \\pi \\left(2304 - \\frac{3h^2}{4}\\right) = 0 \\implies 3h^2 = 9216 \\implies h = \\frac{96}{\\sqrt{3}}. \\\\\n&V_{max} = \\pi \\left(\\frac{96}{\\sqrt{3}}\\right) \\left(2304 - \\frac{2304}{3}\\right) = \\pi \\left(\\frac{96}{\\sqrt{3}}\\right) \\left(\\frac{4608}{3}\\right) = \\frac{442368\\pi}{3\\sqrt{3}} \\text{ cm}^3. \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{When a cylinder is inscribed in any sphere of radius } R \\text{, the maximum volume always occurs identically at height } h = \\frac{2R}{\\sqrt{3}}. \\\\\n&\\text{This symmetry factor dictates exactly } V_{max} = \\frac{4\\pi R^3}{3\\sqrt{3}}, \\text{ completely skipping repetitive derivative resets.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Find the maximum volume of a cylinder inscribed in a sphere of altered radius } R = 51 \\text{ cm.} \\\\\n&\\text{Directly substituting the geometric rule: } V_{max} = \\frac{530604\\pi}{3\\sqrt{3}} \\text{ cm}^3. \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch3_27",
    "topic": "Maxima and Minima",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A manufacturer wishes to create an open box by cutting identical squares from the four corners of a 6 cm by 6 cm piece of cardboard and folding up the sides. Find the side length of the square cutout that maximizes the volume.",
    "answer": "1",
    "steps": "\\begin{aligned}\n&\\text{Let } x \\text{ be the side length of the cut squares. The resulting box dimensions are } ( 6-2x ) \\times ( 6-2x ) \\times x. \\\\\n&V(x) = x(6-2x)^2 \\\\\n&V'(x) = (6-2x)^2 + x \\cdot 2(6-2x)(-2) = (6-2x) [ (6-2x) - 4x ] \\\\\n&V'(x) = (6-2x)(6-6x) = 0. \\\\\n&\\text{Critical points: } x = 3 \\text{ (minimum, flat sheet) and } x = 1 \\text{ (maximum volume).} \\\\\n&\\text{Max Volume evaluated: } V(1) = 1 (4)^2 = 16 \\text{ cm}^3. \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For any square sheet of side } S \\text{, the derivative zeroes invariably scale such that the optimal cutout is exactly } \\frac{S}{6}. \\\\\n&\\text{Symmetric reduction identifies the maximum root strictly proportional to the geometry's boundary condition.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Given a larger square cardboard sheet of side } 12 \\text{ cm, calculate the maximum possible folded volume.} \\\\\n&\\text{Using optimized reduction: } x_{opt} = \\frac{12}{6} = 2 \\text{ cm.} \\\\\n&V_{max} = 2 (12 - 2(2))^2 = 128 \\text{ cm}^3. \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch3_28",
    "topic": "Maxima and Minima",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A manufacturer wishes to create an open box by cutting identical squares from the four corners of a 12 cm by 12 cm piece of cardboard and folding up the sides. Find the side length of the square cutout that maximizes the volume.",
    "answer": "2",
    "steps": "\\begin{aligned}\n&\\text{Let } x \\text{ be the side length of the cut squares. The resulting box dimensions are } ( 12-2x ) \\times ( 12-2x ) \\times x. \\\\\n&V(x) = x(12-2x)^2 \\\\\n&V'(x) = (12-2x)^2 + x \\cdot 2(12-2x)(-2) = (12-2x) [ (12-2x) - 4x ] \\\\\n&V'(x) = (12-2x)(12-6x) = 0. \\\\\n&\\text{Critical points: } x = 6 \\text{ (minimum, flat sheet) and } x = 2 \\text{ (maximum volume).} \\\\\n&\\text{Max Volume evaluated: } V(2) = 2 (8)^2 = 128 \\text{ cm}^3. \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For any square sheet of side } S \\text{, the derivative zeroes invariably scale such that the optimal cutout is exactly } \\frac{S}{6}. \\\\\n&\\text{Symmetric reduction identifies the maximum root strictly proportional to the geometry's boundary condition.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Given a larger square cardboard sheet of side } 18 \\text{ cm, calculate the maximum possible folded volume.} \\\\\n&\\text{Using optimized reduction: } x_{opt} = \\frac{18}{6} = 3 \\text{ cm.} \\\\\n&V_{max} = 3 (18 - 2(3))^2 = 432 \\text{ cm}^3. \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch3_29",
    "topic": "Maxima and Minima",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A manufacturer wishes to create an open box by cutting identical squares from the four corners of a 12 cm by 12 cm piece of cardboard and folding up the sides. Find the side length of the square cutout that maximizes the volume.",
    "answer": "2",
    "steps": "\\begin{aligned}\n&\\text{Let } x \\text{ be the side length of the cut squares. The resulting box dimensions are } ( 12-2x ) \\times ( 12-2x ) \\times x. \\\\\n&V(x) = x(12-2x)^2 \\\\\n&V'(x) = (12-2x)^2 + x \\cdot 2(12-2x)(-2) = (12-2x) [ (12-2x) - 4x ] \\\\\n&V'(x) = (12-2x)(12-6x) = 0. \\\\\n&\\text{Critical points: } x = 6 \\text{ (minimum, flat sheet) and } x = 2 \\text{ (maximum volume).} \\\\\n&\\text{Max Volume evaluated: } V(2) = 2 (8)^2 = 128 \\text{ cm}^3. \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For any square sheet of side } S \\text{, the derivative zeroes invariably scale such that the optimal cutout is exactly } \\frac{S}{6}. \\\\\n&\\text{Symmetric reduction identifies the maximum root strictly proportional to the geometry's boundary condition.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Given a larger square cardboard sheet of side } 18 \\text{ cm, calculate the maximum possible folded volume.} \\\\\n&\\text{Using optimized reduction: } x_{opt} = \\frac{18}{6} = 3 \\text{ cm.} \\\\\n&V_{max} = 3 (18 - 2(3))^2 = 432 \\text{ cm}^3. \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch3_30",
    "topic": "Maxima and Minima",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A manufacturer wishes to create an open box by cutting identical squares from the four corners of a 24 cm by 24 cm piece of cardboard and folding up the sides. Find the side length of the square cutout that maximizes the volume.",
    "answer": "4",
    "steps": "\\begin{aligned}\n&\\text{Let } x \\text{ be the side length of the cut squares. The resulting box dimensions are } ( 24-2x ) \\times ( 24-2x ) \\times x. \\\\\n&V(x) = x(24-2x)^2 \\\\\n&V'(x) = (24-2x)^2 + x \\cdot 2(24-2x)(-2) = (24-2x) [ (24-2x) - 4x ] \\\\\n&V'(x) = (24-2x)(24-6x) = 0. \\\\\n&\\text{Critical points: } x = 12 \\text{ (minimum, flat sheet) and } x = 4 \\text{ (maximum volume).} \\\\\n&\\text{Max Volume evaluated: } V(4) = 4 (16)^2 = 1024 \\text{ cm}^3. \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For any square sheet of side } S \\text{, the derivative zeroes invariably scale such that the optimal cutout is exactly } \\frac{S}{6}. \\\\\n&\\text{Symmetric reduction identifies the maximum root strictly proportional to the geometry's boundary condition.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Given a larger square cardboard sheet of side } 30 \\text{ cm, calculate the maximum possible folded volume.} \\\\\n&\\text{Using optimized reduction: } x_{opt} = \\frac{30}{6} = 5 \\text{ cm.} \\\\\n&V_{max} = 5 (30 - 2(5))^2 = 2000 \\text{ cm}^3. \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch3_31",
    "topic": "Maxima and Minima",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A manufacturer wishes to create an open box by cutting identical squares from the four corners of a 18 cm by 18 cm piece of cardboard and folding up the sides. Find the side length of the square cutout that maximizes the volume.",
    "answer": "3",
    "steps": "\\begin{aligned}\n&\\text{Let } x \\text{ be the side length of the cut squares. The resulting box dimensions are } ( 18-2x ) \\times ( 18-2x ) \\times x. \\\\\n&V(x) = x(18-2x)^2 \\\\\n&V'(x) = (18-2x)^2 + x \\cdot 2(18-2x)(-2) = (18-2x) [ (18-2x) - 4x ] \\\\\n&V'(x) = (18-2x)(18-6x) = 0. \\\\\n&\\text{Critical points: } x = 9 \\text{ (minimum, flat sheet) and } x = 3 \\text{ (maximum volume).} \\\\\n&\\text{Max Volume evaluated: } V(3) = 3 (12)^2 = 432 \\text{ cm}^3. \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For any square sheet of side } S \\text{, the derivative zeroes invariably scale such that the optimal cutout is exactly } \\frac{S}{6}. \\\\\n&\\text{Symmetric reduction identifies the maximum root strictly proportional to the geometry's boundary condition.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Given a larger square cardboard sheet of side } 24 \\text{ cm, calculate the maximum possible folded volume.} \\\\\n&\\text{Using optimized reduction: } x_{opt} = \\frac{24}{6} = 4 \\text{ cm.} \\\\\n&V_{max} = 4 (24 - 2(4))^2 = 1024 \\text{ cm}^3. \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch3_32",
    "topic": "Maxima and Minima",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A manufacturer wishes to create an open box by cutting identical squares from the four corners of a 36 cm by 36 cm piece of cardboard and folding up the sides. Find the side length of the square cutout that maximizes the volume.",
    "answer": "6",
    "steps": "\\begin{aligned}\n&\\text{Let } x \\text{ be the side length of the cut squares. The resulting box dimensions are } ( 36-2x ) \\times ( 36-2x ) \\times x. \\\\\n&V(x) = x(36-2x)^2 \\\\\n&V'(x) = (36-2x)^2 + x \\cdot 2(36-2x)(-2) = (36-2x) [ (36-2x) - 4x ] \\\\\n&V'(x) = (36-2x)(36-6x) = 0. \\\\\n&\\text{Critical points: } x = 18 \\text{ (minimum, flat sheet) and } x = 6 \\text{ (maximum volume).} \\\\\n&\\text{Max Volume evaluated: } V(6) = 6 (24)^2 = 3456 \\text{ cm}^3. \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For any square sheet of side } S \\text{, the derivative zeroes invariably scale such that the optimal cutout is exactly } \\frac{S}{6}. \\\\\n&\\text{Symmetric reduction identifies the maximum root strictly proportional to the geometry's boundary condition.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Given a larger square cardboard sheet of side } 42 \\text{ cm, calculate the maximum possible folded volume.} \\\\\n&\\text{Using optimized reduction: } x_{opt} = \\frac{42}{6} = 7 \\text{ cm.} \\\\\n&V_{max} = 7 (42 - 2(7))^2 = 5488 \\text{ cm}^3. \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch3_33",
    "topic": "Maxima and Minima",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A manufacturer wishes to create an open box by cutting identical squares from the four corners of a 24 cm by 24 cm piece of cardboard and folding up the sides. Find the side length of the square cutout that maximizes the volume.",
    "answer": "4",
    "steps": "\\begin{aligned}\n&\\text{Let } x \\text{ be the side length of the cut squares. The resulting box dimensions are } ( 24-2x ) \\times ( 24-2x ) \\times x. \\\\\n&V(x) = x(24-2x)^2 \\\\\n&V'(x) = (24-2x)^2 + x \\cdot 2(24-2x)(-2) = (24-2x) [ (24-2x) - 4x ] \\\\\n&V'(x) = (24-2x)(24-6x) = 0. \\\\\n&\\text{Critical points: } x = 12 \\text{ (minimum, flat sheet) and } x = 4 \\text{ (maximum volume).} \\\\\n&\\text{Max Volume evaluated: } V(4) = 4 (16)^2 = 1024 \\text{ cm}^3. \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For any square sheet of side } S \\text{, the derivative zeroes invariably scale such that the optimal cutout is exactly } \\frac{S}{6}. \\\\\n&\\text{Symmetric reduction identifies the maximum root strictly proportional to the geometry's boundary condition.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Given a larger square cardboard sheet of side } 30 \\text{ cm, calculate the maximum possible folded volume.} \\\\\n&\\text{Using optimized reduction: } x_{opt} = \\frac{30}{6} = 5 \\text{ cm.} \\\\\n&V_{max} = 5 (30 - 2(5))^2 = 2000 \\text{ cm}^3. \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch3_34",
    "topic": "Maxima and Minima",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A manufacturer wishes to create an open box by cutting identical squares from the four corners of a 48 cm by 48 cm piece of cardboard and folding up the sides. Find the side length of the square cutout that maximizes the volume.",
    "answer": "8",
    "steps": "\\begin{aligned}\n&\\text{Let } x \\text{ be the side length of the cut squares. The resulting box dimensions are } ( 48-2x ) \\times ( 48-2x ) \\times x. \\\\\n&V(x) = x(48-2x)^2 \\\\\n&V'(x) = (48-2x)^2 + x \\cdot 2(48-2x)(-2) = (48-2x) [ (48-2x) - 4x ] \\\\\n&V'(x) = (48-2x)(48-6x) = 0. \\\\\n&\\text{Critical points: } x = 24 \\text{ (minimum, flat sheet) and } x = 8 \\text{ (maximum volume).} \\\\\n&\\text{Max Volume evaluated: } V(8) = 8 (32)^2 = 8192 \\text{ cm}^3. \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For any square sheet of side } S \\text{, the derivative zeroes invariably scale such that the optimal cutout is exactly } \\frac{S}{6}. \\\\\n&\\text{Symmetric reduction identifies the maximum root strictly proportional to the geometry's boundary condition.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Given a larger square cardboard sheet of side } 54 \\text{ cm, calculate the maximum possible folded volume.} \\\\\n&\\text{Using optimized reduction: } x_{opt} = \\frac{54}{6} = 9 \\text{ cm.} \\\\\n&V_{max} = 9 (54 - 2(9))^2 = 11664 \\text{ cm}^3. \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch3_35",
    "topic": "Maxima and Minima",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A manufacturer wishes to create an open box by cutting identical squares from the four corners of a 30 cm by 30 cm piece of cardboard and folding up the sides. Find the side length of the square cutout that maximizes the volume.",
    "answer": "5",
    "steps": "\\begin{aligned}\n&\\text{Let } x \\text{ be the side length of the cut squares. The resulting box dimensions are } ( 30-2x ) \\times ( 30-2x ) \\times x. \\\\\n&V(x) = x(30-2x)^2 \\\\\n&V'(x) = (30-2x)^2 + x \\cdot 2(30-2x)(-2) = (30-2x) [ (30-2x) - 4x ] \\\\\n&V'(x) = (30-2x)(30-6x) = 0. \\\\\n&\\text{Critical points: } x = 15 \\text{ (minimum, flat sheet) and } x = 5 \\text{ (maximum volume).} \\\\\n&\\text{Max Volume evaluated: } V(5) = 5 (20)^2 = 2000 \\text{ cm}^3. \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For any square sheet of side } S \\text{, the derivative zeroes invariably scale such that the optimal cutout is exactly } \\frac{S}{6}. \\\\\n&\\text{Symmetric reduction identifies the maximum root strictly proportional to the geometry's boundary condition.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Given a larger square cardboard sheet of side } 36 \\text{ cm, calculate the maximum possible folded volume.} \\\\\n&\\text{Using optimized reduction: } x_{opt} = \\frac{36}{6} = 6 \\text{ cm.} \\\\\n&V_{max} = 6 (36 - 2(6))^2 = 3456 \\text{ cm}^3. \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch3_36",
    "topic": "Maxima and Minima",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A manufacturer wishes to create an open box by cutting identical squares from the four corners of a 60 cm by 60 cm piece of cardboard and folding up the sides. Find the side length of the square cutout that maximizes the volume.",
    "answer": "10",
    "steps": "\\begin{aligned}\n&\\text{Let } x \\text{ be the side length of the cut squares. The resulting box dimensions are } ( 60-2x ) \\times ( 60-2x ) \\times x. \\\\\n&V(x) = x(60-2x)^2 \\\\\n&V'(x) = (60-2x)^2 + x \\cdot 2(60-2x)(-2) = (60-2x) [ (60-2x) - 4x ] \\\\\n&V'(x) = (60-2x)(60-6x) = 0. \\\\\n&\\text{Critical points: } x = 30 \\text{ (minimum, flat sheet) and } x = 10 \\text{ (maximum volume).} \\\\\n&\\text{Max Volume evaluated: } V(10) = 10 (40)^2 = 16000 \\text{ cm}^3. \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For any square sheet of side } S \\text{, the derivative zeroes invariably scale such that the optimal cutout is exactly } \\frac{S}{6}. \\\\\n&\\text{Symmetric reduction identifies the maximum root strictly proportional to the geometry's boundary condition.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Given a larger square cardboard sheet of side } 66 \\text{ cm, calculate the maximum possible folded volume.} \\\\\n&\\text{Using optimized reduction: } x_{opt} = \\frac{66}{6} = 11 \\text{ cm.} \\\\\n&V_{max} = 11 (66 - 2(11))^2 = 21296 \\text{ cm}^3. \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch3_37",
    "topic": "Maxima and Minima",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A manufacturer wishes to create an open box by cutting identical squares from the four corners of a 36 cm by 36 cm piece of cardboard and folding up the sides. Find the side length of the square cutout that maximizes the volume.",
    "answer": "6",
    "steps": "\\begin{aligned}\n&\\text{Let } x \\text{ be the side length of the cut squares. The resulting box dimensions are } ( 36-2x ) \\times ( 36-2x ) \\times x. \\\\\n&V(x) = x(36-2x)^2 \\\\\n&V'(x) = (36-2x)^2 + x \\cdot 2(36-2x)(-2) = (36-2x) [ (36-2x) - 4x ] \\\\\n&V'(x) = (36-2x)(36-6x) = 0. \\\\\n&\\text{Critical points: } x = 18 \\text{ (minimum, flat sheet) and } x = 6 \\text{ (maximum volume).} \\\\\n&\\text{Max Volume evaluated: } V(6) = 6 (24)^2 = 3456 \\text{ cm}^3. \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For any square sheet of side } S \\text{, the derivative zeroes invariably scale such that the optimal cutout is exactly } \\frac{S}{6}. \\\\\n&\\text{Symmetric reduction identifies the maximum root strictly proportional to the geometry's boundary condition.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Given a larger square cardboard sheet of side } 42 \\text{ cm, calculate the maximum possible folded volume.} \\\\\n&\\text{Using optimized reduction: } x_{opt} = \\frac{42}{6} = 7 \\text{ cm.} \\\\\n&V_{max} = 7 (42 - 2(7))^2 = 5488 \\text{ cm}^3. \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch3_38",
    "topic": "Maxima and Minima",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A manufacturer wishes to create an open box by cutting identical squares from the four corners of a 72 cm by 72 cm piece of cardboard and folding up the sides. Find the side length of the square cutout that maximizes the volume.",
    "answer": "12",
    "steps": "\\begin{aligned}\n&\\text{Let } x \\text{ be the side length of the cut squares. The resulting box dimensions are } ( 72-2x ) \\times ( 72-2x ) \\times x. \\\\\n&V(x) = x(72-2x)^2 \\\\\n&V'(x) = (72-2x)^2 + x \\cdot 2(72-2x)(-2) = (72-2x) [ (72-2x) - 4x ] \\\\\n&V'(x) = (72-2x)(72-6x) = 0. \\\\\n&\\text{Critical points: } x = 36 \\text{ (minimum, flat sheet) and } x = 12 \\text{ (maximum volume).} \\\\\n&\\text{Max Volume evaluated: } V(12) = 12 (48)^2 = 27648 \\text{ cm}^3. \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For any square sheet of side } S \\text{, the derivative zeroes invariably scale such that the optimal cutout is exactly } \\frac{S}{6}. \\\\\n&\\text{Symmetric reduction identifies the maximum root strictly proportional to the geometry's boundary condition.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Given a larger square cardboard sheet of side } 78 \\text{ cm, calculate the maximum possible folded volume.} \\\\\n&\\text{Using optimized reduction: } x_{opt} = \\frac{78}{6} = 13 \\text{ cm.} \\\\\n&V_{max} = 13 (78 - 2(13))^2 = 35152 \\text{ cm}^3. \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch3_39",
    "topic": "Maxima and Minima",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A manufacturer wishes to create an open box by cutting identical squares from the four corners of a 42 cm by 42 cm piece of cardboard and folding up the sides. Find the side length of the square cutout that maximizes the volume.",
    "answer": "7",
    "steps": "\\begin{aligned}\n&\\text{Let } x \\text{ be the side length of the cut squares. The resulting box dimensions are } ( 42-2x ) \\times ( 42-2x ) \\times x. \\\\\n&V(x) = x(42-2x)^2 \\\\\n&V'(x) = (42-2x)^2 + x \\cdot 2(42-2x)(-2) = (42-2x) [ (42-2x) - 4x ] \\\\\n&V'(x) = (42-2x)(42-6x) = 0. \\\\\n&\\text{Critical points: } x = 21 \\text{ (minimum, flat sheet) and } x = 7 \\text{ (maximum volume).} \\\\\n&\\text{Max Volume evaluated: } V(7) = 7 (28)^2 = 5488 \\text{ cm}^3. \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For any square sheet of side } S \\text{, the derivative zeroes invariably scale such that the optimal cutout is exactly } \\frac{S}{6}. \\\\\n&\\text{Symmetric reduction identifies the maximum root strictly proportional to the geometry's boundary condition.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Given a larger square cardboard sheet of side } 48 \\text{ cm, calculate the maximum possible folded volume.} \\\\\n&\\text{Using optimized reduction: } x_{opt} = \\frac{48}{6} = 8 \\text{ cm.} \\\\\n&V_{max} = 8 (48 - 2(8))^2 = 8192 \\text{ cm}^3. \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch3_40",
    "topic": "Maxima and Minima",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A manufacturer wishes to create an open box by cutting identical squares from the four corners of a 84 cm by 84 cm piece of cardboard and folding up the sides. Find the side length of the square cutout that maximizes the volume.",
    "answer": "14",
    "steps": "\\begin{aligned}\n&\\text{Let } x \\text{ be the side length of the cut squares. The resulting box dimensions are } ( 84-2x ) \\times ( 84-2x ) \\times x. \\\\\n&V(x) = x(84-2x)^2 \\\\\n&V'(x) = (84-2x)^2 + x \\cdot 2(84-2x)(-2) = (84-2x) [ (84-2x) - 4x ] \\\\\n&V'(x) = (84-2x)(84-6x) = 0. \\\\\n&\\text{Critical points: } x = 42 \\text{ (minimum, flat sheet) and } x = 14 \\text{ (maximum volume).} \\\\\n&\\text{Max Volume evaluated: } V(14) = 14 (56)^2 = 43904 \\text{ cm}^3. \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For any square sheet of side } S \\text{, the derivative zeroes invariably scale such that the optimal cutout is exactly } \\frac{S}{6}. \\\\\n&\\text{Symmetric reduction identifies the maximum root strictly proportional to the geometry's boundary condition.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Given a larger square cardboard sheet of side } 90 \\text{ cm, calculate the maximum possible folded volume.} \\\\\n&\\text{Using optimized reduction: } x_{opt} = \\frac{90}{6} = 15 \\text{ cm.} \\\\\n&V_{max} = 15 (90 - 2(15))^2 = 54000 \\text{ cm}^3. \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch3_41",
    "topic": "Maxima and Minima",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A manufacturer wishes to create an open box by cutting identical squares from the four corners of a 60 cm by 60 cm piece of cardboard and folding up the sides. Find the side length of the square cutout that maximizes the volume.",
    "answer": "10",
    "steps": "\\begin{aligned}\n&\\text{Let } x \\text{ be the side length of the cut squares. The resulting box dimensions are } ( 60-2x ) \\times ( 60-2x ) \\times x. \\\\\n&V(x) = x(60-2x)^2 \\\\\n&V'(x) = (60-2x)^2 + x \\cdot 2(60-2x)(-2) = (60-2x) [ (60-2x) - 4x ] \\\\\n&V'(x) = (60-2x)(60-6x) = 0. \\\\\n&\\text{Critical points: } x = 30 \\text{ (minimum, flat sheet) and } x = 10 \\text{ (maximum volume).} \\\\\n&\\text{Max Volume evaluated: } V(10) = 10 (40)^2 = 16000 \\text{ cm}^3. \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For any square sheet of side } S \\text{, the derivative zeroes invariably scale such that the optimal cutout is exactly } \\frac{S}{6}. \\\\\n&\\text{Symmetric reduction identifies the maximum root strictly proportional to the geometry's boundary condition.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Given a larger square cardboard sheet of side } 66 \\text{ cm, calculate the maximum possible folded volume.} \\\\\n&\\text{Using optimized reduction: } x_{opt} = \\frac{66}{6} = 11 \\text{ cm.} \\\\\n&V_{max} = 11 (66 - 2(11))^2 = 21296 \\text{ cm}^3. \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch3_42",
    "topic": "Maxima and Minima",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A manufacturer wishes to create an open box by cutting identical squares from the four corners of a 120 cm by 120 cm piece of cardboard and folding up the sides. Find the side length of the square cutout that maximizes the volume.",
    "answer": "20",
    "steps": "\\begin{aligned}\n&\\text{Let } x \\text{ be the side length of the cut squares. The resulting box dimensions are } ( 120-2x ) \\times ( 120-2x ) \\times x. \\\\\n&V(x) = x(120-2x)^2 \\\\\n&V'(x) = (120-2x)^2 + x \\cdot 2(120-2x)(-2) = (120-2x) [ (120-2x) - 4x ] \\\\\n&V'(x) = (120-2x)(120-6x) = 0. \\\\\n&\\text{Critical points: } x = 60 \\text{ (minimum, flat sheet) and } x = 20 \\text{ (maximum volume).} \\\\\n&\\text{Max Volume evaluated: } V(20) = 20 (80)^2 = 128000 \\text{ cm}^3. \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For any square sheet of side } S \\text{, the derivative zeroes invariably scale such that the optimal cutout is exactly } \\frac{S}{6}. \\\\\n&\\text{Symmetric reduction identifies the maximum root strictly proportional to the geometry's boundary condition.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Given a larger square cardboard sheet of side } 126 \\text{ cm, calculate the maximum possible folded volume.} \\\\\n&\\text{Using optimized reduction: } x_{opt} = \\frac{126}{6} = 21 \\text{ cm.} \\\\\n&V_{max} = 21 (126 - 2(21))^2 = 148176 \\text{ cm}^3. \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch4_43",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A streetlamp is mounted atop a 15 ft pole. A person 5 ft tall walks away from the pole precisely at a speed of 2 ft/s sequentially strictly in a straight line. Determine the rate at which the tip of their shadow is moving.",
    "answer": "3",
    "steps": "\\begin{aligned}\n&\\text{Let } x \\text{ be the distance from the man to the pole, and } S \\text{ be the length of his shadow.} \\\\\n&\\text{Given: } \\frac{dx}{dt} = 2 \\text{ ft/s.} \\\\\n&\\text{By similar triangles linking the lamp tip, person tip, and shadow tip: } \\frac{S+x}{15} = \\frac{S}{5} \\\\\n&5S + 5x = 15S \\implies S(15 - 5) = 5x \\implies S = \\frac{5}{10}x. \\\\\n&\\text{Differentiating wrt time } t: \\frac{dS}{dt} = \\frac{5}{10} \\frac{dx}{dt} = \\frac{10}{10}. \\\\\n&\\text{The absolute tip position is } T = S + x, \\text{ so } \\frac{dT}{dt} = \\frac{dS}{dt} + \\frac{dx}{dt}. \\\\\n&\\frac{dT}{dt} = \\frac{10}{10} + 2 = \\frac{10 + 20}{10} = \\frac{30}{10} = 3 \\text{ ft/s.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{The kinematics of shadow projection linearly translate the origin walker's velocity } v \\text{ by the relative height ratio scalar. } \\\\\n&\\text{Velocity of the tip invariably evaluates exactly as } v_{tip} = v \\left(\\frac{H}{H-p}\\right). \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{If the lamp is raised to } 20 \\text{ ft and the person walks at } 3 \\text{ ft/s, what is the new rate of the shadow's tip?} \\\\\n&\\text{Utilizing geometric velocity mapping: } v_{tip} = 3 \\left(\\frac{20}{15}\\right) = 4 \\text{ ft/s.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch4_44",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A streetlamp is mounted atop a 15 ft pole. A person 5 ft tall walks away from the pole precisely at a speed of 3 ft/s sequentially strictly in a straight line. Determine the rate at which the tip of their shadow is moving.",
    "answer": "\\frac{9}{2}",
    "steps": "\\begin{aligned}\n&\\text{Let } x \\text{ be the distance from the man to the pole, and } S \\text{ be the length of his shadow.} \\\\\n&\\text{Given: } \\frac{dx}{dt} = 3 \\text{ ft/s.} \\\\\n&\\text{By similar triangles linking the lamp tip, person tip, and shadow tip: } \\frac{S+x}{15} = \\frac{S}{5} \\\\\n&5S + 5x = 15S \\implies S(15 - 5) = 5x \\implies S = \\frac{5}{10}x. \\\\\n&\\text{Differentiating wrt time } t: \\frac{dS}{dt} = \\frac{5}{10} \\frac{dx}{dt} = \\frac{15}{10}. \\\\\n&\\text{The absolute tip position is } T = S + x, \\text{ so } \\frac{dT}{dt} = \\frac{dS}{dt} + \\frac{dx}{dt}. \\\\\n&\\frac{dT}{dt} = \\frac{15}{10} + 3 = \\frac{15 + 30}{10} = \\frac{45}{10} = \\frac{9}{2} \\text{ ft/s.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{The kinematics of shadow projection linearly translate the origin walker's velocity } v \\text{ by the relative height ratio scalar. } \\\\\n&\\text{Velocity of the tip invariably evaluates exactly as } v_{tip} = v \\left(\\frac{H}{H-p}\\right). \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{If the lamp is raised to } 20 \\text{ ft and the person walks at } 4 \\text{ ft/s, what is the new rate of the shadow's tip?} \\\\\n&\\text{Utilizing geometric velocity mapping: } v_{tip} = 4 \\left(\\frac{20}{15}\\right) = \\frac{16}{3} \\text{ ft/s.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch4_45",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A streetlamp is mounted atop a 15 ft pole. A person 5 ft tall walks away from the pole precisely at a speed of 4 ft/s sequentially strictly in a straight line. Determine the rate at which the tip of their shadow is moving.",
    "answer": "6",
    "steps": "\\begin{aligned}\n&\\text{Let } x \\text{ be the distance from the man to the pole, and } S \\text{ be the length of his shadow.} \\\\\n&\\text{Given: } \\frac{dx}{dt} = 4 \\text{ ft/s.} \\\\\n&\\text{By similar triangles linking the lamp tip, person tip, and shadow tip: } \\frac{S+x}{15} = \\frac{S}{5} \\\\\n&5S + 5x = 15S \\implies S(15 - 5) = 5x \\implies S = \\frac{5}{10}x. \\\\\n&\\text{Differentiating wrt time } t: \\frac{dS}{dt} = \\frac{5}{10} \\frac{dx}{dt} = \\frac{20}{10}. \\\\\n&\\text{The absolute tip position is } T = S + x, \\text{ so } \\frac{dT}{dt} = \\frac{dS}{dt} + \\frac{dx}{dt}. \\\\\n&\\frac{dT}{dt} = \\frac{20}{10} + 4 = \\frac{20 + 40}{10} = \\frac{60}{10} = 6 \\text{ ft/s.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{The kinematics of shadow projection linearly translate the origin walker's velocity } v \\text{ by the relative height ratio scalar. } \\\\\n&\\text{Velocity of the tip invariably evaluates exactly as } v_{tip} = v \\left(\\frac{H}{H-p}\\right). \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{If the lamp is raised to } 20 \\text{ ft and the person walks at } 5 \\text{ ft/s, what is the new rate of the shadow's tip?} \\\\\n&\\text{Utilizing geometric velocity mapping: } v_{tip} = 5 \\left(\\frac{20}{15}\\right) = \\frac{20}{3} \\text{ ft/s.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch4_46",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A streetlamp is mounted atop a 15 ft pole. A person 6 ft tall walks away from the pole precisely at a speed of 2 ft/s sequentially strictly in a straight line. Determine the rate at which the tip of their shadow is moving.",
    "answer": "\\frac{10}{3}",
    "steps": "\\begin{aligned}\n&\\text{Let } x \\text{ be the distance from the man to the pole, and } S \\text{ be the length of his shadow.} \\\\\n&\\text{Given: } \\frac{dx}{dt} = 2 \\text{ ft/s.} \\\\\n&\\text{By similar triangles linking the lamp tip, person tip, and shadow tip: } \\frac{S+x}{15} = \\frac{S}{6} \\\\\n&6S + 6x = 15S \\implies S(15 - 6) = 6x \\implies S = \\frac{6}{9}x. \\\\\n&\\text{Differentiating wrt time } t: \\frac{dS}{dt} = \\frac{6}{9} \\frac{dx}{dt} = \\frac{12}{9}. \\\\\n&\\text{The absolute tip position is } T = S + x, \\text{ so } \\frac{dT}{dt} = \\frac{dS}{dt} + \\frac{dx}{dt}. \\\\\n&\\frac{dT}{dt} = \\frac{12}{9} + 2 = \\frac{12 + 18}{9} = \\frac{30}{9} = \\frac{10}{3} \\text{ ft/s.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{The kinematics of shadow projection linearly translate the origin walker's velocity } v \\text{ by the relative height ratio scalar. } \\\\\n&\\text{Velocity of the tip invariably evaluates exactly as } v_{tip} = v \\left(\\frac{H}{H-p}\\right). \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{If the lamp is raised to } 20 \\text{ ft and the person walks at } 3 \\text{ ft/s, what is the new rate of the shadow's tip?} \\\\\n&\\text{Utilizing geometric velocity mapping: } v_{tip} = 3 \\left(\\frac{20}{14}\\right) = \\frac{30}{7} \\text{ ft/s.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch4_47",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A streetlamp is mounted atop a 15 ft pole. A person 6 ft tall walks away from the pole precisely at a speed of 3 ft/s sequentially strictly in a straight line. Determine the rate at which the tip of their shadow is moving.",
    "answer": "5",
    "steps": "\\begin{aligned}\n&\\text{Let } x \\text{ be the distance from the man to the pole, and } S \\text{ be the length of his shadow.} \\\\\n&\\text{Given: } \\frac{dx}{dt} = 3 \\text{ ft/s.} \\\\\n&\\text{By similar triangles linking the lamp tip, person tip, and shadow tip: } \\frac{S+x}{15} = \\frac{S}{6} \\\\\n&6S + 6x = 15S \\implies S(15 - 6) = 6x \\implies S = \\frac{6}{9}x. \\\\\n&\\text{Differentiating wrt time } t: \\frac{dS}{dt} = \\frac{6}{9} \\frac{dx}{dt} = \\frac{18}{9}. \\\\\n&\\text{The absolute tip position is } T = S + x, \\text{ so } \\frac{dT}{dt} = \\frac{dS}{dt} + \\frac{dx}{dt}. \\\\\n&\\frac{dT}{dt} = \\frac{18}{9} + 3 = \\frac{18 + 27}{9} = \\frac{45}{9} = 5 \\text{ ft/s.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{The kinematics of shadow projection linearly translate the origin walker's velocity } v \\text{ by the relative height ratio scalar. } \\\\\n&\\text{Velocity of the tip invariably evaluates exactly as } v_{tip} = v \\left(\\frac{H}{H-p}\\right). \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{If the lamp is raised to } 20 \\text{ ft and the person walks at } 4 \\text{ ft/s, what is the new rate of the shadow's tip?} \\\\\n&\\text{Utilizing geometric velocity mapping: } v_{tip} = 4 \\left(\\frac{20}{14}\\right) = \\frac{40}{7} \\text{ ft/s.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch4_48",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A streetlamp is mounted atop a 15 ft pole. A person 6 ft tall walks away from the pole precisely at a speed of 4 ft/s sequentially strictly in a straight line. Determine the rate at which the tip of their shadow is moving.",
    "answer": "\\frac{20}{3}",
    "steps": "\\begin{aligned}\n&\\text{Let } x \\text{ be the distance from the man to the pole, and } S \\text{ be the length of his shadow.} \\\\\n&\\text{Given: } \\frac{dx}{dt} = 4 \\text{ ft/s.} \\\\\n&\\text{By similar triangles linking the lamp tip, person tip, and shadow tip: } \\frac{S+x}{15} = \\frac{S}{6} \\\\\n&6S + 6x = 15S \\implies S(15 - 6) = 6x \\implies S = \\frac{6}{9}x. \\\\\n&\\text{Differentiating wrt time } t: \\frac{dS}{dt} = \\frac{6}{9} \\frac{dx}{dt} = \\frac{24}{9}. \\\\\n&\\text{The absolute tip position is } T = S + x, \\text{ so } \\frac{dT}{dt} = \\frac{dS}{dt} + \\frac{dx}{dt}. \\\\\n&\\frac{dT}{dt} = \\frac{24}{9} + 4 = \\frac{24 + 36}{9} = \\frac{60}{9} = \\frac{20}{3} \\text{ ft/s.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{The kinematics of shadow projection linearly translate the origin walker's velocity } v \\text{ by the relative height ratio scalar. } \\\\\n&\\text{Velocity of the tip invariably evaluates exactly as } v_{tip} = v \\left(\\frac{H}{H-p}\\right). \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{If the lamp is raised to } 20 \\text{ ft and the person walks at } 5 \\text{ ft/s, what is the new rate of the shadow's tip?} \\\\\n&\\text{Utilizing geometric velocity mapping: } v_{tip} = 5 \\left(\\frac{20}{14}\\right) = \\frac{50}{7} \\text{ ft/s.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch4_49",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A streetlamp is mounted atop a 20 ft pole. A person 5 ft tall walks away from the pole precisely at a speed of 2 ft/s sequentially strictly in a straight line. Determine the rate at which the tip of their shadow is moving.",
    "answer": "\\frac{8}{3}",
    "steps": "\\begin{aligned}\n&\\text{Let } x \\text{ be the distance from the man to the pole, and } S \\text{ be the length of his shadow.} \\\\\n&\\text{Given: } \\frac{dx}{dt} = 2 \\text{ ft/s.} \\\\\n&\\text{By similar triangles linking the lamp tip, person tip, and shadow tip: } \\frac{S+x}{20} = \\frac{S}{5} \\\\\n&5S + 5x = 20S \\implies S(20 - 5) = 5x \\implies S = \\frac{5}{15}x. \\\\\n&\\text{Differentiating wrt time } t: \\frac{dS}{dt} = \\frac{5}{15} \\frac{dx}{dt} = \\frac{10}{15}. \\\\\n&\\text{The absolute tip position is } T = S + x, \\text{ so } \\frac{dT}{dt} = \\frac{dS}{dt} + \\frac{dx}{dt}. \\\\\n&\\frac{dT}{dt} = \\frac{10}{15} + 2 = \\frac{10 + 30}{15} = \\frac{40}{15} = \\frac{8}{3} \\text{ ft/s.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{The kinematics of shadow projection linearly translate the origin walker's velocity } v \\text{ by the relative height ratio scalar. } \\\\\n&\\text{Velocity of the tip invariably evaluates exactly as } v_{tip} = v \\left(\\frac{H}{H-p}\\right). \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{If the lamp is raised to } 25 \\text{ ft and the person walks at } 3 \\text{ ft/s, what is the new rate of the shadow's tip?} \\\\\n&\\text{Utilizing geometric velocity mapping: } v_{tip} = 3 \\left(\\frac{25}{20}\\right) = \\frac{15}{4} \\text{ ft/s.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch4_50",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A streetlamp is mounted atop a 20 ft pole. A person 5 ft tall walks away from the pole precisely at a speed of 3 ft/s sequentially strictly in a straight line. Determine the rate at which the tip of their shadow is moving.",
    "answer": "4",
    "steps": "\\begin{aligned}\n&\\text{Let } x \\text{ be the distance from the man to the pole, and } S \\text{ be the length of his shadow.} \\\\\n&\\text{Given: } \\frac{dx}{dt} = 3 \\text{ ft/s.} \\\\\n&\\text{By similar triangles linking the lamp tip, person tip, and shadow tip: } \\frac{S+x}{20} = \\frac{S}{5} \\\\\n&5S + 5x = 20S \\implies S(20 - 5) = 5x \\implies S = \\frac{5}{15}x. \\\\\n&\\text{Differentiating wrt time } t: \\frac{dS}{dt} = \\frac{5}{15} \\frac{dx}{dt} = \\frac{15}{15}. \\\\\n&\\text{The absolute tip position is } T = S + x, \\text{ so } \\frac{dT}{dt} = \\frac{dS}{dt} + \\frac{dx}{dt}. \\\\\n&\\frac{dT}{dt} = \\frac{15}{15} + 3 = \\frac{15 + 45}{15} = \\frac{60}{15} = 4 \\text{ ft/s.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{The kinematics of shadow projection linearly translate the origin walker's velocity } v \\text{ by the relative height ratio scalar. } \\\\\n&\\text{Velocity of the tip invariably evaluates exactly as } v_{tip} = v \\left(\\frac{H}{H-p}\\right). \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{If the lamp is raised to } 25 \\text{ ft and the person walks at } 4 \\text{ ft/s, what is the new rate of the shadow's tip?} \\\\\n&\\text{Utilizing geometric velocity mapping: } v_{tip} = 4 \\left(\\frac{25}{20}\\right) = 5 \\text{ ft/s.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch4_51",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A streetlamp is mounted atop a 20 ft pole. A person 5 ft tall walks away from the pole precisely at a speed of 4 ft/s sequentially strictly in a straight line. Determine the rate at which the tip of their shadow is moving.",
    "answer": "\\frac{16}{3}",
    "steps": "\\begin{aligned}\n&\\text{Let } x \\text{ be the distance from the man to the pole, and } S \\text{ be the length of his shadow.} \\\\\n&\\text{Given: } \\frac{dx}{dt} = 4 \\text{ ft/s.} \\\\\n&\\text{By similar triangles linking the lamp tip, person tip, and shadow tip: } \\frac{S+x}{20} = \\frac{S}{5} \\\\\n&5S + 5x = 20S \\implies S(20 - 5) = 5x \\implies S = \\frac{5}{15}x. \\\\\n&\\text{Differentiating wrt time } t: \\frac{dS}{dt} = \\frac{5}{15} \\frac{dx}{dt} = \\frac{20}{15}. \\\\\n&\\text{The absolute tip position is } T = S + x, \\text{ so } \\frac{dT}{dt} = \\frac{dS}{dt} + \\frac{dx}{dt}. \\\\\n&\\frac{dT}{dt} = \\frac{20}{15} + 4 = \\frac{20 + 60}{15} = \\frac{80}{15} = \\frac{16}{3} \\text{ ft/s.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{The kinematics of shadow projection linearly translate the origin walker's velocity } v \\text{ by the relative height ratio scalar. } \\\\\n&\\text{Velocity of the tip invariably evaluates exactly as } v_{tip} = v \\left(\\frac{H}{H-p}\\right). \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{If the lamp is raised to } 25 \\text{ ft and the person walks at } 5 \\text{ ft/s, what is the new rate of the shadow's tip?} \\\\\n&\\text{Utilizing geometric velocity mapping: } v_{tip} = 5 \\left(\\frac{25}{20}\\right) = \\frac{25}{4} \\text{ ft/s.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch4_52",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A streetlamp is mounted atop a 20 ft pole. A person 6 ft tall walks away from the pole precisely at a speed of 2 ft/s sequentially strictly in a straight line. Determine the rate at which the tip of their shadow is moving.",
    "answer": "\\frac{20}{7}",
    "steps": "\\begin{aligned}\n&\\text{Let } x \\text{ be the distance from the man to the pole, and } S \\text{ be the length of his shadow.} \\\\\n&\\text{Given: } \\frac{dx}{dt} = 2 \\text{ ft/s.} \\\\\n&\\text{By similar triangles linking the lamp tip, person tip, and shadow tip: } \\frac{S+x}{20} = \\frac{S}{6} \\\\\n&6S + 6x = 20S \\implies S(20 - 6) = 6x \\implies S = \\frac{6}{14}x. \\\\\n&\\text{Differentiating wrt time } t: \\frac{dS}{dt} = \\frac{6}{14} \\frac{dx}{dt} = \\frac{12}{14}. \\\\\n&\\text{The absolute tip position is } T = S + x, \\text{ so } \\frac{dT}{dt} = \\frac{dS}{dt} + \\frac{dx}{dt}. \\\\\n&\\frac{dT}{dt} = \\frac{12}{14} + 2 = \\frac{12 + 28}{14} = \\frac{40}{14} = \\frac{20}{7} \\text{ ft/s.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{The kinematics of shadow projection linearly translate the origin walker's velocity } v \\text{ by the relative height ratio scalar. } \\\\\n&\\text{Velocity of the tip invariably evaluates exactly as } v_{tip} = v \\left(\\frac{H}{H-p}\\right). \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{If the lamp is raised to } 25 \\text{ ft and the person walks at } 3 \\text{ ft/s, what is the new rate of the shadow's tip?} \\\\\n&\\text{Utilizing geometric velocity mapping: } v_{tip} = 3 \\left(\\frac{25}{19}\\right) = \\frac{75}{19} \\text{ ft/s.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch4_53",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A streetlamp is mounted atop a 20 ft pole. A person 6 ft tall walks away from the pole precisely at a speed of 3 ft/s sequentially strictly in a straight line. Determine the rate at which the tip of their shadow is moving.",
    "answer": "\\frac{30}{7}",
    "steps": "\\begin{aligned}\n&\\text{Let } x \\text{ be the distance from the man to the pole, and } S \\text{ be the length of his shadow.} \\\\\n&\\text{Given: } \\frac{dx}{dt} = 3 \\text{ ft/s.} \\\\\n&\\text{By similar triangles linking the lamp tip, person tip, and shadow tip: } \\frac{S+x}{20} = \\frac{S}{6} \\\\\n&6S + 6x = 20S \\implies S(20 - 6) = 6x \\implies S = \\frac{6}{14}x. \\\\\n&\\text{Differentiating wrt time } t: \\frac{dS}{dt} = \\frac{6}{14} \\frac{dx}{dt} = \\frac{18}{14}. \\\\\n&\\text{The absolute tip position is } T = S + x, \\text{ so } \\frac{dT}{dt} = \\frac{dS}{dt} + \\frac{dx}{dt}. \\\\\n&\\frac{dT}{dt} = \\frac{18}{14} + 3 = \\frac{18 + 42}{14} = \\frac{60}{14} = \\frac{30}{7} \\text{ ft/s.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{The kinematics of shadow projection linearly translate the origin walker's velocity } v \\text{ by the relative height ratio scalar. } \\\\\n&\\text{Velocity of the tip invariably evaluates exactly as } v_{tip} = v \\left(\\frac{H}{H-p}\\right). \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{If the lamp is raised to } 25 \\text{ ft and the person walks at } 4 \\text{ ft/s, what is the new rate of the shadow's tip?} \\\\\n&\\text{Utilizing geometric velocity mapping: } v_{tip} = 4 \\left(\\frac{25}{19}\\right) = \\frac{100}{19} \\text{ ft/s.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch4_54",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A streetlamp is mounted atop a 20 ft pole. A person 6 ft tall walks away from the pole precisely at a speed of 4 ft/s sequentially strictly in a straight line. Determine the rate at which the tip of their shadow is moving.",
    "answer": "\\frac{40}{7}",
    "steps": "\\begin{aligned}\n&\\text{Let } x \\text{ be the distance from the man to the pole, and } S \\text{ be the length of his shadow.} \\\\\n&\\text{Given: } \\frac{dx}{dt} = 4 \\text{ ft/s.} \\\\\n&\\text{By similar triangles linking the lamp tip, person tip, and shadow tip: } \\frac{S+x}{20} = \\frac{S}{6} \\\\\n&6S + 6x = 20S \\implies S(20 - 6) = 6x \\implies S = \\frac{6}{14}x. \\\\\n&\\text{Differentiating wrt time } t: \\frac{dS}{dt} = \\frac{6}{14} \\frac{dx}{dt} = \\frac{24}{14}. \\\\\n&\\text{The absolute tip position is } T = S + x, \\text{ so } \\frac{dT}{dt} = \\frac{dS}{dt} + \\frac{dx}{dt}. \\\\\n&\\frac{dT}{dt} = \\frac{24}{14} + 4 = \\frac{24 + 56}{14} = \\frac{80}{14} = \\frac{40}{7} \\text{ ft/s.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{The kinematics of shadow projection linearly translate the origin walker's velocity } v \\text{ by the relative height ratio scalar. } \\\\\n&\\text{Velocity of the tip invariably evaluates exactly as } v_{tip} = v \\left(\\frac{H}{H-p}\\right). \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{If the lamp is raised to } 25 \\text{ ft and the person walks at } 5 \\text{ ft/s, what is the new rate of the shadow's tip?} \\\\\n&\\text{Utilizing geometric velocity mapping: } v_{tip} = 5 \\left(\\frac{25}{19}\\right) = \\frac{125}{19} \\text{ ft/s.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch4_55",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A streetlamp is mounted atop a 25 ft pole. A person 5 ft tall walks away from the pole precisely at a speed of 2 ft/s sequentially strictly in a straight line. Determine the rate at which the tip of their shadow is moving.",
    "answer": "\\frac{5}{2}",
    "steps": "\\begin{aligned}\n&\\text{Let } x \\text{ be the distance from the man to the pole, and } S \\text{ be the length of his shadow.} \\\\\n&\\text{Given: } \\frac{dx}{dt} = 2 \\text{ ft/s.} \\\\\n&\\text{By similar triangles linking the lamp tip, person tip, and shadow tip: } \\frac{S+x}{25} = \\frac{S}{5} \\\\\n&5S + 5x = 25S \\implies S(25 - 5) = 5x \\implies S = \\frac{5}{20}x. \\\\\n&\\text{Differentiating wrt time } t: \\frac{dS}{dt} = \\frac{5}{20} \\frac{dx}{dt} = \\frac{10}{20}. \\\\\n&\\text{The absolute tip position is } T = S + x, \\text{ so } \\frac{dT}{dt} = \\frac{dS}{dt} + \\frac{dx}{dt}. \\\\\n&\\frac{dT}{dt} = \\frac{10}{20} + 2 = \\frac{10 + 40}{20} = \\frac{50}{20} = \\frac{5}{2} \\text{ ft/s.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{The kinematics of shadow projection linearly translate the origin walker's velocity } v \\text{ by the relative height ratio scalar. } \\\\\n&\\text{Velocity of the tip invariably evaluates exactly as } v_{tip} = v \\left(\\frac{H}{H-p}\\right). \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{If the lamp is raised to } 30 \\text{ ft and the person walks at } 3 \\text{ ft/s, what is the new rate of the shadow's tip?} \\\\\n&\\text{Utilizing geometric velocity mapping: } v_{tip} = 3 \\left(\\frac{30}{25}\\right) = \\frac{18}{5} \\text{ ft/s.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch4_56",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A streetlamp is mounted atop a 25 ft pole. A person 5 ft tall walks away from the pole precisely at a speed of 3 ft/s sequentially strictly in a straight line. Determine the rate at which the tip of their shadow is moving.",
    "answer": "\\frac{15}{4}",
    "steps": "\\begin{aligned}\n&\\text{Let } x \\text{ be the distance from the man to the pole, and } S \\text{ be the length of his shadow.} \\\\\n&\\text{Given: } \\frac{dx}{dt} = 3 \\text{ ft/s.} \\\\\n&\\text{By similar triangles linking the lamp tip, person tip, and shadow tip: } \\frac{S+x}{25} = \\frac{S}{5} \\\\\n&5S + 5x = 25S \\implies S(25 - 5) = 5x \\implies S = \\frac{5}{20}x. \\\\\n&\\text{Differentiating wrt time } t: \\frac{dS}{dt} = \\frac{5}{20} \\frac{dx}{dt} = \\frac{15}{20}. \\\\\n&\\text{The absolute tip position is } T = S + x, \\text{ so } \\frac{dT}{dt} = \\frac{dS}{dt} + \\frac{dx}{dt}. \\\\\n&\\frac{dT}{dt} = \\frac{15}{20} + 3 = \\frac{15 + 60}{20} = \\frac{75}{20} = \\frac{15}{4} \\text{ ft/s.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{The kinematics of shadow projection linearly translate the origin walker's velocity } v \\text{ by the relative height ratio scalar. } \\\\\n&\\text{Velocity of the tip invariably evaluates exactly as } v_{tip} = v \\left(\\frac{H}{H-p}\\right). \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{If the lamp is raised to } 30 \\text{ ft and the person walks at } 4 \\text{ ft/s, what is the new rate of the shadow's tip?} \\\\\n&\\text{Utilizing geometric velocity mapping: } v_{tip} = 4 \\left(\\frac{30}{25}\\right) = \\frac{24}{5} \\text{ ft/s.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch4_57",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A streetlamp is mounted atop a 25 ft pole. A person 5 ft tall walks away from the pole precisely at a speed of 4 ft/s sequentially strictly in a straight line. Determine the rate at which the tip of their shadow is moving.",
    "answer": "5",
    "steps": "\\begin{aligned}\n&\\text{Let } x \\text{ be the distance from the man to the pole, and } S \\text{ be the length of his shadow.} \\\\\n&\\text{Given: } \\frac{dx}{dt} = 4 \\text{ ft/s.} \\\\\n&\\text{By similar triangles linking the lamp tip, person tip, and shadow tip: } \\frac{S+x}{25} = \\frac{S}{5} \\\\\n&5S + 5x = 25S \\implies S(25 - 5) = 5x \\implies S = \\frac{5}{20}x. \\\\\n&\\text{Differentiating wrt time } t: \\frac{dS}{dt} = \\frac{5}{20} \\frac{dx}{dt} = \\frac{20}{20}. \\\\\n&\\text{The absolute tip position is } T = S + x, \\text{ so } \\frac{dT}{dt} = \\frac{dS}{dt} + \\frac{dx}{dt}. \\\\\n&\\frac{dT}{dt} = \\frac{20}{20} + 4 = \\frac{20 + 80}{20} = \\frac{100}{20} = 5 \\text{ ft/s.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{The kinematics of shadow projection linearly translate the origin walker's velocity } v \\text{ by the relative height ratio scalar. } \\\\\n&\\text{Velocity of the tip invariably evaluates exactly as } v_{tip} = v \\left(\\frac{H}{H-p}\\right). \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{If the lamp is raised to } 30 \\text{ ft and the person walks at } 5 \\text{ ft/s, what is the new rate of the shadow's tip?} \\\\\n&\\text{Utilizing geometric velocity mapping: } v_{tip} = 5 \\left(\\frac{30}{25}\\right) = 6 \\text{ ft/s.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch4_58",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A streetlamp is mounted atop a 25 ft pole. A person 6 ft tall walks away from the pole precisely at a speed of 2 ft/s sequentially strictly in a straight line. Determine the rate at which the tip of their shadow is moving.",
    "answer": "\\frac{50}{19}",
    "steps": "\\begin{aligned}\n&\\text{Let } x \\text{ be the distance from the man to the pole, and } S \\text{ be the length of his shadow.} \\\\\n&\\text{Given: } \\frac{dx}{dt} = 2 \\text{ ft/s.} \\\\\n&\\text{By similar triangles linking the lamp tip, person tip, and shadow tip: } \\frac{S+x}{25} = \\frac{S}{6} \\\\\n&6S + 6x = 25S \\implies S(25 - 6) = 6x \\implies S = \\frac{6}{19}x. \\\\\n&\\text{Differentiating wrt time } t: \\frac{dS}{dt} = \\frac{6}{19} \\frac{dx}{dt} = \\frac{12}{19}. \\\\\n&\\text{The absolute tip position is } T = S + x, \\text{ so } \\frac{dT}{dt} = \\frac{dS}{dt} + \\frac{dx}{dt}. \\\\\n&\\frac{dT}{dt} = \\frac{12}{19} + 2 = \\frac{12 + 38}{19} = \\frac{50}{19} = \\frac{50}{19} \\text{ ft/s.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{The kinematics of shadow projection linearly translate the origin walker's velocity } v \\text{ by the relative height ratio scalar. } \\\\\n&\\text{Velocity of the tip invariably evaluates exactly as } v_{tip} = v \\left(\\frac{H}{H-p}\\right). \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{If the lamp is raised to } 30 \\text{ ft and the person walks at } 3 \\text{ ft/s, what is the new rate of the shadow's tip?} \\\\\n&\\text{Utilizing geometric velocity mapping: } v_{tip} = 3 \\left(\\frac{30}{24}\\right) = \\frac{15}{4} \\text{ ft/s.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch4_59",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A streetlamp is mounted atop a 25 ft pole. A person 6 ft tall walks away from the pole precisely at a speed of 3 ft/s sequentially strictly in a straight line. Determine the rate at which the tip of their shadow is moving.",
    "answer": "\\frac{75}{19}",
    "steps": "\\begin{aligned}\n&\\text{Let } x \\text{ be the distance from the man to the pole, and } S \\text{ be the length of his shadow.} \\\\\n&\\text{Given: } \\frac{dx}{dt} = 3 \\text{ ft/s.} \\\\\n&\\text{By similar triangles linking the lamp tip, person tip, and shadow tip: } \\frac{S+x}{25} = \\frac{S}{6} \\\\\n&6S + 6x = 25S \\implies S(25 - 6) = 6x \\implies S = \\frac{6}{19}x. \\\\\n&\\text{Differentiating wrt time } t: \\frac{dS}{dt} = \\frac{6}{19} \\frac{dx}{dt} = \\frac{18}{19}. \\\\\n&\\text{The absolute tip position is } T = S + x, \\text{ so } \\frac{dT}{dt} = \\frac{dS}{dt} + \\frac{dx}{dt}. \\\\\n&\\frac{dT}{dt} = \\frac{18}{19} + 3 = \\frac{18 + 57}{19} = \\frac{75}{19} = \\frac{75}{19} \\text{ ft/s.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{The kinematics of shadow projection linearly translate the origin walker's velocity } v \\text{ by the relative height ratio scalar. } \\\\\n&\\text{Velocity of the tip invariably evaluates exactly as } v_{tip} = v \\left(\\frac{H}{H-p}\\right). \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{If the lamp is raised to } 30 \\text{ ft and the person walks at } 4 \\text{ ft/s, what is the new rate of the shadow's tip?} \\\\\n&\\text{Utilizing geometric velocity mapping: } v_{tip} = 4 \\left(\\frac{30}{24}\\right) = 5 \\text{ ft/s.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch4_60",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A streetlamp is mounted atop a 25 ft pole. A person 6 ft tall walks away from the pole precisely at a speed of 4 ft/s sequentially strictly in a straight line. Determine the rate at which the tip of their shadow is moving.",
    "answer": "\\frac{100}{19}",
    "steps": "\\begin{aligned}\n&\\text{Let } x \\text{ be the distance from the man to the pole, and } S \\text{ be the length of his shadow.} \\\\\n&\\text{Given: } \\frac{dx}{dt} = 4 \\text{ ft/s.} \\\\\n&\\text{By similar triangles linking the lamp tip, person tip, and shadow tip: } \\frac{S+x}{25} = \\frac{S}{6} \\\\\n&6S + 6x = 25S \\implies S(25 - 6) = 6x \\implies S = \\frac{6}{19}x. \\\\\n&\\text{Differentiating wrt time } t: \\frac{dS}{dt} = \\frac{6}{19} \\frac{dx}{dt} = \\frac{24}{19}. \\\\\n&\\text{The absolute tip position is } T = S + x, \\text{ so } \\frac{dT}{dt} = \\frac{dS}{dt} + \\frac{dx}{dt}. \\\\\n&\\frac{dT}{dt} = \\frac{24}{19} + 4 = \\frac{24 + 76}{19} = \\frac{100}{19} = \\frac{100}{19} \\text{ ft/s.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{The kinematics of shadow projection linearly translate the origin walker's velocity } v \\text{ by the relative height ratio scalar. } \\\\\n&\\text{Velocity of the tip invariably evaluates exactly as } v_{tip} = v \\left(\\frac{H}{H-p}\\right). \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{If the lamp is raised to } 30 \\text{ ft and the person walks at } 5 \\text{ ft/s, what is the new rate of the shadow's tip?} \\\\\n&\\text{Utilizing geometric velocity mapping: } v_{tip} = 5 \\left(\\frac{30}{24}\\right) = \\frac{25}{4} \\text{ ft/s.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch4_61",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A streetlamp is mounted atop a 30 ft pole. A person 5 ft tall walks away from the pole precisely at a speed of 2 ft/s sequentially strictly in a straight line. Determine the rate at which the tip of their shadow is moving.",
    "answer": "\\frac{12}{5}",
    "steps": "\\begin{aligned}\n&\\text{Let } x \\text{ be the distance from the man to the pole, and } S \\text{ be the length of his shadow.} \\\\\n&\\text{Given: } \\frac{dx}{dt} = 2 \\text{ ft/s.} \\\\\n&\\text{By similar triangles linking the lamp tip, person tip, and shadow tip: } \\frac{S+x}{30} = \\frac{S}{5} \\\\\n&5S + 5x = 30S \\implies S(30 - 5) = 5x \\implies S = \\frac{5}{25}x. \\\\\n&\\text{Differentiating wrt time } t: \\frac{dS}{dt} = \\frac{5}{25} \\frac{dx}{dt} = \\frac{10}{25}. \\\\\n&\\text{The absolute tip position is } T = S + x, \\text{ so } \\frac{dT}{dt} = \\frac{dS}{dt} + \\frac{dx}{dt}. \\\\\n&\\frac{dT}{dt} = \\frac{10}{25} + 2 = \\frac{10 + 50}{25} = \\frac{60}{25} = \\frac{12}{5} \\text{ ft/s.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{The kinematics of shadow projection linearly translate the origin walker's velocity } v \\text{ by the relative height ratio scalar. } \\\\\n&\\text{Velocity of the tip invariably evaluates exactly as } v_{tip} = v \\left(\\frac{H}{H-p}\\right). \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{If the lamp is raised to } 35 \\text{ ft and the person walks at } 3 \\text{ ft/s, what is the new rate of the shadow's tip?} \\\\\n&\\text{Utilizing geometric velocity mapping: } v_{tip} = 3 \\left(\\frac{35}{30}\\right) = \\frac{7}{2} \\text{ ft/s.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch4_62",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A streetlamp is mounted atop a 30 ft pole. A person 5 ft tall walks away from the pole precisely at a speed of 3 ft/s sequentially strictly in a straight line. Determine the rate at which the tip of their shadow is moving.",
    "answer": "\\frac{18}{5}",
    "steps": "\\begin{aligned}\n&\\text{Let } x \\text{ be the distance from the man to the pole, and } S \\text{ be the length of his shadow.} \\\\\n&\\text{Given: } \\frac{dx}{dt} = 3 \\text{ ft/s.} \\\\\n&\\text{By similar triangles linking the lamp tip, person tip, and shadow tip: } \\frac{S+x}{30} = \\frac{S}{5} \\\\\n&5S + 5x = 30S \\implies S(30 - 5) = 5x \\implies S = \\frac{5}{25}x. \\\\\n&\\text{Differentiating wrt time } t: \\frac{dS}{dt} = \\frac{5}{25} \\frac{dx}{dt} = \\frac{15}{25}. \\\\\n&\\text{The absolute tip position is } T = S + x, \\text{ so } \\frac{dT}{dt} = \\frac{dS}{dt} + \\frac{dx}{dt}. \\\\\n&\\frac{dT}{dt} = \\frac{15}{25} + 3 = \\frac{15 + 75}{25} = \\frac{90}{25} = \\frac{18}{5} \\text{ ft/s.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{The kinematics of shadow projection linearly translate the origin walker's velocity } v \\text{ by the relative height ratio scalar. } \\\\\n&\\text{Velocity of the tip invariably evaluates exactly as } v_{tip} = v \\left(\\frac{H}{H-p}\\right). \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{If the lamp is raised to } 35 \\text{ ft and the person walks at } 4 \\text{ ft/s, what is the new rate of the shadow's tip?} \\\\\n&\\text{Utilizing geometric velocity mapping: } v_{tip} = 4 \\left(\\frac{35}{30}\\right) = \\frac{14}{3} \\text{ ft/s.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch4_63",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A streetlamp is mounted atop a 30 ft pole. A person 5 ft tall walks away from the pole precisely at a speed of 4 ft/s sequentially strictly in a straight line. Determine the rate at which the tip of their shadow is moving.",
    "answer": "\\frac{24}{5}",
    "steps": "\\begin{aligned}\n&\\text{Let } x \\text{ be the distance from the man to the pole, and } S \\text{ be the length of his shadow.} \\\\\n&\\text{Given: } \\frac{dx}{dt} = 4 \\text{ ft/s.} \\\\\n&\\text{By similar triangles linking the lamp tip, person tip, and shadow tip: } \\frac{S+x}{30} = \\frac{S}{5} \\\\\n&5S + 5x = 30S \\implies S(30 - 5) = 5x \\implies S = \\frac{5}{25}x. \\\\\n&\\text{Differentiating wrt time } t: \\frac{dS}{dt} = \\frac{5}{25} \\frac{dx}{dt} = \\frac{20}{25}. \\\\\n&\\text{The absolute tip position is } T = S + x, \\text{ so } \\frac{dT}{dt} = \\frac{dS}{dt} + \\frac{dx}{dt}. \\\\\n&\\frac{dT}{dt} = \\frac{20}{25} + 4 = \\frac{20 + 100}{25} = \\frac{120}{25} = \\frac{24}{5} \\text{ ft/s.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{The kinematics of shadow projection linearly translate the origin walker's velocity } v \\text{ by the relative height ratio scalar. } \\\\\n&\\text{Velocity of the tip invariably evaluates exactly as } v_{tip} = v \\left(\\frac{H}{H-p}\\right). \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{If the lamp is raised to } 35 \\text{ ft and the person walks at } 5 \\text{ ft/s, what is the new rate of the shadow's tip?} \\\\\n&\\text{Utilizing geometric velocity mapping: } v_{tip} = 5 \\left(\\frac{35}{30}\\right) = \\frac{35}{6} \\text{ ft/s.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch4_64",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A streetlamp is mounted atop a 30 ft pole. A person 6 ft tall walks away from the pole precisely at a speed of 2 ft/s sequentially strictly in a straight line. Determine the rate at which the tip of their shadow is moving.",
    "answer": "\\frac{5}{2}",
    "steps": "\\begin{aligned}\n&\\text{Let } x \\text{ be the distance from the man to the pole, and } S \\text{ be the length of his shadow.} \\\\\n&\\text{Given: } \\frac{dx}{dt} = 2 \\text{ ft/s.} \\\\\n&\\text{By similar triangles linking the lamp tip, person tip, and shadow tip: } \\frac{S+x}{30} = \\frac{S}{6} \\\\\n&6S + 6x = 30S \\implies S(30 - 6) = 6x \\implies S = \\frac{6}{24}x. \\\\\n&\\text{Differentiating wrt time } t: \\frac{dS}{dt} = \\frac{6}{24} \\frac{dx}{dt} = \\frac{12}{24}. \\\\\n&\\text{The absolute tip position is } T = S + x, \\text{ so } \\frac{dT}{dt} = \\frac{dS}{dt} + \\frac{dx}{dt}. \\\\\n&\\frac{dT}{dt} = \\frac{12}{24} + 2 = \\frac{12 + 48}{24} = \\frac{60}{24} = \\frac{5}{2} \\text{ ft/s.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{The kinematics of shadow projection linearly translate the origin walker's velocity } v \\text{ by the relative height ratio scalar. } \\\\\n&\\text{Velocity of the tip invariably evaluates exactly as } v_{tip} = v \\left(\\frac{H}{H-p}\\right). \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{If the lamp is raised to } 35 \\text{ ft and the person walks at } 3 \\text{ ft/s, what is the new rate of the shadow's tip?} \\\\\n&\\text{Utilizing geometric velocity mapping: } v_{tip} = 3 \\left(\\frac{35}{29}\\right) = \\frac{105}{29} \\text{ ft/s.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch4_65",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A streetlamp is mounted atop a 30 ft pole. A person 6 ft tall walks away from the pole precisely at a speed of 3 ft/s sequentially strictly in a straight line. Determine the rate at which the tip of their shadow is moving.",
    "answer": "\\frac{15}{4}",
    "steps": "\\begin{aligned}\n&\\text{Let } x \\text{ be the distance from the man to the pole, and } S \\text{ be the length of his shadow.} \\\\\n&\\text{Given: } \\frac{dx}{dt} = 3 \\text{ ft/s.} \\\\\n&\\text{By similar triangles linking the lamp tip, person tip, and shadow tip: } \\frac{S+x}{30} = \\frac{S}{6} \\\\\n&6S + 6x = 30S \\implies S(30 - 6) = 6x \\implies S = \\frac{6}{24}x. \\\\\n&\\text{Differentiating wrt time } t: \\frac{dS}{dt} = \\frac{6}{24} \\frac{dx}{dt} = \\frac{18}{24}. \\\\\n&\\text{The absolute tip position is } T = S + x, \\text{ so } \\frac{dT}{dt} = \\frac{dS}{dt} + \\frac{dx}{dt}. \\\\\n&\\frac{dT}{dt} = \\frac{18}{24} + 3 = \\frac{18 + 72}{24} = \\frac{90}{24} = \\frac{15}{4} \\text{ ft/s.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{The kinematics of shadow projection linearly translate the origin walker's velocity } v \\text{ by the relative height ratio scalar. } \\\\\n&\\text{Velocity of the tip invariably evaluates exactly as } v_{tip} = v \\left(\\frac{H}{H-p}\\right). \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{If the lamp is raised to } 35 \\text{ ft and the person walks at } 4 \\text{ ft/s, what is the new rate of the shadow's tip?} \\\\\n&\\text{Utilizing geometric velocity mapping: } v_{tip} = 4 \\left(\\frac{35}{29}\\right) = \\frac{140}{29} \\text{ ft/s.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch4_66",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "A streetlamp is mounted atop a 30 ft pole. A person 6 ft tall walks away from the pole precisely at a speed of 4 ft/s sequentially strictly in a straight line. Determine the rate at which the tip of their shadow is moving.",
    "answer": "5",
    "steps": "\\begin{aligned}\n&\\text{Let } x \\text{ be the distance from the man to the pole, and } S \\text{ be the length of his shadow.} \\\\\n&\\text{Given: } \\frac{dx}{dt} = 4 \\text{ ft/s.} \\\\\n&\\text{By similar triangles linking the lamp tip, person tip, and shadow tip: } \\frac{S+x}{30} = \\frac{S}{6} \\\\\n&6S + 6x = 30S \\implies S(30 - 6) = 6x \\implies S = \\frac{6}{24}x. \\\\\n&\\text{Differentiating wrt time } t: \\frac{dS}{dt} = \\frac{6}{24} \\frac{dx}{dt} = \\frac{24}{24}. \\\\\n&\\text{The absolute tip position is } T = S + x, \\text{ so } \\frac{dT}{dt} = \\frac{dS}{dt} + \\frac{dx}{dt}. \\\\\n&\\frac{dT}{dt} = \\frac{24}{24} + 4 = \\frac{24 + 96}{24} = \\frac{120}{24} = 5 \\text{ ft/s.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{The kinematics of shadow projection linearly translate the origin walker's velocity } v \\text{ by the relative height ratio scalar. } \\\\\n&\\text{Velocity of the tip invariably evaluates exactly as } v_{tip} = v \\left(\\frac{H}{H-p}\\right). \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{If the lamp is raised to } 35 \\text{ ft and the person walks at } 5 \\text{ ft/s, what is the new rate of the shadow's tip?} \\\\\n&\\text{Utilizing geometric velocity mapping: } v_{tip} = 5 \\left(\\frac{35}{29}\\right) = \\frac{175}{29} \\text{ ft/s.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_67",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 4 m and altitude 10 m at a relentless constant rate of 2 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 2 m.",
    "answer": "\\frac{25}{8} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 2. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{4}{10} \\implies r = \\frac{4}{10}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{4}{10}h\\right)^2 h = \\frac{16\\pi}{300}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{16\\pi}{100} h^2 \\frac{dh}{dt} \\implies 2 = \\frac{16\\pi}{100} (2)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{200}{64\\pi} = \\frac{25}{8} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 3 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{200}{144\\pi} = \\frac{25}{18} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_68",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 4 m and altitude 10 m at a relentless constant rate of 2 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 4 m.",
    "answer": "\\frac{25}{32} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 2. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{4}{10} \\implies r = \\frac{4}{10}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{4}{10}h\\right)^2 h = \\frac{16\\pi}{300}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{16\\pi}{100} h^2 \\frac{dh}{dt} \\implies 2 = \\frac{16\\pi}{100} (4)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{200}{256\\pi} = \\frac{25}{32} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 5 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{200}{400\\pi} = \\frac{1}{2} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_69",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 4 m and altitude 10 m at a relentless constant rate of 2 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 5 m.",
    "answer": "\\frac{1}{2} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 2. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{4}{10} \\implies r = \\frac{4}{10}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{4}{10}h\\right)^2 h = \\frac{16\\pi}{300}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{16\\pi}{100} h^2 \\frac{dh}{dt} \\implies 2 = \\frac{16\\pi}{100} (5)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{200}{400\\pi} = \\frac{1}{2} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 6 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{200}{576\\pi} = \\frac{25}{72} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_70",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 4 m and altitude 10 m at a relentless constant rate of 3 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 2 m.",
    "answer": "\\frac{75}{16} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 3. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{4}{10} \\implies r = \\frac{4}{10}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{4}{10}h\\right)^2 h = \\frac{16\\pi}{300}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{16\\pi}{100} h^2 \\frac{dh}{dt} \\implies 3 = \\frac{16\\pi}{100} (2)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{300}{64\\pi} = \\frac{75}{16} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 3 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{300}{144\\pi} = \\frac{25}{12} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_71",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 4 m and altitude 10 m at a relentless constant rate of 3 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 4 m.",
    "answer": "\\frac{75}{64} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 3. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{4}{10} \\implies r = \\frac{4}{10}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{4}{10}h\\right)^2 h = \\frac{16\\pi}{300}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{16\\pi}{100} h^2 \\frac{dh}{dt} \\implies 3 = \\frac{16\\pi}{100} (4)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{300}{256\\pi} = \\frac{75}{64} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 5 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{300}{400\\pi} = \\frac{3}{4} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_72",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 4 m and altitude 10 m at a relentless constant rate of 3 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 5 m.",
    "answer": "\\frac{3}{4} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 3. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{4}{10} \\implies r = \\frac{4}{10}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{4}{10}h\\right)^2 h = \\frac{16\\pi}{300}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{16\\pi}{100} h^2 \\frac{dh}{dt} \\implies 3 = \\frac{16\\pi}{100} (5)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{300}{400\\pi} = \\frac{3}{4} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 6 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{300}{576\\pi} = \\frac{25}{48} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_73",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 4 m and altitude 10 m at a relentless constant rate of 4 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 2 m.",
    "answer": "\\frac{25}{4} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 4. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{4}{10} \\implies r = \\frac{4}{10}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{4}{10}h\\right)^2 h = \\frac{16\\pi}{300}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{16\\pi}{100} h^2 \\frac{dh}{dt} \\implies 4 = \\frac{16\\pi}{100} (2)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{400}{64\\pi} = \\frac{25}{4} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 3 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{400}{144\\pi} = \\frac{25}{9} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_74",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 4 m and altitude 10 m at a relentless constant rate of 4 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 4 m.",
    "answer": "\\frac{25}{16} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 4. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{4}{10} \\implies r = \\frac{4}{10}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{4}{10}h\\right)^2 h = \\frac{16\\pi}{300}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{16\\pi}{100} h^2 \\frac{dh}{dt} \\implies 4 = \\frac{16\\pi}{100} (4)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{400}{256\\pi} = \\frac{25}{16} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 5 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{400}{400\\pi} = 1 \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_75",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 4 m and altitude 10 m at a relentless constant rate of 4 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 5 m.",
    "answer": "1 \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 4. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{4}{10} \\implies r = \\frac{4}{10}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{4}{10}h\\right)^2 h = \\frac{16\\pi}{300}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{16\\pi}{100} h^2 \\frac{dh}{dt} \\implies 4 = \\frac{16\\pi}{100} (5)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{400}{400\\pi} = 1 \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 6 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{400}{576\\pi} = \\frac{25}{36} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_76",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 4 m and altitude 12 m at a relentless constant rate of 2 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 2 m.",
    "answer": "\\frac{9}{2} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 2. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{4}{12} \\implies r = \\frac{4}{12}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{4}{12}h\\right)^2 h = \\frac{16\\pi}{432}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{16\\pi}{144} h^2 \\frac{dh}{dt} \\implies 2 = \\frac{16\\pi}{144} (2)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{288}{64\\pi} = \\frac{9}{2} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 3 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{288}{144\\pi} = 2 \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_77",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 4 m and altitude 12 m at a relentless constant rate of 2 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 4 m.",
    "answer": "\\frac{9}{8} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 2. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{4}{12} \\implies r = \\frac{4}{12}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{4}{12}h\\right)^2 h = \\frac{16\\pi}{432}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{16\\pi}{144} h^2 \\frac{dh}{dt} \\implies 2 = \\frac{16\\pi}{144} (4)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{288}{256\\pi} = \\frac{9}{8} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 5 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{288}{400\\pi} = \\frac{18}{25} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_78",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 4 m and altitude 12 m at a relentless constant rate of 2 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 5 m.",
    "answer": "\\frac{18}{25} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 2. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{4}{12} \\implies r = \\frac{4}{12}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{4}{12}h\\right)^2 h = \\frac{16\\pi}{432}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{16\\pi}{144} h^2 \\frac{dh}{dt} \\implies 2 = \\frac{16\\pi}{144} (5)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{288}{400\\pi} = \\frac{18}{25} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 6 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{288}{576\\pi} = \\frac{1}{2} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_79",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 4 m and altitude 12 m at a relentless constant rate of 3 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 2 m.",
    "answer": "\\frac{27}{4} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 3. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{4}{12} \\implies r = \\frac{4}{12}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{4}{12}h\\right)^2 h = \\frac{16\\pi}{432}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{16\\pi}{144} h^2 \\frac{dh}{dt} \\implies 3 = \\frac{16\\pi}{144} (2)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{432}{64\\pi} = \\frac{27}{4} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 3 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{432}{144\\pi} = 3 \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_80",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 4 m and altitude 12 m at a relentless constant rate of 3 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 4 m.",
    "answer": "\\frac{27}{16} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 3. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{4}{12} \\implies r = \\frac{4}{12}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{4}{12}h\\right)^2 h = \\frac{16\\pi}{432}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{16\\pi}{144} h^2 \\frac{dh}{dt} \\implies 3 = \\frac{16\\pi}{144} (4)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{432}{256\\pi} = \\frac{27}{16} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 5 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{432}{400\\pi} = \\frac{27}{25} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_81",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 4 m and altitude 12 m at a relentless constant rate of 3 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 5 m.",
    "answer": "\\frac{27}{25} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 3. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{4}{12} \\implies r = \\frac{4}{12}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{4}{12}h\\right)^2 h = \\frac{16\\pi}{432}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{16\\pi}{144} h^2 \\frac{dh}{dt} \\implies 3 = \\frac{16\\pi}{144} (5)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{432}{400\\pi} = \\frac{27}{25} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 6 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{432}{576\\pi} = \\frac{3}{4} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_82",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 4 m and altitude 12 m at a relentless constant rate of 4 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 2 m.",
    "answer": "9 \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 4. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{4}{12} \\implies r = \\frac{4}{12}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{4}{12}h\\right)^2 h = \\frac{16\\pi}{432}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{16\\pi}{144} h^2 \\frac{dh}{dt} \\implies 4 = \\frac{16\\pi}{144} (2)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{576}{64\\pi} = 9 \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 3 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{576}{144\\pi} = 4 \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_83",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 4 m and altitude 12 m at a relentless constant rate of 4 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 4 m.",
    "answer": "\\frac{9}{4} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 4. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{4}{12} \\implies r = \\frac{4}{12}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{4}{12}h\\right)^2 h = \\frac{16\\pi}{432}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{16\\pi}{144} h^2 \\frac{dh}{dt} \\implies 4 = \\frac{16\\pi}{144} (4)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{576}{256\\pi} = \\frac{9}{4} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 5 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{576}{400\\pi} = \\frac{36}{25} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_84",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 4 m and altitude 12 m at a relentless constant rate of 4 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 5 m.",
    "answer": "\\frac{36}{25} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 4. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{4}{12} \\implies r = \\frac{4}{12}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{4}{12}h\\right)^2 h = \\frac{16\\pi}{432}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{16\\pi}{144} h^2 \\frac{dh}{dt} \\implies 4 = \\frac{16\\pi}{144} (5)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{576}{400\\pi} = \\frac{36}{25} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 6 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{576}{576\\pi} = 1 \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_85",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 4 m and altitude 15 m at a relentless constant rate of 2 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 2 m.",
    "answer": "\\frac{225}{32} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 2. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{4}{15} \\implies r = \\frac{4}{15}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{4}{15}h\\right)^2 h = \\frac{16\\pi}{675}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{16\\pi}{225} h^2 \\frac{dh}{dt} \\implies 2 = \\frac{16\\pi}{225} (2)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{450}{64\\pi} = \\frac{225}{32} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 3 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{450}{144\\pi} = \\frac{25}{8} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_86",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 4 m and altitude 15 m at a relentless constant rate of 2 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 4 m.",
    "answer": "\\frac{225}{128} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 2. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{4}{15} \\implies r = \\frac{4}{15}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{4}{15}h\\right)^2 h = \\frac{16\\pi}{675}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{16\\pi}{225} h^2 \\frac{dh}{dt} \\implies 2 = \\frac{16\\pi}{225} (4)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{450}{256\\pi} = \\frac{225}{128} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 5 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{450}{400\\pi} = \\frac{9}{8} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_87",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 4 m and altitude 15 m at a relentless constant rate of 2 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 5 m.",
    "answer": "\\frac{9}{8} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 2. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{4}{15} \\implies r = \\frac{4}{15}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{4}{15}h\\right)^2 h = \\frac{16\\pi}{675}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{16\\pi}{225} h^2 \\frac{dh}{dt} \\implies 2 = \\frac{16\\pi}{225} (5)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{450}{400\\pi} = \\frac{9}{8} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 6 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{450}{576\\pi} = \\frac{25}{32} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_88",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 4 m and altitude 15 m at a relentless constant rate of 3 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 2 m.",
    "answer": "\\frac{675}{64} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 3. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{4}{15} \\implies r = \\frac{4}{15}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{4}{15}h\\right)^2 h = \\frac{16\\pi}{675}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{16\\pi}{225} h^2 \\frac{dh}{dt} \\implies 3 = \\frac{16\\pi}{225} (2)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{675}{64\\pi} = \\frac{675}{64} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 3 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{675}{144\\pi} = \\frac{75}{16} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_89",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 4 m and altitude 15 m at a relentless constant rate of 3 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 4 m.",
    "answer": "\\frac{675}{256} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 3. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{4}{15} \\implies r = \\frac{4}{15}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{4}{15}h\\right)^2 h = \\frac{16\\pi}{675}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{16\\pi}{225} h^2 \\frac{dh}{dt} \\implies 3 = \\frac{16\\pi}{225} (4)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{675}{256\\pi} = \\frac{675}{256} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 5 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{675}{400\\pi} = \\frac{27}{16} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_90",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 4 m and altitude 15 m at a relentless constant rate of 3 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 5 m.",
    "answer": "\\frac{27}{16} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 3. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{4}{15} \\implies r = \\frac{4}{15}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{4}{15}h\\right)^2 h = \\frac{16\\pi}{675}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{16\\pi}{225} h^2 \\frac{dh}{dt} \\implies 3 = \\frac{16\\pi}{225} (5)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{675}{400\\pi} = \\frac{27}{16} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 6 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{675}{576\\pi} = \\frac{75}{64} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_91",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 4 m and altitude 15 m at a relentless constant rate of 4 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 2 m.",
    "answer": "\\frac{225}{16} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 4. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{4}{15} \\implies r = \\frac{4}{15}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{4}{15}h\\right)^2 h = \\frac{16\\pi}{675}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{16\\pi}{225} h^2 \\frac{dh}{dt} \\implies 4 = \\frac{16\\pi}{225} (2)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{900}{64\\pi} = \\frac{225}{16} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 3 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{900}{144\\pi} = \\frac{25}{4} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_92",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 4 m and altitude 15 m at a relentless constant rate of 4 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 4 m.",
    "answer": "\\frac{225}{64} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 4. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{4}{15} \\implies r = \\frac{4}{15}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{4}{15}h\\right)^2 h = \\frac{16\\pi}{675}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{16\\pi}{225} h^2 \\frac{dh}{dt} \\implies 4 = \\frac{16\\pi}{225} (4)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{900}{256\\pi} = \\frac{225}{64} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 5 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{900}{400\\pi} = \\frac{9}{4} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_93",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 4 m and altitude 15 m at a relentless constant rate of 4 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 5 m.",
    "answer": "\\frac{9}{4} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 4. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{4}{15} \\implies r = \\frac{4}{15}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{4}{15}h\\right)^2 h = \\frac{16\\pi}{675}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{16\\pi}{225} h^2 \\frac{dh}{dt} \\implies 4 = \\frac{16\\pi}{225} (5)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{900}{400\\pi} = \\frac{9}{4} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 6 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{900}{576\\pi} = \\frac{25}{16} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_94",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 5 m and altitude 10 m at a relentless constant rate of 2 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 2 m.",
    "answer": "2 \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 2. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{5}{10} \\implies r = \\frac{5}{10}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{5}{10}h\\right)^2 h = \\frac{25\\pi}{300}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{25\\pi}{100} h^2 \\frac{dh}{dt} \\implies 2 = \\frac{25\\pi}{100} (2)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{200}{100\\pi} = 2 \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 3 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{200}{225\\pi} = \\frac{8}{9} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_95",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 5 m and altitude 10 m at a relentless constant rate of 2 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 4 m.",
    "answer": "\\frac{1}{2} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 2. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{5}{10} \\implies r = \\frac{5}{10}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{5}{10}h\\right)^2 h = \\frac{25\\pi}{300}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{25\\pi}{100} h^2 \\frac{dh}{dt} \\implies 2 = \\frac{25\\pi}{100} (4)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{200}{400\\pi} = \\frac{1}{2} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 5 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{200}{625\\pi} = \\frac{8}{25} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_96",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 5 m and altitude 10 m at a relentless constant rate of 2 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 5 m.",
    "answer": "\\frac{8}{25} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 2. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{5}{10} \\implies r = \\frac{5}{10}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{5}{10}h\\right)^2 h = \\frac{25\\pi}{300}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{25\\pi}{100} h^2 \\frac{dh}{dt} \\implies 2 = \\frac{25\\pi}{100} (5)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{200}{625\\pi} = \\frac{8}{25} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 6 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{200}{900\\pi} = \\frac{2}{9} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_97",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 5 m and altitude 10 m at a relentless constant rate of 3 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 2 m.",
    "answer": "3 \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 3. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{5}{10} \\implies r = \\frac{5}{10}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{5}{10}h\\right)^2 h = \\frac{25\\pi}{300}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{25\\pi}{100} h^2 \\frac{dh}{dt} \\implies 3 = \\frac{25\\pi}{100} (2)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{300}{100\\pi} = 3 \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 3 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{300}{225\\pi} = \\frac{4}{3} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_98",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 5 m and altitude 10 m at a relentless constant rate of 3 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 4 m.",
    "answer": "\\frac{3}{4} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 3. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{5}{10} \\implies r = \\frac{5}{10}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{5}{10}h\\right)^2 h = \\frac{25\\pi}{300}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{25\\pi}{100} h^2 \\frac{dh}{dt} \\implies 3 = \\frac{25\\pi}{100} (4)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{300}{400\\pi} = \\frac{3}{4} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 5 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{300}{625\\pi} = \\frac{12}{25} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_99",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 5 m and altitude 10 m at a relentless constant rate of 3 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 5 m.",
    "answer": "\\frac{12}{25} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 3. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{5}{10} \\implies r = \\frac{5}{10}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{5}{10}h\\right)^2 h = \\frac{25\\pi}{300}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{25\\pi}{100} h^2 \\frac{dh}{dt} \\implies 3 = \\frac{25\\pi}{100} (5)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{300}{625\\pi} = \\frac{12}{25} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 6 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{300}{900\\pi} = \\frac{1}{3} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_100",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 5 m and altitude 10 m at a relentless constant rate of 4 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 2 m.",
    "answer": "4 \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 4. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{5}{10} \\implies r = \\frac{5}{10}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{5}{10}h\\right)^2 h = \\frac{25\\pi}{300}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{25\\pi}{100} h^2 \\frac{dh}{dt} \\implies 4 = \\frac{25\\pi}{100} (2)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{400}{100\\pi} = 4 \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 3 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{400}{225\\pi} = \\frac{16}{9} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_101",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 5 m and altitude 10 m at a relentless constant rate of 4 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 4 m.",
    "answer": "1 \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 4. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{5}{10} \\implies r = \\frac{5}{10}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{5}{10}h\\right)^2 h = \\frac{25\\pi}{300}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{25\\pi}{100} h^2 \\frac{dh}{dt} \\implies 4 = \\frac{25\\pi}{100} (4)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{400}{400\\pi} = 1 \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 5 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{400}{625\\pi} = \\frac{16}{25} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_102",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 5 m and altitude 10 m at a relentless constant rate of 4 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 5 m.",
    "answer": "\\frac{16}{25} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 4. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{5}{10} \\implies r = \\frac{5}{10}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{5}{10}h\\right)^2 h = \\frac{25\\pi}{300}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{25\\pi}{100} h^2 \\frac{dh}{dt} \\implies 4 = \\frac{25\\pi}{100} (5)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{400}{625\\pi} = \\frac{16}{25} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 6 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{400}{900\\pi} = \\frac{4}{9} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_103",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 5 m and altitude 12 m at a relentless constant rate of 2 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 2 m.",
    "answer": "\\frac{72}{25} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 2. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{5}{12} \\implies r = \\frac{5}{12}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{5}{12}h\\right)^2 h = \\frac{25\\pi}{432}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{25\\pi}{144} h^2 \\frac{dh}{dt} \\implies 2 = \\frac{25\\pi}{144} (2)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{288}{100\\pi} = \\frac{72}{25} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 3 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{288}{225\\pi} = \\frac{32}{25} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_104",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 5 m and altitude 12 m at a relentless constant rate of 2 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 4 m.",
    "answer": "\\frac{18}{25} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 2. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{5}{12} \\implies r = \\frac{5}{12}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{5}{12}h\\right)^2 h = \\frac{25\\pi}{432}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{25\\pi}{144} h^2 \\frac{dh}{dt} \\implies 2 = \\frac{25\\pi}{144} (4)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{288}{400\\pi} = \\frac{18}{25} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 5 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{288}{625\\pi} = \\frac{288}{625} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_105",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 5 m and altitude 12 m at a relentless constant rate of 2 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 5 m.",
    "answer": "\\frac{288}{625} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 2. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{5}{12} \\implies r = \\frac{5}{12}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{5}{12}h\\right)^2 h = \\frac{25\\pi}{432}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{25\\pi}{144} h^2 \\frac{dh}{dt} \\implies 2 = \\frac{25\\pi}{144} (5)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{288}{625\\pi} = \\frac{288}{625} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 6 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{288}{900\\pi} = \\frac{8}{25} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_106",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 5 m and altitude 12 m at a relentless constant rate of 3 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 2 m.",
    "answer": "\\frac{108}{25} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 3. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{5}{12} \\implies r = \\frac{5}{12}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{5}{12}h\\right)^2 h = \\frac{25\\pi}{432}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{25\\pi}{144} h^2 \\frac{dh}{dt} \\implies 3 = \\frac{25\\pi}{144} (2)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{432}{100\\pi} = \\frac{108}{25} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 3 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{432}{225\\pi} = \\frac{48}{25} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_107",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 5 m and altitude 12 m at a relentless constant rate of 3 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 4 m.",
    "answer": "\\frac{27}{25} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 3. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{5}{12} \\implies r = \\frac{5}{12}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{5}{12}h\\right)^2 h = \\frac{25\\pi}{432}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{25\\pi}{144} h^2 \\frac{dh}{dt} \\implies 3 = \\frac{25\\pi}{144} (4)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{432}{400\\pi} = \\frac{27}{25} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 5 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{432}{625\\pi} = \\frac{432}{625} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_108",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 5 m and altitude 12 m at a relentless constant rate of 3 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 5 m.",
    "answer": "\\frac{432}{625} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 3. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{5}{12} \\implies r = \\frac{5}{12}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{5}{12}h\\right)^2 h = \\frac{25\\pi}{432}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{25\\pi}{144} h^2 \\frac{dh}{dt} \\implies 3 = \\frac{25\\pi}{144} (5)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{432}{625\\pi} = \\frac{432}{625} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 6 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{432}{900\\pi} = \\frac{12}{25} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_109",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 5 m and altitude 12 m at a relentless constant rate of 4 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 2 m.",
    "answer": "\\frac{144}{25} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 4. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{5}{12} \\implies r = \\frac{5}{12}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{5}{12}h\\right)^2 h = \\frac{25\\pi}{432}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{25\\pi}{144} h^2 \\frac{dh}{dt} \\implies 4 = \\frac{25\\pi}{144} (2)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{576}{100\\pi} = \\frac{144}{25} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 3 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{576}{225\\pi} = \\frac{64}{25} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_110",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 5 m and altitude 12 m at a relentless constant rate of 4 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 4 m.",
    "answer": "\\frac{36}{25} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 4. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{5}{12} \\implies r = \\frac{5}{12}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{5}{12}h\\right)^2 h = \\frac{25\\pi}{432}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{25\\pi}{144} h^2 \\frac{dh}{dt} \\implies 4 = \\frac{25\\pi}{144} (4)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{576}{400\\pi} = \\frac{36}{25} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 5 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{576}{625\\pi} = \\frac{576}{625} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_111",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 5 m and altitude 12 m at a relentless constant rate of 4 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 5 m.",
    "answer": "\\frac{576}{625} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 4. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{5}{12} \\implies r = \\frac{5}{12}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{5}{12}h\\right)^2 h = \\frac{25\\pi}{432}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{25\\pi}{144} h^2 \\frac{dh}{dt} \\implies 4 = \\frac{25\\pi}{144} (5)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{576}{625\\pi} = \\frac{576}{625} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 6 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{576}{900\\pi} = \\frac{16}{25} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_112",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 5 m and altitude 15 m at a relentless constant rate of 2 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 2 m.",
    "answer": "\\frac{9}{2} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 2. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{5}{15} \\implies r = \\frac{5}{15}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{5}{15}h\\right)^2 h = \\frac{25\\pi}{675}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{25\\pi}{225} h^2 \\frac{dh}{dt} \\implies 2 = \\frac{25\\pi}{225} (2)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{450}{100\\pi} = \\frac{9}{2} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 3 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{450}{225\\pi} = 2 \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_113",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 5 m and altitude 15 m at a relentless constant rate of 2 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 4 m.",
    "answer": "\\frac{9}{8} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 2. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{5}{15} \\implies r = \\frac{5}{15}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{5}{15}h\\right)^2 h = \\frac{25\\pi}{675}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{25\\pi}{225} h^2 \\frac{dh}{dt} \\implies 2 = \\frac{25\\pi}{225} (4)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{450}{400\\pi} = \\frac{9}{8} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 5 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{450}{625\\pi} = \\frac{18}{25} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_114",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 5 m and altitude 15 m at a relentless constant rate of 2 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 5 m.",
    "answer": "\\frac{18}{25} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 2. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{5}{15} \\implies r = \\frac{5}{15}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{5}{15}h\\right)^2 h = \\frac{25\\pi}{675}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{25\\pi}{225} h^2 \\frac{dh}{dt} \\implies 2 = \\frac{25\\pi}{225} (5)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{450}{625\\pi} = \\frac{18}{25} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 6 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{450}{900\\pi} = \\frac{1}{2} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_115",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 5 m and altitude 15 m at a relentless constant rate of 3 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 2 m.",
    "answer": "\\frac{27}{4} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 3. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{5}{15} \\implies r = \\frac{5}{15}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{5}{15}h\\right)^2 h = \\frac{25\\pi}{675}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{25\\pi}{225} h^2 \\frac{dh}{dt} \\implies 3 = \\frac{25\\pi}{225} (2)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{675}{100\\pi} = \\frac{27}{4} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 3 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{675}{225\\pi} = 3 \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_116",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 5 m and altitude 15 m at a relentless constant rate of 3 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 4 m.",
    "answer": "\\frac{27}{16} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 3. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{5}{15} \\implies r = \\frac{5}{15}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{5}{15}h\\right)^2 h = \\frac{25\\pi}{675}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{25\\pi}{225} h^2 \\frac{dh}{dt} \\implies 3 = \\frac{25\\pi}{225} (4)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{675}{400\\pi} = \\frac{27}{16} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 5 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{675}{625\\pi} = \\frac{27}{25} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_117",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 5 m and altitude 15 m at a relentless constant rate of 3 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 5 m.",
    "answer": "\\frac{27}{25} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 3. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{5}{15} \\implies r = \\frac{5}{15}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{5}{15}h\\right)^2 h = \\frac{25\\pi}{675}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{25\\pi}{225} h^2 \\frac{dh}{dt} \\implies 3 = \\frac{25\\pi}{225} (5)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{675}{625\\pi} = \\frac{27}{25} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 6 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{675}{900\\pi} = \\frac{3}{4} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_118",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 5 m and altitude 15 m at a relentless constant rate of 4 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 2 m.",
    "answer": "9 \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 4. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{5}{15} \\implies r = \\frac{5}{15}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{5}{15}h\\right)^2 h = \\frac{25\\pi}{675}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{25\\pi}{225} h^2 \\frac{dh}{dt} \\implies 4 = \\frac{25\\pi}{225} (2)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{900}{100\\pi} = 9 \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 3 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{900}{225\\pi} = 4 \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_119",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 5 m and altitude 15 m at a relentless constant rate of 4 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 4 m.",
    "answer": "\\frac{9}{4} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 4. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{5}{15} \\implies r = \\frac{5}{15}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{5}{15}h\\right)^2 h = \\frac{25\\pi}{675}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{25\\pi}{225} h^2 \\frac{dh}{dt} \\implies 4 = \\frac{25\\pi}{225} (4)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{900}{400\\pi} = \\frac{9}{4} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 5 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{900}{625\\pi} = \\frac{36}{25} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_120",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 5 m and altitude 15 m at a relentless constant rate of 4 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 5 m.",
    "answer": "\\frac{36}{25} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 4. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{5}{15} \\implies r = \\frac{5}{15}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{5}{15}h\\right)^2 h = \\frac{25\\pi}{675}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{25\\pi}{225} h^2 \\frac{dh}{dt} \\implies 4 = \\frac{25\\pi}{225} (5)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{900}{625\\pi} = \\frac{36}{25} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 6 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{900}{900\\pi} = 1 \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_121",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 6 m and altitude 10 m at a relentless constant rate of 2 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 2 m.",
    "answer": "\\frac{25}{18} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 2. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{6}{10} \\implies r = \\frac{6}{10}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{6}{10}h\\right)^2 h = \\frac{36\\pi}{300}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{36\\pi}{100} h^2 \\frac{dh}{dt} \\implies 2 = \\frac{36\\pi}{100} (2)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{200}{144\\pi} = \\frac{25}{18} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 3 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{200}{324\\pi} = \\frac{50}{81} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_122",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 6 m and altitude 10 m at a relentless constant rate of 2 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 4 m.",
    "answer": "\\frac{25}{72} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 2. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{6}{10} \\implies r = \\frac{6}{10}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{6}{10}h\\right)^2 h = \\frac{36\\pi}{300}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{36\\pi}{100} h^2 \\frac{dh}{dt} \\implies 2 = \\frac{36\\pi}{100} (4)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{200}{576\\pi} = \\frac{25}{72} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 5 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{200}{900\\pi} = \\frac{2}{9} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_123",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 6 m and altitude 10 m at a relentless constant rate of 2 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 5 m.",
    "answer": "\\frac{2}{9} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 2. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{6}{10} \\implies r = \\frac{6}{10}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{6}{10}h\\right)^2 h = \\frac{36\\pi}{300}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{36\\pi}{100} h^2 \\frac{dh}{dt} \\implies 2 = \\frac{36\\pi}{100} (5)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{200}{900\\pi} = \\frac{2}{9} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 6 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{200}{1296\\pi} = \\frac{25}{162} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_124",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 6 m and altitude 10 m at a relentless constant rate of 3 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 2 m.",
    "answer": "\\frac{25}{12} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 3. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{6}{10} \\implies r = \\frac{6}{10}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{6}{10}h\\right)^2 h = \\frac{36\\pi}{300}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{36\\pi}{100} h^2 \\frac{dh}{dt} \\implies 3 = \\frac{36\\pi}{100} (2)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{300}{144\\pi} = \\frac{25}{12} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 3 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{300}{324\\pi} = \\frac{25}{27} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_125",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 6 m and altitude 10 m at a relentless constant rate of 3 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 4 m.",
    "answer": "\\frac{25}{48} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 3. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{6}{10} \\implies r = \\frac{6}{10}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{6}{10}h\\right)^2 h = \\frac{36\\pi}{300}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{36\\pi}{100} h^2 \\frac{dh}{dt} \\implies 3 = \\frac{36\\pi}{100} (4)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{300}{576\\pi} = \\frac{25}{48} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 5 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{300}{900\\pi} = \\frac{1}{3} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_126",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 6 m and altitude 10 m at a relentless constant rate of 3 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 5 m.",
    "answer": "\\frac{1}{3} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 3. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{6}{10} \\implies r = \\frac{6}{10}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{6}{10}h\\right)^2 h = \\frac{36\\pi}{300}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{36\\pi}{100} h^2 \\frac{dh}{dt} \\implies 3 = \\frac{36\\pi}{100} (5)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{300}{900\\pi} = \\frac{1}{3} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 6 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{300}{1296\\pi} = \\frac{25}{108} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_127",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 6 m and altitude 10 m at a relentless constant rate of 4 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 2 m.",
    "answer": "\\frac{25}{9} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 4. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{6}{10} \\implies r = \\frac{6}{10}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{6}{10}h\\right)^2 h = \\frac{36\\pi}{300}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{36\\pi}{100} h^2 \\frac{dh}{dt} \\implies 4 = \\frac{36\\pi}{100} (2)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{400}{144\\pi} = \\frac{25}{9} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 3 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{400}{324\\pi} = \\frac{100}{81} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_128",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 6 m and altitude 10 m at a relentless constant rate of 4 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 4 m.",
    "answer": "\\frac{25}{36} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 4. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{6}{10} \\implies r = \\frac{6}{10}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{6}{10}h\\right)^2 h = \\frac{36\\pi}{300}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{36\\pi}{100} h^2 \\frac{dh}{dt} \\implies 4 = \\frac{36\\pi}{100} (4)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{400}{576\\pi} = \\frac{25}{36} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 5 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{400}{900\\pi} = \\frac{4}{9} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_129",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 6 m and altitude 10 m at a relentless constant rate of 4 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 5 m.",
    "answer": "\\frac{4}{9} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 4. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{6}{10} \\implies r = \\frac{6}{10}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{6}{10}h\\right)^2 h = \\frac{36\\pi}{300}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{36\\pi}{100} h^2 \\frac{dh}{dt} \\implies 4 = \\frac{36\\pi}{100} (5)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{400}{900\\pi} = \\frac{4}{9} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 6 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{400}{1296\\pi} = \\frac{25}{81} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_130",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 6 m and altitude 12 m at a relentless constant rate of 2 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 2 m.",
    "answer": "2 \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 2. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{6}{12} \\implies r = \\frac{6}{12}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{6}{12}h\\right)^2 h = \\frac{36\\pi}{432}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{36\\pi}{144} h^2 \\frac{dh}{dt} \\implies 2 = \\frac{36\\pi}{144} (2)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{288}{144\\pi} = 2 \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 3 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{288}{324\\pi} = \\frac{8}{9} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_131",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 6 m and altitude 12 m at a relentless constant rate of 2 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 4 m.",
    "answer": "\\frac{1}{2} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 2. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{6}{12} \\implies r = \\frac{6}{12}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{6}{12}h\\right)^2 h = \\frac{36\\pi}{432}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{36\\pi}{144} h^2 \\frac{dh}{dt} \\implies 2 = \\frac{36\\pi}{144} (4)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{288}{576\\pi} = \\frac{1}{2} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 5 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{288}{900\\pi} = \\frac{8}{25} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_132",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 6 m and altitude 12 m at a relentless constant rate of 2 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 5 m.",
    "answer": "\\frac{8}{25} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 2. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{6}{12} \\implies r = \\frac{6}{12}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{6}{12}h\\right)^2 h = \\frac{36\\pi}{432}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{36\\pi}{144} h^2 \\frac{dh}{dt} \\implies 2 = \\frac{36\\pi}{144} (5)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{288}{900\\pi} = \\frac{8}{25} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 6 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{288}{1296\\pi} = \\frac{2}{9} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_133",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 6 m and altitude 12 m at a relentless constant rate of 3 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 2 m.",
    "answer": "3 \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 3. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{6}{12} \\implies r = \\frac{6}{12}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{6}{12}h\\right)^2 h = \\frac{36\\pi}{432}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{36\\pi}{144} h^2 \\frac{dh}{dt} \\implies 3 = \\frac{36\\pi}{144} (2)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{432}{144\\pi} = 3 \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 3 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{432}{324\\pi} = \\frac{4}{3} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_134",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 6 m and altitude 12 m at a relentless constant rate of 3 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 4 m.",
    "answer": "\\frac{3}{4} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 3. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{6}{12} \\implies r = \\frac{6}{12}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{6}{12}h\\right)^2 h = \\frac{36\\pi}{432}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{36\\pi}{144} h^2 \\frac{dh}{dt} \\implies 3 = \\frac{36\\pi}{144} (4)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{432}{576\\pi} = \\frac{3}{4} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 5 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{432}{900\\pi} = \\frac{12}{25} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_135",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 6 m and altitude 12 m at a relentless constant rate of 3 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 5 m.",
    "answer": "\\frac{12}{25} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 3. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{6}{12} \\implies r = \\frac{6}{12}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{6}{12}h\\right)^2 h = \\frac{36\\pi}{432}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{36\\pi}{144} h^2 \\frac{dh}{dt} \\implies 3 = \\frac{36\\pi}{144} (5)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{432}{900\\pi} = \\frac{12}{25} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 6 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{432}{1296\\pi} = \\frac{1}{3} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_136",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 6 m and altitude 12 m at a relentless constant rate of 4 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 2 m.",
    "answer": "4 \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 4. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{6}{12} \\implies r = \\frac{6}{12}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{6}{12}h\\right)^2 h = \\frac{36\\pi}{432}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{36\\pi}{144} h^2 \\frac{dh}{dt} \\implies 4 = \\frac{36\\pi}{144} (2)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{576}{144\\pi} = 4 \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 3 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{576}{324\\pi} = \\frac{16}{9} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_137",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 6 m and altitude 12 m at a relentless constant rate of 4 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 4 m.",
    "answer": "1 \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 4. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{6}{12} \\implies r = \\frac{6}{12}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{6}{12}h\\right)^2 h = \\frac{36\\pi}{432}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{36\\pi}{144} h^2 \\frac{dh}{dt} \\implies 4 = \\frac{36\\pi}{144} (4)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{576}{576\\pi} = 1 \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 5 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{576}{900\\pi} = \\frac{16}{25} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_138",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 6 m and altitude 12 m at a relentless constant rate of 4 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 5 m.",
    "answer": "\\frac{16}{25} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 4. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{6}{12} \\implies r = \\frac{6}{12}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{6}{12}h\\right)^2 h = \\frac{36\\pi}{432}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{36\\pi}{144} h^2 \\frac{dh}{dt} \\implies 4 = \\frac{36\\pi}{144} (5)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{576}{900\\pi} = \\frac{16}{25} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 6 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{576}{1296\\pi} = \\frac{4}{9} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_139",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 6 m and altitude 15 m at a relentless constant rate of 2 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 2 m.",
    "answer": "\\frac{25}{8} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 2. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{6}{15} \\implies r = \\frac{6}{15}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{6}{15}h\\right)^2 h = \\frac{36\\pi}{675}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{36\\pi}{225} h^2 \\frac{dh}{dt} \\implies 2 = \\frac{36\\pi}{225} (2)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{450}{144\\pi} = \\frac{25}{8} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 3 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{450}{324\\pi} = \\frac{25}{18} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_140",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 6 m and altitude 15 m at a relentless constant rate of 2 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 4 m.",
    "answer": "\\frac{25}{32} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 2. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{6}{15} \\implies r = \\frac{6}{15}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{6}{15}h\\right)^2 h = \\frac{36\\pi}{675}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{36\\pi}{225} h^2 \\frac{dh}{dt} \\implies 2 = \\frac{36\\pi}{225} (4)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{450}{576\\pi} = \\frac{25}{32} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 5 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{450}{900\\pi} = \\frac{1}{2} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_141",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 6 m and altitude 15 m at a relentless constant rate of 2 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 5 m.",
    "answer": "\\frac{1}{2} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 2. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{6}{15} \\implies r = \\frac{6}{15}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{6}{15}h\\right)^2 h = \\frac{36\\pi}{675}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{36\\pi}{225} h^2 \\frac{dh}{dt} \\implies 2 = \\frac{36\\pi}{225} (5)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{450}{900\\pi} = \\frac{1}{2} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 6 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{450}{1296\\pi} = \\frac{25}{72} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_142",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 6 m and altitude 15 m at a relentless constant rate of 3 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 2 m.",
    "answer": "\\frac{75}{16} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 3. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{6}{15} \\implies r = \\frac{6}{15}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{6}{15}h\\right)^2 h = \\frac{36\\pi}{675}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{36\\pi}{225} h^2 \\frac{dh}{dt} \\implies 3 = \\frac{36\\pi}{225} (2)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{675}{144\\pi} = \\frac{75}{16} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 3 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{675}{324\\pi} = \\frac{25}{12} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_143",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 6 m and altitude 15 m at a relentless constant rate of 3 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 4 m.",
    "answer": "\\frac{75}{64} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 3. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{6}{15} \\implies r = \\frac{6}{15}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{6}{15}h\\right)^2 h = \\frac{36\\pi}{675}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{36\\pi}{225} h^2 \\frac{dh}{dt} \\implies 3 = \\frac{36\\pi}{225} (4)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{675}{576\\pi} = \\frac{75}{64} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 5 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{675}{900\\pi} = \\frac{3}{4} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_144",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 6 m and altitude 15 m at a relentless constant rate of 3 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 5 m.",
    "answer": "\\frac{3}{4} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 3. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{6}{15} \\implies r = \\frac{6}{15}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{6}{15}h\\right)^2 h = \\frac{36\\pi}{675}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{36\\pi}{225} h^2 \\frac{dh}{dt} \\implies 3 = \\frac{36\\pi}{225} (5)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{675}{900\\pi} = \\frac{3}{4} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 6 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{675}{1296\\pi} = \\frac{25}{48} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_145",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 6 m and altitude 15 m at a relentless constant rate of 4 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 2 m.",
    "answer": "\\frac{25}{4} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 4. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{6}{15} \\implies r = \\frac{6}{15}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{6}{15}h\\right)^2 h = \\frac{36\\pi}{675}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{36\\pi}{225} h^2 \\frac{dh}{dt} \\implies 4 = \\frac{36\\pi}{225} (2)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{900}{144\\pi} = \\frac{25}{4} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 3 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{900}{324\\pi} = \\frac{25}{9} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_146",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 6 m and altitude 15 m at a relentless constant rate of 4 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 4 m.",
    "answer": "\\frac{25}{16} \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 4. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{6}{15} \\implies r = \\frac{6}{15}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{6}{15}h\\right)^2 h = \\frac{36\\pi}{675}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{36\\pi}{225} h^2 \\frac{dh}{dt} \\implies 4 = \\frac{36\\pi}{225} (4)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{900}{576\\pi} = \\frac{25}{16} \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 5 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{900}{900\\pi} = 1 \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  },
  {
    "id": "gen_app_deriv_arch5_147",
    "topic": "Time Rates",
    "category": "Applications of Derivatives",
    "difficulty": "very_hard",
    "statement": "Water strictly pours seamlessly into an inverted conical tank mapping a radius of 6 m and altitude 15 m at a relentless constant rate of 4 m^3/min. Calculate how precisely fast the water level bounds upward when the water altitude intersects exactly 5 m.",
    "answer": "1 \\frac{1}{\\pi}",
    "steps": "\\begin{aligned}\n&\\text{Let } V, r, \\text{ and } h \\text{ specify the total volume, radius, and depth of the accumulating water respectively.} \\\\\n&\\text{Volume of a cone: } V = \\frac{1}{3}\\pi r^2 h. \\quad \\text{Rate of flow-in: } \\frac{dV}{dt} = 4. \\\\\n&\\text{Similarity ratio preserves proportionality continuously: } \\frac{r}{h} = \\frac{6}{15} \\implies r = \\frac{6}{15}h. \\\\\n&\\text{Substituting strictly to isolate } h: V = \\frac{1}{3}\\pi \\left(\\frac{6}{15}h\\right)^2 h = \\frac{36\\pi}{675}h^3. \\\\\n&\\frac{dV}{dt} = \\frac{36\\pi}{225} h^2 \\frac{dh}{dt} \\implies 4 = \\frac{36\\pi}{225} (5)^2 \\frac{dh}{dt}. \\\\\n&\\frac{dh}{dt} = \\frac{900}{900\\pi} = 1 \\frac{1}{\\pi} \\text{ m/min.} \\\\[15pt]\n&\\textbf{Optimization Insight:} \\\\\n&\\text{For a static conical domain, the rate of linear ascension maps rigorously inverse to the planar surface metric area.} \\\\\n&\\text{The relationship } \\frac{dh}{dt} = \\frac{k}{\\pi r_{current}^2} \\text{ always holds conceptually true bridging raw dimensional reasoning.} \\\\[15pt]\n&\\textbf{Variation Problem:} \\\\\n&\\text{Evaluate the ascent ascension rate precisely when the fluid depth intersects } 6 \\text{ m.} \\\\\n&\\frac{dh}{dt} = \\frac{900}{1296\\pi} = \\frac{25}{36} \\frac{1}{\\pi} \\text{ m/min.} \\\\\n\\end{aligned}"
  }
];
