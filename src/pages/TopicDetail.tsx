import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MathText } from '../components/MathText';
import { TopicData } from '../data/calculusData';
import { cn } from '../lib/utils';

interface TopicDetailProps {
  topic: TopicData;
}

export function TopicDetail({ topic }: TopicDetailProps) {
  const [activeTab, setActiveTab] = useState<'theory' | 'problems'>('theory');
  const [showSolution, setShowSolution] = useState<Record<string, boolean>>({});
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [checkedAnswers, setCheckedAnswers] = useState<Record<string, boolean>>({});

  const toggleSolution = (id: string) => {
    setShowSolution(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSelectAnswer = (problemId: string, index: number) => {
    if (checkedAnswers[problemId]) return; // Don't allow changing after checking
    setSelectedAnswers(prev => ({ ...prev, [problemId]: index }));
  };

  const handleCheckAnswer = (problemId: string, correctIndex?: number) => {
    if (correctIndex === undefined) return;
    setCheckedAnswers(prev => ({ ...prev, [problemId]: true }));
    setShowSolution(prev => ({ ...prev, [problemId]: true }));
  };

  return (
    <motion.div 
      key={topic.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-surface-container-lowest ghost-border rounded-3xl p-8 lg:p-12 shadow-sm min-h-[80vh] flex flex-col"
    >
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="material-symbols-outlined text-primary text-3xl">{topic.icon}</span>
          <h1 className="text-4xl font-bold tracking-tighter">{topic.title}</h1>
        </div>
        <p className="text-secondary font-serif text-xl leading-relaxed">
          {topic.description}
        </p>
      </div>

      <div className="flex gap-4 mb-8 border-b border-outline-variant/20 pb-4">
        <button 
          onClick={() => setActiveTab('theory')}
          className={cn(
            "px-6 py-2 rounded-full font-medium transition-all",
            activeTab === 'theory' ? "bg-primary text-white shadow-md" : "bg-surface-container-low text-secondary hover:bg-surface-container-high"
          )}
        >
          Theory & Examples
        </button>
        <button 
          onClick={() => setActiveTab('problems')}
          className={cn(
            "px-6 py-2 rounded-full font-medium transition-all",
            activeTab === 'problems' ? "bg-primary text-white shadow-md" : "bg-surface-container-low text-secondary hover:bg-surface-container-high"
          )}
        >
          Practice Problems
        </button>
      </div>

      <div className="flex-1">
        {activeTab === 'theory' ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {topic.theory}
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Problem Set ({topic.problems.length})</h2>
            </div>

            <div className="grid gap-6">
              {topic.problems.map((problem, idx) => (
                <div key={problem.id} className="bg-surface-container-low/30 p-8 rounded-2xl ghost-border hover:bg-surface-container-low/60 transition-colors">
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-sm font-bold text-secondary uppercase tracking-wider">Problem {idx + 1}</span>
                    <span className={cn(
                      "px-2 py-1 text-[10px] font-bold rounded uppercase",
                      problem.difficulty === 'Easy' ? "bg-tertiary/10 text-tertiary" : 
                      problem.difficulty === 'Medium' ? "bg-primary/10 text-primary" : 
                      "bg-red-500/10 text-red-500"
                    )}>
                      {problem.difficulty}
                    </span>
                  </div>
                  
                  <div className="mb-6 text-on-surface">
                    <MathText block math={problem.statement} />
                  </div>

                  {problem.type === 'multiple-choice' && problem.options && (
                    <div className="mb-6 space-y-3">
                      {problem.options.map((opt, optIdx) => {
                        const isSelected = selectedAnswers[problem.id] === optIdx;
                        const isChecked = checkedAnswers[problem.id];
                        const isCorrect = problem.correctAnswerIndex === optIdx;
                        
                        let btnClass = "w-full text-left p-4 rounded-xl ghost-border transition-all flex items-center gap-4 ";
                        if (isChecked) {
                          if (isCorrect) btnClass += "bg-green-500/10 border-green-500/30 text-green-700 dark:text-green-400";
                          else if (isSelected) btnClass += "bg-red-500/10 border-red-500/30 text-red-700 dark:text-red-400";
                          else btnClass += "bg-surface-container-lowest opacity-50";
                        } else {
                          if (isSelected) btnClass += "bg-primary/10 border-primary/30 text-primary";
                          else btnClass += "bg-surface-container-lowest hover:bg-surface-container-low";
                        }

                        return (
                          <button 
                            key={optIdx}
                            onClick={() => handleSelectAnswer(problem.id, optIdx)}
                            disabled={isChecked}
                            className={btnClass}
                          >
                            <div className={cn(
                              "w-6 h-6 rounded-full border flex items-center justify-center text-xs font-bold",
                              isChecked && isCorrect ? "border-green-500 bg-green-500 text-white" :
                              isChecked && isSelected ? "border-red-500 bg-red-500 text-white" :
                              isSelected ? "border-primary bg-primary text-white" : "border-outline-variant"
                            )}>
                              {String.fromCharCode(65 + optIdx)}
                            </div>
                            <MathText math={opt} className="inline" />
                          </button>
                        );
                      })}
                      
                      {!checkedAnswers[problem.id] && selectedAnswers[problem.id] !== undefined && (
                        <button 
                          onClick={() => handleCheckAnswer(problem.id, problem.correctAnswerIndex)}
                          className="mt-4 px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary-container transition-colors"
                        >
                          Check Answer
                        </button>
                      )}
                    </div>
                  )}

                  {problem.type === 'free-response' && (
                    <div className="mb-6">
                      <button 
                        onClick={() => toggleSolution(problem.id)}
                        className="text-sm font-medium text-primary hover:text-primary-container flex items-center gap-2 mb-4"
                      >
                        <span className="material-symbols-outlined text-sm">
                          {showSolution[problem.id] ? 'visibility_off' : 'visibility'}
                        </span>
                        {showSolution[problem.id] ? 'Hide Solution' : 'Show Solution'}
                      </button>
                    </div>
                  )}

                  {showSolution[problem.id] && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="pt-6 border-t border-outline-variant/20 text-on-surface-variant overflow-hidden"
                    >
                      {problem.method && (
                        <div className="mb-4">
                          <span className="text-xs font-bold uppercase tracking-widest text-primary">Method: </span>
                          <span className="text-sm italic">{problem.method}</span>
                        </div>
                      )}
                      <h4 className="text-sm font-bold uppercase tracking-widest text-secondary mb-4">Step-by-Step Solution</h4>
                      <MathText block math={problem.solution} />
                      {problem.finalAnswer && (
                        <div className="mt-6 p-4 bg-primary/5 rounded-xl border border-primary/20">
                          <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Final Answer</h4>
                          <MathText block math={problem.finalAnswer} />
                        </div>
                      )}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
