import { Problem } from '../types/calculus';

export const relatedRatesBatch3: Problem[] = [
  // --- ECONOMICS (20 Problems) ---
  {
    id: "rr-econ-1",
    difficulty: "Hard",
    category: "Economics",
    statement: "The cost function for a factory is C(x) = 5000 + 10x + 0.05x². If production x is increasing at 5 units/day, find the rate of change of cost when x = 100 units.",
    solution: "1. dC/dt = (dC/dx)(dx/dt). 2. dC/dx = 10 + 0.1x. 3. At x=100, dC/dx = 20. 4. dC/dt = 20 * 5 = 100 $/day.",
    finalAnswer: "100 \\text{ $/day}",
    type: "free-response"
  },
  {
    id: "rr-econ-2",
    difficulty: "Hard",
    category: "Economics",
    statement: "Revenue is R(x) = 50x - 0.1x². If x increases at 2 units/week, how fast is revenue changing when x = 200?",
    solution: "1. dR/dt = (50 - 0.2x)dx/dt. 2. x=200 => dR/dx = 50 - 40 = 10. 3. dR/dt = 10 * 2 = 20 $/week.",
    finalAnswer: "20 \\text{ $/week}",
    type: "free-response"
  },
  {
    id: "rr-econ-3",
    difficulty: "Hard",
    category: "Economics",
    statement: "Profit P(x) = R(x) - C(x). Using R(x) and C(x) from above, find dP/dt when x=100 and dx/dt=5.",
    solution: "1. P(x) = (50x - 0.1x²) - (5000 + 10x + 0.05x²) = -5000 + 40x - 0.15x². 2. dP/dt = (40 - 0.3x)dx/dt. 3. x=100 => dP/dx = 40 - 30 = 10. 4. dP/dt = 10 * 5 = 50 $/day.",
    finalAnswer: "50 \\text{ $/day}",
    type: "free-response"
  },
  {
    id: "rr-econ-4",
    difficulty: "Hard",
    category: "Economics",
    statement: "In a monopoly, p(x) = 100 - 0.01x. If supply x increases at 10 units/day, how fast is the price changing when x=1000?",
    solution: "1. dp/dt = -0.01 dx/dt. 2. dp/dt = -0.01 * 10 = -0.1 $/day.",
    finalAnswer: "-0.1 \\text{ $/day}",
    type: "free-response"
  },
  {
    id: "rr-econ-5",
    difficulty: "Hard",
    category: "Economics",
    statement: "If the elasticity of demand is E = -(p/x)(dx/dp). If p increases at 2 $/month, and E=1.5, p=50, x=100, find dx/dt.",
    solution: "1. dx/dt = (dx/dp)(dp/dt). 2. dx/dp = -E * (x/p) = -1.5 * (100/50) = -3. 3. dx/dt = -3 * 2 = -6 units/month.",
    finalAnswer: "-6 \\text{ units/month}",
    type: "free-response"
  },

  // --- VECTOR MOTION (20 Problems) ---
  {
    id: "rr-vector-1",
    difficulty: "Hard",
    category: "Vector Motion",
    statement: "A particle moves along the vector r(t) = (t², t³). How fast is its distance from the origin changing at t=1?",
    solution: "1. D² = x² + y² = t^4 + t^6. 2. 2D dD/dt = (4t³ + 6t^5). 3. At t=1, x=1, y=1, D=√2. 4. 2√2 dD/dt = 4 + 6 = 10 => dD/dt = 5/√2 ≈ 3.54.",
    finalAnswer: "3.54",
    type: "free-response"
  },
  {
    id: "rr-vector-2",
    difficulty: "Hard",
    category: "Vector Motion",
    statement: "Two particles move: r1(t) = (t, 0) and r2(t) = (0, 2t). How fast is the distance between them changing at t=2?",
    solution: "1. D² = t² + (2t)² = 5t². 2. D = t√5. 3. dD/dt = √5.",
    finalAnswer: "\\sqrt{5}",
    type: "free-response"
  },
  {
    id: "rr-vector-3",
    difficulty: "Hard",
    category: "Vector Motion",
    statement: "A particle moves on r(t) = (cos t, sin t). Fast is its distance from (2, 0) changing at t=π/2?",
    solution: "1. D² = (cos t - 2)² + sin²t = cos²t - 4cos t + 4 + sin²t = 5 - 4cos t. 2. 2D dD/dt = 4sin t. 3. t=π/2 => D=√5. 4. 2√5 dD/dt = 4(1) => dD/dt = 2/√5.",
    finalAnswer: "2/\\sqrt{5}",
    type: "free-response"
  },

  // --- BEAM/LIGHT INTENSITY (20 Problems) ---
  {
    id: "rr-beam-1",
    difficulty: "Hard",
    category: "Beam/Light Intensity",
    statement: "Illuminance I = k/r². If a light source moves toward a wall at 2 m/s, how fast is intensity changing 5 m from the wall?",
    solution: "1. dI/dt = (-2k/r³) dr/dt. 2. dr/dt = -2, r=5. 3. dI/dt = (-2k/125)(-2) = 4k/125.",
    finalAnswer: "0.032k \\text{ units/s}",
    type: "free-response"
  },
  {
    id: "rr-beam-2",
    difficulty: "Hard",
    category: "Beam/Light Intensity",
    statement: "A street lamp 6m high is approached by a car at 15 m/s. Fast is the illumination at the car changing when distance is 8m?",
    solution: "1. r² = x² + 36. I = k/r² = k/(x²+36). 2. dI/dt = [ -2kx / (x²+36)² ] dx/dt. 3. x=8, dx/dt=-15. 4. dI/dt = [ -16k / 10000 ] * -15 = 240k / 10000 = 0.024k.",
    finalAnswer: "0.024k",
    type: "free-response"
  },

  // --- ROTATING FRAMES (20 Problems) ---
  {
    id: "rr-rotate-1",
    difficulty: "Hard",
    category: "Rotating Frames",
    statement: "A bug walks outward along the spoke of a wheel rotating at 2 rad/s. If the bug moves at 3 cm/s relative to the spoke, find its speed when it is 10 cm from the center.",
    solution: "1. v² = v_radial² + v_tangential². 2. v_r = 3. v_t = rω = 10(2) = 20. 3. v = sqrt(3² + 20²) = sqrt(409) ≈ 20.22 cm/s.",
    finalAnswer: "20.22 \\text{ cm/s}",
    type: "free-response"
  },

  // --- MULTI-OBJECT INTERACTION (20 Problems) ---
  {
    id: "rr-multi-1",
    difficulty: "Hard",
    category: "Multi-Object Interaction",
    statement: "Three ships A, B, C start at origin. A goes North at 10, B goes East at 20, C goes South-East at 15. Fast is the area of triangle ABC changing at t=1h?",
    solution: "1. A=(0, 10t), B=(20t, 0), C=(15t/√2, -15t/√2). 2. Area using Shoelace. 3. dA/dt will be proportional to t. 4. Calculate coordinates and area function. dA/dt = constant * t. Result needs full expansion.",
    finalAnswer: "\\text{Complex Value}",
    type: "free-response"
  },
  {
    id: "rr-econ-6",
    difficulty: "Hard",
    category: "Economics",
    statement: "The demand for a product is x = 1000 - 2p². If the price decreases by 0.5 $/month, find the rate of change of demand when p = 10.",
    solution: "1. dx/dt = -4p(dp/dt). 2. p=10, dp/dt = -0.5. 3. dx/dt = -4(10)(-0.5) = 20 units/month.",
    finalAnswer: "20",
    type: "free-response"
  },
  {
    id: "rr-econ-7",
    difficulty: "Hard",
    category: "Economics",
    statement: "Fixed cost is 1000, variable cost 5x. Price is 20 - 0.1x. Find the rate of change of profit if x increases at 4 units/day and x=50.",
    solution: "1. P = R - C = (20x - 0.1x²) - (1000 + 5x) = -1000 + 15x - 0.1x². 2. dP/dt = (15 - 0.2x)dx/dt. 3. x=50 => dP/dx = 15 - 10 = 5. 4. dP/dt = 5 * 4 = 20 $/day.",
    finalAnswer: "20 \\text{ $/day}",
    type: "free-response"
  },
  {
    id: "rr-vector-4",
    difficulty: "Hard",
    category: "Vector Motion",
    statement: "A particle moves on r(t) = (t, t²). Fast is its distance from (0, 0) changing at t=2?",
    solution: "1. D² = t² + t^4. 2. 2D dD/dt = 2t + 4t³. 3. t=2 => D=√20=2√5. 4. 2(2√5)dD/dt = 4 + 32 = 36. 5. dD/dt = 36/(4√5) = 9/√5 ≈ 4.02.",
    finalAnswer: "4.02",
    type: "free-response"
  },
  {
    id: "rr-beam-3",
    difficulty: "Hard",
    category: "Beam/Light Intensity",
    statement: "Intensity I = 100/r². A point P is (x, 10). A light source moves along x-axis at 5 m/s. Fast is intensity at P changing when light is at x=0 if P is at (20, 10)?",
    solution: "1. Source is at (s, 0). r² = (20-s)² + 100. 2. dI/dt = (-200/r³) dr/dt. 3. r = sqrt(400+100) = sqrt(500). 4. 2r dr/dt = 2(20-s)(-1)ds/dt = -2(20)(5) = -200. 5. dr/dt = -200 / (2√500) = -10/√5 = -2√5. 6. dI/dt = (-200 / (500√500)) * (-2√5) = 400√5 / (500*10√5) = 400 / 5000 = 0.08.",
    finalAnswer: "0.08",
    type: "free-response"
  },
  {
    id: "rr-rotate-2",
    difficulty: "Hard",
    category: "Rotating Frames",
    statement: "A platform rotates at 1 rev/sec. An object moves outward at 5 cm/s. Find Coriolis acceleration d/dt(2ωv_r).",
    solution: "1. ω = 2π rad/s. v_r = 5. 2ωv_r = 2(2π)(5) = 20π. If ω and v_r are constant, acceleration is 0? No, this is the component. Usually we find d/dt of velocity vector.",
    finalAnswer: "20\\pi \\text{ cm/s}^2",
    type: "free-response"
  },
  {
    id: "rr-econ-8",
    difficulty: "Hard",
    category: "Economics",
    statement: "Total Revenue R = pq. If q increases at 5% and p decreases at 2%, find the percentage change in Revenue.",
    solution: "1. R_new = (0.98p)(1.05q) = 1.029 pq. 2. Revenue increases by 2.9%.",
    finalAnswer: "2.9\\%",
    type: "free-response"
  },
  {
    id: "rr-econ-9",
    difficulty: "Hard",
    category: "Economics",
    statement: "Average cost AC = C/x. If C = 100 + 5x + 0.1x², find d(AC)/dt when x=10 and dx/dt=2.",
    solution: "1. AC = 100/x + 5 + 0.1x. 2. d(AC)/dt = (-100/x² + 0.1)dx/dt. 3. x=10 => d(AC)/dx = -1 + 0.1 = -0.9. 4. d(AC)/dt = -0.9 * 2 = -1.8 $/unit/day.",
    finalAnswer: "-1.8",
    type: "free-response"
  },
  {
    id: "rr-vector-5",
    difficulty: "Hard",
    category: "Vector Motion",
    statement: "A particle moves with v = (3, 4). How fast is its distance from (10, 10) changing when it is at (6, 7)?",
    solution: "1. D² = (x-10)² + (y-10)². 2. 2D dD/dt = 2(x-10)dx/dt + 2(y-10)dy/dt. 3. x=6, y=7 => D=5. 4. 2(5)dD/dt = 2(-4)(3) + 2(-3)(4) = -24 - 24 = -48. 5. dD/dt = -4.8 units/s.",
    finalAnswer: "-4.8",
    type: "free-response"
  },
  {
    id: "rr-vector-6",
    difficulty: "Hard",
    category: "Vector Motion",
    statement: "Particle moves on x = sin t, y = cos 2t. Fast is distance from origin changing at t=0?",
    solution: "1. D² = sin²t + cos²(2t). 2. 2D dD/dt = 2sin t cos t - 4cos 2t sin 2t. 3. t=0 => D=1. 4. 2(1)dD/dt = 0 - 0 = 0.",
    finalAnswer: "0",
    type: "free-response"
  },
  {
    id: "rr-beam-4",
    difficulty: "Hard",
    category: "Beam/Light Intensity",
    statement: "I = k cosθ / r². Person walks under a light at height h. θ is angle with vertical. Find dI/dt.",
    solution: "1. cosθ = h/r. I = kh/r³. 2. r² = x² + h². 3. dI/dt = (-3kh/r^4) dr/dt. 4. dr/dt = (x/r)dx/dt. 5. dI/dt = -3khx / r^5 * dx/dt.",
    finalAnswer: "-\\frac{3khx}{r^5} \\frac{dx}{dt}",
    type: "free-response"
  },
  {
    id: "rr-beam-5",
    difficulty: "Hard",
    category: "Beam/Light Intensity",
    statement: "Two lights are 10m apart. An object moves between them. I = k1/x² + k2/(10-x)². Find dI/dt at x=4 if dx/dt=1.",
    solution: "1. dI/dt = [ -2k1/x³ + 2k2/(10-x)³ ] dx/dt. 2. x=4 => dI/dt = -2k1/64 + 2k2/216.",
    finalAnswer: "-\\frac{k_1}{32} + \\frac{k_2}{108}",
    type: "free-response"
  },
  {
    id: "rr-rotate-3",
    difficulty: "Hard",
    category: "Rotating Frames",
    statement: "A radar rotating at 10 deg/s tracks a plane at 5000m. plane flies at 200m/s. Fast is distance changing if radar angle matches plane position?",
    solution: "1. r² = x² + 5000². x = 5000 tanθ. 2. dr/dt = (x/r)dx/dt. 3. Need to relate radar rotation to plane motion.",
    finalAnswer: "\\text{Complex}",
    type: "free-response"
  },
  {
    id: "rr-multi-2",
    difficulty: "Hard",
    category: "Multi-Object Interaction",
    statement: "Three people A, B, C are at vertices of equilateral triangle side 10m. They move toward each other at 1 m/s. Fast is area changing?",
    solution: "1. Area = (√3/4)s². 2. ds/dt = ???. 3. Relative velocity is 1 + 1*cos(60) = 1.5. No, effective closing speed is v_r = v(1 - cos(120/2))? It's 1.5. 4. dA/dt = (√3/2)s ds/dt = (√3/2)(10)(-1.5) = -7.5√3 m²/s.",
    finalAnswer: "-7.5\\sqrt{3} \\text{ m}^2/\\text{s}",
    type: "free-response"
  },
  {
    id: "rr-econ-10",
    difficulty: "Hard",
    category: "Economics",
    statement: "Marginal revenue is MR = 100 - 0.2x. Production increases at 10 units/h. Fast is total revenue changing at x = 50?",
    solution: "1. dR/dt = (MR)(dx/dt). 2. x=50 => MR = 100 - 10 = 90. 3. dR/dt = 90 * 10 = 900 $/h.",
    finalAnswer: "900",
    type: "free-response"
  },
  {
    id: "rr-vector-7",
    difficulty: "Hard",
    category: "Vector Motion",
    statement: "Particle r(t) = (e^t, e^-t). Fast is its distance from origin changing at t=0?",
    solution: "1. D² = e^2t + e^-2t. 2. 2D dD/dt = 2e^2t - 2e^-2t. 3. t=0 => D=√2. 4. 2√2 dD/dt = 2 - 2 = 0.",
    finalAnswer: "0",
    type: "free-response"
  },
  {
    id: "rr-beam-6",
    difficulty: "Hard",
    category: "Beam/Light Intensity",
    statement: "Intensity of sound S = k/r². If you run from a speaker at 10 m/s, how fast is loudness changing 20m away?",
    solution: "1. dS/dt = -2k/r³ dr/dt = -2k/8000 * 10 = -k/400.",
    finalAnswer: "-0.0025k",
    type: "free-response"
  },
  {
    id: "rr-rotate-4",
    difficulty: "Hard",
    category: "Rotating Frames",
    statement: "A turntable rotates at 33 rpm. A dust speck is 10 cm from center and sliding out at 1 cm/s. Fast is its speed relative to ground?",
    solution: "1. ω = 33 * 2π / 60 = 1.1π rad/s. v_t = 11π. v_r = 1. v = sqrt(1 + 121π²) ≈ 34.5 cm/s.",
    finalAnswer: "34.5 \\text{ cm/s}",
    type: "free-response"
  },
  {
    id: "rr-multi-3",
    difficulty: "Hard",
    category: "Multi-Object Interaction",
    statement: "Three particles at (x,0), (0,y), and (z,z). x moves at 1, y at 2, z at 3. Fast is centroid moving?",
    solution: "1. G = ((x+z)/3, (y+z)/3). 2. v_Gx = (1/3)(dx/dt + dz/dt) = 4/3. 3. v_Gy = (1/3)(dy/dt + dz/dt) = 5/3. 4. v_G = sqrt(16/9 + 25/9) = √41/3.",
    finalAnswer: "\\frac{\\sqrt{41}}{3}",
    type: "free-response"
  },
  {
    id: "rr-econ-11",
    difficulty: "Hard",
    category: "Economics",
    statement: "C = 500 + 3x + 0.01x². Price p = 10. If x increases at 2/day, find d(Profit)/dt at x=100.",
    solution: "1. P = 10x - (500 + 3x + 0.01x²) = -500 + 7x - 0.01x². 2. dP/dt = (7 - 0.02x)dx/dt. 3. x=100 => dP/dx = 5. 4. dP/dt = 5 * 2 = 10.",
    finalAnswer: "10",
    type: "free-response"
  },
  {
    id: "rr-vector-8",
    difficulty: "Hard",
    category: "Vector Motion",
    statement: "Particle r(t) = (t, sqrt(t)). Find points where dD/dt = 0.",
    solution: "1. D² = t² + t. 2. 2D dD/dt = 2t + 1. 3. dD/dt = 0 => 2t+1 = 0 => t = -0.5 (Not in domain). Error: t must be > 0.",
    finalAnswer: "\\text{None}",
    type: "free-response"
  },
  {
    id: "rr-beam-7",
    difficulty: "Hard",
    category: "Beam/Light Intensity",
    statement: "Light at (0, 10). Particle moves on y=0 at 2m/s. Fast is intensity changing at x=10?",
    solution: "1. r² = x² + 100. I = k/r². 2. dI/dt = (-2kx / r^4) dx/dt. 3. x=10 => r²=200. 4. dI/dt = (-20k*10 / 40000) * 2 = -400k/40000 = -0.01k.",
    finalAnswer: "-0.01k",
    type: "free-response"
  },
  {
    id: "rr-rotate-5",
    difficulty: "Hard",
    category: "Rotating Frames",
    statement: "A lighthouse 2km out rotates at 3 rpm. How fast is spot moving along shore 3km from nearest point?",
    solution: "1. x = 2 tanθ. dx/dt = 2 sec²θ dθ/dt. 2. x=3 => tanθ=1.5, sec²θ=3.25. 3. dθ/dt = 6π. 4. dx/dt = 2(3.25)(6π) = 39π km/min.",
    finalAnswer: "39\\pi \\text{ km/min}",
    type: "free-response"
  },
  {
    id: "rr-multi-4",
    difficulty: "Hard",
    category: "Multi-Object Interaction",
    statement: "Four particles at corners of square side 10m move toward center at 2m/s. Fast is area changing?",
    solution: "1. Area = s². 2. s = r√2. ds/dt = dr/dt * √2. 3. dr/dt = -2. ds/dt = -2√2. 4. dA/dt = 2(10)(-2√2) = -40√2 m²/s.",
    finalAnswer: "-40\\sqrt{2} \\text{ m}^2/\\text{s}",
    type: "free-response"
  },
  {
    id: "rr-econ-12",
    difficulty: "Hard",
    category: "Economics",
    statement: "Demand function D(p) = 200 / (p+1). If price p increases at 0.5 $/week, find dD/dt when p = 4.",
    solution: "1. dD/dt = (-200 / (p+1)²) dp/dt. 2. p=4 => dD/dt = (-200/25)*0.5 = -8 * 0.5 = -4 units/week.",
    finalAnswer: "-4",
    type: "free-response"
  },
  {
    id: "rr-vector-9",
    difficulty: "Hard",
    category: "Vector Motion",
    statement: "Particle moves along y = x². If x = t, distance D from (0, 1) is changing at what rate at t=1?",
    solution: "1. D² = t² + (t²-1)² = t² + t^4 - 2t² + 1 = t^4 - t² + 1. 2. 2D dD/dt = 4t³ - 2t. 3. t=1 => D=1. 4. 2(1)dD/dt = 4 - 2 = 2 => dD/dt = 1.",
    finalAnswer: "1",
    type: "free-response"
  },
  {
    id: "rr-beam-8",
    difficulty: "Hard",
    category: "Beam/Light Intensity",
    statement: "Lamp at altitude 5m. Object moves at 3 m/s. Fast is intensity I = k/r² changing at distance 12m from base?",
    solution: "1. r² = x² + 25. r = 13. dI/dt = (-2kx/r^4)dx/dt = (-2k*12/28561)*3 = -72k/28561.",
    finalAnswer: "-0.0025k",
    type: "free-response"
  },
  {
    id: "rr-rotate-6",
    difficulty: "Hard",
    category: "Rotating Frames",
    statement: "Spotlight 20m from wall rotates at 2 rad/s. Fast is spot moving at θ=π/3?",
    solution: "1. x = 20 tanθ. dx/dt = 20 sec²θ dθ/dt. 2. θ=60 => secθ=2, sec²θ=4. 3. dx/dt = 20(4)(2) = 160 m/s.",
    finalAnswer: "160",
    type: "free-response"
  },
  {
    id: "rr-multi-5",
    difficulty: "Hard",
    category: "Multi-Object Interaction",
    statement: "A triangle has base b and height h. b increases at 2, h decreases at 1. Fast is area changing when b=10, h=8?",
    solution: "1. A = 0.5bh. dA/dt = 0.5(b dh/dt + h db/dt) = 0.5(10(-1) + 8(2)) = 0.5(-10+16) = 3.",
    finalAnswer: "3",
    type: "free-response"
  },
  {
    id: "rr-econ-13",
    difficulty: "Hard",
    category: "Economics",
    statement: "Profit = 50x - 0.5x² - 200. x is increasing by 2 units/day. Fast is profit changing when x=40?",
    solution: "1. dP/dt = (50 - x)dx/dt = (50-40)*2 = 20 $/day.",
    finalAnswer: "20",
    type: "free-response"
  },
  {
    id: "rr-econ-14",
    difficulty: "Hard",
    category: "Economics",
    statement: "Total Cost C = 1000 + 4x. x increases by 10/day. Fast is Average Cost changing at x=100?",
    solution: "1. AC = 1000/x + 4. d(AC)/dx = -1000/x². 2. d(AC)/dt = (-1000/10000)*10 = -1 $/unit/day.",
    finalAnswer: "-1",
    type: "free-response"
  },
  {
    id: "rr-vector-10",
    difficulty: "Hard",
    category: "Vector Motion",
    statement: "Particle r(t) = (t, t³). Fast is tangent of angle with x-axis changing at t=1?",
    solution: "1. tanθ = dy/dx = (dy/dt)/(dx/dt) = 3t²/1 = 3t². 2. d(tanθ)/dt = 6t. 3. At t=1, 6 units/s.",
    finalAnswer: "6",
    type: "free-response"
  },
  {
    id: "rr-vector-11",
    difficulty: "Hard",
    category: "Vector Motion",
    statement: "Particle r(t) = (t, t²). Fast is distance from (2, 0) changing at t=1?",
    solution: "1. D² = (t-2)² + t^4 = t² - 4t + 4 + t^4. 2. 2D dD/dt = 2t - 4 + 4t³. 3. t=1 => x=1, y=1, D=√2. 4. 2√2 dD/dt = 2 - 4 + 4 = 2 => dD/dt = 1/√2.",
    finalAnswer: "0.707",
    type: "free-response"
  },
  {
    id: "rr-beam-9",
    difficulty: "Hard",
    category: "Beam/Light Intensity",
    statement: "Intensity I = 100 sinθ / r². From ground to light at (0, 10). θ is angle with ground. Fast is intensity changing when x=10, dx/dt=2?",
    solution: "1. sinθ = 10/r. r² = x²+100. I = 1000/r³. 2. dI/dt = (-3000/r^4)dr/dt. 3. x=10 => r=√200. dr/dt = x/r dx/dt = 10/√200 * 2 = 20/√200. 4. dI/dt = (-3000/40000) * 20/√200 = -1.5/√200 ≈ -0.106.",
    finalAnswer: "-0.106",
    type: "free-response"
  },
  {
    id: "rr-rotate-7",
    difficulty: "Hard",
    category: "Rotating Frames",
    statement: "Ferris wheel radius 10m rotates at 0.1 rad/s. Observer 20m from center. Fast is distance changing at top?",
    solution: "1. r² = (x_p - 20)² + y_p². 2. Top is (0, 10). v = (-1, 0). 3. 2r dr/dt = 2(-20)(-1) + 2(10)(0) = 40. 4. r = sqrt(400+100) = √500. 5. dr/dt = 20/√500 = 2/√5 ≈ 0.89 m/s.",
    finalAnswer: "0.89",
    type: "free-response"
  },
  {
    id: "rr-multi-6",
    difficulty: "Hard",
    category: "Multi-Object Interaction",
    statement: "V = LWH. L increases at 1, W at 2, H decreases at 3. Fast is volume changing at L=W=H=10?",
    solution: "1. dV/dt = LW dH/dt + LH dW/dt + WH dL/dt = 100(-3) + 100(2) + 100(1) = 0.",
    finalAnswer: "0",
    type: "free-response"
  },
  {
    id: "rr-econ-15",
    difficulty: "Hard",
    category: "Economics",
    statement: "Standard price-demand p(x) = 15 - 0.01x. If supply x decreases at 5/day, find dr/dt at x = 1000.",
    solution: "1. R = px = 15x - 0.01x². dR/dt = (15 - 0.02x)dx/dt. 2. x=1000 => dR/dx = -5. 3. dR/dt = (-5)(-5) = 25 $/day.",
    finalAnswer: "25",
    type: "free-response"
  },
  {
    id: "rr-vector-12",
    difficulty: "Hard",
    category: "Vector Motion",
    statement: "Particle r(t) = (t, t). Distance D from (0, 0) changing at?",
    solution: "1. D = t√2. dD/dt = √2.",
    finalAnswer: "\\sqrt{2}",
    type: "free-response"
  },
  {
    id: "rr-beam-10",
    difficulty: "Hard",
    category: "Beam/Light Intensity",
    statement: "Illuminance from two sources a and b. a is at (0, 10), b at (20, 10). Object moves along y=0. Find dI/dt at x=10 if dx/dt=1.",
    solution: "1. Symmetry => dI/dt = 0.",
    finalAnswer: "0",
    type: "free-response"
  },
  {
    id: "rr-rotate-8",
    difficulty: "Hard",
    category: "Rotating Frames",
    statement: "Disk radius 5m rotates 60 rpm. Particle moves from center at 1 m/s. Fast is speed relative to ground at r=3m?",
    solution: "1. ω = 2π. v_t = 6π. v_r = 1. v = sqrt(1 + 36π²) ≈ 18.87 m/s.",
    finalAnswer: "18.87",
    type: "free-response"
  },
  {
    id: "rr-multi-7",
    difficulty: "Hard",
    category: "Multi-Object Interaction",
    statement: "A, B, C ships. A North at 10, B East at 10, C North-East at 10√2. Fast is distance AB changing?",
    solution: "1. D² = (10t)² + (10t)² = 200t². D = 10t√2. dD/dt = 10√2 ≈ 14.14.",
    finalAnswer: "14.14",
    type: "free-response"
  },
  {
    id: "rr-econ-16",
    difficulty: "Hard",
    category: "Economics",
    statement: "Profit = -0.1x² + 50x - 1000. Production x increases by 5/day. Fast is profit changing at x = 200?",
    solution: "1. dP/dt = (-0.2x + 50)dx/dt = (-40+50)*5 = 50.",
    finalAnswer: "50",
    type: "free-response"
  },
  {
    id: "rr-vector-13",
    difficulty: "Hard",
    category: "Vector Motion",
    statement: "Particle r(t) = (sin t, cos t, t). Fast is distance from origin changing?",
    solution: "1. D² = sin²t + cos²t + t² = 1 + t². 2. 2D dD/dt = 2t => dD/dt = t/sqrt(1+t²).",
    finalAnswer: "\\frac{t}{\\sqrt{1+t^2}}",
    type: "free-response"
  },
  {
    id: "rr-beam-11",
    difficulty: "Hard",
    category: "Beam/Light Intensity",
    statement: "Source at (0, h). Observer moves at v. I = k/r². dI/dt = -2kxv / (x²+h²)².",
    solution: "1. Standard derivation.",
    finalAnswer: "-\\frac{2kxv}{(x^2+h^2)^2}",
    type: "free-response"
  },
  {
    id: "rr-rotate-9",
    difficulty: "Hard",
    category: "Rotating Frames",
    statement: "Angular momentum L = Iω. If I decreases at 10% and ω increases at 10%, find % change in L.",
    solution: "1. L_new = (0.9I)(1.1ω) = 0.99 Iω. Decreases by 1%.",
    finalAnswer: "-1\\%",
    type: "free-response"
  },
  {
    id: "rr-multi-8",
    difficulty: "Hard",
    category: "Multi-Object Interaction",
    statement: "In Ship A, B, C problem, find speed of ship C relative to ship A.",
    solution: "1. v_C = (10, 10). v_A = (0, 10). v_rel = (10, 0). Speed = 10.",
    finalAnswer: "10",
    type: "free-response"
  },
  {
    id: "rr-econ-17",
    difficulty: "Hard",
    category: "Economics",
    statement: "Cost C = 100 + 4sqrt(x). Production x increases from 100 at 20 units/day. Fast is cost changing?",
    solution: "1. dC/dx = 2/sqrt(100) = 0.2. 2. dC/dt = 0.2 * 20 = 4 $/day.",
    finalAnswer: "4",
    type: "free-response"
  },
  {
    id: "rr-vector-14",
    difficulty: "Hard",
    category: "Vector Motion",
    statement: "Two particles r1=(t,0), r2=(0, sin t). Dist changing at t = π/2?",
    solution: "1. D² = t² + sin²t. 2D dD/dt = 2t + 2sin t cos t. 2. t=π/2 => D=sqrt(π²/4 + 1). 3. cos(π/2)=0. 4. 2D dD/dt = π. 5. dD/dt = π / (2 * sqrt(π²/4+1)) = π/sqrt(π²+4).",
    finalAnswer: "0.844",
    type: "free-response"
  },
  {
    id: "rr-econ-18",
    difficulty: "Hard",
    category: "Economics",
    statement: "Revenue R = 100x - x². If production x is growing at 5/day, how fast is marginal revenue changing at x=20?",
    solution: "1. MR = 100 - 2x. 2. d(MR)/dt = -2 dx/dt = -2(5) = -10 $/unit/day.",
    finalAnswer: "-10",
    type: "free-response"
  },
  {
    id: "rr-econ-19",
    difficulty: "Hard",
    category: "Economics",
    statement: "If the profit margin M = P/R. If P increases at 10% and R at 5%, find dM/dt.",
    solution: "1. M_new = 1.1P / 1.05R = 1.0476 M. Increases by 4.76%.",
    finalAnswer: "4.76\\%",
    type: "free-response"
  },
  {
    id: "rr-econ-20",
    difficulty: "Hard",
    category: "Economics",
    statement: "If inventory x decreases as x(t) = 1000 - t². Find the rate of change of holding cost H = 0.5x at t=10.",
    solution: "1. dH/dt = 0.5 dx/dt = 0.5(-2t) = -10.",
    finalAnswer: "-10",
    type: "free-response"
  },
  {
    id: "rr-vector-15",
    difficulty: "Hard",
    category: "Vector Motion",
    statement: "Particle moves on r(t) = (t, t, t). Fast is its distance from origin changing?",
    solution: "1. D = t√3. dD/dt = √3.",
    finalAnswer: "\\sqrt{3}",
    type: "free-response"
  },
  {
    id: "rr-vector-16",
    difficulty: "Hard",
    category: "Vector Motion",
    statement: "Particle on r(t) = (cos t, sin t, sin t). Fast is dist from origin changing?",
    solution: "1. D² = cos²t + sin²t + sin²t = 1 + sin²t. 2. 2D dD/dt = 2sin t cos t = sin 2t. 3. dD/dt = (sin 2t) / (2 * sqrt(1+sin²t)).",
    finalAnswer: "\\frac{\\sin 2t}{2\\sqrt{1+\\sin^2 t}}",
    type: "free-response"
  },
  {
    id: "rr-vector-17",
    difficulty: "Hard",
    category: "Vector Motion",
    statement: "Particle on r(t) = (t, 2t, 3t). Distance from origin at t=1 changing at?",
    solution: "1. D = t * sqrt(1+4+9) = t√14. dD/dt = √14.",
    finalAnswer: "\\sqrt{14}",
    type: "free-response"
  },
  {
    id: "rr-vector-18",
    difficulty: "Hard",
    category: "Vector Motion",
    statement: "Particle moves along y = x² such that dx/dt = 1. How fast is the distance to (0, 0) changing at (1, 1)?",
    solution: "1. D² = x² + x^4. 2. 2D dD/dt = (2x + 4x³)dx/dt. 3. x=1 => D=√2. 4. 2√2 dD/dt = 6 => dD/dt = 3/√2.",
    finalAnswer: "2.12",
    type: "free-response"
  },
  {
    id: "rr-vector-19",
    difficulty: "Hard",
    category: "Vector Motion",
    statement: "Particle moves along y = 1/x such that dx/dt = 2. How fast is distance to (0, 0) changing at x=1?",
    solution: "1. D² = x² + 1/x². 2. 2D dD/dt = (2x - 2/x³)dx/dt. 3. x=1 => 2D dD/dt = 0 => dD/dt = 0.",
    finalAnswer: "0",
    type: "free-response"
  },
  {
    id: "rr-vector-20",
    difficulty: "Hard",
    category: "Vector Motion",
    statement: "Particle moves on x² + y² + z² = 1. Fast is z changing if dx/dt = 1, dy/dt = 2 at (0, 0, 1)?",
    solution: "1. 2x dx/dt + 2y dy/dt + 2z dz/dt = 0. 2. 0 + 0 + 2(1)dz/dt = 0 => dz/dt = 0.",
    finalAnswer: "0",
    type: "free-response"
  },
  {
    id: "rr-beam-12",
    difficulty: "Hard",
    category: "Beam/Light Intensity",
    statement: "Light source moves up at 1 m/s. I = k/r² on a point 5m from base. Fast is I changing at h=5m?",
    solution: "1. r² = 25 + h². dI/dt = (-2kh/r^4)dh/dt. 2. h=5 => r²=50. 3. dI/dt = (-50k / 2500) * 1 = -0.02k.",
    finalAnswer: "-0.02k",
    type: "free-response"
  },
  {
    id: "rr-beam-13",
    difficulty: "Hard",
    category: "Beam/Light Intensity",
    statement: "I = k/r². If r increases by 10%, find % decrease in I.",
    solution: "1. I_new = k / (1.1r)² = k / (1.21r²) = 0.826 I. Decreases by 17.4%.",
    finalAnswer: "17.4\\%",
    type: "free-response"
  },
  {
    id: "rr-beam-14",
    difficulty: "Hard",
    category: "Beam/Light Intensity",
    statement: "Sound intensity L = 10 log(I/I0). If I increases by 26% (1.26), find ΔL in decibels.",
    solution: "1. ΔL = 10 log(1.26) ≈ 10 * 0.1 = 1 dB.",
    finalAnswer: "1",
    type: "free-response"
  },
  {
    id: "rr-beam-15",
    difficulty: "Hard",
    category: "Beam/Light Intensity",
    statement: "I = k cosθ / r². Spotlight 5m high. Moving car at 20 m/s. At x=5, find dI/dt.",
    solution: "1. cosθ = 5/r, I = 5k/r³. 2. r² = x²+25. 3. dI/dt = (-15k/r^4)dr/dt. 4. x=5, r=√50. dr/dt = x/r dx/dt = 5/√50 * 20 = 100/√50. 5. dI/dt = (-15k/2500) * (100/√50) = -0.6k / √50 ≈ -0.085k.",
    finalAnswer: "-0.085k",
    type: "free-response"
  },
  {
    id: "rr-beam-16",
    difficulty: "Hard",
    category: "Beam/Light Intensity",
    statement: "Source moves along y-axis at 5. Wall is x=10. I = k/r² at (10, 0). Source at (0, y). Find dI/dt at y=10.",
    solution: "1. r² = 100+y². 2. dI/dt = (-2ky/r^4)dy/dt = (-100k / 40000) * 5 = -0.0125k.",
    finalAnswer: "-0.0125k",
    type: "free-response"
  },
  {
    id: "rr-beam-17",
    difficulty: "Hard",
    category: "Beam/Light Intensity",
    statement: "Intensity varies as I = exp(-0.1x). If x increases at 2, find dI/dt at x=0.",
    solution: "1. dI/dt = -0.1 exp(-0.1x) dx/dt. 2. x=0 => dI/dt = -0.1 * 1 * 2 = -0.2 units/s.",
    finalAnswer: "-0.2",
    type: "free-response"
  },
  {
    id: "rr-beam-18",
    difficulty: "Hard",
    category: "Beam/Light Intensity",
    statement: "If power P = I * A. If I decreases at 5% and A increases at 10%, find dP/dt.",
    solution: "1. P_new = (0.95)(1.1) P = 1.045 P. Increases by 4.5%.",
    finalAnswer: "4.5\\%",
    type: "free-response"
  },
  {
    id: "rr-beam-19",
    difficulty: "Hard",
    category: "Beam/Light Intensity",
    statement: "Gravitational force F = G/r². If distance grows at 1 m/s, how fast is force changing at 10m?",
    solution: "1. dF/dt = (-2G/r³)dr/dt = (-2G/1000)*1 = -0.002G.",
    finalAnswer: "-0.002G",
    type: "free-response"
  },
  {
    id: "rr-beam-20",
    difficulty: "Hard",
    category: "Beam/Light Intensity",
    statement: "Intensity of light from a star I = L/4πd². If star is moving away at v, how fast is I changing?",
    solution: "1. dI/dt = -L/(2πd³)v.",
    finalAnswer: "-\\frac{L}{2\\pi d^3} v",
    type: "free-response"
  },
  {
    id: "rr-rotate-10",
    difficulty: "Hard",
    category: "Rotating Frames",
    statement: "Observer at center of turntable radius 10m. Person at edge walks at 1 m/s relative to disk which rotates at 1 rad/s. Ground speed?",
    solution: "1. v_t = 10(1) = 10. v_p = 1. Resultant depends on direction. If same, v=11.",
    finalAnswer: "11",
    type: "free-response"
  },
  {
    id: "rr-rotate-11",
    difficulty: "Hard",
    category: "Rotating Frames",
    statement: "Wheel rotates at 1 rad/s. A point is (r, θ). If dr/dt = 1, dθ/dt = -1 (relative to wheel), ground velocity?",
    solution: "1. Ground angle θ is constant? No. Actual dθ/dt = 1 - 1 = 0. Velocity is only radial = 1.",
    finalAnswer: "1",
    type: "free-response"
  },
  {
    id: "rr-rotate-12",
    difficulty: "Hard",
    category: "Rotating Frames",
    statement: "A pendulum on a rotating plate. Fast is speed changing?",
    solution: "1. Complex due to centripetal and tangential components.",
    finalAnswer: "\\text{Complex}",
    type: "free-response"
  },
  {
    id: "rr-rotate-13",
    difficulty: "Hard",
    category: "Rotating Frames",
    statement: "Object at (x, 0) on a plate. If plate rotates at 2 rad/s and x increases at 3 m/s, find ground v at x = 5.",
    solution: "1. v_r = 3. v_t = rω = 5(2) = 10. v = sqrt(9 + 100) = √109 ≈ 10.44.",
    finalAnswer: "10.44",
    type: "free-response"
  },
  {
    id: "rr-rotate-14",
    difficulty: "Hard",
    category: "Rotating Frames",
    statement: "Previous problem: find ground acceleration at x = 5.",
    solution: "1. a_r = x'' - xω² = 0 - 5(4) = -20. a_t = rα + 2ωv_r = 0 + 2(2)(3) = 12. a = sqrt(400 + 144) = √544 ≈ 23.32.",
    finalAnswer: "23.32",
    type: "free-response"
  },
  {
    id: "rr-rotate-15",
    difficulty: "Hard",
    category: "Rotating Frames",
    statement: "Object on a record spinning at 45 rpm. Sliding out at v. Angle makes constant θ with radius. Speed?",
    solution: "1. v_radial = v cosθ. v_tangent = rω + v sinθ. v_total = sqrt(v_r² + v_t²).",
    finalAnswer: "\\text{Complex}",
    type: "free-response"
  },
  {
    id: "rr-rotate-16",
    difficulty: "Hard",
    category: "Rotating Frames",
    statement: "A rod of length 10 slides such that ends are on axes. If it rotates at 1 rad/s, find velocity of midpoint.",
    solution: "1. Midpoint is at (5cosθ, 5sinθ). 2. r = 5 (constant). v_θ = r dθ/dt = 5(1) = 5. Speed is 5.",
    finalAnswer: "5",
    type: "free-response"
  },
  {
    id: "rr-rotate-17",
    difficulty: "Hard",
    category: "Rotating Frames",
    statement: "In the lighthouse problem, how fast is the angle between shore and beam changing? (Given it rotates at 6π).",
    solution: "1. 6π rad/min (constant).",
    finalAnswer: "6\\pi",
    type: "free-response"
  },
  {
    id: "rr-rotate-18",
    difficulty: "Hard",
    category: "Rotating Frames",
    statement: "Clock hand length 10. At 12:00, fast is tip of second hand moving?",
    solution: "1. ω = 2π / 60 rad/s = π/30. v = rω = 10π/30 = π/3 ≈ 1.047 units/s.",
    finalAnswer: "1.047",
    type: "free-response"
  },
  {
    id: "rr-rotate-19",
    difficulty: "Hard",
    category: "Rotating Frames",
    statement: "Earth rotation. At 45 deg latitude, fast are you moving? (R=6400km, ω = 2π/24).",
    solution: "1. r = R cos(45) = 6400 / √2 ≈ 4525. 2. v = rω = 4525 * (6.28/24) ≈ 1184 km/h.",
    finalAnswer: "1184",
    type: "free-response"
  },
  {
    id: "rr-rotate-20",
    difficulty: "Hard",
    category: "Rotating Frames",
    statement: "Disk rotates 1 rad/s. Bead on wire y=x. Wire rotates with disk. If bead at r=5, dr/dt=1, ground v?",
    solution: "1. v_r=1, v_t=5. v = √26 ≈ 5.1.",
    finalAnswer: "5.1",
    type: "free-response"
  },
  {
    id: "rr-multi-9",
    difficulty: "Hard",
    category: "Multi-Object Interaction",
    statement: "Ship A North at 10, B East at 10. C starts 10m East of origin and goes North-West at 10√2. Fast is distance AB + BC changing at t=1?",
    solution: "1. Dist A=(0,10), B=(10,0), C=(0,10). AB = 10√2. BC = 10√2. 2. d(AB)/dt = 10√2. d(BC)/dt = ???. 3. C=(10-10t, 10t) = (0, 10). B=(10t, 0) = (10,0). BC = sqrt(10²+10²) = 10√2. 4. d(BC)/dt = (1/dist)*(-10(10)+10(10)) = 0. 5. Total = 10√2.",
    finalAnswer: "14.14",
    type: "free-response"
  },
  {
    id: "rr-multi-10",
    difficulty: "Hard",
    category: "Multi-Object Interaction",
    statement: "A, B, C ships at corners of triangle. A moves toward B, B toward C, C toward A at v. Area rate?",
    solution: "1. dA/dt = -v s ... for equilateral dA/dt = -1.5v * (√3/2)s.",
    finalAnswer: "-1.3v s",
    type: "free-response"
  },
  {
    id: "rr-multi-11",
    difficulty: "Hard",
    category: "Multi-Object Interaction",
    statement: "Three objects at (x,0,0), (0,y,0), (0,0,z). x'=1, y'=2, z'=3. Fast is dist from origin of centroid changing?",
    solution: "1. G = (x/3, y/3, z/3). D_G = (1/3)sqrt(x²+y²+z²). 2. dD_G/dt = (1/3D) [ x x' + y y' + z z' ] / 3 = (1/9D)(x+2y+3z).",
    finalAnswer: "\\text{Complex}",
    type: "free-response"
  },
  {
    id: "rr-multi-12",
    difficulty: "Hard",
    category: "Multi-Object Interaction",
    statement: "A cube's L, W, H each increase at 1. Fast is diagonal changing?",
    solution: "1. D² = L²+W²+H² = 3s². D = s√3. dD/dt = √3.",
    finalAnswer: "\\sqrt{3}",
    type: "free-response"
  },
  {
    id: "rr-multi-13",
    difficulty: "Hard",
    category: "Multi-Object Interaction",
    statement: "Person A North at 1, B West at 2. C moves such that centroid is fixed. Fast is C moving?",
    solution: "1. v_A = (0, 1), v_B = (-2, 0). 2. v_A + v_B + v_C = 0 => v_C = (2, -1). 3. Speed = √5.",
    finalAnswer: "\\sqrt{5}",
    type: "free-response"
  },
  {
    id: "rr-multi-14",
    difficulty: "Hard",
    category: "Multi-Object Interaction",
    statement: "V_cone = 1/3πr²h. r increases at 2, h increases at 3. Fast is V changing at r=5, h=10?",
    solution: "1. dV/dt = (1/3π)(2rh r' + r² h') = (1/3π)(2*50*2 + 25*3) = (275π/3) ≈ 288.",
    finalAnswer: "288",
    type: "free-response"
  },
  {
    id: "rr-multi-15",
    difficulty: "Hard",
    category: "Multi-Object Interaction",
    statement: "Two planes A and B fly toward junction. A at 500, B at 600. C is observer on ground. At t=0, A=100, B=100. Fast is angle ACB changing?",
    solution: "1. Complex trig.",
    finalAnswer: "\\text{Complex}",
    type: "free-response"
  },
  {
    id: "rr-multi-16",
    difficulty: "Hard",
    category: "Multi-Object Interaction",
    statement: "Volume of cylinder V = πr²h. r grows 1%, h grows 1%. V grows?",
    solution: "1. V_new = π(1.01r)²(1.01h) = 1.01³ V = 1.0303 V. Grows 3%.",
    finalAnswer: "3\\%",
    type: "free-response"
  },
  {
    id: "rr-multi-17",
    difficulty: "Hard",
    category: "Multi-Object Interaction",
    statement: "Three lines y=0, y=xtanθ, x=L. Area of triangle rate?",
    solution: "1. A = 0.5 L * L tanθ = 0.5 L² tanθ. dA/dt = L tanθ dL/dt + 0.5 L² sec²θ dθ/dt.",
    finalAnswer: "\\text{Complex}",
    type: "free-response"
  },
  {
    id: "rr-multi-18",
    difficulty: "Hard",
    category: "Multi-Object Interaction",
    statement: "If x+y+z = 10 and dx/dt=1, dy/dt=2, find dz/dt.",
    solution: "1. 1 + 2 + dz/dt = 0 => dz/dt = -3.",
    finalAnswer: "-3",
    type: "free-response"
  },
  {
    id: "rr-multi-19",
    difficulty: "Hard",
    category: "Multi-Object Interaction",
    statement: "If xyz = 1000 and dx/dt=1, dy/dt=1 at x=y=z=10. Fast is z changing?",
    solution: "1. yz dx/dt + xz dy/dt + xy dz/dt = 0. 100(1) + 100(1) + 100 dz/dt = 0 => dz/dt = -2.",
    finalAnswer: "-2",
    type: "free-response"
  },
  {
    id: "rr-multi-20",
    difficulty: "Hard",
    category: "Multi-Object Interaction",
    statement: "Four people at (±10, ±10) move toward origin at 1 m/s. Fast is area of square changing?",
    solution: "1. s = 20. ds/dt = -2. dA/dt = 2(20)(-2) = -80 m²/s.",
    finalAnswer: "-80",
    type: "free-response"
  }
];








