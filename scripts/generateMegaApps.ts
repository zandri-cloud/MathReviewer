import fs from 'fs';

const problems: any[] = [];
let idCounter = 50000;

function gen(category: string, difficulty: string, statement: string, answer: string, steps: string[]) {
  problems.push({
    id: `mega-app-var-${idCounter++}`,
    topic: 'applications',
    category,
    difficulty,
    statement,
    answer,
    steps
  });
}

const stepsBase = ['Read the problem and identify the given variables and rates.', 'Draw a diagram of the specific snapshot.', 'Write the geometric/physical equation relating the variables.', 'Differentiate implicitly with respect to time.', 'Substitute the snapshot values and solve for the target variable.'];
const optSteps = ['Identify given and target quantities. Draw diagram.', 'Write primary equation to optimize.', 'Use constraints to rewrite in one variable.', 'Differentiate and set to 0 to find critical points.', 'Verify max/min and solve.'];

// 1. LADDER VARIATIONS (length L, base x, height y)
for(let L of [10, 13, 15, 20, 25]) {
  for (let x of [3, 4, 5, 6, 8, 12]) {
    if (x >= L) continue;
    let y = Math.sqrt(L*L - x*x);
    let dxdt = 2; // sliding away
    let dydt = (-x/y)*dxdt;
    // Var 1: find dy/dt
    gen('Related Rates', 'medium', `A ${L}-ft ladder is leaning against a wall. The bottom slides away at ${dxdt} ft/s. How fast is the top sliding down when the bottom is ${x} ft from the wall?`, `${Math.abs(dydt).toFixed(3)} ft/s`, stepsBase);
    // Var 2: find dx/dt
    gen('Related Rates', 'medium', `A ${L}-ft ladder is leaning against a wall. The top slides down at ${Math.abs(dydt).toFixed(2)} ft/s. How fast is the bottom sliding away when it is ${x} ft from the wall?`, `${dxdt.toFixed(3)} ft/s`, stepsBase);
    // Var 3: find x
    gen('Related Rates', 'hard', `A ${L}-ft ladder leans against a wall. The bottom slides away at ${dxdt} ft/s and the top slides down at ${Math.abs(dydt).toFixed(2)} ft/s. How far is the bottom from the wall at this moment?`, `${x.toFixed(2)} ft`, stepsBase);
    // Var 4: find length L
    gen('Related Rates', 'very_hard', `A ladder leans against a wall. At a certain instant, the bottom is ${x} ft from the wall sliding away at ${dxdt} ft/s. The top is sliding down at ${Math.abs(dydt).toFixed(2)} ft/s. What is the length of the ladder?`, `${L.toFixed(2)} ft`, stepsBase);
  }
}

// 2. VEHICLE VARIATIONS
const speeds1 = [30, 40, 50, 60];
const speeds2 = [40, 50, 60, 70];
const times = [1, 2, 3];
speeds1.forEach(v1 => {
  speeds2.forEach(v2 => {
    times.forEach(t => {
      let D = Math.sqrt((v1*t)**2 + (v2*t)**2);
      let dDdt = Math.sqrt(v1*v1 + v2*v2);
      // Var 1: find dD/dt
      gen('Related Rates', 'medium', `Car A travels West at ${v1} mph. Car B travels North at ${v2} mph. Both leave an intersection at the same time. What is the rate of change of the distance between them after ${t} hours?`, `${dDdt.toFixed(2)} mph`, stepsBase);
      // Var 2: find v1
      gen('Related Rates', 'hard', `Car A travels West. Car B travels North at ${v2} mph. Both leave the intersection simultaneously. After ${t} hours, the distance between them is increasing at ${dDdt.toFixed(2)} mph. How fast is Car A traveling?`, `${v1} mph`, stepsBase);
      // Var 3: missing time
      gen('Related Rates', 'hard', `Car A travels West at ${v1} mph. Car B travels North at ${v2} mph. They leave the intersection at the same time. At what time will the distance between them be ${D.toFixed(2)} miles?`, `${t} hours`, stepsBase);
    });
  });
});

// 3. CYLINDER VARIATIONS (V = pi r^2 h)
for (let r of [3, 5, 8, 10]) {
  for (let dhdt of [0.5, 1, 1.5, 2]) {
    let dVdt = Math.PI * r * r * dhdt;
    // Var 1: find dh/dt
    gen('Related Rates', 'medium', `Water flows into a cylindrical tank of radius ${r} meters at a rate of ${dVdt.toFixed(2)} cubic meters per minute. How fast is the water level rising?`, `${dhdt.toFixed(3)} m/min`, stepsBase);
    // Var 2: find dV/dt
    gen('Related Rates', 'medium', `The water level in a cylindrical tank of radius ${r} meters is rising at ${dhdt.toFixed(2)} m/min. At what rate is water flowing into the tank?`, `${dVdt.toFixed(3)} m^3/min`, stepsBase);
    // Var 3: find r
    gen('Related Rates', 'hard', `Water flows into a cylindrical tank at ${dVdt.toFixed(2)} m^3/min. The water level rises at ${dhdt.toFixed(2)} m/min. What is the radius of the tank?`, `${r.toFixed(2)} meters`, stepsBase);
  }
}

// 4. SPHERE VARIATIONS (V = 4/3 pi r^3, SA = 4 pi r^2)
for (let r of [2, 4, 5, 8, 10]) {
  for (let drdt of [0.1, 0.2, 0.5, 1]) {
    let dVdt = 4 * Math.PI * r * r * drdt;
    let dSAdt = 8 * Math.PI * r * drdt;
    gen('Related Rates', 'medium', `A spherical balloon is inflated so its radius increases at ${drdt} cm/s. How fast is the volume increasing when the radius is ${r} cm?`, `${dVdt.toFixed(2)} cm^3/s`, stepsBase);
    gen('Related Rates', 'hard', `A spherical balloon is inflated at ${dVdt.toFixed(2)} cm^3/s. How fast is the radius increasing when the radius is ${r} cm?`, `${drdt.toFixed(3)} cm/s`, stepsBase);
    gen('Related Rates', 'very_hard', `A spherical balloon is inflated at ${dVdt.toFixed(2)} cm^3/s, and its radius is increasing at ${drdt} cm/s. What is the radius at this instant?`, `${r.toFixed(2)} cm`, stepsBase);
    // Surface Area Variations
    gen('Related Rates', 'hard', `A spherical balloon's radius increases at ${drdt} cm/s. How fast is its surface area increasing when the radius is ${r} cm?`, `${dSAdt.toFixed(2)} cm^2/s`, stepsBase);
    gen('Related Rates', 'very_hard', `A spherical balloon's volume increases at ${dVdt.toFixed(2)} cm^3/s. What is the rate of change of the surface area when the radius is ${r} cm?`, `${dSAdt.toFixed(2)} cm^2/s`, stepsBase);
  }
}

// 5. FALLING POINT-TO-OBSERVER VARIATIONS 
for(let h of [100, 200, 400]) {
   for(let observerX of [20, 50, 100]) {
       for(let t of [1, 2]) {
           let y = h - 16*t*t;
           if(y <= 0) continue;
           let dydt = -32*t;
           let D = Math.sqrt(observerX*observerX + y*y);
           let dDdt = (y/D)*dydt;
           gen('Related Rates', 'hard', `An object is dropped from a height of ${h} ft. An observer is ${observerX} ft horizontally from the drop point. How fast is the separation distance changing after ${t} second(s)?`, `${dDdt.toFixed(2)} ft/s`, stepsBase);
           gen('Related Rates', 'very_hard', `An object dropped from ${h} ft is falling. After ${t} seconds, the distance from an observer on the ground directly horizontal to the drop point is changing at ${dDdt.toFixed(2)} ft/s. How far is the observer from the drop point horizontally?`, `${observerX.toFixed(2)} ft`, stepsBase);
           gen('Related Rates', 'very_hard', `An observer stands ${observerX} ft from the drop point of an object. The object is falling at ${Math.abs(dydt)} ft/s when its distance from the observer is ${D.toFixed(2)} ft. At what rate is the distance between the observer and the object changing?`, `${dDdt.toFixed(2)} ft/s`, stepsBase);
       }
   }
}

// 6. SHADOW LENGTH & TIP VARIATIONS
for (let H of [15, 20, 25]) { // Lamppost height
  for (let h of [5, 6]) { // Person height
    if (H <= h) continue;
    for (let dx of [3, 4, 5]) { // Walking speed
      // shadow length y: y/h = (x+y)/H => y(H-h) = x h => y = x*(h/(H-h))
      let dydt = dx * (h / (H - h));
      // shadow tip tracking z = x + y
      let dzdt = dx * (H / (H - h));
      gen('Related Rates', 'medium', `A ${h}-ft tall person walks away from a ${H}-ft lamppost at ${dx} ft/s. How fast is the length of their shadow increasing?`, `${dydt.toFixed(3)} ft/s`, stepsBase);
      gen('Related Rates', 'hard', `A ${h}-ft person's shadow is lengthening at ${dydt.toFixed(3)} ft/s as they walk away from a ${H}-ft lamppost. How fast are they walking?`, `${dx.toFixed(3)} ft/s`, stepsBase);
      gen('Related Rates', 'hard', `A ${h}-ft tall person walks from a ${H}-ft lamppost at ${dx} ft/s. How fast is the tip of their shadow moving along the ground?`, `${dzdt.toFixed(3)} ft/s`, stepsBase);
      gen('Related Rates', 'very_hard', `A person walks away from a lamppost at ${dx} ft/s. The tip of their shadow moves at ${dzdt.toFixed(3)} ft/s. If the lamppost is ${H} ft tall, how tall is the person?`, `${h.toFixed(2)} ft`, stepsBase);
    }
  }
}

// 7. INSCRIBED OPTIMIZATION VARIATIONS (Rectangles in Circles, Ellipses, Parabolas)
for (let R of [4, 5, 8, 10, 12]) {
  gen('Optimization shortcuts', 'medium', `Find the dimensions of the rectangle of maximum area that can be inscribed in a circle of radius ${R}.`, `Square of side ${(R * Math.SQRT2).toFixed(2)}`, optSteps);
  gen('Optimization shortcuts', 'hard', `What is the maximum area of a rectangle inscribed in a circle of radius ${R}?`, `${2 * R * R}`, optSteps);
  gen('Optimization shortcuts', 'highest', `Find the perimeter of the largest rectangle that can be inscribed in a circle of radius ${R}.`, `${(4 * R * Math.SQRT2).toFixed(2)}`, optSteps);
}
for (let x_int of [2, 3, 4, 5]) {
  let parabola = `${x_int*x_int} - x^2`;
  let maxX = x_int / Math.sqrt(3);
  let maxArea = 2 * maxX * (x_int*x_int - maxX*maxX);
  gen('Optimization', 'hard', `Find the dimensions of the rectangle of maximum area inscribed under the parabola y = ${parabola} and above the x-axis.`, `Width = ${(2*maxX).toFixed(2)}, Height = ${(x_int*x_int - maxX*maxX).toFixed(2)}`, optSteps);
  gen('Optimization', 'very_hard', `What is the maximum area of a rectangle inscribed under y = ${parabola}?`, `${maxArea.toFixed(3)}`, optSteps);
}

// 8. FENCING / PERIMETER VARIATIONS
for (let P of [100, 240, 500, 800, 1000]) {
  // Free rectangle max area: P/4 x P/4
  gen('Optimization', 'medium', `What is the maximum area of a rectangle with a fixed perimeter of ${P}?`, `${(P/4)* (P/4)}`, optSteps);
  gen('Optimization', 'hard', `A rectangle has fixed perimeter ${P}. What is the length of its diagonal when the area is maximized?`, `${((P/4)*Math.SQRT2).toFixed(3)}`, optSteps);
  // Bordering river (1 side free) P = 2w + L => Max area when L = P/2, w = P/4
  gen('Optimization', 'medium', `A farmer has ${P} ft of fencing to enclose a rectangular field bordering a strict river (no fence needed along river). Find the dimensions that maximize area.`, `${P/2} by ${P/4}`, optSteps);
  gen('Optimization', 'hard', `A rectangular pen borders a wall and requires ${P} ft of fencing for the remaining 3 sides. What is the maximum possible area?`, `${(P/2)*(P/4)} sq ft`, optSteps);
}

const fileContent = `import { ExamProblem } from './examData';

export const generatedMegaApps: ExamProblem[] = ${JSON.stringify(problems, null, 2)};
`;
fs.writeFileSync('src/data/generatedMegaApps.ts', fileContent);
console.log('Successfully generated ' + problems.length + ' structured variations.');
