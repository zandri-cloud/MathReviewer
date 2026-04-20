import { generatedProblems100 } from './generatedProblems100';
import { generatedProblems50 } from './generatedProblems50';
import { generatedProblems200 } from './generatedProblems200';
import { generatedProblems500 } from './generatedProblems500';
import { generatedParametricProblems } from './generatedParametric300';
import { generatedParametric50VeryHard } from './generatedParametric50VeryHard';
import { generatedPartialProblems } from './generatedPartial300';
import { generatedLhopitalProblems } from './generatedLhopital300';
import { generatedHigherOrderProblems } from './generatedHigherOrder300';
import { generatedApplicationsProblems } from './generatedApplications100';
import { generatedMoreApps } from './generatedMoreApps';
import { generatedMegaApps } from './generatedMegaApps';
import { initialTopics } from './calculusData';

export type ExamProblem = {
  id: string;
  topic: string;
  category?: string;
  difficulty: "easy" | "medium" | "hard" | "very_hard" | "boss";
  statement: string;
  method?: string;
  answer: string;
  steps?: string | string[];
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
  ...generatedProblems500,
  ...generatedParametricProblems,
  ...generatedParametric50VeryHard,
  ...generatedPartialProblems,
  ...generatedLhopitalProblems,
  ...generatedHigherOrderProblems,
  ...generatedApplicationsProblems,
  ...generatedMoreApps,
  ...generatedMegaApps
];
