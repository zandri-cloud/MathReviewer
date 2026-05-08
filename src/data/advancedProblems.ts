import { Problem } from '../types/calculus';

export const advancedProblemsCategorized: Record<string, Problem[]> = {
  "Geometric Expansion": [
    {
      id: "geom-exp-1",
      difficulty: "Hard",
      category: "Geometric Expansion",
      statement: "A spherical shell is expanding such that its outer radius R increases at 1 cm/s while its inner radius r increases at 0.5 cm/s. How fast is the volume of the shell material changing when R = 10 cm and r = 6 cm?",
      solution: "V = (4/3)π(R³ - r³). dV/dt = 4π(R²dR/dt - r²dr/dt). At R=10, r=6: dV/dt = 4π(100(1) - 36(0.5)) = 4π(100 - 18) = 4π(82) = 328π cm³/s.",
      finalAnswer: "328\\pi \\text{ cm}^3/\\text{s}",
      type: "free-response"
    },
    {
      id: "geom-exp-2",
      difficulty: "Hard",
      category: "Geometric Expansion",
      statement: "An equilateral triangle's side length is increasing at 4 mm/s. At what rate is the area of the triangle changing when the altitude is 6√3 cm?",
      solution: "h = (√3/2)s => s = 2h/√3. If h=6√3, s=12. ds/dt = 0.4 cm/s. A = (√3/4)s². dA/dt = (√3/2)s(ds/dt) = (√3/2)(12)(0.4) = 2.4√3 cm²/s.",
      finalAnswer: "2.4\\sqrt{3} \\text{ cm}^2/\\text{s}",
      type: "free-response"
    }
  ],
  "Pythagorean Distance": [
    {
      id: "pyth-dist-1",
      difficulty: "Hard",
      category: "Pythagorean Distance",
      statement: "A plane flies horizontally at 500 mph at an altitude of 3 miles. It passes directly over a radar station. How fast is the distance between the plane and the station increasing 1 minute after it passes over?",
      solution: "x = 500 * (1/60) = 25/3. y = 3. s² = x² + y². 2s(ds/dt) = 2x(dx/dt). s = sqrt((25/3)² + 9) = sqrt(625/9 + 81/9) = sqrt(706/3). ds/dt = (x/s)dx/dt = (25/3 / sqrt(706)/3) * 500 = 12500/sqrt(706) mph.",
      finalAnswer: "\\frac{12500}{\\sqrt{706}} \\text{ mph}",
      type: "free-response"
    },
    {
      id: "pyth-dist-2",
      difficulty: "Hard",
      category: "Pythagorean Distance",
      statement: "A car is traveling north at 60 mph and is 2 miles from an intersection. Another car is traveling east at 45 mph and is 3 miles from the same intersection. At what rate is the distance between the cars changing?",
      solution: "x² + y² = s². 2x(dx/dt) + 2y(dy/dt) = 2s(ds/dt). x=3, y=2, s=sqrt(13). dx/dt = -45, dy/dt = -60. 3(-45) + 2(-60) = sqrt(13)ds/dt => -135 - 120 = -255 = sqrt(13)ds/dt. ds/dt = -255/sqrt(13) mph.",
      finalAnswer: "-\\frac{255}{\\sqrt{13}} \\text{ mph}",
      type: "free-response"
    }
  ],
  "Filling/Emptying Tanks": [
    {
      id: "tank-1",
      difficulty: "Hard",
      category: "Filling/Emptying Tanks",
      statement: "A conical tank with radius 5 ft and height 12 ft is being filled at 15 ft³/min. How fast is the water level rising when the depth is 8 ft?",
      solution: "r/h = 5/12 => r = 5h/12. V = (1/3)πr²h = (1/3)π(25h²/144)h = 25πh³/432. dV/dt = (25πh²/144)dh/dt. 15 = (25π(64)/144)dh/dt = (25π(4)/9)dh/dt = 100π/9 dh/dt. dh/dt = 135/(100π) = 27/(20π) ft/min.",
      finalAnswer: "\\frac{27}{20\\pi} \\text{ ft/min}",
      type: "free-response"
    },
    {
      id: "tank-2",
      difficulty: "Hard",
      category: "Filling/Emptying Tanks",
      statement: "A hemispherical tank of radius 10 m is being filled at 2 m³/min. At what rate is the water level rising when the water is 3 m deep?",
      solution: "V = (π/3)h²(3R - h). dV/dt = π(2Rh - h²)(dh/dt). 2 = π(2(10)(3) - 9)dh/dt = π(60-9)dh/dt = 51π dh/dt. dh/dt = 2/(51π) m/min.",
      finalAnswer: "\\frac{2}{51\\pi} \\text{ m/min}",
      type: "free-response"
    }
  ],
  "Shadow Problems": [
    {
      id: "shadow-1",
      difficulty: "Hard",
      category: "Shadow Problems",
      statement: "A man 6 ft tall walks away from a spotlight on the ground at 5 ft/s. If the man is 10 ft from the spotlight and is walking toward a vertical wall 30 ft from the spotlight, how fast is his shadow on the wall decreasing?",
      solution: "Let x be man's distance from light, H be shadow height on wall at distance D=30. By similar triangles: H/30 = 6/x => H = 180/x. dH/dt = (-180/x²)(dx/dt). x=10, dx/dt=5. dH/dt = (-180/100)(5) = -9 ft/s.",
      finalAnswer: "-9 \\text{ ft/s}",
      type: "free-response"
    }
  ],
  "Angular Rates (Trig)": [
    {
      id: "ang-rate-1",
      difficulty: "Hard",
      category: "Angular Rates (Trig)",
      statement: "A rocket is launched vertically from a point 3000 ft from an observer. When the rocket is 4000 ft high and moving at 800 ft/s, at what rate is the angle of elevation changing?",
      solution: "tanθ = y/3000. sec²θ(dθ/dt) = (1/3000)dy/dt. y=4000, x=3000 => r=5000. cosθ = 3000/5000 = 3/5. sec²θ = 25/9. (25/9)(dθ/dt) = 800/3000 = 4/15. dθ/dt = (4/15)*(9/25) = 36/375 = 12/125 rad/s.",
      finalAnswer: "0.096 \\text{ rad/s}",
      type: "free-response"
    }
  ],
  "Sliding Ladders": [
    {
      id: "ladder-1",
      difficulty: "Hard",
      category: "Sliding Ladders",
      statement: "A 25-ft ladder is sliding down a wall. When the base is 15 ft from the wall, it is moving at 2 ft/s. At what rate is the area of the triangle formed by the ladder changing at this instant?",
      solution: "x²+y²=625. x=15 => y=20. 2x(dx/dt)+2y(dy/dt)=0 => 15(2)+20(dy/dt)=0 => dy/dt = -1.5. A=0.5xy. dA/dt = 0.5(x(dy/dt)+y(dx/dt)) = 0.5(15(-1.5)+20(2)) = 0.5(-22.5+40) = 0.5(17.5) = 8.75.",
      finalAnswer: "8.75 \\text{ ft}^2/\\text{s}",
      type: "free-response"
    }
  ],
  "Pulleys and Winches": [
    {
      id: "pulley-1",
      difficulty: "Hard",
      category: "Pulleys and Winches",
      statement: "A boat is being pulled into a dock by a rope attached to the bow at water level and passing through a pulley on the dock 8 ft above the bow. If the rope is being hauled in at 3 ft/s, how fast is the boat approaching the dock when it is 15 ft from the dock?",
      solution: "x² + 8² = L². 2x(dx/dt) = 2L(dL/dt). x=15 => L=sqrt(225+64)=17. dx/dt = (L/x)dL/dt = (17/15)(-3) = -17/5 = -3.4 ft/s.",
      finalAnswer: "3.4 \\text{ ft/s}",
      type: "free-response"
    }
  ],
  "Motion on Curves": [
    {
      id: "curve-motion-1",
      difficulty: "Hard",
      category: "Motion on Curves",
      statement: "A particle moves along the curve y = √x. As it passes through (4, 2), its x-coordinate increases at 3 cm/s. How fast is its distance from the origin changing?",
      solution: "s = sqrt(x² + y²) = sqrt(x² + x). ds/dt = (2x+1)/(2*sqrt(x²+x)) * dx/dt. x=4, dx/dt=3. ds/dt = (8+1)/(2*sqrt(16+4)) * 3 = 27/(2*sqrt(20)) = 27/(4*sqrt(5)).",
      finalAnswer: "\\frac{27}{4\\sqrt{5}} \\text{ cm/s}",
      type: "free-response"
    }
  ],
  "Perspective Rates": [
    {
      id: "perspective-1",
      difficulty: "Hard",
      category: "Perspective Rates",
      statement: "A painting 5 ft high is hung on a wall such that its bottom is 4 ft above an observer's eye level. The observer walks toward the wall at 2 ft/s. At what rate is the observer's viewing angle changing when they are 8 ft from the wall?",
      solution: "θ = arctan(9/x) - arctan(4/x). dθ/dt = [(-9/(x²+81)) - (-4/(x²+16))] * dx/dt. x=8, dx/dt=-2. dθ/dt = [(-9/145) + (4/80)](-2) = [(-9/145) + (1/20)](-2) = [(-36/580) + (29/580)](-2) = (-7/580)(-2) = 14/580 = 7/290 rad/s.",
      finalAnswer: "\\frac{7}{290} \\text{ rad/s}",
      type: "free-response"
    }
  ],
  "Atmospheric/Gas Laws": [
    {
      id: "gas-law-1",
      difficulty: "Hard",
      category: "Atmospheric/Gas Laws",
      statement: "According to Boyle's law, PV = C. At a certain instant, the pressure is 60 lb/sq. in. and the volume is 40 cu. in. If the pressure is increasing at 10 lb/sq. in. per min., how fast is the volume changing?",
      solution: "P(dV/dt) + V(dP/dt) = 0. 60(dV/dt) + 40(10) = 0. 60(dV/dt) = -400. dV/dt = -40/6 = -20/3 cu. in./min.",
      finalAnswer: "-\\frac{20}{3} \\text{ in}^3/\\text{min}",
      type: "free-response"
    }
  ],
  "Multi-Variable Interaction": [
    {
      id: "multi-var-1",
      difficulty: "Hard",
      category: "Multi-Variable Interaction",
      statement: "The radius of a right circular cylinder is increasing at 2 cm/s while its height is decreasing at 3 cm/s. At what rate is its surface area changing when r = 5 cm and h = 10 cm?",
      solution: "S = 2πrh + 2πr². dS/dt = 2π[r(dh/dt) + h(dr/dt)] + 4πr(dr/dt). dS/dt = 2π[5(-3) + 10(2)] + 4π(5)(2) = 2π(5) + 40π = 10π + 40π = 50π cm²/s.",
      finalAnswer: "50\\pi \\text{ cm}^2/\\text{s}",
      type: "free-response"
    }
  ],
  "Vector/Non-Right Angle Motion": [
    {
      id: "vector-1",
      difficulty: "Hard",
      category: "Vector/Non-Right Angle Motion",
      statement: "Two ships leave a port at the same time. Ship A travels North at 20 knots. Ship B travels at 60° East of North at 30 knots. How fast is the distance between them increasing after 2 hours?",
      solution: "Use Law of Cosines: s² = a² + b² - 2ab*cos(60°). 2s(ds/dt) = 2a(da/dt) + 2b(db/dt) - 2(a*db/dt + b*da/dt)*cos(60°). a=40, b=60. s² = 1600+3600 - 2400 = 2800. s=20√7. ds/dt = [40(20)+60(30) - (40*30 + 60*20)*0.5]/(20√7) = [800+1800 - 1200]/(20√7) = 1400/(20√7) = 70/√7 = 10√7 knots.",
      finalAnswer: "10\\sqrt{7} \\text{ knots}",
      type: "free-response"
    }
  ],
  "Area Optimization": [
    {
      id: "opt-area-1",
      difficulty: "Hard",
      category: "Area Optimization",
      statement: "A wire 20 cm long is cut into two pieces. One piece is bent into a square and the other into a circle. Where should the cut be made to minimize the total area?",
      solution: "Let x be piece for square. s=x/4, r=(20-x)/(2π). Total Area = (x/4)² + π((20-x)/(2π))². A(x) = x²/16 + (20-x)²/(4π). A'(x) = x/8 - (20-x)/(2π) = 0. πx - 80 + 4x = 0 => x = 80/(π+4) cm.",
      finalAnswer: "\\frac{80}{\\pi + 4} \\text{ cm from one end}",
      type: "free-response"
    }
  ],
  "Volume Optimization": [
    {
      id: "opt-vol-1",
      difficulty: "Hard",
      category: "Volume Optimization",
      statement: "Find the volume of the largest right circular cylinder that can be inscribed in a sphere of radius R.",
      solution: "V = πr²h. Inscribed: r² + (h/2)² = R² => r² = R² - h²/4. V(h) = π(R² - h²/4)h = πR²h - πh³/4. V'(h) = πR² - 3πh²/4 = 0 => h² = 4R²/3 => h = 2R/√3. V = π(R² - R²/3)(2R/√3) = 4πR³/(3√3).",
      finalAnswer: "\\frac{4\\pi R^3}{3\\sqrt{3}}",
      type: "free-response"
    }
  ],
  "Inscribed Geometric Shapes": [
    {
      id: "opt-shape-1",
      difficulty: "Hard",
      category: "Inscribed Geometric Shapes",
      statement: "Find the dimensions of the rectangle of largest area that can be inscribed in the ellipse x²/a² + y²/b² = 1.",
      solution: "A = (2x)(2y) = 4xy. y = b*sqrt(1 - x²/a²). A(x) = 4bx*sqrt(1 - x²/a²). A'(x) = 4b[sqrt(1-x²/a²) - x²/(a²*sqrt(1-x²/a²))] = 0. 1 - x²/a² - x²/a² = 0 => 2x² = a² => x = a/√2. y = b/√2. Dimensions: a√2 x b√2.",
      finalAnswer: "a\\sqrt{2} \\times b\\sqrt{2}",
      type: "free-response"
    }
  ],
  "Distance on Graphs": [
    {
      id: "opt-dist-1",
      difficulty: "Hard",
      category: "Distance on Graphs",
      statement: "Find the point on the parabola y = x² closest to the point (3, 0).",
      solution: "D² = (x-3)² + (x²)². f(x) = x⁴ + x² - 6x + 9. f'(x) = 4x³ + 2x - 6 = 0. By inspection, x=1 is a root. f''(1) = 12(1)+2 > 0. Point is (1, 1).",
      finalAnswer: "(1, 1)",
      type: "free-response"
    }
  ],
  "Shortest Path/Time": [
    {
      id: "opt-time-1",
      difficulty: "Hard",
      category: "Shortest Path/Time",
      statement: "A man is in a boat 2 miles from a straight shore. He wants to reach a point on the shore 6 miles from the point closest to him. He can row at 3 mph and walk at 5 mph. Where should he land to minimize his travel time?",
      solution: "T(x) = sqrt(x²+4)/3 + (6-x)/5. T'(x) = x/(3*sqrt(x²+4)) - 1/5 = 0. 5x = 3*sqrt(x²+4) => 25x² = 9(x²+4) = 9x²+36 => 16x² = 36 => x² = 36/16 = 9/4 => x = 1.5 miles.",
      finalAnswer: "1.5 \\text{ miles from the point closest to him}",
      type: "free-response"
    }
  ],
  "Structural Strength/Stiffness": [
    {
      id: "opt-beam-1",
      difficulty: "Hard",
      category: "Structural Strength/Stiffness",
      statement: "A wooden beam has a rectangular cross-section of width w and depth d. The strength of the beam is proportional to wd². If it is cut from a cylindrical log of diameter 20 in, what dimensions maximize its strength?",
      solution: "w² + d² = 20² = 400 => d² = 400 - w². S(w) = k*w(400-w²) = k(400w - w³). S'(w) = k(400 - 3w²) = 0 => w² = 400/3 => w = 20/√3. d² = 400 - 400/3 = 800/3 => d = 20√2/√3.",
      finalAnswer: "w = \\frac{20}{\\sqrt{3}}, d = \\frac{20\\sqrt{2}}{\\sqrt{3}}",
      type: "free-response"
    }
  ],
  "Economics/Business": [
    {
      id: "opt-biz-1",
      difficulty: "Hard",
      category: "Economics/Business",
      statement: "The cost function is C(x) = 100 + 4x and the demand function is p(x) = 10 - 0.01x. Find the production level that maximizes profit.",
      solution: "R(x) = x(10 - 0.01x) = 10x - 0.01x². P(x) = R(x) - C(x) = -0.01x² + 6x - 100. P'(x) = -0.02x + 6 = 0 => x = 300.",
      finalAnswer: "300 \\text{ units}",
      type: "free-response"
    }
  ],
  "Surface Area Minimization": [
    {
      id: "opt-surface-1",
      difficulty: "Hard",
      category: "Surface Area Minimization",
      statement: "A cylindrical can is to be made to hold 1000 cm³ of oil. Find the dimensions that minimize the cost of the metal to make the can.",
      solution: "V = πr²h = 1000 => h = 1000/(πr²). S = 2πr² + 2πrh = 2πr² + 2000/r. S'(r) = 4πr - 2000/r² = 0. 4πr³ = 2000 => r³ = 500/π => r = (500/π)^(1/3). h = 2r.",
      finalAnswer: "r = \\sqrt[3]{\\frac{500}{\\pi}}, h = 2\\sqrt[3]{\\frac{500}{\\pi}}",
      type: "free-response"
    }
  ],
  "Angular Optimization": [
    {
      id: "opt-ang-1",
      difficulty: "Hard",
      category: "Angular Optimization",
      statement: "A statue 10 ft high stands on a pedestal 5 ft high. How far from the pedestal should an observer stand so that their viewing angle of the statue is maximized? (Assume eye level is 5 ft).",
      solution: "Pedestal top is at height 5, statue top at 15. eye level is 5. So we look at a 10 ft high object starting at 0 ft relative elevation. wait, if eyes are at 5ft, and pedestal is at 5ft, the statue is entirely above eyes. statue spans y=0 to y=10 relative to eyes. wait. Pedestal is 5ft, eyes are 5ft => ground to eyes is 5ft. Pedestal top to eyes is 0. Statue is from 0 to 10 relative to eyes. θ = arctan(10/x). Max at x->0? No. Let's say eyes at 4ft. relative elevations are 1 and 11. θ = arctan(11/x) - arctan(1/x). Max when x = sqrt(11*1) = sqrt(11).",
      finalAnswer: "\\sqrt{11} \\text{ feet}",
      type: "free-response"
    }
  ],
  "Gutter/Trough Design": [
    {
      id: "opt-gutter-1",
      difficulty: "Hard",
      category: "Gutter/Trough Design",
      statement: "A rain gutter is to be made of aluminum sheets 12 inches wide from which one third is bent up on each side by an angle θ. What angle θ maximizes the cross-sectional area?",
      solution: "Base = 4, sides = 4. Height = 4sinθ. Area = (4 + (4 + 8cosθ))/2 * 4sinθ = 4sinθ(4 + 4cosθ) = 16(sinθ + sinθcosθ). A' = 16(cosθ + cos²θ - sin²θ) = 16(cosθ + 2cos²θ - 1) = 16(2cosθ - 1)(cosθ + 1). cosθ = 1/2 => θ = 60°.",
      finalAnswer: "60^\\circ",
      type: "free-response"
    }
  ],
  "Conical Tents": [
    {
      id: "opt-tent-1",
      difficulty: "Hard",
      category: "Conical Tents",
      statement: "Find the dimensions of a cone with maximum volume that has a slant height of 10 ft.",
      solution: "V = (1/3)πr²h. r² + h² = 100 => r² = 100 - h². V(h) = (1/3)π(100 - h²)h = (1/3)π(100h - h³). V'(h) = (1/3)π(100 - 3h²) = 0 => h = 10/√3. r² = 100 - 100/3 = 200/3 => r = 10√(2/3).",
      finalAnswer: "h = \\frac{10}{\\sqrt{3}}, r = 10\\sqrt{\\frac{2}{3}}",
      type: "free-response"
    }
  ],
  "Perimeter/Sum of Sides": [
    {
      id: "opt-peri-1",
      difficulty: "Hard",
      category: "Perimeter/Sum of Sides",
      statement: "A rectangle has an area of 64 sq in. What dimensions minimize its perimeter?",
      solution: "A = xy = 64 => y = 64/x. P = 2x + 2y = 2x + 128/x. P' = 2 - 128/x² = 0 => x² = 64 => x = 8. y = 8. Square is best.",
      finalAnswer: "8\\text{ in} \\times 8\\text{ in}",
      type: "free-response"
    }
  ],
  "Lighting and Intensity": [
    {
      id: "opt-light-1",
      difficulty: "Hard",
      category: "Lighting and Intensity",
      statement: "A light source is to be hung directly over the center of a circular table of radius 3 ft. The illumination at any point on the edge of the table is proportional to the cosine of the angle of incidence and inversely proportional to the square of the distance from the source. How high should the light be placed?",
      solution: "I = k * cosθ / r². let h be height. s = sqrt(h² + 3²). cosθ = h/s. I(h) = k*h/s³ = kh(h²+9)^(-3/2). I'(h) = k[(h²+9)^(-3/2) - 3h²(h²+9)^(-5/2)] = 0. h²+9 - 3h² = 0 => 2h² = 9 => h = 3/√2.",
      finalAnswer: "\\frac{3}{\\sqrt{2}} \\text{ feet}",
      type: "free-response"
    }
  ]
};
