import React from 'react';
import { cn } from '../lib/utils';

interface Props {
  statement: string;
  className?: string;
}

export function ProblemDiagram({ statement, className }: Props) {
  const s = statement.toLowerCase();

  // Keyword Matching Heuristics to determine Problem Archetype
  const isOptimization = s.includes('maximize') || s.includes('minimize') || s.includes('largest') || s.includes('smallest') || s.includes('least') || s.includes('greatest') || s.includes('maximum') || s.includes('minimum');
  
  const isLadder = s.includes('ladder');
  const isCorridor = s.includes('corridor') || s.includes('pipe') || s.includes('corner');
  const isShadow = s.includes('shadow') && (s.includes('lamp') || s.includes('light') || s.includes('person') || s.includes('pole') || s.includes('building'));
  const isCone = (s.includes('conical') || s.includes('cone')) && (s.includes('tank') || s.includes('water') || s.includes('flow'));
  const isTrough = s.includes('trough');
  const isCylinder = s.includes('cylinder') || s.includes('cylindrical') || (isOptimization && s.includes('can'));
  const isShip = s.includes('ship') || s.includes('boat') || s.includes('car') || s.includes('train') || s.includes('airplane') || s.includes('bicycle') || s.includes('bike');
  const isSphere = s.includes('sphere') || s.includes('spherical') || s.includes('balloon');
  const isKite = s.includes('kite');
  const isBox = isOptimization && (s.includes('box') || s.includes('cardboard'));
  const isFence = isOptimization && (s.includes('fence') || s.includes('fencing') || s.includes('field') || s.includes('enclose'));
  const isFalling = s.includes('dropped') || s.includes('thrown') || s.includes('falls') || s.includes('height equation');
  const isRotation = s.includes('rotates') || s.includes('rotate') || s.includes('wheel') || s.includes('rad/s') || s.includes('angular') || s.includes('pulley') || s.includes('spin');
  const isInscribedCirc = (s.includes('inscribe') || s.includes('rectangle') || s.includes('square')) && (s.includes('circle') || s.includes('semicircle'));
  const isCurve = isOptimization && (s.includes('parabola') || s.includes('curve') || s.includes('closest'));

  let Diagram = null;
  if (isBox) Diagram = BoxSVG;
  else if (isFence) Diagram = FenceSVG;
  else if (isFalling) Diagram = FallingSVG;
  else if (isRotation) Diagram = RotationSVG;
  else if (isInscribedCirc) Diagram = CircleInscribedSVG;
  else if (isCurve) Diagram = CurveSVG;
  else if (isCorridor) Diagram = CorridorSVG;
  else if (isShadow) Diagram = ShadowSVG;
  else if (isCone) Diagram = ConeSVG;
  else if (isTrough) Diagram = TroughSVG;
  else if (isCylinder) Diagram = CylinderSVG;
  else if (isLadder) Diagram = LadderSVG;
  else if (isSphere) Diagram = SphereSVG;
  else if (isKite) Diagram = KiteSVG;
  else if (isShip) Diagram = IntersectionSVG;

  // If no archetype matches, render nothing
  if (!Diagram) return null;

  return (
    <div className={cn("w-full max-w-[280px] sm:max-w-sm mx-auto my-6 p-6 bg-surface-container-low rounded-2xl border border-outline-variant/30 flex justify-center items-center shadow-sm", className)}>
      <Diagram />
    </div>
  );
}

const CorridorSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto max-h-48 text-on-surface">
    {/* Outer walls */}
    <path d="M 20 20 L 20 180 L 180 180" fill="none" stroke="currentColor" strokeWidth="4" />
    {/* Inner walls */}
    <path d="M 80 20 L 80 120 L 180 120" fill="none" stroke="currentColor" strokeWidth="4" />
    {/* Pipe touching inner corner (80, 120) */}
    <line x1="20" y1="60" x2="140" y2="180" stroke="#3b82f6" strokeWidth="6" strokeLinecap="round" />
    
    {/* Corridor widths */}
    <line x1="20" y1="30" x2="80" y2="30" stroke="currentColor" strokeWidth="1" strokeDasharray="3" />
    <line x1="160" y1="120" x2="160" y2="180" stroke="currentColor" strokeWidth="1" strokeDasharray="3" />
    
    <text x="45" y="25" fill="currentColor" fontFamily="serif" fontSize="14" italic>w₁</text>
    <text x="165" y="155" fill="currentColor" fontFamily="serif" fontSize="14" italic>w₂</text>
    
    {/* Angle */}
    <path d="M 20 160 Q 40 160 40 180" fill="none" stroke="currentColor" strokeWidth="1" />
    <text x="25" y="175" fill="currentColor" fontSize="12" fontFamily="serif" italic>θ</text>
  </svg>
);

const ShadowSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto max-h-48 text-on-surface">
    <line x1="10" y1="180" x2="190" y2="180" stroke="currentColor" strokeWidth="4" /> {/* Ground */}
    <line x1="40" y1="40" x2="40" y2="180" stroke="#f59e0b" strokeWidth="6" strokeLinecap="round" /> {/* Lamp */}
    <circle cx="40" cy="40" r="6" fill="#f59e0b" /> {/* Light */}
    <line x1="110" y1="110" x2="110" y2="180" stroke="currentColor" strokeWidth="6" strokeLinecap="round" /> {/* Person */}
    <line x1="40" y1="40" x2="180" y2="180" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4" /> {/* Ray */}
    
    <text x="20" y="115" fill="currentColor" fontFamily="serif" fontSize="16" italic>H</text>
    <text x="115" y="150" fill="currentColor" fontFamily="serif" fontSize="16" italic>h</text>
    {/* Distance brackets/text */}
    <text x="70" y="195" fill="currentColor" fontFamily="serif" fontSize="14" italic>x</text>
    <text x="140" y="195" fill="currentColor" fontFamily="serif" fontSize="14" italic>s</text>
  </svg>
);

const ConeSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto max-h-48 text-on-surface">
    {/* Outline */}
    <path d="M 100 180 L 20 40 L 180 40 Z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
    <ellipse cx="100" cy="40" rx="80" ry="15" fill="none" stroke="currentColor" strokeWidth="4" />
    
    {/* Water */}
    <path d="M 100 180 L 60 110 L 140 110 Z" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="2" />
    <ellipse cx="100" cy="110" rx="40" ry="8" fill="#3b82f6" fillOpacity="0.5" stroke="#3b82f6" strokeWidth="2" />
    
    {/* Axis / heights */}
    <line x1="100" y1="40" x2="100" y2="180" stroke="currentColor" strokeDasharray="4" strokeWidth="1" />
    <text x="105" y="80" fill="currentColor" fontFamily="serif" fontSize="14" italic>H</text>
    <text x="85" y="150" fill="currentColor" fontFamily="serif" fontSize="14" italic>h</text>
    
    {/* Radii */}
    <line x1="100" y1="40" x2="180" y2="40" stroke="currentColor" strokeDasharray="2" strokeWidth="1" />
    <text x="135" y="35" fill="currentColor" fontFamily="serif" fontSize="14" italic>R</text>
    <line x1="100" y1="110" x2="140" y2="110" stroke="currentColor" strokeDasharray="2" strokeWidth="1" />
    <text x="115" y="105" fill="currentColor" fontFamily="serif" fontSize="14" italic>r</text>
  </svg>
);

const LadderSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto max-h-48 text-on-surface">
    <line x1="40" y1="20" x2="40" y2="160" stroke="currentColor" strokeWidth="4" /> {/* Wall */}
    <line x1="20" y1="160" x2="180" y2="160" stroke="currentColor" strokeWidth="4" /> {/* Floor */}
    <line x1="40" y1="60" x2="120" y2="160" stroke="#10b981" strokeWidth="8" strokeLinecap="round" /> {/* Ladder */}
    
    <text x="65" y="105" fill="#10b981" fontFamily="serif" fontSize="18" italic>L</text>
    <text x="25" y="120" fill="currentColor" fontFamily="serif" fontSize="16" italic>y</text>
    <text x="80" y="180" fill="currentColor" fontFamily="serif" fontSize="16" italic>x</text>
    
    {/* Velocity arrows */}
    <path d="M 130 165 L 150 165 L 145 160 M 150 165 L 145 170" fill="none" stroke="currentColor" strokeWidth="2" />
    <text x="135" y="185" fill="currentColor" fontSize="12" fontFamily="serif" italic>dx/dt</text>
    
    <path d="M 30 70 L 30 90 L 25 85 M 30 90 L 35 85" fill="none" stroke="currentColor" strokeWidth="2" />
    <text x="5" y="85" fill="currentColor" fontSize="12" fontFamily="serif" italic>dy/dt</text>
  </svg>
);

const IntersectionSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto max-h-48 text-on-surface">
    <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" strokeDasharray="4" strokeWidth="2" opacity="0.5" />
    <line x1="20" y1="100" x2="180" y2="100" stroke="currentColor" strokeDasharray="4" strokeWidth="2" opacity="0.5" />
    <line x1="100" y1="100" x2="100" y2="50" stroke="currentColor" strokeWidth="3" />
    <line x1="100" y1="100" x2="160" y2="100" stroke="currentColor" strokeWidth="3" />
    <circle cx="100" cy="50" r="8" fill="#ef4444" />
    <circle cx="160" cy="100" r="8" fill="#3b82f6" />
    <line x1="100" y1="50" x2="160" y2="100" stroke="currentColor" strokeWidth="2" />
    <text x="135" y="70" fill="currentColor" fontFamily="serif" fontSize="16" italic>s</text>
    <text x="85" y="75" fill="currentColor" fontFamily="serif" fontSize="16" italic>y</text>
    <text x="125" y="118" fill="currentColor" fontFamily="serif" fontSize="16" italic>x</text>
  </svg>
);

const TroughSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto max-h-48 text-on-surface">
    <path d="M 40 60 L 140 60 L 160 140 L 60 140 Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
    <path d="M 40 60 L 60 140" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4" />
    <line x1="30" y1="80" x2="130" y2="80" stroke="#3b82f6" strokeWidth="3" />
    <polygon points="30,80 130,80 150,140 50,140" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="1" />
    <text x="90" y="55" fill="currentColor" fontFamily="serif" fontSize="14" italic>L</text>
    <text x="150" y="100" fill="currentColor" fontFamily="serif" fontSize="14" italic>h</text>
  </svg>
);

const CylinderSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto max-h-48 text-on-surface">
    <ellipse cx="100" cy="40" rx="60" ry="15" fill="none" stroke="currentColor" strokeWidth="3" />
    <path d="M 40 40 L 40 160 A 60 15 0 0 0 160 160 L 160 40" fill="none" stroke="currentColor" strokeWidth="3" />
    <ellipse cx="100" cy="160" rx="60" ry="15" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
    <line x1="100" y1="40" x2="160" y2="40" stroke="currentColor" strokeWidth="2" strokeDasharray="3" />
    <text x="125" y="35" fill="currentColor" fontFamily="serif" fontSize="14" italic>r</text>
    <line x1="180" y1="40" x2="180" y2="160" stroke="currentColor" strokeWidth="1" />
    <text x="185" y="105" fill="currentColor" fontFamily="serif" fontSize="14" italic>h</text>
  </svg>
);

const BoxSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto max-h-48 text-on-surface">
    <rect x="40" y="60" width="120" height="80" fill="none" stroke="currentColor" strokeWidth="3" />
    <rect x="40" y="60" width="20" height="20" fill="currentColor" opacity="0.2" />
    <rect x="140" y="60" width="20" height="20" fill="currentColor" opacity="0.2" />
    <rect x="40" y="120" width="20" height="20" fill="currentColor" opacity="0.2" />
    <rect x="140" y="120" width="20" height="20" fill="currentColor" opacity="0.2" />
    <line x1="60" y1="60" x2="60" y2="140" stroke="currentColor" strokeDasharray="4" />
    <line x1="140" y1="60" x2="140" y2="140" stroke="currentColor" strokeDasharray="4" />
    <line x1="40" y1="80" x2="160" y2="80" stroke="currentColor" strokeDasharray="4" />
    <line x1="40" y1="120" x2="160" y2="120" stroke="currentColor" strokeDasharray="4" />
    <text x="45" y="75" fill="currentColor" fontFamily="serif" fontSize="12" italic>x</text>
    <text x="100" y="55" fill="currentColor" fontFamily="serif" fontSize="14" italic>L</text>
    <text x="25" y="105" fill="currentColor" fontFamily="serif" fontSize="14" italic>W</text>
  </svg>
);

const FenceSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto max-h-48 text-on-surface">
    <rect x="40" y="50" width="120" height="100" fill="none" stroke="currentColor" strokeWidth="4" />
    <line x1="80" y1="50" x2="80" y2="150" stroke="currentColor" strokeWidth="2" strokeDasharray="4" />
    <line x1="120" y1="50" x2="120" y2="150" stroke="currentColor" strokeWidth="2" strokeDasharray="4" />
    <text x="100" y="40" fill="currentColor" fontFamily="serif" fontSize="14" italic>y</text>
    <text x="25" y="100" fill="currentColor" fontFamily="serif" fontSize="14" italic>x</text>
  </svg>
);

const KiteSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto max-h-48 text-on-surface">
    <line x1="20" y1="160" x2="180" y2="160" stroke="currentColor" strokeWidth="4" />
    <line x1="40" y1="160" x2="140" y2="60" stroke="#f59e0b" strokeWidth="2" />
    <polygon points="140,40 150,60 140,80 130,60" fill="#f59e0b" />
    <line x1="140" y1="60" x2="140" y2="160" stroke="currentColor" strokeDasharray="4" />
    <text x="80" y="100" fill="currentColor" fontFamily="serif" fontSize="14" italic>s</text>
    <text x="145" y="110" fill="currentColor" fontFamily="serif" fontSize="14" italic>h</text>
    <text x="90" y="175" fill="currentColor" fontFamily="serif" fontSize="14" italic>x</text>
  </svg>
);

const CircleInscribedSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto max-h-48 text-on-surface">
    <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="3" />
    <rect x="44" y="44" width="112" height="112" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="2" />
    <line x1="100" y1="100" x2="160" y2="40" stroke="currentColor" strokeDasharray="4" />
    <circle cx="100" cy="100" r="3" fill="currentColor" />
    <text x="110" y="80" fill="currentColor" fontFamily="serif" fontSize="14" italic>r</text>
    <text x="100" y="35" fill="currentColor" fontFamily="serif" fontSize="14" italic>y</text>
    <text x="170" y="105" fill="currentColor" fontFamily="serif" fontSize="14" italic>x</text>
  </svg>
);

const CurveSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto max-h-48 text-on-surface">
    <path d="M 20 180 Q 100 20 180 180" fill="none" stroke="currentColor" strokeWidth="3" />
    <line x1="10" y1="180" x2="190" y2="180" stroke="currentColor" strokeWidth="2" />
    <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" strokeDasharray="3" />
    <rect x="50" y="90" width="100" height="90" fill="#10b981" fillOpacity="0.2" stroke="#10b981" strokeWidth="2" />
    <circle cx="150" cy="90" r="4" fill="currentColor" />
    <text x="160" y="85" fill="currentColor" fontFamily="serif" fontSize="12" italic>(x, y)</text>
    <text x="100" y="15" fill="currentColor" fontFamily="serif" fontSize="14" italic>y = f(x)</text>
  </svg>
);

const RotationSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto max-h-48 text-on-surface">
    <circle cx="80" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="4" />
    <circle cx="80" cy="100" r="6" fill="currentColor" />
    <line x1="80" y1="100" x2="115" y2="65" stroke="currentColor" strokeWidth="3" />
    <line x1="115" y1="65" x2="180" y2="100" stroke="#f59e0b" strokeWidth="4" />
    <line x1="20" y1="100" x2="190" y2="100" stroke="currentColor" strokeDasharray="4" opacity="0.5" />
    <path d="M 105 100 A 25 25 0 0 0 95 85" fill="none" stroke="currentColor" strokeWidth="2" />
    <text x="110" y="95" fill="currentColor" fontFamily="serif" fontSize="14" italic>θ</text>
    <text x="90" y="75" fill="currentColor" fontFamily="serif" fontSize="14" italic>r</text>
    <text x="145" y="95" fill="currentColor" fontFamily="serif" fontSize="14" italic>L</text>
    
    <path d="M 60 50 A 60 60 0 0 1 100 45" fill="none" stroke="currentColor" strokeWidth="2" />
    <polygon points="100,45 92,40 95,50" fill="currentColor" />
    <text x="75" y="40" fill="currentColor" fontFamily="serif" fontSize="14" italic>ω</text>
  </svg>
);

const FallingSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto max-h-48 text-on-surface">
    <line x1="20" y1="180" x2="180" y2="180" stroke="currentColor" strokeWidth="4" />
    <rect x="40" y="40" width="40" height="140" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="2" />
    <circle cx="95" cy="80" r="8" fill="#ef4444" />
    <line x1="95" y1="40" x2="95" y2="180" stroke="currentColor" strokeDasharray="3" />
    <path d="M 95 95 L 95 115 M 90 110 L 95 115 L 100 110" fill="none" stroke="#ef4444" strokeWidth="2" />
    
    <circle cx="160" cy="170" r="4" fill="currentColor" />
    <line x1="95" y1="80" x2="160" y2="170" stroke="currentColor" strokeDasharray="3" strokeWidth="2" />
    
    <text x="105" y="105" fill="currentColor" fontFamily="serif" fontSize="14" italic>s(t)</text>
    <text x="125" y="125" fill="currentColor" fontFamily="serif" fontSize="14" italic>D</text>
    <text x="165" y="165" fill="currentColor" fontFamily="serif" fontSize="12" italic>Observer</text>
  </svg>
);

const SphereSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto max-h-48 text-on-surface">
    <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="4" />
    <ellipse cx="100" cy="100" rx="70" ry="20" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
    <path d="M 30 100 A 70 20 0 0 0 170 100" fill="none" stroke="currentColor" strokeWidth="2" />
    
    <circle cx="100" cy="100" r="4" fill="currentColor" />
    <line x1="100" y1="100" x2="155" y2="140" stroke="currentColor" strokeWidth="2" />
    <text x="120" y="115" fill="currentColor" fontFamily="serif" fontSize="18" italic>r</text>
    
    {/* Expansion arrows */}
    <path d="M 180 100 L 195 100 M 190 95 L 195 100 L 190 105" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M 20 100 L 5 100 M 10 95 L 5 100 L 10 105" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M 100 20 L 100 5 M 95 10 L 100 5 L 105 10" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M 100 180 L 100 195 M 95 190 L 100 195 L 105 190" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
);
