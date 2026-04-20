import fs from 'fs';

const problems: any[] = [];
let idCounter = 10001;

function generate(difficulty: string, statement: string, answer: string) {
  problems.push({
    id: `app-deriv-more-${idCounter++}`,
    topic: 'applications',
    category: 'Related Rates & Optimization',
    difficulty,
    statement,
    answer,
    steps: ['Draw a diagram.', 'Identify known rates and values.', 'Write the relating equation.', 'Differentiate with respect to time.', 'Substitute and solve.']
  });
}

// 01-02 Cylindrical tank
generate('medium', 'Water is flowing into a cylindrical tank of radius 5 meters at a rate of 10 cubic meters per minute. How fast is the water level rising?', '2/\\pi\\text{ m/min}');
generate('medium', 'Water is flowing out of a cylindrical tank of radius 3 ft. If the water level is dropping at a rate of 0.5 ft/min, what is the rate of water flow out of the tank?', '4.5\\pi\\text{ ft}^3/\\text{min}');

// 03 Rectangular trough
generate('medium', 'Water flows into a rectangular trough 10 ft long, 4 ft wide across the top, and 3 ft deep, at a rate of 5 ft³/min. How fast is the water level rising?', '1/8\\text{ ft/min}');

// 04-05 Triangular trough
generate('hard', 'A triangular trough is 10 m long, 3 m across the top, and 3 m deep. If water flows in at 2 m³/min, how fast is the depth increasing when the water is 2 m deep?', '1/10\\text{ m/min}');
generate('hard', 'A triangular trough (vertex down) is 12 ft long, 4 ft across the top, and 4 ft deep. If the water level is rising at 0.5 ft/min when the water is 2 ft deep, find the rate at which water is flowing in.', '12\\text{ ft}^3/\\text{min}');

// 06-07 Ladder
generate('medium', 'A 13-ft ladder is leaning against a wall. If the bottom of the ladder slides away from the wall at 2 ft/sec, how fast is the top of the ladder sliding down when the bottom is 5 ft from the wall?', '-5/6\\text{ ft/sec}');
generate('medium', 'A 20-ft ladder rests against a vertical wall. If the top of the ladder slides down at 3 ft/sec, how fast is the bottom sliding away when it is 16 ft from the wall?', '9/4\\text{ ft/sec}');

// 08-09 Shadow on ground
generate('medium', 'A 6-ft tall person walks away from a 15-ft lamppost at 4 ft/sec. At what rate is the length of their shadow increasing?', '8/3\\text{ ft/sec}');
generate('medium', 'A 5-ft tall person walks toward a 20-ft lamppost at 3 ft/sec. How fast is the tip of their shadow moving?', '4\\text{ ft/sec}');

// 10 boy on bike
generate('medium', 'A boy on a bike rides north at 15 mph. A girl rides east at 20 mph starting from the same point at the same time. At what rate is the distance between them changing after 2 hours?', '25\\text{ mph}');

// 11-12 Two trains east/north
generate('medium', 'Two trains leave a station at the same time. Train A travels north at 60 mph, and Train B travels east at 80 mph. How fast is the distance between them increasing after 3 hours?', '100\\text{ mph}');
generate('hard', 'Train A is traveling north to a station at 40 mph. Train B is traveling east away from the station at 30 mph. When A is 3 miles from the station and B is 4 miles away, what is the rate of change of the distance between them?', '0\\text{ mph}');

// 13-14 Trapezoidal trough
generate('hard', 'A trough is 10 ft long and its ends are isosceles trapezoids with a 2 ft bottom base, 6 ft top base, and a height of 4 ft. If water is poured in at 10 ft³/min, how fast is the water level rising when the water is 2 ft deep?', '1/4\\text{ ft/min}');
generate('very_hard', 'A trapezoidal trough 15 m long has ends with bottom width 1 m, top width 3 m, and height 2 m. At what rate is water flowing in if the depth increases at 0.1 m/min when the depth is 1 m?', '3\\text{ m}^3/\\text{min}');

// 15-16 Shadow eye level
generate('hard', 'A light is horizontally 20 ft away from a wall and at eye level (5 ft high). A 6-ft tall man walks from the light to the wall at 3 ft/sec. How fast is his shadow on the wall shrinking when he is 10 ft from the wall?', '-1.8\\text{ ft/sec}');
generate('hard', 'A light source is 12 m away from a building. A person 2 m tall walks towards the building at 1.5 m/s. How fast is the length of their shadow on the building decreasing when they are 4 m from the building?', '-1.125\\text{ m/sec}'); 

// 17-18 Shadow on building
generate('hard', 'A light is on the ground 40 ft from a building. A 6-ft person walks from the light toward the building at 5 ft/sec. How fast is the shadow on the building decreasing when they are 20 ft from the light?', '-1.5\\text{ ft/sec}');

// 19-21 Parallel roads
generate('hard', 'Two parallel roads are 5 miles apart. Car A travels on one road at 40 mph, Car B travels on the other at 60 mph in the same direction. If A is initially 10 miles ahead of B, how fast is the distance between them changing after 1 hour? (They are directly opposite each other at that time)', '0\\text{ mph}');

// 22-24 offset paths (north/east from different cities)
generate('hard', 'Car A starts 30 miles west of an intersection and goes east at 40 mph. Car B starts 40 miles north of the intersection and goes south at 50 mph. How fast is the distance between them changing after 1 hour? (Car A is at 10 mi East, Car B is at 10 mi South)', '14.14\\text{ mph}');

// 25 Two cars collide at 12:30
generate('hard', 'Car A is traveling north at 50 mph towards an intersection. Car B is traveling west at 40 mph towards the same intersection. If both will reach the intersection at 12:30 PM, how fast is the distance between them changing at 12:00 PM?', '-64.03\\text{ mph}');

// 26-27 Kite
generate('medium', 'A kite is 100 ft above the ground and moving horizontally at 8 ft/sec. How fast is the string being let out when the string is 200 ft long?', '4\\sqrt{3}\\text{ ft/sec}');
generate('medium', 'A boy flies a kite at a height of 50 m. If the kite moves horizontally at 2 m/s away from him, at what rate is the angle of elevation changing when 100 m of string has been let out?', '-1/100\\text{ rad/sec}');

// 28-29 60 degree intersect
generate('very_hard', 'Two straight roads intersect at a 60 degree angle. Car A travels on one road at 30 mph away from the intersection. Car B travels on the other road at 40 mph away from the intersection. How fast is the distance between them increasing after 2 hours?', '60.8\\text{ mph}');

// 30 perpendicular train track
generate('medium', 'Two trains move on perpendicular tracks away from the station at 60 mph and 80 mph. Rate of distance?', '100\\text{ mph}');

// 31-32 Elevated track and car
generate('very_hard', 'A train is on an elevated track 30 ft above the ground, going east at 50 ft/sec. A car is on a ground-level road going north at 40 ft/sec. The track crosses directly over the road. How fast are they separating 2 seconds after they cross?', '61.7\\text{ ft/sec}');

// 33-34 Car east and airplane north
generate('very_hard', 'A car travels east at 60 mph. An airplane flies north at 200 mph at an altitude of 3 miles. At t=0, the plane is directly above the car. How fast is the distance between them changing after 1 hour? (Ignore height ratio for small numbers)', '208.8\\text{ mph}');

// 35-36 3D space shadow
generate('very_hard', 'A street light is on a 20 ft pole. A 5 ft person walks along a path that is 5 ft away from the base of the pole. The person walks at 4 ft/sec. How fast is the tip of the shadow moving?', '16/3\\text{ ft/sec}');

// 37-38 Ship leaving starting point
generate('medium', 'A ship leaves a port and travels south at 15 knots. Another ship leaves 2 hours later and travels east at 20 knots. Rate after 3 hours of second ship?', '23.4\\text{ knots}');

// Surface area sphere
generate('medium', 'The volume of a sphere is increasing at 10\\pi cubic cm/min. How fast is the surface area increasing when the radius is 5 cm?', '4\\pi\\text{ cm}^2/\\text{min}');

// Optimizations
generate('hard', 'A farmer has 2400 ft of fencing and wants to fence off a rectangular field that borders a straight river. Find the dimensions that maximize the area.', '1200 \\times 600\\text{ ft}');
generate('hard', 'An open box is to be made from a 16-inch by 30-inch piece of cardboard by cutting out squares of equal size from the four corners and bending up the sides. What size should the squares be to obtain a box with the largest volume?', '10/3\\text{ inches}');
generate('hard', 'A cylindrical can is to be made to hold 1 liter (1000 cubic cm) of oil. Find the dimensions that will minimize the cost of the metal to manufacture the can.', 'r = \\sqrt[3]{500/\\pi}');
generate('hard', 'Find the area of the largest rectangle that can be inscribed in a semicircle of radius 10.', '100');


const fileContent = `import { ExamProblem } from './examData';

export const generatedMoreApps: ExamProblem[] = ${JSON.stringify(problems, null, 2)};
`;

fs.writeFileSync('src/data/generatedMoreApps.ts', fileContent);
console.log('Generated successfully');
