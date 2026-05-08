import { ExamProblem } from '../types/exam';

export const optimizationExercisesLibrary: ExamProblem[] = [
  {
    id: "opt-text-01",
    topic: "applications",
    category: "Numbers",
    difficulty: "easy",
    statement: "What positive number exceeds its square by the maximum amount?",
    answer: "\\frac{1}{2}",
    steps: [
      "Let the number be $x$.",
      "We want to maximize the difference: $f(x) = x - x^2$.",
      "Take the derivative with respect to $x$: $f'(x) = 1 - 2x$.",
      "Set the derivative to zero to find critical points: $1 - 2x = 0$.",
      "Solving for $x$, we get $x = \\frac{1}{2}$.",
      "Check the second derivative: $f''(x) = -2$, which is less than $0$, confirming a maximum."
    ]
  },
  {
    id: "opt-text-02",
    topic: "applications",
    category: "Numbers",
    difficulty: "medium",
    statement: "What positive number added to its reciprocal gives the minimum sum?",
    answer: "1",
    steps: [
      "Let the positive number be $x > 0$. Its reciprocal is $\\frac{1}{x}$.",
      "We want to minimize the sum: $S(x) = x + \\frac{1}{x}$.",
      "Take the derivative: $S'(x) = 1 - \\frac{1}{x^2}$.",
      "Set to zero: $1 - \\frac{1}{x^2} = 0 \\implies x^2 = 1$.",
      "Since $x$ must be positive, $x = 1$.",
      "Second derivative $S''(x) = \\frac{2}{x^3} > 0$ for $x > 0$, confirming a minimum."
    ]
  },
  {
    id: "opt-text-03",
    topic: "applications",
    category: "Numbers",
    difficulty: "medium",
    statement: "The sum of two numbers is $k$. Find the minimum value of the sum of their squares.",
    answer: "\\frac{k^2}{2}",
    steps: [
      "Let the two numbers be $x$ and $y$. We are given $x + y = k$, so $y = k - x$.",
      "We want to minimize the sum of squares: $S(x) = x^2 + (k - x)^2$.",
      "Expand: $S(x) = x^2 + k^2 - 2kx + x^2 = 2x^2 - 2kx + k^2$.",
      "Take the derivative: $S'(x) = 4x - 2k$.",
      "Set to zero: $4x - 2k = 0 \\implies x = \\frac{k}{2}$.",
      "Then $y = k - \\frac{k}{2} = \\frac{k}{2}$.",
      "The minimum sum is $\\left(\\frac{k}{2}\\right)^2 + \\left(\\frac{k}{2}\\right)^2 = \\frac{k^2}{4} + \\frac{k^2}{4} = \\frac{k^2}{2}$."
    ]
  },
  {
    id: "opt-text-09",
    topic: "applications",
    category: "Geometric Proportions",
    difficulty: "medium",
    statement: "What should be the shape of a rectangular field of given area, if it is to be enclosed by the least amount of fencing?",
    answer: "\\text{A square}",
    steps: [
      "Let the dimensions of the rectangular field be $x$ and $y$, and the given area be $A$. So, $xy = A$, which means $y = \\frac{A}{x}$.",
      "We want to minimize the perimeter (amount of fencing): $P = 2x + 2y$.",
      "Substitute $y$: $P(x) = 2x + 2\\left(\\frac{A}{x}\\right) = 2x + \\frac{2A}{x}$.",
      "Take the derivative: $P'(x) = 2 - \\frac{2A}{x^2}$.",
      "Set to zero: $2 = \\frac{2A}{x^2} \\implies x^2 = A \\implies x = \\sqrt{A}$.",
      "Then $y = \\frac{A}{\\sqrt{A}} = \\sqrt{A}$. Since $x = y$, the shape is a square."
    ]
  },
  {
    id: "opt-text-11",
    topic: "applications",
    category: "Cost & Economics",
    difficulty: "hard",
    statement: "A rectangular lot is to be fenced off along a highway. If the fence on the highway costs $m$ dollars per yd, and on the other sides $n$ dollars per yd, find the dimensions (width $x$ along highway, depth $y$) of the largest lot that can be fenced off for $k$ dollars.",
    answer: "x = \\frac{k}{2(m+n)}, y = \\frac{k}{4n}",
    steps: [
      "Let $x$ be the length along the highway, and $y$ be the depth of the rectangular lot.",
      "The cost of the fence along the highway is $mx$. The other three sides have lengths $x$, $y$, and $y$, costing $n(x + 2y)$.",
      "The total cost constraint is: $mx + nx + 2ny = k$, so $(m+n)x + 2ny = k$.",
      "We want to maximize the area: $A = xy$.",
      "From the cost equation, solve for $y$: $y = \\frac{k - (m+n)x}{2n}$.",
      "Substitute into Area: $A(x) = x \\left(\\frac{k - (m+n)x}{2n}\\right) = \\frac{kx - (m+n)x^2}{2n}$.",
      "Take the derivative and set to zero: $A'(x) = \\frac{k - 2(m+n)x}{2n} = 0$.",
      "Solving gives $x = \\frac{k}{2(m+n)}$.",
      "Substituting back gives $y = \\frac{k - (m+n)\\left(\\frac{k}{2(m+n)}\\right)}{2n} = \\frac{k - k/2}{2n} = \\frac{k}{4n}$."
    ]
  },
  {
    id: "opt-text-14",
    topic: "applications",
    category: "Cost & Economics",
    difficulty: "hard",
    statement: "A rectangular lot is bounded at the back by a river. No fence is needed along the river and there is to be a $24$-ft opening in front. If the fence along the front costs $\\$1.50$ per ft, along the sides $\\$1.00$ per ft, find the dimensions (width $x$, depth $y$) of the largest lot which can be thus fenced in for $\\$300$.",
    answer: "112 \\text{ by } 84",
    steps: [
      "Let $x$ be the width of the front (parallel to the river) and $y$ be the depth.",
      "The front fence length is $x - 24$ (accounting for the opening). Its cost is $1.50(x - 24)$.",
      "The two side fences cost $1.00(2y) = 2y$. No back fence is needed.",
      "Total cost constraint: $1.5(x - 24) + 2y = 300$.",
      "Simplify: $1.5x - 36 + 2y = 300 \\implies 1.5x + 2y = 336 \\implies 2y = 336 - 1.5x \\implies y = 168 - 0.75x$.",
      "Maximize area: $A = xy = x(168 - 0.75x) = 168x - 0.75x^2$.",
      "Take the derivative: $A'(x) = 168 - 1.5x = 0 \\implies 1.5x = 168 \\implies x = 112$.",
      "Calculate $y$: $y = 168 - 0.75(112) = 168 - 84 = 84$.",
      "The dimensions are $112$ ft by $84$ ft."
    ]
  },
  {
    id: "opt-text-16",
    topic: "applications",
    category: "Geometric Proportions",
    difficulty: "medium",
    statement: "Find the volume of the largest cardboard box that can be made by cutting equal squares out of the corners of a piece of cardboard of dimensions $15$ in by $24$ in, and then turning up the sides.",
    answer: "486",
    steps: [
      "Let $x$ be the side length of the square cut from each corner.",
      "The dimensions of the resulting box will be: height = $x$, length = $24 - 2x$, width = $15 - 2x$.",
      "The volume is $V(x) = x(24 - 2x)(15 - 2x)$.",
      "Expand: $V(x) = x(360 - 48x - 30x + 4x^2) = 4x^3 - 78x^2 + 360x$.",
      "Take the derivative: $V'(x) = 12x^2 - 156x + 360$.",
      "Set to zero and divide by 12: $x^2 - 13x + 30 = 0$.",
      "Factor: $(x - 3)(x - 10) = 0$. So $x = 3$ or $x = 10$.",
      "Since $x=10$ would make width negative ($15 - 20 = -5$), we must use $x = 3$.",
      "Calculate max volume: $V(3) = 3(24 - 6)(15 - 6) = 3(18)(9) = 486$."
    ]
  },
  {
    id: "opt-text-18",
    topic: "applications",
    category: "Physics & Materials",
    difficulty: "hard",
    statement: "The strength of a rectangular beam is proportional to the breadth and the square of the depth. Find the shape of the strongest beam that can be cut from a circular log of given diameter. Express depth $d$ in terms of breadth $b$.",
    answer: "d = \\sqrt{2} b",
    steps: [
      "Let $b$ be the breadth and $d$ be the depth of the beam.",
      "The beam is cut from a log of diameter $D$, so by Pythagorean theorem, $b^2 + d^2 = D^2$.",
      "The strength $S$ is proportional to $bd^2$, so $S = kbd^2$.",
      "From the constraint, substitute $d^2 = D^2 - b^2$ into the strength equation.",
      "We want to maximize $S(b) = kb(D^2 - b^2) = k(D^2b - b^3)$.",
      "Take the derivative with respect to $b$: $S'(b) = k(D^2 - 3b^2)$.",
      "Set to zero: $D^2 - 3b^2 = 0 \\implies D^2 = 3b^2$.",
      "Substitute $D^2 = b^2 + d^2$ back in: $b^2 + d^2 = 3b^2 \\implies d^2 = 2b^2$.",
      "Taking the square root gives $d = \\sqrt{2}b$."
    ]
  },
  {
    id: "opt-text-25",
    topic: "applications",
    category: "Geometric Proportions",
    difficulty: "medium",
    statement: "Find the most economical proportions for a quart can (a circular cylinder) to optimize surface area. Express the relation between diameter and height.",
    answer: "\\text{Diameter} = \\text{height}",
    steps: [
      "Let the cylinder have radius $r$, diameter $D = 2r$, and height $h$.",
      "The volume is fixed at some constant $V$: $V = \\pi r^2 h$, so $h = \\frac{V}{\\pi r^2}$.",
      "The most economical proportion minimizes the surface area: $A = 2\\pi r^2 + 2\\pi rh$.",
      "Substitute $h$: $A(r) = 2\\pi r^2 + 2\\pi r\\left(\\frac{V}{\\pi r^2}\\right) = 2\\pi r^2 + \\frac{2V}{r}$.",
      "Take the derivative: $A'(r) = 4\\pi r - \\frac{2V}{r^2}$.",
      "Set to zero: $4\\pi r = \\frac{2V}{r^2} \\implies 4\\pi r^3 = 2V \\implies 2\\pi r^3 = V$.",
      "Substitute $V$ back: $2\\pi r^3 = \\pi r^2 h \\implies 2r = h$.",
      "Since $D = 2r$, we find that diameter $D = h$."
    ]
  },
  {
    id: "opt-text-43",
    topic: "applications",
    category: "Shortest Distance",
    difficulty: "very_hard",
    statement: "A ship lies $6$ mi from shore, and opposite a point $10$ mi farther along the shore another ship lies $18$ mi offshore. A boat from the first ship is to land a passenger on the shore and then proceed to the other ship. What is the least distance the boat can travel?",
    answer: "26 \\text{ mi}",
    steps: [
      "Let the shoreline be the x-axis. Place the shore point opposite the first ship at $(0,0)$.",
      "The first ship is at $(0, 6)$. The second ship is at $(10, 18)$.",
      "The landing point on the shore is $(x, 0)$ where $0 \\le x \\le 10$.",
      "The total distance $D$ traveled by the boat is $D = \\sqrt{x^2 + 6^2} + \\sqrt{(10-x)^2 + 18^2}$.",
      "To minimize $D$ without a derivative, use the reflection principle: reflect $(0,6)$ across the shore to $(0,-6)$.",
      "The shortest path from $(0,-6)$ to $(10,18)$ is a straight line.",
      "The length of this straight line is $\\sqrt{(10 - 0)^2 + (18 - (-6))^2} = \\sqrt{10^2 + 24^2}$.",
      "Calculate: $\\sqrt{100 + 576} = \\sqrt{676} = 26$.",
      "The least distance the boat can travel is $26$ miles."
    ]
  },
  {
    id: "opt-text-54",
    topic: "applications",
    category: "Cost & Economics",
    difficulty: "hard",
    statement: "A cylindrical tin boiler, open at the top, has a copper bottom. If sheet copper is $m$ times as expensive as tin, per unit area, find the most economical proportions. Express height $h$ in terms of radius $r$.",
    answer: "h = mr",
    steps: [
      "Let the cylinder have radius $r$ and height $h$. The volume is a constant $V = \\pi r^2 h$, so $h = \\frac{V}{\\pi r^2}$.",
      "Let the cost of tin be $k$ per unit area. The copper bottom costs $mk$ per unit area.",
      "The cost is $C = (\\text{area of bottom})(mk) + (\\text{area of sides})(k)$.",
      "Since it is open at the top, $C = (\\pi r^2)(mk) + (2\\pi r h)(k) = k(m\\pi r^2 + 2\\pi r h)$.",
      "Substitute $h$: $C(r) = k\\left(m\\pi r^2 + 2\\pi r \\left(\\frac{V}{\\pi r^2}\\right)\\right) = k\\left(m\\pi r^2 + \\frac{2V}{r}\\right)$.",
      "Take the derivative: $C'(r) = k\\left(2m\\pi r - \\frac{2V}{r^2}\\right)$.",
      "Set to zero: $2m\\pi r = \\frac{2V}{r^2} \\implies m\\pi r^3 = V$.",
      "Substitute $V$ back: $m\\pi r^3 = \\pi r^2 h \\implies mr = h$.",
      "The most economical proportion is $h = mr$."
    ]
  },
  {
    id: "opt-text-69",
    topic: "applications",
    category: "Cost & Economics",
    difficulty: "boss",
    statement: "A man on an island $12$ mi south of a straight beach wishes to reach a point on shore $20$ mi east. If a motorboat making $20$ mi/hr costs $\\$2.00$/hr, and land transportation costs $\\$0.06$/mi, how much must he pay for the cheapest trip?",
    answer: "\\$2.16",
    steps: [
      "The boat travels at $20$ mph and costs $\\$2.00$ per hour, which equates to $\\frac{\\$2.00}{20} = \\$0.10$ per mile.",
      "Land transport costs $\\$0.06$ per mile.",
      "Let the landing point be $x$ miles east of the point directly opposite the island on the shore ($0 \\le x \\le 20$).",
      "Boat distance = $\\sqrt{144 + x^2}$, cost = $0.10\\sqrt{144 + x^2}$.",
      "Land distance = $20 - x$, cost = $0.06(20 - x)$.",
      "Total Cost $C(x) = 0.10\\sqrt{144 + x^2} + 1.20 - 0.06x$.",
      "Take the derivative: $C'(x) = 0.10 \\cdot \\frac{1}{2\\sqrt{144 + x^2}} \\cdot 2x - 0.06 = \\frac{0.10x}{\\sqrt{144 + x^2}} - 0.06$.",
      "Set to zero: $\\frac{0.10x}{\\sqrt{144+x^2}} = 0.06 \\implies 10x = 6\\sqrt{144+x^2} \\implies 5x = 3\\sqrt{144+x^2}$.",
      "Square both sides: $25x^2 = 9(144 + x^2) \\implies 25x^2 = 1296 + 9x^2 \\implies 16x^2 = 1296$.",
      "Solve for $x$: $x^2 = 81 \\implies x = 9$.",
      "Calculate Cost: $C(9) = 0.10\\sqrt{144 + 81} + 0.06(20 - 9) = 0.10(15) + 0.06(11)$.",
      "$C(9) = 1.50 + 0.66 = 2.16$. The minimum cost is $\\$2.16$."
    ]
  }
];
