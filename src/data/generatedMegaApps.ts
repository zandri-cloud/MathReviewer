import { ExamProblem } from '../types/exam';

export const generatedMegaApps: ExamProblem[] = [
  {
    "id": "mega-app-var-50000",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 10-ft ladder is leaning against a wall. The bottom slides away at 2 ft/s. How fast is the top sliding down when the bottom is 3 ft from the wall?",
    "answer": "0.629 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 10^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 3$, $L = 10$, we find $y = \\sqrt{10^2 - 3^2} = 9.539$.",
      "Substitute the known values: $(3)(2) + (9.539) \\frac{dy}{dt} = 0$.",
      "Solve for $\\frac{dy}{dt}$: $\\frac{dy}{dt} = -\\frac{6}{9.539} = -0.6290$.",
      "The top is sliding down at a rate of $0.629$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50001",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 10-ft ladder is leaning against a wall. The top slides down at 0.63 ft/s. How fast is the bottom sliding away when it is 3 ft from the wall?",
    "answer": "2.000 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 10^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0 \\implies x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 3$, $L = 10$, we find $y = \\sqrt{10^2 - 3^2} = 9.539$.",
      "We know $\\frac{dy}{dt} = -0.63$.",
      "Substitute the known values: $(3)\\frac{dx}{dt} + (9.539)(-0.63) = 0$.",
      "Solve for $\\frac{dx}{dt}$: $\\frac{dx}{dt} = \\frac{6.000}{3} \\approx 2.000$.",
      "The bottom is sliding away at a rate of $2.000$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50002",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 10-ft ladder leans against a wall. The bottom slides away at 2 ft/s and the top slides down at 0.63 ft/s. How far is the bottom from the wall at this moment?",
    "answer": "3.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "We are given $\\frac{dx}{dt} = 2$ and $\\frac{dy}{dt} = -0.63$. We want to find $x$.",
      "From $x^2 + y^2 = 10^2$, we know $y = \\sqrt{10^2 - x^2}$.",
      "Differentiating yields $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute: $x(2) + y(-0.63) = 0$.",
      "Therefore, $y = \\frac{2}{0.63} x$.",
      "Substitute $y$ back into $x^2 + y^2 = 10^2$: $x^2 + (\\frac{2}{0.63}x)^2 = 10^2$.",
      "Solving for $x$, we find $x = 3.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50003",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A ladder leans against a wall. At a certain instant, the bottom is 3 ft from the wall sliding away at 2 ft/s. The top is sliding down at 0.63 ft/s. What is the length of the ladder?",
    "answer": "10.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, $y$ be the height, and $L$ be the constant length of the ladder.",
      "We are given $x = 3$, $\\frac{dx}{dt} = 2$, and $\\frac{dy}{dt} = -0.63$.",
      "Since $x^2 + y^2 = L^2$, we differentiate to get $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute known values: $(3)(2) + y(-0.63) = 0$.",
      "Solve for $y$: $y = \\frac{6}{0.63} \\approx 9.539$ ft.",
      "Now use the Pythagorean theorem: $L^2 = x^2 + y^2 = (3)^2 + (9.539)^2$.",
      "$L^2 \\approx 9 + 91.000 = 100.00$.",
      "Thus, $L = \\sqrt{100.00} = 10.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50004",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 10-ft ladder is leaning against a wall. The bottom slides away at 2 ft/s. How fast is the top sliding down when the bottom is 4 ft from the wall?",
    "answer": "0.873 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 10^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 4$, $L = 10$, we find $y = \\sqrt{10^2 - 4^2} = 9.165$.",
      "Substitute the known values: $(4)(2) + (9.165) \\frac{dy}{dt} = 0$.",
      "Solve for $\\frac{dy}{dt}$: $\\frac{dy}{dt} = -\\frac{8}{9.165} = -0.8729$.",
      "The top is sliding down at a rate of $0.873$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50005",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 10-ft ladder is leaning against a wall. The top slides down at 0.87 ft/s. How fast is the bottom sliding away when it is 4 ft from the wall?",
    "answer": "2.000 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 10^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0 \\implies x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 4$, $L = 10$, we find $y = \\sqrt{10^2 - 4^2} = 9.165$.",
      "We know $\\frac{dy}{dt} = -0.87$.",
      "Substitute the known values: $(4)\\frac{dx}{dt} + (9.165)(-0.87) = 0$.",
      "Solve for $\\frac{dx}{dt}$: $\\frac{dx}{dt} = \\frac{8.000}{4} \\approx 2.000$.",
      "The bottom is sliding away at a rate of $2.000$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50006",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 10-ft ladder leans against a wall. The bottom slides away at 2 ft/s and the top slides down at 0.87 ft/s. How far is the bottom from the wall at this moment?",
    "answer": "4.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "We are given $\\frac{dx}{dt} = 2$ and $\\frac{dy}{dt} = -0.87$. We want to find $x$.",
      "From $x^2 + y^2 = 10^2$, we know $y = \\sqrt{10^2 - x^2}$.",
      "Differentiating yields $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute: $x(2) + y(-0.87) = 0$.",
      "Therefore, $y = \\frac{2}{0.87} x$.",
      "Substitute $y$ back into $x^2 + y^2 = 10^2$: $x^2 + (\\frac{2}{0.87}x)^2 = 10^2$.",
      "Solving for $x$, we find $x = 4.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50007",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A ladder leans against a wall. At a certain instant, the bottom is 4 ft from the wall sliding away at 2 ft/s. The top is sliding down at 0.87 ft/s. What is the length of the ladder?",
    "answer": "10.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, $y$ be the height, and $L$ be the constant length of the ladder.",
      "We are given $x = 4$, $\\frac{dx}{dt} = 2$, and $\\frac{dy}{dt} = -0.87$.",
      "Since $x^2 + y^2 = L^2$, we differentiate to get $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute known values: $(4)(2) + y(-0.87) = 0$.",
      "Solve for $y$: $y = \\frac{8}{0.87} \\approx 9.165$ ft.",
      "Now use the Pythagorean theorem: $L^2 = x^2 + y^2 = (4)^2 + (9.165)^2$.",
      "$L^2 \\approx 16 + 84.000 = 100.00$.",
      "Thus, $L = \\sqrt{100.00} = 10.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50008",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 10-ft ladder is leaning against a wall. The bottom slides away at 2 ft/s. How fast is the top sliding down when the bottom is 5 ft from the wall?",
    "answer": "1.155 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 10^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 5$, $L = 10$, we find $y = \\sqrt{10^2 - 5^2} = 8.660$.",
      "Substitute the known values: $(5)(2) + (8.660) \\frac{dy}{dt} = 0$.",
      "Solve for $\\frac{dy}{dt}$: $\\frac{dy}{dt} = -\\frac{10}{8.660} = -1.1547$.",
      "The top is sliding down at a rate of $1.155$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50009",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 10-ft ladder is leaning against a wall. The top slides down at 1.15 ft/s. How fast is the bottom sliding away when it is 5 ft from the wall?",
    "answer": "2.000 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 10^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0 \\implies x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 5$, $L = 10$, we find $y = \\sqrt{10^2 - 5^2} = 8.660$.",
      "We know $\\frac{dy}{dt} = -1.15$.",
      "Substitute the known values: $(5)\\frac{dx}{dt} + (8.660)(-1.15) = 0$.",
      "Solve for $\\frac{dx}{dt}$: $\\frac{dx}{dt} = \\frac{10.000}{5} \\approx 2.000$.",
      "The bottom is sliding away at a rate of $2.000$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50010",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 10-ft ladder leans against a wall. The bottom slides away at 2 ft/s and the top slides down at 1.15 ft/s. How far is the bottom from the wall at this moment?",
    "answer": "5.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "We are given $\\frac{dx}{dt} = 2$ and $\\frac{dy}{dt} = -1.15$. We want to find $x$.",
      "From $x^2 + y^2 = 10^2$, we know $y = \\sqrt{10^2 - x^2}$.",
      "Differentiating yields $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute: $x(2) + y(-1.15) = 0$.",
      "Therefore, $y = \\frac{2}{1.15} x$.",
      "Substitute $y$ back into $x^2 + y^2 = 10^2$: $x^2 + (\\frac{2}{1.15}x)^2 = 10^2$.",
      "Solving for $x$, we find $x = 5.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50011",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A ladder leans against a wall. At a certain instant, the bottom is 5 ft from the wall sliding away at 2 ft/s. The top is sliding down at 1.15 ft/s. What is the length of the ladder?",
    "answer": "10.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, $y$ be the height, and $L$ be the constant length of the ladder.",
      "We are given $x = 5$, $\\frac{dx}{dt} = 2$, and $\\frac{dy}{dt} = -1.15$.",
      "Since $x^2 + y^2 = L^2$, we differentiate to get $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute known values: $(5)(2) + y(-1.15) = 0$.",
      "Solve for $y$: $y = \\frac{10}{1.15} \\approx 8.660$ ft.",
      "Now use the Pythagorean theorem: $L^2 = x^2 + y^2 = (5)^2 + (8.660)^2$.",
      "$L^2 \\approx 25 + 75.000 = 100.00$.",
      "Thus, $L = \\sqrt{100.00} = 10.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50012",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 10-ft ladder is leaning against a wall. The bottom slides away at 2 ft/s. How fast is the top sliding down when the bottom is 6 ft from the wall?",
    "answer": "1.500 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 10^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 6$, $L = 10$, we find $y = \\sqrt{10^2 - 6^2} = 8.000$.",
      "Substitute the known values: $(6)(2) + (8.000) \\frac{dy}{dt} = 0$.",
      "Solve for $\\frac{dy}{dt}$: $\\frac{dy}{dt} = -\\frac{12}{8.000} = -1.5000$.",
      "The top is sliding down at a rate of $1.500$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50013",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 10-ft ladder is leaning against a wall. The top slides down at 1.50 ft/s. How fast is the bottom sliding away when it is 6 ft from the wall?",
    "answer": "2.000 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 10^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0 \\implies x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 6$, $L = 10$, we find $y = \\sqrt{10^2 - 6^2} = 8.000$.",
      "We know $\\frac{dy}{dt} = -1.50$.",
      "Substitute the known values: $(6)\\frac{dx}{dt} + (8.000)(-1.50) = 0$.",
      "Solve for $\\frac{dx}{dt}$: $\\frac{dx}{dt} = \\frac{12.000}{6} \\approx 2.000$.",
      "The bottom is sliding away at a rate of $2.000$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50014",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 10-ft ladder leans against a wall. The bottom slides away at 2 ft/s and the top slides down at 1.50 ft/s. How far is the bottom from the wall at this moment?",
    "answer": "6.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "We are given $\\frac{dx}{dt} = 2$ and $\\frac{dy}{dt} = -1.50$. We want to find $x$.",
      "From $x^2 + y^2 = 10^2$, we know $y = \\sqrt{10^2 - x^2}$.",
      "Differentiating yields $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute: $x(2) + y(-1.50) = 0$.",
      "Therefore, $y = \\frac{2}{1.50} x$.",
      "Substitute $y$ back into $x^2 + y^2 = 10^2$: $x^2 + (\\frac{2}{1.50}x)^2 = 10^2$.",
      "Solving for $x$, we find $x = 6.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50015",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A ladder leans against a wall. At a certain instant, the bottom is 6 ft from the wall sliding away at 2 ft/s. The top is sliding down at 1.50 ft/s. What is the length of the ladder?",
    "answer": "10.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, $y$ be the height, and $L$ be the constant length of the ladder.",
      "We are given $x = 6$, $\\frac{dx}{dt} = 2$, and $\\frac{dy}{dt} = -1.50$.",
      "Since $x^2 + y^2 = L^2$, we differentiate to get $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute known values: $(6)(2) + y(-1.50) = 0$.",
      "Solve for $y$: $y = \\frac{12}{1.50} \\approx 8.000$ ft.",
      "Now use the Pythagorean theorem: $L^2 = x^2 + y^2 = (6)^2 + (8.000)^2$.",
      "$L^2 \\approx 36 + 64.000 = 100.00$.",
      "Thus, $L = \\sqrt{100.00} = 10.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50016",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 10-ft ladder is leaning against a wall. The bottom slides away at 2 ft/s. How fast is the top sliding down when the bottom is 8 ft from the wall?",
    "answer": "2.667 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 10^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 8$, $L = 10$, we find $y = \\sqrt{10^2 - 8^2} = 6.000$.",
      "Substitute the known values: $(8)(2) + (6.000) \\frac{dy}{dt} = 0$.",
      "Solve for $\\frac{dy}{dt}$: $\\frac{dy}{dt} = -\\frac{16}{6.000} = -2.6667$.",
      "The top is sliding down at a rate of $2.667$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50017",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 10-ft ladder is leaning against a wall. The top slides down at 2.67 ft/s. How fast is the bottom sliding away when it is 8 ft from the wall?",
    "answer": "2.000 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 10^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0 \\implies x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 8$, $L = 10$, we find $y = \\sqrt{10^2 - 8^2} = 6.000$.",
      "We know $\\frac{dy}{dt} = -2.67$.",
      "Substitute the known values: $(8)\\frac{dx}{dt} + (6.000)(-2.67) = 0$.",
      "Solve for $\\frac{dx}{dt}$: $\\frac{dx}{dt} = \\frac{16.000}{8} \\approx 2.000$.",
      "The bottom is sliding away at a rate of $2.000$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50018",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 10-ft ladder leans against a wall. The bottom slides away at 2 ft/s and the top slides down at 2.67 ft/s. How far is the bottom from the wall at this moment?",
    "answer": "8.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "We are given $\\frac{dx}{dt} = 2$ and $\\frac{dy}{dt} = -2.67$. We want to find $x$.",
      "From $x^2 + y^2 = 10^2$, we know $y = \\sqrt{10^2 - x^2}$.",
      "Differentiating yields $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute: $x(2) + y(-2.67) = 0$.",
      "Therefore, $y = \\frac{2}{2.67} x$.",
      "Substitute $y$ back into $x^2 + y^2 = 10^2$: $x^2 + (\\frac{2}{2.67}x)^2 = 10^2$.",
      "Solving for $x$, we find $x = 8.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50019",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A ladder leans against a wall. At a certain instant, the bottom is 8 ft from the wall sliding away at 2 ft/s. The top is sliding down at 2.67 ft/s. What is the length of the ladder?",
    "answer": "10.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, $y$ be the height, and $L$ be the constant length of the ladder.",
      "We are given $x = 8$, $\\frac{dx}{dt} = 2$, and $\\frac{dy}{dt} = -2.67$.",
      "Since $x^2 + y^2 = L^2$, we differentiate to get $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute known values: $(8)(2) + y(-2.67) = 0$.",
      "Solve for $y$: $y = \\frac{16}{2.67} \\approx 6.000$ ft.",
      "Now use the Pythagorean theorem: $L^2 = x^2 + y^2 = (8)^2 + (6.000)^2$.",
      "$L^2 \\approx 64 + 36.000 = 100.00$.",
      "Thus, $L = \\sqrt{100.00} = 10.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50020",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 13-ft ladder is leaning against a wall. The bottom slides away at 2 ft/s. How fast is the top sliding down when the bottom is 3 ft from the wall?",
    "answer": "0.474 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 13^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 3$, $L = 13$, we find $y = \\sqrt{13^2 - 3^2} = 12.649$.",
      "Substitute the known values: $(3)(2) + (12.649) \\frac{dy}{dt} = 0$.",
      "Solve for $\\frac{dy}{dt}$: $\\frac{dy}{dt} = -\\frac{6}{12.649} = -0.4743$.",
      "The top is sliding down at a rate of $0.474$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50021",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 13-ft ladder is leaning against a wall. The top slides down at 0.47 ft/s. How fast is the bottom sliding away when it is 3 ft from the wall?",
    "answer": "2.000 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 13^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0 \\implies x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 3$, $L = 13$, we find $y = \\sqrt{13^2 - 3^2} = 12.649$.",
      "We know $\\frac{dy}{dt} = -0.47$.",
      "Substitute the known values: $(3)\\frac{dx}{dt} + (12.649)(-0.47) = 0$.",
      "Solve for $\\frac{dx}{dt}$: $\\frac{dx}{dt} = \\frac{6.000}{3} \\approx 2.000$.",
      "The bottom is sliding away at a rate of $2.000$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50022",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 13-ft ladder leans against a wall. The bottom slides away at 2 ft/s and the top slides down at 0.47 ft/s. How far is the bottom from the wall at this moment?",
    "answer": "3.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "We are given $\\frac{dx}{dt} = 2$ and $\\frac{dy}{dt} = -0.47$. We want to find $x$.",
      "From $x^2 + y^2 = 13^2$, we know $y = \\sqrt{13^2 - x^2}$.",
      "Differentiating yields $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute: $x(2) + y(-0.47) = 0$.",
      "Therefore, $y = \\frac{2}{0.47} x$.",
      "Substitute $y$ back into $x^2 + y^2 = 13^2$: $x^2 + (\\frac{2}{0.47}x)^2 = 13^2$.",
      "Solving for $x$, we find $x = 3.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50023",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A ladder leans against a wall. At a certain instant, the bottom is 3 ft from the wall sliding away at 2 ft/s. The top is sliding down at 0.47 ft/s. What is the length of the ladder?",
    "answer": "13.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, $y$ be the height, and $L$ be the constant length of the ladder.",
      "We are given $x = 3$, $\\frac{dx}{dt} = 2$, and $\\frac{dy}{dt} = -0.47$.",
      "Since $x^2 + y^2 = L^2$, we differentiate to get $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute known values: $(3)(2) + y(-0.47) = 0$.",
      "Solve for $y$: $y = \\frac{6}{0.47} \\approx 12.649$ ft.",
      "Now use the Pythagorean theorem: $L^2 = x^2 + y^2 = (3)^2 + (12.649)^2$.",
      "$L^2 \\approx 9 + 160.000 = 169.00$.",
      "Thus, $L = \\sqrt{169.00} = 13.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50024",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 13-ft ladder is leaning against a wall. The bottom slides away at 2 ft/s. How fast is the top sliding down when the bottom is 4 ft from the wall?",
    "answer": "0.647 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 13^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 4$, $L = 13$, we find $y = \\sqrt{13^2 - 4^2} = 12.369$.",
      "Substitute the known values: $(4)(2) + (12.369) \\frac{dy}{dt} = 0$.",
      "Solve for $\\frac{dy}{dt}$: $\\frac{dy}{dt} = -\\frac{8}{12.369} = -0.6468$.",
      "The top is sliding down at a rate of $0.647$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50025",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 13-ft ladder is leaning against a wall. The top slides down at 0.65 ft/s. How fast is the bottom sliding away when it is 4 ft from the wall?",
    "answer": "2.000 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 13^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0 \\implies x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 4$, $L = 13$, we find $y = \\sqrt{13^2 - 4^2} = 12.369$.",
      "We know $\\frac{dy}{dt} = -0.65$.",
      "Substitute the known values: $(4)\\frac{dx}{dt} + (12.369)(-0.65) = 0$.",
      "Solve for $\\frac{dx}{dt}$: $\\frac{dx}{dt} = \\frac{8.000}{4} \\approx 2.000$.",
      "The bottom is sliding away at a rate of $2.000$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50026",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 13-ft ladder leans against a wall. The bottom slides away at 2 ft/s and the top slides down at 0.65 ft/s. How far is the bottom from the wall at this moment?",
    "answer": "4.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "We are given $\\frac{dx}{dt} = 2$ and $\\frac{dy}{dt} = -0.65$. We want to find $x$.",
      "From $x^2 + y^2 = 13^2$, we know $y = \\sqrt{13^2 - x^2}$.",
      "Differentiating yields $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute: $x(2) + y(-0.65) = 0$.",
      "Therefore, $y = \\frac{2}{0.65} x$.",
      "Substitute $y$ back into $x^2 + y^2 = 13^2$: $x^2 + (\\frac{2}{0.65}x)^2 = 13^2$.",
      "Solving for $x$, we find $x = 4.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50027",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A ladder leans against a wall. At a certain instant, the bottom is 4 ft from the wall sliding away at 2 ft/s. The top is sliding down at 0.65 ft/s. What is the length of the ladder?",
    "answer": "13.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, $y$ be the height, and $L$ be the constant length of the ladder.",
      "We are given $x = 4$, $\\frac{dx}{dt} = 2$, and $\\frac{dy}{dt} = -0.65$.",
      "Since $x^2 + y^2 = L^2$, we differentiate to get $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute known values: $(4)(2) + y(-0.65) = 0$.",
      "Solve for $y$: $y = \\frac{8}{0.65} \\approx 12.369$ ft.",
      "Now use the Pythagorean theorem: $L^2 = x^2 + y^2 = (4)^2 + (12.369)^2$.",
      "$L^2 \\approx 16 + 153.000 = 169.00$.",
      "Thus, $L = \\sqrt{169.00} = 13.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50028",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 13-ft ladder is leaning against a wall. The bottom slides away at 2 ft/s. How fast is the top sliding down when the bottom is 5 ft from the wall?",
    "answer": "0.833 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 13^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 5$, $L = 13$, we find $y = \\sqrt{13^2 - 5^2} = 12.000$.",
      "Substitute the known values: $(5)(2) + (12.000) \\frac{dy}{dt} = 0$.",
      "Solve for $\\frac{dy}{dt}$: $\\frac{dy}{dt} = -\\frac{10}{12.000} = -0.8333$.",
      "The top is sliding down at a rate of $0.833$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50029",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 13-ft ladder is leaning against a wall. The top slides down at 0.83 ft/s. How fast is the bottom sliding away when it is 5 ft from the wall?",
    "answer": "2.000 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 13^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0 \\implies x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 5$, $L = 13$, we find $y = \\sqrt{13^2 - 5^2} = 12.000$.",
      "We know $\\frac{dy}{dt} = -0.83$.",
      "Substitute the known values: $(5)\\frac{dx}{dt} + (12.000)(-0.83) = 0$.",
      "Solve for $\\frac{dx}{dt}$: $\\frac{dx}{dt} = \\frac{10.000}{5} \\approx 2.000$.",
      "The bottom is sliding away at a rate of $2.000$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50030",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 13-ft ladder leans against a wall. The bottom slides away at 2 ft/s and the top slides down at 0.83 ft/s. How far is the bottom from the wall at this moment?",
    "answer": "5.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "We are given $\\frac{dx}{dt} = 2$ and $\\frac{dy}{dt} = -0.83$. We want to find $x$.",
      "From $x^2 + y^2 = 13^2$, we know $y = \\sqrt{13^2 - x^2}$.",
      "Differentiating yields $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute: $x(2) + y(-0.83) = 0$.",
      "Therefore, $y = \\frac{2}{0.83} x$.",
      "Substitute $y$ back into $x^2 + y^2 = 13^2$: $x^2 + (\\frac{2}{0.83}x)^2 = 13^2$.",
      "Solving for $x$, we find $x = 5.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50031",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A ladder leans against a wall. At a certain instant, the bottom is 5 ft from the wall sliding away at 2 ft/s. The top is sliding down at 0.83 ft/s. What is the length of the ladder?",
    "answer": "13.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, $y$ be the height, and $L$ be the constant length of the ladder.",
      "We are given $x = 5$, $\\frac{dx}{dt} = 2$, and $\\frac{dy}{dt} = -0.83$.",
      "Since $x^2 + y^2 = L^2$, we differentiate to get $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute known values: $(5)(2) + y(-0.83) = 0$.",
      "Solve for $y$: $y = \\frac{10}{0.83} \\approx 12.000$ ft.",
      "Now use the Pythagorean theorem: $L^2 = x^2 + y^2 = (5)^2 + (12.000)^2$.",
      "$L^2 \\approx 25 + 144.000 = 169.00$.",
      "Thus, $L = \\sqrt{169.00} = 13.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50032",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 13-ft ladder is leaning against a wall. The bottom slides away at 2 ft/s. How fast is the top sliding down when the bottom is 6 ft from the wall?",
    "answer": "1.041 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 13^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 6$, $L = 13$, we find $y = \\sqrt{13^2 - 6^2} = 11.533$.",
      "Substitute the known values: $(6)(2) + (11.533) \\frac{dy}{dt} = 0$.",
      "Solve for $\\frac{dy}{dt}$: $\\frac{dy}{dt} = -\\frac{12}{11.533} = -1.0405$.",
      "The top is sliding down at a rate of $1.041$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50033",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 13-ft ladder is leaning against a wall. The top slides down at 1.04 ft/s. How fast is the bottom sliding away when it is 6 ft from the wall?",
    "answer": "2.000 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 13^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0 \\implies x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 6$, $L = 13$, we find $y = \\sqrt{13^2 - 6^2} = 11.533$.",
      "We know $\\frac{dy}{dt} = -1.04$.",
      "Substitute the known values: $(6)\\frac{dx}{dt} + (11.533)(-1.04) = 0$.",
      "Solve for $\\frac{dx}{dt}$: $\\frac{dx}{dt} = \\frac{12.000}{6} \\approx 2.000$.",
      "The bottom is sliding away at a rate of $2.000$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50034",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 13-ft ladder leans against a wall. The bottom slides away at 2 ft/s and the top slides down at 1.04 ft/s. How far is the bottom from the wall at this moment?",
    "answer": "6.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "We are given $\\frac{dx}{dt} = 2$ and $\\frac{dy}{dt} = -1.04$. We want to find $x$.",
      "From $x^2 + y^2 = 13^2$, we know $y = \\sqrt{13^2 - x^2}$.",
      "Differentiating yields $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute: $x(2) + y(-1.04) = 0$.",
      "Therefore, $y = \\frac{2}{1.04} x$.",
      "Substitute $y$ back into $x^2 + y^2 = 13^2$: $x^2 + (\\frac{2}{1.04}x)^2 = 13^2$.",
      "Solving for $x$, we find $x = 6.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50035",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A ladder leans against a wall. At a certain instant, the bottom is 6 ft from the wall sliding away at 2 ft/s. The top is sliding down at 1.04 ft/s. What is the length of the ladder?",
    "answer": "13.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, $y$ be the height, and $L$ be the constant length of the ladder.",
      "We are given $x = 6$, $\\frac{dx}{dt} = 2$, and $\\frac{dy}{dt} = -1.04$.",
      "Since $x^2 + y^2 = L^2$, we differentiate to get $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute known values: $(6)(2) + y(-1.04) = 0$.",
      "Solve for $y$: $y = \\frac{12}{1.04} \\approx 11.533$ ft.",
      "Now use the Pythagorean theorem: $L^2 = x^2 + y^2 = (6)^2 + (11.533)^2$.",
      "$L^2 \\approx 36 + 133.000 = 169.00$.",
      "Thus, $L = \\sqrt{169.00} = 13.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50036",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 13-ft ladder is leaning against a wall. The bottom slides away at 2 ft/s. How fast is the top sliding down when the bottom is 8 ft from the wall?",
    "answer": "1.561 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 13^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 8$, $L = 13$, we find $y = \\sqrt{13^2 - 8^2} = 10.247$.",
      "Substitute the known values: $(8)(2) + (10.247) \\frac{dy}{dt} = 0$.",
      "Solve for $\\frac{dy}{dt}$: $\\frac{dy}{dt} = -\\frac{16}{10.247} = -1.5614$.",
      "The top is sliding down at a rate of $1.561$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50037",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 13-ft ladder is leaning against a wall. The top slides down at 1.56 ft/s. How fast is the bottom sliding away when it is 8 ft from the wall?",
    "answer": "2.000 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 13^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0 \\implies x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 8$, $L = 13$, we find $y = \\sqrt{13^2 - 8^2} = 10.247$.",
      "We know $\\frac{dy}{dt} = -1.56$.",
      "Substitute the known values: $(8)\\frac{dx}{dt} + (10.247)(-1.56) = 0$.",
      "Solve for $\\frac{dx}{dt}$: $\\frac{dx}{dt} = \\frac{16.000}{8} \\approx 2.000$.",
      "The bottom is sliding away at a rate of $2.000$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50038",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 13-ft ladder leans against a wall. The bottom slides away at 2 ft/s and the top slides down at 1.56 ft/s. How far is the bottom from the wall at this moment?",
    "answer": "8.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "We are given $\\frac{dx}{dt} = 2$ and $\\frac{dy}{dt} = -1.56$. We want to find $x$.",
      "From $x^2 + y^2 = 13^2$, we know $y = \\sqrt{13^2 - x^2}$.",
      "Differentiating yields $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute: $x(2) + y(-1.56) = 0$.",
      "Therefore, $y = \\frac{2}{1.56} x$.",
      "Substitute $y$ back into $x^2 + y^2 = 13^2$: $x^2 + (\\frac{2}{1.56}x)^2 = 13^2$.",
      "Solving for $x$, we find $x = 8.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50039",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A ladder leans against a wall. At a certain instant, the bottom is 8 ft from the wall sliding away at 2 ft/s. The top is sliding down at 1.56 ft/s. What is the length of the ladder?",
    "answer": "13.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, $y$ be the height, and $L$ be the constant length of the ladder.",
      "We are given $x = 8$, $\\frac{dx}{dt} = 2$, and $\\frac{dy}{dt} = -1.56$.",
      "Since $x^2 + y^2 = L^2$, we differentiate to get $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute known values: $(8)(2) + y(-1.56) = 0$.",
      "Solve for $y$: $y = \\frac{16}{1.56} \\approx 10.247$ ft.",
      "Now use the Pythagorean theorem: $L^2 = x^2 + y^2 = (8)^2 + (10.247)^2$.",
      "$L^2 \\approx 64 + 105.000 = 169.00$.",
      "Thus, $L = \\sqrt{169.00} = 13.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50040",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 13-ft ladder is leaning against a wall. The bottom slides away at 2 ft/s. How fast is the top sliding down when the bottom is 12 ft from the wall?",
    "answer": "4.800 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 13^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 12$, $L = 13$, we find $y = \\sqrt{13^2 - 12^2} = 5.000$.",
      "Substitute the known values: $(12)(2) + (5.000) \\frac{dy}{dt} = 0$.",
      "Solve for $\\frac{dy}{dt}$: $\\frac{dy}{dt} = -\\frac{24}{5.000} = -4.8000$.",
      "The top is sliding down at a rate of $4.800$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50041",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 13-ft ladder is leaning against a wall. The top slides down at 4.80 ft/s. How fast is the bottom sliding away when it is 12 ft from the wall?",
    "answer": "2.000 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 13^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0 \\implies x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 12$, $L = 13$, we find $y = \\sqrt{13^2 - 12^2} = 5.000$.",
      "We know $\\frac{dy}{dt} = -4.80$.",
      "Substitute the known values: $(12)\\frac{dx}{dt} + (5.000)(-4.80) = 0$.",
      "Solve for $\\frac{dx}{dt}$: $\\frac{dx}{dt} = \\frac{24.000}{12} \\approx 2.000$.",
      "The bottom is sliding away at a rate of $2.000$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50042",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 13-ft ladder leans against a wall. The bottom slides away at 2 ft/s and the top slides down at 4.80 ft/s. How far is the bottom from the wall at this moment?",
    "answer": "12.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "We are given $\\frac{dx}{dt} = 2$ and $\\frac{dy}{dt} = -4.80$. We want to find $x$.",
      "From $x^2 + y^2 = 13^2$, we know $y = \\sqrt{13^2 - x^2}$.",
      "Differentiating yields $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute: $x(2) + y(-4.80) = 0$.",
      "Therefore, $y = \\frac{2}{4.80} x$.",
      "Substitute $y$ back into $x^2 + y^2 = 13^2$: $x^2 + (\\frac{2}{4.80}x)^2 = 13^2$.",
      "Solving for $x$, we find $x = 12.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50043",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A ladder leans against a wall. At a certain instant, the bottom is 12 ft from the wall sliding away at 2 ft/s. The top is sliding down at 4.80 ft/s. What is the length of the ladder?",
    "answer": "13.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, $y$ be the height, and $L$ be the constant length of the ladder.",
      "We are given $x = 12$, $\\frac{dx}{dt} = 2$, and $\\frac{dy}{dt} = -4.80$.",
      "Since $x^2 + y^2 = L^2$, we differentiate to get $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute known values: $(12)(2) + y(-4.80) = 0$.",
      "Solve for $y$: $y = \\frac{24}{4.80} \\approx 5.000$ ft.",
      "Now use the Pythagorean theorem: $L^2 = x^2 + y^2 = (12)^2 + (5.000)^2$.",
      "$L^2 \\approx 144 + 25.000 = 169.00$.",
      "Thus, $L = \\sqrt{169.00} = 13.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50044",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 15-ft ladder is leaning against a wall. The bottom slides away at 2 ft/s. How fast is the top sliding down when the bottom is 3 ft from the wall?",
    "answer": "0.408 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 15^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 3$, $L = 15$, we find $y = \\sqrt{15^2 - 3^2} = 14.697$.",
      "Substitute the known values: $(3)(2) + (14.697) \\frac{dy}{dt} = 0$.",
      "Solve for $\\frac{dy}{dt}$: $\\frac{dy}{dt} = -\\frac{6}{14.697} = -0.4082$.",
      "The top is sliding down at a rate of $0.408$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50045",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 15-ft ladder is leaning against a wall. The top slides down at 0.41 ft/s. How fast is the bottom sliding away when it is 3 ft from the wall?",
    "answer": "2.000 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 15^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0 \\implies x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 3$, $L = 15$, we find $y = \\sqrt{15^2 - 3^2} = 14.697$.",
      "We know $\\frac{dy}{dt} = -0.41$.",
      "Substitute the known values: $(3)\\frac{dx}{dt} + (14.697)(-0.41) = 0$.",
      "Solve for $\\frac{dx}{dt}$: $\\frac{dx}{dt} = \\frac{6.000}{3} \\approx 2.000$.",
      "The bottom is sliding away at a rate of $2.000$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50046",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 15-ft ladder leans against a wall. The bottom slides away at 2 ft/s and the top slides down at 0.41 ft/s. How far is the bottom from the wall at this moment?",
    "answer": "3.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "We are given $\\frac{dx}{dt} = 2$ and $\\frac{dy}{dt} = -0.41$. We want to find $x$.",
      "From $x^2 + y^2 = 15^2$, we know $y = \\sqrt{15^2 - x^2}$.",
      "Differentiating yields $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute: $x(2) + y(-0.41) = 0$.",
      "Therefore, $y = \\frac{2}{0.41} x$.",
      "Substitute $y$ back into $x^2 + y^2 = 15^2$: $x^2 + (\\frac{2}{0.41}x)^2 = 15^2$.",
      "Solving for $x$, we find $x = 3.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50047",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A ladder leans against a wall. At a certain instant, the bottom is 3 ft from the wall sliding away at 2 ft/s. The top is sliding down at 0.41 ft/s. What is the length of the ladder?",
    "answer": "15.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, $y$ be the height, and $L$ be the constant length of the ladder.",
      "We are given $x = 3$, $\\frac{dx}{dt} = 2$, and $\\frac{dy}{dt} = -0.41$.",
      "Since $x^2 + y^2 = L^2$, we differentiate to get $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute known values: $(3)(2) + y(-0.41) = 0$.",
      "Solve for $y$: $y = \\frac{6}{0.41} \\approx 14.697$ ft.",
      "Now use the Pythagorean theorem: $L^2 = x^2 + y^2 = (3)^2 + (14.697)^2$.",
      "$L^2 \\approx 9 + 216.000 = 225.00$.",
      "Thus, $L = \\sqrt{225.00} = 15.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50048",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 15-ft ladder is leaning against a wall. The bottom slides away at 2 ft/s. How fast is the top sliding down when the bottom is 4 ft from the wall?",
    "answer": "0.553 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 15^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 4$, $L = 15$, we find $y = \\sqrt{15^2 - 4^2} = 14.457$.",
      "Substitute the known values: $(4)(2) + (14.457) \\frac{dy}{dt} = 0$.",
      "Solve for $\\frac{dy}{dt}$: $\\frac{dy}{dt} = -\\frac{8}{14.457} = -0.5534$.",
      "The top is sliding down at a rate of $0.553$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50049",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 15-ft ladder is leaning against a wall. The top slides down at 0.55 ft/s. How fast is the bottom sliding away when it is 4 ft from the wall?",
    "answer": "2.000 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 15^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0 \\implies x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 4$, $L = 15$, we find $y = \\sqrt{15^2 - 4^2} = 14.457$.",
      "We know $\\frac{dy}{dt} = -0.55$.",
      "Substitute the known values: $(4)\\frac{dx}{dt} + (14.457)(-0.55) = 0$.",
      "Solve for $\\frac{dx}{dt}$: $\\frac{dx}{dt} = \\frac{8.000}{4} \\approx 2.000$.",
      "The bottom is sliding away at a rate of $2.000$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50050",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 15-ft ladder leans against a wall. The bottom slides away at 2 ft/s and the top slides down at 0.55 ft/s. How far is the bottom from the wall at this moment?",
    "answer": "4.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "We are given $\\frac{dx}{dt} = 2$ and $\\frac{dy}{dt} = -0.55$. We want to find $x$.",
      "From $x^2 + y^2 = 15^2$, we know $y = \\sqrt{15^2 - x^2}$.",
      "Differentiating yields $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute: $x(2) + y(-0.55) = 0$.",
      "Therefore, $y = \\frac{2}{0.55} x$.",
      "Substitute $y$ back into $x^2 + y^2 = 15^2$: $x^2 + (\\frac{2}{0.55}x)^2 = 15^2$.",
      "Solving for $x$, we find $x = 4.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50051",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A ladder leans against a wall. At a certain instant, the bottom is 4 ft from the wall sliding away at 2 ft/s. The top is sliding down at 0.55 ft/s. What is the length of the ladder?",
    "answer": "15.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, $y$ be the height, and $L$ be the constant length of the ladder.",
      "We are given $x = 4$, $\\frac{dx}{dt} = 2$, and $\\frac{dy}{dt} = -0.55$.",
      "Since $x^2 + y^2 = L^2$, we differentiate to get $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute known values: $(4)(2) + y(-0.55) = 0$.",
      "Solve for $y$: $y = \\frac{8}{0.55} \\approx 14.457$ ft.",
      "Now use the Pythagorean theorem: $L^2 = x^2 + y^2 = (4)^2 + (14.457)^2$.",
      "$L^2 \\approx 16 + 209.000 = 225.00$.",
      "Thus, $L = \\sqrt{225.00} = 15.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50052",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 15-ft ladder is leaning against a wall. The bottom slides away at 2 ft/s. How fast is the top sliding down when the bottom is 5 ft from the wall?",
    "answer": "0.707 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 15^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 5$, $L = 15$, we find $y = \\sqrt{15^2 - 5^2} = 14.142$.",
      "Substitute the known values: $(5)(2) + (14.142) \\frac{dy}{dt} = 0$.",
      "Solve for $\\frac{dy}{dt}$: $\\frac{dy}{dt} = -\\frac{10}{14.142} = -0.7071$.",
      "The top is sliding down at a rate of $0.707$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50053",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 15-ft ladder is leaning against a wall. The top slides down at 0.71 ft/s. How fast is the bottom sliding away when it is 5 ft from the wall?",
    "answer": "2.000 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 15^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0 \\implies x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 5$, $L = 15$, we find $y = \\sqrt{15^2 - 5^2} = 14.142$.",
      "We know $\\frac{dy}{dt} = -0.71$.",
      "Substitute the known values: $(5)\\frac{dx}{dt} + (14.142)(-0.71) = 0$.",
      "Solve for $\\frac{dx}{dt}$: $\\frac{dx}{dt} = \\frac{10.000}{5} \\approx 2.000$.",
      "The bottom is sliding away at a rate of $2.000$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50054",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 15-ft ladder leans against a wall. The bottom slides away at 2 ft/s and the top slides down at 0.71 ft/s. How far is the bottom from the wall at this moment?",
    "answer": "5.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "We are given $\\frac{dx}{dt} = 2$ and $\\frac{dy}{dt} = -0.71$. We want to find $x$.",
      "From $x^2 + y^2 = 15^2$, we know $y = \\sqrt{15^2 - x^2}$.",
      "Differentiating yields $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute: $x(2) + y(-0.71) = 0$.",
      "Therefore, $y = \\frac{2}{0.71} x$.",
      "Substitute $y$ back into $x^2 + y^2 = 15^2$: $x^2 + (\\frac{2}{0.71}x)^2 = 15^2$.",
      "Solving for $x$, we find $x = 5.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50055",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A ladder leans against a wall. At a certain instant, the bottom is 5 ft from the wall sliding away at 2 ft/s. The top is sliding down at 0.71 ft/s. What is the length of the ladder?",
    "answer": "15.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, $y$ be the height, and $L$ be the constant length of the ladder.",
      "We are given $x = 5$, $\\frac{dx}{dt} = 2$, and $\\frac{dy}{dt} = -0.71$.",
      "Since $x^2 + y^2 = L^2$, we differentiate to get $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute known values: $(5)(2) + y(-0.71) = 0$.",
      "Solve for $y$: $y = \\frac{10}{0.71} \\approx 14.142$ ft.",
      "Now use the Pythagorean theorem: $L^2 = x^2 + y^2 = (5)^2 + (14.142)^2$.",
      "$L^2 \\approx 25 + 200.000 = 225.00$.",
      "Thus, $L = \\sqrt{225.00} = 15.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50056",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 15-ft ladder is leaning against a wall. The bottom slides away at 2 ft/s. How fast is the top sliding down when the bottom is 6 ft from the wall?",
    "answer": "0.873 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 15^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 6$, $L = 15$, we find $y = \\sqrt{15^2 - 6^2} = 13.748$.",
      "Substitute the known values: $(6)(2) + (13.748) \\frac{dy}{dt} = 0$.",
      "Solve for $\\frac{dy}{dt}$: $\\frac{dy}{dt} = -\\frac{12}{13.748} = -0.8729$.",
      "The top is sliding down at a rate of $0.873$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50057",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 15-ft ladder is leaning against a wall. The top slides down at 0.87 ft/s. How fast is the bottom sliding away when it is 6 ft from the wall?",
    "answer": "2.000 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 15^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0 \\implies x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 6$, $L = 15$, we find $y = \\sqrt{15^2 - 6^2} = 13.748$.",
      "We know $\\frac{dy}{dt} = -0.87$.",
      "Substitute the known values: $(6)\\frac{dx}{dt} + (13.748)(-0.87) = 0$.",
      "Solve for $\\frac{dx}{dt}$: $\\frac{dx}{dt} = \\frac{12.000}{6} \\approx 2.000$.",
      "The bottom is sliding away at a rate of $2.000$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50058",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 15-ft ladder leans against a wall. The bottom slides away at 2 ft/s and the top slides down at 0.87 ft/s. How far is the bottom from the wall at this moment?",
    "answer": "6.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "We are given $\\frac{dx}{dt} = 2$ and $\\frac{dy}{dt} = -0.87$. We want to find $x$.",
      "From $x^2 + y^2 = 15^2$, we know $y = \\sqrt{15^2 - x^2}$.",
      "Differentiating yields $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute: $x(2) + y(-0.87) = 0$.",
      "Therefore, $y = \\frac{2}{0.87} x$.",
      "Substitute $y$ back into $x^2 + y^2 = 15^2$: $x^2 + (\\frac{2}{0.87}x)^2 = 15^2$.",
      "Solving for $x$, we find $x = 6.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50059",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A ladder leans against a wall. At a certain instant, the bottom is 6 ft from the wall sliding away at 2 ft/s. The top is sliding down at 0.87 ft/s. What is the length of the ladder?",
    "answer": "15.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, $y$ be the height, and $L$ be the constant length of the ladder.",
      "We are given $x = 6$, $\\frac{dx}{dt} = 2$, and $\\frac{dy}{dt} = -0.87$.",
      "Since $x^2 + y^2 = L^2$, we differentiate to get $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute known values: $(6)(2) + y(-0.87) = 0$.",
      "Solve for $y$: $y = \\frac{12}{0.87} \\approx 13.748$ ft.",
      "Now use the Pythagorean theorem: $L^2 = x^2 + y^2 = (6)^2 + (13.748)^2$.",
      "$L^2 \\approx 36 + 189.000 = 225.00$.",
      "Thus, $L = \\sqrt{225.00} = 15.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50060",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 15-ft ladder is leaning against a wall. The bottom slides away at 2 ft/s. How fast is the top sliding down when the bottom is 8 ft from the wall?",
    "answer": "1.261 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 15^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 8$, $L = 15$, we find $y = \\sqrt{15^2 - 8^2} = 12.689$.",
      "Substitute the known values: $(8)(2) + (12.689) \\frac{dy}{dt} = 0$.",
      "Solve for $\\frac{dy}{dt}$: $\\frac{dy}{dt} = -\\frac{16}{12.689} = -1.2610$.",
      "The top is sliding down at a rate of $1.261$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50061",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 15-ft ladder is leaning against a wall. The top slides down at 1.26 ft/s. How fast is the bottom sliding away when it is 8 ft from the wall?",
    "answer": "2.000 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 15^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0 \\implies x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 8$, $L = 15$, we find $y = \\sqrt{15^2 - 8^2} = 12.689$.",
      "We know $\\frac{dy}{dt} = -1.26$.",
      "Substitute the known values: $(8)\\frac{dx}{dt} + (12.689)(-1.26) = 0$.",
      "Solve for $\\frac{dx}{dt}$: $\\frac{dx}{dt} = \\frac{16.000}{8} \\approx 2.000$.",
      "The bottom is sliding away at a rate of $2.000$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50062",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 15-ft ladder leans against a wall. The bottom slides away at 2 ft/s and the top slides down at 1.26 ft/s. How far is the bottom from the wall at this moment?",
    "answer": "8.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "We are given $\\frac{dx}{dt} = 2$ and $\\frac{dy}{dt} = -1.26$. We want to find $x$.",
      "From $x^2 + y^2 = 15^2$, we know $y = \\sqrt{15^2 - x^2}$.",
      "Differentiating yields $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute: $x(2) + y(-1.26) = 0$.",
      "Therefore, $y = \\frac{2}{1.26} x$.",
      "Substitute $y$ back into $x^2 + y^2 = 15^2$: $x^2 + (\\frac{2}{1.26}x)^2 = 15^2$.",
      "Solving for $x$, we find $x = 8.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50063",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A ladder leans against a wall. At a certain instant, the bottom is 8 ft from the wall sliding away at 2 ft/s. The top is sliding down at 1.26 ft/s. What is the length of the ladder?",
    "answer": "15.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, $y$ be the height, and $L$ be the constant length of the ladder.",
      "We are given $x = 8$, $\\frac{dx}{dt} = 2$, and $\\frac{dy}{dt} = -1.26$.",
      "Since $x^2 + y^2 = L^2$, we differentiate to get $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute known values: $(8)(2) + y(-1.26) = 0$.",
      "Solve for $y$: $y = \\frac{16}{1.26} \\approx 12.689$ ft.",
      "Now use the Pythagorean theorem: $L^2 = x^2 + y^2 = (8)^2 + (12.689)^2$.",
      "$L^2 \\approx 64 + 161.000 = 225.00$.",
      "Thus, $L = \\sqrt{225.00} = 15.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50064",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 15-ft ladder is leaning against a wall. The bottom slides away at 2 ft/s. How fast is the top sliding down when the bottom is 12 ft from the wall?",
    "answer": "2.667 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 15^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 12$, $L = 15$, we find $y = \\sqrt{15^2 - 12^2} = 9.000$.",
      "Substitute the known values: $(12)(2) + (9.000) \\frac{dy}{dt} = 0$.",
      "Solve for $\\frac{dy}{dt}$: $\\frac{dy}{dt} = -\\frac{24}{9.000} = -2.6667$.",
      "The top is sliding down at a rate of $2.667$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50065",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 15-ft ladder is leaning against a wall. The top slides down at 2.67 ft/s. How fast is the bottom sliding away when it is 12 ft from the wall?",
    "answer": "2.000 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 15^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0 \\implies x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 12$, $L = 15$, we find $y = \\sqrt{15^2 - 12^2} = 9.000$.",
      "We know $\\frac{dy}{dt} = -2.67$.",
      "Substitute the known values: $(12)\\frac{dx}{dt} + (9.000)(-2.67) = 0$.",
      "Solve for $\\frac{dx}{dt}$: $\\frac{dx}{dt} = \\frac{24.000}{12} \\approx 2.000$.",
      "The bottom is sliding away at a rate of $2.000$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50066",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 15-ft ladder leans against a wall. The bottom slides away at 2 ft/s and the top slides down at 2.67 ft/s. How far is the bottom from the wall at this moment?",
    "answer": "12.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "We are given $\\frac{dx}{dt} = 2$ and $\\frac{dy}{dt} = -2.67$. We want to find $x$.",
      "From $x^2 + y^2 = 15^2$, we know $y = \\sqrt{15^2 - x^2}$.",
      "Differentiating yields $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute: $x(2) + y(-2.67) = 0$.",
      "Therefore, $y = \\frac{2}{2.67} x$.",
      "Substitute $y$ back into $x^2 + y^2 = 15^2$: $x^2 + (\\frac{2}{2.67}x)^2 = 15^2$.",
      "Solving for $x$, we find $x = 12.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50067",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A ladder leans against a wall. At a certain instant, the bottom is 12 ft from the wall sliding away at 2 ft/s. The top is sliding down at 2.67 ft/s. What is the length of the ladder?",
    "answer": "15.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, $y$ be the height, and $L$ be the constant length of the ladder.",
      "We are given $x = 12$, $\\frac{dx}{dt} = 2$, and $\\frac{dy}{dt} = -2.67$.",
      "Since $x^2 + y^2 = L^2$, we differentiate to get $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute known values: $(12)(2) + y(-2.67) = 0$.",
      "Solve for $y$: $y = \\frac{24}{2.67} \\approx 9.000$ ft.",
      "Now use the Pythagorean theorem: $L^2 = x^2 + y^2 = (12)^2 + (9.000)^2$.",
      "$L^2 \\approx 144 + 81.000 = 225.00$.",
      "Thus, $L = \\sqrt{225.00} = 15.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50068",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 20-ft ladder is leaning against a wall. The bottom slides away at 2 ft/s. How fast is the top sliding down when the bottom is 3 ft from the wall?",
    "answer": "0.303 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 20^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 3$, $L = 20$, we find $y = \\sqrt{20^2 - 3^2} = 19.774$.",
      "Substitute the known values: $(3)(2) + (19.774) \\frac{dy}{dt} = 0$.",
      "Solve for $\\frac{dy}{dt}$: $\\frac{dy}{dt} = -\\frac{6}{19.774} = -0.3034$.",
      "The top is sliding down at a rate of $0.303$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50069",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 20-ft ladder is leaning against a wall. The top slides down at 0.30 ft/s. How fast is the bottom sliding away when it is 3 ft from the wall?",
    "answer": "2.000 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 20^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0 \\implies x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 3$, $L = 20$, we find $y = \\sqrt{20^2 - 3^2} = 19.774$.",
      "We know $\\frac{dy}{dt} = -0.30$.",
      "Substitute the known values: $(3)\\frac{dx}{dt} + (19.774)(-0.30) = 0$.",
      "Solve for $\\frac{dx}{dt}$: $\\frac{dx}{dt} = \\frac{6.000}{3} \\approx 2.000$.",
      "The bottom is sliding away at a rate of $2.000$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50070",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 20-ft ladder leans against a wall. The bottom slides away at 2 ft/s and the top slides down at 0.30 ft/s. How far is the bottom from the wall at this moment?",
    "answer": "3.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "We are given $\\frac{dx}{dt} = 2$ and $\\frac{dy}{dt} = -0.30$. We want to find $x$.",
      "From $x^2 + y^2 = 20^2$, we know $y = \\sqrt{20^2 - x^2}$.",
      "Differentiating yields $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute: $x(2) + y(-0.30) = 0$.",
      "Therefore, $y = \\frac{2}{0.30} x$.",
      "Substitute $y$ back into $x^2 + y^2 = 20^2$: $x^2 + (\\frac{2}{0.30}x)^2 = 20^2$.",
      "Solving for $x$, we find $x = 3.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50071",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A ladder leans against a wall. At a certain instant, the bottom is 3 ft from the wall sliding away at 2 ft/s. The top is sliding down at 0.30 ft/s. What is the length of the ladder?",
    "answer": "20.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, $y$ be the height, and $L$ be the constant length of the ladder.",
      "We are given $x = 3$, $\\frac{dx}{dt} = 2$, and $\\frac{dy}{dt} = -0.30$.",
      "Since $x^2 + y^2 = L^2$, we differentiate to get $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute known values: $(3)(2) + y(-0.30) = 0$.",
      "Solve for $y$: $y = \\frac{6}{0.30} \\approx 19.774$ ft.",
      "Now use the Pythagorean theorem: $L^2 = x^2 + y^2 = (3)^2 + (19.774)^2$.",
      "$L^2 \\approx 9 + 391.000 = 400.00$.",
      "Thus, $L = \\sqrt{400.00} = 20.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50072",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 20-ft ladder is leaning against a wall. The bottom slides away at 2 ft/s. How fast is the top sliding down when the bottom is 4 ft from the wall?",
    "answer": "0.408 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 20^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 4$, $L = 20$, we find $y = \\sqrt{20^2 - 4^2} = 19.596$.",
      "Substitute the known values: $(4)(2) + (19.596) \\frac{dy}{dt} = 0$.",
      "Solve for $\\frac{dy}{dt}$: $\\frac{dy}{dt} = -\\frac{8}{19.596} = -0.4082$.",
      "The top is sliding down at a rate of $0.408$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50073",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 20-ft ladder is leaning against a wall. The top slides down at 0.41 ft/s. How fast is the bottom sliding away when it is 4 ft from the wall?",
    "answer": "2.000 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 20^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0 \\implies x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 4$, $L = 20$, we find $y = \\sqrt{20^2 - 4^2} = 19.596$.",
      "We know $\\frac{dy}{dt} = -0.41$.",
      "Substitute the known values: $(4)\\frac{dx}{dt} + (19.596)(-0.41) = 0$.",
      "Solve for $\\frac{dx}{dt}$: $\\frac{dx}{dt} = \\frac{8.000}{4} \\approx 2.000$.",
      "The bottom is sliding away at a rate of $2.000$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50074",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 20-ft ladder leans against a wall. The bottom slides away at 2 ft/s and the top slides down at 0.41 ft/s. How far is the bottom from the wall at this moment?",
    "answer": "4.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "We are given $\\frac{dx}{dt} = 2$ and $\\frac{dy}{dt} = -0.41$. We want to find $x$.",
      "From $x^2 + y^2 = 20^2$, we know $y = \\sqrt{20^2 - x^2}$.",
      "Differentiating yields $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute: $x(2) + y(-0.41) = 0$.",
      "Therefore, $y = \\frac{2}{0.41} x$.",
      "Substitute $y$ back into $x^2 + y^2 = 20^2$: $x^2 + (\\frac{2}{0.41}x)^2 = 20^2$.",
      "Solving for $x$, we find $x = 4.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50075",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A ladder leans against a wall. At a certain instant, the bottom is 4 ft from the wall sliding away at 2 ft/s. The top is sliding down at 0.41 ft/s. What is the length of the ladder?",
    "answer": "20.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, $y$ be the height, and $L$ be the constant length of the ladder.",
      "We are given $x = 4$, $\\frac{dx}{dt} = 2$, and $\\frac{dy}{dt} = -0.41$.",
      "Since $x^2 + y^2 = L^2$, we differentiate to get $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute known values: $(4)(2) + y(-0.41) = 0$.",
      "Solve for $y$: $y = \\frac{8}{0.41} \\approx 19.596$ ft.",
      "Now use the Pythagorean theorem: $L^2 = x^2 + y^2 = (4)^2 + (19.596)^2$.",
      "$L^2 \\approx 16 + 384.000 = 400.00$.",
      "Thus, $L = \\sqrt{400.00} = 20.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50076",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 20-ft ladder is leaning against a wall. The bottom slides away at 2 ft/s. How fast is the top sliding down when the bottom is 5 ft from the wall?",
    "answer": "0.516 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 20^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 5$, $L = 20$, we find $y = \\sqrt{20^2 - 5^2} = 19.365$.",
      "Substitute the known values: $(5)(2) + (19.365) \\frac{dy}{dt} = 0$.",
      "Solve for $\\frac{dy}{dt}$: $\\frac{dy}{dt} = -\\frac{10}{19.365} = -0.5164$.",
      "The top is sliding down at a rate of $0.516$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50077",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 20-ft ladder is leaning against a wall. The top slides down at 0.52 ft/s. How fast is the bottom sliding away when it is 5 ft from the wall?",
    "answer": "2.000 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 20^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0 \\implies x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 5$, $L = 20$, we find $y = \\sqrt{20^2 - 5^2} = 19.365$.",
      "We know $\\frac{dy}{dt} = -0.52$.",
      "Substitute the known values: $(5)\\frac{dx}{dt} + (19.365)(-0.52) = 0$.",
      "Solve for $\\frac{dx}{dt}$: $\\frac{dx}{dt} = \\frac{10.000}{5} \\approx 2.000$.",
      "The bottom is sliding away at a rate of $2.000$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50078",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 20-ft ladder leans against a wall. The bottom slides away at 2 ft/s and the top slides down at 0.52 ft/s. How far is the bottom from the wall at this moment?",
    "answer": "5.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "We are given $\\frac{dx}{dt} = 2$ and $\\frac{dy}{dt} = -0.52$. We want to find $x$.",
      "From $x^2 + y^2 = 20^2$, we know $y = \\sqrt{20^2 - x^2}$.",
      "Differentiating yields $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute: $x(2) + y(-0.52) = 0$.",
      "Therefore, $y = \\frac{2}{0.52} x$.",
      "Substitute $y$ back into $x^2 + y^2 = 20^2$: $x^2 + (\\frac{2}{0.52}x)^2 = 20^2$.",
      "Solving for $x$, we find $x = 5.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50079",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A ladder leans against a wall. At a certain instant, the bottom is 5 ft from the wall sliding away at 2 ft/s. The top is sliding down at 0.52 ft/s. What is the length of the ladder?",
    "answer": "20.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, $y$ be the height, and $L$ be the constant length of the ladder.",
      "We are given $x = 5$, $\\frac{dx}{dt} = 2$, and $\\frac{dy}{dt} = -0.52$.",
      "Since $x^2 + y^2 = L^2$, we differentiate to get $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute known values: $(5)(2) + y(-0.52) = 0$.",
      "Solve for $y$: $y = \\frac{10}{0.52} \\approx 19.365$ ft.",
      "Now use the Pythagorean theorem: $L^2 = x^2 + y^2 = (5)^2 + (19.365)^2$.",
      "$L^2 \\approx 25 + 375.000 = 400.00$.",
      "Thus, $L = \\sqrt{400.00} = 20.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50080",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 20-ft ladder is leaning against a wall. The bottom slides away at 2 ft/s. How fast is the top sliding down when the bottom is 6 ft from the wall?",
    "answer": "0.629 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 20^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 6$, $L = 20$, we find $y = \\sqrt{20^2 - 6^2} = 19.079$.",
      "Substitute the known values: $(6)(2) + (19.079) \\frac{dy}{dt} = 0$.",
      "Solve for $\\frac{dy}{dt}$: $\\frac{dy}{dt} = -\\frac{12}{19.079} = -0.6290$.",
      "The top is sliding down at a rate of $0.629$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50081",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 20-ft ladder is leaning against a wall. The top slides down at 0.63 ft/s. How fast is the bottom sliding away when it is 6 ft from the wall?",
    "answer": "2.000 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 20^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0 \\implies x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 6$, $L = 20$, we find $y = \\sqrt{20^2 - 6^2} = 19.079$.",
      "We know $\\frac{dy}{dt} = -0.63$.",
      "Substitute the known values: $(6)\\frac{dx}{dt} + (19.079)(-0.63) = 0$.",
      "Solve for $\\frac{dx}{dt}$: $\\frac{dx}{dt} = \\frac{12.000}{6} \\approx 2.000$.",
      "The bottom is sliding away at a rate of $2.000$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50082",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 20-ft ladder leans against a wall. The bottom slides away at 2 ft/s and the top slides down at 0.63 ft/s. How far is the bottom from the wall at this moment?",
    "answer": "6.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "We are given $\\frac{dx}{dt} = 2$ and $\\frac{dy}{dt} = -0.63$. We want to find $x$.",
      "From $x^2 + y^2 = 20^2$, we know $y = \\sqrt{20^2 - x^2}$.",
      "Differentiating yields $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute: $x(2) + y(-0.63) = 0$.",
      "Therefore, $y = \\frac{2}{0.63} x$.",
      "Substitute $y$ back into $x^2 + y^2 = 20^2$: $x^2 + (\\frac{2}{0.63}x)^2 = 20^2$.",
      "Solving for $x$, we find $x = 6.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50083",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A ladder leans against a wall. At a certain instant, the bottom is 6 ft from the wall sliding away at 2 ft/s. The top is sliding down at 0.63 ft/s. What is the length of the ladder?",
    "answer": "20.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, $y$ be the height, and $L$ be the constant length of the ladder.",
      "We are given $x = 6$, $\\frac{dx}{dt} = 2$, and $\\frac{dy}{dt} = -0.63$.",
      "Since $x^2 + y^2 = L^2$, we differentiate to get $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute known values: $(6)(2) + y(-0.63) = 0$.",
      "Solve for $y$: $y = \\frac{12}{0.63} \\approx 19.079$ ft.",
      "Now use the Pythagorean theorem: $L^2 = x^2 + y^2 = (6)^2 + (19.079)^2$.",
      "$L^2 \\approx 36 + 364.000 = 400.00$.",
      "Thus, $L = \\sqrt{400.00} = 20.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50084",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 20-ft ladder is leaning against a wall. The bottom slides away at 2 ft/s. How fast is the top sliding down when the bottom is 8 ft from the wall?",
    "answer": "0.873 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 20^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 8$, $L = 20$, we find $y = \\sqrt{20^2 - 8^2} = 18.330$.",
      "Substitute the known values: $(8)(2) + (18.330) \\frac{dy}{dt} = 0$.",
      "Solve for $\\frac{dy}{dt}$: $\\frac{dy}{dt} = -\\frac{16}{18.330} = -0.8729$.",
      "The top is sliding down at a rate of $0.873$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50085",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 20-ft ladder is leaning against a wall. The top slides down at 0.87 ft/s. How fast is the bottom sliding away when it is 8 ft from the wall?",
    "answer": "2.000 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 20^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0 \\implies x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 8$, $L = 20$, we find $y = \\sqrt{20^2 - 8^2} = 18.330$.",
      "We know $\\frac{dy}{dt} = -0.87$.",
      "Substitute the known values: $(8)\\frac{dx}{dt} + (18.330)(-0.87) = 0$.",
      "Solve for $\\frac{dx}{dt}$: $\\frac{dx}{dt} = \\frac{16.000}{8} \\approx 2.000$.",
      "The bottom is sliding away at a rate of $2.000$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50086",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 20-ft ladder leans against a wall. The bottom slides away at 2 ft/s and the top slides down at 0.87 ft/s. How far is the bottom from the wall at this moment?",
    "answer": "8.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "We are given $\\frac{dx}{dt} = 2$ and $\\frac{dy}{dt} = -0.87$. We want to find $x$.",
      "From $x^2 + y^2 = 20^2$, we know $y = \\sqrt{20^2 - x^2}$.",
      "Differentiating yields $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute: $x(2) + y(-0.87) = 0$.",
      "Therefore, $y = \\frac{2}{0.87} x$.",
      "Substitute $y$ back into $x^2 + y^2 = 20^2$: $x^2 + (\\frac{2}{0.87}x)^2 = 20^2$.",
      "Solving for $x$, we find $x = 8.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50087",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A ladder leans against a wall. At a certain instant, the bottom is 8 ft from the wall sliding away at 2 ft/s. The top is sliding down at 0.87 ft/s. What is the length of the ladder?",
    "answer": "20.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, $y$ be the height, and $L$ be the constant length of the ladder.",
      "We are given $x = 8$, $\\frac{dx}{dt} = 2$, and $\\frac{dy}{dt} = -0.87$.",
      "Since $x^2 + y^2 = L^2$, we differentiate to get $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute known values: $(8)(2) + y(-0.87) = 0$.",
      "Solve for $y$: $y = \\frac{16}{0.87} \\approx 18.330$ ft.",
      "Now use the Pythagorean theorem: $L^2 = x^2 + y^2 = (8)^2 + (18.330)^2$.",
      "$L^2 \\approx 64 + 336.000 = 400.00$.",
      "Thus, $L = \\sqrt{400.00} = 20.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50088",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 20-ft ladder is leaning against a wall. The bottom slides away at 2 ft/s. How fast is the top sliding down when the bottom is 12 ft from the wall?",
    "answer": "1.500 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 20^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 12$, $L = 20$, we find $y = \\sqrt{20^2 - 12^2} = 16.000$.",
      "Substitute the known values: $(12)(2) + (16.000) \\frac{dy}{dt} = 0$.",
      "Solve for $\\frac{dy}{dt}$: $\\frac{dy}{dt} = -\\frac{24}{16.000} = -1.5000$.",
      "The top is sliding down at a rate of $1.500$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50089",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 20-ft ladder is leaning against a wall. The top slides down at 1.50 ft/s. How fast is the bottom sliding away when it is 12 ft from the wall?",
    "answer": "2.000 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 20^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0 \\implies x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 12$, $L = 20$, we find $y = \\sqrt{20^2 - 12^2} = 16.000$.",
      "We know $\\frac{dy}{dt} = -1.50$.",
      "Substitute the known values: $(12)\\frac{dx}{dt} + (16.000)(-1.50) = 0$.",
      "Solve for $\\frac{dx}{dt}$: $\\frac{dx}{dt} = \\frac{24.000}{12} \\approx 2.000$.",
      "The bottom is sliding away at a rate of $2.000$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50090",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 20-ft ladder leans against a wall. The bottom slides away at 2 ft/s and the top slides down at 1.50 ft/s. How far is the bottom from the wall at this moment?",
    "answer": "12.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "We are given $\\frac{dx}{dt} = 2$ and $\\frac{dy}{dt} = -1.50$. We want to find $x$.",
      "From $x^2 + y^2 = 20^2$, we know $y = \\sqrt{20^2 - x^2}$.",
      "Differentiating yields $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute: $x(2) + y(-1.50) = 0$.",
      "Therefore, $y = \\frac{2}{1.50} x$.",
      "Substitute $y$ back into $x^2 + y^2 = 20^2$: $x^2 + (\\frac{2}{1.50}x)^2 = 20^2$.",
      "Solving for $x$, we find $x = 12.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50091",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A ladder leans against a wall. At a certain instant, the bottom is 12 ft from the wall sliding away at 2 ft/s. The top is sliding down at 1.50 ft/s. What is the length of the ladder?",
    "answer": "20.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, $y$ be the height, and $L$ be the constant length of the ladder.",
      "We are given $x = 12$, $\\frac{dx}{dt} = 2$, and $\\frac{dy}{dt} = -1.50$.",
      "Since $x^2 + y^2 = L^2$, we differentiate to get $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute known values: $(12)(2) + y(-1.50) = 0$.",
      "Solve for $y$: $y = \\frac{24}{1.50} \\approx 16.000$ ft.",
      "Now use the Pythagorean theorem: $L^2 = x^2 + y^2 = (12)^2 + (16.000)^2$.",
      "$L^2 \\approx 144 + 256.000 = 400.00$.",
      "Thus, $L = \\sqrt{400.00} = 20.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50092",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 25-ft ladder is leaning against a wall. The bottom slides away at 2 ft/s. How fast is the top sliding down when the bottom is 3 ft from the wall?",
    "answer": "0.242 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 25^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 3$, $L = 25$, we find $y = \\sqrt{25^2 - 3^2} = 24.819$.",
      "Substitute the known values: $(3)(2) + (24.819) \\frac{dy}{dt} = 0$.",
      "Solve for $\\frac{dy}{dt}$: $\\frac{dy}{dt} = -\\frac{6}{24.819} = -0.2417$.",
      "The top is sliding down at a rate of $0.242$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50093",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 25-ft ladder is leaning against a wall. The top slides down at 0.24 ft/s. How fast is the bottom sliding away when it is 3 ft from the wall?",
    "answer": "2.000 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 25^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0 \\implies x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 3$, $L = 25$, we find $y = \\sqrt{25^2 - 3^2} = 24.819$.",
      "We know $\\frac{dy}{dt} = -0.24$.",
      "Substitute the known values: $(3)\\frac{dx}{dt} + (24.819)(-0.24) = 0$.",
      "Solve for $\\frac{dx}{dt}$: $\\frac{dx}{dt} = \\frac{6.000}{3} \\approx 2.000$.",
      "The bottom is sliding away at a rate of $2.000$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50094",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 25-ft ladder leans against a wall. The bottom slides away at 2 ft/s and the top slides down at 0.24 ft/s. How far is the bottom from the wall at this moment?",
    "answer": "3.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "We are given $\\frac{dx}{dt} = 2$ and $\\frac{dy}{dt} = -0.24$. We want to find $x$.",
      "From $x^2 + y^2 = 25^2$, we know $y = \\sqrt{25^2 - x^2}$.",
      "Differentiating yields $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute: $x(2) + y(-0.24) = 0$.",
      "Therefore, $y = \\frac{2}{0.24} x$.",
      "Substitute $y$ back into $x^2 + y^2 = 25^2$: $x^2 + (\\frac{2}{0.24}x)^2 = 25^2$.",
      "Solving for $x$, we find $x = 3.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50095",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A ladder leans against a wall. At a certain instant, the bottom is 3 ft from the wall sliding away at 2 ft/s. The top is sliding down at 0.24 ft/s. What is the length of the ladder?",
    "answer": "25.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, $y$ be the height, and $L$ be the constant length of the ladder.",
      "We are given $x = 3$, $\\frac{dx}{dt} = 2$, and $\\frac{dy}{dt} = -0.24$.",
      "Since $x^2 + y^2 = L^2$, we differentiate to get $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute known values: $(3)(2) + y(-0.24) = 0$.",
      "Solve for $y$: $y = \\frac{6}{0.24} \\approx 24.819$ ft.",
      "Now use the Pythagorean theorem: $L^2 = x^2 + y^2 = (3)^2 + (24.819)^2$.",
      "$L^2 \\approx 9 + 616.000 = 625.00$.",
      "Thus, $L = \\sqrt{625.00} = 25.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50096",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 25-ft ladder is leaning against a wall. The bottom slides away at 2 ft/s. How fast is the top sliding down when the bottom is 4 ft from the wall?",
    "answer": "0.324 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 25^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 4$, $L = 25$, we find $y = \\sqrt{25^2 - 4^2} = 24.678$.",
      "Substitute the known values: $(4)(2) + (24.678) \\frac{dy}{dt} = 0$.",
      "Solve for $\\frac{dy}{dt}$: $\\frac{dy}{dt} = -\\frac{8}{24.678} = -0.3242$.",
      "The top is sliding down at a rate of $0.324$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50097",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 25-ft ladder is leaning against a wall. The top slides down at 0.32 ft/s. How fast is the bottom sliding away when it is 4 ft from the wall?",
    "answer": "2.000 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 25^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0 \\implies x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 4$, $L = 25$, we find $y = \\sqrt{25^2 - 4^2} = 24.678$.",
      "We know $\\frac{dy}{dt} = -0.32$.",
      "Substitute the known values: $(4)\\frac{dx}{dt} + (24.678)(-0.32) = 0$.",
      "Solve for $\\frac{dx}{dt}$: $\\frac{dx}{dt} = \\frac{8.000}{4} \\approx 2.000$.",
      "The bottom is sliding away at a rate of $2.000$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50098",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 25-ft ladder leans against a wall. The bottom slides away at 2 ft/s and the top slides down at 0.32 ft/s. How far is the bottom from the wall at this moment?",
    "answer": "4.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "We are given $\\frac{dx}{dt} = 2$ and $\\frac{dy}{dt} = -0.32$. We want to find $x$.",
      "From $x^2 + y^2 = 25^2$, we know $y = \\sqrt{25^2 - x^2}$.",
      "Differentiating yields $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute: $x(2) + y(-0.32) = 0$.",
      "Therefore, $y = \\frac{2}{0.32} x$.",
      "Substitute $y$ back into $x^2 + y^2 = 25^2$: $x^2 + (\\frac{2}{0.32}x)^2 = 25^2$.",
      "Solving for $x$, we find $x = 4.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50099",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A ladder leans against a wall. At a certain instant, the bottom is 4 ft from the wall sliding away at 2 ft/s. The top is sliding down at 0.32 ft/s. What is the length of the ladder?",
    "answer": "25.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, $y$ be the height, and $L$ be the constant length of the ladder.",
      "We are given $x = 4$, $\\frac{dx}{dt} = 2$, and $\\frac{dy}{dt} = -0.32$.",
      "Since $x^2 + y^2 = L^2$, we differentiate to get $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute known values: $(4)(2) + y(-0.32) = 0$.",
      "Solve for $y$: $y = \\frac{8}{0.32} \\approx 24.678$ ft.",
      "Now use the Pythagorean theorem: $L^2 = x^2 + y^2 = (4)^2 + (24.678)^2$.",
      "$L^2 \\approx 16 + 609.000 = 625.00$.",
      "Thus, $L = \\sqrt{625.00} = 25.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50100",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 25-ft ladder is leaning against a wall. The bottom slides away at 2 ft/s. How fast is the top sliding down when the bottom is 5 ft from the wall?",
    "answer": "0.408 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 25^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 5$, $L = 25$, we find $y = \\sqrt{25^2 - 5^2} = 24.495$.",
      "Substitute the known values: $(5)(2) + (24.495) \\frac{dy}{dt} = 0$.",
      "Solve for $\\frac{dy}{dt}$: $\\frac{dy}{dt} = -\\frac{10}{24.495} = -0.4082$.",
      "The top is sliding down at a rate of $0.408$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50101",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 25-ft ladder is leaning against a wall. The top slides down at 0.41 ft/s. How fast is the bottom sliding away when it is 5 ft from the wall?",
    "answer": "2.000 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 25^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0 \\implies x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 5$, $L = 25$, we find $y = \\sqrt{25^2 - 5^2} = 24.495$.",
      "We know $\\frac{dy}{dt} = -0.41$.",
      "Substitute the known values: $(5)\\frac{dx}{dt} + (24.495)(-0.41) = 0$.",
      "Solve for $\\frac{dx}{dt}$: $\\frac{dx}{dt} = \\frac{10.000}{5} \\approx 2.000$.",
      "The bottom is sliding away at a rate of $2.000$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50102",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 25-ft ladder leans against a wall. The bottom slides away at 2 ft/s and the top slides down at 0.41 ft/s. How far is the bottom from the wall at this moment?",
    "answer": "5.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "We are given $\\frac{dx}{dt} = 2$ and $\\frac{dy}{dt} = -0.41$. We want to find $x$.",
      "From $x^2 + y^2 = 25^2$, we know $y = \\sqrt{25^2 - x^2}$.",
      "Differentiating yields $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute: $x(2) + y(-0.41) = 0$.",
      "Therefore, $y = \\frac{2}{0.41} x$.",
      "Substitute $y$ back into $x^2 + y^2 = 25^2$: $x^2 + (\\frac{2}{0.41}x)^2 = 25^2$.",
      "Solving for $x$, we find $x = 5.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50103",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A ladder leans against a wall. At a certain instant, the bottom is 5 ft from the wall sliding away at 2 ft/s. The top is sliding down at 0.41 ft/s. What is the length of the ladder?",
    "answer": "25.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, $y$ be the height, and $L$ be the constant length of the ladder.",
      "We are given $x = 5$, $\\frac{dx}{dt} = 2$, and $\\frac{dy}{dt} = -0.41$.",
      "Since $x^2 + y^2 = L^2$, we differentiate to get $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute known values: $(5)(2) + y(-0.41) = 0$.",
      "Solve for $y$: $y = \\frac{10}{0.41} \\approx 24.495$ ft.",
      "Now use the Pythagorean theorem: $L^2 = x^2 + y^2 = (5)^2 + (24.495)^2$.",
      "$L^2 \\approx 25 + 600.000 = 625.00$.",
      "Thus, $L = \\sqrt{625.00} = 25.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50104",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 25-ft ladder is leaning against a wall. The bottom slides away at 2 ft/s. How fast is the top sliding down when the bottom is 6 ft from the wall?",
    "answer": "0.494 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 25^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 6$, $L = 25$, we find $y = \\sqrt{25^2 - 6^2} = 24.269$.",
      "Substitute the known values: $(6)(2) + (24.269) \\frac{dy}{dt} = 0$.",
      "Solve for $\\frac{dy}{dt}$: $\\frac{dy}{dt} = -\\frac{12}{24.269} = -0.4945$.",
      "The top is sliding down at a rate of $0.494$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50105",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 25-ft ladder is leaning against a wall. The top slides down at 0.49 ft/s. How fast is the bottom sliding away when it is 6 ft from the wall?",
    "answer": "2.000 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 25^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0 \\implies x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 6$, $L = 25$, we find $y = \\sqrt{25^2 - 6^2} = 24.269$.",
      "We know $\\frac{dy}{dt} = -0.49$.",
      "Substitute the known values: $(6)\\frac{dx}{dt} + (24.269)(-0.49) = 0$.",
      "Solve for $\\frac{dx}{dt}$: $\\frac{dx}{dt} = \\frac{12.000}{6} \\approx 2.000$.",
      "The bottom is sliding away at a rate of $2.000$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50106",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 25-ft ladder leans against a wall. The bottom slides away at 2 ft/s and the top slides down at 0.49 ft/s. How far is the bottom from the wall at this moment?",
    "answer": "6.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "We are given $\\frac{dx}{dt} = 2$ and $\\frac{dy}{dt} = -0.49$. We want to find $x$.",
      "From $x^2 + y^2 = 25^2$, we know $y = \\sqrt{25^2 - x^2}$.",
      "Differentiating yields $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute: $x(2) + y(-0.49) = 0$.",
      "Therefore, $y = \\frac{2}{0.49} x$.",
      "Substitute $y$ back into $x^2 + y^2 = 25^2$: $x^2 + (\\frac{2}{0.49}x)^2 = 25^2$.",
      "Solving for $x$, we find $x = 6.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50107",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A ladder leans against a wall. At a certain instant, the bottom is 6 ft from the wall sliding away at 2 ft/s. The top is sliding down at 0.49 ft/s. What is the length of the ladder?",
    "answer": "25.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, $y$ be the height, and $L$ be the constant length of the ladder.",
      "We are given $x = 6$, $\\frac{dx}{dt} = 2$, and $\\frac{dy}{dt} = -0.49$.",
      "Since $x^2 + y^2 = L^2$, we differentiate to get $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute known values: $(6)(2) + y(-0.49) = 0$.",
      "Solve for $y$: $y = \\frac{12}{0.49} \\approx 24.269$ ft.",
      "Now use the Pythagorean theorem: $L^2 = x^2 + y^2 = (6)^2 + (24.269)^2$.",
      "$L^2 \\approx 36 + 589.000 = 625.00$.",
      "Thus, $L = \\sqrt{625.00} = 25.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50108",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 25-ft ladder is leaning against a wall. The bottom slides away at 2 ft/s. How fast is the top sliding down when the bottom is 8 ft from the wall?",
    "answer": "0.676 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 25^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 8$, $L = 25$, we find $y = \\sqrt{25^2 - 8^2} = 23.685$.",
      "Substitute the known values: $(8)(2) + (23.685) \\frac{dy}{dt} = 0$.",
      "Solve for $\\frac{dy}{dt}$: $\\frac{dy}{dt} = -\\frac{16}{23.685} = -0.6755$.",
      "The top is sliding down at a rate of $0.676$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50109",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 25-ft ladder is leaning against a wall. The top slides down at 0.68 ft/s. How fast is the bottom sliding away when it is 8 ft from the wall?",
    "answer": "2.000 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 25^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0 \\implies x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 8$, $L = 25$, we find $y = \\sqrt{25^2 - 8^2} = 23.685$.",
      "We know $\\frac{dy}{dt} = -0.68$.",
      "Substitute the known values: $(8)\\frac{dx}{dt} + (23.685)(-0.68) = 0$.",
      "Solve for $\\frac{dx}{dt}$: $\\frac{dx}{dt} = \\frac{16.000}{8} \\approx 2.000$.",
      "The bottom is sliding away at a rate of $2.000$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50110",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 25-ft ladder leans against a wall. The bottom slides away at 2 ft/s and the top slides down at 0.68 ft/s. How far is the bottom from the wall at this moment?",
    "answer": "8.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "We are given $\\frac{dx}{dt} = 2$ and $\\frac{dy}{dt} = -0.68$. We want to find $x$.",
      "From $x^2 + y^2 = 25^2$, we know $y = \\sqrt{25^2 - x^2}$.",
      "Differentiating yields $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute: $x(2) + y(-0.68) = 0$.",
      "Therefore, $y = \\frac{2}{0.68} x$.",
      "Substitute $y$ back into $x^2 + y^2 = 25^2$: $x^2 + (\\frac{2}{0.68}x)^2 = 25^2$.",
      "Solving for $x$, we find $x = 8.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50111",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A ladder leans against a wall. At a certain instant, the bottom is 8 ft from the wall sliding away at 2 ft/s. The top is sliding down at 0.68 ft/s. What is the length of the ladder?",
    "answer": "25.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, $y$ be the height, and $L$ be the constant length of the ladder.",
      "We are given $x = 8$, $\\frac{dx}{dt} = 2$, and $\\frac{dy}{dt} = -0.68$.",
      "Since $x^2 + y^2 = L^2$, we differentiate to get $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute known values: $(8)(2) + y(-0.68) = 0$.",
      "Solve for $y$: $y = \\frac{16}{0.68} \\approx 23.685$ ft.",
      "Now use the Pythagorean theorem: $L^2 = x^2 + y^2 = (8)^2 + (23.685)^2$.",
      "$L^2 \\approx 64 + 561.000 = 625.00$.",
      "Thus, $L = \\sqrt{625.00} = 25.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50112",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 25-ft ladder is leaning against a wall. The bottom slides away at 2 ft/s. How fast is the top sliding down when the bottom is 12 ft from the wall?",
    "answer": "1.094 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 25^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 12$, $L = 25$, we find $y = \\sqrt{25^2 - 12^2} = 21.932$.",
      "Substitute the known values: $(12)(2) + (21.932) \\frac{dy}{dt} = 0$.",
      "Solve for $\\frac{dy}{dt}$: $\\frac{dy}{dt} = -\\frac{24}{21.932} = -1.0943$.",
      "The top is sliding down at a rate of $1.094$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50113",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 25-ft ladder is leaning against a wall. The top slides down at 1.09 ft/s. How fast is the bottom sliding away when it is 12 ft from the wall?",
    "answer": "2.000 ft/s",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "From the Pythagorean theorem: $x^2 + y^2 = 25^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0 \\implies x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Given $x = 12$, $L = 25$, we find $y = \\sqrt{25^2 - 12^2} = 21.932$.",
      "We know $\\frac{dy}{dt} = -1.09$.",
      "Substitute the known values: $(12)\\frac{dx}{dt} + (21.932)(-1.09) = 0$.",
      "Solve for $\\frac{dx}{dt}$: $\\frac{dx}{dt} = \\frac{24.000}{12} \\approx 2.000$.",
      "The bottom is sliding away at a rate of $2.000$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50114",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 25-ft ladder leans against a wall. The bottom slides away at 2 ft/s and the top slides down at 1.09 ft/s. How far is the bottom from the wall at this moment?",
    "answer": "12.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, and $y$ be the height on the wall.",
      "We are given $\\frac{dx}{dt} = 2$ and $\\frac{dy}{dt} = -1.09$. We want to find $x$.",
      "From $x^2 + y^2 = 25^2$, we know $y = \\sqrt{25^2 - x^2}$.",
      "Differentiating yields $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute: $x(2) + y(-1.09) = 0$.",
      "Therefore, $y = \\frac{2}{1.09} x$.",
      "Substitute $y$ back into $x^2 + y^2 = 25^2$: $x^2 + (\\frac{2}{1.09}x)^2 = 25^2$.",
      "Solving for $x$, we find $x = 12.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50115",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A ladder leans against a wall. At a certain instant, the bottom is 12 ft from the wall sliding away at 2 ft/s. The top is sliding down at 1.09 ft/s. What is the length of the ladder?",
    "answer": "25.00 ft",
    "steps": [
      "Let $x$ be the distance from the wall, $y$ be the height, and $L$ be the constant length of the ladder.",
      "We are given $x = 12$, $\\frac{dx}{dt} = 2$, and $\\frac{dy}{dt} = -1.09$.",
      "Since $x^2 + y^2 = L^2$, we differentiate to get $x \\frac{dx}{dt} + y \\frac{dy}{dt} = 0$.",
      "Substitute known values: $(12)(2) + y(-1.09) = 0$.",
      "Solve for $y$: $y = \\frac{24}{1.09} \\approx 21.932$ ft.",
      "Now use the Pythagorean theorem: $L^2 = x^2 + y^2 = (12)^2 + (21.932)^2$.",
      "$L^2 \\approx 144 + 481.000 = 625.00$.",
      "Thus, $L = \\sqrt{625.00} = 25.00$ ft."
    ]
  },
  {
    "id": "mega-app-var-50116",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Car A travels West at 30 mph. Car B travels North at 40 mph. Both leave an intersection at the same time. What is the rate of change of the distance between them after 1 hours?",
    "answer": "50.00 mph",
    "steps": [
      "Let $x$ be Car A's position, $y$ be Car B's position, and $D$ be the distance between them.",
      "Since their paths are perpendicular, $x^2 + y^2 = D^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 2D \\frac{dD}{dt}$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = D \\frac{dD}{dt}$.",
      "At $t=1$ hours, we have $x = 30(1) = 30$ and $y = 40(1) = 40$.",
      "The distance $D$ is $\\sqrt{(30)^2 + (40)^2} = 50.000$.",
      "Substitute: $(30)(30) + (40)(40) = (50.000) \\frac{dD}{dt}$.",
      "$\\frac{dD}{dt} = \\frac{2500}{50.000} = 50.00$ mph."
    ]
  },
  {
    "id": "mega-app-var-50117",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West. Car B travels North at 40 mph. Both leave the intersection simultaneously. After 1 hours, the distance between them is increasing at 50.00 mph. How fast is Car A traveling?",
    "answer": "30 mph",
    "steps": [
      "Let $x$ be Car A's displacement and $y$ be Car B's displacement. Let $D$ be the distance.",
      "We know $\\frac{dy}{dt} = 40$, $\\frac{dD}{dt} = 50.00$, $t = 1$.",
      "$y = 40 \\times 1 = 40$. Let $v_A$ be $\\frac{dx}{dt}$, then $x = v_A (1)$.",
      "Since $x^2 + y^2 = D^2$, taking derivative gives $t(v_A)(v_A) + (40)(40) = D(50.00)$.",
      "Using $D = \\sqrt{(v_A \\cdot 1)^2 + (40)^2}$, solve for $v_A$.",
      "Squaring the distance rates leads to the relation $\\sqrt{v_A^2 + 40^2} = 50.00$.",
      "Thus $v_A^2 + 1600 = 2500.00$.",
      "$v_A = \\sqrt{2500.00 - 1600} = 30$ mph."
    ]
  },
  {
    "id": "mega-app-var-50118",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West at 30 mph. Car B travels North at 40 mph. They leave the intersection at the same time. At what time will the distance between them be 50.00 miles?",
    "answer": "1 hours",
    "steps": [
      "Let distances be $x = ${v1}t$ and $y = ${v2}t$.",
      "The distance squared is $D^2 = x^2 + y^2 = (30t)^2 + (40t)^2 = 2500t^2$.",
      "Given $D = 50.00$, we have $D^2 = 2500.00$.",
      "$2500t^2 = 2500.00$.",
      "$t^2 = \\frac{2500.00}{2500} = 1$.",
      "Solving for positive time gives $t = \\sqrt{1} = 1$ hours."
    ]
  },
  {
    "id": "mega-app-var-50119",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Car A travels West at 30 mph. Car B travels North at 40 mph. Both leave an intersection at the same time. What is the rate of change of the distance between them after 2 hours?",
    "answer": "50.00 mph",
    "steps": [
      "Let $x$ be Car A's position, $y$ be Car B's position, and $D$ be the distance between them.",
      "Since their paths are perpendicular, $x^2 + y^2 = D^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 2D \\frac{dD}{dt}$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = D \\frac{dD}{dt}$.",
      "At $t=2$ hours, we have $x = 30(2) = 60$ and $y = 40(2) = 80$.",
      "The distance $D$ is $\\sqrt{(60)^2 + (80)^2} = 100.000$.",
      "Substitute: $(60)(30) + (80)(40) = (100.000) \\frac{dD}{dt}$.",
      "$\\frac{dD}{dt} = \\frac{5000}{100.000} = 50.00$ mph."
    ]
  },
  {
    "id": "mega-app-var-50120",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West. Car B travels North at 40 mph. Both leave the intersection simultaneously. After 2 hours, the distance between them is increasing at 50.00 mph. How fast is Car A traveling?",
    "answer": "30 mph",
    "steps": [
      "Let $x$ be Car A's displacement and $y$ be Car B's displacement. Let $D$ be the distance.",
      "We know $\\frac{dy}{dt} = 40$, $\\frac{dD}{dt} = 50.00$, $t = 2$.",
      "$y = 40 \\times 2 = 80$. Let $v_A$ be $\\frac{dx}{dt}$, then $x = v_A (2)$.",
      "Since $x^2 + y^2 = D^2$, taking derivative gives $t(v_A)(v_A) + (80)(40) = D(50.00)$.",
      "Using $D = \\sqrt{(v_A \\cdot 2)^2 + (80)^2}$, solve for $v_A$.",
      "Squaring the distance rates leads to the relation $\\sqrt{v_A^2 + 40^2} = 50.00$.",
      "Thus $v_A^2 + 1600 = 2500.00$.",
      "$v_A = \\sqrt{2500.00 - 1600} = 30$ mph."
    ]
  },
  {
    "id": "mega-app-var-50121",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West at 30 mph. Car B travels North at 40 mph. They leave the intersection at the same time. At what time will the distance between them be 100.00 miles?",
    "answer": "2 hours",
    "steps": [
      "Let distances be $x = ${v1}t$ and $y = ${v2}t$.",
      "The distance squared is $D^2 = x^2 + y^2 = (30t)^2 + (40t)^2 = 2500t^2$.",
      "Given $D = 100.00$, we have $D^2 = 10000.00$.",
      "$2500t^2 = 10000.00$.",
      "$t^2 = \\frac{10000.00}{2500} = 1$.",
      "Solving for positive time gives $t = \\sqrt{1} = 2$ hours."
    ]
  },
  {
    "id": "mega-app-var-50122",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Car A travels West at 30 mph. Car B travels North at 40 mph. Both leave an intersection at the same time. What is the rate of change of the distance between them after 3 hours?",
    "answer": "50.00 mph",
    "steps": [
      "Let $x$ be Car A's position, $y$ be Car B's position, and $D$ be the distance between them.",
      "Since their paths are perpendicular, $x^2 + y^2 = D^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 2D \\frac{dD}{dt}$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = D \\frac{dD}{dt}$.",
      "At $t=3$ hours, we have $x = 30(3) = 90$ and $y = 40(3) = 120$.",
      "The distance $D$ is $\\sqrt{(90)^2 + (120)^2} = 150.000$.",
      "Substitute: $(90)(30) + (120)(40) = (150.000) \\frac{dD}{dt}$.",
      "$\\frac{dD}{dt} = \\frac{7500}{150.000} = 50.00$ mph."
    ]
  },
  {
    "id": "mega-app-var-50123",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West. Car B travels North at 40 mph. Both leave the intersection simultaneously. After 3 hours, the distance between them is increasing at 50.00 mph. How fast is Car A traveling?",
    "answer": "30 mph",
    "steps": [
      "Let $x$ be Car A's displacement and $y$ be Car B's displacement. Let $D$ be the distance.",
      "We know $\\frac{dy}{dt} = 40$, $\\frac{dD}{dt} = 50.00$, $t = 3$.",
      "$y = 40 \\times 3 = 120$. Let $v_A$ be $\\frac{dx}{dt}$, then $x = v_A (3)$.",
      "Since $x^2 + y^2 = D^2$, taking derivative gives $t(v_A)(v_A) + (120)(40) = D(50.00)$.",
      "Using $D = \\sqrt{(v_A \\cdot 3)^2 + (120)^2}$, solve for $v_A$.",
      "Squaring the distance rates leads to the relation $\\sqrt{v_A^2 + 40^2} = 50.00$.",
      "Thus $v_A^2 + 1600 = 2500.00$.",
      "$v_A = \\sqrt{2500.00 - 1600} = 30$ mph."
    ]
  },
  {
    "id": "mega-app-var-50124",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West at 30 mph. Car B travels North at 40 mph. They leave the intersection at the same time. At what time will the distance between them be 150.00 miles?",
    "answer": "3 hours",
    "steps": [
      "Let distances be $x = ${v1}t$ and $y = ${v2}t$.",
      "The distance squared is $D^2 = x^2 + y^2 = (30t)^2 + (40t)^2 = 2500t^2$.",
      "Given $D = 150.00$, we have $D^2 = 22500.00$.",
      "$2500t^2 = 22500.00$.",
      "$t^2 = \\frac{22500.00}{2500} = 1$.",
      "Solving for positive time gives $t = \\sqrt{1} = 3$ hours."
    ]
  },
  {
    "id": "mega-app-var-50125",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Car A travels West at 30 mph. Car B travels North at 50 mph. Both leave an intersection at the same time. What is the rate of change of the distance between them after 1 hours?",
    "answer": "58.31 mph",
    "steps": [
      "Let $x$ be Car A's position, $y$ be Car B's position, and $D$ be the distance between them.",
      "Since their paths are perpendicular, $x^2 + y^2 = D^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 2D \\frac{dD}{dt}$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = D \\frac{dD}{dt}$.",
      "At $t=1$ hours, we have $x = 30(1) = 30$ and $y = 50(1) = 50$.",
      "The distance $D$ is $\\sqrt{(30)^2 + (50)^2} = 58.310$.",
      "Substitute: $(30)(30) + (50)(50) = (58.310) \\frac{dD}{dt}$.",
      "$\\frac{dD}{dt} = \\frac{3400}{58.310} = 58.31$ mph."
    ]
  },
  {
    "id": "mega-app-var-50126",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West. Car B travels North at 50 mph. Both leave the intersection simultaneously. After 1 hours, the distance between them is increasing at 58.31 mph. How fast is Car A traveling?",
    "answer": "30 mph",
    "steps": [
      "Let $x$ be Car A's displacement and $y$ be Car B's displacement. Let $D$ be the distance.",
      "We know $\\frac{dy}{dt} = 50$, $\\frac{dD}{dt} = 58.31$, $t = 1$.",
      "$y = 50 \\times 1 = 50$. Let $v_A$ be $\\frac{dx}{dt}$, then $x = v_A (1)$.",
      "Since $x^2 + y^2 = D^2$, taking derivative gives $t(v_A)(v_A) + (50)(50) = D(58.31)$.",
      "Using $D = \\sqrt{(v_A \\cdot 1)^2 + (50)^2}$, solve for $v_A$.",
      "Squaring the distance rates leads to the relation $\\sqrt{v_A^2 + 50^2} = 58.31$.",
      "Thus $v_A^2 + 2500 = 3400.00$.",
      "$v_A = \\sqrt{3400.00 - 2500} = 30$ mph."
    ]
  },
  {
    "id": "mega-app-var-50127",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West at 30 mph. Car B travels North at 50 mph. They leave the intersection at the same time. At what time will the distance between them be 58.31 miles?",
    "answer": "1 hours",
    "steps": [
      "Let distances be $x = ${v1}t$ and $y = ${v2}t$.",
      "The distance squared is $D^2 = x^2 + y^2 = (30t)^2 + (50t)^2 = 3400t^2$.",
      "Given $D = 58.31$, we have $D^2 = 3400.00$.",
      "$3400t^2 = 3400.00$.",
      "$t^2 = \\frac{3400.00}{3400} = 1$.",
      "Solving for positive time gives $t = \\sqrt{1} = 1$ hours."
    ]
  },
  {
    "id": "mega-app-var-50128",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Car A travels West at 30 mph. Car B travels North at 50 mph. Both leave an intersection at the same time. What is the rate of change of the distance between them after 2 hours?",
    "answer": "58.31 mph",
    "steps": [
      "Let $x$ be Car A's position, $y$ be Car B's position, and $D$ be the distance between them.",
      "Since their paths are perpendicular, $x^2 + y^2 = D^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 2D \\frac{dD}{dt}$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = D \\frac{dD}{dt}$.",
      "At $t=2$ hours, we have $x = 30(2) = 60$ and $y = 50(2) = 100$.",
      "The distance $D$ is $\\sqrt{(60)^2 + (100)^2} = 116.619$.",
      "Substitute: $(60)(30) + (100)(50) = (116.619) \\frac{dD}{dt}$.",
      "$\\frac{dD}{dt} = \\frac{6800}{116.619} = 58.31$ mph."
    ]
  },
  {
    "id": "mega-app-var-50129",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West. Car B travels North at 50 mph. Both leave the intersection simultaneously. After 2 hours, the distance between them is increasing at 58.31 mph. How fast is Car A traveling?",
    "answer": "30 mph",
    "steps": [
      "Let $x$ be Car A's displacement and $y$ be Car B's displacement. Let $D$ be the distance.",
      "We know $\\frac{dy}{dt} = 50$, $\\frac{dD}{dt} = 58.31$, $t = 2$.",
      "$y = 50 \\times 2 = 100$. Let $v_A$ be $\\frac{dx}{dt}$, then $x = v_A (2)$.",
      "Since $x^2 + y^2 = D^2$, taking derivative gives $t(v_A)(v_A) + (100)(50) = D(58.31)$.",
      "Using $D = \\sqrt{(v_A \\cdot 2)^2 + (100)^2}$, solve for $v_A$.",
      "Squaring the distance rates leads to the relation $\\sqrt{v_A^2 + 50^2} = 58.31$.",
      "Thus $v_A^2 + 2500 = 3400.00$.",
      "$v_A = \\sqrt{3400.00 - 2500} = 30$ mph."
    ]
  },
  {
    "id": "mega-app-var-50130",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West at 30 mph. Car B travels North at 50 mph. They leave the intersection at the same time. At what time will the distance between them be 116.62 miles?",
    "answer": "2 hours",
    "steps": [
      "Let distances be $x = ${v1}t$ and $y = ${v2}t$.",
      "The distance squared is $D^2 = x^2 + y^2 = (30t)^2 + (50t)^2 = 3400t^2$.",
      "Given $D = 116.62$, we have $D^2 = 13600.00$.",
      "$3400t^2 = 13600.00$.",
      "$t^2 = \\frac{13600.00}{3400} = 1$.",
      "Solving for positive time gives $t = \\sqrt{1} = 2$ hours."
    ]
  },
  {
    "id": "mega-app-var-50131",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Car A travels West at 30 mph. Car B travels North at 50 mph. Both leave an intersection at the same time. What is the rate of change of the distance between them after 3 hours?",
    "answer": "58.31 mph",
    "steps": [
      "Let $x$ be Car A's position, $y$ be Car B's position, and $D$ be the distance between them.",
      "Since their paths are perpendicular, $x^2 + y^2 = D^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 2D \\frac{dD}{dt}$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = D \\frac{dD}{dt}$.",
      "At $t=3$ hours, we have $x = 30(3) = 90$ and $y = 50(3) = 150$.",
      "The distance $D$ is $\\sqrt{(90)^2 + (150)^2} = 174.929$.",
      "Substitute: $(90)(30) + (150)(50) = (174.929) \\frac{dD}{dt}$.",
      "$\\frac{dD}{dt} = \\frac{10200}{174.929} = 58.31$ mph."
    ]
  },
  {
    "id": "mega-app-var-50132",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West. Car B travels North at 50 mph. Both leave the intersection simultaneously. After 3 hours, the distance between them is increasing at 58.31 mph. How fast is Car A traveling?",
    "answer": "30 mph",
    "steps": [
      "Let $x$ be Car A's displacement and $y$ be Car B's displacement. Let $D$ be the distance.",
      "We know $\\frac{dy}{dt} = 50$, $\\frac{dD}{dt} = 58.31$, $t = 3$.",
      "$y = 50 \\times 3 = 150$. Let $v_A$ be $\\frac{dx}{dt}$, then $x = v_A (3)$.",
      "Since $x^2 + y^2 = D^2$, taking derivative gives $t(v_A)(v_A) + (150)(50) = D(58.31)$.",
      "Using $D = \\sqrt{(v_A \\cdot 3)^2 + (150)^2}$, solve for $v_A$.",
      "Squaring the distance rates leads to the relation $\\sqrt{v_A^2 + 50^2} = 58.31$.",
      "Thus $v_A^2 + 2500 = 3400.00$.",
      "$v_A = \\sqrt{3400.00 - 2500} = 30$ mph."
    ]
  },
  {
    "id": "mega-app-var-50133",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West at 30 mph. Car B travels North at 50 mph. They leave the intersection at the same time. At what time will the distance between them be 174.93 miles?",
    "answer": "3 hours",
    "steps": [
      "Let distances be $x = ${v1}t$ and $y = ${v2}t$.",
      "The distance squared is $D^2 = x^2 + y^2 = (30t)^2 + (50t)^2 = 3400t^2$.",
      "Given $D = 174.93$, we have $D^2 = 30600.00$.",
      "$3400t^2 = 30600.00$.",
      "$t^2 = \\frac{30600.00}{3400} = 1$.",
      "Solving for positive time gives $t = \\sqrt{1} = 3$ hours."
    ]
  },
  {
    "id": "mega-app-var-50134",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Car A travels West at 30 mph. Car B travels North at 60 mph. Both leave an intersection at the same time. What is the rate of change of the distance between them after 1 hours?",
    "answer": "67.08 mph",
    "steps": [
      "Let $x$ be Car A's position, $y$ be Car B's position, and $D$ be the distance between them.",
      "Since their paths are perpendicular, $x^2 + y^2 = D^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 2D \\frac{dD}{dt}$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = D \\frac{dD}{dt}$.",
      "At $t=1$ hours, we have $x = 30(1) = 30$ and $y = 60(1) = 60$.",
      "The distance $D$ is $\\sqrt{(30)^2 + (60)^2} = 67.082$.",
      "Substitute: $(30)(30) + (60)(60) = (67.082) \\frac{dD}{dt}$.",
      "$\\frac{dD}{dt} = \\frac{4500}{67.082} = 67.08$ mph."
    ]
  },
  {
    "id": "mega-app-var-50135",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West. Car B travels North at 60 mph. Both leave the intersection simultaneously. After 1 hours, the distance between them is increasing at 67.08 mph. How fast is Car A traveling?",
    "answer": "30 mph",
    "steps": [
      "Let $x$ be Car A's displacement and $y$ be Car B's displacement. Let $D$ be the distance.",
      "We know $\\frac{dy}{dt} = 60$, $\\frac{dD}{dt} = 67.08$, $t = 1$.",
      "$y = 60 \\times 1 = 60$. Let $v_A$ be $\\frac{dx}{dt}$, then $x = v_A (1)$.",
      "Since $x^2 + y^2 = D^2$, taking derivative gives $t(v_A)(v_A) + (60)(60) = D(67.08)$.",
      "Using $D = \\sqrt{(v_A \\cdot 1)^2 + (60)^2}$, solve for $v_A$.",
      "Squaring the distance rates leads to the relation $\\sqrt{v_A^2 + 60^2} = 67.08$.",
      "Thus $v_A^2 + 3600 = 4500.00$.",
      "$v_A = \\sqrt{4500.00 - 3600} = 30$ mph."
    ]
  },
  {
    "id": "mega-app-var-50136",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West at 30 mph. Car B travels North at 60 mph. They leave the intersection at the same time. At what time will the distance between them be 67.08 miles?",
    "answer": "1 hours",
    "steps": [
      "Let distances be $x = ${v1}t$ and $y = ${v2}t$.",
      "The distance squared is $D^2 = x^2 + y^2 = (30t)^2 + (60t)^2 = 4500t^2$.",
      "Given $D = 67.08$, we have $D^2 = 4500.00$.",
      "$4500t^2 = 4500.00$.",
      "$t^2 = \\frac{4500.00}{4500} = 1$.",
      "Solving for positive time gives $t = \\sqrt{1} = 1$ hours."
    ]
  },
  {
    "id": "mega-app-var-50137",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Car A travels West at 30 mph. Car B travels North at 60 mph. Both leave an intersection at the same time. What is the rate of change of the distance between them after 2 hours?",
    "answer": "67.08 mph",
    "steps": [
      "Let $x$ be Car A's position, $y$ be Car B's position, and $D$ be the distance between them.",
      "Since their paths are perpendicular, $x^2 + y^2 = D^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 2D \\frac{dD}{dt}$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = D \\frac{dD}{dt}$.",
      "At $t=2$ hours, we have $x = 30(2) = 60$ and $y = 60(2) = 120$.",
      "The distance $D$ is $\\sqrt{(60)^2 + (120)^2} = 134.164$.",
      "Substitute: $(60)(30) + (120)(60) = (134.164) \\frac{dD}{dt}$.",
      "$\\frac{dD}{dt} = \\frac{9000}{134.164} = 67.08$ mph."
    ]
  },
  {
    "id": "mega-app-var-50138",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West. Car B travels North at 60 mph. Both leave the intersection simultaneously. After 2 hours, the distance between them is increasing at 67.08 mph. How fast is Car A traveling?",
    "answer": "30 mph",
    "steps": [
      "Let $x$ be Car A's displacement and $y$ be Car B's displacement. Let $D$ be the distance.",
      "We know $\\frac{dy}{dt} = 60$, $\\frac{dD}{dt} = 67.08$, $t = 2$.",
      "$y = 60 \\times 2 = 120$. Let $v_A$ be $\\frac{dx}{dt}$, then $x = v_A (2)$.",
      "Since $x^2 + y^2 = D^2$, taking derivative gives $t(v_A)(v_A) + (120)(60) = D(67.08)$.",
      "Using $D = \\sqrt{(v_A \\cdot 2)^2 + (120)^2}$, solve for $v_A$.",
      "Squaring the distance rates leads to the relation $\\sqrt{v_A^2 + 60^2} = 67.08$.",
      "Thus $v_A^2 + 3600 = 4500.00$.",
      "$v_A = \\sqrt{4500.00 - 3600} = 30$ mph."
    ]
  },
  {
    "id": "mega-app-var-50139",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West at 30 mph. Car B travels North at 60 mph. They leave the intersection at the same time. At what time will the distance between them be 134.16 miles?",
    "answer": "2 hours",
    "steps": [
      "Let distances be $x = ${v1}t$ and $y = ${v2}t$.",
      "The distance squared is $D^2 = x^2 + y^2 = (30t)^2 + (60t)^2 = 4500t^2$.",
      "Given $D = 134.16$, we have $D^2 = 18000.00$.",
      "$4500t^2 = 18000.00$.",
      "$t^2 = \\frac{18000.00}{4500} = 1$.",
      "Solving for positive time gives $t = \\sqrt{1} = 2$ hours."
    ]
  },
  {
    "id": "mega-app-var-50140",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Car A travels West at 30 mph. Car B travels North at 60 mph. Both leave an intersection at the same time. What is the rate of change of the distance between them after 3 hours?",
    "answer": "67.08 mph",
    "steps": [
      "Let $x$ be Car A's position, $y$ be Car B's position, and $D$ be the distance between them.",
      "Since their paths are perpendicular, $x^2 + y^2 = D^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 2D \\frac{dD}{dt}$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = D \\frac{dD}{dt}$.",
      "At $t=3$ hours, we have $x = 30(3) = 90$ and $y = 60(3) = 180$.",
      "The distance $D$ is $\\sqrt{(90)^2 + (180)^2} = 201.246$.",
      "Substitute: $(90)(30) + (180)(60) = (201.246) \\frac{dD}{dt}$.",
      "$\\frac{dD}{dt} = \\frac{13500}{201.246} = 67.08$ mph."
    ]
  },
  {
    "id": "mega-app-var-50141",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West. Car B travels North at 60 mph. Both leave the intersection simultaneously. After 3 hours, the distance between them is increasing at 67.08 mph. How fast is Car A traveling?",
    "answer": "30 mph",
    "steps": [
      "Let $x$ be Car A's displacement and $y$ be Car B's displacement. Let $D$ be the distance.",
      "We know $\\frac{dy}{dt} = 60$, $\\frac{dD}{dt} = 67.08$, $t = 3$.",
      "$y = 60 \\times 3 = 180$. Let $v_A$ be $\\frac{dx}{dt}$, then $x = v_A (3)$.",
      "Since $x^2 + y^2 = D^2$, taking derivative gives $t(v_A)(v_A) + (180)(60) = D(67.08)$.",
      "Using $D = \\sqrt{(v_A \\cdot 3)^2 + (180)^2}$, solve for $v_A$.",
      "Squaring the distance rates leads to the relation $\\sqrt{v_A^2 + 60^2} = 67.08$.",
      "Thus $v_A^2 + 3600 = 4500.00$.",
      "$v_A = \\sqrt{4500.00 - 3600} = 30$ mph."
    ]
  },
  {
    "id": "mega-app-var-50142",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West at 30 mph. Car B travels North at 60 mph. They leave the intersection at the same time. At what time will the distance between them be 201.25 miles?",
    "answer": "3 hours",
    "steps": [
      "Let distances be $x = ${v1}t$ and $y = ${v2}t$.",
      "The distance squared is $D^2 = x^2 + y^2 = (30t)^2 + (60t)^2 = 4500t^2$.",
      "Given $D = 201.25$, we have $D^2 = 40500.00$.",
      "$4500t^2 = 40500.00$.",
      "$t^2 = \\frac{40500.00}{4500} = 1$.",
      "Solving for positive time gives $t = \\sqrt{1} = 3$ hours."
    ]
  },
  {
    "id": "mega-app-var-50143",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Car A travels West at 30 mph. Car B travels North at 70 mph. Both leave an intersection at the same time. What is the rate of change of the distance between them after 1 hours?",
    "answer": "76.16 mph",
    "steps": [
      "Let $x$ be Car A's position, $y$ be Car B's position, and $D$ be the distance between them.",
      "Since their paths are perpendicular, $x^2 + y^2 = D^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 2D \\frac{dD}{dt}$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = D \\frac{dD}{dt}$.",
      "At $t=1$ hours, we have $x = 30(1) = 30$ and $y = 70(1) = 70$.",
      "The distance $D$ is $\\sqrt{(30)^2 + (70)^2} = 76.158$.",
      "Substitute: $(30)(30) + (70)(70) = (76.158) \\frac{dD}{dt}$.",
      "$\\frac{dD}{dt} = \\frac{5800}{76.158} = 76.16$ mph."
    ]
  },
  {
    "id": "mega-app-var-50144",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West. Car B travels North at 70 mph. Both leave the intersection simultaneously. After 1 hours, the distance between them is increasing at 76.16 mph. How fast is Car A traveling?",
    "answer": "30 mph",
    "steps": [
      "Let $x$ be Car A's displacement and $y$ be Car B's displacement. Let $D$ be the distance.",
      "We know $\\frac{dy}{dt} = 70$, $\\frac{dD}{dt} = 76.16$, $t = 1$.",
      "$y = 70 \\times 1 = 70$. Let $v_A$ be $\\frac{dx}{dt}$, then $x = v_A (1)$.",
      "Since $x^2 + y^2 = D^2$, taking derivative gives $t(v_A)(v_A) + (70)(70) = D(76.16)$.",
      "Using $D = \\sqrt{(v_A \\cdot 1)^2 + (70)^2}$, solve for $v_A$.",
      "Squaring the distance rates leads to the relation $\\sqrt{v_A^2 + 70^2} = 76.16$.",
      "Thus $v_A^2 + 4900 = 5800.00$.",
      "$v_A = \\sqrt{5800.00 - 4900} = 30$ mph."
    ]
  },
  {
    "id": "mega-app-var-50145",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West at 30 mph. Car B travels North at 70 mph. They leave the intersection at the same time. At what time will the distance between them be 76.16 miles?",
    "answer": "1 hours",
    "steps": [
      "Let distances be $x = ${v1}t$ and $y = ${v2}t$.",
      "The distance squared is $D^2 = x^2 + y^2 = (30t)^2 + (70t)^2 = 5800t^2$.",
      "Given $D = 76.16$, we have $D^2 = 5800.00$.",
      "$5800t^2 = 5800.00$.",
      "$t^2 = \\frac{5800.00}{5800} = 1$.",
      "Solving for positive time gives $t = \\sqrt{1} = 1$ hours."
    ]
  },
  {
    "id": "mega-app-var-50146",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Car A travels West at 30 mph. Car B travels North at 70 mph. Both leave an intersection at the same time. What is the rate of change of the distance between them after 2 hours?",
    "answer": "76.16 mph",
    "steps": [
      "Let $x$ be Car A's position, $y$ be Car B's position, and $D$ be the distance between them.",
      "Since their paths are perpendicular, $x^2 + y^2 = D^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 2D \\frac{dD}{dt}$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = D \\frac{dD}{dt}$.",
      "At $t=2$ hours, we have $x = 30(2) = 60$ and $y = 70(2) = 140$.",
      "The distance $D$ is $\\sqrt{(60)^2 + (140)^2} = 152.315$.",
      "Substitute: $(60)(30) + (140)(70) = (152.315) \\frac{dD}{dt}$.",
      "$\\frac{dD}{dt} = \\frac{11600}{152.315} = 76.16$ mph."
    ]
  },
  {
    "id": "mega-app-var-50147",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West. Car B travels North at 70 mph. Both leave the intersection simultaneously. After 2 hours, the distance between them is increasing at 76.16 mph. How fast is Car A traveling?",
    "answer": "30 mph",
    "steps": [
      "Let $x$ be Car A's displacement and $y$ be Car B's displacement. Let $D$ be the distance.",
      "We know $\\frac{dy}{dt} = 70$, $\\frac{dD}{dt} = 76.16$, $t = 2$.",
      "$y = 70 \\times 2 = 140$. Let $v_A$ be $\\frac{dx}{dt}$, then $x = v_A (2)$.",
      "Since $x^2 + y^2 = D^2$, taking derivative gives $t(v_A)(v_A) + (140)(70) = D(76.16)$.",
      "Using $D = \\sqrt{(v_A \\cdot 2)^2 + (140)^2}$, solve for $v_A$.",
      "Squaring the distance rates leads to the relation $\\sqrt{v_A^2 + 70^2} = 76.16$.",
      "Thus $v_A^2 + 4900 = 5800.00$.",
      "$v_A = \\sqrt{5800.00 - 4900} = 30$ mph."
    ]
  },
  {
    "id": "mega-app-var-50148",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West at 30 mph. Car B travels North at 70 mph. They leave the intersection at the same time. At what time will the distance between them be 152.32 miles?",
    "answer": "2 hours",
    "steps": [
      "Let distances be $x = ${v1}t$ and $y = ${v2}t$.",
      "The distance squared is $D^2 = x^2 + y^2 = (30t)^2 + (70t)^2 = 5800t^2$.",
      "Given $D = 152.32$, we have $D^2 = 23200.00$.",
      "$5800t^2 = 23200.00$.",
      "$t^2 = \\frac{23200.00}{5800} = 1$.",
      "Solving for positive time gives $t = \\sqrt{1} = 2$ hours."
    ]
  },
  {
    "id": "mega-app-var-50149",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Car A travels West at 30 mph. Car B travels North at 70 mph. Both leave an intersection at the same time. What is the rate of change of the distance between them after 3 hours?",
    "answer": "76.16 mph",
    "steps": [
      "Let $x$ be Car A's position, $y$ be Car B's position, and $D$ be the distance between them.",
      "Since their paths are perpendicular, $x^2 + y^2 = D^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 2D \\frac{dD}{dt}$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = D \\frac{dD}{dt}$.",
      "At $t=3$ hours, we have $x = 30(3) = 90$ and $y = 70(3) = 210$.",
      "The distance $D$ is $\\sqrt{(90)^2 + (210)^2} = 228.473$.",
      "Substitute: $(90)(30) + (210)(70) = (228.473) \\frac{dD}{dt}$.",
      "$\\frac{dD}{dt} = \\frac{17400}{228.473} = 76.16$ mph."
    ]
  },
  {
    "id": "mega-app-var-50150",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West. Car B travels North at 70 mph. Both leave the intersection simultaneously. After 3 hours, the distance between them is increasing at 76.16 mph. How fast is Car A traveling?",
    "answer": "30 mph",
    "steps": [
      "Let $x$ be Car A's displacement and $y$ be Car B's displacement. Let $D$ be the distance.",
      "We know $\\frac{dy}{dt} = 70$, $\\frac{dD}{dt} = 76.16$, $t = 3$.",
      "$y = 70 \\times 3 = 210$. Let $v_A$ be $\\frac{dx}{dt}$, then $x = v_A (3)$.",
      "Since $x^2 + y^2 = D^2$, taking derivative gives $t(v_A)(v_A) + (210)(70) = D(76.16)$.",
      "Using $D = \\sqrt{(v_A \\cdot 3)^2 + (210)^2}$, solve for $v_A$.",
      "Squaring the distance rates leads to the relation $\\sqrt{v_A^2 + 70^2} = 76.16$.",
      "Thus $v_A^2 + 4900 = 5800.00$.",
      "$v_A = \\sqrt{5800.00 - 4900} = 30$ mph."
    ]
  },
  {
    "id": "mega-app-var-50151",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West at 30 mph. Car B travels North at 70 mph. They leave the intersection at the same time. At what time will the distance between them be 228.47 miles?",
    "answer": "3 hours",
    "steps": [
      "Let distances be $x = ${v1}t$ and $y = ${v2}t$.",
      "The distance squared is $D^2 = x^2 + y^2 = (30t)^2 + (70t)^2 = 5800t^2$.",
      "Given $D = 228.47$, we have $D^2 = 52200.00$.",
      "$5800t^2 = 52200.00$.",
      "$t^2 = \\frac{52200.00}{5800} = 1$.",
      "Solving for positive time gives $t = \\sqrt{1} = 3$ hours."
    ]
  },
  {
    "id": "mega-app-var-50152",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Car A travels West at 40 mph. Car B travels North at 40 mph. Both leave an intersection at the same time. What is the rate of change of the distance between them after 1 hours?",
    "answer": "56.57 mph",
    "steps": [
      "Let $x$ be Car A's position, $y$ be Car B's position, and $D$ be the distance between them.",
      "Since their paths are perpendicular, $x^2 + y^2 = D^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 2D \\frac{dD}{dt}$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = D \\frac{dD}{dt}$.",
      "At $t=1$ hours, we have $x = 40(1) = 40$ and $y = 40(1) = 40$.",
      "The distance $D$ is $\\sqrt{(40)^2 + (40)^2} = 56.569$.",
      "Substitute: $(40)(40) + (40)(40) = (56.569) \\frac{dD}{dt}$.",
      "$\\frac{dD}{dt} = \\frac{3200}{56.569} = 56.57$ mph."
    ]
  },
  {
    "id": "mega-app-var-50153",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West. Car B travels North at 40 mph. Both leave the intersection simultaneously. After 1 hours, the distance between them is increasing at 56.57 mph. How fast is Car A traveling?",
    "answer": "40 mph",
    "steps": [
      "Let $x$ be Car A's displacement and $y$ be Car B's displacement. Let $D$ be the distance.",
      "We know $\\frac{dy}{dt} = 40$, $\\frac{dD}{dt} = 56.57$, $t = 1$.",
      "$y = 40 \\times 1 = 40$. Let $v_A$ be $\\frac{dx}{dt}$, then $x = v_A (1)$.",
      "Since $x^2 + y^2 = D^2$, taking derivative gives $t(v_A)(v_A) + (40)(40) = D(56.57)$.",
      "Using $D = \\sqrt{(v_A \\cdot 1)^2 + (40)^2}$, solve for $v_A$.",
      "Squaring the distance rates leads to the relation $\\sqrt{v_A^2 + 40^2} = 56.57$.",
      "Thus $v_A^2 + 1600 = 3200.00$.",
      "$v_A = \\sqrt{3200.00 - 1600} = 40$ mph."
    ]
  },
  {
    "id": "mega-app-var-50154",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West at 40 mph. Car B travels North at 40 mph. They leave the intersection at the same time. At what time will the distance between them be 56.57 miles?",
    "answer": "1 hours",
    "steps": [
      "Let distances be $x = ${v1}t$ and $y = ${v2}t$.",
      "The distance squared is $D^2 = x^2 + y^2 = (40t)^2 + (40t)^2 = 3200t^2$.",
      "Given $D = 56.57$, we have $D^2 = 3200.00$.",
      "$3200t^2 = 3200.00$.",
      "$t^2 = \\frac{3200.00}{3200} = 1$.",
      "Solving for positive time gives $t = \\sqrt{1} = 1$ hours."
    ]
  },
  {
    "id": "mega-app-var-50155",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Car A travels West at 40 mph. Car B travels North at 40 mph. Both leave an intersection at the same time. What is the rate of change of the distance between them after 2 hours?",
    "answer": "56.57 mph",
    "steps": [
      "Let $x$ be Car A's position, $y$ be Car B's position, and $D$ be the distance between them.",
      "Since their paths are perpendicular, $x^2 + y^2 = D^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 2D \\frac{dD}{dt}$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = D \\frac{dD}{dt}$.",
      "At $t=2$ hours, we have $x = 40(2) = 80$ and $y = 40(2) = 80$.",
      "The distance $D$ is $\\sqrt{(80)^2 + (80)^2} = 113.137$.",
      "Substitute: $(80)(40) + (80)(40) = (113.137) \\frac{dD}{dt}$.",
      "$\\frac{dD}{dt} = \\frac{6400}{113.137} = 56.57$ mph."
    ]
  },
  {
    "id": "mega-app-var-50156",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West. Car B travels North at 40 mph. Both leave the intersection simultaneously. After 2 hours, the distance between them is increasing at 56.57 mph. How fast is Car A traveling?",
    "answer": "40 mph",
    "steps": [
      "Let $x$ be Car A's displacement and $y$ be Car B's displacement. Let $D$ be the distance.",
      "We know $\\frac{dy}{dt} = 40$, $\\frac{dD}{dt} = 56.57$, $t = 2$.",
      "$y = 40 \\times 2 = 80$. Let $v_A$ be $\\frac{dx}{dt}$, then $x = v_A (2)$.",
      "Since $x^2 + y^2 = D^2$, taking derivative gives $t(v_A)(v_A) + (80)(40) = D(56.57)$.",
      "Using $D = \\sqrt{(v_A \\cdot 2)^2 + (80)^2}$, solve for $v_A$.",
      "Squaring the distance rates leads to the relation $\\sqrt{v_A^2 + 40^2} = 56.57$.",
      "Thus $v_A^2 + 1600 = 3200.00$.",
      "$v_A = \\sqrt{3200.00 - 1600} = 40$ mph."
    ]
  },
  {
    "id": "mega-app-var-50157",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West at 40 mph. Car B travels North at 40 mph. They leave the intersection at the same time. At what time will the distance between them be 113.14 miles?",
    "answer": "2 hours",
    "steps": [
      "Let distances be $x = ${v1}t$ and $y = ${v2}t$.",
      "The distance squared is $D^2 = x^2 + y^2 = (40t)^2 + (40t)^2 = 3200t^2$.",
      "Given $D = 113.14$, we have $D^2 = 12800.00$.",
      "$3200t^2 = 12800.00$.",
      "$t^2 = \\frac{12800.00}{3200} = 1$.",
      "Solving for positive time gives $t = \\sqrt{1} = 2$ hours."
    ]
  },
  {
    "id": "mega-app-var-50158",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Car A travels West at 40 mph. Car B travels North at 40 mph. Both leave an intersection at the same time. What is the rate of change of the distance between them after 3 hours?",
    "answer": "56.57 mph",
    "steps": [
      "Let $x$ be Car A's position, $y$ be Car B's position, and $D$ be the distance between them.",
      "Since their paths are perpendicular, $x^2 + y^2 = D^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 2D \\frac{dD}{dt}$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = D \\frac{dD}{dt}$.",
      "At $t=3$ hours, we have $x = 40(3) = 120$ and $y = 40(3) = 120$.",
      "The distance $D$ is $\\sqrt{(120)^2 + (120)^2} = 169.706$.",
      "Substitute: $(120)(40) + (120)(40) = (169.706) \\frac{dD}{dt}$.",
      "$\\frac{dD}{dt} = \\frac{9600}{169.706} = 56.57$ mph."
    ]
  },
  {
    "id": "mega-app-var-50159",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West. Car B travels North at 40 mph. Both leave the intersection simultaneously. After 3 hours, the distance between them is increasing at 56.57 mph. How fast is Car A traveling?",
    "answer": "40 mph",
    "steps": [
      "Let $x$ be Car A's displacement and $y$ be Car B's displacement. Let $D$ be the distance.",
      "We know $\\frac{dy}{dt} = 40$, $\\frac{dD}{dt} = 56.57$, $t = 3$.",
      "$y = 40 \\times 3 = 120$. Let $v_A$ be $\\frac{dx}{dt}$, then $x = v_A (3)$.",
      "Since $x^2 + y^2 = D^2$, taking derivative gives $t(v_A)(v_A) + (120)(40) = D(56.57)$.",
      "Using $D = \\sqrt{(v_A \\cdot 3)^2 + (120)^2}$, solve for $v_A$.",
      "Squaring the distance rates leads to the relation $\\sqrt{v_A^2 + 40^2} = 56.57$.",
      "Thus $v_A^2 + 1600 = 3200.00$.",
      "$v_A = \\sqrt{3200.00 - 1600} = 40$ mph."
    ]
  },
  {
    "id": "mega-app-var-50160",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West at 40 mph. Car B travels North at 40 mph. They leave the intersection at the same time. At what time will the distance between them be 169.71 miles?",
    "answer": "3 hours",
    "steps": [
      "Let distances be $x = ${v1}t$ and $y = ${v2}t$.",
      "The distance squared is $D^2 = x^2 + y^2 = (40t)^2 + (40t)^2 = 3200t^2$.",
      "Given $D = 169.71$, we have $D^2 = 28800.00$.",
      "$3200t^2 = 28800.00$.",
      "$t^2 = \\frac{28800.00}{3200} = 1$.",
      "Solving for positive time gives $t = \\sqrt{1} = 3$ hours."
    ]
  },
  {
    "id": "mega-app-var-50161",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Car A travels West at 40 mph. Car B travels North at 50 mph. Both leave an intersection at the same time. What is the rate of change of the distance between them after 1 hours?",
    "answer": "64.03 mph",
    "steps": [
      "Let $x$ be Car A's position, $y$ be Car B's position, and $D$ be the distance between them.",
      "Since their paths are perpendicular, $x^2 + y^2 = D^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 2D \\frac{dD}{dt}$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = D \\frac{dD}{dt}$.",
      "At $t=1$ hours, we have $x = 40(1) = 40$ and $y = 50(1) = 50$.",
      "The distance $D$ is $\\sqrt{(40)^2 + (50)^2} = 64.031$.",
      "Substitute: $(40)(40) + (50)(50) = (64.031) \\frac{dD}{dt}$.",
      "$\\frac{dD}{dt} = \\frac{4100}{64.031} = 64.03$ mph."
    ]
  },
  {
    "id": "mega-app-var-50162",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West. Car B travels North at 50 mph. Both leave the intersection simultaneously. After 1 hours, the distance between them is increasing at 64.03 mph. How fast is Car A traveling?",
    "answer": "40 mph",
    "steps": [
      "Let $x$ be Car A's displacement and $y$ be Car B's displacement. Let $D$ be the distance.",
      "We know $\\frac{dy}{dt} = 50$, $\\frac{dD}{dt} = 64.03$, $t = 1$.",
      "$y = 50 \\times 1 = 50$. Let $v_A$ be $\\frac{dx}{dt}$, then $x = v_A (1)$.",
      "Since $x^2 + y^2 = D^2$, taking derivative gives $t(v_A)(v_A) + (50)(50) = D(64.03)$.",
      "Using $D = \\sqrt{(v_A \\cdot 1)^2 + (50)^2}$, solve for $v_A$.",
      "Squaring the distance rates leads to the relation $\\sqrt{v_A^2 + 50^2} = 64.03$.",
      "Thus $v_A^2 + 2500 = 4100.00$.",
      "$v_A = \\sqrt{4100.00 - 2500} = 40$ mph."
    ]
  },
  {
    "id": "mega-app-var-50163",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West at 40 mph. Car B travels North at 50 mph. They leave the intersection at the same time. At what time will the distance between them be 64.03 miles?",
    "answer": "1 hours",
    "steps": [
      "Let distances be $x = ${v1}t$ and $y = ${v2}t$.",
      "The distance squared is $D^2 = x^2 + y^2 = (40t)^2 + (50t)^2 = 4100t^2$.",
      "Given $D = 64.03$, we have $D^2 = 4100.00$.",
      "$4100t^2 = 4100.00$.",
      "$t^2 = \\frac{4100.00}{4100} = 1$.",
      "Solving for positive time gives $t = \\sqrt{1} = 1$ hours."
    ]
  },
  {
    "id": "mega-app-var-50164",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Car A travels West at 40 mph. Car B travels North at 50 mph. Both leave an intersection at the same time. What is the rate of change of the distance between them after 2 hours?",
    "answer": "64.03 mph",
    "steps": [
      "Let $x$ be Car A's position, $y$ be Car B's position, and $D$ be the distance between them.",
      "Since their paths are perpendicular, $x^2 + y^2 = D^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 2D \\frac{dD}{dt}$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = D \\frac{dD}{dt}$.",
      "At $t=2$ hours, we have $x = 40(2) = 80$ and $y = 50(2) = 100$.",
      "The distance $D$ is $\\sqrt{(80)^2 + (100)^2} = 128.062$.",
      "Substitute: $(80)(40) + (100)(50) = (128.062) \\frac{dD}{dt}$.",
      "$\\frac{dD}{dt} = \\frac{8200}{128.062} = 64.03$ mph."
    ]
  },
  {
    "id": "mega-app-var-50165",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West. Car B travels North at 50 mph. Both leave the intersection simultaneously. After 2 hours, the distance between them is increasing at 64.03 mph. How fast is Car A traveling?",
    "answer": "40 mph",
    "steps": [
      "Let $x$ be Car A's displacement and $y$ be Car B's displacement. Let $D$ be the distance.",
      "We know $\\frac{dy}{dt} = 50$, $\\frac{dD}{dt} = 64.03$, $t = 2$.",
      "$y = 50 \\times 2 = 100$. Let $v_A$ be $\\frac{dx}{dt}$, then $x = v_A (2)$.",
      "Since $x^2 + y^2 = D^2$, taking derivative gives $t(v_A)(v_A) + (100)(50) = D(64.03)$.",
      "Using $D = \\sqrt{(v_A \\cdot 2)^2 + (100)^2}$, solve for $v_A$.",
      "Squaring the distance rates leads to the relation $\\sqrt{v_A^2 + 50^2} = 64.03$.",
      "Thus $v_A^2 + 2500 = 4100.00$.",
      "$v_A = \\sqrt{4100.00 - 2500} = 40$ mph."
    ]
  },
  {
    "id": "mega-app-var-50166",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West at 40 mph. Car B travels North at 50 mph. They leave the intersection at the same time. At what time will the distance between them be 128.06 miles?",
    "answer": "2 hours",
    "steps": [
      "Let distances be $x = ${v1}t$ and $y = ${v2}t$.",
      "The distance squared is $D^2 = x^2 + y^2 = (40t)^2 + (50t)^2 = 4100t^2$.",
      "Given $D = 128.06$, we have $D^2 = 16400.00$.",
      "$4100t^2 = 16400.00$.",
      "$t^2 = \\frac{16400.00}{4100} = 1$.",
      "Solving for positive time gives $t = \\sqrt{1} = 2$ hours."
    ]
  },
  {
    "id": "mega-app-var-50167",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Car A travels West at 40 mph. Car B travels North at 50 mph. Both leave an intersection at the same time. What is the rate of change of the distance between them after 3 hours?",
    "answer": "64.03 mph",
    "steps": [
      "Let $x$ be Car A's position, $y$ be Car B's position, and $D$ be the distance between them.",
      "Since their paths are perpendicular, $x^2 + y^2 = D^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 2D \\frac{dD}{dt}$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = D \\frac{dD}{dt}$.",
      "At $t=3$ hours, we have $x = 40(3) = 120$ and $y = 50(3) = 150$.",
      "The distance $D$ is $\\sqrt{(120)^2 + (150)^2} = 192.094$.",
      "Substitute: $(120)(40) + (150)(50) = (192.094) \\frac{dD}{dt}$.",
      "$\\frac{dD}{dt} = \\frac{12300}{192.094} = 64.03$ mph."
    ]
  },
  {
    "id": "mega-app-var-50168",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West. Car B travels North at 50 mph. Both leave the intersection simultaneously. After 3 hours, the distance between them is increasing at 64.03 mph. How fast is Car A traveling?",
    "answer": "40 mph",
    "steps": [
      "Let $x$ be Car A's displacement and $y$ be Car B's displacement. Let $D$ be the distance.",
      "We know $\\frac{dy}{dt} = 50$, $\\frac{dD}{dt} = 64.03$, $t = 3$.",
      "$y = 50 \\times 3 = 150$. Let $v_A$ be $\\frac{dx}{dt}$, then $x = v_A (3)$.",
      "Since $x^2 + y^2 = D^2$, taking derivative gives $t(v_A)(v_A) + (150)(50) = D(64.03)$.",
      "Using $D = \\sqrt{(v_A \\cdot 3)^2 + (150)^2}$, solve for $v_A$.",
      "Squaring the distance rates leads to the relation $\\sqrt{v_A^2 + 50^2} = 64.03$.",
      "Thus $v_A^2 + 2500 = 4100.00$.",
      "$v_A = \\sqrt{4100.00 - 2500} = 40$ mph."
    ]
  },
  {
    "id": "mega-app-var-50169",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West at 40 mph. Car B travels North at 50 mph. They leave the intersection at the same time. At what time will the distance between them be 192.09 miles?",
    "answer": "3 hours",
    "steps": [
      "Let distances be $x = ${v1}t$ and $y = ${v2}t$.",
      "The distance squared is $D^2 = x^2 + y^2 = (40t)^2 + (50t)^2 = 4100t^2$.",
      "Given $D = 192.09$, we have $D^2 = 36900.00$.",
      "$4100t^2 = 36900.00$.",
      "$t^2 = \\frac{36900.00}{4100} = 1$.",
      "Solving for positive time gives $t = \\sqrt{1} = 3$ hours."
    ]
  },
  {
    "id": "mega-app-var-50170",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Car A travels West at 40 mph. Car B travels North at 60 mph. Both leave an intersection at the same time. What is the rate of change of the distance between them after 1 hours?",
    "answer": "72.11 mph",
    "steps": [
      "Let $x$ be Car A's position, $y$ be Car B's position, and $D$ be the distance between them.",
      "Since their paths are perpendicular, $x^2 + y^2 = D^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 2D \\frac{dD}{dt}$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = D \\frac{dD}{dt}$.",
      "At $t=1$ hours, we have $x = 40(1) = 40$ and $y = 60(1) = 60$.",
      "The distance $D$ is $\\sqrt{(40)^2 + (60)^2} = 72.111$.",
      "Substitute: $(40)(40) + (60)(60) = (72.111) \\frac{dD}{dt}$.",
      "$\\frac{dD}{dt} = \\frac{5200}{72.111} = 72.11$ mph."
    ]
  },
  {
    "id": "mega-app-var-50171",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West. Car B travels North at 60 mph. Both leave the intersection simultaneously. After 1 hours, the distance between them is increasing at 72.11 mph. How fast is Car A traveling?",
    "answer": "40 mph",
    "steps": [
      "Let $x$ be Car A's displacement and $y$ be Car B's displacement. Let $D$ be the distance.",
      "We know $\\frac{dy}{dt} = 60$, $\\frac{dD}{dt} = 72.11$, $t = 1$.",
      "$y = 60 \\times 1 = 60$. Let $v_A$ be $\\frac{dx}{dt}$, then $x = v_A (1)$.",
      "Since $x^2 + y^2 = D^2$, taking derivative gives $t(v_A)(v_A) + (60)(60) = D(72.11)$.",
      "Using $D = \\sqrt{(v_A \\cdot 1)^2 + (60)^2}$, solve for $v_A$.",
      "Squaring the distance rates leads to the relation $\\sqrt{v_A^2 + 60^2} = 72.11$.",
      "Thus $v_A^2 + 3600 = 5200.00$.",
      "$v_A = \\sqrt{5200.00 - 3600} = 40$ mph."
    ]
  },
  {
    "id": "mega-app-var-50172",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West at 40 mph. Car B travels North at 60 mph. They leave the intersection at the same time. At what time will the distance between them be 72.11 miles?",
    "answer": "1 hours",
    "steps": [
      "Let distances be $x = ${v1}t$ and $y = ${v2}t$.",
      "The distance squared is $D^2 = x^2 + y^2 = (40t)^2 + (60t)^2 = 5200t^2$.",
      "Given $D = 72.11$, we have $D^2 = 5200.00$.",
      "$5200t^2 = 5200.00$.",
      "$t^2 = \\frac{5200.00}{5200} = 1$.",
      "Solving for positive time gives $t = \\sqrt{1} = 1$ hours."
    ]
  },
  {
    "id": "mega-app-var-50173",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Car A travels West at 40 mph. Car B travels North at 60 mph. Both leave an intersection at the same time. What is the rate of change of the distance between them after 2 hours?",
    "answer": "72.11 mph",
    "steps": [
      "Let $x$ be Car A's position, $y$ be Car B's position, and $D$ be the distance between them.",
      "Since their paths are perpendicular, $x^2 + y^2 = D^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 2D \\frac{dD}{dt}$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = D \\frac{dD}{dt}$.",
      "At $t=2$ hours, we have $x = 40(2) = 80$ and $y = 60(2) = 120$.",
      "The distance $D$ is $\\sqrt{(80)^2 + (120)^2} = 144.222$.",
      "Substitute: $(80)(40) + (120)(60) = (144.222) \\frac{dD}{dt}$.",
      "$\\frac{dD}{dt} = \\frac{10400}{144.222} = 72.11$ mph."
    ]
  },
  {
    "id": "mega-app-var-50174",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West. Car B travels North at 60 mph. Both leave the intersection simultaneously. After 2 hours, the distance between them is increasing at 72.11 mph. How fast is Car A traveling?",
    "answer": "40 mph",
    "steps": [
      "Let $x$ be Car A's displacement and $y$ be Car B's displacement. Let $D$ be the distance.",
      "We know $\\frac{dy}{dt} = 60$, $\\frac{dD}{dt} = 72.11$, $t = 2$.",
      "$y = 60 \\times 2 = 120$. Let $v_A$ be $\\frac{dx}{dt}$, then $x = v_A (2)$.",
      "Since $x^2 + y^2 = D^2$, taking derivative gives $t(v_A)(v_A) + (120)(60) = D(72.11)$.",
      "Using $D = \\sqrt{(v_A \\cdot 2)^2 + (120)^2}$, solve for $v_A$.",
      "Squaring the distance rates leads to the relation $\\sqrt{v_A^2 + 60^2} = 72.11$.",
      "Thus $v_A^2 + 3600 = 5200.00$.",
      "$v_A = \\sqrt{5200.00 - 3600} = 40$ mph."
    ]
  },
  {
    "id": "mega-app-var-50175",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West at 40 mph. Car B travels North at 60 mph. They leave the intersection at the same time. At what time will the distance between them be 144.22 miles?",
    "answer": "2 hours",
    "steps": [
      "Let distances be $x = ${v1}t$ and $y = ${v2}t$.",
      "The distance squared is $D^2 = x^2 + y^2 = (40t)^2 + (60t)^2 = 5200t^2$.",
      "Given $D = 144.22$, we have $D^2 = 20800.00$.",
      "$5200t^2 = 20800.00$.",
      "$t^2 = \\frac{20800.00}{5200} = 1$.",
      "Solving for positive time gives $t = \\sqrt{1} = 2$ hours."
    ]
  },
  {
    "id": "mega-app-var-50176",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Car A travels West at 40 mph. Car B travels North at 60 mph. Both leave an intersection at the same time. What is the rate of change of the distance between them after 3 hours?",
    "answer": "72.11 mph",
    "steps": [
      "Let $x$ be Car A's position, $y$ be Car B's position, and $D$ be the distance between them.",
      "Since their paths are perpendicular, $x^2 + y^2 = D^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 2D \\frac{dD}{dt}$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = D \\frac{dD}{dt}$.",
      "At $t=3$ hours, we have $x = 40(3) = 120$ and $y = 60(3) = 180$.",
      "The distance $D$ is $\\sqrt{(120)^2 + (180)^2} = 216.333$.",
      "Substitute: $(120)(40) + (180)(60) = (216.333) \\frac{dD}{dt}$.",
      "$\\frac{dD}{dt} = \\frac{15600}{216.333} = 72.11$ mph."
    ]
  },
  {
    "id": "mega-app-var-50177",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West. Car B travels North at 60 mph. Both leave the intersection simultaneously. After 3 hours, the distance between them is increasing at 72.11 mph. How fast is Car A traveling?",
    "answer": "40 mph",
    "steps": [
      "Let $x$ be Car A's displacement and $y$ be Car B's displacement. Let $D$ be the distance.",
      "We know $\\frac{dy}{dt} = 60$, $\\frac{dD}{dt} = 72.11$, $t = 3$.",
      "$y = 60 \\times 3 = 180$. Let $v_A$ be $\\frac{dx}{dt}$, then $x = v_A (3)$.",
      "Since $x^2 + y^2 = D^2$, taking derivative gives $t(v_A)(v_A) + (180)(60) = D(72.11)$.",
      "Using $D = \\sqrt{(v_A \\cdot 3)^2 + (180)^2}$, solve for $v_A$.",
      "Squaring the distance rates leads to the relation $\\sqrt{v_A^2 + 60^2} = 72.11$.",
      "Thus $v_A^2 + 3600 = 5200.00$.",
      "$v_A = \\sqrt{5200.00 - 3600} = 40$ mph."
    ]
  },
  {
    "id": "mega-app-var-50178",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West at 40 mph. Car B travels North at 60 mph. They leave the intersection at the same time. At what time will the distance between them be 216.33 miles?",
    "answer": "3 hours",
    "steps": [
      "Let distances be $x = ${v1}t$ and $y = ${v2}t$.",
      "The distance squared is $D^2 = x^2 + y^2 = (40t)^2 + (60t)^2 = 5200t^2$.",
      "Given $D = 216.33$, we have $D^2 = 46800.00$.",
      "$5200t^2 = 46800.00$.",
      "$t^2 = \\frac{46800.00}{5200} = 1$.",
      "Solving for positive time gives $t = \\sqrt{1} = 3$ hours."
    ]
  },
  {
    "id": "mega-app-var-50179",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Car A travels West at 40 mph. Car B travels North at 70 mph. Both leave an intersection at the same time. What is the rate of change of the distance between them after 1 hours?",
    "answer": "80.62 mph",
    "steps": [
      "Let $x$ be Car A's position, $y$ be Car B's position, and $D$ be the distance between them.",
      "Since their paths are perpendicular, $x^2 + y^2 = D^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 2D \\frac{dD}{dt}$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = D \\frac{dD}{dt}$.",
      "At $t=1$ hours, we have $x = 40(1) = 40$ and $y = 70(1) = 70$.",
      "The distance $D$ is $\\sqrt{(40)^2 + (70)^2} = 80.623$.",
      "Substitute: $(40)(40) + (70)(70) = (80.623) \\frac{dD}{dt}$.",
      "$\\frac{dD}{dt} = \\frac{6500}{80.623} = 80.62$ mph."
    ]
  },
  {
    "id": "mega-app-var-50180",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West. Car B travels North at 70 mph. Both leave the intersection simultaneously. After 1 hours, the distance between them is increasing at 80.62 mph. How fast is Car A traveling?",
    "answer": "40 mph",
    "steps": [
      "Let $x$ be Car A's displacement and $y$ be Car B's displacement. Let $D$ be the distance.",
      "We know $\\frac{dy}{dt} = 70$, $\\frac{dD}{dt} = 80.62$, $t = 1$.",
      "$y = 70 \\times 1 = 70$. Let $v_A$ be $\\frac{dx}{dt}$, then $x = v_A (1)$.",
      "Since $x^2 + y^2 = D^2$, taking derivative gives $t(v_A)(v_A) + (70)(70) = D(80.62)$.",
      "Using $D = \\sqrt{(v_A \\cdot 1)^2 + (70)^2}$, solve for $v_A$.",
      "Squaring the distance rates leads to the relation $\\sqrt{v_A^2 + 70^2} = 80.62$.",
      "Thus $v_A^2 + 4900 = 6500.00$.",
      "$v_A = \\sqrt{6500.00 - 4900} = 40$ mph."
    ]
  },
  {
    "id": "mega-app-var-50181",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West at 40 mph. Car B travels North at 70 mph. They leave the intersection at the same time. At what time will the distance between them be 80.62 miles?",
    "answer": "1 hours",
    "steps": [
      "Let distances be $x = ${v1}t$ and $y = ${v2}t$.",
      "The distance squared is $D^2 = x^2 + y^2 = (40t)^2 + (70t)^2 = 6500t^2$.",
      "Given $D = 80.62$, we have $D^2 = 6500.00$.",
      "$6500t^2 = 6500.00$.",
      "$t^2 = \\frac{6500.00}{6500} = 1$.",
      "Solving for positive time gives $t = \\sqrt{1} = 1$ hours."
    ]
  },
  {
    "id": "mega-app-var-50182",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Car A travels West at 40 mph. Car B travels North at 70 mph. Both leave an intersection at the same time. What is the rate of change of the distance between them after 2 hours?",
    "answer": "80.62 mph",
    "steps": [
      "Let $x$ be Car A's position, $y$ be Car B's position, and $D$ be the distance between them.",
      "Since their paths are perpendicular, $x^2 + y^2 = D^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 2D \\frac{dD}{dt}$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = D \\frac{dD}{dt}$.",
      "At $t=2$ hours, we have $x = 40(2) = 80$ and $y = 70(2) = 140$.",
      "The distance $D$ is $\\sqrt{(80)^2 + (140)^2} = 161.245$.",
      "Substitute: $(80)(40) + (140)(70) = (161.245) \\frac{dD}{dt}$.",
      "$\\frac{dD}{dt} = \\frac{13000}{161.245} = 80.62$ mph."
    ]
  },
  {
    "id": "mega-app-var-50183",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West. Car B travels North at 70 mph. Both leave the intersection simultaneously. After 2 hours, the distance between them is increasing at 80.62 mph. How fast is Car A traveling?",
    "answer": "40 mph",
    "steps": [
      "Let $x$ be Car A's displacement and $y$ be Car B's displacement. Let $D$ be the distance.",
      "We know $\\frac{dy}{dt} = 70$, $\\frac{dD}{dt} = 80.62$, $t = 2$.",
      "$y = 70 \\times 2 = 140$. Let $v_A$ be $\\frac{dx}{dt}$, then $x = v_A (2)$.",
      "Since $x^2 + y^2 = D^2$, taking derivative gives $t(v_A)(v_A) + (140)(70) = D(80.62)$.",
      "Using $D = \\sqrt{(v_A \\cdot 2)^2 + (140)^2}$, solve for $v_A$.",
      "Squaring the distance rates leads to the relation $\\sqrt{v_A^2 + 70^2} = 80.62$.",
      "Thus $v_A^2 + 4900 = 6500.00$.",
      "$v_A = \\sqrt{6500.00 - 4900} = 40$ mph."
    ]
  },
  {
    "id": "mega-app-var-50184",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West at 40 mph. Car B travels North at 70 mph. They leave the intersection at the same time. At what time will the distance between them be 161.25 miles?",
    "answer": "2 hours",
    "steps": [
      "Let distances be $x = ${v1}t$ and $y = ${v2}t$.",
      "The distance squared is $D^2 = x^2 + y^2 = (40t)^2 + (70t)^2 = 6500t^2$.",
      "Given $D = 161.25$, we have $D^2 = 26000.00$.",
      "$6500t^2 = 26000.00$.",
      "$t^2 = \\frac{26000.00}{6500} = 1$.",
      "Solving for positive time gives $t = \\sqrt{1} = 2$ hours."
    ]
  },
  {
    "id": "mega-app-var-50185",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Car A travels West at 40 mph. Car B travels North at 70 mph. Both leave an intersection at the same time. What is the rate of change of the distance between them after 3 hours?",
    "answer": "80.62 mph",
    "steps": [
      "Let $x$ be Car A's position, $y$ be Car B's position, and $D$ be the distance between them.",
      "Since their paths are perpendicular, $x^2 + y^2 = D^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 2D \\frac{dD}{dt}$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = D \\frac{dD}{dt}$.",
      "At $t=3$ hours, we have $x = 40(3) = 120$ and $y = 70(3) = 210$.",
      "The distance $D$ is $\\sqrt{(120)^2 + (210)^2} = 241.868$.",
      "Substitute: $(120)(40) + (210)(70) = (241.868) \\frac{dD}{dt}$.",
      "$\\frac{dD}{dt} = \\frac{19500}{241.868} = 80.62$ mph."
    ]
  },
  {
    "id": "mega-app-var-50186",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West. Car B travels North at 70 mph. Both leave the intersection simultaneously. After 3 hours, the distance between them is increasing at 80.62 mph. How fast is Car A traveling?",
    "answer": "40 mph",
    "steps": [
      "Let $x$ be Car A's displacement and $y$ be Car B's displacement. Let $D$ be the distance.",
      "We know $\\frac{dy}{dt} = 70$, $\\frac{dD}{dt} = 80.62$, $t = 3$.",
      "$y = 70 \\times 3 = 210$. Let $v_A$ be $\\frac{dx}{dt}$, then $x = v_A (3)$.",
      "Since $x^2 + y^2 = D^2$, taking derivative gives $t(v_A)(v_A) + (210)(70) = D(80.62)$.",
      "Using $D = \\sqrt{(v_A \\cdot 3)^2 + (210)^2}$, solve for $v_A$.",
      "Squaring the distance rates leads to the relation $\\sqrt{v_A^2 + 70^2} = 80.62$.",
      "Thus $v_A^2 + 4900 = 6500.00$.",
      "$v_A = \\sqrt{6500.00 - 4900} = 40$ mph."
    ]
  },
  {
    "id": "mega-app-var-50187",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West at 40 mph. Car B travels North at 70 mph. They leave the intersection at the same time. At what time will the distance between them be 241.87 miles?",
    "answer": "3 hours",
    "steps": [
      "Let distances be $x = ${v1}t$ and $y = ${v2}t$.",
      "The distance squared is $D^2 = x^2 + y^2 = (40t)^2 + (70t)^2 = 6500t^2$.",
      "Given $D = 241.87$, we have $D^2 = 58500.00$.",
      "$6500t^2 = 58500.00$.",
      "$t^2 = \\frac{58500.00}{6500} = 1$.",
      "Solving for positive time gives $t = \\sqrt{1} = 3$ hours."
    ]
  },
  {
    "id": "mega-app-var-50188",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Car A travels West at 50 mph. Car B travels North at 40 mph. Both leave an intersection at the same time. What is the rate of change of the distance between them after 1 hours?",
    "answer": "64.03 mph",
    "steps": [
      "Let $x$ be Car A's position, $y$ be Car B's position, and $D$ be the distance between them.",
      "Since their paths are perpendicular, $x^2 + y^2 = D^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 2D \\frac{dD}{dt}$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = D \\frac{dD}{dt}$.",
      "At $t=1$ hours, we have $x = 50(1) = 50$ and $y = 40(1) = 40$.",
      "The distance $D$ is $\\sqrt{(50)^2 + (40)^2} = 64.031$.",
      "Substitute: $(50)(50) + (40)(40) = (64.031) \\frac{dD}{dt}$.",
      "$\\frac{dD}{dt} = \\frac{4100}{64.031} = 64.03$ mph."
    ]
  },
  {
    "id": "mega-app-var-50189",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West. Car B travels North at 40 mph. Both leave the intersection simultaneously. After 1 hours, the distance between them is increasing at 64.03 mph. How fast is Car A traveling?",
    "answer": "50 mph",
    "steps": [
      "Let $x$ be Car A's displacement and $y$ be Car B's displacement. Let $D$ be the distance.",
      "We know $\\frac{dy}{dt} = 40$, $\\frac{dD}{dt} = 64.03$, $t = 1$.",
      "$y = 40 \\times 1 = 40$. Let $v_A$ be $\\frac{dx}{dt}$, then $x = v_A (1)$.",
      "Since $x^2 + y^2 = D^2$, taking derivative gives $t(v_A)(v_A) + (40)(40) = D(64.03)$.",
      "Using $D = \\sqrt{(v_A \\cdot 1)^2 + (40)^2}$, solve for $v_A$.",
      "Squaring the distance rates leads to the relation $\\sqrt{v_A^2 + 40^2} = 64.03$.",
      "Thus $v_A^2 + 1600 = 4100.00$.",
      "$v_A = \\sqrt{4100.00 - 1600} = 50$ mph."
    ]
  },
  {
    "id": "mega-app-var-50190",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West at 50 mph. Car B travels North at 40 mph. They leave the intersection at the same time. At what time will the distance between them be 64.03 miles?",
    "answer": "1 hours",
    "steps": [
      "Let distances be $x = ${v1}t$ and $y = ${v2}t$.",
      "The distance squared is $D^2 = x^2 + y^2 = (50t)^2 + (40t)^2 = 4100t^2$.",
      "Given $D = 64.03$, we have $D^2 = 4100.00$.",
      "$4100t^2 = 4100.00$.",
      "$t^2 = \\frac{4100.00}{4100} = 1$.",
      "Solving for positive time gives $t = \\sqrt{1} = 1$ hours."
    ]
  },
  {
    "id": "mega-app-var-50191",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Car A travels West at 50 mph. Car B travels North at 40 mph. Both leave an intersection at the same time. What is the rate of change of the distance between them after 2 hours?",
    "answer": "64.03 mph",
    "steps": [
      "Let $x$ be Car A's position, $y$ be Car B's position, and $D$ be the distance between them.",
      "Since their paths are perpendicular, $x^2 + y^2 = D^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 2D \\frac{dD}{dt}$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = D \\frac{dD}{dt}$.",
      "At $t=2$ hours, we have $x = 50(2) = 100$ and $y = 40(2) = 80$.",
      "The distance $D$ is $\\sqrt{(100)^2 + (80)^2} = 128.062$.",
      "Substitute: $(100)(50) + (80)(40) = (128.062) \\frac{dD}{dt}$.",
      "$\\frac{dD}{dt} = \\frac{8200}{128.062} = 64.03$ mph."
    ]
  },
  {
    "id": "mega-app-var-50192",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West. Car B travels North at 40 mph. Both leave the intersection simultaneously. After 2 hours, the distance between them is increasing at 64.03 mph. How fast is Car A traveling?",
    "answer": "50 mph",
    "steps": [
      "Let $x$ be Car A's displacement and $y$ be Car B's displacement. Let $D$ be the distance.",
      "We know $\\frac{dy}{dt} = 40$, $\\frac{dD}{dt} = 64.03$, $t = 2$.",
      "$y = 40 \\times 2 = 80$. Let $v_A$ be $\\frac{dx}{dt}$, then $x = v_A (2)$.",
      "Since $x^2 + y^2 = D^2$, taking derivative gives $t(v_A)(v_A) + (80)(40) = D(64.03)$.",
      "Using $D = \\sqrt{(v_A \\cdot 2)^2 + (80)^2}$, solve for $v_A$.",
      "Squaring the distance rates leads to the relation $\\sqrt{v_A^2 + 40^2} = 64.03$.",
      "Thus $v_A^2 + 1600 = 4100.00$.",
      "$v_A = \\sqrt{4100.00 - 1600} = 50$ mph."
    ]
  },
  {
    "id": "mega-app-var-50193",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West at 50 mph. Car B travels North at 40 mph. They leave the intersection at the same time. At what time will the distance between them be 128.06 miles?",
    "answer": "2 hours",
    "steps": [
      "Let distances be $x = ${v1}t$ and $y = ${v2}t$.",
      "The distance squared is $D^2 = x^2 + y^2 = (50t)^2 + (40t)^2 = 4100t^2$.",
      "Given $D = 128.06$, we have $D^2 = 16400.00$.",
      "$4100t^2 = 16400.00$.",
      "$t^2 = \\frac{16400.00}{4100} = 1$.",
      "Solving for positive time gives $t = \\sqrt{1} = 2$ hours."
    ]
  },
  {
    "id": "mega-app-var-50194",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Car A travels West at 50 mph. Car B travels North at 40 mph. Both leave an intersection at the same time. What is the rate of change of the distance between them after 3 hours?",
    "answer": "64.03 mph",
    "steps": [
      "Let $x$ be Car A's position, $y$ be Car B's position, and $D$ be the distance between them.",
      "Since their paths are perpendicular, $x^2 + y^2 = D^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 2D \\frac{dD}{dt}$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = D \\frac{dD}{dt}$.",
      "At $t=3$ hours, we have $x = 50(3) = 150$ and $y = 40(3) = 120$.",
      "The distance $D$ is $\\sqrt{(150)^2 + (120)^2} = 192.094$.",
      "Substitute: $(150)(50) + (120)(40) = (192.094) \\frac{dD}{dt}$.",
      "$\\frac{dD}{dt} = \\frac{12300}{192.094} = 64.03$ mph."
    ]
  },
  {
    "id": "mega-app-var-50195",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West. Car B travels North at 40 mph. Both leave the intersection simultaneously. After 3 hours, the distance between them is increasing at 64.03 mph. How fast is Car A traveling?",
    "answer": "50 mph",
    "steps": [
      "Let $x$ be Car A's displacement and $y$ be Car B's displacement. Let $D$ be the distance.",
      "We know $\\frac{dy}{dt} = 40$, $\\frac{dD}{dt} = 64.03$, $t = 3$.",
      "$y = 40 \\times 3 = 120$. Let $v_A$ be $\\frac{dx}{dt}$, then $x = v_A (3)$.",
      "Since $x^2 + y^2 = D^2$, taking derivative gives $t(v_A)(v_A) + (120)(40) = D(64.03)$.",
      "Using $D = \\sqrt{(v_A \\cdot 3)^2 + (120)^2}$, solve for $v_A$.",
      "Squaring the distance rates leads to the relation $\\sqrt{v_A^2 + 40^2} = 64.03$.",
      "Thus $v_A^2 + 1600 = 4100.00$.",
      "$v_A = \\sqrt{4100.00 - 1600} = 50$ mph."
    ]
  },
  {
    "id": "mega-app-var-50196",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West at 50 mph. Car B travels North at 40 mph. They leave the intersection at the same time. At what time will the distance between them be 192.09 miles?",
    "answer": "3 hours",
    "steps": [
      "Let distances be $x = ${v1}t$ and $y = ${v2}t$.",
      "The distance squared is $D^2 = x^2 + y^2 = (50t)^2 + (40t)^2 = 4100t^2$.",
      "Given $D = 192.09$, we have $D^2 = 36900.00$.",
      "$4100t^2 = 36900.00$.",
      "$t^2 = \\frac{36900.00}{4100} = 1$.",
      "Solving for positive time gives $t = \\sqrt{1} = 3$ hours."
    ]
  },
  {
    "id": "mega-app-var-50197",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Car A travels West at 50 mph. Car B travels North at 50 mph. Both leave an intersection at the same time. What is the rate of change of the distance between them after 1 hours?",
    "answer": "70.71 mph",
    "steps": [
      "Let $x$ be Car A's position, $y$ be Car B's position, and $D$ be the distance between them.",
      "Since their paths are perpendicular, $x^2 + y^2 = D^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 2D \\frac{dD}{dt}$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = D \\frac{dD}{dt}$.",
      "At $t=1$ hours, we have $x = 50(1) = 50$ and $y = 50(1) = 50$.",
      "The distance $D$ is $\\sqrt{(50)^2 + (50)^2} = 70.711$.",
      "Substitute: $(50)(50) + (50)(50) = (70.711) \\frac{dD}{dt}$.",
      "$\\frac{dD}{dt} = \\frac{5000}{70.711} = 70.71$ mph."
    ]
  },
  {
    "id": "mega-app-var-50198",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West. Car B travels North at 50 mph. Both leave the intersection simultaneously. After 1 hours, the distance between them is increasing at 70.71 mph. How fast is Car A traveling?",
    "answer": "50 mph",
    "steps": [
      "Let $x$ be Car A's displacement and $y$ be Car B's displacement. Let $D$ be the distance.",
      "We know $\\frac{dy}{dt} = 50$, $\\frac{dD}{dt} = 70.71$, $t = 1$.",
      "$y = 50 \\times 1 = 50$. Let $v_A$ be $\\frac{dx}{dt}$, then $x = v_A (1)$.",
      "Since $x^2 + y^2 = D^2$, taking derivative gives $t(v_A)(v_A) + (50)(50) = D(70.71)$.",
      "Using $D = \\sqrt{(v_A \\cdot 1)^2 + (50)^2}$, solve for $v_A$.",
      "Squaring the distance rates leads to the relation $\\sqrt{v_A^2 + 50^2} = 70.71$.",
      "Thus $v_A^2 + 2500 = 5000.00$.",
      "$v_A = \\sqrt{5000.00 - 2500} = 50$ mph."
    ]
  },
  {
    "id": "mega-app-var-50199",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West at 50 mph. Car B travels North at 50 mph. They leave the intersection at the same time. At what time will the distance between them be 70.71 miles?",
    "answer": "1 hours",
    "steps": [
      "Let distances be $x = ${v1}t$ and $y = ${v2}t$.",
      "The distance squared is $D^2 = x^2 + y^2 = (50t)^2 + (50t)^2 = 5000t^2$.",
      "Given $D = 70.71$, we have $D^2 = 5000.00$.",
      "$5000t^2 = 5000.00$.",
      "$t^2 = \\frac{5000.00}{5000} = 1$.",
      "Solving for positive time gives $t = \\sqrt{1} = 1$ hours."
    ]
  },
  {
    "id": "mega-app-var-50200",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Car A travels West at 50 mph. Car B travels North at 50 mph. Both leave an intersection at the same time. What is the rate of change of the distance between them after 2 hours?",
    "answer": "70.71 mph",
    "steps": [
      "Let $x$ be Car A's position, $y$ be Car B's position, and $D$ be the distance between them.",
      "Since their paths are perpendicular, $x^2 + y^2 = D^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 2D \\frac{dD}{dt}$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = D \\frac{dD}{dt}$.",
      "At $t=2$ hours, we have $x = 50(2) = 100$ and $y = 50(2) = 100$.",
      "The distance $D$ is $\\sqrt{(100)^2 + (100)^2} = 141.421$.",
      "Substitute: $(100)(50) + (100)(50) = (141.421) \\frac{dD}{dt}$.",
      "$\\frac{dD}{dt} = \\frac{10000}{141.421} = 70.71$ mph."
    ]
  },
  {
    "id": "mega-app-var-50201",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West. Car B travels North at 50 mph. Both leave the intersection simultaneously. After 2 hours, the distance between them is increasing at 70.71 mph. How fast is Car A traveling?",
    "answer": "50 mph",
    "steps": [
      "Let $x$ be Car A's displacement and $y$ be Car B's displacement. Let $D$ be the distance.",
      "We know $\\frac{dy}{dt} = 50$, $\\frac{dD}{dt} = 70.71$, $t = 2$.",
      "$y = 50 \\times 2 = 100$. Let $v_A$ be $\\frac{dx}{dt}$, then $x = v_A (2)$.",
      "Since $x^2 + y^2 = D^2$, taking derivative gives $t(v_A)(v_A) + (100)(50) = D(70.71)$.",
      "Using $D = \\sqrt{(v_A \\cdot 2)^2 + (100)^2}$, solve for $v_A$.",
      "Squaring the distance rates leads to the relation $\\sqrt{v_A^2 + 50^2} = 70.71$.",
      "Thus $v_A^2 + 2500 = 5000.00$.",
      "$v_A = \\sqrt{5000.00 - 2500} = 50$ mph."
    ]
  },
  {
    "id": "mega-app-var-50202",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West at 50 mph. Car B travels North at 50 mph. They leave the intersection at the same time. At what time will the distance between them be 141.42 miles?",
    "answer": "2 hours",
    "steps": [
      "Let distances be $x = ${v1}t$ and $y = ${v2}t$.",
      "The distance squared is $D^2 = x^2 + y^2 = (50t)^2 + (50t)^2 = 5000t^2$.",
      "Given $D = 141.42$, we have $D^2 = 20000.00$.",
      "$5000t^2 = 20000.00$.",
      "$t^2 = \\frac{20000.00}{5000} = 1$.",
      "Solving for positive time gives $t = \\sqrt{1} = 2$ hours."
    ]
  },
  {
    "id": "mega-app-var-50203",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Car A travels West at 50 mph. Car B travels North at 50 mph. Both leave an intersection at the same time. What is the rate of change of the distance between them after 3 hours?",
    "answer": "70.71 mph",
    "steps": [
      "Let $x$ be Car A's position, $y$ be Car B's position, and $D$ be the distance between them.",
      "Since their paths are perpendicular, $x^2 + y^2 = D^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 2D \\frac{dD}{dt}$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = D \\frac{dD}{dt}$.",
      "At $t=3$ hours, we have $x = 50(3) = 150$ and $y = 50(3) = 150$.",
      "The distance $D$ is $\\sqrt{(150)^2 + (150)^2} = 212.132$.",
      "Substitute: $(150)(50) + (150)(50) = (212.132) \\frac{dD}{dt}$.",
      "$\\frac{dD}{dt} = \\frac{15000}{212.132} = 70.71$ mph."
    ]
  },
  {
    "id": "mega-app-var-50204",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West. Car B travels North at 50 mph. Both leave the intersection simultaneously. After 3 hours, the distance between them is increasing at 70.71 mph. How fast is Car A traveling?",
    "answer": "50 mph",
    "steps": [
      "Let $x$ be Car A's displacement and $y$ be Car B's displacement. Let $D$ be the distance.",
      "We know $\\frac{dy}{dt} = 50$, $\\frac{dD}{dt} = 70.71$, $t = 3$.",
      "$y = 50 \\times 3 = 150$. Let $v_A$ be $\\frac{dx}{dt}$, then $x = v_A (3)$.",
      "Since $x^2 + y^2 = D^2$, taking derivative gives $t(v_A)(v_A) + (150)(50) = D(70.71)$.",
      "Using $D = \\sqrt{(v_A \\cdot 3)^2 + (150)^2}$, solve for $v_A$.",
      "Squaring the distance rates leads to the relation $\\sqrt{v_A^2 + 50^2} = 70.71$.",
      "Thus $v_A^2 + 2500 = 5000.00$.",
      "$v_A = \\sqrt{5000.00 - 2500} = 50$ mph."
    ]
  },
  {
    "id": "mega-app-var-50205",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West at 50 mph. Car B travels North at 50 mph. They leave the intersection at the same time. At what time will the distance between them be 212.13 miles?",
    "answer": "3 hours",
    "steps": [
      "Let distances be $x = ${v1}t$ and $y = ${v2}t$.",
      "The distance squared is $D^2 = x^2 + y^2 = (50t)^2 + (50t)^2 = 5000t^2$.",
      "Given $D = 212.13$, we have $D^2 = 45000.00$.",
      "$5000t^2 = 45000.00$.",
      "$t^2 = \\frac{45000.00}{5000} = 1$.",
      "Solving for positive time gives $t = \\sqrt{1} = 3$ hours."
    ]
  },
  {
    "id": "mega-app-var-50206",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Car A travels West at 50 mph. Car B travels North at 60 mph. Both leave an intersection at the same time. What is the rate of change of the distance between them after 1 hours?",
    "answer": "78.10 mph",
    "steps": [
      "Let $x$ be Car A's position, $y$ be Car B's position, and $D$ be the distance between them.",
      "Since their paths are perpendicular, $x^2 + y^2 = D^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 2D \\frac{dD}{dt}$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = D \\frac{dD}{dt}$.",
      "At $t=1$ hours, we have $x = 50(1) = 50$ and $y = 60(1) = 60$.",
      "The distance $D$ is $\\sqrt{(50)^2 + (60)^2} = 78.102$.",
      "Substitute: $(50)(50) + (60)(60) = (78.102) \\frac{dD}{dt}$.",
      "$\\frac{dD}{dt} = \\frac{6100}{78.102} = 78.10$ mph."
    ]
  },
  {
    "id": "mega-app-var-50207",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West. Car B travels North at 60 mph. Both leave the intersection simultaneously. After 1 hours, the distance between them is increasing at 78.10 mph. How fast is Car A traveling?",
    "answer": "50 mph",
    "steps": [
      "Let $x$ be Car A's displacement and $y$ be Car B's displacement. Let $D$ be the distance.",
      "We know $\\frac{dy}{dt} = 60$, $\\frac{dD}{dt} = 78.10$, $t = 1$.",
      "$y = 60 \\times 1 = 60$. Let $v_A$ be $\\frac{dx}{dt}$, then $x = v_A (1)$.",
      "Since $x^2 + y^2 = D^2$, taking derivative gives $t(v_A)(v_A) + (60)(60) = D(78.10)$.",
      "Using $D = \\sqrt{(v_A \\cdot 1)^2 + (60)^2}$, solve for $v_A$.",
      "Squaring the distance rates leads to the relation $\\sqrt{v_A^2 + 60^2} = 78.10$.",
      "Thus $v_A^2 + 3600 = 6100.00$.",
      "$v_A = \\sqrt{6100.00 - 3600} = 50$ mph."
    ]
  },
  {
    "id": "mega-app-var-50208",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West at 50 mph. Car B travels North at 60 mph. They leave the intersection at the same time. At what time will the distance between them be 78.10 miles?",
    "answer": "1 hours",
    "steps": [
      "Let distances be $x = ${v1}t$ and $y = ${v2}t$.",
      "The distance squared is $D^2 = x^2 + y^2 = (50t)^2 + (60t)^2 = 6100t^2$.",
      "Given $D = 78.10$, we have $D^2 = 6100.00$.",
      "$6100t^2 = 6100.00$.",
      "$t^2 = \\frac{6100.00}{6100} = 1$.",
      "Solving for positive time gives $t = \\sqrt{1} = 1$ hours."
    ]
  },
  {
    "id": "mega-app-var-50209",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Car A travels West at 50 mph. Car B travels North at 60 mph. Both leave an intersection at the same time. What is the rate of change of the distance between them after 2 hours?",
    "answer": "78.10 mph",
    "steps": [
      "Let $x$ be Car A's position, $y$ be Car B's position, and $D$ be the distance between them.",
      "Since their paths are perpendicular, $x^2 + y^2 = D^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 2D \\frac{dD}{dt}$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = D \\frac{dD}{dt}$.",
      "At $t=2$ hours, we have $x = 50(2) = 100$ and $y = 60(2) = 120$.",
      "The distance $D$ is $\\sqrt{(100)^2 + (120)^2} = 156.205$.",
      "Substitute: $(100)(50) + (120)(60) = (156.205) \\frac{dD}{dt}$.",
      "$\\frac{dD}{dt} = \\frac{12200}{156.205} = 78.10$ mph."
    ]
  },
  {
    "id": "mega-app-var-50210",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West. Car B travels North at 60 mph. Both leave the intersection simultaneously. After 2 hours, the distance between them is increasing at 78.10 mph. How fast is Car A traveling?",
    "answer": "50 mph",
    "steps": [
      "Let $x$ be Car A's displacement and $y$ be Car B's displacement. Let $D$ be the distance.",
      "We know $\\frac{dy}{dt} = 60$, $\\frac{dD}{dt} = 78.10$, $t = 2$.",
      "$y = 60 \\times 2 = 120$. Let $v_A$ be $\\frac{dx}{dt}$, then $x = v_A (2)$.",
      "Since $x^2 + y^2 = D^2$, taking derivative gives $t(v_A)(v_A) + (120)(60) = D(78.10)$.",
      "Using $D = \\sqrt{(v_A \\cdot 2)^2 + (120)^2}$, solve for $v_A$.",
      "Squaring the distance rates leads to the relation $\\sqrt{v_A^2 + 60^2} = 78.10$.",
      "Thus $v_A^2 + 3600 = 6100.00$.",
      "$v_A = \\sqrt{6100.00 - 3600} = 50$ mph."
    ]
  },
  {
    "id": "mega-app-var-50211",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West at 50 mph. Car B travels North at 60 mph. They leave the intersection at the same time. At what time will the distance between them be 156.20 miles?",
    "answer": "2 hours",
    "steps": [
      "Let distances be $x = ${v1}t$ and $y = ${v2}t$.",
      "The distance squared is $D^2 = x^2 + y^2 = (50t)^2 + (60t)^2 = 6100t^2$.",
      "Given $D = 156.20$, we have $D^2 = 24400.00$.",
      "$6100t^2 = 24400.00$.",
      "$t^2 = \\frac{24400.00}{6100} = 1$.",
      "Solving for positive time gives $t = \\sqrt{1} = 2$ hours."
    ]
  },
  {
    "id": "mega-app-var-50212",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Car A travels West at 50 mph. Car B travels North at 60 mph. Both leave an intersection at the same time. What is the rate of change of the distance between them after 3 hours?",
    "answer": "78.10 mph",
    "steps": [
      "Let $x$ be Car A's position, $y$ be Car B's position, and $D$ be the distance between them.",
      "Since their paths are perpendicular, $x^2 + y^2 = D^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 2D \\frac{dD}{dt}$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = D \\frac{dD}{dt}$.",
      "At $t=3$ hours, we have $x = 50(3) = 150$ and $y = 60(3) = 180$.",
      "The distance $D$ is $\\sqrt{(150)^2 + (180)^2} = 234.307$.",
      "Substitute: $(150)(50) + (180)(60) = (234.307) \\frac{dD}{dt}$.",
      "$\\frac{dD}{dt} = \\frac{18300}{234.307} = 78.10$ mph."
    ]
  },
  {
    "id": "mega-app-var-50213",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West. Car B travels North at 60 mph. Both leave the intersection simultaneously. After 3 hours, the distance between them is increasing at 78.10 mph. How fast is Car A traveling?",
    "answer": "50 mph",
    "steps": [
      "Let $x$ be Car A's displacement and $y$ be Car B's displacement. Let $D$ be the distance.",
      "We know $\\frac{dy}{dt} = 60$, $\\frac{dD}{dt} = 78.10$, $t = 3$.",
      "$y = 60 \\times 3 = 180$. Let $v_A$ be $\\frac{dx}{dt}$, then $x = v_A (3)$.",
      "Since $x^2 + y^2 = D^2$, taking derivative gives $t(v_A)(v_A) + (180)(60) = D(78.10)$.",
      "Using $D = \\sqrt{(v_A \\cdot 3)^2 + (180)^2}$, solve for $v_A$.",
      "Squaring the distance rates leads to the relation $\\sqrt{v_A^2 + 60^2} = 78.10$.",
      "Thus $v_A^2 + 3600 = 6100.00$.",
      "$v_A = \\sqrt{6100.00 - 3600} = 50$ mph."
    ]
  },
  {
    "id": "mega-app-var-50214",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West at 50 mph. Car B travels North at 60 mph. They leave the intersection at the same time. At what time will the distance between them be 234.31 miles?",
    "answer": "3 hours",
    "steps": [
      "Let distances be $x = ${v1}t$ and $y = ${v2}t$.",
      "The distance squared is $D^2 = x^2 + y^2 = (50t)^2 + (60t)^2 = 6100t^2$.",
      "Given $D = 234.31$, we have $D^2 = 54900.00$.",
      "$6100t^2 = 54900.00$.",
      "$t^2 = \\frac{54900.00}{6100} = 1$.",
      "Solving for positive time gives $t = \\sqrt{1} = 3$ hours."
    ]
  },
  {
    "id": "mega-app-var-50215",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Car A travels West at 50 mph. Car B travels North at 70 mph. Both leave an intersection at the same time. What is the rate of change of the distance between them after 1 hours?",
    "answer": "86.02 mph",
    "steps": [
      "Let $x$ be Car A's position, $y$ be Car B's position, and $D$ be the distance between them.",
      "Since their paths are perpendicular, $x^2 + y^2 = D^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 2D \\frac{dD}{dt}$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = D \\frac{dD}{dt}$.",
      "At $t=1$ hours, we have $x = 50(1) = 50$ and $y = 70(1) = 70$.",
      "The distance $D$ is $\\sqrt{(50)^2 + (70)^2} = 86.023$.",
      "Substitute: $(50)(50) + (70)(70) = (86.023) \\frac{dD}{dt}$.",
      "$\\frac{dD}{dt} = \\frac{7400}{86.023} = 86.02$ mph."
    ]
  },
  {
    "id": "mega-app-var-50216",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West. Car B travels North at 70 mph. Both leave the intersection simultaneously. After 1 hours, the distance between them is increasing at 86.02 mph. How fast is Car A traveling?",
    "answer": "50 mph",
    "steps": [
      "Let $x$ be Car A's displacement and $y$ be Car B's displacement. Let $D$ be the distance.",
      "We know $\\frac{dy}{dt} = 70$, $\\frac{dD}{dt} = 86.02$, $t = 1$.",
      "$y = 70 \\times 1 = 70$. Let $v_A$ be $\\frac{dx}{dt}$, then $x = v_A (1)$.",
      "Since $x^2 + y^2 = D^2$, taking derivative gives $t(v_A)(v_A) + (70)(70) = D(86.02)$.",
      "Using $D = \\sqrt{(v_A \\cdot 1)^2 + (70)^2}$, solve for $v_A$.",
      "Squaring the distance rates leads to the relation $\\sqrt{v_A^2 + 70^2} = 86.02$.",
      "Thus $v_A^2 + 4900 = 7400.00$.",
      "$v_A = \\sqrt{7400.00 - 4900} = 50$ mph."
    ]
  },
  {
    "id": "mega-app-var-50217",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West at 50 mph. Car B travels North at 70 mph. They leave the intersection at the same time. At what time will the distance between them be 86.02 miles?",
    "answer": "1 hours",
    "steps": [
      "Let distances be $x = ${v1}t$ and $y = ${v2}t$.",
      "The distance squared is $D^2 = x^2 + y^2 = (50t)^2 + (70t)^2 = 7400t^2$.",
      "Given $D = 86.02$, we have $D^2 = 7400.00$.",
      "$7400t^2 = 7400.00$.",
      "$t^2 = \\frac{7400.00}{7400} = 1$.",
      "Solving for positive time gives $t = \\sqrt{1} = 1$ hours."
    ]
  },
  {
    "id": "mega-app-var-50218",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Car A travels West at 50 mph. Car B travels North at 70 mph. Both leave an intersection at the same time. What is the rate of change of the distance between them after 2 hours?",
    "answer": "86.02 mph",
    "steps": [
      "Let $x$ be Car A's position, $y$ be Car B's position, and $D$ be the distance between them.",
      "Since their paths are perpendicular, $x^2 + y^2 = D^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 2D \\frac{dD}{dt}$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = D \\frac{dD}{dt}$.",
      "At $t=2$ hours, we have $x = 50(2) = 100$ and $y = 70(2) = 140$.",
      "The distance $D$ is $\\sqrt{(100)^2 + (140)^2} = 172.047$.",
      "Substitute: $(100)(50) + (140)(70) = (172.047) \\frac{dD}{dt}$.",
      "$\\frac{dD}{dt} = \\frac{14800}{172.047} = 86.02$ mph."
    ]
  },
  {
    "id": "mega-app-var-50219",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West. Car B travels North at 70 mph. Both leave the intersection simultaneously. After 2 hours, the distance between them is increasing at 86.02 mph. How fast is Car A traveling?",
    "answer": "50 mph",
    "steps": [
      "Let $x$ be Car A's displacement and $y$ be Car B's displacement. Let $D$ be the distance.",
      "We know $\\frac{dy}{dt} = 70$, $\\frac{dD}{dt} = 86.02$, $t = 2$.",
      "$y = 70 \\times 2 = 140$. Let $v_A$ be $\\frac{dx}{dt}$, then $x = v_A (2)$.",
      "Since $x^2 + y^2 = D^2$, taking derivative gives $t(v_A)(v_A) + (140)(70) = D(86.02)$.",
      "Using $D = \\sqrt{(v_A \\cdot 2)^2 + (140)^2}$, solve for $v_A$.",
      "Squaring the distance rates leads to the relation $\\sqrt{v_A^2 + 70^2} = 86.02$.",
      "Thus $v_A^2 + 4900 = 7400.00$.",
      "$v_A = \\sqrt{7400.00 - 4900} = 50$ mph."
    ]
  },
  {
    "id": "mega-app-var-50220",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West at 50 mph. Car B travels North at 70 mph. They leave the intersection at the same time. At what time will the distance between them be 172.05 miles?",
    "answer": "2 hours",
    "steps": [
      "Let distances be $x = ${v1}t$ and $y = ${v2}t$.",
      "The distance squared is $D^2 = x^2 + y^2 = (50t)^2 + (70t)^2 = 7400t^2$.",
      "Given $D = 172.05$, we have $D^2 = 29600.00$.",
      "$7400t^2 = 29600.00$.",
      "$t^2 = \\frac{29600.00}{7400} = 1$.",
      "Solving for positive time gives $t = \\sqrt{1} = 2$ hours."
    ]
  },
  {
    "id": "mega-app-var-50221",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Car A travels West at 50 mph. Car B travels North at 70 mph. Both leave an intersection at the same time. What is the rate of change of the distance between them after 3 hours?",
    "answer": "86.02 mph",
    "steps": [
      "Let $x$ be Car A's position, $y$ be Car B's position, and $D$ be the distance between them.",
      "Since their paths are perpendicular, $x^2 + y^2 = D^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 2D \\frac{dD}{dt}$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = D \\frac{dD}{dt}$.",
      "At $t=3$ hours, we have $x = 50(3) = 150$ and $y = 70(3) = 210$.",
      "The distance $D$ is $\\sqrt{(150)^2 + (210)^2} = 258.070$.",
      "Substitute: $(150)(50) + (210)(70) = (258.070) \\frac{dD}{dt}$.",
      "$\\frac{dD}{dt} = \\frac{22200}{258.070} = 86.02$ mph."
    ]
  },
  {
    "id": "mega-app-var-50222",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West. Car B travels North at 70 mph. Both leave the intersection simultaneously. After 3 hours, the distance between them is increasing at 86.02 mph. How fast is Car A traveling?",
    "answer": "50 mph",
    "steps": [
      "Let $x$ be Car A's displacement and $y$ be Car B's displacement. Let $D$ be the distance.",
      "We know $\\frac{dy}{dt} = 70$, $\\frac{dD}{dt} = 86.02$, $t = 3$.",
      "$y = 70 \\times 3 = 210$. Let $v_A$ be $\\frac{dx}{dt}$, then $x = v_A (3)$.",
      "Since $x^2 + y^2 = D^2$, taking derivative gives $t(v_A)(v_A) + (210)(70) = D(86.02)$.",
      "Using $D = \\sqrt{(v_A \\cdot 3)^2 + (210)^2}$, solve for $v_A$.",
      "Squaring the distance rates leads to the relation $\\sqrt{v_A^2 + 70^2} = 86.02$.",
      "Thus $v_A^2 + 4900 = 7400.00$.",
      "$v_A = \\sqrt{7400.00 - 4900} = 50$ mph."
    ]
  },
  {
    "id": "mega-app-var-50223",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West at 50 mph. Car B travels North at 70 mph. They leave the intersection at the same time. At what time will the distance between them be 258.07 miles?",
    "answer": "3 hours",
    "steps": [
      "Let distances be $x = ${v1}t$ and $y = ${v2}t$.",
      "The distance squared is $D^2 = x^2 + y^2 = (50t)^2 + (70t)^2 = 7400t^2$.",
      "Given $D = 258.07$, we have $D^2 = 66600.00$.",
      "$7400t^2 = 66600.00$.",
      "$t^2 = \\frac{66600.00}{7400} = 1$.",
      "Solving for positive time gives $t = \\sqrt{1} = 3$ hours."
    ]
  },
  {
    "id": "mega-app-var-50224",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Car A travels West at 60 mph. Car B travels North at 40 mph. Both leave an intersection at the same time. What is the rate of change of the distance between them after 1 hours?",
    "answer": "72.11 mph",
    "steps": [
      "Let $x$ be Car A's position, $y$ be Car B's position, and $D$ be the distance between them.",
      "Since their paths are perpendicular, $x^2 + y^2 = D^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 2D \\frac{dD}{dt}$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = D \\frac{dD}{dt}$.",
      "At $t=1$ hours, we have $x = 60(1) = 60$ and $y = 40(1) = 40$.",
      "The distance $D$ is $\\sqrt{(60)^2 + (40)^2} = 72.111$.",
      "Substitute: $(60)(60) + (40)(40) = (72.111) \\frac{dD}{dt}$.",
      "$\\frac{dD}{dt} = \\frac{5200}{72.111} = 72.11$ mph."
    ]
  },
  {
    "id": "mega-app-var-50225",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West. Car B travels North at 40 mph. Both leave the intersection simultaneously. After 1 hours, the distance between them is increasing at 72.11 mph. How fast is Car A traveling?",
    "answer": "60 mph",
    "steps": [
      "Let $x$ be Car A's displacement and $y$ be Car B's displacement. Let $D$ be the distance.",
      "We know $\\frac{dy}{dt} = 40$, $\\frac{dD}{dt} = 72.11$, $t = 1$.",
      "$y = 40 \\times 1 = 40$. Let $v_A$ be $\\frac{dx}{dt}$, then $x = v_A (1)$.",
      "Since $x^2 + y^2 = D^2$, taking derivative gives $t(v_A)(v_A) + (40)(40) = D(72.11)$.",
      "Using $D = \\sqrt{(v_A \\cdot 1)^2 + (40)^2}$, solve for $v_A$.",
      "Squaring the distance rates leads to the relation $\\sqrt{v_A^2 + 40^2} = 72.11$.",
      "Thus $v_A^2 + 1600 = 5200.00$.",
      "$v_A = \\sqrt{5200.00 - 1600} = 60$ mph."
    ]
  },
  {
    "id": "mega-app-var-50226",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West at 60 mph. Car B travels North at 40 mph. They leave the intersection at the same time. At what time will the distance between them be 72.11 miles?",
    "answer": "1 hours",
    "steps": [
      "Let distances be $x = ${v1}t$ and $y = ${v2}t$.",
      "The distance squared is $D^2 = x^2 + y^2 = (60t)^2 + (40t)^2 = 5200t^2$.",
      "Given $D = 72.11$, we have $D^2 = 5200.00$.",
      "$5200t^2 = 5200.00$.",
      "$t^2 = \\frac{5200.00}{5200} = 1$.",
      "Solving for positive time gives $t = \\sqrt{1} = 1$ hours."
    ]
  },
  {
    "id": "mega-app-var-50227",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Car A travels West at 60 mph. Car B travels North at 40 mph. Both leave an intersection at the same time. What is the rate of change of the distance between them after 2 hours?",
    "answer": "72.11 mph",
    "steps": [
      "Let $x$ be Car A's position, $y$ be Car B's position, and $D$ be the distance between them.",
      "Since their paths are perpendicular, $x^2 + y^2 = D^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 2D \\frac{dD}{dt}$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = D \\frac{dD}{dt}$.",
      "At $t=2$ hours, we have $x = 60(2) = 120$ and $y = 40(2) = 80$.",
      "The distance $D$ is $\\sqrt{(120)^2 + (80)^2} = 144.222$.",
      "Substitute: $(120)(60) + (80)(40) = (144.222) \\frac{dD}{dt}$.",
      "$\\frac{dD}{dt} = \\frac{10400}{144.222} = 72.11$ mph."
    ]
  },
  {
    "id": "mega-app-var-50228",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West. Car B travels North at 40 mph. Both leave the intersection simultaneously. After 2 hours, the distance between them is increasing at 72.11 mph. How fast is Car A traveling?",
    "answer": "60 mph",
    "steps": [
      "Let $x$ be Car A's displacement and $y$ be Car B's displacement. Let $D$ be the distance.",
      "We know $\\frac{dy}{dt} = 40$, $\\frac{dD}{dt} = 72.11$, $t = 2$.",
      "$y = 40 \\times 2 = 80$. Let $v_A$ be $\\frac{dx}{dt}$, then $x = v_A (2)$.",
      "Since $x^2 + y^2 = D^2$, taking derivative gives $t(v_A)(v_A) + (80)(40) = D(72.11)$.",
      "Using $D = \\sqrt{(v_A \\cdot 2)^2 + (80)^2}$, solve for $v_A$.",
      "Squaring the distance rates leads to the relation $\\sqrt{v_A^2 + 40^2} = 72.11$.",
      "Thus $v_A^2 + 1600 = 5200.00$.",
      "$v_A = \\sqrt{5200.00 - 1600} = 60$ mph."
    ]
  },
  {
    "id": "mega-app-var-50229",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West at 60 mph. Car B travels North at 40 mph. They leave the intersection at the same time. At what time will the distance between them be 144.22 miles?",
    "answer": "2 hours",
    "steps": [
      "Let distances be $x = ${v1}t$ and $y = ${v2}t$.",
      "The distance squared is $D^2 = x^2 + y^2 = (60t)^2 + (40t)^2 = 5200t^2$.",
      "Given $D = 144.22$, we have $D^2 = 20800.00$.",
      "$5200t^2 = 20800.00$.",
      "$t^2 = \\frac{20800.00}{5200} = 1$.",
      "Solving for positive time gives $t = \\sqrt{1} = 2$ hours."
    ]
  },
  {
    "id": "mega-app-var-50230",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Car A travels West at 60 mph. Car B travels North at 40 mph. Both leave an intersection at the same time. What is the rate of change of the distance between them after 3 hours?",
    "answer": "72.11 mph",
    "steps": [
      "Let $x$ be Car A's position, $y$ be Car B's position, and $D$ be the distance between them.",
      "Since their paths are perpendicular, $x^2 + y^2 = D^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 2D \\frac{dD}{dt}$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = D \\frac{dD}{dt}$.",
      "At $t=3$ hours, we have $x = 60(3) = 180$ and $y = 40(3) = 120$.",
      "The distance $D$ is $\\sqrt{(180)^2 + (120)^2} = 216.333$.",
      "Substitute: $(180)(60) + (120)(40) = (216.333) \\frac{dD}{dt}$.",
      "$\\frac{dD}{dt} = \\frac{15600}{216.333} = 72.11$ mph."
    ]
  },
  {
    "id": "mega-app-var-50231",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West. Car B travels North at 40 mph. Both leave the intersection simultaneously. After 3 hours, the distance between them is increasing at 72.11 mph. How fast is Car A traveling?",
    "answer": "60 mph",
    "steps": [
      "Let $x$ be Car A's displacement and $y$ be Car B's displacement. Let $D$ be the distance.",
      "We know $\\frac{dy}{dt} = 40$, $\\frac{dD}{dt} = 72.11$, $t = 3$.",
      "$y = 40 \\times 3 = 120$. Let $v_A$ be $\\frac{dx}{dt}$, then $x = v_A (3)$.",
      "Since $x^2 + y^2 = D^2$, taking derivative gives $t(v_A)(v_A) + (120)(40) = D(72.11)$.",
      "Using $D = \\sqrt{(v_A \\cdot 3)^2 + (120)^2}$, solve for $v_A$.",
      "Squaring the distance rates leads to the relation $\\sqrt{v_A^2 + 40^2} = 72.11$.",
      "Thus $v_A^2 + 1600 = 5200.00$.",
      "$v_A = \\sqrt{5200.00 - 1600} = 60$ mph."
    ]
  },
  {
    "id": "mega-app-var-50232",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West at 60 mph. Car B travels North at 40 mph. They leave the intersection at the same time. At what time will the distance between them be 216.33 miles?",
    "answer": "3 hours",
    "steps": [
      "Let distances be $x = ${v1}t$ and $y = ${v2}t$.",
      "The distance squared is $D^2 = x^2 + y^2 = (60t)^2 + (40t)^2 = 5200t^2$.",
      "Given $D = 216.33$, we have $D^2 = 46800.00$.",
      "$5200t^2 = 46800.00$.",
      "$t^2 = \\frac{46800.00}{5200} = 1$.",
      "Solving for positive time gives $t = \\sqrt{1} = 3$ hours."
    ]
  },
  {
    "id": "mega-app-var-50233",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Car A travels West at 60 mph. Car B travels North at 50 mph. Both leave an intersection at the same time. What is the rate of change of the distance between them after 1 hours?",
    "answer": "78.10 mph",
    "steps": [
      "Let $x$ be Car A's position, $y$ be Car B's position, and $D$ be the distance between them.",
      "Since their paths are perpendicular, $x^2 + y^2 = D^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 2D \\frac{dD}{dt}$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = D \\frac{dD}{dt}$.",
      "At $t=1$ hours, we have $x = 60(1) = 60$ and $y = 50(1) = 50$.",
      "The distance $D$ is $\\sqrt{(60)^2 + (50)^2} = 78.102$.",
      "Substitute: $(60)(60) + (50)(50) = (78.102) \\frac{dD}{dt}$.",
      "$\\frac{dD}{dt} = \\frac{6100}{78.102} = 78.10$ mph."
    ]
  },
  {
    "id": "mega-app-var-50234",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West. Car B travels North at 50 mph. Both leave the intersection simultaneously. After 1 hours, the distance between them is increasing at 78.10 mph. How fast is Car A traveling?",
    "answer": "60 mph",
    "steps": [
      "Let $x$ be Car A's displacement and $y$ be Car B's displacement. Let $D$ be the distance.",
      "We know $\\frac{dy}{dt} = 50$, $\\frac{dD}{dt} = 78.10$, $t = 1$.",
      "$y = 50 \\times 1 = 50$. Let $v_A$ be $\\frac{dx}{dt}$, then $x = v_A (1)$.",
      "Since $x^2 + y^2 = D^2$, taking derivative gives $t(v_A)(v_A) + (50)(50) = D(78.10)$.",
      "Using $D = \\sqrt{(v_A \\cdot 1)^2 + (50)^2}$, solve for $v_A$.",
      "Squaring the distance rates leads to the relation $\\sqrt{v_A^2 + 50^2} = 78.10$.",
      "Thus $v_A^2 + 2500 = 6100.00$.",
      "$v_A = \\sqrt{6100.00 - 2500} = 60$ mph."
    ]
  },
  {
    "id": "mega-app-var-50235",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West at 60 mph. Car B travels North at 50 mph. They leave the intersection at the same time. At what time will the distance between them be 78.10 miles?",
    "answer": "1 hours",
    "steps": [
      "Let distances be $x = ${v1}t$ and $y = ${v2}t$.",
      "The distance squared is $D^2 = x^2 + y^2 = (60t)^2 + (50t)^2 = 6100t^2$.",
      "Given $D = 78.10$, we have $D^2 = 6100.00$.",
      "$6100t^2 = 6100.00$.",
      "$t^2 = \\frac{6100.00}{6100} = 1$.",
      "Solving for positive time gives $t = \\sqrt{1} = 1$ hours."
    ]
  },
  {
    "id": "mega-app-var-50236",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Car A travels West at 60 mph. Car B travels North at 50 mph. Both leave an intersection at the same time. What is the rate of change of the distance between them after 2 hours?",
    "answer": "78.10 mph",
    "steps": [
      "Let $x$ be Car A's position, $y$ be Car B's position, and $D$ be the distance between them.",
      "Since their paths are perpendicular, $x^2 + y^2 = D^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 2D \\frac{dD}{dt}$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = D \\frac{dD}{dt}$.",
      "At $t=2$ hours, we have $x = 60(2) = 120$ and $y = 50(2) = 100$.",
      "The distance $D$ is $\\sqrt{(120)^2 + (100)^2} = 156.205$.",
      "Substitute: $(120)(60) + (100)(50) = (156.205) \\frac{dD}{dt}$.",
      "$\\frac{dD}{dt} = \\frac{12200}{156.205} = 78.10$ mph."
    ]
  },
  {
    "id": "mega-app-var-50237",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West. Car B travels North at 50 mph. Both leave the intersection simultaneously. After 2 hours, the distance between them is increasing at 78.10 mph. How fast is Car A traveling?",
    "answer": "60 mph",
    "steps": [
      "Let $x$ be Car A's displacement and $y$ be Car B's displacement. Let $D$ be the distance.",
      "We know $\\frac{dy}{dt} = 50$, $\\frac{dD}{dt} = 78.10$, $t = 2$.",
      "$y = 50 \\times 2 = 100$. Let $v_A$ be $\\frac{dx}{dt}$, then $x = v_A (2)$.",
      "Since $x^2 + y^2 = D^2$, taking derivative gives $t(v_A)(v_A) + (100)(50) = D(78.10)$.",
      "Using $D = \\sqrt{(v_A \\cdot 2)^2 + (100)^2}$, solve for $v_A$.",
      "Squaring the distance rates leads to the relation $\\sqrt{v_A^2 + 50^2} = 78.10$.",
      "Thus $v_A^2 + 2500 = 6100.00$.",
      "$v_A = \\sqrt{6100.00 - 2500} = 60$ mph."
    ]
  },
  {
    "id": "mega-app-var-50238",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West at 60 mph. Car B travels North at 50 mph. They leave the intersection at the same time. At what time will the distance between them be 156.20 miles?",
    "answer": "2 hours",
    "steps": [
      "Let distances be $x = ${v1}t$ and $y = ${v2}t$.",
      "The distance squared is $D^2 = x^2 + y^2 = (60t)^2 + (50t)^2 = 6100t^2$.",
      "Given $D = 156.20$, we have $D^2 = 24400.00$.",
      "$6100t^2 = 24400.00$.",
      "$t^2 = \\frac{24400.00}{6100} = 1$.",
      "Solving for positive time gives $t = \\sqrt{1} = 2$ hours."
    ]
  },
  {
    "id": "mega-app-var-50239",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Car A travels West at 60 mph. Car B travels North at 50 mph. Both leave an intersection at the same time. What is the rate of change of the distance between them after 3 hours?",
    "answer": "78.10 mph",
    "steps": [
      "Let $x$ be Car A's position, $y$ be Car B's position, and $D$ be the distance between them.",
      "Since their paths are perpendicular, $x^2 + y^2 = D^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 2D \\frac{dD}{dt}$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = D \\frac{dD}{dt}$.",
      "At $t=3$ hours, we have $x = 60(3) = 180$ and $y = 50(3) = 150$.",
      "The distance $D$ is $\\sqrt{(180)^2 + (150)^2} = 234.307$.",
      "Substitute: $(180)(60) + (150)(50) = (234.307) \\frac{dD}{dt}$.",
      "$\\frac{dD}{dt} = \\frac{18300}{234.307} = 78.10$ mph."
    ]
  },
  {
    "id": "mega-app-var-50240",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West. Car B travels North at 50 mph. Both leave the intersection simultaneously. After 3 hours, the distance between them is increasing at 78.10 mph. How fast is Car A traveling?",
    "answer": "60 mph",
    "steps": [
      "Let $x$ be Car A's displacement and $y$ be Car B's displacement. Let $D$ be the distance.",
      "We know $\\frac{dy}{dt} = 50$, $\\frac{dD}{dt} = 78.10$, $t = 3$.",
      "$y = 50 \\times 3 = 150$. Let $v_A$ be $\\frac{dx}{dt}$, then $x = v_A (3)$.",
      "Since $x^2 + y^2 = D^2$, taking derivative gives $t(v_A)(v_A) + (150)(50) = D(78.10)$.",
      "Using $D = \\sqrt{(v_A \\cdot 3)^2 + (150)^2}$, solve for $v_A$.",
      "Squaring the distance rates leads to the relation $\\sqrt{v_A^2 + 50^2} = 78.10$.",
      "Thus $v_A^2 + 2500 = 6100.00$.",
      "$v_A = \\sqrt{6100.00 - 2500} = 60$ mph."
    ]
  },
  {
    "id": "mega-app-var-50241",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West at 60 mph. Car B travels North at 50 mph. They leave the intersection at the same time. At what time will the distance between them be 234.31 miles?",
    "answer": "3 hours",
    "steps": [
      "Let distances be $x = ${v1}t$ and $y = ${v2}t$.",
      "The distance squared is $D^2 = x^2 + y^2 = (60t)^2 + (50t)^2 = 6100t^2$.",
      "Given $D = 234.31$, we have $D^2 = 54900.00$.",
      "$6100t^2 = 54900.00$.",
      "$t^2 = \\frac{54900.00}{6100} = 1$.",
      "Solving for positive time gives $t = \\sqrt{1} = 3$ hours."
    ]
  },
  {
    "id": "mega-app-var-50242",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Car A travels West at 60 mph. Car B travels North at 60 mph. Both leave an intersection at the same time. What is the rate of change of the distance between them after 1 hours?",
    "answer": "84.85 mph",
    "steps": [
      "Let $x$ be Car A's position, $y$ be Car B's position, and $D$ be the distance between them.",
      "Since their paths are perpendicular, $x^2 + y^2 = D^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 2D \\frac{dD}{dt}$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = D \\frac{dD}{dt}$.",
      "At $t=1$ hours, we have $x = 60(1) = 60$ and $y = 60(1) = 60$.",
      "The distance $D$ is $\\sqrt{(60)^2 + (60)^2} = 84.853$.",
      "Substitute: $(60)(60) + (60)(60) = (84.853) \\frac{dD}{dt}$.",
      "$\\frac{dD}{dt} = \\frac{7200}{84.853} = 84.85$ mph."
    ]
  },
  {
    "id": "mega-app-var-50243",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West. Car B travels North at 60 mph. Both leave the intersection simultaneously. After 1 hours, the distance between them is increasing at 84.85 mph. How fast is Car A traveling?",
    "answer": "60 mph",
    "steps": [
      "Let $x$ be Car A's displacement and $y$ be Car B's displacement. Let $D$ be the distance.",
      "We know $\\frac{dy}{dt} = 60$, $\\frac{dD}{dt} = 84.85$, $t = 1$.",
      "$y = 60 \\times 1 = 60$. Let $v_A$ be $\\frac{dx}{dt}$, then $x = v_A (1)$.",
      "Since $x^2 + y^2 = D^2$, taking derivative gives $t(v_A)(v_A) + (60)(60) = D(84.85)$.",
      "Using $D = \\sqrt{(v_A \\cdot 1)^2 + (60)^2}$, solve for $v_A$.",
      "Squaring the distance rates leads to the relation $\\sqrt{v_A^2 + 60^2} = 84.85$.",
      "Thus $v_A^2 + 3600 = 7200.00$.",
      "$v_A = \\sqrt{7200.00 - 3600} = 60$ mph."
    ]
  },
  {
    "id": "mega-app-var-50244",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West at 60 mph. Car B travels North at 60 mph. They leave the intersection at the same time. At what time will the distance between them be 84.85 miles?",
    "answer": "1 hours",
    "steps": [
      "Let distances be $x = ${v1}t$ and $y = ${v2}t$.",
      "The distance squared is $D^2 = x^2 + y^2 = (60t)^2 + (60t)^2 = 7200t^2$.",
      "Given $D = 84.85$, we have $D^2 = 7200.00$.",
      "$7200t^2 = 7200.00$.",
      "$t^2 = \\frac{7200.00}{7200} = 1$.",
      "Solving for positive time gives $t = \\sqrt{1} = 1$ hours."
    ]
  },
  {
    "id": "mega-app-var-50245",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Car A travels West at 60 mph. Car B travels North at 60 mph. Both leave an intersection at the same time. What is the rate of change of the distance between them after 2 hours?",
    "answer": "84.85 mph",
    "steps": [
      "Let $x$ be Car A's position, $y$ be Car B's position, and $D$ be the distance between them.",
      "Since their paths are perpendicular, $x^2 + y^2 = D^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 2D \\frac{dD}{dt}$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = D \\frac{dD}{dt}$.",
      "At $t=2$ hours, we have $x = 60(2) = 120$ and $y = 60(2) = 120$.",
      "The distance $D$ is $\\sqrt{(120)^2 + (120)^2} = 169.706$.",
      "Substitute: $(120)(60) + (120)(60) = (169.706) \\frac{dD}{dt}$.",
      "$\\frac{dD}{dt} = \\frac{14400}{169.706} = 84.85$ mph."
    ]
  },
  {
    "id": "mega-app-var-50246",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West. Car B travels North at 60 mph. Both leave the intersection simultaneously. After 2 hours, the distance between them is increasing at 84.85 mph. How fast is Car A traveling?",
    "answer": "60 mph",
    "steps": [
      "Let $x$ be Car A's displacement and $y$ be Car B's displacement. Let $D$ be the distance.",
      "We know $\\frac{dy}{dt} = 60$, $\\frac{dD}{dt} = 84.85$, $t = 2$.",
      "$y = 60 \\times 2 = 120$. Let $v_A$ be $\\frac{dx}{dt}$, then $x = v_A (2)$.",
      "Since $x^2 + y^2 = D^2$, taking derivative gives $t(v_A)(v_A) + (120)(60) = D(84.85)$.",
      "Using $D = \\sqrt{(v_A \\cdot 2)^2 + (120)^2}$, solve for $v_A$.",
      "Squaring the distance rates leads to the relation $\\sqrt{v_A^2 + 60^2} = 84.85$.",
      "Thus $v_A^2 + 3600 = 7200.00$.",
      "$v_A = \\sqrt{7200.00 - 3600} = 60$ mph."
    ]
  },
  {
    "id": "mega-app-var-50247",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West at 60 mph. Car B travels North at 60 mph. They leave the intersection at the same time. At what time will the distance between them be 169.71 miles?",
    "answer": "2 hours",
    "steps": [
      "Let distances be $x = ${v1}t$ and $y = ${v2}t$.",
      "The distance squared is $D^2 = x^2 + y^2 = (60t)^2 + (60t)^2 = 7200t^2$.",
      "Given $D = 169.71$, we have $D^2 = 28800.00$.",
      "$7200t^2 = 28800.00$.",
      "$t^2 = \\frac{28800.00}{7200} = 1$.",
      "Solving for positive time gives $t = \\sqrt{1} = 2$ hours."
    ]
  },
  {
    "id": "mega-app-var-50248",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Car A travels West at 60 mph. Car B travels North at 60 mph. Both leave an intersection at the same time. What is the rate of change of the distance between them after 3 hours?",
    "answer": "84.85 mph",
    "steps": [
      "Let $x$ be Car A's position, $y$ be Car B's position, and $D$ be the distance between them.",
      "Since their paths are perpendicular, $x^2 + y^2 = D^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 2D \\frac{dD}{dt}$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = D \\frac{dD}{dt}$.",
      "At $t=3$ hours, we have $x = 60(3) = 180$ and $y = 60(3) = 180$.",
      "The distance $D$ is $\\sqrt{(180)^2 + (180)^2} = 254.558$.",
      "Substitute: $(180)(60) + (180)(60) = (254.558) \\frac{dD}{dt}$.",
      "$\\frac{dD}{dt} = \\frac{21600}{254.558} = 84.85$ mph."
    ]
  },
  {
    "id": "mega-app-var-50249",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West. Car B travels North at 60 mph. Both leave the intersection simultaneously. After 3 hours, the distance between them is increasing at 84.85 mph. How fast is Car A traveling?",
    "answer": "60 mph",
    "steps": [
      "Let $x$ be Car A's displacement and $y$ be Car B's displacement. Let $D$ be the distance.",
      "We know $\\frac{dy}{dt} = 60$, $\\frac{dD}{dt} = 84.85$, $t = 3$.",
      "$y = 60 \\times 3 = 180$. Let $v_A$ be $\\frac{dx}{dt}$, then $x = v_A (3)$.",
      "Since $x^2 + y^2 = D^2$, taking derivative gives $t(v_A)(v_A) + (180)(60) = D(84.85)$.",
      "Using $D = \\sqrt{(v_A \\cdot 3)^2 + (180)^2}$, solve for $v_A$.",
      "Squaring the distance rates leads to the relation $\\sqrt{v_A^2 + 60^2} = 84.85$.",
      "Thus $v_A^2 + 3600 = 7200.00$.",
      "$v_A = \\sqrt{7200.00 - 3600} = 60$ mph."
    ]
  },
  {
    "id": "mega-app-var-50250",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West at 60 mph. Car B travels North at 60 mph. They leave the intersection at the same time. At what time will the distance between them be 254.56 miles?",
    "answer": "3 hours",
    "steps": [
      "Let distances be $x = ${v1}t$ and $y = ${v2}t$.",
      "The distance squared is $D^2 = x^2 + y^2 = (60t)^2 + (60t)^2 = 7200t^2$.",
      "Given $D = 254.56$, we have $D^2 = 64800.00$.",
      "$7200t^2 = 64800.00$.",
      "$t^2 = \\frac{64800.00}{7200} = 1$.",
      "Solving for positive time gives $t = \\sqrt{1} = 3$ hours."
    ]
  },
  {
    "id": "mega-app-var-50251",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Car A travels West at 60 mph. Car B travels North at 70 mph. Both leave an intersection at the same time. What is the rate of change of the distance between them after 1 hours?",
    "answer": "92.20 mph",
    "steps": [
      "Let $x$ be Car A's position, $y$ be Car B's position, and $D$ be the distance between them.",
      "Since their paths are perpendicular, $x^2 + y^2 = D^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 2D \\frac{dD}{dt}$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = D \\frac{dD}{dt}$.",
      "At $t=1$ hours, we have $x = 60(1) = 60$ and $y = 70(1) = 70$.",
      "The distance $D$ is $\\sqrt{(60)^2 + (70)^2} = 92.195$.",
      "Substitute: $(60)(60) + (70)(70) = (92.195) \\frac{dD}{dt}$.",
      "$\\frac{dD}{dt} = \\frac{8500}{92.195} = 92.20$ mph."
    ]
  },
  {
    "id": "mega-app-var-50252",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West. Car B travels North at 70 mph. Both leave the intersection simultaneously. After 1 hours, the distance between them is increasing at 92.20 mph. How fast is Car A traveling?",
    "answer": "60 mph",
    "steps": [
      "Let $x$ be Car A's displacement and $y$ be Car B's displacement. Let $D$ be the distance.",
      "We know $\\frac{dy}{dt} = 70$, $\\frac{dD}{dt} = 92.20$, $t = 1$.",
      "$y = 70 \\times 1 = 70$. Let $v_A$ be $\\frac{dx}{dt}$, then $x = v_A (1)$.",
      "Since $x^2 + y^2 = D^2$, taking derivative gives $t(v_A)(v_A) + (70)(70) = D(92.20)$.",
      "Using $D = \\sqrt{(v_A \\cdot 1)^2 + (70)^2}$, solve for $v_A$.",
      "Squaring the distance rates leads to the relation $\\sqrt{v_A^2 + 70^2} = 92.20$.",
      "Thus $v_A^2 + 4900 = 8500.00$.",
      "$v_A = \\sqrt{8500.00 - 4900} = 60$ mph."
    ]
  },
  {
    "id": "mega-app-var-50253",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West at 60 mph. Car B travels North at 70 mph. They leave the intersection at the same time. At what time will the distance between them be 92.20 miles?",
    "answer": "1 hours",
    "steps": [
      "Let distances be $x = ${v1}t$ and $y = ${v2}t$.",
      "The distance squared is $D^2 = x^2 + y^2 = (60t)^2 + (70t)^2 = 8500t^2$.",
      "Given $D = 92.20$, we have $D^2 = 8500.00$.",
      "$8500t^2 = 8500.00$.",
      "$t^2 = \\frac{8500.00}{8500} = 1$.",
      "Solving for positive time gives $t = \\sqrt{1} = 1$ hours."
    ]
  },
  {
    "id": "mega-app-var-50254",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Car A travels West at 60 mph. Car B travels North at 70 mph. Both leave an intersection at the same time. What is the rate of change of the distance between them after 2 hours?",
    "answer": "92.20 mph",
    "steps": [
      "Let $x$ be Car A's position, $y$ be Car B's position, and $D$ be the distance between them.",
      "Since their paths are perpendicular, $x^2 + y^2 = D^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 2D \\frac{dD}{dt}$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = D \\frac{dD}{dt}$.",
      "At $t=2$ hours, we have $x = 60(2) = 120$ and $y = 70(2) = 140$.",
      "The distance $D$ is $\\sqrt{(120)^2 + (140)^2} = 184.391$.",
      "Substitute: $(120)(60) + (140)(70) = (184.391) \\frac{dD}{dt}$.",
      "$\\frac{dD}{dt} = \\frac{17000}{184.391} = 92.20$ mph."
    ]
  },
  {
    "id": "mega-app-var-50255",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West. Car B travels North at 70 mph. Both leave the intersection simultaneously. After 2 hours, the distance between them is increasing at 92.20 mph. How fast is Car A traveling?",
    "answer": "60 mph",
    "steps": [
      "Let $x$ be Car A's displacement and $y$ be Car B's displacement. Let $D$ be the distance.",
      "We know $\\frac{dy}{dt} = 70$, $\\frac{dD}{dt} = 92.20$, $t = 2$.",
      "$y = 70 \\times 2 = 140$. Let $v_A$ be $\\frac{dx}{dt}$, then $x = v_A (2)$.",
      "Since $x^2 + y^2 = D^2$, taking derivative gives $t(v_A)(v_A) + (140)(70) = D(92.20)$.",
      "Using $D = \\sqrt{(v_A \\cdot 2)^2 + (140)^2}$, solve for $v_A$.",
      "Squaring the distance rates leads to the relation $\\sqrt{v_A^2 + 70^2} = 92.20$.",
      "Thus $v_A^2 + 4900 = 8500.00$.",
      "$v_A = \\sqrt{8500.00 - 4900} = 60$ mph."
    ]
  },
  {
    "id": "mega-app-var-50256",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West at 60 mph. Car B travels North at 70 mph. They leave the intersection at the same time. At what time will the distance between them be 184.39 miles?",
    "answer": "2 hours",
    "steps": [
      "Let distances be $x = ${v1}t$ and $y = ${v2}t$.",
      "The distance squared is $D^2 = x^2 + y^2 = (60t)^2 + (70t)^2 = 8500t^2$.",
      "Given $D = 184.39$, we have $D^2 = 34000.00$.",
      "$8500t^2 = 34000.00$.",
      "$t^2 = \\frac{34000.00}{8500} = 1$.",
      "Solving for positive time gives $t = \\sqrt{1} = 2$ hours."
    ]
  },
  {
    "id": "mega-app-var-50257",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Car A travels West at 60 mph. Car B travels North at 70 mph. Both leave an intersection at the same time. What is the rate of change of the distance between them after 3 hours?",
    "answer": "92.20 mph",
    "steps": [
      "Let $x$ be Car A's position, $y$ be Car B's position, and $D$ be the distance between them.",
      "Since their paths are perpendicular, $x^2 + y^2 = D^2$.",
      "Differentiate with respect to $t$: $2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 2D \\frac{dD}{dt}$.",
      "Simplify to: $x \\frac{dx}{dt} + y \\frac{dy}{dt} = D \\frac{dD}{dt}$.",
      "At $t=3$ hours, we have $x = 60(3) = 180$ and $y = 70(3) = 210$.",
      "The distance $D$ is $\\sqrt{(180)^2 + (210)^2} = 276.586$.",
      "Substitute: $(180)(60) + (210)(70) = (276.586) \\frac{dD}{dt}$.",
      "$\\frac{dD}{dt} = \\frac{25500}{276.586} = 92.20$ mph."
    ]
  },
  {
    "id": "mega-app-var-50258",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West. Car B travels North at 70 mph. Both leave the intersection simultaneously. After 3 hours, the distance between them is increasing at 92.20 mph. How fast is Car A traveling?",
    "answer": "60 mph",
    "steps": [
      "Let $x$ be Car A's displacement and $y$ be Car B's displacement. Let $D$ be the distance.",
      "We know $\\frac{dy}{dt} = 70$, $\\frac{dD}{dt} = 92.20$, $t = 3$.",
      "$y = 70 \\times 3 = 210$. Let $v_A$ be $\\frac{dx}{dt}$, then $x = v_A (3)$.",
      "Since $x^2 + y^2 = D^2$, taking derivative gives $t(v_A)(v_A) + (210)(70) = D(92.20)$.",
      "Using $D = \\sqrt{(v_A \\cdot 3)^2 + (210)^2}$, solve for $v_A$.",
      "Squaring the distance rates leads to the relation $\\sqrt{v_A^2 + 70^2} = 92.20$.",
      "Thus $v_A^2 + 4900 = 8500.00$.",
      "$v_A = \\sqrt{8500.00 - 4900} = 60$ mph."
    ]
  },
  {
    "id": "mega-app-var-50259",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Car A travels West at 60 mph. Car B travels North at 70 mph. They leave the intersection at the same time. At what time will the distance between them be 276.59 miles?",
    "answer": "3 hours",
    "steps": [
      "Let distances be $x = ${v1}t$ and $y = ${v2}t$.",
      "The distance squared is $D^2 = x^2 + y^2 = (60t)^2 + (70t)^2 = 8500t^2$.",
      "Given $D = 276.59$, we have $D^2 = 76500.00$.",
      "$8500t^2 = 76500.00$.",
      "$t^2 = \\frac{76500.00}{8500} = 1$.",
      "Solving for positive time gives $t = \\sqrt{1} = 3$ hours."
    ]
  },
  {
    "id": "mega-app-var-50260",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Water flows into a cylindrical tank of radius 3 meters at a rate of 14.14 cubic meters per minute. How fast is the water level rising?",
    "answer": "0.500 m/min",
    "steps": [
      "The volume of a cylinder is $V = \\pi r^2 h$.",
      "The radius is constant at $r = 3$, so $V = \\pi (3)^2 h = 9\\pi h$.",
      "Differentiate with respect to $t$: $\\frac{dV}{dt} = 9\\pi \\frac{dh}{dt}$.",
      "Substitute $\\frac{dV}{dt} = 14.14$: $14.14 = 9\\pi \\frac{dh}{dt}$.",
      "Solve for $\\frac{dh}{dt}$: $\\frac{dh}{dt} = \\frac{14.14}{9\\pi} = 0.500$ m/min."
    ]
  },
  {
    "id": "mega-app-var-50261",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "The water level in a cylindrical tank of radius 3 meters is rising at 0.50 m/min. At what rate is water flowing into the tank?",
    "answer": "14.137 m^3/min",
    "steps": [
      "Volume formula is $V = \\pi r^2 h$. With $r=3$, $V = 9\\pi h$.",
      "Taking derivative: $\\frac{dV}{dt} = 9\\pi \\frac{dh}{dt}$.",
      "Given $\\frac{dh}{dt} = 0.50$.",
      "Calculate: $\\frac{dV}{dt} = 9\\pi (0.50) = 14.137$ m³/min."
    ]
  },
  {
    "id": "mega-app-var-50262",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Water flows into a cylindrical tank at 14.14 m^3/min. The water level rises at 0.50 m/min. What is the radius of the tank?",
    "answer": "3.00 meters",
    "steps": [
      "Let $V = \\pi r^2 h$. Since $r$ is constant, $\\frac{dV}{dt} = \\pi r^2 \\frac{dh}{dt}$.",
      "Given $\\frac{dV}{dt} = 14.14$ and $\\frac{dh}{dt} = 0.50$.",
      "Substitute: $14.14 = \\pi r^2 (0.50)$.",
      "Solve for $r^2$: $r^2 = \\frac{14.14}{\\pi \\times 0.50} = 9$.",
      "Therefore, $r = \\sqrt{9} = 3.00$ meters."
    ]
  },
  {
    "id": "mega-app-var-50263",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Water flows into a cylindrical tank of radius 3 meters at a rate of 28.27 cubic meters per minute. How fast is the water level rising?",
    "answer": "1.000 m/min",
    "steps": [
      "The volume of a cylinder is $V = \\pi r^2 h$.",
      "The radius is constant at $r = 3$, so $V = \\pi (3)^2 h = 9\\pi h$.",
      "Differentiate with respect to $t$: $\\frac{dV}{dt} = 9\\pi \\frac{dh}{dt}$.",
      "Substitute $\\frac{dV}{dt} = 28.27$: $28.27 = 9\\pi \\frac{dh}{dt}$.",
      "Solve for $\\frac{dh}{dt}$: $\\frac{dh}{dt} = \\frac{28.27}{9\\pi} = 1.000$ m/min."
    ]
  },
  {
    "id": "mega-app-var-50264",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "The water level in a cylindrical tank of radius 3 meters is rising at 1.00 m/min. At what rate is water flowing into the tank?",
    "answer": "28.274 m^3/min",
    "steps": [
      "Volume formula is $V = \\pi r^2 h$. With $r=3$, $V = 9\\pi h$.",
      "Taking derivative: $\\frac{dV}{dt} = 9\\pi \\frac{dh}{dt}$.",
      "Given $\\frac{dh}{dt} = 1.00$.",
      "Calculate: $\\frac{dV}{dt} = 9\\pi (1.00) = 28.274$ m³/min."
    ]
  },
  {
    "id": "mega-app-var-50265",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Water flows into a cylindrical tank at 28.27 m^3/min. The water level rises at 1.00 m/min. What is the radius of the tank?",
    "answer": "3.00 meters",
    "steps": [
      "Let $V = \\pi r^2 h$. Since $r$ is constant, $\\frac{dV}{dt} = \\pi r^2 \\frac{dh}{dt}$.",
      "Given $\\frac{dV}{dt} = 28.27$ and $\\frac{dh}{dt} = 1.00$.",
      "Substitute: $28.27 = \\pi r^2 (1.00)$.",
      "Solve for $r^2$: $r^2 = \\frac{28.27}{\\pi \\times 1.00} = 9$.",
      "Therefore, $r = \\sqrt{9} = 3.00$ meters."
    ]
  },
  {
    "id": "mega-app-var-50266",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Water flows into a cylindrical tank of radius 3 meters at a rate of 42.41 cubic meters per minute. How fast is the water level rising?",
    "answer": "1.500 m/min",
    "steps": [
      "The volume of a cylinder is $V = \\pi r^2 h$.",
      "The radius is constant at $r = 3$, so $V = \\pi (3)^2 h = 9\\pi h$.",
      "Differentiate with respect to $t$: $\\frac{dV}{dt} = 9\\pi \\frac{dh}{dt}$.",
      "Substitute $\\frac{dV}{dt} = 42.41$: $42.41 = 9\\pi \\frac{dh}{dt}$.",
      "Solve for $\\frac{dh}{dt}$: $\\frac{dh}{dt} = \\frac{42.41}{9\\pi} = 1.500$ m/min."
    ]
  },
  {
    "id": "mega-app-var-50267",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "The water level in a cylindrical tank of radius 3 meters is rising at 1.50 m/min. At what rate is water flowing into the tank?",
    "answer": "42.412 m^3/min",
    "steps": [
      "Volume formula is $V = \\pi r^2 h$. With $r=3$, $V = 9\\pi h$.",
      "Taking derivative: $\\frac{dV}{dt} = 9\\pi \\frac{dh}{dt}$.",
      "Given $\\frac{dh}{dt} = 1.50$.",
      "Calculate: $\\frac{dV}{dt} = 9\\pi (1.50) = 42.412$ m³/min."
    ]
  },
  {
    "id": "mega-app-var-50268",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Water flows into a cylindrical tank at 42.41 m^3/min. The water level rises at 1.50 m/min. What is the radius of the tank?",
    "answer": "3.00 meters",
    "steps": [
      "Let $V = \\pi r^2 h$. Since $r$ is constant, $\\frac{dV}{dt} = \\pi r^2 \\frac{dh}{dt}$.",
      "Given $\\frac{dV}{dt} = 42.41$ and $\\frac{dh}{dt} = 1.50$.",
      "Substitute: $42.41 = \\pi r^2 (1.50)$.",
      "Solve for $r^2$: $r^2 = \\frac{42.41}{\\pi \\times 1.50} = 9$.",
      "Therefore, $r = \\sqrt{9} = 3.00$ meters."
    ]
  },
  {
    "id": "mega-app-var-50269",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Water flows into a cylindrical tank of radius 3 meters at a rate of 56.55 cubic meters per minute. How fast is the water level rising?",
    "answer": "2.000 m/min",
    "steps": [
      "The volume of a cylinder is $V = \\pi r^2 h$.",
      "The radius is constant at $r = 3$, so $V = \\pi (3)^2 h = 9\\pi h$.",
      "Differentiate with respect to $t$: $\\frac{dV}{dt} = 9\\pi \\frac{dh}{dt}$.",
      "Substitute $\\frac{dV}{dt} = 56.55$: $56.55 = 9\\pi \\frac{dh}{dt}$.",
      "Solve for $\\frac{dh}{dt}$: $\\frac{dh}{dt} = \\frac{56.55}{9\\pi} = 2.000$ m/min."
    ]
  },
  {
    "id": "mega-app-var-50270",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "The water level in a cylindrical tank of radius 3 meters is rising at 2.00 m/min. At what rate is water flowing into the tank?",
    "answer": "56.549 m^3/min",
    "steps": [
      "Volume formula is $V = \\pi r^2 h$. With $r=3$, $V = 9\\pi h$.",
      "Taking derivative: $\\frac{dV}{dt} = 9\\pi \\frac{dh}{dt}$.",
      "Given $\\frac{dh}{dt} = 2.00$.",
      "Calculate: $\\frac{dV}{dt} = 9\\pi (2.00) = 56.549$ m³/min."
    ]
  },
  {
    "id": "mega-app-var-50271",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Water flows into a cylindrical tank at 56.55 m^3/min. The water level rises at 2.00 m/min. What is the radius of the tank?",
    "answer": "3.00 meters",
    "steps": [
      "Let $V = \\pi r^2 h$. Since $r$ is constant, $\\frac{dV}{dt} = \\pi r^2 \\frac{dh}{dt}$.",
      "Given $\\frac{dV}{dt} = 56.55$ and $\\frac{dh}{dt} = 2.00$.",
      "Substitute: $56.55 = \\pi r^2 (2.00)$.",
      "Solve for $r^2$: $r^2 = \\frac{56.55}{\\pi \\times 2.00} = 9$.",
      "Therefore, $r = \\sqrt{9} = 3.00$ meters."
    ]
  },
  {
    "id": "mega-app-var-50272",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Water flows into a cylindrical tank of radius 5 meters at a rate of 39.27 cubic meters per minute. How fast is the water level rising?",
    "answer": "0.500 m/min",
    "steps": [
      "The volume of a cylinder is $V = \\pi r^2 h$.",
      "The radius is constant at $r = 5$, so $V = \\pi (5)^2 h = 25\\pi h$.",
      "Differentiate with respect to $t$: $\\frac{dV}{dt} = 25\\pi \\frac{dh}{dt}$.",
      "Substitute $\\frac{dV}{dt} = 39.27$: $39.27 = 25\\pi \\frac{dh}{dt}$.",
      "Solve for $\\frac{dh}{dt}$: $\\frac{dh}{dt} = \\frac{39.27}{25\\pi} = 0.500$ m/min."
    ]
  },
  {
    "id": "mega-app-var-50273",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "The water level in a cylindrical tank of radius 5 meters is rising at 0.50 m/min. At what rate is water flowing into the tank?",
    "answer": "39.270 m^3/min",
    "steps": [
      "Volume formula is $V = \\pi r^2 h$. With $r=5$, $V = 25\\pi h$.",
      "Taking derivative: $\\frac{dV}{dt} = 25\\pi \\frac{dh}{dt}$.",
      "Given $\\frac{dh}{dt} = 0.50$.",
      "Calculate: $\\frac{dV}{dt} = 25\\pi (0.50) = 39.270$ m³/min."
    ]
  },
  {
    "id": "mega-app-var-50274",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Water flows into a cylindrical tank at 39.27 m^3/min. The water level rises at 0.50 m/min. What is the radius of the tank?",
    "answer": "5.00 meters",
    "steps": [
      "Let $V = \\pi r^2 h$. Since $r$ is constant, $\\frac{dV}{dt} = \\pi r^2 \\frac{dh}{dt}$.",
      "Given $\\frac{dV}{dt} = 39.27$ and $\\frac{dh}{dt} = 0.50$.",
      "Substitute: $39.27 = \\pi r^2 (0.50)$.",
      "Solve for $r^2$: $r^2 = \\frac{39.27}{\\pi \\times 0.50} = 25$.",
      "Therefore, $r = \\sqrt{25} = 5.00$ meters."
    ]
  },
  {
    "id": "mega-app-var-50275",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Water flows into a cylindrical tank of radius 5 meters at a rate of 78.54 cubic meters per minute. How fast is the water level rising?",
    "answer": "1.000 m/min",
    "steps": [
      "The volume of a cylinder is $V = \\pi r^2 h$.",
      "The radius is constant at $r = 5$, so $V = \\pi (5)^2 h = 25\\pi h$.",
      "Differentiate with respect to $t$: $\\frac{dV}{dt} = 25\\pi \\frac{dh}{dt}$.",
      "Substitute $\\frac{dV}{dt} = 78.54$: $78.54 = 25\\pi \\frac{dh}{dt}$.",
      "Solve for $\\frac{dh}{dt}$: $\\frac{dh}{dt} = \\frac{78.54}{25\\pi} = 1.000$ m/min."
    ]
  },
  {
    "id": "mega-app-var-50276",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "The water level in a cylindrical tank of radius 5 meters is rising at 1.00 m/min. At what rate is water flowing into the tank?",
    "answer": "78.540 m^3/min",
    "steps": [
      "Volume formula is $V = \\pi r^2 h$. With $r=5$, $V = 25\\pi h$.",
      "Taking derivative: $\\frac{dV}{dt} = 25\\pi \\frac{dh}{dt}$.",
      "Given $\\frac{dh}{dt} = 1.00$.",
      "Calculate: $\\frac{dV}{dt} = 25\\pi (1.00) = 78.540$ m³/min."
    ]
  },
  {
    "id": "mega-app-var-50277",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Water flows into a cylindrical tank at 78.54 m^3/min. The water level rises at 1.00 m/min. What is the radius of the tank?",
    "answer": "5.00 meters",
    "steps": [
      "Let $V = \\pi r^2 h$. Since $r$ is constant, $\\frac{dV}{dt} = \\pi r^2 \\frac{dh}{dt}$.",
      "Given $\\frac{dV}{dt} = 78.54$ and $\\frac{dh}{dt} = 1.00$.",
      "Substitute: $78.54 = \\pi r^2 (1.00)$.",
      "Solve for $r^2$: $r^2 = \\frac{78.54}{\\pi \\times 1.00} = 25$.",
      "Therefore, $r = \\sqrt{25} = 5.00$ meters."
    ]
  },
  {
    "id": "mega-app-var-50278",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Water flows into a cylindrical tank of radius 5 meters at a rate of 117.81 cubic meters per minute. How fast is the water level rising?",
    "answer": "1.500 m/min",
    "steps": [
      "The volume of a cylinder is $V = \\pi r^2 h$.",
      "The radius is constant at $r = 5$, so $V = \\pi (5)^2 h = 25\\pi h$.",
      "Differentiate with respect to $t$: $\\frac{dV}{dt} = 25\\pi \\frac{dh}{dt}$.",
      "Substitute $\\frac{dV}{dt} = 117.81$: $117.81 = 25\\pi \\frac{dh}{dt}$.",
      "Solve for $\\frac{dh}{dt}$: $\\frac{dh}{dt} = \\frac{117.81}{25\\pi} = 1.500$ m/min."
    ]
  },
  {
    "id": "mega-app-var-50279",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "The water level in a cylindrical tank of radius 5 meters is rising at 1.50 m/min. At what rate is water flowing into the tank?",
    "answer": "117.810 m^3/min",
    "steps": [
      "Volume formula is $V = \\pi r^2 h$. With $r=5$, $V = 25\\pi h$.",
      "Taking derivative: $\\frac{dV}{dt} = 25\\pi \\frac{dh}{dt}$.",
      "Given $\\frac{dh}{dt} = 1.50$.",
      "Calculate: $\\frac{dV}{dt} = 25\\pi (1.50) = 117.810$ m³/min."
    ]
  },
  {
    "id": "mega-app-var-50280",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Water flows into a cylindrical tank at 117.81 m^3/min. The water level rises at 1.50 m/min. What is the radius of the tank?",
    "answer": "5.00 meters",
    "steps": [
      "Let $V = \\pi r^2 h$. Since $r$ is constant, $\\frac{dV}{dt} = \\pi r^2 \\frac{dh}{dt}$.",
      "Given $\\frac{dV}{dt} = 117.81$ and $\\frac{dh}{dt} = 1.50$.",
      "Substitute: $117.81 = \\pi r^2 (1.50)$.",
      "Solve for $r^2$: $r^2 = \\frac{117.81}{\\pi \\times 1.50} = 25$.",
      "Therefore, $r = \\sqrt{25} = 5.00$ meters."
    ]
  },
  {
    "id": "mega-app-var-50281",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Water flows into a cylindrical tank of radius 5 meters at a rate of 157.08 cubic meters per minute. How fast is the water level rising?",
    "answer": "2.000 m/min",
    "steps": [
      "The volume of a cylinder is $V = \\pi r^2 h$.",
      "The radius is constant at $r = 5$, so $V = \\pi (5)^2 h = 25\\pi h$.",
      "Differentiate with respect to $t$: $\\frac{dV}{dt} = 25\\pi \\frac{dh}{dt}$.",
      "Substitute $\\frac{dV}{dt} = 157.08$: $157.08 = 25\\pi \\frac{dh}{dt}$.",
      "Solve for $\\frac{dh}{dt}$: $\\frac{dh}{dt} = \\frac{157.08}{25\\pi} = 2.000$ m/min."
    ]
  },
  {
    "id": "mega-app-var-50282",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "The water level in a cylindrical tank of radius 5 meters is rising at 2.00 m/min. At what rate is water flowing into the tank?",
    "answer": "157.080 m^3/min",
    "steps": [
      "Volume formula is $V = \\pi r^2 h$. With $r=5$, $V = 25\\pi h$.",
      "Taking derivative: $\\frac{dV}{dt} = 25\\pi \\frac{dh}{dt}$.",
      "Given $\\frac{dh}{dt} = 2.00$.",
      "Calculate: $\\frac{dV}{dt} = 25\\pi (2.00) = 157.080$ m³/min."
    ]
  },
  {
    "id": "mega-app-var-50283",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Water flows into a cylindrical tank at 157.08 m^3/min. The water level rises at 2.00 m/min. What is the radius of the tank?",
    "answer": "5.00 meters",
    "steps": [
      "Let $V = \\pi r^2 h$. Since $r$ is constant, $\\frac{dV}{dt} = \\pi r^2 \\frac{dh}{dt}$.",
      "Given $\\frac{dV}{dt} = 157.08$ and $\\frac{dh}{dt} = 2.00$.",
      "Substitute: $157.08 = \\pi r^2 (2.00)$.",
      "Solve for $r^2$: $r^2 = \\frac{157.08}{\\pi \\times 2.00} = 25$.",
      "Therefore, $r = \\sqrt{25} = 5.00$ meters."
    ]
  },
  {
    "id": "mega-app-var-50284",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Water flows into a cylindrical tank of radius 8 meters at a rate of 100.53 cubic meters per minute. How fast is the water level rising?",
    "answer": "0.500 m/min",
    "steps": [
      "The volume of a cylinder is $V = \\pi r^2 h$.",
      "The radius is constant at $r = 8$, so $V = \\pi (8)^2 h = 64\\pi h$.",
      "Differentiate with respect to $t$: $\\frac{dV}{dt} = 64\\pi \\frac{dh}{dt}$.",
      "Substitute $\\frac{dV}{dt} = 100.53$: $100.53 = 64\\pi \\frac{dh}{dt}$.",
      "Solve for $\\frac{dh}{dt}$: $\\frac{dh}{dt} = \\frac{100.53}{64\\pi} = 0.500$ m/min."
    ]
  },
  {
    "id": "mega-app-var-50285",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "The water level in a cylindrical tank of radius 8 meters is rising at 0.50 m/min. At what rate is water flowing into the tank?",
    "answer": "100.531 m^3/min",
    "steps": [
      "Volume formula is $V = \\pi r^2 h$. With $r=8$, $V = 64\\pi h$.",
      "Taking derivative: $\\frac{dV}{dt} = 64\\pi \\frac{dh}{dt}$.",
      "Given $\\frac{dh}{dt} = 0.50$.",
      "Calculate: $\\frac{dV}{dt} = 64\\pi (0.50) = 100.531$ m³/min."
    ]
  },
  {
    "id": "mega-app-var-50286",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Water flows into a cylindrical tank at 100.53 m^3/min. The water level rises at 0.50 m/min. What is the radius of the tank?",
    "answer": "8.00 meters",
    "steps": [
      "Let $V = \\pi r^2 h$. Since $r$ is constant, $\\frac{dV}{dt} = \\pi r^2 \\frac{dh}{dt}$.",
      "Given $\\frac{dV}{dt} = 100.53$ and $\\frac{dh}{dt} = 0.50$.",
      "Substitute: $100.53 = \\pi r^2 (0.50)$.",
      "Solve for $r^2$: $r^2 = \\frac{100.53}{\\pi \\times 0.50} = 64$.",
      "Therefore, $r = \\sqrt{64} = 8.00$ meters."
    ]
  },
  {
    "id": "mega-app-var-50287",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Water flows into a cylindrical tank of radius 8 meters at a rate of 201.06 cubic meters per minute. How fast is the water level rising?",
    "answer": "1.000 m/min",
    "steps": [
      "The volume of a cylinder is $V = \\pi r^2 h$.",
      "The radius is constant at $r = 8$, so $V = \\pi (8)^2 h = 64\\pi h$.",
      "Differentiate with respect to $t$: $\\frac{dV}{dt} = 64\\pi \\frac{dh}{dt}$.",
      "Substitute $\\frac{dV}{dt} = 201.06$: $201.06 = 64\\pi \\frac{dh}{dt}$.",
      "Solve for $\\frac{dh}{dt}$: $\\frac{dh}{dt} = \\frac{201.06}{64\\pi} = 1.000$ m/min."
    ]
  },
  {
    "id": "mega-app-var-50288",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "The water level in a cylindrical tank of radius 8 meters is rising at 1.00 m/min. At what rate is water flowing into the tank?",
    "answer": "201.062 m^3/min",
    "steps": [
      "Volume formula is $V = \\pi r^2 h$. With $r=8$, $V = 64\\pi h$.",
      "Taking derivative: $\\frac{dV}{dt} = 64\\pi \\frac{dh}{dt}$.",
      "Given $\\frac{dh}{dt} = 1.00$.",
      "Calculate: $\\frac{dV}{dt} = 64\\pi (1.00) = 201.062$ m³/min."
    ]
  },
  {
    "id": "mega-app-var-50289",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Water flows into a cylindrical tank at 201.06 m^3/min. The water level rises at 1.00 m/min. What is the radius of the tank?",
    "answer": "8.00 meters",
    "steps": [
      "Let $V = \\pi r^2 h$. Since $r$ is constant, $\\frac{dV}{dt} = \\pi r^2 \\frac{dh}{dt}$.",
      "Given $\\frac{dV}{dt} = 201.06$ and $\\frac{dh}{dt} = 1.00$.",
      "Substitute: $201.06 = \\pi r^2 (1.00)$.",
      "Solve for $r^2$: $r^2 = \\frac{201.06}{\\pi \\times 1.00} = 64$.",
      "Therefore, $r = \\sqrt{64} = 8.00$ meters."
    ]
  },
  {
    "id": "mega-app-var-50290",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Water flows into a cylindrical tank of radius 8 meters at a rate of 301.59 cubic meters per minute. How fast is the water level rising?",
    "answer": "1.500 m/min",
    "steps": [
      "The volume of a cylinder is $V = \\pi r^2 h$.",
      "The radius is constant at $r = 8$, so $V = \\pi (8)^2 h = 64\\pi h$.",
      "Differentiate with respect to $t$: $\\frac{dV}{dt} = 64\\pi \\frac{dh}{dt}$.",
      "Substitute $\\frac{dV}{dt} = 301.59$: $301.59 = 64\\pi \\frac{dh}{dt}$.",
      "Solve for $\\frac{dh}{dt}$: $\\frac{dh}{dt} = \\frac{301.59}{64\\pi} = 1.500$ m/min."
    ]
  },
  {
    "id": "mega-app-var-50291",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "The water level in a cylindrical tank of radius 8 meters is rising at 1.50 m/min. At what rate is water flowing into the tank?",
    "answer": "301.593 m^3/min",
    "steps": [
      "Volume formula is $V = \\pi r^2 h$. With $r=8$, $V = 64\\pi h$.",
      "Taking derivative: $\\frac{dV}{dt} = 64\\pi \\frac{dh}{dt}$.",
      "Given $\\frac{dh}{dt} = 1.50$.",
      "Calculate: $\\frac{dV}{dt} = 64\\pi (1.50) = 301.593$ m³/min."
    ]
  },
  {
    "id": "mega-app-var-50292",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Water flows into a cylindrical tank at 301.59 m^3/min. The water level rises at 1.50 m/min. What is the radius of the tank?",
    "answer": "8.00 meters",
    "steps": [
      "Let $V = \\pi r^2 h$. Since $r$ is constant, $\\frac{dV}{dt} = \\pi r^2 \\frac{dh}{dt}$.",
      "Given $\\frac{dV}{dt} = 301.59$ and $\\frac{dh}{dt} = 1.50$.",
      "Substitute: $301.59 = \\pi r^2 (1.50)$.",
      "Solve for $r^2$: $r^2 = \\frac{301.59}{\\pi \\times 1.50} = 64$.",
      "Therefore, $r = \\sqrt{64} = 8.00$ meters."
    ]
  },
  {
    "id": "mega-app-var-50293",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Water flows into a cylindrical tank of radius 8 meters at a rate of 402.12 cubic meters per minute. How fast is the water level rising?",
    "answer": "2.000 m/min",
    "steps": [
      "The volume of a cylinder is $V = \\pi r^2 h$.",
      "The radius is constant at $r = 8$, so $V = \\pi (8)^2 h = 64\\pi h$.",
      "Differentiate with respect to $t$: $\\frac{dV}{dt} = 64\\pi \\frac{dh}{dt}$.",
      "Substitute $\\frac{dV}{dt} = 402.12$: $402.12 = 64\\pi \\frac{dh}{dt}$.",
      "Solve for $\\frac{dh}{dt}$: $\\frac{dh}{dt} = \\frac{402.12}{64\\pi} = 2.000$ m/min."
    ]
  },
  {
    "id": "mega-app-var-50294",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "The water level in a cylindrical tank of radius 8 meters is rising at 2.00 m/min. At what rate is water flowing into the tank?",
    "answer": "402.124 m^3/min",
    "steps": [
      "Volume formula is $V = \\pi r^2 h$. With $r=8$, $V = 64\\pi h$.",
      "Taking derivative: $\\frac{dV}{dt} = 64\\pi \\frac{dh}{dt}$.",
      "Given $\\frac{dh}{dt} = 2.00$.",
      "Calculate: $\\frac{dV}{dt} = 64\\pi (2.00) = 402.124$ m³/min."
    ]
  },
  {
    "id": "mega-app-var-50295",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Water flows into a cylindrical tank at 402.12 m^3/min. The water level rises at 2.00 m/min. What is the radius of the tank?",
    "answer": "8.00 meters",
    "steps": [
      "Let $V = \\pi r^2 h$. Since $r$ is constant, $\\frac{dV}{dt} = \\pi r^2 \\frac{dh}{dt}$.",
      "Given $\\frac{dV}{dt} = 402.12$ and $\\frac{dh}{dt} = 2.00$.",
      "Substitute: $402.12 = \\pi r^2 (2.00)$.",
      "Solve for $r^2$: $r^2 = \\frac{402.12}{\\pi \\times 2.00} = 64$.",
      "Therefore, $r = \\sqrt{64} = 8.00$ meters."
    ]
  },
  {
    "id": "mega-app-var-50296",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Water flows into a cylindrical tank of radius 10 meters at a rate of 157.08 cubic meters per minute. How fast is the water level rising?",
    "answer": "0.500 m/min",
    "steps": [
      "The volume of a cylinder is $V = \\pi r^2 h$.",
      "The radius is constant at $r = 10$, so $V = \\pi (10)^2 h = 100\\pi h$.",
      "Differentiate with respect to $t$: $\\frac{dV}{dt} = 100\\pi \\frac{dh}{dt}$.",
      "Substitute $\\frac{dV}{dt} = 157.08$: $157.08 = 100\\pi \\frac{dh}{dt}$.",
      "Solve for $\\frac{dh}{dt}$: $\\frac{dh}{dt} = \\frac{157.08}{100\\pi} = 0.500$ m/min."
    ]
  },
  {
    "id": "mega-app-var-50297",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "The water level in a cylindrical tank of radius 10 meters is rising at 0.50 m/min. At what rate is water flowing into the tank?",
    "answer": "157.080 m^3/min",
    "steps": [
      "Volume formula is $V = \\pi r^2 h$. With $r=10$, $V = 100\\pi h$.",
      "Taking derivative: $\\frac{dV}{dt} = 100\\pi \\frac{dh}{dt}$.",
      "Given $\\frac{dh}{dt} = 0.50$.",
      "Calculate: $\\frac{dV}{dt} = 100\\pi (0.50) = 157.080$ m³/min."
    ]
  },
  {
    "id": "mega-app-var-50298",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Water flows into a cylindrical tank at 157.08 m^3/min. The water level rises at 0.50 m/min. What is the radius of the tank?",
    "answer": "10.00 meters",
    "steps": [
      "Let $V = \\pi r^2 h$. Since $r$ is constant, $\\frac{dV}{dt} = \\pi r^2 \\frac{dh}{dt}$.",
      "Given $\\frac{dV}{dt} = 157.08$ and $\\frac{dh}{dt} = 0.50$.",
      "Substitute: $157.08 = \\pi r^2 (0.50)$.",
      "Solve for $r^2$: $r^2 = \\frac{157.08}{\\pi \\times 0.50} = 100$.",
      "Therefore, $r = \\sqrt{100} = 10.00$ meters."
    ]
  },
  {
    "id": "mega-app-var-50299",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Water flows into a cylindrical tank of radius 10 meters at a rate of 314.16 cubic meters per minute. How fast is the water level rising?",
    "answer": "1.000 m/min",
    "steps": [
      "The volume of a cylinder is $V = \\pi r^2 h$.",
      "The radius is constant at $r = 10$, so $V = \\pi (10)^2 h = 100\\pi h$.",
      "Differentiate with respect to $t$: $\\frac{dV}{dt} = 100\\pi \\frac{dh}{dt}$.",
      "Substitute $\\frac{dV}{dt} = 314.16$: $314.16 = 100\\pi \\frac{dh}{dt}$.",
      "Solve for $\\frac{dh}{dt}$: $\\frac{dh}{dt} = \\frac{314.16}{100\\pi} = 1.000$ m/min."
    ]
  },
  {
    "id": "mega-app-var-50300",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "The water level in a cylindrical tank of radius 10 meters is rising at 1.00 m/min. At what rate is water flowing into the tank?",
    "answer": "314.159 m^3/min",
    "steps": [
      "Volume formula is $V = \\pi r^2 h$. With $r=10$, $V = 100\\pi h$.",
      "Taking derivative: $\\frac{dV}{dt} = 100\\pi \\frac{dh}{dt}$.",
      "Given $\\frac{dh}{dt} = 1.00$.",
      "Calculate: $\\frac{dV}{dt} = 100\\pi (1.00) = 314.159$ m³/min."
    ]
  },
  {
    "id": "mega-app-var-50301",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Water flows into a cylindrical tank at 314.16 m^3/min. The water level rises at 1.00 m/min. What is the radius of the tank?",
    "answer": "10.00 meters",
    "steps": [
      "Let $V = \\pi r^2 h$. Since $r$ is constant, $\\frac{dV}{dt} = \\pi r^2 \\frac{dh}{dt}$.",
      "Given $\\frac{dV}{dt} = 314.16$ and $\\frac{dh}{dt} = 1.00$.",
      "Substitute: $314.16 = \\pi r^2 (1.00)$.",
      "Solve for $r^2$: $r^2 = \\frac{314.16}{\\pi \\times 1.00} = 100$.",
      "Therefore, $r = \\sqrt{100} = 10.00$ meters."
    ]
  },
  {
    "id": "mega-app-var-50302",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Water flows into a cylindrical tank of radius 10 meters at a rate of 471.24 cubic meters per minute. How fast is the water level rising?",
    "answer": "1.500 m/min",
    "steps": [
      "The volume of a cylinder is $V = \\pi r^2 h$.",
      "The radius is constant at $r = 10$, so $V = \\pi (10)^2 h = 100\\pi h$.",
      "Differentiate with respect to $t$: $\\frac{dV}{dt} = 100\\pi \\frac{dh}{dt}$.",
      "Substitute $\\frac{dV}{dt} = 471.24$: $471.24 = 100\\pi \\frac{dh}{dt}$.",
      "Solve for $\\frac{dh}{dt}$: $\\frac{dh}{dt} = \\frac{471.24}{100\\pi} = 1.500$ m/min."
    ]
  },
  {
    "id": "mega-app-var-50303",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "The water level in a cylindrical tank of radius 10 meters is rising at 1.50 m/min. At what rate is water flowing into the tank?",
    "answer": "471.239 m^3/min",
    "steps": [
      "Volume formula is $V = \\pi r^2 h$. With $r=10$, $V = 100\\pi h$.",
      "Taking derivative: $\\frac{dV}{dt} = 100\\pi \\frac{dh}{dt}$.",
      "Given $\\frac{dh}{dt} = 1.50$.",
      "Calculate: $\\frac{dV}{dt} = 100\\pi (1.50) = 471.239$ m³/min."
    ]
  },
  {
    "id": "mega-app-var-50304",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Water flows into a cylindrical tank at 471.24 m^3/min. The water level rises at 1.50 m/min. What is the radius of the tank?",
    "answer": "10.00 meters",
    "steps": [
      "Let $V = \\pi r^2 h$. Since $r$ is constant, $\\frac{dV}{dt} = \\pi r^2 \\frac{dh}{dt}$.",
      "Given $\\frac{dV}{dt} = 471.24$ and $\\frac{dh}{dt} = 1.50$.",
      "Substitute: $471.24 = \\pi r^2 (1.50)$.",
      "Solve for $r^2$: $r^2 = \\frac{471.24}{\\pi \\times 1.50} = 100$.",
      "Therefore, $r = \\sqrt{100} = 10.00$ meters."
    ]
  },
  {
    "id": "mega-app-var-50305",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "Water flows into a cylindrical tank of radius 10 meters at a rate of 628.32 cubic meters per minute. How fast is the water level rising?",
    "answer": "2.000 m/min",
    "steps": [
      "The volume of a cylinder is $V = \\pi r^2 h$.",
      "The radius is constant at $r = 10$, so $V = \\pi (10)^2 h = 100\\pi h$.",
      "Differentiate with respect to $t$: $\\frac{dV}{dt} = 100\\pi \\frac{dh}{dt}$.",
      "Substitute $\\frac{dV}{dt} = 628.32$: $628.32 = 100\\pi \\frac{dh}{dt}$.",
      "Solve for $\\frac{dh}{dt}$: $\\frac{dh}{dt} = \\frac{628.32}{100\\pi} = 2.000$ m/min."
    ]
  },
  {
    "id": "mega-app-var-50306",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "The water level in a cylindrical tank of radius 10 meters is rising at 2.00 m/min. At what rate is water flowing into the tank?",
    "answer": "628.319 m^3/min",
    "steps": [
      "Volume formula is $V = \\pi r^2 h$. With $r=10$, $V = 100\\pi h$.",
      "Taking derivative: $\\frac{dV}{dt} = 100\\pi \\frac{dh}{dt}$.",
      "Given $\\frac{dh}{dt} = 2.00$.",
      "Calculate: $\\frac{dV}{dt} = 100\\pi (2.00) = 628.319$ m³/min."
    ]
  },
  {
    "id": "mega-app-var-50307",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "Water flows into a cylindrical tank at 628.32 m^3/min. The water level rises at 2.00 m/min. What is the radius of the tank?",
    "answer": "10.00 meters",
    "steps": [
      "Let $V = \\pi r^2 h$. Since $r$ is constant, $\\frac{dV}{dt} = \\pi r^2 \\frac{dh}{dt}$.",
      "Given $\\frac{dV}{dt} = 628.32$ and $\\frac{dh}{dt} = 2.00$.",
      "Substitute: $628.32 = \\pi r^2 (2.00)$.",
      "Solve for $r^2$: $r^2 = \\frac{628.32}{\\pi \\times 2.00} = 100$.",
      "Therefore, $r = \\sqrt{100} = 10.00$ meters."
    ]
  },
  {
    "id": "mega-app-var-50308",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A spherical balloon is inflated so its radius increases at 0.1 cm/s. How fast is the volume increasing when the radius is 2 cm?",
    "answer": "5.03 cm^3/s",
    "steps": [
      "The volume of a sphere is $V = \\frac{4}{3}\\pi r^3$.",
      "Differentiate with respect to $t$: $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "Substitute $r = 2$ and $\\frac{dr}{dt} = 0.1$:",
      "$\\frac{dV}{dt} = 4\\pi (2)^2 (0.1) = 5.03$ cm³/s."
    ]
  },
  {
    "id": "mega-app-var-50309",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A spherical balloon is inflated at 5.03 cm^3/s. How fast is the radius increasing when the radius is 2 cm?",
    "answer": "0.100 cm/s",
    "steps": [
      "The volume relation is $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "Given $\\frac{dV}{dt} = 5.03$ and $r = 2$.",
      "$5.03 = 4\\pi (2^2) \\frac{dr}{dt} = 16\\pi \\frac{dr}{dt}$.",
      "$\\frac{dr}{dt} = \\frac{5.03}{16\\pi} = 0.100$ cm/s."
    ]
  },
  {
    "id": "mega-app-var-50310",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A spherical balloon is inflated at 5.03 cm^3/s, and its radius is increasing at 0.1 cm/s. What is the radius at this instant?",
    "answer": "2.00 cm",
    "steps": [
      "Using $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "$5.03 = 4\\pi r^2 (0.1)$.",
      "$r^2 = \\frac{5.03}{4\\pi \\times 0.1} = 4$.",
      "$r = \\sqrt{4} = 2.00$ cm."
    ]
  },
  {
    "id": "mega-app-var-50311",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A spherical balloon's radius increases at 0.1 cm/s. How fast is its surface area increasing when the radius is 2 cm?",
    "answer": "5.03 cm^2/s",
    "steps": [
      "Surface area of a sphere is $S = 4\\pi r^2$.",
      "Differentiate: $\\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt}$.",
      "Substitute $r = 2, \\frac{dr}{dt} = 0.1$:",
      "$\\frac{dS}{dt} = 8\\pi (2)(0.1) = 5.03$ cm²/s."
    ]
  },
  {
    "id": "mega-app-var-50312",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A spherical balloon's volume increases at 5.03 cm^3/s. What is the rate of change of the surface area when the radius is 2 cm?",
    "answer": "5.03 cm^2/s",
    "steps": [
      "First, find $\\frac{dr}{dt}$ using $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "$5.03 = 4\\pi (2)^2 \\frac{dr}{dt} \\implies \\frac{dr}{dt} = 0.1$.",
      "Now use surface area $\\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt}$.",
      "$\\frac{dS}{dt} = 8\\pi (2)(0.1) = 5.03$ cm²/s."
    ]
  },
  {
    "id": "mega-app-var-50313",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A spherical balloon is inflated so its radius increases at 0.2 cm/s. How fast is the volume increasing when the radius is 2 cm?",
    "answer": "10.05 cm^3/s",
    "steps": [
      "The volume of a sphere is $V = \\frac{4}{3}\\pi r^3$.",
      "Differentiate with respect to $t$: $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "Substitute $r = 2$ and $\\frac{dr}{dt} = 0.2$:",
      "$\\frac{dV}{dt} = 4\\pi (2)^2 (0.2) = 10.05$ cm³/s."
    ]
  },
  {
    "id": "mega-app-var-50314",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A spherical balloon is inflated at 10.05 cm^3/s. How fast is the radius increasing when the radius is 2 cm?",
    "answer": "0.200 cm/s",
    "steps": [
      "The volume relation is $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "Given $\\frac{dV}{dt} = 10.05$ and $r = 2$.",
      "$10.05 = 4\\pi (2^2) \\frac{dr}{dt} = 16\\pi \\frac{dr}{dt}$.",
      "$\\frac{dr}{dt} = \\frac{10.05}{16\\pi} = 0.200$ cm/s."
    ]
  },
  {
    "id": "mega-app-var-50315",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A spherical balloon is inflated at 10.05 cm^3/s, and its radius is increasing at 0.2 cm/s. What is the radius at this instant?",
    "answer": "2.00 cm",
    "steps": [
      "Using $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "$10.05 = 4\\pi r^2 (0.2)$.",
      "$r^2 = \\frac{10.05}{4\\pi \\times 0.2} = 4$.",
      "$r = \\sqrt{4} = 2.00$ cm."
    ]
  },
  {
    "id": "mega-app-var-50316",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A spherical balloon's radius increases at 0.2 cm/s. How fast is its surface area increasing when the radius is 2 cm?",
    "answer": "10.05 cm^2/s",
    "steps": [
      "Surface area of a sphere is $S = 4\\pi r^2$.",
      "Differentiate: $\\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt}$.",
      "Substitute $r = 2, \\frac{dr}{dt} = 0.2$:",
      "$\\frac{dS}{dt} = 8\\pi (2)(0.2) = 10.05$ cm²/s."
    ]
  },
  {
    "id": "mega-app-var-50317",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A spherical balloon's volume increases at 10.05 cm^3/s. What is the rate of change of the surface area when the radius is 2 cm?",
    "answer": "10.05 cm^2/s",
    "steps": [
      "First, find $\\frac{dr}{dt}$ using $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "$10.05 = 4\\pi (2)^2 \\frac{dr}{dt} \\implies \\frac{dr}{dt} = 0.2$.",
      "Now use surface area $\\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt}$.",
      "$\\frac{dS}{dt} = 8\\pi (2)(0.2) = 10.05$ cm²/s."
    ]
  },
  {
    "id": "mega-app-var-50318",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A spherical balloon is inflated so its radius increases at 0.5 cm/s. How fast is the volume increasing when the radius is 2 cm?",
    "answer": "25.13 cm^3/s",
    "steps": [
      "The volume of a sphere is $V = \\frac{4}{3}\\pi r^3$.",
      "Differentiate with respect to $t$: $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "Substitute $r = 2$ and $\\frac{dr}{dt} = 0.5$:",
      "$\\frac{dV}{dt} = 4\\pi (2)^2 (0.5) = 25.13$ cm³/s."
    ]
  },
  {
    "id": "mega-app-var-50319",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A spherical balloon is inflated at 25.13 cm^3/s. How fast is the radius increasing when the radius is 2 cm?",
    "answer": "0.500 cm/s",
    "steps": [
      "The volume relation is $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "Given $\\frac{dV}{dt} = 25.13$ and $r = 2$.",
      "$25.13 = 4\\pi (2^2) \\frac{dr}{dt} = 16\\pi \\frac{dr}{dt}$.",
      "$\\frac{dr}{dt} = \\frac{25.13}{16\\pi} = 0.500$ cm/s."
    ]
  },
  {
    "id": "mega-app-var-50320",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A spherical balloon is inflated at 25.13 cm^3/s, and its radius is increasing at 0.5 cm/s. What is the radius at this instant?",
    "answer": "2.00 cm",
    "steps": [
      "Using $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "$25.13 = 4\\pi r^2 (0.5)$.",
      "$r^2 = \\frac{25.13}{4\\pi \\times 0.5} = 4$.",
      "$r = \\sqrt{4} = 2.00$ cm."
    ]
  },
  {
    "id": "mega-app-var-50321",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A spherical balloon's radius increases at 0.5 cm/s. How fast is its surface area increasing when the radius is 2 cm?",
    "answer": "25.13 cm^2/s",
    "steps": [
      "Surface area of a sphere is $S = 4\\pi r^2$.",
      "Differentiate: $\\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt}$.",
      "Substitute $r = 2, \\frac{dr}{dt} = 0.5$:",
      "$\\frac{dS}{dt} = 8\\pi (2)(0.5) = 25.13$ cm²/s."
    ]
  },
  {
    "id": "mega-app-var-50322",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A spherical balloon's volume increases at 25.13 cm^3/s. What is the rate of change of the surface area when the radius is 2 cm?",
    "answer": "25.13 cm^2/s",
    "steps": [
      "First, find $\\frac{dr}{dt}$ using $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "$25.13 = 4\\pi (2)^2 \\frac{dr}{dt} \\implies \\frac{dr}{dt} = 0.5$.",
      "Now use surface area $\\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt}$.",
      "$\\frac{dS}{dt} = 8\\pi (2)(0.5) = 25.13$ cm²/s."
    ]
  },
  {
    "id": "mega-app-var-50323",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A spherical balloon is inflated so its radius increases at 1 cm/s. How fast is the volume increasing when the radius is 2 cm?",
    "answer": "50.27 cm^3/s",
    "steps": [
      "The volume of a sphere is $V = \\frac{4}{3}\\pi r^3$.",
      "Differentiate with respect to $t$: $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "Substitute $r = 2$ and $\\frac{dr}{dt} = 1$:",
      "$\\frac{dV}{dt} = 4\\pi (2)^2 (1) = 50.27$ cm³/s."
    ]
  },
  {
    "id": "mega-app-var-50324",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A spherical balloon is inflated at 50.27 cm^3/s. How fast is the radius increasing when the radius is 2 cm?",
    "answer": "1.000 cm/s",
    "steps": [
      "The volume relation is $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "Given $\\frac{dV}{dt} = 50.27$ and $r = 2$.",
      "$50.27 = 4\\pi (2^2) \\frac{dr}{dt} = 16\\pi \\frac{dr}{dt}$.",
      "$\\frac{dr}{dt} = \\frac{50.27}{16\\pi} = 1.000$ cm/s."
    ]
  },
  {
    "id": "mega-app-var-50325",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A spherical balloon is inflated at 50.27 cm^3/s, and its radius is increasing at 1 cm/s. What is the radius at this instant?",
    "answer": "2.00 cm",
    "steps": [
      "Using $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "$50.27 = 4\\pi r^2 (1)$.",
      "$r^2 = \\frac{50.27}{4\\pi \\times 1} = 4$.",
      "$r = \\sqrt{4} = 2.00$ cm."
    ]
  },
  {
    "id": "mega-app-var-50326",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A spherical balloon's radius increases at 1 cm/s. How fast is its surface area increasing when the radius is 2 cm?",
    "answer": "50.27 cm^2/s",
    "steps": [
      "Surface area of a sphere is $S = 4\\pi r^2$.",
      "Differentiate: $\\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt}$.",
      "Substitute $r = 2, \\frac{dr}{dt} = 1$:",
      "$\\frac{dS}{dt} = 8\\pi (2)(1) = 50.27$ cm²/s."
    ]
  },
  {
    "id": "mega-app-var-50327",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A spherical balloon's volume increases at 50.27 cm^3/s. What is the rate of change of the surface area when the radius is 2 cm?",
    "answer": "50.27 cm^2/s",
    "steps": [
      "First, find $\\frac{dr}{dt}$ using $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "$50.27 = 4\\pi (2)^2 \\frac{dr}{dt} \\implies \\frac{dr}{dt} = 1$.",
      "Now use surface area $\\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt}$.",
      "$\\frac{dS}{dt} = 8\\pi (2)(1) = 50.27$ cm²/s."
    ]
  },
  {
    "id": "mega-app-var-50328",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A spherical balloon is inflated so its radius increases at 0.1 cm/s. How fast is the volume increasing when the radius is 4 cm?",
    "answer": "20.11 cm^3/s",
    "steps": [
      "The volume of a sphere is $V = \\frac{4}{3}\\pi r^3$.",
      "Differentiate with respect to $t$: $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "Substitute $r = 4$ and $\\frac{dr}{dt} = 0.1$:",
      "$\\frac{dV}{dt} = 4\\pi (4)^2 (0.1) = 20.11$ cm³/s."
    ]
  },
  {
    "id": "mega-app-var-50329",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A spherical balloon is inflated at 20.11 cm^3/s. How fast is the radius increasing when the radius is 4 cm?",
    "answer": "0.100 cm/s",
    "steps": [
      "The volume relation is $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "Given $\\frac{dV}{dt} = 20.11$ and $r = 4$.",
      "$20.11 = 4\\pi (4^2) \\frac{dr}{dt} = 64\\pi \\frac{dr}{dt}$.",
      "$\\frac{dr}{dt} = \\frac{20.11}{64\\pi} = 0.100$ cm/s."
    ]
  },
  {
    "id": "mega-app-var-50330",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A spherical balloon is inflated at 20.11 cm^3/s, and its radius is increasing at 0.1 cm/s. What is the radius at this instant?",
    "answer": "4.00 cm",
    "steps": [
      "Using $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "$20.11 = 4\\pi r^2 (0.1)$.",
      "$r^2 = \\frac{20.11}{4\\pi \\times 0.1} = 16$.",
      "$r = \\sqrt{16} = 4.00$ cm."
    ]
  },
  {
    "id": "mega-app-var-50331",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A spherical balloon's radius increases at 0.1 cm/s. How fast is its surface area increasing when the radius is 4 cm?",
    "answer": "10.05 cm^2/s",
    "steps": [
      "Surface area of a sphere is $S = 4\\pi r^2$.",
      "Differentiate: $\\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt}$.",
      "Substitute $r = 4, \\frac{dr}{dt} = 0.1$:",
      "$\\frac{dS}{dt} = 8\\pi (4)(0.1) = 10.05$ cm²/s."
    ]
  },
  {
    "id": "mega-app-var-50332",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A spherical balloon's volume increases at 20.11 cm^3/s. What is the rate of change of the surface area when the radius is 4 cm?",
    "answer": "10.05 cm^2/s",
    "steps": [
      "First, find $\\frac{dr}{dt}$ using $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "$20.11 = 4\\pi (4)^2 \\frac{dr}{dt} \\implies \\frac{dr}{dt} = 0.1$.",
      "Now use surface area $\\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt}$.",
      "$\\frac{dS}{dt} = 8\\pi (4)(0.1) = 10.05$ cm²/s."
    ]
  },
  {
    "id": "mega-app-var-50333",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A spherical balloon is inflated so its radius increases at 0.2 cm/s. How fast is the volume increasing when the radius is 4 cm?",
    "answer": "40.21 cm^3/s",
    "steps": [
      "The volume of a sphere is $V = \\frac{4}{3}\\pi r^3$.",
      "Differentiate with respect to $t$: $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "Substitute $r = 4$ and $\\frac{dr}{dt} = 0.2$:",
      "$\\frac{dV}{dt} = 4\\pi (4)^2 (0.2) = 40.21$ cm³/s."
    ]
  },
  {
    "id": "mega-app-var-50334",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A spherical balloon is inflated at 40.21 cm^3/s. How fast is the radius increasing when the radius is 4 cm?",
    "answer": "0.200 cm/s",
    "steps": [
      "The volume relation is $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "Given $\\frac{dV}{dt} = 40.21$ and $r = 4$.",
      "$40.21 = 4\\pi (4^2) \\frac{dr}{dt} = 64\\pi \\frac{dr}{dt}$.",
      "$\\frac{dr}{dt} = \\frac{40.21}{64\\pi} = 0.200$ cm/s."
    ]
  },
  {
    "id": "mega-app-var-50335",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A spherical balloon is inflated at 40.21 cm^3/s, and its radius is increasing at 0.2 cm/s. What is the radius at this instant?",
    "answer": "4.00 cm",
    "steps": [
      "Using $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "$40.21 = 4\\pi r^2 (0.2)$.",
      "$r^2 = \\frac{40.21}{4\\pi \\times 0.2} = 16$.",
      "$r = \\sqrt{16} = 4.00$ cm."
    ]
  },
  {
    "id": "mega-app-var-50336",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A spherical balloon's radius increases at 0.2 cm/s. How fast is its surface area increasing when the radius is 4 cm?",
    "answer": "20.11 cm^2/s",
    "steps": [
      "Surface area of a sphere is $S = 4\\pi r^2$.",
      "Differentiate: $\\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt}$.",
      "Substitute $r = 4, \\frac{dr}{dt} = 0.2$:",
      "$\\frac{dS}{dt} = 8\\pi (4)(0.2) = 20.11$ cm²/s."
    ]
  },
  {
    "id": "mega-app-var-50337",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A spherical balloon's volume increases at 40.21 cm^3/s. What is the rate of change of the surface area when the radius is 4 cm?",
    "answer": "20.11 cm^2/s",
    "steps": [
      "First, find $\\frac{dr}{dt}$ using $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "$40.21 = 4\\pi (4)^2 \\frac{dr}{dt} \\implies \\frac{dr}{dt} = 0.2$.",
      "Now use surface area $\\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt}$.",
      "$\\frac{dS}{dt} = 8\\pi (4)(0.2) = 20.11$ cm²/s."
    ]
  },
  {
    "id": "mega-app-var-50338",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A spherical balloon is inflated so its radius increases at 0.5 cm/s. How fast is the volume increasing when the radius is 4 cm?",
    "answer": "100.53 cm^3/s",
    "steps": [
      "The volume of a sphere is $V = \\frac{4}{3}\\pi r^3$.",
      "Differentiate with respect to $t$: $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "Substitute $r = 4$ and $\\frac{dr}{dt} = 0.5$:",
      "$\\frac{dV}{dt} = 4\\pi (4)^2 (0.5) = 100.53$ cm³/s."
    ]
  },
  {
    "id": "mega-app-var-50339",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A spherical balloon is inflated at 100.53 cm^3/s. How fast is the radius increasing when the radius is 4 cm?",
    "answer": "0.500 cm/s",
    "steps": [
      "The volume relation is $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "Given $\\frac{dV}{dt} = 100.53$ and $r = 4$.",
      "$100.53 = 4\\pi (4^2) \\frac{dr}{dt} = 64\\pi \\frac{dr}{dt}$.",
      "$\\frac{dr}{dt} = \\frac{100.53}{64\\pi} = 0.500$ cm/s."
    ]
  },
  {
    "id": "mega-app-var-50340",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A spherical balloon is inflated at 100.53 cm^3/s, and its radius is increasing at 0.5 cm/s. What is the radius at this instant?",
    "answer": "4.00 cm",
    "steps": [
      "Using $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "$100.53 = 4\\pi r^2 (0.5)$.",
      "$r^2 = \\frac{100.53}{4\\pi \\times 0.5} = 16$.",
      "$r = \\sqrt{16} = 4.00$ cm."
    ]
  },
  {
    "id": "mega-app-var-50341",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A spherical balloon's radius increases at 0.5 cm/s. How fast is its surface area increasing when the radius is 4 cm?",
    "answer": "50.27 cm^2/s",
    "steps": [
      "Surface area of a sphere is $S = 4\\pi r^2$.",
      "Differentiate: $\\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt}$.",
      "Substitute $r = 4, \\frac{dr}{dt} = 0.5$:",
      "$\\frac{dS}{dt} = 8\\pi (4)(0.5) = 50.27$ cm²/s."
    ]
  },
  {
    "id": "mega-app-var-50342",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A spherical balloon's volume increases at 100.53 cm^3/s. What is the rate of change of the surface area when the radius is 4 cm?",
    "answer": "50.27 cm^2/s",
    "steps": [
      "First, find $\\frac{dr}{dt}$ using $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "$100.53 = 4\\pi (4)^2 \\frac{dr}{dt} \\implies \\frac{dr}{dt} = 0.5$.",
      "Now use surface area $\\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt}$.",
      "$\\frac{dS}{dt} = 8\\pi (4)(0.5) = 50.27$ cm²/s."
    ]
  },
  {
    "id": "mega-app-var-50343",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A spherical balloon is inflated so its radius increases at 1 cm/s. How fast is the volume increasing when the radius is 4 cm?",
    "answer": "201.06 cm^3/s",
    "steps": [
      "The volume of a sphere is $V = \\frac{4}{3}\\pi r^3$.",
      "Differentiate with respect to $t$: $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "Substitute $r = 4$ and $\\frac{dr}{dt} = 1$:",
      "$\\frac{dV}{dt} = 4\\pi (4)^2 (1) = 201.06$ cm³/s."
    ]
  },
  {
    "id": "mega-app-var-50344",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A spherical balloon is inflated at 201.06 cm^3/s. How fast is the radius increasing when the radius is 4 cm?",
    "answer": "1.000 cm/s",
    "steps": [
      "The volume relation is $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "Given $\\frac{dV}{dt} = 201.06$ and $r = 4$.",
      "$201.06 = 4\\pi (4^2) \\frac{dr}{dt} = 64\\pi \\frac{dr}{dt}$.",
      "$\\frac{dr}{dt} = \\frac{201.06}{64\\pi} = 1.000$ cm/s."
    ]
  },
  {
    "id": "mega-app-var-50345",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A spherical balloon is inflated at 201.06 cm^3/s, and its radius is increasing at 1 cm/s. What is the radius at this instant?",
    "answer": "4.00 cm",
    "steps": [
      "Using $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "$201.06 = 4\\pi r^2 (1)$.",
      "$r^2 = \\frac{201.06}{4\\pi \\times 1} = 16$.",
      "$r = \\sqrt{16} = 4.00$ cm."
    ]
  },
  {
    "id": "mega-app-var-50346",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A spherical balloon's radius increases at 1 cm/s. How fast is its surface area increasing when the radius is 4 cm?",
    "answer": "100.53 cm^2/s",
    "steps": [
      "Surface area of a sphere is $S = 4\\pi r^2$.",
      "Differentiate: $\\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt}$.",
      "Substitute $r = 4, \\frac{dr}{dt} = 1$:",
      "$\\frac{dS}{dt} = 8\\pi (4)(1) = 100.53$ cm²/s."
    ]
  },
  {
    "id": "mega-app-var-50347",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A spherical balloon's volume increases at 201.06 cm^3/s. What is the rate of change of the surface area when the radius is 4 cm?",
    "answer": "100.53 cm^2/s",
    "steps": [
      "First, find $\\frac{dr}{dt}$ using $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "$201.06 = 4\\pi (4)^2 \\frac{dr}{dt} \\implies \\frac{dr}{dt} = 1$.",
      "Now use surface area $\\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt}$.",
      "$\\frac{dS}{dt} = 8\\pi (4)(1) = 100.53$ cm²/s."
    ]
  },
  {
    "id": "mega-app-var-50348",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A spherical balloon is inflated so its radius increases at 0.1 cm/s. How fast is the volume increasing when the radius is 5 cm?",
    "answer": "31.42 cm^3/s",
    "steps": [
      "The volume of a sphere is $V = \\frac{4}{3}\\pi r^3$.",
      "Differentiate with respect to $t$: $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "Substitute $r = 5$ and $\\frac{dr}{dt} = 0.1$:",
      "$\\frac{dV}{dt} = 4\\pi (5)^2 (0.1) = 31.42$ cm³/s."
    ]
  },
  {
    "id": "mega-app-var-50349",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A spherical balloon is inflated at 31.42 cm^3/s. How fast is the radius increasing when the radius is 5 cm?",
    "answer": "0.100 cm/s",
    "steps": [
      "The volume relation is $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "Given $\\frac{dV}{dt} = 31.42$ and $r = 5$.",
      "$31.42 = 4\\pi (5^2) \\frac{dr}{dt} = 100\\pi \\frac{dr}{dt}$.",
      "$\\frac{dr}{dt} = \\frac{31.42}{100\\pi} = 0.100$ cm/s."
    ]
  },
  {
    "id": "mega-app-var-50350",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A spherical balloon is inflated at 31.42 cm^3/s, and its radius is increasing at 0.1 cm/s. What is the radius at this instant?",
    "answer": "5.00 cm",
    "steps": [
      "Using $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "$31.42 = 4\\pi r^2 (0.1)$.",
      "$r^2 = \\frac{31.42}{4\\pi \\times 0.1} = 25$.",
      "$r = \\sqrt{25} = 5.00$ cm."
    ]
  },
  {
    "id": "mega-app-var-50351",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A spherical balloon's radius increases at 0.1 cm/s. How fast is its surface area increasing when the radius is 5 cm?",
    "answer": "12.57 cm^2/s",
    "steps": [
      "Surface area of a sphere is $S = 4\\pi r^2$.",
      "Differentiate: $\\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt}$.",
      "Substitute $r = 5, \\frac{dr}{dt} = 0.1$:",
      "$\\frac{dS}{dt} = 8\\pi (5)(0.1) = 12.57$ cm²/s."
    ]
  },
  {
    "id": "mega-app-var-50352",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A spherical balloon's volume increases at 31.42 cm^3/s. What is the rate of change of the surface area when the radius is 5 cm?",
    "answer": "12.57 cm^2/s",
    "steps": [
      "First, find $\\frac{dr}{dt}$ using $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "$31.42 = 4\\pi (5)^2 \\frac{dr}{dt} \\implies \\frac{dr}{dt} = 0.1$.",
      "Now use surface area $\\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt}$.",
      "$\\frac{dS}{dt} = 8\\pi (5)(0.1) = 12.57$ cm²/s."
    ]
  },
  {
    "id": "mega-app-var-50353",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A spherical balloon is inflated so its radius increases at 0.2 cm/s. How fast is the volume increasing when the radius is 5 cm?",
    "answer": "62.83 cm^3/s",
    "steps": [
      "The volume of a sphere is $V = \\frac{4}{3}\\pi r^3$.",
      "Differentiate with respect to $t$: $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "Substitute $r = 5$ and $\\frac{dr}{dt} = 0.2$:",
      "$\\frac{dV}{dt} = 4\\pi (5)^2 (0.2) = 62.83$ cm³/s."
    ]
  },
  {
    "id": "mega-app-var-50354",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A spherical balloon is inflated at 62.83 cm^3/s. How fast is the radius increasing when the radius is 5 cm?",
    "answer": "0.200 cm/s",
    "steps": [
      "The volume relation is $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "Given $\\frac{dV}{dt} = 62.83$ and $r = 5$.",
      "$62.83 = 4\\pi (5^2) \\frac{dr}{dt} = 100\\pi \\frac{dr}{dt}$.",
      "$\\frac{dr}{dt} = \\frac{62.83}{100\\pi} = 0.200$ cm/s."
    ]
  },
  {
    "id": "mega-app-var-50355",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A spherical balloon is inflated at 62.83 cm^3/s, and its radius is increasing at 0.2 cm/s. What is the radius at this instant?",
    "answer": "5.00 cm",
    "steps": [
      "Using $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "$62.83 = 4\\pi r^2 (0.2)$.",
      "$r^2 = \\frac{62.83}{4\\pi \\times 0.2} = 25$.",
      "$r = \\sqrt{25} = 5.00$ cm."
    ]
  },
  {
    "id": "mega-app-var-50356",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A spherical balloon's radius increases at 0.2 cm/s. How fast is its surface area increasing when the radius is 5 cm?",
    "answer": "25.13 cm^2/s",
    "steps": [
      "Surface area of a sphere is $S = 4\\pi r^2$.",
      "Differentiate: $\\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt}$.",
      "Substitute $r = 5, \\frac{dr}{dt} = 0.2$:",
      "$\\frac{dS}{dt} = 8\\pi (5)(0.2) = 25.13$ cm²/s."
    ]
  },
  {
    "id": "mega-app-var-50357",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A spherical balloon's volume increases at 62.83 cm^3/s. What is the rate of change of the surface area when the radius is 5 cm?",
    "answer": "25.13 cm^2/s",
    "steps": [
      "First, find $\\frac{dr}{dt}$ using $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "$62.83 = 4\\pi (5)^2 \\frac{dr}{dt} \\implies \\frac{dr}{dt} = 0.2$.",
      "Now use surface area $\\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt}$.",
      "$\\frac{dS}{dt} = 8\\pi (5)(0.2) = 25.13$ cm²/s."
    ]
  },
  {
    "id": "mega-app-var-50358",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A spherical balloon is inflated so its radius increases at 0.5 cm/s. How fast is the volume increasing when the radius is 5 cm?",
    "answer": "157.08 cm^3/s",
    "steps": [
      "The volume of a sphere is $V = \\frac{4}{3}\\pi r^3$.",
      "Differentiate with respect to $t$: $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "Substitute $r = 5$ and $\\frac{dr}{dt} = 0.5$:",
      "$\\frac{dV}{dt} = 4\\pi (5)^2 (0.5) = 157.08$ cm³/s."
    ]
  },
  {
    "id": "mega-app-var-50359",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A spherical balloon is inflated at 157.08 cm^3/s. How fast is the radius increasing when the radius is 5 cm?",
    "answer": "0.500 cm/s",
    "steps": [
      "The volume relation is $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "Given $\\frac{dV}{dt} = 157.08$ and $r = 5$.",
      "$157.08 = 4\\pi (5^2) \\frac{dr}{dt} = 100\\pi \\frac{dr}{dt}$.",
      "$\\frac{dr}{dt} = \\frac{157.08}{100\\pi} = 0.500$ cm/s."
    ]
  },
  {
    "id": "mega-app-var-50360",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A spherical balloon is inflated at 157.08 cm^3/s, and its radius is increasing at 0.5 cm/s. What is the radius at this instant?",
    "answer": "5.00 cm",
    "steps": [
      "Using $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "$157.08 = 4\\pi r^2 (0.5)$.",
      "$r^2 = \\frac{157.08}{4\\pi \\times 0.5} = 25$.",
      "$r = \\sqrt{25} = 5.00$ cm."
    ]
  },
  {
    "id": "mega-app-var-50361",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A spherical balloon's radius increases at 0.5 cm/s. How fast is its surface area increasing when the radius is 5 cm?",
    "answer": "62.83 cm^2/s",
    "steps": [
      "Surface area of a sphere is $S = 4\\pi r^2$.",
      "Differentiate: $\\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt}$.",
      "Substitute $r = 5, \\frac{dr}{dt} = 0.5$:",
      "$\\frac{dS}{dt} = 8\\pi (5)(0.5) = 62.83$ cm²/s."
    ]
  },
  {
    "id": "mega-app-var-50362",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A spherical balloon's volume increases at 157.08 cm^3/s. What is the rate of change of the surface area when the radius is 5 cm?",
    "answer": "62.83 cm^2/s",
    "steps": [
      "First, find $\\frac{dr}{dt}$ using $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "$157.08 = 4\\pi (5)^2 \\frac{dr}{dt} \\implies \\frac{dr}{dt} = 0.5$.",
      "Now use surface area $\\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt}$.",
      "$\\frac{dS}{dt} = 8\\pi (5)(0.5) = 62.83$ cm²/s."
    ]
  },
  {
    "id": "mega-app-var-50363",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A spherical balloon is inflated so its radius increases at 1 cm/s. How fast is the volume increasing when the radius is 5 cm?",
    "answer": "314.16 cm^3/s",
    "steps": [
      "The volume of a sphere is $V = \\frac{4}{3}\\pi r^3$.",
      "Differentiate with respect to $t$: $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "Substitute $r = 5$ and $\\frac{dr}{dt} = 1$:",
      "$\\frac{dV}{dt} = 4\\pi (5)^2 (1) = 314.16$ cm³/s."
    ]
  },
  {
    "id": "mega-app-var-50364",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A spherical balloon is inflated at 314.16 cm^3/s. How fast is the radius increasing when the radius is 5 cm?",
    "answer": "1.000 cm/s",
    "steps": [
      "The volume relation is $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "Given $\\frac{dV}{dt} = 314.16$ and $r = 5$.",
      "$314.16 = 4\\pi (5^2) \\frac{dr}{dt} = 100\\pi \\frac{dr}{dt}$.",
      "$\\frac{dr}{dt} = \\frac{314.16}{100\\pi} = 1.000$ cm/s."
    ]
  },
  {
    "id": "mega-app-var-50365",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A spherical balloon is inflated at 314.16 cm^3/s, and its radius is increasing at 1 cm/s. What is the radius at this instant?",
    "answer": "5.00 cm",
    "steps": [
      "Using $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "$314.16 = 4\\pi r^2 (1)$.",
      "$r^2 = \\frac{314.16}{4\\pi \\times 1} = 25$.",
      "$r = \\sqrt{25} = 5.00$ cm."
    ]
  },
  {
    "id": "mega-app-var-50366",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A spherical balloon's radius increases at 1 cm/s. How fast is its surface area increasing when the radius is 5 cm?",
    "answer": "125.66 cm^2/s",
    "steps": [
      "Surface area of a sphere is $S = 4\\pi r^2$.",
      "Differentiate: $\\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt}$.",
      "Substitute $r = 5, \\frac{dr}{dt} = 1$:",
      "$\\frac{dS}{dt} = 8\\pi (5)(1) = 125.66$ cm²/s."
    ]
  },
  {
    "id": "mega-app-var-50367",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A spherical balloon's volume increases at 314.16 cm^3/s. What is the rate of change of the surface area when the radius is 5 cm?",
    "answer": "125.66 cm^2/s",
    "steps": [
      "First, find $\\frac{dr}{dt}$ using $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "$314.16 = 4\\pi (5)^2 \\frac{dr}{dt} \\implies \\frac{dr}{dt} = 1$.",
      "Now use surface area $\\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt}$.",
      "$\\frac{dS}{dt} = 8\\pi (5)(1) = 125.66$ cm²/s."
    ]
  },
  {
    "id": "mega-app-var-50368",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A spherical balloon is inflated so its radius increases at 0.1 cm/s. How fast is the volume increasing when the radius is 8 cm?",
    "answer": "80.42 cm^3/s",
    "steps": [
      "The volume of a sphere is $V = \\frac{4}{3}\\pi r^3$.",
      "Differentiate with respect to $t$: $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "Substitute $r = 8$ and $\\frac{dr}{dt} = 0.1$:",
      "$\\frac{dV}{dt} = 4\\pi (8)^2 (0.1) = 80.42$ cm³/s."
    ]
  },
  {
    "id": "mega-app-var-50369",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A spherical balloon is inflated at 80.42 cm^3/s. How fast is the radius increasing when the radius is 8 cm?",
    "answer": "0.100 cm/s",
    "steps": [
      "The volume relation is $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "Given $\\frac{dV}{dt} = 80.42$ and $r = 8$.",
      "$80.42 = 4\\pi (8^2) \\frac{dr}{dt} = 256\\pi \\frac{dr}{dt}$.",
      "$\\frac{dr}{dt} = \\frac{80.42}{256\\pi} = 0.100$ cm/s."
    ]
  },
  {
    "id": "mega-app-var-50370",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A spherical balloon is inflated at 80.42 cm^3/s, and its radius is increasing at 0.1 cm/s. What is the radius at this instant?",
    "answer": "8.00 cm",
    "steps": [
      "Using $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "$80.42 = 4\\pi r^2 (0.1)$.",
      "$r^2 = \\frac{80.42}{4\\pi \\times 0.1} = 64$.",
      "$r = \\sqrt{64} = 8.00$ cm."
    ]
  },
  {
    "id": "mega-app-var-50371",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A spherical balloon's radius increases at 0.1 cm/s. How fast is its surface area increasing when the radius is 8 cm?",
    "answer": "20.11 cm^2/s",
    "steps": [
      "Surface area of a sphere is $S = 4\\pi r^2$.",
      "Differentiate: $\\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt}$.",
      "Substitute $r = 8, \\frac{dr}{dt} = 0.1$:",
      "$\\frac{dS}{dt} = 8\\pi (8)(0.1) = 20.11$ cm²/s."
    ]
  },
  {
    "id": "mega-app-var-50372",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A spherical balloon's volume increases at 80.42 cm^3/s. What is the rate of change of the surface area when the radius is 8 cm?",
    "answer": "20.11 cm^2/s",
    "steps": [
      "First, find $\\frac{dr}{dt}$ using $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "$80.42 = 4\\pi (8)^2 \\frac{dr}{dt} \\implies \\frac{dr}{dt} = 0.1$.",
      "Now use surface area $\\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt}$.",
      "$\\frac{dS}{dt} = 8\\pi (8)(0.1) = 20.11$ cm²/s."
    ]
  },
  {
    "id": "mega-app-var-50373",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A spherical balloon is inflated so its radius increases at 0.2 cm/s. How fast is the volume increasing when the radius is 8 cm?",
    "answer": "160.85 cm^3/s",
    "steps": [
      "The volume of a sphere is $V = \\frac{4}{3}\\pi r^3$.",
      "Differentiate with respect to $t$: $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "Substitute $r = 8$ and $\\frac{dr}{dt} = 0.2$:",
      "$\\frac{dV}{dt} = 4\\pi (8)^2 (0.2) = 160.85$ cm³/s."
    ]
  },
  {
    "id": "mega-app-var-50374",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A spherical balloon is inflated at 160.85 cm^3/s. How fast is the radius increasing when the radius is 8 cm?",
    "answer": "0.200 cm/s",
    "steps": [
      "The volume relation is $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "Given $\\frac{dV}{dt} = 160.85$ and $r = 8$.",
      "$160.85 = 4\\pi (8^2) \\frac{dr}{dt} = 256\\pi \\frac{dr}{dt}$.",
      "$\\frac{dr}{dt} = \\frac{160.85}{256\\pi} = 0.200$ cm/s."
    ]
  },
  {
    "id": "mega-app-var-50375",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A spherical balloon is inflated at 160.85 cm^3/s, and its radius is increasing at 0.2 cm/s. What is the radius at this instant?",
    "answer": "8.00 cm",
    "steps": [
      "Using $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "$160.85 = 4\\pi r^2 (0.2)$.",
      "$r^2 = \\frac{160.85}{4\\pi \\times 0.2} = 64$.",
      "$r = \\sqrt{64} = 8.00$ cm."
    ]
  },
  {
    "id": "mega-app-var-50376",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A spherical balloon's radius increases at 0.2 cm/s. How fast is its surface area increasing when the radius is 8 cm?",
    "answer": "40.21 cm^2/s",
    "steps": [
      "Surface area of a sphere is $S = 4\\pi r^2$.",
      "Differentiate: $\\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt}$.",
      "Substitute $r = 8, \\frac{dr}{dt} = 0.2$:",
      "$\\frac{dS}{dt} = 8\\pi (8)(0.2) = 40.21$ cm²/s."
    ]
  },
  {
    "id": "mega-app-var-50377",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A spherical balloon's volume increases at 160.85 cm^3/s. What is the rate of change of the surface area when the radius is 8 cm?",
    "answer": "40.21 cm^2/s",
    "steps": [
      "First, find $\\frac{dr}{dt}$ using $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "$160.85 = 4\\pi (8)^2 \\frac{dr}{dt} \\implies \\frac{dr}{dt} = 0.2$.",
      "Now use surface area $\\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt}$.",
      "$\\frac{dS}{dt} = 8\\pi (8)(0.2) = 40.21$ cm²/s."
    ]
  },
  {
    "id": "mega-app-var-50378",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A spherical balloon is inflated so its radius increases at 0.5 cm/s. How fast is the volume increasing when the radius is 8 cm?",
    "answer": "402.12 cm^3/s",
    "steps": [
      "The volume of a sphere is $V = \\frac{4}{3}\\pi r^3$.",
      "Differentiate with respect to $t$: $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "Substitute $r = 8$ and $\\frac{dr}{dt} = 0.5$:",
      "$\\frac{dV}{dt} = 4\\pi (8)^2 (0.5) = 402.12$ cm³/s."
    ]
  },
  {
    "id": "mega-app-var-50379",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A spherical balloon is inflated at 402.12 cm^3/s. How fast is the radius increasing when the radius is 8 cm?",
    "answer": "0.500 cm/s",
    "steps": [
      "The volume relation is $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "Given $\\frac{dV}{dt} = 402.12$ and $r = 8$.",
      "$402.12 = 4\\pi (8^2) \\frac{dr}{dt} = 256\\pi \\frac{dr}{dt}$.",
      "$\\frac{dr}{dt} = \\frac{402.12}{256\\pi} = 0.500$ cm/s."
    ]
  },
  {
    "id": "mega-app-var-50380",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A spherical balloon is inflated at 402.12 cm^3/s, and its radius is increasing at 0.5 cm/s. What is the radius at this instant?",
    "answer": "8.00 cm",
    "steps": [
      "Using $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "$402.12 = 4\\pi r^2 (0.5)$.",
      "$r^2 = \\frac{402.12}{4\\pi \\times 0.5} = 64$.",
      "$r = \\sqrt{64} = 8.00$ cm."
    ]
  },
  {
    "id": "mega-app-var-50381",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A spherical balloon's radius increases at 0.5 cm/s. How fast is its surface area increasing when the radius is 8 cm?",
    "answer": "100.53 cm^2/s",
    "steps": [
      "Surface area of a sphere is $S = 4\\pi r^2$.",
      "Differentiate: $\\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt}$.",
      "Substitute $r = 8, \\frac{dr}{dt} = 0.5$:",
      "$\\frac{dS}{dt} = 8\\pi (8)(0.5) = 100.53$ cm²/s."
    ]
  },
  {
    "id": "mega-app-var-50382",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A spherical balloon's volume increases at 402.12 cm^3/s. What is the rate of change of the surface area when the radius is 8 cm?",
    "answer": "100.53 cm^2/s",
    "steps": [
      "First, find $\\frac{dr}{dt}$ using $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "$402.12 = 4\\pi (8)^2 \\frac{dr}{dt} \\implies \\frac{dr}{dt} = 0.5$.",
      "Now use surface area $\\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt}$.",
      "$\\frac{dS}{dt} = 8\\pi (8)(0.5) = 100.53$ cm²/s."
    ]
  },
  {
    "id": "mega-app-var-50383",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A spherical balloon is inflated so its radius increases at 1 cm/s. How fast is the volume increasing when the radius is 8 cm?",
    "answer": "804.25 cm^3/s",
    "steps": [
      "The volume of a sphere is $V = \\frac{4}{3}\\pi r^3$.",
      "Differentiate with respect to $t$: $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "Substitute $r = 8$ and $\\frac{dr}{dt} = 1$:",
      "$\\frac{dV}{dt} = 4\\pi (8)^2 (1) = 804.25$ cm³/s."
    ]
  },
  {
    "id": "mega-app-var-50384",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A spherical balloon is inflated at 804.25 cm^3/s. How fast is the radius increasing when the radius is 8 cm?",
    "answer": "1.000 cm/s",
    "steps": [
      "The volume relation is $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "Given $\\frac{dV}{dt} = 804.25$ and $r = 8$.",
      "$804.25 = 4\\pi (8^2) \\frac{dr}{dt} = 256\\pi \\frac{dr}{dt}$.",
      "$\\frac{dr}{dt} = \\frac{804.25}{256\\pi} = 1.000$ cm/s."
    ]
  },
  {
    "id": "mega-app-var-50385",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A spherical balloon is inflated at 804.25 cm^3/s, and its radius is increasing at 1 cm/s. What is the radius at this instant?",
    "answer": "8.00 cm",
    "steps": [
      "Using $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "$804.25 = 4\\pi r^2 (1)$.",
      "$r^2 = \\frac{804.25}{4\\pi \\times 1} = 64$.",
      "$r = \\sqrt{64} = 8.00$ cm."
    ]
  },
  {
    "id": "mega-app-var-50386",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A spherical balloon's radius increases at 1 cm/s. How fast is its surface area increasing when the radius is 8 cm?",
    "answer": "201.06 cm^2/s",
    "steps": [
      "Surface area of a sphere is $S = 4\\pi r^2$.",
      "Differentiate: $\\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt}$.",
      "Substitute $r = 8, \\frac{dr}{dt} = 1$:",
      "$\\frac{dS}{dt} = 8\\pi (8)(1) = 201.06$ cm²/s."
    ]
  },
  {
    "id": "mega-app-var-50387",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A spherical balloon's volume increases at 804.25 cm^3/s. What is the rate of change of the surface area when the radius is 8 cm?",
    "answer": "201.06 cm^2/s",
    "steps": [
      "First, find $\\frac{dr}{dt}$ using $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "$804.25 = 4\\pi (8)^2 \\frac{dr}{dt} \\implies \\frac{dr}{dt} = 1$.",
      "Now use surface area $\\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt}$.",
      "$\\frac{dS}{dt} = 8\\pi (8)(1) = 201.06$ cm²/s."
    ]
  },
  {
    "id": "mega-app-var-50388",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A spherical balloon is inflated so its radius increases at 0.1 cm/s. How fast is the volume increasing when the radius is 10 cm?",
    "answer": "125.66 cm^3/s",
    "steps": [
      "The volume of a sphere is $V = \\frac{4}{3}\\pi r^3$.",
      "Differentiate with respect to $t$: $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "Substitute $r = 10$ and $\\frac{dr}{dt} = 0.1$:",
      "$\\frac{dV}{dt} = 4\\pi (10)^2 (0.1) = 125.66$ cm³/s."
    ]
  },
  {
    "id": "mega-app-var-50389",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A spherical balloon is inflated at 125.66 cm^3/s. How fast is the radius increasing when the radius is 10 cm?",
    "answer": "0.100 cm/s",
    "steps": [
      "The volume relation is $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "Given $\\frac{dV}{dt} = 125.66$ and $r = 10$.",
      "$125.66 = 4\\pi (10^2) \\frac{dr}{dt} = 400\\pi \\frac{dr}{dt}$.",
      "$\\frac{dr}{dt} = \\frac{125.66}{400\\pi} = 0.100$ cm/s."
    ]
  },
  {
    "id": "mega-app-var-50390",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A spherical balloon is inflated at 125.66 cm^3/s, and its radius is increasing at 0.1 cm/s. What is the radius at this instant?",
    "answer": "10.00 cm",
    "steps": [
      "Using $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "$125.66 = 4\\pi r^2 (0.1)$.",
      "$r^2 = \\frac{125.66}{4\\pi \\times 0.1} = 100$.",
      "$r = \\sqrt{100} = 10.00$ cm."
    ]
  },
  {
    "id": "mega-app-var-50391",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A spherical balloon's radius increases at 0.1 cm/s. How fast is its surface area increasing when the radius is 10 cm?",
    "answer": "25.13 cm^2/s",
    "steps": [
      "Surface area of a sphere is $S = 4\\pi r^2$.",
      "Differentiate: $\\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt}$.",
      "Substitute $r = 10, \\frac{dr}{dt} = 0.1$:",
      "$\\frac{dS}{dt} = 8\\pi (10)(0.1) = 25.13$ cm²/s."
    ]
  },
  {
    "id": "mega-app-var-50392",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A spherical balloon's volume increases at 125.66 cm^3/s. What is the rate of change of the surface area when the radius is 10 cm?",
    "answer": "25.13 cm^2/s",
    "steps": [
      "First, find $\\frac{dr}{dt}$ using $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "$125.66 = 4\\pi (10)^2 \\frac{dr}{dt} \\implies \\frac{dr}{dt} = 0.1$.",
      "Now use surface area $\\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt}$.",
      "$\\frac{dS}{dt} = 8\\pi (10)(0.1) = 25.13$ cm²/s."
    ]
  },
  {
    "id": "mega-app-var-50393",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A spherical balloon is inflated so its radius increases at 0.2 cm/s. How fast is the volume increasing when the radius is 10 cm?",
    "answer": "251.33 cm^3/s",
    "steps": [
      "The volume of a sphere is $V = \\frac{4}{3}\\pi r^3$.",
      "Differentiate with respect to $t$: $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "Substitute $r = 10$ and $\\frac{dr}{dt} = 0.2$:",
      "$\\frac{dV}{dt} = 4\\pi (10)^2 (0.2) = 251.33$ cm³/s."
    ]
  },
  {
    "id": "mega-app-var-50394",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A spherical balloon is inflated at 251.33 cm^3/s. How fast is the radius increasing when the radius is 10 cm?",
    "answer": "0.200 cm/s",
    "steps": [
      "The volume relation is $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "Given $\\frac{dV}{dt} = 251.33$ and $r = 10$.",
      "$251.33 = 4\\pi (10^2) \\frac{dr}{dt} = 400\\pi \\frac{dr}{dt}$.",
      "$\\frac{dr}{dt} = \\frac{251.33}{400\\pi} = 0.200$ cm/s."
    ]
  },
  {
    "id": "mega-app-var-50395",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A spherical balloon is inflated at 251.33 cm^3/s, and its radius is increasing at 0.2 cm/s. What is the radius at this instant?",
    "answer": "10.00 cm",
    "steps": [
      "Using $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "$251.33 = 4\\pi r^2 (0.2)$.",
      "$r^2 = \\frac{251.33}{4\\pi \\times 0.2} = 100$.",
      "$r = \\sqrt{100} = 10.00$ cm."
    ]
  },
  {
    "id": "mega-app-var-50396",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A spherical balloon's radius increases at 0.2 cm/s. How fast is its surface area increasing when the radius is 10 cm?",
    "answer": "50.27 cm^2/s",
    "steps": [
      "Surface area of a sphere is $S = 4\\pi r^2$.",
      "Differentiate: $\\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt}$.",
      "Substitute $r = 10, \\frac{dr}{dt} = 0.2$:",
      "$\\frac{dS}{dt} = 8\\pi (10)(0.2) = 50.27$ cm²/s."
    ]
  },
  {
    "id": "mega-app-var-50397",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A spherical balloon's volume increases at 251.33 cm^3/s. What is the rate of change of the surface area when the radius is 10 cm?",
    "answer": "50.27 cm^2/s",
    "steps": [
      "First, find $\\frac{dr}{dt}$ using $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "$251.33 = 4\\pi (10)^2 \\frac{dr}{dt} \\implies \\frac{dr}{dt} = 0.2$.",
      "Now use surface area $\\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt}$.",
      "$\\frac{dS}{dt} = 8\\pi (10)(0.2) = 50.27$ cm²/s."
    ]
  },
  {
    "id": "mega-app-var-50398",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A spherical balloon is inflated so its radius increases at 0.5 cm/s. How fast is the volume increasing when the radius is 10 cm?",
    "answer": "628.32 cm^3/s",
    "steps": [
      "The volume of a sphere is $V = \\frac{4}{3}\\pi r^3$.",
      "Differentiate with respect to $t$: $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "Substitute $r = 10$ and $\\frac{dr}{dt} = 0.5$:",
      "$\\frac{dV}{dt} = 4\\pi (10)^2 (0.5) = 628.32$ cm³/s."
    ]
  },
  {
    "id": "mega-app-var-50399",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A spherical balloon is inflated at 628.32 cm^3/s. How fast is the radius increasing when the radius is 10 cm?",
    "answer": "0.500 cm/s",
    "steps": [
      "The volume relation is $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "Given $\\frac{dV}{dt} = 628.32$ and $r = 10$.",
      "$628.32 = 4\\pi (10^2) \\frac{dr}{dt} = 400\\pi \\frac{dr}{dt}$.",
      "$\\frac{dr}{dt} = \\frac{628.32}{400\\pi} = 0.500$ cm/s."
    ]
  },
  {
    "id": "mega-app-var-50400",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A spherical balloon is inflated at 628.32 cm^3/s, and its radius is increasing at 0.5 cm/s. What is the radius at this instant?",
    "answer": "10.00 cm",
    "steps": [
      "Using $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "$628.32 = 4\\pi r^2 (0.5)$.",
      "$r^2 = \\frac{628.32}{4\\pi \\times 0.5} = 100$.",
      "$r = \\sqrt{100} = 10.00$ cm."
    ]
  },
  {
    "id": "mega-app-var-50401",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A spherical balloon's radius increases at 0.5 cm/s. How fast is its surface area increasing when the radius is 10 cm?",
    "answer": "125.66 cm^2/s",
    "steps": [
      "Surface area of a sphere is $S = 4\\pi r^2$.",
      "Differentiate: $\\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt}$.",
      "Substitute $r = 10, \\frac{dr}{dt} = 0.5$:",
      "$\\frac{dS}{dt} = 8\\pi (10)(0.5) = 125.66$ cm²/s."
    ]
  },
  {
    "id": "mega-app-var-50402",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A spherical balloon's volume increases at 628.32 cm^3/s. What is the rate of change of the surface area when the radius is 10 cm?",
    "answer": "125.66 cm^2/s",
    "steps": [
      "First, find $\\frac{dr}{dt}$ using $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "$628.32 = 4\\pi (10)^2 \\frac{dr}{dt} \\implies \\frac{dr}{dt} = 0.5$.",
      "Now use surface area $\\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt}$.",
      "$\\frac{dS}{dt} = 8\\pi (10)(0.5) = 125.66$ cm²/s."
    ]
  },
  {
    "id": "mega-app-var-50403",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A spherical balloon is inflated so its radius increases at 1 cm/s. How fast is the volume increasing when the radius is 10 cm?",
    "answer": "1256.64 cm^3/s",
    "steps": [
      "The volume of a sphere is $V = \\frac{4}{3}\\pi r^3$.",
      "Differentiate with respect to $t$: $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "Substitute $r = 10$ and $\\frac{dr}{dt} = 1$:",
      "$\\frac{dV}{dt} = 4\\pi (10)^2 (1) = 1256.64$ cm³/s."
    ]
  },
  {
    "id": "mega-app-var-50404",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A spherical balloon is inflated at 1256.64 cm^3/s. How fast is the radius increasing when the radius is 10 cm?",
    "answer": "1.000 cm/s",
    "steps": [
      "The volume relation is $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "Given $\\frac{dV}{dt} = 1256.64$ and $r = 10$.",
      "$1256.64 = 4\\pi (10^2) \\frac{dr}{dt} = 400\\pi \\frac{dr}{dt}$.",
      "$\\frac{dr}{dt} = \\frac{1256.64}{400\\pi} = 1.000$ cm/s."
    ]
  },
  {
    "id": "mega-app-var-50405",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A spherical balloon is inflated at 1256.64 cm^3/s, and its radius is increasing at 1 cm/s. What is the radius at this instant?",
    "answer": "10.00 cm",
    "steps": [
      "Using $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "$1256.64 = 4\\pi r^2 (1)$.",
      "$r^2 = \\frac{1256.64}{4\\pi \\times 1} = 100$.",
      "$r = \\sqrt{100} = 10.00$ cm."
    ]
  },
  {
    "id": "mega-app-var-50406",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A spherical balloon's radius increases at 1 cm/s. How fast is its surface area increasing when the radius is 10 cm?",
    "answer": "251.33 cm^2/s",
    "steps": [
      "Surface area of a sphere is $S = 4\\pi r^2$.",
      "Differentiate: $\\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt}$.",
      "Substitute $r = 10, \\frac{dr}{dt} = 1$:",
      "$\\frac{dS}{dt} = 8\\pi (10)(1) = 251.33$ cm²/s."
    ]
  },
  {
    "id": "mega-app-var-50407",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A spherical balloon's volume increases at 1256.64 cm^3/s. What is the rate of change of the surface area when the radius is 10 cm?",
    "answer": "251.33 cm^2/s",
    "steps": [
      "First, find $\\frac{dr}{dt}$ using $\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}$.",
      "$1256.64 = 4\\pi (10)^2 \\frac{dr}{dt} \\implies \\frac{dr}{dt} = 1$.",
      "Now use surface area $\\frac{dS}{dt} = 8\\pi r \\frac{dr}{dt}$.",
      "$\\frac{dS}{dt} = 8\\pi (10)(1) = 251.33$ cm²/s."
    ]
  },
  {
    "id": "mega-app-var-50408",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "An object is dropped from a height of 100 ft. An observer is 20 ft horizontally from the drop point. How fast is the separation distance changing after 1 second(s)?",
    "answer": "-31.13 ft/s",
    "steps": [
      "Let $y$ be the vertical height of the object and $x = 20$ be the horizontal distance.",
      "Height is $y = 100 - 16t^2 = 100 - 16(1)^2 = 84$ ft at $t = 1$.",
      "The rate of fall is $\\frac{dy}{dt} = -32t = -32(1) = -32$ ft/s.",
      "The distance from the observer is $D^2 = x^2 + y^2 = 20^2 + y^2$.",
      "Differentiating: $2D \\frac{dD}{dt} = 2x \\frac{dx}{dt} + 2y \\frac{dy}{dt}$. As $x$ is constant, $\\frac{dx}{dt} = 0$.",
      "So, $D \\frac{dD}{dt} = y \\frac{dy}{dt}$. At $t=1$, $D = \\sqrt{20^2 + 84^2} = 86.348$.",
      "Substitute: $(86.348) \\frac{dD}{dt} = (84)(-32)$.",
      "$\\frac{dD}{dt} = \\frac{-2688}{86.348} = -31.13$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50409",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "An object dropped from 100 ft is falling. After 1 seconds, the distance from an observer on the ground directly horizontal to the drop point is changing at -31.13 ft/s. How far is the observer from the drop point horizontally?",
    "answer": "20.00 ft",
    "steps": [
      "Height is $y = 100 - 16t^2 = 100 - 16(1)^2 = 84$ ft.",
      "Vertical speed is $\\frac{dy}{dt} = -32(1) = -32$ ft/s.",
      "Let horizontal distance be $x$. Here $D \\frac{dD}{dt} = y \\frac{dy}{dt}$ since $x$ is constant.",
      "We know $\\frac{dD}{dt} = -31.13$, so $D(-31.13) = (84)(-32) = -2688$.",
      "Then $D = \\frac{-2688}{-31.13} = 86.348$.",
      "Since $D^2 = x^2 + y^2$, we have $x^2 = D^2 - y^2 = (86.348)^2 - (84)^2 = 400.00$.",
      "$x = \\sqrt{400.00} = 20$ ft."
    ]
  },
  {
    "id": "mega-app-var-50410",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "An observer stands 20 ft from the drop point of an object. The object is falling at 32 ft/s when its distance from the observer is 86.35 ft. At what rate is the distance between the observer and the object changing?",
    "answer": "-31.13 ft/s",
    "steps": [
      "We have $x = 20$, $D = 86.35$, and $\\frac{dy}{dt} = -32$.",
      "Since $D^2 = x^2 + y^2$, we find $y = \\sqrt{D^2 - x^2} = \\sqrt{86.35^2 - 20^2} = 84.00$ ft.",
      "Using $D \\frac{dD}{dt} = y \\frac{dy}{dt}$ (from differentiating $D^2 = x^2 + y^2$ with $x$ constant):",
      "$(86.35) \\frac{dD}{dt} = (84.00)(-32)$.",
      "$\\frac{dD}{dt} = \\frac{-2688.000}{86.35} = -31.13$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50411",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "An object is dropped from a height of 100 ft. An observer is 20 ft horizontally from the drop point. How fast is the separation distance changing after 2 second(s)?",
    "answer": "-55.95 ft/s",
    "steps": [
      "Let $y$ be the vertical height of the object and $x = 20$ be the horizontal distance.",
      "Height is $y = 100 - 16t^2 = 100 - 16(2)^2 = 36$ ft at $t = 2$.",
      "The rate of fall is $\\frac{dy}{dt} = -32t = -32(2) = -64$ ft/s.",
      "The distance from the observer is $D^2 = x^2 + y^2 = 20^2 + y^2$.",
      "Differentiating: $2D \\frac{dD}{dt} = 2x \\frac{dx}{dt} + 2y \\frac{dy}{dt}$. As $x$ is constant, $\\frac{dx}{dt} = 0$.",
      "So, $D \\frac{dD}{dt} = y \\frac{dy}{dt}$. At $t=2$, $D = \\sqrt{20^2 + 36^2} = 41.183$.",
      "Substitute: $(41.183) \\frac{dD}{dt} = (36)(-64)$.",
      "$\\frac{dD}{dt} = \\frac{-2304}{41.183} = -55.95$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50412",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "An object dropped from 100 ft is falling. After 2 seconds, the distance from an observer on the ground directly horizontal to the drop point is changing at -55.95 ft/s. How far is the observer from the drop point horizontally?",
    "answer": "20.00 ft",
    "steps": [
      "Height is $y = 100 - 16t^2 = 100 - 16(2)^2 = 36$ ft.",
      "Vertical speed is $\\frac{dy}{dt} = -32(2) = -64$ ft/s.",
      "Let horizontal distance be $x$. Here $D \\frac{dD}{dt} = y \\frac{dy}{dt}$ since $x$ is constant.",
      "We know $\\frac{dD}{dt} = -55.95$, so $D(-55.95) = (36)(-64) = -2304$.",
      "Then $D = \\frac{-2304}{-55.95} = 41.183$.",
      "Since $D^2 = x^2 + y^2$, we have $x^2 = D^2 - y^2 = (41.183)^2 - (36)^2 = 400.00$.",
      "$x = \\sqrt{400.00} = 20$ ft."
    ]
  },
  {
    "id": "mega-app-var-50413",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "An observer stands 20 ft from the drop point of an object. The object is falling at 64 ft/s when its distance from the observer is 41.18 ft. At what rate is the distance between the observer and the object changing?",
    "answer": "-55.95 ft/s",
    "steps": [
      "We have $x = 20$, $D = 41.18$, and $\\frac{dy}{dt} = -64$.",
      "Since $D^2 = x^2 + y^2$, we find $y = \\sqrt{D^2 - x^2} = \\sqrt{41.18^2 - 20^2} = 36.00$ ft.",
      "Using $D \\frac{dD}{dt} = y \\frac{dy}{dt}$ (from differentiating $D^2 = x^2 + y^2$ with $x$ constant):",
      "$(41.18) \\frac{dD}{dt} = (36.00)(-64)$.",
      "$\\frac{dD}{dt} = \\frac{-2304.000}{41.18} = -55.95$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50414",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "An object is dropped from a height of 100 ft. An observer is 50 ft horizontally from the drop point. How fast is the separation distance changing after 1 second(s)?",
    "answer": "-27.50 ft/s",
    "steps": [
      "Let $y$ be the vertical height of the object and $x = 50$ be the horizontal distance.",
      "Height is $y = 100 - 16t^2 = 100 - 16(1)^2 = 84$ ft at $t = 1$.",
      "The rate of fall is $\\frac{dy}{dt} = -32t = -32(1) = -32$ ft/s.",
      "The distance from the observer is $D^2 = x^2 + y^2 = 50^2 + y^2$.",
      "Differentiating: $2D \\frac{dD}{dt} = 2x \\frac{dx}{dt} + 2y \\frac{dy}{dt}$. As $x$ is constant, $\\frac{dx}{dt} = 0$.",
      "So, $D \\frac{dD}{dt} = y \\frac{dy}{dt}$. At $t=1$, $D = \\sqrt{50^2 + 84^2} = 97.755$.",
      "Substitute: $(97.755) \\frac{dD}{dt} = (84)(-32)$.",
      "$\\frac{dD}{dt} = \\frac{-2688}{97.755} = -27.50$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50415",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "An object dropped from 100 ft is falling. After 1 seconds, the distance from an observer on the ground directly horizontal to the drop point is changing at -27.50 ft/s. How far is the observer from the drop point horizontally?",
    "answer": "50.00 ft",
    "steps": [
      "Height is $y = 100 - 16t^2 = 100 - 16(1)^2 = 84$ ft.",
      "Vertical speed is $\\frac{dy}{dt} = -32(1) = -32$ ft/s.",
      "Let horizontal distance be $x$. Here $D \\frac{dD}{dt} = y \\frac{dy}{dt}$ since $x$ is constant.",
      "We know $\\frac{dD}{dt} = -27.50$, so $D(-27.50) = (84)(-32) = -2688$.",
      "Then $D = \\frac{-2688}{-27.50} = 97.755$.",
      "Since $D^2 = x^2 + y^2$, we have $x^2 = D^2 - y^2 = (97.755)^2 - (84)^2 = 2500.00$.",
      "$x = \\sqrt{2500.00} = 50$ ft."
    ]
  },
  {
    "id": "mega-app-var-50416",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "An observer stands 50 ft from the drop point of an object. The object is falling at 32 ft/s when its distance from the observer is 97.75 ft. At what rate is the distance between the observer and the object changing?",
    "answer": "-27.50 ft/s",
    "steps": [
      "We have $x = 50$, $D = 97.75$, and $\\frac{dy}{dt} = -32$.",
      "Since $D^2 = x^2 + y^2$, we find $y = \\sqrt{D^2 - x^2} = \\sqrt{97.75^2 - 50^2} = 84.00$ ft.",
      "Using $D \\frac{dD}{dt} = y \\frac{dy}{dt}$ (from differentiating $D^2 = x^2 + y^2$ with $x$ constant):",
      "$(97.75) \\frac{dD}{dt} = (84.00)(-32)$.",
      "$\\frac{dD}{dt} = \\frac{-2688.000}{97.75} = -27.50$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50417",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "An object is dropped from a height of 100 ft. An observer is 50 ft horizontally from the drop point. How fast is the separation distance changing after 2 second(s)?",
    "answer": "-37.40 ft/s",
    "steps": [
      "Let $y$ be the vertical height of the object and $x = 50$ be the horizontal distance.",
      "Height is $y = 100 - 16t^2 = 100 - 16(2)^2 = 36$ ft at $t = 2$.",
      "The rate of fall is $\\frac{dy}{dt} = -32t = -32(2) = -64$ ft/s.",
      "The distance from the observer is $D^2 = x^2 + y^2 = 50^2 + y^2$.",
      "Differentiating: $2D \\frac{dD}{dt} = 2x \\frac{dx}{dt} + 2y \\frac{dy}{dt}$. As $x$ is constant, $\\frac{dx}{dt} = 0$.",
      "So, $D \\frac{dD}{dt} = y \\frac{dy}{dt}$. At $t=2$, $D = \\sqrt{50^2 + 36^2} = 61.612$.",
      "Substitute: $(61.612) \\frac{dD}{dt} = (36)(-64)$.",
      "$\\frac{dD}{dt} = \\frac{-2304}{61.612} = -37.40$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50418",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "An object dropped from 100 ft is falling. After 2 seconds, the distance from an observer on the ground directly horizontal to the drop point is changing at -37.40 ft/s. How far is the observer from the drop point horizontally?",
    "answer": "50.00 ft",
    "steps": [
      "Height is $y = 100 - 16t^2 = 100 - 16(2)^2 = 36$ ft.",
      "Vertical speed is $\\frac{dy}{dt} = -32(2) = -64$ ft/s.",
      "Let horizontal distance be $x$. Here $D \\frac{dD}{dt} = y \\frac{dy}{dt}$ since $x$ is constant.",
      "We know $\\frac{dD}{dt} = -37.40$, so $D(-37.40) = (36)(-64) = -2304$.",
      "Then $D = \\frac{-2304}{-37.40} = 61.612$.",
      "Since $D^2 = x^2 + y^2$, we have $x^2 = D^2 - y^2 = (61.612)^2 - (36)^2 = 2500.00$.",
      "$x = \\sqrt{2500.00} = 50$ ft."
    ]
  },
  {
    "id": "mega-app-var-50419",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "An observer stands 50 ft from the drop point of an object. The object is falling at 64 ft/s when its distance from the observer is 61.61 ft. At what rate is the distance between the observer and the object changing?",
    "answer": "-37.40 ft/s",
    "steps": [
      "We have $x = 50$, $D = 61.61$, and $\\frac{dy}{dt} = -64$.",
      "Since $D^2 = x^2 + y^2$, we find $y = \\sqrt{D^2 - x^2} = \\sqrt{61.61^2 - 50^2} = 36.00$ ft.",
      "Using $D \\frac{dD}{dt} = y \\frac{dy}{dt}$ (from differentiating $D^2 = x^2 + y^2$ with $x$ constant):",
      "$(61.61) \\frac{dD}{dt} = (36.00)(-64)$.",
      "$\\frac{dD}{dt} = \\frac{-2304.000}{61.61} = -37.40$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50420",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "An object is dropped from a height of 100 ft. An observer is 100 ft horizontally from the drop point. How fast is the separation distance changing after 1 second(s)?",
    "answer": "-20.58 ft/s",
    "steps": [
      "Let $y$ be the vertical height of the object and $x = 100$ be the horizontal distance.",
      "Height is $y = 100 - 16t^2 = 100 - 16(1)^2 = 84$ ft at $t = 1$.",
      "The rate of fall is $\\frac{dy}{dt} = -32t = -32(1) = -32$ ft/s.",
      "The distance from the observer is $D^2 = x^2 + y^2 = 100^2 + y^2$.",
      "Differentiating: $2D \\frac{dD}{dt} = 2x \\frac{dx}{dt} + 2y \\frac{dy}{dt}$. As $x$ is constant, $\\frac{dx}{dt} = 0$.",
      "So, $D \\frac{dD}{dt} = y \\frac{dy}{dt}$. At $t=1$, $D = \\sqrt{100^2 + 84^2} = 130.599$.",
      "Substitute: $(130.599) \\frac{dD}{dt} = (84)(-32)$.",
      "$\\frac{dD}{dt} = \\frac{-2688}{130.599} = -20.58$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50421",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "An object dropped from 100 ft is falling. After 1 seconds, the distance from an observer on the ground directly horizontal to the drop point is changing at -20.58 ft/s. How far is the observer from the drop point horizontally?",
    "answer": "100.00 ft",
    "steps": [
      "Height is $y = 100 - 16t^2 = 100 - 16(1)^2 = 84$ ft.",
      "Vertical speed is $\\frac{dy}{dt} = -32(1) = -32$ ft/s.",
      "Let horizontal distance be $x$. Here $D \\frac{dD}{dt} = y \\frac{dy}{dt}$ since $x$ is constant.",
      "We know $\\frac{dD}{dt} = -20.58$, so $D(-20.58) = (84)(-32) = -2688$.",
      "Then $D = \\frac{-2688}{-20.58} = 130.599$.",
      "Since $D^2 = x^2 + y^2$, we have $x^2 = D^2 - y^2 = (130.599)^2 - (84)^2 = 10000.00$.",
      "$x = \\sqrt{10000.00} = 100$ ft."
    ]
  },
  {
    "id": "mega-app-var-50422",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "An observer stands 100 ft from the drop point of an object. The object is falling at 32 ft/s when its distance from the observer is 130.60 ft. At what rate is the distance between the observer and the object changing?",
    "answer": "-20.58 ft/s",
    "steps": [
      "We have $x = 100$, $D = 130.60$, and $\\frac{dy}{dt} = -32$.",
      "Since $D^2 = x^2 + y^2$, we find $y = \\sqrt{D^2 - x^2} = \\sqrt{130.60^2 - 100^2} = 84.00$ ft.",
      "Using $D \\frac{dD}{dt} = y \\frac{dy}{dt}$ (from differentiating $D^2 = x^2 + y^2$ with $x$ constant):",
      "$(130.60) \\frac{dD}{dt} = (84.00)(-32)$.",
      "$\\frac{dD}{dt} = \\frac{-2688.000}{130.60} = -20.58$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50423",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "An object is dropped from a height of 100 ft. An observer is 100 ft horizontally from the drop point. How fast is the separation distance changing after 2 second(s)?",
    "answer": "-21.68 ft/s",
    "steps": [
      "Let $y$ be the vertical height of the object and $x = 100$ be the horizontal distance.",
      "Height is $y = 100 - 16t^2 = 100 - 16(2)^2 = 36$ ft at $t = 2$.",
      "The rate of fall is $\\frac{dy}{dt} = -32t = -32(2) = -64$ ft/s.",
      "The distance from the observer is $D^2 = x^2 + y^2 = 100^2 + y^2$.",
      "Differentiating: $2D \\frac{dD}{dt} = 2x \\frac{dx}{dt} + 2y \\frac{dy}{dt}$. As $x$ is constant, $\\frac{dx}{dt} = 0$.",
      "So, $D \\frac{dD}{dt} = y \\frac{dy}{dt}$. At $t=2$, $D = \\sqrt{100^2 + 36^2} = 106.283$.",
      "Substitute: $(106.283) \\frac{dD}{dt} = (36)(-64)$.",
      "$\\frac{dD}{dt} = \\frac{-2304}{106.283} = -21.68$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50424",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "An object dropped from 100 ft is falling. After 2 seconds, the distance from an observer on the ground directly horizontal to the drop point is changing at -21.68 ft/s. How far is the observer from the drop point horizontally?",
    "answer": "100.00 ft",
    "steps": [
      "Height is $y = 100 - 16t^2 = 100 - 16(2)^2 = 36$ ft.",
      "Vertical speed is $\\frac{dy}{dt} = -32(2) = -64$ ft/s.",
      "Let horizontal distance be $x$. Here $D \\frac{dD}{dt} = y \\frac{dy}{dt}$ since $x$ is constant.",
      "We know $\\frac{dD}{dt} = -21.68$, so $D(-21.68) = (36)(-64) = -2304$.",
      "Then $D = \\frac{-2304}{-21.68} = 106.283$.",
      "Since $D^2 = x^2 + y^2$, we have $x^2 = D^2 - y^2 = (106.283)^2 - (36)^2 = 10000.00$.",
      "$x = \\sqrt{10000.00} = 100$ ft."
    ]
  },
  {
    "id": "mega-app-var-50425",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "An observer stands 100 ft from the drop point of an object. The object is falling at 64 ft/s when its distance from the observer is 106.28 ft. At what rate is the distance between the observer and the object changing?",
    "answer": "-21.68 ft/s",
    "steps": [
      "We have $x = 100$, $D = 106.28$, and $\\frac{dy}{dt} = -64$.",
      "Since $D^2 = x^2 + y^2$, we find $y = \\sqrt{D^2 - x^2} = \\sqrt{106.28^2 - 100^2} = 36.00$ ft.",
      "Using $D \\frac{dD}{dt} = y \\frac{dy}{dt}$ (from differentiating $D^2 = x^2 + y^2$ with $x$ constant):",
      "$(106.28) \\frac{dD}{dt} = (36.00)(-64)$.",
      "$\\frac{dD}{dt} = \\frac{-2304.000}{106.28} = -21.68$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50426",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "An object is dropped from a height of 200 ft. An observer is 20 ft horizontally from the drop point. How fast is the separation distance changing after 1 second(s)?",
    "answer": "-31.81 ft/s",
    "steps": [
      "Let $y$ be the vertical height of the object and $x = 20$ be the horizontal distance.",
      "Height is $y = 200 - 16t^2 = 200 - 16(1)^2 = 184$ ft at $t = 1$.",
      "The rate of fall is $\\frac{dy}{dt} = -32t = -32(1) = -32$ ft/s.",
      "The distance from the observer is $D^2 = x^2 + y^2 = 20^2 + y^2$.",
      "Differentiating: $2D \\frac{dD}{dt} = 2x \\frac{dx}{dt} + 2y \\frac{dy}{dt}$. As $x$ is constant, $\\frac{dx}{dt} = 0$.",
      "So, $D \\frac{dD}{dt} = y \\frac{dy}{dt}$. At $t=1$, $D = \\sqrt{20^2 + 184^2} = 185.084$.",
      "Substitute: $(185.084) \\frac{dD}{dt} = (184)(-32)$.",
      "$\\frac{dD}{dt} = \\frac{-5888}{185.084} = -31.81$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50427",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "An object dropped from 200 ft is falling. After 1 seconds, the distance from an observer on the ground directly horizontal to the drop point is changing at -31.81 ft/s. How far is the observer from the drop point horizontally?",
    "answer": "20.00 ft",
    "steps": [
      "Height is $y = 200 - 16t^2 = 200 - 16(1)^2 = 184$ ft.",
      "Vertical speed is $\\frac{dy}{dt} = -32(1) = -32$ ft/s.",
      "Let horizontal distance be $x$. Here $D \\frac{dD}{dt} = y \\frac{dy}{dt}$ since $x$ is constant.",
      "We know $\\frac{dD}{dt} = -31.81$, so $D(-31.81) = (184)(-32) = -5888$.",
      "Then $D = \\frac{-5888}{-31.81} = 185.084$.",
      "Since $D^2 = x^2 + y^2$, we have $x^2 = D^2 - y^2 = (185.084)^2 - (184)^2 = 400.00$.",
      "$x = \\sqrt{400.00} = 20$ ft."
    ]
  },
  {
    "id": "mega-app-var-50428",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "An observer stands 20 ft from the drop point of an object. The object is falling at 32 ft/s when its distance from the observer is 185.08 ft. At what rate is the distance between the observer and the object changing?",
    "answer": "-31.81 ft/s",
    "steps": [
      "We have $x = 20$, $D = 185.08$, and $\\frac{dy}{dt} = -32$.",
      "Since $D^2 = x^2 + y^2$, we find $y = \\sqrt{D^2 - x^2} = \\sqrt{185.08^2 - 20^2} = 184.00$ ft.",
      "Using $D \\frac{dD}{dt} = y \\frac{dy}{dt}$ (from differentiating $D^2 = x^2 + y^2$ with $x$ constant):",
      "$(185.08) \\frac{dD}{dt} = (184.00)(-32)$.",
      "$\\frac{dD}{dt} = \\frac{-5888.000}{185.08} = -31.81$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50429",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "An object is dropped from a height of 200 ft. An observer is 20 ft horizontally from the drop point. How fast is the separation distance changing after 2 second(s)?",
    "answer": "-63.32 ft/s",
    "steps": [
      "Let $y$ be the vertical height of the object and $x = 20$ be the horizontal distance.",
      "Height is $y = 200 - 16t^2 = 200 - 16(2)^2 = 136$ ft at $t = 2$.",
      "The rate of fall is $\\frac{dy}{dt} = -32t = -32(2) = -64$ ft/s.",
      "The distance from the observer is $D^2 = x^2 + y^2 = 20^2 + y^2$.",
      "Differentiating: $2D \\frac{dD}{dt} = 2x \\frac{dx}{dt} + 2y \\frac{dy}{dt}$. As $x$ is constant, $\\frac{dx}{dt} = 0$.",
      "So, $D \\frac{dD}{dt} = y \\frac{dy}{dt}$. At $t=2$, $D = \\sqrt{20^2 + 136^2} = 137.463$.",
      "Substitute: $(137.463) \\frac{dD}{dt} = (136)(-64)$.",
      "$\\frac{dD}{dt} = \\frac{-8704}{137.463} = -63.32$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50430",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "An object dropped from 200 ft is falling. After 2 seconds, the distance from an observer on the ground directly horizontal to the drop point is changing at -63.32 ft/s. How far is the observer from the drop point horizontally?",
    "answer": "20.00 ft",
    "steps": [
      "Height is $y = 200 - 16t^2 = 200 - 16(2)^2 = 136$ ft.",
      "Vertical speed is $\\frac{dy}{dt} = -32(2) = -64$ ft/s.",
      "Let horizontal distance be $x$. Here $D \\frac{dD}{dt} = y \\frac{dy}{dt}$ since $x$ is constant.",
      "We know $\\frac{dD}{dt} = -63.32$, so $D(-63.32) = (136)(-64) = -8704$.",
      "Then $D = \\frac{-8704}{-63.32} = 137.463$.",
      "Since $D^2 = x^2 + y^2$, we have $x^2 = D^2 - y^2 = (137.463)^2 - (136)^2 = 400.00$.",
      "$x = \\sqrt{400.00} = 20$ ft."
    ]
  },
  {
    "id": "mega-app-var-50431",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "An observer stands 20 ft from the drop point of an object. The object is falling at 64 ft/s when its distance from the observer is 137.46 ft. At what rate is the distance between the observer and the object changing?",
    "answer": "-63.32 ft/s",
    "steps": [
      "We have $x = 20$, $D = 137.46$, and $\\frac{dy}{dt} = -64$.",
      "Since $D^2 = x^2 + y^2$, we find $y = \\sqrt{D^2 - x^2} = \\sqrt{137.46^2 - 20^2} = 136.00$ ft.",
      "Using $D \\frac{dD}{dt} = y \\frac{dy}{dt}$ (from differentiating $D^2 = x^2 + y^2$ with $x$ constant):",
      "$(137.46) \\frac{dD}{dt} = (136.00)(-64)$.",
      "$\\frac{dD}{dt} = \\frac{-8704.000}{137.46} = -63.32$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50432",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "An object is dropped from a height of 200 ft. An observer is 50 ft horizontally from the drop point. How fast is the separation distance changing after 1 second(s)?",
    "answer": "-30.88 ft/s",
    "steps": [
      "Let $y$ be the vertical height of the object and $x = 50$ be the horizontal distance.",
      "Height is $y = 200 - 16t^2 = 200 - 16(1)^2 = 184$ ft at $t = 1$.",
      "The rate of fall is $\\frac{dy}{dt} = -32t = -32(1) = -32$ ft/s.",
      "The distance from the observer is $D^2 = x^2 + y^2 = 50^2 + y^2$.",
      "Differentiating: $2D \\frac{dD}{dt} = 2x \\frac{dx}{dt} + 2y \\frac{dy}{dt}$. As $x$ is constant, $\\frac{dx}{dt} = 0$.",
      "So, $D \\frac{dD}{dt} = y \\frac{dy}{dt}$. At $t=1$, $D = \\sqrt{50^2 + 184^2} = 190.672$.",
      "Substitute: $(190.672) \\frac{dD}{dt} = (184)(-32)$.",
      "$\\frac{dD}{dt} = \\frac{-5888}{190.672} = -30.88$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50433",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "An object dropped from 200 ft is falling. After 1 seconds, the distance from an observer on the ground directly horizontal to the drop point is changing at -30.88 ft/s. How far is the observer from the drop point horizontally?",
    "answer": "50.00 ft",
    "steps": [
      "Height is $y = 200 - 16t^2 = 200 - 16(1)^2 = 184$ ft.",
      "Vertical speed is $\\frac{dy}{dt} = -32(1) = -32$ ft/s.",
      "Let horizontal distance be $x$. Here $D \\frac{dD}{dt} = y \\frac{dy}{dt}$ since $x$ is constant.",
      "We know $\\frac{dD}{dt} = -30.88$, so $D(-30.88) = (184)(-32) = -5888$.",
      "Then $D = \\frac{-5888}{-30.88} = 190.672$.",
      "Since $D^2 = x^2 + y^2$, we have $x^2 = D^2 - y^2 = (190.672)^2 - (184)^2 = 2500.00$.",
      "$x = \\sqrt{2500.00} = 50$ ft."
    ]
  },
  {
    "id": "mega-app-var-50434",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "An observer stands 50 ft from the drop point of an object. The object is falling at 32 ft/s when its distance from the observer is 190.67 ft. At what rate is the distance between the observer and the object changing?",
    "answer": "-30.88 ft/s",
    "steps": [
      "We have $x = 50$, $D = 190.67$, and $\\frac{dy}{dt} = -32$.",
      "Since $D^2 = x^2 + y^2$, we find $y = \\sqrt{D^2 - x^2} = \\sqrt{190.67^2 - 50^2} = 184.00$ ft.",
      "Using $D \\frac{dD}{dt} = y \\frac{dy}{dt}$ (from differentiating $D^2 = x^2 + y^2$ with $x$ constant):",
      "$(190.67) \\frac{dD}{dt} = (184.00)(-32)$.",
      "$\\frac{dD}{dt} = \\frac{-5888.000}{190.67} = -30.88$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50435",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "An object is dropped from a height of 200 ft. An observer is 50 ft horizontally from the drop point. How fast is the separation distance changing after 2 second(s)?",
    "answer": "-60.07 ft/s",
    "steps": [
      "Let $y$ be the vertical height of the object and $x = 50$ be the horizontal distance.",
      "Height is $y = 200 - 16t^2 = 200 - 16(2)^2 = 136$ ft at $t = 2$.",
      "The rate of fall is $\\frac{dy}{dt} = -32t = -32(2) = -64$ ft/s.",
      "The distance from the observer is $D^2 = x^2 + y^2 = 50^2 + y^2$.",
      "Differentiating: $2D \\frac{dD}{dt} = 2x \\frac{dx}{dt} + 2y \\frac{dy}{dt}$. As $x$ is constant, $\\frac{dx}{dt} = 0$.",
      "So, $D \\frac{dD}{dt} = y \\frac{dy}{dt}$. At $t=2$, $D = \\sqrt{50^2 + 136^2} = 144.900$.",
      "Substitute: $(144.900) \\frac{dD}{dt} = (136)(-64)$.",
      "$\\frac{dD}{dt} = \\frac{-8704}{144.900} = -60.07$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50436",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "An object dropped from 200 ft is falling. After 2 seconds, the distance from an observer on the ground directly horizontal to the drop point is changing at -60.07 ft/s. How far is the observer from the drop point horizontally?",
    "answer": "50.00 ft",
    "steps": [
      "Height is $y = 200 - 16t^2 = 200 - 16(2)^2 = 136$ ft.",
      "Vertical speed is $\\frac{dy}{dt} = -32(2) = -64$ ft/s.",
      "Let horizontal distance be $x$. Here $D \\frac{dD}{dt} = y \\frac{dy}{dt}$ since $x$ is constant.",
      "We know $\\frac{dD}{dt} = -60.07$, so $D(-60.07) = (136)(-64) = -8704$.",
      "Then $D = \\frac{-8704}{-60.07} = 144.900$.",
      "Since $D^2 = x^2 + y^2$, we have $x^2 = D^2 - y^2 = (144.900)^2 - (136)^2 = 2500.00$.",
      "$x = \\sqrt{2500.00} = 50$ ft."
    ]
  },
  {
    "id": "mega-app-var-50437",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "An observer stands 50 ft from the drop point of an object. The object is falling at 64 ft/s when its distance from the observer is 144.90 ft. At what rate is the distance between the observer and the object changing?",
    "answer": "-60.07 ft/s",
    "steps": [
      "We have $x = 50$, $D = 144.90$, and $\\frac{dy}{dt} = -64$.",
      "Since $D^2 = x^2 + y^2$, we find $y = \\sqrt{D^2 - x^2} = \\sqrt{144.90^2 - 50^2} = 136.00$ ft.",
      "Using $D \\frac{dD}{dt} = y \\frac{dy}{dt}$ (from differentiating $D^2 = x^2 + y^2$ with $x$ constant):",
      "$(144.90) \\frac{dD}{dt} = (136.00)(-64)$.",
      "$\\frac{dD}{dt} = \\frac{-8704.000}{144.90} = -60.07$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50438",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "An object is dropped from a height of 200 ft. An observer is 100 ft horizontally from the drop point. How fast is the separation distance changing after 1 second(s)?",
    "answer": "-28.12 ft/s",
    "steps": [
      "Let $y$ be the vertical height of the object and $x = 100$ be the horizontal distance.",
      "Height is $y = 200 - 16t^2 = 200 - 16(1)^2 = 184$ ft at $t = 1$.",
      "The rate of fall is $\\frac{dy}{dt} = -32t = -32(1) = -32$ ft/s.",
      "The distance from the observer is $D^2 = x^2 + y^2 = 100^2 + y^2$.",
      "Differentiating: $2D \\frac{dD}{dt} = 2x \\frac{dx}{dt} + 2y \\frac{dy}{dt}$. As $x$ is constant, $\\frac{dx}{dt} = 0$.",
      "So, $D \\frac{dD}{dt} = y \\frac{dy}{dt}$. At $t=1$, $D = \\sqrt{100^2 + 184^2} = 209.418$.",
      "Substitute: $(209.418) \\frac{dD}{dt} = (184)(-32)$.",
      "$\\frac{dD}{dt} = \\frac{-5888}{209.418} = -28.12$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50439",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "An object dropped from 200 ft is falling. After 1 seconds, the distance from an observer on the ground directly horizontal to the drop point is changing at -28.12 ft/s. How far is the observer from the drop point horizontally?",
    "answer": "100.00 ft",
    "steps": [
      "Height is $y = 200 - 16t^2 = 200 - 16(1)^2 = 184$ ft.",
      "Vertical speed is $\\frac{dy}{dt} = -32(1) = -32$ ft/s.",
      "Let horizontal distance be $x$. Here $D \\frac{dD}{dt} = y \\frac{dy}{dt}$ since $x$ is constant.",
      "We know $\\frac{dD}{dt} = -28.12$, so $D(-28.12) = (184)(-32) = -5888$.",
      "Then $D = \\frac{-5888}{-28.12} = 209.418$.",
      "Since $D^2 = x^2 + y^2$, we have $x^2 = D^2 - y^2 = (209.418)^2 - (184)^2 = 10000.00$.",
      "$x = \\sqrt{10000.00} = 100$ ft."
    ]
  },
  {
    "id": "mega-app-var-50440",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "An observer stands 100 ft from the drop point of an object. The object is falling at 32 ft/s when its distance from the observer is 209.42 ft. At what rate is the distance between the observer and the object changing?",
    "answer": "-28.12 ft/s",
    "steps": [
      "We have $x = 100$, $D = 209.42$, and $\\frac{dy}{dt} = -32$.",
      "Since $D^2 = x^2 + y^2$, we find $y = \\sqrt{D^2 - x^2} = \\sqrt{209.42^2 - 100^2} = 184.00$ ft.",
      "Using $D \\frac{dD}{dt} = y \\frac{dy}{dt}$ (from differentiating $D^2 = x^2 + y^2$ with $x$ constant):",
      "$(209.42) \\frac{dD}{dt} = (184.00)(-32)$.",
      "$\\frac{dD}{dt} = \\frac{-5888.000}{209.42} = -28.12$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50441",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "An object is dropped from a height of 200 ft. An observer is 100 ft horizontally from the drop point. How fast is the separation distance changing after 2 second(s)?",
    "answer": "-51.56 ft/s",
    "steps": [
      "Let $y$ be the vertical height of the object and $x = 100$ be the horizontal distance.",
      "Height is $y = 200 - 16t^2 = 200 - 16(2)^2 = 136$ ft at $t = 2$.",
      "The rate of fall is $\\frac{dy}{dt} = -32t = -32(2) = -64$ ft/s.",
      "The distance from the observer is $D^2 = x^2 + y^2 = 100^2 + y^2$.",
      "Differentiating: $2D \\frac{dD}{dt} = 2x \\frac{dx}{dt} + 2y \\frac{dy}{dt}$. As $x$ is constant, $\\frac{dx}{dt} = 0$.",
      "So, $D \\frac{dD}{dt} = y \\frac{dy}{dt}$. At $t=2$, $D = \\sqrt{100^2 + 136^2} = 168.808$.",
      "Substitute: $(168.808) \\frac{dD}{dt} = (136)(-64)$.",
      "$\\frac{dD}{dt} = \\frac{-8704}{168.808} = -51.56$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50442",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "An object dropped from 200 ft is falling. After 2 seconds, the distance from an observer on the ground directly horizontal to the drop point is changing at -51.56 ft/s. How far is the observer from the drop point horizontally?",
    "answer": "100.00 ft",
    "steps": [
      "Height is $y = 200 - 16t^2 = 200 - 16(2)^2 = 136$ ft.",
      "Vertical speed is $\\frac{dy}{dt} = -32(2) = -64$ ft/s.",
      "Let horizontal distance be $x$. Here $D \\frac{dD}{dt} = y \\frac{dy}{dt}$ since $x$ is constant.",
      "We know $\\frac{dD}{dt} = -51.56$, so $D(-51.56) = (136)(-64) = -8704$.",
      "Then $D = \\frac{-8704}{-51.56} = 168.808$.",
      "Since $D^2 = x^2 + y^2$, we have $x^2 = D^2 - y^2 = (168.808)^2 - (136)^2 = 10000.00$.",
      "$x = \\sqrt{10000.00} = 100$ ft."
    ]
  },
  {
    "id": "mega-app-var-50443",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "An observer stands 100 ft from the drop point of an object. The object is falling at 64 ft/s when its distance from the observer is 168.81 ft. At what rate is the distance between the observer and the object changing?",
    "answer": "-51.56 ft/s",
    "steps": [
      "We have $x = 100$, $D = 168.81$, and $\\frac{dy}{dt} = -64$.",
      "Since $D^2 = x^2 + y^2$, we find $y = \\sqrt{D^2 - x^2} = \\sqrt{168.81^2 - 100^2} = 136.00$ ft.",
      "Using $D \\frac{dD}{dt} = y \\frac{dy}{dt}$ (from differentiating $D^2 = x^2 + y^2$ with $x$ constant):",
      "$(168.81) \\frac{dD}{dt} = (136.00)(-64)$.",
      "$\\frac{dD}{dt} = \\frac{-8704.000}{168.81} = -51.56$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50444",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "An object is dropped from a height of 400 ft. An observer is 20 ft horizontally from the drop point. How fast is the separation distance changing after 1 second(s)?",
    "answer": "-31.96 ft/s",
    "steps": [
      "Let $y$ be the vertical height of the object and $x = 20$ be the horizontal distance.",
      "Height is $y = 400 - 16t^2 = 400 - 16(1)^2 = 384$ ft at $t = 1$.",
      "The rate of fall is $\\frac{dy}{dt} = -32t = -32(1) = -32$ ft/s.",
      "The distance from the observer is $D^2 = x^2 + y^2 = 20^2 + y^2$.",
      "Differentiating: $2D \\frac{dD}{dt} = 2x \\frac{dx}{dt} + 2y \\frac{dy}{dt}$. As $x$ is constant, $\\frac{dx}{dt} = 0$.",
      "So, $D \\frac{dD}{dt} = y \\frac{dy}{dt}$. At $t=1$, $D = \\sqrt{20^2 + 384^2} = 384.520$.",
      "Substitute: $(384.520) \\frac{dD}{dt} = (384)(-32)$.",
      "$\\frac{dD}{dt} = \\frac{-12288}{384.520} = -31.96$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50445",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "An object dropped from 400 ft is falling. After 1 seconds, the distance from an observer on the ground directly horizontal to the drop point is changing at -31.96 ft/s. How far is the observer from the drop point horizontally?",
    "answer": "20.00 ft",
    "steps": [
      "Height is $y = 400 - 16t^2 = 400 - 16(1)^2 = 384$ ft.",
      "Vertical speed is $\\frac{dy}{dt} = -32(1) = -32$ ft/s.",
      "Let horizontal distance be $x$. Here $D \\frac{dD}{dt} = y \\frac{dy}{dt}$ since $x$ is constant.",
      "We know $\\frac{dD}{dt} = -31.96$, so $D(-31.96) = (384)(-32) = -12288$.",
      "Then $D = \\frac{-12288}{-31.96} = 384.520$.",
      "Since $D^2 = x^2 + y^2$, we have $x^2 = D^2 - y^2 = (384.520)^2 - (384)^2 = 400.00$.",
      "$x = \\sqrt{400.00} = 20$ ft."
    ]
  },
  {
    "id": "mega-app-var-50446",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "An observer stands 20 ft from the drop point of an object. The object is falling at 32 ft/s when its distance from the observer is 384.52 ft. At what rate is the distance between the observer and the object changing?",
    "answer": "-31.96 ft/s",
    "steps": [
      "We have $x = 20$, $D = 384.52$, and $\\frac{dy}{dt} = -32$.",
      "Since $D^2 = x^2 + y^2$, we find $y = \\sqrt{D^2 - x^2} = \\sqrt{384.52^2 - 20^2} = 384.00$ ft.",
      "Using $D \\frac{dD}{dt} = y \\frac{dy}{dt}$ (from differentiating $D^2 = x^2 + y^2$ with $x$ constant):",
      "$(384.52) \\frac{dD}{dt} = (384.00)(-32)$.",
      "$\\frac{dD}{dt} = \\frac{-12288.000}{384.52} = -31.96$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50447",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "An object is dropped from a height of 400 ft. An observer is 20 ft horizontally from the drop point. How fast is the separation distance changing after 2 second(s)?",
    "answer": "-63.89 ft/s",
    "steps": [
      "Let $y$ be the vertical height of the object and $x = 20$ be the horizontal distance.",
      "Height is $y = 400 - 16t^2 = 400 - 16(2)^2 = 336$ ft at $t = 2$.",
      "The rate of fall is $\\frac{dy}{dt} = -32t = -32(2) = -64$ ft/s.",
      "The distance from the observer is $D^2 = x^2 + y^2 = 20^2 + y^2$.",
      "Differentiating: $2D \\frac{dD}{dt} = 2x \\frac{dx}{dt} + 2y \\frac{dy}{dt}$. As $x$ is constant, $\\frac{dx}{dt} = 0$.",
      "So, $D \\frac{dD}{dt} = y \\frac{dy}{dt}$. At $t=2$, $D = \\sqrt{20^2 + 336^2} = 336.595$.",
      "Substitute: $(336.595) \\frac{dD}{dt} = (336)(-64)$.",
      "$\\frac{dD}{dt} = \\frac{-21504}{336.595} = -63.89$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50448",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "An object dropped from 400 ft is falling. After 2 seconds, the distance from an observer on the ground directly horizontal to the drop point is changing at -63.89 ft/s. How far is the observer from the drop point horizontally?",
    "answer": "20.00 ft",
    "steps": [
      "Height is $y = 400 - 16t^2 = 400 - 16(2)^2 = 336$ ft.",
      "Vertical speed is $\\frac{dy}{dt} = -32(2) = -64$ ft/s.",
      "Let horizontal distance be $x$. Here $D \\frac{dD}{dt} = y \\frac{dy}{dt}$ since $x$ is constant.",
      "We know $\\frac{dD}{dt} = -63.89$, so $D(-63.89) = (336)(-64) = -21504$.",
      "Then $D = \\frac{-21504}{-63.89} = 336.595$.",
      "Since $D^2 = x^2 + y^2$, we have $x^2 = D^2 - y^2 = (336.595)^2 - (336)^2 = 400.00$.",
      "$x = \\sqrt{400.00} = 20$ ft."
    ]
  },
  {
    "id": "mega-app-var-50449",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "An observer stands 20 ft from the drop point of an object. The object is falling at 64 ft/s when its distance from the observer is 336.59 ft. At what rate is the distance between the observer and the object changing?",
    "answer": "-63.89 ft/s",
    "steps": [
      "We have $x = 20$, $D = 336.59$, and $\\frac{dy}{dt} = -64$.",
      "Since $D^2 = x^2 + y^2$, we find $y = \\sqrt{D^2 - x^2} = \\sqrt{336.59^2 - 20^2} = 336.00$ ft.",
      "Using $D \\frac{dD}{dt} = y \\frac{dy}{dt}$ (from differentiating $D^2 = x^2 + y^2$ with $x$ constant):",
      "$(336.59) \\frac{dD}{dt} = (336.00)(-64)$.",
      "$\\frac{dD}{dt} = \\frac{-21504.000}{336.59} = -63.89$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50450",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "An object is dropped from a height of 400 ft. An observer is 50 ft horizontally from the drop point. How fast is the separation distance changing after 1 second(s)?",
    "answer": "-31.73 ft/s",
    "steps": [
      "Let $y$ be the vertical height of the object and $x = 50$ be the horizontal distance.",
      "Height is $y = 400 - 16t^2 = 400 - 16(1)^2 = 384$ ft at $t = 1$.",
      "The rate of fall is $\\frac{dy}{dt} = -32t = -32(1) = -32$ ft/s.",
      "The distance from the observer is $D^2 = x^2 + y^2 = 50^2 + y^2$.",
      "Differentiating: $2D \\frac{dD}{dt} = 2x \\frac{dx}{dt} + 2y \\frac{dy}{dt}$. As $x$ is constant, $\\frac{dx}{dt} = 0$.",
      "So, $D \\frac{dD}{dt} = y \\frac{dy}{dt}$. At $t=1$, $D = \\sqrt{50^2 + 384^2} = 387.242$.",
      "Substitute: $(387.242) \\frac{dD}{dt} = (384)(-32)$.",
      "$\\frac{dD}{dt} = \\frac{-12288}{387.242} = -31.73$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50451",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "An object dropped from 400 ft is falling. After 1 seconds, the distance from an observer on the ground directly horizontal to the drop point is changing at -31.73 ft/s. How far is the observer from the drop point horizontally?",
    "answer": "50.00 ft",
    "steps": [
      "Height is $y = 400 - 16t^2 = 400 - 16(1)^2 = 384$ ft.",
      "Vertical speed is $\\frac{dy}{dt} = -32(1) = -32$ ft/s.",
      "Let horizontal distance be $x$. Here $D \\frac{dD}{dt} = y \\frac{dy}{dt}$ since $x$ is constant.",
      "We know $\\frac{dD}{dt} = -31.73$, so $D(-31.73) = (384)(-32) = -12288$.",
      "Then $D = \\frac{-12288}{-31.73} = 387.242$.",
      "Since $D^2 = x^2 + y^2$, we have $x^2 = D^2 - y^2 = (387.242)^2 - (384)^2 = 2500.00$.",
      "$x = \\sqrt{2500.00} = 50$ ft."
    ]
  },
  {
    "id": "mega-app-var-50452",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "An observer stands 50 ft from the drop point of an object. The object is falling at 32 ft/s when its distance from the observer is 387.24 ft. At what rate is the distance between the observer and the object changing?",
    "answer": "-31.73 ft/s",
    "steps": [
      "We have $x = 50$, $D = 387.24$, and $\\frac{dy}{dt} = -32$.",
      "Since $D^2 = x^2 + y^2$, we find $y = \\sqrt{D^2 - x^2} = \\sqrt{387.24^2 - 50^2} = 384.00$ ft.",
      "Using $D \\frac{dD}{dt} = y \\frac{dy}{dt}$ (from differentiating $D^2 = x^2 + y^2$ with $x$ constant):",
      "$(387.24) \\frac{dD}{dt} = (384.00)(-32)$.",
      "$\\frac{dD}{dt} = \\frac{-12288.000}{387.24} = -31.73$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50453",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "An object is dropped from a height of 400 ft. An observer is 50 ft horizontally from the drop point. How fast is the separation distance changing after 2 second(s)?",
    "answer": "-63.30 ft/s",
    "steps": [
      "Let $y$ be the vertical height of the object and $x = 50$ be the horizontal distance.",
      "Height is $y = 400 - 16t^2 = 400 - 16(2)^2 = 336$ ft at $t = 2$.",
      "The rate of fall is $\\frac{dy}{dt} = -32t = -32(2) = -64$ ft/s.",
      "The distance from the observer is $D^2 = x^2 + y^2 = 50^2 + y^2$.",
      "Differentiating: $2D \\frac{dD}{dt} = 2x \\frac{dx}{dt} + 2y \\frac{dy}{dt}$. As $x$ is constant, $\\frac{dx}{dt} = 0$.",
      "So, $D \\frac{dD}{dt} = y \\frac{dy}{dt}$. At $t=2$, $D = \\sqrt{50^2 + 336^2} = 339.700$.",
      "Substitute: $(339.700) \\frac{dD}{dt} = (336)(-64)$.",
      "$\\frac{dD}{dt} = \\frac{-21504}{339.700} = -63.30$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50454",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "An object dropped from 400 ft is falling. After 2 seconds, the distance from an observer on the ground directly horizontal to the drop point is changing at -63.30 ft/s. How far is the observer from the drop point horizontally?",
    "answer": "50.00 ft",
    "steps": [
      "Height is $y = 400 - 16t^2 = 400 - 16(2)^2 = 336$ ft.",
      "Vertical speed is $\\frac{dy}{dt} = -32(2) = -64$ ft/s.",
      "Let horizontal distance be $x$. Here $D \\frac{dD}{dt} = y \\frac{dy}{dt}$ since $x$ is constant.",
      "We know $\\frac{dD}{dt} = -63.30$, so $D(-63.30) = (336)(-64) = -21504$.",
      "Then $D = \\frac{-21504}{-63.30} = 339.700$.",
      "Since $D^2 = x^2 + y^2$, we have $x^2 = D^2 - y^2 = (339.700)^2 - (336)^2 = 2500.00$.",
      "$x = \\sqrt{2500.00} = 50$ ft."
    ]
  },
  {
    "id": "mega-app-var-50455",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "An observer stands 50 ft from the drop point of an object. The object is falling at 64 ft/s when its distance from the observer is 339.70 ft. At what rate is the distance between the observer and the object changing?",
    "answer": "-63.30 ft/s",
    "steps": [
      "We have $x = 50$, $D = 339.70$, and $\\frac{dy}{dt} = -64$.",
      "Since $D^2 = x^2 + y^2$, we find $y = \\sqrt{D^2 - x^2} = \\sqrt{339.70^2 - 50^2} = 336.00$ ft.",
      "Using $D \\frac{dD}{dt} = y \\frac{dy}{dt}$ (from differentiating $D^2 = x^2 + y^2$ with $x$ constant):",
      "$(339.70) \\frac{dD}{dt} = (336.00)(-64)$.",
      "$\\frac{dD}{dt} = \\frac{-21504.000}{339.70} = -63.30$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50456",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "An object is dropped from a height of 400 ft. An observer is 100 ft horizontally from the drop point. How fast is the separation distance changing after 1 second(s)?",
    "answer": "-30.97 ft/s",
    "steps": [
      "Let $y$ be the vertical height of the object and $x = 100$ be the horizontal distance.",
      "Height is $y = 400 - 16t^2 = 400 - 16(1)^2 = 384$ ft at $t = 1$.",
      "The rate of fall is $\\frac{dy}{dt} = -32t = -32(1) = -32$ ft/s.",
      "The distance from the observer is $D^2 = x^2 + y^2 = 100^2 + y^2$.",
      "Differentiating: $2D \\frac{dD}{dt} = 2x \\frac{dx}{dt} + 2y \\frac{dy}{dt}$. As $x$ is constant, $\\frac{dx}{dt} = 0$.",
      "So, $D \\frac{dD}{dt} = y \\frac{dy}{dt}$. At $t=1$, $D = \\sqrt{100^2 + 384^2} = 396.807$.",
      "Substitute: $(396.807) \\frac{dD}{dt} = (384)(-32)$.",
      "$\\frac{dD}{dt} = \\frac{-12288}{396.807} = -30.97$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50457",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "An object dropped from 400 ft is falling. After 1 seconds, the distance from an observer on the ground directly horizontal to the drop point is changing at -30.97 ft/s. How far is the observer from the drop point horizontally?",
    "answer": "100.00 ft",
    "steps": [
      "Height is $y = 400 - 16t^2 = 400 - 16(1)^2 = 384$ ft.",
      "Vertical speed is $\\frac{dy}{dt} = -32(1) = -32$ ft/s.",
      "Let horizontal distance be $x$. Here $D \\frac{dD}{dt} = y \\frac{dy}{dt}$ since $x$ is constant.",
      "We know $\\frac{dD}{dt} = -30.97$, so $D(-30.97) = (384)(-32) = -12288$.",
      "Then $D = \\frac{-12288}{-30.97} = 396.807$.",
      "Since $D^2 = x^2 + y^2$, we have $x^2 = D^2 - y^2 = (396.807)^2 - (384)^2 = 10000.00$.",
      "$x = \\sqrt{10000.00} = 100$ ft."
    ]
  },
  {
    "id": "mega-app-var-50458",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "An observer stands 100 ft from the drop point of an object. The object is falling at 32 ft/s when its distance from the observer is 396.81 ft. At what rate is the distance between the observer and the object changing?",
    "answer": "-30.97 ft/s",
    "steps": [
      "We have $x = 100$, $D = 396.81$, and $\\frac{dy}{dt} = -32$.",
      "Since $D^2 = x^2 + y^2$, we find $y = \\sqrt{D^2 - x^2} = \\sqrt{396.81^2 - 100^2} = 384.00$ ft.",
      "Using $D \\frac{dD}{dt} = y \\frac{dy}{dt}$ (from differentiating $D^2 = x^2 + y^2$ with $x$ constant):",
      "$(396.81) \\frac{dD}{dt} = (384.00)(-32)$.",
      "$\\frac{dD}{dt} = \\frac{-12288.000}{396.81} = -30.97$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50459",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "An object is dropped from a height of 400 ft. An observer is 100 ft horizontally from the drop point. How fast is the separation distance changing after 2 second(s)?",
    "answer": "-61.34 ft/s",
    "steps": [
      "Let $y$ be the vertical height of the object and $x = 100$ be the horizontal distance.",
      "Height is $y = 400 - 16t^2 = 400 - 16(2)^2 = 336$ ft at $t = 2$.",
      "The rate of fall is $\\frac{dy}{dt} = -32t = -32(2) = -64$ ft/s.",
      "The distance from the observer is $D^2 = x^2 + y^2 = 100^2 + y^2$.",
      "Differentiating: $2D \\frac{dD}{dt} = 2x \\frac{dx}{dt} + 2y \\frac{dy}{dt}$. As $x$ is constant, $\\frac{dx}{dt} = 0$.",
      "So, $D \\frac{dD}{dt} = y \\frac{dy}{dt}$. At $t=2$, $D = \\sqrt{100^2 + 336^2} = 350.565$.",
      "Substitute: $(350.565) \\frac{dD}{dt} = (336)(-64)$.",
      "$\\frac{dD}{dt} = \\frac{-21504}{350.565} = -61.34$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50460",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "An object dropped from 400 ft is falling. After 2 seconds, the distance from an observer on the ground directly horizontal to the drop point is changing at -61.34 ft/s. How far is the observer from the drop point horizontally?",
    "answer": "100.00 ft",
    "steps": [
      "Height is $y = 400 - 16t^2 = 400 - 16(2)^2 = 336$ ft.",
      "Vertical speed is $\\frac{dy}{dt} = -32(2) = -64$ ft/s.",
      "Let horizontal distance be $x$. Here $D \\frac{dD}{dt} = y \\frac{dy}{dt}$ since $x$ is constant.",
      "We know $\\frac{dD}{dt} = -61.34$, so $D(-61.34) = (336)(-64) = -21504$.",
      "Then $D = \\frac{-21504}{-61.34} = 350.565$.",
      "Since $D^2 = x^2 + y^2$, we have $x^2 = D^2 - y^2 = (350.565)^2 - (336)^2 = 10000.00$.",
      "$x = \\sqrt{10000.00} = 100$ ft."
    ]
  },
  {
    "id": "mega-app-var-50461",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "An observer stands 100 ft from the drop point of an object. The object is falling at 64 ft/s when its distance from the observer is 350.57 ft. At what rate is the distance between the observer and the object changing?",
    "answer": "-61.34 ft/s",
    "steps": [
      "We have $x = 100$, $D = 350.57$, and $\\frac{dy}{dt} = -64$.",
      "Since $D^2 = x^2 + y^2$, we find $y = \\sqrt{D^2 - x^2} = \\sqrt{350.57^2 - 100^2} = 336.00$ ft.",
      "Using $D \\frac{dD}{dt} = y \\frac{dy}{dt}$ (from differentiating $D^2 = x^2 + y^2$ with $x$ constant):",
      "$(350.57) \\frac{dD}{dt} = (336.00)(-64)$.",
      "$\\frac{dD}{dt} = \\frac{-21504.000}{350.57} = -61.34$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50462",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 5-ft tall person walks away from a 15-ft lamppost at 3 ft/s. How fast is the length of their shadow increasing?",
    "answer": "1.500 ft/s",
    "steps": [
      "Let $x$ be the person's distance from the lamppost, and $y$ be the length of the shadow.",
      "By similar triangles, $\\frac{y}{5} = \\frac{x+y}{15}$.",
      "Cross-multiplying gives 15y = 5(x+y) \\implies 10y = 5x$.",
      "Differentiate with respect to $t$: 10\\frac{dy}{dt} = 5\\frac{dx}{dt}$.",
      "Substitute $\\frac{dx}{dt} = 3$ to get 10\\frac{dy}{dt} = 5(3) = 15$.",
      "$\\frac{dy}{dt} = \\frac{15}{10} = 1.500$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50463",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 5-ft person's shadow is lengthening at 1.500 ft/s as they walk away from a 15-ft lamppost. How fast are they walking?",
    "answer": "3.000 ft/s",
    "steps": [
      "Let $x$ be distance from lamppost, $y$ be shadow length.",
      "Using similar triangles: 15y = 5(x+y) \\implies 10y = 5x$.",
      "Differentiate: 10\\frac{dy}{dt} = 5\\frac{dx}{dt}$.",
      "Given $\\frac{dy}{dt} = 1.500$, substitute: 10(1.500) = 5\\frac{dx}{dt}$.",
      "$\\frac{dx}{dt} = \\frac{15}{5} = 3$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50464",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 5-ft tall person walks from a 15-ft lamppost at 3 ft/s. How fast is the tip of their shadow moving along the ground?",
    "answer": "4.500 ft/s",
    "steps": [
      "Let $x$ be the person's distance from the lamppost, and $z = x+y$ be the distance from lamppost base to shadow tip.",
      "Similar triangles yield $\\frac{y}{5} = \\frac{z}{15}$. Since $y = z - x$, we have $\\frac{z-x}{5} = \\frac{z}{15}$.",
      "Cross-multiplying: 15(z-x) = 5z \\implies 10z = 15x$.",
      "Differentiate: 10\\frac{dz}{dt} = 15\\frac{dx}{dt}$.",
      "Given $\\frac{dx}{dt} = 3$, we get 10\\frac{dz}{dt} = 15(3) = 45$.",
      "$\\frac{dz}{dt} = \\frac{45}{10} = 4.500$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50465",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A person walks away from a lamppost at 3 ft/s. The tip of their shadow moves at 4.500 ft/s. If the lamppost is 15 ft tall, how tall is the person?",
    "answer": "5.00 ft",
    "steps": [
      "Let $h$ be the person's height, $x$ be distance from lamppost, $z$ be the tip's distance.",
      "Similar triangles imply $\\frac{z-x}{h} = \\frac{z}{15} \\implies 15(z-x) = hz \\implies (15-h)z = 15x$.",
      "Differentiating gives $(15-h)\\frac{dz}{dt} = 15\\frac{dx}{dt}$.",
      "We are given $\\frac{dx}{dt} = 3$ and $\\frac{dz}{dt} = 4.500$.",
      "Substitute: $(15-h)(4.500) = 15(3) = 45$.",
      "$15-h = \\frac{45}{4.500} \\approx 10$.",
      "So $h = 15 - 10 = 5$ ft."
    ]
  },
  {
    "id": "mega-app-var-50466",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 5-ft tall person walks away from a 15-ft lamppost at 4 ft/s. How fast is the length of their shadow increasing?",
    "answer": "2.000 ft/s",
    "steps": [
      "Let $x$ be the person's distance from the lamppost, and $y$ be the length of the shadow.",
      "By similar triangles, $\\frac{y}{5} = \\frac{x+y}{15}$.",
      "Cross-multiplying gives 15y = 5(x+y) \\implies 10y = 5x$.",
      "Differentiate with respect to $t$: 10\\frac{dy}{dt} = 5\\frac{dx}{dt}$.",
      "Substitute $\\frac{dx}{dt} = 4$ to get 10\\frac{dy}{dt} = 5(4) = 20$.",
      "$\\frac{dy}{dt} = \\frac{20}{10} = 2.000$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50467",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 5-ft person's shadow is lengthening at 2.000 ft/s as they walk away from a 15-ft lamppost. How fast are they walking?",
    "answer": "4.000 ft/s",
    "steps": [
      "Let $x$ be distance from lamppost, $y$ be shadow length.",
      "Using similar triangles: 15y = 5(x+y) \\implies 10y = 5x$.",
      "Differentiate: 10\\frac{dy}{dt} = 5\\frac{dx}{dt}$.",
      "Given $\\frac{dy}{dt} = 2.000$, substitute: 10(2.000) = 5\\frac{dx}{dt}$.",
      "$\\frac{dx}{dt} = \\frac{20}{5} = 4$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50468",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 5-ft tall person walks from a 15-ft lamppost at 4 ft/s. How fast is the tip of their shadow moving along the ground?",
    "answer": "6.000 ft/s",
    "steps": [
      "Let $x$ be the person's distance from the lamppost, and $z = x+y$ be the distance from lamppost base to shadow tip.",
      "Similar triangles yield $\\frac{y}{5} = \\frac{z}{15}$. Since $y = z - x$, we have $\\frac{z-x}{5} = \\frac{z}{15}$.",
      "Cross-multiplying: 15(z-x) = 5z \\implies 10z = 15x$.",
      "Differentiate: 10\\frac{dz}{dt} = 15\\frac{dx}{dt}$.",
      "Given $\\frac{dx}{dt} = 4$, we get 10\\frac{dz}{dt} = 15(4) = 60$.",
      "$\\frac{dz}{dt} = \\frac{60}{10} = 6.000$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50469",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A person walks away from a lamppost at 4 ft/s. The tip of their shadow moves at 6.000 ft/s. If the lamppost is 15 ft tall, how tall is the person?",
    "answer": "5.00 ft",
    "steps": [
      "Let $h$ be the person's height, $x$ be distance from lamppost, $z$ be the tip's distance.",
      "Similar triangles imply $\\frac{z-x}{h} = \\frac{z}{15} \\implies 15(z-x) = hz \\implies (15-h)z = 15x$.",
      "Differentiating gives $(15-h)\\frac{dz}{dt} = 15\\frac{dx}{dt}$.",
      "We are given $\\frac{dx}{dt} = 4$ and $\\frac{dz}{dt} = 6.000$.",
      "Substitute: $(15-h)(6.000) = 15(4) = 60$.",
      "$15-h = \\frac{60}{6.000} \\approx 10$.",
      "So $h = 15 - 10 = 5$ ft."
    ]
  },
  {
    "id": "mega-app-var-50470",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 5-ft tall person walks away from a 15-ft lamppost at 5 ft/s. How fast is the length of their shadow increasing?",
    "answer": "2.500 ft/s",
    "steps": [
      "Let $x$ be the person's distance from the lamppost, and $y$ be the length of the shadow.",
      "By similar triangles, $\\frac{y}{5} = \\frac{x+y}{15}$.",
      "Cross-multiplying gives 15y = 5(x+y) \\implies 10y = 5x$.",
      "Differentiate with respect to $t$: 10\\frac{dy}{dt} = 5\\frac{dx}{dt}$.",
      "Substitute $\\frac{dx}{dt} = 5$ to get 10\\frac{dy}{dt} = 5(5) = 25$.",
      "$\\frac{dy}{dt} = \\frac{25}{10} = 2.500$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50471",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 5-ft person's shadow is lengthening at 2.500 ft/s as they walk away from a 15-ft lamppost. How fast are they walking?",
    "answer": "5.000 ft/s",
    "steps": [
      "Let $x$ be distance from lamppost, $y$ be shadow length.",
      "Using similar triangles: 15y = 5(x+y) \\implies 10y = 5x$.",
      "Differentiate: 10\\frac{dy}{dt} = 5\\frac{dx}{dt}$.",
      "Given $\\frac{dy}{dt} = 2.500$, substitute: 10(2.500) = 5\\frac{dx}{dt}$.",
      "$\\frac{dx}{dt} = \\frac{25}{5} = 5$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50472",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 5-ft tall person walks from a 15-ft lamppost at 5 ft/s. How fast is the tip of their shadow moving along the ground?",
    "answer": "7.500 ft/s",
    "steps": [
      "Let $x$ be the person's distance from the lamppost, and $z = x+y$ be the distance from lamppost base to shadow tip.",
      "Similar triangles yield $\\frac{y}{5} = \\frac{z}{15}$. Since $y = z - x$, we have $\\frac{z-x}{5} = \\frac{z}{15}$.",
      "Cross-multiplying: 15(z-x) = 5z \\implies 10z = 15x$.",
      "Differentiate: 10\\frac{dz}{dt} = 15\\frac{dx}{dt}$.",
      "Given $\\frac{dx}{dt} = 5$, we get 10\\frac{dz}{dt} = 15(5) = 75$.",
      "$\\frac{dz}{dt} = \\frac{75}{10} = 7.500$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50473",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A person walks away from a lamppost at 5 ft/s. The tip of their shadow moves at 7.500 ft/s. If the lamppost is 15 ft tall, how tall is the person?",
    "answer": "5.00 ft",
    "steps": [
      "Let $h$ be the person's height, $x$ be distance from lamppost, $z$ be the tip's distance.",
      "Similar triangles imply $\\frac{z-x}{h} = \\frac{z}{15} \\implies 15(z-x) = hz \\implies (15-h)z = 15x$.",
      "Differentiating gives $(15-h)\\frac{dz}{dt} = 15\\frac{dx}{dt}$.",
      "We are given $\\frac{dx}{dt} = 5$ and $\\frac{dz}{dt} = 7.500$.",
      "Substitute: $(15-h)(7.500) = 15(5) = 75$.",
      "$15-h = \\frac{75}{7.500} \\approx 10$.",
      "So $h = 15 - 10 = 5$ ft."
    ]
  },
  {
    "id": "mega-app-var-50474",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 6-ft tall person walks away from a 15-ft lamppost at 3 ft/s. How fast is the length of their shadow increasing?",
    "answer": "2.000 ft/s",
    "steps": [
      "Let $x$ be the person's distance from the lamppost, and $y$ be the length of the shadow.",
      "By similar triangles, $\\frac{y}{6} = \\frac{x+y}{15}$.",
      "Cross-multiplying gives 15y = 6(x+y) \\implies 9y = 6x$.",
      "Differentiate with respect to $t$: 9\\frac{dy}{dt} = 6\\frac{dx}{dt}$.",
      "Substitute $\\frac{dx}{dt} = 3$ to get 9\\frac{dy}{dt} = 6(3) = 18$.",
      "$\\frac{dy}{dt} = \\frac{18}{9} = 2.000$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50475",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 6-ft person's shadow is lengthening at 2.000 ft/s as they walk away from a 15-ft lamppost. How fast are they walking?",
    "answer": "3.000 ft/s",
    "steps": [
      "Let $x$ be distance from lamppost, $y$ be shadow length.",
      "Using similar triangles: 15y = 6(x+y) \\implies 9y = 6x$.",
      "Differentiate: 9\\frac{dy}{dt} = 6\\frac{dx}{dt}$.",
      "Given $\\frac{dy}{dt} = 2.000$, substitute: 9(2.000) = 6\\frac{dx}{dt}$.",
      "$\\frac{dx}{dt} = \\frac{18}{6} = 3$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50476",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 6-ft tall person walks from a 15-ft lamppost at 3 ft/s. How fast is the tip of their shadow moving along the ground?",
    "answer": "5.000 ft/s",
    "steps": [
      "Let $x$ be the person's distance from the lamppost, and $z = x+y$ be the distance from lamppost base to shadow tip.",
      "Similar triangles yield $\\frac{y}{6} = \\frac{z}{15}$. Since $y = z - x$, we have $\\frac{z-x}{6} = \\frac{z}{15}$.",
      "Cross-multiplying: 15(z-x) = 6z \\implies 9z = 15x$.",
      "Differentiate: 9\\frac{dz}{dt} = 15\\frac{dx}{dt}$.",
      "Given $\\frac{dx}{dt} = 3$, we get 9\\frac{dz}{dt} = 15(3) = 45$.",
      "$\\frac{dz}{dt} = \\frac{45}{9} = 5.000$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50477",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A person walks away from a lamppost at 3 ft/s. The tip of their shadow moves at 5.000 ft/s. If the lamppost is 15 ft tall, how tall is the person?",
    "answer": "6.00 ft",
    "steps": [
      "Let $h$ be the person's height, $x$ be distance from lamppost, $z$ be the tip's distance.",
      "Similar triangles imply $\\frac{z-x}{h} = \\frac{z}{15} \\implies 15(z-x) = hz \\implies (15-h)z = 15x$.",
      "Differentiating gives $(15-h)\\frac{dz}{dt} = 15\\frac{dx}{dt}$.",
      "We are given $\\frac{dx}{dt} = 3$ and $\\frac{dz}{dt} = 5.000$.",
      "Substitute: $(15-h)(5.000) = 15(3) = 45$.",
      "$15-h = \\frac{45}{5.000} \\approx 9$.",
      "So $h = 15 - 9 = 6$ ft."
    ]
  },
  {
    "id": "mega-app-var-50478",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 6-ft tall person walks away from a 15-ft lamppost at 4 ft/s. How fast is the length of their shadow increasing?",
    "answer": "2.667 ft/s",
    "steps": [
      "Let $x$ be the person's distance from the lamppost, and $y$ be the length of the shadow.",
      "By similar triangles, $\\frac{y}{6} = \\frac{x+y}{15}$.",
      "Cross-multiplying gives 15y = 6(x+y) \\implies 9y = 6x$.",
      "Differentiate with respect to $t$: 9\\frac{dy}{dt} = 6\\frac{dx}{dt}$.",
      "Substitute $\\frac{dx}{dt} = 4$ to get 9\\frac{dy}{dt} = 6(4) = 24$.",
      "$\\frac{dy}{dt} = \\frac{24}{9} = 2.667$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50479",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 6-ft person's shadow is lengthening at 2.667 ft/s as they walk away from a 15-ft lamppost. How fast are they walking?",
    "answer": "4.000 ft/s",
    "steps": [
      "Let $x$ be distance from lamppost, $y$ be shadow length.",
      "Using similar triangles: 15y = 6(x+y) \\implies 9y = 6x$.",
      "Differentiate: 9\\frac{dy}{dt} = 6\\frac{dx}{dt}$.",
      "Given $\\frac{dy}{dt} = 2.667$, substitute: 9(2.667) = 6\\frac{dx}{dt}$.",
      "$\\frac{dx}{dt} = \\frac{24}{6} = 4$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50480",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 6-ft tall person walks from a 15-ft lamppost at 4 ft/s. How fast is the tip of their shadow moving along the ground?",
    "answer": "6.667 ft/s",
    "steps": [
      "Let $x$ be the person's distance from the lamppost, and $z = x+y$ be the distance from lamppost base to shadow tip.",
      "Similar triangles yield $\\frac{y}{6} = \\frac{z}{15}$. Since $y = z - x$, we have $\\frac{z-x}{6} = \\frac{z}{15}$.",
      "Cross-multiplying: 15(z-x) = 6z \\implies 9z = 15x$.",
      "Differentiate: 9\\frac{dz}{dt} = 15\\frac{dx}{dt}$.",
      "Given $\\frac{dx}{dt} = 4$, we get 9\\frac{dz}{dt} = 15(4) = 60$.",
      "$\\frac{dz}{dt} = \\frac{60}{9} = 6.667$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50481",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A person walks away from a lamppost at 4 ft/s. The tip of their shadow moves at 6.667 ft/s. If the lamppost is 15 ft tall, how tall is the person?",
    "answer": "6.00 ft",
    "steps": [
      "Let $h$ be the person's height, $x$ be distance from lamppost, $z$ be the tip's distance.",
      "Similar triangles imply $\\frac{z-x}{h} = \\frac{z}{15} \\implies 15(z-x) = hz \\implies (15-h)z = 15x$.",
      "Differentiating gives $(15-h)\\frac{dz}{dt} = 15\\frac{dx}{dt}$.",
      "We are given $\\frac{dx}{dt} = 4$ and $\\frac{dz}{dt} = 6.667$.",
      "Substitute: $(15-h)(6.667) = 15(4) = 60$.",
      "$15-h = \\frac{60}{6.667} \\approx 9$.",
      "So $h = 15 - 9 = 6$ ft."
    ]
  },
  {
    "id": "mega-app-var-50482",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 6-ft tall person walks away from a 15-ft lamppost at 5 ft/s. How fast is the length of their shadow increasing?",
    "answer": "3.333 ft/s",
    "steps": [
      "Let $x$ be the person's distance from the lamppost, and $y$ be the length of the shadow.",
      "By similar triangles, $\\frac{y}{6} = \\frac{x+y}{15}$.",
      "Cross-multiplying gives 15y = 6(x+y) \\implies 9y = 6x$.",
      "Differentiate with respect to $t$: 9\\frac{dy}{dt} = 6\\frac{dx}{dt}$.",
      "Substitute $\\frac{dx}{dt} = 5$ to get 9\\frac{dy}{dt} = 6(5) = 30$.",
      "$\\frac{dy}{dt} = \\frac{30}{9} = 3.333$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50483",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 6-ft person's shadow is lengthening at 3.333 ft/s as they walk away from a 15-ft lamppost. How fast are they walking?",
    "answer": "5.000 ft/s",
    "steps": [
      "Let $x$ be distance from lamppost, $y$ be shadow length.",
      "Using similar triangles: 15y = 6(x+y) \\implies 9y = 6x$.",
      "Differentiate: 9\\frac{dy}{dt} = 6\\frac{dx}{dt}$.",
      "Given $\\frac{dy}{dt} = 3.333$, substitute: 9(3.333) = 6\\frac{dx}{dt}$.",
      "$\\frac{dx}{dt} = \\frac{29.999999999999996}{6} = 5$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50484",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 6-ft tall person walks from a 15-ft lamppost at 5 ft/s. How fast is the tip of their shadow moving along the ground?",
    "answer": "8.333 ft/s",
    "steps": [
      "Let $x$ be the person's distance from the lamppost, and $z = x+y$ be the distance from lamppost base to shadow tip.",
      "Similar triangles yield $\\frac{y}{6} = \\frac{z}{15}$. Since $y = z - x$, we have $\\frac{z-x}{6} = \\frac{z}{15}$.",
      "Cross-multiplying: 15(z-x) = 6z \\implies 9z = 15x$.",
      "Differentiate: 9\\frac{dz}{dt} = 15\\frac{dx}{dt}$.",
      "Given $\\frac{dx}{dt} = 5$, we get 9\\frac{dz}{dt} = 15(5) = 75$.",
      "$\\frac{dz}{dt} = \\frac{75}{9} = 8.333$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50485",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A person walks away from a lamppost at 5 ft/s. The tip of their shadow moves at 8.333 ft/s. If the lamppost is 15 ft tall, how tall is the person?",
    "answer": "6.00 ft",
    "steps": [
      "Let $h$ be the person's height, $x$ be distance from lamppost, $z$ be the tip's distance.",
      "Similar triangles imply $\\frac{z-x}{h} = \\frac{z}{15} \\implies 15(z-x) = hz \\implies (15-h)z = 15x$.",
      "Differentiating gives $(15-h)\\frac{dz}{dt} = 15\\frac{dx}{dt}$.",
      "We are given $\\frac{dx}{dt} = 5$ and $\\frac{dz}{dt} = 8.333$.",
      "Substitute: $(15-h)(8.333) = 15(5) = 75$.",
      "$15-h = \\frac{75}{8.333} \\approx 9$.",
      "So $h = 15 - 9 = 6$ ft."
    ]
  },
  {
    "id": "mega-app-var-50486",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 5-ft tall person walks away from a 20-ft lamppost at 3 ft/s. How fast is the length of their shadow increasing?",
    "answer": "1.000 ft/s",
    "steps": [
      "Let $x$ be the person's distance from the lamppost, and $y$ be the length of the shadow.",
      "By similar triangles, $\\frac{y}{5} = \\frac{x+y}{20}$.",
      "Cross-multiplying gives 20y = 5(x+y) \\implies 15y = 5x$.",
      "Differentiate with respect to $t$: 15\\frac{dy}{dt} = 5\\frac{dx}{dt}$.",
      "Substitute $\\frac{dx}{dt} = 3$ to get 15\\frac{dy}{dt} = 5(3) = 15$.",
      "$\\frac{dy}{dt} = \\frac{15}{15} = 1.000$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50487",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 5-ft person's shadow is lengthening at 1.000 ft/s as they walk away from a 20-ft lamppost. How fast are they walking?",
    "answer": "3.000 ft/s",
    "steps": [
      "Let $x$ be distance from lamppost, $y$ be shadow length.",
      "Using similar triangles: 20y = 5(x+y) \\implies 15y = 5x$.",
      "Differentiate: 15\\frac{dy}{dt} = 5\\frac{dx}{dt}$.",
      "Given $\\frac{dy}{dt} = 1.000$, substitute: 15(1.000) = 5\\frac{dx}{dt}$.",
      "$\\frac{dx}{dt} = \\frac{15}{5} = 3$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50488",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 5-ft tall person walks from a 20-ft lamppost at 3 ft/s. How fast is the tip of their shadow moving along the ground?",
    "answer": "4.000 ft/s",
    "steps": [
      "Let $x$ be the person's distance from the lamppost, and $z = x+y$ be the distance from lamppost base to shadow tip.",
      "Similar triangles yield $\\frac{y}{5} = \\frac{z}{20}$. Since $y = z - x$, we have $\\frac{z-x}{5} = \\frac{z}{20}$.",
      "Cross-multiplying: 20(z-x) = 5z \\implies 15z = 20x$.",
      "Differentiate: 15\\frac{dz}{dt} = 20\\frac{dx}{dt}$.",
      "Given $\\frac{dx}{dt} = 3$, we get 15\\frac{dz}{dt} = 20(3) = 60$.",
      "$\\frac{dz}{dt} = \\frac{60}{15} = 4.000$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50489",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A person walks away from a lamppost at 3 ft/s. The tip of their shadow moves at 4.000 ft/s. If the lamppost is 20 ft tall, how tall is the person?",
    "answer": "5.00 ft",
    "steps": [
      "Let $h$ be the person's height, $x$ be distance from lamppost, $z$ be the tip's distance.",
      "Similar triangles imply $\\frac{z-x}{h} = \\frac{z}{20} \\implies 20(z-x) = hz \\implies (20-h)z = 20x$.",
      "Differentiating gives $(20-h)\\frac{dz}{dt} = 20\\frac{dx}{dt}$.",
      "We are given $\\frac{dx}{dt} = 3$ and $\\frac{dz}{dt} = 4.000$.",
      "Substitute: $(20-h)(4.000) = 20(3) = 60$.",
      "$20-h = \\frac{60}{4.000} \\approx 15$.",
      "So $h = 20 - 15 = 5$ ft."
    ]
  },
  {
    "id": "mega-app-var-50490",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 5-ft tall person walks away from a 20-ft lamppost at 4 ft/s. How fast is the length of their shadow increasing?",
    "answer": "1.333 ft/s",
    "steps": [
      "Let $x$ be the person's distance from the lamppost, and $y$ be the length of the shadow.",
      "By similar triangles, $\\frac{y}{5} = \\frac{x+y}{20}$.",
      "Cross-multiplying gives 20y = 5(x+y) \\implies 15y = 5x$.",
      "Differentiate with respect to $t$: 15\\frac{dy}{dt} = 5\\frac{dx}{dt}$.",
      "Substitute $\\frac{dx}{dt} = 4$ to get 15\\frac{dy}{dt} = 5(4) = 20$.",
      "$\\frac{dy}{dt} = \\frac{20}{15} = 1.333$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50491",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 5-ft person's shadow is lengthening at 1.333 ft/s as they walk away from a 20-ft lamppost. How fast are they walking?",
    "answer": "4.000 ft/s",
    "steps": [
      "Let $x$ be distance from lamppost, $y$ be shadow length.",
      "Using similar triangles: 20y = 5(x+y) \\implies 15y = 5x$.",
      "Differentiate: 15\\frac{dy}{dt} = 5\\frac{dx}{dt}$.",
      "Given $\\frac{dy}{dt} = 1.333$, substitute: 15(1.333) = 5\\frac{dx}{dt}$.",
      "$\\frac{dx}{dt} = \\frac{20}{5} = 4$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50492",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 5-ft tall person walks from a 20-ft lamppost at 4 ft/s. How fast is the tip of their shadow moving along the ground?",
    "answer": "5.333 ft/s",
    "steps": [
      "Let $x$ be the person's distance from the lamppost, and $z = x+y$ be the distance from lamppost base to shadow tip.",
      "Similar triangles yield $\\frac{y}{5} = \\frac{z}{20}$. Since $y = z - x$, we have $\\frac{z-x}{5} = \\frac{z}{20}$.",
      "Cross-multiplying: 20(z-x) = 5z \\implies 15z = 20x$.",
      "Differentiate: 15\\frac{dz}{dt} = 20\\frac{dx}{dt}$.",
      "Given $\\frac{dx}{dt} = 4$, we get 15\\frac{dz}{dt} = 20(4) = 80$.",
      "$\\frac{dz}{dt} = \\frac{80}{15} = 5.333$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50493",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A person walks away from a lamppost at 4 ft/s. The tip of their shadow moves at 5.333 ft/s. If the lamppost is 20 ft tall, how tall is the person?",
    "answer": "5.00 ft",
    "steps": [
      "Let $h$ be the person's height, $x$ be distance from lamppost, $z$ be the tip's distance.",
      "Similar triangles imply $\\frac{z-x}{h} = \\frac{z}{20} \\implies 20(z-x) = hz \\implies (20-h)z = 20x$.",
      "Differentiating gives $(20-h)\\frac{dz}{dt} = 20\\frac{dx}{dt}$.",
      "We are given $\\frac{dx}{dt} = 4$ and $\\frac{dz}{dt} = 5.333$.",
      "Substitute: $(20-h)(5.333) = 20(4) = 80$.",
      "$20-h = \\frac{80}{5.333} \\approx 15$.",
      "So $h = 20 - 15 = 5$ ft."
    ]
  },
  {
    "id": "mega-app-var-50494",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 5-ft tall person walks away from a 20-ft lamppost at 5 ft/s. How fast is the length of their shadow increasing?",
    "answer": "1.667 ft/s",
    "steps": [
      "Let $x$ be the person's distance from the lamppost, and $y$ be the length of the shadow.",
      "By similar triangles, $\\frac{y}{5} = \\frac{x+y}{20}$.",
      "Cross-multiplying gives 20y = 5(x+y) \\implies 15y = 5x$.",
      "Differentiate with respect to $t$: 15\\frac{dy}{dt} = 5\\frac{dx}{dt}$.",
      "Substitute $\\frac{dx}{dt} = 5$ to get 15\\frac{dy}{dt} = 5(5) = 25$.",
      "$\\frac{dy}{dt} = \\frac{25}{15} = 1.667$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50495",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 5-ft person's shadow is lengthening at 1.667 ft/s as they walk away from a 20-ft lamppost. How fast are they walking?",
    "answer": "5.000 ft/s",
    "steps": [
      "Let $x$ be distance from lamppost, $y$ be shadow length.",
      "Using similar triangles: 20y = 5(x+y) \\implies 15y = 5x$.",
      "Differentiate: 15\\frac{dy}{dt} = 5\\frac{dx}{dt}$.",
      "Given $\\frac{dy}{dt} = 1.667$, substitute: 15(1.667) = 5\\frac{dx}{dt}$.",
      "$\\frac{dx}{dt} = \\frac{24.999999999999996}{5} = 5$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50496",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 5-ft tall person walks from a 20-ft lamppost at 5 ft/s. How fast is the tip of their shadow moving along the ground?",
    "answer": "6.667 ft/s",
    "steps": [
      "Let $x$ be the person's distance from the lamppost, and $z = x+y$ be the distance from lamppost base to shadow tip.",
      "Similar triangles yield $\\frac{y}{5} = \\frac{z}{20}$. Since $y = z - x$, we have $\\frac{z-x}{5} = \\frac{z}{20}$.",
      "Cross-multiplying: 20(z-x) = 5z \\implies 15z = 20x$.",
      "Differentiate: 15\\frac{dz}{dt} = 20\\frac{dx}{dt}$.",
      "Given $\\frac{dx}{dt} = 5$, we get 15\\frac{dz}{dt} = 20(5) = 100$.",
      "$\\frac{dz}{dt} = \\frac{100}{15} = 6.667$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50497",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A person walks away from a lamppost at 5 ft/s. The tip of their shadow moves at 6.667 ft/s. If the lamppost is 20 ft tall, how tall is the person?",
    "answer": "5.00 ft",
    "steps": [
      "Let $h$ be the person's height, $x$ be distance from lamppost, $z$ be the tip's distance.",
      "Similar triangles imply $\\frac{z-x}{h} = \\frac{z}{20} \\implies 20(z-x) = hz \\implies (20-h)z = 20x$.",
      "Differentiating gives $(20-h)\\frac{dz}{dt} = 20\\frac{dx}{dt}$.",
      "We are given $\\frac{dx}{dt} = 5$ and $\\frac{dz}{dt} = 6.667$.",
      "Substitute: $(20-h)(6.667) = 20(5) = 100$.",
      "$20-h = \\frac{100}{6.667} \\approx 15$.",
      "So $h = 20 - 15 = 5$ ft."
    ]
  },
  {
    "id": "mega-app-var-50498",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 6-ft tall person walks away from a 20-ft lamppost at 3 ft/s. How fast is the length of their shadow increasing?",
    "answer": "1.286 ft/s",
    "steps": [
      "Let $x$ be the person's distance from the lamppost, and $y$ be the length of the shadow.",
      "By similar triangles, $\\frac{y}{6} = \\frac{x+y}{20}$.",
      "Cross-multiplying gives 20y = 6(x+y) \\implies 14y = 6x$.",
      "Differentiate with respect to $t$: 14\\frac{dy}{dt} = 6\\frac{dx}{dt}$.",
      "Substitute $\\frac{dx}{dt} = 3$ to get 14\\frac{dy}{dt} = 6(3) = 18$.",
      "$\\frac{dy}{dt} = \\frac{18}{14} = 1.286$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50499",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 6-ft person's shadow is lengthening at 1.286 ft/s as they walk away from a 20-ft lamppost. How fast are they walking?",
    "answer": "3.000 ft/s",
    "steps": [
      "Let $x$ be distance from lamppost, $y$ be shadow length.",
      "Using similar triangles: 20y = 6(x+y) \\implies 14y = 6x$.",
      "Differentiate: 14\\frac{dy}{dt} = 6\\frac{dx}{dt}$.",
      "Given $\\frac{dy}{dt} = 1.286$, substitute: 14(1.286) = 6\\frac{dx}{dt}$.",
      "$\\frac{dx}{dt} = \\frac{18}{6} = 3$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50500",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 6-ft tall person walks from a 20-ft lamppost at 3 ft/s. How fast is the tip of their shadow moving along the ground?",
    "answer": "4.286 ft/s",
    "steps": [
      "Let $x$ be the person's distance from the lamppost, and $z = x+y$ be the distance from lamppost base to shadow tip.",
      "Similar triangles yield $\\frac{y}{6} = \\frac{z}{20}$. Since $y = z - x$, we have $\\frac{z-x}{6} = \\frac{z}{20}$.",
      "Cross-multiplying: 20(z-x) = 6z \\implies 14z = 20x$.",
      "Differentiate: 14\\frac{dz}{dt} = 20\\frac{dx}{dt}$.",
      "Given $\\frac{dx}{dt} = 3$, we get 14\\frac{dz}{dt} = 20(3) = 60$.",
      "$\\frac{dz}{dt} = \\frac{60}{14} = 4.286$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50501",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A person walks away from a lamppost at 3 ft/s. The tip of their shadow moves at 4.286 ft/s. If the lamppost is 20 ft tall, how tall is the person?",
    "answer": "6.00 ft",
    "steps": [
      "Let $h$ be the person's height, $x$ be distance from lamppost, $z$ be the tip's distance.",
      "Similar triangles imply $\\frac{z-x}{h} = \\frac{z}{20} \\implies 20(z-x) = hz \\implies (20-h)z = 20x$.",
      "Differentiating gives $(20-h)\\frac{dz}{dt} = 20\\frac{dx}{dt}$.",
      "We are given $\\frac{dx}{dt} = 3$ and $\\frac{dz}{dt} = 4.286$.",
      "Substitute: $(20-h)(4.286) = 20(3) = 60$.",
      "$20-h = \\frac{60}{4.286} \\approx 14$.",
      "So $h = 20 - 14 = 6$ ft."
    ]
  },
  {
    "id": "mega-app-var-50502",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 6-ft tall person walks away from a 20-ft lamppost at 4 ft/s. How fast is the length of their shadow increasing?",
    "answer": "1.714 ft/s",
    "steps": [
      "Let $x$ be the person's distance from the lamppost, and $y$ be the length of the shadow.",
      "By similar triangles, $\\frac{y}{6} = \\frac{x+y}{20}$.",
      "Cross-multiplying gives 20y = 6(x+y) \\implies 14y = 6x$.",
      "Differentiate with respect to $t$: 14\\frac{dy}{dt} = 6\\frac{dx}{dt}$.",
      "Substitute $\\frac{dx}{dt} = 4$ to get 14\\frac{dy}{dt} = 6(4) = 24$.",
      "$\\frac{dy}{dt} = \\frac{24}{14} = 1.714$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50503",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 6-ft person's shadow is lengthening at 1.714 ft/s as they walk away from a 20-ft lamppost. How fast are they walking?",
    "answer": "4.000 ft/s",
    "steps": [
      "Let $x$ be distance from lamppost, $y$ be shadow length.",
      "Using similar triangles: 20y = 6(x+y) \\implies 14y = 6x$.",
      "Differentiate: 14\\frac{dy}{dt} = 6\\frac{dx}{dt}$.",
      "Given $\\frac{dy}{dt} = 1.714$, substitute: 14(1.714) = 6\\frac{dx}{dt}$.",
      "$\\frac{dx}{dt} = \\frac{24}{6} = 4$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50504",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 6-ft tall person walks from a 20-ft lamppost at 4 ft/s. How fast is the tip of their shadow moving along the ground?",
    "answer": "5.714 ft/s",
    "steps": [
      "Let $x$ be the person's distance from the lamppost, and $z = x+y$ be the distance from lamppost base to shadow tip.",
      "Similar triangles yield $\\frac{y}{6} = \\frac{z}{20}$. Since $y = z - x$, we have $\\frac{z-x}{6} = \\frac{z}{20}$.",
      "Cross-multiplying: 20(z-x) = 6z \\implies 14z = 20x$.",
      "Differentiate: 14\\frac{dz}{dt} = 20\\frac{dx}{dt}$.",
      "Given $\\frac{dx}{dt} = 4$, we get 14\\frac{dz}{dt} = 20(4) = 80$.",
      "$\\frac{dz}{dt} = \\frac{80}{14} = 5.714$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50505",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A person walks away from a lamppost at 4 ft/s. The tip of their shadow moves at 5.714 ft/s. If the lamppost is 20 ft tall, how tall is the person?",
    "answer": "6.00 ft",
    "steps": [
      "Let $h$ be the person's height, $x$ be distance from lamppost, $z$ be the tip's distance.",
      "Similar triangles imply $\\frac{z-x}{h} = \\frac{z}{20} \\implies 20(z-x) = hz \\implies (20-h)z = 20x$.",
      "Differentiating gives $(20-h)\\frac{dz}{dt} = 20\\frac{dx}{dt}$.",
      "We are given $\\frac{dx}{dt} = 4$ and $\\frac{dz}{dt} = 5.714$.",
      "Substitute: $(20-h)(5.714) = 20(4) = 80$.",
      "$20-h = \\frac{80}{5.714} \\approx 14$.",
      "So $h = 20 - 14 = 6$ ft."
    ]
  },
  {
    "id": "mega-app-var-50506",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 6-ft tall person walks away from a 20-ft lamppost at 5 ft/s. How fast is the length of their shadow increasing?",
    "answer": "2.143 ft/s",
    "steps": [
      "Let $x$ be the person's distance from the lamppost, and $y$ be the length of the shadow.",
      "By similar triangles, $\\frac{y}{6} = \\frac{x+y}{20}$.",
      "Cross-multiplying gives 20y = 6(x+y) \\implies 14y = 6x$.",
      "Differentiate with respect to $t$: 14\\frac{dy}{dt} = 6\\frac{dx}{dt}$.",
      "Substitute $\\frac{dx}{dt} = 5$ to get 14\\frac{dy}{dt} = 6(5) = 30$.",
      "$\\frac{dy}{dt} = \\frac{30}{14} = 2.143$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50507",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 6-ft person's shadow is lengthening at 2.143 ft/s as they walk away from a 20-ft lamppost. How fast are they walking?",
    "answer": "5.000 ft/s",
    "steps": [
      "Let $x$ be distance from lamppost, $y$ be shadow length.",
      "Using similar triangles: 20y = 6(x+y) \\implies 14y = 6x$.",
      "Differentiate: 14\\frac{dy}{dt} = 6\\frac{dx}{dt}$.",
      "Given $\\frac{dy}{dt} = 2.143$, substitute: 14(2.143) = 6\\frac{dx}{dt}$.",
      "$\\frac{dx}{dt} = \\frac{30}{6} = 5$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50508",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 6-ft tall person walks from a 20-ft lamppost at 5 ft/s. How fast is the tip of their shadow moving along the ground?",
    "answer": "7.143 ft/s",
    "steps": [
      "Let $x$ be the person's distance from the lamppost, and $z = x+y$ be the distance from lamppost base to shadow tip.",
      "Similar triangles yield $\\frac{y}{6} = \\frac{z}{20}$. Since $y = z - x$, we have $\\frac{z-x}{6} = \\frac{z}{20}$.",
      "Cross-multiplying: 20(z-x) = 6z \\implies 14z = 20x$.",
      "Differentiate: 14\\frac{dz}{dt} = 20\\frac{dx}{dt}$.",
      "Given $\\frac{dx}{dt} = 5$, we get 14\\frac{dz}{dt} = 20(5) = 100$.",
      "$\\frac{dz}{dt} = \\frac{100}{14} = 7.143$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50509",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A person walks away from a lamppost at 5 ft/s. The tip of their shadow moves at 7.143 ft/s. If the lamppost is 20 ft tall, how tall is the person?",
    "answer": "6.00 ft",
    "steps": [
      "Let $h$ be the person's height, $x$ be distance from lamppost, $z$ be the tip's distance.",
      "Similar triangles imply $\\frac{z-x}{h} = \\frac{z}{20} \\implies 20(z-x) = hz \\implies (20-h)z = 20x$.",
      "Differentiating gives $(20-h)\\frac{dz}{dt} = 20\\frac{dx}{dt}$.",
      "We are given $\\frac{dx}{dt} = 5$ and $\\frac{dz}{dt} = 7.143$.",
      "Substitute: $(20-h)(7.143) = 20(5) = 100$.",
      "$20-h = \\frac{100}{7.143} \\approx 14$.",
      "So $h = 20 - 14 = 6$ ft."
    ]
  },
  {
    "id": "mega-app-var-50510",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 5-ft tall person walks away from a 25-ft lamppost at 3 ft/s. How fast is the length of their shadow increasing?",
    "answer": "0.750 ft/s",
    "steps": [
      "Let $x$ be the person's distance from the lamppost, and $y$ be the length of the shadow.",
      "By similar triangles, $\\frac{y}{5} = \\frac{x+y}{25}$.",
      "Cross-multiplying gives 25y = 5(x+y) \\implies 20y = 5x$.",
      "Differentiate with respect to $t$: 20\\frac{dy}{dt} = 5\\frac{dx}{dt}$.",
      "Substitute $\\frac{dx}{dt} = 3$ to get 20\\frac{dy}{dt} = 5(3) = 15$.",
      "$\\frac{dy}{dt} = \\frac{15}{20} = 0.750$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50511",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 5-ft person's shadow is lengthening at 0.750 ft/s as they walk away from a 25-ft lamppost. How fast are they walking?",
    "answer": "3.000 ft/s",
    "steps": [
      "Let $x$ be distance from lamppost, $y$ be shadow length.",
      "Using similar triangles: 25y = 5(x+y) \\implies 20y = 5x$.",
      "Differentiate: 20\\frac{dy}{dt} = 5\\frac{dx}{dt}$.",
      "Given $\\frac{dy}{dt} = 0.750$, substitute: 20(0.750) = 5\\frac{dx}{dt}$.",
      "$\\frac{dx}{dt} = \\frac{15}{5} = 3$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50512",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 5-ft tall person walks from a 25-ft lamppost at 3 ft/s. How fast is the tip of their shadow moving along the ground?",
    "answer": "3.750 ft/s",
    "steps": [
      "Let $x$ be the person's distance from the lamppost, and $z = x+y$ be the distance from lamppost base to shadow tip.",
      "Similar triangles yield $\\frac{y}{5} = \\frac{z}{25}$. Since $y = z - x$, we have $\\frac{z-x}{5} = \\frac{z}{25}$.",
      "Cross-multiplying: 25(z-x) = 5z \\implies 20z = 25x$.",
      "Differentiate: 20\\frac{dz}{dt} = 25\\frac{dx}{dt}$.",
      "Given $\\frac{dx}{dt} = 3$, we get 20\\frac{dz}{dt} = 25(3) = 75$.",
      "$\\frac{dz}{dt} = \\frac{75}{20} = 3.750$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50513",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A person walks away from a lamppost at 3 ft/s. The tip of their shadow moves at 3.750 ft/s. If the lamppost is 25 ft tall, how tall is the person?",
    "answer": "5.00 ft",
    "steps": [
      "Let $h$ be the person's height, $x$ be distance from lamppost, $z$ be the tip's distance.",
      "Similar triangles imply $\\frac{z-x}{h} = \\frac{z}{25} \\implies 25(z-x) = hz \\implies (25-h)z = 25x$.",
      "Differentiating gives $(25-h)\\frac{dz}{dt} = 25\\frac{dx}{dt}$.",
      "We are given $\\frac{dx}{dt} = 3$ and $\\frac{dz}{dt} = 3.750$.",
      "Substitute: $(25-h)(3.750) = 25(3) = 75$.",
      "$25-h = \\frac{75}{3.750} \\approx 20$.",
      "So $h = 25 - 20 = 5$ ft."
    ]
  },
  {
    "id": "mega-app-var-50514",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 5-ft tall person walks away from a 25-ft lamppost at 4 ft/s. How fast is the length of their shadow increasing?",
    "answer": "1.000 ft/s",
    "steps": [
      "Let $x$ be the person's distance from the lamppost, and $y$ be the length of the shadow.",
      "By similar triangles, $\\frac{y}{5} = \\frac{x+y}{25}$.",
      "Cross-multiplying gives 25y = 5(x+y) \\implies 20y = 5x$.",
      "Differentiate with respect to $t$: 20\\frac{dy}{dt} = 5\\frac{dx}{dt}$.",
      "Substitute $\\frac{dx}{dt} = 4$ to get 20\\frac{dy}{dt} = 5(4) = 20$.",
      "$\\frac{dy}{dt} = \\frac{20}{20} = 1.000$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50515",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 5-ft person's shadow is lengthening at 1.000 ft/s as they walk away from a 25-ft lamppost. How fast are they walking?",
    "answer": "4.000 ft/s",
    "steps": [
      "Let $x$ be distance from lamppost, $y$ be shadow length.",
      "Using similar triangles: 25y = 5(x+y) \\implies 20y = 5x$.",
      "Differentiate: 20\\frac{dy}{dt} = 5\\frac{dx}{dt}$.",
      "Given $\\frac{dy}{dt} = 1.000$, substitute: 20(1.000) = 5\\frac{dx}{dt}$.",
      "$\\frac{dx}{dt} = \\frac{20}{5} = 4$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50516",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 5-ft tall person walks from a 25-ft lamppost at 4 ft/s. How fast is the tip of their shadow moving along the ground?",
    "answer": "5.000 ft/s",
    "steps": [
      "Let $x$ be the person's distance from the lamppost, and $z = x+y$ be the distance from lamppost base to shadow tip.",
      "Similar triangles yield $\\frac{y}{5} = \\frac{z}{25}$. Since $y = z - x$, we have $\\frac{z-x}{5} = \\frac{z}{25}$.",
      "Cross-multiplying: 25(z-x) = 5z \\implies 20z = 25x$.",
      "Differentiate: 20\\frac{dz}{dt} = 25\\frac{dx}{dt}$.",
      "Given $\\frac{dx}{dt} = 4$, we get 20\\frac{dz}{dt} = 25(4) = 100$.",
      "$\\frac{dz}{dt} = \\frac{100}{20} = 5.000$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50517",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A person walks away from a lamppost at 4 ft/s. The tip of their shadow moves at 5.000 ft/s. If the lamppost is 25 ft tall, how tall is the person?",
    "answer": "5.00 ft",
    "steps": [
      "Let $h$ be the person's height, $x$ be distance from lamppost, $z$ be the tip's distance.",
      "Similar triangles imply $\\frac{z-x}{h} = \\frac{z}{25} \\implies 25(z-x) = hz \\implies (25-h)z = 25x$.",
      "Differentiating gives $(25-h)\\frac{dz}{dt} = 25\\frac{dx}{dt}$.",
      "We are given $\\frac{dx}{dt} = 4$ and $\\frac{dz}{dt} = 5.000$.",
      "Substitute: $(25-h)(5.000) = 25(4) = 100$.",
      "$25-h = \\frac{100}{5.000} \\approx 20$.",
      "So $h = 25 - 20 = 5$ ft."
    ]
  },
  {
    "id": "mega-app-var-50518",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 5-ft tall person walks away from a 25-ft lamppost at 5 ft/s. How fast is the length of their shadow increasing?",
    "answer": "1.250 ft/s",
    "steps": [
      "Let $x$ be the person's distance from the lamppost, and $y$ be the length of the shadow.",
      "By similar triangles, $\\frac{y}{5} = \\frac{x+y}{25}$.",
      "Cross-multiplying gives 25y = 5(x+y) \\implies 20y = 5x$.",
      "Differentiate with respect to $t$: 20\\frac{dy}{dt} = 5\\frac{dx}{dt}$.",
      "Substitute $\\frac{dx}{dt} = 5$ to get 20\\frac{dy}{dt} = 5(5) = 25$.",
      "$\\frac{dy}{dt} = \\frac{25}{20} = 1.250$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50519",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 5-ft person's shadow is lengthening at 1.250 ft/s as they walk away from a 25-ft lamppost. How fast are they walking?",
    "answer": "5.000 ft/s",
    "steps": [
      "Let $x$ be distance from lamppost, $y$ be shadow length.",
      "Using similar triangles: 25y = 5(x+y) \\implies 20y = 5x$.",
      "Differentiate: 20\\frac{dy}{dt} = 5\\frac{dx}{dt}$.",
      "Given $\\frac{dy}{dt} = 1.250$, substitute: 20(1.250) = 5\\frac{dx}{dt}$.",
      "$\\frac{dx}{dt} = \\frac{25}{5} = 5$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50520",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 5-ft tall person walks from a 25-ft lamppost at 5 ft/s. How fast is the tip of their shadow moving along the ground?",
    "answer": "6.250 ft/s",
    "steps": [
      "Let $x$ be the person's distance from the lamppost, and $z = x+y$ be the distance from lamppost base to shadow tip.",
      "Similar triangles yield $\\frac{y}{5} = \\frac{z}{25}$. Since $y = z - x$, we have $\\frac{z-x}{5} = \\frac{z}{25}$.",
      "Cross-multiplying: 25(z-x) = 5z \\implies 20z = 25x$.",
      "Differentiate: 20\\frac{dz}{dt} = 25\\frac{dx}{dt}$.",
      "Given $\\frac{dx}{dt} = 5$, we get 20\\frac{dz}{dt} = 25(5) = 125$.",
      "$\\frac{dz}{dt} = \\frac{125}{20} = 6.250$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50521",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A person walks away from a lamppost at 5 ft/s. The tip of their shadow moves at 6.250 ft/s. If the lamppost is 25 ft tall, how tall is the person?",
    "answer": "5.00 ft",
    "steps": [
      "Let $h$ be the person's height, $x$ be distance from lamppost, $z$ be the tip's distance.",
      "Similar triangles imply $\\frac{z-x}{h} = \\frac{z}{25} \\implies 25(z-x) = hz \\implies (25-h)z = 25x$.",
      "Differentiating gives $(25-h)\\frac{dz}{dt} = 25\\frac{dx}{dt}$.",
      "We are given $\\frac{dx}{dt} = 5$ and $\\frac{dz}{dt} = 6.250$.",
      "Substitute: $(25-h)(6.250) = 25(5) = 125$.",
      "$25-h = \\frac{125}{6.250} \\approx 20$.",
      "So $h = 25 - 20 = 5$ ft."
    ]
  },
  {
    "id": "mega-app-var-50522",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 6-ft tall person walks away from a 25-ft lamppost at 3 ft/s. How fast is the length of their shadow increasing?",
    "answer": "0.947 ft/s",
    "steps": [
      "Let $x$ be the person's distance from the lamppost, and $y$ be the length of the shadow.",
      "By similar triangles, $\\frac{y}{6} = \\frac{x+y}{25}$.",
      "Cross-multiplying gives 25y = 6(x+y) \\implies 19y = 6x$.",
      "Differentiate with respect to $t$: 19\\frac{dy}{dt} = 6\\frac{dx}{dt}$.",
      "Substitute $\\frac{dx}{dt} = 3$ to get 19\\frac{dy}{dt} = 6(3) = 18$.",
      "$\\frac{dy}{dt} = \\frac{18}{19} = 0.947$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50523",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 6-ft person's shadow is lengthening at 0.947 ft/s as they walk away from a 25-ft lamppost. How fast are they walking?",
    "answer": "3.000 ft/s",
    "steps": [
      "Let $x$ be distance from lamppost, $y$ be shadow length.",
      "Using similar triangles: 25y = 6(x+y) \\implies 19y = 6x$.",
      "Differentiate: 19\\frac{dy}{dt} = 6\\frac{dx}{dt}$.",
      "Given $\\frac{dy}{dt} = 0.947$, substitute: 19(0.947) = 6\\frac{dx}{dt}$.",
      "$\\frac{dx}{dt} = \\frac{18}{6} = 3$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50524",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 6-ft tall person walks from a 25-ft lamppost at 3 ft/s. How fast is the tip of their shadow moving along the ground?",
    "answer": "3.947 ft/s",
    "steps": [
      "Let $x$ be the person's distance from the lamppost, and $z = x+y$ be the distance from lamppost base to shadow tip.",
      "Similar triangles yield $\\frac{y}{6} = \\frac{z}{25}$. Since $y = z - x$, we have $\\frac{z-x}{6} = \\frac{z}{25}$.",
      "Cross-multiplying: 25(z-x) = 6z \\implies 19z = 25x$.",
      "Differentiate: 19\\frac{dz}{dt} = 25\\frac{dx}{dt}$.",
      "Given $\\frac{dx}{dt} = 3$, we get 19\\frac{dz}{dt} = 25(3) = 75$.",
      "$\\frac{dz}{dt} = \\frac{75}{19} = 3.947$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50525",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A person walks away from a lamppost at 3 ft/s. The tip of their shadow moves at 3.947 ft/s. If the lamppost is 25 ft tall, how tall is the person?",
    "answer": "6.00 ft",
    "steps": [
      "Let $h$ be the person's height, $x$ be distance from lamppost, $z$ be the tip's distance.",
      "Similar triangles imply $\\frac{z-x}{h} = \\frac{z}{25} \\implies 25(z-x) = hz \\implies (25-h)z = 25x$.",
      "Differentiating gives $(25-h)\\frac{dz}{dt} = 25\\frac{dx}{dt}$.",
      "We are given $\\frac{dx}{dt} = 3$ and $\\frac{dz}{dt} = 3.947$.",
      "Substitute: $(25-h)(3.947) = 25(3) = 75$.",
      "$25-h = \\frac{75}{3.947} \\approx 19$.",
      "So $h = 25 - 19 = 6$ ft."
    ]
  },
  {
    "id": "mega-app-var-50526",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 6-ft tall person walks away from a 25-ft lamppost at 4 ft/s. How fast is the length of their shadow increasing?",
    "answer": "1.263 ft/s",
    "steps": [
      "Let $x$ be the person's distance from the lamppost, and $y$ be the length of the shadow.",
      "By similar triangles, $\\frac{y}{6} = \\frac{x+y}{25}$.",
      "Cross-multiplying gives 25y = 6(x+y) \\implies 19y = 6x$.",
      "Differentiate with respect to $t$: 19\\frac{dy}{dt} = 6\\frac{dx}{dt}$.",
      "Substitute $\\frac{dx}{dt} = 4$ to get 19\\frac{dy}{dt} = 6(4) = 24$.",
      "$\\frac{dy}{dt} = \\frac{24}{19} = 1.263$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50527",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 6-ft person's shadow is lengthening at 1.263 ft/s as they walk away from a 25-ft lamppost. How fast are they walking?",
    "answer": "4.000 ft/s",
    "steps": [
      "Let $x$ be distance from lamppost, $y$ be shadow length.",
      "Using similar triangles: 25y = 6(x+y) \\implies 19y = 6x$.",
      "Differentiate: 19\\frac{dy}{dt} = 6\\frac{dx}{dt}$.",
      "Given $\\frac{dy}{dt} = 1.263$, substitute: 19(1.263) = 6\\frac{dx}{dt}$.",
      "$\\frac{dx}{dt} = \\frac{24}{6} = 4$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50528",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 6-ft tall person walks from a 25-ft lamppost at 4 ft/s. How fast is the tip of their shadow moving along the ground?",
    "answer": "5.263 ft/s",
    "steps": [
      "Let $x$ be the person's distance from the lamppost, and $z = x+y$ be the distance from lamppost base to shadow tip.",
      "Similar triangles yield $\\frac{y}{6} = \\frac{z}{25}$. Since $y = z - x$, we have $\\frac{z-x}{6} = \\frac{z}{25}$.",
      "Cross-multiplying: 25(z-x) = 6z \\implies 19z = 25x$.",
      "Differentiate: 19\\frac{dz}{dt} = 25\\frac{dx}{dt}$.",
      "Given $\\frac{dx}{dt} = 4$, we get 19\\frac{dz}{dt} = 25(4) = 100$.",
      "$\\frac{dz}{dt} = \\frac{100}{19} = 5.263$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50529",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A person walks away from a lamppost at 4 ft/s. The tip of their shadow moves at 5.263 ft/s. If the lamppost is 25 ft tall, how tall is the person?",
    "answer": "6.00 ft",
    "steps": [
      "Let $h$ be the person's height, $x$ be distance from lamppost, $z$ be the tip's distance.",
      "Similar triangles imply $\\frac{z-x}{h} = \\frac{z}{25} \\implies 25(z-x) = hz \\implies (25-h)z = 25x$.",
      "Differentiating gives $(25-h)\\frac{dz}{dt} = 25\\frac{dx}{dt}$.",
      "We are given $\\frac{dx}{dt} = 4$ and $\\frac{dz}{dt} = 5.263$.",
      "Substitute: $(25-h)(5.263) = 25(4) = 100$.",
      "$25-h = \\frac{100}{5.263} \\approx 19$.",
      "So $h = 25 - 19 = 6$ ft."
    ]
  },
  {
    "id": "mega-app-var-50530",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "medium",
    "statement": "A 6-ft tall person walks away from a 25-ft lamppost at 5 ft/s. How fast is the length of their shadow increasing?",
    "answer": "1.579 ft/s",
    "steps": [
      "Let $x$ be the person's distance from the lamppost, and $y$ be the length of the shadow.",
      "By similar triangles, $\\frac{y}{6} = \\frac{x+y}{25}$.",
      "Cross-multiplying gives 25y = 6(x+y) \\implies 19y = 6x$.",
      "Differentiate with respect to $t$: 19\\frac{dy}{dt} = 6\\frac{dx}{dt}$.",
      "Substitute $\\frac{dx}{dt} = 5$ to get 19\\frac{dy}{dt} = 6(5) = 30$.",
      "$\\frac{dy}{dt} = \\frac{30}{19} = 1.579$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50531",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 6-ft person's shadow is lengthening at 1.579 ft/s as they walk away from a 25-ft lamppost. How fast are they walking?",
    "answer": "5.000 ft/s",
    "steps": [
      "Let $x$ be distance from lamppost, $y$ be shadow length.",
      "Using similar triangles: 25y = 6(x+y) \\implies 19y = 6x$.",
      "Differentiate: 19\\frac{dy}{dt} = 6\\frac{dx}{dt}$.",
      "Given $\\frac{dy}{dt} = 1.579$, substitute: 19(1.579) = 6\\frac{dx}{dt}$.",
      "$\\frac{dx}{dt} = \\frac{30}{6} = 5$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50532",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "hard",
    "statement": "A 6-ft tall person walks from a 25-ft lamppost at 5 ft/s. How fast is the tip of their shadow moving along the ground?",
    "answer": "6.579 ft/s",
    "steps": [
      "Let $x$ be the person's distance from the lamppost, and $z = x+y$ be the distance from lamppost base to shadow tip.",
      "Similar triangles yield $\\frac{y}{6} = \\frac{z}{25}$. Since $y = z - x$, we have $\\frac{z-x}{6} = \\frac{z}{25}$.",
      "Cross-multiplying: 25(z-x) = 6z \\implies 19z = 25x$.",
      "Differentiate: 19\\frac{dz}{dt} = 25\\frac{dx}{dt}$.",
      "Given $\\frac{dx}{dt} = 5$, we get 19\\frac{dz}{dt} = 25(5) = 125$.",
      "$\\frac{dz}{dt} = \\frac{125}{19} = 6.579$ ft/s."
    ]
  },
  {
    "id": "mega-app-var-50533",
    "topic": "applications",
    "category": "Related Rates",
    "difficulty": "very_hard",
    "statement": "A person walks away from a lamppost at 5 ft/s. The tip of their shadow moves at 6.579 ft/s. If the lamppost is 25 ft tall, how tall is the person?",
    "answer": "6.00 ft",
    "steps": [
      "Let $h$ be the person's height, $x$ be distance from lamppost, $z$ be the tip's distance.",
      "Similar triangles imply $\\frac{z-x}{h} = \\frac{z}{25} \\implies 25(z-x) = hz \\implies (25-h)z = 25x$.",
      "Differentiating gives $(25-h)\\frac{dz}{dt} = 25\\frac{dx}{dt}$.",
      "We are given $\\frac{dx}{dt} = 5$ and $\\frac{dz}{dt} = 6.579$.",
      "Substitute: $(25-h)(6.579) = 25(5) = 125$.",
      "$25-h = \\frac{125}{6.579} \\approx 19$.",
      "So $h = 25 - 19 = 6$ ft."
    ]
  },
  {
    "id": "mega-app-var-50534",
    "topic": "applications",
    "category": "Optimization shortcuts",
    "difficulty": "medium",
    "statement": "Find the dimensions of the rectangle of maximum area that can be inscribed in a circle of radius 4.",
    "answer": "Square of side 5.66",
    "steps": [
      "Let the rectangle sides be $2x$ and $2y$ centered at the origin.",
      "The constraint is $x^2 + y^2 = 4^2 \\implies y = \\sqrt{4^2 - x^2}$.",
      "The area is $A = (2x)(2y) = 4x\\sqrt{16 - x^2}$.",
      "To maximize $A$, maximize its square: $S = A^2 = 16x^2(16 - x^2) = 256x^2 - 16x^4$.",
      "$S' = 512x - 64x^3 = 0 \\implies x^2 = \\frac{16}{2} \\implies x = \\frac{4}{\\sqrt{2}}$.",
      "Then $y = \\sqrt{16 - \\frac{16}{2}} = \\frac{4}{\\sqrt{2}}$.",
      "The dimensions are $2x = 2y = 4\\sqrt{2} \\approx 5.66$."
    ]
  },
  {
    "id": "mega-app-var-50535",
    "topic": "applications",
    "category": "Optimization shortcuts",
    "difficulty": "hard",
    "statement": "What is the maximum area of a rectangle inscribed in a circle of radius 4?",
    "answer": "32",
    "steps": [
      "An inscribed rectangle of maximum area in a circle is always a square.",
      "Let the side length of the square be $s$. The diagonal is the diameter of the circle, $d = 2(4) = 8$.",
      "By Pythagorean theorem: $s^2 + s^2 = (8)^2 \\implies 2s^2 = 64$.",
      "$s^2 = 32$. The area is exactly $s^2 = 32$."
    ]
  },
  {
    "id": "mega-app-var-50536",
    "topic": "applications",
    "category": "Optimization shortcuts",
    "difficulty": "highest",
    "statement": "Find the perimeter of the largest rectangle that can be inscribed in a circle of radius 4.",
    "answer": "22.63",
    "steps": [
      "The largest inscribed rectangle in terms of area (and perimeter) is a square.",
      "The diagonal is $2R = 8$.",
      "The side length is $s = \\frac{2R}{\\sqrt{2}} = R\\sqrt{2} = 4\\sqrt{2}$.",
      "Perimeter $P = 4s = 4(4\\sqrt{2}) = 16\\sqrt{2} \\approx 22.63$."
    ]
  },
  {
    "id": "mega-app-var-50537",
    "topic": "applications",
    "category": "Optimization shortcuts",
    "difficulty": "medium",
    "statement": "Find the dimensions of the rectangle of maximum area that can be inscribed in a circle of radius 5.",
    "answer": "Square of side 7.07",
    "steps": [
      "Let the rectangle sides be $2x$ and $2y$ centered at the origin.",
      "The constraint is $x^2 + y^2 = 5^2 \\implies y = \\sqrt{5^2 - x^2}$.",
      "The area is $A = (2x)(2y) = 4x\\sqrt{25 - x^2}$.",
      "To maximize $A$, maximize its square: $S = A^2 = 16x^2(25 - x^2) = 400x^2 - 16x^4$.",
      "$S' = 800x - 64x^3 = 0 \\implies x^2 = \\frac{25}{2} \\implies x = \\frac{5}{\\sqrt{2}}$.",
      "Then $y = \\sqrt{25 - \\frac{25}{2}} = \\frac{5}{\\sqrt{2}}$.",
      "The dimensions are $2x = 2y = 5\\sqrt{2} \\approx 7.07$."
    ]
  },
  {
    "id": "mega-app-var-50538",
    "topic": "applications",
    "category": "Optimization shortcuts",
    "difficulty": "hard",
    "statement": "What is the maximum area of a rectangle inscribed in a circle of radius 5?",
    "answer": "50",
    "steps": [
      "An inscribed rectangle of maximum area in a circle is always a square.",
      "Let the side length of the square be $s$. The diagonal is the diameter of the circle, $d = 2(5) = 10$.",
      "By Pythagorean theorem: $s^2 + s^2 = (10)^2 \\implies 2s^2 = 100$.",
      "$s^2 = 50$. The area is exactly $s^2 = 50$."
    ]
  },
  {
    "id": "mega-app-var-50539",
    "topic": "applications",
    "category": "Optimization shortcuts",
    "difficulty": "highest",
    "statement": "Find the perimeter of the largest rectangle that can be inscribed in a circle of radius 5.",
    "answer": "28.28",
    "steps": [
      "The largest inscribed rectangle in terms of area (and perimeter) is a square.",
      "The diagonal is $2R = 10$.",
      "The side length is $s = \\frac{2R}{\\sqrt{2}} = R\\sqrt{2} = 5\\sqrt{2}$.",
      "Perimeter $P = 4s = 4(5\\sqrt{2}) = 20\\sqrt{2} \\approx 28.28$."
    ]
  },
  {
    "id": "mega-app-var-50540",
    "topic": "applications",
    "category": "Optimization shortcuts",
    "difficulty": "medium",
    "statement": "Find the dimensions of the rectangle of maximum area that can be inscribed in a circle of radius 8.",
    "answer": "Square of side 11.31",
    "steps": [
      "Let the rectangle sides be $2x$ and $2y$ centered at the origin.",
      "The constraint is $x^2 + y^2 = 8^2 \\implies y = \\sqrt{8^2 - x^2}$.",
      "The area is $A = (2x)(2y) = 4x\\sqrt{64 - x^2}$.",
      "To maximize $A$, maximize its square: $S = A^2 = 16x^2(64 - x^2) = 1024x^2 - 16x^4$.",
      "$S' = 2048x - 64x^3 = 0 \\implies x^2 = \\frac{64}{2} \\implies x = \\frac{8}{\\sqrt{2}}$.",
      "Then $y = \\sqrt{64 - \\frac{64}{2}} = \\frac{8}{\\sqrt{2}}$.",
      "The dimensions are $2x = 2y = 8\\sqrt{2} \\approx 11.31$."
    ]
  },
  {
    "id": "mega-app-var-50541",
    "topic": "applications",
    "category": "Optimization shortcuts",
    "difficulty": "hard",
    "statement": "What is the maximum area of a rectangle inscribed in a circle of radius 8?",
    "answer": "128",
    "steps": [
      "An inscribed rectangle of maximum area in a circle is always a square.",
      "Let the side length of the square be $s$. The diagonal is the diameter of the circle, $d = 2(8) = 16$.",
      "By Pythagorean theorem: $s^2 + s^2 = (16)^2 \\implies 2s^2 = 256$.",
      "$s^2 = 128$. The area is exactly $s^2 = 128$."
    ]
  },
  {
    "id": "mega-app-var-50542",
    "topic": "applications",
    "category": "Optimization shortcuts",
    "difficulty": "highest",
    "statement": "Find the perimeter of the largest rectangle that can be inscribed in a circle of radius 8.",
    "answer": "45.25",
    "steps": [
      "The largest inscribed rectangle in terms of area (and perimeter) is a square.",
      "The diagonal is $2R = 16$.",
      "The side length is $s = \\frac{2R}{\\sqrt{2}} = R\\sqrt{2} = 8\\sqrt{2}$.",
      "Perimeter $P = 4s = 4(8\\sqrt{2}) = 32\\sqrt{2} \\approx 45.25$."
    ]
  },
  {
    "id": "mega-app-var-50543",
    "topic": "applications",
    "category": "Optimization shortcuts",
    "difficulty": "medium",
    "statement": "Find the dimensions of the rectangle of maximum area that can be inscribed in a circle of radius 10.",
    "answer": "Square of side 14.14",
    "steps": [
      "Let the rectangle sides be $2x$ and $2y$ centered at the origin.",
      "The constraint is $x^2 + y^2 = 10^2 \\implies y = \\sqrt{10^2 - x^2}$.",
      "The area is $A = (2x)(2y) = 4x\\sqrt{100 - x^2}$.",
      "To maximize $A$, maximize its square: $S = A^2 = 16x^2(100 - x^2) = 1600x^2 - 16x^4$.",
      "$S' = 3200x - 64x^3 = 0 \\implies x^2 = \\frac{100}{2} \\implies x = \\frac{10}{\\sqrt{2}}$.",
      "Then $y = \\sqrt{100 - \\frac{100}{2}} = \\frac{10}{\\sqrt{2}}$.",
      "The dimensions are $2x = 2y = 10\\sqrt{2} \\approx 14.14$."
    ]
  },
  {
    "id": "mega-app-var-50544",
    "topic": "applications",
    "category": "Optimization shortcuts",
    "difficulty": "hard",
    "statement": "What is the maximum area of a rectangle inscribed in a circle of radius 10?",
    "answer": "200",
    "steps": [
      "An inscribed rectangle of maximum area in a circle is always a square.",
      "Let the side length of the square be $s$. The diagonal is the diameter of the circle, $d = 2(10) = 20$.",
      "By Pythagorean theorem: $s^2 + s^2 = (20)^2 \\implies 2s^2 = 400$.",
      "$s^2 = 200$. The area is exactly $s^2 = 200$."
    ]
  },
  {
    "id": "mega-app-var-50545",
    "topic": "applications",
    "category": "Optimization shortcuts",
    "difficulty": "highest",
    "statement": "Find the perimeter of the largest rectangle that can be inscribed in a circle of radius 10.",
    "answer": "56.57",
    "steps": [
      "The largest inscribed rectangle in terms of area (and perimeter) is a square.",
      "The diagonal is $2R = 20$.",
      "The side length is $s = \\frac{2R}{\\sqrt{2}} = R\\sqrt{2} = 10\\sqrt{2}$.",
      "Perimeter $P = 4s = 4(10\\sqrt{2}) = 40\\sqrt{2} \\approx 56.57$."
    ]
  },
  {
    "id": "mega-app-var-50546",
    "topic": "applications",
    "category": "Optimization shortcuts",
    "difficulty": "medium",
    "statement": "Find the dimensions of the rectangle of maximum area that can be inscribed in a circle of radius 12.",
    "answer": "Square of side 16.97",
    "steps": [
      "Let the rectangle sides be $2x$ and $2y$ centered at the origin.",
      "The constraint is $x^2 + y^2 = 12^2 \\implies y = \\sqrt{12^2 - x^2}$.",
      "The area is $A = (2x)(2y) = 4x\\sqrt{144 - x^2}$.",
      "To maximize $A$, maximize its square: $S = A^2 = 16x^2(144 - x^2) = 2304x^2 - 16x^4$.",
      "$S' = 4608x - 64x^3 = 0 \\implies x^2 = \\frac{144}{2} \\implies x = \\frac{12}{\\sqrt{2}}$.",
      "Then $y = \\sqrt{144 - \\frac{144}{2}} = \\frac{12}{\\sqrt{2}}$.",
      "The dimensions are $2x = 2y = 12\\sqrt{2} \\approx 16.97$."
    ]
  },
  {
    "id": "mega-app-var-50547",
    "topic": "applications",
    "category": "Optimization shortcuts",
    "difficulty": "hard",
    "statement": "What is the maximum area of a rectangle inscribed in a circle of radius 12?",
    "answer": "288",
    "steps": [
      "An inscribed rectangle of maximum area in a circle is always a square.",
      "Let the side length of the square be $s$. The diagonal is the diameter of the circle, $d = 2(12) = 24$.",
      "By Pythagorean theorem: $s^2 + s^2 = (24)^2 \\implies 2s^2 = 576$.",
      "$s^2 = 288$. The area is exactly $s^2 = 288$."
    ]
  },
  {
    "id": "mega-app-var-50548",
    "topic": "applications",
    "category": "Optimization shortcuts",
    "difficulty": "highest",
    "statement": "Find the perimeter of the largest rectangle that can be inscribed in a circle of radius 12.",
    "answer": "67.88",
    "steps": [
      "The largest inscribed rectangle in terms of area (and perimeter) is a square.",
      "The diagonal is $2R = 24$.",
      "The side length is $s = \\frac{2R}{\\sqrt{2}} = R\\sqrt{2} = 12\\sqrt{2}$.",
      "Perimeter $P = 4s = 4(12\\sqrt{2}) = 48\\sqrt{2} \\approx 67.88$."
    ]
  },
  {
    "id": "mega-app-var-50549",
    "topic": "applications",
    "category": "Optimization",
    "difficulty": "hard",
    "statement": "Find the dimensions of the rectangle of maximum area inscribed under the parabola y = 4 - x^2 and above the x-axis.",
    "answer": "Width = 2.31, Height = 2.67",
    "steps": [
      "Let the top right vertex of the rectangle be $(x, y)$ on the parabola.",
      "The width of the rectangle is $2x$ and the height is $y = 4 - x^2$.",
      "Area $A = 2x(4 - x^2) = 8x - 2x^3$.",
      "Differentiate: $A'(x) = 8 - 6x^2$.",
      "Set $A'(x) = 0 \\implies 6x^2 = 8 \\implies x = \\frac{2}{\\sqrt{3}} \\approx 1.155$.",
      "Width is $2x = 2.31$.",
      "Height is $y = 4 - (1.155)^2 = 2.67$."
    ]
  },
  {
    "id": "mega-app-var-50550",
    "topic": "applications",
    "category": "Optimization",
    "difficulty": "very_hard",
    "statement": "What is the maximum area of a rectangle inscribed under y = 4 - x^2?",
    "answer": "6.158",
    "steps": [
      "Let width be $2x$ and height be $y = 4 - x^2$.",
      "Area $A(x) = 2x(4 - x^2) = 8x - 2x^3$.",
      "$A'(x) = 8 - 6x^2 = 0 \\implies x = \\frac{2}{\\sqrt{3}}$.",
      "Max area $A = 2(\\frac{2}{\\sqrt{3}})(4 - \\frac{4}{3}) = \\frac{4}{\\sqrt{3}}(\\frac{8}{3})$.",
      "$A = \\frac{32}{3\\sqrt{3}} \\approx 6.158$."
    ]
  },
  {
    "id": "mega-app-var-50551",
    "topic": "applications",
    "category": "Optimization",
    "difficulty": "hard",
    "statement": "Find the dimensions of the rectangle of maximum area inscribed under the parabola y = 9 - x^2 and above the x-axis.",
    "answer": "Width = 3.46, Height = 6.00",
    "steps": [
      "Let the top right vertex of the rectangle be $(x, y)$ on the parabola.",
      "The width of the rectangle is $2x$ and the height is $y = 9 - x^2$.",
      "Area $A = 2x(9 - x^2) = 18x - 2x^3$.",
      "Differentiate: $A'(x) = 18 - 6x^2$.",
      "Set $A'(x) = 0 \\implies 6x^2 = 18 \\implies x = \\frac{3}{\\sqrt{3}} \\approx 1.732$.",
      "Width is $2x = 3.46$.",
      "Height is $y = 9 - (1.732)^2 = 6.00$."
    ]
  },
  {
    "id": "mega-app-var-50552",
    "topic": "applications",
    "category": "Optimization",
    "difficulty": "very_hard",
    "statement": "What is the maximum area of a rectangle inscribed under y = 9 - x^2?",
    "answer": "20.785",
    "steps": [
      "Let width be $2x$ and height be $y = 9 - x^2$.",
      "Area $A(x) = 2x(9 - x^2) = 18x - 2x^3$.",
      "$A'(x) = 18 - 6x^2 = 0 \\implies x = \\frac{3}{\\sqrt{3}}$.",
      "Max area $A = 2(\\frac{3}{\\sqrt{3}})(9 - \\frac{9}{3}) = \\frac{6}{\\sqrt{3}}(\\frac{18}{3})$.",
      "$A = \\frac{108}{3\\sqrt{3}} \\approx 20.785$."
    ]
  },
  {
    "id": "mega-app-var-50553",
    "topic": "applications",
    "category": "Optimization",
    "difficulty": "hard",
    "statement": "Find the dimensions of the rectangle of maximum area inscribed under the parabola y = 16 - x^2 and above the x-axis.",
    "answer": "Width = 4.62, Height = 10.67",
    "steps": [
      "Let the top right vertex of the rectangle be $(x, y)$ on the parabola.",
      "The width of the rectangle is $2x$ and the height is $y = 16 - x^2$.",
      "Area $A = 2x(16 - x^2) = 32x - 2x^3$.",
      "Differentiate: $A'(x) = 32 - 6x^2$.",
      "Set $A'(x) = 0 \\implies 6x^2 = 32 \\implies x = \\frac{4}{\\sqrt{3}} \\approx 2.309$.",
      "Width is $2x = 4.62$.",
      "Height is $y = 16 - (2.309)^2 = 10.67$."
    ]
  },
  {
    "id": "mega-app-var-50554",
    "topic": "applications",
    "category": "Optimization",
    "difficulty": "very_hard",
    "statement": "What is the maximum area of a rectangle inscribed under y = 16 - x^2?",
    "answer": "49.267",
    "steps": [
      "Let width be $2x$ and height be $y = 16 - x^2$.",
      "Area $A(x) = 2x(16 - x^2) = 32x - 2x^3$.",
      "$A'(x) = 32 - 6x^2 = 0 \\implies x = \\frac{4}{\\sqrt{3}}$.",
      "Max area $A = 2(\\frac{4}{\\sqrt{3}})(16 - \\frac{16}{3}) = \\frac{8}{\\sqrt{3}}(\\frac{32}{3})$.",
      "$A = \\frac{256}{3\\sqrt{3}} \\approx 49.267$."
    ]
  },
  {
    "id": "mega-app-var-50555",
    "topic": "applications",
    "category": "Optimization",
    "difficulty": "hard",
    "statement": "Find the dimensions of the rectangle of maximum area inscribed under the parabola y = 25 - x^2 and above the x-axis.",
    "answer": "Width = 5.77, Height = 16.67",
    "steps": [
      "Let the top right vertex of the rectangle be $(x, y)$ on the parabola.",
      "The width of the rectangle is $2x$ and the height is $y = 25 - x^2$.",
      "Area $A = 2x(25 - x^2) = 50x - 2x^3$.",
      "Differentiate: $A'(x) = 50 - 6x^2$.",
      "Set $A'(x) = 0 \\implies 6x^2 = 50 \\implies x = \\frac{5}{\\sqrt{3}} \\approx 2.887$.",
      "Width is $2x = 5.77$.",
      "Height is $y = 25 - (2.887)^2 = 16.67$."
    ]
  },
  {
    "id": "mega-app-var-50556",
    "topic": "applications",
    "category": "Optimization",
    "difficulty": "very_hard",
    "statement": "What is the maximum area of a rectangle inscribed under y = 25 - x^2?",
    "answer": "96.225",
    "steps": [
      "Let width be $2x$ and height be $y = 25 - x^2$.",
      "Area $A(x) = 2x(25 - x^2) = 50x - 2x^3$.",
      "$A'(x) = 50 - 6x^2 = 0 \\implies x = \\frac{5}{\\sqrt{3}}$.",
      "Max area $A = 2(\\frac{5}{\\sqrt{3}})(25 - \\frac{25}{3}) = \\frac{10}{\\sqrt{3}}(\\frac{50}{3})$.",
      "$A = \\frac{500}{3\\sqrt{3}} \\approx 96.225$."
    ]
  },
  {
    "id": "mega-app-var-50557",
    "topic": "applications",
    "category": "Optimization",
    "difficulty": "medium",
    "statement": "What is the maximum area of a rectangle with a fixed perimeter of 100?",
    "answer": "625",
    "steps": [
      "A rectangle with fixed perimeter maximizes area when it is a square.",
      "Perimeter $P = 4s = 100 \\implies s = 25$.",
      "Max area is $A = s^2 = (25)^2 = 625$."
    ]
  },
  {
    "id": "mega-app-var-50558",
    "topic": "applications",
    "category": "Optimization",
    "difficulty": "hard",
    "statement": "A rectangle has fixed perimeter 100. What is the length of its diagonal when the area is maximized?",
    "answer": "35.355",
    "steps": [
      "Area is maximized when the rectangle is a square.",
      "Side length $s = \\frac{100}{4} = 25$.",
      "The diagonal $d = \\sqrt{s^2 + s^2} = s\\sqrt{2} = 25\\sqrt{2}$.",
      "$d \\approx 35.355$."
    ]
  },
  {
    "id": "mega-app-var-50559",
    "topic": "applications",
    "category": "Optimization",
    "difficulty": "medium",
    "statement": "A farmer has 100 ft of fencing to enclose a rectangular field bordering a strict river (no fence needed along river). Find the dimensions that maximize area.",
    "answer": "50 by 25",
    "steps": [
      "Let Length be $L$ (along river) and Width be $w$.",
      "Constraints: $L + 2w = 100 \\implies L = 100 - 2w$.",
      "Area $A(w) = w L = w(100 - 2w) = 100w - 2w^2$.",
      "$A'(w) = 100 - 4w = 0 \\implies w = 25$.",
      "Then $L = 100 - 2(25) = 50$.",
      "Dimensions are $L = 50$ by $w = 25$."
    ]
  },
  {
    "id": "mega-app-var-50560",
    "topic": "applications",
    "category": "Optimization",
    "difficulty": "hard",
    "statement": "A rectangular pen borders a wall and requires 100 ft of fencing for the remaining 3 sides. What is the maximum possible area?",
    "answer": "1250 sq ft",
    "steps": [
      "Let the dimensions be $L$ (parallel to wall) and $w$ (perpendicular).",
      "Then $L + 2w = 100 \\implies L = 100 - 2w$.",
      "Area $A = w(100 - 2w) = 100w - 2w^2$.",
      "$A'(w) = 100 - 4w = 0 \\implies w = 25$.",
      "$L = 100 - 2(25) = 50$.",
      "Max area $A = (50) \\times (25) = 1250$ sq ft."
    ]
  },
  {
    "id": "mega-app-var-50561",
    "topic": "applications",
    "category": "Optimization",
    "difficulty": "medium",
    "statement": "What is the maximum area of a rectangle with a fixed perimeter of 240?",
    "answer": "3600",
    "steps": [
      "A rectangle with fixed perimeter maximizes area when it is a square.",
      "Perimeter $P = 4s = 240 \\implies s = 60$.",
      "Max area is $A = s^2 = (60)^2 = 3600$."
    ]
  },
  {
    "id": "mega-app-var-50562",
    "topic": "applications",
    "category": "Optimization",
    "difficulty": "hard",
    "statement": "A rectangle has fixed perimeter 240. What is the length of its diagonal when the area is maximized?",
    "answer": "84.853",
    "steps": [
      "Area is maximized when the rectangle is a square.",
      "Side length $s = \\frac{240}{4} = 60$.",
      "The diagonal $d = \\sqrt{s^2 + s^2} = s\\sqrt{2} = 60\\sqrt{2}$.",
      "$d \\approx 84.853$."
    ]
  },
  {
    "id": "mega-app-var-50563",
    "topic": "applications",
    "category": "Optimization",
    "difficulty": "medium",
    "statement": "A farmer has 240 ft of fencing to enclose a rectangular field bordering a strict river (no fence needed along river). Find the dimensions that maximize area.",
    "answer": "120 by 60",
    "steps": [
      "Let Length be $L$ (along river) and Width be $w$.",
      "Constraints: $L + 2w = 240 \\implies L = 240 - 2w$.",
      "Area $A(w) = w L = w(240 - 2w) = 240w - 2w^2$.",
      "$A'(w) = 240 - 4w = 0 \\implies w = 60$.",
      "Then $L = 240 - 2(60) = 120$.",
      "Dimensions are $L = 120$ by $w = 60$."
    ]
  },
  {
    "id": "mega-app-var-50564",
    "topic": "applications",
    "category": "Optimization",
    "difficulty": "hard",
    "statement": "A rectangular pen borders a wall and requires 240 ft of fencing for the remaining 3 sides. What is the maximum possible area?",
    "answer": "7200 sq ft",
    "steps": [
      "Let the dimensions be $L$ (parallel to wall) and $w$ (perpendicular).",
      "Then $L + 2w = 240 \\implies L = 240 - 2w$.",
      "Area $A = w(240 - 2w) = 240w - 2w^2$.",
      "$A'(w) = 240 - 4w = 0 \\implies w = 60$.",
      "$L = 240 - 2(60) = 120$.",
      "Max area $A = (120) \\times (60) = 7200$ sq ft."
    ]
  },
  {
    "id": "mega-app-var-50565",
    "topic": "applications",
    "category": "Optimization",
    "difficulty": "medium",
    "statement": "What is the maximum area of a rectangle with a fixed perimeter of 500?",
    "answer": "15625",
    "steps": [
      "A rectangle with fixed perimeter maximizes area when it is a square.",
      "Perimeter $P = 4s = 500 \\implies s = 125$.",
      "Max area is $A = s^2 = (125)^2 = 15625$."
    ]
  },
  {
    "id": "mega-app-var-50566",
    "topic": "applications",
    "category": "Optimization",
    "difficulty": "hard",
    "statement": "A rectangle has fixed perimeter 500. What is the length of its diagonal when the area is maximized?",
    "answer": "176.777",
    "steps": [
      "Area is maximized when the rectangle is a square.",
      "Side length $s = \\frac{500}{4} = 125$.",
      "The diagonal $d = \\sqrt{s^2 + s^2} = s\\sqrt{2} = 125\\sqrt{2}$.",
      "$d \\approx 176.777$."
    ]
  },
  {
    "id": "mega-app-var-50567",
    "topic": "applications",
    "category": "Optimization",
    "difficulty": "medium",
    "statement": "A farmer has 500 ft of fencing to enclose a rectangular field bordering a strict river (no fence needed along river). Find the dimensions that maximize area.",
    "answer": "250 by 125",
    "steps": [
      "Let Length be $L$ (along river) and Width be $w$.",
      "Constraints: $L + 2w = 500 \\implies L = 500 - 2w$.",
      "Area $A(w) = w L = w(500 - 2w) = 500w - 2w^2$.",
      "$A'(w) = 500 - 4w = 0 \\implies w = 125$.",
      "Then $L = 500 - 2(125) = 250$.",
      "Dimensions are $L = 250$ by $w = 125$."
    ]
  },
  {
    "id": "mega-app-var-50568",
    "topic": "applications",
    "category": "Optimization",
    "difficulty": "hard",
    "statement": "A rectangular pen borders a wall and requires 500 ft of fencing for the remaining 3 sides. What is the maximum possible area?",
    "answer": "31250 sq ft",
    "steps": [
      "Let the dimensions be $L$ (parallel to wall) and $w$ (perpendicular).",
      "Then $L + 2w = 500 \\implies L = 500 - 2w$.",
      "Area $A = w(500 - 2w) = 500w - 2w^2$.",
      "$A'(w) = 500 - 4w = 0 \\implies w = 125$.",
      "$L = 500 - 2(125) = 250$.",
      "Max area $A = (250) \\times (125) = 31250$ sq ft."
    ]
  },
  {
    "id": "mega-app-var-50569",
    "topic": "applications",
    "category": "Optimization",
    "difficulty": "medium",
    "statement": "What is the maximum area of a rectangle with a fixed perimeter of 800?",
    "answer": "40000",
    "steps": [
      "A rectangle with fixed perimeter maximizes area when it is a square.",
      "Perimeter $P = 4s = 800 \\implies s = 200$.",
      "Max area is $A = s^2 = (200)^2 = 40000$."
    ]
  },
  {
    "id": "mega-app-var-50570",
    "topic": "applications",
    "category": "Optimization",
    "difficulty": "hard",
    "statement": "A rectangle has fixed perimeter 800. What is the length of its diagonal when the area is maximized?",
    "answer": "282.843",
    "steps": [
      "Area is maximized when the rectangle is a square.",
      "Side length $s = \\frac{800}{4} = 200$.",
      "The diagonal $d = \\sqrt{s^2 + s^2} = s\\sqrt{2} = 200\\sqrt{2}$.",
      "$d \\approx 282.843$."
    ]
  },
  {
    "id": "mega-app-var-50571",
    "topic": "applications",
    "category": "Optimization",
    "difficulty": "medium",
    "statement": "A farmer has 800 ft of fencing to enclose a rectangular field bordering a strict river (no fence needed along river). Find the dimensions that maximize area.",
    "answer": "400 by 200",
    "steps": [
      "Let Length be $L$ (along river) and Width be $w$.",
      "Constraints: $L + 2w = 800 \\implies L = 800 - 2w$.",
      "Area $A(w) = w L = w(800 - 2w) = 800w - 2w^2$.",
      "$A'(w) = 800 - 4w = 0 \\implies w = 200$.",
      "Then $L = 800 - 2(200) = 400$.",
      "Dimensions are $L = 400$ by $w = 200$."
    ]
  },
  {
    "id": "mega-app-var-50572",
    "topic": "applications",
    "category": "Optimization",
    "difficulty": "hard",
    "statement": "A rectangular pen borders a wall and requires 800 ft of fencing for the remaining 3 sides. What is the maximum possible area?",
    "answer": "80000 sq ft",
    "steps": [
      "Let the dimensions be $L$ (parallel to wall) and $w$ (perpendicular).",
      "Then $L + 2w = 800 \\implies L = 800 - 2w$.",
      "Area $A = w(800 - 2w) = 800w - 2w^2$.",
      "$A'(w) = 800 - 4w = 0 \\implies w = 200$.",
      "$L = 800 - 2(200) = 400$.",
      "Max area $A = (400) \\times (200) = 80000$ sq ft."
    ]
  },
  {
    "id": "mega-app-var-50573",
    "topic": "applications",
    "category": "Optimization",
    "difficulty": "medium",
    "statement": "What is the maximum area of a rectangle with a fixed perimeter of 1000?",
    "answer": "62500",
    "steps": [
      "A rectangle with fixed perimeter maximizes area when it is a square.",
      "Perimeter $P = 4s = 1000 \\implies s = 250$.",
      "Max area is $A = s^2 = (250)^2 = 62500$."
    ]
  },
  {
    "id": "mega-app-var-50574",
    "topic": "applications",
    "category": "Optimization",
    "difficulty": "hard",
    "statement": "A rectangle has fixed perimeter 1000. What is the length of its diagonal when the area is maximized?",
    "answer": "353.553",
    "steps": [
      "Area is maximized when the rectangle is a square.",
      "Side length $s = \\frac{1000}{4} = 250$.",
      "The diagonal $d = \\sqrt{s^2 + s^2} = s\\sqrt{2} = 250\\sqrt{2}$.",
      "$d \\approx 353.553$."
    ]
  },
  {
    "id": "mega-app-var-50575",
    "topic": "applications",
    "category": "Optimization",
    "difficulty": "medium",
    "statement": "A farmer has 1000 ft of fencing to enclose a rectangular field bordering a strict river (no fence needed along river). Find the dimensions that maximize area.",
    "answer": "500 by 250",
    "steps": [
      "Let Length be $L$ (along river) and Width be $w$.",
      "Constraints: $L + 2w = 1000 \\implies L = 1000 - 2w$.",
      "Area $A(w) = w L = w(1000 - 2w) = 1000w - 2w^2$.",
      "$A'(w) = 1000 - 4w = 0 \\implies w = 250$.",
      "Then $L = 1000 - 2(250) = 500$.",
      "Dimensions are $L = 500$ by $w = 250$."
    ]
  },
  {
    "id": "mega-app-var-50576",
    "topic": "applications",
    "category": "Optimization",
    "difficulty": "hard",
    "statement": "A rectangular pen borders a wall and requires 1000 ft of fencing for the remaining 3 sides. What is the maximum possible area?",
    "answer": "125000 sq ft",
    "steps": [
      "Let the dimensions be $L$ (parallel to wall) and $w$ (perpendicular).",
      "Then $L + 2w = 1000 \\implies L = 1000 - 2w$.",
      "Area $A = w(1000 - 2w) = 1000w - 2w^2$.",
      "$A'(w) = 1000 - 4w = 0 \\implies w = 250$.",
      "$L = 1000 - 2(250) = 500$.",
      "Max area $A = (500) \\times (250) = 125000$ sq ft."
    ]
  }
];
