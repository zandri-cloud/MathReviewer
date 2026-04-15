import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MathText } from '../components/MathText';

export function Home() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-6xl mx-auto w-full">
      <section className="text-center mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-block px-3 py-1 rounded-full ghost-border bg-surface-container-low/50 text-[11px] font-semibold tracking-wider text-secondary uppercase mb-8">
            Volume IV: Mathematical Foundations
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-on-surface mb-8 leading-[1.05]">
            Calculus Reviewer
          </h1>
          <p className="font-serif italic text-2xl text-secondary max-w-2xl mx-auto mb-12 leading-relaxed">
            stadi na loads! 67
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/topics" className="bg-gradient-to-r from-primary to-primary-container text-white px-10 py-4 rounded-lg font-medium text-sm hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-[0.98]">
              Begin Learning
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 bg-surface-container-lowest ghost-border rounded-3xl p-10 lg:p-14 shadow-sm"
        >
          <div className="flex items-center justify-between mb-12">
            <span className="text-[11px] font-bold tracking-widest text-secondary uppercase">Example Theorem 4.2</span>
            <span className="material-symbols-outlined text-outline">functions</span>
          </div>
          <h3 className="text-2xl font-semibold mb-6">Natural Logarithm Derivative</h3>
          <p className="text-secondary mb-10 leading-relaxed font-serif text-lg">Prove the derivative of the natural logarithm using the definition of a limit:</p>
          
          <div className="py-8 border-y border-surface-container-high text-on-surface flex flex-col items-center gap-6">
            <MathText block math="\frac{d}{dx}(\ln x) = \lim_{h \to 0} \frac{\ln(x+h) - \ln x}{h}" />
            <MathText block math="= \lim_{h \to 0} \frac{1}{h} \ln\left(1 + \frac{h}{x}\right) = \frac{1}{x}" />
          </div>

          <div className="mt-10 flex items-start gap-4">
            <span className="material-symbols-outlined text-primary text-sm mt-1">info</span>
            <p className="text-sm text-secondary italic font-serif">
              The limit evaluates to the identity <MathText math="e" className="inline" />, rendering the result <MathText math="1/x" className="inline" />.
            </p>
          </div>
        </motion.div>

        <div className="lg:col-span-5 grid grid-cols-1 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="bg-surface-container-low/50 ghost-border rounded-3xl p-10 group hover:bg-surface-container-low transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center mb-6">
              <span className="material-symbols-outlined">query_stats</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-on-surface">Differential Calculus</h3>
            <p className="text-secondary text-sm leading-relaxed mb-6 font-serif">Master the calculus of variations, rates of change, and optimization foundations.</p>
            <Link to="/topics" className="inline-flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all">
              Access Pathway <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="bg-surface-container-lowest ghost-border rounded-3xl p-10 shadow-sm"
          >
            <h3 className="text-lg font-bold mb-2">Interconnected Hub</h3>
            <p className="text-secondary text-sm leading-relaxed mb-6 font-serif">Navigate through semantic knowledge graphs and historical roots.</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded bg-surface-container-low text-[10px] font-bold text-secondary ghost-border uppercase tracking-tight">Limits</span>
              <span className="px-3 py-1 rounded bg-surface-container-low text-[10px] font-bold text-secondary ghost-border uppercase tracking-tight">Integrals</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
