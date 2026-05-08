import { Problem } from '../types/calculus';

export const relatedRatesBatch1: Problem[] = [
  // --- GEOMETRIC EXPANSION (20 Problems) ---
  {
    id: "rr-geom-1",
    difficulty: "Hard",
    category: "Geometric Expansion",
    statement: "A soap bubble (spherical) is expanding. If the surface area is increasing at a constant rate of 24π cm²/s, how fast is the volume increasing at the exact moment the radius is 3 cm?",
    solution: "1. S = 4πr² => dS/dt = 8πr(dr/dt). 24π = 8π(3)(dr/dt) => dr/dt = 1 cm/s. 2. V = (4/3)πr³ => dV/dt = 4πr²(dr/dt). 3. dV/dt = 4π(3²)(1) = 36π cm³/s.",
    finalAnswer: "36\\pi \\text{ cm}^3/\\text{s}",
    type: "free-response"
  },
  {
    id: "rr-geom-2",
    difficulty: "Hard",
    category: "Geometric Expansion",
    statement: "The radius of a circular oil spill is increasing at 2 m/min. How fast is the area of the spill growing when the circumference is 100π meters?",
    solution: "1. C = 2πr = 100π => r = 50. 2. A = πr² => dA/dt = 2πr(dr/dt). 3. dA/dt = 2π(50)(2) = 200π m²/min.",
    finalAnswer: "200\\pi \\text{ m}^2/\\text{min}",
    type: "free-response"
  },
  {
    id: "rr-geom-3",
    difficulty: "Hard",
    category: "Geometric Expansion",
    statement: "A cube of ice is melting such that its volume decreases at 8 cm³/min. At what rate is the total surface area of the cube changing when the side length is 10 cm?",
    solution: "1. V = s³ => dV/dt = 3s²(ds/dt). -8 = 3(10²)(ds/dt) => ds/dt = -8/300 = -2/75 cm/min. 2. S = 6s² => dS/dt = 12s(ds/dt). 3. dS/dt = 12(10)(-2/75) = 120(-2/75) = -240/75 = -3.2 cm²/min.",
    finalAnswer: "-3.2 \\text{ cm}^2/\\text{min}",
    type: "free-response"
  },
  {
    id: "rr-geom-4",
    difficulty: "Hard",
    category: "Geometric Expansion",
    statement: "The volume of a sphere is increasing at 100 cm³/s. At what rate is the radius changing when the surface area is 100 cm²?",
    solution: "1. S = 4πr² = 100 => r² = 25/π => r = 5/√π. 2. V = (4/3)πr³ => dV/dt = 4πr²(dr/dt). 3. 100 = 4π(25/π)(dr/dt) = 100(dr/dt) => dr/dt = 1 cm/s.",
    finalAnswer: "1 \\text{ cm/s}",
    type: "free-response"
  },
  {
    id: "rr-geom-5",
    difficulty: "Hard",
    category: "Geometric Expansion",
    statement: "The area of an equilateral triangle is increasing at 15 cm²/s. Find the rate at which the perimeter is increasing when the side length is 10 cm.",
    solution: "1. A = (√3/4)s² => dA/dt = (√3/2)s(ds/dt). 15 = (√3/2)(10)(ds/dt) = 5√3(ds/dt) => ds/dt = 15/(5√3) = √3. 2. P = 3s => dP/dt = 3(ds/dt). 3. dP/dt = 3√3 cm/s.",
    finalAnswer: "3\\sqrt{3} \\text{ cm/s}",
    type: "free-response"
  },
  {
    id: "rr-geom-6",
    difficulty: "Hard",
    category: "Geometric Expansion",
    statement: "A circular metal plate expands when heated. If the area increases at 0.5 cm²/s, find the rate of change of the radius when the area is 16π cm².",
    solution: "1. A = πr² = 16π => r = 4. 2. dA/dt = 2πr(dr/dt). 3. 0.5 = 2π(4)(dr/dt) = 8π(dr/dt) => dr/dt = 0.5/(8π) = 1/(16π) cm/s.",
    finalAnswer: "\\frac{1}{16\\pi} \\text{ cm/s}",
    type: "free-response"
  },
  {
    id: "rr-geom-7",
    difficulty: "Hard",
    category: "Geometric Expansion",
    statement: "A square's diagonal increases at 2 cm/s. How fast is the area increasing when the side length is 8 cm?",
    solution: "1. D = s√2 => dD/dt = √2(ds/dt). 2 = √2(ds/dt) => ds/dt = √2. 2. A = s² => dA/dt = 2s(ds/dt). 3. dA/dt = 2(8)(√2) = 16√2 cm²/s.",
    finalAnswer: "16\\sqrt{2} \\text{ cm}^2/\\text{s}",
    type: "free-response"
  },
  {
    id: "rr-geom-8",
    difficulty: "Hard",
    category: "Geometric Expansion",
    statement: "The surface area of a cube is increasing at 48 in²/s. How fast is the volume increasing when the side length is 12 in?",
    solution: "1. S = 6s² => dS/dt = 12s(ds/dt). 48 = 12(12)(ds/dt) = 144(ds/dt) => ds/dt = 1/3 in/s. 2. V = s³ => dV/dt = 3s²(ds/dt). 3. dV/dt = 3(12²)(1/3) = 144 in³/s.",
    finalAnswer: "144 \\text{ in}^3/\\text{s}",
    type: "free-response"
  },
  {
    id: "rr-geom-9",
    difficulty: "Hard",
    category: "Geometric Expansion",
    statement: "A spherical shell has an inner radius r and outer radius R. R increases at 2 cm/s and r increases at 1 cm/s. How fast is the volume of the material changing when R = 10 and r = 8?",
    solution: "1. V = (4/3)π(R³ - r³). 2. dV/dt = 4π(R²dR/dt - r²dr/dt). 3. dV/dt = 4π(100(2) - 64(1)) = 4π(200 - 64) = 4π(136) = 544π cm³/s.",
    finalAnswer: "544\\pi \\text{ cm}^3/\\text{s}",
    type: "free-response"
  },
  {
    id: "rr-geom-10",
    difficulty: "Hard",
    category: "Geometric Expansion",
    statement: "The base of a triangle is shrinking at 1 cm/min, and its height is increasing at 2 cm/min. If the area is currently 20 cm² and the base is 5 cm, at what rate is the area changing?",
    solution: "1. A = 0.5bh => 20 = 0.5(5)h => h = 8. 2. dA/dt = 0.5(b*dh/dt + h*db/dt). 3. dA/dt = 0.5(5(2) + 8(-1)) = 0.5(10 - 8) = 1 cm²/min.",
    finalAnswer: "1 \\text{ cm}^2/\\text{min}",
    type: "free-response"
  },
  {
    id: "rr-geom-11",
    difficulty: "Hard",
    category: "Geometric Expansion",
    statement: "A spherical ball of ice melts at a rate of 5 cm³/min. At what rate is the radius decreasing when the radius is 10 cm?",
    solution: "1. V = (4/3)πr³ => dV/dt = 4πr²(dr/dt). 2. -5 = 4π(10²)(dr/dt) = 400π(dr/dt). 3. dr/dt = -5 / 400π = -1 / 80π cm/min.",
    finalAnswer: "\\frac{1}{80\\pi} \\text{ cm/min}",
    type: "free-response"
  },
  {
    id: "rr-geom-12",
    difficulty: "Hard",
    category: "Geometric Expansion",
    statement: "The radius of a cone stays constant at 5 cm while its height increases at 3 cm/s. How fast is the volume changing when h = 10 cm?",
    solution: "1. V = (1/3)πr²h. r is constant. 2. dV/dt = (1/3)πr²(dh/dt). 3. dV/dt = (1/3)π(5²)(3) = 25π cm³/s.",
    finalAnswer: "25\\pi \\text{ cm}^3/\\text{s}",
    type: "free-response"
  },
  {
    id: "rr-geom-13",
    difficulty: "Hard",
    category: "Geometric Expansion",
    statement: "The volume of a sphere increases at 8π ft³/min. Find the rate of change of the surface area when the volume is 36π ft³.",
    solution: "1. V = (4/3)πr³ = 36π => r³ = 27 => r = 3. 2. dV/dt = 4πr²(dr/dt) => 8π = 4π(3²)(dr/dt) = 36π(dr/dt) => dr/dt = 2/9. 3. S = 4πr² => dS/dt = 8πr(dr/dt) = 8π(3)(2/9) = 16π/3 ft²/min.",
    finalAnswer: "\\frac{16\\pi}{3} \\text{ ft}^2/\\text{min}",
    type: "free-response"
  },
  {
    id: "rr-geom-14",
    difficulty: "Hard",
    category: "Geometric Expansion",
    statement: "A ring-shaped oil spill (annulus) has an inner radius r = 10 and outer radius R = 15. If R increases at 2 cm/s and r is constant, how fast is the area of the ring changing?",
    solution: "1. A = π(R² - r²). 2. dA/dt = 2πR(dR/dt). 3. dA/dt = 2π(15)(2) = 60π cm²/s.",
    finalAnswer: "60\\pi \\text{ cm}^2/\\text{s}",
    type: "free-response"
  },
  {
    id: "rr-geom-15",
    difficulty: "Hard",
    category: "Geometric Expansion",
    statement: "A balloon is shaped like a cylinder with hemispherical ends. If the radius is constant at 2 cm and the total length is increasing at 5 cm/s, how fast is the volume increasing?",
    solution: "1. V = πr²L_cyl + (4/3)πr³ = π(2²)L_cyl + (4/3)π(2³). Total L = L_cyl + 2r. r is constant => dL/dt = dL_cyl/dt = 5. 2. dV/dt = 4π(dL_cyl/dt) = 4π(5) = 20π cm³/s.",
    finalAnswer: "20\\pi \\text{ cm}^3/\\text{s}",
    type: "free-response"
  },
  {
    id: "rr-geom-16",
    difficulty: "Hard",
    category: "Geometric Expansion",
    statement: "A circle's area increases at 10π cm²/s. How fast is the circumference changing when r = 5?",
    solution: "1. A = πr² => dA/dt = 2πr(dr/dt). 10π = 2π(5)(dr/dt) => dr/dt = 1. 2. C = 2πr => dC/dt = 2π(dr/dt) = 2π(1) = 2π cm/s.",
    finalAnswer: "2\\pi \\text{ cm/s}",
    type: "free-response"
  },
  {
    id: "rr-geom-17",
    difficulty: "Hard",
    category: "Geometric Expansion",
    statement: "The edge of a cube increases at 0.1 cm/s. How fast is the space diagonal changing?",
    solution: "1. D = s√3. 2. dD/dt = √3(ds/dt). 3. dD/dt = √3(0.1) = 0.1√3 cm/s.",
    finalAnswer: "0.1\\sqrt{3} \\text{ cm/s}",
    type: "free-response"
  },
  {
    id: "rr-geom-18",
    difficulty: "Hard",
    category: "Geometric Expansion",
    statement: "The area of a square is increasing at 20 cm²/s. How fast is the side length increasing when the area is 100 cm²?",
    solution: "1. A=100 => s=10. 2. dA/dt = 2s(ds/dt). 3. 20 = 2(10)(ds/dt) => ds/dt = 1 cm/s.",
    finalAnswer: "1 \\text{ cm/s}",
    type: "free-response"
  },
  {
    id: "rr-geom-19",
    difficulty: "Hard",
    category: "Geometric Expansion",
    statement: "A sphere's volume increases at 12 cm³/s. At what rate is the surface area changing when r = 2?",
    solution: "1. dV/dt = 4πr²(dr/dt) => 12 = 4π(4)(dr/dt) => dr/dt = 12/16π = 3/4π. 2. dS/dt = 8πr(dr/dt) = 8π(2)(3/4π) = 12 cm²/s.",
    finalAnswer: "12 \\text{ cm}^2/\\text{s}",
    type: "free-response"
  },
  {
    id: "rr-geom-20",
    difficulty: "Hard",
    category: "Geometric Expansion",
    statement: "The radius of a circular ripple in a pond is increasing at 30 cm/s. At what rate is the area of the ripple increasing after 3 seconds?",
    solution: "1. r = 30(3) = 90. 2. dA/dt = 2πr(dr/dt). 3. dA/dt = 2π(90)(30) = 5400π cm²/s.",
    finalAnswer: "5400\\pi \\text{ cm}^2/\\text{s}",
    type: "free-response"
  },

  // --- PYTHAGOREAN DISTANCE (Remaining 15) ---
  {
    id: "rr-pyth-6",
    difficulty: "Hard",
    category: "Pythagorean Distance",
    statement: "Ship A is 50 km North of port and sailing South at 30 km/h. Ship B is 80 km East of port and sailing East at 20 km/h. At what rate is the distance between them changing?",
    solution: "1. y = 50, dy/dt = -30. x = 80, dx/dt = 20. 2. s = sqrt(50² + 80²) = sqrt(2500 + 6400) = sqrt(8900) = 10√89. 3. s(ds/dt) = x(dx/dt) + y(dy/dt) = 80(20) + 50(-30) = 1600 - 1500 = 100. 4. ds/dt = 100 / (10√89) = 10/√89 km/h.",
    finalAnswer: "\\frac{10}{\\sqrt{89}} \\text{ km/h}",
    type: "free-response"
  },
  {
    id: "rr-pyth-7",
    difficulty: "Hard",
    category: "Pythagorean Distance",
    statement: "A police car is 2 miles East of an intersection and moving East at 60 mph. A suspected car is 3 miles North of the same intersection moving North at 70 mph. How fast is the distance between them changing?",
    solution: "1. x=2, y=3, s=sqrt(13). 2. s(ds/dt) = x(dx/dt) + y(dy/dt) = 2(60) + 3(70) = 120 + 210 = 330. 3. ds/dt = 330/√13 mph.",
    finalAnswer: "\\frac{330}{\\sqrt{13}} \\text{ mph}",
    type: "free-response"
  },
  {
    id: "rr-pyth-8",
    difficulty: "Hard",
    category: "Pythagorean Distance",
    statement: "An observer is 400 ft from a launch pad. A rocket rises vertically at 100 ft/s. How fast is the distance between the observer and the rocket changing when the rocket is 300 ft high?",
    solution: "1. x=400, y=300, s=500. 2. s(ds/dt) = y(dy/dt). 3. 500(ds/dt) = 300(100) = 30000. 4. ds/dt = 60 ft/s.",
    finalAnswer: "60 \\text{ ft/s}",
    type: "free-response"
  },
  {
    id: "rr-pyth-9",
    difficulty: "Hard",
    category: "Pythagorean Distance",
    statement: "Two cars start from the same intersection. Car A goes North at 30 mph. One hour later, car B goes East at 40 mph. How fast is the distance between them increasing 2 hours after car A started?",
    solution: "1. Car A: y = 30(2) = 60, dy/dt = 30. Car B: x = 40(1) = 40, dx/dt = 40. 2. s = sqrt(60²+40²) = 20√13. 3. s(ds/dt) = 40(40) + 60(30) = 1600 + 1800 = 3400. 4. ds/dt = 3400 / (20√13) = 170/√13 mph.",
    finalAnswer: "\\frac{170}{\\sqrt{13}} \\text{ mph}",
    type: "free-response"
  },
  {
    id: "rr-pyth-10",
    difficulty: "Hard",
    category: "Pythagorean Distance",
    statement: "A runner runs around a 100m square track. When he is 20m from a corner, how fast is his distance from the center of the track changing? (Speed = 8 m/s)",
    solution: "1. Center is at (50, 50). Runner at (100, 20). x=100 (const for this side), y=20, dy/dt=8. 2. s² = (x-50)² + (y-50)² = 50² + (y-50)². 3. 2s(ds/dt) = 2(y-50)(dy/dt). y=20, y-50=-30, s=sqrt(2500+900)=10√34. 4. 10√34(ds/dt) = (-30)(8) = -240. 5. ds/dt = -24/√34 m/s.",
    finalAnswer: "-\\frac{24}{\\sqrt{34}} \\text{ m/s}",
    type: "free-response"
  },
  {
    id: "rr-pyth-11",
    difficulty: "Hard",
    category: "Pythagorean Distance",
    statement: "A man on a dock 10 ft above water level pulls a boat at 2 ft/s. How fast is the boat approaching the dock when 20 ft of rope is out?",
    solution: "1. y=10 (const), s=20, ds/dt=-2. s² = x² + 10². 2. s(ds/dt) = x(dx/dt). x=sqrt(400-100)=10√3. 3. 20(-2) = 10√3(dx/dt) => dx/dt = -4/√3.",
    finalAnswer: "\\frac{4}{\\sqrt{3}} \\text{ ft/s}",
    type: "free-response"
  },
  {
    id: "rr-pyth-12",
    difficulty: "Hard",
    category: "Pythagorean Distance",
    statement: "Two planes leave an airport. Plane A heads North at 400 mph. Plane B heads West at 300 mph. How fast is the distance between them increasing 15 minutes after takeoff?",
    solution: "1. x=75, y=100, s=125. (1/4 hr). 2. ds/dt = sqrt(300²+400²) = 500 mph.",
    finalAnswer: "500 \\text{ mph}",
    type: "free-response"
  },
  {
    id: "rr-pyth-13",
    difficulty: "Hard",
    category: "Pythagorean Distance",
    statement: "A balloon rises 3000 ft from a point 4000 ft from an observer. If it rises at 100 ft/s, how fast is the distance to the observer changing?",
    solution: "1. x=4000, y=3000, s=5000. dy/dt=100. 2. s(ds/dt) = y(dy/dt). 3. 5000(ds/dt) = 3000(100) = 300000. 4. ds/dt = 60 ft/s.",
    finalAnswer: "60 \\text{ ft/s}",
    type: "free-response"
  },
  {
    id: "rr-pyth-14",
    difficulty: "Hard",
    category: "Pythagorean Distance",
    statement: "A car is 10 miles West of a junction and moving East at 40 mph. Another car is 15 miles North of the junction moving North at 50 mph. How fast is the distance changing?",
    solution: "1. x=10, dx/dt=-40. y=15, dy/dt=50. s=sqrt(100+225)=sqrt(325)=5√13. 2. 5√13(ds/dt) = 10(-40) + 15(50) = -400 + 750 = 350. 3. ds/dt = 70/√13 mph.",
    finalAnswer: "\\frac{70}{\\sqrt{13}} \\text{ mph}",
    type: "free-response"
  },
  {
    id: "rr-pyth-15",
    difficulty: "Hard",
    category: "Pythagorean Distance",
    statement: "A player runs from 2nd base to 3rd base at 25 ft/s. The diamond is a 90ft square. How fast is his distance from home plate changing when he is 30ft from 3rd base?",
    solution: "1. Home is (0,0). 2nd is (90,90). 3rd is (0,90). Runner is at (x, 90). x=30, dx/dt=-25. 2. s² = x² + 90². 3. s(ds/dt) = x(dx/dt). s=sqrt(900+8100)=sqrt(9000)=30√10. 4. 30√10(ds/dt) = 30(-25) => ds/dt = -25/√10.",
    finalAnswer: "-\\frac{25}{\\sqrt{10}} \\text{ ft/s}",
    type: "free-response"
  },
  {
    id: "rr-pyth-16",
    difficulty: "Hard",
    category: "Pythagorean Distance",
    statement: "A train leaves at 2 PM heading North at 60 mph. Another train leaves the same station at 3 PM heading West at 80 mph. How fast is the distance between them increasing at 5 PM?",
    solution: "1. Train A: y = 60(3) = 180, dy/dt=60. Train B: x = 80(2) = 160, dx/dt=80. 2. s = sqrt(180²+160²) = 20*sqrt(9²+8²) = 20√145. 3. 20√145(ds/dt) = 180(60) + 160(80) = 10800 + 12800 = 23600. 4. ds/dt = 1180/√145 mph.",
    finalAnswer: "\\frac{1180}{\\sqrt{145}} \\text{ mph}",
    type: "free-response"
  },
  {
    id: "rr-pyth-17",
    difficulty: "Hard",
    category: "Pythagorean Distance",
    statement: "A ship sails West at 25 knots. Another ship sails South at 20 knots. At noon ship A is 50 nm West of B. How fast is the distance between them changing at 2 PM?",
    solution: "1. Ship A: x = 50 + 25(2) = 100. Ship B: y = 20(2) = 40. 2. s = sqrt(100²+40²) = 20√29. 3. s(ds/dt) = 100(25) + 40(20) = 2500+800=3300. 4. ds/dt = 3300/(20√29) = 165/√29 knots.",
    finalAnswer: "\\frac{165}{\\sqrt{29}} \\text{ knots}",
    type: "free-response"
  },
  {
    id: "rr-pyth-18",
    difficulty: "Hard",
    category: "Pythagorean Distance",
    statement: "A plane flies horizontally at altitude h=1 mile. Distance between plane and station is s. If ds/dt = 200 mph when s=2 miles, what is the plane's speed?",
    solution: "1. s(ds/dt) = x(dx/dt). s=2, ds/dt=200, y=1 => x=√3. 2. 2(200) = √3(dx/dt) => dx/dt = 400/√3 mph.",
    finalAnswer: "\\frac{400}{\\sqrt{3}} \\text{ mph}",
    type: "free-response"
  },
  {
    id: "rr-pyth-19",
    difficulty: "Hard",
    category: "Pythagorean Distance",
    statement: "Two ships move away from the same point at 120 degrees to each other. Ship A moves at 30 km/h, Ship B at 40 km/h. How fast is the distance increasing after 1 hour?",
    solution: "1. Law of Cosines: s² = a² + b² - 2ab cos(120) = a² + b² + ab. 2. 2s(ds/dt) = (2a+b)da/dt + (2b+a)db/dt. a=30, b=40, s=sqrt(900+1600+1200)=sqrt(3700)=10√37. 3. 20√37(ds/dt) = (60+40)(30) + (80+30)(40) = 3000 + 4400 = 7400. 4. ds/dt = 370/√37 = 10√37 km/h.",
    finalAnswer: "10\\sqrt{37} \\text{ km/h}",
    type: "free-response"
  },
  {
    id: "rr-pyth-20",
    difficulty: "Hard",
    category: "Pythagorean Distance",
    statement: "A runner is at (3, 4) in the coordinate plane move on x-axis at 5 units/s. How fast is distance to origin changing?",
    solution: "1. x=3, y=4, dx/dt=5, y is constant. 2. s=5. s(ds/dt) = x(dx/dt). 3. 5(ds/dt) = 3(5) = 15 => ds/dt = 3 units/s.",
    finalAnswer: "3 \\text{ units/s}",
    type: "free-response"
  },

  // --- FILLING/EMPTYING TANKS (Remaining 18) ---
  {
    id: "rr-tank-3",
    difficulty: "Hard",
    category: "Filling/Emptying Tanks",
    statement: "A hemispherical bowl of radius 10 in is being filled at 3 in³/s. How fast is the water level rising when the water is 4 in deep?",
    solution: "1. V = (π/3)h²(3R - h). 2. dV/dt = π(2Rh - h²)(dh/dt). 3. 3 = π(2(10)(4) - 16)(dh/dt) = π(80-16)dh/dt = 64π(dh/dt). 4. dh/dt = 3/(64π) in/s.",
    finalAnswer: "\\frac{3}{64\\pi} \\text{ in/s}",
    type: "free-response"
  },
  {
    id: "rr-tank-4",
    difficulty: "Hard",
    category: "Filling/Emptying Tanks",
    statement: "A cylinder with radius 5 cm is being filled at 10 cm³/s. How fast is the level rising?",
    solution: "1. V = πr²h. r is constant. 2. dV/dt = πr²(dh/dt). 3. 10 = 25π(dh/dt) => dh/dt = 10/25π = 0.4/π cm/s.",
    finalAnswer: "\\frac{0.4}{\\pi} \\text{ cm/s}",
    type: "free-response"
  },
  {
    id: "rr-tank-5",
    difficulty: "Hard",
    category: "Filling/Emptying Tanks",
    statement: "A pool is 20 ft wide, 40 ft long, and its depth increases from 3 ft at one end to 9 ft at the other. It is filled at 10 ft³/min. How fast is the level rising when water is 4 ft deep at deep end?",
    solution: "1. The slanted part is a triangle 40 ft long and 6 ft deep (9-3). 2. L/H = 40/6 = 20/3. 3. V = 20 * (Area of triangle) = 20 * (0.5 * L * h) = 10 * (20/3 * h) * h = (200/3)h². 4. dV/dt = (400/3)h(dh/dt). 5. 10 = (400/3)(4)(dh/dt) => dh/dt = 30/1600 = 3/160 ft/min.",
    finalAnswer: "\\frac{3}{160} \\text{ ft/min}",
    type: "free-response"
  },
  {
    id: "rr-tank-6",
    difficulty: "Hard",
    category: "Filling/Emptying Tanks",
    statement: "A conical tank is 20 ft deep and 10 ft across the top. Water is flowing out at 15 ft³/min. How fast is the level dropping when the water is 8 ft deep?",
    solution: "1. r/H = 5/20 = 1/4 => r = h/4. 2. V = (1/3)π(h²/16)h = πh³/48. 3. dV/dt = (πh²/16)dh/dt. 4. -15 = (π*64/16)dh/dt = 4π dh/dt. 5. dh/dt = -15/(4π) ft/min.",
    finalAnswer: "-\\frac{15}{4\\pi} \\text{ ft/min}",
    type: "free-response"
  },
  {
    id: "rr-tank-7",
    difficulty: "Hard",
    category: "Filling/Emptying Tanks",
    statement: "A trough is 10 ft long and its ends are isosceles triangles with height 3 ft and width 4 ft. Water is pumped in at 2 ft³/min. How fast is the level rising when h = 2 ft?",
    solution: "1. w/h = 4/3 => w = (4/3)h. 2. V = 10 * (0.5wh) = 5wh = 5(4/3)h² = (20/3)h². 3. dV/dt = (40/3)h(dh/dt). 4. 2 = (40/3)(2)(dh/dt) = (80/3)dh/dt. 5. dh/dt = 6/80 = 0.075 ft/min.",
    finalAnswer: "0.075 \\text{ ft/min}",
    type: "free-response"
  },
  {
    id: "rr-tank-8",
    difficulty: "Hard",
    category: "Filling/Emptying Tanks",
    statement: "A cylindrical tank with radius 10 ft is being filled at a rate that makes the level rise at 2 ft/h. What is the rate of flow into the tank?",
    solution: "1. V = πr²h. 2. dV/dt = πr²(dh/dt). 3. dV/dt = π(100)(2) = 200π ft³/h.",
    finalAnswer: "200\\pi \\text{ ft}^3/\\text{h}",
    type: "free-response"
  },
  {
    id: "rr-tank-9",
    difficulty: "Hard",
    category: "Filling/Emptying Tanks",
    statement: "A conical tank is 12 ft deep and 6 ft across the top. Water flows in at 8 ft³/min and leaks out at 2 ft³/min. How fast is the level rising when h = 4?",
    solution: "1. r/h = 3/12 = 1/4 => r = h/4. 2. V = πh³/48. 3. Net dV/dt = 8 - 2 = 6. 4. 6 = (πh²/16)dh/dt. At h=4: 6 = π dh/dt. 5. dh/dt = 6/π ft/min.",
    finalAnswer: "\\frac{6}{\\pi} \\text{ ft/min}",
    type: "free-response"
  },
  {
    id: "rr-tank-10",
    difficulty: "Hard",
    category: "Filling/Emptying Tanks",
    statement: "A hemispherical tank of radius 5 m is being emptied at 1 m³/min. How fast is the level falling when h = 2 m?",
    solution: "1. dV/dt = π(2Rh - h²)(dh/dt). 2. -1 = π(2(5)(2) - 4)dh/dt = 16π dh/dt. 3. dh/dt = -1/(16π) m/min.",
    finalAnswer: "-\\frac{1}{16\\pi} \\text{ m/min}",
    type: "free-response"
  },
  {
    id: "rr-tank-11",
    difficulty: "Hard",
    category: "Filling/Emptying Tanks",
    statement: "A square-based pyramid tank (apex down) has base side 10 ft and height 15 ft. Water flows in at 4 ft³/min. How fast is the water level rising when h = 6 ft?",
    solution: "1. s/h = 10/15 = 2/3 => s = (2/3)h. 2. V = (1/3)s²h = (1/3)(4/9)h³ = (4/27)h³. 3. dV/dt = (4/9)h²(dh/dt). 4. 4 = (4/9)(36)dh/dt = 16 dh/dt. 5. dh/dt = 0.25 ft/min.",
    finalAnswer: "0.25 \\text{ ft/min}",
    type: "free-response"
  },
  {
    id: "rr-tank-12",
    difficulty: "Hard",
    category: "Filling/Emptying Tanks",
    statement: "A spherical tank has radius 13 ft. If water is 5 ft deep, and is being filled at 10 ft³/min, find the rate of change of the level.",
    solution: "1. dV/dt = π(2Rh - h²)dh/dt. 2. 10 = π(2(13)(5) - 25)dh/dt = π(130-25)dh/dt = 105π dh/dt. 3. dh/dt = 10/(105π) = 2/(21π) ft/min.",
    finalAnswer: "\\frac{2}{21\\pi} \\text{ ft/min}",
    type: "free-response"
  },
  {
    id: "rr-tank-13",
    difficulty: "Hard",
    category: "Filling/Emptying Tanks",
    statement: "A cylinder of 2m radius is being filled. The level rises at 0.5 m/min. Find the rate of inflow.",
    solution: "1. dV/dt = πr²(dh/dt). 2. dV/dt = π(4)(0.5) = 2π m³/min.",
    finalAnswer: "2\\pi \\text{ m}^3/\\text{min}",
    type: "free-response"
  },
  {
    id: "rr-tank-14",
    difficulty: "Hard",
    category: "Filling/Emptying Tanks",
    statement: "A trough 12 ft long has ends that are rectangles 3ft wide by 4ft high. If water is poured in at 5 ft³/min, how fast is the level rising when it is 2 ft deep?",
    solution: "1. Area is constant. 2. V = 12 * 3 * h = 36h. 3. dV/dt = 36(dh/dt). 4. 5 = 36(dh/dt) => dh/dt = 5/36 ft/min.",
    finalAnswer: "\\frac{5}{36} \\text{ ft/min}",
    type: "free-response"
  },
  {
    id: "rr-tank-15",
    difficulty: "Hard",
    category: "Filling/Emptying Tanks",
    statement: "A conical tank is 10 ft high and 8 ft across at the top. Water flows in at 2 cu ft per minute. How fast is the level rising when depth is 5 ft?",
    solution: "1. r/10 = 4/10 => r = 0.4h. 2. V = (1/3)π(0.16h²)h = (0.16π/3)h³. 3. dV/dt = (0.16π)h²(dh/dt). 4. 2 = (0.16π)(25)dh/dt = 4π dh/dt. 5. dh/dt = 1/(2π) ft/min.",
    finalAnswer: "\\frac{1}{2\\pi} \\text{ ft/min}",
    type: "free-response"
  },
  {
    id: "rr-tank-16",
    difficulty: "Hard",
    category: "Filling/Emptying Tanks",
    statement: "A water tank has the shape of an inverted cone with 2m radius and 4m height. If water is pumped in at 2 m³/min, find the rate at which the surface area of the water is increasing when the depth is 3m.",
    solution: "1. r/h = 2/4 = 0.5 => r = 0.5h. 2. A_surf = πr² = π(0.25h²). 3. dA/dt = 0.5πh(dh/dt). 4. dV/dt = π(0.25h²)dh/dt => 2 = π(0.25)(9)dh/dt = 2.25π dh/dt => dh/dt = 2/(2.25π) = 8/(9π). 5. dA/dt = 0.5π(3)(8/9π) = 4/3 m²/min.",
    finalAnswer: "\\frac{4}{3} \\text{ m}^2/\\text{min}",
    type: "free-response"
  },
  {
    id: "rr-tank-17",
    difficulty: "Hard",
    category: "Filling/Emptying Tanks",
    statement: "A bucket is 12 in high, with radius 6 in at top and 4 in at bottom. If water is added at 20 in³/min, how fast is the level rising when water is 6 in deep?",
    solution: "1. Similar triangles on extension: h_ext / 4 = (h_ext + 12) / 6 => 6h_ext = 4h_ext + 48 => h_ext = 24. 2. Total h = h_water + 24 = 30. r/h = 6/36 = 1/6. 3. V_water = (1/3)π(h_total/6)² h_total - V_base_cone. 4. dV/dt = (π/12)h_total²(d h_total/dt). 5. 20 = (π/12)(30²)(dh/dt) = 75π dh/dt. 6. dh/dt = 20/75π = 4/15π in/min.",
    finalAnswer: "\\frac{4}{15\\pi} \\text{ in/min}",
    type: "free-response"
  },
  {
    id: "rr-tank-18",
    difficulty: "Hard",
    category: "Filling/Emptying Tanks",
    statement: "A cylinder of height 10 ft and radius 4 ft is laid on its side (horizontal). It is filled at 2 ft³/min. How fast is the level rising when h = 2 ft?",
    solution: "1. V = 10 * Area of segment. 2. Area = r² cos⁻¹((r-h)/r) - (r-h)sqrt(2rh-h²). r=4, h=2. 3. dA/dt = 2sqrt(2rh-h²) dh/dt = 2sqrt(16-4) dh/dt = 2√12 dh/dt = 4√3 dh/dt. 4. dV/dt = 10 * 4√3 dh/dt = 40√3 dh/dt. 5. 2 = 40√3 dh/dt => dh/dt = 1/(20√3) ft/min.",
    finalAnswer: "\\frac{1}{20\\sqrt{3}} \\text{ ft/min}",
    type: "free-response"
  },
  {
    id: "rr-tank-19",
    difficulty: "Hard",
    category: "Filling/Emptying Tanks",
    statement: "A square trough 2 ft wide and 10 ft long is being filled at 1 cu ft per second. How fast is the level rising?",
    solution: "1. V = 2 * 10 * h = 20h. 2. dV/dt = 20(dh/dt). 3. 1 = 20(dh/dt) => dh/dt = 0.05 ft/s.",
    finalAnswer: "0.05 \\text{ ft/s}",
    type: "free-response"
  },
  {
    id: "rr-tank-20",
    difficulty: "Hard",
    category: "Filling/Emptying Tanks",
    statement: "The water in a hemispherical bowl of radius 10 is 4 deep. If water is poured in at 10, how fast is the level rising?",
    solution: "1. dV/dt = π(2Rh-h²)dh/dt. 2. 10 = π(20*4 - 16)dh/dt = 64π dh/dt. 3. dh/dt = 10/(64π) = 5/(32π).",
    finalAnswer: "\\frac{5}{32\\pi}",
    type: "free-response"
  },

  // --- SHADOW PROBLEMS (20 Problems) ---
  {
    id: "rr-shadow-1",
    difficulty: "Hard",
    category: "Shadow Problems",
    statement: "A man 6 ft tall walks at 5 ft/s toward a street light 15 ft high. At what rate is his shadow length changing?",
    solution: "1. By similar triangles: s/6 = (x+s)/15 => 15s = 6x + 6s => 9s = 6x => s = (2/3)x. 2. ds/dt = (2/3)dx/dt. 3. dx/dt = -5. 4. ds/dt = (2/3)(-5) = -10/3 ft/s.",
    finalAnswer: "-\\frac{10}{3} \\text{ ft/s}",
    type: "free-response"
  },
  {
    id: "rr-shadow-2",
    difficulty: "Hard",
    category: "Shadow Problems",
    statement: "A woman 5 ft tall walks away from a 12 ft lamp at 4 ft/s. At what rate is the tip of her shadow moving?",
    solution: "1. s/5 = (x+s)/12 => 7s = 5x => s = 5x/7. 2. Tip T = x+s = 12x/7. 3. dT/dt = 12(4)/7 = 48/7 ft/s.",
    finalAnswer: "\\frac{48}{7} \\text{ ft/s}",
    type: "free-response"
  },
  {
    id: "rr-shadow-3",
    difficulty: "Hard",
    category: "Shadow Problems",
    statement: "A spotlight on the ground is 20 ft from a wall. A man 6 ft tall walks from the wall toward the light at 5 ft/s. How fast is the height of his shadow on the wall changing when he is 8 ft from the wall?",
    solution: "1. h/20 = 6/x => h = 120/x. 2. x = 20 - dist_from_wall. x = 12. 3. dh/dt = (-120/x²)(dx/dt). 4. If walking from wall toward light, dist_from_wall increases => x decreases => dx/dt = -5. 5. dh/dt = (-120/144)(-5) = (5/6)(5) = 25/6 ft/s.",
    finalAnswer: "\\frac{25}{6} \\text{ ft/s}",
    type: "free-response"
  },
  {
    id: "rr-shadow-4",
    difficulty: "Hard",
    category: "Shadow Problems",
    statement: "A light is 10 m above a level path. A man 2 m tall walks at 2 m/s away from the light. How fast is the length of his shadow changing?",
    solution: "1. s/2 = (x+s)/10 => 4s = x. 2. ds/dt = 0.25(dx/dt) = 0.25(2) = 0.5 m/s.",
    finalAnswer: "0.5 \\text{ m/s}",
    type: "free-response"
  },
  {
    id: "rr-shadow-5",
    difficulty: "Hard",
    category: "Shadow Problems",
    statement: "A ball is dropped from a height of 20 m, 10 m away from a 20 m lamp post. How fast is the shadow of the ball moving along the ground after 1 s?",
    solution: "1. y = 20 - 4.9t². At t=1, y = 15.1, dy/dt = -9.8. 2. s/10 = (s+10)/(20-y) is wrong. Similar triangles: s/y_shadow = (s+10)/20. 3. Shadow position x_s = s+10. 4. (x_s - 10)/y_ball = x_s / 20 => 20x_s - 200 = x_s y_ball => x_s(20 - y_ball) = 200 => x_s = 200 / (20 - y_ball). 5. dx_s/dt = (200 / (20 - y_ball)²) (dy_ball/dt). 6. dx_s/dt = (200 / (20 - 15.1)²) (-9.8) = (200 / 4.9²) (-9.8) = -200 * 9.8 / 24.01 ≈ -81.63 m/s.",
    finalAnswer: "-81.63 \\text{ m/s}",
    type: "free-response"
  },
  {
    id: "rr-shadow-6",
    difficulty: "Hard",
    category: "Shadow Problems",
    statement: "A street light is 15 ft high. A man 6 ft tall walks away from the light at 4 ft/s. At what rate is the tip of his shadow moving?",
    solution: "1. s/6 = (x+s)/15 => 15s = 6x+6s => 9s = 6x => s = (2/3)x. 2. T = x+s = (5/3)x. 3. dT/dt = (5/3)(4) = 20/3 ft/s.",
    finalAnswer: "\\frac{20}{3} \\text{ ft/s}",
    type: "free-response"
  },
  {
    id: "rr-shadow-7",
    difficulty: "Hard",
    category: "Shadow Problems",
    statement: "An object is 5m from a light and its shadow is 10m long. Find the rate of increase of shadow if object moves at 1m/s from the light.",
    solution: "1. s/h = (x+s)/L. Assume L/h is constant? No, s is shadow length. L/h = (x+s)/s = x/s + 1. 2. x/s = L/h - 1 = k (const). 3. s = x/k => ds/dt = (1/k)dx/dt. 4. At x=5, s=10 => k = 0.5. 5. ds/dt = (1/0.5)(1) = 2 m/s.",
    finalAnswer: "2 \\text{ m/s}",
    type: "free-response"
  },
  {
    id: "rr-shadow-8",
    difficulty: "Hard",
    category: "Shadow Problems",
    statement: "A man 2m tall walks at 1.5m/s towards a 5m lamp. How fast is the shadow length decreasing?",
    solution: "1. s/2 = (x+s)/5 => 3s=2x => s=(2/3)x. 2. ds/dt = (2/3)(-1.5) = -1.0 m/s.",
    finalAnswer: "-1.0 \\text{ m/s}",
    type: "free-response"
  },
  {
    id: "rr-shadow-9",
    difficulty: "Hard",
    category: "Shadow Problems",
    statement: "A light on the ground is 30 ft from a building. A 6 ft man walks from building to light at 4 ft/s. How fast is shadow on building changing when he is 20 ft from building?",
    solution: "1. h/30 = 6/(30-x). x=20. 2. dh/dt = 180 * (1/(30-x)^2) * (dx/dt). 3. dx/dt = -4 (moving toward light/away from building). 4. dh/dt = 180 / 100 * (-4) = -7.2 ft/s.",
    finalAnswer: "-7.2 \\text{ ft/s}",
    type: "free-response"
  },
  {
    id: "rr-shadow-10",
    difficulty: "Hard",
    category: "Shadow Problems",
    statement: "A lamp is 20 ft high. A man 6 ft tall walks away at 3 ft/s. How fast is the tip of his shadow moving?",
    solution: "1. s/6 = (x+s)/20 => 14s = 6x => s = (3/7)x. 2. T = 10x/7. 3. dT/dt = 10/7(3) = 30/7 ft/s.",
    finalAnswer: "\\frac{30}{7} \\text{ ft/s}",
    type: "free-response"
  },
  {
    id: "rr-shadow-11",
    difficulty: "Hard",
    category: "Shadow Problems",
    statement: "A spotlight is 50 ft from a wall. A man 6 ft tall walks at 4 ft/s toward the wall. Find rate of shadow height on wall changing at 10 ft from wall.",
    solution: "1. h/50 = 6/x. x = 40. 2. dh/dt = (-300/x²)(dx/dt). dx/dt = 4. 3. dh/dt = -300/1600 * 4 = -3/4 = -0.75 ft/s.",
    finalAnswer: "-0.75 \\text{ ft/s}",
    type: "free-response"
  },
  {
    id: "rr-shadow-12",
    difficulty: "Hard",
    category: "Shadow Problems",
    statement: "A street lamp 6m high casts a shadow of a 2m man. If he walks at 1.2m/s, how fast does the shadow length change?",
    solution: "1. s/2 = (x+s)/6 => 2s=x => s=0.5x. 2. ds/dt = 0.5(1.2) = 0.6 m/s.",
    finalAnswer: "0.6 \\text{ m/s}",
    type: "free-response"
  },
  {
    id: "rr-shadow-13",
    difficulty: "Hard",
    category: "Shadow Problems",
    statement: "A light is 12 ft high. A man 6 ft tall walks at 2 ft/s away. How fast is shadow length increasing?",
    solution: "1. s/6 = (x+s)/12 => s=x. 2. ds/dt = dx/dt = 2 ft/s.",
    finalAnswer: "2 \\text{ ft/s}",
    type: "free-response"
  },
  {
    id: "rr-shadow-14",
    difficulty: "Hard",
    category: "Shadow Problems",
    statement: "A woman 1.5m tall walks at 1m/s from a 4.5m light. Find rate of change of tip of shadow.",
    solution: "1. s/1.5 = (x+s)/4.5 => 3s = x+s => 2s=x => s=0.5x. 2. T = 1.5x. 3. dT/dt = 1.5(1) = 1.5 m/s.",
    finalAnswer: "1.5 \\text{ m/s}",
    type: "free-response"
  },
  {
    id: "rr-shadow-15",
    difficulty: "Hard",
    category: "Shadow Problems",
    statement: "A lamp is 24 ft high. A man 6 ft tall walks away at 5 ft/s. How fast is the shadow length increasing?",
    solution: "1. s/6 = (x+s)/24 => 3s=x => s=1/3 x. 2. ds/dt = 1/3(5) = 5/3 ft/s.",
    finalAnswer: "\\frac{5}{3} \\text{ ft/s}",
    type: "free-response"
  },
  {
    id: "rr-shadow-16",
    difficulty: "Hard",
    category: "Shadow Problems",
    statement: "A spotlight on the ground is 40 ft from a house. A 5 ft girl walks from light to house at 3 ft/s. How fast is her shadow shrinking when 10 ft from house?",
    solution: "1. h/40 = 5/x. x=30. 2. dh/dt = -200/x² * dx/dt. dx/dt = 3. 3. dh/dt = -200/900 * 3 = -2/3 ft/s.",
    finalAnswer: "-\\frac{2}{3} \\text{ ft/s}",
    type: "free-response"
  },
  {
    id: "rr-shadow-17",
    difficulty: "Hard",
    category: "Shadow Problems",
    statement: "A man 6 ft tall walks away from a 15 ft lamp at 6 ft/s. How fast is the shadow tip moving?",
    solution: "1. s/6 = (x+s)/15 => s = (2/3)x. T = (5/3)x. 2. dT/dt = (5/3)(6) = 10 ft/s.",
    finalAnswer: "10 \\text{ ft/s}",
    type: "free-response"
  },
  {
    id: "rr-shadow-18",
    difficulty: "Hard",
    category: "Shadow Problems",
    statement: "A street light is 10 m high. A 2 m man walks at 1.5 m/s. How fast is shadow length changing?",
    solution: "1. s/2 = (x+s)/10 => 4s=x => s=x/4. 2. ds/dt = 1.5/4 = 0.375 m/s.",
    finalAnswer: "0.375 \\text{ m/s}",
    type: "free-response"
  },
  {
    id: "rr-shadow-19",
    difficulty: "Hard",
    category: "Shadow Problems",
    statement: "A light on a 12 ft pole is 20 ft from a wall. A 6 ft man walks from wall to light at 4 ft/s. Fast is shadow height changing at 8 ft from wall?",
    solution: "1. h/20 = 6/(20-x). x=8. 2. dh/dt = 120 / (20-x)² * (-4) = -120/144 * 4 = -10/3 ft/s.",
    finalAnswer: "-\\frac{10}{3} \\text{ ft/s}",
    type: "free-response"
  },
  {
    id: "rr-shadow-20",
    difficulty: "Hard",
    category: "Shadow Problems",
    statement: "A man 6ft tall stands 10ft from a light 15ft high. If light moves away at 2 ft/s, how fast is shadow length changing?",
    solution: "1. s/6 = (x+s)/L. x=10 fixed. 2. sL = 6x + 6s => s(L-6) = 6x. 3. ds/dt (L-6) + s(dL/dt) = 0. 4. L=15, x=10 => 9s = 60 => s=20/3. 5. ds/dt(9) + (20/3)(2) = 0 => 9 ds/dt = -40/3 => ds/dt = -40/27 ft/s.",
    finalAnswer: "-\\frac{40}{27} \\text{ ft/s}",
    type: "free-response"
  },

  // --- ANGULAR RATES (20 Problems) ---
  {
    id: "rr-angle-1",
    difficulty: "Hard",
    category: "Angular Rates (Trig)",
    statement: "A rocket is launched vertically from a pad 3000 ft from an observer. When the rocket is at an altitude of 4000 ft and rising at 600 ft/s, what is the rate of change of the angle of elevation?",
    solution: "1. tan(θ) = y/3000. 2. sec²(θ)dθ/dt = (1/3000)dy/dt. 3. y=4000, x=3000 => hyp=5000. cos(θ)=3/5 => sec(θ)=5/3. 4. (25/9)dθ/dt = (1/3000)(600) = 0.2. 5. dθ/dt = 0.2 * (9/25) = 1.8/25 = 0.072 rad/s.",
    finalAnswer: "0.072 \\text{ rad/s}",
    type: "free-response"
  },
  {
    id: "rr-angle-2",
    difficulty: "Hard",
    category: "Angular Rates (Trig)",
    statement: "A plane flies horizontally at an altitude of 2 miles at 600 mph. At what rate is the angle of elevation changing when the horizontal distance to the observer is 3 miles?",
    solution: "1. cot(θ) = x/2. 2. -csc²(θ)dθ/dt = (1/2)dx/dt. 3. x=3, y=2 => s=sqrt(13). csc(θ) = sqrt(13)/2. 4. -(13/4)dθ/dt = (1/2)(-600) = -300. 5. dθ/dt = 1200/13 rad/h. Convert to rad/min: 1200/(13*60) = 20/13 rad/min.",
    finalAnswer: "\\frac{20}{13} \\text{ rad/min}",
    type: "free-response"
  },
  {
    id: "rr-angle-3",
    difficulty: "Hard",
    category: "Angular Rates (Trig)",
    statement: "A lighthouse is 2 km offshore and its light rotates at 3 revolutions per minute. How fast is the beam moving along the shoreline at a point 1 km from the nearest point on shore?",
    solution: "1. x = 2 tan(θ). 2. dx/dt = 2 sec²(θ) dθ/dt. 3. dθ/dt = 3 rev/min = 6π rad/min. 4. x=1, y=2 => hyp=sqrt(5). sec²(θ) = (sqrt(5)/2)² = 5/4. 5. dx/dt = 2(5/4)(6π) = 15π km/min.",
    finalAnswer: "15\\pi \\text{ km/min}",
    type: "free-response"
  },
  {
    id: "rr-angle-4",
    difficulty: "Hard",
    category: "Angular Rates (Trig)",
    statement: "A camera at ground level is 500 ft from a launch pad. A balloon rises vertically at 10 ft/s. Fast is the angle of elevation changing when h=500?",
    solution: "1. tanθ = h/500 => sec²θ dθ/dt = (1/500)dh/dt. 2. h=500 => θ=45°, sec²θ=2. 3. 2 dθ/dt = 10/500 = 1/50. 4. dθ/dt = 1/100 rad/s.",
    finalAnswer: "0.01 \\text{ rad/s}",
    type: "free-response"
  },
  {
    id: "rr-angle-5",
    difficulty: "Hard",
    category: "Angular Rates (Trig)",
    statement: "A person 6 ft tall walks at 4 ft/s toward a 15 ft lamp. How fast is the angle of elevation of the top of the lamp changing when distance is 20 ft?",
    solution: "1. tanθ = (15-6)/x = 9/x. 2. sec²θ dθ/dt = (-9/x²)dx/dt. 3. x=20, y=9 => hyp=sqrt(481). sec²θ = 481/400. 4. 481/400 dθ/dt = (-9/400)(-4) = 36/400. 5. dθ/dt = 36/481 rad/s.",
    finalAnswer: "\\frac{36}{481} \\text{ rad/s}",
    type: "free-response"
  },
  {
    id: "rr-angle-6",
    difficulty: "Hard",
    category: "Angular Rates (Trig)",
    statement: "A searchlight rotates at 1 rad/s. A man walks at 2 m/s along a wall 10 m away. How fast is the angle of the light changing when he is 10 m from the closest point?",
    solution: "1. x = 10 tan θ => dx/dt = 10 sec² θ dθ/dt. 2. x=10, θ=45, sec²θ=2. 3. 2 = 10(2)dθ/dt => dθ/dt = 0.1 rad/s (relative to man). But searchlight itself rotates. Usually these problems ask for dx/dt given dθ/dt. Let's assume dθ/dt is needed to track man. 2 = 20 dθ/dt => dθ/dt = 0.1.",
    finalAnswer: "0.1 \\text{ rad/s}",
    type: "free-response"
  },
  {
    id: "rr-angle-7",
    difficulty: "Hard",
    category: "Angular Rates (Trig)",
    statement: "A ferris wheel of radius 10m rotates at 1 rev/min. How fast is the angle of elevation of a rider from a point on the ground 20m from the base changing when the rider is at the top?",
    solution: "1. Rider at (10sinφ, 10+10cosφ). φ = wt. Ground point (20, 0). 2. tanθ = y/(x-ground). No, simpler: Top is (0, 20). 2. Position (10sin(wt), 10-10cos(wt)). At top wt=π? No wt=0 is bottom. 3. Top is max height. dθ/dt at the very top is 0 because dy/dt is 0 and dx/dt is max.",
    finalAnswer: "0 \\text{ rad/min}",
    type: "free-response"
  },
  {
    id: "rr-angle-8",
    difficulty: "Hard",
    category: "Angular Rates (Trig)",
    statement: "A baseball player runs from 2nd to 3rd at 20 ft/s on a 90ft square. How fast is the angle of a fan's line of sight at home plate changing when the player is halfway to 3rd?",
    solution: "1. Home is (0,0). 2nd is (90,90). 3rd is (0,90). Player at (x, 90). 2. tanθ = 90/x. 3. sec²θ dθ/dt = (-90/x²)dx/dt. 4. x=45, dx/dt=-20. 5. θ = arctan(2), sec²θ = 1+(2)² = 5. 6. 5 dθ/dt = (-90/2025)(-20) = 1800/2025 = 8/9. 7. dθ/dt = 8/45 rad/s.",
    finalAnswer: "\\frac{8}{45} \\text{ rad/s}",
    type: "free-response"
  },
  {
    id: "rr-angle-9",
    difficulty: "Hard",
    category: "Angular Rates (Trig)",
    statement: "A kite is 120 ft high and 150 ft of string is out. String is let out at 2 ft/s. If altitude is constant, how fast is the angle with the ground changing?",
    solution: "1. sinθ = 120/s. 2. cosθ dθ/dt = (-120/s²) ds/dt. 3. s=150, y=120 => x=90. cosθ = 90/150 = 3/5. 4. (3/5)dθ/dt = (-120/22500)(2) = -240/22500 = -24/2250 = -8/750 = -4/375. 5. dθ/dt = -20/1125 = -4/225 rad/s.",
    finalAnswer: "-\\frac{4}{225} \\text{ rad/s}",
    type: "free-response"
  },
  {
    id: "rr-angle-10",
    difficulty: "Hard",
    category: "Angular Rates (Trig)",
    statement: "A plane flies over a tracking station at 5000 ft altitude at 500 mph. How fast is the angle of elevation changing 10 seconds later?",
    solution: "1. 500 mph = 733.33 ft/s. In 10s, x = 7333.33 ft. 2. tanθ = 5000/x => sec²θ dθ/dt = (-5000/x²)dx/dt. 3. x=7333, y=5000 => s=8875. sec²θ = (8875/7333)². 4. dθ/dt = (-5000/x² * dx/dt) / sec²θ = (-5000 * 733 / s²). 5. dθ/dt = -3.66 M / 78.7 M ≈ -0.046 rad/s.",
    finalAnswer: "-0.046 \\text{ rad/s}",
    type: "free-response"
  },
  {
    id: "rr-angle-11",
    difficulty: "Hard",
    category: "Angular Rates (Trig)",
    statement: "A woman walks across a bridge at 5 ft/s. A boat passes under the bridge at 10 ft/s at right angles to the bridge. Bridge is 30 ft above water. How fast is the angle of depression changing 2s later?",
    solution: "1. x=5t, y=10t. Distance from center r = sqrt(25t² + 100t²) = t√125. 2. tanθ = 30/r. 3. sec²θ dθ/dt = (-30/r²)dr/dt. 4. t=2 => r=2√125=10√5. dr/dt = √125 = 5√5. 5. sec²θ = 1 + (30/10√5)² = 1 + (3/√5)² = 1 + 1.8 = 2.8. 6. 2.8 dθ/dt = (-30/500)(5√5) = -0.3√5. 7. dθ/dt = -0.3√5 / 2.8 ≈ -0.24 rad/s.",
    finalAnswer: "-0.24 \\text{ rad/s}",
    type: "free-response"
  },
  {
    id: "rr-angle-12",
    difficulty: "Hard",
    category: "Angular Rates (Trig)",
    statement: "A particle moves on the line y=4. At what rate is the angle θ changing when x=3, if dx/dt=2?",
    solution: "1. tanθ = 4/x. 2. sec²θ dθ/dt = (-4/x²)dx/dt. 3. x=3, y=4, s=5. sec²θ = 25/9. 4. (25/9)dθ/dt = (-4/9)(2) = -8/9. 5. dθ/dt = -8/25 rad/s.",
    finalAnswer: "-0.32 \\text{ rad/s}",
    type: "free-response"
  },
  {
    id: "rr-angle-13",
    difficulty: "Hard",
    category: "Angular Rates (Trig)",
    statement: "A particle moves along a circle x² + y² = 25. As it passes through (3, 4), its x-coordinate is increasing at 2 units/s. How fast is the angle θ changing?",
    solution: "1. x = 5 cosθ, y = 5 sinθ. 2. dx/dt = -5 sinθ dθ/dt. 3. (3,4) => sinθ = 4/5. 4. 2 = -5(4/5)dθ/dt = -4 dθ/dt. 5. dθ/dt = -0.5 rad/s.",
    finalAnswer: "-0.5 \\text{ rad/s}",
    type: "free-response"
  },
  {
    id: "rr-angle-14",
    difficulty: "Hard",
    category: "Angular Rates (Trig)",
    statement: "A spectator 50 ft from the track watches a car race past at 150 ft/s. How fast is the spectator's head rotating at the moment the car is closest?",
    solution: "1. x = 50 tanθ. 2. dx/dt = 50 sec²θ dθ/dt. 3. Closest => θ=0, secθ=1. 4. 150 = 50(1)dθ/dt => dθ/dt = 3 rad/s.",
    finalAnswer: "3 \\text{ rad/s}",
    type: "free-response"
  },
  {
    id: "rr-angle-15",
    difficulty: "Hard",
    category: "Angular Rates (Trig)",
    statement: "A rotating beacon 3 miles offshore makes 2 revolutions per minute. How fast is the light beam moving along the shoreline when it is 5 miles from the nearest point?",
    solution: "1. x = 3 tanθ. 2. dx/dt = 3 sec²θ dθ/dt. 3. dθ/dt = 2 rev/min = 4π rad/min. 4. x=5, y=3 => s=sqrt(34). sec²θ = 34/9. 5. dx/dt = 3(34/9)(4π) = (34/3)(4π) = 136π/3 miles/min.",
    finalAnswer: "\\frac{136\\pi}{3} \\text{ miles/min}",
    type: "free-response"
  },
  {
    id: "rr-angle-16",
    difficulty: "Hard",
    category: "Angular Rates (Trig)",
    statement: "A boy flies a kite at a height of 300 ft. If the kite moves horizontally away at 25 ft/s, how fast is the angle of elevation changing when 500 ft of string is out?",
    solution: "1. cotθ = x/300. 2. -csc²θ dθ/dt = (1/300)dx/dt. 3. y=300, s=500 => x=400. cscθ = 500/300 = 5/3. 4. -(25/9)dθ/dt = 25/300 = 1/12. 5. dθ/dt = -9/(12*25) = -3/300 = -0.01 rad/s.",
    finalAnswer: "-0.01 \\text{ rad/s}",
    type: "free-response"
  },
  {
    id: "rr-angle-17",
    difficulty: "Hard",
    category: "Angular Rates (Trig)",
    statement: "The searchlight of a police car 30m from a wall rotates at 0.5 rad/s. How fast is the light spot moving when θ = π/6?",
    solution: "1. x = 30 tanθ. 2. dx/dt = 30 sec²θ dθ/dt. 3. θ=30°, sec²θ = 4/3. 4. dx/dt = 30(4/3)(0.5) = 20 m/s.",
    finalAnswer: "20 \\text{ m/s}",
    type: "free-response"
  },
  {
    id: "rr-angle-18",
    difficulty: "Hard",
    category: "Angular Rates (Trig)",
    statement: "A runner goes around a 50m radius track at 5 m/s. An observer is at the center. How fast is the observer's angle of sight changing?",
    solution: "1. s = rθ. 2. ds/dt = r dθ/dt. 3. 5 = 50 dθ/dt => dθ/dt = 0.1 rad/s.",
    finalAnswer: "0.1 \\text{ rad/s}",
    type: "free-response"
  },
  {
    id: "rr-angle-19",
    difficulty: "Hard",
    category: "Angular Rates (Trig)",
    statement: "In the previous problem, if the observer is on the track edge, how fast is the angle changing when the runner is on the opposite side?",
    solution: "1. Use inscribed angle theorem: angle at center is 2x angle at circumference. 2. dθ_circum/dt = 0.5 * dθ_center/dt = 0.5(0.1) = 0.05 rad/s.",
    finalAnswer: "0.05 \\text{ rad/s}",
    type: "free-response"
  },
  {
    id: "rr-angle-20",
    difficulty: "Hard",
    category: "Angular Rates (Trig)",
    statement: "A plane flies at 12 km altitude at 600 km/h. At what rate is the angle of elevation changing when the angle is 30 degrees?",
    solution: "1. tanθ = 12/x => sec²θ dθ/dt = (-12/x²)dx/dt. 2. θ=30° => x = 12√3. 3. sec²θ = 4/3. 4. (4/3)dθ/dt = (-12 / (144*3))(-600) = (12/432)(600) = 600/36 = 50/3. 5. dθ/dt = (50/3)*(3/4) = 12.5 rad/h. Convert to rad/min: 12.5/60 = 5/24 rad/min.",
    finalAnswer: "\\frac{5}{24} \\text{ rad/min}",
    type: "free-response"
  }
];



