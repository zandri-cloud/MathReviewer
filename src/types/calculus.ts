import React from 'react';

export interface Problem {
  id: string;
  category?: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Very Hard' | 'Boss' | 'highest';
  statement: string;
  method?: string;
  solution: string;
  finalAnswer?: string;
  type?: 'multiple-choice' | 'free-response';
  options?: string[];
  correctAnswerIndex?: number;
}

export interface TopicData {
  id: string;
  categoryId: string;
  title: string;
  icon: string;
  description: string;
  theory: React.ReactNode;
  problems: Problem[];
}

export interface Category {
  id: string;
  title: string;
}

export interface Formula {
  id: string;
  category: string;
  name: string;
  latex: string;
  description?: string;
}
