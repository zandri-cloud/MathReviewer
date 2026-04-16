import { generatedProblems100 } from './generatedProblems100';
import { generatedProblems50 } from './generatedProblems50';
import { generatedProblems200 } from './generatedProblems200';
import { generatedProblems500 } from './generatedProblems500';
import { initialTopics } from './calculusData';

export type ExamProblem = {
  id: string;
  topic: "trig" | "inverse_trig" | "hyperbolic" | "logarithmic" | "exponential";
  difficulty: "easy" | "medium" | "hard" | "very_hard" | "boss";
  statement: string;
  method?: string;
  answer: string;
  steps?: string[];
};

// Map existing problems to the new schema
const mappedExistingProblems: ExamProblem[] = [];

initialTopics.forEach(topic => {
  topic.problems.forEach(p => {
    let diff: ExamProblem['difficulty'] = "medium";
    if (p.difficulty === 'Easy') diff = "easy";
    if (p.difficulty === 'Medium') diff = "medium";
    if (p.difficulty === 'Hard') diff = "hard";

    mappedExistingProblems.push({
      id: p.id,
      topic: "trig", // Defaulting for mapped problems
      difficulty: diff,
      statement: p.statement,
      method: p.method,
      answer: p.finalAnswer || p.solution || 'y = 0',
      steps: [p.solution || '']
    });
  });
});

export const dataProblemsNew: ExamProblem[] = [];

export const allProblems: ExamProblem[] = [
  ...mappedExistingProblems,
  ...dataProblemsNew
];

export const examProblemPool: ExamProblem[] = [
  ...allProblems,
  ...generatedProblems100,
  ...generatedProblems50,
  ...generatedProblems200,
  ...generatedProblems500
];
