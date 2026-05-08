export type ExamProblem = {
  id: string;
  topic: string;
  category?: string;
  difficulty: "easy" | "medium" | "hard" | "very_hard" | "boss" | "highest";
  statement: string;
  method?: string;
  answer: string;
  steps?: string | string[];
};
