import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExamProblem } from '../../data/examData';
import { MathText } from '../MathText';
import { cn } from '../../lib/utils';
import { AnswerValidator } from '../../lib/examEngine';

export function ReviewerInterface({ 
  questions, 
  answers, 
  onClose,
  onRemedialQuiz
}: { 
  questions: ExamProblem[], 
  answers: Record<string, string>, 
  onClose: () => void,
  onRemedialQuiz: (weakTopics: string[]) => void
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSteps, setShowSteps] = useState(false);
  const [replayStep, setReplayStep] = useState(-1);

  const currentQ = questions[currentIndex];
  const studentAns = answers[currentQ.id] || '';
  const isCorrect = AnswerValidator.checkAnswer(studentAns, currentQ.answer) > 0;

  // Mock analytics
  const errorTypes = ['Chain Rule Error', 'Sign Error', 'Algebraic Simplification Error', 'Trigonometric Identity Error', 'Logarithmic Misuse'];
  const mockError = !isCorrect ? errorTypes[Math.floor(Math.random() * errorTypes.length)] : null;
  const mockDivergence = !isCorrect ? Math.max(1, Math.floor(Math.random() * (currentQ.steps?.length || 3))) : null;

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setShowSteps(false);
      setReplayStep(-1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setShowSteps(false);
      setReplayStep(-1);
    }
  };

  const startReplay = () => {
    setShowSteps(true);
    setReplayStep(0);
    const interval = setInterval(() => {
      setReplayStep(prev => {
        if (currentQ.steps && prev >= currentQ.steps.length - 1) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 1500);
  };

  // Calculate weak topics
  const topicScores: Record<string, { total: number, correct: number }> = {};
  questions.forEach(q => {
    if (!topicScores[q.topic]) topicScores[q.topic] = { total: 0, correct: 0 };
    topicScores[q.topic].total++;
    if (AnswerValidator.checkAnswer(answers[q.id] || '', q.answer) > 0) {
      topicScores[q.topic].correct++;
    }
  });
  const weakTopics = Object.keys(topicScores).filter(t => topicScores[t].correct / topicScores[t].total < 0.5);

  return (
    <div className="flex flex-col h-full bg-surface-container-lowest/50 backdrop-blur-3xl rounded-3xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-outline-variant/30 bg-surface-container-low/50">
        <h2 className="text-xl font-bold font-sans text-on-surface">Review Mode</h2>
        <div className="flex gap-4">
          {weakTopics.length > 0 && (
            <button 
              onClick={() => onRemedialQuiz(weakTopics)}
              className="px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm hover:bg-primary/20 transition-colors"
            >
              Start Remedial Quiz
            </button>
          )}
          <button onClick={onClose} className="px-4 py-1.5 rounded-full bg-surface-container-highest text-on-surface font-bold text-sm hover:bg-surface-container-highest/80 transition-colors">
            Exit Review
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Left Panel: Student Answer */}
        <div className="flex-1 p-6 border-r border-outline-variant/30 overflow-y-auto flex flex-col">
          <h3 className="text-lg font-bold text-on-surface-variant mb-4">Your Answer</h3>
          <div className="bg-surface-container-low p-6 rounded-2xl mb-6">
            <MathText math={currentQ.statement} className="text-xl mb-4" />
          </div>
          <div className={cn(
            "p-6 rounded-2xl border-2 flex-1 flex flex-col justify-center items-center text-center",
            isCorrect ? "bg-green-500/10 border-green-500/30" : "bg-red-500/10 border-red-500/30"
          )}>
            <span className="text-sm font-bold uppercase tracking-widest mb-2 text-on-surface-variant">Submitted Answer</span>
            <MathText math={studentAns || "No answer provided"} className="text-2xl font-mono" />
            
            {!isCorrect && (
              <div className="mt-8 p-4 bg-surface-container-highest rounded-xl w-full text-left">
                <h4 className="font-bold text-red-400 mb-2">AI Error Analysis</h4>
                <p className="text-sm text-on-surface-variant mb-1"><span className="font-bold text-on-surface">Classification:</span> {mockError}</p>
                <p className="text-sm text-on-surface-variant"><span className="font-bold text-on-surface">Divergence Detected:</span> Likely failed at Step {mockDivergence}</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Panel: Correct Solution */}
        <div className="flex-1 p-6 overflow-y-auto flex flex-col bg-surface-container-lowest">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-on-surface-variant">Correct Solution</h3>
            <div className="flex gap-2">
              <button 
                onClick={() => { setShowSteps(true); setReplayStep(currentQ.steps?.length || 0); }}
                className="px-3 py-1 text-xs rounded-full bg-secondary/10 text-secondary font-bold hover:bg-secondary/20"
              >
                Show Steps
              </button>
              <button 
                onClick={startReplay}
                className="px-3 py-1 text-xs rounded-full bg-tertiary/10 text-tertiary font-bold hover:bg-tertiary/20 flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-[14px]">play_arrow</span> Replay
              </button>
            </div>
          </div>

          <div className="bg-green-500/10 border border-green-500/30 p-6 rounded-2xl mb-6 flex items-center justify-center min-h-[120px]">
            <MathText math={currentQ.answer} className="text-2xl font-mono text-green-400" />
          </div>

          <AnimatePresence>
            {showSteps && currentQ.steps && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex-1"
              >
                <h4 className="font-bold text-on-surface mb-4">Step-by-Step Derivation</h4>
                <div className="space-y-4">
                  {currentQ.steps.map((step, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: replayStep >= idx ? 1 : 0.3, x: 0 }}
                      className={cn(
                        "p-4 rounded-xl border transition-all duration-500",
                        replayStep === idx ? "bg-primary/10 border-primary/30 shadow-md scale-[1.02]" : "bg-surface-container-low border-outline-variant/20",
                        mockDivergence === idx + 1 && !isCorrect ? "border-red-500/50 bg-red-500/5" : ""
                      )}
                    >
                      <div className="flex gap-4 items-start">
                        <div className="w-6 h-6 rounded-full bg-surface-container-highest flex items-center justify-center text-xs font-bold shrink-0 mt-1">
                          {idx + 1}
                        </div>
                        <div className="overflow-x-auto pb-2">
                          <MathText math={step} className="text-lg" />
                        </div>
                      </div>
                      {mockDivergence === idx + 1 && !isCorrect && (
                        <p className="text-xs text-red-400 mt-2 ml-10 font-medium">⚠️ Potential divergence point</p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="p-4 border-t border-outline-variant/30 bg-surface-container-low/50 flex justify-between items-center">
        <button 
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="px-6 py-2 rounded-full bg-surface-container-highest text-on-surface font-bold disabled:opacity-50 transition-colors"
        >
          Previous
        </button>
        <div className="text-sm font-bold text-on-surface-variant tracking-widest">
          QUESTION {currentIndex + 1} OF {questions.length}
        </div>
        <button 
          onClick={handleNext}
          disabled={currentIndex === questions.length - 1}
          className="px-6 py-2 rounded-full bg-surface-container-highest text-on-surface font-bold disabled:opacity-50 transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
}
