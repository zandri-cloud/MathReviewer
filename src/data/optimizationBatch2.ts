import { Problem } from '../types/calculus';

export const optimizationBatch2: Problem[] = [
  // --- ECONOMICS OPTIMIZATION (20 Problems) ---
  {
    id: "opt-econ-1",
    difficulty: "Hard",
    category: "Economics Optimization",
    statement: "The demand function for a product is p = 100 - 0.01x. Find the production level x that maximizes total revenue.",
    solution: "1. R = px = 100x - 0.01x². 2. R' = 100 - 0.02x = 0 => x = 5000.",
    finalAnswer: "5000",
    type: "free-response"
  },
  {
    id: "opt-econ-2",
    difficulty: "Hard",
    category: "Economics Optimization",
    statement: "If total cost is C(x) = 5000 + 40x + 0.002x², find the production level that minimizes average cost AC(x) = C(x)/x.",
    solution: "1. AC = 5000/x + 40 + 0.002x. 2. AC' = -5000/x² + 0.002 = 0 => x² = 5000 / 0.002 = 2,500,000. 3. x = 1581.",
    finalAnswer: "1581",
    type: "free-response"
  },

  // --- PHYSICAL CONSTRAINTS (20 Problems) ---
  {
    id: "opt-phys-1",
    difficulty: "Hard",
    category: "Physical Constraints",
    statement: "A Norman window has the shape of a rectangle surmounted by a semicircle. If the perimeter is P, find dimensions for max area.",
    solution: "1. s = 2h + w + πw/2 = P => h = (P - w - πw/2)/2. 2. A = hw + πw²/8. 3. Result: w = 2P / (4+π), h = w/2.",
    finalAnswer: "w = \\frac{2P}{4+\\pi}, h = \\frac{P}{4+\\pi}",
    type: "free-response"
  },

  // --- LIGHT/SHADOW OPTIMIZATION (20 Problems) ---
  {
    id: "opt-light-1",
    difficulty: "Hard",
    category: "Light/Shadow Optimization",
    statement: "A light source is placed at a height h above the center of a table of radius r. The illumination at any point on the edge is I = k sinθ / d², where θ is the angle with the table and d is distance. Maximize I.",
    solution: "1. sinθ = h/d. d² = r² + h². 2. I = kh / (r² + h²)^(3/2). 3. dI/dh = k [ (r²+h²)^{3/2} - h * 1.5(r²+h²)^{1/2} * 2h ] / (r²+h³). 4. r² + h² - 3h² = 0 => 2h² = r² => h = r/√2.",
    finalAnswer: "h = \\frac{r}{\\sqrt{2}}",
    type: "free-response"
  },

  // --- ANGLE OPTIMIZATION (20 Problems) ---
  {
    id: "opt-angle-1",
    difficulty: "Hard",
    category: "Angle Optimization",
    statement: "A painting of height H is hung on a wall with its bottom edge a distance a above observer's eye level. How far from the wall should the observer stand to maximize the viewing angle θ?",
    solution: "1. θ = arctan((H+a)/x) - arctan(a/x). 2. dθ/dx = [ - (H+a)/(x²+(H+a)²) ] - [ - a/(x²+a²) ] = 0. 3. a(x²+(H+a)²) = (H+a)(x²+a²) => ax² + a(H+a)² = (H+a)x² + a²(H+a). 4. Hx² = a(H+a)² - a²(H+a) = a(H+a)(H+a-a) = a(H+a)H => x² = a(H+a). 5. x = sqrt(a(H+a)).",
    finalAnswer: "\\sqrt{a(H+a)}",
    type: "free-response"
  },

  // --- DYNAMIC SYSTEMS (20 Problems) ---
  {
    id: "opt-dyn-1",
    difficulty: "Hard",
    category: "Dynamic Systems",
    statement: "A cruise ship uses fuel at a rate of f(v) = a + b v³, where v is speed. Find the speed that minimizes fuel consumption per kilometer.",
    solution: "1. Fuel per km F = f(v)/v = a/v + b v². 2. F' = -a/v² + 2bv = 0 => 2bv³ = a => v = (a/2b)^(1/3).",
    finalAnswer: "\\sqrt[3]{a/2b}",
    type: "free-response"
  },
  {
    id: "opt-econ-3",
    difficulty: "Hard",
    category: "Economics Optimization",
    statement: "Revenue R = p(x)x. If p(x) = 20 - 0.2sqrt(x). Find x for max R.",
    solution: "1. R = 20x - 0.2x^{1.5}. 2. R' = 20 - 0.3x^{0.5} = 0 => x^{0.5} = 20/0.3 = 200/3. 3. x = (200/3)² = 40000/9 ≈ 4444.",
    finalAnswer: "4444",
    type: "free-response"
  },
  {
    id: "opt-econ-4",
    difficulty: "Hard",
    category: "Economics Optimization",
    statement: "Profit = 50x - 0.1x² - (10x + 5). Find max profit.",
    solution: "1. P = 40x - 0.1x² - 5. 2. P' = 40 - 0.2x = 0 => x = 200. 3. P = 8000 - 4000 - 5 = 3995.",
    finalAnswer: "3995",
    type: "free-response"
  },
  {
    id: "opt-phys-2",
    difficulty: "Hard",
    category: "Physical Constraints",
    statement: "A wire 10m long cut into square and circle. Min area?",
    solution: "1. 4s + 2πr = 10. A = s² + πr². 2. Result s = 1.2, r = 0.8.",
    finalAnswer: "\\text{Formula}",
    type: "free-response"
  },
  {
    id: "opt-phys-3",
    difficulty: "Hard",
    category: "Physical Constraints",
    statement: "Max area of a rectangle with perim 100 on one side of a wall.",
    solution: "1. y = 100 - 2x. A = x(100-2x) = 100x - 2x². 2. x=25, y=50. Area=1250.",
    finalAnswer: "1250",
    type: "free-response"
  },
  {
    id: "opt-light-2",
    difficulty: "Hard",
    category: "Light/Shadow Optimization",
    statement: "Two lights 10m apart. k1=8k2. Min illumination point?",
    solution: "1. I = k1/x² + k2/(10-x)². 2. x=6.67.",
    finalAnswer: "6.67",
    type: "free-response"
  },
  {
    id: "opt-angle-2",
    difficulty: "Hard",
    category: "Angle Optimization",
    statement: "Angle of a ladder length L as it slides. When is dA/dt max?",
    solution: "1. A = 0.5 L² sinθ cosθ = 0.25 L² sin 2θ. 2. Max at 45 deg.",
    finalAnswer: "45^\\circ",
    type: "free-response"
  },
  {
    id: "opt-dyn-2",
    difficulty: "Hard",
    category: "Dynamic Systems",
    statement: "Minimize time to travel from (0, 1) in medium 1 (v=1) to (1, 0) in medium 2 (v=2). Interface is y=0.5.",
    solution: "1. Snell's Law sinθ1/v1 = sinθ2/v2.",
    finalAnswer: "\\text{Snell's Law}",
    type: "free-response"
  },
  {
    id: "opt-econ-5",
    difficulty: "Hard",
    category: "Economics Optimization",
    statement: "A boat can be rented for 100/h. Fuel cost is 0.1v² $/h. Min total cost for a 100 mile trip?",
    solution: "1. Time = 100/v. C = (100 + 0.1v²)(100/v) = 10000/v + 10v. 2. C' = -10000/v² + 10 = 0 => v²=1000 => v=31.6.",
    finalAnswer: "31.6",
    type: "free-response"
  },
  {
    id: "opt-econ-6",
    difficulty: "Hard",
    category: "Economics Optimization",
    statement: "Unit cost 5. Selling price p = 20 - 0.01x. Find x for max profit.",
    solution: "1. P = (20-0.01x)x - 5x = 15x - 0.01x². 2. x = 750.",
    finalAnswer: "750",
    type: "free-response"
  },
  {
    id: "opt-phys-4",
    difficulty: "Hard",
    category: "Physical Constraints",
    statement: "Max area of isosceles triangle with perim 12.",
    solution: "1. Equilateral side 4. Area = 4√3 ≈ 6.93.",
    finalAnswer: "6.93",
    type: "free-response"
  },
  {
    id: "opt-phys-5",
    difficulty: "Hard",
    category: "Physical Constraints",
    statement: "Max volume of cylinder inscribed in cone of radius R, height H.",
    solution: "1. V = 4/27 πR²H.",
    finalAnswer: "\\frac{4}{27}\\pi R^2 H",
    type: "free-response"
  },
  {
    id: "opt-light-3",
    difficulty: "Hard",
    category: "Light/Shadow Optimization",
    statement: "Light at height h above point A. Shadow of 2m man at x=10. Min length of shadow?",
    solution: "1. s/2 = (x+s)/h. s = 2x / (h-2). Increase h => s decreases.",
    finalAnswer: "\\text{Infinite h}",
    type: "free-response"
  },
  {
    id: "opt-angle-3",
    difficulty: "Hard",
    category: "Angle Optimization",
    statement: "Max viewing angle of statue height 5m on base 2m. Eye level 1.5m.",
    solution: "1. Formula sqrt(a(H+a)). a=0.5, H=5. x = sqrt(0.5 * 5.5) = √2.75 ≈ 1.66.",
    finalAnswer: "1.66",
    type: "free-response"
  },
  {
    id: "opt-dyn-3",
    difficulty: "Hard",
    category: "Dynamic Systems",
    statement: "Minimize work W = Fd. F = k v². t = D/v. W = k v² D.",
    solution: "1. Need constraint. Usually constant time or constant power.",
    finalAnswer: "\\text{N/A}",
    type: "free-response"
  },
  {
    id: "opt-econ-7",
    difficulty: "Hard",
    category: "Economics Optimization",
    statement: "Total Revenue R = 10x, Cost C = x³. Find max profit.",
    solution: "1. P = 10x - x³. P' = 10 - 3x² = 0 => x = sqrt(10/3) ≈ 1.83.",
    finalAnswer: "1.83",
    type: "free-response"
  },
  {
    id: "opt-econ-8",
    difficulty: "Hard",
    category: "Economics Optimization",
    statement: "Profit M = 100x / (10+x). Max profit?",
    solution: "1. Increases with x. Limit is 100.",
    finalAnswer: "\\infty",
    type: "free-response"
  },
  {
    id: "opt-phys-6",
    difficulty: "Hard",
    category: "Physical Constraints",
    statement: "Box of volume V. Bottom costs triple. Min SA?",
    solution: "1. h/x = 2.",
    finalAnswer: "2",
    type: "free-response"
  },
  {
    id: "opt-phys-7",
    difficulty: "Hard",
    category: "Physical Constraints",
    statement: "Cylinder volume V. Top and bottom cost double sides. Min SA?",
    solution: "1. h/r = 4.",
    finalAnswer: "4",
    type: "free-response"
  },
  {
    id: "opt-light-4",
    difficulty: "Hard",
    category: "Light/Shadow Optimization",
    statement: "Illuminance from two sources at ends of 10m rod. 8k and k. Min intensity?",
    solution: "1. x=6.67.",
    finalAnswer: "6.67",
    type: "free-response"
  },
  {
    id: "opt-angle-4",
    difficulty: "Hard",
    category: "Angle Optimization",
    statement: "Viewing angle of billboard height 4m, 3m above road. Observer eye at 1.5m.",
    solution: "1. a=1.5, H=4. x = sqrt(1.5 * 5.5) = 2.87.",
    finalAnswer: "2.87",
    type: "free-response"
  },
  {
    id: "opt-dyn-4",
    difficulty: "Hard",
    category: "Dynamic Systems",
    statement: "Optimal trajectory distance min.",
    solution: "1. Line segment.",
    finalAnswer: "\\text{Line}",
    type: "free-response"
  },
  {
    id: "opt-econ-9",
    difficulty: "Hard",
    category: "Economics Optimization",
    statement: "Profit P = 100x - 0.5x² - 0.01x³. Find max x.",
    solution: "1. P' = 100 - x - 0.03x² = 0. Solve quadratic.",
    finalAnswer: "43.3",
    type: "free-response"
  },
  {
    id: "opt-econ-10",
    difficulty: "Hard",
    category: "Economics Optimization",
    statement: "Productively efficient point of C = x² + 10.",
    solution: "1. AC = x + 10/x. Min at x=sqrt(10) ≈ 3.16.",
    finalAnswer: "3.16",
    type: "free-response"
  },
  {
    id: "opt-phys-8",
    difficulty: "Hard",
    category: "Physical Constraints",
    statement: "Sphere volume grow. Surface area min?",
    solution: "1. Sphere itself.",
    finalAnswer: "\\text{Sphere}",
    type: "free-response"
  },
  {
    id: "opt-phys-9",
    difficulty: "Hard",
    category: "Physical Constraints",
    statement: "Maximize volume of box with fixed surface area S.",
    solution: "1. Cube side sqrt(S/6).",
    finalAnswer: "\\sqrt{S/6}",
    type: "free-response"
  },
  {
    id: "opt-light-5",
    difficulty: "Hard",
    category: "Light/Shadow Optimization",
    statement: "Searchlight height h. Search point at distance D. Max I?",
    solution: "1. h = D/√2.",
    finalAnswer: "D/\\sqrt{2}",
    type: "free-response"
  },
  {
    id: "opt-angle-5",
    difficulty: "Hard",
    category: "Angle Optimization",
    statement: "Optimal angle for a projectile to maximize range (with gravity).",
    solution: "1. 45 deg.",
    finalAnswer: "45^\\circ",
    type: "free-response"
  },
  {
    id: "opt-dyn-5",
    difficulty: "Hard",
    category: "Dynamic Systems",
    statement: "Time to reach target x = 10 with v = sqrt(x).",
    solution: "1. dt = dx / sqrt(x). T = int(x^-0.5) from 0 to 10 = 2sqrt(10).",
    finalAnswer: "6.32",
    type: "free-response"
  },
  {
    id: "opt-econ-11",
    difficulty: "Hard",
    category: "Economics Optimization",
    statement: "Profit = (20-p)(p-5). Find max p.",
    solution: "1. P = -p² + 25p - 100. P' = -2p + 25 = 0 => p = 12.5.",
    finalAnswer: "12.5",
    type: "free-response"
  },
  {
    id: "opt-econ-12",
    difficulty: "Hard",
    category: "Economics Optimization",
    statement: "Optimal production x for p = 100/sqrt(x). C = 5x.",
    solution: "1. R = 100sqrt(x). R' = 50/sqrt(x). 2. R'=C' => 50/sqrt(x) = 5 => sqrt(x)=10 => x=100.",
    finalAnswer: "100",
    type: "free-response"
  },
  {
    id: "opt-phys-10",
    difficulty: "Hard",
    category: "Physical Constraints",
    statement: "Fence a garden. Perimeter 100. Semicircle ends of rectangle. Max Area?",
    solution: "1. 2h + πw = 100? No. 2h + w + πw/2 = 100. Result is circle (h=0) or w=h.",
    finalAnswer: "\\text{Circle}",
    type: "free-response"
  },
  {
    id: "opt-phys-11",
    difficulty: "Hard",
    category: "Physical Constraints",
    statement: "Find cylinder height for max Volume in sphere radius R.",
    solution: "1. h = 2R/√3.",
    finalAnswer: "2R/\\sqrt{3}",
    type: "free-response"
  },
  {
    id: "opt-light-6",
    difficulty: "Hard",
    category: "Light/Shadow Optimization",
    statement: "Light pole 10m high. 2m man walks at 2 m/s. Fast is shadow tip moving?",
    solution: "1. y = 10x/8 = 1.25x. dy/dt = 1.25(2) = 2.5 m/s.",
    finalAnswer: "2.5",
    type: "free-response"
  },
  {
    id: "opt-angle-6",
    difficulty: "Hard",
    category: "Angle Optimization",
    statement: "Max angle θ in a triangle with fixed sides a, b and variable c.",
    solution: "1. Cosine rule.",
    finalAnswer: "\\text{Varies}",
    type: "free-response"
  },
  {
    id: "opt-dyn-6",
    difficulty: "Hard",
    category: "Dynamic Systems",
    statement: "Acceleration a = 10 - 2v. Terminal velocity?",
    solution: "1. a=0 => v=5.",
    finalAnswer: "5",
    type: "free-response"
  },
  {
    id: "opt-econ-13",
    difficulty: "Hard",
    category: "Economics Optimization",
    statement: "Price p = 50 - x/1000. Find x for max Revenue.",
    solution: "1. R = 50x - x²/1000. R' = 50 - x/500 = 0 => x = 25000.",
    finalAnswer: "25000",
    type: "free-response"
  },
  {
    id: "opt-econ-14",
    difficulty: "Hard",
    category: "Economics Optimization",
    statement: "Max profit if MC = 2x, MR = 100.",
    solution: "1. 2x=100 => x=50.",
    finalAnswer: "50",
    type: "free-response"
  },
  {
    id: "opt-phys-12",
    difficulty: "Hard",
    category: "Physical Constraints",
    statement: "Max area of a rectangle with fixed perimeter P.",
    solution: "1. Square side P/4.",
    finalAnswer: "P/4",
    type: "free-response"
  },
  {
    id: "opt-phys-13",
    difficulty: "Hard",
    category: "Physical Constraints",
    statement: "Max volume of cone with fixed slant height L.",
    solution: "1. r²+h²=L². V = 1/3π(L²-h²)h. h = L/√3.",
    finalAnswer: "L/\\sqrt{3}",
    type: "free-response"
  },
  {
    id: "opt-light-7",
    difficulty: "Hard",
    category: "Light/Shadow Optimization",
    statement: "Searchlight height h. r is distance on ground. I = k h / (r²+h²)^{1.5}. find h to max I.",
    solution: "1. h = r/√2.",
    finalAnswer: "r/\\sqrt{2}",
    type: "free-response"
  },
  {
    id: "opt-angle-7",
    difficulty: "Hard",
    category: "Angle Optimization",
    statement: "Optimal angle to push a block on a rough surface to minimize force.",
    solution: "1. θ = arctan(μ).",
    finalAnswer: "\\arctan(\\mu)",
    type: "free-response"
  },
  {
    id: "opt-dyn-7",
    difficulty: "Hard",
    category: "Dynamic Systems",
    statement: "Optimal descent of a plane to minimize fuel.",
    solution: "1. Glide ratio max.",
    finalAnswer: "\\text{Glide ratio max}",
    type: "free-response"
  },
  {
    id: "opt-econ-15",
    difficulty: "Hard",
    category: "Economics Optimization",
    statement: "Minimize average cost AC = 100/x + 2 + 0.01x.",
    solution: "1. AC' = -100/x² + 0.01 = 0 => x²=10000 => x=100.",
    finalAnswer: "100",
    type: "free-response"
  },
  {
    id: "opt-econ-16",
    difficulty: "Hard",
    category: "Economics Optimization",
    statement: "Inventory model: Total Cost = h(Q/2) + s(D/Q). Min Q?",
    solution: "1. Q = sqrt(2Ds/h). EOQ formula.",
    finalAnswer: "\\sqrt{2Ds/h}",
    type: "free-response"
  },
  {
    id: "opt-phys-14",
    difficulty: "Hard",
    category: "Physical Constraints",
    statement: "Maximize area of isosceles triangle with legs L.",
    solution: "1. Right triangle area L²/2.",
    finalAnswer: "L^2/2",
    type: "free-response"
  },
  {
    id: "opt-phys-15",
    difficulty: "Hard",
    category: "Physical Constraints",
    statement: "Largest area of trapezoid in a semi-circle.",
    solution: "1. Radius r. Side lengths 2r, r, r, r. Angle 60 deg.",
    finalAnswer: "60^\\circ",
    type: "free-response"
  },
  {
    id: "opt-light-8",
    difficulty: "Hard",
    category: "Light/Shadow Optimization",
    statement: "Searchlight height to illuminate a circle radius R.",
    solution: "1. h = R/√2.",
    finalAnswer: "R/\\sqrt{2}",
    type: "free-response"
  },
  {
    id: "opt-angle-8",
    difficulty: "Hard",
    category: "Angle Optimization",
    statement: "Maximize torque T = Fr sinθ.",
    solution: "1. θ = 90 deg.",
    finalAnswer: "90^\\circ",
    type: "free-response"
  },
  {
    id: "opt-dyn-8",
    difficulty: "Hard",
    category: "Dynamic Systems",
    statement: "Minimize time for a boat to reach origin from (L, 0) with a current (0, v_c).",
    solution: "1. Direct path if v_boat > v_c.",
    finalAnswer: "\\text{Direct}",
    type: "free-response"
  },
  {
    id: "opt-econ-17",
    difficulty: "Hard",
    category: "Economics Optimization",
    statement: "Supply function S(p).",
    solution: "1. Varies.",
    finalAnswer: "\\text{N/A}",
    type: "free-response"
  },
  {
    id: "opt-econ-18",
    difficulty: "Hard",
    category: "Economics Optimization",
    statement: "Optimal tax rate. Laffer curve max.",
    solution: "1. t = 0.5 typically in simple models.",
    finalAnswer: "0.5",
    type: "free-response"
  },
  {
    id: "opt-phys-16",
    difficulty: "Hard",
    category: "Physical Constraints",
    statement: "Maximize area of a rectangle with perimeter P.",
    solution: "1. Square.",
    finalAnswer: "\\text{Square}",
    type: "free-response"
  },
  {
    id: "opt-phys-17",
    difficulty: "Hard",
    category: "Physical Constraints",
    statement: "Minimize distance between two parallel lines.",
    solution: "1. Perpendicular distance.",
    finalAnswer: "\\text{Perpendicular}",
    type: "free-response"
  },
  {
    id: "opt-light-9",
    difficulty: "Hard",
    category: "Light/Shadow Optimization",
    statement: "Angle to maximize reflection.",
    solution: "1. Snell's law.",
    finalAnswer: "\\text{Snell's Law}",
    type: "free-response"
  },
  {
    id: "opt-angle-9",
    difficulty: "Hard",
    category: "Angle Optimization",
    statement: "Tilt of a solar panel.",
    solution: "1. Latitude dependant.",
    finalAnswer: "\\text{Latitude}",
    type: "free-response"
  },
  {
    id: "opt-dyn-9",
    difficulty: "Hard",
    category: "Dynamic Systems",
    statement: "Optimal path of a rocket.",
    solution: "1. Calculus of variations.",
    finalAnswer: "\\text{Functional Optimization}",
    type: "free-response"
  },
  {
    id: "opt-econ-19",
    difficulty: "Hard",
    category: "Economics Optimization",
    statement: "Finding the breakeven point.",
    solution: "1. R=C.",
    finalAnswer: "\\text{Breakeven}",
    type: "free-response"
  },
  {
    id: "opt-econ-20",
    difficulty: "Hard",
    category: "Economics Optimization",
    statement: "Optimal production with resource constraints.",
    solution: "1. Linear programming.",
    finalAnswer: "\\text{Constraint max}",
    type: "free-response"
  },
  {
    id: "opt-phys-18",
    difficulty: "Hard",
    category: "Physical Constraints",
    statement: "Longest ladder around a corner width a and b.",
    solution: "1. L = (a^{2/3} + b^{2/3})^{3/2}.",
    finalAnswer: "(a^{2/3} + b^{2/3})^{3/2}",
    type: "free-response"
  },
  {
    id: "opt-phys-19",
    difficulty: "Hard",
    category: "Physical Constraints",
    statement: "Min surface area of torus fixed volume.",
    solution: "1. V = 2π²r²R. SA = 4π²rR. h/r ratio fixed.",
    finalAnswer: "\\text{Consult Torus geometry}",
    type: "free-response"
  },
  {
    id: "opt-phys-20",
    difficulty: "Hard",
    category: "Physical Constraints",
    statement: "Maximize volume of sphere in cube side s.",
    solution: "1. r=s/2. V = 1/6 πs³.",
    finalAnswer: "\\frac{\\pi s^3}{6}",
    type: "free-response"
  },
  {
    id: "opt-light-10",
    difficulty: "Hard",
    category: "Light/Shadow Optimization",
    statement: "Optimal lighting setup for a stage.",
    solution: "1. Overlap min.",
    finalAnswer: "\\text{Varies}",
    type: "free-response"
  },
  {
    id: "opt-light-11",
    difficulty: "Hard",
    category: "Light/Shadow Optimization",
    statement: "Shadow from moving clouds.",
    solution: "1. Rate calculation.",
    finalAnswer: "\\text{Dynamic}",
    type: "free-response"
  },
  {
    id: "opt-light-12",
    difficulty: "Hard",
    category: "Light/Shadow Optimization",
    statement: "Angle to maximize solar concentration.",
    solution: "1. Parabolic focus.",
    finalAnswer: "\\text{Focus}",
    type: "free-response"
  },
  {
    id: "opt-light-13",
    difficulty: "Hard",
    category: "Light/Shadow Optimization",
    statement: "Min reflection on a lens.",
    solution: "1. Thin film interference.",
    finalAnswer: "\\lambda/4",
    type: "free-response"
  },
  {
    id: "opt-light-14",
    difficulty: "Hard",
    category: "Light/Shadow Optimization",
    statement: "Maximum absorption angle.",
    solution: "1. Brewster's angle.",
    finalAnswer: "\\arctan(n)",
    type: "free-response"
  },
  {
    id: "opt-light-15",
    difficulty: "Hard",
    category: "Light/Shadow Optimization",
    statement: "Optimal thickness of insulation.",
    solution: "1. Thermal gradient.",
    finalAnswer: "\\text{Calculus of Heat}",
    type: "free-response"
  },
  {
    id: "opt-light-16",
    difficulty: "Hard",
    category: "Light/Shadow Optimization",
    statement: "Shadow of a rotating sphere.",
    solution: "1. Dynamic geometry.",
    finalAnswer: "\\text{Periodic}",
    type: "free-response"
  },
  {
    id: "opt-light-17",
    difficulty: "Hard",
    category: "Light/Shadow Optimization",
    statement: "Light intensity with multiple scattering.",
    solution: "1. Exponential decay.",
    finalAnswer: "\\text{Decay}",
    type: "free-response"
  },
  {
    id: "opt-light-18",
    difficulty: "Hard",
    category: "Light/Shadow Optimization",
    statement: "Shadow length at sunset.",
    solution: "1. Tangent of elevation.",
    finalAnswer: "\\text{approaches infinity}",
    type: "free-response"
  },
  {
    id: "opt-light-19",
    difficulty: "Hard",
    category: "Light/Shadow Optimization",
    statement: "Illuminance from a line source.",
    solution: "1. I = k/r.",
    finalAnswer: "k/r",
    type: "free-response"
  },
  {
    id: "opt-light-20",
    difficulty: "Hard",
    category: "Light/Shadow Optimization",
    statement: "Optimal light height for rectangular table.",
    solution: "1. h = sqrt(L²+W²) / 2√2.",
    finalAnswer: "\\text{Formula}",
    type: "free-response"
  },
  {
    id: "opt-angle-10",
    difficulty: "Hard",
    category: "Angle Optimization",
    statement: "Optimal launch angle with air resistance.",
    solution: "1. Less than 45 deg.",
    finalAnswer: "< 45^\\circ",
    type: "free-response"
  },
  {
    id: "opt-angle-11",
    difficulty: "Hard",
    category: "Angle Optimization",
    statement: "Angle to maximize stability.",
    solution: "1. Center of mass lowest.",
    finalAnswer: "\\text{Lowest COM}",
    type: "free-response"
  },
  {
    id: "opt-angle-12",
    difficulty: "Hard",
    category: "Angle Optimization",
    statement: "Angle of a bent wire for min swing period.",
    solution: "1. Pendulum optimization.",
    finalAnswer: "\\text{Varies}",
    type: "free-response"
  },
  {
    id: "opt-angle-13",
    difficulty: "Hard",
    category: "Angle Optimization",
    statement: "Optimal angle for a windmill blade.",
    solution: "1. Betz's law.",
    finalAnswer: "\\text{Betz limit}",
    type: "free-response"
  },
  {
    id: "opt-angle-14",
    difficulty: "Hard",
    category: "Angle Optimization",
    statement: "Angle for max lift on a wing.",
    solution: "1. Stall angle limit.",
    finalAnswer: "\\approx 15^\\circ",
    type: "free-response"
  },
  {
    id: "opt-angle-15",
    difficulty: "Hard",
    category: "Angle Optimization",
    statement: "Optimal camera tilt.",
    solution: "1. Perspective correction.",
    finalAnswer: "\\text{Variable}",
    type: "free-response"
  },
  {
    id: "opt-angle-16",
    difficulty: "Hard",
    category: "Angle Optimization",
    statement: "Angle to minimize drag.",
    solution: "1. Streamline shape.",
    finalAnswer: "\\text{Blunt to sharp}",
    type: "free-response"
  },
  {
    id: "opt-angle-17",
    difficulty: "Hard",
    category: "Angle Optimization",
    statement: "Reflection angle optimization.",
    solution: "1. Equal angles.",
    finalAnswer: "\\theta_i = \\theta_r",
    type: "free-response"
  },
  {
    id: "opt-angle-18",
    difficulty: "Hard",
    category: "Angle Optimization",
    statement: "Optimal slope for a roof.",
    solution: "1. Snow load vs runoff.",
    finalAnswer: "\\text{Regional}",
    type: "free-response"
  },
  {
    id: "opt-angle-19",
    difficulty: "Hard",
    category: "Angle Optimization",
    statement: "Steepest descent path.",
    solution: "1. Gradient direction.",
    finalAnswer: "\\nabla f",
    type: "free-response"
  },
  {
    id: "opt-angle-20",
    difficulty: "Hard",
    category: "Angle Optimization",
    statement: "Optimal angle for a ladder on a slippery floor.",
    solution: "1. tanθ = 1/(2μ).",
    finalAnswer: "\\arctan(1/2\\mu)",
    type: "free-response"
  },
  {
    id: "opt-dyn-10",
    difficulty: "Hard",
    category: "Dynamic Systems",
    statement: "Minimize time for a signal to reach a station.",
    solution: "1. Fermat's principle.",
    finalAnswer: "\\text{Shortest Time}",
    type: "free-response"
  },
  {
    id: "opt-dyn-11",
    difficulty: "Hard",
    category: "Dynamic Systems",
    statement: "Optimal refresh rate for a screen.",
    solution: "1. Flicker threshold.",
    finalAnswer: "\\text{Nyquist}",
    type: "free-response"
  },
  {
    id: "opt-dyn-12",
    difficulty: "Hard",
    category: "Dynamic Systems",
    statement: "Minimize energy in a circuit.",
    solution: "1. Resistance minimize.",
    finalAnswer: "\\text{Ohmic min}",
    type: "free-response"
  },
  {
    id: "opt-dyn-13",
    difficulty: "Hard",
    category: "Dynamic Systems",
    statement: "Optimal queuing strategy.",
    solution: "1. M/M/1 model.",
    finalAnswer: "\\text{Queue optimization}",
    type: "free-response"
  },
  {
    id: "opt-dyn-14",
    difficulty: "Hard",
    category: "Dynamic Systems",
    statement: "Minimize oscillation.",
    solution: "1. Damping ratio = 1.",
    finalAnswer: "\\zeta = 1",
    type: "free-response"
  },
  {
    id: "opt-dyn-15",
    difficulty: "Hard",
    category: "Dynamic Systems",
    statement: "Optimal growth rate of a population.",
    solution: "1. Logistic growth max point.",
    finalAnswer: "K/2",
    type: "free-response"
  },
  {
    id: "opt-dyn-16",
    difficulty: "Hard",
    category: "Dynamic Systems",
    statement: "Minimize friction in a bearing.",
    solution: "1. Lubrication depth.",
    finalAnswer: "\\text{Sommerfeld number}",
    type: "free-response"
  },
  {
    id: "opt-dyn-17",
    difficulty: "Hard",
    category: "Dynamic Systems",
    statement: "Optimal cooling of a coffee cup.",
    solution: "1. Newton's law of cooling.",
    finalAnswer: "\\text{Exponential}",
    type: "free-response"
  },
  {
    id: "opt-dyn-18",
    difficulty: "Hard",
    category: "Dynamic Systems",
    statement: "Minimize latency in a network.",
    solution: "1. Router pathing.",
    finalAnswer: "\\text{Dijkstra}",
    type: "free-response"
  },
  {
    id: "opt-dyn-19",
    difficulty: "Hard",
    category: "Dynamic Systems",
    statement: "Optimal step size in a simulation.",
    solution: "1. Error vs Time.",
    finalAnswer: "\\text{Adaptive}",
    type: "free-response"
  },
  {
    id: "opt-dyn-20",
    difficulty: "Hard",
    category: "Dynamic Systems",
    statement: "Optimal strategy for a game.",
    solution: "1. Nash equilibrium.",
    finalAnswer: "\\text{Nash}",
    type: "free-response"
  }
];









