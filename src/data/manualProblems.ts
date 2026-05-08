import { ExamProblem } from '../types/exam';

/**
 * ─────────────────────────────────────────────────────────────────
 * MANUAL PROBLEM SANDBOX
 * ─────────────────────────────────────────────────────────────────
 * You can add as many custom problems here as you want!
 * Because this file is wired directly into the engine, anything 
 * you add here will instantly appear in:
 * 1. The Topic Details Reading Page
 * 2. Practice Mode
 * 3. The Quiz/Exam Engine
 */

export const manualProblems: ExamProblem[] = [
  // Uncomment and modify the example below to create your first problem!
  
  /*
  {
    id: "my-custom-app-01",
    topic: "applications",           // MUST be 'applications' to show up in Applications of Derivatives
    category: "Optimization",        // Used for display grouping
    difficulty: "hard",              // 'easy', 'medium', 'hard', 'very_hard', or 'boss'
    
    // THE PROBLEM (Use $ $ for math formatting!)
    // SVG MAGIC: If this statement contains keywords like "ladder", "box", "sphere", 
    // "parabola", or "dropped", the app will AUTOMATICALLY draw the specific SVG diagram!
    statement: "A $20$ ft ladder leans against a wall sliding away at $2$ ft/s...",
    
    // THE FINAL ANSWER
    answer: "1.5 ft/s",
    
    // THE STEP-BY-STEP SOLUTION
    steps: [
      "Step 1: Identify given rates. Let $x$ be the distance from the wall.",
      "Step 2: We are given $\\frac{dx}{dt} = 2$.",
      "Step 3: Use the Pythagorean theorem $x^2 + y^2 = 20^2$.",
      "Step 4: Differentiate implicitly: $2x\\frac{dx}{dt} + 2y\\frac{dy}{dt} = 0$.",
      "Step 5: Solve for $\\frac{dy}{dt}$."
    ]
  }
  */
];
