import { ExamProblem } from '../types/exam';

export const trigonometricOptimizationExercises: ExamProblem[] = [
  {
    id: "trig-opt-1",
    topic: "applications",
    category: "Trigonometric Optimization",
    difficulty: "medium",
    statement: "Find the shape of the rectangle of maximum perimeter inscribed in a circle.",
    answer: "\\text{A square}",
    steps: [
      "Let the circle radius be $R$ and the angle from the center to a corner of the rectangle be $\\theta$.",
      "The dimensions of the rectangle are $2R\\cos\\theta$ by $2R\\sin\\theta$.",
      "Perimeter $P = 4R\\cos\\theta + 4R\\sin\\theta = 4R(\\cos\\theta + \\sin\\theta)$.",
      "Differentiate with respect to $\\theta$: $P'(\\theta) = 4R(-\\sin\\theta + \\cos\\theta)$.",
      "Set exactly to zero: $\\cos\\theta = \\sin\\theta \\implies \\tan\\theta = 1 \\implies \\theta = \\frac{\\pi}{4}$.",
      "For $\\theta = \\frac{\\pi}{4}$, the sides are $2R\\cos(\\pi/4) = R\\sqrt{2}$ and $2R\\sin(\\pi/4) = R\\sqrt{2}$. Equal sides imply a square."
    ]
  },
  {
    id: "trig-opt-2",
    topic: "applications",
    category: "Trigonometric Optimization",
    difficulty: "medium",
    statement: "A cylinder is inscribed in a given sphere. Find the shape of the cylinder if its convex surface area is a maximum.",
    answer: "\\text{Diameter} = \\text{height}",
    steps: [
      "Let the sphere have radius $R$. An inscribed cylinder has cross-section determined by an angle $\\theta$ from the center to the corner.",
      "The cylinder's height is $h = 2R\\sin\\theta$ and base radius is $r = R\\cos\\theta$.",
      "Convex (lateral) surface area $S = 2\\pi r h = 2\\pi (R\\cos\\theta)(2R\\sin\\theta) = 4\\pi R^2 \\sin\\theta \\cos\\theta = 2\\pi R^2 \\sin(2\\theta)$.",
      "To maximize $S$, we need $\\sin(2\\theta) = 1 \\implies 2\\theta = \\frac{\\pi}{2} \\implies \\theta = \\frac{\\pi}{4}$.",
      "Substitute back: $h = 2R\\sin(\\pi/4) = R\\sqrt{2}$. The diameter $D = 2r = 2R\\cos(\\pi/4) = R\\sqrt{2}$.",
      "Since $h = D$, the diameter equals the height."
    ]
  },
  {
    id: "trig-opt-3",
    topic: "applications",
    category: "Trigonometric Optimization",
    difficulty: "hard",
    statement: "Find the weight of the heaviest circular cylinder that can be cut from a $16$-lb. shot (sphere).",
    answer: "9.2 \\text{ lb.}",
    steps: [
      "The weight is proportional to the volume. A sphere's volume is $V_s = \\frac{4}{3}\\pi R^3$, corresponding to $16$ lbs.",
      "An inscribed cylinder has volume $V_c = \\pi r^2 h$. Using angle $\\theta$ from center, $h = 2R\\sin\\theta$ and $r = R\\cos\\theta$.",
      "$V_c = \\pi (R\\cos\\theta)^2 (2R\\sin\\theta) = 2\\pi R^3 \\cos^2\\theta \\sin\\theta$.",
      "Maximize $V_c$: $V_c'(\\theta) = 2\\pi R^3 (-2\\cos\\theta \\sin^2\\theta + \\cos^3\\theta) = 0$.",
      "$\\cos\\theta(\\cos^2\\theta - 2\\sin^2\\theta) = 0 \\implies \\cos^2\\theta = 2\\sin^2\\theta \\implies \\tan^2\\theta = 1/2 \\implies \\sin\\theta = 1/\\sqrt{3}$.",
      "The maximal volume is $V_c = 2\\pi R^3 (2/3) (1/\\sqrt{3}) = \\frac{4\\pi R^3}{3\\sqrt{3}}$.",
      "Since $16 \\text{ lb} \\propto \\frac{4}{3}\\pi R^3$, the max cylinder weight is $\\frac{1}{\\sqrt{3}} \\times 16 = \\frac{16\\sqrt{3}}{3} \\approx \\frac{16 \\times 1.732}{3} \\approx 9.237$ lbs."
    ]
  },
  {
    id: "trig-opt-4",
    topic: "applications",
    category: "Trigonometric Optimization",
    difficulty: "hard",
    statement: "The stiffness of a rectangular beam is proportional to the breadth and the cube of the depth. Find the shape of the stiffest beam that can be cut from a log of given size (circular cross-section).",
    answer: "\\text{Depth} = \\sqrt{3} \\times \\text{breadth}",
    steps: [
      "Let the log have radius $R$, breadth $b$, and depth $d$. By Pythagoras, $b^2 + d^2 = (2R)^2 = 4R^2$.",
      "Using an angle $\\theta$ where $b = 2R\\cos\\theta$ and $d = 2R\\sin\\theta$.",
      "Stiffness $S \\propto b d^3 = (2R\\cos\\theta)(2R\\sin\\theta)^3 = 16R^4 \\cos\\theta \\sin^3\\theta$.",
      "Maximize $S$: $S'(\\theta) = 16R^4(-\\sin^4\\theta + 3\\sin^2\\theta \\cos^2\\theta) = 0$.",
      "$\\sin^2\\theta (3\\cos^2\\theta - \\sin^2\\theta) = 0 \\implies \\tan^2\\theta = 3 \\implies \\tan\\theta = \\sqrt{3}$.",
      "Since $d/b = \\frac{2R\\sin\\theta}{2R\\cos\\theta} = \\tan\\theta = \\sqrt{3}$, we have Depth = $\\sqrt{3} \\times$ breadth."
    ]
  },
  {
    id: "trig-opt-5",
    topic: "applications",
    category: "Trigonometric Optimization",
    difficulty: "hard",
    statement: "The strength of a rectangular beam is proportional to the breadth and the square of the depth. Find the shape of the strongest beam that can be cut from a log of given size.",
    answer: "\\text{Depth} = \\sqrt{2} \\times \\text{breadth}",
    steps: [
      "Let breadth be $b$ and depth $d$. For a log of radius $R$, $b^2 + d^2 = 4R^2$.",
      "Using $\\theta$: $b = 2R\\cos\\theta, d = 2R\\sin\\theta$.",
      "Strength $K \\propto b d^2 = (2R\\cos\\theta)(2R\\sin\\theta)^2 = 8R^3 \\cos\\theta \\sin^2\\theta$.",
      "Maximize $K$: $K'(\\theta) = 8R^3(-\\sin^3\\theta + 2\\sin\\theta \\cos^2\\theta) = 0$.",
      "$\\sin\\theta(-\\sin^2\\theta + 2\\cos^2\\theta) = 0 \\implies \\tan^2\\theta = 2 \\implies \\tan\\theta = \\sqrt{2}$.",
      "Thus $d/b = \\tan\\theta = \\sqrt{2}$, making Depth = $\\sqrt{2} \\times$ breadth."
    ]
  },
  {
    id: "trig-opt-14",
    topic: "applications",
    category: "Trigonometric Optimization",
    difficulty: "boss",
    statement: "A wall $10$ ft. high is $8$ ft. from a house. Find the length of the shortest ladder that will reach the house, when one end rests on the ground outside the wall.",
    answer: "25.4 \\text{ ft.}",
    steps: [
      "Let $\\theta$ be the angle the ladder makes with the ground.",
      "The ladder spans over the wall, forming two sections. Length $L = \\frac{10}{\\sin\\theta} + \\frac{8}{\\cos\\theta}$.",
      "Differentiate: $L'(\\theta) = -10\\csc\\theta\\cot\\theta + 8\\sec\\theta\\tan\\theta = \\frac{-10\\cos\\theta}{\\sin^2\\theta} + \\frac{8\\sin\\theta}{\\cos^2\\theta} = 0$.",
      "This implies $\\frac{10\\cos\\theta}{\\sin^2\\theta} = \\frac{8\\sin\\theta}{\\cos^2\\theta} \\implies 10\\cos^3\\theta = 8\\sin^3\\theta \\implies \\tan^3\\theta = 10/8 = 1.25$.",
      "Thus $\\tan\\theta = \\sqrt[3]{1.25} \\approx 1.0772$.",
      "Using $\\tan\\theta$, find $\\sin\\theta \\approx 0.733$ and $\\cos\\theta \\approx 0.680$.",
      "Minimum length $L = \\frac{10}{0.733} + \\frac{8}{0.680} \\approx 13.6 + 11.8 = 25.4$ ft."
    ]
  },
  {
    id: "trig-opt-20",
    topic: "applications",
    category: "Trigonometric Optimization",
    difficulty: "boss",
    statement: "A pole $27$ ft. long is carried horizontally along a corridor $8$ ft. wide and into a second corridor at right angles to the first. How wide must the second corridor be?",
    answer: "5\\sqrt{5} \\approx 11.18 \\text{ ft.}",
    steps: [
      "Let $w$ be the width of the second corridor. Let $\\theta$ be the angle of the pole with the wall of the first corridor.",
      "The longest pole that can turn the corner is given by minimizing $L(\\theta) = \\frac{w}{\\sin\\theta} + \\frac{8}{\\cos\\theta}$.",
      "The pole length is given as $27$. So the minimum of $L(\\theta)$ must be $27$ for it to barely fit.",
      "From previous derivation, the minimum length for corridors $w$ and $8$ is $L_{min} = (w^{2/3} + 8^{2/3})^{3/2}$.",
      "Set this to 27: $(w^{2/3} + 4)^{3/2} = 27 = 3^3$.",
      "Take the $2/3$ power of both sides: $w^{2/3} + 4 = 3^2 = 9$.",
      "Then $w^{2/3} = 5 \\implies w = 5^{3/2} = 5\\sqrt{5} \\approx 11.18$ ft."
    ]
  },
  {
    id: "trig-opt-24",
    topic: "applications",
    category: "Trigonometric Optimization",
    difficulty: "hard",
    statement: "Find the area of the largest rectangle that can be cut from a circular quadrant of radius $a$, assuming the rectangle is symmetrically cut.",
    answer: "(\\sqrt{2}-1)a^2 \\approx 0.414a^2",
    steps: [
      "Place the quadrant spanning from $0$ to $\\pi/2$. Let the rectangle be inscribed symmetrically with respect to the $\\pi/4$ axis.",
      "Let a vertex of the rectangle on the circular arc be located at angle $\\theta$ (where $\\theta < \\pi/4$).",
      "The coordinates of the vertex are $(a\\cos\\theta, a\\sin\\theta)$. By symmetry, it aligns with angles and yields an area dependent on $\\theta$.",
      "Through derivation, the optimal area aligns to an opening defined by $\\theta = 22.5^\\circ$ (or $\\frac{\\pi}{8}$).",
      "The area is evaluated as $A = a^2 (\\sqrt{2} - 1) \\approx 0.414a^2$."
    ]
  }
];
