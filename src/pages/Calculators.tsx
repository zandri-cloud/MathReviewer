import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MathText } from '../components/MathText';
import { cn } from '../lib/utils';
import { GoogleGenAI } from '@google/genai';
import 'mathlive';

// Lazy initialization of Gemini SDK
let aiClient: GoogleGenAI | null = null;
function getAI() {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('GEMINI_API_KEY is not defined. Please check your environment variables.');
    }
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
}

const MathField = (props: any) => {
  return React.createElement('math-field', props);
};

export function Calculators() {
  const [activeTab, setActiveTab] = useState<'derivative' | 'lhopital'>('derivative');
  
  const [expression, setExpression] = useState('');
  const [variable, setVariable] = useState('x');
  const [limitPoint, setLimitPoint] = useState('0');
  
  const [isSolving, setIsSolving] = useState(false);
  const [solutionSteps, setSolutionSteps] = useState<string>('');
  const [error, setError] = useState<string>('');

  const solveWithGemini = async () => {
    if (!expression) {
      setError('Please enter a mathematical expression.');
      return;
    }
    
    setIsSolving(true);
    setError('');
    setSolutionSteps('');
    
    try {
      const ai = getAI();
      let prompt = '';
      if (activeTab === 'derivative') {
        prompt = `Find the derivative of the following mathematical expression with respect to the variable ${variable}. 
Show ONLY the step-by-step mathematical solution. Use Markdown and LaTeX for math notation (use $$ for block math and $ for inline math). Ensure you simplify the final answer. NO conversational text.

Expression: ${expression}`;
      } else {
        prompt = `Evaluate the following limit using L'Hôpital's rule. If it evaluates to an indeterminate form (0/0 or infinity/infinity), apply the rule step-by-step. 
Show ONLY the step-by-step mathematical solution. Use Markdown and LaTeX for math notation (use $$ for block math and $ for inline math). NO conversational text.

Limit: \\lim_{${variable} \\to ${limitPoint}} \\left( ${expression} \\right)`;
      }

      const response = await ai.models.generateContent({
        model: 'gemini-3.1-pro-preview', // Pro model for complex math reasoning
        contents: prompt,
        config: {
          systemInstruction: "You are a precise calculus solver. Provide ONLY the step-by-step mathematical solution using LaTeX in Markdown. No verbal explanations, no descriptive methodology, no conversational filler.",
        }
      });
      
      setSolutionSteps(response.text || 'No solution generated. Please try again.');
    } catch (err: any) {
      console.error(err);
      setError('An error occurred while computing the solution: ' + (err.message || 'Unknown error'));
    } finally {
      setIsSolving(false);
    }
  };

  const currentPlaceholder = activeTab === 'derivative' ? 'e.g. x^2 * sin(x)' : 'e.g. (sin(x) - x) / x^3';

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto w-full">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tighter mb-4">Calculus Solvers</h1>
          <p className="text-secondary font-serif text-xl mb-8">AI-powered step-by-step solutions for derivatives and limits.</p>
        </div>

        {/* Custom Tabs */}
        <div className="flex bg-surface-container-low p-1 rounded-2xl max-w-sm mx-auto mb-8 shadow-sm">
          <button
            onClick={() => setActiveTab('derivative')}
            className={cn(
              "flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-300",
              activeTab === 'derivative' 
                ? "bg-surface-container-lowest text-primary shadow-sm" 
                : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container/50"
            )}
          >
            Derivative
          </button>
          <button
            onClick={() => setActiveTab('lhopital')}
            className={cn(
              "flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-300",
              activeTab === 'lhopital' 
                ? "bg-surface-container-lowest text-primary shadow-sm" 
                : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container/50"
            )}
          >
            L'Hôpital's Rule
          </button>
        </div>

        {/* Input Card */}
        <div className="bg-surface-container-lowest rounded-3xl p-6 md:p-8 shadow-sm ghost-border mb-8">
          <h2 className="text-xl font-semibold mb-6 text-on-surface">
            {activeTab === 'derivative' ? 'Derivative Calculator' : "L'Hôpital's Limit Solver"}
          </h2>
          
          <div className="grid gap-6 md:grid-cols-[1fr_120px] items-end">
            <div className="space-y-2">
              <label className="text-sm font-medium text-on-surface-variant uppercase tracking-wider">Expression</label>
              <div className="relative flex items-center bg-surface-container rounded-xl border border-transparent focus-within:border-primary/20 focus-within:ring-2 focus-within:ring-primary/20 transition-all overflow-hidden">
                <span className="pl-4 pr-2 py-4 text-primary font-mono select-none flex items-center">
                  {activeTab === 'derivative' ? `d/d${variable}` : `lim`}
                </span>
                <MathField 
                  value={expression}
                  onInput={(e: any) => setExpression(e.target.value)}
                  style={{ width: '100%', padding: '16px 16px 16px 8px', outline: 'none', background: 'transparent', fontSize: '1.125rem' } as any}
                  onKeyDown={(e: any) => {
                    if (e.key === 'Enter') solveWithGemini();
                  }}
                  math-virtual-keyboard-policy="auto"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-[11px] font-medium text-on-surface-variant uppercase tracking-wider">Var</label>
                <input 
                  type="text" 
                  value={variable}
                  onChange={(e) => setVariable(e.target.value)}
                  className="w-full bg-surface-container py-2 px-4 rounded-lg text-center text-on-surface font-mono focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all border border-transparent focus:border-primary/20"
                />
              </div>
              
              {activeTab === 'lhopital' && (
                <div className="space-y-2">
                  <label className="text-[11px] font-medium text-on-surface-variant uppercase tracking-wider">Approaches</label>
                  <div className="bg-surface-container rounded-lg border border-transparent focus-within:border-primary/20 focus-within:ring-2 focus-within:ring-primary/20 transition-all overflow-hidden flex justify-center">
                    <MathField 
                      value={limitPoint}
                      onInput={(e: any) => setLimitPoint(e.target.value)}
                      style={{ width: '100%', padding: '8px 16px', outline: 'none', background: 'transparent', textAlign: 'center' } as any}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {error && (
            <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl text-sm italic">
              {error}
            </div>
          )}

          <div className="mt-8 flex justify-end">
            <button 
              onClick={solveWithGemini}
              disabled={isSolving}
              className="flex items-center gap-2 px-8 py-3 bg-primary text-on-primary rounded-full font-semibold hover:bg-primary/90 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSolving ? (
                <>
                  <span className="material-symbols-outlined animate-spin text-sm">progress_activity</span>
                  Solving...
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-sm">auto_awesome</span>
                  Solve
                </>
              )}
            </button>
          </div>
        </div>

        {/* Steps Result UI */}
        <AnimatePresence>
          {solutionSteps && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="bg-surface-container-low/30 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-sm border border-outline-variant/30 overflow-hidden"
            >
              <h3 className="text-sm font-bold uppercase tracking-widest text-secondary mb-6 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[14px]">school</span>
                </span>
                Step-by-Step Solution
              </h3>
              
              <div className="prose prose-sm sm:prose-base prose-invert prose-p:text-on-surface/80 prose-headings:text-on-surface prose-strong:text-on-surface max-w-none math-markdown">
                <MathText block math={solutionSteps} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>
    </div>
  );
}
