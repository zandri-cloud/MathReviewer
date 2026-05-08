import { ExamProblem } from '../types/exam';

export const discontinuousDerivativesExercises: ExamProblem[] = [
  {
    id: "dd-1",
    topic: "applications",
    category: "Discontinuous Derivatives",
    difficulty: "easy",
    statement: "Examine the curve $y = x^{2/3}$ for maxima and minima.",
    answer: "\\text{Minimum at } x=0",
    steps: [
      "The given function is $y = x^{2/3}$. It is continuous for all real $x$.",
      "Differentiate with respect to $x$: $y' = \\frac{2}{3}x^{-1/3} = \\frac{2}{3\\sqrt[3]{x}}$.",
      "The derivative $y'$ is undefined at $x = 0$. However, $y$ is well defined at $x=0$, so $x=0$ is a critical point.",
      "For $x < 0$, $y'$ is negative, so the curve is decreasing.",
      "For $x > 0$, $y'$ is positive, so the curve is increasing.",
      "Since the slope changes from negative to positive at $x=0$, the function has a local minimum there, even though the derivative has an infinite discontinuity (cusp)."
    ]
  },
  {
    id: "dd-14",
    topic: "applications",
    category: "Discontinuous Derivatives",
    difficulty: "medium",
    statement: "Examine the curve $y = \\sqrt{x^4 - 2x^2 + 1}$ for maxima and minima.",
    answer: "\\text{Minima at } x = \\pm 1, \\text{ Maximum at } x = 0",
    steps: [
      "Simplify the function by factoring the expression inside the square root: $y = \\sqrt{(x^2 - 1)^2} = |x^2 - 1|$.",
      "To differentiate, we expand piecewise: $y = x^2 - 1$ for $|x| \\ge 1$, and $y = 1 - x^2$ for $|x| < 1$.",
      "For $|x| > 1$, $y' = 2x$. For $|x| < 1$, $y' = -2x$.",
      "At $x = \\pm 1$, the derivative jumps between negative and positive values, forming a sharp corner (discontinuity in $y'$).",
      "Evaluate critical points given by $y'=0$ and those where $y'$ is undefined: we get $x = 0$ (from $y'=-2x=0$), and $x = \\pm 1$ (from undefined limits).",
      "At $x = -1$, $y'$ changes from negative (decrease) to positive (increase), so it is a minimum.",
      "At $x = 0$, $y' = -2(0) = 0$; $y'$ changes from positive (increase) to negative (decrease), so it is a maximum.",
      "At $x = 1$, $y'$ changes from negative (decrease) to positive (increase), making it a minimum."
    ]
  },
  {
    id: "dd-19",
    topic: "applications",
    category: "Discontinuous Derivatives",
    difficulty: "hard",
    statement: "Let OB and BC be parabolic arcs with equations $y = ax^2 + bx + c$, passing through $(0,0)$, $(5,25)$, and $(10,50)$ as origin O, B, and C respectively. The slopes are zero at O and C. Determine $y$ as a function of $x$ and find the maximum grade.",
    answer: "y = x^2 \\text{ (for } 0 \\le x \\le 5\\text{)}, y = -x^2 + 20x - 50 \\text{ (for } 5 \\le x \\le 10\\text{)}; \\text{max grade = } 10",
    steps: [
      "For the arc OB passing through $(0,0)$ with a slope of zero there: $y' = 2ax + b$. $y'(0) = 0 \\implies b = 0$. $y(0) = 0 \\implies c = 0$.",
      "The equation for OB is $y = a_1 x^2$. Since it passes through $B(5,25)$: $25 = a_1 (25) \\implies a_1 = 1$. So $y = x^2$ for $0 \\le x \\le 5$.",
      "For the arc BC, the equation is $y = a_2 x^2 + b_2 x + c_2$. It has a zero slope at $C(10, 50)$: $y'(10) = 20a_2 + b_2 = 0 \\implies b_2 = -20a_2$.",
      "At $C(10, 50)$: $50 = a_2(100) - 20a_2(10) + c_2 \\implies 50 = -100a_2 + c_2$.",
      "At $B(5, 25)$: $25 = 25a_2 + 5(-20a_2) + c_2 \\implies 25 = -75a_2 + c_2$. Substracting the constraint equations gives: $25 = -25a_2 \\implies a_2 = -1$.",
      "Hence $b_2 = 20$ and $c_2 = 50 - 100(1) = -50$. Thus, $y = -x^2 + 20x - 50$ for $5 \\le x \\le 10$.",
      "To find the maximum grade (maximum slope), we evaluate $y'$ across the full duration.",
      "On OB, $y' = 2x$. The maximum is at $x=5$, giving $y'(5) = 10$.",
      "On BC, $y' = -2x + 20$. The maximum is at $x=5$, giving $y'(5) = 10$.",
      "We see the first derivative $y'$ is continuous across $B(5,25)$ with a value of $10$. However, the second derivative $y''$ jumps abruptly from $2$ to $-2$ at $x=5$. The maximum highway grade is $10$."
    ]
  },
  {
    id: "dd-25",
    topic: "applications",
    category: "Discontinuous Derivatives",
    difficulty: "boss",
    statement: "A cylinder is to be cut from a sphere of diameter $1$ ft. ($12$ in.) and then packed in a rectangular box of dimensions $10$ in. by $10$ in. by $8$ in. Find the volume of the largest cylinder that can be handled in this way.",
    answer: "96\\sqrt{3}\\pi \\approx 166.3\\pi \\text{ cu. in.}",
    steps: [
      "Let the cylinder have radius $r$ and height $h$. Because it is inscribed in a sphere of diameter $12$ in, its dimensions satisfy $(2r)^2 + h^2 = 12^2 = 144 \\implies 4r^2 = 144 - h^2$.",
      "The volume of the cylinder is $V(h) = \\pi r^2 h = \\pi \\frac{144 - h^2}{4} h = 36\\pi h - \\frac{\\pi}{4} h^3$.",
      "Usually, we trace the unrestrictive physical maximum: $V'(h) = 36\\pi - \\frac{3\\pi}{4} h^2 = 0 \\implies h^2 = 48 \\implies h = 4\\sqrt{3} \\approx 6.93$ in.",
      "For $h = 4\\sqrt{3}$, the diameter is $2r = \\sqrt{144 - 48} = \\sqrt{96} \\approx 9.8$ in.",
      "We must check the boundary constraints generated by the box. The cylinder must fit inside a $10 \\times 10 \\times 8$ environment. The bounding diameter is $\\le 10$ and bounding height $\\le 8$.",
      "Since $9.8 \\le 10$ and $6.93 \\le 8$, the optimal spherical cylinder fits inside the box boundaries without modifying the unconstrained optimal solution.",
      "Calculate the volume: $V = \\pi \\left(\\frac{96}{4}\\right) (4\\sqrt{3}) = 24\\pi (4\\sqrt{3}) = 96\\sqrt{3}\\pi \\approx 166.3\\pi$ cu. in.",
      "(This problem becomes highly non-trivial when the unconstrained answer surpasses box dimensions, creating a boundary discontinuity.)"
    ]
  },
  {
    id: "dd-31",
    topic: "applications",
    category: "Discontinuous Derivatives",
    difficulty: "hard",
    statement: "Find the abscissa of the point on the parabola $y^2 = 4ax$ that is nearest the point $(k, 0)$.",
    answer: "x = 0 \\text{ for } k \\le 2a,\\quad x = k - 2a \\text{ for } k > 2a",
    steps: [
      "Let $(x, y)$ be a point restricted to the parabola $y^2 = 4ax$. Taking the distance squared to $(k,0)$: $D^2 = (x - k)^2 + y^2$.",
      "Substitute $y^2$: $D^2(x) = (x - k)^2 + 4ax = x^2 - 2kx + k^2 + 4ax = x^2 + 2(2a - k)x + k^2$.",
      "To minimize distance, we rely on the derivative: $\\frac{d(D^2)}{dx} = 2x + 2(2a - k)$.",
      "Set the derivative to zero: $2x + 4a - 2k = 0 \\implies x = k - 2a$.",
      "Notice that the domain of the parabola requires $x \\ge 0$ (assuming $a > 0$).",
      "If $k > 2a$, then $x = k - 2a > 0$, so the analytical local minimum fits within the domain and lies at $x = k - 2a$.",
      "If $k \\le 2a$, then analytically $k - 2a \\le 0$. The geometric limit hits the boundary before reaching the functional peak. The absolute minimum distance occurs on the forced boundary $x = 0$.",
      "The result dictates a minimum point that behaves linearly along $k$, but stops abruptly, jumping from a dynamic tracking position to a static bound $x=0$, revealing a discontinuity in the derivative."
    ]
  }
];
