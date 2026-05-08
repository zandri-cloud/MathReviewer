export const generateNewProblems = () => {
  const problems = [];
  const categories = ["Numbers", "Geometric Proportions", "Cost & Economics", "Physics & Materials", "Shortest Distance", "Trigonometric Optimization"];
  
  categories.forEach(cat => {
    for (let i = 1; i <= 20; i++) {
      problems.push({
        id: `gen-opt-${cat.replace(/\s+/g, '-').toLowerCase()}-${i}`,
        topic: "applications",
        category: cat,
        difficulty: "hard", // Assuming high complexity as requested
        statement: `Generated optimization problem ${i} for ${cat}. [Needs specific problem content]`,
        answer: "TBD",
        steps: ["Step 1: Define variables", "Step 2: Set constraint", "Step 3: Define function", "Step 4: Differentiate", "Step 5: Solve"]
      });
    }
  });
  return problems;
};
