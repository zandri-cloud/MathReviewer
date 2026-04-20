import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { NetworkBackground } from '../components/NetworkBackground';

export function Home() {
  return (
    <>
    <NetworkBackground />
    <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-6 w-full">
      <section className="text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-block px-3 py-1 rounded-full border border-outline-variant/30 bg-surface-container-low/20 backdrop-blur-sm text-[11px] font-medium tracking-[0.2em] text-on-surface-variant uppercase mb-8">
            MATH 67
          </div>
          <h1 className="text-6xl md:text-8xl font-serif tracking-tight text-on-surface mb-6 leading-tight">
            Calculus Reviewer
          </h1>
          <p className="font-serif italic text-xl md:text-2xl text-on-surface-variant max-w-2xl mx-auto mb-12 opacity-80">
            stadi na loads!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/topics" className="bg-on-surface text-surface px-10 py-4 font-bold text-sm hover:scale-[1.02] hover:bg-primary hover:text-white transition-all duration-300">
              OPEN REVIEWER
            </Link>
            <Link to="/practice" className="border border-outline-variant/30 text-on-surface hover:bg-surface-container-high px-10 py-4 font-bold text-sm hover:scale-[1.02] transition-all duration-300">
              TAKE EXAM
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
    </>
  );
}
