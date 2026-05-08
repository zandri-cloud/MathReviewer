import { Problem } from '../types/calculus';

export const optimizationBatch1: Problem[] = [
  // --- RECTILINEAR OPTIMIZATION (20 Problems) ---
  {
    id: "opt-rect-1",
    difficulty: "Hard",
    category: "Rectilinear Optimization",
    statement: "A farmer has 2400 ft of fencing and wants to fence off a rectangular field that borders a straight river. He needs no fence along the river. What are the dimensions of the field that has the largest area?",
    solution: "1. A = xy. 2. Constraint: 2x + y = 2400 => y = 2400 - 2x. 3. A(x) = x(2400 - 2x) = 2400x - 2x². 4. A'(x) = 2400 - 4x = 0 => x = 600. 5. y = 2400 - 1200 = 1200. Dimensions: 600 ft by 1200 ft.",
    finalAnswer: "600 \\text{ ft} \\times 1200 \\text{ ft}",
    type: "free-response"
  },
  {
    id: "opt-rect-2",
    difficulty: "Hard",
    category: "Rectilinear Optimization",
    statement: "A rectangular garden is to be fenced and divided into three equal subplots with two parallel internal fences. If 400m of fencing is available, find the maximum area.",
    solution: "1. s = 4x + 2y = 400 => y = 200 - 2x. 2. A = xy = x(200 - 2x) = 200x - 2x². 3. A' = 200 - 4x = 0 => x = 50. 4. y = 100. 5. A = 50 * 100 = 5000 m².",
    finalAnswer: "5000 \\text{ m}^2",
    type: "free-response"
  },
  {
    id: "opt-rect-3",
    difficulty: "Hard",
    category: "Rectilinear Optimization",
    statement: "A poster is to contain 50 sq in of printed matter with 4 in margins at top and bottom and 2 in margins on each side. What dimensions minimize total area?",
    solution: "1. A_print = (x-4)(y-8) = 50 => y = 8 + 50/(x-4). 2. A_total = xy = x(8 + 50/(x-4)) = 8x + 50x/(x-4). 3. dA/dx = 8 + [50(x-4) - 50x] / (x-4)² = 8 - 200/(x-4)² = 0. 4. (x-4)² = 25 => x-4=5 => x=9. 5. y = 8 + 50/5 = 18. Dimensions: 9 in by 18 in.",
    finalAnswer: "9 \\text{ in} \\times 18 \\text{ in}",
    type: "free-response"
  },

  // --- OPEN-TOP BOXES (20 Problems) ---
  {
    id: "opt-box-1",
    difficulty: "Hard",
    category: "Open-Top Boxes",
    statement: "An open box is made from a 24 in by 24 in square of cardboard by cutting equal squares from the corners and folding up the sides. Find the maximum volume.",
    solution: "1. V = x(24-2x)². 2. V' = (24-2x)² + x*2(24-2x)*(-2) = (24-2x)(24-2x - 4x) = (24-2x)(24-6x). 3. V' = 0 => x=12 (V=0) or x=4. 4. V(4) = 4(16)² = 4(256) = 1024 cu in.",
    finalAnswer: "1024 \\text{ in}^3",
    type: "free-response"
  },
  {
    id: "opt-box-2",
    difficulty: "Hard",
    category: "Open-Top Boxes",
    statement: "Find the dimensions of the open box of maximum volume that can be made from a 12 in by 18 in piece of metal.",
    solution: "1. V = x(12-2x)(18-2x) = 4x³ - 60x² + 216x. 2. V' = 12x² - 120x + 216 = 0 => x² - 10x + 18 = 0. 3. x = [10 ± sqrt(100 - 72)] / 2 = 5 ± √7. 4. Max occurs at 5 - √7 ≈ 2.35. 5. Dimensions: 2.35, 7.3, 13.3.",
    finalAnswer: "2.35 \\text{ in} \\times 7.3 \\text{ in} \\times 13.3 \\text{ in}",
    type: "free-response"
  },

  // --- INSCRIBED SHAPES (20 Problems) ---
  {
    id: "opt-ins-1",
    difficulty: "Hard",
    category: "Inscribed Shapes",
    statement: "Find the dimensions of the rectangle of largest area that can be inscribed in a circle of radius r.",
    solution: "1. x² + y² = (2r)². 2. A = xy = x * sqrt(4r²-x²). 3. A' = sqrt(4r²-x²) + x * (-x / sqrt(4r²-x²)) = 0. 4. 4r² - x² - x² = 0 => 2x² = 4r² => x = r√2. 5. y = r√2. It is a square.",
    finalAnswer: "r\\sqrt{2} \\times r\\sqrt{2}",
    type: "free-response"
  },
  {
    id: "opt-ins-2",
    difficulty: "Hard",
    category: "Inscribed Shapes",
    statement: "Find the volume of the largest right circular cylinder that can be inscribed in a sphere of radius 3.",
    solution: "1. (2r)² + h² = 6² = 36. 2. r² = (36-h²)/4 = 9 - h²/4. 3. V = πr²h = π(9h - h³/4). 4. V' = π(9 - 3h²/4) = 0 => 3h²/4 = 9 => h² = 12 => h = 2√3. 5. V = π(9(2√3) - 12√3/4) = π(18√3 - 3√3) = 15√3π.",
    finalAnswer: "12\\sqrt{3}\\pi \\text{ (approx } 12\\pi\\sqrt{3} \\text{ is } 20.7\\pi)",
    type: "free-response"
  },

  // --- PROXIMITY/DISTANCE (20 Problems) ---
  {
    id: "opt-prox-1",
    difficulty: "Hard",
    category: "Proximity/Distance",
    statement: "Find the point on the parabola y = x² that is closest to the point (3, 0).",
    solution: "1. D² = (x-3)² + (x²)². 2. f(x) = x^4 + x² - 6x + 9. 3. f'(x) = 4x³ + 2x - 6 = 0. 4. x=1 is a root. 5. y = 1² = 1. Point is (1, 1).",
    finalAnswer: "(1, 1)",
    type: "free-response"
  },

  // --- COST OPTIMIZATION (20 Problems) ---
  {
    id: "opt-cost-1",
    difficulty: "Hard",
    category: "Cost Optimization",
    statement: "A cylindrical can is to be made to hold 1 L of oil. Find the dimensions that minimize the cost of the metal to make the can.",
    solution: "1. V = πr²h = 1000. h = 1000 / πr². 2. SA = 2πr² + 2πrh = 2πr² + 2πr(1000/πr²) = 2πr² + 2000/r. 3. SA' = 4πr - 2000/r² = 0 => 4πr³ = 2000 => r³ = 500/π. 4. r = (500/π)^(1/3) ≈ 5.42 cm. 5. h = 2r ≈ 10.84 cm.",
    finalAnswer: "r \\approx 5.42 \\text{ cm}, h \\approx 10.84 \\text{ cm}",
    type: "free-response"
  },
  {
    id: "opt-rect-4",
    difficulty: "Hard",
    category: "Rectilinear Optimization",
    statement: "A field is to be fenced with a rectangle and a semicircle on one end. If 100m of fencing is available, find dimensions for max area.",
    solution: "1. s = 2h + w + πw/2 = 100 => h = 50 - w/2 - πw/4. 2. A = hw + π(w/2)²/2 = (50 - w/2 - πw/4)w + πw²/8 = 50w - w²/2 - πw²/8. 3. A' = 50 - w - πw/4 = 0 => w(1 + π/4) = 50 => w = 200 / (4+π).",
    finalAnswer: "\\frac{200}{4+\\pi}",
    type: "free-response"
  },
  {
    id: "opt-rect-5",
    difficulty: "Hard",
    category: "Rectilinear Optimization",
    statement: "A window consists of a rectangle with a semi-circle on top. Maximize area with perimeter 10m.",
    solution: "1. s = 2h + w + πw/2 = 10. 2. A = hw + πw²/8. 3. Result: w = 20 / (4+π). h = w/2.",
    finalAnswer: "\\frac{20}{4+\\pi}",
    type: "free-response"
  },
  {
    id: "opt-box-3",
    difficulty: "Hard",
    category: "Open-Top Boxes",
    statement: "Find the maximum volume of a box with square base such that the sum of its height and its base perimeter is 108 in.",
    solution: "1. 4x + h = 108 => h = 108 - 4x. 2. V = x²h = x²(108 - 4x) = 108x² - 4x³. 3. V' = 216x - 12x² = 0 => 12x(18-x) = 0 => x=18. 4. V = 18²(108 - 72) = 324 * 36 = 11664 cu in.",
    finalAnswer: "11664",
    type: "free-response"
  },
  {
    id: "opt-box-4",
    difficulty: "Hard",
    category: "Open-Top Boxes",
    statement: "A sheet of material 2m by 3m. Cut squares from corners to maximize volume.",
    solution: "1. V = x(2-2x)(3-2x) = 4x³ - 10x² + 6x. 2. V' = 12x² - 20x + 6 = 0 => 6x² - 10x + 3 = 0. 3. x = [10 ± sqrt(100 - 72)] / 12 = [10 ± √28] / 12 = [5 ± √7] / 6. 4. x = (5-√7)/6 ≈ 0.39m.",
    finalAnswer: "0.39",
    type: "free-response"
  },
  {
    id: "opt-ins-3",
    difficulty: "Hard",
    category: "Inscribed Shapes",
    statement: "Find the dimensions of the isosceles triangle of largest area that can be inscribed in a circle of radius r.",
    solution: "1. Area = bh/2. b = 2r sinθ, h = r + r cosθ. 2. It is an equilateral triangle.",
    finalAnswer: "\\text{Equilateral}",
    type: "free-response"
  },
  {
    id: "opt-ins-4",
    difficulty: "Hard",
    category: "Inscribed Shapes",
    statement: "Find the largest area of a rectangle that can be inscribed in a semi-circle of radius 1.",
    solution: "1. x² + y² = 1. A = (2x)y = 2x sqrt(1-x²). 2. A' = 2sqrt(1-x²) - 2x²/sqrt(1-x²) = 0 => 2-2x²-2x²=0 => 4x²=2 => x=1/√2. 3. A = 2(1/√2)(1/√2) = 1.",
    finalAnswer: "1",
    type: "free-response"
  },
  {
    id: "opt-prox-2",
    difficulty: "Hard",
    category: "Proximity/Distance",
    statement: "Find the point on y = sqrt(x) closest to (4, 0).",
    solution: "1. D² = (x-4)² + x = x² - 8x + 16 + x = x² - 7x + 16. 2. f' = 2x - 7 = 0 => x = 3.5. 3. y = sqrt(3.5). Point (3.5, sqrt(3.5)).",
    finalAnswer: "(3.5, \\sqrt{3.5})",
    type: "free-response"
  },
  {
    id: "opt-prox-3",
    difficulty: "Hard",
    category: "Proximity/Distance",
    statement: "Find the point on x² + y² = 1 closest to (2, 2).",
    solution: "1. Line from origin to (2, 2) is y=x. 2. x² + x² = 1 => 2x² = 1 => x = 1/√2. Point (1/√2, 1/√2).",
    finalAnswer: "(1/\\sqrt{2}, 1/\\sqrt{2})",
    type: "free-response"
  },
  {
    id: "opt-cost-2",
    difficulty: "Hard",
    category: "Cost Optimization",
    statement: "Pipeline from offshore rig 5km out to a refinery 10km down the coast. Cost in water is 2M/km, on land 1M/km. Where to hit coast?",
    solution: "1. C = 2*sqrt(x²+25) + (10-x). 2. C' = 2x/sqrt(x²+25) - 1 = 0 => 2x = sqrt(x²+25) => 4x² = x² + 25 => 3x² = 25 => x = 5/√3 ≈ 2.89 km.",
    finalAnswer: "2.89 \\text{ km from nearest point}",
    type: "free-response"
  },
  {
    id: "opt-rect-6",
    difficulty: "Hard",
    category: "Rectilinear Optimization",
    statement: "Two rectangles share a side. Total area 1000m². Find min perimeter.",
    solution: "1. 3x + 2y = P. xy = 1000. 2. P = 3x + 2000/x. 3. P' = 3 - 2000/x² = 0 => x² = 2000/3 => x ≈ 25.8. 4. y = 1000/25.8 ≈ 38.7.",
    finalAnswer: "x \\approx 25.8, y \\approx 38.7",
    type: "free-response"
  },
  {
    id: "opt-rect-7",
    difficulty: "Hard",
    category: "Rectilinear Optimization",
    statement: "Rectangle with area 400. One side is fencing at 10/m, others 5/m. Min cost?",
    solution: "1. C = 10x + 5x + 5y + 5y = 15x + 10y. xy=400. 2. C = 15x + 4000/x. 3. C' = 15 - 4000/x² = 0 => x² = 4000/15 = 800/3 => x ≈ 16.3.",
    finalAnswer: "16.3",
    type: "free-response"
  },
  {
    id: "opt-box-5",
    difficulty: "Hard",
    category: "Open-Top Boxes",
    statement: "Volume 2m³. Surface area is a square base plus 4 sides. Min surface area?",
    solution: "1. V = x²h = 2 => h = 2/x². 2. SA = x² + 4xh = x² + 8/x. 3. SA' = 2x - 8/x² = 0 => 2x³ = 8 => x³ = 4 => x = 2^(2/3).",
    finalAnswer: "\\sqrt[3]{4}",
    type: "free-response"
  },
  {
    id: "opt-ins-5",
    difficulty: "Hard",
    category: "Inscribed Shapes",
    statement: "Find the volume of the largest cone that can be inscribed in a sphere of radius R.",
    solution: "1. r² + (h-R)² = R². r² = 2hR - h². 2. V = (1/3)πr²h = (1/3)π(2h²R - h³). 3. V' = (1/3)π(4hR - 3h²) = 0 => h = 4R/3. 4. V = (32/81)πR³.",
    finalAnswer: "\\frac{32}{81}\\pi R^3",
    type: "free-response"
  },
  {
    id: "opt-ins-6",
    difficulty: "Hard",
    category: "Inscribed Shapes",
    statement: "Minimize the surface area of a cylinder with volume V (closed top).",
    solution: "1. SA = 2πr² + 2πrh. V = πr²h. 2. Result is h=2r.",
    finalAnswer: "h=2r",
    type: "free-response"
  },
  {
    id: "opt-prox-4",
    difficulty: "Hard",
    category: "Proximity/Distance",
    statement: "Find the point on y = x² closest to (0, 2).",
    solution: "1. D² = x² + (x²-2)² = x² + x^4 - 4x² + 4 = x^4 - 3x² + 4. 2. f' = 4x³ - 6x = 0 => 2x(2x²-3) = 0 => x = ±sqrt(1.5).",
    finalAnswer: "(\\pm\\sqrt{1.5}, 1.5)",
    type: "free-response"
  },
  {
    id: "opt-cost-3",
    difficulty: "Hard",
    category: "Cost Optimization",
    statement: "A box with square base, volume 10. Cost of base 2/sq m, sides 1/sq m, top 1/sq m. Find min cost.",
    solution: "1. C = 2x² + 4xh + x² = 3x² + 4xh. x²h = 10. 2. C = 3x² + 40/x. 3. C' = 6x - 40/x² = 0 => 6x³ = 40 => x = (20/3)^(1/3).",
    finalAnswer: "\\sqrt[3]{20/3}",
    type: "free-response"
  },
  {
    id: "opt-rect-8",
    difficulty: "Hard",
    category: "Rectilinear Optimization",
    statement: "Fence off two identical adjacent rectangular fields sharing one side, total area 1200. Min fencing?",
    solution: "1. 3x + 2y = L. 2xy = 1200 => y = 600/x. 2. L = 3x + 1200/x. 3. L' = 3 - 1200/x² = 0 => x²=400 => x=20. y=30. L=60+60=120.",
    finalAnswer: "120",
    type: "free-response"
  },
  {
    id: "opt-rect-9",
    difficulty: "Hard",
    category: "Rectilinear Optimization",
    statement: "Find dimensions of rectangle with perim 100 and largest area.",
    solution: "1. s = 2x+2y = 100. A = xy. 2. Result is square x=y=25.",
    finalAnswer: "25 \\times 25",
    type: "free-response"
  },
  {
    id: "opt-box-6",
    difficulty: "Hard",
    category: "Open-Top Boxes",
    statement: "Rect box with volume 10. Base length is twice base width. Min surface area?",
    solution: "1. V = w(2w)h = 10. h = 5/w². 2. SA = 2w² + 2wh + 2(2w)h = 2w² + 6wh = 2w² + 30/w. 3. SA' = 4w - 30/w² = 0 => 4w³ = 30 => w = (7.5)^(1/3).",
    finalAnswer: "\\sqrt[3]{7.5}",
    type: "free-response"
  },
  {
    id: "opt-box-7",
    difficulty: "Hard",
    category: "Open-Top Boxes",
    statement: "Box with square base, no top. SA = 100. Max volume?",
    solution: "1. x² + 4xh = 100. h = (100-x²)/4x. 2. V = x²h = (100x - x³)/4. 3. V' = (100 - 3x²)/4 = 0 => x² = 100/3 => x = 10/√3.",
    finalAnswer: "\\frac{10}{\\sqrt{3}}",
    type: "free-response"
  },
  {
    id: "opt-ins-7",
    difficulty: "Hard",
    category: "Inscribed Shapes",
    statement: "Find dimensions of rectangle of largest area in x²/a² + y²/b² = 1.",
    solution: "1. A = (2x)(2y) = 4xy. y = b/a sqrt(a²-x²). 2. Result: x = a/√2, y = b/√2.",
    finalAnswer: "a\\sqrt{2} \\times b\\sqrt{2}",
    type: "free-response"
  },
  {
    id: "opt-ins-8",
    difficulty: "Hard",
    category: "Inscribed Shapes",
    statement: "Largest area of rectangle with base on x-axis and corners on y = 12-x².",
    solution: "1. A = (2x)(12-x²) = 24x - 2x³. 2. A' = 24 - 6x² = 0 => x=2. 3. h = 12-4 = 8. Area = 4*8 = 32.",
    finalAnswer: "32",
    type: "free-response"
  },
  {
    id: "opt-prox-5",
    difficulty: "Hard",
    category: "Proximity/Distance",
    statement: "Find the point on x+y=10 closest to origin.",
    solution: "1. Line perpendicular to x+y=10 from 0,0 is y=x. 2. x+x=10 => x=y=5.",
    finalAnswer: "(5, 5)",
    type: "free-response"
  },
  {
    id: "opt-prox-6",
    difficulty: "Hard",
    category: "Proximity/Distance",
    statement: "Find the point on y=x closest to (1, 0).",
    solution: "1. D² = (x-1)² + x². f' = 2(x-1) + 2x = 4x-2 = 0 => x=0.5. y=0.5.",
    finalAnswer: "(0.5, 0.5)",
    type: "free-response"
  },
  {
    id: "opt-cost-4",
    difficulty: "Hard",
    category: "Cost Optimization",
    statement: "Fencing a rectangular area 1000. North side costs 20, other 10. Min cost?",
    solution: "1. C = 20x + 10x + 10y + 10y = 30x + 20y. xy=1000. 2. C = 30x + 20000/x. 3. C' = 30 - 20000/x² = 0 => x² = 666.6 => x ≈ 25.8.",
    finalAnswer: "25.8",
    type: "free-response"
  },
  {
    id: "opt-rect-10",
    difficulty: "Hard",
    category: "Rectilinear Optimization",
    statement: "Rectangle with area 1000. Find min perimeter.",
    solution: "1. P = 2x + 2y. Result is square x=y=√1000 ≈ 31.6.",
    finalAnswer: "31.6",
    type: "free-response"
  },
  {
    id: "opt-rect-11",
    difficulty: "Hard",
    category: "Rectilinear Optimization",
    statement: "A window had perimeter 20. Maximize area of rectangle.",
    solution: "1. Square is 5x5. Area=25.",
    finalAnswer: "25",
    type: "free-response"
  },
  {
    id: "opt-box-8",
    difficulty: "Hard",
    category: "Open-Top Boxes",
    statement: "Box with volume 1. Material for base 10 $/sq m, sides 5 $/sq m. Min cost?",
    solution: "1. C = 10x² + 20xh. x²h=1. 2. C = 10x² + 20/x. 3. C' = 20x - 20/x² = 0 => x=1. h=1.",
    finalAnswer: "x=1, h=1",
    type: "free-response"
  },
  {
    id: "opt-box-9",
    difficulty: "Hard",
    category: "Open-Top Boxes",
    statement: "Sum of length and girth of parcel is 108. Max volume?",
    solution: "1. L + 4x = 108. V = x²L = x²(108-4x). 2. Result x=18, L=36. V=11664.",
    finalAnswer: "11664",
    type: "free-response"
  },
  {
    id: "opt-ins-9",
    difficulty: "Hard",
    category: "Inscribed Shapes",
    statement: "Find largest volume of cylinder in cone radius 5, height 10.",
    solution: "1. r/5 = (10-h)/10 => h = 10 - 2r. 2. V = πr²(10-2r). 3. V' = π(20r - 6r²) = 0 => r = 10/3. h = 10/3.",
    finalAnswer: "\\frac{10}{3}",
    type: "free-response"
  },
  {
    id: "opt-ins-10",
    difficulty: "Hard",
    category: "Inscribed Shapes",
    statement: "Largest area of rectangle in triangle base 12, height 8.",
    solution: "1. Similar to cylinder in cone. Dimensions half of triangle. 6x4. Area=24.",
    finalAnswer: "24",
    type: "free-response"
  },
  {
    id: "opt-prox-7",
    difficulty: "Hard",
    category: "Proximity/Distance",
    statement: "Find point on y = 1 - x² closest to origin.",
    solution: "1. D² = x² + (1-x²)² = x² + 1 - 2x² + x^4 = x^4 - x² + 1. 2. f' = 4x³ - 2x = 0 => x² = 0.5 => x = 1/√2. y = 1 - 0.5 = 0.5.",
    finalAnswer: "(0.707, 0.5)",
    type: "free-response"
  },
  {
    id: "opt-prox-8",
    difficulty: "Hard",
    category: "Proximity/Distance",
    statement: "Find point on x² - y² = 1 closest to (0, 0).",
    solution: "1. x² = 1 + y². D² = 1 + y² + y² = 1 + 2y². 2. Min at y=0 => x=±1. Points (±1, 0).",
    finalAnswer: "(1, 0)",
    type: "free-response"
  },
  {
    id: "opt-cost-5",
    difficulty: "Hard",
    category: "Cost Optimization",
    statement: "Pipeline to refinery. Cost water 5, land 3. 4km out, 10km down. hit shore?",
    solution: "1. C = 5*sqrt(x²+16) + 3(10-x). 2. C' = 5x/sqrt(x²+16) - 3 = 0 => 5x = 3sqrt(x²+16) => 25x² = 9(x²+16) = 9x² + 144. 3. 16x² = 144 => x²=9 => x=3.",
    finalAnswer: "3",
    type: "free-response"
  },
  {
    id: "opt-rect-12",
    difficulty: "Hard",
    category: "Rectilinear Optimization",
    statement: "A wire 20cm long cut into 2 pieces: square and equilateral triangle. Minimize area sum.",
    solution: "1. 4x + 3y = 20. A = x² + (√3/4)y². 2. dA/dy = 0 => y = 20√3 / (9+4√3).",
    finalAnswer: "y \\approx 2.18 \\text{ cm}",
    type: "free-response"
  },
  {
    id: "opt-rect-13",
    difficulty: "Hard",
    category: "Rectilinear Optimization",
    statement: "Fence off a rectangular area 1000m² next to a stone wall (one side no fence). The side opposite the wall costs 10/m, others 5/m. Min cost?",
    solution: "1. C = 10y + 10x. xy=1000. 2. Result is square 31.62.",
    finalAnswer: "x=y=31.62",
    type: "free-response"
  },
  {
    id: "opt-rect-14",
    difficulty: "Hard",
    category: "Rectilinear Optimization",
    statement: "If 100m of wire makes a rectangle. Max area?",
    solution: "1. 25x25 = 625.",
    finalAnswer: "625",
    type: "free-response"
  },
  {
    id: "opt-rect-15",
    difficulty: "Hard",
    category: "Rectilinear Optimization",
    statement: "Area 100. Min perimeter?",
    solution: "1. s=10. P=40.",
    finalAnswer: "40",
    type: "free-response"
  },
  {
    id: "opt-rect-16",
    difficulty: "Hard",
    category: "Rectilinear Optimization",
    statement: "A right triangle has hypotenuse 10. Max area?",
    solution: "1. Legs equal => x² + x² = 100 => x=√50. Area = 0.5(50) = 25.",
    finalAnswer: "25",
    type: "free-response"
  },
  {
    id: "opt-rect-17",
    difficulty: "Hard",
    category: "Rectilinear Optimization",
    statement: "Perimeter 40. Max area of rectangle?",
    solution: "1. 10x10=100.",
    finalAnswer: "100",
    type: "free-response"
  },
  {
    id: "opt-rect-18",
    difficulty: "Hard",
    category: "Rectilinear Optimization",
    statement: "Maximize area of rectangle in y = 9-x².",
    solution: "1. A = 2x(9-x²) = 18x - 2x³. A' = 18 - 6x² = 0 => x=√3. h=6. Area=12√3.",
    finalAnswer: "12\\sqrt{3}",
    type: "free-response"
  },
  {
    id: "opt-rect-19",
    difficulty: "Hard",
    category: "Rectilinear Optimization",
    statement: "Dimensions of rectangle with max area given perimeter P.",
    solution: "1. Square side P/4.",
    finalAnswer: "P/4",
    type: "free-response"
  },
  {
    id: "opt-rect-20",
    difficulty: "Hard",
    category: "Rectilinear Optimization",
    statement: "Minimum perimeter of rectangle with area A.",
    solution: "1. 4√A.",
    finalAnswer: "4\\sqrt{A}",
    type: "free-response"
  },
  {
    id: "opt-box-10",
    difficulty: "Hard",
    category: "Open-Top Boxes",
    statement: "Box with square base, volume 4000. SA = x² + 4000/x * 4. Min SA?",
    solution: "1. SA = x² + 16000/x. 2. SA' = 2x - 16000/x² = 0 => x³=8000 => x=20. h=10.",
    finalAnswer: "x=20, h=10",
    type: "free-response"
  },
  {
    id: "opt-box-11",
    difficulty: "Hard",
    category: "Open-Top Boxes",
    statement: "Material cost 3 for base, 2 for sides. Vol 10. Min cost?",
    solution: "1. C = 3x² + 8xh = 3x² + 80/x. 2. C' = 6x - 80/x² = 0 => 6x³=80 => x = (40/3)^(1/3).",
    finalAnswer: "\\sqrt[3]{40/3}",
    type: "free-response"
  },
  {
    id: "opt-box-12",
    difficulty: "Hard",
    category: "Open-Top Boxes",
    statement: "Surface area 600. Max volume of square base box with top?",
    solution: "1. 6x² = 600 => x=10. V=1000.",
    finalAnswer: "1000",
    type: "free-response"
  },
  {
    id: "opt-box-13",
    difficulty: "Hard",
    category: "Open-Top Boxes",
    statement: "Open box, square base, area of material 1200. Max volume?",
    solution: "1. x² + 4xh = 1200. V = (1200x - x³)/4. x²=400 => x=20. V=4000.",
    finalAnswer: "4000",
    type: "free-response"
  },
  {
    id: "opt-box-14",
    difficulty: "Hard",
    category: "Open-Top Boxes",
    statement: "Box volume V. Min surface area ratio h/x?",
    solution: "1. 1/2 for open, 1 for closed.",
    finalAnswer: "0.5",
    type: "free-response"
  },
  {
    id: "opt-box-15",
    difficulty: "Hard",
    category: "Open-Top Boxes",
    statement: "If one side is 3x width. Vol V. Min SA?",
    solution: "1. V = 3w²h. ... Result is h/w = 1.5.",
    finalAnswer: "1.5",
    type: "free-response"
  },
  {
    id: "opt-box-16",
    difficulty: "Hard",
    category: "Open-Top Boxes",
    statement: "Find volume of largest open box made from 1m square.",
    solution: "1. x = 1/6. V = (1/6)(2/3)² = 4/54 = 2/27 ≈ 0.074.",
    finalAnswer: "0.074",
    type: "free-response"
  },
  {
    id: "opt-box-17",
    difficulty: "Hard",
    category: "Open-Top Boxes",
    statement: "Largest box in sphere radius R.",
    solution: "1. Cube side 2R/√3.",
    finalAnswer: "\\frac{2R}{\\sqrt{3}}",
    type: "free-response"
  },
  {
    id: "opt-box-18",
    difficulty: "Hard",
    category: "Open-Top Boxes",
    statement: "Sum of edge lengths 12m. Largest volume cube?",
    solution: "1. 12x = 12 => x=1. V=1.",
    finalAnswer: "1",
    type: "free-response"
  },
  {
    id: "opt-box-19",
    difficulty: "Hard",
    category: "Open-Top Boxes",
    statement: "Surface area of closed box is 54. Max volume?",
    solution: "1. 6x² = 54 => x=3. V=27.",
    finalAnswer: "27",
    type: "free-response"
  },
  {
    id: "opt-box-20",
    difficulty: "Hard",
    category: "Open-Top Boxes",
    statement: "Minimum SA of box with Vol V.",
    solution: "1. 6 V^(2/3).",
    finalAnswer: "6 V^{2/3}",
    type: "free-response"
  },
  {
    id: "opt-ins-11",
    difficulty: "Hard",
    category: "Inscribed Shapes",
    statement: "Largest rectangle in ellipse x²/a² + y²/b² = 1.",
    solution: "1. 2ab.",
    finalAnswer: "2ab",
    type: "free-response"
  },
  {
    id: "opt-ins-12",
    difficulty: "Hard",
    category: "Inscribed Shapes",
    statement: "Largest cylinder in a sphere of radius 10.",
    solution: "1. h = 20/√3 ≈ 11.55.",
    finalAnswer: "11.55",
    type: "free-response"
  },
  {
    id: "opt-ins-13",
    difficulty: "Hard",
    category: "Inscribed Shapes",
    statement: "Largest cylinder in a cone height 12, radius 4.",
    solution: "1. h=4, r=2.67.",
    finalAnswer: "h=4, r=8/3",
    type: "free-response"
  },
  {
    id: "opt-ins-14",
    difficulty: "Hard",
    category: "Inscribed Shapes",
    statement: "Largest area of rectangle in y = exp(-x²).",
    solution: "1. A = 2x exp(-x²). A' = 2 exp(-x²) (1 - 2x²) = 0 => x = 1/√2. Area = sqrt(2/e).",
    finalAnswer: "0.858",
    type: "free-response"
  },
  {
    id: "opt-ins-15",
    difficulty: "Hard",
    category: "Inscribed Shapes",
    statement: "Find largest triangle in a circle.",
    solution: "1. Equilateral.",
    finalAnswer: "\\text{Equilateral}",
    type: "free-response"
  },
  {
    id: "opt-ins-16",
    difficulty: "Hard",
    category: "Inscribed Shapes",
    statement: "Largest sphere in a cone.",
    solution: "1. Geometric derivation.",
    finalAnswer: "\\text{Consult Geometry}",
    type: "free-response"
  },
  {
    id: "opt-ins-17",
    difficulty: "Hard",
    category: "Inscribed Shapes",
    statement: "Largest cylinder surface area in sphere.",
    solution: "1. h=√2 R.",
    finalAnswer: "h = R \\sqrt{2}",
    type: "free-response"
  },
  {
    id: "opt-ins-18",
    difficulty: "Hard",
    category: "Inscribed Shapes",
    statement: "Largest area of rectangle in y = 10 - x² / 10.",
    solution: "1. Similar to earlier x = sqrt(100/3).",
    finalAnswer: "5.77",
    type: "free-response"
  },
  {
    id: "opt-ins-19",
    difficulty: "Hard",
    category: "Inscribed Shapes",
    statement: "Largest isosceles triangle with perim P.",
    solution: "1. Equilateral side P/3.",
    finalAnswer: "P/3",
    type: "free-response"
  },
  {
    id: "opt-ins-20",
    difficulty: "Hard",
    category: "Inscribed Shapes",
    statement: "Largest rectangle with perim P.",
    solution: "1. Square.",
    finalAnswer: "\\text{Square}",
    type: "free-response"
  },
  {
    id: "opt-prox-9",
    difficulty: "Hard",
    category: "Proximity/Distance",
    statement: "Find point on y = mx + b closest to origin.",
    solution: "1. (-mb/(1+m²), b/(1+m²)).",
    finalAnswer: "\\text{Formula}",
    type: "free-response"
  },
  {
    id: "opt-prox-10",
    difficulty: "Hard",
    category: "Proximity/Distance",
    statement: "Find point on y = x³ closest to (1, 1).",
    solution: "1. f(x) = (x-1)² + (x³-1)². f' = 2(x-1) + 2(x³-1)*3x² = 0. x=1 is min.",
    finalAnswer: "(1, 1)",
    type: "free-response"
  },
  {
    id: "opt-prox-11",
    difficulty: "Hard",
    category: "Proximity/Distance",
    statement: "Point on y = 1/x closest to origin.",
    solution: "1. D² = x² + 1/x². x=1. Point (1, 1).",
    finalAnswer: "(1, 1)",
    type: "free-response"
  },
  {
    id: "opt-prox-12",
    difficulty: "Hard",
    category: "Proximity/Distance",
    statement: "Point on y = 2x + 1 closest to (4, 4).",
    solution: "1. Line perp is y-4 = -0.5(x-4). Intersection with y=2x+1. 2x+1-4 = -0.5x+2 => 2.5x = 5 => x=2, y=5. Point (2, 5).",
    finalAnswer: "(2, 5)",
    type: "free-response"
  },
  {
    id: "opt-prox-13",
    difficulty: "Hard",
    category: "Proximity/Distance",
    statement: "Point on y = sqrt(x) closest to (2, 0).",
    solution: "1. D² = (x-2)² + x = x² - 3x + 4. x = 1.5. y = sqrt(1.5).",
    finalAnswer: "(1.5, 1.22)",
    type: "free-response"
  },
  {
    id: "opt-prox-14",
    difficulty: "Hard",
    category: "Proximity/Distance",
    statement: "Closest distance from (0, 0) to x-y=10.",
    solution: "1. (5, -5). Dist = 5√2.",
    finalAnswer: "7.07",
    type: "free-response"
  },
  {
    id: "opt-prox-15",
    difficulty: "Hard",
    category: "Proximity/Distance",
    statement: "Point on y=ln x closest to origin.",
    solution: "1. f(x) = x² + (ln x)². f' = 2x + 2(ln x)/x = 0. Solve numerically.",
    finalAnswer: "0.65",
    type: "free-response"
  },
  {
    id: "opt-prox-16",
    difficulty: "Hard",
    category: "Proximity/Distance",
    statement: "Find point on x² + y² = 1 furthest from (2, 2).",
    solution: "1. (-1/√2, -1/√2).",
    finalAnswer: "-0.707, -0.707",
    type: "free-response"
  },
  {
    id: "opt-prox-17",
    difficulty: "Hard",
    category: "Proximity/Distance",
    statement: "Closest distance between y = x² and y = x - 1.",
    solution: "1. Solve for tangent slope 1. 2x=1 => x=0.5. Point (0.5, 0.25). Dist to y=x-1 is |0.5-0.25-1|/√2 = 0.75/√2.",
    finalAnswer: "0.53",
    type: "free-response"
  },
  {
    id: "opt-prox-18",
    difficulty: "Hard",
    category: "Proximity/Distance",
    statement: "Find point on circle x² + y² = 25 closest to (10, 0).",
    solution: "1. (5, 0).",
    finalAnswer: "(5, 0)",
    type: "free-response"
  },
  {
    id: "opt-prox-19",
    difficulty: "Hard",
    category: "Proximity/Distance",
    statement: "Find point on y = x² + 1 closest to origin.",
    solution: "1. 0,1.",
    finalAnswer: "0,1",
    type: "free-response"
  },
  {
    id: "opt-prox-20",
    difficulty: "Hard",
    category: "Proximity/Distance",
    statement: "Minimum distance between (0, 0) and y = 1/x.",
    solution: "1. √2.",
    finalAnswer: "\\sqrt{2}",
    type: "free-response"
  },
  {
    id: "opt-cost-6",
    difficulty: "Hard",
    category: "Cost Optimization",
    statement: "Road to city. Cost 10 on route, 20 off. hit Route at what point?",
    solution: "1. Similar to pipeline. x = h/sqrt(3).",
    finalAnswer: "\\text{Formula}",
    type: "free-response"
  },
  {
    id: "opt-cost-7",
    difficulty: "Hard",
    category: "Cost Optimization",
    statement: "Can volume V. Top costs double. Min cost h/r?",
    solution: "1. 3.",
    finalAnswer: "3",
    type: "free-response"
  },
  {
    id: "opt-cost-8",
    difficulty: "Hard",
    category: "Cost Optimization",
    statement: "Minimize cost of shipping Container with area A.",
    solution: "1. Depends on rates.",
    finalAnswer: "\\text{Varies}",
    type: "free-response"
  },
  {
    id: "opt-cost-9",
    difficulty: "Hard",
    category: "Cost Optimization",
    statement: "Find dimensions of cheapest 2L jug.",
    solution: "1. h=2r roughly if materials equal.",
    finalAnswer: "\\text{Depends on shape}",
    type: "free-response"
  },
  {
    id: "opt-cost-10",
    difficulty: "Hard",
    category: "Cost Optimization",
    statement: "Minimal cost to fence three sides of garden.",
    solution: "1. x=2y style optimization.",
    finalAnswer: "\\text{Formula}",
    type: "free-response"
  },
  {
    id: "opt-cost-11",
    difficulty: "Hard",
    category: "Cost Optimization",
    statement: "Lowest cost for electrical wiring from point A to B.",
    solution: "1. Pythagoras optimization.",
    finalAnswer: "\\text{Complex}",
    type: "free-response"
  },
  {
    id: "opt-cost-12",
    difficulty: "Hard",
    category: "Cost Optimization",
    statement: "Minimize fuel cost for truck driving v km/h.",
    solution: "1. Cost = Rate * Time. f(v) = k v² * D/v = kDv. Plus labor cost labor/v. f(v) = kDv + CD/v. Min at v=sqrt(C/k).",
    finalAnswer: "\\sqrt{C/k}",
    type: "free-response"
  },
  {
    id: "opt-cost-13",
    difficulty: "Hard",
    category: "Cost Optimization",
    statement: "Dimensions of rectangle with cost-weighted perimeter.",
    solution: "1. Weighted side lengths.",
    finalAnswer: "\\text{Formula}",
    type: "free-response"
  },
  {
    id: "opt-cost-14",
    difficulty: "Hard",
    category: "Cost Optimization",
    statement: "Minimal surface area of a box with volume 1000.",
    solution: "1. Cube side 10. SA = 600.",
    finalAnswer: "600",
    type: "free-response"
  },
  {
    id: "opt-cost-15",
    difficulty: "Hard",
    category: "Cost Optimization",
    statement: "Cost to build a 50m³ tank with square base. Base costs 100, sides 50. Min cost?",
    solution: "1. C = 100x² + 200(50/x) * 4? No. C = 100x² + 200xh. 2. Result x=2.71.",
    finalAnswer: "2.71",
    type: "free-response"
  },
  {
    id: "opt-cost-16",
    difficulty: "Hard",
    category: "Cost Optimization",
    statement: "Minimize cost of wire per meter.",
    solution: "1. Linear optimization.",
    finalAnswer: "\\text{N/A}",
    type: "free-response"
  },
  {
    id: "opt-cost-17",
    difficulty: "Hard",
    category: "Cost Optimization",
    statement: "Cost for printing a book of area A. Margins cost C.",
    solution: "1. Ratio of margins.",
    finalAnswer: "\\text{Formula}",
    type: "free-response"
  },
  {
    id: "opt-cost-18",
    difficulty: "Hard",
    category: "Cost Optimization",
    statement: "Minimize labor costs.",
    solution: "1. Time optimization.",
    finalAnswer: "\\text{Complex}",
    type: "free-response"
  },
  {
    id: "opt-cost-19",
    difficulty: "Hard",
    category: "Cost Optimization",
    statement: "Optimal speed for ship in water.",
    solution: "1. Resistance v³. v=sqrt[3]{P/k}.",
    finalAnswer: "\\text{Formula}",
    type: "free-response"
  },
  {
    id: "opt-cost-20",
    difficulty: "Hard",
    category: "Cost Optimization",
    statement: "Minimal weight of container.",
    solution: "1. Area min.",
    finalAnswer: "\\text{Area min}",
    type: "free-response"
  }
];





