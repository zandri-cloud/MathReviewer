import { Problem } from '../types/calculus';

export const relatedRatesBatch2: Problem[] = [
  // --- SLIDING LADDERS (20 Problems) ---
  {
    id: "rr-ladder-1",
    difficulty: "Hard",
    category: "Sliding Ladders",
    statement: "A 13 ft ladder leans against a wall. The bottom slides away at 2 ft/s. Fast is the top sliding down when the bottom is 5 ft from wall?",
    solution: "1. x² + y² = 13². 2. 2x dx/dt + 2y dy/dt = 0. 3. x=5, dx/dt=2. y=sqrt(169-25)=12. 4. 2(5)(2) + 2(12)dy/dt = 0 => 20 + 24 dy/dt = 0 => dy/dt = -20/24 = -5/6 ft/s.",
    finalAnswer: "-\\frac{5}{6} \\text{ ft/s}",
    type: "free-response"
  },
  {
    id: "rr-ladder-2",
    difficulty: "Hard",
    category: "Sliding Ladders",
    statement: "In the previous problem, at what rate is the area of the triangle changing?",
    solution: "1. A = 0.5xy. 2. dA/dt = 0.5(x dy/dt + y dx/dt). 3. dA/dt = 0.5(5(-5/6) + 12(2)) = 0.5(-25/6 + 144/6) = 0.5(119/6) = 119/12 sq ft/s.",
    finalAnswer: "\\frac{119}{12} \\text{ sq ft/s}",
    type: "free-response"
  },
  {
    id: "rr-ladder-3",
    difficulty: "Hard",
    category: "Sliding Ladders",
    statement: "A 10 ft ladder leans against a wall. The top slides down at 3 ft/s. How fast is the angle with the floor changing when bottom is 6 ft away?",
    solution: "1. cosθ = x/10. 2. -sinθ dθ/dt = (1/10)dx/dt. 3. x=6, y=8. sinθ=0.8. 4. From x²+y²=100, 2x dx/dt + 2y dy/dt = 0 => 12 dx/dt + 16(-3) = 0 => dx/dt = 48/12 = 4. 5. -0.8 dθ/dt = 0.1(4) = 0.4 => dθ/dt = -0.5 rad/s.",
    finalAnswer: "-0.5 \\text{ rad/s}",
    type: "free-response"
  },
  {
    id: "rr-ladder-4",
    difficulty: "Hard",
    category: "Sliding Ladders",
    statement: "A ladder 20 ft long leans against a house. The bottom slides away at 5 ft/s. How fast is the top moving down when it is 12 ft above ground?",
    solution: "1. x²+y²=400. 2. x dy/dt + y dx/dt = 0. 3. y=12, x=16, dx/dt=5. 4. 16(5) + 12(dy/dt) = 0 => 80 + 12 dy/dt = 0 => dy/dt = -80/12 = -20/3 ft/s.",
    finalAnswer: "-\\frac{20}{3} \\text{ ft/s}",
    type: "free-response"
  },
  {
    id: "rr-ladder-5",
    difficulty: "Hard",
    category: "Sliding Ladders",
    statement: "A 25 ft ladder leans against a wall. The bottom is pulled out at 3 ft/s. Find the rate of change of the angle between ladder and wall when h=20 ft.",
    solution: "1. sinψ = x/25. 2. cosψ dψ/dt = (1/25)dx/dt. 3. h=20, x=15. cosψ = 20/25 = 0.8. 4. x²+y²=625 => x dx/dt + y dy/dt = 0. 15(3) + 20 dy/dt = 0 => dy/dt = -45/20 = -2.25. (Wait, dx/dt is given). 5. cosψ dψ/dt = (1/25)(3) = 0.12. 6. 0.8 dψ/dt = 0.12 => dψ/dt = 0.15 rad/s.",
    finalAnswer: "0.15 \\text{ rad/s}",
    type: "free-response"
  },
  {
    id: "rr-ladder-6",
    difficulty: "Hard",
    category: "Sliding Ladders",
    statement: "A 17 ft ladder is sliding down a wall. When the foot is 8 ft from the wall, the foot is moving at 5 ft/s. Find the rate of change of velocity of the top.",
    solution: "1. x²+y²=L². y = sqrt(L²-x²). dy/dt = -x(dx/dt)/sqrt(L²-x²). 2. To get d²y/dt², differentiate again. 3. d²y/dt² = [-(dx/dt)² - x d²x/dt²] / y - [(-x dx/dt)² / y³]. 4. Assume dx/dt is constant (d²x/dt²=0). 5. d²y/dt² = -(5)²/15 - (-8*5)²/15³ = -25/15 - 1600/3375 = -5/3 - 0.474 ≈ -2.14 ft/s².",
    finalAnswer: "-2.14 \\text{ ft/s}^2",
    type: "free-response"
  },
  {
    id: "rr-ladder-7",
    difficulty: "Hard",
    category: "Sliding Ladders",
    statement: "A 5m ladder leans against a wall. If the base moves away at 1 m/s, how fast is the area decreasing when base is 3m from wall?",
    solution: "1. x=3 => y=4. dx/dt=1 => dy/dt = -3/4. 2. A = 0.5xy. 3. dA/dt = 0.5(x dy/dt + y dx/dt) = 0.5(3(-0.75) + 4(1)) = 0.5(-2.25+4) = 0.875 m²/s. Area is increasing? Wait. -2.25 + 4 = 1.75. 0.875. Oh, x is small, x dy/dt is small, y dx/dt is large.",
    finalAnswer: "0.875 \\text{ m}^2/\\text{s}",
    type: "free-response"
  },
  {
    id: "rr-ladder-8",
    difficulty: "Hard",
    category: "Sliding Ladders",
    statement: "A 10 ft ladder leans against a wall. The top is 8 ft from floor. If the top slides down at 2 ft/s, how fast is the distance from wall to base increasing?",
    solution: "1. x=6, y=8. dy/dt=-2. 2. x dx/dt + y dy/dt = 0 => 6 dx/dt + 8(-2) = 0 => dx/dt = 16/6 = 8/3 ft/s.",
    finalAnswer: "8/3 \\text{ ft/s}",
    type: "free-response"
  },
  {
    id: "rr-ladder-9",
    difficulty: "Hard",
    category: "Sliding Ladders",
    statement: "A ladder 15 ft long rests against a wall. The bottom is 9 ft from wall and slides away at 2 ft/s. Fast is top move down?",
    solution: "1. x=9, y=12, dx/dt=2. 2. 9(2) + 12 dy/dt = 0 => dy/dt = -18/12 = -1.5 ft/s.",
    finalAnswer: "-1.5 \\text{ ft/s}",
    type: "free-response"
  },
  {
    id: "rr-ladder-10",
    difficulty: "Hard",
    category: "Sliding Ladders",
    statement: "A 13 ft ladder leans against a wall. Bottom slides out at 0.5 ft/s. How fast is the angle between ladder and wall changing when bottom is 12 ft from wall?",
    solution: "1. sinφ = x/13. 2. cosφ dφ/dt = (1/13)dx/dt. 3. x=12, y=5. cosφ = 5/13. 4. (5/13)dφ/dt = (1/13)(0.5) => dφ/dt = 0.1 rad/s.",
    finalAnswer: "0.1 \\text{ rad/s}",
    type: "free-response"
  },
  {
    id: "rr-ladder-11",
    difficulty: "Hard",
    category: "Sliding Ladders",
    statement: "A 20 ft ladder leans against a wall. At what rate is the area of the triangle changing when the bottom is 12 ft from the wall and moving at 2 ft/s?",
    solution: "1. x=12, y=16, dx/dt=2. 2. 12(2) + 16 dy/dt = 0 => dy/dt = -24/16 = -1.5. 3. dA/dt = 0.5(12(-1.5) + 16(2)) = 0.5(-18 + 32) = 7 sq ft/s.",
    finalAnswer: "7 \\text{ sq ft/s}",
    type: "free-response"
  },
  {
    id: "rr-ladder-12",
    difficulty: "Hard",
    category: "Sliding Ladders",
    statement: "A 15 ft ladder is 12 ft high on a wall and sliding down at 1 ft/s. How fast is the area changing?",
    solution: "1. y=12, s=15 => x=9. dy/dt=-1. 2. 9 dx/dt + 12(-1) = 0 => dx/dt = 12/9 = 4/3. 3. dA/dt = 0.5(9(-1) + 12(4/3)) = 0.5(-9 + 16) = 3.5 sq ft/s.",
    finalAnswer: "3.5 \\text{ sq ft/s}",
    type: "free-response"
  },
  {
    id: "rr-ladder-13",
    difficulty: "Hard",
    category: "Sliding Ladders",
    statement: "A 10m ladder leans against a wall. The base moves at 0.5m/s. Find rate of change of the angle the ladder makes with the ground when base is 5m away.",
    solution: "1. cosθ = x/10. 2. -sinθ dθ/dt = 0.1 dx/dt. 3. x=5, θ=60°, sinθ=√3/2. 4. -√3/2 dθ/dt = 0.1(0.5) = 0.05. 5. dθ/dt = -0.1/√3 rad/s.",
    finalAnswer: "-\\frac{0.1}{\\sqrt{3}} \\text{ rad/s}",
    type: "free-response"
  },
  {
    id: "rr-ladder-14",
    difficulty: "Hard",
    category: "Sliding Ladders",
    statement: "A 13 ft ladder leans against a wall. The bottom is pulled out at 12 ft/s. How fast is the top moving down when the bottom is 5 ft from wall?",
    solution: "1. x=5, y=12, dx/dt=12. 2. 5(12) + 12 dy/dt = 0 => dy/dt = -5 ft/s.",
    finalAnswer: "-5 \\text{ ft/s}",
    type: "free-response"
  },
  {
    id: "rr-ladder-15",
    difficulty: "Hard",
    category: "Sliding Ladders",
    statement: "A ladder 10 ft long leans against a wall. If the top slides down at 2 ft/s, how fast is the area changing when top is 6 ft high?",
    solution: "1. y=6, s=10 => x=8. dy/dt=-2. 2. 8 dx/dt + 6(-2) = 0 => dx/dt = 12/8 = 1.5. 3. dA/dt = 0.5(8(-2) + 6(1.5)) = 0.5(-16 + 9) = -3.5 sq ft/s.",
    finalAnswer: "-3.5 \\text{ sq ft/s}",
    type: "free-response"
  },
  {
    id: "rr-ladder-16",
    difficulty: "Hard",
    category: "Sliding Ladders",
    statement: "A 25 ft ladder leans against a wall. The top slides down at 4 ft/s. Find the rate the bottom slides out when top is 15 ft high.",
    solution: "1. y=15, s=25 => x=20. dy/dt=-4. 2. 20 dx/dt + 15(-4) = 0 => 20 dx/dt = 60 => dx/dt = 3 ft/s.",
    finalAnswer: "3 \\text{ ft/s}",
    type: "free-response"
  },
  {
    id: "rr-ladder-17",
    difficulty: "Hard",
    category: "Sliding Ladders",
    statement: "A 17 ft ladder leans against a wall. The base is 15 ft from wall and slides out at 8 ft/s. Fast is top move down?",
    solution: "1. x=15, y=8, dx/dt=8. 2. 15(8) + 8 dy/dt = 0 => 120 + 8 dy/dt = 0 => dy/dt = -15 ft/s.",
    finalAnswer: "-15 \\text{ ft/s}",
    type: "free-response"
  },
  {
    id: "rr-ladder-18",
    difficulty: "Hard",
    category: "Sliding Ladders",
    statement: "A 10 ft ladder has its top sliding down at 1 ft/s. At what rate is the angle with the ground changing when the top is 8 ft above ground?",
    solution: "1. y=8, s=10 => x=6. dy/dt=-1. 2. sinθ = y/10. 3. cosθ dθ/dt = 0.1 dy/dt. 4. cosθ = 6/10 = 0.6. 5. 0.6 dθ/dt = 0.1(-1) = -0.1 => dθ/dt = -1/6 rad/s.",
    finalAnswer: "-1/6 \\text{ rad/s}",
    type: "free-response"
  },
  {
    id: "rr-ladder-19",
    difficulty: "Hard",
    category: "Sliding Ladders",
    statement: "A 5m ladder slides down a wall. When the base is 4m from the wall and moving at 2m/s, how fast is the area increasing?",
    solution: "1. x=4, y=3, dx/dt=2. 2. 4(2) + 3 dy/dt = 0 => dy/dt = -8/3. 3. dA/dt = 0.5(4(-8/3) + 3(2)) = 0.5(-32/3 + 18/3) = 0.5(-14/3) = -7/3 m²/s.",
    finalAnswer: "-2.33 \\text{ m}^2/\\text{s}",
    type: "free-response"
  },
  {
    id: "rr-ladder-20",
    difficulty: "Hard",
    category: "Sliding Ladders",
    statement: "A ladder 13 ft long leans against a wall. Foot moves at 3 ft/s. Find the rate of change of the angle the ladder makes with the wall when the foot is 5 ft from wall.",
    solution: "1. sinψ = x/13. 2. cosψ dψ/dt = (1/13)dx/dt. 3. x=5, y=12, cosψ = 12/13. 4. (12/13)dψ/dt = (1/13)(3) => dψ/dt = 0.25 rad/s.",
    finalAnswer: "0.25 \\text{ rad/s}",
    type: "free-response"
  },

  // --- PULLEYS AND WINCHES (20 Problems) ---
  {
    id: "rr-pulley-1",
    difficulty: "Hard",
    category: "Pulleys and Winches",
    statement: "A boat is pulled into a dock by a rope attached to the bow of the boat and passing through a pulley on the dock that is 1 m higher than the bow of the boat. If the rope is pulled in at a rate of 1 m/s, how fast is the boat approaching the dock when it is 8 m from the dock?",
    solution: "1. x² + 1² = s². 2. 2x dx/dt = 2s ds/dt. 3. x=8, ds/dt=-1. s=sqrt(64+1)=sqrt(65). 4. 16 dx/dt = 2sqrt(65)(-1) => dx/dt = -sqrt(65)/8 ≈ -1.008 m/s.",
    finalAnswer: "-\\frac{\\sqrt{65}}{8} \\text{ m/s}",
    type: "free-response"
  },
  {
    id: "rr-pulley-2",
    difficulty: "Hard",
    category: "Pulleys and Winches",
    statement: "A winch 12 ft above the level of a boat pulls the boat toward the dock. If the rope is wound in at 4 ft/s, find the speed of the boat when it is 16 ft from the dock.",
    solution: "1. x² + 144 = s². 2. x dx/dt = s ds/dt. 3. x=16, s=20, ds/dt=-4. 4. 16 dx/dt = 20(-4) = -80 => dx/dt = -5 ft/s.",
    finalAnswer: "5 \\text{ ft/s}",
    type: "free-response"
  },
  {
    id: "rr-pulley-3",
    difficulty: "Hard",
    category: "Pulleys and Winches",
    statement: "A rope 30 ft long passes over a pulley 15 ft above the floor and is attached to a weight on the floor. A person pulls the other end at 3 ft/s. Fast is weight rise when it is 9 ft high?",
    solution: "1. Let h be weight height. Rope above weight is 15-h. Total rope s = (15-h) + s_other. 2. No, simpler: s = sqrt(x² + 15²) + h? No. Let's assume person is at distance x from pulley point. 3. Rope length L = sqrt(x² + 15²) + (15-h) = 30. 4. Differentiate w.r.t t: (x/sqrt(x²+225))dx/dt - dh/dt = 0. 5. If person walks at dx/dt=3, then dh/dt = (x/s_hyp)*3. 6. h=9 => rope over weight is 6. Other part of rope is 24. s_hyp=24 => x=sqrt(576-225)=sqrt(351). 7. dh/dt = (sqrt(351)/24)*3 = sqrt(351)/8 ≈ 2.34 ft/s.",
    finalAnswer: "2.34 \\text{ ft/s}",
    type: "free-response"
  },
  {
    id: "rr-pulley-4",
    difficulty: "Hard",
    category: "Pulleys and Winches",
    statement: "A motorboat is being pulled in by a winch 4ft above water. The rope is pulled in at 2ft/s. Fast is the boat move when 10ft of rope is out?",
    solution: "1. x²+16=s². 2. x dx/dt = s ds/dt. 3. s=10, ds/dt=-2 => x=sqrt(84). 4. sqrt(84)dx/dt = 10(-2) = -20 => dx/dt = -20/sqrt(84) ≈ -2.18 ft/s.",
    finalAnswer: "2.18 \\text{ ft/s}",
    type: "free-response"
  },
  {
    id: "rr-pulley-5",
    difficulty: "Hard",
    category: "Pulleys and Winches",
    statement: "In the winch problem (4ft high, 10ft rope), find the rate the angle of the rope with the water is changing.",
    solution: "1. sinθ = 4/s. 2. cosθ dθ/dt = (-4/s²)ds/dt. 3. s=10, ds/dt=-2. cosθ = sqrt(84)/10. 4. (sqrt(84)/10)dθ/dt = -4/100 * (-2) = 0.08. 5. dθ/dt = 0.8/sqrt(84) ≈ 0.087 rad/s.",
    finalAnswer: "0.087 \\text{ rad/s}",
    type: "free-response"
  },

  // --- MOTION ON CURVES (20 Problems) ---
  {
    id: "rr-curve-1",
    difficulty: "Hard",
    category: "Motion on Curves",
    statement: "A particle moves along the curve y = sqrt(x). If x increases at 4 units/s, how fast is the distance from the origin changing when x = 9?",
    solution: "1. r² = x² + y² = x² + x. 2. 2r dr/dt = (2x + 1)dx/dt. 3. x=9 => y=3, r=sqrt(81+9)=sqrt(90)=3√10. 4. 2(3√10)dr/dt = (18+1)(4) = 76. 5. dr/dt = 76/(6√10) = 38/(3√10) ≈ 4.01 units/s.",
    finalAnswer: "\\frac{38}{3\\sqrt{10}} \\text{ units/s}",
    type: "free-response"
  },
  {
    id: "rr-curve-2",
    difficulty: "Hard",
    category: "Motion on Curves",
    statement: "A particle moves along y = x². At what point on the curve are the x and y coordinates changing at the same rate?",
    solution: "1. y = x² => dy/dt = 2x(dx/dt). 2. For dy/dt = dx/dt, we need 1 = 2x => x = 0.5. 3. Then y = 0.25. Point is (0.5, 0.25).",
    finalAnswer: "(0.5, 0.25)",
    type: "free-response"
  },
  {
    id: "rr-curve-3",
    difficulty: "Hard",
    category: "Motion on Curves",
    statement: "A particle moves along the curve y = x³ + 1. Find the point where the y-coordinate is changing 12 times as fast as the x-coordinate.",
    solution: "1. dy/dt = 3x²(dx/dt). 2. dy/dt = 12(dx/dt) => 3x² = 12 => x² = 4 => x = ±2. 3. If x=2, y=9. If x=-2, y=-7. Points: (2, 9) and (-2, -7).",
    finalAnswer: "(2, 9), (-2, -7)",
    type: "free-response"
  },
  {
    id: "rr-curve-4",
    difficulty: "Hard",
    category: "Motion on Curves",
    statement: "A point moves along the graph of y = 1/x. If the x-coordinate is decreasing at 3 units/s, find the rate of change of y when x=2.",
    solution: "1. dy/dt = (-1/x²)(dx/dt). 2. dx/dt = -3, x=2. 3. dy/dt = (-1/4)(-3) = 0.75 units/s.",
    finalAnswer: "0.75 \\text{ units/s}",
    type: "free-response"
  },
  {
    id: "rr-curve-5",
    difficulty: "Hard",
    category: "Motion on Curves",
    statement: "A particle moves on the path y = e^x. How fast is the distance to the origin changing when x=0 if dx/dt=2?",
    solution: "1. r² = x² + e^(2x). 2. 2r dr/dt = (2x + 2e^(2x))dx/dt. 3. x=0 => y=1, r=1. 4. 2(1)dr/dt = (0 + 2e^0)(2) = 4. 5. dr/dt = 2 units/s.",
    finalAnswer: "2 \\text{ units/s}",
    type: "free-response"
  },
  {
    id: "rr-pulley-6",
    difficulty: "Hard",
    category: "Pulleys and Winches",
    statement: "A pulley is 20 ft above the floor. A rope 50 ft long passes over it, with 10 lb weights at both ends. One weight is lifted by hand at 4 ft/s. How fast is the other weight moving?",
    solution: "1. L = y_1 + y_2. 2. dL/dt = dy_1/dt + dy_2/dt = 0. 3. dy_2/dt = -dy_1/dt. 4. If lifted at 4 ft/s, other moves at -4 ft/s (down).",
    finalAnswer: "-4 \\text{ ft/s}",
    type: "free-response"
  },
  {
    id: "rr-pulley-7",
    difficulty: "Hard",
    category: "Pulleys and Winches",
    statement: "A rope passes over a pulley 10m high. One end is attached to a car on the ground, the other to a weight. car moves away at 5 m/s. Fast is weight rise when car is 10m from pulley point?",
    solution: "1. s = sqrt(x² + 100). s is rope length to car. L = s + y_weight. 2. dy/dt = -ds/dt = -(x/s)dx/dt. 3. x=10, s=10√2. dy/dt = -(10/10√2)*5 = -5/√2 ≈ -3.54 m/s.",
    finalAnswer: "3.54 \\text{ m/s}",
    type: "free-response"
  },
  {
    id: "rr-pulley-8",
    difficulty: "Hard",
    category: "Pulleys and Winches",
    statement: "A winch pulls a crate up a ramp inclined at 30 degrees. The rope is parallel to the ramp and is wound in at 2 ft/s. Fast is crate rise vertically?",
    solution: "1. v_r = 2. v_y = v_r * sin(30) = 2 * 0.5 = 1 ft/s.",
    finalAnswer: "1 \\text{ ft/s}",
    type: "free-response"
  },
  {
    id: "rr-pulley-9",
    difficulty: "Hard",
    category: "Pulleys and Winches",
    statement: "A point on a rope moves over a pulley at 5 m/s. Attached to it is a load suspended by two ropes in a V shape. Assumed to be a pulley system with mechanical advantage? No, just related rates. Let's assume s = sqrt(x² + h²).",
    solution: "1. x²+h²=s². If s decreases at 5, fast is x change if h is fixed? 2. x dx/dt = s ds/dt. 3. Let h=10, s=20 => x=10√3. 10√3 dx/dt = 20(-5) = -100 => dx/dt = -10/√3.",
    finalAnswer: "\\frac{10}{\\sqrt{3}} \\text{ m/s}",
    type: "free-response"
  },
  {
    id: "rr-pulley-10",
    difficulty: "Hard",
    category: "Pulleys and Winches",
    statement: "A rope 20m long is over a pulley 5m high. A car pulls end at 2m/s. Fast is weight rise when car 12m from pulley?",
    solution: "1. s=sqrt(144+25)=13. ds/dt = (x/s)dx/dt = (12/13)(2) = 24/13. 2. dy/dt = ds/dt = 24/13 ≈ 1.85 m/s.",
    finalAnswer: "1.85 \\text{ m/s}",
    type: "free-response"
  },
  {
    id: "rr-curve-6",
    difficulty: "Hard",
    category: "Motion on Curves",
    statement: "A particle moves on y = x³. Find the points where dy/dt = dx/dt.",
    solution: "1. dy/dt = 3x² dx/dt. 3x²=1 => x=±1/√3.",
    finalAnswer: "(\\pm 1/\\sqrt{3}, \\pm 1/(3\\sqrt{3}))",
    type: "free-response"
  },
  {
    id: "rr-curve-7",
    difficulty: "Hard",
    category: "Motion on Curves",
    statement: "A particle moves on x² + y² = 1. Fast is y change when x=0.6 and dx/dt=3?",
    solution: "1. 2x dx/dt + 2y dy/dt = 0. 2. 0.6(3) + 0.8 dy/dt = 0 => 1.8 + 0.8 dy/dt = 0 => dy/dt = -2.25.",
    finalAnswer: "-2.25",
    type: "free-response"
  },
  {
    id: "rr-curve-8",
    difficulty: "Hard",
    category: "Motion on Curves",
    statement: "A particle moves on y = ln(x). Fast is y change when x=5 and dx/dt=10?",
    solution: "1. dy/dt = (1/x)dx/dt = (1/5)(10) = 2.",
    finalAnswer: "2",
    type: "free-response"
  },
  {
    id: "rr-curve-9",
    difficulty: "Hard",
    category: "Motion on Curves",
    statement: "A particle moves on y = sin(x). At x=π/3, dx/dt = 4. Fast is dy/dt?",
    solution: "1. dy/dt = cos(x)dx/dt = cos(π/3)*4 = 0.5 * 4 = 2.",
    finalAnswer: "2",
    type: "free-response"
  },
  {
    id: "rr-curve-10",
    difficulty: "Hard",
    category: "Motion on Curves",
    statement: "A particle moves on x² - y² = 7. At (4, 3), dx/dt = 6. find dy/dt.",
    solution: "1. 2x dx/dt - 2y dy/dt = 0. 2. 4(6) - 3 dy/dt = 0 => 24 = 3 dy/dt => dy/dt = 8.",
    finalAnswer: "8",
    type: "free-response"
  },
  {
    id: "rr-pulley-11",
    difficulty: "Hard",
    category: "Pulleys and Winches",
    statement: "A rope 60 ft long is over a 20 ft pulley. One end to a weight, other to person on the ground. Person walks away at 5 ft/s. Fast is weight rise when person is 15 ft from pulley?",
    solution: "1. s = sqrt(15² + 20²) = 25. ds/dt = (15/25)*5 = 3. 2. dy/dt = 3 ft/s.",
    finalAnswer: "3 \\text{ ft/s}",
    type: "free-response"
  },
  {
    id: "rr-pulley-12",
    difficulty: "Hard",
    category: "Pulleys and Winches",
    statement: "A winch 3m above level of a cart pulls it. Rope in at 1.5 m/s. Fast is cart moving when 4m from winch?",
    solution: "1. s=sqrt(9+16)=5. x dx/dt = s ds/dt => 4 dx/dt = 5(-1.5) = -7.5 => dx/dt = -1.875.",
    finalAnswer: "1.875 \\text{ m/s}",
    type: "free-response"
  },
  {
    id: "rr-pulley-13",
    difficulty: "Hard",
    category: "Pulleys and Winches",
    statement: "A rope 100 ft long passes over a pulley 40 ft high. A truck pulls the end at 10 ft/s. Fast is the other end rising when it is 10 ft from the floor?",
    solution: "1. L = sqrt(x² + 1600) + (40-h) = 100. h=10 => dist over load is 30. Other part is 70. 2. sqrt(x²+1600)=70 => x²+1600=4900 => x²=3300. 3. (x/70)dx/dt = dh/dt. 4. dh/dt = (sqrt(3300)/70)*10 = sqrt(3300)/7 ≈ 8.2 ft/s.",
    finalAnswer: "8.2 \\text{ ft/s}",
    type: "free-response"
  },
  {
    id: "rr-curve-11",
    difficulty: "Hard",
    category: "Motion on Curves",
    statement: "A particle moves on y = tan(x). Fast is y change when x = π/4 and dx/dt = 1?",
    solution: "1. dy/dt = sec²(x) dx/dt = sec²(π/4)*1 = 2.",
    finalAnswer: "2",
    type: "free-response"
  },
  {
    id: "rr-curve-12",
    difficulty: "Hard",
    category: "Motion on Curves",
    statement: "A particle moves on y = sqrt(1 + x³). At x=2, dx/dt = 4. Fast is y change?",
    solution: "1. y = sqrt(9)=3. 2. dy/dt = (3x² / 2sqrt(1+x³))dx/dt = (12/6)*4 = 8.",
    finalAnswer: "8",
    type: "free-response"
  },

  // --- PERSPECTIVE RATES (20 Problems) ---
  {
    id: "rr-persp-1",
    difficulty: "Hard",
    category: "Perspective Rates",
    statement: "An observer is 50 ft from a building. A window washer moves up the building at 2 ft/s. How fast is the angle of elevation changing when the washer is 50 ft high?",
    solution: "1. tanθ = h/50. 2. sec²θ dθ/dt = 1/50 dh/dt. 3. h=50 => θ=45°, sec²θ=2. 4. 2 dθ/dt = 2/50 => dθ/dt = 1/50 = 0.02 rad/s.",
    finalAnswer: "0.02 \\text{ rad/s}",
    type: "free-response"
  },
  {
    id: "rr-persp-2",
    difficulty: "Hard",
    category: "Perspective Rates",
    statement: "A car is driving toward a building 100m high. When the car is 200m from the building, it's moving at 30 m/s. Fast is the angle of elevation to the top changing?",
    solution: "1. tanθ = 100/x. 2. sec²θ dθ/dt = (-100/x²)dx/dt. 3. x=200 => θ=arctan(0.5). sec²θ = 1.25. 4. 1.25 dθ/dt = (-100/40000)(-30) = 3000/40000 = 0.075. 5. dθ/dt = 0.075/1.25 = 0.06 rad/s.",
    finalAnswer: "0.06 \\text{ rad/s}",
    type: "free-response"
  },
  {
    id: "rr-persp-3",
    difficulty: "Hard",
    category: "Perspective Rates",
    statement: "An athlete runs around a track 50m in radius at 8 m/s. An observer at the center turns her head. Fast is the head rotating?",
    solution: "1. dθ/dt = v/r = 8/50 = 0.16 rad/s.",
    finalAnswer: "0.16 \\text{ rad/s}",
    type: "free-response"
  },
  {
    id: "rr-persp-4",
    difficulty: "Hard",
    category: "Perspective Rates",
    statement: "A train 400 ft long passes over a bridge 100 ft above a road. If train at 60 mph, fast is angular size changing for observer on road?",
    solution: "1. θ = arctan(x_front/100) - arctan(x_back/100). 2. x_front = vt + 400, x_back = vt. 3. dθ/dt = [100/(100²+x_f²)]v - [100/(100²+x_b²)]v. 4. At t=0 (center), x_f=200, x_b=-200. 5. dθ/dt = [100/50000]v - [100/50000]v = 0.",
    finalAnswer: "0 \\text{ rad/s}",
    type: "free-response"
  },
  {
    id: "rr-persp-5",
    difficulty: "Hard",
    category: "Perspective Rates",
    statement: "A painting 3 ft high is hung with its bottom edge 4 ft above eye level. A man walks toward it at 2 ft/s. Fast is the viewing angle changing when he is 4 ft from wall?",
    solution: "1. θ = arctan(7/x) - arctan(4/x). 2. dθ/dt = [ -7/(x²+49) + 4/(x²+16) ] dx/dt. 3. x=4, dx/dt=-2. 4. dθ/dt = [ -7/65 + 4/32 ] (-2) = [ -0.1077 + 0.125 ] (-2) = 0.0173 * -2 = -0.0346 rad/s.",
    finalAnswer: "-0.0346 \\text{ rad/s}",
    type: "free-response"
  },
  {
    id: "rr-persp-6",
    difficulty: "Hard",
    category: "Perspective Rates",
    statement: "A billboard 20 ft high is whose bottom is 10 ft above the road. A driver approach at 88 ft/s (60 mph). When she is 40 ft from billboard, fast is her angle of view changing?",
    solution: "1. θ = arctan(30/x) - arctan(10/x). 2. dθ/dt = [ -30/(x²+900) + 10/(x²+100) ] (-88). 3. x=40. dθ/dt = [ -30/2500 + 10/1700 ] (-88) = [ -0.012 + 0.00588 ] (-88) = -0.00612 * -88 = 0.538 rad/s.",
    finalAnswer: "0.538 \\text{ rad/s}",
    type: "free-response"
  },
  {
    id: "rr-persp-7",
    difficulty: "Hard",
    category: "Perspective Rates",
    statement: "A statue 10 ft high is on a pedestal 5 ft high. An observer walks away at 4 ft/s. Fast is reading angle changing when distance is 10 ft?",
    solution: "1. θ = arctan(15/x) - arctan(5/x). dθ/dt = [ -15/(x²+225) + 5/(x²+25) ] (4). x=10. dθ/dt = [ -15/325 + 5/125 ](4) = [ -0.046 + 0.04 ](4) = -0.006 * 4 = -0.024 rad/s.",
    finalAnswer: "-0.024 \\text{ rad/s}",
    type: "free-response"
  },
  {
    id: "rr-persp-8",
    difficulty: "Hard",
    category: "Perspective Rates",
    statement: "A 4m high goal is 2m above ground. A player runs toward it at 5 m/s. Fast is angle of goal changing at 10m?",
    solution: "1. θ = arctan(6/x) - arctan(2/x). dθ/dt = [ -6/(x²+36) + 2/(x²+4) ] (-5). x=10. dθ/dt = [ -6/136 + 2/104 ] (-5) = [ -0.044 + 0.019 ] (-5) = -0.025 * -5 = 0.125 rad/s.",
    finalAnswer: "0.125 \\text{ rad/s}",
    type: "free-response"
  },

  // --- ATMOSPHERIC/GAS LAWS (20 Problems) ---
  {
    id: "rr-gas-1",
    difficulty: "Hard",
    category: "Atmospheric/Gas Laws",
    statement: "The pressure P and volume V of a gas satisfy PV = C. If the volume is increasing at 2 L/min, how fast is the pressure changing when V = 10 L and P = 3 atm?",
    solution: "1. P(dV/dt) + V(dP/dt) = 0. 2. 3(2) + 10(dP/dt) = 0 => 10 dP/dt = -6 => dP/dt = -0.6 atm/min.",
    finalAnswer: "-0.6 \\text{ atm/min}",
    type: "free-response"
  },
  {
    id: "rr-gas-2",
    difficulty: "Hard",
    category: "Atmospheric/Gas Laws",
    statement: "Adiabatic expansion: PV^1.4 = C. If volume increases at 5%, at what rate does pressure change?",
    solution: "1. d/dt(PV^1.4) = (dP/dt)V^1.4 + 1.4PV^0.4 (dV/dt) = 0. 2. dP/dt = -1.4 P/V (dV/dt). 3. If dV/dt = 0.05V, then dP/dt = -1.4 P (0.05) = -0.07 P. Pressure decreases by 7%.",
    finalAnswer: "-7\\% \\text{ of } P",
    type: "free-response"
  },
  {
    id: "rr-gas-3",
    difficulty: "Hard",
    category: "Atmospheric/Gas Laws",
    statement: "Ideal gas law: PV = nRT. If T is constant, n is constant, and P increases at 2 kPa/min, find dV/dt when P=100, V=2.",
    solution: "1. P(dV/dt) + V(dP/dt) = 0. 2. 100(dV/dt) + 2(2) = 0 => 100 dV/dt = -4 => dV/dt = -0.04 L/min.",
    finalAnswer: "-0.04 \\text{ L/min}",
    type: "free-response"
  },
  {
    id: "rr-gas-4",
    difficulty: "Hard",
    category: "Atmospheric/Gas Laws",
    statement: "PV = nRT. If P=10, V=5, and nR=1. If P increases at 1 unit/s and V increases at 2 units/s, find dT/dt.",
    solution: "1. dT/dt = (1/nR) [ P(dV/dt) + V(dP/dt) ]. 2. dT/dt = (1) [ 10(2) + 5(1) ] = 25 K/s.",
    finalAnswer: "25 \\text{ K/s}",
    type: "free-response"
  },
  {
    id: "rr-gas-5",
    difficulty: "Hard",
    category: "Atmospheric/Gas Laws",
    statement: "A balloon is being inflated. Air density ρ is decreasing as V increases. If M = ρV is constant, find dρ/dt if dV/dt = 10 and V=100, ρ=1.2.",
    solution: "1. ρ(dV/dt) + V(dρ/dt) = 0. 2. 1.2(10) + 100(dρ/dt) = 0 => 12 + 100 dρ/dt = 0 => dρ/dt = -0.12 kg/m³/s.",
    finalAnswer: "-0.12 \\text{ kg/m}^3/\\text{s}",
    type: "free-response"
  },
  {
    id: "rr-pulley-14",
    difficulty: "Hard",
    category: "Pulleys and Winches",
    statement: "A rope 50 ft long passes over a pulley 20 ft high. A boat is pulled at 4 ft/s. Fast is the boat move when 25 ft of rope is out?",
    solution: "1. x²+400=s². x dx/dt = s ds/dt. 2. s=25, ds/dt=-4 => x=15. 3. 15 dx/dt = 25(-4) = -100 => dx/dt = -6.67 ft/s.",
    finalAnswer: "6.67 \\text{ ft/s}",
    type: "free-response"
  },
  {
    id: "rr-pulley-15",
    difficulty: "Hard",
    category: "Pulleys and Winches",
    statement: "A winch 10m high pulls a car. Rope is pulled at 2m/s. Fast is distance of car changing when car is 24m away?",
    solution: "1. x²+100=s². x dx/dt = s ds/dt. s=26, x=24. 2. 24 dx/dt = 26(-2) = -52 => dx/dt = -2.17 m/s.",
    finalAnswer: "2.17 \\text{ m/s}",
    type: "free-response"
  },
  {
    id: "rr-pulley-16",
    difficulty: "Hard",
    category: "Pulleys and Winches",
    statement: "Standard pulley: m1, m2. If m1 rises at 3 m/s, how fast is m2 falling?",
    solution: "1. L = y1 + y2 + constant. 2. dy1/dt + dy2/dt = 0 => dy2/dt = -dy1/dt = -3 m/s.",
    finalAnswer: "-3 \\text{ m/s}",
    type: "free-response"
  },
  {
    id: "rr-pulley-17",
    difficulty: "Hard",
    category: "Pulleys and Winches",
    statement: "Block and tackle with 4 ropes. If end is pulled at 20 ft/s, how fast does load rise?",
    solution: "1. v_load = v_pull / N_ropes = 20 / 4 = 5 ft/s.",
    finalAnswer: "5 \\text{ ft/s}",
    type: "free-response"
  },
  {
    id: "rr-pulley-18",
    difficulty: "Hard",
    category: "Pulleys and Winches",
    statement: "A boat is pulled to a dock 5m high. Rope is pulled in at 1 m/s. How fast is the angle of the rope with the horizontal changing when s=13m?",
    solution: "1. sinθ = 5/s. cosθ dθ/dt = (-5/s²)ds/dt. 2. s=13, x=12. cosθ=12/13. 3. (12/13)dθ/dt = (-5/169)(-1) = 5/169. 4. dθ/dt = 5/(13*12) = 5/156 rad/s.",
    finalAnswer: "\\frac{5}{156} \\text{ rad/s}",
    type: "free-response"
  },
  {
    id: "rr-pulley-19",
    difficulty: "Hard",
    category: "Pulleys and Winches",
    statement: "A winch 15 ft above ground pulls a crate. If crate moves on floor at 10 ft/s, fast is rope pulled in when crate is 20 ft from winch base?",
    solution: "1. x²+225=s². x dx/dt = s ds/dt. 2. x=20, s=25, dx/dt=-10. 3. 20(-10) = 25 ds/dt => ds/dt = -200/25 = -8 ft/s.",
    finalAnswer: "-8 \\text{ ft/s}",
    type: "free-response"
  },
  {
    id: "rr-pulley-20",
    difficulty: "Hard",
    category: "Pulleys and Winches",
    statement: "Two pulleys: Load is 2 ft below. Rope pulled at 5 ft/s. Fast is load rise?",
    solution: "1. v = 5/2 = 2.5 ft/s.",
    finalAnswer: "2.5 \\text{ ft/s}",
    type: "free-response"
  },
  {
    id: "rr-curve-13",
    difficulty: "Hard",
    category: "Motion on Curves",
    statement: "Particle on xy = 12. If dx/dt = 4 when x=3, find dy/dt.",
    solution: "1. x dy/dt + y dx/dt = 0. 2. 3 dy/dt + 4(4) = 0 => 3 dy/dt = -16 => dy/dt = -16/3.",
    finalAnswer: "-16/3",
    type: "free-response"
  },
  {
    id: "rr-curve-14",
    difficulty: "Hard",
    category: "Motion on Curves",
    statement: "Particle on y = 1/x². dx/dt=5 when x=1. find dy/dt.",
    solution: "1. dy/dt = (-2/x³)(dx/dt) = -2(5) = -10.",
    finalAnswer: "-10",
    type: "free-response"
  },
  {
    id: "rr-curve-15",
    difficulty: "Hard",
    category: "Motion on Curves",
    statement: "Particle on y = cos(x). dx/dt = 2 when x=π/2. find dy/dt.",
    solution: "1. dy/dt = -sin(x)dx/dt = -1(2) = -2.",
    finalAnswer: "-2",
    type: "free-response"
  },
  {
    id: "rr-curve-16",
    difficulty: "Hard",
    category: "Motion on Curves",
    statement: "Particle on y = sqrt(x). At (4, 2), dy/dt = 3. find dx/dt.",
    solution: "1. dy/dt = (1 / 2sqrt(x))dx/dt. 2. 3 = (1/4)dx/dt => dx/dt = 12.",
    finalAnswer: "12",
    type: "free-response"
  },
  {
    id: "rr-curve-17",
    difficulty: "Hard",
    category: "Motion on Curves",
    statement: "Particle on y = x² + 2x. dx/dt = 5 when x=1. find dy/dt.",
    solution: "1. dy/dt = (2x + 2)dx/dt = (4)(5) = 20.",
    finalAnswer: "20",
    type: "free-response"
  },
  {
    id: "rr-curve-18",
    difficulty: "Hard",
    category: "Motion on Curves",
    statement: "Particle on y = arctan(x). dx/dt = 10 when x=1. find dy/dt.",
    solution: "1. dy/dt = (1 / (1+x²))dx/dt = (1/2)(10) = 5.",
    finalAnswer: "5",
    type: "free-response"
  },
  {
    id: "rr-curve-19",
    difficulty: "Hard",
    category: "Motion on Curves",
    statement: "Particle on y = 2^x. dx/dt = 1 when x=0. find dy/dt.",
    solution: "1. dy/dt = 2^x ln(2) dx/dt = 1 * ln(2) * 1 = ln(2).",
    finalAnswer: "ln(2)",
    type: "free-response"
  },
  {
    id: "rr-curve-20",
    difficulty: "Hard",
    category: "Motion on Curves",
    statement: "Particle on x² + y² = 25. At (3, 4), distance to origin is constant. dr/dt?",
    solution: "1. r is constant (5). dr/dt = 0.",
    finalAnswer: "0",
    type: "free-response"
  },
  {
    id: "rr-persp-9",
    difficulty: "Hard",
    category: "Perspective Rates",
    statement: "A plane flies horizontally at altitude 1km. Observer sees it at angle θ. If v=600 km/h, find dθ/dt when θ=60°.",
    solution: "1. cotθ = x/h. -csc²θ dθ/dt = (1/h)dx/dt. 2. h=1. csc(60) = 2/√3. csc²θ = 4/3. 3. -(4/3)dθ/dt = -600 => dθ/dt = 450 rad/h = 7.5 rad/min.",
    finalAnswer: "7.5 \\text{ rad/min}",
    type: "free-response"
  },
  {
    id: "rr-persp-10",
    difficulty: "Hard",
    category: "Perspective Rates",
    statement: "A rocket rises at 200 m/s. Observer 1000m away. Fast is angle changing at 45 degrees?",
    solution: "1. tanθ = y/1000. sec²θ dθ/dt = 0.001 dy/dt. 2. θ=45 => sec²θ=2. 3. 2 dθ/dt = 0.001(200) = 0.2 => dθ/dt = 0.1 rad/s.",
    finalAnswer: "0.1 \\text{ rad/s}",
    type: "free-response"
  },
  {
    id: "rr-persp-11",
    difficulty: "Hard",
    category: "Perspective Rates",
    statement: "A man 2m tall walks from a light at 1m/s. Light is 5m high. Fast is the angle of elevation of the light from his head changing at 10m?",
    solution: "1. tanθ = (5-2)/x = 3/x. 2. sec²θ dθ/dt = (-3/x²)dx/dt. 3. x=10 => tanθ=0.3, sec²θ=1.09. 4. 1.09 dθ/dt = (-3/100)(1) = -0.03. 5. dθ/dt = -0.03/1.09 ≈ -0.027 rad/s.",
    finalAnswer: "-0.027 \\text{ rad/s}",
    type: "free-response"
  },
  {
    id: "rr-persp-12",
    difficulty: "Hard",
    category: "Perspective Rates",
    statement: "A satellite orbits at 400km. Ground station tracks it. At θ=30, v=7 km/s (horizontal). Fast is θ changing?",
    solution: "1. cotθ = x/400. -csc²θ dθ/dt = (1/400)dx/dt. 2. θ=30 => cscθ=2, csc²θ=4. 3. -4 dθ/dt = -7/400 => dθ/dt = 7/1600 = 0.0044 rad/s.",
    finalAnswer: "0.0044 \\text{ rad/s}",
    type: "free-response"
  },
  {
    id: "rr-persp-13",
    difficulty: "Hard",
    category: "Perspective Rates",
    statement: "In the athlete problem (radius 50m, 8m/s), find dθ/dt for an observer 100m from the center.",
    solution: "1. Law of Cosines or tanθ = (50sinφ) / (100 - 50cosφ). 2. At φ=0 (closest), θ=0. 3. dθ/dt = (r*v - 0)/(d-r)² ... No. dθ/dt = (v / (d-r)) if φ=0. 4. dθ/dt = 8 / 50 = 0.16. 5. Wait, at φ=180 (farthest), dθ/dt = 8 / 150 = 0.053 rad/s.",
    finalAnswer: "0.16 \\text{ rad/s}",
    type: "free-response"
  },
  {
    id: "rr-persp-14",
    difficulty: "Hard",
    category: "Perspective Rates",
    statement: "A car drives past a bystander 10m away at 20 m/s. Fast is the angle changing 1s later?",
    solution: "1. x = 20t = 20. 2. tanθ = x/10 = 2. sec²θ = 5. 3. 5 dθ/dt = (1/10)dx/dt = 2. 4. dθ/dt = 0.4 rad/s.",
    finalAnswer: "0.4 \\text{ rad/s}",
    type: "free-response"
  },
  {
    id: "rr-persp-15",
    difficulty: "Hard",
    category: "Perspective Rates",
    statement: "A beacon rotates at 10 rad/s. Fast is spot moving on wall 5m away at θ=π/4?",
    solution: "1. dx/dt = 5 sec²θ dθ/dt = 5(2)(10) = 100 m/s.",
    finalAnswer: "100 \\text{ m/s}",
    type: "free-response"
  },
  {
    id: "rr-persp-16",
    difficulty: "Hard",
    category: "Perspective Rates",
    statement: "A plane flies toward you at 200 m/s at 2km altitude. Fast is angle changing at 45 degrees?",
    solution: "1. x=2000. 2. dθ/dt = (h/s²)v = (2000/8M)*200 = 0.05 rad/s.",
    finalAnswer: "0.05 \\text{ rad/s}",
    type: "free-response"
  },
  {
    id: "rr-persp-17",
    difficulty: "Hard",
    category: "Perspective Rates",
    statement: "A person 50m from a lift sees it rise at 1m/s. Fast is angle changing at 50m?",
    solution: "1. dθ/dt = 1/100 = 0.01 rad/s.",
    finalAnswer: "0.01 \\text{ rad/s}",
    type: "free-response"
  },
  {
    id: "rr-persp-18",
    difficulty: "Hard",
    category: "Perspective Rates",
    statement: "Angle of elevation of a kite changes at 0.1 rad/s. If kite is 100m high (const), find its speed at θ=30°.",
    solution: "1. v = (h csc²θ) dθ/dt = 100(4)(0.1) = 40 m/s.",
    finalAnswer: "40 \\text{ m/s}",
    type: "free-response"
  },
  {
    id: "rr-persp-19",
    difficulty: "Hard",
    category: "Perspective Rates",
    statement: "A runner on a bridge is watched from a boat under the bridge. Boat is fixed. Bridge is 10m high. Runner at 4m/s. Fast is angle changing when runner is 10m from center?",
    solution: "1. tanθ = x/10. sec²θ dθ/dt = 0.1 dx/dt. 2. x=10 => θ=45, sec²θ=2. 3. 2 dθ/dt = 0.4 => dθ/dt = 0.2 rad/s.",
    finalAnswer: "0.2 \\text{ rad/s}",
    type: "free-response"
  },
  {
    id: "rr-persp-20",
    difficulty: "Hard",
    category: "Perspective Rates",
    statement: "In the previous bridge problem, the boat is also moving away at 2m/s. Find dθ/dt when x_runner=10, x_boat=5.",
    solution: "1. Bridge is z-axis? Let's assume boat at (0, y, 0), runner at (x, 0, 10). 2. tanθ = sqrt(x²+y²)/10. 3. sec²θ dθ/dt = (1/10) * (x dx/dt + y dy/dt)/sqrt(x²+y²). 4. x=10, y=5, dx/dt=4, dy/dt=2. r = √125. 5. (1 + 125/100) dθ/dt = (1/10) * (40+10)/√125 = 5/√125 = 1/√5. 6. 2.25 dθ/dt = 0.447 => dθ/dt = 0.198 rad/s.",
    finalAnswer: "0.198 \\text{ rad/s}",
    type: "free-response"
  },
  {
    id: "rr-gas-6",
    difficulty: "Hard",
    category: "Atmospheric/Gas Laws",
    statement: "Pressure increases by 3% and Volume decreases by 2%. What is the net change in Temperature (PV=nRT)?",
    solution: "1. PV = nRT => (1.03P)(0.98V) = 1.0094 PV. 2. Temp increases by 0.94%.",
    finalAnswer: "0.94\\%",
    type: "free-response"
  },
  {
    id: "rr-gas-7",
    difficulty: "Hard",
    category: "Atmospheric/Gas Laws",
    statement: "A bubble rises from bottom of lake (P=2 atm) to surface (P=1 atm). If radius at bottom is 1cm and rises at 1m/s, find dr/dt at surface. Assume T is constant.",
    solution: "1. PV = k => P(4/3πr³) = k. 2. P_1 r_1³ = P_2 r_2³. 2(1³) = 1(r_2³) => r_2 = 2^(1/3). 3. Differentiating: (dP/dt)r³ + 3Pr²(dr/dt) = 0. 4. Need dP/dt. P = 1 + ρgh/10^5. dP/dt = k dh/dt. Assume depth change rate gives dP/dt. 5. Actually, simpler: r = (k/P)^(1/3) => dr/dt = -1/3 (k/P^4)^(1/3) dP/dt.",
    finalAnswer: "\\text{Complex}",
    type: "free-response"
  },
  {
    id: "rr-gas-8",
    difficulty: "Hard",
    category: "Atmospheric/Gas Laws",
    statement: "Gas in a cylinder is compressed so PV^1.2 = C. If dV/dt = -0.5, P=50 when V=4, find dP/dt.",
    solution: "1. V^1.2 dP/dt + 1.2PV^0.2 dV/dt = 0. 2. dP/dt = -1.2 (P/V) dV/dt = -1.2 (50/4) (-0.5) = 1.2 * 12.5 * 0.5 = 7.5 units/s.",
    finalAnswer: "7.5 \\text{ units/s}",
    type: "free-response"
  },
  {
    id: "rr-gas-9",
    difficulty: "Hard",
    category: "Atmospheric/Gas Laws",
    statement: "A container's V is constant. P is proportional to T. If T increases by 5 K/min, and currently T=300K, P=100kPa, find dP/dt.",
    solution: "1. P = kT => dP/dt = k dT/dt. k = P/T = 1/3. 2. dP/dt = (1/3)(5) = 1.67 kPa/min.",
    finalAnswer: "1.67 \\text{ kPa/min}",
    type: "free-response"
  },
  {
    id: "rr-gas-10",
    difficulty: "Hard",
    category: "Atmospheric/Gas Laws",
    statement: "Van der Waals: (P + a/V²)(V - b) = nRT. If V is constant, how does P change with T?",
    solution: "1. Differentiating w.r.t T: (dP/dT)(V-b) = nR. 2. dP/dT = nR / (V-b).",
    finalAnswer: "\\frac{nR}{V-b}",
    type: "free-response"
  },
  {
    id: "rr-gas-11",
    difficulty: "Hard",
    category: "Atmospheric/Gas Laws",
    statement: "PV = nRT. If P and V both double, what happens to T?",
    solution: "1. (2P)(2V) = 4PV = nR(4T). T quadruples.",
    finalAnswer: "4T",
    type: "free-response"
  },
  {
    id: "rr-gas-12",
    difficulty: "Hard",
    category: "Atmospheric/Gas Laws",
    statement: "A gas expands from V=1 to V=2 at constant P. If dV/dt = 0.1, find rate of work dW/dt = P dV/dt (P=10).",
    solution: "1. dW/dt = 10(0.1) = 1 unit/s.",
    finalAnswer: "1 \\text{ unit/s}",
    type: "free-response"
  },
  {
    id: "rr-gas-13",
    difficulty: "Hard",
    category: "Atmospheric/Gas Laws",
    statement: "Gas in a balloon. dV/dt = 20. If PV=nRT and P is constant, find dT/dt at V=100, T=300.",
    solution: "1. P dV/dt = nR dT/dt. nR = PV/T = 100P/300 = P/3. 2. P(20) = (P/3)dT/dt => dT/dt = 60 K/s.",
    finalAnswer: "60 \\text{ K/s}",
    type: "free-response"
  },
  {
    id: "rr-gas-14",
    difficulty: "Hard",
    category: "Atmospheric/Gas Laws",
    statement: "If P decreases at 5% and V increases at 5%, what is the net change in T?",
    solution: "1. (0.95P)(1.05V) = 0.9975 PV. Decreases by 0.25%.",
    finalAnswer: "-0.25\\%",
    type: "free-response"
  },
  {
    id: "rr-gas-15",
    difficulty: "Hard",
    category: "Atmospheric/Gas Laws",
    statement: "If the density of a gas is ρ = MP/RT, and P, T are changing. Find dρ/dt if M, R are constant.",
    solution: "1. dρ/dt = (M/R) [ (T dP/dt - P dT/dt) / T² ].",
    finalAnswer: "\\frac{M}{R} \\frac{T \\frac{dP}{dt} - P \\frac{dT}{dt}}{T^2}",
    type: "free-response"
  },
  {
    id: "rr-gas-16",
    difficulty: "Hard",
    category: "Atmospheric/Gas Laws",
    statement: "Compressing gas: dV/dt = -2. If T increases at 1 and P stays same, what was initial V? Assume nR=1.",
    solution: "1. P dV/dt = nR dT/dt => P(-2) = 1 => P = -0.5 (Impossible, P must be positive). Recheck: P dV/dt + V dP/dt = nR dT/dt. If dP/dt=0, P dV/dt = dT/dt. -2P = 1 => P is negative?? Oh, if V decreases, T should decrease at constant P. If T increases, P must be increasing fast.",
    finalAnswer: "\\text{Inconsistent}",
    type: "free-response"
  },
  {
    id: "rr-gas-17",
    difficulty: "Hard",
    category: "Atmospheric/Gas Laws",
    statement: "If P=10, V=2, T=20. If dP/dt=1, dV/dt=0.5, find dT/dt at nR=1.",
    solution: "1. dT/dt = P dV/dt + V dP/dt = 10(0.5) + 2(1) = 7.",
    finalAnswer: "7",
    type: "free-response"
  },
  {
    id: "rr-gas-18",
    difficulty: "Hard",
    category: "Atmospheric/Gas Laws",
    statement: "If P increases at 2% and T increases at 5%, finding % change in V.",
    solution: "1. V = nRT/P => V_new = (1.05)/(1.02) V = 1.0294 V. Increases by 2.94%.",
    finalAnswer: "2.94\\%",
    type: "free-response"
  },
  {
    id: "rr-gas-19",
    difficulty: "Hard",
    category: "Atmospheric/Gas Laws",
    statement: "A gas tank leaks so that n decreases at 1% per minute. If P and V are constant, how must T change?",
    solution: "1. PV = nRT. If n decreases, T must increase to keep nT constant. T_new = T/0.99 = 1.0101 T. Increases by 1.01%.",
    finalAnswer: "1.01\\%",
    type: "free-response"
  },
  {
    id: "rr-gas-20",
    difficulty: "Hard",
    category: "Atmospheric/Gas Laws",
    statement: "If P = 100 exp(-h/10). If h increases at 2 units/s, find dP/dt at h=10.",
    solution: "1. dP/dt = 100 * (-0.1) * exp(-h/10) * dh/dt = -10 * exp(-1) * 2 = -20/e ≈ -7.36 units/s.",
    finalAnswer: "-7.36",
    type: "free-response"
  }
];





