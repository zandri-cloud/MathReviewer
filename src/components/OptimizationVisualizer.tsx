import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'motion/react';

interface Problem {
  id: string;
  category?: string;
  statement?: string;
}

export function OptimizationVisualizer({ problem }: { problem: Problem }) {
  const category = problem.category || "General";
  const catLower = category.toLowerCase();
  const statementLower = problem.statement?.toLowerCase() || '';

  // Pick visualizer based on category
  if (statementLower.includes('shadow')) {
    return <ShadowVisualizer />;
  } else if (catLower.includes('geometric') || catLower.includes('optimization')) {
    return <GeometricVisualizer />;
  } else if (catLower.includes('number')) {
    return <ParabolaVisualizer />;
  } else if (catLower.includes('shortest')) {
    return <DistanceVisualizer />;
  } else if (catLower.includes('cost') || catLower.includes('economic')) {
    return <CostVisualizer />;
  } else if (catLower.includes('rate') || catLower.includes('time')) {
    return <RelatedRatesVisualizer />;
  } else if (catLower.includes('discontinuous') || catLower.includes('derivative')) {
    return <DiscontinuousVisualizer />;
  } else if (catLower.includes('trigonometric')) {
    return <TrigonometricVisualizer />;
  }

  return null;
}

function GeometricVisualizer() {
  // Animates a rectangle shrinking its width and growing its height until it forms a square (representing optimization)
  return (
    <div className="w-full max-w-sm mx-auto flex flex-col items-center justify-center py-6 bg-surface-variant/20 rounded-xl my-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-6">Optimization Visualization</p>
      <div className="relative w-48 h-48 border-b-2 border-l-2 border-outline flex items-end">
        <motion.div
           className="bg-primary/40 border border-primary absolute bottom-0 left-0"
           initial={{ width: 160, height: 40 }}
           animate={{
             width: [160, 120, 80, 80, 160],
             height: [40, 60, 80, 80, 40]
           }}
           transition={{
             duration: 4,
             ease: "easeInOut",
             repeat: Infinity,
             repeatType: "loop"
           }}
        />
        <motion.div 
           className="absolute bottom-0 left-0 w-full h-full pointer-events-none"
           initial={{ opacity: 0 }}
           animate={{ opacity: [0, 0, 1, 1, 0] }}
           transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}
        >
          <div className="absolute left-[35%] top-[40%] text-primary font-bold text-sm">Optimal Note</div>
        </motion.div>
      </div>
      <p className="text-xs text-on-surface-variant mt-4 px-4 text-center">Finding the perfect balance of dimensions to minimize perimeter or maximize area.</p>
    </div>
  );
}

function ParabolaVisualizer() {
  return (
    <div className="w-full max-w-sm mx-auto flex flex-col items-center justify-center py-6 bg-surface-variant/20 rounded-xl my-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-6">Maximum/Minimum Search</p>
      <div className="relative w-48 h-32 border-b-2 border-l-2 border-outline-variant flex items-end">
        {/* Parabola path */}
        <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M 10,90 Q 50,10 90,90" fill="transparent" stroke="currentColor" strokeWidth="2" className="text-outline" />
        </svg>
        <motion.div
          className="absolute w-3 h-3 bg-secondary rounded-full"
          style={{ marginLeft: '-6px', marginBottom: '-6px' }}
          animate={{
            left: ['10%', '50%', '90%'],
            bottom: ['10%', '90%', '10%']
          }}
          transition={{
            duration: 3,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute left-[50%] top-[5%] w-16 h-4 bg-primary/20 border border-primary/50"
          style={{ marginLeft: '-32px' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>
      <p className="text-xs text-on-surface-variant mt-4 px-4 text-center">Tracking the derivative to hit exactly zero at the peak.</p>
    </div>
  );
}

function DistanceVisualizer() {
  return (
    <div className="w-full max-w-sm mx-auto flex flex-col items-center justify-center py-6 bg-surface-variant/20 rounded-xl my-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-6">Shortest Path Reflection</p>
      <div className="relative w-48 h-32 flex items-center justify-center">
        <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
           <line x1="10" y1="20" x2="90" y2="20" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="text-outline" />
           <line x1="10" y1="20" x2="50" y2="70" stroke="currentColor" strokeWidth="2" className="text-primary/40" />
           <line x1="50" y1="70" x2="90" y2="20" stroke="currentColor" strokeWidth="2" className="text-primary/40" />
           
           <motion.path 
             d="M 10 20 L 50 70 L 90 20" 
             fill="transparent" 
             stroke="currentColor" 
             strokeWidth="3" 
             className="text-secondary" 
             initial={{ pathLength: 0 }}
             animate={{ pathLength: 1 }}
             transition={{ duration: 2, repeat: Infinity }}
           />
           {/* 'Shoreline' */}
           <line x1="0" y1="70" x2="100" y2="70" stroke="currentColor" strokeWidth="3" className="text-on-surface" />
        </svg>
      </div>
      <p className="text-xs text-on-surface-variant mt-4 px-4 text-center">Finding the optimal point along a bound to minimize total distance (often forms equal angles).</p>
    </div>
  );
}

function CostVisualizer() {
  return (
    <div className="w-full max-w-sm mx-auto flex flex-col items-center justify-center py-6 bg-surface-variant/20 rounded-xl my-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-6">Cost Minimization</p>
      <div className="relative w-48 h-32 border-b-2 border-l-2 border-outline-variant flex flex-row items-end pb-2 gap-4 justify-center">
         <motion.div
           className="bg-red-400/80 w-8"
           animate={{ height: [80, 40, 80] }}
           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
         />
         <motion.div
           className="bg-blue-400/80 w-8"
           animate={{ height: [30, 70, 30] }}
           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
         />
         <motion.div
           className="bg-secondary/80 w-12 flex flex-col justify-end items-center text-white text-xs font-bold"
           animate={{ height: [110, 80, 110] }}
           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
         >
           $
         </motion.div>
      </div>
      <p className="text-xs text-on-surface-variant mt-4 px-4 text-center">Trading off widths and heights with different material costs to find the absolute lowest Total Cost.</p>
    </div>
  );
}

function RelatedRatesVisualizer() {
  return (
    <div className="w-full max-w-sm mx-auto flex flex-col items-center justify-center py-6 bg-surface-variant/20 rounded-xl my-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-6">Related Rates</p>
      <div className="relative w-48 h-32 border-b-2 border-l-2 border-outline-variant flex items-end">
         {/* Sliding Ladder */}
         <motion.div
           className="origin-bottom-left absolute"
           style={{ width: "4px", backgroundColor: "currentColor", left: 0, bottom: 0 }}
           animate={{
             height: [100, 60, 100],
             rotate: [-30, -60, -30]
           }}
           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
         />
         <motion.div 
           className="w-full h-full absolute flex flex-col items-center justify-center pointer-events-none opacity-30"
         >
           <div className="border border-dashed border-primary rounded-full w-24 h-24 mb-4" style={{ animation: "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite" }} />
         </motion.div>
      </div>
      <p className="text-xs text-on-surface-variant mt-4 px-4 text-center">Visualizing how variables change with respect to time concurrently.</p>
    </div>
  );
}

function DiscontinuousVisualizer() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-6 bg-surface-variant/20 rounded-xl my-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-6">Discontinuous Derivatives</p>
      <div className="relative w-48 h-32 border-b-2 border-l-2 border-outline-variant flex items-end">
         {/* V-shape absolute value path */}
         <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
           <path d="M 10,10 L 50,90 L 90,10" fill="transparent" stroke="currentColor" strokeWidth="2" strokeLinejoin="miter" className="text-outline" />
         </svg>
         {/* Highlight the sharp point */}
         <motion.div
           className="absolute left-[50%] bottom-[10%] w-6 h-6 border-2 border-primary rounded-full"
           style={{ marginLeft: "-12px", marginBottom: "-12px" }}
           animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
           transition={{ duration: 2, repeat: Infinity }}
         />
         {/* Sliding dot tracking the function */}
         <motion.div
           className="absolute w-3 h-3 bg-secondary rounded-full"
           style={{ marginLeft: '-6px', marginBottom: '-6px' }}
           animate={{
             left: ['10%', '50%', '90%'],
             bottom: ['90%', '10%', '90%']
           }}
           transition={{
             duration: 3,
             ease: "linear",
             repeat: Infinity,
             repeatType: "reverse"
           }}
         />
      </div>
      <p className="text-xs text-on-surface-variant mt-4 max-w-xs text-center">Functions can have a minimum or maximum at a sharp cusp (V-shape) where the derivative is discontinuous or undefined.</p>
    </div>
  );
}

function TrigonometricVisualizer() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-6 bg-surface-variant/20 rounded-xl my-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-6">Trigonometric Optimization</p>
      <div className="relative w-48 h-32 flex items-end justify-center">
         {/* Represent a circle with an inscribed shape */}
         <div className="absolute w-32 h-32 rounded-full border-2 border-outline-variant flex items-center justify-center">
            <motion.div
              className="border-2 border-primary bg-primary/20"
              animate={{
                width: ['40px', '90px', '40px'],
                height: ['120px', '90px', '120px']
              }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity
              }}
            />
         </div>
      </div>
      <p className="text-xs text-on-surface-variant mt-4 max-w-xs text-center">Using angles to define geometric shapes that maximize area, volume, or other traits.</p>
    </div>
  );
}

function ShadowVisualizer() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-6 bg-surface-variant/20 rounded-xl my-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-6">Related Rates: Moving Shadow</p>
      <div className="relative w-64 h-32 border-b-2 border-outline-variant flex items-end">
         
         {/* Lamppost */}
         <div className="absolute left-[18px] bottom-0 w-1 h-[100px] bg-on-surface-variant/80 rounded-t-sm" />
         {/* Light bulb */}
         <div className="absolute left-[12px] bottom-[92px] w-4 h-4 bg-yellow-400 rounded-full shadow-[0_0_12px_rgba(250,204,21,0.8)]" />
         
         {/* Light ray */}
         <svg className="absolute w-full h-full pointer-events-none" style={{ left: 0, top: 0 }}>
            <motion.line
              x1="20" y1="28"
              y2="128"
              stroke="rgba(250,204,21,0.4)" strokeWidth="2" strokeDasharray="4 4"
              animate={{
                x2: [100, 220, 100]
              }}
              transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
            />
         </svg>

         {/* Person */}
         <motion.div
           className="absolute bottom-0 w-2 h-[50px] bg-primary rounded-t-sm"
           animate={{
             left: [56, 116, 56]
           }}
           transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
         />

         {/* Shadow on the ground */}
         <motion.div
           className="absolute bottom-0 h-1 bg-on-surface/40 rounded-r-full origin-left"
           animate={{
             left: [60, 120, 60],
             width: [40, 100, 40]
           }}
           transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
         />

      </div>
      <p className="text-xs text-on-surface-variant mt-4 max-w-xs text-center">As the person walks away, both the shadow's length and the shadow tip's position grow at specific rates.</p>
    </div>
  );
}
