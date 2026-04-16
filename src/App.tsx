/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Topics } from './pages/Topics';
import { Background } from './components/Background';
import { FormulaReference } from './pages/FormulaReference';
import { ExamApp } from './components/exam/ExamApp';
import { PracticeApp } from './components/exam/PracticeApp';

export default function App() {
  const [isExamMode, setIsExamMode] = useState(false);
  const [isPracticeMode, setIsPracticeMode] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-transparent text-on-surface font-sans selection:bg-primary/10 selection:text-primary">
        <Background />
        <Navbar 
          onStartExam={() => setIsExamMode(true)} 
          onStartPractice={() => setIsPracticeMode(true)}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topics/*" element={<Topics />} />
          <Route path="/formulas" element={<FormulaReference />} />
        </Routes>
        {isExamMode && <ExamApp onClose={() => setIsExamMode(false)} />}
        {isPracticeMode && <PracticeApp onClose={() => setIsPracticeMode(false)} />}
      </div>
    </Router>
  );
}
