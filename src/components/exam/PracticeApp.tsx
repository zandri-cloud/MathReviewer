import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MacGlassShell } from './MacGlassShell';
import { examProblemPool, ExamProblem } from '../../data/examData';
import { AnswerValidator } from '../../lib/examEngine';
import { MathText } from '../MathText';
import { ProblemDiagram } from '../ProblemDiagram';
import { MathKeyboard } from './MathKeyboard';
import { cn } from '../../lib/utils';

export function PracticeApp({ onClose }: { onClose: () => void }) {
  const [currentProblem, setCurrentProblem] = useState<ExamProblem | null>(null);
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showSolution, setShowSolution] = useState(false);
  const [hintLevel, setHintLevel] = useState(0); // 0: none, 1: concept, 2: method, 3: partial setup
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard' | 'very_hard' | 'boss'>('medium');
  const [topicFilter, setTopicFilter] = useState<string>('all');

  // Adaptive difficulty tracking
  const [streak, setStreak] = useState(0);

  const getNextProblem = (targetDiff: string, targetTopic: string) => {
    let pool = examProblemPool.filter(p => p.difficulty === targetDiff);
    if (targetTopic !== 'all') {
      pool = pool.filter(p => p.topic === targetTopic);
    }
    if (pool.length === 0) {
      // Fallback if no exact match
      pool = examProblemPool.filter(p => targetTopic === 'all' || p.topic === targetTopic);
      if (pool.length === 0) pool = examProblemPool;
    }
    return pool[Math.floor(Math.random() * pool.length)];
  };

  useEffect(() => {
    setCurrentProblem(getNextProblem(difficulty, topicFilter));
  }, [topicFilter]);

  const handleCheck = () => {
    if (!currentProblem) return;
    const pts = AnswerValidator.checkAnswer(answer, currentProblem.answer);
    const correct = pts > 0;
    setIsCorrect(correct);
    
    if (correct) {
      setStreak(s => s + 1);
      if (streak + 1 >= 3) {
        // Increase difficulty
        const diffs = ['easy', 'medium', 'hard', 'very_hard', 'boss'];
        const idx = diffs.indexOf(difficulty);
        if (idx < diffs.length - 1) {
          setDifficulty(diffs[idx + 1] as any);
          setStreak(0);
        }
      }
    } else {
      setStreak(0);
      // Decrease difficulty if failing
      const diffs = ['easy', 'medium', 'hard', 'very_hard', 'boss'];
      const idx = diffs.indexOf(difficulty);
      if (idx > 0) {
        setDifficulty(diffs[idx - 1] as any);
      }
    }
  };

  const handleNext = () => {
    setCurrentProblem(getNextProblem(difficulty, topicFilter));
    setAnswer('');
    setIsCorrect(null);
    setShowSolution(false);
    setHintLevel(0);
  };

  if (!currentProblem) return null;

  const currentQ = currentProblem;

  const hints = [
    `Concept: This problem involves ${currentQ.topic} functions.`,
    `Method: ${currentQ.method || 'Apply standard derivative rules.'}`,
    `Partial Setup: Start by simplifying the expression or applying the outermost rule.`
  ];

  return (
    <MacGlassShell onClose={onClose}>
      <div className="flex flex-col h-full bg-surface-container-lowest/50 backdrop-blur-3xl rounded-3xl overflow-hidden p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold text-on-surface">Practice Mode</h2>
            <select 
              value={topicFilter} 
              onChange={(e) => setTopicFilter(e.target.value)}
              className="bg-surface-container-low border border-outline-variant/30 text-on-surface text-sm rounded-lg focus:ring-primary focus:border-primary block p-2"
            >
              <option value="all">All Topics</option>
              <option value="trig">Trigonometric</option>
              <option value="inverse_trig">Inverse Trig</option>
              <option value="hyperbolic">Hyperbolic</option>
              <option value="logarithmic">Logarithmic</option>
              <option value="exponential">Exponential</option>
              <option value="parametric">Parametric</option>
              <option value="applications">Applications of Derivatives</option>
            </select>
          </div>
          <div className="flex gap-4 items-center">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest">
              {difficulty.replace('_', ' ')}
            </span>
            <span className="text-sm font-bold text-on-surface-variant">Streak: {streak} 🔥</span>
          </div>
        </div>

        <div className="flex-1 flex flex-col md:flex-row gap-6 overflow-hidden">
          {/* Left Panel: Problem & Input */}
          <div className="flex-1 flex flex-col gap-6 overflow-y-auto pr-2">
            <div className="bg-surface-container-low p-8 rounded-3xl border border-outline-variant/30 shadow-sm">
              <h3 className="text-sm font-bold text-on-surface-variant uppercase tracking-widest mb-4">Problem</h3>
              <div className="overflow-x-auto pb-4">
                <MathText math={currentQ.statement} className="text-2xl" />
                <ProblemDiagram statement={currentQ.statement} />
              </div>
            </div>

            <div className="bg-surface-container-low p-8 rounded-3xl border border-outline-variant/30 shadow-sm flex-1 flex flex-col">
              <h3 className="text-sm font-bold text-on-surface-variant uppercase tracking-widest mb-4">Your Answer</h3>
              <MathKeyboard onInsert={(text) => setAnswer(prev => prev + text)} />
              <textarea 
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Type your answer here (LaTeX supported)..."
                className="w-full flex-1 bg-surface-container-lowest border border-outline-variant/50 rounded-xl p-4 text-on-surface font-mono resize-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
              <div className="flex justify-between items-center mt-4">
                <div className="flex gap-2">
                  <button 
                    onClick={() => setHintLevel(prev => Math.min(prev + 1, 3))}
                    disabled={hintLevel >= 3 || isCorrect === true}
                    className="px-4 py-2 rounded-full bg-secondary/10 text-secondary font-bold text-sm hover:bg-secondary/20 transition-colors disabled:opacity-50"
                  >
                    Get Hint ({3 - hintLevel} left)
                  </button>
                  <button 
                    onClick={() => setShowSolution(true)}
                    className="px-4 py-2 rounded-full bg-tertiary/10 text-tertiary font-bold text-sm hover:bg-tertiary/20 transition-colors"
                  >
                    Show Solution
                  </button>
                </div>
                <div className="flex gap-2">
                  {!isCorrect && (
                    <button 
                      onClick={handleNext}
                      className="px-6 py-2 rounded-full font-bold text-sm transition-colors text-on-surface-variant hover:bg-surface-container-highest"
                    >
                      Skip
                    </button>
                  )}
                  <button 
                    onClick={isCorrect ? handleNext : handleCheck}
                    className={cn(
                      "px-8 py-2 rounded-full font-bold text-sm transition-colors text-white shadow-md",
                      isCorrect ? "bg-green-500 hover:bg-green-600" : "bg-primary hover:bg-primary-container"
                    )}
                  >
                    {isCorrect ? "Next Problem" : "Check Answer"}
                  </button>
                </div>
              </div>

              {isCorrect !== null && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "mt-4 p-4 rounded-xl font-bold flex items-center gap-2",
                    isCorrect ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
                  )}
                >
                  <span className="material-symbols-outlined">
                    {isCorrect ? 'check_circle' : 'error'}
                  </span>
                  {isCorrect ? "Correct! Great job." : "Incorrect. Try again or use a hint."}
                </motion.div>
              )}
            </div>
          </div>

          {/* Right Panel: Hints & Solution */}
          <div className="flex-1 flex flex-col gap-6 overflow-y-auto pl-2">
            <AnimatePresence>
              {hintLevel > 0 && (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-secondary/5 border border-secondary/20 p-6 rounded-3xl"
                >
                  <h3 className="text-sm font-bold text-secondary uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">lightbulb</span> Hints
                  </h3>
                  <ul className="space-y-3">
                    {hints.slice(0, hintLevel).map((hint, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-on-surface bg-surface-container-lowest p-3 rounded-xl border border-outline-variant/10"
                      >
                        {hint}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {showSolution && (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-surface-container-low p-6 rounded-3xl border border-outline-variant/30 shadow-sm flex-1"
                >
                  <h3 className="text-sm font-bold text-on-surface-variant uppercase tracking-widest mb-4">Solution</h3>
                  <div className="bg-green-500/10 border border-green-500/30 p-4 rounded-xl mb-6">
                    <MathText math={currentQ.answer} className="text-xl font-mono text-green-400" />
                  </div>
                  {currentQ.steps && (
                    <div className="space-y-4">
                      <h4 className="font-bold text-on-surface">Step-by-Step</h4>
                      {currentQ.steps.map((step, idx) => (
                        <div key={idx} className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/20">
                          <div className="overflow-x-auto pb-2">
                            <MathText math={step} className="text-lg" />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </MacGlassShell>
  );
}
