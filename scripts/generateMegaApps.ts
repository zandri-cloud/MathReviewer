import fs from "fs";

const problems: any[] = [];
let idCounter = 50000;

function gen(
  category: string,
  difficulty: string,
  statement: string,
  answer: string,
  steps: string[],
) {
  problems.push({
    id: `mega-app-var-${idCounter++}`,
    topic: "applications",
    category,
    difficulty,
    statement,
    answer,
    steps,
  });
}

const stepsBase = [
  "Read the problem and identify the given variables and rates.",
  "Draw a diagram of the specific snapshot.",
  "Write the geometric/physical equation relating the variables.",
  "Differentiate implicitly with respect to time.",
  "Substitute the snapshot values and solve for the target variable.",
];
const optSteps = [
  "Identify given and target quantities. Draw diagram.",
  "Write primary equation to optimize.",
  "Use constraints to rewrite in one variable.",
  "Differentiate and set to 0 to find critical points.",
  "Verify max/min and solve.",
];

// 1. LADDER VARIATIONS (length L, base x, height y)
for (let L of [10, 13, 15, 20, 25]) {
  for (let x of [3, 4, 5, 6, 8, 12]) {
    if (x >= L) continue;
    let y = Math.sqrt(L * L - x * x);
    let dxdt = 2; // sliding away
    let dydt = (-x / y) * dxdt;

    // Var 1: find dy/dt
    gen(
      "Related Rates",
      "medium",
      `A ${L}-ft ladder is leaning against a wall. The bottom slides away at ${dxdt} ft/s. How fast is the top sliding down when the bottom is ${x} ft from the wall?`,
      `${Math.abs(dydt).toFixed(3)} ft/s`,
      [
        "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
        `From the Pythagorean theorem: $x^2 + y^2 = ${L}^2$.`,
        `Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0$.`,
        "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
        `Given $x = ${x}$, $L = ${L}$, we find $y = \\sqrt{${L}^2 - ${x}^2} = ${y.toFixed(3)}$.`,
        `Substitute the known values: $(${x})(${dxdt}) + (${y.toFixed(3)}) \\frac{dy}{dt} = 0$.`,
        `Solve for $\\frac{dy}{dt}$: $\\frac{dy}{dt} = -\\frac{${x * dxdt}}{${y.toFixed(3)}} = ${dydt.toFixed(4)}$.`,
        `The top is sliding down at a rate of $${Math.abs(dydt).toFixed(3)}$ ft/s.`,
      ],
    );
    // Var 2: find dx/dt
    gen(
      "Related Rates",
      "medium",
      `A ${L}-ft ladder is leaning against a wall. The top slides down at ${Math.abs(dydt).toFixed(2)} ft/s. How fast is the bottom sliding away when it is ${x} ft from the wall?`,
      `${dxdt.toFixed(3)} ft/s`,
      [
        "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
        `From the Pythagorean theorem: $x^2 + y^2 = ${L}^2$.`,
        `Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0 \\implies x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.`,
        `Given $x = ${x}$, $L = ${L}$, we find $y = \\sqrt{${L}^2 - ${x}^2} = ${y.toFixed(3)}$.`,
        `We know $\\frac{dy}{dt} = -${Math.abs(dydt).toFixed(2)}$.`,
        `Substitute the known values: $(${x})\\frac{dx}{dt} + (${y.toFixed(3)})(-${Math.abs(dydt).toFixed(2)}) = 0$.`,
        `Solve for $\\frac{dx}{dt}$: $\\frac{dx}{dt} = \\frac{${(y * Math.abs(dydt)).toFixed(3)}}{${x}} \\approx ${dxdt.toFixed(3)}$.`,
        `The bottom is sliding away at a rate of $${dxdt.toFixed(3)}$ ft/s.`,
      ],
    );
    // Var 3: find x
    gen(
      "Related Rates",
      "hard",
      `A ${L}-ft ladder leans against a wall. The bottom slides away at ${dxdt} ft/s and the top slides down at ${Math.abs(dydt).toFixed(2)} ft/s. How far is the bottom from the wall at this moment?`,
      `${x.toFixed(2)} ft`,
      [
        "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
        `We are given $\\frac{dx}{dt} = ${dxdt}$ and $\\frac{dy}{dt} = -${Math.abs(dydt).toFixed(2)}$. We want to find $x$.`,
        `From $x^2 + y^2 = ${L}^2$, we know $y = \\sqrt{${L}^2 - x^2}$.`,
        `Differentiating yields $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.`,
        `Substitute: $x(${dxdt}) + y(-${Math.abs(dydt).toFixed(2)}) = 0$.`,
        `Therefore, $y = \\frac{${dxdt}}{${Math.abs(dydt).toFixed(2)}} x$.`,
        `Substitute $y$ back into $x^2 + y^2 = ${L}^2$: $x^2 + (\\frac{${dxdt}}{${Math.abs(dydt).toFixed(2)}}x)^2 = ${L}^2$.`,
        `Solving for $x$, we find $x = ${x.toFixed(2)}$ ft.`,
      ],
    );
    // Var 4: find length L
    gen(
      "Related Rates",
      "very_hard",
      `A ladder leans against a wall. At a certain instant, the bottom is ${x} ft from the wall sliding away at ${dxdt} ft/s. The top is sliding down at ${Math.abs(dydt).toFixed(2)} ft/s. What is the length of the ladder?`,
      `${L.toFixed(2)} ft`,
      [
        "Let $x$ be the distance from the wall, $y$ be the height, and $L$ be the constant length of the ladder.",
        `We are given $x = ${x}$, $\\frac{dx}{dt} = ${dxdt}$, and $\\frac{dy}{dt} = -${Math.abs(dydt).toFixed(2)}$.`,
        `Since $x^2 + y^2 = L^2$, we differentiate to get $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.`,
        `Substitute known values: $(${x})(${dxdt}) + y(-${Math.abs(dydt).toFixed(2)}) = 0$.`,
        `Solve for $y$: $y = \\frac{${x * dxdt}}{${Math.abs(dydt).toFixed(2)}} \\approx ${y.toFixed(3)}$ ft.`,
        `Now use the Pythagorean theorem: $L^2 = x^2 + y^2 = (${x})^2 + (${y.toFixed(3)})^2$.`,
        `$L^2 \\approx ${x * x} + ${(y * y).toFixed(3)} = ${(L * L).toFixed(2)}$.`,
        `Thus, $L = \\sqrt{${(L * L).toFixed(2)}} = ${L.toFixed(2)}$ ft.`,
      ],
    );
  }
}

// 2. VEHICLE VARIATIONS
const speeds1 = [30, 40, 50, 60];
const speeds2 = [40, 50, 60, 70];
const times = [1, 2, 3];
speeds1.forEach((v1) => {
  speeds2.forEach((v2) => {
    times.forEach((t) => {
      let D = Math.sqrt((v1 * t) ** 2 + (v2 * t) ** 2);
      let dDdt = Math.sqrt(v1 * v1 + v2 * v2);
      let stepsA = [
        "Let $x$ be Car A's position, $y$ be Car B's position, and $D$ be the distance between them.",
        `Since their paths are perpendicular, $x^2 + y^2 = D^2$.`,
        `Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 2D \\frac{dD}{dt}$.`,
        "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = D \\frac{dD}{dt}$.",
        `At $t=${t}$ hours, we have $x = ${v1}(${t}) = ${v1 * t}$ and $y = ${v2}(${t}) = ${v2 * t}$.`,
        `The distance $D$ is $\\sqrt{(${v1 * t})^2 + (${v2 * t})^2} = ${D.toFixed(3)}$.`,
        `Substitute: $(${v1 * t})(${v1}) + (${v2 * t})(${v2}) = (${D.toFixed(3)}) \\frac{dD}{dt}$.`,
        `$\\frac{dD}{dt} = \\frac{${v1 * t * v1 + v2 * t * v2}}{${D.toFixed(3)}} = ${dDdt.toFixed(2)}$ mph.`,
      ];
      let stepsB = [
        "Let $x$ be Car A's displacement and $y$ be Car B's displacement. Let $D$ be the distance.",
        `We know $\\frac{dy}{dt} = ${v2}$, $\\frac{dD}{dt} = ${dDdt.toFixed(2)}$, $t = ${t}$.`,
        `$y = ${v2} \\times ${t} = ${v2 * t}$. Let $v_A$ be $\\frac{dx}{dt}$, then $x = v_A (${t})$.`,
        `Since $x^2 + y^2 = D^2$, taking derivative gives $t(v_A)(v_A) + (${v2 * t})(${v2}) = D(${dDdt.toFixed(2)})$.`,
        `Using $D = \\sqrt{(v_A \\cdot ${t})^2 + (${v2 * t})^2}$, solve for $v_A$.`,
        `Squaring the distance rates leads to the relation $\\sqrt{v_A^2 + ${v2}^2} = ${dDdt.toFixed(2)}$.`,
        `Thus $v_A^2 + ${v2 * v2} = ${(dDdt * dDdt).toFixed(2)}$.`,
        `$v_A = \\sqrt{${(dDdt * dDdt).toFixed(2)} - ${v2 * v2}} = ${v1}$ mph.`,
      ];
      let stepsC = [
        "Let distances be $x = ${v1}t$ and $y = ${v2}t$.",
        `The distance squared is $D^2 = x^2 + y^2 = (${v1}t)^2 + (${v2}t)^2 = ${v1 * v1 + v2 * v2}t^2$.`,
        `Given $D = ${D.toFixed(2)}$, we have $D^2 = ${(D * D).toFixed(2)}$.`,
        `$${v1 * v1 + v2 * v2}t^2 = ${(D * D).toFixed(2)}$.`,
        `$t^2 = \\frac{${(D * D).toFixed(2)}}{${v1 * v1 + v2 * v2}} = 1$.`,
        `Solving for positive time gives $t = \\sqrt{1} = ${t}$ hours.`,
      ];
      // Var 1: find dD/dt
      gen(
        "Related Rates",
        "medium",
        `Car A travels West at ${v1} mph. Car B travels North at ${v2} mph. Both leave an intersection at the same time. What is the rate of change of the distance between them after ${t} hours?`,
        `${dDdt.toFixed(2)} mph`,
        stepsA,
      );
      // Var 2: find v1
      gen(
        "Related Rates",
        "hard",
        `Car A travels West. Car B travels North at ${v2} mph. Both leave the intersection simultaneously. After ${t} hours, the distance between them is increasing at ${dDdt.toFixed(2)} mph. How fast is Car A traveling?`,
        `${v1} mph`,
        stepsB,
      );
      // Var 3: missing time
      gen(
        "Related Rates",
        "hard",
        `Car A travels West at ${v1} mph. Car B travels North at ${v2} mph. They leave the intersection at the same time. At what time will the distance between them be ${D.toFixed(2)} miles?`,
        `${t} hours`,
        stepsC,
      );
    });
  });
});

// 3. CYLINDER VARIATIONS (V = pi r^2 h)
for (let r of [3, 5, 8, 10]) {
  for (let dhdt of [0.5, 1, 1.5, 2]) {
    let dVdt = Math.PI * r * r * dhdt;
    // Var 1: find dh/dt
    gen(
      "Related Rates",
      "medium",
      `Water flows into a cylindrical tank of radius ${r} meters at a rate of ${dVdt.toFixed(2)} cubic meters per minute. How fast is the water level rising?`,
      `${dhdt.toFixed(3)} m/min`,
      [
        `The volume of a cylinder is $V = \\pi r^2 h$.`,
        `The radius is constant at $r = ${r}$, so $V = \\pi (${r})^2 h = ${r * r}\\pi h$.`,
        `Differentiate with respect to $t$: $\\frac{dV}{dt} = ${r * r}\\pi \\frac{dh}{dt}$.`,
        `Substitute $\\frac{dV}{dt} = ${dVdt.toFixed(2)}$: $${dVdt.toFixed(2)} = ${r * r}\\pi \\frac{dh}{dt}$.`,
        `Solve for $\\frac{dh}{dt}$: $\\frac{dh}{dt} = \\frac{${dVdt.toFixed(2)}}{${r * r}\\pi} = ${dhdt.toFixed(3)}$ m/min.`,
      ],
    );
    // Var 2: find dV/dt
    gen(
      "Related Rates",
      "medium",
      `The water level in a cylindrical tank of radius ${r} meters is rising at ${dhdt.toFixed(2)} m/min. At what rate is water flowing into the tank?`,
      `${dVdt.toFixed(3)} m^3/min`,
      [
        `Volume formula is $V = \\pi r^2 h$. With $r=${r}$, $V = ${r * r}\\pi h$.`,
        `Taking derivative: $\\frac{dV}{dt} = ${r * r}\\pi \\frac{dh}{dt}$.`,
        `Given $\\frac{dh}{dt} = ${dhdt.toFixed(2)}$.`,
        `Calculate: $\\frac{dV}{dt} = ${r * r}\\pi (${dhdt.toFixed(2)}) = ${dVdt.toFixed(3)}$ m³/min.`,
      ],
    );
    // Var 3: find r
    gen(
      "Related Rates",
      "hard",
      `Water flows into a cylindrical tank at ${dVdt.toFixed(2)} m^3/min. The water level rises at ${dhdt.toFixed(2)} m/min. What is the radius of the tank?`,
      `${r.toFixed(2)} meters`,
      [
        "Let $V = \\pi r^2 h$. Since $r$ is constant, $\\frac{dV}{dt} = \\pi r^2 \\frac{dh}{dt}$.",
        `Given $\\frac{dV}{dt} = ${dVdt.toFixed(2)}$ and $\\frac{dh}{dt} = ${dhdt.toFixed(2)}$.`,
        `Substitute: $${dVdt.toFixed(2)} = \\pi r^2 (${dhdt.toFixed(2)})$.`,
        `Solve for $r^2$: $r^2 = \\frac{${dVdt.toFixed(2)}}{\\pi \\times ${dhdt.toFixed(2)}} = ${r * r}$.`,
        `Therefore, $r = \\sqrt{${r * r}} = ${r.toFixed(2)}$ meters.`,
      ],
    );
  }
}

// 4. SPHERE VARIATIONS (V = 4/3 pi r^3, SA = 4 pi r^2)
for (let r of [2, 4, 5, 8, 10]) {
  for (let drdt of [0.1, 0.2, 0.5, 1]) {
    let dVdt = 4 * Math.PI * r * r * drdt;
    let dSAdt = 8 * Math.PI * r * drdt;
    gen(
      "Related Rates",
      "medium",
      `A spherical balloon is inflated so its radius increases at ${drdt} cm/s. How fast is the volume increasing when the radius is ${r} cm?`,
      `${dVdt.toFixed(2)} cm^3/s`,
      [
        `The volume of a sphere is $V = \\frac{4}{3}\\pi r^3$.`,
        `Differentiate with respect to $t$: $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.`,
        `Substitute $r = ${r}$ and $\\frac{dr}{dt} = ${drdt}$:`,
        `$\\frac{dV}{dt} = 4\\pi (${r})^2 (${drdt}) = ${dVdt.toFixed(2)}$ cm³/s.`,
      ],
    );
    gen(
      "Related Rates",
      "hard",
      `A spherical balloon is inflated at ${dVdt.toFixed(2)} cm^3/s. How fast is the radius increasing when the radius is ${r} cm?`,
      `${drdt.toFixed(3)} cm/s`,
      [
        `The volume relation is $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.`,
        `Given $\\frac{dV}{dt} = ${dVdt.toFixed(2)}$ and $r = ${r}$.`,
        `$${dVdt.toFixed(2)} = 4\\pi (${r}^2) \\frac{dr}{dt} = ${4 * r * r}\\pi \\frac{dr}{dt}$.`,
        `$\\frac{dr}{dt} = \\frac{${dVdt.toFixed(2)}}{${4 * r * r}\\pi} = ${drdt.toFixed(3)}$ cm/s.`,
      ],
    );
    gen(
      "Related Rates",
      "very_hard",
      `A spherical balloon is inflated at ${dVdt.toFixed(2)} cm^3/s, and its radius is increasing at ${drdt} cm/s. What is the radius at this instant?`,
      `${r.toFixed(2)} cm`,
      [
        `Using $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.`,
        `$${dVdt.toFixed(2)} = 4\\pi r^2 (${drdt})$.`,
        `$r^2 = \\frac{${dVdt.toFixed(2)}}{4\\pi \\times ${drdt}} = ${r * r}$.`,
        `$r = \\sqrt{${r * r}} = ${r.toFixed(2)}$ cm.`,
      ],
    );
    // Surface Area Variations
    gen(
      "Related Rates",
      "hard",
      `A spherical balloon's radius increases at ${drdt} cm/s. How fast is its surface area increasing when the radius is ${r} cm?`,
      `${dSAdt.toFixed(2)} cm^2/s`,
      [
        `Surface area of a sphere is $S = 4\\pi r^2$.`,
        `Differentiate: $\\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt}$.`,
        `Substitute $r = ${r}, \\frac{dr}{dt} = ${drdt}$:`,
        `$\\frac{dS}{dt} = 8\\pi (${r})(${drdt}) = ${dSAdt.toFixed(2)}$ cm²/s.`,
      ],
    );
    gen(
      "Related Rates",
      "very_hard",
      `A spherical balloon's volume increases at ${dVdt.toFixed(2)} cm^3/s. What is the rate of change of the surface area when the radius is ${r} cm?`,
      `${dSAdt.toFixed(2)} cm^2/s`,
      [
        `First, find $\\frac{dr}{dt}$ using $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.`,
        `$${dVdt.toFixed(2)} = 4\\pi (${r})^2 \\frac{dr}{dt} \\implies \\frac{dr}{dt} = ${drdt}$.`,
        `Now use surface area $\\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt}$.`,
        `$\\frac{dS}{dt} = 8\\pi (${r})(${drdt}) = ${dSAdt.toFixed(2)}$ cm²/s.`,
      ],
    );
  }
}

// 5. FALLING POINT-TO-OBSERVER VARIATIONS
for (let h of [100, 200, 400]) {
  for (let observerX of [20, 50, 100]) {
    for (let t of [1, 2]) {
      let y = h - 16 * t * t;
      if (y <= 0) continue;
      let dydt = -32 * t;
      let D = Math.sqrt(observerX * observerX + y * y);
      let dDdt = (y / D) * dydt;
      gen(
        "Related Rates",
        "hard",
        `An object is dropped from a height of ${h} ft. An observer is ${observerX} ft horizontally from the drop point. How fast is the separation distance changing after ${t} second(s)?`,
        `${dDdt.toFixed(2)} ft/s`,
        [
          `Let $y$ be the vertical height of the object and $x = ${observerX}$ be the horizontal distance.`,
          `Height is $y = ${h} - 16t^2 = ${h} - 16(${t})^2 = ${y}$ ft at $t = ${t}$.`,
          `The rate of fall is $\\frac{dy}{dt} = -32t = -32(${t}) = ${dydt}$ ft/s.`,
          `The distance from the observer is $D^2 = x^2 + y^2 = ${observerX}^2 + y^2$.`,
          `Differentiating: $2D \\frac{dD}{dt} = 2x \\frac{dx}{dt} + 2y \\frac{dy}{dt}$. As $x$ is constant, $\\frac{dx}{dt} = 0$.`,
          `So, $D \\frac{dD}{dt} = y \\frac{dy}{dt}$. At $t=${t}$, $D = \\sqrt{${observerX}^2 + ${y}^2} = ${D.toFixed(3)}$.`,
          `Substitute: $(${D.toFixed(3)}) \\frac{dD}{dt} = (${y})(${dydt})$.`,
          `$\\frac{dD}{dt} = \\frac{${y * dydt}}{${D.toFixed(3)}} = ${dDdt.toFixed(2)}$ ft/s.`,
        ],
      );
      gen(
        "Related Rates",
        "very_hard",
        `An object dropped from ${h} ft is falling. After ${t} seconds, the distance from an observer on the ground directly horizontal to the drop point is changing at ${dDdt.toFixed(2)} ft/s. How far is the observer from the drop point horizontally?`,
        `${observerX.toFixed(2)} ft`,
        [
          `Height is $y = ${h} - 16t^2 = ${h} - 16(${t})^2 = ${y}$ ft.`,
          `Vertical speed is $\\frac{dy}{dt} = -32(${t}) = ${dydt}$ ft/s.`,
          `Let horizontal distance be $x$. Here $D \\frac{dD}{dt} = y \\frac{dy}{dt}$ since $x$ is constant.`,
          `We know $\\frac{dD}{dt} = ${dDdt.toFixed(2)}$, so $D(${dDdt.toFixed(2)}) = (${y})(${dydt}) = ${y * dydt}$.`,
          `Then $D = \\frac{${y * dydt}}{${dDdt.toFixed(2)}} = ${D.toFixed(3)}$.`,
          `Since $D^2 = x^2 + y^2$, we have $x^2 = D^2 - y^2 = (${D.toFixed(3)})^2 - (${y})^2 = ${(D * D - y * y).toFixed(2)}$.`,
          `$x = \\sqrt{${(D * D - y * y).toFixed(2)}} = ${observerX}$ ft.`,
        ],
      );
      gen(
        "Related Rates",
        "very_hard",
        `An observer stands ${observerX} ft from the drop point of an object. The object is falling at ${Math.abs(dydt)} ft/s when its distance from the observer is ${D.toFixed(2)} ft. At what rate is the distance between the observer and the object changing?`,
        `${dDdt.toFixed(2)} ft/s`,
        [
          `We have $x = ${observerX}$, $D = ${D.toFixed(2)}$, and $\\frac{dy}{dt} = -${Math.abs(dydt)}$.`,
          `Since $D^2 = x^2 + y^2$, we find $y = \\sqrt{D^2 - x^2} = \\sqrt{${D.toFixed(2)}^2 - ${observerX}^2} = ${y.toFixed(2)}$ ft.`,
          `Using $D \\frac{dD}{dt} = y \\frac{dy}{dt}$ (from differentiating $D^2 = x^2 + y^2$ with $x$ constant):`,
          `$(${D.toFixed(2)}) \\frac{dD}{dt} = (${y.toFixed(2)})(-${Math.abs(dydt)})$.`,
          `$\\frac{dD}{dt} = \\frac{${(y * -Math.abs(dydt)).toFixed(3)}}{${D.toFixed(2)}} = ${dDdt.toFixed(2)}$ ft/s.`,
        ],
      );
    }
  }
}

// 6. SHADOW LENGTH & TIP VARIATIONS
for (let H of [15, 20, 25]) {
  // Lamppost height
  for (let h of [5, 6]) {
    // Person height
    if (H <= h) continue;
    for (let dx of [3, 4, 5]) {
      // Walking speed
      // shadow length y: y/h = (x+y)/H => y(H-h) = x h => y = x*(h/(H-h))
      let dydt = dx * (h / (H - h));
      // shadow tip tracking z = x + y
      let dzdt = dx * (H / (H - h));
      gen(
        "Related Rates",
        "medium",
        `A ${h}-ft tall person walks away from a ${H}-ft lamppost at ${dx} ft/s. How fast is the length of their shadow increasing?`,
        `${dydt.toFixed(3)} ft/s`,
        [
          "Let $x$ be the person's distance from the lamppost, and $y$ be the length of the shadow.",
          `By similar triangles, $\\frac{y}{${h}} = \\frac{x+y}{${H}}$.`,
          `Cross-multiplying gives ${H}y = ${h}(x+y) \\implies ${H - h}y = ${h}x$.`,
          `Differentiate with respect to $t$: ${H - h}\\frac{dy}{dt} = ${h}\\frac{dx}{dt}$.`,
          `Substitute $\\frac{dx}{dt} = ${dx}$ to get ${H - h}\\frac{dy}{dt} = ${h}(${dx}) = ${h * dx}$.`,
          `$\\frac{dy}{dt} = \\frac{${h * dx}}{${H - h}} = ${dydt.toFixed(3)}$ ft/s.`,
        ],
      );
      gen(
        "Related Rates",
        "hard",
        `A ${h}-ft person's shadow is lengthening at ${dydt.toFixed(3)} ft/s as they walk away from a ${H}-ft lamppost. How fast are they walking?`,
        `${dx.toFixed(3)} ft/s`,
        [
          "Let $x$ be distance from lamppost, $y$ be shadow length.",
          `Using similar triangles: ${H}y = ${h}(x+y) \\implies ${H - h}y = ${h}x$.`,
          `Differentiate: ${H - h}\\frac{dy}{dt} = ${h}\\frac{dx}{dt}$.`,
          `Given $\\frac{dy}{dt} = ${dydt.toFixed(3)}$, substitute: ${H - h}(${dydt.toFixed(3)}) = ${h}\\frac{dx}{dt}$.`,
          `$\\frac{dx}{dt} = \\frac{${(H - h) * dydt}}{${h}} = ${dx}$ ft/s.`,
        ],
      );
      gen(
        "Related Rates",
        "hard",
        `A ${h}-ft tall person walks from a ${H}-ft lamppost at ${dx} ft/s. How fast is the tip of their shadow moving along the ground?`,
        `${dzdt.toFixed(3)} ft/s`,
        [
          "Let $x$ be the person's distance from the lamppost, and $z = x+y$ be the distance from lamppost base to shadow tip.",
          `Similar triangles yield $\\frac{y}{${h}} = \\frac{z}{${H}}$. Since $y = z - x$, we have $\\frac{z-x}{${h}} = \\frac{z}{${H}}$.`,
          `Cross-multiplying: ${H}(z-x) = ${h}z \\implies ${H - h}z = ${H}x$.`,
          `Differentiate: ${H - h}\\frac{dz}{dt} = ${H}\\frac{dx}{dt}$.`,
          `Given $\\frac{dx}{dt} = ${dx}$, we get ${H - h}\\frac{dz}{dt} = ${H}(${dx}) = ${H * dx}$.`,
          `$\\frac{dz}{dt} = \\frac{${H * dx}}{${H - h}} = ${dzdt.toFixed(3)}$ ft/s.`,
        ],
      );
      gen(
        "Related Rates",
        "very_hard",
        `A person walks away from a lamppost at ${dx} ft/s. The tip of their shadow moves at ${dzdt.toFixed(3)} ft/s. If the lamppost is ${H} ft tall, how tall is the person?`,
        `${h.toFixed(2)} ft`,
        [
          "Let $h$ be the person's height, $x$ be distance from lamppost, $z$ be the tip's distance.",
          `Similar triangles imply $\\frac{z-x}{h} = \\frac{z}{${H}} \\implies ${H}(z-x) = hz \\implies (${H}-h)z = ${H}x$.`,
          `Differentiating gives $(${H}-h)\\frac{dz}{dt} = ${H}\\frac{dx}{dt}$.`,
          `We are given $\\frac{dx}{dt} = ${dx}$ and $\\frac{dz}{dt} = ${dzdt.toFixed(3)}$.`,
          `Substitute: $(${H}-h)(${dzdt.toFixed(3)}) = ${H}(${dx}) = ${H * dx}$.`,
          `$${H}-h = \\frac{${H * dx}}{${dzdt.toFixed(3)}} \\approx ${H - h}$.`,
          `So $h = ${H} - ${H - h} = ${h}$ ft.`,
        ],
      );
    }
  }
}

// 7. INSCRIBED OPTIMIZATION VARIATIONS (Rectangles in Circles, Ellipses, Parabolas)
for (let R of [4, 5, 8, 10, 12]) {
  gen(
    "Optimization shortcuts",
    "medium",
    `Find the dimensions of the rectangle of maximum area that can be inscribed in a circle of radius ${R}.`,
    `Square of side ${(R * Math.SQRT2).toFixed(2)}`,
    [
      `Let the rectangle sides be $2x$ and $2y$ centered at the origin.`,
      `The constraint is $x^2 + y^2 = ${R}^2 \\implies y = \\sqrt{${R}^2 - x^2}$.`,
      `The area is $A = (2x)(2y) = 4x\\sqrt{${R * R} - x^2}$.`,
      `To maximize $A$, maximize its square: $S = A^2 = 16x^2(${R * R} - x^2) = ${16 * R * R}x^2 - 16x^4$.`,
      `$S' = ${32 * R * R}x - 64x^3 = 0 \\implies x^2 = \\frac{${R * R}}{2} \\implies x = \\frac{${R}}{\\sqrt{2}}$.`,
      `Then $y = \\sqrt{${R * R} - \\frac{${R * R}}{2}} = \\frac{${R}}{\\sqrt{2}}$.`,
      `The dimensions are $2x = 2y = ${R}\\sqrt{2} \\approx ${(R * Math.SQRT2).toFixed(2)}$.`,
    ],
  );
  gen(
    "Optimization shortcuts",
    "hard",
    `What is the maximum area of a rectangle inscribed in a circle of radius ${R}?`,
    `${2 * R * R}`,
    [
      `An inscribed rectangle of maximum area in a circle is always a square.`,
      `Let the side length of the square be $s$. The diagonal is the diameter of the circle, $d = 2(${R}) = ${2 * R}$.`,
      `By Pythagorean theorem: $s^2 + s^2 = (${2 * R})^2 \\implies 2s^2 = ${4 * R * R}$.`,
      `$s^2 = ${2 * R * R}$. The area is exactly $s^2 = ${2 * R * R}$.`,
    ],
  );
  gen(
    "Optimization shortcuts",
    "highest",
    `Find the perimeter of the largest rectangle that can be inscribed in a circle of radius ${R}.`,
    `${(4 * R * Math.SQRT2).toFixed(2)}`,
    [
      `The largest inscribed rectangle in terms of area (and perimeter) is a square.`,
      `The diagonal is $2R = ${2 * R}$.`,
      `The side length is $s = \\frac{2R}{\\sqrt{2}} = R\\sqrt{2} = ${R}\\sqrt{2}$.`,
      `Perimeter $P = 4s = 4(${R}\\sqrt{2}) = ${4 * R}\\sqrt{2} \\approx ${(4 * R * Math.SQRT2).toFixed(2)}$.`,
    ],
  );
}
for (let x_int of [2, 3, 4, 5]) {
  let parabola = `${x_int * x_int} - x^2`;
  let maxX = x_int / Math.sqrt(3);
  let maxArea = 2 * maxX * (x_int * x_int - maxX * maxX);
  gen(
    "Optimization",
    "hard",
    `Find the dimensions of the rectangle of maximum area inscribed under the parabola y = ${parabola} and above the x-axis.`,
    `Width = ${(2 * maxX).toFixed(2)}, Height = ${(x_int * x_int - maxX * maxX).toFixed(2)}`,
    [
      `Let the top right vertex of the rectangle be $(x, y)$ on the parabola.`,
      `The width of the rectangle is $2x$ and the height is $y = ${parabola}$.`,
      `Area $A = 2x(${x_int * x_int} - x^2) = ${2 * x_int * x_int}x - 2x^3$.`,
      `Differentiate: $A'(x) = ${2 * x_int * x_int} - 6x^2$.`,
      `Set $A'(x) = 0 \\implies 6x^2 = ${2 * x_int * x_int} \\implies x = \\frac{${x_int}}{\\sqrt{3}} \\approx ${maxX.toFixed(3)}$.`,
      `Width is $2x = ${(2 * maxX).toFixed(2)}$.`,
      `Height is $y = ${x_int * x_int} - (${maxX.toFixed(3)})^2 = ${(x_int * x_int - maxX * maxX).toFixed(2)}$.`,
    ],
  );
  gen(
    "Optimization",
    "very_hard",
    `What is the maximum area of a rectangle inscribed under y = ${parabola}?`,
    `${maxArea.toFixed(3)}`,
    [
      `Let width be $2x$ and height be $y = ${parabola}$.`,
      `Area $A(x) = 2x(${x_int * x_int} - x^2) = ${2 * x_int * x_int}x - 2x^3$.`,
      `$A'(x) = ${2 * x_int * x_int} - 6x^2 = 0 \\implies x = \\frac{${x_int}}{\\sqrt{3}}$.`,
      `Max area $A = 2(\\frac{${x_int}}{\\sqrt{3}})(${x_int * x_int} - \\frac{${x_int * x_int}}{3}) = \\frac{${2 * x_int}}{\\sqrt{3}}(\\frac{${2 * x_int * x_int}}{3})$.`,
      `$A = \\frac{${4 * x_int * x_int * x_int}}{3\\sqrt{3}} \\approx ${maxArea.toFixed(3)}$.`,
    ],
  );
}

// 8. FENCING / PERIMETER VARIATIONS
for (let P of [100, 240, 500, 800, 1000]) {
  // Free rectangle max area: P/4 x P/4
  gen(
    "Optimization",
    "medium",
    `What is the maximum area of a rectangle with a fixed perimeter of ${P}?`,
    `${(P / 4) * (P / 4)}`,
    [
      `A rectangle with fixed perimeter maximizes area when it is a square.`,
      `Perimeter $P = 4s = ${P} \\implies s = ${P / 4}$.`,
      `Max area is $A = s^2 = (${P / 4})^2 = ${(P / 4) * (P / 4)}$.`,
    ],
  );
  gen(
    "Optimization",
    "hard",
    `A rectangle has fixed perimeter ${P}. What is the length of its diagonal when the area is maximized?`,
    `${((P / 4) * Math.SQRT2).toFixed(3)}`,
    [
      `Area is maximized when the rectangle is a square.`,
      `Side length $s = \\frac{${P}}{4} = ${P / 4}$.`,
      `The diagonal $d = \\sqrt{s^2 + s^2} = s\\sqrt{2} = ${P / 4}\\sqrt{2}$.`,
      `$d \\approx ${((P / 4) * Math.SQRT2).toFixed(3)}$.`,
    ],
  );
  // Bordering river (1 side free) P = 2w + L => Max area when L = P/2, w = P/4
  gen(
    "Optimization",
    "medium",
    `A farmer has ${P} ft of fencing to enclose a rectangular field bordering a strict river (no fence needed along river). Find the dimensions that maximize area.`,
    `${P / 2} by ${P / 4}`,
    [
      `Let Length be $L$ (along river) and Width be $w$.`,
      `Constraints: $L + 2w = ${P} \\implies L = ${P} - 2w$.`,
      `Area $A(w) = w L = w(${P} - 2w) = ${P}w - 2w^2$.`,
      `$A'(w) = ${P} - 4w = 0 \\implies w = ${P / 4}$.`,
      `Then $L = ${P} - 2(${P / 4}) = ${P / 2}$.`,
      `Dimensions are $L = ${P / 2}$ by $w = ${P / 4}$.`,
    ],
  );
  gen(
    "Optimization",
    "hard",
    `A rectangular pen borders a wall and requires ${P} ft of fencing for the remaining 3 sides. What is the maximum possible area?`,
    `${(P / 2) * (P / 4)} sq ft`,
    [
      `Let the dimensions be $L$ (parallel to wall) and $w$ (perpendicular).`,
      `Then $L + 2w = ${P} \\implies L = ${P} - 2w$.`,
      `Area $A = w(${P} - 2w) = ${P}w - 2w^2$.`,
      `$A'(w) = ${P} - 4w = 0 \\implies w = ${P / 4}$.`,
      `$L = ${P} - 2(${P / 4}) = ${P / 2}$.`,
      `Max area $A = (${P / 2}) \\times (${P / 4}) = ${(P / 2) * (P / 4)}$ sq ft.`,
    ],
  );
}

const fileContent = `import { ExamProblem } from './examData';

export const generatedMegaApps: ExamProblem[] = ${JSON.stringify(problems, null, 2)};
`;
fs.writeFileSync("src/data/generatedMegaApps.ts", fileContent);
console.log(
  "Successfully generated " + problems.length + " structured variations.",
);
