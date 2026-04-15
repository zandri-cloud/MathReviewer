/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Topics } from './pages/Topics';
import { Background } from './components/Background';
import { FormulaReference } from './pages/FormulaReference';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-transparent text-on-surface font-sans selection:bg-primary/10 selection:text-primary">
        <Background />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topics/*" element={<Topics />} />
          <Route path="/formulas" element={<FormulaReference />} />
        </Routes>
      </div>
    </Router>
  );
}
