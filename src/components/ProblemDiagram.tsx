import React from 'react';
import { motion } from 'motion/react';
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
  const isEconomics = s.includes('profit') || s.includes('revenue') || s.includes('marginal') || s.includes('cost') || s.includes('economics');
  const isPulley = s.includes('pulley') || s.includes('winch') || s.includes('dock') || s.includes('rope');
  const isVector = s.includes('law of cosines') || s.includes('non-right') || s.includes('bearing') || s.includes('angle of') && s.includes('degrees');
  const isBeam = s.includes('beam') || s.includes('stiffness') || s.includes('strength') || s.includes('log');
  const isLightIntensity = s.includes('illumination') || s.includes('intensity') || (s.includes('light') && s.includes('source') && s.includes('surface'));
  const isCone = (s.includes('conical') || s.includes('cone')) && (s.includes('tank') || s.includes('water') || s.includes('flow'));
  const isTrough = s.includes('trough');
  const isCylinder = s.includes('cylinder') || s.includes('cylindrical') || (isOptimization && s.includes('can'));
  const isShip = s.includes('ship') || s.includes('boat') || s.includes('car') || s.includes('train') || s.includes('airplane') || s.includes('bicycle') || s.includes('bike');
  const isSphere = s.includes('sphere') || s.includes('spherical') || s.includes('balloon');
  const isKite = s.includes('kite');
  const isRectangle = s.includes('rectangle') && !s.includes('inscribe');
  const isTriangle = s.includes('triangle');
  const isCircle = s.includes('circle') && !s.includes('inscribe');
  const isSquare = s.includes('square');
  const isEllipse = s.includes('oval') || s.includes('ellipse');
  const isTrapezoid = s.includes('trapezoid') || s.includes('trapezium');
  const isCube = s.includes('cube') || s.includes('hexahedron');
  const isTorus = s.includes('torus');
  const isBox = isOptimization && (s.includes('box') || s.includes('cardboard') || s.includes('rectangular box'));
  const isFence = isOptimization && (s.includes('fence') || s.includes('fencing') || s.includes('field') || s.includes('enclose'));
  const isGas = s.includes('gas') || s.includes('pressure') || s.includes('atmosphere') || s.includes('ideal gas') || s.includes('isothermal') || s.includes('adiabatic');
  const isPerspective = s.includes('perspective') || s.includes('apparent size') || s.includes('subtend') || s.includes('viewing distance');
  const isMultiObject = s.includes('multiple objects') || s.includes('collision') || s.includes('interaction') || (s.includes('link') && s.includes('rod'));
  const isFalling = s.includes('dropped') || s.includes('thrown') || s.includes('falls') || s.includes('height equation');
  const isRotation = s.includes('rotates') || s.includes('rotate') || s.includes('wheel') || s.includes('rad/s') || s.includes('angular') || s.includes('pulley') || s.includes('spin');
  const isInscribedCirc = (s.includes('inscribe') || s.includes('rectangle') || s.includes('square')) && (s.includes('circle') || s.includes('semicircle'));
  const isCurve = isOptimization && (s.includes('parabola') || s.includes('curve') || s.includes('closest'));

  let Diagram = null;
  if (isRectangle) Diagram = RectangleSVG;
  else if (isTriangle) Diagram = TriangleSVG;
  else if (isCircle) Diagram = CircleSVG;
  else if (isSquare) Diagram = SquareSVG;
  else if (isEllipse) Diagram = EllipseSVG;
  else if (isTrapezoid) Diagram = TrapezoidSVG;
  else if (isCube) Diagram = CubeSVG;
  else if (isTorus) Diagram = TorusSVG;
  else if (isGas) Diagram = GasSVG;
  else if (isPerspective) Diagram = PerspectiveSVG;
  else if (isMultiObject) Diagram = MultiObjectSVG;
  else if (isBox) Diagram = BoxSVG;
  else if (isFence) Diagram = FenceSVG;
  else if (isFalling) Diagram = FallingSVG;
  else if (isRotation) Diagram = RotationSVG;
  else if (isInscribedCirc) Diagram = CircleInscribedSVG;
  else if (isCurve) Diagram = CurveSVG;
  else if (isCorridor) Diagram = CorridorSVG;
  else if (isShadow) Diagram = ShadowSVG;
  else if (isEconomics) Diagram = EconomicsSVG;
  else if (isPulley) Diagram = PulleySVG;
  else if (isVector) Diagram = VectorSVG;
  else if (isBeam) Diagram = BeamSVG;
  else if (isLightIntensity) Diagram = LightIntensitySVG;
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

const GasSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto max-h-48 text-on-surface overflow-visible">
    <rect x="50" y="40" width="100" height="140" fill="none" stroke="currentColor" strokeWidth="4" />
    <motion.rect 
      x="52" y="60" width="96" height="118" 
      fill="#3b82f6" fillOpacity="0.2" 
      animate={{ y: [60, 100, 60], height: [118, 78, 118] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.line 
      x1="50" y1="60" x2="150" y2="60" 
      stroke="currentColor" strokeWidth="6"
      animate={{ y: [60, 100, 60] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
    <text x="55" y="30" fill="currentColor" fontFamily="serif" fontSize="14" fontStyle="italic">P, V, T</text>
  </svg>
);

const PerspectiveSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto max-h-48 text-on-surface overflow-visible">
    <circle cx="30" cy="100" r="10" fill="none" stroke="currentColor" strokeWidth="2" /> {/* Eye */}
    <circle cx="30" cy="100" r="3" fill="currentColor" />
    
    <line x1="160" y1="40" x2="160" y2="160" stroke="currentColor" strokeWidth="6" /> {/* Object */}
    
    <motion.g opacity="0.4">
      <line x1="30" y1="100" x2="160" y2="40" stroke="currentColor" strokeWidth="1" strokeDasharray="4" />
      <line x1="30" y1="100" x2="160" y2="160" stroke="currentColor" strokeWidth="1" strokeDasharray="4" />
    </motion.g>
    
    {/* Angle */}
    <path d="M 50 92 A 25 25 0 0 1 50 108" fill="none" stroke="#ef4444" strokeWidth="2" />
    <text x="60" y="105" fill="#ef4444" fontSize="14">θ</text>
    <text x="170" y="105" fill="currentColor" fontFamily="serif" fontSize="16" fontStyle="italic">H</text>
    <line x1="30" y1="115" x2="160" y2="115" stroke="currentColor" strokeWidth="1" strokeDasharray="2" />
    <text x="90" y="130" fill="currentColor" fontFamily="serif" fontSize="14" fontStyle="italic">x</text>
  </svg>
);

const MultiObjectSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto max-h-48 text-on-surface overflow-visible">
    <motion.circle cx="60" cy="100" r="15" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="3"
      animate={{ x: [0, 40, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.circle cx="140" cy="100" r="15" fill="#ef4444" fillOpacity="0.3" stroke="#ef4444" strokeWidth="3"
      animate={{ x: [0, -40, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />
    <text x="60" y="130" fill="#3b82f6" fontSize="12" textAnchor="middle">Obj A</text>
    <text x="140" y="130" fill="#ef4444" fontSize="12" textAnchor="middle">Obj B</text>
  </svg>
);

const LightIntensitySVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto max-h-48 text-on-surface overflow-visible">
    <line x1="20" y1="180" x2="180" y2="180" stroke="currentColor" strokeWidth="4" />
    <motion.circle cx="100" cy="40" r="8" fill="#f59e0b" animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 2, repeat: Infinity }} />
    {/* Light rays */}
    <g opacity="0.3">
      <line x1="100" y1="40" x2="40" y2="180" stroke="#f59e0b" strokeWidth="1" />
      <line x1="100" y1="40" x2="100" y2="180" stroke="#f59e0b" strokeWidth="1" />
      <line x1="100" y1="40" x2="160" y2="180" stroke="#f59e0b" strokeWidth="1" />
    </g>
    <motion.circle cx="140" cy="180" r="4" fill="currentColor" animate={{ x: [100, 170, 100] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
    <text x="105" y="35" fill="#f59e0b" fontFamily="serif" fontSize="14" fontStyle="italic">S</text>
    <text x="145" y="195" fill="currentColor" fontFamily="serif" fontSize="14" fontStyle="italic">P</text>
  </svg>
);

const BeamSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto max-h-48 text-on-surface overflow-visible">
    <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="4" opacity="0.4" />
    <rect x="60" y="50" width="80" height="100" fill="none" stroke="currentColor" strokeWidth="4" />
    <line x1="100" y1="100" x2="140" y2="150" stroke="currentColor" strokeDasharray="4" />
    <text x="105" y="125" fill="currentColor" fontFamily="serif" fontSize="14" fontStyle="italic">R</text>
    <text x="100" y="45" fill="currentColor" fontFamily="serif" fontSize="14" fontStyle="italic">w</text>
    <text x="145" y="105" fill="currentColor" fontFamily="serif" fontSize="14" fontStyle="italic">h</text>
  </svg>
);

const VectorSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto max-h-48 text-on-surface overflow-visible">
    <path d="M 40 160 L 160 160 L 140 60 Z" fill="none" stroke="currentColor" strokeWidth="3" />
    <text x="100" y="175" fill="currentColor" fontFamily="serif" fontSize="14" fontStyle="italic">a</text>
    <text x="155" y="110" fill="currentColor" fontFamily="serif" fontSize="14" fontStyle="italic">b</text>
    <text x="80" y="100" fill="currentColor" fontFamily="serif" fontSize="14" fontStyle="italic">c</text>
    {/* Angle indicator */}
    <path d="M 145 160 A 15 15 0 0 0 138 150" fill="none" stroke="#ef4444" strokeWidth="2" />
    <text x="125" y="155" fill="#ef4444" fontSize="12">θ</text>
  </svg>
);

const PulleySVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto max-h-48 text-on-surface overflow-visible">
    <circle cx="100" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="3" />
    <circle cx="100" cy="40" r="3" fill="currentColor" />
    <rect x="130" y="100" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="3" />
    <motion.g animate={{ y: [-20, 20, -20] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
      <line x1="85" y1="40" x2="85" y2="150" stroke="currentColor" strokeWidth="2" />
      <rect x="70" y="150" width="30" height="30" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="2" />
    </motion.g>
    <line x1="115" y1="40" x2="145" y2="100" stroke="currentColor" strokeWidth="2" />
    <text x="165" y="120" fill="currentColor" fontSize="14" fontStyle="italic">M</text>
    <text x="50" y="170" fill="currentColor" fontSize="14" fontStyle="italic">load</text>
  </svg>
);

const EconomicsSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto max-h-48 text-on-surface overflow-visible">
    <line x1="20" y1="20" x2="20" y2="180" stroke="currentColor" strokeWidth="2" />
    <line x1="20" y1="180" x2="180" y2="180" stroke="currentColor" strokeWidth="2" />
    
    {/* Demand curve */}
    <path d="M 40 40 Q 100 100 160 160" fill="none" stroke="#ef4444" strokeWidth="3" />
    {/* Supply curve */}
    <path d="M 40 160 Q 100 100 160 40" fill="none" stroke="#3b82f6" strokeWidth="3" />
    
    <motion.circle cx="100" cy="100" r="5" fill="currentColor" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity }} />
    
    <text x="165" y="165" fill="#ef4444" fontSize="12">D</text>
    <text x="165" y="45" fill="#3b82f6" fontSize="12">S</text>
    <text x="5" y="25" fill="currentColor" fontSize="10">Price</text>
    <text x="160" y="195" fill="currentColor" fontSize="10">Qty</text>
  </svg>
);

const CorridorSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto max-h-48 text-on-surface overflow-visible">
    {/* Outer walls */}
    <path d="M 20 20 L 20 180 L 180 180" fill="none" stroke="currentColor" strokeWidth="4" />
    {/* Inner walls */}
    <path d="M 80 20 L 80 120 L 180 120" fill="none" stroke="currentColor" strokeWidth="4" />
    
    {/* Pipe pivoting around inner corner (80, 120) */}
    <motion.line 
      x1="20" y1="60" x2="140" y2="180" 
      stroke="#3b82f6" strokeWidth="6" strokeLinecap="round" 
      style={{ originX: "80px", originY: "120px" }}
      animate={{ rotate: [-10, 10, -10] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
    
    {/* Corridor widths */}
    <line x1="20" y1="30" x2="80" y2="30" stroke="currentColor" strokeWidth="1" strokeDasharray="3" />
    <line x1="160" y1="120" x2="160" y2="180" stroke="currentColor" strokeWidth="1" strokeDasharray="3" />
    
      <text x="45" y="25" fill="currentColor" fontFamily="serif" fontSize="14" fontStyle="italic">w₁</text>
      <text x="165" y="155" fill="currentColor" fontFamily="serif" fontSize="14" fontStyle="italic">w₂</text>
  </svg>
);

const ShadowSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto max-h-48 text-on-surface overflow-visible">
    <line x1="10" y1="180" x2="190" y2="180" stroke="currentColor" strokeWidth="4" /> {/* Ground */}
    <line x1="40" y1="40" x2="40" y2="180" stroke="#f59e0b" strokeWidth="6" strokeLinecap="round" /> {/* Lamp */}
    <circle cx="40" cy="40" r="6" fill="#f59e0b" /> {/* Light */}
    
    {/* Moving Person */}
    <motion.line 
      x1="110" y1="110" x2="110" y2="180" stroke="currentColor" strokeWidth="6" strokeLinecap="round" 
      animate={{ x: [-20, 20, -20] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
    
    {/* Dynamic Ray */}
    <line x1="40" y1="40" x2="180" y2="180" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4" />
    
    <text x="20" y="115" fill="currentColor" fontFamily="serif" fontSize="16" fontStyle="italic">H</text>
    <motion.text 
      y="150" fill="currentColor" fontFamily="serif" fontSize="16" fontStyle="italic"
      animate={{ x: [95, 135, 95] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      h
    </motion.text>
    {/* Distance brackets/text */}
    <text x="70" y="195" fill="currentColor" fontFamily="serif" fontSize="14" fontStyle="italic">x</text>
    <text x="140" y="195" fill="currentColor" fontFamily="serif" fontSize="14" fontStyle="italic">s</text>
  </svg>
);

const ConeSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto max-h-48 text-on-surface">
    {/* Outline */}
    <path d="M 100 180 L 20 40 L 180 40 Z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
    <ellipse cx="100" cy="40" rx="80" ry="15" fill="none" stroke="currentColor" strokeWidth="4" />
    
    {/* Animated Water */}
    <motion.g
      animate={{ y: [0, 20, 0], scale: [1, 0.8, 1], transformOrigin: "100px 180px" }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <path d="M 100 180 L 60 110 L 140 110 Z" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="2" />
      <ellipse cx="100" cy="110" rx="40" ry="8" fill="#3b82f6" fillOpacity="0.5" stroke="#3b82f6" strokeWidth="2" />
    </motion.g>
    
    {/* Axis / heights */}
    <line x1="100" y1="40" x2="100" y2="180" stroke="currentColor" strokeDasharray="4" strokeWidth="1" />
    <text x="105" y="80" fill="currentColor" fontFamily="serif" fontSize="14" fontStyle="italic">H</text>
    <text x="85" y="150" fill="currentColor" fontFamily="serif" fontSize="14" fontStyle="italic">h</text>
    
    {/* Radii */}
    <line x1="100" y1="40" x2="180" y2="40" stroke="currentColor" strokeDasharray="2" strokeWidth="1" />
    <text x="135" y="35" fill="currentColor" fontFamily="serif" fontSize="14" fontStyle="italic">R</text>
    <line x1="100" y1="110" x2="140" y2="110" stroke="currentColor" strokeDasharray="2" strokeWidth="1" />
    <text x="115" y="105" fill="currentColor" fontFamily="serif" fontSize="14" fontStyle="italic">r</text>
  </svg>
);

const LadderSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto max-h-48 text-on-surface overflow-visible">
    <line x1="40" y1="20" x2="40" y2="160" stroke="currentColor" strokeWidth="4" /> {/* Wall */}
    <line x1="20" y1="160" x2="180" y2="160" stroke="currentColor" strokeWidth="4" /> {/* Floor */}
    
    <motion.line 
      x1="40" y1="60" x2="120" y2="160" 
      stroke="#10b981" strokeWidth="8" strokeLinecap="round"
      animate={{ x1: 40, x2:[120, 140, 120], y1:[60, 80, 60], y2: 160 }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />
    
    <motion.text x="65" y="105" fill="#10b981" fontFamily="serif" fontSize="18" fontStyle="italic"
      animate={{ y: [105, 115, 105], x: [65, 80, 65] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      L
    </motion.text>
    
    <text x="25" y="120" fill="currentColor" fontFamily="serif" fontSize="16" fontStyle="italic">y</text>
    <text x="80" y="180" fill="currentColor" fontFamily="serif" fontSize="16" fontStyle="italic">x</text>
    
    {/* Velocity arrows */}
    <motion.path d="M 130 165 L 150 165 L 145 160 M 150 165 L 145 170" fill="none" stroke="currentColor" strokeWidth="2" 
      animate={{ x: [0, 10, 0] }} transition={{ duration: 3, repeat: Infinity }} />
    <text x="135" y="185" fill="currentColor" fontSize="12" fontFamily="serif" fontStyle="italic">dx/dt</text>
    
    <motion.path d="M 30 70 L 30 90 L 25 85 M 30 90 L 35 85" fill="none" stroke="currentColor" strokeWidth="2" 
      animate={{ y: [0, 10, 0] }} transition={{ duration: 3, repeat: Infinity }} />
    <text x="5" y="85" fill="currentColor" fontSize="12" fontFamily="serif" fontStyle="italic">dy/dt</text>
  </svg>
);

const IntersectionSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto max-h-48 text-on-surface overflow-visible">
    <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" strokeDasharray="4" strokeWidth="2" opacity="0.5" />
    <line x1="20" y1="100" x2="180" y2="100" stroke="currentColor" strokeDasharray="4" strokeWidth="2" opacity="0.5" />
    
    <motion.circle cx="100" cy="50" r="8" fill="#ef4444" 
      animate={{ cy: [20, 80, 20] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.circle cx="160" cy="100" r="8" fill="#3b82f6" 
      animate={{ cx: [180, 120, 180] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
    
    {/* Distance S */}
    <line x1="100" y1="50" x2="160" y2="100" stroke="currentColor" strokeWidth="2" strokeDasharray="2" />
    
    <text x="135" y="70" fill="currentColor" fontFamily="serif" fontSize="16" fontStyle="italic">s</text>
    <text x="85" y="75" fill="currentColor" fontFamily="serif" fontSize="16" fontStyle="italic">y</text>
    <text x="125" y="118" fill="currentColor" fontFamily="serif" fontSize="16" fontStyle="italic">x</text>
  </svg>
);

const TroughSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto max-h-48 text-on-surface overflow-visible">
    <path d="M 40 60 L 140 60 L 160 140 L 60 140 Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
    <path d="M 40 60 L 60 140" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4" />
    <motion.g animate={{ y: [0, 20, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
      <line x1="30" y1="80" x2="130" y2="80" stroke="#3b82f6" strokeWidth="3" />
      <polygon points="30,80 130,80 150,140 50,140" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="1" />
    </motion.g>
    <text x="90" y="55" fill="currentColor" fontFamily="serif" fontSize="14" fontStyle="italic">L</text>
    <text x="150" y="100" fill="currentColor" fontFamily="serif" fontSize="14" fontStyle="italic">h</text>
  </svg>
);

const CylinderSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto max-h-48 text-on-surface overflow-visible">
    <motion.g animate={{ scaleY: [1, 1.1, 1], scaleX: [1, 0.95, 1], transformOrigin: "100px 160px" }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
      <ellipse cx="100" cy="40" rx="60" ry="15" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M 40 40 L 40 160 A 60 15 0 0 0 160 160 L 160 40" fill="none" stroke="currentColor" strokeWidth="3" />
      <ellipse cx="100" cy="160" rx="60" ry="15" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
      <line x1="100" y1="40" x2="160" y2="40" stroke="currentColor" strokeWidth="2" strokeDasharray="3" />
      <text x="125" y="35" fill="currentColor" fontFamily="serif" fontSize="14" fontStyle="italic">r</text>
      <line x1="180" y1="40" x2="180" y2="160" stroke="currentColor" strokeWidth="1" />
      <text x="185" y="105" fill="currentColor" fontFamily="serif" fontSize="14" fontStyle="italic">h</text>
    </motion.g>
  </svg>
);

const BoxSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto max-h-48 text-on-surface overflow-visible">
    <rect x="40" y="60" width="120" height="80" fill="none" stroke="currentColor" strokeWidth="3" />
    
    <motion.g animate={{ scale: [1, 0.4, 1] }} style={{ transformOrigin: '50px 70px' }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
      <rect x="40" y="60" width="20" height="20" fill="currentColor" opacity="0.2" />
    </motion.g>
    <motion.g animate={{ scale: [1, 0.4, 1] }} style={{ transformOrigin: '150px 70px' }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
      <rect x="140" y="60" width="20" height="20" fill="currentColor" opacity="0.2" />
    </motion.g>
    <motion.g animate={{ scale: [1, 0.4, 1] }} style={{ transformOrigin: '50px 130px' }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
      <rect x="40" y="120" width="20" height="20" fill="currentColor" opacity="0.2" />
    </motion.g>
    <motion.g animate={{ scale: [1, 0.4, 1] }} style={{ transformOrigin: '150px 130px' }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
      <rect x="140" y="120" width="20" height="20" fill="currentColor" opacity="0.2" />
    </motion.g>

    <line x1="60" y1="60" x2="60" y2="140" stroke="currentColor" strokeDasharray="4" />
    <line x1="140" y1="60" x2="140" y2="140" stroke="currentColor" strokeDasharray="4" />
    <line x1="40" y1="80" x2="160" y2="80" stroke="currentColor" strokeDasharray="4" />
    <line x1="40" y1="120" x2="160" y2="120" stroke="currentColor" strokeDasharray="4" />
    <text x="45" y="75" fill="currentColor" fontFamily="serif" fontSize="12" fontStyle="italic">x</text>
    <text x="100" y="55" fill="currentColor" fontFamily="serif" fontSize="14" fontStyle="italic">L</text>
    <text x="25" y="105" fill="currentColor" fontFamily="serif" fontSize="14" fontStyle="italic">W</text>
  </svg>
);

const FenceSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto max-h-48 text-on-surface overflow-visible">
    <rect x="40" y="50" width="120" height="100" fill="none" stroke="currentColor" strokeWidth="4" />
    <motion.line x1="80" y1="50" x2="80" y2="150" stroke="currentColor" strokeWidth="2" strokeDasharray="4" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
    <motion.line x1="120" y1="50" x2="120" y2="150" stroke="currentColor" strokeWidth="2" strokeDasharray="4" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 2, delay: 1, repeat: Infinity, ease: "easeInOut" }} />
    <text x="100" y="40" fill="currentColor" fontFamily="serif" fontSize="14" fontStyle="italic">y</text>
    <text x="25" y="100" fill="currentColor" fontFamily="serif" fontSize="14" fontStyle="italic">x</text>
  </svg>
);

const KiteSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto max-h-48 text-on-surface overflow-visible">
    <line x1="20" y1="160" x2="180" y2="160" stroke="currentColor" strokeWidth="4" />
    <motion.g animate={{ x: [-20, 20, -20] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
      <line x1="40" y1="160" x2="140" y2="60" stroke="#f59e0b" strokeWidth="2" />
      <polygon points="140,40 150,60 140,80 130,60" fill="#f59e0b" />
      <line x1="140" y1="60" x2="140" y2="160" stroke="currentColor" strokeDasharray="4" />
      <text x="80" y="100" fill="currentColor" fontFamily="serif" fontSize="14" fontStyle="italic">s</text>
      <text x="145" y="110" fill="currentColor" fontFamily="serif" fontSize="14" fontStyle="italic">h</text>
      <text x="90" y="175" fill="currentColor" fontFamily="serif" fontSize="14" fontStyle="italic">x</text>
    </motion.g>
  </svg>
);

const CircleInscribedSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto max-h-48 text-on-surface overflow-visible">
    <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="3" />
    <motion.rect x="44" y="44" width="112" height="112" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="2" 
      style={{ transformOrigin: '100px 100px' }}
      animate={{ scale: [1, 1.25, 1], rotate: [0, 90, 180] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />
    <line x1="100" y1="100" x2="160" y2="40" stroke="currentColor" strokeDasharray="4" />
    <circle cx="100" cy="100" r="3" fill="currentColor" />
    <text x="110" y="80" fill="currentColor" fontFamily="serif" fontSize="14" fontStyle="italic">r</text>
    <text x="100" y="35" fill="currentColor" fontFamily="serif" fontSize="14" fontStyle="italic">y</text>
    <text x="170" y="105" fill="currentColor" fontFamily="serif" fontSize="14" fontStyle="italic">x</text>
  </svg>
);

const CurveSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto max-h-48 text-on-surface overflow-visible">
    <path d="M 20 180 Q 100 20 180 180" fill="none" stroke="currentColor" strokeWidth="3" />
    <line x1="10" y1="180" x2="190" y2="180" stroke="currentColor" strokeWidth="2" />
    <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" strokeDasharray="3" />
    
    <motion.g animate={{ x: [-20, 20, -20], y: [-15, 10, -15] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
      <rect x="50" y="90" width="100" height="90" fill="#10b981" fillOpacity="0.2" stroke="#10b981" strokeWidth="2" />
      <circle cx="150" cy="90" r="4" fill="currentColor" />
      <text x="160" y="85" fill="currentColor" fontFamily="serif" fontSize="12" fontStyle="italic">(x, y)</text>
    </motion.g>
    
    <text x="100" y="15" fill="currentColor" fontFamily="serif" fontSize="14" fontStyle="italic">y = f(x)</text>
  </svg>
);

const RotationSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto max-h-48 text-on-surface overflow-visible">
    <circle cx="80" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="4" />
    <circle cx="80" cy="100" r="6" fill="currentColor" />
    
    <motion.g 
      style={{ transformOrigin: "80px 100px" }}
      animate={{ rotate: 360 }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
    >
      <line x1="80" y1="100" x2="115" y2="65" stroke="currentColor" strokeWidth="3" />
      <circle cx="115" cy="65" r="4" fill="currentColor" />
    </motion.g>

    <line x1="115" y1="65" x2="180" y2="100" stroke="#f59e0b" strokeWidth="4" />
    <line x1="20" y1="100" x2="190" y2="100" stroke="currentColor" strokeDasharray="4" opacity="0.5" />
    
    <text x="110" y="95" fill="currentColor" fontFamily="serif" fontSize="14" fontStyle="italic">θ</text>
    <text x="90" y="75" fill="currentColor" fontFamily="serif" fontSize="14" fontStyle="italic">r</text>
    <text x="145" y="95" fill="currentColor" fontFamily="serif" fontSize="14" fontStyle="italic">L</text>
    
    <motion.g animate={{ rotate: 360 }} style={{ transformOrigin: '80px 100px' }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
      <path d="M 60 50 A 60 60 0 0 1 100 45" fill="none" stroke="currentColor" strokeWidth="2" />
      <polygon points="100,45 92,40 95,50" fill="currentColor" />
    </motion.g>
    <text x="75" y="40" fill="currentColor" fontFamily="serif" fontSize="14" fontStyle="italic">ω</text>
  </svg>
);

const FallingSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto max-h-48 text-on-surface overflow-visible">
    <line x1="20" y1="180" x2="180" y2="180" stroke="currentColor" strokeWidth="4" />
    <rect x="40" y="40" width="40" height="140" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="2" />
    
    <motion.circle cx="95" cy="80" r="8" fill="#ef4444" 
      animate={{ cy: [40, 180] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeIn" }}
    />
    
    <line x1="95" y1="40" x2="95" y2="180" stroke="currentColor" strokeDasharray="3" />
    
    <circle cx="160" cy="170" r="4" fill="currentColor" />
    
    <text x="105" y="105" fill="currentColor" fontFamily="serif" fontSize="14" fontStyle="italic">s(t)</text>
    <text x="125" y="125" fill="currentColor" fontFamily="serif" fontSize="14" fontStyle="italic">D</text>
    <text x="165" y="165" fill="currentColor" fontFamily="serif" fontSize="12" fontStyle="italic">Observer</text>
  </svg>
);

const RectangleSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto max-h-48 text-on-surface">
    <rect x="40" y="60" width="120" height="80" fill="none" stroke="currentColor" strokeWidth="4" />
    <text x="100" y="50" fill="currentColor" fontFamily="serif" fontSize="16" fontStyle="italic">l</text>
    <text x="170" y="100" fill="currentColor" fontFamily="serif" fontSize="16" fontStyle="italic">w</text>
  </svg>
);

const TriangleSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto max-h-48 text-on-surface">
    <path d="M 40 160 L 160 160 L 100 40 Z" fill="none" stroke="currentColor" strokeWidth="4" />
    <text x="100" y="175" fill="currentColor" fontFamily="serif" fontSize="16" fontStyle="italic">b</text>
    <text x="115" y="100" fill="currentColor" fontFamily="serif" fontSize="16" fontStyle="italic">h</text>
  </svg>
);

const CircleSVG = () => (
   <svg viewBox="0 0 200 200" className="w-full h-auto max-h-48 text-on-surface">
    <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="4" />
    <circle cx="100" cy="100" r="4" fill="currentColor" />
    <line x1="100" y1="100" x2="160" y2="100" stroke="currentColor" strokeWidth="2" />
    <text x="130" y="90" fill="currentColor" fontFamily="serif" fontSize="16" fontStyle="italic">r</text>
  </svg>
);

const SphereSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto max-h-48 text-on-surface overflow-visible">
    <motion.g animate={{ scale: [0.8, 1.1, 0.8] }} style={{ transformOrigin: "100px 100px" }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
      <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="4" />
      <ellipse cx="100" cy="100" rx="70" ry="20" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
      <path d="M 30 100 A 70 20 0 0 0 170 100" fill="none" stroke="currentColor" strokeWidth="2" />
      
      <circle cx="100" cy="100" r="4" fill="currentColor" />
      <line x1="100" y1="100" x2="155" y2="140" stroke="currentColor" strokeWidth="2" />
      <text x="120" y="115" fill="currentColor" fontFamily="serif" fontSize="18" fontStyle="italic">r</text>
    </motion.g>
    
    {/* Expansion arrows */}
    <motion.g animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }} style={{ transformOrigin: '100px 100px' }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
      <path d="M 180 100 L 195 100 M 190 95 L 195 100 L 190 105" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M 20 100 L 5 100 M 10 95 L 5 100 L 10 105" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M 100 20 L 100 5 M 95 10 L 100 5 L 105 10" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M 100 180 L 100 195 M 95 190 L 100 195 L 105 190" fill="none" stroke="currentColor" strokeWidth="2" />
    </motion.g>
  </svg>
);

const SquareSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto max-h-48 text-on-surface">
    <rect x="50" y="50" width="100" height="100" fill="none" stroke="currentColor" strokeWidth="4" />
    <text x="100" y="170" fill="currentColor" fontFamily="serif" fontSize="16" fontStyle="italic">s</text>
  </svg>
);

const EllipseSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto max-h-48 text-on-surface">
    <ellipse cx="100" cy="100" rx="80" ry="50" fill="none" stroke="currentColor" strokeWidth="4" />
    <text x="100" y="100" fill="currentColor" fontFamily="serif" fontSize="16" fontStyle="italic">a, b</text>
  </svg>
);

const TrapezoidSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-auto max-h-48 text-on-surface">
    <path d="M 50 160 L 150 160 L 130 60 L 70 60 Z" fill="none" stroke="currentColor" strokeWidth="4" />
    <text x="100" y="175" fill="currentColor" fontFamily="serif" fontSize="16" fontStyle="italic">b₁, b₂</text>
    <text x="70" y="110" fill="currentColor" fontFamily="serif" fontSize="16" fontStyle="italic">h</text>
  </svg>
);

const CubeSVG = () => (
    <svg viewBox="0 0 200 200" className="w-full h-auto max-h-48 text-on-surface">
        <rect x="50" y="50" width="70" height="70" fill="none" stroke="currentColor" strokeWidth="4" />
        <rect x="80" y="80" width="70" height="70" fill="none" stroke="currentColor" strokeWidth="4" />
        <line x1="50" y1="50" x2="80" y2="80" stroke="currentColor" strokeWidth="2" />
        <line x1="120" y1="50" x2="150" y2="80" stroke="currentColor" strokeWidth="2" />
        <line x1="50" y1="120" x2="80" y2="150" stroke="currentColor" strokeWidth="2" />
        <line x1="120" y1="120" x2="150" y2="150" stroke="currentColor" strokeWidth="2" />
        <text x="85" y="170" fill="currentColor" fontFamily="serif" fontSize="16" fontStyle="italic">s</text>
    </svg>
);

const TorusSVG = () => (
    <svg viewBox="0 0 200 200" className="w-full h-auto max-h-48 text-on-surface">
        <ellipse cx="100" cy="100" rx="70" ry="30" fill="none" stroke="currentColor" strokeWidth="8" />
        <ellipse cx="100" cy="100" rx="30" ry="10" fill="none" stroke="currentColor" strokeWidth="4" />
        <text x="100" y="50" fill="currentColor" fontFamily="serif" fontSize="16" fontStyle="italic">R, r</text>
    </svg>
);
