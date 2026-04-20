import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MacGlassShell } from './MacGlassShell';
import { ExamState } from './ExamStateMachine';
import { TimerService } from './TimerService';
import { QuestionCardGlassUI } from './QuestionCardGlassUI';
import { NavigationDock } from './NavigationDock';
import { ResultGlassScreen } from './ResultGlassScreen';
import { examProblemPool, ExamProblem } from '../../data/examData';
import { hashString, QuestionEngine, AnswerValidator, SoundController } from '../../lib/examEngine';

import { ReviewerInterface } from './ReviewerInterface';

export function ExamApp({ onClose }: { onClose: () => void }) {
  const [examState, setExamState] = useState<ExamState>('loading');
  const [questions, setQuestions] = useState<ExamProblem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour
  const [score, setScore] = useState(0);
  const [seed, setSeed] = useState('');

  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    // Initialize exam
    const initExam = async () => {
      setExamState('generating');
      // Simulate loading/generating
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newSeed = hashString('user123' + Date.now()).toString();
      setSeed(newSeed);
      
      const engine = new QuestionEngine(examProblemPool, newSeed);
      const selected = engine.generateExam();
      setQuestions(selected);
      
      setExamState('active');
    };
    
    initExam();
  }, []);

  const handleAnswerChange = (ans: string) => {
    if (examState !== 'active') return;
    setAnswers(prev => ({ ...prev, [questions[currentIndex].id]: ans }));
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) setCurrentIndex(prev => prev + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
  };

  const handleSubmit = () => {
    setShowConfirm(true);
  };

  const confirmSubmit = () => {
    setShowConfirm(false);
    finishExam();
  };

  const cancelSubmit = () => {
    setShowConfirm(false);
  };

  const finishExam = () => {
    setExamState('submitting');
    SoundController.playSubmit();
    
    setTimeout(() => {
      setExamState('grading');
      let totalScore = 0;
      questions.forEach(q => {
        const studentAns = answers[q.id] || '';
        const pts = AnswerValidator.checkAnswer(studentAns, q.answer);
        totalScore += pts;
      });
      setScore(totalScore);
      
      if (totalScore >= 100) { // arbitrary passing score
        SoundController.playSuccess();
      } else {
        SoundController.playFail();
      }
      
      setExamState('results');
    }, 1500);
  };

  const handleTimeUp = () => {
    SoundController.playTimeout();
    finishExam();
  };

  return (
    <MacGlassShell onClose={onClose}>
      <AnimatePresence mode="wait">
        {examState === 'loading' && (
          <motion.div key="loading" className="flex items-center justify-center h-full text-2xl font-semibold text-on-surface">
            Loading Exam...
          </motion.div>
        )}
        {examState === 'generating' && (
          <motion.div key="generating" className="flex items-center justify-center h-full text-2xl font-semibold text-on-surface">
            Generating Questions...
          </motion.div>
        )}
        {examState === 'active' && questions.length > 0 && (
          <motion.div key="active" className="flex flex-col h-full relative" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <TimerService timeLeft={timeLeft} setTimeLeft={setTimeLeft} onTimeUp={handleTimeUp} />
            <div className="flex-1 flex items-center justify-center p-4 sm:p-8 pb-24 sm:pb-32 overflow-hidden">
              <QuestionCardGlassUI 
                question={questions[currentIndex]} 
                index={currentIndex} 
                total={questions.length} 
                answer={answers[questions[currentIndex].id] || ''}
                onAnswerChange={handleAnswerChange}
              />
            </div>
            <NavigationDock 
              currentIndex={currentIndex} 
              total={questions.length} 
              onNext={handleNext} 
              onPrev={handlePrev} 
              onSubmit={handleSubmit} 
            />
            
            {showConfirm && (
              <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-3xl">
                <div className="bg-surface-container-low p-8 rounded-3xl border border-outline-variant/30 shadow-2xl max-w-sm w-full text-center">
                  <h3 className="text-2xl font-bold text-on-surface mb-4">Submit Exam?</h3>
                  <p className="text-on-surface-variant mb-8">Are you sure you want to submit your exam? This action cannot be undone.</p>
                  <div className="flex gap-4 justify-center">
                    <button 
                      onClick={cancelSubmit}
                      className="px-6 py-2 rounded-full bg-surface-container-highest text-on-surface hover:bg-surface-container-highest/80 transition-colors"
                    >
                      Cancel
                    </button>
                    <button 
                      onClick={confirmSubmit}
                      className="px-6 py-2 rounded-full bg-primary text-white hover:bg-primary-container transition-colors"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}
        {(examState === 'submitting' || examState === 'grading') && (
          <motion.div key="processing" className="flex items-center justify-center h-full text-2xl font-semibold text-on-surface">
            {examState === 'submitting' ? 'Submitting Exam...' : 'Grading...'}
          </motion.div>
        )}
        {examState === 'results' && (
          <ResultGlassScreen 
            score={score} 
            total={questions.length * 20} 
            onClose={onClose} 
            onReview={() => setExamState('review')}
          />
        )}
        {examState === 'review' && (
          <motion.div key="review" className="h-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ReviewerInterface 
              questions={questions} 
              answers={answers} 
              onClose={onClose} 
              onRemedialQuiz={(topics) => {
                // Future enhancement: start remedial quiz
                console.log("Remedial topics:", topics);
                alert("Remedial Quiz starting for: " + topics.join(", "));
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </MacGlassShell>
  );
}
